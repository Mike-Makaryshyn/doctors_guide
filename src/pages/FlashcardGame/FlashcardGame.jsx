import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./FlashcardGame.module.scss";
import { Helmet } from "react-helmet";
import flashcardBg from "../../assets/flashcard-bg.jpg";

// Icons
import {
  FaCog,
  FaCheck,
  FaPause,
  FaArrowLeft,
  FaArrowRight,
  FaList,
  FaPlay,
} from "react-icons/fa";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Context / Hooks
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Kategorie-Icons
import { categoryIcons } from "../../constants/CategoryIcons";

// Region-Abkürzungen
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

// Фільтри
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Режими відображення
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

// Кількість питань
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Допоміжна функція для отримання регіону
const getRegionLabel = (r) => regionAbbreviations[r] || r;

// Хук для отримання URL параметрів
const useQuery = () => new URLSearchParams(useLocation().search);

import FlashCardGameTutorial from "./FlashCardGameTutorial";

const FlashcardGame = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const { selectedRegion } = useGetGlobalInfo();

  // Отримання параметрів з URL або значення за замовчуванням
  const rawRegion = query.get("region");
  const initialRegion =
    !rawRegion || rawRegion.toLowerCase() === "all" ? "Alle" : rawRegion;
  const rawCategory = query.get("category");
  const initialCategory =
    !rawCategory || rawCategory.toLowerCase() === "all" ? "Alle" : rawCategory;
  const rawFilterMode = query.get("filterMode");
  const initialFilterMode =
    !rawFilterMode || rawFilterMode.toLowerCase() === "all"
      ? "unlearned"
      : rawFilterMode;

  // Отримання методів з контексту
  const {
    termStatuses,
    toggleStatus,
    recordCorrectAnswer,
    scheduleFlushChanges,
  } = useTermStatus();

  // Стан налаштувань гри
  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("flashCardGameTutorialCompleted") !== "true"
  );

  // Стан гри
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  // "Ang" – лічильник показів для кожної картки (за поточну сесію)
  const [progress, setProgress] = useState({});
  const [viewedCards, setViewedCards] = useState({});
  const [gameFinished, setGameFinished] = useState(false);

  // Responsive
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Завантаження "Ang"-даних із LocalStorage
  useEffect(() => {
    const storedProgress = localStorage.getItem("flashcardProgress");
    if (storedProgress) {
      try {
        setProgress(JSON.parse(storedProgress));
      } catch (err) {
        console.warn("Помилка при завантаженні progress з LocalStorage:", err);
      }
    }
  }, []);

  // Збереження "Ang"-даних у LocalStorage
  useEffect(() => {
    localStorage.setItem("flashcardProgress", JSON.stringify(progress));
  }, [progress]);

  // Функція завантаження карток з урахуванням фільтрів
  const loadCards = () => {
    const filtered = medicalTerms.filter((term) => {
      const status = termStatuses[term.id]?.status || "unlearned";
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        category === "Alle" || (term.categories || []).includes(category);

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return matchesRegion && matchesCategory;
    });

    // Сортуємо терміни за кількістю показів (менше показів – раніше)
    filtered.sort((a, b) => {
      const countA = progress[a.id] || 0;
      const countB = progress[b.id] || 0;
      return countA - countB;
    });

    const selectedTerms =
      questionCount === "all" ? filtered : filtered.slice(0, questionCount);

    // Оновлюємо лічильник "Ang" для кожної обраної картки
    const newProgress = { ...progress };
    selectedTerms.forEach((term) => {
      newProgress[term.id] = (newProgress[term.id] || 0) + 1;
    });
    setProgress(newProgress);

    const prepared = selectedTerms.map((term) => {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const frontText = mode === "LatGerman" ? term.lat : term.de;
      const backText = mode === "LatGerman" ? term.de : term.lat;
      return { ...term, frontText, backText };
    });

    setCards(prepared);
    setCurrentIndex(0);
    setFlipped(false);
    setViewedCards({});
  };

  // Запуск гри при закритті налаштувань
  useEffect(() => {
    if (!settingsOpen) {
      loadCards();
      setGameFinished(false);
    }
  }, [settingsOpen]);

  const handleStart = () => {
    setSettingsOpen(false);
    loadCards();
    setGameFinished(false);
  };

  // Функція перевертання карти
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  // Функції зміни статусу: позначення картки як "Вивчений" або "Паузований"
  const toggleLearnedCard = (id) => {
    if (flipped) return;
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  const togglePausedCard = (id) => {
    if (flipped) return;
    toggleStatus(id, "paused");
    scheduleFlushChanges();
    // Якщо застосовано фільтр "паузованих", вилучаємо картку із колоди
    if (filterMode === "paused") {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    }
  };

  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameFinished(true);
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

  // При кожному показі картки оновлюємо "Ang" (збільшуємо лише, якщо ця карта ще не була відмічена в сесії)
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const currentCard = cards[currentIndex];
      if (currentCard && !viewedCards[currentCard.id]) {
        setProgress((prev) => ({
          ...prev,
          [currentCard.id]: (prev[currentCard.id] || 0) + 1,
        }));
        setViewedCards((prev) => ({ ...prev, [currentCard.id]: true }));
      }
    }
  }, [currentIndex, settingsOpen, cards, viewedCards]);

  // Оновлення списку карток при зміні фільтрів чи статусів
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newFilteredCards = medicalTerms.filter((term) => {
        const status = termStatuses[term.id]?.status || "unlearned";
        const matchesRegion =
          region === "Alle" || (term.regions || []).includes(region);
        const matchesCategory =
          category === "Alle" || (term.categories || []).includes(category);
        if (filterMode === "learned" && status !== "learned") return false;
        if (filterMode === "paused" && status !== "paused") return false;
        if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
          return false;
        return matchesRegion && matchesCategory;
      });
      const validIds = newFilteredCards.map((t) => t.id);
      const stillValid = cards.filter((c) => validIds.includes(c.id));
      if (!stillValid.find((c) => c.id === cards[currentIndex]?.id)) {
        setCurrentIndex(0);
      }
      if (stillValid.length !== cards.length) {
        setCards(stillValid);
      }
    }
  }, [termStatuses, region, category, filterMode]);

  // Умовна змінна: чи немає карток?
  const noCardsAvailable = !cards.length && !settingsOpen;

  // Автоматичне додавання "плюсів": якщо для карти накопичено 6 показів, додаємо +3 до correctCount
  const currentCard = cards[currentIndex] || null;
  const currentCardProgress = currentCard ? progress[currentCard.id] || 0 : 0;

  useEffect(() => {
    if (currentCard && progress[currentCard.id] >= 6) {
      recordCorrectAnswer(currentCard.id, 3);
      setProgress((prev) => ({ ...prev, [currentCard.id]: 0 }));
    }
  }, [progress, currentCard, recordCorrectAnswer]);

  return (
    <MainLayout>
      <Helmet>
        <title>Медичне Flashcard Game – Вивчайте медичні терміни граючи</title>
        <meta
          name="description"
          content="Це Flashcard Game дозволяє вам вивчати медичні терміни у інтерактивному режимі. Карти з’являються випадково, а поле 'Ang' показує, скільки разів карта була показана протягом сесії. Покращуйте свої знання та мовну компетентність!"
        />
        <meta
          name="keywords"
          content="медицина, flashcard, вивчення, медичні терміни, термінологія, інтерактивна гра, спеціальна мова"
        />
        <meta property="og:title" content="Медичне Flashcard Game – Вивчайте медичні терміни граючи" />
        <meta
          name="twitter:description"
          content="Це Flashcard Game допомагає вам вивчати медичні терміни. Поле 'Ang' показує, як часто карта була показана під час сесії."
        />
        <meta property="og:image" content={flashcardBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Медичне Flashcard Game – Вивчайте медичні терміни граючи" />
        <meta name="twitter:image" content={flashcardBg} />
      </Helmet>

      <div className={styles.flashcardGame}>
        {/* Кнопка "Назад" */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/terminology-learning")}
        >
          &#8592;
        </button>

        {/* Кнопка налаштувань (внизу праворуч) */}
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

        {/* Умовний рендеринг: якщо немає карток */}
        {noCardsAvailable && (
          <div>
            <p>Немає карток за заданими фільтрами.</p>
            <div className={styles.bottomRightSettings}>
              <button
                className={styles.settingsButton}
                onClick={() => setSettingsOpen(true)}
              >
                <FaCog />
              </button>
            </div>
          </div>
        )}

        {/* Якщо є картки і гра не завершена */}
        {!noCardsAvailable && !gameFinished && currentCard && !settingsOpen && (
          <>
            {/* Лічильник Ang */}
            <div className={styles.angCounter}>Ang: {currentCardProgress}</div>

            <div className={styles.progress}>
              Karte {currentIndex + 1} von {cards.length}
            </div>
            <div className={styles.gameContainer}>
              <div className={styles.card} onClick={handleFlip}>
                <div
                  className={`${styles.cardInner} ${flipped ? styles.flipped : ""} ${
                    (termStatuses[currentCard.id]?.status === "learned" && styles.learned) ||
                    (termStatuses[currentCard.id]?.status === "paused" && styles.paused) ||
                    ""
                  }`}
                >
                  {/* Vorderseite */}
                  <div
                    className={styles.cardFront}
                    style={{ pointerEvents: flipped ? "none" : "auto" }}
                  >
                    <div className={styles.iconsContainer}>
                      <Tippy
                        content={
                          currentCard.deExplanation || "Keine Erklärung verfügbar"
                        }
                        trigger="click"
                      >
                        <button
                          className={styles.infoButton}
                          onClick={(e) => e.stopPropagation()}
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
                      </Tippy>
                      <div className={styles.statusIcons}>
                        <button
                          className={styles.markCompletedButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLearnedCard(currentCard.id);
                          }}
                          title="Gelernt"
                        >
                          <FaCheck />
                        </button>
                        <button
                          className={styles.deferButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePausedCard(currentCard.id);
                          }}
                          title="Pausiert"
                        >
                          <FaPause />
                        </button>
                      </div>
                    </div>
                    <h3>{currentCard.frontText}</h3>
                  </div>

                  {/* Rückseite */}
                  <div
                    className={styles.cardBack}
                    style={{ pointerEvents: flipped ? "auto" : "none" }}
                  >
                    <Tippy
                      content={
                        currentCard.deExplanation || "Keine Erklärung verfügbar"
                      }
                      trigger="click"
                    >
                      <button
                        className={styles.infoButton}
                        onClick={(e) => e.stopPropagation()}
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
                    </Tippy>
                    <p>{currentCard.backText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Навігаційні кнопки */}
            <div className={styles.navigationContainer}>
              <button className={styles.navButton} onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              {currentIndex < cards.length - 1 ? (
                <button className={styles.navButton} onClick={handleNext}>
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  className={styles.navButton}
                  onClick={() => setGameFinished(true)}
                >
                  Spiel beenden
                </button>
              )}
            </div>
          </>
        )}

        {/* Якщо гра завершена */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>
            <div className={styles.resultsTile}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setGameFinished(false)}
              >
                ×
              </button>
              <h3>Spielergebnisse</h3>
              <p>Ergebnisse werden hier angezeigt.</p>
              <button className={styles.startButton} onClick={handleStart}>
                Neues Spiel starten
              </button>
            </div>
          </div>
        )}

        {/* Модаль з налаштуваннями */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
       <div className={isMobile ? styles.popupMobile : styles.popupDesktop}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Налаштування</h2>
              <div className={styles.row}>
                {/* Регіон */}
                <div className={styles.regionColumn} data-tutorial="regionSelect">
                  <label className={styles.fieldLabel}>Регіон</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="Alle">Alle</option>
                      {Array.from(new Set(medicalTerms.flatMap((t) => t.regions || []))).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Фільтр */}
                <div className={styles.filterColumn} data-tutorial="filterColumn">
                  <label className={styles.fieldLabel}>Фільтр</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={filterMode}
                      onChange={(e) => setFilterMode(e.target.value)}
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
             {/* Категорія */}
<div className={styles.categoryColumn} data-tutorial="categorySelect">
  <label className={styles.fieldLabel}>Kategorie</label>
  <div className={styles.selectWrapper}>
    <div className={styles.categoryCell}>
      {categoryIcons[category] && (
        <img
          src={categoryIcons[category]}
          alt={category}
          className={styles.categoryIcon}
        />
      )}
    </div>
    <select
      className={styles.nativeSelect}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="Alle">Alle</option>
      {Array.from(new Set(medicalTerms.flatMap((t) => t.categories || []))).map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  </div>
</div>
              </div>

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
                      onClick={() => setDisplayMode(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>

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
                      onClick={() => setQuestionCount(countOption)}
                    >
                      {countOption === "all" ? "Alles" : countOption}
                    </div>
                  ))}
                </div>
              </div>
              <button
                className={styles.startButton}
                data-tutorial="startButton"
                onClick={handleStart}
              >
                Start
              </button>
            </div>
          </div>
        )}

        {/* Кнопка запуску туторіалу */}
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
              <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}
            {showTutorial && (
  <FlashCardGameTutorial
    run={showTutorial}
    onFinish={() => setShowTutorial(false)}
  />
)}
      </div>
    </MainLayout>
  );
};

export default FlashcardGame;