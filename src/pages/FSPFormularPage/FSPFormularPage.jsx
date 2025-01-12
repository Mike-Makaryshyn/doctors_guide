// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./FSPFormularPage.module.scss";
import FSPFormularPageData from "../../constants/translation/FSPFormularPage";

// Components
import PersonalData from "./components/PersonalData";
import AktuelleAnamnese from "./components/AktuelleAnamnese";
import ReiseImpfstatus from "./components/ReiseImpfstatus";
import VegetativeAnamnese from "./components/VegetativeAnamnese";
import Zusammenfassung from "./components/Zusammenfassung";
import Vorerkrankungen from "./components/Vorerkrankungen";
import PreviousOperations from "./components/PreviousOperations";
import Medications from "./components/Medications";
import AllergiesAndIntolerances from "./components/AllergiesAndIntolerances";
import Noxen from "./components/Noxen";
import Familienanamnese from "./components/Familienanamnese";
import Sozialanamnese from "./components/Sozialanamnese";
import DifferentialDiagnosis from "./components/DifferentialDiagnosis";
import PreliminaryDiagnosis from "./components/PreliminaryDiagnosis";
import ProposedProcedures from "./components/ProposedProcedures";
import PatientQuestions from "./components/PatientQuestions";
import ExaminerQuestions from "./components/ExaminerQuestions";

// React Select
import Select from "react-select";

// Utilities and Hooks
import { parseData } from "../../utils/dataParser";
import useIsMobile from "../../hooks/useIsMobile";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { FaCog } from "react-icons/fa";

// Firebase
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Global Hook
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Other data
import FallSpecificData from "../../constants/translation/FallSpecificData";
import { fetchDataFromFirebase } from "../../utils/firebaseUtils";

// Import Modals
import SelectDataSourceModal from "../../components/SelectDataSourceModal";
import AdditionalInfoModal from "./components/AdditionalInfoModal";
import UserCasesModal from "../../components/UserCasesModal";

// Import кастомного хука
import useRegionData from "../../hooks/useRegionData";

const FSPFormularPage = () => {
  const navigate = useNavigate();

  // Extract sourceType and caseId from URL
  const { sourceType: routeSourceType, caseId: routeCaseId } = useParams();

  // Data from DataSourceContext
  const { dataSources, fetchFirebaseCases, getCurrentCases } = useContext(DataSourceContext);

  // Global hook
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

  // Використання кастомного хука
  const isNavigatingWithCaseId = !!routeCaseId;
  const {
    localRegion,
    setLocalRegion,
    sourceType,
    setSourceType,
    loading,
    error,
  } = useRegionData(
    selectedRegion || "",
    routeSourceType || "local",
    handleChangeRegion
  );

  // ---- Local States ----
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
  const [userData, setUserData] = useState(null);

  // Settings Menu
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Handle caseId once
  const [isCaseIdHandled, setIsCaseIdHandled] = useState(false);

  // Dropdown for selecting region
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const toggleRegionDropdown = () => setIsRegionDropdownOpen(!isRegionDropdownOpen);

  const handleRegionSelect = (regionId) => {
    // При зміні регіону через налаштування, не оновлювати глобальний стан
    setLocalRegion(regionId, false);
    setIsRegionDropdownOpen(false);
    setSelectedCase("");
    setParsedData({});
    setFallType("");

    // Якщо sourceType є "firebase", завантажуємо випадки для обраного регіону
    if (sourceType === "firebase") {
      fetchFirebaseCases(regionId);
    }
  };

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
            // Якщо документ користувача ще не створено
            await setDoc(userDocRef, {});
            setUserData({});
          }
        } catch (error) {
          console.error("Error accessing user document:", error);
          toast.error("Failed to retrieve user data.");
          setUserData(null);
        }
      } else {
        // Неавтентифікований користувач
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // ---- Loading Firebase Cases when sourceType or localRegion changes ----
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    const loadFirebaseCases = async () => {
      if (sourceType === "firebase" && localRegion) {
        setIsLoading(true);
        try {
          await fetchFirebaseCases(localRegion);
          console.log(`Firebase cases for region ${localRegion} loaded successfully.`);
        } catch (e) {
          console.error("Error loading from Firebase:", e);
          setErrorState("Failed to fetch data from Firebase.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadFirebaseCases();
  }, [sourceType, localRegion, fetchFirebaseCases]);

  // ---- If user navigated via URL with caseId (and is authenticated), search for this case ----
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (user && routeCaseId && !isCaseIdHandled) {
        // Пошук regionId, який містить caseId в локальних або Firebase випадках
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region]?.files?.some(
            (file) => String(file.id) === String(routeCaseId)
          )
        );

        if (regionId) {
          setLocalRegion(regionId, false); // Не оновлюємо глобальний стан
          // Ми не встановлюємо selectedCase тут, чекаємо, поки dataSources будуть оновлені
        } else {
          setSelectedCase("");
          setIsCaseIdHandled(true);
        }
      }
    };

    fetchSelectedCase();
  }, [dataSources, user, routeCaseId, isCaseIdHandled, sourceType, fetchFirebaseCases]);

  useEffect(() => {
    if (user && routeCaseId && !isCaseIdHandled) {
      const regionId = Object.keys(dataSources).find((region) =>
        dataSources[region]?.files?.some(
          (file) => String(file.id) === String(routeCaseId)
        )
      );

      if (regionId && dataSources[regionId]?.files?.some(file => String(file.id) === String(routeCaseId))) {
        setSelectedCase(routeCaseId);
        setIsCaseIdHandled(true);
      }
    }
  }, [dataSources, user, routeCaseId, isCaseIdHandled]);

  // ---- Saving selectedCase to Firestore when it changes ----
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
          console.error("Error saving case:", error);
          toast.error("Failed to save case.");
        }
      } else if (!selectedCase && localRegion) { // Виправлено з regionKey на localRegion
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, { [`selectedCase_${localRegion}`]: "" });
        } catch (error) {
          console.error("Error clearing case:", error);
          toast.error("Failed to clear case.");
        }
      }
    };

    saveSelectedCase();
  }, [selectedCase, localRegion, user, dataSources]);

  // ---- Checking if localRegion exists in dataSources ----
  useEffect(() => {
    if (localRegion && !dataSources[localRegion]) {
      console.warn(`localRegion "${localRegion}" не знайдено у dataSources`);
    }
  }, [localRegion, dataSources]);

  // ---- Horizontal scroll on mobile ----
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
   * handleParseData: Loads or parses a case (depending on dataSourceType).
   * Avoids duplicate calls if the object hasn't changed.
   */
  const handleParseData = useCallback(
    async (sourceId, fileId) => {
      setIsLoading(true);
      setErrorState(null);

      try {
        const source = dataSources[sourceId];
        if (!source) {
          throw new Error(`Source with id ${sourceId} not found.`);
        }

        let data = [];
        if (sourceType === "local" && source.sources?.local) {
          data = await parseData(sourceId, "local", null, fileId, dataSources);
        } else if (sourceType === "firebase" && source.sources?.firebase) {
          data = source.sources.firebase.map((firebaseFile) => ({
            ...firebaseFile, // Залишаємо всі ключі без змін
            fileDisplayName: firebaseFile.fullName || "Без Імені", // Для відображення у випадаючому списку
            specialty: firebaseFile.specialty || "",
            summary: firebaseFile.summary || "",
            examinerQuestions: firebaseFile.examinerQuestions || "",
            patientQuestions: firebaseFile.patientQuestions || "",
            // Додайте інші необхідні поля
          }));
        } else {
          throw new Error("Invalid data source type");
        }

        const selectedItem =
          data.find((item) => String(item.id) === String(fileId)) || {};

        console.log("Selected Item:", selectedItem);

        // Update parsedData only if the object has actually changed
        setParsedData((prevData) => {
          const prevString = JSON.stringify(prevData);
          const newString = JSON.stringify(selectedItem);
          return prevString !== newString ? selectedItem : prevData;
        });

        // If there's a specialty – save it for FallSpecificData
        if (selectedItem.specialty) {
          setFallType(selectedItem.specialty.toLowerCase());
        } else {
          setFallType("");
        }

        // If there are other fields (summary, examinerQuestions, patientQuestions)
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
        console.error("Error during data parsing:", err);
        setErrorState("An error occurred while loading data.");
        toast.error("An error occurred while loading data.");
      } finally {
        setIsLoading(false);
      }
    },
    [sourceType, dataSources]
  );
  useEffect(() => {
    if (localRegion && selectedCase && dataSources[localRegion]) {
      const timeout = setTimeout(() => {
        handleParseData(localRegion, selectedCase);
      }, 500); // Затримка 500 мс для синхронізації даних
      return () => clearTimeout(timeout);
    }
  }, [localRegion, selectedCase, sourceType, dataSources, handleParseData]);
  // Call handleParseData when localRegion / selectedCase / sourceType changes
  useEffect(() => {
    if (localRegion && selectedCase && dataSources[localRegion]) {
      handleParseData(localRegion, selectedCase);
    } else if (!dataSources[localRegion]) {
      console.warn(`Дані для регіону ${localRegion} ще не завантажені.`);
    }
  }, [localRegion, selectedCase, sourceType, dataSources, handleParseData]);

  // ---- Open additional info modal ----
  const handleOpenInfoModal = (type) => {
    if (isLoading) {
      toast.info("Data is still loading. Please wait.");
      return;
    }

    let infoText = "";
    if (type === "zusammenfassung") {
      infoText =
        parsedData.summary ||
        FSPFormularPageData.modal.additionalInfo.defaultSummary ||
        "Summary not available.";
    } else if (type === "examinerQuestions") {
      infoText =
        parsedData.examinerQuestions ||
        FSPFormularPageData.modal.additionalInfo.defaultExaminerQuestions ||
        "Additional information for examiner questions is unavailable.";
    } else if (type === "patientQuestions") {
      infoText =
        parsedData.patientQuestions ||
        FSPFormularPageData.modal.additionalInfo.defaultPatientQuestions ||
        "Additional information for patient questions is unavailable.";
    } else if (fallType && FallSpecificData[fallType]?.[type]?.additionalInfo) {
      infoText = FallSpecificData[fallType][type].additionalInfo;
    } else if (FSPFormularPageData[type]?.additionalInfo) {
      infoText = FSPFormularPageData[type].additionalInfo;
    } else {
      infoText = "Additional information is unavailable.";
    }

    if (!infoText.trim()) {
      infoText = "Information is unavailable.";
    }

    // Add title if needed
    const newInfo = {
      text: infoText,
      type,
      title:
        type === "zusammenfassung"
          ? ""
          : type === "examinerQuestions"
          ? ""
          : type === "patientQuestions"
          ? ""
          : "",
    };
    setAdditionalInfo(newInfo);
  };

  // Open the modal as soon as additional text appears
  useEffect(() => {
    if (additionalInfo.text) {
      setInfoModal(true);
    }
  }, [additionalInfo]);
  useEffect(() => {
    if (!selectedCase || Object.keys(parsedData).length === 0) {
      console.warn("Дані для вибраного випадку ще не завантажені.");
    } else {
      console.log("Дані для вибраного випадку успішно завантажені:", parsedData);
    }
  }, [selectedCase, parsedData]);
  // ---- Change case in Select ----
  const handleCaseChange = (option) => {
    setSelectedCase(option.value);
    setParsedData({});
  };

  // ---- Open user cases modal (optional) ----
  const handleOpenUserCasesModal = async (sourceId, fileId) => {
    const source = dataSources[sourceId];
    if (!source.type || source.type !== "firebase") return;

    try {
      const data = await fetchDataFromFirebase(source.collection, fileId);
      setUserCasesData(data);
      setUserCasesModal(true);
    } catch (error) {
      console.error("Error loading data from Firebase:", error);
      setErrorState("An error occurred while loading data from Firebase.");
      toast.error("An error occurred while loading data from Firebase.");
    }
  };

  // ---- Mark case as completed ----
  const handleMarkAsCompleted = async () => {
    if (!user) {
      toast.error("User is not authenticated.");
      return;
    }
    if (!localRegion || !selectedCase) {
      toast.error("Please select a case and a region.");
      return;
    }
    const userDocRef = doc(db, "users", user.uid);
    try {
      const completedCasesKey = `completedCases_${localRegion}`;
      const deferredCasesKey = `deferredCases_${localRegion}`;
      const isCompleted = userData?.[completedCasesKey]?.includes(String(selectedCase));

      if (isCompleted) {
        // Видалити з completedCases
        await updateDoc(userDocRef, {
          [completedCasesKey]: arrayRemove(String(selectedCase)),
        });
        setUserData((prev) => ({
          ...prev,
          [completedCasesKey]: prev[completedCasesKey].filter((id) => id !== String(selectedCase)),
        }));
        toast.success("Статус виконано видалено.");
      } else {
        // Додати до completedCases і видалити з deferredCases (якщо є)
        await updateDoc(userDocRef, {
          [completedCasesKey]: arrayUnion(String(selectedCase)),
          [deferredCasesKey]: arrayRemove(String(selectedCase)),
        });
        setUserData((prev) => ({
          ...prev,
          [completedCasesKey]: [...(prev[completedCasesKey] || []), String(selectedCase)],
          [deferredCasesKey]: prev[deferredCasesKey]?.filter((id) => id !== String(selectedCase)),
        }));
        toast.success("Статус виконано додано.");
      }
    } catch (error) {
      console.error("Error marking case as completed:", error);
      toast.error("Failed to mark case as completed.");
    }
  };

  // ---- Defer case for later ----
  const handleDeferCase = async () => {
    if (!user) {
      toast.error("User is not authenticated.");
      return;
    }
    if (!localRegion || !selectedCase) {
      toast.error("Please select a case and a region.");
      return;
    }
    const userDocRef = doc(db, "users", user.uid);
    try {
      const deferredCasesKey = `deferredCases_${localRegion}`;
      const completedCasesKey = `completedCases_${localRegion}`;
      const isDeferred = userData?.[deferredCasesKey]?.includes(String(selectedCase));

      if (isDeferred) {
        // Видалити з deferredCases
        await updateDoc(userDocRef, {
          [deferredCasesKey]: arrayRemove(String(selectedCase)),
        });
        setUserData((prev) => ({
          ...prev,
          [deferredCasesKey]: prev[deferredCasesKey].filter((id) => id !== String(selectedCase)),
        }));
        toast.success("Статус відкладено видалено.");
      } else {
        // Додати до deferredCases і видалити з completedCases (якщо є)
        await updateDoc(userDocRef, {
          [deferredCasesKey]: arrayUnion(String(selectedCase)),
          [completedCasesKey]: arrayRemove(String(selectedCase)),
        });
        setUserData((prev) => ({
          ...prev,
          [deferredCasesKey]: [...(prev[deferredCasesKey] || []), String(selectedCase)],
          [completedCasesKey]: prev[completedCasesKey]?.filter((id) => id !== String(selectedCase)),
        }));
        toast.success("Статус відкладено додано.");
      }
    } catch (error) {
      console.error("Error deferring case:", error);
      toast.error("Failed to defer case.");
    }
  };

  // ---- Reset case selection ----
  const handleReset = () => {
    setSelectedCase("");
    setParsedData({});
    setFallType("");
  };

  // Cog button settings: open when changing page (optional)
  useEffect(() => {
    setIsSettingsOpen(!!currentPage);
  }, [currentPage]);

  // Close settings menu when clicking outside
  const settingsRefSettings = useRef(null);
  const settingsButtonRefSettings = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRefSettings.current &&
        !settingsRefSettings.current.contains(event.target) &&
        !settingsButtonRefSettings.current.contains(event.target)
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

  // Prepare case list for Select
  const getCaseOptions = () => {
    if (!localRegion || !dataSources[localRegion]?.files) {
      console.log("Файли для локального регіону відсутні:", localRegion);
      return [];
    }

    console.log("Файли для локального регіону:", dataSources[localRegion].files);

    return dataSources[localRegion].files
      .filter((file) => file.id) // Додано фільтр наявності id
      .map(createCaseOption);
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

  // Styles for React Select
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

  // Logging for debugging
  useEffect(() => {
    console.log("DataSources updated:", dataSources);
  }, [dataSources]);
  
  useEffect(() => {
    console.log("Selected Case:", selectedCase);
    console.log("Parsed Data:", parsedData);
  }, [selectedCase, parsedData]);
  useEffect(() => {
    if (selectedCase && localRegion && dataSources[localRegion]) {
      const caseExists = dataSources[localRegion]?.files?.some(
        (file) => String(file.id) === String(selectedCase)
      );
      if (!caseExists) {
        console.warn(`Випадок ${selectedCase} не знайдено в регіоні ${localRegion}`);
      }
    }
  }, [selectedCase, localRegion, dataSources]);
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
          {/* Settings Button */}
          <button
            className={styles["settings-button"]}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            ref={settingsButtonRefSettings}
            aria-label="Відкрити Налаштування"
            aria-expanded={isSettingsOpen}
            aria-controls="settings-modal"
          >
            <FaCog />
          </button>

          {isSettingsOpen && (
            <div className={styles["settings-modal"]} ref={settingsRefSettings}>
              <div className={styles["settings-content"]}>
                <h3>Налаштування</h3>

                {/* Data Source Toggle */}
                <div className={styles["field"]}>
                  <label>Виберіть Джерело Даних:</label>
                  <div className={styles["data-source-toggle"]}>
                    <span
                      className={`${styles["label-left"]} ${
                        sourceType === "local" ? styles["label-active"] : ""
                      }`}
                    >
                      Локально
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
                      Firebase
                    </span>
                  </div>
                </div>

                {/* Region Selector */}
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

                {/* Case Selector */}
                <div className={styles["field"]}>
                  <label htmlFor="case-select">Виберіть Випадок:</label>
                  <select
                    id="case-select"
                    className={styles["case-select"]}
                    onChange={(e) => setSelectedCase(e.target.value)}
                    value={selectedCase || ""}
                  >
                    <option value="">-- Виберіть Випадок --</option>
                    {sourceType === "local" &&
                      dataSources[localRegion]?.sources?.local.map((file) => (
                        <option key={file.id} value={file.id}>
                          {file.fileDisplayName || file.name || "Без Імені"}
                        </option>
                      ))}
                    {sourceType === "firebase" &&
                      dataSources[localRegion]?.sources?.firebase.map((file) => (
                        <option key={file.id} value={file.id}>
                          {file.fileDisplayName || file.name || "Без Імені"}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Buttons: Add, Complete, Defer, Reset */}
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
                    className={`${styles["mark-completed-button"]} ${
                      userData?.[`completedCases_${localRegion}`]?.includes(String(selectedCase))
                        ? styles["active"]
                        : ""
                    }`}
                    onClick={handleMarkAsCompleted}
                    disabled={!selectedCase}
                    aria-pressed={userData?.[`completedCases_${localRegion}`]?.includes(String(selectedCase))}
                    aria-label="Позначити Випадок як Завершений"
                  >
                    ✓
                  </button>

                  <button
                    className={`${styles["defer-case-button"]} ${
                      userData?.[`deferredCases_${localRegion}`]?.includes(String(selectedCase))
                        ? styles["active"]
                        : ""
                    }`}
                    onClick={handleDeferCase}
                    disabled={!selectedCase}
                    aria-pressed={userData?.[`deferredCases_${localRegion}`]?.includes(String(selectedCase))}
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

                {/* Close Button */}
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

          {/* Main Content */}
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
                {/* Column 1 */}
                <div className={styles["column"]}>
                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("personalData")}
                  >
                    <h3 className={styles["tile-title"]}>Persönliche Daten</h3>
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

                {/* Column 2 */}
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

                {/* Column 3 */}
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

                {/* Column 4 */}
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

                  {/* Examiner & Patient Questions */}
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

          {/* DataSource Selection Modal */}
          <SelectDataSourceModal
            isOpen={parseModal}
            onClose={() => setParseModal(false)}
            filteredSources={Object.values(dataSources).filter(
              (source) => source.region === localRegion && source.files
            )}
            handleParseData={handleParseData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* Additional Info Modal */}
          <AdditionalInfoModal
            isOpen={infoModal}
            onClose={() => setInfoModal(false)}
            additionalInfo={additionalInfo}
          />

          {/* User Cases Modal */}
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