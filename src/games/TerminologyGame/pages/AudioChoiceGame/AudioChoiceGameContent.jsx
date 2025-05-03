// src/games/TerminologyGame/pages/AudioChoiceGame/AudioChoiceGameContent.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import { audioFiles } from "../../../../constants/audioFiles";
import styles from "./AudioChoiceGame.module.scss";
import {
  FaCog,
  FaPlay,
  FaPause,
  FaCheck,
  FaList,
  FaPen,
  FaArrowLeft,
  FaArrowRight,
  FaExchangeAlt,
} from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { useTermStatus, TermStatusProvider } from "../../../../contexts/TermStatusContext";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import AudioChoiceGameTutorial from "./AudioChoiceGameTutorialTranslations";
import { Helmet } from "react-helmet";
import audioQuizBg from "../../../../assets/audio-quiz-bg.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import AuthModal from "../../../../pages/AuthPage/AuthModal";

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
  "Baden-Württemberg-Freiburg": "BWF",
  "Baden-Württemberg-Karlsruhe": "BWK",
  "Baden-Württemberg-Stuttgart": "BWS",
  "Baden-Württemberg-Reutlingen": "BWR",
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

// Mapping for selectable languages
const languageMap = {
  lat: "Latein",
  de:  "Deutsch",
  en:  "Englisch",
  uk:  "Ukrainisch",
  ru:  "Russisch",
  tr:  "Türkisch",
  ar:  "Arabisch",
  fr:  "Französisch",
  es:  "Spanisch",
  pl:  "Polnisch",
  ro:  "Rumänisch",
  el:  "Griechisch",
};

const AudioChoiceGameContent = () => {
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();

  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  const { termStatuses, recordCorrectAnswer, flushChanges } = useTermStatus();

  // Spiel-Settings
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filterMode, setFilterMode] = useState("unlearned");
  const [allowEdit, setAllowEdit] = useState(false);
  const [questionCount, setQuestionCount] = useState(20);
  // Which German audio to play: term name or explanation
  const [deField, setDeField] = useState("de"); // values: "de" or "deExplanation"
  // Only selectable language state (answer language)
  const [selectableLang, setSelectableLang] = useState(
    selectedLanguage && selectedLanguage !== "de" ? selectedLanguage : "lat"
  );

  // Spiel-State
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersNoEdit, setAnswersNoEdit] = useState({});
  const [wrongSelectionsEdit, setWrongSelectionsEdit] = useState({});
  const [questionsCompleted, setQuestionsCompleted] = useState({});
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [shownCounts, setShownCounts] = useState({});
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("audioChoiceGameTutorialCompleted") !== "true"
  );
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  const loadQuestions = () => {
    const filtered = medicalTerms.filter((term) => {
      const inRegion = region === "Alle" || term.regions?.includes(region);
      const inCategory =
        selectedCategory === "Alle" || term.categories?.includes(selectedCategory);
      const status = termStatuses[term.id]?.status || "unlearned";
      if (filterMode === "learned" && status !== "learned") return false;
      if (filterMode === "paused" && status !== "paused") return false;
      if (
        filterMode === "unlearned" &&
        (status === "learned" || status === "paused")
      )
        return false;
      return inRegion && inCategory;
    });

    filtered.sort((a, b) => {
      const ca = shownCounts[a.id] || 0;
      const cb = shownCounts[b.id] || 0;
      if (ca === cb) return Math.random() - 0.5;
      return ca - cb;
    });

    const selected =
      questionCount === "all" ? filtered : filtered.slice(0, questionCount);
    const newCounts = { ...shownCounts };
    selected.forEach((t) => {
      newCounts[t.id] = (newCounts[t.id] || 0) + 1;
    });
    setShownCounts(newCounts);

    const qData = selected.map((term) => {
      const audioKey =
        deField === "de" ? term.deAudioKey : term.deExplanationKey;
      const audioSrc = audioFiles[audioKey];
      // Always: "de" (German) is question language, selectableLang is answer language
      const questionLang = "de";
      const answerLang   = selectableLang;
      const richtigeAntwort = term[answerLang]   || term.de;
      const falscheAntworten = medicalTerms
        .filter((t) => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => t[answerLang] || t.de);
      const optionen = [...falscheAntworten, richtigeAntwort].sort(() => Math.random() - 0.5);
      return { id: term.id, audioSrc, richtigeAntwort, optionen, term };
    });

    setQuestions(qData);
    setCurrentIndex(0);
    setAnswersNoEdit({});
    setWrongSelectionsEdit({});
    setQuestionsCompleted({});
  };

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
    const duration = Math.floor((Date.now() - gameStartTime) / 1000);
    setSessionDuration(duration);
    setGameFinished(true);
    if (!allowEdit) flushChanges();
  };

  const handleAnswerSelect = (opt) => {
    const q = questions[currentIndex];
    if (!q || questionsCompleted[currentIndex]) return;
    if (allowEdit) {
      if (opt === q.richtigeAntwort) {
        setQuestionsCompleted((p) => ({ ...p, [currentIndex]: true }));
      } else {
        setWrongSelectionsEdit((p) => {
          const old = p[currentIndex] || [];
          return old.includes(opt) ? p : { ...p, [currentIndex]: [...old, opt] };
        });
      }
    } else {
      setAnswersNoEdit((p) => ({ ...p, [currentIndex]: opt }));
      setQuestionsCompleted((p) => ({ ...p, [currentIndex]: true }));
      if (opt === q.richtigeAntwort) {
        setCorrectAnswerCount((c) => c + 1);
        recordCorrectAnswer(q.id);
      } else {
        setIncorrectAnswerCount((i) => i + 1);
      }
    }
  };

  const handleNavigation = (dir) => {
    if (dir === "prev" && currentIndex > 0) setCurrentIndex((i) => i - 1);
    if (dir === "next") {
      if (!questionsCompleted[currentIndex]) {
        alert("Bitte beantworten Sie die aktuelle Frage!");
      } else if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
      }
    }
  };

  const playAudio = (src) => new Audio(src).play();

  const getRegionLabel = (r) => regionAbbreviations[r] || r;

  const calculateCategoryErrors = () => {
    const errors = {};
    questions.forEach((q, idx) => {
      if (
        questionsCompleted[idx] &&
        answersNoEdit[idx] !== q.richtigeAntwort
      ) {
        q.term.categories?.forEach((cat) => {
          errors[cat] = (errors[cat] || 0) + 1;
        });
      }
    });
    return errors;
  };

  const ResultsModal = () => {
    const errors = calculateCategoryErrors();
    return (
      <div className={styles.resultsTile}>
        <button
          className={styles.modalCloseButton}
          onClick={() => setGameFinished(false)}
        >
          ×
        </button>
        <h3>Spielergebnisse</h3>
        <p>Richtige Antworten: {correctAnswerCount} von {questions.length}</p>
        <p>Falsche Antworten: {incorrectAnswerCount}</p>
        <p>Dauer: {Math.floor(sessionDuration/60)} Minuten {sessionDuration%60} Sekunden</p>
        {Object.keys(errors).length > 0 && (
          <div>
            <h4>Fehler in Kategorien:</h4>
            <ul>
              {Object.entries(errors).map(([cat, cnt]) => (
                <li key={cat}>{cat}: {cnt}</li>
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

  const q = questions[currentIndex];
  const done = questionsCompleted[currentIndex] || false;

  return (
    <MainLayout>
      <Helmet>
        <title>Audio Choice Game – Medizinische Fachbegriffe hören und meistern</title>

        {/* Primary description / keywords */}
        <meta
          name="description"
          content="Audio‑basiertes Multiple‑Choice‑Quiz: Höre medizinische Fachbegriffe auf Deutsch und wähle die korrekte Übersetzung. Ideal zum Üben für die Fachsprachenprüfung, die Anerkennung als Arzt in Deutschland und zur Verbesserung der Aussprache."
        />
        <meta
          name="keywords"
          content="medizinische Fachbegriffe, Audio Quiz, Fachsprachenprüfung, medizinische Terminologie, Ärzte Deutsch, Hörverständnis, German medical terms, pronunciation training, TerminologyGame"
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Audio Choice Game – Medizinische Fachbegriffe hören und meistern" />
        <meta
          property="og:description"
          content="Trainiere dein medizinisches Deutsch auditiv: Höre Fachbegriffe, wähle die richtige Übersetzung und markiere Begriffe automatisch als gelernt. Perfekt für Medizinerinnen und Mediziner."
        />
        <meta property="og:image" content={audioQuizBg} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Audio Choice Game – Medizinische Fachbegriffe hören" />
        <meta
          name="twitter:description"
          content="Audio‑basiertes Quiz für medizinische Terminologie. Höre Begriffe auf Deutsch und teste dein Wissen – ideal zur Vorbereitung auf die Fachsprachenprüfung."
        />
        <meta name="twitter:image" content={audioQuizBg} />
      </Helmet>
      <div className={styles.audioChoiceGame}>
        <button className="main_menu_back" onClick={() => navigate("/terminology-learning")}>
          ←
        </button>

        {/* Einstellungen Modal */}
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
                      {Array.from(new Set(medicalTerms.flatMap((term) => term.regions || []))).map((r) => (
                        <option key={r} value={r}>{r}</option>
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
                        <option key={mode.value} value={mode.value}>{mode.label}</option>
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
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.editColumn} data-tutorial="editToggleButton">
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
              <div className={styles.modalField} data-tutorial="languageSelectContainer">
                <label className={styles.fieldLabel}>Audio → Ziel:</label>
                <div className={styles.languageSwapContainer}>
                  {/* Left: German audio field */}
                  <div className={styles.languageCellFixed} data-tutorial="fieldSelectContainer">
                    <select
                      className={styles.languageSelect}
                      value={deField}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setDeField(e.target.value);
                      }}
                    >
                      <option value="de">Begriff</option>
                      <option value="deExplanation">Erklärung</option>
                    </select>
                  </div>
                  {/* Arrow */}
                  <FaArrowRight className={styles.swapIcon} />
                  {/* Right: target language */}
                  <div className={styles.languageCell} data-tutorial="languageSelectContainer">
                    <select
                      className={styles.languageSelect}
                      value={selectableLang}
                      onChange={(e) => {
                        if (requireAuth()) return;
                        setSelectableLang(e.target.value);
                      }}
                    >
                      {Object.entries(languageMap)
                        .filter(([code]) => code !== "de")
                        .map(([code, label]) => (
                          <option key={code} value={code}>{label}</option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.modalField}>
                <div className={styles.questionCountContainer} data-tutorial="questionCountContainer">
                  {questionCountOptions.map((cnt) => (
                    <div
                      key={cnt}
                      className={`${styles.questionCountIcon} ${(questionCount === cnt) ? styles.selected : ''}`}
                      onClick={() => { if (!requireAuth()) setQuestionCount(cnt); }}
                    >{cnt === 'all' ? 'Alles' : cnt}</div>
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
        )}

        {/* Spiel-Oberfläche */}
        {!settingsOpen && !gameFinished && questions.length > 0 && (
          <>
            <div className={styles.progressContainer}>
              <div className={styles.progress}>Frage {currentIndex+1} von {questions.length}</div>
            </div>
            <div className={styles.questionSection}>
              <div className={styles.frageContainer}>
                <button className={styles.playButton} onClick={() => playAudio(q.audioSrc)}>
                  <FaVolumeUp className={styles.playIcon} />
                </button>
              </div>
              <div className={styles.optionsContainer}>
                {q.optionen.map((opt, i) => {
                  const isCorrect = done && opt === q.richtigeAntwort;
                  const isWrong = done && answersNoEdit[currentIndex] === opt && opt !== q.richtigeAntwort;
                  return (
                    <button
                      key={i}
                      className={`${styles.answerTile} ${isCorrect ? styles.correct : ''} ${isWrong ? styles.wrong : ''}`}
                      onClick={() => handleAnswerSelect(opt)}
                    >{opt}</button>
                  );
                })}
              </div>
              <div className={styles.navigationContainer}>
                {currentIndex>0 && <button onClick={()=>handleNavigation('prev')}><FaArrowLeft/></button>}
                {currentIndex<questions.length-1 ? (
                  <button onClick={()=>handleNavigation('next')}><FaArrowRight/></button>
                ) : (
                  <button onClick={finishGame}>Spiel beenden</button>
                )}
              </div>
            </div>
          </>
        )}

        {/* Ergebnisse */}
        {gameFinished && <div className={styles.resultsOverlay}><ResultsModal/></div>}

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

        <AuthModal isOpen={showAuthModal} onClose={()=>setShowAuthModal(false)}/>
        {showTutorial && <AudioChoiceGameTutorial run={showTutorial} onFinish={()=>setShowTutorial(false)}/>}        
      </div>
    </MainLayout>
  );
};

export default () => (
  <TermStatusProvider>
    <AudioChoiceGameContent />
  </TermStatusProvider>
);