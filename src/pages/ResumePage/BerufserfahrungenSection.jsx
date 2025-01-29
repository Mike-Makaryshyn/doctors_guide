// src/pages/ResumePage/BerufserfahrungenSection.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MaskedInput from "react-text-mask";
import { parse, isValid } from "date-fns";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./ResumeSection.module.css";
import debounce from "lodash.debounce";

// Функція для перевірки валідності місяця
const isValidMonth = (month) => {
  const num = parseInt(month, 10);
  return num >= 1 && num <= 12;
};

// Функція для перевірки формату MM/yyyy
const checkMMYYYY = (str) => {
  const [m, y] = str.split("/");
  if (!m || !y || m.length !== 2 || y.length !== 4)
    throw new Error("Ungültiges Datumsformat. Erlaubt ist: MM/yyyy.");
  if (!isValidMonth(m)) throw new Error("Der Monat muss zwischen 01 und 12 liegen.");
  const date = parse(`${m}/01/${y}`, "MM/dd/yyyy", new Date());
  if (!isValid(date)) throw new Error("Ungültiges Datumsformat.");
};

// Функція для перевірки значення дати
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

// Функція для перевірки валідності опису
const validateDescription = (description) => {
  if (description.trim().length < 5) {
    throw new Error("Опис повинен містити принаймні 5 символів.");
  }
  // Додайте інші перевірки за потребою
};

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
  const [dateErrors, setDateErrors] = useState([]);
  const [descriptionErrors, setDescriptionErrors] = useState([]);
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const suggestionsRef = useRef(null);

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
    // Валідація
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
  };

  // Обробка зміни дати
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
    } else {
      setSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
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
    } else {
      setSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  // Обробка зміни місця роботи
  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].place = value;
    handleUpdate(updatedEntries);
  };

  // Вибір пропозиції
  const handleSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = suggestion;
    handleUpdate(updatedEntries);
    setSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Перемикання списку пропозицій
  const toggleSuggestions = (index) => {
    if (suggestionsState.activeRow === index) {
      setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
    } else {
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: suggestionsList.filter((suggestion) =>
          suggestion.toLowerCase().includes(data[index]?.description?.toLowerCase() || "")
        ),
      });
    }
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ];
    handleUpdate(updatedEntries);
    setDateErrors([...dateErrors, null]);
    setDescriptionErrors([...descriptionErrors, null]);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
    const updatedDateErrors = dateErrors.filter((_, i) => i !== index);
    const updatedDescriptionErrors = descriptionErrors.filter((_, i) => i !== index);
    setDateErrors(updatedDateErrors);
    setDescriptionErrors(updatedDescriptionErrors);
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;

    // Скидаємо висоту, щоб уникнути некоректних розрахунків
    field.style.height = "auto";

    // Встановлюємо нову висоту на основі scrollHeight
    field.style.height = `${field.scrollHeight}px`;
  };

  // Дебаунсоване збереження
  const debouncedSave = useRef(
    debounce(() => {
      // Збереження даних відбувається у батьківському компоненті
      // Тому тут може бути лише лог або виклик додаткової функції, якщо потрібно
      console.log("Debounced save called in BerufserfahrungenSection");
    }, 500)
  ).current;

  return (
    <section className={styles.berufserfahrungenSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <div className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле дати */}
            <div className={styles.dateCell}>
              <MaskedInput
                mask={getMask}
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                placeholder={entry.datePlaceholder}
                className={`${styles.inputField} ${
                  dateErrors[index] ? styles.inputFieldWithError : ""
                }`}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              {dateErrors[index] && (
                <div className={styles.errorMessage}>{dateErrors[index]}</div>
              )}
            </div>

            {/* Поле опису */}
            <div className={styles.descriptionCell}>
              <textarea
                value={entry.description || ""}
                onChange={(e) => {
                  handleDescriptionChange(index, e.target.value);
                  handleAutoExpand(e); // Динамічне розширення висоти
                }}
                placeholder="Information"
                className={`${styles.inputField} ${styles.textareaField}`}
                rows={1} // Початкова висота
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              ></textarea>
              {descriptionErrors[index] && (
                <div className={styles.errorMessage}>{descriptionErrors[index]}</div>
              )}
              {suggestionsState.activeRow === index &&
                suggestionsState.filteredSuggestions.length > 0 && (
                  <div
                    ref={suggestionsRef}
                    className={`${styles.dropdown} ${
                      suggestionsState.filteredSuggestions.length > 0
                        ? styles.open
                        : ""
                    }`}
                  >
                    <ul className={styles.dropdown__items}>
                      {suggestionsState.filteredSuggestions.map((suggestion, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            handleSuggestionSelect(index, suggestion)
                          }
                          className={styles.dropdown__item}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Поле місця роботи */}
            <div className={styles.placeCell}>
              <textarea
                value={entry.place || ""}
                onChange={(e) => {
                  handlePlaceChange(index, e.target.value);
                  handleAutoExpand(e); // Динамічне розширення висоти
                }}
                placeholder="Ort"
                className={`${styles.inputField} ${styles.textareaField}`}
                rows={1} // Початкова висота
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              ></textarea>
            </div>

            {/* Кнопка підказок і видалення */}
            <div className={styles.buttonContainer}>
              <IconButton onClick={() => toggleSuggestions(index)}>
                <InfoIcon />
              </IconButton>
              <IconButton onClick={() => removeRow(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>

      {/* Видалено: Відображення індикатора завантаження */}
      {/* {isLoading && <div className={styles.loading}>Завантаження...</div>} */}
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