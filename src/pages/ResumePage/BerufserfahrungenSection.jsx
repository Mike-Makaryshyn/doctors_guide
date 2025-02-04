import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./BerufserfahrungenSection.module.css";

import { parse, isValid } from "date-fns";

// Функції для валідації дати
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

const BerufserfahrungenSection = ({
  title = "",
  data,
  onUpdate,
  isTutorialActive = false,
}) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false);
  const suggestionsRef = useRef(null);
  const isClickingSuggestionButtonRef = useRef(false);

  // Один ref для текстових полів; перші data.length елементів – поле опису, наступні – поле місця.
  const textareaRefs = useRef([]);

  const descriptionHints = resumeFormTexts.berufserfahrungenSuggestions;
  const dateHints = ["MM/YYYY", "seit MM/YYYY", "MM/YYYY - MM/YYYY", "MM/YYYY - heute"];

  const [hintIndex, setHintIndex] = useState(0);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [dateHints.length]);

  useEffect(() => {
    setTimeout(() => {
      textareaRefs.current.forEach((field) => {
        if (field) {
          field.style.height = "auto";
          field.style.height = `${field.scrollHeight}px`;
        }
      });
    }, 50);
  }, [data]);

  // Якщо туторіал увімкнено і ще не вибрано активний рядок – примусово фокусуємо перше поле опису
  useEffect(() => {
    if (isTutorialActive && data.length > 0 && activeRowIndex === null) {
      const field = textareaRefs.current[0];
      if (field && typeof field.focus === "function") {
        field.focus();
        setActiveRowIndex(0);
        setFocusedField("description");
      }
    }
  }, [isTutorialActive, data, activeRowIndex]);

  // При зміні isTutorialActive (тобто, після завершення туторіалу) скидаємо стан і забезпечуємо, що поля стають доступними
  useEffect(() => {
    if (!isTutorialActive) {
      // Проходимо по всім полям і викликаємо blur, скидаємо висоту та ін.
      textareaRefs.current.forEach((field) => {
        if (field) {
          field.blur();
          field.style.height = "auto";
        }
      });
      setActiveRowIndex(null);
      setFocusedField(null);
    }
  }, [isTutorialActive]);

  // Прослуховування події "resetMandatoryInput" для очищення обов’язкового інпуту (наприклад, після кроку 5)
  useEffect(() => {
    const handleResetMandatoryInput = () => {
      if (activeRowIndex !== null) {
        const updatedEntries = [...data];
        updatedEntries[activeRowIndex].description = "";
        onUpdate(updatedEntries);
        const field = textareaRefs.current[activeRowIndex];
        if (field) {
          field.value = "";
          field.style.height = "auto";
        }
      }
    };

    window.addEventListener("resetMandatoryInput", handleResetMandatoryInput);
    return () => window.removeEventListener("resetMandatoryInput", handleResetMandatoryInput);
  }, [activeRowIndex, data, onUpdate]);

  // Прослуховування події "tutorialFinished" для скидання локального стану
  useEffect(() => {
    const handleTutorialFinished = () => {
      setActiveRowIndex(null);
      setFocusedField(null);
    };
    window.addEventListener("tutorialFinished", handleTutorialFinished);
    return () => window.removeEventListener("tutorialFinished", handleTutorialFinished);
  }, []);

  const handleFocus = (index, fieldType) => {
    setActiveRowIndex(index);
    setFocusedField(fieldType);
  };

  const handleDateChange = (index, newValue) => {
    try {
      validateDateValue(newValue);
    } catch (error) {
      console.error("Date validation error:", error.message);
    }
    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    onUpdate(updatedEntries);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    onUpdate(updatedEntries);
    setTimeout(() => {
      const field = textareaRefs.current[index];
      if (field) {
        field.style.height = "auto";
        field.style.height = `${field.scrollHeight}px`;
      }
    }, 50);
  };

  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].place = value;
    onUpdate(updatedEntries);
    setTimeout(() => {
      const field = textareaRefs.current[index + data.length];
      if (field) {
        field.style.height = "auto";
        field.style.height = `${field.scrollHeight}px`;
      }
    }, 50);
  };

  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ];
    onUpdate(updatedEntries);
  };

  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    onUpdate(updatedEntries);
  };

  const toggleSuggestions = () => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveRowIndex(null);
    setFocusedField(null);
  };

  const handleSelectHint = (hint) => {
    if (activeRowIndex !== null) {
      const updatedEntries = [...data];
      const currentDescription = updatedEntries[activeRowIndex].description || "";
      const newDescription = currentDescription
        ? `${currentDescription}\n${hint}`
        : hint;
      updatedEntries[activeRowIndex].description = newDescription;
      onUpdate(updatedEntries);
      setTimeout(() => {
        const field = textareaRefs.current[activeRowIndex];
        if (field) {
          field.style.height = "auto";
          field.style.height = `${field.scrollHeight}px`;
          field.focus();
        }
      }, 100);
      setIsModalOpen(false);
      isModalOpenRef.current = false;
      setActiveRowIndex(null);
      setFocusedField(null);
    }
  };

  const handleAutoExpand = (e, index) => {
    const field = textareaRefs.current[index];
    if (field) {
      field.style.height = "auto";
      field.style.height = `${field.scrollHeight}px`;
    }
  };

  const getDatePlaceholder = (value) => {
    if (value) return "";
    return dateHints[hintIndex];
  };

  return (
    <section className={styles.berufserfahrungenSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <form className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для дати */}
            <div className={styles.dateCell}>
              <input
                data-tutorial="dateField"
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                onFocus={() => handleFocus(index, "date")}
                onBlur={() => {
                  setActiveRowIndex(null);
                  setFocusedField(null);
                }}
                placeholder={getDatePlaceholder(entry.date)}
                className={styles.dateInput}
              />
            </div>
            {/* Поле для опису */}
            <div className={styles.descriptionCell}>
              <div className={styles.inputWithInfo}>
                {/* Кнопка видалення для десктопу */}
                <div className={styles.buttonContainer}>
                  <IconButton
                    data-tutorial="deleteRowButton"
                    onClick={() => removeRow(index)}
                    className={styles.deleteButton}
                    aria-label="Видалити"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
                <textarea
                  data-tutorial="descriptionField"
                  ref={(el) => (textareaRefs.current[index] = el)}
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e, index);
                  }}
                  onFocus={() => handleFocus(index, "description")}
                  onBlur={() => {
                    setActiveRowIndex(null);
                    setFocusedField(null);
                  }}
                  placeholder="Information"
                  className={styles.inputField}
                  rows={1}
                />
                {focusedField === "description" && activeRowIndex === index && (
                  <div className={styles.suggestionButtonContainer}>
                    <IconButton
                      data-tutorial="hintButton"
                      className={styles.suggestionButton}
                      onMouseDown={() => {
                        isClickingSuggestionButtonRef.current = true;
                      }}
                      onClick={() => {
                        setActiveRowIndex(index);
                        toggleSuggestions();
                        setTimeout(() => {
                          isClickingSuggestionButtonRef.current = false;
                        }, 0);
                      }}
                      aria-label="Підказки для цього рядка"
                    >
                      <LightbulbIcon className={styles.glowingLightbulb} />
                    </IconButton>
                  </div>
                )}
              </div>
              {/* Контейнер кнопки видалення для мобільних */}
              <div className={styles.deleteButtonContainer}>
                <IconButton
                  data-tutorial="deleteRowButton"
                  onClick={() => removeRow(index)}
                  className={styles.deleteButton}
                  aria-label="Видалити"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            {/* Поле для місця */}
            <div className={styles.placeCell}>
              <textarea
                data-tutorial="placeField"
                ref={(el) => (textareaRefs.current[index + data.length] = el)}
                value={entry.place || ""}
                onChange={(e) => {
                  handlePlaceChange(index, e.target.value);
                  handleAutoExpand(e, index);
                }}
                onFocus={() => handleFocus(index, "place")}
                onBlur={() => {
                  setActiveRowIndex(null);
                  setFocusedField(null);
                }}
                placeholder="Ort"
                className={styles.inputField}
                rows={1}
              />
            </div>
            <div className={styles.mobileDivider}></div>
          </div>
        ))}
      </form>
      <div className={styles.addButtonContainer}>
        <IconButton
          data-tutorial="addRowButton"
          onClick={addNewRow}
          aria-label="Додати"
        >
          <AddIcon />
        </IconButton>
      </div>
      {/* Модальне вікно з підказками */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        classes={{ paper: styles.customDialog }}
      >
        <IconButton className={styles.closseButton} onClick={handleCloseModal}>
          &times;
        </IconButton>
        <List className={styles.dialogList} ref={suggestionsRef}>
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

BerufserfahrungenSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      place: PropTypes.string,
      datePlaceholder: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isTutorialActive: PropTypes.bool,
};

export default BerufserfahrungenSection;