import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";
import { supabase } from "../../../../supabaseClient";
import {
  FaCog,
  FaCheck,
  FaPause,
  FaGamepad,
  FaList,
  FaPlay,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  useTermStatus,
  TermStatusProvider,
} from "../../../../contexts/TermStatusContext";
import { useNavigate } from "react-router-dom";
import { categoryIcons } from "../../../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import medicalTerminologyBg from "../../../../assets/medical-terminology-bg.jpg";

// Import the tutorial component
import AllMedicalTerminologyTutorial from "./AllMedicalTerminologyTutorial";

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

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicalTerminologyContent = () => {
  const navigate = useNavigate();
  const { termStatuses, toggleStatus, scheduleFlushChanges } = useTermStatus();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // =========================
  // STATES
  // =========================
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDefinition, setShowDefinition] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Alle");
  const [translationLanguage, setTranslationLanguage] = useState(
    selectedLanguage || "de"
  );
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [filterMode, setFilterMode] = useState("all");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Guests (not logged in) can see only this many terms per category
  const GUEST_CATEGORY_LIMIT = 3;

  // Туторіал: початково не запускається
  const [showTutorial, setShowTutorial] = useState(false);
  // Ключ для примусового перезапуску туторіалу
  const [tutorialKey, setTutorialKey] = useState(0);
  // Додатковий стан, щоб відзначити, що модальне вікно туторіалу вже пройдено
  const [tutorialModalCompleted, setTutorialModalCompleted] = useState(false);

  // =========================
  // REFS
  // =========================
  const pageRef = useRef(null);
  const settingsModalRef = useRef(null);
  const joyrideRef = useRef(null);

  // =========================
  // EFFECTS
  // =========================
  useEffect(() => {
    // Якщо туторіал активний, але модальне вікно ще не було закрито для туторіалу,
    // відкриваємо його лише якщо ми ще не пройшли модальну частину
    if (showTutorial && !isSettingsModalOpen && !tutorialModalCompleted) {
      setIsSettingsModalOpen(true);
    }
  }, [showTutorial, isSettingsModalOpen, tutorialModalCompleted]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.closest(".tutorialButton")) return;
      if (showTutorial) return;
      if (
        settingsModalRef.current &&
        !settingsModalRef.current.contains(event.target)
      ) {
        console.log("Click outside modal detected, closing modal");
        setIsSettingsModalOpen(false);
      }
    }
    if (isSettingsModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsModalOpen, showTutorial]);

  useEffect(() => {
    setRegion(selectedRegion || "Alle");
  }, [selectedRegion]);

  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutsidePage(event) {
      if (
        isSearchActive &&
        pageRef.current &&
        !pageRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutsidePage);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsidePage);
  }, [isSearchActive]);

  useEffect(() => {
    if (isSettingsModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      if (!showTutorial) {
        document.body.style.overflow = "auto";
      }
    }
  }, [isSettingsModalOpen, showTutorial]);

  // =========================
  // FUNCTIONS
  // =========================
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  const toggleLearned = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  const togglePaused = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "paused");
    scheduleFlushChanges();
  };

  const handleRegionChange = (e) => {
    if (requireAuth()) return;
    setRegion(e.target.value);
  };

  const handleCategoryChange = (e) => {
    if (requireAuth()) return;
    setSelectedCategory(e.target.value);
  };

  const handleFilterModeChange = (e) => {
    if (requireAuth()) return;
    setFilterMode(e.target.value);
  };

  const handleBack = () => {
    navigate("/main_menu");
  };

  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/terminology-learning");
  };

  /**
   * Callback для закриття модального вікна туторіалу.
   * Також встановлюємо tutorialModalCompleted, щоб ефект не відкривав модалку знову.
   */
  const handleModalComplete = () => {
    setIsSettingsModalOpen(false);
    setTutorialModalCompleted(true);
  };

  // =========================
  // FILTERING
  // =========================
  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      (term.lat || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (term.de || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (term.deExplanation || '').toLowerCase().includes(searchTerm.toLowerCase());

    // Vereinfachte Kategorie-Logik - zeige alle Begriffe an, wenn "Alle" ausgewählt ist
    const matchesCategory =
      selectedCategory === "Alle" ||
      (term.categories && term.categories.includes(selectedCategory)) ||
      (selectedCategory === "Allgemein" && (!term.categories || term.categories.length === 0));

    // Bei aktiver Suche wird der Regionalfilter ignoriert
    const matchesRegion =
      searchTerm.trim() !== "" || 
      region === "Alle" || 
      (term.regions && term.regions.includes(region));

    const statusObj = termStatuses[term.id];
    const status = statusObj?.status || "unlearned";

    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (
      filterMode === "unlearned" &&
      (status === "learned" || status === "paused")
    )
      return false;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  const termsByCategory = {};
  filteredTerms.forEach((term) => {
    let termCategories = [];
    if (term.categories && Array.isArray(term.categories) && term.categories.length > 0) {
      termCategories = term.categories;
    } else {
      termCategories = ['Allgemein'];
    }
    
    termCategories.forEach((category) => {
      if (!termsByCategory[category]) {
        termsByCategory[category] = [];
      }
      termsByCategory[category].push(term);
    });
  });

  const uniqueRegions = Array.from(
    new Set(medicalTerms.flatMap((term) => term.regions || []))
  );
  const regionOptions = ["Alle", ...uniqueRegions];
  const uniqueCategories = Array.from(
    new Set(medicalTerms.flatMap((term) => {
      if (term.categories && Array.isArray(term.categories) && term.categories.length > 0) {
        return term.categories;
      } else {
        return ['Allgemein'];
      }
    }))
  );

  // =========================
  // RENDER
  // =========================
  return (
    <MainLayout>
      {loading ? (
        <p>Daten werden geladen...</p>
      ) : (
        <>
          <Helmet>
            <title>
              Medizinische Fachbegriffe für die Fachsprachenprüfung in
              Deutschland
            </title>
            <meta
              name="description"
              content="Diese Seite richtet sich an alle, die sich auf die Fachsprachenprüfung vorbereiten, eine Approbation anstreben und in Deutschland arbeiten möchten. Lernen Sie medizinische Fachbegriffe effektiv!"
            />
            <meta
              name="keywords"
              content="Fachsprachenprüfung, medizinische Begriffe, Approbation, Arbeitslizenz, Deutschland"
            />
            <meta property="og:image" content={medicalTerminologyBg} />
          </Helmet>

          <div className={styles.allMedicalTerminologyPage} ref={pageRef}>
         

            <div className={styles.searchContainer} data-tutorial="searchField">
              <input
                type="text"
                placeholder="Suche..."
                value={searchTerm}
                onChange={(e) => {
                  if (requireAuth()) return;
                  setSearchTerm(e.target.value);
                }}
                className={`${styles.searchInput} ${
                  isSearchActive ? styles.active : ""
                }`}
                style={{ display: isSearchActive ? "block" : "none" }}
                autoFocus={isSearchActive}
              />
              <button
                className={styles.searchToggleButton}
                onClick={() => {
                  if (!user) {
                    setShowAuthModal(true);
                    return;
                  }
                  if (isSearchActive) {
                    setSearchTerm("");
                    setIsSearchActive(false);
                  } else {
                    setIsSearchActive(true);
                  }
                }}
              >
                {isSearchActive ? <FaTimes /> : <FaSearch />}
              </button>
            </div>

            {isMobile ? (
              <div className={styles.tilesContainer}>
                {Object.keys(termsByCategory).map((category, index) => (
                  <div key={category} className={styles.categorySection}>
                    <h2
                      onClick={() => {
                        if (!user && index !== 0) {
                          setShowAuthModal(true);
                          return;
                        }
                        setCollapsedCategories((prev) => ({
                          ...prev,
                          [category]: !prev[category],
                        }));
                      }}
                      className={styles.categoryHeader}
                      data-tutorial="categoryHeader"
                    >
                      {category}
                      <span className={styles.collapseIcon}>
                        {collapsedCategories[category] ? "▼" : "▲"}
                      </span>
                    </h2>
                    {!collapsedCategories[category] && (() => {
                      const categoryTerms = user
                        ? termsByCategory[category]
                        : termsByCategory[category].slice(0, GUEST_CATEGORY_LIMIT);
                      return categoryTerms.map((term) => {
                        const statusObj = termStatuses[term.id] || {};
                        const status = statusObj.status || "unlearned";
                        return (
                          <div
                            key={term.id}
                            className={`${styles.tile} ${
                              status === "learned"
                                ? styles.learned
                                : status === "paused"
                                ? styles.paused
                                : ""
                            }`}
                          >
                            <span
                              data-tutorial="checkIcon"
                              className={styles.checkIconDesktop}
                              onClick={() => toggleLearned(term.id)}
                              title="Gelernt"
                            >
                              <FaCheck />
                            </span>
                            <span
                              data-tutorial="pauseIconMobile"
                              className={styles.pauseIcon}
                              onClick={() => togglePaused(term.id)}
                              title="Pausiert"
                            >
                              <FaPause />
                            </span>
                            <h3 className={styles.tileHeader}>{term.lat || 'Kein Begriff'}</h3>
                            <p
                              className={styles.tileDescription}
                              data-tutorial="germanDefinition"
                            >
                              {translationLanguage !== "de" ? (
                                <Tippy
                                  content={
                                    term[translationLanguage] ||
                                    "Keine Übersetzung vorhanden"
                                  }
                                  trigger="click"
                                  interactive={true}
                                  placement="bottom"
                                >
                                  <span className={styles.clickableCell}>
                                    {term.de || 'Keine deutsche Bezeichnung'}
                                  </span>
                                </Tippy>
                              ) : (
                                term.de || 'Keine deutsche Bezeichnung'
                              )}
                            </p>
                            {showDefinition && (
                              <p
                                className={styles.tileExplanation}
                                data-tutorial="explanationCell"
                              >
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      term[
                                        translationLanguage + "Explanation"
                                      ] || "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="bottom"
                                  >
                                    <span className={styles.clickableCell}>
                                      {term.deExplanation || 'Keine Definition'}
                                    </span>
                                  </Tippy>
                                ) : (
                                  term.deExplanation || 'Keine Definition'
                                )}
                              </p>
                            )}
                          </div>
                        );
                      });
                    })()}
                  </div>
                ))}
              </div>
            ) : (
              Object.keys(termsByCategory).map((category, index) => (
                <div key={category} className={styles.categorySection}>
                  <h2
                    onClick={() => {
                      if (!user && index !== 0) {
                        setShowAuthModal(true);
                        return;
                      }
                      setCollapsedCategories((prev) => ({
                        ...prev,
                        [category]: !prev[category],
                      }));
                    }}
                    className={styles.categoryHeader}
                    data-tutorial="categoryHeader"
                  >
                    {category}
                    <span className={styles.collapseIcon}>
                      {collapsedCategories[category] ? "▼" : "▲"}
                    </span>
                  </h2>
                  {!collapsedCategories[category] && (
                    <table
                      className={
                        !isMobile && !showDefinition
                          ? `${styles.terminologyTable} ${styles.noDefinition}`
                          : styles.terminologyTable
                      }
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              width: showDefinition ? "20%" : "50%",
                              textAlign: "left",
                            }}
                          >
                            Begriff
                          </th>
                          <th style={{ width: showDefinition ? "20%" : "50%" }}>
                            Deutsche Bezeichnung
                          </th>
                          {showDefinition && (
                            <th style={{ width: "60%", textAlign: "left" }}>
                              Definition
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {(() => {
                             const categoryTerms = user
                               ? termsByCategory[category]
                               : termsByCategory[category].slice(0, GUEST_CATEGORY_LIMIT);
                             return categoryTerms.map((term) => {
                              const statusObj = termStatuses[term.id] || {};
                              const status = statusObj.status || "unlearned";
                              return (
                                <tr
                                  key={term.id}
                                  className={
                                    status === "learned"
                                      ? styles.learned
                                      : status === "paused"
                                      ? styles.paused
                                      : ""
                                  }
                                >
                                  <td className={styles.termCell}>
                                    <div className={styles.iconWrapper}>
                                      <span
                                        data-tutorial="checkIcon"
                                        className={styles.checkIconDesktop}
                                        onClick={() => toggleLearned(term.id)}
                                        title="Gelernt"
                                      >
                                        <FaCheck />
                                      </span>
                                      <span
                                        data-tutorial="pauseIconDesktop"
                                        className={styles.pauseIconDesktop}
                                        onClick={() => togglePaused(term.id)}
                                        title="Pausiert"
                                      >
                                        <FaPause />
                                      </span>
                                    </div>
                                    <div className={styles.termContent}>
                                      {term.lat || 'Kein Begriff'}
                                    </div>
                                  </td>
                                  <td data-tutorial="germanDefinition">
                                    {translationLanguage !== "de" ? (
                                      <Tippy
                                        content={
                                          term[translationLanguage] ||
                                          "Keine Übersetzung vorhanden"
                                        }
                                        trigger="click"
                                        interactive={true}
                                        placement="right"
                                      >
                                        <span className={styles.clickableCell}>
                                          {term.de || 'Keine deutsche Bezeichnung'}
                                        </span>
                                      </Tippy>
                                    ) : (
                                      term.de || 'Keine deutsche Bezeichnung'
                                    )}
                                  </td>
                                  {showDefinition && (
                                    <td data-tutorial="explanationCell">
                                      {translationLanguage !== "de" ? (
                                        <Tippy
                                          content={
                                            term[
                                              translationLanguage + "Explanation"
                                            ] || "Keine Übersetzung vorhanden"
                                          }
                                          trigger="click"
                                          interactive={true}
                                          placement="right"
                                        >
                                          <span className={styles.clickableCell}>
                                            {term.deExplanation || 'Keine Definition'}
                                          </span>
                                        </Tippy>
                                      ) : (
                                        term.deExplanation || 'Keine Definition'
                                      )}
                                    </td>
                                  )}
                                </tr>
                              );
                            });
                        })()}
                      </tbody>
                    </table>
                  )}
                </div>
              ))
            )}

            {isSettingsModalOpen && (
              <div className={styles.modalOverlay}>
                <div
                  className={
                    window.innerWidth > 768
                      ? styles.popupDesktopWide
                      : styles.popupMobile
                  }
                  ref={settingsModalRef}
                >
                  <button
                    className='modalCloseButton'
                    onClick={() => {
                      if (!showTutorial) {
                        setIsSettingsModalOpen(false);
                      }
                    }}
                    data-tutorial="closeModal"
                  >
                    ×
                  </button>
                  <h2 className={styles.modalTitle}>Einstellungen</h2>
                  <div className={styles.row}>
                    <div
                      className={styles.regionColumn}
                      data-tutorial="regionSelect"
                    >
                      <label className={styles.fieldLabel}>Region</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.regionCell}>
                          {regionAbbreviations[region] || region}
                        </div>
                        <select
                          className={styles.nativeSelect}
                          value={region}
                          onChange={handleRegionChange}
                          data-tutorial="nativeSelectClick"
                        >
                          {regionOptions.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div
                      className={styles.filterColumn}
                      data-tutorial="filterColumn"
                    >
                      <label className={styles.fieldLabel}>Filter</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.filterCell}>
                          {filterModes.find((m) => m.value === filterMode)
                            ?.icon}
                        </div>
                        <select
                          className={styles.nativeSelect}
                          value={filterMode}
                          onChange={handleFilterModeChange}
                        >
                          {filterModes.map((mode) => (
                            <option key={mode.value} value={mode.value}>
                              {mode.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div
                      className={styles.categoryColumn}
                      data-tutorial="categorySelect"
                    >
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
                          onChange={handleCategoryChange}
                        >
                          <option value="Alle">Alle</option>
                          {uniqueCategories.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div
                      className={styles.gameColumn}
                      data-tutorial="gameContainer"
                    >
                      <label className={styles.fieldLabel}>Spiel</label>
                      <div
                        className={styles.selectWrapper}
                        onClick={handleGameClick}
                        style={{ cursor: "pointer" }}
                      >
                        <div className={styles.gameCell}>
                          <FaGamepad size={24} color="#013b6e" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.definitionColumn}
                      data-tutorial="definitionToggle"
                    >
                      <label className={styles.fieldLabel}>Definition</label>
                      <div
                        className={`${styles.definitionToggle} ${
                          showDefinition ? styles.active : ""
                        }`}
                        onClick={() => {
                          if (requireAuth()) return;
                          setShowDefinition((prev) => !prev);
                        }}
                      >
                        <span className={styles.toggleText}>
                          {showDefinition ? "An" : "Aus"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.bottomRightSettings}>
              <button
                className={styles.settingsButton}
                onClick={() => {
                  if (requireAuth()) return;
                  setIsSettingsModalOpen(true);
                }}
              >
                <FaCog />
              </button>
            </div>

            {isSettingsModalOpen && (
              <div
                className="tutorialButton"
                style={{
                  position: "fixed",
                  top: "65px",
                  left: "5px",
                  zIndex: 9999,
                  width: "35px",
                  height: "35px",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  console.log("Tutorial button clicked!");
                  localStorage.removeItem(
                    "allMedicalTerminologyTutorialCompleted"
                  );
                  // При повторному запуску скидаємо стан, щоб модалка знову відкрилася
                  setTutorialKey((prev) => prev + 1);
                  setTutorialModalCompleted(false);
                  setShowTutorial(true);
                  setIsSettingsModalOpen(true);
                }}
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
                  <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
                  <circle cx="12" cy="7" r="0.5" fill="#ededed" />
                </svg>
              </div>
            )}
          </div>

          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
          />

          {showTutorial && (
            <AllMedicalTerminologyTutorial
              key={tutorialKey}
              ref={joyrideRef}
              run={showTutorial}
              onFinish={() => {
                setShowTutorial(false);
                setIsSettingsModalOpen(false);
              }}
              onModalComplete={handleModalComplete}
              selectedLanguage={selectedLanguage}
            />
          )}
        </>
      )}
    </MainLayout>
  );
};

const AllMedicalTerminologyPage = () => {
  return (
    <TermStatusProvider>
      <AllMedicalTerminologyContent />
    </TermStatusProvider>
  );
};

export default AllMedicalTerminologyPage;