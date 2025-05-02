export default {
    path: "hypoglykämie",
    folder: "innereMedizin",
    content: [
      {
        id: 1,
        title: "Hypoglykämie (Unterzuckerung)",
        childTabs: [
          {
            id: 1,
            title: "Definition",
            textWithFormatting: `<div>
    <h3>Definition</h3>
    <ul>
      <li>Blutzucker (BZ) &lt;45–50 mg/dL (2,5–2,8 mmol/L)</li>
      <li>Laborgrenzwert häufig &lt;70 mg/dL (3,9 mmol/L)</li>
      <li>BZ &lt;50 mg/dL ohne Symptome = asymptomatisch</li>
      <li>BZ &lt;50 mg/dL mit Symptomen → Schwere je nach Fremdhilfe-Bedarf</li>
      <li><strong>Whipple-Trias</strong> als sicherer Nachweis:</li>
      <ol>
        <li>Symptome einer Hypoglykämie</li>
        <li>Gleichzeitiger niedriger BZ</li>
        <li>Symptomlinderung nach Anhebung des BZ</li>
      </ol>
    </ul>
  </div>`
          },
          {
            id: 2,
            title: "Ätiologie",
            textWithFormatting: `<div>
    <h3>Allgemeine begünstigende Faktoren</h3>
    <ul>
      <li>Unregelmäßige Nahrungsaufnahme</li>
      <li>Alkoholkonsum/-abusus</li>
      <li>Starke körperliche Betätigung</li>
    </ul>
    <h3>Bei Diabetikern</h3>
    <ul>
      <li>Überdosierung von Insulin oder Sulfonylharnstoffen/Gliniden</li>
      <li>Medikationsinteraktionen (z. B. Betablocker)</li>
      <li>Mahlzeitenpausen bei konventioneller Insulintherapie</li>
      <li>Körperliche Anstrengung, Alkoholexzesse am Vorabend</li>
    </ul>
    <h3>Nicht-diabetische Ursachen</h3>
    <ul>
      <li>Medikamente, Drogen, Toxine</li>
      <li>Postprandiale Formen (Dumping, Gastroparese)</li>
      <li>Insulinom, Nesidioblastose</li>
      <li>Endokrinopathien (z. B. Nebenniereninsuffizienz, Hypopituitarismus)</li>
      <li>Schwere Leber- oder Niereninsuffizienz, Sepsis</li>
      <li>Paraneoplasien (IGF-II-Produktion)</li>
      <li>Pädiatrische/syndromale Ursachen (z. B. Glykogenosen, Beckwith-Wiedemann)</li>
    </ul>
  </div>`
          },
          {
            id: 3,
            title: "Symptomatik",
            textWithFormatting: `<div>
    <h3>Autonome Gegenregulation</h3>
    <ul>
      <li>Unruhe, Schwitzen, Tachykardie, Tremor</li>
      <li>Heißhunger, Übelkeit, Erbrechen</li>
    </ul>
    <h3>Neuroglucopenische Symptome</h3>
    <ul>
      <li>Verwirrtheit, Konzentrationsstörungen, Kopfschmerzen</li>
      <li>Sprachstörungen, Reizbarkeit, Aggressivität</li>
      <li>Konvulsionen, focal-neurologische Ausfälle</li>
      <li>Müdigkeit → Apathie → Somnolenz → Koma</li>
    </ul>
    <p><em>Hinweis:</em> Häufige Hypoglykämien reduzieren die Warnsymptome (Hypoglykämie-Unawareness).</p>
  </div>`
          },
          {
          id: 4,
          title: "Whipple-Trias",
          textWithFormatting: `<div>
  <h3>Whipple-Trias</h3>
  <ol>
    <li>Symptome einer Hypoglykämie</li>
    <li>Gleichzeitiger niedriger Blutzuckerwert</li>
    <li>Symptomlinderung nach Glukosegabe</li>
  </ol>
  <p>Die Whipple-Trias ist das diagnostische Kriterium für eine Hypoglykämie und sollte vor jeder weiteren Diagnostik geprüft werden.</p>
</div>`
        },
          {
            id: 5,
            title: "Anamnese & Diagnostik",
            textWithFormatting: `<div>
  <h3>Anamnese</h3>
  <ul>
    <li>Begünstigende Faktoren klären: Körperliche Aktivität, Nahrungsmittelaufnahme, Alkoholkonsum</li>
    <li>Medikamentenanamnese: Insulinapplikation (Einheiten, Injektionsort), Therapieform und Dosierung von Antidiabetika</li>
    <li>Weitere Fragen bei Bedarf: Häufigkeit der Symptomatik, Auslösesituationen, Reproduzierbarkeit</li>
    <li>Dokumentierte Blutzuckerwerte bei anderen symptomatischen Episoden</li>
    <li>Vorerkrankungen erfassen</li>
  </ul>
  <h3>Labordiagnostik</h3>
  <p><strong>Basisdiagnostik:</strong> Sofortige Blutzuckermessung (Whipple-Trias beachten). Bei Störung der Vigilanz im Notfall vor Ort messen!</p>
  <p><strong>Erweiterte Diagnostik (Fastentest):</strong> Stationär bis zu 72 h Fasten unter Überwachung</p>
  <ul>
    <li>Flüssigkeitszufuhr ≥2 L/Tag</li>
    <li>Dokumentation letzte Mahlzeit, dann strikte Nahrungskarenz</li>
    <li>Laborkontrollen: Serumglucose, Insulin, C-Peptid</li>
    <li>Messintervalle:
      <ul>
        <li>>60 mg/dL: alle 4 h</li>
        <li>50–59 mg/dL: alle 2 h</li>
        <li><50 mg/dL: stündlich</li>
      </ul>
    </li>
    <li>Abbruch bei Symptomen + Serumglucose <45 mg/dL oder wiederholt <40 mg/dL → 1 mg Glucagon i.v.</li>
  </ul>
  <h3>Interpretation</h3>
  <ul>
    <li>Glucose↓, Insulin↑, C-Peptid↑ → endogene Insulinproduktion oder Sulfonylharnstoff</li>
    <li>Glucose↓, Insulin↓, C-Peptid↓ → Substratmangel (z. B. Leber-/Niereninsuffizienz)</li>
    <li>Glucose↓, Insulin↑, C-Peptid↓ → exogene Insulinzufuhr</li>
  </ul>
</div>`
          },
          {
            id: 6,
            title: "Akuttherapie (Symptomatisch)",
            textWithFormatting: `<div>
  <h3>Bewusstes Patienten</h3>
  <ul>
    <li>In Klinik: orale Glucosegabe (20–100 g)</li>
    <li>Im Alltag: schnell resorbierbare Kohlenhydrate (Cola, Orangensaft, Gummibärchen)</li>
  </ul>
  <h3>Bewusstlosigkeit, Venenzugang</h3>
  <ul>
    <li>Infusionserweiterung: 8–24 g Glucose (20–60 mL Glucose 40% bzw. 40–120 mL Glucose 20%)</li>
    <li>Kinder &lt;40 kg: 0,2 g/kg (1 mL/kg Glucose 20%)</li>
    <li>Fortlaufende Blutzuckerkontrollen, evtl. Dauertropf Glucose 5%</li>
    <li>Ziel: BZ ~200 mg/dL (11,1 mmol/L)</li>
  </ul>
  <h3>Bewusstlosigkeit, kein Venenzugang</h3>
  <ul>
    <li>Glucagon i.m. oder s.c. (siehe pädiatrische Dosierung)</li>
  </ul>
  <p><em>Stationäre Aufnahme und Überwachung bei Sulfonylharnstoff-Verdacht oder Bewusstlosigkeit empfohlen.</em></p>
</div>`
          },
          {
            id: 7,
            title: "Prävention & Schulung",
            textWithFormatting: `<div>
  <h3>Präventionsmaßnahmen</h3>
  <ul>
    <li>Diabetikerschulung: Hypoglykämie-Symptome, Notfallset mit Glucagon</li>
    <li>Immer schnell verfügbare Glucose mitführen (Traubenzucker, Flüssigpräparate)</li>
    <li>Ernährungsberatung: kleine, ballaststoffreiche Mahlzeiten</li>
    <li>Therapieanpassung: Insulindosierungen, Spritz-Ess-Abstand überprüfen</li>
  </ul>
  <h3>Reaktive Formen</h3>
  <ul>
    <li>häufige, kleine Mahlzeiten, komplexe Kohlenhydrate</li>
  </ul>
  <h3>Insulinom/Endogene Ursachen</h3>
  <ul>
    <li>chirurgische Abklärung und Resektion</li>
  </ul>
</div>`
          }
        ]
      },
      {
        id: 2,
        title: "Fragen",
        questions: [
          {
            title: "Welcher Blutzuckerwert definiert üblicherweise eine Hypoglykämie?",
            answers: [
              { name: "<50 mg/dL", isCorrect: false },
              { name: "<45 mg/dL", isCorrect: true },
              { name: "<70 mg/dL", isCorrect: false },
              { name: "<90 mg/dL", isCorrect: false }
            ]
          },
          {
            title: "Welche drei Kriterien bilden die Whipple-Trias?",
            answers: [
              { name: "Symptome, niedriger BZ, Linderung nach Zufuhr", isCorrect: true },
              { name: "Symptome, hoher BZ, Linderung nach Zufuhr", isCorrect: false },
              { name: "Symptome, niedriger BZ, Verschlechterung nach Zufuhr", isCorrect: false },
              { name: "Symptome, normaler BZ, Linderung nach Zufuhr", isCorrect: false }
            ]
          },
          {
            title: "Welches Hormon ist beim Insulinom typischerweise erhöht?",
            answers: [
              { name: "Glukagon", isCorrect: false },
              { name: "Insulin", isCorrect: true },
              { name: "Adrenalin", isCorrect: false },
              { name: "Cortisol", isCorrect: false }
            ]
          },
          {
            title: "Was ist der Goldstandard zur Abklärung einer unklaren Nüchternhypoglykämie?",
            answers: [
              { name: "oGTT", isCorrect: false },
              { name: "72-h-Fastentest", isCorrect: true },
              { name: "HbA1c-Bestimmung", isCorrect: false },
              { name: "CT-Abdomen", isCorrect: false }
            ]
          },
          {
            title: "Welche Messintervalle gelten beim 72-h-Fastentest, wenn der BZ unter 50 mg/dL fällt?",
            answers: [
              { name: "Alle 4 h", isCorrect: false },
              { name: "Alle 2 h", isCorrect: false },
              { name: "Stündlich", isCorrect: true },
              { name: "Nur zu Testbeginn und Ende", isCorrect: false }
            ]
          },
          {
            title: "Welches Symptom ist typisch neuroglucopenisch?",
            answers: [
              { name: "Tremor", isCorrect: false },
              { name: "Schwitzen", isCorrect: false },
              { name: "Konzentrationsstörung", isCorrect: true },
              { name: "Palpitationen", isCorrect: false }
            ]
          },
          {
            title: "Was deutet ein Anstieg von C-Peptid bei gleichzeitig erhöhtem Insulin an?",
            answers: [
              { name: "Exogene Insulingabe", isCorrect: false },
              { name: "Endogene Insulinproduktion", isCorrect: true },
              { name: "Leberinsuffizienz", isCorrect: false },
              { name: "Glukagonmangel", isCorrect: false }
            ]
          },
          {
            title: "Welches Medikament kann akut bei Bewusstlosigkeit ohne Venenzugang gegeben werden?",
            answers: [
              { name: "Orale Glucose", isCorrect: false },
              { name: "i.v. Insulin", isCorrect: false },
              { name: "Glucagon i.m./s.c.", isCorrect: true },
              { name: "Metformin", isCorrect: false }
            ]
          },
          {
            title: "Welche Maßnahme gehört zur Prävention reaktiver Hypoglykämien?",
            answers: [
              { name: "Große Mahlzeiten mit einfachem Zucker", isCorrect: false },
              { name: "Kleine, ballaststoffreiche Mahlzeiten", isCorrect: true },
              { name: "Fasten über 24 h", isCorrect: false },
              { name: "Verzicht auf Kohlenhydrate", isCorrect: false }
            ]
          },
          {
            title: "Wann sollte ein Patient nach einer schweren Hypoglykämie stationär überwacht werden?",
            answers: [
              { name: "Nur bei Diabetikern", isCorrect: false },
              { name: "Bei Sulfonylharnstoff-Induktion oder Bewusstlosigkeit", isCorrect: true },
              { name: "Nur bei Insulinom", isCorrect: false },
              { name: "Nie, immer ambulant", isCorrect: false }
            ]
          },
          {
            title: "Welcher Faktor trägt NICHT zu Hypoglykämie-Unawareness bei?",
            answers: [
              { name: "Rezidivierende Hypoglykämien", isCorrect: false },
              { name: "Autonome Neuropathie", isCorrect: false },
              { name: "Gute Glykämiekontrolle ohne Schwankungen", isCorrect: true },
              { name: "Langjährige Diabetesdauer", isCorrect: false }
            ]
          },
          {
            title: "Was ist das primäre Ziel-Blutzuckerniveau nach i.v. Glucosegabe?",
            answers: [
              { name: "~70 mg/dL", isCorrect: false },
              { name: "~200 mg/dL", isCorrect: true },
              { name: "~300 mg/dL", isCorrect: false },
              { name: "~50 mg/dL", isCorrect: false }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Faktenfragen",
        questions: [
          {
            title: "Die Whipple-Trias ist das diagnostische Kernkriterium für Hypoglykämie.",
            hidden_answer: "Ja: Sie umfasst Symptome, einen niedrigen Blutzuckerwert und Linderung der Symptome nach Glukosegabe."
          },
          {
            title: "Der Goldstandard zur Abklärung unklarer Nüchternhypoglykämie ist der 72‑h-Fastentest.",
            hidden_answer: "Ja: Er überwacht den Patienten unter Fasten bis zu 72 Stunden mit regelmäßigen Laborkontrollen."
          },
          {
            title: "Ein erhöhter C‑Peptid-Spiegel spricht für endogene Insulinproduktion.",
            hidden_answer: "Ja: C‑Peptid wird gemeinsam mit Insulin sezerniert und zeigt autonome Insulinausschüttung an."
          },
          {
            title: "Sulfonylharnstoffe können noch Stunden nach Einnahme Hypoglykämien auslösen.",
            hidden_answer: "Ja: Sie stimulieren die Insulinfreisetzung und haben eine langanhaltende Wirkung."
          },
          {
            title: "Neuroglucopenische Symptome treten bereits bei leichtem Blutzuckerabfall auf.",
            hidden_answer: "Ja: Das Gehirn ist auf Glukose angewiesen, weshalb Konzentrationsstörungen früh sichtbar werden."
          },
          {
            title: "Glucagon i.m. ist die Therapie der Wahl bei bewusstlosen Patienten ohne Venenzugang.",
            hidden_answer: "Ja: Es erhöht rasch den Blutzucker, wenn keine i.v. Infusion möglich ist."
          },
          {
            title: "Beim Fastentest werden bei Blutzucker <50 mg/dL einstündliche Messungen durchgeführt.",
            hidden_answer: "Ja: Niedrige Werte erfordern engmaschige Verlaufskontrollen zur sicheren Diagnostik."
          },
          {
            title: "Reaktive postprandiale Hypoglykämien treten meist 2–4 h nach dem Essen auf.",
            hidden_answer: "Ja: Durch schnelle Insulinausschüttung nach kohlenhydratreichen Mahlzeiten."
          },
          {
            title: "Hypoglykämie-Unawareness entsteht durch wiederholte Unterzuckerungen.",
            hidden_answer: "Ja: Warnsymptome lassen nach, da das autonome Nervensystem weniger reagiert."
          },
          {
            title: "Patienten mit Niereninsuffizienz haben ein erhöhtes Hypoglykämierisiko.",
            hidden_answer: "Ja: Verminderte Insulinausscheidung und verzögerter Medikamentenabbau führen dazu."
          }
        ]
      }
    ]
  };