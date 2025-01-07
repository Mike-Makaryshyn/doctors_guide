// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./FSPFormularPage.module.scss";
import FSPFormularPageData from "../../constants/translation/FSPFormularPage";

// Components
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

// Utilities and Hooks
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

// If you have a global hook
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Other data
import FallSpecificData from "../../constants/translation/FallSpecificData";
import { fetchDataFromFirebase } from "../../utils/firebaseUtils";

const FSPFormularPage = () => {
  const navigate = useNavigate();

  // Global hook (if needed)
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

  // Data from DataSourceContext
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);

  // ---- Local States ----
  const [parseModal, setParseModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [userCasesModal, setUserCasesModal] = useState(false);
  const [parsedData, setParsedData] = useState({});
  // Assume tooltipVisible is only for showing tooltip, disable hover logic
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState({ text: "", type: "" });
  const [selectedCase, setSelectedCase] = useState("");
  const [userCasesData, setUserCasesData] = useState([]);
  const [fallType, setFallType] = useState("");
  const [userData, setUserData] = useState(null);

  // Settings Menu
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Extract caseId from URL (if /fsp-formular/:caseId)
  const { caseId } = useParams();

  // Local region state
  const [localRegion, setLocalRegion] = useState(selectedRegion || "");

  // Handle caseId once
  const [isCaseIdHandled, setIsCaseIdHandled] = useState(false);

  // Toggle between local and firebase data
  const [dataSourceType, setDataSourceType] = useState("local");

  // Dropdown for selecting region
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const toggleRegionDropdown = () => setIsRegionDropdownOpen(!isRegionDropdownOpen);

  const handleRegionSelect = (regionId) => {
    setLocalRegion(regionId);
    setIsRegionDropdownOpen(false);
    setSelectedCase("");
    setParsedData({});
    setFallType("");

    // If dataSourceType is Firebase, fetch cases for the selected region
    if (dataSourceType === "firebase") {
      fetchFirebaseCases(regionId);
    }
  };

  // If global selectedRegion changes
  useEffect(() => {
    if (!caseId && !isCaseIdHandled) {
      setLocalRegion(selectedRegion || "");

      // If dataSourceType is Firebase, fetch cases for the selected region
      if (dataSourceType === "firebase" && selectedRegion) {
        fetchFirebaseCases(selectedRegion);
      }
    }
  }, [selectedRegion, caseId, isCaseIdHandled, dataSourceType, fetchFirebaseCases]);

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
            // If the user document hasn't been created yet
            await setDoc(userDocRef, {});
            setUserData({});
          }
        } catch (error) {
          console.error("Error accessing user document:", error);
          toast.error("Failed to retrieve user data.");
          setUserData(null);
        }
      } else {
        // Unauthenticated user
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // ---- Loading Firebase Cases when dataSourceType or localRegion changes ----
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    const loadFirebaseCases = async () => {
      if (dataSourceType === "firebase" && localRegion) {
        setIsLoading(true);
        try {
          await fetchFirebaseCases(localRegion);
        } catch (e) {
          console.error("Error loading from Firebase:", e);
          setErrorState("Failed to fetch data from Firebase.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadFirebaseCases();
  }, [dataSourceType, localRegion, fetchFirebaseCases]);

  // ---- If user navigated via URL with caseId (and is authenticated), search for this case ----
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (user && caseId && !isCaseIdHandled) {
        // Search which region contains a case with such an id
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
        // Load from Firestore if the user has a saved selectedCase
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
              // If the URL also has a valid caseId
              setSelectedCase(caseId);
            } else if (savedCase) {
              // If there's a saved case in Firestore
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
            // If the user document doesn't exist
            await setDoc(userDocRef, {});
            setSelectedCase("");
            setUserData({});
          }
        } catch (error) {
          console.error("Error loading selectedCase:", error);
          toast.error("Failed to load selected case.");
          setSelectedCase("");
          setUserData(null);
        }
      } else if (caseId && !isCaseIdHandled) {
        // If the user is unauthenticated but has ?caseId
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
      } else if (!selectedCase && regionKey) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, { [`selectedCase_${regionKey}`]: "" });
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
      console.warn(`localRegion "${localRegion}" not found in dataSources`);
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
        if (dataSourceType === "local" && source.sources?.local) {
          data = await parseData(sourceId, "local", null, fileId, dataSources);
        } else if (dataSourceType === "firebase" && source.sources?.firebase) {
          data = source.sources.firebase;
        } else {
          throw new Error("Invalid data source type");
        }

        const selectedItem =
          data.find((item) => String(item.id) === String(fileId)) || {};

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
    [dataSourceType, dataSources]
  );

  // Call handleParseData when localRegion / selectedCase / dataSourceType changes
  useEffect(() => {
    if (localRegion && selectedCase) {
      handleParseData(localRegion, selectedCase);
    } else {
      setParsedData({});
    }
  }, [localRegion, selectedCase, dataSourceType, handleParseData]);

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
          : type === ""
          ? ""
          : type === ""
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
        toast.success("Case marked as completed!");
      } else {
        toast.info("Case is already marked as completed.");
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
      await updateDoc(userDocRef, {
        [`deferredCases_${localRegion}`]: arrayUnion(String(selectedCase)),
      });
      setUserData((prev) => ({
        ...prev,
        [`deferredCases_${localRegion}`]: prev[`deferredCases_${localRegion}`]
          ? [...prev[`deferredCases_${localRegion}`], String(selectedCase)]
          : [String(selectedCase)],
      }));
      toast.success("Case deferred for later!");
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

  // Prepare case list for Select
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

                {/* Data Source Toggle */}
                <div className={styles["field"]}>
                  <label>Виберіть Джерело Даних:</label>
                  <div className={styles["data-source-toggle"]}>
                    <span
                      className={`${styles["label-left"]} ${
                        dataSourceType === "local" ? styles["label-active"] : ""
                      }`}
                    >
                      Local
                    </span>
                    <label className={styles["switch"]}>
                      <input
                        type="checkbox"
                        checked={dataSourceType === "firebase"}
                        onChange={() =>
                          setDataSourceType((prev) => (prev === "local" ? "firebase" : "local"))
                        }
                        aria-label="Перемикач для вибору джерела даних"
                      />
                      <span className={styles["slider"]}></span>
                    </label>
                    <span
                      className={`${styles["label-right"]} ${
                        dataSourceType === "firebase" ? styles["label-active"] : ""
                      }`}
                    >
                      Online
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
    {dataSourceType === "local" &&
      dataSources[localRegion]?.sources?.local.map((file) => (
        <option key={file.id} value={file.id}>
          {file.fileDisplayName || file.name || "Без Імені"}
        </option>
      ))}
    {dataSourceType === "firebase" &&
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
                    {/* Removed onMouseEnter/onMouseLeave to prevent infinite re-renders */}
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

          {/* DataSource Selection Modal */}
          <SelectDataSourceModal
            isOpen={parseModal}
            onClose={() => setParseModal(false)}
            filteredSources={[]} // Можливо, слід оновити відповідно до логіки
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