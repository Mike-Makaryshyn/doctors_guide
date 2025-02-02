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

// Ініціалізація react-modal (переконайтеся, що елемент із id="root" існує)
Modal.setAppElement("#root");

// Створення теми для MUI
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

// Повний масив секцій (остання – PDF Export)
const allSections = [
  {
    id: 0,
    title: "Persönliche Daten",
    component: HeaderSection,
    dataKey: "header",
    icon: (isActive) => (
      <Lottie
        animationData={personalIcon}
        style={{
          width: 25,
          height: 25,
          filter: isActive
            ? "invert(13%) sepia(95%) saturate(1200%) hue-rotate(190deg) brightness(90%) contrast(85%)"
            : "invert(100%)",
        }}
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
        style={{
          width: 25,
          height: 25,
          filter: isActive
            ? "invert(13%) sepia(95%) saturate(1200%) hue-rotate(190deg) brightness(90%) contrast(85%)"
            : "invert(100%)",
        }}
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
        style={{
          width: 25,
          height: 25,
          filter: isActive
            ? "invert(13%) sepia(95%) saturate(1200%) hue-rotate(190deg) brightness(90%) contrast(85%)"
            : "invert(100%)",
        }}
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
        style={{
          width: 25,
          height: 25,
          filter: isActive
            ? "invert(13%) sepia(95%) saturate(1200%) hue-rotate(190deg) brightness(90%) contrast(85%)"
            : "invert(100%)",
        }}
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
        style={{
          width: 25,
          height: 25,
          filter: isActive
            ? "invert(13%) sepia(95%) saturate(1200%) hue-rotate(190deg) brightness(90%) contrast(85%)"
            : "invert(100%)",
        }}
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
        style={{
          width: 25,
          height: 25,
          filter: isActive
            ? "invert(13%) sepia(95%) saturate(1200%) hue-rotate(190deg) brightness(90%) contrast(85%)"
            : "invert(100%)",
        }}
        autoplay={isActive}
        loop={isActive}
      />
    ),
  },
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

// Для меню використовуємо лише основні секції (без PDF Export)
const mainSections = allSections.filter((section) => section.id !== 6);

/* Компонент плаваючого заголовку (sticky header) */
const StickyHeader = ({ title }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <div className={styles.stickyHeader}>
      <h2>{title}</h2>
    </div>
  ) : null;
};

/* StaticIconBar – завжди показує всі секції у фіксованому порядку */
const StaticIconBar = ({ sections, currentSection, onIconClick }) => {
  return (
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
};

/* Головний компонент сторінки резюме */
const ResumePage = () => {
  const isMobile = useIsMobile(600);

  // Управління активною секцією
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

  // Стан завантаження
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // Стан модального вікна PDF
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  // 1) Функція fetchResumeData:
  //    - Читає з localStorage
  //    - Читає з Firestore
  //    - Порівнює lastModified
  //    - Повертає найактуальніші дані
  const fetchResumeData = async () => {
    const user = auth.currentUser;
    if (!user) return null;

    const localDataStr = localStorage.getItem("resumeData");
    let localData = localDataStr ? JSON.parse(localDataStr) : null;
    console.log("Завантажено дані з localStorage:", localData);

    try {
      const docRef = doc(db, "users", user.uid, "resume", "profile");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const firestoreData = docSnap.data();
        console.log("Завантажено дані з Firestore:", firestoreData);

        // Порівнюємо lastModified:
        if (
          firestoreData.lastModified &&
          (!localData || firestoreData.lastModified > localData.lastModified)
        ) {
          // Firestore новіші
          console.log("Дані у Firestore новіші. Оновлюємо localStorage та стан.");
          localStorage.setItem("resumeData", JSON.stringify(firestoreData));
          return firestoreData;
        } else {
          // localStorage новіші або немає lastModified у Firestore
          return localData || firestoreData;
        }
      } else {
        // Якщо в Firestore нічого немає
        console.log("Firestore: дані відсутні. Використовуємо початкову структуру.");
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
      console.error("Помилка завантаження даних з Firestore:", error);
      // У разі помилки повертаємо localData, якщо вона є:
      return localData;
    }
  };

  // 2) Функція syncToFirestore:
  //    - Зберігає поточні дані з localStorage до Firestore
  const syncToFirestore = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const localDataStr = localStorage.getItem("resumeData");
    if (!localDataStr) return;
    const data = JSON.parse(localDataStr);
    console.log("Синхронізація localStorage з Firestore. Дані:", data);

    try {
      const docRef = doc(db, "users", user.uid, "resume", "profile");
      await setDoc(docRef, data, { merge: true });
      console.log("Синхронізація завершена – дані збережено у Firestore");
    } catch (error) {
      console.error("Помилка синхронізації:", error);
    }
  };

  // 3) Оновлення певної секції резюме
  const updateSectionData = (sectionKey, newData) => {
    setResumeData((prevData) => {
      const updatedData = {
        ...prevData,
        [sectionKey]: newData,
        lastModified: new Date().toISOString(),
      };
      // Зберігаємо в localStorage
      localStorage.setItem("resumeData", JSON.stringify(updatedData));
      console.log(`Оновлено секцію "${sectionKey}". Нові дані:`, newData);
      return updatedData;
    });
  };

  // 4) При зміні секції
  const handleIconClick = (id) => {
    if (id === currentSection) return;
    console.log(`Перемикання на секцію ${id}`);
    setCurrentSection(id);
  };

  // 5) Функції для генерації PDF (Preview / Download)
  //    - Викликають syncToFirestore, щоб спочатку зберегти зміни
  const handlePreviewPDF = async () => {
    await syncToFirestore();
    previewResumePDF();
  };

  const handleDownloadPDF = async () => {
    await syncToFirestore();
    downloadResumePDF();
  };

  // 6) Відкриття/закриття PDF-модального вікна
  const handleOpenPDFModal = () => setIsPDFModalOpen(true);
  const handleClosePDFModal = () => setIsPDFModalOpen(false);

  // 7) При першому рендері завантажуємо дані
  useEffect(() => {
    const loadData = async () => {
      setIsFetching(true);
      const data = await fetchResumeData();
      if (data) {
        setResumeData(data);
      }
      setIsFetching(false);
    };
    loadData();
  }, []);

  // 8) При роздруковуванні сторінки або закритті – синхронізуємо
  useEffect(() => {
    const saveOnUnload = async () => {
      await syncToFirestore();
    };
    window.addEventListener("beforeunload", saveOnUnload);
    window.addEventListener("afterprint", saveOnUnload);
    return () => {
      window.removeEventListener("beforeunload", saveOnUnload);
      window.removeEventListener("afterprint", saveOnUnload);
    };
  }, []);

  // Якщо ще триває fetch
  if (isFetching) {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <div className={styles.loading}>Завантаження даних...</div>
        </MainLayout>
      </ThemeProvider>
    );
  }

  // Визначаємо, яку секцію зараз рендерити
  const CurrentComponent = allSections[currentSection]?.component || HeaderSection;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          {/* Плаваючий заголовок */}
          <StickyHeader title={allSections[currentSection].title} />

          {/* Статичне меню секцій */}
          <StaticIconBar
            sections={mainSections}
            currentSection={currentSection}
            onIconClick={handleIconClick}
          />

          {/* Поточна секція */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <CurrentComponent
              data={resumeData[allSections[currentSection].dataKey]}
              onUpdate={(newData) =>
                updateSectionData(allSections[currentSection].dataKey, newData)
              }
            />
          </div>

          {/* Кнопка для відкриття PDF-модального вікна */}
          <div className={styles.navButtonContainer}>
            <button
              className={styles.printButton}
              onClick={handleOpenPDFModal}
              title="Друкувати PDF"
            >
              <FaPrint />
            </button>
          </div>

          {isLoading && <div className={styles.loading}>Завантаження...</div>}
        </div>

        {/* Модальне вікно PDF */}
        <PDFResumeModal isOpen={isPDFModalOpen} onClose={handleClosePDFModal} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;