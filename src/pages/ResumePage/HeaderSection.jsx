// src/pages/ResumePage/HeaderSection.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./HeaderSection.module.css";
import debounce from "lodash.debounce";

const HeaderSection = ({ title = "Kopfzeile", data, onUpdate }) => {
  const handleChange = (field, value) => {
    const updatedHeader = {
      ...data,
      [field]: value,
    };
    onUpdate(updatedHeader);
    debouncedSave(updatedHeader);
  };

  const debouncedSave = useRef(
    debounce((updatedData) => {
      // Збереження може відбуватись централізовано у ResumePage
      // Тому тут може бути лише лог або виклик додаткової функції, якщо потрібно
      console.log("Debounced save for HeaderSection:", updatedData);
    }, 1000)
  ).current;

  return (
    <section className={styles.headerSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form className={styles.entriesContainer}>
        {/* Ряд 1: Vorname, Nachname */}
        <div className={styles.entryRow}>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Vorname"
              value={data.vorname || ""}
              onChange={(e) => handleChange("vorname", e.target.value)}
            />
          </div>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Nachname"
              value={data.nachname || ""}
              onChange={(e) => handleChange("nachname", e.target.value)}
            />
          </div>
        </div>

        {/* Ряд 2: Geburtsdatum, Nationalität */}
        <div className={styles.entryRow}>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Geburtsdatum"
              value={data.geburtsdatum || ""}
              onChange={(e) => handleChange("geburtsdatum", e.target.value)}
            />
          </div>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Nationalität"
              value={data.nationalitaet || ""}
              onChange={(e) => handleChange("nationalitaet", e.target.value)}
            />
          </div>
        </div>

        {/* Ряд 3: Adresse */}
        <div className={styles.entryRow}>
          <div className={styles.fullWidthCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Adresse"
              value={data.adresse || ""}
              onChange={(e) => handleChange("adresse", e.target.value)}
            />
          </div>
        </div>

        {/* Ряд 4: Email, Handynummer */}
        <div className={styles.entryRow}>
          <div className={styles.descriptionCell}>
            <input
              type="email"
              className={styles.inputField}
              placeholder="Email"
              value={data.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Handynummer"
              value={data.handynummer || ""}
              onChange={(e) => handleChange("handynummer", e.target.value)}
            />
          </div>
        </div>

        {/* Ряд 5: Fachrichtung */}
        <div className={styles.entryRow}>
          <div className={styles.fullWidthCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Fachrichtung"
              value={data.fachrichtung || ""}
              onChange={(e) => handleChange("fachrichtung", e.target.value)}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

HeaderSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    vorname: PropTypes.string,
    nachname: PropTypes.string,
    geburtsdatum: PropTypes.string,
    nationalitaet: PropTypes.string,
    adresse: PropTypes.string,
    email: PropTypes.string,
    handynummer: PropTypes.string,
    fachrichtung: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default HeaderSection;