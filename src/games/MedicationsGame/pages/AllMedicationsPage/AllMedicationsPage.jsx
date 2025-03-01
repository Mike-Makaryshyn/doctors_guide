import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import styles from "./AllMedicationsPage.module.scss"; // Aktualisierte Styles
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
  FaInfinity,
  FaGlasses,
} from "react-icons/fa";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  useMedicationStatus,
  MedicationStatusProvider,
} from "../../../../contexts/MedicationStatusContext";
import { useNavigate } from "react-router-dom";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { Helmet } from "react-helmet";
import AuthModal from "../../../../pages/AuthPage/AuthModal";
import medicalTerminologyBg from "../../../../assets/medical-terminology-bg.jpg";

// Мапінг категорій для селектора
const categoryIcons = {
  Alle: <FaInfinity className={styles.customIcon} />,
  Andere: <FaGlasses className={styles.customIcon} />,
};

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicationsContent = () => {
  const navigate = useNavigate();
  const { medicationStatuses, toggleStatus } = useMedicationStatus();
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { selectedLanguage } = useGetGlobalInfo();
  const [translationLanguage, setTranslationLanguage] = useState("de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

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

  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleToggleLearned = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "learned");
  };

  const handleTogglePaused = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "paused");
  };

  const handleBack = () => {
    navigate("/main_menu");
  };

  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/medications-learning");
  };

  const filteredMeds = medications.filter((med) => {
    const matchesSearch =
      med.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (med[`${translationLanguage}Explanation`] || "").toLowerCase().includes(searchTerm.toLowerCase());
    const statusObj = medicationStatuses[med.id];
    const status = statusObj?.status || "unlearned";
    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) return false;
    return matchesSearch;
  });

  const medsFilteredByCategory = filteredMeds.filter((med) => {
    if (selectedCategory === "Alle") return true;
    return (med.categories || []).includes(selectedCategory);
  });

  let allCategories = Array.from(new Set(medications.flatMap((m) => m.categories || []))).sort();

  // Перемістити "Andere" в кінець списку
  allCategories = allCategories.filter(cat => cat !== "Andere");
  allCategories.push("Andere");
  const categoriesToRender = selectedCategory === "Alle" ? allCategories : [selectedCategory];
  const medsByCategory = {};
  categoriesToRender.forEach((cat) => {
    medsByCategory[cat] = medsFilteredByCategory.filter((med) => (med.categories || []).includes(cat));
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
          <div className={styles.allMedicalTerminologyPage} ref={pageRef}>
            <button className={styles.main_menu_back} onClick={handleBack}>
              &#8592;
            </button>

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

            {isMobile ? (
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
                                  <h3 className={styles.tileHeader} style={{ cursor: "pointer" }}>
                                    {med.lat}
                                  </h3>
                                </Tippy>
                              ) : (
                                <h3 className={styles.tileHeader}>{med.lat}</h3>
                              )}
                              <p className={styles.tileDescription}>
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={med[translationLanguage] || "Keine Übersetzung vorhanden"}
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
                      <table
                        className={
                          !isMobile && !showDefinition
                            ? `${styles.terminologyTable} ${styles.noDefinition}`
                            : styles.terminologyTable
                        }
                      >
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
                                      <div className={styles.termContent} style={{ cursor: "pointer" }}>
                                        {med.lat}
                                      </div>
                                    </Tippy>
                                  ) : (
                                    <div className={styles.termContent}>{med.lat}</div>
                                  )}
                                </td>
                                <td>
                                  {translationLanguage !== "de" ? (
                                    <Tippy
                                      content={med[translationLanguage] || "Keine Übersetzung vorhanden"}
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
                                        <span className={styles.clickableCell}>{med.deExplanation}</span>
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

            {isSettingsModalOpen && (
              <div className={styles.modalOverlay}>
                <div
                  className={window.innerWidth > 768 ? styles.popupDesktopWide : styles.popupMobile}
                  ref={settingsModalRef}
                >
                  <button className={styles.modalCloseButton} onClick={() => setIsSettingsModalOpen(false)}>
                    ×
                  </button>
                  <h2 className={styles.modalTitle}>Einstellungen</h2>
                  <div className={styles.row}>
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

                    {/* Оновлено: Селектор категорій */}
                    <div className={styles.categoryColumn} data-tutorial="categorySelect">
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
  onChange={(e) => {
    if (requireAuth()) return;
    setSelectedCategory(e.target.value);
  }}
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