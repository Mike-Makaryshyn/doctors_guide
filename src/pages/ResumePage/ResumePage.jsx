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
import { FaUser, FaNewspaper, FaBriefcase, FaGraduationCap, FaLanguage, FaTools, FaFilePdf, FaPrint } from "react-icons/fa";
import useIsMobile from "../../hooks/useIsMobile";
import { previewResumePDF, downloadResumePDF } from "./pdfresume";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Ініціалізація react-modal (переконайтеся, що елемент з id="root" існує)
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
    icon: <FaUser style={{ fontSize: 40 }} />,
  },
  {
    id: 1,
    title: "Aktuell",
    component: AktuellSection,
    dataKey: "aktuell",
    icon: <FaNewspaper style={{ fontSize: 40 }} />,
  },
  {
    id: 2,
    title: "Berufserfahrungen",
    component: BerufserfahrungenSection,
    dataKey: "berufserfahrungen",
    icon: <FaBriefcase style={{ fontSize: 40 }} />,
  },
  {
    id: 3,
    title: "Ausbildung",
    component: AusbildungSection,
    dataKey: "ausbildung",
    icon: <FaGraduationCap style={{ fontSize: 40 }} />,
  },
  {
    id: 4,
    title: "Language Skills",
    component: LanguageSkillsSection,
    dataKey: "languageSkills",
    icon: <FaLanguage style={{ fontSize: 40 }} />,
  },
  {
    id: 5,
    title: "Technical Skills",
    component: TechnicalSkillsSection,
    dataKey: "technicalSkills",
    icon: <FaTools style={{ fontSize: 40 }} />,
  },
  {
    id: 6,
    title: "PDF Export",
    // Цю секцію не використовуємо у меню – вона викликається окремою кнопкою
    component: () => (
      <div className={styles.pdfExportContainer}>
        <h2>PDF Export</h2>
        <div id="download-resume-container"></div>
      </div>
    ),
    icon: <FaFilePdf style={{ fontSize: 40, color: "red" }} />,
  },
];

// Для меню використовуємо лише основні секції (без PDF Export)
const mainSections = allSections.filter((section) => section.id !== 6);

// Компонент плаваючого заголовку (sticky header)
const StickyHeader = ({ title }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
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

// InfiniteIconBar – обчислює порядок елементів так, щоб активна секція завжди була по центру.
const InfiniteIconBar = ({ sections, currentSection, onIconClick }) => {
  const n = sections.length; // має бути 6
  const mid = Math.floor(n / 2);
  const rotatedSections = [];
  for (let i = 0; i < n; i++) {
    rotatedSections.push(sections[(currentSection - mid + i + n) % n]);
  }
  return (
    <div className={styles.iconBar}>
      {rotatedSections.map((section, index) => {
        const isActive = index === mid;
        return (
          <div
            key={section.id}
            className={`${styles.iconContainer} ${isActive ? styles.active : styles.inactive}`}
            onClick={() => {
              const originalIndex = (currentSection - mid + index + n) % n;
              onIconClick(originalIndex);
            }}
          >
            <div className={styles.icon}>{section.icon}</div>
            <span className={styles.iconLabel}>{section.title}</span>
          </div>
        );
      })}
    </div>
  );
};

const ResumePage = () => {
  const isMobile = useIsMobile(600);
  // currentSection – індекс від 0 до 5 для mainSections
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
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  // Завантаження даних з Firestore або localStorage
  const fetchResumeData = async () => {
    const user = auth.currentUser;
    if (!user) return null;
    const localDataStr = localStorage.getItem("resumeData");
    let localData = localDataStr ? JSON.parse(localDataStr) : null;
    console.log("Завантажено дані з localStorage");
    try {
      const docRef = doc(db, "users", user.uid, "resume", "profile");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const firestoreData = docSnap.data();
        if (
          firestoreData.lastModified &&
          (!localData || firestoreData.lastModified > localData.lastModified)
        ) {
          console.log("Дані у Firestore новіші. Оновлюємо localStorage та стан.");
          localStorage.setItem("resumeData", JSON.stringify(firestoreData));
          return firestoreData;
        }
        return localData || firestoreData;
      } else {
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
        return defaultData;
      }
    } catch (error) {
      console.error("Помилка завантаження даних з Firestore:", error);
      return localData;
    }
  };

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

  const updateSectionData = (sectionKey, newData) => {
    setResumeData((prevData) => {
      const updatedData = {
        ...prevData,
        [sectionKey]: newData,
        lastModified: new Date().toISOString(),
      };
      localStorage.setItem("resumeData", JSON.stringify(updatedData));
      console.log(`Оновлено секцію "${sectionKey}". Нові дані:`, newData);
      return updatedData;
    });
  };

  const handleIconClick = (id) => {
    if (id === currentSection) return;
    console.log(
      `Перемикання на секцію ${id} (${mainSections.find((s) => s.id === id)?.title})`
    );
    setCurrentSection(id);
  };

  // Функції для генерації PDF
  const handlePreviewPDF = async () => {
    await syncToFirestore();
    previewResumePDF();
  };

  const handleDownloadPDF = async () => {
    await syncToFirestore();
    downloadResumePDF();
  };

  const handleOpenPDFModal = () => {
    setIsPDFModalOpen(true);
  };

  const handleClosePDFModal = () => {
    setIsPDFModalOpen(false);
  };

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

  if (isFetching) {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <div className={styles.loading}>Завантаження даних...</div>
        </MainLayout>
      </ThemeProvider>
    );
  }

  // Для відображення поточної секції використовуємо повний масив (allSections)
  const CurrentComponent = allSections[currentSection]?.component || HeaderSection;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          {/* Плаваючий заголовок, який з’являється при скролі */}
          <StickyHeader title={allSections[currentSection].title} />

          {/* Меню секцій з безкінечною прокруткою */}
          <InfiniteIconBar
            sections={mainSections}
            currentSection={currentSection}
            onIconClick={handleIconClick}
          />

          {/* Відображення поточної секції з ефектом плавного появлення */}
          <div className={`${styles.section} ${styles.fadeIn}`}>
            <CurrentComponent
              data={resumeData[allSections[currentSection].dataKey]}
              onUpdate={(newData) =>
                updateSectionData(allSections[currentSection].dataKey, newData)
              }
            />
          </div>

          {/* Кнопка для відкриття модального вікна PDF */}
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

        {/* Модальне вікно для PDF експорту */}
        <Modal
          isOpen={isPDFModalOpen}
          onRequestClose={handleClosePDFModal}
          contentLabel="PDF Export"
          className={pdfStyles.pdfModal}
          overlayClassName={pdfStyles.modalOverlay}
        >
          <div className={pdfStyles.modalContent}>
            <button
              onClick={handleClosePDFModal}
              className={pdfStyles.closeButton}
              title="Закрити"
            >
              &times;
            </button>
            <h2>PDF Export</h2>
            <div className={pdfStyles.pdfButtonContainer}>
              <button className={pdfStyles.pdfButton} onClick={handlePreviewPDF}>
                Preview PDF
              </button>
              <button className={pdfStyles.pdfButton} onClick={handleDownloadPDF}>
                Download PDF
              </button>
            </div>
          </div>
        </Modal>
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;