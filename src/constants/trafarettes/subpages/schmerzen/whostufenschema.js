import img1 from '../../../../assets/whoschema.pdf';
export default {
  path: "whostufenschema",
  // http://localhost:5173/trafarette/whostufenschema , <a href="/trafarette/whostufenschema">WHO-Stufenschema</a>
  content: [
    {
      id: 1,
      title: "WHO-Stufenschema",
      childTabs: [
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `
            <div>
             <img src="${img1}" alt="Aorta Diagram">
              <p><strong>Das WHO-Stufenschema</strong> ist eine Empfehlung der <strong>Weltgesundheitsorganisation (WHO)</strong> für die Behandlung von Schmerzen. Es bietet ein strukturiertes Modell zur Anwendung von Analgetika und anderen Medikamenten, das auf einer stufenweisen Eskalation basiert. Ziel ist es, <strong>Schmerzen effektiv zu lindern</strong> und eine optimale Lebensqualität für die Betroffenen zu gewährleisten. Das Schema findet weltweit Anwendung und ist besonders in der Behandlung <strong>chronischer Schmerzen</strong> etabliert.</p>
            </div>
          `
        },
        {
          "id": 2,
          "title": "2. Hintergrund",
          "textWithFormatting": `
            <div>
              <h4><strong>Unzureichende Schmerztherapie</strong></h4>
              <p>Obwohl die Medizin in den letzten Jahrzehnten bedeutende Fortschritte gemacht hat, ist die Versorgung von Schmerzpatienten in vielen Ländern <strong>unzureichend</strong>. Auch in Deutschland leiden laut Schätzungen mindestens <strong>5 Millionen Menschen</strong> regelmäßig oder dauerhaft unter starken Schmerzen.</p>
              <p>Deutschland liegt beim Verbrauch von <strong>Morphin</strong>, einem zentralen Schmerzmittel, im europäischen Vergleich auf einem der unteren Plätze. Der Verbrauch in Deutschland ist beispielsweise <strong>siebenmal geringer</strong> als in Dänemark, einem Spitzenreiter in der Schmerztherapie.</p>
              
              <h4><strong>Ziele der Schmerztherapie</strong></h4>
              <p>Eine adäquate Schmerztherapie soll vor allem:</p>
              <ul>
                <li>• <strong>Rechtzeitig Schmerzfreiheit herstellen</strong>, um das Wohlbefinden und die Funktionalität der Patienten zu verbessern.</li>
                <li>• <strong>Die Chronifizierung von Schmerzen verhindern</strong>, die durch ein sogenanntes „Schmerzgedächtnis“ entstehen kann.</li>
              </ul>
              <p>Um diese Ziele zu erreichen, wurde 1986 das <strong>WHO-Stufenschema</strong> entwickelt. Es ermöglicht eine individuelle, an die Beschwerden des Patienten angepasste Schmerzbehandlung durch eine stufenweise Eskalation der Medikation.</p>
            </div>
          `
        },
        {
          "id": 3,
          "title": "3. Das WHO-Stufenschema",
          "textWithFormatting": `
            <div>
              <p>Das WHO-Stufenschema basiert auf einem <strong>drei- bis vierstufigen Ansatz</strong> zur Schmerzbehandlung. Jede Stufe beschreibt bestimmte Medikamentengruppen und Therapieansätze, die je nach Schmerzintensität und -art angepasst werden können.</p>
              
              <h4><strong>Die drei Stufen des Schemas</strong></h4>
              <table>
                <thead>
                  <tr>
                    <th>Stufe</th>
                    <th>Medikamente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><strong>Nicht-Opioidanalgetika</strong> (z. B. NSAR, Paracetamol), ggf. kombiniert mit Co-Analgetika.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><strong>Niederpotente Opioidanalgetika</strong> (z. B. Tramadol) + Nicht-Opioidanalgetika, ggf. Co-Analgetika.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><strong>Hochpotente Opioidanalgetika</strong> (z. B. Morphin) + Nicht-Opioidanalgetika, ggf. Co-Analgetika.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4><strong>Optionale vierte Stufe</strong></h4>
              <p>Einige Experten fügen eine vierte Stufe hinzu, die invasive Verfahren umfasst, darunter:</p>
              <ul>
                <li>• <strong>Periphere Lokalanästhesie</strong>: Zur Schmerzlinderung in einem bestimmten Körperbereich.</li>
                <li>• <strong>Rückenmarksnahe Therapien</strong>: Applikation von Medikamenten (z. B. Opioide) direkt in den Rückenmarkskanal.</li>
                <li>• <strong>Implantierte Pumpensysteme</strong>: Computergesteuerte Schmerzmittelverabreichung.</li>
                <li>• <strong>Ganglienblockade</strong> und <strong>Spinal Cord Stimulation</strong>: Neuromodulative Verfahren zur Schmerzkontrolle.</li>
              </ul>
              
              <h4><strong>Anpassung und Überspringen von Stufen</strong></h4>
              <p>Der Übergang zwischen den Stufen erfolgt, wenn die Schmerzen auf der <strong>Numeric Rating Scale (NRS)</strong> weiterhin hoch bleiben (z. B. > 3 in Ruhe oder > 5 bei Belastung).</p>
              <p><strong>Hinweis:</strong> Stufen können bei starken Schmerzen oder Tumorschmerzen auch <strong>übersprungen</strong> werden. Es muss nicht zwingend bei Stufe 1 begonnen werden.</p>
            </div>
          `
        },
        {
          "id": 4,
          "title": "4. Nicht-Opioidanalgetika (Stufe 1)",
          "textWithFormatting": `
            <div>
              <p><strong>Nicht-Opioidanalgetika</strong> sind Medikamente, die ohne Beeinflussung des zentralen Nervensystems Schmerzen lindern. Sie bilden die Grundlage der ersten Stufe und werden oft mit Co-Analgetika ergänzt.</p>
              
              <h4><strong>Arzneimittelgruppen</strong></h4>
              <ul>
                <li>• <strong>Nicht-steroidale Antirheumatika (NSAR):</strong></li>
                <ul>
                  <li>• Salicylate (z. B. Acetylsalicylsäure, ASS)</li>
                  <li>• Carbonsäurederivate (z. B. Diclofenac, Ibuprofen)</li>
                  <li>• COX-2-Inhibitoren (z. B. Celecoxib)</li>
                </ul>
                <li>• <strong>Pyrazolone:</strong> Metamizol</li>
                <li>• <strong>Aniline:</strong> Paracetamol</li>
              </ul>
              
              <h4><strong>Dosierungsbeispiele</strong></h4>
              <table>
                <thead>
                  <tr>
                    <th>Wirkstoff</th>
                    <th>Einzeldosierung [mg]</th>
                    <th>Wirkdauer [h]</th>
                    <th>Maximale Tagesdosis [mg]</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Acetylsalicylsäure (ASS)</td>
                    <td>500</td>
                    <td>4–6</td>
                    <td>3.000</td>
                  </tr>
                  <tr>
                    <td>Diclofenac</td>
                    <td>25, 50</td>
                    <td>4–6</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Ibuprofen</td>
                    <td>400, 600, 800</td>
                    <td>4–6</td>
                    <td>2.400</td>
                  </tr>
                  <tr>
                    <td>Celecoxib</td>
                    <td>100, 200</td>
                    <td>6–12</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>Metamizol</td>
                    <td>500, 1.000</td>
                    <td>4–6</td>
                    <td>4.000</td>
                  </tr>
                  <tr>
                    <td>Paracetamol</td>
                    <td>500</td>
                    <td>4–6</td>
                    <td>4.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          "id": 5,
          "title": "5. Niederpotente Opioidanalgetika (Stufe 2)",
          "textWithFormatting": `
            <div>
              <p><strong>Niederpotente Opioidanalgetika</strong> werden in der zweiten Stufe verwendet und meist mit Nicht-Opioidanalgetika kombiniert. Diese Kombination eignet sich besonders für moderate Schmerzen.</p>
              <h4><strong>Beispiele:</strong></h4>
              <ul>
                <li>• <strong>Tramadol:</strong> Oral oder retardiert verfügbar.</li>
                <li>• <strong>Tilidin + Naloxon:</strong> Diese Kombination verhindert Missbrauch und verbessert die Verträglichkeit.</li>
                <li>• <strong>Dihydrocodein:</strong> Besonders wirksam bei starken Belastungsschmerzen.</li>
              </ul>
            </div>
          `
        },
        {
          "id": 6,
          "title": "6. Hochpotente Opioidanalgetika (Stufe 3)",
          "textWithFormatting": `
            <div>
              <p><strong>Hochpotente Opioidanalgetika</strong> kommen in der dritten Stufe zum Einsatz und werden zur Behandlung starker oder schwer kontrollierbarer Schmerzen verwendet.</p>
              <h4><strong>Beispiele:</strong></h4>
              <ul>
                <li>• <strong>Buprenorphin:</strong> Als Pflaster oder sublinguale Tablette erhältlich.</li>
                <li>• <strong>Fentanyl:</strong> In verschiedenen Darreichungsformen wie Pflaster, Lutschtabletten oder Nasenspray.</li>
                <li>• <strong>Morphin:</strong> In retardierter oder unretardierter Form verfügbar.</li>
              </ul>
            </div>
          `
        },
        {
          "id": 7,
          "title": "7. Co-Medikation",
          "textWithFormatting": `
            <div>
              <h4><strong>Funktion:</strong></h4>
              <ul>
                <li>• Unterstützung bei der Schmerztherapie, insbesondere bei neuropathischen Schmerzen.</li>
                <li>• Reduktion von Nebenwirkungen wie Übelkeit oder Verstopfung durch Opioide.</li>
              </ul>
              <h4><strong>Beispiele:</strong></h4>
              <ul>
                <li>• <strong>NMDA-Antagonisten:</strong> Ketamin (zur Senkung des Opioidbedarfs).</li>
                <li>• <strong>Antidepressiva:</strong> Amitriptylin, Clomipramin (bei neuropathischen Schmerzen).</li>
                <li>• <strong>Antikonvulsiva:</strong> Pregabalin, Gabapentin (bei Nervenschmerzen).</li>
                <li>• <strong>Glukokortikoide:</strong> Dexamethason (bei entzündlichen oder tumorbedingten Schmerzen).</li>
              </ul>
              <h4><strong>Nebenwirkungsmanagement:</strong></h4>
              <ul>
                <li>• <strong>Antiemetika:</strong> Metoclopramid, Ondansetron (gegen Übelkeit).</li>
                <li>• <strong>Laxantien:</strong> Macrogol, Bisacodyl (gegen Verstopfung).</li>
              </ul>
            </div>
          `
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
          "title": "Was versteht man unter Analgetika?",
          "answers": [
            {
              "name": "Arzneistoffe zur Schmerzlinderung oder Aufhebung",
              "isCorrect": true
            },
            {
              "name": "Medikamente zur Senkung des Blutdrucks",
              "isCorrect": false
            },
            {
              "name": "Substanzen zur Behandlung von Infektionen",
              "isCorrect": false
            },
            {
              "name": "Präparate zur Förderung der Wundheilung",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher Mechanismus gehört nicht zur Wirkung von Analgetika?",
          "answers": [
            {
              "name": "Hemmung der Schmerzentstehung",
              "isCorrect": false
            },
            {
              "name": "Unterbrechung der Schmerzweiterleitung",
              "isCorrect": false
            },
            {
              "name": "Beeinflussung der Muskelkontraktion",
              "isCorrect": true
            },
            {
              "name": "Beeinflussung der Schmerzverarbeitung im ZNS",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Analgetika wirken primär im Zentralnervensystem?",
          "answers": [
            {
              "name": "Zentral wirksame Analgetika",
              "isCorrect": true
            },
            {
              "name": "Peripher wirksame Analgetika",
              "isCorrect": false
            },
            {
              "name": "Nicht-analgetische Substanzen",
              "isCorrect": false
            },
            {
              "name": "Prostaglandinhemmer",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Substanz gehört zu den peripher wirksamen Analgetika?",
          "answers": [
            {
              "name": "Ibuprofen",
              "isCorrect": true
            },
            {
              "name": "Morphin",
              "isCorrect": false
            },
            {
              "name": "Ketamin",
              "isCorrect": false
            },
            {
              "name": "Buprenorphin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was ist eine Besonderheit zentral wirksamer Analgetika?",
          "answers": [
            {
              "name": "Der Schmerz verliert seinen bedrohlichen Charakter",
              "isCorrect": true
            },
            {
              "name": "Sie blockieren ausschließlich Prostaglandine",
              "isCorrect": false
            },
            {
              "name": "Sie hemmen die Muskelkontraktion",
              "isCorrect": false
            },
            {
              "name": "Sie fördern die Schmerzbildung",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Medikament zählt zu den hochpotenten Opioiden?",
          "answers": [
            {
              "name": "Morphin",
              "isCorrect": true
            },
            {
              "name": "Paracetamol",
              "isCorrect": false
            },
            {
              "name": "Ibuprofen",
              "isCorrect": false
            },
            {
              "name": "Metamizol",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Wie wirken Nicht-Opioidanalgetika?",
          "answers": [
            {
              "name": "Sie wirken nicht an Opiatrezeptoren",
              "isCorrect": true
            },
            {
              "name": "Sie wirken ausschließlich zentral",
              "isCorrect": false
            },
            {
              "name": "Sie blockieren NMDA-Rezeptoren",
              "isCorrect": false
            },
            {
              "name": "Sie fördern die Schmerzleitung",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher Mechanismus beschreibt die Wirkung von NSAR?",
          "answers": [
            {
              "name": "Hemmung der Cyclooxygenase (COX)",
              "isCorrect": true
            },
            {
              "name": "Bindung an Opiatrezeptoren",
              "isCorrect": false
            },
            {
              "name": "Blockade von Calciumkanälen",
              "isCorrect": false
            },
            {
              "name": "Aktivierung von NMDA-Rezeptoren",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Substanz ist ein NMDA-Rezeptorantagonist?",
          "answers": [
            {
              "name": "Ketamin",
              "isCorrect": true
            },
            {
              "name": "Ibuprofen",
              "isCorrect": false
            },
            {
              "name": "Paracetamol",
              "isCorrect": false
            },
            {
              "name": "Codein",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Substanz ist ein peripher wirksames Analgetikum?",
          "answers": [
            {
              "name": "Acetylsalicylsäure (ASS)",
              "isCorrect": true
            },
            {
              "name": "Morphin",
              "isCorrect": false
            },
            {
              "name": "Fentanyl",
              "isCorrect": false
            },
            {
              "name": "Tramadol",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was beschreibt die Wirkung von Ziconotid?",
          "answers": [
            {
              "name": "Blockade von Calciumkanälen",
              "isCorrect": true
            },
            {
              "name": "Hemmung der Prostaglandinproduktion",
              "isCorrect": false
            },
            {
              "name": "Aktivierung von NMDA-Rezeptoren",
              "isCorrect": false
            },
            {
              "name": "Bindung an Opiatrezeptoren",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Analgetika hemmen die Cyclooxygenase (COX)?",
          "answers": [
            {
              "name": "NSAR",
              "isCorrect": true
            },
            {
              "name": "Opioide",
              "isCorrect": false
            },
            {
              "name": "NMDA-Rezeptorantagonisten",
              "isCorrect": false
            },
            {
              "name": "Calciumkanalblocker",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Analgetikum bindet an Opiatrezeptoren?",
          "answers": [
            {
              "name": "Fentanyl",
              "isCorrect": true
            },
            {
              "name": "Paracetamol",
              "isCorrect": false
            },
            {
              "name": "Ibuprofen",
              "isCorrect": false
            },
            {
              "name": "Metamizol",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Analgetikum wird intrathekal appliziert?",
          "answers": [
            {
              "name": "Ziconotid",
              "isCorrect": true
            },
            {
              "name": "Morphin",
              "isCorrect": false
            },
            {
              "name": "Ibuprofen",
              "isCorrect": false
            },
            {
              "name": "Ketamin",
              "isCorrect": false
            }
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
    "title": "Was ist der Hauptunterschied zwischen Analgetika und Anästhetika?",
    "hidden_answer": "Analgetika lindern Schmerzen, ohne das Bewusstsein zu beeinträchtigen, während Anästhetika eine vollständige Betäubung einschließlich Bewusstseinsverlust verursachen."
  },
  {
    "title": "Wie wirken peripher wirksame Analgetika?",
    "hidden_answer": "Peripher wirksame Analgetika hemmen die Cyclooxygenase (COX), wodurch die Produktion von schmerz- und entzündungsfördernden Prostaglandinen blockiert wird."
  },
  {
    "title": "Was ist der Unterschied zwischen schwach und stark wirksamen Analgetika?",
    "hidden_answer": "Schwach wirksame Analgetika sind für leichte bis mittelschwere Schmerzen geeignet, während stark wirksame Analgetika, wie hochpotente Opioide, bei starken und chronischen Schmerzen eingesetzt werden."
  },
  {
    "title": "Warum sind NSAR als peripher wirksame Analgetika beliebt?",
    "hidden_answer": "NSAR wie Ibuprofen und Diclofenac sind beliebt, da sie Schmerzen lindern, Entzündungen hemmen und zusätzlich fiebersenkend wirken."
  },
  {
    "title": "Welche Rezeptoren sind Ziel von Opioidanalgetika?",
    "hidden_answer": "Opioidanalgetika wirken an Opiatrezeptoren im Zentralnervensystem, darunter μ-, δ- und κ-Rezeptoren, um die Schmerzempfindung zu reduzieren."
  },
  {
    "title": "Was beschreibt den Begriff 'Analgesie'?",
    "hidden_answer": "Analgesie bezeichnet die vollständige Aufhebung von Schmerzen, ohne das Bewusstsein oder andere sensorische Wahrnehmungen zu beeinträchtigen."
  },
  {
    "title": "Welche Substanz ist ein zentraler NMDA-Rezeptorantagonist?",
    "hidden_answer": "Ketamin ist ein zentral wirksamer NMDA-Rezeptorantagonist, der die Schmerzübertragung blockiert und auch als Anästhetikum eingesetzt wird."
  },
  {
    "title": "Was ist ein Vorteil der zentral wirksamen Analgetika?",
    "hidden_answer": "Ein Vorteil ist, dass der Schmerz für den Patienten zwar lokalisierbar bleibt, jedoch seinen bedrohlichen Charakter verliert ('Der Schmerz tut nicht mehr weh.')."
  },
  {
    "title": "Was ist die Funktion von Ziconotid als Analgetikum?",
    "hidden_answer": "Ziconotid blockiert N-Typ-Calciumkanäle und verhindert die Weiterleitung von Schmerzimpulsen, oft durch direkte Injektion in den Rückenmarkskanal (intrathekal)."
  },
  {
    "title": "Was unterscheidet Nicht-Opioidanalgetika von Opioidanalgetika?",
    "hidden_answer": "Nicht-Opioidanalgetika wirken unabhängig von Opiatrezeptoren und haben periphere sowie teilweise zentrale Effekte, während Opioidanalgetika direkt an Opiatrezeptoren binden."
  }
],
    },
    //  End of parent tab 3
  ],
};
