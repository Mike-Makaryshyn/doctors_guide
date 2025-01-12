import React, { useContext, useState, useEffect, useRef, useCallback } from "react";
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
  deleteDoc
} from "firebase/firestore";

const CasesListPage = () => {
  // Стан для розділів меню
  const [activeMenu, setActiveMenu] = useState("cases"); // 'cases', 'collections', 'myCases'

  // Контекст та хуки
  const { dataSources, fetchFirebaseCases, getCurrentCases } = useContext(DataSourceContext);
  const { currentUser, handleChangeRegion } = useAuth();
  const navigate = useNavigate();
  const [dataNeedsUpdate, setDataNeedsUpdate] = useState(false);

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

  // Локальні стани для фільтрів
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // Функціональність залишається, але UI не відображається
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const stableFetchFirebaseCases = useCallback(fetchFirebaseCases, [fetchFirebaseCases]);
  const [loadedRegions, setLoadedRegions] = useState([]);

  // Стан для модального вікна налаштувань
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);

  // Стан для навігації та статусів випадків
  const [navigating, setNavigating] = useState(false);
  const [deferredCases, setDeferredCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);

  // Стан для "Моїх Випадків"
  const [myCases, setMyCases] = useState([]);
  const [myCasesLoading, setMyCasesLoading] = useState(true);

  // Стан для авторів
  const [authorsMap, setAuthorsMap] = useState({});
  const [authorsLoading, setAuthorsLoading] = useState(true); // Новий стан для завантаження авторів

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

    // Викликати тільки якщо sourceType === 'firebase' або activeMenu === 'collections'/'myCases'
    if (sourceType === "firebase" || activeMenu === "collections" || activeMenu === "myCases") {
      fetchAllFirebaseCases();
    }
  }, [dataSources, stableFetchFirebaseCases, loadedRegions, sourceType, activeMenu]);

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

  // Скидаємо selectedAuthor при зміні sourceType або localRegion
  useEffect(() => {
    console.log("sourceType або localRegion змінено, скидаємо selectedAuthor");
    setSelectedAuthor("");
  }, [sourceType, localRegion]);

  // Додатковий useEffect для скидання selectedAuthor при активації 'cases'
  useEffect(() => {
    if (activeMenu === 'cases') {
      console.log("activeMenu змінено на 'cases', скидаємо selectedAuthor");
      setSelectedAuthor("");
    }
  }, [activeMenu]);

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

  // Функція для переключення між розділами меню
  const toggleMenuSection = (section) => {
    setActiveMenu(section);
    // Автоматично встановлюємо sourceType на 'firebase' для 'collections' та 'myCases'
    if (section === 'collections' || section === 'myCases') {
      if (sourceType !== 'firebase') {
        console.log(`Setting sourceType to 'firebase' for section: ${section}`);
        setSourceType('firebase');
      }
    } else if (section === 'cases') {
      // Можливо, хочете повернутися до попереднього sourceType
      // Це залежить від вашої логіки. Тут ми залишаємо sourceType без змін
    }
  };

  // Функція для відкриття/закриття модального вікна налаштувань
  const toggleSettingsModal = () => {
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
        const authorId = caseItem.authorId; // Використовуємо authorId замість Autor
        if (authorId) {
          if (caseCounts[authorId]) {
            caseCounts[authorId] += 1;
          } else {
            caseCounts[authorId] = 1;
          }
        }
      });
    });
    console.log("Author case counts:", caseCounts);
    return caseCounts;
  };

  // Функція для отримання унікальних авторів для фільтра з умовою мінімум 2 випадки
  const getUniqueAuthors = async () => {
    const authorCaseCount = getAuthorCaseCount();
    console.log("Author case counts:", authorCaseCount); // Додано
    const uniqueAuthorIds = Object.keys(authorCaseCount).filter(authorId => authorCaseCount[authorId] >= 2);

    if (uniqueAuthorIds.length === 0) {
      setAuthorsMap({});
      setAuthorsLoading(false);
      console.log("No unique authors found"); // Додано
      return [];
    }

    try {
      setAuthorsLoading(true); // Починаємо завантаження авторів
      console.log("Fetching authors in batches:", uniqueAuthorIds); // Додано

      // Firestore дозволяє до 10 ID у запиті "in". Якщо більше, розбиваємо запит.
      const batches = [];
      let tempAuthorIds = [...uniqueAuthorIds];
      while (tempAuthorIds.length) {
        const batch = tempAuthorIds.splice(0, 10);
        batches.push(batch);
      }

      const authors = [];
      for (const batch of batches) {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where(documentId(), "in", batch));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(docSnap => {
          const data = docSnap.data();
          authors.push({ authorId: docSnap.id, firstName: data.firstName });
        });
      }

      // Створюємо мапу authorId до firstName
      const newAuthorsMap = {};
      authors.forEach(author => {
        newAuthorsMap[author.authorId] = author.firstName;
      });

      console.log("Authors loaded:", newAuthorsMap); // Додано

      setAuthorsMap(newAuthorsMap);
      setAuthorsLoading(false); // Завершили завантаження авторів

      // Повертаємо список firstName
      return authors.map(author => author.firstName);
    } catch (error) {
      console.error("Error fetching authors:", error);
      toast.error("Сталася помилка при завантаженні даних авторів.");
      setAuthorsLoading(false); // Завершили завантаження, навіть якщо була помилка
      return [];
    }
  };

  // Викликаємо getUniqueAuthors після завантаження всіх випадків
  useEffect(() => {
    const fetchUniqueAuthors = async () => {
      await getUniqueAuthors();
    };

    // Додаємо перевірку, що dataSources та loadedRegions мають дані
    const dataSourcesLoaded = Object.keys(dataSources).length > 0;
    const regionsLoaded = loadedRegions.length > 0;

    if (dataSourcesLoaded && regionsLoaded) {
      fetchUniqueAuthors();
    }
  }, [dataSources, loadedRegions]);

  // Доданий useEffect для завантаження "Моїх Випадків" при монтуванні
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

    // Завантажувати "Мої випадки" тільки якщо activeMenu === 'myCases' або 'collections'
    if (activeMenu === "myCases" || activeMenu === "collections") {
      loadMyCases();
    }
  }, [currentUser, activeMenu]);

  // Функція для отримання випадків відповідно до типу, регіону та автора
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
    console.log(`Active Section: ${activeMenu}`);
    console.log(`Selected Author: ${selectedAuthor}`);

    // Фільтрація випадків
    if (activeMenu === 'myCases') {
      // Відображення тільки "Моїх Випадків"
      allCases = myCases.map(myCase => ({
        ...myCase,
        sourceType: "firebase", // Припускаємо, що це Firebase випадки
        status: getCaseStatus(String(myCase.id), myCase.region),
      }));
    } else if (activeMenu === 'collections') {
      // Відображення тільки випадків з Firebase для колекцій
      allCases = allCases.filter(caseItem => caseItem.sourceType === "firebase");
      if (selectedAuthor !== "") {
        console.log("Фільтруємо випадки за автором:", selectedAuthor);
        // Знайти authorId на основі firstName
        const authorEntry = Object.entries(authorsMap).find(([id, name]) => name.toLowerCase() === selectedAuthor.toLowerCase());
        const authorId = authorEntry ? authorEntry[0] : null;

        if (authorId) {
          allCases = allCases.filter(caseItem => 
            caseItem.authorId && 
            caseItem.authorId === authorId
          );
        } else {
          allCases = []; // Якщо authorId не знайдено, відобразити порожній список
        }
      }
    } else {
      // Якщо активний розділ 'cases', використовуємо sourceType для фільтрації
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
    const nameField = caseItem.fileDisplayName || caseItem.name || caseItem.fullName;
    if (typeof nameField !== "string") {
      console.warn("Case item missing 'fileDisplayName' або 'name' або 'fullName' або вони не є рядками:", caseItem);
      return false;
    }
    const matchesSearch = nameField.toLowerCase().includes(searchTerm.toLowerCase());

    // Фільтрація за статусом
    const matchesStatus = statusFilter === "all" || caseItem.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Функція для обробки кліку на випадок
  const handleCaseClickInternal = async (caseId, sourceTypeCase, caseRegion) => {
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
      // Оновлюємо список випадків
      setDataNeedsUpdate(true);
    } catch (error) {
      console.error("Error deleting case:", error);
      toast.error("Сталася помилка при видаленні випадку.");
    }
  };

  return (
    <MainLayout>
      <div className={styles["container"]}>
        {/* Заголовки розділів видалено */}
        {/* {activeMenu === "cases" && <h1>Список Випадків</h1>} */}
        {/* {activeMenu === "collections" && <h1>Список Колекцій</h1>} */}
        {/* {activeMenu === "myCases" && <h1>Мої Випадки</h1>} */}

        {/* Відображення випадків після вибору типу, регіону та автора */}
        {activeMenu === "cases" && sourceType && (
          <section>
            {/* Заголовок розділу видалено */}
            {/* <h2>...</h2> */}
            {(loading || navigating) && <p className={styles["loading"]}>Завантаження даних...</p>}
            {error && <p className={styles["error"]}>{error}</p>}
            {!loading && !error && (
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
                      onClick={() => handleCaseClickInternal(caseItem.id, caseItem.sourceType, caseItem.region)}
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

                      {/* Відображення автора тільки для онлайн випадків */}
                      {caseItem.sourceType === "firebase" && (
                        <div className={styles["additional-info"]}>
                          <p className={styles["author"]}>Автор: {authorsMap[caseItem.authorId] || "Не визначено"}</p>
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
        {activeMenu === "collections" && (
          <section>
            {/* Заголовок розділу видалено */}
            {/* <h2>Колекції</h2> */}
            {/* Відображення колекцій за автором */}
            {authorsLoading ? (
              <p className={styles["loading"]}>Завантаження авторів...</p>
            ) : selectedAuthor === "" ? (
              <>
                {/* Плитки авторів */}
                {Object.keys(authorsMap).length > 0 ? (
                  <div className={styles["tilesContainer"]}>
                    {Object.entries(authorsMap).map(([authorId, firstName]) => (
                      <div
                        key={authorId}
                        className={`${styles["tile"]} ${styles["author-tile"]}`}
                        onClick={() => setSelectedAuthor(firstName)}
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
                        onClick={() => handleCaseClickInternal(caseItem.id, caseItem.sourceType, caseItem.region)}
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
            {/* Заголовок розділу видалено */}
            {/* <h2>Мої Випадки</h2> */}
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
                        onClick={() => handleCaseClickInternal(myCase.id, "firebase", myCase.region)}
                        style={{ pointerEvents: navigating ? "none" : "auto", opacity: navigating ? 0.5 : 1 }}
                      >
                        {/* Контейнер для кнопок редагування та видалення */}
                        <div className={styles["actions"]}>
                          <button
                            className={`${styles["button"]} ${styles["editButton"]}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Запобігаємо виклику handleCaseClickInternal
                              navigate(`/edit-case`, { state: { myCase } });
                            }}
                            aria-label="Редагувати випадок"
                          >
                            <FaCog />
                          </button>
                          <button
                            className={`${styles["button"]} ${styles["deleteButton"]}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Запобігаємо виклику handleCaseClickInternal
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
            onClick={toggleSettingsModal}
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
                  onClick={() => toggleMenuSection('cases')}
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
                      onChange={handleRegionChange}
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
                          onChange={handleSourceTypeChange}
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
                  onClick={() => toggleMenuSection('collections')}
                  aria-expanded={activeMenu === 'collections'}
                  aria-controls="collections-content"
                >
                  Колекції
                </button>
                <div
                  id="collections-content"
                  className={`${styles["accordion-content"]} ${activeMenu === 'collections' ? styles["expanded"] : styles["collapsed"]}`}
                >
                  {/* Випадаючий список замінено на плитки, тому тут більше нічого не потрібно */}
                  {selectedAuthor === "" && (
                    <p>Виберіть автора, натиснувши на його плитку.</p>
                  )}
                </div>
              </div>

              {/* Розділ Мої Випадки */}
              <div className={styles["accordion-section"]}>
                <button
                  className={styles["accordion-header"]}
                  onClick={() => toggleMenuSection('myCases')}
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