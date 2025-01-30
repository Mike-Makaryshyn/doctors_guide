// src/pages/ResumePage/BerufserfahrungenSection.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./BerufserfahrungenSection.module.css";

const BerufserfahrungenSection = ({ title = "Berufserfahrungen", data, onUpdate }) => {
  const suggestionsList = resumeFormTexts.berufserfahrungenSuggestions;
  const dateHints = ["MM/YYYY", "seit MM/YYYY", "MM/YYYY - MM/YYYY", "MM/YYYY - heute"];
  
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const [hintIndex, setHintIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  
  const suggestionsRef = useRef(null);
  const isModalOpenRef = useRef(false);

  // Оновлення підказок для поля дати
  useEffect(() => {
    if (!isFocused && data.every((item) => !item.date)) {
      const interval = setInterval(() => {
        setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isFocused, data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Оновлення даних
  const handleUpdate = (updatedEntries) => {
    onUpdate(updatedEntries);
  };

  // Обробка зміни дати
  const handleDateChange = (index, newValue) => {
    const updatedEntries = [...data];
    updatedEntries[index].date = newValue;
    handleUpdate(updatedEntries);
  };

  // Обробка зміни опису
  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    handleUpdate(updatedEntries);
  };

  // Обробка зміни місця роботи
  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].place = value;
    handleUpdate(updatedEntries);
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [...data, { date: "", description: "", place: "", datePlaceholder: "Datum" }];
    handleUpdate(updatedEntries);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
  };

  return (
    <section className={styles.berufserfahrungenSection}>
      <h3 className={styles.subheader}>{title}</h3>

      <div className={styles.entriesContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле дати */}
            <div className={styles.dateCell}>
              <input
                type="text"
                value={entry.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                onFocus={() => {
                  setIsFocused(true);
                  setHintIndex(-1);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!isModalOpenRef.current) {
                      setIsFocused(false);
                      if (!entry.date) setHintIndex(0);
                    }
                  }, 100);
                }}
                placeholder={isFocused || entry.date ? "" : dateHints[hintIndex]}
                className={styles.inputField}
              />
            </div>

            {/* Поле опису */}
            <div className={styles.descriptionCell}>
              <textarea
                value={entry.description || ""}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                placeholder="Information"
                className={styles.inputField}
                rows={1}
              ></textarea>
            </div>

            {/* Поле місця роботи */}
            <div className={styles.placeCell}>
              <textarea
                value={entry.place || ""}
                onChange={(e) => handlePlaceChange(index, e.target.value)}
                placeholder="Ort"
                className={styles.inputField}
                rows={1}
              ></textarea>
            </div>

            {/* Кнопка видалення для десктопа */}
            <div className={styles.deleteButtonContainerDesktop}>
              <IconButton onClick={() => removeRow(index)} className={styles.deleteButton} aria-label="Видалити">
                <DeleteIcon />
              </IconButton>
            </div>

            {/* Кнопка видалення для мобільних */}
            <div className={styles.deleteButtonContainer}>
              <IconButton onClick={() => removeRow(index)} className={styles.deleteButton} aria-label="Видалити">
                <DeleteIcon />
              </IconButton>
            </div>

            {/* Роздільник між записами */}
            <div className={styles.mobileDivider}></div>
          </div>
        ))}
      </div>

      {/* Кнопка додавання нового рядка */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow} aria-label="Додати">
          <AddIcon />
        </IconButton>
      </div>
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
};

export default BerufserfahrungenSection;