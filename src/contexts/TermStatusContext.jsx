import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { debounce } from "lodash";

const TermStatusContext = createContext();

export const TermStatusProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [termStatuses, setTermStatuses] = useState({}); // { "1": { status: "learned", updatedAt: ... }, ... }
  const [offlineMode, setOfflineMode] = useState(false);
  const unsavedChanges = useRef({});

  // Збільшуємо час дебаунсу до 10 секунд
  const DEBOUNCE_TIME = 10000;

  const debouncedSave = useRef(
    debounce(() => {
      console.log("Debounced save triggered");
      saveChangesToFirebase();
    }, DEBOUNCE_TIME)
  ).current;

  // Якщо auth loading триває занадто довго, вмикаємо offlineMode (наприклад, через 5 секунд)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn("Auth state loading занадто довго, перемикаємося в offline режим");
        setOfflineMode(true);
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, [loading]);

  const saveChangesToFirebase = async () => {
    // Якщо offlineMode увімкнено або немає користувача – зберігаємо тільки в LocalStorage
    if (offlineMode || !user) {
      console.log("Offline mode або немає користувача, зберігаємо тільки в LocalStorage.");
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
        console.log("LocalStorage оновлено:", localStorage.getItem("termStatuses"));
        return newStatuses;
      });
      unsavedChanges.current = {};
      return;
    }

    if (loading) {
      console.log("Auth state loading... Збереження відкладене.");
      return;
    }

    const changes = { ...unsavedChanges.current };
    if (Object.keys(changes).length === 0) {
      console.log("Немає незбережених змін.");
      return;
    }
    unsavedChanges.current = {};

    try {
      console.log("Зберігаємо зміни у Firestore:", changes);
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
        console.log("LocalStorage оновлено:", localStorage.getItem("termStatuses"));
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

  // Завантаження даних із Firestore та LocalStorage
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
        console.log("Дані з LocalStorage:", localStatuses);

        // Якщо LocalStorage має дані, вони мають пріоритет
        const merged = Object.keys(localStatuses).length > 0 ? localStatuses : firebaseData;

        setTermStatuses(merged);
        localStorage.setItem("termStatuses", JSON.stringify(merged));
        console.log("Merged дані:", merged);

        unsavedChanges.current = { ...merged };
        debouncedSave();
      } catch (error) {
        console.error("Помилка при зчитуванні даних:", error);
      }
    };

    fetchData();

    const handleBeforeUnload = () => {
      debouncedSave.flush();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      debouncedSave.flush();
    };
  }, [user, loading, debouncedSave]);

  // Якщо після завантаження auth state є незбережені зміни, виконуємо їх збереження
  useEffect(() => {
    if (!loading && user && Object.keys(unsavedChanges.current).length > 0) {
      console.log("Auth state завантажено. Виконуємо збереження незбережених змін.");
      saveChangesToFirebase();
    }
  }, [loading, user]);

  // Синхронізація LocalStorage при зміні termStatuses
  useEffect(() => {
    localStorage.setItem("termStatuses", JSON.stringify(termStatuses));
    console.log("termStatuses змінено, LocalStorage:", localStorage.getItem("termStatuses"));
  }, [termStatuses]);

  const setStatus = (termId, status) => {
    const now = Date.now();
    setTermStatuses((prev) => {
      const updated = {
        ...prev,
        [termId]: { ...(prev[termId] || {}), status, updatedAt: now },
      };
      return updated;
    });
    unsavedChanges.current[termId] = { status, updatedAt: now };
    debouncedSave();
  };

  const toggleStatus = (termId, newStatus) => {
    const currentStatus = termStatuses[termId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Перемикання статусу для term ${termId}: ${currentStatus} -> ${updatedStatus}`);
    setStatus(termId, updatedStatus);
  };

  const flushChanges = () => {
    console.log("Примусове збереження змін...");
    debouncedSave.flush();
  };

  return (
    <TermStatusContext.Provider value={{ termStatuses, setStatus, toggleStatus, flushChanges }}>
      {children}
    </TermStatusContext.Provider>
  );
};

export const useTermStatus = () => useContext(TermStatusContext);