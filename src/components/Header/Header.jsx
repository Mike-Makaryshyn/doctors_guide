import React, { useState } from "react";
import cn from "classnames";
import { useNavigate, useLocation } from "react-router-dom";

import {
  languageFlags,
  languages,
  DEFAULT_LANGUAGE,
} from "../../constants/translation/global";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { main_menu_items } from "../../constants/translation/main_menu";

import Avatar from "../../components/Avatar/Avatar";
import SideMenu from "../SideMenu/SideMenu"; // окремий компонент для сайд-меню
import styles from "./styles.module.scss";

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

const Header = () => {
  const selectedLanguage = localStorageGet("selectedLanguage", DEFAULT_LANGUAGE);
  const { selectedRegion } = useGetGlobalInfo();
  const navigate = useNavigate();
  const location = useLocation();

  // Стан для відкривання/закривання сайд-меню
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    localStorageSet("selectedLanguage", newLanguage);
    window.location.reload();
  };

  // Перехід до мапи при кліку на регіон
  const handleRegionClick = () => {
    navigate("/custom-map");
  };

  // Перевірка, чи це сторінка реєстрації
  const isRegistrationPage = location?.pathname === "/auth/registration";

  // Текстові переклади
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

  const regionAbbrev = shortRegions[selectedRegion] || selectedRegion;
  const regionFullOrAuth =
    selectedRegion ||
    translations.authRequired[selectedLanguage] ||
    translations.authRequired.en;
  const titleToShow = isRegistrationPage
    ? translations.registration[selectedLanguage] || translations.registration.en
    : regionFullOrAuth;

  return (
    <>
      <header className={cn(styles.header, "flexBt")}>
        {/* Кнопка "бургер" з трьома рисочками, без фону */}
        <button className={styles.burgerButton} onClick={toggleMenu}>
          ☰
        </button>

        {/* Лого */}
        <h2
          onClick={() => navigate("/main_menu")}
          className={cn(styles.mainLogo, "upcase", styles.glowAnimation)}
        >
          Germanmove
        </h2>

        {/* Назва регіону для десктопа */}
        <span
          className={cn(styles.sRegionFull, styles.sRegion)}
          onClick={handleRegionClick}
          style={{ cursor: "pointer" }}
          data-testid="region-select-full"
        >
          {titleToShow}
        </span>

        {/* Назва регіону для мобільних */}
        <span
          className={cn(styles.sRegionShort, styles.sRegion)}
          onClick={handleRegionClick}
          style={{ cursor: "pointer" }}
          data-testid="region-select-short"
        >
          {isRegistrationPage
            ? translations.registration[selectedLanguage] ||
              translations.registration.en
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
            data-testid="language-select"
          >
            {languages[selectedLanguage].options.map((option) => (
              <option key={option.value} value={option.value}>
                {languageFlags[option.value]}{" "}
                <span className="optionLabel"> {option.label}</span>
              </option>
            ))}
          </select>

    
        </div>
      </header>

      {/* Рендер сайд-меню як окремого компонента */}
      <SideMenu
        language={selectedLanguage}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Header;