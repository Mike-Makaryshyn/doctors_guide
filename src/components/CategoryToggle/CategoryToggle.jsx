// src/components/CategoryToggle/CategoryToggle.jsx

import React from "react";
import styles from "./CategoryToggle.module.scss";

const CategoryToggle = ({ category, setCategory }) => {
  const toggleCategory = () => {
    setCategory((prev) => (prev === "EU" ? "NonEU" : "EU"));
    console.log(`Category toggled to: ${category === "EU" ? "NonEU" : "EU"}`);
  };

  return (
    <div className={styles.toggleContainer}>
      <button onClick={toggleCategory} className={styles.toggleButton}>
        {category === "EU" ? "Перемкнути на Non-EU" : "Перемкнути на EU"}
      </button>
      <span className={styles.currentCategory}>
        Категорія: {category === "EU" ? "EU" : "Non-EU"}
      </span>
    </div>
  );
};

export default CategoryToggle;