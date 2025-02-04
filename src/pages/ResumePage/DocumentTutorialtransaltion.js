// Приклад файлу перекладів для ResumeTutorial
// Ви можете доповнювати цей файл іншими мовами та ключами за потребою

const tutorialTranslations = {
    currentLanguage: "en", // Значення за замовчуванням; можна змінити або отримувати через глобальний стан
  
    en: {
      titles: {
        iconBar: "Icon Bar",
        dateField: "Date Field",
        descriptionField: "Description Field",
        placeField: "Place Field",
        hintButton: "Hint Button",
        addRowButton: "Add Row Button",
        deleteRowButton: "Delete Row Button",
        openModalButton: "Open Modal Button",
      },
      steps: {
        iconBar: "This is the resume sections panel. Here you can select: personal data, current status, work experience, education, language skills and technical skills.",
        dateField:
          "This is the date field. Please enter the date in MM/YYYY format, or 'seit MM/YYYY', or 'MM/YYYY - MM/YYYY', or 'MM/YYYY - heute'.",
        descriptionField:
          "This is the description field. Focus is set automatically so you can input the main information.",
        placeField:
          "This field is for the place and country for correct resume display.",
        hintButton: "Click on the lightbulb for tips on how to fill out your resume.",
        addRowButton: "Use this button to add a new row to your experience list.",
        deleteRowButton:
          "Use this button to delete a row if it is no longer needed. After this step, the description field loses focus.",
        openModalButton:
          "Use this button to delete a row if it is no longer needed. After this step, the description field loses focus.",
      },
      buttons: {
        back: "Back",
        close: "Close",
        last: "Finish",
        next: "Next",
        skip: "Skip",
      },
    },
  
    // Українська локалізація
    uk: {
      titles: {
        iconBar: "Панель іконок",
        dateField: "Поле дати",
        descriptionField: "Поле опису",
        placeField: "Поле місця",
        hintButton: "Кнопка підказки",
        addRowButton: "Додати рядок",
        deleteRowButton: "Видалити рядок",
        openModalButton: "Відкрити модальне вікно",
      },
      steps: {
        iconBar:
          "Це панель секцій резюме. Тут ви можете обрати: персональні дані, актуальний стан, професійний досвід, освіту, мовні навички та технічні навички.",
        dateField:
          "Це поле для вводу дат. Введіть дату у форматі MM/YYYY, або 'seit MM/YYYY', або 'MM/YYYY - MM/YYYY', або 'MM/YYYY - heute'.",
        descriptionField:
          "Це поле для вводу опису. Фокус встановлюється автоматично, щоб ви могли ввести основну інформацію.",
        placeField:
          "Тут необхідно вказати місце та країну для коректного відображення в резюме.",
        hintButton:
          "Натисніть на лампочку для отримання підказок, як краще заповнити резюме.",
        addRowButton: "Цією кнопкою ви можете додати новий рядок до списку досвіду.",
        deleteRowButton:
          "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
        openModalButton:
          "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
      },
      buttons: {
        back: "Назад",
        close: "Закрити",
        last: "Завершити",
        next: "Далі",
        skip: "Пропустити",
      },
    },
  
    // Російська локалізація
    ru: {
      titles: {
        iconBar: "Панель иконок",
        dateField: "Поле даты",
        descriptionField: "Поле описания",
        placeField: "Поле места",
        hintButton: "Кнопка подсказки",
        addRowButton: "Добавить строку",
        deleteRowButton: "Удалить строку",
        openModalButton: "Открыть модальное окно",
      },
      steps: {
        iconBar:
          "Это панель разделов резюме. Здесь вы можете выбрать: персональные данные, текущий статус, опыт работы, образование, языковые и технические навыки.",
        dateField:
          "Это поле для ввода дат. Введите дату в формате MM/YYYY, или 'seit MM/YYYY', или 'MM/YYYY - MM/YYYY', или 'MM/YYYY - heute'.",
        descriptionField:
          "Это поле для ввода описания. Фокус устанавливается автоматически, чтобы вы могли ввести основную информацию.",
        placeField:
          "Здесь необходимо указать место и страну для корректного отображения резюме.",
        hintButton:
          "Нажмите на лампочку для получения подсказок, как лучше заполнить резюме.",
        addRowButton: "Этой кнопкой вы можете добавить новую строку в список опыта.",
        deleteRowButton:
          "Этой кнопкой вы можете удалить строку, если она больше не нужна. После этого шага поле описания теряет фокус.",
        openModalButton:
          "Этой кнопкой вы можете удалить строку, если она больше не нужна. После этого шага поле описания теряет фокус.",
      },
      buttons: {
        back: "Назад",
        close: "Закрыть",
        last: "Завершить",
        next: "Далее",
        skip: "Пропустить",
      },
    },
  
    // Німецька (German)
    de: {
      titles: {
        iconBar: "Symbolleiste",
        dateField: "Datumsfeld",
        descriptionField: "Beschreibungsfeld",
        placeField: "Ortsfeld",
        hintButton: "Hinweis-Schaltfläche",
        addRowButton: "Zeile hinzufügen",
        deleteRowButton: "Zeile löschen",
        openModalButton: "Modal öffnen",
      },
      steps: {
        iconBar:
          "Dies ist die Lebenslauf-Sektionsleiste. Hier können Sie auswählen: persönliche Daten, aktueller Status, Berufserfahrung, Ausbildung, Sprachkenntnisse und technische Fähigkeiten.",
        dateField:
          "Dies ist das Datumsfeld. Bitte geben Sie das Datum im Format MM/YYYY ein, oder 'seit MM/YYYY', oder 'MM/YYYY - MM/YYYY', oder 'MM/YYYY - heute'.",
        descriptionField:
          "Dies ist das Beschreibungsfeld. Der Fokus wird automatisch gesetzt, damit Sie die Hauptinformationen eingeben können.",
        placeField:
          "Dieses Feld dient zur Angabe des Ortes und Landes für die korrekte Anzeige des Lebenslaufs.",
        hintButton:
          "Klicken Sie auf die Glühbirne, um Tipps zum Ausfüllen Ihres Lebenslaufs zu erhalten.",
        addRowButton:
          "Verwenden Sie diese Schaltfläche, um eine neue Zeile zu Ihrer Erfahrungsübersicht hinzuzufügen.",
        deleteRowButton:
          "Verwenden Sie diese Schaltfläche, um eine Zeile zu löschen, falls sie nicht mehr benötigt wird. Nach diesem Schritt verliert das Beschreibungsfeld den Fokus.",
        openModalButton:
          "Verwenden Sie diese Schaltfläche, um eine Zeile zu löschen, falls sie nicht mehr benötigt wird. Nach diesem Schritt verliert das Beschreibungsfeld den Fokus.",
      },
      buttons: {
        back: "Zurück",
        close: "Schließen",
        last: "Fertigstellen",
        next: "Weiter",
        skip: "Überspringen",
      },
    },
  
    // Французька (French)
    fr: {
      titles: {
        iconBar: "Barre d'icônes",
        dateField: "Champ de date",
        descriptionField: "Champ de description",
        placeField: "Champ de lieu",
        hintButton: "Bouton d'indice",
        addRowButton: "Ajouter une ligne",
        deleteRowButton: "Supprimer une ligne",
        openModalButton: "Ouvrir la fenêtre modale",
      },
      steps: {
        iconBar:
          "Ceci est la barre des sections du CV. Ici, vous pouvez sélectionner : données personnelles, statut actuel, expérience professionnelle, éducation, compétences linguistiques et techniques.",
        dateField:
          "Ceci est le champ de date. Veuillez entrer la date au format MM/YYYY, ou 'depuis MM/YYYY', ou 'MM/YYYY - MM/YYYY', ou 'MM/YYYY - aujourd'hui'.",
        descriptionField:
          "Ceci est le champ de description. Le focus est automatiquement défini afin que vous puissiez saisir les informations principales.",
        placeField:
          "Ce champ est destiné à indiquer le lieu et le pays pour un affichage correct du CV.",
        hintButton:
          "Cliquez sur l'ampoule pour obtenir des conseils sur la façon de remplir votre CV.",
        addRowButton:
          "Utilisez ce bouton pour ajouter une nouvelle ligne à votre liste d'expériences.",
        deleteRowButton:
          "Utilisez ce bouton pour supprimer une ligne si elle n'est plus nécessaire. Après cette étape, le champ de description perd le focus.",
        openModalButton:
          "Utilisez ce bouton pour supprimer une ligne si elle n'est plus nécessaire. Après cette étape, le champ de description perd le focus.",
      },
      buttons: {
        back: "Retour",
        close: "Fermer",
        last: "Terminer",
        next: "Suivant",
        skip: "Passer",
      },
    },
  
    // Іспанська (Spanish)
    es: {
      titles: {
        iconBar: "Barra de iconos",
        dateField: "Campo de fecha",
        descriptionField: "Campo de descripción",
        placeField: "Campo de lugar",
        hintButton: "Botón de sugerencia",
        addRowButton: "Agregar fila",
        deleteRowButton: "Eliminar fila",
        openModalButton: "Abrir ventana modal",
      },
      steps: {
        iconBar:
          "Esta es la barra de secciones del currículum. Aquí puedes seleccionar: datos personales, estado actual, experiencia laboral, educación, habilidades lingüísticas y técnicas.",
        dateField:
          "Este es el campo de fecha. Por favor, introduce la fecha en formato MM/YYYY, o 'desde MM/YYYY', o 'MM/YYYY - MM/YYYY', o 'MM/YYYY - hoy'.",
        descriptionField:
          "Este es el campo de descripción. El foco se establece automáticamente para que puedas ingresar la información principal.",
        placeField:
          "Este campo es para indicar el lugar y el país para la correcta visualización del currículum.",
        hintButton:
          "Haz clic en la bombilla para obtener consejos sobre cómo completar tu currículum.",
        addRowButton:
          "Usa este botón para agregar una nueva fila a tu lista de experiencias.",
        deleteRowButton:
          "Usa este botón para eliminar una fila si ya no es necesaria. Después de este paso, el campo de descripción pierde el foco.",
        openModalButton:
          "Usa este botón para eliminar una fila si ya no es necesaria. Después de este paso, el campo de descripción pierde el foco.",
      },
      buttons: {
        back: "Atrás",
        close: "Cerrar",
        last: "Finalizar",
        next: "Siguiente",
        skip: "Omitir",
      },
    },
  
    // Арабська (Arabic)
    ar: {
      titles: {
        iconBar: "شريط الأيقونات",
        dateField: "حقل التاريخ",
        descriptionField: "حقل الوصف",
        placeField: "حقل المكان",
        hintButton: "زر التلميح",
        addRowButton: "إضافة صف",
        deleteRowButton: "حذف الصف",
        openModalButton: "فتح النافذة المنبثقة",
      },
      steps: {
        iconBar:
          "هذا هو شريط أقسام السيرة الذاتية. هنا يمكنك اختيار: البيانات الشخصية، الحالة الحالية، الخبرة العملية، التعليم، المهارات اللغوية والتقنية.",
        dateField:
          "هذا هو حقل التاريخ. الرجاء إدخال التاريخ بصيغة MM/YYYY، أو 'منذ MM/YYYY'، أو 'MM/YYYY - MM/YYYY'، أو 'MM/YYYY - اليوم'.",
        descriptionField:
          "هذا هو حقل الوصف. يتم تعيين التركيز تلقائيًا حتى تتمكن من إدخال المعلومات الرئيسية.",
        placeField:
          "هذا الحقل مخصص لتحديد المكان والبلد للعرض الصحيح للسيرة الذاتية.",
        hintButton:
          "اضغط على المصباح للحصول على نصائح حول كيفية ملء سيرتك الذاتية.",
        addRowButton:
          "استخدم هذا الزر لإضافة صف جديد إلى قائمة خبراتك.",
        deleteRowButton:
          "استخدم هذا الزر لحذف صف إذا لم يعد ضروريًا. بعد هذه الخطوة، يفقد حقل الوصف التركيز.",
        openModalButton:
          "استخدم هذا الزر لحذف صف إذا لم يعد ضروريًا. بعد هذه الخطوة، يفقد حقل الوصف التركيز.",
      },
      buttons: {
        back: "رجوع",
        close: "إغلاق",
        last: "إنهاء",
        next: "التالي",
        skip: "تخطي",
      },
    },
  
    // Турецька (Turkish)
    tr: {
      titles: {
        iconBar: "Simge Çubuğu",
        dateField: "Tarih Alanı",
        descriptionField: "Açıklama Alanı",
        placeField: "Yer Alanı",
        hintButton: "İpucu Butonu",
        addRowButton: "Satır Ekle",
        deleteRowButton: "Satır Sil",
        openModalButton: "Modal Aç",
      },
      steps: {
        iconBar:
          "Bu, özgeçmiş bölümlerinin bulunduğu simge çubuğudur. Burada; kişisel veriler, mevcut durum, iş deneyimi, eğitim, dil ve teknik beceriler gibi seçenekleri seçebilirsiniz.",
        dateField:
          "Bu tarih alanıdır. Lütfen tarihi MM/YYYY formatında, ya 'MM/YYYY'den itibaren, ya da 'MM/YYYY - MM/YYYY' veya 'MM/YYYY - bugün' formatında giriniz.",
        descriptionField:
          "Bu açıklama alanıdır. Ana bilgileri girebilmeniz için odak otomatik olarak ayarlanır.",
        placeField:
          "Bu alan, özgeçmişin doğru görüntülenmesi için yer ve ülke bilgisini belirtmek içindir.",
        hintButton:
          "Özgeçmişinizi nasıl dolduracağınıza dair ipuçları almak için ampule tıklayın.",
        addRowButton:
          "Deneyim listenize yeni bir satır eklemek için bu butonu kullanın.",
        deleteRowButton:
          "Gereksiz olduğunda bir satırı silmek için bu butonu kullanın. Bu adımdan sonra açıklama alanı odağını kaybeder.",
        openModalButton:
          "Gereksiz olduğunda bir satırı silmek için bu butonu kullanın. Bu adımdan sonra açıklama alanı odağını kaybeder.",
      },
      buttons: {
        back: "Geri",
        close: "Kapat",
        last: "Bitir",
        next: "İleri",
        skip: "Atla",
      },
    },
  
    // Польська (Polish)
    pl: {
      titles: {
        iconBar: "Pasek ikon",
        dateField: "Pole daty",
        descriptionField: "Pole opisu",
        placeField: "Pole miejsca",
        hintButton: "Przycisk wskazówki",
        addRowButton: "Dodaj wiersz",
        deleteRowButton: "Usuń wiersz",
        openModalButton: "Otwórz okno modalne",
      },
      steps: {
        iconBar:
          "To jest pasek sekcji CV. Tutaj możesz wybrać: dane osobowe, aktualny status, doświadczenie zawodowe, wykształcenie, umiejętności językowe i techniczne.",
        dateField:
          "To jest pole daty. Proszę wprowadzić datę w formacie MM/YYYY, lub 'od MM/YYYY', lub 'MM/YYYY - MM/YYYY', lub 'MM/YYYY - dzisiaj'.",
        descriptionField:
          "To jest pole opisu. Fokus jest ustawiany automatycznie, abyś mógł wprowadzić główne informacje.",
        placeField:
          "To pole służy do określenia miejsca i kraju dla prawidłowego wyświetlenia CV.",
        hintButton:
          "Kliknij na żarówkę, aby uzyskać wskazówki, jak wypełnić CV.",
        addRowButton:
          "Użyj tego przycisku, aby dodać nowy wiersz do listy doświadczeń.",
        deleteRowButton:
          "Użyj tego przycisku, aby usunąć wiersz, jeśli nie jest już potrzebny. Po tym kroku pole opisu traci fokus.",
        openModalButton:
          "Użyj tego przycisku, aby usunąć wiersz, jeśli nie jest już potrzebny. Po tym kroku pole opisu traci fokus.",
      },
      buttons: {
        back: "Wstecz",
        close: "Zamknij",
        last: "Zakończ",
        next: "Dalej",
        skip: "Pomiń",
      },
    },
  };
  
  export default tutorialTranslations;