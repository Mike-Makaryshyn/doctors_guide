import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./ResumePage.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Підключаємо секції
import HeaderSection from "./HeaderSection";
import AktuellSection from "./AktuellSection";
import BerufserfahrungenSection from "./BerufserfahrungenSection";
import AusbildungSection from "./AusbildungSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";

// Іконки / прочее
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

// Імпорт глобального туторіалу
import ResumeTutorial from "./ResumeTutorial";

Modal.setAppElement("#root");

const theme = createTheme({});

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
  {
    id: 6,
    title: "PDF Export",
    component: () => <div>PDF Export</div>,
    icon: () => null,
  },
];

const mainSections = allSections.filter((s) => s.id !== 6);

const StickyHeader = ({ title }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
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

const StaticIconBar = ({ sections, currentSection, onIconClick }) => (
  <div data-tutorial="iconBar" className={styles.iconBar}>
    {sections.map((section) => {
      const isActive = section.id === currentSection;
      return (
        <div
          key={section.id}
          data-section-id={section.id}
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

const ResumePage = () => {
  const isMobile = useIsMobile(600);
  const [currentSection, setCurrentSection] = useState(0);
  const [resumeData, setResumeData] = useState({
    header: {},
    aktuell: [],
    berufserfahrungen: [],
    ausbildung: [],
    languageSkills: [],
    technicalSkills: [],
    lastModified: new Date().toISOString(),
  });
  const [isFetching, setIsFetching] = useState(true);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  const [tutorialActive, setTutorialActive] = useState(false);

  const loadLocalData = () => {
    const localDataStr = localStorage.getItem("resumeData");
    if (localDataStr) {
      console.log("Loaded from localStorage =>", JSON.parse(localDataStr));
      return JSON.parse(localDataStr);
    } else {
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

  const handlePreviewPDF = () => previewResumePDF();
  const handleDownloadPDF = () => downloadResumePDF();
  const handleOpenPDFModal = () => setIsPDFModalOpen(true);
  const handleClosePDFModal = () => setIsPDFModalOpen(false);

  useEffect(() => {
    setIsFetching(true);
    const data = loadLocalData();
    setResumeData(data);
    setIsFetching(false);
  }, []);

  // При отриманні події старту туторіалу – скидаємо прапорець та перемикаємо секцію
  useEffect(() => {
    const handleStartTutorial = () => {
      // Видаляємо прапорець, що туторіал вже пройдено,
      // щоб дозволити його повторний запуск
      localStorage.removeItem("tutorialCompleted");
      setCurrentSection(2);
      setTutorialActive(true);
    };
    window.addEventListener("startTutorial", handleStartTutorial);
    return () => window.removeEventListener("startTutorial", handleStartTutorial);
  }, []);

  // Якщо ми вийшли з секції туторіалу, скидаємо tutorialActive
  useEffect(() => {
    if (currentSection !== 2) {
      setTutorialActive(false);
    }
  }, [currentSection]);

  if (isFetching) {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <div className={styles.loading}>Loading from Local Storage...</div>
        </MainLayout>
      </ThemeProvider>
    );
  }

  const CurrentSection = allSections[currentSection]?.component || HeaderSection;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          <StickyHeader title={allSections[currentSection].title} />
          <StaticIconBar
            sections={mainSections}
            currentSection={currentSection}
            onIconClick={setCurrentSection}
          />
          <div className={styles.section}>
            <CurrentSection
              data={resumeData[allSections[currentSection].dataKey]}
              onUpdate={(newData) =>
                updateSectionData(allSections[currentSection].dataKey, newData)
              }
              // Передаємо сигнал туторіалу лише для секції 2
              isTutorialActive={currentSection === 2 ? tutorialActive : false}
            />
          </div>
          <div className={styles.navButtonContainer}>
            <button
              data-tutorial="openModalButton"
              className={styles.printButton}
              onClick={handleOpenPDFModal}
              title="Print PDF"
            >
              <FaPrint />
            </button>
          </div>
          <button
            data-tutorial="tutorialStartButton"
            className={styles.tutorialButton}
            onClick={() =>
              window.dispatchEvent(new CustomEvent("startTutorial"))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="#ededed"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="#ededed" fill="none" />
              <line x1="12" y1="12" x2="12" y2="15.5" stroke="#ededed" strokeWidth="3" />
              <circle cx="12" cy="7" r="0.5" fill="#ededed" />
            </svg>
          </button>
        </div>
        <PDFResumeModal isOpen={isPDFModalOpen} onClose={handleClosePDFModal} />
        {/* Передаємо додатковий прапорець resetTutorial, який залежить від tutorialActive */}
        <ResumeTutorial
          currentSection={currentSection}
          onSectionChange={(sectionId) => setCurrentSection(sectionId)}
          resetTutorial={tutorialActive}
        />
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;