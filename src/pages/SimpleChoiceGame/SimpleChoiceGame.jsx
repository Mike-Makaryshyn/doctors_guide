import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./SimpleChoiceGame.module.scss";
import {
  FaCog,
  FaPlay,
  FaPause,
  FaCheck,
  FaList,
  FaPen,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../constants/CategoryIcons";

// Abkürzungen für Regionen
const regionAbbreviations = {
  "Nordrhein-Westfalen": "NRW",
  "Westfalen-Lippe": "W-L",
  Bayern: "BY",
  Hessen: "HE",
  Niedersachsen: "NI",
  "Rheinland-Pfalz": "RP",
  Sachsen: "SA",
  Brandenburg: "BB",
  Bremen: "HB",
  Saarland: "SL",
  "Schleswig-Holstein": "SH",
  Thüringen: "TH",
  Berlin: "BE",
  Hamburg: "HH",
  "Mecklenburg Vorpommern": "MV",
  "Sachsen-Anhalt": "ST",
};

// Filtermodi
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzahl Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Anzeige-Modi
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

const SimpleChoiceGame = () => {
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, toggleStatus } = useTermStatus();

  // Spiel-Einstellungen
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Spielzustand
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Antworten im Nicht-Bearbeitungsmodus
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  // Falsche Auswahl im Bearbeitungsmodus
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  // Abgeschlossene Fragen
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  // Verfolgung korrekter Antworten und Anzeigen
  const [correctCounts, setCorrectCounts] = useState({}); // pro Begriff
  const [shownCounts, setShownCounts] = useState({}); // wie oft angezeigt

  // Spielergebnisse
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);

  // Region aktualisieren
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  // Fragen laden
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion = region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory = selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id] || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused")) return false;
      return matchesRegion && matchesCategory;
    });

    // Bevorzugt Begriffe, die weniger oft angezeigt wurden
    gefilterteBegriffe.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    const ausgewählteBegriffe = questionCount === "all" ? gefilterteBegriffe : gefilterteBegriffe.slice(0, questionCount);

    // "Anzeigen"-Zähler aktualisieren
    const neueShownCounts = { ...shownCounts };
    ausgewählteBegriffe.forEach((term) => {
      neueShownCounts[term.id] = (neueShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(neueShownCounts);

    // Fragen-Daten erzeugen
    const fragenDaten = ausgewählteBegriffe.map((term) => {
      let modus = displayMode;
      if (displayMode === "Mixed") {
        modus = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      let frageText, richtigeAntwort;
      if (modus === "LatGerman") {
        frageText = term.lat;
        richtigeAntwort = term.de;
      } else {
        frageText = term.de;
        richtigeAntwort = term.lat;
      }
      const falscheAntworten = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (modus === "LatGerman" ? t.de : t.lat));

      const optionen = [...falscheAntworten, richtigeAntwort].sort(() => Math.random() - 0.5);

      return {
        id: term.id,
        frage: frageText,
        richtigeAntwort,
        optionen,
        term: term, // für spätere Auswertung (z. B. Kategorien)
      };
    });

    setQuestions(fragenDaten);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

  // Beim Schließen der Einstellungen wird das Spiel gestartet
  useEffect(() => {
    if (!settingsOpen) {
      loadQuestions();
      setGameFinished(false);
      setGameStartTime(Date.now());
      setCorrectAnswerCount(0);
      setIncorrectAnswerCount(0);
      setCorrectCounts({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowEdit, settingsOpen]);

  // Spielstart-Funktion
  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
    setGameStartTime(Date.now());
    setGameFinished(false);
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
    setCorrectCounts({});
  };

  // Funktion zum Beenden des Spiels (Finish)
  const finishGame = () => {
    const dauer = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dauer);
    setGameFinished(true);
  };

  // Verarbeitung der Antwort
  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { richtigeAntwort, id } = questions[currentIndex];
    const qIndex = currentIndex;
    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      if (option === richtigeAntwort) {
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
        toggleStatus(questions[qIndex].id, "learned");
      } else {
        setWrongSelectionsEdit((prev) => {
          const alteListe = prev[qIndex] || [];
          if (alteListe.includes(option)) return prev;
          return { ...prev, [qIndex]: [...alteListe, option] };
        });
      }
    } else {
      setAnswersNoEdit((prev) => ({ ...prev, [qIndex]: option }));
      setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
      if (option === richtigeAntwort) {
        setCorrectAnswerCount((prev) => prev + 1);
        setCorrectCounts((prev) => {
          const neuerZähler = (prev[id] || 0) + 1;
          if (neuerZähler >= 5 && (termStatuses[id] || "unlearned") !== "learned") {
            toggleStatus(id, "learned");
          }
          return { ...prev, [id]: neuerZähler };
        });
      } else {
        setIncorrectAnswerCount((prev) => prev + 1);
      }
    }
  };

  // Navigation zwischen den Fragen (ohne Finish-Button)
  const handleNavigation = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "next") {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  // Hilfsfunktion zur Anzeige der Region
  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  // Berechnung von Fehlern nach Kategorien (nur für falsch beantwortete Fragen)
  const berechneKategorieFehler = () => {
    const fehler = {};
    questions.forEach((frage, index) => {
      if (questionsCompleted[index] && answersNoEdit[index] !== frage.richtigeAntwort) {
        const term = frage.term;
        (term.categories || []).forEach((kategorie) => {
          fehler[kategorie] = (fehler[kategorie] || 0) + 1;
        });
      }
    });
    return fehler;
  };

  // Anzeige der Ergebnisse (Ergebnis-Kachel)
  const ErgebnisseAnzeigen = () => {
    const kategorieFehler = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        {/* Schließ-Button im oberen rechten Eck */}
        <button className={styles.modalCloseButton} onClick={() => setGameFinished(false)}>
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>Richtige Antworten: {correctAnswerCount} von {questions.length}</p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>Dauer: {sessionDuration} Sekunden</p>
        {Object.keys(kategorieFehler).length > 0 && (
          <div>
            <h4>Fehler in den Kategorien:</h4>
            <ul>
              {Object.entries(kategorieFehler).map(([kategorie, anzahl]) => (
                <li key={kategorie}>
                  {kategorie}: {anzahl} Fehler
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Button "Neues Spiel starten" im Stil des Start-Buttons */}
        <button className={styles.startButton} onClick={handleStart}>
          Neues Spiel starten
        </button>
      </div>
    );
  };

  const aktuelleFrage = questions[currentIndex];
  const qIndex = currentIndex;
  const frageIstAbgeschlossen = questionsCompleted[qIndex] || false;

  return (
    <MainLayout>
      <div className={styles.simpleChoiceGame}>
        {/* Zurück-Button */}
        <button className="main_menu_back" onClick={() => navigate("/terminology-learning")}>
          &#8592;
        </button>

        {/* Einstellungen */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              <button className={styles.modalCloseButton} onClick={() => setSettingsOpen(false)}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select className={styles.nativeSelect} value={region} onChange={(e) => setRegion(e.target.value)}>
                      <option value="Alle">Alle</option>
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.regions || []))).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select className={styles.nativeSelect} value={filterMode} onChange={(e) => setFilterMode(e.target.value)}>
                      {filterModes.map((mode) => (
                        <option key={mode.value} value={mode.value}>
                          {mode.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.categoryColumn}>
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.categoryCell}>
                      {categoryIcons[selectedCategory] && (
                        <img src={categoryIcons[selectedCategory]} alt={selectedCategory} className={styles.categoryIcon} />
                      )}
                    </div>
                    <select className={styles.nativeSelect} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                      <option value="Alle">Alle</option>
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.categories || []))).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.editColumn}>
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button className={`${styles.editToggleButton} ${styles.myBearByteButton} ${allowEdit ? styles.selectedEdit : ""}`} onClick={() => setAllowEdit(!allowEdit)}>
                    <FaPen />
                  </button>
                </div>
              </div>
              <div className={styles.modalField}>
                <div className={styles.displayModeContainer}>
                  {displayModeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`${styles.displayModeIcon} ${displayMode === option.value ? styles.selected : ""}`}
                      onClick={() => setDisplayMode(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer}>
                  {questionCountOptions.map((countOption) => (
                    <div
                      key={countOption}
                      className={`${styles.questionCountIcon} ${questionCount === countOption ? styles.selected : ""}`}
                      onClick={() => setQuestionCount(countOption)}
                    >
                      {countOption === "all" ? "Alles" : countOption}
                    </div>
                  ))}
                </div>
              </div>
              <button className={styles.startButton} onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Spielanzeige */}
        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progress}>
              Frage {currentIndex + 1} von {questions.length}
            </div>
            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                <h2>{aktuelleFrage?.frage}</h2>
                <div className={styles.optionsContainer}>
                  {aktuelleFrage?.optionen.map((option, idx) => {
                    const { richtigeAntwort } = aktuelleFrage;
                    const isCompleted = frageIstAbgeschlossen;

                    if (!allowEdit) {
                      const chosenAnswer = answersNoEdit[qIndex] || null;
                      let isWrong = false;
                      let isCorrect = false;

                      if (isCompleted) {
                        if (option === richtigeAntwort) {
                          isCorrect = true;
                        }
                        if (chosenAnswer === option && option !== richtigeAntwort) {
                          isWrong = true;
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${isCorrect ? styles.correct : ""} ${isWrong ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    } else {
                      const wrongAnswersArr = wrongSelectionsEdit[qIndex] || [];
                      let isWrongEdit = wrongAnswersArr.includes(option);
                      let isCorrectEdit = false;

                      if (isCompleted && option === richtigeAntwort) {
                        isCorrectEdit = true;
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${isCorrectEdit ? styles.correct : ""} ${isWrongEdit ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    }
                  })}
                </div>
                <div className={styles.navigationContainer}>
                  {currentIndex > 0 && (
                    <button className={styles.navButton} onClick={() => handleNavigation("prev")}>
                      <FaArrowLeft />
                    </button>
                  )}
                  {currentIndex < questions.length - 1 ? (
                    <button className={styles.navButton} onClick={() => handleNavigation("next")}>
                      <FaArrowRight />
                    </button>
                  ) : (
                    <button className={styles.navButton} onClick={finishGame}>
                      Spiel beenden
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Ergebnismodal */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>
            {ErgebnisseAnzeigen()}
          </div>
        )}

        {/* Fester Einstellungen-Button */}
        {(!settingsOpen || window.innerWidth > 768) && (
          <div className={styles.bottomRightSettings}>
            <button className={styles.settingsButton} onClick={() => setSettingsOpen(true)}>
              <FaCog />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SimpleChoiceGame;