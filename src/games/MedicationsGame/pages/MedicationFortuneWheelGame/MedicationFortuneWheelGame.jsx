import React, { useState, useEffect } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import styles from "./MedicationFortuneWheelGame.module.scss";
import { useNavigate } from "react-router-dom";
import { FaCog, FaPlay, FaPause, FaCheck, FaList, FaUser } from "react-icons/fa";
import CustomWheel from "./CustomWheel";
import { useMedicationStatus, MedicationStatusProvider } from "../../../../contexts/MedicationStatusContext";
import { Helmet } from "react-helmet";
import fortuneWheelBg from "../../../../assets/medication-fortune-wheel-bg.jpg";
import MedicationFortuneWheelGameTutorial from "./MedicationFortuneWheelGameTutorial";

// Додаткові імпорти для аутентифікації
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

/** Допоміжні функції */
function removeGermanArticle(str = "") {
  return str.replace(/^\s*(der|die|das)\s+/i, "");
}
function removeLatParenthesis(str = "") {
  return str.replace(/\([^)]*\)/g, "").trim();
}

/**
 * Функція, що повертає категорії, де "Alle" завжди на першій позиції,
 * решта сортуються за алфавітом, а "Andere" завжди в кінці.
 */
function getSortedCategories(categories) {
  const filtered = categories.filter(c => c !== "Alle");
  let others = filtered.sort((a, b) => a.localeCompare(b, "de"));
  if (others.includes("Andere")) {
    others = others.filter(c => c !== "Andere");
    others.push("Andere");
  }
  return ["Alle", ...others];
}

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

function MedicationFortuneWheelGameContent() {
  const navigate = useNavigate();
  const { medicationStatuses, recordCorrectAnswer, flushChanges } = useMedicationStatus();

  // Supabase Auth
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const loading = user === undefined; // treat “undefined” as loading if needed
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return false;
    }
    return true;
  };

  // Стан налаштувань і даних гри
  const [settingsOpen, setSettingsOpen] = useState(true);
  // Початкове значення – "Alle"
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(10);
  const [playersCount, setPlayersCount] = useState(1);

  // Стан для багатокористувацьких балів
  const [scores, setScores] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // Сегменти колеса і список медикаментів
  const [segments, setSegments] = useState([]);
  const [finalMeds, setFinalMeds] = useState([]);

  // Стан модального вікна з питанням
  const [showModal, setShowModal] = useState(false);
  const [modalQuestion, setModalQuestion] = useState(null);
  const [modalAnswers, setModalAnswers] = useState([]);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [currentSliceIndex, setCurrentSliceIndex] = useState(null);

  // Стан для підрахунку гри і часу
  const [initialMedCount, setInitialMedCount] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [gameStartTime, setGameStartTime] = useState(null);

  // Невірні відповіді (для повторення)
  const [wrongMeds, setWrongMeds] = useState({});

  // Тут керуємо станом туторіалу
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("medicationFortuneWheelTutorialCompleted") !== "true"
  );

  // Керування розміром колеса
  const [wheelSize, setWheelSize] = useState(300);
  useEffect(() => {
    function handleResize() {
      setWheelSize(window.innerWidth > 768 ? 600 : 400);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Оновлення балів при зміні кількості гравців
  useEffect(() => {
    setScores(new Array(playersCount).fill(0));
    setCurrentPlayer(1);
  }, [playersCount]);

  /** Функція старту гри (нова сесія) */
  function startGame() {
    setSettingsOpen(false);
    setGameFinished(false);
    setSessionDuration(0);
    setGameStartTime(Date.now());
    loadDataForWheel();
  }

  /** Закриття налаштувань */
  function closeSettings() {
    setSettingsOpen(false);
  }

  /** Побудова списку finalMeds і сегментів */
  function loadDataForWheel() {
    // Фільтрація за категорією та статусом
    const filtered = medications.filter((med) => {
      const matchesCategory =
        selectedCategory === "Alle" ||
        (med.categories || []).includes(selectedCategory);
      const status = medicationStatuses[med.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused")) return false;
      return matchesCategory;
    });

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const finalList = shuffled.slice(0, questionCount);

    setFinalMeds(finalList);
    setInitialMedCount(finalList.length);

    if (finalList.length === 0) {
      setSegments([]);
      return;
    }

    const colorPalette = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    const newSegments = finalList.map((med, idx) => {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const labelForWheel =
        mode === "LatGerman"
          ? removeLatParenthesis(med.lat)
          : removeGermanArticle(med.de);
      return {
        labelForWheel,
        originalLat: med.lat,
        originalDe: med.de,
        actualMode: mode,
        color: colorPalette[idx % colorPalette.length],
      };
    });

    setSegments(newSegments);
    setWrongMeds({});
    setShowModal(false);
    setChosenAnswer(null);
    setIsAnswerCorrect(false);
  }

  /** Функція, що викликається при зупинці колеса – вибір сегмента */
  function handleStopSpinning(winnerIndex) {
    if (!requireAuth()) return;

    const seg = segments[winnerIndex];
    if (!seg || seg.labelForWheel === "Keine Begriffe gefunden") return;
    const winningMed = finalMeds[winnerIndex];
    if (!winningMed) return;
    const mode = seg.actualMode;
    let questionText = mode === "LatGerman" ? winningMed.lat : winningMed.de;
    let correctAns = mode === "LatGerman" ? winningMed.de : winningMed.lat;
    let allPossible =
      mode === "LatGerman"
        ? medications.map((m) => m.de)
        : medications.map((m) => m.lat);
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

  /** Обробка вибору відповіді в модальному вікні */
  function handleAnswerSelect(ans) {
    if (!requireAuth()) return;
    setChosenAnswer(ans);
    setIsAnswerCorrect(ans === modalCorrectAnswer);
  }

  /** Обробка кнопки OK у модальному вікні */
  function handleModalOk() {
    if (!requireAuth()) return;
    if (!chosenAnswer) return;
    const isCorrect = isAnswerCorrect;
    const idx = currentSliceIndex;
    const winningMed = finalMeds[idx];
    if (winningMed) {
      if (isCorrect) {
        setScores((old) => {
          const newScores = [...old];
          newScores[currentPlayer - 1] += 1;
          return newScores;
        });
        recordCorrectAnswer(winningMed.id);
        setSegments((old) => old.filter((_, i) => i !== idx));
        setFinalMeds((prevFinalMeds) => {
          const newFinalMeds = prevFinalMeds.filter((_, i) => i !== idx);
          if (newFinalMeds.length === 0) {
            finishGame();
          }
          return newFinalMeds;
        });
      } else {
        if (!wrongMeds[winningMed.id]) {
          setWrongMeds((prev) => ({ ...prev, [winningMed.id]: true }));
        }
      }
    }
    if (playersCount > 1) {
      setCurrentPlayer((prev) => (prev === playersCount ? 1 : prev + 1));
    }
    setShowModal(false);
    setChosenAnswer(null);
    setIsAnswerCorrect(false);
  }

  /** Завершення гри */
  function finishGame() {
    const dur = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dur);
    setGameFinished(true);
    flushChanges();
  }

  /** Рендеринг модального вікна з результатами */
  function renderResultsModal() {
    if (!gameFinished) return null;
    const totalCorrect = scores.reduce((a, b) => a + b, 0);

    return (
      <div className={styles.resultsOverlay}>
        <div className={styles.resultsBox}>
          <h2 className={styles.modalTitle}>Ergebnisse</h2>
          {playersCount === 1 ? (
            <>
              <p>
                Richtig: {totalCorrect} von {initialMedCount}
              </p>
              <p>
                Dauer: {Math.floor(sessionDuration / 60)} Min. {sessionDuration % 60} Sek.
              </p>
            </>
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
          <button className={styles.startButton} onClick={startGame}>
            Neues Spiel starten
          </button>
        </div>
      </div>
    );
  }

  // Отримуємо список категорій із даних медикаментів
  const availableCategories = Object.keys(
    medications.reduce((acc, med) => {
      (med.categories || []).forEach((cat) => { acc[cat] = true; });
      return acc;
    }, {})
  );
  // Додаємо "Alle" вручну та сортуємо за допомогою нашої функції getSortedCategories
  const allCategories = getSortedCategories(["Alle", ...availableCategories.filter(c => c !== "Alle")]);

  return (
    <MainLayout>
      <Helmet>
        <title>Glücksrad – Medikamente lernen</title>
        <meta
          name="description"
          content="Drehen Sie das Glücksrad und lernen Sie Medikamente! Wählen Sie Filter, Einstellungen und testen Sie Ihr Wissen."
        />
        <meta property="og:title" content="Glücksrad – Medikamente lernen" />
        <meta property="og:image" content={fortuneWheelBg} />
      </Helmet>

      <div className={styles.fortuneWheelGame}>
        {/* Баланс для багатокористувацького режиму */}
        {playersCount > 1 && !settingsOpen && !gameFinished && (
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

        {/* Кнопка "назад" */}
        <button className="main_menu_back" onClick={() => navigate("/medications-learning")}>
          &#8592;
        </button>

        {/* Кнопка налаштувань */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => {
              setSettingsOpen(true);
              setGameFinished(false);
            }}
          >
            <FaCog />
          </button>
        </div>

        {/* Кнопка туторіалу */}
        {settingsOpen && (
          <button
            data-tutorial="tutorialStartButton"
            className={styles.tutorialButton}
            onClick={() => setShowTutorial(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#ededed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}

        {/* Модаль налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.settingsModalBox}>
              <button className={styles.modalCloseButton} onClick={closeSettings}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Контейнер для категорій */}
                <div className={styles.categoryColumn}>
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper} data-tutorial="categorySelect">
                    <div className={styles.categoryCell}>
                      {selectedCategory === "Andere" ? "Andr." : selectedCategory}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={selectedCategory}
                      onChange={(e) => {
                        if (!requireAuth()) return;
                        setSelectedCategory(e.target.value);
                      }}
                    >
                      {allCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Фільтр */}
                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper} data-tutorial="filterSelect">
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={filterMode}
                      onChange={(e) => {
                        if (!requireAuth()) return;
                        setFilterMode(e.target.value);
                      }}
                    >
                      {filterModes.map((f) => (
                        <option key={f.value} value={f.value}>
                          {f.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Кількість гравців */}
                <div className={styles.playersColumn}>
                  <label className={styles.fieldLabel}>Spieler</label>
                  <div className={styles.selectWrapper} data-tutorial="playersSelect">
                    <div className={styles.playersCell}>
                      <FaUser style={{ marginRight: 4 }} /> x{playersCount}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={playersCount}
                      onChange={(e) => {
                        if (!requireAuth()) return;
                        setPlayersCount(Number(e.target.value));
                      }}
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

              {/* Режим відображення */}
              <div className={styles.modalField}>
                <div className={styles.displayModeContainer} data-tutorial="displayModeSelect">
                  {displayModeOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className={`${styles.displayModeIcon} ${
                        displayMode === opt.value ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (!requireAuth()) return;
                        setDisplayMode(opt.value);
                      }}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Кількість понять */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer} data-tutorial="questionCountSelect">
                  {questionCountOptions.map((qc) => (
                    <div
                      key={qc}
                      className={`${styles.questionCountIcon} ${
                        questionCount === qc ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (!requireAuth()) return;
                        setQuestionCount(qc);
                      }}
                    >
                      {qc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка старту */}
              <button className={styles.startButton} data-tutorial="startButton" onClick={startGame}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Повідомлення, якщо для даного фільтру немає медикаментів */}
        {!settingsOpen && !gameFinished && finalMeds.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
            </div>
          </div>
        )}

        {/* Модаль з результатами */}
        {renderResultsModal()}

        {/* Відображення колеса */}
        {!settingsOpen && !gameFinished && segments.length > 0 && (
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

        {/* Модаль з питанням */}
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.questionModalBox}>
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
              <button className={styles.modalOkButton} onClick={handleModalOk} disabled={!chosenAnswer}>
                OK
              </button>
            </div>
          </div>
        )}

        {/* Туторіал */}
        {showTutorial && (
          <MedicationFortuneWheelGameTutorial
            run={showTutorial}
            onFinish={() => {
              setShowTutorial(false);
              localStorage.setItem("medicationFortuneWheelTutorialCompleted", "true");
            }}
          />
        )}
      </div>

      {/* Модаль аутентифікації */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </MainLayout>
  );
}

const MedicationFortuneWheelGame = () => (
  <MedicationStatusProvider>
    <MedicationFortuneWheelGameContent />
  </MedicationStatusProvider>
);

export default MedicationFortuneWheelGame;