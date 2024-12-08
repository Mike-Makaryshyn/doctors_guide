import { languages, DEFAULT_LANGUAGE } from "../constants/translation/global";
import { localStorageGet, localStorageSet } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase"; // Імпортуємо auth
import { onAuthStateChanged } from "firebase/auth";

const useGetGlobalInfo = () => {
   // Стан для авторизованого користувача
   const [user, setUser] = useState(null);

   // Робота з мовами, регіонами та сторінками
   const selectedLanguage = localStorageGet(
      "selectedLanguage",
      DEFAULT_LANGUAGE
   );
   const navigate = useNavigate();
   const currentPage = localStorageGet("currentPage", "/main_menu");
   const selectedRegion = localStorageGet("selectedRegion", "");

   const handleChangePage = (page_name) => {
      localStorageSet("currentPage", page_name);
      window.scrollTo(0, 0);
      navigate(page_name);
   };

   const redirectToRegionPage = (e) => {
      e.preventDefault();
      localStorageSet("currentPage", "lands");
      navigate("/lands");
   };

   // Отримуємо авторизованого користувача через Firebase Auth
   useEffect(() => {
      console.log("Initializing Firebase Auth..."); // Додаємо логування для перевірки
      console.log("Auth instance:", auth);

      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("Auth state changed:", currentUser); // Додаємо лог для перевірки currentUser
         if (currentUser) {
            setUser(currentUser); // Якщо є користувач, зберігаємо його в стан
         } else {
            setUser(null); // Якщо користувача немає, очищуємо стан
         }
      });

      return () => unsubscribe(); // Відписуємося при виході
   }, []);

   return {
      user, // Тепер повертаємо авторизованого користувача
      selectedLanguage,
      languages,
      currentPage,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion,
   };
};

export default useGetGlobalInfo;