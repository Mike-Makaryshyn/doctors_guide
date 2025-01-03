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
        
        visitReason: "Krampfartige Abdominalschmerzen im Bereich der Regio hypogastrica links, postprandial",
        painLocalization: "Regio hypogastrica links",
        timeCourse: "Seit gestern",
        symptomDescription: "Krampfartige Schmerzen nach dem Essen, begleitet von lauten Darmgeräuschen und Flatulenz.",
        painRadiation: "Keine",
        painProgression: "Besserung heute, keine Schmerzen mehr.",
        triggers: "Postprandial",
        painIntensity: "6-8/10",
        painRelief: "Keine spezifische Linderung angegeben.",
        painAggravation: "Keine spezifische Verschlimmerung angegeben.",
        previousMedicalCare: "Koloskopie vor 5 Jahren mit Polypektomie (gutartig), keine Nachsorge.",
        functionalIssues: "Wechsel zwischen Diarrhö und Obstipation seit 5 Jahren.",
        additionalSymptoms: "Lautes Darmgeräusch, Flatulenz.",
        
        vaccination: "Vollständig geimpft",
        travelHistory: "Keine relevanten Reisen angegeben",
        
        generalCondition: "Er sieht gesund aus, aber hat eine Reihe chronischer Erkrankungen.",
        appetite: "Unverändert",
        weightLoss: "Gewichtsabnahme von 5 kg innerhalb von 7 Wochen.",
        thirst: "Keine Angaben",
        nausea: "Keine Übelkeit",
        vomiting: "Kein Erbrechen",
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
      
        summary: "64 Jahre alter Gärtnerarbeiter mit Bauchschmerzen, seit gestern postprandial auftretend. Der Patient leidet an einer Chronifizierung seiner Symptome, einschließlich Wechsel zwischen Diarrhö und Obstipation. Vor 5 Jahren wurde eine Koloskopie mit Polypektomie durchgeführt, jedoch ohne Nachsorge. Weitere Beschwerden umfassen Insomnie aufgrund von Depression, Nachtschweiß und signifikanten Gewichtsverlust (5 kg in 7 Wochen). Der Patient hat eine familiäre Krebsanamnese, da sein Vater an Dickdarmkrebs starb.",
        
        infectiousDiseases: "Keine aktuellen Infektionen angegeben",
        chronicDiseases: "Arterielle Hypertonie (aHT), Diabetes Mellitus (DM), Lumbago",
        otherRelevantDiseases: "Meningoenzephalitis vor 8 Jahren",
        
        pastOperations: "Appendektomie als Kind, Hernie inguinalis vor 20 Jahren (laparoskopisch)",
        operationCourseComplications: "Keine Komplikationen angegeben",
        hospitalStayDuration: "Keine Krankenhausaufenthalte angegeben",
        
        allgemeineMedikamenteneinnahme: "Ramipril, Amlodipin, Celebrex, Jardiance",
        detaillierteMedikamenteninformationen: "Ramipril 5mg 1x täglich, Amlodipin 5mg 1x täglich, Celebrex 100mg bei Bedarf, Jardiance 10mg täglich",
        
        specificMedicationAllergies: "Amoxicillin mit Exanthem",
        allergicReactionSymptoms: "Exanthem",
        allergyTriggers: "Amoxicillin",
        householdAllergens: "Keine Angaben",
        specificIntolerances: "Keine weiteren Unverträglichkeiten",
        
        rauchverhalten: "Aktiver Raucher mit 30 PY (3/4 Schachtel täglich seit 16 Jahren)",
        alkoholkonsum: "Alkoholkonsum von 1/2 Liter Apfelwein täglich",
        drogengebrauch: "Drogenkonsum wurde verneint",
        
        geneticDiseases: "Keine genetischen Erkrankungen angegeben",
        parents: "Vater starb an Dickdarmkrebs (75 Jahre), Mutter lebt mit Demenz im Pflegeheim",
        siblings: "Keine Geschwister",
        
        profession: "Gärtnerarbeiter",
        maritalStatus: "Verheiratet",
        children: "3 Kinder, davon ein Sohn mit Depression und zwei gesunde Töchter",
        livingConditions: "Lebt mit seiner Frau",
        psychosomaticHistory: "Leidet unter Stress aufgrund der Arbeit",
        physicalActivity: "Keine Angaben",
        dietaryHabits: "Keine speziellen Ernährungsgewohnheiten angegeben",
        
        possibleDiagnoses: "Divertikulitis, Volvulus, Colitis ulcerosa, Morbus Crohn",
        differentiation: "Appendizitis ausgeschlossen aufgrund der Anamnese",
        
        suspectedDiagnosis: "Divertikulitis",
        justification: "Die Symptome, wie postprandiale krampfartige Bauchschmerzen, Flatulenz und Darmgeräusche, passen zu einer Divertikulitis. Weitere Differenzialdiagnosen werden durch zusätzliche Tests überprüft.",
        
        physicalExamination: "Palpation zeigt Abwehrspannung, Darmgeräusche im Sinne eines Ileus.",
        laboratoryTests: "Blutentnahme für BB, CRP, BSG, Gerinnungsparameter, Tumormarker CEA, 19-9",
        instrumentalExamination: "Sono-Abdomen, CT-Abdomen, Koloskopie",
        
      
        examinerQuestions: `
"Was können wir bei einem CT-Abdomen beurteilen?  
**Antwort:** Beim CT-Abdomen können Entzündungszeichen, Volvulus, Divertikel und andere Strukturanomalien beurteilt werden.",
        
"Was sind die Risikofaktoren für Divertikulitis?  
**Antwort:** Alter, Rauchen, Bewegungsmangel, Ernährung mit wenig Ballaststoffen und familiäre Häufung.",
        
"Was ist Radiotherapie?  
**Antwort:** Radiotherapie ist eine Behandlung mit ionisierender Strahlung, um Tumoren zu verkleinern oder deren Wachstum zu verhindern."
      `
              },
    // Додаткові об'єкти для інших тестових даних (опціонально)
];
HESSEN_DATA.regionName = "Hessen";
export default HESSEN_DATA;
