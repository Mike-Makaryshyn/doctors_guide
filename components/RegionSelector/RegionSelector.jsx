// src/components/RegionSelector.jsx

import React, { useContext, useState } from "react";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import styles from "./RegionSelector.module.scss"; // Створіть файл стилів відповідно до вашої потреби

const RegionSelector = ({ setSelectedRegion }) => {
  const { dataSources } = useContext(DataSourceContext);
  const [selectedRegionKey, setSelectedRegionKey] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value; // Отримуємо вибране значення
    if (inputValue && dataSources[inputValue]) {
      setSelectedRegionKey(inputValue);
      setSelectedRegion(inputValue); // Передаємо вибраний регіон до батьківського компонента
    } else {
      setSelectedRegionKey("");
      setSelectedRegion("");
    }
  };

  return (
    <div className={styles.regionSelector}>
      <label htmlFor="region">Оберіть Регіон:</label>
      <select id="region" value={selectedRegionKey} onChange={handleChange}>
        <option value="">-- Оберіть Регіон --</option>
        {Object.entries(dataSources).map(([regionKey, regionData]) => (
          regionData.type === "local" && ( // Відображаємо лише локальні регіони
            <option key={regionKey} value={regionKey}>
              {regionData.name}
            </option>
          )
        ))}
      </select>

      {selectedRegionKey && dataSources[selectedRegionKey] && (
        <div className={styles.regionDetails}>
          <p>
            <strong>Назва:</strong> {dataSources[selectedRegionKey].region}
          </p>
          <p>
            <strong>Ключ:</strong> {dataSources[selectedRegionKey].key}
          </p>
          <p>
            <strong>Тип:</strong> {dataSources[selectedRegionKey].type}
          </p>
          {dataSources[selectedRegionKey].files && (
            <div>
              <h4>Файли:</h4>
              <ul>
                {dataSources[selectedRegionKey].files.map((file) => (
                  <li key={file.id}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RegionSelector;