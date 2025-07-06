// Цей файл вже адаптований для роботи з Supabase, ніякі зміни не потрібні.
// Цей код тепер використовує Supabase.
import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations } from "../../../../constants/medicalAbbreviations";
import styles from "./AllMedicalAbbreviationsPage.module.scss";
import {
  FaCog,
  FaCheck,
  FaPause,
  FaGamepad,
  FaList,
  FaPlay,
  FaTimes,
  FaSearch,
  FaInfinity,
  FaGlasses,
  FaBookMedical, // <-- Додали іконку для Definition
} from "react-icons/fa";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  useAbbreviationsStatus,
  AbbreviationsStatusProvider,
} from "../../../../contexts/AbbreviationsStatusContext";

import { useNavigate } from "react-router-dom";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { Helmet } from "react-helmet";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import bgImage from "../../../../assets/medical-terminology-bg.jpg";

// Імпорт туторіалу (див. код нижче)
import AllMedicalAbbreviationsTutorial from "./AllMedicalAbbreviationsTutorial";

// Mappings für Kategorie-Icons (kann bei Bedarf erweitert werden)
const categoryIcons = {
  Alle: <FaInfinity className={styles.customIcon} color="white" />,
  Andere: <FaGlasses className={styles.customIcon} color="white" />,
};

// Mögliche Filter-Modi (Lernstatus)
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicalAbbreviationsPageContent = () => {
  const navigate = useNavigate();
  const { abbreviationStatuses, toggleStatus, scheduleFlushChanges } =
    useAbbreviationsStatus();
  const { selectedLanguage } = useGetGlobalInfo();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [translationLanguage, setTranslationLanguage] = useState("de");
  const [showDefinition, setShowDefinition] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [filterMode, setFilterMode] = useState("all");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ---- ТУТОРІАЛ: нові стани ----
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialKey, setTutorialKey] = useState(0);
  const [tutorialModalCompleted, setTutorialModalCompleted] = useState(false);
  const joyrideRef = useRef(null);

  const pageRef = useRef(null);
  const settingsModalRef = useRef(null);

  // Приклад простої "авторизації" (завжди false => відкриває модал)
  const requireAuth = () => {
    if (!true) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Підхоплюємо глобальну мову (якщо є)
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  // Відслідковуємо розмір вікна (для mobile/desktop)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Закривати модалку налаштувань при кліку поза нею
  useEffect(() => {
    function handleClickOutside(event) {
      // Якщо клік відбувається по елементу з класом "tutorialButton", нічого не робимо
      if (event.target.closest(".tutorialButton")) return;
      // Якщо туторіал активний, також не закриваємо модалку
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

  // Закривати пошук при кліку поза сторінкою
  useEffect(() => {
    const handleClickOutsidePage = (event) => {
      if (
        isSearchActive &&
        pageRef.current &&
        !pageRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutsidePage);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsidePage);
  }, [isSearchActive]);

  // ---- ТУТОРІАЛ: якщо він увімкнений, а модалка налаштувань ще не відкрита,
  // і ми ще не завершили туторіал => відкрити
  useEffect(() => {
    if (showTutorial && !isSettingsModalOpen && !tutorialModalCompleted) {
      setIsSettingsModalOpen(true);
    }
  }, [showTutorial, isSettingsModalOpen, tutorialModalCompleted]);

  // ---- ТУТОРІАЛ: функція, що закриває модалку і позначає її як пройдену
  const handleModalComplete = () => {
    setIsSettingsModalOpen(false);
    setTutorialModalCompleted(true);
  };

  // Функції для зміни статусу (learned/paused)
  const handleToggleLearned = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  const handleTogglePaused = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "paused");
    scheduleFlushChanges();
  };

  // Навігація
  const handleBack = () => {
    navigate("/main_menu");
  };

  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/abbreviations-learning");
  };

  // 1) Фільтрація за пошуком + статусом
  const filteredAbbr = medicalAbbreviations.filter((abbr) => {
    const matchesSearch =
      abbr.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (abbr.explanation[translationLanguage] || abbr.explanation.de)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const status = abbreviationStatuses[abbr.id]?.status || "unlearned";
    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (
      filterMode === "unlearned" &&
      (status === "learned" || status === "paused")
    )
      return false;

    return matchesSearch;
  });

  // 2) Фільтр за категоріями
  const abbrFilteredByCategory = filteredAbbr.filter((abbr) => {
    if (selectedCategory === "Alle") return true;
    return (abbr.categories || []).includes(selectedCategory);
  });

  // 3) Збираємо всі категорії, "Andere" переносимо в кінець
  let allCategories = Array.from(
    new Set(medicalAbbreviations.flatMap((a) => a.categories || []))
  ).sort();
  if (allCategories.includes("Andere")) {
    allCategories = allCategories.filter((cat) => cat !== "Andere");
    allCategories.push("Andere");
  }

  // Які категорії реально рендеримо
  const categoriesToRender =
    selectedCategory === "Alle" ? allCategories : [selectedCategory];

  // 4) Групуємо абревіатури по категоріях
  const abbrByCategory = {};
  categoriesToRender.forEach((cat) => {
    abbrByCategory[cat] = abbrFilteredByCategory.filter((abbr) =>
      (abbr.categories || []).includes(cat)
    );
  });

  // Обробники вибору фільтра/категорії
  const handleFilterModeChange = (e) => {
    if (requireAuth()) return;
    setFilterMode(e.target.value);
  };

  const handleCategoryChange = (e) => {
    if (requireAuth()) return;
    setSelectedCategory(e.target.value);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Abkürzungen - Übersicht</title>
        <meta
          name="description"
          content="Seite für medizinische Abkürzungen mit Filter, Suche, Lernstatus und Übersetzungen."
        />
        <meta name="keywords" content="Abkürzungen, Medizin, Lernen" />
        <meta property="og:image" content={bgImage} />
      </Helmet>

      <div className={styles.allMedicalAbbreviationsPage} ref={pageRef}>
        {/* Кнопка "Назад" */}


        {/* Поле пошуку (додаємо data-tutorial) */}
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
              if (requireAuth()) return;
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

        {/* Дані */}
        {isMobile
          ? // --- MOBILE: плитки ---
            categoriesToRender.map((cat) => {
              const abbrInCategory = abbrByCategory[cat] || [];
              if (abbrInCategory.length === 0) return null;

              return (
                <div key={cat} className={styles.categorySection}>
                  <h2
                    onClick={() =>
                      setCollapsedCategories((prev) => ({
                        ...prev,
                        [cat]: !prev[cat],
                      }))
                    }
                    className={styles.categoryHeader}
                    data-tutorial="categoryHeader"
                  >
                    {cat}
                    <span className={styles.collapseIcon}>
                      {collapsedCategories[cat] ? "▼" : "▲"}
                    </span>
                  </h2>

                  {!collapsedCategories[cat] &&
                    abbrInCategory.map((abbr) => {
                      const status =
                        abbreviationStatuses[abbr.id]?.status || "unlearned";
                      return (
                        <div
                          key={abbr.id}
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
                            onClick={() => handleToggleLearned(abbr.id)}
                            title="Gelernt"
                          >
                            <FaCheck />
                          </span>
                          <span
                            data-tutorial="pauseIconMobile"
                            className={styles.pauseIcon}
                            onClick={() => handleTogglePaused(abbr.id)}
                            title="Pausiert"
                          >
                            <FaPause />
                          </span>

                          <h3 className={styles.tileHeader}>
                            {abbr.abbreviation}
                          </h3>
                          {/* name */}
                          <p className={styles.tileDescription}>
                          {translationLanguage !== "de" ? (
                              <Tippy
                                content={
                                  abbr.name || "Keine Übersetzung vorhanden"
                                }
                                trigger="click"
                                interactive={true}
                                placement="bottom"
                              >
                                <span className={styles.clickableCell}>
                                  {abbr.name}
                                </span>
                              </Tippy>
                            ) : showDefinition ? (
                              abbr.name
                            ) : (
                              <Tippy
                                content={abbr.explanation.de}
                                trigger="click"
                                interactive={true}
                                placement="bottom"
                              >
                                <span className={styles.clickableCell}>
                                  {abbr.name}
                                </span>
                              </Tippy>
                            )}
                          </p>
                          {/* Definition */}
                          {showDefinition && (
                            <p className={styles.tileExplanation}>
                              {translationLanguage !== "de" ? (
                                <Tippy
                                  content={
                                    abbr.explanation[translationLanguage] ||
                                    abbr.explanation.de
                                  }
                                  trigger="click"
                                  interactive={true}
                                  placement="bottom"
                                >
                                  <span
                                    className={styles.clickableCell}
                                    data-tutorial="definitionCell"
                                  >
                                    {abbr.explanation.de}
                                  </span>
                                </Tippy>
                              ) : (
                                <span data-tutorial="definitionCell">
                                  {abbr.explanation.de}
                                </span>
                              )}
                            </p>
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })
          : // --- DESKTOP: таблиця ---
            categoriesToRender.map((cat) => {
              const abbrInCategory = abbrByCategory[cat] || [];
              if (abbrInCategory.length === 0) return null;

              return (
                <div key={cat} className={styles.categorySection}>
                  <h2
                    onClick={() =>
                      setCollapsedCategories((prev) => ({
                        ...prev,
                        [cat]: !prev[cat],
                      }))
                    }
                    className={styles.categoryHeader}
                    data-tutorial="categoryHeader"
                  >
                    {cat}
                    <span className={styles.collapseIcon}>
                      {collapsedCategories[cat] ? "▼" : "▲"}
                    </span>
                  </h2>

                  {!collapsedCategories[cat] && (
                    <table className={styles.terminologyTable}>
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
                          <th
                            style={{
                              width: showDefinition ? "20%" : "50%",
                              textAlign: "left",
                            }}
                          >
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
                        {abbrInCategory.map((abbr) => {
                          const status =
                            abbreviationStatuses[abbr.id]?.status ||
                            "unlearned";
                          return (
                            <tr
                              key={abbr.id}
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
                                    onClick={() => handleToggleLearned(abbr.id)}
                                    title="Gelernt"
                                  >
                                    <FaCheck />
                                  </span>
                                  <span
                                    data-tutorial="pauseIconDesktop"
                                    className={styles.pauseIconDesktop}
                                    onClick={() => handleTogglePaused(abbr.id)}
                                    title="Pausiert"
                                  >
                                    <FaPause />
                                  </span>
                                </div>
                                <div
                                  className={styles.termContent}
                                  style={{ cursor: "pointer" }}
                                >
                                  {abbr.abbreviation}
                                </div>
                              </td>
                              <td>
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      abbr.name || "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="right"
                                  >
                                    <span
                                      className={styles.clickableCell}
                                    
                                    >
                                      {abbr.name}
                                    </span>
                                  </Tippy>
                                ) : showDefinition ? (
                                  abbr.name
                                ) : (
                                  <Tippy
                                    content={abbr.explanation.de}
                                    trigger="click"
                                    interactive={true}
                                    placement="right"
                                  >
                                    <span
                                      className={styles.clickableCell}
                                     
                                    >
                                      {abbr.name}
                                    </span>
                                  </Tippy>
                                )}
                              </td>
                              {showDefinition && (
                                <td>
                                  {translationLanguage !== "de" ? (
                                    <Tippy
                                      content={
                                        abbr.explanation[translationLanguage] ||
                                        abbr.explanation.de
                                      }
                                      trigger="click"
                                      interactive={true}
                                      placement="right"
                                    >
                                      <span
                                        className={styles.clickableCell}
                                        data-tutorial="definitionCell"
                                      >
                                        {abbr.explanation.de}
                                      </span>
                                    </Tippy>
                                  ) : (
                                    <span data-tutorial="definitionCell">
                                      {abbr.explanation.de}
                                    </span>
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
              );
            })}

        {/* Модалка налаштувань */}
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
                onClick={() => setIsSettingsModalOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <div className={styles.row}>
                {/* Filter (Lernstatus) */}
                <div
                  className={styles.filterColumn}
                  data-tutorial="filterColumn"
                >
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

                {/* Kategorie-Auswahl */}
                <div
                  className={styles.categoryColumn}
                  data-tutorial="categorySelect"
                >
                  <label className={styles.fieldLabel}>Kategorie</label>
                  <div className={styles.selectWrapper}>
                    <div className={styles.categoryCell}>
                      {selectedCategory === "Andere" ? (
                        <FaGlasses className={styles.customIcon} />
                      ) : categoryIcons[selectedCategory] ? (
                        categoryIcons[selectedCategory]
                      ) : (
                        <span className={styles.categoryLetter}>
                          {selectedCategory.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <select
                      className={styles.nativeSelect}
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="Alle">Alle</option>
                      {allCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat === "Andere" ? "Andere" : cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Spiel-Button */}
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

                {/* Definition an/aus */}
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

        {/* Кнопка для відкриття налаштувань */}
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

        {/* Кнопка для перезапуску туторіалу (з'являється, коли модалка відкрита) */}
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
                "allMedicalAbbreviationsTutorialCompleted"
              );
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

      {/* AuthModal (демо) */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />

      {/* Туторіал (Joyride) */}
      {showTutorial && (
        <AllMedicalAbbreviationsTutorial
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
    </MainLayout>
  );
};

const AllMedicalAbbreviationsPage = () => {
  return (
    <AbbreviationsStatusProvider>
      <AllMedicalAbbreviationsPageContent />
    </AbbreviationsStatusProvider>
  );
};

export default AllMedicalAbbreviationsPage;
