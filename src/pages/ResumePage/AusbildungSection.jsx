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
import { parse, isValid } from "date-fns";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./AusbildungSection.module.css";

// Видалити або закоментувати функції валідації, якщо вони більше не потрібні
/*
const isValidMonth = (month) => {
  const num = parseInt(month, 10);
  return num >= 1 && num <= 12;
};

const checkMMYYYY = (str) => {
  const [m, y] = str.split("/");
  if (!m || !y || m.length !== 2 || y.length !== 4)
    throw new Error("Ungültiges Datumsformat. Erlaubt ist: MM/yyyy.");
  if (!isValidMonth(m)) throw new Error("Der Monat muss zwischen 01 und 12 liegen.");
  const date = parse(`${m}/01/${y}`, "MM/dd/yyyy", new Date());
  if (!isValid(date)) throw new Error("Ungültiges Datumsformat.");
};

const validateDateValue = (val) => {
  const lowered = val.toLowerCase().trim();

  if (!lowered || lowered.endsWith("/") || lowered.includes("_")) {
    // Не перевіряємо, якщо введення ще триває
    return;
  }

  if (lowered.startsWith("seit ")) {
    const parts = lowered.split(" ").filter(Boolean);
    if (parts.length !== 2) throw new Error("Das Format 'seit MM/yyyy' ist ungültig.");
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
*/

const AusbildungSection = ({ title = "Ausbildung", data, onUpdate }) => {
  const suggestionsList = resumeFormTexts.ausbildungSuggestions;
  // Видалити або закоментувати стан для помилок
  // const [dateErrors, setDateErrors] = useState([]);
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const suggestionsRef = useRef(null);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки

  // Відстеження кліків поза списком пропозицій
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

  // Валідація даних перед оновленням
  const handleUpdate = (updatedEntries) => {
    onUpdate(updatedEntries);
  };

  // Обробка зміни дати без валідації
  const handleDateChange = (index, newValue) => {
    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    handleUpdate(updatedEntries);

    // Видалити або закоментувати блок валідації
    /*
    const updatedErrors = [...dateErrors];
    try {
      if (newValue.trim()) {
        validateDateValue(newValue);
        updatedErrors[index] = null;
      } else {
        updatedErrors[index] = null; // Немає помилок при пустому полі
      }
    } catch (error) {
      updatedErrors[index] = error.message;
    }
    setDateErrors(updatedErrors);
    */
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
    // Видалити або закоментувати додавання помилки
    // setDateErrors([...dateErrors, null]);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
    // Видалити або закоментувати видалення помилки
    /*
    const updatedErrors = dateErrors.filter((_, i) => i !== index);
    setDateErrors(updatedErrors);
    */
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;

    // Скидаємо висоту, щоб отримати точні розрахунки
    field.style.height = "auto";

    // Встановлюємо висоту на основі scrollHeight
    field.style.height = `${field.scrollHeight}px`;
  };

  // Відкриття модального вікна
  const openModal = (index) => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
    setActiveDescriptionIndex(index);
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
                placeholder={entry.datePlaceholder}
                className={`${styles.inputField} ${styles.dateInput}`}
              />
              {/* Видалити або закоментувати блок з errorMessage */}
              {/*
              {dateErrors[index] && (
                <div className={styles.errorMessage}>{dateErrors[index]}</div>
              )}
              */}
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

              {/* Список підказок */}
              {suggestionsState.activeRow === index &&
                suggestionsState.filteredSuggestions.length > 0 && (
                  <div
                    ref={suggestionsRef}
                    className={`${styles.dropdown} ${styles.open}`}
                  >
                    <ul className={styles.dropdown__items}>
                      {suggestionsState.filteredSuggestions.map((suggestion, i) => (
                        <li
                          key={i}
                          onClick={() => handleSuggestionSelect(suggestion)}
                          className={styles.dropdown__item}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Поле місця навчання */}
            <div className={styles.placeCell}>
              <textarea
                value={entry.place || ""}
                onChange={(e) => {
                  handlePlaceChange(index, e.target.value);
                  handleAutoExpand(e);
                }}
                placeholder="Ort"
                className={`${styles.inputField} ${styles.textareaField}`}
                rows={1}
              ></textarea>
            </div>

            {/* Кнопка видалення для мобільних */}
            <div className={styles.deleteButtonContainer}>
              <IconButton
                onClick={() => removeRow(index)}
                className={styles.deleteButton}
                aria-label="Видалити"
              >
                <DeleteIcon />
              </IconButton>
            </div>

            {/* Роздільник між рядками на мобільних */}
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
          {suggestionsList.map((hint, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton onClick={() => handleSuggestionSelect(hint)}>
                <ListItemText primary={hint} />
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