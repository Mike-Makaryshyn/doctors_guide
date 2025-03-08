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
 * Einziger Objekt mit Abkürzungen:
 * Nun mit einzelnen BW-Subregions für Kurz-Notation
 */
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

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    localStorageSet("selectedLanguage", newLanguage);
    window.location.reload(); 
  };

  // Klick auf den Regionsnamen => zur Karte navigieren
  const handleRegionClick = () => {
    navigate("/custom-map");
  };

  // Prüfung: Registrierungsseite?
  const isRegistrationPage = location?.pathname === "/auth/registration";

  // Dynamische Übersetzungen
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

  // Abkürzung oder Originalregion
  const regionAbbrev = shortRegions[selectedRegion] || selectedRegion;

  // Ganze Region oder "Authorization required"
  const regionFullOrAuth =
    selectedRegion ||
    translations.authRequired[selectedLanguage] ||
    translations.authRequired.en;

  // Anzeige je nach Seite
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

      {/* Desktop: voller Regionsname oder "Registration"/"Authorization required" */}
      <span
        className={cn(styles.sRegionFull, styles.sRegion)}
        onClick={handleRegionClick}
        style={{ cursor: "pointer" }}
        data-testid="region-select-full"  // Додано атрибут для вибору регіону (повна назва)
      >
        {titleToShow}
      </span>

      {/* Mobile: nur Abkürzung */}
      <span
        className={cn(styles.sRegionShort, styles.sRegion)}
        onClick={handleRegionClick}
        style={{ cursor: "pointer" }}
        data-testid="region-select-short"  // Додано атрибут для вибору регіону (абревіатура)
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
          data-testid="language-select"  // Додано атрибут для вибору мови
        >
          {languages[selectedLanguage].options.map((option) => (
            <option key={option.value} value={option.value}>
              {/* Zeige immer Flagge */}
              {languageFlags[option.value]}
              {/* Der Sprachname kommt in eine .optionLabel => Mobile: hidden */}
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