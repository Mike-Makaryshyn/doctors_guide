import React, { useState, useContext } from "react";
import { DataSourceContext } from "../contexts/DataSourceContext";

const RegionSelector = () => {
  const { dataSources } = useContext(DataSourceContext); // Отримуємо джерела даних
  const [selectedRegion, setSelectedRegion] = useState("");

  // Функція для обробки вибору регіону
  const handleRegionChange = (event) => {
    const inputValue = event.target.value; // Отримуємо вибране значення
    const matchedRegion = Object.values(dataSources).find(
      (source) => source.key === inputValue || source.region === inputValue
    );

    if (matchedRegion) {
      setSelectedRegion(matchedRegion.key); // Зберігаємо `key` вибраного регіону
      console.log(`Регіон обрано: ${matchedRegion.region} (${matchedRegion.key})`);
    } else {
      console.error(`Регіон із ключем або назвою "${inputValue}" не знайдено.`);
    }
  };

  return (
    <div>
      <h2>Оберіть регіон</h2>
      <select onChange={handleRegionChange} value={selectedRegion}>
        <option value="">-- Оберіть Регіон --</option>
        {Object.entries(dataSources).map(([regionKey, regionData]) => (
          <option key={regionKey} value={regionKey}>
            {regionData.region} ({regionKey})
          </option>
        ))}
      </select>

      {selectedRegion && dataSources[selectedRegion] && (
        <div>
          <h3>Деталі регіону</h3>
          <p>
            <strong>Назва:</strong> {dataSources[selectedRegion].region}
          </p>
          <p>
            <strong>Ключ:</strong> {dataSources[selectedRegion].key}
          </p>
          <p>
            <strong>Тип:</strong> {dataSources[selectedRegion].type}
          </p>
          {dataSources[selectedRegion].files && (
            <div>
              <h4>Список файлів:</h4>
              <ul>
                {dataSources[selectedRegion].files.map((file) => (
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