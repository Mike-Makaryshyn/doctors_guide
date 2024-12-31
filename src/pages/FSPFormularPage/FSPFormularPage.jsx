// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { pathList } from "../../routes/path";
import styles from "./FSPFormularPage.module.scss";
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

import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { toast } from "react-toastify";

import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import FallSpecificData from "../../constants/translation/FallSpecificData";

const FSPFormularPage = () => {
  // Глобальний Хук (Глобальна Інформація)
  const {
    user: globalUser,
    selectedLanguage,
    languages,
    currentPage,
    selectedRegion: globalSelectedRegion,
    redirectToRegionPage,
    handleChangePage,
  } = useGetGlobalInfo();

  // Контекст Джерела Даних
  const { dataSources } = useContext(DataSourceContext);

  // Локальні Стані для Різних Модалей та Даних
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

  // Новий Стан для Збереження Даних Користувача з Firestore
  const [userData, setUserData] = useState(null);

  // Отримання caseId з URL
  const { caseId } = useParams();
  console.log("Отримано caseId:", caseId);

  // Локальний Регіон
  const [localRegion, setLocalRegion] = useState(globalSelectedRegion || "");

  // Оновлення локального регіону при зміні глобального
  useEffect(() => {
    setLocalRegion(globalSelectedRegion || "");
  }, [globalSelectedRegion]);

  // Відстеження Стану Аутентифікації Користувача
  const [user, setUser] = useState(globalUser);
  const [authInitialized, setAuthInitialized] = useState(false); // Новий стан

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setAuthInitialized(true); // Встановлюємо, що аутентифікація завершена
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          // Якщо документ користувача не існує, створити його
          await setDoc(userDocRef, {});
          setUserData({});
        }
      } else {
        // Якщо користувач виходить, очистити відповідні стани
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Визначення Функції fetchDataFromFirebase (Варіант A)
  const fetchDataFromFirebase = async (collection, fileId) => {
    try {
      const docRef = doc(db, collection, fileId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Документ не знайдено!");
      }
    } catch (error) {
      console.error("Помилка завантаження даних з Firebase:", error);
      throw error;
    }
  };

  // Завантаження selectedCase з Firestore при зміні localRegion або caseId
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDataFromFirestore = userDocSnap.data();
          setUserData(userDataFromFirestore); // Оновлення стану userData
          const savedCase = userDataFromFirestore[`selectedCase_${localRegion}`];
          console.log(`Збережений випадок для ${localRegion}:`, savedCase);

          if (
            caseId &&
            dataSources[localRegion]?.files.some((file) => String(file.id) === String(caseId))
          ) {
            setSelectedCase(caseId); // Пріоритетний вибір caseId з URL
          } else if (
            savedCase &&
            dataSources[localRegion]?.files.some((file) => String(file.id) === String(savedCase))
          ) {
            setSelectedCase(savedCase);
          } else {
            setSelectedCase("");
          }
        } else {
          // Якщо документ користувача не існує, створити його
          await setDoc(userDocRef, {});
          if (
            caseId &&
            dataSources[localRegion]?.files.some((file) => String(file.id) === String(caseId))
          ) {
            setSelectedCase(caseId);
          } else {
            setSelectedCase("");
          }
          setUserData({});
        }
      } else if (caseId) {
        // Якщо немає користувача або регіону, але є caseId, встановлюємо selectedCase
        setSelectedCase(caseId);
      } else {
        setSelectedCase(""); // Встановлюємо selectedCase з URL
      }
    };

    fetchSelectedCase();
  }, [localRegion, dataSources, user, caseId]);

  // Збереження selectedCase до Firestore при його зміні
  useEffect(() => {
    const saveSelectedCase = async () => {
      if (selectedCase && localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(
            userDocRef,
            { [`selectedCase_${localRegion}`]: selectedCase },
            { merge: true }
          );
          // Видалено сповіщення toast про збереження
        } catch (error) {
          console.error("Помилка збереження випадку:", error);
          toast.error("Не вдалося зберегти випадок.");
        }
      } else if (!selectedCase && localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, { [`selectedCase_${localRegion}`]: "" });
          // Видалено сповіщення toast про очищення
        } catch (error) {
          console.error("Помилка очищення випадку:", error);
          toast.error("Не вдалося очистити випадок.");
        }
      }
    };

    saveSelectedCase();
  }, [selectedCase, localRegion, user]);

  // Перевірка наявності localRegion у dataSources
  useEffect(() => {
    if (localRegion && !dataSources[localRegion]) {
      console.warn(`localRegion "${localRegion}" не знайдено у dataSources`);
    }
  }, [localRegion, dataSources]);

  // Рефи для прокрутки
  const columnsRef = useRef(null);
  const isMobile = useIsMobile();
  let startX = 0;
  let scrollLeft = 0;

  // Стан завантаження
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Управління вікном налаштувань
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Горизонтальна Прокрутка для Мобільних Пристроїв
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

  // Парсинг Даних (Локальні або Firebase)
  const handleParseData = async (sourceId, fileId) => {
    console.log("handleParseData викликано з:", sourceId, fileId);
    setIsLoading(true);
    setError(null);

    try {
      const data = await parseData(sourceId, "local", null, fileId, dataSources);
      console.log("Отримані дані:", data);

      const selectedItem =
        data.find((item) => String(item.id) === String(fileId)) || {};
      console.log("Вибраний випадок:", selectedItem);

      // Якщо об'єкт має поле 'specialty' => fallType
      if (selectedItem.specialty) {
        setFallType(selectedItem.specialty.toLowerCase());
        console.log("Тип випадку (specialty):", selectedItem.specialty.toLowerCase());
      }

      setParsedData(selectedItem);
      console.log("Встановлено Parsed Data:", selectedItem);
    } catch (err) {
      console.error("Помилка під час парсингу даних:", err);
      setError("Сталася помилка під час завантаження даних.");
      toast.error("Сталася помилка під час завантаження даних.");
    } finally {
      setIsLoading(false);
    }
  };

  // Модальне Вікно з Додатковою Інформацією
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
        "Додаткова інформація недоступна.";
    } else {
      // Якщо специфічних даних немає, взяти загальні тексти з FSPFormularPageData
      if (type === "personalData") {
        infoText =
          FSPFormularPageData.personalData.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "currentAnamnese") {
        infoText =
          FSPFormularPageData.currentAnamnese.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "vegetativeAnamnese") {
        infoText =
          FSPFormularPageData.vegetativeAnamnese.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "zusammenfassung") {
        infoText =
          FSPFormularPageData.zusammenfassung.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "vorerkrankungen") {
        infoText =
          FSPFormularPageData.vorerkrankungen.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "previousOperations") {
        infoText =
          FSPFormularPageData.previousOperations.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "medications") {
        infoText =
          FSPFormularPageData.medications.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "allergiesAndIntolerances") {
        infoText =
          FSPFormularPageData.allergiesAndIntolerances.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "noxen") {
        infoText =
          FSPFormularPageData.noxen.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "familienanamnese") {
        infoText =
          FSPFormularPageData.familienanamnese.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "sozialanamnese") {
        infoText =
          FSPFormularPageData.sozialanamnese.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "preliminaryDiagnosis") {
        infoText =
          FSPFormularPageData.preliminaryDiagnosis?.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "differentialDiagnosis") {
        infoText =
          FSPFormularPageData.differentialDiagnosis?.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else if (type === "proposedProcedures") {
        infoText =
          FSPFormularPageData.proposedProcedures?.additionalInfo ||
          "Додаткова інформація недоступна.";
      } else {
        console.warn(`Невідомий тип: ${type}`);
      }
    }

    setAdditionalInfo({ text: infoText, type });
    setInfoModal(true);
    console.log(`Тип модального вікна: ${type}`);
    console.log(`Текст додаткової інформації: ${infoText}`);
  };

  // Зміна випадку у вибраному локальному регіоні
  const handleCaseChange = (e) => {
    setSelectedCase(e.target.value);
    setParsedData({});
  };

  // Завантаження випадків користувача з Firebase (за потребою)
  const handleOpenUserCasesModal = async (sourceId, fileId) => {
    console.log(`handleOpenUserCasesModal викликано з sourceId: ${sourceId}, fileId: ${fileId}`);
    const source = dataSources[sourceId];
    if (!source.type || source.type !== "firebase") {
      console.warn(`Джерело з id ${sourceId} не є Firebase.`);
      return;
    }

    try {
      const data = await fetchDataFromFirebase(source.collection, fileId);
      console.log("Отримані дані з Firebase:", data);
      setUserCasesData(data);
      setUserCasesModal(true);
    } catch (error) {
      console.error("Помилка завантаження даних з Firebase:", error);
      setError("Сталася помилка під час завантаження даних з Firebase.");
      toast.error("Сталася помилка під час завантаження даних з Firebase.");
    }
  };

  // Позначення випадків як Завершених
  const handleMarkAsCompleted = async () => {
    if (user && localRegion && selectedCase) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        let completedCases = [];

        if (userData && userData[`completedCases_${localRegion}`]) {
          completedCases = userData[`completedCases_${localRegion}`];
        }

        if (!completedCases.includes(String(selectedCase))) {
          const updatedCompletedCases = [...completedCases, String(selectedCase)];
          await updateDoc(userDocRef, {
            [`completedCases_${localRegion}`]: updatedCompletedCases,
          });

          // Оновлення локального стану userData
          setUserData((prevData) => ({
            ...prevData,
            [`completedCases_${localRegion}`]: updatedCompletedCases,
          }));

          toast.success("Випадок позначено як завершений!");
          console.log(`Випадок ${selectedCase} позначено як завершений.`);
        } else {
          toast.info("Випадок вже позначено як завершений.");
          console.log(`Випадок ${selectedCase} вже позначено як завершений.`);
        }
      } catch (error) {
        console.error("Помилка позначення випадку як завершеного:", error);
        toast.error("Не вдалося позначити випадок як завершений.");
      }
    } else {
      toast.error("Будь ласка, виберіть випадок та регіон.");
    }
  };

  // Відкладання випадків на пізніше
  const handleDeferCase = async () => {
    if (user && localRegion && selectedCase) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userDocRef, {
          [`deferredCases_${localRegion}`]: arrayUnion(String(selectedCase)),
        });

        // Оновлення локального стану userData
        setUserData((prevData) => ({
          ...prevData,
          [`deferredCases_${localRegion}`]: prevData[`deferredCases_${localRegion}`]
            ? [...prevData[`deferredCases_${localRegion}`], String(selectedCase)]
            : [String(selectedCase)],
        }));

        toast.success("Випадок відкладено на пізніше!");
        console.log(`Випадок ${selectedCase} відкладено на пізніше.`);
      } catch (error) {
        console.error("Помилка відкладення випадку:", error);
        toast.error("Не вдалося відкласти випадок.");
      }
    } else {
      toast.error("Будь ласка, виберіть випадок та регіон.");
    }
  };

  // Завантаження даних випадку при зміні localRegion або selectedCase
  useEffect(() => {
    if (localRegion && selectedCase) {
      // Виклик parseData
      handleParseData(localRegion, selectedCase);
    }
  }, [localRegion, selectedCase]);

  // Логування для відлагодження
  useEffect(() => {
    console.log("Parsed Data Updated:", parsedData);
  }, [parsedData]);

  // Відкриття Налаштувань при зміні сторінки (наприклад, currentPage)
  useEffect(() => {
    if (currentPage) {
      setIsSettingsOpen(true);
    } else {
      setIsSettingsOpen(false);
    }
  }, [currentPage]);

  useEffect(() => {
    console.log("=== FSPFormularPage перерисовано ===");
    console.log("globalSelectedRegion =", globalSelectedRegion);
    console.log("localRegion =", localRegion);
    console.log("Object.keys(dataSources) =", Object.keys(dataSources));
    console.log("userData =", userData);
  }, [globalSelectedRegion, localRegion, dataSources, userData]);

  // Закриття меню налаштувань при кліку поза межами
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

  // Обробка Вибору Локального Регіону через Кнопку
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

  // Завантаження даних випадку на основі caseId
  useEffect(() => {
    const fetchCaseData = async () => {
      if (!caseId) return;

      setIsLoading(true);
      setError(null);

      try {
        // Знайти регіон за caseId
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region].files.some((file) => String(file.id) === String(caseId))
        );

        if (!regionId) {
          throw new Error(`Випадок з ID ${caseId} не знайдено у dataSources.`);
        }

        setLocalRegion(regionId);
        console.log(`Регіон знайдено: ${regionId}`);

        // Встановити selectedCase на caseId, щоб ініціювати завантаження даних
        setSelectedCase(caseId);
      } catch (err) {
        console.error("Помилка завантаження даних випадку:", err);
        setError(err.message);
        toast.error("Не вдалося завантажити дані випадку.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseData();
  }, [caseId, dataSources, fetchDataFromFirebase]);

  // Рендеринг
  return (
    <MainLayout>
      {/* Кнопка Налаштувань */}
      <button
        className={styles["settings-button"]}
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        ref={settingsButtonRef}
        aria-label="Відкрити Налаштування"
        aria-expanded={isSettingsOpen}
        aria-controls="settings-modal"
      >
        <FaCog />
      </button>

      {/* Відображення Сповіщень */}
      {/* Toast сповіщення вже відображаються глобально через ToastContainer */}

      {isSettingsOpen && (
        <div className={styles["settings-modal"]} ref={settingsRef}>
          <div className={styles["settings-content"]}>
            <h3>Налаштування</h3>

            {/* Вибір Локального Регіону */}
            <div className={styles["field"]}>
              <label>Виберіть Локальний Регіон:</label>
              <div className={styles["region-selector"]}>
                <button
                  className={styles["region-button"]}
                  onClick={toggleRegionDropdown}
                  aria-haspopup="true"
                  aria-expanded={isRegionDropdownOpen}
                >
                  {localRegion
                    ? dataSources[localRegion]?.name || "Виберіть Регіон"
                    : "Виберіть Регіон"}
                </button>
                {isRegionDropdownOpen && (
                  <ul className={styles["region-dropdown"]}>
                    {Object.keys(dataSources)
                      .filter((sourceId) => dataSources[sourceId].type === "local")
                      .map((sourceId) => (
                        <li key={sourceId}>
                          <button
                            className={styles["region-option"]}
                            onClick={() => handleRegionSelect(sourceId)}
                          >
                            {dataSources[sourceId].name}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Вибір Випадку для Обраного Локального Регіону */}
            {localRegion && dataSources[localRegion]?.files && (
              <div className={styles["field"]}>
                <label htmlFor="case-select">Виберіть Випадок:</label>
                <select
                  id="case-select"
                  value={selectedCase}
                  onChange={handleCaseChange}
                  className={styles["case-select"]}
                >
                  <option value="">Виберіть Випадок</option>
                  {dataSources[localRegion].files.map((file) => (
                    <option key={file.id} value={String(file.id)}>
                      {file.name}
                      {userData &&
                        userData[`completedCases_${localRegion}`] &&
                        userData[`completedCases_${localRegion}`].includes(
                          String(file.id)
                        ) && <span> ✔️</span>}
                      {userData &&
                        userData[`deferredCases_${localRegion}`] &&
                        userData[`deferredCases_${localRegion}`].includes(
                          String(file.id)
                        ) && <span> ⏸️</span>}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Відображення Відкладених Випадків */}
            {localRegion &&
              userData &&
              userData[`deferredCases_${localRegion}`] &&
              userData[`deferredCases_${localRegion}`].length > 0 && (
                <div className={styles["field"]}>
                  <label>Відкладені Випадки:</label>
                  <ul className={styles["deferred-cases-list"]}>
                    {userData[`deferredCases_${localRegion}`].map((caseId) => {
                      const deferredCase = dataSources[localRegion]?.files.find(
                        (file) => String(file.id) === String(caseId)
                      );
                      return (
                        <li
                          key={caseId}
                          className={styles["deferred-case-item"]}
                        >
                          <Link
                            to={`${pathList.informationSources.path}/${caseId}`}
                            className={styles["deferred-case-link"]}
                          >
                            {deferredCase
                              ? deferredCase.name
                              : `ID Випадку: ${caseId}`}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

            {/* Кнопки для Додавання, Позначення як Завершених та Відкладення Випадків */}
            <div className={styles["buttons-container"]}>
              <Link to="/data-collection">
                <button
                  className={styles["add-case-button"]}
                  aria-label="Додати Новий Випадок"
                >
                  Додати Новий Випадок
                </button>
              </Link>

              <button
                className={styles["mark-completed-button"]}
                onClick={handleMarkAsCompleted}
                disabled={!selectedCase}
                aria-label="Позначити Випадок як Завершений"
              >
                Позначити як Завершений
              </button>

              <button
                className={styles["defer-case-button"]}
                onClick={handleDeferCase}
                disabled={!selectedCase}
                aria-label="Відкласти Випадок на Пізніше"
              >
                Відкласти на Пізніше
              </button>
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

      {/* Основний Контент */}
      <div className={styles["fsp-container"]}>
        {isLoading && (
          <p className={styles["loading-message"]}>Завантаження даних...</p>
        )}

        {error && <p className={styles["error-message"]}>{error}</p>}

        {!isLoading && !error && (
          <div
            className={`${styles["columns"]} ${
              isMobile ? styles["mobile"] : ""
            }`}
            ref={columnsRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {/* Колонка 1 */}
            <div className={styles["column"]}>
              <div
                className={styles["tile"]}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                onClick={() => handleOpenInfoModal("personalData")}
              >
                <h3 className={styles["tile-title"]}>Особисті Дані</h3>
                {tooltipVisible && (
                  <div className={styles["tooltip"]}>
                    {FSPFormularPageData.modal.tooltip}
                  </div>
                )}
                <PersonalData parsedData={parsedData} />
              </div>

              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("currentAnamnese")}
              >
                <h3 className={styles["tile-title"]}>Поточна Анамнез</h3>
                <AktuelleAnamnese parsedData={parsedData} />
              </div>

              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("preliminaryDiagnosis")}
              >
                <h3 className={styles["tile-title"]}>Попередній Діагноз</h3>
                <PreliminaryDiagnosis parsedData={parsedData} />
              </div>
            </div>

            {/* Колонка 2 */}
            <div className={styles["column"]} key="column-2">
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("vegetativeAnamnese")}
              >
                <h3 className={styles["tile-title"]}>Вегетативна Анамнез</h3>
                <VegetativeAnamnese parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("vorerkrankungen")}
              >
                <h3 className={styles["tile-title"]}>Попередні Хвороби</h3>
                <Vorerkrankungen parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("zusammenfassung")}
              >
                <h3 className={styles["tile-title"]}>Підсумок</h3>
                <Zusammenfassung parsedData={parsedData} />
              </div>
            </div>

            {/* Колонка 3 */}
            <div className={styles["column"]} key="column-3">
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("previousOperations")}
              >
                <h3 className={styles["tile-title"]}>Попередні Операції</h3>
                <PreviousOperations parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("medications")}
              >
                <h3 className={styles["tile-title"]}>Медикаменти</h3>
                <Medications parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("allergiesAndIntolerances")}
              >
                <h3 className={styles["tile-title"]}>Алергії та Нетерпимості</h3>
                <AllergiesAndIntolerances parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("proposedProcedures")}
              >
                <h3 className={styles["tile-title"]}>Пропоновані Процедури</h3>
                <ProposedProcedures parsedData={parsedData} />
              </div>
            </div>

            {/* Колонка 4 */}
            <div className={styles["column"]} key="column-4">
              <div className={styles["tile"]} onClick={() => handleOpenInfoModal("noxen")}>
                <h3 className={styles["tile-title"]}>Ноксени</h3>
                <Noxen parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("familienanamnese")}
              >
                <h3 className={styles["tile-title"]}>Релевантні Сімейні Хвороби</h3>
                <Familienanamnese parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("sozialanamnese")}
              >
                <h3 className={styles["tile-title"]}>Соціальна Анамнез</h3>
                <Sozialanamnese parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("differentialDiagnosis")}
              >
                <h3 className={styles["tile-title"]}>Диференційний Діагноз</h3>
                <DifferentialDiagnosis parsedData={parsedData} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Модальне Вікно для Вибору Джерела Даних */}
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

      {/* Модальне Вікно для Додаткової Інформації */}
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

      {/* Модальне Вікно для Випадків Користувача */}
      <UserCasesModal
        isOpen={userCasesModal}
        onClose={() => setUserCasesModal(false)}
        title="Випадки Користувача"
        userCases={userCasesData}
      />
    </MainLayout>
  );
};

export default FSPFormularPage;