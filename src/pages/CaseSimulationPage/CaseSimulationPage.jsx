import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./CaseSimulationPage.module.css";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [debugInfo, setDebugInfo] = useState("");
  const recognitionRef = React.useRef(null);
  const audioRef = React.useRef(null);
  const [recognition, setRecognition] = useState(null);

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
… (тут ваші правила) …
`;
    setSystemPrompt(promptText);
    setMessages([]);

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
        setInput("");
      };
      setRecognition(recog);
    }
  }, [caseId, navigate]);

  const playTTS = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    // вибір голосу пропущений …
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (preset) => {
    if (!preset && !input.trim()) return;
    const content = preset || input.trim();
    const userMessage = { role: "user", content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
    if (!timerStarted) {
      setTimerStarted(true);
      const total = 23 * 60; // seconds
      setTimeLeft(total);
      const intervalId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(intervalId);
            setSimulationEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    // --- Debug: очистити попередні повідомлення ---
    setErrorMsg("");
    setDebugInfo("Починаю відправку...");

    try {
      const payload = {
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        messages: [{ role: "system", content: systemPrompt }, ...newMessages],
      };
      console.log("DEBUG payload:", payload);
      setDebugInfo("Payload сформовано, відправка на /api/secret-proxy");

      const res = await fetch("/api/secret-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("DEBUG статус відповіді:", res.status);
      setDebugInfo(`Статус відповіді: ${res.status}`);

      if (!res.ok) {
        const text = await res.text();
        console.error("DEBUG помилка:", text);
        setErrorMsg(`Помилка ${res.status}: ${text}`);
        return;
      }

      const data = await res.json();
      console.log("DEBUG тіло відповіді:", data);
      setDebugInfo("Успішно отримано відповідь");

      let assistantContent = data.choices[0].message.content.trim();
      // ваша фільтрація…
      setMessages([...newMessages, { role: "assistant", content: assistantContent }]);
      playTTS(assistantContent);
    } catch (e) {
      console.error("DEBUG fetch error:", e);
      setErrorMsg(`Fetch error: ${e.message}`);
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
        {timeLeft !== null && (
          <div className={styles.timer}>
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
            {String(timeLeft % 60).padStart(2, "0")}
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
                  className={`${styles.messageRow} ${
                    m.role === "user" ? styles.userRow : styles.botRow
                  }`}
                >
                  {m.role !== "user" && <div className={`${styles.avatar} ${styles.botAvatar}`}>👨‍⚕️</div>}
                  <div
                    className={`${styles.bubble} ${
                      m.role === "user" ? styles.userBubble : styles.botBubble
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.role === "user" && <div className={`${styles.avatar} ${styles.userAvatar}`}>🧑</div>}
                </div>
              ))}
          </div>

          <div className={styles.inputPanel}>
            <input
              id="chatInput"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Напишіть повідомлення..."
              disabled={simulationEnded}
            />
            <button
              id="voiceBtn"
              title="Натисніть, щоб почати/зупинити запис"
              onClick={toggleRecording}
              disabled={simulationEnded}
              className={styles.micBtn + (isListening ? ` ${styles.recordingState}` : "")}
            >
              🎤
            </button>
            <button
              id="sendBtn"
              title="Надіслати повідомлення"
              onClick={() => handleSend()}
              disabled={simulationEnded || !input.trim()}
              className={styles.sendBtn}
            >
              📨
            </button>
          </div>

          {/* Отут показуємо debug-інформацію */}
          {errorMsg && <p style={{ color: "red" }}>❌ {errorMsg}</p>}
          {debugInfo && <p style={{ color: "gray" }}>ℹ️ {debugInfo}</p>}
        </div>

        <div className={styles.promptToggle}>
          <button onClick={() => setShowPrompt((s) => !s)}>?</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseSimulationPage;
