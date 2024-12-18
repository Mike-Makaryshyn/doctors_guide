// src/pages/ResumePage/LanguageSkillsSection.jsx

import React from "react";
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
  languageSuggestionsRef,
  levelSuggestionsRef,
  handleLanguageFieldChange, // Використовуємо загальний обробник
  handleLanguageSuggestionClick,
  handleLevelSuggestionClick,
  addNewRow,
  removeRow,
}) => {
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
              {/* Поле для мови */}
              <td className={styles.languageCell}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="Введіть мову"
                    value={entry.language}
                    onChange={(e) =>
                      handleLanguageFieldChange(index, "language", e.target.value)
                    }
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setLanguageSuggestionsState({
                        activeRow: index,
                        filteredSuggestions:
                          entry.language.length > 0
                            ? languageSuggestionsList.filter((suggestion) =>
                                suggestion
                                  .toLowerCase()
                                  .includes(entry.language.toLowerCase())
                              )
                            : languageSuggestionsList,
                      })
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {languageSuggestionsState.activeRow === index &&
                  languageSuggestionsState.filteredSuggestions.length > 0 && (
                    <ul
                      className={styles.suggestionsList}
                      ref={languageSuggestionsRef}
                    >
                      {languageSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            handleLanguageSuggestionClick(index, suggestion)
                          }
                          className={styles.suggestionItem}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
              </td>

              {/* Поле для рівня */}
              <td className={styles.levelCell}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="Введіть рівень"
                    value={entry.level}
                    onChange={(e) =>
                      handleLanguageFieldChange(index, "level", e.target.value)
                    }
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setLevelSuggestionsState({
                        activeRow: index,
                        filteredSuggestions:
                          entry.level.length > 0
                            ? levelSuggestionsList.filter((suggestion) =>
                                suggestion
                                  .toLowerCase()
                                  .includes(entry.level.toLowerCase())
                              )
                            : levelSuggestionsList,
                      })
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {levelSuggestionsState.activeRow === index &&
                  levelSuggestionsState.filteredSuggestions.length > 0 && (
                    <ul
                      className={styles.suggestionsList}
                      ref={levelSuggestionsRef}
                    >
                      {levelSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            handleLevelSuggestionClick(index, suggestion)
                          }
                          className={styles.suggestionItem}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
              </td>

              {/* Дії */}
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