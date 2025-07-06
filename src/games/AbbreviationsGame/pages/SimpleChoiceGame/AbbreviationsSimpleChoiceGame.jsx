import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations } from "../../../../constants/medicalAbbreviations";
import styles from "./AbbreviationsSimpleChoiceGame.module.scss";
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
  useAbbreviationsStatus,
  AbbreviationsStatusProvider,
} from "../../../../contexts/AbbreviationsStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import AbbreviationsSimpleChoiceGameTutorial from "./AbbreviationsSimpleChoiceGameTutorial";
import { Helmet } from "react-helmet";
import simpleChoiceBg from "../../../../assets/abbreviation-simple-choice-bg.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useAuth } from "../../../../hooks/useAuth";

// Функція для сортування категорій: алфавітно, "Andere" завжди останньою
const sortCategoriesWithAndereLast = (categories) => {
  let sorted = [...categories].sort();
  if (sorted.includes("Andere")) {
    sorted = sorted.filter((cat) => cat !== "Andere");
    sorted.push("Andere");
  }
  return sorted;
};

// Фільтр-режими
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Кількість питань
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Режими відображення: Abk.→Deu, Deu→Abk., Gemischt
const displayModeOptions = [
  { value: "LatGerman", label: "Abk.→Deu" },
  { value: "GermanLat", label: "Deu→Abk." },
  { value: "Mixed", label: "Gemischt" },
];

const AbbreviationsSimpleChoiceGameContent = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useGetGlobalInfo();

  // Supabase Auth
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Контекст абревіатур
  const { abbreviationStatuses, recordCorrectAnswer, flushChanges } = useAbbreviationsStatus();

  // Налаштування гри
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [filterMode, setFilterMode] = useState("unlearned");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Стан гри
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  // Лічильники
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [shownCounts, setShownCounts] = useState({});

  // Час початку гри та результати
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);

  // Стан туторіалу
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("abbreviationsSimpleChoiceGameTutorialCompleted") !== "true"
  );

  const [gameStarted, setGameStarted] = useState(false);

  // Отримання всіх категорій з абревіатур і їх сортування
  let allCategories = Array.from(
    new Set(medicalAbbreviations.flatMap((abbr) => abbr.categories || []))
  );
  allCategories = sortCategoriesWithAndereLast(allCategories);

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  // Завантаження питань
  const loadQuestions = () => {
    const gefilterteAbbrs = medicalAbbreviations.filter((abbr) => {
      const status = abbreviationStatuses[abbr.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      if (selectedCategory !== "Alle" && !(abbr.categories || []).includes(selectedCategory)) {
        return false;
      }
      return true;
    });

    // Сортування за кількістю показів (shownCounts), щоб частіше показувати ті, які менше "бачили"
    gefilterteAbbrs.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    // Вибираємо потрібну кількість абревіатур
    const ausgewählteAbbrs =
      questionCount === "all" ? gefilterteAbbrs : gefilterteAbbrs.slice(0, questionCount);

    // Оновлюємо лічильники показів
    const neueShownCounts = { ...shownCounts };
    ausgewählteAbbrs.forEach((abbr) => {
      neueShownCounts[abbr.id] = (neueShownCounts[abbr.id] || 0) + 1;
    });
    setShownCounts(neueShownCounts);

    // Формування питань залежно від displayMode
    const fragenDaten = ausgewählteAbbrs.map((abbr) => {
      let modus = displayMode;
      if (modus === "Mixed") {
        modus = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      let frageText, richtigeAntwort;
      if (modus === "LatGerman") {
        frageText = abbr.abbreviation;
        richtigeAntwort = abbr.name;
      } else {
        frageText = abbr.name;
        richtigeAntwort = abbr.abbreviation;
      }

      // 3 випадкові неправильні відповіді
      const falscheAntworten = medicalAbbreviations
        .filter((a) => a.id !== abbr.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((a) => (modus === "LatGerman" ? a.name : a.abbreviation));

      const optionen = [...falscheAntworten, richtigeAntwort].sort(
        () => Math.random() - 0.5
      );

      return {
        id: abbr.id,
        frage: frageText,
        richtigeAntwort,
        optionen,
        abbr,
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

    // Зберігаємо зміни в Firebase, якщо не в режимі редагування
    if (!allowEdit) {
      flushChanges();
    }
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { richtigeAntwort, id } = questions[currentIndex];
    const qIndex = currentIndex;
    // Якщо питання вже завершене, повторно не обробляємо
    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      // У режимі редагування «правильна» відповідь відзначається лише тоді,
      // коли користувач обрав правильний варіант.
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
      // У звичайному режимі відповіді фіксуються одразу
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
      // Перевірка, чи завершене поточне питання
      if (!questionsCompleted[currentIndex]) {
        alert("Bitte beantworten Sie die aktuelle Frage!");
        return;
      }
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  // Підрахунок помилок за категоріями
  const berechneKategorieFehler = () => {
    const fehler = {};
    questions.forEach((frage, index) => {
      if (
        questionsCompleted[index] &&
        answersNoEdit[index] !== frage.richtigeAntwort
      ) {
        const abbrObj = frage.abbr;
        (abbrObj.categories || []).forEach((kategorie) => {
          fehler[kategorie] = (fehler[kategorie] || 0) + 1;
        });
      }
    });
    return fehler;
  };

  // Компонент виводу результатів
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
        <h3>Ergebnisse</h3>
        <p>
          Richtige Antworten: {correctAnswerCount} von {questions.length}
        </p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>
          Dauer: {Math.floor(sessionDuration / 60)} Minuten{" "}
          {sessionDuration % 60} Sekunden
        </p>
        {Object.keys(kategorieFehler).length > 0 && (
          <div>
            <h4>Fehler nach Kategorien:</h4>
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
        <title>Abkürzungen lernen – Single-Choice-Quiz für die Fachsprache</title>
        <meta
          name="description"
          content="Lerne wichtige Abkürzungen mit diesem Single-Choice-Quiz. Perfekt zur Vorbereitung auf die Fachsprachprüfung oder für das klinische Alltagwissen."
        />
        <meta
          name="keywords"
          content="Abkürzungen, Fachsprachprüfung, Lernen, Medizin, Single-Choice, Quiz"
        />
        <meta
          property="og:title"
          content="Abkürzungen lernen – Single-Choice-Quiz für die Fachsprache"
        />
        <meta
          property="og:description"
          content="Interaktives Single-Choice-Spiel zum Erlernen medizinischer Abkürzungen und Fachbegriffe."
        />
        <meta property="og:image" content={simpleChoiceBg} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Вилучено FloatingExamples */}

      <div className={styles.abbreviationsSimpleChoiceGame}>
        <button
          className="main_menu_back"
          onClick={() => navigate("/abbreviations-learning")}
        >
          &#8592;
        </button>

        {/* AuthModal handled below */}

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile
              }
            >
              <button
                className='modalCloseButton'
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              {/* Dummy-елемент для regionSelect-туторіалу */}
              <div data-tutorial="regionSelect" />

              <div className={styles.row}>
                {/* Фільтр */}
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

                {/* Категорія */}
                <div className={styles.categoryColumn} data-tutorial="categorySelect">
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.categoryCell}>
                      {selectedCategory === "Alle"
                        ? "Alle"
                        : selectedCategory === "Andere"
                        ? "Andr."
                        : selectedCategory}
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
                      {allCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Режим редагування */}
                <div className={styles.editColumn}>
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${
                      allowEdit ? styles.selectedEdit : ""
                    }`}
                    onClick={() => {
                      if (requireAuth()) return;
                      setAllowEdit(!allowEdit);
                    }}
                    data-tutorial="editToggleButton"
                  >
                    <FaPen />
                  </button>
                </div>
              </div>

              {/* Режим відображення */}
              <div className={styles.modalField}>
                <div
                  className={styles.displayModeContainer}
                  data-tutorial="displayModeContainer"
                >
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

              {/* Кількість питань */}
              <div className={styles.modalField}>
                <div
                  className={styles.questionCountContainer}
                  data-tutorial="questionCountContainer"
                >
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
                      {countOption === "all" || countOption === "Alle"
                        ? "Alle"
                        : countOption}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={styles.startButton}
                onClick={handleStart}
                data-tutorial="startButton"
              >
                Start
              </button>
            </div>
          </div>
        )}

        {/* Кнопка запуску туторіалу */}
        {settingsOpen && (
          <button
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
              <circle cx="12" cy="12" r="10" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" />
            </svg>
          </button>
        )}

        {/* Якщо немає питань */}
        {!settingsOpen && !gameFinished && questions.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Abkürzungen verfügbar.</p>
            </div>
          </div>
        )}

        {/* Якщо є питання і гра не завершена */}
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
                        aktuelleFrage?.abbr?.explanation?.[selectedLanguage] ||
                        "Keine zusätzliche Info"
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
                      // Звичайний режим
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
                      // Режим редагування
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
                    <button
                      className={styles.navButton}
                      onClick={() => handleNavigation("prev")}
                    >
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

        {/* Якщо гра завершена */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>{ErgebnisseAnzeigen()}</div>
        )}

        {/* Кнопка для відкриття налаштувань (якщо не мобільний або якщо налаштування вже закриті) */}
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

      {/* AuthModal for Supabase Auth */}
      {/* You can implement your Supabase Auth modal here if needed */}

      {/* Туторіал */}
      {showTutorial && (
        <AbbreviationsSimpleChoiceGameTutorial
          run={showTutorial}
          onFinish={() => {
            setShowTutorial(false);
            localStorage.setItem("abbreviationsSimpleChoiceGameTutorialCompleted", "true");
          }}
        />
      )}
    </MainLayout>
  );
};

const AbbreviationsSimpleChoiceGame = () => {
  return (
    <AbbreviationsStatusProvider>
      <AbbreviationsSimpleChoiceGameContent />
    </AbbreviationsStatusProvider>
  );
};

export default AbbreviationsSimpleChoiceGame;