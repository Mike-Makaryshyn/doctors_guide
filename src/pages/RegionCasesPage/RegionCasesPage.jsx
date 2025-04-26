// src/pages/RegionCasesPage/RegionCasesPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { FaCog } from "react-icons/fa";
import styles from "./RegionCasesPage.module.scss";
import regionCases from "../../constants/regionCases";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const RegionCasesPage = () => {
  const navigate = useNavigate();

  // Globales Region-Objekt holen
  const { selectedRegion } = useGetGlobalInfo();

  // Lokaler State für Region (fällt zurück auf "Brandenburg", falls kein selectedRegion existiert)
  const [region, setRegion] = useState(selectedRegion || "Brandenburg");

  // Wenn sich der globale selectedRegion ändert, aktualisieren wir unseren lokalen State
  useEffect(() => {
    if (selectedRegion) {
      setRegion(selectedRegion);
    }
  }, [selectedRegion]);

  // Modal-Status
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Abgehakte/erledigte Cases (werden in localStorage pro Region gespeichert)
  const [completedCases, setCompletedCases] = useState(() => {
    const stored = localStorage.getItem(`completedCases_region_${region}`);
    return stored ? JSON.parse(stored) : [];
  });

  // Immer wenn sich die Region ändert, neu aus localStorage laden
  useEffect(() => {
    const stored = localStorage.getItem(`completedCases_region_${region}`);
    setCompletedCases(stored ? JSON.parse(stored) : []);
  }, [region]);

  // Klick außerhalb des Modals => Modal schließen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Lokales Region-Ändern im Modal (kein Update vom globalen State)
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  // Modal schließen nach Klick auf "Bestätigen"
  const handleModalSubmit = () => {
    setIsModalOpen(false);
  };

  // Case abhaken/entfernen
  const toggleCompleted = (index) => {
    const updated = completedCases.includes(index)
      ? completedCases.filter((i) => i !== index)
      : [...completedCases, index];

    setCompletedCases(updated);
    localStorage.setItem(
      `completedCases_region_${region}`,
      JSON.stringify(updated)
    );
  };

  // Cases für die gewählte Region holen
  const casesForRegion = regionCases[region] || [];

  return (
    <MainLayout>
      {/* Button "Zurück" zum Hauptmenü */}
    

      <div className={styles.container}>
        <h1>Fälle für Region: {region}</h1>

        {/* Kachel-Container (responsiv in der SCSS geregelt) */}
        <div className={styles.casesContainer}>
          {casesForRegion.length > 0 ? (
            casesForRegion.map((caseItem, index) => (
              <div
                key={index}
                className={`${styles.caseTile} ${
                  completedCases.includes(index) ? styles.completed : ""
                }`}
                onClick={() => toggleCompleted(index)}
              >
                {index + 1}. {caseItem}
              </div>
            ))
          ) : (
            <p>Keine Fälle für diese Region vorhanden.</p>
          )}
        </div>

        {/* Modal für Einstellungen */}
        {isModalOpen && (
          <div className={styles.settingsModal}>
            <div className={styles.settingsContent} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>

              <div className={styles.regionSelector}>
                <label className={styles.regionLabel}>Ausgewählte Region:</label>
                <div className={styles.regionSelectorBox}>
                  <select value={region} onChange={handleRegionChange}>
                    {Object.keys(regionCases).map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button onClick={handleModalSubmit} className={styles.submitButton}>
                Bestätigen
              </button>
            </div>
          </div>
        )}

        {/* Button zum Öffnen des Modals (Zahnrad) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.settingsButton}
        >
          <FaCog />
        </button>
      </div>
    </MainLayout>
  );
};

export default RegionCasesPage;