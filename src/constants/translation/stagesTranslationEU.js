export const APPROBATION_STAGES_EU = {
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
        "This is someone actively gathering, preparing, and submitting documents for diploma recognition.",
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
          title:
            "Submit the documents to the responsible medical chamber for evaluation",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'Document Hunter' stage. You are getting closer to your goal!",
    },
    {
      id: 4,
      title: "FSP Registration",
      description:
        "This is someone who registers for the Fachsprachprüfung. Complete the registration process, pay any necessary fees, and prepare the required documentation for the exam. Once you pass the FSP, you will automatically receive Approbation.",
      tasks: [
        {
          id: "4.1",
          title: "Review the registration requirements and deadlines",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Fill out and submit the Fachsprachprüfung registration form",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Pay the registration fees",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Confirm your exam schedule",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'FSP Registration' stage. Prepare for the test!",
    },
    {
      id: 5,
      title: "Language Fighter",
      description:
        "This is someone enhancing their communication and clinical language skills in preparation for professional practice.",
      tasks: [
        {
          id: "5.1",
          title: "Study medical terminology using dictionaries and apps",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Learn all medical abbreviations",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Practice discussing medical cases relevant to your region",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Practice medical consultations with a partner",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Create phrase templates for explaining procedures to patients",
        },
        {
          id: "5.6",
          title:
            "Enhance your clinical communication skills through workshops or role-playing",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Congratulations! You have completed the 'Language Fighter' stage. One more step towards success!",
    },
    {
      id: 6,
      title: "Language Master",
      description:
        "This is someone who has achieved a high level of language proficiency and is preparing to search for a job.",
      tasks: [
        { id: "6.1", title: "Study the language until you reach C1" },
        {
          id: "6.2",
          title: "Prepare a resume and cover letter",
          link: "/resume",
        },
        { id: "6.3", title: "Prepare a portfolio of professional documents" },
        {
          id: "6.4",
          title: "Send job applications to hospitals",
          link: "/job-search",
        },
        {
          id: "6.5",
          title:
            "Familiarize yourself with the requirements for obtaining a Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'Language Master' stage. Success is near!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "This is someone who, after successfully passing the Fachsprachprüfung and automatically receiving Approbation, begins a trial work period to gain practical experience.",
      tasks: [
        {
          id: "7.1",
          title: "Begin supervised trial work in a hospital or clinic",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Update your resume and prepare for job interviews",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Familiarize yourself with workplace regulations and expectations",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Join professional networks and mentorship programs",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Great! You have completed the 'Proberuf' stage. The next step is near!",
    },
    {
      id: 8,
      title: "Legendary Doctor",
      description:
        "This is someone who has completed their trial work and has officially started working as a doctor in Germany.",
      tasks: [
        { id: "8.1", title: "Officially start working in a hospital or clinic", link: "/job-search" },
        { id: "8.2", title: "Develop a long-term career plan" },
        { id: "8.3", title: "Participate in professional conferences or seminars", link: "/job-search" },
        { id: "8.4", title: "Obtain certification in a specialty (if required)", link: "/berufserlaubnis" },
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
        { id: "1.1", title: "Erforschen Sie potenzielle Regionen für den Umzug" },
        {
          id: "1.2",
          title: "Machen Sie sich mit den Anforderungen an die Approbation vertraut",
          link: "/approbation",
        },
        {
          id: "1.3",
          title:
            "Machen Sie sich mit den Anforderungen an die Anerkennung der Gleichwertigkeit vertraut",
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
        { id: "1.7", title: "Sammeln Sie Dokumente", link: "/documents" },
        { id: "1.8", title: "Sprachstudium", link: "/language-study" },
        { id: "1.9", title: "Treten Sie regionalen Chats bei", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "Überprüfen Sie die offiziellen Websites der Ärztekammern für aktuelle Informationen",
        },
      ],
      congratsMessage:
        "Tolle Arbeit! Sie haben die Stufe 'Entdecker' abgeschlossen. Weiter so!",
    },
    {
      id: 2,
      title: "Neuankömmling",
      description:
        "Dies ist jemand, der bereits nach Deutschland gezogen ist, die wesentlichen Dokumente vorbereitet hat und sich weiter anpasst.",
      tasks: [
        {
          id: "2.2",
          title: "Beginnen Sie mit der Sammlung von Dokumenten für die Ärztekammer",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Finden Sie einen Notar, um beglaubigte Kopien erstellen zu lassen",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Finden Sie einen Übersetzer für beglaubigte Kopien",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Lassen Sie Ihr Diplom von einem zertifizierten Übersetzer übersetzen",
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
            "Finden Sie Ihre regionalen Ärztekammern und überprüfen Sie die Liste der erforderlichen Dokumente",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Melden Sie sich für Sprachkurse (Niveau B1 oder höher) an",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Treten Sie regionalen Gruppen oder Arztgemeinschaften bei",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Holen Sie, falls erforderlich, ein Führungszeugnis ein",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Kontaktieren Sie einen Berater oder eine Agentur bezüglich der Approbation (falls nötig)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Finden Sie einen Hausarzt und registrieren Sie sich bei ihm" },
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Neuankömmling' abgeschlossen. Der nächste Schritt ist nahe!",
    },
    {
      id: 3,
      title: "Dokumentenjäger",
      description:
        "Dies ist jemand, der aktiv alle erforderlichen Dokumente zur Anerkennung seines Diploms sammelt, vorbereitet und einreicht.",
      tasks: [
        {
          id: "3.1",
          title: "Sammeln Sie alle notwendigen akademischen Dokumente",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Holen Sie ein Führungszeugnis ein",
          link: "/documents",
        },
        {
          id: "3.3",
          title:
            "Holen Sie, falls erforderlich, ein Zeugnis über die berufliche Erfahrung ein",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Lassen Sie die Dokumente von einem zertifizierten Übersetzer übersetzen",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Beglaubigen Sie die Übersetzungen und Kopien der Dokumente",
          link: "/notarization",
        },
        {
          id: "3.6",
          title:
            "Reichen Sie die Dokumente zur Bewertung bei der zuständigen Ärztekammer ein",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Toll! Sie haben die Stufe 'Dokumentenjäger' abgeschlossen. Sie nähern sich Ihrem Ziel!",
    },
    {
      id: 4,
      title: "FSP-Anmeldung",
      description:
        "Dies ist jemand, der sich für die Fachsprachprüfung anmeldet. Schließen Sie den Anmeldeprozess ab, zahlen Sie die erforderlichen Gebühren und bereiten Sie die notwendigen Unterlagen für die Prüfung vor. Sobald Sie die FSP bestehen, erhalten Sie automatisch die Approbation.",
      tasks: [
        {
          id: "4.1",
          title: "Überprüfen Sie die Anmeldeanforderungen und Fristen",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Füllen Sie das Anmeldeformular für die Fachsprachprüfung aus und senden Sie es ein",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Zahlen Sie die Anmeldegebühren",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Bestätigen Sie Ihren Prüfungsplan",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Toll! Sie haben die Stufe 'FSP-Anmeldung' abgeschlossen. Bereiten Sie sich auf die Prüfung vor!",
    },
    {
      id: 5,
      title: "Sprachkämpfer",
      description:
        "Dies ist jemand, der seine kommunikativen und klinischen Sprachfähigkeiten zur Vorbereitung auf die berufliche Praxis verbessert.",
      tasks: [
        {
          id: "5.1",
          title: "Lernen Sie medizinische Terminologie mithilfe von Wörterbüchern und Apps",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Lernen Sie alle medizinischen Abkürzungen",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Üben Sie, medizinische Fälle, die für Ihre Region relevant sind, zu besprechen",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Üben Sie medizinische Konsultationen mit einem Partner",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Erstellen Sie Satzvorlagen, um Verfahren den Patienten zu erklären",
        },
        {
          id: "5.6",
          title: "Verbessern Sie Ihre klinische Kommunikationsfähigkeit durch Workshops oder Rollenspiele",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Sprachkämpfer' abgeschlossen. Ein weiterer Schritt zum Erfolg!",
    },
    {
      id: 6,
      title: "Sprachmeister",
      description:
        "Dies ist jemand, der ein hohes Sprachniveau erreicht hat und sich auf die Jobsuche vorbereitet.",
      tasks: [
        { id: "6.1", title: "Lernen Sie die Sprache, bis Sie Niveau C1 erreichen" },
        {
          id: "6.2",
          title: "Bereiten Sie einen Lebenslauf und ein Anschreiben vor",
          link: "/resume",
        },
        { id: "6.3", title: "Stellen Sie ein Portfolio mit beruflichen Dokumenten zusammen" },
        {
          id: "6.4",
          title: "Senden Sie Bewerbungen an Krankenhäuser",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Informieren Sie sich über die Anforderungen zur Erlangung der Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Toll! Sie haben die Stufe 'Sprachmeister' abgeschlossen. Der Erfolg ist nah!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "Dies ist jemand, der nach erfolgreichem Bestehen der Fachsprachprüfung und dem automatischen Erhalt der Approbation mit einer Probearbeitsphase beginnt, um praktische Erfahrungen zu sammeln.",
      tasks: [
        {
          id: "7.1",
          title: "Beginnen Sie mit einer beaufsichtigten Probearbeit in einem Krankenhaus oder einer Klinik",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Aktualisieren Sie Ihren Lebenslauf und bereiten Sie sich auf Vorstellungsgespräche vor",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Machen Sie sich mit den Arbeitsvorschriften und Erwartungen vertraut",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Treten Sie professionellen Netzwerken und Mentoring-Programmen bei",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Toll! Sie haben die Stufe 'Proberuf' abgeschlossen. Der nächste Schritt ist nahe!",
    },
    {
      id: 8,
      title: "Legendärer Arzt",
      description:
        "Dies ist jemand, der seine Probearbeit abgeschlossen hat und offiziell als Arzt in Deutschland arbeitet.",
      tasks: [
        { id: "8.1", title: "Beginnen Sie offiziell mit der Arbeit in einem Krankenhaus oder einer Klinik", link: "/job-search" },
        { id: "8.2", title: "Entwickeln Sie einen langfristigen Karriereplan" },
        { id: "8.3", title: "Nehmen Sie an Fachkonferenzen oder Seminaren teil", link: "/job-search" },
        { id: "8.4", title: "Erwerben Sie, falls erforderlich, eine Zertifizierung in einem Fachgebiet", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "Herzlichen Glückwunsch! Sie haben die Stufe 'Legendärer Arzt' abgeschlossen. Willkommen im Berufsleben in Deutschland!",
    },
  ],

  uk: [
    {
      id: 1,
      title: "Дослідник",
      avatar: "/assets/man-stage-1.png",
      description:
        "Це той, хто тільки починає свій шлях, досліджує можливості, вивчає основи переїзду та вимоги для апробації, і починає збирати необхідні документи.",
      tasks: [
        { id: "1.1", title: "Дослідити потенційні регіони для переїзду" },
        {
          id: "1.2",
          title: "Ознайомтеся з вимогами для апробації",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Ознайомтеся з вимогами щодо визнання рівноцінності",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Ознайомтеся з вимогами до порівняльної експертизи",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Ознайомтеся з вимогами для Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Ознайомтеся з вимогами до Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Збирайте документи", link: "/documents" },
        { id: "1.8", title: "Вивчення мови", link: "/language-study" },
        { id: "1.9", title: "Приєднуйтеся до регіональних чатів", link: "/regional-chats" },
        {
          id: "1.10",
          title: "Перевірте офіційні сайти лікарських палат для отримання актуальної інформації",
        },
      ],
      congratsMessage:
        "Чудова робота! Ви завершили етап 'Дослідник'. Продовжуйте рух вперед!",
    },
    {
      id: 2,
      title: "Новоприбулий",
      description:
        "Це той, хто вже переїхав до Німеччини, підготував необхідні документи і продовжує адаптуватися.",
      tasks: [
        {
          id: "2.2",
          title: "Почніть збирати документи для лікарської палати",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Знайдіть нотаріуса для створення завірених копій",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Знайдіть перекладача для завірених копій",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Дайте перекласти свій диплом сертифікованим перекладачем",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Отримайте інформацію про вимоги до апробації у вашому регіоні",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Знайдіть лікарські палати вашого регіону та перевірте перелік необхідних документів",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Запишіться на мовні курси (рівень B1 або вище)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Приєднуйтеся до регіональних груп або спільнот лікарів у Telegram чи Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Отримайте, якщо потрібно, довідку про несудимість",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Зверніться до консультанта або агентства щодо апробації (за потреби)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Знайдіть сімейного лікаря та зареєструйтеся у нього" },
      ],
      congratsMessage:
        "Вітаємо! Ви завершили етап 'Новоприбулий'. Наступний крок вже близько!",
    },
    {
      id: 3,
      title: "Збирач документів",
      description:
        "Це той, хто активно збирає, готує та подає документи для визнання диплому.",
      tasks: [
        {
          id: "3.1",
          title: "Зберіть усі необхідні академічні документи",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Отримайте довідку про несудимість",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "Отримайте, якщо потрібно, довідку про професійний досвід",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Дайте завірити переклади документів сертифікованим перекладачем",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Нотаріально завірте переклади та копії документів",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Надішліть документи до відповідної лікарської палати для оцінки",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Збирач документів'. Ви наближаєтесь до мети!",
    },
    {
      id: 4,
      title: "Реєстрація на FSP",
      description:
        "Це той, хто реєструється на Fachsprachprüfung. Завершіть процес реєстрації, сплатіть необхідні збори та підготуйте потрібні документи для іспиту. Після успішного складання FSP ви автоматично отримуєте апробацію.",
      tasks: [
        {
          id: "4.1",
          title: "Перевірте вимоги до реєстрації та строки подачі",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Заповніть та надішліть форму реєстрації на Fachsprachprüfung",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Сплатіть реєстраційні збори",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Підтвердіть розклад іспиту",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Реєстрація на FSP'. Готуйтеся до іспиту!",
    },
    {
      id: 5,
      title: "Борець за мову",
      description:
        "Це той, хто покращує свої комунікативні та клінічні мовні навички для підготовки до професійної практики.",
      tasks: [
        {
          id: "5.1",
          title: "Вивчайте медичну термінологію за допомогою словників та додатків",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Вивчіть усі медичні абревіатури",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Практикуйте обговорення медичних випадків, актуальних для вашого регіону",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Практикуйте лікарські консультації з партнером",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Створіть шаблони фраз для пояснення процедур пацієнтам",
        },
        {
          id: "5.6",
          title:
            "Покращуйте свої клінічні комунікативні навички через майстер-класи або рольові ігри",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Вітаємо! Ви завершили етап 'Борець за мову'. Ще один крок до успіху!",
    },
    {
      id: 6,
      title: "Майстер мови",
      description:
        "Це той, хто досяг високого рівня володіння мовою та готується до пошуку роботи.",
      tasks: [
        { id: "6.1", title: "Вивчайте мову, поки не досягнете рівня C1" },
        {
          id: "6.2",
          title: "Підготуйте резюме та супровідний лист",
          link: "/resume",
        },
        { id: "6.3", title: "Складіть портфоліо професійних документів" },
        {
          id: "6.4",
          title: "Надсилайте заявки на роботу до лікарень",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Ознайомтеся з вимогами для отримання Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Майстер мови'. Успіх вже близько!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "Це той, хто, після успішного складання Fachsprachprüfung та автоматичного отримання апробації, розпочинає пробну роботу для набуття практичного досвіду.",
      tasks: [
        {
          id: "7.1",
          title: "Розпочніть під наглядом пробну роботу у лікарні або клініці",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Оновіть своє резюме та підготуйтеся до співбесід",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Ознайомтеся з правилами роботи та очікуваннями",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Приєднуйтеся до професійних мереж та програм наставництва",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Чудово! Ви завершили етап 'Proberuf'. Наступний крок вже близько!",
    },
    {
      id: 8,
      title: "Легендарний лікар",
      description:
        "Це той, хто завершив пробну роботу та офіційно розпочав роботу лікарем у Німеччині.",
      tasks: [
        { id: "8.1", title: "Офіційно розпочніть роботу у лікарні або клініці", link: "/job-search" },
        { id: "8.2", title: "Розробіть довгостроковий план кар'єри" },
        { id: "8.3", title: "Беріть участь у професійних конференціях або семінарах", link: "/job-search" },
        { id: "8.4", title: "Отримайте сертифікацію за спеціальністю (за потреби)", link: "/berufserlaubnis" },
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
        "Это тот, кто только начинает свой путь, исследует возможности, изучает основы переезда и требования для получения аппробации, и начинает собирать необходимые документы.",
      tasks: [
        { id: "1.1", title: "Изучите возможные регионы для переезда" },
        {
          id: "1.2",
          title: "Ознакомьтесь с требованиями для аппробации",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Ознакомьтесь с требованиями для признания равнозначности",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Ознакомьтесь с требованиями для сравнительной экспертизы",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Ознакомьтесь с требованиями для Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Ознакомьтесь с требованиями для Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Соберите документы", link: "/documents" },
        { id: "1.8", title: "Изучайте язык", link: "/language-study" },
        { id: "1.9", title: "Присоединяйтесь к региональным чатам", link: "/regional-chats" },
        {
          id: "1.10",
          title: "Проверьте официальные сайты медицинских палат для получения актуальной информации",
        },
      ],
      congratsMessage:
        "Отличная работа! Вы завершили этап 'Исследователь'. Продолжайте двигаться вперёд!",
    },
    {
      id: 2,
      title: "Новоприбывший",
      description:
        "Это тот, кто уже переехал в Германию, подготовил необходимые документы и продолжает адаптироваться.",
      tasks: [
        {
          id: "2.2",
          title: "Начните собирать документы для медицинской палаты",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Найдите нотариуса для составления заверенных копий",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Найдите переводчика для заверенных копий",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Пусть ваш диплом будет переведен сертифицированным переводчиком",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Получите информацию о требованиях аппробации в вашем регионе",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Найдите региональные медицинские палаты и ознакомьтесь с перечнем необходимых документов",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Запишитесь на языковые курсы (уровень B1 или выше)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Присоединяйтесь к региональным группам или сообществам врачей в Telegram или Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Получите, если необходимо, справку о несудимости",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Свяжитесь с консультантом или агентством по вопросам аппробации (если необходимо)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Найдите семейного врача и зарегистрируйтесь у него" },
      ],
      congratsMessage:
        "Поздравляем! Вы завершили этап 'Новоприбывший'. Следующий шаг уже близко!",
    },
    {
      id: 3,
      title: "Охотник за документами",
      description:
        "Это тот, кто активно собирает, подготавливает и подаёт документы для признания диплома.",
      tasks: [
        {
          id: "3.1",
          title: "Соберите все необходимые академические документы",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Получите справку о несудимости",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "Получите, если требуется, справку о профессиональном опыте",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Пусть документы будут переведены сертифицированным переводчиком",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Нотариально заверьте переводы и копии документов",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Подайте документы в ответственную медицинскую палату для оценки",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Охотник за документами'. Вы приближаетесь к своей цели!",
    },
    {
      id: 4,
      title: "Регистрация на FSP",
      description:
        "Это тот, кто регистрируется на Fachsprachprüfung. Завершите процесс регистрации, оплатите необходимые сборы и подготовьте требуемые документы для экзамена. После успешной сдачи FSP вы автоматически получите аппробацию.",
      tasks: [
        {
          id: "4.1",
          title: "Проверьте требования к регистрации и сроки",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Заполните и отправьте регистрационную форму для Fachsprachprüfung",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Оплатите регистрационные сборы",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Подтвердите расписание экзамена",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Регистрация на FSP'. Готовьтесь к экзамену!",
    },
    {
      id: 5,
      title: "Боец за язык",
      description:
        "Это тот, кто улучшает свои коммуникативные и клинические языковые навыки для подготовки к профессиональной практике.",
      tasks: [
        {
          id: "5.1",
          title: "Изучайте медицинскую терминологию с помощью словарей и приложений",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Выучите все медицинские аббревиатуры",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Практикуйтесь в обсуждении медицинских случаев, актуальных для вашего региона",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Практикуйте врачебные консультации с партнером",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Создайте шаблоны фраз для объяснения процедур пациентам",
        },
        {
          id: "5.6",
          title: "Улучшайте свои клинические коммуникативные навыки через семинары или ролевые игры",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Поздравляем! Вы завершили этап 'Боец за язык'. Еще один шаг к успеху!",
    },
    {
      id: 6,
      title: "Мастер языка",
      description:
        "Это тот, кто достиг высокого уровня владения языком и готовится к поиску работы.",
      tasks: [
        { id: "6.1", title: "Изучайте язык до уровня C1" },
        {
          id: "6.2",
          title: "Подготовьте резюме и сопроводительное письмо",
          link: "/resume",
        },
        { id: "6.3", title: "Соберите портфолио профессиональных документов" },
        {
          id: "6.4",
          title: "Отправляйте заявки на работу в больницы",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Ознакомьтесь с требованиями для получения Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Мастер языка'. Успех близок!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "Это тот, кто после успешной сдачи Fachsprachprüfung и автоматического получения аппробации начинает пробный период работы для приобретения практического опыта.",
      tasks: [
        {
          id: "7.1",
          title: "Начните под наблюдением пробную работу в больнице или клинике",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Обновите резюме и подготовьтесь к собеседованиям",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Ознакомьтесь с правилами работы и ожиданиями",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Присоединяйтесь к профессиональным сетям и программам наставничества",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Отлично! Вы завершили этап 'Proberuf'. Следующий шаг уже близко!",
    },
    {
      id: 8,
      title: "Легендарный врач",
      description:
        "Это тот, кто завершил пробный период работы и официально начал работать врачом в Германии.",
      tasks: [
        { id: "8.1", title: "Официально начните работать в больнице или клинике", link: "/job-search" },
        { id: "8.2", title: "Разработайте долгосрочный карьерный план" },
        { id: "8.3", title: "Принимайте участие в профессиональных конференциях или семинарах", link: "/job-search" },
        { id: "8.4", title: "Получите сертификат по специальности (если необходимо)", link: "/berufserlaubnis" },
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
        "Bu, yolculuğuna yeni başlayan, fırsatları araştıran, taşınmanın temellerini ve Approbation gereksinimlerini öğrenen, ve gerekli belgeleri toplamaya başlayan kişidir.",
      tasks: [
        { id: "1.1", title: "Taşınma için potansiyel bölgeleri araştırın" },
        {
          id: "1.2",
          title: "Approbation gereksinimleriyle tanışın",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Gleichwertigkeit gereksinimleriyle tanışın",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Vergleichsgutachten gereksinimleriyle tanışın",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Berufserlaubnis gereksinimleriyle tanışın",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Fachsprachprüfung gereksinimleriyle tanışın",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Belgeleri toplayın", link: "/documents" },
        { id: "1.8", title: "Dil çalışması yapın", link: "/language-study" },
        { id: "1.9", title: "Bölgesel sohbetlere katılın", link: "/regional-chats" },
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
        "Bu, Almanya'ya taşınmış, temel belgelerini hazırlamış ve uyum sağlamaya devam eden kişidir.",
      tasks: [
        {
          id: "2.2",
          title: "Tıbbi oda için belgeleri toplamaya başlayın",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Onaylı kopyalar için noter bulun",
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
            "Bölgenizdeki Approbation gereksinimleri hakkında bilgi edinin",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title:
            "Bölgenizdeki tıbbi odaları bulun ve gerekli belge listesini kontrol edin",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Dil kurslarına (B1 veya üstü) kaydolun",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Telegram veya Facebook’taki bölgesel gruplara katılın",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Gerekirse, ülkenizde sabıka kaydı belgesi alın",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Approbation konusunda danışman veya ajans ile iletişime geçin (gerekirse)",
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
        "Bu, diplomanın tanınması için gerekli belgeleri aktif olarak toplayan, hazırlayan ve sunan kişidir.",
      tasks: [
        {
          id: "3.1",
          title: "Gerekli tüm akademik belgeleri toplayın",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Sabıka kaydı alın",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "Gerekirse, mesleki deneyim belgesi alın",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Belgeleri onaylı tercüman ile çevirtin",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Belgelerin onaylı kopyalarını noterden tasdik ettirin",
          link: "/notarization",
        },
        {
          id: "3.6",
          title:
            "Belgeleri ilgili tıbbi odaya değerlendirme için gönderin",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Harika! 'Belge Avcısı' aşamasını tamamladınız. Hedefinize bir adım daha yaklaştınız!",
    },
    {
      id: 4,
      title: "FSP Kayıt",
      description:
        "Bu, Fachsprachprüfung'ye kayıt yaptıran kişidir. Kayıt sürecini tamamlayın, gerekli ücretleri ödeyin ve sınav için gerekli belgeleri hazırlayın. FSP'yi başarıyla geçtikten sonra otomatik olarak Approbation alacaksınız.",
      tasks: [
        {
          id: "4.1",
          title: "Kayıt gereksinimlerini ve son başvuru tarihlerini kontrol edin",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Fachsprachprüfung kayıt formunu doldurup gönderin",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Kayıt ücretlerini ödeyin",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Sınav takviminizi onaylayın",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Harika! 'FSP Kayıt' aşamasını tamamladınız. Sınava hazırlanın!",
    },
    {
      id: 5,
      title: "Dil Savaşçısı",
      description:
        "Bu, mesleki uygulama için iletişim ve klinik dil becerilerini geliştiren kişidir.",
      tasks: [
        {
          id: "5.1",
          title: "Tıbbi terminolojiyi sözlükler ve uygulamalar kullanarak öğrenin",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Tüm tıbbi kısaltmaları öğrenin",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Bölgenize uygun tıbbi vakaları tartışma pratiği yapın",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Bir partnerle tıbbi danışma pratiği yapın",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Hastalara prosedürleri açıklamak için kalıp ifadeler oluşturun",
        },
        {
          id: "5.6",
          title: "Atölye çalışmaları veya rol oyunları ile klinik iletişim becerilerinizi geliştirin",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Tebrikler! 'Dil Savaşçısı' aşamasını tamamladınız. Başarıya bir adım daha yaklaştınız!",
    },
    {
      id: 6,
      title: "Dil Ustası",
      description:
        "Bu, yüksek dil yeterliliğine ulaşmış ve iş aramaya hazırlanan kişidir.",
      tasks: [
        { id: "6.1", title: "Dili C1 seviyesine ulaşana kadar çalışın" },
        {
          id: "6.2",
          title: "Özgeçmiş ve ön yazı hazırlayın",
          link: "/resume",
        },
        { id: "6.3", title: "Profesyonel belgelerden oluşan bir portföy hazırlayın" },
        {
          id: "6.4",
          title: "Hastanelere iş başvuruları gönderin",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Berufserlaubnis gereksinimlerini öğrenin",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Harika! 'Dil Ustası' aşamasını tamamladınız. Başarı yakın!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "Bu, FSP'yi başarıyla geçip otomatik olarak Approbation aldıktan sonra, pratik deneyim kazanmak için deneme çalışma dönemine başlayan kişidir.",
      tasks: [
        {
          id: "7.1",
          title: "Bir hastane veya klinikte denetimli deneme çalışmasına başlayın",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Özgeçmişinizi güncelleyin ve iş görüşmelerine hazırlanın",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "İş yeri kurallarını ve beklentileri öğrenin",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Profesyonel ağlara ve mentorluk programlarına katılın",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Harika! 'Proberuf' aşamasını tamamladınız. Sonraki adım yaklaşıyor!",
    },
    {
      id: 8,
      title: "Efsane Doktor",
      description:
        "Bu, deneme çalışmalarını tamamlayıp resmi olarak Almanya'da doktor olarak çalışmaya başlayan kişidir.",
      tasks: [
        { id: "8.1", title: "Bir hastane veya klinikte resmi olarak çalışmaya başlayın", link: "/job-search" },
        { id: "8.2", title: "Uzun vadeli bir kariyer planı oluşturun" },
        { id: "8.3", title: "Profesyonel konferanslara veya seminerlere katılın", link: "/job-search" },
        { id: "8.4", title: "Gerekirse, bir alanda sertifika edinin", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "Tebrikler! 'Efsane Doktor' aşamasını tamamladınız. Almanya'da profesyonel hayata hoş geldiniz!",
    },
  ],

  ar: [
    {
      id: 1,
      title: "المستكشف",
      avatar: "/assets/man-stage-1.png",
      description:
        "هذا هو الشخص الذي يبدأ رحلته للتو، يستكشف الفرص، يتعلم أساسيات الانتقال ومتطلبات الحصول على الترخيص، ويبدأ في جمع الوثائق اللازمة.",
      tasks: [
        { id: "1.1", title: "ابحث عن المناطق المحتملة للانتقال" },
        {
          id: "1.2",
          title: "تعرّف على متطلبات الحصول على الترخيص",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "تعرّف على متطلبات الاعتراف بالتكافؤ",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "تعرّف على متطلبات التقويم المقارن",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "تعرّف على متطلبات رخصة المزاولة",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "تعرّف على متطلبات الامتحان اللغوي المتخصص",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "اجمع الوثائق", link: "/documents" },
        { id: "1.8", title: "ادرس اللغة", link: "/language-study" },
        { id: "1.9", title: "انضم إلى الدردشات الإقليمية", link: "/regional-chats" },
        {
          id: "1.10",
          title:
            "تحقق من المواقع الرسمية لغرف الأطباء للحصول على أحدث المعلومات",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'المستكشف'. استمر في التقدم!",
    },
    {
      id: 2,
      title: "الوافد الجديد",
      description:
        "هذا هو الشخص الذي انتقل بالفعل إلى ألمانيا، وأعد الوثائق الأساسية، ويستمر في التأقلم.",
      tasks: [
        {
          id: "2.2",
          title: "ابدأ في جمع الوثائق لغرفة الأطباء",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "ابحث عن موثق لإعداد النسخ المصدقة",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "ابحث عن مترجم لإعداد النسخ المصدقة",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "قم بترجمة شهادتك بواسطة مترجم معتمد",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "احصل على معلومات حول متطلبات الترخيص في منطقتك",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "حدد غرف الأطباء في منطقتك وراجع قائمة الوثائق المطلوبة",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "سجل في دورات لغة (المستوى B1 أو أعلى)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "انضم إلى المجموعات الإقليمية للأطباء على Telegram أو Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "احصل على شهادة عدم سوابق جنائية من بلدك (إذا لزم الأمر)",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "تواصل مع مستشار أو وكالة بخصوص الترخيص (إذا لزم الأمر)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "ابحث عن طبيب عائلي وسجل لديه" },
      ],
      congratsMessage:
        "مبروك! لقد أكملت مرحلة 'الوافد الجديد'. الخطوة التالية قريبة!",
    },
    {
      id: 3,
      title: "جامع الوثائق",
      description:
        "هذا هو الشخص الذي يجمع ويعد ويقدم الوثائق للاعتراف بشهادته.",
      tasks: [
        {
          id: "3.1",
          title: "اجمع كل الوثائق الأكاديمية الضرورية",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "احصل على شهادة عدم وجود سجل جنائي",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "احصل على شهادة الخبرة المهنية (إذا لزم الأمر)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "قم بترجمة الوثائق بواسطة مترجم معتمد",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "وثّق الترجمات ونسخ الوثائق لدى كاتب العدل",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "قدّم الوثائق إلى غرفة الأطباء المسؤولة للتقييم",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "عمل ممتاز! لقد أكملت مرحلة 'جامع الوثائق'. أنت تقترب من هدفك!",
    },
    {
      id: 4,
      title: "تسجيل FSP",
      description:
        "هذا هو الشخص الذي يسجل للامتحان اللغوي المتخصص (FSP). أكمل عملية التسجيل، ادفع الرسوم اللازمة، وحضّر الوثائق المطلوبة للامتحان. بمجرد نجاحك في FSP، ستحصل تلقائيًا على الترخيص.",
      tasks: [
        {
          id: "4.1",
          title: "راجع متطلبات التسجيل والمواعيد النهائية",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "قم بتعبئة وتقديم نموذج التسجيل للـ FSP",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "ادفع رسوم التسجيل",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "أكد جدول الامتحان الخاص بك",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'تسجيل FSP'. استعد للامتحان!",
    },
    {
      id: 5,
      title: "المحارب اللغوي",
      description:
        "هذا هو الشخص الذي يعزز مهاراته في التواصل واللغة السريرية استعدادًا للممارسة المهنية.",
      tasks: [
        {
          id: "5.1",
          title: "ادرس المصطلحات الطبية باستخدام القواميس والتطبيقات",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "تعلم جميع الاختصارات الطبية",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "تدرّب على مناقشة الحالات الطبية ذات الصلة بمنطقتك",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "تدرّب على الاستشارات الطبية مع شريك",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "أنشئ قوالب عبارات لشرح الإجراءات للمرضى",
        },
        {
          id: "5.6",
          title: "عزّز مهاراتك في التواصل السريري من خلال ورش العمل أو التمثيل الدورى",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "مبروك! لقد أكملت مرحلة 'المحارب اللغوي'. خطوة أخرى نحو النجاح!",
    },
    {
      id: 6,
      title: "سيد اللغة",
      description:
        "هذا هو الشخص الذي حقق مستوى عالٍ من الكفاءة اللغوية ويستعد للبحث عن وظيفة.",
      tasks: [
        { id: "6.1", title: "ادرس اللغة حتى تصل إلى المستوى C1" },
        {
          id: "6.2",
          title: "أعد إعداد السيرة الذاتية وخطاب التقديم",
          link: "/resume",
        },
        { id: "6.3", title: "حضّر مجموعة الوثائق المهنية" },
        {
          id: "6.4",
          title: "قدّم طلبات العمل للمستشفيات",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "تعرّف على متطلبات Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "عمل رائع! لقد أكملت مرحلة 'سيد اللغة'. النجاح قريب!",
    },
    {
      id: 7,
      title: "الممارسة التجريبية",
      description:
        "هذا هو الشخص الذي، بعد نجاحه في FSP وحصوله التلقائي على الترخيص، يبدأ فترة عمل تجريبية لاكتساب الخبرة العملية.",
      tasks: [
        {
          id: "7.1",
          title: "ابدأ العمل التجريبي تحت إشراف في مستشفى أو عيادة",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "حدث سيرتك الذاتية واستعد للمقابلات الوظيفية",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "تعرّف على لوائح العمل والتوقعات",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "انضم إلى الشبكات المهنية وبرامج الإرشاد",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "عمل ممتاز! لقد أكملت مرحلة 'الممارسة التجريبية'. الخطوة التالية قريبة!",
    },
    {
      id: 8,
      title: "الطبيب الأسطوري",
      description:
        "هذا هو الشخص الذي أنهى فترة التجربة وبدأ رسميًا العمل كطبيب في ألمانيا.",
      tasks: [
        { id: "8.1", title: "ابدأ رسميًا العمل في مستشفى أو عيادة", link: "/job-search" },
        { id: "8.2", title: "ضع خطة مهنية طويلة الأمد" },
        { id: "8.3", title: "شارك في المؤتمرات أو الندوات المهنية", link: "/job-search" },
        { id: "8.4", title: "احصل على شهادة تخصص (إذا لزم الأمر)", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "مبروك! لقد أكملت مرحلة 'الطبيب الأسطوري'. مرحبًا بك في الحياة المهنية في ألمانيا!",
    },
  ],

  pl: [
    {
      id: 1,
      title: "Odkrywca",
      avatar: "/assets/man-stage-1.png",
      description:
        "To osoba, która dopiero zaczyna swoją podróż, poszukuje możliwości, poznaje podstawy przeprowadzki oraz wymagania dotyczące uzyskania aprobaty, i zaczyna zbierać niezbędne dokumenty.",
      tasks: [
        { id: "1.1", title: "Zbadaj potencjalne regiony do przeprowadzki" },
        {
          id: "1.2",
          title: "Zapoznaj się z wymaganiami dotyczącymi aprobaty",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Zapoznaj się z wymaganiami dotyczącymi uznania równoważności",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Zapoznaj się z wymaganiami dotyczącymi porównawczej ekspertyzy",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Zapoznaj się z wymaganiami dotyczącymi uzyskania Berufserlaubnis",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Zapoznaj się z wymaganiami dotyczącymi Fachsprachprüfung",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Zbierz dokumenty", link: "/documents" },
        { id: "1.8", title: "Nauka języka", link: "/language-study" },
        { id: "1.9", title: "Dołącz do czatów regionalnych", link: "/regional-chats" },
        {
          id: "1.10",
          title: "Sprawdź oficjalne strony izb lekarskich, aby uzyskać aktualne informacje",
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
          title: "Znajdź tłumacza do poświadczonych kopii",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Zleć tłumaczenie dyplomu certyfikowanemu tłumaczowi",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Uzyskaj informacje o wymaganiach aprobaty w swoim regionie",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Zlokalizuj regionalne izby lekarskie i sprawdź listę wymaganych dokumentów",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Zapisz się na kursy językowe (na poziomie B1 lub wyższym)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Dołącz do grup regionalnych lub społeczności lekarzy na Telegramie lub Facebooku",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Uzyskaj, jeśli to konieczne, zaświadczenie o niekaralności",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Skontaktuj się z konsultantem lub agencją w sprawie aprobaty (jeśli to konieczne)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Znajdź lekarza rodzinnego i zarejestruj się u niego" },
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Nowo przybyły'. Następny krok jest blisko!",
    },
    {
      id: 3,
      title: "Zbieracz dokumentów",
      description:
        "To osoba, która aktywnie zbiera, przygotowuje i składa dokumenty w celu uznania dyplomu.",
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
          title: "Uzyskaj, jeśli to konieczne, zaświadczenie o doświadczeniu zawodowym",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Zleć tłumaczenie dokumentów certyfikowanemu tłumaczowi",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Notarialnie poświadcz tłumaczenia oraz kopie dokumentów",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Prześlij dokumenty do odpowiedniej izby lekarskiej w celu oceny",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Zbieracz dokumentów'. Jesteś coraz bliżej celu!",
    },
    {
      id: 4,
      title: "Rejestracja na FSP",
      description:
        "To osoba, która rejestruje się na Fachsprachprüfung. Ukończ proces rejestracji, opłać niezbędne opłaty i przygotuj dokumenty wymagane do egzaminu. Po zdaniu FSP automatycznie otrzymasz aprobatę.",
      tasks: [
        {
          id: "4.1",
          title: "Sprawdź wymagania rejestracyjne i terminy",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Wypełnij i złóż formularz rejestracyjny na FSP",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Opłać opłaty rejestracyjne",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Potwierdź harmonogram egzaminu",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Rejestracja na FSP'. Przygotuj się do egzaminu!",
    },
    {
      id: 5,
      title: "Wojownik języka",
      description:
        "To osoba, która doskonali swoje umiejętności komunikacyjne i kliniczne w zakresie języka, przygotowując się do praktyki zawodowej.",
      tasks: [
        {
          id: "5.1",
          title: "Ucz się terminologii medycznej, korzystając ze słowników i aplikacji",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Poznaj wszystkie medyczne skróty",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Ćwicz omawianie przypadków medycznych istotnych dla twojego regionu",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Ćwicz konsultacje lekarskie z partnerem",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Stwórz szablony fraz do wyjaśniania procedur pacjentom",
        },
        {
          id: "5.6",
          title: "Doskonal umiejętności komunikacji klinicznej poprzez warsztaty lub ćwiczenia",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Wojownik języka'. Jeszcze jeden krok do sukcesu!",
    },
    {
      id: 6,
      title: "Mistrz języka",
      description:
        "To osoba, która osiągnęła wysoki poziom biegłości językowej i przygotowuje się do poszukiwania pracy.",
      tasks: [
        { id: "6.1", title: "Ucz się języka, aż osiągniesz poziom C1" },
        {
          id: "6.2",
          title: "Przygotuj CV i list motywacyjny",
          link: "/resume",
        },
        { id: "6.3", title: "Przygotuj portfolio dokumentów zawodowych" },
        {
          id: "6.4",
          title: "Wyślij aplikacje o pracę do szpitali",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Zapoznaj się z wymaganiami dotyczącymi uzyskania Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Mistrz języka'. Sukces jest blisko!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "To osoba, która po zdaniu FSP i automatycznym otrzymaniu aprobaty, rozpoczyna okres próbnej pracy, aby zdobyć doświadczenie praktyczne.",
      tasks: [
        {
          id: "7.1",
          title: "Rozpocznij pod nadzorem próbną pracę w szpitalu lub klinice",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Zaktualizuj swoje CV i przygotuj się do rozmów kwalifikacyjnych",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Zapoznaj się z zasadami pracy i oczekiwaniami",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Dołącz do profesjonalnych sieci i programów mentoringowych",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Świetnie! Ukończyłeś etap 'Proberuf'. Następny krok jest blisko!",
    },
    {
      id: 8,
      title: "Legendarny lekarz",
      description:
        "To osoba, która ukończyła próbny okres pracy i oficjalnie rozpoczęła pracę jako lekarz w Niemczech.",
      tasks: [
        { id: "8.1", title: "Oficjalnie rozpocznij pracę w szpitalu lub klinice", link: "/job-search" },
        { id: "8.2", title: "Opracuj długoterminowy plan kariery" },
        { id: "8.3", title: "Weź udział w konferencjach lub seminariach zawodowych", link: "/job-search" },
        { id: "8.4", title: "Uzyskaj certyfikat w specjalizacji (jeśli to konieczne)", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "Gratulacje! Ukończyłeś etap 'Legendarny lekarz'. Witamy w życiu zawodowym w Niemczech!",
    },
  ],

  es: [
    {
      id: 1,
      title: "Explorador",
      avatar: "/assets/man-stage-1.png",
      description:
        "Esta es una persona que apenas comienza su viaje, explorando oportunidades, aprendiendo lo básico sobre la reubicación y los requisitos para la Aprobación, y empezando a reunir los documentos necesarios.",
      tasks: [
        { id: "1.1", title: "Investiga las regiones potenciales para la reubicación" },
        {
          id: "1.2",
          title: "Familiarízate con los requisitos para la Aprobación",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Familiarízate con los requisitos para el reconocimiento de la equivalencia",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Familiarízate con los requisitos para la evaluación comparativa",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Familiarízate con los requisitos para el permiso profesional",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Familiarízate con los requisitos para el examen de competencia lingüística especializada",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Reúne los documentos", link: "/documents" },
        { id: "1.8", title: "Estudia el idioma", link: "/language-study" },
        { id: "1.9", title: "Únete a chats regionales", link: "/regional-chats" },
        {
          id: "1.10",
          title: "Consulta las páginas oficiales de las cámaras médicas para obtener información actualizada",
        },
      ],
      congratsMessage:
        "¡Buen trabajo! Has completado la etapa 'Explorador'. ¡Sigue avanzando!",
    },
    {
      id: 2,
      title: "Recién llegado",
      description:
        "Esta es una persona que ya se ha mudado a Alemania, ha preparado los documentos esenciales y continúa adaptándose.",
      tasks: [
        {
          id: "2.2",
          title: "Comienza a reunir los documentos para la cámara médica",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Encuentra un notario para crear copias certificadas",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Encuentra un traductor para copias certificadas",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Haz que tu diploma sea traducido por un traductor certificado",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Obtén información sobre los requisitos de Aprobación en tu región",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Localiza las cámaras médicas de tu región y revisa la lista de documentos requeridos",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Inscríbete en cursos de idioma (nivel B1 o superior)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Únete a grupos o comunidades de médicos regionales en Telegram o Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Obtén un certificado de antecedentes penales de tu país (si es necesario)",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Contacta a un consultor o agencia sobre la Aprobación (si es necesario)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Encuentra un médico de familia y regístrate con él" },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Recién llegado'. ¡El siguiente paso está cerca!",
    },
    {
      id: 3,
      title: "Cazador de Documentos",
      description:
        "Esta es una persona que reúne, prepara y presenta activamente los documentos para el reconocimiento del diploma.",
      tasks: [
        {
          id: "3.1",
          title: "Recopila todos los documentos académicos necesarios",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Obtén un certificado de antecedentes penales",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "Obtén un certificado de experiencia profesional (si es necesario)",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Haz que los documentos sean traducidos por un traductor certificado",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Notariza las traducciones y copias de los documentos",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Presenta los documentos a la cámara médica responsable para su evaluación",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "¡Genial! Has completado la etapa 'Cazador de Documentos'. ¡Estás cada vez más cerca de tu meta!",
    },
    {
      id: 4,
      title: "Registro en FSP",
      description:
        "Esta es una persona que se registra para el Fachsprachprüfung. Completa el proceso de registro, paga las tarifas necesarias y prepara la documentación requerida para el examen. Una vez que apruebes el FSP, recibirás automáticamente la Aprobación.",
      tasks: [
        {
          id: "4.1",
          title: "Revisa los requisitos de registro y las fechas límite",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Completa y envía el formulario de registro para el Fachsprachprüfung",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Paga las tarifas de registro",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Confirma tu calendario de exámenes",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "¡Genial! Has completado la etapa 'Registro en FSP'. ¡Prepárate para el examen!",
    },
    {
      id: 5,
      title: "Combatiente Lingüístico",
      description:
        "Esta es una persona que mejora sus habilidades comunicativas y lingüísticas clínicas en preparación para la práctica profesional.",
      tasks: [
        {
          id: "5.1",
          title: "Estudia la terminología médica utilizando diccionarios y aplicaciones",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Aprende todas las abreviaturas médicas",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Practica discutir casos médicos relevantes para tu región",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Practica consultas médicas con un compañero",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Crea plantillas de frases para explicar procedimientos a los pacientes",
        },
        {
          id: "5.6",
          title: "Mejora tus habilidades de comunicación clínica a través de talleres o juegos de rol",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Combatiente Lingüístico'. ¡Un paso más hacia el éxito!",
    },
    {
      id: 6,
      title: "Maestro del Idioma",
      description:
        "Esta es una persona que ha alcanzado un alto nivel de competencia lingüística y se prepara para buscar empleo.",
      tasks: [
        { id: "6.1", title: "Estudia el idioma hasta alcanzar el nivel C1" },
        {
          id: "6.2",
          title: "Prepara un currículum y una carta de presentación",
          link: "/resume",
        },
        { id: "6.3", title: "Prepara un portafolio de documentos profesionales" },
        {
          id: "6.4",
          title: "Envía solicitudes de empleo a hospitales",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Familiarízate con los requisitos para obtener un Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "¡Genial! Has completado la etapa 'Maestro del Idioma'. ¡El éxito está cerca!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "Esta es una persona que, tras aprobar el Fachsprachprüfung y recibir automáticamente la Aprobación, comienza un período de trabajo de prueba para adquirir experiencia práctica.",
      tasks: [
        {
          id: "7.1",
          title: "Comienza a trabajar en régimen de prueba supervisada en un hospital o clínica",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Actualiza tu currículum y prepárate para entrevistas de trabajo",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Familiarízate con las regulaciones y expectativas del lugar de trabajo",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Únete a redes profesionales y programas de mentoría",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "¡Genial! Has completado la etapa 'Proberuf'. ¡El siguiente paso está cerca!",
    },
    {
      id: 8,
      title: "Médico Legendario",
      description:
        "Esta es una persona que ha completado su período de prueba y ha comenzado oficialmente a trabajar como médico en Alemania.",
      tasks: [
        { id: "8.1", title: "Comienza oficialmente a trabajar en un hospital o clínica", link: "/job-search" },
        { id: "8.2", title: "Desarrolla un plan de carrera a largo plazo" },
        { id: "8.3", title: "Participa en conferencias o seminarios profesionales", link: "/job-search" },
        { id: "8.4", title: "Obtén la certificación en una especialidad (si es necesario)", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "¡Felicidades! Has completado la etapa 'Médico Legendario'. ¡Bienvenido a la vida profesional en Alemania!",
    },
  ],

  fr: [
    {
      id: 1,
      title: "Explorateur",
      avatar: "/assets/man-stage-1.png",
      description:
        "C'est une personne qui commence tout juste son parcours, explore les opportunités, apprend les bases du déménagement ainsi que les exigences pour l'approbation, et commence à rassembler les documents nécessaires.",
      tasks: [
        { id: "1.1", title: "Recherchez les régions potentielles pour le déménagement" },
        {
          id: "1.2",
          title: "Familiarisez-vous avec les exigences pour l'approbation",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Familiarisez-vous avec les exigences pour la reconnaissance de l'équivalence",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Familiarisez-vous avec les exigences pour l'expertise comparative",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Familiarisez-vous avec les exigences pour l'autorisation d'exercer",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Familiarisez-vous avec les exigences pour l'examen de langue spécialisée",
          link: "/what-is-fsp",
        },
        { id: "1.7", title: "Rassemblez les documents", link: "/documents" },
        { id: "1.8", title: "Étudiez la langue", link: "/language-study" },
        { id: "1.9", title: "Rejoignez les discussions régionales", link: "/regional-chats" },
        {
          id: "1.10",
          title: "Consultez les sites officiels des chambres médicales pour obtenir des informations à jour",
        },
      ],
      congratsMessage:
        "Excellent travail ! Vous avez terminé l'étape 'Explorateur'. Continuez comme ça !",
    },
    {
      id: 2,
      title: "Nouveau venu",
      description:
        "C'est une personne qui a déjà déménagé en Allemagne, a préparé les documents essentiels et continue de s'adapter.",
      tasks: [
        {
          id: "2.2",
          title: "Commencez à rassembler les documents pour la chambre médicale",
          link: "/documents",
        },
        {
          id: "2.3",
          title: "Trouvez un notaire pour créer des copies certifiées",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Trouvez un traducteur pour des copies certifiées",
          link: "/translation",
        },
        {
          id: "2.5",
          title: "Faites traduire votre diplôme par un traducteur certifié",
          link: "/translation",
        },
        {
          id: "2.6",
          title: "Obtenez des informations sur les exigences d'approbation dans votre région",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Localisez les chambres médicales régionales et vérifiez la liste des documents requis",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Inscrivez-vous à des cours de langue (niveau B1 ou supérieur)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Rejoignez des groupes ou des communautés de médecins régionaux sur Telegram ou Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Obtenez un certificat de casier judiciaire de votre pays (si nécessaire)",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Contactez un consultant ou une agence concernant l'approbation (si nécessaire)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Trouvez un médecin de famille et inscrivez-vous auprès de lui" },
      ],
      congratsMessage:
        "Félicitations ! Vous avez terminé l'étape 'Nouveau venu'. L'étape suivante est proche !",
    },
    {
      id: 3,
      title: "Chasseur de documents",
      description:
        "C'est une personne qui rassemble, prépare et soumet activement des documents pour la reconnaissance de son diplôme.",
      tasks: [
        {
          id: "3.1",
          title: "Rassemblez tous les documents académiques nécessaires",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Obtenez un extrait de casier judiciaire",
          link: "/documents",
        },
        {
          id: "3.3",
          title: "Obtenez, si nécessaire, un certificat d'expérience professionnelle",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Faites traduire les documents par un traducteur certifié",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Faites certifier les traductions et copies des documents",
          link: "/notarization",
        },
        {
          id: "3.6",
          title: "Soumettez les documents à la chambre médicale compétente pour évaluation",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Super ! Vous avez terminé l'étape 'Chasseur de documents'. Vous vous rapprochez de votre objectif !",
    },
    {
      id: 4,
      title: "Inscription au FSP",
      description:
        "C'est une personne qui s'inscrit au Fachsprachprüfung. Complétez le processus d'inscription, payez les frais nécessaires et préparez la documentation requise pour l'examen. Une fois que vous réussirez le FSP, vous recevrez automatiquement l'approbation.",
      tasks: [
        {
          id: "4.1",
          title: "Vérifiez les exigences d'inscription et les dates limites",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Remplissez et soumettez le formulaire d'inscription pour le Fachsprachprüfung",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Payez les frais d'inscription",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Confirmez votre calendrier d'examen",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Super ! Vous avez terminé l'étape 'Inscription au FSP'. Préparez-vous pour l'examen !",
    },
    {
      id: 5,
      title: "Combattant de la langue",
      description:
        "C'est une personne qui améliore ses compétences en communication et en langue clinique en préparation à la pratique professionnelle.",
      tasks: [
        {
          id: "5.1",
          title: "Étudiez la terminologie médicale à l'aide de dictionnaires et d'applications",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Apprenez toutes les abréviations médicales",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title: "Exercez-vous à discuter de cas médicaux pertinents pour votre région",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Exercez-vous aux consultations médicales avec un partenaire",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title: "Créez des modèles de phrases pour expliquer les procédures aux patients",
        },
        {
          id: "5.6",
          title: "Améliorez vos compétences en communication clinique par le biais d'ateliers ou de jeux de rôle",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Félicitations ! Vous avez terminé l'étape 'Combattant de la langue'. Un pas de plus vers le succès !",
    },
    {
      id: 6,
      title: "Maître de la langue",
      description:
        "C'est une personne qui a atteint un haut niveau de compétence linguistique et qui se prépare à chercher un emploi.",
      tasks: [
        { id: "6.1", title: "Étudiez la langue jusqu'à atteindre le niveau C1" },
        {
          id: "6.2",
          title: "Préparez un CV et une lettre de motivation",
          link: "/resume",
        },
        { id: "6.3", title: "Préparez un portfolio de documents professionnels" },
        {
          id: "6.4",
          title: "Envoyez des candidatures aux hôpitaux",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Familiarisez-vous avec les exigences pour obtenir une Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Super ! Vous avez terminé l'étape 'Maître de la langue'. Le succès est proche !",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "C'est une personne qui, après avoir réussi le Fachsprachprüfung et obtenu automatiquement l'approbation, commence une période d'essai pour acquérir une expérience pratique.",
      tasks: [
        {
          id: "7.1",
          title: "Commencez à travailler en essai sous supervision dans un hôpital ou une clinique",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Mettez à jour votre CV et préparez-vous aux entretiens d'embauche",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Familiarisez-vous avec les règlements et attentes du lieu de travail",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Rejoignez des réseaux professionnels et des programmes de mentorat",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Super ! Vous avez terminé l'étape 'Proberuf'. L'étape suivante est proche !",
    },
    {
      id: 8,
      title: "Médecin légendaire",
      description:
        "C'est une personne qui a terminé sa période d'essai et qui a officiellement commencé à travailler comme médecin en Allemagne.",
      tasks: [
        { id: "8.1", title: "Commencez officiellement à travailler dans un hôpital ou une clinique", link: "/job-search" },
        { id: "8.2", title: "Développez un plan de carrière à long terme" },
        { id: "8.3", title: "Participez à des conférences ou séminaires professionnels", link: "/job-search" },
        { id: "8.4", title: "Obtenez une certification dans une spécialité (si nécessaire)", link: "/berufserlaubnis" },
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
        { id: "1.1", title: "Ερευνήστε πιθανούς προορισμούς για τη μετακόμιση" },
        {
          id: "1.2",
          title: "Γνωρίστε τις απαιτήσεις για την έγκριση",
          link: "/approbation",
        },
        {
          id: "1.3",
          title: "Γνωρίστε τις απαιτήσεις για την αναγνώριση ισοδυναμίας",
          link: "/gleichwertigkeit",
        },
        {
          id: "1.4",
          title: "Γνωρίστε τις απαιτήσεις για την συγκριτική αξιολόγηση",
          link: "/vergleichsgutachten",
        },
        {
          id: "1.5",
          title: "Γνωρίστε τις απαιτήσεις για την επαγγελματική άδεια",
          link: "/berufserlaubnis",
        },
        {
          id: "1.6",
          title: "Γνωρίστε τις απαιτήσεις για την εξειδικευμένη γλωσσική εξέταση",
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
          title: "Βρείτε έναν συμβολαιογράφο για πιστοποιημένες αντιγραφή",
          link: "/notarization",
        },
        {
          id: "2.4",
          title: "Βρείτε έναν μεταφραστή για πιστοποιημένες αντιγραφή",
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
            "Εντοπίστε τους περιφερειακούς ιατρικούς συλλόγους και ελέγξτε τη λίστα των απαιτούμενων εγγράφων",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Εγγραφείτε σε μαθήματα γλώσσας (επίπεδο B1 ή υψηλότερο)",
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
            "Λάβετε, αν χρειάζεται, πιστοποιητικό για την απουσία ποινικών μητρώων",
          link: "/documents",
        },
        {
          id: "2.11",
          title:
            "Επικοινωνήστε με σύμβουλο ή πρακτορείο σχετικά με την έγκριση (αν χρειάζεται)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Βρείτε οικογενειακό γιατρό και εγγραφείτε σε αυτόν" },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Νεοεισερχόμενος'. Το επόμενο βήμα είναι κοντά!",
    },
    {
      id: 3,
      title: "Κυνηγός Εγγράφων",
      description:
        "Αυτός είναι κάποιος που συλλέγει, προετοιμάζει και υποβάλλει ενεργά έγγραφα για την αναγνώριση του πτυχίου του.",
      tasks: [
        {
          id: "3.1",
          title: "Συγκεντρώστε όλα τα απαραίτητα ακαδημαϊκά έγγραφα",
          link: "/documents",
        },
        {
          id: "3.2",
          title: "Λάβετε πιστοποιητικό για την απουσία ποινικών μητρώων",
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
          title: "Πιστοποιήστε νομικά τις μεταφράσεις και τα αντίγραφα των εγγράφων",
          link: "/notarization",
        },
        {
          id: "3.6",
          title:
            "Υποβάλετε τα έγγραφα στον αρμόδιο ιατρικό σύλλογο για αξιολόγηση",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Τέλεια! Ολοκληρώσατε το στάδιο 'Κυνηγός Εγγράφων'. Είστε πιο κοντά στον στόχο σας!",
    },
    {
      id: 4,
      title: "Εγγραφή στο FSP",
      description:
        "Αυτός είναι κάποιος που εγγράφεται για την ειδική γλωσσική εξέταση (FSP). Ολοκληρώστε τη διαδικασία εγγραφής, πληρώστε τα απαιτούμενα τέλη και προετοιμάστε τα έγγραφα για την εξέταση. Μόλις περάσετε το FSP, θα λάβετε αυτόματα την έγκριση.",
      tasks: [
        {
          id: "4.1",
          title: "Ελέγξτε τις απαιτήσεις και τις προθεσμίες εγγραφής",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title: "Συμπληρώστε και υποβάλετε τη φόρμα εγγραφής για το FSP",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Πληρώστε τα τέλη εγγραφής",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Επιβεβαιώστε το πρόγραμμα εξέτασής σας",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Τέλεια! Ολοκληρώσατε το στάδιο 'Εγγραφή στο FSP'. Ετοιμαστείτε για την εξέταση!",
    },
    {
      id: 5,
      title: "Μαχητής της Γλώσσας",
      description:
        "Αυτός είναι κάποιος που βελτιώνει τις επικοινωνιακές και κλινικές γλωσσικές του δεξιότητες για να προετοιμαστεί για την επαγγελματική πρακτική.",
      tasks: [
        {
          id: "5.1",
          title: "Μελετήστε ιατρική ορολογία με τη βοήθεια λεξικών και εφαρμογών",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Μάθετε όλες τις ιατρικές συντομογραφίες",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title:
            "Εξασκηθείτε στη συζήτηση ιατρικών περιπτώσεων που αφορούν την περιοχή σας",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Πρακτική ιατρικών συμβουλών με συνεργάτη",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title:
            "Δημιουργήστε πρότυπα φράσεων για την εξήγηση διαδικασιών στους ασθενείς",
        },
        {
          id: "5.6",
          title:
            "Βελτιώστε τις κλινικές επικοινωνιακές σας δεξιότητες μέσω εργαστηρίων ή παιχνιδιών ρόλων",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Μαχητής της Γλώσσας'. Ένα ακόμη βήμα προς την επιτυχία!",
    },
    {
      id: 6,
      title: "Μάστερ της Γλώσσας",
      description:
        "Αυτός είναι κάποιος που έχει επιτύχει υψηλό επίπεδο γλωσσικής επάρκειας και προετοιμάζεται να αναζητήσει εργασία.",
      tasks: [
        { id: "6.1", title: "Μελετήστε τη γλώσσα μέχρι να φτάσετε στο επίπεδο C1" },
        {
          id: "6.2",
          title: "Προετοιμάστε ένα βιογραφικό και μια συνοδευτική επιστολή",
          link: "/resume",
        },
        { id: "6.3", title: "Συγκεντρώστε ένα portfolio επαγγελματικών εγγράφων" },
        {
          id: "6.4",
          title: "Αποστείλετε αιτήσεις εργασίας σε νοσοκομεία",
          link: "/job-search",
        },
        {
          id: "6.5",
          title: "Ενημερωθείτε για τις απαιτήσεις απόκτησης Berufserlaubnis",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Τέλεια! Ολοκληρώσατε το στάδιο 'Μάστερ της Γλώσσας'. Η επιτυχία είναι κοντά!",
    },
    {
      id: 7,
      title: "Πρόχειρη Εργασία",
      description:
        "Αυτός είναι κάποιος που, μετά την επιτυχή κατακράτηση του FSP και την αυτόματη απόκτηση της έγκρισης, ξεκινάει μια δοκιμαστική περίοδο εργασίας για να αποκτήσει πρακτική εμπειρία.",
      tasks: [
        {
          id: "7.1",
          title: "Ξεκινήστε δοκιμαστική εργασία υπό επίβλεψη σε νοσοκομείο ή κλινική",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Ενημερώστε το βιογραφικό σας και προετοιμαστείτε για συνεντεύξεις",
          link: "/resume",
        },
        {
          id: "7.3",
          title: "Γνωρίστε τους κανόνες και τις προσδοκίες του εργασιακού χώρου",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title: "Ενταχθείτε σε επαγγελματικά δίκτυα και προγράμματα καθοδήγησης",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Πρόχειρη Εργασία'. Το επόμενο βήμα είναι κοντά!",
    },
    {
      id: 8,
      title: "Θρυλικός Γιατρός",
      description:
        "Αυτός είναι κάποιος που ολοκληρώνει την δοκιμαστική περίοδο και ξεκινάει επίσημα να εργάζεται ως γιατρός στη Γερμανία.",
      tasks: [
        { id: "8.1", title: "Ξεκινήστε επίσημα να εργάζεστε σε νοσοκομείο ή κλινική", link: "/job-search" },
        { id: "8.2", title: "Αναπτύξτε ένα μακροπρόθεσμο σχέδιο καριέρας" },
        { id: "8.3", title: "Συμμετέχετε σε επαγγελματικά συνέδρια ή σεμινάρια", link: "/job-search" },
        { id: "8.4", title: "Αποκτήστε πιστοποίηση σε μια ειδικότητα (αν χρειάζεται)", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "Συγχαρητήρια! Ολοκληρώσατε το στάδιο 'Θρυλικός Γιατρός'. Καλώς ήρθατε στην επαγγελματική ζωή στη Γερμανία!",
    },
  ],

  // ------------------ New Romanian Translations ------------------
  ro: [
    {
      id: 1,
      title: "Explorator",
      avatar: "/assets/man-stage-1.png",
      description:
        "Aceasta este o persoană care abia își începe călătoria, explorează oportunități, învață elementele de bază ale relocării și cerințele pentru aprobare și începe să adune documentele necesare.",
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
          title: "Începe să aduni documentele pentru camera medicală",
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
          title: "Obține informații despre cerințele de aprobare din regiunea ta",
          link: "/medical-chambers",
        },
        {
          id: "2.7",
          title: "Identifică camerele medicale regionale și verifică lista documentelor necesare",
          link: "/medical-chambers",
        },
        {
          id: "2.8",
          title: "Înscrie-te la cursuri de limbă (nivel B1 sau mai sus)",
          link: "/language-study",
        },
        {
          id: "2.9",
          title: "Alătură-te grupurilor sau comunităților de medici regionale pe Telegram sau Facebook",
          link: "/regional-chats",
        },
        {
          id: "2.10",
          title: "Obține, dacă este necesar, un certificat de cazier judiciar din țara ta",
          link: "/documents",
        },
        {
          id: "2.11",
          title: "Contactează un consultant sau o agenție în legătură cu aprobare (dacă este necesar)",
          link: "/personal-consultation",
        },
        { id: "2.12", title: "Găsește un medic de familie și înregistrează-te la el" },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Nou-venit'. Următorul pas este aproape!",
    },
    {
      id: 3,
      title: "Vânător de Documente",
      description:
        "Aceasta este o persoană care adună, pregătește și depune activ documentele pentru recunoașterea diplomei.",
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
          title: "Obține, dacă este necesar, un certificat de experiență profesională",
          link: "/documents",
        },
        {
          id: "3.4",
          title: "Solicită traducerea documentelor de către un traducător certificat",
          link: "/translation",
        },
        {
          id: "3.5",
          title: "Certifică traducerile și copiile documentelor prin notar",
          link: "/notarization",
        },
        {
          id: "3.6",
          title:
            "Depune documentele la camera medicală competentă pentru evaluare",
          link: "/medical-chambers",
        },
      ],
      congratsMessage:
        "Excelent! Ai finalizat stadiul 'Vânător de Documente'. Ești din ce în ce mai aproape de obiectivul tău!",
    },
    {
      id: 4,
      title: "Înregistrare FSP",
      description:
        "Aceasta este o persoană care se înregistrează pentru examenul de limbă specializat (FSP). Finalizează procesul de înregistrare, plătește taxele necesare și pregătește documentele cerute pentru examen. Odată ce treci FSP, vei primi automat aprobarea.",
      tasks: [
        {
          id: "4.1",
          title: "Verifică cerințele de înregistrare și termenele limită",
          link: "/what-is-fsp",
        },
        {
          id: "4.2",
          title:
            "Completează și depune formularul de înregistrare pentru FSP",
          link: "/registration",
        },
        {
          id: "4.3",
          title: "Plătește taxele de înregistrare",
          link: "/fees",
        },
        {
          id: "4.4",
          title: "Confirmă programul examenului tău",
          link: "/exam-schedule",
        },
      ],
      congratsMessage:
        "Excelent! Ai finalizat stadiul 'Înregistrare FSP'. Pregătește-te pentru examen!",
    },
    {
      id: 5,
      title: "Luptător de Limbă",
      description:
        "Aceasta este o persoană care își îmbunătățește abilitățile de comunicare și limbaj clinic în pregătirea pentru practica profesională.",
      tasks: [
        {
          id: "5.1",
          title:
            "Învață terminologia medicală folosind dicționare și aplicații",
          link: "/all-medical-terminology",
        },
        {
          id: "5.2",
          title: "Învață toate abrevierile medicale",
          link: "/all-abbreviations",
        },
        {
          id: "5.3",
          title:
            "Exersează discuția cazurilor medicale relevante pentru regiunea ta",
          link: "/cases",
        },
        {
          id: "5.4",
          title: "Exersează consultațiile medicale cu un partener",
          link: "/simulation-partner",
        },
        {
          id: "5.5",
          title:
            "Creează modele de fraze pentru a explica procedurile pacienților",
        },
        {
          id: "5.6",
          title:
            "Îmbunătățește-ți abilitățile de comunicare clinică prin ateliere sau jocuri de rol",
          link: "/language-study",
        },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Luptător de Limbă'. Încă un pas către succes!",
    },
    {
      id: 6,
      title: "Maestrul Limbii",
      description:
        "Aceasta este o persoană care a atins un nivel ridicat de competență lingvistică și se pregătește să caute un loc de muncă.",
      tasks: [
        { id: "6.1", title: "Învață limba până când atingi nivelul C1" },
        {
          id: "6.2",
          title: "Pregătește un CV și o scrisoare de intenție",
          link: "/resume",
        },
        { id: "6.3", title: "Creează un portofoliu de documente profesionale" },
        {
          id: "6.4",
          title: "Trimite cereri de angajare la spitale",
          link: "/job-search",
        },
        {
          id: "6.5",
          title:
            "Informează-te cu privire la cerințele pentru obținerea unui permis profesional (Berufserlaubnis)",
          link: "/berufserlaubnis",
        },
      ],
      congratsMessage:
        "Excelent! Ai finalizat stadiul 'Maestrul Limbii'. Succesul este aproape!",
    },
    {
      id: 7,
      title: "Proberuf",
      description:
        "Aceasta este o persoană care, după ce a promovat FSP și a primit aprobarea automat, începe o perioadă de probă pentru a câștiga experiență practică.",
      tasks: [
        {
          id: "7.1",
          title:
            "Începe o perioadă de probă sub supraveghere într-un spital sau clinică",
          link: "/job-search",
        },
        {
          id: "7.2",
          title: "Actualizează-ți CV-ul și pregătește-te pentru interviuri",
          link: "/resume",
        },
        {
          id: "7.3",
          title:
            "Familiarizează-te cu regulile și așteptările la locul de muncă",
          link: "/medical-chambers",
        },
        {
          id: "7.4",
          title:
            "Alătură-te rețelelor profesionale și programelor de mentorat",
          link: "/regional-chats",
        },
      ],
      congratsMessage:
        "Excelent! Ai finalizat stadiul 'Proberuf'. Următorul pas este aproape!",
    },
    {
      id: 8,
      title: "Doctor Legendar",
      description:
        "Aceasta este o persoană care și-a finalizat perioada de probă și a început oficial să lucreze ca doctor în Germania.",
      tasks: [
        { id: "8.1", title: "Începe oficial să lucrezi într-un spital sau clinică", link: "/job-search" },
        { id: "8.2", title: "Dezvoltă un plan de carieră pe termen lung" },
        { id: "8.3", title: "Participă la conferințe sau seminarii profesionale", link: "/job-search" },
        { id: "8.4", title: "Obține certificarea într-o specialitate (dacă este necesar)", link: "/berufserlaubnis" },
      ],
      congratsMessage:
        "Felicitări! Ai finalizat stadiul 'Doctor Legendar'. Bine ai venit în viața profesională din Germania!",
    },
  ],
};