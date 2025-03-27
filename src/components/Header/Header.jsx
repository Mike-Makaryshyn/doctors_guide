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

const Header = () => {
  const selectedLanguage = localStorageGet("selectedLanguage", DEFAULT_LANGUAGE);
  // Видаляємо роботу з регіоном, адже поле з регіоном тимчасово прибирається
  // const { selectedRegion } = useGetGlobalInfo();
  
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

  const isRegistrationPage = location?.pathname === "/auth/registration";

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
    <>
      <header className={cn(styles.header, "flexBt")}>
        <div className={styles.leftSection}>
      
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
        <div
          className={styles.centerSection}
          onClick={() => navigate("/main_menu")}
          style={{ cursor: "pointer" }}
        >
          <h2 className={cn(styles.mainLogo, "upcase", styles.glowAnimation)}>
            Germanmove
          </h2>
          {/* Поле із регіоном видалено. Залишено, щоб згодом можна було перенести його в слайд-меню */}
        </div>

        <div className={styles.rightSection}>
          <button className={styles.burgerButton} onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </header>

      <SideMenu
        language={selectedLanguage}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        direction="right"
      />
    </>
  );
};

export default Header;