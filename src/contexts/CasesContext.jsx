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
import { toast } from "react-toastify";

const CasesContext = createContext();

export const CasesProvider = ({ children }) => {
  const { dataSources } = useContext(DataSourceContext);
  const { currentUser } = useAuth();

  const [userCases, setUserCases] = useState([]);
  const [regionalCases, setRegionalCases] = useState([]);
  const [globalRegion, setGlobalRegion] = useState(""); // Припустимо, цей хук надає глобальний регіон

  // Отримання глобального регіону
  useEffect(() => {
    const fetchGlobalRegion = async () => {
      if (!currentUser) return;
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setGlobalRegion(userData.globalRegion || ""); // Припустимо, поле globalRegion
        }
      } catch (error) {
        console.error("Error fetching global region:", error);
      }
    };

    fetchGlobalRegion();
  }, [currentUser]);

  // Завантаження "Моїх випадків"
  useEffect(() => {
    const fetchMyCases = async () => {
      if (!currentUser) return;
      try {
        const rootColl = collection(db, "cases");
        const allDocs = await getDocs(rootColl);

        const myCases = [];
        allDocs.forEach((snapDoc) => {
          const regionKey = snapDoc.id;
          const docData = snapDoc.data();
          if (docData.cases && Array.isArray(docData.cases)) {
            docData.cases.forEach((c) => {
              if (c.authorId === currentUser.uid) {
                myCases.push({ ...c, region: regionKey });
              }
            });
          }
        });

        setUserCases(myCases);
      } catch (err) {
        console.error("Fehler beim Laden Ihrer Fälle:", err);
      }
    };

    fetchMyCases();
  }, [currentUser]);

  // Завантаження випадків регіону
  const fetchRegionalCases = useCallback(async () => {
    if (!globalRegion) {
      setRegionalCases([]);
      return;
    }

    try {
      const regionDocRef = doc(db, "cases", globalRegion);
      const regionDocSnap = await getDoc(regionDocRef);
      if (!regionDocSnap.exists()) {
        console.error("Регіон не знайдено:", globalRegion);
        setRegionalCases([]);
        return;
      }

      const regionData = regionDocSnap.data();
      if (!regionData.cases || !Array.isArray(regionData.cases)) {
        console.error("Невірна структура даних у регіоні.");
        setRegionalCases([]);
        return;
      }

      setRegionalCases(regionData.cases);
    } catch (error) {
      console.error("Error fetching regional cases:", error);
      setRegionalCases([]);
    }
  }, [globalRegion]);

  useEffect(() => {
    fetchRegionalCases();
  }, [fetchRegionalCases]);

  // Функції для обробки дій
  const handleEdit = (myCase) => {
    // Реалізуйте навігацію або іншу логіку редагування
  };

  const handleDelete = async (caseItem) => {
    if (!currentUser) return;

    const confirmDel = window.confirm(
      `Ви дійсно хочете видалити випадок "${caseItem.fullName}"?`
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

      // Оновлюємо локальний стан
      setUserCases((prev) =>
        prev.filter((c) => String(c.id) !== String(caseItem.id))
      );
      setRegionalCases((prev) =>
        prev.filter((c) => String(c.id) !== String(caseItem.id))
      );

      toast.success("Випадок успішно видалено!");
    } catch (err) {
      console.error("Fehler beim Löschen des Falls:", err);
      toast.error("Fehler beim Löschen des Falls.");
    }
  };

  const handleMarkCompleted = async (caseId, region) => {
    if (!currentUser) return;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data() || {};

      const cKey = `completedCases_${region}`;
      const dKey = `deferredCases_${region}`;

      const isCompleted = userData?.[cKey]?.includes(String(caseId));
      if (isCompleted) {
        // Видаляємо з completed
        await updateDoc(userDocRef, {
          [cKey]: arrayRemove(String(caseId)),
        });
        // Оновлюємо локальний стан
        setUserCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: "deferred" } : c
          )
        );
        setRegionalCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: "deferred" } : c
          )
        );
      } else {
        // Додаємо в completed, видаляємо з deferred
        await updateDoc(userDocRef, {
          [cKey]: arrayUnion(String(caseId)),
          [dKey]: arrayRemove(String(caseId)),
        });
        // Оновлюємо локальний стан
        setUserCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: "completed" } : c
          )
        );
        setRegionalCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: "completed" } : c
          )
        );
      }

      toast.success(
        isCompleted
          ? "Випадок позначено як відкладений."
          : "Випадок позначено як виконаний."
      );
    } catch (err) {
      console.error("Fehler beim Aktualisieren des Erledigt-Status:", err);
      toast.error("Fehler beim Aktualisieren des Status.");
    }
  };

  const handleMarkDeferred = async (caseId, region) => {
    if (!currentUser) return;

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data() || {};

      const cKey = `completedCases_${region}`;
      const dKey = `deferredCases_${region}`;

      const isDeferred = userData?.[dKey]?.includes(String(caseId));
      if (isDeferred) {
        // Видаляємо з deferred
        await updateDoc(userDocRef, {
          [dKey]: arrayRemove(String(caseId)),
        });
        // Оновлюємо локальний стан
        setUserCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: null } : c
          )
        );
        setRegionalCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: null } : c
          )
        );
      } else {
        // Додаємо в deferred, видаляємо з completed
        await updateDoc(userDocRef, {
          [dKey]: arrayUnion(String(caseId)),
          [cKey]: arrayRemove(String(caseId)),
        });
        // Оновлюємо локальний стан
        setUserCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: "deferred" } : c
          )
        );
        setRegionalCases((prev) =>
          prev.map((c) =>
            c.id === caseId ? { ...c, status: "deferred" } : c
          )
        );
      }

      toast.success(
        isDeferred
          ? "Випадок відзначено як виконаний."
          : "Випадок відзначено як відкладений."
      );
    } catch (err) {
      console.error("Fehler beim Aktualisieren des Später-Status:", err);
      toast.error("Fehler beim Aktualisieren des Status.");
    }
  };

  return (
    <CasesContext.Provider
      value={{
        userCases,
        regionalCases,
        globalRegion,
        handleEdit,
        handleDelete,
        handleMarkCompleted,
        handleMarkDeferred,
      }}
    >
      {children}
    </CasesContext.Provider>
  );
};

export const useCases = () => {
  return useContext(CasesContext);
};