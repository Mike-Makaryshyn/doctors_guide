export default {
  path: "feinnadelbiopsie",
  // http://localhost:5173/trafarette/feinnadelbiopsie, <a href="/trafarette/feinnadelbiopsie">Feinnadelbiopsie (FNAB)</a>
  content: [
    {
      id: 1,
      title: "Feinnadelbiopsie (FNAB)",
      childTabs: [
        {
          "id": 1,
          "title": "Definition",
          "textWithFormatting": `<div>
            <p>Die <b>Feinnadelbiopsie (FNAB)</b> ist ein minimalinvasives Verfahren zur Gewinnung von Zellen aus Organen oder Gewebestrukturen bei Verdacht auf Tumorerkrankungen. Da die gewonnenen Zellen häufig direkt zytologisch untersucht werden, wird das Verfahren auch als <b>Feinnadelaspirationszytologie (FNAC)</b> bezeichnet.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "Durchführung",
          "textWithFormatting": `<div>
            <p>Bei der Feinnadelbiopsie wird der verdächtige Knoten mit einer sehr dünnen Nadel durch die Haut punktiert. Die Zellen werden mittels Unterdruck durch eine angeschlossene Spritze in die Nadel angesaugt. Je nach Lage und Gewebetiefe des Tumors erfolgt die Punktion entweder manuell oder unter bildgebender Kontrolle (z.B. Ultraschall, Röntgen) zur präzisen Lokalisation. Die Zellen können anschließend gefärbt und mit speziellen immunzytochemischen Methoden auf Tumormarker untersucht werden, um die Art und Herkunft des Tumors zu bestimmen.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "Abgrenzung zu anderen Biopsieformen",
          "textWithFormatting": `<div>
            <p>Im Vergleich zu anderen Biopsieformen wie der <b>Stanzbiopsie</b> oder der <b>Exzisionsbiopsie</b> ist die Feinnadelbiopsie für den Patienten weniger belastend und weist eine niedrigere Komplikationsrate auf. Da die Feinnadelbiopsie jedoch nur eine geringe Menge an Zellen liefert, kann die anschließende pathohistologische Beurteilung eingeschränkt sein und liefert oft weniger aussagekräftige Ergebnisse. Daher wird bei Bedarf für eine umfassendere Diagnose eine größere Gewebebiopsie bevorzugt.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "Risiken",
          "textWithFormatting": `<div>
            <p>Die Feinnadelbiopsie ist ein sicheres Verfahren mit nur geringem Risiko für Komplikationen. Mögliche Risiken umfassen:</p>
            <ul>
              <li>• Schmerzen an der Einstichstelle</li>
              <li>• Schwellung und Hämatombildung</li>
              <li>• Blutungen im Punktionsbereich</li>
              <li>• Infektionen im Bereich der Einstichstelle</li>
            </ul>
            <p>In sehr seltenen Fällen kann es zur Verschleppung von Tumorzellen entlang des Biopsiekanals kommen.</p>
          </div>`
        },
        {
          "id": 5,
          "title": "Indikationen",
          "textWithFormatting": `<div>
            <p>Die Feinnadelbiopsie ist ein wichtiges Diagnoseverfahren bei Verdacht auf Tumoren in verschiedenen Organen und wird angewendet bei unklaren Befunden wie:</p>
            <ul>
              <li>• <b>Schilddrüsenknoten</b> (zur Abklärung eines <a href="/trafarette/schilddruesenkarzinome">Schilddrüsenkarzinoms</a>)</li>
              <li>• <b>Brustknoten</b> (Mammakarzinom)</li>
              <li>• <b>Lungenveränderungen</b> (Bronchialkarzinom)</li>
              <li>• <b>Prostataveränderungen</b> (Prostatakarzinom)</li>
              <li>• <b>Pankreastumoren</b> (Pankreaskarzinom)</li>
              <li>• <b>Leberknoten</b> (hepatozelluläres Karzinom)</li>
            </ul>
          </div>`
        }
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 7,
      title: "Fragen",
      questions: [
        {
          "title": "Was ist der Hauptzweck der Feinnadelbiopsie?",
          "answers": [
            { "name": "Entnahme großer Gewebeproben", "isCorrect": false },
            { "name": "Entnahme kleiner Zellen zur zytologischen Untersuchung", "isCorrect": true },
            { "name": "Blutuntersuchung", "isCorrect": false },
            { "name": "Behandlung von Tumoren", "isCorrect": false }
          ]
        },
        {
          "title": "Bei welchem der folgenden Verfahren werden Zellen zur Untersuchung mittels Unterdruck gewonnen?",
          "answers": [
            { "name": "Stanzbiopsie", "isCorrect": false },
            { "name": "Exzisionsbiopsie", "isCorrect": false },
            { "name": "Feinnadelbiopsie", "isCorrect": true },
            { "name": "MRT", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Rolle spielt die bildgebende Kontrolle bei der Feinnadelbiopsie?",
          "answers": [
            { "name": "Sie hilft, den genauen Punktionsort zu bestimmen", "isCorrect": true },
            { "name": "Sie dient der Untersuchung des gewonnenen Zellmaterials", "isCorrect": false },
            { "name": "Sie hat keinen Einfluss auf die Biopsiedurchführung", "isCorrect": false },
            { "name": "Sie ersetzt die Feinnadelbiopsie vollständig", "isCorrect": false }
          ]
        },
        {
          "title": "Welcher Vorteil ergibt sich bei der Feinnadelbiopsie im Vergleich zur Stanzbiopsie?",
          "answers": [
            { "name": "Niedrigere Komplikationsrate", "isCorrect": true },
            { "name": "Größere Gewebeproben", "isCorrect": false },
            { "name": "Höhere Aussagekraft der Ergebnisse", "isCorrect": false },
            { "name": "Keine Notwendigkeit für zytologische Untersuchungen", "isCorrect": false }
          ]
        },
        {
          "title": "Welches Risiko besteht bei der Feinnadelbiopsie?",
          "answers": [
            { "name": "Große Gewebeverletzungen", "isCorrect": false },
            { "name": "Infektionen an der Einstichstelle", "isCorrect": true },
            { "name": "Keine Risiken", "isCorrect": false },
            { "name": "Organversagen", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Art von Tumoren kann durch eine Feinnadelbiopsie diagnostiziert werden?",
          "answers": [
            { "name": "Schilddrüsenknoten", "isCorrect": true },
            { "name": "Zysten an den Gelenken", "isCorrect": false },
            { "name": "Darmgeschwüre", "isCorrect": false },
            { "name": "Hauterkrankungen", "isCorrect": false }
          ]
        },
        {
          "title": "Warum ist die Feinnadelbiopsie besonders bei Schilddrüsenknoten nützlich?",
          "answers": [
            { "name": "Sie hilft, Schilddrüsenkrebs auszuschließen", "isCorrect": true },
            { "name": "Sie dient zur Behandlung von Schilddrüsenknoten", "isCorrect": false },
            { "name": "Sie ersetzt andere Schilddrüsenuntersuchungen", "isCorrect": false },
            { "name": "Sie verhindert das Wachstum von Schilddrüsenknoten", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Gewebeart wird bei der Feinnadelbiopsie entnommen?",
          "answers": [
            { "name": "Zellmaterial", "isCorrect": true },
            { "name": "Knochenproben", "isCorrect": false },
            { "name": "Lungengewebe", "isCorrect": false },
            { "name": "Gehirngewebe", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Untersuchungstechnik wird häufig in Kombination mit der Feinnadelbiopsie verwendet?",
          "answers": [
            { "name": "Ultraschall", "isCorrect": true },
            { "name": "CT-Scan", "isCorrect": false },
            { "name": "Endoskopie", "isCorrect": false },
            { "name": "MRT", "isCorrect": false }
          ]
        },
        {
          "title": "Welcher der folgenden Befunde ist eine mögliche Komplikation bei der Feinnadelbiopsie?",
          "answers": [
            { "name": "Hämatombildung", "isCorrect": true },
            { "name": "Tiefeninfektionen", "isCorrect": false },
            { "name": "Schwere innere Blutungen", "isCorrect": false },
            { "name": "Gewebeabstoßung", "isCorrect": false }
          ]
        },
        {
          "title": "Warum kann die Feinnadelbiopsie bei Prostataveränderungen durchgeführt werden?",
          "answers": [
            { "name": "Zur Diagnose von Prostatakrebs", "isCorrect": true },
            { "name": "Zur Behandlung von Prostatavergrößerung", "isCorrect": false },
            { "name": "Zur Entfernung der Prostata", "isCorrect": false },
            { "name": "Zur Linderung von Harnproblemen", "isCorrect": false }
          ]
        },
        {
          "title": "Was ist eine häufige Anwendung der Feinnadelbiopsie bei Brustknoten?",
          "answers": [
            { "name": "Diagnose eines Mammakarzinoms", "isCorrect": true },
            { "name": "Behandlung von Brustinfektionen", "isCorrect": false },
            { "name": "Behandlung von Brustschmerzen", "isCorrect": false },
            { "name": "Reduktion des Brustgewebes", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Methode wird zur Analyse der gewonnenen Zellen bei der Feinnadelbiopsie verwendet?",
          "answers": [
            { "name": "Zytologische Untersuchung", "isCorrect": true },
            { "name": "Genanalyse", "isCorrect": false },
            { "name": "Bluttest", "isCorrect": false },
            { "name": "Sichtprüfung", "isCorrect": false }
          ]
        }
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
          "title": "Was versteht man unter einer Feinnadelbiopsie (FNAB)?",
          "hidden_answer": "Die Feinnadelbiopsie ist ein minimalinvasives Verfahren zur Gewinnung von Zellen aus Organen oder Gewebestrukturen zur Diagnose von Tumoren."
        },
        {
          "title": "Welche Art von Untersuchung wird häufig nach einer Feinnadelbiopsie durchgeführt?",
          "hidden_answer": "Nach einer Feinnadelbiopsie wird oft eine zytologische Untersuchung der entnommenen Zellen durchgeführt, um die Art des Tumors zu bestimmen."
        },
        {
          "title": "Warum wird die Feinnadelbiopsie häufig unter bildgebender Kontrolle durchgeführt?",
          "hidden_answer": "Die bildgebende Kontrolle, wie Ultraschall, wird verwendet, um die präzise Lage des Tumors zu bestimmen und die Nadel sicher und genau zu platzieren."
        },
        {
          "title": "Was ist ein Vorteil der Feinnadelbiopsie im Vergleich zu anderen Biopsiemethoden?",
          "hidden_answer": "Ein Vorteil der Feinnadelbiopsie ist die niedrigere Komplikationsrate und die geringere Belastung für den Patienten im Vergleich zu anderen Biopsiemethoden."
        },
        {
          "title": "Welche Risiken können bei einer Feinnadelbiopsie auftreten?",
          "hidden_answer": "Zu den möglichen Risiken gehören Schmerzen an der Einstichstelle, Blutungen, Schwellung und in seltenen Fällen Infektionen."
        },
        {
          "title": "Bei welchen Organen wird die Feinnadelbiopsie oft angewendet?",
          "hidden_answer": "Die Feinnadelbiopsie wird oft zur Diagnose von Tumoren in der Schilddrüse, Brust, Lunge, Prostata, Bauchspeicheldrüse und Leber eingesetzt."
        },
        {
          "title": "Wie wird die Feinnadelbiopsie durchgeführt?",
          "hidden_answer": "Bei der Feinnadelbiopsie wird eine dünne Nadel in den Tumor eingeführt, und Zellen werden durch Unterdruck in die Nadel gezogen."
        },
        {
          "title": "Warum liefert die Feinnadelbiopsie oft weniger Gewebe als andere Biopsiearten?",
          "hidden_answer": "Die Feinnadelbiopsie entnimmt nur eine kleine Menge an Zellen, was für die zytologische Untersuchung ausreicht, jedoch nicht immer für eine umfassende Diagnose."
        },
        {
          "title": "Welche Arten von Tumoren können durch eine Feinnadelbiopsie erkannt werden?",
          "hidden_answer": "Tumoren wie Schilddrüsenkarzinome, Mammakarzinome, Lungenkarzinome, Prostatakarzinome und hepatozelluläre Karzinome können mit einer Feinnadelbiopsie untersucht werden."
        },
        {
          "title": "Was ist ein Hauptnachteil der Feinnadelbiopsie?",
          "hidden_answer": "Ein Hauptnachteil der Feinnadelbiopsie ist, dass sie nur eine kleine Menge an Zellen liefert, was zu eingeschränkten diagnostischen Informationen führen kann."
        }
      ],
    },
    //  End of parent tab 3
  ],
};
