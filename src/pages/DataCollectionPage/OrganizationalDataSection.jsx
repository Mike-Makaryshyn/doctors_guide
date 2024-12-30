import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Шлях до firebase.js
import styles from "./OrganizationalDataSection.module.scss"; // Імпорт оновлених стилів

const OrganizationalDataSection = React.forwardRef((props, ref) => {
  const [data, setData] = useState({
    examLocation: "",
    examinerNames: "",
    examDate: "",
    examResult: "",
    subject: "",         // <-- НОВЕ ПОЛЕ: "Тема"
  });

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
    const docRef = doc(db, "sections", "organizationalData");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData(snapshot.data());
    }
  };

  // Зберігаємо документ, якщо принаймні одне з полів заповнене.
  // Якщо ж усі поля порожні, видаляємо документ.
  const saveData = async () => {
    const docRef = doc(db, "sections", "organizationalData");
    const { examLocation, examinerNames, examDate, examResult, subject } = data;
    const isAnyFieldFilled = [
      examLocation, examinerNames, examDate, examResult, subject,
    ].some((val) => val.trim() !== "");

    if (isAnyFieldFilled) {
      await setDoc(docRef, data);
    } else {
      await deleteDoc(docRef);
    }
  };

  useEffect(() => {
    fetchOrganizationalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useImperativeHandle(ref, () => ({ saveData }));

  return (
    <div>
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