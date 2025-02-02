// src/pages/ResumePage/AusbildungSection.jsx
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
import styles from "./AusbildungSection.module.css";

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

const AusbildungSection = ({ title = "", data, onUpdate }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpenRef = useRef(false);
  const suggestionsRef = useRef(null);
  const isClickingSuggestionButtonRef = useRef(false);

  const textareaRefs = useRef([]);

  const descriptionHints = resumeFormTexts.ausbildungSuggestions;
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

  const handleFocus = (index, fieldType) => {
    setActiveRowIndex(index);
    setFocusedField(fieldType);
  };

  const handleDateChange = (index, newValue) => {
    try {
      validateDateValue(newValue);
      console.log("Date validated successfully");
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
    setTimeout(() => {
      const lastIndex = updatedEntries.length - 1;
      handleFocus(lastIndex, "description");
      if (textareaRefs.current[lastIndex]) {
        textareaRefs.current[lastIndex].style.height = "auto";
        textareaRefs.current[lastIndex].style.height = `${textareaRefs.current[lastIndex].scrollHeight}px`;
        textareaRefs.current[lastIndex].focus();
      }
    }, 100);
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
    <section className={styles.ausbildungSection}>
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
                onFocus={() => handleFocus(index, "date")}
                onBlur={() => {
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setFocusedField(null);
                  }
                }}
                placeholder={getDatePlaceholder(entry.date)}
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
                <textarea
                  ref={(el) => (textareaRefs.current[index] = el)}
                  value={entry.description || ""}
                  onChange={(e) => {
                    handleDescriptionChange(index, e.target.value);
                    handleAutoExpand(e, index);
                  }}
                  onFocus={() => handleFocus(index, "description")}
                  onBlur={() => {
                    if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                      setActiveRowIndex(null);
                      setFocusedField(null);
                    }
                  }}
                  placeholder="Information"
                  className={styles.inputField}
                  rows={1}
                />
                {focusedField === "description" && activeRowIndex === index && (
                  <div className={styles.suggestionButtonContainer}>
                    <IconButton
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
                  onClick={() => removeRow(index)}
                  className={styles.deleteButton}
                  aria-label="Видалити"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            {/* Поле місця навчання */}
            <div className={styles.placeCell}>
              <textarea
                ref={(el) => (textareaRefs.current[index + data.length] = el)}
                value={entry.place || ""}
                onChange={(e) => {
                  handlePlaceChange(index, e.target.value);
                  handleAutoExpand(e, index);
                }}
                onFocus={() => handleFocus(index, "place")}
                onBlur={() => {
                  if (!isModalOpenRef.current && !isClickingSuggestionButtonRef.current) {
                    setActiveRowIndex(null);
                    setFocusedField(null);
                  }
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
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>
      {/* Модальне вікно з підказками – без заголовка */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        classes={{ paper: styles.customDialog }}
      >
        <IconButton className={styles.closeButton} onClick={handleCloseModal}>
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

AusbildungSection.propTypes = {
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
};

export default AusbildungSection;