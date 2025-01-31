// src/pages/ResumePage/LanguageSkillsSection.jsx
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Використовуємо лампочку для підказок
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./LanguageSkillsSection.module.css";

const LanguageSkillsSection = ({ title = "Language Skills", data, onUpdate }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [activeField, setActiveField] = useState(null); // 'language' або 'level'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const isClickingSuggestionButtonRef = useRef(false); // Реф для відстеження натискання на лампочку
  const suggestionsRef = useRef(null); // Реф для списку підказок

  // Реф для кожного input
  const inputRefs = useRef([]);

  // Використовуємо підказки з ResumeForm.js
  const languageHints = resumeFormTexts.languageSkillsSuggestions;
  const levelHints = resumeFormTexts.levelSuggestions;

  const handleFocus = (index, fieldType) => {
    setActiveRowIndex(index);
    setActiveField(fieldType);
  };

  // Функції для валідації
  const validateLanguage = (language) => {
    if (!language.trim()) {
      throw new Error("Language cannot be empty.");
    }
    // Додайте додаткову валідацію за потребою
  };

  const validateLevel = (level) => {
    if (!level.trim()) {
      throw new Error("Level cannot be empty.");
    }
    // Додайте додаткову валідацію за потребою
  };

  // Обробка зміни мови з валідацією
  const handleLanguageChange = (index, newValue) => {
    try {
      validateLanguage(newValue);
      console.log("Language validated successfully");
    } catch (error) {
      console.error("Language validation error:", error.message);
      // Можливо, додати повідомлення користувачу
    }

    const updatedEntries = [...data];
    updatedEntries[index].language = newValue;
    onUpdate(updatedEntries);
  };

  // Обробка зміни рівня з валідацією
  const handleLevelChange = (index, newValue) => {
    try {
      validateLevel(newValue);
      console.log("Level validated successfully");
    } catch (error) {
      console.error("Level validation error:", error.message);
      // Можливо, додати повідомлення користувачу
    }

    const updatedEntries = [...data];
    updatedEntries[index].level = newValue;
    onUpdate(updatedEntries);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { language: "", level: "" }];
    onUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "language"); // Фокус на language за замовчуванням
      if (inputRefs.current[lastIndex * 2]) { // Множимо на 2 для Language
        inputRefs.current[lastIndex * 2].focus();
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
    setIsModalOpen(true);
    isModalOpenRef.current = true; // Оновлюємо реф
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false; // Оновлюємо реф
    setActiveRowIndex(null);
    setActiveField(null);
  };

  // Вставка підказки у відповідне поле
  const handleSelectHint = (hint) => {
    if (activeRowIndex !== null && activeField) {
      const updatedEntries = [...data];
      const currentValue = updatedEntries[activeRowIndex][activeField] || "";
      const newValue = currentValue
        ? `${currentValue}\n${hint}`
        : hint;
      updatedEntries[activeRowIndex][activeField] = newValue;
      onUpdate(updatedEntries);

      setTimeout(() => {
        const fieldIndex = activeField === "level" ? 1 : 0;
        const field = inputRefs.current[activeRowIndex * 2 + fieldIndex];
        if (field) {
          field.style.height = "auto";
          field.style.height = `${field.scrollHeight}px`;
          field.focus();
        } else {
          console.error("Error: Input not found for index", activeRowIndex);
        }
      }, 100);

      handleCloseModal();
    }
  };

  // Закриття модалки при кліку поза її межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setActiveRowIndex(null);
        setActiveField(null);
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.languageSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для мови */}
            <div className={styles.languageCell}>
              <input
                type="text"
                value={entry.language || ""}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "language")}
                onBlur={() => {
                  // Скидаємо фокус тільки якщо модальне вікно не відкрито
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Language"
                className={styles.inputField}
                ref={(el) => (inputRefs.current[index * 2] = el)} // Множимо на 2 для розділення Language і Level
              />

              {/* Кнопка підказки для мови */}
              {activeField === "language" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true; // Встановлюємо флаг перед натисканням
                    }}
                    onClick={() => {
                      setActiveRowIndex(index); // Встановлюємо активний рядок
                      setActiveField("language"); // Встановлюємо активне поле
                      toggleSuggestions();
                      // Скидаємо флаг після натискання
                      setTimeout(() => {
                        isClickingSuggestionButtonRef.current = false;
                      }, 0);
                    }}
                    aria-label="Підказки для мови"
                  >
                    <LightbulbIcon className={styles.glowingLightbulb} />
                  </IconButton>
                </div>
              )}
            </div>

            {/* Поле для рівня */}
            <div className={styles.levelCell}>
              <input
                type="text"
                value={entry.level || ""}
                onChange={(e) => handleLevelChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "level")}
                onBlur={() => {
                  // Скидаємо фокус тільки якщо модальне вікно не відкрито
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Level"
                className={styles.inputField}
                ref={(el) => (inputRefs.current[index * 2 + 1] = el)} // Множимо на 2 і додаємо 1 для рівня
              />

              {/* Кнопка підказки для рівня */}
              {activeField === "level" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true; // Встановлюємо флаг перед натисканням
                    }}
                    onClick={() => {
                      setActiveRowIndex(index); // Встановлюємо активний рядок
                      setActiveField("level"); // Встановлюємо активне поле
                      toggleSuggestions();
                      // Скидаємо флаг після натискання
                      setTimeout(() => {
                        isClickingSuggestionButtonRef.current = false;
                      }, 0);
                    }}
                    aria-label="Підказки для рівня"
                  >
                    <LightbulbIcon className={styles.glowingLightbulb} />
                  </IconButton>
                </div>
              )}
            </div>

            {/* Кнопка видалення */}
            <div className={styles.buttonContainer}>
              <IconButton onClick={() => removeRow(index)} className={styles.deleteButton} aria-label="Видалити">
                <DeleteIcon />
              </IconButton>
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
        ))}
      </form>

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
          {(activeField === "language" ? languageHints : levelHints).map((hint, idx) => (
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

LanguageSkillsSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string,
      level: PropTypes.string,
      id: PropTypes.string, // Додайте поле id для Firebase документів, якщо потрібно
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default LanguageSkillsSection;