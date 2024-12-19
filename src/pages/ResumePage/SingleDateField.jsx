// src/pages/ResumePage/SingleDateField.jsx
import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { parse, isValid } from 'date-fns';
import styles from './SingleDateField.module.css'; // Імпорт стилів

const DATE_FORMAT_ERROR = "Невірний формат дати. Дозволені формати:\n1) seit MM/YYYY\n2) MM/YYYY - MM/YYYY\n3) MM/YYYY - heute";
const MONTH_ERROR = "Місяць повинен бути між 01 та 12.";

function isValidMonth(month) {
  const num = parseInt(month, 10);
  return num >= 1 && num <= 12;
}

function checkMMYYYY(str) {
  const [m, y] = str.split("/");
  if (!m || !y || m.length !== 2 || y.length !== 4) throw new Error(DATE_FORMAT_ERROR);
  if (!isValidMonth(m)) throw new Error(MONTH_ERROR);
  const date = parse(`${m}/01/${y}`, "MM/dd/yyyy", new Date());
  if (!isValid(date)) throw new Error(DATE_FORMAT_ERROR);
}

function validateValue(val) {
  const lowered = val.toLowerCase().trim();

  if (!lowered) return; // Порожнє значення - не помилка до втрати фокусу.

  // Перевірка формату "seit MM/YYYY"
  if (lowered.startsWith("seit ")) {
    const parts = lowered.split(" ").filter(Boolean);
    if (parts.length !== 2) {
      throw new Error(DATE_FORMAT_ERROR);
    }
    checkMMYYYY(parts[1]);
    return;
  }

  // Перевірка формату "MM/YYYY - MM/YYYY" або "MM/YYYY - heute"
  if (lowered.includes(" - ")) {
    const parts = lowered.split(" - ").map((p) => p.trim());
    if (parts.length === 2) {
      checkMMYYYY(parts[0]); // Перевірка першої дати

      // Якщо друга частина є текстом
      if (isNaN(parts[1][0])) {
        if (parts[1] !== "heute") {
          throw new Error("Дозволено тільки 'heute' як текстовий формат.");
        }
      } else {
        checkMMYYYY(parts[1]); // Якщо це дата, перевіряємо її
      }
      return;
    }
  }

  throw new Error(DATE_FORMAT_ERROR);
}

function getMask(rawValue) {
  const val = rawValue.toLowerCase().trim();

  // Маска для "seit MM/YYYY"
  if (val.startsWith("seit")) {
    return [
      's', 'e', 'i', 't', ' ',
      /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ // MM/YYYY
    ];
  }

  // Маска для "MM/YYYY - MM/YYYY" або "MM/YYYY - heute"
  if (/^\d/.test(val)) {
    const parts = val.split(" - ");

    if (parts.length === 1) {
      // Маска для першої дати
      return [
        /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, // MM/YYYY
        ' ', '-', ' ',
        /[hHtT\d]/, /[eEuU\d]/, /[uUtT\d]/, /[tT\d]/, /[eE\d]/ // Для тексту "heute" або ініціалізації другої частини
      ];
    }

    if (parts.length === 2) {
      // Маска для другої частини: або текст "heute", або дата MM/YYYY
      const secondPart = parts[1].trim();
      if (secondPart.startsWith("h")) {
        // Якщо початок тексту, залишаємо тільки для "heute"
        return [
          /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, // MM/YYYY
          ' ', '-', ' ',
          'h', 'e', 'u', 't', 'e' // Текст "heute"
        ];
      } else {
        // Якщо початок з цифри, чекаємо дату
        return [
          /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, // Перша дата MM/YYYY
          ' ', '-', ' ',
          /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ // Друга дата MM/YYYY
        ];
      }
    }
  }

  // Загальна маска для початкового вводу
  return [
    /[sSmM]/, /[eEM\d]/, /[iIM\d]/, /[tT\/\d]/, /[\d ]/,
    /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,
    ' ', '-', ' ',
    /[hHtT\d]/, /[eEuU\d]/, /[uUtT\d]/, /[tT\d]/, /[eE\d]/
  ];
}

export default function SingleDateField() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    try {
      validateValue(value);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    try {
      validateValue(e.target.value);
      setError(""); // Видаляємо помилку, якщо введення коректне
    } catch (e) {
      setError(e.message); // Показуємо помилку під час введення
    }
  };

  return (
    <div className={styles.dateFieldContainer}>
      <div className={styles.inputWithIcon}>
        <MaskedInput
          mask={getMask}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="seit/MM/YYYY/heute"
          className={`${styles.inputField} ${error ? styles.inputFieldWithError : ''}`}
        />
        <span className={styles.icon}></span>
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}