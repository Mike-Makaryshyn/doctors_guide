import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Використовуємо лампочку для підказок
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./LanguageSkillsSection.module.css";

const LanguageSkillsSection = ({ title = "", data, onUpdate }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [activeField, setActiveField] = useState(null); // "language" або "level"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const isClickingSuggestionButtonRef = useRef(false); // Реф для відстеження натискання на лампочку
  const suggestionsRef = useRef(null); // Реф для списку підказок

  // Реф для кожного textarea
  const inputRefs = useRef([]);

  // Використовуємо підказки з ResumeForm.js
  const languageHints = resumeFormTexts.languageSkillsSuggestions;
  const levelHints = resumeFormTexts.levelSuggestions;

  const handleFocus = (index, fieldType) => {
    setActiveRowIndex(index);
    setActiveField(fieldType);
    // Автоматичне розширення: скинемо висоту і встановимо її з scrollHeight
    const field = inputRefs.current[index * 2 + (fieldType === "level" ? 1 : 0)];
    if (field) {
      field.style.height = "auto";
      field.style.height = `${field.scrollHeight}px`;
    }
  };

  // Функції для валідації
  const validateLanguage = (language) => {
    if (!language.trim()) {
      throw new Error("Language cannot be empty.");
    }
  };

  const validateLevel = (level) => {
    if (!level.trim()) {
      throw new Error("Level cannot be empty.");
    }
  };

  // Обробка зміни мови з валідацією
  const handleLanguageChange = (index, newValue) => {
    try {
      validateLanguage(newValue);
      console.log("Language validated successfully");
    } catch (error) {
      console.error("Language validation error:", error.message);
    }
    const updatedEntries = [...data];
    updatedEntries[index].language = newValue;
    onUpdate(updatedEntries);

    // Авто-розширення textarea
    const field = inputRefs.current[index * 2];
    if (field) {
      field.style.height = "auto";
      field.style.height = `${field.scrollHeight}px`;
    }
  };

  // Обробка зміни рівня з валідацією
  const handleLevelChange = (index, newValue) => {
    try {
      validateLevel(newValue);
      console.log("Level validated successfully");
    } catch (error) {
      console.error("Level validation error:", error.message);
    }
    const updatedEntries = [...data];
    updatedEntries[index].level = newValue;
    onUpdate(updatedEntries);

    // Авто-розширення textarea
    const field = inputRefs.current[index * 2 + 1];
    if (field) {
      field.style.height = "auto";
      field.style.height = `${field.scrollHeight}px`;
    }
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { language: "", level: "" }];
    onUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "language"); // Фокус на language за замовчуванням
      if (inputRefs.current[lastIndex * 2]) {
        inputRefs.current[lastIndex * 2].focus();
      }
    }, 100);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);
  };

  // Відкриття модального вікна
  const toggleSuggestions = () => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveRowIndex(null);
    setActiveField(null);
  };

  // Вставка підказки у відповідне поле
  const handleSelectHint = (hint) => {
    if (activeRowIndex !== null && activeField) {
      const updatedEntries = [...data];
      const currentValue = updatedEntries[activeRowIndex][activeField] || "";
      const newValue = currentValue ? `${currentValue}\n${hint}` : hint;
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
          console.error("Error: Textarea not found for index", activeRowIndex);
        }
      }, 100);

      handleCloseModal();
    }
  };

  // Закриття модалки при кліку поза її межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
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
              <textarea
                value={entry.language || ""}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "language")}
                onBlur={() => {
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Language"
                className={styles.inputField}
                ref={(el) => (inputRefs.current[index * 2] = el)}
                rows={1}
              />
              {/* Кнопка підказки для мови */}
              {activeField === "language" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true;
                    }}
                    onClick={() => {
                      setActiveRowIndex(index);
                      setActiveField("language");
                      toggleSuggestions();
                      setTimeout(() => {
                        isClickingSuggestionButtonRef.current = false;
                      }, 0);
                    }}
                    aria-label="Language suggestions"
                  >
                    <LightbulbIcon className={styles.glowingLightbulb} />
                  </IconButton>
                </div>
              )}
            </div>

            {/* Поле для рівня */}
            <div className={styles.levelCell}>
              <textarea
                value={entry.level || ""}
                onChange={(e) => handleLevelChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "level")}
                onBlur={() => {
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Level"
                className={styles.inputField}
                ref={(el) => (inputRefs.current[index * 2 + 1] = el)}
                rows={1}
              />
              {/* Кнопка підказки для рівня */}
              {activeField === "level" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true;
                    }}
                    onClick={() => {
                      setActiveRowIndex(index);
                      setActiveField("level");
                      toggleSuggestions();
                      setTimeout(() => {
                        isClickingSuggestionButtonRef.current = false;
                      }, 0);
                    }}
                    aria-label="Level suggestions"
                  >
                    <LightbulbIcon className={styles.glowingLightbulb} />
                  </IconButton>
                </div>
              )}
            </div>

            {/* Кнопка видалення */}
            <div className={styles.buttonContainer}>
              <IconButton
                onClick={() => removeRow(index)}
                className={styles.deleteButton}
                aria-label="Delete"
              >
                <DeleteIcon />
              </IconButton>
            </div>

            {/* Контейнер кнопки видалення для мобільних */}
            <div className={styles.deleteButtonContainer}>
              <IconButton
                onClick={() => removeRow(index)}
                className={styles.deleteButton}
                aria-label="Delete"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </form>

      {/* Кнопка додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Add">
          <AddIcon />
        </IconButton>
      </div>

      {/* Модальне вікно з підказками – без хедера */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        classes={{ paper: styles.customDialog }}
      >
        <IconButton className={styles.closeButton} onClick={handleCloseModal}>
          &times;
        </IconButton>
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
      id: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default LanguageSkillsSection;