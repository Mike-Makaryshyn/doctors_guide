import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import styles from "./FillInBlankGame.module.scss";
import {
  FaCog,
  FaArrowLeft,
  FaArrowRight,
  FaPen,
  FaList,
  FaCheck,
  FaPlay,
  FaPause,
} from "react-icons/fa";
// Використовуємо контекст для медикаментів
import { useMedicationStatus, MedicationStatusProvider } from "../../../../contexts/MedicationStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import FillInBlankGameTutorial from "./FillInBlankGameTutorial";
// Оновлена фонова картинка
import fillInBlankBg from "../../../../assets/medication-fill-in-blank-bg.jpg";

// Фільтр-моди для гри
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const questionCountOptions = [10, 20, 40, 60, 100, 200, "all"];

const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

// Функція для сортування категорій із перенесенням "Andere" в кінець
const sortCategoriesWithAndereLast = (categories) => {
  let sorted = [...categories].sort();
  if (sorted.includes("Andere")) {
    sorted = sorted.filter((cat) => cat !== "Andere");
    sorted.push("Andere");
  }
  return sorted;
};

const MedicationFillInBlankGameContent = () => {
  const navigate = useNavigate();
  // Замість регіону тепер не використовується фільтрація за регіоном
  const { selectedLanguage } = useGetGlobalInfo();
  const { medicationStatuses, toggleStatus, flushChanges, recordCorrectAnswer } = useMedicationStatus();

  // Supabase Auth логіка
  const { user } = useAuth();
  const loading = user === undefined; // treat "undefined" as loading
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Логіка туторіалу
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("fillInBlankGameTutorialCompleted") !== "true"
  );

  // Стан налаштувань гри (без регіонального фільтру)
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [questionCount, setQuestionCount] = useState(20);
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");

  // Стани гри
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});
  const [correctCounts, setCorrectCounts] = useState({});
  const [shownCounts, setShownCounts] = useState({});

  // Результати гри
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);

  // Стейт для відслідковування, чи почата гра
  const [gameStarted, setGameStarted] = useState(false);

  // Отримуємо всі категорії з medications та сортуємо їх із використанням функції sortCategoriesWithAndereLast
  const allCategories = sortCategoriesWithAndereLast(
    Array.from(new Set(medications.flatMap((med) => med.categories || [])))
  );

  // Завантаження питань із medications (без регіонального фільтру)
  const loadQuestions = () => {
    const filteredMeds = medications.filter((med) => {
      const matchesCategory =
        selectedCategory === "Alle" || (med.categories || []).includes(selectedCategory);
      const status = medicationStatuses[med.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return matchesCategory;
    });

    filteredMeds.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    const selectedMeds =
      questionCount === "all" ? filteredMeds : filteredMeds.slice(0, questionCount);

    const newShownCounts = { ...shownCounts };
    selectedMeds.forEach((med) => {
      newShownCounts[med.id] = (newShownCounts[med.id] || 0) + 1;
    });
    setShownCounts(newShownCounts);

    // Формуємо питання на основі речення з {BLANK}
    // Припускаємо, що у даних medications є поля:
    // - sentence: рядок з маркером {BLANK}
    // - answer: правильна відповідь (наприклад, назва препарату)
    // - додаткове поле для варіантів відповіді (наприклад, med.de для німецького)
    const questionsData = selectedMeds.map((med) => {
      const correctAnswer = med.answer;
      const wrongOptions = medications
        .filter((m) => m.id !== med.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((m) => m.de);
      const options = [...wrongOptions, correctAnswer].sort(() => Math.random() - 0.5);
      return {
        id: med.id,
        sentence: med.sentence,
        answer: correctAnswer,
        options,
        med,
      };
    });

    setQuestions(questionsData);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
    setCorrectCounts({});
    setGameFinished(false);
    setGameStartTime(Date.now());
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
    const duration = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(duration);
    setGameFinished(true);
    if (!allowEdit) {
      flushChanges();
    }
  };

  const renderSentence = (sentence) => {
    const parts = sentence.split("{BLANK}");
    let blankTileClass = styles.blankTile;
    let blankTileText = "_____";
    const qIndex = currentIndex;
    const isCompleted = questionsCompleted[qIndex];

    if (isCompleted) {
      const chosen = answersNoEdit[qIndex] || "";
      if (chosen) {
        blankTileText = chosen;
        if (chosen === questions[qIndex].answer) {
          blankTileClass += " " + styles.correct;
        } else {
          blankTileClass += " " + styles.wrong;
        }
      }
    }
    return (
      <div className={styles.sentenceBox}>
        {parts[0]}
        <span className={blankTileClass}>{blankTileText}</span>
        {parts[1]}
      </div>
    );
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { answer: correctAnswer, id } = questions[currentIndex];
    const qIndex = currentIndex;
    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      if (option === correctAnswer) {
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
        toggleStatus(questions[qIndex].id, "learned");
      } else {
        setWrongSelectionsEdit((prev) => {
          const oldList = prev[qIndex] || [];
          if (oldList.includes(option)) return prev;
          return { ...prev, [qIndex]: [...oldList, option] };
        });
      }
    } else {
      setAnswersNoEdit((prev) => ({ ...prev, [qIndex]: option }));
      setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
      if (option === correctAnswer) {
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

  const berechneKategorieFehler = () => {
    const errors = {};
    questions.forEach((frage, index) => {
      if (questionsCompleted[index] && answersNoEdit[index] !== frage.answer) {
        (frage.med.categories || []).forEach((category) => {
          errors[category] = (errors[category] || 0) + 1;
        });
      }
    });
    return errors;
  };

  const ErgebnisseAnzeigen = () => {
    const categoryErrors = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        <button className='modalCloseButton' onClick={() => setGameFinished(false)}>
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
        {Object.keys(categoryErrors).length > 0 && (
          <div>
            <h4>Fehler in den Kategorien:</h4>
            <ul>
              {Object.entries(categoryErrors).map(([category, count]) => (
                <li key={category}>
                  {category}: {count} Fehler
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

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Medikamente lernen – Fill in the Blank Game für Fachsprachprüfung</title>
        <meta
          name="description"
          content="Interaktives Spiel zum Erlernen von Medikamenten im Fill in the Blank Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor."
        />
        <meta name="keywords" content="Medikamente, Fachsprachenprüfung, Fill in the Blank, Lernen, Fachsprache" />
        <meta property="og:title" content="Medikamente lernen – Fill in the Blank Game für Fachsprachprüfung" />
        <meta
          name="og:description"
          content="Interaktives Spiel zum Erlernen von Medikamenten im Fill in the Blank Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor."
        />
        <meta property="og:image" content={fillInBlankBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medikamente lernen – Fill in the Blank Game für Fachsprachprüfung" />
        <meta
          name="twitter:description"
          content="Interaktives Spiel zum Erlernen von Medikamenten im Fill in the Blank Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor."
        />
        <meta name="twitter:image" content={fillInBlankBg} />
      </Helmet>

      <div className={styles.fillInBlankGame}>
        <button className="main_menu_back" onClick={() => navigate("/medications-learning")}>
          &#8592;
        </button>

        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              <button className='modalCloseButton' onClick={closeSettings}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Категорії */}
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
                {/* Режим редагування */}
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

        {settingsOpen && (
          <div className={styles.bottomRightTutorial}>
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
                <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
                <circle cx="12" cy="7" r="0.5" fill="#ededed" />
              </svg>
            </button>
          </div>
        )}

        {!settingsOpen && !gameFinished && questions.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
            </div>
          </div>
        )}

        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>
                Frage {currentIndex + 1} von {questions.length}
              </div>
            </div>

            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                {aktuelleFrage?.sentence.includes("{BLANK}")
                  ? renderSentence(aktuelleFrage.sentence)
                  : aktuelleFrage?.sentence}
                <div className={styles.optionsContainer}>
                  {aktuelleFrage?.options.map((option, idx) => {
                    let btnClass = styles.answerTile;
                    if (questionsCompleted[currentIndex]) {
                      if (option === aktuelleFrage.answer)
                        btnClass += " " + styles.correct;
                      if (option === selectedAnswer && option !== aktuelleFrage.answer)
                        btnClass += " " + styles.wrong;
                    }
                    return (
                      <button
                        key={idx}
                        className={btnClass}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        {option}
                      </button>
                    );
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
      {showTutorial && (
        <FillInBlankGameTutorial run={showTutorial} onFinish={() => setShowTutorial(false)} />
      )}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </MainLayout>
  );
};

const MedicationFillInBlankGame = () => {
  return (
    <MedicationStatusProvider>
      <MedicationFillInBlankGameContent />
    </MedicationStatusProvider>
  );
};

export default MedicationFillInBlankGame;