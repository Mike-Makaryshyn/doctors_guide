import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import styles from "./AllMedicationsPage.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
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

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  useMedicationStatus,
  MedicationStatusProvider,
} from "../../../../contexts/MedicationStatusContext";
import { useNavigate } from "react-router-dom";

// Якщо у вас є глобальний хук для вибору мови (selectedLanguage):
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";

import { Helmet } from "react-helmet";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import medicalTerminologyBg from "../../../../assets/medical-terminology-bg.jpg";

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicationsContent = () => {
  const navigate = useNavigate();

  // Контекст для статусів медикаментів
  const { medicationStatuses, toggleStatus } = useMedicationStatus();

  // Авторизація
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Мова (якщо є глобальний контекст)
  const { selectedLanguage } = useGetGlobalInfo();
  const [translationLanguage, setTranslationLanguage] = useState("de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  // Локальні стани
  const [showDefinition, setShowDefinition] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [filterMode, setFilterMode] = useState("all");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const pageRef = useRef(null);
  const settingsModalRef = useRef(null);

  // Хелпер для вимоги авторизації
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Слідкуємо за розміром екрана
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Закриття модалки налаштувань
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

  // Закриття поля пошуку
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

  // Зміна статусів
  const handleToggleLearned = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "learned");
  };
  const handleTogglePaused = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "paused");
  };

  // Навігація
  const handleBack = () => {
    if (requireAuth()) return;
    navigate("/main_menu");
  };
  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/medications-learning");
  };

  // 1) Фільтруємо за пошуком, статусом
  const filteredMeds = medications.filter((med) => {
    const matchesSearch =
      med.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (med[`${translationLanguage}Explanation`] || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const statusObj = medicationStatuses[med.id];
    const status = statusObj?.status || "unlearned";
    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) {
      return false;
    }

    return matchesSearch;
  });

  // 2) Фільтр за категорією
  const medsFilteredByCategory = filteredMeds.filter((med) => {
    if (selectedCategory === "Alle") return true;
    return (med.categories || []).includes(selectedCategory);
  });

  // 3) Збираємо всі категорії (сортуємо за потреби)
  const allCategories = Array.from(
    new Set(medications.flatMap((m) => m.categories || []))
  ).sort();

  // Які категорії рендерити?
  const categoriesToRender =
    selectedCategory === "Alle" ? allCategories : [selectedCategory];

  // Групуємо медикаменти за категоріями
  const medsByCategory = {};
  categoriesToRender.forEach((cat) => {
    medsByCategory[cat] = medsFilteredByCategory.filter((med) =>
      (med.categories || []).includes(cat)
    );
  });

  return (
    <MainLayout>
      {loading ? (
        <p>Daten werden geladen...</p>
      ) : (
        <>
          <Helmet>
            <title>Medikamente - Übersicht</title>
            <meta
              name="description"
              content="Seite für medizinische Fachbegriffe (Medikamente) mit Filter, Suche, Lerne-Status und Übersetzungen."
            />
            <meta name="keywords" content="Medikamente, Fachsprache, Lernen" />
            <meta property="og:image" content={medicalTerminologyBg} />
          </Helmet>

          <div className={styles.allMedicationsPage} ref={pageRef}>
            {/* Кнопка "Назад" */}
            <button className={styles.main_menu_back} onClick={handleBack}>
              &#8592;
            </button>

            {/* Пошук */}
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

            {/* Відображення (мобільні плитки / десктопна таблиця) */}
            {isMobile ? (
              // ------------------ МОБІЛЬНІ "ПЛИТКИ" ------------------
              <div className={styles.tilesContainer}>
                {categoriesToRender.map((category, index) => {
                  const medsInCategory = medsByCategory[category] || [];
                  if (medsInCategory.length === 0) return null;

                  return (
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
                        medsInCategory.map((med) => {
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
                              {/* Іконки learned/paused */}
                              <span
                                className={styles.checkIconDesktop}
                                onClick={() => handleToggleLearned(med.id)}
                                title="Gelernt"
                              >
                                <FaCheck />
                              </span>
                              <span
                                className={styles.pauseIcon}
                                onClick={() => handleTogglePaused(med.id)}
                                title="Pausiert"
                              >
                                <FaPause />
                              </span>

                              {/* Латинська назва (Begri), по кліку показуємо examples (якщо є) */}
                              {med.examples && med.examples.length > 0 ? (
                                <Tippy
                                  content={
                                    <ul style={{ margin: 0, padding: 0 }}>
                                      {med.examples.map((ex) => (
                                        <li key={ex} style={{ listStyle: "none" }}>
                                          {ex}
                                        </li>
                                      ))}
                                    </ul>
                                  }
                                  trigger="click"
                                  interactive={true}
                                  placement="bottom"
                                >
                                  <h3
                                    className={styles.tileHeader}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {med.lat}
                                  </h3>
                                </Tippy>
                              ) : (
                                <h3 className={styles.tileHeader}>{med.lat}</h3>
                              )}

                              {/* Deutsche Bezeichnung (з Tippy для перекладу) */}
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

                              {/* Definition (з Tippy, якщо showDefinition=true) */}
                              {showDefinition && (
                                <p className={styles.tileExplanation}>
                                  {translationLanguage !== "de" ? (
                                    <Tippy
                                      content={
                                        med[translationLanguage + "Explanation"] ||
                                        "Keine Übersetzung vorhanden"
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
                  );
                })}
              </div>
            ) : (
              // ------------------ ДЕСКТОПНА "ТАБЛИЦЯ" ------------------
              categoriesToRender.map((category, index) => {
                const medsInCategory = medsByCategory[category] || [];
                if (medsInCategory.length === 0) return null;

                return (
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
                          {medsInCategory.map((med) => {
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
                                {/* 1) Begriff (латинська назва) + іконки learned/paused */}
                                <td className={styles.termCell}>
                                  <div className={styles.iconWrapper}>
                                    <span
                                      className={styles.checkIconDesktop}
                                      onClick={() => handleToggleLearned(med.id)}
                                      title="Gelernt"
                                    >
                                      <FaCheck />
                                    </span>
                                    <span
                                      className={styles.pauseIconDesktop}
                                      onClick={() => handleTogglePaused(med.id)}
                                      title="Pausiert"
                                    >
                                      <FaPause />
                                    </span>
                                  </div>

                                  {/* По кліку на латинську назву показуємо examples (якщо є) */}
                                  {med.examples && med.examples.length > 0 ? (
                                    <Tippy
                                      content={
                                        <ul style={{ margin: 0, padding: 0 }}>
                                          {med.examples.map((ex) => (
                                            <li key={ex} style={{ listStyle: "none" }}>
                                              {ex}
                                            </li>
                                          ))}
                                        </ul>
                                      }
                                      trigger="click"
                                      interactive={true}
                                      placement="right"
                                    >
                                      <div
                                        className={styles.termContent}
                                        style={{ cursor: "pointer" }}
                                      >
                                        {med.lat}
                                      </div>
                                    </Tippy>
                                  ) : (
                                    <div className={styles.termContent}>{med.lat}</div>
                                  )}
                                </td>

                                {/* 2) Deutsche Bezeichnung (з Tippy для перекладу) */}
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

                                {/* 3) Definition (з Tippy, якщо showDefinition=true) */}
                                {showDefinition && (
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
                );
              })
            )}

            {/* Модалка налаштувань */}
            {isSettingsModalOpen && (
              <div className={styles.modalOverlay}>
                <div
                  className={
                    window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile
                  }
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
                    {/* Filter */}
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

                    {/* Категорія */}
                    <div className={styles.categoryColumn} data-tutorial="categorySelect">
                      <label className={styles.fieldLabel}>Kategorie</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.categoryCell} />
                        <select
                          className={styles.nativeSelect}
                          value={selectedCategory}
                          onChange={(e) => {
                            if (requireAuth()) return;
                            setSelectedCategory(e.target.value);
                          }}
                        >
                          <option value="Alle">Alle</option>
                          {allCategories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Spiel */}
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

                    {/* Definition */}
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

            {/* Кнопка-шестерня (налаштування) */}
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

          {/* Модалка авторизації */}
          <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </>
      )}
    </MainLayout>
  );
};

const AllMedicationsPage = () => {
  return (
    <MedicationStatusProvider>
      <AllMedicationsContent />
    </MedicationStatusProvider>
  );
};

export default AllMedicationsPage;