import React, { useState } from "react";
import styles from "./Tab1.module.scss";
import fallSpecificData from "../../constants/translation/FallSpecificData";

const Tab1 = ({
  selectedRegion,
  handleRegionChange,
  isRegionIncluded,
  toggleRegionInclusion,
  dataSources,
  localData,
  updateLocalData,
}) => {
  const [inputState, setInputState] = useState("inactive");

  const handleInputFocus = () => {
    if (inputState !== "disabled") {
      setInputState("active");
    }
  };

  const handleInputBlur = () => {
    if (inputState !== "disabled") {
      setInputState("inactive");
    }
  };

  return (
    <div className={styles.tabContainer}>
      {/* Поле \"Місце екзамену\" (Prüfungsort) */}
      <div className={styles.entryRow}>
        <div className={styles.regionField}>
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className={`${styles.selectField} ${styles[inputState]}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={inputState === "disabled"}
          >
            <option value="">-- Prüfungsort --</option>
            {dataSources && Object.keys(dataSources).length > 0 ? (
              Object.keys(dataSources).map((region) => (
                <option key={region} value={region}>
                  {dataSources[region].name || region}
                </option>
              ))
            ) : (
              <option disabled>Немає доступних місць екзамену</option>
            )}
          </select>
        </div>
      </div>

      {/* Поле \"Ім'я\" (NAME) */}
      <div className={styles.entryRow}>
        <input
          type="text"
          value={localData.name_tab1 || ""}
          onChange={(e) => updateLocalData({ name_tab1: e.target.value })}
          className={`${styles.inputField} ${styles[inputState]}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={inputState === "disabled"}
          placeholder="Fallname"
        />
      </div>

      {/* Поле \"Тема\" (Thema (zusätzliche Info)) */}
      <div className={styles.entryRow}>
        <select
          value={localData.theme || ""}
          onChange={(e) => updateLocalData({ theme: e.target.value })}
          className={`${styles.inputField} ${styles[inputState]}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={inputState === "disabled"}
        >
          <option value="">Thema (zusätzliche Info)</option>
          {Object.keys(fallSpecificData).map((key) => (
            <option key={key} value={key}>
              {fallSpecificData[key].name}
            </option>
          ))}
        </select>
      </div>

      {/* Поле \"Дата екзамену\" (Prüfungsdatum) */}
      <div className={styles.entryRow}>
        <input
          type="date"
          value={localData.examDate || ""}
          onChange={(e) => updateLocalData({ examDate: e.target.value })}
          className={`${styles.inputField} ${styles[inputState]}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={inputState === "disabled"}
          placeholder="Prüfungsdatum"
        />
      </div>

      {/* Статус екзамену (Bestanden/Nicht bestanden) */}
      <div className={styles.entryRow}>
        <div className={styles.statusContainer}>
          <button
            type="button"
            className={styles.examStatusButton}
            onClick={() => updateLocalData({ examStatus: "passed" })}
          >
            Bestanden
          </button>
          <button
            type="button"
            className={styles.examStatusButton}
            onClick={() => updateLocalData({ examStatus: "failed" })}
          >
            Nicht bestanden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab1;