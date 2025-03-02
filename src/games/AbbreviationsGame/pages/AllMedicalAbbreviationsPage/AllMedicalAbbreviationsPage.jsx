import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations } from "../../../../constants/medicalAbbreviations";
import styles from "./AllMedicalAbbreviationsPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaCog, FaCheck, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import { AbbreviationsStatusProvider, useAbbreviationsStatus } from "../../../../contexts/AbbreviationsStatusContext";

const AllMedicalAbbreviationsPageContent = () => {
  const { selectedRegion, selectedLanguage, languages } = useGetGlobalInfo();

  const [region, setRegion] = useState(selectedRegion || "Bayern");
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  const [translationLanguage, setTranslationLanguage] = useState(selectedLanguage || "de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  // Показ визначень
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSaveModal, setShowSaveModal] = useState(false);

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
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Отримуємо дані з контексту для статусів абревіатур
  const { abbreviationStatuses, toggleStatus, scheduleFlushChanges } = useAbbreviationsStatus();

  // Фільтрація абревіатур
  const filteredAbbreviations = medicalAbbreviations.filter((abbr) => {
    const matchesSearch =
      abbr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.explanation.de.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      region === "Усі" ||
      !(abbr.regions && abbr.regions.length) ||
      (abbr.regions || []).includes(region);
    return matchesSearch && matchesRegion;
  });

  const saveToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Ausgewählte medizinische Abkürzungen", 10, 10);
    const tableData = filteredAbbreviations.map((abbr) => {
      const explanation =
        translationLanguage !== "de"
          ? abbr.explanation[translationLanguage] || abbr.explanation.de
          : abbr.explanation.de;
      return [abbr.abbreviation, abbr.name, explanation];
    });
    doc.autoTable({
      head: [["Abkürzung", "Name", "Erklärung"]],
      body: tableData,
      startY: 20,
      styles: { font: "Helvetica", fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [52, 152, 219], textColor: 255, halign: "center" },
      bodyStyles: { textColor: [33, 33, 33] },
    });
    doc.save("selected_abbreviations.pdf");
    setShowSaveModal(false);
  };

  const saveToPersonalAccount = async () => {
    alert("Definitionen wurden gespeichert!");
    setShowSaveModal(false);
  };

  const handleRegionChange = (e) => setRegion(e.target.value);
  const handleTranslationChange = (e) => setTranslationLanguage(e.target.value);

  return (
    <MainLayout>
      <div className={styles.allMedicalAbbreviationsPage}>
        <h1>Medizinische Abkürzungen</h1>
        <input
          type="text"
          placeholder="Suche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        {isMobile ? (
          <div className={styles.tilesContainer}>
            {filteredAbbreviations.map((abbr) => {
              const status = abbreviationStatuses[abbr.id]?.status || "unlearned";
              return (
                <div
                  key={abbr.id}
                  className={`${styles.tile} ${status === "learned" ? styles.learned : ""} ${status === "paused" ? styles.paused : ""}`}
                >
                  <span
                    className={styles.checkIcon}
                    onClick={() => {
                      toggleStatus(abbr.id, "learned");
                      scheduleFlushChanges();
                    }}
                    title="Als erledigt markieren"
                  >
                    <FaCheck />
                  </span>
                  <span
                    className={styles.pauseIcon}
                    onClick={() => {
                      toggleStatus(abbr.id, "paused");
                      scheduleFlushChanges();
                    }}
                    title="Pause"
                  >
                    <FaPause />
                  </span>
                  <h3 className={styles.tileHeader}>{abbr.abbreviation}</h3>
                  <p className={styles.tileDescription}>{abbr.name}</p>
                  {showDefinitions && (
                    <p className={styles.tileExplanation}>
                      <Tippy
                        content={abbr.explanation[translationLanguage] || abbr.explanation.de}
                        trigger="click"
                        interactive={true}
                        placement="bottom"
                      >
                        <span className={styles.clickableCell}>{abbr.explanation.de}</span>
                      </Tippy>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <table className={styles.terminologyTable}>
            <thead>
              <tr>
                <th>Abkürzung</th>
                <th>Name</th>
                {showDefinitions && <th>Erklärung</th>}
              </tr>
            </thead>
            <tbody>
              {filteredAbbreviations.map((abbr) => {
                const status = abbreviationStatuses[abbr.id]?.status || "unlearned";
                return (
                  <tr
                    key={abbr.id}
                    className={`${status === "learned" ? styles.learned : ""} ${status === "paused" ? styles.paused : ""}`}
                  >
                    <td className={styles.abbreviationCell}>
                      <span
                        className={styles.checkIconDesktop}
                        onClick={() => {
                          toggleStatus(abbr.id, "learned");
                          scheduleFlushChanges();
                        }}
                        title="Als erledigt markieren"
                      >
                        <FaCheck />
                      </span>
                      <span
                        className={styles.pauseIconDesktop}
                        onClick={() => {
                          toggleStatus(abbr.id, "paused");
                          scheduleFlushChanges();
                        }}
                        title="Pause"
                      >
                        <FaPause />
                      </span>
                      {abbr.abbreviation}
                    </td>
                    <td className={styles.nameCell}>{abbr.name}</td>
                    {showDefinitions && (
                      <td className={styles.explanationCell}>
                        <Tippy
                          content={abbr.explanation[translationLanguage] || abbr.explanation.de}
                          trigger="click"
                          interactive={true}
                          placement="right"
                        >
                          <span className={styles.clickableCell}>{abbr.explanation.de}</span>
                        </Tippy>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {showSaveModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Wohin speichern?</h2>
              <p>Wählen Sie, wie Sie die Abkürzungen speichern möchten:</p>
              <div className={styles.modalActions}>
                <button className={styles.actionButton} onClick={saveToPersonalAccount}>
                  Persönliches Konto
                </button>
                <button className={styles.actionButton} onClick={saveToPDF}>
                  Als PDF speichern
                </button>
              </div>
              <button className={styles.closeButton} onClick={() => setShowSaveModal(false)}>
                Schließen
              </button>
            </div>
          </div>
        )}

        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsSettingsModalOpen(true)}>
            <FaCog />
          </button>
        </div>

        {isSettingsModalOpen && (
          <div className={window.innerWidth > 768 ? styles.popupContainerDesktop : styles.popupContainerMobile}>
            <div className={styles.popup} ref={settingsModalRef}>
              <button className={styles.modalCloseButton} onClick={() => setIsSettingsModalOpen(false)}>
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              <p className={styles.modalSubtitle}>Wählen Sie Region, Sprache und weitere Optionen:</p>
              <div>
                <label className={styles.modalLabel}>Region:</label>
                <select value={region} onChange={handleRegionChange} className={styles.modalSelect}>
                  {/*
                    Тут можна вивести список регіонів. Наприклад, якщо ви зберігаєте їх у константі,
                    то відобразіть відповідні <option> елементи.
                  */}
                  <option value="Bayern">Bayern</option>
                  <option value="Усі">Усі</option>
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Sprache:</label>
                <select value={translationLanguage} onChange={handleTranslationChange} className={styles.modalSelect}>
                  {(languages[selectedLanguage]?.options || languages["de"].options).map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Erklärung anzeigen:</label>
                <input
                  type="checkbox"
                  checked={showDefinitions}
                  onChange={() => setShowDefinitions((prev) => !prev)}
                />
              </div>
              {/* Якщо потрібен фільтр режим (наприклад, learned/unlearned/paused), додайте ще один select */}
            </div>
          </div>
        )}
      </div>
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