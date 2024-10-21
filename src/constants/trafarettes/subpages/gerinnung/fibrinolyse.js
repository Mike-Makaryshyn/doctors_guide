import img1 from '../../../../assets/hamostase_fibrinolyse.png';

export default {
  path: "fibrinolyse",
  // http://localhost:5173/trafarette/fibrinolyse
  content: [
    {
      id: 1,
      title: "Fibrinolyse (Fibrinspaltung)",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 3,
          "title": "1. Definition",
          "textWithFormatting": `<div>
            
            <p>Die Fibrinolyse (Fibrinspaltung) beschreibt den körpereigenen Prozess der Auflösung eines Blutgerinnsels (Thrombus) durch das Enzym Plasmin. Plasmin spaltet dabei die Fibrinpolymere, die den Thrombus zusammenhalten, in kleine Fibrinabbauprodukte, wodurch der Thrombus zerfällt. Als wesentlicher Bestandteil der <a href="/trafarette/gerinnung">Hämostase</a> unterliegt die Fibrinolyse einer strengen Regulierung durch biochemische Prozesse, um ein Gleichgewicht zwischen Blutung und Thrombose zu gewährleisten.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "2. Physiologie",
          "textWithFormatting": `<div>
           <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            
            <p>Die Aktivierung der Fibrinolyse erfolgt durch die Umwandlung des inaktiven Plasminogens in die aktive Serinprotease Plasmin. Dies geschieht parallel zur Blutgerinnung, jedoch setzt die Fibrinolyse zeitlich verzögert ein, um die Hämostase zu regulieren.</p>
        
            <h3>Aktivatoren</h3>
            <p>Es gibt zwei körpereigene Aktivatoren: den gewebespezifischen Plasminogenaktivator (tPA) und die Urokinase (uPA). Körperfremde Aktivatoren, wie Staphylokinase und Streptokinase, stammen von Bakterien und bilden mit Plasminogen einen Komplex, der zur Plasminbildung führt. Diese Aktivatoren werden auch therapeutisch zur Thrombolyse genutzt, vor allem rekombinanter tPA (rtPA, Alteplase) und Urokinase.</p>
        
            <h3>Inhibitoren der Fibrinolyseaktivierung</h3>
            <p>Vier Plasminogenaktivator-Inhibitoren (PAI-1 bis PAI-4) wurden identifiziert, von denen PAI-1 der wichtigste ist. Er hemmt sowohl tPA als auch Urokinase und wird hauptsächlich von Endothelzellen und Thrombozyten freigesetzt, was den Thrombus stabilisiert.</p>
        
            <h3>Spaltung der Fibrinpolymere</h3>
            <p>Aktives Plasmin bindet an Fibrin und spaltet es in lösliche Fibrinabbauprodukte (FDP). Diese Abbauprodukte werden durch die Blutzirkulation entfernt.</p>
        
            <h3>Inaktivierung der Fibrinolyse</h3>
            <p>Die Hemmung der Fibrinolyse erfolgt hauptsächlich durch das Enzym alpha-2-Plasmininhibitor (Antiplasmin), das Plasmin im Blut inaktiviert. Fibringebundenes Plasmin bleibt jedoch länger aktiv, da es vor dem Inhibitor besser geschützt ist. Weitere Inhibitoren sind Makroglobulin und künstliche Substanzen wie Tranexamsäure, die zur Gruppe der Antifibrinolytika zählen.</p>
          </div>`
        },
        {
          "id": 5,
          "title": "3. Diagnostik",
          "textWithFormatting": `<div>
           
            <p>Die Fibrinabbauprodukte (FDP) verlangsamen die Gerinnselbildung, da sie Thrombin hemmen. Der Nachweis einer aktiven Fibrinolyse kann durch die Thrombin-Clotting-Time (TCT) erfolgen, jedoch kann eine Heparintherapie die Ergebnisse beeinflussen. Ein spezifisches FDP, das D-Dimer, kann immunologisch nachgewiesen werden, um eine Fibrinolyse zu diagnostizieren. Zudem wird die Thromboelastometrie (TEM) verwendet, um eine Hyperfibrinolyse schnell zu erkennen.</p>
          </div>`
        },
        {
          "id": 6,
          "title": "4. Pathophysiologie",
          "textWithFormatting": `<div>
            
            <p>Ein Ungleichgewicht zwischen fibrinolytischen und antifibrinolytischen Faktoren kann zu Störungen wie Hyperfibrinolyse (übermäßige Fibrinolyse) oder Hypofibrinolyse (unzureichende Fibrinolyse) führen.</p>
          </div>`
        },
        {
          "id": 7,
          "title": "5. Klinische Relevanz",
          "textWithFormatting": `<div>
            
            <p>Die Fibrinolyse spielt eine zentrale Rolle bei der Behandlung thrombotischer Erkrankungen wie Herzinfarkten, Schlaganfällen und Lungenembolien. Therapeutische Eingriffe zielen oft darauf ab, Blutgerinnsel schnell aufzulösen, um Organschäden zu verhindern.</p>
          </div>`
        },
        {
          "id": 8,
          "title": "6. Medikamentöse Hemmung",
          "textWithFormatting": `<div>
           
            <p>Antifibrinolytika wie Tranexamsäure werden in der Chirurgie eingesetzt, um Blutungen zu kontrollieren, indem sie die Auflösung von Blutgerinnseln hemmen.</p>
          </div>`
        },
        {
          "id": 9,
          "title": "7. Krankheitsbilder",
          "textWithFormatting": `<div>
            
            <p>Störungen der Fibrinolyse können zu schwerwiegenden Erkrankungen wie disseminierter intravasaler Gerinnung (DIC) führen, bei der eine unkontrollierte Gerinnung und Fibrinolyse gleichzeitig auftreten.</p>
          </div>`
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 7,
      title: "Fragen",
      questions: [
        {
          "title": "Was versteht man unter Fibrinolyse?",
          "answers": [
            {
              "name": "Die Bildung eines Blutgerinnsels",
              "isCorrect": false
            },
            {
              "name": "Die Auflösung eines Blutgerinnsels durch Plasmin",
              "isCorrect": true
            },
            {
              "name": "Die Verengung von Blutgefäßen",
              "isCorrect": false
            },
            {
              "name": "Die Hemmung der Blutgerinnung",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Welches Enzym ist für die Fibrinolyse verantwortlich?",
          "answers": [
            {
              "name": "Thrombin",
              "isCorrect": false
            },
            {
              "name": "Plasmin",
              "isCorrect": true
            },
            {
              "name": "Fibrinogen",
              "isCorrect": false
            },
            {
              "name": "Heparin",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Was passiert bei der Fibrinolyse mit dem Thrombus?",
          "answers": [
            {
              "name": "Er vergrößert sich",
              "isCorrect": false
            },
            {
              "name": "Er wird stabiler",
              "isCorrect": false
            },
            {
              "name": "Er wird aufgelöst",
              "isCorrect": true
            },
            {
              "name": "Er wandert durch den Körper",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Welches Protein wird durch Plasmin gespalten, um die Fibrinolyse zu bewirken?",
          "answers": [
            {
              "name": "Fibrinogen",
              "isCorrect": false
            },
            {
              "name": "Fibrin",
              "isCorrect": true
            },
            {
              "name": "Prothrombin",
              "isCorrect": false
            },
            {
              "name": "Collagen",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Welche Funktion hat der Plasminogenaktivator tPA?",
          "answers": [
            {
              "name": "Er hemmt die Blutgerinnung",
              "isCorrect": false
            },
            {
              "name": "Er wandelt Plasminogen in Plasmin um",
              "isCorrect": true
            },
            {
              "name": "Er aktiviert Thrombin",
              "isCorrect": false
            },
            {
              "name": "Er baut Fibrinabbauprodukte ab",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Was ist ein D-Dimer-Test?",
          "answers": [
            {
              "name": "Ein Test zur Bestimmung von Blutgerinnungsfaktoren",
              "isCorrect": false
            },
            {
              "name": "Ein Test zum Nachweis von Fibrinabbauprodukten im Blut",
              "isCorrect": true
            },
            {
              "name": "Ein Test zur Messung der Blutplättchenanzahl",
              "isCorrect": false
            },
            {
              "name": "Ein Test zur Messung der Thrombinaktivität",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Welcher der folgenden Stoffe ist ein Antifibrinolytikum?",
          "answers": [
            {
              "name": "Streptokinase",
              "isCorrect": false
            },
            {
              "name": "Heparin",
              "isCorrect": false
            },
            {
              "name": "Tranexamsäure",
              "isCorrect": true
            },
            {
              "name": "Alteplase",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Wie wird Plasminogen in seine aktive Form umgewandelt?",
          "answers": [
            {
              "name": "Durch Thrombin",
              "isCorrect": false
            },
            {
              "name": "Durch tPA und Urokinase",
              "isCorrect": true
            },
            {
              "name": "Durch Heparin",
              "isCorrect": false
            },
            {
              "name": "Durch Streptokinase",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Welche Substanz hemmt die Fibrinolyse durch Inaktivierung von Plasmin?",
          "answers": [
            {
              "name": "PAI-1",
              "isCorrect": false
            },
            {
              "name": "alpha-2-Plasmininhibitor",
              "isCorrect": true
            },
            {
              "name": "Thrombin",
              "isCorrect": false
            },
            {
              "name": "tPA",
              "isCorrect": false
            },
          ],
        },
        {
          "title": "Was sind Fibrinabbauprodukte (FDP)?",
          "answers": [
            {
              "name": "Produkte, die während der Blutgerinnung gebildet werden",
              "isCorrect": false
            },
            {
              "name": "Fragmente, die durch die Spaltung von Fibrin entstehen",
              "isCorrect": true
            },
            {
              "name": "Enzyme, die die Gerinnung fördern",
              "isCorrect": false
            },
            {
              "name": "Moleküle, die Plasmin aktivieren",
              "isCorrect": false
            },
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
          "title": "Welche Hauptaufgabe hat Plasmin in der Fibrinolyse?",
          "hidden_answer": "Plasmin spaltet die Fibrinpolymere, die das Blutgerinnsel (Thrombus) zusammenhalten, und löst so das Gerinnsel auf."
        },
        {
          "title": "Wie wird das inaktive Plasminogen in die aktive Form Plasmin umgewandelt?",
          "hidden_answer": "Plasminogen wird durch den gewebespezifischen Plasminogenaktivator (tPA) und Urokinase in Plasmin umgewandelt."
        },
        {
          "title": "Welches Enzym ist der Haupthemmer von Plasmin?",
          "hidden_answer": "Das Enzym alpha-2-Plasmininhibitor hemmt Plasmin und verhindert so eine unkontrollierte Fibrinolyse."
        },
        {
          "title": "Welche Substanzen hemmen die Aktivierung der Fibrinolyse?",
          "hidden_answer": "PAI-1 (Plasminogenaktivator-Inhibitor-1) hemmt die Aktivierung der Fibrinolyse, indem es tPA und Urokinase blockiert."
        },
        {
          "title": "Welche Stoffe werden bei der therapeutischen Thrombolyse eingesetzt?",
          "hidden_answer": "Zur Thrombolyse werden rekombinanter gewebespezifischer Plasminogenaktivator (rtPA) und Urokinase verwendet."
        },
        {
          "title": "Was passiert mit den Fibrinabbauprodukten (FDP) nach der Fibrinolyse?",
          "hidden_answer": "Die löslichen Fibrinabbauprodukte (FDP) werden durch die Blutzirkulation abtransportiert und anschließend aus dem Blut entfernt."
        },
        {
          "title": "Was bewirken Fibrinabbauprodukte (FDP) in Bezug auf die Blutgerinnung?",
          "hidden_answer": "Fibrinabbauprodukte hemmen Thrombin und verlangsamen dadurch die Bildung neuer Blutgerinnsel."
        },
        {
          "title": "Was misst der D-Dimer-Test im Blut?",
          "hidden_answer": "Der D-Dimer-Test misst die Menge an Fibrinabbauprodukten im Blut, die durch Fibrinolyse entstehen."
        },
        {
          "title": "Welche Erkrankungen können mit gestörter Fibrinolyse verbunden sein?",
          "hidden_answer": "Störungen der Fibrinolyse können zu Erkrankungen wie disseminierter intravasaler Gerinnung (DIC) oder einer Hyperfibrinolyse führen."
        },
        {
          "title": "Welche Substanz wird häufig als Antifibrinolytikum verwendet?",
          "hidden_answer": "Tranexamsäure ist ein häufig verwendetes Antifibrinolytikum, das die Auflösung von Blutgerinnseln hemmt."
        },
      ],
    },
    //  End of parent tab 3
  ],
};
