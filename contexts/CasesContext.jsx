// src/contexts/CasesContext.jsx

import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { DataSourceContext } from "./DataSourceContext";
import useGetGlobalInfo from "../hooks/useGetGlobalInfo"; // Імпорт існуючого хуку
import { toast } from "react-toastify"; // Додано імпорт toast

const CasesContext = createContext();

export const CasesProvider = ({ children }) => {
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Використання хука useGetGlobalInfo для глобальних даних
  const {
    selectedRegion: globalSelectedRegion,
    handleChangeRegion,
    // інші властивості
  } = useGetGlobalInfo() || {};

  // Локальний стан для регіону та типу джерела
  const [localRegion, setLocalRegion] = useState(globalSelectedRegion);
  const [localSourceType, setLocalSourceType] = useState("local"); // або інше початкове значення

  // Оновлюємо локальний регіон при зміні глобального регіону
  useEffect(() => {
    setLocalRegion(globalSelectedRegion);
  }, [globalSelectedRegion]);

  const [userCases, setUserCases] = useState([]);
  const [regionalCases, setRegionalCases] = useState([]);
  const [deferredCases, setDeferredCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState(null); // Додаємо userData

  // Функція для локальної зміни регіону
  const handleLocalRegionChange = (region) => {
    setLocalRegion(region);
    // Не викликайте handleChangeRegion, щоб не змінювати глобальний стан
  };

  // Функція для локальної зміни типу джерела
  const handleLocalSourceTypeChange = (type) => {
    setLocalSourceType(type);
    // Додайте додаткову логіку, якщо потрібно
  };

  // Фетчинг "Моїх випадків"
  useEffect(() => {
    const fetchMyCases = async () => {
      if (!currentUser) {
        setUserCases([]);
        return;
      }
      setLoading(true);
      try {
        const casesSnapshot = await getDocs(collection(db, "cases"));
        const myCases = [];

        casesSnapshot.forEach((snapDoc) => {
          const regionKey = snapDoc.id;
          const { cases = [] } = snapDoc.data();
          cases.forEach((c) => {
            if (c.authorId === currentUser.uid) {
              myCases.push({ ...c, region: regionKey });
            }
          });
        });

        setUserCases(myCases);
      } catch (err) {
        console.error("Fehler beim Laden Ihrer Fälle:", err);
        setError("Fehler beim Laden Ihrer Fälle.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyCases();
  }, [currentUser]);

  // Функція для фетчингу регіональних випадків
// src/contexts/CasesContext.jsx

const fetchRegionalCases = useCallback(async () => {
  if (!localRegion) {
    setRegionalCases([]);
    return;
  }

  setLoading(true);
  try {
    if (localSourceType === "local") {
      const localCases = dataSources[localRegion]?.sources?.local.map(c => ({
        ...c,
        source: "local", // Додаємо поле source
        region: localRegion // Переконуємось, що region встановлено
      })) || [];
      setRegionalCases(localCases);
    } else if (localSourceType === "firebase") {
      const regionDocRef = doc(db, "cases", localRegion);
      const regionDocSnap = await getDoc(regionDocRef);
      if (!regionDocSnap.exists()) {
        console.error("Регіон не знайдено:", localRegion);
        setRegionalCases([]);
        return;
      }

      const { cases = [] } = regionDocSnap.data();

      // Додаємо поле 'region' та 'source' до кожного випадку
      const casesWithRegion = cases.map((caseItem) => ({
        ...caseItem,
        region: localRegion,
        source: "firebase" // Вказуємо джерело
      }));

      setRegionalCases(casesWithRegion);
    }
  } catch (error) {
    console.error("Error fetching regional cases:", error);
    setError("Fehler beim Laden der regionalen Fälle.");
    setRegionalCases([]);
  } finally {
    setLoading(false);
  }
}, [localRegion, localSourceType, dataSources]);

  useEffect(() => {
    fetchRegionalCases();
  }, [fetchRegionalCases]);

  // Оновлення регіональних випадків для локального джерела
  const updateLocalRegionalCases = (updatedCases) => {
    setRegionalCases(updatedCases);
  };

  // Завантаження статусів (deferred/completed)
  const reloadStatuses = useCallback(async () => {
    if (!currentUser || !localRegion) return;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        setDeferredCases([]);
        setCompletedCases([]);
        return;
      }

      const userDataFetched = userDocSnap.data();
      setUserData(userDataFetched); // Оновлюємо userData

      const allDeferred = [];
      const allCompleted = [];

      Object.keys(dataSources)
        .filter((r) => dataSources[r]?.type === "dynamic")
        .forEach((region) => {
          const defArr = userDataFetched[`deferredCases_${region}`] || [];
          const compArr = userDataFetched[`completedCases_${region}`] || [];
          defArr.forEach((cid) => allDeferred.push({ caseId: String(cid), region }));
          compArr.forEach((cid) => allCompleted.push({ caseId: String(cid), region }));
        });

      setDeferredCases(allDeferred);
      setCompletedCases(allCompleted);
    } catch (err) {
      console.error("Error reloading deferred/completed statuses:", err);
      setError("Error reloading statuses.");
    }
  }, [currentUser, dataSources, localRegion]);

  useEffect(() => {
    reloadStatuses();
  }, [reloadStatuses]);

  // Слухач змін у користувацькому документі для оновлення статусів в реальному часі
  useEffect(() => {
    if (!currentUser) return;

    const userDocRef = doc(db, "users", currentUser.uid);
    const unsubscribe = onSnapshot(
      userDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const userDataFetched = docSnap.data();
          setUserData(userDataFetched);

          const allDeferred = [];
          const allCompleted = [];

          Object.keys(dataSources)
            .filter((r) => dataSources[r]?.type === "dynamic")
            .forEach((region) => {
              const defArr = userDataFetched[`deferredCases_${region}`] || [];
              const compArr = userDataFetched[`completedCases_${region}`] || [];
              defArr.forEach((cid) => allDeferred.push({ caseId: String(cid), region }));
              compArr.forEach((cid) => allCompleted.push({ caseId: String(cid), region }));
            });

          setDeferredCases(allDeferred);
          setCompletedCases(allCompleted);
        } else {
          setDeferredCases([]);
          setCompletedCases([]);
          setUserData(null);
        }
      },
      (error) => {
        console.error("Error listening to user document:", error);
        setError("Error listening to user document.");
      }
    );

    return () => unsubscribe();
  }, [currentUser, dataSources]);

  // **Функції: handleMarkAsCompleted та handleDeferCase**
  const handleMarkAsCompleted = useCallback(
    async (caseId, region) => {
      if (!currentUser) {
        toast.error("User is not authenticated.");
        return;
      }
      if (!region || !caseId) {
        toast.error("Please select a case and a region.");
        return;
      }
      const userDocRef = doc(db, "users", currentUser.uid);
      try {
        const completedCasesKey = `completedCases_${region}`;
        const deferredCasesKey = `deferredCases_${region}`;
        const isCompleted = userData?.[completedCasesKey]?.includes(String(caseId));

        if (isCompleted) {
          // Видалити з completedCases
          await updateDoc(userDocRef, {
            [completedCasesKey]: arrayRemove(String(caseId)),
          });
          setUserData((prev) => ({
            ...prev,
            [completedCasesKey]: prev[completedCasesKey].filter((id) => id !== String(caseId)),
          }));
          toast.success("Статус виконано видалено.");
        } else {
          // Додати до completedCases і видалити з deferredCases (якщо є)
          await updateDoc(userDocRef, {
            [completedCasesKey]: arrayUnion(String(caseId)),
            [deferredCasesKey]: arrayRemove(String(caseId)),
          });
          setUserData((prev) => ({
            ...prev,
            [completedCasesKey]: [...(prev[completedCasesKey] || []), String(caseId)],
            [deferredCasesKey]: prev[deferredCasesKey]?.filter((id) => id !== String(caseId)),
          }));
          toast.success("Статус виконано додано.");
        }
      } catch (error) {
        console.error("Error marking case as completed:", error);
        toast.error("Failed to mark case as completed.");
      }
    },
    [currentUser, userData]
  );

  const handleDeferCase = useCallback(
    async (caseId, region) => {
      if (!currentUser) {
        toast.error("User is not authenticated.");
        return;
      }
      if (!region || !caseId) {
        toast.error("Please select a case and a region.");
        return;
      }
      const userDocRef = doc(db, "users", currentUser.uid);
      try {
        const deferredCasesKey = `deferredCases_${region}`;
        const completedCasesKey = `completedCases_${region}`;
        const isDeferred = userData?.[deferredCasesKey]?.includes(String(caseId));

        if (isDeferred) {
          // Видалити з deferredCases
          await updateDoc(userDocRef, {
            [deferredCasesKey]: arrayRemove(String(caseId)),
          });
          setUserData((prev) => ({
            ...prev,
            [deferredCasesKey]: prev[deferredCasesKey].filter((id) => id !== String(caseId)),
          }));
          toast.success("Статус відкладено видалено.");
        } else {
          // Додати до deferredCases і видалити з completedCases (якщо є)
          await updateDoc(userDocRef, {
            [deferredCasesKey]: arrayUnion(String(caseId)),
            [completedCasesKey]: arrayRemove(String(caseId)),
          });
          setUserData((prev) => ({
            ...prev,
            [deferredCasesKey]: [...(prev[deferredCasesKey] || []), String(caseId)],
            [completedCasesKey]: prev[completedCasesKey]?.filter((id) => id !== String(caseId)),
          }));
          toast.success("Статус відкладено додано.");
        }
      } catch (error) {
        console.error("Error deferring case:", error);
        toast.error("Failed to defer case.");
      }
    },
    [currentUser, userData]
  );

  // Handler для редагування кейсу
  const handleEdit = useCallback(
    (myCase) => {
      navigate("/edit-case", { state: { myCase } });
    },
    [navigate]
  );

  // Handler для видалення кейсу
  const handleDelete = useCallback(
    async (caseItem) => {
      if (!currentUser) return;

      const confirmDel = window.confirm(`Ви дійсно хочете видалити випадок "${caseItem.fullName}"?`);
      if (!confirmDel) return;

      try {
        const regionDocRef = doc(db, "cases", caseItem.region);
        const regionSnap = await getDoc(regionDocRef);
        if (!regionSnap.exists()) {
          setError("Region not found.");
          return;
        }

        const { cases = [] } = regionSnap.data();
        const updatedCases = cases.filter((c) => String(c.id) !== String(caseItem.id));

        if (localSourceType === "firebase") {
          await updateDoc(regionDocRef, { cases: updatedCases });
          setUserCases((prev) => prev.filter((c) => String(c.id) !== String(caseItem.id)));
          setRegionalCases((prev) => prev.filter((c) => String(c.id) !== String(caseItem.id)));
        } else if (localSourceType === "local") {
          const updatedLocalCases =
            dataSources[localRegion]?.sources.local?.filter((c) => String(c.id) !== String(caseItem.id)) || [];
          setRegionalCases(updatedLocalCases);
        }
      } catch (err) {
        console.error("Error deleting case:", err);
        setError("Error deleting case.");
      }
    },
    [currentUser, dataSources, localRegion, localSourceType]
  );

  // Handler для навігації до деталей кейсу
  const handleCaseClick = useCallback(
    async (caseId, source, region) => {
      try {
        setNavigating(true);
        if (source === "firebase") {
          await fetchFirebaseCases(region);
        }
        navigate(`/information-sources/${source}/${caseId}`);
      } catch (err) {
        console.error("Error navigating to case details:", err);
        setError("Error navigating to case details.");
      } finally {
        setNavigating(false);
      }
    },
    [fetchFirebaseCases, navigate]
  );

  // Handler для поділу колекцією (можливо, потрібно реалізувати)
  const handleShareCollection = useCallback(() => {
    // Ваша логіка для поділу колекцією
  }, []);

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

  return (
    <CasesContext.Provider
      value={{
        userCases,
        regionalCases,
        selectedRegion: localRegion, // Використання локального регіону
        sourceType: localSourceType, // Використання локального типу джерела
        handleEdit,
        handleDelete,
        handleMarkAsCompleted, // Додаємо функцію до контексту
        handleDeferCase, // Додаємо функцію до контексту
        handleCaseClick,
        setSourceType: handleLocalSourceTypeChange, // Використання локальної функції зміни типу джерела
        setSelectedRegion: handleLocalRegionChange, // Використання локальної функції зміни регіону
        loading,
        error,
        handleShareCollection,
        deferredCases,
        completedCases,
        userData, // Додаємо userData до контексту, якщо потрібно
        sortedCases, // Додаємо sortedCases для використання в компонентах
        getCaseStatus, // Додаємо getCaseStatus для використання в компонентах
        handleEditCase, // Додаємо handleEditCase для використання в компонентах
      }}
    >
      {children}
    </CasesContext.Provider>
  );
};

export const useCases = () => {
  return useContext(CasesContext);
};