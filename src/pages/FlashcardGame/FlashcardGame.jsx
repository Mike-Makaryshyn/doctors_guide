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

  // Змінено: встановлюємо за замовчуванням значення "Alle" для region та category
  const rawRegion = query.get("region");
  const initialRegion = (!rawRegion || rawRegion.toLowerCase() === "all") ? "Alle" : rawRegion;
  
  const rawCategory = query.get("category");
  const initialCategory = (!rawCategory || rawCategory.toLowerCase() === "all") ? "Alle" : rawCategory;
  
  const rawFilterMode = query.get("filterMode");
  const initialFilterMode = (!rawFilterMode || rawFilterMode.toLowerCase() === "all") ? "unlearned" : rawFilterMode;

  const { termStatuses, toggleStatus } = useTermStatus();

  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState({});
  // false = front, true = back
  const [flipped, setFlipped] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const unifyRegion = (r) =>
    r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

  const loadCards = () => {
    console.log("loadCards викликано");
    console.log("Поточні параметри:", { region, category, filterMode });
    console.log("Кількість медичних термінів:", medicalTerms.length);
    console.log("termStatuses:", termStatuses);

    const filtered = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" ||
        (term.regions || []).some((r) => unifyRegion(r) === region);
      const matchesCategory =
        category === "Alle" ||
        (term.categories || []).includes(category);
      const status = termStatuses[term.id] || "unlearned";

      console.log(`Перевіряємо термін ${term.id}:`, {
        matchesRegion,
        matchesCategory,
        status,
        filterMode,
      });

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return matchesRegion && matchesCategory;
    });

    console.log("Фільтровані терміни:", filtered);

    const shuffled = filtered.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setProgress({});
    setFlipped(false);
  };

  const handleStart = () => {
    setSettingsOpen(false);
    setTimeout(() => {
      loadCards();
    }, 0);
  };

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const toggleLearned = (id) => {
    if (flipped) return;
    toggleStatus(id, "learned");
  };

  const togglePaused = (id) => {
    if (flipped) return;
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
      alert("Sie haben alle Karten mit diesen Filtern durchgesehen!");
    }
  };

  const handlePrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("Sie befinden sich auf der ersten Karte!");
    }
  };

  // Оновлення карт при зміні фільтрів
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newCards = medicalTerms.filter((term) => {
        const matchesRegion =
          region === "Alle" ||
          (term.regions || []).some((r) => unifyRegion(r) === region);
        const matchesCategory =
          category === "Alle" || (term.categories || []).includes(category);
        const status = termStatuses[term.id] || "unlearned";
        if (filterMode === "learned" && status !== "learned") return false;
        if (filterMode === "paused" && status !== "paused") return false;
        if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
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

  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const currentCard = cards[currentIndex];
      if (currentCard) {
        setProgress((prev) => ({
          ...prev,
          [currentCard.id]: (prev[currentCard.id] || 0) + 1,
        }));
      }
    }
  }, [settingsOpen, currentIndex, cards]);

  if (!cards.length && !settingsOpen) {
    return (
      <MainLayout>
        <div className={styles.flashcardGame}>
          <h1>Flashcard Game</h1>
          <p>Keine Karten mit den aktuellen Filtern gefunden.</p>
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
        <h1>Flashcard Game</h1>

        {(!isMobile || !settingsOpen) && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => setSettingsOpen(true)}
            >
              <FaCog />
            </button>
          </div>
        )}

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
              <h2 className={styles.modalTitle}>Spieleinstellungen</h2>
              <p className={styles.modalSubtitle}>
                Wählen Sie Region und Kategorie:
              </p>
              <div className={styles.modalField}>
                <label>Region:</label>
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
                <label>Kategorie:</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
              <button className={styles.startButton} onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {!settingsOpen && currentCard && (
          <>
            <div className={styles.progress}>
              Karte {currentIndex + 1} von {cards.length}
            </div>

            <div className={styles.card} onClick={handleFlip}>
              <div
                className={`
                  ${styles.cardInner} 
                  ${flipped ? styles.flipped : ""}
                  ${currentStatus === "learned" ? styles.learned : currentStatus === "paused" ? styles.paused : ""}
                `}
              >
                <div
                  className={styles.cardFront}
                  style={{ pointerEvents: flipped ? "none" : "auto" }}
                >
                  <div className={styles.iconsContainer}>
                    <Tippy content={currentCard.deExplanation || "Keine Erklärung verfügbar"} trigger="click">
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
                        title="Gelernt"
                      >
                        <FaCheck />
                      </button>
                      <button
                        className={styles.deferButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePaused(currentCard.id);
                        }}
                        title="Pausiert"
                      >
                        <FaPause />
                      </button>
                    </div>
                  </div>
                  <h3>{currentCard.lat}</h3>
                </div>
                <div
                  className={styles.cardBack}
                  style={{ pointerEvents: flipped ? "auto" : "none" }}
                >
                  <Tippy content={currentCard.deExplanation || "Keine Erklärung verfügbar"} trigger="click">
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
              Angezeigt: {progress[currentCard.id] || 0} Mal
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default FlashcardGame;