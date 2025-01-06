// src/pages/CasesListPage/CasesListPage.jsx

import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CasesListPage.module.scss";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuth } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { toast, ToastContainer } from "react-toastify";
import { FaCog } from "react-icons/fa";

const CasesListPage = () => {
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Отримуємо глобальну інформацію
  const { selectedRegion: globalSelectedRegion } = useGetGlobalInfo() || {};

  // Локальний стан для вибору регіону та відстеження змін
  const [localRegion, setLocalRegion] = useState(globalSelectedRegion || "");
  const [isLocalRegionModified, setIsLocalRegionModified] = useState(false);
  const [sourceType, setSourceType] = useState("local"); // Встановлюємо 'local' за замовчуванням
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Додано стан для пошуку

  // Стан для модального вікна налаштувань
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Посилання для закриття модального вікна при кліку поза ним
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);

  // Перевірка автентифікації
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Синхронізація локального регіону з глобальним вибором, якщо локальний не модифікований
  useEffect(() => {
    if (globalSelectedRegion && !isLocalRegionModified) {
      setLocalRegion(globalSelectedRegion);
    }
  }, [globalSelectedRegion, isLocalRegionModified]);

  // Обробка вибору регіону
  const handleRegionChange = (event) => {
    const regionValue = event.target.value;
    console.log("Вибраний регіон:", regionValue);
    setLocalRegion(regionValue);
    setIsLocalRegionModified(true); // Вказуємо, що локальний регіон був змінений користувачем
    setError(null);

    // Якщо тип джерела даних Firebase, завантажуємо випадки для вибраного регіону
    if (sourceType === "firebase") {
      fetchFirebaseCases(regionValue)
        .then(() => {
          console.log(`Випадки для регіону ${regionValue} завантажено через DataSourceContext.`);
        })
        .catch((err) => {
          console.error("Error fetching firebase cases:", err);
          setError("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
          toast.error("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
        });
    }
  };

  // Обробка вибору типу випадків
  const handleSourceTypeChange = (type) => {
    console.log("Вибраний тип випадків:", type);
    setSourceType(type);
    setError(null);
    // Якщо тип змінився на "firebase" та вибрано регіон, завантажити випадки
    if (type === "firebase" && localRegion) {
      fetchFirebaseCases(localRegion)
        .then(() => {
          console.log(`Випадки для регіону ${localRegion} завантажено через DataSourceContext.`);
        })
        .catch((err) => {
          console.error("Error fetching firebase cases:", err);
          setError("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
          toast.error("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
        });
    }
  };

  // Обробка введення в поле пошуку
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Отримання регіонів відповідно до типу
  const getRegions = () => {
    const regions = Object.values(dataSources).filter(
      (region) => region.type === "dynamic"
    );
    console.log(`Регіони для типу "${sourceType}":`, regions);
    return regions;
  };

  // Завантаження онлайн випадків з Firebase через DataSourceContext
  useEffect(() => {
    const loadFirebaseCases = async () => {
      if (sourceType === "firebase" && localRegion) {
        setLoading(true);
        setError(null);
        try {
          await fetchFirebaseCases(localRegion);
          console.log(`Випадки для регіону ${localRegion} завантажено через DataSourceContext.`);
        } catch (err) {
          console.error("Error fetching firebase cases:", err);
          setError("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
          toast.error("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
        } finally {
          setLoading(false);
        }
      }
    };

    loadFirebaseCases();
  }, [sourceType, localRegion, fetchFirebaseCases]);

  // Отримання випадків відповідно до типу та регіону
  const getCases = () => {
    if (!sourceType || !localRegion) return [];

    const regionData = dataSources[localRegion];
    if (!regionData) {
      console.warn(`Регіон "${localRegion}" не знайдено в dataSources.`);
      return [];
    }

    if (sourceType === "local") {
      return regionData.sources.local.map((file) => ({
        ...file,
        region: regionData.name,
      }));
    } else if (sourceType === "firebase") {
      return regionData.sources.firebase.map((file) => ({
        ...file,
        region: regionData.name,
      }));
    } else {
      return [];
    }
  };

  const cases = getCases();

  // Фільтрація випадків на основі пошуку
  const filteredCases = cases.filter((caseItem) =>
    caseItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCaseClick = (caseId) => {
    console.log("Клік на випадок з ID:", caseId);
    navigate(`/fsp-formular/${caseId}`);
  };

  // Додаткові перевірки для дебагу
  useEffect(() => {
    console.log("Вибраний регіон:", localRegion);
    console.log("dataSources[localRegion]:", dataSources[localRegion]);
  }, [localRegion, dataSources]);

  // Закриття модального вікна при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        !settingsButtonRef.current.contains(event.target)
      ) {
        setIsSettingsOpen(false);
      }
    };
    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsOpen]);

  // Функція відкриття/закриття модального вікна налаштувань
  const toggleSettingsModal = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <MainLayout>
      <div className={styles["cases-list-page"]}>
        <h1></h1>

        {/* Відображення випадків після вибору типу та регіону */}
        {localRegion && (
          <section>
            <h2>
              {sourceType === "local" ? "Локальні" : "Онлайн"} Випадки для {dataSources[localRegion]?.name || "Не вибрано"}
            </h2>
            {loading && <p className={styles["loading-message"]}>Завантаження даних...</p>}
            {error && <p className={styles["error"]}>{error}</p>}
            {!loading && !error && (
              filteredCases.length > 0 ? (
                <div className={styles["cases-grid"]}>
                  {filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className={styles["case-tile"]}
                      onClick={() => handleCaseClick(caseItem.id)}
                    >
                      <p>{caseItem.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Випадки відсутні.</p>
              )
            )}
          </section>
        )}

        {/* Контейнер для кнопки налаштувань та поля пошуку */}
        <div className={styles["bottom-controls"]}>
          {/* Кнопка Налаштувань */}
          <button
            className={styles["settings-button"]}
            onClick={toggleSettingsModal}
            ref={settingsButtonRef}
            aria-label="Відкрити Налаштування"
            aria-expanded={isSettingsOpen}
            aria-controls="settings-modal"
          >
            <FaCog />
          </button>

          {/* Поле пошуку */}
          <div className={styles["search-container"]}>
            <input
              type="text"
              placeholder="Пошук випадків..."
              value={searchTerm}
              onChange={handleSearch}
              className={styles["search-input"]}
            />
          </div>
        </div>

        {/* Модальне вікно Налаштувань */}
        {isSettingsOpen && (
          <div className={styles["settings-modal"]} ref={settingsRef}>
            <div className={styles["settings-content"]}>
              <h3>Налаштування</h3>

              {/* Перемикач Джерела Даних */}
              <div className={styles["field"]}>
                <label>Виберіть Джерело Даних:</label>
                <div className={styles["data-source-toggle"]}>
                  <span
                    className={`${styles["label-left"]} ${
                      sourceType === "local" ? styles["label-active"] : ""
                    }`}
                  >
                    Local
                  </span>
                  <label className={styles["switch"]}>
                    <input
                      type="checkbox"
                      checked={sourceType === "firebase"}
                      onChange={() =>
                        setSourceType((prev) => (prev === "local" ? "firebase" : "local"))
                      }
                      aria-label="Перемикач для вибору джерела даних"
                    />
                    <span className={styles["slider"]}></span>
                  </label>
                  <span
                    className={`${styles["label-right"]} ${
                      sourceType === "firebase" ? styles["label-active"] : ""
                    }`}
                  >
                    Онлайн
                  </span>
                </div>
              </div>

              {/* Селектор Регіону */}
              <div className={styles["field"]}>
                <label htmlFor="region-select">Виберіть Регіон:</label>
                <select
                  id="region-select"
                  value={localRegion}
                  onChange={handleRegionChange}
                  className={styles["region-select"]}
                >
                  <option value="">-- Оберіть Регіон --</option>
                  {getRegions().map((region) => (
                    <option key={region.region} value={region.region}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Кнопка Закриття */}
              <button
                className={styles["close-button"]}
                onClick={() => setIsSettingsOpen(false)}
                aria-label="Закрити Налаштування"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default CasesListPage;