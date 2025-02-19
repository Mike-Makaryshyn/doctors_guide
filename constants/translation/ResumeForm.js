const resumeFormTexts = {
  header: "Резюме",
  fields: {
    vorname: "Ім'я",
    nachname: "Прізвище",
    address: "Адреса",
    phone: "Телефон",
    email: "Електронна пошта",
    dateOfBirth: "Дата народження",
    citizenship: "Громадянство",
    fachrichtung: "Спеціалізація",
  },
  suggestions: [
    "Erlernen der deutschen Sprache bis Niveau C1 und Einleitung des Anerkennungsverfahrens als Arzt in Deutschland",
    "Vorbereitung auf die medizinische Anerkennung in Deutschland",
    "Teilnahme an einem Sprachkurs zur Verbesserung der medizinischen Kommunikation",
    "Besuch von Fachseminaren und Weiterbildungen im medizinischen Bereich",
    "Vertiefung der Kenntnisse im deutschen Gesundheitssystem",
    "Selbststudium medizinischer Fachliteratur auf Deutsch",
    "Teilnahme an medizinischen Fachvorträgen und Kongressen",
    "Vorbereitung auf die Kenntnisprüfung / Gleichwertigkeitsprüfung",
    "Erweiterung der Fachkenntnisse durch praktische Übungen und Simulationen",
    "Netzwerken mit Kollegen und Experten im medizinischen Bereich",
    "Auseinandersetzung mit aktuellen medizinischen Leitlinien und Standards",
    "Teilnahme an interaktiven Kursen zur Verbesserung der Diagnose- und Behandlungskompetenz",
    "Erarbeitung von Fallstudien zur Vertiefung der medizinischen Kenntnisse",
    "Selbstständige Wiederholung und Festigung medizinischer Fachbegriffe in deutscher Sprache",
    "Teilnahme an Workshops zur Optimierung der ärztlichen Dokumentation und Patientenkommunikation",
    "Übungen zur Verbesserung der ärztlichen Gesprächsführung in deutschen Kliniken und Praxen",
],
berufserfahrungenSuggestions: [
  "Hospitation in einer Klinik für [Fachrichtung] in Deutschland",
  "Praktische Erfahrung durch eine Hospitation im Krankenhaus",
  "Arbeit als Facharzt für [Fachrichtung] in einer Klinik oder Praxis",
  "Assistenzarzt in einer Abteilung für [Fachrichtung] im Krankenhaus",
  "Teilnahme an einer klinischen Weiterbildung für medizinische Fachkräfte",
  "Gastarzt in einer Fachabteilung für [Fachrichtung] in einem deutschen Krankenhaus",
  "Erste praktische Erfahrungen durch Famulaturen und Hospitationen in verschiedenen Fachrichtungen",
  "Weiterbildung im Bereich [Fachrichtung] an einer Universitätsklinik",
  "Klinische Tätigkeit in einer Abteilung für [Fachrichtung]",
  "Praktische Erfahrung durch Arbeit in einer Poliklinik oder Praxis",
  "Teilnahme an einem Intensivpraktikum in einer deutschen Klinik",
  "Arbeit als Pflegekraft während des Medizinstudiums zur praktischen Erfahrungssammlung",
  "Erfahrung in der Patientenbetreuung durch Tätigkeit in einer Notaufnahme oder Intensivstation",
  "Hospitation in einer Abteilung für Innere Medizin oder Chirurgie zur Fachvertiefung",
  "Mitarbeit in interdisziplinären Teams zur Diagnostik und Therapie von Patienten"
],
ausbildungSuggestions: [
  "Studium der Humanmedizin an der Medizinischen Universität [Stadt, Land]",
  "Abschluss des Humanmedizinstudiums an der Universität [Stadt, Land]",
  "Medizinische Ausbildung an der Fakultät für Humanmedizin in [Stadt, Land]",
  "Erfolgreicher Abschluss des Medizinstudiums an einer Universität in [Land]",
  "Studium der Humanmedizin mit Schwerpunkt auf [Fachrichtung] an der Universität [Stadt]",
  "Erwerb der Hochschulreife mit Schwerpunkt Naturwissenschaften in [Stadt, Land]",
  "Abschluss der Schulausbildung mit dem Schwerpunkt Biologie und Chemie in [Stadt]",
  "Voruniversitäre medizinische Ausbildung in [Stadt, Land]",
  "Schulabschluss mit Spezialisierung auf medizinische Grundlagen in [Stadt]",
  "Abschluss der allgemeinen Hochschulreife mit Schwerpunkt [Fachrichtung] in [Stadt]",
  "Medizinstudium mit praxisorientierter Ausbildung in [Stadt, Land]",
  "Klinische Ausbildung während des Medizinstudiums an der Universität [Stadt]",
  "Praktische Ausbildung im Rahmen des Medizinstudiums an verschiedenen Kliniken in [Land]",
  "Teilnahme an wissenschaftlichen Projekten während des Medizinstudiums an der Universität [Stadt]",
  "Studium der Medizin mit Abschluss als Doktor der Humanmedizin in [Stadt, Land]"
],
languageSkillsSuggestions: [
  "Deutsch",
  "Englisch",
  "Polnisch",
  "Arabisch",
  "Ukrainisch",
  "Russisch",
  "Französisch",
  "Spanisch",
  "Italienisch",
  "Portugiesisch",
  "Türkisch",
  "Niederländisch",
  "Rumänisch",
  "Tschechisch",
  "Ungarisch",
  "Serbisch",
  "Kroatisch",
  "Bosnisch",
  "Slowakisch",
  "Slowenisch",
  "Bulgarisch",
  "Griechisch",
  "Albanisch",
  "Schwedisch",
  "Dänisch",
  "Norwegisch",
  "Finnisch",
  "Chinesisch",
  "Japanisch",
  "Koreanisch",
  "Hindi",
  "Bengalisch",
  "Urdu",
  "Tamil",
  "Telugu",
  "Marathi",
  "Punjabi",
  "Persisch",
  "Paschtunisch",
  "Kurdisch",
  "Kasachisch",
  "Aserbaidschanisch",
  "Swahili",
  "Hausa",
  "Amharisch",
  "Yoruba",
  "Igbo",
  "Somali",
  "Afrikaans",
  "Malagasy",
  "Quechua",
  "Guarani",
  "Haitianisch-Kreolisch",
  "Maori",
  "Samoanisch",
  "Hawaiianisch"
],
levelSuggestions: [
  "Grundkenntnisse",          // Basic knowledge
  "Elementare Kenntnisse",    // Elementary knowledge
  "Mittelstufe",              // Intermediate
  "Gute Kenntnisse",          // Good knowledge
  "Fortgeschrittene Kenntnisse", // Advanced knowledge
  "Sehr gute Kenntnisse",     // Very good knowledge
  "Fließend",                 // Fluent
  "Verhandlungssicher",       // Business proficient
  "Muttersprache",            // Native language
  "Zweitsprache"              // Second language
],

technicalSkillsSuggestions: [
  // Інтегровані медичні та комп’ютерні навички
  "Medizinische Dokumentation und Berichtserstellung",
  "MS Office (Word, Excel, PowerPoint)",
  "Elektronische Patientenakte (EPA) und Krankenhaus-Informationssysteme (KIS)",
  "IT-Sicherheit und Datenschutz (DSGVO-konform)",
  
  // Діагностичні навички
  "Ultraschalldiagnostik (Sonographie)",
  "Abdominalsonographie",
  "Herzsonographie (Echokardiographie)",
  "Gefäßsonographie (Doppler- und Duplexsonographie)",
  "Thoraxsonographie",
  "Transkranielle Dopplersonographie",
  "Muskuloskelettale Sonographie",
  
  // Радіологічні технології
  "PACS-Systeme (Bildarchivierungs- und Kommunikationssystem)",
  "Radiologische Bildbearbeitung (DICOM-Viewer)",
  "CT- und MRT-Bildanalyse",
  "Röntgendiagnostik (X-Ray Imaging)",
  "Mammographie-Interpretation",
  
  // Лабораторні та клінічні навички
  "Labordiagnostik-Software",
  "Blutgasanalytik",
  "Mikrobiologische und molekulare Diagnostik",
  "Point-of-Care-Testing (POCT)",
  "EKG-Analyse und Interpretation",
  "Spirometrie und Lungenfunktionstests",
  "Klinische Notfallsonographie (FAST-Protokoll)",
  
  // Загальні комп’ютерні навички
  "Google Workspace (Docs, Sheets, Slides)",
  "Projektmanagement-Tools (Trello, Asana, Jira)",
  "Datenanalyse und Visualisierung (Power BI, Tableau)",
  "Microsoft Teams",
  "Grundlagen der Programmierung (JavaScript, Python, Java)",
  "Zoom / Videokonferenz-Tools",
  "Cloud-Services (AWS, Azure, Google Cloud)",
  "Linux / MacOS / Windows Betriebssysteme",
  "Datenbankverwaltung (SQL, Access)",
  "HTML / CSS für Webanwendungen",
  
  // Додаткові клінічні навички
  "Anwendung von medizinischen Leitlinien und Standards",
  "Telemedizinische Plattformen",
  "Medizinische Statistik (SPSS, R, Excel-Analyse)",
  "Qualitätsmanagement im Gesundheitswesen",
  "Arbeiten in interdisziplinären Teams",
  "Klinische Forschung und wissenschaftliche Analyse"
],
technicalLevelSuggestions: [
  "Grundkenntnisse",                 // Basic knowledge
  "Basiswissen",                     // Foundational knowledge
  "Gute Kenntnisse",                 // Good knowledge
  "Fortgeschrittene Kenntnisse",     // Advanced knowledge
  "Sehr gute Kenntnisse",            // Very good knowledge
  "Expertenkenntnisse",              // Expert knowledge
  "Sicherer Umgang mit [Tool/Technik]", // Confident handling
  "Tägliche Anwendung in der Praxis",   // Daily practical application
  "Fließende Anwendung im klinischen Alltag", // Fluent application in clinical practice
  "Fundierte Erfahrung in [Bereich]",     // In-depth experience
  "Spezialisierte Kenntnisse in [Fachgebiet]", // Specialized knowledge
  "Professionelle Kompetenz",        // Professional competence
  "Anwenderexperte",                 // Power user / Advanced user
  "Trainer-Level"                    // Trainer level (ability to teach others)
],
};

export default resumeFormTexts;