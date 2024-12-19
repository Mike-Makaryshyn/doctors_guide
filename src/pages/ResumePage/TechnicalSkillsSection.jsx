import React, { useEffect, useState, useRef } from "react";
import styles from "./TechnicalSkillsSection.module.css";

const TechnicalSkillsSection = ({
  entries,
  setEntries,
  technicalSkillsSuggestionsList,
  levelSuggestionsList,
  addNewRow,
  removeRow,
}) => {
  const [activeField, setActiveField] = useState(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); // Новий стан для списку підказок
  const suggestionsRef = useRef(null);

  // Обробка кліків поза підказками
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setActiveField(null); // Закрити всі підказки
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  const handleSuggestionSelect = (index, field, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = suggestion;
    setEntries(updatedEntries);
    setActiveField(null); // Закрити підказки після вибору
  };

  const toggleSuggestions = (index, field, value, suggestionsList) => {
    setActiveField(`${field}-${index}`);
    setFilteredSuggestions(
      value
        ? suggestionsList.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
          )
        : suggestionsList
    );
  };

  const handleFieldChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

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
              <td className={styles.skillCell}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder="Введіть навичку"
                    value={entry.skill}
                    onChange={(e) =>
                      handleFieldChange(index, "skill", e.target.value)
                    }
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      toggleSuggestions(
                        index,
                        "skill",
                        entry.skill,
                        technicalSkillsSuggestionsList
                      )
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {activeField === `skill-${index}` && (
                  <ul
                    className={styles.suggestionsList}
                    ref={suggestionsRef}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {filteredSuggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() =>
                          handleSuggestionSelect(index, "skill", suggestion)
                        }
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
                    value={entry.technicalLevel}
                    onChange={(e) =>
                      handleFieldChange(index, "technicalLevel", e.target.value)
                    }
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      toggleSuggestions(
                        index,
                        "technicalLevel",
                        entry.technicalLevel,
                        levelSuggestionsList
                      )
                    }
                    className={styles.infoButton}
                    title="Показати підказки"
                  >
                    i
                  </button>
                </div>
                {activeField === `technicalLevel-${index}` && (
                  <ul
                    className={styles.suggestionsList}
                    ref={suggestionsRef}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {filteredSuggestions.map((suggestion, i) => (
                      <li
                        key={i}
                        onClick={() =>
                          handleSuggestionSelect(
                            index,
                            "technicalLevel",
                            suggestion
                          )
                        }
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

export default TechnicalSkillsSection;