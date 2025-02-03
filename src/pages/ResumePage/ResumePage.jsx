// src/pages/ResumePage/ResumePage.jsx

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./ResumePage.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Підключаємо всі секції
import HeaderSection from "./HeaderSection";
import AktuellSection from "./AktuellSection";
import BerufserfahrungenSection from "./BerufserfahrungenSection";
import AusbildungSection from "./AusbildungSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";

// Іконки / інше
import { FaPrint } from "react-icons/fa";
import useIsMobile from "../../hooks/useIsMobile";
import { previewResumePDF, downloadResumePDF } from "./pdfresume";
import PDFResumeModal from "./pdfresume";

// Lottie icons
import Lottie from "lottie-react";
import personalIcon from "../../assets/ResumeIcon/personalicon.json";
import aktuellIcon from "../../assets/ResumeIcon/aktuell.json";
import berufsIcon from "../../assets/ResumeIcon/berufs.json";
import ausbildungIcon from "../../assets/ResumeIcon/ausbildungicon.json";
import spracheIcon from "../../assets/ResumeIcon/spracheicon.json";
import technikalIcon from "../../assets/ResumeIcon/technikalicon.json";

// Ініціалізація react-modal
Modal.setAppElement("#root");

// Створюємо тему (за потреби)
const theme = createTheme({});

// Оголошуємо всі можливі секції резюме
const allSections = [
  {
    id: 0,
    title: "Persönliche Daten",
    component: HeaderSection,
    dataKey: "header",
    icon: (isActive) => (
      <Lottie
        animationData={personalIcon}
        style={{ width: 25, height: 25 }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
  {
    id: 1,
    title: "Aktuell",
    component: AktuellSection,
    dataKey: "aktuell",
    icon: (isActive) => (
      <Lottie
        animationData={aktuellIcon}
        style={{ width: 25, height: 25 }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
  {
    id: 2,
    title: "Berufserfahrungen",
    component: BerufserfahrungenSection,
    dataKey: "berufserfahrungen",
    icon: (isActive) => (
      <Lottie
        animationData={berufsIcon}
        style={{ width: 25, height: 25 }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
  {
    id: 3,
    title: "Ausbildung",
    component: AusbildungSection,
    dataKey: "ausbildung",
    icon: (isActive) => (
      <Lottie
        animationData={ausbildungIcon}
        style={{ width: 25, height: 25 }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
  {
    id: 4,
    title: "Language Skills",
    component: LanguageSkillsSection,
    dataKey: "languageSkills",
    icon: (isActive) => (
      <Lottie
        animationData={spracheIcon}
        style={{ width: 25, height: 25 }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
  {
    id: 5,
    title: "Technical Skills",
    component: TechnicalSkillsSection,
    dataKey: "technicalSkills",
    icon: (isActive) => (
      <Lottie
        animationData={technikalIcon}
        style={{ width: 25, height: 25 }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
  // PDF Export (не показуємо в меню)
  {
    id: 6,
    title: "PDF Export",
    component: () => <div>PDF Export</div>,
    icon: () => null,
  },
];

// Фільтруємо, щоб у меню не було PDF Export
const mainSections = allSections.filter((s) => s.id !== 6);

// Компонент липкого заголовку
const StickyHeader = ({ title }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!visible) return null;

  return (
    <div className={styles.stickyHeader}>
      <h2>{title}</h2>
    </div>
  );
};

// Панель іконок
const StaticIconBar = ({ sections, currentSection, onIconClick }) => (
  <div className={styles.iconBar}>
    {sections.map((section) => {
      const isActive = section.id === currentSection;
      return (
        <div
          key={section.id}
          className={`${styles.iconContainer} ${
            isActive ? styles.active : styles.inactive
          }`}
          onClick={() => onIconClick(section.id)}
        >
          <div className={styles.icon}>
            {section.icon ? section.icon(isActive) : null}
          </div>
          <span className={styles.iconLabel}>{section.title}</span>
        </div>
      );
    })}
  </div>
);

////////////////////////////////////////
// Основний компонент
////////////////////////////////////////
const ResumePage = () => {
  const isMobile = useIsMobile(600);

  // Стан активної секції
  const [currentSection, setCurrentSection] = useState(0);

  // Дані резюме (локальні)
  const [resumeData, setResumeData] = useState({
    header: {},
    aktuell: [],
    berufserfahrungen: [],
    ausbildung: [],
    languageSkills: [],
    technicalSkills: [],
    lastModified: new Date().toISOString(),
  });

  // Стан завантаження + PDF-модалки
  const [isFetching, setIsFetching] = useState(true);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  // ======================
  // 1) Завантаження з localStorage (без Firebase)
  // ======================
  const loadLocalData = () => {
    const localDataStr = localStorage.getItem("resumeData");
    if (localDataStr) {
      console.log("Loaded from localStorage =>", JSON.parse(localDataStr));
      return JSON.parse(localDataStr);
    } else {
      // Якщо немає, створимо дефолт
      const defaultData = {
        header: {},
        aktuell: [],
        berufserfahrungen: [],
        ausbildung: [],
        languageSkills: [],
        technicalSkills: [],
        lastModified: new Date().toISOString(),
      };
      localStorage.setItem("resumeData", JSON.stringify(defaultData));
      return defaultData;
    }
  };

  // ======================
  // 2) Оновлення розділу (лише localStorage)
  // ======================
  const updateSectionData = (sectionKey, newData) => {
    setResumeData((prev) => {
      const updated = {
        ...prev,
        [sectionKey]: newData,
        lastModified: new Date().toISOString(),
      };
      localStorage.setItem("resumeData", JSON.stringify(updated));
      console.log(`Updated section "${sectionKey}":`, updated);
      return updated;
    });
  };

  // ======================
  // 3) Обробники PDF
  // ======================
  const handlePreviewPDF = () => {
    // Друкуємо, беремо дані з localStorage
    previewResumePDF();
  };
  const handleDownloadPDF = () => {
    downloadResumePDF();
  };

  // ======================
  // 4) PDF-модалка
  // ======================
  const handleOpenPDFModal = () => setIsPDFModalOpen(true);
  const handleClosePDFModal = () => setIsPDFModalOpen(false);

  // ======================
  // 5) useEffect: завантаження
  // ======================
  useEffect(() => {
    setIsFetching(true);
    const data = loadLocalData();
    setResumeData(data);
    setIsFetching(false);
  }, []);

  // Немає syncToFirestore + немає beforeunload

  // Якщо триває завантаження
  if (isFetching) {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <div className={styles.loading}>Loading from Local Storage...</div>
        </MainLayout>
      </ThemeProvider>
    );
  }

  // Поточна секція
  const CurrentSection =
    allSections[currentSection]?.component || HeaderSection;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          {/* Sticky header */}
          <StickyHeader title={allSections[currentSection].title} />

          {/* Панель іконок */}
          <StaticIconBar
            sections={mainSections}
            currentSection={currentSection}
            onIconClick={setCurrentSection}
          />

          {/* Поточний розділ */}
          <div className={styles.section}>
            <CurrentSection
              data={resumeData[allSections[currentSection].dataKey]}
              onUpdate={(newData) =>
                updateSectionData(allSections[currentSection].dataKey, newData)
              }
            />
          </div>

          {/* Кнопка PDF */}
          <div className={styles.navButtonContainer}>
            <button
              className={styles.printButton}
              onClick={handleOpenPDFModal}
              title="Print PDF"
            >
              <FaPrint />
            </button>
          </div>
        </div>

        {/* PDF-модалка */}
        <PDFResumeModal isOpen={isPDFModalOpen} onClose={handleClosePDFModal} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;