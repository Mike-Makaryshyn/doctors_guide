// src/pages/ResumePage/ResumePage.jsx

import React, { useState, useRef } from "react";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./ResumePage.module.css";
import ResumeSection from "./ResumeSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SingleDateField from "./SingleDateField";

const MAX_DESCRIPTION_LENGTH = 500;

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

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
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
        description: { activeRow: index, filteredSuggestions: suggestionsList },
      }));
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <ToastContainer />
        <h2 className={styles.header}>{resumeFormTexts.header}</h2>

        <section>
          <h3 className={styles.subheader}>Kopfzeile</h3>
          <form className={styles.form}>
            {Object.entries(resumeFormTexts.fields).map(([key, label]) => (
              <div key={key} className={styles.field}>
                <label htmlFor={key} className={styles.label}>
                  {label}:
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={header[key]}
                  onChange={handleHeaderChange}
                  className={styles.input}
                />
              </div>
            ))}
          </form>
        </section>

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
  );
};

export default ResumePage;