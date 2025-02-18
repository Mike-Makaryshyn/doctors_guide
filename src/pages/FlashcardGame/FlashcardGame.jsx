// src/pages/FlashcardGame/FlashcardGame.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./FlashcardGame.module.scss";
import { useNavigate } from "react-router-dom";
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

// Kategorie-Icons importieren (an dein Projekt anpassen)
import { categoryIcons } from "../../constants/CategoryIcons";

/**
 * Region-Abkürzungen – OHNE irgendeine Funktion,
 * die Westfalen-Lippe mit Nordrhein-Westfalen vereint.
 */
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

/**
 * Zeigt entweder die Abkürzung (falls vorhanden)
 * oder den Original-String.
 */
const getRegionLabel = (r) => {
  return regionAbbreviations[r] || r;
};

/** Helper: holt Query-Parameter */
const useQuery = () => new URLSearchParams(useLocation().search);

const FlashcardGame = () => {
  const navigate = useNavigate();
  const query = useQuery();

  // Standard-Parameter aus URL oder Fallback
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

  const [filterMode, setFilterMode] = useState(initialFilterMode);
  const [region, setRegion] = useState(initialRegion);
  const [category, setCategory] = useState(initialCategory);
  const [settingsOpen, setSettingsOpen] = useState(true);

  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Wie oft wir jede Karte angezeigt haben
  const [progress, setProgress] = useState({});
  // false = Front, true = Back
  const [flipped, setFlipped] = useState(false);

  // Mobile / Desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Karten-Ladefunktion, filtert und mischt die Karten
   * auf Basis von region, category, filterMode
   */
  const loadCards = () => {
    const filtered = medicalTerms.filter((term) => {
      // Region filtern
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);

      // Kategorie filtern
      const matchesCategory =
        category === "Alle" || (term.categories || []).includes(category);

      // Filtermodus
      const status = termStatuses[term.id] || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (
        filterMode === "unlearned" &&
        (status === "learned" || status === "paused")
      ) {
        return false;
      }

      return matchesRegion && matchesCategory;
    });

    // zufällig mischen
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setProgress({});
    setFlipped(false);
  };

  // Start => Modal schließen und Karten laden
  const handleStart = () => {
    setSettingsOpen(false);
    setTimeout(() => {
      loadCards();
    }, 0);
  };

  // Karte umdrehen
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  // Karte auf gelernt setzen
  const toggleLearned = (id) => {
    if (flipped) return;
    toggleStatus(id, "learned");
  };

  // Karte auf pausiert setzen
  const togglePaused = (id) => {
    if (flipped) return;
    toggleStatus(id, "paused");
    if (filterMode === "paused") {
      setFilterMode("all");
    }
  };

  // Nächste Karte
  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Sie haben alle Karten mit diesen Filtern durchgesehen!");
    }
  };

  // Vorherige Karte
  const handlePrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("Sie befinden sich auf der ersten Karte!");
    }
  };

  /**
   * Wenn wir Einstellungen ändern und das Modal schließen,
   * oder wenn sich termStatuses ändern, aktualisieren wir die Cards.
   */
  useEffect(() => {
    if (!settingsOpen && cards.length > 0) {
      const newCards = medicalTerms.filter((term) => {
        const matchesRegion =
          region === "Alle" || (term.regions || []).includes(region);
        const matchesCategory =
          category === "Alle" || (term.categories || []).includes(category);

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

      // Prüfen, ob unsere aktuelle Karte noch in den gefilterten Karten ist
      const newCardsOrdered = cards.filter((card) =>
        newCards.find((nc) => nc.id === card.id)
      );

      // Falls die aktuelle Karte wegfällt, Index auf 0 setzen
      if (
        !newCardsOrdered.find((card) => card.id === cards[currentIndex]?.id)
      ) {
        setCurrentIndex(0);
      }
      // Wenn sich die Länge ändert, updaten
      if (newCardsOrdered.length !== cards.length) {
        setCards(newCardsOrdered);
      }
    }
  }, [termStatuses, region, category, filterMode]);

  // Region- und Kategorien-Listen
  const regionsList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.regions || []))
  );
  const categoriesList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  // Jedes Mal, wenn wir eine Karte anzeigen, zählt progress hoch.
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

  // Falls keine Karten gefunden wurden
  if (!cards.length && !settingsOpen) {
    return (
      <MainLayout>
        <div className={styles.flashcardGame}>
          <h1>Flashcard Game</h1>

          {/* Zurück-Button (main_menu_back) */}
          <button
            className="main_menu_back"
            onClick={() => navigate("/terminology-learning")}
          >
            &#8592;
          </button>

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

  // Aktuelle Karte + Status
  const currentCard = !settingsOpen && cards.length > 0 ? cards[currentIndex] : null;
  const currentStatus = currentCard
    ? termStatuses[currentCard.id] || "unlearned"
    : "unlearned";

  return (
    <MainLayout>
      <div className={styles.flashcardGame}>
        <h1>Flashcard Game</h1>

        {/* "Zurück"-Button */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/terminology-learning")}
        >
          &#8592;
        </button>

        {/* Zahnrad-Button nur anzeigen, wenn Desktop oder das Modal geschlossen ist */}
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

              <h2 className={styles.modalTitle}>Spieleinstellungen</h2>

              {/* In einer Zeile: Region, Filter, Kategorie */}
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
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

                {/* Filter */}
                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {
                        filterModes.find((m) => m.value === filterMode)?.icon
                      }
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
                      {categoriesList.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button className={styles.startButton} onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* SPIELANSICHT */}
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
                {/* VORDERSEITE */}
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

                {/* RÜCKSEITE */}
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
                  <p>{currentCard.de}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigationButtons}>
              <button className={styles.navButton} onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <button className={styles.navButton} onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>

            {/* Anzeige, wie oft aktuelle Karte gezeigt wurde */}
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