import React, { useState, useEffect, forwardRef } from "react";
import styles from "./ExamDataSection.module.scss";

const ExamDataSection = forwardRef((props, ref) => {
  const { selectedRegion, caseId, onLocalSave } = props; // Пропс onLocalSave для збереження в локальний стан

  const initialData = {
    name: "",
    surname: "",
    birthdate: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    visitReason: "",
    painLocalization: "",
    // ... інші поля
  };

  const [data, setData] = useState(initialData);

  /* Обробник зміни в полях вводу */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  /* Збереження в локальний стан при виході із секції */
  const saveToLocal = () => {
    if (onLocalSave) {
      onLocalSave(caseId, data); // Передаємо дані батьківському компоненту
    }
  };

  useEffect(() => {
    return () => {
      saveToLocal(); // Зберігаємо дані в локальний стан при розмонтаженні компонента
    };
  }, [data]); // Викликається при зміні даних

  React.useImperativeHandle(ref, () => ({ saveToLocal }));

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.subheader}>Exam Data</h2>

      <div className={styles.entryRow}>
        <label className={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.entryRow}>
        <label className={styles.label}>Surname:</label>
        <input
          type="text"
          name="surname"
          value={data.surname}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.entryRow}>
        <label className={styles.label}>Birthdate:</label>
        <input
          type="date"
          name="birthdate"
          value={data.birthdate}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.entryRow}>
        <label className={styles.label}>Age:</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      {/* Додай інші поля за потреби */}
    </div>
  );
});

export default ExamDataSection;