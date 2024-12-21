// ResumePage.jsx
import React, { useState, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./ResumePage.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HeaderSection from "./HeaderSection";
import AktuellSection from "./AktuellSection";
import BerufserfahrungenSection from "./BerufserfahrungenSection";
import AusbildungSection from "./AusbildungSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";

// Імпортуємо іконки з бібліотеки Material Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
          },
          "& .MuiInputLabel-root": {
            color: "black",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        },
      },
    },
  },
});

const sections = [
  {
    id: 0,
    title: "Persönliche Daten",
    component: HeaderSection,
    icon: <HomeIcon style={{ fontSize: 40 }} />, // Збільшений розмір іконки
  },
  {
    id: 1,
    title: "Aktuell",
    component: AktuellSection,
    icon: <InfoIcon style={{ fontSize: 40 }} />,
  },
  {
    id: 2,
    title: "Berufserfahrungen",
    component: BerufserfahrungenSection,
    icon: <WorkIcon style={{ fontSize: 40 }} />,
  },
  {
    id: 3,
    title: "Ausbildung",
    component: AusbildungSection,
    icon: <SchoolIcon style={{ fontSize: 40 }} />,
  },
  {
    id: 4,
    title: "Language Skills",
    component: LanguageSkillsSection,
    icon: <LanguageIcon style={{ fontSize: 40 }} />,
  },
  {
    id: 5,
    title: "Technical Skills",
    component: TechnicalSkillsSection,
    icon: <BuildIcon style={{ fontSize: 40 }} />,
  },
];

const ResumePage = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Створення рефів для кожної секції
  const headerRef = useRef();
  const aktuellRef = useRef();
  const berufserfahrungenRef = useRef();
  const ausbildungRef = useRef();
  const languageSkillsRef = useRef();
  const technicalSkillsRef = useRef();

  // Мапування рефів за id секції
  const sectionRefs = {
    0: headerRef,
    1: aktuellRef,
    2: berufserfahrungenRef,
    3: ausbildungRef,
    4: languageSkillsRef,
    5: technicalSkillsRef,
  };

  const CurrentComponent = sections[currentSection].component;

  // Функція для збереження даних поточної секції перед переходом
  const saveCurrentSectionData = async () => {
    const currentRef = sectionRefs[currentSection];
    if (currentRef && currentRef.current && currentRef.current.saveData) {
      await currentRef.current.saveData();
    }
  };

  const handleIconClick = async (id) => {
    if (id === currentSection) return; // Вже на цій секції

    await saveCurrentSectionData(); // Зберегти дані поточної секції
    setCurrentSection(id); // Перейти до нової секції
  };

  const handleNext = async () => {
    if (currentSection < sections.length - 1) {
      await saveCurrentSectionData(); // Зберегти дані перед переходом
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handleBack = async () => {
    if (currentSection > 0) {
      await saveCurrentSectionData(); // Зберегти дані перед переходом
      setCurrentSection((prev) => prev - 1);
    }
  };

  // Функція для передавання handleNext до дочірніх компонентів
  const handleSectionNext = async () => {
    await handleNext();
  };

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          <ToastContainer /> {/* Рендеринг ToastContainer у батьківському компоненті */}

          {/* Навігаційні іконки */}
          <div className={styles.iconBar}>
            {sections.map((section) => (
              <div
                key={section.id}
                className={`${styles.iconContainer} ${
                  currentSection === section.id ? styles.active : styles.inactive
                }`}
                onClick={() => handleIconClick(section.id)}
                aria-label={section.title}
              >
                <div
                  className={`${styles.icon} ${
                    currentSection === section.id ? styles.activeIcon : styles.inactiveIcon
                  }`}
                >
                  {section.icon}
                </div>
                <span className={styles.iconLabel}>{section.title}</span>
              </div>
            ))}
          </div>

          {/* Активна секція */}
          <div className={styles.section}>
            <CurrentComponent onNext={handleSectionNext} ref={sectionRefs[currentSection]} />
          </div>

          {/* Кнопки "Назад" та "Далі" */}
          <div className={styles.navigationButtons}>
            <button onClick={handleBack} disabled={currentSection === 0}>
              Назад
            </button>
            <button onClick={handleNext} disabled={currentSection === sections.length - 1}>
              Далі
            </button>
          </div>
        </div>
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;