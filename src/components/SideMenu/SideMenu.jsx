import React, { useState, useEffect } from "react";
import { main_menu_items } from "../../constants/translation/main_menu";
import Avatar from "../../components/Avatar/Avatar";
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

  const displayName = user?.user_metadata?.display_name ?? user?.email ?? "";

  const sortedSections = React.useMemo(() => {
    return [...main_menu_items.sections].sort((a, b) => a.order - b.order);
  }, []);

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

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.sideMenu} ${direction === "right" ? styles.right : ""}`} onClick={handleMenuClick}>
        <div className={styles.sideMenuContent}>
          <div className={styles.avatarBlock}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Avatar stageId={1} />
            </Link>
            <div className={styles.avatarInfo}>
              {user && displayName && (
                <span className={styles.userName}>{displayName}</span>
              )}
              <div className={styles.regionSelection} onClick={handleRegionClick} style={{ cursor: "pointer" }}>
                {selectedRegion || "Обрати регіон"}
              </div>
            </div>
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
          {subscriptionStatus !== "active" && (
            <div className={styles.subscribeBlock}>
            <SubscribeButton user={user} />
            </div>
          )}
          <div className={styles.authBlock}>
            {!loading && (user ? (
              <button onClick={handleLogout} className={styles.authButton}>
                Вийти
              </button>
            ) : (
              <Link to="/auth" className={styles.authButton}>
                Увійти
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;