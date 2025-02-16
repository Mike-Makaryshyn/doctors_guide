// AllMedicalTerminologyPage.js
import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { FaCog, FaCheck, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useTermStatus } from "../../contexts/TermStatusContext"; // шлях до контексту

// Функція для уніфікації регіону
const unifyRegion = (r) => (r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r);

const AllMedicalTerminologyPage = () => {
  const { termStatuses, toggleStatus } = useTermStatus();

  const { selectedRegion, selectedLanguage, languages } = useGetGlobalInfo();

  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  const [translationLanguage, setTranslationLanguage] = useState(selectedLanguage || "de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  const [selectedCategory, setSelectedCategory] = useState("Всі");
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Стан для режиму фільтрації
  const [filterMode, setFilterMode] = useState("all");

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const settingsModalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsModalRef.current && !settingsModalRef.current.contains(event.target)) {
        setIsSettingsModalOpen(false);
      }
    };
    if (isSettingsModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsModalOpen]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функції для перемикання статусу
  const toggleLearned = (id) => {
    toggleStatus(id, "learned");
  };

  const togglePaused = (id) => {
    toggleStatus(id, "paused");
  };

  const uniqueRegions = Array.from(
    new Set(
      medicalTerms.flatMap((term) =>
        (term.regions || []).map((r) => unifyRegion(r))
      )
    )
  );
  const regionOptions = ["Усі", ...uniqueRegions];

  const uniqueCategories = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  const localLangOptions = (languages[selectedLanguage]?.options) || languages["de"].options;

  // Фільтрація термінів
  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.deExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Всі" || (term.categories || []).includes(selectedCategory);
    const matchesRegion =
      region === "Усі" || (term.regions || []).some((r) => unifyRegion(r) === region);
    let base = matchesSearch && matchesCategory && matchesRegion;

    // Отримуємо статус терміну з контексту
    const status = termStatuses[term.id] || "unlearned";
    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) return false;
    return base;
  });

  // Групування термінів за категоріями
  const termsByCategory = {};
  filteredTerms.forEach((term) => {
    (term.categories || []).forEach((category) => {
      if (!termsByCategory[category]) {
        termsByCategory[category] = [];
      }
      termsByCategory[category].push(term);
    });
  });

  const handleRegionChange = (e) => setRegion(unifyRegion(e.target.value));
  const handleTranslationChange = (e) => setTranslationLanguage(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleFilterModeChange = (e) => setFilterMode(e.target.value);

  // Функції збереження
  const saveToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Вибрані медичні терміни", 10, 10);
    const tableData = selectedDefinitions.map((termId) => {
      const term = medicalTerms.find((term) => term.id === termId);
      return [term.lat, term.de, term.deExplanation];
    });
    doc.autoTable({
      head: [["Латинська назва", "Німецька назва", "Означення"]],
      body: tableData,
      startY: 20,
      styles: { font: "Helvetica", fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [52, 152, 219], textColor: 255, halign: "center" },
      bodyStyles: { textColor: [33, 33, 33] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });
    doc.save("selected_terms.pdf");
    setShowSaveModal(false);
  };

  const saveToPersonalAccount = async () => {
    if (!auth.currentUser) {
      alert("Будь ласка, увійдіть у систему, щоб зберегти дані!");
      return;
    }
    try {
      const termsCollection = collection(db, `users/${auth.currentUser.uid}/savedTerms`);
      for (const termId of selectedDefinitions) {
        const termDoc = doc(termsCollection, termId.toString());
        await setDoc(termDoc, { id: termId });
      }
      alert("Вибрані терміни успішно збережені у вашому особистому кабінеті!");
    } catch (error) {
      console.error("Помилка при збереженні:", error);
      alert("Сталася помилка. Спробуйте пізніше.");
    }
    setShowSaveModal(false);
  };

  // Функція переходу до гри з флешкартками. Передаємо параметри фільтрації через query-параметри.
  const goToFlashcardGame = () => {
    const queryParams = new URLSearchParams({
      filterMode,
      region,
      category: selectedCategory,
    }).toString();
    window.location.href = `/flashcard-game?${queryParams}`;
  };

  return (
    <MainLayout>
      <div className={styles.allMedicalTerminologyPage}>
        <h1>Уся медична термінологія</h1>

        {/* Пошук */}
        <input
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        {/* Відображення термінів за категоріями */}
        {isMobile ? (
          <div className={styles.tilesContainer}>
            {Object.keys(termsByCategory).map((category) => (
              <div key={category} className={styles.categorySection}>
                <h2
                  onClick={() =>
                    setCollapsedCategories((prev) => ({
                      ...prev,
                      [category]: !prev[category],
                    }))
                  }
                  className={styles.categoryHeader}
                >
                  {category}
                  <span className={styles.collapseIcon}>
                    {collapsedCategories[category] ? "▼" : "▲"}
                  </span>
                </h2>
                {!collapsedCategories[category] &&
                  termsByCategory[category].map((term) => (
                    <div
                      key={term.id}
                      className={`${styles.tile} ${
                        (termStatuses[term.id] || "unlearned") === "learned"
                          ? styles.learned
                          : ""
                      } ${
                        (termStatuses[term.id] || "unlearned") === "paused"
                          ? styles.paused
                          : ""
                      }`}
                    >
                      {/* Іконки для вивчених/паузованих */}
                      <span
                        className={styles.checkIcon}
                        onClick={() => toggleLearned(term.id)}
                        title="Вивчене"
                      >
                        <FaCheck />
                      </span>
                      <span
                        className={styles.pauseIcon}
                        onClick={() => togglePaused(term.id)}
                        title="Пауза"
                      >
                        <FaPause />
                      </span>
                      <h3 className={styles.tileHeader}>{term.lat}</h3>
                      <p className={styles.tileDescription}>
                        {translationLanguage !== "de" ? (
                          <Tippy
                            content={term[translationLanguage] || "Немає перекладу"}
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
                      {showDefinitions && (
                        <p className={styles.tileExplanation}>
                          {translationLanguage !== "de" ? (
                            <Tippy
                              content={
                                term[translationLanguage + "Explanation"] ||
                                "Немає перекладу"
                              }
                              trigger="click"
                              interactive={true}
                              placement="bottom"
                            >
                              <span className={styles.clickableCell}>{term.deExplanation}</span>
                            </Tippy>
                          ) : (
                            term.deExplanation
                          )}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ) : (
          Object.keys(termsByCategory).map((category) => (
            <div key={category} className={styles.categorySection}>
              <h2
                onClick={() =>
                  setCollapsedCategories((prev) => ({
                    ...prev,
                    [category]: !prev[category],
                  }))
                }
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
                      <th>Латинська назва</th>
                      <th>Німецька назва</th>
                      {showDefinitions && <th>Означення</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {termsByCategory[category].map((term) => (
                      <tr
                        key={term.id}
                        className={`
                          ${
                            (termStatuses[term.id] || "unlearned") === "learned"
                              ? styles.learned
                              : ""
                          }
                          ${
                            (termStatuses[term.id] || "unlearned") === "paused"
                              ? styles.paused
                              : ""
                          }
                        `}
                      >
                        <td className={styles.termCell}>
                          <span
                            className={styles.checkIconDesktop}
                            onClick={() => toggleLearned(term.id)}
                            title="Вивчене"
                          >
                            <FaCheck />
                          </span>
                          <span
                            className={styles.pauseIconDesktop}
                            onClick={() => togglePaused(term.id)}
                            title="Пауза"
                          >
                            <FaPause />
                          </span>
                          {term.lat}
                        </td>
                        <td>
                          {translationLanguage !== "de" ? (
                            <Tippy
                              content={term[translationLanguage] || "Немає перекладу"}
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
                        {showDefinitions && (
                          <td>
                            {translationLanguage !== "de" ? (
                              <Tippy
                                content={
                                  term[translationLanguage + "Explanation"] ||
                                  "Немає перекладу"
                                }
                                trigger="click"
                                interactive={true}
                                placement="right"
                              >
                                <span className={styles.clickableCell}>{term.deExplanation}</span>
                              </Tippy>
                            ) : (
                              term.deExplanation
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))
        )}

        {/* Модальне вікно для збереження */}
        {showSaveModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Куди зберегти?</h2>
              <p>Оберіть спосіб збереження:</p>
              <div className={styles.modalActions}>
                <button className={styles.actionButton} onClick={saveToPersonalAccount}>
                  Особистий кабінет
                </button>
                <button className={styles.actionButton} onClick={saveToPDF}>
                  Зберегти у PDF
                </button>
              </div>
              <button className={styles.closeButton} onClick={() => setShowSaveModal(false)}>
                Закрити
              </button>
            </div>
          </div>
        )}

        {/* Кнопка для відкриття налаштувань */}
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsSettingsModalOpen(true)}>
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно налаштувань */}
        {isSettingsModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={settingsModalRef}>
              <button className={styles.modalCloseButton} onClick={() => setIsSettingsModalOpen(false)}>
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Налаштування</h2>
              <p className={styles.modalSubtitle}>
                Оберіть регіон, категорію та режим фільтрації:
              </p>
              <div>
                <label className={styles.modalLabel}>Регіон:</label>
                <select value={region} onChange={handleRegionChange} className={styles.modalSelect}>
                  {Object.keys(
                    medicalTerms.reduce((acc, term) => {
                      (term.regions || []).forEach((r) => {
                        acc[unifyRegion(r)] = true;
                      });
                      return acc;
                    }, {})
                  ).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                  <option value="Усі">Усі</option>
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Мова:</label>
                <select
                  value={translationLanguage}
                  onChange={handleTranslationChange}
                  className={styles.modalSelect}
                >
                  {localLangOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Категорія:</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={styles.modalSelect}
                >
                  <option value="Всі">Всі</option>
                  {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Режим фільтрації:</label>
                <select
                  value={filterMode}
                  onChange={handleFilterModeChange}
                  className={styles.modalSelect}
                >
                  <option value="all">Всі</option>
                  <option value="learned">Вивчені</option>
                  <option value="unlearned">Не вивчені</option>
                  <option value="paused">Пауза</option>
                </select>
              </div>
              {/* Кнопка для переходу до гри з флешкартками */}
              <div style={{ marginTop: "20px" }}>
                <button className={styles.actionButton} onClick={goToFlashcardGame}>
                  Перейти до гри з флешкартками
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AllMedicalTerminologyPage;