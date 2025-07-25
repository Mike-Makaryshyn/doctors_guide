import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import styles from "./MedicationFlashcardGame.module.scss";
import { Helmet } from "react-helmet";
import flashcardBg from "../../../../assets/medication-flashcard-bg.jpg";

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

// Kontext
import {
  useMedicationStatus,
  MedicationStatusProvider,
} from "../../../../contexts/MedicationStatusContext";

// Hooks
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";

// Filter-Modi
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzeige-Modi
const displayModeOptions = [
  { value: "LatGerman", label: "Med.→Deu" },
  { value: "GermanLat", label: "Deu→Med." },
  { value: "Mixed", label: "Gemischt" },
];

// Anzahl Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "Alle"];

// Tutorial
import FlashCardGameTutorial from "./MedicationFlashCardGameTutorial";

// Firebase Auth
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

// Компонента для плаваючих прикладів
import FloatingExamples from "./FloatingExamples";

// Helper для сортування категорій (інші – завжди останні)
const sortCategoriesWithAndereLast = (categories) => {
  let sorted = [...categories].sort();
  if (sorted.includes("Andere")) {
    sorted = sorted.filter((cat) => cat !== "Andere");
    sorted.push("Andere");
  }
  return sorted;
};

const useQuery = () => new URLSearchParams(useLocation().search);

const MedicationFlashcardGameContent = () => {
  const navigate = useNavigate();
  const query = useQuery();

  // Supabase Auth
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const loading = user === undefined; // treat "undefined" as loading (if needed)
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // URL-Parameter
  const rawCategory = query.get("category");
  const initialCategory =
    !rawCategory || rawCategory.toLowerCase() === "all" ? "Alle" : rawCategory;

  const rawFilterMode = query.get("filterMode");
  const initialFilterMode =
    !rawFilterMode || rawFilterMode.toLowerCase() === "all"
      ? "unlearned"
      : rawFilterMode;

  // Налаштування
  const { medicationStatuses, toggleStatus, recordCorrectAnswer, scheduleFlushChanges } =
    useMedicationStatus();
  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Tutorial
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("medicationsFlashCardGameTutorialCompleted") !== "true"
  );

  // Стан гри (картки, поточний індекс, перевернута карта)
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Прогрес гри
  const [progress, setProgress] = useState({});
  const [viewedCards, setViewedCards] = useState({});

  // Відповідність мобільного режиму
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // LocalStorage: завантаження прогресу
  useEffect(() => {
    const storedProgress = localStorage.getItem("medicationsFlashkartenFortschritt");
    if (storedProgress) {
      try {
        setProgress(JSON.parse(storedProgress));
      } catch (err) {
        console.warn("Fehler beim Laden des Fortschritts aus LocalStorage:", err);
      }
    }
  }, []);

  // LocalStorage: збереження прогресу
  useEffect(() => {
    localStorage.setItem("medicationsFlashkartenFortschritt", JSON.stringify(progress));
  }, [progress]);

  // Підготовка категорій
  const allCategories = sortCategoriesWithAndereLast(
    Array.from(new Set(medications.flatMap((m) => m.categories || [])))
  );

  // Завантаження карток (без автоматичного скидання при закритті модального вікна)
  const loadCards = () => {
    const filtered = medications.filter((med) => {
      const status = medicationStatuses[med.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;

      if (category !== "Alle") {
        if (!(med.categories || []).includes(category)) {
          return false;
        }
      }
      return true;
    });

    // Сортування за кількістю переглядів (від меншого до більшого)
    filtered.sort((a, b) => {
      const countA = progress[a.id] || 0;
      const countB = progress[b.id] || 0;
      return countA - countB;
    });

    // Обмеження кількості
    const selectedMeds =
      questionCount === "Alle" ? filtered : filtered.slice(0, questionCount);

    // При завантаженні збільшуємо лічильник переглядів
    const newProgress = { ...progress };
    selectedMeds.forEach((med) => {
      newProgress[med.id] = (newProgress[med.id] || 0) + 1;
    });
    setProgress(newProgress);

    // Формуємо текст для передньої/задньої сторінки залежно від режиму
    const prepared = selectedMeds.map((med) => {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const frontText = mode === "LatGerman" ? med.lat : med.de;
      const backText = mode === "LatGerman" ? med.de : med.lat;
      return { ...med, frontText, backText };
    });

    setCards(prepared);
    setCurrentIndex(0);
    setFlipped(false);
    setViewedCards({});
  };

  // Старт гри – завантажує картки та закриває модальне вікно
  const handleStart = () => {
    setSettingsOpen(false);
    loadCards();
  };

  const handleRestart = () => {
    setFlipped(false);
    setCurrentIndex(0);
  };

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  // Відмітка картки як "вивченої"
  const toggleLearnedCard = (id) => {
    if (flipped) return;
    if (requireAuth()) return;
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  // Відмітка картки як "пауза"
  const togglePausedCard = (id) => {
    if (flipped) return;
    if (requireAuth()) return;
    toggleStatus(id, "paused");
    scheduleFlushChanges();
    if (filterMode === "paused") {
      setCards((prev) => prev.filter((card) => card.id !== id));
    }
  };

  // Навігація
  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      alert("Sie sind bei der ersten Karte!");
    }
  };

  // Оновлення прогресу при переході на нову картку
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

  // Перевірка фільтрів при зміні статусів
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newFiltered = medications.filter((med) => {
        const status = medicationStatuses[med.id]?.status || "unlearned";

        if (filterMode === "learned" && status !== "learned") return false;
        if (filterMode === "paused" && status !== "paused") return false;
        if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
          return false;

        if (category !== "Alle") {
          if (!(med.categories || []).includes(category)) {
            return false;
          }
        }
        return true;
      });

      const validIds = newFiltered.map((m) => m.id);
      const stillValid = cards.filter((c) => validIds.includes(c.id));

      if (!stillValid.find((c) => c.id === cards[currentIndex]?.id)) {
        setCurrentIndex(0);
      }
      if (stillValid.length !== cards.length) {
        setCards(stillValid);
      }
    }
  }, [medicationStatuses, category, filterMode]);

  // Якщо картка показується 6+ разів, вона вважається "вивченою"
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
        <title>Medikamenten-Flashcard-Spiel für Fachsprachenprüfung</title>
        <meta
          name="description"
          content="Dieses Flashcard-Spiel unterstützt Sie bei der Fachsprachenprüfung im medizinischen Bereich. Lernen Sie Fachbegriffe und Medikationswissen interaktiv."
        />
        <meta
          name="keywords"
          content="Medikamente, Fachsprachenprüfung, Flashcard, Lernen, medizinische Fachsprache"
        />
        <meta
          property="og:title"
          content="Medikamenten-Flashcard-Spiel für Fachsprachenprüfung"
        />
        <meta
          name="twitter:description"
          content="Interaktives Flashcard-Spiel zur Vorbereitung auf die Fachsprachenprüfung im medizinischen Bereich."
        />
        <meta property="og:image" content={flashcardBg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medikamenten-Flashcard-Spiel für Fachsprachenprüfung"
        />
        <meta name="twitter:image" content={flashcardBg} />
      </Helmet>

      {/* Показ прикладів, якщо вони є */}
      {currentCard && currentCard.examples && (
        <FloatingExamples examples={currentCard.examples} />
      )}

      <div className={styles.flashcardGame}>
        {/* Кнопка назад */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/medications-learning")}
        >
          &#8592;
        </button>

        {/* AuthModal */}
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

        {/* Кнопка для відкриття налаштувань (внизу праворуч) */}
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

        {/* Якщо немає карток після фільтрації */}
        {!cards.length && !settingsOpen && (
          <div>
            <div className={styles.noQuestionsOverlay}>
              <div className={styles.noQuestionsMessage}>
                <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
              </div>
            </div>
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

        {/* Показ картки */}
        {cards.length > 0 && !settingsOpen && currentCard && (
          <>
            <div className={styles.angCounter}>Ang: {currentCardProgress}</div>
            <div className={styles.progress}>
              Karte {currentIndex + 1} von {cards.length}
            </div>

            <div className={styles.gameContainer}>
              <div className={styles.card} onClick={handleFlip}>
                <div
                  className={`${styles.cardInner} ${
                    flipped ? styles.flipped : ""
                  } ${
                    (medicationStatuses[currentCard.id]?.status === "learned" &&
                      styles.learned) ||
                    (medicationStatuses[currentCard.id]?.status === "paused" &&
                      styles.paused) ||
                    ""
                  }`}
                >
                  {/* Передня сторона */}
                  <div
                    className={styles.cardFront}
                    style={{ pointerEvents: flipped ? "none" : "auto" }}
                  >
                    <div className={styles.iconsContainer}>
                      <Tippy
                        content={currentCard.deExplanation || "Keine Erklärung verfügbar"}
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

                  {/* Задня сторона */}
                  <div
                    className={styles.cardBack}
                    style={{ pointerEvents: flipped ? "auto" : "none" }}
                  >
                    <Tippy
                      content={currentCard.deExplanation || "Keine Erklärung verfügbar"}
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

            <div className={styles.navigationContainer}>
              <button className={styles.navButton} onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              {currentIndex < cards.length - 1 ? (
                <button className={styles.navButton} onClick={handleNext}>
                  <FaArrowRight />
                </button>
              ) : (
                <button className={styles.navButton} onClick={handleRestart}>
                  Neu starten
                </button>
              )}
            </div>
          </>
        )}

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={isMobile ? styles.popupMobile : styles.popupDesktop}>
              {/* Кнопка закриття, яка ТІЛЬКИ закриває модальне вікно */}
              <button
                className='modalCloseButton'
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>

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

                {/* Категорія (лише текст) */}
                <div className={styles.categoryColumn} data-tutorial="categorySelect">
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.categoryCell}>
                      {category === "Alle"
                        ? "Alle"
                        : category === "Andere"
                        ? "Andr."
                        : category}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={category}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setCategory(e.target.value);
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
                      {countOption === "Alle" ? "Alle" : countOption}
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

        {/* Кнопка для запуску туторіалу */}
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
              <circle cx="12" cy="12" r="10" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}
        {showTutorial && (
          <FlashCardGameTutorial
            run={showTutorial}
            onFinish={() => {
              setShowTutorial(false);
              localStorage.setItem("medicationsFlashCardGameTutorialCompleted", "true");
            }}
          />
        )}
      </div>
    </MainLayout>
  );
};

const MedicationFlashcardGame = () => {
  return (
    <MedicationStatusProvider>
      <MedicationFlashcardGameContent />
    </MedicationStatusProvider>
  );
};

export default MedicationFlashcardGame;