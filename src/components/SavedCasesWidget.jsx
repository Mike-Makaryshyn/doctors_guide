// src/components/SavedCasesWidget.jsx

import React from "react";
import styles from "./SavedCasesWidget.module.scss";
import { FaCog, FaTimes, FaCheck, FaPause } from "react-icons/fa";

const SavedCasesWidget = ({
  userCases,
  regionalCases,
  onEdit,
  onDelete,
  onMarkCompleted,
  onMarkDeferred,
}) => {
  return (
    <div className={styles.widgetContainer}>
      <h2>Збережені Випадки</h2>
      {userCases.length === 0 && regionalCases.length === 0 ? (
        <p>Немає збережених випадків.</p>
      ) : (
        <div className={styles.casesSection}>
          {/* Ваші Випадки */}
          {userCases.length > 0 && (
            <div className={styles.casesGroup}>
              <h3>Ваші Випадки</h3>
              <div className={styles.casesGrid}>
                {userCases.map((myCase) => (
                  <div key={myCase.id} className={styles.caseTile}>
                    <h3>{myCase.fullName || myCase.name || "Без Назви"}</h3>
                    <p style={{ color: "#555" }}>{myCase.region}</p>
                    <div className={styles.tileActions}>
                      {/* Позначити як Виконаний */}
                      <button
                        className={`${styles.actionButton} ${styles.markCompletedButton}`}
                        onClick={() => onMarkCompleted(myCase.id, myCase.region)}
                        title="Виконаний"
                      >
                        <FaCheck />
                      </button>
                      {/* Позначити як Відкладений */}
                      <button
                        className={`${styles.actionButton} ${styles.markDeferredButton}`}
                        onClick={() => onMarkDeferred(myCase.id, myCase.region)}
                        title="Відкладений"
                      >
                        <FaPause />
                      </button>
                      {/* Редагувати */}
                      <button
                        className={`${styles.actionButton} ${styles.editButton}`}
                        onClick={() => onEdit(myCase)}
                        title="Редагувати"
                      >
                        <FaCog />
                      </button>
                      {/* Видалити */}
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
              </div>
            </div>
          )}

          {/* Випадки Регіону */}
          {regionalCases.length > 0 && (
            <div className={styles.casesGroup}>
              <h3>Випадки Регіону</h3>
              <div className={styles.casesGrid}>
                {regionalCases.map((regionCase) => (
                  <div key={regionCase.id} className={styles.caseTile}>
                    <h3>{regionCase.fullName || regionCase.name || "Без Назви"}</h3>
                    <p style={{ color: "#555" }}>{regionCase.region}</p>
                    <div className={styles.tileActions}>
                      {/* Позначити як Виконаний */}
                      <button
                        className={`${styles.actionButton} ${styles.markCompletedButton}`}
                        onClick={() => onMarkCompleted(regionCase.id, regionCase.region)}
                        title="Виконаний"
                      >
                        <FaCheck />
                      </button>
                      {/* Позначити як Відкладений */}
                      <button
                        className={`${styles.actionButton} ${styles.markDeferredButton}`}
                        onClick={() => onMarkDeferred(regionCase.id, regionCase.region)}
                        title="Відкладений"
                      >
                        <FaPause />
                      </button>
                      {/* Редагувати */}
                      <button
                        className={`${styles.actionButton} ${styles.editButton}`}
                        onClick={() => onEdit(regionCase)}
                        title="Редагувати"
                      >
                        <FaCog />
                      </button>
                      {/* Видалити */}
                      <button
                        className={`${styles.actionButton} ${styles.deleteButton}`}
                        onClick={() => onDelete(regionCase)}
                        title="Видалити"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedCasesWidget;