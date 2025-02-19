export default {
  path: "tnm",
  // http://localhost:5173/trafarette/tnm
  content: [
    {
      id: 1,
      title: "TNM Klassifikation",

      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Die TNM-Klassifikation ist ein standardisiertes System zur Einteilung von Tumorerkrankungen, das zur Erfassung der Krankheitsausbreitung dient. Es beschreibt den Schweregrad einer Krebserkrankung anhand von drei Kriterien: der Ausdehnung des Primärtumors (T), dem Befall der Lymphknoten (N) und dem Vorhandensein von Fernmetastasen (M). Diese Einteilung ermöglicht eine präzise Bestimmung des Tumorstadiums und ist entscheidend für die Therapieplanung.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Hintergrund",
          textWithFormatting: `<div>
            <p>Entwickelt wurde die TNM-Klassifikation von der Union for International Cancer Control (UICC) und wird auch von Organisationen wie dem American Joint Committee on Cancer (AJCC) und der International Federation of Gynecology and Obstetrics (FIGO) verwendet. Seit 1987 sind die Staging-Systeme der UICC und AJCC vereint, weshalb die Klassifikation häufig als "AJCC/UICC-Staging-System" bezeichnet wird.</p>
          </div>`,
        },
        {
          id: 3,
          title: "3. TNM-Klassifikation im Detail",
          textWithFormatting: `<div>
            <p>Die TNM-Klassifikation umfasst eine Vielzahl von Kategorien, die den Krankheitsverlauf und das Stadium eines Tumors so präzise wie möglich beschreiben. Jede der drei Hauptkomponenten – Tumor (T), Lymphknoten (N) und Fernmetastasen (M) – wird dabei genau unterteilt, um die Ausdehnung der Krebserkrankung zu erfassen. Darüber hinaus gibt es zusätzliche Merkmale, wie das Grading (G) oder den Resektionsstatus (R), die das Bild vervollständigen. Diese Klassifikation ermöglicht es, individuelle Behandlungspläne zu entwickeln und die Prognose für den Patienten besser einzuschätzen.</p>
            <h4>3.1. Tumorgröße (T)</h4>
            <p>Die Tumorgröße und das Ausmaß der Infiltration des Primärtumors werden unter der Kategorie „T“ zusammengefasst. Die Einstufung reicht von T0, was bedeutet, dass kein Primärtumor nachweisbar ist, bis hin zu T4, bei dem der Tumor bereits tiefere Strukturen, wie die Brustwand oder die Haut, infiltriert. Eine Sonderform stellt das inflammatorische Mammakarzinom dar, welches unter T4d klassifiziert wird.</p>
            <ul>
              <li>• T0 – Kein Primärtumor nachweisbar</li>
              <li>• Tis – Carcinoma in situ</li>
              <li>• T1 – Tumor &lt; 2 cm</li>
              <li>• T1mi – Mikroläsion bis 0,1 cm</li>
              <li>• T1a – Tumor 0,1–0,5 cm</li>
              <li>• T1b – Tumor 0,5–1 cm</li>
              <li>• T1c – Tumor 1–2 cm</li>
              <li>• T2 – Tumor 2–5 cm</li>
              <li>• T3 – Tumor &gt; 5 cm</li>
              <li>• T4 – Infiltration der Brustwand oder Haut</li>
              <li>• T4a – Infiltration der Brustwand</li>
              <li>• T4b – Ulzerationen oder Ödeme der Haut</li>
              <li>• T4c – Kombination aus T4a und T4b</li>
              <li>• T4d – Inflammatorisches Mammakarzinom (Sonderform)</li>
            </ul>
            <h4>3.2. Lymphknotenbefall (N)</h4>
            <p>Der Befall der Lymphknoten spielt eine wichtige Rolle in der Ausbreitung einer Krebserkrankung. Das „N“ beschreibt, inwieweit Lymphknoten betroffen sind. Diese Einstufung hilft bei der Bestimmung des Fortschreitens der Erkrankung und kann wichtige Hinweise für die Prognose liefern. Beim Mammakarzinom wird oft der sogenannte Wächterlymphknoten untersucht, um das Risiko von Metastasen in weiteren Lymphknoten abzuschätzen.</p>
            <ul>
              <li>• N0 – Kein Lymphknotenbefall</li>
              <li>• N1 – Befall eines axillären Lymphknotens, verschieblich</li>
              <li>• N2a – Befall eines axillären Lymphknotens, unverschieblich</li>
              <li>• N2b – Befall eines Lymphknotens an der A. thoracica interna</li>
              <li>• N3 – Befall eines infra- oder supraklavikulären Lymphknotens</li>
            </ul>
            <p>Zusätzlich kann die genaue Anzahl der untersuchten Lymphknoten und der befallenen Lymphknoten angegeben werden, z.B. N0 (0/10), was bedeutet, dass keiner von zehn untersuchten Lymphknoten befallen ist. Der Zusatz „(sn)“ wird verwendet, wenn nur der Wächterlymphknoten untersucht wurde, z.B. pN0(sn).</p>
            <h4>3.3. Fernmetastasen (M)</h4>
            <p>Die Kategorie „M“ gibt Aufschluss darüber, ob der Tumor bereits in entfernte Organe metastasiert hat. Das Vorhandensein von Fernmetastasen ist ein entscheidender Faktor für die Prognose des Patienten und erfordert in der Regel eine Anpassung der Therapie.</p>
            <ul>
              <li>• M0 – Keine Fernmetastasen</li>
              <li>• M1 – Fernmetastasen vorhanden</li>
            </ul>
          </div>`,
        },
        {
          id: 4,
          title: "4. Zusätzliche Bezeichnungen",
          textWithFormatting: `<div>
            <p>Neben der TNM-Klassifikation gibt es zusätzliche Bezeichnungen, die die biologischen Eigenschaften des Tumors weiter beschreiben. Dazu gehören das Grading (G), das Auskunft über den Differenzierungsgrad der Tumorzellen gibt, sowie die Lymph- (L) und Veneninvasion (V), die die Ausbreitung von Tumorzellen in die Lymphbahnen und Blutgefäße bewerten.</p>
            <h4>4.1. Grading (G)</h4>
            <p>Das Grading gibt an, wie stark die Tumorzellen von den normalen Zellen abweichen. Es ist ein wichtiger Indikator für das Wachstumsverhalten des Tumors. Je schlechter differenziert der Tumor, desto aggressiver wächst er in der Regel.</p>
            <ul>
              <li>• G1 – Gut differenziert</li>
              <li>• G2 – Mäßig differenziert</li>
              <li>• G3 – Schlecht differenziert</li>
              <li>• G4 – Undifferenziert/entdifferenziert</li>
              <li>• GX – Differenzierungsgrad nicht bestimmbar</li>
            </ul>
            <h4>4.2. Lymphgefäßinvasion (L)</h4>
            <p>Die Lymphgefäßinvasion beschreibt, ob Tumorzellen in den Lymphbahnen nachweisbar sind, was auf eine erhöhte Gefahr der Ausbreitung hindeutet.</p>
            <ul>
              <li>• L0 – Keine Tumorzellen in Lymphbahnen</li>
              <li>• L1 – Tumorzellen in Lymphbahnen nachweisbar</li>
              <li>• LX – Nicht beurteilbar</li>
            </ul>
            <h4>4.3. Veneninvasion (V)</h4>
            <p>Ähnlich wie die Lymphgefäßinvasion gibt die Veneninvasion an, ob Tumorzellen in den Blutgefäßen nachgewiesen wurden, was das Risiko von Fernmetastasen erhöht.</p>
            <ul>
              <li>• V0 – Keine Invasion nachweisbar</li>
              <li>• V1 – Mikroskopische Veneninvasion</li>
              <li>• V2 – Makroskopische Veneninvasion</li>
              <li>• VX – Nicht beurteilbar</li>
            </ul>
            <h4>4.4. Perineurale Invasion (Pn)</h4>
            <p>Die perineurale Invasion beschreibt das Eindringen von Tumorzellen in die Nervenhüllen, was oft mit einer schlechteren Prognose verbunden ist.</p>
            <ul>
              <li>• Pn0 – Keine perineurale Invasion</li>
              <li>• Pn1 – Perineurale Invasion nachweisbar</li>
              <li>• PnX – Nicht beurteilbar</li>
            </ul>
            <h4>4.5. Resektionsstatus (R)</h4>
            <p>Der Resektionsstatus beschreibt, ob nach einer Operation noch Tumorreste im Körper vorhanden sind. Ein R0-Status bedeutet, dass der Tumor vollständig entfernt wurde, während R1 und R2 auf verbliebenes Tumorgewebe hinweisen.</p>
            <ul>
              <li>• R0 – Tumorfreie Resektionsränder</li>
              <li>• R1 – Mikroskopischer Tumorrest am Resektionsrand</li>
              <li>• R2 – Makroskopischer Tumorrest oder Tumor im Körper verblieben</li>
              <li>• RX – Resektionsstatus nicht bestimmbar</li>
            </ul>
            <h4>4.6. Serumtumormarker (S)</h4>
            <p>Die Serumtumormarker geben an, ob im Blut erhöhte Tumormarkerwerte nachgewiesen wurden, was auf eine fortgeschrittene Tumorerkrankung hinweisen kann.</p>
            <ul>
              <li>• S0 – Serumtumormarker im Normbereich</li>
              <li>• S1-S3 – Mindestens ein Tumormarker erhöht</li>
              <li>• SX – Tumormarker nicht untersucht oder nicht verfügbar</li>
            </ul>
            <h4>4.7. Certainty Factor (C)</h4>
            <p>Der Certainty Factor, der in der 8. Ausgabe der TNM-Klassifikation entfernt wurde, bezeichnete die Sicherheit der Einteilung basierend auf der diagnostischen Methode.</p>
            <ul>
              <li>• C1 – Klinische Untersuchung, Standard-Röntgen, Endoskopie</li>
              <li>• C2 – Spezielle Untersuchungen (CT, Ultraschall, MRT, Endoskopie mit Biopsie)</li>
              <li>• C3 – Chirurgische Exploration mit Biopsie/Zytologie</li>
              <li>• C4 – Pathologische Untersuchung</li>
              <li>• C5 – Autopsie</li>
            </ul>
          </div>`,
        },
        {
          id: 5,
          title: "5. TNM-Präfixe",
          textWithFormatting: `<div>
            <p>Die TNM-Klassifikation kann durch Präfixe erweitert werden, um spezielle Umstände oder Methoden der Diagnosestellung anzugeben. Diese Präfixe tragen dazu bei, die Umstände der Klassifizierung besser zu verstehen.</p>
            <ul>
              <li>• a – Durch Autopsie bestimmt</li>
              <li>• c – Durch klinische Untersuchungen bestimmt</li>
              <li>• p – Histopathologisch nach Operation bestimmt</li>
              <li>• u – Durch Ultraschalldiagnostik bestimmt</li>
              <li>• y – Zustand nach multimodaler Therapie, z.B. nach neoadjuvanter Therapie</li>
              <li>• r – Rezidivtumor</li>
              <li>• m – Multiple Tumoren derselben Region</li>
            </ul>
          </div>`,
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 2,
      title: "Fragen",
      questions: [
        {
          title: "Was bedeutet der Zusatz „y“ in der TNM-Klassifikation?",
          answers: [
            { name: "Zustand nach multimodaler Therapie", isCorrect: true },
            {
              name: "Klinische Untersuchungen bestimmen den Tumorgrad",
              isCorrect: false,
            },
            { name: "Bestimmung durch Ultraschall", isCorrect: false },
            { name: "Rezidivtumor", isCorrect: false },
          ],
        },
        {
          title:
            "Ein Tumor von 0,5 bis 1 cm wird in der TNM-Klassifikation als welcher T-Grad beschrieben?",
          answers: [
            { name: "T1a", isCorrect: false },
            { name: "T1b", isCorrect: true },
            { name: "T1c", isCorrect: false },
            { name: "T2", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet „pN0(sn)“?",
          answers: [
            {
              name: "Keine Lymphknotenmetastasen im Wächterlymphknoten nachweisbar",
              isCorrect: true,
            },
            {
              name: "Lymphknotenmetastasen im Wächterlymphknoten nachweisbar",
              isCorrect: false,
            },
            { name: "Keine Untersuchung der Lymphknoten", isCorrect: false },
            { name: "Unverschieblicher Lymphknotenbefall", isCorrect: false },
          ],
        },
        {
          title:
            "Welches Kriterium beschreibt „S1“ in Bezug auf Serumtumormarker?",
          answers: [
            { name: "Serumtumormarker im Normbereich", isCorrect: false },
            { name: "Serumtumormarker nicht untersucht", isCorrect: false },
            { name: "Mindestens ein Serumtumormarker erhöht", isCorrect: true },
            { name: "Serumtumormarker nicht verfügbar", isCorrect: false },
          ],
        },
        {
          title: "Welche Beschreibung entspricht „N3“?",
          answers: [
            { name: "Befall axillärer Lymphknoten", isCorrect: false },
            {
              name: "Befall eines Lymphknotens an der A. thoracica interna",
              isCorrect: false,
            },
            {
              name: "Befall infra- oder supraklavikulärer Lymphknoten",
              isCorrect: true,
            },
            { name: "Keine Lymphknotenmetastasen", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet der Resektionsstatus „R2“?",
          answers: [
            { name: "Vollständige Tumorentfernung", isCorrect: false },
            {
              name: "Mikroskopische Tumorreste am Resektionsrand",
              isCorrect: false,
            },
            {
              name: "Makroskopische Tumorreste oder Tumor im Patienten verblieben",
              isCorrect: true,
            },
            { name: "Resektionsstatus nicht bestimmbar", isCorrect: false },
          ],
        },
        {
          title:
            "Ein Lymphknotenbefall eines supraklavikulären Lymphknotens wird als welcher N-Grad klassifiziert?",
          answers: [
            { name: "N1", isCorrect: false },
            { name: "N2b", isCorrect: false },
            { name: "N3", isCorrect: true },
            { name: "N2a", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet „T0“ in der TNM-Klassifikation?",
          answers: [
            { name: "Keine Fernmetastasen", isCorrect: false },
            { name: "Kein Primärtumor nachweisbar", isCorrect: true },
            { name: "Kein Lymphknotenbefall", isCorrect: false },
            { name: "Tumor infiltriert die Brustwand", isCorrect: false },
          ],
        },
        {
          title:
            "Ein Tumor, der die Brustwand infiltriert, wird als welcher T-Grad eingestuft?",
          answers: [
            { name: "T3", isCorrect: false },
            { name: "T4a", isCorrect: true },
            { name: "T4b", isCorrect: false },
            { name: "T2", isCorrect: false },
          ],
        },
        {
          title: "Welcher Zusatz beschreibt eine Tumorgröße von 1 bis 2 cm?",
          answers: [
            { name: "T1a", isCorrect: false },
            { name: "T1b", isCorrect: false },
            { name: "T1c", isCorrect: true },
            { name: "T2", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt „M1“ in der TNM-Klassifikation?",
          answers: [
            { name: "Fernmetastasen vorhanden", isCorrect: true },
            { name: "Keine Fernmetastasen", isCorrect: false },
            { name: "Metastasen in regionalen Lymphknoten", isCorrect: false },
            { name: "Tumor infiltriert die Haut", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet der Zusatz „(sn)“ in der Lymphknoteneinstufung?",
          answers: [
            { name: "Lymphknoten wurden nicht untersucht", isCorrect: false },
            {
              name: "Nur der Wächterlymphknoten wurde untersucht",
              isCorrect: true,
            },
            { name: "Alle Lymphknoten sind befallen", isCorrect: false },
            { name: "Keine Lymphknotenmetastasen", isCorrect: false },
          ],
        },
        {
          title:
            "Wie wird ein klinisch nachgewiesener axillärer Lymphknotenbefall mit unverschieblichem Lymphknoten in der TNM-Klassifikation kodiert?",
          answers: [
            { name: "N1", isCorrect: false },
            { name: "N2a", isCorrect: true },
            { name: "N2b", isCorrect: false },
            { name: "N3", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet „T1mi“ in der TNM-Klassifikation?",
          answers: [
            { name: "Tumor kleiner als 0,1 cm", isCorrect: false },
            { name: "Tumor kleiner als 2 cm", isCorrect: false },
            { name: "Tumor zwischen 1 und 2 cm", isCorrect: false },
            { name: "Mikroläsion bis 0,1 cm", isCorrect: true },
          ],
        },
        {
          title: "Welcher TNM-Grad entspricht einem Tumor größer als 5 cm?",
          answers: [
            { name: "T1c", isCorrect: false },
            { name: "T2", isCorrect: false },
            { name: "T3", isCorrect: true },
            { name: "T4", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet „R1“ in der TNM-Klassifikation?",
          answers: [
            {
              name: "Makroskopische Tumorreste nach Operation",
              isCorrect: false,
            },
            {
              name: "Mikroskopische Tumorreste nach Operation",
              isCorrect: true,
            },
            { name: "Vollständige Tumorentfernung", isCorrect: false },
            { name: "Unvollständige Lymphknotenentfernung", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Zusatzbezeichnung gibt an, dass Tumorzellen in Lymphbahnen nachweisbar sind?",
          answers: [
            { name: "L0", isCorrect: false },
            { name: "L1", isCorrect: true },
            { name: "V1", isCorrect: false },
            { name: "R1", isCorrect: false },
          ],
        },
        {
          title:
            "Ein inflammatorisches Mammakarzinom wird unter welchem T-Stadium eingeordnet?",
          answers: [
            { name: "T4a", isCorrect: false },
            { name: "T4b", isCorrect: false },
            { name: "T4d", isCorrect: true },
            { name: "T3", isCorrect: false },
          ],
        },
        {
          title: "Welcher Befund wird als „N2“ klassifiziert?",
          answers: [
            { name: "Keine Lymphknotenmetastasen", isCorrect: false },
            { name: "Verschieblicher Lymphknotenbefall", isCorrect: false },
            {
              name: "Unverschieblicher axillärer Lymphknotenbefall",
              isCorrect: true,
            },
            {
              name: "Infiltration eines supraklavikulären Lymphknotens",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Ein Tumor, der die Haut infiltriert und Ulzerationen verursacht, wird als welcher T-Grad eingestuft?",
          answers: [
            { name: "T3", isCorrect: false },
            { name: "T4a", isCorrect: false },
            { name: "T4b", isCorrect: true },
            { name: "T2", isCorrect: false },
          ],
        },
        {
          title:
            "Welche TNM-Präfix wird verwendet, wenn die Klassifikation auf pathohistologischen Untersuchungen basiert?",
          answers: [
            { name: "c", isCorrect: false },
            { name: "p", isCorrect: true },
            { name: "u", isCorrect: false },
            { name: "r", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt „Tis“ korrekt?",
          answers: [
            { name: "Kein Primärtumor", isCorrect: false },
            { name: "Carcinoma in situ", isCorrect: true },
            { name: "Tumor kleiner als 2 cm", isCorrect: false },
            { name: "Infiltration der Brustwand", isCorrect: false },
          ],
        },
        {
          title:
            "Welcher der folgenden Befunde entspricht der Klassifikation „Tis“?",
          answers: [
            { name: "Infiltration der Brustwand", isCorrect: false },
            { name: "Kein Primärtumor", isCorrect: false },
            { name: "Carcinoma in situ", isCorrect: true },
            { name: "Tumor kleiner als 2 cm", isCorrect: false },
          ],
        },
        {
          title:
            "Welches Element der TNM-Klassifikation steht für Fernmetastasen?",
          answers: [
            { name: "T", isCorrect: false },
            { name: "N", isCorrect: false },
            { name: "M", isCorrect: true },
            { name: "G", isCorrect: false },
          ],
        },
        {
          title: "Was kennzeichnet „T4“ in der TNM-Klassifikation?",
          answers: [
            {
              name: "Tumor infiltriert die Haut oder Brustwand",
              isCorrect: true,
            },
            { name: "Tumor kleiner als 2 cm", isCorrect: false },
            { name: "Tumor größer als 5 cm", isCorrect: false },
            { name: "Kein Primärtumor", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Zusatzbezeichnung beschreibt das Vorhandensein von Tumorzellen in Venen?",
          answers: [
            { name: "L1", isCorrect: false },
            { name: "V1", isCorrect: true },
            { name: "V2", isCorrect: false },
            { name: "L0", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt der Zusatz „r“ in der TNM-Klassifikation?",
          answers: [
            { name: "Rezidivtumor", isCorrect: true },
            { name: "Zustand nach Operation", isCorrect: false },
            { name: "Untersucht durch Ultraschall", isCorrect: false },
            { name: "Unvollständige Tumorentfernung", isCorrect: false },
          ],
        },
        {
          title: "Was bedeutet „G3“ im Tumorgrading?",
          answers: [
            { name: "Gut differenziert", isCorrect: false },
            { name: "Mäßig differenziert", isCorrect: false },
            { name: "Schlecht differenziert", isCorrect: true },
            { name: "Undifferenziert", isCorrect: false },
          ],
        },
        {
          title:
            "Ein Befall der Lymphknoten an der A. thoracica interna wird wie klassifiziert?",
          answers: [
            { name: "N1", isCorrect: false },
            { name: "N2b", isCorrect: true },
            { name: "N3", isCorrect: false },
            { name: "N0", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt „M0“ in der TNM-Klassifikation?",
          answers: [
            { name: "Keine Lymphknotenmetastasen", isCorrect: false },
            { name: "Keine Fernmetastasen", isCorrect: true },
            { name: "Keine Tumorzellen in Lymphbahnen", isCorrect: false },
            { name: "Kein Primärtumor nachweisbar", isCorrect: false },
          ],
        },
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Tab_3 page 2",
      questions: [
        {
          title: `Was beschreibt das "T" in der TNM-Klassifikation?`,
          hidden_answer: `Die Tumorgröße und Ausdehnung des Primärtumors.`,
        },
        {
          title: `Wer hat die TNM-Klassifikation entwickelt?`,
          hidden_answer: `Die Union for International Cancer Control (UICC).`,
        },
        {
          title: `Was bedeutet "Tis" in der TNM-Klassifikation?`,
          hidden_answer: `Carcinoma in situ.`,
        },
        {
          title: `Was bedeutet "M1" in der TNM-Klassifikation?`,
          hidden_answer: `Vorhandensein von Fernmetastasen.`,
        },
        {
          title: `Was bedeutet "N0" in der TNM-Klassifikation?`,
          hidden_answer: `Kein Lymphknotenbefall.`,
        },
        {
          title: `Was bedeutet das Präfix "p" in der TNM-Klassifikation?`,
          hidden_answer: `Es bedeutet, dass die Klassifikation auf pathohistologischen Untersuchungen nach einer Operation basiert.`,
        },
        {
          title: `Was beschreibt "T4" in der TNM-Klassifikation?`,
          hidden_answer: `Infiltration der Brustwand oder Haut durch den Tumor.`,
        },
        {
          title: `Was bedeutet das Präfix "c" in der TNM-Klassifikation?`,
          hidden_answer: `Es zeigt an, dass die Klassifikation auf klinischen Untersuchungen basiert.`,
        },
        {
          title: `Wie wird ein inflammatorisches Mammakarzinom in der TNM-Klassifikation eingestuft?`,
          hidden_answer: `Es wird als T4d klassifiziert.`,
        },
        {
          title: `Was bedeutet "N3" in der TNM-Klassifikation?`,
          hidden_answer: `Befall eines infra- oder supraklavikulären Lymphknotens.`,
        },
        {
          title: `Wofür wird die TNM-Klassifikation verwendet?`,
          hidden_answer: `Zur Bestimmung der Schwere einer Krebserkrankung und der Prognose.`,
        },
        {
          title: `Was beschreibt das Grading (G) in der TNM-Klassifikation?`,
          hidden_answer: `Den Differenzierungsgrad des Tumors.`,
        },
        {
          title: `Was bedeutet "R0" in der TNM-Klassifikation?`,
          hidden_answer: `Keine Tumorreste am Resektionsrand nach der Operation nachweisbar.`,
        },
        {
          title: `Was bedeutet "T1" in der TNM-Klassifikation?`,
          hidden_answer: `Ein Tumor, der kleiner als 2 cm ist.`,
        },
        {
          title: `Was bedeutet "L1" in der TNM-Klassifikation?`,
          hidden_answer: `Nachweis von Tumorzellen in den Lymphbahnen.`,
        },
      ],
    },
    //  End of parent tab 3
  ],
};
