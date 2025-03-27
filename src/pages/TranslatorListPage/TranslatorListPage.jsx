// src/pages/TranslatorListPage/TranslatorListPage.jsx

import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TranslatorListPage.module.scss";
import { translatorData } from "./translatorData";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaCog, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Якщо в якійсь точці трапляється "Westfalen-Lippe"
const unifyRegion = (r) => {
  // 1) Westfalen-Lippe => NRW
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";

  // 2) Baden-Württemberg-Freiburg usw. => "Baden-Württemberg"
  if (
    r === "Baden-Württemberg-Freiburg" ||
    r === "Baden-Württemberg-Karlsruhe" ||
    r === "Baden-Württemberg-Stuttgart" ||
    r === "Baden-Württemberg-Reutlingen"
  ) {
    return "Baden-Württemberg";
  }

  // 3) Alles andere unverändert
  return r;
};

// Мапа відповідностей: код з global.js => ключ у translatorData
// Наприклад, "en" => "Englisch", "de" => "Deutsch" тощо.
const languageMap = {
  de: "Deutsch",
  en: "Englisch",
  uk: "Ukrainisch",
  ru: "Russisch",
  tr: "Türkisch",
  ar: "Arabisch",
  fr: "Französisch",
  es: "Spanisch",
  pl: "Polnisch",
};

const TranslatorListPage = () => {
  // 1) Отримуємо глобальний стан
  //    selectedLanguage => "de", "en", "uk", тощо
  //    languages => той самий об'єкт із text/labels
  //    selectedRegion => глобально обраний регіон
  const { selectedLanguage, languages, selectedRegion } = useGetGlobalInfo();

  // 2) Локальні стани (region, translationLang) — щоб керувати фільтрацією
  //    За замовчуванням беремо region із global або "Bayern"
  //    За замовчуванням беремо selectedLanguage або "de" (німецька)
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  const [translationLang, setTranslationLang] = useState(selectedLanguage || "de");

  // 3) Якщо глобально змінюється selectedRegion, оновлюємо локальний region
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Якщо глобально змінюється selectedLanguage, оновлюємо локальний translationLang
  useEffect(() => {
    setTranslationLang(selectedLanguage || "de");
  }, [selectedLanguage]);

  // 4) Модальне вікно
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // 5) Обробники змін у селектах
  const handleRegionChange = (e) => {
    setRegion(unifyRegion(e.target.value));
  };

  const handleLanguageChange = (e) => {
    setTranslationLang(e.target.value);
  };

  // 6) Визначаємо ключ у translatorData, використовуючи languageMap
  //    Якщо немає в map — "Deutsch" за замовчуванням
  const translatorKey = languageMap[translationLang] || "Deutsch";

  // Будуємо список перекладачів: translatorData[region][translatorKey] => масив
  const translatorList =
    translatorData[region] && translatorData[region][translatorKey]
      ? translatorData[region][translatorKey]
      : [];

  // 7) Для відмальовування <option> (списку мов) беремо
  //    languages[selectedLanguage]?.options || languages["de"].options
  //    Це дасть масив [{value, label}, ...]
  const localLangOptions = languages[selectedLanguage]?.options
    ? languages[selectedLanguage].options
    : languages["de"].options;

  // 8) Рендер
  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Кнопка внизу праворуч (відкрити модальне вікно) */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Плитки перекладачів */}
        <div className={styles.tilesContainer}>
          {translatorList.map((translator) => (
            <div key={translator.id} className={styles.tile}>
              <h3 className={styles.tileHeader}>{translator.name}</h3>
              <p className={styles.tileDescription}>{translator.description}</p>
              {translator.city && (
                <p className={styles.tileCity}>{translator.city}</p>
              )}
              <div className={styles.contactRow}>
                {translator.phone && (
                  <p className={styles.contactItem}>
                    <FaPhoneAlt style={{ marginRight: "5px" }} />
                    {translator.phone}
                  </p>
                )}
                {translator.email && (
                  <p className={styles.contactItem}>
                    <FaEnvelope style={{ marginRight: "5px" }} />
                    {translator.email}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Модальне вікно (popup) */}
        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>

              <h2 className={styles.modalTitle}>Einstellung</h2>
            

              {/* Вибір регіону */}
              <label className={styles.modalLabel}>Region:</label>
              <select
                value={region}
                onChange={handleRegionChange}
                className={styles.modalSelect}
              >
                {Object.keys(translatorData).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              {/* Вибір мови (код) */}
              <label className={styles.modalLabel}>Sprache:</label>
              <select
                value={translationLang}
                onChange={handleLanguageChange}
                className={styles.modalSelect}
              >
                {localLangOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TranslatorListPage;