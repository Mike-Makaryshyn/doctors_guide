// src/pages/FlashcardGame/FlashcardGame.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./FlashcardGame.module.scss";
import { FaCog, FaCheck, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useTermStatus } from "../../contexts/TermStatusContext";

const useQuery = () => new URLSearchParams(useLocation().search);

const FlashcardGame = () => {
  const query = useQuery();
  const initialFilterMode = query.get("filterMode") || "all";
  const initialRegion = query.get("region") || "Усі";
  const initialCategory = query.get("category") || "Всі";

  const { termStatuses, toggleStatus } = useTermStatus();

  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState({});
  // Булевий стан для перевороту: лише 0° або 180°
  const [flipped, setFlipped] = useState(false);

  const unifyRegion = (r) =>
    r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

  const loadCards = () => {
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Усі" ||
        (term.regions || []).some((r) => unifyRegion(r) === region);
      const matchesCategory =
        category === "Всі" || (term.categories || []).includes(category);
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
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setProgress({});
    setFlipped(false);
  };

  const handleStart = () => {
    loadCards();
    setSettingsOpen(false);
  };

  const handleFlip = () => {
    setFlipped((prev) => !prev);
    const currentCardId = cards[currentIndex]?.id;
    if (currentCardId) {
      setProgress((prev) => ({
        ...prev,
        [currentCardId]: (prev[currentCardId] || 0) + 1,
      }));
    }
  };

  const toggleLearned = (id) => {
    toggleStatus(id, "learned");
  };

  const togglePaused = (id) => {
    toggleStatus(id, "paused");
    if (filterMode === "paused") {
      setFilterMode("all");
    }
  };

  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Ви переглянули всі картки за цими фільтрами!");
    }
  };

  const handlePrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("Ви на першій картці!");
    }
  };

  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newCards = medicalTerms.filter((term) => {
        const matchesRegion =
          region === "Усі" ||
          (term.regions || []).some((r) => unifyRegion(r) === region);
        const matchesCategory =
          category === "Всі" || (term.categories || []).includes(category);
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
      const newCardsOrdered = cards.filter((card) =>
        newCards.find((nc) => nc.id === card.id)
      );
      if (!newCardsOrdered.find((card) => card.id === cards[currentIndex]?.id)) {
        setCurrentIndex(0);
      }
      if (newCardsOrdered.length !== cards.length) {
        setCards(newCardsOrdered);
      }
    }
  }, [termStatuses, region, category, filterMode]);

  const regionsList = Array.from(
    new Set(
      medicalTerms.flatMap((term) =>
        (term.regions || []).map((r) => unifyRegion(r))
      )
    )
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
            <button
              className={styles.settingsButton}
              onClick={() => setSettingsOpen(true)}
            >
              <FaCog />
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const currentCard =
    !settingsOpen && cards.length > 0 ? cards[currentIndex] : null;
  const currentStatus = currentCard
    ? termStatuses[currentCard.id] || "unlearned"
    : "unlearned";

  return (
    <MainLayout>
      <div className={styles.flashcardGame}>
        <h1>Гра з флешкартками</h1>

        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setSettingsOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768 ? styles.popupDesktop : styles.popupMobile
              }
            >
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Налаштування гри</h2>
              <p className={styles.modalSubtitle}>
                Оберіть регіон та категорію:
              </p>
              <div className={styles.modalField}>
                <label>Регіон:</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className={styles.modalSelect}
                >
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
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={styles.modalSelect}
                >
                  <option value="Усі">Усі</option>
                  {categoriesList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.modalField}>
                <label>Режим фільтрації:</label>
                <select
                  value={filterMode}
                  onChange={(e) => setFilterMode(e.target.value)}
                  className={styles.modalSelect}
                >
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

        {!settingsOpen && currentCard && (
          <>
            <div className={styles.progress}>
              Картка {currentIndex + 1} з {cards.length}
            </div>

            <div className={styles.card} onClick={handleFlip}>
              <div
                className={`
                  ${styles.cardInner} 
                  ${flipped ? styles.flipped : ""}
                  ${currentStatus === "learned" ? styles.learned : currentStatus === "paused" ? styles.paused : ""}
                `}
              >
                <div className={styles.cardFront}>
                  <div className={styles.iconsContainer}>
                    <Tippy content={currentCard.deExplanation || "Пояснення відсутнє"} trigger="click">
                      <button className={styles.infoButton} onClick={(e) => e.stopPropagation()}>
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
                    </Tippy>
                    <div className={styles.statusIcons}>
                      <button
                        className={styles.markCompletedButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLearned(currentCard.id);
                        }}
                        title="Вивчене"
                      >
                        <FaCheck />
                      </button>
                      <button
                        className={styles.deferButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePaused(currentCard.id);
                        }}
                        title="Пауза"
                      >
                        <FaPause />
                      </button>
                    </div>
                  </div>
                  <h3>{currentCard.lat}</h3>
                </div>
                <div className={styles.cardBack}>
                  {/* На cardBack рендеримо лише info-кнопку */}
                  <div className={styles.iconsContainer}>
                    <Tippy content={currentCard.deExplanation || "Пояснення відсутнє"} trigger="click">
                      <button className={styles.infoButton} onClick={(e) => e.stopPropagation()}>
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
                    </Tippy>
                  </div>
                  <p>{currentCard.de}</p>
                </div>
              </div>
            </div>

            <div className={styles.navigationButtons}>
              <button className={styles.navButton} onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <button className={styles.navButton} onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>

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