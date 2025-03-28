import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { LANGUAGE_STUDY_INFO } from "../../constants/translation/language-study";
import styles from "./styles.module.scss";

// Імпорт зображень для загальних ресурсів
import vhsBanner from "../../assets/vhsbaner.png.webp";
import bamfLogo from "../../assets/bamflogo.png";
import goetheLogo from "../../assets/goetelogo.png";

import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Функція уніфікації регіону, щоб об'єднати певні ключі в один
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  if (
    r === "Baden-Württemberg-Freiburg" ||
    r === "Baden-Württemberg-Karlsruhe" ||
    r === "Baden-Württemberg-Stuttgart" ||
    r === "Baden-Württemberg-Reutlingen"
  ) {
    return "Baden-Württemberg";
  }
  return r;
};

const LanguageStudyPage = () => {
  const { selectedLanguage: language, selectedRegion } = useGetGlobalInfo();

  // Ініціалізація локального стану регіону з уніфікацією
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Оновлення локального регіону при зміні глобального вибору
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Закриття модального вікна при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Загальні ресурси завжди відображаються
  const generalResourcesBanners = [
    {
      imageUrl: vhsBanner,
      altText: "VHS Banner",
      linkUrl: "https://www.volkshochschule.de",
      description: LANGUAGE_STUDY_INFO[language]?.general?.vhsDescription,
    },
    {
      imageUrl: bamfLogo,
      altText: "BAMF Banner",
      linkUrl: "https://www.bamf.de",
      description: LANGUAGE_STUDY_INFO[language]?.general?.bamfDescription,
    },
    {
      imageUrl: goetheLogo,
      altText: "Goethe-Institut Banner",
      linkUrl: "https://www.goethe.de",
      description: LANGUAGE_STUDY_INFO[language]?.general?.goetheDescription,
    },
  ];

  // Отримання регіонального ресурсу для вибраного регіону
  // Звертаємо увагу, що дані зберігаються у regional.resources[region].banner
  const regionalResourceObj =
    LANGUAGE_STUDY_INFO[language]?.regional?.resources?.[region];
  const regionalBanner = regionalResourceObj?.banner;

  return (
    <MainLayout>
      <div className={`${styles.container} page container mt-20`}>
        {/* Регіональні ресурси (відображаються залежно від вибраного регіону) */}
        <section>
          <h2 className={styles.sectionTitle}>
            {LANGUAGE_STUDY_INFO[language]?.regional?.title || "Regional Resources"}
          </h2>
          {regionalBanner ? (
            <div className={styles.tile}>
              <a
                href={regionalBanner.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={regionalBanner.imageUrl}
                  alt={regionalBanner.altText}
                  className={styles.tileImage}
                />
              </a>
              <p className={styles.tileDescription}>{regionalBanner.description}</p>
            </div>
          ) : (
            <p className={styles.noResource}>
              {language === "uk"
                ? "Немає регіональних ресурсів."
                : "No regional resources available."}
            </p>
          )}
        </section>

        {/* Загальні ресурси */}
        <section>
          <h2 className={styles.sectionTitle}>
            {LANGUAGE_STUDY_INFO[language]?.general?.title || "General Resources"}
          </h2>
          <div className={styles.tilesContainer}>
            {generalResourcesBanners.map((banner, index) => (
              <div key={index} className={styles.tile}>
                <a href={banner.linkUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={banner.imageUrl}
                    alt={banner.altText}
                    className={styles.tileImage}
                  />
                </a>
                <p className={styles.tileDescription}>{banner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Кнопка для виклику модального вікна */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно для вибору регіону (локальний вибір, що не впливає на глобальний) */}
        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.modal} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Region</h2>
              <select
                value={region}
                onChange={(e) => setRegion(unifyRegion(e.target.value))}
                className={styles.modalSelect}
              >
                {Object.keys(
                  LANGUAGE_STUDY_INFO[language]?.regional?.resources || {}
                ).map((r) => (
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

export default LanguageStudyPage;