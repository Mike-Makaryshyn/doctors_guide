// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect } from "react";
import "./FSPFormularPage.scss";
import FSPFormularPageData from "../../constants/translation/FSPFormularPage";

import PersonalData from "./components/PersonalData";
import AktuelleAnamnese from "./components/AktuelleAnamnese";
import VegetativeAnamnese from "./components/VegetativeAnamnese";
import Vorerkrankungen from "./components/Vorerkrankungen";
import Zusammenfassung from "./components/Zusammenfassung";
import PreviousOperations from "./components/PreviousOperations";
import Medications from "./components/Medications";
import AllergiesAndIntolerances from "./components/AllergiesAndIntolerances";
import Noxen from "./components/Noxen";
import Familienanamnese from "./components/Familienanamnese";
import Sozialanamnese from "./components/Sozialanamnese";
import SelectDataSourceModal from "./components/SelectDataSourceModal";
import PreliminaryDiagnosis from "./components/PreliminaryDiagnosis";
import DifferentialDiagnosis from "./components/DifferentialDiagnosis";
import ProposedProcedures from "./components/ProposedProcedures";
import AdditionalInfoModal from "./components/AdditionalInfoModal";
import UserCasesModal from "./components/UserCasesModal";

import { parseData } from "../../utils/dataParser";
import useIsMobile from "../../hooks/useIsMobile";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataSourceContext } from "../../contexts/DataSourceContext";

import { FaCog } from "react-icons/fa";

import { Link } from "react-router-dom";

// Імпорти Firebase
import { db, auth } from "../../firebase"; // Переконайтесь, що шлях правильний
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Імпорт Toast
import { toast } from "react-toastify";

// Інші імпорти
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import FallSpecificData from "../../constants/translation/FallSpecificData";

const FSPFormularPage = () => {
  // =========================================
  // Глобальний хук (глобальна інфа)
  // =========================================
  const {
    user: globalUser, // Відмінність імені, щоб уникнути конфліктів
    selectedLanguage,
    languages,
    currentPage,
    /** 
     * ВАЖЛИВО: 'selectedRegion' (глобальний вибір).
     * Користувач може мати вибір однієї з 16 земель, який діє на весь сайт.
     */
    selectedRegion: globalSelectedRegion,
    redirectToRegionPage,
    handleChangePage,
  } = useGetGlobalInfo();

  // =========================================
  // Контекст із джерелами даних (dataSources)
  // =========================================
  const { dataSources, firebaseData, fetchDataFromFirebase } =
    useContext(DataSourceContext);

  // =========================================
  // Локальні стани для різних модалок і даних
  // =========================================
  const [parseModal, setParseModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [userCasesModal, setUserCasesModal] = useState(false);
  const [parsedData, setParsedData] = useState({});
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState({ text: "", type: "" });
  const [selectedCase, setSelectedCase] = useState("");
  const [userCasesData, setUserCasesData] = useState([]);
  const [fallType, setFallType] = useState("");

  // =========================================
  // Новий стан для зберігання даних користувача з Firestore
  // =========================================
  const [userData, setUserData] = useState(null);

  // =========================================
  // Локальна земля (регіон),
  // ініціалізується глобальним 'selectedRegion',
  // але зміна в цьому компоненті НЕ змінює глобальний хук.
  // =========================================
  const [localRegion, setLocalRegion] = useState(globalSelectedRegion || "");

  // Якщо ви хочете, щоби при зміні globalSelectedRegion
  // локальний теж оновлювався — ось цей useEffect:
  useEffect(() => {
    setLocalRegion(globalSelectedRegion || "");
  }, [globalSelectedRegion]);

  // =========================================
  // Відстеження стану автентифікації користувача
  // =========================================
  const [user, setUser] = useState(globalUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          // Якщо документ користувача не існує, створюємо його
          await setDoc(userDocRef, {});
          setUserData({});
        }
      } else {
        // Якщо користувач вийшов, очистити відповідні стани
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // =========================================
  // Завантаження selectedCase з Firestore при зміні localRegion
  // =========================================
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDataFromFirestore = userDocSnap.data();
          setUserData(userDataFromFirestore); // Оновлюємо стан userData
          const savedCase = userDataFromFirestore[`selectedCase_${localRegion}`];
          console.log(`Збережений випадок для ${localRegion}:`, savedCase);

          if (
            savedCase &&
            dataSources[localRegion]?.files.some((file) => String(file.id) === savedCase)
          ) {
            setSelectedCase(savedCase);
          } else {
            setSelectedCase("");
          }
        } else {
          // Якщо документ користувача не існує, створюємо його
          await setDoc(userDocRef, {});
          setSelectedCase("");
          setUserData({});
        }
      } else {
        setSelectedCase("");
      }
    };

    fetchSelectedCase();
  }, [localRegion, dataSources, user]);

  // =========================================
  // Збереження selectedCase у Firestore при його зміні
  // =========================================
  useEffect(() => {
    const saveSelectedCase = async () => {
      if (selectedCase && localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await setDoc(
            userDocRef,
            { [`selectedCase_${localRegion}`]: selectedCase },
            { merge: true }
          );
          // Видалено toast повідомлення про збереження
          // toast.success("Випадок успішно збережено!");
        } catch (error) {
          console.error("Помилка при збереженні випадку:", error);
          toast.error("Не вдалося зберегти випадок.");
        }
      } else if (!selectedCase && localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, { [`selectedCase_${localRegion}`]: "" });
          // Видалено toast повідомлення про очищення
          // toast.info("Випадок очищено.");
        } catch (error) {
          console.error("Помилка при очищенні випадку:", error);
          toast.error("Не вдалося очистити випадок.");
        }
      }
    };

    saveSelectedCase();
  }, [selectedCase, localRegion, user]);

  // =========================================
  // Перевірка, чи існує localRegion у dataSources
  // =========================================
  useEffect(() => {
    if (localRegion && !dataSources[localRegion]) {
      console.warn(`localRegion "${localRegion}" не знайдено в dataSources`);
    }
  }, [localRegion, dataSources]);

  // Рефи для скролу
  const columnsRef = useRef(null);
  const isMobile = useIsMobile();
  let startX = 0;
  let scrollLeft = 0;

  // Стан завантаження
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Керування вікном налаштувань
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // =========================================
  // Горизонтальний скролл для мобільних
  // =========================================
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    startX = e.touches[0].pageX;
    scrollLeft = columnsRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    const moveX = e.touches[0].pageX - startX;
    columnsRef.current.scrollLeft = scrollLeft - moveX;
  };

  // =========================================
  // Парсинг даних (локальних чи Firebase)
  // =========================================
  const handleParseData = async (sourceId, fileId) => {
    console.log("handleParseData called with:", sourceId, fileId);
    setIsLoading(true);
    setError(null);

    try {
      const source = dataSources[sourceId];
      if (!source) {
        throw new Error(`Source with id ${sourceId} not found in dataSources.`);
      }

      // parseData - ваша функція, що зчитує або обробляє файли
      const data = await parseData(sourceId, "local");
      console.log("Fetched Data:", data);

      const selectedItem =
        data.find((item) => String(item.id) === String(fileId)) || {};
      console.log("Вибраний випадок:", selectedItem);

      // Якщо в об’єкті є поле specialty => fallType
      if (selectedItem.specialty) {
        setFallType(selectedItem.specialty.toLowerCase());
        console.log("Тип Fall (specialty):", selectedItem.specialty.toLowerCase());
      }

      setParsedData(selectedItem);
      console.log("Parsed Data Set:", selectedItem);
    } catch (err) {
      console.error("Помилка під час парсингу даних:", err);
      setError("Сталася помилка під час завантаження даних.");
      toast.error("Сталася помилка під час завантаження даних.");
    } finally {
      setIsLoading(false);
    }
  };

  // =========================================
  // Модальне вікно з додатковою інформацією
  // =========================================
  const handleOpenInfoModal = (type) => {
    let infoText = "";

    // Якщо є специфічні дані (FallSpecificData[fallType])
    if (
      fallType &&
      FallSpecificData[fallType] &&
      FallSpecificData[fallType][type]
    ) {
      infoText =
        FallSpecificData[fallType][type].additionalInfo ||
        "Немає додаткової інформації.";
    } else {
      // Якщо специфічних даних немає, беремо загальні тексти з FSPFormularPageData
      if (type === "personalData") {
        infoText =
          FSPFormularPageData.personalData.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "currentAnamnese") {
        infoText =
          FSPFormularPageData.currentAnamnese.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "vegetativeAnamnese") {
        infoText =
          FSPFormularPageData.vegetativeAnamnese.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "zusammenfassung") {
        infoText =
          FSPFormularPageData.zusammenfassung.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "vorerkrankungen") {
        infoText =
          FSPFormularPageData.vorerkrankungen.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "previousOperations") {
        infoText =
          FSPFormularPageData.previousOperations.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "medications") {
        infoText =
          FSPFormularPageData.medications.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "allergiesAndIntolerances") {
        infoText =
          FSPFormularPageData.allergiesAndIntolerances.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "noxen") {
        infoText =
          FSPFormularPageData.noxen.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "familienanamnese") {
        infoText =
          FSPFormularPageData.familienanamnese.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "sozialanamnese") {
        infoText =
          FSPFormularPageData.sozialanamnese.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "preliminaryDiagnosis") {
        infoText =
          FSPFormularPageData.preliminaryDiagnosis?.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "differentialDiagnosis") {
        infoText =
          FSPFormularPageData.differentialDiagnosis?.additionalInfo ||
          "Немає додаткової інформації.";
      } else if (type === "proposedProcedures") {
        infoText =
          FSPFormularPageData.proposedProcedures?.additionalInfo ||
          "Немає додаткової інформації.";
      } else {
        console.warn(`Unknown type: ${type}`);
      }
    }

    setAdditionalInfo({ text: infoText, type });
    setInfoModal(true);
    console.log(`Тип модального вікна: ${type}`);
    console.log(`Текст додаткової інформації: ${infoText}`);
  };

  // =========================================
  // Зміна кейса в межах ЛОКАЛЬНО обраного регіону
  // =========================================
  const handleCaseChange = (e) => {
    setSelectedCase(e.target.value);
    setParsedData({});
  };

  // =========================================
  // Завантаження випадків з Firebase (якщо треба)
  // =========================================
  const handleOpenUserCasesModal = async (sourceId, fileId) => {
    const source = dataSources[sourceId];
    if (!source.type || source.type !== "firebase") return;

    try {
      const data = await fetchDataFromFirebase(source.collection, fileId);
      setUserCasesData(data);
      setUserCasesModal(true);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      setError("Сталася помилка при завантаженні даних з Firebase.");
      toast.error("Сталася помилка при завантаженні даних з Firebase.");
    }
  };

  // =========================================
  // Позначення пройдених випадків
  // =========================================
  const handleMarkAsCompleted = async () => {
    if (user && localRegion && selectedCase) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        let completedCases = [];

        if (userData && userData[`completedCases_${localRegion}`]) {
          completedCases = userData[`completedCases_${localRegion}`];
        }

        if (!completedCases.includes(String(selectedCase))) { // Перетворюємо на рядок
          const updatedCompletedCases = [...completedCases, String(selectedCase)];
          await updateDoc(userDocRef, {
            [`completedCases_${localRegion}`]: updatedCompletedCases,
          });

          // Оновлюємо локальний стан userData
          setUserData((prevData) => ({
            ...prevData,
            [`completedCases_${localRegion}`]: updatedCompletedCases,
          }));

          toast.success("Випадок помічено як пройдений!");
          console.log(`Випадок ${selectedCase} помічено як пройдений.`);
        } else {
          toast.info("Випадок вже позначений як пройдений.");
          console.log(`Випадок ${selectedCase} вже позначений як пройдений.`);
        }
      } catch (error) {
        console.error("Помилка при позначенні випадку:", error);
        toast.error("Не вдалося позначити випадок як пройдений.");
      }
    } else {
      toast.error("Будь ласка, виберіть випадок та регіон.");
    }
  };

  // =========================================
  // Позначення відкладених випадків
  // =========================================
  const handleDeferCase = async () => {
    if (user && localRegion && selectedCase) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        let deferredCases = [];

        if (userData && userData[`deferredCases_${localRegion}`]) {
          deferredCases = userData[`deferredCases_${localRegion}`];
        }

        if (!deferredCases.includes(String(selectedCase))) { // Перетворюємо на рядок
          const updatedDeferredCases = [...deferredCases, String(selectedCase)];
          await updateDoc(userDocRef, {
            [`deferredCases_${localRegion}`]: updatedDeferredCases,
          });

          // Оновлюємо локальний стан userData
          setUserData((prevData) => ({
            ...prevData,
            [`deferredCases_${localRegion}`]: updatedDeferredCases,
          }));

          toast.success("Випадок відкладено на потім!");
          console.log(`Випадок ${selectedCase} відкладено на потім.`);
        } else {
          toast.info("Випадок вже відкладений на потім.");
          console.log(`Випадок ${selectedCase} вже відкладений на потім.`);
        }
      } catch (error) {
        console.error("Помилка при відкладенні випадку:", error);
        toast.error("Не вдалося відкласти випадок на потім.");
      }
    } else {
      toast.error("Будь ласка, виберіть випадок та регіон.");
    }
  };

  // =========================================
  // Коли змінюються localRegion або selectedCase => підвантажуємо дані
  // =========================================
  useEffect(() => {
    if (localRegion && selectedCase) {
      // викликаємо parseData
      handleParseData(localRegion, selectedCase);
    }
  }, [localRegion, selectedCase]);

  // Лог для відлагодження
  useEffect(() => {
    console.log("Parsed Data Updated:", parsedData);
  }, [parsedData]);

  // =========================================
  // Якщо змінюється сторінка (наприклад, currentPage), відкриваємо налаштування
  // =========================================
  useEffect(() => {
    if (currentPage) {
      setIsSettingsOpen(true);
    } else {
      setIsSettingsOpen(false);
    }
  }, [currentPage]);

  useEffect(() => {
    console.log("=== FSPFormularPage re-rendered ===");
    console.log("globalSelectedRegion =", globalSelectedRegion);
    console.log("localRegion =", localRegion);
    console.log("Object.keys(dataSources) =", Object.keys(dataSources));
    console.log("userData =", userData);
  }, [globalSelectedRegion, localRegion, dataSources, userData]);

  // Закривання меню налаштувань кліком поза ним
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);

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

  // =========================================
  // Обробка вибору локального регіону через кнопочку
  // =========================================
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

  const toggleRegionDropdown = () => {
    setIsRegionDropdownOpen(!isRegionDropdownOpen);
  };

  const handleRegionSelect = (regionId) => {
    setLocalRegion(regionId);
    setIsRegionDropdownOpen(false);
    setSelectedCase("");
    setParsedData({});
    setFallType("");
  };

  // =========================================
  // Рендер
  // =========================================
  return (
    <MainLayout>
      {/* Кнопка “налаштувань” (відкриття “settings-modal”) */}
      <button
        className="settings-button"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        ref={settingsButtonRef}
        aria-label="Відкрити налаштування"
        aria-expanded={isSettingsOpen}
        aria-controls="settings-modal"
      >
        <FaCog />
      </button>

      {/* Відображення повідомлень */}
      {/* Toast повідомлення вже відображаються глобально через ToastContainer */}

      {isSettingsOpen && (
        <div className="settings-modal" ref={settingsRef}>
          <div className="settings-content">
            <h3>Налаштування</h3>

            {/* Кнопка для вибору локального регіону */}
            <div className="field">
              <label>Оберіть Регіон (локальний):</label>
              <div className="region-selector">
                <button
                  className="region-button"
                  onClick={toggleRegionDropdown}
                  aria-haspopup="true"
                  aria-expanded={isRegionDropdownOpen}
                >
                  {localRegion
                    ? dataSources[localRegion]?.region || "Виберіть регіон"
                    : "Виберіть регіон"}
                </button>
                {isRegionDropdownOpen && (
                  <ul className="region-dropdown">
                    {Object.keys(dataSources)
                      .filter((sourceId) => dataSources[sourceId].type === "local")
                      .map((sourceId) => (
                        <li key={sourceId}>
                          <button
                            className="region-option"
                            onClick={() => handleRegionSelect(sourceId)}
                          >
                            {dataSources[sourceId].region}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Селект для кейсів, які належать до конкретно обраного локального регіону */}
            {localRegion && dataSources[localRegion]?.files && (
              <div className="field">
                <label htmlFor="case-select">Виберіть випадок:</label>
                <select
                  id="case-select"
                  value={selectedCase}
                  onChange={handleCaseChange}
                >
                  <option value="">Виберіть випадок</option>
                  {dataSources[localRegion].files.map((file) => (
                    <option key={file.id} value={String(file.id)}>
                      {file.name}
                      {userData &&
                        userData[`completedCases_${localRegion}`] &&
                        userData[`completedCases_${localRegion}`].includes(String(file.id)) && (
                          <span> ✔️</span>
                        )}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Кнопки додавання нового випадку, позначення як пройдений та відкласти на потім */}
            <div className="buttons-container">
              <Link to="/data-collection">
                <button className="add-case-button" aria-label="Додати новий випадок">
                  Можливість додати випадок
                </button>
              </Link>

              <button
                className="mark-completed-button"
                onClick={handleMarkAsCompleted}
                disabled={!selectedCase}
                aria-label="Позначити випадок як пройдений"
              >
                Позначити випадок як пройдений
              </button>

              <button
                className="defer-case-button"
                onClick={handleDeferCase}
                disabled={!selectedCase}
                aria-label="Відкласти випадок на потім"
              >
                Відкласти на потім
              </button>
            </div>

            {/* Кнопка закриття */}
            <button
              className="close-button"
              onClick={() => setIsSettingsOpen(false)}
              aria-label="Закрити налаштування"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Основний Контент */}
      <div className="fsp-container">
        {isLoading && <p>Завантаження даних...</p>}

        <div
          className={`columns ${isMobile ? "mobile" : ""}`}
          ref={columnsRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Колонка №1 */}
          <div className="column">
            <div
              className="tile"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
              onClick={() => handleOpenInfoModal("personalData")}
            >
              <h3 className="tile-title">Персональні дані</h3>
              {tooltipVisible && (
                <div className="tooltip">
                  {FSPFormularPageData.modal.tooltip}
                </div>
              )}
              <PersonalData parsedData={parsedData} />
            </div>

            <div
              className="tile"
              onClick={() => handleOpenInfoModal("currentAnamnese")}
            >
              <h3 className="tile-title">Актуальний анамнез</h3>
              <AktuelleAnamnese parsedData={parsedData} />
            </div>

            <div
              className="tile"
              onClick={() => handleOpenInfoModal("preliminaryDiagnosis")}
            >
              <h3 className="tile-title">Попередній діагноз</h3>
              <PreliminaryDiagnosis parsedData={parsedData} />
            </div>
          </div>

          {/* Колонка №2 */}
          <div className="column" key="column-2">
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("vegetativeAnamnese")}
            >
              <h3 className="tile-title">Вегетативний анамнез</h3>
              <VegetativeAnamnese parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("vorerkrankungen")}
            >
              <h3 className="tile-title">Попередні захворювання</h3>
              <Vorerkrankungen parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("zusammenfassung")}
            >
              <h3 className="tile-title">Zusammenfassung</h3>
              <Zusammenfassung parsedData={parsedData} />
            </div>
          </div>

          {/* Колонка №3 */}
          <div className="column" key="column-3">
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("previousOperations")}
            >
              <h3 className="tile-title">Попередні операції</h3>
              <PreviousOperations parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("medications")}
            >
              <h3 className="tile-title">Медикаменти</h3>
              <Medications parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("allergiesAndIntolerances")}
            >
              <h3 className="tile-title">Алергії та непереносимості</h3>
              <AllergiesAndIntolerances parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("proposedProcedures")}
            >
              <h3 className="tile-title">Запропоновані процедури</h3>
              <ProposedProcedures parsedData={parsedData} />
            </div>
          </div>

          {/* Колонка №4 */}
          <div className="column" key="column-4">
            <div className="tile" onClick={() => handleOpenInfoModal("noxen")}>
              <h3 className="tile-title">Noxen</h3>
              <Noxen parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("familienanamnese")}
            >
              <h3 className="tile-title">Relevante Familienerkrankungen</h3>
              <Familienanamnese parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("sozialanamnese")}
            >
              <h3 className="tile-title">Sozialanamnese</h3>
              <Sozialanamnese parsedData={parsedData} />
            </div>
            <div
              className="tile"
              onClick={() => handleOpenInfoModal("differentialDiagnosis")}
            >
              <h3 className="tile-title">Диференційний діагноз</h3>
              <DifferentialDiagnosis parsedData={parsedData} />
            </div>
          </div>
        </div>
      </div>

      {/* Модальне вікно вибору джерела даних */}
      <SelectDataSourceModal
        isOpen={parseModal}
        onClose={() => setParseModal(false)}
        filteredSources={Object.values(dataSources).filter(
          (source) => source.region === localRegion
        )}
        handleParseData={handleParseData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Модальне вікно додаткової інформації */}
      <AdditionalInfoModal
        isOpen={infoModal}
        onClose={() => setInfoModal(false)}
        additionalInfo={additionalInfo.text}
        title={
          additionalInfo.type
            ? FSPFormularPageData.modal.additionalInfo.title
            : ""
        }
      />

      {/* Модальне вікно випадків користувачів */}
      <UserCasesModal
        isOpen={userCasesModal}
        onClose={() => setUserCasesModal(false)}
        title="Випадки користувачів"
        userCases={userCasesData}
      />
    </MainLayout>
  );
};

export default FSPFormularPage;