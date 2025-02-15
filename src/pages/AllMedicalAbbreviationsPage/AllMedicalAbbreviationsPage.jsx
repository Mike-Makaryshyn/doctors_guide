import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations } from "./medicalAbbreviations";
import styles from "./AllMedicalAbbreviationsPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaCog, FaCheck, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Уніфікація регіону
const unifyRegion = (r) => (r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r);

const AllMedicalAbbreviationsPage = () => {
  const { selectedRegion, selectedLanguage, languages } = useGetGlobalInfo();

  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  const [translationLanguage, setTranslationLanguage] = useState(selectedLanguage || "de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  // Якщо true – пояснення показані, інакше не показуємо (inline-показ не реалізовано)
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
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

  // Один термін може бути лише або "Gelernt" (learned) або "Pausiert" (paused)
  const [learned, setLearned] = useState([]);
  const [paused, setPaused] = useState([]);
  const toggleLearned = (id) => {
    setLearned((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setPaused((prev) => prev.filter((item) => item !== id));
  };
  const togglePaused = (id) => {
    setPaused((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setLearned((prev) => prev.filter((item) => item !== id));
  };

  const uniqueRegions = Array.from(
    new Set(medicalAbbreviations.flatMap((abbr) => (abbr.regions || []).map(unifyRegion)))
  );
  const regionOptions = ["Усі", ...uniqueRegions];

  const localLangOptions = (languages[selectedLanguage]?.options) || languages["de"].options;

  // Фільтрація визначень
  const [filterMode, setFilterMode] = useState("all");
  const filteredAbbreviations = medicalAbbreviations.filter((abbr) => {
    const matchesSearch =
      abbr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.explanation.de.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      region === "Усі" ||
      !(abbr.regions && abbr.regions.length) ||
      (abbr.regions || []).some((r) => unifyRegion(r) === region);
    let base = matchesSearch && matchesRegion;
    if (filterMode === "learned") return base && learned.includes(abbr.id);
    if (filterMode === "paused") return base && paused.includes(abbr.id);
    if (filterMode === "unlearned")
      return base && !learned.includes(abbr.id) && !paused.includes(abbr.id);
    return base;
  });

  const saveToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Ausgewählte medizinische Abkürzungen", 10, 10);
    const tableData = selectedDefinitions.map((abbrId) => {
      const abbr = medicalAbbreviations.find((item) => item.id === abbrId);
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
      alternateRowStyles: {},
    });
    doc.save("selected_abbreviations.pdf");
    setShowSaveModal(false);
  };

  const saveToPersonalAccount = async () => {
    alert("Definitionen wurden gespeichert!");
    setShowSaveModal(false);
  };

  const handleRegionChange = (e) => setRegion(unifyRegion(e.target.value));
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
            {filteredAbbreviations.map((abbr) => (
              <div
                key={abbr.id}
                className={`${styles.tile} ${
                  learned.includes(abbr.id) ? styles.learned : ""
                } ${paused.includes(abbr.id) ? styles.paused : ""}`}
              >
                {/* Für mobile Tiles: Icons oben links, inline vor Inhalt */}
                <span className={styles.checkIcon} onClick={() => toggleLearned(abbr.id)} title="Als erledigt markieren">
                  <FaCheck />
                </span>
                <span className={styles.pauseIcon} onClick={() => togglePaused(abbr.id)} title="Pause">
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
            ))}
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
              {filteredAbbreviations.map((abbr) => (
                <tr
                  key={abbr.id}
                  className={`
                    ${learned.includes(abbr.id) ? styles.learned : ""} 
                    ${paused.includes(abbr.id) ? styles.paused : ""}
                  `}
                >
                  <td className={styles.abbreviationCell}>
                    {/* Icons inline vor dem Text */}
                    <span className={styles.checkIconDesktop} onClick={() => toggleLearned(abbr.id)} title="Als erledigt markieren">
                      <FaCheck />
                    </span>
                    <span className={styles.pauseIconDesktop} onClick={() => togglePaused(abbr.id)} title="Pause">
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
              ))}
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
              <p className={styles.modalSubtitle}>
                Wählen Sie Region, Sprache und weitere Optionen:
              </p>
              <div>
                <label className={styles.modalLabel}>Region:</label>
                <select value={region} onChange={handleRegionChange} className={styles.modalSelect}>
                  {Object.keys(
                    medicalAbbreviations.reduce((acc, abbr) => {
                      (abbr.regions || []).forEach((r) => {
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
                <label className={styles.modalLabel}>Sprache:</label>
                <select value={translationLanguage} onChange={handleTranslationChange} className={styles.modalSelect}>
                  {localLangOptions.map((opt) => (
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
              <div>
                <label className={styles.modalLabel}>Filtermodus:</label>
                <select className={styles.modalSelect} value={filterMode} onChange={(e) => setFilterMode(e.target.value)}>
                  <option value="all">Alle Definitionen</option>
                  <option value="learned">Gelernt</option>
                  <option value="unlearned">Nicht gelernt</option>
                  <option value="paused">Pausiert</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AllMedicalAbbreviationsPage;