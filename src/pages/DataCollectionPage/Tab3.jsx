import React from "react";
import styles from "./Tab3.module.scss"; // Import the SCSS module

const Tab3 = ({ localData, updateLocalData }) => {
  const patientQuestions = localData.patientQuestions || [{ question: "", answer: "" }];

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...patientQuestions];
    updatedQuestions[index][field] = value;
    updateLocalData({ patientQuestions: updatedQuestions });
  };

  const addQuestionAnswerPair = () => {
    const updatedQuestions = [...patientQuestions, { question: "", answer: "" }];
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

export default Tab3;