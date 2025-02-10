// src/pages/NotarListPage/NotarListPage.jsx

import React, { useState, useRef, useEffect } from "react";
import styles from "./NotarListPage.module.scss";
import { notarData } from "./notarData";
import { FaCog, FaTimes } from "react-icons/fa";

// Layout (falls vorhanden)
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Hier statt DataSourceContext nun useGetGlobalInfo
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const NotarListPage = () => {
  // ---------------------------------------------------------
  // 1) Globalen Region-Wert aus dem Hook auslesen,
  //    z. B. "Bayern" oder was immer gerade global eingestellt ist.
  // ---------------------------------------------------------
  const { selectedRegion: globalRegion } = useGetGlobalInfo();

  // ---------------------------------------------------------
  // 2) Lokaler State. Wir nutzen den globalRegion-Wert nur
  //    EINMAL als Startwert, fallen sonst auf "Berlin" zurück.
  // ---------------------------------------------------------
  const [localRegion, setLocalRegion] = useState(globalRegion || "Berlin");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const settingsModalRef = useRef(null);

  // Klick außerhalb => Modal schließen
  const handleClickOutside = (evt) => {
    if (
      settingsModalRef.current &&
      !settingsModalRef.current.contains(evt.target)
    ) {
      setIsSettingsOpen(false);
    }
  };

  useEffect(() => {
    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsOpen]);

  // ---------------------------------------------------------
  // 3) Notare aus notarData für die aktuell gewählte (lokale) Region
  // ---------------------------------------------------------
  const notareInRegion = notarData[localRegion] || [];

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2>Liste der Notar:innen</h2>

        {/* Kurze Info, welcher lokale Region-State gerade aktiv ist */}
        <p>
          <strong>Globaler Wert:</strong> {globalRegion || "–"} <br />
          <strong>Lokale Auswahl:</strong> {localRegion}
        </p>
        <p style={{ color: "#999", fontSize: "0.9rem" }}>
          (Die Änderung hier beeinflusst NICHT den globalen Wert.)
        </p>

        {/* Button, um das Modal zu öffnen (z. B. unten rechts) */}
        <div className={styles.settingsWrapper}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsSettingsOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Kacheln */}
        <div className={styles.tilesContainer}>
          {notareInRegion.length > 0 ? (
            notareInRegion.map((notar) => (
              <div key={notar.id} className={styles.tile}>
                {/* Optional: Logo */}
                {notar.logoUrl && (
                  <img
                    src={notar.logoUrl}
                    alt={`Logo von ${notar.name}`}
                    style={{ width: "80px", marginBottom: "10px" }}
                  />
                )}
                <h3 className={styles.tileHeader}>{notar.name}</h3>
                <p style={{ color: "#555" }}>{notar.description}</p>
              </div>
            ))
          ) : (
            <p style={{ color: "#555" }}>
              In <strong>{localRegion}</strong> haben wir derzeit keine Notar-Einträge.
            </p>
          )}
        </div>

        {/* Modal für Regionseinstellungen */}
        {isSettingsOpen && (
          <div className={styles.settingsModal} ref={settingsModalRef}>
            <button
              className={styles.closeButton}
              onClick={() => setIsSettingsOpen(false)}
            >
              <FaTimes />
            </button>
            <div className={styles.settingsContent}>
              <label htmlFor="regionSelect">Region auswählen (lokal):</label>
              <select
                id="regionSelect"
                className={styles.regionSelect}
                value={localRegion}
                onChange={(e) => setLocalRegion(e.target.value)}
              >
                {/* Alle Keys aus notarData => Deutschland-Bundesländer */}
                {Object.keys(notarData).map((regionKey) => (
                  <option key={regionKey} value={regionKey}>
                    {regionKey}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default NotarListPage;