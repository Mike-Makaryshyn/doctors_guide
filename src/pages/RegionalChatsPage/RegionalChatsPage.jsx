import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./RegionalChatsPage.module.scss";
import { chatData } from "./chatData";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaCog } from "react-icons/fa";

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
  
  // Додати стан для зберігання обраного типу чату
  const [chatType, setChatType] = useState("Telegram");

  // 3) Оновлюємо локальний регіон при зміні глобального
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // 4) Стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Обробник кліків поза модальним вікном
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

  // Обробник зміни типу чату
  const handleChatTypeChange = (e) => {
    setChatType(e.target.value);
  };

  // 6) Отримуємо список чатів для вибраного регіону
  //    Фільтруємо їх за обраним типом чату
  const chatsList = (chatData[region] || []).filter(
    (chat) => chat.type === chatType
  );

  // 7) Рендер
  return (
    <MainLayout>
      <div className={styles.container}>

        {/* Кнопка для відкриття модального вікна (правий нижній кут) */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Список відфільтрованих чатів */}
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

        {/* Модальне вікно */}
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
                ×
              </button>

              <h2 className={styles.modalTitle}>Region</h2>
         
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

              {/* Вибір типу чату */}
              <h2 className={styles.modalTitle}>Chats:</h2>
              <select
                value={chatType}
                onChange={handleChatTypeChange}
                className={styles.modalSelect}
              >
                {["Telegram", "WhatsApp", "Facebook", "Viber", "Signal"].map(
                  (type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default RegionalChatsPage;