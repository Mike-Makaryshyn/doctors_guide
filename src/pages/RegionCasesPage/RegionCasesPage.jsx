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

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const icons = Array.from(containerRef.current.querySelectorAll('svg'));
    const containerRect = containerRef.current.getBoundingClientRect();
    const state = icons.map(() => ({
      x: Math.random() * (containerRect.width - 48),
      y: Math.random() * (containerRect.height - 48),
      vx: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1),
      vy: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1),
    }));

    icons.forEach((icon, i) => {
      icon.style.position = "absolute";
      icon.style.left = `${state[i].x}px`;
      icon.style.top = `${state[i].y}px`;
    });

    let animationId;
    const animate = () => {
      state.forEach((st, i) => {
        st.x += st.vx;
        st.y += st.vy;
        if (st.x <= 0 || st.x >= containerRect.width - 48) st.vx *= -1;
        if (st.y <= 0 || st.y >= containerRect.height - 48) st.vy *= -1;
        icons[i].style.left = `${st.x}px`;
        icons[i].style.top = `${st.y}px`;
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const iconConfigs = [
    { type: "heart", delay: "0s" },
    { type: "heart", delay: "4s" },
    { type: "heart", delay: "8s" },
    { type: "stethoscope", delay: "2s" },
    { type: "stethoscope", delay: "6s" },
    { type: "stethoscope", delay: "10s" },
    { type: "pill", delay: "1s" },
    { type: "pill", delay: "5s" },
    { type: "pill", delay: "9s" },
    { type: "cross", delay: "3s" },
    { type: "cross", delay: "7s" },
    { type: "cross", delay: "11s" },
  ];

  return (
    <MainLayout>
      {/* Button "Zurück" zum Hauptmenü */}
    

      <div ref={containerRef} className={styles.container}>
        {/* SVG-іконки (фонова анімація) */}
        {iconConfigs.map(({ type, delay }, idx) => {
          let pathD;
          switch (type) {
            case "heart":
              pathD = "M12 21s-1-.684-1-1.313C6.667 17.19 2 13.128 2 8.5 2 5.467 4.239 3 7 3c1.66 0 3.174.82 4 2.09C12.826 3.82 14.34 3 16 3c2.761 0 5 2.467 5 5.5 0 4.628-4.667 8.69-9 11.187C13 20.316 12 21 12 21z";
              break;
            case "stethoscope":
              pathD = "M20 2h-2a2 2 0 00-2 2v7a5 5 0 01-10 0V4a2 2 0 00-2-2H4a2 2 0 00-2 2v8a6 6 0 0012 0V4h2v7a8 8 0 11-16 0V4a4 4 0 014-4h2a4 4 0 014 4v7a2 2 0 104 0V4a2 2 0 00-2-2z";
              break;
            case "pill":
              pathD = "M12 2a5 5 0 00-3.536 1.464l-5 5A5 5 0 0012 16.536l5-5A5 5 0 0012 2zm0 2a3 3 0 012.121.879l-7.122 7.122A3 3 0 115 9.121l7.122-7.122A2.983 2.983 0 0112 4zm0 16a5 5 0 003.536-1.464l5-5A5 5 0 0012 7.464l-5 5A5 5 0 0012 20zm0-2a3 3 0 01-2.121-.879l7.122-7.122A3 3 0 1119 14.879l-7.122 7.122A2.983 2.983 0 0112 18z";
              break;
            case "cross":
              pathD = "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM17 13h-3v3a1 1 0 01-2 0v-3H9a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z";
              break;
            default:
              pathD = "";
          }
          return (
            <svg
              key={idx}
              className={styles[`icon-${type}`]}
              style={{ animationDelay: delay }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={pathD} fill="currentColor" fillRule="nonzero" />
            </svg>
          );
        })}
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