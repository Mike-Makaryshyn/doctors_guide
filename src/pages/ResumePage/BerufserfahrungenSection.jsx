// src/pages/ResumePage/BerufserfahrungenSection.jsx
import React, { useState, useEffect, useRef } from "react";
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
import styles from "./BerufserfahrungenSection.module.css";
// Видалити або закоментувати імпорт MaskedInput, оскільки він більше не потрібен
// import MaskedInput from "react-text-mask";
// Видалити або закоментувати імпорт debounce, якщо він більше не використовується
// import debounce from "lodash.debounce";

/*
    Видалення функцій валідації, якщо вони більше не потрібні
    // const isValidMonth = (month) => { ... };
    // const checkMMYYYY = (str) => { ... };
    // const validateDateValue = (val) => { ... };
    // const validateDescription = (description) => { ... };
*/

// Функція для отримання маски вводу (можливо, не потрібна, якщо ви використовуєте стандартний input)
const getMask = (rawValue) => {
  const val = rawValue.toLowerCase().trim();

  if (val.startsWith("seit")) {
    return [
      "s",
      "e",
      "i",
      "t",
      " ",
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }

  if (/^\d/.test(val)) {
    const parts = val.split(" - ");
    if (parts.length === 1) {
      return [
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        "-",
        " ",
        /[hHtT\d]/,
        /[eEuU\d]/,
        /[uUtT\d]/,
        /[tT\d]/,
        /[eE\d]/,
      ];
    }

    if (parts.length === 2) {
      const secondPart = parts[1].trim();
      if (secondPart.startsWith("h")) {
        return [
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          "-",
          " ",
          "h",
          "e",
          "u",
          "t",
          "e",
        ];
      } else {
        return [
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          "-",
          " ",
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ];
      }
    }
  }

  return [
    /[sSmM]/,
    /[eEM\d]/,
    /[iIM\d]/,
    /[tT\/\d]/,
    /[\d ]/,
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    "-",
    " ",
    /[hHtT\d]/,
    /[eEuU\d]/,
    /[uUtT\d]/,
    /[tT\d]/,
    /[eE\d]/,
  ];
};

const BerufserfahrungenSection = ({ title = "Berufserfahrungen", data, onUpdate }) => {
  const suggestionsList = resumeFormTexts.berufserfahrungenSuggestions;
  // Видалити або закоментувати стан для помилок
  // const [dateErrors, setDateErrors] = useState([]);
  // const [descriptionErrors, setDescriptionErrors] = useState([]);
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
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
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
    // Видалити або закоментувати блок валідації
    /*
    const newDateErrors = [];
    const newDescriptionErrors = [];

    updatedEntries.forEach((entry) => {
      try {
        if (entry.date.trim() !== "") validateDateValue(entry.date);
        newDateErrors.push(null);
      } catch (error) {
        newDateErrors.push(error.message);
      }

      try {
        if (entry.description.trim() !== "") validateDescription(entry.description);
        newDescriptionErrors.push(null);
      } catch (error) {
        newDescriptionErrors.push(error.message);
      }
    });

    setDateErrors(newDateErrors);
    setDescriptionErrors(newDescriptionErrors);

    // Перевірка наявності помилок перед оновленням
    const hasErrors =
      newDateErrors.some((err) => err !== null) ||
      newDescriptionErrors.some((err) => err !== null);
    if (!hasErrors) {
      onUpdate(updatedEntries);
    } else {
      console.error("Є помилки у введених даних");
    }
    */

    // Якщо валідація видалена, просто оновлюємо
    onUpdate(updatedEntries);
  };

  // Обробка зміни дати без валідації
  const handleDateChange = (index, newValue) => {
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

  // Обробка зміни місця роботи
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
    // setDescriptionErrors([...descriptionErrors, null]);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
    // Видалити або закоментувати видалення помилки
    /*
    const updatedDateErrors = dateErrors.filter((_, i) => i !== index);
    const updatedDescriptionErrors = descriptionErrors.filter((_, i) => i !== index);
    setDateErrors(updatedDateErrors);
    setDescriptionErrors(updatedDescriptionErrors);
    */
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;

    // Скидаємо висоту, щоб уникнути некоректних розрахунків
    field.style.height = "auto";

    // Встановлюємо нову висоту на основі scrollHeight
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
    <section className={styles.berufserfahrungenSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <div className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле дати */}
            <div className={styles.dateCell}>
              {/* Використовуємо стандартний input замість MaskedInput */}
              <input
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                placeholder={entry.datePlaceholder}
                className={styles.inputField}
                onBlur={() => {
                  // Використовуємо setTimeout, щоб дозволити обробнику кліку на Info Button виконатися перш ніж активний рядок буде скинуто
                  setTimeout(() => {
                    if (!isModalOpenRef.current) {
                      setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
                      setActiveDescriptionIndex(null);
                    }
                  }, 100);
                }}
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
                  className={`${styles.inputField} ${styles.textareaField}`}
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

              {/* Видалити або закоментувати блок з errorMessage */}
              {/*
              {descriptionErrors[index] && (
                <div className={styles.errorMessage}>{descriptionErrors[index]}</div>
              )}
              */}
            </div>

            {/* Поле місця роботи */}
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
                onBlur={() => {
                  // Використовуємо setTimeout, щоб дозволити обробнику кліку на Info Button виконатися перш ніж activeDescriptionIndex буде скинуто
                  setTimeout(() => {
                    if (!isModalOpenRef.current) {
                      setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
                      setActiveDescriptionIndex(null);
                    }
                  }, 100);
                }}
              ></textarea>
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

BerufserfahrungenSection.propTypes = {
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

export default BerufserfahrungenSection;