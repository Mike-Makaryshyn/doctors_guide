import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import { MedicationStatusProvider, useMedicationStatus } from "../../../../contexts/MedicationStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
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
  FaExchangeAlt,
} from "react-icons/fa";
import TermMatchingGameTutorial from "./TermMatchingGameTutorial";
import styles from "./TermMatchingGame.module.scss";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import matchingGameBg from "../../../../assets/medication-matching-game-bg.jpg";

// Допоміжна функція для сортування категорій: алфавітно, з "Andere" завжди останньою
const sortCategoriesWithAndereLast = (categories) => {
  let sorted = [...categories].sort((a, b) => a.localeCompare(b));
  if (sorted.includes("Andere")) {
    sorted = sorted.filter((cat) => cat !== "Andere");
    sorted.push("Andere");
  }
  return sorted;
};

// Опції вибору кількості термінів – доповнено варіантом "Alles"
const questionCountOptions = [10, 20, 40, 60, "all"];

// Мапа мов (ключ "la" – латинська)
const languageMap = {
  la: "Latein",
  de: "Deutsch",
  en: "Englisch",
  uk: "Ukrainisch",
  ru: "Russisch",
  tr: "Türkisch",
  ar: "Arabisch",
  fr: "Französisch",
  es: "Spanisch",
  pl: "Polnisch",
};

// Фільтр-моди (визначення змінної)
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Видалено скорочення регіонів, оскільки регіональний фільтр більше не потрібен

// Допоміжна функція для отримання тексту терміна
const getTermText = (term, key) => {
  if (key === "la") {
    return term["lat"] || "";
  }
  return term[key] || "";
};

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function MedicationTermMatchingGameContent() {
  const navigate = useNavigate();
  // З регіональним фільтром більше не працюємо – його видалено
  const { medicationStatuses, flushChanges } = useMedicationStatus();

  // Supabase Auth
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const loading = user === undefined; // treat “undefined” as loading
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Туторіал
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("termMatchingGameTutorialCompleted") !== "true"
  );

  // Налаштування гри
  const [settingsOpen, setSettingsOpen] = useState(true);
  // Видалено налаштування регіону – воно більше не використовується
  const [filterMode, setFilterMode] = useState("unlearned");
  // Отримання всіх категорій із даних і сортування їх за допомогою sortCategoriesWithAndereLast
  const allCategories = sortCategoriesWithAndereLast(
    Array.from(new Set(medications.flatMap((t) => t.categories || [])))
  );
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  // Мовний swap – за замовчуванням латина ("la")
  const [isGermanLeft, setIsGermanLeft] = useState(true);
  const [electiveLang, setElectiveLang] = useState("la");

  // Визначення мов для колонок
  const leftLang = isGermanLeft ? "de" : electiveLang;
  const rightLang = isGermanLeft ? electiveLang : "de";

  // Кількість термінів
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

  // Результати гри
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [correctMatchesCount, setCorrectMatchesCount] = useState(0);
  const [correctMatchIds, setCorrectMatchIds] = useState([]);

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
    setCorrectMatchIds([]);
    initGameData();
  };

  const initGameData = () => {
    // Фільтрація термінів – фільтруємо лише за категоріями та статусом
    let filtered = medications.filter((term) => {
      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);
      const status = medicationStatuses[term.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return matchesCategory;
    });

    // Сортування та відбір термінів: якщо вибрано "all" – використовуємо всі, інакше – обрізаємо
    filtered = filtered.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });
    if (questionCount !== "all") {
      filtered = filtered.slice(0, questionCount);
    }

    // Оновлення лічильника показів
    const newShownCounts = { ...shownCounts };
    filtered.forEach((term) => {
      newShownCounts[term.id] = (newShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(newShownCounts);

    // Формування пар
    const newPairs = filtered.map((term) => ({
      id: term.id,
      leftText: getTermText(term, leftLang),
      rightText: getTermText(term, rightLang),
      original: term,
    }));

    const shuffledLeft = shuffleArray(newPairs);
    const shuffledRight = shuffleArray(newPairs);

    setPairs(newPairs);
    setLeftColumn(shuffledLeft);
    setRightColumn(shuffledRight);
    setMatchedPairs({});
    setWrongLeft(null);
    setWrongRight(null);
    setCorrectMatchesCount(0);
  };

  const pageCount = Math.ceil(leftColumn.length / pageSize) || 1;
  const displayedLeft = leftColumn.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  const displayedRight = rightColumn.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  // Обробка вибору
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  const handleLeftSelect = (item) => {
    if (matchedPairs[item.id]) return;
    setSelectedLeft(item);
    if (selectedRight && selectedRight.id === item.id) {
      doMatch(item.id);
    } else if (selectedRight && selectedRight.id !== item.id) {
      showWrong(item, selectedRight);
    }
  };

  const handleRightSelect = (item) => {
    if (matchedPairs[item.id]) return;
    setSelectedRight(item);
    if (selectedLeft && selectedLeft.id === item.id) {
      doMatch(item.id);
    } else if (selectedLeft && selectedLeft.id !== item.id) {
      showWrong(selectedLeft, item);
    }
  };

  const doMatch = (id) => {
    setMatchedPairs((prev) => ({ ...prev, [id]: true }));
    setSelectedLeft(null);
    setSelectedRight(null);
    setCorrectMatchIds((prev) => [...prev, id]);
    setCorrectMatchesCount((prev) => prev + 1);
  };

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

  // Завершення гри при знаходженні всіх пар
  useEffect(() => {
    if (pairs.length > 0 && Object.keys(matchedPairs).length === pairs.length) {
      setGameFinished(true);
      const duration = Math.floor((Date.now() - gameStartTime) / 1000);
      setSessionDuration(duration);
    }
  }, [matchedPairs, pairs, gameStartTime]);

  useEffect(() => {
    if (gameFinished) {
      flushChanges();
    }
  }, [gameFinished, flushChanges]);

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

  const handleCloseResults = () => {
    setGameFinished(false);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Medikamente lernen – Term Matching Game</title>
        <meta property="og:title" content="Medikamente lernen – Term Matching Game" />
        <meta property="og:description" content="Lerne Medikamente mit einem interaktiven Zuordnungsspiel!" />
        <meta property="og:image" content={matchingGameBg} />
        <meta property="og:type" content="website" />
        {/* Метадані ABUS */}
        <meta name="abus" content="ABUS metadata for Term Matching Game" />
      </Helmet>

      <div className={styles.electiveLanguageGame}>
        <button className="main_menu_back" onClick={() => navigate("/medications-learning")}>
          &#8592;
        </button>

        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              <button className={styles.modalCloseButton} onClick={() => setSettingsOpen(false)}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
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
                    {/* Відображаємо категорію як текст або скорочення */}
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
              </div>

              {/* Language Swap */}
              <div className={styles.modalField}>
                <div className={styles.languageSwapContainer} data-tutorial="languageSwapContainer">
                  <div className={styles.languageCellFixed}>
                    {isGermanLeft ? "Deutsch" : (
                      <select
                        className={styles.languageSelect}
                        value={electiveLang}
                        onChange={(e) => setElectiveLang(e.target.value)}
                      >
                        {Object.entries(languageMap).map(([code, label]) =>
                          code !== "de" ? <option key={code} value={code}>{label}</option> : null
                        )}
                      </select>
                    )}
                  </div>
                  <button className={styles.swapButton} onClick={() => setIsGermanLeft((prev) => !prev)}>
                    <FaExchangeAlt className={styles.swapIcon} />
                  </button>
                  <div className={styles.languageCellFixed}>
                    {isGermanLeft ? (
                      <select
                        className={styles.languageSelect}
                        value={electiveLang}
                        onChange={(e) => setElectiveLang(e.target.value)}
                      >
                        {Object.entries(languageMap).map(([code, label]) =>
                          code !== "de" ? <option key={code} value={code}>{label}</option> : null
                        )}
                      </select>
                    ) : "Deutsch"}
                  </div>
                </div>
              </div>

              {/* Кількість термінів */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer} data-tutorial="questionCountContainer">
                  {questionCountOptions.map((qc) => (
                    <div
                      key={qc}
                      className={`${styles.questionCountIcon} ${questionCount === qc ? styles.selected : ""}`}
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

              <button className={styles.startButton} data-tutorial="startButton" onClick={handleStartGame}>
                Start
              </button>
            </div>
          </div>
        )}

        {/* Кнопка туторіалу */}
        {settingsOpen && (
          <button data-tutorial="tutorialStartButton" className={styles.tutorialButton} onClick={() => setShowTutorial(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#ededed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="12" x2="12" y2="16" />
              <circle cx="12" cy="8" r="0.5" fill="#ededed" />
            </svg>
          </button>
        )}

        {/* Повідомлення, якщо термінів немає */}
        {!settingsOpen && !gameFinished && pairs.length === 0 && (
          <div className={styles.noQuestionsOverlay}>
            <div className={styles.noQuestionsMessage}>
              <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
            </div>
          </div>
        )}

        {/* Гра */}
        {!settingsOpen && !gameFinished && pairs.length > 0 && (
          <>
            <div className={styles.progress}>
              Seite {pageIndex + 1} / {pageCount} &nbsp;({displayedLeft.length} Begriffe)
            </div>

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

        {/* Результати */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>
            <div className={styles.resultsTile}>
              <button className={styles.modalCloseButton} onClick={handleCloseResults}>
                ×
              </button>
              <h3>Ergebnisse</h3>
              <p>Alle Paare gefunden: {correctMatchesCount} / {pairs.length}</p>
              <p>
                Dauer: {Math.floor(sessionDuration / 60)} Minuten {sessionDuration % 60} Sekunden
              </p>
              <button className={styles.startButton} onClick={() => {
                setSettingsOpen(true);
                setGameFinished(false);
              }}>
                Neue Runde
              </button>
            </div>
          </div>
        )}

        {/* Кнопка налаштувань */}
        {(!settingsOpen || window.innerWidth > 768) && !gameFinished && (
          <div className={styles.bottomRightSettings}>
            <button className={styles.settingsButton} onClick={() => {
              if (requireAuth()) return;
              setSettingsOpen(true);
            }}>
              <FaCog />
            </button>
          </div>
        )}
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <TermMatchingGameTutorial run={showTutorial} onFinish={() => setShowTutorial(false)} />
    </MainLayout>
  );
}

export default function MedicationTermMatchingGame() {
  return (
    <MedicationStatusProvider>
      <MedicationTermMatchingGameContent />
    </MedicationStatusProvider>
  );
}