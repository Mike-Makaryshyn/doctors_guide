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
  const user = auth.currentUser;

  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myCaseInfo, setMyCaseInfo] = useState(null);

  useEffect(() => {
    const fetchCaseData = async () => {
      const { myCase } = location.state || {};
      if (!myCase || !user) {
        toast.error("Немає даних для редагування.");
        // Якщо немає даних, переходимо на CasesListPage
        navigate("/cases");
        return;
      }

      // Якщо у вас була логіка caseIndex, можна лишити; інакше беремо id
      setMyCaseInfo({
        region: myCase.region,
        caseIndex: myCase.caseIndex,
      });

      try {
        // Беремо актуальні дані кейсу з Firestore (щоби не було конфліктів)
        const regionDocRef = doc(db, "cases", myCase.region);
        const regionDocSnap = await getDoc(regionDocRef);
        if (!regionDocSnap.exists()) {
          toast.error("Регіон не знайдено.");
          navigate("/cases");
          return;
        }
        const regionData = regionDocSnap.data();
        if (!regionData.cases || !Array.isArray(regionData.cases)) {
          toast.error("Невірна структура даних у регіоні.");
          navigate("/cases");
          return;
        }

        const existingCase = regionData.cases[myCase.caseIndex];
        if (!existingCase) {
          toast.error("Випадок не знайдено у цьому регіоні.");
          navigate("/cases");
          return;
        }

        if (existingCase.authorId !== user.uid) {
          toast.error("Ви не маєте доступу до цього випадку.");
          navigate("/cases");
          return;
        }

        setCaseData(existingCase);
      } catch (err) {
        console.error("Error fetching case data:", err);
        toast.error("Помилка при завантаженні даних випадку.");
        navigate("/cases");
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
      toast.error("Відсутня інформація про кейс.");
      return;
    }
    try {
      const { region, caseIndex } = myCaseInfo;
      const regionDocRef = doc(db, "cases", region);
      const regionDocSnap = await getDoc(regionDocRef);
      if (!regionDocSnap.exists()) {
        throw new Error("Регіон не знайдено.");
      }
      const regionData = regionDocSnap.data();
      if (!regionData.cases || !Array.isArray(regionData.cases)) {
        throw new Error("Невірна структура даних у regionData.");
      }
      if (!regionData.cases[caseIndex]) {
        throw new Error("Випадок не знайдено за вказаним індексом.");
      }
      const oldCase = regionData.cases[caseIndex];
      if (oldCase.authorId !== user.uid) {
        throw new Error("Випадок належить іншому користувачу.");
      }

      // Оновлюємо
      const updatedCases = [...regionData.cases];
      updatedCases[caseIndex] = { ...caseData };

      await updateDoc(regionDocRef, { cases: updatedCases });
      toast.success("Випадок успішно оновлено!");

      // Тут важливо: вертаємось на `/cases` і активуємо вкладку "myCases"
      // Робимо це через localStorage і navigate:
      localStorage.setItem("activeMenu", "myCases");
      navigate("/cases");
    } catch (err) {
      console.error("Error updating case:", err);
      toast.error(err.message || "Помилка при оновленні кейсу.");
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className={styles.loading}>Завантаження...</div>
      </MainLayout>
    );
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
            placeholder="Регіон..."
            disabled
          />
        </div>

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