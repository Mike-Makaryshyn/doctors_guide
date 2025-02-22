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
 
 /** 
  * Єдиний об’єкт зі скороченнями:
  * Усі назви – як у вашому глобальному стейті.
  */
 const shortRegions = {
   "Nordrhein-Westfalen": "NRW",
   "Westfalen-Lippe": "W-L",
   Bayern: "BY",
   Hessen: "HE",
   Niedersachsen: "NI",
   "Rheinland-Pfalz": "RP",
   Sachsen: "SA",
   Brandenburg: "BB",
   Bremen: "HB",
   Saarland: "SL",
   "Schleswig-Holstein": "SH",
   Thüringen: "TH",
   Berlin: "BE",
   Hamburg: "HH",
   "Mecklenburg Vorpommern": "MV",
   "Sachsen-Anhalt": "ST",
   "Baden-Württemberg": "BW",
 };
 
 const Header = () => {
   const selectedLanguage = localStorageGet("selectedLanguage", DEFAULT_LANGUAGE);
   const { selectedRegion } = useGetGlobalInfo();
   const navigate = useNavigate();
   const location = useLocation();
 
   const handleChangeLanguage = (event) => {
     const newLanguage = event.target.value;
     localStorageSet("selectedLanguage", newLanguage);
     window.location.reload();
   };
 
   // Якщо клік по регіону в хедері, переходимо на сторінку карти (наприклад, /custom-map)
   const handleRegionClick = () => {
     navigate("/custom-map");
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
 
   // Якщо регіон не знайдено в shortRegions, використати оригінал:
   const regionAbbrev = shortRegions[selectedRegion] || selectedRegion;
 
   // Повна назва регіону або "Authorization required"
   const regionFullOrAuth =
     selectedRegion ||
     translations.authRequired[selectedLanguage] ||
     translations.authRequired.en;
 
   // Якщо це сторінка реєстрації, показати "Registration",
   // інакше — регіон (повний) або "Authorization required"
   const titleToShow = isRegistrationPage
     ? translations.registration[selectedLanguage] || translations.registration.en
     : regionFullOrAuth;
 
   return (
     <header className={cn(styles.header, "flexBt")}>
       <h2
         onClick={() => navigate("/main_menu")}
         className={cn(styles.mainLogo, "upcase", styles.glowAnimation)}
       >
         Germanmove
       </h2>
 
       {/* Елементи для регіону:
           .sRegionFull – повна назва (на десктопі)
           .sRegionShort – скорочення (на мобільних)
           Обидва клікабельні */}
       <span
         className={cn(styles.sRegionFull, styles.sRegion)}
         onClick={handleRegionClick}
         style={{ cursor: "pointer" }}
       >
         {titleToShow}
       </span>
       <span
         className={cn(styles.sRegionShort, styles.sRegion)}
         onClick={handleRegionClick}
         style={{ cursor: "pointer" }}
       >
         {isRegistrationPage
           ? translations.registration[selectedLanguage] || translations.registration.en
           : regionAbbrev}
       </span>
 
       <div className="flexBt">
         <span className={styles.languageLabel}>
           {languages[selectedLanguage].language}
         </span>
 
         <select
           className={styles.langSelect}
           value={selectedLanguage}
           onChange={handleChangeLanguage}
         >
           {languages[selectedLanguage].options.map((option) => (
             <option key={option.value} value={option.value}>
               {languageFlags[option.value]}
               <span className="optionLabel"> {option.label}</span>
             </option>
           ))}
         </select>
 
         <a href="/dashboard" style={{ textDecoration: "none" }}>
           <Avatar stageId={1} />
         </a>
       </div>
     </header>
   );
 };
 
 export default Header;