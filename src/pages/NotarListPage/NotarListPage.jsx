import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./NotarListPage.module.scss";
import { notarData } from "./notarData";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaCog, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Якщо глобально вибрано "Westfalen-Lippe", перетворюємо на "Nordrhein-Westfalen"
const unifyRegion = (r) => {
  // 1) Westfalen-Lippe => NRW
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";

  // 2) Baden-Württemberg-Freiburg usw. => "Baden-Württemberg"
  if (
    r === "Baden-Württemberg-Freiburg" ||
    r === "Baden-Württemberg-Karlsruhe" ||
    r === "Baden-Württemberg-Stuttgart" ||
    r === "Baden-Württemberg-Reutlingen"
  ) {
    return "Baden-Württemberg";
  }

  // 3) Alles andere unverändert
  return r;
};

const NotarListPage = () => {
  // 1) Забираємо глобальний регіон
  const { selectedRegion } = useGetGlobalInfo();

  // 2) Локальний стан
  // При першому рендері уніфікуємо
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));

  // 3) Коли globalRegion змінюється, уніфікуємо
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // 4) Модалка
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

  // 5) Зміна регіону в селекті
  // Якщо користувач випадково вибрав "Westfalen-Lippe" (якщо десь залишився цей ключ) 
  // – уніфікуємо в "Nordrhein-Westfalen"
  const handleRegionChange = (e) => {
    const val = e.target.value;
    setRegion(unifyRegion(val));
  };

  // 6) Отримуємо список нотаріусів
  const notareList = notarData[region] || [];

  // 7) Рендер
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
              
              {/* Все німецькою */}
              <h2 className={styles.modalTitle}>Region auswählen</h2>
              <p className={styles.modalSubtitle}>
                Bitte wählen Sie Ihren gewünschten Region:
              </p>
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