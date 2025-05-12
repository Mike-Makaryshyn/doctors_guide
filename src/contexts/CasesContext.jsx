// src/contexts/CasesContext.jsx

import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
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
        const { data: cases, error } = await supabase
          .from('cases')
          .select('*')
          .eq('authorid', currentUser.id);
        if (error) throw error;
        // Assuming each record has a 'region' field
        setUserCases(cases);
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
        source: "local",
        region: localRegion
      })) || [];
      setRegionalCases(localCases);
      console.log("💾 localCases for", localRegion, "=", localCases);
    } else {
      // Fetch the full record and extract its JSONB field
      const { data: record, error } = await supabase
        .from('cases')
        .select('*')
        .eq('id', localRegion)
        .single();
      if (error && error.code !== 'PGRST116') throw error;
      const supCases = record?.cases || [];
      const annotated = supCases.map(c => ({
        ...c,
        source: "supabase",
        region: localRegion
      }));
      setRegionalCases(annotated);
      console.log("💾 regionalCases for", localRegion, "=", annotated);
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
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();
      if (userError) throw userError;
      const userDataFetched = user.user_metadata || {};
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

  // (Realtime Firestore listener removed)

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
      try {
        const completedKey = `completedCases_${region}`;
        const deferredKey = `deferredCases_${region}`;
        const isCompleted = userData?.[completedKey]?.includes(String(caseId));
        const { error } = await supabase.auth.updateUser({
          data: {
            [completedKey]: isCompleted
              ? (userData[completedKey] || []).filter(id => id !== String(caseId))
              : [...(userData[completedKey] || []), String(caseId)],
            [deferredKey]: isCompleted
              ? userData[deferredKey]
              : (userData[deferredKey] || []).filter(id => id !== String(caseId))
          }
        });
        if (error) throw error;
        setUserData((prev) => ({
          ...prev,
          [completedKey]: isCompleted
            ? (prev[completedKey] || []).filter(id => id !== String(caseId))
            : [...(prev[completedKey] || []), String(caseId)],
          [deferredKey]: isCompleted
            ? prev[deferredKey]
            : (prev[deferredKey] || []).filter(id => id !== String(caseId))
        }));
        toast.success(isCompleted ? "Статус виконано видалено." : "Статус виконано додано.");
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
      try {
        const deferredKey = `deferredCases_${region}`;
        const completedKey = `completedCases_${region}`;
        const isDeferred = userData?.[deferredKey]?.includes(String(caseId));
        const { error } = await supabase.auth.updateUser({
          data: {
            [deferredKey]: isDeferred
              ? (userData[deferredKey] || []).filter(id => id !== String(caseId))
              : [...(userData[deferredKey] || []), String(caseId)],
            [completedKey]: isDeferred
              ? userData[completedKey]
              : (userData[completedKey] || []).filter(id => id !== String(caseId))
          }
        });
        if (error) throw error;
        setUserData((prev) => ({
          ...prev,
          [deferredKey]: isDeferred
            ? (prev[deferredKey] || []).filter(id => id !== String(caseId))
            : [...(prev[deferredKey] || []), String(caseId)],
          [completedKey]: isDeferred
            ? prev[completedKey]
            : (prev[completedKey] || []).filter(id => id !== String(caseId))
        }));
        toast.success(isDeferred ? "Статус відкладено видалено." : "Статус відкладено додано.");
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
        if (localSourceType === "local") {
          const updatedLocalCases =
            dataSources[localRegion]?.sources.local?.filter((c) => String(c.id) !== String(caseItem.id)) || [];
          setRegionalCases(updatedLocalCases);
        } else {
          // Delete case from Supabase
          const { error } = await supabase
            .from('cases')
            .delete()
            .eq('id', caseItem.id);
          if (error) throw error;
          setUserCases(prev => prev.filter(c => String(c.id) !== String(caseItem.id)));
          setRegionalCases(prev => prev.filter(c => String(c.id) !== String(caseItem.id)));
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
        if (source !== "local") {
          // load from Supabase if needed
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