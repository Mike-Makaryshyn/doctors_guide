// src/hooks/useGetGlobalInfo.js
import { languages, DEFAULT_LANGUAGE } from "../constants/translation/global";
import { localStorageGet, localStorageSet } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const useGetGlobalInfo = () => {
  // 1) States для користувача, educationCategory та регіону
  const [user, setUser] = useState(null);
  const [educationCategory, setEducationCategory] = useState("Non-EU");

  // Існуючі стани
  const navigate = useNavigate();
  const selectedLanguage = localStorageGet("selectedLanguage", DEFAULT_LANGUAGE);
  const currentPage = user ? localStorageGet("currentPage", "/main_menu") : "/main_menu";
  const [selectedRegion, setSelectedRegion] = useState(localStorageGet("selectedRegion", ""));

  // =======================
  // Код для роботи з регіоном
  // =======================
  const saveSelectedRegionToFirebase = async (region) => {
    if (!user) return;
    try {
      const { error } = await supabase.auth.updateUser({
        data: { selectedRegion: region }
      });
      if (error) console.error("Error saving selected region to Supabase:", error);
      else console.log("Selected region saved to Supabase.");
    } catch (error) {
      console.error("Error saving selected region to Supabase:", error);
    }
  };


  const handleChangeRegion = (newRegion) => {
    setSelectedRegion(newRegion); // оновлюємо стан
    localStorageSet("selectedRegion", newRegion);
    if (user) {
      saveSelectedRegionToFirebase(newRegion);
    } else {
      console.warn("Unauthorized user cannot change region.");
    }
  };

  // ===========================
  // NEU: Логіка для EU / Non‑EU
  // ===========================

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
      const { error } = await supabase.auth.updateUser({
        data: { education_region: newCategory }
      });
      if (error) console.error("Error updating educationRegion in Supabase:", error);
      else setEducationCategory(newCategory);
    } catch (error) {
      console.error("Error updating educationRegion in Supabase:", error);
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
  // onAuthStateChanged - відслідковуємо авторизацію (Supabase)
  // =====================
  useEffect(() => {
    // Initial session fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    }).catch(console.error);

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) return;
    const meta = user.user_metadata || {};
    // Sync selectedRegion
    if (meta.selectedRegion && meta.selectedRegion !== selectedRegion) {
      setSelectedRegion(meta.selectedRegion);
      localStorageSet("selectedRegion", meta.selectedRegion);
    }
    // Sync educationCategory
    const educ = meta.education_region;
    setEducationCategory(educ === "EU" || educ === "Non-EU" ? educ : "Non-EU");
  }, [user]);

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