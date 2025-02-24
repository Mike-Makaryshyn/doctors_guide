import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const MedicationStatusContext = createContext();

export const MedicationStatusProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [medicationStatuses, setMedicationStatuses] = useState({});
  const unsavedChanges = useRef({});
  const flushTimeoutRef = useRef(null);

  // Завантаження даних з Firestore та LocalStorage
  useEffect(() => {
    if (loading) return;
    if (!user) {
      setMedicationStatuses({});
      return;
    }
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", user.uid, "medicationStatuses", "allMedications");
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          firebaseData = docSnap.data()?.statuses || {};
        }
        console.log("Дані з Firestore:", firebaseData);
        const localData = localStorage.getItem("medicationStatuses");
        const localStatuses = localData ? JSON.parse(localData) : {};
        const merged = Object.keys(localStatuses).length > 0 ? localStatuses : firebaseData;
        setMedicationStatuses(merged);
        localStorage.setItem("medicationStatuses", JSON.stringify(merged));
        unsavedChanges.current = {};
      } catch (error) {
        console.error("Помилка при зчитуванні даних:", error);
      }
    };
    fetchData();
  }, [user, loading]);

  useEffect(() => {
    localStorage.setItem("medicationStatuses", JSON.stringify(medicationStatuses));
  }, [medicationStatuses]);

  // Функція збереження змін у Firebase
  const saveChangesToFirebase = async () => {
    if (!user) {
      console.log("Немає користувача, зберігаємо лише в LocalStorage.");
      setMedicationStatuses((prev) => {
        const newStatuses = { ...prev };
        for (const [medId, data] of Object.entries(unsavedChanges.current)) {
          newStatuses[medId] = data;
        }
        localStorage.setItem("medicationStatuses", JSON.stringify(newStatuses));
        return newStatuses;
      });
      unsavedChanges.current = {};
      return;
    }
    const changes = { ...unsavedChanges.current };
    if (Object.keys(changes).length === 0) {
      console.log("Немає незбережених змін.");
      return;
    }
    unsavedChanges.current = {};
    try {
      console.log("Зберігаємо зміни у Firestore (миттєво):", changes);
      const newMedicationStatuses = { ...medicationStatuses };
      for (const [medId, data] of Object.entries(changes)) {
        newMedicationStatuses[medId] = data;
      }
      setMedicationStatuses(() => {
        localStorage.setItem("medicationStatuses", JSON.stringify(newMedicationStatuses));
        return newMedicationStatuses;
      });
      const docRef = doc(db, "users", user.uid, "medicationStatuses", "allMedications");
      await setDoc(docRef, { statuses: newMedicationStatuses }, { merge: true });
      console.log("Зміни успішно збережені у Firestore.");
    } catch (error) {
      console.error("Помилка при збереженні у Firebase:", error);
      unsavedChanges.current = { ...changes, ...unsavedChanges.current };
    }
  };

  const flushChanges = () => {
    console.log("flushChanges() викликано. Зберігаємо негайно.");
    saveChangesToFirebase();
  };

  const scheduleFlushChanges = () => {
    if (flushTimeoutRef.current) {
      clearTimeout(flushTimeoutRef.current);
    }
    flushTimeoutRef.current = setTimeout(() => {
      flushChanges();
      flushTimeoutRef.current = null;
    }, 3000);
  };

  // Функції для встановлення та перемикання статусів
  const setStatus = (medId, status) => {
    const now = Date.now();
    setMedicationStatuses((prev) => {
      const prevData = prev[medId] || {};
      return {
        ...prev,
        [medId]: {
          ...prevData,
          status,
          updatedAt: now,
        },
      };
    });
    const current = medicationStatuses[medId] || {};
    unsavedChanges.current[medId] = {
      ...current,
      status,
      updatedAt: now,
    };
  };

  const toggleStatus = (medId, newStatus) => {
    const currentStatus = medicationStatuses[medId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Перемикання статусу для medication ${medId}: ${currentStatus} -> ${updatedStatus}`);
    setStatus(medId, updatedStatus);
  };

  return (
    <MedicationStatusContext.Provider
      value={{
        medicationStatuses,
        setStatus,
        toggleStatus,
        flushChanges,
        scheduleFlushChanges,
      }}
    >
      {children}
    </MedicationStatusContext.Provider>
  );
};

export const useMedicationStatus = () => useContext(MedicationStatusContext);