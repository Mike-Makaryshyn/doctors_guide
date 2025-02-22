import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const TermStatusContext = createContext();

export const TermStatusProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [termStatuses, setTermStatuses] = useState({});
  const unsavedChanges = useRef({});

  // Додатковий реф для дебаунс-таймера
  const flushTimeoutRef = useRef(null);

  // Завантаження даних з Firestore та LocalStorage
  useEffect(() => {
    if (loading) return;
    if (!user) {
      setTermStatuses({});
      return;
    }
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", user.uid, "termStatuses", "allTerms");
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          firebaseData = docSnap.data()?.statuses || {};
        }
        console.log("Дані з Firestore:", firebaseData);
        const localData = localStorage.getItem("termStatuses");
        const localStatuses = localData ? JSON.parse(localData) : {};
        const merged = Object.keys(localStatuses).length > 0 ? localStatuses : firebaseData;
        setTermStatuses(merged);
        localStorage.setItem("termStatuses", JSON.stringify(merged));
        unsavedChanges.current = {};
      } catch (error) {
        console.error("Помилка при зчитуванні даних:", error);
      }
    };
    fetchData();
  }, [user, loading]);

  useEffect(() => {
    localStorage.setItem("termStatuses", JSON.stringify(termStatuses));
  }, [termStatuses]);

  // Функція збереження змін у Firebase (залишається без змін)
  const saveChangesToFirebase = async () => {
    if (!user) {
      console.log("Немає користувача, зберігаємо лише в LocalStorage.");
      setTermStatuses((prev) => {
        const newStatuses = { ...prev };
        for (const [termId, data] of Object.entries(unsavedChanges.current)) {
          if (data.status === "unlearned") {
            delete newStatuses[termId];
          } else {
            newStatuses[termId] = data;
          }
        }
        localStorage.setItem("termStatuses", JSON.stringify(newStatuses));
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
      const newTermStatuses = { ...termStatuses };
      for (const [termId, data] of Object.entries(changes)) {
        if (data.status === "unlearned") {
          delete newTermStatuses[termId];
        } else {
          newTermStatuses[termId] = data;
        }
      }
      setTermStatuses(() => {
        localStorage.setItem("termStatuses", JSON.stringify(newTermStatuses));
        return newTermStatuses;
      });
      const docRef = doc(db, "users", user.uid, "termStatuses", "allTerms");
      await setDoc(docRef, { statuses: newTermStatuses }, { merge: true });
      console.log("Зміни успішно збережені у Firestore.");
    } catch (error) {
      console.error("Помилка при збереженні у Firebase:", error);
      unsavedChanges.current = { ...changes, ...unsavedChanges.current };
    }
  };

  // Звичайний flushChanges – викликається, коли потрібне негайне збереження
  const flushChanges = () => {
    console.log("flushChanges() викликано. Зберігаємо негайно.");
    saveChangesToFirebase();
  };

  // Нова функція, яка планує збереження з затримкою (debounce)
  const scheduleFlushChanges = () => {
    if (flushTimeoutRef.current) {
      clearTimeout(flushTimeoutRef.current);
    }
    flushTimeoutRef.current = setTimeout(() => {
      flushChanges();
      flushTimeoutRef.current = null;
    }, 3000); // затримка 3 секунди, можна налаштувати за потребою
  };

  const setStatus = (termId, status) => {
    const now = Date.now();
    setTermStatuses((prev) => {
      const prevData = prev[termId] || {};
      return {
        ...prev,
        [termId]: {
          ...prevData,
          status,
          updatedAt: now,
          correctCount: status === "paused" ? 0 : (prevData.correctCount || 0),
        },
      };
    });
    const current = termStatuses[termId] || {};
    unsavedChanges.current[termId] = {
      ...current,
      status,
      updatedAt: now,
      correctCount: status === "paused" ? 0 : (current.correctCount || 0),
    };
  };

  const toggleStatus = (termId, newStatus) => {
    const currentStatus = termStatuses[termId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Перемикання статусу для term ${termId}: ${currentStatus} -> ${updatedStatus}`);
    setStatus(termId, updatedStatus);
  };

  const recordCorrectAnswer = (termId) => {
    const now = Date.now();
    setTermStatuses((prev) => {
      const current = prev[termId] || { status: "unlearned", correctCount: 0 };
      const newCount = (current.correctCount || 0) + 1;
      const newStatus = newCount >= 5 ? "learned" : current.status;
      return {
        ...prev,
        [termId]: {
          status: newStatus,
          correctCount: newCount,
          updatedAt: now,
        },
      };
    });
    const oldData = termStatuses[termId] || { status: "unlearned", correctCount: 0 };
    const newCount = (oldData.correctCount || 0) + 1;
    const newStatus = newCount >= 5 ? "learned" : oldData.status;
    unsavedChanges.current[termId] = {
      status: newStatus,
      correctCount: newCount,
      updatedAt: now,
    };
    console.log(`Term ${termId} -> correctCount: ${newCount}, status: ${newStatus}`);
  };

  return (
    <TermStatusContext.Provider
      value={{
        termStatuses,
        setStatus,
        toggleStatus,
        recordCorrectAnswer,
        flushChanges,
        scheduleFlushChanges, // експортуємо нову функцію
      }}
    >
      {children}
    </TermStatusContext.Provider>
  );
};

export const useTermStatus = () => useContext(TermStatusContext);