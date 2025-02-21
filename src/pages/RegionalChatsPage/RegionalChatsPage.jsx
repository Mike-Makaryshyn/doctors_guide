import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./RegionalChatsPage.module.scss";
import { chatData } from "./chatData";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Якщо вибрано регіон "Westfalen-Lippe", приводимо його до "Nordrhein-Westfalen"
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  return r;
};

const RegionalChatsPage = () => {
  // 1) Отримуємо глобально вибраний регіон
  const { selectedRegion } = useGetGlobalInfo();

  // 2) Локальний стан для регіону (за замовчуванням "Bayern")
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));

  // 3) Оновлюємо локальний регіон при зміні глобального
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // 4) Стан для модального вікна вибору регіону
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

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

  // 5) Обробка зміни регіону через селект
  const handleRegionChange = (e) => {
    const val = e.target.value;
    setRegion(unifyRegion(val));
  };

  // 6) Отримуємо список чатів для вибраного регіону
  const chatsList = chatData[region] || [];

  // 7) Рендер компонента
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        <div className={styles.tilesContainer}>
          {chatsList.map((chat) => (
            <div key={chat.id} className={styles.tile}>
              <h3 className={styles.tileHeader}>{chat.name}</h3>
              <p className={styles.tileDescription}>{chat.description}</p>
              {chat.channel && (
                <p className={styles.tileChannel}>{chat.channel}</p>
              )}
              {chat.link && (
                <a
                  href={chat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.chatLink}
                >
                  Присоединиться
                </a>
              )}
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Region auswählen</h2>
              <p className={styles.modalSubtitle}>
                Bitte wählen Sie Ihren gewünschten Region:
              </p>
              <select
                value={region}
                onChange={handleRegionChange}
                className={styles.modalSelect}
              >
                {Object.keys(chatData).map((r) => (
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

export default RegionalChatsPage;