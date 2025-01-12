// src/pages/CasesListPage/CasesListPage.jsx

import React, { useContext, useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CasesListPage.module.scss";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuth } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import useRegionData from "../../hooks/useRegionData";
import { toast, ToastContainer } from "react-toastify";
import { FaCog, FaMapMarkerAlt, FaTimes, FaCheck, FaPause } from "react-icons/fa";
import { pathList } from "../../routes/path";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc, collection, getDocs } from "firebase/firestore";
import useFetchCases from "../../hooks/useFetchCases";
import useFetchAuthors from "../../hooks/useFetchAuthors";

const CasesListPage = () => {
  const [activeMenu, setActiveMenu] = useState("cases"); // 'cases', 'collections', 'myCases'
  const { dataSources } = useContext(DataSourceContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { selectedRegion: globalSelectedRegion } = useGetGlobalInfo() || {};

  const {
    localRegion,
    setLocalRegion,
    sourceType,
    setSourceType,
    loading: regionLoading,
    error: regionError,
  } = useRegionData(globalSelectedRegion || "", "local", () => {});

  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);
  const [navigating, setNavigating] = useState(false);
  const [deferredCases, setDeferredCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);
  const [myCases, setMyCases] = useState([]);
  const [myCasesLoading, setMyCasesLoading] = useState(true);

  // Перевірка автентифікації
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Завантаження статусів випадків користувача
  useEffect(() => {
    const fetchUserCaseStatuses = async () => {
      if (!currentUser) return;

      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          toast.error("Дані користувача не знайдено.");
          return;
        }

        const userData = userDocSnap.data();
        const allDeferred = [];
        const allCompleted = [];

        Object.keys(dataSources)
          .filter(region => dataSources[region]?.type === "dynamic")
          .forEach(region => {
            const deferred = userData[`deferredCases_${region}`] || [];
            const completed = userData[`completedCases_${region}`] || [];

            deferred.forEach(caseId => allDeferred.push({ caseId: String(caseId), region }));
            completed.forEach(caseId => allCompleted.push({ caseId: String(caseId), region }));
          });

        setDeferredCases(allDeferred);
        setCompletedCases(allCompleted);
      } catch (error) {
        console.error("Error fetching user case statuses:", error);
        toast.error("Сталася помилка при завантаженні статусів випадків.");
      }
    };

    fetchUserCaseStatuses();
  }, [currentUser, dataSources]);

  // Завантаження "Моїх Випадків"
  useEffect(() => {
    const loadMyCases = async () => {
      setMyCasesLoading(true);
      if (!currentUser) {
        setMyCasesLoading(false);
        return;
      }

      try {
        const casesCollection = collection(db, "cases");
        const casesSnapshot = await getDocs(casesCollection);
        const userCases = [];

        casesSnapshot.forEach((docSnap) => {
          const region = docSnap.id;
          const data = docSnap.data();
          if (data.cases && Array.isArray(data.cases)) {
            data.cases.forEach((caseItem, index) => {
              if (caseItem.authorId === currentUser.uid) {
                userCases.push({
                  ...caseItem,
                  region,
                  caseIndex: index,
                });
              }
            });
          }
        });

        setMyCases(userCases);
      } catch (error) {
        console.error("Error fetching user cases:", error);
        toast.error("Помилка при завантаженні ваших випадків.");
      } finally {
        setMyCasesLoading(false);
      }
    };

    if (activeMenu === "myCases") {
      loadMyCases();
    }
  }, [activeMenu, currentUser]);

  // Використання React Query для завантаження випадків
  const { data: fetchedCases, isLoading: casesLoading, error: casesError } = useFetchCases(localRegion, sourceType);

  // Підрахунок авторів з мінімум 2 випадками
  const authorCaseCount = useMemo(() => {
    if (!fetchedCases) return {};

    const counts = {};
    fetchedCases.forEach(caseItem => {
      const authorId = caseItem.authorId;
      if (authorId) {
        counts[authorId] = (counts[authorId] || 0) + 1;
      }
    });
    return counts;
  }, [fetchedCases]);

  const uniqueAuthorIds = useMemo(() => {
    return Object.keys(authorCaseCount).filter(authorId => authorCaseCount[authorId] >= 2);
  }, [authorCaseCount]);

  // Використання React Query для завантаження авторів
  const { data: authors, isLoading: authorsLoading, error: authorsError } = useFetchAuthors(uniqueAuthorIds);

  // Створення мапи authorId до firstName
  const authorsMap = useMemo(() => {
    const map = {};
    if (authors) {
      authors.forEach(author => {
        map[author.authorId] = author.firstName;
      });
    }
    return map;
  }, [authors]);

  // Обробка вибору автора
  const handleAuthorSelect = (firstName) => {
    setSelectedAuthor(firstName);
  };

  // Функція для визначення статусу випадку
  const getCaseStatus = (caseId, region) => {
    if (deferredCases.some(item => item.caseId === caseId && item.region === region)) {
      return "deferred";
    }
    if (completedCases.some(item => item.caseId === caseId && item.region === region)) {
      return "completed";
    }
    return null; // Без статусу
  };

  // Фільтрація випадків за автором та інші фільтри
  const filteredCases = useMemo(() => {
    if (!fetchedCases) return [];

    let casesToFilter = [...fetchedCases];

    // Додати статус до кожного випадку
    casesToFilter = casesToFilter.map(caseItem => ({
      ...caseItem,
      status: getCaseStatus(String(caseItem.id), caseItem.region),
    }));

    // Фільтрація за автором
    if (activeMenu === "collections" && selectedAuthor !== "") {
      const authorEntry = Object.entries(authorsMap).find(
        ([id, name]) => name.toLowerCase() === selectedAuthor.toLowerCase()
      );
      const authorId = authorEntry ? authorEntry[0] : null;

      if (authorId) {
        casesToFilter = casesToFilter.filter(caseItem => caseItem.authorId === authorId);
      } else {
        casesToFilter = []; // Якщо authorId не знайдено, відобразити порожній список
      }
    }

    // Сортування випадків: спочатку "deferred", потім без статусу, потім "completed"
    casesToFilter.sort((a, b) => {
      const statusOrder = (status) => {
        if (status === "deferred") return 1;
        if (status === "completed") return 3;
        return 2; // Для випадків без статусу
      };
      return statusOrder(a.status) - statusOrder(b.status);
    });

    return casesToFilter;
  }, [fetchedCases, activeMenu, selectedAuthor, authorsMap, deferredCases, completedCases]);

  // Обробка кліку на випадок
  const handleCaseClick = async (caseId, sourceTypeCase, caseRegion) => {
    try {
      setNavigating(true);
      // Перевірка існування випадку в Firebase, якщо джерело - firebase
      if (sourceTypeCase === "firebase") {
        const casesRef = collection(db, "cases", caseRegion, "cases");
        const caseDocRef = doc(casesRef, String(caseId));
        const caseSnap = await getDoc(caseDocRef);
        if (!caseSnap.exists()) {
          toast.error("Випадок не знайдено у Firebase.");
          setNavigating(false);
          return;
        }
      }

      const targetPath = `${pathList.informationSources.path}/${sourceTypeCase}/${caseId}`;
      navigate(targetPath);
    } catch (error) {
      console.error("Error handling case click:", error);
      toast.error("Сталася помилка при обробці випадку.");
    } finally {
      setNavigating(false);
    }
  };

  // Функції для зміни статусу випадку
  const handleMarkAsCompleted = async (caseId, region) => {
    if (!currentUser) {
      toast.error("Користувач не автентифікований.");
      return;
    }
    const userDocRef = doc(db, "users", currentUser.uid);
    try {
      const completedCasesKey = `completedCases_${region}`;
      const deferredCasesKey = `deferredCases_${region}`;
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data();

      const isCompleted = userData?.[completedCasesKey]?.includes(String(caseId));

      if (isCompleted) {
        // Видалити з completedCases
        await updateDoc(userDocRef, {
          [completedCasesKey]: arrayRemove(String(caseId)),
        });
        setCompletedCases(prev =>
          prev.filter(item => !(item.caseId === String(caseId) && item.region === region))
        );
        toast.success("Статус 'Виконано' видалено.");
      } else {
        // Додати до completedCases і видалити з deferredCases
        await updateDoc(userDocRef, {
          [completedCasesKey]: arrayUnion(String(caseId)),
          [deferredCasesKey]: arrayRemove(String(caseId)),
        });
        setCompletedCases(prev => [...prev, { caseId: String(caseId), region }]);
        setDeferredCases(prev =>
          prev.filter(item => !(item.caseId === String(caseId) && item.region === region))
        );
        toast.success("Статус 'Виконано' додано.");
      }
    } catch (error) {
      console.error("Error updating completed status:", error);
      toast.error("Сталася помилка при оновленні статусу.");
    }
  };

  const handleDeferCase = async (caseId, region) => {
    if (!currentUser) {
      toast.error("Користувач не автентифікований.");
      return;
    }
    const userDocRef = doc(db, "users", currentUser.uid);
    try {
      const deferredCasesKey = `deferredCases_${region}`;
      const completedCasesKey = `completedCases_${region}`;
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data();

      const isDeferred = userData?.[deferredCasesKey]?.includes(String(caseId));

      if (isDeferred) {
        // Видалити з deferredCases
        await updateDoc(userDocRef, {
          [deferredCasesKey]: arrayRemove(String(caseId)),
        });
        setDeferredCases(prev =>
          prev.filter(item => !(item.caseId === String(caseId) && item.region === region))
        );
        toast.success("Статус 'Відкладено' видалено.");
      } else {
        // Додати до deferredCases і видалити з completedCases
        await updateDoc(userDocRef, {
          [deferredCasesKey]: arrayUnion(String(caseId)),
          [completedCasesKey]: arrayRemove(String(caseId)),
        });
        setDeferredCases(prev => [...prev, { caseId: String(caseId), region }]);
        setCompletedCases(prev =>
          prev.filter(item => !(item.caseId === String(caseId) && item.region === region))
        );
        toast.success("Статус 'Відкладено' додано.");
      }
    } catch (error) {
      console.error("Error updating deferred status:", error);
      toast.error("Сталася помилка при оновленні статусу.");
    }
  };

  // Функція видалення випадку
  const handleDelete = async (caseItem) => {
    if (!currentUser) {
      toast.error("Користувач не автентифікований.");
      return;
    }

    try {
      const casesCollectionRef = collection(db, "cases", caseItem.region, "cases");
      const caseDocRef = doc(casesCollectionRef, String(caseItem.id));

      // Видаляємо документ
      await deleteDoc(caseDocRef);

      toast.success("Випадок успішно видалено.");
      // React Query автоматично оновить дані
    } catch (error) {
      console.error("Error deleting case:", error);
      toast.error("Сталася помилка при видаленні випадку.");
    }
  };

  return (
    <MainLayout>
      <div className={styles["container"]}>
        <h1>Список Випадків</h1>

        {/* Відображення випадків після вибору типу, регіону та автора */}
        {activeMenu === "cases" && sourceType && (
          <section>
            <h2>
              {sourceType === "local" ? "Локальні" : "Онлайн"} Випадки
              {selectedAuthor !== "" && (
                <>
                  {` від ${selectedAuthor}`}
                  {localRegion !== "" && ` у ${dataSources[localRegion]?.name || "Не вибрано"}`}
                </>
              )}
              {selectedAuthor === "" && sourceType === "firebase" && localRegion
                ? ` для ${dataSources[localRegion]?.name || "Не вибрано"}`
                : ""}
            </h2>
            {(regionLoading || navigating || casesLoading) && <p className={styles["loading"]}>Завантаження даних...</p>}
            {regionError && <p className={styles["error"]}>{regionError}</p>}
            {casesError && <p className={styles["error"]}>Сталася помилка при завантаженні випадків.</p>}
            {!regionLoading && !regionError && !casesLoading && !casesError && (
              filteredCases.length > 0 ? (
                <div className={styles["tilesContainer"]}>
                  {filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className={`${styles["tile"]} ${
                        caseItem.status === "completed"
                          ? styles["completed"]
                          : caseItem.status === "deferred"
                          ? styles["deferred"]
                          : ""
                      }`}
                      onClick={() => handleCaseClick(caseItem.id, caseItem.sourceType, caseItem.region)}
                      style={{ pointerEvents: navigating ? "none" : "auto", opacity: navigating ? 0.5 : 1 }}
                    >
                      {/* Контейнер для кнопок статусу */}
                      <div className={styles["actions"]}>
                        {/* Кнопка "Позначити як завершений" */}
                        <button
                          className={`${styles["button"]} ${styles["markCompletedButton"]} ${caseItem.status === "completed" ? styles["active"] : ""}`}
                          onClick={(e) => {
                            e.stopPropagation(); // Запобігає відкриттю детальної інформації
                            handleMarkAsCompleted(caseItem.id, caseItem.region);
                          }}
                          aria-pressed={caseItem.status === "completed"}
                          aria-label="Позначити Випадок як Завершений"
                        >
                          <FaCheck />
                        </button>

                        {/* Кнопка "Відкласти" */}
                        <button
                          className={`${styles["button"]} ${styles["deferButton"]} ${caseItem.status === "deferred" ? styles["active"] : ""}`}
                          onClick={(e) => {
                            e.stopPropagation(); // Запобігає відкриттю детальної інформації
                            handleDeferCase(caseItem.id, caseItem.region);
                          }}
                          aria-pressed={caseItem.status === "deferred"}
                          aria-label="Відкласти Випадок на Пізніше"
                        >
                          <FaPause />
                        </button>
                      </div>

                      {/* Інформація про випадок */}
                      <p className={styles["tileHeader"]}>
                        {caseItem.fileDisplayName || caseItem.name || caseItem.fullName}
                      </p>

                      {/* Відображення автора та регіону, якщо фільтр за автором активний */}
                      {activeMenu === "collections" && selectedAuthor !== "" && (
                        <div className={styles["additional-info"]}>
                          <p className={styles["author"]}>Автор: {authorsMap[caseItem.authorId] || "Не визначено"}</p>
                          <p className={styles["region"]}>
                            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                            Регіон: {caseItem.region}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Випадки відсутні.</p>
              )
            )}
          </section>
        )}

        {/* Розділ "Колекції" */}
        {activeMenu === "collections" && sourceType && (
          <section>
            <h2>Колекції</h2>
            {/* Відображення колекцій за автором */}
            {authorsLoading ? (
              <p className={styles["loading"]}>Завантаження авторів...</p>
            ) : authorsError ? (
              <p className={styles["error"]}>Сталася помилка при завантаженні авторів.</p>
            ) : selectedAuthor === "" ? (
              <>
                {/* Плитки авторів */}
                {Object.keys(authorsMap).length > 0 ? (
                  <div className={styles["tilesContainer"]}>
                    {Object.entries(authorsMap).map(([authorId, firstName]) => (
                      <div
                        key={authorId}
                        className={`${styles["tile"]} ${styles["author-tile"]}`}
                        onClick={() => handleAuthorSelect(firstName)}
                        style={{ cursor: "pointer" }}
                      >
                        {/* Відображення імені автора */}
                        <p className={styles["tileHeader"]}>
                          {firstName}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Автори відсутні.</p>
                )}
              </>
            ) : (
              <>
                {/* Відображення випадків після фільтрації за автором */}
                {filteredCases.length > 0 ? (
                  <div className={styles["tilesContainer"]}>
                    {filteredCases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className={`${styles["tile"]} ${
                          caseItem.status === "completed"
                            ? styles["completed"]
                            : caseItem.status === "deferred"
                            ? styles["deferred"]
                            : ""
                        }`}
                        onClick={() => handleCaseClick(caseItem.id, caseItem.sourceType, caseItem.region)}
                        style={{ pointerEvents: navigating ? "none" : "auto", opacity: navigating ? 0.5 : 1 }}
                      >
                        {/* Контейнер для кнопок статусу */}
                        <div className={styles["actions"]}>
                          {/* Кнопка "Позначити як завершений" */}
                          <button
                            className={`${styles["button"]} ${styles["markCompletedButton"]} ${caseItem.status === "completed" ? styles["active"] : ""}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Запобігає відкриттю детальної інформації
                              handleMarkAsCompleted(caseItem.id, caseItem.region);
                            }}
                            aria-pressed={caseItem.status === "completed"}
                            aria-label="Позначити Випадок як Завершений"
                          >
                            <FaCheck />
                          </button>

                          {/* Кнопка "Відкласти" */}
                          <button
                            className={`${styles["button"]} ${styles["deferButton"]} ${caseItem.status === "deferred" ? styles["active"] : ""}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Запобігає відкриттю детальної інформації
                              handleDeferCase(caseItem.id, caseItem.region);
                            }}
                            aria-pressed={caseItem.status === "deferred"}
                            aria-label="Відкласти Випадок на Пізніше"
                          >
                            <FaPause />
                          </button>
                        </div>

                        {/* Інформація про випадок */}
                        <p className={styles["tileHeader"]}>
                          {caseItem.fileDisplayName || caseItem.name || caseItem.fullName}
                        </p>

                        {/* Відображення автора та регіону */}
                        <div className={styles["additional-info"]}>
                          <p className={styles["author"]}>Автор: {authorsMap[caseItem.authorId] || "Не визначено"}</p>
                          <p className={styles["region"]}>
                            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                            Регіон: {caseItem.region}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Випадки відсутні.</p>
                )}
              </>
            )}
          </section>
        )}

        {/* Розділ "Мої Випадки" */}
        {activeMenu === "myCases" && (
          <section>
            <h2>Мої Випадки</h2>
            {myCasesLoading ? (
              <p className={styles["loading"]}>Завантаження ваших випадків...</p>
            ) : (
              <>
                {myCases.length > 0 ? (
                  <div className={styles["tilesContainer"]}>
                    {myCases.map((myCase) => (
                      <div
                        key={myCase.id}
                        className={`${styles["tile"]} ${
                          getCaseStatus(myCase.id, myCase.region) === "completed"
                            ? styles["completed"]
                            : getCaseStatus(myCase.id, myCase.region) === "deferred"
                            ? styles["deferred"]
                            : ""
                        }`}
                        onClick={() => handleCaseClick(myCase.id, "firebase", myCase.region)}
                        style={{ pointerEvents: navigating ? "none" : "auto", opacity: navigating ? 0.5 : 1 }}
                      >
                        {/* Контейнер для кнопок редагування та видалення */}
                        <div className={styles["actions"]}>
                          <button
                            className={`${styles["button"]} ${styles["editButton"]}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Запобігаємо виклику handleCaseClick
                              navigate(`/edit-case`, { state: { myCase } });
                            }}
                            aria-label="Редагувати випадок"
                          >
                            <FaCog />
                          </button>
                          <button
                            className={`${styles["button"]} ${styles["deleteButton"]}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Запобігаємо виклику handleCaseClick
                              handleDelete(myCase);
                            }}
                            aria-label="Видалити випадок"
                          >
                            <FaTimes />
                          </button>
                        </div>

                        {/* Інформація про випадок */}
                        <h3 className={styles["tileHeader"]}>{myCase.fullName}</h3>
                        <p className={styles["tileContent"]}>Автор: {authorsMap[myCase.authorId] || "Не визначено"}</p>
                        <p className={styles["tileContent"]}>Регіон: {myCase.region}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Ви ще не створили жодного випадку.</p>
                )}
              </>
            )}
          </section>
        )}

        {/* Контейнер для кнопки налаштувань */}
        <div className={styles["bottom-controls"]}>
          {/* Кнопка Налаштувань */}
          <button
            className={styles["settings-button"]}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            ref={settingsButtonRef}
            aria-label="Відкрити Налаштування"
            aria-expanded={isSettingsOpen}
            aria-controls="settings-modal"
          >
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно Налаштувань */}
        {isSettingsOpen && (
          <div className={styles["settings-modal"]} ref={settingsRef}>
            <div className={styles["settings-content"]}>
              <h3>Налаштування</h3>

              {/* Розділ Випадки */}
              <div className={styles["accordion-section"]}>
                <button
                  className={styles["accordion-header"]}
                  onClick={() => setActiveMenu('cases')}
                  aria-expanded={activeMenu === 'cases'}
                  aria-controls="cases-content"
                >
                  Випадки
                </button>
                <div
                  id="cases-content"
                  className={`${styles["accordion-content"]} ${activeMenu === 'cases' ? styles["expanded"] : styles["collapsed"]}`}
                >
                  <div className={styles["field"]}>
                    <label htmlFor="region-select">Виберіть Регіон:</label>
                    <select
                      id="region-select"
                      value={localRegion}
                      onChange={(e) => setLocalRegion(e.target.value)}
                      className={styles["region-select"]}
                    >
                      <option value="">-- Оберіть Регіон --</option>
                      {Object.values(dataSources)
                        .filter(region => region.type === "dynamic")
                        .map((region) => (
                          <option key={region.region} value={region.region}>
                            {region.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className={styles["field"]}>
                    <label>Виберіть Джерело Даних:</label>
                    <div className={styles["data-source-toggle"]}>
                      <span
                        className={`${styles["label-left"]} ${
                          sourceType === "local" ? styles["label-active"] : ""
                        }`}
                      >
                        Local
                      </span>
                      <label className={styles["switch"]}>
                        <input
                          type="checkbox"
                          checked={sourceType === "firebase"}
                          onChange={() => setSourceType(sourceType === "local" ? "firebase" : "local")}
                          aria-label="Перемикач для вибору джерела даних"
                        />
                        <span className={styles["slider"]}></span>
                      </label>
                      <span
                        className={`${styles["label-right"]} ${
                          sourceType === "firebase" ? styles["label-active"] : ""
                        }`}
                      >
                        Онлайн
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Розділ Колекції */}
              <div className={styles["accordion-section"]}>
                <button
                  className={styles["accordion-header"]}
                  onClick={() => setActiveMenu('collections')}
                  aria-expanded={activeMenu === 'collections'}
                  aria-controls="collections-content"
                >
                  Колекції
                </button>
                <div
                  id="collections-content"
                  className={`${styles["accordion-content"]} ${activeMenu === 'collections' ? styles["expanded"] : styles["collapsed"]}`}
                >
                  {selectedAuthor === "" && (
                    <p>Виберіть автора, натиснувши на його плитку.</p>
                  )}
                </div>
              </div>

              {/* Розділ Мої Випадки */}
              <div className={styles["accordion-section"]}>
                <button
                  className={styles["accordion-header"]}
                  onClick={() => setActiveMenu('myCases')}
                  aria-expanded={activeMenu === 'myCases'}
                  aria-controls="myCases-content"
                >
                  Мої Випадки
                </button>
                <div
                  id="myCases-content"
                  className={`${styles["accordion-content"]} ${activeMenu === 'myCases' ? styles["expanded"] : styles["collapsed"]}`}
                >
                  <p>Управління вашими випадками: редагування та видалення.</p>
                </div>
              </div>

              {/* Кнопка Закриття */}
              <button
                className={styles["close-button"]}
                onClick={() => setIsSettingsOpen(false)}
                aria-label="Закрити Налаштування"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default CasesListPage;