// src/pages/MedicalLanguageStudyPage/MedicalLanguageStudyPage.jsx
import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import { FaCog, FaExternalLinkAlt } from "react-icons/fa";

import { FSP_INFO } from "../../constants/translation/fsp-info";

// 1) Feste Liste aller “unified” Regionen
const ALL_REGIONS = [
  "Baden-Württemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen",
];

const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  if (
    r === "Baden-Württemberg-Freiburg" ||
    r === "Baden-Württemberg-Karlsruhe" ||
    r === "Baden-Württemberg-Stuttgart" ||
    r === "Baden-Württemberg-Reutlingen"
  ) {
    return "Baden-Württemberg";
  }
  return r;
};

const MedicalLanguageStudyPage = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Sync beim Ändern der globalen Region
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Klick außerhalb schließt Modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleRegionChange = (e) => {
    setRegion(unifyRegion(e.target.value));
  };

  // Allgemeine Online-Ressourcen bleiben immer gleich
  const generalOnlineResources = FSP_INFO["de"].generalOnline || [];
  // Regionale Ressourcen entsprechend der gewählten Region
  const regionalResources =
    FSP_INFO["de"].regional.resources[region] || [];

  return (
    <MainLayout>
      <div className={`${styles.container} page container mt-20`}>
        {/* Regionale FSP-Ressourcen */}
        <section>
          <h2 className={styles.sectionTitle}>
            {FSP_INFO["de"].regionalTitle}
          </h2>
          {regionalResources.length > 0 ? (
            <div className={styles.tilesContainer}>
              {regionalResources.map((school, idx) => (
                <div key={idx} className={styles.tile}>
                  <div className={styles.linkIcon}>
                    <a
                      href={
                        school.website?.startsWith("http")
                          ? school.website
                          : `https://${school.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <h3 className={styles.tileHeader}>{school.name}</h3>
                  <p className={styles.tileFormat}>
                    <strong>Format:</strong> {school.format}
                  </p>
                  {school.address && (
                    <p className={styles.tileDescription}>
                      {school.address}
                    </p>
                  )}
                  {school.phone && (
                    <p className={styles.tileDescription}>
                      Tel: {school.phone}
                    </p>
                  )}
                  {school.email && (
                    <p className={styles.tileDescription}>
                      E-Mail: {school.email}
                    </p>
                  )}
                  {school.description && (
                    <p className={styles.tileDescription}>
                      {school.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.noResource}>
              Keine regionale Vorbereitung gefunden.
            </p>
          )}
        </section>

        {/* Allgemeine FSP-Ressourcen */}
        <section>
          <h2 className={styles.sectionTitle}>
            {FSP_INFO["de"].generalTitle}
          </h2>
          <div className={styles.tilesContainer}>
            {generalOnlineResources.map((item, i) => (
              <a key={i} className={styles.tile} href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className={styles.tileImage}
                  />
                )}
                <h3 className={styles.tileHeader}>{item.name}</h3>
                {item.description && (
                  <p className={styles.tileDescription}>
                    {item.description}
                  </p>
                )}
                <div className={styles.linkIcon}>
                  <FaExternalLinkAlt />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Settings-Button */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Modal für Region-Auswahl */}
        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.modal} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <h2 className={styles.modalTitle}>Region wählen</h2>
              <select
                value={region}
                onChange={handleRegionChange}
                className={styles.modalSelect}
              >
                {ALL_REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
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

export default MedicalLanguageStudyPage;