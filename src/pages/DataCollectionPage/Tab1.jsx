// src/pages/DataCollectionPage/Tab1.jsx

import React, { useState } from "react";
import styles from "./Tab1.module.scss";

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
      <div className={styles.entryRow}>
        <label className={styles.label}>Місце екзамену:</label>
        <div className={styles.regionField}>
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className={`${styles.selectField} ${styles[inputState]}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={inputState === "disabled"}
          >
            <option value="">-- Оберіть місце екзамену --</option>
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

      <div className={styles.entryRow}>
        <label className={styles.label}>Ім'я (Вкладка 1):</label>
        <input
          type="text"
          value={localData.name_tab1 || ""}
          onChange={(e) => updateLocalData({ name_tab1: e.target.value })}
          className={`${styles.inputField} ${styles[inputState]}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={inputState === "disabled"}
        />
      </div>

      {/* Додавання нового поля "Тема" */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Тема:</label>
        <input
          type="text"
          value={localData.theme || ""}
          onChange={(e) => updateLocalData({ theme: e.target.value })}
          className={`${styles.inputField} ${styles[inputState]}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={inputState === "disabled"}
          placeholder="Введіть тему..."
        />
      </div>
    </div>
  );
};

export default Tab1;