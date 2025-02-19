// src/components/SavedCasesWidget.jsx

import React, { useState, useEffect } from "react";
import styles from "./SavedCasesWidget.module.scss";
import {
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaPause,
  FaCog,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
import { useCases } from "../contexts/CasesContext"; // Імпорт хука контексту
import { useNavigate } from "react-router-dom"; // Імпорт useNavigate
import { ToastContainer, toast } from "react-toastify"; // Імпорт ToastContainer та toast
import "react-toastify/dist/ReactToastify.css"; // Імпорт стилів toast

const SavedCasesWidget = () => {
  const {
    userCases,
    regionalCases,
    handleMarkAsCompleted,
    handleDeferCase,
    handleCaseClick,
    handleEdit,
    handleDelete,
    deferredCases,
    completedCases,
  } = useCases();

  const navigate = useNavigate();

  // Встановлюємо секції закритими за замовчуванням
  const [isUserCasesExpanded, setIsUserCasesExpanded] = useState(false);
  const [isRegionalCasesExpanded, setIsRegionalCasesExpanded] = useState(false);

  // Debugging: Log received cases and functions
  useEffect(() => {
    console.log("SavedCasesWidget - User Cases:", userCases);
    console.log("SavedCasesWidget - Regional Cases:", regionalCases);
    console.log("SavedCasesWidget - handleMarkAsCompleted:", handleMarkAsCompleted);
    console.log("SavedCasesWidget - handleDeferCase:", handleDeferCase);
    console.log("SavedCasesWidget - handleCaseClick:", handleCaseClick);
    console.log("SavedCasesWidget - handleEdit:", handleEdit);
    console.log("SavedCasesWidget - handleDelete:", handleDelete);
  }, [
    userCases,
    regionalCases,
    handleMarkAsCompleted,
    handleDeferCase,
    handleCaseClick,
    handleEdit,
    handleDelete,
  ]);

  const getCaseStatus = (caseId, region) => {
    const isDeferred = deferredCases.some(
      (x) => x.caseId === String(caseId) && x.region === region
    );
    if (isDeferred) return "deferred";

    const isCompleted = completedCases.some(
      (x) => x.caseId === String(caseId) && x.region === region
    );
    if (isCompleted) return "completed";

    return "active";
  };

  // Сортування випадків: відкладені спочатку, активні середина, завершені в кінці
  const sortCases = (cases) => {
    const deferred = cases.filter((c) => getCaseStatus(c.id, c.region) === "deferred");
    const active = cases.filter((c) => getCaseStatus(c.id, c.region) === "active");
    const completed = cases.filter((c) => getCaseStatus(c.id, c.region) === "completed");
    return [...deferred, ...active, ...completed];
  };

  const sortedUserCases = sortCases(userCases);
  const sortedRegionalCases = sortCases(regionalCases);

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.sectionsContainer}>
        {/* Section for My Own Cases */}
        <div className={styles.section}>
          <button
            className={`${styles.header} ${isUserCasesExpanded ? styles.expanded : ""} ${styles.userHeader}`}
            onClick={() => setIsUserCasesExpanded(!isUserCasesExpanded)}
            aria-expanded={isUserCasesExpanded}
            aria-controls="user-cases-section"
          >
            <h2>Meine eigenen Fälle</h2>
            {isUserCasesExpanded ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />}
          </button>

          {isUserCasesExpanded && (
            <div id="user-cases-section" className={styles.casesSection}>
              <div className={styles.userCases}>
                {sortedUserCases.length === 0 ? (
                  <p>Keine eigenen Fälle.</p>
                ) : (
                  <div className={styles.casesList}>
                    {sortedUserCases.map((myCase) => {
                      const st = getCaseStatus(myCase.id, myCase.region);
                      return (
                        <div
                          key={myCase.id}
                          className={`${styles.caseTile} ${
                            st === "completed"
                              ? styles.completed
                              : st === "deferred"
                              ? styles.deferred
                              : styles.active
                          }`}
                          onClick={() => {
                            if (myCase.region) {
                              handleCaseClick && handleCaseClick(myCase.id, myCase.source || "firebase", myCase.region);
                            } else {
                              console.error(`Region is undefined for caseId: ${myCase.id}`);
                              toast.error("Region is undefined for this case.");
                            }
                          }}
                          aria-label={`View case ${myCase.fullName || myCase.name}`}
                        >
                          <div className={styles.actions}>
                            <button
                              className={`${styles.actionButton} ${styles.editButton}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Edit clicked for caseId: ${myCase.id}, region: ${myCase.region}`);
                                handleEdit && handleEdit(myCase);
                              }}
                              aria-label={`Edit ${myCase.fullName || myCase.name}`}
                            >
                              <FaCog />
                            </button>
                            <button
                              className={`${styles.actionButton} ${styles.deleteButton}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Delete clicked for caseId: ${myCase.id}, region: ${myCase.region}`);
                                handleDelete && handleDelete(myCase);
                              }}
                              aria-label={`Delete ${myCase.fullName || myCase.name}`}
                            >
                              <FaTimes />
                            </button>
                          </div>
                          <h3 className={styles.tileHeader}>{myCase.fullName || myCase.name || "Ohne Titel"}</h3>
                          <p>{myCase.region}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div
                className={styles.addNewTile}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Add New Case clicked");
                  navigate("/data-collection");
                }}
                aria-label="Add New Case"
              >
                <FaPlus className={styles.plusIcon} />
              </div>
            </div>
          )}
        </div>

        {/* Section for Regional Cases */}
        <div className={styles.section}>
          <button
            className={`${styles.header} ${isRegionalCasesExpanded ? styles.expanded : ""} ${styles.regionalHeader}`}
            onClick={() => setIsRegionalCasesExpanded(!isRegionalCasesExpanded)}
            aria-expanded={isRegionalCasesExpanded}
            aria-controls="regional-cases-section"
          >
            <h2>Regionale Fälle</h2>
            {isRegionalCasesExpanded ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />}
          </button>

          {isRegionalCasesExpanded && (
            <div id="regional-cases-section" className={styles.casesSection}>
              <div className={styles.regionalCases}>
                {sortedRegionalCases.length === 0 ? (
                  <p>Keine Fälle in Ihrer Region.</p>
                ) : (
                  <div className={styles.casesList}>
                    {sortedRegionalCases.map((myCase) => {
                      // Додано логування кожного випадку
                      console.log(`Regional case: id=${myCase.id}, region=${myCase.region}`);

                      const st = getCaseStatus(myCase.id, myCase.region);
                      return (
                        <div
                          key={myCase.id}
                          className={`${styles.caseTile} ${
                            st === "completed"
                              ? styles.completed
                              : st === "deferred"
                              ? styles.deferred
                              : styles.active
                          }`}
                          onClick={() => {
                            if (myCase.region) {
                              // Встановлюємо source як "local" для регіональних випадків
                              handleCaseClick && handleCaseClick(myCase.id, "local", myCase.region);
                            } else {
                              console.error(`Region is undefined for caseId: ${myCase.id}`);
                              toast.error("Region is undefined for this case.");
                            }
                          }}
                          aria-label={`View case ${myCase.fullName || myCase.name}`}
                        >
                          <div className={styles.actions}>
                            <button
                              className={`${styles.actionButton} ${styles.markCompletedButton}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Mark as completed clicked for caseId: ${myCase.id}, region: ${myCase.region}`);
                                handleMarkAsCompleted && handleMarkAsCompleted(myCase.id, myCase.region);
                              }}
                              aria-label={`Mark ${myCase.fullName || myCase.name} as completed`}
                            >
                              <FaCheck />
                            </button>
                            <button
                              className={`${styles.actionButton} ${styles.deferButton}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Defer clicked for caseId: ${myCase.id}, region: ${myCase.region}`);
                                handleDeferCase && handleDeferCase(myCase.id, myCase.region);
                              }}
                              aria-label={`Defer ${myCase.fullName || myCase.name}`}
                            >
                              <FaPause />
                            </button>
                          </div>
                          <h3 className={styles.tileHeader}>{myCase.fullName || myCase.name || "Ohne Titel"}</h3>
                          <p>{myCase.region}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer /> {/* Додано контейнер для toast повідомлень */}
    </div>
  );
};

export default SavedCasesWidget;