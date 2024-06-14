const defaultProps = {
   optional: false,
   required: true,
   is_exist: "not_check",
   apostile: "not_check",
   notary: "not_check",
   translation: "not_check",
   ready_copies: "not_check",
   sent: "not_check",
};

export const messages = {
   en: {
      lessThan20: "There is some job to do. Don't hesitate!",
      between20And50: "Let's keep going!",
      between50And80: "We're halfway there!",
      greaterThan80: "Great job!",
   },
   de: {
      lessThan20: "Es gibt noch einiges zu tun!",
      between20And50: "Lasst uns weitermachen!",
      between50And80: "Wir sind auf halbem Weg!",
      greaterThan80: "Toll gemacht!",
   },
   uk: {
      lessThan20: "Попереду багато роботи, не зволікай!",
      between20And50: "Продовжуємо працювати!",
      between50And80: "Ми на половині шляху!",
      greaterThan80: "Чудова робота!",
   },
   ru: {
      lessThan20: "Есть много дел!",
      between20And50: "Продолжаем работать!",
      between50And80: "Мы на полпути!",
      greaterThan80: "Отличная работа!",
   },
   tr: {
      lessThan20: "Yapılacak işler var!",
      between20And50: "Devam edelim!",
      between50And80: "Yarı yoldayız!",
      greaterThan80: "Harika iş!",
   },
   ar: {
      lessThan20: "هناك بعض الأعمال للقيام بها",
      between20And50: "لنواصل!",
      between50And80: "نحن على منتصف الطريق!",
      greaterThan80: "عمل رائع!",
   },
   fr: {
      lessThan20: "Il y a du travail à faire",
      between20And50: "Continuons!",
      between50And80: "Nous sommes à mi-chemin!",
      greaterThan80: "Super boulot!",
   },
   es: {
      lessThan20: "Hay trabajo por hacer",
      between20And50: "¡Sigamos adelante!",
      between50And80: "¡Estamos a mitad de camino!",
      greaterThan80: "¡Gran trabajo!",
   },
   pl: {
      lessThan20: "Jest trochę pracy do zrobienia",
      between20And50: "Kontynuujemy!",
      between50And80: "Jesteśmy w połowie drogi!",
      greaterThan80: "Świetna robota!",
   },
};

// Подача заяви
export const documents = [
   {
      id: 1,
      ...defaultProps,
      apostile: "Не потрібно",
      translation: "Не потрібно",
      category: {
    en: "Identity verification (Foreign passport or passport)",
    fr: "Vérification d'identité (Passeport étranger ou passeport)",
    es: "Verificación de identidad (Pasaporte extranjero o pasaporte)",
    ar: "التحقق من الهوية (جواز السفر الأجنبي أو جواز السفر)",
    tr: "Kimlik doğrulama (Yabancı pasaport veya pasaport)",
    pl: "Weryfikacja tożsamości (Paszport zagraniczny lub paszport)",
    uk: "Підтвердження особистості (Закордонний паспорт або паспорт)",
    ru: "Подтверждение личности (Заграничный паспорт или паспорт)",
    de: "Identitätsüberprüfung (Reisepass oder Pass)"
            },
      English: "",
      German: "",
   },
   {
      id: 2,
      ...defaultProps,
      category: {
    en: "Birth certificate or family book extract",
    fr: "Acte de naissance ou extrait du livret de famille",
    es: "Certificado de nacimiento o extracto del libro de familia",
    ar: "شهادة ميلاد أو مستخرج من دفتر العائلة",
    tr: "Doğum belgesi veya aile cüzdanı özeti",
    pl: "Akt urodzenia lub wyciąg z księgi rodzinnej",
    uk: "Свідоцтво про народження чи виписка із сімейної книги",
    ru: "Свидетельство о рождении или выписка из семейной книги",
    de: "Geburtsurkunde oder Auszug aus dem Familienbuch"
},
      English: "Birth Certificate",
      German: "Geburtsurkunde / Auszug aus dem Familienbuch",
   },


   {
      id: 4,
      ...defaultProps,
      "category": {
    "en": "Extract from penal registers from all countries where you have resided in the last 5 years (must be no older than 3 months at the time of application)",
    "fr": "Extrait des registres pénaux de tous les pays où vous avez résidé au cours des 5 dernières années (ne doit pas dater de plus de 3 mois à la date de la demande)",
    "es": "Extracto de los registros penales de todos los países donde haya residido en los últimos 5 años (no debe tener más de 3 meses al momento de la solicitud)",
    "ar": "مستخرج من السجلات الجنائية من جميع البلدان التي أقمت فيها خلال السنوات الخمس الماضية (يجب ألا يكون أقدم من 3 أشهر في وقت تقديم الطلب)",
    "tr": "Son 5 yıl içinde ikamet ettiğiniz tüm ülkelerden adli sicil kayıtlarının özeti (başvuru tarihinden itibaren 3 aydan eski olmamalıdır)",
    "pl": "Wyciąg z rejestrów karnych ze wszystkich krajów, w których przebywałeś w ciągu ostatnich 5 lat (nie może być starszy niż 3 miesiące w momencie składania wniosku)",
    "uk": "Витяг з штрафових регістрів із всіх країн де ви перебували останніх 5 років (має бути не старшим ніж 3 місяці до моменту подання заяви)",
    "ru": "Выписка из штрафных реестров из всех стран, где вы проживали в последние 5 лет (не должна быть старше 3 месяцев на момент подачи заявления)",
    "de": "Auszug aus dem Strafregister aller Länder, in denen Sie in den letzten 5 Jahren gelebt haben (darf zum Zeitpunkt der Antragstellung nicht älter als 3 Monate sein)"
  },
      English: "Police Clearance",
      German:
         "Vitja из штрафових регістрів із всіх країн, де ви перебували останніх 5 років",
   },
   {
      id: 5,
      ...defaultProps,
      apostile: "Не потрібно",
      category: {
         en: "A Certificate of Good Standing is issued by the relevant health authorities where you have worked professionally",
         fr: "Un certificat de bonne conduite est délivré par les autorités sanitaires compétentes où vous avez exercé professionnellement",
         es: "Un Certificado de Buena Conducta es emitido por las autoridades de salud pertinentes donde haya trabajado profesionalmente",
         ar: "يصدر شهادة حسن السيرة من الجهات الصحية المعنية حيث عملت بشكل مهني",
         tr: "İyi Hal Belgesi, profesyonel olarak çalıştığınız ilgili sağlık otoriteleri tarafından verilir",
         pl: "Zaświadczenie o niekaralności (Certificate of Good Standing) wydawane jest przez odpowiednie władze zdrowotne, gdzie pracowałeś zawodowo",
         uk: "Довідка допропорядочності (Certificate of good Standing) видається відповідними структурами охорони здоровя де ви працювали по професії",
         ru: "Справка о благонадежности (Certificate of Good Standing) выдается соответствующими структурами здравоохранения, где вы работали по профессии",
         de: "Ein Zertifikat über gutes Ansehen wird von den zuständigen Gesundheitsbehörden ausgestellt, wo Sie beruflich tätig waren",
      },
      English: "Certificate of Good Standing",
      German: "Dovídka допропорядочності (Certificate of good Standing)",
   },

   {
      id: 7,
      ...defaultProps,
      category: {
         en: "Diploma of Higher Education",
         fr: "Diplôme d'enseignement supérieur",
         es: "Diploma de educación superior",
         ar: "دبلوم التعليم العالي",
         tr: "Yükseköğretim Diploması",
         pl: "Dyplom ukończenia studiów wyższych",
         uk: "Диплом про закінчену вищу освіту",
         ru: "Диплом о высшем образовании",
         de: "Hochschulabschluss",
      },
      English: "Diploma",
      German: "Диплом про закінчену вищу освіту",
   },
   {
      id: 8,
      ...defaultProps,
      "category": {
    "en": "Diploma supplement that provides an overview of all completed courses with hours (not curriculum)",
    "fr": "Supplément au diplôme qui fournit un aperçu de tous les cours terminés avec les heures (pas de programme)",
    "es": "Suplemento de diploma que proporciona una visión general de todos los cursos completados con horas (no plan de estudios)",
    "ar": "ملحق الدبلوم الذي يوفر نظرة عامة على جميع الدورات المكتملة بالساعات (ليس منهج دراسي)",
    "tr": "Tamamlanmış tüm derslerin saatleriyle birlikte bir özetini sağlayan diploma eki (müfredat değil)",
    "pl": "Dodatek do dyplomu, który zawiera przegląd wszystkich ukończonych kursów wraz z godzinami (nie program nauczania)",
    "uk": "Додаток до диплому, де вписаний огляд усіх пройдених предметів із годинами (не курікуюм)",
    "ru": "Приложение к диплому, предоставляющее обзор всех пройденных курсов с указанием часов (не учебный план)",
    "de": "Diplomzusatz, der einen Überblick über alle abgeschlossenen Kurse mit Stunden enthält (Notenübersicht)"
  },
      English: "Transcript",
      German:
         "Додаток до диплому, де вписаний огляд усіх пройдених предметів із годинами (не курікуюм)",
   },
   {
      id: 16,
      ...defaultProps,
     category: {
  en: "Evidence of specialized medical training or proof of acquired professional experience / Specialist certificate",
  fr: "Preuve de formation médicale spécialisée ou preuve d'expérience professionnelle acquise / Certificat de spécialiste",
  es: "Evidencia de formación médica especializada o prueba de experiencia profesional adquirida / Certificado de especialista",
  ar: "دليل على التدريب الطبي المتخصص أو إثبات الخبرة المهنية المكتسبة / شهادة الاختصاص",
  tr: "Uzmanlaşmış tıbbi eğitimin kanıtı veya kazanılmış profesyonel deneyim kanıtı / Uzmanlık sertifikası",
  pl: "Dowody specjalistycznego szkolenia medycznego lub świadectwa nabytego doświadczenia zawodowego / Certyfikat specjalisty",
  uk: "Докази спеціалізованої медичної підготовки або свідоцтва про набутий професійний досвід/ Сертифікат спеціаліста",
  ru: "Доказательства специализированной медицинской подготовки или свидетельства о приобретенном профессиональном опыте / Сертификат специалиста",
  de: "Nachweis einer spezialisierten medizinischen Ausbildung oder eines erworbenen Berufserfahrungsnachweises / Facharztzeugnis"
},
      German:
         "Докази спеціалізованої медичної підготовки або свідоцтва про набутий професійний досвід",
   },
   {
      id: 17,
      ...defaultProps,
      ready_copies: "Оригінал"
      "category": {
    "en": "Curriculum/Detailed syllabus with hours and covered subjects",
    "fr": "Curriculum/Programme détaillé avec heures et matières couvertes",
    "es": "Currículo/Plan de estudios detallado con horas y materias cubiertas",
    "ar": "المنهج الدراسي/المنهج التفصيلي مع الساعات والمواد التي تم تغطيتها",
    "tr": "Müfredat/Saatler ve işlenen konularla detaylı müfredat",
    "pl": "Kurs szczegółowy/program nauczania z godzinami i przerobionymi przedmiotami",
    "uk": "Курікулюм/Розгорнутий навчальний план із годинами та пройденими предметами",
    "ru": "Учебный план/Детализированный учебный план с часами и пройденными предметами",
    "de": "Lehrplan/Ausführlicher Lehrplan mit Stunden und behandelten Fächern"
  },

   
];

export const documentsOptional = [
   {
      id: 3,
      ...defaultProps,
      optional: true,   
      hide: true,
      category: "Свідоцтво про зміну імя чи прізвища (опціонально)",
      English: "Proof of Name Change",
      German:
         "Bei Namensänderung: Nachweis / Urkunde über die Änderung des Namens",
   },
   {
      id: 6,
      ...defaultProps,
      optional: true,
      hide: true,
      category:
         "Довідка із попереднього місця роботи, що ви без обмежень могли працювати по професії (опціонально)",
      English: "Employment Certificate",
      German: "Довідка із попереднього місця роботи",
   },
   {
      id: 9,
      ...defaultProps,
      optional: true,
      hide: true,
      category:
         "Доказ про проходження практичних навичок протягом навчання (опціонально)",
      English: "",
      German: "",
   },
   {
      id: 10,
      ...defaultProps,
      optional: true,
      hide: true,
      category: "Доказ про визнання остіти в одній із країн ЕС (опціонально)",
      English: "",
      German: "",
   },
   {
      id: 11,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: "Не потрібно",
      category: "Характеристика із попередньго місця роботи (опціонально) ",
      English: "",
      German: "",
   },
   {
      id: 12,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: "Не потрібно",
      category:
         "Сертифікти про пройдені курси підвищення кваліфікації (опціонально)",
      English: "Course Certificates",
      German: "Сертифікти про пройдені курси підвищення кваліфікації",
   },
   {
      id: 14,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: " ",
      notary: " ",
      translation: " ",
      ready_copies: " ",
      link: "https://www.fuehrungszeugnis.bund.de/ffw/form/display.do?%24context=B87C1BAAEFAEFC7F88FA",
      category:
         "Довідка про несудимість із Німеччини ( у рази, якщо до подання заяви ви перебуваєте в Німеччині більш ніж 6 місяців)(опціонально) ",
   },
   {
      id: 15,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: "Не потрібно",
      notary: "Не потрібно",
      translation: "Не потрібно",
      ready_copies: "Не потрібно",
      category: "Прописка в Німеччині (опціонально)",
      English: "",
      German: "",
   },
];
