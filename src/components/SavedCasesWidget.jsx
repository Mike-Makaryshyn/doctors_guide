import React, { useState } from "react";
import styles from "./SavedCasesWidget.module.scss";
import { FaCog, FaTimes, FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";

const SavedCasesWidget = ({ userCases, onEdit, onDelete, onAddNewCase }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.header} onClick={() => setIsExpanded(!isExpanded)}>
        <h2>Meine Fälle</h2>
        {isExpanded ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />}
      </div>

      {isExpanded && (
        <div className={styles.casesSection}>
          {userCases.length === 0 ? (
            <p>Немає збережених випадків.</p>
          ) : (
            <div className={styles.casesList}>
              {userCases.map((myCase) => (
                <div key={myCase.id} className={styles.caseTile}>
                  <h3>{myCase.fullName || myCase.name || "Без Назви"}</h3>
                  <p>{myCase.region}</p>
                  <div className={styles.tileActions}>
                    <button
                      className={`${styles.actionButton} ${styles.editButton}`}
                      onClick={() => onEdit(myCase)}
                      title="Редагувати"
                    >
                      <FaCog />
                    </button>
                    <button
                      className={`${styles.actionButton} ${styles.deleteButton}`}
                      onClick={() => onDelete(myCase)}
                      title="Видалити"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              ))}
              {/* Додати нову плитку для створення випадку */}
              <div
  className={styles.addNewTile}
  onClick={() => {
    // Логіка для додавання нового кейсу
    console.log("Додати новий кейс");
  }}
>
  <p>+</p>
</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedCasesWidget;