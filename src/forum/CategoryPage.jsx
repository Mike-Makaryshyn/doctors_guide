// src/forum/CategoryPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import styles from "./CategoryPage.module.scss";
import useGetGlobalInfo from "../hooks/useGetGlobalInfo"; // переконайся, що цей хук існує

// Приклад списку земель (16 позицій)
const lands = [
  "Bayern",
  "Baden-Württemberg",
  "Hessen",
  "Nordrhein-Westfalen",
  "Sachsen",
  "Thüringen",
  "Brandenburg",
  "Saarland",
  "Sachsen-Anhalt",
  "Rheinland-Pfalz",
  "Berlin",
  "Bremen",
  "Hamburg",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Schleswig-Holstein",
];

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Отримуємо глобальну інформацію (наприклад, поточну землю), якщо вона є
  const { selectedLand, setSelectedLand } = useGetGlobalInfo();
  const [currentLand, setCurrentLand] = useState(selectedLand || lands[0]);

  useEffect(() => {
    setCurrentLand(selectedLand || lands[0]);
  }, [selectedLand]);

  const handleLandChange = (e) => {
    const newLand = e.target.value;
    setCurrentLand(newLand);
    if (setSelectedLand) {
      setSelectedLand(newLand); // оновлюємо глобальний стан, якщо є така функція
    }
  };

  const handleProceed = () => {
    // Наприклад, переходимо до сторінки з тредами для цієї землі
    navigate(`/forum/category/${category}/land/${currentLand}`);
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>{category}</h1>
        <div className={styles.globalInfo}>
          <p className={styles.infoText}>Use Global Info земля</p>
          <select
            className={styles.landSelect}
            value={currentLand}
            onChange={handleLandChange}
          >
            {lands.map((land) => (
              <option key={land} value={land}>
                {land}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.proceedButton} onClick={handleProceed}>
          Далі
        </button>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;