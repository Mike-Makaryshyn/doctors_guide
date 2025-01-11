// src/pages/EditCasePage/EditCasePage.jsx

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./EditCasePage.module.scss";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const EditCasePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  const [myCaseInfo, setMyCaseInfo] = useState(null); // Зберігає регіон та індекс випадку

  useEffect(() => {
    const fetchCaseData = async () => {
      const { myCase } = location.state || {};
      if (!myCase || !user) {
        toast.error("Немає даних для редагування.");
        navigate("/my-cases");
        return;
      }

      setMyCaseInfo({
        region: myCase.region,
        caseIndex: myCase.caseIndex,
      });

      try {
        // Отримання актуальних даних для забезпечення консистентності
        const regionDocRef = doc(db, "cases", myCase.region);
        const regionDocSnap = await getDoc(regionDocRef);
        if (regionDocSnap.exists()) {
          const regionData = regionDocSnap.data();
          if (regionData.cases && Array.isArray(regionData.cases)) {
            const currentCase = regionData.cases[myCase.caseIndex];
            if (currentCase.authorId === user.uid) {
              setCaseData(currentCase);
            } else {
              toast.error("Ви не маєте доступу до цього випадку.");
              navigate("/my-cases");
            }
          }
        } else {
          toast.error("Регіон не знайдено.");
          navigate("/my-cases");
        }
      } catch (error) {
        console.error("Error fetching case data:", error);
        toast.error("Помилка при завантаженні даних випадку.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseData();
  }, [location.state, navigate, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (!user) {
      toast.error("Користувач не автентифікований.");
      return;
    }

    if (!myCaseInfo) {
      toast.error("Відсутня інформація про випадок.");
      return;
    }

    try {
      const regionDocRef = doc(db, "cases", myCaseInfo.region);
      const regionDocSnap = await getDoc(regionDocRef);
      if (!regionDocSnap.exists()) {
        throw new Error("Регіон не знайдено.");
      }

      const regionData = regionDocSnap.data();
      if (!regionData.cases || !Array.isArray(regionData.cases)) {
        throw new Error("Невірна структура даних.");
      }

      // Переконаємось, що випадок існує та належить користувачу
      const existingCase = regionData.cases[myCaseInfo.caseIndex];
      if (!existingCase || existingCase.authorId !== user.uid) {
        throw new Error("Випадок не знайдено або ви не маєте доступу.");
      }

      // Оновлення випадку
      const updatedCases = [...regionData.cases];
      updatedCases[myCaseInfo.caseIndex] = caseData;

      await updateDoc(regionDocRef, {
        cases: updatedCases,
      });

      toast.success("Випадок успішно оновлено!");
      navigate("/my-cases");
    } catch (error) {
      console.error("Error updating case:", error);
      toast.error(error.message || "Помилка при оновленні випадку.");
    }
  };

  if (loading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  if (!caseData) {
    return null;
  }

  return (
    <MainLayout>
 <div className={styles.container}>
      <h1>Редагувати Випадок</h1>
      <div className={styles.formGroup}>
        <label>Тема:</label>
        <input
          type="text"
          name="theme"
          value={caseData.theme || ""}
          onChange={handleChange}
          placeholder="Введіть тему..."
        />
      </div>
      <div className={styles.formGroup}>
        <label>Ім'я:</label>
        <input
          type="text"
          name="name_tab1"
          value={caseData.name_tab1 || ""}
          onChange={handleChange}
          placeholder="Введіть ім'я..."
        />
      </div>
      <div className={styles.formGroup}>
        <label>Регіон:</label>
        <input
          type="text"
          name="region"
          value={caseData.region || ""}
          onChange={handleChange}
          placeholder="Введіть регіон..."
          disabled // Якщо регіон не повинен змінюватись
        />
      </div>
      {/* Додайте інші поля відповідно до вашої структури даних */}
      <div className={styles.formGroup}>
        <label>Телефон:</label>
        <input
          type="text"
          name="phone_tab3"
          value={caseData.phone_tab3 || ""}
          onChange={handleChange}
          placeholder="Введіть телефон..."
        />
      </div>
      <div className={styles.formGroup}>
        <label>Адреса:</label>
        <input
          type="text"
          name="address_tab4"
          value={caseData.address_tab4 || ""}
          onChange={handleChange}
          placeholder="Введіть адресу..."
        />
      </div>
      <div className={styles.formGroup}>
        <label>Коментарі:</label>
        <textarea
          name="comments_tab5"
          value={caseData.comments_tab5 || ""}
          onChange={handleChange}
          placeholder="Введіть коментарі..."
        />
      </div>
      <button onClick={handleSave} className={styles.saveButton}>
        Зберегти
      </button>
      <ToastContainer />
    </div>
    </MainLayout>
   
  );
};

export default EditCasePage;