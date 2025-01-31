// src/pages/ResumePage/AusbildungSection.jsx
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
import styles from "./AusbildungSection.module.css";

const AusbildungSection = ({ title = "Ausbildung", data, onUpdate }) => {
  const suggestionsList = resumeFormTexts.ausbildungSuggestions;
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const suggestionsRef = useRef(null);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const dateHints = ["MM/YYYY", "seit MM/YYYY", "MM/YYYY - MM/YYYY", "MM/YYYY - heute"];
  const [hintIndex, setHintIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRefs = useRef([]); // Реф для textarea
  const [errors, setErrors] = useState({}); // Стан для помилок

  // Ротація підказок для полів дати
  useEffect(() => {
    if (!isFocused && data.every((item) => !item.date)) {
      const interval = setInterval(() => {
        setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
      }, 1500); // Підказка змінюється кожні 1.5 секунди
      return () => clearInterval(interval);
    }
  }, [isFocused, data, dateHints.length]);

  // Закриття модалки при кліку поза її межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Оновлення даних
  const handleUpdate = (updatedEntries) => {
    onUpdate(updatedEntries);
  };

  // Валідація дати
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
    const date = new Date(`${y}-${m}-01`);
    if (isNaN(date.getTime())) throw new Error("Ungültiges Datumsformat.");
  };

  // Обробка зміни дати
  const handleDateChange = (index, newValue) => {
    try {
      validateDateValue(newValue);
      // Очистити помилки для цього поля
      setErrors((prevErrors) => ({ ...prevErrors, [index]: null }));
    } catch (error) {
      console.error(error.message);
      // Встановити повідомлення про помилку для цього поля
      setErrors((prevErrors) => ({ ...prevErrors, [index]: error.message }));
    }

    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    handleUpdate(updatedEntries);

    if (newValue.trim().length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(newValue.toLowerCase())
      );
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
      setActiveDescriptionIndex(index);
    } else {
      setSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
      setActiveDescriptionIndex(null);
    }
  };

  // Обробка зміни опису
  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    handleUpdate(updatedEntries);

    if (value.trim().length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
      setActiveDescriptionIndex(index);
    } else {
      setSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
      setActiveDescriptionIndex(null);
    }
  };

  // Обробка зміни місця навчання
  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].place = value;
    handleUpdate(updatedEntries);
  };

  // Вибір пропозиції
  const handleSuggestionSelect = (suggestion) => {
    if (activeDescriptionIndex === null) return;

    const updatedEntries = [...data];
    updatedEntries[activeDescriptionIndex].description = suggestion;
    handleUpdate(updatedEntries);
    setSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
    setActiveDescriptionIndex(null);
  };

  // Перемикання списку пропозицій
  const toggleSuggestions = () => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ];
    handleUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "description"); // Фокус на description за замовчуванням
    }, 100); // Даємо час DOM оновитися
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e, index) => {
    const field = textareaRefs.current[index];
    if (field) {
      field.style.height = "auto"; // Скидаємо висоту, щоб уникнути некоректних розрахунків
      field.style.height = `${field.scrollHeight}px`; // Встановлюємо нову висоту
    }
  };

  // Фокусування на рядку
  const handleFocus = (index, fieldType) => {
    setActiveDescriptionIndex(index);
    setFocusedField(fieldType);
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveDescriptionIndex(null);
  };

  return (
    <section className={styles.ausbildungSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <div className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле дати */}
            <div className={styles.dateCell}>
              <input
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                onFocus={() => {
                  setIsFocused(true);
                  setHintIndex(-1); // При фокусі підказка зникає
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!isModalOpenRef.current) {
                      setIsFocused(false);
                      if (!entry.date) setHintIndex(0);
                    }
                  }, 100);
                }}
                placeholder={isFocused || entry.date ? "" : dateHints[hintIndex]}
                className={styles.inputField}
              />
              {/* Підказка для дати */}
              {!isFocused && !entry.date && (
                <div className={styles.dateHint}>{dateHints[hintIndex]}</div>
              )}
              {errors[index] && <div className={styles.errorMessage}>{errors[index]}</div>}
            </div>

            {/* Поле опису */}
            <div className={styles.descriptionCell}>
              <textarea
                ref={(el) => (textareaRefs.current[index] = el)}
                value={entry.description || ""}
                onChange={(e) => {
                  handleDescriptionChange(index, e.target.value);
                  handleAutoExpand(e, index);
                }}
                onFocus={() => handleFocus(index, "description")}
                onBlur={() => handleFocus(null, null)}
                placeholder="Information"
                className={styles.inputField}
                rows={1}
              ></textarea>

              {/* Контейнер кнопок для десктопу */}
              <div className={styles.buttonContainer}>
                <IconButton
                  onClick={() => removeRow(index)}
                  className={styles.deleteButton}
                  aria-label={`Видалити рядок ${index + 1}`}
                >
                  <DeleteIcon />
                </IconButton>
              </div>

              {/* Контейнер кнопки видалення для мобільних */}
              <div className={styles.deleteButtonContainer}>
                <IconButton
                  onClick={() => removeRow(index)}
                  className={styles.deleteButton}
                  aria-label={`Видалити рядок ${index + 1}`}
                >
                  <DeleteIcon />
                </IconButton>
              </div>

              {/* Кнопка підказки */}
              {activeDescriptionIndex === index && (
                <IconButton
                  onClick={toggleSuggestions}
                  className={styles.suggestionButton}
                  aria-label={`Підказки для рядка ${index + 1}`}
                >
                  <InfoIcon className={styles.glowingInfoIcon} />
                </IconButton>
              )}
            </div>

            {/* Поле місця навчання */}
            <div className={styles.placeCell}>
              <textarea
                value={entry.place || ""}
                onChange={(e) => {
                  handlePlaceChange(index, e.target.value);
                  handleAutoExpand(e, index);
                }}
                onFocus={() => handleFocus(index, "place")}
                onBlur={() => handleFocus(null, null)}
                placeholder="Ort"
                className={`${styles.inputField} ${styles.textareaField}`}
                rows={1}
              ></textarea>
            </div>

            {/* Роздільник між записами */}
            <div className={styles.mobileDivider}></div>
          </div>
        ))}
      </div>

      {/* Кнопка додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>

      {/* Модальне вікно з підказками */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} classes={{ paper: styles.customDialog }}>
        <DialogTitle className={styles.dialogTitle}>
          Виберіть підказку
          <IconButton className={styles.closeButton} onClick={handleCloseModal}>
            &times;
          </IconButton>
        </DialogTitle>
        <List className={styles.dialogList} ref={suggestionsRef}>
          {suggestionsList.map((hint, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton onClick={() => handleSuggestionSelect(hint)}>
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