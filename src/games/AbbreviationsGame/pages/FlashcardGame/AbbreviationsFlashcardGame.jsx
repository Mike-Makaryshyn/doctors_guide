// Це моя версія гри для абревіацій – AbbreviationsFlashcardGame (інші частини залишились без змін)
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations as abbreviations } from "../../../../constants/medicalAbbreviations";
import styles from "./AbbreviationsFlashcardGame.module.scss";
import { Helmet } from "react-helmet";
import flashcardBg from "../../../../assets/abbreviation-flashcard-bg.jpg";

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

// Context
import {
  useAbbreviationsStatus,
  AbbreviationsStatusProvider,
} from "../../../../contexts/AbbreviationsStatusContext";

// Hooks
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";

// Filter modes
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Display modes – як у Medication: «LatGerman», «GermanLat», «Mixed»
const displayModeOptions = [
  { value: "LatGerman", label: "Abk.→Deu" },
  { value: "GermanLat", label: "Deu→Abk." },
  { value: "Mixed", label: "Gemischt" },
];

// Anzahl Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "Alle"];

// Tutorial
import FlashCardGameTutorial from "./AbbreviationsFlashCardGameTutorial";

// Supabase Auth
import { useAuth } from "../../../../hooks/useAuth";

// Helper для сортування категорій
const sortCategoriesWithAndereLast = (categories) => {
  let sorted = [...categories].sort();
  if (sorted.includes("Andere")) {
    sorted = sorted.filter((cat) => cat !== "Andere");
    sorted.push("Andere");
  }
  return sorted;
};

const useQuery = () => new URLSearchParams(useLocation().search);

const AbbreviationsFlashcardGameContent = () => {
  const navigate = useNavigate();
  const query = useQuery();

  // Auth
  const { user } = useAuth();
  const requireAuth = () => {
    if (!user) {
      // Тут можна показати кастомний алерт/модалку, якщо потрібно
      alert("Bitte melden Sie sich an, um diese Funktion zu nutzen.");
      return true;
    }
    return false;
  };

  // URL-параметри
  const rawCategory = query.get("category");
  const initialCategory =
    !rawCategory || rawCategory.toLowerCase() === "all" ? "Alle" : rawCategory;

  const rawFilterMode = query.get("filterMode");
  const initialFilterMode =
    !rawFilterMode || rawFilterMode.toLowerCase() === "all"
      ? "unlearned"
      : rawFilterMode;

  // Налаштування
  const { abbreviationStatuses, toggleStatus, recordCorrectAnswer, scheduleFlushChanges } =
    useAbbreviationsStatus();
  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Tutorial state
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("abbreviationsFlashCardGameTutorialCompleted") !== "true"
  );

  // Стан гри: карточки, поточний індекс, перевернута карта
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Прогрес гри
  const [progress, setProgress] = useState({});
  const [viewedCards, setViewedCards] = useState({});

  // Адаптація під мобільний режим
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Завантаження прогресу з LocalStorage
  useEffect(() => {
    const storedProgress = localStorage.getItem("abbreviationsFlashkartenFortschritt");
    if (storedProgress) {
      try {
        setProgress(JSON.parse(storedProgress));
      } catch (err) {
        console.warn("Fehler beim Laden des Fortschritts aus LocalStorage:", err);
      }
    }
  }, []);

  // Збереження прогресу в LocalStorage
  useEffect(() => {
    localStorage.setItem("abbreviationsFlashkartenFortschritt", JSON.stringify(progress));
  }, [progress]);

  // Підготовка категорій
  const allCategories = sortCategoriesWithAndereLast(
    Array.from(new Set(abbreviations.flatMap((abbr) => abbr.categories || [])))
  );

  // Завантаження карточок
  const loadCards = () => {
    const filtered = abbreviations.filter((abbr) => {
      const status = abbreviationStatuses[abbr.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      if (category !== "Alle") {
        if (!(abbr.categories || []).includes(category)) {
          return false;
        }
      }
      return true;
    });

    // Сортування за кількістю переглядів
    filtered.sort((a, b) => {
      const countA = progress[a.id] || 0;
      const countB = progress[b.id] || 0;
      return countA - countB;
    });

    const selectedAbbreviations =
      questionCount === "Alle" ? filtered : filtered.slice(0, questionCount);

    // Збільшення лічильника переглядів
    const newProgress = { ...progress };
    selectedAbbreviations.forEach((abbr) => {
      newProgress[abbr.id] = (newProgress[abbr.id] || 0) + 1;
    });
    setProgress(newProgress);

    // Формування карточок:
    // При режимі "LatGerman": передня сторона – abbr.abbreviation, задня – abbr.name;
    // При режимі "GermanLat": передня сторона – abbr.name, задня – abbr.abbreviation;
    // При "Mixed": випадковий вибір.
    const prepared = selectedAbbreviations.map((abbr) => {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const frontText = mode === "LatGerman" ? abbr.abbreviation : abbr.name;
      const backText = mode === "LatGerman" ? abbr.name : abbr.abbreviation;
      return { ...abbr, frontText, backText };
    });

    setCards(prepared);
    setCurrentIndex(0);
    setFlipped(false);
    setViewedCards({});
  };

  // Старт гри – завантаження карточок та закриття модального вікна
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

  // Відмітка карточки як "вивченої"
  const toggleLearnedCard = (id) => {
    if (flipped) return;
    if (requireAuth()) return;
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  // Відмітка карточки як "пауза"
  const togglePausedCard = (id) => {
    if (flipped) return;
    if (requireAuth()) return;
    toggleStatus(id, "paused");
    scheduleFlushChanges();
    if (filterMode === "paused") {
      setCards((prev) => prev.filter((card) => card.id !== id));
    }
  };

  // Навігація між карточками
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

  // Оновлення прогресу при переході на нову карточку
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

  // Оновлення фільтрів при зміні статусів
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newFiltered = abbreviations.filter((abbr) => {
        const status = abbreviationStatuses[abbr.id]?.status || "unlearned";
        if (filterMode === "learned" && status !== "learned") return false;
        if (filterMode === "paused" && status !== "paused") return false;
        if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
          return false;
        if (category !== "Alle") {
          if (!(abbr.categories || []).includes(category)) {
            return false;
          }
        }
        return true;
      });
      const validIds = newFiltered.map((a) => a.id);
      const stillValid = cards.filter((c) => validIds.includes(c.id));
      if (!stillValid.find((c) => c.id === cards[currentIndex]?.id)) {
        setCurrentIndex(0);
      }
      if (stillValid.length !== cards.length) {
        setCards(stillValid);
      }
    }
  }, [abbreviationStatuses, category, filterMode]);

  // Якщо карточка переглянута 6+ разів – вона позначається як "вивчена"
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
        <title>Abbreviations-Flashcard-Spiel für medizinische Fachsprache</title>
        <meta
          name="description"
          content="Dieses Flashcard-Spiel unterstützt Sie beim Erlernen medizinischer Abkürzungen. Trainieren Sie Ihr Wissen interaktiv und bereiten Sie sich auf die Fachsprachprüfung vor."
        />
        <meta
          name="keywords"
          content="medizinische Abkürzungen, Fachsprache, Flashcard, Lernen, medizinische Terminologie"
        />
        <meta
          property="og:title"
          content="Abbreviations-Flashcard-Spiel für medizinische Fachsprache"
        />
        <meta
          name="twitter:description"
          content="Interaktives Flashcard-Spiel zum Erlernen medizinischer Abkürzungen für die Fachsprachprüfung."
        />
        <meta property="og:image" content={flashcardBg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abbreviations-Flashcard-Spiel für medizinische Fachsprache"
        />
        <meta name="twitter:image" content={flashcardBg} />
      </Helmet>
      <div className={styles.flashcardGame}>
        {/* Кнопка "назад" */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/abbreviations-learning")}
        >
          &#8592;
        </button>
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
        {/* Відображення карточки */}
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
                    (abbreviationStatuses[currentCard.id]?.status === "learned" &&
                      styles.learned) ||
                    (abbreviationStatuses[currentCard.id]?.status === "paused" &&
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
                        content={
                          currentCard.explanation?.de || "Keine Erklärung verfügbar"
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

                  {/* Задня сторона */}
                  <div
                    className={styles.cardBack}
                    style={{ pointerEvents: flipped ? "auto" : "none" }}
                  >
                    <Tippy
                      content={
                        currentCard.explanation?.de || "Keine Erklärung verfügbar"
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
 
        {!cards.length && !settingsOpen && (
          <div>
            <div className={styles.noQuestionsOverlay}>
              <div className={styles.noQuestionsMessage}>
                <p>Keine Karten mit den gewählten Filtern gefunden.</p>
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
 
        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={isMobile ? styles.popupMobile : styles.popupDesktop}>
              {/* Кнопка закриття */}
              <button
                className={styles.modalCloseButton}
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

                {/* Категорія */}
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
              localStorage.setItem("abbreviationsFlashCardGameTutorialCompleted", "true");
            }}
          />
        )}
      </div>
    </MainLayout>
  );
};

const AbbreviationsFlashcardGame = () => {
  return (
    <AbbreviationsStatusProvider>
      <AbbreviationsFlashcardGameContent />
    </AbbreviationsStatusProvider>
  );
};

export default AbbreviationsFlashcardGame;