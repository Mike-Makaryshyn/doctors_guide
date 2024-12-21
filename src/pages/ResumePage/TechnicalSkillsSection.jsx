import React, { useState, useRef, useEffect } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./TechnicalSkillsSection.module.css";

const TechnicalSkillsSection = ({ title = "Technical Skills" }) => {
  const [entries, setEntries] = useState([{ skill: "", technicalLevel: "" }]);
  const [skillSuggestionsState, setSkillSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const skillSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const skillSuggestionsList = resumeFormTexts.technicalSkillsSuggestions; // Підказки для навичок
  const levelSuggestionsList = resumeFormTexts.levelSuggestions; // Підказки для рівнів

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        skillSuggestionsRef.current &&
        !skillSuggestionsRef.current.contains(event.target) &&
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setSkillSuggestionsState({
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
    setEntries([...entries, { skill: "", technicalLevel: "" }]);
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
    updatedEntries[index][field] = suggestion;
    setEntries(updatedEntries);

    if (field === "skill") {
      setSkillSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (field === "technicalLevel") {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  const handleInfoClick = (index, field) => {
    const isOpen =
      (field === "skill" && skillSuggestionsState.activeRow === index) ||
      (field === "technicalLevel" && levelSuggestionsState.activeRow === index);

    if (field === "skill") {
      setSkillSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : skillSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.skill?.toLowerCase() || "")
            ),
      });
    } else if (field === "technicalLevel") {
      setLevelSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : levelSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.technicalLevel?.toLowerCase() || "")
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
            {/* Поле для навички */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter skill"
                value={entry.skill || ""}
                onChange={(e) => handleInputChange(index, "skill", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "skill")}
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
                  skillSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={skillSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {skillSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionSelect(index, "skill", suggestion)}
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
                value={entry.technicalLevel || ""}
                onChange={(e) => handleInputChange(index, "technicalLevel", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "technicalLevel")}
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
                      onClick={() =>
                        handleSuggestionSelect(index, "technicalLevel", suggestion)
                      }
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

      {/* Кнопка "Додати" по центру під усіма введеннями */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;