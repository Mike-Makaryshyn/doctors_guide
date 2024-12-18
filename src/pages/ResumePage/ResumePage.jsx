// src/pages/ResumePage/ResumePage.jsx

import React, { useState, useRef, useEffect } from "react";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./ResumePage.module.css";
import ResumeSection from "./ResumeSection";
import LanguageSkillsSection from "./LanguageSkillsSection";
import TechnicalSkillsSection from "./TechnicalSkillsSection";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MAX_DESCRIPTION_LENGTH = 500;
const DATE_FORMAT_ERROR = "Невірний формат дати. Використовуйте MM/YYYY.";
const MONTH_ERROR = "Місяць повинен бути між 01 та 12.";
const DATE_MAX_LENGTH = 25;

const ResumePage = () => {
  // Стан для "Шапка"
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

  // Стан для секцій
  const [currentEntries, setCurrentEntries] = useState([
    { date: "", description: "" },
  ]);
  const [berufEntries, setBerufEntries] = useState([
    { date: "", description: "" },
  ]);
  const [ausbildungEntries, setAusbildungEntries] = useState([
    { date: "", description: "" },
  ]);

  // Стан для підказок
  const [suggestionsState, setSuggestionsState] = useState({
    description: { activeRow: null, filteredSuggestions: [] },
  });
  const [berufSuggestionsState, setBerufSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [ausbildungSuggestionsState, setAusbildungSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  // Стан для Мовних навичок
  const [languageSkillsEntries, setLanguageSkillsEntries] = useState([
    { language: "", level: "" },
  ]);
  const [languageSuggestionsState, setLanguageSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  // Стан для Технічних навичок
  const [technicalSkillsEntries, setTechnicalSkillsEntries] = useState([
    { skill: "", technicalLevel: "" },
  ]);
  const [technicalSkillsSuggestionsState, setTechnicalSkillsSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [technicalLevelSuggestionsState, setTechnicalLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  // Реф для підказок
  const suggestionsRef = {
    description: useRef(null),
  };
  const berufSuggestionsRef = useRef(null);
  const ausbildungSuggestionsRef = useRef(null);
  const languageSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);
  const technicalSkillsSuggestionsRef = useRef(null);
  const technicalLevelSuggestionsRef = useRef(null);

  // Обробник зміни значень у "Шапці"
  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeader((prevHeader) => ({ ...prevHeader, [name]: value }));
  };

  // Функція для валідації дати
  const validateDate = (value) => {
    const parts = value.split(" - ");
    const processedParts = parts.map((part) => {
      if (part.toLowerCase() === "seit/heute") {
        return "seit/heute";
      }

      const [month, year] = part.split("/");
      if (!month || !year) {
        throw new Error(DATE_FORMAT_ERROR);
      }

      const monthInt = parseInt(month, 10);
      if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
        throw new Error(MONTH_ERROR);
      }

      return `${month.padStart(2, '0')}/${year}`;
    });

    return processedParts.join(" - ");
  };

  // Універсальна функція для обробки змін у полях
  const handleFieldChange = (entries, setEntries, index, field, value, isCalendar = false) => {
    if (index < 0 || index >= entries.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }

    let updatedValue = value;

    if (isCalendar) {
      try {
        updatedValue = validateDate(value);
      } catch (error) {
        toast.error(error.message);
        return "";
      }

      // Обмеження довжини для date
      if (updatedValue.length > DATE_MAX_LENGTH) {
        updatedValue = updatedValue.slice(0, DATE_MAX_LENGTH);
      }
    } else if (field === "description") {
      // Обробка для поля description
      if (value.length > MAX_DESCRIPTION_LENGTH) {
        updatedValue = value.slice(0, MAX_DESCRIPTION_LENGTH);
        toast.warn(`Опис не може перевищувати ${MAX_DESCRIPTION_LENGTH} символів.`);
      } else {
        updatedValue = value;
      }
    }

    const updatedEntriesCopy = [...entries];
    updatedEntriesCopy[index][field] = updatedValue || "";

    setEntries(updatedEntriesCopy);
  };

  // Додавання нового рядка
  const addNewRow = (entries, setEntries) => {
    setEntries([...entries, { date: "", description: "" }]);
  };

  // Видалення рядка
  const removeRow = (entries, setEntries, index, confirmationMessage) => {
    if (window.confirm(confirmationMessage)) {
      const updatedEntries = entries.filter((_, i) => i !== index);
      setEntries(updatedEntries);
    }
  };

  // Обробник зміни у полі description
  const handleDescriptionChange = (entries, setEntries, suggestionsList, fieldName, index, value) => {
    handleFieldChange(entries, setEntries, index, fieldName, value, false);

    if (value.length > 0) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsState((prevState) => ({
        ...prevState,
        [fieldName]: {
          activeRow: index,
          filteredSuggestions: filtered,
        },
      }));
    } else {
      // Відображати всі підказки при порожньому значенні
      setSuggestionsState((prevState) => ({
        ...prevState,
        [fieldName]: {
          activeRow: index,
          filteredSuggestions: suggestionsList,
        },
      }));
    }
  };

  // Обробник вибору підказки
  const handleSuggestionClick = (fieldName, index, suggestion) => {
    if (index < 0 || index >= getEntriesByFieldName(fieldName).length) {
      console.error(`Invalid index: ${index}`);
      return;
    }

    const entries = getEntriesByFieldName(fieldName);
    const setEntries = getSetEntriesByFieldName(fieldName);

    const updatedEntries = [...entries];
    if (fieldName === "language") {
      updatedEntries[index].language = suggestion || "";
    } else if (fieldName === "level") {
      updatedEntries[index].level = suggestion || "";
    } else if (fieldName === "skill") {
      updatedEntries[index].skill = suggestion || "";
    } else if (fieldName === "technicalLevel") {
      updatedEntries[index].technicalLevel = suggestion || "";
    } else {
      updatedEntries[index][fieldName] = suggestion || "";
    }

    setEntries(updatedEntries);

    if (fieldName === "language") {
      setLanguageSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (fieldName === "level") {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (fieldName === "skill") {
      setTechnicalSkillsSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (fieldName === "technicalLevel") {
      setTechnicalLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else {
      setSuggestionsState((prevState) => ({
        ...prevState,
        [fieldName]: {
          activeRow: null,
          filteredSuggestions: [],
        },
      }));
    }
  };

  // Допоміжні функції для отримання стану та сеттера за іменем поля
  const getEntriesByFieldName = (fieldName) => {
    switch (fieldName) {
      case "description":
        return currentEntries;
      case "language":
      case "level":
        return languageSkillsEntries; // Поля "language" та "level" в одній секції
      case "skill":
      case "technicalLevel":
        return technicalSkillsEntries; // Поля "skill" та "technicalLevel" в іншій секції
      // Додайте інші поля за потребою
      default:
        return [];
    }
  };

  const getSetEntriesByFieldName = (fieldName) => {
    switch (fieldName) {
      case "description":
        return setCurrentEntries;
      case "language":
      case "level":
        return setLanguageSkillsEntries;
      case "skill":
      case "technicalLevel":
        return setTechnicalSkillsEntries;
      // Додайте інші поля за потребою
      default:
        return () => {};
    }
  };

  // Обробка кліків поза списком підказок
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Для полів з підказками description
      if (
        suggestionsRef.description.current &&
        !suggestionsRef.description.current.contains(event.target)
      ) {
        setSuggestionsState((prevState) => ({
          ...prevState,
          description: {
            activeRow: null,
            filteredSuggestions: [],
          },
        }));
      }

      // Для Berufserfahrungen
      if (
        berufSuggestionsRef.current &&
        !berufSuggestionsRef.current.contains(event.target)
      ) {
        setBerufSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }

      // Для Ausbildung
      if (
        ausbildungSuggestionsRef.current &&
        !ausbildungSuggestionsRef.current.contains(event.target)
      ) {
        setAusbildungSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }

      // Для Language Skills - Мова
      if (
        languageSuggestionsRef.current &&
        !languageSuggestionsRef.current.contains(event.target)
      ) {
        setLanguageSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }

      // Для Language Skills - Рівень
      if (
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setLevelSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }

      // Для Technical Skills - Навичка
      if (
        technicalSkillsSuggestionsRef.current &&
        !technicalSkillsSuggestionsRef.current.contains(event.target)
      ) {
        setTechnicalSkillsSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }

      // Для Technical Skills - Рівень
      if (
        technicalLevelSuggestionsRef.current &&
        !technicalLevelSuggestionsRef.current.contains(event.target)
      ) {
        setTechnicalLevelSuggestionsState({
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

  // Додамо логування станів для діагностики (можна видалити у продакшн)
  useEffect(() => {
    currentEntries.forEach((entry, index) => {
      if (entry.description === undefined) {
        console.error(`Entry at index ${index} has undefined description`, entry);
      }
    });
    berufEntries.forEach((entry, index) => {
      if (entry.description === undefined) {
        console.error(`Beruf Entry at index ${index} has undefined description`, entry);
      }
    });
    ausbildungEntries.forEach((entry, index) => {
      if (entry.description === undefined) {
        console.error(`Ausbildung Entry at index ${index} has undefined description`, entry);
      }
    });
    languageSkillsEntries.forEach((entry, index) => {
      if (entry.language === undefined || entry.level === undefined) {
        console.error(`Language Skill Entry at index ${index} is incomplete`, entry);
      }
    });
    technicalSkillsEntries.forEach((entry, index) => {
      if (entry.skill === undefined || entry.technicalLevel === undefined) {
        console.error(`Technical Skill Entry at index ${index} is incomplete`, entry);
      }
    });
    console.log("currentEntries:", currentEntries);
    console.log("suggestionsState:", suggestionsState);
    console.log("berufEntries:", berufEntries);
    console.log("berufSuggestionsState:", berufSuggestionsState);
    console.log("ausbildungEntries:", ausbildungEntries);
    console.log("ausbildungSuggestionsState:", ausbildungSuggestionsState);
    console.log("languageSkillsEntries:", languageSkillsEntries);
    console.log("languageSuggestionsState:", languageSuggestionsState);
    console.log("levelSuggestionsState:", levelSuggestionsState);
    console.log("technicalSkillsEntries:", technicalSkillsEntries);
    console.log("technicalSkillsSuggestionsState:", technicalSkillsSuggestionsState);
    console.log("technicalLevelSuggestionsState:", technicalLevelSuggestionsState);
  }, [
    currentEntries,
    suggestionsState,
    berufEntries,
    berufSuggestionsState,
    ausbildungEntries,
    ausbildungSuggestionsState,
    languageSkillsEntries,
    languageSuggestionsState,
    levelSuggestionsState,
    technicalSkillsEntries,
    technicalSkillsSuggestionsState,
    technicalLevelSuggestionsState,
  ]);

  // Загальний обробник для змін у секції "Мовні навички"
  const handleLanguageFieldChange = (index, fieldName, value) => {
    console.log(`Changing field '${fieldName}' at index ${index} to '${value}'`);
    const updatedEntries = [...languageSkillsEntries];
    updatedEntries[index][fieldName] = value;
    setLanguageSkillsEntries(updatedEntries);

    // Вибір підказок на основі поля
    if (value.length > 0) {
      if (fieldName === "language") {
        const filtered = resumeFormTexts.languageSkillsSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        );
        setLanguageSuggestionsState({
          activeRow: index,
          filteredSuggestions: filtered,
        });
      } else if (fieldName === "level") {
        const filtered = resumeFormTexts.levelSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        );
        setLevelSuggestionsState({
          activeRow: index,
          filteredSuggestions: filtered,
        });
      }
    } else {
      if (fieldName === "language") {
        setLanguageSuggestionsState({
          activeRow: index,
          filteredSuggestions: resumeFormTexts.languageSkillsSuggestions,
        });
      } else if (fieldName === "level") {
        setLevelSuggestionsState({
          activeRow: index,
          filteredSuggestions: resumeFormTexts.levelSuggestions,
        });
      }
    }
  };

  // Обробник вибору підказки
  const handleLanguageSuggestionClick = (index, suggestion) => {
    const updatedEntries = [...languageSkillsEntries];
    updatedEntries[index].language = suggestion;
    setLanguageSkillsEntries(updatedEntries);
    setLanguageSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  const handleLevelSuggestionClick = (index, suggestion) => {
    const updatedEntries = [...languageSkillsEntries];
    updatedEntries[index].level = suggestion;
    setLanguageSkillsEntries(updatedEntries);
    setLevelSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  const addLanguageSkillsRow = () => {
    setLanguageSkillsEntries([...languageSkillsEntries, { language: "", level: "" }]);
  };

  const removeLanguageSkillsRow = (index) => {
    if (window.confirm("Ви дійсно хочете видалити цей рядок?")) {
      const updatedEntries = languageSkillsEntries.filter((_, i) => i !== index);
      setLanguageSkillsEntries(updatedEntries);
    }
  };

  // Обробники для секції "Технічні навички"
  const handleTechnicalSkillChange = (index, value) => {
    const updatedEntries = [...technicalSkillsEntries];
    updatedEntries[index].skill = value;
    setTechnicalSkillsEntries(updatedEntries);

    if (value.length > 0) {
      const filtered = resumeFormTexts.technicalSkillsSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setTechnicalSkillsSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      setTechnicalSkillsSuggestionsState({
        activeRow: index,
        filteredSuggestions: resumeFormTexts.technicalSkillsSuggestions,
      });
    }
  };

  const handleTechnicalLevelChange = (index, value) => {
    const updatedEntries = [...technicalSkillsEntries];
    updatedEntries[index].technicalLevel = value;
    setTechnicalSkillsEntries(updatedEntries);

    if (value.length > 0) {
      const filtered = resumeFormTexts.technicalLevelSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setTechnicalLevelSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      setTechnicalLevelSuggestionsState({
        activeRow: index,
        filteredSuggestions: resumeFormTexts.technicalLevelSuggestions,
      });
    }
  };

  const handleTechnicalSkillSuggestionClick = (index, suggestion) => {
    const updatedEntries = [...technicalSkillsEntries];
    updatedEntries[index].skill = suggestion;
    setTechnicalSkillsEntries(updatedEntries);
    setTechnicalSkillsSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  const handleTechnicalLevelSuggestionClick = (index, suggestion) => {
    const updatedEntries = [...technicalSkillsEntries];
    updatedEntries[index].technicalLevel = suggestion;
    setTechnicalSkillsEntries(updatedEntries);
    setTechnicalLevelSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  const addTechnicalSkillsRow = () => {
    setTechnicalSkillsEntries([...technicalSkillsEntries, { skill: "", technicalLevel: "" }]);
  };

  const removeTechnicalSkillsRow = (index) => {
    if (window.confirm("Ви дійсно хочете видалити цей рядок?")) {
      const updatedEntries = technicalSkillsEntries.filter((_, i) => i !== index);
      setTechnicalSkillsEntries(updatedEntries);
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Контейнер для Toast повідомлень */}
        <ToastContainer />

        {/* Заголовок */}
        <h2 className={styles.header}>{resumeFormTexts.header}</h2>

        {/* Шапка */}
        <section>
          <h3 className={styles.subheader}>Kopfzeile</h3>
          <form className={styles.form}>
            {Object.entries(resumeFormTexts.fields).map(([key, label]) => (
              <div key={key} className={styles.field}>
                <label htmlFor={key} className={styles.label}>{label}:</label>
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

        {/* Актуально */}
        <ResumeSection
          title="Aktuell"
          entries={currentEntries}
          setEntries={setCurrentEntries}
          suggestionsList={resumeFormTexts.suggestions}
          suggestionsState={suggestionsState}
          setSuggestionsState={setSuggestionsState}
          suggestionsRef={suggestionsRef.description}
          handleTableChange={(index, field, value, isCalendar) =>
            handleDescriptionChange(currentEntries, setCurrentEntries, resumeFormTexts.suggestions, "description", index, value)
          }
          handleSuggestionClick={(fieldName, index, suggestion) =>
            handleSuggestionClick(fieldName, index, suggestion)
          }
          addNewRow={() => addNewRow(currentEntries, setCurrentEntries)}
          removeRow={(index) =>
            removeRow(currentEntries, setCurrentEntries, index, "Ви дійсно хочете видалити цей рядок?")
          }
        />

        {/* Berufserfahrungen */}
        <ResumeSection
          title="Berufserfahrungen"
          entries={berufEntries}
          setEntries={setBerufEntries}
          suggestionsList={resumeFormTexts.berufserfahrungenSuggestions}
          suggestionsState={berufSuggestionsState}
          setSuggestionsState={setBerufSuggestionsState}
          suggestionsRef={berufSuggestionsRef}
          handleTableChange={(index, field, value, isCalendar) =>
            handleDescriptionChange(berufEntries, setBerufEntries, resumeFormTexts.berufserfahrungenSuggestions, "description", index, value)
          }
          handleSuggestionClick={(fieldName, index, suggestion) =>
            handleSuggestionClick(fieldName, index, suggestion)
          }
          addNewRow={() => addNewRow(berufEntries, setBerufEntries)}
          removeRow={(index) =>
            removeRow(berufEntries, setBerufEntries, index, "Ви дійсно хочете видалити цей рядок?")
          }
        />

        {/* Ausbildung */}
        <ResumeSection
          title="Ausbildung"
          entries={ausbildungEntries}
          setEntries={setAusbildungEntries}
          suggestionsList={resumeFormTexts.ausbildungSuggestions}
          suggestionsState={ausbildungSuggestionsState}
          setSuggestionsState={setAusbildungSuggestionsState}
          suggestionsRef={ausbildungSuggestionsRef}
          handleTableChange={(index, field, value, isCalendar) =>
            handleDescriptionChange(ausbildungEntries, setAusbildungEntries, resumeFormTexts.ausbildungSuggestions, "description", index, value)
          }
          handleSuggestionClick={(fieldName, index, suggestion) =>
            handleSuggestionClick(fieldName, index, suggestion)
          }
          addNewRow={() => addNewRow(ausbildungEntries, setAusbildungEntries)}
          removeRow={(index) =>
            removeRow(ausbildungEntries, setAusbildungEntries, index, "Ви дійсно хочете видалити цей рядок?")
          }
        />

        {/* Новий Розділ: Мовні навички */}
        <LanguageSkillsSection
          entries={languageSkillsEntries}
          setEntries={setLanguageSkillsEntries}
          languageSuggestionsList={resumeFormTexts.languageSkillsSuggestions}
          levelSuggestionsList={resumeFormTexts.levelSuggestions}
          languageSuggestionsState={languageSuggestionsState}
          setLanguageSuggestionsState={setLanguageSuggestionsState}
          levelSuggestionsState={levelSuggestionsState}
          setLevelSuggestionsState={setLevelSuggestionsState}
          languageSuggestionsRef={languageSuggestionsRef}
          levelSuggestionsRef={levelSuggestionsRef}
          handleLanguageFieldChange={handleLanguageFieldChange} // Передаємо загальний обробник
          handleLanguageSuggestionClick={handleLanguageSuggestionClick}
          handleLevelSuggestionClick={handleLevelSuggestionClick}
          addNewRow={addLanguageSkillsRow}
          removeRow={removeLanguageSkillsRow}
        />

        {/* Новий Розділ: Технічні навички */}
        <TechnicalSkillsSection
          entries={technicalSkillsEntries}
          setEntries={setTechnicalSkillsEntries}
          technicalSkillsSuggestionsList={resumeFormTexts.technicalSkillsSuggestions}
          levelSuggestionsList={resumeFormTexts.technicalLevelSuggestions}
          technicalSkillsSuggestionsState={technicalSkillsSuggestionsState}
          setTechnicalSkillsSuggestionsState={setTechnicalSkillsSuggestionsState}
          levelSuggestionsState={technicalLevelSuggestionsState}
          setLevelSuggestionsState={setTechnicalLevelSuggestionsState}
          technicalSkillsSuggestionsRef={technicalSkillsSuggestionsRef}
          levelSuggestionsRef={technicalLevelSuggestionsRef}
          handleTechnicalSkillChange={handleTechnicalSkillChange}
          handleTechnicalLevelChange={handleTechnicalLevelChange}
          handleTechnicalSkillSuggestionClick={handleTechnicalSkillSuggestionClick}
          handleTechnicalLevelSuggestionClick={handleTechnicalLevelSuggestionClick}
          addNewRow={addTechnicalSkillsRow}
          removeRow={removeTechnicalSkillsRow}
        />
      </div>
    </MainLayout>
  );
};

// Допоміжні функції, які використовуються в компоненті
export default ResumePage;