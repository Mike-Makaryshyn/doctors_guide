export default {
  path: "vitaminall",
  // http://localhost:5173/trafarette/vitaminall
  content: [
    {
      id: 1,
      title: "Vitamin",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
            <p>Vitamine sind essenzielle Nährstoffe unterschiedlicher chemischer Struktur, die über die Nahrung aufgenommen werden müssen, da der Körper sie nicht selbst herstellen kann. Ein Mangel an Vitaminen wird als Hypovitaminose, ein Überschuss als Hypervitaminose bezeichnet.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Funktionen",
          "textWithFormatting": `<div>
            <p>Vitamine spielen im Stoffwechsel eine zentrale Rolle, da sie als Cofaktoren und Coenzyme an zahlreichen biochemischen Reaktionen beteiligt sind. Ein dauerhafter Entzug eines einzelnen Vitamins aus der Ernährung führt zu schwerwiegenden gesundheitlichen Problemen und ist letztlich nicht mit dem Leben vereinbar.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "3. Klassifikation",
          "textWithFormatting": `<div>
            <p>Vitamine werden nach ihrer Löslichkeit in wasserlösliche und fettlösliche Vitamine unterteilt. Historisch wurden Vitamine mit Großbuchstaben benannt, heute jedoch häufig nach ihren biochemischen Namen. Beide Nomenklaturen sind parallel in Gebrauch.</p>
            <p><strong>Fettlösliche Vitamine:</strong></p>
            <ul>
              <li>• Retinol (Vitamin A)</li>
              <li>• Calciferol (Vitamin D)</li>
              <li>• Tocopherol (Vitamin E)</li>
              <li>• <a href="/trafarette/vitamink">Phyllochinon (Vitamin K)</a></li>
            </ul>
            <p><em>Hinweis: Calciferol kann vom menschlichen Körper synthetisiert werden, wird jedoch aus Gründen der Vollständigkeit hier aufgeführt.</em></p>
            <p><strong>Wasserlösliche Vitamine:</strong></p>
            <ul>
              <li>• Thiamin (Vitamin B1)</li>
              <li>• Riboflavin (Vitamin B2)</li>
              <li>• Pyridoxin (Vitamin B6)</li>
              <li>• Cobalamin (Vitamin B12)</li>
              <li>• Ascorbinsäure (Vitamin C)</li>
              <li>• Niacin</li>
              <li>• Pantothensäure</li>
              <li>• Biotin (Vitamin H)</li>
              <li>• Folsäure</li>
            </ul>
          </div>`
        },
        {
          "id": 4,
          "title": "4. Historisches",
          "textWithFormatting": `<div>
            <p>Der Begriff „Vitamin“ wurde 1912 von dem polnischen Biochemiker Casimir Funk geprägt, als er das Vitamin Thiamin (B1) isolierte, während er die biochemische Ursache der Beriberi-Krankheit erforschte.</p>
            <p>Die Tatsache, dass Vitamine nicht durchgängig nach Ziffern oder Buchstaben geordnet sind, hat historische Gründe. Früher wurden zahlreiche Stoffe fälschlicherweise als Vitamine bezeichnet, da man ihre Bedeutung für den Stoffwechsel überschätzte. Mit fortschreitendem biochemischen Wissen wurden diese Stoffe von der Liste der Vitamine gestrichen. Beispiele dafür sind:</p>
            <ul>
              <li>Orotsäure (Vitamin B13)</li>
              <li>Coenzym Q (Vitamin Q)</li>
              <li>Carnitin (Vitamin T oder BT)</li>
              <li>Bioflavonoide (Vitamin P)</li>
              <li>Adenin und Cholin (Vitamin B4)</li>
              <li>Essentielle Fettsäuren (Vitamin F)</li>
            </ul>
          </div>`
        },
        {
          "id": 5,
          "title": "5. Klinik",
          "textWithFormatting": `<div>
            <p>Störungen im Vitaminmetabolismus können durch angeborene Stoffwechselerkrankungen verursacht werden, was zu spezifischen klinischen Symptomen führt.</p>
            <table>
              <thead>
                <tr>
                  <th>Vitamin</th>
                  <th>Störung</th>
                  <th>Klinik</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Retinol (Vitamin A)</td>
                  <td>Apolipoproteins B</td>
                  <td>Abetalipoproteinämie, erniedrigte Vitamin-A-Spiegel</td>
                </tr>
                <tr>
                  <td>Calciferol (Vitamin D)</td>
                  <td>Rezeptor</td>
                  <td>Keine Reaktion auf Calciferol, Osteomalazie</td>
                </tr>
                <tr>
                  <td>Tocopherol (Vitamin E)</td>
                  <td>Apolipoproteins B</td>
                  <td>Abetalipoproteinämie, erniedrigte Vitamin-E-Spiegel</td>
                </tr>
                <tr>
                  <td>Thiamin (Vitamin B1)</td>
                  <td>BCKDH-Komplex</td>
                  <td>Ahornsirupkrankheit</td>
                </tr>
                <tr>
                  <td>Pyruvatmetabolismus</td>
                  <td></td>
                  <td>Laktatazidose, neurologische Anomalien</td>
                </tr>
                <tr>
                  <td>Riboflavin (Vitamin B2)</td>
                  <td>Methämoglobin-Reduktase</td>
                  <td>Methämoglobinämie</td>
                </tr>
                <tr>
                  <td>Flavoproteine</td>
                  <td></td>
                  <td>Mangel an Acyl-CoA-Dehydrogenierung, metabolische Azidose</td>
                </tr>
                <tr>
                  <td>Pyridoxin (Vitamin B6)</td>
                  <td>Cystathionin-β-Synthase</td>
                  <td>Homocystinurie</td>
                </tr>
                <tr>
                  <td>Kynureninase</td>
                  <td></td>
                  <td>Xanthurenazidurie</td>
                </tr>
                <tr>
                  <td>Vitamin B12 (Cobalamin)</td>
                  <td>Intrinsic Factor</td>
                  <td>Juvenile perniziöse Anämie</td>
                </tr>
                <tr>
                  <td>Transcobalamin</td>
                  <td></td>
                  <td>Megaloblastäre Anämie, Wachstumsstörungen</td>
                </tr>
                <tr>
                  <td>Folsäure</td>
                  <td>Absorption</td>
                  <td>Megaloblastäre Anämie, mentale Störungen</td>
                </tr>
                <tr>
                  <td>Methylentetrahydrofolat-Reduktase</td>
                  <td></td>
                  <td>Homocystinurie, neurologische Störungen</td>
                </tr>
                <tr>
                  <td>Biotin</td>
                  <td>Biotinidase</td>
                  <td>Alopezie, Krämpfe, Entwicklungsstörungen</td>
                </tr>
                <tr>
                  <td>Pyruvatcarboxylase</td>
                  <td></td>
                  <td>Akkumulation von Laktat und Pyruvat</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          "id": 6,
          "title": "6. Merkhilfen",
          "textWithFormatting": `<div>
            <p>Eine einfache Eselsbrücke für die fettlöslichen Vitamine ist der Merkspruch: Auch der Esel kaut oder das Akronym EDEKA.</p>
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
          "title": "Welches Vitamin ist entscheidend für die Blutgerinnung?",
          "answers": [
            {
              "name": "Vitamin D",
              "isCorrect": false
            },
            {
              "name": "Vitamin K",
              "isCorrect": true
            },
            {
              "name": "Vitamin C",
              "isCorrect": false
            },
            {
              "name": "Vitamin A",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitamin kann der Körper bei Sonneneinstrahlung selbst herstellen?",
          "answers": [
            {
              "name": "Vitamin B12",
              "isCorrect": false
            },
            {
              "name": "Vitamin D",
              "isCorrect": true
            },
            {
              "name": "Vitamin C",
              "isCorrect": false
            },
            {
              "name": "Vitamin K",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitamin ist bekannt für seine antioxidative Wirkung?",
          "answers": [
            {
              "name": "Vitamin B6",
              "isCorrect": false
            },
            {
              "name": "Vitamin A",
              "isCorrect": false
            },
            {
              "name": "Vitamin E",
              "isCorrect": true
            },
            {
              "name": "Vitamin D",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Ein Mangel an welchem Vitamin führt zu Skorbut?",
          "answers": [
            {
              "name": "Vitamin B1",
              "isCorrect": false
            },
            {
              "name": "Vitamin C",
              "isCorrect": true
            },
            {
              "name": "Vitamin B6",
              "isCorrect": false
            },
            {
              "name": "Vitamin E",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitamin ist wichtig für die Sehkraft?",
          "answers": [
            {
              "name": "Vitamin A",
              "isCorrect": true
            },
            {
              "name": "Vitamin D",
              "isCorrect": false
            },
            {
              "name": "Vitamin B12",
              "isCorrect": false
            },
            {
              "name": "Vitamin C",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Ein Mangel an welchem Vitamin kann Beriberi verursachen?",
          "answers": [
            {
              "name": "Vitamin B1 (Thiamin)",
              "isCorrect": true
            },
            {
              "name": "Vitamin B12",
              "isCorrect": false
            },
            {
              "name": "Vitamin D",
              "isCorrect": false
            },
            {
              "name": "Vitamin B6",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitamin ist in Eiern, Milch und Fleisch reichlich vorhanden?",
          "answers": [
            {
              "name": "Vitamin C",
              "isCorrect": false
            },
            {
              "name": "Vitamin D",
              "isCorrect": false
            },
            {
              "name": "Vitamin B12",
              "isCorrect": true
            },
            {
              "name": "Vitamin E",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitamin ist notwendig für die Kollagenbildung?",
          "answers": [
            {
              "name": "Vitamin A",
              "isCorrect": false
            },
            {
              "name": "Vitamin C",
              "isCorrect": true
            },
            {
              "name": "Vitamin D",
              "isCorrect": false
            },
            {
              "name": "Vitamin K",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitamin unterstützt die Aufnahme von Kalzium im Darm?",
          "answers": [
            {
              "name": "Vitamin B12",
              "isCorrect": false
            },
            {
              "name": "Vitamin D",
              "isCorrect": true
            },
            {
              "name": "Vitamin C",
              "isCorrect": false
            },
            {
              "name": "Vitamin A",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Vitaminmangel führt zu Rachitis bei Kindern?",
          "answers": [
            {
              "name": "Vitamin D",
              "isCorrect": true
            },
            {
              "name": "Vitamin A",
              "isCorrect": false
            },
            {
              "name": "Vitamin B12",
              "isCorrect": false
            },
            {
              "name": "Vitamin K",
              "isCorrect": false
            }
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
          "title": "Warum sind Vitamine essenziell für den menschlichen Körper?",
          "hidden_answer": "Vitamine sind essenzielle Nährstoffe, da sie vom Körper nicht selbst hergestellt werden können und für viele Stoffwechselprozesse unerlässlich sind."
        },
        {
          "title": "Welches Vitamin fördert die Aufnahme von Kalzium?",
          "hidden_answer": "Vitamin D fördert die Aufnahme von Kalzium aus der Nahrung und ist entscheidend für den Erhalt gesunder Knochen."
        },
        {
          "title": "Welches Vitamin ist ein starker Antioxidant?",
          "hidden_answer": "Vitamin E ist bekannt für seine antioxidativen Eigenschaften, die Zellen vor Schäden durch freie Radikale schützen."
        },
        {
          "title": "Was ist die Hauptursache für Skorbut?",
          "hidden_answer": "Skorbut wird durch einen Mangel an Vitamin C verursacht, welches für die Bildung von Kollagen im Bindegewebe notwendig ist."
        },
        {
          "title": "Welches Vitamin ist wichtig für die Sehkraft?",
          "hidden_answer": "Vitamin A spielt eine wichtige Rolle für die Sehkraft, insbesondere für das Sehen bei schwachem Licht."
        },
        {
          "title": "Was ist die Hauptfunktion von Vitamin K?",
          "hidden_answer": "Vitamin K ist entscheidend für die Blutgerinnung und hilft dem Körper, Blutungen zu stoppen, indem es die Synthese von Gerinnungsfaktoren unterstützt."
        },
        {
          "title": "Was ist Beriberi und welches Vitamin ist damit verbunden?",
          "hidden_answer": "Beriberi ist eine Erkrankung, die durch einen Mangel an Vitamin B1 (Thiamin) verursacht wird und das Nervensystem sowie das Herz beeinträchtigen kann."
        },
        {
          "title": "Wie kann der Körper Vitamin D selbst herstellen?",
          "hidden_answer": "Der Körper kann Vitamin D durch Sonneneinstrahlung auf die Haut synthetisieren, was für die Kalziumaufnahme und Knochengesundheit wichtig ist."
        },
        {
          "title": "Welches Vitamin wird oft mit der Energieproduktion in Verbindung gebracht?",
          "hidden_answer": "Vitamin B12 ist wichtig für die Energieproduktion und das Nervensystem, da es an der Bildung roter Blutkörperchen beteiligt ist."
        },
        {
          "title": "Was passiert bei einem Vitamin-E-Mangel?",
          "hidden_answer": "Ein Vitamin-E-Mangel kann zu neurologischen Problemen, Muskelschwäche und einer Schädigung der Nerven führen."
        },
      ],
    },
    //  End of parent tab 3
  ],
};
