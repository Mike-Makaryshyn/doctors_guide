// src/components/DataCollectionPage/OrganizationalDataSection.jsx

import React, { useState, useEffect, useContext } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Шлях до firebase.js
import { DataSourceContext } from "../../contexts/DataSourceContext";
import styles from "./OrganizationalDataSection.module.scss"; // Імпорт оновлених стилів
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const OrganizationalDataSection = React.forwardRef(({ selectedRegion }, ref) => {
  const { dataSources } = useContext(DataSourceContext);
  const [data, setData] = useState({
    examLocation: "",
    examinerNames: "",
    examDate: "",
    examResult: "",
    subject: "", // НОВЕ ПОЛЕ: "Тема"
  });
  const [user, loading, error] = useAuthState(auth);

  const examLocations = [
    "Ärztekammer Baden-Württemberg",
    "Ärztekammer Bayern",
    "Ärztekammer Berlin",
    "Ärztekammer Hamburg",
    "Ärztekammer Nordrhein",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchOrganizationalData = async () => {
    if (!selectedRegion || !user) return; // Не завантажуємо дані, якщо регіон не обрано або користувач не автентифікований

    const docRef = doc(db, "users", user.uid, "cases", "organizationalData");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const fetchedData = snapshot.data();
      setData(fetchedData);
    }
  };

  // Зберігаємо документ, якщо принаймні одне з полів заповнене.
  // Якщо ж усі поля порожні, видаляємо документ.
  const saveData = async () => {
    if (!selectedRegion || !user) {
      console.warn("Регіон не обрано або користувач не автентифікований. Дані не збережені.");
      return;
    }

    const docRef = doc(db, "users", user.uid, "cases", "organizationalData");
    const { examLocation, examinerNames, examDate, examResult, subject } = data;
    const isAnyFieldFilled = [
      examLocation, examinerNames, examDate, examResult, subject,
    ].some((val) => val.trim() !== "");

    if (isAnyFieldFilled) {
      await setDoc(docRef, { ...data, region: selectedRegion }, { merge: true });
      console.log("Організаційні дані успішно збережено.");
    } else {
      await deleteDoc(docRef);
      console.log("Організаційні дані видалено через відсутність заповнених полів.");
    }
  };

  useEffect(() => {
    fetchOrganizationalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion, user]);

  React.useImperativeHandle(ref, () => ({ saveData }));

  return (
    <div className={styles.organizationalDataSection}>
      <h2 className={styles.subheader}>Організаційні дані</h2>

      {/* Місце проведення екзамену */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Місце проведення екзамену:</label>
        <select
          name="examLocation"
          value={data.examLocation}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Оберіть місце</option>
          {examLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Імена екзаменаторів */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Імена екзаменаторів:</label>
        <input
          type="text"
          name="examinerNames"
          placeholder="Імена екзаменаторів через кому"
          value={data.examinerNames}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      {/* Дата екзамену */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Дата екзамену:</label>
        <input
          type="date"
          name="examDate"
          value={data.examDate}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      {/* Результат екзамену */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Результат екзамену:</label>
        <select
          name="examResult"
          value={data.examResult}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Оберіть результат</option>
          <option value="Успішно">Успішно</option>
          <option value="Неуспішно">Неуспішно</option>
        </select>
      </div>

      {/* Тема (Нове поле) */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Тема:</label>
        <input
          type="text"
          name="subject"
          placeholder="Введіть тему"
          value={data.subject}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      {/* Кнопка для збереження */}
      <div className={styles.buttonContainer}>
        <button className={styles.saveButton} onClick={saveData}>
          Зберегти
        </button>
      </div>
    </div>
  );
});

export default OrganizationalDataSection;