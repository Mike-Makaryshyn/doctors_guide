import React, { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./DataCollectionPage.module.scss";

// Імпортуємо SVG-файли напряму
import OrganizationalDataIcon from "../../assets/DataCollectionPage/OrganizationalDataIcon.png";
import ExamDataIcon from "../../assets/DataCollectionPage/ExamDataIcon.png";
import PatientQuestionsIcon from "../../assets/DataCollectionPage/PatientQuestionsIcon.png";
import ExaminerQuestionsIcon from "../../assets/DataCollectionPage/ExaminerQuestionsIcon.png";
import FeedbackIcon from "../../assets/DataCollectionPage/FeedbackIcon.png";

/* Приклади підкомпонентів (ви можете замінити на ваші) */
import OrganizationalDataSection from "./OrganizationalDataSection";
import ExamDataSection from "./ExamDataSection";
import PatientQuestionsSection from "./PatientQuestionsSection";
import ExaminerQuestionsSection from "./ExaminerQuestionsSection";
import FeedbackSection from "./FeedbackSection";

import MainLayout from "../../layouts/MainLayout/MainLayout";

/* Масив секцій з іконками */
const sections = [
  { id: 0, title: "Організаційні дані", icon: OrganizationalDataIcon, component: OrganizationalDataSection },
  { id: 1, title: "Дані екзамену", icon: ExamDataIcon, component: ExamDataSection },
  { id: 2, title: "Запитання пацієнта", icon: PatientQuestionsIcon, component: PatientQuestionsSection },
  { id: 3, title: "Запитання екзаменаторів", icon: ExaminerQuestionsIcon, component: ExaminerQuestionsSection },
  { id: 4, title: "Відгук", icon: FeedbackIcon, component: FeedbackSection },
];

const DataCollectionPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  // Зберігає посилання на кожну секцію (щоб викликати saveData та інші методи)
  const sectionRefs = sections.reduce((acc, section) => {
    acc[section.id] = useRef();
    return acc;
  }, {});

  // Зберігаємо поточні дані секції перед переходом
  const saveCurrentSectionData = async () => {
    const currentRef = sectionRefs[currentSection];
    if (currentRef?.current?.saveData) {
      await currentRef.current.saveData();
    }
  };

  const handleNext = async () => {
    if (currentSection < sections.length - 1) {
      await saveCurrentSectionData();
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handleBack = async () => {
    if (currentSection > 0) {
      await saveCurrentSectionData();
      setCurrentSection((prev) => prev - 1);
    }
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <MainLayout>
      <div className={styles.container}>
        <ToastContainer />
     
        {/* Навігаційна панель */}
        <div className={styles.navigation}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`${styles.navButton} ${
                currentSection === section.id ? styles.active : ""
              }`}
              onClick={() => setCurrentSection(section.id)}
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
          <CurrentComponent ref={sectionRefs[currentSection]} />
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