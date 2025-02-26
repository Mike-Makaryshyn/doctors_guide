import React, { useState, useEffect } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./FortuneWheelGame.module.scss";

import { FaCog, FaPlay, FaPause, FaCheck, FaList, FaUser } from "react-icons/fa";
import CustomWheel from "./CustomWheel";
import {
  useTermStatus,
  TermStatusProvider,
} from "../../../../contexts/TermStatusContext";

import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import medicalTerminologyBg from "../../../../assets/fortune-wheel-bg.jpg";

import FortuneWheelGameTutorial from "./FortuneWheelGameTutorial";

/* Hilfsfunktionen zum Entfernen von Artikeln (der/die/das) oder lateinischen Klammern */
function removeGermanArticle(str = "") {
  return str.replace(/^\s*(der|die|das)\s+/i, "");
}
function removeLatParenthesis(str = "") {
  return str.replace(/\([^)]*\)/g, "").trim();
}

// Abkürzungen für Regionen
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

// Filter-Modi
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

// Mögliche Anzahlen von Begriffen
const questionCountOptions = [5, 10, 20, 30, 40, 50];

// Mögliche Spieleranzahlen
const playersList = [1, 2, 3, 4, 5, 6, 7, 8];

function FortuneWheelGameContent() {
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, recordCorrectAnswer, flushChanges } = useTermStatus();

  // --- EINSTELLUNGEN-STATE ---
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Alle");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(10);
  const [playersCount, setPlayersCount] = useState(1);

  // --- SCORES / MULTIPLAYER ---
  const [scores, setScores] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // --- RAD-DATEN (Segments) ---
  const [segments, setSegments] = useState([]);
  const [finalTerms, setFinalTerms] = useState([]);

  // --- MODAL (Frage + Antworten) ---
  const [showModal, setShowModal] = useState(false);
  const [modalQuestion, setModalQuestion] = useState(null);
  const [modalAnswers, setModalAnswers] = useState([]);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState(null);

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [currentSliceIndex, setCurrentSliceIndex] = useState(null);

  // --- SPIELENDE / ERGEBNISSE ---
  const [initialTermCount, setInitialTermCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [gameStartTime, setGameStartTime] = useState(null);

  // Wir merken uns falsche Begriffe, falls Wiederholung nötig
  const [wrongTerms, setWrongTerms] = useState({});

  // Tutorial
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("fortuneWheelGameTutorialCompleted") !== "true"
  );

  // Wir aktualisieren die Spieleranzahl
  useEffect(() => {
    setScores(new Array(playersCount).fill(0));
    setCurrentPlayer(1);
  }, [playersCount]);

  // Wir übernehmen Region aus global, falls geändert
  useEffect(() => {
    setRegion(selectedRegion || "Alle");
  }, [selectedRegion]);

  // Wenn gameOver => finishGame()
  useEffect(() => {
    if (gameOver) {
      finishGame();
    }
  }, [gameOver]);

  // Wenn segments und finalTerms leer sind => gameOver
  useEffect(() => {
    if (!settingsOpen && segments.length === 0 && finalTerms.length === 0) {
      setGameOver(true);
    }
  }, [segments, finalTerms, settingsOpen]);

  // HINZUGEFÜGT: Kontrolle der Radgröße (größer auf Desktop)
  const [wheelSize, setWheelSize] = useState(300);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setWheelSize(600);
      } else {
        setWheelSize(300);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- START ---
  function handleStart() {
    setSettingsOpen(false);
    setShowResults(false);
    setGameOver(false);
    setSessionDuration(0);
    setGameStartTime(Date.now());
    loadDataForWheel();
  }

  // --- Filterung & Laden der Daten ---
  function loadDataForWheel() {
    // Filterung
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (
        filterMode === "unlearned" &&
        (status === "learned" || status === "paused")
      )
        return false;

      return matchesRegion && matchesCategory;
    });

    // Mischen und Top X nehmen
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const finalList = shuffled.slice(0, questionCount);

    setFinalTerms(finalList);
    setInitialTermCount(finalList.length);

    if (finalList.length === 0) {
      setSegments([{ labelForWheel: "Keine Begriffe gefunden", color: "#666" }]);
      return;
    }

    // Farbpalette
    const colorPalette = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

    // Erstellen der Segmente
    const arcSize = (2 * Math.PI) / finalList.length;
    const newSegments = finalList.map((term, idx) => {
      // Mixed -> zufällig LatGerman oder GermanLat
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }

      let labelForWheel = "";
      if (mode === "LatGerman") {
        labelForWheel = removeLatParenthesis(term.lat);
      } else {
        labelForWheel = removeGermanArticle(term.de);
      }

      return {
        labelForWheel,
        originalLat: term.lat,
        originalDe: term.de,
        actualMode: mode,
        color: colorPalette[idx % colorPalette.length],
      };
    });

    setSegments(newSegments);
    setWrongTerms({});
    setShowModal(false);
    setChosenAnswer(null);
    setIsAnswerCorrect(false);
  }

  // --- Drehen beenden (STOP SPIN) ---
  function handleStopSpinning(winnerIndex) {
    const seg = segments[winnerIndex];
    if (!seg) return;

    // Falls "Keine Begriffe gefunden"
    if (seg.labelForWheel === "Keine Begriffe gefunden") return;

    const winningTerm = finalTerms[winnerIndex];
    if (!winningTerm) return;

    // Wir bestimmen den Modus aus dem gespeicherten Segment
    const mode = seg.actualMode;

    let questionText = "";
    let correctAns = "";

    if (mode === "LatGerman") {
      questionText = winningTerm.lat;
      correctAns = winningTerm.de;
    } else {
      questionText = winningTerm.de;
      correctAns = winningTerm.lat;
    }

    // Wir finden 3 falsche Varianten
    let allPossible = [];
    if (mode === "LatGerman") {
      allPossible = medicalTerms.map((t) => t.de);
    } else {
      allPossible = medicalTerms.map((t) => t.lat);
    }

    const wrongs = allPossible
      .filter((txt) => txt !== correctAns)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const answers = [...wrongs, correctAns].sort(() => Math.random() - 0.5);

    setModalQuestion(questionText);
    setModalCorrectAnswer(correctAns);
    setModalAnswers(answers);
    setShowModal(true);
    setChosenAnswer(null);
    setIsAnswerCorrect(false);
    setCurrentSliceIndex(winnerIndex);
  }

  // --- Verarbeitung der Antwortauswahl ---
  function handleAnswerSelect(ans) {
    setChosenAnswer(ans);
    setIsAnswerCorrect(ans === modalCorrectAnswer);
  }

  // --- Modal bestätigen ---
  function handleModalOk() {
    if (!chosenAnswer) return;

    const isCorrect = isAnswerCorrect;
    const idx = currentSliceIndex;
    const winningTerm = finalTerms[idx];

    if (winningTerm) {
      if (isCorrect) {
        // Wenn richtig -> +1 Punkt, Segment entfernen
        setScores((old) => {
          const newScores = [...old];
          newScores[currentPlayer - 1] += 1;
          return newScores;
        });
        recordCorrectAnswer(winningTerm.id);

        setSegments((old) => old.filter((_, i) => i !== idx));
        setFinalTerms((old) => old.filter((_, i) => i !== idx));
      } else {
        // Wenn falsch -> Segment bleibt
        if (!wrongTerms[winningTerm.id]) {
          setWrongTerms((prev) => ({ ...prev, [winningTerm.id]: true }));
        }
      }
    }

    // Nächster Spieler
    if (playersCount > 1) {
      setCurrentPlayer((prev) => (prev === playersCount ? 1 : prev + 1));
    }

    setShowModal(false);
    setChosenAnswer(null);
    setIsAnswerCorrect(false);
  }

  // --- Spiel beenden ---
  function finishGame() {
    const dur = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dur);
    setShowResults(true);
    flushChanges();
  }

  // Modal für Ergebnisse
  function renderResultsModal() {
    if (!showResults) return null;
    const totalCorrect = scores.reduce((a, b) => a + b, 0);

    return (
      <div className={styles.resultsOverlay}>
        <div className={styles.resultsBox}>
          <button
            className={styles.modalCloseButton}
            onClick={() => setShowResults(false)}
          >
            ×
          </button>
          <h2>Ergebnisse</h2>
          {playersCount === 1 ? (
            <p>
              Richtig: {totalCorrect} von {initialTermCount}
            </p>
          ) : (
            <>
              <p>Mehrspieler-Modus:</p>
              <ul>
                {scores.map((sc, i) => (
                  <li key={i}>
                    Spieler {i + 1}: {sc}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p>
            Dauer: {Math.floor(sessionDuration / 60)} Min.{" "}
            {sessionDuration % 60} Sek.
          </p>
          <button className={styles.startButton} onClick={handleStart}>
            Neues Spiel
          </button>
        </div>
      </div>
    );
  }

  return (
    <MainLayout>
      <Helmet>
        <title>Glücksrad – Medizinische Fachbegriffe lernen</title>
        <meta
          name="description"
          content="Drehen Sie das Glücksrad und lernen Sie medizinische Fachbegriffe! Wählen Sie Filter, Einstellungen und testen Sie Ihr Wissen."
        />
        <meta
          property="og:title"
          content="Glücksrad – Medizinische Fachbegriffe lernen"
        />
        <meta property="og:image" content={medicalTerminologyBg} />
      </Helmet>

      <div className={styles.fortuneWheelGame}>
        {/* Scoreboard links für Multiplayer */}
        {playersCount > 1 && !settingsOpen && !gameOver && (
          <div className={styles.scoreboard}>
            {scores.map((score, index) => (
              <div
                key={index}
                className={`${styles.scoreboardRow} ${
                  index === currentPlayer - 1 ? styles.activeScoreboardRow : ""
                }`}
              >
                PL{index + 1}: {score}
              </div>
            ))}
          </div>
        )}

        {/* Zurück-Button */}
        <button className="main_menu_back" onClick={() => window.history.back()}>
          &#8592;
        </button>

        {/* Einstellungen-Button */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => {
              setSettingsOpen(true);
              setShowResults(false);
              setGameOver(false);
            }}
          >
            <FaCog />
          </button>
        </div>

        {/* Tutorial-Button (nur sichtbar, wenn settingsOpen true ist) */}
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

        {/* Modalfenster für Einstellungen */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768
                  ? styles.popupDesktopWide
                  : styles.popupMobile
              }
            >
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>

              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {regionAbbreviations[region] || region}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      data-tutorial="regionSelect"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="Alle">Alle</option>
                      {[...new Set(medicalTerms.flatMap((t) => t.regions || []))]
                        .sort()
                        .map((r) => (
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
                      data-tutorial="filterSelect"
                      value={filterMode}
                      onChange={(e) => setFilterMode(e.target.value)}
                    >
                      {filterModes.map((f) => (
                        <option key={f.value} value={f.value}>
                          {f.label}
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
                      {categoryIcons[selectedCategory] && (
                        <img
                          src={categoryIcons[selectedCategory]}
                          alt={selectedCategory}
                          className={styles.categoryIcon}
                        />
                      )}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      data-tutorial="categorySelect"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="Alle">Alle</option>
                      {Object.keys(categoryIcons).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Spieler */}
                <div className={styles.playersColumn}>
                  <label className={styles.fieldLabel}>Spieler</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.playersCell}>
                      <FaUser style={{ marginRight: 4 }} /> x{playersCount}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      data-tutorial="playersSelect"
                      value={playersCount}
                      onChange={(e) => setPlayersCount(Number(e.target.value))}
                    >
                      {playersList.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Anzeige-Modus */}
              <div className={styles.modalField}>
                <label>Anzeige-Modus:</label>
                <div className={styles.displayModeContainer} data-tutorial="displayModeSelect">
                  {displayModeOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className={`${styles.displayModeIcon} ${
                        displayMode === opt.value ? styles.selected : ""
                      }`}
                      onClick={() => setDisplayMode(opt.value)}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Anzahl der Begriffe */}
              <div className={styles.modalField}>
                <label>Anzahl der Begriffe:</label>
                <div className={styles.questionCountContainer} data-tutorial="questionCountSelect">
                  {questionCountOptions.map((qc) => (
                    <div
                      key={qc}
                      className={`${styles.questionCountIcon} ${
                        questionCount === qc ? styles.selected : ""
                      }`}
                      onClick={() => setQuestionCount(qc)}
                    >
                      {qc}
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

        {renderResultsModal()}

        {/* Das Rad (im Container für Responsiveness) */}
        {!settingsOpen && !gameOver && segments.length > 0 && (
          <div className={styles.wheelContainer} data-tutorial="spinButton">
            <CustomWheel
              segments={segments}
              size={wheelSize}
              spinDuration={3000}
              onStopSpinning={handleStopSpinning}
              outerPointer={true}
            />
          </div>
        )}

        {/* MODAL mit Frage + Antworten */}
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
              <h2 className={styles.modalTitle}>{modalQuestion}</h2>
              <div className={styles.optionsBox}>
                {modalAnswers.map((ans, idx) => {
                  const isChosen = ans === chosenAnswer;
                  const isCorrectChoice = isChosen && ans === modalCorrectAnswer;
                  const isWrongChoice = isChosen && ans !== modalCorrectAnswer;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(ans)}
                      className={`
                        ${styles.modalAnswerButton}
                        ${isChosen ? styles.chosen : ""}
                        ${isCorrectChoice ? styles.correct : ""}
                        ${isWrongChoice ? styles.wrong : ""}
                      `}
                    >
                      {ans}
                    </button>
                  );
                })}
              </div>
              <button
                className={styles.modalOkButton}
                onClick={handleModalOk}
                disabled={!chosenAnswer}
              >
                OK
              </button>
            </div>
          </div>
        )}

        {/* Tutorial */}
        {showTutorial && (
          <FortuneWheelGameTutorial
            run={showTutorial}
            onFinish={() => {
              setShowTutorial(false);
              localStorage.setItem("fortuneWheelGameTutorialCompleted", "true");
            }}
          />
        )}
      </div>
    </MainLayout>
  );
}

const FortuneWheelGame = () => (
  <TermStatusProvider>
    <FortuneWheelGameContent />
  </TermStatusProvider>
);

export default FortuneWheelGame;