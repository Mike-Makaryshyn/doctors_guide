// src/pages/ResumePage/AktuellSection.jsx
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./AktuellSection.module.css";

import { parse, isValid } from "date-fns";

const isValidMonth = (month) => {
  const num = parseInt(month, 10);
  return num >= 1 && num <= 12;
};

const checkMMYYYY = (str) => {
  const [m, y] = str.split("/");
  if (!m || !y || m.length !== 2 || y.length !== 4)
    throw new Error("Ungültiges Datumsformat. Erlaubt ist: MM/yyyy.");
  if (!isValidMonth(m))
    throw new Error("Der Monat muss zwischen 01 und 12 liegen.");
  const date = parse(`${m}/01/${y}`, "MM/dd/yyyy", new Date());
  if (!isValid(date)) throw new Error("Ungültiges Datumsformat.");
};

const validateDateValue = (val) => {
  const lowered = val.toLowerCase().trim();

  if (!lowered || lowered.endsWith("/") || lowered.includes("_")) {
    // Якщо введення ще не завершене, не показувати помилки
    return;
  }

  if (lowered.startsWith("seit ")) {
    const parts = lowered.split(" ").filter(Boolean);
    if (parts.length !== 2)
      throw new Error("Das Format 'seit MM/yyyy' ist ungültig.");
    checkMMYYYY(parts[1]);
    return;
  }

  if (lowered.includes(" - ")) {
    const parts = lowered.split(" - ").map((p) => p.trim());
    if (parts.length === 2) {
      checkMMYYYY(parts[0]);
      if (parts[1].toLowerCase() !== "heute") checkMMYYYY(parts[1]);
      return;
    }
  }

  throw new Error("Ungültiges Datumsformat.");
};

const AktuellSection = ({ title = "Aktuell", data, onUpdate }) => {
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки

  // Використовуємо підказки з ResumeForm.js
  const descriptionHints = resumeFormTexts.suggestions;

  // Обробка зміни дати
  const handleDateChange = (index, newValue) => {
    try {
      validateDateValue(newValue);
      // Додаткова логіка при валідації (якщо необхідно)
    } catch (error) {
      console.error(error.message);
      // Можливо, додати повідомлення користувачу
    }

    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    onUpdate(updatedEntries);
  };

  // Обробка зміни опису
  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    onUpdate(updatedEntries);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", datePlaceholder: "Datum" },
    ];
    onUpdate(updatedEntries);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);
  };

  // Відкриття модального вікна
  const toggleSuggestions = () => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveDescriptionIndex(null); // Скидаємо активний індекс при закритті модалки
  };

  // Вставка підказки у поле опису
  const handleSelectHint = (hint) => {
    if (activeDescriptionIndex === null) return;

    const updatedEntries = [...data];
    const currentDescription = updatedEntries[activeDescriptionIndex].description;
    const newDescription = currentDescription
      ? `${currentDescription}\n${hint}`
      : hint;
    updatedEntries[activeDescriptionIndex].description = newDescription;
    onUpdate(updatedEntries);

    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveDescriptionIndex(null); // Скидаємо активний індекс після вставки підказки
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;

    // Скидаємо висоту, щоб отримати точні розрахунки
    field.style.height = "auto";

    // Встановлюємо висоту на основі scrollHeight
    field.style.height = `${field.scrollHeight}px`;
  };

  const dateHints = [
    "MM/YYYY",
    "seit MM/YYYY",
    "MM/YYYY - MM/YYYY",
    "MM/YYYY - heute",
  ];
  const [hintIndex, setHintIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused && data.every((item) => !item.date)) {
      const interval = setInterval(() => {
        setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
      }, 1500); // Швидше переключення підказок
      return () => clearInterval(interval);
    }
  }, [isFocused, data]);

  return (
    <section className={styles.aktuellSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для дати */}
            <div className={styles.dateCell}>
              <input
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                onFocus={() => {
                  setIsFocused(true);
                  setHintIndex(-1);
                  setActiveDescriptionIndex(null); // Не активний опис
                }}
                onBlur={() => {
                  // Використовуємо setTimeout, щоб дозволити обробнику кліку на Info Button виконатися перш ніж activeDescriptionIndex буде скинуто
                  setTimeout(() => {
                    if (!isModalOpenRef.current) {
                      setIsFocused(false);
                      if (!entry.date) setHintIndex(0);
                      setActiveDescriptionIndex(null);
                    }
                  }, 100);
                }}
                placeholder={isFocused || entry.date ? "" : dateHints[hintIndex]}
                className={styles.dateInput}
              />
            </div>
            {/* Поле опису */}
            <div className={styles.descriptionCell}>
              <div className={styles.inputWithInfo}>
                {/* Контейнер кнопок для десктопу */}
                <div className={styles.buttonContainer}>
                  <IconButton
                    onClick={() => removeRow(index)}
                    className={styles.deleteButton}
                    aria-label="Видалити"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>

                {/* Поле опису */}
                <textarea
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e);
                  }}
                  onFocus={() => setActiveDescriptionIndex(index)}
                  onBlur={() => {
                    // Використовуємо setTimeout, щоб дозволити обробнику кліку на Info Button виконатися перш ніж activeDescriptionIndex буде скинуто
                    setTimeout(() => {
                      if (!isModalOpenRef.current) {
                        setActiveDescriptionIndex(null);
                      }
                    }, 100);
                  }}
                  placeholder="Information"
                  className={styles.inputField}
                  rows={1}
                ></textarea>
              </div>
              {/* Контейнер кнопки видалення для мобільних */}
              <div className={styles.deleteButtonContainer}>
                <IconButton
                  onClick={() => removeRow(index)}
                  className={styles.deleteButton}
                  aria-label="Видалити"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            {/* Роздільник для мобільних */}
            <div className={styles.mobileDivider}></div>
          </div>
        ))}
      </form>

      {/* Кнопка для додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>

      {/* Фіксована кнопка Інформації в правому нижньому кутку екрану */}
      {activeDescriptionIndex !== null && (
        <IconButton
          onClick={toggleSuggestions}
          className={styles.fixedInfoButton}
          aria-label="Інформація"
        >
          <InfoIcon />
        </IconButton>
      )}

      {/* Модальне вікно з підказками */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Виберіть підказку</DialogTitle>
        <List>
          {descriptionHints.map((hint, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton onClick={() => handleSelectHint(hint)}>
                <ListItemText primary={hint} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </section>
  );
};

AktuellSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      datePlaceholder: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AktuellSection;