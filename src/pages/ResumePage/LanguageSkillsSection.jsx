import React, { useState, useRef, useEffect } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import resumeFormTexts from "../../constants/translation/ResumeForm"; // Імпорт підказок
import styles from "./LanguageSkillsSection.module.css";

const LanguageSkillsSection = ({ title = "Language Skills" }) => {
  const [entries, setEntries] = useState([{ language: "", level: "" }]);
  const [languageSuggestionsState, setLanguageSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const languageSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const languageSuggestionsList = resumeFormTexts.languageSkillsSuggestions;
  const levelSuggestionsList = resumeFormTexts.levelSuggestions;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSuggestionsRef.current &&
        !languageSuggestionsRef.current.contains(event.target) &&
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setLanguageSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
        setLevelSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addNewRow = () => {
    setEntries([...entries, { language: "", level: "" }]);
  };

  const removeRow = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

  const handleSuggestionSelect = (index, field, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = suggestion; // Оновлення відповідного поля
    setEntries(updatedEntries);

    // Скидання підказок
    if (field === "language") {
      setLanguageSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (field === "level") {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  const handleInfoClick = (index, field) => {
    const isOpen =
      (field === "language" && languageSuggestionsState.activeRow === index) ||
      (field === "level" && levelSuggestionsState.activeRow === index);

    if (field === "language") {
      setLanguageSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : languageSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.language?.toLowerCase() || "")
            ),
      });
    } else if (field === "level") {
      setLevelSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : levelSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.level?.toLowerCase() || "")
            ),
      });
    }
  };

  return (
    <section>
      <h3 className={styles.subheader}>{title}</h3>
      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для мови */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter language"
                value={entry.language || ""}
                onChange={(e) => handleInputChange(index, "language", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "language")}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
              />
              <div
                className={`${styles.dropdown} ${
                  languageSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={languageSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {languageSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionSelect(index, "language", suggestion)}
                      className={styles.dropdown__item}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Поле для рівня */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter level"
                value={entry.level || ""}
                onChange={(e) => handleInputChange(index, "level", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "level")}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
              />
              <div
                className={`${styles.dropdown} ${
                  levelSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={levelSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {levelSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionSelect(index, "level", suggestion)}
                      className={styles.dropdown__item}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Кнопка видалення */}
            <div className={styles.buttonContainer}>
              <IconButton onClick={() => removeRow(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Додати" по центру під усіма рядками */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default LanguageSkillsSection;