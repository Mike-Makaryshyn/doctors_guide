import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./FlashcardGame.module.scss";
import { FaCog, FaInfoCircle, FaCheck, FaPause } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Хук для зчитування query-параметрів
const useQuery = () => new URLSearchParams(useLocation().search);

const FlashcardGame = () => {
  const query = useQuery();
  const initialFilterMode = query.get("filterMode") || "all";
  const initialRegion = query.get("region") || "Усі";
  const initialCategory = query.get("category") || "Всі";

  // Фільтри, які можна змінювати в грі
  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);

  // Стан модального вікна налаштувань (відкрите при завантаженні)
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Список карток та поточний індекс
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState({});

  // Стан перевертання плитки (всі елементи перевертаються)
  const [flipped, setFlipped] = useState(false);

  // Стан статусів: "learned" та "paused"
  const [learned, setLearned] = useState([]);
  const [paused, setPaused] = useState([]);

  // Функція уніфікації регіону
  const unifyRegion = (r) =>
    r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

  // Функція завантаження та перемішування карток за фільтрами
  const loadCards = () => {
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Усі" ||
        (term.regions || []).some((r) => unifyRegion(r) === region);
      const matchesCategory =
        category === "Всі" || (term.categories || []).includes(category);
      return matchesRegion && matchesCategory;
    });
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setProgress({});
    setLearned([]);
    setPaused([]);
  };

  // При натисканні кнопки "Start" завантажуємо картки та закриваємо налаштування
  const handleStart = () => {
    loadCards();
    setSettingsOpen(false);
    setFlipped(false);
  };

  // Обробка перевертання плитки
  const handleFlip = () => {
    setFlipped((prev) => !prev);
    const currentCardId = cards[currentIndex]?.id;
    setProgress((prev) => ({
      ...prev,
      [currentCardId]: (prev[currentCardId] || 0) + 1,
    }));
  };

  // Позначення картки як "вивчене" або "паузовано"
  const toggleLearned = (id) => {
    setLearned((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setPaused((prev) => prev.filter((item) => item !== id));
  };

  const togglePaused = (id) => {
    setPaused((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setLearned((prev) => prev.filter((item) => item !== id));
  };

  // Перехід до наступної картки
  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Ви переглянули всі картки за цими фільтрами!");
    }
  };

  // Списки регіонів та категорій з даних
  const regionsList = Array.from(
    new Set(medicalTerms.flatMap((term) => (term.regions || []).map(unifyRegion)))
  );
  const categoriesList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  if (!cards.length && !settingsOpen) {
    return (
      <MainLayout>
        <div className={styles.flashcardGame}>
          <h1>Гра з флешкартками</h1>
          <p>Немає термінів за поточними фільтрами.</p>
          <div className={styles.bottomRightSettings}>
            <button className={styles.settingsButton} onClick={() => setSettingsOpen(true)}>
              <FaCog />
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <MainLayout>
      <div className={styles.flashcardGame}>
        <h1>Гра з флешкартками</h1>

        {/* Кнопка-шестерня для відкриття налаштувань (знизу праворуч) */}
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setSettingsOpen(true)}>
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h2>Налаштування гри</h2>
              <div className={styles.modalField}>
                <label>Регіон:</label>
                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option value="Усі">Усі</option>
                  {regionsList.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.modalField}>
                <label>Категорія:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Всі">Всі</option>
                  {categoriesList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.modalField}>
                <label>Режим фільтрації:</label>
                <select value={filterMode} onChange={(e) => setFilterMode(e.target.value)}>
                  <option value="all">Всі</option>
                  <option value="learned">Вивчені</option>
                  <option value="unlearned">Не вивчені</option>
                  <option value="paused">Пауза</option>
                </select>
              </div>
              <button className={styles.startButton} onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Якщо гра запущена */}
        {!settingsOpen && (
          <>
            <div className={styles.progress}>
              Картка {currentIndex + 1} з {cards.length}
            </div>

            <div className={styles.card} onClick={handleFlip}>
              <div className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}>
                {/* Передня сторона картки */}
                <div className={styles.cardFront}>
                  <div className={styles.iconsContainer}>
                    <Tippy content={currentCard.deExplanation || "Пояснення відсутнє"} trigger="click">
                      <div className={styles.infoIcon} onClick={(e) => e.stopPropagation()}>
                        <FaInfoCircle />
                      </div>
                    </Tippy>
                    <div className={styles.statusIcons}>
                      <span
                        className={styles.checkIcon}
                        onClick={(e) => { e.stopPropagation(); toggleLearned(currentCard.id); }}
                      >
                        <FaCheck />
                      </span>
                      <span
                        className={styles.pauseIcon}
                        onClick={(e) => { e.stopPropagation(); togglePaused(currentCard.id); }}
                      >
                        <FaPause />
                      </span>
                    </div>
                  </div>
                  <h3>{currentCard.lat}</h3>
                </div>
                {/* Задня сторона картки */}
                <div className={styles.cardBack}>
                  <div className={styles.iconsContainer}>
                    <Tippy content={currentCard.deExplanation || "Пояснення відсутнє"} trigger="click">
                      <div className={styles.infoIcon} onClick={(e) => e.stopPropagation()}>
                        <FaInfoCircle />
                      </div>
                    </Tippy>
                    <div className={styles.statusIcons}>
                      <span
                        className={styles.checkIcon}
                        onClick={(e) => { e.stopPropagation(); toggleLearned(currentCard.id); }}
                      >
                        <FaCheck />
                      </span>
                      <span
                        className={styles.pauseIcon}
                        onClick={(e) => { e.stopPropagation(); togglePaused(currentCard.id); }}
                      >
                        <FaPause />
                      </span>
                    </div>
                  </div>
                  <p>{currentCard.de}</p>
                </div>
              </div>
            </div>

            <button className={styles.nextButton} onClick={handleNext}>
              Далі
            </button>

            <div className={styles.cardProgress}>
              Переглянуто: {progress[currentCard.id] || 0} раз(ів)
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default FlashcardGame;