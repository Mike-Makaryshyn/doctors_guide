import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./FlashcardGame.module.scss";
import { Helmet } from "react-helmet";
import flashcardBg from "../../../../assets/flashcard-bg.jpg";

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
import { useTermStatus, TermStatusProvider } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";

// Kategorie-Icons
import { categoryIcons } from "../../../../constants/CategoryIcons";

// Regionsabkürzungen
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

  // Оновлені записи для чотирьох підрегіонів BW:
  "Baden-Württemberg-Freiburg": "BWF",
  "Baden-Württemberg-Karlsruhe": "BWK",
  "Baden-Württemberg-Stuttgart": "BWS",
  "Baden-Württemberg-Reutlingen": "BWR",
};

// Filter
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzeige-Modi
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Deu" },
  { value: "GermanLat", label: "Deu→Lat" },
  { value: "Mixed", label: "Gemischt" },
];

// Anzahl der Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "Alle"];

// Hilfsfunktion zum Erhalt der Regionsbezeichnung
const getRegionLabel = (r) => regionAbbreviations[r] || r;

// Hook für URL-Parameter
const useQuery = () => new URLSearchParams(useLocation().search);

import FlashCardGameTutorial from "./FlashCardGameTutorial";

import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

const FlashcardGameContent = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const { selectedRegion } = useGetGlobalInfo();

  // Supabase Auth State
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Функція перевірки авторизації: якщо користувач не авторизований – викликаємо AuthModal
  const requireAuth = () => {
    if (loading) return true;
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Parameter aus der URL oder Standardwerte
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

  // Methoden aus dem Context
  const {
    termStatuses,
    toggleStatus,
    recordCorrectAnswer,
    scheduleFlushChanges,
  } = useTermStatus();

  // Spiel-Einstellungen
  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("flashCardGameTutorialCompleted") !== "true"
  );

  // Spiel-Zustand
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  // "Ang" – Zähler für die Anzahl der Anzeigen jeder Karte (in der aktuellen Sitzung)
  const [progress, setProgress] = useState({});
  const [viewedCards, setViewedCards] = useState({});

  // Responsive
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Laden des "Ang"-Fortschritts aus dem LocalStorage
  useEffect(() => {
    const storedProgress = localStorage.getItem("flashkartenFortschritt");
    if (storedProgress) {
      try {
        setProgress(JSON.parse(storedProgress));
      } catch (err) {
        console.warn("Fehler beim Laden des Fortschritts aus LocalStorage:", err);
      }
    }
  }, []);

  // Speichern des "Ang"-Fortschritts im LocalStorage
  useEffect(() => {
    localStorage.setItem("flashkartenFortschritt", JSON.stringify(progress));
  }, [progress]);

  // Funktion zum Laden der Karten unter Berücksichtigung der Filter
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

    // Sortierung der Begriffe nach der Anzahl der bisherigen Anzeigen (weniger Anzeigen – früher)
    filtered.sort((a, b) => {
      const countA = progress[a.id] || 0;
      const countB = progress[b.id] || 0;
      return countA - countB;
    });

    const selectedTerms =
      questionCount === "Alle" ? filtered : filtered.slice(0, questionCount);

    // Aktualisierung des "Ang"-Zählers für jede ausgewählte Karte
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

  // Hinweis: Das automatische Laden der Karten beim Schließen der Einstellungen
  // wurde entfernt, damit die bereits gestartete Sitzung nicht zurückgesetzt wird.
  // Die Karten werden nur über handleStart() geladen.

  const handleStart = () => {
    // Start darf immer erfolgen, auch ohne Autorisierung
    setSettingsOpen(false);
    loadCards();
  };

  // Neue Funktion zum Neustart des Spiels (zurück zur ersten Karte)
  const handleRestart = () => {
    setFlipped(false);
    setCurrentIndex(0);
  };

  // Funktion zum Umdrehen der Karte
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  // Funktionen zur Statusänderung: Markierung der Karte als "Gelernt" oder "Pausiert"
  const toggleLearnedCard = (id) => {
    if (flipped) return;
    if (requireAuth()) return;
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  const togglePausedCard = (id) => {
    if (flipped) return;
    if (requireAuth()) return;
    toggleStatus(id, "paused");
    scheduleFlushChanges();
    if (filterMode === "paused") {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    }
  };

  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("Sie sind bei der ersten Karte!");
    }
  };

  // Aktualisierung des Anzeige-Zählers für jede Karte (falls diese Karte in der Sitzung noch nicht markiert wurde)
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

  // Aktualisierung der Kartenliste bei Änderung der Filter oder Status
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

  const currentCard = cards[currentIndex] || null;
  const currentCardProgress = currentCard ? progress[currentCard.id] || 0 : 0;

  useEffect(() => {
    if (currentCard && progress[currentCard.id] >= 6) {
      recordCorrectAnswer(currentCard.id, 3);
      setProgress((prev) => ({ ...prev, [currentCard.id]: 0 }));
    }
  }, [progress, currentCard, recordCorrectAnswer]);

  if (loading) {
    return <MainLayout><p>Lädt...</p></MainLayout>;
  }
  return (
    <MainLayout>
      <Helmet>
        <title>Medizinisches Flashcard-Spiel – Lernen Sie medizinische Begriffe spielerisch</title>
        <meta
          name="description"
          content="Dieses Flashcard-Spiel ermöglicht es Ihnen, medizinische Begriffe interaktiv zu lernen. Die Karten erscheinen zufällig und das Feld 'Ang' zeigt, wie oft eine Karte während der Sitzung angezeigt wurde. Verbessern Sie Ihr Wissen und Ihre Sprachkompetenz!"
        />
        <meta
          name="keywords"
          content="Medizin, Flashcard, Lernen, medizinische Begriffe, Terminologie, interaktives Spiel, Fachsprache"
        />
        <meta property="og:title" content="Medizinisches Flashcard-Spiel – Lernen Sie medizinische Begriffe spielerisch" />
        <meta
          name="twitter:description"
          content="Dieses Flashcard-Spiel hilft Ihnen, medizinische Begriffe zu lernen. Das Feld 'Ang' zeigt, wie oft eine Karte während der Sitzung angezeigt wurde."
        />
        <meta property="og:image" content={flashcardBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medizinisches Flashcard-Spiel – Lernen Sie medizinische Begriffe spielerisch" />
        <meta name="twitter:image" content={flashcardBg} />
      </Helmet>

      <div className={styles.flashcardGame}>
        {/* Zurück-Button */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/terminology-learning")}
        >
          &#8592;
        </button>

        {/* Einstellungen-Button (unten rechts) */}
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

        {/* Falls keine Karten vorhanden */}
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

        {/* Anzeige der Karten */}
        {cards.length > 0 && !settingsOpen && currentCard && (
          <>
            {/* Ang-Zähler */}
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

            {/* Navigations-Buttons */}
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

        {/* Modal für Einstellungen */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={isMobile ? styles.popupMobile : styles.popupDesktop}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn} data-tutorial="regionSelect">
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setRegion(e.target.value);
                      }}
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
                {/* Kategorie */}
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
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setCategory(e.target.value);
                      }}
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

        {/* Tutorial-Button */}
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
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </MainLayout>
  );
};

const FlashcardGame = () => {
  return (
    <TermStatusProvider>
      <FlashcardGameContent />
    </TermStatusProvider>
  );
};

export default FlashcardGame;