import React, { useState } from "react";
import { main_menu_items } from "../../constants/translation/main_menu";
import Avatar from "../../components/Avatar/Avatar"; // <-- імпортуємо
import styles from "./SideMenu.module.scss"; // або як у вас називається файл стилів

function SideMenu({ language, isOpen, onClose }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sortedSections = [...main_menu_items.sections].sort(
    (a, b) => a.order - b.order
  );

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.sideMenu} onClick={handleMenuClick}>
        <div className={styles.sideMenuContent}>
          {/* 
             1) Посилання з аватаром. 
             2) Можна оформити як завгодно, наприклад блоком зверху.
          */}
          <div className={styles.avatarBlock}>
            <a href="/dashboard" style={{ textDecoration: "none" }}>
              <Avatar stageId={1} />
            </a>
          </div>

          {/* Тут ваш акордеон зі списком розділів */}
          {sortedSections.map((section, sectionIndex) => {
            const isSectionOpen = !!openSections[sectionIndex];
            return (
              <div className={styles.accordionSection} key={sectionIndex}>
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <span>{section.title[language]}</span>
                  <span
                    className={`${styles.accordionArrow} ${
                      isSectionOpen ? styles.open : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {isSectionOpen && (
                  <div className={styles.accordionBody}>
                    {section.items.map((item, i) => (
                      <a
                        key={i}
                        className={styles.menuLink}
                        href={item.link}
                        target={
                          item.link?.startsWith("https") ? "_blank" : "_self"
                        }
                        rel="noreferrer"
                      >
                        {item[language]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;