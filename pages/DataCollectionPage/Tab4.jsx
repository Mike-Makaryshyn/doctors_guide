// src/pages/DataCollectionPage/Tab4.jsx

import React from "react";
import styles from "./Tab4.module.scss";

const Tab4 = ({ localData, updateLocalData }) => {
  const examinerQuestions = localData.examinerQuestions || [
    { question: "", answer: "" },
  ];

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...examinerQuestions];
    updatedQuestions[index][field] = value;
    updateLocalData({ examinerQuestions: updatedQuestions });
  };

  const addQuestionAnswerPair = () => {
    const updatedQuestions = [
      ...examinerQuestions,
      { question: "", answer: "" },
    ];
    updateLocalData({ examinerQuestions: updatedQuestions });
  };

  const removeQuestionAnswerPair = (index) => {
    const updatedQuestions = examinerQuestions.filter((_, i) => i !== index);
    updateLocalData({ examinerQuestions: updatedQuestions });
  };

  const handleAutoExpand = (e) => {
    const field = e.target;
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  return (
    <div className={styles.tabContainer}>
      {examinerQuestions.map((pair, index) => (
        <div key={index} className={styles.entryRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor={`question-${index}`} className={styles.label}>
              Запитання:
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
              Відповідь:
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

export default Tab4;