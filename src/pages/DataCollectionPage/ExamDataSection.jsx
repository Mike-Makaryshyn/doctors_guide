import React, { useState, useEffect, forwardRef } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./ExamDataSection.module.scss";

const ExamDataSection = forwardRef((props, ref) => {
  const initialData = {
    name: "",
    surname: "",
    birthdate: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    visitReason: "",
    painLocalization: "",
    timeCourse: "",
    symptomDescription: "",
    painRadiation: "",
    painProgression: "",
    triggers: "",
    painIntensity: "",
    previousMedicalCare: "",
    appetite: "",
    weightverlust: "",
    nausea: "",
    vomiting: "",
    bowelMovement: "",
    urination: "",
    vertigo: "",
    consciousness: "",
    sleep: "",
    sexualHistory: "",
    others: "",
    gynecologicalHistory: "",
    medicalHistoryIntroduction: "",
    chronicDiseases: "",
    otherRelevantDiseases: "",
    pastOperations: "",
    operationCourseComplications: "",
    hospitalStayDuration: "",
    gezielteMedikamentenfragen: "",
    allgemeineMedikamenteneinnahme: "",
    detaillierteMedikamenteninformationen: "",
    specificMedicationAllergies: "",
    allergicReactionSymptoms: "",
    allergyTriggers: "",
    specificIntolerances: "",
    rauchverhalten: "",
    alkoholkonsum: "",
    drogengebrauch: "",
    parents: "",
    siblings: "",
    profession: "",
    maritalStatus: "",
    children: "",
    livingConditions: "",
    psychosomaticHistory: "",
    suspectedDiagnosis: "",
    justification: "",
    physicalExamination: "",
    laboratoryTests: "",
    instrumentalExamination: "",
    differentiale: "",
    differentiation: "",
  };

  const fieldSections = [
    {
      title: "Персональні дані",
      fields: ["name", "surname", "birthdate", "age", "height", "weight", "gender"],
    },
    {
      title: "Актуальний анамнез",
      fields: [
        "visitReason",
        "painLocalization",
        "timeCourse",
        "symptomDescription",
        "painRadiation",
        "painProgression",
        "triggers",
        "painIntensity",
        "previousMedicalCare",
      ],
    },
    {
      title: "Вегетативний анамнез",
      fields: [
        "appetite",
        "weightverlust",
        "nausea",
        "vomiting",
        "bowelMovement",
        "urination",
        "vertigo",
        "consciousness",
        "sleep",
        "sexualHistory",
        "others",
        "gynecologicalHistory",
      ],
    },
    {
      title: "Попередні захворювання",
      fields: [
        "medicalHistoryIntroduction",
        "chronicDiseases",
        "otherRelevantDiseases",
      ],
    },
    {
      title: "Попередні операції",
      fields: [
        "pastOperations",
        "operationCourseComplications",
        "hospitalStayDuration",
      ],
    },
    {
      title: "Медикаменти",
      fields: [
        "gezielteMedikamentenfragen",
        "allgemeineMedikamenteneinnahme",
        "detaillierteMedikamenteninformationen",
      ],
    },
    {
      title: "Алергії та непереносимості",
      fields: [
        "specificMedicationAllergies",
        "allergicReactionSymptoms",
        "allergyTriggers",
        "specificIntolerances",
      ],
    },
    {
      title: "Noxen",
      fields: ["rauchverhalten", "alkoholkonsum", "drogengebrauch"],
    },
    {
      title: "Relevante Familienerkrankungen",
      fields: ["parents", "siblings"],
    },
    {
      title: "Соціальний анамнез",
      fields: [
        "profession",
        "maritalStatus",
        "children",
        "livingConditions",
        "psychosomaticHistory",
      ],
    },
    {
      title: "Попередній діагноз",
      fields: ["suspectedDiagnosis", "justification"],
    },
    {
      title: "Запропоновані процедури",
      fields: ["physicalExamination", "laboratoryTests", "instrumentalExamination"],
    },
    {
      title: "Диференційний діагноз",
      fields: ["differentiale", "differentiation"],
    },
  ];

  const [data, setData] = useState(initialData);

  /* Обробник зміни в полях вводу */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  /* Завантаження даних з Firebase */
  const fetchExamData = async () => {
    const docRef = doc(db, "sections", "examData");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData(snapshot.data());
    }
  };

  /* Збереження даних у Firebase */
  const saveData = async () => {
    const docRef = doc(db, "sections", "examData");
    // Якщо всі поля порожні — видаляємо документ
    if (Object.values(data).every((field) => !field.trim())) {
      await deleteDoc(docRef);
    } else {
      await setDoc(docRef, data);
    }
  };

  useEffect(() => {
    fetchExamData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useImperativeHandle(ref, () => ({ saveData }));

  return (
    <div className={styles.sectionContainer} ref={ref}>
      <h2 className={styles.subheader}>Exam Data</h2>
      {/* Рендер кожного блоку полів */}
      {fieldSections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>

          {/* Рендер кожного поля вводу */}
          {section.fields.map((key) => (
            <div key={key} className={styles.entryRow}>
              {/*
                Якщо хочете позбутися лейблів, можна просто НЕ рендерити <label>:
                <input
                  type="text"
                  name={key}
                  placeholder={key} // або свій переклад
                  ...
                />
              */}
              <label className={styles.label}>{key}:</label>
              <input
                type="text"
                name={key}
                value={data[key]}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

export default ExamDataSection;