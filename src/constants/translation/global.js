export const languageFlags = {
   de: "🇩🇪",
   en: "🇬🇧",
   uk: "🇺🇦",
   ru: "💩",
   tr: "🇹🇷", // Turkish
   ar: "🇸🇦", // Arabic
   fr: "🇫🇷", // French
   es: "🇪🇸", // Spanish
   pl: "🇵🇱", // Polish
};

export const DOMAIN_NAME = `https://doctors-guide-chi.vercel.app`;

export const DEFAULT_LANGUAGE = 'de'

export const languages = {
   ar: {
      choose_region: "يرجى اختيار منطقتك:",
      welcome: "مرحبًا بك في تطبيقنا للأطباء الذين يخططون للانتقال إلى ألمانيا!",
      next: "التالي",
      back: "السابق",
      continue: "متابعة",
      language: "اختيار اللغة:",
      options: [
         { value: "de", label: "الألمانية" },
         { value: "en", label: "الإنجليزية" },
         { value: "uk", label: "الأوكرانية" },
         { value: "ru", label: "الروسية" },
         { value: "tr", label: "التركية" },
         { value: "ar", label: "العربية" },
         { value: "fr", label: "الفرنسية" },
         { value: "es", label: "الإسبانية" },
         { value: "pl", label: "البولندية" },
      ],
      requirements: {
         title: "المتطلبات للاعتراف الطبي في ألمانيا:",
         medEducation: "التعليم الطبي: دراسات طبية مكتملة في جامعة في أوكرانيا. من المفضل إكمال الدراسات في كلية الطب.",
         aip: "التدريب الطبي (AiP): إكمال التدريب الطبي (AiP) بنجاح في أوكرانيا.",
         license: "رخصة في أوكرانيا: تصريح لممارسة الأنشطة الطبية في أوكرانيا.",
         languageSkills: "مهارات اللغة: شهادة حالية في اللغة الألمانية على مستوى B2.",
         note: "ملاحظة: هذه المتطلبات عامة وقد تختلف حسب الولاية في ألمانيا. من المهم متابعة التحديثات والتحقق من المتطلبات الخاصة على المواقع الرسمية للسلطات الصحية في الولايات الاتحادية.",
      },
   },
   de: {
      choose_region: "Bitte wählen Sie Ihr Bundesland:",
      welcome:
         "Herzlich willkommen in unserer App für Ärzte, die planen, nach Deutschland zu ziehen!",
      next: "Weiter",
      back: "Zurück",
      continue: "Fortfahren",
      language: "Sprache wählen:",
      options: [
            { "value": "de", "label": "Deutsch" },
            { "value": "en", "label": "Englisch" },
            { "value": "uk", "label": "Ukrainisch" },
            { "value": "ru", "label": "Russisch" },
            { "value": "tr", "label": "Türkisch" },
            { "value": "ar", "label": "Arabisch" },
            { "value": "fr", "label": "Französisch" },
            { "value": "es", "label": "Spanisch" },
            { "value": "pl", "label": "Polnisch" }
      ],
      requirements: {
         title: "Voraussetzungen für die medizinische Anerkennung in Deutschland:",
         medEducation:
            "Medizinische Ausbildung: Abgeschlossenes Hochschulstudium der Medizin in der Ukraine. Es ist wünschenswert, dass die Ausbildung an der medizinischen Fakultät abgeschlossen wurde.",
         aip: "Arzt im Praktikum (AiP): Erfolgreich abgeschlossenes Arzt im Praktikum (AiP) in der Ukraine.",
         license:
            "Lizenz in der Ukraine: Berechtigung zur Ausübung ärztlicher Tätigkeiten in der Ukraine.",
         languageSkills:
            "Sprachkenntnisse: Aktuelles Zertifikat über Deutschkenntnisse auf dem Niveau B2.",
         note: "Hinweis: Diese Voraussetzungen sind allgemein, und konkrete Anforderungen können je nach Bundesland in Deutschland variieren. Es ist wichtig, die Aktualisierungen der Anforderungen zu verfolgen und die spezifischen Voraussetzungen auf den offiziellen Websites der Gesundheitsbehörden der Bundesländer zu überprüfen.",
      },
   },
   en: {
      app_name: "Doctor-App",
      choose_region: "Please choose your region:",
      welcome: "Welcome to our app for doctors planning to move to Germany!",
      next: "Next",
      back: "Back",
      continue: "Continue",
      language: "Select Language:",
      options: [
         { value: "de", label: "German" },
         { value: "en", label: "English" },
         { value: "uk", label: "Ukrainian" },
         { value: "ru", label: "Russian" },
         { value: "tr", label: "Turkish" },
         { value: "ar", label: "Arabic" },
         { value: "fr", label: "French" },
         { value: "es", label: "Spanish" },
         { value: "pl", label: "Polish" },
      ],
      requirements: {
         title: "Requirements for medical recognition in Germany:",
         medEducation:
            "Medical Education: Completed medical studies at a university in Ukraine. Completion of studies at the medical faculty is desirable.",
         aip: "Physician in Internship (AiP): Successfully completed Physician in Internship (AiP) in Ukraine.",
         license:
            "License in Ukraine: Authorization to practice medical activities in Ukraine.",
         languageSkills:
            "Language Skills: Current certificate of German language proficiency at level B2.",
         note: "Note: These requirements are general, and specific requirements may vary by federal state in Germany. It is important to follow updates and check the specific requirements on the official websites of the health authorities of the federal states.",
      },
   },
   uk: {
      choose_region: "Будь ласка, оберіть свою область:",
      welcome:
         "Ласкаво просимо до нашого додатку для лікарів, які планують переїхати до Німеччини!",
      next: "Далі",
      back: "Назад",
      continue: "Продовжити",
      language: "Обрати мову:",
      options: [
         { value: "de", label: "Deutsch" },
         { value: "en", label: "English" },
         { value: "uk", label: "Українська" },
         { value: "ru", label: "Русский" },
         { value: "tr", label: "Türkçe" },
         { value: "ar", label: "العربية" },
         { value: "fr", label: "Français" },
         { value: "es", label: "Español" },
         { value: "pl", label: "Polski" },
      ],
      requirements: {
         title: "Вимоги до медичного визнання в Німеччині:",
         medEducation:
            "Медична освіта: Закінчена медична освіта в університеті в Україні. Бажано закінчення навчання на медичному факультеті.",
         aip: "Лікар в інтернатурі (AiP): Успішно пройдена інтернатура лікаря (AiP) в Україні.",
         license:
            "Ліцензія в Україні: Дозвіл на здійснення медичної діяльності в Україні.",
         languageSkills:
            "Мовні навички: Поточний сертифікат з володіння німецькою мовою на рівні B2.",
         note: "Примітка: Ці вимоги є загальними, і конкретні вимоги можуть відрізнятися залежно від федеральної землі в Німеччині. Важливо слідкувати за оновленнями та перевіряти конкретні вимоги на офіційних веб-сайтах органів охорони здоров'я федеральних земель.",
      },
   },
   ru: {
      choose_region: "Пожалуйста, выберите свой регион:",
      welcome:
         "Добро пожаловать в наше приложение для врачей, планирующих переезд в Германию!",
      next: "Далее",
      back: "Назад",
      continue: "Продолжить",
      language: "Выберите язык:",
      options: [
         { value: "de", label: "Немецкий" },
         { value: "en", label: "Английский" },
         { value: "uk", label: "Украинский" },
         { value: "ru", label: "Русский" },
         { value: "tr", label: "Türk" },
         { value: "ar", label: "العربية" },
         { value: "fr", label: "Французский" },
         { value: "es", label: "Испанский" },
         { value: "pl", label: "Польский" },
      ],
      requirements: {
         title: "Требования к медицинскому признанию в Германии:",
         medEducation:
            "Медицинское образование: Законченное высшее образование в области медицины в Украине. Желательно окончание обучения на медицинском факультете.",
         aip: "Стажировка врача (AiP): Успешно завершенная стажировка врача (AiP) в Украине.",
         license:
            "Лицензия в Украине: Разрешение на осуществление медицинской деятельности в Украине.",
         languageSkills:
            "Знание языка: Актуальный сертификат о владении немецким языком на уровне B2.",
         note: "Примечание: Эти требования являются общими, и конкретные требования могут различаться в зависимости от федеральной земли в Германии. Важно следить за обновлениями и проверять конкретные требования на официальных веб-сайтах органов здравоохранения федеральных земель.",
      },
   },
   tr: {
      choose_region: "Lütfen bölgenizi seçin:",
      welcome:
         "Almanya'ya taşınmayı planlayan doktorlar için uygulamamıza hoş geldiniz!",
      next: "İleri",
      back: "Geri",
      continue: "Devam",
      language: "Dil Seçin:",
      options: [
         { value: "de", label: "Almanca" },
         { value: "en", label: "İngilizce" },
         { value: "uk", label: "Ukraynaca" },
         { value: "ru", label: "Rusça" },
         { value: "tr", label: "Türkçe" },
         { value: "ar", label: "Arapça" },
         { value: "fr", label: "Fransızca" },
         { value: "es", label: "İspanyolca" },
         { value: "pl", label: "Lehçe" },
      ],
      requirements: {
         title: "Almanya'da tıbbi tanınma için gereksinimler:",
         medEducation:
            "Tıbbi Eğitim: Ukrayna'da bir üniversitede tamamlanmış tıp eğitimi. Tıp fakültesinde eğitimin tamamlanması tercih edilir.",
         aip: "Stajyer Doktor (AiP): Ukrayna'da başarıyla tamamlanmış Stajyer Doktor (AiP).",
         license:
            "Ukrayna Lisansı: Ukrayna'da tıbbi faaliyetlerin yürütülmesine yetkilendirme.",
         languageSkills:
            "Dil Becerileri: Almanca dil yeteneklerini B2 seviyesinde gösteren güncel bir sertifika.",
         note: "Not: Bu gereksinimler geneldir ve belirli gereksinimler Almanya'daki federal eyaletlere göre değişebilir. Güncellemeleri takip etmek ve federal eyaletlerin sağlık otoritelerinin resmi web sitelerinde belirli gereksinimleri kontrol etmek önemlidir.",
      },
   },
   pl: {
      choose_region: "Proszę wybrać swoje województwo:",
      welcome:
         "Witamy w naszej aplikacji dla lekarzy planujących przeprowadzkę do Niemiec!",
      next: "Dalej",
      back: "Wstecz",
      continue: "Kontynuuj",
      language: "Wybierz język:",
      options: [
         { value: "de", label: "Niemiecki" },
         { value: "en", label: "Angielski" },
         { value: "uk", label: "Ukraiński" },
         { value: "ru", label: "Rosyjski" },
         { value: "tr", label: "Turecki" },
         { value: "ar", label: "Arabski" },
         { value: "fr", label: "Francuski" },
         { value: "es", label: "Hiszpański" },
         { value: "pl", label: "Polski" },
      ],
      requirements: {
         title: "Wymagania dotyczące uznania kwalifikacji medycznych w Niemczech:",
         medEducation:
            "Wykształcenie medyczne: Ukończone studia medyczne na uniwersytecie na Ukrainie. Ukończenie studiów na wydziale medycznym jest pożądane.",
         aip: "Staż lekarski (AiP): Pomyślnie ukończony staż lekarski (AiP) na Ukrainie.",
         license:
            "Licencja na Ukrainie: Uprawnienie do wykonywania czynności lekarskich na Ukrainie.",
         languageSkills:
            "Umiejętności językowe: Aktualny certyfikat znajomości języka niemieckiego na poziomie B2.",
         note: "Uwaga: Te wymagania są ogólne, a konkretne wymagania mogą się różnić w zależności od landu w Niemczech. Ważne jest śledzenie aktualizacji i sprawdzanie szczegółowych wymagań na oficjalnych stronach internetowych organów zdrowia landów.",
      },
   },
   fr: {
      choose_region: "Veuillez choisir votre région :",
      welcome:
         "Bienvenue dans notre application pour les médecins qui envisagent de déménager en Allemagne !",
      next: "Suivant",
      back: "Retour",
      continue: "Continuer",
      language: "Choisir la langue :",
      options: [
         { value: "de", label: "Allemand" },
         { value: "en", label: "Anglais" },
         { value: "uk", label: "Ukrainien" },
         { value: "ru", label: "Russe" },
         { value: "tr", label: "Turc" },
         { value: "ar", label: "Arabe" },
         { value: "fr", label: "Français" },
         { value: "es", label: "Espagnol" },
         { value: "pl", label: "Polonais" },
      ],
      requirements: {
         title: "Exigences pour la reconnaissance médicale en Allemagne :",
         medEducation:
            "Formation médicale : Diplôme universitaire en médecine en Ukraine. L'achèvement des études à la faculté de médecine est souhaitable.",
         aip: "Stage en médecine (AiP) : Stage en médecine (AiP) réussi en Ukraine.",
         license:
            "Licence en Ukraine : Autorisation d'exercer des activités médicales en Ukraine.",
         languageSkills:
            "Compétences linguistiques : Certificat actuel de compétence en allemand au niveau B2.",
         note: "Remarque : Ces exigences sont générales et peuvent varier selon le Land en Allemagne. Il est important de suivre les mises à jour et de vérifier les exigences spécifiques sur les sites Web officiels des autorités sanitaires des Länder.",
      },
   },
   es: {
      choose_region: "Por favor, elige tu región:",
      welcome: "¡Bienvenido a nuestra aplicación para médicos que planean mudarse a Alemania!",
      next: "Siguiente",
      back: "Atrás",
      continue: "Continuar",
      language: "Selecciona el idioma:",
      options: [
         { value: "de", label: "Alemán" },
         { value: "en", label: "Inglés" },
         { value: "uk", label: "Ucraniano" },
         { value: "ru", label: "Ruso" },
         { value: "tr", label: "Turco" },
         { value: "ar", label: "Árabe" },
         { value: "fr", label: "Francés" },
         { value: "es", label: "Español" },
         { value: "pl", label: "Polaco" },
      ],
      requirements: {
         title: "Requisitos para el reconocimiento médico en Alemania:",
         medEducation: "Formación médica: Estudios de medicina completados en una universidad en Ucrania. Se prefiere la finalización de los estudios en la facultad de medicina.",
         aip: "Prácticas médicas (AiP): Prácticas médicas (AiP) completadas con éxito en Ucrania.",
         license: "Licencia en Ucrania: Autorización para ejercer actividades médicas en Ucrania.",
         languageSkills: "Habilidades lingüísticas: Certificado actual de competencia en alemán en el nivel B2.",
         note: "Nota: Estos requisitos son generales y pueden variar según el estado federal en Alemania. Es importante seguir las actualizaciones y verificar los requisitos específicos en los sitios web oficiales de las autoridades sanitarias de los estados federados.",
      },
   },
};