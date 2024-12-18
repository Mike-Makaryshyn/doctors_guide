// src/pages/ResumePage/TechnicalSkillsSection.jsx

import React from "react";
import styles from "./TechnicalSkillsSection.module.css";

const TechnicalSkillsSection = ({
  entries,
  setEntries,
  technicalSkillsSuggestionsList,
  levelSuggestionsList,
  technicalSkillsSuggestionsState,
  setTechnicalSkillsSuggestionsState,
  levelSuggestionsState,
  setLevelSuggestionsState,
  technicalSkillsSuggestionsRef,
  levelSuggestionsRef,
  handleTechnicalSkillChange,
  handleTechnicalLevelChange,
  handleTechnicalSkillSuggestionClick,
  handleTechnicalLevelSuggestionClick,
  addNewRow,
  removeRow,
}) => {
  return (
    <section>
      <h3 className={styles.subheader}>Технічні навички</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Навичка</th>
            <th>Рівень</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              {/* Поле для навички */}
              <td className={styles.skillCell}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="Введіть навичку"
                    value={entry.skill}
                    onChange={(e) => handleTechnicalSkillChange(index, e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setTechnicalSkillsSuggestionsState({
                        activeRow: index,
                        filteredSuggestions:
                          entry.skill.length > 0
                            ? technicalSkillsSuggestionsList.filter((suggestion) =>
                                suggestion
                                  .toLowerCase()
                                  .includes(entry.skill.toLowerCase())
                              )
                            : technicalSkillsSuggestionsList,
                      })
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {technicalSkillsSuggestionsState.activeRow === index &&
                  technicalSkillsSuggestionsState.filteredSuggestions.length > 0 && (
                    <ul
                      className={styles.suggestionsList}
                      ref={technicalSkillsSuggestionsRef}
                    >
                      {technicalSkillsSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            handleTechnicalSkillSuggestionClick(index, suggestion)
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
                    value={entry.technicalLevel}
                    onChange={(e) => handleTechnicalLevelChange(index, e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setLevelSuggestionsState({
                        activeRow: index,
                        filteredSuggestions:
                          entry.technicalLevel.length > 0
                            ? levelSuggestionsList.filter((suggestion) =>
                                suggestion
                                  .toLowerCase()
                                  .includes(entry.technicalLevel.toLowerCase())
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
                            handleTechnicalLevelSuggestionClick(index, suggestion)
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

export default TechnicalSkillsSection;