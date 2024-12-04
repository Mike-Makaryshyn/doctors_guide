import React, { useState } from "react";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";

const AllMedicalTerminologyPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const allCategories = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories))
  );

  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.germanDefinition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => term.categories.includes(category));
    return matchesSearch && matchesCategory;
  });

  const termsByCategory = {};
  filteredTerms.forEach((term) => {
    term.categories.forEach((category) => {
      if (!termsByCategory[category]) {
        termsByCategory[category] = [];
      }
      termsByCategory[category].push(term);
    });
  });

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleDefinitionSelect = (id) => {
    setSelectedDefinitions((prev) =>
      prev.includes(id)
        ? prev.filter((defId) => defId !== id)
        : [...prev, id]
    );
  };

  const toggleCollapseCategory = (category) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const saveDefinitions = () => {
    console.log("Selected Definitions:", selectedDefinitions);
  };

  return (
    <div className={styles.allMedicalTerminologyPage}>
      <h1>Уся медична термінологія</h1>

      <div className={styles.topButtons}>
        {/* Кнопка збереження */}
        <button onClick={saveDefinitions} className={styles.actionButton}>
          Зберегти вибрані визначення
        </button>

        {/* Кнопка показу/приховування визначень */}
        <button
          onClick={() => setShowDefinitions((prev) => !prev)}
          className={styles.actionButton}
        >
          {showDefinitions ? "Приховати означення" : "Показати означення"}
        </button>
      </div>

      {/* Пошук */}
      <input
        type="text"
        placeholder="Пошук..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {/* Фільтри категорій */}
      <div className={styles.categoryFilter}>
        <button
          onClick={() =>
            setSelectedCategories(selectedCategories.length ? [] : allCategories)
          }
          className={styles.filterButton}
        >
          {selectedCategories.length ? "Очистити всі" : "Обрати всі"}
        </button>
        <div className={styles.categoryButtonContainer}>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`${styles.categoryButton} ${
                selectedCategories.includes(category) ? styles.active : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Відображення даних по категоріях */}
      {Object.keys(termsByCategory).map((category) => (
        <div key={category} className={styles.categorySection}>
          <h2
            onClick={() => toggleCollapseCategory(category)}
            className={styles.categoryHeader}
          >
            {category}
            <span
              className={`${styles.collapseIcon} ${
                collapsedCategories[category] ? styles.collapsed : ""
              }`}
            >
              {collapsedCategories[category] ? "▼" : "▲"}
            </span>
          </h2>
          {!collapsedCategories[category] && (
            <table className={styles.terminologyTable}>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        const termIds = termsByCategory[category].map(
                          (term) => term.id
                        );
                        if (e.target.checked) {
                          setSelectedDefinitions((prev) => [
                            ...prev,
                            ...termIds.filter((id) => !prev.includes(id)),
                          ]);
                        } else {
                          setSelectedDefinitions((prev) =>
                            prev.filter((id) => !termIds.includes(id))
                          );
                        }
                      }}
                      checked={termsByCategory[category].every((term) =>
                        selectedDefinitions.includes(term.id)
                      )}
                    />
                  </th>
                  <th>Латинська назва</th>
                  <th>Німецька назва</th>
                  {showDefinitions && <th>Означення</th>}
                </tr>
              </thead>
              <tbody>
                {termsByCategory[category].map((term) => (
                  <tr key={term.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedDefinitions.includes(term.id)}
                        onChange={() => handleDefinitionSelect(term.id)}
                      />
                    </td>
                    <td>{term.latin}</td>
                    <td>{term.german}</td>
                    {showDefinitions && <td>{term.germanDefinition}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllMedicalTerminologyPage;