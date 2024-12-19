import React, { useEffect } from "react";
import TextField from "@mui/material/TextField"; // Імпорт TextField
import SingleDateField from "./SingleDateField";
import styles from "./ResumeSection.module.css";

const ResumeSection = ({
  title,
  entries = [],
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
  handleDateBlur,
  dateErrors = [],
}) => {
  // Закривання підказок по кліку на порожнє місце
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestionsState({
          ...suggestionsState,
          description: {
            activeRow: null,
            filteredSuggestions: [],
          },
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [suggestionsRef, suggestionsState, setSuggestionsState]);

  // Вибір підказки
  const handleSuggestionSelect = (index, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = suggestion; // Додати значення в поле
    setEntries(updatedEntries);

    // Закрити підказки після вибору
    setSuggestionsState({
      ...suggestionsState,
      description: {
        activeRow: null,
        filteredSuggestions: [],
      },
    });
  };

  return (
    <section>
      <h3 className={styles.subheader}>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Дата (Seit / Heute)</th>
            <th>Опис</th>
            {title !== "Aktuell" && <th style={{ width: "20%" }}>Ort (Місце)</th>}
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
                    onBlur={(newValue) => handleDateBlur(index, newValue)}
                    error={dateErrors[index]}
                  />
                  {dateErrors[index] && (
                    <div className={styles.errorMessage}>
                      {dateErrors[index]}
                    </div>
                  )}
                </td>

                {/* Поле для опису */}
                <td className={styles.descriptionCell}>
                  <div className={styles.descriptionContainer}>
                    <TextField
                      label="Опис"
                      variant="outlined"
                      placeholder="Введіть опис"
                      value={entry.description || ""}
                      onChange={(e) =>
                        handleDescriptionChange(index, e.target.value)
                      }
                      fullWidth
                      margin="normal"
                    />
                    <button
                      type="button"
                      onClick={() => removeRow(index)}
                      className={styles.removeButton}
                    >
                      −
                    </button>
                    {/* Кнопка для підказок */}
                    <button
                      type="button"
                      onClick={() =>
                        setSuggestionsState({
                          ...suggestionsState,
                          description: {
                            activeRow: index,
                            filteredSuggestions:
                              suggestionsList.filter((suggestion) =>
                                suggestion
                                  .toLowerCase()
                                  .includes(entry.description.toLowerCase())
                              ).length > 0
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
                                handleSuggestionSelect(index, suggestion)
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

                {/* Поле для місця (Ort) */}
                {title !== "Aktuell" && (
                  <td>
                    <TextField
                      label="Ort (Місце)"
                      variant="outlined"
                      placeholder="Введіть місце"
                      value={entry.place || ""}
                      onChange={(e) =>
                        handleTableChange(index, "place", e.target.value)
                      }
                      fullWidth
                      margin="normal"
                    />
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={title !== "Aktuell" ? "3" : "2"} className={styles.noDataMessage}>
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