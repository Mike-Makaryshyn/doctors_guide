import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
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
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../constants/CategoryIcons";

// Абревіатури для регіонів
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

const FillInBlankGame = () => {
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo();
  const { termStatuses, toggleStatus } = useTermStatus();

  // Стан налаштувань гри
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  // displayMode прибрано, оскільки не потрібен
  const [questionCount, setQuestionCount] = useState(20);
  const [allowEdit, setAllowEdit] = useState(false);

  // Стан гри
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Важлива змінна selectedAnswer
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

  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  // Завантаження питань із JSON
  const loadQuestions = () => {
    const gefilterteBegriffe = medicalTerms.filter((term) => {
      const matchesRegion =
        region === "Alle" || (term.regions || []).includes(region);
      const matchesCategory =
        selectedCategory === "Alle" || (term.categories || []).includes(selectedCategory);
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

    // Формуємо питання з реченнями, які містять {BLANK}
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

  // При закритті налаштувань завантажуємо питання і запускаємо гру
  useEffect(() => {
    if (!settingsOpen) {
      loadQuestions();
      setGameFinished(false);
      setGameStartTime(Date.now());
      setCorrectAnswerCount(0);
      setIncorrectAnswerCount(0);
      setCorrectCounts({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowEdit, settingsOpen]);

  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
    setGameFinished(false);
    setGameStartTime(Date.now());
  };

  // Функція renderSentence розбиває речення за {BLANK} і підставляє обране слово
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

  // Обробка вибору відповіді
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
        setCorrectCounts((prev) => {
          const neuerZaehler = (prev[id] || 0) + 1;
          if (neuerZaehler >= 5 && (termStatuses[id] || "unlearned") !== "learned") {
            toggleStatus(id, "learned");
          }
          return { ...prev, [id]: neuerZaehler };
        });
      } else {
        setIncorrectAnswerCount((prev) => prev + 1);
      }
    }
  };

  // Навігація між питаннями
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

  // Підрахунок помилок за категоріями
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

  // Модальне вікно з результатами
  const ErgebnisseAnzeigen = () => {
    const kategorieFehler = berechneKategorieFehler();
    return (
      <div className={styles.resultsTile}>
        <button className={styles.modalCloseButton} onClick={() => setGameFinished(false)}>
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>
          Richtige Antworten: {correctAnswerCount} von {questions.length}
        </p>
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

  return (
    <MainLayout>
      <div className={styles.fillInBlankGame}>
        <button className="main_menu_back" onClick={() => navigate("/terminology-learning")}>
          &#8592;
        </button>

        {/* Модальне вікно налаштувань */}
        {settingsOpen && (
          <div className={styles.modalOverlay}>
            <div className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}>
              <button className={styles.modalCloseButton} onClick={() => setSettingsOpen(false)}>
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>{getRegionLabel(region)}</div>
                    <select className={styles.nativeSelect} value={region} onChange={(e) => setRegion(e.target.value)}>
                      <option value="Alle">Alle</option>
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.regions || []))).map((r) => (
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
                    <select className={styles.nativeSelect} value={filterMode} onChange={(e) => setFilterMode(e.target.value)}>
                      {filterModes.map((mode) => (
                        <option key={mode.value} value={mode.value}>
                          {mode.label}
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
                        <img src={categoryIcons[selectedCategory]} alt={selectedCategory} className={styles.categoryIcon} />
                      )}
                    </div>
                    <select className={styles.nativeSelect} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                      <option value="Alle">Alle</option>
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.categories || []))).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Bearbeiten */}
                <div className={styles.editColumn}>
                  <label className={styles.fieldLabel}>Bearbeiten</label>
                  <button
                    className={`${styles.editToggleButton} ${styles.myBearByteButton} ${allowEdit ? styles.selectedEdit : ""}`}
                    onClick={() => setAllowEdit(!allowEdit)}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>
              {/* Кількість питань */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer}>
                  {questionCountOptions.map((countOption) => (
                    <div
                      key={countOption}
                      className={`${styles.questionCountIcon} ${questionCount === countOption ? styles.selected : ""}`}
                      onClick={() => setQuestionCount(countOption)}
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

        {/* Екран гри */}
        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progress}>
              Frage {currentIndex + 1} von {questions.length}
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

        {/* Модальне вікно з результатами */}
        {gameFinished && (
          <div className={styles.resultsOverlay}>
            {ErgebnisseAnzeigen()}
          </div>
        )}

        {/* Кнопка налаштувань (праворуч внизу) */}
        {(!settingsOpen || window.innerWidth > 768) && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => {
                setSettingsOpen(true);
                setGameFinished(false);
              }}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FillInBlankGame;