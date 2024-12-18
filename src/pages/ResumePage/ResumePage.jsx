// src/pages/ResumePage/ResumePage.jsx

import React, { useState, useRef, useEffect } from "react";
import resumeFormTexts from "../../constants/translation/ResumeForm";
import styles from "./ResumePage.module.css"; // Імпортуємо стилі
import ResumeSection from "/src/pages/ResumePage/ResumeSection";
import MainLayout from "../../layouts/MainLayout/MainLayout";

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

  // Стан для "Aктуально"
  const [currentEntries, setCurrentEntries] = useState([
    { date: "", description: "" },
  ]);

  // Стан для "Berufserfahrungen"
  const [berufEntries, setBerufEntries] = useState([
    { date: "", description: "" },
  ]);

  // Стан для фільтрованих підказок та активного рядка для "Aктуально"
  const [suggestionsState, setSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  // Стан для фільтрованих підказок та активного рядка для "Berufserfahrungen"
  const [berufSuggestionsState, setBerufSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  // Реф для відстеження кліків поза списком підказок
  const suggestionsRef = useRef(null);
  const berufSuggestionsRef = useRef(null);

  // Обробник зміни значень у "Шапці"
  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeader({ ...header, [name]: value });
  };

  // Обробник зміни значень у таблиці "Aктуально"
  const handleTableChange = (index, field, value, isCalendar = false) => {
    if (index < 0 || index >= currentEntries.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }

    let updatedValue = value;

    if (isCalendar) {
      // Обробка для поля date у форматі MM/YYYY або seit/heute
      const parts = updatedValue.split(" - ");
      const processedParts = parts.map((part) => {
        if (part.toLowerCase() === "seit/heute") {
          return "seit/heute";
        }

        const [month, year] = part.split("/");
        if (!month || !year) {
          alert("Невірний формат дати. Використовуйте MM/YYYY.");
          return "";
        }

        const monthInt = parseInt(month, 10);
        if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
          alert("Місяць повинен бути між 01 та 12.");
          return "";
        }

        return `${month.padStart(2, '0')}/${year}`;
      });

      updatedValue = processedParts.join(" - ");

      // Обмеження довжини для date
      if (updatedValue.length > 25) {
        updatedValue = updatedValue.slice(0, 25);
      }
    } else if (field === "description") {
      // Обробка для поля description
      if (value.length > 500) { // Наприклад, максимальна довжина 500 символів
        updatedValue = value.slice(0, 500);
      } else {
        updatedValue = value;
      }
    }

    const updatedEntries = [...currentEntries];
    updatedEntries[index][field] = updatedValue;

    // Переконайтеся, що description завжди рядок
    if (field === "description" && typeof updatedEntries[index][field] !== "string") {
      updatedEntries[index][field] = "";
    }

    setCurrentEntries(updatedEntries);
  };

  // Обробник зміни значень у таблиці "Berufserfahrungen"
  const handleBerufTableChange = (index, field, value, isCalendar = false) => {
    if (index < 0 || index >= berufEntries.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }

    let updatedValue = value;

    if (isCalendar) {
      // Обробка для поля date у форматі MM/YYYY або seit/heute
      const parts = updatedValue.split(" - ");
      const processedParts = parts.map((part) => {
        if (part.toLowerCase() === "seit/heute") {
          return "seit/heute";
        }

        const [month, year] = part.split("/");
        if (!month || !year) {
          alert("Невірний формат дати. Використовуйте MM/YYYY.");
          return "";
        }

        const monthInt = parseInt(month, 10);
        if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
          alert("Місяць повинен бути між 01 та 12.");
          return "";
        }

        return `${month.padStart(2, '0')}/${year}`;
      });

      updatedValue = processedParts.join(" - ");

      // Обмеження довжини для date
      if (updatedValue.length > 25) {
        updatedValue = updatedValue.slice(0, 25);
      }
    } else if (field === "description") {
      // Обробка для поля description
      if (value.length > 500) { // Наприклад, максимальна довжина 500 символів
        updatedValue = value.slice(0, 500);
      } else {
        updatedValue = value;
      }
    }

    const updatedEntries = [...berufEntries];
    updatedEntries[index][field] = updatedValue;

    // Переконайтеся, що description завжди рядок
    if (field === "description" && typeof updatedEntries[index][field] !== "string") {
      updatedEntries[index][field] = "";
    }

    setBerufEntries(updatedEntries);
  };

  // Додавання нового рядка у "Aктуально"
  const addNewRow = () => {
    setCurrentEntries([...currentEntries, { date: "", description: "" }]);
  };

  // Додавання нового рядка у "Berufserfahrungen"
  const addBerufNewRow = () => {
    setBerufEntries([...berufEntries, { date: "", description: "" }]);
  };

  // Функція для видалення рядка з "Aктуально"
  const removeRow = (index) => {
    if (window.confirm("Ви дійсно хочете видалити цей рядок?")) {
      const updatedEntries = currentEntries.filter((_, i) => i !== index);
      setCurrentEntries(updatedEntries);
    }
  };

  // Функція для видалення рядка з "Berufserfahrungen"
  const removeBerufRow = (index) => {
    if (window.confirm("Ви дійсно хочете видалити цей рядок?")) {
      const updatedEntries = berufEntries.filter((_, i) => i !== index);
      setBerufEntries(updatedEntries);
    }
  };

  // Обробник зміни у полі опису для "Aктуально"
  const handleDescriptionChange = (index, value) => {
    handleTableChange(index, "description", value);

    if (value.length > 0) {
      const filtered = resumeFormTexts.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      // Відображати всі підказки при порожньому значенні
      setSuggestionsState({
        activeRow: index,
        filteredSuggestions: resumeFormTexts.suggestions,
      });
    }
  };

  // Обробник зміни у полі опису для "Berufserfahrungen"
  const handleBerufDescriptionChange = (index, value) => {
    handleBerufTableChange(index, "description", value);

    if (value.length > 0) {
      const filtered = resumeFormTexts.berufserfahrungenSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setBerufSuggestionsState({
        activeRow: index,
        filteredSuggestions: filtered,
      });
    } else {
      // Відображати всі підказки при порожньому значенні
      setBerufSuggestionsState({
        activeRow: index,
        filteredSuggestions: resumeFormTexts.berufserfahrungenSuggestions,
      });
    }
  };

  // Обробник вибору підказки для "Aктуально"
  const handleSuggestionClick = (index, suggestion) => {
    if (index < 0 || index >= currentEntries.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }
    console.log(`Suggestion clicked: ${suggestion} for index: ${index}`); // Логування
    const updatedEntries = [...currentEntries];
    updatedEntries[index].description = suggestion || "";
    console.log("Updated Entries before setState:", updatedEntries); // Логування
    setCurrentEntries(updatedEntries);
    setSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Обробник вибору підказки для "Berufserfahrungen"
  const handleBerufSuggestionClick = (index, suggestion) => {
    if (index < 0 || index >= berufEntries.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }
    console.log(`Suggestion clicked: ${suggestion} for Berufserfahrungen index: ${index}`); // Логування
    const updatedEntries = [...berufEntries];
    updatedEntries[index].description = suggestion || "";
    console.log("Updated Beruf Entries before setState:", updatedEntries); // Логування
    setBerufEntries(updatedEntries);
    setBerufSuggestionsState({
      activeRow: null,
      filteredSuggestions: [],
    });
  };

  // Обробка кліків поза списком підказок для "Aктуально" та "Berufserfahrungen"
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }

      if (
        berufSuggestionsRef.current &&
        !berufSuggestionsRef.current.contains(event.target)
      ) {
        setBerufSuggestionsState({
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

  // Додамо логування станів для діагностики
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
    console.log("currentEntries:", currentEntries);
    console.log("suggestionsState:", suggestionsState);
    console.log("berufEntries:", berufEntries);
    console.log("berufSuggestionsState:", berufSuggestionsState);
  }, [currentEntries, suggestionsState, berufEntries, berufSuggestionsState]);

  return (
    <MainLayout>
<div className={styles.container}>
      {/* Заголовок */}
      <h2 className={styles.header}>{resumeFormTexts.header}</h2>

      {/* Шапка */}
      <section>
        <h3 className={styles.subheader}>Kopfzeile</h3>
        <form className={styles.form}>
          {Object.entries(resumeFormTexts.fields).map(([key, label]) => (
            <div key={key} className={styles.field}>
              <label className={styles.label}>{label}:</label>
              <input
                type="text"
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
        suggestionsRef={suggestionsRef}
        handleTableChange={handleTableChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSuggestionClick={handleSuggestionClick}
        addNewRow={addNewRow}
        removeRow={removeRow}
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
        handleTableChange={handleBerufTableChange}
        handleDescriptionChange={handleBerufDescriptionChange}
        handleSuggestionClick={handleBerufSuggestionClick}
        addNewRow={addBerufNewRow}
        removeRow={removeBerufRow}
      />
    </div>

    </MainLayout>
    
  );
};

export default ResumePage;