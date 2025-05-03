import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./CaseSimulationPage.module.css";

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
  const recorderRef = React.useRef(null);
  const chunksRef = React.useRef([]);

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
- Wenn die Informationen nicht ausreichen, antworten Sie mit "Ich weiß nicht".
- Verwenden Sie einfache, alltägliche Sprache.
- Wenn der Arzt fragt "Was ist Ihre Aufgabe?", antworten Sie auf Deutsch: "Ich spiele die Rolle des Patienten in dieser Simulation."

📌 VERBOTEN:
- Diskutieren Sie nicht die Abschnitte "Examiner Questions" und "Summary".
- Verwenden Sie keine medizinische Fachterminologie, wenn der Arzt sie nicht verwendet hat.
- Übersteigen Sie nicht den Rahmen der bereitgestellten Informationen.
- Wenn eine Frage außerhalb des Falles liegt, antworten Sie mit "Ich habe diese Information nicht".

📌 INTERVIEWVERLAUF:
0. Zu Beginn bitten Sie immer höflich:  
   „Guten Tag, könnten Sie sich bitte kurz vorstellen?“  
   (Falls der Arzt sich bereits vorstellt, bedanken Sie sich stattdessen kurz:  
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
  }, [caseId, navigate]);

  const transcribeWhisper = async (blob) => {
    try {
      const formData = new FormData();
      formData.append("file", blob, "speech.webm");
      formData.append("model", "whisper-1");
      formData.append("language", "de");

      const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: formData
      });
      const data = await res.json();
      return data.text || "";
    } catch (err) {
      console.error("Whisper error:", err);
      return "";
    }
  };

  const playTTS = async (text) => {
    try {
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "tts-1",
          voice: "alloy",
          input: text,
          format: "wav"          // smaller than pcm, easy to play
        })
      });
      if (!res.ok) throw new Error("TTS request failed");
      const arrayBuf = await res.arrayBuffer();
      const blob = new Blob([arrayBuf], { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      } else {
        audioRef.current = new Audio();
      }
      audioRef.current.src = url;
      audioRef.current.play();
    } catch (err) {
      console.error("OpenAI TTS error:", err);
    }
  };

  const toggleRecording = async () => {
    if (simulationEnded) return;

    if (isListening) {
      // stop current recording
      if (recorderRef.current) recorderRef.current.stop();
      return;
    }

    // start a new recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      chunksRef.current = [];
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = async () => {
        setIsListening(false);
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const text = await transcribeWhisper(blob);
        if (text && text.trim().length > 2) {
          setInput(text.trim());
          handleSend(text.trim());
        }
        stream.getTracks().forEach((t) => t.stop());
      };
      recorder.start();
      setIsListening(true);
    } catch (err) {
      console.error("Mic error:", err);
    }
  };

  const handleSend = async (preset) => {
    if (!preset && !input.trim()) return;
    const content = preset || input.trim();

    const userMessage = { role: "user", content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

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
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4-turbo",
          temperature: 0.8,
          messages: [{ role: "system", content: systemPrompt }, ...newMessages],
        }),
      });
      const data = await res.json();
      const assistantContent = data.choices[0].message.content.trim();
      setMessages([...newMessages, { role: "assistant", content: assistantContent }]);

      // TTS
      await playTTS(assistantContent);
    } catch (e) {
      console.error("OpenAI error:", e);
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
          {messages
            .filter((m) => m.role !== "system")
            .map((m, i) => (
              <div
                key={i}
                className={`${styles.message} ${
                  m.role === "user" ? styles.user : styles.assistant
                }`}
              >
                <strong>{m.role === "user" ? "Лікар" : "Пацієнт"}:</strong> {m.content}
              </div>
            ))}
        </div>

        <div className={styles.inputWrapper}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Напишіть повідомлення..."
            disabled={simulationEnded}
          />
          <button
            className={`${styles.micBtn} ${isListening ? styles.recordingState : ""} ${simulationEnded ? styles.disabledInput : ""}`}
            onClick={toggleRecording}
            disabled={simulationEnded}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 14a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v4a4 4 0 0 0 4 4zm6-4a6 6 0 0 1-12 0H5a7 7 0 0 0 14 0h-1zM11 18h2v3h-2v-3z"/>
            </svg>
          </button>
          <button onClick={() => handleSend()} disabled={simulationEnded}>▶️</button>
        </div>

        <div className={styles.promptToggle}>
          <button onClick={() => setShowPrompt((s) => !s)}>?</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseSimulationPage;