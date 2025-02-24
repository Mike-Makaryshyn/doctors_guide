import React, { useState, useEffect } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./FortuneWheelGame.module.scss";

import {
  FaCog,
  FaPlay,
  FaPause,
  FaCheck,
  FaList,
  FaUser,
} from "react-icons/fa";

import { Wheel } from "react-custom-roulette";
import { useTermStatus, TermStatusProvider } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import medicalTerminologyBg from "../../../../assets/fortune-wheel-bg.jpg";


// Усі регіони з medicalTerms
const getAllRegions = () => {
  const regions = medicalTerms.flatMap((term) => term.regions || []);
  return Array.from(new Set(regions));
};

// Скорочення для відображення
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

// Режими фільтра
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

const questionCountOptions = [10, 20, 30, 40, 50];
const playersList = [1, 2, 3, 4, 5, 6, 7, 8];

const FortuneWheelGameContent = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses } = useTermStatus();

  // Використовуємо або глобальний selectedRegion, або "Alle"
  const initialRegion = selectedRegion || "Alle";

  // Стан для модального вікна налаштувань
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Параметри фільтра
  const [region, setRegion] = useState(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(10);

  // Стан гри
  const [playersCount, setPlayersCount] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [data, setData] = useState([]);        // Дані для колеса
  const [finalTerms, setFinalTerms] = useState([]); 
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winnerIndex, setWinnerIndex] = useState(null);

  // Corner answers
  const [cornerAnswers, setCornerAnswers] = useState([]);
  const [chosenAnswer, setChosenAnswer] = useState(null);

  // Стан для відстеження кількості
  const [scores, setScores] = useState([]);
  const [initialTermCount, setInitialTermCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // **Новий стан** для відображення вибраного терміна над колесом
  const [winningText, setWinningText] = useState("");

  // Якщо глобальний регіон змінюється — оновлюємо локальний
  useEffect(() => {
    setRegion(selectedRegion || "Alle");
  }, [selectedRegion]);

  // Ініціалізуємо масив рахунків
  useEffect(() => {
    const arr = new Array(playersCount).fill(0);
    setScores(arr);
  }, [playersCount]);

  // Обробник "Start"
  const handleStart = () => {
    setSettingsOpen(false);
    loadDataForRoulette();
    setGameOver(false);
  };

  // Завантажуємо дані для колеса
  const loadDataForRoulette = () => {
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion = region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory = selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id] || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused")) return false;
      return matchesRegion && matchesCategory;
    });

    // Перемішуємо
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const finalList = shuffled.slice(0, questionCount);

    setFinalTerms(finalList);
    setInitialTermCount(finalList.length);

    const colorPalette = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    let newData = [];
    if (finalList.length === 0) {
      newData = [
        {
          option: "Keine Begriffe gefunden",
          style: {
            backgroundColor: "#666666",
            textColor: "#FFFFFF",
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
      ];
    } else {
      newData = finalList.map((term, idx) => {
        let mode = displayMode;
        if (mode === "Mixed") {
          mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
        }
        const text = (mode === "LatGerman") ? term.lat : term.de;
        const color = colorPalette[idx % colorPalette.length];
        return {
          option: text,
          style: {
            backgroundColor: color,
            textColor: "#FFFFFF",
            fontSize: "20px",
            fontWeight: "bold",
          },
        };
      });
    }
    setData(newData);

    setWinnerIndex(null);
    setCornerAnswers([]);
    setChosenAnswer(null);
    setGameOver(false);
    setWinningText(""); // Скидаємо текст терміна
  };

  // Spin
  const handleSpinClick = () => {
    if (data.length === 0) return;
    if (data[0]?.option === "Keine Begriffe gefunden") return;

    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    // Скидаємо попередні стани
    setWinnerIndex(null);
    setCornerAnswers([]);
    setChosenAnswer(null);
    setWinningText("");
  };

  // Коли колесо зупинилося
  const handleStopSpinning = () => {
    setMustSpin(false);
    setWinnerIndex(prizeNumber);

    if (data[prizeNumber]?.option === "Keine Begriffe gefunden") return;

    const winningTerm = finalTerms[prizeNumber];
    if (!winningTerm) return;

    // Визначаємо правильну відповідь
    let correctAnswer = "";
    let mode = displayMode;
    const textOnSector = data[prizeNumber].option;
    if (mode === "Mixed") {
      correctAnswer = (textOnSector === winningTerm.lat) ? winningTerm.de : winningTerm.lat;
    } else if (mode === "LatGerman") {
      correctAnswer = winningTerm.de;
    } else {
      correctAnswer = winningTerm.lat;
    }

    // Замість alert - показуємо вибраний текст над колесом
    setWinningText(textOnSector);

    // Генеруємо варіанти
    generateCornerAnswers(correctAnswer);

    // Якщо декілька гравців
    if (playersCount > 1) {
      setCurrentPlayer((prev) => (prev === playersCount ? 1 : prev + 1));
    }
  };

  // Генеруємо 4 варіанти відповіді
  const generateCornerAnswers = (correct) => {
    const allPossible = medicalTerms.flatMap((t) => [t.lat, t.de]).filter((txt) => txt !== correct);
    const wrongs = allPossible.sort(() => Math.random() - 0.5).slice(0, 3);
    const arr = [...wrongs, correct].sort(() => Math.random() - 0.5);
    setCornerAnswers(arr);
  };

  // Коли користувач обирає відповідь
  const handleAnswerSelect = (ans) => {
    if (chosenAnswer !== null) return;
    setChosenAnswer(ans);

    const actualTerm = finalTerms[prizeNumber];
    if (!actualTerm) return;

    const textOnSector = data[prizeNumber].option;
    let expectedCorrect = "";
    if (textOnSector === actualTerm.lat) {
      expectedCorrect = actualTerm.de;
    } else if (textOnSector === actualTerm.de) {
      expectedCorrect = actualTerm.lat;
    }
    if (displayMode === "LatGerman") {
      expectedCorrect = actualTerm.de;
    } else if (displayMode === "GermanLat") {
      expectedCorrect = actualTerm.lat;
    }

    if (ans === expectedCorrect) {
      // Якщо 1 гравець - оновлюємо Firebase
      if (playersCount === 1) {
        // recordCorrectAnswer(actualTerm.id);
      }
      // Видаляємо сектор
      setData((oldData) => oldData.filter((_, i) => i !== winnerIndex));
      setFinalTerms((oldTerms) => oldTerms.filter((_, i) => i !== winnerIndex));
    }

    // Після вибору відповіді ховаємо термін
    setWinningText("");
  };

  // Відстежуємо, чи гра завершена
  useEffect(() => {
    if (!settingsOpen && data.length === 0 && finalTerms.length === 0) {
      setGameOver(true);
    }
  }, [data, finalTerms, settingsOpen]);

  // Рендер екрану завершення
  const renderGameOver = () => {
    if (playersCount === 1) {
      const correct = scores[0];
      return (
        <div className={styles.gameOverBox}>
          <h2>Spiel beendet!</h2>
          <p>
            Sie haben {correct} von {initialTermCount} Begriffen richtig beantwortet.
          </p>
        </div>
      );
    }
    const maxScore = Math.max(...scores);
    const winners = scores
      .map((sc, idx) => (sc === maxScore ? idx + 1 : null))
      .filter((v) => v !== null);
    const winnerText =
      winners.length > 1
        ? `Unentschieden zwischen Spielern: ${winners.join(", ")} (je ${maxScore} Punkte)`
        : `Spieler Nr. ${winners[0]} hat mit ${maxScore} Punkten gewonnen!`;
    return (
      <div className={styles.gameOverBox}>
        <h2>Spiel beendet!</h2>
        <p>Ergebnisse:</p>
        <ul>
          {scores.map((sc, i) => (
            <li key={i}>
              Spieler {i + 1}: {sc} richtig von {initialTermCount}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold" }}>{winnerText}</p>
      </div>
    );
  };

  // Логіка відображення Spin-кнопки:
  // Якщо в нас є cornerAnswers (4 варіанти), то Spin приховано
  // Якщо cornerAnswers.length===0 => Spin показано
  const showSpinButton = (!gameOver && cornerAnswers.length === 0);

  return (
    <MainLayout>
      <Helmet>
        <title>Fortune Wheel – Fachbegriffe lernen</title>
        <meta
          name="description"
          content="Spielen Sie das Fortune Wheel und lernen Sie dabei Fachbegriffe. Wählen Sie Filter und Einstellungen und drehen Sie das Rad, um einen Begriff zu gewinnen!"
        />
        <meta
          name="keywords"
          content="Fachbegriffe, Fortune Wheel, Lernspiel, Terminologie, Medizin"
        />
        <meta property="og:title" content="Fortune Wheel – Fachbegriffe lernen" />
        <meta
          property="og:description"
          content="Spielen Sie das Fortune Wheel und lernen Sie dabei Fachbegriffe. Drehen Sie das Rad und erhalten Sie spannende Herausforderungen!"
        />
        <meta property="og:image" content={medicalTerminologyBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fortune Wheel – Fachbegriffe lernen"
        />
        <meta
          name="twitter:description"
          content="Spielen Sie das Fortune Wheel und lernen Sie dabei Fachbegriffe."
        />
        <meta name="twitter:image" content={medicalTerminologyBg} />
      </Helmet>

      <div className={styles.fortuneWheelGame}>
        {/* Кнопка назад */}
        <button className="main_menu_back" onClick={() => window.history.back()}>
          &#8592;
        </button>

        {/* Кнопка налаштувань (праворуч унизу) */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => {
              setSettingsOpen(true);
              setGameOver(false);
            }}
          >
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={
                window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile
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
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="Alle">Alle</option>
                      {getAllRegions().map((r) => (
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

              {/* Режим відображення */}
              <div className={styles.modalField}>
                <label>Anzeige-Modus:</label>
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

              {/* Кількість термінів */}
              <div className={styles.modalField}>
                <label>Anzahl Begriffe:</label>
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
                Start
              </button>
            </div>
          </div>
        )}

        {gameOver && (
          <div className={styles.gameOverContainer}>{renderGameOver()}</div>
        )}

        {playersCount > 1 && !settingsOpen && !gameOver && (
          <div style={{ marginTop: 20, fontWeight: "bold", color: "#013b6e" }}>
            Spieler {currentPlayer} von {playersCount} ist am Zug
          </div>
        )}

        {/* Відображаємо вибраний термін, поки не вибрано відповідь */}
        {winningText && (
          <div style={{ marginTop: 20, fontSize: 24, fontWeight: "bold", color: "#013b6e" }}>
            {winningText}
          </div>
        )}

        {!settingsOpen && !gameOver && data.length > 0 && (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <div style={{ display: "inline-block", position: "relative" }}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data.map((item, i) => {
                  let baseStyle = { ...item.style };
                  if (i === winnerIndex) {
                    baseStyle.transform = "scale(1.15)";
                    baseStyle.transition = "transform 0.7s, box-shadow 0.7s";
                    baseStyle.boxShadow = "0 0 10px #ffffff";
                  }
                  return { ...item, style: baseStyle };
                })}
                onStopSpinning={handleStopSpinning}
                spinDuration={0.8}
                size={400}
              />
              {/* Кнопка Spin показуємо лише якщо cornerAnswers порожні */}
              {showSpinButton && (
                <button
                  onClick={handleSpinClick}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundColor: "#013b6e",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 18,
                    fontWeight: "bold",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  SPIN
                </button>
              )}
            </div>
          </div>
        )}

        {/* Відображаємо 4 варіанти відповіді, якщо вони є */}
        {!settingsOpen && !gameOver && cornerAnswers.length === 4 && (
          <div className={styles.cornerAnswers}>
            {cornerAnswers.map((ans, idx) => {
              const actualTerm = finalTerms[prizeNumber];
              if (!actualTerm) return null;

              // Визначаємо правильну відповідь
              const textOnSector = data[prizeNumber].option;
              let expectedCorrect = "";
              if (textOnSector === actualTerm.lat) {
                expectedCorrect = actualTerm.de;
              } else if (textOnSector === actualTerm.de) {
                expectedCorrect = actualTerm.lat;
              }
              if (displayMode === "LatGerman") {
                expectedCorrect = actualTerm.de;
              } else if (displayMode === "GermanLat") {
                expectedCorrect = actualTerm.lat;
              }

              const isCorrect = ans === expectedCorrect;
              const isChosen = chosenAnswer === ans;
              const isWrong = isChosen && !isCorrect;
              const isRight = isChosen && isCorrect;

              return (
                <button
                  key={idx}
                  className={`${styles.cornerAnswerButton} ${
                    isRight ? styles.correct : ""
                  } ${isWrong ? styles.wrong : ""}`}
                  onClick={() => handleAnswerSelect(ans)}
                >
                  {ans}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

const FortuneWheelGame = () => (
  <TermStatusProvider>
    <FortuneWheelGameContent />
  </TermStatusProvider>
);

export default FortuneWheelGame;