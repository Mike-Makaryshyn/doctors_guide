// src/pages/DocumentsPage/DocumentsPage.jsx

import React, { useState, useEffect, useRef } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./DocumentsPage.module.scss";

// Імпортуємо columnsFirst та columnsSecond
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

console.log("Imported documentsSecond:", documentsSecond);

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

  // Вибір категорії: "EU" або "Non-EU"
  const [category, setCategory] = useState("Non-EU"); // Початкове значення

  // Стан для динамічних даних
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

  // Видалено useReactToPrint та handlePrint

  // Завантаження динамічних даних із Firestore
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

        documentsOptional.forEach(doc => {
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

  // Збереження динамічних даних у Firestore
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

  // Обчислення прогресу
  const calculateProgress = (checkboxes, allData) => {
    let totalCheckboxes = 0;
    let checkedCheckboxes = 0;

    const combinedData = [
      ...(category === "Non-EU" ? documentsNonEU : documentsEU),
      ...documentsOptional,
      ...documentsSecond, // Додаємо documentsSecond до обчислення прогресу
    ].filter((item) => !checkboxes[item.id.toString()]?.hide);

    combinedData.forEach((item) => {
      const documentId = item.id.toString();
      const documentCheckboxes = checkboxes[documentId] || {};

      [
        "is_exist",
        "apostile",
        "notary",
        "translation",
        "ready_copies",
        "sent",
      ].forEach((field) => {
        // Для EU, поле 'apostile' не потрібно рахувати
        if (field === "apostile" && category === "EU") return;

        if (item[field] !== undefined) {
          totalCheckboxes++;
          if (documentCheckboxes[field]) {
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
    const newProgress = calculateProgress(dynamicData.checkboxes, {
      documentsNonEU,
      documentsEU,
      documentsOptional,
      documentsSecond, // Додаємо documentsSecond до обчислення прогресу
    });
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

  // Логування змін категорії та регіону
  useEffect(() => {
    console.log(`Selected Category: ${category}`);
    console.log(`Selected Region: ${selectedRegion}`);
  }, [category, selectedRegion]);

  const getMessage = (progress) => {
    if (progress < 20) return messages[language].lessThan20;
    if (progress < 50) return messages[language].between20And50;
    if (progress < 80) return messages[language].between50And80;
    return messages[language].greaterThan80;
  };

  const mainTitle = titles?.main?.[language];
  const optionalTitle = titles?.optional?.[language];

  // Функція для обробки зміни чекбоксу
  const handleCheckboxChange = (documentId, fieldName) => {
    console.log(`Checkbox clicked: documentId=${documentId}, fieldName=${fieldName}`);
    setDynamicData((prevData) => {
      const currentDoc = prevData.checkboxes[documentId] || {};
      let newDoc;

      if (fieldName === "hide") {
        // Toggle hide
        newDoc = {
          ...currentDoc,
          [fieldName]: !currentDoc[fieldName],
        };
      } else {
        // Toggle other fields
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

  // Ініціалізація опціональних документів як виключених при завантаженні
  useEffect(() => {
    if (documentsOptional.length > 0 && user) {
      const initialCheckboxes = {};

      documentsOptional.forEach(doc => {
        if (!(doc.id.toString() in dynamicData.checkboxes)) {
          initialCheckboxes[doc.id.toString()] = { hide: true };
        }
      });

      if (Object.keys(initialCheckboxes).length > 0) {
        setDynamicData(prevData => ({
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
              {/* Перевірка, чи встановлено selectedRegion */}
              {selectedRegion ? (
                <>
                  {/* Основні документи для Non-EU або EU */}
                  <ResponsiveTable
                    title={mainTitle}
                    columns={columnsFirst}
                    data={category === "Non-EU" ? documentsNonEU : documentsEU}
                    setTableData={() => {}} // Не потрібен, оскільки статичні дані не змінюються
                    selectedLanguage={language}
                    selectedRegion={selectedRegion}
                    category={category}
                    tableFor="main" // Вказуємо тип таблиці
                    disableCheckboxBasedOnName={false} // Чекбокси завжди активні
                    checkboxes={dynamicData.checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    customClass={
                      category === "Non-EU" ? styles.mainTable : styles.euTable
                    } // Додаємо кастомний клас
                  />

                  {/* ДокументиSecond Таблиця */}
                  <ResponsiveTable
                    title={null} // Якщо потрібен заголовок, додайте його
                    columns={columnsSecond} // Переконайтесь, що columnsSecond визначені
                    data={documentsSecond} // Переконайтесь, що documentsSecond визначені
                    setTableData={() => {}} // Не потрібен
                    selectedLanguage={language}
                    selectedRegion={selectedRegion}
                    category={category}
                    tableFor="second" // Вказуємо, що це друга таблиця
                    disableCheckboxBasedOnName={false}
                    checkboxes={dynamicData.checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    customClass={styles.secondTable} // Додаємо кастомний клас для другої таблиці
                  />

                  {/* Опціональні документи */}
                  <ResponsiveTable
                    title={optionalTitle}
                    columns={columnsFirst}
                    data={documentsOptional}
                    setTableData={() => {}} // Не потрібен, оскільки статичні дані не змінюються
                    selectedLanguage={language}
                    selectedRegion={selectedRegion}
                    category={category}
                    tableFor="optional" // Вказуємо, що це опціональна таблиця
                    disableCheckboxBasedOnName={false} // Чекбокси завжди активні для опціональної таблиці
                    checkboxes={dynamicData.checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    customClass={styles.optionalTable} // Додаємо кастомний клас для опціональної таблиці
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
            className={"main_menu_back"}
            onClick={() => handleChangePage("/main_menu")}
          >
            &#8592;
          </button>
          {/* Видалено кнопку Print */}
          {/* <button className={styles.printBtn} onClick={handlePrint}>
            Print
          </button> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentsPage;