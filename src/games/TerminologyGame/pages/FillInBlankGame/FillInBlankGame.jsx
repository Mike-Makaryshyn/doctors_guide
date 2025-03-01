import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./FillInBlankGame.module.scss";
import {
  FaCog,
  FaArrowLeft,
  FaArrowRight,
  FaPen,
  FaList,
  FaCheck,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { useTermStatus, TermStatusProvider } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import FillInBlankGameTutorial from "./FillInBlankGameTutorial";
import fillInBlankBg from "../../../../assets/fill-in-blank-bg.jpg";

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

const questionCountOptions = [10, 20, 40, 60, 100, 200, "all"];

const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

const FillInBlankGameContent = () => {
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, toggleStatus, flushChanges, recordCorrectAnswer } = useTermStatus();

  // Firebase Auth логіка
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Логіка туторіалу
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("fillInBlankGameTutorialCompleted") !== "true"
  );

  // Стан налаштувань гри
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [questionCount, setQuestionCount] = useState(20);
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");

  // Стан гри
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});
  const [correctCounts, setCorrectCounts] = useState({});
  const [shownCounts, setShownCounts] = useState({});

  // Результати гри
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);

  // Новий стейт для відслідковування, чи почата гра
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  // Завантаження питань
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";
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

    // Формуємо питання з реченнями, що містять {BLANK}
    const fragenDaten = ausgewählteBegriffe.map((term) => {
      const correctAnswer = term.answer;
      const wrongOptions = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => t.de);
      const options = [...wrongOptions, correctAnswer].sort(() => Math.random() - 0.5);
      return {
        id: term.id,
        sentence: term.sentence,
        answer: correctAnswer,
        options,
        term,
      };
    });

    setQuestions(fragenDaten);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
    setCorrectCounts({});
    setGameFinished(false);
    setGameStartTime(Date.now());
  };

  // Видалено useEffect, який спрацьовував при зміні settingsOpen і перезавантажував гру

  const handleStart = () => {
    setGameStarted(true);
    setSettingsOpen(false);
    loadQuestions();
    setGameStartTime(Date.now());
    setGameFinished(false);
    setCorrectAnswerCount(0);
    setIncorrectAnswerCount(0);
  };

  const finishGame = () => {
    if (!questionsCompleted[currentIndex]) {
      alert("Bitte beantworten Sie die aktuelle Frage!");
      return;
    }
    const dauer = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(dauer);
    setGameFinished(true);
    if (!allowEdit) {
      flushChanges();
    }
  };

  const renderSentence = (sentence) => {
    const parts = sentence.split("{BLANK}");
    let blankTileClass = styles.blankTile;
    let blankTileText = "_____";
    const qIndex = currentIndex;
    const isCompleted = questionsCompleted[qIndex];

    if (isCompleted) {
      const chosen = answersNoEdit[qIndex] || "";
      if (chosen) {
        blankTileText = chosen;
        if (chosen === questions[qIndex].answer) {
          blankTileClass += " " + styles.correct;
        } else {
          blankTileClass += " " + styles.wrong;
        }
      }
    }
    return (
      <div className={styles.sentenceBox}>
        {parts[0]}
        <span className={blankTileClass}>{blankTileText}</span>
        {parts[1]}
      </div>
    );
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const { answer: richtigeAntwort, id } = questions[currentIndex];
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
        recordCorrectAnswer(id);
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
      if (questionsCompleted[index] && answersNoEdit[index] !== frage.answer) {
        (frage.term.categories || []).forEach((kategorie) => {
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
        {/* Кнопка закриття результатного модального вікна */}
        <button
          className={styles.modalCloseButton}
          onClick={() => setGameFinished(false)}
        >
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>
          Richtige Antworten: {correctAnswerCount} von {questions.length}
        </p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>
          Dauer: {Math.floor(sessionDuration / 60)} Minuten{" "}
          {sessionDuration % 60} Sekunden
        </p>
        {Object.keys(berechneKategorieFehler()).length > 0 && (
          <div>
            <h4>Fehler in den Kategorien:</h4>
            <ul>
              {Object.entries(berechneKategorieFehler()).map(([kategorie, anzahl]) => (
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

  // Функція для простого закриття модального вікна налаштувань
  const closeSettings = () => {
    if (!gameStarted) {
      setSettingsOpen(false);
    } else {
      setSettingsOpen(false);
    }
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Fachbegriffe lernen – Fill in the Blank Game</title>
        <meta
          name="description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen im Fill in the Blank Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta
          name="keywords"
          content="Fachbegriffe, Fachsprachenprüfung, Fill in the Blank, Medizin, Terminologie, Lernen, Fachsprache"
        />
        <meta property="og:title" content="Fachbegriffe lernen – Fill in the Blank Game" />
        <meta
          name="og:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen im Fill in the Blank Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta property="og:image" content={fillInBlankBg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fachbegriffe lernen – Fill in the Blank Game" />
        <meta
          name="twitter:description"
          content="Diese Seite dient dem Erlernen von Fachbegriffen im Fill in the Blank Game. Bereiten Sie sich optimal auf die Fachsprachenprüfung vor und verbessern Sie Ihre Sprachkompetenz."
        />
        <meta name="twitter:image" content={fillInBlankBg} />
      </Helmet>

      <div className={styles.fillInBlankGame}>
        <button className="main_menu_back" onClick={() => navigate("/terminology-learning")}>
          &#8592;
        </button>

        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              {/* Використовуємо closeSettings для простого закриття модального вікна */}
              <button className={styles.modalCloseButton} onClick={closeSettings}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper} data-tutorial="regionSelect">
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
                <div className={styles.filterColumn} data-tutorial="filterColumn">
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
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.categories || []))).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.editColumn} data-tutorial="editToggleButton">
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${styles.myBearByteButton} ${
                      allowEdit ? styles.selectedEdit : ""
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

              <div className={styles.modalField}>
                <div className={styles.displayModeContainer} data-tutorial="displayModeContainer">
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

              <div className={styles.modalField}>
                <div className={styles.questionCountContainer} data-tutorial="questionCountContainer">
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

              <button className={styles.startButton} data-tutorial="startButton" onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        )}

        {settingsOpen && (
          <div className={styles.bottomRightTutorial}>
            <button
              data-tutorial="tutorialStartButton"
              className={styles.tutorialButton}
              onClick={() => setShowTutorial(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
                stroke="#ededed"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="#ededed" fill="none" />
                <line x1="12" y1="12" x2="12" y2="15.5" stroke="#ededed" strokeWidth="3" />
                <circle cx="12" cy="7" r="0.5" fill="#ededed" />
              </svg>
            </button>
          </div>
        )}

        {!settingsOpen && !gameFinished && questions.length === 0 && (
            <div className={styles.noQuestionsOverlay}>
          <div className={styles.noQuestionsMessage}>
            <p>Für diesen Filter sind zurzeit keine Begriffe verfügbar.</p>
          </div>
          </div>
        )}

        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>
                Frage {currentIndex + 1} von {questions.length}
              </div>
            </div>

            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                {aktuelleFrage?.sentence.includes("{BLANK}")
                  ? renderSentence(aktuelleFrage.sentence)
                  : aktuelleFrage?.sentence}
                <div className={styles.optionsContainer}>
                  {aktuelleFrage?.options.map((option, idx) => {
                    let btnClass = styles.answerTile;
                    if (questionsCompleted[currentIndex]) {
                      if (option === aktuelleFrage.answer)
                        btnClass += " " + styles.correct;
                      if (option === selectedAnswer && option !== aktuelleFrage.answer)
                        btnClass += " " + styles.wrong;
                    }
                    return (
                      <button
                        key={idx}
                        className={btnClass}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        {option}
                      </button>
                    );
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
          <div className={styles.resultsOverlay}>{ErgebnisseAnzeigen()}</div>
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
      {showTutorial && (
        <FillInBlankGameTutorial run={showTutorial} onFinish={() => setShowTutorial(false)} />
      )}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </MainLayout>
  );
};

const FillInBlankGame = () => {
  return (
    <TermStatusProvider>
      <FillInBlankGameContent />
    </TermStatusProvider>
  );
};

export default FillInBlankGame;