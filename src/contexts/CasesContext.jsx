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

const CasesContext = createContext();

export const CasesProvider = ({ children }) => {
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [userCases, setUserCases] = useState([]);
  const [regionalCases, setRegionalCases] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [sourceType, setSourceType] = useState("local");
  const [deferredCases, setDeferredCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const [error, setError] = useState(null);

  // Читання вибраного регіону та типу джерела з localStorage при монтуванні
  useEffect(() => {
    const storedRegion = localStorage.getItem("savedLocalRegion") || "";
    setSelectedRegion(storedRegion);

    const storedSourceType = localStorage.getItem("savedSourceType") || "local";
    setSourceType(storedSourceType);
  }, []);

  // Слухач змін у localStorage (якщо регіон або тип джерела змінюється в іншій вкладці)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "savedLocalRegion") {
        console.log(`localStorage changed: savedLocalRegion = ${event.newValue}`);
        setSelectedRegion(event.newValue || "");
      }
      if (event.key === "savedSourceType") {
        console.log(`localStorage changed: savedSourceType = ${event.newValue}`);
        setSourceType(event.newValue || "local");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Фетчинг "Моїх випадків"
  useEffect(() => {
    const fetchMyCases = async () => {
      if (!currentUser) {
        setUserCases([]);
        return;
      }
      setLoading(true);
      try {
        console.log("Fetching user cases for user:", currentUser.uid);
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

        console.log("Fetched user cases:", myCases);
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
  const fetchRegionalCases = useCallback(async () => {
    if (!selectedRegion) {
      console.log("No region selected. Clearing regional cases.");
      setRegionalCases([]);
      return;
    }

    setLoading(true);
    try {
      if (sourceType === "local") {
        // Завантажуємо з dataSources.local
        const localCases = dataSources[selectedRegion]?.sources?.local || [];
        console.log("Регiональні випадки з dataSources.local:", localCases);
        setRegionalCases(localCases);
      } else if (sourceType === "firebase") {
        // Фетчимо з Firebase
        console.log("Fetching regional cases for region:", selectedRegion);
        const regionDocRef = doc(db, "cases", selectedRegion);
        const regionDocSnap = await getDoc(regionDocRef);
        if (!regionDocSnap.exists()) {
          console.error("Регіон не знайдено:", selectedRegion);
          setRegionalCases([]);
          return;
        }

        const { cases = [] } = regionDocSnap.data();
        console.log("Регiональні випадки з Firebase:", cases);
        setRegionalCases(cases);
      }
    } catch (error) {
      console.error("Error fetching regional cases:", error);
      setError("Fehler beim Laden der regionalen Fälle.");
      setRegionalCases([]);
    } finally {
      setLoading(false);
    }
  }, [selectedRegion, sourceType, dataSources]);

  useEffect(() => {
    fetchRegionalCases();
  }, [fetchRegionalCases]);

  // Оновлення регіональних випадків для локального джерела
  const updateLocalRegionalCases = (updatedCases) => {
    console.log("Updating local regional cases:", updatedCases);
    setRegionalCases(updatedCases);
  };

  // Завантаження статусів (deferred/completed)
  const reloadStatuses = useCallback(async () => {
    if (!currentUser || !sourceType || !selectedRegion) return;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        console.log("User document does not exist.");
        setDeferredCases([]);
        setCompletedCases([]);
        return;
      }

      const userData = userDocSnap.data();
      const allDeferred = [];
      const allCompleted = [];

      // Для всіх регіонів типу "dynamic" – беремо масиви deferred/completed
      Object.keys(dataSources)
        .filter((r) => dataSources[r]?.type === "dynamic")
        .forEach((region) => {
          const defArr = userData[`deferredCases_${region}`] || [];
          const compArr = userData[`completedCases_${region}`] || [];
          defArr.forEach((cid) => allDeferred.push({ caseId: String(cid), region }));
          compArr.forEach((cid) => allCompleted.push({ caseId: String(cid), region }));
        });

      setDeferredCases(allDeferred);
      setCompletedCases(allCompleted);
    } catch (err) {
      console.error("Error reloading deferred/completed statuses:", err);
      setError("Error reloading statuses.");
    }
  }, [currentUser, dataSources, selectedRegion, sourceType]);

  useEffect(() => {
    reloadStatuses();
  }, [reloadStatuses]);
  useEffect(() => {
    if (!currentUser) return;
  
    const userDocRef = doc(db, "users", currentUser.uid);
    const unsubscribe = onSnapshot(
      userDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          const allDeferred = [];
          const allCompleted = [];
  
          Object.keys(dataSources)
            .filter((r) => dataSources[r]?.type === "dynamic")
            .forEach((region) => {
              const defArr = userData[`deferredCases_${region}`] || [];
              const compArr = userData[`completedCases_${region}`] || [];
              defArr.forEach((cid) => allDeferred.push({ caseId: String(cid), region }));
              compArr.forEach((cid) => allCompleted.push({ caseId: String(cid), region }));
            });
  
          setDeferredCases(allDeferred);
          setCompletedCases(allCompleted);
        } else {
          setDeferredCases([]);
          setCompletedCases([]);
        }
      },
      (error) => {
        console.error("Error listening to user document:", error);
        setError("Error listening to user document.");
      }
    );
  
    return () => unsubscribe();
  }, [currentUser, dataSources]);
  // Toggle case status (completed/deferred)
  const toggleCaseStatus = useCallback(
    async (caseId, region, statusType) => {
      console.log(`toggleCaseStatus called with caseId: ${caseId}, region: ${region}, statusType: ${statusType}`);
      if (!currentUser) {
        console.warn("User not authenticated. Cannot toggle case status.");
        return;
      }

      try {
        let updates = {};

        if (sourceType === "firebase") {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          const userData = userDocSnap.data() || {};

          const completedKey = `completedCases_${region}`;
          const deferredKey = `deferredCases_${region}`;

          if (statusType === "completed") {
            if (userData?.[completedKey]?.includes(String(caseId))) {
              updates[completedKey] = arrayRemove(String(caseId));
              console.log(`Case ${caseId} removed from completed.`);
            } else {
              updates[completedKey] = arrayUnion(String(caseId));
              updates[deferredKey] = arrayRemove(String(caseId));
              console.log(`Case ${caseId} added to completed and removed from deferred.`);
            }
          } else if (statusType === "deferred") {
            if (userData?.[deferredKey]?.includes(String(caseId))) {
              updates[deferredKey] = arrayRemove(String(caseId));
              console.log(`Case ${caseId} removed from deferred.`);
            } else {
              updates[deferredKey] = arrayUnion(String(caseId));
              updates[completedKey] = arrayRemove(String(caseId));
              console.log(`Case ${caseId} added to deferred and removed from completed.`);
            }
          }

          console.log("Updating Firestore with:", updates);
          await updateDoc(userDocRef, updates);
          await reloadStatuses(); // Reload statuses to update local state
        } else if (sourceType === "local") {
          // Для локальних випадків
          const updatedCases = regionalCases.map((c) =>
            c.id === caseId
              ? { ...c, status: statusType === "completed" ? "completed" : "deferred" }
              : c
          );
          console.log("Updating local regional cases:", updatedCases);
          updateLocalRegionalCases(updatedCases);
        }
      } catch (err) {
        console.error(`Error updating ${statusType} status:`, err);
        setError(`Error updating ${statusType} status.`);
      }
    },
    [currentUser, sourceType, regionalCases, reloadStatuses]
  );

  // Handlers using the generic toggle function
  const handleMarkCompleted = useCallback(
    (caseId, region) => {
      console.log(`handleMarkCompleted called with caseId: ${caseId}, region: ${region}`);
      toggleCaseStatus(caseId, region, "completed");
    },
    [toggleCaseStatus]
  );

  const handleMarkDeferred = useCallback(
    (caseId, region) => {
      console.log(`handleMarkDeferred called with caseId: ${caseId}, region: ${region}`);
      toggleCaseStatus(caseId, region, "deferred");
    },
    [toggleCaseStatus]
  );

  // Handler for editing a case
  const handleEdit = useCallback(
    (myCase) => {
      console.log("Editing case:", myCase);
      navigate("/edit-case", { state: { myCase } });
    },
    [navigate]
  );

  // Handler for deleting a case
  const handleDelete = useCallback(
    async (caseItem) => {
      console.log(`handleDelete called for caseId: ${caseItem.id}`);
      if (!currentUser) return;

      const confirmDel = window.confirm(`Ви дійсно хочете видалити випадок "${caseItem.fullName}"?`);
      if (!confirmDel) {
        console.log("Deletion cancelled by user.");
        return;
      }

      try {
        const regionDocRef = doc(db, "cases", caseItem.region);
        const regionSnap = await getDoc(regionDocRef);
        if (!regionSnap.exists()) {
          console.error("Region not found:", caseItem.region);
          setError("Region not found.");
          return;
        }

        const { cases = [] } = regionSnap.data();
        const updatedCases = cases.filter((c) => String(c.id) !== String(caseItem.id));

        if (sourceType === "firebase") {
          await updateDoc(regionDocRef, { cases: updatedCases });
          setUserCases((prev) => prev.filter((c) => String(c.id) !== String(caseItem.id)));
          setRegionalCases((prev) => prev.filter((c) => String(c.id) !== String(caseItem.id)));
          console.log(`Case ${caseItem.id} successfully deleted from Firebase.`);
        } else if (sourceType === "local") {
          // Оновлюємо локальні випадки
          const updatedLocalCases =
            dataSources[selectedRegion]?.sources.local?.filter((c) => String(c.id) !== String(caseItem.id)) || [];
          setRegionalCases(updatedLocalCases);
          console.log(`Case ${caseItem.id} successfully deleted from local data.`);
        }
      } catch (err) {
        console.error("Error deleting case:", err);
        setError("Error deleting case.");
      }
    },
    [currentUser, dataSources, selectedRegion, sourceType]
  );

  // Handler for navigating to case details
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

  // Handler for sharing collections (можливо, потрібно реалізувати)
  const handleShareCollection = useCallback(() => {
    // Ваша логіка для поділу колекцією, якщо необхідно
  }, []);

  return (
    <CasesContext.Provider
      value={{
        userCases,
        regionalCases,
        selectedRegion,
        sourceType,
        handleEdit,
        handleDelete,
        handleMarkCompleted,
        handleMarkDeferred,
        handleCaseClick,
        setSourceType,
        setSelectedRegion,
        loading,
        error,
      }}
    >
      {children}
    </CasesContext.Provider>
  );
};

export const useCases = () => {
  return useContext(CasesContext);
};