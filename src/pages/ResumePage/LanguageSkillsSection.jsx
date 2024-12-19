import React, { useEffect, useState, useRef } from "react";
import styles from "./LanguageSkillsSection.module.css";

const LanguageSkillsSection = ({
  entries,
  setEntries,
  languageSuggestionsList,
  levelSuggestionsList,
  languageSuggestionsState,
  setLanguageSuggestionsState,
  levelSuggestionsState,
  setLevelSuggestionsState,
  addNewRow,
  removeRow,
}) => {
  const [activeField, setActiveField] = useState(null); // Новий стан для активного поля
  const suggestionsRef = useRef(null); // Єдиний ref для підказок

  // Обробка кліків поза підказками
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setActiveField(null); // Закрити всі підказки
        setLanguageSuggestionsState({ activeRow: null, filteredSuggestions: [] });
        setLevelSuggestionsState({ activeRow: null, filteredSuggestions: [] });
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [setLanguageSuggestionsState, setLevelSuggestionsState]);

  const handleSuggestionSelect = (index, field, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = suggestion;
    setEntries(updatedEntries);

    // Закрити підказки після вибору
    setActiveField(null);
    setLanguageSuggestionsState({ activeRow: null, filteredSuggestions: [] });
    setLevelSuggestionsState({ activeRow: null, filteredSuggestions: [] });
  };

  const toggleSuggestions = (index, field, value, suggestionsList, setSuggestionsState) => {
    setActiveField(`${field}-${index}`); // Унікальний ідентифікатор для активного поля
    setSuggestionsState({
      activeRow: index,
      filteredSuggestions: value
        ? suggestionsList.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
          )
        : suggestionsList,
    });
  };

  const handleFieldChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

  return (
    <section>
      <h3 className={styles.subheader}>Мовні навички</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Мова</th>
            <th>Рівень</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className={styles.languageCell}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="Введіть мову"
                    value={entry.language}
                    onChange={(e) => handleFieldChange(index, "language", e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      toggleSuggestions(
                        index,
                        "language",
                        entry.language,
                        languageSuggestionsList,
                        setLanguageSuggestionsState
                      )
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {activeField === `language-${index}` && (
                  <ul
                    className={styles.suggestionsList}
                    ref={suggestionsRef}
                    onClick={(e) => e.stopPropagation()} // Запобігання закриттю при кліку всередині
                  >
                    {languageSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() => handleSuggestionSelect(index, "language", suggestion)}
                        className={styles.suggestionItem}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </td>

              <td className={styles.levelCell}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="Введіть рівень"
                    value={entry.level}
                    onChange={(e) => handleFieldChange(index, "level", e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      toggleSuggestions(
                        index,
                        "level",
                        entry.level,
                        levelSuggestionsList,
                        setLevelSuggestionsState
                      )
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {activeField === `level-${index}` && (
                  <ul
                    className={styles.suggestionsList}
                    ref={suggestionsRef}
                    onClick={(e) => e.stopPropagation()} // Запобігання закриттю при кліку всередині
                  >
                    {levelSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() => handleSuggestionSelect(index, "level", suggestion)}
                        className={styles.suggestionItem}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </td>

              <td>
                <button
                  onClick={() => removeRow(index)}
                  className={styles.removeButton}
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNewRow} className={styles.addButton}>
        + Додати новий рядок
      </button>
    </section>
  );
};

export default LanguageSkillsSection;