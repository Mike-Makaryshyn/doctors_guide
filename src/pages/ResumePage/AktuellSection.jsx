// src/pages/ResumePage/AktuellSection.jsx
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { parse, isValid } from "date-fns";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./AktuellSection.module.css";
import debounce from "lodash.debounce";

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

const validateDescription = (description) => {
  if (description.trim().length < 5) {
    throw new Error("Опис повинен містити принаймні 5 символів.");
  }
  // Додайте інші перевірки за потребою
};

const AktuellSection = ({ title = "Aktuell", data, onUpdate }) => {
  const suggestionsList = resumeFormTexts.suggestions;

  const [visibleFields, setVisibleFields] = useState(data.map(() => false));
  const [hasCompletedFirstDate, setHasCompletedFirstDate] = useState(
    data.map(() => false)
  );
  const [hasStartedSecondDate, setHasStartedSecondDate] = useState(
    data.map(() => false)
  );
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const suggestionsRef = useRef(null);

  // Відстеження кліків поза списком пропозицій
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Обробка зміни дати
  const handleDateChange = (index, newValue) => {
    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    onUpdate(updatedEntries);

    // Динамічна логіка підказок
    if (newValue.toLowerCase().startsWith("seit")) {
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: ["seit MM/YYYY"],
      });
    } else if (newValue.includes(" - ") && newValue.endsWith(" - ")) {
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: ["heute"],
      });
    } else if (newValue.length === 0) {
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: ["MM/YYYY", "MM/YYYY - MM/YYYY", "seit MM/YYYY"],
      });
    } else {
      setSuggestionsState({ activeRow: index, filteredSuggestions: [] });
    }

    // Автоматично сховати підказки через 3 секунди
    setTimeout(() => {
      setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
    }, 3000);
  };

  // Обробка зміни опису
  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    onUpdate(updatedEntries);

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

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", datePlaceholder: "Datum" },
    ];
    onUpdate(updatedEntries);

    setVisibleFields([...visibleFields, false]);
    setHasStartedSecondDate([...hasStartedSecondDate, false]); // Новий рядок починається без другого поля
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);

    const updatedVisibility = visibleFields.filter((_, i) => i !== index);
    setVisibleFields(updatedVisibility);

    const updatedSecondDateState = hasStartedSecondDate.filter(
      (_, i) => i !== index
    );
    setHasStartedSecondDate(updatedSecondDateState);
  };

  // Вибір пропозиції
  const handleSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = suggestion;
    onUpdate(updatedEntries);
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
        filteredSuggestions: suggestionsList,
      });
    }
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
      <form>
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
    }}
    onBlur={() => {
      setIsFocused(false);
      if (!entry.date) setHintIndex(0);
    }}
    placeholder={isFocused || entry.date ? "" : dateHints[hintIndex]}
    className={`${styles.dateInput}`}
  />
</div>
            {/* Поле для опису з окремою кнопкою підказок */}
            <div className={styles.descriptionCell}>
              <div className={styles.inputWithInfo}>
                <textarea
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e);
                  }}
                  placeholder="Information"
                  className={`${styles.inputField}`}
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
                      {suggestionsState.filteredSuggestions.map(
                        (suggestion, i) => (
                          <li
                            key={i}
                            onClick={() =>
                              handleSuggestionSelect(index, suggestion)
                            }
                            className={styles.dropdown__item}
                          >
                            {suggestion}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>

            {/* Кнопка для видалення рядка */}
            <div className={styles.buttonContainer}>
              <IconButton
                onClick={() => toggleSuggestions(index)}
                className={styles.infoButton}
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                onClick={() => removeRow(index)}
                className={styles.deleteButton}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </form>

      {/* Кнопка для додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>
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
