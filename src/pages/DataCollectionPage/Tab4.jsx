import React from "react";
import styles from "./Tab3.module.scss"; // Використовуємо ті самі стилі, що й у Tab3

const Tab4 = ({ localData, updateLocalData }) => {
  const examinerQuestions = localData.examinerQuestions || [{ question: "", answer: "" }];

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...examinerQuestions];
    updatedQuestions[index][field] = value;
    updateLocalData({ examinerQuestions: updatedQuestions });
  };

  const addQuestionAnswerPair = () => {
    const updatedQuestions = [...examinerQuestions, { question: "", answer: "" }];
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
        <div key={index} className={styles.tile}>
          <textarea
            id={`question-${index}`}
            value={pair.question}
            onChange={(e) => handleChange(index, "question", e.target.value)}
            onInput={handleAutoExpand}
            className={`${styles.inputField} ${styles.autoExpand}`}
            placeholder="Frage"
          />
          <textarea
            id={`answer-${index}`}
            value={pair.answer}
            onChange={(e) => handleChange(index, "answer", e.target.value)}
            onInput={handleAutoExpand}
            className={`${styles.inputField} ${styles.autoExpand}`}
            placeholder="Antwort"
          />
          <button
            onClick={() => removeQuestionAnswerPair(index)}
            className={styles.removeButton}
            title="Diese Zeile löschen"
          >
            &times;
          </button>
        </div>
      ))}
      <button onClick={addQuestionAnswerPair} className={styles.addButton} title="Feld hinzufügen">
        +
      </button>
    </div>
  );
};

export default Tab4;