// src/hooks/useFetchAuthors.js

import { useQuery } from "@tanstack/react-query";
import { getDocs, collection, query, where, documentId } from "firebase/firestore";
import { db } from "../firebase";

const fetchAuthors = async (authorIds) => {
  if (authorIds.length === 0) return [];

  const batches = [];
  let tempAuthorIds = [...authorIds];
  while (tempAuthorIds.length) {
    const batch = tempAuthorIds.splice(0, 10);
    batches.push(batch);
  }

  const authors = [];
  for (const batch of batches) {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where(documentId(), "in", batch));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(docSnap => {
      const data = docSnap.data();
      authors.push({ authorId: docSnap.id, firstName: data.firstName });
    });
  }

  return authors;
};

const useFetchAuthors = (authorIds) => {
  return useQuery(
    ["authors", authorIds],
    () => fetchAuthors(authorIds),
    {
      enabled: authorIds.length > 0, // Запит виконується лише коли є authorIds
      staleTime: 5 * 60 * 1000, // Кеш зберігається 5 хвилин
      cacheTime: 10 * 60 * 1000, // Кеш зберігається 10 хвилин
    }
  );
};

export default useFetchAuthors;