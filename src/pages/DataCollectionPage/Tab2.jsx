import React from "react";
import styles from "./Tab2.module.scss";

// Імпорт іконок
import personalInformationIcon from "../../assets/iconFSPtable/personal-information.png";
import aktuelleAnamneseIcon from "../../assets/iconFSPtable/aktuelleanamnese.png";
import travelIcon from "../../assets/iconFSPtable/travel-icon.png";
import vegetativeAnamneseIcon from "../../assets/iconFSPtable/VegetativeAnamnese.png";
import vorerkrankungenIcon from "../../assets/iconFSPtable/vorerkrankungen.png";
import previousOperationsIcon from "../../assets/iconFSPtable/previous-operations.png";
import medicationsIcon from "../../assets/iconFSPtable/medications.png";
import allergiesIcon from "../../assets/iconFSPtable/allergies.png";
import noxenIcon from "../../assets/iconFSPtable/noxen.png";
import familienanamneseIcon from "../../assets/iconFSPtable/familienanamnese.png";
import sozialanamneseIcon from "../../assets/iconFSPtable/sozialanamnese.png";
import differentialDiagnosisIcon from "../../assets/iconFSPtable/differential-diagnosis.png";
import preliminaryDiagnosisIcon from "../../assets/iconFSPtable/preliminary-diagnosis.png";
import proposedProceduresIcon from "../../assets/iconFSPtable/proposed-procedures.png";

const categories = [
  {
    title: "Persönliche Daten",
    icon: personalInformationIcon,
    fields: [
      { key: "name", label: "Vorname des Patienten", type: "text" },
      { key: "surname", label: "Nachname des Patienten", type: "text" },
      { key: "birthdate", label: "Geburtsdatum", type: "text" }, // Format: TT.MM.JJJJ
      { key: "age", label: "Alter", type: "text" },
      { key: "height", label: "Größe", type: "text" },
      { key: "weight", label: "Gewicht", type: "text" },
      { key: "gender", label: "Geschlecht", type: "text" },
      { key: "hausarzt", label: "Hausarzt", type: "text" },
    ],
  },
  {
    title: "Besuchsgrund und Symptome",
    icon: aktuelleAnamneseIcon,
    fields: [
      { key: "visitReason", label: "Grund für den Besuch", type: "textarea" },
      { key: "painLocalization", label: "Schmerzlokalisation", type: "text" },
      { key: "timeCourse", label: "Zeitverlauf der Symptome", type: "text" },
      { key: "symptomDescription", label: "Beschreibung der Symptome", type: "textarea" },
      { key: "painRadiation", label: "Schmerzausstrahlung", type: "text" },
      { key: "painProgression", label: "Schmerzprogression", type: "text" },
      { key: "triggers", label: "Auslösende Faktoren", type: "text" },
      { key: "painIntensity", label: "Schmerzintensität", type: "text" },
      { key: "painRelief", label: "Maßnahmen zur Schmerzlinderung", type: "textarea" },
      { key: "painAggravation", label: "Faktoren der Schmerzverschlimmerung", type: "textarea" },
      { key: "previousMedicalCare", label: "Frühere medizinische Versorgung", type: "textarea" },
      { key: "functionalIssues", label: "Funktionelle Einschränkungen", type: "textarea" },
      { key: "additionalSymptoms", label: "Begleitende Symptome", type: "textarea" },
    ],
  },
  {
    title: "Impfungen und Reisen",
    icon: travelIcon,
    fields: [
      { key: "vaccination", label: "Informationen über Impfungen", type: "text" },
      { key: "travelHistory", label: "Reiseverlauf", type: "textarea" },
    ],
  },
  {
    title: "Allgemeiner Zustand und vegetative Symptome",
    icon: vegetativeAnamneseIcon,
    fields: [
      { key: "generalCondition", label: "Allgemeiner Zustand", type: "textarea" },
      { key: "appetite", label: "Appetit", type: "text" },
      { key: "weightLoss", label: "Gewichtsverlust", type: "text" },
      { key: "thirst", label: "Durstgefühl", type: "text" },
      { key: "nausea", label: "Übelkeit", type: "text" },
      { key: "vomiting", label: "Erbrechen", type: "text" },
      { key: "bowelMovement", label: "Stuhlgang", type: "text" },
      { key: "urination", label: "Wasserlassen", type: "text" },
      { key: "sweating", label: "Schwitzen", type: "text" },
      { key: "vertigo", label: "Schwindel", type: "text" },
      { key: "consciousness", label: "Bewusstseinszustand", type: "text" },
      { key: "palpitations", label: "Herzklopfen", type: "text" },
      { key: "shortnessOfBreath", label: "Atemnot", type: "text" },
      { key: "hotFlashes", label: "Hitzewallungen", type: "text" },
      { key: "coldFeeling", label: "Kältegefühl", type: "text" },
      { key: "sleep", label: "Schlafqualität", type: "text" },
      { key: "sexualHistory", label: "Sexuelle Anamnese", type: "textarea" },
      { key: "others", label: "Sonstiges", type: "textarea" },
      { key: "gynecologicalHistory", label: "Gynäkologische Anamnese", type: "textarea" },
    ],
  },
  {
    title: "Zusammenfassung",
    icon: proposedProceduresIcon,
    fields: [
      { key: "summary", label: "Zusammenfassung des Falls", type: "textarea" },
    ],
  },
  {
    title: "Krankengeschichte",
    icon: vorerkrankungenIcon,
    fields: [
      { key: "infectiousDiseases", label: "Infektionskrankheiten", type: "textarea" },
      { key: "chronicDiseases", label: "Chronische Erkrankungen", type: "textarea" },
      { key: "otherRelevantDiseases", label: "Weitere relevante Erkrankungen", type: "textarea" },
    ],
  },
  {
    title: "Operationen",
    icon: previousOperationsIcon,
    fields: [
      { key: "pastOperations", label: "Frühere Operationen", type: "textarea" },
      { key: "operationCourseComplications", label: "Verlauf und Komplikationen", type: "textarea" },
      { key: "hospitalStayDuration", label: "Dauer des Krankenhausaufenthalts", type: "text" },
    ],
  },
  {
    title: "Medikamente",
    icon: medicationsIcon,
    fields: [
      { key: "allgemeineMedikamenteneinnahme", label: "Regelmäßige Einnahme", type: "textarea" },
      { key: "detaillierteMedikamenteninformationen", label: "Details zu Medikamenten", type: "textarea" },
    ],
  },
  {
    title: "Allergien und Unverträglichkeiten",
    icon: allergiesIcon,
    fields: [
      { key: "specificMedicationAllergies", label: "Medikamentenallergien", type: "textarea" },
      { key: "allergicReactionSymptoms", label: "Symptome der Reaktionen", type: "textarea" },
      { key: "allergyTriggers", label: "Auslöser", type: "text" },
      { key: "householdAllergens", label: "Haushaltsallergene", type: "textarea" },
      { key: "specificIntolerances", label: "Unverträglichkeiten", type: "textarea" },
    ],
  },
  {
    title: "Schädliche Gewohnheiten",
    icon: noxenIcon,
    fields: [
      { key: "rauchverhalten", label: "Rauchverhalten", type: "text" },
      { key: "alkoholkonsum", label: "Alkoholkonsum", type: "text" },
      { key: "drogengebrauch", label: "Drogenkonsum", type: "text" },
    ],
  },
  {
    title: "Familiengeschichte",
    icon: familienanamneseIcon,
    fields: [
      { key: "geneticDiseases", label: "Genetische Erkrankungen", type: "textarea" },
      { key: "parents", label: "Gesundheitszustand der Eltern", type: "textarea" },
      { key: "siblings", label: "Gesundheitszustand der Geschwister", type: "textarea" },
    ],
  },
  {
    title: "Soziale Informationen",
    icon: sozialanamneseIcon,
    fields: [
      { key: "profession", label: "Beruf", type: "text" },
      { key: "maritalStatus", label: "Familienstand", type: "text" },
      { key: "children", label: "Kinder", type: "text" },
      { key: "livingConditions", label: "Wohnsituation", type: "text" },
      { key: "psychosomaticHistory", label: "Psychosomatische Beschwerden", type: "textarea" },
      { key: "physicalActivity", label: "Körperliche Aktivität", type: "text" },
      { key: "dietaryHabits", label: "Ernährungsgewohnheiten", type: "text" },
    ],
  },
  {
    title: "Differenzialdiagnosen",
    icon: differentialDiagnosisIcon,
    fields: [
      { key: "possibleDiagnoses", label: "Mögliche Diagnosen", type: "textarea" },
      { key: "differentiation", label: "Abgrenzung", type: "textarea" },
    ],
  },
  {
    title: "Verdachtsdiagnose",
    icon: preliminaryDiagnosisIcon,
    fields: [
      { key: "suspectedDiagnosis", label: "Vermutete Diagnose", type: "textarea" },
      { key: "justification", label: "Begründung der Diagnose", type: "textarea" },
    ],
  },
  {
    title: "Untersuchungen",
    icon: proposedProceduresIcon,
    fields: [
      { key: "physicalExamination", label: "Ergebnisse der körperlichen Untersuchung", type: "textarea" },
      { key: "laboratoryTests", label: "Ergebnisse der Laboruntersuchungen", type: "textarea" },
    ],
  },
];

const Tab2 = ({ localData, updateLocalData }) => {
  const handleInputChange = (fieldKey, value) => {
    updateLocalData({ [fieldKey]: value });
  };

  const handleAutoExpand = (e) => {
    const field = e.target;
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  return (
    <div className={styles.tabContainer}>
      {categories.map((category) => (
        <div key={category.title} className={styles.category}>
          <div className={styles.categoryHeader}>
            <img
              src={category.icon}
              alt={`${category.title} Icon`}
              className={styles.categoryIcon}
            />
            <h2 className={styles.categoryTitle}>{category.title}</h2>
          </div>
          {category.fields.map((field) => (
            <div key={field.key} className={styles.entryRow}>
              {field.type === "textarea" ? (
                <textarea
                  placeholder={field.label}
                  value={localData[field.key] || ""}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  onInput={handleAutoExpand}
                  className={`${styles.inputField} ${styles.autoExpand}`}
                  rows={1}
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.label}
                  value={localData[field.key] || ""}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  className={styles.inputField}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tab2;