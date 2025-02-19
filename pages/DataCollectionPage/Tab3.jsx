// src/pages/DataCollectionPage/Tab3.jsx

import React from "react";
import styles from "./Tab3.module.scss"; // Імпорт окремого SCSS модуля

const Tab3 = ({ localData, updateLocalData }) => {
  const patientQuestions = localData.patientQuestions || [
    { question: "", answer: "" },
  ];

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...patientQuestions];
    updatedQuestions[index][field] = value;
    updateLocalData({ patientQuestions: updatedQuestions });
  };

  const addQuestionAnswerPair = () => {
    const updatedQuestions = [
      ...patientQuestions,
      { question: "", answer: "" },
    ];
    updateLocalData({ patientQuestions: updatedQuestions });
  };

  const removeQuestionAnswerPair = (index) => {
    const updatedQuestions = patientQuestions.filter((_, i) => i !== index);
    updateLocalData({ patientQuestions: updatedQuestions });
  };

  const handleAutoExpand = (e) => {
    const field = e.target;
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  return (
    <div className={styles.tabContainer}>
      {patientQuestions.map((pair, index) => (
        <div key={index} className={styles.entryRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor={`question-${index}`} className={styles.label}>
              Frage:
            </label>
            <textarea
              id={`question-${index}`}
              value={pair.question}
              onChange={(e) =>
                handleChange(index, "question", e.target.value)
              }
              onInput={handleAutoExpand}
              className={`${styles.inputField} ${styles.autoExpand}`}
              placeholder="Введіть запитання..."
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor={`answer-${index}`} className={styles.label}>
              Antwort:
            </label>
            <textarea
              id={`answer-${index}`}
              value={pair.answer}
              onChange={(e) =>
                handleChange(index, "answer", e.target.value)
              }
              onInput={handleAutoExpand}
              className={`${styles.inputField} ${styles.autoExpand}`}
              placeholder="Введіть відповідь..."
            />
          </div>
          <button
            onClick={() => removeQuestionAnswerPair(index)}
            className={styles.removeButton}
            title="Видалити цю пару"
          >
            &times;
          </button>
        </div>
      ))}
      <button onClick={addQuestionAnswerPair} className={styles.addButton}>
        + Додати ще одне поле
      </button>
    </div>
  );
};

export default Tab3;