// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from "react";
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
import { FaCheck, FaPause, FaCog, FaPlus, FaSync, FaPlay } from "react-icons/fa";
import { previewFSPPDF, downloadFSPPDF } from "./pdfFSPFormular"; // <-- Імпорт
import { FaPrint, FaDownload, FaFilePdf } from "react-icons/fa";
import { supabase } from "../../supabaseClient";

// Toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Global Hook
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Other data
import FallSpecificData from "../../constants/translation/FallSpecificData";
import { fetchDataFromSupabase } from "../../utils/firebaseUtils";

// Import Modals
import SelectDataSourceModal from "../../components/SelectDataSourceModal";
import AdditionalInfoModal from "./components/AdditionalInfoModal";
import UserCasesModal from "../../components/UserCasesModal";
import AuthModal from "../AuthPage/AuthModal";

// Import кастомного хука
import useRegionData from "../../hooks/useRegionData";

const FSPFormularPage = () => {
  const navigate = useNavigate();

  // Extract sourceType and caseId from URL
  const { sourceType: routeSourceType, caseId: routeCaseId } = useParams();

  // Data from DataSourceContext
  const { dataSources, fetchSupabaseCases } = useContext(DataSourceContext);

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

  // Custom Hook für Region und sourceType
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

  // ---- Lokale States ----
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
  // Auth modal visibility
  const [showAuthModal, setShowAuthModal] = useState(false);
  // Track if supabase cases have been loaded once
  const [hasLoadedSupabase, setHasLoadedSupabase] = useState(false);
  // Track local cases for local mode
  const [localCases, setLocalCases] = useState([]);

  // Load Supabase cases only once when switching to online mode
  useEffect(() => {
    if (sourceType === "supabase" && localRegion && !hasLoadedSupabase) {
      fetchSupabaseCases(localRegion);
      setHasLoadedSupabase(true);
    }
  }, [sourceType, localRegion, fetchSupabaseCases, hasLoadedSupabase]);

  // Update local cases immediately when in local mode
  useEffect(() => {
    if (sourceType === "local" && localRegion) {
      setLocalCases(dataSources[localRegion]?.sources?.local || []);
    }
  }, [sourceType, localRegion, dataSources]);

  // Helper: show AuthModal if guest tries to interact
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true; // block the interaction
    }
    return false;
  };

  // Settings Menu
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Handle caseId once
  const [isCaseIdHandled, setIsCaseIdHandled] = useState(false);

  // Region auswählen
  const handleRegionSelect = (regionId) => {
    if (requireAuth()) return;
    setLocalRegion(regionId, false);
    setSelectedCase("");
    setParsedData({});
    setFallType("");
    setHasLoadedSupabase(false);
    if (sourceType === "supabase") {
      fetchSupabaseCases(regionId);
      setHasLoadedSupabase(true);
    }
  };

  // ---- Ensure initial region is respected on mount ----
  useEffect(() => {
    if (!localRegion) {
      setLocalRegion(selectedRegion || (routeSourceType === "local" ? "Berlin" : selectedRegion));
    }
    // eslint-disable-next-line
  }, []);

  // ---- Auth-Überwachung ----
  useEffect(() => {
    const loadUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error getting user:", error);
        setUserData(null);
        return;
      }
      setUserData(user.user_metadata || {});
      // Initialize metadata if needed
      if (!user.user_metadata) {
        await supabase.auth.updateUser({ data: {} });
      }
    };
    loadUserData();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      loadUserData();
    });
    return () => subscription.unsubscribe();
  }, []);

  // ---- Loading flag and error state ----
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

  // Load Supabase cases only once, when switching to online mode
  useEffect(() => {
    if (sourceType === "supabase" && localRegion && !hasLoadedSupabase) {
      fetchSupabaseCases(localRegion);
      setHasLoadedSupabase(true);
    }
  }, [sourceType, localRegion, fetchSupabaseCases, hasLoadedSupabase]);

  // Load local cases immediately when in local mode
  useEffect(() => {
    if (sourceType === "local" && localRegion) {
      setLocalCases(dataSources[localRegion]?.sources?.local || []);
    }
  }, [sourceType, localRegion, dataSources]);

  // ---- URL: caseId -> Fall suchen ----
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (user && routeCaseId && !isCaseIdHandled) {
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region]?.files?.some(
            (file) => String(file.id) === String(routeCaseId)
          )
        );

        if (regionId) {
          setLocalRegion(regionId, false);
        } else {
          setSelectedCase("");
          setIsCaseIdHandled(true);
        }
      }
    };

    fetchSelectedCase();
  }, [
    dataSources,
    user,
    routeCaseId,
    isCaseIdHandled,
    sourceType,
    fetchSupabaseCases,
    setLocalRegion,
  ]);

  useEffect(() => {
    if (user && routeCaseId && !isCaseIdHandled) {
      const regionId = Object.keys(dataSources).find((region) =>
        dataSources[region]?.files?.some(
          (file) => String(file.id) === String(routeCaseId)
        )
      );

      if (
        regionId &&
        dataSources[regionId]?.files?.some(
          (file) => String(file.id) === String(routeCaseId)
        )
      ) {
        setSelectedCase(routeCaseId);
        setIsCaseIdHandled(true);
      }
    }
  }, [dataSources, user, routeCaseId, isCaseIdHandled, fetchSupabaseCases]);

  // ---- Speichere ausgewählten Fall in Supabase ----
  useEffect(() => {
    const saveSelectedCase = async () => {
      if (!userData || !userData.id || !localRegion) return;
      const key = `selectedCase_${localRegion}`;
      const value = selectedCase || "";
      await supabase.auth.updateUser({
        data: { [key]: value }
      });
    };
    saveSelectedCase();
  }, [selectedCase, localRegion, userData]);
  const handlePrintPreview = () => {
    if (requireAuth()) return;
    if (!parsedData || Object.keys(parsedData).length === 0) {
      alert("Daten fehlen oder sind noch nicht geladen!");
      return;
    }
    // передаємо localRegion другим аргументом
    previewFSPPDF(parsedData, localRegion);
  };

  const handlePrintDownload = () => {
    if (requireAuth()) return;
    if (!parsedData || Object.keys(parsedData).length === 0) {
      alert("Daten fehlen oder sind noch nicht geladen!");
      return;
    }
    // те саме при завантаженні
    downloadFSPPDF(parsedData, localRegion);
  };
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

  // ---- Daten parsen/auswählen ----
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
        } else if (sourceType === "supabase" && source.sources?.supabase) {
          data = source.sources.supabase.map((supabaseFile) => ({
            ...supabaseFile,
            fileDisplayName: supabaseFile.fullName || "Без Імені",
            specialty: supabaseFile.specialty || "",
            summary: supabaseFile.summary || "",
            examinerQuestions: supabaseFile.examinerQuestions || "",
            patientQuestions: supabaseFile.patientQuestions || "",
          }));
        } else {
          throw new Error("Invalid data source type");
        }

        const selectedItem =
          data.find((item) => String(item.id) === String(fileId)) || {};

        console.log("Selected Item:", selectedItem);

        setParsedData((prevData) => {
          const prevString = JSON.stringify(prevData);
          const newString = JSON.stringify(selectedItem);
          return prevString !== newString ? selectedItem : prevData;
        });

        if (selectedItem.specialty) {
          setFallType(selectedItem.specialty.toLowerCase());
        } else {
          setFallType("");
        }

        if (selectedItem.summary) {
          setParsedData((prev) => ({
            ...prev,
            summary: selectedItem.summary,
          }));
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
    [sourceType, dataSources, parseData]
  );

  useEffect(() => {
    if (localRegion && selectedCase && dataSources[localRegion]) {
      const timeout = setTimeout(() => {
        handleParseData(localRegion, selectedCase);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [localRegion, selectedCase, sourceType, dataSources, handleParseData]);

  useEffect(() => {
    if (localRegion && selectedCase && dataSources[localRegion]) {
      handleParseData(localRegion, selectedCase);
    } else if (!dataSources[localRegion]) {
      console.warn(`Daten für Region ${localRegion} sind noch nicht geladen.`);
    }
  }, [localRegion, selectedCase, sourceType, dataSources, handleParseData]);

  // ---- InfoModal öffnen ----
  const handleOpenInfoModal = (type) => {
    if (requireAuth()) return;
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

  useEffect(() => {
    if (additionalInfo.text) {
      setInfoModal(true);
    }
  }, [additionalInfo]);

  // ---- Konsolenwarnung, wenn kein Fall gewählt ----
  useEffect(() => {
    if (!selectedCase || Object.keys(parsedData).length === 0) {
      console.warn("Daten für den ausgewählten Fall sind noch nicht geladen.");
    } else {
      console.log(
        "Daten für den ausgewählten Fall erfolgreich geladen:",
        parsedData
      );
    }
  }, [selectedCase, parsedData]);

  // ---- Case Select (Dropdown) ändern ----
  const handleCaseChange = (option) => {
    setSelectedCase(option.value);
    setParsedData({});
  };

  // ---- User Cases Modal öffnen (optional) ----
  const handleOpenUserCasesModal = async (sourceId, fileId) => {
    const source = dataSources[sourceId];
    if (!source.type || source.type !== "supabase") return;

    try {
      const data = await fetchDataFromSupabase(sourceId, fileId);
      setUserCasesData(data);
      setUserCasesModal(true);
    } catch (error) {
      console.error("Error loading data from Supabase:", error);
      setErrorState("An error occurred while loading data from Supabase.");
      toast.error("An error occurred while loading data from Supabase.");
    }
  };

  // ---- Fall als erledigt markieren ----
  const handleMarkAsCompleted = async () => {
    if (requireAuth()) return;
    if (!localRegion || !selectedCase) {
      toast.error("Please select a case and a region.");
      return;
    }
    try {
      const completedCasesKey = `completedCases_${localRegion}`;
      const deferredCasesKey = `deferredCases_${localRegion}`;
      const isCompleted = userData?.[completedCasesKey]?.includes(
        String(selectedCase)
      );

      let newCompletedArray = Array.isArray(userData?.[completedCasesKey])
        ? [...userData[completedCasesKey]]
        : [];
      let newDeferredArray = Array.isArray(userData?.[deferredCasesKey])
        ? [...userData[deferredCasesKey]]
        : [];

      if (isCompleted) {
        newCompletedArray = newCompletedArray.filter(
          (id) => id !== String(selectedCase)
        );
        await supabase.auth.updateUser({
          data: {
            [completedCasesKey]: newCompletedArray,
            [deferredCasesKey]: newDeferredArray
          }
        });
        setUserData((prev) => ({
          ...prev,
          [completedCasesKey]: newCompletedArray,
        }));
        toast.success("Status 'erledigt' entfernt.");
      } else {
        if (!newCompletedArray.includes(String(selectedCase))) {
          newCompletedArray.push(String(selectedCase));
        }
        newDeferredArray = newDeferredArray.filter(
          (id) => id !== String(selectedCase)
        );
        await supabase.auth.updateUser({
          data: {
            [completedCasesKey]: newCompletedArray,
            [deferredCasesKey]: newDeferredArray
          }
        });
        setUserData((prev) => ({
          ...prev,
          [completedCasesKey]: newCompletedArray,
          [deferredCasesKey]: newDeferredArray,
        }));
        toast.success("Status 'erledigt' hinzugefügt.");
      }
    } catch (error) {
      console.error("Error marking case as completed:", error);
      toast.error("Failed to mark case as completed.");
    }
  };

  // ---- Fall verschieben ----
  const handleDeferCase = async () => {
    if (requireAuth()) return;
    if (!localRegion || !selectedCase) {
      toast.error("Please select a case and a region.");
      return;
    }
    try {
      const deferredCasesKey = `deferredCases_${localRegion}`;
      const completedCasesKey = `completedCases_${localRegion}`;
      const isDeferred = userData?.[deferredCasesKey]?.includes(
        String(selectedCase)
      );

      let newDeferredArray = Array.isArray(userData?.[deferredCasesKey])
        ? [...userData[deferredCasesKey]]
        : [];
      let newCompletedArray = Array.isArray(userData?.[completedCasesKey])
        ? [...userData[completedCasesKey]]
        : [];

      if (isDeferred) {
        newDeferredArray = newDeferredArray.filter(
          (id) => id !== String(selectedCase)
        );
        await supabase.auth.updateUser({
          data: {
            [completedCasesKey]: newCompletedArray,
            [deferredCasesKey]: newDeferredArray
          }
        });
        setUserData((prev) => ({
          ...prev,
          [deferredCasesKey]: newDeferredArray,
        }));
        toast.success("Status 'verschoben' entfernt.");
      } else {
        if (!newDeferredArray.includes(String(selectedCase))) {
          newDeferredArray.push(String(selectedCase));
        }
        newCompletedArray = newCompletedArray.filter(
          (id) => id !== String(selectedCase)
        );
        await supabase.auth.updateUser({
          data: {
            [completedCasesKey]: newCompletedArray,
            [deferredCasesKey]: newDeferredArray
          }
        });
        setUserData((prev) => ({
          ...prev,
          [deferredCasesKey]: newDeferredArray,
          [completedCasesKey]: newCompletedArray,
        }));
        toast.success("Status 'verschoben' hinzugefügt.");
      }
    } catch (error) {
      console.error("Error deferring case:", error);
      toast.error("Failed to defer case.");
    }
  };

  // ---- Auswahl zurücksetzen ----
  const handleReset = () => {
    if (requireAuth()) return;
    setSelectedCase("");
    setParsedData({});
    setFallType("");
  };

  // ---- Einstellungen automatisch öffnen (optional) ----
  useEffect(() => {
    setIsSettingsOpen(!!currentPage);
  }, [currentPage]);

  // ---- Einstellungen schließen bei Klick außerhalb ----
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

  // ---- Fragen / Patientenfragen ----
  const handleExaminerQuestionsClick = () => {
    handleOpenInfoModal("examinerQuestions");
  };
  const handlePatientQuestionsClick = () => {
    handleOpenInfoModal("patientQuestions");
  };

  // ---- Logging / Debug ----
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
        console.warn(
          `Fall ${selectedCase} wurde in Region ${localRegion} nicht gefunden.`
        );
      }
    }
  }, [selectedCase, localRegion, dataSources]);

  // ---- Симуляція: функція ----
  const handleStartSimulation = () => {
    if (requireAuth()) return;
    if (!parsedData || Object.keys(parsedData).length === 0) {
      toast.error("Дані не завантажені!");
      return;
    }
    // Зберегти в localStorage
    localStorage.setItem("simulation_case_data", JSON.stringify(parsedData));
    // Перейти на сторінку симуляції
    navigate(`/case-simulation/${selectedCase}`);
  };

  return (
    <MainLayout>
      <>
          {/* Back Button */}
   

          {/* Settings Button */}
          <button
            className={styles["settings-button"]}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            ref={settingsButtonRefSettings}
            aria-label="Einstellungen öffnen"
            aria-expanded={isSettingsOpen}
            aria-controls="settings-modal"
          >
            <FaCog />
          </button>

          {isSettingsOpen && (
            <div className={styles["settings-modal"]} ref={settingsRefSettings}>
              <div className={styles["settings-content"]}>
                <h3>Einstellungen</h3>

                {/* Data Source Toggle */}
                <div className={styles["field"]}>
                  <label>Datenquelle wählen:</label>
                  <div className={styles["data-source-toggle"]}>
                    <span
                      className={`${styles["label-left"]} ${
                        sourceType === "local" ? styles["label-active"] : ""
                      }`}
                    >
                      Lokal
                    </span>
                    <label className={styles["switch"]}>
                      <input
                        type="checkbox"
                        checked={sourceType === "supabase"}
                        onChange={(e) => {
                          if (requireAuth()) { e.preventDefault(); return; }
                          setSourceType((prev) => {
                            const next = prev === "local" ? "supabase" : "local";
                            // If switching to local, reset the supabase loaded flag
                            if (next === "local") setHasLoadedSupabase(false);
                            return next;
                          });
                        }}
                        aria-label="Umschalter für Datenquelle"
                      />
                      <span className={styles["slider"]}></span>
                    </label>
                    <span
                      className={`${styles["label-right"]} ${
                        sourceType === "supabase" ? styles["label-active"] : ""
                      }`}
                    >
                      Online
                    </span>
                  </div>
                </div>

                {/* Region Selector (Native Select) */}
                <div className={styles["field"]}>
                  <div className={styles["region-selector"]}>
                    <select
                      className={styles["nativeSelect"]}
                      value={localRegion}
                      onChange={(e) => handleRegionSelect(e.target.value)}
                    >
                      {Object.keys(dataSources)
                        .filter((r) => dataSources[r].type === "dynamic")
                        .map((r) => (
                          <option key={r} value={r}>
                            {dataSources[r].name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Case Selector */}
                <div className={styles["field"]}>
                  <select
                    id="case-select"
                    className={styles["case-select"]}
                    onChange={(e) => setSelectedCase(e.target.value)}
                    value={selectedCase || ""}
                  >
                    <option value="">-- Fall wählen --</option>
                    {sourceType === "local" &&
                      localCases.map((file) => (
                        <option key={file.id} value={file.id}>
                          {file.fileDisplayName || file.name || "Ohne Namen"}
                        </option>
                      ))}
                    {sourceType === "supabase" &&
                      dataSources[localRegion]?.files
                        ?.filter(f => f.sourceType === "supabase")
                        .map((file) => (
                          <option key={file.id} value={file.id}>
                            {file.fileDisplayName || file.name || "Ohne Namen"}
                          </option>
                        ))}
                  </select>
                </div>

                <div className={styles["buttons-container"]}>
                  <Link to="/data-collection">
                    <button
                      className={styles.actionButton}
                      onClick={(e) => { if (requireAuth()) { e.preventDefault(); } }}
                      aria-label="Neuen Fall hinzufügen"
                    >
                      <FaPlus className={styles["icon-common"]} />
                    </button>
                  </Link>

                  <button
                    className={`${styles["actionButton"]} ${
                      userData?.[`completedCases_${localRegion}`]?.includes(
                        String(selectedCase)
                      )
                        ? styles["active"]
                        : ""
                    }`}
                    onClick={handleMarkAsCompleted}
                    disabled={!selectedCase}
                    aria-pressed={userData?.[
                      `completedCases_${localRegion}`
                    ]?.includes(String(selectedCase))}
                    aria-label="Fall als erledigt markieren"
                  >
                    <FaCheck className={styles["icon-common"]} />
                  </button>

                  <button
                    className={`${styles["actionButton"]} ${
                      userData?.[`deferredCases_${localRegion}`]?.includes(
                        String(selectedCase)
                      )
                        ? styles["active"]
                        : ""
                    }`}
                    onClick={handleDeferCase}
                    disabled={!selectedCase}
                    aria-pressed={userData?.[
                      `deferredCases_${localRegion}`
                    ]?.includes(String(selectedCase))}
                    aria-label="Fall verschieben"
                  >
                    <FaPause className={styles["icon-common"]} />
                  </button>

                  <button
                    className={styles["actionButton"]}
                    onClick={handleReset}
                    disabled={!selectedCase}
                    aria-label="Fall zurücksetzen"
                  >
                    <FaSync className={styles["icon-common"]} />
                  </button>
                  <button
                    className={styles["actionButton"]}
                    onClick={handlePrintPreview}
                    aria-label="PDF Vorschau"
                  >
                    <FaFilePdf className={styles["icon-common"]} />
                  </button>
                  <button
                    className={styles["actionButton"]}
                    onClick={handleStartSimulation}
                    aria-label="Simulation starten"
                  >
                    <FaPlay className={styles["icon-common"]} />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  className={styles.modalCloseButton}
                  onClick={() => setIsSettingsOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Hauptinhalt */}
          <div className={styles["fsp-container"]}>
            {isLoading && (
              <p className={styles["loading-message"]}>
                Daten werden geladen...
              </p>
            )}
            {errorState && (
              <p className={styles["error-message"]}>{errorState}</p>
            )}

            {!isLoading && !errorState && (
              <div
                className={`${styles["columns"]} ${
                  isMobile ? styles["mobile"] : ""
                }`}
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
                    <h3 className={styles["tile-title"]}>
                      Reise- und Impfstatus
                    </h3>
                    <ReiseImpfstatus parsedData={parsedData} />
                  </div>
                </div>

                {/* Column 2 */}
                <div className={styles["column"]}>
                  <div
                    className={styles["tile"]}
                    onClick={() => handleOpenInfoModal("vegetativeAnamnese")}
                  >
                    <h3 className={styles["tile-title"]}>
                      Vegetative Anamnese
                    </h3>
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
                    <h3 className={styles["tile-title"]}>
                      Frühere Operationen
                    </h3>
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
                    onClick={() =>
                      handleOpenInfoModal("allergiesAndIntolerances")
                    }
                  >
                    <h3 className={styles["tile-title"]}>
                      Unverträglichkeiten
                    </h3>
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
                    <h3 className={styles["tile-title"]}>
                      Familiäre Erkrankungen
                    </h3>
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
                    <h3 className={styles["tile-title"]}>
                      Differentialdiagnose
                    </h3>
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
                  <div
                    className={styles["tile"]}
                    onClick={handlePatientQuestionsClick}
                  >
                    <h3 className={styles["tile-title"]}></h3>
                    <PatientQuestions parsedData={parsedData} />
                  </div>
                  <div
                    className={styles["tile"]}
                    onClick={handleExaminerQuestionsClick}
                  >
                    <h3 className={styles["tile-title"]}></h3>
                    <ExaminerQuestions
                      onQuestionClick={handleExaminerQuestionsClick}
                    />
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
            title="Benutzerfälle"
            userCases={userCasesData}
          />

          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
          />
          <ToastContainer />
      </>
    </MainLayout>
  );
};

export default FSPFormularPage;
