// src/components/SavedCasesWidget.jsx

import React, { useState, useEffect } from "react";
import styles from "./SavedCasesWidget.module.scss";
import {
  FaCog,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaCheck,
  FaPause,
} from "react-icons/fa";
import { useCases } from "../contexts/CasesContext"; // Імпорт хука контексту

const SavedCasesWidget = () => {
  const {
    userCases,
    regionalCases,
    handleMarkCompleted,
    handleMarkDeferred,
    handleCaseClick,
    handleEdit,
    handleDelete,
    // handleAddNewCase, // Якщо потрібна
  } = useCases(); // Використання функцій та даних з контексту

  const [isUserCasesExpanded, setIsUserCasesExpanded] = useState(true);
  const [isRegionalCasesExpanded, setIsRegionalCasesExpanded] = useState(true);

  // Debugging: Log received cases and functions
  useEffect(() => {
    console.log("SavedCasesWidget - User Cases:", userCases);
    console.log("SavedCasesWidget - Regional Cases:", regionalCases);
    console.log("SavedCasesWidget - handleMarkCompleted:", handleMarkCompleted);
    console.log("SavedCasesWidget - handleMarkDeferred:", handleMarkDeferred);
    console.log("SavedCasesWidget - handleCaseClick:", handleCaseClick);
    console.log("SavedCasesWidget - handleEdit:", handleEdit);
    console.log("SavedCasesWidget - handleDelete:", handleDelete);
  }, [
    userCases,
    regionalCases,
    handleMarkCompleted,
    handleMarkDeferred,
    handleCaseClick,
    handleEdit,
    handleDelete,
  ]);

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.sectionsContainer}>
        {/* Section for My Own Cases */}
        <div className={styles.section}>
          {/* Header */}
          <button
            className={`${styles.header} ${isUserCasesExpanded ? styles.expanded : ""} ${styles.userHeader}`}
            onClick={() => setIsUserCasesExpanded(!isUserCasesExpanded)}
            aria-expanded={isUserCasesExpanded}
            aria-controls="user-cases-section"
          >
            <h2>Meine eigenen Fälle</h2>
            {isUserCasesExpanded ? (
              <FaChevronUp className={styles.chevron} />
            ) : (
              <FaChevronDown className={styles.chevron} />
            )}
          </button>

          {/* Content */}
          {isUserCasesExpanded && (
            <div id="user-cases-section" className={styles.casesSection}>
              {/* Own Cases */}
              <div className={styles.userCases}>
                {userCases.length === 0 ? (
                  <p>Keine eigenen Fälle.</p>
                ) : (
                  <div className={styles.casesList}>
                    {userCases.map((myCase) => (
                      <div
                        key={myCase.id}
                        className={`${styles.caseTile} ${
                          myCase.status === "completed"
                            ? styles.completed
                            : myCase.status === "deferred"
                            ? styles.deferred
                            : ""
                        }`}
                        onClick={() =>
                          handleCaseClick &&
                          handleCaseClick(myCase.id, myCase.source || "firebase", myCase.region)
                        }
                      >
                        <div className={styles.actions}>
                          {/* Редагувати */}
                          <button
                            className={`${styles.actionButton} ${styles.editButton}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit && handleEdit(myCase);
                              console.log(`Edit clicked for caseId: ${myCase.id}`);
                            }}
                            title="Bearbeiten"
                          >
                            <FaCog />
                          </button>
                          {/* Видалити */}
                          <button
                            className={`${styles.actionButton} ${styles.deleteButton}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete && handleDelete(myCase);
                              console.log(`Delete clicked for caseId: ${myCase.id}`);
                            }}
                            title="Löschen"
                          >
                            <FaTimes />
                          </button>
                        </div>
                        <h3 className={styles.tileHeader}>{myCase.fullName || myCase.name || "Ohne Titel"}</h3>
                        <p style={{ color: "#555" }}>{myCase.region}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Add New Case Button */}
              <div
                className={styles.addNewTile}
                onClick={(e) => {
                  e.stopPropagation();
                  // Додайте логіку для додавання нового випадку, якщо потрібно
                  console.log("Add new case clicked.");
                }}
              >
                <FaPlus className={styles.plusIcon} />
              </div>
            </div>
          )}
        </div>

        {/* Section for Regional Cases */}
        <div className={styles.section}>
          {/* Header */}
          <button
            className={`${styles.header} ${isRegionalCasesExpanded ? styles.expanded : ""} ${styles.regionalHeader}`}
            onClick={() => setIsRegionalCasesExpanded(!isRegionalCasesExpanded)}
            aria-expanded={isRegionalCasesExpanded}
            aria-controls="regional-cases-section"
          >
            <h2>Regionale Fälle</h2>
            {isRegionalCasesExpanded ? (
              <FaChevronUp className={styles.chevron} />
            ) : (
              <FaChevronDown className={styles.chevron} />
            )}
          </button>

          {/* Content */}
          {isRegionalCasesExpanded && (
            <div id="regional-cases-section" className={styles.casesSection}>
              {/* Regional Cases */}
              <div className={styles.regionalCases}>
                {regionalCases.length === 0 ? (
                  <p>Keine Fälle in Ihrer Region.</p>
                ) : (
                  <div className={styles.casesList}>
                    {regionalCases.map((myCase) => (
                      <div
                        key={myCase.id}
                        className={`${styles.caseTile} ${
                          myCase.status === "completed"
                            ? styles.completed
                            : myCase.status === "deferred"
                            ? styles.deferred
                            : ""
                        }`}
                        onClick={() =>
                          handleCaseClick &&
                          handleCaseClick(myCase.id, myCase.source || "firebase", myCase.region)
                        }
                      >
                        <div className={styles.actions}>
                          {/* Mark as Completed */}
                          <button
                            className={`${styles.actionButton} ${styles.markCompletedButton}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkCompleted && handleMarkCompleted(myCase.id, myCase.region);
                              console.log(`Mark as completed clicked for caseId: ${myCase.id}`);
                            }}
                            title="Als erledigt markieren"
                          >
                            <FaCheck />
                          </button>
                          {/* Mark as Deferred */}
                          <button
                            className={`${styles.actionButton} ${styles.markDeferredButton}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkDeferred && handleMarkDeferred(myCase.id, myCase.region);
                              console.log(`Mark as deferred clicked for caseId: ${myCase.id}`);
                            }}
                            title="Auf später verschieben"
                          >
                            <FaPause />
                          </button>
                        </div>
                        <h4>{myCase.fullName || myCase.name || "Ohne Titel"}</h4>
                        <p>{myCase.region}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedCasesWidget;