import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import {
  MedicationStatusProvider,
  useMedicationStatus,
} from "../../../../contexts/MedicationStatusContext";
import styles from "./MedicationElectiveLanguageGame.module.scss";
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
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { Helmet } from "react-helmet";
import translatorBg from "../../../../assets/translator-bg.jpg";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MedicationElectiveLanguageGameTutorial from "./MedicationElectiveLanguageGameTutorial";

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];
const questionCountOptions = [10, 20, 40, 60, 100, 200, "all"];

const languageMap = {
  de: "Deutsch",
  en: "Englisch",
  uk: "Ukrainisch",
  ru: "Russisch",
  tr: "Türkisch",
  ar: "Arabisch",
  fr: "Französisch",
  es: "Spanisch",
  pl: "Polnisch",
};

const MedicationElectiveLanguageGameContent = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useGetGlobalInfo();

  // Аутентифікація
  const [user] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };
  const sortCategoriesWithAndereLast = (categories) => {
    let sorted = [...categories].sort((a, b) => a.localeCompare(b));
    if (sorted.includes("Andere")) {
      sorted = sorted.filter((cat) => cat !== "Andere");
      sorted.push("Andere");
    }
    return sorted;
  };
  // Статуси Medication
  const { medicationStatuses, toggleStatus, recordCorrectAnswer, flushChanges } =
    useMedicationStatus();

  // Стан налаштувань
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [filterMode, setFilterMode] = useState("unlearned");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [allowEdit, setAllowEdit] = useState(false);
  const [questionCount, setQuestionCount] = useState(20);

  // Мова: якщо вибрана мова не "de", то використовуємо її, інакше – англійську
  const [electiveLang, setElectiveLang] = useState(
    selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "en"
  );
  // true: запитання німецькою, відповідь – обрана інша мова; false – навпаки
  const [isGermanLeft, setIsGermanLeft] = useState(true);

  // Стан гри
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

  // Туторіал
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("medicationElectiveLanguageGameTutorialCompleted") !== "true"
  );

  // Категорії
  const allCategories = sortCategoriesWithAndereLast(
    Array.from(new Set(medications.flatMap((m) => m.categories || [])))
  );

  // Завантаження питань
  const loadQuestions = () => {
    let filtered = medications.filter((med) => {
      const status = medicationStatuses[med.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return true;
    });

    if (selectedCategory !== "Alle") {
      filtered = filtered.filter((med) =>
        (med.categories || []).includes(selectedCategory)
      );
    }

    // Сортування за частотою показу
    filtered.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    const selectedMeds =
      questionCount === "all" ? filtered : filtered.slice(0, questionCount);

    const newShown = { ...shownCounts };
    selectedMeds.forEach((m) => {
      newShown[m.id] = (newShown[m.id] || 0) + 1;
    });
    setShownCounts(newShown);

    const questionLang = isGermanLeft ? "de" : electiveLang;
    const answerLang = isGermanLeft ? electiveLang : "de";

    const fragen = selectedMeds.map((med) => {
      const frageText = med[questionLang] || med.de;
      const richtigeAntwort = med[answerLang] || med.de;
      const falscheAntworten = medications
        .filter((x) => x.id !== med.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((x) => x[answerLang] || x.de);

      const optionen = [...falscheAntworten, richtigeAntwort].sort(
        () => Math.random() - 0.5
      );

      return {
        id: med.id,
        frage: frageText,
        richtigeAntwort,
        optionen,
        med,
      };
    });

    setQuestions(fragen);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

  // Старт гри
  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
    setGameStartTime(Date.now());
    setGameFinished(false);
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
  };

  // Завершення гри
  const finishGame = () => {
    if (!questionsCompleted[currentIndex]) {
      alert("Bitte beantworten Sie die aktuelle Frage!");
      return;
    }
    const duration = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(duration);
    setGameFinished(true);
    if (!allowEdit) {
      flushChanges();
    }
  };

  // Обробка вибору відповіді
  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { richtigeAntwort, id } = questions[currentIndex];
    if (questionsCompleted[currentIndex]) return;

    if (allowEdit) {
      if (option === richtigeAntwort) {
        setQuestionsCompleted((prev) => ({ ...prev, [currentIndex]: true }));
        toggleStatus(id, "learned");
      } else {
        setWrongSelectionsEdit((prev) => {
          const oldArr = prev[currentIndex] || [];
          if (oldArr.includes(option)) return prev;
          return { ...prev, [currentIndex]: [...oldArr, option] };
        });
      }
    } else {
      setAnswersNoEdit((prev) => ({ ...prev, [currentIndex]: option }));
      setQuestionsCompleted((prev) => ({ ...prev, [currentIndex]: true }));

      if (option === richtigeAntwort) {
        setCorrectAnswerCount((prev) => prev + 1);
        recordCorrectAnswer(id);
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

  // Підрахунок помилок за категоріями
  const calcCategoryErrors = () => {
    const errors = {};
    questions.forEach((q, idx) => {
      if (questionsCompleted[idx] && answersNoEdit[idx] !== q.richtigeAntwort) {
        (q.med.categories || []).forEach((cat) => {
          errors[cat] = (errors[cat] || 0) + 1;
        });
      }
    });
    return errors;
  };

  // Відображення результатів гри
  const ErgebnisseAnzeigen = () => {
    const catErrors = calcCategoryErrors();
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
        <p>
          Dauer: {Math.floor(sessionDuration / 60)} min {sessionDuration % 60} s
        </p>
        {Object.keys(calcCategoryErrors()).length > 0 && (
          <div>
            <h4>Fehler in den Kategorien:</h4>
            <ul>
              {Object.entries(calcCategoryErrors()).map(([cat, anzahl]) => (
                <li key={cat}>
                  {cat}: {anzahl} Fehler
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

  const currentQuestion = questions[currentIndex];
  const questionIsCompleted = questionsCompleted[currentIndex] || false;

  return (
    <MainLayout>
      <Helmet>
        <title>Medikamente lernen – Elective Language Game</title>
        <meta
          name="description"
          content="Interaktives Spiel zum Erlernen von Medikamentennamen in Deutsch und einer weiteren gewählten Sprache."
        />
        <meta property="og:title" content="Medikamente lernen – Elective Language Game" />
        <meta property="og:image" content={translatorBg} />
      </Helmet>

      <div className={styles.electiveLanguageGame}>
        {/* Кнопка назад */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/medications-learning")}
        >
          &#8592;
        </button>

        {/* Модальне вікно аутентифікації */}
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile
              }
            >
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>

              <div className={styles.row}>
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
    {/* Відображаємо категорію як текст або скорочення */}
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

                {/* Edit */}
                <div className={styles.editColumn} data-tutorial="editToggleButton">
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${
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

              {/* Мовний Swap */}
              <div className={styles.modalField} data-tutorial="languageSwapContainer">
                <div className={styles.languageSwapContainer}>
                  <div className={styles.languageCellFixed}>
                    {isGermanLeft ? (
                      "Deutsch"
                    ) : (
                      <select
                        className={styles.languageSelect}
                        value={electiveLang}
                        onChange={(e) => setElectiveLang(e.target.value)}
                      >
                        {Object.entries(languageMap).map(([code, label]) =>
                          code !== "de" ? (
                            <option key={code} value={code}>
                              {label}
                            </option>
                          ) : null
                        )}
                      </select>
                    )}
                  </div>
                  <button
                    className={styles.swapButton}
                    onClick={() => setIsGermanLeft((prev) => !prev)}
                  >
                    <FaExchangeAlt className={styles.swapIcon} />
                  </button>
                  <div className={styles.languageCellFixed}>
                    {isGermanLeft ? (
                      <select
                        className={styles.languageSelect}
                        value={electiveLang}
                        onChange={(e) => setElectiveLang(e.target.value)}
                      >
                        {Object.entries(languageMap).map(([code, label]) =>
                          code !== "de" ? (
                            <option key={code} value={code}>
                              {label}
                            </option>
                          ) : null
                        )}
                      </select>
                    ) : (
                      "Deutsch"
                    )}
                  </div>
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

              {/* Кнопка туторіалу (єдина) */}
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
              <p>Für diesen Filter sind zurzeit keine Medikamente verfügbar.</p>
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
                  {currentQuestion?.frage}
                  {questionIsCompleted && (
                    <Tippy
                      content={
                        currentQuestion?.med?.[
                          `${!isGermanLeft ? "de" : electiveLang}Explanation`
                        ] || "Keine zusätzliche Information"
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
                  {currentQuestion?.optionen.map((option, idx) => {
                    const { richtigeAntwort } = currentQuestion;
                    const isCompleted = questionsCompleted[currentIndex];

                    if (!allowEdit) {
                      const chosenAnswer = answersNoEdit[currentIndex] || null;
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

        {/* Результати гри */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>{ErgebnisseAnzeigen()}</div>
        )}

        {/* Кнопка налаштувань (завжди видима) */}
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
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {showTutorial && (
        <MedicationElectiveLanguageGameTutorial
          run={showTutorial}
          onFinish={() => {
            setShowTutorial(false);
            localStorage.setItem(
              "medicationElectiveLanguageGameTutorialCompleted",
              "true"
            );
          }}
        />
      )}
    </MainLayout>
  );
};

const MedicationElectiveLanguageGame = () => {
  return (
    <MedicationStatusProvider>
      <MedicationElectiveLanguageGameContent />
    </MedicationStatusProvider>
  );
};

export default MedicationElectiveLanguageGame;