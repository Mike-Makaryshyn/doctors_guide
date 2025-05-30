import React, { useState, useEffect } from "react";
import { main_menu_items, regionSelection } from "../../constants/translation/main_menu";
import { LANDS_INFO } from "../../constants/lands";
import styles from "./SideMenu.module.scss";
import { supabase } from "../../supabaseClient";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // новий імпорт для регіону
import { useAuth } from "../../contexts/AuthContext";
import SubscribeButton from "../../components/SubscribeButton";

function SideMenu({ language, isOpen, onClose, direction }) {
  const [openSections, setOpenSections] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedRegion } = useGetGlobalInfo(); // отримуємо обраний регіон
  const { subscriptionStatus } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };
    fetchUser();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const firstName = user?.user_metadata?.first_name ?? "";
  const lastName = user?.user_metadata?.last_name ?? "";
  const displayName = `${firstName} ${lastName}`.trim();

  const sortedSections = React.useMemo(() => {
    return [...main_menu_items.sections].sort((a, b) => a.order - b.order);
  }, []);

  // Add region selection translations if not present
  // (for code completion only; actual object should be in main_menu_items)
  // regionSelection: { en, fr, es, ar, tr, pl, uk, ru, de, el, ro }
  // Example usage: main_menu_items.regionSelection[language]

  // При зміні маршруту відкриваємо категорію, якщо в ній є активний лінк
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
      await supabase.auth.signOut();
      onClose();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleRegionClick = () => {
    navigate("/custom-map");
    onClose();
  };

const regionText = regionSelection[language] || "Choose Region";

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.sideMenu} ${direction === "right" ? styles.right : ""}`} onClick={handleMenuClick}>
        <div className={styles.toggleHandle} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="#023c6f" style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}>
            <path d="M279 239l-194-194c-9-9-23-9-32 0l-22 22c-9 9-9 23 0 32l154 154-154 154c-9 9-9 23 0 32l22 22c9 9 23 9 32 0l194-194c9-9 9-23 0-32z"/>
          </svg>
        </div>
        <div className={styles.sideMenuContent}>
          <div className={styles.avatarBlock}>
            <div className={styles.profileSection}>
              <div className={styles.doctorIconCircle} style={{ backgroundColor: user ? "#e0f0f8" : "#d3d3d3", borderRadius: "50%", border: `2px solid ${user ? "#023c6f" : "#a0a0a0"}` }}>
                <Link to="/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="48" height="48" fill={user ? "#023c6f" : "#a0a0a0"}>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                  </svg>
                </Link>
              </div>
              <div className={styles.avatarInfo}>
                {user && displayName && (
                  <span className={styles.userName}>{displayName}</span>
                )}
                <div className={styles.regionSelection} onClick={handleRegionClick} style={{ cursor: "pointer" }}>
                  {selectedRegion || regionText}
                </div>
              </div>
            </div>
            {subscriptionStatus !== "active" && (
              <div className={styles.subscribeIconWrapper}>
                <SubscribeButton user={user} />
              </div>
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
                  <span className={styles.headerContent}>
                    {section.icon &&
                      (typeof section.icon === "string" ? (
                        <img
                          src={section.icon}
                          alt=""
                          className={styles.sectionIcon}
                        />
                      ) : (
                        React.createElement(section.icon, {
                          className: styles.sectionIcon,
                        })
                      ))}
                    {section.title[language]}
                  </span>
                  <span className={styles.accordionArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="#023c6f">
                      <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
                    </svg>
                  </span>
                </div>
                {isSectionOpen && (
                  <div className={styles.accordionBody}>
                    {section.items.map((item, i) => {
                      // dynamic link handling for region‑dependent external pages
                      let targetLink = item.link;
                      if (selectedRegion) {
                        const landInfo = LANDS_INFO.find(l => l.name === selectedRegion);
                        if (landInfo) {
                          if (item.link === "/approbation-authorities") {
                            targetLink = landInfo.main_link;
                          } else if (item.link === "/medical-chambers") {
                            targetLink = landInfo.doctor_palat;
                          }
                        }
                      } else if (
                        item.link === "/approbation-authorities" ||
                        item.link === "/medical-chambers"
                      ) {
                        // if region not chosen yet, send user to map to pick one
                        targetLink = "/custom-map";
                      }
                      const isActive   = location.pathname === targetLink;
                      const isExternal = targetLink?.startsWith("http");
                      const classes    = `${styles.menuLink} ${isActive ? styles.activeLink : ""}`;

                      return isExternal ? (
                        <a
                          key={i}
                          href={targetLink}
                          className={classes}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item[language]}
                        </a>
                      ) : (
                        <Link
                          key={i}
                          to={targetLink}
                          className={classes}
                          onClick={onClose}
                        >
                          {item[language]}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <div className={styles.authBlock}>
            {!loading && (user ? (
              <button onClick={handleLogout} className={styles.authButton}>
                {main_menu_items.auth.logout[language]}
              </button>
            ) : (
              <Link to="/auth" className={styles.authButton}>
                {main_menu_items.auth.login[language]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;