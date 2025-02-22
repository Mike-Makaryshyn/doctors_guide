import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { FaCog, FaCheck, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useTermStatus } from "../../contexts/TermStatusContext";
import { collection, doc, setDoc } from "firebase/firestore";

const unifyRegion = (r) =>
  r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

const AllMedicalTerminologyPage = () => {
  // Отримуємо функції з контексту, включаючи scheduleFlushChanges для дебаунсу
  const { termStatuses, toggleStatus, flushChanges, scheduleFlushChanges } = useTermStatus();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const [user, loading] = useAuthState(auth);

  // Якщо auth state ще завантажується, відображаємо індикатор
  if (loading) {
    return (
      <MainLayout>
        <p>Завантаження даних...</p>
      </MainLayout>
    );
  }

  // Якщо користувача немає, просимо увійти
  if (!user) {
    return (
      <MainLayout>
        <p>Будь ласка, увійдіть у систему для роботи з термінами.</p>
      </MainLayout>
    );
  }

  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  const [translationLanguage, setTranslationLanguage] = useState(
    selectedLanguage || "de"
  );
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [filterMode, setFilterMode] = useState("all");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const settingsModalRef = useRef(null);

  // Закриття модального вікна при кліку поза його межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsModalRef.current &&
        !settingsModalRef.current.contains(event.target)
      ) {
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

  // Функції перемикання статусів із логуванням
  // Використовуємо scheduleFlushChanges для відкладеного збереження змін
  const toggleLearned = (id) => {
    console.log(`Перемикання статусу "learned" для term ${id}`);
    toggleStatus(id, "learned");
    scheduleFlushChanges();
  };

  const togglePaused = (id) => {
    console.log(`Перемикання статусу "paused" для term ${id}`);
    toggleStatus(id, "paused");
    scheduleFlushChanges();
  };

  // Фільтрація термінів
  const uniqueRegions = Array.from(
    new Set(
      medicalTerms.flatMap((term) =>
        (term.regions || []).map((r) => unifyRegion(r))
      )
    )
  );
  const regionOptions = ["Alle", ...uniqueRegions];

  const uniqueCategories = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.deExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Alle" ||
      (term.categories || []).includes(selectedCategory);
    const matchesRegion =
      region === "Alle" ||
      (term.regions || []).some((r) => unifyRegion(r) === region);
    const base = matchesSearch && matchesCategory && matchesRegion;

    const statusObj = termStatuses[term.id];
    const status = statusObj?.status || "unlearned";

    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused")) {
      return false;
    }
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
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleFilterModeChange = (e) => setFilterMode(e.target.value);

  // Збереження у PDF
  const saveToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Ausgewählte medizinische Begriffe", 10, 10);

    const tableData = selectedDefinitions.map((termId) => {
      const term = medicalTerms.find((t) => t.id === termId);
      return [term.lat, term.de, term.deExplanation];
    });
    doc.autoTable({
      head: [["Lateinische Bezeichnung", "Deutsche Bezeichnung", "Definition"]],
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

  // Збереження даних у Firebase (для особистого аккаунту)
  const saveToPersonalAccount = async () => {
    if (!user) {
      alert("Bitte melden Sie sich an, um Daten zu speichern!");
      return;
    }
    try {
      const { db } = await import("../../firebase");
      const termsCollection = collection(db, `users/${user.uid}/savedTerms`);
      for (const termId of selectedDefinitions) {
        const termDocRef = doc(termsCollection, termId.toString());
        await setDoc(termDocRef, { id: termId });
      }
      alert("Ausgewählte Begriffe wurden erfolgreich in Ihrem Konto gespeichert!");
    } catch (error) {
      console.error("Fehler beim Speichern:", error);
      alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    }
    setShowSaveModal(false);
  };

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
        <h1>Alle medizinische Terminologie</h1>

        <input
          type="text"
          placeholder="Suche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

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
                          className={styles.checkIcon}
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
                                term[translationLanguage] ||
                                "Keine Übersetzung vorhanden"
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
                        {showDefinitions && (
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
                      <th>Begriff</th>
                      <th>Deutsche Bezeichnung</th>
                      {showDefinitions && <th>Definition</th>}
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
                            <div className={styles.cellContent}>
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
                              <span>{term.lat}</span>
                            </div>
                          </td>
                          <td>
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

        {showSaveModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Wohin speichern?</h2>
              <p>Wählen Sie die Speichermethode:</p>
              <div className={styles.modalActions}>
                <button className={styles.actionButton} onClick={saveToPersonalAccount}>
                  Persönliches Konto
                </button>
                <button className={styles.actionButton} onClick={saveToPDF}>
                  Als PDF speichern
                </button>
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setShowSaveModal(false)}
              >
                Schließen
              </button>
            </div>
          </div>
        )}

        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsSettingsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {isSettingsModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={settingsModalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsSettingsModalOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <p className={styles.modalSubtitle}>
                Wählen Sie Region, Kategorie und Filtermodus:
              </p>
              <div>
                <label className={styles.modalLabel}>Region:</label>
                <select
                  value={region}
                  onChange={handleRegionChange}
                  className={styles.modalSelect}
                >
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
                  <option value="Alle">Alle</option>
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Kategorie:</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={styles.modalSelect}
                >
                  <option value="Alle">Alle</option>
                  {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Filtermodus:</label>
                <select
                  value={filterMode}
                  onChange={handleFilterModeChange}
                  className={styles.modalSelect}
                >
                  <option value="all">Alle</option>
                  <option value="learned">Gelernt</option>
                  <option value="unlearned">Ungelernt</option>
                  <option value="paused">Pausiert</option>
                </select>
              </div>
              <div style={{ marginTop: "20px" }}>
                <button className={styles.actionButton} onClick={goToFlashcardGame}>
                  Zum Flashcard-Spiel wechseln
                </button>
              </div>
              <div style={{ marginTop: "10px" }}>
                {/* Тут залишаємо flushChanges для негайного збереження */}
                <button className={styles.actionButton} onClick={flushChanges}>
                  Änderungen jetzt speichern
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