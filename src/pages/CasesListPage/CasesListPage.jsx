// src/pages/CasesListPage/CasesListPage.jsx

import React, { useContext, useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CasesListPage.module.scss";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuth } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import useRegionData from "../../hooks/useRegionData";
import { toast, ToastContainer } from "react-toastify";
import { FaCog, FaMapMarkerAlt } from "react-icons/fa"; // Імпорт іконок
import { pathList } from "../../routes/path";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const CasesListPage = () => {
  const [expandedSection, setExpandedSection] = useState('cases');
  const { dataSources, fetchFirebaseCases, getCurrentCases } = useContext(DataSourceContext);
  const { currentUser, handleChangeRegion } = useAuth();
  const navigate = useNavigate();
  const [dataNeedsUpdate, setDataNeedsUpdate] = useState(false); // Додано новий стан для відстеження оновлень
  // Отримуємо глобальну інформацію
  const { selectedRegion: globalSelectedRegion } = useGetGlobalInfo() || {};

  // Використання кастомного хука
  const {
    localRegion,
    setLocalRegion,
    sourceType,
    setSourceType,
    loading,
    error,
  } = useRegionData(globalSelectedRegion || "", "local", handleChangeRegion);

  // Інші локальні стани
  const [searchTerm, setSearchTerm] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cases');
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);
  const [navigating, setNavigating] = useState(false);
  const [deferredCases, setDeferredCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all"); // Новий стан для фільтра
  const [selectedAuthor, setSelectedAuthor] = useState(""); // Новий стан для вибраного автора
  const stableFetchFirebaseCases = useCallback(fetchFirebaseCases, []);
  const [loadedRegions, setLoadedRegions] = useState([]);
  // Перевірка автентифікації
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  
  // Отримання статусів випадків
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

// Завантаження всіх Firebase випадків при завантаженні компонента
useEffect(() => {
  const fetchAllFirebaseCases = async () => {
    const dynamicRegions = Object.keys(dataSources).filter(
      region => dataSources[region]?.type === "dynamic" && !loadedRegions.includes(region)
    );
  
    // Виключаємо регіони без випадків
    const nonEmptyRegions = dynamicRegions.filter(region => {
      const cases = dataSources[region]?.sources?.firebase || [];
      return cases.length > 0; // Запитуємо лише регіони з випадками
    });
  
    if (nonEmptyRegions.length === 0) return;
  
    console.log("Fetching cases for new regions:", nonEmptyRegions);
  
    try {
      await Promise.all(nonEmptyRegions.map(region => stableFetchFirebaseCases(region)));
      setLoadedRegions(prev => [...prev, ...nonEmptyRegions]);
    } catch (error) {
      console.error("Error fetching all firebase cases:", error);
      toast.error("Сталася помилка при завантаженні випадків з Firebase.");
    }
  };

  fetchAllFirebaseCases();
}, [dataSources, stableFetchFirebaseCases, loadedRegions]);

// Оновлений useEffect для dataNeedsUpdate
useEffect(() => {
  if (!loading && !error && dataNeedsUpdate) {
    fetchData();
  }
}, [loading, error, dataNeedsUpdate]);

const fetchData = async () => {
  console.log('Fetching data...');

  try {
    const dynamicRegions = Object.keys(dataSources).filter(
      (region) => dataSources[region].type === "dynamic"
    );
    await Promise.all(dynamicRegions.map(region => fetchFirebaseCases(region)));

    setDataNeedsUpdate(false); // Зупиняємо повторне оновлення
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  // Скидаємо selectedAuthor при зміні sourceType або localRegion (Варіант 2)
  useEffect(() => {
    // Логування для перевірки
    console.log("sourceType або localRegion змінено, скидаємо selectedAuthor");
    setSelectedAuthor("");
  }, [sourceType, localRegion]);

  // Додатковий useEffect для скидання selectedAuthor при активації 'cases' (Варіант 1)
  useEffect(() => {
    if (activeSection === 'cases') {
      console.log("activeSection змінено на 'cases', скидаємо selectedAuthor");
      setSelectedAuthor("");
    }
  }, [activeSection]);

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

  // Обробка введення в поле пошуку
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Обробка вибору автора
  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  // Функція для переключення між розділами з скиданням selectedAuthor при переході на 'cases' (Варіант 1)
  const toggleSection = (section) => {
    setActiveSection((prevSection) => {
      if (section === 'cases') {
        return 'cases'; // "Випадки" завжди відкриті
      }
      return prevSection === section ? 'cases' : section; // Повертаємось до "Випадків" за замовчуванням
    });
  };

  // Функція для відкриття/закриття модального вікна налаштувань
  const toggleSettingsModal = () => {
    if (isSettingsOpen) {
      setActiveSection(null);
    }
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Обробники для зміни фільтрів з скиданням selectedAuthor через useEffect
  const handleRegionChange = (e) => {
    setLocalRegion(e.target.value);
    // setSelectedAuthor(""); // Вже скидається через useEffect
  };

  const handleSourceTypeChange = () => {
    setSourceType(sourceType === "local" ? "firebase" : "local");
    // setSelectedAuthor(""); // Вже скидається через useEffect
  };

  // Отримання регіонів відповідно до типу
  const getRegions = () => {
    const regions = Object.values(dataSources).filter(
      (region) => region.type === "dynamic"
    );
    console.log(`Регіони для типу "${sourceType}":`, regions);
    return regions;
  };

  // Функція для підрахунку кількості випадків для кожного автора
  const getAuthorCaseCount = () => {
    const caseCounts = {};
    Object.values(dataSources).forEach(region => {
      const cases = [
        ...(region.sources.local || []),
        ...(region.sources.firebase || [])
      ];
      cases.forEach(caseItem => {
        const autor = caseItem.Autor;
        if (autor) {
          const autorLower = autor.toLowerCase();
          if (caseCounts[autorLower]) {
            caseCounts[autorLower] += 1;
          } else {
            caseCounts[autorLower] = 1;
          }
        }
      });
    });
    console.log("Author case counts:", caseCounts);
    return caseCounts;
  };

  // Отримання унікальних авторів для фільтра з умовою мінімум 2 випадки
  const getUniqueAuthors = () => {
    const authorCaseCount = getAuthorCaseCount();
    // Отримуємо унікальних авторів з двома або більше випадками
    const uniqueAuthors = Object.keys(authorCaseCount).filter(author => authorCaseCount[author] >= 2);

    // Повертаємо авторів з оригінальним регістром
    const originalAuthors = Object.values(dataSources).flatMap(region => [
      ...(region.sources.local || []),
      ...(region.sources.firebase || [])
    ])
      .map(caseItem => caseItem.Autor)
      .filter((autor, index, self) => 
        autor && 
        self.indexOf(autor) === index && 
        authorCaseCount[autor.toLowerCase()] >= 2
      );

    console.log("Unique authors with >=2 cases:", uniqueAuthors);
    console.log("Original authors with >=2 cases:", originalAuthors);
    return originalAuthors;
  };

  // Отримання випадків відповідно до типу, регіону та автора
  const getCases = () => {
    let allCases = [];

    // Збираємо всі випадки з усіх регіонів та джерел
    const allRegions = Object.keys(dataSources).filter(region => dataSources[region].type === "dynamic");
    const allSourceTypes = ["local", "firebase"];

    allRegions.forEach(region => {
      allSourceTypes.forEach(source => {
        const casesFromSource = getCurrentCases(region, source).map((file) => ({
          ...file,
          sourceType: source,
          region: region,
          status: getCaseStatus(String(file.id), region),
        }));
        allCases = allCases.concat(casesFromSource);
      });
    });

    // Логування для перевірки поточного стану
    console.log(`Active Section: ${activeSection}`);
    console.log(`Selected Author: ${selectedAuthor}`);

    // Якщо активний розділ 'collections' і обрано автора, фільтруємо за автором
    if (activeSection === 'collections' && selectedAuthor !== "") {
      console.log("Фільтруємо випадки за автором:", selectedAuthor);
      allCases = allCases.filter(caseItem => 
        caseItem.Autor && 
        caseItem.Autor.toLowerCase() === selectedAuthor.toLowerCase()
      );
    } else {
      // Фільтрація за регіоном, якщо обрано
      if (localRegion !== "") {
        console.log("Фільтруємо випадки за регіоном:", localRegion);
        allCases = allCases.filter(caseItem => caseItem.region === localRegion);
      }

      // Фільтрація за типом джерела даних
      if (sourceType === "local") {
        console.log("Фільтруємо випадки за джерелом даних: local");
        allCases = allCases.filter(caseItem => caseItem.sourceType === "local");
      } else if (sourceType === "firebase") {
        console.log("Фільтруємо випадки за джерелом даних: firebase");
        allCases = allCases.filter(caseItem => caseItem.sourceType === "firebase");
      }
    }

    return allCases;
  };

  const cases = getCases();

  // Сортування випадків: спочатку "deferred", потім без статусу, потім "completed"
  const sortedCases = [...cases].sort((a, b) => {
    const statusOrder = (status) => {
      if (status === "deferred") return 1;
      if (status === "completed") return 3;
      return 2; // Для випадків без статусу
    };

    return statusOrder(a.status) - statusOrder(b.status);
  });

  // Фільтрація випадків на основі пошуку та статусу
  const filteredCases = sortedCases.filter((caseItem) => {
    // Пошук за назвою випадку
    const nameField = caseItem.fileDisplayName || caseItem.name;
    if (typeof nameField !== "string") {
      console.warn("Case item missing 'fileDisplayName' або 'name' або вони не є рядками:", caseItem);
      return false;
    }
    const matchesSearch = nameField.toLowerCase().includes(searchTerm.toLowerCase());

    // Фільтрація за статусом
    const matchesStatus = statusFilter === "all" || caseItem.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Асинхронна функція для обробки кліку на випадок
  const handleCaseClick = async (caseId, sourceTypeCase, caseRegion) => {
    try {
      console.log(`Клік на випадок: ${caseId} в регіоні: ${caseRegion}`);
      if (sourceTypeCase === "firebase") {
        const firebaseCases = dataSources[caseRegion]?.sources?.firebase;
        if (!firebaseCases || firebaseCases.length === 0) {
          console.log(`Завантаження випадків з Firebase для регіону: ${caseRegion}`);
          setNavigating(true);
          await fetchFirebaseCases(caseRegion);
        }

        const caseExists = dataSources[caseRegion]?.sources?.firebase.some(
          (file) => String(file.id) === String(caseId)
        );

        if (!caseExists) {
          console.log(`Випадок ${caseId} не знайдено у Firebase для регіону: ${caseRegion}`);
          toast.error("Випадок не знайдено у Firebase.");
          setNavigating(false);
          return;
        }
      }

      // Додаємо sourceTypeCase до шляху маршруту
      const targetPath = `${pathList.informationSources.path}/${sourceTypeCase}/${caseId}`;
      console.log("Шлях для навігації:", targetPath);
      navigate(targetPath);
    } catch (error) {
      console.error("Error handling case click:", error);
      toast.error("Сталася помилка при обробці випадку.");
    } finally {
      setNavigating(false);
    }
  };

  // Закриття модального вікна при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        !settingsButtonRef.current.contains(event.target)
      ) {
        setIsSettingsOpen(false);
        // Перевірка, щоб не змінювати активну секцію, якщо вона "collections"
        if (activeSection === 'collections') {
          return; // Залишаємо "collections" активною
        }
        setActiveSection('cases'); // За замовчуванням повертаємо до "cases"
      }
    };
  
    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsOpen, activeSection]);

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

  return (
    <MainLayout>
      <div className={styles["cases-list-page"]}>
        <h1>Список Випадків</h1>

        {/* Фільтри пошуку та статусу */}
        {!loading && !error && (
          <div className={styles["filter-container"]}>
            <label htmlFor="status-filter">Фільтр за статусом:</label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles["status-filter"]}
            >
              <option value="all">Усі</option>
              <option value="deferred">Відкладено</option>
              <option value="completed">Виконано</option>
            </select>
          </div>
        )}

        {/* Відображення випадків після вибору типу, регіону та автора */}
        {sourceType && (
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
            {(loading || navigating) && <p className={styles["loading-message"]}>Завантаження даних...</p>}
            {error && <p className={styles["error"]}>{error}</p>}
            {!loading && !error && (
              filteredCases.length > 0 ? (
                <div className={styles["cases-grid"]}>
                  {filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className={`${styles["case-tile"]} ${
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
                      <div className={styles["status-buttons"]}>
                        <button
                          className={`${styles["mark-completed-button"]} ${
                            caseItem.status === "completed" ? styles["active"] : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation(); // Запобігає відкриттю детальної інформації
                            handleMarkAsCompleted(caseItem.id, caseItem.region);
                          }}
                          aria-pressed={caseItem.status === "completed"}
                          aria-label="Позначити Випадок як Завершений"
                        >
                          ✓
                        </button>

                        <button
                          className={`${styles["defer-case-button"]} ${
                            caseItem.status === "deferred" ? styles["active"] : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation(); // Запобігає відкриттю детальної інформації
                            handleDeferCase(caseItem.id, caseItem.region);
                          }}
                          aria-pressed={caseItem.status === "deferred"}
                          aria-label="Відкласти Випадок на Пізніше"
                        >
                          ⏸
                        </button>
                      </div>

                      {/* Інформація про випадок */}
                      <p className={styles["case-name"]}>
                        {caseItem.fileDisplayName || caseItem.name}
                      </p>

                      {/* Відображення автора та регіону, якщо фільтр за автором активний */}
                      {activeSection === "collections" && selectedAuthor !== "" && (
                        <div className={styles["additional-info"]}>
                          <p className={styles["author"]}>Автор: {caseItem.Autor}</p>
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

        {/* Контейнер для кнопки налаштувань та поля пошуку */}
        <div className={styles["bottom-controls"]}>
          {/* Кнопка Налаштувань */}
          <button
            className={styles["settings-button"]}
            onClick={toggleSettingsModal}
            ref={settingsButtonRef}
            aria-label="Відкрити Налаштування"
            aria-expanded={isSettingsOpen}
            aria-controls="settings-modal"
          >
            <FaCog />
          </button>

          {/* Поле пошуку */}
          <div className={styles["search-container"]}>
            <input
              type="text"
              placeholder="Пошук випадків..."
              value={searchTerm}
              onChange={handleSearch}
              className={styles["search-input"]}
            />
          </div>
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
                  onClick={() => toggleSection('cases')}
                  aria-expanded={activeSection === 'cases'}
                  aria-controls="cases-content"
                >
                  Випадки
                </button>
                <div
                  id="cases-content"
                  className={`${styles["accordion-content"]} ${activeSection === 'cases' ? styles["expanded"] : styles["collapsed"]}`}
                >
                  <div className={styles["field"]}>
                    <label htmlFor="region-select">Виберіть Регіон:</label>
                    <select
                      id="region-select"
                      value={localRegion}
                      onChange={handleRegionChange} // Використання оновленого обробника
                      className={styles["region-select"]}
                    >
                      <option value="">-- Оберіть Регіон --</option>
                      {getRegions().map((region) => (
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
                          onChange={handleSourceTypeChange} // Використання оновленого обробника
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
                  onClick={() => toggleSection('collections')}
                  aria-expanded={activeSection === 'collections'}
                  aria-controls="collections-content"
                >
                  Колекції
                </button>
                <div
                  id="collections-content"
                  className={`${styles["accordion-content"]} ${activeSection === 'collections' ? styles["expanded"] : styles["collapsed"]}`}
                >
                  <div className={styles["field"]}>
                    <label htmlFor="collections-author-select">Виберіть автора:</label>
                    <select
                      id="collections-author-select"
                      value={selectedAuthor}
                      onChange={handleAuthorChange}
                      className={styles["author-select"]}
                    >
                      <option value="">Усі Автори</option>
                      {getUniqueAuthors().map((autor, index) => (
                        <option key={index} value={autor}>
                          {autor}
                        </option>
                      ))}
                    </select>
                  </div>
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

        {/* Інші елементи сторінки можуть бути додані тут */}

        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default CasesListPage;