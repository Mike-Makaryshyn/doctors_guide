import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import { TermStatusProvider } from "../../../../contexts/TermStatusContext";
import { useTermStatus } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
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

// Фільтри
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Кількість термінів
const questionCountOptions = [5, 10, 20, 30, 40, 50];

// Мапа мов (ключ "la" відповідає латинській)
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

// Скорочення для регіонів
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

// Допоміжна функція для отримання тексту терміна (якщо мова латинська – беремо з "lat")
const getTermText = (term, key) => {
  if (key === "la") {
    return term["lat"] || "";
  }
  return term[key] || "";
};

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function TermMatchingGameContent() {
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, flushChanges } = useTermStatus();

  // Авторизація
  const [user] = useAuthState(auth);
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
    localStorage.getItem("termMatchingGameTutorialCompleted") !== "true"
  );

  // Налаштування (модальне вікно)
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  // Language Swap – за замовчуванням латина ("la")
  const [isGermanLeft, setIsGermanLeft] = useState(true);
  const [electiveLang, setElectiveLang] = useState("la");

  // Визначення мов для колонок:
  // Якщо isGermanLeft true – ліва колонка: "de", права: electiveLang; інакше – навпаки.
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

  // Результати
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [correctMatchesCount, setCorrectMatchesCount] = useState(0);
  // Акумулятор для правильних відповідей (запам'ятовує id термінів, що були зіставлені)
  const [correctMatchIds, setCorrectMatchIds] = useState([]);

  // Лічильник показів
  const [shownCounts, setShownCounts] = useState({});

  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  /* ------------------- Підготовка гри ------------------- */
  const handleStartGame = () => {
    setSettingsOpen(false);
    setGameFinished(false);
    setSessionDuration(0);
    setGameStartTime(Date.now());
    setPageIndex(0);
    setCorrectMatchIds([]);
    initGameData();
  };

  const initGameData = () => {
    // Фільтрація термінів
    const filtered = medicalTerms.filter((term) => {
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

    // Сортування за кількістю показів
    filtered.sort((a, b) => {
      const cA = shownCounts[a.id] || 0;
      const cB = shownCounts[b.id] || 0;
      if (cA === cB) return Math.random() - 0.5;
      return cA - cB;
    });

    // Відбір термінів за questionCount
    const selected = filtered.slice(0, questionCount);

    // Оновлення лічильника показів
    const newShownCounts = { ...shownCounts };
    selected.forEach((term) => {
      newShownCounts[term.id] = (newShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(newShownCounts);

    // Формування пар: ліва колонка – текст за leftLang, права – текст за rightLang
    const newPairs = selected.map((term) => ({
      id: term.id,
      leftText: getTermText(term, leftLang),
      rightText: getTermText(term, rightLang),
      original: term,
    }));

    // Перемішування колонок
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

  // Обробка виборів
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

  // При правильному матчі – не оновлюємо Firebase миттєво, а акумулюємо id
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

  // Коли всі пари знайдені – завершуємо гру і відвантажуємо дані
  useEffect(() => {
    if (pairs.length > 0 && Object.keys(matchedPairs).length === pairs.length) {
      setGameFinished(true);
      const duration = Math.floor((Date.now() - gameStartTime) / 1000);
      setSessionDuration(duration);
    }
  }, [matchedPairs, pairs, gameStartTime]);

  // Після завершення гри викликаємо flushChanges, щоб відправити накопичені дані
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

  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  return (
    <MainLayout>
      <Helmet>
        <title>Term Matching Game – mit Latein als Standard</title>
      </Helmet>

      <div className={styles.electiveLanguageGame}>
        <button className="main_menu_back" onClick={() => navigate("/terminology-learning")}>
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
                <div className={styles.regionColumn} data-tutorial="regionSelect">
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setRegion(e.target.value);
                      }}
                    >
                      <option value="Alle">Alle</option>
                      {Array.from(new Set(medicalTerms.flatMap((t) => t.regions || []))).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
                      {Array.from(new Set(medicalTerms.flatMap((t) => t.categories || []))).map((cat) => (
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
                      {qc}
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
          <div className={styles.noQuestionsMessage}>
            <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
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
          Dauer: {Math.floor(sessionDuration / 60)} Minuten{" "}
          {sessionDuration % 60} Sekunden
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

export default function TermMatchingGame() {
  return (
    <TermStatusProvider>
      <TermMatchingGameContent />
    </TermStatusProvider>
  );
}