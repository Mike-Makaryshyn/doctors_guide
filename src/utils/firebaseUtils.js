// src/utils/firebaseUtils.js

import { db } from "../firebase"; // Переконайтесь, що db експортується з firebase.js
import { doc, getDoc } from "firebase/firestore";

/**
 * Завантажує дані з Firebase Firestore.
 * @param {string} collection - Назва колекції.
 * @param {string} fileId - Ідентифікатор документу.
 * @returns {Promise<Object>} - Дані документу.
 */
export const fetchDataFromFirebase = async (collection, fileId) => {
  try {
    const docRef = doc(db, collection, fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("Документ не знайдено!");
    }
  } catch (error) {
    console.error("Помилка завантаження даних з Firebase:", error);
    throw error;
  }
};