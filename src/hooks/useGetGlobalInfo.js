// src/hooks/useGetGlobalInfo.js
import { languages, DEFAULT_LANGUAGE } from "../constants/translation/global";
import { localStorageGet, localStorageSet } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const useGetGlobalInfo = () => {
  // 1) States для користувача, educationCategory та регіону
  const [user, setUser] = useState(null);
  const [educationCategory, setEducationCategory] = useState("Non-EU");

  // Існуючі стани
  const navigate = useNavigate();
  const selectedLanguage = localStorageGet("selectedLanguage", DEFAULT_LANGUAGE);
  const currentPage = user ? localStorageGet("currentPage", "/main_menu") : "/main_menu";
  const selectedRegion = user ? localStorageGet("selectedRegion", "") : "";

  // =======================
  // Код для роботи з регіоном
  // =======================
  const saveSelectedRegionToFirebase = async (region) => {
    if (!user) return;
    try {
      await setDoc(doc(db, "users", user.uid), { selectedRegion: region }, { merge: true });
      console.log("Selected region saved to Firebase.");
    } catch (error) {
      console.error("Error saving selected region to Firebase: ", error);
    }
  };

  const fetchSelectedRegionFromFirebase = async () => {
    if (!user) return;
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const firebaseRegion = docSnap.data().selectedRegion;
        if (firebaseRegion) {
          localStorageSet("selectedRegion", firebaseRegion);
        }
      }
    } catch (error) {
      console.error("Error fetching selected region from Firebase: ", error);
    }
  };

  const handleChangeRegion = (newRegion) => {
    if (user) {
      localStorageSet("selectedRegion", newRegion);
      saveSelectedRegionToFirebase(newRegion);
    } else {
      console.warn("Unauthorized user cannot change region.");
    }
  };

  // ===========================
  // NEU: Логіка для EU / Non‑EU
  // ===========================
  const fetchEducationCategoryFromFirebase = async () => {
    if (!user) return;
    try {
      // Документ, де зберігається educationRegion:
      const docRef = doc(db, "users", user.uid, "userData", "data");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Fetched educationRegion:", data.educationRegion);
        const fetchedCategory = data.educationRegion;
        if (fetchedCategory === "EU" || fetchedCategory === "Non-EU") {
          setEducationCategory(fetchedCategory);
        } else {
          console.warn("Invalid or missing educationRegion. Defaulting to Non-EU.");
          setEducationCategory("Non-EU");
        }
      } else {
        // Якщо документ не існує, створюємо його з дефолтним значенням
        await setDoc(docRef, { educationRegion: "Non-EU" });
        setEducationCategory("Non-EU");
      }
    } catch (error) {
      console.error("Error fetching educationRegion from Firebase:", error);
    }
  };

  // OPTIONAL: Функція для зміни educationRegion
  const handleChangeEducationCategory = async (newCategory) => {
    if (!user) {
      console.warn("Unauthorized user cannot change educationRegion.");
      return;
    }
    if (newCategory !== "EU" && newCategory !== "Non-EU") {
      console.warn("Invalid educationRegion. Only 'EU' or 'Non-EU' allowed.");
      return;
    }
    try {
      const docRef = doc(db, "users", user.uid, "userData", "data");
      await setDoc(docRef, { educationRegion: newCategory }, { merge: true });
      setEducationCategory(newCategory);
    } catch (error) {
      console.error("Error updating educationRegion in Firebase:", error);
    }
  };

  // =====================
  // Код для навігації
  // =====================
  const handleChangePage = (page_name) => {
    if (user) {
      localStorageSet("currentPage", page_name);
      window.scrollTo(0, 0);
      navigate(page_name);
    } else {
      console.warn("Unauthorized user cannot change page.");
    }
  };

  const redirectToRegionPage = (e) => {
    if (user) {
      e.preventDefault();
      localStorageSet("currentPage", "lands");
      navigate("/lands");
    } else {
      console.warn("Unauthorized user cannot access this page.");
    }
  };

  // =====================
  // onAuthStateChanged - відслідковуємо авторизацію
  // =====================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Отримання даних про регіон
        fetchSelectedRegionFromFirebase();
        // Отримання даних про educationRegion (EU / Non-EU)
        fetchEducationCategoryFromFirebase();
      }
    });
    return () => unsubscribe();
  }, []);

  // =====================
  // Повертаємо дані
  // =====================
  return {
    user,
    educationCategory, // <-- Тут знаходиться статус EU / Non-EU
    selectedLanguage,
    languages,
    currentPage,
    selectedRegion,
    handleChangeRegion,
    handleChangeEducationCategory, // За потреби
    redirectToRegionPage,
    handleChangePage,
  };
};

export default useGetGlobalInfo;