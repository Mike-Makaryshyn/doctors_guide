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
import Tile from "../../components/Table/Tile";
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
  const [displayedProgress, setDisplayedProgress] = useState(0); // Новий стан
  const isMobile = useIsMobile();

  const [lastSavedData, setLastSavedData] = useState({
    checkboxes: {},
    progress: 0,
  });

  const isInitialLoad = useRef(true); // Додано флаг

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

    // Отримуємо список документів, включаючи включені опціональні
    const combinedData = [
      ...(category === "Non-EU" ? documentsNonEU : documentsEU),
      ...documentsSecond,
      ...documentsOptional.filter((doc) => {
        const docState = checkboxes[doc.id.toString()];
        return !(docState && docState.hide);
      }),
    ];

    combinedData.forEach((item) => {
      const documentId = item.id.toString();
      const docState = checkboxes[documentId] || {};

      let fieldsToCheck = [
        "is_exist",
        "notary",
        "translation",
        "ready_copies",
        "sent",
        ...(category === "EU" ? [] : ["apostile"]),
      ];

      // Якщо документ має особливі умови (наприклад, два чекбокси), визначте це тут
      const isSpecialDocument = item.id === 17; // ROV-17 має id 17
      if (isSpecialDocument) {
        // Визначаємо окремі поля для ROV-17
        fieldsToCheck = ["is_exist", "sent"]; // Замініть на реальні назви полів для ROV-17
      }

      fieldsToCheck.forEach((field) => {
        let fieldValue = item[field];

        // Якщо fieldValue є об'єктом, витягуємо значення для поточної мови
        if (typeof fieldValue === "object" && fieldValue !== null) {
          fieldValue = fieldValue[language] || fieldValue["en"] || "";
        }

        // Перевіряємо, чи поле має значення "не потрібно" для поточної мови
        const notNeeded = notNeededText[language] || notNeededText["en"] || "";

        if (fieldValue !== undefined && fieldValue !== notNeeded) {
          totalCheckboxes++;
          if (docState[field] === true) {
            // Якщо поле потрібно і чекбокс відмічений
            checkedCheckboxes++;
            console.log(`Field ${field} is needed and checked.`);
          } else {
            console.log(`Field ${field} is needed but not checked.`);
          }
        } else if (fieldValue === notNeeded) {
          console.log(
            `Field ${field} is marked as not needed and excluded from progress.`
          );
        }
      });

      // Якщо документ має спеціальні умови для прогресу
      if (isSpecialDocument) {
        // Немає додаткових полів для ROV-17, тому можна залишити порожнім або додати специфічну логіку
      }
    });

    console.log(
      `Total Checkboxes: ${totalCheckboxes}, Checked Checkboxes: ${checkedCheckboxes}`
    );

    return totalCheckboxes === 0
      ? 0
      : Math.round((checkedCheckboxes / totalCheckboxes) * 100);
  };

  useEffect(() => {
    fetchDynamicDataFromFirestore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const newProgress = calculateProgress(dynamicData.checkboxes, language);
    setProgress(newProgress);
  }, [dynamicData.checkboxes, category, language]);

  useEffect(() => {
    const updatedData = {
      checkboxes: dynamicData.checkboxes,
      progress: progress,
    };
    updateFirestoreData(updatedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicData.checkboxes, progress]);

  // Новий useEffect для управління displayedProgress з флагом
  useEffect(() => {
    if (isInitialLoad.current) {
      // Початкове завантаження: анімуємо від 0 до фактичного прогресу
      setDisplayedProgress(0);
      const timer = setTimeout(() => {
        setDisplayedProgress(progress);
        isInitialLoad.current = false; // Встановлюємо флаг після першої анімації
      }, 500); // Затримка 500 мс, можна змінити за потребою

      return () => clearTimeout(timer);
    } else {
      // Після початкового завантаження: анімуємо від попереднього до нового значення
      setDisplayedProgress(progress);
    }
  }, [progress]);

  const getMessage = (progressValue) => {
    if (progressValue < 20) return messages[language].lessThan20;
    if (progressValue < 50) return messages[language].between20And50;
    if (progressValue < 80) return messages[language].between50And80;
    return messages[language].greaterThan80;
  };

  const mainTitle = titles?.main?.[language] || "Main Documents";
  const optionalTitle = titles?.optional?.[language] || "Optional Documents";

  // Функція для отримання включених опціональних документів
  const getIncludedOptionalDocuments = () => {
    return documentsOptional.filter((doc) => {
      return !dynamicData.checkboxes[doc.id.toString()]?.hide;
    });
  };

  // Функція для отримання виключених опціональних документів
  const getExcludedOptionalDocuments = () => {
    return documentsOptional.filter((doc) => {
      return dynamicData.checkboxes[doc.id.toString()]?.hide;
    });
  };

  // При кліку на чекбокс
  const updateCheckboxState = (checkboxes, documentId, fieldName) => {
    const currentDoc = checkboxes[documentId] || {};
    return {
      ...checkboxes,
      [documentId]: {
        ...currentDoc,
        [fieldName]: !currentDoc[fieldName],
      },
    };
  };
  
  const handleCheckboxChange = (documentId, fieldName) => {
    setDynamicData((prevData) => {
      const updatedCheckboxes = {
        ...prevData.checkboxes,
        [documentId]: {
          ...prevData.checkboxes[documentId],
          [fieldName]: !prevData.checkboxes[documentId]?.[fieldName],
        },
      };
  
      console.log(`Тогл документа ${documentId}, поле: ${fieldName}, новий стан:`, updatedCheckboxes[documentId]);
  
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
          // Якщо потрібно встановити всі поля як "not needed", встановіть відповідні значення
          // Наприклад:
          // initialCheckboxes[doc.id.toString()] = { is_exist: false, notary: false, ... };
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

  // Фільтрація колонок для опціональної таблиці
  const getOptionalColumns = () => {
    // Визначте список колонок, які не повинні відображатися в опціональній таблиці
    const excludedColumns = ["is_exist", "apostile"]; // Додайте інші, якщо потрібно

    return columnsFirst.filter((col) => !excludedColumns.includes(col.name));
  };

  return (
    <MainLayout>
      <div className="page page1 containerBigger mt-20">
        <div className="main_menu__content">
          <div className={styles.table_wrapper}>
            {/* Переключатель категорії */}
            <CategoryToggle category={category} setCategory={setCategory} />

            {/* Прогрес-бар */}
            <ProgressBarWithTooltip
              progress={displayedProgress} // Використовуйте displayedProgress
              getMessage={getMessage}
            />

            <div ref={combinedRef}>
              {selectedRegion ? (
                <>
                  {/* Основні документи + Включені опціональні документи */}
                  <ResponsiveTable
                    title={mainTitle}
                    columns={columnsFirst}
                    data={[
                      ...(category === "Non-EU" ? documentsNonEU : documentsEU),
                      ...getIncludedOptionalDocuments(), // Додаємо включені опціональні документи
                    ]}
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
                    isMobile={isMobile} // Передаємо isMobile
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
                    isMobile={isMobile} // Передаємо isMobile
                  />

                  {/* Відображення виключених опціональних документів як плиток */}
                  <div className={styles.tileSection}>
                    <h2 className={styles.optionalTitleHeader}>
                      {optionalTitle}
                    </h2>
                    <div className={styles.tileContainer}>
                      {getExcludedOptionalDocuments().map((row) => (
                        <Tile
                        key={`tile-${row.id}`}
                        row={row}
                        columns={getOptionalColumns()}
                        category={category}
                        selectedLanguage={language}
                        selectedRegion={selectedRegion}
                        tableFor="optional"
                        checkboxes={dynamicData.checkboxes}
                        handleCheckboxChange={handleCheckboxChange}
                        disableCheckboxBasedOnName={false}
                        isMobile={isMobile}
                      />
                      ))}
                    </div>
                  </div>
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
