const HESSEN_DATA = [
  {
    id: 7,
    fullName: "V.a. Divertikulitis",
    name: "Frederik",
    surname: "zu Äusigler",
    birthdate: "30.05.1958",
    age: "64",
    height: "Unbekannt",
    weight: "Unbekannt",
    gender: "Männlich",

    visitReason:
      "Krampfartige Abdominalschmerzen im Bereich der Regio hypogastrica links, postprandial",
    painLocalization: "Regio hypogastrica links",
    timeCourse: "Seit gestern",
    symptomDescription:
      "Krampfartige Schmerzen nach dem Essen, begleitet von lauten Darmgeräuschen und Flatulenz.",
    painRadiation: "Keine",
    painProgression: "Besserung heute, keine Schmerzen mehr.",
    triggers: "",
    painIntensity: "6-8/10",
    painRelief: "Keine spezifische Linderung angegeben.",
    painAggravation: "Keine spezifische Verschlimmerung angegeben.",
    previousMedicalCare:
      "Koloskopie vor 5 Jahren mit Polypektomie (gutartig), keine Nachsorge.",
    functionalIssues: "Wechsel zwischen Diarrhö und Obstipation seit 5 Jahren.",
    additionalSymptoms: "Lautes Darmgeräusch, Flatulenz.",

    vaccination: "Vollständig geimpft",
    travelHistory: "",

    generalCondition:
      "Er sieht gesund aus, aber hat eine Reihe chronischer Erkrankungen.",
    appetite: "Unverändert",
    weightLoss: "Gewichtsabnahme von 5 kg innerhalb von 7 Wochen.",
    thirst: "",
    nausea: "",
    vomiting: "",
    bowelMovement: "Wechsel zwischen Diarrhö und Obstipation seit 5 Jahren.",
    urination: "Keine Angaben",
    sweating: "Nachtschweiß",
    vertigo: "Kein Schwindel",
    consciousness: "Wach und orientiert",
    palpitations: "Kein Herzklopfen",
    shortnessOfBreath: "Keine Atemnot",
    hotFlashes: "Keine Hitzewallungen",
    coldFeeling: "Keine Kältegefühl",
    sleep: "Insomnie aufgrund von Depression und Stress",
    sexualHistory: "Keine Angaben",
    others: "Stressbedingte Beschwerden",
    gynecologicalHistory: "Nicht relevant",

    summary:
      "Herr zu Äusigler, Sie haben seit gestern krampfartige Bauchschmerzen im linken Unterbauch nach dem Essen bemerkt. Zudem berichten Sie über einen Wechsel zwischen Durchfall und Verstopfung in den letzten 5 Jahren. Weitere Beschwerden umfassen Schlafstörungen aufgrund von Depression, Nachtschweiß und einen signifikanten Gewichtsverlust von 5 kg innerhalb von 7 Wochen. In Ihrer Familienanamnese liegt ein Dickdarmkrebs bei Ihrem Vater vor. Haben Sie noch weitere Symptome oder Beschwerden, die wir bisher nicht besprochen haben?",
    infectiousDiseases: "",
    chronicDiseases:
      "Arterielle Hypertonie (aHT), Diabetes Mellitus (DM), Lumbago",
    otherRelevantDiseases: "Meningoenzephalitis vor 8 Jahren",

    pastOperations:
      "Appendektomie als Kind, Hernie inguinalis vor 20 Jahren (laparoskopisch)",
    operationCourseComplications: "",
    hospitalStayDuration: "Keine Krankenhausaufenthalte angegeben",

    allgemeineMedikamenteneinnahme: "",
    detaillierteMedikamenteninformationen:
      "Ramipril 5mg 1x täglich, Amlodipin 5mg 1x täglich, Celebrex 100mg bei Bedarf, Jardiance 10mg täglich",

    specificMedicationAllergies: "Amoxicillin mit Exanthem",
    allergicReactionSymptoms: "Exanthem",
    allergyTriggers: "Amoxicillin",
    householdAllergens: "",
    specificIntolerances: "Keine weiteren Unverträglichkeiten",

    rauchverhalten:
      "Aktiver Raucher mit 30 PY (3/4 Schachtel täglich seit 16 Jahren)",
    alkoholkonsum: "Alkoholkonsum von 1/2 Liter Apfelwein täglich",
    drogengebrauch: "",

    geneticDiseases: "Keine genetischen Erkrankungen angegeben",
    parents:
      "Vater starb an Dickdarmkrebs (75 Jahre), Mutter lebt mit Demenz im Pflegeheim",
    siblings: "",

    profession: "Gärtnerarbeiter",
    maritalStatus: "Verheiratet",
    children:
      "3 Kinder, davon ein Sohn mit Depression und zwei gesunde Töchter",
    livingConditions: "Lebt mit seiner Frau",
    psychosomaticHistory: "Leidet unter Stress aufgrund der Arbeit",
    physicalActivity: "",
    dietaryHabits: "Keine speziellen Ernährungsgewohnheiten angegeben",

    possibleDiagnoses:
      "Divertikulitis, Volvulus, Colitis ulcerosa, Morbus Crohn",
    differentiation: "Appendizitis ausgeschlossen aufgrund der Anamnese",

    suspectedDiagnosis: "Divertikulitis",
    justification:
      "Die Symptome, wie postprandiale krampfartige Bauchschmerzen, Flatulenz und Darmgeräusche, passen zu einer Divertikulitis. Weitere Differenzialdiagnosen werden durch zusätzliche Tests überprüft.",

    physicalExamination:
      "Palpation zeigt Abwehrspannung, Darmgeräusche im Sinne eines Ileus.",
    laboratoryTests:
      "Blutentnahme für BB, CRP, BSG, Gerinnungsparameter, Tumormarker CEA, 19-9",
    instrumentalExamination: "Sono-Abdomen, CT-Abdomen, Koloskopie",

    examinerQuestions: `
"Was können wir bei einem CT-Abdomen beurteilen?  
**Antwort:** Beim CT-Abdomen können Entzündungszeichen, Volvulus, Divertikel und andere Strukturanomalien beurteilt werden.",
        
"Was sind die Risikofaktoren für Divertikulitis?  
**Antwort:** Alter, Rauchen, Bewegungsmangel, Ernährung mit wenig Ballaststoffen und familiäre Häufung.",
        
"Was ist Radiotherapie?  
**Antwort:** Radiotherapie ist eine Behandlung mit ionisierender Strahlung, um Tumoren zu verkleinern oder deren Wachstum zu verhindern."
      `,
      patientQuestions: "Gärtnerarbeiter",
  },

  {
    id: 30, // Einzigartige Identifikationsnummer

    fullName: "V.a. Bronchialkarzinom",
    name: "Maria",
    surname: "Kaiser",
    birthdate: "23.09.1968",
    age: "54",
    height: "170 cm",
    weight: "65 kg",
    gender: "Weiblich",

    visitReason:
      "Starker trockener Husten mit Luftnot nach Erkältung seit 3 Monaten",
    painLocalization: "Keine spezifische Schmerzlokalisation",
    timeCourse: "Seit 3 Monaten",
    symptomDescription:
      "Starker, trockener Husten mit Luftnot, nächtliche Schübe, gelegentlich gelblicher Auswurf.",
    painRadiation: "Keine",
    painProgression: "Schübe nachts",
    triggers: "Kalte Luft verstärkt die Beschwerden",
    painIntensity: "Nicht angegeben",
    painRelief: "Körperliche Belastung und Anstrengung lindern die Beschwerden",
    painAggravation: "Kalte Luft",
    previousMedicalCare: "Hustensaft, aber keine Linderung",
    functionalIssues: "Müdigkeit",
    additionalSymptoms:
      "Appetitlosigkeit, Gewichtsverlust (8 kg innerhalb 2 Monaten), Schlafstörungen aufgrund der Beschwerden",

    vaccination: "Geimpft",
    travelHistory: "Keine relevanten Reisen angegeben",

    generalCondition: "Allgemein erschöpft aufgrund der Symptome.",
    appetite: "Appetitlosigkeit",
    weightLoss: "8 kg innerhalb 2 Monaten",
    thirst: "Keine Angaben",
    nausea: "Keine Übelkeit",
    vomiting: "Kein Erbrechen",
    bowelMovement: "Keine Angaben",
    urination: "Keine Angaben",
    sweating: "Keine Angaben",
    vertigo: "Keine Angaben",
    consciousness: "Wach und orientiert",
    palpitations: "Kein Herzklopfen",
    shortnessOfBreath: "Luftnot",
    hotFlashes: "Keine Hitzewallungen",
    coldFeeling: "Keine Kältegefühl",
    sleep: "Schlafstörungen aufgrund der Beschwerden",
    sexualHistory: "Keine Angaben",
    others: "Müdigkeit",
    gynecologicalHistory: "Nicht relevant",

    summary:
      "Frau Kaiser, Sie haben seit 3 Monaten einen starken, trockenen Husten, der besonders nachts in Schüben auftritt. Sie berichten über Atemnot, die durch kalte Luft verstärkt wird, und gelegentlich gelblichen Auswurf. Außerdem leiden Sie unter Appetitlosigkeit, Müdigkeit, Gewichtsverlust (8 kg innerhalb von 2 Monaten) und Schlafstörungen aufgrund der Beschwerden. Haben Sie noch weitere Symptome oder Beschwerden, die wir bisher nicht besprochen haben?",

    infectiousDiseases: "Keine aktuellen Infektionen",
    chronicDiseases: "Krampfadern in beiden Beinen seit 3 Jahren",
    otherRelevantDiseases: "Alzheimer bei Mutter, Dawn-Syndrom bei Schwester",

    pastOperations: "Appendektomie und Tonsillektomie als Kind",
    operationCourseComplications: "Keine Komplikationen angegeben",
    hospitalStayDuration: "Keine Krankenhausaufenthalte angegeben",

    allgemeineMedikamenteneinnahme: "Hustensaft, Schlafmittel",
    detaillierteMedikamenteninformationen:
      "Hustensaft, gelegentlich Schlafmittel",

    specificMedicationAllergies: "Nickel, Haarfärbemittel",
    allergicReactionSymptoms: "Hautausschlag",
    allergyTriggers: "Nickel, Haarfärbemittel",
    householdAllergens: "Keine Angaben",
    specificIntolerances: "Keine weiteren Unverträglichkeiten",

    rauchverhalten: "Aktive Raucherin seit 30 Jahren (30 Zigaretten täglich)",
    alkoholkonsum: "Trinkt Schnaps einmal pro Woche",
    drogengebrauch: "Drogenkonsum wurde verneint",

    geneticDiseases:
      "Herzinfarkt bei Vater, Alzheimer bei Mutter, Dawn-Syndrom bei Schwester",
    parents: "Vater starb an Herzinfarkt, Mutter lebt mit Alzheimer",
    siblings: "Eine Schwester mit Dawn-Syndrom",

    profession: "Ehemals Friseurin, jetzt im Kneipenbereich tätig",
    maritalStatus: "Geschieden",
    children: "Zwei Kinder (Zwillinge), ein Enkel",
    livingConditions: "Lebt mit ihrem Freund zusammen",
    psychosomaticHistory: "Leidet unter Stress aufgrund der Beschwerden",
    physicalActivity: "Keine Angaben",
    dietaryHabits: "Keine speziellen Ernährungsgewohnheiten angegeben",

    possibleDiagnoses: "COPD, Belastungsasthma, Lungenembolie",
    differentiation:
      "Bronchialkarzinom als Verdachtsdiagnose, COPD, Asthma und Lungenembolie als Differenzialdiagnosen",

    suspectedDiagnosis: "Bronchialkarzinom",
    justification:
      "Die Symptome wie trockener Husten, Luftnot, Gewichtsverlust und Müdigkeit deuten auf ein Bronchialkarzinom hin. Weitere Tests sind erforderlich, um diese Diagnose zu bestätigen.",

    physicalExamination: "Keine spezifischen Befunde angegeben",
    laboratoryTests:
      "Bluttests zur Überprüfung von Entzündungsmarkern, Tumormarkern",
    instrumentalExamination:
      "Röntgen-Thorax, CT-Brust, Bronchoskopie zur Abklärung des Verdachts auf Bronchialkarzinom",

    examinerQuestions: `
"Was können wir bei einem CT-Brust beurteilen?  
**Antwort:** Beim CT können Tumoren, Lymphknotenvergrößerungen und Entzündungen in der Lunge beurteilt werden.",
                      
"Was sind die Risikofaktoren für ein Bronchialkarzinom?  
**Antwort:** Rauchen, berufliche Exposition gegenüber Schadstoffen, familiäre Vorgeschichte von Lungenkrebs.",
                      
 "Was ist eine Lungenembolie?  
**Antwort:** Eine Lungenembolie tritt auf, wenn ein Blutgerinnsel die Lungenarterien blockiert, was zu Atemnot und Schmerzen führt." `,
  },

  {
    id: 50, // Einzigartige Identifikationsnummer

    fullName: "V.a. Hirntumor",
    name: "Uta",
    surname: "Kästner",
    birthdate: "Unbekannt",
    age: "56",
    height: "178 cm",
    weight: "96 kg",
    gender: "Weiblich",

    visitReason:
      "Seit 4 Tagen bestehende, progressive, drückende und diffuse Cephalgie",
    painLocalization: "Keine spezifische Schmerzlokalisation",
    timeCourse: "Seit 4 Tagen",
    symptomDescription:
      "Plötzlich aufgetretene Cephalgie, verstärkt durch Liegen und nach vorne Beugen, begleitet von Vertigo und morgendlicher Emesis.",
    painRadiation: "Keine",
    painProgression: "Progredient",
    triggers: "Liegen, nach vorne Beugen",
    painIntensity: "8/10",
    painRelief: "Ibuprofen 800 mg ohne Wirkung",
    painAggravation: "Liegen, nach vorne Beugen, Emesis",
    previousMedicalCare: "Keine spezifischen Angaben",
    functionalIssues: "Vergesslichkeit",
    additionalSymptoms: "Vertigo, morgendliche Emesis",

    vaccination: "Komplett",
    travelHistory: "Keine relevanten Reisen angegeben",

    generalCondition: "Allgemein schmerzbedingt beeinträchtigt",
    appetite: "Keine Angaben",
    weightLoss: "Keine Angaben",
    thirst: "Keine Angaben",
    nausea: "Vorhanden",
    vomiting: "Morgens seit einer Woche",
    bowelMovement: "Keine Angaben",
    urination: "Keine Angaben",
    sweating: "Keine Angaben",
    vertigo: "Vorhanden",
    consciousness: "Wach und orientiert",
    palpitations: "Keine Angaben",
    shortnessOfBreath: "Keine Atemnot",
    hotFlashes: "Keine Hitzewallungen",
    coldFeeling: "Keine Kältegefühl",
    sleep: "Schmerzbedingte Insomnie",
    sexualHistory: "Keine Angaben",
    others: "Vergesslichkeit",
    gynecologicalHistory: "Nicht relevant",

    summary:
      "Frau Kästner, Sie haben seit 4 Tagen eine progressive, drückende und diffuse Cephalgie mit einer Schmerzintensität von 8/10. Die Schmerzen verstärken sich durch Liegen und nach vorne Beugen. Sie berichten über morgendliche Emesis, Vertigo und Vergesslichkeit. Haben Sie noch weitere Symptome oder Beschwerden, die wir bisher nicht besprochen haben?",

    infectiousDiseases: "Keine aktuellen Infektionen",
    chronicDiseases: "Arterielle Hypertonie, Hypercholesterinämie",
    otherRelevantDiseases: "Keine weiteren Erkrankungen",

    pastOperations:
      "Tonsillektomie und Polypektomie mit 13 Jahren, Cholezystektomie vor 5 Jahren",
    operationCourseComplications: "Keine Komplikationen",
    hospitalStayDuration: "Keine Angaben",

    allgemeineMedikamenteneinnahme: "Ramipril, Metoprolol, HCT, Atorvastatin",
    detaillierteMedikamenteninformationen:
      "Ramipril 7,5 mg 1-0-0, Metoprolol 100 mg, HCT 25 mg 1-0-0, Atorvastatin 0-0-1",

    specificMedicationAllergies: "Penicillin (Pruritus, Exanthem)",
    allergicReactionSymptoms: "Pruritus, Exanthem",
    allergyTriggers: "Penicillin",
    householdAllergens: "Haustaube (Rhinokonjunktivitis)",
    specificIntolerances: "Keine weiteren Unverträglichkeiten",

    rauchverhalten: "Nikotinabusus, eine Zigarre täglich seit 15 Jahren",
    alkoholkonsum: "Zwei bis drei Gläser Whisky pro Woche",
    drogengebrauch: "Drogenkonsum wurde verneint",

    geneticDiseases:
      "Hypercholesterinämie bei Vater, Ovarialkarzinom bei Mutter",
    parents:
      "Vater lebt mit Hypercholesterinämie, Mutter starb an Ovarialkarzinom",
    siblings: "Keine Geschwister",

    profession: "Finanzbeamtin",
    maritalStatus: "Verheiratet",
    children: "Zwei gesunde Söhne",
    livingConditions: "Lebt mit ihrem Ehemann",
    psychosomaticHistory: "Schmerzbedingte Insomnie",
    physicalActivity: "Keine Angaben",
    dietaryHabits: "Keine speziellen Ernährungsgewohnheiten",

    possibleDiagnoses:
      "Spannungskopfschmerzen, Apoplex, Migräne, Hydrocephalus",
    differentiation:
      "Hirntumor als Verdachtsdiagnose, andere Differenzialdiagnosen werden durch weitere Tests ausgeschlossen",

    suspectedDiagnosis: "Hirntumor",
    justification:
      "Die anhaltenden und progredienten Cephalgien, verbunden mit morgendlicher Emesis und Vertigo, deuten auf einen möglichen Hirntumor hin. Weitere Untersuchungen erforderlich.",

    physicalExamination: "Keine spezifischen Befunde angegeben",
    laboratoryTests:
      "Blutuntersuchungen zur Überprüfung von Entzündungsmarkern",
    instrumentalExamination: "CCT, CMRT mit Kontrastmittel",

    examinerQuestions: `
"Welche Ursachen können für progressive Cephalgien verantwortlich sein?  
**Antwort:** Hirntumor, Spannungskopfschmerzen, Migräne, Hydrocephalus, Apoplex.",
                  
"Welche Untersuchung würden Sie bei Verdacht auf einen Hirntumor durchführen?  
**Antwort:** CCT, CMRT mit Kontrastmittel, neurologische Untersuchung.",
                  
"Welche Maßnahmen ergreifen Sie bei einem erhöhten Hirndruck?  
**Antwort:** Analgesie, Hirndrucksenkung, eventuell operative Behandlung."`,
  },
  {
    id: 100, // Einzigartige Identifikationsnummer

    fullName: "Verdacht auf tiefe Venenthrombose (TVT)",
    name: "Elisabeth",
    surname: "Mueller",
    birthdate: "Unbekannt",
    age: "62",
    height: "Unbekannt",
    weight: "Unbekannt",
    gender: "Weiblich",

    visitReason: "Dumpfer Schmerz im linken Unterschenkel seit gestern Abend",
    painLocalization: "Linker Unterschenkel",
    timeCourse: "Seit gestern Abend",
    symptomDescription:
      "Dumpfer Schmerz, begleitet von Erythem und Ödem, ohne Ausstrahlung.",
    painRadiation: "Keine",
    painProgression: "Plötzlich aufgetreten",
    triggers: "Keine spezifischen Auslöser",
    painIntensity: "6/10 auf der NRS",
    painRelief: "Ibuprofen 400 mg ohne Wirkung",
    painAggravation: "Keine spezifischen Faktoren",
    previousMedicalCare: "Keine spezifischen Maßnahmen vor der Konsultation",
    functionalIssues: "Keine Angaben",
    additionalSymptoms: "Erythem, Ödem im linken Unterschenkel",

    vaccination: "4-mal gegen Corona, Kinderkrankheiten",
    travelHistory:
      "Rückkehr aus den Kanarischen Inseln nach einem 3-wöchigen Urlaub, Flugdauer 4,5 Stunden",

    generalCondition:
      "Allgemein unauffällig bis auf Schmerzen im Unterschenkel",
    appetite: "Keine Angaben",
    weightLoss: "Keine Angaben",
    thirst: "Keine Angaben",
    nausea: "Keine Übelkeit",
    vomiting: "Kein Erbrechen",
    bowelMovement: "Keine Angaben",
    urination: "Keine Angaben",
    sweating: "Keine Angaben",
    vertigo: "Keine Angaben",
    consciousness: "Wach und orientiert",
    palpitations: "Keine Angaben",
    shortnessOfBreath: "Keine Dyspnoe",
    hotFlashes: "Keine Hitzewallungen",
    coldFeeling: "Keine Kältegefühl",
    sleep: "Keine Angaben",
    sexualHistory: "Keine Angaben",
    others: "Gewichtszunahme um 2-3 kg im Urlaub (viel Paella)",
    gynecologicalHistory: "Nicht relevant",

    hausarzt: "Herr Dr. Schneider",

    summary:
      "Frau Mueller, Sie klagen über dumpfen Schmerz im linken Unterschenkel, begleitet von Erythem und Ödem. Die Beschwerden bestehen seit gestern Abend und wurden auf der NRS mit 6/10 bewertet. Sie haben kürzlich einen 4,5-stündigen Flug nach einem 3-wöchigen Urlaub auf den Kanarischen Inseln hinter sich. Haben Sie noch weitere Symptome oder Beschwerden, die wir bisher nicht besprochen haben?",

    infectiousDiseases: "Keine aktuellen Infektionen",
    chronicDiseases: "Arterielle Hypertonie, Lendenwirbelsäulendiskusprolaps",
    otherRelevantDiseases: "Keine weiteren Erkrankungen",

    pastOperations:
      "Appendektomie als Kind, laparoskopische Hernienoperation vor 4 Jahren",
    operationCourseComplications: "Keine Komplikationen",
    hospitalStayDuration: "Keine Angaben",

    allgemeineMedikamenteneinnahme: "Ramipril, Magnesium, Ibuprofen",
    detaillierteMedikamenteninformationen:
      "Ramipril 1-0-0, Magnesium 0-0-1, Ibuprofen bei Bedarf",

    specificMedicationAllergies:
      "Milben (Pruritus, Exanthem), Nickel (Rhinokonjunktivitis)",
    allergicReactionSymptoms: "Pruritus, Exanthem",
    allergyTriggers: "Milben, Nickel",
    householdAllergens: "Keine weiteren Angaben",
    specificIntolerances: "Keine weiteren Unverträglichkeiten",

    rauchverhalten: "45 PY, eine Schachtel pro Tag seit 16 LJ",
    alkoholkonsum: "Ein Glas Wein gelegentlich, viel Sangria im Urlaub",
    drogengebrauch: "Drogenkonsum wurde verneint",

    geneticDiseases:
      "Vater: Chronische Lungenerkrankung (Verdacht auf COPD), Mutter: Herzerkrankung und Depression",
    parents:
      "Vater verstarb mit 75 LJ an chronischer Lungenerkrankung, Mutter mit 80 LJ an Herzerkrankung",
    siblings: "Keine Geschwister",
    children: "Zwei gesunde erwachsene Kinder",

    profession: "Klempnerin, arbeitet derzeit im Büro",
    maritalStatus: "Geschieden",
    livingConditions: "Wohnt allein",
    psychosomaticHistory: "Kein Stress",
    physicalActivity: "Keine Angaben",
    dietaryHabits: "Keine speziellen Ernährungsgewohnheiten",

    possibleDiagnoses: "Akuter arterieller Verschluss, Erysipel, Phlegmone",
    differentiation:
      "TVT als Verdachtsdiagnose, weitere Differenzialdiagnosen werden durch diagnostische Maßnahmen ausgeschlossen",

    suspectedDiagnosis: "Tiefe Venenthrombose (TVT)",
    justification:
      "Die Symptome, wie Schmerz, Erythem und Ödem im linken Unterschenkel, verbunden mit einer längeren Immobilität während eines Flugs, deuten auf eine TVT hin. Weitere Tests sind erforderlich, um die Diagnose zu bestätigen.",

    physicalExamination:
      "Vergleich der Beine, periphere Durchblutung, Puls, Sensibilität",
    laboratoryTests: "D-Dimere, CRP, BSG, BB-Leukozyten, Gerinnungsparameter",
    instrumentalExamination:
      "Farbduplex-Kompressionssonographie der Beinvenen, Angio-CT oder -MRT",

    examinerQuestions: `
"Warum arbeitet sie im Büro, obwohl sie Klempnerin ist?  
**Antwort:** Sie hat ihre Tätigkeit geändert und arbeitet jetzt im Büro."
                
"Wie lange war sie im Urlaub?  
**Antwort:** Drei Wochen."
                
"Wann ist sie zurückgekehrt?  
**Antwort:** Gestern Abend."
                
"Welche Risikofaktoren hat sie?  
**Antwort:** Lange Flugreise, Nikotinabusus, weibliches Geschlecht, Adipositas."
                
"Welche Diagnose vermuten Sie?  
**Antwort:** Verdacht auf tiefe Venenthrombose (TVT)."
                
"Warum?  
**Antwort:** Aufgrund von dumpfen Schmerzen, Erythem und Ödem im linken Unterschenkel nach langer Immobilität während des Flugs."
                
"Welche diagnostischen Maßnahmen sind erforderlich?  
**Antwort:** D-Dimere, Farbduplex-Kompressionssonographie, Angio-CT/MRT."
                
"Sind klinische Symptome und erhöhte D-Dimere ausreichend für die Diagnose?  
**Antwort:** Nein, eine instrumentelle Untersuchung wie die Farbduplex-Kompressionssonographie ist erforderlich."
                
"Welche apparative Untersuchung ist wichtig?  
**Antwort:** Farbduplex-Kompressionssonographie der Beinvenen."
                
"Was empfehlen Sie?  
**Antwort:** Stationäre Aufnahme, Hochlagerung der Beine, Antikoagulation, Kompressionsstrümpfe."
                
"Welche Therapie schlagen Sie vor?  
**Antwort:** Antikoagulation mit Heparin, gegebenenfalls Übergang auf Cumarin, und Kompressionstherapie."
                `,
  },
  // Додаткові об'єкти для інших тестових даних (опціонально)
];
HESSEN_DATA.regionName = "Hessen";
export default HESSEN_DATA;
