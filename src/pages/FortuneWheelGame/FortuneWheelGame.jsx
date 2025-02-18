import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
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
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../constants/CategoryIcons";

// Уніфікація Westfalen-Lippe (за потреби)
const unifyRegion = (r) =>
  r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

// Скорочення регіонів
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

// Фільтри
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

// Кількість
const questionCountOptions = [10, 20, 30, 40, 50];
const playersList = [1, 2, 3, 4, 5, 6, 7, 8];

const FortuneWheelGame = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses } = useTermStatus();

  // Уніфіковуємо регіон
  const initialRegion = unifyRegion(selectedRegion || "Bayern");

  // --- Модальне вікно (налаштування) ---
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Параметри фільтра
  const [region, setRegion] = useState(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(10);

  // Кількість гравців
  const [playersCount, setPlayersCount] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // ***Стан рулетки***
  const [data, setData] = useState([]); // [{ option, style }, ...]
  const [finalTerms, setFinalTerms] = useState([]); // оригінальні терміни
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winnerIndex, setWinnerIndex] = useState(null);

  // 4 „плиточки“ (corner answers)
  const [cornerAnswers, setCornerAnswers] = useState([]);
  const [chosenAnswer, setChosenAnswer] = useState(null);

  // Рахунок для кожного гравця
  const [scores, setScores] = useState([]);

  // Зберігаємо розмір початкового списку термінів (для фінальної статистики)
  const [initialTermCount, setInitialTermCount] = useState(0);

  // Коли гра закінчена (data.length===0), показуємо підсумок
  const [gameOver, setGameOver] = useState(false);

  // Якщо регіон зміниться глобально
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // При зміні playersCount — ініціюємо scores
  useEffect(() => {
    // Кожен гравець починає з 0
    const arr = new Array(playersCount).fill(0);
    setScores(arr);
  }, [playersCount]);

  // Натискання "Старт"
  const handleStart = () => {
    setSettingsOpen(false);
    loadDataForRoulette();
    setGameOver(false);
  };

  const loadDataForRoulette = () => {
    // Фільтр
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);

      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);

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

    // Перемішати
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    // Обрізати
    const finalList = shuffled.slice(0, questionCount);

    // Зберігаємо для відповідей
    setFinalTerms(finalList);
    setInitialTermCount(finalList.length); // для статистики

    // Формуємо data
    const colorPalette = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    let newData = [];
    if (finalList.length === 0) {
      newData = [
        {
          option: "No terms found",
          style: {
            backgroundColor: "#666666",
            textColor: "#FFFFFF",
            fontSize: "16px",
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
        const text = mode === "LatGerman" ? term.lat : term.de;

        const color = colorPalette[idx % colorPalette.length];
        return {
          option: text,
          style: {
            backgroundColor: color,
            textColor: "#FFFFFF",
            fontSize: "18px",    // збільшуємо шрифт
            fontWeight: "bold",
            // 'textDistance': 85, // якщо бібліотека підтримує textDistance
          },
        };
      });
    }
    setData(newData);

    // Скидаємо інше
    setWinnerIndex(null);
    setCornerAnswers([]);
    setChosenAnswer(null);
    setGameOver(false);
  };

  // Кнопка SPIN
  const handleSpinClick = () => {
    if (data.length === 0) return;
    // Якщо уже немає секторів (гра закінчена)
    if (data[0]?.option === "No terms found") return;

    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    setWinnerIndex(null);
    setCornerAnswers([]);
    setChosenAnswer(null);
  };

  // Коли колесо зупинилося
  const handleStopSpinning = () => {
    setMustSpin(false);
    setWinnerIndex(prizeNumber);

    if (data[prizeNumber]?.option === "No terms found") {
      return;
    }

    const winningTerm = finalTerms[prizeNumber];
    if (!winningTerm) return;

    let correctAnswer = "";
    let mode = displayMode;
    const textOnSector = data[prizeNumber].option;

    if (mode === "Mixed") {
      if (textOnSector === winningTerm.lat) {
        correctAnswer = winningTerm.de;
      } else {
        correctAnswer = winningTerm.lat;
      }
    } else if (mode === "LatGerman") {
      correctAnswer = winningTerm.de;
    } else {
      correctAnswer = winningTerm.lat;
    }

    alert(`Випав: ${textOnSector}`);
    generateCornerAnswers(correctAnswer);

    // Якщо кілька гравців — наступний
    if (playersCount > 1) {
      setCurrentPlayer((prev) => (prev === playersCount ? 1 : prev + 1));
    }
  };

  // Генерація 4 варіантів
  const generateCornerAnswers = (correct) => {
    const allPossible = medicalTerms
      .flatMap((t) => [t.lat, t.de])
      .filter((txt) => txt !== correct);

    const wrongs = allPossible.sort(() => Math.random() - 0.5).slice(0, 3);
    const arr = [...wrongs, correct].sort(() => Math.random() - 0.5);
    setCornerAnswers(arr);
  };

  // Користувач обирає відповідь
  const handleAnswerSelect = (ans) => {
    if (chosenAnswer !== null) return;
    setChosenAnswer(ans);

    const actualTerm = finalTerms[prizeNumber];
    if (!actualTerm) return;

    const textOnSector = data[prizeNumber].option;
    let expectedCorrect = "";
    // Mixed
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
      alert("Правильно!");

      // Збільшуємо рахунок поточного гравця
      setScores((oldScores) =>
        oldScores.map((sc, idx) =>
          idx === currentPlayer - 1 ? sc + 1 : sc
        )
      );
      // Прибираємо сектор
      setData((oldData) => oldData.filter((_, i) => i !== winnerIndex));
      setFinalTerms((oldTerms) => oldTerms.filter((_, i) => i !== winnerIndex));
    } else {
      alert("Невірно!");
    }
  };

  // Якщо data спорожніє — гра закінчена (відстежуємо useEffect)
  useEffect(() => {
    if (!settingsOpen && data.length === 0 && finalTerms.length === 0) {
      // Гра скінчилась
      setGameOver(true);
    }
  }, [data, finalTerms, settingsOpen]);

  // Рендер фінального екрану (коли gameOver=true)
  const renderGameOver = () => {
    // Якщо 1 гравець
    if (playersCount === 1) {
      const correct = scores[0];
      return (
        <div className={styles.gameOverBox}>
          <h2>Гру завершено!</h2>
          <p>
            Ви відповіли правильно на <b>{correct}</b> із{" "}
            <b>{initialTermCount}</b>.
          </p>
        </div>
      );
    }

    // Якщо декілька гравців
    // Знаходимо макс.значення
    const maxScore = Math.max(...scores);
    // Хто переможець? Якщо кілька з однаковим score -> нічиЯ
    const winners = scores
      .map((sc, idx) => (sc === maxScore ? idx + 1 : null))
      .filter((v) => v !== null);

    const winnerText =
      winners.length > 1
        ? `Нічия між гравцями: ${winners.join(", ")} (по ${maxScore} балів)`
        : `Переміг гравець №${winners[0]} з результатом ${maxScore}!`;

    return (
      <div className={styles.gameOverBox}>
        <h2>Гру завершено!</h2>
        <p>Результати:</p>
        <ul>
          {scores.map((sc, i) => (
            <li key={i}>
              Гравець {i + 1}: {sc} правильних із {initialTermCount}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold" }}>{winnerText}</p>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className={styles.fortuneWheelGame}>
        <h1>Fortune Wheel (react-custom-roulette)</h1>

        {/* Модальне вікно */}
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
              <h2 className={styles.modalTitle}>Налаштування гри</h2>
              <p className={styles.modalSubtitle}>
                Оберіть фільтри, відображення та кількість:
              </p>

              {/* Ряд (region, filter, category, players) */}
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {regionAbbreviations[region] || region}
                    </div>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className={styles.nativeSelect}
                    >
                      <option value="Alle">Alle</option>
                      {Object.keys(regionAbbreviations).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Фільтр */}
                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select
                      value={filterMode}
                      onChange={(e) => setFilterMode(e.target.value)}
                      className={styles.nativeSelect}
                    >
                      {filterModes.map((f) => (
                        <option key={f.value} value={f.value}>
                          {f.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Категорія */}
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
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={styles.nativeSelect}
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
                  <label className={styles.fieldLabel}>Players</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.playersCell}>
                      <FaUser style={{ marginRight: 4 }} />
                      x{playersCount}
                    </div>
                    <select
                      value={playersCount}
                      onChange={(e) => setPlayersCount(Number(e.target.value))}
                      className={styles.nativeSelect}
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

              {/* Кількість */}
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

              {/* Кнопка старт */}
              <button className={styles.startButton} onClick={handleStart}>
                Старт
              </button>
            </div>
          </div>
        )}

        {/* Якщо гра завершена */}
        {gameOver && (
          <div className={styles.gameOverContainer}>
            {renderGameOver()}
          </div>
        )}

        {/* Якщо більше 1 гравця */}
        {playersCount > 1 && !settingsOpen && !gameOver && (
          <div style={{ marginTop: 20, fontWeight: "bold", color: "#013b6e" }}>
            Хід гравця №{currentPlayer} / {playersCount}
          </div>
        )}

        {/* Колесо, якщо є data і не gameOver */}
        {!settingsOpen && !gameOver && data.length > 0 && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <div style={{ display: "inline-block", position: "relative" }}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data.map((item, i) => {
                  // Піднімаємо (зум) виграшний сектор
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
                // Збільшуємо колесо
                size={400} 
              />

              {/* Кнопка SPIN по центру */}
              <button
                onClick={handleSpinClick}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  backgroundColor: "#013b6e",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: "bold",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                SPIN
              </button>
            </div>
          </div>
        )}

        {/* 4 відповіді (якщо не gameOver) */}
        {!settingsOpen && !gameOver && cornerAnswers.length === 4 && (
          <div className={styles.cornerAnswers}>
            {cornerAnswers.map((ans, idx) => {
              const actualTerm = finalTerms[prizeNumber];
              if (!actualTerm) return null;

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

export default FortuneWheelGame;