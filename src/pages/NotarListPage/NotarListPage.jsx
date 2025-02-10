// src/pages/NotarListPage/NotarListPage.jsx

import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./NotarListPage.module.scss";
import { notarData } from "./notarData";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaCog, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

/**
 * Якщо обрано "Westfalen-Lippe" – повертаємо "Nordrhein-Westfalen",
 * інакше повертаємо оригінальний рядок.
 */
const unifyRegion = (regionName) => {
  if (regionName === "Westfalen-Lippe") {
    return "Nordrhein-Westfalen";
  }
  return regionName;
};

const NotarListPage = () => {
  // Глобальний вибір регіону, локальний стан
  const { selectedRegion } = useGetGlobalInfo();
  const [region, setRegion] = useState(selectedRegion || "Bayern"); // fallback: Bayern

  // Коли змінюється глобальний reg, підхоплюємо
  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  // Стан модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Клік поза межами модалки => закрити
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

  // Якщо обрали Westfalen-Lippe => зберігаємо NRW
  const handleRegionChange = (e) => {
    const newVal = e.target.value;
    if (newVal === "Westfalen-Lippe") {
      setRegion("Nordrhein-Westfalen");
    } else {
      setRegion(newVal);
    }
  };

  // Об’єднуємо
  const regionKey = unifyRegion(region);
  const notareList = notarData[regionKey] || [];

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Кнопка (правий нижній кут) */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Плитки з нотаріусами */}
        <div className={styles.tilesContainer}>
          {notareList.map((notar) => (
            <div key={notar.id} className={styles.tile}>
              <h3 className={styles.tileHeader}>{notar.name}</h3>
              <p className={styles.tileDescription}>{notar.description}</p>
              {notar.city && <p className={styles.tileCity}>{notar.city}</p>}
              <div className={styles.contactRow}>
                {notar.phone && (
                  <p className={styles.contactItem}>
                    <FaPhoneAlt style={{ marginRight: "5px" }} />
                    {notar.phone}
                  </p>
                )}
                {notar.email && (
                  <p className={styles.contactItem}>
                    <FaEnvelope style={{ marginRight: "5px" }} />
                    {notar.email}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Модальне вікно (popup) */}
        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={modalRef}>
              {/* Кнопка закриття */}
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                <AiOutlineClose />
              </button>

              {/* Текст німецькою */}
              <h2 className={styles.modalTitle}>Region auswählen</h2>
            
              <select
                value={region}
                onChange={handleRegionChange}
                className={styles.modalSelect}
              >
                {Object.keys(notarData).map((r) => (
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

export default NotarListPage;