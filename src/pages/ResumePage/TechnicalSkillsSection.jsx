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
import styles from "./TechnicalSkillsSection.module.css";

const TechnicalSkillsSection = ({ title = "", data, onUpdate }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [activeField, setActiveField] = useState(null); // "skill" або "technicalLevel"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const isClickingSuggestionButtonRef = useRef(false); // Реф для відстеження натискання на лампочку
  const suggestionsRef = useRef(null); // Реф для списку підказок

  // Використовуємо textarea для автозбільшення
  const textareaRefs = useRef([]);

  // Підказки з ResumeForm.js
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
    // Додаткову валідацію можна додати за потребою
  };

  const validateTechnicalLevel = (level) => {
    if (!level.trim()) {
      throw new Error("Рівень не може бути порожнім.");
    }
    // Додаткову валідацію можна додати за потребою
  };

  // Автоматичне розширення textarea
  const autoResizeTextarea = (refIndex) => {
    const el = textareaRefs.current[refIndex];
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  };

  // Обробка зміни навички
  const handleSkillChange = (index, newValue) => {
    try {
      validateSkill(newValue);
      console.log("Навичка успішно валідована");
    } catch (error) {
      console.error("Помилка валідації навички:", error.message);
      // За потребою можна додати повідомлення користувачу
    }
    const updatedEntries = [...data];
    updatedEntries[index].skill = newValue;
    onUpdate(updatedEntries);
    autoResizeTextarea(index * 2);
  };

  // Обробка зміни рівня
  const handleLevelChange = (index, newValue) => {
    try {
      validateTechnicalLevel(newValue);
      console.log("Рівень успішно валідований");
    } catch (error) {
      console.error("Помилка валідації рівня:", error.message);
    }
    const updatedEntries = [...data];
    updatedEntries[index].technicalLevel = newValue;
    onUpdate(updatedEntries);
    autoResizeTextarea(index * 2 + 1);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { skill: "", technicalLevel: "" }];
    onUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "skill"); // Фокус на skill за замовчуванням
      if (textareaRefs.current[lastIndex * 2]) {
        autoResizeTextarea(lastIndex * 2);
        textareaRefs.current[lastIndex * 2].focus();
      }
    }, 100);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);
  };

  // Відкриття модального вікна з підказками
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
        const fieldIndex = activeField === "technicalLevel" ? 1 : 0;
        const el = textareaRefs.current[activeRowIndex * 2 + fieldIndex];
        if (el) {
          el.style.height = "auto";
          el.style.height = el.scrollHeight + "px";
          el.focus();
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={styles.technicalSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для навички */}
            <div className={styles.skillCell}>
              <textarea
                value={entry.skill || ""}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "skill")}
                onBlur={() => {
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Навичка"
                className={styles.inputField}
                rows={1}
                ref={(el) => (textareaRefs.current[index * 2] = el)}
              />
              {activeField === "skill" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true;
                    }}
                    onClick={() => {
                      setActiveRowIndex(index);
                      setActiveField("skill");
                      toggleSuggestions();
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
              <textarea
                value={entry.technicalLevel || ""}
                onChange={(e) => handleLevelChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "technicalLevel")}
                onBlur={() => {
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setActiveField(null);
                  }
                }}
                placeholder="Рівень"
                className={styles.inputField}
                rows={1}
                ref={(el) => (textareaRefs.current[index * 2 + 1] = el)}
              />
              {activeField === "technicalLevel" && activeRowIndex === index && (
                <div className={styles.suggestionButtonContainer}>
                  <IconButton
                    className={styles.suggestionButton}
                    onMouseDown={() => {
                      isClickingSuggestionButtonRef.current = true;
                    }}
                    onClick={() => {
                      setActiveRowIndex(index);
                      setActiveField("technicalLevel");
                      toggleSuggestions();
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
              <IconButton onClick={() => removeRow(index)} className={styles.deleteButton} aria-label="Видалити">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </form>
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>
      <Dialog open={isModalOpen} onClose={handleCloseModal} classes={{ paper: styles.customDialog }}>
        <IconButton className={styles.closeButton} onClick={handleCloseModal}>
          &times;
        </IconButton>
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
      id: PropTypes.string, // За потреби додайте поле id
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TechnicalSkillsSection;