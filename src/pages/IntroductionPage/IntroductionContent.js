

// doctors_guide/src/pages/IntroductionPage/IntroductionContent.js

const IntroductionContent = {
  // Ukrainian content (original)
  uk: {
    mainIntro: `Наша платформа створена для того, щоб максимально спростити процес міграції та професійної інтеграції лікарів у медичну систему Німеччини. Вона орієнтована як на фахівців із країн-членів Європейського Союзу, так і на лікарів, які приїжджають із-за його меж. Завдяки детальній інформації, персоналізованій підтримці та інструментам, що охоплюють усі бундесленди, користувачі отримують можливість крок за кроком підготувати всі необхідні документи, опанувати вимоги місцевих органів охорони здоров’я та пройти процедуру отримання дозволу на медичну практику (апробацію) у зручному форматі.`,
    sections: [
      {
        title: `1. Підтримка збору та оформлення документів`,
        content: `Першочергова задача для лікаря, який планує працювати в Німеччині, — зібрати всі необхідні документи для визнання кваліфікації. Наша платформа містить детальні чеклісти з переліком паперів для кожного регіону (бундесленду), де чітко вказано, що саме потрібно подавати до місцевих органів охорони здоров’я. Для зручності інформація доступна 12 мовами, тому кожен користувач може ознайомитися з інструкціями та формулярами рідною мовою. Окрім самостійного ознайомлення, ми пропонуємо також приватні консультації: допомога в перекладі документів, їх нотаріальне засвідчення та оформлення апостиля (якщо це необхідно). Це значно зменшує ризик помилок і гарантує, що всі папери відповідатимуть вимогам німецьких відомств.`
      },
      {
        title: `2. Вибір бундесленду та регіональні особливості`,
        content: `Кожна земельна медична рада (Landesärztekammer) має свої специфічні правила й списки вимог. На платформі реалізований зручний інструмент для відбору бундесленду: після вибору регіону користувач бачить адаптовані у відповідності до місцевих норм списки документів, адреси установ для подачі аплікації, контактні дані експертів та рекомендації щодо термінів розгляду. Такий регіональний підхід допомагає уникнути плутанини з відмінностями між землями та пришвидшує процес подачі.`
      },
      {
        title: `3. Мовна підтримка та локалізація контенту`,
        content: `Окрім детальних інструкцій з оформлення документів, платформа доступна на 12 мовах, серед яких присутні такі популярні варіанти, як англійська, німецька, російська, українська, польська, румунська та інші. Для кожної мови передбачено:
- Адаптовані чеклісти для збору документів.
- Переклад зразків заяв, мотиваційних листів та супровідних листів для аплікації.
- Інформацію щодо вимог до знання німецької мови (рівні B2/C1) та рекомендації з підготовки до іспитів.
Завдяки цьому лікарі можуть одразу працювати з матеріалами рідною мовою, не витрачаючи час на додатковий пошук перекладів.`
      },
      {
        title: `4. Автоматизоване створення резюме та PDF-документів`,
        content: `Щоб полегшити комунікацію з рекрутерами, роботодавцями та медичними радами, на платформі реалізована функція створення професійного резюме (Lebenslauf) німецького зразка. Користувач вводить свої дані англійською, українською або іншою з 12 доступних мов, а система формує документ українською та/або німецькою мовою. Готове резюме можна експортувати у форматі PDF: це зручно, якщо потрібно роздрукувати документ або подати його електронною поштою.
Крім того, всі інші ключові форми (заява на аплікацію, мотиваційний лист, декларації) також можна генерувати як заповнювані PDF. Такий підхід дозволяє уникнути технічних труднощів з форматуванням та забезпечує однорідний стиль усіх документів.`
      },
      {
        title: `5. Навчальна секція: визначення, скорочення, медикаменти та інтерактивні ігри`,
        content: `Щоб підготуватися до іспитів зі специфіки німецької медицини, лікарі мають засвоїти місцеві медичні терміни, скорочення (абревіатури), назви препаратів й особливості їх застосування. У розділі «Навчання» зібрані:
- Глосарії з поясненнями, адаптованими до кожного бундесленду (частина термінології може відрізнятися залежно від федеральної землі).
- Перелік медикаментів із зазначенням торгових назв, міжнародних непатентованих назв (INN), форм випуску та основних показань.
- Абревіатури, поширені в німецькій медичній документації, із прикладами їх використання.
Щоб зробити навчання цікавим і ефективним, ми інтегрували інтерактивні ігри: флеш-картки, тести на відповідність термінів і швидкі вправи на запам’ятовування скорочень. Це допомагає засвоїти матеріал у режимі «гейміфікації» й адаптуватися до стандартів роботи в німецьких клініках.`
      },
      {
        title: `6. Симуляція клінічних випадків (Fälle) із можливістю штучного інтелекту`,
        content: `Одним із ключових вимог для здобуття дозволу на практику є демонстрація клінічного мислення та навичок ведення пацієнта за німецькими протоколами. У нашому розділі «Клінічні випадки» зібрано реальні ситуації (Fälle) з різних джерел: як із відкритих медичних баз даних, так і з практики лікарень у кожному бундесленді. Кожен випадок позначено за регіональною специфікою, тому лікар може обрати випадок, характерний для обраної федеральної землі.
Крім класичної статичної інформації (опис історії хвороби, анамнезу тощо), ми реалізували дві інтерактивні функції:
1. Симуляція з AI: Користувач може ініціювати «розмову» зі штучним інтелектом, який виступає роллю пацієнта або колеги (наприклад, німецького наставника). Лікар отримує запитання, коментарі або додаткові дані та відпрацьовує свої клінічні навички в інтерактивному режимі. AI також може оцінити відповіді у форматі зворотного зв’язку або надати рекомендації щодо оптимальних дій відповідно до місцевих стандартів.
2. Перевірка письмового супроводу: У рамках апробаційного іспиту часто вимагають написати супровідний лист або заключення. Користувач може завантажити свою спробу, а система (з елементами AI) підкаже, чи відповідає лист формату, граматиці й клінічним умовам, прийнятим у Німеччині.`
      },
      {
        title: `7. Додаткові ресурси: контакти перекладачів, нотаріусів та соціальні мережі`,
        content: `Щоб лікар не витрачав час на пошук локальних сервісів у кожному бундесленді, ми зібрали:
- Список акредитованих медичних перекладачів та бюро перекладів із контактами та рейтингами.
- Контактні дані нотаріусів, які спеціалізуються на засвідченні медичних документів.
- Посилання на тематичні групи в соціальних мережах (Facebook, Telegram, WhatsApp тощо), де спілкуються лікарі-мігранти, вказано за зонами (наприклад, «Facebook: Ärzte in Berlin» або «Telegram: Pflegekräfte Thüringen»).
Усі ці ресурси сортуються за регіонами: після вибору федеральної землі відображаються тільки ті варіанти, які працюють у відповідній місцевості. Це допомагає швидко знайти людей, які вже пройшли подібний шлях, обмінятися досвідом та корисними контактами.`
      },
      {
        title: `8. Індивідуальна підтримка користувачів`,
        content: `Окрім автоматизованих сервісів, ми надаємо можливість особистої консультації зі спеціалістами, що добре ознайомлені з процедурою визнання кваліфікації в Німеччині. Це можуть бути:
- Радники з питань нострифікації дипломів.
- Юристи, що консультують з імміграційних питань.
- Кар’єрні консультанти, які допомагають скласти документи та резюме під конкретні вакансії.
Консультації проводяться онлайн (через відеозв’язок або чат) і, за потреби, на місцях у великих містах (Берлін, Мюнхен, Франкфурт тощо). Таким чином, кожний лікар отримує персоналізований план дій, враховуючи свій досвід, спеціалізацію та бажаний бундесленд для працевлаштування.`
      },
      {
        title: `9. Інтуїтивно зрозумілий інтерфейс і майбутні плани розвитку`,
        content: `Усі перераховані модулі інтегровані в одному зручному інтерфейсі, що автоматично адаптується до мови користувача: після реєстрації система пропонує обрати бажану мову серед доступних 12 варіантів. Меню розроблене таким чином, щоб навіть люди з мінімальним досвідом роботи в інтернеті змогли швидко знайти потрібний розділ.
Ми постійно працюємо над розширенням бази клінічних випадків, додаванням нових тестів та інтерактивних вправ. Також у планах – інтеграція з офіційними медичними базами даних (наприклад, Arzneimittelkommission der deutschen Ärzteschaft) для актуалізації інформації про медикаменти. Завдяки цьому платформа залишатиметься максимально сучасною й корисною для кожного лікаря на шляху до роботи в Німеччині.`
      },
      {
        title: `Загальний висновок`,
        content: `Загалом, наша платформа – це єдиний комплексний інструмент, який допомагає лікарям із будь-якої країни світу:
  - Ознайомитися з детальними вимогами кожного бундесленду.
  - Підготувати, перекласти та нотаріально завірити всі необхідні документи.
  - Скласти професійне резюме та згенерувати PDF-документи.
  - Вивчити медичну термінологію, скорочення та медикаменти через інтерактивні ігри.
  - Опрацювати клінічні випадки з можливістю симуляції з AI.
  - Знайти контактні дані перекладачів, нотаріусів та спільнот у соціальних мережах.
  - Отримати індивідуальну консультацію зі спеціалістами-експертами.

Таким чином, ми створили комплексний сервіс, який супроводжує лікаря від самого початку збору документів і аж до успішного працевлаштування в обраній федеральній землі Німеччини.`
      }
    ]
  },

  // English content
  en: {
    mainIntro: `Our platform is designed to simplify the migration process and professional integration of doctors into the German healthcare system. It caters to specialists from EU member states as well as doctors coming from outside the EU. Thanks to detailed information, personalized support, and tools covering all federal states (Bundesländer), users can prepare all required documents step by step, understand local regulatory requirements, and complete the process of obtaining a medical license (Approbation) in an easy-to-follow format.`,
    sections: [
      {
        title: `1. Document Collection and Processing Support`,
        content: `The first task for any doctor planning to work in Germany is to gather all necessary documents for qualification recognition. Our platform provides detailed checklists for each region (Bundesland), clearly indicating which documents need to be submitted to local health authorities. For convenience, information is available in 12 languages, so each user can read instructions and forms in their native language. In addition to self-guided information, we offer private consultations: assistance in translating documents, notarization, and apostille processing (if required). This greatly reduces the risk of errors and ensures that all paperwork meets German regulatory standards.`
      },
      {
        title: `2. Federal State Selection and Regional Specifics`,
        content: `Each State Medical Association (Landesärztekammer) has its own specific rules and requirement lists. On the platform, we have implemented an easy-to-use Bundesland selector: after choosing a region, the user sees locally adapted document checklists, addresses of offices for submitting applications, contact details of experts, and recommendations regarding processing times. This regional approach eliminates confusion caused by state-by-state differences and speeds up the submission procedure.`
      },
      {
        title: `3. Language Support and Content Localization`,
        content: `Besides detailed instructions for document submission, the platform is available in 12 languages, including English, German, Russian, Ukrainian, Polish, Romanian, and others. For each language, we provide:
- Adapted checklists for document gathering.
- Translated samples of applications, motivation letters, and cover letters.
- Information on German language requirements (levels B2/C1) and exam preparation tips.
Thanks to this, doctors can immediately work with materials in their native language without spending time searching for translations.`
      },
      {
        title: `4. Automated Resume and PDF Document Generation`,
        content: `To facilitate communication with recruiters, employers, and medical boards, the platform features a function for creating a professional German-style CV (Lebenslauf). Users input their details in English, Ukrainian, or any of the 12 supported languages, and the system generates the document in Ukrainian and/or German. The completed CV can be exported as a PDF, which is convenient for printing or emailing.
Additionally, all other key forms (application forms, motivation letters, declarations) can be generated as fillable PDFs. This approach avoids formatting issues and ensures a consistent style across all documents.`
      },
      {
        title: `5. Learning Section: Definitions, Abbreviations, Medications, and Interactive Games`,
        content: `To prepare for exams on German medical standards, doctors need to master local medical terminology, abbreviations, drug names, and usage specifics. In the “Learning” section, we have compiled:
- Glossaries with explanations adapted to each Bundesland (some terminology may vary by state).
- Lists of medications with brand names, international nonproprietary names (INN), dosage forms, and primary indications.
- Abbreviations commonly used in German medical documentation, with usage examples.
To make learning engaging and effective, we integrated interactive games: flashcards, term-matching quizzes, and quick abbreviation exercises. This gamified approach helps users retain information and adapt to German clinical standards.`
      },
      {
        title: `6. Clinical Case Simulation (Fälle) with AI Assistance`,
        content: `One of the key requirements for obtaining a practice license is demonstrating clinical reasoning and patient management skills according to German protocols. In our “Clinical Cases” section, we collected real scenarios (Fälle) from various sources: both open medical databases and hospital practices in each Bundesland. Each case is labeled by regional specificity, so a doctor can choose a case representative of their target state.
In addition to static information (case history, anamnesis, etc.), we implemented two interactive features:
1. AI Simulation: Users can initiate a “conversation” with an AI that acts as a patient or colleague (e.g., a German supervisor). The doctor receives questions, comments, or additional data and practices clinical skills interactively. The AI can also evaluate answers in a feedback format or provide recommendations according to local standards.
2. Written Case Review: For the Approbation exam, candidates often need to write a referral letter or clinical summary. Users can upload their draft, and the system (using AI) will suggest whether the letter meets the format, grammar, and clinical criteria accepted in Germany.`
      },
      {
        title: `7. Additional Resources: Translators, Notaries, and Social Networks`,
        content: `To save doctors time from searching for local services in each Bundesland, we compiled:
- A list of accredited medical translators and translation agencies with contact details and ratings.
- Contact information for notaries specializing in medical document certification.
- Links to relevant social media groups (Facebook, Telegram, WhatsApp, etc.) where migrating doctors communicate, organized by region (e.g., “Facebook: Ärzte in Berlin” or “Telegram: Pflegekräfte Thüringen”).
All these resources are sorted by region: once a user selects a Bundesland, only options operating in that locale appear. This helps quickly find peers who have already gone through a similar process, exchange experiences, and access valuable contacts.`
      },
      {
        title: `8. Personalized User Support`,
        content: `In addition to automated services, we offer the opportunity for personalized consultations with specialists well-versed in the qualification recognition process in Germany. These may include:
- Advisors on diploma nostrification.
- Immigration lawyers who consult on residency and work permits.
- Career coaches who help craft documents and resumes for specific job openings.
Consultations can be held online (via video call or chat) and, if needed, in-person in major cities (Berlin, Munich, Frankfurt, etc.). This way, each doctor receives a tailored action plan considering their experience, specialization, and desired Bundesland for employment.`
      },
      {
        title: `9. Intuitive Interface and Future Development Plans`,
        content: `All mentioned modules are integrated into a single user-friendly interface that automatically adapts to the user’s language: after registration, the system prompts to select from the 12 available languages. The menu is designed so that even users with minimal internet experience can quickly find the needed section.
We continuously work on expanding the clinical case database, adding new tests and interactive exercises. Future plans include integration with official medical databases (e.g., Arzneimittelkommission der deutschen Ärzteschaft) for medication updates. As a result, the platform will remain up-to-date and highly useful for every doctor on the path to working in Germany.`
      },
      {
        title: `Conclusion`,
        content: `In summary, our platform is a comprehensive tool that helps doctors from any country to:
  - Understand detailed requirements of each Bundesland.
  - Prepare, translate, and notarize all necessary documents.
  - Create a professional resume and generate PDF documents.
  - Learn medical terminology, abbreviations, and medications through interactive games.
  - Practice clinical cases with AI-assisted simulations.
  - Find translator and notary contacts, as well as social network communities.
  - Receive personalized consultations from expert advisors.

Thus, we have created an all-in-one service that guides a doctor from the document gathering stage all the way to successful employment in their chosen Bundesland in Germany.`
      }
    ]
  },

  // German content
  de: {
    mainIntro: `Unsere Plattform wurde entwickelt, um den Migrationsprozess und die berufliche Integration von Ärzten in das deutsche Gesundheitssystem so einfach wie möglich zu gestalten. Sie richtet sich sowohl an Fachkräfte aus EU-Mitgliedstaaten als auch an Ärzte, die von außerhalb der EU kommen. Dank detaillierter Informationen, individueller Unterstützung und Tools, die alle Bundesländer abdecken, können Nutzer Schritt für Schritt alle erforderlichen Unterlagen vorbereiten, lokale behördliche Anforderungen verstehen und den Prozess zur Erlangung der Approbation in einem benutzerfreundlichen Format durchlaufen.`,
    sections: [
      {
        title: `1. Unterstützung bei der Dokumentensammlung und -bearbeitung`,
        content: `Die erste Aufgabe für jeden Arzt, der in Deutschland arbeiten möchte, besteht darin, alle notwendigen Unterlagen für die Anerkennung der Qualifikation zu sammeln. Unsere Plattform stellt detaillierte Checklisten für jedes Bundesland bereit, in denen genau aufgeführt ist, welche Dokumente bei den örtlichen Gesundheitsbehörden eingereicht werden müssen. Zur besseren Übersicht ist die Information in 12 Sprachen verfügbar, sodass jeder Nutzer Anleitungen und Formulare in seiner Muttersprache einsehen kann. Zusätzlich zur eigenständigen Recherche bieten wir persönliche Beratungen an: Hilfe bei der Übersetzung von Dokumenten, notarielle Beglaubigung und Apostille-Erstellung (falls erforderlich). Dies minimiert das Fehlerpotenzial und stellt sicher, dass alle Unterlagen den deutschen Vorgaben entsprechen.`
      },
      {
        title: `2. Auswahl des Bundeslandes und regionale Besonderheiten`,
        content: `Jede Landesärztekammer hat ihre eigenen spezifischen Vorschriften und Anforderungslisten. Auf der Plattform haben wir einen benutzerfreundlichen Bundesland-Selector implementiert: Nach Auswahl einer Region sieht der Nutzer lokal angepasste Dokumenten-Checklisten, Adressen der Ämter für die Antragstellung, Kontaktdaten von Experten und Empfehlungen zu Bearbeitungszeiten. Dieser regionale Ansatz beseitigt Verwirrung durch bundeslandspezifische Unterschiede und beschleunigt den Antragsprozess.`
      },
      {
        title: `3. Sprachunterstützung und Inhaltslokalisierung`,
        content: `Neben detaillierten Anleitungen zur Einreichung von Unterlagen ist die Plattform in 12 Sprachen verfügbar, darunter Englisch, Deutsch, Russisch, Ukrainisch, Polnisch, Rumänisch und weitere. Für jede Sprache bieten wir:
- Angepasste Checklisten zur Dokumentensammlung.
- Übersetzte Musteranträge, Motivationsschreiben und Anschreiben.
- Informationen zu den Deutschkenntnisanforderungen (Niveaus B2/C1) und Tipps zur Prüfungsvorbereitung.
Dank dieser Maßnahmen können Ärzte sofort mit Materialien in ihrer Muttersprache arbeiten, ohne zusätzliche Übersetzungen suchen zu müssen.`
      },
      {
        title: `4. Automatisierte Lebenslauf- und PDF-Generierung`,
        content: `Um die Kommunikation mit Personalvermittlern, Arbeitgebern und Ärztekammern zu erleichtern, verfügt die Plattform über eine Funktion zur Erstellung eines professionellen deutschen Lebenslaufs. Nutzer geben ihre Daten auf Englisch, Ukrainisch oder einer anderen der 12 unterstützten Sprachen ein, und das System generiert das Dokument auf Deutsch und/oder Englisch. Der fertige Lebenslauf kann als PDF exportiert werden, was das Ausdrucken oder Versenden per E-Mail vereinfacht.
Außerdem können alle anderen wichtigen Formulare (Antragsformulare, Motivationsschreiben, Erklärungen) als ausfüllbare PDFs erstellt werden. Dieser Ansatz vermeidet Formatierungsprobleme und stellt einen einheitlichen Stil über alle Dokumente hinweg sicher.`
      },
      {
        title: `5. Lernbereich: Fachbegriffe, Abkürzungen, Medikamente und interaktive Spiele`,
        content: `Um sich auf Prüfungen zu deutschen medizinischen Standards vorzubereiten, müssen Ärzte lokale medizinische Fachbegriffe, Abkürzungen, Medikamentennamen und Anwendungsspezifika beherrschen. Im Bereich „Lernen“ haben wir zusammengestellt:
- Glossare mit Erklärungen, die an jedes Bundesland angepasst sind (einige Begrifflichkeiten können je nach Region variieren).
- Listen von Medikamenten mit Handelsnamen, internationalen Freinamen (INN), Darreichungsformen und wichtigsten Indikationen.
- Abkürzungen, die in der deutschen medizinischen Dokumentation häufig vorkommen, mit Anwendungsbeispielen.
Um das Lernen spannend und effektiv zu gestalten, haben wir interaktive Spiele integriert: Lernkarten, Zuordnungsquiz und schnelle Übungen zum Abkürzungslernen. Dieser spielerische Ansatz hilft, Wissen besser zu behalten und sich an deutsche klinische Standards anzupassen.`
      },
      {
        title: `6. Simulation klinischer Fälle (Fälle) mit KI-Unterstützung`,
        content: `Eine der wichtigsten Anforderungen für die Approbation ist der Nachweis klinischen Denkens und der Patientenführung nach deutschen Protokollen. Im Abschnitt „Klinische Fälle“ haben wir reale Szenarien (Fälle) aus verschiedenen Quellen gesammelt: sowohl offene medizinische Datenbanken als auch Krankenhauspraktiken in jedem Bundesland. Jeder Fall ist nach regionaler Spezifik gekennzeichnet, sodass ein Arzt einen repräsentativen Fall seines Zielbundeslandes auswählen kann.
Neben statischen Informationen (Krankengeschichte, Anamnese usw.) haben wir zwei interaktive Funktionen implementiert:
1. KI-Simulation: Nutzer können eine „Konversation“ mit einer KI starten, die als Patient oder Kollege (z. B. als deutscher Mentor) fungiert. Der Arzt erhält Fragen, Kommentare oder zusätzliche Daten und übt klinische Fähigkeiten interaktiv. Die KI kann Antworten in Form von Feedback bewerten oder Empfehlungen gemäß den lokalen Standards geben.
2. Schriftliche Fallprüfung: Für die Approbationsprüfung müssen Kandidaten oft einen Überweisungstext oder einen klinischen Bericht schreiben. Nutzer können ihren Entwurf hochladen, und das System (mithilfe von KI) schlägt vor, ob der Text den Format-, Grammatik- und klinischen Anforderungen in Deutschland entspricht.`
      },
      {
        title: `7. Zusätzliche Ressourcen: Übersetzer, Notare und soziale Netzwerke`,
        content: `Um Ärzten die Suche nach lokalen Diensten in jedem Bundesland zu ersparen, haben wir zusammengestellt:
- Eine Liste akkreditierter medizinischer Übersetzer und Übersetzungsbüros mit Kontaktdaten und Bewertungen.
- Kontaktdaten von Notaren, die sich auf die Beglaubigung medizinischer Dokumente spezialisiert haben.
- Links zu relevanten Social-Media-Gruppen (Facebook, Telegram, WhatsApp usw.), in denen sich zugewanderte Ärzte austauschen, nach Bundesland sortiert (z. B. „Facebook: Ärzte in Berlin“ oder „Telegram: Pflegekräfte Thüringen“).
Alle diese Ressourcen sind nach Region sortiert: Sobald ein Nutzer ein Bundesland auswählt, werden nur Optionen angezeigt, die in dieser Region verfügbar sind. Das hilft, schnell Gleichgesinnte zu finden, Erfahrungen auszutauschen und wertvolle Kontakte zu knüpfen.`
      },
      {
        title: `8. Personalisierte Nutzerunterstützung`,
        content: `Zusätzlich zu automatisierten Diensten bieten wir die Möglichkeit persönlicher Beratungen durch Spezialisten, die sich mit dem Anerkennungsverfahren in Deutschland bestens auskennen. Dazu gehören:
- Berater für Diplomaäquivalenz (Nostrifikation).
- Einwanderungsrechtler, die über Aufenthalts- und Arbeitserlaubnisse beraten.
- Karriere-Coaches, die bei der Erstellung von Unterlagen und Lebensläufen für bestimmte Stellenangebote unterstützen.
Beratungen können online (per Videoanruf oder Chat) und bei Bedarf vor Ort in Großstädten (Berlin, München, Frankfurt usw.) stattfinden. Auf diese Weise erhält jeder Arzt einen maßgeschneiderten Plan, der seine Erfahrung, Spezialisierung und das gewünschte Bundesland berücksichtigt.`
      },
      {
        title: `9. Intuitive Benutzeroberfläche und zukünftige Entwicklungspläne`,
        content: `Alle genannten Module sind in eine benutzerfreundliche Oberfläche integriert, die sich automatisch an die Sprache des Nutzers anpasst: Nach der Registrierung wird dazu aufgefordert, eine der 12 verfügbaren Sprachen auszuwählen. Das Menü ist so konzipiert, dass selbst Nutzer mit minimaler Interneterfahrung schnell den benötigten Bereich finden.
Wir arbeiten kontinuierlich an der Erweiterung der Datenbank für klinische Fälle, der Hinzufügung neuer Tests und interaktiver Übungen. Zukünftige Pläne beinhalten die Integration mit offiziellen medizinischen Datenbanken (z. B. Arzneimittelkommission der deutschen Ärzteschaft) für Medikamentenaktualisierungen. Auf diese Weise bleibt die Plattform stets aktuell und äußerst hilfreich für jeden Arzt auf dem Weg nach Deutschland.`
      },
      {
        title: `Fazit`,
        content: `Zusammengefasst ist unsere Plattform ein umfassendes Tool, das Ärzten aus jedem Land hilft:
  - Die detaillierten Anforderungen jedes Bundeslandes zu verstehen.
  - Alle notwendigen Unterlagen vorzubereiten, zu übersetzen und notariell beglaubigen zu lassen.
  - Einen professionellen Lebenslauf zu erstellen und PDF-Dokumente zu generieren.
  - Medizinische Fachbegriffe, Abkürzungen und Medikamente durch interaktive Spiele zu erlernen.
  - Klinische Fälle mit KI-gestützten Simulationen zu üben.
  - Kontakte zu Übersetzern, Notaren und sozialen Netzwerken zu finden.
  - Persönliche Beratungen durch Fachexperten zu erhalten.

Somit haben wir einen All-in-One-Service geschaffen, der Ärzte von der Dokumentensammlung bis hin zur erfolgreichen Anstellung im gewählten Bundesland in Deutschland begleitet.`
      }
    ]
  },

  // Russian content
  ru: {
    mainIntro: `Наша платформа создана для того, чтобы максимально упростить процесс миграции и профессиональной интеграции врачей в медицинскую систему Германии. Она ориентирована как на специалистов из стран-членов Европейского Союза, так и на специалистов, приезжающих из-за его пределов. Благодаря подробной информации, персонализированной поддержке и инструментам, охватывающим все федеральные земли, пользователи могут шаг за шагом подготовить все необходимые документы, понять требования местных органов здравоохранения и пройти процедуру получения медицинской лицензии (Approbation) в удобном формате.`,
    sections: [
      {
        title: `1. Поддержка сбора и оформления документов`,
        content: `Первичная задача для врача, планирующего работать в Германии, — собрать все необходимые документы для признания квалификации. Наша платформа содержит подробные чек-листы с перечнем бумаг для каждого региона (Bundesland), где четко указано, какие документы нужно подавать в местные органы здравоохранения. Для удобства информация доступна на 12 языках, поэтому каждый пользователь может ознакомиться с инструкциями и формулярами на родном языке. Помимо самостоятельного изучения, мы предлагаем также личные консультации: помощь в переводе документов, их нотариальное заверение и оформление апостиля (если это необходимо). Это значительно снижает риск ошибок и гарантирует, что все документы будут соответствовать требованиям немецких ведомств.`,
      },
      {
        title: `2. Выбор федеральной земли и региональные особенности`,
        content: `Каждая земельная врачебная палата (Landesärztekammer) имеет свои собственные правила и списки требований. На платформе реализован удобный инструмент для выбора федеральной земли: после выбора региона пользователь видит адаптированные с учетом местных норм списки документов, адреса учреждений для подачи заявлений, контактные данные экспертов и рекомендации по срокам рассмотрения. Такой региональный подход помогает избежать путаницы с отличиями между землями и ускоряет процесс подачи.`,
      },
      {
        title: `3. Языковая поддержка и локализация контента`,
        content: `Помимо детальных инструкций по оформлению документов, платформа доступна на 12 языках, среди которых популярны английский, немецкий, русский, украинский, польский, румынский и другие. Для каждого языка предусмотрено:
- Адаптированные чек-листы для сбора документов.
- Перевод образцов заявлений, мотивационных писем и сопроводительных писем.
- Информация о требованиях к знанию немецкого языка (уровни B2/C1) и рекомендации по подготовке к экзаменам.
Благодаря этому врачи могут сразу работать с материалами на родном языке, не тратя время на поиск переводов.`,
      },
      {
        title: `4. Автоматизированное создание резюме и PDF-документов`,
        content: `Чтобы упростить коммуникацию с рекрутерами, работодателями и медицинскими советами, на платформе реализована функция создания профессионального резюме (Lebenslauf) немецкого образца. Пользователь вводит свои данные на английском, украинском или другом из 12 доступных языков, а система формирует документ на украинском и/или немецком языке. Готовое резюме можно экспортировать в формате PDF: это удобно для печати или отправки по электронной почте.
Кроме того, все другие ключевые формы (заявление на подачу, мотивационное письмо, декларации) также можно сгенерировать в виде заполняемых PDF. Такой подход позволяет избежать технических проблем с форматированием и обеспечивает единый стиль всех документов.`,
      },
      {
        title: `5. Обучающий раздел: термины, сокращения, лекарства и интерактивные игры`,
        content: `Чтобы подготовиться к экзаменам по специфике немецкой медицины, врачи должны освоить местные медицинские термины, сокращения (аббревиатуры), названия препаратов и особенности их применения. В разделе «Обучение» собраны:
- Глоссарии с пояснениями, адаптированными под каждую федеральную землю (часть терминологии может отличаться в зависимости от региона).
- Перечень лекарств с указанием торговых названий, международных непатентованных названий (INN), форм выпуска и основных показаний.
- Аббревиатуры, распространенные в немецкой медицинской документации, с примерами их использования.
Чтобы сделать обучение интересным и эффективным, мы интегрировали интерактивные игры: флеш-карты, тесты на соответствие терминов и быстрые упражнения на запоминание сокращений. Это помогает усвоить материал в режиме геймификации и адаптироваться к стандартам работы в немецких клиниках.`,
      },
      {
        title: `6. Симуляция клинических случаев (Fälle) с помощью искусственного интеллекта`,
        content: `Одним из ключевых требований для получения лицензии на практику является демонстрация клинического мышления и навыков ведения пациента по немецким протоколам. В нашем разделе «Клинические случаи» собраны реальные случаи (Fälle) из различных источников: как из открытых медицинских баз данных, так и из практики больниц в каждой федеральной земле. Каждый случай помечен с учетом региональной специфики, чтобы врач мог выбрать сценарий, характерный для выбранной федеральной земли.
Кроме классической статической информации (описание истории болезни, анамнез и т.д.), мы реализовали две интерактивные функции:
1. Симуляция с KI: Пользователь может начать «разговор» с искусственным интеллектом, который выступает в роли пациента или коллеги (например, немецкого наставника). Врач получает вопросы, комментарии или дополнительные данные и отрабатывает свои клинические навыки в интерактивном режиме. Искусственный интеллект также может оценить ответы в формате обратной связи или предоставить рекомендации в соответствии с местными стандартами.
2. Проверка письменного сопровождения: В рамках экзамена Approbation часто требуется написать сопроводительное письмо или заключение. Пользователь может загрузить свой черновик, а система (с использованием KI) подскажет, соответствует ли письмо формату, грамматике и клиническим требованиям, принятым в Германии.`,
      },
      {
        title: `7. Дополнительные ресурсы: переводчики, нотариусы и социальные сети`,
        content: `Чтобы врач не тратил время на поиск локальных сервисов в каждой федеральной земле, мы собрали:
- Список аккредитованных медицинских переводчиков и бюро переводов с контактными данными и рейтингами.
- Контактную информацию нотариусов, специализирующихся на заверении медицинских документов.
- Ссылки на тематические группы в социальных сетях (Facebook, Telegram, WhatsApp и т.д.), где общаются врачи-мигранты, сгруппированные по регионам (например, «Facebook: Ärzte in Berlin» или «Telegram: Pflegekräfte Thüringen»).
Все эти ресурсы сортируются по регионам: после выбора федеральной земли отображаются только те варианты, которые работают в соответствующей местности. Это помогает быстро найти людей, которые уже прошли похожий путь, обменяться опытом и получить полезные контакты.`,
      },
      {
        title: `8. Индивидуальная поддержка пользователей`,
        content: `Помимо автоматизированных сервисов, мы предоставляем возможность личных консультаций со специалистами, хорошо знакомыми с процедурой признания квалификаций в Германии. Это могут быть:
- Советники по вопросам нострификации дипломов.
- Юристы, консультирующие по вопросам иммиграции.
- Карьерные консультанты, которые помогают составить документы и резюме для конкретных вакансий.
Консультации проводятся онлайн (через видеосвязь или чат) и, при необходимости, очно в крупных городах (Берлин, Мюнхен, Франкфурт и т.д.). Таким образом, каждый врач получает персонализированный план действий с учетом своего опыта, специализации и желаемой федеральной земли для трудоустройства.`,
      },
      {
        title: `9. Интуитивно понятный интерфейс и планы на будущее`,
        content: `Все перечисленные модули интегрированы в единый удобный интерфейс, который автоматически адаптируется к языку пользователя: после регистрации система предлагает выбрать желаемый язык из доступных 12 вариантов. Меню разработано таким образом, чтобы даже пользователи с минимальным опытом работы в интернете могли быстро найти нужный раздел.
Мы постоянно работаем над расширением базы клинических случаев, добавлением новых тестов и интерактивных упражнений. В планах также интеграция с официальными медицинскими базами данных (например, Arzneimittelkommission der deutschen Ärzteschaft) для обновления информации о медикаментах. Благодаря этому платформа останется максимально современной и полезной для каждого врача на пути к работе в Германии.`,
      },
      {
        title: `Заключение`,
        content: `В итоге наша платформа представляет собой комплексный инструмент, который помогает врачам из любой страны:
  - Понять детальные требования каждой федеральной земли.
  - Подготовить, перевести и нотариально заверить все необходимые документы.
  - Создать профессиональное резюме и сгенерировать PDF-документы.
  - Изучить медицинскую терминологию, сокращения и препараты через интерактивные игры.
  - Практиковаться на клинических случаях с помощью симуляций на основе KI.
  - Найти контакты переводчиков, нотариусов и сообщества в социальных сетях.
  - Получить персонализированные консультации от опытных экспертов.

Таким образом, мы создали сервис «все в одном», который сопровождает врача от сбора документов до успешного трудоустройства в выбранной федеральной земле Германии.`,
      }
    ]
  },

  // Turkish content
  tr: {
    mainIntro: `Platformumuz, doktorların Almanya'daki sağlık sistemine göç ve mesleki entegrasyon sürecini en üst düzeyde basitleştirmek için tasarlanmıştır. Hem Avrupa Birliği üye ülkelerinden gelen uzmanlara hem de AB dışından gelen doktorlara yöneliktir. Ayrıntılı bilgi, kişiselleştirilmiş destek ve tüm eyaletleri (Bundesländer) kapsayan araçlar sayesinde kullanıcılar, gerekli tüm belgeleri adım adım hazırlayabilir, yerel sağlık otoritelerinin gereksinimlerini anlayabilir ve tıbbi lisans (Approbation) alma sürecini takip edebilir.`,
    sections: [
      {
        title: `1. Belge Toplama ve İşleme Desteği`,
        content: `Almanya'da çalışmayı planlayan bir doktor için ilk görev, yeterlilik tanıma süreci için gerekli tüm belgeleri toplamaktır. Platformumuz, her eyalet (Bundesland) için hangi belgelerin yerel sağlık otoritelerine sunulması gerektiğini açıkça gösteren ayrıntılı kontrol listeleri sunar. Kolaylık olması açısından bilgi 12 dilde mevcuttur, böylece her kullanıcı talimatları ve formları kendi dilinde inceleyebilir. Kendi başına bilgi edinmenin yanı sıra, belge çevirisi, noter onayı ve apostil düzenleme (gerekirse) konularında özel danışmanlık hizmeti de sunuyoruz. Bu, hata riskini önemli ölçüde azaltır ve tüm belgelerin Alman makamlarının gereksinimlerini karşılamasını sağlar.`,
      },
      {
        title: `2. Eyalet Seçimi ve Bölgesel Özellikler`,
        content: `Her eyalet doktorlar birliğinin (Landesärztekammer) kendi özel kuralları ve gereksinim listeleri vardır. Platformda, bir eyalet seçtikten sonra kullanıcıya yerel normlara göre uyarlanmış belge kontrol listeleri, başvuru ofislerinin adresleri, uzman iletişim bilgileri ve işleme sürelerine ilişkin tavsiyeler gösteren kullanışlı bir eyalet seçici aracı bulunmaktadır. Bu bölgesel yaklaşım, eyaletler arasındaki farklılıklardan kaynaklanan karışıklığı önlemeye ve başvuru sürecini hızlandırmaya yardımcı olur.`,
      },
      {
        title: `3. Dil Desteği ve İçerik Yerelleştirme`,
        content: `Belgelerin düzenlenmesi için ayrıntılı talimatların yanı sıra platform 12 dilde mevcuttur; bunların arasında İngilizce, Almanca, Rusça, Ukraynaca, Lehçe, Romence ve diğerleri bulunur. Her dil için sunulanlar:
- Belge toplama için uyarlanmış kontrol listeleri.
- Başvuru örnekleri, motivasyon mektupları ve ön yazıların çevirileri.
- Almanca dil gereksinimleri (B2/C1 seviyeleri) ve sınav hazırlık ipuçları hakkında bilgi.
Bunun sayesinde doktorlar, ek çeviriler aramaya vakit harcamadan materyalleri doğrudan kendi dillerinde kullanabilirler.`,
      },
      {
        title: `4. Otomatik Özgeçmiş ve PDF Belge Oluşturma`,
        content: `İşe alımcılar, işverenler ve tıp odaları ile iletişimi kolaylaştırmak için platformda Almanya tarzı profesyonel bir özgeçmiş (Lebenslauf) oluşturma işlevi bulunmaktadır. Kullanıcı, bilgilerini İngilizce, Ukraynaca veya desteklenen 12 dilden birinde girer; sistem belgeyi Ukraynaca ve/veya Almanca olarak oluşturur. Hazır özgeçmiş, PDF formatında dışa aktarılabilir; bu, baskı veya e-posta ile gönderim için uygundur.
Ayrıca, diğer tüm önemli formlar (başvuru formları, motivasyon mektupları, beyanlar) doldurulabilir PDF olarak da üretilebilir. Bu yaklaşım, biçimlendirme sorunlarını önler ve tüm belgelerde tutarlı bir stil sağlar.`,
      },
      {
        title: `5. Öğrenme Bölümü: Terimler, Kısaltmalar, İlaçlar ve İnteraktif Oyunlar`,
        content: `Almanca tıp standartlarıyla ilgili sınavlara hazırlanmak için doktorlar, yerel tıbbi terimleri, kısaltmaları (abbreviations), ilaç adlarını ve kullanım özelliklerini öğrenmelidir. “Öğrenme” bölümünde şunlar toplanmıştır:
- Her eyalete uyarlanmış açıklamalar içeren terim sözlükleri (bazı terimler eyaletten eyalete farklılık gösterebilir).
- Ticari adlar, uluslararası jenerik adlar (INN), farmasötik formlar ve ana endikasyonları içeren ilaç listeleri.
- Yaygın olarak kullanılan tıbbi kısaltmalar ve kullanım örnekleri.
Öğrenmeyi ilginç ve etkili kılmak için interaktif oyunlar entegre ettik: flash kartlar, terim eşleştirme testleri ve kısaltma ezberleme egzersizleri. Bu ödüllendirme odaklı yaklaşım, bilgiyi daha iyi öğrenmeye ve Alman klinik standartlarına uyum sağlamaya yardımcı olur.`,
      },
      {
        title: `6. Yapay Zeka Destekli Klinik Vaka Simülasyonu (Fälle)`,
        content: `Bir uygulama lisansı almak için gerekli olan en önemli gereksinimlerden biri, Alman protokollerine uygun olarak klinik düşünme ve hasta yönetimi becerilerini göstermektir. “Klinik Vakalar” bölümümüzde, gerçek vakaları çeşitli kaynaklardan topladık: hem açık tıbbi veritabanlarından hem de her eyaletteki hastane uygulamalarından. Her vaka, bölgesel özelliğe göre işaretlenmiştir, böylece doktor seçilen eyalete özgü bir senaryo seçebilir.
Statik bilgilerin ötesinde (hastalık öyküsü, anamnez vb.), iki interaktif özellik geliştirdik:
1. Yapay Zeka Simülasyonu: Kullanıcı, bir hasta veya meslektaş (örneğin Alman bir danışman) rolünde davranan bir yapay zeka ile “konuşma” başlatabilir. Doktor, sorular, yorumlar veya ek veriler alarak klinik becerilerini etkileşimli olarak geliştirebilir. Yapay zeka ayrıca yerel standartlara göre önerilerde bulunabilir veya geri bildirimde bulunabilir.
2. Yazılı Vaka İncelemesi: Approbation sınavında adaylardan sıklıkla bir yönlendirme mektubu veya klinik özet yazmaları istenir. Kullanıcı taslağını yükleyebilir ve sistem (yapay zeka kullanarak) metnin format, dilbilgisi ve Almanya'da kabul edilen klinik gereksinimlere uygun olup olmadığını belirtebilir.`,
      },
      {
        title: `7. Ek Kaynaklar: Çevirmenler, Noterler ve Sosyal Ağlar`,
        content: `Her eyaletteki yerel hizmetleri aramak için doktorların zaman kaybetmemesi adına şunları derledik:
- İletişim bilgileri ve derecelendirmeleriyle akredite edilmiş tıbbi çevirmenler ve çeviri büroları listesi.
- Tıbbi belgelerin tasdiki konusunda uzmanlaşmış noterlerin iletişim bilgileri.
- Göçmen doktorların iletişim kurduğu ilgili sosyal medya gruplarının (Facebook, Telegram, WhatsApp vb.) bağlantıları, bölgelere göre sıralanmış (örneğin “Facebook: Ärzte in Berlin” veya “Telegram: Pflegekräfte Thüringen”).
Tüm bu kaynaklar bölgelere göre sıralanır: Kullanıcı bir eyalet seçtiğinde yalnızca o bölgede hizmet veren seçenekler görüntülenir. Bu, benzer bir süreci halihazırda takip etmiş kişileri bulmayı, deneyim paylaşmayı ve değerli bağlantılar elde etmeyi kolaylaştırır.`,
      },
      {
        title: `8. Kişiselleştirilmiş Kullanıcı Desteği`,
        content: `Otomatik hizmetlerin yanı sıra, Almanya'da yeterlilik tanıma sürecine aşina uzmanlarla bireysel danışmanlık yapma imkanı da sunuyoruz. Bunlar şunları içerebilir:
- Diploma denklik (nostrifikasyon) danışmanları.
- İkamet ve çalışma izinleri konusunda danışmanlık yapan göçmenlik avukatları.
- Belirli iş ilanları için belgelerin ve özgeçmişin hazırlanmasına yardımcı olan kariyer koçları.
Danışmanlıklar çevrimiçi (video arama veya sohbet yoluyla) ve gerekirse büyük şehirlerde (Berlin, Münih, Frankfurt vb.) yüz yüze gerçekleştirilebilir. Böylece her doktor, deneyimini, uzmanlık alanını ve istediği eyaleti göz önünde bulundurarak kişiselleştirilmiş bir eylem planı alır.`,
      },
      {
        title: `9. Sezgisel Arayüz ve Geleceğe Yönelik Geliştirme Planları`,
        content: `Bahsedilen tüm modüller, kullanıcı dostu tek bir arayüzde entegre edilmiştir ve kullanıcının diline otomatik olarak uyum sağlar: Kayıt olduktan sonra sistem, mevcut 12 dil arasından birini seçmesini ister. Menü, internet deneyimi az olan kullanıcıların bile ihtiyaç duydukları bölümü hızlıca bulmasını sağlayacak şekilde tasarlanmıştır.
Sürekli olarak klinik vaka veritabanını genişletmek, yeni testler ve interaktif alıştırmalar eklemek için çalışıyoruz. Gelecekteki planlar arasında, ilaç güncellemeleri için resmi tıbbi veritabanlarıyla (örneğin Arzneimittelkommission der deutschen Ärzteschaft) entegrasyon yer alıyor. Bu sayede platform, Almanya'da çalışma yolunda her doktor için güncel ve faydalı kalmaya devam edecektir.`,
      },
      {
        title: `Sonuç`,
        content: `Özetle, platformumuz herhangi bir ülkeden gelen doktorlara yardımcı olan kapsamlı bir araçtır:
  - Her eyaletin ayrıntılı gereksinimlerini anlamak.
  - Gerekli tüm belgeleri hazırlamak, çevirmek ve noter onayından geçirmek.
  - Profesyonel bir özgeçmiş oluşturmak ve PDF belgeler üretmek.
  - İnteraktif oyunlar aracılığıyla tıbbi terminoloji, kısaltmalar ve ilaçları öğrenmek.
  - Yapay zeka destekli simülasyonlarla klinik vakaları pratik yapmak.
  - Çevirmen ve noter iletişim bilgilerini, sosyal ağ topluluklarını bulmak.
  - Uzman danışmanlardan kişiselleştirilmiş destek almak.

Böylece, doktoru belge toplama aşamasından seçilen eyalette başarılı bir şekilde istihdam edilene kadar rehberlik eden hepsi bir arada bir hizmet oluşturduk.`,
      }
    ]
  },

  // Arabic content
  ar: {
    mainIntro: `تم تصميم منصتنا لتبسيط عملية الهجرة والاندماج المهني للأطباء في النظام الصحي الألماني إلى أقصى حد. إنها موجهة للمتخصصين من دول الاتحاد الأوروبي وكذلك الأطباء القادمين من خارج الاتحاد. بفضل المعلومات التفصيلية والدعم المخصص والأدوات التي تغطي جميع الولايات الفيدرالية (Bundesländer)، يمكن للمستخدمين إعداد جميع المستندات اللازمة خطوة بخطوة، وفهم متطلبات السلطات الصحية المحلية، وإكمال عملية الحصول على ترخيص طبي (Approbation) بتنسيق سهل المتابعة.`,
    sections: [
      {
        title: `1. دعم جمع ومعالجة المستندات`,
        content: `تتمثل المهمة الأولى لأي طبيب يخطط للعمل في ألمانيا في جمع جميع المستندات اللازمة للاعتراف بالمؤهلات. تحتوي منصتنا على قوائم مرجعية مفصلة بالوثائق المطلوبة لكل ولاية (Bundesland)، حيث يتم توضيح المستندات التي يجب تقديمها للسلطات الصحية المحلية. لراحة المستخدم، تتوفر المعلومات بـ 12 لغة، بحيث يمكن لكل مستخدم الاطلاع على التعليمات والنماذج بلغته الأم. بالإضافة إلى الاطلاع الذاتي، نقدم أيضًا استشارات خاصة: المساعدة في ترجمة المستندات، وتوثيقها رسميًا بختم النوتر، وتنسيق التصديق (أبوستيل) إذا لزم الأمر. هذا يقلل بشكل كبير من مخاطر الأخطاء ويضمن توافق جميع الوثائق مع متطلبات السلطات الألمانية.`,
      },
      {
        title: `2. اختيار الولاية والخصوصيات الإقليمية`,
        content: `تمتلك كل نقابة طبية إقليمية (Landesärztekammer) قواعدها الخاصة وقوائم متطلباتها. على المنصة، تم تنفيذ أداة اختيار الولاية بطريقة سهلة الاستخدام: بعد اختيار المنطقة، يرى المستخدم قوائم الوثائق المخصصة وفقًا للمعايير المحلية، وعناوين الجهات المختصة لتقديم الطلبات، وبيانات الاتصال بالخبراء، وتوصيات حول أوقات المعالجة. تساعد هذه الطريقة الإقليمية في تجنب الالتباس الناجم عن الاختلافات بين الولايات وتسريع عملية التقديم.`,
      },
      {
        title: `3. دعم اللغة وتوطين المحتوى`,
        content: `بخلاف التعليمات التفصيلية حول كيفية تقديم المستندات، تتوفر المنصة بـ 12 لغة، بما في ذلك الإنجليزية والألمانية والروسية والأوكرانية والبولندية والرومانية وغيرها. لكل لغة، نقدم ما يلي:
- قوائم مرجعية مخصصة لجمع المستندات.
- عينات مترجمة من نماذج الطلب وخطابات الدوافع وخطابات التغطية.
- معلومات حول متطلبات اللغة الألمانية (المستويات B2/C1) ونصائح للتحضير للامتحانات.
وبفضل ذلك، يمكن للأطباء البدء فورًا في العمل مع المواد بلغتهم الأم دون قضاء وقت إضافي في البحث عن الترجمات.`,
      },
      {
        title: `4. إنشاء السيرة الذاتية والمستندات بصيغة PDF تلقائيًا`,
        content: `لتسهيل التواصل مع مسؤولي التوظيف وأصحاب العمل والهيئات الطبية، تتضمن المنصة وظيفة إنشاء سيرة ذاتية ألمانية احترافية (Lebenslauf). يقوم المستخدم بإدخال بياناته بالإنجليزية أو الأوكرانية أو أي من اللغات الـ 12 المدعومة، ويقوم النظام بإنشاء المستند بالأوكرانية و/أو الألمانية. يمكن تصدير السيرة الذاتية النهائية بتنسيق PDF، مما يسهل طباعتها أو إرسالها عبر البريد الإلكتروني.
بالإضافة إلى ذلك، يمكن أيضًا إنشاء جميع النماذج الأساسية الأخرى (نماذج الطلب، ورسائل الدافع، والإقرارات) بتنسيق PDF قابل للتعبئة. تساعد هذه الطريقة في تجنب مشكلات التنسيق وتضمن اتساقًا في أسلوب جميع المستندات.`,
      },
      {
        title: `5. قسم التعلم: التعاريف والاختصارات والأدوية والألعاب التفاعلية`,
        content: `للتحضير لامتحانات معايير الطب الألماني، يحتاج الأطباء إلى إتقان المصطلحات الطبية المحلية والاختصارات (abbreviations) وأسماء الأدوية وخصائص استخدامها. في قسم "التعلم"، جمعنا ما يلي:
- مسارد بالمصطلحات مع شروحات مخصصة لكل ولاية (قد تختلف بعض المصطلحات حسب المنطقة).
- قوائم الأدوية مع أسماء العلامات التجارية، والأسماء الدولية غير المحمية (INN)، وصيغ الإطلاق والمؤشرات الرئيسية.
- الاختصارات الشائعة في الوثائق الطبية الألمانية مع أمثلة على استخدامها.
لجعل التعلم أكثر إثارة وفاعلية، قمنا بدمج الألعاب التفاعلية: بطاقات فلاش، واختبارات مطابقة المصطلحات، وتمارين سريعة على حفظ الاختصارات. تساعد هذه الطريقة القائمة على اللعب في تسهيل حفظ المعلومات والتكيف مع المعايير السريرية الألمانية.`,
      },
      {
        title: `6. محاكاة الحالات السريرية (Fälle) بدعم من الذكاء الاصطناعي`,
        content: `أحد المتطلبات الأساسية للحصول على ترخيص الممارسة هو إظهار التفكير السريري ومهارات إدارة المرضى وفقًا للبروتوكولات الألمانية. في قسم "الحالات السريرية" الخاص بنا، جمعنا حالات حقيقية (Fälle) من مصادر متعددة: من قواعد البيانات الطبية المفتوحة وكذلك من ممارسات المستشفيات في كل ولاية. تم تعليم كل حالة بحسب الخصوصيات الإقليمية، بحيث يمكن للطبيب اختيار حالة تمثل ولايته المختارة.
إلى جانب المعلومات الثابتة الكلاسيكية (تاريخ المرض، والسيرة المرضية، وما إلى ذلك)، قمنا بتنفيذ ميزتين تفاعليتين:
1. محاكاة بواسطة الذكاء الاصطناعي: يمكن للمستخدم بدء "محادثة" مع الذكاء الاصطناعي الذي يعمل كأنما مريض أو زميل (مثل مشرف ألماني). يتلقى الطبيب أسئلة أو تعليقات أو بيانات إضافية ويتدرب على مهاراته السريرية بطريقة تفاعلية. يمكن للذكاء الاصطناعي أيضًا تقييم الإجابات بتنسيق ملاحظات أو تقديم توصيات وفقًا للمعايير المحلية.
2. مراجعة الحالة المكتوبة: في امتحان Approbation، غالبًا ما يُطلب من المتقدمين كتابة رسالة إحالة أو ملخص سريري. يمكن للمستخدم تحميل مسودة، ويشير النظام (باستخدام الذكاء الاصطناعي) إلى ما إذا كانت الرسالة تلبي المتطلبات الشكلية والنحوية والسريرية المقبولة في ألمانيا.`,
      },
      {
        title: `7. موارد إضافية: المترجمون والموثقون والشبكات الاجتماعية`,
        content: `لتوفير الوقت للأطباء في البحث عن الخدمات المحلية في كل ولاية، جمعنا ما يلي:
- قائمة بمترجمين طبيين معتمدين ومكاتب ترجمة مع معلومات الاتصال والتقييمات.
- معلومات الاتصال للموثقين المتخصصين في تصديق الوثائق الطبية.
- روابط لمجموعات شبكات اجتماعية ذات صلة (Facebook، Telegram، WhatsApp، إلخ) حيث يتواصل الأطباء المهاجرون، مرتبة حسب المنطقة (مثل "Facebook: Ärzte in Berlin" أو "Telegram: Pflegekräfte Thüringen").
يتم فرز جميع هذه الموارد حسب المنطقة: عند اختيار المستخدم لولاية، يتم عرض الخيارات المتاحة في تلك المنطقة فقط. هذا يساعد في العثور بسرعة على أشخاص مروا بمثل هذه التجربة، وتبادل الخبرات، واكتساب روابط مفيدة.`,
      },
      {
        title: `8. دعم المستخدمين المخصص`,
        content: `بالإضافة إلى الخدمات الآلية، نقدم فرصة للحصول على استشارات شخصية مع متخصصين مطلعين جيدًا على إجراءات الاعتراف بالمؤهلات في ألمانيا. يمكن أن تشمل هذه:
- مستشارين في مسائل معادلة الشهادات (nostrifikation).
- محامين هجرة يقدمون المشورة بشأن تصاريح الإقامة والعمل.
- مستشاري مهنة يساعدون في إعداد الوثائق والسير الذاتية للوظائف المحددة.
يمكن إجراء الاستشارات عبر الإنترنت (عن طريق مكالمة فيديو أو دردشة) وعند الحاجة بشكل شخصي في المدن الكبرى (برلين، ميونخ، فرانكفورت، إلخ). بهذه الطريقة يحصل كل طبيب على خطة عمل مخصصة تأخذ في الاعتبار خبرته وتخصصه والولاية الفيدرالية المطلوبة للتوظيف.`,
      },
      {
        title: `9. واجهة سهلة الاستخدام وخطط التطوير المستقبلية`,
        content: `تم دمج جميع الوحدات المذكورة في واجهة مستخدم واحدة سهلة الاستخدام تتكيف تلقائيًا مع لغة المستخدم: بعد التسجيل، تطلب النظام اختيار إحدى اللغات الـ 12 المتاحة. تم تصميم القائمة بحيث يمكن حتى للمستخدمين ذوي الخبرة المحدودة في الإنترنت العثور بسرعة على القسم المطلوب.
نحن نعمل باستمرار على توسيع قاعدة بيانات الحالات السريرية، وإضافة اختبارات جديدة وتمارين تفاعلية. تشمل الخطط المستقبلية أيضًا التكامل مع قواعد البيانات الطبية الرسمية (مثل Arzneimittelkommission der deutschen Ärzteschaft) لتحديث معلومات الأدوية. بفضل ذلك، ستظل المنصة حديثة ومفيدة للغاية لكل طبيب في طريقه للعمل في ألمانيا.`,
      },
      {
        title: `الخاتمة`,
        content: `باختصار، منصتنا هي أداة شاملة تساعد الأطباء من أي دولة على:
  - فهم المتطلبات التفصيلية لكل ولاية فدرالية.
  - إعداد وترجمة وتصديق جميع المستندات اللازمة.
  - إنشاء سيرة ذاتية احترافية وتوليد مستندات PDF.
  - تعلم المصطلحات الطبية والاختصارات والأدوية من خلال الألعاب التفاعلية.
  - ممارسة الحالات السريرية باستخدام محاكيات مدعومة بالذكاء الاصطناعي.
  - العثور على جهات اتصال المترجمين والموثقين ومجتمعات الشبكات الاجتماعية.
  - الحصول على استشارات شخصية من خبراء متخصصين.

وبذلك، أنشأنا خدمة شاملة ترافق الطبيب من مرحلة جمع المستندات وحتى التوظيف الناجح في الولاية الفدرالية المختارة في ألمانيا.`,
      }
    ]
  },

  // French content
  fr: {
    mainIntro: `Notre plateforme est conçue pour simplifier au maximum le processus de migration et l'intégration professionnelle des médecins dans le système de santé allemand. Elle s'adresse aussi bien aux spécialistes des États membres de l'Union européenne qu'aux médecins venant de pays extérieurs à l'UE. Grâce à des informations détaillées, un accompagnement personnalisé et des outils couvrant tous les Länder, les utilisateurs peuvent préparer pas à pas tous les documents nécessaires, comprendre les exigences des autorités sanitaires locales et suivre la procédure d'obtention du permis d'exercice médical (Approbation) dans un format facile à suivre.`,
    sections: [
      {
        title: `1. Support pour la collecte et le traitement des documents`,
        content: `La première tâche pour tout médecin souhaitant travailler en Allemagne est de rassembler tous les documents nécessaires à la reconnaissance de sa qualification. Notre plateforme contient des listes de contrôle détaillées pour chaque Land, indiquant clairement quels documents doivent être soumis aux autorités sanitaires locales. Pour plus de commodité, les informations sont disponibles en 12 langues, afin que chaque utilisateur puisse consulter les instructions et les formulaires dans sa langue maternelle. En plus de l'auto-apprentissage, nous proposons également des consultations privées : aide à la traduction des documents, certification notariale et légalisation (apostille) si nécessaire. Cela réduit considérablement les risques d'erreurs et garantit que tous les papiers seront conformes aux exigences des autorités allemandes.`,
      },
      {
        title: `2. Sélection du Land et spécificités régionales`,
        content: `Chaque chambre médicale régionale (Landesärztekammer) possède ses propres règles et listes d’exigences. Sur la plateforme, nous avons mis en place un outil pratique pour sélectionner le Land : après avoir choisi une région, l’utilisateur voit des listes de documents adaptées aux normes locales, des adresses des bureaux de dépôt des demandes, les coordonnées des experts et des recommandations concernant les délais de traitement. Cette approche régionale permet d’éviter toute confusion liée aux différences entre les Länder et accélère le processus de dépôt des dossiers.`,
      },
      {
        title: `3. Assistance linguistique et localisation du contenu`,
        content: `En plus des instructions détaillées pour la constitution des dossiers, la plateforme est disponible en 12 langues, dont l’anglais, l’allemand, le russe, l’ukrainien, le polonais, le roumain, etc. Pour chaque langue, nous proposons :
- Des listes de contrôle adaptées pour la collecte des documents.
- Des modèles de lettres de candidature, de lettres de motivation et de lettres d’accompagnement traduits.
- Des informations sur les exigences en matière de langue allemande (niveaux B2/C1) et des conseils pour la préparation aux examens.
Grâce à cela, les médecins peuvent immédiatement travailler avec les documents dans leur langue maternelle sans perdre de temps à rechercher des traductions.`,
      },
      {
        title: `4. Génération automatisée de CV et de documents PDF`,
        content: `Pour faciliter la communication avec les recruteurs, les employeurs et les conseils médicaux, la plateforme propose une fonction de création d’un CV professionnel au format allemand (Lebenslauf). L’utilisateur saisit ses données en anglais, ukrainien ou dans l’une des 12 langues disponibles, et le système génère le document en ukrainien et/ou en allemand. Le CV final peut être exporté au format PDF, ce qui est pratique pour l’impression ou l’envoi par e-mail.
De plus, tous les autres formulaires clés (formulaires de candidature, lettres de motivation, déclarations) peuvent également être générés sous forme de PDF remplissables. Cette approche évite les problèmes de mise en forme et assure une cohérence de style pour tous les documents.`,
      },
      {
        title: `5. Section formation : définitions, abréviations, médicaments et jeux interactifs`,
        content: `Pour se préparer aux examens portant sur les spécificités de la médecine allemande, les médecins doivent maîtriser la terminologie médicale locale, les abréviations, les noms des médicaments et leurs modalités d’utilisation. Dans la section « Formation », sont rassemblés :
- Des glossaires avec des explications adaptées à chaque Land (une partie de la terminologie peut varier selon la région).
- Des listes de médicaments indiquant les noms commerciaux, les noms internationaux non protégés (INN), les formes galéniques et les principales indications.
- Les abréviations couramment utilisées dans la documentation médicale allemande, avec des exemples d’utilisation.
Pour rendre l’apprentissage intéressant et efficace, nous avons intégré des jeux interactifs : cartes flash, quiz d’association de termes et exercices rapides pour mémoriser les abréviations. Cela aide à assimiler le contenu de manière ludique et à s’adapter aux standards cliniques allemands.`,
      },
      {
        title: `6. Simulation de cas cliniques (Fälle) assistée par l’IA`,
        content: `Une des exigences clés pour obtenir l’autorisation d’exercice est de démontrer la capacité de raisonnement clinique et les compétences de prise en charge des patients selon les protocoles allemands. Dans notre section « Cas Cliniques », nous avons rassemblé des situations réelles (Fälle) provenant de différentes sources : bases de données médicales ouvertes et pratiques hospitalières dans chaque Land. Chaque cas est étiqueté selon la spécificité régionale, de sorte qu’un médecin puisse choisir un scénario représentatif de son Land cible.
En plus des informations statiques classiques (description de l’histoire de la maladie, anamnèse, etc.), nous avons mis en place deux fonctionnalités interactives :
1. Simulation IA : L’utilisateur peut initier une « conversation » avec une intelligence artificielle jouant le rôle du patient ou d’un confrère (par exemple, un tuteur allemand). Le médecin reçoit des questions, des commentaires ou des données supplémentaires et exerce ses compétences cliniques de manière interactive. L’IA peut également évaluer les réponses et fournir des recommandations conformes aux standards locaux.
2. Revue écrite de cas : Pour l’examen d’Approbation, il est souvent demandé de rédiger une lettre d’orientation ou un compte rendu clinique. L’utilisateur peut télécharger son brouillon, et le système (via l’IA) indique si le texte respecte le format, la grammaire et les critères cliniques acceptés en Allemagne.`,
      },
      {
        title: `7. Ressources complémentaires : traducteurs, notaires et réseaux sociaux`,
        content: `Pour éviter aux médecins de perdre du temps à chercher des services locaux dans chaque Land, nous avons compilé :
- Une liste de traducteurs médicaux accrédités et d’agences de traduction avec leurs coordonnées et leurs évaluations.
- Les coordonnées des notaires spécialisés dans la certification des documents médicaux.
- Des liens vers des groupes sur les réseaux sociaux (Facebook, Telegram, WhatsApp, etc.) où les médecins migrants échangent, classés par région (par ex. « Facebook : Ärzte in Berlin » ou « Telegram : Pflegekräfte Thüringen »).
Toutes ces ressources sont triées par région : dès que l’utilisateur sélectionne un Land, seules les options disponibles dans cette zone s’affichent. Cela permet de trouver rapidement des personnes ayant déjà suivi un parcours similaire, d’échanger des expériences et d’obtenir des contacts utiles.`,
      },
      {
        title: `8. Support personnalisé pour les utilisateurs`,
        content: `En plus des services automatisés, nous offrons la possibilité de consultations personnalisées avec des spécialistes bien informés sur la procédure de reconnaissance des qualifications en Allemagne. Cela peut inclure :
- Des conseillers en nostrification de diplômes.
- Des avocats en immigration qui conseillent sur les permis de séjour et de travail.
- Des coachs de carrière qui aident à rédiger les documents et les CV pour des offres d’emploi spécifiques.
Les consultations peuvent se dérouler en ligne (via visioconférence ou chat) et, si nécessaire, en personne dans les grandes villes (Berlin, Munich, Francfort, etc.). Ainsi, chaque médecin reçoit un plan d’action personnalisé en fonction de son expérience, de sa spécialité et du Land souhaité pour son emploi.`,
      },
      {
        title: `9. Interface intuitive et plans de développement futurs`,
        content: `Tous les modules mentionnés sont intégrés dans une interface conviviale unique qui s’adapte automatiquement à la langue de l’utilisateur : après l’inscription, le système invite à choisir l’une des 12 langues disponibles. Le menu est conçu de manière à ce que même les utilisateurs ayant une expérience limitée d’Internet puissent rapidement trouver la section nécessaire.
Nous travaillons en permanence à l’enrichissement de la base de données des cas cliniques, à l’ajout de nouveaux tests et exercices interactifs. Des projets futurs incluent l’intégration avec des bases de données médicales officielles (par exemple, l’Arzneimittelkommission der deutschen Ärzteschaft) pour la mise à jour des informations sur les médicaments. Cela permet à la plateforme de rester à jour et très utile pour chaque médecin en voie de travailler en Allemagne.`,
      },
      {
        title: `Conclusion`,
        content: `En résumé, notre plateforme est un outil complet qui aide les médecins de n’importe quel pays à :
  - Comprendre en détail les exigences de chaque Land.
  - Préparer, traduire et faire certifier notarialement tous les documents nécessaires.
  - Créer un CV professionnel et générer des documents PDF.
  - Apprendre la terminology médicale, les abréviations et les médicaments à travers des jeux interactifs.
  - S’exercer sur des cas cliniques avec des simulations assistées par IA.
  - Trouver des contacts de traducteurs, de notaires et des communautés sur les réseaux sociaux.
  - Recevoir des consultations personnalisées de la part d’experts spécialisés.

Ainsi, nous avons créé un service tout-en-un qui guide le médecin depuis la collecte des documents jusqu’à son emploi réussi dans le Land de son choix en Allemagne.`,
      }
    ]
  },

  // Spanish content
  es: {
    mainIntro: `Nuestra plataforma está diseñada para simplificar al máximo el proceso de migración e integración profesional de los médicos en el sistema sanitario alemán. Está dirigida tanto a especialistas de los países miembros de la Unión Europea como a médicos procedentes de fuera de la UE. Gracias a información detallada, apoyo personalizado y herramientas que cubren todos los Estados federados (Länder), los usuarios pueden preparar paso a paso todos los documentos necesarios, comprender los requisitos de las autoridades sanitarias locales y completar el proceso de obtención de la licencia médica (Approbation) en un formato fácil de seguir.`,
    sections: [
      {
        title: `1. Soporte para la recopilación y tramitación de documentos`,
        content: `La primera tarea para cualquier médico que planee trabajar en Alemania es reunir todos los documentos necesarios para el reconocimiento de sus cualificaciones. Nuestra plataforma contiene listas de verificación detalladas para cada Land, indicando claramente qué documentos deben presentarse a las autoridades sanitarias locales. Para mayor comodidad, la información está disponible en 12 idiomas, de modo que cada usuario pueda consultar las instrucciones y formularios en su lengua materna. Además de la información autodidacta, ofrecemos también consultas privadas: ayuda en la traducción de documentos, certificación notarial y legalización (apostilla) si es necesario. Esto reduce en gran medida el riesgo de errores y garantiza que todos los documentos cumplan con los requisitos de las autoridades alemanas.`,
      },
      {
        title: `2. Selección del Land y especificidades regionales`,
        content: `Cada Colegio Médico regional (Landesärztekammer) tiene sus propias reglas y listas de requisitos. En la plataforma, hemos implementado una herramienta práctica para seleccionar el Land: tras elegir una región, el usuario ve listas de documentos adaptadas a las normativas locales, direcciones de las oficinas para presentar solicitudes, datos de contacto de expertos y recomendaciones sobre los tiempos de tramitación. Este enfoque regional permite evitar confusiones por las diferencias entre los Länder y acelera el proceso de presentación de la documentación.`,
      },
      {
        title: `3. Soporte lingüístico y localización de contenidos`,
        content: `Además de instrucciones detalladas para tramitar documentos, la plataforma está disponible en 12 idiomas, incluidos inglés, alemán, ruso, ucraniano, polaco, rumano, entre otros. Para cada idioma ofrecemos:
- Listas de verificación adaptadas para la recopilación de documentos.
- Muestras traducidas de formularios de solicitud, cartas de presentación y cartas de motivación.
- Información sobre los requisitos de dominio del alemán (niveles B2/C1) y consejos para la preparación de exámenes.
Gracias a esto, los médicos pueden trabajar inmediatamente con los materiales en su idioma nativo sin perder tiempo en buscar traducciones.`,
      },
      {
        title: `4. Generación automatizada de currículum y documentos PDF`,
        content: `Para facilitar la comunicación con reclutadores, empleadores y consejos médicos, la plataforma cuenta con una función para crear un currículum profesional al estilo alemán (Lebenslauf). El usuario introduce sus datos en inglés, ucraniano o en cualquiera de los 12 idiomas disponibles, y el sistema genera el documento en ucraniano y/o alemán. El curriculum final se puede exportar en formato PDF, lo cual es útil para imprimirlo o enviarlo por correo electrónico.
Además, todos los demás formularios clave (formularios de solicitud, cartas de presentación, declaraciones) también se pueden generar en formato PDF rellenable. Este enfoque evita problemas de formato y asegura un estilo coherente en todos los documentos.`,
      },
      {
        title: `5. Sección de aprendizaje: definiciones, abreviaturas, medicamentos y juegos interactivos`,
        content: `Para prepararse para los exámenes sobre los estándares médicos alemanes, los médicos deben dominar la terminología médica local, las abreviaturas, los nombres de los medicamentos y sus características de uso. En la sección “Aprendizaje” hemos recopilado:
- Glosarios con explicaciones adaptadas a cada Land (parte de la terminología puede variar según la región).
- Listas de medicamentos indicando nombres comerciales, nombres genéricos internacionales (INN), formas farmacéuticas e indicaciones principales.
- Abreviaturas comúnmente utilizadas en la documentación médica alemana, con ejemplos de uso.
Para hacer el aprendizaje interesante y efectivo, hemos integrado juegos interactivos: tarjetas flash, cuestionarios de emparejamiento de términos y ejercicios rápidos para memorizar abreviaturas. Este enfoque gamificado ayuda a retener mejor la información y a adaptarse a los estándares clínicos alemanes.`,
      },
      {
        title: `6. Simulación de casos clínicos (Fälle) con asistencia de IA`,
        content: `Uno de los requisitos clave para obtener la licencia de ejercicio es demostrar el razonamiento clínico y las habilidades de manejo de pacientes según los protocolos alemanes. En nuestra sección “Casos Clínicos”, hemos recopilado situaciones reales (Fälle) de diversas fuentes: bases de datos médicas abiertas y prácticas hospitalarias en cada Land. Cada caso está etiquetado según la especificidad regional, por lo que un médico puede elegir un escenario representativo de su Land de destino.
Además de la información estática clásica (historia clínica, anamnesis, etc.), hemos implementado dos funciones interactivas:
1. Simulación IA: El usuario puede iniciar una “conversación” con una inteligencia artificial que actúa como paciente o colega (por ejemplo, un tutor alemán). El médico recibe preguntas, comentarios o datos adicionales y practica sus habilidades clínicas de manera interactiva. La IA también puede evaluar las respuestas y proporcionar recomendaciones según los estándares locales.
2. Revisión escrita del caso: Para el examen de Approbation, a menudo se pide a los candidatos que redacten una carta de remisión o un resumen clínico. El usuario puede cargar su borrador y el sistema (mediante IA) indicará si el texto cumple con el formato, la gramática y los criterios clínicos aceptados en Alemania.`,
      },
      {
        title: `7. Recursos adicionales: traductores, notarios y redes sociales`,
        content: `Para ahorrar tiempo a los médicos en la búsqueda de servicios locales en cada Land, hemos compilado:
- Una lista de traductores médicos acreditados y agencias de traducción con sus datos de contacto y valoraciones.
- Información de contacto de notarios especializados en certificar documentos médicos.
- Enlaces a grupos relevantes en redes sociales (Facebook, Telegram, WhatsApp, etc.) donde los médicos migrantes se comunican, organizados por región (por ejemplo, “Facebook: Ärzte in Berlin” o “Telegram: Pflegekräfte Thüringen”).
Todos estos recursos están ordenados por región: una vez que el usuario selecciona un Land, solo se muestran las opciones disponibles en esa zona. Esto ayuda a encontrar rápidamente personas que ya han pasado por un proceso similar, intercambiar experiencias y obtener contactos útiles.`,
      },
      {
        title: `8. Soporte personalizado para usuarios`,
        content: `Además de los servicios automatizados, ofrecemos la posibilidad de consultas personalizadas con especialistas bien informados sobre el proceso de reconocimiento de cualificaciones en Alemania. Esto puede incluir:
- Asesores en cuestiones de nostrificación de títulos.
- Abogados de inmigración que asesoran sobre permisos de residencia y trabajo.
- Consejeros de carrera que ayudan a elaborar documentos y currículums para ofertas de empleo específicas.
Las consultas se pueden realizar en línea (vía videollamada o chat) y, si es necesario, en persona en grandes ciudades (Berlín, Múnich, Fráncfort, etc.). De este modo, cada médico recibe un plan de acción personalizado según su experiencia, especialidad y Land deseado para el empleo.`,
      },
      {
        title: `9. Interfaz intuitiva y planes de desarrollo futuros`,
        content: `Todos los módulos mencionados están integrados en una interfaz fácil de usar que se adapta automáticamente al idioma del usuario: tras registrarse, el sistema solicita elegir uno de los 12 idiomas disponibles. El menú está diseñado para que incluso los usuarios con experiencia limitada en Internet puedan encontrar rápidamente la sección necesaria.
Trabajamos continuamente en ampliar la base de datos de casos clínicos, añadir nuevas pruebas y ejercicios interactivos. Los planes futuros incluyen la integración con bases de datos médicas oficiales (por ejemplo, Arzneimittelkommission der deutschen Ärzteschaft) para la actualización de información sobre medicamentos. Esto permite que la plataforma permanezca actualizada y muy útil para cada médico en camino a trabajar en Alemania.`,
      },
      {
        title: `Conclusión`,
        content: `En resumen, nuestra plataforma es una herramienta integral que ayuda a los médicos de cualquier país a :
  - Comprender en detalle los requisitos de cada Land.
  - Preparar, traducir y certificar notarialmente todos los documentos necesarios.
  - Crear un currículum profesional y generar documentos PDF.
  - Aprender la terminología médica, abreviaturas y medicamentos mediante juegos interactivos.
  - Practicar casos clínicos con simulaciones asistidas por IA.
  - Encontrar contactos de traductores, notarios y comunidades en redes sociales.
  - Recibir consultas personalizadas de asesores expertos.

De este modo, hemos creado un servicio todo en uno que guía al médico desde la recopilación de documentos hasta su empleo exitoso en el Land elegido en Alemania.`,
      }
    ]
  },

  // Polish content
  pl: {
    mainIntro: `Nasza platforma została zaprojektowana, aby maksymalnie uprościć proces migracji i integracji zawodowej lekarzy w niemieckim systemie opieki zdrowotnej. Adresujemy ją zarówno do specjalistów z państw członkowskich Unii Europejskiej, jak i do lekarzy przyjeżdżających spoza UE. Dzięki szczegółowym informacjom, spersonalizowanej pomocy i narzędziom obejmującym wszystkie kraje związkowe (Länder), użytkownicy mogą krok po kroku przygotować wszystkie niezbędne dokumenty, zrozumieć wymagania lokalnych organów zdrowia i przejść procedurę uzyskania licencji medycznej (Approbation) w łatwym do śledzenia formacie.`,
    sections: [
      {
        title: `1. Wsparcie w zbieraniu i przetwarzaniu dokumentów`,
        content: `Pierwszym zadaniem dla każdego lekarza planującego pracę w Niemczech jest zgromadzenie wszystkich niezbędnych dokumentów do uznania kwalifikacji. Nasza platforma zawiera szczegółowe listy kontrolne dla każdego kraju związkowego (Land), jasno wskazując, które dokumenty należy złożyć w lokalnych organach zdrowia. Dla wygody informacje są dostępne w 12 językach, dzięki czemu użytkownik może zapoznać się z instrukcjami i formularzami w swoim rodzimym języku. Oprócz samodzielnej nauki oferujemy również prywatne konsultacje: pomoc w tłumaczeniu dokumentów, poświadczenie notarialne i uwierzytelnianie apostille (jeśli jest to konieczne). To znacząco zmniejsza ryzyko błędów i gwarantuje, że wszystkie dokumenty będą zgodne z wymaganiami niemieckich władz.`,
      },
      {
        title: `2. Wybór kraju związkowego i specyfika regionalna`,
        content: `Każda regionalna izba lekarska (Landesärztekammer) ma swoje własne zasady i listy wymagań. Na platformie wdrożyliśmy wygodne narzędzie do wyboru kraju związkowego: po wybraniu regionu użytkownik widzi dostosowane do lokalnych przepisów listy dokumentów, adresy placówek przyjmujących wnioski, dane kontaktowe ekspertów oraz rekomendacje dotyczące czasu rozpatrywania. Takie regionalne podejście pomaga uniknąć zamieszania z różnicami między krajami związkowymi i przyspiesza proces składania wniosków.`,
      },
      {
        title: `3. Wsparcie językowe i lokalizacja treści`,
        content: `Oprócz szczegółowych instrukcji dotyczących przygotowania dokumentów, platforma jest dostępna w 12 językach, w tym angielskim, niemieckim, rosyjskim, ukraińskim, polskim, rumuńskim i innych. Dla każdego języka zapewniamy:
- Dostosowane listy kontrolne do zbierania dokumentów.
- Przetłumaczone wzory wniosków, listów motywacyjnych i listów przewodnich.
- Informacje o wymaganiach dotyczących znajomości języka niemieckiego (poziomy B2/C1) oraz wskazówki do przygotowania się do egzaminów.
Dzięki temu lekarze mogą od razu pracować z materiałami w swoim rodzimym języku, bez tracenia czasu na wyszukiwanie tłumaczeń.`,
      },
      {
        title: `4. Automatyczne generowanie CV i dokumentów PDF`,
        content: `Aby ułatwić komunikację z rekruterami, pracodawcami i izbami lekarskimi, platforma oferuje funkcję tworzenia profesjonalnego CV w niemieckim stylu (Lebenslauf). Użytkownik wprowadza swoje dane w języku angielskim, ukraińskim lub w jednym z 12 obsługiwanych języków, a system generuje dokument w języku ukraińskim i/lub niemieckim. Gotowe CV można wyeksportować w formacie PDF, co ułatwia jego wydrukowanie lub wysłanie e-mailem.
Ponadto wszystkie inne kluczowe formularze (formularze zgłoszeniowe, listy motywacyjne, oświadczenia) można również wygenerować jako wypełnialne pliki PDF. Takie podejście pozwala uniknąć problemów z formatowaniem i gwarantuje spójny styl wszystkich dokumentów.`,
      },
      {
        title: `5. Sekcja szkoleniowa: definicje, skróty, leki i gry interaktywne`,
        content: `Aby przygotować się do egzaminów z niemieckich standardów medycznych, lekarze muszą opanować lokalną terminologię medyczną, skróty, nazwy leków i specyfikę ich stosowania. W sekcji „Szkolenie” zebraliśmy:
- Słowniki z wyjaśnieniami dostosowanymi do każdego Landu (część terminologii może się różnić w zależności od regionu).
- Listy leków z podaniem nazw handlowych, międzynarodowych nazw niezastrzeżonych (INN), postaci farmaceutycznych i głównych wskazań.
- Skróty często używane w niemieckiej dokumentacji medycznej wraz z przykładami ich użycia.
Aby nauka była ciekawa i efektywna, zintegrowaliśmy gry interaktywne: fiszki, quizy dopasowujące terminy oraz szybkie ćwiczenia utrwalające skróty. To pomaga przyswoić materiał w formie gry i dostosować się do niemieckich standardów klinicznych.`,
      },
      {
        title: `6. Symulacja przypadków klinicznych (Fälle) z asystą AI`,
        content: `Jednym z kluczowych wymagań do uzyskania licencji na praktykę jest wykazanie myślenia klinicznego i umiejętności opieki nad pacjentem zgodnie z niemieckimi protokołami. W naszej sekcji „Przypadki kliniczne” zebraliśmy rzeczywiste scenariusze (Fälle) z różnych źródeł: zarówno z otwartych baz danych medycznych, jak i z praktyk szpitalnych w każdym Landzie. Każdy przypadek jest oznaczony zgodnie ze specyfiką regionu, aby lekarz mógł wybrać scenariusz reprezentatywny dla swojego wybranego Landu.
Oprócz klasycznych informacji statycznych (opis historii choroby, wywiad itp.) wdrożyliśmy dwie funkcje interaktywne:
1. Symulacja AI: Użytkownik może nawiązać „rozmowę” z AI, która pełni rolę pacjenta lub kolegi (np. niemieckiego mentora). Lekarz otrzymuje pytania, komentarze lub dodatkowe dane i ćwiczy swoje umiejętności kliniczne w sposób interaktywny. AI może także ocenić odpowiedzi i udzielić rekomendacji zgodnie z lokalnymi standardami.
2. Przegląd pisemny przypadku: Na egzaminie Approbation często trzeba napisać list kierujący lub streszczenie kliniczne. Użytkownik może przesłać swój szkic, a system (wykorzystując AI) zasugeruje, czy tekst spełnia wymagania dotyczące formatu, gramatyki i kryteriów klinicznych akceptowanych w Niemczech.`,
      },
      {
        title: `7. Dodatkowe zasoby: tłumacze, notariusze i sieci społecznościowe`,
        content: `Aby lekarze nie tracili czasu na wyszukiwanie lokalnych usług w każdym kraju związkowym, zebraliśmy:
- Listę akredytowanych tłumaczy medycznych i biur tłumaczeń z danymi kontaktowymi i ocenami.
- Dane kontaktowe notariuszy specjalizujących się w poświadczaniu dokumentów medycznych.
- Linki do grup tematycznych w mediach społecznościowych (Facebook, Telegram, WhatsApp itp.), gdzie komunikują się lekarze-migranci, posegregowane według regionów (np. „Facebook: Ärzte in Berlin” lub „Telegram: Pflegekräfte Thüringen”).
Wszystkie te zasoby są sortowane według regionów: po wybraniu kraju związkowego wyświetlane są tylko opcje dostępne w danym regionie. To pomaga szybko znaleźć osoby, które już przeszły podobną drogę, wymienić się doświadczeniami i uzyskać przydatne kontakty.`,
      },
      {
        title: `8. Indywidualne wsparcie użytkowników`,
        content: `Oprócz zautomatyzowanych usług oferujemy możliwość osobistych konsultacji ze specjalistami dobrze znającymi procedurę uznania kwalifikacji w Niemczech. Może to obejmować:
- Doradców ds. nostryfikacji dyplomów.
- Prawników imigracyjnych doradzających w sprawach zezwoleń na pobyt i pracę.
- Doradców kariery pomagających w przygotowaniu dokumentów i CV pod konkretne oferty pracy.
Konsultacje mogą odbywać się online (przez wideorozmowę lub czat) oraz, w razie potrzeby, stacjonarnie w dużych miastach (Berlin, Monachium, Frankfurt itp.). Dzięki temu każdy lekarz otrzymuje spersonalizowany plan działania z uwzględnieniem swojego doświadczenia, specjalizacji i wybranego kraju związkowego do zatrudnienia.`,
      },
      {
        title: `9. Intuicyjny interfejs i plany rozwoju na przyszłość`,
        content: `Wszystkie wymienione moduły zostały zintegrowane w jednym przyjaznym interfejsie, który automatycznie dostosowuje się do języka użytkownika: po rejestracji system proponuje wybór jednej z 12 dostępnych wersji językowych. Menu zostało zaprojektowane tak, aby nawet osoby z minimalnym doświadczeniem w internecie mogły szybko znaleźć potrzebny dział.
Stale pracujemy nad rozbudową bazy przypadków klinicznych, dodawaniem nowych testów i interaktywnych ćwiczeń. Plany na przyszłość obejmują integrację z oficjalnymi bazami danych medycznych (np. Arzneimittelkommission der deutschen Ärzteschaft) w celu aktualizacji informacji o lekach. Dzięki temu platforma pozostanie aktualna i bardzo przydatna dla każdego lekarza planującego pracę w Niemczech.`,
      },
      {
        title: `Podsumowanie`,
        content: `Podsumowując, nasza platforma to kompleksowe narzędzie, które pomaga lekarzom z dowolnego kraju:
  - Szczegółowo poznać wymagania każdego kraju związkowego.
  - Przygotować, przetłumaczyć i notarialnie poświadczyć wszystkie niezbędne dokumenty.
  - Stworzyć profesjonalne CV i wygenerować dokumenty PDF.
  - Nauczyć się terminologii medycznej, skrótów i leków poprzez gry interaktywne.
  - Przećwiczyć przypadki kliniczne z symulacjami wspomaganymi przez AI.
  - Znaleźć kontakty do tłumaczy, notariuszy i społeczności w mediach społecznościowych.
  - Uzyskać indywidualne konsultacje od wyspecjalizowanych ekspertów.

W ten sposób stworzyliśmy usługę „wszystko w jednym”, która prowadzi lekarza od etapu zbierania dokumentów aż po pomyślne zatrudnienie w wybranym kraju związkowym w Niemczech.`,
      }
    ]
  },

  // Greek content
  el: {
    mainIntro: `Η πλατφόρμα μας έχει σχεδιαστεί για να απλοποιήσει όσο το δυνατόν περισσότερο τη διαδικασία μετανάστευσης και επαγγελματικής ενσωμάτωσης των γιατρών στο γερμανικό σύστημα υγείας. Απευθύνεται τόσο σε ειδικούς από κράτη-μέλη της Ευρωπαϊκής Ένωσης όσο και σε γιατρούς που έρχονται από χώρες εκτός ΕΕ. Χάρη σε λεπτομερείς πληροφορίες, εξατομικευμένη υποστήριξη και εργαλεία που καλύπτουν όλα τα ομοσπονδιακά κρατίδια (Bundesländer), οι χρήστες μπορούν να ετοιμάσουν βήμα προς βήμα όλα τα απαραίτητα έγγραφα, να κατανοήσουν τις απαιτήσεις των τοπικών υγειονομικών αρχών και να ολοκληρώσουν τη διαδικασία απόκτησης ιατρικής άδειας (Approbation) με εύκολη προς παρακολούθηση μορφή.`,
    sections: [
      {
        title: `1. Υποστήριξη συλλογής και επεξεργασίας εγγράφων`,
        content: `Το πρώτο καθήκον για κάθε γιατρό που σχεδιάζει να εργαστεί στη Γερμανία είναι να συγκεντρώσει όλα τα απαραίτητα έγγραφα για την αναγνώριση των προσόντων του. Η πλατφόρμα μας περιλαμβάνει λεπτομερείς λίστες ελέγχου για κάθε κρατίδιο (Bundesland), όπου αναφέρονται με σαφήνεια ποια έγγραφα πρέπει να υποβληθούν στις τοπικές υγειονομικές αρχές. Για ευκολία, οι πληροφορίες είναι διαθέσιμες σε 12 γλώσσες, ώστε κάθε χρήστης να μπορεί να διαβάσει τις οδηγίες και τα έντυπα στη μητρική του γλώσσα. Εκτός από την ανεξάρτητη μελέτη, προσφέρουμε επίσης ιδιωτικές συμβουλευτικές υπηρεσίες: βοήθεια στη μετάφραση εγγράφων, επικύρωση από συμβολαιογράφο και έκδοση αποστολής (apostille), εάν απαιτείται. Αυτό μειώνει σημαντικά τον κίνδυνο σφαλμάτων και διασφαλίζει ότι όλα τα έγγραφα θα πληρούν τις απαιτήσεις των γερμανικών αρχών.`,
      },
      {
        title: `2. Επιλογή ομοσπονδιακού κρατιδίου και περιφερειακά χαρακτηριστικά`,
        content: `Κάθε τοπική ιατρική ένωση (Landesärztekammer) έχει τους δικούς της κανόνες και λίστες απαιτήσεων. Στην πλατφόρμα έχουμε υλοποιήσει ένα φιλικό εργαλείο επιλογής κρατιδίου: μετά την επιλογή μιας περιοχής, ο χρήστης βλέπει προσαρμοσμένες στις τοπικές προδιαγραφές λίστες εγγράφων, διευθύνσεις των γραφείων υποβολής αιτήσεων, στοιχεία επικοινωνίας ειδικών και συστάσεις σχετικά με τους χρόνους επεξεργασίας. Αυτή η περιφερειακή προσέγγιση βοηθά στην αποφυγή σύγχυσης λόγω διαφορών μεταξύ των κρατιδίων και επιταχύνει τη διαδικασία υποβολής.`,
      },
      {
        title: `3. Υποστήριξη γλώσσας και τοπικοποίηση περιεχομένου`,
        content: `Εκτός από λεπτομερείς οδηγίες για την υποβολή εγγράφων, η πλατφόρμα είναι διαθέσιμη σε 12 γλώσσες, συμπεριλαμβανομένων των αγγλικών, γερμανικών, ρωσικών, ουκρανικών, πολωνικών, ρουμανικών και άλλων. Για κάθε γλώσσα παρέχουμε:
- Προσαρμοσμένες λίστες ελέγχου για τη συλλογή εγγράφων.
- Μεταφρασμένα δείγματα αιτήσεων, γράμματα κινήτρων και συνοδευτικά γράμματα.
- Πληροφορίες σχετικά με τις απαιτήσεις γνώσης γερμανικών (επίπεδα B2/C1) και συμβουλές για την προετοιμασία εξετάσεων.
Χάρη σε αυτό, οι γιατροί μπορούν να εργάζονται αμέσως με τα υλικά στη μητρική τους γλώσσα, χωρίς να χάνουν χρόνο αναζητώντας μεταφράσεις.`,
      },
      {
        title: `4. Αυτοματοποιημένη δημιουργία βιογραφικού και εγγράφων PDF`,
        content: `Για να διευκολυνθεί η επικοινωνία με προσληπτικούς, εργοδότες και ιατρικά συμβούλια, η πλατφόρμα διαθέτει λειτουργία δημιουργίας επαγγελματικού γερμανικού βιογραφικού (Lebenslauf). Ο χρήστης εισάγει τα δεδομένα του στα αγγλικά, ουκρανικά ή σε μία από τις 12 υποστηριζόμενες γλώσσες και το σύστημα δημιουργεί το έγγραφο στα ουκρανικά και/ή στα γερμανικά. Το τελικό βιογραφικό μπορεί να εξαχθεί σε μορφή PDF, κάτι που είναι βολικό για εκτύπωση ή αποστολή μέσω email.
Επιπλέον, όλα τα άλλα βασικά έντυπα (έντυπα αίτησης, γράμματα κινήτρων, δηλώσεις) μπορούν επίσης να δημιουργηθούν ως συμπληρώσιμα PDF. Αυτή η προσέγγιση αποφεύγει προβλήματα μορφοποίησης και διασφαλίζει έναν συνεπή τρόπο παρουσίασης σε όλα τα έγγραφα.`,
      },
      {
        title: `5. Ενότητα μάθησης: ορισμοί, συντομογραφίες, φάρμακα και διαδραστικά παιχνίδια`,
        content: `Για να προετοιμαστούν για εξετάσεις σχετικά με τα πρότυπα γερμανικής ιατρικής, οι γιατροί πρέπει να κατακτήσουν την τοπική ιατρική ορολογία, τις συντομογραφίες, τα ονόματα φαρμάκων και τα χαρακτηριστικά χρήσης τους. Στην ενότητα «Μάθηση», έχουμε συλλέξει:
- Γλωσσάρια με εξηγήσεις προσαρμοσμένες σε κάθε κρατίδιο (μερική ορολογία μπορεί να διαφέρει ανάλογα με την περιοχή).
- Καταλόγους φαρμάκων με σήματα, διεθνή μη κατοχυρωμένα ονόματα (INN), μορφές διάθεσης και βασικές ενδείξεις.
- Συντομογραφίες που χρησιμοποιούνται ευρέως στην γερμανική ιατρική τεκμηρίωση, με παραδείγματα χρήσης.
Για να γίνει η μάθηση ενδιαφέρουσα και αποτελεσματική, έχουμε ενσωματώσει διαδραστικά παιχνίδια: κάρτες flash, κουίζ αντιστοίχισης όρων και γρήγορες ασκήσεις για την απομνημόνευση συντομογραφιών. Αυτή η παιχνιδοποιημένη προσέγγιση βοηθά στην καλύτερη αφομοίωση του περιεχομένου και στην προσαρμογή στα γερμανικά κλινικά πρότυπα.`,
      },
      {
        title: `6. Προσομοίωση κλινικών περιπτώσεων (Fälle) με υποστήριξη ΤΝ`,
        content: `Ένα από τα βασικά κριτήρια για την απόκτηση άδειας άσκησης είναι η επίδειξη κλινικής σκέψης και ικανοτήτων διαχείρισης ασθενών σύμφωνα με τα γερμανικά πρωτόκολλα. Στην ενότητα «Κλινικές Περιπτώσεις», έχουμε συλλέξει πραγματικά σενάρια (Fälle) από διάφορες πηγές: τόσο από ανοιχτές ιατρικές βάσεις δεδομένων όσο και από ιατρικές πρακτικές κάθε κρατιδίου. Κάθε περίπτωση επισημαίνεται με τη σχετική περιφερειακή ιδιαιτερότητα, ώστε ο γιατρός να μπορεί να επιλέξει σενάριο αντιπροσωπευτικό του επιθυμητού κρατιδίου.
Εκτός από τις στατικές πληροφορίες (περιγραφή ιστορικού ασθένειας, αναμνέωση κ.λπ.), έχουμε υλοποιήσει δύο διαδραστικές λειτουργίες:
1. Προσομοίωση με ΤΝ: Ο χρήστης μπορεί να ξεκινήσει μια «συζήτηση» με τεχνητή νοημοσύνη που υποδύεται τον ασθενή ή τον συνάδελφο (π.χ. γερμανός μέντορας). Ο γιατρός λαμβάνει ερωτήσεις, σχόλια ή πρόσθετα δεδομένα και εξασκεί διαδραστικά τις κλινικές του δεξιότητες. Η ΤΝ μπορεί επίσης να αξιολογήσει τις απαντήσεις και να προσφέρει συστάσεις σύμφωνα με τα τοπικά πρότυπα.
2. Έλεγχος γραπτής αναφοράς: Στο πλαίσιο της εξέτασης Approbation, συχνά απαιτείται από τους υποψηφίους να συντάξουν παραπομπή ή κλινική αναφορά. Ο χρήστης μπορεί να ανεβάσει το προσχέδιό του και το σύστημα (με χρήση ΤΝ) θα υποδείξει αν το κείμενο πληροί τις απαιτήσεις μορφοποίησης, γραμματικής και κλινικών προδιαγραφών που ισχύουν στη Γερμανία.`,
      },
      {
        title: `7. Πρόσθετοι πόροι: μεταφραστές, συμβολαιογράφοι και κοινωνικά δίκτυα`,
        content: `Για να μην χάνουν οι γιατροί χρόνο αναζητώντας τοπικές υπηρεσίες σε κάθε κρατίδιο, έχουμε συγκεντρώσει:
- Λίστα εγκεκριμένων ιατρικών μεταφραστών και γραφείων μετάφρασης με στοιχεία επικοινωνίας και αξιολογήσεις.
- Στοιχεία επικοινωνίας συμβολαιογράφων που ειδικεύονται στην επικύρωση ιατρικών εγγράφων.
- Συνδέσμους σε ομάδες στα κοινωνικά δίκτυα (Facebook, Telegram, WhatsApp κ.λπ.) όπου επικοινωνούν οι μετανάστες γιατροί, οργανωμένες κατά περιφέρεια (π.χ. “Facebook: Ärzte in Berlin” ή “Telegram: Pflegekräfte Thüringen”).
Όλοι αυτοί οι πόροι ταξινομούνται κατά περιοχή: μόλις ο χρήστης επιλέξει κρατίδιο, εμφανίζονται μόνο οι διαθέσιμες επιλογές στην εν λόγω περιοχή. Αυτό βοηθά στον γρήγορο εντοπισμό ατόμων που έχουν ήδη περάσει την ίδια διαδικασία, στην ανταλλαγή εμπειριών και στην απόκτηση χρήσιμων επαφών.`,
      },
      {
        title: `8. Εξατομικευμένη υποστήριξη χρηστών`,
        content: `Εκτός από τις αυτοματοποιημένες υπηρεσίες, προσφέρουμε τη δυνατότητα προσωπικών συμβουλευτικών συνεδριών με ειδικούς που γνωρίζουν καλά τη διαδικασία αναγνώρισης προσόντων στη Γερμανία. Αυτό μπορεί να περιλαμβάνει:
- Συμβούλους για την αναγνώριση τίτλων σπουδών.
- Δικηγόρους μετανάστευσης που συμβουλεύουν για άδειες διαμονής και εργασίας.
- Συμβούλους καριέρας που βοηθούν στη σύνταξη εγγράφων και βιογραφικών για συγκεκριμένες ευκαιρίες εργασίας.
Οι συμβουλευτικές υπηρεσίες μπορούν να παρέχονται ηλεκτρονικά (μέσω βιντεοκλήσης ή συνομιλίας) και, εφόσον χρειάζεται, δια ζώσης σε μεγάλες πόλεις (Βερολίνο, Μόναχο, Φρανκφούρτη κ.λπ.). Με αυτόν τον τρόπο, κάθε γιατρός λαμβάνει εξατομικευμένο σχέδιο δράσης βάσει της εμπειρίας, της ειδικότητάς του και του επιλεγμένου κρατιδίου για απασχόληση.`,
      },
      {
        title: `9. Ευέλικτο περιβάλλον χρήστη και μελλοντικά σχέδια ανάπτυξης`,
        content: `Όλες οι ενότητες που αναφέρθηκαν έχουν ενσωματωθεί σε ένα ενιαίο φιλικό περιβάλλον χρήστη που προσαρμόζεται αυτόματα στη γλώσσα του χρήστη: μετά την εγγραφή, το σύστημα ζητά από τον χρήστη να επιλέξει μία από τις 12 διαθέσιμες γλώσσες. Το μενού έχει σχεδιαστεί ώστε ακόμη και οι χρήστες με περιορισμένη εμπειρία στο διαδίκτυο να μπορούν να βρουν γρήγορα την απαιτούμενη ενότητα.
Εργαζόμαστε συνεχώς για την επέκταση της βάσης δεδομένων κλινικών περιπτώσεων, την προσθήκη νέων τεστ και διαδραστικών ασκήσεων. Τα μελλοντικά σχέδια περιλαμβάνουν την ενσωμάτωση με επίσημες ιατρικές βάσεις δεδομένων (π.χ. Arzneimittelkommission der deutschen Ärzteschaft) για την ενημέρωση πληροφοριών σχετικά με φάρμακα. Με αυτόν τον τρόπο, η πλατφόρμα θα παραμένει ενημερωμένη και πολύ χρήσιμη για κάθε γιατρό που στοχεύει να εργαστεί στη Γερμανία.`,
      },
      {
        title: `Συμπέρασμα`,
        content: `Συνοψίζοντας, η πλατφόρμα μας αποτελεί ένα ολοκληρωμένο εργαλείο που βοηθά τους γιατρούς από οποιαδήποτε χώρα:
  - Να κατανοήσουν λεπτομερώς τις απαιτήσεις κάθε κρατιδίου.
  - Να προετοιμάσουν, να μεταφράσουν και να επικυρώσουν συμβολαιογραφικά όλα τα απαραίτητα έγγραφα.
  - Να δημιουργήσουν επαγγελματικό βιογραφικό και να παράγουν έγγραφα PDF.
  - Να μάθουν ιατρική ορολογία, συντομογραφίες και φάρμακα μέσω διαδραστικών παιχνιδιών.
  - Να εξασκηθούν σε κλινικές περιπτώσεις με προσομοιώσεις υποβοηθούμενες από ΤΝ.
  - Να βρουν στοιχεία επικοινωνίας μεταφραστών, συμβολαιογράφων και κοινοτήτων στα κοινωνικά δίκτυα.
  - Να λάβουν εξατομικευμένες συμβουλευτικές υπηρεσίες από ειδικούς επαγγελματίες.

Έτσι, έχουμε δημιουργήσει μια υπηρεσία “όλα σε ένα” που καθοδηγεί τον γιατρό από το στάδιο συλλογής εγγράφων έως την επιτυχημένη απασχόληση στο επιλεγμένο κρατίδιο στη Γερμανία.`,
      }
    ]
  },

  // Romanian content
  ro: {
    mainIntro: `Platforma noastră este proiectată pentru a simplifica pe cât mai mult posibil procesul de migrare și integrare profesională a medicilor în sistemul de sănătate german. Se adresează atât specialiștilor din statele membre ale Uniunii Europene, cât și medicilor veniți din țări din afara UE. Datorită informațiilor detaliate, suportului personalizat și instrumentelor care acoperă toate landurile (Bundesländer), utilizatorii pot pregăti pas cu pas toate documentele necesare, pot înțelege cerințele autorităților sanitare locale și pot finaliza procesul de obținere a licenței medicale (Approbation) într-un format ușor de urmărit.`,
    sections: [
      {
        title: `1. Suport pentru colectarea și procesarea documentelor`,
        content: `Prima sarcină pentru orice medic care intenționează să lucreze în Germania este de a aduna toate documentele necesare pentru recunoașterea calificărilor. Platforma noastră conține liste detaliate de verificare pentru fiecare land, unde se menționează clar ce documente trebuie depuse la autoritățile sanitare locale. Pentru confort, informațiile sunt disponibile în 12 limbi, astfel încât fiecare utilizator să poată accesa instrucțiunile și formularele în limba maternă. În plus față de informațiile disponibile pentru studiu independent, oferim și consultanță privată: asistență în traducerea documentelor, certificare notarială și apostilă, dacă este necesar. Acest lucru reduce semnificativ riscul de erori și asigură că toate documentele îndeplinesc cerințele autorităților germane.`,
      },
      {
        title: `2. Alegerea landului și caracteristici regionale`,
        content: `Fiecare asociație medicală locală (Landesärztekammer) are regulile și listele de cerințe proprii. Pe platformă, am implementat un instrument ușor de utilizat pentru selectarea landului: după alegerea unei regiuni, utilizatorul vede listele de documente adaptate la normele locale, adresele birourilor de depunere a cererilor, datele de contact ale experților și recomandări privind timpii de procesare. Această abordare regională ajută la evitarea confuziei cauzate de diferențele dintre landuri și accelerează procesul de depunere.`,
      },
      {
        title: `3. Suport lingvistic și localizarea conținutului`,
        content: `Pe lângă instrucțiunile detaliate pentru depunerea documentelor, platforma este disponibilă în 12 limbi, inclusiv engleză, germană, rusă, ucraineană, poloneză, română și altele. Pentru fiecare limbă oferim:
- Liste de verificare adaptate pentru colectarea documentelor.
- Mostre traduse de cereri, scrisori de intenție și scrisori de însoțire.
- Informații despre cerințele privind cunoașterea limbii germane (niveluri B2/C1) și sfaturi pentru pregătirea examenelor.
Datorită acestei abordări, medicii pot lucra imediat cu materialele în limba lor maternă, fără a pierde timp căutând traduceri.`,
      },
      {
        title: `4. Generare automată de CV și documente PDF`,
        content: `Pentru a facilita comunicarea cu recrutori, angajatori și consilii medicale, platforma are o funcție de creare a unui CV profesional în stil german (Lebenslauf). Utilizatorul introduce datele sale în engleză, ucraineană sau într-una dintre cele 12 limbi suportate, iar sistemul generează documentul în ucraineană și/sau germană. CV-ul final poate fi exportat în format PDF, ceea ce este convenabil pentru imprimare sau trimiterea prin e-mail.
În plus, toate celelalte formulare cheie (formulare de cerere, scrisori de intenție, declarații) pot fi generate și ele ca PDF-uri completabile. Această abordare evită problemele legate de formatare și asigură un stil coerent pentru toate documentele.`,
      },
      {
        title: `5. Secțiune de învățare: definiții, abrevieri, medicamente și jocuri interactive`,
        content: `Pentru a se pregăti pentru examenele privind standardele medicale germane, medicii trebuie să stăpânească terminologia medicală locală, abrevierile, denumirile medicamentelor și caracteristicile utilizării acestora. În secțiunea „Învățare” am adunat:
- Glosare cu explicații adaptate fiecărui land (o parte din terminologie poate varia în funcție de regiune).
- Liste de medicamente cu denumiri comerciale, denumiri internaționale neprotejate (INN), forme de eliberare și indicații principale.
- Abrevieri folosite frecvent în documentația medicală germană, cu exemple de utilizare.
Pentru a face învățarea interesantă și eficientă, am integrat jocuri interactive: fișe de învățare, quiz-uri de potrivire a termenilor și exerciții rapide pentru memorarea abrevierilor. Această abordare gamificată ajută la reținerea informațiilor și la adaptarea la standardele clinice germane.`,
      },
      {
        title: `6. Simulare de cazuri clinice (Fälle) cu asistență AI`,
        content: `Unul dintre criteriile cheie pentru obținerea licenței de practică este demonstrția gândirii clinice și a abilităților de gestionare a pacienților conform protocoalelor germane. În secțiunea „Cazuri Clinice” am adunat scenarii reale (Fälle) din diverse surse: atât din baze de date medicale deschise, cât și din practica spitalelor din fiecare land. Fiecare caz este etichetat în funcție de specificul regional, astfel încât un medic să poată alege un scenariu reprezentativ pentru landul țintă.
Pe lângă informațiile statice (istoricul bolii, anamneza etc.), am implementat două funcții interactive:
1. Simulare cu AI: Utilizatorul poate iniția o „conversație” cu un AI care acționează în rolul pacientului sau al unui coleg (de ex., un mentor german). Medicul primește întrebări, comentarii sau date suplimentare și exersează în mod interactiv abilitățile clinice. AI-ul poate, de asemenea, să evalueze răspunsurile și să ofere recomandări conform standardelor locale.
2. Revizuire scrisă a cazului: Pentru examenul Approbation, de multe ori candidaților li se cere să redacteze o scrisoare de trimitere sau un rezumat clinic. Utilizatorul poate încărca schița și sistemul (folosind AI) va indica dacă textul îndeplinește cerințele de format, gramatică și criterii clinice acceptate în Germania.`,
      },
      {
        title: `7. Resurse suplimentare: traducători, notari și rețele sociale`,
        content: `Pentru a economisi timp medicilor care caută servicii locale în fiecare land, am compilat:
- O listă de traducători medicali acreditați și agenții de traduceri, cu date de contact și evaluări.
- Date de contact ale notarilor specializați în autentificarea documentelor medicale.
- Linkuri către grupuri relevante pe rețelele sociale (Facebook, Telegram, WhatsApp etc.) unde comunică medicii migranți, organizate pe regiuni (ex., „Facebook: Ärzte in Berlin” sau „Telegram: Pflegekräfte Thüringen”).
Toate aceste resurse sunt sortate pe regiuni: odată ce utilizatorul selectează un land, apar doar opțiunile disponibile în acea zonă. Acest lucru ajută la găsirea rapidă a persoanelor care au parcurs deja un proces similar, schimbul de experiențe și obținerea de contacte valoroase.`,
      },
      {
        title: `8. Suport personalizat pentru utilizatori`,
        content: `Pe lângă serviciile automatizate, oferim posibilitatea unor consultații personalizate cu specialiști care cunosc bine procesul de recunoaștere a calificărilor în Germania. Aceasta poate include:
- Consilieri pentru nostrificarea diplomelor.
- Avocați de imigrare care oferă consultanță privind permisul de ședere și de muncă.
- Consilieri în carieră care ajută la redactarea documentelor și a CV-urilor pentru anumite oferte de angajare.
Consultațiile pot avea loc online (prin apel video sau chat) și, dacă este necesar, în persoană în marile orașe (Berlin, München, Frankfurt etc.). Astfel, fiecare medic primește un plan de acțiune personalizat, ținând cont de experiența, specializarea și landul dorit pentru angajare.`,
      },
      {
        title: `9. Interfață intuitivă și planuri de dezvoltare viitoare`,
        content: `Toate modulele menționate sunt integrate într-o interfață unică, prietenoasă, care se adaptează automat la limba utilizatorului: după înregistrare, sistemul solicită alegerea uneia dintre cele 12 limbi disponibile. Meniul este conceput astfel încât chiar și utilizatorii cu experiență redusă în utilizarea internetului să poată găsi rapid secțiunea necesară.
Lucrăm continuu la extinderea bazei de date cu cazuri clinice, adăugarea de noi teste și exerciții interactive. Planurile de viitor includ integrarea cu baze de date medicale oficiale (de ex., Arzneimittelkommission der deutschen Ärzteschaft) pentru actualizarea informațiilor despre medicamente. Astfel, platforma va rămâne actuală și foarte utilă pentru orice medic care își propune să lucreze în Germania.`,
      },
      {
        title: `Concluzie`,
        content: `În concluzie, platforma noastră este un instrument cuprinzător care ajută medicii din orice țară să:
  - Înțeleagă în detaliu cerințele fiecărui land.
  - Pregătească, traducă și autentifice notarial toate documentele necesare.
  - Creeze un CV profesional și genereze documente PDF.
  - Învețe terminologia medicală, abrevierile și medicamentele prin jocuri interactive.
  - Exerseze cazuri clinice cu simulări asistate de AI.
  - Găsească date de contact ale traducătorilor, notarilor și comunităților de pe rețelele sociale.
  - Primească consultații personalizate de la experți specializați.

Astfel, am creat un serviciu „all-in-one” care ghidează medicul de la etapa de colectare a documentelor până la angajarea cu succes în landul ales din Germania.`,
      }
    ]
  }
  };
  export default IntroductionContent;