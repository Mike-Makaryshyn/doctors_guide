// src/forum/ForumMainPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import styles from "./ForumMainPage.module.scss"; // створіть або адаптуйте стилі за потребою

const ForumMainPage = () => {
  const navigate = useNavigate();

  const handleSelectCategory = (category) => {
    // Переходимо до сторінки категорії з вибраною категорією
    navigate(`/forum/category/${category}`);
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Форум</h1>
        <div className={styles.categories}>
          <button
            className={styles.categoryButton}
            onClick={() => handleSelectCategory("Fachsprachenprüfung")}
          >
            Fachsprachenprüfung
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleSelectCategory("Kenntnisprüfung")}
          >
            Kenntnisprüfung
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForumMainPage;