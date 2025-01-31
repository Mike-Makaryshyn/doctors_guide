// src/pages/ResumePage/AusbildungSection.jsx
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Використовуємо лампочку як у Berufserfahrungen
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./AusbildungSection.module.css";

import { parse, isValid } from "date-fns";

// Функції для валідації дати (можна винести в окремий файл, якщо використовуються кількома компонентами)
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

const AusbildungSection = ({ title = "Ausbildung", data, onUpdate }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const suggestionsRef = useRef(null); // Реф для списку підказок
  const isClickingSuggestionButtonRef = useRef(false); // Реф для відстеження натискання на лампочку

  // Реф для кожного textarea
  const textareaRefs = useRef([]);

  // Використовуємо підказки з ResumeForm.js
  const descriptionHints = resumeFormTexts.ausbildungSuggestions; // Використовуємо ausbildungSuggestions
  const dateHints = ["MM/YYYY", "seit MM/YYYY", "MM/YYYY - MM/YYYY", "MM/YYYY - heute"];

  const [hintIndex, setHintIndex] = useState(0);
  const [focusedField, setFocusedField] = useState(null); // Тип поля, яке має фокус

  // Логування підказок
  useEffect(() => {
    console.log("descriptionHints:", descriptionHints);
  }, [descriptionHints]);

  // Ротація підказок для полів дати
  useEffect(() => {
    const interval = setInterval(() => {
      setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [dateHints.length]);

  // Автоматичне розширення textarea при оновленні даних
  useEffect(() => {
    setTimeout(() => {
      textareaRefs.current.forEach((field) => {
        if (field) {
          field.style.height = "auto";
          field.style.height = `${field.scrollHeight}px`;
        }
      });
    }, 50); // Додаємо затримку для стабільності
  }, [data]); // Виконується при оновленні data

  // Фокусування на рядку
  const handleFocus = (index, fieldType) => {
    console.log("handleFocus called with index:", index, "fieldType:", fieldType);
    setActiveRowIndex(index);
    setFocusedField(fieldType);
  };

  // Обробка зміни дати з валідацією
  const handleDateChange = (index, newValue) => {
    try {
      validateDateValue(newValue);
      // Можливо, очистити помилки тут
      console.log("Date validated successfully");
    } catch (error) {
      console.error("Date validation error:", error.message);
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

    setTimeout(() => {
      const field = textareaRefs.current[index];
      if (field) {
        field.style.height = "auto";
        field.style.height = `${field.scrollHeight}px`;
      }
    }, 50);
  };

  // Обробка зміни місця навчання
  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].place = value;
    onUpdate(updatedEntries);

    setTimeout(() => {
      const field = textareaRefs.current[index + data.length];
      if (field) {
        field.style.height = "auto";
        field.style.height = `${field.scrollHeight}px`;
      }
    }, 50);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ];
    onUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "description"); // Фокус на description за замовчуванням
      if (textareaRefs.current[lastIndex]) {
        textareaRefs.current[lastIndex].style.height = "auto";
        textareaRefs.current[lastIndex].style.height = `${textareaRefs.current[lastIndex].scrollHeight}px`;
        textareaRefs.current[lastIndex].focus();
      }
    }, 100); // Даємо час DOM оновитися
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);
  };

  // Відкриття модального вікна
  const toggleSuggestions = () => {
    console.log("toggleSuggestions called");
    setIsModalOpen(true);
    isModalOpenRef.current = true; // Оновлюємо реф
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    console.log("handleCloseModal called");
    setIsModalOpen(false);
    isModalOpenRef.current = false; // Оновлюємо реф
    setActiveRowIndex(null);
    setFocusedField(null);
  };

  // Вставка підказки у відповідне поле
  const handleSelectHint = (hint) => {
    console.log("handleSelectHint called with hint:", hint);
    console.log("activeRowIndex:", activeRowIndex);

    if (activeRowIndex !== null) {
      const updatedEntries = [...data];
      const currentDescription = updatedEntries[activeRowIndex].description || "";
      const newDescription = currentDescription
        ? `${currentDescription}\n${hint}`
        : hint;
      updatedEntries[activeRowIndex].description = newDescription;
      onUpdate(updatedEntries);

      setTimeout(() => {
        const field = textareaRefs.current[activeRowIndex];
        if (field) {
          field.style.height = "auto";
          field.style.height = `${field.scrollHeight}px`;
          field.focus();
        } else {
          console.error("Error: Textarea not found for index", activeRowIndex);
        }
      }, 100);

      setIsModalOpen(false);
      isModalOpenRef.current = false; // Оновлюємо реф
      setActiveRowIndex(null);
      setFocusedField(null);
    }
  };

  // Автоматичне розширення textarea
  const handleAutoExpand = (e, index) => {
    const field = textareaRefs.current[index];
    if (field) {
      field.style.height = "auto"; // Скидаємо висоту, щоб отримати точні розрахунки
      field.style.height = `${field.scrollHeight}px`; // Встановлюємо висоту на основі вмісту
    }
  };

  // Функція для визначення, яку підказку показувати
  const getDatePlaceholder = (value) => {
    if (value) return ""; // Якщо поле заповнене, підказка не потрібна
    return dateHints[hintIndex];
  };

  // Додаткове логування стану
  useEffect(() => {
    console.log("isModalOpen:", isModalOpen);
  }, [isModalOpen]);

  return (
    <section className={styles.ausbildungSection}>
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
                onFocus={() => handleFocus(index, "date")}
                onBlur={() => {
                  // Скидаємо фокус тільки якщо модальне вікно не відкрито
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setFocusedField(null);
                  }
                }}
                placeholder={getDatePlaceholder(entry.date)}
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
                  ref={(el) => (textareaRefs.current[index] = el)}
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e, index);
                  }}
                  onFocus={() => handleFocus(index, "description")}
                  onBlur={() => {
                    // Скидаємо фокус тільки якщо модальне вікно не відкрито
                    if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                      setActiveRowIndex(null);
                      setFocusedField(null);
                    }
                  }}
                  placeholder="Information"
                  className={styles.inputField}
                  rows={1}
                />

                {/* Лампочка для підказок тільки при фокусі на описі */}
                {focusedField === "description" && activeRowIndex === index && (
                  <div className={styles.suggestionButtonContainer}>
                    <IconButton
                      className={styles.suggestionButton}
                      onMouseDown={() => {
                        isClickingSuggestionButtonRef.current = true; // Встановлюємо флаг перед натисканням
                      }}
                      onClick={() => {
                        console.log(`Lightbulb clicked for index ${index}`); // Додано для перевірки
                        setActiveRowIndex(index); // Встановлюємо активний рядок
                        toggleSuggestions();
                        // Скидаємо флаг після натискання
                        setTimeout(() => {
                          isClickingSuggestionButtonRef.current = false;
                        }, 0);
                      }}
                      aria-label="Підказки для цього рядка"
                    >
                      <LightbulbIcon className={styles.glowingLightbulb} />
                    </IconButton>
                  </div>
                )}
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

            {/* Поле місця навчання */}
            <div className={styles.placeCell}>
              <textarea
                ref={(el) => (textareaRefs.current[index + data.length] = el)} // Унікальний реф для місця
                value={entry.place || ""}
                onChange={(e) => {
                  handlePlaceChange(index, e.target.value);
                  handleAutoExpand(e, index);
                }}
                onFocus={() => handleFocus(index, "place")}
                onBlur={() => {
                  // Скидаємо фокус тільки якщо модальне вікно не відкрито
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setFocusedField(null);
                  }
                }}
                placeholder="Ort"
                className={styles.inputField}
                rows={1}
              />
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

      {/* Модальне вікно з підказками */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        classes={{ paper: styles.customDialog }}
      >
        <DialogTitle className={styles.dialogTitle}>
          Виберіть підказку
          <IconButton className={styles.closeButton} onClick={handleCloseModal}>
            &times;
          </IconButton>
        </DialogTitle>
        <List className={styles.dialogList} ref={suggestionsRef}>
          {descriptionHints.map((hint, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton onClick={() => handleSelectHint(hint)}>
                <ListItemText primary={hint} className={styles.dialogText} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </section>
  );
};

AusbildungSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      place: PropTypes.string,
      datePlaceholder: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AusbildungSection;