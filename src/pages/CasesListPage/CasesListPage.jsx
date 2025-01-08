// src/pages/CasesListPage/CasesListPage.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CasesListPage.module.scss";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuth } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import useRegionData from "../../hooks/useRegionData"; // Імпорт кастомного хука
import { toast, ToastContainer } from "react-toastify";
import { FaCog } from "react-icons/fa";
import { pathList } from "../../routes/path";

const CasesListPage = () => {
  const { dataSources, fetchFirebaseCases, getCurrentCases } = useContext(DataSourceContext);
  const { currentUser, handleChangeRegion } = useAuth(); // Припустимо, що handleChangeRegion доступний через useAuth
  const navigate = useNavigate();

  // Отримуємо глобальну інформацію
  const { selectedRegion: globalSelectedRegion } = useGetGlobalInfo() || {};

  // Використання кастомного хука
  const {
    localRegion,
    setLocalRegion,
    sourceType,
    setSourceType,
    loading,
    error,
  } = useRegionData(globalSelectedRegion || "", "local", handleChangeRegion); // Передача handleChangeRegion

  // Інші локальні стани
  const [searchTerm, setSearchTerm] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);
  const [navigating, setNavigating] = useState(false);

  // Перевірка автентифікації
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

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

  // Отримання випадків відповідно до типу та регіону
  const getCases = () => {
    if (!sourceType || !localRegion) return [];

    const casesList = getCurrentCases(localRegion, sourceType).map((file) => ({
      ...file,
      region: dataSources[localRegion]?.name || "Не вибрано",
    }));

    return casesList;
  };

  const cases = getCases();

  // Фільтрація випадків на основі пошуку
  const filteredCases = cases.filter((caseItem) => {
    if (sourceType === "local") {
      if (typeof caseItem.name !== "string") {
        console.warn("Case item missing 'name' або 'name' не є рядком:", caseItem);
        return false;
      }
      return caseItem.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (sourceType === "firebase") {
      if (typeof caseItem.fileDisplayName !== "string") {
        console.warn("Case item missing 'fileDisplayName' або 'fileDisplayName' не є рядком:", caseItem);
        return false;
      }
      return caseItem.fileDisplayName.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  // Асинхронна функція для обробки кліку на випадок
  const handleCaseClick = async (caseId) => {
    try {
      console.log(`Клік на випадок: ${caseId}`);
      if (sourceType === "firebase") {
        const firebaseCases = dataSources[localRegion]?.sources?.firebase;
        if (!firebaseCases || firebaseCases.length === 0) {
          console.log(`Завантаження випадків з Firebase для регіону: ${localRegion}`);
          setNavigating(true);
          await fetchFirebaseCases(localRegion);
        }

        const caseExists = dataSources[localRegion]?.sources?.firebase.some(
          (file) => String(file.id) === String(caseId)
        );

        if (!caseExists) {
          console.log(`Випадок ${caseId} не знайдено у Firebase для регіону: ${localRegion}`);
          toast.error("Випадок не знайдено у Firebase.");
          setNavigating(false);
          return;
        }
      }

      // Додаємо sourceType до шляху маршруту
      const targetPath = `${pathList.informationSources.path}/${sourceType}/${caseId}`;
      console.log("Шлях для навігації:", targetPath);
      navigate(targetPath);
    } catch (error) {
      console.error("Error handling case click:", error);
      toast.error("Сталася помилка при обробці випадку.");
    } finally {
      setNavigating(false);
    }
  };

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
        <h1>Список Випадків</h1>

        {/* Відображення випадків після вибору типу та регіону */}
        {localRegion && (
          <section>
            <h2>
              {sourceType === "local" ? "Локальні" : "Онлайн"} Випадки для{" "}
              {dataSources[localRegion]?.name || "Не вибрано"}
            </h2>
            {(loading || navigating) && <p className={styles["loading-message"]}>Завантаження даних...</p>}
            {error && <p className={styles["error"]}>{error}</p>}
            {!loading && !error && (
              filteredCases.length > 0 ? (
                <div className={styles["cases-grid"]}>
                  {filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className={styles["case-tile"]}
                      onClick={() => handleCaseClick(caseItem.id)}
                      style={{ pointerEvents: navigating ? "none" : "auto", opacity: navigating ? 0.5 : 1 }}
                    >
                      <p>
                        {sourceType === "local" ? caseItem.name : caseItem.fileDisplayName}
                      </p>
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
                        setSourceType(sourceType === "local" ? "firebase" : "local")
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
                  onChange={(e) => setLocalRegion(e.target.value)}
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

        {/* Інші елементи сторінки можуть бути додані тут */}

        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default CasesListPage;