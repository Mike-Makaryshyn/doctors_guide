// ========== TermMatchingGame.jsx ==========
// Шлях: doctors_guide/src/games/TerminologyGame/pages/TermMatchingGame/TermMatchingGame.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";

// ***** Підтягування масиву medicalTerms і контексту (як у ElectiveLanguageGame) *****
import { medicalTerms } from "../../../../constants/medicalTerms";
import { TermStatusProvider } from "../../../../contexts/TermStatusContext";
import { useTermStatus } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

import { Helmet } from "react-helmet";
import { FaCog, FaList, FaCheck, FaPlay, FaPause, FaPen } from "react-icons/fa";
import TermMatchingGameTutorial from "./TermMatchingGameTutorial"; // <-- Ваш компонент туторіала (аналогічно ElectiveLanguageGameTutorial)
import styles from "./TermMatchingGame.module.scss"; // Можна взяти ElectiveLanguageGame.module.scss і перейменувати
import { categoryIcons } from "../../../../constants/CategoryIcons";

// Псевдооб’єднання терміну й визначення: 
// - Ліва колонка відображає "source" (назвемо це questionText), 
// - Права – "target" (answerText).

// Режими фільтру для термінів
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Можлива кількість пар
const questionCountOptions = [5, 10, 20, 40, 60, 100, "all"];

/**
 * Просто підготовлені скорочення для Lands (як у ElectiveLanguageGame).
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

const TermMatchingGameContent = () => {
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo(); // глобальний вибір регіону
  const { termStatuses, toggleStatus, recordCorrectAnswer, flushChanges } = useTermStatus();

  // Авторизація
  const [user] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Показувати модалку налаштувань?
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Початкові налаштування
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);

  const [questionCount, setQuestionCount] = useState(10);

  // Стан гри
  const [pairs, setPairs] = useState([]); // Тут зберігаємо відфільтровані та підготовлені терміни
  const [leftColumn, setLeftColumn] = useState([]);  // Масив об’єктів (для лівої колонки)
  const [rightColumn, setRightColumn] = useState([]); // Масив об’єктів (для правої колонки)
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState({});
  const [gameFinished, setGameFinished] = useState(false);

  // Підрахунок часу, результатів
  const [gameStartTime, setGameStartTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [correctMatchesCount, setCorrectMatchesCount] = useState(0);

  // Туторіал
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("termMatchingGameTutorialCompleted") !== "true"
  );

  // Для підрахунку, скільки разів терміни вже показувалися (за ідентичним принципом Elective)
  const [shownCounts, setShownCounts] = useState({});

  // Якщо немає користувача, відкривати AuthModal
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Кнопка "Почати" — налаштовуємо гру
  const handleStart = () => {
    setSettingsOpen(false);
    initGameData();
    setGameFinished(false);
    setGameStartTime(Date.now());
  };

  /**
   * 1. Фільтруємо терміни за регіоном, категорією, фільтром (unlearned, learned, paused).
   * 2. Вирізаємо потрібну кількість (questionCount).
   * 3. Формуємо масиви leftColumn і rightColumn.
   */
  const initGameData = () => {
    const gefilterte = medicalTerms.filter((term) => {
      const matchesRegion = region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;

      return matchesRegion && matchesCategory;
    });

    // Сортуємо за кількістю показів (як у Elective)
    gefilterte.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    // Вирізаємо за questionCount
    const selected = questionCount === "all" ? gefilterte : gefilterte.slice(0, questionCount);

    // Оновлюємо лічильник показів
    const newShownCounts = { ...shownCounts };
    selected.forEach((term) => {
      newShownCounts[term.id] = (newShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(newShownCounts);

    // Формуємо pairs
    // Ліва колонка: DE (або source?), Права: EN (або target?) — змінити за потреби
    // Для прикладу беремо term.de і term.en
    const gamePairs = selected.map((term) => {
      return {
        id: term.id,
        leftText: term.de || "???",  // Або sourceLang
        rightText: term.en || "???", // Або targetLang
        original: term,
      };
    });

    // Перемішані 2 колонки
    const shuffledLeft = [...gamePairs].sort(() => Math.random() - 0.5);
    const shuffledRight = [...gamePairs].sort(() => Math.random() - 0.5);

    setPairs(gamePairs);
    setLeftColumn(shuffledLeft);
    setRightColumn(shuffledRight);

    // Очищуємо стан
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedPairs({});
    setCorrectMatchesCount(0);
  };

  // Клік по лівій колонці
  const handleLeftSelect = (item) => {
    if (matchedPairs[item.id]) return; // вже знайдена пара
    setSelectedLeft(item);

    // Якщо уже вибрали праву, перевіримо збіг
    if (selectedRight && selectedRight.id === item.id) {
      doMatch(item.id);
    }
  };

  // Клік по правій колонці
  const handleRightSelect = (item) => {
    if (matchedPairs[item.id]) return; // вже знайдена пара
    setSelectedRight(item);

    // Якщо уже вибрали ліву, перевіримо збіг
    if (selectedLeft && selectedLeft.id === item.id) {
      doMatch(item.id);
    }
  };

  // Функція зв’язування пари
  const doMatch = (id) => {
    // Позначити термін як знайдений
    setMatchedPairs((prev) => ({ ...prev, [id]: true }));

    // Скидаємо вибір
    setSelectedLeft(null);
    setSelectedRight(null);

    // Записуємо у глобальний контекст (коли allowEdit=false, застосовуємо recordCorrectAnswer)
    if (!allowEdit) {
      recordCorrectAnswer(id);
    } else {
      // Якщо allowEdit=true — автоматично статус "learned"
      toggleStatus(id, "learned");
    }

    // Підвищуємо лічильник
    setCorrectMatchesCount((prev) => prev + 1);
  };

  // Перевіряємо, чи всі пари знайдені
  useEffect(() => {
    if (Object.keys(matchedPairs).length > 0 && Object.keys(matchedPairs).length === pairs.length) {
      // Гру завершено
      setGameFinished(true);
      // Вираховуємо тривалість
      const duration = Math.floor((Date.now() - gameStartTime) / 1000);
      setSessionDuration(duration);

      if (!allowEdit) {
        // Застосовуємо flushChanges() одразу, щоб зберегти статуси
        flushChanges();
      }
    }
  }, [matchedPairs, pairs, flushChanges, gameStartTime, allowEdit]);

  // Закінчення гри вручну (необов’язково)
  const finishGameEarly = () => {
    setGameFinished(true);
    const duration = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(duration);
    if (!allowEdit) flushChanges();
  };

  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  // Кнопка "Close" у результатах
  const handleCloseResults = () => {
    setGameFinished(false);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Term Matching Game – Medizinische Begriffe verbinden</title>
        <meta
          name="description"
          content="Verbinde medizinische Begriffe mit ihren Übersetzungen oder Definitionen. Basierend auf Region, Kategorie und Filter."
        />
      </Helmet>

      <div className={styles.electiveLanguageGame /* або termMatchingGame */}>
        {/* Кнопка повернення */}
        <button
          className="main_menu_back"
          onClick={() => navigate("/terminology-learning")}
        >
          &#8592;
        </button>

        {/* Якщо включені налаштування */}
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

              {/* Налаштування Region, Filter, Category, Edit */}
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn} data-tutorial="regionSelect">
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {getRegionLabel(region)}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setRegion(e.target.value);
                      }}
                    >
                      <option value="Alle">Alle</option>
                      {Array.from(
                        new Set(medicalTerms.flatMap((t) => t.regions || []))
                      ).map((r) => (
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
                    <div className={styles.regionCell}>
                      {filterModes.find((f) => f.value === filterMode)?.icon}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={filterMode}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setFilterMode(e.target.value);
                      }}
                    >
                      {filterModes.map((fm) => (
                        <option key={fm.value} value={fm.value}>
                          {fm.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Category */}
                <div className={styles.categoryColumn} data-tutorial="categorySelect">
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
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setSelectedCategory(e.target.value);
                      }}
                    >
                      <option value="Alle">Alle</option>
                      {Array.from(
                        new Set(medicalTerms.flatMap((t) => t.categories || []))
                      ).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Edit mode */}
                <div className={styles.editColumn} data-tutorial="editToggleButton">
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${
                      allowEdit ? styles.selected : ""
                    }`}
                    onClick={() => {
                      if (requireAuth()) return;
                      setAllowEdit(!allowEdit);
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>

              {/* Вибір кількості питань */}
              <div className={styles.modalField}>
                <div
                  className={styles.questionCountContainer}
                  data-tutorial="questionCountContainer"
                >
                  {questionCountOptions.map((countOpt) => (
                    <div
                      key={countOpt}
                      className={`${styles.questionCountIcon} ${
                        questionCount === countOpt ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (requireAuth()) return;
                        setQuestionCount(countOpt);
                      }}
                    >
                      {countOpt === "all" ? "Alles" : countOpt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка "Start" */}
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

        {/* Кнопка перезапуску туторіалу */}
        {settingsOpen && (
          <button
            className={styles.tutorialButton}
            data-tutorial="tutorialStartButton"
            onClick={() => setShowTutorial(true)}
          >
            ?
          </button>
        )}

        {/* Якщо вже закрили налаштування, але термінів немає */}
        {!settingsOpen && !gameFinished && pairs.length === 0 && (
          <div className={styles.noQuestionsMessage}>
            <p>Für diese Einstellungen sind keine Begriffe vorhanden.</p>
          </div>
        )}

        {/* ІНТЕРФЕЙС ГРИ - дві колонки */}
        {!settingsOpen && !gameFinished && pairs.length > 0 && (
          <div className={styles.gameContainer}>
            <div className={styles.column} data-tutorial="termsColumn">
              {leftColumn.map((item) => {
                const matched = matchedPairs[item.id];
                const selected = selectedLeft?.id === item.id;
                return (
                  <div
                    key={item.id}
                    className={`
                      ${styles.answerTile}
                      ${matched ? styles.correct : ""}
                      ${selected ? styles.selected : ""}
                    `}
                    onClick={() => {
                      if (!matched) handleLeftSelect(item);
                    }}
                  >
                    {item.leftText}
                  </div>
                );
              })}
            </div>

            <div className={styles.column} data-tutorial="definitionsColumn">
              {rightColumn.map((item) => {
                const matched = matchedPairs[item.id];
                const selected = selectedRight?.id === item.id;
                return (
                  <div
                    key={item.id}
                    className={`
                      ${styles.answerTile}
                      ${matched ? styles.correct : ""}
                      ${selected ? styles.selected : ""}
                    `}
                    onClick={() => {
                      if (!matched) handleRightSelect(item);
                    }}
                  >
                    {item.rightText}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Якщо гра завершена */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>
            <div className={styles.resultsTile}>
              <button className={styles.modalCloseButton} onClick={handleCloseResults}>
                ×
              </button>
              <h3>Ergebnisse</h3>
              <p>
                Sie haben alle Paare gefunden! ({correctMatchesCount} / {pairs.length})
              </p>
              <p>Dauer: {sessionDuration} Sekunden</p>
              <button
                className={styles.startButton}
                onClick={() => {
                  // Нова гра
                  setSettingsOpen(true);
                  setGameFinished(false);
                }}
              >
                Neue Runde
              </button>
            </div>
          </div>
        )}

        {/* Кнопка "Налаштування" внизу справа (щоб повернутися до модалки) */}
        {(!settingsOpen || window.innerWidth > 768) && !gameFinished && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => {
                if (requireAuth()) return;
                setSettingsOpen(true);
              }}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>

      {/* Модальне вікно авторизації */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Туторіал */}
      <TermMatchingGameTutorial run={showTutorial} onFinish={() => setShowTutorial(false)} />
    </MainLayout>
  );
};

/**
 * Обгортаємо в TermStatusProvider, як ElectiveLanguageGame
 */
const TermMatchingGame = () => {
  return (
    <TermStatusProvider>
      <TermMatchingGameContent />
    </TermStatusProvider>
  );
};

export default TermMatchingGame;