import React from "react";
import styles from "./Tab5.module.scss";

const Tab5 = ({ localData, updateLocalData }) => {
  const handleAutoExpand = (e) => {
    const field = e.target;
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tile}>
        <textarea
          value={localData.feedback || ""}
          onChange={(e) => updateLocalData({ feedback: e.target.value })}
          onInput={handleAutoExpand}
          className={`${styles.inputField} ${styles.autoExpand}`}
          placeholder="Feedback"
        />
      </div>
    </div>
  );
};

export default Tab5;