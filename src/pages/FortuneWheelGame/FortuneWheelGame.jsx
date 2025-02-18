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
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../constants/CategoryIcons";

// Якщо треба уніфікувати Westfalen-Lippe
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

// Лише 10, 20, 30, 40, 50
const questionCountOptions = [10, 20, 30, 40, 50];

// Для прикладу (гравці)
const playersList = [1, 2, 3, 4, 5, 6, 7, 8];

// Масив кольорів для секторів
const sectorColors = [
  "#EE4040",
  "#F0CF50",
  "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#F9AA1F",
  "#EC3F3F",
  "#FF9000",
];

const FortuneWheelGame = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses } = useTermStatus();

  // Уніфікуємо регіон (за потреби)
  const initialRegion = unifyRegion(selectedRegion || "Bayern");

  // --- Модальне вікно (налаштування) ---
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(10);
  const [playersCount, setPlayersCount] = useState(1);

  // --- Стан колеса ---
  const [fortuneTerms, setFortuneTerms] = useState([]);
  const [wheelAngle, setWheelAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // 4 варіанти відповіді (кнопки довкола колеса)
  const [cornerAnswers, setCornerAnswers] = useState([]);
  const [chosenAnswer, setChosenAnswer] = useState(null);

  useEffect(() => {
    // При зміні region іззовні (глобально)
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // При натисканні "Старт"
  const handleStart = () => {
    setSettingsOpen(false);
    filterTerms();
    setWheelAngle(0);
    setIsSpinning(false);
    setCornerAnswers([]);
    setChosenAnswer(null);
  };

  // Фільтруємо терміни й зберігаємо у fortuneTerms
  const filterTerms = () => {
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

    // Перемішуємо
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    // Обрізаємо
    const finalList = shuffled.slice(0, questionCount);
    setFortuneTerms(finalList);

    // Для демо: формуємо cornerAnswers (1 правильна + 3 неправильні)
    if (finalList.length > 0) {
      let mode = displayMode;
      if (mode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      const mainTerm = finalList[0];
      const correct = mode === "LatGerman" ? mainTerm.de : mainTerm.lat;
      const wrongs = medicalTerms
        .filter((t) => t.id !== mainTerm.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (mode === "LatGerman" ? t.de : t.lat));

      const allAnswers = [...wrongs, correct].sort(() => Math.random() - 0.5);
      setCornerAnswers(allAnswers);
    }
  };

  // Кнопка „Крутити“
  const handleSpin = () => {
    if (fortuneTerms.length === 0) return;
    setIsSpinning(true);
    setChosenAnswer(null);

    // 3-5 обертів + випадковий кут
    const randomAngle =
      wheelAngle + 360 * (3 + Math.floor(Math.random() * 2)) +
      Math.floor(Math.random() * 360);
    setWheelAngle(randomAngle);

    // Після анімації
    setTimeout(() => {
      setIsSpinning(false);
      // Користувач бачить, на чому зупинилось
    }, 4000);
  };

  // Визначаємо, що показувати в секторі (Lat / De / Mixed)
  const getSectorText = (term) => {
    let mode = displayMode;
    if (mode === "Mixed") {
      // Випадковий вибір
      mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
    }
    return mode === "LatGerman" ? term.lat : term.de;
  };

  // Вибір відповіді серед cornerAnswers
  const handleCornerAnswerSelect = (answer) => {
    if (chosenAnswer !== null) return;
    setChosenAnswer(answer);
  };

  return (
    <MainLayout>
      <div className={styles.fortuneWheelGame}>
        <h1>Fortune Wheel Game</h1>

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
                Оберіть фільтри, відображення і кількість (макс. 50):
              </p>

              <div className={styles.row}>
                {/* Регіон */}
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
                      {filterModes.map((fm) => (
                        <option key={fm.value} value={fm.value}>
                          {fm.label}
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

                {/* Кількість гравців (якщо треба) */}
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

              {/* Кількість (10, 20, 30, 40, 50) */}
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

        {/* Основна частина гри */}
        {!settingsOpen && fortuneTerms.length > 0 && (
          <>
            <div className={styles.wheelWrapper}>
              <div className={styles.fortuneWheel}>
                {/* Колесо */}
                <div
                  className={styles.wheel}
                  style={{
                    transform: `rotate(${wheelAngle}deg)`,
                    // isSpinning -> transition для плавного обертання
                    transition: isSpinning
                      ? "transform 4s cubic-bezier(.17,.67,.14,1.54)"
                      : "none",
                  }}
                >
                  {fortuneTerms.map((term, idx) => {
                    // Кут для кожного сектора
                    const angleSize = 360 / fortuneTerms.length;
                    // Починаємо з -90, щоби перший сектор був угорі (12 година)
                    const startAngle = angleSize * idx - 90;

                    // Вибираємо колір сектора (циклічно)
                    const bgColor = sectorColors[idx % sectorColors.length];
                    const sectorLabel = getSectorText(term);

                    return (
                      <div
                        key={term.id}
                        className={styles.wheelSector}
                        style={{
                          transform: `rotate(${startAngle}deg)`,
                          background: bgColor,
                        }}
                      >
                        <span
                          className={styles.sectorText}
                          style={{
                            // Текст відміняє оберт сектора:
                            transform: `translate(-50%, -50%) rotate(${-(
                              startAngle
                            )}deg)`,
                          }}
                        >
                          {sectorLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Стрілка зверху (перевернута) */}
                <div className={styles.wheelIndicator} />

                {/* Кнопка "Крутити" в центрі */}
                <button
                  className={styles.centerSpinButton}
                  onClick={handleSpin}
                  disabled={isSpinning}
                >
                  Крутити
                </button>
              </div>
            </div>

            {/* 4 кнопки-відповіді */}
            {cornerAnswers.length === 4 && (
              <div className={styles.cornerAnswers}>
                {cornerAnswers.map((ans, i) => {
                  // Припустимо, 3-й = correct
                  const isCorrect = chosenAnswer === ans && i === 3;
                  const isWrong = chosenAnswer === ans && !isCorrect;

                  return (
                    <button
                      key={i}
                      className={`${styles.cornerAnswerButton} ${
                        isCorrect ? styles.correct : ""
                      } ${isWrong ? styles.wrong : ""}`}
                      onClick={() => handleCornerAnswerSelect(ans)}
                    >
                      {ans}
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Якщо термінів немає */}
        {!settingsOpen && fortuneTerms.length === 0 && (
          <div style={{ marginTop: 20 }}>
            <p>На жаль, немає термінів для відображення.</p>
          </div>
        )}

        {/* Кнопка налаштувань */}
        {(!settingsOpen || window.innerWidth > 768) && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => setSettingsOpen(true)}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FortuneWheelGame;