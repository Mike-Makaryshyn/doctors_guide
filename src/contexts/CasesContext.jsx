// src/contexts/CasesContext.jsx

import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { DataSourceContext } from "./DataSourceContext";

const CasesContext = createContext();

export const CasesProvider = ({ children }) => {
  const { dataSources } = useContext(DataSourceContext);
  const { currentUser } = useAuth();

  const [userCases, setUserCases] = useState([]);
  const [regionalCases, setRegionalCases] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(""); // Читання з localStorage
  const [sourceType, setSourceType] = useState("local"); // Додавання sourceType

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
      if (!currentUser) return;
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
        // toast.error("Fehler beim Laden Ihrer Fälle."); // Видаляємо toast.error
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

    if (sourceType === "local") {
      // Завантажуємо з dataSources.local
      const localCases = dataSources[selectedRegion]?.sources?.local || [];
      console.log("Регiональні випадки з dataSources.local:", localCases);
      setRegionalCases(localCases);
    } else if (sourceType === "firebase") {
      // Фетчимо з Firebase
      try {
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
      } catch (error) {
        console.error("Error fetching regional cases:", error);
        // toast.error("Fehler beim Laden der regionalen Fälle."); // Видаляємо toast.error
        setRegionalCases([]);
      }
    }
  }, [selectedRegion, sourceType, dataSources]);

  useEffect(() => {
    fetchRegionalCases();
  }, [fetchRegionalCases]);

  // Функція для оновлення регіональних випадків у localStorage (не потрібна для локальних випадків)
  const updateLocalRegionalCases = (updatedCases) => {
    // Якщо потрібно, реалізуйте збереження у localStorage
    console.log("Updating local regional cases:", updatedCases);
    setRegionalCases(updatedCases);
  };

  // Generic handler to toggle case status (completed/deferred)
  const toggleCaseStatus = useCallback(
    async (caseId, region, statusType) => {
      console.log(`toggleCaseStatus called with caseId: ${caseId}, region: ${region}, statusType: ${statusType}`);
      if (!currentUser) {
        console.warn("User not authenticated. Cannot toggle case status.");
        return;
      }

      try {
        let newStatus = null;

        if (sourceType === "firebase") {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          const userData = userDocSnap.data() || {};

          const completedKey = `completedCases_${region}`;
          const deferredKey = `deferredCases_${region}`;

          let updates = {};

          if (statusType === "completed") {
            if (userData?.[completedKey]?.includes(String(caseId))) {
              updates[completedKey] = arrayRemove(String(caseId));
              newStatus = "deferred";
              console.log(`Case ${caseId} marked as deferred.`);
            } else {
              updates[completedKey] = arrayUnion(String(caseId));
              updates[deferredKey] = arrayRemove(String(caseId));
              newStatus = "completed";
              console.log(`Case ${caseId} marked as completed.`);
            }
          } else if (statusType === "deferred") {
            if (userData?.[deferredKey]?.includes(String(caseId))) {
              updates[deferredKey] = arrayRemove(String(caseId));
              newStatus = null;
              console.log(`Case ${caseId} status cleared.`);
            } else {
              updates[deferredKey] = arrayUnion(String(caseId));
              updates[completedKey] = arrayRemove(String(caseId));
              newStatus = "deferred";
              console.log(`Case ${caseId} marked as deferred.`);
            }
          }

          console.log("Updating Firestore with:", updates);
          await updateDoc(userDocRef, updates);

          const updateStatus = (c) =>
            c.id === caseId ? { ...c, status: newStatus } : c;

          setUserCases((prev) => prev.map(updateStatus));
          setRegionalCases((prev) => prev.map(updateStatus));

          // toast.success(...) // Видаляємо toast.success
        } else if (sourceType === "local") {
          // Для локальних випадків
          const updatedCases = regionalCases.map((c) =>
            c.id === caseId
              ? { ...c, status: statusType === "completed" ? "completed" : "deferred" }
              : c
          );

          console.log("Updating local regional cases:", updatedCases);
          updateLocalRegionalCases(updatedCases);

          // toast.success(...) // Видаляємо toast.success
        }
      } catch (err) {
        console.error(`Fehler beim Aktualisieren des ${statusType} Status:`, err);
        // toast.error(...) // Видаляємо toast.error
      }
    },
    [currentUser, sourceType, regionalCases]
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
  const handleEdit = useCallback((myCase) => {
    // Реалізуйте навігацію або іншу логіку редагування
    // Наприклад:
    // navigate(`/edit-case/${myCase.id}`);
    console.log("Редагувати випадок:", myCase);
  }, []);

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
          console.error("Region nicht gefunden:", caseItem.region);
          // toast.error("Region не знайдено."); // Видаляємо toast.error
          return;
        }

        const { cases = [] } = regionSnap.data();
        const updatedCases = cases.filter((c) => String(c.id) !== String(caseItem.id));

        if (sourceType === "firebase") {
          await updateDoc(regionDocRef, { cases: updatedCases });

          setUserCases((prev) => prev.filter((c) => String(c.id) !== String(caseItem.id)));
          setRegionalCases((prev) => prev.filter((c) => String(c.id) !== String(caseItem.id)));

          console.log(`Case ${caseItem.id} successfully deleted from Firebase.`);
          // toast.success("Випадок успішно видалено!"); // Видаляємо toast.success
        } else if (sourceType === "local") {
          // Оновлюємо локальні випадки
          const updatedLocalCases =
            dataSources[selectedRegion]?.sources.local?.filter((c) => String(c.id) !== String(caseItem.id)) || [];
          setRegionalCases(updatedLocalCases);
          console.log(`Case ${caseItem.id} successfully deleted from local data.`);
          // toast.success("Випадок успішно видалено з локальних даних!"); // Видаляємо toast.success
        }
      } catch (err) {
        console.error("Fehler beim Löschen des Falls:", err);
        // toast.error("Fehler beim Löschen des Falls."); // Видаляємо toast.error
      }
    },
    [currentUser, dataSources, selectedRegion, sourceType]
  );

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
        setSourceType, // Додаємо setSourceType для можливості зміни типу джерела
        setSelectedRegion, // Додаємо setSelectedRegion для можливості зміни регіону
      }}
    >
      {children}
    </CasesContext.Provider>
  );
};

export const useCases = () => {
  return useContext(CasesContext);
};