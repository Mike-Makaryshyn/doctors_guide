// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./FSPFormularPage.module.scss";
import FSPFormularPageData from "../../constants/translation/FSPFormularPage";

// Компоненти
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
import ReiseImpfstatus from "./components/ReiseImpfstatus";
import PatientQuestions from "./components/PatientQuestions";

// React Select
import Select from "react-select";

// Утиліти та хуки
import { parseData } from "../../utils/dataParser";
import useIsMobile from "../../hooks/useIsMobile";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { FaCog } from "react-icons/fa";

// Firebase
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Якщо у вас є глобальний хук
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Інші дані
import FallSpecificData from "../../constants/translation/FallSpecificData";
import { fetchDataFromFirebase } from "../../utils/firebaseUtils";

const FSPFormularPage = () => {
  const navigate = useNavigate();

  // Глобальний хук (якщо треба)
  const {
    user,
    selectedLanguage,
    languages,
    currentPage,
    selectedRegion,
    handleChangeRegion,
    redirectToRegionPage,
    handleChangePage,
  } = useGetGlobalInfo() || {};

  // Дані з DataSourceContext
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);

  // ---- Локальні стани ----
  const [parseModal, setParseModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [userCasesModal, setUserCasesModal] = useState(false);
  const [parsedData, setParsedData] = useState({});
  // Припустимо, tooltipVisible лише для показу підказки, вимкнемо логіку ховера
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState({ text: "", type: "" });
  const [selectedCase, setSelectedCase] = useState("");
  const [userCasesData, setUserCasesData] = useState([]);
  const [fallType, setFallType] = useState("");
  const [userData, setUserData] = useState(null);

  // Меню налаштувань
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Витягуємо caseId з URL (якщо /fsp-formular/:caseId)
  const { caseId } = useParams();

  // Локальний стан регіону
  const [localRegion, setLocalRegion] = useState(selectedRegion || "");

  // Один раз обробляємо caseId
  const [isCaseIdHandled, setIsCaseIdHandled] = useState(false);

  // Перемикач між локальними та firebase-даними
  const [dataSourceType, setDataSourceType] = useState("local");

  // Дропдаун для вибору регіону
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const toggleRegionDropdown = () => setIsRegionDropdownOpen(!isRegionDropdownOpen);

  const handleRegionSelect = (regionId) => {
    setLocalRegion(regionId);
    setIsRegionDropdownOpen(false);
    setSelectedCase("");
    setParsedData({});
    setFallType("");
  };

  // Якщо глобальний selectedRegion змінюється
  useEffect(() => {
    if (!caseId && !isCaseIdHandled) {
      setLocalRegion(selectedRegion || "");
    }
  }, [selectedRegion, caseId, isCaseIdHandled]);

  // ---- Auth ----
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());
          } else {
            // якщо документ користувача ще не створений
            await setDoc(userDocRef, {});
            setUserData({});
          }
        } catch (error) {
          console.error("Помилка доступу до документу користувача:", error);
          toast.error("Не вдалося отримати дані користувача.");
          setUserData(null);
        }
      } else {
        // неавторизований користувач
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // ---- Завантаження Firebase-кейсів, якщо вибрали dataSourceType="firebase" ----
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    const loadFirebaseCases = async () => {
      if (dataSourceType === "firebase" && localRegion) {
        setIsLoading(true);
        try {
          await fetchFirebaseCases(localRegion);
        } catch (e) {
          console.error("Помилка завантаження з Firebase:", e);
          setErrorState("Не вдалося отримати дані з Firebase.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadFirebaseCases();
  }, [dataSourceType, localRegion, fetchFirebaseCases]);

  // ---- Якщо користувач зайшов по URL з caseId (і авторизований), шукаємо цей case ----
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (user && caseId && !isCaseIdHandled) {
        // Шукаємо, в якому регіоні є кейс із таким id
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region]?.sources?.local?.some(
            (file) => String(file.id) === String(caseId)
          ) ||
          dataSources[region]?.sources?.firebase?.some(
            (file) => String(file.id) === String(caseId)
          )
        );

        if (regionId) {
          setLocalRegion(regionId);
          setSelectedCase(caseId);
        } else {
          setSelectedCase("");
          return;
        }
        setIsCaseIdHandled(true);
      }

      if (localRegion && user) {
        // Завантажуємо з Firestore, чи є в користувача збережений selectedCase
        const userDocRef = doc(db, "users", user.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userDataFromFirestore = userDocSnap.data();
            setUserData(userDataFromFirestore);

            const savedCase = userDataFromFirestore[`selectedCase_${localRegion}`];

            const localHasCase = dataSources[localRegion]?.sources?.local?.some(
              (file) => String(file.id) === String(caseId)
            );
            const firebaseHasCase = dataSources[localRegion]?.sources?.firebase?.some(
              (file) => String(file.id) === String(caseId)
            );

            if (caseId && (localHasCase || firebaseHasCase)) {
              // Якщо в URL теж є і дійсний
              setSelectedCase(caseId);
            } else if (savedCase) {
              // Якщо у Firestore збережений випадок
              const localHasSavedCase = dataSources[localRegion]?.sources?.local?.some(
                (f) => String(f.id) === String(savedCase)
              );
              const firebaseHasSavedCase =
                dataSources[localRegion]?.sources?.firebase?.some(
                  (f) => String(f.id) === String(savedCase)
                );
              if (localHasSavedCase || firebaseHasSavedCase) {
                setSelectedCase(savedCase);
              } else {
                setSelectedCase("");
              }
            } else {
              setSelectedCase("");
            }
          } else {
            // якщо немає документу користувача
            await setDoc(userDocRef, {});
            setSelectedCase("");
            setUserData({});
          }
        } catch (error) {
          console.error("Помилка завантаження selectedCase:", error);
          toast.error("Не вдалося завантажити вибраний випадок.");
          setSelectedCase("");
          setUserData(null);
        }
      } else if (caseId && !isCaseIdHandled) {
        // Якщо user неавторизований, але є ?caseId
        setSelectedCase(caseId);
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region]?.sources?.local?.some(
            (file) => String(file.id) === String(caseId)
          ) ||
          dataSources[region]?.sources?.firebase?.some(
            (file) => String(file.id) === String(caseId)
          )
        );
        if (regionId) {
          setLocalRegion(regionId);
          setIsCaseIdHandled(true);
        } else {
          setSelectedCase("");
        }
      } else {
        setSelectedCase("");
      }
    };

    fetchSelectedCase();
  }, [localRegion, dataSources, user, caseId, isCaseIdHandled]);

  // ---- Збереження selectedCase у Firestore, коли воно змінюється ----
  useEffect(() => {
    const saveSelectedCase = async () => {
      if (!user) return;
      const regionKey = localRegion;
      if (selectedCase && regionKey) {
        const isValidLocal = dataSources[regionKey]?.sources?.local?.some(
          (file) => String(file.id) === String(selectedCase)
        );
        const isValidFirebase = dataSources[regionKey]?.sources?.firebase?.some(
          (file) => String(file.id) === String(selectedCase)
        );
        const isValidCase = isValidLocal || isValidFirebase;

        if (!isValidCase) {
          return;
        }
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, {
            [`selectedCase_${regionKey}`]: selectedCase,
          });
        } catch (error) {
          console.error("Помилка збереження випадку:", error);
          toast.error("Не вдалося зберегти випадок.");
        }
      } else if (!selectedCase && regionKey) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, { [`selectedCase_${regionKey}`]: "" });
        } catch (error) {
          console.error("Помилка очищення випадку:", error);
          toast.error("Не вдалося очистити випадок.");
        }
      }
    };

    saveSelectedCase();
  }, [selectedCase, localRegion, user, dataSources]);

  // ---- Перевірка, чи існує localRegion у dataSources ----
  useEffect(() => {
    if (localRegion && !dataSources[localRegion]) {
      console.warn(`localRegion "${localRegion}" не знайдено у dataSources`);
    }
  }, [localRegion, dataSources]);

  // ---- Горизонтальна прокрутка на мобільних ----
  const columnsRef = useRef(null);
  const isMobile = useIsMobile();
  let startX = 0;
  let scrollLeft = 0;

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

  /**
   * handleParseData: Завантаження чи парсинг кейсу (залежно від dataSourceType).
   * Уникаємо дублювання викликів, якщо об'єкт не змінився.
   */
  const handleParseData = useCallback(
    async (sourceId, fileId) => {
      setIsLoading(true);
      setErrorState(null);

      try {
        const source = dataSources[sourceId];
        if (!source) {
          throw new Error(`Джерело з id ${sourceId} не знайдено.`);
        }

        let data = [];
        if (dataSourceType === "local" && source.sources?.local) {
          data = await parseData(sourceId, "local", null, fileId, dataSources);
        } else if (dataSourceType === "firebase" && source.sources?.firebase) {
          data = source.sources.firebase;
        } else {
          throw new Error("Невідповідний тип джерела даних");
        }

        const selectedItem =
          data.find((item) => String(item.id) === String(fileId)) || {};

        // Оновлюємо parsedData лише якщо об'єкт дійсно змінився
        setParsedData((prevData) => {
          const prevString = JSON.stringify(prevData);
          const newString = JSON.stringify(selectedItem);
          return prevString !== newString ? selectedItem : prevData;
        });

        // Якщо є specialty – зберігаємо для FallSpecificData
        if (selectedItem.specialty) {
          setFallType(selectedItem.specialty.toLowerCase());
        } else {
          setFallType("");
        }

        // Якщо є якісь інші поля (summary, examinerQuestions, patientQuestions)
        if (selectedItem.summary) {
          setParsedData((prev) => ({ ...prev, summary: selectedItem.summary }));
        }
        if (selectedItem.examinerQuestions) {
          setParsedData((prev) => ({
            ...prev,
            examinerQuestions: selectedItem.examinerQuestions,
          }));
        }
        if (selectedItem.patientQuestions) {
          setParsedData((prev) => ({
            ...prev,
            patientQuestions: selectedItem.patientQuestions,
          }));
        }
      } catch (err) {
        console.error("Помилка під час парсингу даних:", err);
        setErrorState("Сталася помилка під час завантаження даних.");
        toast.error("Сталася помилка під час завантаження даних.");
      } finally {
        setIsLoading(false);
      }
    },
    [dataSourceType, dataSources]
  );

  // Викликаємо handleParseData при зміні localRegion / selectedCase / dataSourceType
  useEffect(() => {
    if (localRegion && selectedCase) {
      handleParseData(localRegion, selectedCase);
    } else {
      setParsedData({});
    }
  }, [localRegion, selectedCase, dataSourceType, handleParseData]);

  // ---- Відкриття модалки з дод. інфо ----
  const handleOpenInfoModal = (type) => {
    if (isLoading) {
      toast.info("Дані ще завантажуються. Будь ласка, зачекайте.");
      return;
    }

    let infoText = "";
    if (type === "zusammenfassung") {
      infoText =
        parsedData.summary ||
        FSPFormularPageData.modal.additionalInfo.defaultSummary ||
        "Підсумок не доступний.";
    } else if (type === "examinerQuestions") {
      infoText =
        parsedData.examinerQuestions ||
        FSPFormularPageData.modal.additionalInfo.defaultExaminerQuestions ||
        "Додаткова інформація для запитань екзаменатора недоступна.";
    } else if (type === "patientQuestions") {
      infoText =
        parsedData.patientQuestions ||
        FSPFormularPageData.modal.additionalInfo.defaultPatientQuestions ||
        "Додаткова інформація для запитань пацієнта недоступна.";
    } else if (fallType && FallSpecificData[fallType]?.[type]?.additionalInfo) {
      infoText = FallSpecificData[fallType][type].additionalInfo;
    } else if (FSPFormularPageData[type]?.additionalInfo) {
      infoText = FSPFormularPageData[type].additionalInfo;
    } else {
      infoText = "Додаткова інформація недоступна.";
    }

    if (!infoText.trim()) {
      infoText = "Інформація недоступна.";
    }

    // Додаємо title, якщо треба
    const newInfo = {
      text: infoText,
      type,
      title:
        type === "zusammenfassung"
          ? "Підсумок"
          : type === "examinerQuestions"
          ? "Запитання екзаменатора"
          : type === "patientQuestions"
          ? "Запитання пацієнта"
          : "Додаткова інформація",
    };
    setAdditionalInfo(newInfo);
  };

  // Відкриваємо модалку, щойно з’явився додатковий текст
  useEffect(() => {
    if (additionalInfo.text) {
      setInfoModal(true);
    }
  }, [additionalInfo]);

  // ---- Вибір кейсу з Select ----
  const handleCaseChange = (option) => {
    setSelectedCase(option.value);
    setParsedData({});
  };

  // ---- Модалка користувацьких кейсів (необов'язково) ----
  const handleOpenUserCasesModal = async (sourceId, fileId) => {
    const source = dataSources[sourceId];
    if (!source.type || source.type !== "firebase") return;

    try {
      const data = await fetchDataFromFirebase(source.collection, fileId);
      setUserCasesData(data);
      setUserCasesModal(true);
    } catch (error) {
      console.error("Помилка завантаження даних з Firebase:", error);
      setErrorState("Сталася помилка під час завантаження даних з Firebase.");
      toast.error("Сталася помилка під час завантаження даних з Firebase.");
    }
  };

  // ---- Позначити кейс як завершений ----
  const handleMarkAsCompleted = async () => {
    if (!user) {
      toast.error("Користувач не автентифікований.");
      return;
    }
    if (!localRegion || !selectedCase) {
      toast.error("Будь ласка, виберіть випадок та регіон.");
      return;
    }
    const userDocRef = doc(db, "users", user.uid);
    try {
      let completedCases = userData?.[`completedCases_${localRegion}`] || [];
      if (!completedCases.includes(String(selectedCase))) {
        const updated = [...completedCases, String(selectedCase)];
        await updateDoc(userDocRef, {
          [`completedCases_${localRegion}`]: updated,
        });
        setUserData((prev) => ({
          ...prev,
          [`completedCases_${localRegion}`]: updated,
        }));
        toast.success("Випадок позначено як завершений!");
      } else {
        toast.info("Випадок вже позначено як завершений.");
      }
    } catch (error) {
      console.error("Помилка позначення випадку як завершеного:", error);
      toast.error("Не вдалося позначити випадок як завершений.");
    }
  };

  // ---- Відкласти кейс на потім ----
  const handleDeferCase = async () => {
    if (!user) {
      toast.error("Користувач не автентифікований.");
      return;
    }
    if (!localRegion || !selectedCase) {
      toast.error("Будь ласка, виберіть випадок та регіон.");
      return;
    }
    const userDocRef = doc(db, "users", user.uid);
    try {
      await updateDoc(userDocRef, {
        [`deferredCases_${localRegion}`]: arrayUnion(String(selectedCase)),
      });
      setUserData((prev) => ({
        ...prev,
        [`deferredCases_${localRegion}`]: prev[`deferredCases_${localRegion}`]
          ? [...prev[`deferredCases_${localRegion}`], String(selectedCase)]
          : [String(selectedCase)],
      }));
      toast.success("Випадок відкладено на пізніше!");
    } catch (error) {
      console.error("Помилка відкладення випадку:", error);
      toast.error("Не вдалося відкласти випадок.");
    }
  };

  // ---- Скинути вибір кейсу ----
  const handleReset = () => {
    setSelectedCase("");
    setParsedData({});
    setFallType("");
  };

  // Налаштування кнопки Cog: відкриваємо при зміні сторінки (не обов'язково)
  useEffect(() => {
    setIsSettingsOpen(!!currentPage);
  }, [currentPage]);

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

  // Examiner & Patient Questions
  const handleExaminerQuestionsClick = () => {
    handleOpenInfoModal("examinerQuestions");
  };
  const handlePatientQuestionsClick = () => {
    handleOpenInfoModal("patientQuestions");
  };

  // Підготовка списку кейсів для Select
  const getCaseOptions = () => {
    const regionData = dataSources[localRegion];
    if (!regionData || !regionData.sources) {
      return [];
    }

    if (dataSourceType === "local") {
      const localFiles = regionData.sources.local;
      if (!localFiles?.length) {
        return [];
      }
      return localFiles.filter((file) => file.id).map(createCaseOption);
    } else {
      const firebaseFiles = regionData.sources.firebase;
      if (!firebaseFiles?.length) {
        return [];
      }
      return firebaseFiles.filter((file) => file.id).map(createCaseOption);
    }
  };

  const createCaseOption = (file) => {
    let status = "";
    if (userData) {
      const completedCasesKey = `completedCases_${localRegion}`;
      const deferredCasesKey = `deferredCases_${localRegion}`;
      if (userData[completedCasesKey]?.includes(String(file.id))) {
        status = "completed";
      }
      if (userData[deferredCasesKey]?.includes(String(file.id))) {
        status = "deferred";
      }
    }
    return {
      value: file.id,
      label: (
        <div className={styles["option-label"]}>
          <span>{file.name || "Без Імені"}</span>
          {status === "completed" && <span className={styles["status-icon"]}>✔️</span>}
          {status === "deferred" && <span className={styles["status-icon"]}>⏸️</span>}
        </div>
      ),
    };
  };

  // Стилі для React Select
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "#ccc",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#007bff",
      },
    }),
    option: (provided) => ({
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

  return (
    <MainLayout>
      {!user ? (
        <div className={styles["unauthenticated-container"]}>
          <p className={styles["error-message"]}>
            Ви не автентифіковані. Будь ласка, увійдіть у систему.
          </p>
          <Link to="/login">
            <button className={styles["login-button"]}>Увійти</button>
          </Link>
        </div>
      ) : (
        <>
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

          {isSettingsOpen && (
            <div className={styles["settings-modal"]} ref={settingsRef}>
              <div className={styles["settings-content"]}>
                <h3>Einstellung</h3>

                {/* Перемикач local / firebase */}
                <div className={styles["field"]}>
                  <label>Виберіть Джерело Даних:</label>
                  <div className={styles["data-source-selector"]}>
                    <label>
                      <input
                        type="radio"
                        value="local"
                        checked={dataSourceType === "local"}
                        onChange={() => setDataSourceType("local")}
                      />
                      Локальні Дані
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="firebase"
                        checked={dataSourceType === "firebase"}
                        onChange={() => setDataSourceType("firebase")}
                      />
                      Firebase
                    </label>
                  </div>
                </div>

                {/* Вибір Регіону */}
                <div className={styles["field"]}>
                  <label>Виберіть Регіон:</label>
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
                          .filter((r) => dataSources[r].type === "dynamic")
                          .map((r) => (
                            <li key={r}>
                              <button
                                className={styles["region-option"]}
                                onClick={() => handleRegionSelect(r)}
                              >
                                {dataSources[r].name}
                              </button>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Вибір Кейсу (Case) */}
                {localRegion && dataSources[localRegion]?.sources && (
                  <div className={styles["field"]}>
                    <label htmlFor="case-select">Виберіть Випадок:</label>
                    <Select
                      id="case-select"
                      value={
                        selectedCase
                          ? {
                              value: selectedCase,
                              label: (() => {
                                const regionData = dataSources[localRegion];
                                const foundLocal = regionData.sources.local.find(
                                  (f) => String(f.id) === String(selectedCase)
                                );
                                const foundFirebase = regionData.sources.firebase.find(
                                  (f) => String(f.id) === String(selectedCase)
                                );
                                const file = foundLocal || foundFirebase;
                                return file ? file.name || "Без Імені" : "Виберіть Випадок";
                              })(),
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

                {/* Кнопки: Додати, Завершити, Відкласти, Скинути */}
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
                    className={styles["reset-button"]}
                    onClick={handleReset}
                    disabled={!selectedCase}
                    aria-label="Скинути Вибір Випадку"
                  >
                    ⟳
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
            {isLoading && <p className={styles["loading-message"]}>Завантаження даних...</p>}
            {errorState && <p className={styles["error-message"]}>{errorState}</p>}

            {!isLoading && !errorState && (
              <div
                className={`${styles["columns"]} ${isMobile ? styles["mobile"] : ""}`}
                ref={columnsRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                {/* Колонка 1 */}
                <div className={styles["column"]}>
                  {/* Прибираємо onMouseEnter/onMouseLeave, щоб унеможливити нескінченний ререндер */}
                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("personalData")}
                  >
                    <h3 className={styles["tile-title"]}>Persönliche Daten</h3>
                    {/* TooltipVisible приберемо повністю або зробимо CSS :hover */}
                    <PersonalData parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("currentAnamnese")}
                  >
                    <h3 className={styles["tile-title"]}>Aktuelle Anamnese</h3>
                    <AktuelleAnamnese parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("reiseImpfstatus")}
                  >
                    <h3 className={styles["tile-title"]}>Reise- та Impfstatus</h3>
                    <ReiseImpfstatus parsedData={parsedData} />
                  </div>
                </div>

                {/* Колонка 2 */}
                <div className={styles["column"]}>
                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("vegetativeAnamnese")}
                  >
                    <h3 className={styles["tile-title"]}>Vegetative Anamnese</h3>
                    <VegetativeAnamnese parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("zusammenfassung")}
                  >
                    <h3 className={styles["tile-title"]}></h3>
                    <Zusammenfassung parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("vorerkrankungen")}
                  >
                    <h3 className={styles["tile-title"]}>Vorerkrankungen</h3>
                    <Vorerkrankungen parsedData={parsedData} />
                  </div>
                </div>

                {/* Колонка 3 */}
                <div className={styles["column"]}>
                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("previousOperations")}
                  >
                    <h3 className={styles["tile-title"]}>Frühere Operationen</h3>
                    <PreviousOperations parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("medications")}
                  >
                    <h3 className={styles["tile-title"]}>Medikamente</h3>
                    <Medications parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("allergiesAndIntolerances")}
                  >
                    <h3 className={styles["tile-title"]}>Unverträglichkeiten</h3>
                    <AllergiesAndIntolerances parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("noxen")}
                  >
                    <h3 className={styles["tile-title"]}>Noxen</h3>
                    <Noxen parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("familienanamnese")}
                  >
                    <h3 className={styles["tile-title"]}>Familiäre Erkrankungen</h3>
                    <Familienanamnese parsedData={parsedData} />
                  </div>
                </div>

                {/* Колонка 4 */}
                <div className={styles["column"]}>
                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("sozialanamnese")}
                  >
                    <h3 className={styles["tile-title"]}>Soziale Anamnese</h3>
                    <Sozialanamnese parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("differentialDiagnosis")}
                  >
                    <h3 className={styles["tile-title"]}>Differentialdiagnose</h3>
                    <DifferentialDiagnosis parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("preliminaryDiagnosis")}
                  >
                    <h3 className={styles["tile-title"]}>Diagnose</h3>
                    <PreliminaryDiagnosis parsedData={parsedData} />
                  </div>

                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("proposedProcedures")}
                  >
                    <h3 className={styles["tile-title"]}>Untersuchungen</h3>
                    <ProposedProcedures parsedData={parsedData} />
                  </div>

                  {/* Examiner / Patient Questions */}
                  <div className={styles["tile"]} onClick={handlePatientQuestionsClick}>
                    <h3 className={styles["tile-title"]}></h3>
                    <PatientQuestions parsedData={parsedData} />
                  </div>
                  <div className={styles["tile"]} onClick={handleExaminerQuestionsClick}>
                    <h3 className={styles["tile-title"]}></h3>
                    <ExaminerQuestions onQuestionClick={handleExaminerQuestionsClick} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Модалка вибору DataSource */}
          <SelectDataSourceModal
            isOpen={parseModal}
            onClose={() => setParseModal(false)}
            filteredSources={[]}
            handleParseData={handleParseData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* Модалка з дод. інформацією */}
          <AdditionalInfoModal
            isOpen={infoModal}
            onClose={() => setInfoModal(false)}
            additionalInfo={additionalInfo}
          />

          {/* Модалка для користувацьких кейсів */}
          <UserCasesModal
            isOpen={userCasesModal}
            onClose={() => setUserCasesModal(false)}
            title="Випадки Користувача"
            userCases={userCasesData}
          />

          <ToastContainer />
        </>
      )}
    </MainLayout>
  );
};

export default FSPFormularPage;