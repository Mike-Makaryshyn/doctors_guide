// src/constants/DocumentTutorialtransaltion.js

const tutorialTranslations = {
  uk: {
    titles: {
      is_exist: "Наявність",
      apostile: "Апостиль",
      notary: "Нотаріальне завірення",
      translation: "Переклад",
      ready_copies: "Готові копії",
      sent: "Відправлено",
    },
    steps: {
      
        mainTable:
          "Ця таблиця містить усі необхідні документи для подачі заяви. Ви можете переглядати список, перевіряти статус і позначати виконані пункти для ефективного контролю процесу.",
        progressBar:
          "Індикатор прогресу відображає загальний статус підготовки документів. Чим більше пунктів виконано, тим ближче ви до завершення.",
        is_exist:
          "У цій колонці можна відзначити документи, які вже є в наявності та не потребують додаткового отримання або підготовки.",
        header_apostile:
          "Це поле вказує на необхідність апостилю для документа. Якщо апостиль потрібен, обов’язково підготуйте його відповідно до вимог.",
        header_notary:
          "Цей стовпчик використовується для позначення, чи документ повинен бути завірений у нотаріуса перед подальшим використанням.",
        header_translation:
          "Тут ви можете зазначити, чи документ вже перекладено, або чи ще потребує перекладу для подальшої подачі.",
        header_ready_copies:
          "У цьому полі позначається, чи підготовлені нотаріально завірені копії документа перед його відправкою.",
        header_sent:
          "Поле показує, чи документ вже був відправлений до відповідних органів або установ.",
        secondTable:
          "У другій таблиці наведено додаткові документи та заяви, які можуть знадобитися залежно від ваших обставин.",
        regionalLink:
          "Тут ви знайдете корисні посилання для отримання інформації та завантаження необхідних документів відповідно до вибраного регіону.",
        optionalDocumentsSection:
          "Цей розділ містить додаткові документи, які не є обов'язковими, але можуть позитивно вплинути на розгляд вашої заяви.",
        printButton:
          "Натисніть цю кнопку, щоб отримати PDF-версію списку документів. Це зручно для перевірки інформації або консультації у відповідних структурах.",
         
          mobile: {
            firstTile:
              "Цей розділ містить список документів, які потрібно підготувати для подачі заяви. Ви можете відмічати виконані етапи для зручності.",
            progressBar:
              "Індикатор прогресу допомагає відстежувати, наскільки ви наблизилися до завершення збору документів.",
            is_exist:
              "Позначте цей пункт, якщо документ вже є у вас і не потребує додаткової підготовки чи замовлення.",
            apostile:
              "Позначте, якщо ви вже отримали апостиль для документа. Якщо ще ні, подбайте про це перед подачею.",
            notary:
              "Позначте, якщо ви вже завірили документ у нотаріуса. Це важливий етап перед подачею до відповідних органів.",
            translation:
              "Позначте, якщо ви вже переклали документ. Якщо переклад ще не зроблено, слід подбати про це заздалегідь.",
            ready_copies:
              "Позначте, якщо ви підготували нотаріально завірені копії документа, які необхідні для подачі.",
            sent:
              "Позначте, якщо ви вже відправили документ. Це допоможе контролювати етапи подачі.",
            documentSecondTile_3:
              "Цей розділ містить посилання на документи, необхідні для подачі заяви у вибраному регіоні.",
            optionalDocumentsSection:
              "Цей розділ містить додаткові документи, які можуть бути корисними, але не є обов’язковими.",
            printButton:
              "Створіть PDF-версію списку документів для зручного перегляду та використання під час консультацій.",
          },
    },
      // ДОДАНО ПЕРЕКЛАД КНОПОК
      buttons: {
        next: "Далі",
        back: "Назад",
        last: "Завершити",
        skip: "Пропустити",
        close: "Закрити",
      },
  },
de: {
  titles: {
    is_exist: "Verfügbarkeit",
    apostile: "Apostille",
    notary: "Notarielle Beglaubigung",
    translation: "Übersetzung",
    ready_copies: "Beglaubigte Kopien",
    sent: "Gesendet",
  },
    steps: {
      
        mainTable:
          "Diese Tabelle enthält alle erforderlichen Dokumente für die Antragstellung. Sie können die Liste durchsehen, den Status überprüfen und erledigte Punkte markieren, um den Fortschritt besser zu verfolgen.",
        progressBar:
          "Die Fortschrittsanzeige zeigt den aktuellen Status der Dokumentenvorbereitung. Je mehr Punkte erledigt sind, desto näher sind Sie dem Abschluss.",
        is_exist:
          "In dieser Spalte können Sie Dokumente markieren, die Sie bereits haben und nicht weiter vorbereitet oder beantragt werden müssen.",
        header_apostile:
          "Dieses Feld gibt an, ob eine Apostille für das jeweilige Dokument erforderlich ist. Falls ja, sollte sie rechtzeitig vorbereitet werden.",
        header_notary:
          "Dieses Feld zeigt an, ob das Dokument vor der weiteren Verwendung notariell beglaubigt werden muss.",
        header_translation:
          "Hier können Sie angeben, ob das Dokument bereits übersetzt wurde oder noch eine Übersetzung benötigt wird.",
        header_ready_copies:
          "In diesem Feld wird angezeigt, ob notariell beglaubigte Kopien des Dokuments vor dem Versand vorbereitet wurden.",
        header_sent:
          "Hier wird vermerkt, ob das Dokument bereits an die zuständigen Behörden oder Institutionen gesendet wurde.",
        secondTable:
          "In der zweiten Tabelle finden Sie zusätzliche Anträge und Dokumente, die je nach Ihren Umständen erforderlich sein könnten.",
        regionalLink:
          "Hier finden Sie nützliche Links, um Informationen zu erhalten und die erforderlichen Dokumente entsprechend Ihrer Region herunterzuladen.",
        optionalDocumentsSection:
          "Dieser Abschnitt enthält zusätzliche Dokumente, die nicht obligatorisch sind, aber den Antragsprozess positiv beeinflussen können.",
        printButton:
          "Klicken Sie auf diese Schaltfläche, um eine PDF-Version der Dokumentenliste zu erstellen. Dies ist praktisch für Überprüfungen oder Konsultationen mit den zuständigen Stellen.",
      
          
mobile: {
  firstTile:
    "Dieser Abschnitt enthält eine Liste der Dokumente, die für die Antragstellung vorbereitet werden müssen. Sie können erledigte Schritte zur besseren Übersicht markieren.",
  progressBar:
    "Die Fortschrittsanzeige hilft Ihnen, den Stand Ihrer Dokumentenvorbereitung zu verfolgen.",
  is_exist:
    "Markieren Sie dieses Feld, wenn Sie das Dokument bereits haben und keine weitere Vorbereitung oder Bestellung erforderlich ist.",
  apostile:
    "Markieren Sie, wenn Sie die Apostille für das Dokument bereits erhalten haben. Falls nicht, kümmern Sie sich darum vor der Einreichung.",
  notary:
    "Markieren Sie, wenn Sie das Dokument bereits notariell beglaubigt haben. Dies ist ein wichtiger Schritt vor der Übersetzung.",
  translation:
    "Markieren Sie, wenn Sie das Dokument bereits übersetzt haben. Falls nicht, organisieren Sie dies rechtzeitig.",
  ready_copies:
    "Markieren Sie, wenn Sie die notariell beglaubigten Kopien des Dokuments vorbereitet haben, die für die Einreichung erforderlich sind.",
  sent:
    "Markieren Sie, wenn Sie das Dokument bereits gesendet haben. Dies hilft, den Fortschritt der Einreichung zu verfolgen.",
  documentSecondTile_3:
    "Dieser Abschnitt enthält Links zu den für die Antragstellung in der ausgewählten Region erforderlichen Dokumenten.",
  optionalDocumentsSection:
    "Dieser Abschnitt enthält zusätzliche Dokumente, die hilfreich sein können, aber nicht zwingend erforderlich sind.",
  printButton:
    "Erstellen Sie eine PDF-Version der Dokumentenliste für eine bequeme Überprüfung und Nutzung während der Konsultationen.",
},
    },
    buttons: {
      next: "Weiter",
      back: "Zurück",
      last: "Beenden",
      skip: "Überspringen",
      close: "Schließen",
    },
  },
  en: {
    titles: {
      is_exist: "Availability",
      apostile: "Apostille",
      notary: "Notarization",
      translation: "Translation",
      ready_copies: "Certified Copies",
      sent: "Sent",
    },
    steps: {
      
        mainTable:
          "This table contains all the required documents for the application submission. You can review the list, check the status, and mark completed items to track your progress effectively.",
        progressBar:
          "The progress bar shows the current status of document preparation. The more items you complete, the closer you are to finishing.",
        is_exist:
          "In this column, you can mark documents that you already have and do not require further preparation or ordering.",
        header_apostile:
          "This field indicates whether an apostille is required for the document. If needed, it should be obtained in advance.",
        header_notary:
          "This field is used to indicate whether the document must be notarized before further use.",
        header_translation:
          "Here you can indicate whether the document has already been translated or still needs translation before submission.",
        header_ready_copies:
          "This field marks whether notarized copies of the document have been prepared before sending.",
        header_sent:
          "This field indicates whether the document has already been sent to the relevant authorities or institutions.",
        secondTable:
          "The second table contains additional applications and documents that may be required depending on your circumstances.",
        regionalLink:
          "Here you will find useful links to obtain information and download the necessary documents according to your selected region.",
        optionalDocumentsSection:
          "This section contains optional documents that are not mandatory but can positively influence the approval process.",
        printButton:
          "Click this button to generate a PDF version of the document list. This is convenient for verification or consultation with the relevant authorities.",
         
          mobile: {
            firstTile:
              "This section contains a list of documents that need to be prepared for submission. You can mark completed steps for convenience.",
            progressBar:
              "The progress indicator helps track how close you are to completing the document collection.",
            is_exist:
              "Mark this item if you already have the document and no further preparation or ordering is needed.",
            apostile:
              "Mark if you have already obtained the apostille for the document. If not, make sure to do so before submission.",
            notary:
              "Mark if you have already notarized the document. This is an important step before translation.",
            translation:
              "Mark if you have already translated the document. If not, make sure to arrange it in advance.",
            ready_copies:
              "Mark if you have prepared notarized copies of the document, which are required for submission.",
            sent:
              "Mark if you have already sent the document. This helps to track the submission progress.",
            documentSecondTile_3:
              "This section contains links to documents required for submission in the selected region.",
            optionalDocumentsSection:
              "This section contains additional documents that may be useful but are not mandatory.",
            printButton:
              "Create a PDF version of the document list for convenient review and use during consultations.",
          },
    },
    // Англійська (en)
buttons: {
  next: "Next",
  back: "Back",
  last: "Finish",
  skip: "Skip",
  close: "Close",
},
  },
  fr: {
    titles: {
      is_exist: "Disponibilité",
      apostile: "Apostille",
      notary: "Certification notariale",
      translation: "Traduction",
      ready_copies: "Copies certifiées",
      sent: "Envoyé",
    },
    steps: {
     
        mainTable:
          "Ce tableau contient tous les documents nécessaires pour soumettre votre demande. Vous pouvez consulter la liste, vérifier l'état d'avancement et marquer les éléments complétés pour suivre efficacement votre progression.",
        progressBar:
          "La barre de progression affiche l'état actuel de la préparation des documents. Plus vous complétez d'éléments, plus vous approchez de la finalisation.",
        is_exist:
          "Dans cette colonne, vous pouvez indiquer les documents que vous possédez déjà et qui ne nécessitent pas de préparation supplémentaire ou de commande.",
        header_apostile:
          "Ce champ indique si une apostille est requise pour le document. Si nécessaire, elle doit être obtenue à l'avance.",
        header_notary:
          "Ce champ est utilisé pour indiquer si le document doit être certifié par un notaire avant son utilisation.",
        header_translation:
          "Ici, vous pouvez indiquer si le document a déjà été traduit ou s'il doit encore l'être avant la soumission.",
        header_ready_copies:
          "Ce champ indique si des copies notariées du document ont été préparées avant l'envoi.",
        header_sent:
          "Ce champ indique si le document a déjà été envoyé aux autorités ou institutions compétentes.",
        secondTable:
          "Le deuxième tableau contient des demandes supplémentaires et des documents qui peuvent être requis selon votre situation.",
        regionalLink:
          "Vous trouverez ici des liens utiles pour obtenir des informations et télécharger les documents nécessaires selon votre région.",
        optionalDocumentsSection:
          "Cette section contient des documents optionnels qui ne sont pas obligatoires mais peuvent favoriser le processus d'approbation.",
        printButton:
          "Cliquez sur ce bouton pour générer une version PDF de la liste des documents. Utile pour vérification ou consultation avec les autorités compétentes.",
         
          mobile: {
            firstTile:
              "Cette section contient une liste des documents à préparer pour la soumission. Vous pouvez marquer les étapes complétées pour plus de commodité.",
            progressBar:
              "L'indicateur de progression permet de suivre votre avancement dans la collecte des documents.",
            is_exist:
              "Cochez cette case si vous avez déjà le document et qu'aucune préparation ou commande supplémentaire n'est nécessaire.",
            apostile:
              "Cochez si vous avez déjà obtenu l'apostille pour le document. Si ce n'est pas encore fait, veillez à le faire avant la soumission.",
            notary:
              "Cochez si vous avez déjà fait certifier le document par un notaire. C'est une étape importante avant la traduction.",
            translation:
              "Cochez si vous avez déjà traduit le document. Si ce n'est pas encore fait, assurez-vous de le faire à l'avance.",
            ready_copies:
              "Cochez si vous avez préparé les copies notariées du document, nécessaires à la soumission.",
            sent:
              "Cochez si vous avez déjà envoyé le document. Cela vous aide à suivre le progrès de la soumission.",
            documentSecondTile_3:
              "Cette section contient des liens vers les documents requis pour la soumission dans la région sélectionnée.",
            optionalDocumentsSection:
              "Cette section contient des documents supplémentaires qui peuvent être utiles mais ne sont pas obligatoires.",
            printButton:
              "Créez une version PDF de la liste des documents pour une consultation pratique.",
          },
    },
    buttons: {
      next: "Suivant",
      back: "Précédent",
      last: "Terminer",
      skip: "Ignorer",
      close: "Fermer",
    },
  },
  es: {
    titles: {
      is_exist: "Disponibilidad",
      apostile: "Apostilla",
      notary: "Legalización notarial",
      translation: "Traducción",
      ready_copies: "Copias certificadas",
      sent: "Enviado",
    },
    steps: {
     
        mainTable:
          "Esta tabla contiene todos los documentos necesarios para presentar su solicitud. Puede revisar la lista, verificar el estado y marcar los elementos completados para realizar un seguimiento eficaz del progreso.",
        progressBar:
          "La barra de progreso muestra el estado actual de la preparación de documentos. Cuantos más elementos complete, más cerca estará de finalizar.",
        is_exist:
          "En esta columna puede marcar los documentos que ya tiene y que no requieren preparación adicional o pedido.",
        header_apostile:
          "Este campo indica si el documento requiere apostilla. Si es necesario, debe obtenerse con antelación.",
        header_notary:
          "Este campo se utiliza para indicar si el documento debe ser notariado antes de su uso posterior.",
        header_translation:
          "Aquí puede indicar si el documento ya ha sido traducido o aún necesita traducción antes de la presentación.",
        header_ready_copies:
          "Este campo marca si las copias notariadas del documento han sido preparadas antes del envío.",
        header_sent:
          "Este campo indica si el documento ya ha sido enviado a las autoridades o instituciones pertinentes.",
        secondTable:
          "La segunda tabla contiene solicitudes adicionales y documentos que pueden ser necesarios según su situación.",
        regionalLink:
          "Aquí encontrará enlaces útiles para obtener información y descargar los documentos necesarios según la región seleccionada.",
        optionalDocumentsSection:
          "Esta sección contiene documentos opcionales que no son obligatorios pero pueden facilitar el proceso de aprobación.",
        printButton:
          "Haga clic en este botón para generar una versión en PDF de la lista de documentos. Útil para revisión o consulta con las autoridades correspondientes.",
         
          mobile: {
            firstTile:
              "Esta sección contiene una lista de documentos que deben prepararse para la presentación. Puede marcar los pasos completados para mayor comodidad.",
            progressBar:
              "El indicador de progreso ayuda a realizar un seguimiento de qué tan cerca está de completar la recopilación de documentos.",
            is_exist:
              "Marque esta opción si ya tiene el documento y no necesita más preparación ni pedido.",
            apostile:
              "Marque si ya ha obtenido la apostilla para el documento. Si no, asegúrese de hacerlo antes de la presentación.",
            notary:
              "Marque si ya ha notariado el documento. Este es un paso importante antes de la traducción.",
            translation:
              "Marque si ya ha traducido el documento. Si aún no lo ha hecho, organícelo con anticipación.",
            ready_copies:
              "Marque si ha preparado copias notariadas del documento, que son necesarias para la presentación.",
            sent:
              "Marque si ya ha enviado el documento. Esto ayuda a realizar un seguimiento del progreso de la presentación.",
            documentSecondTile_3:
              "Esta sección contiene enlaces a documentos requeridos para la presentación en la región seleccionada.",
            optionalDocumentsSection:
              "Esta sección contiene documentos adicionales que pueden ser útiles pero no obligatorios.",
            printButton:
              "Cree una versión en PDF de la lista de documentos para una revisión y uso conveniente durante las consultas.",
          },
    },
    buttons: {
      next: "Siguiente",
      back: "Atrás",
      last: "Finalizar",
      skip: "Omitir",
      close: "Cerrar",
    },
  },
  tr: {
    titles: {
      is_exist: "Mevcut",
      apostile: "Apostil",
      notary: "Noter Onayı",
      translation: "Çeviri",
      ready_copies: "Tasdikli Kopyalar",
      sent: "Gönderildi",
    },
    steps: {
     
        mainTable:
          "Bu tablo, başvuru için gerekli tüm belgeleri içermektedir. Listeyi gözden geçirebilir, durumu kontrol edebilir ve tamamlanan öğeleri işaretleyerek ilerlemenizi etkin bir şekilde takip edebilirsiniz.",
        progressBar:
          "İlerleme çubuğu, belge hazırlığının mevcut durumunu gösterir. Ne kadar çok öğeyi tamamlarsanız, süreci o kadar hızlı tamamlarsınız.",
        is_exist:
          "Bu sütunda, halihazırda sahip olduğunuz ve ek bir hazırlık veya sipariş gerektirmeyen belgeleri işaretleyebilirsiniz.",
        header_apostile:
          "Bu alan, belgenin apostil gerektirip gerektirmediğini gösterir. Eğer gerekliyse, önceden alınmalıdır.",
        header_notary:
          "Bu alan, belgenin noter tarafından tasdik edilmesi gerekip gerekmediğini belirtir.",
        header_translation:
          "Burada belgenin zaten çevrilmiş olup olmadığını veya çeviri gerekip gerekmediğini belirtebilirsiniz.",
        header_ready_copies:
          "Bu alan, belgenin noter onaylı kopyalarının gönderilmeden önce hazırlanıp hazırlanmadığını belirtir.",
        header_sent:
          "Bu alan, belgenin ilgili yetkililere veya kurumlara gönderilip gönderilmediğini gösterir.",
        secondTable:
          "İkinci tabloda, koşullarınıza bağlı olarak gerekli olabilecek ek başvurular ve belgeler bulunmaktadır.",
        regionalLink:
          "Seçtiğiniz bölgeye göre gerekli belgeleri indirmek ve bilgi almak için yararlı bağlantıları burada bulabilirsiniz.",
        optionalDocumentsSection:
          "Bu bölüm, zorunlu olmayan ancak onay sürecini olumlu yönde etkileyebilecek isteğe bağlı belgeleri içerir.",
        printButton:
          "Belge listesinin PDF sürümünü oluşturmak için bu düğmeye tıklayın. Bu, doğrulama veya ilgili makamlarla görüşmeler için kullanışlıdır.",
          
          mobile: {
            firstTile:
              "Bu bölüm, başvuru için hazırlanması gereken belgelerin bir listesini içerir. Tamamlanan adımları işaretleyerek ilerlemenizi takip edebilirsiniz.",
            progressBar:
              "İlerleme göstergesi, belge toplama sürecinin ne kadarını tamamladığınızı takip etmenize yardımcı olur.",
            is_exist:
              "Bu belgeyi zaten elinizde bulunduruyorsanız ve ek bir hazırlık gerekmiyorsa işaretleyin.",
            apostile:
              "Belge için apostil aldıysanız işaretleyin. Henüz almadıysanız, başvurudan önce bunu yapmanız gerekmektedir.",
            notary:
              "Belgeyi noter onayına sunduysanız işaretleyin. Bu, tercümeden önce önemli bir adımdır.",
            translation:
              "Belgeyi çevirdiyseniz işaretleyin. Henüz çevrilmediyse, önceden organize edilmesi gerekmektedir.",
            ready_copies:
              "Belgenin noter tasdikli kopyalarını hazırladıysanız işaretleyin. Bunlar başvuru için gereklidir.",
            sent:
              "Belgeyi zaten gönderdiyseniz işaretleyin. Bu, başvuru sürecini takip etmeye yardımcı olur.",
            documentSecondTile_3:
              "Bu bölüm, seçilen bölgede başvuru için gerekli belgelerle ilgili bağlantıları içerir.",
            optionalDocumentsSection:
              "Bu bölüm, zorunlu olmayan ancak başvurunuza olumlu katkı sağlayabilecek ek belgeleri içerir.",
            printButton:
              "Belgelerin PDF versiyonunu oluşturarak inceleme ve danışma sırasında kullanabilirsiniz.",
          },
    },
    buttons: {
      next: "İleri",
      back: "Geri",
      last: "Bitir",
      skip: "Atla",
      close: "Kapat",
    },
  },
  ar: {
    titles: {
      is_exist: "التوفر",
      apostile: "الأبوستيل",
      notary: "التوثيق",
      translation: "الترجمة",
      ready_copies: "نسخ موثقة",
      sent: "تم الإرسال",
    },
    steps: {
     
        mainTable:
          "تحتوي هذه الجدول على جميع المستندات المطلوبة لتقديم الطلب. يمكنك مراجعة القائمة والتحقق من الحالة ووضع علامة على العناصر المكتملة لتتبع تقدمك بشكل فعال.",
        progressBar:
          "يعرض شريط التقدم الحالة الحالية لإعداد المستندات. كلما أكملت المزيد من العناصر، اقتربت من إنهاء العملية.",
        is_exist:
          "في هذا العمود، يمكنك تحديد المستندات التي لديك بالفعل والتي لا تتطلب مزيدًا من التحضير أو الطلب.",
        header_apostile:
          "يشير هذا الحقل إلى ما إذا كان المستند يتطلب تصديق الأبوستيل. إذا لزم الأمر، يجب الحصول عليه مسبقًا.",
        header_notary:
          "يستخدم هذا الحقل لتوضيح ما إذا كان يجب توثيق المستند من قبل كاتب العدل قبل استخدامه.",
        header_translation:
          "يمكنك تحديد ما إذا كان المستند قد تمت ترجمته بالفعل أو ما إذا كان لا يزال بحاجة إلى ترجمة قبل التقديم.",
        header_ready_copies:
          "يحدد هذا الحقل ما إذا كانت النسخ الموثقة من المستند قد تم إعدادها قبل إرسالها.",
        header_sent:
          "يُظهر هذا الحقل ما إذا كان المستند قد تم إرساله إلى السلطات أو المؤسسات المختصة.",
        secondTable:
          "تحتوي الجدول الثانية على الطلبات الإضافية والمستندات التي قد تكون مطلوبة وفقًا لظروفك.",
        regionalLink:
          "هنا ستجد روابط مفيدة للحصول على المعلومات وتحميل المستندات المطلوبة حسب المنطقة التي اخترتها.",
        optionalDocumentsSection:
          "تتضمن هذه القسم المستندات الاختيارية التي ليست إلزامية ولكن يمكن أن تساعد في تسهيل عملية الموافقة.",
        printButton:
          "انقر على هذا الزر لإنشاء نسخة PDF من قائمة المستندات. هذا مفيد للمراجعة أو الاستشارة مع الجهات المختصة.",
         
          mobile: {
            firstTile:
              "يتضمن هذا القسم قائمة بالوثائق التي يجب تحضيرها لتقديم الطلب. يمكنك تحديد الخطوات المكتملة لراحتك.",
            progressBar:
              "يساعدك مؤشر التقدم في تتبع مدى اقترابك من إكمال جمع المستندات.",
            is_exist:
              "حدد هذا الخيار إذا كان لديك المستند بالفعل ولا تحتاج إلى إعداد أو طلب إضافي.",
            apostile:
              "حدد إذا كنت قد حصلت على أبوستيل للمستند. إذا لم يكن كذلك، فتأكد من القيام بذلك قبل التقديم.",
            notary:
              "حدد إذا كنت قد قمت بتوثيق المستند لدى كاتب العدل. هذه خطوة مهمة قبل الترجمة.",
            translation:
              "حدد إذا كنت قد ترجمت المستند. إذا لم يتم ترجمته بعد، تأكد من القيام بذلك مسبقًا.",
            ready_copies:
              "حدد إذا كنت قد أعددت النسخ الموثقة من المستند المطلوبة للتقديم.",
            sent:
              "حدد إذا كنت قد أرسلت المستند بالفعل. يساعد ذلك في تتبع تقدم الطلب.",
            documentSecondTile_3:
              "يحتوي هذا القسم على روابط للوثائق المطلوبة للتقديم في المنطقة المختارة.",
            optionalDocumentsSection:
              "يحتوي هذا القسم على مستندات إضافية قد تكون مفيدة ولكنها ليست إلزامية.",
            printButton:
              "قم بإنشاء نسخة PDF من قائمة المستندات لسهولة المراجعة والاستخدام أثناء الاستشارات.",
          },
    },
    buttons: {
      next: "التالي",
      back: "السابق",
      last: "إنهاء",
      skip: "تخطى",
      close: "إغلاق",
    },
  },
  pl: {
    titles: {
      is_exist: "Dostępność",
      apostile: "Apostille",
      notary: "Notarialne poświadczenie",
      translation: "Tłumaczenie",
      ready_copies: "Poświadczone kopie",
      sent: "Wysłano",
    },
    steps: {
      
        mainTable:
          "Ta tabela zawiera wszystkie niezbędne dokumenty do złożenia wniosku. Możesz przeglądać listę, sprawdzać status i oznaczać ukończone elementy, aby skutecznie śledzić postępy.",
        progressBar:
          "Pasek postępu pokazuje aktualny stan przygotowania dokumentów. Im więcej pozycji ukończysz, tym bliżej będziesz do zakończenia procesu.",
        is_exist:
          "W tej kolumnie możesz zaznaczyć dokumenty, które już posiadasz i nie wymagają dodatkowego przygotowania ani zamówienia.",
        header_apostile:
          "To pole wskazuje, czy dokument wymaga apostille. Jeśli tak, należy go uzyskać wcześniej.",
        header_notary:
          "To pole informuje, czy dokument musi być notarialnie poświadczony przed dalszym użyciem.",
        header_translation:
          "Tutaj możesz zaznaczyć, czy dokument został już przetłumaczony, czy wymaga jeszcze tłumaczenia przed złożeniem.",
        header_ready_copies:
          "To pole oznacza, czy poświadczone kopie dokumentu zostały przygotowane przed wysyłką.",
        header_sent:
          "To pole wskazuje, czy dokument został już wysłany do odpowiednich organów lub instytucji.",
        secondTable:
          "Druga tabela zawiera dodatkowe wnioski i dokumenty, które mogą być wymagane w zależności od Twojej sytuacji.",
        regionalLink:
          "Tutaj znajdziesz przydatne linki do pobrania niezbędnych dokumentów zgodnie z wybranym regionem.",
        optionalDocumentsSection:
          "Ta sekcja zawiera opcjonalne dokumenty, które nie są obowiązkowe, ale mogą pozytywnie wpłynąć na proces zatwierdzania.",
        printButton:
          "Kliknij ten przycisk, aby wygenerować wersję PDF listy dokumentów. Jest to wygodne do przeglądu lub konsultacji z odpowiednimi organami.",
         
          mobile: {
            firstTile:
              "Ta sekcja zawiera listę dokumentów, które należy przygotować do złożenia wniosku. Możesz zaznaczyć ukończone kroki dla wygody.",
            progressBar:
              "Pasek postępu pomaga śledzić, jak blisko jesteś do zakończenia zbierania dokumentów.",
            is_exist:
              "Zaznacz, jeśli już masz ten dokument i nie wymaga on dalszego przygotowania.",
            apostile:
              "Zaznacz, jeśli uzyskałeś już apostille dla dokumentu. Jeśli nie, zrób to przed złożeniem wniosku.",
            notary:
              "Zaznacz, jeśli dokument został już poświadczony notarialnie. Jest to ważny krok przed tłumaczeniem.",
            translation:
              "Zaznacz, jeśli dokument został już przetłumaczony. Jeśli nie, upewnij się, że zostanie to zrobione wcześniej.",
            ready_copies:
              "Zaznacz, jeśli przygotowałeś notarialnie poświadczone kopie dokumentu wymagane do złożenia.",
            sent:
              "Zaznacz, jeśli dokument został już wysłany. To pomoże śledzić postęp składania wniosku.",
            documentSecondTile_3:
              "Ta sekcja zawiera linki do dokumentów wymaganych w wybranym regionie.",
            optionalDocumentsSection:
              "Ta sekcja zawiera dodatkowe dokumenty, które mogą być przydatne, ale nie są obowiązkowe.",
            printButton:
              "Utwórz wersję PDF listy dokumentów do wygodnego przeglądania i wykorzystania podczas konsultacji.",
          },
    },
    // Польська (pl)
buttons: {
  next: "Dalej",
  back: "Wstecz",
  last: "Zakończ",
  skip: "Pomiń",
  close: "Zamknij",
},
  },
  ru: {
    titles: {
      is_exist: "Наличие",
      apostile: "Апостиль",
      notary: "Нотариальное заверение",
      translation: "Перевод",
      ready_copies: "Заверенные копии",
      sent: "Отправлено",
    },
    steps: {
     
        mainTable:
          "Эта таблица содержит все необходимые документы для подачи заявки. Вы можете просмотреть список, проверить статус и отметить выполненные пункты для эффективного контроля процесса.",
        progressBar:
          "Индикатор прогресса показывает текущий статус подготовки документов. Чем больше пунктов выполнено, тем ближе вы к завершению.",
        is_exist:
          "В этом столбце вы можете отметить документы, которые у вас уже есть и не требуют дополнительной подготовки или заказа.",
        header_apostile:
          "Это поле указывает, требуется ли апостиль для документа. Если да, его необходимо получить заранее.",
        header_notary:
          "Это поле используется для указания необходимости нотариального заверения документа перед дальнейшим использованием.",
        header_translation:
          "Здесь вы можете отметить, был ли документ уже переведен или еще требует перевода перед подачей.",
        header_ready_copies:
          "В этом поле отмечается, подготовлены ли нотариально заверенные копии документа перед отправкой.",
        header_sent:
          "Это поле показывает, был ли документ уже отправлен в соответствующие органы или учреждения.",
        secondTable:
          "Во второй таблице содержатся дополнительные заявления и документы, которые могут потребоваться в зависимости от ваших обстоятельств.",
        regionalLink:
          "Здесь вы найдете полезные ссылки для получения информации и загрузки необходимых документов в соответствии с выбранным регионом.",
        optionalDocumentsSection:
          "Этот раздел содержит дополнительные документы, которые не являются обязательными, но могут положительно повлиять на процесс одобрения.",
        printButton:
          "Нажмите эту кнопку, чтобы создать PDF-версию списка документов. Это удобно для проверки или консультации с соответствующими органами.",
         
          mobile: {
            firstTile:
              "Этот раздел содержит список документов, которые необходимо подготовить для подачи заявки. Вы можете отмечать выполненные этапы для удобства.",
            progressBar:
              "Индикатор прогресса помогает отслеживать, насколько близко вы к завершению сбора документов.",
            is_exist:
              "Отметьте этот пункт, если у вас уже есть документ, и дополнительная подготовка не требуется.",
            apostile:
              "Отметьте, если вы уже получили апостиль для документа. Если нет, позаботьтесь об этом перед подачей.",
            notary:
              "Отметьте, если документ уже заверен нотариусом. Это важный этап перед переводом.",
            translation:
              "Отметьте, если документ уже переведен. Если еще нет, организуйте это заранее.",
            ready_copies:
              "Отметьте, если вы подготовили нотариально заверенные копии документа, необходимые для подачи.",
            sent:
              "Отметьте, если документ уже был отправлен. Это поможет контролировать процесс подачи.",
            documentSecondTile_3:
              "Этот раздел содержит ссылки на документы, необходимые для подачи заявки в выбранном регионе.",
            optionalDocumentsSection:
              "Этот раздел содержит дополнительные документы, которые могут быть полезны, но не являются обязательными.",
            printButton:
              "Создайте PDF-версию списка документов для удобного просмотра и использования во время консультаций.",
          },
    },
    buttons: {
      next: "Далее",
      back: "Назад",
      last: "Завершить",
      skip: "Пропустить",
      close: "Закрыть",
    },
  }
};
// Додайте інші мови за потребою

export default tutorialTranslations;


