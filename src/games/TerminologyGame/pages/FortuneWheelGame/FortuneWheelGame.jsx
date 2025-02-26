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

/* Хелпер-функції: видалити артиклі (der/die/das) або латинські дужки */
function removeGermanArticle(str = "") {
  return str.replace(/^\s*(der|die|das)\s+/i, "");
}
function removeLatParenthesis(str = "") {
  return str.replace(/\([^)]*\)/g, "").trim();
}

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

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

const questionCountOptions = [5, 10, 20, 30, 40, 50];
const playersList = [1, 2, 3, 4, 5, 6, 7, 8];

function FortuneWheelGameContent() {
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, recordCorrectAnswer, flushChanges } = useTermStatus();

  // --- SETTINGS-STATE ---
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

  // --- Радіальні дані (segments) ---
  const [segments, setSegments] = useState([]);
  const [finalTerms, setFinalTerms] = useState([]);

  // --- MODAL (Питання + Відповіді) ---
  const [showModal, setShowModal] = useState(false);
  const [modalQuestion, setModalQuestion] = useState(null);
  const [modalAnswers, setModalAnswers] = useState([]);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState(null);

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [currentSliceIndex, setCurrentSliceIndex] = useState(null);

  // --- GAME OVER / RESULT ---
  const [initialTermCount, setInitialTermCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [gameStartTime, setGameStartTime] = useState(null);

  // Запам'ятовуємо неправильні терміни, якщо потрібно повторювати
  const [wrongTerms, setWrongTerms] = useState({});

  // Tutorial
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("fortuneWheelGameTutorialCompleted") !== "true"
  );

  // Оновлюємо кількість гравців
  useEffect(() => {
    setScores(new Array(playersCount).fill(0));
    setCurrentPlayer(1);
  }, [playersCount]);

  // Беремо регіон з global, якщо він змінився
  useEffect(() => {
    setRegion(selectedRegion || "Alle");
  }, [selectedRegion]);

  // Якщо gameOver => викликаємо finish
  useEffect(() => {
    if (gameOver) {
      finishGame();
    }
  }, [gameOver]);

  // Якщо порожні segments і finalTerms -> gameOver
  useEffect(() => {
    if (!settingsOpen && segments.length === 0 && finalTerms.length === 0) {
      setGameOver(true);
    }
  }, [segments, finalTerms, settingsOpen]);

  // --- START ---
  function handleStart() {
    setSettingsOpen(false);
    setShowResults(false);
    setGameOver(false);
    setSessionDuration(0);
    setGameStartTime(Date.now());
    loadDataForWheel();
  }

  // --- DATEN LADEN ---
  function loadDataForWheel() {
    // Фільтрація
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

    // Перемішуємо та беремо топ X
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const finalList = shuffled.slice(0, questionCount);

    setFinalTerms(finalList);
    setInitialTermCount(finalList.length);

    if (finalList.length === 0) {
      setSegments([{ labelForWheel: "Keine Begriffe gefunden", color: "#666" }]);
      return;
    }

    // Палетка кольорів
    const colorPalette = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

    // Формуємо segments
    const newSegments = finalList.map((term, idx) => {
      // Mixed -> випадково LatGerman чи GermanLat
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

  // --- STOP SPIN ---
  function handleStopSpinning(winnerIndex) {
    const seg = segments[winnerIndex];
    if (!seg) return;

    // Якщо "Keine Begriffe gefunden"
    if (seg.labelForWheel === "Keine Begriffe gefunden") return;

    const winningTerm = finalTerms[winnerIndex];
    if (!winningTerm) return;

    // Визначаємо режим зі збереженого сегмента
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

    // Знаходимо 3 неправильних варіанти
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

  // --- Обробка вибору відповіді ---
  function handleAnswerSelect(ans) {
    setChosenAnswer(ans);
    setIsAnswerCorrect(ans === modalCorrectAnswer);
  }

  // --- Підтвердити MODAL ---
  function handleModalOk() {
    if (!chosenAnswer) return;

    const isCorrect = isAnswerCorrect;
    const idx = currentSliceIndex;
    const winningTerm = finalTerms[idx];

    if (winningTerm) {
      if (isCorrect) {
        // Якщо правильно -> +1 бал, видаляємо сегмент
        setScores((old) => {
          const newScores = [...old];
          newScores[currentPlayer - 1] += 1;
          return newScores;
        });
        recordCorrectAnswer(winningTerm.id);

        setSegments((old) => old.filter((_, i) => i !== idx));
        setFinalTerms((old) => old.filter((_, i) => i !== idx));
      } else {
        // Якщо неправильно -> сегмент залишається
        if (!wrongTerms[winningTerm.id]) {
          setWrongTerms((prev) => ({ ...prev, [winningTerm.id]: true }));
        }
      }
    }

    // Наступний гравець
    if (playersCount > 1) {
      setCurrentPlayer((prev) => (prev === playersCount ? 1 : prev + 1));
    }

    setShowModal(false);
    setChosenAnswer(null);
    setIsAnswerCorrect(false);
  }

  // --- FINISH GAME ---
  function finishGame() {
    const dur = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dur);
    setShowResults(true);
    flushChanges();
  }

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
          <h2>Результати</h2>
          {playersCount === 1 ? (
            <p>
              Правильних: {totalCorrect} із {initialTermCount}
            </p>
          ) : (
            <>
              <p>Mehrspieler-Modus:</p>
              <ul>
                {scores.map((sc, i) => (
                  <li key={i}>
                    Гравець {i + 1}: {sc}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p>
            Тривалість: {Math.floor(sessionDuration / 60)} хв{" "}
            {sessionDuration % 60} сек
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
        <title>Fortune Wheel – Fachbegriffe lernen</title>
        <meta
          name="description"
          content="Спіньте колесо та вчіть медичні терміни! Обирайте фільтри, налаштування та крутіть колесо удачі."
        />
        <meta property="og:title" content="Fortune Wheel – Fachbegriffe lernen" />
        <meta property="og:image" content={medicalTerminologyBg} />
      </Helmet>

      <div className={styles.fortuneWheelGame}>
        {/* Back-Button */}
        <button className="main_menu_back" onClick={() => window.history.back()}>
          &#8592;
        </button>

        {/* Settings-Button */}
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
              <circle cx="12" cy="12" r="10" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}

        {/* Settings-Modal */}
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
              <h2 className={styles.modalTitle}>Налаштування</h2>

              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Регіон</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {regionAbbreviations[region] || region}
                    </div>
                    <select
                      className={styles.nativeSelect}
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
                  <label className={styles.fieldLabel}>Фільтр</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {
                        filterModes.find((m) => m.value === filterMode)
                          ?.icon
                      }
                    </div>
                    <select
                      className={styles.nativeSelect}
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

                {/* Category */}
                <div className={styles.categoryColumn}>
                  <label className={styles.fieldLabel}>Категорія</label>
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

                {/* Players */}
                <div className={styles.playersColumn}>
                  <label className={styles.fieldLabel}>Гравці</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.playersCell}>
                      <FaUser style={{ marginRight: 4 }} /> x{playersCount}
                    </div>
                    <select
                      className={styles.nativeSelect}
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

              {/* DisplayMode */}
              <div className={styles.modalField}>
                <label>Режим відображення:</label>
                <div className={styles.displayModeContainer}>
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

              {/* questionCount */}
              <div className={styles.modalField}>
                <label>Кількість термінів:</label>
                <div className={styles.questionCountContainer}>
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

              <button className={styles.startButton} onClick={handleStart}>
                Старт
              </button>
            </div>
          </div>
        )}

        {renderResultsModal()}

        {/* Відображення поточного гравця (для мультиплеєра) */}
        {playersCount > 1 && !settingsOpen && !gameOver && (
          <div style={{ marginTop: 20, fontWeight: "bold", color: "#013b6e" }}>
            Зараз хід гравця №{currentPlayer} із {playersCount}
          </div>
        )}

        {/* Саме колесо */}
        {!settingsOpen && !gameOver && segments.length > 0 && (
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 400,
              margin: "0 auto",
              marginTop: "-30px",
            }}
          >
            {/* Колесо */}
            <CustomWheel
              segments={segments}
              size={400}
              spinDuration={3000}
              onStopSpinning={handleStopSpinning}
              outerPointer={true} // важливо: тепер не малюємо стрілку на canvas
            />
          </div>
        )}

        {/* MODAL з питаннями/відповідями */}
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
              <h2 className={styles.modalTitle}>{modalQuestion}</h2>
              <div className={styles.optionsBox}>
                {modalAnswers.map((ans, idx) => {
                  const isChosen = ans === chosenAnswer;
                  const isCorrectChoice =
                    isChosen && ans === modalCorrectAnswer;
                  const isWrongChoice =
                    isChosen && ans !== modalCorrectAnswer;

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

        {/* Туторіал */}
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