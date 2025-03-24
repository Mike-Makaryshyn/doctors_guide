import React, { useState } from "react";
import { main_menu_items } from "../../constants/translation/main_menu";
import Avatar from "../../components/Avatar/Avatar";
import styles from "./SideMenu.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase"; 
import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";

function SideMenu({ language, isOpen, onClose }) {
  const [openSections, setOpenSections] = useState({});
  const [user] = useAuthState(auth);
  const location = useLocation();

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

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.sideMenu} onClick={handleMenuClick}>
        <div className={styles.sideMenuContent}>
          <div className={styles.avatarBlock}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Avatar stageId={1} />
            </Link>
          </div>
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
                    {section.items.map((item, i) => {
                      const isActive = location.pathname === item.link;
                      return (
                        <a
                          key={i}
                          className={`${styles.menuLink} ${
                            isActive ? styles.activeLink : ""
                          }`}
                          href={item.link}
                          target={
                            item.link?.startsWith("https") ? "_blank" : "_self"
                          }
                          rel="noreferrer"
                        >
                          {item[language]}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <div className={styles.authBlock}>
            {user ? (
              <button onClick={handleLogout} className={styles.authButton}>
                Вийти
              </button>
            ) : (
              <Link to="/auth" className={styles.authButton}>
                Увійти
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;