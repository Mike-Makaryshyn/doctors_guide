// src/forum/RecordForm.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import styles from "./RecordForm.module.scss";

const RecordForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Отримуємо category та land, передані з UserRecordsPage
  const { category, land } = location.state || {};

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Формуємо новий запис
    const newRecord = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
      comments: [],
      category,
      land,
    };

    // Передаємо запис у UserRecordsPage
    navigate(`/forum/category/${category}/land/${land}`, {
      state: { newRecord },
    });
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Нова запис</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Заголовок</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Текст</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Зберегти
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default RecordForm;