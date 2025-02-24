import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medications } from "../../constants/medications";
import styles from "./AllMedicationsPage.module.scss";
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
import { useMedicationStatus } from "../../contexts/MedicationStatusContext";
import { useNavigate } from "react-router-dom";
import { categoryIcons } from "../../constants/CategoryIcons";
import { Helmet } from "react-helmet";
import AuthModal from "../AuthPage/AuthModal";
// import medicationBg from "../../assets/medication-bg.jpg"; // Видалено

// При потребі можна адаптувати об'єкти для регіонів/категорій:
const regionAbbreviations = {
  "Nordrhein-Westfalen": "NRW",
  Bayern: "BY",
  Hessen: "HE",
};

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicationsPage = () => {
  const navigate = useNavigate();
  const { medicationStatuses, toggleStatus, scheduleFlushChanges } = useMedicationStatus();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Стан для показу додаткових деталей (наприклад, пояснення)
  const [showDetails, setShowDetails] = useState(true);
  const [region, setRegion] = useState(selectedRegion || "Bayern");
  // Хоча тут використовується selectedLanguage, для відображення у цій сторінці використовуватимемо поля для німецької (de)
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

  // Функція перевірки авторизації
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

  // Функції для зміни статусів медикаментів
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

  // Фільтрація медикаментів із захистом від undefined для полів:
  // Використовуємо поле "lat" як базову назву, "de" як німецький переклад і "deExplanation" як пояснення
  const filteredMedications = medications.filter((med) => {
    const baseTerm = med.lat ? med.lat.toLowerCase() : "";
    const translation = med.de ? med.de.toLowerCase() : "";
    const searchLower = searchTerm.toLowerCase();

    const matchesSearch = baseTerm.includes(searchLower) || translation.includes(searchLower);

    const matchesCategory =
      selectedCategory === "Alle" ||
      (med.categories || []).includes(selectedCategory);

    const matchesRegion =
      region === "Alle" || (med.regions || []).includes(region);

    const base = matchesSearch && matchesCategory && matchesRegion;
    const statusObj = medicationStatuses[med.id];
    const status = statusObj?.status || "unlearned";

    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) {
      return false;
    }
    return base;
  });

  // Групування медикаментів за категоріями (якщо такі поля є)
  const medsByCategory = {};
  filteredMedications.forEach((med) => {
    (med.categories || []).forEach((cat) => {
      if (!medsByCategory[cat]) {
        medsByCategory[cat] = [];
      }
      medsByCategory[cat].push(med);
    });
  });

  const uniqueRegions = Array.from(new Set(medications.flatMap((med) => med.regions || [])));
  const regionOptions = ["Alle", ...uniqueRegions];

  const uniqueCategories = Array.from(new Set(medications.flatMap((med) => med.categories || [])));

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

  // Обробники навігації
  const handleBack = () => {
    if (requireAuth()) return;
    navigate("/main_menu");
  };
  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/medications-learning");
  };

  return (
    <MainLayout>
      {loading ? (
        <p>Daten werden geladen...</p>
      ) : (
        <>
          <Helmet>
            <title>Medikamente – Übersicht und Status</title>
            <meta
              name="description"
              content="Diese Seite bietet eine Übersicht der Medikamente mit Statusanzeige. Verwalten Sie Ihre Lerneinheiten für Medikamente effektiv!"
            />
            <meta
              name="keywords"
              content="Medikamente, lernen, Status, Approbation, Deutschland"
            />
            {/* Mета-тег з картинкою тимчасово прибрано */}
          </Helmet>
          <div className={styles.allMedicationsPage} ref={pageRef}>
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

            {/* Відображення: мобільна версія (плитки) або десктоп (таблиця) */}
            {isMobile ? (
              <div className={styles.tilesContainer}>
                {Object.keys(medsByCategory).map((category, index) => (
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
                      medsByCategory[category].map((med) => {
                        const statusObj = medicationStatuses[med.id] || {};
                        const status = statusObj.status || "unlearned";
                        return (
                          <div
                            key={med.id}
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
                              onClick={() => toggleLearned(med.id)}
                              title="Gelernt"
                            >
                              <FaCheck />
                            </span>
                            <span
                              className={styles.pauseIcon}
                              onClick={() => togglePaused(med.id)}
                              title="Pausiert"
                            >
                              <FaPause />
                            </span>
                            <h3 className={styles.tileHeader}>{med.lat}</h3>
                            <p className={styles.tileDescription}>
                              {translationLanguage !== "de" ? (
                                <Tippy
                                  content={
                                    med[translationLanguage] || "Keine Übersetzung vorhanden"
                                  }
                                  trigger="click"
                                  interactive={true}
                                  placement="bottom"
                                >
                                  <span className={styles.clickableCell}>{med.de}</span>
                                </Tippy>
                              ) : (
                                med.de
                              )}
                            </p>
                            {showDetails && med.deExplanation && (
                              <p className={styles.tileExplanation}>
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      med[translationLanguage + "Explanation"] || "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="bottom"
                                  >
                                    <span className={styles.clickableCell}>
                                      {med.deExplanation}
                                    </span>
                                  </Tippy>
                                ) : (
                                  med.deExplanation
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
              Object.keys(medsByCategory).map((category, index) => (
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
                    <table className={styles.medicationTable}>
                      <thead>
                        <tr>
                          <th style={{ width: showDetails ? "20%" : "50%", textAlign: "left" }}>
                            Medikament
                          </th>
                          <th style={{ width: showDetails ? "20%" : "50%" }}>
                            Beschreibung
                          </th>
                          {showDetails && (
                            <th style={{ width: "60%", textAlign: "left" }}>Details</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {medsByCategory[category].map((med) => {
                          const statusObj = medicationStatuses[med.id] || {};
                          const status = statusObj.status || "unlearned";
                          return (
                            <tr
                              key={med.id}
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
                                    onClick={() => toggleLearned(med.id)}
                                    title="Gelernt"
                                  >
                                    <FaCheck />
                                  </span>
                                  <span
                                    className={styles.pauseIconDesktop}
                                    onClick={() => togglePaused(med.id)}
                                    title="Pausiert"
                                  >
                                    <FaPause />
                                  </span>
                                </div>
                                <div className={styles.termContent}>{med.lat}</div>
                              </td>
                              <td>
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      med[translationLanguage] || "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="right"
                                  >
                                    <span className={styles.clickableCell}>{med.de}</span>
                                  </Tippy>
                                ) : (
                                  med.de
                                )}
                              </td>
                              {showDetails && (
                                <td>
                                  {translationLanguage !== "de" ? (
                                    <Tippy
                                      content={
                                        med[translationLanguage + "Explanation"] ||
                                        "Keine Übersetzung vorhanden"
                                      }
                                      trigger="click"
                                      interactive={true}
                                      placement="right"
                                    >
                                      <span className={styles.clickableCell}>
                                        {med.deExplanation}
                                      </span>
                                    </Tippy>
                                  ) : (
                                    med.deExplanation
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
                    {/* Контейнер для перемикача Details */}
                    <div className={styles.definitionColumn} data-tutorial="definitionToggle">
                      <label className={styles.fieldLabel}>Details</label>
                      <div
                        className={`${styles.definitionToggle} ${showDetails ? styles.active : ""}`}
                        onClick={() => {
                          if (requireAuth()) return;
                          setShowDetails((prev) => !prev);
                        }}
                      >
                        <span className={styles.toggleText}>
                          {showDetails ? "An" : "Aus"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Кнопка налаштувань */}
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

export default AllMedicationsPage;