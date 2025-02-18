import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./FlashcardGame.module.scss";

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

// Filtermodi
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzeige-Modi
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

// Anzahl Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Допоміжна функція: Region-Label
const getRegionLabel = (r) => regionAbbreviations[r] || r;

// URL-параметри
const useQuery = () => new URLSearchParams(useLocation().search);

/**
 * AnimatedTitle – заголовок, який можна позиціонувати через CSS‑змінні:
 * --title-top, --title-left, --title-right.
 */
const AnimatedTitle = ({ text }) => {
  return (
    <div className={styles.animatedTitleWrapper}>
      <div className={styles.animatedTitleContainer}>
        {[...text].map((char, index) => (
          <span
            key={index}
            className={styles.animatedLetter}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const FlashcardGame = () => {
  const navigate = useNavigate();
  const query = useQuery();

  // Стандартні параметри з URL або fallback
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

  const { termStatuses, toggleStatus } = useTermStatus();

  // Основні стани
  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Картки
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Прогрес (кількість показів) – зберігається в localStorage
  const [progress, setProgress] = useState({});
  // Для обліку показу картки в одній сесії
  const [viewedCards, setViewedCards] = useState({});

  // Responsive
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Завантаження прогресу з localStorage
  useEffect(() => {
    const storedProgress = localStorage.getItem("flashcardProgress");
    if (storedProgress) {
      try {
        setProgress(JSON.parse(storedProgress));
      } catch (err) {
        console.warn("Помилка завантаження з localStorage:", err);
      }
    }
  }, []);

  // Запис прогресу в localStorage
  useEffect(() => {
    localStorage.setItem("flashcardProgress", JSON.stringify(progress));
  }, [progress]);

  // Завантаження карток
  const loadCards = () => {
    const filtered = medicalTerms.filter((term) => {
      const status = termStatuses[term.id] || "unlearned";
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

    const prepareCard = (term) => {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const frontText = mode === "LatGerman" ? term.lat : term.de;
      const backText = mode === "LatGerman" ? term.de : term.lat;
      return { ...term, frontText, backText };
    };

    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const mapped = shuffled.map(prepareCard);
    const finalCards =
      questionCount === "all" ? mapped : mapped.slice(0, questionCount);

    setCards(finalCards);
    setCurrentIndex(0);
    setFlipped(false);
    setViewedCards({});
  };

  // Старт гри
  const handleStart = () => {
    setSettingsOpen(false);
    loadCards();
  };

  // Фліп карти
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  // Позначення "Gelernt"
  const toggleLearnedCard = (id) => {
    if (flipped) return;
    toggleStatus(id, "learned");
  };

  // Позначення "Pausiert"
  const togglePausedCard = (id) => {
    if (flipped) return;
    toggleStatus(id, "paused");
    if (filterMode === "paused") {
      setFilterMode("all");
    }
  };

  // Перехід до наступної карти
  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Ви переглянули всі картки за цими фільтрами!");
    }
  };

  // Перехід до попередньої карти
  const handlePrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("Ви знаходитесь на першій картці!");
    }
  };

  // Якщо поточна картка ще не була показана в сесії – рахувати показ лише один раз
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

  // Перевірка валідності карток при зміні фільтрів/статусів
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newFilteredCards = medicalTerms.filter((term) => {
        const status = termStatuses[term.id] || "unlearned";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termStatuses, region, category, filterMode]);

  if (!cards.length && !settingsOpen) {
    return (
      <MainLayout>
        <div className={styles.flashcardGame}>
          <button
            className="main_menu_back"
            onClick={() => navigate("/terminology-learning")}
          >
            &#8592;
          </button>
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
      </MainLayout>
    );
  }

  const currentCard = !settingsOpen && cards.length > 0 ? cards[currentIndex] : null;
  const currentStatus = currentCard
    ? termStatuses[currentCard.id] || "unlearned"
    : "unlearned";
  const currentCardProgress = currentCard ? progress[currentCard.id] || 0 : 0;

  return (
    <MainLayout>
      <div className={styles.flashcardGame}>
        {/* Якщо налаштування відкриті – показуємо AnimatedTitle */}
        {settingsOpen && <AnimatedTitle text="FlashCardGame" />}

        {/* Zurück-Button */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/terminology-learning")}
        >
          &#8592;
        </button>

        {/* Кнопка налаштувань */}
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

        {/* "Ang: x" – індикатор переглядів */}
        {!settingsOpen && currentCard && (
          <div className={styles.angCounter}>
            Ang: {currentCardProgress}
          </div>
        )}

        {/* MODAL */}
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
                ×
              </button>
              <h2 className={styles.modalTitle}>Налаштування гри</h2>
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {getRegionLabel(region)}
                    </div>
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

                {/* Filter */}
                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
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

                {/* Kategorie */}
                <div className={styles.categoryColumn}>
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

              {/* Anzeige-Modus */}
              <div className={styles.modalField}>
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

              {/* Anzahl Fragen */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer}>
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

              <button className={styles.startButton} onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Головна гра */}
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
                  ${
                    currentStatus === "learned"
                      ? styles.learned
                      : currentStatus === "paused"
                      ? styles.paused
                      : ""
                  }
                `}
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

            <div className={styles.navigationButtons}>
              <button className={styles.navButton} onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <button className={styles.navButton} onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default FlashcardGame;