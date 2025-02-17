// src/pages/SimpleChoiceGame/SimpleChoiceGame.jsx

import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./SimpleChoiceGame.module.scss";
import { FaCog } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useTermStatus } from "../../contexts/TermStatusContext";

const SimpleChoiceGame = () => {
  // Стан для модального вікна налаштувань
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Стан для вибору фільтрів (регіон, категорія, режим фільтрації)
  const [region, setRegion] = useState("Alle");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");

  // Нові налаштування гри:
  // Режим відображення термінів: "latin-german", "german-latin", "mixed"
  const [displayMode, setDisplayMode] = useState("latin-german");
  // Кількість запитань, що потрібно пройти
  const [questionCount, setQuestionCount] = useState(20);

  // Стан для гри: список запитань, поточний індекс, вибрана відповідь, статус відповіді
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // null, "correct", "wrong"

  const { termStatuses, toggleStatus } = useTermStatus();

  // Завантаження запитань із медичних термінів за фільтрами
  const loadQuestions = () => {
    const filteredTerms = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id] || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return matchesRegion && matchesCategory;
    });

    // Перемішуємо терміни
    const shuffled = filteredTerms.sort(() => Math.random() - 0.5);
    // Обираємо лише першу частину згідно з questionCount
    const selectedTerms = shuffled.slice(0, questionCount);

    // Формуємо запитання:
    // В залежності від displayMode, для кожного терміну визначається питання і правильна відповідь.
    const questionsData = selectedTerms.map((term) => {
      let mode = displayMode;
      // Якщо режим "mixed", вибираємо випадково
      if (displayMode === "mixed") {
        mode = Math.random() < 0.5 ? "latin-german" : "german-latin";
      }
      let questionText, correctAnswer;
      if (mode === "latin-german") {
        questionText = term.lat;
        correctAnswer = term.de;
      } else {
        questionText = term.de;
        correctAnswer = term.lat;
      }
      // Формуємо неправильні відповіді
      const wrongAnswers = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (mode === "latin-german" ? t.de : t.lat));
      const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);

      return {
        id: term.id,
        question: questionText,
        correctAnswer,
        options,
      };
    });

    setQuestions(questionsData);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerStatus(null);
  };

  // Обробка старту гри
  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
  };

  // Обробка вибору відповіді
  const handleAnswerSelect = (option) => {
    if (selectedAnswer !== null) return; // Забороняємо повторний вибір
    setSelectedAnswer(option);
    if (option === questions[currentIndex].correctAnswer) {
      setAnswerStatus("correct");
      toggleStatus(questions[currentIndex].id, "learned");
    } else {
      setAnswerStatus("wrong");
    }
  };

  // Перехід до наступного запитання
  const handleNext = () => {
    setSelectedAnswer(null);
    setAnswerStatus(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Всі запитання пройдені!");
    }
  };

  // Динамічно формуємо списки регіонів та категорій (як у FlashcardGame)
  const regionsList = Array.from(
    new Set(
      medicalTerms.flatMap((term) => (term.regions || []).map((r) => r))
    )
  );
  const categoriesList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  return (
    <MainLayout>
      <div className={styles.simpleChoiceGame}>
        <h1>Simple Choice Game</h1>

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktop : styles.popupMobile}>
              <button className={styles.modalCloseButton} onClick={() => setSettingsOpen(false)}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Налаштування гри</h2>
              <p className={styles.modalSubtitle}>
                Виберіть регіон, категорію, режим фільтрації, режим відображення та кількість запитань:
              </p>
              <div className={styles.modalField}>
                <label>Регіон:</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className={styles.modalSelect}
                >
                  <option value="Alle">Alle</option>
                  {regionsList.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.modalField}>
                <label>Категорія:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={styles.modalSelect}
                >
                  <option value="Alle">Alle</option>
                  {categoriesList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.modalField}>
                <label>Filtermodus:</label>
                <select
                  value={filterMode}
                  onChange={(e) => setFilterMode(e.target.value)}
                  className={styles.modalSelect}
                >
                  <option value="all">Alle</option>
                  <option value="learned">Gelernt</option>
                  <option value="unlearned">Ungelernt</option>
                  <option value="paused">Pausiert</option>
                </select>
              </div>
              <div className={styles.modalField}>
                <label>Режим відображення:</label>
                <select
                  value={displayMode}
                  onChange={(e) => setDisplayMode(e.target.value)}
                  className={styles.modalSelect}
                >
                  <option value="latin-german">Latin → German</option>
                  <option value="german-latin">German → Latin</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
              {/* Замість селекту для кількості запитань використовується ряд іконок */}
              <div className={styles.modalField}>
                <label>Кількість запитань:</label>
                <div className={styles.questionCountContainer}>
                  {[20, 40, 60, 100, 200].map((count) => (
                    <div
                      key={count}
                      className={`${styles.questionCountIcon} ${
                        questionCount === count ? styles.selected : ""
                      }`}
                      onClick={() => setQuestionCount(count)}
                    >
                      {count}
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
                <h2>{questions[currentIndex].question}</h2>
                <div className={styles.optionsContainer}>
                  {questions[currentIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      className={`
                        ${styles.answerTile} 
                        ${selectedAnswer === option ? (answerStatus === "correct" ? styles.correct : styles.wrong) : ""}
                      `}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button className={styles.nextButton} onClick={handleNext}>
                  Наступне запитання
                </button>
              </div>
            </div>
          </>
        )}

        {/* Кнопка налаштувань під час гри */}
        {!settingsOpen && (
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