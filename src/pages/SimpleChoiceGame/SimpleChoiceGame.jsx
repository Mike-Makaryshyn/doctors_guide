import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./SimpleChoiceGame.module.scss";
import {
  FaCog,
  FaPlay,
  FaPause,
  FaCheck,
  FaList,
  FaPen,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useTermStatus } from "../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../constants/CategoryIcons";

// Abkürzungen für bestimmte Regionen
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

// Filtermodi
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

// Anzahl Fragen
const questionCountOptions = [20, 40, 60, 100, 200, "all"];

// Anzeige-Modi
const displayModeOptions = [
  { value: "LatGerman", label: "Lat→Ger" },
  { value: "GermanLat", label: "Ger→Lat" },
  { value: "Mixed", label: "Mixed" },
];

const SimpleChoiceGame = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const [settingsOpen, setSettingsOpen] = useState(true);

  // Region & Filter
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [displayMode, setDisplayMode] = useState("LatGerman");
  const [questionCount, setQuestionCount] = useState(20);

  // Fragezustände
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Im Modus ohne Edit: gewählte Antwort
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  // Im Modus mit Edit: falsche Antworten
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  // Fertig bearbeitete Fragen
  const [questionsCompleted, setQuestionsCompleted] = useState({});

  const { termStatuses, toggleStatus } = useTermStatus();

  useEffect(() => {
    // Wenn sich global die Region ändert
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  const loadQuestions = () => {
    // Filtern
    const filteredTerms = medicalTerms.filter((term) => {
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
      ) {
        return false;
      }

      return matchesRegion && matchesCategory;
    });

    // Mischen
    const shuffled = [...filteredTerms].sort(() => Math.random() - 0.5);
    const selectedTerms =
      questionCount === "all" ? shuffled : shuffled.slice(0, questionCount);

    // Fragen aufbauen
    const questionsData = selectedTerms.map((term) => {
      let mode = displayMode;
      if (displayMode === "Mixed") {
        mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
      }
      let questionText, correctAnswer;
      if (mode === "LatGerman") {
        questionText = term.lat;
        correctAnswer = term.de;
      } else {
        questionText = term.de;
        correctAnswer = term.lat;
      }
      // falsche Antworten
      const wrongAnswers = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => (mode === "LatGerman" ? t.de : t.lat));

      const options = [...wrongAnswers, correctAnswer].sort(
        () => Math.random() - 0.5
      );

      return {
        id: term.id,
        question: questionText,
        correctAnswer,
        options,
      };
    });

    setQuestions(questionsData);
    setCurrentIndex(0);
    // Reset
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

  // Wenn man den Bearbeitungsmodus ändert
  useEffect(() => {
    if (!settingsOpen) {
      loadQuestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowEdit]);

  const handleStart = () => {
    setSettingsOpen(false);
    loadQuestions();
  };

  const handleAnswerSelect = (option) => {
    if (!questions[currentIndex]) return;
    const correct = questions[currentIndex].correctAnswer;
    const qIndex = currentIndex;

    if (questionsCompleted[qIndex]) return;

    if (allowEdit) {
      // Edit-Modus
      if (option === correct) {
        setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
        toggleStatus(questions[qIndex].id, "learned");
      } else {
        setWrongSelectionsEdit((prev) => {
          const oldList = prev[qIndex] || [];
          if (oldList.includes(option)) return prev;
          return { ...prev, [qIndex]: [...oldList, option] };
        });
      }
    } else {
      // No-Edit-Modus
      setAnswersNoEdit((prev) => ({ ...prev, [qIndex]: option }));
      setQuestionsCompleted((prev) => ({ ...prev, [qIndex]: true }));
      if (option === correct) {
        toggleStatus(questions[qIndex].id, "learned");
      }
    }
  };

  const handleNavigation = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "next" && currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Listen für Region & Kategorie
  const regionsList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.regions || []))
  );
  const categoriesList = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  const currentQuestion = questions[currentIndex];
  const qIndex = currentIndex;
  const questionIsCompleted = questionsCompleted[qIndex] || false;

  // Hilfsfunktion: Abkürzung oder voller Name?
  const getRegionLabel = (r) => {
    // Wenn Abkürzung existiert, zeige sie, sonst Region
    return regionAbbreviations[r] || r;
  };

  return (
    <MainLayout>
      <div className={styles.simpleChoiceGame}>
        <h1>Simple Choice Game</h1>

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
              <h2 className={styles.modalTitle}>Einstellung</h2>

              {/* Eine Zeile mit 4 Spalten: Region, Filter, Kategorie, Bearbeiten */}
              <div className={styles.row}>
                {/* Region */}
                <div className={styles.regionColumn}>
                  <label className={styles.fieldLabel}>Region</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.regionCell}>
                      {getRegionLabel(region)}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="Alle">Alle</option>
                      {regionsList.map((r) => (
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
                    <select
                      className={styles.nativeSelect}
                      value={filterMode}
                      onChange={(e) => setFilterMode(e.target.value)}
                    >
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
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="Alle">Alle</option>
                      {categoriesList.map((c) => (
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
                    className={`${styles.editToggleButton} ${
                      allowEdit ? styles.selectedEdit : ""
                    }`}
                    onClick={() => setAllowEdit(!allowEdit)}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>

              {/* Display-Mode */}
              <div className={styles.modalField}>
                <div className={styles.displayModeContainer}>
                  {displayModeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`${styles.displayModeIcon} ${
                        displayMode === option.value ? styles.selected : ""
                      }`}
                      onClick={() => setDisplayMode(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Anzahl Fragen */}
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer}>
                  {questionCountOptions.map((countOption) => (
                    <div
                      key={countOption}
                      className={`${styles.questionCountIcon} ${
                        questionCount === countOption ? styles.selected : ""
                      }`}
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

        {/* Spielablauf */}
        {!settingsOpen && questions.length > 0 && (
          <>
            <div className={styles.progress}>
              Frage {currentIndex + 1} von {questions.length}
            </div>
            <div className={styles.gameContainer}>
              <div className={styles.questionSection}>
                <h2>{currentQuestion.question}</h2>
                <div className={styles.optionsContainer}>
                  {currentQuestion.options.map((option, idx) => {
                    const correct = currentQuestion.correctAnswer;
                    const isCompleted = questionIsCompleted;

                    if (!allowEdit) {
                      // OHNE Edit
                      const chosenAnswer = answersNoEdit[qIndex] || null;
                      let isWrong = false;
                      let isCorrect = false;

                      if (isCompleted) {
                        if (option === correct) {
                          isCorrect = true;
                        }
                        if (chosenAnswer === option && option !== correct) {
                          isWrong = true;
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${
                            isCorrect ? styles.correct : ""
                          } ${isWrong ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    } else {
                      // MIT Edit
                      const wrongAnswersArr = wrongSelectionsEdit[qIndex] || [];
                      let isWrongEdit = wrongAnswersArr.includes(option);
                      let isCorrectEdit = false;

                      if (isCompleted && option === correct) {
                        isCorrectEdit = true;
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          className={`${styles.answerTile} ${
                            isCorrectEdit ? styles.correct : ""
                          } ${isWrongEdit ? styles.wrong : ""}`}
                        >
                          {option}
                        </button>
                      );
                    }
                  })}
                </div>
                <div className={styles.navigationContainer}>
                  {currentIndex > 0 && (
                    <button
                      className={styles.navButton}
                      onClick={() => handleNavigation("prev")}
                    >
                      <FaArrowLeft />
                    </button>
                  )}
                  {currentIndex < questions.length - 1 && (
                    <button
                      className={styles.navButton}
                      onClick={() => handleNavigation("next")}
                    >
                      <FaArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Falls keine Fragen übrig */}
        {!settingsOpen && questions.length === 0 && (
          <div style={{ marginTop: 20 }}>
            <p>Keine Begriffe gemäß Filter vorhanden.</p>
          </div>
        )}

        {/* Einstellungs-Button */}
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

export default SimpleChoiceGame;