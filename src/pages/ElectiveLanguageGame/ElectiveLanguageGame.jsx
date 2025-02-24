import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import { TermStatusProvider } from "../../contexts/TermStatusContext";
import styles from "./ElectiveLanguageGame.module.scss";
import {
  FaCog,
  FaPlay,
  FaPause,
  FaCheck,
  FaList,
  FaPen,
  FaArrowLeft,
  FaArrowRight,
  FaExchangeAlt
} from "react-icons/fa";
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { Helmet } from "react-helmet";

// Firebase Auth Imports für nicht angemeldete Nutzer
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import AuthModal from "../AuthPage/AuthModal";

// Abkürzungen für Regionen
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

const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Об'єкт для відображення повних назв мов
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

// Об'єкт для коротких назв (більше не використовується в новому варіанті)
const shortLangMap = {
  de: "DE",
  en: "EN",
  uk: "UA",
  ru: "RU",
  tr: "TR",
  ar: "AR",
  fr: "FR",
  es: "ES",
  pl: "PL",
};

const ElectiveLanguageGame = () => {
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage, languages } = useGetGlobalInfo();
  const { termStatuses, toggleStatus } = useTermStatus();

  // Firebase Auth State
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Функція перевірки автентифікації
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // -----------------------
  //    Налаштування гри
  // -----------------------
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [electiveLang, setElectiveLang] = useState(
    selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "en"
  );
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [questionCount, setQuestionCount] = useState(20);

  // NEU: Мовний напрямок (наприклад, "de->electiveLang" або "electiveLang->de")
  const [languageDirection, setLanguageDirection] = useState(`de->${electiveLang}`);
  // Деструктуризація для отримання sourceLang та targetLang
  const [sourceLang, targetLang] = languageDirection.split("->");

  // -------------
  //   Статус гри
  // -------------
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  const [correctCounts, setCorrectCounts] = useState({});
  const [shownCounts, setShownCounts] = useState({});

  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);

  // ------------------------------
  //   Синхронізація з глобальними налаштуваннями
  // ------------------------------
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  useEffect(() => {
    setElectiveLang(
      selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "en"
    );
  }, [selectedLanguage]);

  // Мовні опції з глобальних налаштувань
  const localLangOptions =
    (languages[selectedLanguage] && languages[selectedLanguage].options) ||
    languages["de"].options;

  // Фільтрація для виключення "de" з вибору
  const filteredLangOptions = localLangOptions.filter((opt) => opt.value !== "de");

  // ----------------------------------
  //   Генерація / завантаження питань
  // ----------------------------------
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" ||
        (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id] || "unlearned";

      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
        return false;
      return matchesRegion && matchesCategory;
    });

    gefilterteBegriffe.sort((a, b) => {
      const countA = shownCounts[a.id] || 0;
      const countB = shownCounts[b.id] || 0;
      if (countA === countB) return Math.random() - 0.5;
      return countA - countB;
    });

    const ausgewählteBegriffe =
      questionCount === "all" ? gefilterteBegriffe : gefilterteBegriffe.slice(0, questionCount);

    const neueShownCounts = { ...shownCounts };
    ausgewählteBegriffe.forEach((term) => {
      neueShownCounts[term.id] = (neueShownCounts[term.id] || 0) + 1;
    });
    setShownCounts(neueShownCounts);

    const fragenDaten = ausgewählteBegriffe.map((term) => {
      const frageText =
        languageDirection === "de->electiveLang" ? term.de : term[electiveLang];
      const richtigeAntwort =
        languageDirection === "de->electiveLang" ? term[electiveLang] : term.de;

      const falscheAntworten = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) =>
          languageDirection === "de->electiveLang" ? t[electiveLang] : t.de
        );

      const optionen = [...falscheAntworten, richtigeAntwort].sort(
        () => Math.random() - 0.5
      );

      return {
        id: term.id,
        frage: frageText,
        richtigeAntwort,
        optionen,
        term,
      };
    });

    setQuestions(fragenDaten);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

  useEffect(() => {
    if (!settingsOpen) {
      loadQuestions();
      setGameFinished(false);
      setGameStartTime(Date.now());
      setCorrectAnswerCount(0);
      setIncorrectAnswerCount(0);
      setCorrectCounts({});
    }
  }, [allowEdit, settingsOpen]);

  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
    setGameStartTime(Date.now());
    setGameFinished(false);
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
    setCorrectCounts({});
  };

  const finishGame = () => {
    if (!questionsCompleted[currentIndex]) {
      alert("Bitte beantworten Sie die aktuelle Frage!");
      return;
    }
    const dauer = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dauer);
    setGameFinished(true);
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { richtigeAntwort, id } = questions[currentIndex];
    const qIndex = currentIndex;
    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      if (option === richtigeAntwort) {
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
        toggleStatus(questions[qIndex].id, "learned");
      } else {
        setWrongSelectionsEdit((prev) => {
          const alteListe = prev[qIndex] || [];
          if (alteListe.includes(option)) return prev;
          return { ...prev, [qIndex]: [...alteListe, option] };
        });
      }
    } else {
      setAnswersNoEdit((prev) => ({ ...prev, [qIndex]: option }));
      setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
      if (option === richtigeAntwort) {
        setCorrectAnswerCount((prev) => prev + 1);
        setCorrectCounts((prev) => {
          const neuerZähler = (prev[id] || 0) + 1;
          if (neuerZähler >= 5 && (termStatuses[id] || "unlearned") !== "learned") {
            toggleStatus(id, "learned");
          }
          return { ...prev, [id]: neuerZähler };
        });
      } else {
        setIncorrectAnswerCount((prev) => prev + 1);
      }
    }
  };

  const handleNavigation = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "next") {
      if (!questionsCompleted[currentIndex]) {
        alert("Bitte beantworten Sie die aktuelle Frage!");
        return;
      }
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  const berechneKategorieFehler = () => {
    const fehler = {};
    questions.forEach((frage, index) => {
      if (questionsCompleted[index] && answersNoEdit[index] !== frage.richtigeAntwort) {
        const term = frage.term;
        (term.categories || []).forEach((kategorie) => {
          fehler[kategorie] = (fehler[kategorie] || 0) + 1;
        });
      }
    });
    return fehler;
  };

  const ErgebnisseAnzeigen = () => {
    const kategorieFehler = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        <button className={styles.modalCloseButton} onClick={() => setGameFinished(false)}>
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>Richtige Antworten: {correctAnswerCount} von {questions.length}</p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>Dauer: {sessionDuration} Sekunden</p>
        {Object.keys(kategorieFehler).length > 0 && (
          <div>
            <h4>Fehler in den Kategorien:</h4>
            <ul>
              {Object.entries(kategorieFehler).map(([kategorie, anzahl]) => (
                <li key={kategorie}>
                  {kategorie}: {anzahl} Fehler
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className={styles.startButton} onClick={handleStart}>
          Neues Spiel starten
        </button>
      </div>
    );
  };

  const aktuelleFrage = questions[currentIndex];
  const qIndex = currentIndex;
  const frageIstAbgeschlossen = questionsCompleted[qIndex] || false;

  return (
    <MainLayout>
      <Helmet>
        <title>Fachbegriffe lernen – Optimal auf die Fachsprachenprüfung vorbereiten</title>
        <meta
          name="description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen und unterstützt Sie optimal bei der Vorbereitung auf die Fachsprachenprüfung. Erweitern Sie Ihr Fachwissen und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta
          name="keywords"
          content="Fachbegriffe, Fachsprachenprüfung, Medizin, Terminologie, Lernen, Fachsprache"
        />
        <meta property="og:title" content="Fachbegriffe lernen – Optimal auf die Fachsprachenprüfung vorbereiten" />
        <meta
          property="og:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen und unterstützt Sie optimal bei der Vorbereitung auf die Fachsprachenprüfung. Erweitern Sie Ihr Fachwissen und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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

              {/* Region / Filter / Kategorie / Bearbeiten */}
              <div className={styles.row}>
                <div className={styles.regionColumn}>
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
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.regions || []))).map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.filterColumn}>
                  <label className={styles.fieldLabel}>Filter</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.filterCell}>
                      {filterModes.find((m) => m.value === filterMode)?.icon}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={filterMode}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setFilterMode(e.target.value);
                      }}
                    >
                      {filterModes.map((mode) => (
                        <option key={mode.value} value={mode.value}>
                          {mode.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.categoryColumn}>
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.categoryCell}>
                      {/* Hier kann ein Kategorie-Icon eingebunden werden */}
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
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.categories || []))).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.editColumn}>
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${allowEdit ? styles.selectedEdit : ""}`}
                    onClick={() => {
                      if (requireAuth()) return;
                      setAllowEdit(!allowEdit);
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>

              {/* NEU: Об'єднаний контейнер для мов з повними назвами */}
              <div className={styles.modalField}>
                <div className={styles.languageSwapContainer}>
                  <div className={styles.languageCell}>
                    {languageMap[sourceLang] || sourceLang}
                  </div>

                  <button
                    className={styles.swapButton}
                    onClick={() => setLanguageDirection(prev => {
                      const [from, to] = prev.split("->");
                      return `${to}->${from}`;
                    })}
                  >
                    <FaExchangeAlt className={styles.swapIcon} />
                  </button>

                  <div className={styles.languageCell}>
                    {languageMap[targetLang] || targetLang}
                  </div>
                </div>
              </div>

              {/* Frageanzahl-Kacheln */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer}>
                  {questionCountOptions.map((countOption) => (
                    <div
                      key={countOption}
                      className={`${styles.questionCountIcon} ${
                        questionCount === countOption ? styles.selected : ""
                      }`}
                      onClick={() => {
                        if (requireAuth()) return;
                        setQuestionCount(countOption);
                      }}
                    >
                      {countOption === "all" ? "Alles" : countOption}
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

        {/* Spielansicht */}
        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progress}>
              Frage {currentIndex + 1} von {questions.length}
            </div>
            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                <h2>{aktuelleFrage?.frage}</h2>
                <div className={styles.optionsContainer}>
                  {aktuelleFrage?.optionen.map((option, idx) => {
                    const { richtigeAntwort } = aktuelleFrage;
                    const isCompleted = frageIstAbgeschlossen;
                    if (!allowEdit) {
                      const chosenAnswer = answersNoEdit[qIndex] || null;
                      let isWrong = false;
                      let isCorrect = false;
                      if (isCompleted) {
                        if (option === richtigeAntwort) isCorrect = true;
                        if (chosenAnswer === option && option !== richtigeAntwort) isWrong = true;
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${isCorrect ? styles.correct : ""} ${isWrong ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    } else {
                      const wrongAnswersArr = wrongSelectionsEdit[qIndex] || [];
                      let isWrongEdit = wrongAnswersArr.includes(option);
                      let isCorrectEdit = isCompleted && option === richtigeAntwort;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${isCorrectEdit ? styles.correct : ""} ${isWrongEdit ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    }
                  })}
                </div>
                <div className={styles.navigationContainer}>
                  {currentIndex > 0 && (
                    <button className={styles.navButton} onClick={() => handleNavigation("prev")}>
                      <FaArrowLeft />
                    </button>
                  )}
                  {currentIndex < questions.length - 1 ? (
                    <button
                      className={styles.navButton}
                      onClick={() => {
                        if (!questionsCompleted[currentIndex]) {
                          alert("Bitte beantworten Sie die aktuelle Frage!");
                        } else {
                          handleNavigation("next");
                        }
                      }}
                    >
                      <FaArrowRight />
                    </button>
                  ) : (
                    <button
                      className={styles.navButton}
                      onClick={() => {
                        if (!questionsCompleted[currentIndex]) {
                          alert("Bitte beantworten Sie die aktuelle Frage!");
                        } else {
                          finishGame();
                        }
                      }}
                    >
                      Spiel beenden
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {gameFinished && (
          <div className={styles.resultsOverlay}>
            <div className={styles.resultsTile}>
              <button className={styles.modalCloseButton} onClick={() => setGameFinished(false)}>
                ×
              </button>
              <h3>Spielergebnisse</h3>
              <p>Richtige Antworten: {correctAnswerCount} von {questions.length}</p>
              <p>Falsche Antworten: {incorrectAnswerCount}</p>
              <p>Dauer: {sessionDuration} Sekunden</p>
              <button className={styles.startButton} onClick={handleStart}>
                Neues Spiel starten
              </button>
            </div>
          </div>
        )}

        {(!settingsOpen || window.innerWidth > 768) && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => {
                if (requireAuth()) return;
                setSettingsOpen(true);
                setGameFinished(false);
              }}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </MainLayout>
  );
};

const ElectiveLanguageGameWithProvider = () => (
  <TermStatusProvider>
    <ElectiveLanguageGame />
  </TermStatusProvider>
);

export default ElectiveLanguageGameWithProvider;