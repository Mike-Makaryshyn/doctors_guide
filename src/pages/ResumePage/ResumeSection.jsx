// src/components/ResumePage/ResumeSection.jsx

import React from "react";
import styles from "./ResumeSection.module.css"; // Імпортуємо стилі

const ResumeSection = ({
  title,
  entries,
  setEntries,
  suggestionsList,
  suggestionsState,
  setSuggestionsState,
  suggestionsRef,
  handleTableChange,
  handleDescriptionChange,
  handleSuggestionClick,
  addNewRow,
  removeRow,
}) => {
  return (
    <section>
      <h3 className={styles.subheader}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Datum (Seit / Heute)</th>
            <th>Beschreibung</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              {/* Поле для дати */}
              <td>
                <input
                  type="text"
                  placeholder="MM/JJJJ oder seit/heute"
                  value={entry.date}
                  onChange={(e) =>
                    handleTableChange(index, "date", e.target.value, true)
                  }
                  className={styles.dateInput}
                />
              </td>

              {/* Поле для опису разом з кнопкою видалення та кнопкою для підказок */}
              <td className={styles.descriptionCell}>
                <div className={styles.descriptionContainer}>
                  <textarea
                    value={entry.description || ""}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    className={styles.textArea}
                    placeholder="Beschreibung eingeben"
                    onBlur={() => {
                      // Використання setTimeout для дозволу натискання на підказку
                      setTimeout(() =>
                        setSuggestionsState({
                          activeRow: null,
                          filteredSuggestions: [],
                        }), 100);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className={styles.removeButton}
                  >
                    −
                  </button>
                  {/* Додаємо кнопку для показу підказок */}
                  <button
                    type="button"
                    onClick={() => setSuggestionsState({
                      activeRow: index,
                      filteredSuggestions: entries[index].description.length > 0
                        ? suggestionsList.filter(suggestion =>
                            suggestion.toLowerCase().includes(entries[index].description.toLowerCase())
                          )
                        : suggestionsList
                    })}
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {suggestionsState.activeRow === index && suggestionsState.filteredSuggestions.length > 0 && (
                  <ul
                    className={styles.suggestionsList}
                    ref={suggestionsRef}
                  >
                    {suggestionsState.filteredSuggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() =>
                          handleSuggestionClick(index, suggestion)
                        }
                        className={styles.suggestionItem}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.addButton} onClick={addNewRow}>
        + Hinzufügen
      </button>
    </section>
  );
};

export default ResumeSection;