// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./FSPFormularPage.module.scss";
import FSPFormularPageData from "../../constants/translation/FSPFormularPage";

// Імпорт компонентів
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
import ExaminerQuestions from "./components/ExaminerQuestions";
import ReiseImpfstatus from "./components/ReiseImpfstatus"; // Додано імпорт

// Імпорт бібліотек для Markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// Імпорт утиліт та хуків
import { parseData } from "../../utils/dataParser";
import useIsMobile from "../../hooks/useIsMobile";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { FaCog } from "react-icons/fa";

// Імпорт Firebase
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Імпорт для сповіщень
import { toast } from "react-toastify";

// Імпорт глобального хуку
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Імпорт даних випадків
import FallSpecificData from "../../constants/translation/FallSpecificData";

// Імпорт утиліти для Firebase
import { fetchDataFromFirebase } from "../../utils/firebaseUtils";

// Імпорт React Select
import Select from "react-select";

const FSPFormularPage = () => {
  // Глобальні стани та контексти
  const {
    user: globalUser,
    selectedLanguage,
    languages,
    currentPage,
    selectedRegion: globalSelectedRegion,
    redirectToRegionPage,
    handleChangePage,
  } = useGetGlobalInfo();

  const { dataSources } = useContext(DataSourceContext);

  // Локальні стани для модальних вікон та даних
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

  // Стан користувача з Firestore
  const [userData, setUserData] = useState(null);

  // Отримання caseId з URL
  const { caseId } = useParams();
  console.log("Отримано caseId:", caseId);

  // Локальний регіон
  const [localRegion, setLocalRegion] = useState(globalSelectedRegion || "");

  // Оновлення локального регіону при зміні глобального, якщо немає caseId
  useEffect(() => {
    if (!caseId) {
      setLocalRegion(globalSelectedRegion || "");
    }
  }, [globalSelectedRegion, caseId]);

  // Відстеження стану аутентифікації користувача
  const [user, setUser] = useState(globalUser);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setAuthInitialized(true);
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          await setDoc(userDocRef, {});
          setUserData({});
        }
      } else {
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Завантаження selectedCase з Firestore при зміні localRegion або caseId
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDataFromFirestore = userDocSnap.data();
          setUserData(userDataFromFirestore);
          const savedCase = userDataFromFirestore[`selectedCase_${localRegion}`];
          console.log(`Збережений випадок для ${localRegion}:`, savedCase);

          if (
            caseId &&
            dataSources[localRegion]?.files.some(
              (file) => String(file.id) === String(caseId)
            )
          ) {
            setSelectedCase(caseId);
          } else if (
            savedCase &&
            dataSources[localRegion]?.files.some(
              (file) => String(file.id) === String(savedCase)
            )
          ) {
            setSelectedCase(savedCase);
          } else {
            setSelectedCase("");
          }
        } else {
          await setDoc(userDocRef, {});
          if (
            caseId &&
            dataSources[localRegion]?.files.some(
              (file) => String(file.id) === String(caseId)
            )
          ) {
            setSelectedCase(caseId);
          } else {
            setSelectedCase("");
          }
          setUserData({});
        }
      } else if (caseId) {
        setSelectedCase(caseId);
      } else {
        setSelectedCase("");
      }
    };

    fetchSelectedCase();
  }, [localRegion, dataSources, user, caseId]);

  // Збереження selectedCase до Firestore при його зміні з перевіркою валідності
  useEffect(() => {
    const saveSelectedCase = async () => {
      if (selectedCase && localRegion && user) {
        const isValidCase = dataSources[localRegion]?.files.some(
          (file) => String(file.id) === String(selectedCase)
        );

        if (!isValidCase) {
          console.warn(
            `selectedCase "${selectedCase}" не існує для регіону "${localRegion}"`
          );
          return;
        }

        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(
            userDocRef,
            { [`selectedCase_${localRegion}`]: selectedCase },
            { merge: true }
          );
          console.log(`Збережено selectedCase_${localRegion}: ${selectedCase}`);
        } catch (error) {
          console.error("Помилка збереження випадку:", error);
          toast.error("Не вдалося зберегти випадок.");
        }
      } else if (!selectedCase && localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, { [`selectedCase_${localRegion}`]: "" });
          console.log(`Очищено selectedCase_${localRegion}`);
        } catch (error) {
          console.error("Помилка очищення випадку:", error);
          toast.error("Не вдалося очистити випадок.");
        }
      }
    };

    saveSelectedCase();
  }, [selectedCase, localRegion, user, dataSources]);

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
  const [errorState, setErrorState] = useState(null);

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
    setErrorState(null);

    try {
      const source = dataSources[sourceId];
      let data = [];

      if (source.type === "local") {
        data = await parseData(sourceId, "local", null, fileId, dataSources);
      } else if (source.type === "firebase") {
        data = await fetchDataFromFirebase(source.collection, fileId);
      }

      console.log("Отримані дані:", data);

      const selectedItem =
        source.type === "local"
          ? data.find((item) => String(item.id) === String(fileId)) || {}
          : data;

      console.log("Вибраний випадок:", selectedItem);
      console.log("Перед парсингом:", additionalInfo);

      // Встановлення parsedData без summary та examinerQuestions
      setParsedData(selectedItem);
      console.log("Parsed Data після парсингу:", selectedItem);

      // Якщо об'єкт має поле 'specialty' => fallType
      if (selectedItem.specialty) {
        setFallType(selectedItem.specialty.toLowerCase());
        console.log(
          "Тип випадку (specialty):",
          selectedItem.specialty.toLowerCase()
        );
      }

      // Встановлюємо summary тільки якщо воно існує
      if (selectedItem.summary) {
        setParsedData((prevData) => ({
          ...prevData,
          summary: selectedItem.summary,
        }));
        console.log("Parsed Data з summary:", {
          ...selectedItem,
          summary: selectedItem.summary,
        });
      } else {
        console.warn("Parsed Data не містить summary:", selectedItem);
      }

      // Встановлюємо examinerQuestions тільки якщо воно існує
      if (selectedItem.examinerQuestions) {
        setParsedData((prevData) => ({
          ...prevData,
          examinerQuestions: selectedItem.examinerQuestions,
        }));
        console.log("Parsed Data з examinerQuestions:", {
          ...selectedItem,
          examinerQuestions: selectedItem.examinerQuestions,
        });
      } else {
        console.warn("Parsed Data не містить examinerQuestions:", selectedItem);
      }
    } catch (err) {
      console.error("Помилка під час парсингу даних:", err);
      setErrorState("Сталася помилка під час завантаження даних.");
      toast.error("Сталася помилка під час завантаження даних.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleResetCase = () => {
    setSelectedCase(""); // Очищення вибраного випадку
    setParsedData({}); // Очищення парсованих даних
    toast.info("Вибраний випадок очищено."); // Повідомлення про успіх
    console.log("Стан вибраного випадку очищено."); // Лог для дебагу
  };
  // Функція для відкриття модального вікна додаткової інформації
  const handleOpenInfoModal = (type) => {
    if (isLoading) {
      toast.info("Дані ще завантажуються. Будь ласка, зачекайте.");
      return;
    }

    let infoText = "";

    console.log("handleOpenInfoModal викликано з type:", type);

    if (type === "zusammenfassung") {
      infoText =
        parsedData.summary ||
        FSPFormularPageData.modal.additionalInfo.defaultSummary ||
        "Підсумок не доступний.";
      console.log("Отримано summary для підсумку:", infoText);
    } else if (type === "examinerQuestions") {
      infoText =
        parsedData.examinerQuestions || // Використовуємо дані з parsedData
        FSPFormularPageData.modal.additionalInfo.defaultExaminerQuestions || // Використовуємо дефолтний текст
        "Додаткова інформація для запитань екзаменаторів недоступна.";
      console.log("Отримано інформацію для ExaminerQuestions:", infoText);
    } else if (fallType && FallSpecificData[fallType]?.[type]?.additionalInfo) {
      infoText = FallSpecificData[fallType][type].additionalInfo;
      console.log("Отримано специфічну додаткову інформацію:", infoText);
    } else if (FSPFormularPageData[type]?.additionalInfo) {
      infoText = FSPFormularPageData[type].additionalInfo;
      console.log("Отримано загальну додаткову інформацію:", infoText);
    } else {
      infoText = "Додаткова інформація недоступна.";
      console.warn(`Невідомий тип: ${type}`);
    }

    if (!infoText || infoText.trim() === "") {
      console.warn("Некоректні дані для модального вікна:", infoText);
      infoText = "Інформація недоступна.";
    }

    setAdditionalInfo({ text: infoText, type });
    // setInfoModal(true); // Видалено для вирішення асинхронності

    console.log(`Тип модального вікна: ${type}`);
    console.log(`Текст додаткової інформації: ${infoText}`);
  };

  // Додано useEffect для відкриття модального вікна після оновлення additionalInfo
  useEffect(() => {
    if (additionalInfo.text) {
      setInfoModal(true);
      console.log(
        "additionalInfo оновлено, модальне вікно відкрито:",
        additionalInfo
      );
    }
  }, [additionalInfo]);

  // Зміна випадку у вибраному локальному регіоні
  const handleCaseChange = (selectedOption) => {
    setSelectedCase(selectedOption.value);
    setParsedData({});
  };

  // Завантаження випадків користувача з Firebase (за потребою)
  const handleOpenUserCasesModal = async (sourceId, fileId) => {
    console.log(
      `handleOpenUserCasesModal викликано з sourceId: ${sourceId}, fileId: ${fileId}`
    );
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
      setErrorState("Сталася помилка під час завантаження даних з Firebase.");
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
          const updatedCompletedCases = [
            ...completedCases,
            String(selectedCase),
          ];
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
          [`deferredCases_${localRegion}`]: prevData[
            `deferredCases_${localRegion}`
          ]
            ? [
                ...prevData[`deferredCases_${localRegion}`],
                String(selectedCase),
              ]
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
      console.log("Виклик handleParseData з:", localRegion, selectedCase);
      handleParseData(localRegion, selectedCase);
    } else {
      console.warn("Неможливо завантажити дані: відсутній selectedCase.");
    }
  }, [localRegion, selectedCase]);

  // Логування для відлагодження
  useEffect(() => {
    console.log("Parsed Data Updated:", parsedData);
  }, [parsedData]);

  // Відкриття Налаштувань при зміні сторінки
  useEffect(() => {
    if (currentPage) {
      setIsSettingsOpen(true);
    } else {
      setIsSettingsOpen(false);
    }
  }, [currentPage]);

  // Логування станів
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
      setErrorState(null);

      try {
        // Знайти регіон за caseId
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region].files.some(
            (file) => String(file.id) === String(caseId)
          )
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
        setErrorState(err.message);
        toast.error("Не вдалося завантажити дані випадку.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseData();
  }, [caseId, dataSources]);

  // Функція для обробки вибору опції в React Select
  const getCaseOptions = () => {
    if (!localRegion || !dataSources[localRegion]?.files) {
      console.log("Файли для локального регіону відсутні:", localRegion);
      return [];
    }

    console.log("Файли для локального регіону:", dataSources[localRegion].files);

    return dataSources[localRegion].files
      .filter((file) => file.id) // Додано фільтр наявності id
      .map((file) => {
        let status = "";
        if (userData) {
          if (
            userData[`completedCases_${localRegion}`]?.includes(
              String(file.id)
            )
          ) {
            status = "completed";
          }
          if (
            userData[`deferredCases_${localRegion}`]?.includes(
              String(file.id)
            )
          ) {
            status = "deferred";
          }
        }

        console.log(`Створюємо опцію для файлу:`, file);

        return {
          value: file.id,
          label: (
            <div className={styles["option-label"]}>
              {/* Використовуємо fallname або id, якщо fallname відсутній */}
              <span>{file.fallname || file.id}</span>
              {status === "completed" && (
                <span className={styles["status-icon"]}>✔️</span>
              )}
              {status === "deferred" && (
                <span className={styles["status-icon"]}>⏸️</span>
              )}
            </div>
          ),
        };
      });
  };

  // Стилізація для React Select
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "#ccc",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#007bff",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  // Функція для обробки кліку на ExaminerQuestions
  const handleExaminerQuestionsClick = () => {
    handleOpenInfoModal("examinerQuestions");
  };

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

      {/* Лог для перевірки additionalInfo перед рендерингом модалки */}
      {console.log("AdditionalInfo перед рендерингом модалки:", additionalInfo)}

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
                      .filter(
                        (sourceId) => dataSources[sourceId].type === "local"
                      )
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
                <Select
                  id="case-select"
                  value={
                    selectedCase
                      ? {
                          value: selectedCase,
                          label: (
                            <div className={styles["option-label"]}>
                              <span>
                                {dataSources[localRegion].files.find(
                                  (file) =>
                                    String(file.id) === String(selectedCase)
                                )?.fallname || dataSources[localRegion].files.find(
                                  (file) =>
                                    String(file.id) === String(selectedCase)
                                )?.id || "Виберіть Випадок"}
                              </span>
                              {userData &&
                                userData[`completedCases_${localRegion}`]?.includes(
                                  String(selectedCase)
                                ) && (
                                  <span className={styles["status-icon"]}>
                                    ✔️
                                  </span>
                                )}
                              {userData &&
                                userData[`deferredCases_${localRegion}`]?.includes(
                                  String(selectedCase)
                                ) && (
                                  <span className={styles["status-icon"]}>
                                    ⏸️
                                  </span>
                                )}
                            </div>
                          ),
                        }
                      : null
                  }
                  onChange={handleCaseChange}
                  options={getCaseOptions()}
                  className={styles["react-select-container"]}
                  classNamePrefix="react-select"
                  placeholder="Виберіть Випадок"
                  styles={customSelectStyles}
                />
              </div>
            )}

            {/* Кнопки для Додавання, Позначення як Завершених та Відкладання Випадків */}
            <div className={styles["buttons-container"]}>
              <Link to="/data-collection">
                <button
                  className={styles["add-case-button"]}
                  aria-label="Додати Новий Випадок"
                >
                  ➕
                </button>
              </Link>

              <button
                className={styles["mark-completed-button"]}
                onClick={handleMarkAsCompleted}
                disabled={!selectedCase}
                aria-label="Позначити Випадок як Завершений"
              >
                ✓
              </button>

              <button
                className={styles["defer-case-button"]}
                onClick={handleDeferCase}
                disabled={!selectedCase}
                aria-label="Відкласти Випадок на Пізніше"
              >
                ⏸
              </button>
             
               <button
                className={styles["reset-case-button"]}
                onClick={handleResetCase}
                disabled={!selectedCase}
              >
                🔄
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

        {errorState && <p className={styles["error-message"]}>{errorState}</p>}

        {!isLoading && !errorState && (
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

              {/* Додана секція ReiseImpfstatus */}
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("reiseImpfstatus")}
              >
                <h3 className={styles["tile-title"]}>Reise- та Impfstatus</h3>
                <ReiseImpfstatus parsedData={parsedData} />
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
                onClick={() => handleOpenInfoModal("zusammenfassung")}
              >
                <h3 className={styles["tile-title"]}>Підсумок</h3>
                <Zusammenfassung parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("vorerkrankungen")}
              >
                <h3 className={styles["tile-title"]}>Попередні Хвороби</h3>
                <Vorerkrankungen parsedData={parsedData} />
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
                <h3 className={styles["tile-title"]}>
                  Алергії та Нетерпимості
                </h3>
                <AllergiesAndIntolerances parsedData={parsedData} />
              </div>

              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("noxen")}
              >
                <h3 className={styles["tile-title"]}>Ноксени</h3>
                <Noxen parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("familienanamnese")}
              >
                <h3 className={styles["tile-title"]}>
                  Релевантні Сімейні Хвороби
                </h3>
                <Familienanamnese parsedData={parsedData} />
              </div>
            </div>

            {/* Колонка 4 */}
            <div className={styles["column"]} key="column-4">
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
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("preliminaryDiagnosis")}
              >
                <h3 className={styles["tile-title"]}>Попередній Діагноз</h3>
                <PreliminaryDiagnosis parsedData={parsedData} />
              </div>
              <div
                className={styles["tile"]}
                onClick={() => handleOpenInfoModal("proposedProcedures")}
              >
                <h3 className={styles["tile-title"]}>Пропоновані Процедури</h3>
                <ProposedProcedures parsedData={parsedData} />
              </div>

              {/* Додана секція ExaminerQuestions */}
              <div
                className={styles["tile"]}
                onClick={handleExaminerQuestionsClick}
              >
                <h3 className={styles["tile-title"]}>Запитання Екзаменатора</h3>
                <ExaminerQuestions onQuestionClick={handleExaminerQuestionsClick} />
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
          (source) => source.region === localRegion && source.id
        )} // Додано фільтр наявності id
        handleParseData={handleParseData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Модальне Вікно для Додаткової Інформації */}
      <AdditionalInfoModal
        isOpen={infoModal}
        onClose={() => setInfoModal(false)}
        title={
          additionalInfo.type === "zusammenfassung"
            ? "Підсумок"
            : additionalInfo.type === "examinerQuestions"
            ? "Запитання екзаменатора"
            : "Додаткова інформація"
        }
        additionalInfo={additionalInfo}
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