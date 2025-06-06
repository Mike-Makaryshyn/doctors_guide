// src/constants/translation/documentsSecond.js

import { DOMAIN_NAME } from "./global";

const defaultPropsSecond = {
  is_exist: "not_check",
  sent: "not_check",
};

// Функція для створення посилань для EU та NonEU
const createLinks = (linkText, linkUrl) => ({
  EU: [
    {
      landName: "General",
      text: linkText,
      link: linkUrl,
    },
  ],
  "Non-EU": [
    {
      landName: "General",
      text: linkText,
      link: linkUrl,
    },
  ],
});

export const documentsSecond = [
  {
    id: 1201,
    requiredFor: ["Both"],
    ...defaultPropsSecond,
    noLandCheckNeeded: true,
    name: {
      uk: "Доказ про достатні знання німецької мови. Мінімум сертифікат Б2",
      en: "Evidence of sufficient knowledge of the German language. Minimum B2 certificate",
      fr: "Preuve de connaissances suffisantes en allemand. Certificat minimum B2",
      es: "Prueba de conocimientos suficientes del idioma alemán. Certificado mínimo B2",
      ar: "دليل على معرفة كافية باللغة الألمانية. شهادة B2 الحد الأدنى",
      tr: "Almanca dilinde yeterli bilgiyi kanıtlama. Minimum B2 sertifikası",
      pl: "Dowód wystarczającej znajomości języka niemieckiego. Minimalny certyfikat B2",
      ru: "Документ об обладании достаточными знаниями немецкого языка. Минимальный сертификат B2",
      de: "Nachweis ausreichender Kenntnisse der deutschen Sprache. Mindestens B2-Zertifikat",
      el: "Απόδειξη επαρκούς γνώσης της γερμανικής γλώσσας. Ελάχιστο επίπεδο B2",
      ro: "Dovada cunoașterii suficiente a limbii germane. Certificat minim B2",
    },
    letterName: "Sprachkenntnisnachweis B2", // German only
    links: createLinks(
      {
        uk: "Вивчення мови",
        en: "Language Learning",
        fr: "Apprentissage des langues",
        es: "Aprendizaje de idiomas",
        ar: "تعلم اللغات",
        tr: "Dil Öğrenme",
        pl: "Nauka języków",
        ru: "Изучение языков",
        de: "Sprachenlernen",
        el: "Μάθηση γλωσσών",
        ro: "Învățarea limbilor",
      },
      `${DOMAIN_NAME}/language-study`
    ),
  },
  {
    id: 1312,
    requiredFor: ["Both"], // or ["EU"]
    ...defaultPropsSecond,
    noLandCheckNeeded: true,
    name: {
      en: "Current, tabular, personally signed CV (showing the studies and career path up to the date of application without any gaps)",
      fr: "CV actuel, tabulaire, signé personnellement (indiquant les études et le parcours professionnel jusqu'à la date de la demande sans lacunes)",
      es: "CV actual, tabular, firmado personalmente (mostrando los estudios y la trayectoria profesional hasta la fecha de la solicitud sin lagunas)",
      ar: "السيرة الذاتية الحالية، منظمة في جدول وموقعة شخصيًا (تُظهر الدراسة والمسار الوظيفي حتى تاريخ تقديم الطلب دون أي فجوات)",
      tr: "Güncel, tablo halinde, kişisel olarak imzalanmış özgeçmiş (başvuru tarihine kadar olan eğitim ve kariyer yolunu kesintisiz olarak gösteren)",
      pl: "Aktualny, tabelaryczny, osobiście podpisany życiorys (przedstawiający studia i ścieżkę kariery do daty złożenia wniosku bez luk)",
      uk: "Актуальне, табличне, особисто підписане резюме (яке показує навчання та кар'єрний шлях до дати подання заявки без прогалин)",
      ru: "Актуальное, табличное, лично подписанное резюме (отражающее учебу и карьерный путь до даты подачи заявки без пробелов)",
      de: "Aktueller, tabellarischer, persönlich unterschriebener Lebenslauf (darin sind Studium und der berufliche Werdegang bis zum Datum der Antragstellung lückenlos darzustellen)",
      el: "Πρόσφατο, σε μορφή πίνακα, προσωπικά υπογεγραμμένο βιογραφικό σημείωμα (που δείχνει τις σπουδές και την επαγγελματική πορεία έως την ημερομηνία της αίτησης, χωρίς κενά)",
      ro: "CV actual, în formă tabelară, semnat personal (prezentând studiile și parcursul profesional până la data depunerii cererii, fără întreruperi)",
    },
    letterName: "Tabellarischer Lebenslauf", // German only
    links: createLinks(
      {
        en: "Create a CV",
        fr: "Créer un CV",
        es: "Crear un CV",
        ar: "إنشاء سيرة ذاتية",
        tr: "CV Oluştur",
        pl: "Utwórz CV",
        uk: "Створити резюме",
        ru: "Создать резюме",
        de: "Einen Lebenslauf erstellen",
        el: "Δημιουργία βιογραφικού σημειώματος",
        ro: "Creați un CV",
      },
      `${DOMAIN_NAME}/resume`
    ),
  },
  // Додайте інші документи тут, слідуючи цій структурі
  //ANTRAG
  {
    ...defaultPropsSecond,
    id: 1202,
    requiredFor: ["Both"],
    name: {
      en: "Written, personally signed application in German for the issuance of the license and, if applicable, a professional permit",
      fr: "Demande écrite et signée personnellement en allemand pour la délivrance de la licence et, le cas échéant, d'une autorisation professionnelle",
      es: "Solicitud escrita y firmada personalmente en alemán para la emisión de la licencia y, si corresponde, un permiso profesional",
      ar: "طلب مكتوب وموقع شخصيًا باللغة الألمانية للحصول على الترخيص وإذا لزم الأمر، تصريح مهني",
      tr: "Lisans verilmesi ve gerekiyorsa mesleki izin için Almanca yazılı ve kişisel olarak imzalanmış başvuru",
      pl: "Pisemny, osobiście podpisany wniosek w języku niemieckim o wydanie licencji i ewentualnie pozwolenia zawodowego",
      uk: "Письмова, особисто підписана заява німецькою мовою на видачу ліцензії та, якщо необхідно, професійного дозволу",
      ru: "Письменное, лично подписанное заявление на немецком языке на выдачу лицензии и, при необходимости, профессионального разрешения",
      de: "Schriftlicher, persönlich unterschriebener Antrag in deutscher Sprache auf Erteilung der Approbation und ggf. einer Berufserlaubnis",
      el: "Γραπτή, προσωπικά υπογεγραμμένη αίτηση στα γερμανικά για την έκδοση της άδειας και, εάν ισχύει, για επαγγελματική άδεια",
      ro: "Cerere scrisă, semnată personal în limba germană pentru eliberarea licenței și, dacă este cazul, a unui permis profesional",
    },
    letterName: "Antrag auf Erteilung der Approbation",
    links: {
      "Non-EU": [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203119/Aerztin_Arzt_Antrag_Approbation_Berufserlaubnis.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Nordrhein-Westfalen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-5_Drittland_Antrag_Appro_BE_Aufstellung_Form1.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Mecklenburg Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1664377",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-03/antrag_medizin_approbation_und_berufserlaubnis_drittstaaten_stand_16.02.23.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Antrag_auf_Erteilung_der_Approbation-Berufserlaubnis.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Berufserlaubnis_Antrag_Ausland.pdf",
          text: {
            en: "Before submitting the application, you need to consult the following institution, Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            fr: "Avant de soumettre la demande, vous devez consulter l'institution suivante, Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            es: "Antes de presentar la solicitud, debe consultar la siguiente institución, Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            ar: "قبل تقديم الطلب، تحتاج إلى استشارة المؤسسة التالية، Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            tr: "Başvuruyu göndermeden önce, Zentrale Servicestelle Berufsanerkennung (ZSBA) kurumuna danışmanız gerekir: recognition@arbeitsagentur.de",
            pl: "Przed złożeniem wniosku należy skonsultować się z następującą instytucją, Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            uk: "Перед подачею заяви потрібно проконсультуватися у наступній структурі: Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            ru: "Перед подачей заявления необходимо проконсультироваться в следующем учреждении: Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            de: "Vor der Einreichung des Antrags müssen Sie die folgende Institution konsultieren, Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            el: "Πριν υποβάλετε την αίτηση, θα πρέπει να συμβουλευτείτε το ακόλουθο ίδρυμα: Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
            ro: "Înainte de a depune cererea, trebuie să consultați următoarea instituție: Zentrale Servicestelle Berufsanerkennung (ZSBA) recognition@arbeitsagentur.de",
          },
        },
        {
          landName: "Sachsen",
          link: "https://www.lds.sachsen.de/ref/?ID=10904&art_param=485&abteilung_id=4&referat_id=16",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/dct/eject/htmlprint/C5E1F70311B776FAB55ECDF320F5A3FC.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-227-TH-TLVWA",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Schleswig-Holstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Anerkennung/02_Antrag_Approbation_Berufsurkunde_EU_EWR.pdf?__blob=publicationFile&v=3",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Saarland",
          link: "https://www.saarland.de/SharedDocs/Downloads/DE/landesamt-fuer-soziales/lpa/Antrag_Erteilung_Approbation.pdf?__blob=publicationFile&v=6",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/resource/blob/2773700/f308f6887c612e299d0b933fdf23ca39/data/merkblatt-beantragung-approbation-eu-data.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online",
          },
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Antrag%20Erteilung%20einer%20Approbation.pdf",
          text: {
            en: "Attachment in the document",
            fr: "Pièce jointe dans le document",
            es: "Adjunto en el documento",
            ar: "المرفق في الوثيقة",
            tr: "Belgede ek",
            pl: "Załącznik w dokumencie",
            uk: "Додаток в документі",
            ru: "Приложение в документе",
            de: "Anlage im Dokument",
            el: "Επισύναψη στο έγγραφο",
            ro: "Anexă în document",
          },
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/muenster/arzt/index.html",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud here",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
      ],
      EU: [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "The application is submitted online.",
            fr: "La demande se fait en ligne.",
            es: "La solicitud se realiza en línea.",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır.",
            pl: "Wniosek składany jest online.",
            uk: "Проходить онлайн.",
            ru: "Подача заявления осуществляется онлайн.",
            de: "Der Antrag wird online eingereicht.",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά.",
            ro: "Cererea se depune online.",
          },
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203119/Aerztin_Arzt_Antrag_Approbation_Berufserlaubnis.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Nordrhein-Westfalen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/muenster/arzt/index.html",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete the solicitud here",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici",
          },
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-2_EU_Antrag_Appro_BE_Aufstellung_Form1.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-12/merkblatt_und_approbationsantrag_eu_medizin.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete the solicitud here.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ.",
            ro: "Completați cererea aici.",
          },
        },
      ],
    },
  },
  //раніше не подавали заяву
  {
    id: 1203,
    requiredFor: ["Both"], // ή ["EU"]
    ...defaultPropsSecond,
    name: {
      en: "Written, informal, personally signed declaration that you have not previously submitted an application for licensure in Germany",
      fr: "Déclaration écrite, informelle et signée personnellement attestant que vous n'avez pas précédemment soumis de demande de licence en Allemagne",
      es: "Declaración escrita, informal y firmada personalmente de que no ha presentado previamente una solicitud de licencia en Alemania",
      ar: "إقرار مكتوب وغير رسمي وموقع شخصيًا بأنك لم تقدم طلبًا للحصول على الترخيص في ألمانيا سابقًا",
      tr: "Almanya'da daha önce lisans başvurusu yapmadığınıza dair yazılı, resmi olmayan ve kişisel olarak imzalanmış beyan",
      pl: "Pisemne, nieformalne i osobiście podpisane oświadczenie, że wcześniej nie złożyłeś wniosku o wydanie licencji w Niemczech",
      uk: "Письмова, неформальна, особисто підписана декларація про те, що ви раніше не подавали заяву на отримання ліцензії в Німеччині",
      ru: "Письменное, неофициальное, лично подписанное заявление о том, что вы ранее не подавали заявление на получение лицензии в Германии",
      de: "Schriftliche, formlose, persönlich unterschriebene Erklärung, dass Sie in der Vergangenheit in Deutschland noch keinen Antrag auf Erteilung der Approbation gestellt haben",
      el: "Γραπτή, μη επίσημη, προσωπικά υπογεγραμμένη δήλωση ότι δεν έχετε υποβάλει προηγουμένως αίτηση για έκδοση άδειας στη Γερμανία",
      ro: "Declarație scrisă, informală, semnată personal, că nu ați depus anterior o cerere pentru eliberarea licenței în Germania"
    },
    letterName:
      "Schriftliche, formlose, persönlich unterschriebene Erklärung, dass ich in der Vergangenheit in Deutschland noch keinen Antrag auf Erteilung der Approbation gestellt habe",
    links: {
      "Non-EU": [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203119/Aerztin_Arzt_Antrag_Approbation_Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-6_Drittland_Vordruck_Versicherungen_zum_Antrag.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-03/antrag_medizin_approbation_und_berufserlaubnis_drittstaaten_stand_16.02.23.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Antrag_auf_Erteilung_der_Approbation-Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Approbation_EU_Antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/dct/eject/htmlprint/C5E1F70311B776FAB55ECDF320F5A3FC.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-227-TH-TLVWA",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Anerkennung/01_Antrag_Approbation_Berufsurkunde_Drittstaat.pdf?__blob=publicationFile&v=2",
          text: {
            en: "Does not exist",
            fr: "N'existe pas",
            es: "No existe",
            ar: "غير موجود",
            tr: "Mevcut değil",
            pl: "Nie istnieje",
            uk: "Не існує",
            ru: "Не существует",
            de: "Existiert nicht",
            el: "Δεν υπάρχει",
            ro: "Nu există"
          }
        },
        {
          landName: "Saarland",
          link: "https://www.saarland.de/SharedDocs/Downloads/DE/landesamt-fuer-soziales/lpa/Antrag_Erteilung_Approbation.pdf?__blob=publicationFile&v=6",
          text: {
            en: "Does not exist",
            fr: "N'existe pas",
            es: "No existe",
            ar: "غير موجود",
            tr: "Mevcut değil",
            pl: "Nie istnieje",
            uk: "Не існує",
            ru: "Не существует",
            de: "Existiert nicht",
            el: "Δεν υπάρχει",
            ro: "Nu există"
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/drittstaat/ds_akad_antrag_app_be_app_zap_pap.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773700/f308f6887c612e299d0b933fdf23ca39/data/merkblatt-beantragung-approbation-eu.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Antrag%20Erteilung%20einer%20Approbation.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        }
      ],
      EU: [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "The application is submitted online.",
            fr: "La demande se fait en ligne.",
            es: "La solicitud se realiza en línea.",
            ar: "يتم تقديم الطلب عبر الإنترنت.",
            tr: "Başvuru çevrimiçi olarak yapılır.",
            pl: "Wniosek składany jest online.",
            uk: "Проходить онлайн.",
            ru: "Подача заявления осуществляется онлайн.",
            de: "Der Antrag wird online eingereicht.",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά.",
            ro: "Cererea se depune online."
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203119/Aerztin_Arzt_Antrag_Approbation_Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link hier.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Nordrhein-Westfalen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію.",
            ru: "Соответствующий формуляр включен в заявку на лицензию.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια.",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-3_EU_Vordruck_Versicherungen_zum_Antrag.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-03/antrag_medizin_approbation_und_berufserlaubnis_drittstaaten_stand_16.02.23.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Antrag_auf_Erteilung_der_Approbation-Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Approbation_EU_Antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/dct/eject/htmlprint/C5E1F70311B776FAB55ECDF320F5A3FC.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-227-TH-TLVWA",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Anerkennung/02_Antrag_Approbation_Berufsurkunde_EU_EWR.pdf?__blob=publicationFile&v=3",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licencia. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Does not exist.",
            fr: "N'existe pas.",
            es: "No existe.",
            ar: "غير موجود.",
            tr: "Mevcut değil.",
            pl: "Nie istnieje.",
            uk: "Не існує.",
            ru: "Не существует.",
            de: "Existiert nicht.",
            el: "Δεν υπάρχει.",
            ro: "Nu există."
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773700/f308f6887c612e299d0b933fdf23ca39/data/merkblatt-beantragung-approbation-eu.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Antrag%20Erteilung%20einer%20Approbation.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        }
      ],
      EU: [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "The application is submitted online.",
            fr: "La demande se fait en ligne.",
            es: "La solicitud se realiza en línea.",
            ar: "يتم تقديم الطلب عبر الإنترنت.",
            tr: "Başvuru çevrimiçi olarak yapılır.",
            pl: "Wniosek składany jest online.",
            uk: "Проходить онлайн.",
            ru: "Подача заявления осуществляется онлайн.",
            de: "Der Antrag wird online eingereicht.",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά.",
            ro: "Cererea se depune online."
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203119/Aerztin_Arzt_Antrag_Approbation_Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Nordrhein-Westfalen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence.",
            es: "El formulario correspondiente está incluido en la solicitud de licence.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію.",
            ru: "Соответствующий формуляр включен в заявку на лицензию.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια.",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-6_Drittland_Vordruck_Versicherungen_zum_Antrag.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici."
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-03/antrag_medizin_approbation_und_berufserlaubnis_drittstaaten_stand_16.02.23.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Antrag_auf_Erteilung_der_Approbation-Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/dct/eject/htmlprint/C5E1F70311B776FAB55ECDF320F5A3FC.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-227-TH-TLVWA",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Anerkennung/02_Antrag_Approbation_Berufsurkunde_EU_EWR.pdf?__blob=publicationFile&v=3",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Does not exist.",
            fr: "N'existe pas.",
            es: "No existe.",
            ar: "غير موجود.",
            tr: "Mevcut değil.",
            pl: "Nie istnieje.",
            uk: "Не існує.",
            ru: "Не существует.",
            de: "Existiert nicht.",
            el: "Δεν υπάρχει.",
            ro: "Nu există."
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773700/f308f6887c612e299d0b933fdf23ca39/data/merkblatt-beantragung-approbation-eu.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Antrag%20Erteilung%20einer%20Approbation.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        }
      ]
    },
  },

  //Strafverfahren
  {
    id: 1204,
    requiredFor: ["Both"], // або ["EU"
    ...defaultPropsSecond,
    name: {
      en: " Written, informal declaration with the following wording: 'I hereby declare that I have no criminal record and that neither a judicial criminal proceeding nor a prosecutorial investigation is pending against me",
      fr: " Déclaration écrite et informelle avec le texte suivant : « Je déclare par la présente que je n'ai pas de casier judiciaire et qu'aucune procédure pénale judiciaire ni aucune enquête du procureur n'est en cours contre moi ",
      es: " Declaración escrita e informal con el siguiente texto: 'Por la presente declaro que no tengo antecedentes penales y que no hay ningún procedimiento penal judicial ni investigación fiscal pendiente en mi contra",
      ar: "إقرار مكتوب وغير رسمي وموقع شخصيًا بأنك لم تقدم طلبًا للحصول على الترخيص في ألمانيا سابقًا",
      tr: "Aşağıdaki ifadeyi içeren yazılı, resmi olmayan beyan: 'Burada, sabıka kaydım olmadığını ve aleyhimde devam eden herhangi bir yargı ceza davası veya savcılık soruşturması bulunmadığını beyan ederim",
      pl: " Pisemne, nieformalne oświadczenie o następującej treści: 'Niniejszym oświadczam, że nie jestem karany i że nie toczy się przeciwko mnie żadne sądowe postępowanie karne ani prokuratorskie postępowanie przygotowawcze",
      uk: " Письмова, неформальна заява з наступним текстом: 'Цим заявляю, що у мене немає судимості і що проти мене не ведеться жодне судове кримінальне провадження чи прокурорське розслідування",
      ru: " Письменное, неофициальное заявление со следующим текстом: 'Настоящим заявляю, что у меня нет судимости и что против меня не ведется ни одного судебного уголовного дела или прокурорского расследования",
      de: "Schriftliche, formlose Erklärung mit folgendem Wortlaut: „Hiermit erkläre ich, dass ich nicht vorbestraft bin und dass weder ein gerichtliches Strafverfahren noch ein staatsanwaltschaftliches Ermittlungsverfahren gegen mich anhängig ist",
      el: "Γραπτή, ανεπίσημη δήλωση με το εξής κείμενο: «Δηλώνω με το παρόν ότι δεν έχω ποινικό μητρώο και ότι ούτε διεξάγεται καμία δικαστική ποινική διαδικασία ούτε βρίσκεται σε εξέλιξη καμία έρευνα από τον εισαγγελέα κατά μου",
      ro: "Declarație scrisă, informală, cu următorul text: 'Prin prezenta declar că nu am antecedente penale și că niciun proces penal judiciar sau investigație procuroruală nu este în curs împotriva mea"
    },
    letterName:
      "Schriftliche, formlose Erklärung mit folgendem Wortlaut: „Hiermit erkläre ich, dass ich nicht vorbestraft bin und dass weder ein gerichtliches Strafverfahren noch ein staatsanwaltschaftliches Ermittlungsverfahren gegen mich anhängig ist",
    links: {
      "Non-EU": [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203484/Aerztin_Arzt_Erklaerung_Straffreiheit.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Nordrhein-Westfalen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence.",
            es: "El formulario correspondiente está incluido en la solicitud de licence.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию.",
            ru: "Соответствующий формуляр включен в заявку на лицензию.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια.",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-6_Drittland_Vordruck_Versicherungen_zum_Antrag.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-03/antrag_medizin_approbation_und_berufserlaubnis_drittstaaten_stand_16.02.23.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Straffreiheitserklaerung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Approbation_EU_Antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/dct/eject/htmlprint/C5E1F70311B776FAB55ECDF320F5A3FC.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-227-TH-TLVWA",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Allgemein/01_Erklaerung_zur_Straffreiheit.pdf?__blob=publicationFile&v=1",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773710/841b6159e9ffdae88157737739103790/data/merkblatt-beantragung-approbation-drittst-.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Straf-%20und%20berufsgerichtliche%20Erklärung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        }
      ],
      EU: [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi/regierungen/regierungen/rob/approbationen/index?caller=8995476647409",
          text: {
            en: "The application is submitted online.",
            fr: "La demande se fait en ligne.",
            es: "La solicitud se realiza en línea.",
            ar: "يتم تقديم الطلب عبر الإنترنت.",
            tr: "Başvuru çevrimiçi olarak yapılır.",
            pl: "Wniosek składany jest online.",
            uk: "Проходить онлайн.",
            ru: "Подача заявления осуществляется онлайн.",
            de: "Der Antrag wird online eingereicht.",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά.",
            ro: "Cererea se depune online."
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203484/Aerztin_Arzt_Erklaerung_Straffreiheit.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-6_Drittland_Vordruck_Versicherungen_zum_Antrag.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-03/antrag_medizin_approbation_und_berufserlaubnis_drittstaaten_stand_16.02.23.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Antrag_auf_Erteilung_der_Approbation-Berufserlaubnis.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/dct/eject/htmlprint/C5E1F70311B776FAB55ECDF320F5A3FC.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-227-TH-TLVWA",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici."
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Allgemein/01_Erklaerung_zur_Straffreiheit.pdf?__blob=publicationFile&v=1",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here."
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773710/841b6159e9ffdae88157737739103790/data/merkblatt-beantragung-approbation-drittst-.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here."
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Straf-%20und%20berufsgerichtliche%20Erklärung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        }
      ]
    },
  },
  //ärztliche Bescheinigung
  {
    id: 1205,
    requiredFor: ["Both"], // або ["EU"
    ...defaultPropsSecond,
    name: {
      en: "Current medical certificate confirming your health suitability to practice your profession (the certificate must have been issued no more than three months before the application date)",
      fr: "Certificat médical actuel confirmant votre aptitude physique à exercer votre profession (le certificat doit avoir été délivré au plus tard trois mois avant la date de la demande)",
      es: "Certificado médico actual que confirme su idoneidad de salud para ejercer su profesión (el certificado debe haber sido emitido no más de tres meses antes de la fecha de la solicitud)",
      ar: "شهادة طبية حديثة تؤكد لياقتك الصحية لممارسة مهنتك (يجب أن تكون الشهادة قد صدرت في غضون الأشهر الثلاثة التي تسبق تاريخ تقديم الطلب)",
      tr: "Mesleğinizi icra etmeye uygun olduğunuzu teyit eden güncel sağlık raporu (rapor, başvuru tarihinden en fazla üç ay önce düzenlenmiş olmalıdır)",
      pl: "Aktualne zaświadczenie lekarskie potwierdzające Twoją zdolność zdrowotną do wykonywania zawodu (zaświadczenie nie może być wystawione wcześniej niż trzy miesiące przed złożeniem wniosku)",
      uk: "Актуальна медична довідка, що підтверджує вашу придатність до здійснення професійної діяльності (довідка повинна бути видана не пізніше ніж за три місяці до дати подання заяви)",
      ru: "Актуальная медицинская справка, подтверждающая вашу пригодность к выполнению профессиональных обязанностей (справка должна быть выдана не ранее чем за три месяца до подачи заявления)",
      de: "Aktuelle ärztliche Bescheinigung über Ihre gesundheitliche Eignung zur Ausübung Ihres Berufs (die Bescheinigung darf nicht früher als drei Monate vor Antragstellung ausgestellt worden sein)",
      el: "Τρέχουσα ιατρική βεβαίωση που επιβεβαιώνει την υγειονομική σας καταλληλότητα για την άσκηση του επαγγέλματός σας (η βεβαίωση δεν πρέπει να έχει εκδοθεί περισσότερο από τρεις μήνες πριν από την ημερομηνία υποβολής της αίτησης)",
      ro: "Certificatul medical actual care confirmă aptitudinea dumneavoastră de sănătate pentru a practica profesia (certificatul nu trebuie să fi fost emis cu mai mult de trei luni înainte de data depunerii cererii)"
    },
    letterName:
      "Aktuelle ärztliche Bescheinigung über Ihre gesundheitliche Eignung zur Ausübung Ihres Berufs (die Bescheinigung darf nicht früher als drei Monate vor Antragstellung ausgestellt worden sein)",
    links: {
      "Non-EU": [
        {
          landName: "Bayern",
          link: "https://formularserver.bayern.de/intelliform/forms/stmi/regierungen/rob/rob-zz/55.3/rob_55.3-020-zz/index?caller=8995476647409",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/200366/Aerztin_Arzt_aerztliche_Bescheinigung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU_Anl2.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU_Anl2.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU_Anl2.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_nonEU_Anl2.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Nordrhein-Westfalen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацію. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-EU-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-8_Ärztliche_Bescheinigung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-12/merkblatt_und_approbationsantrag_eu_medizin.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Erklaerung_-_aerztliche_Geeignetheit.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Approbation_EU_Antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/cfs/eject/pdf/2382.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-002-TH-TLVWA",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Allgemein/00_Aerztliche_Bescheinigung.pdf?__blob=publicationFile&v=1",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773710/841b6159e9ffdae88157737739103790/data/merkblatt-beantragung-approbation-eu.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Straf-%20und%20berufsgerichtliche%20Erklärung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        }
      ],
      EU: [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi+regierungen/rob/rob-zz/55.3/rob_55.3-020-zz/index?caller=8995476647409",
          text: {
            en: "The application is submitted online.",
            fr: "La demande se fait en ligne.",
            es: "La solicitud se realiza en línea.",
            ar: "يتم تقديم الطلب عبر الإنترنت.",
            tr: "Başvuru çevrimiçi olarak yapılır.",
            pl: "Wniosek składany jest online.",
            uk: "Проходить онлайн.",
            ru: "Подача заявления осуществляется онлайн.",
            de: "Der Antrag wird online eingereicht.",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά.",
            ro: "Cererea se depune online."
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203484/Aerztin_Arzt_Erklaerung_Straffreiheit.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-8_Ärztliche_Bescheinigung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-12/merkblatt_und_approbationsantrag_eu_medizin.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Erklaerung_-_aerztliche_Geeignetheit.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Approbation_EU_Antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/cfs/eject/pdf/2382.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-002-TH-TLVWA",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Allgemein/00_Aerztliche_Bescheinigung.pdf?__blob=publicationFile&v=1",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773710/841b6159e9ffdae88157737739103790/data/merkblatt-beantragung-approbation-eu.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Straf-%20und%20berufsgerichtliche%20Erklärung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        }
      ],
      EU: [
        {
          landName: "Bayern",
          link: "https://formularserver-bp.bayern.de/intelliform/forms/stmi+regierungen/rob/rob-zz/55.3/rob_55.3-020-zz/index?caller=8995476647409",
          text: {
            en: "The application is submitted online.",
            fr: "La demande se fait en ligne.",
            es: "La solicitud se realiza en línea.",
            ar: "يتم تقديم الطلب عبر الإنترنت.",
            tr: "Başvuru çevrimiçi olarak yapılır.",
            pl: "Wniosek składany jest online.",
            uk: "Проходить онлайн.",
            ru: "Подача заявления осуществляется онлайн.",
            de: "Der Antrag wird online eingereicht.",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά.",
            ro: "Cererea se depune online."
          }
        },
        {
          landName: "Niedersachsen",
          link: "https://www.nizza.niedersachsen.de/download/203484/Aerztin_Arzt_Erklaerung_Straffreiheit.pdf",
          text: {
            en: "Fill out the application here.",
            fr: "Remplissez la demande ici.",
            es: "Complete la solicitud aquí.",
            ar: "املأ الطلب هنا.",
            tr: "Başvuruyu burada doldurun.",
            pl: "Wypełnij wniosek tutaj.",
            uk: "Заповнити заяву тут.",
            ru: "Заполните заявление здесь.",
            de: "Füllen Sie den Antrag hier aus.",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Baden-Württemberg-Freiburg",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Baden-Württemberg-Karlsruhe",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Baden-Württemberg-Stuttgart",
          link: "https://rp.baden-wuerttemberg.de/fileadmin/RP-Internet/Themenportal/Schule_und_Bildung/Berufliche_Ausbildung/Aerztin_Arzt_Ausbildung_Approbation/_DocumentLibraries/Documents/LPA_Arzt_Appr_Antrag_EU.pdf",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here.",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Baden-Württemberg-Reutlingen",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Westfalen-Lippe",
          link: "https://www.bezreg-muenster.de/de/gesundheit_und_soziales/zag/approbation_nrw/_ablage/dokumente/BRMS-DS-Abschluss.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Brandenburg",
          link: "https://lavg.brandenburg.de/sixcms/media.php/9/G1-A-8_Ärztliche_Bescheinigung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Mecklenburg-Vorpommern",
          link: "https://www.lagus.mv-regierung.de/serviceassistent/download?id=1672074",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hessen",
          link: "https://hlfgp.hessen.de/sites/hlfgp.hessen.de/files/2023-12/merkblatt_und_approbationsantrag_eu_medizin.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen-Anhalt",
          link: "https://lvwa.sachsen-anhalt.de/fileadmin/Bibliothek/Politik_und_Verwaltung/LVWA/LVwA/Dokumente/5_famgesjugvers/507/ausland/Erklaerung_-_aerztliche_Geeignetheit.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Rheinland-Pfalz",
          link: "https://lsjv.rlp.de/fileadmin/lsjv/Themen/Gesundheit/Gesundheitsberufe/Approbationen/Medizin/Arzt_Approbation_EU_Antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Sachsen",
          link: "https://fs.egov.sachsen.de/formserv/findform?shortname=sms_ld_apparzt_3&formtecid=2&areashortname=142",
          text: {
            en: "The relevant form is included in the application for licensure.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluido en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Знаходиться в документі.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere."
          }
        },
        {
          landName: "Thüringen",
          link: "https://thformular.thueringen.de/thueform/cfs/eject/pdf/2382.pdf?MANDANTID=26&FORMUID=GESUNDAUSB-002-TH-TLVWA",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "SchleswigHolstein",
          link: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/LASD/Aufgaben/Gesundheitsberufe/AkademischeHeilberufe/Arzt/Download/Allgemein/00_Aerztliche_Bescheinigung.pdf?__blob=publicationFile&v=1",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        },
        {
          landName: "Saarland",
          link: null, // Since "Does not exist"
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus"
          }
        },
        {
          landName: "Berlin",
          link: "https://www.berlin.de/lageso/_assets/gesundheit/berufe-im-gesundheitswesen/europaeische-union/1eu_approbation_antrag.pdf",
          text: {
            en: "The relevant form is included in the application for licensure. Link here.",
            fr: "Le formulaire correspondant est inclus dans la demande de licence. Lien ici.",
            es: "El formulario correspondiente está incluso en la solicitud de licence. Enlace aquí.",
            ar: "النموذج المناسب مدرج في طلب الترخيص. الرابط هنا.",
            tr: "İlgili form lisans başvurusuna dahildir. Bağlantı burada.",
            pl: "Odpowiedni formularz jest zawarty we wniosku o licencję. Link tutaj.",
            uk: "Відповідний формуляр знаходиться в заяві на апробацию. Посилання тут.",
            ru: "Соответствующий формуляр включен в заявку на лицензию. Ссылка здесь.",
            de: "Das entsprechende Formular ist im Antrag auf Approbation enthalten. Link here",
            el: "Η σχετική φόρμα περιλαμβάνεται στην αίτηση για άδεια. Σύνδεσμος εδώ",
            ro: "Formularul corespunzător este inclus în cererea pentru licențiere. Link aici"
          }
        },
        {
          landName: "Hamburg",
          link: "https://www.hamburg.de/contentblob/2773710/841b6159e9ffdae88157737739103790/data/merkblatt-beantragung-approbation-eu.pdf",
          text: {
            en: "The application is submitted online",
            fr: "La demande se fait en ligne",
            es: "La solicitud se realiza en línea",
            ar: "يتم تقديم الطلب عبر الإنترنت",
            tr: "Başvuru çevrimiçi olarak yapılır",
            pl: "Wniosek składany jest online",
            uk: "Подача заяви проходить онлайн",
            ru: "Подача заявления осуществляется онлайн",
            de: "Der Antrag wird online eingereicht",
            el: "Η αίτηση υποβάλλεται ηλεκτρονικά",
            ro: "Cererea se depune online"
          }
        },
        {
          landName: "Bremen",
          link: "https://www.gesundheit.bremen.de/sixcms/media.php/13/Onlineformular%20Straf-%20und%20berufsgerichtliche%20Erklärung.pdf",
          text: {
            en: "Fill out the application here",
            fr: "Remplissez la demande ici",
            es: "Complete la solicitud aquí",
            ar: "املأ الطلب هنا",
            tr: "Başvuruyu burada doldurun",
            pl: "Wypełnij wniosek tutaj",
            uk: "Заповнити заяву тут",
            ru: "Заполните заявление здесь",
            de: "Füllen Sie den Antrag hier aus",
            el: "Συμπληρώστε την αίτηση εδώ",
            ro: "Completați cererea aici"
          }
        }
      ]
    }
  },

  // END OF THE LINE
];
