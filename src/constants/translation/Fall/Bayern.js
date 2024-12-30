const BAYERN_DATA = [
    {
        id: 2, // Унікальний ідентифікатор
        name: "Анна", // Ім'я
        surname: "Мюллер", // Прізвище
        birthdate: "15.05.1985", // Дата народження
        age: "38", // Вік
        weight: "65 кг", // Вага
        height: "168 см", // Зріст
        gender: "Weiblich",
        visitReason: "Головний біль", // Причина відвідування
        painLocalization: "Область чола", // Локалізація болю
        timeCourse: "1 тиждень", // Часовий перебіг
        symptomDescription: "Тупий біль, іноді пульсуючий", // Опис симптомів
        painRadiation: "Відсутнє", // Випромінювання болю
        painProgression: "Не змінюється", // Перебіг болю
        triggers: "Недостатній сон", // Тригери
        painIntensity: "5/10", // Інтенсивність болю
        previousMedicalCare: "Не зверталась", // Попереднє медичне обслуговування

        appetite: "Vermindert",
        weight: "65 kg",
        nausea: "Selten",
        vomiting: "Keine",
        bowelMovement: "Regelmäßig",
        urination: "Normal",
        vertigo: "Gelegentlich",
        consciousness: "Klar",
        sleep: "Schlecht",
        sexualHistory: "Keine Beschwerden",
        others: "Beruflicher Stress",
        gynecologicalHistory: "Regelmäßig, keine Beschwerden",

        // Noxen
        rauchverhalten: "Не курить",
        alkoholkonsum: "Вживає алкоголь зрідка",
        drogengebrauch: "Не вживає наркотиків",

        // Medications
        gezielteMedikamentenfragen: "Не приймає специфічних ліків",
        allgemeineMedikamenteneinnahme: "Використовує знеболювальні при потребі",
        detaillierteMedikamenteninformationen: "Ібупрофен 200 мг при болю",

        // AllergiesAndIntolerances
        specificMedicationAllergies: "Aspirin",
        allergicReactionSymptoms: "Кропив'янка",
        allergyTriggers: "Hausstaub",
        specificIntolerances: "Keine",

        // Familienanamnese
        hereditaryDiseases: "Артеріальна гіпертензія",
        geneticConditions: "Keine",
        familyMedicalHistory: "Мати страждає від мігрені",

        // Sozialanamnese
        profession: "Bürokauffrau",
        maritalStatus: "Ledig",
        children: "Keine",
        livingConditions: "Wohnung zur Miete",
        psychosomaticHistory: "Stress durch Arbeit",

        // PreviousOperations
        pastOperations: "Keine",
        operationCourseComplications: "Nicht zutreffend",
        hospitalStayDuration: "Nicht zutreffend",
    },
    // Додаткові об'єкти для інших тестових даних (опціонально)
];

BAYERN_DATA.regionName = "Bayern";
export default BAYERN_DATA;
