import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const TermStatusContext = createContext();

export const TermStatusProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [termStatuses, setTermStatuses] = useState({});
  // Об’єкт для збереження незбережених змін
  const unsavedChanges = useRef({});
  // Лічильник запитів до Firebase
  const firebaseRequestCount = useRef(0);

  // Функція для логування лічильника запитів
  const logRequestCount = (action) => {
    console.log(`[Firebase] Запит (${action}). Загальна кількість запитів: ${++firebaseRequestCount.current}`);
  };

  // Завантаження даних з Firebase та LocalStorage після авторизації
  useEffect(() => {
    if (!user) return;
    const fetchStatuses = async () => {
      console.log("[TermStatusContext] Завантаження даних з Firebase та LocalStorage...");
      let firebaseStatuses = {};
      try {
        const statusesCollection = collection(db, `users/${user.uid}/termStatuses`);
        const snapshot = await getDocs(statusesCollection);
        logRequestCount("getDocs");
        snapshot.forEach(docSnap => {
          firebaseStatuses[docSnap.id] = docSnap.data().status;
        });
        console.log("[TermStatusContext] Дані з Firebase завантажено:", firebaseStatuses);
      } catch (error) {
        console.error("[TermStatusContext] Помилка завантаження з Firebase:", error);
      }
      const localData = localStorage.getItem("termStatuses");
      const localStatuses = localData ? JSON.parse(localData) : {};
      console.log("[TermStatusContext] Дані з LocalStorage:", localStatuses);
      // Локальні зміни мають пріоритет над даними з Firebase
      const mergedStatuses = { ...firebaseStatuses, ...localStatuses };
      setTermStatuses(mergedStatuses);
      localStorage.setItem("termStatuses", JSON.stringify(mergedStatuses));
      console.log("[TermStatusContext] Дані об'єднані та збережені в LocalStorage:", mergedStatuses);
    };

    fetchStatuses();
  }, [user]);

  // Оновлюємо LocalStorage щоразу, коли termStatuses змінюється
  useEffect(() => {
    localStorage.setItem("termStatuses", JSON.stringify(termStatuses));
  }, [termStatuses]);

  // Функція збереження змін у Firebase за допомогою batch-записів
  const saveChangesToFirebase = async () => {
    if (!user) {
      console.log("[TermStatusContext] Користувач не авторизований, збереження пропущено.");
      return;
    }
    if (Object.keys(unsavedChanges.current).length === 0) {
      console.log("[TermStatusContext] Незбережених змін немає.");
      return;
    }
    console.log("[TermStatusContext] Збереження змін у Firebase:", unsavedChanges.current);
    const statusesCollection = collection(db, `users/${user.uid}/termStatuses`);
    const changes = { ...unsavedChanges.current };
    // Очищуємо unsavedChanges для запобігання повторного збереження
    unsavedChanges.current = {};

    const batch = writeBatch(db);
    Object.entries(changes).forEach(([termId, status]) => {
      const termDoc = doc(statusesCollection, termId);
      if (status === "unlearned") {
        batch.delete(termDoc);
      } else {
        batch.set(termDoc, { status }, { merge: true });
      }
    });

    try {
      await batch.commit();
      logRequestCount("batch.commit");
      console.log("[TermStatusContext] Зміни успішно збережені у Firebase");
    } catch (error) {
      console.error("[TermStatusContext] Помилка при збереженні у Firebase:", error);
      // Повертаємо зміни назад для повторної спроби
      unsavedChanges.current = { ...changes, ...unsavedChanges.current };
    }
  };

  // Функція для оновлення статусу терміна (тільки локально)
  const setStatus = (termId, status) => {
    setTermStatuses(prev => ({ ...prev, [termId]: status }));
    unsavedChanges.current[termId] = status;
    console.log(`[TermStatusContext] Статус терміна ${termId} встановлено як "${status}" локально.`);
  };

  // Функція для перемикання статусу
  const toggleStatus = (termId, newStatus) => {
    const current = termStatuses[termId] || "unlearned";
    const updatedStatus = current === newStatus ? "unlearned" : newStatus;
    setStatus(termId, updatedStatus);
  };

  // Функція для примусового збереження змін (flush)
  const flushChanges = () => {
    saveChangesToFirebase();
  };

  return (
    <TermStatusContext.Provider value={{ termStatuses, setStatus, toggleStatus, flushChanges }}>
      {children}
    </TermStatusContext.Provider>
  );
};

export const useTermStatus = () => useContext(TermStatusContext);