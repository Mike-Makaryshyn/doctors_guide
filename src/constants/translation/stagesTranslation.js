

export const APPROBATION_STAGES = {
    en: [
        {
          id: 1,
          title: "Explorer",
          avatar: "/assets/man-stage-1.png",
          description: "This is someone who is just starting their journey, exploring opportunities, studying the basics of relocation, and gathering the required documents.",
          tasks: [
            { id: 1.1, title: "Research potential regions for relocation" },
            { id: 1.2, title: "Familiarize yourself with the requirements for approbation" },
            { id: 1.3, title: "Create a list of necessary documents" },
            { id: 1.4, title: "Explore language courses beneficial for doctors" },
            { id: 1.5, title: "Check official websites of medical chambers for updated information" },
          ],
          congratsMessage: "Great job! You've completed the 'Explorer' stage. Keep moving forward!"
        },
        {
          id: 2,
          title: "Newcomer",
          description: "This is someone who has already moved to Germany, prepared the main documents, and continues to adapt.",
          tasks: [
            { id: 2.1, title: "Register your residence (Anmeldung)" },
            { id: 2.2, title: "Submit documents to the medical chamber" },
            { id: 2.3, title: "Translate your diploma with a certified translator" },
            { id: 2.4, title: "Complete the forms for submitting an application to the medical chamber" },
            { id: 2.5, title: "Enroll in language courses for level B1" },
            { id: 2.6, title: "Send the document package for review" },
          ],
          congratsMessage: "Congratulations! You've completed the 'Newcomer' stage. The next step is just around the corner!"
        },
        {
          id: 3,
          title: "Document Hunter",
          description: "This is someone actively gathering, preparing, and submitting documents for diploma recognition while beginning preparation for the FSP.",
          tasks: [
            { id: 3.1, title: "Gather all required academic documents" },
            { id: 3.2, title: "Obtain a certificate of no criminal record" },
            { id: 3.3, title: "Get a certificate of professional experience (if required)" },
            { id: 3.4, title: "Translate all documents with a certified translator" },
            { id: 3.5, title: "Notarize translations and document copies" },
            { id: 3.6, title: "Submit documents to the medical chamber for review" },
            { id: 3.7, title: "Start preparing for the FSP with a focus on medical terminology" },
          ],
          congratsMessage: "Great work! You've completed the 'Document Hunter' stage. You're getting closer to your goal!"
        },
        {
          id: 4,
          title: "Language Fighter",
          description: "This is someone preparing for the FSP, learning medical terminology, practicing medical consultations, and preparing for the exam.",
          tasks: [
            { id: 4.1, title: "Learn medical terminology using dictionaries and apps" },
            { id: 4.2, title: "Practice medical consultations with a partner" },
            { id: 4.3, title: "Enroll in preparatory courses for the FSP" },
            { id: 4.4, title: "Familiarize yourself with the structure of the FSP" },
            { id: 4.5, title: "Prepare phrase templates for explaining procedures to patients" },
            { id: 4.6, title: "Take mock exams or consult with a tutor" },
          ],
          congratsMessage: "Congratulations! You've completed the 'Language Fighter' stage. One step closer to success!"
        },
        {
          id: 5,
          title: "Language Master",
          description: "This is someone who has successfully passed the FSP, is searching for a job, and improving language skills.",
          tasks: [
            { id: 5.1, title: "Work on improving your German to C1 level" },
            { id: 5.2, title: "Prepare a resume and cover letter" },
            { id: 5.3, title: "Create a portfolio of professional documents" },
            { id: 5.4, title: "Send job applications to hospitals" },
            { id: 5.5, title: "Learn about the requirements for obtaining a temporary medical license (Berufserlaubnis)" },
          ],
          congratsMessage: "Well done! You've completed the 'Language Master' stage. Success is within reach!"
        },
        {
          id: 6,
          title: "Practicing Pioneer",
          description: "This is someone working with a temporary license, gaining experience, and preparing for the KP exam.",
          tasks: [
            { id: 6.1, title: "Work in a hospital with a temporary license" },
            { id: 6.2, title: "Familiarize yourself with Germany's clinical standards (AWMF)" },
            { id: 6.3, title: "Start preparing for the KP exam" },
            { id: 6.4, title: "Submit the application for the KP exam" },
          ],
          congratsMessage: "Excellent! You've completed the 'Practicing Pioneer' stage. The next step is just ahead!"
        },
        {
          id: 7,
          title: "Exam Pro",
          description: "This is someone focusing on preparing for the KP exam, completing mock tests, and finalizing preparation.",
          tasks: [
            { id: 7.1, title: "Prepare for the theoretical part of the KP exam" },
            { id: 7.2, title: "Complete mock tests to assess readiness" },
            { id: 7.3, title: "Consult with a tutor to evaluate your preparation" },
          ],
          congratsMessage: "Congratulations! You've completed the 'Exam Pro' stage. Almost ready for the full license!"
        },
        {
          id: 8,
          title: "Licensed Professional",
          description: "This is someone who has passed the KP exam and is finalizing their approbation.",
          tasks: [
            { id: 8.1, title: "Verify the readiness of documents for approbation" },
            { id: 8.2, title: "Submit the application for approbation" },
            { id: 8.3, title: "Learn about the rights and responsibilities of a doctor in Germany" },
            { id: 8.4, title: "Complete all formalities for obtaining approbation" },
          ],
          congratsMessage: "Well done! You've completed the 'Licensed Professional' stage. You're on the final stretch!"
        },
        {
          id: 9,
          title: "Legendary Doctor",
          description: "This is someone who has obtained approbation and officially started working as a doctor in Germany.",
          tasks: [
            { id: 9.1, title: "Officially start working in a hospital" },
            { id: 9.2, title: "Develop a long-term career plan" },
            { id: 9.3, title: "Participate in professional conferences or seminars" },
            { id: 9.4, title: "Get certified in a specialization (if required)" },
          ],
          congratsMessage: "Congratulations! You've completed the 'Legendary Doctor' stage. Welcome to professional life in Germany!"
        },
      ],
    de: [
        {
          id: 1,
          title: "Entdecker",
          avatar: "/assets/man-stage-1.png",
          description: "Das ist jemand, der gerade seine Reise beginnt, Möglichkeiten erkundet, die Grundlagen des Umzugs studiert und die erforderlichen Dokumente sammelt.",
          tasks: [
            { id: 1.1, title: "Erforschen Sie mögliche Regionen für den Umzug" },
            { id: 1.2, title: "Machen Sie sich mit den Anforderungen für die Approbation vertraut" },
            { id: 1.3, title: "Erstellen Sie eine Liste der benötigten Dokumente" },
            { id: 1.4, title: "Informieren Sie sich über Sprachkurse, die für Ärzte nützlich sind" },
            { id: 1.5, title: "Prüfen Sie die offiziellen Websites der Ärztekammern für aktuelle Informationen" },
          ],
          congratsMessage: "Tolle Arbeit! Sie haben den 'Entdecker'-Schritt abgeschlossen. Weiter so!"
        },
        {
          id: 2,
          title: "Neuankömmling",
          description: "Das ist jemand, der bereits nach Deutschland gezogen ist, die wichtigsten Dokumente vorbereitet hat und sich weiter anpasst.",
          tasks: [
            { id: 2.1, title: "Melden Sie Ihren Wohnsitz an (Anmeldung)" },
            { id: 2.2, title: "Reichen Sie die Unterlagen bei der Ärztekammer ein" },
            { id: 2.3, title: "Lassen Sie Ihr Diplom von einem zertifizierten Übersetzer übersetzen" },
            { id: 2.4, title: "Füllen Sie die Formulare für die Antragstellung bei der Ärztekammer aus" },
            { id: 2.5, title: "Melden Sie sich für Sprachkurse auf Niveau B1 an" },
            { id: 2.6, title: "Senden Sie das Dokumentenpaket zur Überprüfung ein" },
          ],
          congratsMessage: "Herzlichen Glückwunsch! Sie haben den 'Neuankömmling'-Schritt abgeschlossen. Der nächste Schritt ist ganz nah!"
        },
        {
          id: 3,
          title: "Dokumentenjäger",
          description: "Das ist jemand, der aktiv Dokumente sammelt, vorbereitet und einreicht, um seinen Abschluss anerkennen zu lassen, und sich auf die FSP vorbereitet.",
          tasks: [
            { id: 3.1, title: "Sammeln Sie alle erforderlichen akademischen Dokumente" },
            { id: 3.2, title: "Beantragen Sie ein Führungszeugnis" },
            { id: 3.3, title: "Holen Sie bei Bedarf eine Bescheinigung über die Berufserfahrung ein" },
            { id: 3.4, title: "Lassen Sie alle Dokumente von einem zertifizierten Übersetzer übersetzen" },
            { id: 3.5, title: "Beglaubigen Sie Übersetzungen und Kopien notariell" },
            { id: 3.6, title: "Senden Sie die Dokumente zur Überprüfung an die Ärztekammer" },
            { id: 3.7, title: "Beginnen Sie mit der Vorbereitung auf die FSP mit Schwerpunkt auf medizinischer Terminologie" },
          ],
          congratsMessage: "Großartig! Sie haben den 'Dokumentenjäger'-Schritt abgeschlossen. Sie kommen Ihrem Ziel näher!"
        },
        {
          id: 4,
          title: "Sprachkämpfer",
          description: "Das ist jemand, der sich auf die FSP vorbereitet, medizinische Terminologie lernt, ärztliche Gespräche übt und sich auf die Prüfung vorbereitet.",
          tasks: [
            { id: 4.1, title: "Lernen Sie medizinische Terminologie mit Wörterbüchern und Apps" },
            { id: 4.2, title: "Üben Sie ärztliche Gespräche mit einem Partner" },
            { id: 4.3, title: "Melden Sie sich für Vorbereitungskurse zur FSP an" },
            { id: 4.4, title: "Machen Sie sich mit der Struktur der FSP vertraut" },
            { id: 4.5, title: "Bereiten Sie Redewendungen für die Erklärung von Verfahren vor" },
            { id: 4.6, title: "Absolvieren Sie Probeprüfungen oder Konsultationen mit einem Lehrer" },
          ],
          congratsMessage: "Herzlichen Glückwunsch! Sie haben den 'Sprachkämpfer'-Schritt abgeschlossen. Ein weiterer Schritt zum Erfolg!"
        },
        {
          id: 5,
          title: "Sprachmeister",
          description: "Das ist jemand, der die FSP erfolgreich bestanden hat, auf Jobsuche ist und seine Sprachkenntnisse verbessert.",
          tasks: [
            { id: 5.1, title: "Arbeiten Sie an der Verbesserung Ihrer Deutschkenntnisse auf Niveau C1" },
            { id: 5.2, title: "Erstellen Sie einen Lebenslauf und ein Anschreiben" },
            { id: 5.3, title: "Bereiten Sie ein Portfolio mit beruflichen Dokumenten vor" },
            { id: 5.4, title: "Senden Sie Bewerbungen an Krankenhäuser" },
            { id: 5.5, title: "Informieren Sie sich über die Anforderungen für die Berufserlaubnis" },
          ],
          congratsMessage: "Großartig! Sie haben den 'Sprachmeister'-Schritt abgeschlossen. Der Erfolg ist zum Greifen nah!"
        },
        {
          id: 6,
          title: "Praktizierender Pionier",
          description: "Das ist jemand, der mit einer vorläufigen Lizenz arbeitet, Erfahrung sammelt und sich auf die KP vorbereitet.",
          tasks: [
            { id: 6.1, title: "Arbeiten Sie mit einer vorläufigen Lizenz in einem Krankenhaus" },
            { id: 6.2, title: "Machen Sie sich mit den klinischen Standards in Deutschland (AWMF) vertraut" },
            { id: 6.3, title: "Beginnen Sie mit der Vorbereitung auf die KP" },
            { id: 6.4, title: "Reichen Sie den Antrag auf die KP ein" },
          ],
          congratsMessage: "Großartig! Sie haben den 'Praktizierender Pionier'-Schritt abgeschlossen. Der nächste Schritt ist ganz nah!"
        },
        {
          id: 7,
          title: "Prüfungsprofi",
          description: "Das ist jemand, der sich auf die KP konzentriert, Probetests durchführt und die Vorbereitung abschließt.",
          tasks: [
            { id: 7.1, title: "Bereiten Sie sich auf den theoretischen Teil der KP vor" },
            { id: 7.2, title: "Führen Sie Probetests durch, um Ihre Bereitschaft zu überprüfen" },
            { id: 7.3, title: "Konsultieren Sie einen Lehrer, um Ihre Vorbereitung zu bewerten" },
          ],
          congratsMessage: "Herzlichen Glückwunsch! Sie haben den 'Prüfungsprofi'-Schritt abgeschlossen. Fast bereit für die vollständige Lizenz!"
        },
        {
          id: 8,
          title: "Lizenzierter Profi",
          description: "Das ist jemand, der die KP erfolgreich bestanden hat und die Approbation abschließt.",
          tasks: [
            { id: 8.1, title: "Überprüfen Sie die Fertigstellung der Dokumente für die Approbation" },
            { id: 8.2, title: "Reichen Sie den Antrag auf Approbation ein" },
            { id: 8.3, title: "Machen Sie sich mit den Rechten und Pflichten eines Arztes in Deutschland vertraut" },
            { id: 8.4, title: "Schließen Sie alle Formalitäten für die Approbation ab" },
          ],
          congratsMessage: "Großartig! Sie haben den 'Lizenzierter Profi'-Schritt abgeschlossen. Sie sind auf der Zielgeraden!"
        },
        {
          id: 9,
          title: "Legendenarzt",
          description: "Das ist jemand, der die Approbation erhalten hat und offiziell als Arzt in Deutschland arbeitet.",
          tasks: [
            { id: 9.1, title: "Beginnen Sie offiziell mit der Arbeit in einem Krankenhaus" },
            { id: 9.2, title: "Entwickeln Sie einen langfristigen Karriereplan" },
            { id: 9.3, title: "Nehmen Sie an professionellen Konferenzen oder Seminaren teil" },
            { id: 9.4, title: "Holen Sie sich eine Zertifizierung in einer Fachrichtung (falls erforderlich)" },
          ],
          congratsMessage: "Herzlichen Glückwunsch! Sie haben den 'Legendenarzt'-Schritt abgeschlossen. Willkommen im Berufsleben in Deutschland!"
        },
      ],
    uk: [
        {
          id: 1,
          title: "Дослідник",
          avatar: "/assets/man-stage-1.png",
          description: "Це той, хто тільки починає свій шлях, досліджує можливості, вивчає основи переїзду та вимоги апробації, а також починає збирати необхідні документи.",
          tasks: [
            { id: 1.1, title: "Дослідити можливі регіони для переїзду" },
            { id: 1.2, title: "Ознайомитися з вимогами до апробації" },
            { id: 1.3, title: "Скласти список необхідних документів" },
            { id: 1.4, title: "Ознайомитися з мовними курсами, корисними для лікарів" },
            { id: 1.5, title: "Перевірити офіційні сайти лікарських палат для отримання актуальної інформації" },
          ],
          congratsMessage: "Чудова робота! Ви завершили етап 'Дослідник'. Продовжуйте рухатися вперед!"
        },
        {
          id: 2,
          title: "Новоприбулий",
          description: "Це той, хто вже переїхав до Німеччини, підготував основні документи та продовжує адаптацію.",
          tasks: [
            { id: 2.1, title: "Зареєструвати місце проживання (Anmeldung)" },
            { id: 2.2, title: "Подати документи до лікарської палати" },
            { id: 2.3, title: "Перекласти диплом сертифікованим перекладачем" },
            { id: 2.4, title: "Заповнити форми для подачі заявки до лікарської палати" },
            { id: 2.5, title: "Записатися на мовні курси для рівня B1" },
            { id: 2.6, title: "Надіслати пакет документів для перевірки" },
          ],
          congratsMessage: "Вітаємо! Ви завершили етап 'Новоприбулий'. Наступний крок уже близько!"
        },
        {
          id: 3,
          title: "Збирач документів",
          description: "Це той, хто активно збирає, готує та подає документи для визнання диплома, а також починає підготовку до FSP.",
          tasks: [
            { id: 3.1, title: "Зібрати всі необхідні академічні документи" },
            { id: 3.2, title: "Оформити довідку про несудимість" },
            { id: 3.3, title: "Отримати довідку про професійний стаж (за потреби)" },
            { id: 3.4, title: "Перекласти документи сертифікованим перекладачем" },
            { id: 3.5, title: "Нотаріально завірити переклади та копії документів" },
            { id: 3.6, title: "Надіслати документи до лікарської палати для перевірки" },
            { id: 3.7, title: "Розпочати підготовку до FSP з фокусом на медичній термінології" },
          ],
          congratsMessage: "Чудово! Ви завершили етап 'Збирач документів'. Ви все ближче до мети!"
        },
        {
          id: 4,
          title: "Борець за мову",
          description: "Це той, хто готується до FSP, вивчає медичну термінологію, практикує лікарські консультації та готується до іспиту.",
          tasks: [
            { id: 4.1, title: "Вивчити медичну термінологію за допомогою словників і додатків" },
            { id: 4.2, title: "Практикувати лікарські консультації з партнером" },
            { id: 4.3, title: "Записатися на підготовчі курси для FSP" },
            { id: 4.4, title: "Ознайомитися зі структурою іспиту FSP" },
            { id: 4.5, title: "Скласти шаблони фраз для пояснення процедур пацієнтам" },
            { id: 4.6, title: "Проходити пробні іспити або консультації з викладачем" },
          ],
          congratsMessage: "Вітаємо! Ви завершили етап 'Борець за мову'. Ще один крок до успіху!"
        },
        {
          id: 5,
          title: "Майстер мови",
          description: "Це той, хто успішно склав FSP, готується до пошуку роботи та вдосконалює мовні навички.",
          tasks: [
            { id: 5.1, title: "Вивчати мову до рівня C1" },
            { id: 5.2, title: "Скласти резюме та супровідний лист" },
            { id: 5.3, title: "Підготувати портфоліо з професійними документами" },
            { id: 5.4, title: "Надіслати заявки на роботу в лікарні" },
            { id: 5.5, title: "Ознайомитися з вимогами для отримання Berufserlaubnis" },
          ],
          congratsMessage: "Чудово! Ви завершили етап 'Майстер мови'. Успіх вже близько!"
        },
        {
          id: 6,
          title: "Практик-першопроходець",
          description: "Це той, хто працює з тимчасовою ліцензією, здобуває досвід та готується до іспиту KP.",
          tasks: [
            { id: 6.1, title: "Працювати в лікарні з тимчасовою ліцензією" },
            { id: 6.2, title: "Ознайомитися з клінічними стандартами Німеччини (AWMF)" },
            { id: 6.3, title: "Розпочати підготовку до іспиту KP" },
            { id: 6.4, title: "Подати заявку на складання KP" },
          ],
          congratsMessage: "Чудово! Ви завершили етап 'Практик-першопроходець'. Наступний крок вже зовсім поруч!"
        },
        {
          id: 7,
          title: "Експерт іспитів",
          description: "Це той, хто зосереджений на складанні іспиту KP, виконує пробні тести та завершує підготовку.",
          tasks: [
            { id: 7.1, title: "Готуватися до теоретичної частини іспиту" },
            { id: 7.2, title: "Виконувати пробні тести для перевірки готовності" },
            { id: 7.3, title: "Консультуватися з викладачем для оцінки підготовки" },
          ],
          congratsMessage: "Вітаємо! Ви завершили етап 'Експерт іспитів'. Майже готові до повної ліцензії!"
        },
        {
          id: 8,
          title: "Ліцензований професіонал",
          description: "Це той, хто успішно склав іспит KP і завершує отримання Approbation.",
          tasks: [
            { id: 8.1, title: "Перевірити готовність документів для Approbation" },
            { id: 8.2, title: "Подати заявку на Approbation" },
            { id: 8.3, title: "Ознайомитися з правами та обов'язками лікаря в Німеччині" },
            { id: 8.4, title: "Завершити всі формальності для отримання Approbation" },
          ],
          congratsMessage: "Чудово! Ви завершили етап 'Ліцензований професіонал'. Ви на фінальному етапі!"
        },
        {
          id: 9,
          title: "Легендарний лікар",
          description: "Це той, хто отримав Approbation і офіційно розпочав роботу лікарем у Німеччині.",
          tasks: [
            { id: 9.1, title: "Розпочати офіційну роботу в лікарні" },
            { id: 9.2, title: "Розробити довгостроковий план кар’єри" },
            { id: 9.3, title: "Взяти участь у професійних конференціях або семінарах" },
            { id: 9.4, title: "Отримати сертифікацію у вузькій спеціалізації (за потреби)" },
          ],
          congratsMessage: "Вітаємо! Ви завершили етап 'Легендарний лікар'. Ласкаво просимо до професійного життя в Німеччині!"
        },
      ],
      ru: [
        {
          id: 1,
          title: "Исследователь",
          avatar: "/assets/man-stage-1.png",
          description: "Это тот, кто только начинает свой путь, исследует возможности, изучает основы переезда и требования для получения апробации, а также начинает собирать необходимые документы.",
          tasks: [
            { id: 1.1, title: "Исследовать возможные регионы для переезда" },
            { id: 1.2, title: "Ознакомиться с требованиями для получения апробации" },
            { id: 1.3, title: "Составить список необходимых документов" },
            { id: 1.4, title: "Изучить языковые курсы, полезные для врачей" },
            { id: 1.5, title: "Проверить официальные сайты медицинских палат для получения актуальной информации" },
          ],
          congratsMessage: "Отлично! Вы завершили этап 'Исследователь'. Продолжайте двигаться вперед!"
        },
        {
          id: 2,
          title: "Новоприбывший",
          description: "Это тот, кто уже переехал в Германию, подготовил основные документы и продолжает адаптацию.",
          tasks: [
            { id: 2.1, title: "Зарегистрировать место проживания (Anmeldung)" },
            { id: 2.2, title: "Подать документы в медицинскую палату" },
            { id: 2.3, title: "Перевести диплом у сертифицированного переводчика" },
            { id: 2.4, title: "Заполнить формы для подачи заявления в медицинскую палату" },
            { id: 2.5, title: "Записаться на языковые курсы уровня B1" },
            { id: 2.6, title: "Отправить пакет документов на проверку" },
          ],
          congratsMessage: "Поздравляем! Вы завершили этап 'Новоприбывший'. Следующий шаг уже близко!"
        },
        {
          id: 3,
          title: "Охотник за документами",
          description: "Это тот, кто активно собирает, готовит и подает документы для признания диплома, а также начинает подготовку к FSP.",
          tasks: [
            { id: 3.1, title: "Собрать все необходимые академические документы" },
            { id: 3.2, title: "Получить справку о несудимости" },
            { id: 3.3, title: "Получить справку о профессиональном опыте (при необходимости)" },
            { id: 3.4, title: "Перевести все документы у сертифицированного переводчика" },
            { id: 3.5, title: "Нотариально заверить переводы и копии документов" },
            { id: 3.6, title: "Отправить документы в медицинскую палату для проверки" },
            { id: 3.7, title: "Начать подготовку к FSP с упором на медицинскую терминологию" },
          ],
          congratsMessage: "Отлично! Вы завершили этап 'Охотник за документами'. Вы на шаг ближе к своей цели!"
        },
        {
          id: 4,
          title: "Боец за язык",
          description: "Это тот, кто готовится к FSP, изучает медицинскую терминологию, практикует врачебные консультации и готовится к экзамену.",
          tasks: [
            { id: 4.1, title: "Изучить медицинскую терминологию с помощью словарей и приложений" },
            { id: 4.2, title: "Практиковать врачебные консультации с партнером" },
            { id: 4.3, title: "Записаться на подготовительные курсы для FSP" },
            { id: 4.4, title: "Ознакомиться со структурой экзамена FSP" },
            { id: 4.5, title: "Подготовить шаблоны фраз для объяснения процедур пациентам" },
            { id: 4.6, title: "Пройти пробные экзамены или консультации с преподавателем" },
          ],
          congratsMessage: "Поздравляем! Вы завершили этап 'Боец за язык'. Еще один шаг к успеху!"
        },
        {
          id: 5,
          title: "Мастер языка",
          description: "Это тот, кто успешно сдал FSP, ищет работу и продолжает совершенствовать языковые навыки.",
          tasks: [
            { id: 5.1, title: "Работать над улучшением уровня немецкого языка до уровня C1" },
            { id: 5.2, title: "Составить резюме и сопроводительное письмо" },
            { id: 5.3, title: "Подготовить портфолио с профессиональными документами" },
            { id: 5.4, title: "Отправить заявки на работу в больницы" },
            { id: 5.5, title: "Ознакомиться с требованиями для получения временной лицензии (Berufserlaubnis)" },
          ],
          congratsMessage: "Отлично! Вы завершили этап 'Мастер языка'. Успех уже близко!"
        },
        {
          id: 6,
          title: "Практикующий первопроходец",
          description: "Это тот, кто работает с временной лицензией, набирается опыта и готовится к экзамену KP.",
          tasks: [
            { id: 6.1, title: "Работать в больнице с временной лицензией" },
            { id: 6.2, title: "Ознакомиться с клиническими стандартами Германии (AWMF)" },
            { id: 6.3, title: "Начать подготовку к экзамену KP" },
            { id: 6.4, title: "Подать заявление на сдачу экзамена KP" },
          ],
          congratsMessage: "Отлично! Вы завершили этап 'Практикующий первопроходец'. Следующий шаг совсем близко!"
        },
        {
          id: 7,
          title: "Эксперт экзаменов",
          description: "Это тот, кто сосредоточен на подготовке к экзамену KP, выполняет пробные тесты и завершает подготовку.",
          tasks: [
            { id: 7.1, title: "Готовиться к теоретической части экзамена KP" },
            { id: 7.2, title: "Проходить пробные тесты для проверки готовности" },
            { id: 7.3, title: "Консультироваться с преподавателем для оценки готовности" },
          ],
          congratsMessage: "Поздравляем! Вы завершили этап 'Эксперт экзаменов'. Почти готовы к полной лицензии!"
        },
        {
          id: 8,
          title: "Лицензированный профессионал",
          description: "Это тот, кто успешно сдал экзамен KP и завершает получение апробации.",
          tasks: [
            { id: 8.1, title: "Проверить готовность документов для апробации" },
            { id: 8.2, title: "Подать заявление на апробацию" },
            { id: 8.3, title: "Ознакомиться с правами и обязанностями врача в Германии" },
            { id: 8.4, title: "Завершить все формальности для получения апробации" },
          ],
          congratsMessage: "Отлично! Вы завершили этап 'Лицензированный профессионал'. Вы на финишной прямой!"
        },
        {
          id: 9,
          title: "Легендарный врач",
          description: "Это тот, кто получил апробацию и официально начал работать врачом в Германии.",
          tasks: [
            { id: 9.1, title: "Официально начать работать в больнице" },
            { id: 9.2, title: "Разработать долгосрочный план карьеры" },
            { id: 9.3, title: "Принять участие в профессиональных конференциях или семинарах" },
            { id: 9.4, title: "Получить сертификацию по узкой специализации (при необходимости)" },
          ],
          congratsMessage: "Поздравляем! Вы завершили этап 'Легендарный врач'. Добро пожаловать в профессиональную жизнь в Германии!"
        },
      ],
      tr: [
        {
          id: 1,
          title: "Kaşif",
          avatar: "/assets/man-stage-1.png",
          description: "Bu, yolculuğuna yeni başlayan, fırsatları araştıran, taşınmanın temellerini öğrenen ve gerekli belgeleri toplamaya başlayan kişidir.",
          tasks: [
            { id: 1.1, title: "Taşınmak için potansiyel bölgeleri araştırın" },
            { id: 1.2, title: "Approbation gerekliliklerini öğrenin" },
            { id: 1.3, title: "Gerekli belgelerin bir listesini oluşturun" },
            { id: 1.4, title: "Doktorlar için faydalı dil kurslarını inceleyin" },
            { id: 1.5, title: "Tıbbi odaların resmi web sitelerindeki güncel bilgileri kontrol edin" },
          ],
          congratsMessage: "Harika! 'Kaşif' aşamasını tamamladınız. Yola devam edin!"
        },
        {
          id: 2,
          title: "Yeni Gelen",
          description: "Bu, Almanya'ya taşınmış, temel belgelerini hazırlamış ve uyum sürecine devam eden kişidir.",
          tasks: [
            { id: 2.1, title: "İkametinizi kaydettirin (Anmeldung)" },
            { id: 2.2, title: "Belgelerinizi tıbbi odaya gönderin" },
            { id: 2.3, title: "Diplomanızı yeminli bir tercümana çevirtin" },
            { id: 2.4, title: "Tıbbi odaya başvuru yapmak için formları doldurun" },
            { id: 2.5, title: "B1 seviyesinde dil kurslarına kayıt olun" },
            { id: 2.6, title: "Belge paketini inceleme için gönderin" },
          ],
          congratsMessage: "Tebrikler! 'Yeni Gelen' aşamasını tamamladınız. Bir sonraki adım çok yakın!"
        },
        {
          id: 3,
          title: "Belge Avcısı",
          description: "Bu, diploma tanınması için belgeleri aktif olarak toplayan, hazırlayan ve gönderen, aynı zamanda FSP hazırlığına başlayan kişidir.",
          tasks: [
            { id: 3.1, title: "Gerekli tüm akademik belgeleri toplayın" },
            { id: 3.2, title: "Adli sicil kaydı alın" },
            { id: 3.3, title: "Profesyonel deneyim belgesi alın (gerekirse)" },
            { id: 3.4, title: "Tüm belgeleri yeminli bir tercümana çevirtin" },
            { id: 3.5, title: "Çevirileri ve belge kopyalarını noter tasdikli hale getirin" },
            { id: 3.6, title: "Belgeleri inceleme için tıbbi odaya gönderin" },
            { id: 3.7, title: "FSP'ye tıbbi terminolojiye odaklanarak hazırlanmaya başlayın" },
          ],
          congratsMessage: "Harika iş! 'Belge Avcısı' aşamasını tamamladınız. Hedefinize bir adım daha yaklaştınız!"
        },
        {
          id: 4,
          title: "Dil Savaşçısı",
          description: "Bu, FSP'ye hazırlanan, tıbbi terminoloji öğrenen, tıbbi danışma pratikleri yapan ve sınava hazırlanan kişidir.",
          tasks: [
            { id: 4.1, title: "Sözlükler ve uygulamalar kullanarak tıbbi terminoloji öğrenin" },
            { id: 4.2, title: "Bir partnerle tıbbi danışma pratiği yapın" },
            { id: 4.3, title: "FSP için hazırlık kurslarına kaydolun" },
            { id: 4.4, title: "FSP'nin yapısını öğrenin" },
            { id: 4.5, title: "Hastalara prosedürleri açıklamak için şablon ifadeler hazırlayın" },
            { id: 4.6, title: "Deneme sınavları yapın veya bir öğretmene danışın" },
          ],
          congratsMessage: "Tebrikler! 'Dil Savaşçısı' aşamasını tamamladınız. Başarıya bir adım daha yakınsınız!"
        },
        {
          id: 5,
          title: "Dil Ustası",
          description: "Bu, FSP'yi başarıyla geçen, iş arayan ve dil becerilerini geliştiren kişidir.",
          tasks: [
            { id: 5.1, title: "Almanca seviyenizi C1'e yükseltmek için çalışın" },
            { id: 5.2, title: "Bir özgeçmiş ve ön yazı hazırlayın" },
            { id: 5.3, title: "Profesyonel belgelerden oluşan bir portföy oluşturun" },
            { id: 5.4, title: "Hastanelere iş başvuruları gönderin" },
            { id: 5.5, title: "Geçici tıbbi lisans (Berufserlaubnis) alma gerekliliklerini öğrenin" },
          ],
          congratsMessage: "Harika! 'Dil Ustası' aşamasını tamamladınız. Başarı çok yakın!"
        },
        {
          id: 6,
          title: "Çalışan Öncü",
          description: "Bu, geçici bir lisansla çalışan, deneyim kazanan ve KP sınavına hazırlanan kişidir.",
          tasks: [
            { id: 6.1, title: "Geçici lisansla bir hastanede çalışmaya başlayın" },
            { id: 6.2, title: "Almanya'nın klinik standartlarını (AWMF) öğrenin" },
            { id: 6.3, title: "KP sınavına hazırlanmaya başlayın" },
            { id: 6.4, title: "KP sınavı başvurusunu yapın" },
          ],
          congratsMessage: "Mükemmel! 'Çalışan Öncü' aşamasını tamamladınız. Bir sonraki adım hemen önünüzde!"
        },
        {
          id: 7,
          title: "Sınav Uzmanı",
          description: "Bu, KP sınavına odaklanan, deneme testlerini tamamlayan ve hazırlığını sonlandıran kişidir.",
          tasks: [
            { id: 7.1, title: "KP sınavının teorik kısmına hazırlanın" },
            { id: 7.2, title: "Hazır olduğunuzu değerlendirmek için deneme testleri yapın" },
            { id: 7.3, title: "Hazırlığınızı değerlendirmek için bir eğitmene danışın" },
          ],
          congratsMessage: "Tebrikler! 'Sınav Uzmanı' aşamasını tamamladınız. Tam lisansa neredeyse hazırsınız!"
        },
        {
          id: 8,
          title: "Lisanslı Profesyonel",
          description: "Bu, KP sınavını başarıyla geçen ve Approbation sürecini tamamlayan kişidir.",
          tasks: [
            { id: 8.1, title: "Approbation için belgelerin hazır olduğunu doğrulayın" },
            { id: 8.2, title: "Approbation başvurusunu yapın" },
            { id: 8.3, title: "Almanya'da bir doktorun haklarını ve sorumluluklarını öğrenin" },
            { id: 8.4, title: "Approbation almak için tüm formaliteleri tamamlayın" },
          ],
          congratsMessage: "Harika! 'Lisanslı Profesyonel' aşamasını tamamladınız. Artık final aşamasındasınız!"
        },
        {
          id: 9,
          title: "Efsane Doktor",
          description: "Bu, Approbation aldıktan sonra Almanya'da resmi olarak doktorluk yapmaya başlayan kişidir.",
          tasks: [
            { id: 9.1, title: "Bir hastanede resmi olarak çalışmaya başlayın" },
            { id: 9.2, title: "Uzun vadeli bir kariyer planı geliştirin" },
            { id: 9.3, title: "Mesleki konferanslara veya seminerlere katılın" },
            { id: 9.4, title: "Bir uzmanlık alanında sertifika alın (gerekirse)" },
          ],
          congratsMessage: "Tebrikler! 'Efsane Doktor' aşamasını tamamladınız. Almanya'daki profesyonel hayatınıza hoş geldiniz!"
        },
      ],
      ar: [
        {
          id: 1,
          title: "المستكشف",
          avatar: "/assets/man-stage-1.png",
          description: "هذا الشخص الذي بدأ للتو رحلته، يستكشف الفرص، يدرس أساسيات الانتقال، ويجمع المستندات المطلوبة.",
          tasks: [
            { id: 1.1, title: "البحث عن المناطق المحتملة للانتقال" },
            { id: 1.2, title: "التعرف على متطلبات الحصول على Approbation" },
            { id: 1.3, title: "إعداد قائمة بالوثائق المطلوبة" },
            { id: 1.4, title: "البحث عن دورات لغة مفيدة للأطباء" },
            { id: 1.5, title: "التحقق من المواقع الرسمية لغرف الأطباء للحصول على المعلومات المحدثة" },
          ],
          congratsMessage: "عمل رائع! لقد أكملت مرحلة 'المستكشف'. استمر في التقدم!"
        },
        {
          id: 2,
          title: "الوافد الجديد",
          description: "هذا الشخص الذي انتقل بالفعل إلى ألمانيا، أعد المستندات الأساسية، ويواصل التكيف.",
          tasks: [
            { id: 2.1, title: "تسجيل الإقامة (Anmeldung)" },
            { id: 2.2, title: "تقديم المستندات إلى غرفة الأطباء" },
            { id: 2.3, title: "ترجمة الدبلوم بواسطة مترجم معتمد" },
            { id: 2.4, title: "إكمال النماذج لتقديم الطلب إلى غرفة الأطباء" },
            { id: 2.5, title: "التسجيل في دورات لغة للمستوى B1" },
            { id: 2.6, title: "إرسال حزمة المستندات للمراجعة" },
          ],
          congratsMessage: "تهانينا! لقد أكملت مرحلة 'الوافد الجديد'. الخطوة التالية قريبة!"
        },
        {
          id: 3,
          title: "جامع الوثائق",
          description: "هذا الشخص يجمع، يحضر، ويرسل المستندات للاعتراف بالشهادة، ويبدأ التحضير لـ FSP.",
          tasks: [
            { id: 3.1, title: "جمع جميع الوثائق الأكاديمية المطلوبة" },
            { id: 3.2, title: "الحصول على شهادة عدم وجود سجل جنائي" },
            { id: 3.3, title: "الحصول على شهادة الخبرة المهنية (إذا لزم الأمر)" },
            { id: 3.4, title: "ترجمة جميع الوثائق بواسطة مترجم معتمد" },
            { id: 3.5, title: "توثيق الترجمات ونسخ الوثائق لدى كاتب عدل" },
            { id: 3.6, title: "إرسال الوثائق إلى غرفة الأطباء للمراجعة" },
            { id: 3.7, title: "بدء التحضير لـ FSP مع التركيز على المصطلحات الطبية" },
          ],
          congratsMessage: "عمل رائع! لقد أكملت مرحلة 'جامع الوثائق'. أنت تقترب من هدفك!"
        },
        {
          id: 4,
          title: "مقاتل اللغة",
          description: "هذا الشخص يستعد لـ FSP، يتعلم المصطلحات الطبية، يتدرب على الاستشارات الطبية، ويستعد للامتحان.",
          tasks: [
            { id: 4.1, title: "تعلم المصطلحات الطبية باستخدام القواميس والتطبيقات" },
            { id: 4.2, title: "ممارسة الاستشارات الطبية مع شريك" },
            { id: 4.3, title: "التسجيل في دورات تحضيرية لـ FSP" },
            { id: 4.4, title: "التعرف على هيكل FSP" },
            { id: 4.5, title: "إعداد عبارات نمطية لشرح الإجراءات للمرضى" },
            { id: 4.6, title: "إجراء اختبارات تجريبية أو استشارة مع مدرس" },
          ],
          congratsMessage: "تهانينا! لقد أكملت مرحلة 'مقاتل اللغة'. خطوة أخرى نحو النجاح!"
        },
        {
          id: 5,
          title: "ماهر اللغة",
          description: "هذا الشخص اجتاز FSP بنجاح، يبحث عن وظيفة، ويحسن مهاراته اللغوية.",
          tasks: [
            { id: 5.1, title: "العمل على تحسين مستواك في اللغة الألمانية إلى C1" },
            { id: 5.2, title: "إعداد سيرة ذاتية وخطاب تغطية" },
            { id: 5.3, title: "إنشاء ملف يحتوي على الوثائق المهنية" },
            { id: 5.4, title: "إرسال طلبات التوظيف إلى المستشفيات" },
            { id: 5.5, title: "التعرف على متطلبات الحصول على ترخيص طبي مؤقت (Berufserlaubnis)" },
          ],
          congratsMessage: "عمل رائع! لقد أكملت مرحلة 'ماهر اللغة'. النجاح في متناول اليد!"
        },
        {
          id: 6,
          title: "رائد ممارس",
          description: "هذا الشخص يعمل بترخيص مؤقت، يكتسب الخبرة، ويستعد لامتحان KP.",
          tasks: [
            { id: 6.1, title: "العمل في مستشفى بترخيص مؤقت" },
            { id: 6.2, title: "التعرف على معايير ألمانيا السريرية (AWMF)" },
            { id: 6.3, title: "بدء التحضير لامتحان KP" },
            { id: 6.4, title: "تقديم طلب لامتحان KP" },
          ],
          congratsMessage: "رائع! لقد أكملت مرحلة 'رائد ممارس'. الخطوة التالية قريبة!"
        },
        {
          id: 7,
          title: "خبير الامتحانات",
          description: "هذا الشخص يركز على التحضير لامتحان KP، يجري اختبارات تجريبية، وينهي التحضيرات.",
          tasks: [
            { id: 7.1, title: "التحضير للجزء النظري من امتحان KP" },
            { id: 7.2, title: "إجراء اختبارات تجريبية لتقييم الجاهزية" },
            { id: 7.3, title: "التشاور مع مدرس لتقييم التحضير" },
          ],
          congratsMessage: "تهانينا! لقد أكملت مرحلة 'خبير الامتحانات'. على وشك الحصول على الترخيص الكامل!"
        },
        {
          id: 8,
          title: "محترف مرخص",
          description: "هذا الشخص اجتاز امتحان KP وينهي الحصول على Approbation.",
          tasks: [
            { id: 8.1, title: "التحقق من جاهزية المستندات لـ Approbation" },
            { id: 8.2, title: "تقديم طلب للحصول على Approbation" },
            { id: 8.3, title: "التعرف على حقوق وواجبات الطبيب في ألمانيا" },
            { id: 8.4, title: "إكمال جميع الإجراءات للحصول على Approbation" },
          ],
          congratsMessage: "عمل رائع! لقد أكملت مرحلة 'محترف مرخص'. أنت في الخطوة النهائية!"
        },
        {
          id: 9,
          title: "طبيب أسطوري",
          description: "هذا الشخص حصل على Approbation وبدأ العمل رسميًا كطبيب في ألمانيا.",
          tasks: [
            { id: 9.1, title: "بدء العمل رسميًا في مستشفى" },
            { id: 9.2, title: "تطوير خطة مهنية طويلة الأجل" },
            { id: 9.3, title: "المشاركة في المؤتمرات أو الندوات المهنية" },
            { id: 9.4, title: "الحصول على شهادة في تخصص معين (إذا لزم الأمر)" },
          ],
          congratsMessage: "تهانينا! لقد أكملت مرحلة 'طبيب أسطوري'. مرحبًا بك في الحياة المهنية في ألمانيا!"
        },
      ],
      fr: [
        {
          id: 1,
          title: "Explorateur",
          avatar: "/assets/man-stage-1.png",
          description: "C'est une personne qui débute son voyage, explore des opportunités, apprend les bases du déménagement et commence à rassembler les documents nécessaires.",
          tasks: [
            { id: 1.1, title: "Rechercher les régions potentielles pour le déménagement" },
            { id: 1.2, title: "Se familiariser avec les exigences pour l’approbation" },
            { id: 1.3, title: "Créer une liste des documents nécessaires" },
            { id: 1.4, title: "Explorer des cours de langue utiles pour les médecins" },
            { id: 1.5, title: "Consulter les sites officiels des ordres de médecins pour des informations à jour" },
          ],
          congratsMessage: "Excellent travail ! Vous avez terminé l'étape 'Explorateur'. Continuez ainsi !"
        },
        {
          id: 2,
          title: "Nouveau venu",
          description: "C'est une personne qui a déjà déménagé en Allemagne, préparé les documents principaux et continue de s'adapter.",
          tasks: [
            { id: 2.1, title: "Enregistrer votre résidence (Anmeldung)" },
            { id: 2.2, title: "Soumettre les documents à l'ordre des médecins" },
            { id: 2.3, title: "Faire traduire votre diplôme par un traducteur assermenté" },
            { id: 2.4, title: "Remplir les formulaires pour soumettre une demande à l'ordre des médecins" },
            { id: 2.5, title: "S'inscrire à des cours de langue de niveau B1" },
            { id: 2.6, title: "Envoyer le dossier de documents pour examen" },
          ],
          congratsMessage: "Félicitations ! Vous avez terminé l'étape 'Nouveau venu'. L'étape suivante est proche !"
        },
        {
          id: 3,
          title: "Chasseur de documents",
          description: "C'est une personne qui collecte, prépare et soumet activement des documents pour la reconnaissance de son diplôme et commence à se préparer pour le FSP.",
          tasks: [
            { id: 3.1, title: "Collecter tous les documents académiques nécessaires" },
            { id: 3.2, title: "Obtenir un extrait de casier judiciaire" },
            { id: 3.3, title: "Obtenir un certificat d'expérience professionnelle (si nécessaire)" },
            { id: 3.4, title: "Faire traduire tous les documents par un traducteur assermenté" },
            { id: 3.5, title: "Faire certifier les traductions et les copies des documents" },
            { id: 3.6, title: "Soumettre les documents à l'ordre des médecins pour examen" },
            { id: 3.7, title: "Commencer la préparation pour le FSP avec un focus sur la terminologie médicale" },
          ],
          congratsMessage: "Bravo ! Vous avez terminé l'étape 'Chasseur de documents'. Vous vous rapprochez de votre objectif !"
        },
        {
          id: 4,
          title: "Combattant de la langue",
          description: "C'est une personne qui se prépare pour le FSP, apprend la terminologie médicale, pratique les consultations médicales et se prépare à l'examen.",
          tasks: [
            { id: 4.1, title: "Apprendre la terminologie médicale en utilisant des dictionnaires et des applications" },
            { id: 4.2, title: "Pratiquer des consultations médicales avec un partenaire" },
            { id: 4.3, title: "S'inscrire à des cours de préparation pour le FSP" },
            { id: 4.4, title: "Se familiariser avec la structure du FSP" },
            { id: 4.5, title: "Préparer des modèles de phrases pour expliquer des procédures aux patients" },
            { id: 4.6, title: "Passer des examens blancs ou consulter un professeur" },
          ],
          congratsMessage: "Félicitations ! Vous avez terminé l'étape 'Combattant de la langue'. Un pas de plus vers le succès !"
        },
        {
          id: 5,
          title: "Maître de la langue",
          description: "C'est une personne qui a réussi le FSP, recherche un emploi et améliore ses compétences linguistiques.",
          tasks: [
            { id: 5.1, title: "Améliorer votre niveau d'allemand jusqu'à C1" },
            { id: 5.2, title: "Préparer un CV et une lettre de motivation" },
            { id: 5.3, title: "Créer un portfolio contenant des documents professionnels" },
            { id: 5.4, title: "Envoyer des candidatures aux hôpitaux" },
            { id: 5.5, title: "Apprendre les exigences pour obtenir une licence médicale temporaire (Berufserlaubnis)" },
          ],
          congratsMessage: "Bravo ! Vous avez terminé l'étape 'Maître de la langue'. Le succès est à portée de main !"
        },
        {
          id: 6,
          title: "Pionnier pratiquant",
          description: "C'est une personne qui travaille avec une licence temporaire, acquiert de l'expérience et se prépare pour l'examen KP.",
          tasks: [
            { id: 6.1, title: "Travailler dans un hôpital avec une licence temporaire" },
            { id: 6.2, title: "Se familiariser avec les standards cliniques en Allemagne (AWMF)" },
            { id: 6.3, title: "Commencer à se préparer pour l'examen KP" },
            { id: 6.4, title: "Soumettre une demande pour passer l'examen KP" },
          ],
          congratsMessage: "Excellent ! Vous avez terminé l'étape 'Pionnier pratiquant'. La prochaine étape est proche !"
        },
        {
          id: 7,
          title: "Expert des examens",
          description: "C'est une personne qui se concentre sur la préparation pour l'examen KP, effectue des tests blancs et finalise sa préparation.",
          tasks: [
            { id: 7.1, title: "Se préparer pour la partie théorique de l'examen KP" },
            { id: 7.2, title: "Effectuer des tests blancs pour évaluer votre préparation" },
            { id: 7.3, title: "Consulter un professeur pour évaluer votre préparation" },
          ],
          congratsMessage: "Félicitations ! Vous avez terminé l'étape 'Expert des examens'. Vous êtes presque prêt pour la licence complète !"
        },
        {
          id: 8,
          title: "Professionnel licencié",
          description: "C'est une personne qui a réussi l'examen KP et finalise l'obtention de l'Approbation.",
          tasks: [
            { id: 8.1, title: "Vérifier la complétion des documents pour l'Approbation" },
            { id: 8.2, title: "Soumettre une demande pour obtenir l'Approbation" },
            { id: 8.3, title: "Apprendre les droits et responsabilités d'un médecin en Allemagne" },
            { id: 8.4, title: "Compléter toutes les formalités pour obtenir l'Approbation" },
          ],
          congratsMessage: "Bravo ! Vous avez terminé l'étape 'Professionnel licencié'. Vous êtes à la dernière étape !"
        },
        {
          id: 9,
          title: "Médecin légendaire",
          description: "C'est une personne qui a obtenu l'Approbation et a commencé à travailler officiellement comme médecin en Allemagne.",
          tasks: [
            { id: 9.1, title: "Commencer officiellement à travailler dans un hôpital" },
            { id: 9.2, title: "Développer un plan de carrière à long terme" },
            { id: 9.3, title: "Participer à des conférences ou séminaires professionnels" },
            { id: 9.4, title: "Obtenir une certification dans une spécialité (si nécessaire)" },
          ],
          congratsMessage: "Félicitations ! Vous avez terminé l'étape 'Médecin légendaire'. Bienvenue dans la vie professionnelle en Allemagne !"
        },
      ],
      es: [
        {
          id: 1,
          title: "Explorador",
          avatar: "/assets/man-stage-1.png",
          description: "Esta es una persona que está comenzando su viaje, explorando oportunidades, estudiando lo básico sobre la reubicación y recopilando los documentos necesarios.",
          tasks: [
            { id: 1.1, title: "Investigar las regiones potenciales para la reubicación" },
            { id: 1.2, title: "Familiarizarse con los requisitos para la aprobación (Approbation)" },
            { id: 1.3, title: "Crear una lista de documentos necesarios" },
            { id: 1.4, title: "Explorar cursos de idiomas útiles para médicos" },
            { id: 1.5, title: "Revisar los sitios oficiales de las cámaras médicas para información actualizada" },
          ],
          congratsMessage: "¡Buen trabajo! Has completado la etapa de 'Explorador'. ¡Sigue avanzando!"
        },
        {
          id: 2,
          title: "Recién llegado",
          description: "Esta es una persona que ya se ha mudado a Alemania, ha preparado los documentos principales y continúa adaptándose.",
          tasks: [
            { id: 2.1, title: "Registrar tu residencia (Anmeldung)" },
            { id: 2.2, title: "Enviar los documentos a la cámara médica" },
            { id: 2.3, title: "Traducir tu título con un traductor certificado" },
            { id: 2.4, title: "Completar los formularios para presentar una solicitud a la cámara médica" },
            { id: 2.5, title: "Inscribirse en cursos de idiomas para alcanzar el nivel B1" },
            { id: 2.6, title: "Enviar el paquete de documentos para revisión" },
          ],
          congratsMessage: "¡Felicidades! Has completado la etapa de 'Recién llegado'. ¡El próximo paso está muy cerca!"
        },
        {
          id: 3,
          title: "Cazador de documentos",
          description: "Esta es una persona que recopila, prepara y envía activamente documentos para el reconocimiento de su título, mientras comienza a prepararse para el FSP.",
          tasks: [
            { id: 3.1, title: "Reunir todos los documentos académicos necesarios" },
            { id: 3.2, title: "Obtener un certificado de antecedentes penales" },
            { id: 3.3, title: "Obtener un certificado de experiencia profesional (si es necesario)" },
            { id: 3.4, title: "Traducir todos los documentos con un traductor certificado" },
            { id: 3.5, title: "Certificar las traducciones y copias de los documentos" },
            { id: 3.6, title: "Enviar los documentos a la cámara médica para su revisión" },
            { id: 3.7, title: "Comenzar la preparación para el FSP con un enfoque en la terminología médica" },
          ],
          congratsMessage: "¡Gran trabajo! Has completado la etapa de 'Cazador de documentos'. ¡Estás más cerca de tu objetivo!"
        },
        {
          id: 4,
          title: "Luchador del idioma",
          description: "Esta es una persona que se está preparando para el FSP, aprendiendo terminología médica, practicando consultas médicas y preparándose para el examen.",
          tasks: [
            { id: 4.1, title: "Aprender terminología médica utilizando diccionarios y aplicaciones" },
            { id: 4.2, title: "Practicar consultas médicas con un compañero" },
            { id: 4.3, title: "Inscribirse en cursos preparatorios para el FSP" },
            { id: 4.4, title: "Familiarizarse con la estructura del FSP" },
            { id: 4.5, title: "Preparar plantillas de frases para explicar procedimientos a los pacientes" },
            { id: 4.6, title: "Realizar simulacros de exámenes o consultar con un tutor" },
          ],
          congratsMessage: "¡Felicidades! Has completado la etapa de 'Luchador del idioma'. ¡Un paso más cerca del éxito!"
        },
        {
          id: 5,
          title: "Maestro del idioma",
          description: "Esta es una persona que ha pasado exitosamente el FSP, está buscando trabajo y mejorando sus habilidades lingüísticas.",
          tasks: [
            { id: 5.1, title: "Trabajar para mejorar tu alemán al nivel C1" },
            { id: 5.2, title: "Preparar un currículum y una carta de presentación" },
            { id: 5.3, title: "Crear un portafolio de documentos profesionales" },
            { id: 5.4, title: "Enviar solicitudes de empleo a hospitales" },
            { id: 5.5, title: "Aprender sobre los requisitos para obtener una licencia médica temporal (Berufserlaubnis)" },
          ],
          congratsMessage: "¡Bien hecho! Has completado la etapa de 'Maestro del idioma'. ¡El éxito está a tu alcance!"
        },
        {
          id: 6,
          title: "Pionero practicante",
          description: "Esta es una persona que trabaja con una licencia temporal, gana experiencia y se prepara para el examen KP.",
          tasks: [
            { id: 6.1, title: "Trabajar en un hospital con una licencia temporal" },
            { id: 6.2, title: "Familiarizarse con los estándares clínicos de Alemania (AWMF)" },
            { id: 6.3, title: "Comenzar a prepararse para el examen KP" },
            { id: 6.4, title: "Presentar la solicitud para el examen KP" },
          ],
          congratsMessage: "¡Excelente! Has completado la etapa de 'Pionero practicante'. ¡El próximo paso está adelante!"
        },
        {
          id: 7,
          title: "Experto en exámenes",
          description: "Esta es una persona que se centra en prepararse para el examen KP, realizando simulacros y finalizando su preparación.",
          tasks: [
            { id: 7.1, title: "Prepararse para la parte teórica del examen KP" },
            { id: 7.2, title: "Realizar simulacros para evaluar tu preparación" },
            { id: 7.3, title: "Consultar con un tutor para evaluar tu preparación" },
          ],
          congratsMessage: "¡Felicidades! Has completado la etapa de 'Experto en exámenes'. ¡Casi listo para la licencia completa!"
        },
        {
          id: 8,
          title: "Profesional licenciado",
          description: "Esta es una persona que ha pasado el examen KP y está finalizando su aprobación (Approbation).",
          tasks: [
            { id: 8.1, title: "Verificar la preparación de los documentos para la aprobación" },
            { id: 8.2, title: "Presentar la solicitud para la aprobación" },
            { id: 8.3, title: "Aprender sobre los derechos y responsabilidades de un médico en Alemania" },
            { id: 8.4, title: "Completar todas las formalidades para obtener la aprobación" },
          ],
          congratsMessage: "¡Bien hecho! Has completado la etapa de 'Profesional licenciado'. ¡Estás en la recta final!"
        },
        {
          id: 9,
          title: "Doctor legendario",
          description: "Esta es una persona que ha obtenido la aprobación y ha comenzado oficialmente a trabajar como médico en Alemania.",
          tasks: [
            { id: 9.1, title: "Comenzar oficialmente a trabajar en un hospital" },
            { id: 9.2, title: "Desarrollar un plan de carrera a largo plazo" },
            { id: 9.3, title: "Participar en conferencias o seminarios profesionales" },
            { id: 9.4, title: "Obtener certificaciones en una especialidad (si es necesario)" },
          ],
          congratsMessage: "¡Felicidades! Has completado la etapa de 'Doctor legendario'. ¡Bienvenido a la vida profesional en Alemania!"
        },
      ],
      pl: [
        {
          id: 1,
          title: "Odkrywca",
          avatar: "/assets/man-stage-1.png",
          description: "To osoba, która dopiero zaczyna swoją podróż, eksploruje możliwości, poznaje podstawy przeprowadzki i gromadzi wymagane dokumenty.",
          tasks: [
            { id: 1.1, title: "Zbadaj potencjalne regiony do przeprowadzki" },
            { id: 1.2, title: "Zapoznaj się z wymaganiami dotyczącymi Approbation" },
            { id: 1.3, title: "Utwórz listę wymaganych dokumentów" },
            { id: 1.4, title: "Odkryj kursy językowe przydatne dla lekarzy" },
            { id: 1.5, title: "Sprawdź oficjalne strony izb lekarskich w poszukiwaniu aktualnych informacji" },
          ],
          congratsMessage: "Świetna robota! Ukończyłeś etap 'Odkrywca'. Kontynuuj tak dalej!"
        },
        {
          id: 2,
          title: "Nowoprzybyły",
          description: "To osoba, która już przeniosła się do Niemiec, przygotowała główne dokumenty i kontynuuje adaptację.",
          tasks: [
            { id: 2.1, title: "Zarejestruj swoje miejsce zamieszkania (Anmeldung)" },
            { id: 2.2, title: "Złóż dokumenty do izby lekarskiej" },
            { id: 2.3, title: "Przetłumacz swój dyplom u certyfikowanego tłumacza" },
            { id: 2.4, title: "Wypełnij formularze zgłoszeniowe do izby lekarskiej" },
            { id: 2.5, title: "Zapisz się na kurs językowy na poziomie B1" },
            { id: 2.6, title: "Wyślij dokumenty do weryfikacji" },
          ],
          congratsMessage: "Gratulacje! Ukończyłeś etap 'Nowoprzybyły'. Kolejny krok już blisko!"
        },
        {
          id: 3,
          title: "Łowca dokumentów",
          description: "To osoba, która aktywnie zbiera, przygotowuje i składa dokumenty w celu uznania dyplomu oraz rozpoczyna przygotowania do FSP.",
          tasks: [
            { id: 3.1, title: "Zbierz wszystkie wymagane dokumenty akademickie" },
            { id: 3.2, title: "Uzyskaj zaświadczenie o niekaralności" },
            { id: 3.3, title: "Uzyskaj certyfikat doświadczenia zawodowego (jeśli wymagane)" },
            { id: 3.4, title: "Przetłumacz dokumenty u certyfikowanego tłumacza" },
            { id: 3.5, title: "Notarialnie poświadcz tłumaczenia i kopie dokumentów" },
            { id: 3.6, title: "Złóż dokumenty do izby lekarskiej w celu weryfikacji" },
            { id: 3.7, title: "Rozpocznij przygotowania do FSP z naciskiem na terminologię medyczną" },
          ],
          congratsMessage: "Świetna robota! Ukończyłeś etap 'Łowca dokumentów'. Jesteś coraz bliżej celu!"
        },
        {
          id: 4,
          title: "Wojownik językowy",
          description: "To osoba przygotowująca się do FSP, ucząca się terminologii medycznej, ćwicząca konsultacje medyczne i przygotowująca się do egzaminu.",
          tasks: [
            { id: 4.1, title: "Ucz się terminologii medycznej za pomocą słowników i aplikacji" },
            { id: 4.2, title: "Ćwicz konsultacje medyczne z partnerem" },
            { id: 4.3, title: "Zapisz się na kursy przygotowawcze do FSP" },
            { id: 4.4, title: "Zapoznaj się ze strukturą egzaminu FSP" },
            { id: 4.5, title: "Przygotuj szablony fraz do wyjaśniania procedur pacjentom" },
            { id: 4.6, title: "Weź udział w próbnym egzaminie lub skonsultuj się z nauczycielem" },
          ],
          congratsMessage: "Gratulacje! Ukończyłeś etap 'Wojownik językowy'. Jesteś o krok bliżej sukcesu!"
        },
        {
          id: 5,
          title: "Mistrz językowy",
          description: "To osoba, która pomyślnie zdała FSP, poszukuje pracy i doskonali swoje umiejętności językowe.",
          tasks: [
            { id: 5.1, title: "Pracuj nad podniesieniem swojego poziomu niemieckiego do C1" },
            { id: 5.2, title: "Przygotuj CV i list motywacyjny" },
            { id: 5.3, title: "Stwórz portfolio z dokumentami zawodowymi" },
            { id: 5.4, title: "Wyślij aplikacje do szpitali" },
            { id: 5.5, title: "Zapoznaj się z wymaganiami dotyczącymi uzyskania tymczasowej licencji medycznej (Berufserlaubnis)" },
          ],
          congratsMessage: "Świetna robota! Ukończyłeś etap 'Mistrz językowy'. Sukces jest na wyciągnięcie ręki!"
        },
        {
          id: 6,
          title: "Praktykujący pionier",
          description: "To osoba pracująca z tymczasową licencją, zdobywająca doświadczenie i przygotowująca się do egzaminu KP.",
          tasks: [
            { id: 6.1, title: "Pracuj w szpitalu z tymczasową licencją" },
            { id: 6.2, title: "Zapoznaj się z niemieckimi standardami klinicznymi (AWMF)" },
            { id: 6.3, title: "Rozpocznij przygotowania do egzaminu KP" },
            { id: 6.4, title: "Złóż wniosek o przystąpienie do egzaminu KP" },
          ],
          congratsMessage: "Świetna robota! Ukończyłeś etap 'Praktykujący pionier'. Kolejny krok przed Tobą!"
        },
        {
          id: 7,
          title: "Specjalista od egzaminów",
          description: "To osoba koncentrująca się na przygotowaniach do egzaminu KP, wykonująca testy próbne i finalizująca przygotowania.",
          tasks: [
            { id: 7.1, title: "Przygotuj się do teoretycznej części egzaminu KP" },
            { id: 7.2, title: "Wykonaj testy próbne, aby ocenić swoją gotowość" },
            { id: 7.3, title: "Skonsultuj się z nauczycielem w celu oceny przygotowania" },
          ],
          congratsMessage: "Gratulacje! Ukończyłeś etap 'Specjalista od egzaminów'. Prawie gotowy do uzyskania pełnej licencji!"
        },
        {
          id: 8,
          title: "Licencjonowany profesjonalista",
          description: "To osoba, która zdała egzamin KP i finalizuje proces uzyskania Approbation.",
          tasks: [
            { id: 8.1, title: "Sprawdź gotowość dokumentów do Approbation" },
            { id: 8.2, title: "Złóż wniosek o Approbation" },
            { id: 8.3, title: "Zapoznaj się z prawami i obowiązkami lekarza w Niemczech" },
            { id: 8.4, title: "Zakończ wszystkie formalności w celu uzyskania Approbation" },
          ],
          congratsMessage: "Świetna robota! Ukończyłeś etap 'Licencjonowany profesjonalista'. Jesteś na ostatniej prostej!"
        },
        {
          id: 9,
          title: "Legendarny lekarz",
          description: "To osoba, która uzyskała Approbation i rozpoczęła oficjalną pracę jako lekarz w Niemczech.",
          tasks: [
            { id: 9.1, title: "Rozpocznij oficjalną pracę w szpitalu" },
            { id: 9.2, title: "Opracuj długoterminowy plan kariery" },
            { id: 9.3, title: "Weź udział w profesjonalnych konferencjach lub seminariach" },
            { id: 9.4, title: "Zdobądź certyfikację w wybranej specjalizacji (jeśli wymagana)" },
          ],
          congratsMessage: "Gratulacje! Ukończyłeś etap 'Legendarny lekarz'. Witamy w profesjonalnym życiu w Niemczech!"
        },
      ],
  };