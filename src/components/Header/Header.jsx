import {
   languageFlags,
   languages,
   DEFAULT_LANGUAGE,
} from "../../constants/translation/global";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import { useNavigate, useLocation } from "react-router-dom";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";
import Avatar from "../../components/Avatar/Avatar";

const Header = () => {
   const selectedLanguage = localStorageGet(
      "selectedLanguage",
      DEFAULT_LANGUAGE
   );

   const { selectedRegion } = useGetGlobalInfo();

   const navigate = useNavigate();
   const location = useLocation();

   const handleChangeLanguage = (event) => {
      const newLanguage = event.target.value;
      localStorageSet("selectedLanguage", newLanguage);
      window.location.reload();
   };

   // Перевірка, чи це сторінка реєстрації
   const isRegistrationPage = location?.pathname === "/auth/registration";

   // Динамічні переклади
   const translations = {
      registration: {
         en: "Registration",
         de: "Registrierung",
         ua: "Реєстрація",
         ru: "Регистрация",
         tr: "Kayıt",
         ar: "التسجيل",
         fr: "Inscription",
         es: "Registro",
         pl: "Rejestracja",
      },
      authRequired: {
         en: "Authorization required",
         de: "Autorisierung erforderlich",
         ua: "Необхідна авторизація",
         ru: "Требуется авторизация",
         tr: "Yetki gerekli",
         ar: "التفويض مطلوب",
         fr: "Autorisation requise",
         es: "Autorización requerida",
         pl: "Wymagana autoryzacja",
      },
   };

   return (
      <header className={cn(styles.header, "flexBt")}>
         <h2
            onClick={() => {
               navigate("/main_menu");
            }}
            className={cn(styles.mainLogo, "upcase")}
         >
            Germanmove
         </h2>
         
         {/* Динамічний переклад заголовка */}
         <span className={styles.sRegion}>
            {isRegistrationPage
               ? translations.registration[selectedLanguage] || translations.registration.en
               : selectedRegion || translations.authRequired[selectedLanguage] || translations.authRequired.en}
         </span>

         <div className="flexBt">
            <span style={{ marginRight: "20px" }}>
               {languages[selectedLanguage].language}
            </span>
            <select
               className={styles.langSelect}
               value={selectedLanguage}
               onChange={handleChangeLanguage}
            >
               {languages[selectedLanguage].options.map((option) => (
                  <option key={option.value} value={option.value}>
                     {languageFlags[option.value]} {option.label}
                  </option>
               ))}
            </select>

            {/* Посилання з аватаркою */}
            <a href={"/dashboard"} style={{ textDecoration: "none" }}>
               <Avatar stageId={1} />
            </a>
         </div>
      </header>
   );
};

export default Header;