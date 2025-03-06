export const APPROBATION_STAGES_NON_EU = {
  en: [
    {
      id: 1,
      title: "Explorer",
      avatar: "/assets/man-stage-1.png",
      description:
        "This is someone who is just beginning their journey, exploring opportunities, learning the basics of relocation and the requirements for Approbation, and starting to gather the necessary documents.",
      tasks: [
        { id: "1.1", title: "Research potential regions for relocation" },
        {
          id: "1.2",
          title: "Familiarize yourself with the requirements for Approbation",
          link: "/approbation",
        },
        {
          id: "1.3",
          title:
            "Familiarize yourself with the requirements for Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title:
            "Familiarize yourself with the requirements for Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title:
            "Familiarize yourself with the requirements for Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title:
            "Familiarize yourself with the requirements for the Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Gather documents", link: "/documents" },
        { id: "1.8", title: "Language study", link: "/language-study" },
        { id: "1.9", title: "Join regional chats", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "Check official websites of medical chambers for up-to-date information",
        },
      ],
      congratsMessage:
        "Great job! You have completed the 'Explorer' stage. Keep moving forward!",
    },
    {
      id: 2,
      title: "Newcomer",
      description:
        "This is someone who has already moved to Germany, prepared the essential documents, and is continuing to adapt.",
      tasks: [
        {
          id: "2.2",
          title: "Start gathering documents for the medical chamber",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Find a notary to create certified copies",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Find a translator for certified copies",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Have your diploma translated by a certified translator",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Obtain information about the Approbation requirements in your region",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Locate your regional medical chambers and review the required documents list",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Enroll in language courses (B1 level or higher)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Join regional groups or doctor communities on Telegram or Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title:
            "Obtain a certificate of no criminal record from your country (if needed)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Contact a consultant or agency regarding Approbation (if needed)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Find a family doctor and register with them" },
      ],
      congratsMessage:
        "Congratulations! You have completed the 'Newcomer' stage. The next step is near!",
    },
    {
      id: 3,
      title: "Document Hunter",
      description:
        "This is someone actively gathering, preparing, and submitting documents for diploma recognition, and also beginning preparation for the FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Collect all necessary academic documents",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Obtain a certificate of no criminal record",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Obtain a certificate of professional experience (if required)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Have the documents translated by a certified translator",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Notarize the translations and copies of documents",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Submit the documents to the medical chamber for review",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title: "Begin FSP preparation with a focus on medical terminology",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Find resources for studying medical terminology (dictionaries, apps, guides)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title:
            "Familiarize yourself with the FSP format and preparatory materials",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'Document Hunter' stage. You are getting closer to your goal!",
    },
    {
      id: 4,
      title: "Language Fighter",
      description:
        "This is someone preparing for the FSP by studying medical terminology, practicing medical consultations, and preparing for the exam.",
      tasks: [
        {
          id: "4.1",
          title: "Study medical terminology using dictionaries and apps",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Learn all medical abbreviations",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Practice medical cases relevant to your region",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Practice explaining medical examinations",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Practice or review a basic set of medications in German",
        },
        {
          id: "4.4",
          title: "Practice medical consultations with a partner",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Create phrase templates for explaining procedures to patients",
        },
        {
          id: "4.8",
          title: "Take mock exams or consult with an instructor",
        },
        {
          id: "4.9",
          title: "Register for FSP",
          link: "/fsp-registration"
        }
      ],
      congratsMessage:
        "Congratulations! You have completed the 'Language Fighter' stage. One more step towards success!",
    },
    {
      id: 5,
      title: "Language Master",
      description:
        "This is someone who has successfully passed the FSP, is preparing to search for a job, and is improving their language skills.",
      tasks: [
        { id: "5.1", title: "Study the language until you reach C1" },
        {
          id: "5.2",
          title: "Prepare a resume and cover letter",
          link: "/resume",
        },
        { id: "5.3", title: "Prepare a portfolio of professional documents" },
        {
          id: "5.4",
          title: "Send job applications to hospitals",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Familiarize yourself with the requirements for obtaining a Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'Language Master' stage. Success is near!",
    },
    {
      id: 6,
      title: "Practicing Pioneer",
      description:
        "This is someone who works with a temporary license, gains experience, and prepares for the KP exam.",
      tasks: [
        {
          id: "6.1",
          title: "Work in a hospital with a temporary license",
          link: "/job-search",
        },
        {
          id: "6.2",
          title:
            "Familiarize yourself with Germany's clinical standards (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Begin preparing for the KP exam",
          link: "/main-menu",
        },
        { id: "6.4", title: "Submit an application to take the KP exam" },
        { id: "6.5", title: "Practice typical cases for the KP exam" },
        {
          id: "6.6",
          title:
            "Learn about the types of questions that may appear on the KP exam",
        },
        {
          id: "6.7",
          title: "Find a study group or a partner for KP preparation",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'Practicing Pioneer' stage. The next step is just around the corner!",
    },
    {
      id: 7,
      title: "Exam Pro",
      description:
        "This is someone focused on preparing for the KP exam, taking mock tests, and finalizing their preparation.",
      tasks: [
        {
          id: "7.1",
          title:
            "Familiarize yourself with the format and structure of the KP exam",
        },
        {
          id: "7.2",
          title:
            "Prepare for the theoretical part of the exam (medical knowledge, pharmacology, clinical protocols)",
        },
        {
          id: "7.3",
          title: "Practice clinical cases that might appear on the exam",
        },
        {
          id: "7.4",
          title: "Develop skills in explaining medical procedures to patients",
        },
        { id: "7.5", title: "Take mock tests to assess your readiness" },
        {
          id: "7.6",
          title:
            "Practice under simulated exam conditions (with partners or an instructor)",
        },
        {
          id: "7.7",
          title:
            "Consult with an instructor to evaluate your preparation level",
        },
        {
          id: "7.8",
          title: "Check that all your documents for the KP exam are in order",
        },
        {
          id: "7.9",
          title:
            "Ensure you have the necessary materials for exam day (ID, writing tools, registration confirmation)",
        },
        {
          id: "7.10",
          title:
            "On exam day: follow the rules and remain confident in your knowledge",
        },
      ],
      congratsMessage:
        "Congratulations! You have completed the 'Exam Pro' stage. You are almost ready for full licensure!",
    },
    {
      id: 8,
      title: "Licensed Professional",
      description:
        "This is someone who has successfully passed the KP exam and is finalizing the process of obtaining Approbation.",
      tasks: [
        {
          id: "8.1",
          title: "Verify that the documents for Approbation are ready",
        },
        { id: "8.2", title: "Submit the application for Approbation" },
        {
          id: "8.3",
          title:
            "Familiarize yourself with the rights and responsibilities of a doctor in Germany",
        },
        { id: "8.4", title: "Complete all formalities to obtain Approbation" },
      ],
      congratsMessage:
        "Great! You have completed the 'Licensed Professional' stage. You are in the final stage!",
    },
    {
      id: 9,
      title: "Legendary Doctor",
      description:
        "This is someone who has obtained Approbation and has officially started working as a doctor in Germany.",
      tasks: [
        { id: "9.1", title: "Officially start working in a hospital" },
        { id: "9.2", title: "Develop a long-term career plan" },
        {
          id: "9.3",
          title: "Participate in professional conferences or seminars",
        },
        {
          id: "9.4",
          title: "Obtain certification in a specialty (if required)",
        },
      ],
      congratsMessage:
        "Congratulations! You have completed the 'Legendary Doctor' stage. Welcome to professional life in Germany!",
    },
  ],
  de: [
    {
      id: 1,
      title: "Entdecker",
      avatar: "/assets/man-stage-1.png",
      description:
        "Dies ist jemand, der gerade seine Reise beginnt, Chancen erkundet, die Grundlagen des Umzugs sowie die Anforderungen an die Approbation erlernt und damit beginnt, die notwendigen Dokumente zu sammeln.",
      tasks: [
        {
          id: "1.1",
          title: "Erforschen Sie potenzielle Regionen für den Umzug",
        },
        {
          id: "1.2",
          title:
            "Machen Sie sich mit den Anforderungen an die Approbation vertraut",
          link: "/approbation",
        },
        {
          id: "1.3",
          title:
            "Machen Sie sich mit den Anforderungen an die Gleichwertigkeit vertraut",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title:
            "Machen Sie sich mit den Anforderungen an das Vergleichsgutachten vertraut",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title:
            "Machen Sie sich mit den Anforderungen an die Berufserlaubnis vertraut",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title:
            "Machen Sie sich mit den Anforderungen an die Fachsprachprüfung vertraut",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Dokumentensammlung", link: "/documents" },
        { id: "1.8", title: "Sprachstudium", link: "/language-study" },
        { id: "1.9", title: "Regionale Chats", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "Überprüfen Sie die offiziellen Websites der Ärztekammern für aktuelle Informationen",
        },
      ],
      congratsMessage:
        "Tolle Arbeit! Sie haben die Stufe 'Entdecker' abgeschlossen. Machen Sie weiter so!",
    },
    {
      id: 2,
      title: "Neuankömmling",
      description:
        "Dies ist jemand, der bereits nach Deutschland gezogen ist, die wesentlichen Dokumente vorbereitet hat und sich weiter anpasst.",
      tasks: [
        {
          id: "2.2",
          title: "Beginnen Sie, Dokumente für die Ärztekammer zu sammeln",
          link: "/documents",
        },
        {
          id: "2.3",
          title:
            "Finden Sie einen Notar, um beglaubigte Kopien erstellen zu lassen",
          link: "/notarization",
        },
        {
          id: "2.4",
          title:
            "Finden Sie einen Übersetzer, um beglaubigte Kopien anfertigen zu lassen",
          link: "/translation",
        },
        {
          id: "2.5",
          title:
            "Lassen Sie Ihr Diplom von einem zertifizierten Übersetzer übersetzen",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Holen Sie Informationen über die Approbationsanforderungen in Ihrer Region ein",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Finden Sie die Ärztekammern in Ihrer Region und überprüfen Sie die Liste der erforderlichen Dokumente",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Melden Sie sich für Sprachkurse (Niveau B1 oder höher) an",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Treten Sie regionalen Gruppen oder Gemeinschaften von Ärzten auf Telegram oder Facebook bei",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title:
            "Holen Sie, falls erforderlich, ein Führungszeugnis aus Ihrem Land ein",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Nehmen Sie, falls erforderlich, Kontakt mit einem Berater oder einer Agentur bezüglich der Approbation auf",
          link: "/personal-consultation",
        },
        {
          id: "2.12",
          title: "Finden Sie einen Hausarzt und melden Sie sich dort an",
        },
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Neuankömmling' abgeschlossen. Der nächste Schritt ist nahe!",
    },
    {
      id: 3,
      title: "Dokumentenjäger",
      description:
        "Dies ist jemand, der aktiv Dokumente zur Anerkennung seines Abschlusses sammelt, vorbereitet und einreicht und zudem mit der Vorbereitung auf die FSP beginnt.",
      tasks: [
        {
          id: "3.1",
          title: "Sammeln Sie alle erforderlichen akademischen Dokumente",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Lassen Sie ein Führungszeugnis ausstellen",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Holen Sie sich, falls erforderlich, ein Zeugnis über die berufliche Erfahrung",
          link: "/documents",
        },
        {
          id: "3.4",
          title:
            "Lassen Sie die Dokumente von einem zertifizierten Übersetzer übersetzen",
          link: "/translation",
        },
        {
          id: "3.5",
          title:
            "Notarisch beglaubigen Sie die Übersetzungen und Kopien der Dokumente",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Senden Sie die Dokumente zur Überprüfung an die Ärztekammer",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Beginnen Sie mit der FSP-Vorbereitung mit Fokus auf medizinischer Terminologie",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Suchen Sie nach Ressourcen zum Erlernen der medizinischen Terminologie (Wörterbücher, Apps, Leitfäden)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title:
            "Machen Sie sich mit dem FSP-Format und den Vorbereitungsmaterialien vertraut",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Großartige Arbeit! Sie haben die Stufe 'Dokumentenjäger' abgeschlossen. Sie kommen Ihrem Ziel näher!",
    },
    {
      id: 4,
      title: "Sprachkämpfer",
      description:
        "Dies ist jemand, der sich auf die FSP vorbereitet, medizinische Terminologie erlernt, ärztliche Konsultationen übt und sich auf die Prüfung vorbereitet.",
      tasks: [
        {
          id: "4.1",
          title: "Lernen Sie medizinische Terminologie mithilfe von Wörterbüchern und Apps",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Lernen Sie alle medizinischen Abkürzungen",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Üben Sie medizinische Fälle, die für Ihre Region relevant sind",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Üben Sie die Erklärung von medizinischen Untersuchungen",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Üben oder wiederholen Sie einen grundlegenden Medikamentensatz in deutscher Sprache",
        },
        {
          id: "4.4",
          title: "Üben Sie ärztliche Konsultationen mit einem Partner",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Erstellen Sie Satzvorlagen, um Patienten Verfahren zu erklären",
        },
        {
          id: "4.8",
          title: "Nehmen Sie an Probeprüfungen oder Konsultationen mit einem Dozenten teil",
        },
        {
          id: "4.9",
          title: "Melden Sie sich für die Fachsprachprüfung an",
          link: "/fsp-registration"
        }
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Sprachkämpfer' abgeschlossen. Noch ein Schritt zum Erfolg!",
    },
    {
      id: 5,
      title: "Sprachmeister",
      description:
        "Dies ist jemand, der die FSP erfolgreich bestanden hat, sich auf die Jobsuche vorbereitet und seine Sprachkenntnisse verbessert.",
      tasks: [
        {
          id: "5.1",
          title: "Verbessern Sie Ihre Deutschkenntnisse bis zum Niveau C1",
        },
        {
          id: "5.2",
          title: "Erstellen Sie einen Lebenslauf und ein Anschreiben",
          link: "/resume",
        },
        {
          id: "5.3",
          title:
            "Stellen Sie ein Portfolio mit beruflichen Dokumenten zusammen",
        },
        {
          id: "5.4",
          title: "Senden Sie Bewerbungen an Krankenhäuser",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Informieren Sie sich über die Anforderungen für die Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Großartig! Sie haben die Stufe 'Sprachmeister' abgeschlossen. Der Erfolg ist in greifbarer Nähe!",
    },
    {
      id: 6,
      title: "Praktizierender Pionier",
      description:
        "Dies ist jemand, der mit einer vorläufigen Lizenz arbeitet, Erfahrungen sammelt und sich auf die KP-Prüfung vorbereitet.",
      tasks: [
        {
          id: "6.1",
          title:
            "Arbeiten Sie in einem Krankenhaus mit einer vorläufigen Lizenz",
          link: "/job-search",
        },
        {
          id: "6.2",
          title:
            "Machen Sie sich mit den klinischen Standards in Deutschland (AWMF) vertraut",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Beginnen Sie mit der Vorbereitung auf die KP-Prüfung",
          link: "/main-menu",
        },
        {
          id: "6.4",
          title: "Reichen Sie einen Antrag zur Teilnahme an der KP-Prüfung ein",
        },
        { id: "6.5", title: "Üben Sie typische Fälle für die KP-Prüfung" },
        {
          id: "6.6",
          title:
            "Machen Sie sich mit den möglichen Fragetypen der KP-Prüfung vertraut",
        },
        {
          id: "6.7",
          title:
            "Finden Sie eine Gruppe zur KP-Vorbereitung oder einen Partner zum gemeinsamen Lernen",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Großartig! Sie haben die Stufe 'Praktizierender Pionier' abgeschlossen. Der nächste Schritt ist schon fast da!",
    },
    {
      id: 7,
      title: "Prüfungsprofi",
      description:
        "Dies ist jemand, der sich auf die KP-Prüfung konzentriert, Probeprüfungen absolviert und seine Vorbereitung abschließt.",
      tasks: [
        {
          id: "7.1",
          title:
            "Machen Sie sich mit dem Format und der Struktur der KP-Prüfung vertraut",
        },
        {
          id: "7.2",
          title:
            "Bereiten Sie sich auf den theoretischen Teil der Prüfung vor (medizinisches Wissen, Pharmakologie, klinische Protokolle)",
        },
        {
          id: "7.3",
          title:
            "Üben Sie klinische Fälle, die in der Prüfung vorkommen könnten",
        },
        {
          id: "7.4",
          title:
            "Entwickeln Sie Fähigkeiten, um medizinische Verfahren den Patienten zu erklären",
        },
        {
          id: "7.5",
          title:
            "Führen Sie Probeprüfungen durch, um Ihre Bereitschaft zu überprüfen",
        },
        {
          id: "7.6",
          title:
            "Üben Sie unter simulierter Prüfungssituation (mit Partnern oder einem Dozenten)",
        },
        {
          id: "7.7",
          title:
            "Konsultieren Sie einen Dozenten, um Ihr Vorbereitungsniveau zu bewerten",
        },
        {
          id: "7.8",
          title:
            "Überprüfen Sie die Vollständigkeit aller Dokumente für die KP-Prüfung",
        },
        {
          id: "7.9",
          title:
            "Stellen Sie sicher, dass Sie alle notwendigen Materialien für den Prüfungstag haben (Ausweis, Schreibutensilien, Anmeldebestätigung)",
        },
        {
          id: "7.10",
          title:
            "Am Prüfungstag: Halten Sie sich an die Regeln und bleiben Sie von Ihrem Wissen überzeugt",
        },
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Prüfungsprofi' abgeschlossen. Fast bereit für die volle Lizenz!",
    },
    {
      id: 8,
      title: "Lizenzierter Profi",
      description:
        "Dies ist jemand, der die KP-Prüfung erfolgreich bestanden hat und den Abschluss der Approbation finalisiert.",
      tasks: [
        {
          id: "8.1",
          title:
            "Überprüfen Sie die Fertigstellung der Dokumente für die Approbation",
        },
        { id: "8.2", title: "Reichen Sie den Antrag auf Approbation ein" },
        {
          id: "8.3",
          title:
            "Machen Sie sich mit den Rechten und Pflichten eines Arztes in Deutschland vertraut",
        },
        {
          id: "8.4",
          title: "Schließen Sie alle Formalitäten für die Approbation ab",
        },
      ],
      congratsMessage:
        "Großartig! Sie haben die Stufe 'Lizenzierter Profi' abgeschlossen. Sie befinden sich in der Endphase!",
    },
    {
      id: 9,
      title: "Legendenarzt",
      description:
        "Dies ist jemand, der die Approbation erhalten hat und offiziell als Arzt in Deutschland tätig ist.",
      tasks: [
        {
          id: "9.1",
          title: "Beginnen Sie offiziell Ihre Tätigkeit in einem Krankenhaus",
        },
        { id: "9.2", title: "Entwickeln Sie einen langfristigen Karriereplan" },
        {
          id: "9.3",
          title: "Nehmen Sie an beruflichen Konferenzen oder Seminaren teil",
        },
        {
          id: "9.4",
          title:
            "Erwerben Sie, falls erforderlich, eine Zertifizierung in einem Fachgebiet",
        },
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Legendenarzt' abgeschlossen. Willkommen im Berufsleben in Deutschland!",
    },
  ],
  uk: [
    {
      id: 1,
      title: "Дослідник",
      avatar: "/assets/man-stage-1.png",
      description:
        "Це той, хто тільки починає свій шлях, досліджує можливості, вивчає основи переїзду та вимоги апробації, а також починає збирати необхідні документи.",
      tasks: [
        { id: "1.1", title: "Дослідити можливі регіони для переїзду" },

        // Завдання з меню "Process and Support" – всі формулюються як "Ознайомитися з вимогами до..."
        {
          id: "1.2",
          title: "Ознайомитися з вимогами до Approbation",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Ознайомитися з вимогами до Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Ознайомитися з вимогами до Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Ознайомитися з вимогами до Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Ознайомитися з вимогами до Fachsprachprüfung",
          link: "/what-is-fsp",
        },

        // Завдання для документів – використовуємо назву та лінк з "Document Collection"
        { id: "1.7", title: "Збір документів", link: "/documents" },

        // Завдання для мовних курсів – використовуємо назву та лінк з "Language Study"
        { id: "1.8", title: "Вивчення мови", link: "/language-study" },

        // Додаємо завдання для участі в онлайн- або регіональних групах
        { id: "1.9", title: "Чати в регіоні", link: "/regional-chats" },

        // Залишаємо існуючий крок
        {
          id: "1.10",
          title:
            "Перевірити офіційні сайти лікарських палат для отримання актуальної інформації", link: "/medical-chambers"
        },
      ],
      congratsMessage:
        "Чудова робота! Ви завершили етап 'Дослідник'. Продовжуйте рухатися вперед!",
    },
    {
      id: 2,
      title: "Новоприбулий",
      description:
        "Це той, хто вже переїхав до Німеччини, підготував основні документи та продовжує адаптацію.",
      tasks: [
        {
          id: "2.2",
          title: "Почати збирати документи до лікарської палати",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Знайти нотаріуса для створення завірених копій",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Знайти перекладача для створення завірених копій",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Перекласти диплом сертифікованим перекладачем",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Отримати інформацію про вимоги вашого регіону до апробації",
          link: "/approbation-authorities",
        },
        {
          id: "2.7",
          title:
            "Знайти лікарські палати вашого регіону та перевірити перелік документів",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Записатися на мовні курси (рівень B1 або вище)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Приєднатися до регіональних груп або спільнот лікарів у Telegram або Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Отримати довідку про несудимість у вашій країні (за потреби)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Зв'язатися з консультантом або агентством з питань апробації (за потреби)",
          link: "/personal-consultation",
        },
        {
          id: "2.12",
          title: "Знайти сімейного лікаря та зареєструватися у нього",
        },
      ],
      congratsMessage:
        "Вітаємо! Ви завершили етап 'Новоприбулий'. Наступний крок уже близько!",
    },
    {
      id: 3,
      title: "Збирач документів",
      description:
        "Це той, хто активно збирає, готує та подає документи для визнання диплома, а також починає підготовку до FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Зібрати всі необхідні академічні документи",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Оформити довідку про несудимість",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "Отримати довідку про професійний стаж (за потреби)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Перекласти документи сертифікованим перекладачем",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Нотаріально завірити переклади та копії документів",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Надіслати документи до лікарської палати для перевірки",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Розпочати підготовку до FSP з фокусом на медичній термінології",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Знайти ресурси для вивчення медичної термінології (словники, додатки, посібники)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title: "Ознайомитися з форматом FSP і підготовчими матеріалами",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Збирач документів'. Ви все ближче до мети!",
    },
    {
      id: 4,
      title: "Борець за мову",
      description:
        "Це той, хто готується до FSP, вивчає медичну термінологію, практикує лікарські консультації та готується до іспиту.",
      tasks: [
        {
          id: "4.1",
          title: "Вивчати медичну термінологію за допомогою словників та додатків",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Вивчити всі медичні скорочення",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Практикувати медичні випадки, актуальні для вашого регіону",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Практикувати пояснення медичних обстежень",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Практикувати або повторити базовий набір медикаментів німецькою",
        },
        {
          id: "4.4",
          title: "Практикувати лікарські консультації з партнером",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Створити шаблони фраз для пояснення процедур пацієнтам",
        },
        {
          id: "4.8",
          title: "Пройти пробні іспити або консультації з викладачем",
        },
        {
          id: "4.9",
          title: "Зареєструватися на FSP",
          link: "/fsp-registration"
        }
      ],
      congratsMessage:
        "Вітаємо! Ви завершили етап 'Борець за мову'. Ще один крок до успіху!",
    },
    {
      id: 5,
      title: "Майстер мови",
      description:
        "Це той, хто успішно склав FSP, готується до пошуку роботи та вдосконалює мовні навички.",
      tasks: [
        {
          id: "5.1",
          title: "Вивчати мову до рівня C1",
        },
        {
          id: "5.2",
          title: "Скласти резюме та супровідний лист",
          link: "/resume",
        },
        {
          id: "5.3",
          title: "Підготувати портфоліо з професійними документами",
        },
        {
          id: "5.4",
          title: "Надіслати заявки на роботу в лікарні",
          link: "/job-search",
        },
        {
          id: "5.5",
          title: "Ознайомитися з вимогами для отримання Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Майстер мови'. Успіх вже близько!",
    },
    {
      id: 6,
      title: "Практик-першопроходець",
      description:
        "Це той, хто працює з тимчасовою ліцензією, здобуває досвід та готується до іспиту KP.",
      tasks: [
        {
          id: "6.1",
          title: "Працювати в лікарні з тимчасовою ліцензією",
          link: "/job-search",
        },
        {
          id: "6.2",
          title: "Ознайомитися з клінічними стандартами Німеччини (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Розпочати підготовку до іспиту KP",
          link: "/main-menu",
        },
        {
          id: "6.4",
          title: "Подати заявку на складання KP",
        },
        {
          id: "6.5",
          title: "Практикувати типові випадки для іспиту KP",
        },
        {
          id: "6.6",
          title: "Ознайомитися з типами запитань, які можуть бути на KP",
        },
        {
          id: "6.7",
          title:
            "Знайти групу для підготовки до KP або партнера для спільної роботи",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Практик-першопроходець'. Наступний крок вже зовсім поруч!",
    },
    {
      id: 7,
      title: "Експерт іспитів",
      description:
        "Це той, хто зосереджений на складанні іспиту KP, виконує пробні тести та завершує підготовку.",
      tasks: [
        {
          id: "7.1",
          title: "Ознайомитися з форматом іспиту KP та його структурою",
        },
        {
          id: "7.2",
          title:
            "Підготуватися до теоретичної частини іспиту (медичні знання, фармакологія, клінічні протоколи)",
        },
        {
          id: "7.3",
          title: "Практикувати клінічні випадки, які можуть бути на іспиті",
        },
        {
          id: "7.4",
          title: "Розвивати навички пояснення медичних процедур пацієнтам",
        },
        {
          id: "7.5",
          title: "Виконувати пробні тести для перевірки готовності",
        },
        {
          id: "7.6",
          title:
            "Практикуватися в умовах симуляційного іспиту (з партнерами чи викладачем)",
        },
        {
          id: "7.7",
          title: "Консультуватися з викладачем для оцінки рівня підготовки",
        },
        {
          id: "7.8",
          title: "Перевірити готовність усіх документів для іспиту KP",
        },
        {
          id: "7.9",
          title:
            "Забезпечити себе необхідними матеріалами для дня іспиту (посвідчення особи, письмове приладдя, підтвердження реєстрації)",
        },
        {
          id: "7.10",
          title:
            "День іспиту: дотримуватися правил проведення та залишатися впевненим у своїх знаннях",
        },
      ],
      congratsMessage:
        "Вітаємо! Ви завершили етап 'Експерт іспитів'. Майже готові до повної ліцензії!",
    },
    {
      id: 8,
      title: "Ліцензований професіонал",
      description:
        "Це той, хто успішно склав іспит KP і завершує отримання Approbation.",
      tasks: [
        { id: 8.1, title: "Перевірити готовність документів для Approbation" },
        { id: 8.2, title: "Подати заявку на Approbation" },
        {
          id: 8.3,
          title: "Ознайомитися з правами та обов'язками лікаря в Німеччині",
        },
        {
          id: 8.4,
          title: "Завершити всі формальності для отримання Approbation",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Ліцензований професіонал'. Ви на фінальному етапі!",
    },
    {
      id: 9,
      title: "Легендарний лікар",
      description:
        "Це той, хто отримав Approbation і офіційно розпочав роботу лікарем у Німеччині.",
      tasks: [
        { id: 9.1, title: "Розпочати офіційну роботу в лікарні" },
        { id: 9.2, title: "Розробити довгостроковий план кар’єри" },
        {
          id: 9.3,
          title: "Брати участь у професійних конференціях або семінарах",
        },
        {
          id: 9.4,
          title: "Отримати сертифікацію у вузькій спеціалізації (за потреби)",
        },
      ],
      congratsMessage:
        "Вітаємо! Ви завершили етап 'Легендарний лікар'. Ласкаво просимо до професійного життя в Німеччині!",
    },
  ],
  ru: [
    {
      id: 1,
      title: "Исследователь",
      avatar: "/assets/man-stage-1.png",
      description:
        "Это тот, кто только начинает свой путь, исследует возможности, изучает основы переезда и требования для получения апробации, а также начинает собирать необходимые документы.",
      tasks: [
        { id: "1.1", title: "Исследовать возможные регионы для переезда" },
        {
          id: "1.2",
          title: "Ознакомиться с требованиями для получения апробации",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Ознакомиться с требованиями для Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Ознакомиться с требованиями для Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Ознакомиться с требованиями для Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Ознакомиться с требованиями для Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Сбор документов", link: "/documents" },
        { id: "1.8", title: "Изучение языка", link: "/language-study" },
        { id: "1.9", title: "Чаты в регионе", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "Проверить официальные сайты медицинских палат для получения актуальной информации",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Исследователь'. Продолжайте двигаться вперед!",
    },
    {
      id: 2,
      title: "Новоприбывший",
      description:
        "Это тот, кто уже переехал в Германию, подготовил основные документы и продолжает адаптацию.",
      tasks: [
        {
          id: "2.2",
          title: "Начать собирать документы для медицинской палаты",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Найти нотариуса для составления заверенных копий",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Найти переводчика для составления заверенных копий",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Перевести диплом с помощью сертифицированного переводчика",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Получить информацию о требованиях вашего региона для апробации",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Найти медицинские палаты вашего региона и проверить перечень документов",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Записаться на языковые курсы (уровень B1 или выше)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Присоединиться к региональным группам или сообществам врачей в Telegram или Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title:
            "Получить справку о несудимости в вашей стране (при необходимости)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Связаться с консультантом или агентством по вопросам апробации (при необходимости)",
          link: "/personal-consultation",
        },
        {
          id: "2.12",
          title: "Найти семейного врача и зарегистрироваться у него",
        },
      ],
      congratsMessage:
        "Поздравляем! Вы завершили этап 'Новоприбывший'. Следующий шаг уже близко!",
    },
    {
      id: 3,
      title: "Охотник за документами",
      description:
        "Это тот, кто активно собирает, готовит и подает документы для признания диплома, а также начинает подготовку к FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Собрать все необходимые академические документы",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Оформить справку о несудимости",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Получить справку о профессиональном опыте (при необходимости)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Перевести документы с помощью сертифицированного переводчика",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Нотариально заверить переводы и копии документов",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Отправить документы в медицинскую палату для проверки",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Начать подготовку к FSP с акцентом на медицинскую терминологию",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Найти ресурсы для изучения медицинской терминологии (словарь, приложения, руководства)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title: "Ознакомиться с форматом FSP и подготовительными материалами",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Охотник за документами'. Вы все ближе к своей цели!",
    },
    {
      id: 4,
      title: "Боец за язык",
      description:
        "Это тот, кто готовится к FSP, изучает медицинскую терминологию, практикует врачебные консультации и готовится к экзамену.",
      tasks: [
        {
          id: "4.1",
          title: "Изучать медицинскую терминологию с помощью словарей и приложений",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Выучить все медицинские аббревиатуры",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Практиковать медицинские случаи, актуальные для вашего региона",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Практиковать объяснение медицинских обследований",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Практиковать или повторять базовый набор медикаментов на немецком",
        },
        {
          id: "4.4",
          title: "Практиковать врачебные консультации с партнером",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Создавать шаблоны фраз для объяснения процедур пациентам",
        },
        {
          id: "4.8",
          title: "Проходить пробные тесты или консультироваться с инструктором",
        },
        {
          id: "4.9",
          title: "Зарегистрироваться на FSP",
          link: "/fsp-registration"
        }
      ],
      congratsMessage:
        "Поздравляем! Вы завершили этап 'Боец за язык'. Еще один шаг к успеху!",
    },
    {
      id: 5,
      title: "Мастер языка",
      description:
        "Это тот, кто успешно сдал FSP, готовится к поиску работы и совершенствует свои языковые навыки.",
      tasks: [
        { id: "5.1", title: "Изучать язык до уровня C1" },
        {
          id: "5.2",
          title: "Составить резюме и сопроводительное письмо",
          link: "/resume",
        },
        {
          id: "5.3",
          title: "Подготовить портфолио с профессиональными документами",
        },
        {
          id: "5.4",
          title: "Отправить заявки на работу в больницы",
          link: "/job-search",
        },
        {
          id: "5.5",
          title: "Ознакомиться с требованиями для получения Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Мастер языка'. Успех уже близко!",
    },
    {
      id: 6,
      title: "Практикующий первопроходец",
      description:
        "Это тот, кто работает с временной лицензией, набирается опыта и готовится к экзамену KP.",
      tasks: [
        {
          id: "6.1",
          title: "Работать в больнице с временной лицензией",
          link: "/job-search",
        },
        {
          id: "6.2",
          title: "Ознакомиться с клиническими стандартами Германии (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Начать подготовку к экзамену KP",
          link: "/main-menu",
        },
        { id: "6.4", title: "Подать заявление на сдачу экзамена KP" },
        { id: "6.5", title: "Практиковать типовые случаи для экзамена KP" },
        {
          id: "6.6",
          title: "Изучить типы вопросов, которые могут быть на экзамене KP",
        },
        {
          id: "6.7",
          title:
            "Найти группу для подготовки к KP или партнёра для совместного обучения",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Практикующий первопроходец'. Следующий шаг уже совсем близко!",
    },
    {
      id: 7,
      title: "Эксперт экзаменов",
      description:
        "Это тот, кто сосредоточен на подготовке к экзамену KP, проходит пробные тесты и завершает подготовку.",
      tasks: [
        {
          id: "7.1",
          title: "Ознакомиться с форматом и структурой экзамена KP",
        },
        {
          id: "7.2",
          title:
            "Подготовиться к теоретической части экзамена (медицинские знания, фармакология, клинические протоколы)",
        },
        {
          id: "7.3",
          title:
            "Практиковать клинические случаи, которые могут появиться на экзамене",
        },
        {
          id: "7.4",
          title: "Развивать навыки объяснения медицинских процедур пациентам",
        },
        { id: "7.5", title: "Проходить пробные тесты для проверки готовности" },
        {
          id: "7.6",
          title:
            "Практиковаться в условиях симуляционного экзамена (с партнерами или преподавателем)",
        },
        {
          id: "7.7",
          title:
            "Консультироваться с преподавателем для оценки уровня подготовки",
        },
        {
          id: "7.8",
          title: "Проверить полноту всех документов для экзамена KP",
        },
        {
          id: "7.9",
          title:
            "Обеспечить себя необходимыми материалами для дня экзамена (удостоверение личности, письменные принадлежности, подтверждение регистрации)",
        },
        {
          id: "7.10",
          title:
            "В день экзамена: соблюдать правила и сохранять уверенность в своих знаниях",
        },
      ],
      congratsMessage:
        "Поздравляем! Вы завершили этап 'Эксперт экзаменов'. Почти готовы к полной лицензии!",
    },
    {
      id: 8,
      title: "Лицензированный профессионал",
      description:
        "Это тот, кто успешно сдал экзамен KP и завершает получение апробации.",
      tasks: [
        { id: "8.1", title: "Проверить готовность документов для апробации" },
        { id: "8.2", title: "Подать заявление на апробацию" },
        {
          id: "8.3",
          title: "Ознакомиться с правами и обязанностями врача в Германии",
        },
        {
          id: "8.4",
          title: "Завершить все формальности для получения апробации",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Лицензированный профессионал'. Вы на финишной прямой!",
    },
    {
      id: 9,
      title: "Легендарный врач",
      description:
        "Это тот, кто получил апробацию и официально начал работать врачом в Германии.",
      tasks: [
        { id: "9.1", title: "Официально начать работать в больнице" },
        { id: "9.2", title: "Разработать долгосрочный план карьеры" },
        {
          id: "9.3",
          title: "Участвовать в профессиональных конференциях или семинарах",
        },
        {
          id: "9.4",
          title: "Получить сертификат по узкой специализации (если необходимо)",
        },
      ],
      congratsMessage:
        "Поздравляем! Вы завершили этап 'Легендарный врач'. Добро пожаловать в профессиональную жизнь в Германии!",
    },
  ],
  tr: [
    {
      id: 1,
      title: "Kaşif",
      avatar: "/assets/man-stage-1.png",
      description:
        "Bu, yolculuğuna yeni başlayan, fırsatları araştıran, taşınmanın temellerini öğrenen ve gerekli belgeleri toplamaya başlayan kişidir.",
      tasks: [
        { id: "1.1", title: "Taşınmak için potansiyel bölgeleri araştırın" },
        {
          id: "1.2",
          title: "Approbation gerekliliklerini öğrenin",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Gleichwertigkeit gerekliliklerini öğrenin",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Vergleichsgutachten gerekliliklerini öğrenin",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Berufserlaubnis gerekliliklerini öğrenin",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Fachsprachprüfung gerekliliklerini öğrenin",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Belgeleri toplayın", link: "/documents" },
        { id: "1.8", title: "Dil çalışması", link: "/language-study" },
        {
          id: "1.9",
          title: "Bölgesel sohbetlere katılın",
          link: "/regional-chats",
        },
        {
          id: "1.10",
          title:
            "Tıbbi odaların resmi web sitelerini güncel bilgiler için kontrol edin",
        },
      ],
      congratsMessage:
        "Harika! 'Kaşif' aşamasını tamamladınız. Yolunuza devam edin!",
    },
    {
      id: 2,
      title: "Yeni Gelen",
      description:
        "Bu, Almanya'ya taşınmış, temel belgelerini hazırlamış ve uyum sürecine devam eden kişidir.",
      tasks: [
        {
          id: "2.2",
          title: "Tıbbi oda için belgeleri toplamaya başlayın",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Noter bulup onaylı kopyalar oluşturun",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Onaylı kopyalar için tercüman bulun",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Diplomanızı onaylı tercüman ile çevirtin",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Bölgenizdeki Approbation gereklilikleri hakkında bilgi edinin",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Bölgenizdeki tıbbi odaları bulun ve gerekli belgeler listesini kontrol edin",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Dil kurslarına (B1 veya üstü) kaydolun",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Telegram veya Facebook’taki bölgesel doktor gruplarına katılın",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Gerekirse, ülkenizde sabıka kaydı belgesi alın",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Gerekirse, Approbation konularında danışman veya ajans ile iletişime geçin",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Aile doktoru bulun ve kaydolun" },
      ],
      congratsMessage:
        "Tebrikler! 'Yeni Gelen' aşamasını tamamladınız. Bir sonraki adım yakın!",
    },
    {
      id: 3,
      title: "Belge Avcısı",
      description:
        "Bu, diplomanın tanınması için belgeleri aktif olarak toplayan, hazırlayan ve gönderen, aynı zamanda FSP’ye hazırlanmaya başlayan kişidir.",
      tasks: [
        {
          id: "3.1",
          title: "Gerekli tüm akademik belgeleri toplayın",
          link: "/documents",
        },
        { id: "3.2", title: "Sabıka kaydı alın", link: "/documents" },
        {
          id: "3.3",
          title: "Gerekirse, mesleki deneyim belgesi alın",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Belgelerinizi onaylı tercüman ile çevirtin",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Belgelerin onaylı kopyalarını noterden tasdik ettirin",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Belgeleri tıbbi odaya gönderin",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title: "Tıbbi terminolojiye odaklanarak FSP hazırlıklarına başlayın",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Tıbbi terminoloji öğrenme kaynakları bulun (sözlükler, uygulamalar, rehberler)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title: "FSP formatı ve hazırlık materyalleri ile tanışın",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Harika! 'Belge Avcısı' aşamasını tamamladınız. Hedefinize bir adım daha yaklaştınız!",
    },
    {
      id: 4,
      title: "Dil Savaşçısı",
      description:
        "Bu, FSP’ye hazırlanan, tıbbi terminoloji öğrenen, tıbbi danışma pratiği yapan ve sınava hazırlanan kişidir.",
      tasks: [
        {
          id: "4.1",
          title: "Sözlükler ve uygulamalar kullanarak tıbbi terminoloji öğrenin",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Tüm tıbbi kısaltmaları öğrenin",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Bölgenize uygun tıbbi vaka örnekleri üzerinde pratik yapın",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Tıbbi muayene açıklamalarını pratiğe dökün",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Almanca temel ilaç setini pratiğe dökün veya tekrarlayın",
        },
        {
          id: "4.4",
          title: "Bir partnerle tıbbi danışma pratiği yapın",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Hastalara prosedürleri açıklamak için kalıp ifadeler oluşturun",
        },
        {
          id: "4.8",
          title: "Deneme sınavlarına girin veya bir eğitmene danışın",
        },
        {
          id: "4.9",
          title: "FSP'ye kaydolun",
          link: "/fsp-registration"
        }
      ],
      congratsMessage:
        "Tebrikler! 'Dil Savaşçısı' aşamasını tamamladınız. Başarıya bir adım daha yaklaştınız!",
    },
    {
      id: 5,
      title: "Dil Ustası",
      description:
        "Bu, FSP’yi başarıyla geçen, iş arayan ve dil becerilerini geliştiren kişidir.",
      tasks: [
        { id: "5.1", title: "Almanca seviyenizi C1’e yükseltmek için çalışın" },
        { id: "5.2", title: "Özgeçmiş ve ön yazı hazırlayın", link: "/resume" },
        {
          id: "5.3",
          title: "Profesyonel belgelerden oluşan bir portföy oluşturun",
        },
        {
          id: "5.4",
          title: "Hastanelere iş başvuruları gönderin",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Geçici tıbbi lisans (Berufserlaubnis) gerekliliklerini öğrenin",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Harika! 'Dil Ustası' aşamasını tamamladınız. Başarı çok yakın!",
    },
    {
      id: 6,
      title: "Çalışan Öncü",
      description:
        "Bu, geçici lisansla çalışan, deneyim kazanan ve KP sınavına hazırlanan kişidir.",
      tasks: [
        {
          id: "6.1",
          title: "Geçici lisansla bir hastanede çalışmaya başlayın",
          link: "/job-search",
        },
        {
          id: "6.2",
          title: "Almanya’nın klinik standartlarını (AWMF) öğrenin",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "KP sınavına hazırlanmaya başlayın",
          link: "/main-menu",
        },
        { id: "6.4", title: "KP sınavı başvurusunda bulunun" },
        {
          id: "6.5",
          title: "KP sınavı için tipik vaka örnekleri üzerinde pratik yapın",
        },
        { id: "6.6", title: "KP sınavında çıkabilecek soru tiplerini öğrenin" },
        {
          id: "6.7",
          title: "KP hazırlığı için bir grup veya ortak bulun",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Mükemmel! 'Çalışan Öncü' aşamasını tamamladınız. Bir sonraki adım hemen önünüzde!",
    },
    {
      id: 7,
      title: "Sınav Uzmanı",
      description:
        "Bu, KP sınavına odaklanan, deneme testleri yapan ve hazırlığını tamamlayan kişidir.",
      tasks: [
        { id: "7.1", title: "KP sınavının formatı ve yapısıyla tanışın" },
        {
          id: "7.2",
          title:
            "KP sınavının teorik kısmına hazırlanın (tıbbi bilgi, farmakoloji, klinik protokoller)",
        },
        {
          id: "7.3",
          title:
            "KP sınavında çıkabilecek klinik vaka örnekleri üzerinde pratik yapın",
        },
        {
          id: "7.4",
          title:
            "Hastalara tıbbi prosedürleri açıklama becerilerinizi geliştirin",
        },
        {
          id: "7.5",
          title: "Hazır olduğunuzu değerlendirmek için deneme testleri yapın",
        },
        {
          id: "7.6",
          title:
            "Partnerler veya eğitmen eşliğinde simülasyon sınavı koşullarında pratik yapın",
        },
        {
          id: "7.7",
          title: "Hazırlık seviyenizi değerlendirmek için bir eğitmene danışın",
        },
        {
          id: "7.8",
          title:
            "KP sınavı için tüm belgelerinizin eksiksiz olduğundan emin olun",
        },
        {
          id: "7.9",
          title:
            "Sınav günü için gerekli malzemelere sahip olduğunuzdan emin olun (kimlik, yazı gereçleri, kayıt onayı)",
        },
        {
          id: "7.10",
          title: "Sınav gününde: kurallara uyun ve bilginize güvenin",
        },
      ],
      congratsMessage:
        "Tebrikler! 'Sınav Uzmanı' aşamasını tamamladınız. Tam lisansa neredeyse hazırsınız!",
    },
    {
      id: 8,
      title: "Lisanslı Profesyonel",
      description:
        "Bu, KP sınavını başarıyla geçen ve Approbation sürecini tamamlayan kişidir.",
      tasks: [
        {
          id: "8.1",
          title: "Approbation için belgelerin hazır olduğundan emin olun",
          link: "/documents",
        },
        {
          id: "8.2",
          title: "Approbation başvurusunda bulunun",
          link: "/approbation",
        },
        {
          id: "8.3",
          title:
            "Almanya’da bir doktorun hakları ve sorumlulukları hakkında bilgi edinin",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "Approbation için tüm formaliteleri tamamlayın",
          link: "/documents",
        },
      ],
      congratsMessage:
        "Çok iyi! 'Lisanslı Profesyonel' aşamasını tamamladınız. Final aşamasındasınız!",
    },
    {
      id: 9,
      title: "Efsane Doktor",
      description:
        "Bu, Approbation alan ve resmi olarak Almanya’da doktorluk yapmaya başlayan kişidir.",
      tasks: [
        {
          id: "9.1",
          title: "Resmi olarak bir hastanede çalışmaya başlayın",
          link: "/job-search",
        },
        { id: "9.2", title: "Uzun vadeli bir kariyer planı oluşturun" },
        {
          id: "9.3",
          title: "Mesleki konferanslara veya seminerlere katılın",
          link: "/job-search",
        },
        { id: "9.4", title: "Gerekirse, belirli bir alanda sertifika alın" },
      ],
      congratsMessage:
        "Tebrikler! 'Efsane Doktor' aşamasını tamamladınız. Almanya’daki profesyonel hayata hoş geldiniz!",
    },
  ],
  ar: [
    {
      id: 1,
      title: "المستكشف",
      avatar: "/assets/man-stage-1.png",
      description:
        "هذا هو الشخص الذي يبدأ رحلته للتو، يستكشف الفرص، يتعلم أساسيات الانتقال ومتطلبات الحصول على الترخيص، ويبدأ في جمع المستندات اللازمة.",
      tasks: [
        { id: "1.1", title: "البحث عن المناطق المحتملة للانتقال" },
        {
          id: "1.2",
          title: "التعرف على متطلبات الحصول على الترخيص",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "التعرف على متطلبات Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "التعرف على متطلبات Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "التعرف على متطلبات Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "التعرف على متطلبات Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "جمع المستندات", link: "/documents" },
        { id: "1.8", title: "دراسة اللغة", link: "/language-study" },
        {
          id: "1.9",
          title: "المشاركة في المحادثات الإقليمية",
          link: "/regional-chats",
        },
        {
          id: "1.10",
          title:
            "التحقق من المواقع الرسمية لغرف الأطباء للحصول على المعلومات المحدثة",
        },
      ],
      congratsMessage: "عمل رائع! لقد أكملت مرحلة 'المستكشف'. استمر في التقدم!",
    },
    {
      id: 2,
      title: "الوافد الجديد",
      description:
        "هذا هو الشخص الذي انتقل بالفعل إلى ألمانيا، أعد المستندات الأساسية ويواصل التكيف.",
      tasks: [
        {
          id: "2.2",
          title: "بدء جمع المستندات لغرفة الأطباء",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "البحث عن موثق لإعداد نسخ معتمدة",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "البحث عن مترجم لإعداد نسخ معتمدة",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "ترجمة الشهادة بواسطة مترجم معتمد",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "الحصول على معلومات حول متطلبات الترخيص في منطقتك",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "البحث عن غرف الأطباء في منطقتك والتحقق من قائمة المستندات المطلوبة",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "التسجيل في دورات اللغة (المستوى B1 أو أعلى)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "الانضمام إلى مجموعات أو مجتمعات الأطباء الإقليمية على Telegram أو Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "الحصول على شهادة عدم وجود سجل جنائي في بلدك (إذا لزم الأمر)",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "التواصل مع مستشار أو وكالة بشأن الترخيص (إذا لزم الأمر)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "البحث عن طبيب عائلي والتسجيل لديه" },
      ],
      congratsMessage:
        "تهانينا! لقد أكملت مرحلة 'الوافد الجديد'. الخطوة التالية قريبة!",
    },
    {
      id: 3,
      title: "جامع الوثائق",
      description:
        "هذا هو الشخص الذي يجمع، يُجهز، ويرسل المستندات للاعتراف بالشهادة، ويبدأ أيضًا التحضير لـ FSP.",
      tasks: [
        {
          id: "3.1",
          title: "جمع جميع المستندات الأكاديمية اللازمة",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "الحصول على شهادة عدم وجود سجل جنائي",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "الحصول على شهادة الخبرة المهنية (إذا لزم الأمر)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "ترجمة المستندات بواسطة مترجم معتمد",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "توثيق الترجمات ونسخ المستندات لدى كاتب العدل",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "إرسال المستندات إلى غرفة الأطباء للمراجعة",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title: "بدء التحضير لـ FSP مع التركيز على المصطلحات الطبية",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "البحث عن مصادر لتعلم المصطلحات الطبية (القواميس، التطبيقات، الأدلة)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title: "التعرف على صيغة FSP ومواد التحضير",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'جامع الوثائق'. أنت تقترب من هدفك!",
    },
    {
      id: 4,
      title: "مقاتل اللغة",
      description:
        "هذا هو الشخص الذي يستعد لـ FSP، يتعلم المصطلحات الطبية، يتدرب على الاستشارات الطبية، ويستعد للامتحان.",
      tasks: [
        {
          id: "4.1",
          title: "تعلم المصطلحات الطبية باستخدام القواميس والتطبيقات",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "تعلم جميع الاختصارات الطبية",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "ممارسة الحالات الطبية المناسبة لمنطقتك",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "ممارسة شرح الفحوصات الطبية",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "ممارسة أو مراجعة مجموعة أساسية من الأدوية باللغة الألمانية",
        },
        {
          id: "4.4",
          title: "ممارسة الاستشارات الطبية مع شريك",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "إعداد قوالب عبارات لشرح الإجراءات للمرضى",
        },
        {
          id: "4.8",
          title: "اجتياز اختبارات تجريبية أو التشاور مع مدرس",
        },
        {
          id: "4.9",
          title: "التسجيل لامتحان FSP",
          link: "/fsp-registration",
        },
      ],
      congratsMessage:
        "تهانينا! لقد أكملت مرحلة 'مقاتل اللغة'. خطوة أخرى نحو النجاح!",
    },
    {
      id: 5,
      title: "ماهر اللغة",
      description:
        "هذا هو الشخص الذي نجح في FSP، يبحث عن وظيفة، ويعمل على تحسين مهاراته اللغوية.",
      tasks: [
        { id: "5.1", title: "العمل على تحسين اللغة حتى تصل إلى المستوى C1" },
        { id: "5.2", title: "إعداد سيرة ذاتية وخطاب تغطية", link: "/resume" },
        { id: "5.3", title: "إعداد ملف يحتوي على المستندات المهنية" },
        {
          id: "5.4",
          title: "إرسال طلبات الوظائف إلى المستشفيات",
          link: "/job-search",
        },
        {
          id: "5.5",
          title: "التعرف على متطلبات الحصول على Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'ماهر اللغة'. النجاح في متناول اليد!",
    },
    {
      id: 6,
      title: "رائد ممارس",
      description:
        "هذا هو الشخص الذي يعمل بترخيص مؤقت، يكتسب الخبرة، ويستعد لامتحان KP.",
      tasks: [
        {
          id: "6.1",
          title: "العمل في مستشفى بترخيص مؤقت",
          link: "/job-search",
        },
        {
          id: "6.2",
          title: "التعرف على المعايير السريرية في ألمانيا (AWMF)",
          link: "https://www.awmf.org",
        },
        { id: "6.3", title: "بدء التحضير لامتحان KP", link: "/main_menu" },
        { id: "6.4", title: "تقديم طلب لامتحان KP" },
        { id: "6.5", title: "ممارسة الحالات النموذجية لامتحان KP" },
        {
          id: "6.6",
          title: "التعرف على أنواع الأسئلة التي قد تأتي في امتحان KP",
        },
        {
          id: "6.7",
          title: "البحث عن مجموعة تحضيرية لـ KP أو شريك للتعلم المشترك",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'رائد ممارس'. الخطوة التالية قريبة جدًا!",
    },
    {
      id: 7,
      title: "خبير الامتحانات",
      description:
        "هذا هو الشخص الذي يركز على التحضير لامتحان KP، يجري اختبارات تجريبية وينهي التحضير.",
      tasks: [
        { id: "7.1", title: "التعرف على صيغة وهيكل امتحان KP" },
        {
          id: "7.2",
          title:
            "التحضير للجزء النظري من الامتحان (المعرفة الطبية، علم الأدوية، البروتوكولات السريرية)",
        },
        { id: "7.3", title: "ممارسة الحالات الطبية التي قد تظهر في الامتحان" },
        { id: "7.4", title: "تنمية مهارات شرح الإجراءات الطبية للمرضى" },
        { id: "7.5", title: "اجتياز اختبارات تجريبية لتقييم جاهزيتك" },
        {
          id: "7.6",
          title: "الممارسة في ظروف امتحان تجريبي (مع شركاء أو مدرس)",
        },
        { id: "7.7", title: "التشاور مع مدرس لتقييم مستوى تحضيرك" },
        { id: "7.8", title: "التحقق من جاهزية جميع المستندات لامتحان KP" },
        {
          id: "7.9",
          title:
            "التأكد من توافر جميع المواد اللازمة ليوم الامتحان (بطاقة الهوية، أدوات الكتابة، تأكيد التسجيل)",
        },
        {
          id: "7.10",
          title:
            "في يوم الامتحان: الالتزام بالقواعد والبقاء واثقًا من معلوماتك",
        },
      ],
      congratsMessage:
        "تهانينا! لقد أكملت مرحلة 'خبير الامتحانات'. أنت على وشك الحصول على الترخيص الكامل!",
    },
    {
      id: 8,
      title: "محترف مرخص",
      description:
        "هذا هو الشخص الذي نجح في امتحان KP ويكمل الحصول على الترخيص.",
      tasks: [
        {
          id: "8.1",
          title: "التحقق من جاهزية المستندات للحصول على الترخيص",
          link: "/documents",
        },
        {
          id: "8.2",
          title: "تقديم طلب للحصول على الترخيص",
          link: "/approbation",
        },
        {
          id: "8.3",
          title: "التعرف على حقوق وواجبات الطبيب في ألمانيا",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "إكمال جميع الإجراءات للحصول على الترخيص",
          link: "/documents",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'محترف مرخص'. أنت في المرحلة النهائية!",
    },
    {
      id: 9,
      title: "طبيب أسطوري",
      description:
        "هذا هو الشخص الذي حصل على الترخيص وبدأ العمل رسميًا كطبيب في ألمانيا.",
      tasks: [
        { id: "9.1", title: "بدء العمل رسميًا في مستشفى", link: "/job-search" },
        { id: "9.2", title: "وضع خطة مهنية طويلة الأمد" },
        { id: "9.3", title: "المشاركة في المؤتمرات أو الندوات المهنية" },
        { id: "9.4", title: "الحصول على شهادة في تخصص معين (إذا لزم الأمر)" },
      ],
      congratsMessage:
        "تهانينا! لقد أكملت مرحلة 'طبيب أسطوري'. مرحبًا بك في الحياة المهنية في ألمانيا!",
    },
  ],
  pl: [
    {
      id: 1,
      title: "Odkrywca",
      avatar: "/assets/man-stage-1.png",
      description:
        "To osoba, która dopiero zaczyna swoją podróż, bada możliwości, uczy się podstaw przeprowadzki oraz wymagań dotyczących aprobaty, a także zaczyna zbierać niezbędne dokumenty.",
      tasks: [
        { id: "1.1", title: "Zbadać potencjalne regiony do przeprowadzki" },
        {
          id: "1.2",
          title: "Zapoznać się z wymaganiami dotyczącymi Approbation",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Zapoznać się z wymaganiami dotyczącymi Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Zapoznać się z wymaganiami dotyczącymi Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Zapoznać się z wymaganiami dotyczącymi Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Zapoznać się z wymaganiami dotyczącymi Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Zbieranie dokumentów", link: "/documents" },
        { id: "1.8", title: "Nauka języka", link: "/language-study" },
        {
          id: "1.9",
          title: "Dołącz do czatów regionalnych",
          link: "/regional-chats",
        },
        {
          id: "1.10",
          title:
            "Sprawdź oficjalne strony izb lekarskich, aby uzyskać aktualne informacje",
        },
      ],
      congratsMessage:
        "Świetna robota! Ukończyłeś etap 'Odkrywca'. Kontynuuj swoją podróż!",
    },
    {
      id: 2,
      title: "Nowo przybyły",
      description:
        "To osoba, która już przeprowadziła się do Niemiec, przygotowała niezbędne dokumenty i nadal się adaptuje.",
      tasks: [
        {
          id: "2.2",
          title: "Rozpocznij zbieranie dokumentów dla izby lekarskiej",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Znajdź notariusza do sporządzenia poświadczonych kopii",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Znajdź tłumacza do sporządzenia poświadczonych kopii",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Przetłumacz dyplom przez certyfikowanego tłumacza",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Uzyskaj informacje o wymaganiach dotyczących aprobaty w Twoim regionie",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Znajdź izby lekarskie w Twoim regionie i sprawdź listę wymaganych dokumentów",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Zapisz się na kursy językowe (na poziomie B1 lub wyższym)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Dołącz do grup regionalnych lub społeczności lekarzy na Telegramie lub Facebooku",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title:
            "Uzyskaj zaświadczenie o niekaralności w swoim kraju (jeśli potrzebne)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Skontaktuj się z konsultantem lub agencją w sprawie aprobaty (jeśli potrzebne)",
          link: "/personal-consultation",
        },
        {
          id: "2.12",
          title: "Znajdź lekarza rodzinnego i zarejestruj się u niego",
        },
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Nowo przybyły'. Następny krok jest blisko!",
    },
    {
      id: 3,
      title: "Zbieracz dokumentów",
      description:
        "To osoba, która aktywnie zbiera, przygotowuje i składa dokumenty w celu uznania dyplomu, a także zaczyna przygotowania do FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Zbierz wszystkie niezbędne dokumenty akademickie",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Uzyskaj zaświadczenie o niekaralności",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Uzyskaj zaświadczenie o doświadczeniu zawodowym (jeśli potrzebne)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Przetłumacz dokumenty przez certyfikowanego tłumacza",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Notarialnie poświadcz tłumaczenia oraz kopie dokumentów",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Prześlij dokumenty do izby lekarskiej w celu weryfikacji",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Rozpocznij przygotowania do FSP, koncentrując się na terminologii medycznej",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Znajdź źródła do nauki terminologii medycznej (słowniki, aplikacje, poradniki)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title:
            "Zapoznaj się z formatem FSP oraz materiałami przygotowawczymi",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Zbieracz dokumentów'. Jesteś coraz bliżej celu!",
    },
    {
      id: 4,
      title: "Wojownik języka",
      description:
        "To osoba, która przygotowuje się do FSP, uczy się terminologii medycznej, ćwiczy konsultacje lekarskie i przygotowuje się do egzaminu.",
      tasks: [
        {
          id: "4.1",
          title: "Naucz się terminologii medycznej przy pomocy słowników i aplikacji",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Poznaj wszystkie medyczne skróty",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Ćwicz przypadki medyczne związane z Twoim regionem",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Ćwicz wyjaśnianie badań medycznych",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Ćwicz lub powtórz podstawowy zestaw leków po niemiecku",
        },
        {
          id: "4.4",
          title: "Ćwicz konsultacje lekarskie z partnerem",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Twórz szablony fraz do wyjaśniania procedur pacjentom",
        },
        {
          id: "4.8",
          title: "Przystąp do próbnych egzaminów lub skonsultuj się z instruktorem",
        },
        {
          id: "4.9",
          title: "Zarejestruj się na FSP",
          link: "/fsp-registration"
        }
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Wojownik języka'. Jeszcze jeden krok do sukcesu!",
    },
    {
      id: 5,
      title: "Mistrz języka",
      description:
        "To osoba, która pomyślnie zdała FSP, przygotowuje się do poszukiwania pracy i doskonali swoje umiejętności językowe.",
      tasks: [
        { id: "5.1", title: "Ucz się języka do poziomu C1" },
        {
          id: "5.2",
          title: "Przygotuj CV i list motywacyjny",
          link: "/resume",
        },
        { id: "5.3", title: "Przygotuj portfolio z dokumentami zawodowymi" },
        {
          id: "5.4",
          title: "Wyślij aplikacje o pracę do szpitali",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Zapoznaj się z wymaganiami dotyczącymi uzyskania Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Mistrz języka'. Sukces jest blisko!",
    },
    {
      id: 6,
      title: "Praktyk-pionier",
      description:
        "To osoba, która pracuje z tymczasową licencją, zdobywa doświadczenie i przygotowuje się do egzaminu KP.",
      tasks: [
        {
          id: "6.1",
          title: "Pracuj w szpitalu z tymczasową licencją",
          link: "/job-search",
        },
        {
          id: "6.2",
          title: "Zapoznaj się ze standardami klinicznymi Niemiec (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Rozpocznij przygotowania do egzaminu KP",
          link: "/main-menu",
        },
        { id: "6.4", title: "Złóż wniosek o przystąpienie do egzaminu KP" },
        { id: "6.5", title: "Ćwicz typowe przypadki egzaminacyjne KP" },
        {
          id: "6.6",
          title:
            "Zapoznaj się z typami pytań, które mogą pojawić się na egzaminie KP",
        },
        {
          id: "6.7",
          title:
            "Znajdź grupę przygotowującą się do KP lub partnera do wspólnej nauki",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Praktyk-pionier'. Następny krok jest tuż za rogiem!",
    },
    {
      id: 7,
      title: "Ekspert egzaminów",
      description:
        "To osoba, która skupia się na przygotowaniu do egzaminu KP, wykonuje testy próbne i finalizuje swoje przygotowania.",
      tasks: [
        { id: "7.1", title: "Zapoznaj się z formatem i strukturą egzaminu KP" },
        {
          id: "7.2",
          title:
            "Przygotuj się do teoretycznej części egzaminu (wiedza medyczna, farmakologia, protokoły kliniczne)",
        },
        {
          id: "7.3",
          title:
            "Ćwicz przypadki kliniczne, które mogą pojawić się na egzaminie",
        },
        {
          id: "7.4",
          title:
            "Rozwijaj umiejętności wyjaśniania procedur medycznych pacjentom",
        },
        {
          id: "7.5",
          title: "Przystąp do próbnych testów, aby ocenić swoją gotowość",
        },
        {
          id: "7.6",
          title:
            "Ćwicz w warunkach symulowanego egzaminu (z partnerami lub instruktorem)",
        },
        {
          id: "7.7",
          title:
            "Skonsultuj się z instruktorem w celu oceny poziomu przygotowania",
        },
        {
          id: "7.8",
          title:
            "Sprawdź, czy wszystkie Twoje dokumenty do egzaminu KP są kompletne",
        },
        {
          id: "7.9",
          title:
            "Upewnij się, że posiadasz wszystkie niezbędne materiały na dzień egzaminu (dowód tożsamości, przybory do pisania, potwierdzenie rejestracji)",
        },
        {
          id: "7.10",
          title:
            "W dniu egzaminu: przestrzegaj zasad i zachowaj pewność siebie",
        },
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Ekspert egzaminów'. Jesteś prawie gotowy na pełną licencję!",
    },
    {
      id: 8,
      title: "Licencjonowany profesjonalista",
      description:
        "To osoba, która pomyślnie zdała egzamin KP i finalizuje proces uzyskania aprobaty.",
      tasks: [
        { id: "8.1", title: "Sprawdź, czy dokumenty do aprobaty są gotowe" },
        { id: "8.2", title: "Złóż wniosek o aprobatę", link: "/approbation" },
        {
          id: "8.3",
          title: "Zapoznaj się z prawami i obowiązkami lekarza w Niemczech",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "Ukończ wszystkie formalności związane z uzyskaniem aprobaty",
          link: "/documents",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Licencjonowany profesjonalista'. Jesteś w fazie końcowej!",
    },
    {
      id: 9,
      title: "Legendarny lekarz",
      description:
        "To osoba, która otrzymała aprobatę i oficjalnie rozpoczęła pracę jako lekarz w Niemczech.",
      tasks: [
        {
          id: "9.1",
          title: "Oficjalnie rozpocznij pracę w szpitalu",
          link: "/job-search",
        },
        { id: "9.2", title: "Opracuj długoterminowy plan kariery" },
        {
          id: "9.3",
          title: "Uczestnicz w konferencjach lub seminariach zawodowych",
          link: "/job-search",
        },
        {
          id: "9.4",
          title: "Uzyskaj certyfikat w specjalizacji (jeśli to konieczne)",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Legendarny lekarz'. Witamy w profesjonalnym życiu w Niemczech!",
    },
  ],
  es: [
    {
      id: 1,
      title: "Explorador",
      avatar: "/assets/man-stage-1.png",
      description:
        "Esta es una persona que está comenzando su viaje, explorando oportunidades, aprendiendo lo básico sobre la reubicación y recopilando los documentos necesarios.",
      tasks: [
        {
          id: "1.1",
          title: "Investigar las regiones potenciales para la reubicación",
        },
        {
          id: "1.2",
          title: "Familiarizarse con los requisitos para la Approbation",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Familiarizarse con los requisitos para Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Familiarizarse con los requisitos para Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Familiarizarse con los requisitos para Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Familiarizarse con los requisitos para el Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Reunir los documentos", link: "/documents" },
        { id: "1.8", title: "Estudiar el idioma", link: "/language-study" },
        {
          id: "1.9",
          title: "Unirse a chats regionales",
          link: "/regional-chats",
        },
        {
          id: "1.10",
          title:
            "Consultar los sitios oficiales de las cámaras médicas para obtener información actualizada",
        },
      ],
      congratsMessage:
        "¡Buen trabajo! Has completado la etapa 'Explorador'. ¡Sigue avanzando!",
    },
    {
      id: 2,
      title: "Recién llegado",
      description:
        "Esta es una persona que ya se ha mudado a Alemania, ha preparado los documentos principales y continúa adaptándose.",
      tasks: [
        {
          id: "2.2",
          title: "Comenzar a recopilar documentos para la cámara médica",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Encontrar un notario para realizar copias certificadas",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Encontrar un traductor para copias certificadas",
          link: "/translation",
        },
        {
          id: "2.5",
          title:
            "Hacer que tu diploma sea traducido por un traductor certificado",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Obtener información sobre los requisitos de Approbation en tu región",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Localizar las cámaras médicas de tu región y revisar la lista de documentos requeridos",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Inscribirse en cursos de idiomas (nivel B1 o superior)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Unirse a grupos regionales o comunidades de médicos en Telegram o Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title:
            "Obtener un certificado de antecedentes penales de tu país (si es necesario)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Contactar a un consultor o agencia respecto a la Approbation (si es necesario)",
          link: "/personal-consultation",
        },
        {
          id: "2.12",
          title: "Encontrar un médico de familia y registrarse con él",
        },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Recién llegado'. ¡El próximo paso está muy cerca!",
    },
    {
      id: 3,
      title: "Cazador de documentos",
      description:
        "Esta es una persona que recopila, prepara y envía activamente documentos para el reconocimiento de su título y comienza a prepararse para el FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Recopilar todos los documentos académicos necesarios",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Obtener un certificado de antecedentes penales",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Obtener un certificado de experiencia profesional (si es necesario)",
          link: "/documents",
        },
        {
          id: "3.4",
          title:
            "Hacer que los documentos sean traducidos por un traductor certificado",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Notarizar las traducciones y copias de los documentos",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Enviar los documentos a la cámara médica para su revisión",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Comenzar la preparación para el FSP con énfasis en la terminología médica",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Encontrar recursos para estudiar la terminología médica (diccionarios, aplicaciones, guías)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title:
            "Familiarizarse con el formato del FSP y los materiales preparatorios",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "¡Gran trabajo! Has completado la etapa 'Cazador de documentos'. ¡Estás más cerca de tu objetivo!",
    },
    {
      id: 4,
      title: "Luchador del idioma",
      description:
        "Esta es una persona que se está preparando para el FSP estudiando terminología médica, practicando consultas médicas y preparándose para el examen.",
      tasks: [
        {
          id: "4.1",
          title: "Estudie la terminología médica utilizando diccionarios y aplicaciones",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Aprenda todas las abreviaturas médicas",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Practique casos médicos relevantes para su región",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Practique explicar exámenes médicos",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Revise un conjunto básico de medicamentos en alemán",
        },
        {
          id: "4.4",
          title: "Practique consultas médicas con un compañero",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Cree plantillas de frases para explicar procedimientos a los pacientes",
        },
        {
          id: "4.8",
          title: "Realice exámenes simulados o consulte a un instructor",
        },
        {
          id: "4.9",
          title: "Regístrese para el FSP",
          link: "/fsp-registration",
        },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Luchador del idioma'. ¡Un paso más hacia el éxito!",
    },
    {
      id: 5,
      title: "Maestro del idioma",
      description:
        "Esta es una persona que ha pasado exitosamente el FSP, está buscando trabajo y mejora sus habilidades lingüísticas.",
      tasks: [
        {
          id: "5.1",
          title: "Estudiar el idioma hasta alcanzar el nivel C1",
          link: "/language-study",
        },
        {
          id: "5.2",
          title: "Preparar un currículum y una carta de presentación",
          link: "/resume",
        },
        {
          id: "5.3",
          title: "Preparar un portafolio de documentos profesionales",
        },
        {
          id: "5.4",
          title: "Enviar solicitudes de empleo a hospitales",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Familiarizarse con los requisitos para obtener la Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "¡Bien hecho! Has completado la etapa 'Maestro del idioma'. ¡El éxito está a tu alcance!",
    },
    {
      id: 6,
      title: "Pionero practicante",
      description:
        "Esta es una persona que trabaja con una licencia temporal, gana experiencia y se prepara para el examen KP.",
      tasks: [
        {
          id: "6.1",
          title: "Trabajar en un hospital con una licencia temporal",
          link: "/job-search",
        },
        {
          id: "6.2",
          title:
            "Familiarizarse con los estándares clínicos de Alemania (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Comenzar a prepararse para el examen KP",
          link: "/main-menu",
        },
        {
          id: "6.4",
          title: "Presentar una solicitud para realizar el examen KP",
          link: "/approbation",
        },
        { id: "6.5", title: "Practicar casos típicos para el examen KP" },
        {
          id: "6.6",
          title:
            "Aprender sobre los tipos de preguntas que pueden aparecer en el examen KP",
        },
        {
          id: "6.7",
          title:
            "Encontrar un grupo de estudio o un compañero para la preparación del examen KP",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "¡Excelente! Has completado la etapa 'Pionero practicante'. ¡El próximo paso está adelante!",
    },
    {
      id: 7,
      title: "Experto en exámenes",
      description:
        "Esta es una persona que se concentra en la preparación para el examen KP, realiza pruebas blancas y finaliza su preparación.",
      tasks: [
        {
          id: "7.1",
          title: "Familiarizarse con el formato y la estructura del examen KP",
          link: "/main-menu",
        },
        {
          id: "7.2",
          title:
            "Prepararse para la parte teórica del examen (conocimientos médicos, farmacología, protocolos clínicos)",
          link: "/exam-explanations",
        },
        {
          id: "7.3",
          title: "Practicar casos clínicos que puedan aparecer en el examen",
          link: "/cases",
        },
        {
          id: "7.4",
          title:
            "Desarrollar habilidades para explicar procedimientos médicos a los pacientes",
        },
        {
          id: "7.5",
          title: "Realizar pruebas simuladas para evaluar tu preparación",
          link: "/exam-explanations",
        },
        {
          id: "7.6",
          title:
            "Practicar en condiciones de examen simulado (con compañeros o un instructor)",
          link: "/exam-explanations",
        },
        {
          id: "7.7",
          title:
            "Consultar con un instructor para evaluar tu nivel de preparación",
          link: "/personal-consultation",
        },
        {
          id: "7.8",
          title:
            "Verificar que todos tus documentos para el examen KP estén en orden",
          link: "/main-menu",
        },
        {
          id: "7.9",
          title:
            "Asegurarse de tener los materiales necesarios para el día del examen (identificación, instrumentos de escritura, confirmación de registro)",
          link: "/main-menu",
        },
        {
          id: "7.10",
          title:
            "El día del examen: seguir las reglas y mantener la confianza en tus conocimientos",
          link: "/main-menu",
        },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Experto en exámenes'. ¡Estás casi listo para la licencia completa!",
    },
    {
      id: 8,
      title: "Profesional licenciado",
      description:
        "Esta es una persona que ha pasado exitosamente el examen KP y finaliza el proceso de obtención de la Approbation.",
      tasks: [
        {
          id: "8.1",
          title:
            "Verificar que los documentos para la Approbation estén listos",
          link: "/documents",
        },
        {
          id: "8.2",
          title: "Presentar la solicitud para la Approbation",
          link: "/approbation",
        },
        {
          id: "8.3",
          title:
            "Familiarizarse con los derechos y responsabilidades de un médico en Alemania",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "Completar todas las formalidades para obtener la Approbation",
          link: "/documents",
        },
      ],
      congratsMessage:
        "¡Bravo! Has completado la etapa 'Profesional licenciado'. ¡Estás en la fase final!",
    },
    {
      id: 9,
      title: "Médico legendario",
      description:
        "Esta es una persona que ha obtenido la Approbation y ha comenzado a trabajar oficialmente como médico en Alemania.",
      tasks: [
        {
          id: "9.1",
          title: "Comenzar oficialmente a trabajar en un hospital",
          link: "/job-search",
        },
        {
          id: "9.2",
          title: "Desarrollar un plan de carrera a largo plazo",
          link: "/personal-consultation",
        },
        {
          id: "9.3",
          title: "Participar en conferencias o seminarios profesionales",
          link: "/job-search",
        },
        {
          id: "9.4",
          title: "Obtener certificación en una especialidad (si es necesario)",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Médico legendario'. ¡Bienvenido a la vida profesional en Alemania!",
    },
  ],
  fr: [
    {
      id: 1,
      title: "Explorateur",
      avatar: "/assets/man-stage-1.png",
      description:
        "C'est une personne qui débute son voyage, explore des opportunités, apprend les bases du déménagement et commence à rassembler les documents nécessaires.",
      tasks: [
        {
          id: "1.1",
          title: "Rechercher les régions potentielles pour le déménagement",
        },
        {
          id: "1.2",
          title: "Se familiariser avec les exigences pour l'approbation",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Se familiariser avec les exigences pour la Gleichwertigkeit",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title:
            "Se familiariser avec les exigences pour le Vergleichsgutachten",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Se familiariser avec les exigences pour la Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Se familiariser avec les exigences pour le Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Rassembler les documents", link: "/documents" },
        { id: "1.8", title: "Étudier la langue", link: "/language-study" },
        {
          id: "1.9",
          title: "Rejoindre les chats régionaux",
          link: "/regional-chats",
        },
        {
          id: "1.10",
          title:
            "Vérifier les sites officiels des chambres médicales pour obtenir des informations à jour",
        },
      ],
      congratsMessage:
        "Excellent travail ! Vous avez terminé l'étape 'Explorateur'. Continuez ainsi !",
    },
    {
      id: 2,
      title: "Nouveau venu",
      description:
        "C'est une personne qui a déjà déménagé en Allemagne, préparé les documents principaux et continue de s'adapter.",
      tasks: [
        {
          id: "2.2",
          title:
            "Commencer à rassembler les documents pour l'ordre des médecins",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Trouver un notaire pour créer des copies certifiées",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Trouver un traducteur pour des copies certifiées",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Faire traduire votre diplôme par un traducteur certifié",
          link: "/translation",
        },
        {
          id: "2.6",
          title:
            "Obtenir des informations sur les exigences d'approbation dans votre région",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Localiser les ordres des médecins de votre région et vérifier la liste des documents requis",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "S'inscrire à des cours de langue (niveau B1 ou supérieur)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Rejoindre des groupes régionaux ou des communautés de médecins sur Telegram ou Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Obtenir un certificat de casier judiciaire (si nécessaire)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Contacter un consultant ou une agence concernant l'approbation (si nécessaire)",
          link: "/personal-consultation",
        },
        {
          id: "2.12",
          title: "Trouver un médecin de famille et s'inscrire chez lui",
        },
      ],
      congratsMessage:
        "Félicitations ! Vous avez terminé l'étape 'Nouveau venu'. L'étape suivante est proche !",
    },
    {
      id: 3,
      title: "Chasseur de documents",
      description:
        "C'est une personne qui collecte, prépare et soumet activement des documents pour la reconnaissance de son diplôme et commence à se préparer pour le FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Rassembler tous les documents académiques nécessaires",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Obtenir un extrait de casier judiciaire",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Obtenir un certificat d'expérience professionnelle (si nécessaire)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Faire traduire les documents par un traducteur certifié",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Faire certifier les traductions et copies des documents",
          link: "/notarization",
        },
        {
          id: "3.6",
          title:
            "Soumettre les documents à l'ordre des médecins pour vérification",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Commencer la préparation pour le FSP en se concentrant sur la terminologie médicale",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Trouver des ressources pour étudier la terminologie médicale (dictionnaires, applications, guides)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title:
            "Se familiariser avec le format du FSP et les documents préparatoires",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Bravo ! Vous avez terminé l'étape 'Chasseur de documents'. Vous vous rapprochez de votre objectif !",
    },
    {
      id: 4,
      title: "Guerrier de la langue",
      description:
        "C'est une personne qui se prépare au FSP en étudiant la terminologie médicale, en pratiquant des consultations médicales et en se préparant à l'examen.",
      tasks: [
        {
          id: "4.1",
          title: "Étudiez la terminologie médicale à l'aide de dictionnaires et d'applications",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Apprenez toutes les abréviations médicales",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Pratiquez des cas médicaux pertinents pour votre région",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Entraînez-vous à expliquer des examens médicaux",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Révisez un ensemble de médicaments de base en allemand",
        },
        {
          id: "4.4",
          title: "Pratiquez des consultations médicales avec un partenaire",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Créez des modèles de phrases pour expliquer des procédures aux patients",
        },
        {
          id: "4.8",
          title: "Passez des examens blancs ou consultez un instructeur",
        },
        {
          id: "4.9",
          title: "Inscrivez-vous au FSP",
          link: "/fsp-registration",
        },
      ],
      congratsMessage:
        "Félicitations ! Vous avez terminé l'étape 'Guerrier de la langue'. Un pas de plus vers la réussite !",
    },
    {
      id: 5,
      title: "Maître de la langue",
      description:
        "C'est une personne qui a réussi le FSP, recherche un emploi et améliore ses compétences linguistiques.",
      tasks: [
        {
          id: "5.1",
          title: "Étudier la langue jusqu'à atteindre le niveau C1",
          link: "/language-study",
        },
        {
          id: "5.2",
          title: "Préparer un CV et une lettre de motivation",
          link: "/resume",
        },
        { id: "5.3", title: "Créer un portfolio de documents professionnels" },
        {
          id: "5.4",
          title: "Envoyer des candidatures aux hôpitaux",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Se familiariser avec les exigences pour obtenir la Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Bravo ! Vous avez terminé l'étape 'Maître de la langue'. Le succès est à portée de main !",
    },
    {
      id: 6,
      title: "Pionnier pratiquant",
      description:
        "C'est une personne qui travaille avec une licence temporaire, acquiert de l'expérience et se prépare pour l'examen KP.",
      tasks: [
        {
          id: "6.1",
          title: "Travailler dans un hôpital avec une licence temporaire",
          link: "/job-search",
        },
        {
          id: "6.2",
          title:
            "Se familiariser avec les normes cliniques en Allemagne (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Commencer la préparation pour l'examen KP",
          link: "/main-menu",
        },
        {
          id: "6.4",
          title: "Soumettre une demande pour passer l'examen KP",
          link: "/approbation",
        },
        { id: "6.5", title: "Pratiquer des cas typiques pour l'examen KP" },
        {
          id: "6.6",
          title:
            "Apprendre les types de questions qui peuvent apparaître à l'examen KP",
        },
        {
          id: "6.7",
          title:
            "Trouver un groupe d'étude ou un partenaire pour la préparation du KP",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Excellent ! Vous avez terminé l'étape 'Pionnier pratiquant'. Le prochain pas est devant vous !",
    },
    {
      id: 7,
      title: "Expert des examens",
      description:
        "C'est une personne qui se concentre sur la préparation pour l'examen KP, effectue des tests blancs et finalise sa préparation.",
      tasks: [
        {
          id: "7.1",
          title:
            "Se familiariser avec le format et la structure de l'examen KP",
          link: "/main-menu",
        },
        {
          id: "7.2",
          title:
            "Préparer la partie théorique de l'examen (connaissances médicales, pharmacologie, protocoles cliniques)",
          link: "/exam-explanations",
        },
        {
          id: "7.3",
          title:
            "Pratiquer des cas cliniques susceptibles d'apparaître à l'examen",
          link: "/cases",
        },
        {
          id: "7.4",
          title:
            "Développer des compétences pour expliquer les procédures médicales aux patients",
        },
        {
          id: "7.5",
          title: "Passer des tests blancs pour évaluer votre préparation",
          link: "/exam-explanations",
        },
        {
          id: "7.6",
          title:
            "Pratiquer dans des conditions d'examen simulé (avec des partenaires ou un instructeur)",
          link: "/exam-explanations",
        },
        {
          id: "7.7",
          title:
            "Consulter un instructeur pour évaluer votre niveau de préparation",
          link: "/personal-consultation",
        },
        {
          id: "7.8",
          title:
            "Vérifier que tous vos documents pour l'examen KP sont complets",
          link: "/main-menu",
        },
        {
          id: "7.9",
          title:
            "S'assurer de disposer des matériaux nécessaires pour le jour de l'examen (pièce d'identité, outils d'écriture, confirmation d'inscription)",
          link: "/main-menu",
        },
        {
          id: "7.10",
          title:
            "Le jour de l'examen : respecter les règles et rester confiant dans vos connaissances",
          link: "/main-menu",
        },
      ],
      congratsMessage:
        "Félicitations ! Vous avez terminé l'étape 'Expert des examens'. Vous êtes presque prêt pour la licence complète !",
    },
    {
      id: 8,
      title: "Professionnel licencié",
      description:
        "C'est une personne qui a réussi l'examen KP et finalise le processus d'obtention de l'Approbation.",
      tasks: [
        {
          id: "8.1",
          title:
            "Vérifier que tous les documents pour l'approbation sont prêts",
          link: "/documents",
        },
        {
          id: "8.2",
          title: "Soumettre la demande pour l'approbation",
          link: "/approbation",
        },
        {
          id: "8.3",
          title:
            "Se familiariser avec les droits et responsabilités d'un médecin en Allemagne",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "Compléter toutes les formalités pour obtenir l'approbation",
          link: "/documents",
        },
      ],
      congratsMessage:
        "Bravo ! Vous avez terminé l'étape 'Professionnel licencié'. Vous êtes en phase finale !",
    },
    {
      id: 9,
      title: "Médecin légendaire",
      description:
        "C'est une personne qui a obtenu l'Approbation et a commencé à travailler officiellement comme médecin en Allemagne.",
      tasks: [
        {
          id: "9.1",
          title: "Commencer officiellement à travailler dans un hôpital",
          link: "/job-search",
        },
        {
          id: "9.2",
          title: "Développer un plan de carrière à long terme",
          link: "/personal-consultation",
        },
        {
          id: "9.3",
          title: "Participer à des conférences ou séminaires professionnels",
          link: "/job-search",
        },
        {
          id: "9.4",
          title:
            "Obtenir une certification dans une spécialité (si nécessaire)",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Félicitations ! Vous avez terminé l'étape 'Médecin légendaire'. Bienvenue dans la vie professionnelle en Allemagne !",
    },
  ],
  el: [
    {
      id: 1,
      title: "Εξερευνητής",
      avatar: "/assets/man-stage-1.png",
      description:
        "Αυτός είναι κάποιος που μόλις ξεκινάει το ταξίδι του, εξερευνά ευκαιρίες, μαθαίνει τα βασικά για τη μετακόμιση και τις απαιτήσεις για την έγκριση, και αρχίζει να συγκεντρώνει τα απαραίτητα έγγραφα.",
      tasks: [
        { id: "1.1", title: "Ερευνήστε πιθανούς προορισμούς για μετακόμιση" },
        {
          id: "1.2",
          title: "Γνωρίστε τις απαιτήσεις για την έγκριση",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Μάθετε τις απαιτήσεις για την αναγνώριση ισοδυναμίας",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Μάθετε τις απαιτήσεις για τη συγκριτική αξιολόγηση",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Μάθετε τις απαιτήσεις για την επαγγελματική άδεια",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Μάθετε τις απαιτήσεις για την εξειδικευμένη γλωσσική εξέταση",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Συγκεντρώστε έγγραφα", link: "/documents" },
        { id: "1.8", title: "Μελετήστε τη γλώσσα", link: "/language-study" },
        { id: "1.9", title: "Συμμετέχετε σε περιφερειακές συνομιλίες", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "Ελέγξτε τις επίσημες ιστοσελίδες των ιατρικών συλλόγων για ενημερωμένες πληροφορίες",
        },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Εξερευνητής'. Συνεχίστε την πορεία σας!",
    },
    {
      id: 2,
      title: "Νεοεισερχόμενος",
      description:
        "Αυτός είναι κάποιος που έχει ήδη μετακομίσει στη Γερμανία, έχει ετοιμάσει τα βασικά έγγραφα και συνεχίζει να προσαρμόζεται.",
      tasks: [
        {
          id: "2.2",
          title: "Ξεκινήστε να συγκεντρώνετε έγγραφα για το ιατρικό σύλλογο",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Βρείτε έναν συμβολαιογράφο για πιστοποιημένες αντιγραφές",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Βρείτε έναν μεταφραστή για πιστοποιημένες αντιγραφές",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Ζητήστε τη μετάφραση του πτυχίου σας από πιστοποιημένο μεταφραστή",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Μάθετε τις απαιτήσεις έγκρισης στην περιοχή σας",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Εντοπίστε τους περιφερειακούς ιατρικούς συλλόγους και ελέγξτε τη λίστα απαιτούμενων εγγράφων",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Εγγραφείτε σε μαθήματα γλώσσας (Επίπεδο B1 ή υψηλότερο)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title:
            "Συμμετέχετε σε περιφερειακές ομάδες ή κοινότητες ιατρών στο Telegram ή στο Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title:
            "Λάβετε πιστοποιητικό για την απουσία ποινικών μητρώων (αν απαιτείται)",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Επικοινωνήστε με σύμβουλο ή πρακτορείο για θέματα έγκρισης (αν απαιτείται)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Βρείτε γιατρό οικογένειας και εγγραφείτε" },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Νεοεισερχόμενος'. Το επόμενο βήμα είναι κοντά!",
    },
    {
      id: 3,
      title: "Κυνηγός Εγγράφων",
      description:
        "Αυτός είναι κάποιος που συλλέγει, προετοιμάζει και υποβάλλει ενεργά έγγραφα για την αναγνώριση του πτυχίου του και ξεκινά να προετοιμάζεται για το FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Συγκεντρώστε όλα τα απαραίτητα ακαδημαϊκά έγγραφα",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Λάβετε πιστοποιητικό απουσίας ποινικών μητρώων",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Λάβετε πιστοποιητικό επαγγελματικής εμπειρίας (αν απαιτείται)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Ζητήστε μετάφραση των εγγράφων από πιστοποιημένο μεταφραστή",
          link: "/translation",
        },
        {
          id: "3.5",
          title:
            "Πιστοποιήστε νομικά τις μεταφράσεις και τα αντίγραφα των εγγράφων",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Υποβάλετε τα έγγραφα στον ιατρικό σύλλογο για αξιολόγηση",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Ξεκινήστε την προετοιμασία για το FSP με έμφαση στην ιατρική ορολογία",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Βρείτε πηγές για τη μελέτη ιατρικής ορολογίας (λεξικά, εφαρμογές, οδηγούς)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title: "Γνωρίστε τη μορφή του FSP και τα υλικά προετοιμασίας",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Τέλεια! Ολοκληρώσατε το στάδιο 'Κυνηγός Εγγράφων'. Είστε πιο κοντά στον στόχο σας!",
    },
    {
      id: 4,
      title: "Μαχητής της Γλώσσας",
      description:
        "Αυτός είναι κάποιος που προετοιμάζεται για το FSP με τη μελέτη ιατρικής ορολογίας, εξάσκηση σε ιατρικές συμβουλές και προετοιμασία για την εξέταση.",
      tasks: [
        {
          id: "4.1",
          title:
            "Μελετήστε την ιατρική ορολογία χρησιμοποιώντας λεξικά και εφαρμογές",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Μάθετε όλες τις ιατρικές συντομογραφίες",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Εξασκηθείτε σε ιατρικές περιπτώσεις σχετικές με την περιοχή σας",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Εξασκηθείτε στην εξήγηση ιατρικών εξετάσεων",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Επανάλάβετε ένα βασικό σύνολο φαρμάκων στα γερμανικά",
        },
        {
          id: "4.4",
          title: "Εξασκηθείτε σε ιατρικές συμβουλές με συνεργάτη",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Δημιουργήστε πρότυπα φράσεων για την εξήγηση διαδικασιών στους ασθενείς",
        },
        {
          id: "4.8",
          title: "Παρακολουθήστε δοκιμαστικές εξετάσεις ή συμβουλευτείτε έναν εκπαιδευτή",
        },
        {
          id: "4.9",
          title: "Εγγραφείτε στο FSP",
          link: "/fsp-registration",
        },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Μαχητής της Γλώσσας'. Ένα ακόμη βήμα προς την επιτυχία!",
    },
    {
      id: 5,
      title: "Μάστερ της Γλώσσας",
      description:
        "Αυτός είναι κάποιος που έχει περάσει με επιτυχία το FSP, προετοιμάζεται για την αναζήτηση εργασίας και βελτιώνει τις γλωσσικές του δεξιότητες.",
      tasks: [
        {
          id: "5.1",
          title: "Μελετήστε τη γλώσσα μέχρι να φτάσετε στο επίπεδο C1",
          link: "/language-study",
        },
        {
          id: "5.2",
          title: "Προετοιμάστε βιογραφικό και συνοδευτική επιστολή",
          link: "/resume",
        },
        {
          id: "5.3",
          title: "Συγκεντρώστε ένα portfolio επαγγελματικών εγγράφων",
        },
        {
          id: "5.4",
          title: "Στείλτε αιτήσεις εργασίας σε νοσοκομεία",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Γνωρίστε τις απαιτήσεις για την απόκτηση της Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Μπράβο! Ολοκληρώσατε το στάδιο 'Μάστερ της Γλώσσας'. Η επιτυχία είναι κοντά!",
    },
    {
      id: 6,
      title: "Πρωτοπόρος στην Πρακτική",
      description:
        "Αυτός είναι κάποιος που εργάζεται με προσωρινή άδεια, αποκτά εμπειρία και προετοιμάζεται για τις εξετάσεις KP.",
      tasks: [
        {
          id: "6.1",
          title: "Εργαστείτε σε νοσοκομείο με προσωρινή άδεια",
          link: "/job-search",
        },
        {
          id: "6.2",
          title:
            "Γνωρίστε τα κλινικά πρότυπα της Γερμανίας (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Ξεκινήστε την προετοιμασία για το KP",
          link: "/main_menu",
        },
        { id: "6.4", title: "Υποβάλετε αίτηση για το KP" },
        { id: "6.5", title: "Εξασκηθείτε σε τυπικές περιπτώσεις KP" },
        {
          id: "6.6",
          title:
            "Μάθετε για τους τύπους ερωτήσεων που μπορεί να περιέχει το KP",
        },
        {
          id: "6.7",
          title:
            "Βρείτε ομάδα μελέτης ή συνεργάτη για την προετοιμασία του KP",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Εξαιρετικά! Ολοκληρώσατε το στάδιο 'Πρωτοπόρος στην Πρακτική'. Το επόμενο βήμα είναι πολύ κοντά!",
    },
    {
      id: 7,
      title: "Ειδικός στις Εξετάσεις",
      description:
        "Αυτός είναι κάποιος που επικεντρώνεται στην προετοιμασία για το KP, κάνει δοκιμαστικές εξετάσεις και ολοκληρώνει την προετοιμασία του.",
      tasks: [
        {
          id: "7.1",
          title:
            "Γνωρίστε τη μορφή και τη δομή της εξέτασης KP",
          link: "/main_menu",
        },
        {
          id: "7.2",
          title:
            "Προετοιμαστείτε για το θεωρητικό μέρος (ιατρικές γνώσεις, φαρμακολογία, κλινικά πρωτόκολλα)",
          link: "/exam-explanations",
        },
        {
          id: "7.3",
          title:
            "Εξασκηθείτε σε κλινικές περιπτώσεις που μπορεί να εμφανιστούν στην εξέταση",
          link: "/cases",
        },
        {
          id: "7.4",
          title:
            "Αναπτύξτε δεξιότητες εξήγησης ιατρικών διαδικασιών στους ασθενείς",
        },
        {
          id: "7.5",
          title: "Κάντε δοκιμαστικές εξετάσεις για να αξιολογήσετε την προετοιμασία σας",
          link: "/exam-explanations",
        },
        {
          id: "7.6",
          title:
            "Εξασκηθείτε υπό συνθήκες προσομοίωσης εξετάσεων (με συνεργάτες ή εκπαιδευτή)",
          link: "/exam-explanations",
        },
        {
          id: "7.7",
          title:
            "Συμβουλευτείτε έναν εκπαιδευτή για να αξιολογήσετε το επίπεδο προετοιμασίας σας",
          link: "/personal-consultation",
        },
        {
          id: "7.8",
          title:
            "Ελέγξτε ότι όλα τα έγγραφα για το KP είναι πλήρη",
          link: "/main_menu",
        },
        {
          id: "7.9",
          title:
            "Εξασφαλίστε ότι διαθέτετε τα απαραίτητα υλικά για την ημέρα της εξέτασης (ταυτότητα, στυλό, επιβεβαίωση εγγραφής)",
          link: "/main_menu",
        },
        {
          id: "7.10",
          title:
            "Την ημέρα της εξέτασης: τηρήστε τους κανόνες και διατηρήστε την αυτοπεποίθησή σας",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Ειδικός στις Εξετάσεις'. Είστε σχεδόν έτοιμοι για πλήρη άδεια!",
    },
    {
      id: 8,
      title: "Εξουσιοδοτημένος Επαγγελματίας",
      description:
        "Αυτός είναι κάποιος που έχει περάσει το KP και ολοκληρώνει τη διαδικασία λήψης της έγκρισης.",
      tasks: [
        {
          id: "8.1",
          title:
            "Ελέγξτε ότι όλα τα έγγραφα για την έγκριση είναι έτοιμα",
          link: "/documents",
        },
        { id: "8.2", title: "Υποβάλετε αίτηση για έγκριση", link: "/approbation" },
        {
          id: "8.3",
          title:
            "Γνωρίστε τα δικαιώματα και τις υποχρεώσεις ενός γιατρού στη Γερμανία",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "Ολοκληρώστε όλες τις τυπικές διαδικασίες για την έγκριση",
          link: "/documents",
        },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Εξουσιοδοτημένος Επαγγελματίας'. Είστε στο τελικό στάδιο!",
    },
    {
      id: 9,
      title: "Γιατρός του Θρύλου",
      description:
        "Αυτός είναι κάποιος που έχει λάβει την έγκριση και ξεκίνησε επίσημα να εργάζεται ως γιατρός στη Γερμανία.",
      tasks: [
        { id: "9.1", title: "Ξεκινήστε επίσημα να εργάζεστε σε νοσοκομείο", link: "/job-search" },
        { id: "9.2", title: "Αναπτύξτε ένα μακροπρόθεσμο σχέδιο καριέρας" },
        { id: "9.3", title: "Συμμετέχετε σε επαγγελματικά συνέδρια ή σεμινάρια", link: "/job-search" },
        { id: "9.4", title: "Αποκτήστε πιστοποίηση σε μια ειδικότητα (αν χρειάζεται)", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Γιατρός του Θρύλου'. Καλώς ήρθατε στην επαγγελματική ζωή στη Γερμανία!",
    },
  ],

  // ------------------ New Romanian Translations ------------------
  ro: [
    {
      id: 1,
      title: "Explorator",
      avatar: "/assets/man-stage-1.png",
      description:
        "Aceasta este o persoană care își începe abia călătoria, explorează oportunități, învață elementele de bază ale relocării și cerințele pentru aprobare și începe să adune documentele necesare.",
      tasks: [
        { id: "1.1", title: "Cercetează regiunile potențiale pentru relocare" },
        {
          id: "1.2",
          title: "Familiarizează-te cu cerințele pentru aprobare",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Familiarizează-te cu cerințele pentru recunoașterea echivalenței",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Familiarizează-te cu cerințele pentru evaluarea comparativă",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Familiarizează-te cu cerințele pentru permisul profesional",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Familiarizează-te cu cerințele pentru examenul de limbă specializat",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Adună documente", link: "/documents" },
        { id: "1.8", title: "Studiu de limbă", link: "/language-study" },
        { id: "1.9", title: "Alătură-te discuțiilor regionale", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "Consultă site-urile oficiale ale camerelor medicale pentru informații actualizate",
        },
      ],
      congratsMessage:
        "Bravo! Ai finalizat stadiul 'Explorator'. Continuă să înaintezi!",
    },
    {
      id: 2,
      title: "Nou-venit",
      description:
        "Aceasta este o persoană care s-a mutat deja în Germania, și-a pregătit documentele esențiale și continuă să se adapteze.",
      tasks: [
        {
          id: "2.2",
          title: "Începe să aduni documente pentru camera medicală",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Găsește un notar pentru realizarea copiilor certificate",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Găsește un traducător pentru copiile certificate",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Solicită traducerea diplomei de către un traducător certificat",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Obține informații despre cerințele de aprobare în regiunea ta",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Identifică camerele medicale regionale și verifică lista documentelor necesare",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Înscrie-te la cursuri de limbă (nivel B1 sau superior)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Alătură-te grupurilor sau comunităților de medici regionale",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Obține, dacă este necesar, un certificat de cazier judiciar",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Contactează un consultant sau o agenție privind aprobarea (dacă este necesar)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Găsește un medic de familie și înregistrează-te la el" },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Nou-venit'. Următorul pas este aproape!",
    },
    {
      id: 3,
      title: "Vânător de documente",
      description:
        "Aceasta este o persoană care adună, pregătește și depune activ documentele pentru recunoașterea diplomei și începe să se pregătească pentru FSP.",
      tasks: [
        {
          id: "3.1",
          title: "Colectează toate documentele academice necesare",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Obține un certificat de cazier judiciar",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Obține un certificat de experiență profesională (dacă este necesar)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Solicită traducerea documentelor de către un traducător certificat",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Certifică prin notar copiile și traducerile documentelor",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Depune documentele la camera medicală pentru verificare",
          link: "/medical-chambers",
        },
        {
          id: "3.7",
          title:
            "Începe pregătirea pentru FSP cu accent pe terminologia medicală",
          link: "/all-medical-terminology",
        },
        {
          id: "3.8",
          title:
            "Găsește resurse pentru studierea terminologiei medicale (dicționare, aplicații, ghiduri)",
          link: "/main_menu",
        },
        {
          id: "3.9",
          title:
            "Familiarizează-te cu formatul FSP și materialele de pregătire",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Excelent! Ai finalizat stadiul 'Vânător de documente'. Ești tot mai aproape de obiectivul tău!",
    },
    {
      id: 4,
      title: "Luptător de limbă",
      description:
        "Aceasta este o persoană care se pregătește pentru FSP, învață terminologia medicală, exersează consultații medicale și se pregătește pentru examen.",
      tasks: [
        {
          id: "4.1",
          title:
            "Învață terminologia medicală cu ajutorul dicționarelor și aplicațiilor",
          link: "/all-medical-terminology",
        },
        {
          id: "4.2",
          title: "Învață toate abrevierile medicale",
          link: "/all-abbreviations",
        },
        {
          id: "4.3",
          title: "Exersează cazuri medicale relevante pentru regiunea ta",
          link: "/cases",
        },
        {
          id: "4.6",
          title: "Exersează explicarea investigațiilor medicale",
          link: "/exam-explanations",
        },
        {
          id: "4.7",
          title: "Repetă setul de medicamente de bază în germană",
        },
        {
          id: "4.4",
          title: "Exersează consultații medicale cu un partener",
          link: "/simulation-partner",
        },
        {
          id: "4.5",
          title: "Creează modele de fraze pentru a explica proceduri pacienților",
        },
        {
          id: "4.8",
          title: "Susține teste simulare sau consultă-te cu un instructor",
        },
        {
          id: "4.9",
          title: "Înscrie-te la FSP",
          link: "/fsp-registration",
        },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Luptător de limbă'. Încă un pas către succes!",
    },
    {
      id: 5,
      title: "Maestru al limbii",
      description:
        "Aceasta este o persoană care a trecut cu succes FSP, se pregătește pentru căutarea unui loc de muncă și își îmbunătățește abilitățile de limbă.",
      tasks: [
        {
          id: "5.1",
          title: "Studiază limba până când atingi nivelul C1",
          link: "/language-study",
        },
        {
          id: "5.2",
          title: "Pregătește un CV și o scrisoare de intenție",
          link: "/resume",
        },
        { id: "5.3", title: "Creează un portofoliu de documente profesionale" },
        {
          id: "5.4",
          title: "Trimite cereri de angajare la spitale",
          link: "/job-search",
        },
        {
          id: "5.5",
          title:
            "Familiarizează-te cu cerințele pentru obținerea permisului profesional (Berufserlaubnis)",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Bravo! Ai finalizat stadiul 'Maestru al limbii'. Succesul este aproape!",
    },
    {
      id: 6,
      title: "Pionier practicant",
      description:
        "Aceasta este o persoană care lucrează cu o licență temporară, câștigă experiență și se pregătește pentru examenul KP.",
      tasks: [
        {
          id: "6.1",
          title: "Lucrează într-un spital cu licență temporară",
          link: "/job-search",
        },
        {
          id: "6.2",
          title:
            "Familiarizează-te cu standardele clinice din Germania (AWMF)",
          link: "https://www.awmf.org",
        },
        {
          id: "6.3",
          title: "Începe pregătirea pentru examenul KP",
          link: "/main_menu",
        },
        { id: "6.4", title: "Depune o cerere pentru examenul KP", link: "/approbation" },
        { id: "6.5", title: "Exersează cazuri tipice pentru examenul KP" },
        {
          id: "6.6",
          title:
            "Învață tipurile de întrebări ce pot apărea la examenul KP",
        },
        {
          id: "6.7",
          title:
            "Găsește un grup de studiu sau un partener pentru pregătirea KP",
          link: "/simulation-partner",
        },
      ],
      congratsMessage:
        "Excelent! Ai finalizat stadiul 'Pionier practicant'. Următorul pas este chiar lângă tine!",
    },
    {
      id: 7,
      title: "Expert în examene",
      description:
        "Aceasta este o persoană concentrată pe pregătirea pentru examenul KP, susține teste simulare și își finalizează pregătirea.",
      tasks: [
        {
          id: "7.1",
          title:
            "Familiarizează-te cu formatul și structura examenului KP",
          link: "/main_menu",
        },
        {
          id: "7.2",
          title:
            "Pregătește-te pentru partea teoretică a examenului (cunoștințe medicale, farmacologie, protocoale clinice)",
          link: "/exam-explanations",
        },
        {
          id: "7.3",
          title: "Exersează cazuri clinice care pot apărea la examen",
          link: "/cases",
        },
        {
          id: "7.4",
          title:
            "Dezvoltă abilități pentru a explica procedurile medicale pacienților",
        },
        {
          id: "7.5",
          title: "Susține teste simulate pentru a-ți evalua pregătirea",
          link: "/exam-explanations",
        },
        {
          id: "7.6",
          title:
            "Exersează în condiții de examen simulat (cu parteneri sau instructor)",
          link: "/exam-explanations",
        },
        {
          id: "7.7",
          title: "Consultă-te cu un instructor pentru evaluarea pregătirii",
          link: "/personal-consultation",
        },
        {
          id: "7.8",
          title:
            "Verifică că toate documentele pentru examenul KP sunt complete",
          link: "/main_menu",
        },
        {
          id: "7.9",
          title:
            "Asigură-te că dispui de materialele necesare pentru ziua examenului (buletin, instrumente de scris, confirmare de înscriere)",
          link: "/main_menu",
        },
        {
          id: "7.10",
          title:
            "În ziua examenului: respectă regulile și păstrează-ți încrederea în cunoștințele tale",
          link: "/main_menu",
        },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Expert în examene'. Ești aproape de obținerea licenței complete!",
    },
    {
      id: 8,
      title: "Profesional licențiat",
      description:
        "Aceasta este o persoană care a trecut cu succes examenul KP și finalizează procesul de obținere a aprobării.",
      tasks: [
        {
          id: "8.1",
          title: "Verifică dacă documentele pentru aprobare sunt gata",
          link: "/documents",
        },
        { id: "8.2", title: "Depune cererea pentru aprobare", link: "/approbation" },
        {
          id: "8.3",
          title:
            "Familiarizează-te cu drepturile și obligațiile unui medic în Germania",
          link: "/medical-chambers",
        },
        {
          id: "8.4",
          title: "Finalizează toate formalitățile pentru aprobare",
          link: "/documents",
        },
      ],
      congratsMessage:
        "Bravo! Ai finalizat stadiul 'Profesional licențiat'. Ești în faza finală!",
    },
    {
      id: 9,
      title: "Medic legendar",
      description:
        "Aceasta este o persoană care a obținut aprobare și a început oficial să lucreze ca medic în Germania.",
      tasks: [
        { id: "9.1", title: "Începe oficial să lucrezi într-un spital", link: "/job-search" },
        { id: "9.2", title: "Dezvoltă un plan de carieră pe termen lung" },
        {
          id: "9.3",
          title: "Participă la conferințe sau seminarii profesionale",
          link: "/job-search",
        },
        {
          id: "9.4",
          title: "Obține certificare într-o specialitate (dacă este necesar)",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Medic legendar'. Bine ai venit în viața profesională din Germania!",
    },
  ],
};
