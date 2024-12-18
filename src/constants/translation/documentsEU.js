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

export const messagesEU = {
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

const notNeededText = {
   uk: "Не потрібно",
   en: "Not needed",
   fr: "Pas nécessaire",
   es: "No necesario",
   ar: "غير ضروري",
   tr: "Gerekli değil",
   pl: "Niepotrzebne",
   ru: "Не нужно",
   de: "Nicht nötig",
};

export const columnsFirstEU = [
   {
      name: "category",
      label: {
         uk: "Документ",
         en: "Document",
         fr: "Document",
         es: "Documento",
         ar: "وثيقة",
         tr: "Belge",
         pl: "Dokument",
         ru: "Документ",
         de: "Dokument",
      },
   },
   {
      name: "is_exist",
      label: {
         uk: "Наявно",
         en: "Available",
         fr: "Disponible",
         es: "Disponible",
         ar: "متاح",
         tr: "Mevcut",
         pl: "Dostępne",
         ru: "Доступно",
         de: "Verfügbar",
      },
   },
   {
      name: "xxx",
      label: {
         uk: "Апостиль",
         en: "Apostille",
         fr: "Apostille",
         es: "Apostilla",
         ar: "توثيق",
         tr: "Apostil",
         pl: "Apostille",
         ru: "Апостиль",
         de: "Apostille",
      },
   },
   {
      name: "notary",
      label: {
         uk: "Завірено нотаріусом",
         en: "Notarized",
         fr: "Notarié",
         es: "Notariado",
         ar: "موثق",
         tr: "Noter Tasdikli",
         pl: "Notarialnie poświadczone",
         ru: "Заверено нотариусом",
         de: "Notariell beglaubigt",
      },
   },
   {
      name: "translation",
      label: {
         uk: "Професійний переклад",
         en: "Professional Translation",
         fr: "Traduction professionnelle",
         es: "Traducción profesional",
         ar: "ترجمة احترافية",
         tr: "Profesyonel Çeviri",
         pl: "Profesjonalne tłumaczenie",
         ru: "Профессиональный перевод",
         de: "Professionelle Übersetzung",
      },
   },
   {
      name: "ready_copies",
      label: {
         uk: "Завірені копії",
         en: "Certified Copies",
         fr: "Copies certifiées",
         es: "Copias certificadas",
         ar: "نسخ مصدقة",
         tr: "Onaylı Kopyalar",
         pl: "Potwierdzone kopie",
         ru: "Заверенные копии",
         de: "Beglaubigte Kopien",
      },
   },
   {
      name: "sent",
      label: {
         uk: "Відправлено",
         en: "Sent",
         fr: "Envoyé",
         es: "Enviado",
         ar: "أرسلت",
         tr: "Gönderildi",
         pl: "Wysłane",
         ru: "Отправлено",
         de: "Gesendet",
      },
   },
];

export const titlesEU = {
   main: {
      uk: "Подача заяв",
      en: "Submission of Applications",
      fr: "Soumission des Candidatures",
      es: "Presentación de Solicitudes",
      ar: "تقديم الطلبات",
      tr: "Başvuruların Sunulması",
      pl: "Składanie Wniosków",
      ru: "Подача заявлений",
      de: "Einreichung von Anträgen",
   },
   optional: {
      uk: "ОПЦІОНАЛЬНІ ДОКУМЕНТИ",
      en: "Optional Documents",
      fr: "Documents Optionnels",
      es: "Documentos Opcionales",
      ar: "وثائق اختيارية",
      tr: "İsteğe Bağlı Belgeler",
      pl: "Dokumenty Opcjonalne",
      ru: "Дополнительные документы",
      de: "Optionale Dokumente",
   },
};

// Подача заяви
export const documentsEU = [
   {
      id: 1,
      ...defaultProps,
      apostile: notNeededText,
      translation: notNeededText,
      category: {
         en: "Identity verification (Foreign passport or passport)",
         fr: "Vérification d'identité (Passeport étranger ou passeport)",
         es: "Verificación de identidad (Pasaporte extranjero o pasaporte)",
         ar: "التحقق من الهوية (جواز السفر الأجنبي أو جواز السفر)",
         tr: "Kimlik doğrulama (Yabancı pasaport veya pasaport)",
         pl: "Weryfikacja tożsamości (Paszport zagraniczny lub paszport)",
         uk: "Підтвердження особистості ІІІІ (Закордонний паспорт або паспорт)",
         ru: "Подтверждение личности (Заграничный паспорт или паспорт)",
         de: "Identitätsüberprüfung (Reisepass oder Pass)",
      },
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
         de: "Geburtsurkunde oder Auszug aus dem Familienbuch",
      },
   },
   {
      id: 4,
      ...defaultProps,
      category: {
         en: "Extract from penal registers from all countries where you have resided in the last 5 years (must be no older than 3 months at the time of application)",
         fr: "Extrait des registres pénaux de tous les pays où vous avez résidé au cours des 5 dernières années (ne doit pas dater de plus de 3 mois à la date de la demande)",
         es: "Extracto de los registros penales de todos los países donde haya residido en los últimos 5 años (no debe tener más de 3 meses al momento de la solicitud)",
         ar: "مستخرج من السجلات الجنائية من جميع البلدان التي أقمت فيها خلال السنوات الخمس الماضية (يجب ألا يكون أقدم من 3 أشهر في وقت تقديم الطلب)",
         tr: "Son 5 yıl içinde ikamet ettiğiniz tüm ülkelerden adli sicil kayıtlarının özeti (başvuru tarihinden itibaren 3 aydan eski olmamalıdır)",
         pl: "Wyciąg z rejestrów karnych ze wszystkich krajów, w których przebywałeś w ciągu ostatnich 5 lat (nie może być starszy niż 3 miesiące w momencie składania wniosku)",
         uk: "Витяг з штрафових регістрів із всіх країн де ви перебували останніх 5 років (має бути не старшим ніж 3 місяці до моменту подання заяви)",
         ru: "Выписка из штрафных реестров из всех стран, где вы проживали в последние 5 лет (не должна быть старше 3 месяцев на момент подачи заявления)",
         de: "Auszug aus dem Strafregister aller Länder, in denen Sie in den letzten 5 Jahren gelebt haben (darf zum Zeitpunkt der Antragstellung nicht älter als 3 Monate sein)",
      },
   },
   {
      id: 5,
      ...defaultProps,
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
   },
   
   
   
];

export const documentsOptionalEU = [
   {
      id: 14,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: " ",
      notary: " ",
      translation: " ",
      ready_copies: " ",
      link: "https://webgate.ec.europa.eu/single-market-compliance-space/home",
      category: {
         en: "Certificate of Conformity",
         fr: "Certificat de conformité (Certificate of Conformity)",
         es: "Certificado de conformidad (Certificate of Conformity)",
         ar: "شهادة المطابقة",
         tr: "Uygunluk Sertifikası (Certificate of Conformity)",
         pl: "Świadectwo zgodności (Certificate of Conformity)",
         uk: "Сертифікат відповідності (Certificate of Conformity)",
         ru: "Сертификат соответствия (Certificate of Conformity)",
         de: "Konformitätszertifikat (Certificate of Conformity)",
      },
  },
   {
      id: 3,
      ...defaultProps,
      optional: true,
      hide: true,
      category: {
         en: "Certificate of Name or Surname Change",
         fr: "Certificat de changement de nom ou de prénom",
         es: "Certificado de cambio de nombre o apellido",
         ar: "شهادة تغيير الاسم أو اللقب",
         tr: "Ad veya Soyadı Değişikliği Sertifikası",
         pl: "Świadectwo zmiany imienia lub nazwiska",
         uk: "Свідоцтво про зміну ім’я чи прізвища",
         ru: "Свидетельство о смене имени или фамилии",
         de: "Bescheinigung über Namens- oder Nachnamensänderung",
      },
   },
   
   
   {
      id: 10,
      ...defaultProps,
      optional: true,
      hide: true,
      category: {
         en: "Proof of Recognition of Education in an EU Country",
         fr: "Preuve de reconnaissance de l'éducation dans un pays de l'UE",
         es: "Prueba de reconocimiento de educación en un país de la UE",
         ar: "إثبات الاعتراف بالتعليم في إحدى دول الاتحاد الأوروبي",
         tr: "AB Ülkesinde Eğitimin Tanınma Kanıtı",
         pl: "Dowód uznania edukacji w kraju UE",
         uk: "Доказ про визнання освіти в одній із країн ЄС",
         ru: "Доказательство признания образования в одной из стран ЕС",
         de: "Nachweis der Anerkennung von Bildung in einem EU-Land"
       },
   },
   {
      id: 11,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: notNeededText,
      category: {
         en: "Reference from a previous workplace",
         fr: "Référence d'un précédent lieu de travail",
         es: "Referencia de un trabajo anterior",
         ar: "مرجع من مكان العمل السابق",
         tr: "Önceki iş yerinden referans",
         pl: "Referencje z poprzedniego miejsca pracy",
         uk: "Характеристика із попередньго місця роботи",
         ru: "Рекомендация с предыдущего места работы",
         de: "Referenz von einem früheren Arbeitsplatz",
      },
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
      category: {
         en: "Certificate of No Criminal Record from Germany (if you have been in Germany for more than 6 months prior to the application)",
         fr: "Certificat de non-criminalité d'Allemagne (si vous avez séjourné en Allemagne pendant plus de 6 mois avant la demande)",
         es: "Certificado de Antecedentes Penales de Alemania (si ha estado en Alemania durante más de 6 meses antes de la solicitud)",
         ar: "شهادة عدم وجود سجل جنائي من ألمانيا (إذا كنت قد أقمت في ألمانيا لأكثر من 6 أشهر قبل التقديم)",
         tr: "Almanya'dan Sabıka Kaydı Belgesi (başvurudan önce Almanya'da 6 aydan fazla kaldıysanız)",
         pl: "Zaświadczenie o niekaralności z Niemiec (jeśli przebywałeś w Niemczech ponad 6 miesięcy przed złożeniem wniosku)",
         uk: "Довідка про несудимість із Німеччини (у разі, якщо до подання заяви ви перебуваєте в Німеччині більш ніж 6 місяців)",
         ru: "Справка о несудимости из Германии (если вы находились в Германии более 6 месяцев до подачи заявления)",
         de: "Unbedenklichkeitsbescheinigung aus Deutschland (wenn Sie sich vor der Antragstellung länger als 6 Monate in Deutschland aufgehalten haben)",
      },
   },
   {
      id: 15,
      ...defaultProps,
      optional: true,
      hide: true,
      apostile: notNeededText,
      notary: notNeededText,
      translation: notNeededText,
      ready_copies: notNeededText,
      category: {
         en: "Residence registration in Germany",
         fr: "Enregistrement de résidence en Allemagne",
         es: "Registro de residencia en Alemania",
         ar: "تسجيل الإقامة في ألمانيا",
         tr: "Almanya'da ikamet kaydı",
         pl: "Rejestracja zameldowania w Niemczech",
         uk: "Прописка в Німеччині",
         ru: "Регистрация проживания в Германии",
         de: "Wohnsitzanmeldung in Deutschland",
      },
   },
];
