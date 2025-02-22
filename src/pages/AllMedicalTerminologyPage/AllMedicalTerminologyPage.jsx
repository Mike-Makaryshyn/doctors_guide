import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
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
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useTermStatus } from "../../contexts/TermStatusContext";
import { useNavigate } from "react-router-dom";
import { categoryIcons } from "../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import AuthModal from "../AuthPage/AuthModal"; // Шлях до AuthModal може бути змінено залежно від структури проекту

// Regionskürzel
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

const AllMedicalTerminologyPage = () => {
  const navigate = useNavigate();
  const { termStatuses, toggleStatus, scheduleFlushChanges } = useTermStatus();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Hook-и для станів, що використовуються далі (завжди викликаються)
  const [showDefinition, setShowDefinition] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  const [translationLanguage, setTranslationLanguage] = useState(selectedLanguage || "de");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [filterMode, setFilterMode] = useState("all");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Референції
  const pageRef = useRef(null);
  const settingsModalRef = useRef(null);

  // Функція для перевірки авторизації
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Закриття модального вікна налаштувань при кліку поза ним
  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsModalRef.current && !settingsModalRef.current.contains(event.target)) {
        setIsSettingsModalOpen(false);
      }
    }
    if (isSettingsModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSettingsModalOpen]);

  // Закриття поля пошуку при кліку поза ним
  useEffect(() => {
    function handleClickOutsidePage(event) {
      if (isSearchActive && pageRef.current && !pageRef.current.contains(event.target)) {
        setIsSearchActive(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutsidePage);
    return () => document.removeEventListener("mousedown", handleClickOutsidePage);
  }, [isSearchActive]);

  // Функції для зміни статусів термінів
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

  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.deExplanation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Alle" ||
      (term.categories || []).includes(selectedCategory);

    const matchesRegion =
      region === "Alle" || (term.regions || []).includes(region);

    let base = matchesSearch && matchesCategory && matchesRegion;
    const statusObj = termStatuses[term.id];
    const status = statusObj?.status || "unlearned";

    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) {
      return false;
    }
    return base;
  });

  const termsByCategory = {};
  filteredTerms.forEach((term) => {
    (term.categories || []).forEach((category) => {
      if (!termsByCategory[category]) {
        termsByCategory[category] = [];
      }
      termsByCategory[category].push(term);
    });
  });

  const uniqueRegions = Array.from(new Set(medicalTerms.flatMap((term) => term.regions || [])));
  const regionOptions = ["Alle", ...uniqueRegions];

  const uniqueCategories = Array.from(new Set(medicalTerms.flatMap((term) => term.categories || [])));

  // Обробники змін фільтрів
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

  // Обробники для навігації
  const handleBack = () => {
    if (requireAuth()) return;
    navigate("/main_menu");
  };
  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/terminology-learning");
  };

  return (
    <MainLayout>
      {loading ? (
        <p>Daten werden geladen...</p>
      ) : (
        <>
          <Helmet>
            <title>Medizinische Fachbegriffe für die Fachsprachenprüfung in Deutschland</title>
            <meta
              name="description"
              content="Diese Seite richtet sich an alle, die sich auf die Fachsprachenprüfung vorbereiten, eine Approbation anstreben und in Deutschland arbeiten möchten. Lernen Sie medizinische Fachbegriffe effektiv!"
            />
            <meta
              name="keywords"
              content="Fachsprachenprüfung, medizinische Begriffe, Approbation, Arbeitslizenz, Deutschland"
            />
          </Helmet>
          <div className={styles.allMedicalTerminologyPage} ref={pageRef}>
            {/* Кнопка "Назад" */}
            <button className={styles.main_menu_back} onClick={handleBack}>
              &#8592;
            </button>

            {/* Контейнер для пошуку */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Suche..."
                value={searchTerm}
                onChange={(e) => {
                  if (requireAuth()) return;
                  setSearchTerm(e.target.value);
                }}
                className={`${styles.searchInput} ${isSearchActive ? styles.active : ""}`}
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

            {/* Вміст: мобільна версія (плитки) або десктоп (таблиця) */}
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
                    >
                      {category}
                      <span className={styles.collapseIcon}>
                        {collapsedCategories[category] ? "▼" : "▲"}
                      </span>
                    </h2>
                    {!collapsedCategories[category] &&
                      termsByCategory[category].map((term) => {
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
                              className={styles.checkIconDesktop}
                              onClick={() => toggleLearned(term.id)}
                              title="Gelernt"
                            >
                              <FaCheck />
                            </span>
                            <span
                              className={styles.pauseIcon}
                              onClick={() => togglePaused(term.id)}
                              title="Pausiert"
                            >
                              <FaPause />
                            </span>
                            <h3 className={styles.tileHeader}>{term.lat}</h3>
                            <p className={styles.tileDescription}>
                              {translationLanguage !== "de" ? (
                                <Tippy
                                  content={
                                    term[translationLanguage] || "Keine Übersetzung vorhanden"
                                  }
                                  trigger="click"
                                  interactive={true}
                                  placement="bottom"
                                >
                                  <span className={styles.clickableCell}>{term.de}</span>
                                </Tippy>
                              ) : (
                                term.de
                              )}
                            </p>
                            {showDefinition && (
                              <p className={styles.tileExplanation}>
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      term[translationLanguage + "Explanation"] ||
                                      "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="bottom"
                                  >
                                    <span className={styles.clickableCell}>
                                      {term.deExplanation}
                                    </span>
                                  </Tippy>
                                ) : (
                                  term.deExplanation
                                )}
                              </p>
                            )}
                          </div>
                        );
                      })}
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
                  >
                    {category}
                    <span className={styles.collapseIcon}>
                      {collapsedCategories[category] ? "▼" : "▲"}
                    </span>
                  </h2>
                  {!collapsedCategories[category] && (
                    <table className={styles.terminologyTable}>
                      <thead>
                        <tr>
                          <th style={{ width: showDefinition ? "20%" : "50%", textAlign: "left" }}>
                            Begriff
                          </th>
                          <th style={{ width: showDefinition ? "20%" : "50%" }}>
                            Deutsche Bezeichnung
                          </th>
                          {showDefinition && (
                            <th style={{ width: "60%", textAlign: "left" }}>Definition</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {termsByCategory[category].map((term) => {
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
                                    className={styles.checkIconDesktop}
                                    onClick={() => toggleLearned(term.id)}
                                    title="Gelernt"
                                  >
                                    <FaCheck />
                                  </span>
                                  <span
                                    className={styles.pauseIconDesktop}
                                    onClick={() => togglePaused(term.id)}
                                    title="Pausiert"
                                  >
                                    <FaPause />
                                  </span>
                                </div>
                                <div className={styles.termContent}>{term.lat}</div>
                              </td>
                              <td>
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      term[translationLanguage] || "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="right"
                                  >
                                    <span className={styles.clickableCell}>{term.de}</span>
                                  </Tippy>
                                ) : (
                                  term.de
                                )}
                              </td>
                              {showDefinition && (
                                <td>
                                  {translationLanguage !== "de" ? (
                                    <Tippy
                                      content={
                                        term[translationLanguage + "Explanation"] ||
                                        "Keine Übersetzung vorhanden"
                                      }
                                      trigger="click"
                                      interactive={true}
                                      placement="right"
                                    >
                                      <span className={styles.clickableCell}>
                                        {term.deExplanation}
                                      </span>
                                    </Tippy>
                                  ) : (
                                    term.deExplanation
                                  )}
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              ))
            )}

            {/* Модальне вікно налаштувань */}
            {isSettingsModalOpen && (
              <div className={styles.modalOverlay}>
                <div
                  className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}
                  ref={settingsModalRef}
                >
                  <button
                    className={styles.modalCloseButton}
                    onClick={() => setIsSettingsModalOpen(false)}
                  >
                    ×
                  </button>
                  <h2 className={styles.modalTitle}>Einstellungen</h2>
                  <div className={styles.row}>
                    <div className={styles.regionColumn} data-tutorial="regionSelect">
                      <label className={styles.fieldLabel}>Region</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.regionCell}>
                          {regionAbbreviations[region] || region}
                        </div>
                        <select
                          className={styles.nativeSelect}
                          value={region}
                          onChange={handleRegionChange}
                        >
                          {regionOptions.map((r) => (
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
                    <div className={styles.gameColumn} data-tutorial="gameContainer">
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
                    {/* Контейнер для перемикача Definition */}
                    <div className={styles.definitionColumn} data-tutorial="definitionToggle">
                      <label className={styles.fieldLabel}>Definition</label>
                      <div
                        className={`${styles.definitionToggle} ${showDefinition ? styles.active : ""}`}
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

            {/* Кнопка налаштувань (знамець) */}
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
          </div>
          {/* Модальне вікно авторизації */}
          <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </>
      )}
    </MainLayout>
  );
};

export default AllMedicalTerminologyPage;