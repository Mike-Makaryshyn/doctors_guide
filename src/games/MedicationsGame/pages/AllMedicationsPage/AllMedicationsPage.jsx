import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications";
import styles from "./AllMedicationsPage.module.scss";
import { useAuth } from "../../../../hooks/useAuth";
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

// Wichtig: jetzt tatsächlich importieren
import AllMedicationsTutorial from "./AllMedicationsTutorial";

// Mappings für Kategorie-Icons
const categoryIcons = {
  Alle: <FaInfinity className={styles.customIcon} color="white" />,
  Andere: <FaGlasses className={styles.customIcon} color="white" />,
};

const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicationsPageContent = () => {
  const navigate = useNavigate();
  const { medicationStatuses, toggleStatus, scheduleFlushChanges } =
    useMedicationStatus();
  const { user } = useAuth();
  const loading = user === undefined; // treat "undefined" as loading
  const { selectedLanguage } = useGetGlobalInfo();

  // -----------------------
  // Lokale States
  // -----------------------
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

  // Referenzen für Klick-Outside-Logik
  const pageRef = useRef(null);
  const settingsModalRef = useRef(null);

  // -----------------------
  // Tutorial-States
  // -----------------------
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialKey, setTutorialKey] = useState(0);

  // Ob wir die Modal bereits als "abgeschlossen" markieren (damit sie nicht
  // wieder beim nächsten Tutorial-Schritt aufgeht).
  const [tutorialModalCompleted, setTutorialModalCompleted] = useState(false);
  // Referenz aufs Joyride (optional, falls du magst)
  const joyrideRef = useRef(null);

  // Falls wir das Verhalten wollen: sobald wir den Tutorial-Button klicken
  // und showTutorial=true gesetzt ist, öffnen wir automatisch die Settings-Modal.
  // Ab einem bestimmten Schritt (z.B. index >= 6) machen wir .onModalComplete etc.
  useEffect(() => {
    if (showTutorial && !isSettingsModalOpen && !tutorialModalCompleted) {
      setIsSettingsModalOpen(true);
    }
  }, [showTutorial, isSettingsModalOpen, tutorialModalCompleted]);

  // -----------------------
  // Auth / User
  // -----------------------
  const [showAuthModal, setShowAuthModal] = useState(false);
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // -----------------------
  // Effekte
  // -----------------------
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Klick außerhalb des Modals => Modal schließen
  useEffect(() => {
    function handleClickOutside(event) {
      // Nicht schließen, wenn Klick auf den Tutorial-Button
      if (event.target.closest(".tutorialButton")) return;

      // Nicht schließen, falls das Tutorial gerade läuft
      if (showTutorial) return;

      if (
        isSettingsModalOpen &&
        settingsModalRef.current &&
        !settingsModalRef.current.contains(event.target)
      ) {
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

  // Klick außerhalb der Page => Suche zurücksetzen
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

  // -----------------------
  // Tutorial: Abschluss der Modal
  // -----------------------
  const handleModalComplete = () => {
    setIsSettingsModalOpen(false);
    setTutorialModalCompleted(true);
  };

  // -----------------------
  // Handlers
  // -----------------------
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

  const handleBack = () => {
    navigate("/main_menu");
  };

  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/medications-learning");
  };

  const handleCategoryChange = (e) => {
    if (requireAuth()) return;
    setSelectedCategory(e.target.value);
  };

  const handleFilterModeChange = (e) => {
    if (requireAuth()) return;
    setFilterMode(e.target.value);
  };

  // -----------------------
  // Filtern der Medikamente
  // -----------------------
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
    if (
      filterMode === "unlearned" &&
      (status === "learned" || status === "paused")
    )
      return false;

    return matchesSearch;
  });

  // Kategorie-Filter anwenden
  const medsFilteredByCategory = filteredMeds.filter((med) => {
    if (selectedCategory === "Alle") return true;
    return (med.categories || []).includes(selectedCategory);
  });

  // Kategorien ermitteln und "Andere" ans Ende
  let allCategories = Array.from(
    new Set(medications.flatMap((m) => m.categories || []))
  ).sort();
  if (allCategories.includes("Andere")) {
    allCategories = allCategories.filter((cat) => cat !== "Andere");
    allCategories.push("Andere");
  }

  const categoriesToRender =
    selectedCategory === "Alle" ? allCategories : [selectedCategory];
  const medsByCategory = {};
  categoriesToRender.forEach((cat) => {
    medsByCategory[cat] = medsFilteredByCategory.filter((med) =>
      (med.categories || []).includes(cat)
    );
  });

  // -----------------------
  // Render
  // -----------------------
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
              content="Seite für Medikamente mit Filter, Suche, Lernstatus und Übersetzungen."
            />
            <meta name="keywords" content="Medikamente, Fachsprache, Lernen" />
            <meta property="og:image" content={medicalTerminologyBg} />
          </Helmet>

          <div className={styles.allMedicationsPage} ref={pageRef}>
            {/* Back-Button */}
            <button className={styles.main_menu_back} onClick={handleBack}>
              &#8592;
            </button>

            {/* Suchfeld */}
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

            {/* Mobile Darstellung (Tiles) */}
            {isMobile ? (
              <div className={styles.tilesContainer}>
                {categoriesToRender.map((category, index) => {
                  const medsInCategory = medsByCategory[category] || [];
                  if (medsInCategory.length === 0) return null;

                  return (
                    <div key={category} className={styles.categorySection}>
                      <h2
                        onClick={() => {
                          // Beispiel: wir erlauben bei 1. Kategorie das Durchklicken
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
                                data-tutorial="checkIcon"
                                onClick={() => handleToggleLearned(med.id)}
                                title="Gelernt"
                              >
                                <FaCheck />
                              </span>
                              <span
                                className={styles.pauseIcon}
                                data-tutorial="pauseIconMobile"
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
                                        <li
                                          key={ex}
                                          style={{ listStyle: "none" }}
                                        >
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
                                    data-tutorial="termContent"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {med.lat}
                                  </h3>
                                </Tippy>
                              ) : (
                                <h3 className={styles.tileHeader}>{med.lat}</h3>
                              )}

<p className={styles.tileDescription}
                             >
                                
                                {translationLanguage !== "de" ? (
                                  <Tippy
                                    content={
                                      med[translationLanguage] ||
                                      "Keine Übersetzung vorhanden"
                                    }
                                    trigger="click"
                                    interactive={true}
                                    placement="bottom"
                                  >
                                    <span className={styles.clickableCell}>
                                      {med.de}
                                    </span>
                                  </Tippy>
                                ) : (
                                  med.de
                                )}
                              </p>

                              {showDefinition && (
                                <p className={styles.tileExplanation}  data-tutorial="descriptionCell"
>
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
                                      <span
                                        className={styles.clickableCell}
                                        data-tutorial="definitionCell"
                                      >
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
              /* Desktop Darstellung (Tabelle) */
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
                                      data-tutorial="checkIcon"
                                      onClick={() =>
                                        handleToggleLearned(med.id)
                                      }
                                      title="Gelernt"
                                    >
                                      <FaCheck />
                                    </span>
                                    <span
                                      className={styles.pauseIconDesktop}
                                      data-tutorial="pauseIconDesktop"
                                      onClick={() =>
                                        handleTogglePaused(med.id)
                                      }
                                      title="Pausiert"
                                    >
                                      <FaPause />
                                    </span>
                                  </div>

                                  {med.examples && med.examples.length > 0 ? (
                                    <Tippy
                                      content={
                                        <ul
                                          style={{ margin: 0, padding: 0 }}
                                        >
                                          {med.examples.map((ex) => (
                                            <li
                                              key={ex}
                                              style={{
                                                listStyle: "none",
                                              }}
                                            >
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
                                        data-tutorial="termContent"
                                        style={{ cursor: "pointer" }}
                                      >
                                        {med.lat}
                                      </div>
                                    </Tippy>
                                  ) : (
                                    <div className={styles.termContent}>
                                      {med.lat}
                                    </div>
                                  )}
                                </td>

                                <td>
                                  
                                  {translationLanguage !== "de" ? (
                                    <Tippy
                                      content={
                                        med[translationLanguage] ||
                                        "Keine Übersetzung vorhanden"
                                      }
                                      trigger="click"
                                      interactive={true}
                                      placement="right"
                                    >
                                      <span
                                        className={styles.clickableCell}
                                      >
                                        {med.de}
                                      </span>
                                    </Tippy>
                                  ) : (
                                    med.de
                                  )}
                                </td>

                                {showDefinition && (
                                  <td data-tutorial="descriptionCell">
                                    {translationLanguage !== "de" ? (
                                      <Tippy
                                        content={
                                          med[
                                            translationLanguage + "Explanation"
                                          ] || "Keine Übersetzung vorhanden"
                                        }
                                        trigger="click"
                                        interactive={true}
                                        placement="right"
                                      >
                                        <span
                                          className={styles.clickableCell}
                                          data-tutorial="definitionCell"
                                        >
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

            {/* Modal für Einstellungen */}
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
                    <div
                      className={styles.filterColumn}
                      data-tutorial="filterColumn"
                    >
                      <label className={styles.fieldLabel}>Filter</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.filterCell}>
                          {
                            filterModes.find(
                              (m) => m.value === filterMode
                            )?.icon
                          }
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
                          {selectedCategory === "Andere" ? (
                            <FaGlasses className={styles.customIcon} />
                          ) : categoryIcons[selectedCategory] ? (
                            categoryIcons[selectedCategory]
                          ) : (
                            <span className={styles.categoryLetter}>
                              {selectedCategory
                                .charAt(0)
                                .toUpperCase()}
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
                      <label className={styles.fieldLabel}>
                        Definition
                      </label>
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

                {/* Tutorial-Button oben links im Modal */}
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
                    // Falls gewünscht, localStorage zurücksetzen:
                    localStorage.removeItem("allMedicationsTutorialCompleted");
                    setTutorialKey((prev) => prev + 1);
                    setTutorialModalCompleted(false);
                    setShowTutorial(true);
                    // Wir erzwingen das Offenbleiben der Modal
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
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#ededed"
                      fill="none"
                    />
                    <line
                      x1="12"
                      y1="12"
                      x2="12"
                      y2="15.5"
                      strokeWidth="3"
                    />
                    <circle cx="12" cy="7" r="0.5" fill="#ededed" />
                  </svg>
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

          {/* Tutorial-Komponente */}
          {showTutorial && (
            <AllMedicationsTutorial
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

          {/* Auth Modal */}
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
          />
        </>
      )}
    </MainLayout>
  );
};

const AllMedicationsPage = () => {
  return (
    <MedicationStatusProvider>
      <AllMedicationsPageContent />
    </MedicationStatusProvider>
  );
};

export default AllMedicationsPage;