// src/pages/CasesListPage/CasesListPage.jsx

import React, { useContext, useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CasesListPage.module.scss";

import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuth } from "../../contexts/AuthContext";
import { useCases } from "../../contexts/CasesContext"; // Імпорт useCases
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { supabase } from "../../supabaseClient";
import {
  FaCog,
  FaMapMarkerAlt,
  FaTimes,
  FaCheck,
  FaPause,
  FaPlus,
  FaArrowLeft,
  FaShareSquare,
} from "react-icons/fa";

import { pathList } from "../../routes/path";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import SavedCasesWidget from "../../components/SavedCasesWidget"; // Імпорт компонента
import { toast, ToastContainer } from "react-toastify"; // Імпорт ToastContainer та toast

const CasesListPage = () => {
  // ----------------------------------
  // Стан
  // ----------------------------------
  const savedActiveMenu = localStorage.getItem("activeMenu") || "cases";
  const [activeMenu, setActiveMenu] = useState(savedActiveMenu);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Аккордеон
  const [openAccordion, setOpenAccordion] = useState("cases");

  // Для collections
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [sharingColId, setSharingColId] = useState(null);

  // Навігація
  const navigate = useNavigate();
  const location = useLocation();

  // Контексти
  const { dataSources } = useContext(DataSourceContext);
  const { currentUser } = useAuth();

  // Використання CasesContext
  const {
    userCases,
    regionalCases,
    selectedRegion,
    sourceType,
    handleDelete,
    handleMarkAsCompleted, // Змінено назву
    handleDeferCase, // Змінено назву
    handleCaseClick,
    handleEdit,
    setSourceType,
    setSelectedRegion,
    loading,
    error,
    handleShareCollection,
    deferredCases, // Деструктуризація deferredCases
    completedCases, // Деструктуризація completedCases
  } = useCases();

  // Sammlungen
  const [collectionsData, setCollectionsData] = useState([]);
  const [collectionsLoading, setCollectionsLoading] = useState(false);

  // Реф на модальне вікно (для кліку поза ним)
  const settingsModalRef = useRef(null);

  // Додано оголошення стану navigating
  const [navigating, setNavigating] = useState(false);

  // ----------------------------------
  // localStorage update
  // ----------------------------------
  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  // Перевірка Auth
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Читаємо ?colId=... (share collections)
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const colId = q.get("colId");
    if (colId && currentUser) {
      setActiveMenu("collections");
      setSharingColId(colId);
    }
  }, [location.search, currentUser]);

  // Load collections from Supabase (authors with ≥2 cases)
  useEffect(() => {
    if (activeMenu !== "collections") return;
    setCollectionsLoading(true);
    (async () => {
      try {
        // Fetch all region records with JSONB cases
        const { data: regionRecords, error: regionError } = await supabase
          .from("cases")
          .select("id, cases");
        if (regionError) throw regionError;
        // Flatten all cases from each region record
        const allCases = regionRecords.flatMap(rec =>
          (rec.cases || []).map(c => ({
            ...c,
            region: rec.id,
          }))
        );
        console.log("AllCases flattened for collections:", allCases);
        // Group by author
        const authorMap = {};
        allCases.forEach(c => {
          const aid = c.authorid || c.authorId;
          if (!aid) return;
          if (!authorMap[aid]) authorMap[aid] = [];
          authorMap[aid].push(c);
        });
        console.log("AuthorMap keys:", Object.keys(authorMap), authorMap);
        // Filter authors with ≥2 cases
        const authors2 = Object.entries(authorMap).filter(
          ([, arr]) => arr.length >= 2
        );
        if (!authors2.length) {
          setCollectionsData([]);
          return;
        }
        // Use author IDs as names (no profiles table)
        const nameMap = authors2.reduce((map, [aid]) => {
          map[aid] = aid;
          return map;
        }, {});
        // Build collections array
        const finalArr = authors2.map(([aid, casesArr]) => ({
          authorId: aid,
          authorName: nameMap[aid] || aid,
          cases: casesArr.map((c) => ({ ...c, region: c.region || c.id })),
        }));
        setCollectionsData(finalArr);
        if (sharingColId) {
          const found = finalArr.find((x) => x.authorId === sharingColId);
          if (found) setSelectedAuthor(sharingColId);
        }
      } catch (err) {
        console.error("Error loading collections from Supabase:", err);
      } finally {
        setCollectionsLoading(false);
      }
    })();
  }, [activeMenu, sharingColId]);

  // Функція сортування кейсів
  const statusOrder = (st) => {
    if (st === "deferred") return 1;
    if (st === "completed") return 3;
    return 2;
  };

  const getCaseStatus = (caseId, region) => {
    const isDef = deferredCases.some(
      (x) => x.caseId === String(caseId) && x.region === region
    );
    if (isDef) return "deferred";

    const isComp = completedCases.some(
      (x) => x.caseId === String(caseId) && x.region === region
    );
    if (isComp) return "completed";

    return null;
  };

  // Сортування кейсів за статусом
  const sortedCases = (list, region) => {
    return [...list].sort((a, b) => {
      const stA = getCaseStatus(a.id, region);
      const stB = getCaseStatus(b.id, region);
      return statusOrder(stA) - statusOrder(stB);
    });
  };

  // Додаткова функція для редагування кейсу
  const handleEditCase = (e, mc) => {
    e.stopPropagation();
    navigate("/edit-case", { state: { myCase: mc } });
  };

  // Поділитися колекцією (використовуйте функцію з контексту)
  // handleShareCollection вже доступна через контекст

  // Аккордеон
  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? "" : section));
  };

  // Перемикання меню
  const toggleMenuSection = (section) => {
    setActiveMenu(section);
    localStorage.setItem("activeMenu", section);
    // Видаляємо автоматичне встановлення sourceType
  };

  // Налаштування (Modal)
  const toggleSettingsModal = () => {
    setIsSettingsOpen((p) => !p);
  };

  const handleClickOutside = (evt) => {
    if (
      settingsModalRef.current &&
      !settingsModalRef.current.contains(evt.target)
    ) {
      setIsSettingsOpen(false);
    }
  };

  useEffect(() => {
    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsOpen]);



  // Рендер
  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Кнопка налаштувань (зліва внизу) */}
        <div className={styles.bottomControls}>
          <button
            className={styles.settingsButton}
            onClick={toggleSettingsModal}
          >
            <FaCog />
          </button>
        </div>

        {/* Кнопка Share (справа внизу), якщо ми в колекціях і обрано автора */}
        {activeMenu === "collections" && selectedAuthor && (
          <div className={styles.bottomRightShare}>
            <button
              className={styles.shareRoundButton}
              onClick={handleShareCollection}
            >
              <FaShareSquare />
            </button>
          </div>
        )}

        {/* Якщо loading / navigating - показуємо спінер */}
        {(loading || navigating) && (
          <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}></div>
          </div>
        )}

        {/* ========== CASES (звичайні кейси) ========== */}
        {activeMenu === "cases" && !loading && !navigating && (
          <section>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!selectedRegion && (
              <p style={{ color: "#555" }}>
                Bitte wählen Sie eine Region in den Einstellungen.
              </p>
            )}

            {selectedRegion ? (
              (() => {
                // Use regionalCases from context (handles both local and supabase sources)
                let arr = regionalCases || [];

                arr = sortedCases(arr, selectedRegion);

                if (!arr.length) {
                  return <p>Keine Fälle in dieser Quelle.</p>;
                }
                return (  
                  <div className={styles.tilesContainer}>
                    {arr.map((cItem) => {
                      const st = getCaseStatus(cItem.id, selectedRegion);
                      return (
                        <div
                          key={cItem.id}
                          className={`${styles.tile} ${
                            st === "completed"
                              ? styles.completed
                              : st === "deferred"
                              ? styles.deferred
                              : ""
                          }`}
                          onClick={() =>
                            handleCaseClick(cItem.id, sourceType, selectedRegion)
                          }
                        >
                          <div className={styles.actions}>
                            {/* Erledigt */}
                            <button
                              className={`${styles.button} ${styles.markCompletedButton} ${
                                st === "completed" ? styles.active : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMarkAsCompleted(cItem.id, selectedRegion); // Змінено назву функції
                              }}
                            >
                              <FaCheck />
                            </button>
                            {/* Später */}
                            <button
                              className={`${styles.button} ${styles.deferButton} ${
                                st === "deferred" ? styles.active : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeferCase(cItem.id, selectedRegion); // Змінено назву функції
                              }}
                            >
                              <FaPause />
                            </button>
                          </div>
                          <p className={styles.tileHeader}>
                            {cItem.fullName || cItem.name || "Ohne Titel"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })()
            ) : (
              <p>Keine Fälle vorhanden.</p>
            )}
          </section>
        )}

        {/* ========== COLLECTIONS ========== */}
        {activeMenu === "collections" && !collectionsLoading && (
          <section>
            {selectedAuthor === "" ? (
              <>
                {collectionsData.length ? (
                  <div className={styles.tilesContainer}>
                    {collectionsData.map((authorBlock) => (
                      <div
                        key={authorBlock.authorId}
                        className={`${styles.tile} ${styles.authorTile}`}
                        onClick={() => setSelectedAuthor(authorBlock.authorId)}
                      >
                        <p className={styles.tileHeader}>
                          {authorBlock.authorName}
                        </p>
                        <p style={{ color: "#555" }}>
                          Fälle: {authorBlock.cases.length}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: "#555" }}>
                    Keine Autoren mit mindestens 2 Fällen.
                  </p>
                )}
              </>
            ) : (
              (() => {
                const authorItem = collectionsData.find(
                  (x) => x.authorId === selectedAuthor
                );
                if (!authorItem) {
                  return <p style={{ color: "#555" }}>Autor nicht gefunden.</p>;
                }
                const sortedList = sortedCases(authorItem.cases, authorItem.region);

                return (
                  <>
                    <button
                      className={styles.arrowButton}
                      onClick={() => setSelectedAuthor("")}
                    >
                      <FaArrowLeft />
                    </button>
                    <div className={styles.tilesContainer}>
                      {sortedList.map((cItem) => {
                        const st = getCaseStatus(cItem.id, cItem.region);
                        return (
                          <div
                            key={cItem.id}
                            className={`${styles.tile} ${
                              st === "completed"
                                ? styles.completed
                                : st === "deferred"
                                ? styles.deferred
                                : ""
                            }`}
                            onClick={() =>
                              handleCaseClick(cItem.id, "firebase", cItem.region)
                            }
                          >
                            <div className={styles.actions}>
                              <button
                                className={`${styles.button} ${styles.markCompletedButton} ${
                                  st === "completed" ? styles.active : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMarkAsCompleted(cItem.id, cItem.region); // Змінено назву функції
                                }}
                              >
                                <FaCheck />
                              </button>
                              <button
                                className={`${styles.button} ${styles.markDeferredButton} ${
                                  st === "deferred" ? styles.active : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeferCase(cItem.id, cItem.region); // Змінено назву функції
                                }}
                              >
                                <FaPause />
                              </button>
                            </div>
                            <p className={styles.tileHeader}>
                              {cItem.fullName || cItem.name || "Ohne Titel"}
                            </p>
                            <p style={{ color: "#000" }}>
                              <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                              {cItem.region}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })()
            )}
          </section>
        )}
        {activeMenu === "collections" && collectionsLoading && (
          <p style={{ color: "#555", marginTop: "20px" }}>
            Sammlungen werden geladen...
          </p>
        )}

        {/* ========== MY CASES ========== */}
        {activeMenu === "myCases" && !loading && (
          <section>
            {userCases.length ? (
              <div className={styles.tilesContainer}>
                {userCases.map((mc) => {
                  const st = getCaseStatus(mc.id, mc.region);
                  return (
                    <div
                      key={mc.id}
                      className={`${styles.tile} ${
                        st === "completed"
                          ? styles.completed
                          : st === "deferred"
                          ? styles.deferred
                          : ""
                      }`}
                      onClick={() => handleCaseClick(mc.id, "firebase", mc.region)}
                    >
                      <div className={styles.actions}>
                        {/* Редагувати */}
                        <button
                          className={`${styles.button} ${styles.editButton}`}
                          onClick={(e) => handleEditCase(e, mc)}
                        >
                          <FaCog />
                        </button>
                        {/* Видалити */}
                        <button
                          className={`${styles.button} ${styles.deleteButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(mc);
                          }}
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <h3 className={styles.tileHeader}>{mc.fullName}</h3>
                      <p style={{ color: "#555" }}>{mc.region}</p>
                    </div>
                  );
                })}
                {/* Додати новий кейс */}
                <div
                  className={`${styles.tile} ${styles.addNewTile}`}
                  style={{
                    border: "2px dashed #999",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/data-collection")}
                >
                  <FaPlus size={30} style={{ opacity: 0.8 }} />
                </div>
              </div>
            ) : (
              <p style={{ color: "#555" }}>Sie haben momentan keine Fälle.</p>
            )}
          </section>
        )}
        {activeMenu === "myCases" && loading && (
          <p style={{ color: "#555", marginTop: "20px" }}>
            Ihre Fälle werden geladen...
          </p>
        )}

        {/* ======== Einstellungs-Modal ======== */}
        {isSettingsOpen && (
          <div className={styles.settingsModal} ref={settingsModalRef}>
            <button
              className={styles.closeButton}
              onClick={() => setIsSettingsOpen(false)}
            >
               ×
            </button>

            <div className={styles.settingsContent}>
              {/* CASES */}
              <div className={styles.accordionSection}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => {
                    toggleMenuSection("cases");
                    toggleAccordion("cases");
                  }}
                >
                 <span style={{ fontWeight: "bold" }}>
                    Local / Online Fälle
                  </span>
                </button>
                
                <div
                  className={`${styles.accordionContent} ${
                    openAccordion === "cases" ? styles.expanded : ""
                  }`}
                >
                  {/* Вибір регіону */}
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)} // Використання функції з контексту
                    className={styles.regionSelect}
                  >
                    <option value="">-- Region --</option>
                    {Object.values(dataSources)
                      .filter((r) => r.type === "dynamic")
                      .map((r) => (
                        <option key={r.region} value={r.region}>
                          {r.name}
                        </option>
                      ))}
                  </select>
                  {/* Тумблер Local/Online */}
                  <div className={styles["data-source-toggle"]}>
  <span
    className={`${styles["label-left"]} ${
      sourceType === "local" ? styles["label-active"] : ""
    }`}
  >
    Local
  </span>

  <label className={styles.switch}>
    <input
      type="checkbox"
      checked={sourceType === "firebase"}
      onChange={() =>
        setSourceType(sourceType === "local" ? "firebase" : "local")
      }
      aria-label="Umschalter für Datenquelle"
    />
    <span className={styles.slider}></span>
  </label>

  <span
    className={`${styles["label-right"]} ${
      sourceType === "firebase" ? styles["label-active"] : ""
    }`}
  >
    Online
  </span>
</div>
                </div>
              </div>

              {/* COLLECTIONS */}
              <div className={styles.accordionSection}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => {
                    toggleMenuSection("collections");
                    toggleAccordion("collections");
                  }}
                >
               <span style={{ fontWeight: "bold" }}>
                    Sammlungen
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    openAccordion === "collections" ? styles.expanded : ""
                  }`}
                >
                  {/* Порожньо; кнопка Share (справа внизу) */}
                </div>
              </div>

              {/* MY CASES */}
              <div className={styles.accordionSection}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => {
                    toggleMenuSection("myCases");
                    toggleAccordion("myCases");
                  }}
                >
                <span style={{ fontWeight: "bold" }}>
                    Meine Fälle
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    openAccordion === "myCases" ? styles.expanded : ""
                  }`}
                >
                  {/* Порожньо */}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <ToastContainer /> {/* Додано контейнер для toast повідомлень */}
    </MainLayout>
  );
};

export default CasesListPage;