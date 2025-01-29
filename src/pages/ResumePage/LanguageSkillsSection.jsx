// src/pages/ResumePage/LanguageSkillsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./LanguageSkillsSection.module.css";
import debounce from "lodash.debounce";

// Функція для перевірки валідності мови
const validateLanguage = (language) => {
  if (!language.trim()) {
    throw new Error("Мова не може бути порожньою.");
  }
  // Додайте додаткову валідацію за потребою
};

// Функція для перевірки валідності рівня
const validateLevel = (level) => {
  if (!level.trim()) {
    throw new Error("Рівень не може бути порожнім.");
  }
  // Додайте додаткову валідацію за потребою
};

const LanguageSkillsSection = ({ title = "Language Skills", data, onUpdate }) => {
  const [languageErrors, setLanguageErrors] = useState([]);
  const [levelErrors, setLevelErrors] = useState([]);
  const [languageSuggestionsState, setLanguageSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const languageSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const languageSuggestionsList = resumeFormTexts.languageSkillsSuggestions;
  const levelSuggestionsList = resumeFormTexts.levelSuggestions;

  // Відстеження кліків поза списком пропозицій
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSuggestionsRef.current &&
        !languageSuggestionsRef.current.contains(event.target) &&
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setLanguageSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
        setLevelSuggestionsState({
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

  // Валідація даних перед оновленням
  const handleUpdate = (updatedEntries) => {
    // Валідація
    const newLanguageErrors = [];
    const newLevelErrors = [];

    updatedEntries.forEach((entry) => {
      try {
        if (entry.language.trim() !== "") validateLanguage(entry.language);
        newLanguageErrors.push(null);
      } catch (error) {
        newLanguageErrors.push(error.message);
      }

      try {
        if (entry.level.trim() !== "") validateLevel(entry.level);
        newLevelErrors.push(null);
      } catch (error) {
        newLevelErrors.push(error.message);
      }
    });

    setLanguageErrors(newLanguageErrors);
    setLevelErrors(newLevelErrors);

    // Перевірка наявності помилок перед оновленням
    const hasErrors =
      newLanguageErrors.some((err) => err !== null) ||
      newLevelErrors.some((err) => err !== null);
    if (!hasErrors) {
      onUpdate(updatedEntries);
    } else {
      console.error("Є помилки у введених даних");
    }
  };

  // Обробка зміни мови
  const handleLanguageChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].language = value;
    handleUpdate(updatedEntries);

    if (value.trim().length > 0) {
      const filtered = languageSuggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setLanguageSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      setLanguageSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  // Обробка зміни рівня
  const handleLevelChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].level = value;
    handleUpdate(updatedEntries);

    if (value.trim().length > 0) {
      const filtered = levelSuggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setLevelSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  // Вибір пропозиції для мови
  const handleLanguageSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...data];
    updatedEntries[index].language = suggestion;
    handleUpdate(updatedEntries);
    setLanguageSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Вибір пропозиції для рівня
  const handleLevelSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...data];
    updatedEntries[index].level = suggestion;
    handleUpdate(updatedEntries);
    setLevelSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Перемикання списку пропозицій для мови
  const toggleLanguageSuggestions = (index) => {
    if (languageSuggestionsState.activeRow === index) {
      setLanguageSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else {
      setLanguageSuggestionsState({
        activeRow: index,
        filteredSuggestions: languageSuggestionsList.filter((suggestion) =>
          suggestion.toLowerCase().includes(data[index]?.language?.toLowerCase() || "")
        ),
      });
    }
  };

  // Перемикання списку пропозицій для рівня
  const toggleLevelSuggestions = (index) => {
    if (levelSuggestionsState.activeRow === index) {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else {
      setLevelSuggestionsState({
        activeRow: index,
        filteredSuggestions: levelSuggestionsList.filter((suggestion) =>
          suggestion.toLowerCase().includes(data[index]?.level?.toLowerCase() || "")
        ),
      });
    }
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { language: "", level: "" }];
    handleUpdate(updatedEntries);
    setLanguageErrors([...languageErrors, null]);
    setLevelErrors([...levelErrors, null]);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
    const updatedLanguageErrors = languageErrors.filter((_, i) => i !== index);
    const updatedLevelErrors = levelErrors.filter((_, i) => i !== index);
    setLanguageErrors(updatedLanguageErrors);
    setLevelErrors(updatedLevelErrors);
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
      console.log("Debounced save called in LanguageSkillsSection");
    }, 500)
  ).current;

  return (
    <section className={styles.languageSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <div className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для мови */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter language"
                value={entry.language || ""}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => toggleLanguageSuggestions(index)}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={`${styles.inputField} ${
                  languageErrors[index] ? styles.inputFieldWithError : ""
                }`}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              {languageErrors[index] && (
                <div className={styles.errorMessage}>{languageErrors[index]}</div>
              )}
              <div
                className={`${styles.dropdown} ${
                  languageSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={languageSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {languageSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleLanguageSuggestionSelect(index, suggestion)}
                      className={styles.dropdown__item}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Поле для рівня */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter level"
                value={entry.level || ""}
                onChange={(e) => handleLevelChange(index, e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => toggleLevelSuggestions(index)}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={`${styles.inputField} ${
                  levelErrors[index] ? styles.inputFieldWithError : ""
                }`}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              {levelErrors[index] && (
                <div className={styles.errorMessage}>{levelErrors[index]}</div>
              )}
              <div
                className={`${styles.dropdown} ${
                  levelSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={levelSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {levelSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleLevelSuggestionSelect(index, suggestion)}
                      className={styles.dropdown__item}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Кнопка видалення */}
            <div className={styles.buttonContainer}>
              <IconButton onClick={() => removeRow(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Додати" по центру під усіма введеннями */}
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

LanguageSkillsSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string,
      level: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default LanguageSkillsSection;