// src/pages/CasesListPage/CasesListPage.jsx

import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CasesListPage.module.scss";

import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuth } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import useRegionData from "../../hooks/useRegionData";

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
  deleteDoc,
} from "firebase/firestore";

/**
 * Хелпер для завантаження deferred/completed статусів (для кожного регіону).
 */
async function fetchUserCaseStatuses(currentUser, dataSources, setDeferredCases, setCompletedCases) {
  if (!currentUser) return;
  try {
    const userDocRef = doc(db, "users", currentUser.uid);
    const snap = await getDoc(userDocRef);
    if (!snap.exists()) return;

    const userData = snap.data();
    const allDeferred = [];
    const allCompleted = [];

    Object.keys(dataSources)
      .filter((r) => dataSources[r]?.type === "dynamic")
      .forEach((region) => {
        const defArr = userData[`deferredCases_${region}`] || [];
        const compArr = userData[`completedCases_${region}`] || [];
        defArr.forEach((cid) =>
          allDeferred.push({ caseId: String(cid), region })
        );
        compArr.forEach((cid) =>
          allCompleted.push({ caseId: String(cid), region })
        );
      });

    setDeferredCases(allDeferred);
    setCompletedCases(allCompleted);
  } catch (err) {
    console.error("Fehler beim Neu-Laden von deferred/completed:", err);
  }
}

const CasesListPage = () => {
  // ----------------------------------
  // 1) Стан (зокрема localStorage)
  // ----------------------------------
  const savedActiveMenu = localStorage.getItem("activeMenu") || "cases";
  const savedLocalRegion = localStorage.getItem("savedLocalRegion") || "";
  const savedSourceType = localStorage.getItem("savedSourceType") || "local";

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
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);
  const { currentUser } = useAuth();

  // Глобальна інформація
  const { selectedRegion: globalSelectedRegion } = useGetGlobalInfo() || {};
  const {
    localRegion,
    setLocalRegion,
    sourceType,
    setSourceType,
    loading,
    error,
  } = useRegionData(globalSelectedRegion || "", savedSourceType);

  // Deferred / completed
  const [deferredCases, setDeferredCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);
  const [navigating, setNavigating] = useState(false);

  // Sammlungen
  const [collectionsData, setCollectionsData] = useState([]);
  const [collectionsLoading, setCollectionsLoading] = useState(false);

  // МОЇ випадки
  const [myCases, setMyCases] = useState([]);
  const [myCasesLoading, setMyCasesLoading] = useState(true);

  // Реф на модальне вікно (для кліку поза ним)
  const settingsModalRef = useRef(null);

  // ----------------------------------
  // 2) localStorage update
  // ----------------------------------
  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  useEffect(() => {
    localStorage.setItem("savedLocalRegion", localRegion);
  }, [localRegion]);

  useEffect(() => {
    localStorage.setItem("savedSourceType", sourceType);
  }, [sourceType]);

  // ----------------------------------
  // 3) Перевірка Auth
  // ----------------------------------
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // ----------------------------------
  // 4) Читаємо ?colId=... (share collections)
  // ----------------------------------
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const colId = q.get("colId");
    if (colId && currentUser) {
      setActiveMenu("collections");
      setSharingColId(colId);
    }
  }, [location.search, currentUser]);

  // ----------------------------------
  // 5) Завантаження deferred/completed
  // ----------------------------------
  const reloadStatuses = useCallback(async () => {
    await fetchUserCaseStatuses(currentUser, dataSources, setDeferredCases, setCompletedCases);
  }, [currentUser, dataSources]);

  useEffect(() => {
    reloadStatuses();
  }, [reloadStatuses]);

  // ----------------------------------
  // 6) Завантаження колекцій (collections)
  // ----------------------------------
  useEffect(() => {
    if (activeMenu !== "collections") return;
    setCollectionsLoading(true);

    (async () => {
      try {
        const dynRegions = Object.keys(dataSources).filter(
          (r) => dataSources[r].type === "dynamic"
        );
        let allCases = [];

        // Збираємо всі кейси з різних region (dynamic)
        for (const rg of dynRegions) {
          const docRef = doc(db, "cases", rg);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const docData = docSnap.data();
            const fetched = docData.cases || [];
            const mapped = fetched.map((caseItem) => ({
              ...caseItem,
              region: rg,
            }));
            allCases = [...allCases, ...mapped];
          }
        }

        // Групуємо кейси за authorId
        const authorMap = {};
        for (const c of allCases) {
          if (!c.authorId) continue;
          if (!authorMap[c.authorId]) authorMap[c.authorId] = [];
          authorMap[c.authorId].push(c);
        }

        // Беремо тільки тих авторів, у яких >= 2 кейсів
        const authors2plus = Object.keys(authorMap).filter(
          (aid) => authorMap[aid].length >= 2
        );

        if (!authors2plus.length) {
          setCollectionsData([]);
          setCollectionsLoading(false);
          return;
        }

        // Завантажуємо імена авторів (таблиця "users")
        const usersRef = collection(db, "users");
        const q_ = query(usersRef, where(documentId(), "in", authors2plus));
        const qSnap = await getDocs(q_);

        const authorsMapTemp = {};
        qSnap.forEach((snapDoc) => {
          const d = snapDoc.data();
          authorsMapTemp[snapDoc.id] = d.firstName || "Autor?";
        });

        const finalArr = authors2plus.map((aId) => ({
          authorId: aId,
          authorName: authorsMapTemp[aId],
          cases: authorMap[aId],
        }));

        setCollectionsData(finalArr);

        // Якщо прийшли по ?colId
        if (sharingColId) {
          const found = finalArr.find((x) => x.authorId === sharingColId);
          if (found) setSelectedAuthor(sharingColId);
        }
      } catch (err) {
        console.error("Fehler beim Laden der Sammlungen:", err);
      } finally {
        setCollectionsLoading(false);
      }
    })();
  }, [activeMenu, dataSources, db, sharingColId]);

  // ----------------------------------
  // 7) Завантаження "Моїх випадків" (myCases)
  // ----------------------------------
  useEffect(() => {
    if (activeMenu !== "myCases") return;
    setMyCasesLoading(true);

    (async () => {
      try {
        if (!currentUser) {
          setMyCasesLoading(false);
          return;
        }
        // Завантажуємо всі regions "cases"
        const rootColl = collection(db, "cases");
        const allDocs = await getDocs(rootColl);

        const userCases = [];
        allDocs.forEach((snapDoc) => {
          const regionKey = snapDoc.id;
          const docData = snapDoc.data();
          if (docData.cases && Array.isArray(docData.cases)) {
            docData.cases.forEach((c) => {
              if (c.authorId === currentUser.uid) {
                userCases.push({ ...c, region: regionKey });
              }
            });
          }
        });

        setMyCases(userCases);
      } catch (err) {
        console.error("Fehler beim Laden Ihrer Fälle:", err);
      } finally {
        setMyCasesLoading(false);
      }
    })();
  }, [activeMenu, currentUser, dataSources]);

  // ----------------------------------
  // 8) Хелпер для сортування
  //  "deferred" -> перші, "null" (без статусу) -> далі, "completed" -> останні
  // ----------------------------------
  const statusOrder = (st) => {
    if (st === "deferred") return 1;
    if (st === "completed") return 3;
    return 2;
  };

  // ----------------------------------
  // 9) getCaseStatus
  // ----------------------------------
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

  // ----------------------------------
  // 10) Відкрити детальну сторінку кейсу (FSP)
  // ----------------------------------
  const handleCaseClick = async (caseId, source, region) => {
    try {
      setNavigating(true);
      if (source === "firebase") {
        await fetchFirebaseCases(region);
      }
      navigate(`${pathList.informationSources.path}/${source}/${caseId}`);
    } catch (err) {
      console.error("Fehler beim Öffnen des Falls:", err);
    } finally {
      setNavigating(false);
    }
  };

  // ----------------------------------
  // 11) Позначити кейс як "Erledigt" / "Später"
  // ----------------------------------
  const handleMarkAsCompleted = async (caseId, region) => {
    if (!currentUser) return;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data() || {};

      const cKey = `completedCases_${region}`;
      const dKey = `deferredCases_${region}`;

      const isCompleted = userData?.[cKey]?.includes(String(caseId));
      if (isCompleted) {
        // видаляємо з completed
        await updateDoc(userDocRef, {
          [cKey]: arrayRemove(String(caseId)),
        });
        setCompletedCases((prev) =>
          prev.filter((x) => !(x.caseId === caseId && x.region === region))
        );
      } else {
        // додаємо в completed, видаляємо з deferred
        await updateDoc(userDocRef, {
          [cKey]: arrayUnion(String(caseId)),
          [dKey]: arrayRemove(String(caseId)),
        });
        setCompletedCases((prev) => [...prev, { caseId, region }]);
        setDeferredCases((prev) =>
          prev.filter((x) => !(x.caseId === caseId && x.region === region))
        );
      }

      // Перезавантажуємо, аби мати точний стан
      await reloadStatuses();
    } catch (err) {
      console.error("Fehler beim Aktualisieren des Erledigt-Status:", err);
    }
  };

  const handleDeferCase = async (caseId, region) => {
    if (!currentUser) return;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data() || {};

      const cKey = `completedCases_${region}`;
      const dKey = `deferredCases_${region}`;

      const isDeferred = userData?.[dKey]?.includes(String(caseId));
      if (isDeferred) {
        // видаляємо з deferred
        await updateDoc(userDocRef, {
          [dKey]: arrayRemove(String(caseId)),
        });
        setDeferredCases((prev) =>
          prev.filter((x) => !(x.caseId === caseId && x.region === region))
        );
      } else {
        // додаємо в deferred, видаляємо з completed
        await updateDoc(userDocRef, {
          [dKey]: arrayUnion(String(caseId)),
          [cKey]: arrayRemove(String(caseId)),
        });
        setDeferredCases((prev) => [...prev, { caseId, region }]);
        setCompletedCases((prev) =>
          prev.filter((x) => !(x.caseId === caseId && x.region === region))
        );
      }

      await reloadStatuses();
    } catch (err) {
      console.error("Fehler beim Aktualisieren des Später-Status:", err);
    }
  };

  // ----------------------------------
  // Видалення кейсу (у блоці Мої кейси)
  // ----------------------------------
  const handleDelete = async (caseItem) => {
    if (!currentUser) return;

    const confirmDel = window.confirm(
      `Möchten Sie den Fall löschen: ${caseItem.fullName}?`
    );
    if (!confirmDel) return;

    try {
      const regionDocRef = doc(db, "cases", caseItem.region);
      const regionSnap = await getDoc(regionDocRef);
      if (!regionSnap.exists()) {
        console.error("Region nicht gefunden:", caseItem.region);
        return;
      }

      const regionData = regionSnap.data();
      if (!regionData.cases || !Array.isArray(regionData.cases)) {
        console.error("Keine 'cases'-Array in den Regionsdaten gefunden.");
        return;
      }

      // Видаляємо конкретний кейс
      const updated = regionData.cases.filter(
        (c) => String(c.id) !== String(caseItem.id)
      );

      await updateDoc(regionDocRef, { cases: updated });

      // Локально видаляємо
      setMyCases((prev) =>
        prev.filter((c) => String(c.id) !== String(caseItem.id))
      );
      // Також видаляємо з completed/deferred (якщо він там був)
      setCompletedCases((prev) =>
        prev.filter((x) => !(x.caseId === String(caseItem.id)))
      );
      setDeferredCases((prev) =>
        prev.filter((x) => !(x.caseId === String(caseItem.id)))
      );

      alert("Der Fall wurde erfolgreich gelöscht!");
    } catch (err) {
      console.error("Fehler beim Löschen des Falls:", err);
      alert("Fehler beim Löschen des Falls.");
    }
  };

  // ----------------------------------
  // Поділитися колекцією
  // ----------------------------------
  const handleShareCollection = () => {
    if (!selectedAuthor) return;
    const newUrl = `${window.location.origin}${location.pathname}?colId=${selectedAuthor}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Teile die Sammlung",
          text: "Sieh dir meine Sammlung an:",
          url: newUrl,
        })
        .catch((err) => console.warn("Freigabe abgebrochen/Fehler:", err));
    } else {
      alert("Ihr Browser unterstützt kein Web Share API.");
    }
  };

  // ----------------------------------
  // 13) Аккордеон
  // ----------------------------------
  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? "" : section));
  };

  // ----------------------------------
  // 14) Перемикання меню
  // ----------------------------------
  const toggleMenuSection = (section) => {
    setActiveMenu(section);
    localStorage.setItem("activeMenu", section);
    if (section === "collections" || section === "myCases") {
      if (sourceType !== "firebase") {
        setSourceType("firebase");
      }
    }
  };

  // ----------------------------------
  // 15) Налаштування (Modal)
  // ----------------------------------
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

  // ----------------------------------
  // 16) Сортування кейсів за статусом
  // ----------------------------------
  const sortedCases = (list, region) => {
    return list.sort((a, b) => {
      const stA = getCaseStatus(a.id, region);
      const stB = getCaseStatus(b.id, region);
      return statusOrder(stA) - statusOrder(stB);
    });
  };

  // ----------------------------------
  // Рендер
  // ----------------------------------
  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Кнопка налаштувань (зліва внизу) */}
        <div className={styles.bottomControls}>
          <button className={styles.settingsButton} onClick={toggleSettingsModal}>
            <FaCog />
          </button>
        </div>

        {/* Кнопка Share (справа внизу), якщо ми в колекціях і обрано автора */}
        {activeMenu === "collections" && selectedAuthor && (
          <div className={styles.bottomRightShare}>
            <button className={styles.shareRoundButton} onClick={handleShareCollection}>
              <FaShareSquare />
            </button>
          </div>
        )}

        {/* Якщо loading / navigating - показуємо spinner */}
        {(loading || navigating) && (
          <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}></div>
          </div>
        )}

        {/* ========== CASES (звичайні кейси) ========== */}
        {activeMenu === "cases" && !loading && !navigating && (
          <section>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!localRegion && (
              <p style={{ color: "#555" }}>
                Bitte wählen Sie eine Region in den Einstellungen.
              </p>
            )}

            {localRegion ? (
              (() => {
                const regionObj = dataSources[localRegion];
                if (!regionObj) {
                  return <p>Unbekannte Region.</p>;
                }
                let arr =
                  sourceType === "local"
                    ? regionObj.sources?.local || []
                    : regionObj.sources?.firebase || [];

                arr = sortedCases(arr, localRegion);

                if (!arr.length) {
                  return <p>Keine Fälle in dieser Quelle.</p>;
                }
                return (
                  <div className={styles.tilesContainer}>
                    {arr.map((cItem) => {
                      const st = getCaseStatus(cItem.id, localRegion);
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
                            handleCaseClick(cItem.id, sourceType, localRegion)
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
                                handleMarkAsCompleted(cItem.id, localRegion);
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
                                handleDeferCase(cItem.id, localRegion);
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
                // сортуємо за статусом
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
                                  handleMarkAsCompleted(
                                    cItem.id,
                                    cItem.region
                                  );
                                }}
                              >
                                <FaCheck />
                              </button>
                              <button
                                className={`${styles.button} ${styles.deferButton} ${
                                  st === "deferred" ? styles.active : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeferCase(cItem.id, cItem.region);
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
        {activeMenu === "myCases" && !myCasesLoading && (
          <section>
            {myCases.length ? (
              <div className={styles.tilesContainer}>
                {myCases.map((mc) => {
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
                          onClick={(e) => {
                            e.stopPropagation();
                            // перехід на сторінку EditCasePage
                            navigate("/edit-case", { state: { myCase: mc } });
                          }}
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
        {activeMenu === "myCases" && myCasesLoading && (
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
              <FaTimes />
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
                  <span style={{ color: "#013b6e", fontWeight: "bold" }}>
                    Local / Online Fälle
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    openAccordion === "cases" ? styles.expanded : ""
                  }`}
                >
                  {/* Regions */}
                  <select
                    value={localRegion}
                    onChange={(e) => setLocalRegion(e.target.value)}
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
                  <div className={styles.toggleRow}>
                    <span
                      style={{
                        color: sourceType === "local" ? "#013b6e" : "#999",
                        fontWeight: sourceType === "local" ? "bold" : "normal",
                      }}
                    >
                      Local
                    </span>
                    <label className={styles.toggleSwitch}>
                      <input
                        type="checkbox"
                        className={styles.toggleInput}
                        checked={sourceType === "firebase"}
                        onChange={() =>
                          setSourceType(
                            sourceType === "local" ? "firebase" : "local"
                          )
                        }
                      />
                      <span className={styles.toggleLabel} />
                    </label>
                    <span
                      style={{
                        color: sourceType === "firebase" ? "#013b6e" : "#999",
                        fontWeight:
                          sourceType === "firebase" ? "bold" : "normal",
                      }}
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
                  <span style={{ color: "#013b6e", fontWeight: "bold" }}>
                    Sammlungen
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    openAccordion === "collections" ? styles.expanded : ""
                  }`}
                >
                  {/* Порожньо; кнопка Share праворуч внизу */}
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
                  <span style={{ color: "#013b6e", fontWeight: "bold" }}>
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
    </MainLayout>
  );
};

export default CasesListPage;