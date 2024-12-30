import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Шлях до файлу firebase.js
import styles from "./PatientQuestionsSection.module.scss"; // Імпорт стилів

const PatientQuestionsSection = React.forwardRef((props, ref) => {
  const [questions, setQuestions] = useState([""]); // Одне поле за замовчуванням

  const handleChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions((prev) => [...prev, ""]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions); // Користувач може видалити всі поля
  };

  const fetchPatientQuestions = async () => {
    const docRef = doc(db, "sections", "patientQuestions");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const fetchedQuestions = snapshot.data().questions || [];
      const cleanedQuestions = fetchedQuestions.filter((q) => q.trim() !== ""); // Забираємо порожні записи
      setQuestions(cleanedQuestions.length > 0 ? cleanedQuestions : [""]); // Завжди додаємо одне поле при завантаженні
    }
  };

  const saveData = async () => {
    const docRef = doc(db, "sections", "patientQuestions");
    if (questions.some((question) => question.trim() !== "")) {
      const cleanedQuestions = questions.filter((q) => q.trim() !== ""); // Забираємо порожні дані перед збереженням
      await setDoc(docRef, { questions: cleanedQuestions });
    } else {
      await deleteDoc(docRef); // Видалити документ, якщо всі поля порожні
    }
  };

  useEffect(() => {
    fetchPatientQuestions();
  }, []);

  React.useImperativeHandle(ref, () => ({ saveData }));

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Запитання пацієнта</h2>
      {questions.length === 0 && (
        <p className={styles.noQuestionsText}>Немає запитань</p>
      )}
      {questions.map((question, index) => (
        <div key={index} className={styles.questionRow}>
          <input
            type="text"
            value={question}
            onChange={(e) => handleChange(index, e.target.value)}
            className={styles.inputField}
          />
          <button
            onClick={() => removeQuestion(index)}
            className={styles.removeButton}
          >
            Видалити
          </button>
        </div>
      ))}
      <button onClick={addQuestion} className={styles.addButton}>
        Додати запитання
      </button>
    </div>
  );
});

export default PatientQuestionsSection;