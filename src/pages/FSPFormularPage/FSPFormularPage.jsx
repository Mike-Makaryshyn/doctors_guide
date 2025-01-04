// src/pages/FSPFormularPage/FSPFormularPage.jsx
import React, { useState, useRef, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import PatientQuestions from "./components/PatientQuestions"; // Додано імпорт

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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Імпорт глобального хуку
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Імпорт даних випадків
import FallSpecificData from "../../constants/translation/FallSpecificData";

// Імпорт утиліти для Firebase
import { fetchDataFromFirebase } from "../../utils/firebaseUtils";

// Імпорт React Select
import Select from "react-select";

const FSPFormularPage = () => {
  const navigate = useNavigate(); // Додано для навігації

  // Глобальні стани та контексти
  const {
    user,
    selectedLanguage,
    languages,
    currentPage,
    selectedRegion,
    handleChangeRegion,
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
  const [localRegion, setLocalRegion] = useState(selectedRegion || "");

  // Флаг для обробки caseId лише один раз
  const [isCaseIdHandled, setIsCaseIdHandled] = useState(false);

  // Оновлення локального регіону при зміні глобального, якщо немає caseId
  useEffect(() => {
    if (!caseId && !isCaseIdHandled) {
      setLocalRegion(selectedRegion || "");
      console.log("Set localRegion from selectedRegion:", selectedRegion || "");
    }
  }, [selectedRegion, caseId, isCaseIdHandled]);

  // Відстеження стану авторизації через Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("onAuthStateChanged: ", currentUser); // Додано для логування
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
          console.log("Спроба доступу до документу:", userDocRef.path); // Додано для логування
          const userDocSnap = await getDoc(userDocRef);
          console.log("Документ існує:", userDocSnap.exists()); // Додано для логування
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());
          } else {
            await setDoc(userDocRef, {});
            setUserData({});
            console.log("Документ користувача створено."); // Додано для логування
          }
        } catch (error) {
          console.error("Помилка доступу до документу користувача:", error);
          toast.error("Не вдалося отримати дані користувача.");
          setUserData(null);
        }
      } else {
        setSelectedCase("");
        setParsedData({});
        setFallType("");
        setUserData(null);
        console.log("Користувач не автентифікований."); // Додано для логування
      }
    });

    return () => unsubscribe();
  }, []);

  // Завантаження selectedCase з Firestore при зміні localRegion або caseId
  useEffect(() => {
    const fetchSelectedCase = async () => {
      if (user && caseId && !isCaseIdHandled) {
        // Якщо є caseId, визначаємо відповідний регіон
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region]?.files.some(
            (file) => String(file.id) === String(caseId)
          )
        );

        if (regionId) {
          console.log(`Визначено регіон для caseId ${caseId}: ${regionId}`);
          setLocalRegion(regionId);
          setSelectedCase(caseId);
          console.log(`Встановлено selectedCase на caseId: ${caseId}`);
        } else {
          console.warn(`Регіон для caseId ${caseId} не знайдено.`);
          setSelectedCase("");
          return;
        }

        setIsCaseIdHandled(true); // Встановлюємо флаг, щоб не обробляти caseId знову
      }

      if (localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          console.log("Завантаження selectedCase з:", userDocRef.path); // Додано для логування
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userDataFromFirestore = userDocSnap.data();
            setUserData(userDataFromFirestore);
            const savedCase = userDataFromFirestore[`selectedCase_${localRegion}`];
            console.log(`Збережений випадок для ${localRegion}:`, savedCase); // Додано для логування

            if (
              caseId &&
              dataSources[localRegion]?.files.some(
                (file) => String(file.id) === String(caseId)
              )
            ) {
              setSelectedCase(caseId);
              console.log(`Встановлено selectedCase на caseId: ${caseId}`); // Додано для логування
            } else if (
              savedCase &&
              dataSources[localRegion]?.files.some(
                (file) => String(file.id) === String(savedCase)
              )
            ) {
              setSelectedCase(savedCase);
              console.log(`Встановлено selectedCase на savedCase: ${savedCase}`); // Додано для логування
            } else {
              setSelectedCase("");
              console.log("selectedCase очищено."); // Додано для логування
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
              console.log(`Встановлено selectedCase на caseId: ${caseId}`); // Додано для логування
            } else {
              setSelectedCase("");
              console.log("selectedCase очищено."); // Додано для логування
            }
            setUserData({});
          }
        } catch (error) {
          console.error("Помилка завантаження selectedCase:", error);
          toast.error("Не вдалося завантажити вибраний випадок.");
          setSelectedCase("");
          setUserData(null);
        }
      } else if (caseId && !isCaseIdHandled) {
        // Якщо є caseId, але немає користувача або локального регіону
        console.log(`Встановлення selectedCase на caseId: ${caseId} без визначеного регіону.`);
        setSelectedCase(caseId);
        // Спроба визначити регіон
        const regionId = Object.keys(dataSources).find((region) =>
          dataSources[region]?.files.some(
            (file) => String(file.id) === String(caseId)
          )
        );
        if (regionId) {
          console.log(`Визначено регіон для caseId ${caseId}: ${regionId}`);
          setLocalRegion(regionId);
          setIsCaseIdHandled(true); // Встановлюємо флаг
        } else {
          console.warn(`Регіон для caseId ${caseId} не знайдено.`);
          setSelectedCase("");
        }
      } else {
        setSelectedCase("");
        console.log("selectedCase очищено."); // Додано для логування
      }
    };

    fetchSelectedCase();
  }, [localRegion, dataSources, user, caseId, isCaseIdHandled]);

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
          console.log(`Збереження selectedCase_${localRegion}: ${selectedCase}`); // Додано для логування
          await updateDoc(userDocRef, {
            [`selectedCase_${localRegion}`]: selectedCase,
          });

          console.log(`selectedCase_${localRegion} збережено: ${selectedCase}`); // Додано для логування
        } catch (error) {
          console.error("Помилка збереження випадку:", error);
          toast.error("Не вдалося зберегти випадок.");
        }
      } else if (!selectedCase && localRegion && user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          console.log(`Очищення selectedCase_${localRegion}`); // Додано для логування
          await updateDoc(userDocRef, { [`selectedCase_${localRegion}`]: "" });

          console.log(`selectedCase_${localRegion} очищено.`); // Додано для логування
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

      // Встановлення parsedData без summary, examinerQuestions та patientQuestions
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

      // Встановлюємо patientQuestions тільки якщо воно існує
      if (selectedItem.patientQuestions) {
        setParsedData((prevData) => ({
          ...prevData,
          patientQuestions: selectedItem.patientQuestions,
        }));
        console.log("Parsed Data з patientQuestions:", {
          ...selectedItem,
          patientQuestions: selectedItem.patientQuestions,
        });
      } else {
        console.warn("Parsed Data не містить patientQuestions:", selectedItem);
      }
    } catch (err) {
      console.error("Помилка під час парсингу даних:", err);
      setErrorState("Сталася помилка під час завантаження даних.");
      toast.error("Сталася помилка під час завантаження даних.");
    } finally {
      setIsLoading(false);
    }
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
    } else if (type === "patientQuestions") {
      infoText =
        parsedData.patientQuestions || // Використовуємо дані з parsedData
        FSPFormularPageData.modal.additionalInfo.defaultPatientQuestions || // Використовуємо дефолтний текст
        "Додаткова інформація для запитань пацієнта недоступна.";
      console.log("Отримано інформацію для PatientQuestions:", infoText);
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
    console.log(`Випадок змінено на: ${selectedOption.value}`); // Додано для логування
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

  // Додано: Функція для скидання вибору випадку
  const handleReset = () => {
    setSelectedCase("");
    setParsedData({});
    setFallType("");
    // Якщо є інші стани, пов'язані з вибором випадку, скиньте їх тут
    console.log("Вибір випадку скинуто до початкового стану.");
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
    console.log("selectedRegion =", selectedRegion);
    console.log("localRegion =", localRegion);
    console.log("isCaseIdHandled =", isCaseIdHandled); // Додано для логування
    console.log("Object.keys(dataSources) =", Object.keys(dataSources));
    console.log("userData =", userData);
  }, [selectedRegion, localRegion, isCaseIdHandled, dataSources, userData]);

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
    // Видалено: handleChangeRegion(regionId); // Збереження у Firebase через хук
    console.log(`Локальний регіон змінено на: ${regionId}`); // Додано для логування
  };

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
              {/* Використовуємо name та surname для відображення імені */}
              <span>{`${file.name || "Без Імені"} ${file.surname || ""}`.trim() || "Без Імені"}</span>
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

  // Функція для обробки кліку на PatientQuestions
  const handlePatientQuestionsClick = () => {
    handleOpenInfoModal("patientQuestions");
  };

  // Рендеринг
  return (
    <MainLayout>
      {/* Додано перевірку, чи аутентифікація завершена */}
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

          {/* Лог для перевірки additionalInfo перед рендерингом модалки */}
          {console.log(
            "AdditionalInfo перед рендерингом модалки:",
            additionalInfo
          )}

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
                                    {/* Використання name та surname для відображення */}
                                    {(() => {
                                      const file = dataSources[localRegion].files.find(
                                        (file) =>
                                          String(file.id) === String(selectedCase)
                                      );
                                      if (file) {
                                        const name = file.name || "Без Імені";
                                        const surname = file.surname || "";
                                        return `${name} ${surname}`.trim() || "Без Імені";
                                      }
                                      return "Виберіть Випадок";
                                    })()}
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

                {/* Кнопки для Додавання, Позначення як Завершених, Відкладання та Скидання Випадків */}
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

                  {/* Додано: Кнопка для Скидання Вибору Випадку */}
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
                    <h3 className={styles["tile-title"]}>Persönliche Daten</h3>
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
                    <h3 className={styles["tile-title"]}>Aktuelle Anamnese</h3>
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
                <div className={styles["column"]} key="column-3">
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

                {/* Колонка 4 */}
                <div className={styles["column"]} key="column-4">
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
   {/* Додана секція PatientQuestions */}
   <div
                    className={styles["tile"]}
                    onClick={handlePatientQuestionsClick}
                  >
                    <h3 className={styles["tile-title"]}></h3>
                    <PatientQuestions parsedData={parsedData} />
                  </div>
                  {/* Додана секція ExaminerQuestions */}
                  <div
                    className={styles["tile"]}
                    onClick={handleExaminerQuestionsClick}
                  >
                    <h3 className={styles["tile-title"]}></h3>
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
                : additionalInfo.type === "patientQuestions"
                ? "Запитання пацієнта"
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

          {/* Додано ToastContainer для відображення сповіщень */}
          <ToastContainer />
        </>
      )}
    </MainLayout>
  );
};

export default FSPFormularPage;