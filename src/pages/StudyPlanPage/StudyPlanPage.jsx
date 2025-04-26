// src/pages/StudyPlanPage/StudyPlanPage.jsx

import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import styles from './StudyPlanPage.module.scss';
import { rawTopicsList } from './topics';

// Допоміжна функція для створення запису плану
const createPlanEntry = (id, date, topic, subtopics = [], phase = '') => ({
  id,
  date,
  topic,
  subtopics,
  phase,
  completed: false
});

// Константний статичний план згідно з розподілом на фази
const planData = [
  // Phase 1: Schwierige Themen (51 тема)
  createPlanEntry(1, "2025-04-11", "Akutes Abdomen", ["Пальпація", "Аускультація", "Анамнез", "Differenzialdiagnose"], "Phase 1"),
  createPlanEntry(2, "2025-04-12", "Akutes Koronarsyndrom", [], "Phase 1"),
  createPlanEntry(3, "2025-04-13", "Anaphylaktischer Schock", [], "Phase 1"),
  createPlanEntry(4, "2025-04-14", "Aortendissektion", [], "Phase 1"),
  createPlanEntry(5, "2025-04-15", "Appendizitis", [], "Phase 1"),
  createPlanEntry(6, "2025-04-16", "(optional – Ruhetag/Wiederholung)", [], "Phase 1"),
  createPlanEntry(7, "2025-04-17", "Asthma bronchiale", [], "Phase 1"),
  createPlanEntry(8, "2025-04-18", "Cholezystitis und Cholangitis", [], "Phase 1"),
  createPlanEntry(9, "2025-04-19", "COPD", [], "Phase 1"),
  createPlanEntry(10, "2025-04-20", "Pneumonie", [], "Phase 1"),
  createPlanEntry(11, "2025-04-21", "Pneumothorax", [], "Phase 1"),
  createPlanEntry(12, "2025-04-22", "(optional – Wiederholungstag)", [], "Phase 1"),
  createPlanEntry(13, "2025-04-23", "Reanimation", [], "Phase 1"),
  createPlanEntry(14, "2025-04-24", "Schlaganfall", [], "Phase 1"),
  createPlanEntry(15, "2025-04-25", "Schock", [], "Phase 1"),
  createPlanEntry(16, "2025-04-26", "Sepsis", [], "Phase 1"),
  createPlanEntry(17, "2025-04-27", "Thoraxschmerz", [], "Phase 1"),
  createPlanEntry(18, "2025-04-28", "Vorhofflimmern", [], "Phase 1"),
  createPlanEntry(19, "2025-04-29", "Akutes Nierenversagen", [], "Phase 1"),
  createPlanEntry(20, "2025-04-30", "Aneurysma der Aorta abdominalis", [], "Phase 1"),
  createPlanEntry(21, "2025-05-01", "(optional – Ruhetag/Wiederholung)", [], "Phase 1"),
  createPlanEntry(22, "2025-05-02", "Arterielle Hypertonie", [], "Phase 1"),
  createPlanEntry(23, "2025-05-03", "Bandscheibenvorfall", [], "Phase 1"),
  createPlanEntry(24, "2025-05-04", "Colitis ulcerosa", [], "Phase 1"),
  createPlanEntry(25, "2025-05-05", "COVID-19", [], "Phase 1"),
  createPlanEntry(26, "2025-05-06", "Delirium tremens", [], "Phase 1"),
  createPlanEntry(27, "2025-05-07", "Divertikulitis", [], "Phase 1"),
  createPlanEntry(28, "2025-05-08", "Endokarditis", [], "Phase 1"),
  createPlanEntry(29, "2025-05-09", "Gastroösophageale Refluxkrankheit", [], "Phase 1"),
  createPlanEntry(30, "2025-05-10", "Herzklappenerkrankungen", [], "Phase 1"),
  createPlanEntry(31, "2025-05-11", "Hirnblutung (intrazerebral)", [], "Phase 1"),
  createPlanEntry(32, "2025-05-12", "HIV/AIDS", [], "Phase 1"),
  createPlanEntry(33, "2025-05-13", "Hyperkaliämie", [], "Phase 1"),
  createPlanEntry(34, "2025-05-14", "Hypertensive Krise", [], "Phase 1"),
  createPlanEntry(35, "2025-05-15", "Hyperthyreose", [], "Phase 1"),
  createPlanEntry(36, "2025-05-16", "Hypothyreose", [], "Phase 1"),
  createPlanEntry(37, "2025-05-17", "Ikterus", [], "Phase 1"),
  createPlanEntry(38, "2025-05-18", "Kopfschmerzen", [], "Phase 1"),
  createPlanEntry(39, "2025-05-19", "Koronare Herzkrankheit", [], "Phase 1"),
  createPlanEntry(40, "2025-05-20", "Leberzirrhose", [], "Phase 1"),
  createPlanEntry(41, "2025-05-21", "Morbus Addison", [], "Phase 1"),
  createPlanEntry(42, "2025-05-22", "Morbus Crohn", [], "Phase 1"),
  createPlanEntry(43, "2025-05-23", "Myokarditis", [], "Phase 1"),
  createPlanEntry(44, "2025-05-24", "Perikarditis", [], "Phase 1"),
  createPlanEntry(45, "2025-05-25", "Periphere arterielle Verschlusskrankheit", [], "Phase 1"),
  createPlanEntry(46, "2025-05-26", "Polytrauma", [], "Phase 1"),
  createPlanEntry(47, "2025-05-27", "Pyelonephritis", [], "Phase 1"),
  createPlanEntry(48, "2025-05-28", "Schädel-Hirn-Trauma", [], "Phase 1"),
  createPlanEntry(49, "2025-05-29", "STIKO-Impfempfehlungen", [], "Phase 1"),
  createPlanEntry(50, "2025-05-30", "Subarachnoidalblutung", [], "Phase 1"),
  createPlanEntry(51, "2025-05-31", "Synkope", [], "Phase 1"),

  // Phase 2: Leichte Themen (23 тема)
  createPlanEntry(52, "2025-06-04", "Bronchialkarzinom", [], "Phase 2"),
  createPlanEntry(53, "2025-06-05", "Chronische Niereninsuffizienz", [], "Phase 2"),
  createPlanEntry(54, "2025-06-06", "Cushing-Syndrom", [], "Phase 2"),
  createPlanEntry(55, "2025-06-07", "Diabetes insipidus", [], "Phase 2"),
  createPlanEntry(56, "2025-06-08", "Gicht", [], "Phase 2"),
  createPlanEntry(57, "2025-06-09", "Kolorektales Karzinom", [], "Phase 2"),
  createPlanEntry(58, "2025-06-10", "Leistenhernie", [], "Phase 2"),
  createPlanEntry(59, "2025-06-11", "Leukämie (akut)", [], "Phase 2"),
  createPlanEntry(60, "2025-06-12", "Lymphome", [], "Phase 2"),
  createPlanEntry(61, "2025-06-13", "Malaria", [], "Phase 2"),
  createPlanEntry(62, "2025-06-14", "Mammakarzinom", [], "Phase 2"),
  createPlanEntry(63, "2025-06-15", "Morbus Parkinson", [], "Phase 2"),
  createPlanEntry(64, "2025-06-16", "Müdigkeit", [], "Phase 2"),
  createPlanEntry(65, "2025-06-17", "Multiple Sklerose", [], "Phase 2"),
  createPlanEntry(66, "2025-06-18", "Osteoporose", [], "Phase 2"),
  createPlanEntry(67, "2025-06-19", "Phäochromozytom", [], "Phase 2"),
  createPlanEntry(68, "2025-06-20", "Prostatakarzinom", [], "Phase 2"),
  createPlanEntry(69, "2025-06-21", "Rheumatoide Arthritis", [], "Phase 2"),
  createPlanEntry(70, "2025-06-22", "Rückenschmerzen", [], "Phase 2"),
  createPlanEntry(71, "2025-06-23", "Systemischer Lupus erythematodes", [], "Phase 2"),
  createPlanEntry(72, "2025-06-24", "Ulkuskrankheit", [], "Phase 2"),
  createPlanEntry(73, "2025-06-25", "Verbrennungen", [], "Phase 2"),
  createPlanEntry(74, "2025-06-26", "Vergiftungen", [], "Phase 2"),

  // Phase 3: Puffer/Wiederholungstage (8 Tage)
  createPlanEntry(75, "2025-06-27", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(76, "2025-06-28", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(77, "2025-06-29", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(78, "2025-06-30", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(79, "2025-07-01", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(80, "2025-07-02", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(81, "2025-07-03", "Wiederholung / Puffer", [], "Phase 3"),
  createPlanEntry(82, "2025-07-04", "Wiederholung / Puffer", [], "Phase 3"),

  // Phase 4: Intensive Revision (10 Tage)
  createPlanEntry(83, "2025-07-05", "Intensive Revision: Überprüfung schwieriger Themen", [], "Phase 4"),
  createPlanEntry(84, "2025-07-06", "Intensive Revision: Wiederholung schwieriger Themen", [], "Phase 4"),
  createPlanEntry(85, "2025-07-07", "Intensive Revision: Wiederholung leichter Themen", [], "Phase 4"),
  createPlanEntry(86, "2025-07-08", "Intensive Revision: Vertiefung und Zusammenfassungen", [], "Phase 4"),
  createPlanEntry(87, "2025-07-09", "Intensive Revision: Übungsfragen & Simulationen", [], "Phase 4"),
  createPlanEntry(88, "2025-07-10", "Intensive Revision: Fallbeispiele & Praxis", [], "Phase 4"),
  createPlanEntry(89, "2025-07-11", "Intensive Revision: Wiederholung & Korrekturen", [], "Phase 4"),
  createPlanEntry(90, "2025-07-12", "Intensive Revision: Zusammenfassung & Checkliste", [], "Phase 4"),
  createPlanEntry(91, "2025-07-13", "Intensive Revision: Letzte offene Punkte", [], "Phase 4"),
  createPlanEntry(92, "2025-07-14", "Intensive Revision: Prüfungssimulation / Entspannung", [], "Phase 4")
];

const StudyPlanPage = () => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    // Для тестування чистимо Local Storage – пізніше можна закоментувати цю стрічку
    localStorage.removeItem("studyPlan");
    const storedPlan = localStorage.getItem("studyPlan");
    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    } else {
      setPlan(planData);
      localStorage.setItem("studyPlan", JSON.stringify(planData));
    }
  }, []);

  const toggleCompleted = (id) => {
    const updatedPlan = plan.map(entry =>
      entry.id === id ? { ...entry, completed: !entry.completed } : entry
    );
    setPlan(updatedPlan);
    localStorage.setItem("studyPlan", JSON.stringify(updatedPlan));
  };

  return (
    <MainLayout>
      <div className={styles.studyPlanPage}>
        <h1>Plan der Prüfungsvorbereitung</h1>
        <p>
          Dieser Plan deckt den Zeitraum vom 11.04.2025 bis zur intensiven Revision (05.07.–14.07.2025) ab.
          Die Studienphase umfasst 85 Tage, in denen 74 priorisierte Themen (51 "schwierige" und 23 "leichte") 
          eingeplant sind – die übrigen Tage kannst du als Ruhetage oder zur Wiederholung nutzen.
          Klicke auf "Vollständig", um den Fortschritt zu markieren.
        </p>
        <div className={styles.planGrid}>
          {plan.map(entry => (
            <div key={entry.id} className={`${styles.planCard} ${entry.completed ? styles.completed : ""}`}>
              <div className={styles.cardDate}>{entry.date}</div>
              <div className={styles.cardTopics}>
                <div className={styles.mainTopic}>
                  {entry.topic} {entry.phase && <span>({entry.phase})</span>}
                </div>
                {entry.subtopics && entry.subtopics.length > 0 && (
                  <ul className={styles.subtopicsList}>
                    {entry.subtopics.map((sub, idx) => (
                      <li key={idx} className={styles.subtopicItem}>{sub}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.checkboxContainer}>
                <label>
                  <input type="checkbox" checked={entry.completed} onChange={() => toggleCompleted(entry.id)} />
                  <span>Vollständig</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.advice}>
          <strong>Hinweis:</strong> Dieser Plan umfasst alle priorisierten Themen. Änderungen an Themen, 
          Reihenfolge oder Unterpunkten kannst du im Quellcode (topics.js bzw. StudyPlanPage.jsx) anpassen.
        </p>
      </div>
    </MainLayout>
  );
};

export default StudyPlanPage;