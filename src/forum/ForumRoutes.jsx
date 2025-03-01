// src/forum/ForumRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Імпорт головної сторінки форуму
import ForumMainPage from "./ForumMainPage";
// Сторінка вибору землі в рамках категорії
import CategoryPage from "./CategoryPage";
// Список записів
import UserRecordsPage from "./UserRecordsPage";
// Форма створення нового запису
import RecordForm from "./RecordForm";
// Деталі запису
import RecordDetail from "./RecordDetail";

const ForumRoutes = () => {
  return (
    <Routes>
      {/* Головна сторінка форуму */}
      <Route index element={<ForumMainPage />} />

      {/* Сторінка вибору землі для обраної категорії */}
      <Route path="category/:category" element={<CategoryPage />} />

      {/* Сторінка списку записів (UserRecordsPage) */}
      <Route path="category/:category/land/:land" element={<UserRecordsPage />} />

      {/* Сторінка створення нового запису */}
      <Route path="new-record" element={<RecordForm />} />

      {/* Сторінка деталей запису */}
      <Route path="record/:recordId" element={<RecordDetail />} />
    </Routes>
  );
};

export default ForumRoutes;