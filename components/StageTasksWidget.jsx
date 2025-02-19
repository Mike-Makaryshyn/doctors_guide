import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import StageTasks from "../pages/ApprobationPage/StageTasks";
import useGetGlobalInfo from "../hooks/useGetGlobalInfo";
import styles from "./StageTasksWidget.module.scss";

// Funkcija za dobivanje prijevoda zaglavlja na temelju jezika i id-ea staga
const getHeaderText = (selectedStageId, language) => {
  const langKey = language ? language.toLowerCase() : "en";
  const headerTranslations = {
    de: (id) => `Aufgaben für Stufe ${id}`,
    en: (id) => `Tasks for Stage ${id}`,
    ru: (id) => `Задания для этапа ${id}`,
    uk: (id) => `Завдання для етапу ${id}`,
    pl: (id) => `Zadania dla etapu ${id}`,
    ar: (id) => `المهام للمرحلة ${id}`,
    tr: (id) => `Aşama için görevler ${id}`,
    fr: (id) => `Tâches pour l'étape ${id}`,
    es: (id) => `Tareas para la etapa ${id}`,
  };
  const translator = headerTranslations[langKey] || headerTranslations.en;
  return translator(selectedStageId);
};

const StageTasksWidget = ({ selectedStageId, user, language }) => {
  // Dohvaćamo globalni jezik iz useGetGlobalInfo; ako nije proslijeđen preko props, koristimo globalni
  const { selectedLanguage } = useGetGlobalInfo();
  const lang = (language || selectedLanguage).toLowerCase();

  const [isExpanded, setIsExpanded] = useState(false);

  const headerText = getHeaderText(selectedStageId, lang);

  return (
    <div className={styles.widgetContainer}>
      <button
        className={`
          ${styles.header} 
          ${!isExpanded ? styles.shakeAnimation : ""} 
          ${isExpanded ? styles.expanded : ""}
        `}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
      >
        <h2>{headerText}</h2>
        {isExpanded ? (
          <FaChevronUp className={styles.chevron} />
        ) : (
          <FaChevronDown className={styles.chevron} />
        )}
      </button>
      {isExpanded && (
        <div className={styles.content}>
          <StageTasks
            selectedStageId={selectedStageId}
            user={user}
            language={lang}
          />
        </div>
      )}
    </div>
  );
};

export default StageTasksWidget;