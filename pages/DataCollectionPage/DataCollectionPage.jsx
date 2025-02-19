// src/pages/DataCollectionPage/DataCollectionPage.jsx

import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, auth } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import styles from "./DataCollectionPage.module.scss";

import MainLayout from "../../layouts/MainLayout/MainLayout";

import { DataSourceContext } from "../../contexts/DataSourceContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

import { v4 as uuidv4 } from "uuid"; // Для генерації унікальних ID

// Імпортуємо вкладки
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

// Імпортуємо іконки
import DatenIcon from "../../assets/DataCollectionPage/Daten.png";
import AnamneseIcon from "../../assets/DataCollectionPage/Anamnese.png";
import ArztPatientIcon from "../../assets/DataCollectionPage/ArztPatient.png";
import ArztArztIcon from "../../assets/DataCollectionPage/ArztArzt.png";
import FeedbackIcon from "../../assets/DataCollectionPage/Feedback.png";

import { useSwipeable } from 'react-swipeable';

// Імпортуємо утиліти
import { 
  serializeExaminerQuestions, 
  deserializeExaminerQuestions, 
  serializePatientQuestions, 
  deserializePatientQuestions 
} from "./utils";

const LOCAL_STORAGE_KEY_DATA = "dataCollectionLocalData";
const LOCAL_STORAGE_KEY_INCLUDED_TAB2 = "dataCollectionIncludedFieldsTab2";
const LOCAL_STORAGE_KEY_REGION_INCLUSION = "isRegionIncluded";

const DataCollectionPage = () => {
  const { dataSources } = useContext(DataSourceContext);
  const { selectedRegion: globalRegion } = useGetGlobalInfo();

  // Отримуємо дані користувача (припускаючи, що userData доступні через контекст або іншим способом)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  // Стан для збереження значень полів
  const [localData, setLocalData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY_DATA);
    return savedData ? JSON.parse(savedData) : {};
  });

  // Стан для відстеження, які поля у другій вкладці включені (за замовчуванням включені)
  const [includedFieldsTab2, setIncludedFieldsTab2] = useState(() => {
    const savedIncluded = localStorage.getItem(LOCAL_STORAGE_KEY_INCLUDED_TAB2);
    return savedIncluded
      ? JSON.parse(savedIncluded)
      : {
          name: true,
          surname: true,
          birthdate: true,
          age: true,
          weight: true,
          height: true,
          gender: true,
          visitReason: true,
        };
  });

  const [selectedRegion, setSelectedRegion] = useState(globalRegion || "");
  const [activeTab, setActiveTab] = useState(1); // Початкова активна вкладка - 1

  // Стан для контролю включення/виключення поля вибору регіону
  const [isRegionIncluded, setIsRegionIncluded] = useState(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY_REGION_INCLUSION);
    return savedState ? JSON.parse(savedState) : true; // За замовчуванням включено
  });

  useEffect(() => {
    if (globalRegion && globalRegion !== selectedRegion) {
      setSelectedRegion(globalRegion);
      updateLocalData({ region: globalRegion });
    }
  }, [globalRegion]);

  // Функція для оновлення локальних даних
  const updateLocalData = (newData) => {
    setLocalData((prevData) => {
      const updatedData = {
        ...prevData,
        ...newData,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(updatedData));
      console.log("Updated localData:", updatedData);
      return updatedData;
    });
  };

  // Функція для оновлення включених полів у другій вкладці
  const updateIncludedFieldsTab2 = (field, isIncluded) => {
    setIncludedFieldsTab2((prevIncluded) => {
      const updatedIncluded = {
        ...prevIncluded,
        [field]: isIncluded,
      };
      localStorage.setItem(
        LOCAL_STORAGE_KEY_INCLUDED_TAB2,
        JSON.stringify(updatedIncluded)
      );
      console.log("Updated includedFieldsTab2:", updatedIncluded);
      // Якщо поле виключено, видаляємо його значення з localData
      if (!isIncluded) {
        const { [field]: _, ...rest } = localData;
        setLocalData(rest);
        localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(rest));
      }
      return updatedIncluded;
    });
  };

  // Функція для включення/виключення поля вибору регіону
  const toggleRegionInclusion = () => {
    setIsRegionIncluded((prev) => {
      const newState = !prev;
      localStorage.setItem(
        LOCAL_STORAGE_KEY_REGION_INCLUSION,
        JSON.stringify(newState)
      );
      // Якщо виключаємо, видаляємо поле з localData
      if (!newState) {
        const { region, ...rest } = localData;
        setLocalData(rest);
        localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(rest));
      }
      return newState;
    });
  };

  // Функція для включення/виключення конкретного поля у вкладці 2
  const toggleFieldInclusionTab2 = (field) => {
    updateIncludedFieldsTab2(field, !includedFieldsTab2[field]);
  };

  // Функція для збереження даних до Firebase
  const saveAllToFirebase = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Користувач не автентифікований.");
      }

      if (isRegionIncluded && !selectedRegion) {
        throw new Error("Регіон не обрано. Будь ласка, виберіть регіон перед збереженням.");
      }

      // Визначаємо обов'язкові поля для перевірки
      const requiredFields = isRegionIncluded ? ["name_tab1", "region"] : ["name_tab1"];

      for (let field of requiredFields) {
        if (!localData[field]) {
          throw new Error(`Поле "${field}" є обов'язковим.`);
        }
      }

      // Визначаємо документ для збереження
      const docRef = doc(db, "cases", selectedRegion || "default_region"); // Використовується "default_region", якщо регіон виключено

      // Створюємо об'єкт для збереження, включаючи лише заповнені поля
      let newCase = {
        id: uuidv4(), // Використання UUID для унікального ID
        authorId: user.uid,
      };

      // Вкладка 1
      if (localData.name_tab1) newCase.name_tab1 = localData.name_tab1;
      if (isRegionIncluded && selectedRegion) newCase.region = selectedRegion;

      // Вкладка 2 (Серіалізуємо examinerQuestions)
      if (localData.examinerQuestions && Array.isArray(localData.examinerQuestions)) {
        newCase.examinerQuestions = serializeExaminerQuestions(localData.examinerQuestions);
      }

      // Вкладка 3 (Серіалізуємо patientQuestions)
      if (localData.patientQuestions && Array.isArray(localData.patientQuestions)) {
        newCase.patientQuestions = serializePatientQuestions(localData.patientQuestions);
      }

      // Додаткове Поле FullName (оновлено формат)
      const fullName = `${localData.theme} by ${userData.firstName}`;
      newCase.fullName = fullName;

      // Вкладки 3-5
      const fieldsTabs3to5 = {
        phone_tab3: "phone_tab3",
        address_tab4: "address_tab4",
        comments_tab5: "comments_tab5",
      };

      Object.keys(fieldsTabs3to5).forEach((field) => {
        if (localData[field]) {
          newCase[field] = localData[field];
        }
      });

      // Якщо у вас є додаткові поля у вкладках 3-5, додайте їх тут аналогічним чином.

      console.log("New Case to Save:", newCase);
      console.log("Local Data:", localData);
      console.log("Included Fields Tab2:", includedFieldsTab2);

      await updateDoc(docRef, {
        cases: arrayUnion(newCase),
      });

      // Очищуємо дані після успішного збереження
      if (isRegionIncluded) {
        setLocalData({ region: selectedRegion });
        localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify({ region: selectedRegion }));
      } else {
        setLocalData({});
        localStorage.removeItem(LOCAL_STORAGE_KEY_DATA);
      }

      setIncludedFieldsTab2({
        name: true,
        surname: true,
        birthdate: true,
        age: true,
        weight: true,
        height: true,
        gender: true,
        visitReason: true,
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEY_INCLUDED_TAB2,
        JSON.stringify({
          name: true,
          surname: true,
          birthdate: true,
          age: true,
          weight: true,
          height: true,
          gender: true,
          visitReason: true,
        })
      );

      setIsRegionIncluded(true);
      localStorage.setItem(
        LOCAL_STORAGE_KEY_REGION_INCLUSION,
        JSON.stringify(true)
      );

      toast.success("Всі дані успішно збережено!");
    } catch (error) {
      console.error("Помилка при збереженні даних до Firebase:", error);
      toast.error(error.message || "Сталася помилка при збереженні даних.");
    }
  };

  // Функція для зміни регіону
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    updateLocalData({ region });
  };

  // Функція для рендерингу полів залежно від активної вкладки
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <Tab1
            selectedRegion={selectedRegion}
            handleRegionChange={handleRegionChange}
            isRegionIncluded={isRegionIncluded}
            toggleRegionInclusion={toggleRegionInclusion}
            dataSources={dataSources}
            localData={localData}
            updateLocalData={updateLocalData}
          />
        );
      case 2:
        return (
          <Tab2
            localData={localData}
            updateLocalData={updateLocalData}
            includedFields={includedFieldsTab2}
            toggleField={toggleFieldInclusionTab2}
          />
        );
      case 3:
        return <Tab3 localData={localData} updateLocalData={updateLocalData} />;
      case 4:
        return <Tab4 localData={localData} updateLocalData={updateLocalData} />;
      case 5:
        return <Tab5 localData={localData} updateLocalData={updateLocalData} />;
      default:
        return null;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeTab < 5) setActiveTab(activeTab + 1);
    },
    onSwipedRight: () => {
      if (activeTab > 1) setActiveTab(activeTab - 1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Десеріалізація examinerQuestions та patientQuestions при завантаженні даних з localStorage
  useEffect(() => {
    const updatedData = { ...localData };
    let shouldUpdate = false;

    if (updatedData.examinerQuestions && typeof updatedData.examinerQuestions === "string") {
      updatedData.examinerQuestions = deserializeExaminerQuestions(updatedData.examinerQuestions);
      shouldUpdate = true;
    }

    if (updatedData.patientQuestions && typeof updatedData.patientQuestions === "string") {
      updatedData.patientQuestions = deserializePatientQuestions(updatedData.patientQuestions);
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      setLocalData(updatedData);
      localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(updatedData));
    }
  }, []); // Виконується лише один раз при завантаженні компонента

  return (
    <MainLayout>
      <div className={styles.container} {...handlers}>
        <ToastContainer />

        {/* Вкладки */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === 1 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            <img src={DatenIcon} alt="Daten" />
            <span>Daten</span>
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 2 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(2)}
          >
            <img src={AnamneseIcon} alt="Anamnese" />
            <span>Anamnese</span>
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 3 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(3)}
          >
            <img src={ArztPatientIcon} alt="Arzt-Patient Gespräch" />
            <span>Arzt-Patient</span>
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 4 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(4)}
          >
            <img src={ArztArztIcon} alt="Arzt-Arzt Gespräch" />
            <span>Arzt-Arzt</span>
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 5 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(5)}
          >
            <img src={FeedbackIcon} alt="Feedback" />
            <span>Feedback</span>
          </button>
        </div>

        {/* Вміст поточної вкладки */}
        <div className={styles.tabContent}>{renderTabContent()}</div>

        {/* Кнопка для збереження даних */}
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