import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import { TermStatusProvider } from "../../../../contexts/TermStatusContext";
import styles from "./ElectiveLanguageGame.module.scss";
import {
  FaCog,
  FaPlay,
  FaPause,
  FaCheck,
  FaList,
  FaPen,
  FaArrowLeft,
  FaArrowRight,
  FaExchangeAlt,
} from "react-icons/fa";
import { useTermStatus } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { Helmet } from "react-helmet";
import translatorBg from "../../../../assets/translator-bg.jpg";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import ElectiveLanguageGameTutorial from "./ElectiveLanguageGameTutorial";
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Kürzel für Bundesländer
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

  // Оновлені записи для чотирьох підрегіонів BW:
  "Baden-Württemberg-Freiburg": "BWF",
  "Baden-Württemberg-Karlsruhe": "BWK",
  "Baden-Württemberg-Stuttgart": "BWS",
  "Baden-Württemberg-Reutlingen": "BWR",
};

// Filtermodi
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzahl-Fragen-Optionen
const questionCountOptions = [10, 20, 40, 60, 100, 200, "all"];

// Sprachzuordnung
const languageMap = {
  lat: "Latein",
  de: "Deutsch",
  en: "Englisch",
  uk: "Ukrainisch",
  ru: "Russisch",
  tr: "Türkisch",
  ar: "Arabisch",
  fr: "Französisch",
  es: "Spanisch",
  pl: "Polnisch",
  ro: "Rumänisch",    // neu hinzugefügt
  el: "Griechisch",   // neu hinzugefügt
};

const ElectiveLanguageGameContent = () => {
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const { termStatuses, toggleStatus, recordCorrectAnswer, flushChanges } = useTermStatus();

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

  // Einstellungen
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [questionCount, setQuestionCount] = useState(20);

  // Нові стани для мов:
  // fixedLang – мова, яку можна вибирати лише між "de" та "lat"
  // selectableLang – мова, що обирається з-поміж усіх інших (без fixedLang)
  const [fixedLang, setFixedLang] = useState("de");
  const [selectableLang, setSelectableLang] = useState(
    selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "en"
  );

  // Прапорець, який визначає, яка сторона фіксована
  // Якщо isFixedLeft === true, то зліва fixedLang, справа selectableLang; інакше навпаки.
  const [isFixedLeft, setIsFixedLeft] = useState(true);

  // Spiel-Status
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

  // Zustand für Tutorial
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("electiveLanguageGameTutorialCompleted") !== "true"
  );

  // Neuer Zustand für Spielstart
  const [gameStarted, setGameStarted] = useState(false);

  // Synchronisation mit globalem Kontext
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  useEffect(() => {
    // Wenn die globale Sprache sich ändert und nicht 'de' ist, setzen wir sie als selectableLang
    if (selectedLanguage && selectedLanguage !== "de") {
      setSelectableLang(selectedLanguage);
    }
  }, [selectedLanguage]);

  // Fragen generieren/filtern
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion = region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;

      return matchesRegion && matchesCategory;
    });

    // Sortierung nach Häufigkeit des Zeigens
    gefilterteBegriffe.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    // Begriffe auswählen
    const ausgewählteBegriffe =
      questionCount === "all" ? gefilterteBegriffe : gefilterteBegriffe.slice(0, questionCount);

    // ShownCounts aktualisieren
    const neueShownCounts = { ...shownCounts };
    ausgewählteBegriffe.forEach((term) => {
      neueShownCounts[term.id] = (neueShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(neueShownCounts);

    // Logik: якщо isFixedLeft === true, то питання в fixedLang, відповідь в selectableLang; інакше навпаки
    const questionLang = isFixedLeft ? fixedLang : selectableLang;
    const answerLang = isFixedLeft ? selectableLang : fixedLang;

    // Fragen-Daten anlegen
    const fragenDaten = ausgewählteBegriffe.map((term) => {
      const frageText = term[questionLang] || term.de;
      const richtigeAntwort = term[answerLang] || term.de;
      const falscheAntworten = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => t[answerLang] || t.de);
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
    if (!allowEdit) {
      flushChanges();
    }
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { richtigeAntwort, id } = questions[currentIndex];
    const qIndex = currentIndex;
    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      if (option === richtigeAntwort) {
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
        toggleStatus(id, "learned");
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

  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  const berechneKategorieFehler = () => {
    const fehler = {};
    questions.forEach((frage, index) => {
      if (
        questionsCompleted[index] &&
        answersNoEdit[index] !== frage.richtigeAntwort
      ) {
        const term = frage.term;
        (term.categories || []).forEach((kategorie) => {
          fehler[kategorie] = (fehler[kategorie] || 0) + 1;
        });
      }
    });
    return fehler;
  };

  const ErgebnisseAnzeigen = () => {
    const kategorieFehler = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        <button
          className={styles.modalCloseButton}
          onClick={() => setGameFinished(false)}
        >
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>
          Richtige Antworten: {correctAnswerCount} von {questions.length}
        </p>
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
      <Helmet>
        <title>Fachbegriffe lernen – Elective Language Game</title>
        <meta
          name="description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen im Elective Language Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta
          name="keywords"
          content="Fachbegriffe, Fachsprachenprüfung, Elective Language, Medizin, Terminologie, Lernen, Fachsprache"
        />
        <meta property="og:title" content="Fachbegriffe lernen – Elective Language Game" />
        <meta
          name="og:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen im Elective Language Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta property="og:image" content={translatorBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fachbegriffe lernen – Elective Language Game"
        />
        <meta
          name="twitter:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen im Elective Language Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta name="twitter:image" content={translatorBg} />
      </Helmet>

      <div className={styles.electiveLanguageGame}>
        <button
          className="main_menu_back"
          onClick={() => {
            navigate("/terminology-learning");
            window.location.reload();
          }}
        >
          &#8592;
        </button>

        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              <button className={styles.modalCloseButton} onClick={() => setSettingsOpen(false)}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
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
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.regions || []))).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.categories || []))).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.editColumn} data-tutorial="editToggleButton">
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${styles.myBearByteButton} ${
                      allowEdit ? styles.selected : ""
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

              {/* Updated language swap container with side swapping */}
              <div className={styles.modalField} data-tutorial="languageSwapContainer">
                <div className={styles.languageSwapContainer}>
                  {isFixedLeft ? (
                    <>
                      {/* Left: fixed language select (only 'de' or 'lat') */}
                      <div className={styles.languageCellFixed}>
                        <select
                          className={styles.languageSelect}
                          value={fixedLang}
                          onChange={(e) => setFixedLang(e.target.value)}
                        >
                          <option value="de">Deutsch</option>
                          <option value="lat">Latein</option>
                        </select>
                      </div>
                      {/* Swap button to toggle sides */}
                      <button
                        className={styles.swapButton}
                        onClick={() => setIsFixedLeft(!isFixedLeft)}
                      >
                        <FaExchangeAlt className={styles.swapIcon} />
                      </button>
                      {/* Right: selectable language select (all languages except the fixed one) */}
                      <div className={styles.languageCellFixed}>
                        <select
                          className={styles.languageSelect}
                          value={selectableLang}
                          onChange={(e) => setSelectableLang(e.target.value)}
                        >
                          {Object.entries(languageMap)
                            .filter(([code]) => code !== fixedLang)
                            .map(([code, label]) => (
                              <option key={code} value={code}>
                                {label}
                              </option>
                            ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: selectable language select */}
                      <div className={styles.languageCellFixed}>
                        <select
                          className={styles.languageSelect}
                          value={selectableLang}
                          onChange={(e) => setSelectableLang(e.target.value)}
                        >
                          {Object.entries(languageMap)
                            .filter(([code]) => code !== fixedLang)
                            .map(([code, label]) => (
                              <option key={code} value={code}>
                                {label}
                              </option>
                            ))}
                        </select>
                      </div>
                      {/* Swap button */}
                      <button
                        className={styles.swapButton}
                        onClick={() => setIsFixedLeft(!isFixedLeft)}
                      >
                        <FaExchangeAlt className={styles.swapIcon} />
                      </button>
                      {/* Right: fixed language select */}
                      <div className={styles.languageCellFixed}>
                        <select
                          className={styles.languageSelect}
                          value={fixedLang}
                          onChange={(e) => setFixedLang(e.target.value)}
                        >
                          <option value="de">Deutsch</option>
                          <option value="lat">Latein</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Кількість питань */}
              <div className={styles.modalField} data-tutorial="questionCountContainer">
                <div className={styles.questionCountContainer}>
                  {questionCountOptions.map((cnt) => (
                    <div
                      key={cnt}
                      className={`${styles.questionCountIcon} ${
                        questionCount === cnt ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (requireAuth()) return;
                        setQuestionCount(cnt);
                      }}
                    >
                      {cnt === "all" ? "Alles" : cnt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка туторіалу */}
              <button
                data-tutorial="tutorialStartButton"
                className={styles.tutorialButton}
                onClick={() => setShowTutorial(true)}
                title="Tutorial starten"
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

              {/* Старт гри */}
              <button className={styles.startButton} data-tutorial="startButton" onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Якщо немає запитань */}
        {!settingsOpen && !gameFinished && questions.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
            </div>
          </div>
        )}

        {/* Інтерфейс гри */}
        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progress}>
              Frage {currentIndex + 1} von {questions.length}
            </div>
            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                <h2 style={{ position: "relative" }}>
                  {aktuelleFrage?.frage}
                  {frageIstAbgeschlossen && (
                    <Tippy
                      content={
                        // Пояснення – використовується поле з поясненням відповідної мови (для відповіді)
                        aktuelleFrage?.term?.[
                          isFixedLeft ? `${selectableLang}Explanation` : `${fixedLang}Explanation`
                        ] || "Keine zusätzliche Information vorhanden"
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
                      let isCorrect = false;
                      let isWrong = false;
                      if (isCompleted) {
                        if (option === richtigeAntwort) isCorrect = true;
                        if (chosenAnswer === option && option !== richtigeAntwort) {
                          isWrong = true;
                        }
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${
                            isCorrect ? styles.correct : ""
                          } ${isWrong ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    } else {
                      const wrongArr = wrongSelectionsEdit[currentIndex] || [];
                      let isWrongEdit = wrongArr.includes(option);
                      let isCorrectEdit = isCompleted && option === richtigeAntwort;
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

        {gameFinished && (
          <div className={styles.resultsOverlay}>{ErgebnisseAnzeigen()}</div>
        )}

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

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <ElectiveLanguageGameTutorial
        run={showTutorial}
        onFinish={() => setShowTutorial(false)}
      />
    </MainLayout>
  );
};

// Hülle für den Context
const ElectiveLanguageGame = () => (
  <TermStatusProvider>
    <ElectiveLanguageGameContent />
  </TermStatusProvider>
);

export default ElectiveLanguageGame;