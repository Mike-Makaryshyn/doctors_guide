// src/hooks/useFetchCases.js

import { useQuery } from "@tanstack/react-query";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

const fetchCases = async (region, sourceType) => {
  const casesRef = collection(db, "cases", region, "cases");
  let q = query(casesRef);
  if (sourceType) {
    q = query(casesRef, where("sourceType", "==", sourceType));
  }
  const snapshot = await getDocs(q);
  const cases = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return cases;
};

const useFetchCases = (region, sourceType) => {
  return useQuery(
    ["cases", region, sourceType],
    () => fetchCases(region, sourceType),
    {
      enabled: !!region && !!sourceType, // Запит виконується лише коли region та sourceType задані
      staleTime: 5 * 60 * 1000, // Кеш зберігається 5 хвилин
      cacheTime: 10 * 60 * 1000, // Кеш зберігається 10 хвилин
    }
  );
};

export default useFetchCases;