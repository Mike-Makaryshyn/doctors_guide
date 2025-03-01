import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medications } from "../../../../constants/medications"; 
// ↑ Масив об'єктів медикаментів (аналогічно до medicalTerms)
import styles from "./AllMedicationsPage.module.scss"; 
// ↑ Скопіюйте або створіть файл зі стилями (див. нижче)
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

// Якщо треба тягнути "selectedLanguage" чи інше, можна використати власний хук
// import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo"; 

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Контекст для статусів медикаментів
import { useMedicationStatus, MedicationStatusProvider } from "../../../../contexts/MedicationStatusContext";

// Для навігації
import { useNavigate } from "react-router-dom";

// Якщо є іконки для категорій — можна підключити
// import { categoryIcons } from "../../../../constants/CategoryIcons";

// SEO
import { Helmet } from "react-helmet";

// Модалка авторизації
import AuthModal from "../../../../pages/AuthPage/AuthModal";

// (Якщо маєте фон-картинку для OG, як у термінології)
import medicalTerminologyBg from "../../../../assets/medical-terminology-bg.jpg";

// ---------------------------------------------------------------------
// Алфавітний фільтр: "Alle", A-Z, "Under" (все, що не починається з латинської літери)
const alphabetOptions = [
  "Alle",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "Under",
];

// Інші фільтри (learned, unlearned, paused)
const filterModes = [
  { value: "all", icon: <FaList />, label: "Alle" },
  { value: "learned", icon: <FaCheck />, label: "Gelernt" },
  { value: "unlearned", icon: <FaPlay />, label: "Ungelernt" },
  { value: "paused", icon: <FaPause />, label: "Pausiert" },
];

const AllMedicationsContent = () => {
  const navigate = useNavigate();

  // Підтягнути статуси медикаментів із контексту
  const { medicationStatuses, toggleStatus } = useMedicationStatus();

  // Якщо треба затримка збереження, можна використати щось на кшталт scheduleFlushChanges() —
  // але в MedicationStatusContext це можна реалізувати інакше. Тож пропускаємо.

  // Якщо треба глобальні налаштування (наприклад, мову):
  // const { selectedLanguage } = useGetGlobalInfo();
  // const translationLanguage = selectedLanguage || "de";

  // Або просто залишимо можливість перемикати мови вручну (тут не будемо, аби не ускладнювати).

  // Авторизація
  const [user, loading] = useAuthState(auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Локальні стани
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [filterMode, setFilterMode] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [showDefinition, setShowDefinition] = useState(true);

  // Новий стан для алфавітного фільтра
  const [selectedLetter, setSelectedLetter] = useState("Alle");

  // Для мобільного/десктопного відображення
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Для згортання категорій
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Модалка налаштувань
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // Рефи
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

  // Слухаємо зміни розміру вікна, щоб перемикати мобільний/десктоп
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Закривати поле пошуку при кліку поза ним
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

  // Закриття модалки налаштувань при кліку поза нею
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

  // Клік на кнопці "Back"
  const handleBack = () => {
    if (requireAuth()) return;
    navigate("/main_menu");
  };

  // Клік на "Spiel" (гру) — можете вести на /medications-learning чи куди треба
  const handleGameClick = () => {
    if (requireAuth()) return;
    navigate("/medications-learning");
  };

  // Зміна статусу (learned/paused)
  const handleToggleLearned = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "learned");
  };
  const handleTogglePaused = (id) => {
    if (requireAuth()) return;
    toggleStatus(id, "paused");
  };

  // Фільтр за пошуком, категорією, статусом і алфавітною літерою
  const filteredMeds = medications.filter((med) => {
    // Пошук (за lat, de, deExplanation — можна додати інші)
    const matchesSearch =
      med.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (med.deExplanation || "").toLowerCase().includes(searchTerm.toLowerCase());

    // Категорія
    const matchesCategory =
      selectedCategory === "Alle" ||
      (med.categories || []).includes(selectedCategory);

    // Статус
    const statusObj = medicationStatuses[med.id];
    const status = statusObj?.status || "unlearned";
    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) {
      return false;
    }

    // Алфавіт
    // - Якщо "Alle", пропускаємо
    // - Якщо "Under", лишаємо ті, що не починаються з [A-Za-z]
    // - Інакше порівнюємо з selectedLetter
    let matchesLetter = true;
    if (selectedLetter !== "Alle") {
      const firstChar = med.lat.charAt(0).toUpperCase();
      if (selectedLetter === "Under") {
        // Перевірка: якщо перша літера не A-Z
        matchesLetter = !/^[A-Z]$/.test(firstChar);
      } else {
        // Перевірка: якщо перша літера == selectedLetter
        matchesLetter = firstChar === selectedLetter;
      }
    }

    return matchesSearch && matchesCategory && matchesLetter;
  });

  // Розбиваємо за категоріями (як у термінології)
  const medsByCategory = {};
  filteredMeds.forEach((med) => {
    (med.categories || []).forEach((cat) => {
      if (!medsByCategory[cat]) medsByCategory[cat] = [];
      medsByCategory[cat].push(med);
    });
  });

  // Унікальні категорії
  const uniqueCategories = Array.from(
    new Set(medications.flatMap((m) => m.categories || []))
  );

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
              content="Seite für medizinische Fachbegriffe (Medikamente) mit Filter, Suche und Lerne-Status."
            />
            <meta
              name="keywords"
              content="Medikamente, Laxative, Abführmittel, Fachsprache, Lernen"
            />
            <meta property="og:image" content={medicalTerminologyBg} />
          </Helmet>

          <div className={styles.allMedicationsPage} ref={pageRef}>
            {/* Кнопка Back */}
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

            {/* Відображення (мобільна/десктопна) */}
            {isMobile ? (
              // ----------------- МОБІЛЬНІ "ПЛИТКИ" -----------------
              <div className={styles.tilesContainer}>
                {Object.keys(medsByCategory).map((category, index) => (
                  <div key={category} className={styles.categorySection}>
                    <h2
                      onClick={() => {
                        // Якщо хочете дозволити відкривати тільки першу категорію без логіну —
                        // робимо як у прикладі: if (!user && index !== 0) ...
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
                            <h3 className={styles.tileHeader}>{med.lat}</h3>
                            {/* Якщо треба багатомовність, робимо Tippy, як у термінології */}
                            <p className={styles.tileDescription}>{med.de}</p>
                            {showDefinition && (
                              <p className={styles.tileExplanation}>
                                {med.deExplanation}
                              </p>
                            )}
                          </div>
                        );
                      })}
                  </div>
                ))}
              </div>
            ) : (
              // ----------------- ДЕСКТОПНА "ТАБЛИЦЯ" -----------------
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
                                <div className={styles.termContent}>{med.lat}</div>
                              </td>
                              <td>{med.de}</td>
                              {showDefinition && <td>{med.deExplanation}</td>}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              ))
            )}

            {/* Модалка налаштувань (шестерня внизу праворуч) */}
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
                    className={styles.modalCloseButton}
                    onClick={() => setIsSettingsModalOpen(false)}
                  >
                    ×
                  </button>
                  <h2 className={styles.modalTitle}>Einstellungen</h2>

                  <div className={styles.row}>
                    {/* Алфавітний фільтр (замість регіонів) */}
                    <div className={styles.regionColumn} data-tutorial="alphabetSelect">
                      <label className={styles.fieldLabel}>Alphabet</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.regionCell}>{selectedLetter}</div>
                        <select
                          className={styles.nativeSelect}
                          value={selectedLetter}
                          onChange={(e) => {
                            if (requireAuth()) return;
                            setSelectedLetter(e.target.value);
                          }}
                        >
                          {alphabetOptions.map((letter) => (
                            <option key={letter} value={letter}>
                              {letter}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Фільтр learned/paused/unlearned */}
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

                    {/* Категорія (якщо треба) */}
                    <div className={styles.categoryColumn} data-tutorial="categorySelect">
                      <label className={styles.fieldLabel}>Kategorie</label>
                      <div className={styles.selectWrapper}>
                        <div className={styles.categoryCell}>
                          {/* Якщо хочете іконку категорії — використайте categoryIcons */}
                          {/* {categoryIcons[selectedCategory] && (
                            <img
                              src={categoryIcons[selectedCategory]}
                              alt={selectedCategory}
                              className={styles.categoryIcon}
                            />
                          )} */}
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
                          {uniqueCategories.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Кнопка "Spiel" (аналог Game) */}
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

                    {/* Перемикач Definition */}
                    <div className={styles.definitionColumn} data-tutorial="definitionToggle">
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

            {/* Кнопка-шестерня (відкрити модалку) */}
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

          {/* Модалка авторизації (якщо користувач не залогінений) */}
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