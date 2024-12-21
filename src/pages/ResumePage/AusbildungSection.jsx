import React, { useEffect, useState, useRef } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MaskedInput from "react-text-mask";
import { parse, isValid } from "date-fns";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./ResumeSection.module.css";

// Перевірка валідності місяця
const isValidMonth = (month) => {
  const num = parseInt(month, 10);
  return num >= 1 && num <= 12;
};

// Перевірка формату MM/yyyy
const checkMMYYYY = (str) => {
  const [m, y] = str.split("/");
  if (!m || !y || m.length !== 2 || y.length !== 4)
    throw new Error("Ungültiges Datumsformat. Erlaubt ist: MM/yyyy.");
  if (!isValidMonth(m)) throw new Error("Der Monat muss zwischen 01 und 12 liegen.");
  const date = parse(`${m}/01/${y}`, "MM/dd/yyyy", new Date());
  if (!isValid(date)) throw new Error("Ungültiges Datumsformat.");
};

// Перевірка значення дати
const validateDateValue = (val) => {
  const lowered = val.toLowerCase().trim();

  if (!lowered || lowered.endsWith("/") || lowered.includes("_")) {
    // Не перевіряємо, якщо введення ще триває
    return;
  }

  if (lowered.startsWith("seit ")) {
    const parts = lowered.split(" ").filter(Boolean);
    if (parts.length !== 2) throw new Error("Das Format 'seit MM/yyyy' ist ungültig.");
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

// Маска вводу
const getMask = (rawValue) => {
  const val = rawValue.toLowerCase().trim();

  if (val.startsWith("seit")) {
    return [
      "s",
      "e",
      "i",
      "t",
      " ",
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }

  if (/^\d/.test(val)) {
    const parts = val.split(" - ");
    if (parts.length === 1) {
      return [
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        "-",
        " ",
        /[hHtT\d]/,
        /[eEuU\d]/,
        /[uUtT\d]/,
        /[tT\d]/,
        /[eE\d]/,
      ];
    }

    if (parts.length === 2) {
      const secondPart = parts[1].trim();
      if (secondPart.startsWith("h")) {
        return [
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          "-",
          " ",
          "h",
          "e",
          "u",
          "t",
          "e",
        ];
      } else {
        return [
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          " ",
          "-",
          " ",
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ];
      }
    }
  }

  return [
    /[sSmM]/,
    /[eEM\d]/,
    /[iIM\d]/,
    /[tT\/\d]/,
    /[\d ]/,
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    "-",
    " ",
    /[hHtT\d]/,
    /[eEuU\d]/,
    /[uUtT\d]/,
    /[tT\d]/,
    /[eE\d]/,
  ];
};

const AusbildungSection = ({ title = "Ausbildung" }) => {
  const suggestionsList = resumeFormTexts.ausbildungSuggestions;
  const [entries, setEntries] = useState([
    { date: "", description: "", place: "", datePlaceholder: "Datum" },
  ]);
  const [dateErrors, setDateErrors] = useState([]);
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const suggestionsRef = useRef(null);

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

  const handleDateFocus = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].datePlaceholder = "seit MM/yyyy - heute";
    setEntries(updatedEntries);
  };

  const handleDateBlur = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].datePlaceholder = "Datum";
    setEntries(updatedEntries);
  };

  const handleDateChange = (index, newValue) => {
    const updatedEntries = [...entries];
    updatedEntries[index].date = newValue;
    setEntries(updatedEntries);

    const updatedErrors = [...dateErrors];
    try {
      if (newValue.trim() && !newValue.includes("_")) {
        validateDateValue(newValue);
        updatedErrors[index] = null;
      } else {
        updatedErrors[index] = null;
      }
    } catch (error) {
      updatedErrors[index] = error.message;
    }
    setDateErrors(updatedErrors);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = value;
    setEntries(updatedEntries);

    if (value.trim().length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
    }
  };

  const handlePlaceChange = (index, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index].place = value;
    setEntries(updatedEntries);
  };

  const handleSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = suggestion;
    setEntries(updatedEntries);
    setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
  };

  const toggleSuggestions = (index) => {
    if (suggestionsState.activeRow === index) {
      setSuggestionsState({ activeRow: null, filteredSuggestions: [] });
    } else {
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: suggestionsList,
      });
    }
  };

  const addNewRow = () => {
    setEntries([
      ...entries,
      { date: "", description: "", place: "", datePlaceholder: "Datum" },
    ]);
    setDateErrors([...dateErrors, null]);
  };

  const removeRow = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    const updatedErrors = dateErrors.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    setDateErrors(updatedErrors);
  };

  return (
    <section>
      <h3 className={styles.subheader}>{title}</h3>

      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            <div className={styles.dateCell}>
              <MaskedInput
                mask={getMask}
                value={entry.date || ""}
                onFocus={() => handleDateFocus(index)}
                onBlur={() => handleDateBlur(index)}
                onChange={(e) => handleDateChange(index, e.target.value)}
                placeholder={entry.datePlaceholder}
                className={`${styles.inputField} ${
                  dateErrors[index] ? styles.inputFieldWithError : ""
                }`}
              />
              {dateErrors[index] && (
                <div className={styles.errorMessage}>{dateErrors[index]}</div>
              )}
            </div>

            <div className={styles.descriptionCell}>
              <Input
                value={entry.description || ""}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                placeholder="Information"
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => toggleSuggestions(index)}>
                      <InfoIcon />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
              />
              {suggestionsState.activeRow === index && (
                <div
                  ref={suggestionsRef}
                  className={`${styles.dropdown} ${
                    suggestionsState.filteredSuggestions.length > 0
                      ? styles.open
                      : ""
                  }`}
                >
                  <ul className={styles.dropdown__items}>
                    {suggestionsState.filteredSuggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() => handleSuggestionSelect(index, suggestion)}
                        className={styles.dropdown__item}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.placeCell}>
              <Input
                value={entry.place || ""}
                onChange={(e) => handlePlaceChange(index, e.target.value)}
                placeholder="Ort"
                disableUnderline
                className={styles.inputField}
              />
            </div>

            <div className={styles.buttonContainer}>
              <IconButton onClick={() => removeRow(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default AusbildungSection;