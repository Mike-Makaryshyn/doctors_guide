// src/components/CategoryToggle/CategoryToggle.jsx

import React from "react";
import PropTypes from "prop-types"; // Додайте PropTypes для кращої валідації
import styles from "./CategoryToggle.module.scss";

const CategoryToggle = ({ category, setCategory }) => {
  const toggleCategory = () => {
    setCategory((prev) => (prev === "EU" ? "Non-EU" : "EU"));
    console.log(`Category toggled to: ${category === "EU" ? "Non-EU" : "EU"}`);
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

CategoryToggle.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoryToggle;