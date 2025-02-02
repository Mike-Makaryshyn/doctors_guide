// src/pages/ResumePage/ResumePage.jsx

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./ResumePage.module.css";
import pdfStyles from "./pdfresume.module.css"; // Стилі для модального вікна PDF
import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeaderSection from "./HeaderSection";
import AktuellSection from "./AktuellSection";
import BerufserfahrungenSection from "./BerufserfahrungenSection";
import AusbildungSection from "./AusbildungSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { FaFilePdf, FaPrint } from "react-icons/fa";
import useIsMobile from "../../hooks/useIsMobile";
import { previewResumePDF, downloadResumePDF } from "./pdfresume";
import Lottie from "lottie-react";
import PDFResumeModal from "./pdfresume";

// Імпорт JSON-анімацій (іконок)
import aktuellIcon from "../../assets/ResumeIcon/aktuell.json";
import ausbildungIcon from "../../assets/ResumeIcon/ausbildungicon.json";
import personalIcon from "../../assets/ResumeIcon/personalicon.json";
import spracheIcon from "../../assets/ResumeIcon/spracheicon.json";
import technikalIcon from "../../assets/ResumeIcon/technikalicon.json";
import berufsIcon from "../../assets/ResumeIcon/berufs.json";

// Ініціалізація react-modal
Modal.setAppElement("#root");

// Тема для MUI
const theme = createTheme({});

////////////////////////////////////////////////////////////////////////////////
// Опис усіх можливих секцій резюме
////////////////////////////////////////////////////////////////////////////////
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
  // PDF Export (не відображаємо в меню)
  {
    id: 6,
    title: "PDF Export",
    component: () => (
      <div className={styles.pdfExportContainer}>
        <h2>PDF Export</h2>
        <div id="download-resume-container"></div>
      </div>
    ),
    icon: () => <FaFilePdf style={{ fontSize: 40, color: "red" }} />,
  },
];

const mainSections = allSections.filter((s) => s.id !== 6);

////////////////////////////////////////////////////////////////////////////////
// Sticky заголовок при прокрутці
////////////////////////////////////////////////////////////////////////////////
const StickyHeader = ({ title }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return visible ? (
    <div className={styles.stickyHeader}>
      <h2>{title}</h2>
    </div>
  ) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Панель іконок
////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
// Основний компонент ResumePage
////////////////////////////////////////////////////////////////////////////////
const ResumePage = () => {
  const isMobile = useIsMobile(600);

  // Активна секція
  const [currentSection, setCurrentSection] = useState(0);

  // Дані резюме
  const [resumeData, setResumeData] = useState({
    header: {},
    aktuell: [],
    berufserfahrungen: [],
    ausbildung: [],
    languageSkills: [],
    technicalSkills: [],
    lastModified: new Date().toISOString(),
  });

  // Стан
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  // ======================
  // 1) ФУНКЦІЯ FETCH
  // ======================
  const fetchResumeData = async () => {
    const user = auth.currentUser;
    if (!user) return null;

    // 1) Зчитуємо локальні дані
    const localDataStr = localStorage.getItem("resumeData");
    const localData = localDataStr ? JSON.parse(localDataStr) : null;
    console.log("LocalStorage data:", localData);

    // 2) Пробуємо зчитати з Firestore
    try {
      const docRef = doc(db, "users", user.uid, "resume", "profile");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const firestoreData = docSnap.data();
        console.log("Firestore data:", firestoreData);

        // Порівняння lastModified
        if (
          firestoreData.lastModified &&
          (!localData || firestoreData.lastModified > localData.lastModified)
        ) {
          console.log("Using Firestore data as it is newer.");
          localStorage.setItem("resumeData", JSON.stringify(firestoreData));
          return firestoreData;
        } else {
          console.log("Using local data as it is newer (or no lastModified).");
          return localData || firestoreData;
        }
      } else {
        // Немає даних у Firestore - створюємо дефолт
        console.log("No data in Firestore, using default empty object.");
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
    } catch (error) {
      console.error("Firebase error:", error);
      // Якщо помилка, повертаємо localData
      return localData;
    }
  };

  // ======================
  // 2) ФУНКЦІЯ SYNC
  // ======================
  const syncToFirestore = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.log("User not logged in, skip sync.");
      return;
    }
    const localDataStr = localStorage.getItem("resumeData");
    if (!localDataStr) return;

    const localData = JSON.parse(localDataStr);
    console.log("Sync localData => Firestore:", localData);

    try {
      const docRef = doc(db, "users", user.uid, "resume", "profile");
      await setDoc(docRef, localData, { merge: true });
      console.log("Data synced to Firestore successfully.");
    } catch (err) {
      console.error("syncToFirestore error:", err);
    }
  };

  // ======================
  // 3) ОНОВЛЕННЯ СЕКЦІЙ
  // ======================
  const updateSectionData = (sectionKey, newData) => {
    setResumeData((prev) => {
      const updated = {
        ...prev,
        [sectionKey]: newData,
        lastModified: new Date().toISOString(),
      };
      localStorage.setItem("resumeData", JSON.stringify(updated));
      console.log(`Updated ${sectionKey}`, updated);
      return updated;
    });
  };

  // ======================
  // 4) ЗМІНА СЕКЦІЇ
  // ======================
  const handleIconClick = (id) => {
    setCurrentSection(id);
  };

  // ======================
  // 5) ПЕРЕД ДРУКОМ PDF
  // ======================
  const handlePreviewPDF = async () => {
    await syncToFirestore();
    previewResumePDF();
  };
  const handleDownloadPDF = async () => {
    await syncToFirestore();
    downloadResumePDF();
  };

  // ======================
  // 6) PDF Modal
  // ======================
  const handleOpenPDFModal = () => setIsPDFModalOpen(true);
  const handleClosePDFModal = () => setIsPDFModalOpen(false);

  // ======================
  // 7) ПІД ЧАС МОНТУ
  // ======================
  useEffect(() => {
    const load = async () => {
      setIsFetching(true);
      const data = await fetchResumeData();
      if (data) setResumeData(data);
      setIsFetching(false);
    };
    load();
  }, []);

  // ======================
  // 8) ПІД ЧАС ВИХОДУ
  // ======================
  useEffect(() => {
    const handleUnload = async () => {
      await syncToFirestore();
    };
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("afterprint", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("afterprint", handleUnload);
    };
  }, []);

  if (isFetching) {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <div className={styles.loading}>Loading...</div>
        </MainLayout>
      </ThemeProvider>
    );
  }

  const CurrentSectionComponent =
    allSections[currentSection]?.component || HeaderSection;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          <StickyHeader title={allSections[currentSection].title} />

          <StaticIconBar
            sections={mainSections}
            currentSection={currentSection}
            onIconClick={handleIconClick}
          />

          <div className={styles.section}>
            <CurrentSectionComponent
              data={resumeData[allSections[currentSection].dataKey]}
              onUpdate={(newData) =>
                updateSectionData(allSections[currentSection].dataKey, newData)
              }
            />
          </div>

          <div className={styles.navButtonContainer}>
            <button
              className={styles.printButton}
              onClick={handleOpenPDFModal}
              title="Print PDF"
            >
              <FaPrint />
            </button>
          </div>

          {isLoading && <div className={styles.loading}>Loading...</div>}
        </div>

        {/* PDF Modal */}
        <PDFResumeModal isOpen={isPDFModalOpen} onClose={handleClosePDFModal} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;