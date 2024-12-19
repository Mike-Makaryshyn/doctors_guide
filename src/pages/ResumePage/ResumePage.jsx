import React, { useState, useRef, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./ResumePage.module.css";
import ResumeSection from "./ResumeSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAX_DESCRIPTION_LENGTH = 500;

// Тема для налаштування чорного кольору активного поля та мітки
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black", // Чорний колір рамки
            },
          },
          "& .MuiInputLabel-root": {
            color: "black", // Чорний колір мітки за замовчуванням
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black", // Чорний колір мітки під час фокусу
          },
        },
      },
    },
  },
});

const ResumePage = () => {
  const [header, setHeader] = useState({
    vorname: "",
    nachname: "",
    address: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    citizenship: "",
    fachrichtung: "",
  });

  const [aktuellEntries, setAktuellEntries] = useState([{ date: "", description: "" }]);
  const [berufEntries, setBerufEntries] = useState([{ date: "", description: "" }]);
  const [ausbildungEntries, setAusbildungEntries] = useState([{ date: "", description: "" }]);

  const [aktuellSuggestionsState, setAktuellSuggestionsState] = useState({
    description: { activeRow: null, filteredSuggestions: [] },
  });
  const [berufSuggestionsState, setBerufSuggestionsState] = useState({
    description: { activeRow: null, filteredSuggestions: [] },
  });
  const [ausbildungSuggestionsState, setAusbildungSuggestionsState] = useState({
    description: { activeRow: null, filteredSuggestions: [] },
  });

  const [languageSkillsEntries, setLanguageSkillsEntries] = useState([{ language: "", level: "" }]);
  const [languageSuggestionsState, setLanguageSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const [technicalSkillsEntries, setTechnicalSkillsEntries] = useState([{ skill: "", technicalLevel: "" }]);
  const [technicalSkillsSuggestionsState, setTechnicalSkillsSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [technicalLevelSuggestionsState, setTechnicalLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const languageSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const handleHeaderChange = (name, value) => {
    setHeader((prevHeader) => ({ ...prevHeader, [name]: value }));
  };

  const handleFieldChange = (entries, setEntries, index, field, value) => {
    if (index < 0 || index >= entries.length) return;

    let updatedValue = value;
    if (field === "description" && value.length > MAX_DESCRIPTION_LENGTH) {
      updatedValue = value.slice(0, MAX_DESCRIPTION_LENGTH);
      toast.warn(`Опис не може перевищувати ${MAX_DESCRIPTION_LENGTH} символів.`);
    }

    const updatedEntries = [...entries];
    updatedEntries[index][field] = updatedValue;
    setEntries(updatedEntries);
  };

  const addNewRow = (entries, setEntries) => {
    setEntries([...entries, { date: "", description: "" }]);
  };

  const removeRow = (entries, setEntries, index, confirmationMessage) => {
    if (window.confirm(confirmationMessage)) {
      const updatedEntries = entries.filter((_, i) => i !== index);
      setEntries(updatedEntries);
    }
  };

  const handleDescriptionChange = (
    entries,
    setEntries,
    suggestionsList,
    suggestionsState,
    setSuggestionsState,
    index,
    value
  ) => {
    handleFieldChange(entries, setEntries, index, "description", value);

    if (value.length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsState((prev) => ({
        ...prev,
        description: { activeRow: index, filteredSuggestions: filtered },
      }));
    } else {
      setSuggestionsState((prev) => ({
        ...prev,
        description: { activeRow: null, filteredSuggestions: suggestionsList },
      }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (languageSuggestionsRef.current &&
          !languageSuggestionsRef.current.contains(event.target)) &&
        (levelSuggestionsRef.current &&
          !levelSuggestionsRef.current.contains(event.target))
      ) {
        console.log("Clicked outside: Closing suggestions");
        setLanguageSuggestionsState({ activeRow: null, filteredSuggestions: [] });
        setLevelSuggestionsState({ activeRow: null, filteredSuggestions: [] });
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [languageSuggestionsRef, levelSuggestionsRef]);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div className={styles.container}>
          <ToastContainer />
          <h2 className={styles.header}>{resumeFormTexts.header}</h2>

          {/* Kopfzeile */}
          <section>
            <h3 className={styles.subheader}>Kopfzeile</h3>
            <form className={styles.form}>
              {Object.entries(header).map(([key, value]) => (
                <div key={key} className={styles.field}>
                  <TextField
                    label={key.charAt(0).toUpperCase() + key.slice(1)} // Форматування заголовків
                    value={value}
                    onChange={(e) => handleHeaderChange(key, e.target.value)}
                    variant="outlined" // Сучасний стиль
                    fullWidth
                    margin="normal"
                  />
                </div>
              ))}
            </form>
          </section>

          {/* Інші секції */}
          <ResumeSection
            title="Aktuell"
            entries={aktuellEntries}
            setEntries={setAktuellEntries}
            suggestionsList={resumeFormTexts.suggestions}
            suggestionsState={aktuellSuggestionsState}
            setSuggestionsState={setAktuellSuggestionsState}
            suggestionsRef={useRef(null)}
            handleTableChange={(i, f, v) => handleFieldChange(aktuellEntries, setAktuellEntries, i, f, v)}
            handleDescriptionChange={(i, v) =>
              handleDescriptionChange(aktuellEntries, setAktuellEntries, resumeFormTexts.suggestions, aktuellSuggestionsState, setAktuellSuggestionsState, i, v)
            }
            addNewRow={() => addNewRow(aktuellEntries, setAktuellEntries)}
            removeRow={(i) => removeRow(aktuellEntries, setAktuellEntries, i, "Ви дійсно хочете видалити цей рядок?")}
          />

          <ResumeSection
            title="Berufserfahrungen"
            entries={berufEntries}
            setEntries={setBerufEntries}
            suggestionsList={resumeFormTexts.berufserfahrungenSuggestions}
            suggestionsState={berufSuggestionsState}
            setSuggestionsState={setBerufSuggestionsState}
            suggestionsRef={useRef(null)}
            handleTableChange={(i, f, v) => handleFieldChange(berufEntries, setBerufEntries, i, f, v)}
            handleDescriptionChange={(i, v) =>
              handleDescriptionChange(berufEntries, setBerufEntries, resumeFormTexts.berufserfahrungenSuggestions, berufSuggestionsState, setBerufSuggestionsState, i, v)
            }
            addNewRow={() => addNewRow(berufEntries, setBerufEntries)}
            removeRow={(i) => removeRow(berufEntries, setBerufEntries, i, "Ви дійсно хочете видалити цей рядок?")}
          />

          <ResumeSection
            title="Ausbildung"
            entries={ausbildungEntries}
            setEntries={setAusbildungEntries}
            suggestionsList={resumeFormTexts.ausbildungSuggestions}
            suggestionsState={ausbildungSuggestionsState}
            setSuggestionsState={setAusbildungSuggestionsState}
            suggestionsRef={useRef(null)}
            handleTableChange={(i, f, v) => handleFieldChange(ausbildungEntries, setAusbildungEntries, i, f, v)}
            handleDescriptionChange={(i, v) =>
              handleDescriptionChange(ausbildungEntries, setAusbildungEntries, resumeFormTexts.ausbildungSuggestions, ausbildungSuggestionsState, setAusbildungSuggestionsState, i, v)
            }
            addNewRow={() => addNewRow(ausbildungEntries, setAusbildungEntries)}
            removeRow={(i) => removeRow(ausbildungEntries, setAusbildungEntries, i, "Ви дійсно хочете видалити цей рядок?")}
          />

          <LanguageSkillsSection
            entries={languageSkillsEntries}
            setEntries={setLanguageSkillsEntries}
            languageSuggestionsList={resumeFormTexts.languageSkillsSuggestions}
            levelSuggestionsList={resumeFormTexts.levelSuggestions}
            languageSuggestionsState={languageSuggestionsState}
            setLanguageSuggestionsState={setLanguageSuggestionsState}
            levelSuggestionsState={levelSuggestionsState}
            setLevelSuggestionsState={setLevelSuggestionsState}
            addNewRow={() => addNewRow(languageSkillsEntries, setLanguageSkillsEntries)}
            removeRow={(i) => removeRow(languageSkillsEntries, setLanguageSkillsEntries, i, "Ви дійсно хочете видалити цей рядок?")}
          />

          <TechnicalSkillsSection
            entries={technicalSkillsEntries}
            setEntries={setTechnicalSkillsEntries}
            technicalSkillsSuggestionsList={resumeFormTexts.technicalSkillsSuggestions}
            levelSuggestionsList={resumeFormTexts.technicalLevelSuggestions}
            technicalSkillsSuggestionsState={technicalSkillsSuggestionsState}
            setTechnicalSkillsSuggestionsState={setTechnicalSkillsSuggestionsState}
            levelSuggestionsState={technicalLevelSuggestionsState}
            setLevelSuggestionsState={setTechnicalLevelSuggestionsState}
            addNewRow={() => addNewRow(technicalSkillsEntries, setTechnicalSkillsEntries)}
            removeRow={(i) => removeRow(technicalSkillsEntries, setTechnicalSkillsEntries, i, "Ви дійсно хочете видалити цей рядок?")}
          />
        </div>
      </MainLayout>
    </ThemeProvider>
  );
};

export default ResumePage;