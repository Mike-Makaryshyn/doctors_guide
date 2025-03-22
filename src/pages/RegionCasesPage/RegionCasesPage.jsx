// src/pages/RegionCasesPage/RegionCasesPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { FaCog } from "react-icons/fa";
import styles from "./RegionCasesPage.module.scss";
import regionCases from "../../constants/regionCases";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const RegionCasesPage = () => {
  const navigate = useNavigate();
  // Отримуємо глобальне значення регіону
  const { selectedRegion } = useGetGlobalInfo();
  // Ініціалізуємо локальне значення регіону з глобального
  const [region, setRegion] = useState(selectedRegion || "Brandenburg");

  // При зміні global state selectedRegion оновлюємо локальне значення
  useEffect(() => {
    if (selectedRegion) {
      setRegion(selectedRegion);
    }
  }, [selectedRegion]);

  // Стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Реф для модального вікна (для закриття при кліку поза ним)
  const modalRef = useRef(null);

  // Стан для відзначених кейсів (зберігається в localStorage)
  const [completedCases, setCompletedCases] = useState(() => {
    const stored = localStorage.getItem(`completedCases_region_${region}`);
    return stored ? JSON.parse(stored) : [];
  });

  // При зміні локального регіону оновлюємо дані з localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`completedCases_region_${region}`);
    setCompletedCases(stored ? JSON.parse(stored) : []);
  }, [region]);

  // Закриття модального вікна при кліку поза його межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Локальна зміна регіону через модальне вікно – глобальний стан не оновлюється
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  // Закриття модального вікна після підтвердження
  const handleModalSubmit = () => {
    setIsModalOpen(false);
  };

  // Функція для відмітки кейсу (зберігається локально)
  const toggleCompleted = (index) => {
    const updated = completedCases.includes(index)
      ? completedCases.filter((i) => i !== index)
      : [...completedCases, index];
    setCompletedCases(updated);
    localStorage.setItem(`completedCases_region_${region}`, JSON.stringify(updated));
  };

  // Отримання кейсів для обраного регіону
  const casesForRegion = regionCases[region] || [];

  return (
    <MainLayout>
      {/* Кнопка "Назад" для повернення в головне меню */}
      <button
        className={styles.main_menu_back}
        onClick={() => navigate("/main_menu")}
        aria-label="Zurück"
      >
        &#8592;
      </button>
      <div className={styles.container}>
        <h1>Fälle für Region: {region}</h1>
        <div className={styles.casesContainer}>
          {casesForRegion.length > 0 ? (
            casesForRegion.map((caseItem, index) => (
              <div
                key={index}
                className={`${styles.caseTile} ${
                  completedCases.includes(index) ? styles.completed : ""
                }`}
                onClick={() => toggleCompleted(index)}
              >
                {index + 1}. {caseItem}
              </div>
            ))
          ) : (
            <p>Keine Fälle für diese Region vorhanden.</p>
          )}
        </div>

        {isModalOpen && (
          <div className={styles.settingsModal}>
            <div className={styles.settingsContent} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <div className={styles.regionSelector}>
                <label>Wähle eine Region:</label>
                <select value={region} onChange={handleRegionChange}>
                  {Object.keys(regionCases).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={handleModalSubmit} className={styles.submitButton}>
                Bestätigen
              </button>
            </div>
          </div>
        )}

        {/* Кнопка відкриття модального вікна з іконкою шестерні */}
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.settingsButton}
        >
          <FaCog />
        </button>
      </div>
    </MainLayout>
  );
};

export default RegionCasesPage;