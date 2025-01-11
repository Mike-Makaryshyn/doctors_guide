// src/pages/DataCollectionPage/Tab5.jsx

import React from "react";
import styles from "./Tab5.module.scss"; // Імпорт окремого SCSS модуля

const Tab5 = ({ localData, updateLocalData }) => {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.entryRow}>
        <label className={styles.label}>Коментарі:</label>
        <textarea
          value={localData.comments_tab5 || ""}
          onChange={(e) => updateLocalData({ comments_tab5: e.target.value })}
          className={styles.textAreaField}
        />
      </div>
      {/* Додайте інші поля вкладки 5 за потреби */}
    </div>
  );
};

export default Tab5;