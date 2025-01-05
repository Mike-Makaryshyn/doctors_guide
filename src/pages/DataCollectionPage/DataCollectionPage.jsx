// src/pages/DataCollectionPage/DataCollectionPage.jsx

import React, { useState, useRef, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc, addDoc, collection, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { DataSourceContext } from "../../contexts/DataSourceContext";

import styles from "./DataCollectionPage.module.scss";

import OrganizationalDataIcon from "../../assets/DataCollectionPage/OrganizationalDataIcon.png";
import ExamDataIcon from "../../assets/DataCollectionPage/ExamDataIcon.png";
import PatientQuestionsIcon from "../../assets/DataCollectionPage/PatientQuestionsIcon.png";
import ExaminerQuestionsIcon from "../../assets/DataCollectionPage/ExaminerQuestionsIcon.png";
import FeedbackIcon from "../../assets/DataCollectionPage/FeedbackIcon.png";

import OrganizationalDataSection from "./OrganizationalDataSection";
import ExamDataSection from "./ExamDataSection";
import PatientQuestionsSection from "./PatientQuestionsSection";
import ExaminerQuestionsSection from "./ExaminerQuestionsSection";
import FeedbackSection from "./FeedbackSection";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import RegionSelector from "../../components/RegionSelector/RegionSelector"; // Імпорт оновленого RegionSelector

const sections = [
  { id: 0, title: "Організаційні дані", icon: OrganizationalDataIcon, component: OrganizationalDataSection },
  { id: 1, title: "Дані екзамену", icon: ExamDataIcon, component: ExamDataSection },
  { id: 2, title: "Запитання пацієнта", icon: PatientQuestionsIcon, component: PatientQuestionsSection },
  { id: 3, title: "Запитання екзаменаторів", icon: ExaminerQuestionsIcon, component: ExaminerQuestionsSection },
  { id: 4, title: "Відгук", icon: FeedbackIcon, component: FeedbackSection },
];

const DataCollectionPage = () => {
  const { dataSources } = useContext(DataSourceContext); // Отримуємо dataSources
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(""); // Стан для вибраного регіону
  const [user, loading, error] = useAuthState(auth);
  const sectionRefs = useRef(sections.reduce((acc, section) => {
    acc[section.id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    if (user && selectedRegion) {
      // Завантаження існуючих даних для вибраного регіону
      const fetchData = async () => {
        const casesCollectionRef = collection(db, "users", user.uid, "cases");
        const casesSnapshot = await getDocs(casesCollectionRef);
        const casesList = casesSnapshot.docs.map(doc => ({
          caseId: doc.id,
          ...doc.data(),
        }));

        // Якщо є попередні випадки для цього регіону, завантажуємо їх
        const regionCases = casesList.filter(caseItem => caseItem.region === selectedRegion);
        if (regionCases.length > 0) {
          const latestCase = regionCases[regionCases.length - 1];
          // Можливо, завантажити дані для останнього випадку
          // Наприклад:
          // sectionRefs.current[data.section].current.setData(data.data);
        }
      };
      fetchData();
    }
  }, [user, selectedRegion]);

  const saveCurrentSectionData = async () => {
    const currentRef = sectionRefs.current[currentSection];
    if (currentRef?.current?.saveData) {
      const sectionData = await currentRef.current.saveData();

      if (user && selectedRegion && dataSources[selectedRegion]) {
        try {
          const casesCollectionRef = collection(db, "users", user.uid, "cases");
          const docRef = await addDoc(casesCollectionRef, {
            region: selectedRegion, // Використовуємо ключ регіону
            data: sectionData,
            timestamp: new Date(),
          });
          console.log("Дані успішно збережені у Firebase з ID:", docRef.id);
          toast.success("Дані успішно збережені!");
        } catch (error) {
          console.error("Помилка при збереженні даних у Firebase: ", error);
          toast.error("Помилка при збереженні даних.");
        }
      } else {
        console.warn("Користувач не автентифікований або регіон не обрано/не існує");
        toast.warn("Користувач не автентифікований або регіон не обрано.");
      }
    }
  };

  const handleNext = async () => {
    await saveCurrentSectionData();
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handleBack = async () => {
    await saveCurrentSectionData();
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <MainLayout>
      <div className={styles.container}>
        <ToastContainer />

        {/* Поле вибору регіону */}
        <div className={styles.regionSelector}>
          <RegionSelector setSelectedRegion={setSelectedRegion} />
        </div>

        {/* Навігаційна панель */}
        <div className={styles.navigation}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`${styles.navButton} ${
                currentSection === section.id ? styles.active : ""
              }`}
              onClick={() => setCurrentSection(section.id)}
              disabled={!selectedRegion && section.id !== 0} // Дозволяємо переходити лише якщо регіон обрано, окрім першої секції
            >
              <img
                src={section.icon}
                alt={section.title}
                className={styles.icon}
              />
            </button>
          ))}
        </div>

        {/* Поточна секція */}
        <div className={styles.section}>
          <CurrentComponent ref={sectionRefs.current[currentSection]} selectedRegion={selectedRegion} />
        </div>

        {/* Кнопки «Назад» і «Далі» */}
        <div className={styles.navigationButtons}>
          <button onClick={handleBack} disabled={currentSection === 0}>
            Назад
          </button>
          <button
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
          >
            Далі
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataCollectionPage;