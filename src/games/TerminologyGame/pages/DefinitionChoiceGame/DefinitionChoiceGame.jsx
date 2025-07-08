import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./DefinitionChoiceGame.module.scss";
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
import {
  useTermStatus,
  TermStatusProvider,
} from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import DefinitionChoiceGameTutorial from "./DefinitionChoiceGameTutorial";
import { Helmet } from "react-helmet";
import simpleChoiceBg from "../../../../assets/simple-choice-bg.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

/*************************************************
 * Definition-Choice-Game                        *
 * --------------------------------------------- *
 * Variante des SimpleChoiceGame, bei der die     *
 * Frage-Texte aus dem neuen Schlüssel `Q1`       *
 * stammen und die Antwort – je nach Modus –      *
 * entweder die deutsche (term.de) oder die       *
 * lateinische (term.lat) Bezeichnung ist.        *
 *                                               *
 * UI-/Spiel-Logik, Einstellungen, Tutorials etc.*
 * bleiben unverändert, sodass Benutzer*innen     *
 * nichts Neues lernen müssen.                   *
 *************************************************/

// Abkürzungen für Regionen (identisch zu SimpleChoiceGame)
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
  // Unterregionen BW:
  "Baden-Württemberg-Freiburg": "BWF",
  "Baden-Württemberg-Karlsruhe": "BWK",
  "Baden-Württemberg-Stuttgart": "BWS",
  "Baden-Württemberg-Reutlingen": "BWR",
};

// Filtermodi (unverändert)
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzahl Fragen (unverändert)
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Antwort-Modi: Welche Bezeichnung soll erraten werden?
const answerModeOptions = [
  { value: "German", label: "Deutsch" },
  { value: "Latin", label: "Latein" },
  { value: "Gemischt", label: "Gemischt" },
];

const DefinitionChoiceGameContent = () => {
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();

  // Firebase Auth State
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const requireAuth = () => {
    if (loading) return true;
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Kontext-Funktionen
  const { termStatuses, toggleStatus, recordCorrectAnswer, flushChanges } =
    useTermStatus();

  // Einstellungen
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [answerMode, setAnswerMode] = useState("German");
  const [questionCount, setQuestionCount] = useState(20);

  // Spiel-State
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [shownCounts, setShownCounts] = useState({});

  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("definitionChoiceGameTutorialCompleted") !== "true"
  );
  const [gameStarted, setGameStarted] = useState(false);

  // Auf globale Region reagieren:
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  // --- Hilfs-Funktion ----------------------------------------------------
  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  // --- Fragen generieren -------------------------------------------------
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;

      return matchesRegion && matchesCategory && term.Q1; // Nur Datensätze mit Q1 nutzen
    });

    // Gewichtet nach seltener Anzeige sortieren
    gefilterteBegriffe.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    const ausgewählteBegriffe =
      questionCount === "all" ? gefilterteBegriffe : gefilterteBegriffe.slice(0, questionCount);

    const neueShownCounts = { ...shownCounts };
    ausgewählteBegriffe.forEach((term) => {
      neueShownCounts[term.id] = (neueShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(neueShownCounts);

    const fragenDaten = ausgewählteBegriffe.map((term) => {
      // Antwortmodus ermitteln
      let modus = answerMode;
      if (answerMode === "Mixed") {
        modus = Math.random() < 0.5 ? "German" : "Latin";
      }

      const frageText = term.Q1;
      const richtigeAntwort = modus === "German" ? term.de : term.lat;

      // 3 falsche Antworten generieren
      const falscheAntworten = medicalTerms
        .filter((t) => t.id !== term.id)
        .filter((t) => !!t.Q1) // nur Terme mit Q1
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (modus === "German" ? t.de : t.lat));

      const optionen = [...falscheAntworten, richtigeAntwort].sort(() => Math.random() - 0.5);

      return {
        id: term.id,
        frage: frageText,
        richtigeAntwort,
        optionen,
        term,
      };
    });

    setQuestions(fragenDaten);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

  // Spiel starten / beenden
  const handleStart = () => {
    setGameStarted(true);
    setSettingsOpen(false);
    loadQuestions();
    setGameStartTime(Date.now());
    setGameFinished(false);
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
  };

  const finishGame = () => {
    if (!questionsCompleted[currentIndex]) {
      alert("Bitte beantworten Sie die aktuelle Frage!");
      return;
    }
    const dauer = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dauer);
    setGameFinished(true);
    if (!allowEdit) flushChanges();
  };

  // Antwortauswahl-Handler (identisch zu SimpleChoiceGame; nur Feldnamen angepasst)
  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { richtigeAntwort, id } = questions[currentIndex];
    const qIndex = currentIndex;
    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      if (option === richtigeAntwort) {
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
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
        recordCorrectAnswer(id);
      } else {
        setIncorrectAnswerCount((prev) => prev + 1);
      }
    }
  };

  // Navigation
  const handleNavigation = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "next") {
      if (!questionsCompleted[currentIndex]) {
        alert("Bitte beantworten Sie die aktuelle Frage!");
        return;
      }
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  // Fehler pro Kategorie (identisch)
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

  // --- Ergebnisse-Modal -----------------------------------------------
  const ErgebnisseAnzeigen = () => {
    const kategorieFehler = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        <button className="modalCloseButton" onClick={() => setGameFinished(false)}>
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>
          Richtige Antworten: {correctAnswerCount} von {questions.length}
        </p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>
          Dauer: {Math.floor(sessionDuration / 60)} Minuten {sessionDuration % 60} Sekunden
        </p>
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
        <button className={styles.startButton} onClick={handleStart}>
          Neues Spiel starten
        </button>
      </div>
    );
  };

  // --- JSX-Return -------------------------------------------------------
  const aktuelleFrage = questions[currentIndex];
  const qIndex = currentIndex;
  const frageIstAbgeschlossen = questionsCompleted[qIndex] || false;

  return (
    <MainLayout>
      <Helmet>
        <title>Definitionen lernen – Fachwissen vertiefen</title>
        <meta
          name="description"
          content="Spiel zum Lernen medizinischer Definitionen: Fragen aus den Feldern Q1, Antworten auf Deutsch oder Latein."
        />
      </Helmet>

      <div className={styles.simpleChoiceGame /* CSS-Klassen können wiederverwendet werden */}>
        {/* Zurück-Button */}
        <button
          className="main_menu_back"
          onClick={() => {
            navigate("/terminology-learning");
            window.location.reload();
          }}
        >
          ←
        </button>

        {/* Einstellungen */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile
              }
            >
              <button className="modalCloseButton" onClick={() => setSettingsOpen(false)}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn} data-tutorial="regionSelect">
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setRegion(e.target.value);
                      }}
                    >
                      <option value="Alle">Alle</option>
                      {Array.from(
                        new Set(medicalTerms.flatMap((term) => term.regions || []))
                      ).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Filter */}
                <div className={styles.filterColumn} data-tutorial="filterColumn">
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={filterMode}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setFilterMode(e.target.value);
                      }}
                    >
                      {filterModes.map((mode) => (
                        <option key={mode.value} value={mode.value}>
                          {mode.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Kategorie */}
                <div className={styles.categoryColumn} data-tutorial="categorySelect">
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.categoryCell}>
                      {categoryIcons[selectedCategory] && (
                        <img
                          src={categoryIcons[selectedCategory]}
                          alt={selectedCategory}
                          className={styles.categoryIcon}
                        />
                      )}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={selectedCategory}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setSelectedCategory(e.target.value);
                      }}
                    >
                      <option value="Alle">Alle</option>
                      {Array.from(
                        new Set(medicalTerms.flatMap((term) => term.categories || []))
                      ).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Edit-Toggle */}
                <div className={styles.editColumn} data-tutorial="editToggleButton">
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${styles.myBearByteButton} ${
                      allowEdit ? styles.selectedEdit : ""
                    }`}
                    onClick={() => {
                      if (requireAuth()) return;
                      setAllowEdit(!allowEdit);
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>

              {/* Antwortmodus */}
              <div className={styles.modalField}>
                <div className={styles.displayModeContainer} data-tutorial="displayModeContainer">
                  {answerModeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`${styles.displayModeIcon} ${
                        answerMode === option.value ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (requireAuth()) return;
                        setAnswerMode(option.value);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frageanzahl */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer} data-tutorial="questionCountContainer">
                  {questionCountOptions.map((countOption) => (
                    <div
                      key={countOption}
                      className={`${styles.questionCountIcon} ${
                        questionCount === countOption ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (requireAuth()) return;
                        setQuestionCount(countOption);
                      }}
                    >
                      {countOption === "all" ? "Alles" : countOption}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={styles.startButton}
                data-tutorial="startButton"
                onClick={handleStart}
              >
                Start
              </button>
            </div>
          </div>
        )}

        {/* Tutorial */}
        {settingsOpen && (
          <button
            data-tutorial="tutorialStartButton"
            className={styles.tutorialButton}
            onClick={() => setShowTutorial(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="#ededed"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="#ededed" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" stroke="#ededed" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}

        {/* Tutorial-Schaltfläche */}
        {settingsOpen && (
          <button
            data-tutorial="tutorialStartButton"
            className={styles.tutorialButton}
            onClick={() => setShowTutorial(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="#ededed"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="#ededed" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" stroke="#ededed" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}

        {/* Keine Fragen */}
        {!settingsOpen && !gameFinished && questions.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
            </div>
          </div>
        )}

        {/* Spiel-UI */}
        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>
                Frage {currentIndex + 1} von {questions.length}
              </div>
            </div>

            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                <h2 style={{ position: "relative" }}>
                  {aktuelleFrage?.frage}
                  {frageIstAbgeschlossen && (
                    <Tippy
                      content={
                        aktuelleFrage?.term?.[`${selectedLanguage}Explanation`] ||
                        "Keine zusätzliche Information vorhanden"
                      }
                      trigger="click"
                      interactive={true}
                      placement="top"
                    >
                      <span className={styles.infoIcon}>i</span>
                    </Tippy>
                  )}
                </h2>

                <div className={styles.optionsContainer}>
                  {aktuelleFrage?.optionen.map((option, idx) => {
                    const { richtigeAntwort } = aktuelleFrage;
                    const isCompleted = frageIstAbgeschlossen;

                    if (!allowEdit) {
                      const chosenAnswer = answersNoEdit[qIndex] || null;
                      let isWrong = false;
                      let isCorrect = false;
                      if (isCompleted) {
                        if (option === richtigeAntwort) isCorrect = true;
                        if (chosenAnswer === option && option !== richtigeAntwort) isWrong = true;
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${isCorrect ? styles.correct : ""} ${
                            isWrong ? styles.wrong : ""
                          }`}
                        >
                          {option}
                        </button>
                      );
                    } else {
                      const wrongAnswersArr = wrongSelectionsEdit[qIndex] || [];
                      const isWrongEdit = wrongAnswersArr.includes(option);
                      const isCorrectEdit = isCompleted && option === richtigeAntwort;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${
                            isCorrectEdit ? styles.correct : ""
                          } ${isWrongEdit ? styles.wrong : ""}`}
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
                    <button
                      className={styles.navButton}
                      onClick={() => {
                        if (!questionsCompleted[currentIndex]) {
                          alert("Bitte beantworten Sie die aktuelle Frage!");
                        } else {
                          handleNavigation("next");
                        }
                      }}
                    >
                      <FaArrowRight />
                    </button>
                  ) : (
                    <button
                      className={styles.navButton}
                      onClick={() => {
                        if (!questionsCompleted[currentIndex]) {
                          alert("Bitte beantworten Sie die aktuelle Frage!");
                        } else {
                          finishGame();
                        }
                      }}
                    >
                      Spiel beenden
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Ergebnismodal */}
        {gameFinished && <div className={styles.resultsOverlay}>{ErgebnisseAnzeigen()}</div>}

        {/* Settings-Button */}
        {(!settingsOpen || window.innerWidth > 768) && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => {
                if (requireAuth()) return;
                setSettingsOpen(true);
                setGameFinished(false);
              }}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>

      {/* Auth */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {showTutorial && (
        <DefinitionChoiceGameTutorial 
          run={showTutorial} 
          onFinish={() => setShowTutorial(false)} 
        />
      )}
    </MainLayout>
  );
};

const DefinitionChoiceGame = () => (
  <TermStatusProvider>
    <DefinitionChoiceGameContent />
  </TermStatusProvider>
);

export default DefinitionChoiceGame;
