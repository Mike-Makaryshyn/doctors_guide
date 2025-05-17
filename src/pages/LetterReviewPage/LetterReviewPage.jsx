import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import styles from "./LetterReviewPage.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {
  FaExclamationCircle,
  FaCog,
  FaInfoCircle,
  FaCloud,
  FaTimes,
} from "react-icons/fa";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const LetterReviewPage = () => {
  const { caseId: routeCaseId } = useParams();
  const location = useLocation();
  const initialParsed = location.state?.parsedData || {};
  const hasParsedData = Object.keys(initialParsed).length > 0;
  const fullNameDisplay =
    initialParsed.fullName && initialParsed.surname
      ? `${initialParsed.fullName} ${initialParsed.surname}`
      : initialParsed.fullName || initialParsed.surname || "";

  // Anamnese template
  const anamnesisTemplate =
    "aktuelle Beschwerden:\n\n\n\n\n\n\n" +
    "Vorerkrankungen:\n\n\n" +
    "OP:\n\n\n" +
    "Medikamente:\n\n\n";

  const allergiesTemplate = "Allergien:\n" + "Unverträglichkeiten:";
  const consumablesTemplate =
    "Nikotin-Abusus:\n" + "Alkohol-Abusus:\n" + "Drogen-Abusus:";

  const [letter, setLetter] = useState({
    patientAndDate: initialParsed.patientAndDate || "",
    anamnesis: initialParsed.anamnesis || anamnesisTemplate,
    allergies: initialParsed.allergies || "",
    preexistingConditions: initialParsed.preexistingConditions || "",
    medications: initialParsed.medications || "",
    consumables: initialParsed.consumables || "",
    socialHistory: initialParsed.socialHistory || "",
    familyHistory: initialParsed.familyHistory || "",
    suspectedDiagnosis: "",
    differentialDiagnosis: initialParsed.differentialDiagnosis || "",
    furtherProcedure: initialParsed.furtherProcedure || "",
    therapy: initialParsed.therapy || "",
  });

  const [patientRows, setPatientRows] = useState(2);
  const [allergiesRows, setAllergiesRows] = useState(2);
  const [consumablesRows, setConsumablesRows] = useState(2);
  const [socialHistoryRows, setSocialHistoryRows] = useState(2);
  const [familyHistoryRows, setFamilyHistoryRows] = useState(2);
  const [suspectedDiagnosisRows, setSuspectedDiagnosisRows] = useState(2);
  const suspectedDiagnosisTemplate = "Vermutete Diagnose:\n" + "Begründung:";
  const insertSuspectedDiagnosisTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      suspectedDiagnosis: prev.suspectedDiagnosis
        ? prev.suspectedDiagnosis + "\n" + suspectedDiagnosisTemplate
        : suspectedDiagnosisTemplate,
    }));
    setSuspectedDiagnosisRows(
      (prevRows) => prevRows + suspectedDiagnosisTemplate.split("\n").length
    );
  };
  const insertPatientTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      patientAndDate: prev.patientAndDate
        ? prev.patientAndDate +
          "\n" +
          [
            "Vorname: ",
            "Nachname: ",
            "Geburtsdatum: ",
            "Alter: ",
            "Gewicht: ",
            "Größe: ",
            "Hausarzt: ",
          ].join("\n")
        : [
            "Vorname: ",
            "Nachname: ",
            "Geburtsdatum: ",
            "Alter: ",
            "Gewicht: ",
            "Größe: ",
            "Hausarzt: ",
          ].join("\n"),
    }));
  };
  const insertAllergiesTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      allergies: prev.allergies
        ? prev.allergies + "\n" + allergiesTemplate
        : allergiesTemplate,
    }));
    setAllergiesRows(
      (prevRows) => prevRows + allergiesTemplate.split("\n").length
    );
  };
  const insertConsumablesTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      consumables: prev.consumables
        ? prev.consumables + "\n" + consumablesTemplate
        : consumablesTemplate,
    }));
    setConsumablesRows(
      (prevRows) => prevRows + consumablesTemplate.split("\n").length
    );
  };
  const insertDifferentialTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      differentialDiagnosis: prev.differentialDiagnosis
        ? prev.differentialDiagnosis +
          "\n" +
          ["Differentiale Diagnosen:", "Abgrenzung:"].join("\n")
        : ["Differentiale Diagnosen:", "Abgrenzung:"].join("\n"),
    }));
  };
  const insertProceduresTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      furtherProcedure: prev.furtherProcedure
        ? prev.furtherProcedure +
          "\n" +
          [
            "Körperliche Untersuchung:",
            "Laboruntersuchung:",
            "Apparative Untersuchung:",
          ].join("\n")
        : [
            "Körperliche Untersuchung:",
            "Laboruntersuchung:",
            "Apparative Untersuchung:",
          ].join("\n"),
    }));
  };
  const therapyTemplate = "Therapie:\n" + "• ";
  const insertTherapyTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      therapy: prev.therapy
        ? prev.therapy + "\nTherapie:\n• "
        : "Therapie:\n• ",
    }));
  };
  const socialHistoryTemplate =
    "Beruf:\n" +
    "Familienstand:\n" +
    "Kinder:\n" +
    "Wohnsituation:\n" +
    "Psychosomatische Anamnese/Stress:\n" +
    "Körperliche Aktivität:\n" +
    "Ernährungsgewohnheiten:";
  const familyHistoryTemplate =
    "Familiäre Erkrankungen:\n" +
    "Genetische Erkrankungen:\n" +
    "Eltern:\n" +
    "Geschwister:";
  const insertSocialHistoryTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      socialHistory: prev.socialHistory
        ? prev.socialHistory + "\n" + socialHistoryTemplate
        : socialHistoryTemplate,
    }));
    setSocialHistoryRows(
      (prevRows) => prevRows + socialHistoryTemplate.split("\n").length
    );
  };
  const insertFamilyHistoryTemplate = () => {
    setLetter((prev) => ({
      ...prev,
      familyHistory: prev.familyHistory
        ? prev.familyHistory + "\n" + familyHistoryTemplate
        : familyHistoryTemplate,
    }));
    setFamilyHistoryRows(
      (prevRows) => prevRows + familyHistoryTemplate.split("\n").length
    );
  };

  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tokenCount, setTokenCount] = useState(0);
  const [costUsd, setCostUsd] = useState(0);
  const [showDebug, setShowDebug] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { selectedLanguage } = useGetGlobalInfo();
  const languageMap = {
    de: "Deutsch",
    en: "Englisch",
    uk: "Українська",
    ru: "Русский",
    tr: "Türkçe",
    ar: "العربية",
    fr: "Français",
    es: "Español",
    pl: "Polski",
    el: "Ελληνικά",
    ro: "Română",
  };
  const targetLanguageName = languageMap[selectedLanguage] || "Englisch";
  const emptyNotice =
    "Keine Felder ausgefüllt. Bitte mindestens ein Feld ausfüllen.";

  const feedbackRef = useRef(null);

  useEffect(() => {
    if (!tooltipVisible) return;
    function handleClickOutside(event) {
      if (feedbackRef.current && !feedbackRef.current.contains(event.target)) {
        setTooltipVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tooltipVisible]);

  useEffect(() => {
    if (feedback) {
      setTooltipVisible(true);
    }
  }, [feedback]);

  const buildPromptData = () => {
    const filtered = Object.entries(initialParsed)
      .filter(
        ([k, v]) =>
          k !== "patientQuestions" &&
          k !== "examinerQuestions" &&
          k !== "id" &&
          k !== "examDate" &&
          v !== null &&
          v !== undefined &&
          !(typeof v === "string" && v.trim() === "")
      )
      .reduce(
        (acc, [k, v]) => ({
          ...acc,
          [k]: typeof v === "string" ? v.trim() : v,
        }),
        {}
      );
    return {
      userLetter: filtered,
    };
  };

  const payload = buildPromptData();
  const messages = [
    {
      role: "system",
      content:
        [
          "Du erhältst nun die vollständigen Falldaten, auf deren Grundlage der Arztbrief erstellt wurde.",
          "Nutze diese Informationen nur als Kontext und wiederhole sie nicht.",
        ].join(" ") + `\n\nDaten:\n${JSON.stringify(payload, null, 2)}`,
    },
    {
      role: "system",
      content: [
        "Antworte zuerst auf Deutsch in einer eigenen Zeile,",
        `danach in einer neuen Zeile auf ${targetLanguageName}.`,
        "1. Überprüfe die Übereinstimmung zwischen den Falldaten (Kontext) und dem eingereichten Arztbrief. " +
          "Liste alle Abweichungen mit dem Originalwert und dem Eingabewert auf.",
        "2. Fachkorrektheit in natürlicher Sprache (keine Feldnamen nennen).",
        "3. Grammatikfehler auflisten und Korrekturen vorschlagen.",
        "4. Stil & Lesbarkeit kurz einschätzen.",
        '5. Gesamtbewertung: "Dieser Brief würde in der Prüfung voraussichtlich bestanden/nicht bestanden werden", mit kurzer Begründung.',
      ].join("\n"),
    },
    {
      role: "user",
      content: JSON.stringify(letter, null, 2),
    },
  ];
  const fallbackMessages = [
    {
      role: "system",
      content: emptyNotice,
    },
    { role: "user", content: JSON.stringify(letter) },
  ];
  const debugMessages = hasParsedData ? messages : fallbackMessages;

  const handleReview = async () => {
    setLoading(true);
    const payload = buildPromptData();
    if (!payload.userLetter || Object.keys(payload.userLetter).length === 0) {
      setLoading(false);
      setFeedback({ notice: emptyNotice });
      return;
    }
    const toSend = hasParsedData ? messages : fallbackMessages;
    console.log("Sending to GPT:", toSend);
    const { data, error } = await supabase.functions.invoke("openai-proxy", {
      body: {
        model: "gpt-4",
        temperature: 0,
        messages: toSend,
      },
    });
    if (data?.usage?.total_tokens) {
      setTokenCount((c) => c + data.usage.total_tokens);
      setCostUsd((c) => c + (data.usage.total_tokens / 1000) * 0.002);
    }
    setLoading(false);
    if (error) {
      console.error(error);
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(data.choices[0].message.content);
    } catch {
      parsed = { raw: data.choices[0].message.content };
    }
    setFeedback(parsed);
  };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <h1>
          {hasParsedData && (
            <FaExclamationCircle
              title="Parsed data present"
              style={{ color: "orange", marginRight: 8, cursor: "pointer" }}
              onClick={() => setShowDebug((d) => !d)}
            />
          )}
          {fullNameDisplay
            ? `Arzt-Brief Review – ${fullNameDisplay}`
            : routeCaseId
            ? `Arzt-Brief Review – Fall ${routeCaseId}`
            : "Arzt-Brief Review"}
        </h1>

        {showDebug && (
          <div
            style={{
              background: "#f9f9f9",
              border: "1px solid #ddd",
              padding: "12px",
              margin: "12px 0",
            }}
          >
            <h2 style={{ margin: "0 0 8px" }}>Debug Prompt</h2>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
                fontSize: "0.9em",
              }}
            >
              {JSON.stringify(debugMessages, null, 2)}
            </pre>
          </div>
        )}

        <div className={styles.counters}>
          <span>Tokens: {tokenCount}</span>
          <span>Kosten: €{costUsd.toFixed(4)}</span>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleReview();
          }}
        >
          {/* Text-Felder */}
          {[
            { label: "Patient", key: "patientAndDate" },
            { label: "Anamnese", key: "anamnesis" },
            { label: "Allergien", key: "allergies" },
            { label: "Genussmittel", key: "consumables" },
            { label: "Sozialanamnese", key: "socialHistory" },
            { label: "Familiäre Anamnese", key: "familyHistory" },
            { label: "Diagnose", key: "suspectedDiagnosis" },
            { label: "Differentialdiagnose", key: "differentialDiagnosis" },
            { label: "Weiteres Procedere", key: "furtherProcedure" },
            { label: "Therapie", key: "therapy" },
          ].map(({ label, key }) => (
            <div key={key} className={styles.field}>
            <label className={styles.fieldLabel}>{label}</label>
              {label === "Patient" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={patientRows}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                      overflow: "hidden",
                    }}
                    value={letter[key]}
                    onChange={(e) => {
                      const val = e.target.value;
                      setLetter((l) => ({ ...l, [key]: val }));
                      const lines = val.split("\n").length;
                      setPatientRows(Math.max(lines, 2));
                    }}
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={() => {
                      insertPatientTemplate();
                      setPatientRows(7);
                    }}
                  />
                </div>
              ) : label === "Anamnese" ? (
                <textarea
                  rows={18}
                  style={{ width: "100%" }}
                  value={letter[key]}
                  onChange={(e) =>
                    setLetter((l) => ({ ...l, [key]: e.target.value }))
                  }
                />
              ) : label === "Allergien" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={allergiesRows}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                      overflow: "hidden",
                    }}
                    value={letter[key]}
                    onChange={(e) => {
                      const lines = e.target.value.split("\n").length;
                      setAllergiesRows(lines);
                      setLetter((l) => ({ ...l, [key]: e.target.value }));
                    }}
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={() => {
                      insertAllergiesTemplate();
                    }}
                  />
                </div>
              ) : label === "Genussmittel" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={consumablesRows}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                      overflow: "hidden",
                    }}
                    value={letter[key]}
                    onChange={(e) => {
                      const lines = e.target.value.split("\n").length;
                      setConsumablesRows(lines);
                      setLetter((l) => ({ ...l, [key]: e.target.value }));
                    }}
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={() => {
                      insertConsumablesTemplate();
                    }}
                  />
                </div>
              ) : label === "Sozialanamnese" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={socialHistoryRows}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                      overflow: "hidden",
                    }}
                    value={letter.socialHistory}
                    onChange={(e) => {
                      const lines = e.target.value.split("\n").length;
                      setSocialHistoryRows(lines);
                      setLetter((l) => ({
                        ...l,
                        socialHistory: e.target.value,
                      }));
                    }}
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={insertSocialHistoryTemplate}
                  />
                </div>
              ) : label === "Familiäre Anamnese" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={familyHistoryRows}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                      overflow: "hidden",
                    }}
                    value={letter.familyHistory}
                    onChange={(e) => {
                      const lines = e.target.value.split("\n").length;
                      setFamilyHistoryRows(lines);
                      setLetter((l) => ({
                        ...l,
                        familyHistory: e.target.value,
                      }));
                    }}
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={insertFamilyHistoryTemplate}
                  />
                </div>
              ) : label === "Differentialdiagnose" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={3}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                    }}
                    value={letter[key]}
                    onChange={(e) =>
                      setLetter((l) => ({ ...l, [key]: e.target.value }))
                    }
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={() => insertDifferentialTemplate()}
                  />
                </div>
              ) : label === "Weiteres Procedere" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={4}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                    }}
                    value={letter[key]}
                    onChange={(e) =>
                      setLetter((l) => ({ ...l, [key]: e.target.value }))
                    }
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={() => insertProceduresTemplate()}
                  />
                </div>
              ) : label === "Diagnose" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={suspectedDiagnosisRows}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                    }}
                    value={letter.suspectedDiagnosis}
                    onChange={(e) => {
                      const val = e.target.value;
                      setLetter((l) => ({ ...l, suspectedDiagnosis: val }));
                      setSuspectedDiagnosisRows(val.split("\n").length);
                    }}
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={insertSuspectedDiagnosisTemplate}
                  />
                </div>
              ) : label === "Therapie" ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "visible",
                  }}
                >
                  <textarea
                    rows={3}
                    style={{
                      width: "100%",
                      paddingRight: "32px",
                      boxSizing: "border-box",
                    }}
                    value={letter.therapy}
                    onChange={(e) =>
                      setLetter((l) => ({ ...l, therapy: e.target.value }))
                    }
                  />
                  <FaInfoCircle
                  className={styles.tooltipIcon}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#013b6e",
                    }}
                    title="Vorlage einfügen"
                    onClick={insertTherapyTemplate}
                  />
                </div>
              ) : (
                <textarea
                  rows={3}
                  style={{ width: "100%" }}
                  value={letter[key]}
                  onChange={(e) =>
                    setLetter((l) => ({ ...l, [key]: e.target.value }))
                  }
                />
              )}
            </div>
          ))}
        </form>

        <div className={styles.reviewButtonContainer}>
          <button
            type="button"
            className={styles.reviewButton}
            onClick={handleReview}
            disabled={loading}
            title="Review Letter"
          >
            <FaCog className={loading ? styles.spin : ""} />
          </button>
        </div>

        {/* Feedback tooltip top right */}
        {feedback && (
          <div ref={feedbackRef} className={styles.feedbackContainer}>
            <button
              type="button"
              className={styles.feedbackToggleButton}
              onClick={() => setTooltipVisible((v) => !v)}
              title="Feedback anzeigen"
            >
              {tooltipVisible ? <FaTimes /> : <FaCloud />}
            </button>
            {tooltipVisible && (
              <>
                <div
                  className={styles.feedbackOverlay}
                  style={{
                    backdropFilter: `blur(${loading ? 8 : 4}px)`,
                  }}
                />
                <div
                  className={styles.feedbackPopover}
                  style={
                    isMobileView
                      ? {
                          position: "fixed",
                          top: "10vh",
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: "#fff",
                          color: "#013b6e",
                          fontWeight: "bold",
                          width: "90vw",
                          maxWidth: "600px",
                          maxHeight: "80vh",
                          overflowY: "auto",
                          padding: "0.75rem",
                          borderRadius: "6px",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }
                      : {
                          position: "fixed",
                          top: "120px",
                          right: "60px",
                          backgroundColor: "#fff",
                          color: "#013b6e",
                          fontWeight: "bold",
                          width: "600px",
                          maxWidth: "90vw",
                          maxHeight: "50vh",
                          overflowY: "auto",
                          padding: "0.75rem",
                          borderRadius: "6px",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }
                  }
                >
                  {feedback.raw || feedback.notice}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LetterReviewPage;
