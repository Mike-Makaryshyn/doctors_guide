import React, { useState, useEffect } from "react";
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

  const sortedSections = React.useMemo(() => {
    return [...main_menu_items.sections].sort((a, b) => a.order - b.order);
  }, []);

  // При зміні маршруту, відкриваємо категорію, якщо в ній є активний лінк
  useEffect(() => {
    setOpenSections((prev) => {
      const newOpen = { ...prev };
      sortedSections.forEach((section, index) => {
        if (section.items.some((item) => item.link === location.pathname)) {
          newOpen[index] = true;
        }
      });
      return newOpen;
    });
  }, [location.pathname, sortedSections]);

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
            {user && user.displayName && (
              <span className={styles.userName}>{user.displayName}</span>
            )}
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
                  <span className={styles.accordionArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="#023c6f">
                      <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
                    </svg>
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