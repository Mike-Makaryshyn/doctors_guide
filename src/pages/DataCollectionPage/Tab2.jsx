// src/pages/DataCollectionPage/Tab2.jsx

import React from "react";
import styles from "./Tab2.module.scss";

// Імпорт іконок
import personalInformationIcon from "../../assets/iconFSPtable/personal-information.png";
import aktuelleAnamneseIcon from "../../assets/iconFSPtable/aktuelleanamnese.png";
import travelIcon from "../../assets/iconFSPtable/travel-icon.png";
import vegetativeAnamneseIcon from "../../assets/iconFSPtable/VegetativeAnamnese.png";
import vorerkrankungenIcon from "../../assets/iconFSPtable/vorerkrankungen.png";
import previousOperationsIcon from "../../assets/iconFSPtable/previous-operations.png";
import medicationsIcon from "../../assets/iconFSPtable/medications.png";
import allergiesIcon from "../../assets/iconFSPtable/allergies.png";
import noxenIcon from "../../assets/iconFSPtable/noxen.png";
import familienanamneseIcon from "../../assets/iconFSPtable/familienanamnese.png";
import sozialanamneseIcon from "../../assets/iconFSPtable/sozialanamnese.png";
import differentialDiagnosisIcon from "../../assets/iconFSPtable/differential-diagnosis.png";
import preliminaryDiagnosisIcon from "../../assets/iconFSPtable/preliminary-diagnosis.png";
import proposedProceduresIcon from "../../assets/iconFSPtable/proposed-procedures.png";

const categories = [
  {
    title: "Persönliche Daten",
    icon: personalInformationIcon,
    fields: [
      { key: "name", label: "Ім'я", type: "text" },
      { key: "surname", label: "Прізвище", type: "text" },
      { key: "birthdate", label: "Дата народження", type: "date" },
    ],
  },
  {
    title: "Aktuelle Anamnese",
    icon: aktuelleAnamneseIcon,
    fields: [
      { key: "visitReason", label: "Причина відвідування", type: "textarea" },
    ],
  },
  {
    title: "Reise- та Impfstatus",
    icon: travelIcon,
    fields: [],
  },
  {
    title: "Vegetative Anamnese",
    icon: vegetativeAnamneseIcon,
    fields: [],
  },
  {
    title: "Vorerkrankungen",
    icon: vorerkrankungenIcon,
    fields: [],
  },
  {
    title: "Frühere Operationen",
    icon: previousOperationsIcon,
    fields: [],
  },
  {
    title: "Medikamente",
    icon: medicationsIcon,
    fields: [],
  },
  {
    title: "Unverträglichkeiten",
    icon: allergiesIcon,
    fields: [],
  },
  {
    title: "Noxen",
    icon: noxenIcon,
    fields: [],
  },
  {
    title: "Familiäre Erkrankungen",
    icon: familienanamneseIcon,
    fields: [],
  },
  {
    title: "Soziale Anamnese",
    icon: sozialanamneseIcon,
    fields: [],
  },
  {
    title: "Differentialdiagnose",
    icon: differentialDiagnosisIcon,
    fields: [],
  },
  {
    title: "Diagnose",
    icon: preliminaryDiagnosisIcon,
    fields: [],
  },
  {
    title: "Untersuchungen",
    icon: proposedProceduresIcon,
    fields: [],
  },
];

const Tab2 = ({ localData, updateLocalData, includedFields, toggleField }) => {
  const handleInputChange = (fieldKey, value) => {
    updateLocalData({ [fieldKey]: value });
  };

  const handleAutoExpand = (e) => {
    const field = e.target;
    field.style.height = "auto"; // Скидаємо висоту
    field.style.height = `${field.scrollHeight}px`; // Встановлюємо висоту відповідно до контенту
  };

  return (
    <div className={styles.tabContainer}>
      {categories.map((category) => (
        <div key={category.title} className={styles.category}>
          <div className={styles.categoryHeader}>
            <img
              src={category.icon}
              alt={`${category.title} Icon`}
              className={styles.categoryIcon}
            />
            <h2 className={styles.categoryTitle}>{category.title}</h2>
          </div>
          {category.fields.map((field) => (
            <div key={field.key} className={styles.entryRow}>
              {field.type === "textarea" ? (
                <textarea
                  value={localData[field.key] || ""}
                  onChange={(e) =>
                    handleInputChange(field.key, e.target.value)
                  }
                  onInput={handleAutoExpand}
                  className={`${styles.inputField} ${styles.autoExpand} ${
                    !includedFields[field.key] ? styles.disabledInput : ""
                  }`}
                  disabled={!includedFields[field.key]}
                />
              ) : (
                <>
                  <input
                    type={field.type}
                    value={localData[field.key] || ""}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    className={`${styles.inputField} ${
                      !includedFields[field.key] ? styles.disabledInput : ""
                    }`}
                    disabled={!includedFields[field.key]}
                  />
                  <button
                    onClick={() => toggleField(field.key)}
                    className={`${styles.toggleFieldButton} ${
                      !includedFields[field.key] ? styles.disabledToggle : ""
                    }`}
                  >
                    {includedFields[field.key] ? "✔" : "✖"}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tab2;