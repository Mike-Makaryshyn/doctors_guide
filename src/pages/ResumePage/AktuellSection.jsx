// src/pages/ResumePage/AktuellSection.jsx
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./AktuellSection.module.css";

import { parse, isValid } from "date-fns";

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

const AktuellSection = ({ title = "", data, onUpdate }) => {
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Використовуємо підказки з ResumeForm.js
  const descriptionHints = resumeFormTexts.suggestions;

  // Обробка зміни дати
  const handleDateChange = (index, newValue) => {
    try {
      validateDateValue(newValue);
    } catch (error) {
      console.error(error.message);
    }
    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    onUpdate(updatedEntries);
  };

  // Обробка зміни опису
  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    onUpdate(updatedEntries);
    setTimeout(() => {
      const textarea = document.querySelectorAll("textarea")[index];
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, 50);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", datePlaceholder: "Datum" },
    ];
    onUpdate(updatedEntries);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);
  };

  // Відкриття/закриття модального вікна з підказками
  const toggleSuggestions = () => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveDescriptionIndex(null);
    setFocusedField(null);
  };

  // Додавання підказки в опис
  const handleSelectHint = (hint) => {
    if (activeDescriptionIndex === null || activeDescriptionIndex < 0) {
      console.error("Error: activeDescriptionIndex is invalid.");
      return;
    }
    const updatedEntries = [...data];
    const currentDescription = updatedEntries[activeDescriptionIndex].description || "";
    const newDescription = currentDescription ? `${currentDescription}\n${hint}` : hint;
    updatedEntries[activeDescriptionIndex].description = newDescription;
    onUpdate(updatedEntries);
    setTimeout(() => {
      const textarea = document.querySelectorAll("textarea")[activeDescriptionIndex];
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
        textarea.focus();
      }
    }, 100);
    setIsModalOpen(false);
    isModalOpenRef.current = false;
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  // Підказки для дати (автоматична ротація)
  const dateHints = [
    "MM/YYYY",
    "seit MM/YYYY",
    "MM/YYYY - MM/YYYY",
    "MM/YYYY - heute",
  ];
  const [hintIndex, setHintIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getPlaceholder = (index, value) => {
    if (value) return "";
    if (
      document.activeElement &&
      document.activeElement.tagName === "INPUT"
    ) {
      return index === focusedIndex ? "" : dateHints[hintIndex];
    }
    return dateHints[hintIndex];
  };

  // Стежимо за прокруткою
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Автоматичне розширення textarea після оновлення `data`
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("textarea").forEach((field) => {
        field.style.height = "auto";
        field.style.height = `${field.scrollHeight}px`;
      });
    }, 50);
  }, [data]);

  // Перевірка на «відкриту клавіатуру» (мобільні)
  useEffect(() => {
    const checkForKeyboard = () => {
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.clientHeight;
      if (viewportHeight < docHeight * 0.85) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
    };
    window.addEventListener("resize", checkForKeyboard);
    return () => window.removeEventListener("resize", checkForKeyboard);
  }, []);

  // Фокус/blur
  const handleFocus = (index, fieldType) => {
    setActiveDescriptionIndex(index);
    setFocusedField(fieldType);
    setFocusedIndex(index);
    // Якщо це поле опису, оновлюємо розмір textarea
    if (fieldType === "description") {
      setTimeout(() => {
        const textarea = document.querySelectorAll("textarea")[index];
        if (textarea) {
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      }, 50);
    }
  };

  const handleBlur = (index, event) => {
    setTimeout(() => {
      if (!isModalOpenRef.current) {
        const activeEl = document.activeElement;
        if (
          activeEl &&
          activeEl.tagName === "TEXTAREA" &&
          activeEl.classList.contains(styles.inputField)
        ) {
          return;
        }
        setActiveDescriptionIndex(null);
        setFocusedField(null);
      }
    }, 100);
  };

  return (
    <section className={styles.aktuellSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле дати */}
            <div className={styles.dateCell}>
              <input
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "date")}
                onBlur={(e) => handleBlur(index, e)}
                placeholder={getPlaceholder(index, entry.date)}
                className={styles.dateInput}
              />
            </div>

            {/* Поле опису */}
            <div className={styles.descriptionCell}>
              <div className={styles.inputWithInfo}>
                {/* Кнопка видалення (десктоп) */}
                <div className={styles.buttonContainer}>
                  <IconButton
                    onClick={() => removeRow(index)}
                    className={styles.deleteButton}
                    aria-label="Видалити"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>

                <textarea
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e);
                  }}
                  onFocus={() => handleFocus(index, "description")}
                  onBlur={(e) => handleBlur(index, e)}
                  placeholder="Information"
                  className={styles.inputField}
                  rows={1}
                />

                {/* ЛАМПОЧКА в контейнері IconButton */}
                {activeDescriptionIndex === index &&
                  focusedField === "description" && (
                    <div className={styles.suggestionButtonContainer}>
                      <IconButton
                        className={styles.suggestionButton}
                        onClick={() => {
                          setActiveDescriptionIndex(index);
                          toggleSuggestions();
                        }}
                      >
                        <LightbulbIcon className={styles.glowingLightbulb} />
                      </IconButton>
                    </div>
                  )}
              </div>

              {/* Кнопка видалення (мобільна) */}
              <div className={styles.deleteButtonContainer}>
                <IconButton
                  onClick={() => removeRow(index)}
                  className={styles.deleteButton}
                  aria-label="Видалити"
                >
                  <DeleteIcon className={styles.deleteIcon} />
                </IconButton>
              </div>
            </div>

            <div className={styles.mobileDivider}></div>
          </div>
        ))}
      </form>

      {/* Кнопка "Додати" */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>

      {/* Модальне вікно з підказками */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        classes={{ paper: styles.customDialog }}
        BackdropProps={{
          classes: {
            root: styles.noBackdrop,
          },
        }}
      >
        <IconButton className={styles.closseButton} onClick={handleCloseModal}>
          &times;
        </IconButton>
        <List className={styles.dialogList}>
          {descriptionHints.map((hint, idx) => (
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