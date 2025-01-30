// src/pages/ResumePage/AusbildungSection.jsx
import React, { useEffect, useState, useRef } from "react";
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
import styles from "./AusbildungSection.module.css";

const AusbildungSection = ({ title = "Ausbildung", data, onUpdate }) => {
  const suggestionsList = resumeFormTexts.ausbildungSuggestions;
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const suggestionsRef = useRef(null);
  const isModalOpenRef = useRef(false); // Реф для відстеження стану модалки
  const dateHints = ["MM/YYYY", "seit MM/YYYY", "MM/YYYY - MM/YYYY", "MM/YYYY - heute"];
  const [hintIndex, setHintIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  // Відстеження кліків поза списком пропозицій
 
  useEffect(() => {
    if (!isFocused && data.every((item) => !item.date)) {
      const interval = setInterval(() => {
        setHintIndex((prevIndex) => (prevIndex + 1) % dateHints.length);
      }, 1500); // Підказка змінюється кожні 1.5 секунди
      return () => clearInterval(interval);
    }
  }, [isFocused, data]);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
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

    if (newValue.trim().length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(newValue.toLowerCase())
      );
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
      setActiveDescriptionIndex(index);
    } else {
      setSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
      setActiveDescriptionIndex(null);
    }
  };

  // Обробка зміни опису
  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].description = value;
    handleUpdate(updatedEntries);

    if (value.trim().length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
      setActiveDescriptionIndex(index);
    } else {
      setSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
      setActiveDescriptionIndex(null);
    }
  };

  // Обробка зміни місця навчання
  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...data];
    updatedEntries[index].place = value;
    handleUpdate(updatedEntries);
  };

  // Вибір пропозиції
  const handleSuggestionSelect = (suggestion) => {
    if (activeDescriptionIndex === null) return;

    const updatedEntries = [...data];
    updatedEntries[activeDescriptionIndex].description = suggestion;
    handleUpdate(updatedEntries);
    setSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
    setActiveDescriptionIndex(null);
  };

  // Перемикання списку пропозицій
  const toggleSuggestions = () => {
    setIsModalOpen(true);
    isModalOpenRef.current = true;
  };

  // Додавання нового рядка
  const addNewRow = () => {
    const updatedEntries = [
      ...data,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ];
    handleUpdate(updatedEntries);
  };

  // Видалення рядка
  const removeRow = (index) => {
    const updatedEntries = data.filter((_, i) => i !== index);
    handleUpdate(updatedEntries);
  };

  // Динамічне розширення висоти textarea
  const handleAutoExpand = (e) => {
    const field = e.target;

    // Скидаємо висоту, щоб уникнути некоректних розрахунків
    field.style.height = "auto";

    // Встановлюємо нову висоту на основі scrollHeight
    field.style.height = `${field.scrollHeight}px`;
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    isModalOpenRef.current = false;
    setActiveDescriptionIndex(null);
  };

  return (
    <section className={styles.ausbildungSection}>
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
      setHintIndex(-1); // При фокусі підказка зникає
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
      onChange={(e) => {
        handleDescriptionChange(index, e.target.value);
        handleAutoExpand(e);
      }}
      placeholder="Information"
      className={styles.inputField}
      rows={1}
    ></textarea>
  </div>

  {/* Поле місця навчання */}
  <div className={styles.placeCell}>
    <textarea
      value={entry.place || ""}
      onChange={(e) => {
        handlePlaceChange(index, e.target.value);
        handleAutoExpand(e);
      }}
      placeholder="Ort"
      className={`${styles.inputField} ${styles.textareaField}`}
      rows={1}
    ></textarea>
  </div>

  {/* ❗ Кнопка видалення на десктопі */}
  <div className={styles.deleteButtonContainerDesktop}>
    <IconButton
      onClick={() => removeRow(index)}
      className={styles.deleteButton}
      aria-label="Видалити"
    >
      <DeleteIcon />
    </IconButton>
  </div>

  {/* Кнопка видалення для мобільної версії */}
  <div className={styles.deleteButtonContainer}>
    <IconButton
      onClick={() => removeRow(index)}
      className={styles.deleteButton}
      aria-label="Видалити"
    >
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
  
      {/* Фіксована кнопка Інформації в правому нижньому кутку екрану */}
      {activeDescriptionIndex !== null && (
        <IconButton
          onClick={toggleSuggestions}
          className={styles.fixedInfoButton}
          aria-label="Інформація"
        >
          <InfoIcon />
        </IconButton>
      )}
  
      {/* Модальне вікно з підказками */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Виберіть підказку</DialogTitle>
        <List>
          {suggestionsList.map((hint, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton onClick={() => handleSuggestionSelect(hint)}>
                <ListItemText primary={hint} />
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