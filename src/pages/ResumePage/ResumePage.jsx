// src/pages/ResumePage/ResumePage.jsx
import React, { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./ResumePage.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeaderSection from "./HeaderSection";
import AktuellSection from "./AktuellSection";
import BerufserfahrungenSection from "./BerufserfahrungenSection";
import AusbildungSection from "./AusbildungSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";
import { addDownloadButton } from "./pdfresume";
import { FaUser, FaNewspaper, FaBriefcase, FaGraduationCap, FaLanguage, FaTools, FaFilePdf } from "react-icons/fa";
import useIsMobile from "../../hooks/useIsMobile";
import debounce from "lodash.debounce";
import { db, auth } from "../../firebase"; // Імпорт Firebase конфігурації
import { doc, setDoc, getDoc } from "firebase/firestore"; // Імпорт Firestore функцій

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
    component: () => (
      <div className={styles.pdfExportContainer}>
        <h2>Завантажити PDF</h2>
        <div id="download-resume-container"></div>
      </div>
    ),
    icon: <FaFilePdf style={{ fontSize: 40, color: "red" }} />,
  },
];

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
    // Додайте інші секції, якщо потрібно
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true); // Новий стан для відстеження завантаження даних

  // Дебаунс функції збереження
  const debouncedSave = useRef(
    debounce(async (data) => {
      setIsLoading(true);
      const user = auth.currentUser;
      if (!user) {
        console.error("Користувач не автентифікований");
        setIsLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid, "resume", "profile");
        await setDoc(docRef, data, { merge: true });
        console.log("Дані резюме успішно збережено");
      } catch (error) {
        console.error("Помилка збереження резюме:", error);
      } finally {
        setIsLoading(false);
      }
    }, 1000)
  ).current;

  // Функція для оновлення даних секції
  const updateSectionData = (sectionKey, newData) => {
    setResumeData((prevData) => {
      const updatedData = { ...prevData, [sectionKey]: newData };
      debouncedSave(updatedData); // Викликаємо збереження з дебаунсом
      return updatedData;
    });
  };

  // Функція для збереження усіх даних при навігації або завершенні
  const saveAllSectionsData = async () => {
    debouncedSave.flush(); // Викликаємо негайне збереження
  };

  const handleIconClick = async (id) => {
    if (id === currentSection) return;
    await saveAllSectionsData();
    setCurrentSection(id);

    if (id === 6) {
      setTimeout(() => {
        addDownloadButton("download-resume-container");
      }, 300);
    }
  };

  const handleNext = async () => {
    if (currentSection < sections.length - 1) {
      await saveAllSectionsData();
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
      await saveAllSectionsData();
      setCurrentSection((prev) => prev - 1);
    }
  };

  const CurrentComponent = sections[currentSection].component;

  // Додавання useEffect для завантаження даних з Firebase при монтуванні
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const user = auth.currentUser;
      if (!user) {
        console.error("Користувач не автентифікований");
        setIsFetching(false);
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid, "resume", "profile");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setResumeData(docSnap.data());
          console.log("Дані резюме завантажено з Firebase");
        } else {
          console.log("Немає даних резюме для цього користувача");
        }
      } catch (error) {
        console.error("Помилка завантаження резюме:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  if (isFetching) {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <div className={styles.loadingContainer}>
            <div className={styles.loading}>Завантаження даних...</div>
          </div>
        </MainLayout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          {/* Навігація */}
          <div
            className={styles.iconBar}
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
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
                  flex: "0 0 auto",
                  scrollSnapAlign: "center",
                }}
              >
                <div className={styles.icon}>{section.icon}</div>
                <span className={styles.iconLabel}>{section.title}</span>
              </div>
            ))}
          </div>

          {/* Поточна секція */}
          <div className={styles.section}>
            <CurrentComponent
              data={resumeData[sections[currentSection].dataKey]}
              onUpdate={(newData) =>
                updateSectionData(sections[currentSection].dataKey, newData)
              }
            />
          </div>

          {/* Кнопки навігації */}
          {currentSection > 0 && (
            <button
              onClick={handleBack}
              disabled={currentSection === 0}
              className={`${styles.navButton} ${styles.backButton}`}
            >
              Назад
            </button>
          )}
          {currentSection < sections.length - 1 && (
            <button
              onClick={handleNext}
              disabled={currentSection === sections.length - 1}
              className={`${styles.navButton} ${styles.nextButton}`}
            >
              Далі
            </button>
          )}

          {/* Відображення індикатора завантаження */}
          {isLoading && <div className={styles.loading}>Завантаження...</div>}
        </div>
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;