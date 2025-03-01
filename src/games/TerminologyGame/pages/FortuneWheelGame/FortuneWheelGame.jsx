import React, { useState, useEffect } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./FortuneWheelGame.module.scss";
import { useNavigate } from "react-router-dom";
import { FaCog, FaPlay, FaPause, FaCheck, FaList, FaUser } from "react-icons/fa";
import CustomWheel from "./CustomWheel";
import { useTermStatus, TermStatusProvider } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import medicalTerminologyBg from "../../../../assets/fortune-wheel-bg.jpg";
import FortuneWheelGameTutorial from "./FortuneWheelGameTutorial";

// Додаткові імпорти для авторизації
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

/** Допоміжні функції для очищення тексту */
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
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, recordCorrectAnswer, flushChanges } = useTermStatus();

  // Авторизація
  const [user] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return false;
    }
    return true;
  };

  // Стан налаштувань та ігрових даних
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Alle");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(10);
  const [playersCount, setPlayersCount] = useState(1);

  // Система балів для мультиплеєра
  const [scores, setScores] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // Сегменти колеса та список термінів
  const [segments, setSegments] = useState([]);
  const [finalTerms, setFinalTerms] = useState([]);

  // Стан модального вікна для запитань
  const [showModal, setShowModal] = useState(false);
  const [modalQuestion, setModalQuestion] = useState(null);
  const [modalAnswers, setModalAnswers] = useState([]);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [currentSliceIndex, setCurrentSliceIndex] = useState(null);

  // Стан ігрових лічильників та часу
  const [initialTermCount, setInitialTermCount] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [gameStartTime, setGameStartTime] = useState(null);

  // Невірні терміни (для повторення)
  const [wrongTerms, setWrongTerms] = useState({});
  const closeResultsModal = () => {
    // Просто закриваємо модалку результатів, не змінюючи даних гри
    setGameFinished(false);
  };

  // Туторіал
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("fortuneWheelGameTutorialCompleted") !== "true"
  );

  // Контроль розміру колеса
  const [wheelSize, setWheelSize] = useState(300);
  useEffect(() => {
    function handleResize() {
      setWheelSize(window.innerWidth > 768 ? 600 : 400);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // При зміні кількості гравців – оновлюємо рахунок
  useEffect(() => {
    setScores(new Array(playersCount).fill(0));
    setCurrentPlayer(1);
  }, [playersCount]);

  // Синхронізація регіону
  useEffect(() => {
    setRegion(selectedRegion || "Alle");
  }, [selectedRegion]);

  /** Функція старту гри (нової сесії) */
  function startGame() {
    setSettingsOpen(false);
    setGameFinished(false);
    setSessionDuration(0);
    setGameStartTime(Date.now());
    loadDataForWheel();
  }

  /** Функція для закриття вікна налаштувань */
  function closeSettings() {
    setSettingsOpen(false);
  }

  /** Формуємо масив finalTerms та segments */
  function loadDataForWheel() {
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion = region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory = selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused")) return false;
      return matchesRegion && matchesCategory;
    });

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const finalList = shuffled.slice(0, questionCount);

    setFinalTerms(finalList);
    setInitialTermCount(finalList.length);

    if (finalList.length === 0) {
      setSegments([]); // Порожній масив
      return;
    }

    const colorPalette = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    const newSegments = finalList.map((term, idx) => {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const labelForWheel =
        mode === "LatGerman"
          ? removeLatParenthesis(term.lat)
          : removeGermanArticle(term.de);
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

  /** Функція, що викликається при зупинці колеса – вибір сегмента */
  function handleStopSpinning(winnerIndex) {
    // Якщо користувач не авторизований, показуємо AuthModal та виходимо
    if (!requireAuth()) return;

    const seg = segments[winnerIndex];
    if (!seg || seg.labelForWheel === "Keine Begriffe gefunden") return;
    const winningTerm = finalTerms[winnerIndex];
    if (!winningTerm) return;
    const mode = seg.actualMode;
    let questionText = mode === "LatGerman" ? winningTerm.lat : winningTerm.de;
    let correctAns = mode === "LatGerman" ? winningTerm.de : winningTerm.lat;
    let allPossible =
      mode === "LatGerman"
        ? medicalTerms.map((t) => t.de)
        : medicalTerms.map((t) => t.lat);
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

  /** Обробка вибору відповіді у модальному вікні */
  function handleAnswerSelect(ans) {
    // Блокуємо дію для неавторизованих користувачів
    if (!requireAuth()) return;
    setChosenAnswer(ans);
    setIsAnswerCorrect(ans === modalCorrectAnswer);
  }

  /** Обробка кнопки OK у модальному вікні */
  function handleModalOk() {
    // Блокуємо дію для неавторизованих користувачів
    if (!requireAuth()) return;
    if (!chosenAnswer) return;
    const isCorrect = isAnswerCorrect;
    const idx = currentSliceIndex;
    const winningTerm = finalTerms[idx];
    if (winningTerm) {
      if (isCorrect) {
        // Оновлюємо рахунок для поточного гравця
        setScores((old) => {
          const newScores = [...old];
          newScores[currentPlayer - 1] += 1;
          return newScores;
        });
        recordCorrectAnswer(winningTerm.id);
        // Видаляємо сегмент та відповідний термін із списку
        setSegments((old) => old.filter((_, i) => i !== idx));
        setFinalTerms((prevFinalTerms) => {
          const newFinalTerms = prevFinalTerms.filter((_, i) => i !== idx);
          // Якщо більше немає термінів – завершуємо гру
          if (newFinalTerms.length === 0) {
            finishGame();
          }
          return newFinalTerms;
        });
      } else {
        if (!wrongTerms[winningTerm.id]) {
          setWrongTerms((prev) => ({ ...prev, [winningTerm.id]: true }));
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

  /** Завершення гри – викликається, коли більше немає термінів */
  function finishGame() {
    const dur = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dur);
    setGameFinished(true);
    flushChanges();
    // НЕ викликайте тут setFinalTerms([]) чи інше очищення!
  }

  /** Рендер результатного модального вікна */
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
                Richtig: {totalCorrect} von {initialTermCount}
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

  return (
    <MainLayout>
      <Helmet>
        <title>Glücksrad – Medizinische Fachbegriffe lernen</title>
        <meta
          name="description"
          content="Drehen Sie das Glücksrad und lernen Sie medizinische Fachbegriffe! Wählen Sie Filter, Einstellungen und testen Sie Ihr Wissen."
        />
        <meta property="og:title" content="Glücksrad – Medizinische Fachbegriffe lernen" />
        <meta property="og:image" content={medicalTerminologyBg} />
      </Helmet>

      <div className={styles.fortuneWheelGame}>
        {/* Рахунок гравців, якщо більше одного */}
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

        {/* Back-Button */}
        <button className="main_menu_back" onClick={() => navigate("/terminology-learning")}>
          &#8592;
        </button>

        {/* Кнопка "Налаштування" */}
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

        {/* Кнопка для запуску туторіалу */}
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

        {/* Вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.settingsModalBox}>
              <button className={styles.modalCloseButton} onClick={closeSettings}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper} data-tutorial="regionSelect">
                    <div className={styles.regionCell}>
                      {regionAbbreviations[region] || region}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => {
                        if (!requireAuth()) return;
                        setRegion(e.target.value);
                      }}
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

                {/* Kategorie */}
                <div className={styles.categoryColumn}>
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper} data-tutorial="categorySelect">
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
                      onChange={(e) => {
                        if (!requireAuth()) return;
                        setSelectedCategory(e.target.value);
                      }}
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

              {/* Anzeige-Modус */}
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

              {/* Anzahl der Begriffe */}
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

              {/* Start-кнопка залишається активною */}
              <button className={styles.startButton} data-tutorial="startButton" onClick={startGame}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Якщо немає термінів і гра не завершена */}
        {!settingsOpen && !gameFinished && finalTerms.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
            </div>
          </div>
        )}

        {/* Модальне вікно результатів */}
        {renderResultsModal()}

        {/* Колесо */}
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

        {/* Модальне вікно з питанням */}
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
          <FortuneWheelGameTutorial
            run={showTutorial}
            onFinish={() => {
              setShowTutorial(false);
              localStorage.setItem("fortuneWheelGameTutorialCompleted", "true");
            }}
          />
        )}
      </div>
      
      {/* Auth-Modal: відкривається, якщо спроба дії відбувається без авторизації */}
      {showAuthModal && (
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      )}
    </MainLayout>
  );
}

const FortuneWheelGame = () => (
  <TermStatusProvider>
    <FortuneWheelGameContent />
  </TermStatusProvider>
);

export default FortuneWheelGame;