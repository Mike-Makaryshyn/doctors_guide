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
      // Додаткова логіка при валідації (якщо необхідно)
    } catch (error) {
      console.error(error.message);
      // Можливо, додати повідомлення користувачу
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
  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", datePlaceholder: "Datum" },
    ];
    onUpdate(updatedEntries);

    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex);
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
    isModalOpenRef.current = true;
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveDescriptionIndex(null); // Скидаємо активний індекс при закритті модалки
  };

  // Вставка підказки у поле опису
  const handleSelectHint = (hint) => {
    console.log("handleSelectHint called with hint:", hint);
    console.log("activeDescriptionIndex:", activeDescriptionIndex);
  
    if (activeDescriptionIndex === null || activeDescriptionIndex < 0) {
      console.error("Error: activeDescriptionIndex is invalid.");
      return;
    }
  
    const updatedEntries = [...data];
    console.log("Before update:", updatedEntries);
  
    if (!updatedEntries[activeDescriptionIndex]) {
      console.error("Error: No entry found for index", activeDescriptionIndex);
      return;
    }
  
    const currentDescription = updatedEntries[activeDescriptionIndex].description || "";
    const newDescription = currentDescription ? `${currentDescription}\n${hint}` : hint;
    
    updatedEntries[activeDescriptionIndex].description = newDescription;
    console.log("After update:", updatedEntries);
  
    onUpdate(updatedEntries);
  
    setTimeout(() => {
      const textarea = document.querySelectorAll("textarea")[activeDescriptionIndex];
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
        textarea.focus();
      } else {
        console.error("Error: Textarea not found for index", activeDescriptionIndex);
      }
    }, 100);
  
    setIsModalOpen(false);
    isModalOpenRef.current = false;
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;

    field.style.height = "auto"; // Скидаємо висоту, щоб отримати точні розрахунки
    field.style.height = `${field.scrollHeight}px`; // Встановлюємо висоту на основі вмісту
  };

  const dateHints = [
    "MM/YYYY",
    "seit MM/YYYY",
    "MM/YYYY - MM/YYYY",
    "MM/YYYY - heute",
  ];

  const [hintIndex, setHintIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Ротація підказок для всіх порожніх полів дати
  useEffect(() => {
    const interval = setInterval(() => {
      setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []); // Завжди крутити підказки незалежно від фокусу

  // Функція для визначення, яку підказку показувати
  const getPlaceholder = (index, value) => {
    if (value) return ""; // Якщо поле заповнене, підказка не потрібна
    if (document.activeElement && document.activeElement.tagName === "INPUT") {
      return index === focusedIndex ? "" : dateHints[hintIndex]; // Якщо курсор у полі, підказку не показувати
    }
    return dateHints[hintIndex]; // У всіх інших випадках показувати підказку
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("textarea").forEach((field) => {
        field.style.height = "auto";
        field.style.height = `${field.scrollHeight}px`;
      });
    }, 50); // Додаємо затримку для стабільності
  }, [data]); // Виконується при оновленні data

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

  useEffect(() => {
    if (activeDescriptionIndex !== null) {
    }
  }, [activeDescriptionIndex, data]);
  const handleFocus = (index) => {
    console.log("handleFocus called with index:", index);
    setActiveDescriptionIndex(index);
  
    setTimeout(() => {
      const textarea = document.querySelectorAll("textarea")[index];
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      } else {
        console.error("Error: No textarea found for index", index);
      }
    }, 50);
  };
  return (
    <section className={styles.aktuellSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для дати */}
            <div className={styles.dateCell}>
              <input
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                placeholder={getPlaceholder(index, entry.date)}
                className={styles.dateInput}
              />
            </div>
            {/* Поле опису */}
            <div className={styles.descriptionCell}>
              <div className={styles.inputWithInfo}>
                {/* Контейнер кнопок для десктопу */}
                <div className={styles.buttonContainer}>
                  <IconButton
                    onClick={() => removeRow(index)}
                    className={styles.deleteButton}
                    aria-label="Видалити"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>

                {/* Поле опису */}
                <textarea
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e);
                  }}
                  onFocus={() => handleFocus(index)}
                  onBlur={() => handleBlur(index)}
                  placeholder="Information"
                  className={styles.inputField}
                  rows={1}
                />

                {activeDescriptionIndex === index && (
                  <div
                    className={styles.suggestionButtonContainer}
                    style={{
                      position: "absolute",
                      top: "38%",
                      right: "-40px", // Десктоп: Відступ справа
                      transform: "translateY(-50%)", // Вирівнювання по центру
                    }}
                  >
                    <LightbulbIcon
                      className={`${styles.glowingLightbulb} ${styles.mobileLightbulb}`}
                      onClick={() => {
                        setActiveDescriptionIndex(index); // Гарантуємо, що підказка відкриється для правильного поля
                        toggleSuggestions();
                      }}
                    />
                  </div>
                )}
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
            {/* Роздільник для мобільних */}
            <div className={styles.mobileDivider}></div>
          </div>
        ))}
      </form>

      {/* Кнопка для додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>

      {/* Модальне вікно з підказками */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} classes={{ paper: styles.customDialog }}>
  <DialogTitle className={styles.dialogTitle}>
    Виберіть підказку
    <IconButton className={styles.closseButton} onClick={handleCloseModal}>
      &times;
    </IconButton>
  </DialogTitle>
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
