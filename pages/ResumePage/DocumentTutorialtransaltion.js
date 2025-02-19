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
        iconBar:
          "This is the resume sections panel. Here you can select the following sections: personal data, current status, work experience, education, language skills and technical skills.",
        dateField:
          "This is the date field. Please enter the date in MM/YYYY format, or 'seit MM/YYYY', or 'MM/YYYY - MM/YYYY', or 'MM/YYYY - today'.",
        descriptionField:
          "This is the description field. Here you can enter the information that will be displayed in your PDF resume.",
        placeField:
          "Specify the city and country for correct resume display.",
        hintButton:
          "Click on the lightbulb to get tips on how to fill out your resume.",
        addRowButton:
          "Click this button to add a new row to your experience list.",
        deleteRowButton:
          "Click this button to delete a row if it is no longer needed.",
        openModalButton:
          "In this menu, you can preview your resume or download the finished PDF file.",
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
        iconBar: "Панель секцій",
        dateField: "Поле дати",
        descriptionField: "Поле опису",
        placeField: "Поле місця",
        hintButton: "Кнопка підказки",
        addRowButton: "Додати рядок",
        deleteRowButton: "Видалити рядок",
        openModalButton: "Відкрити попередній перегляд",
      },
      steps: {
        iconBar:
          "Це панель секцій резюме. Тут ви можете обрати такі розділи: персональні дані, актуальний статус, професійний досвід, освіту, мовні та технічні навички",
        dateField:
          "Це поле для введення дат. Введіть дату у форматі MM/YYYY, або 'seit MM/YYYY', або 'MM/YYYY - MM/YYYY', або 'MM/YYYY - сьогодні'",
        descriptionField:
          "Це поле для введення опису. Тут ви можете вказати інформацію, яка відображатиметься у вашому PDF-резюме",
        placeField:
          "Вкажіть місто та країну для коректного відображення інформації в резюме",
        hintButton:
          "Натисніть на іконку лампочки, щоб отримати підказки щодо заповнення резюме",
        addRowButton:
          "Натисніть цю кнопку, щоб додати новий рядок до списку досвіду",
        deleteRowButton:
          "Натисніть цю кнопку, щоб видалити рядок, якщо він більше не потрібен",
        openModalButton:
          "У цьому меню ви можете переглянути попередній вигляд вашого резюме або завантажити готовий PDF-файл",
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
          "Это панель разделов резюме. Здесь вы можете выбрать следующие разделы: персональные данные, текущий статус, опыт работы, образование, языковые и технические навыки.",
        dateField:
          "Это поле для ввода дат. Введите дату в формате MM/YYYY, или 'seit MM/YYYY', или 'MM/YYYY - MM/YYYY', или 'MM/YYYY - сегодня'.",
        descriptionField:
          "Это поле для ввода описания. Здесь вы можете указать информацию, которая будет отображаться в вашем PDF-резюме.",
        placeField:
          "Укажите город и страну для корректного отображения резюме.",
        hintButton:
          "Нажмите на лампочку, чтобы получить подсказки по заполнению резюме.",
        addRowButton:
          "Нажмите эту кнопку, чтобы добавить новый ряд в список опыта.",
        deleteRowButton:
          "Нажмите эту кнопку, чтобы удалить ряд, если он больше не нужен.",
        openModalButton:
          "В этом меню вы можете просмотреть предварительный просмотр вашего резюме или скачать готовый PDF-файл.",
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
          "Dies ist die Lebenslauf-Sektionsleiste. Hier können Sie die folgenden Abschnitte auswählen: persönliche Daten, aktueller Status, Berufserfahrung, Ausbildung, Sprachkenntnisse und technische Fähigkeiten.",
        dateField:
          "Dies ist das Datumsfeld. Bitte geben Sie das Datum im Format MM/YYYY ein, oder 'seit MM/YYYY', oder 'MM/YYYY - MM/YYYY', oder 'MM/YYYY - heute'.",
        descriptionField:
          "Dies ist das Beschreibungsfeld. Hier können Sie die Informationen eingeben, die in Ihrem PDF-Lebenslauf angezeigt werden.",
        placeField:
          "Geben Sie die Stadt und das Land für die korrekte Anzeige des Lebenslaufs an.",
        hintButton:
          "Klicken Sie auf die Glühbirne, um Tipps zum Ausfüllen Ihres Lebenslaufs zu erhalten.",
        addRowButton:
          "Klicken Sie auf diese Schaltfläche, um eine neue Zeile zu Ihrer Erfahrungsübersicht hinzuzufügen.",
        deleteRowButton:
          "Klicken Sie auf diese Schaltfläche, um eine Zeile zu löschen, wenn sie nicht mehr benötigt wird.",
        openModalButton:
          "In diesem Menü können Sie eine Vorschau Ihres Lebenslaufs anzeigen oder die fertige PDF-Datei herunterladen.",
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
          "Ceci est la barre des sections du CV. Ici, vous pouvez sélectionner les sections suivantes : données personnelles, statut actuel, expérience professionnelle, éducation, compétences linguistiques et techniques.",
        dateField:
          "Ceci est le champ de date. Veuillez entrer la date au format MM/YYYY, ou 'depuis MM/YYYY', ou 'MM/YYYY - MM/YYYY', ou 'MM/YYYY - aujourd'hui'.",
        descriptionField:
          "Ceci est le champ de description. Ici, vous pouvez saisir les informations qui seront affichées dans votre CV au format PDF.",
        placeField:
          "Indiquez la ville et le pays pour un affichage correct du CV.",
        hintButton:
          "Cliquez sur l'ampoule pour obtenir des conseils sur la manière de remplir votre CV.",
        addRowButton:
          "Cliquez sur ce bouton pour ajouter une nouvelle ligne à votre liste d'expériences.",
        deleteRowButton:
          "Cliquez sur ce bouton pour supprimer une ligne si elle n'est plus nécessaire.",
        openModalButton:
          "Dans ce menu, vous pouvez prévisualiser votre CV ou télécharger le PDF final.",
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
          "Esta es la barra de secciones del currículum. Aquí puedes seleccionar las siguientes secciones: datos personales, estado actual, experiencia laboral, educación, habilidades lingüísticas y técnicas.",
        dateField:
          "Este es el campo de fecha. Por favor, introduce la fecha en formato MM/YYYY, o 'desde MM/YYYY', o 'MM/YYYY - MM/YYYY', o 'MM/YYYY - hoy'.",
        descriptionField:
          "Este es el campo de descripción. Aquí puedes ingresar la información que se mostrará en tu currículum en PDF.",
        placeField:
          "Especifica la ciudad y el país para una correcta visualización del currículum.",
        hintButton:
          "Haz clic en la bombilla para obtener consejos sobre cómo completar tu currículum.",
        addRowButton:
          "Haz clic en este botón para agregar una nueva fila a tu lista de experiencias.",
        deleteRowButton:
          "Haz clic en este botón para eliminar una fila si ya no es necesaria.",
        openModalButton:
          "En este menú, puedes previsualizar tu currículum o descargar el PDF final.",
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
          "هذا هو شريط أقسام السيرة الذاتية. هنا يمكنك اختيار الأقسام التالية: البيانات الشخصية، الحالة الحالية، الخبرة العملية، التعليم، المهارات اللغوية والتقنية.",
        dateField:
          "هذا هو حقل التاريخ. الرجاء إدخال التاريخ بصيغة MM/YYYY، أو 'منذ MM/YYYY'، أو 'MM/YYYY - MM/YYYY'، أو 'MM/YYYY - اليوم'.",
        descriptionField:
          "هذا هو حقل الوصف. هنا يمكنك إدخال المعلومات التي ستظهر في سيرتك الذاتية بصيغة PDF.",
        placeField:
          "حدد المدينة والبلد للعرض الصحيح للسيرة الذاتية.",
        hintButton:
          "اضغط على المصباح للحصول على نصائح حول كيفية ملء سيرتك الذاتية.",
        addRowButton:
          "اضغط على هذا الزر لإضافة صف جديد إلى قائمة خبراتك.",
        deleteRowButton:
          "اضغط على هذا الزر لحذف الصف إذا لم يعد ضروريًا.",
        openModalButton:
          "في هذا القائمة، يمكنك معاينة سيرتك الذاتية أو تنزيل ملف PDF النهائي.",
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
          "Bu, özgeçmiş bölümlerinin bulunduğu simge çubuğudur. Burada, aşağıdaki bölümleri seçebilirsiniz: kişisel veriler, mevcut durum, iş deneyimi, eğitim, dil ve teknik beceriler.",
        dateField:
          "Bu tarih alanıdır. Lütfen tarihi MM/YYYY formatında, ya 'MM/YYYY'den itibaren, ya da 'MM/YYYY - MM/YYYY' veya 'MM/YYYY - bugün' formatında giriniz.",
        descriptionField:
          "Bu açıklama alanıdır. Burada, PDF özgeçmişinizde görüntülenecek bilgileri girebilirsiniz.",
        placeField:
          "Özgeçmişin doğru görüntülenmesi için şehir ve ülkeyi belirtin.",
        hintButton:
          "Özgeçmişinizi nasıl dolduracağınıza dair ipuçları almak için ampule tıklayın.",
        addRowButton:
          "Bu butona tıklayarak deneyim listenize yeni bir satır ekleyin.",
        deleteRowButton:
          "Bu butona tıklayarak, artık gerekli değilse bir satırı silin.",
        openModalButton:
          "Bu menüde, özgeçmişinizin önizlemesini görebilir veya tamamlanmış PDF dosyasını indirebilirsiniz.",
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
          "To jest pasek sekcji CV. Tutaj możesz wybrać następujące sekcje: dane osobowe, aktualny status, doświadczenie zawodowe, wykształcenie, umiejętności językowe i techniczne.",
        dateField:
          "To jest pole daty. Proszę wprowadzić datę w formacie MM/YYYY, lub 'od MM/YYYY', lub 'MM/YYYY - MM/YYYY', lub 'MM/YYYY - dzisiaj'.",
        descriptionField:
          "To jest pole opisu. Tutaj możesz wprowadzić informacje, które będą wyświetlane w Twoim CV w formacie PDF.",
        placeField:
          "Podaj miasto i kraj, aby CV było prawidłowo wyświetlane.",
        hintButton:
          "Kliknij na żarówkę, aby uzyskać wskazówki, jak wypełnić CV.",
        addRowButton:
          "Kliknij ten przycisk, aby dodać nowy wiersz do listy doświadczeń.",
        deleteRowButton:
          "Kliknij ten przycisk, aby usunąć wiersz, jeśli nie jest już potrzebny.",
        openModalButton:
          "W tym menu możesz zobaczyć podgląd swojego CV lub pobrać gotowy plik PDF.",
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