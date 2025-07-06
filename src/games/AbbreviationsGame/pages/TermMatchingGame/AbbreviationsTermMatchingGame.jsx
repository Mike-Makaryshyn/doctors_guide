import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations } from "../../../../constants/medicalAbbreviations";
import {
  AbbreviationsStatusProvider,
  useAbbreviationsStatus,
} from "../../../../contexts/AbbreviationsStatusContext";
import { useAuth } from "../../../../hooks/useAuth";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import { Helmet } from "react-helmet";
import {
  FaCog,
  FaList,
  FaCheck,
  FaPlay,
  FaPause,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import AbbreviationsTermMatchingGameTutorial from "./AbbreviationsTermMatchingGameTutorial";
import styles from "./TermMatchingGame.module.scss";
import matchingGameBg from "../../../../assets/abbreviation-term-matching-bg.jpg";
import { initGameDataUtil } from "./initGameDataUtil";

// Допоміжна функція для сортування категорій: алфавітно, з "Andere" завжди останньою
const sortCategoriesWithAndereLast = (categories) => {
  let sorted = [...categories].sort((a, b) => a.localeCompare(b));
  if (sorted.includes("Andere")) {
    sorted = sorted.filter((cat) => cat !== "Andere");
    sorted.push("Andere");
  }
  return sorted;
};

// Опції вибору кількості абревіатур
const questionCountOptions = [10, 20, 40, 60, "all"];

// Режими відображення: Abk.→Deu, Deu→Abk., Gemischt
const displayModeOptions = [
  { value: "LatGerman", label: "Abk.→Deu" },
  { value: "GermanLat", label: "Deu→Abk." },
  { value: "Mixed", label: "Gemischt" },
];

// Фільтр-моди
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Функція для перетасування масиву
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Декомпозовані компоненти (скелети)
function GameBoard({ displayedLeft, displayedRight, matchedPairs, wrongLeft, wrongRight, selectedLeft, selectedRight, handleLeftSelect, handleRightSelect, styles }) {
  return (
    <div className={styles.gameContainer}>
      {/* Ліва колонка */}
      <div className={styles.column} data-tutorial="termsColumn">
        {displayedLeft.map((item) => {
          const matched = matchedPairs[item.id] ? styles.correct : "";
          const isWrong = wrongLeft === item.id ? styles.wrong : "";
          const isSelected = selectedLeft?.id === item.id ? styles.selected : "";
          return (
            <div
              key={item.id}
              className={`${styles.answerTile} ${matched} ${isWrong} ${isSelected}`}
              onClick={() => {
                if (!matchedPairs[item.id]) handleLeftSelect(item);
              }}
            >
              {item.leftText}
            </div>
          );
        })}
      </div>
      {/* Права колонка */}
      <div className={styles.column} data-tutorial="definitionsColumn">
        {displayedRight.map((item) => {
          const matched = matchedPairs[item.id] ? styles.correct : "";
          const isWrong = wrongRight === item.id ? styles.wrong : "";
          const isSelected = selectedRight?.id === item.id ? styles.selected : "";
          return (
            <div
              key={item.id}
              className={`${styles.answerTile} ${matched} ${isWrong} ${isSelected}`}
              onClick={() => {
                if (!matchedPairs[item.id]) handleRightSelect(item);
              }}
            >
              {item.rightText}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SettingsModal({
  settingsOpen,
  setSettingsOpen,
  filterMode,
  setFilterMode,
  filterModes,
  selectedCategory,
  setSelectedCategory,
  allCategories,
  displayMode,
  setDisplayMode,
  displayModeOptions,
  questionCount,
  setQuestionCount,
  questionCountOptions,
  requireAuth,
  handleStartGame,
  styles,
}) {
  if (!settingsOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
        <button className='modalCloseButton' onClick={() => setSettingsOpen(false)}>
          ×
        </button>
        <h2 className={styles.modalTitle}>Einstellungen</h2>
        {/* Перший ряд: Filter / Kategorie / (Режим відображення) */}
        <div className={styles.row}>
          {/* Фільтр */}
          <div className={styles.filterColumn} data-tutorial="filterColumn">
            <label className={styles.fieldLabel}>Filter</label>
            <div className={styles.selectWrapper}>
              <div className={styles.filterCell}>
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

          {/* Категорія */}
          <div className={styles.categoryColumn} data-tutorial="categorySelect">
            <label className={styles.fieldLabel}>Kategorie</label>
            <div className={styles.selectWrapper}>
              <div className={styles.categoryCell}>
                {selectedCategory === "Alle"
                  ? "Alle"
                  : selectedCategory === "Andere"
                  ? "Andr."
                  : selectedCategory}
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
                {allCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Режим відображення */}
          <div className={styles.modalField} data-tutorial="displayModeContainer">
          <div className={styles.modalField} style={{ width: "100%" }}>
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
        </div>

        {/* Другий ряд: Кількість абревіатур */}
        <div className={styles.modalField} data-tutorial="questionCountContainer">
          <div className={styles.questionCountContainer}>
            {questionCountOptions.map((qc) => (
              <div
                key={qc}
                className={`${styles.questionCountIcon} ${
                  questionCount === qc ? styles.selected : ""
                }`}
                onClick={() => {
                  if (requireAuth()) return;
                  setQuestionCount(qc);
                }}
              >
                {qc === "all" ? "Alles" : qc}
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка Start */}
        <button
          className={styles.startButton}
          data-tutorial="startButton"
          onClick={handleStartGame}
        >
          Start
        </button>
      </div>
    </div>
  );
}

function ResultsModal({ gameFinished, handleCloseResults, correctMatchesCount, pairs, sessionDuration, setSettingsOpen, setGameFinished, styles }) {
  if (!gameFinished) return null;
  return (
    <div className={styles.resultsOverlay}>
      <div className={styles.resultsTile}>
        <button className='modalCloseButton' onClick={handleCloseResults}>
          ×
        </button>
        <h3>Ergebnisse</h3>
        <p>
          Alle Paare gefunden: {correctMatchesCount} / {pairs.length}
        </p>
        <p>
          Dauer: {Math.floor(sessionDuration / 60)} Minuten {sessionDuration % 60} Sekunden
        </p>
        <button
          className={styles.startButton}
          onClick={() => {
            setSettingsOpen(true);
            setGameFinished(false);
          }}
        >
          Neue Runde
        </button>
      </div>
    </div>
  );
}

function AbbreviationsTermMatchingGameContent() {
  const navigate = useNavigate();
  const { abbreviationStatuses, flushChanges } = useAbbreviationsStatus();

  // Авторизація
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Туторіал
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("abbreviationsTermMatchingGameTutorialCompleted") !== "true"
  );

  // Налаштування гри
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [filterMode, setFilterMode] = useState("unlearned");

  // Категорії (якщо абревіатури мають categories)
  const allCategories = sortCategoriesWithAndereLast(
    Array.from(new Set(medicalAbbreviations.flatMap((a) => a.categories || [])))
  );
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  // Режим відображення
  const [displayMode, setDisplayMode] = useState("LatGerman");

  // Кількість абревіатур
  const [questionCount, setQuestionCount] = useState(10);

  // Ігровий стан
  const [pairs, setPairs] = useState([]);
  const [leftColumn, setLeftColumn] = useState([]);
  const [rightColumn, setRightColumn] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState({});
  const [wrongLeft, setWrongLeft] = useState(null);
  const [wrongRight, setWrongRight] = useState(null);

  // Пагінація
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  // Результати
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [correctMatchesCount, setCorrectMatchesCount] = useState(0);

  // Лічильник показів
  const [shownCounts, setShownCounts] = useState({});
  const [gameStarted, setGameStarted] = useState(false);

  /* ------------------- Підготовка гри ------------------- */
  const handleStartGame = () => {
    setGameStarted(true);
    setSettingsOpen(false);
    setGameFinished(false);
    setSessionDuration(0);
    setGameStartTime(Date.now());
    setPageIndex(0);
    setCorrectMatchesCount(0);
    // Використання утиліти
    const { pairs, leftColumn, rightColumn, newShownCounts } = initGameDataUtil({
      medicalAbbreviations,
      abbreviationStatuses,
      selectedCategory,
      filterMode,
      questionCount,
      displayMode,
      shownCounts,
    });
    setPairs(pairs);
    setLeftColumn(leftColumn);
    setRightColumn(rightColumn);
    setMatchedPairs({});
    setWrongLeft(null);
    setWrongRight(null);
    setShownCounts(newShownCounts);
  };

  // Підрахунок кількості сторінок
  const pageCount = Math.ceil(leftColumn.length / pageSize) || 1;
  const displayedLeft = leftColumn.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  const displayedRight = rightColumn.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  // Стан вибраних елементів
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  // Обробка кліку по лівій колонці
  const handleLeftSelect = (item) => {
    if (matchedPairs[item.id]) return;
    setSelectedLeft(item);
    // Якщо вже вибрано елемент справа, перевіряємо, чи це пара
    if (selectedRight && selectedRight.id === item.id) {
      doMatch(item.id);
    } else if (selectedRight && selectedRight.id !== item.id) {
      showWrong(item, selectedRight);
    }
  };

  // Обробка кліку по правій колонці
  const handleRightSelect = (item) => {
    if (matchedPairs[item.id]) return;
    setSelectedRight(item);
    // Якщо вже вибрано елемент зліва, перевіряємо, чи це пара
    if (selectedLeft && selectedLeft.id === item.id) {
      doMatch(item.id);
    } else if (selectedLeft && selectedLeft.id !== item.id) {
      showWrong(selectedLeft, item);
    }
  };

  // Якщо вгадали
  const doMatch = (id) => {
    setMatchedPairs((prev) => ({ ...prev, [id]: true }));
    setSelectedLeft(null);
    setSelectedRight(null);
    setCorrectMatchesCount((prev) => prev + 1);
  };

  // Якщо помилилися
  const showWrong = (leftItem, rightItem) => {
    setWrongLeft(leftItem.id);
    setWrongRight(rightItem.id);
    setSelectedLeft(null);
    setSelectedRight(null);
    setTimeout(() => {
      setWrongLeft(null);
      setWrongRight(null);
    }, 800);
  };

  // Перевірка, чи всі пари знайдено
  useEffect(() => {
    if (pairs.length > 0 && Object.keys(matchedPairs).length === pairs.length) {
      setGameFinished(true);
      const duration = Math.floor((Date.now() - gameStartTime) / 1000);
      setSessionDuration(duration);
    }
  }, [matchedPairs, pairs, gameStartTime]);

  // Зберігаємо зміни в контекст/Firebase
  useEffect(() => {
    if (gameFinished) {
      flushChanges();
    }
  }, [gameFinished, flushChanges]);

  // Пагінація
  const handleNextPage = () => {
    if (pageIndex < pageCount - 1) {
      setPageIndex((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  // Закриття вікна результатів
  const handleCloseResults = () => {
    setGameFinished(false);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Abkürzungen lernen – Term Matching Game</title>
        <meta property="og:title" content="Abkürzungen lernen – Term Matching Game" />
        <meta
          property="og:description"
          content="Interaktives Zuordnungsspiel zum Lernen medizinischer Abkürzungen!"
        />
        <meta property="og:image" content={matchingGameBg} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.electiveLanguageGame}>
        {/* Кнопка повернення */}
        <button className="main_menu_back" onClick={() => navigate("/abbreviations-learning")}>
          &#8592;
        </button>

        <SettingsModal
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
          filterMode={filterMode}
          setFilterMode={setFilterMode}
          filterModes={filterModes}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allCategories={allCategories}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
          displayModeOptions={displayModeOptions}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          questionCountOptions={questionCountOptions}
          requireAuth={requireAuth}
          handleStartGame={handleStartGame}
          styles={styles}
        />

        {/* Кнопка для туторіалу */}
        {settingsOpen && (
          <button
            data-tutorial="tutorialStartButton"
            className={styles.tutorialButton}
            onClick={() => setShowTutorial(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="#ededed"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="12" x2="12" y2="16" />
              <circle cx="12" cy="8" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}

        {/* Повідомлення, якщо немає питань */}
        {!settingsOpen && !gameFinished && pairs.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Abkürzungen verfügbar.</p>
            </div>
          </div>
        )}

        {/* Основна гра */}
        {!settingsOpen && !gameFinished && pairs.length > 0 && (
          <>
            <div className={styles.progress}>
              Seite {pageIndex + 1} / {pageCount} &nbsp;(
              {displayedLeft.length} Begriffe)
            </div>
            <GameBoard
              displayedLeft={displayedLeft}
              displayedRight={displayedRight}
              matchedPairs={matchedPairs}
              wrongLeft={wrongLeft}
              wrongRight={wrongRight}
              selectedLeft={selectedLeft}
              selectedRight={selectedRight}
              handleLeftSelect={handleLeftSelect}
              handleRightSelect={handleRightSelect}
              styles={styles}
            />

            {/* Пагінація */}
            <div className={styles.navigationContainer}>
              {pageIndex > 0 && (
                <button className={styles.navButton} onClick={handlePrevPage}>
                  <FaArrowLeft />
                </button>
              )}
              {pageIndex < pageCount - 1 && (
                <button className={styles.navButton} onClick={handleNextPage}>
                  <FaArrowRight />
                </button>
              )}
            </div>
          </>
        )}

        <ResultsModal
          gameFinished={gameFinished}
          handleCloseResults={handleCloseResults}
          correctMatchesCount={correctMatchesCount}
          pairs={pairs}
          sessionDuration={sessionDuration}
          setSettingsOpen={setSettingsOpen}
          setGameFinished={setGameFinished}
          styles={styles}
        />

        {/* Кнопка налаштувань (якщо не мобільний або якщо налаштування вже закриті) */}
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
      <AbbreviationsTermMatchingGameTutorial
        run={showTutorial}
        onFinish={() => {
          setShowTutorial(false);
          localStorage.setItem("abbreviationsTermMatchingGameTutorialCompleted", "true");
        }}
      />
    </MainLayout>
  );
}

// Експорт за замовчуванням
export default function AbbreviationsTermMatchingGame() {
  return (
    <AbbreviationsStatusProvider>
      <AbbreviationsTermMatchingGameContent />
    </AbbreviationsStatusProvider>
  );
}