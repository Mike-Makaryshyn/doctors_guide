// ================== TermMatchingGame.jsx ==================
// Шлях: doctors_guide/src/games/TerminologyGame/pages/TermMatchingGame/TermMatchingGame.jsx

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

// Icons
import {
  FaCog,
  FaList,
  FaCheck,
  FaPlay,
  FaPause,
  FaPen,
  FaExchangeAlt,
} from "react-icons/fa";

import TermMatchingGameTutorial from "./TermMatchingGameTutorial";
import styles from "./TermMatchingGame.module.scss";
import { categoryIcons } from "../../../../constants/CategoryIcons";

// ----------- Фільтри -----------
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const questionCountOptions = [5, 10, 20, 40, 60, 100, "all"];

// Мапа мов
const languageMap = {
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

function TermMatchingGameContent() {
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const { termStatuses, toggleStatus, recordCorrectAnswer, flushChanges } = useTermStatus();

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

  // Стан туторіала
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("termMatchingGameTutorialCompleted") !== "true"
  );

  // Налаштування
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [questionCount, setQuestionCount] = useState(10);
  const [allowEdit, setAllowEdit] = useState(false);

  // Мови
  const [isGermanLeft, setIsGermanLeft] = useState(true);
  const [electiveLang, setElectiveLang] = useState(
    selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "en"
  );

  // sourceLang / targetLang
  const sourceLang = isGermanLeft ? "de" : electiveLang;
  const targetLang = isGermanLeft ? electiveLang : "de";

  // Пари для матчингу
  const [pairs, setPairs] = useState([]);
  const [leftColumn, setLeftColumn] = useState([]);
  const [rightColumn, setRightColumn] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  // Короткочасне підсвічування помилки
  const [wrongLeft, setWrongLeft] = useState(null);
  const [wrongRight, setWrongRight] = useState(null);

  // Ігровий стан
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [correctMatchesCount, setCorrectMatchesCount] = useState(0);

  // Покази термінів
  const [shownCounts, setShownCounts] = useState({});

  // Ефект: оновити electiveLang, якщо user змінив глобальну мову
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  useEffect(() => {
    setElectiveLang(
      selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "en"
    );
  }, [selectedLanguage]);

  // Натискання "Старт" в налаштуваннях
  const handleStartGame = () => {
    setSettingsOpen(false);
    initGameData();
    setGameFinished(false);
    setGameStartTime(Date.now());
  };

  // Головна функція ініціалізації гри
  const initGameData = () => {
    // 1) Фільтрація
    const filtered = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);

      const status = termStatuses[term.id]?.status || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused")) {
        return false;
      }
      return matchesRegion && matchesCategory;
    });

    // 2) Сортування за показами
    filtered.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    // 3) Відрізаємо за questionCount
    const selected =
      questionCount === "all" ? filtered : filtered.slice(0, questionCount);

    // Оновлюємо shownCounts
    const newShownCounts = { ...shownCounts };
    selected.forEach((t) => {
      newShownCounts[t.id] = (newShownCounts[t.id] || 0) + 1;
    });
    setShownCounts(newShownCounts);

    // 4) Формуємо пари: зліва sourceLang, справа targetLang
    const newPairs = selected.map((term) => {
      return {
        id: term.id,
        leftText: term[sourceLang] || "",
        rightText: term[targetLang] || "",
        original: term,
      };
    });

    // Перемішуємо
    const shuffledLeft = [...newPairs].sort(() => Math.random() - 0.5);
    const shuffledRight = [...newPairs].sort(() => Math.random() - 0.5);

    setPairs(newPairs);
    setLeftColumn(shuffledLeft);
    setRightColumn(shuffledRight);

    // Скидаємо стан
    setMatchedPairs({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongLeft(null);
    setWrongRight(null);
    setCorrectMatchesCount(0);
  };

  // Клік ліворуч
  const handleLeftSelect = (item) => {
    if (matchedPairs[item.id]) return; // вже знайдено
    setSelectedLeft(item);

    // Якщо вже вибрали правий
    if (selectedRight && selectedRight.id === item.id) {
      doMatch(item.id);
    } else if (selectedRight && selectedRight.id !== item.id) {
      // Неправильна пара
      showWrong(item, selectedRight);
    }
  };

  // Клік праворуч
  const handleRightSelect = (item) => {
    if (matchedPairs[item.id]) return; // вже знайдено
    setSelectedRight(item);

    // Якщо вже вибрали лівий
    if (selectedLeft && selectedLeft.id === item.id) {
      doMatch(item.id);
    } else if (selectedLeft && selectedLeft.id !== item.id) {
      // Неправильна пара
      showWrong(selectedLeft, item);
    }
  };

  // Обробка правильного матчу
  const doMatch = (id) => {
    setMatchedPairs((prev) => ({ ...prev, [id]: true }));
    setSelectedLeft(null);
    setSelectedRight(null);

    if (!allowEdit) {
      // Записуємо в контекст
      recordCorrectAnswer(id);
    } else {
      // Якщо edit => помічаємо як learned відразу
      toggleStatus(id, "learned");
    }
    setCorrectMatchesCount((prev) => prev + 1);
  };

  // Показуємо wrong (червоне підсвічування) на 1 секунду
  const showWrong = (leftItem, rightItem) => {
    setWrongLeft(leftItem.id);
    setWrongRight(rightItem.id);

    // Скидаємо вибір
    setSelectedLeft(null);
    setSelectedRight(null);

    setTimeout(() => {
      setWrongLeft(null);
      setWrongRight(null);
    }, 1000);
  };

  // Перевірка завершення гри
  useEffect(() => {
    if (pairs.length > 0 && Object.keys(matchedPairs).length === pairs.length) {
      setGameFinished(true);
      const duration = Math.floor((Date.now() - gameStartTime) / 1000);
      setSessionDuration(duration);

      if (!allowEdit) flushChanges();
    }
  }, [matchedPairs, pairs, gameStartTime, allowEdit, flushChanges]);

  // Закінчити гру вручну, якщо потрібно
  const finishGameEarly = () => {
    setGameFinished(true);
    const duration = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(duration);
    if (!allowEdit) flushChanges();
  };

  // Допоміжна функція для відображення скорочення регіону
  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  return (
    <MainLayout>
      <Helmet>
        <title>Term Matching Game – Medizinische Begriffe verbinden</title>
        <meta
          name="description"
          content="Verbinde medizinische Fachbegriffe in zwei Spalten nach Region, Kategorie und Filter. Wähle Deutsch oder andere Sprachen."
        />
      </Helmet>

      <div className={styles.electiveLanguageGame}>
        <button
          className="main_menu_back"
          onClick={() => navigate("/terminology-learning")}
        >
          &#8592;
        </button>

        {/* Модальне вікно налаштувань */}
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
              <h2 className={styles.modalTitle}>Einstellungen</h2>

              {/* --- Region, Filter, Kategorie, EditMode --- */}
              <div className={styles.row}>
                {/* Region */}
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

                {/* Edit */}
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

              {/* --- Вибір мови (як у Elective) --- */}
              <div className={styles.modalField}>
                <div
                  className={styles.languageSwapContainer}
                  data-tutorial="languageSwapContainer"
                >
                  {/* Якщо isGermanLeft=true, ліворуч "Deutsch"; праворуч - select. Якщо false - навпаки */}
                  <div className={styles.languageCellFixed}>
                    {isGermanLeft ? (
                      "Deutsch"
                    ) : (
                      <select
                        className={styles.languageSelect}
                        value={electiveLang}
                        onChange={(e) => setElectiveLang(e.target.value)}
                      >
                        {Object.entries(languageMap).map(
                          ([langCode, langLabel]) =>
                            langCode !== "de" && (
                              <option key={langCode} value={langCode}>
                                {langLabel}
                              </option>
                            )
                        )}
                      </select>
                    )}
                  </div>

                  {/* swap button */}
                  <button
                    className={styles.swapButton}
                    onClick={() => setIsGermanLeft((prev) => !prev)}
                  >
                    <FaExchangeAlt />
                  </button>

                  <div className={styles.languageCellFixed}>
                    {isGermanLeft ? (
                      <select
                        className={styles.languageSelect}
                        value={electiveLang}
                        onChange={(e) => setElectiveLang(e.target.value)}
                      >
                        {Object.entries(languageMap).map(
                          ([langCode, langLabel]) =>
                            langCode !== "de" && (
                              <option key={langCode} value={langCode}>
                                {langLabel}
                              </option>
                            )
                        )}
                      </select>
                    ) : (
                      "Deutsch"
                    )}
                  </div>
                </div>
              </div>

              {/* --- К-сть питань --- */}
              <div className={styles.modalField}>
                <div
                  className={styles.questionCountContainer}
                  data-tutorial="questionCountContainer"
                >
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

              {/* --- Кнопка START --- */}
              <button
                className={styles.startButton}
                data-tutorial="startButton"
                onClick={handleStartGame}
              >
                Start
              </button>
            </div>
          </div>
        )}

        {/* Кнопка для запуску туторіалу */}
        {settingsOpen && (
          <button
            className={styles.tutorialButton}
            data-tutorial="tutorialStartButton"
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

        {/* Якщо немає термінів (фільтр занадто суворий) */}
        {!settingsOpen && !gameFinished && pairs.length === 0 && (
          <div className={styles.noQuestionsMessage}>
            <p>Für diese Einstellungen sind keine Begriffe vorhanden.</p>
          </div>
        )}

        {/* Ігровий інтерфейс (якщо є пари і гра не завершена) */}
        {!settingsOpen && !gameFinished && pairs.length > 0 && (
          <div className={styles.gameContainer}>
            {/* Ліва колонка */}
            <div className={styles.column} data-tutorial="termsColumn">
              {leftColumn.map((item) => {
                const matched = matchedPairs[item.id] ? styles.correct : "";
                const selected = selectedLeft?.id === item.id ? styles.selected : "";
                const isWrong = item.id === wrongLeft ? styles.wrong : "";

                return (
                  <div
                    key={item.id}
                    className={`${styles.answerTile} ${matched} ${selected} ${isWrong}`}
                    onClick={() => {
                      if (!matchedPairs[item.id]) {
                        handleLeftSelect(item);
                      }
                    }}
                  >
                    {item.leftText}
                  </div>
                );
              })}
            </div>

            {/* Права колонка */}
            <div className={styles.column} data-tutorial="definitionsColumn">
              {rightColumn.map((item) => {
                const matched = matchedPairs[item.id] ? styles.correct : "";
                const selected = selectedRight?.id === item.id ? styles.selected : "";
                const isWrong = item.id === wrongRight ? styles.wrong : "";

                return (
                  <div
                    key={item.id}
                    className={`${styles.answerTile} ${matched} ${selected} ${isWrong}`}
                    onClick={() => {
                      if (!matchedPairs[item.id]) {
                        handleRightSelect(item);
                      }
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
              <button
                className={styles.modalCloseButton}
                onClick={() => setGameFinished(false)}
              >
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
                  setSettingsOpen(true);
                  setGameFinished(false);
                }}
              >
                Neue Runde
              </button>
            </div>
          </div>
        )}

        {/* Кнопка "Налаштування" (праворуч внизу), якщо вже закрили модалку */}
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

      {/* Modal Авторизації */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Туторіал */}
      <TermMatchingGameTutorial run={showTutorial} onFinish={() => setShowTutorial(false)} />
    </MainLayout>
  );
}

// Обгортка в TermStatusProvider (як ElectiveLanguageGame)
export default function TermMatchingGame() {
  return (
    <TermStatusProvider>
      <TermMatchingGameContent />
    </TermStatusProvider>
  );
}