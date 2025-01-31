// src/pages/ResumePage/TechnicalSkillsSection.jsx
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
import styles from "./TechnicalSkillsSection.module.css";

const TechnicalSkillsSection = ({ title = "Technical Skills", data, onUpdate }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [activeField, setActiveField] = useState(null); // 'skill' або 'technicalLevel'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const isClickingSuggestionButtonRef = useRef(false); // Реф для відстеження натискання на лампочку
  const suggestionsRef = useRef(null); // Реф для списку підказок

  // Реф для кожного input
  const inputRefs = useRef([]);

  // Використовуємо підказки з ResumeForm.js
  const skillHints = resumeFormTexts.technicalSkillsSuggestions;
  const levelHints = resumeFormTexts.levelSuggestions;

  const handleFocus = (index, fieldType) => {
    setActiveRowIndex(index);
    setActiveField(fieldType);
  };

  // Функції для валідації
  const validateSkill = (skill) => {
    if (!skill.trim()) {
      throw new Error("Навичка не може бути порожньою.");
    }
    // Додайте додаткову валідацію за потребою
  };

  const validateTechnicalLevel = (level) => {
    if (!level.trim()) {
      throw new Error("Рівень не може бути порожнім.");
    }
    // Додайте додаткову валідацію за потребою
  };

  // Обробка зміни навички з валідацією
  const handleSkillChange = (index, newValue) => {
    try {
      validateSkill(newValue);
      console.log("Навичка успішно валідована");
    } catch (error) {
      console.error("Помилка валідації навички:", error.message);
      // Можливо, додати повідомлення користувачу
    }

    const updatedEntries = [...data];
    updatedEntries[index].skill = newValue;
    onUpdate(updatedEntries);
  };

  // Обробка зміни рівня з валідацією
  const handleLevelChange = (index, newValue) => {
    try {
      validateTechnicalLevel(newValue);
      console.log("Рівень успішно валідований");
    } catch (error) {
      console.error("Помилка валідації рівня:", error.message);
      // Можливо, додати повідомлення користувачу
    }

    const updatedEntries = [...data];
    updatedEntries[index].technicalLevel = newValue;
    onUpdate(updatedEntries);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { skill: "", technicalLevel: "" }];
    onUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "skill"); // Фокус на skill за замовчуванням
      if (inputRefs.current[lastIndex * 2]) { // Множимо на 2 для розділення Skill і Level
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
        const fieldIndex = activeField === "technicalLevel" ? 1 : 0;
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
    <section className={styles.technicalSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для навички */}
            <div className={styles.skillCell}>
              <input
                type="text"
                value={entry.skill || ""}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "skill")}
                onBlur={() => {
                  // Скидаємо фокус тільки якщо модальне вікно не відкрито
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Навичка"
                className={styles.inputField}
                ref={(el) => (inputRefs.current[index * 2] = el)} // Множимо на 2 для розділення Skill і Level
              />

              {/* Кнопка підказки для навички */}
              {activeField === "skill" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true; // Встановлюємо флаг перед натисканням
                    }}
                    onClick={() => {
                      setActiveRowIndex(index); // Встановлюємо активний рядок
                      setActiveField("skill"); // Встановлюємо активне поле
                      toggleSuggestions();
                      // Скидаємо флаг після натискання
                      setTimeout(() => {
                        isClickingSuggestionButtonRef.current = false;
                      }, 0);
                    }}
                    aria-label="Підказки для навички"
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
                value={entry.technicalLevel || ""}
                onChange={(e) => handleLevelChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "technicalLevel")}
                onBlur={() => {
                  // Скидаємо фокус тільки якщо модальне вікно не відкрито
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Рівень"
                className={styles.inputField}
                ref={(el) => (inputRefs.current[index * 2 + 1] = el)} // Множимо на 2 і додаємо 1 для рівня
              />

              {/* Кнопка підказки для рівня */}
              {activeField === "technicalLevel" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true; // Встановлюємо флаг перед натисканням
                    }}
                    onClick={() => {
                      setActiveRowIndex(index); // Встановлюємо активний рядок
                      setActiveField("technicalLevel"); // Встановлюємо активне поле
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
          {(activeField === "skill" ? skillHints : levelHints).map((hint, idx) => (
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

TechnicalSkillsSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string,
      technicalLevel: PropTypes.string,
      id: PropTypes.string, // Додайте поле id для Firebase документів, якщо потрібно
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TechnicalSkillsSection;