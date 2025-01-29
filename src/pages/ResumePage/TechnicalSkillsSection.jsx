// src/pages/ResumePage/TechnicalSkillsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./TechnicalSkillsSection.module.css";
import debounce from "lodash.debounce";

// Функція для перевірки валідності навички
const validateSkill = (skill) => {
  if (!skill.trim()) {
    throw new Error("Навичка не може бути порожньою.");
  }
  // Додайте додаткову валідацію за потребою
};

// Функція для перевірки валідності рівня
const validateTechnicalLevel = (level) => {
  if (!level.trim()) {
    throw new Error("Рівень не може бути порожнім.");
  }
  // Додайте додаткову валідацію за потребою
};

const TechnicalSkillsSection = ({ title = "Technical Skills", data, onUpdate }) => {
  const [skillErrors, setSkillErrors] = useState([]);
  const [levelErrors, setLevelErrors] = useState([]);
  const [skillSuggestionsState, setSkillSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const skillSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const skillSuggestionsList = resumeFormTexts.technicalSkillsSuggestions;
  const levelSuggestionsList = resumeFormTexts.levelSuggestions;

  // Відстеження кліків поза списком пропозицій
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        skillSuggestionsRef.current &&
        !skillSuggestionsRef.current.contains(event.target) &&
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setSkillSuggestionsState({
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
    const newSkillErrors = [];
    const newLevelErrors = [];

    updatedEntries.forEach((entry) => {
      try {
        if (entry.skill.trim() !== "") validateSkill(entry.skill);
        newSkillErrors.push(null);
      } catch (error) {
        newSkillErrors.push(error.message);
      }

      try {
        if (entry.technicalLevel.trim() !== "") validateTechnicalLevel(entry.technicalLevel);
        newLevelErrors.push(null);
      } catch (error) {
        newLevelErrors.push(error.message);
      }
    });

    setSkillErrors(newSkillErrors);
    setLevelErrors(newLevelErrors);

    // Перевірка наявності помилок перед оновленням
    const hasErrors =
      newSkillErrors.some((err) => err !== null) ||
      newLevelErrors.some((err) => err !== null);
    if (!hasErrors) {
      onUpdate(updatedEntries);
    } else {
      console.error("Є помилки у введених даних");
    }
  };

  // Обробка зміни навички
  const handleSkillChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].skill = value;
    handleUpdate(updatedEntries);

    if (value.trim().length > 0) {
      const filtered = skillSuggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSkillSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      setSkillSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  // Обробка зміни рівня
  const handleLevelChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].technicalLevel = value;
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

  // Вибір пропозиції для навички
  const handleSkillSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...data];
    updatedEntries[index].skill = suggestion;
    handleUpdate(updatedEntries);
    setSkillSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Вибір пропозиції для рівня
  const handleLevelSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...data];
    updatedEntries[index].technicalLevel = suggestion;
    handleUpdate(updatedEntries);
    setLevelSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Перемикання списку пропозицій для навички
  const toggleSkillSuggestions = (index) => {
    if (skillSuggestionsState.activeRow === index) {
      setSkillSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else {
      setSkillSuggestionsState({
        activeRow: index,
        filteredSuggestions: skillSuggestionsList.filter((suggestion) =>
          suggestion.toLowerCase().includes(data[index]?.skill?.toLowerCase() || "")
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
          suggestion.toLowerCase().includes(data[index]?.technicalLevel?.toLowerCase() || "")
        ),
      });
    }
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { skill: "", technicalLevel: "" }];
    handleUpdate(updatedEntries);
    setSkillErrors([...skillErrors, null]);
    setLevelErrors([...levelErrors, null]);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
    const updatedSkillErrors = skillErrors.filter((_, i) => i !== index);
    const updatedLevelErrors = levelErrors.filter((_, i) => i !== index);
    setSkillErrors(updatedSkillErrors);
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
      console.log("Debounced save called in TechnicalSkillsSection");
    }, 500)
  ).current;

  return (
    <section className={styles.technicalSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <div className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для навички */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter skill"
                value={entry.skill || ""}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => toggleSkillSuggestions(index)}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={`${styles.inputField} ${
                  skillErrors[index] ? styles.inputFieldWithError : ""
                }`}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              {skillErrors[index] && (
                <div className={styles.errorMessage}>{skillErrors[index]}</div>
              )}
              <div
                className={`${styles.dropdown} ${
                  skillSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={skillSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {skillSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSkillSuggestionSelect(index, suggestion)}
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
                value={entry.technicalLevel || ""}
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

TechnicalSkillsSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string,
      technicalLevel: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TechnicalSkillsSection;