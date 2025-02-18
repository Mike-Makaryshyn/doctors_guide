import React, { useState, useEffect } from "react";
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

// Функція для уніфікації регіону
const unifyRegion = (r) =>
  r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

// Локальна мапа скорочень для регіонів
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

// Масив режимів фільтрації
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Варіанти кількості запитань
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Режими відображення
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

const SimpleChoiceGame = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const initialRegion = unifyRegion(selectedRegion || "Bayern");

  // Модальне вікно
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Налаштування
  const [region, setRegion] = useState(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Стан питань
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // *** Окремі state для збереження відповідей ***
  // Режим БЕЗ редагування: зберігаємо одну обрану відповідь
  // answersNoEdit[questionIndex] = "яку відповідь обрали"
  const [answersNoEdit, setAnswersNoEdit] = useState({});

  // Режим З редагуванням: зберігаємо список невірних відповідей
  // wrongSelectionsEdit[questionIndex] = ["варіант1", "варіант2", ...]
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});

  // Завершеність кожного питання
  // questionsCompleted[questionIndex] = true/false
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  const { termStatuses, toggleStatus } = useTermStatus();

  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Якщо треба перезапускати гру при зміні allowEdit – можна залишити цей useEffect
  useEffect(() => {
    if (!settingsOpen) {
      loadQuestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowEdit]);

  const loadQuestions = () => {
    // Фільтруємо
    const filteredTerms = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id] || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (
        filterMode === "unlearned" &&
        (status === "learned" || status === "paused")
      )
        return false;
      return matchesRegion && matchesCategory;
    });

    // Перемішуємо
    const shuffled = [...filteredTerms].sort(() => Math.random() - 0.5);

    // Якщо all -> всі, інакше slice
    const selectedTerms =
      questionCount === "all" ? shuffled : shuffled.slice(0, questionCount);

    const questionsData = selectedTerms.map((term) => {
      let mode = displayMode;
      if (displayMode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      let questionText, correctAnswer;
      if (mode === "LatGerman") {
        questionText = term.lat;
        correctAnswer = term.de;
      } else {
        questionText = term.de;
        correctAnswer = term.lat;
      }
      // 3 випадкові неправильні
      const wrongAnswers = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (mode === "LatGerman" ? t.de : t.lat));

      const options = [...wrongAnswers, correctAnswer].sort(
        () => Math.random() - 0.5
      );

      return {
        id: term.id,
        question: questionText,
        correctAnswer,
        options,
      };
    });

    setQuestions(questionsData);
    setCurrentIndex(0);

    // Скидаємо всі дані: відповіді та стани
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

  // Натискаємо "Старт"
  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const correct = questions[currentIndex].correctAnswer;
    const qIndex = currentIndex;

    // Якщо питання завершене – ігноруємо
    if (questionsCompleted[qIndex]) return;

    // --- Режим редагування ---
    if (allowEdit) {
      if (option === correct) {
        // Завершити питання
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
        toggleStatus(questions[qIndex].id, "learned");
      } else {
        // Додаємо var до масиву неправильних (якщо ще нема)
        setWrongSelectionsEdit((prev) => {
          const oldList = prev[qIndex] || [];
          if (oldList.includes(option)) return prev; // уже є
          return {
            ...prev,
            [qIndex]: [...oldList, option],
          };
        });
      }
    }
    // --- Режим без редагування ---
    else {
      // Зберігаємо обрану відповідь
      setAnswersNoEdit((prev) => ({
        ...prev,
        [qIndex]: option,
      }));
      // Завершити питання
      setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));

      // Якщо правильна – оновити статус
      if (option === correct) {
        toggleStatus(questions[qIndex].id, "learned");
      }
    }
  };

  const handleNavigation = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "next" && currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    // **не** скидаємо нічого, аби при поверненні відповідь зберігалась.
  };

  const regionsList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.regions || []))
  );
  const categoriesList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  const currentQuestion = questions[currentIndex];
  const qIndex = currentIndex;
  const questionIsCompleted = questionsCompleted[qIndex] || false;

  return (
    <MainLayout>
      <div className={styles.simpleChoiceGame}>
        <h1>Simple Choice Game</h1>

        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768
                  ? styles.popupDesktopWide
                  : styles.popupMobile
              }
            >
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Налаштування гри</h2>
              <p className={styles.modalSubtitle}>
                Виберіть регіон, категорію, режим фільтрації, режим відображення,
                кількість запитань та редагування відповіді:
              </p>

              {/* Ряд (region, filter, category, edit) */}
              <div className={styles.row}>
                {/* Регіон */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {regionAbbreviations[region] || region}
                    </div>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className={styles.nativeSelect}
                    >
                      <option value="Alle">Alle</option>
                      {regionsList.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Фільтр */}
                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select
                      value={filterMode}
                      onChange={(e) => setFilterMode(e.target.value)}
                      className={styles.nativeSelect}
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
                <div className={styles.categoryColumn}>
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
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={styles.nativeSelect}
                    >
                      <option value="Alle">Alle</option>
                      {categoriesList.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Редагування */}
                <div className={styles.editColumn}>
                  <label className={styles.fieldLabel}>Редагувати</label>
                  <button
                    className={`${styles.editToggleButton} ${
                      allowEdit ? styles.selectedEdit : ""
                    }`}
                    onClick={() => setAllowEdit(!allowEdit)}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>

              {/* Режим відображення */}
              <div className={styles.modalField}>
                <label>Режим відображення:</label>
                <div className={styles.displayModeContainer}>
                  {displayModeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`${styles.displayModeIcon} ${
                        displayMode === option.value ? styles.selected : ""
                      }`}
                      onClick={() => setDisplayMode(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Кількість запитань */}
              <div className={styles.modalField}>
                <label>Кількість запитань:</label>
                <div className={styles.questionCountContainer}>
                  {questionCountOptions.map((countOption) => (
                    <div
                      key={countOption}
                      className={`${styles.questionCountIcon} ${
                        questionCount === countOption ? styles.selected : ""
                      }`}
                      onClick={() => setQuestionCount(countOption)}
                    >
                      {countOption === "all" ? "Все" : countOption}
                    </div>
                  ))}
                </div>
              </div>

              <button className={styles.startButton} onClick={handleStart}>
                Старт
              </button>
            </div>
          </div>
        )}

        {/* Гра */}
        {!settingsOpen && questions.length > 0 && (
          <>
            <div className={styles.progress}>
              Запитання {currentIndex + 1} з {questions.length}
            </div>
            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                <h2>{currentQuestion.question}</h2>
                <div className={styles.optionsContainer}>
                  {currentQuestion.options.map((option, idx) => {
                    const correct = currentQuestion.correctAnswer;

                    // чи завершене це питання?
                    if (!allowEdit) {
                      // === БЕЗ редагування ===
                      // одна обрана відповідь
                      const chosenAnswer = answersNoEdit[qIndex] || null;
                      const isCompleted = questionIsCompleted;
                      let isWrong = false;
                      let isCorrect = false;

                      if (isCompleted) {
                        // якщо опція = правильна -> green
                        if (option === correct) {
                          isCorrect = true;
                        }
                        // якщо це обрана, але невірна
                        if (chosenAnswer === option && option !== correct) {
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
                      // === З редагуванням ===
                      // wrongSelectionsEdit[qIndex] -> [wrong1, wrong2, ...]
                      const wrongAnswersArr = wrongSelectionsEdit[qIndex] || [];
                      const isCompleted = questionIsCompleted;
                      let isWrongEdit = wrongAnswersArr.includes(option);
                      let isCorrectEdit = false;

                      // Якщо питання завершене й опція = правильна – зелений
                      if (isCompleted && option === correct) {
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
                  {currentIndex < questions.length - 1 && (
                    <button
                      className={styles.navButton}
                      onClick={() => handleNavigation("next")}
                    >
                      <FaArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Якщо немає запитань */}
        {!settingsOpen && questions.length === 0 && (
          <div style={{ marginTop: 20 }}>
            <p>На жаль, немає термінів для відображення згідно фільтра.</p>
          </div>
        )}

        {/* Кнопка налаштувань */}
        {(!settingsOpen || window.innerWidth > 768) && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => setSettingsOpen(true)}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SimpleChoiceGame;