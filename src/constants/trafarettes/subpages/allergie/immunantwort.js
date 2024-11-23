export default { 
  path: "immunantwort", // http://localhost:5173/trafarette/immunantwort,
  content: [ 
    { 
      id: 1, 
      title: "Immunantwort - Ein umfassender Überblick", 
      childTabs: [ 
        { 
          id: 1, 
          title: "1. Definition", 
          textWithFormatting: `<div>            
            <p>Die <b>Immunreaktion</b> oder <b>Immunantwort</b> beschreibt die Reaktion des <b>Immunsystems</b> auf die Konfrontation des <b>Körpers</b> mit einem <b>Antigen</b>, das entweder fremd oder bereits bekannt ist. Antigene sind Moleküle, die eine Immunantwort hervorrufen, und können Teile von Krankheitserregern wie Bakterien, Viren oder chemischen Substanzen sein.</p>          
          </div>` 
        }, 
        { 
          id: 2, 
          title: "2. Ätiologie", 
          textWithFormatting: `<div>            
            <p>Ziel der Immunreaktion ist die Erkennung und Neutralisierung von potenziell schädlichen Elementen wie:</p>
            <ul>              
                <li><b>Mikroorganismen</b>: z. B. Bakterien, Viren, Pilze, Parasiten</li>
                <li><b>Toxine</b> oder <b>Schadstoffe</b>, welche die Immunzellen als Fremdsubstanzen identifizieren</li>
                <li><b>Maligne Zellen</b> bei der <b>Tumorabwehr</b></li>
            </ul>
            <h4>Exogene Auslöser:</h4>
            <ul>
                <li>Krankheitserreger wie Bakterien, Viren, Pilze, Parasiten</li>
                <li>Fremdantigene bei Organtransplantationen</li>
            </ul>
            <h4>Endogene Auslöser:</h4>
            <ul>
                <li>Körpereigene Zellen, die durch Mutationen entartet sind (z.B. Tumorzellen)</li>
                <li>Autoantigene, die gegen körpereigene Strukturen gerichtet sind (z.B. bei Autoimmunkrankheiten)</li>
            </ul>
          </div>` 
        }, 
        { 
          id: 3, 
          title: "3. Mechanismen der Immunantwort (Pathophysiologie)", 
          textWithFormatting: `<div>            
            <p>Es gibt zwei wesentliche Formen der Immunantwort:</p>
            <h4>3.1. Angeborene Immunantwort</h4>
            <p>Die <b>angeborene</b> Immunantwort ist der erste Abwehrmechanismus des Körpers und reagiert schnell, aber unspezifisch auf Fremdstoffe.</p>
            <ul>
                <li><b>Erkennungsmechanismus</b>: PAMPs (Pathogen-assoziierte molekulare Muster)</li>
                <li><b>Aktivierung</b>: durch Toll-like-Rezeptoren (TLRs) auf Immunzellen</li>
                <li><b>Zellen</b>: Natürliche Killerzellen, Makrophagen, neutrophile und eosinophile Granulozyten, dendritische Zellen</li>
                <li><b>Mediatoren</b>: Zytokine, Akute-Phase-Proteine, Lysozym, Komplementfaktoren</li>
            </ul>
            <h4>3.2. Adaptive Immunantwort</h4>
            <p>Die <b>adaptive</b> Immunantwort wird spezifisch aktiviert, wenn der Körper mit einem neuen oder bereits bekannten Antigen konfrontiert wird. Sie entwickelt sich langsamer, bietet jedoch eine gezielte und langlebige Immunität.</p>
            <ul>
                <li><b>Erkennungsmechanismus</b>: Präsentation von Antigenen durch antigenpräsentierende Zellen (APCs)</li>
                <li><b>Beteiligte Zellen</b>: T-Lymphozyten (T-Helfer, zytotoxische T-Zellen), B-Lymphozyten (Plasmazellen)</li>
                <li><b>Effektoren</b>: Antikörperproduktion durch B-Zellen, Zytotoxische Reaktionen von T-Zellen</li>
                <li><b>Gedächtniszellen</b>: Langlebige T- und B-Zellen, die bei einer Zweitinfektion eine schnellere und stärkere Immunantwort ermöglichen.</li>
            </ul>
          </div>` 
        }, 
        { 
          id: 4, 
          title: "4. Mediatoren", 
          textWithFormatting: `<div>            
            <p>Die Vermittlung der Immunantwort erfolgt durch verschiedene Schlüsselzellen und -substanzen. Je nach Art und Verlauf der Immunreaktion sind unterschiedliche <b>Mediatoren</b> beteiligt:</p>
            <h4>Humorale Mediatoren (löslich)</h4>
            <ul>
                <li><b>Lysozyme</b>: Enzyme, die Bakterienwände abbauen</li>
                <li><b>Komplement</b>: Proteine, die in Serie aktiviert werden und zur Opsonisierung oder Zelllyse führen</li>
                <li><b>Zytokine</b>: Übertragen Signale zwischen Immunzellen</li>
                <li><b>Akute-Phase-Proteine</b>: Binden an pathogene Oberflächen und fördern die Phagozytose</li>
                <li><b>Antikörper</b>: Spezifische Abwehrproteine, die von B-Zellen sezerniert werden</li>
            </ul>
            <h4>Zelluläre Mediatoren</h4>
            <ul>
                <li><b>Neutrophile Granulozyten</b>: Frühreaktoren der angeborenen Immunantwort</li>
                <li><b>Makrophagen/Monozyten</b>: Phagozytose und Antigenpräsentation</li>
                <li><b>NK-Zellen</b>: Abtötung infizierter Zellen und Tumorzellen</li>
                <li><b>T-Lymphozyten (Helfer und zytotoxisch)</b>: Zentral bei der adaptiven Immunität</li>
                <li><b>B-Lymphozyten</b>: Produktion von Antikörpern gegen spezifische Antigene</li>
                <li><b>Dendritische Zellen</b>: Professionelle antigenpräsentierende Zellen</li>
            </ul>
          </div>` 
        }, 
        { 
          id: 5, 
          title: "5. Einteilung", 
          textWithFormatting: `<div>            
            <p>Immunreaktionen können basierend auf verschiedenen Kriterien wie Entwicklungszeitpunkt, beteiligte Komponenten, Spezifität und Kontakthistorie klassifiziert werden.</p>
            <h4>5.1. Nach Entwicklungszeitpunkt</h4>
            <ul>
                <li><b>Angeboren</b> (unspezifisch):
                    <ul>
                        <li>Schnell</li>
                        <li>Ohne Antigen-spezifische Gedächtnisbildung</li>
                        <li>Beispiel: Aktivierung von Phagozyten durch PAMPs</li>
                    </ul>
                </li>
                <li><b>Adaptiv</b> (spezifisch):
                    <ul>
                        <li>Langsame Initialreaktion (3–7 Tage)</li>
                        <li>Antigen-spezifisch und mit Gedächtnisbildung</li>
                        <li>Beispiel: Produktion spezifischer Antikörper durch B-Zellen</li>
                    </ul>
                </li>
            </ul>
            <table>
                <tr>
                    <td></td>
                    <td><b>Angeboren</b></td>
                    <td><b>Adaptiv</b></td>
                </tr>
                <tr>
                    <td>Spezifizität</td>
                    <td>gering</td>
                    <td>hoch</td>
                </tr>
                <tr>
                    <td>Kinetik</td>
                    <td>sofortige Reaktion, innerhalb weniger Stunden oder Tage</td>
                    <td>&gt; 3 Tage</td>
                </tr>
                <tr>
                    <td>Gedächtnis</td>
                    <td>keines</td>
                    <td>Gedächtniszellen vorhanden</td>
                </tr>
                <tr>
                    <td>Humorale Mediatoren</td>
                    <td>Lysozym, Komplement, Akute-Phase-Proteine, endogene Antibiotika</td>
                    <td>Antikörper</td>
                </tr>
                <tr>
                    <td>Zelluläre Mediatoren</td>
                    <td>Natürliche Killerzellen, Phagozyten</td>
                    <td>T-Zellen, B-Zellen</td>
                </tr>
            </table>
            <h4>5.2. Nach beteiligten Komponenten</h4>
            <ul>
                <li><b>Humoral</b>: Mediatoren wie Antikörper und Komplement im Blut</li>
                <li><b>Zellulär</b>: Direkte Beteiligung von Immunzellen wie T-Zellen und Makrophagen</li>
            </ul>
            <h4>5.3. Nach Spezifität</h4>
            <ul>
                <li><b>Unspezifisch</b>: Angeborene Immunantwort, welche auf eine allgemeine Bedrohung reagiert</li>
                <li><b>Spezifisch</b>: Adaptive Immunantwort, die auf spezifische Antigene zugeschnitten ist</li>
            </ul>
            <h4>5.4. Nach Kontakthistorie</h4>
            <ul>
                <li><b>Primäre Immunreaktion</b>: Erstkontakt mit einem Antigen, langsame Antikörperproduktion</li>
                <li><b>Sekundäre Immunreaktion</b>: Schnellere und stärkere Antwort auf ein bekanntes Antigen durch Gedächtniszellen</li>
            </ul>
          </div>` 
        }, 
        { 
          id: 6, 
          title: "6. Dysregulation der Immunantwort", 
          textWithFormatting: `<div>            
            <p>Eine Fehlregulation der Immunreaktion kann zu verschiedenen pathologischen Zuständen führen:</p>
            <ul>
                <li><b>Autoimmunerkrankungen</b>: Das Immunsystem greift körpereigenes Gewebe an (z.B. Rheumatoide Arthritis, Diabetes Typ 1)</li>
                <li><b>Allergien</b>: Übermäßige Immunreaktion auf harmlose Substanzen (z.B. Pollen, Lebensmittel)</li>
                <li><b>Immunsuppressive Zustände</b>: Zu schwache Immunantwort, die zu einer erhöhten Infektanfälligkeit führt (z.B. bei HIV, immunsupprimierenden Medikamenten nach Organtransplantationen)</li>
                <li><b>Immunüberreaktion (Zytokinsturm)</b>: Verursacht systemischen Schaden (z.B. bei schweren Virusinfektionen)</li>
            </ul>
          </div>` 
        },
        { 
          id: 7, 
          title: "7. Klinische Bedeutung", 
          textWithFormatting: `<div>            
            <p>Eine korrekte Balance der Immunreaktion ist essenziell für die Abwehr von Fremdstoffen, die Wundheilung und die Erhaltung der Gesundheit. Dysfunktionale Immunreaktionen können zur Entstehung von Immunpathologien führen, darunter <b>Immundefekte</b>, <b>Autoimmunerkrankungen</b> und <b>allergische Reaktionen</b>. Fortschritte in der Immuntherapie zielen darauf ab, das Immunsystem gezielt zu modulieren, was sowohl bei der Behandlung von <b>Infektionskrankheiten</b> als auch bei <b>Krebs</b> eine zentrale Rolle spielt.</p>
            <h4>Fazit</h4>
            <p>Die Immunreaktion ist ein komplexes, mehrstufiges System, das einer feinen Regulation bedarf. Verständnis der Mechanismen erlaubt es, therapeutische Strategien zu entwickeln, welche das <b>menschliche Immunsystem</b> in Gesundheit und Krankheit gezielt unterstützen.</p>
          </div>` 
        }
      ], 
    },
 


{
  "id": 7,
  "title": "Fragen",
  "questions": [
    {
      "title": "Was versteht man unter der Immunreaktion?",
      "answers": [
        { "name": "Eine Reaktion auf körperliche Verletzungen.", "isCorrect": false },
        { "name": "Ein anderer Begriff für eine allergische Reaktion.", "isCorrect": false },
        { "name": "Die Reaktion des Immunsystems auf ein fremdes oder bekanntes Antigen.", "isCorrect": true },
        { "name": "Eine Reaktion auf die Einnahme von Medikamenten.", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Form kann eine pathologische Immunreaktion annehmen?",
      "answers": [
        { "name": "Eine Autoimmunreaktion", "isCorrect": true },
        { "name": "Eine Allergiereaktion", "isCorrect": false },
        { "name": "Eine Phagozytose", "isCorrect": false },
        { "name": "Eine Entzündungsreaktion", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Zellen gehören NICHT zu den aktiven Mediatoren der Immunantwort?",
      "answers": [
        { "name": "B-Lymphozyten", "isCorrect": false },
        { "name": "Hautzellen", "isCorrect": true },
        { "name": "T-Lymphozyten", "isCorrect": false },
        { "name": "NK-Zellen", "isCorrect": false }
      ]
    },
    {
      "title": "Was ist typisch für die angeborene Immunantwort?",
      "answers": [
        { "name": "Langsame Reaktion", "isCorrect": false },
        { "name": "Hohe Spezifität", "isCorrect": false },
        { "name": "Kein Gedächtnis", "isCorrect": true },
        { "name": "Produktion von Antikörpern", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Zelle ist ein Teil der zellulären Immunreaktion?",
      "answers": [
        { "name": "T-Zellen", "isCorrect": true },
        { "name": "Antikörper", "isCorrect": false },
        { "name": "Lysozym", "isCorrect": false },
        { "name": "Komplement", "isCorrect": false }
      ]
    },
    {
      "title": "Was kennzeichnet eine primäre Immunreaktion?",
      "answers": [
        { "name": "Schnelle Sistierung", "isCorrect": false },
        { "name": "Erstkontakt mit einem Antigen", "isCorrect": true },
        { "name": "Immunologisches Gedächtnis", "isCorrect": false },
        { "name": "Hochspezifische Antigenwirkung", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Zellen spielen eine Rolle bei der humoralen Immunantwort?",
      "answers": [
        { "name": "Neutrophile Granulozyten", "isCorrect": false },
        { "name": "B-Lymphozyten", "isCorrect": true },
        { "name": "NK-Zellen", "isCorrect": false },
        { "name": "Phagozyten", "isCorrect": false }
      ]
    },
    {
      "title": "Wie schnell reagiert die angeborene Immunantwort typischerweise?",
      "answers": [
        { "name": "Nach mehreren Wochen", "isCorrect": false },
        { "name": "Nach wenigen Tagen", "isCorrect": false },
        { "name": "Sofort, innerhalb von Stunden", "isCorrect": true },
        { "name": "Nach mehr als drei Tagen", "isCorrect": false }
      ]
    },
    {
      "title": "Welches Protein ist ein humoraler Mediator der angeborenen Immunantwort?",
      "answers": [
        { "name": "Antikörper", "isCorrect": false },
        { "name": "Lysozym", "isCorrect": true },
        { "name": "Interferon", "isCorrect": false },
        { "name": "Cytokine", "isCorrect": false }
      ]
    },
    {
      "title": "Wodurch wird die adaptive Immunreaktion charakterisiert?",
      "answers": [
        { "name": "Unspezifische Aktivierung", "isCorrect": false },
        { "name": "Sofortige Antwort", "isCorrect": false },
        { "name": "Durch Gedächtniszellen", "isCorrect": true },
        { "name": "Keinerlei Spezifität", "isCorrect": false }
      ]
    }
  ]
},

{
  "id": 22,
  "title": "Fakten",
  "questions": [
    {
      "title": "Die Immunreaktion ist die Reaktion des Immunsystems auf Antigene.",
      "hidden_answer": "Antigene sind Moleküle, die eine Immunantwort hervorrufen können."
    },
    {
      "title": "Es gibt zwei Hauptarten der Immunreaktion: die angeborene und die adaptive Immunantwort.",
      "hidden_answer": "Die angeborene Immunantwort ist unspezifisch, während die adaptive Antwort spezifisch ist."
    },
    {
      "title": "Angeborene Immunantwort wird schnell aktiviert.",
      "hidden_answer": "Sie reagiert innerhalb von Stunden und hat kein Gedächtnis für vorherige Antigene."
    },
    {
      "title": "Die adaptive Immunantwort benötigt Zeit zur Aktivierung.",
      "hidden_answer": "Sie benötigt in der Regel 3–7 Tage zur initialen Reaktion und bildet Gedächtniszellen aus."
    },
    {
      "title": "Humorale Mediatoren sind Teil der Immunantwort.",
      "hidden_answer": "Dazu gehören Antikörper, Zytokine und Komplementproteine, die im Blut circulieren."
    },
    {
      "title": "Zelluläre Mediatoren der Immunantwort sind Immunzellen.",
      "hidden_answer": "Dazu gehören T-Lymphozyten, B-Lymphozyten, NK-Zellen und Makrophagen."
    },
    {
      "title": "Autoimmunerkrankungen entstehen durch Fehlregulation der Immunantwort.",
      "hidden_answer": "Das Immunsystem greift körpereigene Zellen an, was zu Krankheiten wie Rheumatoider Arthritis führt."
    },
    {
      "title": "Allergien sind eine Überreaktion des Immunsystems auf harmlose Substanzen.",
      "hidden_answer": "Diese Reaktionen können zu Symptomen wie Juckreiz, Schwellungen und Atembeschwerden führen."
    },
    {
      "title": "Das Verständnis der Immunreaktion ist wichtig für therapeutische Strategien.",
      "hidden_answer": "Immuntherapien zielen darauf ab, das Immunsystem zu modulieren und bekämpfen Krankheiten wie Krebs."
    },
    {
      "title": "Dysregulation der Immunreaktion kann zu Immunsuppressiven Zuständen führen.",
      "hidden_answer": "Diese Zustände machen den Körper anfälliger für Infektionen, wie bei HIV oder nach Organtransplantationen."
    },
  ],
},
 ], 
};