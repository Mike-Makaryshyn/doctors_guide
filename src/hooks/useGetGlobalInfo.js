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
  // Гість не має обраного регіону; ініціалізуємо як порожній рядок
  const [selectedRegion, setSelectedRegion] = useState("");

  // =======================
  // Код для роботи з регіоном
  // =======================
  const saveSelectedRegionToFirebase = async (region) => {
    if (!user || !supabase) return;
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
    if (!user || !supabase) {
      console.warn("Unauthorized user or Supabase not configured cannot change educationRegion.");
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
    if (!supabase) {
      console.warn('Supabase is not configured, skipping auth initialization');
      setUser(null);
      return;
    }

    // Initial session fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    }).catch((error) => {
      console.error('Error fetching session:', error);
      setUser(null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      // Користувач неавторизований: скидаємо регіон і чистимо LocalStorage
      setSelectedRegion("");
      localStorage.removeItem("selectedRegion");
      return;
    }

    const meta = user.user_metadata || {};

    // Якщо регіон збережено у metadata – синхронізуємо
    if (meta.selectedRegion) {
      if (meta.selectedRegion !== selectedRegion) {
        setSelectedRegion(meta.selectedRegion);
        localStorageSet("selectedRegion", meta.selectedRegion);
      }
    } else {
      // fallback: беремо з LocalStorage (можливо, збережений раніше в сесії)
      const stored = localStorageGet("selectedRegion", "");
      if (stored && stored !== selectedRegion) {
        setSelectedRegion(stored);
      }
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