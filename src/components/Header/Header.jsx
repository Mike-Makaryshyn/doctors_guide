import React, { useState, useEffect } from "react";
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

/** Скорочення для регіонів (приклад) */
const shortRegions = {
  "Baden-Württemberg": "BW",
  "Baden-Württemberg-Freiburg": "BW-FR",
  "Baden-Württemberg-Karlsruhe": "BW-KA",
  "Baden-Württemberg-Stuttgart": "BW-ST",
  "Baden-Württemberg-Reutlingen": "BW-RE",
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
};

/**
 * Короткі позначення мов для мобільного списку.
 * Вони використовуються для відображення вибраної мови.
 */
const shortLangLabels = {
  de: "DE",
  en: "EN",
  uk: "UA",
  ru: "RU",
  tr: "TR",
  ar: "AR",
  fr: "FR",
  es: "ES",
  pl: "PL",
  el: "EL",
  ro: "RO",
};

const Header = () => {
  // Визначаємо, чи це мобільний екран (ширина < 768)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Отримуємо вибрану мову з localStorage (або DEFAULT_LANGUAGE)
  const selectedLanguage = localStorageGet("selectedLanguage", DEFAULT_LANGUAGE);

  // Дані про регіон, навігація тощо
  const { selectedRegion } = useGetGlobalInfo();
  const navigate = useNavigate();
  const location = useLocation();

  // Зміна мови: зберігаємо в localStorage і перезавантажуємо сторінку
  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    localStorageSet("selectedLanguage", newLanguage);
    window.location.reload();
  };

  // Клік по регіону: перехід на карту
  const handleRegionClick = () => {
    navigate("/custom-map");
  };

  // Перевірка, чи це сторінка реєстрації
  const isRegistrationPage = location?.pathname === "/auth/registration";

  // Приклади перекладів
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

  // Формуємо назву регіону
  const regionAbbrev = shortRegions[selectedRegion] || selectedRegion;
  const regionFullOrAuth =
    selectedRegion ||
    translations.authRequired[selectedLanguage] ||
    translations.authRequired.en;
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

      {/* На десктопі: повна назва регіону або "Registration"/"Authorization required" */}
      <span
        className={cn(styles.sRegionFull, styles.sRegion)}
        onClick={handleRegionClick}
        style={{ cursor: "pointer" }}
      >
        {titleToShow}
      </span>

      {/* На мобільних: скорочена назва регіону */}
      <span
        className={cn(styles.sRegionShort, styles.sRegion)}
        onClick={handleRegionClick}
        style={{ cursor: "pointer" }}
      >
        {isRegistrationPage
          ? translations.registration[selectedLanguage] ||
            translations.registration.en
          : regionAbbrev}
      </span>

      <div className="flexBt">
        <select
          className={styles.langSelect}
          value={selectedLanguage}
          onChange={handleChangeLanguage}
          data-testid="language-select"
        >
          {languages[selectedLanguage].options.map((option) => {
            const isSelected = option.value === selectedLanguage;
            if (isMobile) {
              return (
                <option key={option.value} value={option.value}>
                  {isSelected
                    ? // Для вибраної мови на мобільних: прапорець + скорочене позначення
                      `${languageFlags[option.value]} ${shortLangLabels[option.value] || option.label}`
                    : // Для невибраних: прапорець + повна назва
                      `${languageFlags[option.value]} ${option.label}`}
                </option>
              );
            } else {
              // На десктопі завжди: прапорець + повна назва
              return (
                <option key={option.value} value={option.value}>
                  {languageFlags[option.value]} {option.label}
                </option>
              );
            }
          })}
        </select>

        <a href="/dashboard" style={{ textDecoration: "none" }}>
          <Avatar stageId={1} />
        </a>
      </div>
    </header>
  );
};

export default Header;