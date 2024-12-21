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
import { addDownloadButton } from "./pdfresume";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import useIsMobile from "../../hooks/useIsMobile";
import { useSwipeable } from "react-swipeable";

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
    icon: <HomeIcon style={{ fontSize: 40 }} />,
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
  {
    id: 6,
    title: "PDF Export",
    component: () => (
      <div className={styles.pdfExportContainer}>
        <h2>Завантажити PDF</h2>
        <div id="download-resume-container"></div>
      </div>
    ),
    icon: <PictureAsPdfIcon style={{ fontSize: 40, color: "red" }} />,
  },
];

const ResumePage = () => {
  const isMobile = useIsMobile(600);
  const [currentSection, setCurrentSection] = useState(0);

  const sectionRefs = sections.reduce((refs, section) => {
    refs[section.id] = useRef();
    return refs;
  }, {});

  const saveCurrentSectionData = async () => {
    const currentRef = sectionRefs[currentSection];
    if (currentRef?.current?.saveData) {
      await currentRef.current.saveData();
    }
  };

  const handleIconClick = async (id) => {
    if (id === currentSection) return;
    await saveCurrentSectionData();
    setCurrentSection(id);

    if (id === 6) {
      setTimeout(() => {
        addDownloadButton("download-resume-container");
      }, 300);
    }
  };

  const handleNext = async () => {
    if (currentSection < sections.length - 1) {
      await saveCurrentSectionData();
      setCurrentSection((prev) => prev + 1);

      if (currentSection + 1 === 6) {
        setTimeout(() => {
          addDownloadButton("download-resume-container");
        }, 300);
      }
    }
  };

  const handleBack = async () => {
    if (currentSection > 0) {
      await saveCurrentSectionData();
      setCurrentSection((prev) => prev - 1);
    }
  };

  const swipeHandlersIconBar = useSwipeable({
    onSwipedLeft: () => handleNext(), // Перехід до наступного розділу
    onSwipedRight: () => handleBack(), // Перехід до попереднього розділу
    preventScrollOnSwipe: true, // Забороняє вертикальну прокрутку
    delta: 10, // Мінімальна відстань свайпу для активації
  });

  const CurrentComponent = sections[currentSection].component;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          <ToastContainer />

          {/* Навігація */}
          {/* Навігація */}
<div
  {...swipeHandlersIconBar} // Додано swipeable тільки для iconBar
  className={styles.iconBar}
  style={{
    display: "flex",
    overflowX: "auto", // Активує горизонтальний скролінг
    scrollSnapType: "x mandatory", // Додає плавний скролінг
    WebkitOverflowScrolling: "touch", // Дозволяє мобільний свайп
  }}
>
  {sections.map((section) => (
    <div
      key={section.id}
      className={`${styles.iconContainer} ${
        currentSection === section.id ? styles.active : styles.inactive
      }`}
      onClick={() => handleIconClick(section.id)}
      style={{
        flex: "0 0 auto", // Забезпечує фіксовану ширину елементів
        scrollSnapAlign: "center", // Додає зручне вирівнювання
      }}
    >
      <div className={styles.icon}>{section.icon}</div>
      <span className={styles.iconLabel}>{section.title}</span>
    </div>
  ))}
</div>

          {/* Поточна секція */}
          <div className={styles.section}>
            <CurrentComponent ref={sectionRefs[currentSection]} />
          </div>

          {/* Кнопки навігації */}
          <div
            className={styles.navigationButtons}
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "10px" : "0",
            }}
          >
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
    </ThemeProvider>
  );
};

export default ResumePage;