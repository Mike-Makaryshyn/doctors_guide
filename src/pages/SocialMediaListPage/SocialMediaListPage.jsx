import React, { useState, useRef, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./SocialMediaListPage.module.scss";
import { socialMediaData } from "./socialMediaData";

// Іконки соцмереж
import { FaCog, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

const SocialMediaListPage = () => {
  // Стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Стан для вибору категорії (Instagram, YouTube, TikTok)
  const [selectedCategory, setSelectedCategory] = useState("Instagram");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Фільтрація даних за вибраною категорією
  const filteredSocialMedia = socialMediaData.filter(
    (social) => social.category === selectedCategory
  );

  // Закриття модалки при кліку поза нею
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

  // Функція для повернення іконки відповідно до категорії
  const getIconForCategory = (category) => {
    switch (category) {
      case "Instagram":
        return <FaInstagram />;
      case "YouTube":
        return <FaYoutube />;
      case "TikTok":
        return <SiTiktok />;
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Кнопка для відкриття налаштувань */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Плитки Social Media (відфільтровані за категорією) */}
        <div className={styles.tilesContainer}>
          {filteredSocialMedia.map((social) => (
            <div
              key={social.id}
              className={styles.tile}
              onClick={() => window.open(social.link, "_blank")}
            >
              {/* Іконка в правому верхньому куті */}
              <div className={styles.tileIcon}>
                {getIconForCategory(social.category)}
              </div>
              <h3 className={styles.tileHeader}>{social.name}</h3>
              <p className={styles.tileDescription}>{social.description}</p>
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
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                  ×
              </button>
              <h2 className={styles.modalTitle}>Social Media</h2>

              {/* Селектор для вибору категорії */}
           
              <select
                id="categorySelect"
                className={styles.modalSelect}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="TikTok">TikTok</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SocialMediaListPage;