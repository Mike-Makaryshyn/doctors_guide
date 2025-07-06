import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
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
import { useTermStatus, TermStatusProvider } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import SimpleChoiceGameTutorial from "./SimpleChoiceGameTutorial";
import { Helmet } from "react-helmet";
import simpleChoiceBg from "../../../../assets/simple-choice-bg.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Firebase Auth Imports для логіки неавторизованих користувачів
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

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

// Anzahl Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Anzeige-Modi
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

const SimpleChoiceGameContent = () => {
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();

  // Firebase Auth State
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Функція перевірки авторизації: якщо користувач не авторизований – відкриваємо AuthModal
  const requireAuth = () => {
    if (loading) return true;
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Функції з контексту
  const { termStatuses, toggleStatus, recordCorrectAnswer, flushChanges } = useTermStatus();

  // Стан гри та налаштувань
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Стан гри
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  // Лічильники результатів
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [shownCounts, setShownCounts] = useState({});

  // Результати гри
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);

  // Tutorial
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("simpleChoiceGameTutorialCompleted") !== "true"
  );

  // Новий стан для відслідковування, чи почата гра
  const [gameStarted, setGameStarted] = useState(false);

  // Оновлення регіону
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  // Видалено useEffect, який запускав loadQuestions при зміні settingsOpen

  // Функція для закриття налаштувань без перезавантаження гри
  const closeSettings = () => {
    if (!gameStarted) {
      setSettingsOpen(false);
    } else {
      setSettingsOpen(false);
    }
  };

  // Завантаження питань – викликається лише при натисканні кнопки "Start"
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;

      return matchesRegion && matchesCategory;
    });

    // Сортуємо так, щоб ті, що показуються рідше, були першими
    gefilterteBegriffe.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    const ausgewählteBegriffe =
      questionCount === "all"
        ? gefilterteBegriffe
        : gefilterteBegriffe.slice(0, questionCount);

    const neueShownCounts = { ...shownCounts };
    ausgewählteBegriffe.forEach((term) => {
      neueShownCounts[term.id] = (neueShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(neueShownCounts);

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

      // 3 неправильні відповіді
      const falscheAntworten = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (modus === "LatGerman" ? t.de : t.lat));

      // Змішуємо правильну та неправильні відповіді
      const optionen = [...falscheAntworten, richtigeAntwort].sort(
        () => Math.random() - 0.5
      );

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

  // Завершення гри – викликається flushChanges для запису даних у Firebase
  const finishGame = () => {
    if (!questionsCompleted[currentIndex]) {
      alert("Bitte beantworten Sie die aktuelle Frage!");
      return;
    }
    const dauer = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dauer);
    setGameFinished(true);
    if (!allowEdit) {
      flushChanges(); // Відправка змін у Firebase через контекст
    }
  };

  // Обробка вибору відповіді
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
        recordCorrectAnswer(id); // Оновлення лічильника у контексті
      } else {
        setIncorrectAnswerCount((prev) => prev + 1);
      }
    }
  };

  // Навігація між питаннями
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

  // Обчислення помилок по категоріях (для звіту)
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

  // Відображення результатів гри у модальному вікні
  const ErgebnisseAnzeigen = () => {
    const kategorieFehler = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        <button
          className='modalCloseButton'
          onClick={() => setGameFinished(false)}
        >
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>
          Richtige Antworten: {correctAnswerCount} von {questions.length}
        </p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>
          Dauer: {Math.floor(sessionDuration / 60)} Minuten{" "}
          {sessionDuration % 60} Sekunden
        </p>
        {Object.keys(berechneKategorieFehler()).length > 0 && (
          <div>
            <h4>Fehler in den Kategorien:</h4>
            <ul>
              {Object.entries(berechneKategorieFehler()).map(([kategorie, anzahl]) => (
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
        <title>
          Fachbegriffe lernen – Optimal auf die Fachsprachenprüfung vorbereiten
        </title>
        <meta
          name="description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen und unterstützt Sie optimal bei der Vorbereitung auf die Fachsprachenprüfung. Erweitern Sie Ihr Fachwissen und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta
          name="keywords"
          content="Fachbegriffe, Fachsprachenprüfung, Medizin, Terminologie, Lernen, Fachsprache"
        />
        <meta
          property="og:title"
          content="Fachbegriffe lernen – Optimal auf die Fachsprachenprüfung vorbereiten"
        />
        <meta
          property="og:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen und unterstützt Sie optimal bei der Vorbereitung auf die Fachsprachenprüfung. Erweitern Sie Ihr Fachwissen und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta property="og:image" content={simpleChoiceBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fachbegriffe lernen – Optimal auf die Fachsprachenprüfung vorbereiten"
        />
        <meta
          name="twitter:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen und unterstützt Sie optimal bei der Vorbereitung auf die Fachsprachenprüfung."
        />
        <meta name="twitter:image" content={simpleChoiceBg} />
      </Helmet>

      <div className={styles.simpleChoiceGame}>
        {/* Кнопка для повернення */}
        <button
          className="main_menu_back"
          onClick={() => {
            navigate("/terminology-learning");
            window.location.reload();
          }}
        >
          &#8592;
        </button>

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              <button className='modalCloseButton' onClick={() => setSettingsOpen(false)}>
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

              <div className={styles.modalField}>
                <div className={styles.displayModeContainer} data-tutorial="displayModeContainer">
                  {displayModeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`${styles.displayModeIcon} ${
                        displayMode === option.value ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (requireAuth()) return;
                        setDisplayMode(option.value);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>

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

              <button className={styles.startButton} data-tutorial="startButton" onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Кнопка для запуску tutorial */}
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

        {!settingsOpen && !gameFinished && questions.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
          <div className={styles.noQuestionsMessage}>
            <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
          </div> </div>
        )}

        {/* Інтерфейс гри – відображається, якщо є питання */}
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
                          className={`${styles.answerTile} ${
                            isCorrect ? styles.correct : ""
                          } ${isWrong ? styles.wrong : ""}`}
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

        {/* Модальне вікно з результатами */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>{ErgebnisseAnzeigen()}</div>
        )}

        {/* Кнопка для налаштувань */}
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

      {showTutorial && (
        <SimpleChoiceGameTutorial
          run={showTutorial}
          onFinish={() => setShowTutorial(false)}
        />
      )}
    </MainLayout>
  );
};

const SimpleChoiceGame = () => {
  return (
    <TermStatusProvider>
      <SimpleChoiceGameContent />
    </TermStatusProvider>
  );
};

export default SimpleChoiceGame;