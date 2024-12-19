// src/components/ResumePage/ResumeSection.jsx

import React from "react";
import SingleDateField from "./SingleDateField"; // Імпортуємо компонент SingleDateField
import styles from "./ResumeSection.module.css"; // Імпортуємо стилі

const ResumeSection = ({
  title,
  entries = [], // Значення за замовчуванням — порожній масив
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
  handleDateBlur, // Додаємо обробник для onBlur
  dateErrors = [], // Значення за замовчуванням — порожній масив
}) => {
  return (
    <section>
      <h3 className={styles.subheader}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Дата (Seit / Heute)</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(entries) && entries.length > 0 ? (
            entries.map((entry, index) => (
              <tr key={index}>
                {/* Поле для дати */}
                <td>
                  <SingleDateField
                    value={entry.date}
                    onChange={(newValue) =>
                      handleTableChange(index, "date", newValue)
                    }
                    onBlur={(newValue) =>
                      handleDateBlur(index, newValue)
                    }
                    error={dateErrors[index]}
                  />
                  {dateErrors[index] && (
                    <div className={styles.errorMessage}>
                      {dateErrors[index]}
                    </div>
                  )}
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
                      placeholder="Опис"
                      onBlur={() => {
                        // Використання setTimeout для дозволу натискання на підказку
                        setTimeout(() =>
                          setSuggestionsState({
                            ...suggestionsState,
                            description: {
                              activeRow: null,
                              filteredSuggestions: [],
                            },
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
                      onClick={() =>
                        setSuggestionsState({
                          ...suggestionsState,
                          description: {
                            activeRow: index,
                            filteredSuggestions:
                              entry.description.length > 0
                                ? suggestionsList.filter((suggestion) =>
                                    suggestion
                                      .toLowerCase()
                                      .includes(
                                        entry.description.toLowerCase()
                                      )
                                  )
                                : suggestionsList,
                          },
                        })
                      }
                      className={styles.infoButton}
                      title="Показати підказки"
                    >
                      i
                    </button>
                  </div>
                  {suggestionsState.description.activeRow === index &&
                    suggestionsState.description.filteredSuggestions.length >
                      0 && (
                      <ul
                        className={styles.suggestionsList}
                        ref={suggestionsRef}
                      >
                        {suggestionsState.description.filteredSuggestions.map(
                          (suggestion, i) => (
                            <li
                              key={i}
                              onClick={() =>
                                handleSuggestionClick(
                                  "description",
                                  index,
                                  suggestion
                                )
                              }
                              className={styles.suggestionItem}
                            >
                              {suggestion}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </td>
                <td>
                  {/* Додайте кнопки або інші елементи для дій, якщо потрібно */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className={styles.noDataMessage}>
                Немає даних для відображення
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button className={styles.addButton} onClick={addNewRow}>
        + Додати
      </button>
    </section>
  );
};

export default ResumeSection;