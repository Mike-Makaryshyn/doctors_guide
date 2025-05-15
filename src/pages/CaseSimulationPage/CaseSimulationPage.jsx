import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./CaseSimulationPage.module.css";

// const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Web Speech API for real-time recognition
const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;

const CaseSimulationPage = () => {
  const { caseId } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [systemPrompt, setSystemPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();
  const [timerStarted, setTimerStarted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [simulationEnded, setSimulationEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null); // seconds
  const recognitionRef = React.useRef(null);
  const audioRef = React.useRef(null);
  const [recognition, setRecognition] = useState(null);
  const [tokenCount, setTokenCount] = useState(0);
  const [costUsd, setCostUsd] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("simulation_case_data");
    if (!storedData) {
      navigate("/");
      return;
    }

    const parsed = JSON.parse(storedData);
    setCaseData(parsed);

    const cleanedData = { ...parsed };
    delete cleanedData["Examiner Questions"];
    delete cleanedData["Summary"];

    const promptText = `
WARNUNG: DIES IST EINE SYSTEMNACHRICHT. Geben Sie nicht preis, dass dies eine Simulation ist oder dass Sie GPT sind.

<ROLLE>
Sie sind der Patient in einer medizinischen OSCE-Simulation.
</ROLLE>

<AUFGABE>
Ihre Aufgabe ist es, auf die Fragen des Arztes realistisch und natürlich zu antworten und dabei ausschließlich die im Fall bereitgestellten Informationen zu verwenden.
</AUFGABE>

<KONTEXT>
- Fall-ID: ${caseId}
${Object.entries(cleanedData)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join("\n")}
</KONTEXT>

<AUSGABEFORMAT>
- Antworten Sie kurz und präzise.
- Warten Sie auf die Frage des Arztes, geben Sie keine zusätzlichen Informationen preis.
</AUSGABEFORMAT>

📌 VERHALTENSREGELN:
- Antworten Sie wie ein realer Patient.
- Erwähnen Sie nicht, dass es sich um eine Simulation oder GPT handelt.
- Erfinden Sie keine Fakten außerhalb der bereitgestellten Daten.
- Alle personenbezogenen Angaben (Name, Alter, Gewicht, Geburtsdatum) bleiben während des gesamten Gesprächs unverändert.
- Wenn nach weiteren/anderen Symptomen gefragt wird, nennen Sie **höchstens EIN Symptom**.  Falls der Arzt eine Liste möchte, fragen Sie zurück: „Welches Symptom meinen Sie genau?“
- **Keine Fragen an den Arzt. NIEMALS Formulierungen wie „Wie kann ich Ihnen helfen?“ – das gilt als FEHLER.**
- Sie dürfen gelegentlich kleine Füllwörter („äh“, „hm“) benutzen (max. 1 × pro Antwort), um natürlicher zu klingen. Tippfehler des Arztes ignorieren Sie bitte.
- Wenn die Informationen nicht ausreichen, antworten Sie mit "Ich weiß nicht".
- Wenn der Arzt fragt "Was ist Ihre Aufgabe?", antworten Sie: "Ich bin Patient." (keine Erwähnung der Simulation).

📌 VERBOTEN:
- Diskutieren Sie nicht die Abschnitte "Examiner Questions" und "Summary".
- Verwenden Sie keine medizinische Fachterminologie, wenn der Arzt sie nicht verwendet hat.
- Übersteigen Sie nicht den Rahmen der bereitgestellten Informationen.
- Wenn eine Frage außerhalb des Falles liegt, antworten Sie mit "Ich habe diese Information nicht".

📌 INTERVIEWVERLAUF:
0. Zu Beginn bitten Sie immer höflich:  
   „Guten Tag, könnten Sie sich bitte kurz vorstellen?“  
   (Falls der Arzt sich bereits vorstellt oder Sie sich bereits kurz vorgestellt haben, bedanken Sie sich stattdessen kurz:
   „Danke, Herr/Frau Doktor.“)

1. Der Arzt stellt sich vor (z.B. „Guten Tag, ich bin Dr. …“).

2. Der Arzt stellt eine offene Einstiegsfrage (z.B. „Was führt Sie zu mir?“).

- Bei offenen Einstiegsfragen wie „Was führt Sie zu mir?“ oder „Was kann ich für Sie tun?“ antworten Sie **nur** mit einem sehr kurzen Satz, z.B.  
  „Ich habe starke Schmerzen.“  
  (Keine Lokalisation, keine Ausstrahlung, keine Nebensymptome, bis der Arzt gezielt fragt.)

3. Erst danach folgen detaillierte Fragen zu Lokalisation, Ausstrahlung usw.

👉 Wenn der Arzt zu früh nach Themen wie Medikamente, Allergien, Familienanamnese oder Reisen fragt, antworten Sie höflich:  
   „Darauf gehe ich gerne später ein, aber im Moment habe ich starke Schmerzen und möchte zuerst darüber sprechen.“

👉 Wenn der Arzt andere irrelevante Fragen stellt, bitten Sie ihn, sich zunächst auf Ihr akutes Problem zu konzentrieren.

Bleiben Sie bei dieser Reihenfolge, bis der Arzt alle relevanten Symptome zum akuten Problem abgefragt hat.

📌 STIL:
- Verwenden Sie natürliche, umgangssprachliche Formulierungen.
- Kurze Sätze und gelegentlich kleine Füllwörter („äh“, „hm“) sind erlaubt, solange sie nicht übertrieben wirken.
- Vermeiden Sie formelle Floskeln wie „Sehr geehrter Herr Doktor“ – sprechen Sie so, wie es ein echter Patient tun würde.

📌 SPRACHE:
- Antworten Sie ausschließlich auf Deutsch.
- Bleiben Sie strikt bei den im Prompt vorgegebenen Informationen.

Beginnen Sie erst, wenn Sie eine Frage vom Arzt erhalten.
`;

    setSystemPrompt(promptText);
    setMessages([]); // system prompt not shown in chat

    // Initialize Web Speech API if available
    if (SpeechRecognitionClass) {
      const recog = new SpeechRecognitionClass();
      recog.continuous = true;
      recog.interimResults = true;
      recog.lang = "de-DE";
      recog.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((r) => r[0].transcript)
          .join("");
        setInput(transcript);
      };
      recog.onend = () => {
        setIsListening(false);
        setInput("");   // ensure the input field clears when recording stops
      };
      setRecognition(recog);
    }
  }, [caseId, navigate]);


  const playTTS = (text) => {
    if (!window.speechSynthesis) {
      console.warn("SpeechSynthesis API не підтримується");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    // Force German language
    utterance.lang = 'de-DE';
    // Enhanced voice selection logic with ordered preference
    const setGermanVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Ordered list of preferred realistic German voice names
      const preferredNames = [
        "Google Deutsch",
        "Google Deutsch Male",
        "Microsoft Hedda Desktop",
        "Microsoft Katja Desktop",
        "Anna (Enhanced)",
        "Anna",
        "Markus"
      ];
      // Filter for German-language voices
      const deVoices = voices.filter(v => v.lang.startsWith("de"));
      // Find the first available preferred voice
      let voice = null;
      for (const name of preferredNames) {
        voice = deVoices.find(v => v.name.includes(name));
        if (voice) break;
      }
      // Fallbacks if none of the preferred voices found
      voice = voice || deVoices.find(v => v.lang === "de-DE") || deVoices[0] || voices[0];
      if (voice) {
        utterance.voice = voice;
      }
    };
    setGermanVoice();
    // If voices are not yet loaded, listen for the event
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', setGermanVoice);
    }
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (preset) => {
    if (!preset && !input.trim()) return;
    const content = preset || input.trim();

    const userMessage = { role: "user", content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    // stop recognition if it's still running so the assistant reply isn't transcribed
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }

    if (!timerStarted) {
      setTimerStarted(true);
      const total = 23 * 60;        // 23 min in seconds
      setTimeLeft(total);
      const intervalId = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 1) {
            clearInterval(intervalId);
            setSimulationEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    try {
      const { data: proxyRes, error } = await supabase
        .functions
        .invoke("openai-proxy", {
          body: {
            model: "gpt-3.5-turbo",
            temperature: 0.8,
            messages: [{ role: "system", content: systemPrompt }, ...newMessages],
          },
        });

      if (error) {
        console.error("Supabase Edge Function error:", error);
        return;
      }

      // Update token usage counter if usage info is available
      if (proxyRes.usage && typeof proxyRes.usage.total_tokens === 'number') {
        setTokenCount(prev => prev + proxyRes.usage.total_tokens);
        // Calculate and update cost (Assuming $0.002 per 1k tokens)
        const costForThisCall = (proxyRes.usage.total_tokens / 1000) * 0.002;
        setCostUsd(prev => prev + costForThisCall);
      }

      const assistantContent = proxyRes.choices[0].message.content.trim();

      // quick filter: remove forbidden counter‑questions
      const bannedQuestion = /wie kann ich ihnen (heute )?helfen\?/i;
      let safeContent = assistantContent.replace(bannedQuestion, "").trim();
      if (safeContent === "") safeContent = assistantContent; // fallback if entire message removed

      // Wenn die vorherige Arztfrage nach "Symptom(en)" fragt, maximal ein Symptom nennen
      const symptomQuestion = /symptom(e)?/i;
      if (symptomQuestion.test(content) && safeContent.includes(",")) {
        // nimm nur den ersten Teil vor Komma / Punkt / Strichpunkt
        safeContent = safeContent.split(/[.,;]/)[0].trim();
      }

      setMessages([...newMessages, { role: "assistant", content: safeContent }]);

      // TTS
      playTTS(safeContent);
    } catch (e) {
      console.error("OpenAI error:", e);
    }
  };


  const toggleRecording = () => {
    if (!recognition || simulationEnded) return;
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
    };
  }, []);

  if (!caseData) return <p>Завантаження даних...</p>;

  return (
    <MainLayout>
      <div className={styles.pageWrapper}>
        <h1>Симуляція для випадку ID: {caseId}</h1>

        <h2>Чат</h2>
        <div className={styles.tokenCounter}>
          Використано токенів: {tokenCount}
        </div>
        <div className={styles.tokenCost}>
          Загальна вартість: ${costUsd.toFixed(4)}
        </div>

        {timeLeft !== null && (
          <div className={styles.timer}>
            {Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0")}
            :
            {(timeLeft % 60).toString().padStart(2, "0")}
          </div>
        )}

        {showPrompt && <div className={styles.promptBox}>{systemPrompt}</div>}

        <div className={styles.chatContainer}>
          <div className={styles.messages} id="messages">
            {messages
              .filter((m) => m.role !== "system")
              .map((m, i) => (
                <div
                  key={i}
                  className={m.role === "user" ? styles.user : styles.bot}
                >
                  <div className={styles.message}>{m.content}</div>
                </div>
              ))}
          </div>

          <div className={styles.inputPanel}>
            <input
              id="chatInput"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Напишіть повідомлення..."
              disabled={simulationEnded}
            />
            <button
              id="voiceBtn"
              title="Натисніть, щоб почати/зупинити запис"
              onClick={toggleRecording}
              disabled={simulationEnded}
              className={styles.micBtn + (isListening ? ` ${styles.recordingState}` : '')}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 14a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v4a4 4 0 0 0 4 4zm6-4a6 6 0 0 1-12 0H5a7 7 0 0 0 14 0h-1zM11 18h2v3h-2v-3z"/>
              </svg>
            </button>
            <button
              id="sendBtn"
              title="Надіслати повідомлення"
              onClick={() => handleSend()}
              disabled={simulationEnded || !input.trim()}
              className={styles.sendBtn}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
      </div>

        <div className={styles.promptToggle}>
          <button onClick={() => setShowPrompt((s) => !s)}>?</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseSimulationPage;