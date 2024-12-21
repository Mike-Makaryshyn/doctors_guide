// BerufserfahrungenSection.jsx
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
import resumeFormTexts from "../../constants/translation/ResumeForm"; // Імпорт пропозицій
import styles from "./ResumeSection.module.css";
import { db, auth } from "../../firebase"; // Імпорт Firebase конфігурації
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore"; // Додано deleteDoc
import { toast } from "react-toastify"; // Імпорт react-toastify для сповіщень
import "react-toastify/dist/ReactToastify.css";
import debounce from "lodash.debounce"; // Імпорт debounce

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

// Маска вводу
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
const BerufserfahrungenSection = forwardRef(({ title = "Berufserfahrungen", onNext }, ref) => {
  const suggestionsList = resumeFormTexts.berufserfahrungenSuggestions;
  const [entries, setEntries] = useState([
    { date: "", description: "", place: "", datePlaceholder: "Datum" },
  ]);
  const [dateErrors, setDateErrors] = useState([]);
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const suggestionsRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false); // Додано стан для індикатора завантаження

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

  // Функція для отримання даних з Firestore
  const fetchExperiencesData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      return;
    }

    try {
      const experiencesDocRef = doc(db, "users", user.uid, "resume", "berufserfahrungen");
      const experiencesDoc = await getDoc(experiencesDocRef);
      if (experiencesDoc.exists()) {
        const data = experiencesDoc.data();
        console.log("Отримані дані Berufserfahrungen:", data); // Доданий лог
        if (data.entries && Array.isArray(data.entries)) {
          setEntries(data.entries);
        }
      } else {
        console.log("Документ Berufserfahrungen не знайдено");
      }
    } catch (error) {
      console.error("Помилка отримання даних Berufserfahrungen:", error);
      toast.error("Помилка отримання даних Berufserfahrungen");
    }
  };

  // Виклик функції завантаження даних при монтуванні компонента
  useEffect(() => {
    fetchExperiencesData();
  }, []);

  // Функція для збереження даних у Firestore з debounce
  const saveExperiencesData = async () => {
    setIsLoading(true); // Початок завантаження
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      setIsLoading(false);
      return;
    }

    try {
      // Фільтруємо записи, де обидва поля порожні
      const nonEmptyEntries = entries.filter(
        (entry) => entry.date.trim() !== "" || entry.description.trim() !== ""
      );

      if (nonEmptyEntries.length === 0) {
        // Якщо немає записів, видаляємо документ
        const experiencesDocRef = doc(db, "users", user.uid, "resume", "berufserfahrungen");
        await deleteDoc(experiencesDocRef);
        console.log("Документ Berufserfahrungen видалено успішно");
        // Якщо не хочете відображати повідомлення, видаліть наступний рядок:
        // toast.success("Документ Berufserfahrungen видалено успішно!");
      } else {
        // Валідація лише непорожніх записів
        nonEmptyEntries.forEach((entry, index) => {
          if (entry.date.trim() !== "") validateDateValue(entry.date);
          if (entry.description.trim() !== "") {
            validateDescription(entry.description);
          }
          // Ви можете додати додаткову валідацію для поля "place", якщо необхідно
        });

        const experiencesDocRef = doc(db, "users", user.uid, "resume", "berufserfahrungen");
        await setDoc(experiencesDocRef, { entries: nonEmptyEntries }, { merge: true });
        console.log("Дані Berufserfahrungen успішно збережено");
        // Якщо не хочете відображати повідомлення, видаліть наступний рядок:
        // toast.success("Дані Berufserfahrungen успішно збережено!");
      }
    } catch (error) {
      console.error("Помилка збереження даних Berufserfahrungen:", error);
      toast.error(`Помилка збереження даних Berufserfahrungen: ${error.message}`);
    } finally {
      setIsLoading(false); // Завершення завантаження
    }
  };

  // Дебаунс для збереження даних
  const debouncedSave = useRef(
    debounce(() => {
      saveExperiencesData();
    }, 500)
  ).current;

  // Надання методу saveExperiencesData зовні через ref
  useImperativeHandle(ref, () => ({
    saveData: saveExperiencesData,
  }));

  // Обробка зміни дати
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
        updatedErrors[index] = null; // Немає помилок при незавершеному введенні
      }
    } catch (error) {
      updatedErrors[index] = error.message;
    }
    setDateErrors(updatedErrors);
  };

  // Обробка зміни опису
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

  // Обробка зміни місця роботи
  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index].place = value;
    setEntries(updatedEntries);
  };

  // Вибір пропозиції
  const handleSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = suggestion;
    setEntries(updatedEntries);
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

  // Додавання нового рядка
  const addNewRow = () => {
    setEntries([
      ...entries,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ]);
    setDateErrors([...dateErrors, null]);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    const updatedErrors = dateErrors.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    setDateErrors(updatedErrors);
  };

  return (
    <section className={styles.berufserfahrungenSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
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
              <Input
                value={entry.description || ""}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                placeholder="Information"
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => toggleSuggestions(index)}>
                      <InfoIcon />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              {suggestionsState.activeRow === index && (
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

            {/* Поле місця роботи */}
            <div className={styles.placeCell}>
              <Input
                value={entry.place || ""}
                onChange={(e) => handlePlaceChange(index, e.target.value)}
                placeholder="Ort"
                disableUnderline
                className={styles.inputField}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
            </div>

            {/* Кнопка видалення рядка */}
            <div className={styles.buttonContainer}>
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

      {/* Видалено кнопку "Далі" */}
      {/* <button type="button" onClick={handleNext}>
        Далі
      </button> */}

      {/* Відображення індикатора завантаження */}
      {isLoading && <div className={styles.loading}>Завантаження...</div>}
    </section>
  );
});

BerufserfahrungenSection.propTypes = {
  title: PropTypes.string,
  onNext: PropTypes.func.isRequired, // Пропс для функції переходу до наступної секції
};

export default BerufserfahrungenSection;