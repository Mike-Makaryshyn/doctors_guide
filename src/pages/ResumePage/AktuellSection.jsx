// src/pages/ResumePage/AktuellSection.jsx

import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types"; // Імпорт PropTypes
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MaskedInput from "react-text-mask";
import { parse, isValid } from "date-fns";
import resumeFormTexts from "../../constants/translation/ResumeForm"; // Імпорт підказок
import styles from "./ResumeSection.module.css";
import { db, auth } from "../../firebase"; // Імпорт Firebase конфігурації
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore"; // Додано deleteDoc
import { toast } from "react-toastify"; // Імпорт react-toastify для сповіщень
import "react-toastify/dist/ReactToastify.css";

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
    // Якщо введення ще не завершене, не показувати помилки
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
      if (parts[1] !== "heute") checkMMYYYY(parts[1]);
      return;
    }
  }

  throw new Error("Ungültiges Datumsformat.");
};

// Функція для створення маски вводу
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

// Використання forwardRef для доступу до методів з батьківського компонента
const AktuellSection = forwardRef(({ title = "Aktuell", onNext }, ref) => {
  const suggestionsList = resumeFormTexts.suggestions; // Використання пропозицій з ResumeForm
  const [entries, setEntries] = useState([{ date: "", description: "", datePlaceholder: "Datum" }]);
  const [dateErrors, setDateErrors] = useState([null]);
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const suggestionsRef = useRef(null);

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

  // Завантаження даних Aktuell з Firestore
  const fetchAktuellData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      return;
    }

    try {
      const aktuellDocRef = doc(db, "users", user.uid, "resume", "aktuell");
      const aktuellDoc = await getDoc(aktuellDocRef);
      if (aktuellDoc.exists()) {
        const data = aktuellDoc.data();
        console.log("Отримані дані Aktuell:", data); // Доданий лог
        if (data.entries && Array.isArray(data.entries)) {
          setEntries(data.entries);
        }
      } else {
        console.log("Документ Aktuell не знайдено");
      }
    } catch (error) {
      console.error("Помилка отримання даних Aktuell:", error);
      toast.error("Помилка отримання даних Aktuell");
    }
  };

  useEffect(() => {
    fetchAktuellData();
  }, []);

  useEffect(() => {
    const fields = document.querySelectorAll(".inputField");
    fields.forEach((field) => {
      field.style.height = "auto"; // Скидаємо висоту
      field.style.height = `${field.scrollHeight}px`; // Встановлюємо висоту
    });
  }, []);

  // Збереження даних Aktuell у Firestore
  const saveAktuellData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      return;
    }

    try {
      const nonEmptyEntries = entries.filter(
        (entry) => entry.date.trim() !== "" || entry.description.trim() !== ""
      );

      if (nonEmptyEntries.length === 0) {
        const aktuellDocRef = doc(db, "users", user.uid, "resume", "aktuell");
        await deleteDoc(aktuellDocRef);
        console.log("Документ Aktuell видалено успішно");
      } else {
        nonEmptyEntries.forEach((entry, index) => {
          if (entry.date.trim() !== "") validateDateValue(entry.date);
        });

        const aktuellDocRef = doc(db, "users", user.uid, "resume", "aktuell");
        await setDoc(aktuellDocRef, { entries: nonEmptyEntries }, { merge: true });
        console.log("Дані Aktuell успішно збережено");
      }
    } catch (error) {
      console.error("Помилка збереження даних Aktuell:", error);
      toast.error(`Помилка збереження даних Aktuell: ${error.message}`);
    }
  };

  useImperativeHandle(ref, () => ({
    saveData: saveAktuellData,
  }));

  const handleDateChange = (index, newValue) => {
    const updatedEntries = [...entries];
    updatedEntries[index].date = newValue;
    setEntries(updatedEntries);

    const updatedErrors = [...dateErrors];
    try {
      if (newValue.trim() && !newValue.includes("_")) {
        validateDateValue(newValue);
        updatedErrors[index] = null;
      } else {
        updatedErrors[index] = null;
      }
    } catch (error) {
      updatedErrors[index] = error.message;
    }
    setDateErrors(updatedErrors);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = value;
    setEntries(updatedEntries);

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

  const handleSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = suggestion;
    setEntries(updatedEntries);

    setSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

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

  const addNewRow = () => {
    setEntries([...entries, { date: "", description: "", datePlaceholder: "Datum" }]);
    setDateErrors([...dateErrors, null]);
  };

  const removeRow = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    const updatedErrors = dateErrors.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    setDateErrors(updatedErrors);
  };

  const handleAutoExpand = (e) => {
    const field = e.target;

    // Скидаємо висоту, щоб отримати точні розрахунки
    field.style.height = "auto";

    // Встановлюємо висоту на основі scrollHeight
    field.style.height = `${field.scrollHeight}px`;
  };

  return (
    <section className={styles.aktuellSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для дати */}
            <div className={styles.dateCell}>
              <MaskedInput
                mask={getMask}
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                placeholder={entry.datePlaceholder || "Datum"}
                className={`${styles.inputField} ${styles.inputFieldsecond} ${
                  dateErrors[index] ? styles.inputFieldWithError : ""
                }`}
                onBlur={saveAktuellData}
              />
              {dateErrors[index] && (
                <div className={styles.errorMessage}>{dateErrors[index]}</div>
              )}
            </div>

            {/* Поле для опису з окремою кнопкою підказок */}
            <div className={styles.descriptionCell}>
              <div className={styles.inputWithInfo}>
                <textarea
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e); // Динамічне розширення висоти
                  }}
                  placeholder="Information"
                  className={`${styles.inputField}`} // Залишаємо старий клас
                  rows={1}
                ></textarea>
                <IconButton
                  onClick={() => toggleSuggestions(index)}
                  className={styles.infoButton}
                >
                  <InfoIcon />
                </IconButton>
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
                          onClick={() => handleSuggestionSelect(index, suggestion)}
                          className={styles.dropdown__item}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Кнопка для видалення рядка */}
            <div className={styles.buttonContainer}>
              <IconButton onClick={() => removeRow(index)}>
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
});

AktuellSection.propTypes = {
  title: PropTypes.string,
  onNext: PropTypes.func,
};

export default AktuellSection;