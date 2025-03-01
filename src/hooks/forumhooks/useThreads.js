// doctors_guide/src/hooks/forumhooks/useThreads.js

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // шлях до твого firebase.js
import localforage from "localforage";

// Налаштування localforage (IndexedDB)
localforage.config({
  name: "forum-cache",
  storeName: "threads"
});

export const useThreads = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        // 1. Прочитати з кешу
        const cachedThreads = await localforage.getItem("threads");
        if (cachedThreads) {
          setThreads(cachedThreads);
          setLoading(false);
        }

        // 2. Зробити запит до Firestore
        const querySnapshot = await getDocs(collection(db, "threads"));
        const threadsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setThreads(threadsData);
        setLoading(false);

        // 3. Записати у кеш (оновлення)
        await localforage.setItem("threads", threadsData);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchThreads();
  }, []);

  return { threads, loading, error };
};