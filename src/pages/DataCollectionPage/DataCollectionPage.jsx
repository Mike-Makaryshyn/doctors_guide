// src/pages/DataCollectionPage/DataCollectionPage.jsx

import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../../supabaseClient";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./DataCollectionPage.module.scss";

import MainLayout from "../../layouts/MainLayout/MainLayout";

import { DataSourceContext } from "../../contexts/DataSourceContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

import { v4 as uuidv4 } from "uuid";

// Імпортуємо вкладки
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

// Імпортуємо іконки (відносні шляхи до папки assets)
import DatenIcon from "../../assets/asket_daten.png";
import AnamneseIcon from "../../assets/asket_anamnese.png";
import ArztPatientIcon from "../../assets/asket_arzt_patient.png";
import ArztArztIcon from "../../assets/asket_arzt_arzt.png";
import FeedbackIcon from "../../assets/asket_feedback.png";
import { FaSave, FaArrowLeft } from "react-icons/fa";

import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // Отримуємо дані користувача з контексту
  const { currentUser, userData } = useAuth();

  // Стан для збереження значень полів
  const [localData, setLocalData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY_DATA);
    return savedData ? JSON.parse(savedData) : {};
  });

  // Стан для відстеження, які поля у другій вкладці включені
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
  const [activeTab, setActiveTab] = useState(1);

  // Стан для контролю поля вибору регіону
  const [isRegionIncluded, setIsRegionIncluded] = useState(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY_REGION_INCLUSION);
    return savedState ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    if (globalRegion && globalRegion !== selectedRegion) {
      setSelectedRegion(globalRegion);
      updateLocalData({ region: globalRegion });
    }
  }, [globalRegion]);

  // Оновлення локальних даних
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

  // Оновлення включених полів у другій вкладці
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
      // Якщо поле виключено, видаляємо його значення
      if (!isIncluded) {
        const { [field]: _, ...rest } = localData;
        setLocalData(rest);
        localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(rest));
      }
      return updatedIncluded;
    });
  };

  // Включення/виключення поля вибору регіону
  const toggleRegionInclusion = () => {
    setIsRegionIncluded((prev) => {
      const newState = !prev;
      localStorage.setItem(
        LOCAL_STORAGE_KEY_REGION_INCLUSION,
        JSON.stringify(newState)
      );
      if (!newState) {
        const { region, ...rest } = localData;
        setLocalData(rest);
        localStorage.setItem(LOCAL_STORAGE_KEY_DATA, JSON.stringify(rest));
      }
      return newState;
    });
  };

  // Тогл поля у вкладці 2
  const toggleFieldInclusionTab2 = (field) => {
    updateIncludedFieldsTab2(field, !includedFieldsTab2[field]);
  };

  // Збереження даних до Supabase
  const saveAllToSupabase = async () => {
    try {
      if (!currentUser) {
        throw new Error("Користувач не автентифікований.");
      }

      if (isRegionIncluded && !selectedRegion) {
        throw new Error("Регіон не обрано. Будь ласка, виберіть регіон перед збереженням.");
      }

      // Обов'язкові поля
      const requiredFields = isRegionIncluded ? ["name_tab1", "region"] : ["name_tab1"];
      for (let field of requiredFields) {
        if (!localData[field]) {
          throw new Error(`Поле "${field}" є обов'язковим.`);
        }
      }

      let newCase = {
        id: uuidv4(),
        authorId: currentUser.id,
      };

      // Вкладка 1
      if (localData.name_tab1) newCase.name_tab1 = localData.name_tab1;
      if (isRegionIncluded && selectedRegion) newCase.region = selectedRegion;

      // Вкладка 2
      if (localData.examinerQuestions && Array.isArray(localData.examinerQuestions)) {
        newCase.examinerQuestions = serializeExaminerQuestions(localData.examinerQuestions);
      }

      // Вкладка 3
      if (localData.patientQuestions && Array.isArray(localData.patientQuestions)) {
        newCase.patientQuestions = serializePatientQuestions(localData.patientQuestions);
      }

      // Додаткове поле FullName
      const fullName = `${localData.theme} by ${userData?.firstName || ""}`;
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

      console.log("New Case to Save:", newCase);
      console.log("Local Data:", localData);
      console.log("Included Fields Tab2:", includedFieldsTab2);

      // Upsert the region record with a new case appended
      const { data: existing, error: selectError } = await supabase
        .from('cases')
        .select('cases')
        .eq('id', selectedRegion)
        .single();
      if (selectError && selectError.code !== 'PGRST116') throw selectError;
      const updatedCases = (existing?.cases || []).concat(newCase);

      const { error: updateError } = await supabase
        .from('cases')
        .upsert({ id: selectedRegion, cases: updatedCases }, { onConflict: 'id' });
      if (updateError) throw updateError;

      // Очищення даних
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
      console.error("Помилка при збереженні даних до Supabase:", error);
      toast.error(error.message || "Сталася помилка при збереженні даних.");
    }
  };

  // Кнопка збереження
  const handleSaveButtonClick = () => {
    if (window.confirm("Ви дійсно хочете зберегти всі дані?")) {
      saveAllToSupabase();
    }
  };

  // Зміна регіону
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    updateLocalData({ region });
  };

  // Рендеринг контенту вкладок
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

  // Свайпи
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

  // Десеріалізація
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
  }, []);

  return (
    <MainLayout>
      <div className={styles.container} {...handlers}>
        <ToastContainer />

        {/* Коло + назва в окремому обгортанні */}
        <div className={styles.tabMenuContainer} {...handlers}>
          {[
            { id: 1, title: "Daten", image: DatenIcon },
            { id: 2, title: "Anamnese", image: AnamneseIcon },
            { id: 3, title: "Arzt-Patient", image: ArztPatientIcon },
            { id: 4, title: "Arzt-Arzt", image: ArztArztIcon },
            { id: 5, title: "Feedback", image: FeedbackIcon }
          ].map((tab) => (
            <div key={tab.id} className={styles.tabCircleWrapper}>
              <div
                className={`${styles.tabCircle} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
                data-tab-id={tab.id}
              >
                <img src={tab.image} alt={tab.title} />
              </div>
              {/* Текст під колом */}
              <span className={styles.tabTitle}>{tab.title}</span>
            </div>
          ))}
        </div>

        {/* Вміст поточної вкладки */}
        <div className={styles.tabContent}>{renderTabContent()}</div>
      </div>

      {/* Кнопка BackMenu */}
      <div className={styles.main_menu_back}>
        <button onClick={() => navigate(-1)} className={styles.main_menu_back}>
          &#8592;
        </button>
      </div>

      {/* Кнопка збереження */}
      <div className={styles.bottomRightSave}>
        <button onClick={handleSaveButtonClick} className={styles.saveButtonNew}>
          <FaSave />
        </button>
      </div>
    </MainLayout>
  );
};

export default DataCollectionPage;