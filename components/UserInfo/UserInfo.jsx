// src/components/UserInfo/UserInfo.jsx
import React from "react";

const UserInfo = ({ userData, selectedRegion }) => {
  if (!userData) {
    return <p>Завантаження даних користувача...</p>;
  }

  return (
    <div>
      <h2>Основна інформація</h2>
      <p>
        <strong>Ім'я:</strong> {userData.firstName || "Не вказано"}{" "}
        {userData.lastName || "Не вказано"}
      </p>
      <p>
        <strong>Спеціальність:</strong> {userData.specialty || "Не вказано"}
      </p>
      <p>
        <strong>Статус визнання:</strong>{" "}
        {userData.recognitionStatus || "Не вказано"}
      </p>
      <p>
        <strong>Країна:</strong> {userData.country || "Не вказано"}
      </p>
      <p>
        <strong>Локація:</strong> {userData.location || "Не вказано"}
      </p>
      <p>
        <strong>Вибрана земля:</strong> {selectedRegion || "Не вказано"}
      </p>
    </div>
  );
};

export default UserInfo;