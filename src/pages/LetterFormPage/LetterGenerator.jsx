// src/pages/LetterFormPage/LetterGenerator.js
import React from "react";

// Допоміжна функція для отримання міста з поля "PLZ, Ort"
const extractCity = (plzOrt) => {
  const parts = plzOrt.split(",");
  return parts.length > 1 ? parts[1].trim() : "";
};

// Функція форматування дати за німецьким стандартом
const formatDateInGerman = (city = "") => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return city ? `${city}, ${formattedDate}` : formattedDate;
};

const LetterGenerator = ({ personalData, addressData, letterText }) => {
  const city = extractCity(personalData.plzOrt);
  const currentDate = formatDateInGerman(city);

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      {/* Верхній блок: адреси */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Ліва частина: адреса одержувача */}
        <div>
          {addressData ? (
            <>
              <div>{addressData.office}</div>
              {addressData.department && <div>{addressData.department}</div>}
              <div>{addressData.address}</div>
              {addressData.email && <div>E-Mail: {addressData.email}</div>}
            </>
          ) : (
            <div>Keine Adresse gefunden.</div>
          )}
        </div>
        {/* Права частина: адреса відправника */}
        <div style={{ textAlign: "right" }}>
          <div>{personalData.name}</div>
          <div>{personalData.strasse}</div>
          <div>{personalData.plzOrt}</div>
          {personalData.email && <div>{personalData.email}</div>}
        </div>
      </div>

      {/* Рядок з датою */}
      <div style={{ marginTop: "20px" }}>{currentDate}</div>

      {/* Основний текст листа */}
      <div style={{ marginTop: "30px", whiteSpace: "pre-wrap" }}>
        {letterText}
      </div>
    </div>
  );
};

export default LetterGenerator;