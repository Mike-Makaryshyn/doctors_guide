import img1 from "../../../../assets/anaesthesie.png";
export default {
  path: "anesthesia",
  // http://localhost:5173/trafarette/anesthesia
  content: [
    {
      id: 1,
      title: "Anästhesie",
      childTabs: [
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
             <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
                <p><b>Unter Anästhesie</b> versteht man den vollständigen Verlust der Empfindungen, insbesondere der Schmerz- und Berührungsempfindung.</p>
                 <p>Die „<b>3 Säulen der Anästhesie</b>“ fassen die Hauptbestandteile der <a href="/trafarette/allgemeinanaesthesie">Allgemeinanästhesie</a> zusammen:</p>
                <ul>
                    <li>• <b><a href="/trafarette/analgesie">Analgesie</a>:</b> Schmerzausschaltung</li>
                    <li>• <b><a href="/trafarette/hypnose">Hypnose</a>:</b> Bewusstseinsverlust</li>
                    <li>• <b><a href="/trafarette/muskelrelaxation">Relaxation</a>:</b> Muskelerschlaffung</li>
                </ul>

            </div>`,
        },
        {
          id: 2,
          title: "2. Hintergrund",
          textWithFormatting: `<div>
                <p>Anästhesie wird zu operativen Zwecken in Form einer <b><a href="/trafarette/allgemeinanaesthesie">Allgemeinanästhesie</a></b> („Narkose“) oder als <b><a href="/trafarette/lokalanaesthesie">Lokalanästhesie</a></b> (örtliche Betäubung) medikamentös herbeigeführt. Das Fachgebiet der Anästhesiologie umfasst die Methoden und Anwendungen dieser Verfahren. Darüber hinaus kann Anästhesie auch als Symptom bei neurologischen Erkrankungen auftreten.</p>
            </div>`,
        },
        {
          id: 3,
          title: "3. Herkunft",
          textWithFormatting: `<div>
                <p>Der Begriff <b>„Anästhesie“</b> stammt aus dem Altgriechischen und bedeutet „Unempfindlichkeit“. Das ebenfalls altgriechische Wort „Narkose“ bedeutet „Erstarrung“ und bezeichnet die <a href="/trafarette/allgemeinanaesthesie">Allgemeinanästhesie</a> als Sonderform der Anästhesie. Sprachlich ist die Anästhesie der Oberbegriff; <b><a href="/trafarette/lokalanaesthesie">Lokalanästhesie</a></b> und <b><a href="/trafarette/allgemeinanaesthesie">Allgemeinanästhesie</a></b> (synonym: Narkose) sind Unterbegriffe.</p>
            </div>`,
        },
        {
          id: 4,
          title: "4. Geschichte der Anästhesie",
          textWithFormatting: `<div>
                <p>Wichtige Meilensteine in der Geschichte der Anästhesie:</p>
                <ul>
                    <li>• <b>1846:</b> Die moderne Anästhesie begann in Boston mit der ersten erfolgreichen Äthernarkose während einer Tumoroperation.</li>
                    <li>• <b>1884:</b> Entdeckung von Kokain als erstem Lokalanästhetikum.</li>
                    <li>• <b>1932:</b> Einführung von Hexobarbital, einem Barbiturat, zur intravenösen <a href="/trafarette/allgemeinanaesthesie">Narkose</a>.</li>
                    <li>• <b>1940:</b> Curare, ein Pfeilgift, wurde erstmals zur <a href="/trafarette/muskelrelaxation">Muskelrelaxation</a> in der Anästhesie verwendet.</li>
                    <li>• <b>1920er Jahre:</b> Einführung der endotrachealen Intubation mit flexiblen Gummischläuchen, nachdem zuvor Metall- und Ledertuben erprobt worden waren.</li>
                </ul>
                <p>Das Fachgebiet Anästhesiologie hat sich seither stetig weiterentwickelt und umfasst heute Anästhesie, Intensivmedizin, Notfallmedizin und Schmerztherapie.</p>
            </div>`,
        },
        {
          id: 5,
          title: "5. Einteilung der Anästhesie",
          textWithFormatting: `<div>
                <p>Anästhesiearten und -methoden:</p>
                <ul>
                    <li>• <b><a href="/trafarette/lokalanaesthesie">Lokalanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/oberflaechenanaesthesie">Oberflächenanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/infiltrationsanaesthesie">Infiltrationsanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/regionalanaesthesie">Regionalanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/periphereregionalanaesthesie">Periphere Regionalanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/leitungsanaesthesie">Leitungsblockade</a></b></li>
                    <li>• <b><a href="/trafarette/plexusanaesthesie">Plexusblockade</a></b></li>
                    <li>• <b><a href="/trafarette/regionalanaesthesie">Rückenmarksnahe Regionalanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/spinalanaesthesie">Spinalanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/periduralanaesthesie">Periduralanästhesie</a> bzw. Epiduralanästhesie</b></li>
                    <li>• <b><a href="/trafarette/thorakaleepiduralanaesthesie">Thorakale Epiduralanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/kombiniertespinaleepiduraleanaesthesie">Kombinierte spinale/epidurale Anästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/allgemeinanaesthesie">Allgemeinanästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/inhalationsnarkose">Inhalationsnarkose</a></b></li>
                    <li>• <b><a href="/trafarette/tiva">Totale intravenöse Anästhesie (TIVA)</a></b></li>
                    <li>• <b><a href="/trafarette/balancierteanaesthesie">Balancierte Anästhesie</a></b></li>
                    <li>• <b><a href="/trafarette/maskennarkose">Maskennarkose</a></b></li>
                    <li>• <b><a href="/trafarette/larynxmaskennarkose">Larynxmaskennarkose</a></b></li>
                    <li>• <b><a href="/trafarette/intubationsnarkose">Intubationsnarkose</a></b></li>
                </ul>
               
            </div>`,
        },
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 7,
      title: "Fragen",
      questions: [
        {
          title:
            "Welche Form der Anästhesie ermöglicht eine Schmerzausschaltung in einem bestimmten Körperbereich, während der Patient bei Bewusstsein bleibt?",
          answers: [
            { name: "Allgemeinanästhesie", isCorrect: false },
            { name: "Regionalanästhesie", isCorrect: true },
            { name: "Lokalanästhesie", isCorrect: false },
            { name: "Maskennarkose", isCorrect: false },
          ],
        },
        {
          title:
            "Welches Anästhetikum wird häufig in der Inhalationsnarkose verwendet?",
          answers: [
            { name: "Lidocain", isCorrect: false },
            { name: "Sevofluran", isCorrect: true },
            { name: "Ketamin", isCorrect: false },
            { name: "Propofol", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt die Spinalanästhesie?",
          answers: [
            {
              name: "Eine Injektion eines Anästhetikums in den Subarachnoidalraum",
              isCorrect: true,
            },
            {
              name: "Eine Inhalation eines Anästhetikums über eine Maske",
              isCorrect: false,
            },
            {
              name: "Eine Injektion eines Anästhetikums in die Epiduralregion",
              isCorrect: false,
            },
            {
              name: "Die Anwendung von Oberflächenanästhetika",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Anästhesiemethode wird besonders häufig bei ambulanten Eingriffen verwendet?",
          answers: [
            { name: "Intubationsnarkose", isCorrect: false },
            { name: "Larynxmaskennarkose", isCorrect: true },
            { name: "Spinalanästhesie", isCorrect: false },
            { name: "Periduralanästhesie", isCorrect: false },
          ],
        },
        {
          title: "Was ist ein typisches Risiko der Spinalanästhesie?",
          answers: [
            { name: "Sehstörungen", isCorrect: false },
            { name: "Kopfschmerzen", isCorrect: true },
            { name: "Erhöhte Blutgerinnung", isCorrect: false },
            { name: "Hautausschlag", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Form der Anästhesie wird oft für Eingriffe an der oberen Extremität genutzt?",
          answers: [
            { name: "Plexusanästhesie", isCorrect: true },
            { name: "TIVA (Totale intravenöse Anästhesie)", isCorrect: false },
            { name: "Intubationsnarkose", isCorrect: false },
            { name: "Oberflächenanästhesie", isCorrect: false },
          ],
        },
        {
          title:
            "Welche der folgenden Anästhesien erfordert keinen Beatmungsschlauch?",
          answers: [
            { name: "Spinalanästhesie", isCorrect: false },
            { name: "Maskennarkose", isCorrect: true },
            { name: "Intubationsnarkose", isCorrect: false },
            { name: "Larynxmaskennarkose", isCorrect: false },
          ],
        },
        {
          title:
            "Was ist eine häufige Komplikation bei der Larynxmaskennarkose?",
          answers: [
            { name: "Aspirationsrisiko", isCorrect: true },
            { name: "Blutgerinnung", isCorrect: false },
            { name: "Lungenembolie", isCorrect: false },
            { name: "Herzinfarkt", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Anästhesiemethode eignet sich gut für Geburtshilfe (z.B. bei einem Kaiserschnitt)?",
          answers: [
            { name: "Oberflächenanästhesie", isCorrect: false },
            { name: "Periduralanästhesie", isCorrect: true },
            { name: "Maskennarkose", isCorrect: false },
            { name: "Intubationsnarkose", isCorrect: false },
          ],
        },
        {
          title: "Welche Substanz wird häufig für eine TIVA verwendet?",
          answers: [
            { name: "Ketamin", isCorrect: false },
            { name: "Sevofluran", isCorrect: false },
            { name: "Propofol", isCorrect: true },
            { name: "Lidocain", isCorrect: false },
          ],
        },
        {
          title: "Welcher Vorteil ist typisch für die Regionalanästhesie?",
          answers: [
            {
              name: "Es wird immer eine Vollnarkose kombiniert",
              isCorrect: false,
            },
            { name: "Der Patient bleibt bei Bewusstsein", isCorrect: true },
            { name: "Der Patient muss beatmet werden", isCorrect: false },
            {
              name: "Sie ist nur bei Eingriffen am Kopf möglich",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Anästhesieform ist bekannt für eine schnelle Aufwachzeit?",
          answers: [
            { name: "Desfluran", isCorrect: true },
            { name: "Lidocain", isCorrect: false },
            { name: "Isofluran", isCorrect: false },
            { name: "Ketamin", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Anästhesieform wird oft bei schwieriger Intubation verwendet?",
          answers: [
            { name: "Plexusanästhesie", isCorrect: false },
            { name: "TIVA", isCorrect: false },
            { name: "Larynxmaskennarkose", isCorrect: true },
            { name: "Maskennarkose", isCorrect: false },
          ],
        },
        {
          title: "Was ist ein häufiges Ziel der Periduralanästhesie?",
          answers: [
            { name: "Betäubung des Gesichts", isCorrect: false },
            {
              name: "Schmerzkontrolle im unteren Rückenbereich",
              isCorrect: true,
            },
            { name: "Schmerzkontrolle im Oberarm", isCorrect: false },
            { name: "Vollständige Muskelrelaxation", isCorrect: false },
          ],
        },
        {
          title:
            "Welches Anästhetikum wird häufig zur postoperativen Schmerzlinderung verwendet?",
          answers: [
            { name: "Ketamin", isCorrect: false },
            { name: "Lidocain", isCorrect: false },
            { name: "Bupivacain", isCorrect: true },
            { name: "Sevofluran", isCorrect: false },
          ],
        },
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
            "title": "Welche Funktion hat die Inhalationsnarkose in der Anästhesie?",
            "hidden_answer": "Die Inhalationsnarkose dient der Steuerung von Bewusstlosigkeit und Schmerzfreiheit durch das Einatmen von Anästhetika über die Atemwege."
        },
        {
            "title": "Was beschreibt die Spinalanästhesie?",
            "hidden_answer": "Die Spinalanästhesie ist eine Form der Regionalanästhesie, bei der das Anästhetikum in den Subarachnoidalraum injiziert wird, um den Unterkörper zu betäuben."
        },
        {
            "title": "Welche Substanz wird häufig für eine TIVA verwendet?",
            "hidden_answer": "Propofol wird häufig als injizierbares Anästhetikum bei der totalen intravenösen Anästhesie (TIVA) verwendet."
        },
        {
            "title": "Was ist die Hauptanwendung der Larynxmaske?",
            "hidden_answer": "Die Larynxmaske wird verwendet, um während einer Narkose die Atemwege offen zu halten, insbesondere bei kürzeren oder ambulanten Eingriffen."
        },
        {
            "title": "Welches Anästhetikum hat eine besonders kurze Aufwachzeit?",
            "hidden_answer": "Desfluran ist bekannt für seine kurze Aufwachzeit, was es ideal für Eingriffe mit schneller Erholung macht."
        },
        {
            "title": "Wie wirkt Lidocain in der Anästhesie?",
            "hidden_answer": "Lidocain blockiert die Natriumkanäle in den Nerven, was die Schmerzweiterleitung unterbricht und somit eine lokale Anästhesie ermöglicht."
        },
        {
            "title": "Welche Vorteile bietet die periphere Regionalanästhesie?",
            "hidden_answer": "Die periphere Regionalanästhesie ermöglicht gezielte Schmerzlinderung in einer bestimmten Körperregion und verringert die Notwendigkeit für systemische Schmerzmittel."
        },
        {
            "title": "Welche Form der Anästhesie wird häufig bei Kaiserschnitten eingesetzt?",
            "hidden_answer": "Die Periduralanästhesie wird häufig bei Kaiserschnitten eingesetzt, um eine effektive Schmerzfreiheit während der Geburt zu gewährleisten."
        },
        {
            "title": "Wie wird die Maskennarkose typischerweise durchgeführt?",
            "hidden_answer": "Bei der Maskennarkose atmet der Patient Anästhetikagase über eine Maske ein, um eine schmerzfreie und kontrollierte Bewusstlosigkeit zu erreichen."
        },
        {
            "title": "Was ist ein typisches Risiko der Spinalanästhesie?",
            "hidden_answer": "Ein häufiges Risiko der Spinalanästhesie sind postpunktionale Kopfschmerzen, die durch den Austritt von Liquor verursacht werden können."
        },
        {
            "title": "Welche Technik wird bei der thorakalen Epiduralanästhesie verwendet?",
            "hidden_answer": "Bei der thorakalen Epiduralanästhesie wird das Anästhetikum in den Epiduralraum des Brustbereichs injiziert, um eine gezielte Schmerzlinderung zu erreichen."
        },
        {
            "title": "Was ist die Hauptfunktion der Plexusanästhesie?",
            "hidden_answer": "Die Plexusanästhesie dient der Betäubung eines Nervengeflechts (Plexus), um Schmerzen bei Operationen an den Extremitäten zu blockieren."
        },
        {
            "title": "Warum ist die Inhalationsnarkose in der Kinderchirurgie beliebt?",
            "hidden_answer": "Die Inhalationsnarkose ist in der Kinderchirurgie beliebt, weil sie eine sanfte und nicht-invasive Einführung in die Narkose ermöglicht."
        },
        {
            "title": "Was ist der Vorteil der balancierten Anästhesie?",
            "hidden_answer": "Die balancierte Anästhesie kombiniert verschiedene Anästhetika, um die Dosis einzelner Medikamente zu verringern und Nebenwirkungen zu minimieren."
        },
        {
            "title": "Welche Funktion hat der Epiduralkatheter in der Periduralanästhesie?",
            "hidden_answer": "Der Epiduralkatheter ermöglicht die kontinuierliche oder intermittierende Verabreichung von Anästhetika zur Schmerztherapie während und nach einer Operation."
        },
        {
            "title": "Was beschreibt die totale intravenöse Anästhesie (TIVA)?",
            "hidden_answer": "Die TIVA ist eine Form der Narkose, bei der ausschließlich injizierbare Anästhetika verwendet werden, um eine kontrollierte Bewusstlosigkeit zu erzielen."
        }
    ],
    },
    //  End of parent tab 3
  ],
};
