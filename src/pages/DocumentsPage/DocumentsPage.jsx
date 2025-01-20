// src/pages/DocumentsPage/DocumentsPage.jsx

import React, { useState, useEffect, useRef } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./DocumentsPage.module.scss";

// Імпортуємо колонки (приклад)
import { columnsFirst } from "../../constants/translation/columnsFirst";
import { columnsSecond } from "../../constants/translation/columnsSecond";

// Імпортуємо документи
import {
  documentsNonEU,
  documentsEU,
  documentsOptional,
  messages,
  titles,
} from "../../constants/translation/documents";
import { documentsSecond } from "../../constants/translation/documentsSecond";

import ResponsiveTable from "../../components/Table/ResponsiveTable";
import useIsMobile from "../../hooks/useIsMobile";
import CategoryToggle from "../../components/CategoryToggle/CategoryToggle";

const DocumentsPage = () => {
  const {
    selectedLanguage: language,
    selectedRegion,
    handleChangePage,
    user,
  } = useGetGlobalInfo();

  const combinedRef = useRef();
  const [category, setCategory] = useState("Non-EU"); // Початкове значення
  const [dynamicData, setDynamicData] = useState({
    checkboxes: {},
    progress: 0,
  });
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  let lastSavedData = {
    checkboxes: {},
    progress: 0,
  };

  // Завантажуємо дані з Firestore
  const fetchDynamicDataFromFirestore = async () => {
    if (!user) return;

    const selectionDocRef = doc(
      collection(doc(collection(db, "users"), user.uid), "userData"),
      "selectionData"
    );
    try {
      const docSnap = await getDoc(selectionDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Fetched dynamic data from Firestore:", data);

        setDynamicData({
          checkboxes: data.checkboxes || {},
          progress:
            typeof data.progress === "string"
              ? parseInt(data.progress, 10)
              : data.progress || 0,
        });
      } else {
        // Ініціалізуємо опціональні документи як виключені
        const initialCheckboxes = {};
        documentsOptional.forEach((doc) => {
          initialCheckboxes[doc.id.toString()] = { hide: true };
        });

        await setDoc(selectionDocRef, {
          checkboxes: initialCheckboxes,
          progress: 0,
        });
        setDynamicData({
          checkboxes: initialCheckboxes,
          progress: 0,
        });
      }
    } catch (error) {
      console.error("Error fetching dynamic data from Firestore:", error);
    }
  };

  // Оновлюємо Firestore
  const updateFirestoreData = async (updatedData) => {
    if (!user) return;
    if (JSON.stringify(lastSavedData) === JSON.stringify(updatedData)) return;

    const selectionDocRef = doc(
      collection(doc(collection(db, "users"), user.uid), "userData"),
      "selectionData"
    );
    try {
      await setDoc(selectionDocRef, updatedData, { merge: true });
      lastSavedData = updatedData;
      console.log("Firestore dynamic data updated:", updatedData);
    } catch (error) {
      console.error("Error updating dynamic data in Firestore:", error);
    }
  };

  // Рахуємо прогрес
  const calculateProgress = (checkboxes) => {
    let totalCheckboxes = 0;
    let checkedCheckboxes = 0;

    const combinedData = [
      ...(category === "Non-EU" ? documentsNonEU : documentsEU),
      ...documentsOptional,
      ...documentsSecond,
    ].filter((item) => !checkboxes[item.id.toString()]?.hide);

    combinedData.forEach((item) => {
      const documentId = item.id.toString();
      const docState = checkboxes[documentId] || {};

      ["is_exist", "apostile", "notary", "translation", "ready_copies", "sent"].forEach((field) => {
        if (field === "apostile" && category === "EU") return;
        if (item[field] !== undefined) {
          totalCheckboxes++;
          if (docState[field]) {
            checkedCheckboxes++;
          }
        }
      });
    });

    return totalCheckboxes === 0
      ? 0
      : Math.round((checkedCheckboxes / totalCheckboxes) * 100);
  };

  useEffect(() => {
    fetchDynamicDataFromFirestore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const newProgress = calculateProgress(dynamicData.checkboxes);
    setProgress(newProgress);
  }, [dynamicData.checkboxes, category]);

  useEffect(() => {
    const updatedData = {
      checkboxes: dynamicData.checkboxes,
      progress: progress,
    };
    updateFirestoreData(updatedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicData.checkboxes, progress]);

  const getMessage = (progressValue) => {
    if (progressValue < 20) return messages[language].lessThan20;
    if (progressValue < 50) return messages[language].between20And50;
    if (progressValue < 80) return messages[language].between50And80;
    return messages[language].greaterThan80;
  };

  const mainTitle = titles?.main?.[language] || "Main Documents";
  const optionalTitle = titles?.optional?.[language] || "Optional Documents";

  // При кліку на чекбокс
  const handleCheckboxChange = (documentId, fieldName) => {
    console.log(`Checkbox clicked: documentId=${documentId}, fieldName=${fieldName}`);
    setDynamicData((prevData) => {
      const currentDoc = prevData.checkboxes[documentId] || {};
      let newDoc;
      if (fieldName === "hide") {
        newDoc = {
          ...currentDoc,
          [fieldName]: !currentDoc[fieldName],
        };
      } else {
        newDoc = {
          ...currentDoc,
          [fieldName]: !currentDoc[fieldName],
        };
      }
      const updatedCheckboxes = {
        ...prevData.checkboxes,
        [documentId]: newDoc,
      };
      console.log("Updated checkboxes:", updatedCheckboxes);
      return {
        ...prevData,
        checkboxes: updatedCheckboxes,
      };
    });
  };

  // Ініціалізація опціональних документів як виключених
  useEffect(() => {
    if (documentsOptional.length > 0 && user) {
      const initialCheckboxes = {};
      documentsOptional.forEach((doc) => {
        if (!(doc.id.toString() in dynamicData.checkboxes)) {
          initialCheckboxes[doc.id.toString()] = { hide: true };
        }
      });

      if (Object.keys(initialCheckboxes).length > 0) {
        setDynamicData((prevData) => ({
          ...prevData,
          checkboxes: {
            ...prevData.checkboxes,
            ...initialCheckboxes,
          },
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentsOptional, user]);

  return (
    <MainLayout>
      <div className="page page1 containerBigger mt-20">
        <div className="main_menu__content">
          <div className={styles.table_wrapper}>
            {/* Переключатель категорії */}
            <CategoryToggle category={category} setCategory={setCategory} />

            {/* Прогрес-бар */}
            <div className={styles.progress_wrapper}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className={styles.progressLabel}>
                {progress}% - {getMessage(progress)}
              </div>
            </div>

            <div ref={combinedRef}>
              {selectedRegion ? (
                <>
                  {/* Основні документи */}
                  <ResponsiveTable
                    title={mainTitle}
                    columns={columnsFirst}
                    data={category === "Non-EU" ? documentsNonEU : documentsEU}
                    setTableData={() => {}}
                    selectedLanguage={language}
                    selectedRegion={selectedRegion}
                    category={category}
                    tableFor="main"
                    disableCheckboxBasedOnName={false}
                    checkboxes={dynamicData.checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    customClass={
                      category === "Non-EU" ? styles.mainTable : styles.euTable
                    }
                  />

                  {/* Друга таблиця */}
                  <ResponsiveTable
                    title={null}
                    columns={columnsSecond}
                    data={documentsSecond}
                    setTableData={() => {}}
                    selectedLanguage={language}
                    selectedRegion={selectedRegion}
                    category={category}
                    tableFor="second"
                    disableCheckboxBasedOnName={false}
                    checkboxes={dynamicData.checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    customClass={styles.secondTable}
                  />

                  {/* Опціональні документи */}
                  <ResponsiveTable
                    title={optionalTitle}
                    columns={columnsFirst}
                    data={documentsOptional}
                    setTableData={() => {}}
                    selectedLanguage={language}
                    selectedRegion={selectedRegion}
                    category={category}
                    tableFor="optional"
                    disableCheckboxBasedOnName={false}
                    checkboxes={dynamicData.checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    customClass={styles.optionalTable}
                  />
                </>
              ) : (
                <div className={styles.loadingMessage}>Завантаження регіону...</div>
              )}
            </div>
          </div>

          <button
            className="main_menu_back"
            onClick={() => handleChangePage("/main_menu")}
          >
            &#8592;
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentsPage;
