import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FSP_INFO } from "../../constants/translation/fsp-info";
import styles from "./styles.module.scss";
import { FaCog } from "react-icons/fa";

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
  const language = "de";
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  const handleRegionChange = (e) => {
    const val = e.target.value;
    setRegion(unifyRegion(val));
  };

  const generalOnlineResources = FSP_INFO["de"].generalOnline || [];
  const regionalResources = FSP_INFO["de"].regional?.resources?.[region] || [];

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
                  <h3 className={styles.tileHeader}>{school.name}</h3>
                  {/* Website */}
                  {school.website && (
                    <p className={styles.tileWebsite}>
                      <a
                        href={school.website.startsWith("http") ? school.website : `https://${school.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {school.website}
                      </a>
                    </p>
                  )}
                  {/* Address */}
                  {school.address && <p className={styles.tileDescription}>{school.address}</p>}
                  {/* Phone */}
                  {school.phone && <p className={styles.tileDescription}>Tel: {school.phone}</p>}
                  {/* Email */}
                  {school.email && <p className={styles.tileDescription}>E-Mail: {school.email}</p>}
                  {school.description && <p className={styles.tileDescription}>{school.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.noResource}>Keine regionale Vorbereitung gefunden.</p>
          )}
        </section>

        {/* Allgemeine FSP-Ressourcen */}
        <section>
          <h2 className={styles.sectionTitle}>
            {FSP_INFO["de"].generalTitle}
          </h2>
          <div className={styles.tilesContainer}>
            {generalOnlineResources.map((item, i) => (
              <div key={i} className={styles.tile}>
                {item.imageUrl && (
                  <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageUrl} alt={item.altText} className={styles.tileImage} />
                  </a>
                )}
                <h3 className={styles.tileHeader}>{item.name}</h3>
                {item.description && <p className={styles.tileDescription}>{item.description}</p>}
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                  {item.linkUrl}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Settings-Button */}
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsModalOpen(true)}>
            <FaCog />
          </button>
        </div>

        {/* Modal für Region-Auswahl */}
        {isModalOpen && (
          <div className={window.innerWidth > 768 ? styles.popupContainerDesktop : styles.popupContainerMobile}>
            <div className={styles.modal} ref={modalRef}>
              <button className={styles.modalCloseButton} onClick={() => setIsModalOpen(false)}>×</button>
              <h2 className={styles.modalTitle}>Region wählen</h2>
              <p>Aktuelle Region: {region}</p>
              <select
                value={region}
                onChange={handleRegionChange}
                className={styles.modalSelect}
              >
                {Object.keys(FSP_INFO["de"].regional?.resources || {}).map((r) => (
                  <option key={r} value={r}>{r}</option>
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