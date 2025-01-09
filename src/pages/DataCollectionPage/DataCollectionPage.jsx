import React, { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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

const sections = [
  { id: 0, title: "Організаційні дані", icon: OrganizationalDataIcon, component: OrganizationalDataSection },
  { id: 1, title: "Дані екзамену", icon: ExamDataIcon, component: ExamDataSection },
  { id: 2, title: "Запитання пацієнта", icon: PatientQuestionsIcon, component: PatientQuestionsSection },
  { id: 3, title: "Запитання екзаменатора", icon: ExaminerQuestionsIcon, component: ExaminerQuestionsSection },
  { id: 4, title: "Відгук", icon: FeedbackIcon, component: FeedbackSection },
];

const LOCAL_STORAGE_KEY = "dataCollectionLocalData";

const DataCollectionPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [localData, setLocalData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {};
  });

  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );

  const updateLocalData = (sectionTitle, data) => {
    setLocalData((prevData) => {
      const updatedData = { ...prevData, [sectionTitle]: data };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const saveCurrentSectionData = async () => {
    const currentRef = sectionRefs.current[currentSection];
    if (currentRef?.current?.saveData) {
      const sectionData = await currentRef.current.saveData();
      updateLocalData(sections[currentSection].title, sectionData);
    }
  };

  const restoreSectionData = () => {
    const currentRef = sectionRefs.current[currentSection];
    if (currentRef?.current?.setData) {
      currentRef.current.setData(localData[sections[currentSection].title] || {});
    }
  };

  const fetchLastID = async () => {
    try {
      const configDoc = doc(db, "config", "lastID");
      const docSnap = await getDoc(configDoc);
      if (docSnap.exists()) {
        return docSnap.data().lastID || 1000;
      } else {
        // Якщо документ не існує, створюємо його
        await setDoc(configDoc, { lastID: 1000 });
        return 1000;
      }
    } catch (error) {
      console.error("Помилка при отриманні lastID:", error);
      throw new Error("Не вдалося отримати lastID.");
    }
  };

  const updateLastID = async (newLastID) => {
    try {
      const configDoc = doc(db, "config", "lastID");
      await updateDoc(configDoc, { lastID: newLastID });
    } catch (error) {
      console.error("Помилка при оновленні lastID:", error);
      throw new Error("Не вдалося оновити lastID.");
    }
  };

  const saveAllToFirebase = async () => {
    try {
      const lastID = await fetchLastID();
      let newID = lastID;

      for (const sectionTitle in localData) {
        const sectionData = localData[sectionTitle];

        // Призначаємо новий ID
        newID += 1;
        const dataToSave = {
          ...sectionData,
          id: newID, // Унікальний ID
        };

        const regionKey = "Bayern"; // Пример региона, можно сделать динамическим
        const docRef = doc(db, "cases", regionKey);

        const docSnap = await getDoc(docRef);
        let existingData = [];

        if (docSnap.exists()) {
          existingData = docSnap.data().cases || [];
        }

        await setDoc(docRef, {
          cases: [...existingData, dataToSave],
        }, { merge: true });

        toast.success(`Дані секції "${sectionTitle}" збережено!`);
      }

      // Оновлюємо останній ID у Firestore
      await updateLastID(newID);
    } catch (error) {
      console.error("Помилка при збереженні даних до Firebase:", error);
      toast.error("Сталася помилка при збереженні даних.");
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

  useEffect(() => {
    restoreSectionData();
  }, [currentSection]);

  const CurrentComponent = sections[currentSection].component;

  return (
    <MainLayout>
      <div className={styles.container}>
        <ToastContainer />
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

        <div className={styles.section}>
          <CurrentComponent
            ref={sectionRefs.current[currentSection]}
            onUpdateData={(data) => updateLocalData(sections[currentSection].title, data)}
          />
        </div>

        <div className={styles.navigationButtons}>
          <button onClick={handleBack} disabled={currentSection === 0}>
            Назад
          </button>
          <button onClick={handleNext} disabled={currentSection === sections.length - 1}>
            Далі
          </button>
        </div>

        <div className={styles.saveButtonContainer}>
          <button onClick={saveAllToFirebase} className={styles.saveButton}>
            Зберегти всі дані
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataCollectionPage;