// src/hooks/useGetGlobalInfo.js

import { languages, DEFAULT_LANGUAGE } from "../constants/translation/global";
import { localStorageGet, localStorageSet } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase"; // Об'єднано імпорти Firebase
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const useGetGlobalInfo = () => {
  // Стан для авторизованого користувача
  const [user, setUser] = useState(null);

  // Робота з мовами, регіонами та сторінками
  const navigate = useNavigate();
  const selectedLanguage = user
    ? localStorageGet("selectedLanguage", DEFAULT_LANGUAGE)
    : DEFAULT_LANGUAGE;
  const currentPage = user
    ? localStorageGet("currentPage", "/main_menu")
    : "/main_menu";
  const selectedRegion = user ? localStorageGet("selectedRegion", "") : "";

  // Функція для збереження `selectedRegion` у Firebase
  const saveSelectedRegionToFirebase = async (region) => {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "users", user.uid),
        { selectedRegion: region },
        { merge: true }
      );
      console.log("Selected region saved to Firebase.");
    } catch (error) {
      console.error("Error saving selected region to Firebase: ", error);
    }
  };

  // Завантаження `selectedRegion` з Firebase під час ініціалізації
  const fetchSelectedRegionFromFirebase = async () => {
    if (!user) return;

    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const firebaseRegion = docSnap.data().selectedRegion;
        if (firebaseRegion) {
          localStorageSet("selectedRegion", firebaseRegion); // Синхронізуємо з localStorage
        }
      }
    } catch (error) {
      console.error("Error fetching selected region from Firebase: ", error);
    }
  };

  // Функція для зміни `selectedRegion`
  const handleChangeRegion = (newRegion) => {
    if (user) {
      localStorageSet("selectedRegion", newRegion);
      saveSelectedRegionToFirebase(newRegion); // Зберігаємо у Firebase
    } else {
      console.warn("Unauthorized user cannot change region.");
    }
  };

  // Зміна сторінки
  const handleChangePage = (page_name) => {
    if (user) {
      localStorageSet("currentPage", page_name);
      window.scrollTo(0, 0);
      navigate(page_name);
    } else {
      console.warn("Unauthorized user cannot change page.");
    }
  };

  // Редирект на сторінку регіонів
  const redirectToRegionPage = (e) => {
    if (user) {
      e.preventDefault();
      localStorageSet("currentPage", "lands");
      navigate("/lands");
    } else {
      console.warn("Unauthorized user cannot access this page.");
    }
  };

  // Відстеження стану авторизації через Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchSelectedRegionFromFirebase(); // Завантаження `selectedRegion`
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user, // Авторизований користувач
    selectedLanguage,
    languages,
    currentPage,
    selectedRegion,
    handleChangeRegion,
    redirectToRegionPage,
    handleChangePage,
  };
};

export default useGetGlobalInfo;