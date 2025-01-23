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
import { notNeededText } from "../../constants/translation/documents";
import ResponsiveTable from "../../components/Table/ResponsiveTable";
import useIsMobile from "../../hooks/useIsMobile";
import CategoryToggle from "../../components/CategoryToggle/CategoryToggle";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ProgressBarWithTooltip = ({ progress, getMessage }) => {
  return (
    <div className={styles.progressContainer}>
      <Tippy
        content={getMessage(progress)}
        animation="scale"
        arrow={true}
        theme="custom"
        trigger="click"
        interactive={true}
        hideOnClick={true}
        placement="top"
        flip={true} // Автоматичне розміщення при обмеженому просторі
        popperOptions={{
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                boundary: "window", // Не виходити за межі вікна
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom", "right", "left"], // Позиції для заміни
              },
            },
          ],
        }}
      >
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}>
            <span className={styles.progressText}>{progress}%</span>
          </div>
        </div>
      </Tippy>
    </div>
  );
};
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

  const [lastSavedData, setLastSavedData] = useState({
    checkboxes: {},
    progress: 0,
  });

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
      setLastSavedData(updatedData);
      console.log("Firestore dynamic data updated:", updatedData);
    } catch (error) {
      console.error("Error updating dynamic data in Firestore:", error);
    }
  };

  // Рахуємо прогрес
  const calculateProgress = (checkboxes, language) => {
    let totalCheckboxes = 0;
    let checkedCheckboxes = 0;
  
    // Отримуємо список документів та виключаємо приховані з розрахунку
    const combinedData = [
      ...(category === "Non-EU" ? documentsNonEU : documentsEU),
      ...documentsSecond,
      ...documentsOptional,
    ].filter((item) => {
      const docState = checkboxes[item.id.toString()];
      return !(docState && docState.hide); // Враховуємо лише видимі документи
    });
  
    combinedData.forEach((item) => {
      const documentId = item.id.toString();
      const docState = checkboxes[documentId] || {};
  
      // Поля для перевірки
      const fieldsToCheck = [
        "is_exist",
        "notary",
        "translation",
        "ready_copies",
        "sent",
        ...(category === "EU" ? [] : ["apostile"]),
      ];
  
      fieldsToCheck.forEach((field) => {
        const fieldValue = item[field];
  
        // Перевіряємо, чи поле має значення "не потрібно" для поточної мови
        const notNeeded = notNeededText[language] || notNeededText["en"];
  
        if (fieldValue !== undefined && fieldValue !== notNeeded) {
          totalCheckboxes++;
          if (docState[field] === true) {
            checkedCheckboxes++;
          }
        }
      });
    });
  
    return totalCheckboxes === 0 ? 0 : Math.round((checkedCheckboxes / totalCheckboxes) * 100);
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
    console.log(
      `Checkbox clicked: documentId=${documentId}, fieldName=${fieldName}`
    );
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
            <ProgressBarWithTooltip
              progress={progress}
              getMessage={getMessage}
            />

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
                <div className={styles.loadingMessage}>
                  Завантаження регіону...
                </div>
              )}
            </div>
          </div>

          <button
            className={styles.backButton}
            onClick={() => handleChangePage("/main_menu")}
          >
            &#8592; Назад
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

// Додавання PropTypes для валідації пропсів
DocumentsPage.propTypes = {
  // Якщо DocumentsPage має пропси, додайте їх тут
};

export default DocumentsPage;
