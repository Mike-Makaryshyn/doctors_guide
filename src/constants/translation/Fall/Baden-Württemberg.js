const BRANDENBURG_DATA = [
    {
        id: 1, // Унікальний ідентифікатор
        name: "Іван", // Ім'я
        surname: "Іваненко", // Прізвище
        birthdate: "01.01.1980", // Дата народження
        age: "43", // Вік
        weight: "70 кг", // Вага
        height: "175 см", // Зріст
        gender: "Männlich",
        visitReason: "Біль у животі", // Причина відвідування
        painLocalization: "Епігастральна область", // Локалізація болю
        timeCourse: "2 дні", // Часовий перебіг
        symptomDescription: "Гострий біль, що посилюється після їжі", // Опис симптомів
        painRadiation: "Відсутнє", // Випромінювання болю
        painProgression: "Поступово погіршується", // Перебіг болю
        triggers: "Споживання жирної їжі", // Тригери
        painIntensity: "7/10", // Інтенсивність болю
        previousMedicalCare: "Звертався до терапевта 3 місяці тому", // Попереднє медичне обслуговування


        appetite: "Normal",
        weight: "70 kg",
        nausea: "Keine",
        vomiting: "Keine",
        bowelMovement: "Regelmäßig",
        urination: "Normal",
        vertigo: "Selten",
        consciousness: "Klar",
        sleep: "Gut",
        sexualHistory: "Keine Beschwerden",
        others: "Keine zusätzlichen Anmerkungen",
        gynecologicalHistory: "Nicht zutreffend",

        // Noxen
        rauchverhalten: "Курить 10 сигарет на день",
        alkoholkonsum: "Вживає алкоголь рідко, під час свят",
        drogengebrauch: "Не вживає наркотиків",

        // Medications
        gezielteMedikamentenfragen: "Приймає інсулін за рекомендацією лікаря",
        allgemeineMedikamenteneinnahme: "Регулярно вживає вітаміни та антигіпертензивні препарати",
        detaillierteMedikamenteninformationen: "Інсулін (Humalog) 10 ОД до їжі, Еналаприл 5 мг 2 рази на день",

        // AllergiesAndIntolerances
        specificMedicationAllergies: "Penicillin, Ibuprofen",
        allergicReactionSymptoms: "Hautausschlag, Atemnot",
        allergyTriggers: "Pollen, Staub",
        specificIntolerances: "Laktose, Gluten",

        // Familienanamnese
        hereditaryDiseases: "Цукровий діабет, гіпертонія",
        geneticConditions: "Синдром Марфана",
        familyMedicalHistory: "Отець хворів на серцево-судинні захворювання",

        // Sozialanamnese
        profession: "Lehrer",
        maritalStatus: "Verheiratet",
        children: "2 Kinder",
        livingConditions: "Eigentumswohnung",
        psychosomaticHistory: "Stressbedingte Kopfschmerzen",

        // PreviousOperations
        pastOperations: "Blinddarmoperation (2015), Knieoperation (2018)",
        operationCourseComplications: "Keine Komplikationen",
        hospitalStayDuration: "3 Tage",
        summary: "Der !!!!!!!!!64-jährige Patient stellt sich mit postprandialen krampfartigen Bauchschmerzen im linken Unterbauch vor, begleitet von Flatulenz und wechselnden Stuhlgewohnheiten (Diarrhö/Obstipation seit 5 Jahren). Vorgeschichte umfasst Hypertonie, Diabetes mellitus, Meningoenzephalitis sowie eine Koloskopie mit Polypektomie vor 5 Jahren. Raucher (30 PY), moderater Alkoholkonsum. Verdacht auf Divertikulitis, CT-Abdomen und Koloskopie werden zur Diagnosesicherung empfohlen." // Zusammenfassung
        
    },
    // Додаткові об'єкти для інших тестових даних (опціонально)
];
BRANDENBURG_DATA.regionName = "Baden-Württemberg";

export default BRANDENBURG_DATA;