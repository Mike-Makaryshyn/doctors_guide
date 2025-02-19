export default {
  path: "gerinnungsdiagnostik",
  // http://localhost:5173/trafarette/gerinnungsdiagnostik
  content: [
    {
      id: 1,
      title: "Gerinnungsdiagnostik",
      childTabs: [
        {
            "id": 1,
            "title": "1. Definition",
            "textWithFormatting": `<div>
                <p><b>Die Gerinnungsdiagnostik</b> (oder Gerinnungsstatus) umfasst eine Reihe von labormedizinischen Untersuchungsverfahren zur Überprüfung der <a href="/trafarette/gerinnung">Gerinnungsfaktor</a>. Sie dient dazu, angeborene oder erworbene Gerinnungsstörungen zu erkennen und zu diagnostizieren. Die gemessenen Laborparameter werden als <b>Gerinnungswerte</b> bezeichnet.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "2. Material für die Analyse",
            "textWithFormatting": `<div>
                <p>Zur Bestimmung der Gerinnungswerte sind folgende Materialien erforderlich:</p>
                <ul>
                    <li>• <a href="/trafarette/edta">EDTA-Blut</a></li>
                    <li>• 5 ml <a href="/trafarette/citrat">Citratplasma</a> </li>
                </ul>
            </div>`
        },
        {
            "id": 3,
            "title": "3. Parameter der Gerinnungsdiagnostik",
            "textWithFormatting": `<div>
                <h3><b>Basisdiagnostik</b></h3>
                <p>Die Basisdiagnostik umfasst folgende Untersuchungen:</p>
                <ul>
                    <li>• <b><a href="/trafarette/gerinnungsanamnese">Gerinnungsanamnese</a>:</b> Erhebung der persönlichen und familiären Blutungsneigung.</li>
                    <li>• <b><a href="/trafarette/kleinesblutbild">Kleines Blutbild:</a></b> Bestimmung der Hämoglobinkonzentration und der Thrombozytenzahl, um Anämien und grundlegende Blutzellveränderungen festzustellen.</li>
                    <li>• <b><a href="/trafarette/quick">Quick-Wert:</a></b> (Prothrombinzeit, PTZ) bzw. INR: Diese Werte geben Auskunft über den extrinsischen Weg der <a href="/trafarette/gerinnung">Gerinnung</a>.</li>
                    <li>• <b><a href="/trafarette/aptt">Aktivierte partielle Thromboplastinzeit (aPTT):</a></b> Dient zur Überprüfung des intrinsischen Gerinnungsweges.</li>
                </ul>
                <p>Mit diesen Parametern können die meisten Ursachen einer Blutungsneigung erfasst werden. Thrombozytenfunktionsstörungen werden jedoch hier nicht erfasst und bedürfen einer spezifischen Thrombozytenfunktionsdiagnostik.</p>
    
                <h4><b>Wichtige Hinweise zur Basisdiagnostik:</b></h4>
                <ul>
                    <li>• Die Globalteste (Quick und aPTT) erfassen den <a href="/trafarette/faktorVIII">Faktor VIII (Antihämophiles Globulin A)</a> nicht, da dessen Wirkung erst nach der Gerinnselbildung eintritt.</li>
                    <li>• Ein normaler Hämoglobinwert schließt eine Blutung nicht aus, da diese durch gesteigerte Erythropoese kompensiert werden kann. Bei klinischem Verdacht sollte daher auch die Retikulozytenzahl bestimmt werden.</li>
                    <li>• Die Diagnostik von Gerinnungsstörungen im Sinne einer Thrombophilie wird in einem gesonderten Schema <a href="/trafarette/thrombophilie">(Thrombophiliediagnostik)</a> durchgeführt.</li>
                </ul>
    
                <h4><b>Überblick über Globaltests und mögliche Ursachen</b></h4>
                <p>Nachfolgend eine Übersicht möglicher Konstellationen in den Globaltests sowie deren mögliche Ursachen und diagnostische Hinweise:</p>
                <table>
                    <tr>
                        <th><b>Quick-Wert</b></th>
                        <th><b>aPTT</b></th>
                        <th><b>Betroffener Abschnitt der Hämostase</b></th>
                        <th><b>Mögliche Ursachen</b></th>
                        <th><b>Weitere diagnostische Hinweise</b></th>
                    </tr>
                    <tr>
                        <td>vermindert</td>
                        <td>verlängert</td>
                        <td>intrinsisch/extrinsisch oder gemeinsame Endstrecke</td>
                        <td>Vitamin-K-Mangel, <a href="/trafarette/antikoagulanzien">Antikoagulation</a> (z.B. Cumarin-Derivate)</td>
                        <td>pathologische Leberwerte bei Leberinsuffizienz, Thrombozytopenie bei Verbrauchskoagulopathie</td>
                    </tr>
                    <tr>
                        <td>normal</td>
                        <td>verlängert</td>
                        <td>intrinsisch</td>
                        <td>Antikoagulation mit unfraktioniertem Heparin</td>
                        <td>Normale Blutungszeit bei <a href="/trafarette/haemophiliaa">Hämophilie A</a>/<a href="/trafarette/haemophiliab">Hämophilie B</a>, verlängerte Blutungszeit bei <a href="/trafarette/willebrandjürgenssyndrom">Willebrand-Jürgens-Syndrom (vWS)</a></td>
                    </tr>
                    <tr>
                        <td>vermindert</td>
                        <td>normal</td>
                        <td>extrinsisch</td>
                        <td><a href="/trafarette/faktorVII">Faktor-VII-Mangel</a></td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>normal</td>
                        <td>normal</td>
                        <td>Quervernetzung von Fibrin</td>
                        <td><a href="/trafarette/haemophiliaa">Faktor-XIII-Mangel</a></td>
                        <td>Postoperative Nachblutungen, Wundheilungsstörungen</td>
                    </tr>
                </table>
    
                <h3><b>Erweiterte Diagnostik</b></h3>
                <p>Bei Bedarf kann die Gerinnungsdiagnostik durch zusätzliche Laborparameter erweitert werden, um spezifischere Ursachen abzuklären:</p>
                <ul>
                    <li>• <a href="/trafarette/faktorI">Faktor I (Fibrinogen)</a></li>
                    <li>• <a href="/trafarette/antithrombin">Antithrombin</a></li>
                    <li>• <a href="/trafarette/ddimerte">D-Dimere</a></li>
                    <li>• <a href="/trafarette/thrombinzeit">Thrombinzeit (TZ)</a></li>
                    <li>• <a href="/trafarette/reptilasezeit">Reptilasezeit (RZ)</a></li>
                    <li>• <a href="/trafarette/ecarinclottingtime">Ecarin-Clotting-Time (ECT)</a></li>
                    <li>• <a href="/trafarette/aktiviertegerinnungszeit">Aktivierte Gerinnungszeit (ACT)</a></li>
                    <li>• <a href="/trafarette/antifaktorxa">Anti-Faktor Xa-Aktivität</a></li>
                    <li>• <a href="/trafarette/lupusantikoagulans">Lupus-Antikoagulans (LA)</a></li>
                    <li>• <a href="/trafarette/plasmamischversuch">Plasmamischversuch</a></li>
                    <li>• <a href="/trafarette/einzelfaktorenanalyse">Einzelfaktorenanalyse</a></li>
                </ul>
                <p>Diese zusätzlichen Tests können detaillierte Informationen über spezifische <a href="/trafarette/gerinnung">Gerinnungsfaktoren</a> und Mechanismen liefern, insbesondere bei Verdacht auf komplexe oder seltene Gerinnungsstörungen.</p>
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
          "title": "Welche Form von Vitamin K wird hauptsächlich von Pflanzen aufgenommen?",
          "answers": [
            {
              "name": "Vitamin K2",
              "isCorrect": false
            },
            {
              "name": "Vitamin K1",
              "isCorrect": true
            },
            {
              "name": "Vitamin K3",
              "isCorrect": false
            },
            {
              "name": "Vitamin D",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher Vitamin-K-Typ wird im menschlichen Darm von Bakterien produziert?",
          "answers": [
            {
              "name": "Vitamin C",
              "isCorrect": false
            },
            {
              "name": "Vitamin K2",
              "isCorrect": true
            },
            {
              "name": "Vitamin K1",
              "isCorrect": false
            },
            {
              "name": "Vitamin K3",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Form von Vitamin K wird hauptsächlich in fermentierten Lebensmitteln gefunden?",
          "answers": [
            {
              "name": "Vitamin A",
              "isCorrect": false
            },
            {
              "name": "Vitamin K3",
              "isCorrect": false
            },
            {
              "name": "Vitamin K1",
              "isCorrect": false
            },
            {
              "name": "Vitamin K2",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Rolle spielt Vitamin K im Körper?",
          "answers": [
            {
              "name": "Es stärkt das Immunsystem",
              "isCorrect": false
            },
            {
              "name": "Es hilft bei der Calciumaufnahme",
              "isCorrect": false
            },
            {
              "name": "Es reguliert den Zuckerhaushalt",
              "isCorrect": false
            },
            {
              "name": "Es unterstützt die Blutgerinnung",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Lebensmittel sind besonders reich an Vitamin K1?",
          "answers": [
            {
              "name": "Milchprodukte",
              "isCorrect": false
            },
            {
              "name": "Grünes Blattgemüse",
              "isCorrect": true
            },
            {
              "name": "Fleisch",
              "isCorrect": false
            },
            {
              "name": "Zitrusfrüchte",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Vitamin-K-Form hat die längste Halbwertszeit im Blut?",
          "answers": [
            {
              "name": "Vitamin K1",
              "isCorrect": false
            },
            {
              "name": "Vitamin D3",
              "isCorrect": false
            },
            {
              "name": "Vitamin K3",
              "isCorrect": false
            },
            {
              "name": "Vitamin K2 (MK-7)",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welches Enzym benötigt Vitamin K als Kofaktor?",
          "answers": [
            {
              "name": "Pepsin",
              "isCorrect": false
            },
            {
              "name": "γ-Glutamylcarboxylase",
              "isCorrect": true
            },
            {
              "name": "Lipase",
              "isCorrect": false
            },
            {
              "name": "Amylase",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Risikogruppe hat ein erhöhtes Risiko für einen Vitamin-K-Mangel?",
          "answers": [
            {
              "name": "Neugeborene",
              "isCorrect": true
            },
            {
              "name": "Athleten",
              "isCorrect": false
            },
            {
              "name": "Erwachsene",
              "isCorrect": false
            },
            {
              "name": "Personen mit hohem Cholesterin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Art von Lebensmitteln ist besonders reich an Vitamin K2?",
          "answers": [
            {
              "name": "Fermentierte Lebensmittel",
              "isCorrect": true
            },
            {
              "name": "Fisch",
              "isCorrect": false
            },
            {
              "name": "Frisches Obst",
              "isCorrect": false
            },
            {
              "name": "Nüsse",
              "isCorrect": false
            }
          ]
        },
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        [
          {
            "title": "Warum ist Vitamin K wichtig für die Blutgerinnung?",
            "hidden_answer": "Vitamin K ist entscheidend für die Aktivierung von Gerinnungsfaktoren, die notwendig sind, um Blutungen zu stoppen."
          },
          {
            "title": "Welche Vitamin-K-Form wird hauptsächlich in grünem Blattgemüse gefunden?",
            "hidden_answer": "Vitamin K1 (Phyllochinon) wird hauptsächlich in grünem Blattgemüse wie Spinat und Grünkohl gefunden."
          },
          {
            "title": "Welche Rolle spielt Vitamin K2 im Körper?",
            "hidden_answer": "Vitamin K2 unterstützt die Gesundheit von Knochen und Arterien, indem es Proteine aktiviert, die Calcium binden und Verkalkungen vorbeugen."
          },
          {
            "title": "Wie wird Vitamin K im Körper aufgenommen?",
            "hidden_answer": "Vitamin K wird fettlöslich im Dünndarm aufgenommen, wobei Vitamin K1 durch aktiven Transport und Vitamin K2 durch passive Diffusion aufgenommen wird."
          },
          {
            "title": "Warum haben Neugeborene ein erhöhtes Risiko für einen Vitamin-K-Mangel?",
            "hidden_answer": "Neugeborene haben ein erhöhtes Risiko für einen Vitamin-K-Mangel, weil Vitamin K schlecht über die Plazenta transportiert wird und Muttermilch nur geringe Mengen enthält."
          },
          {
            "title": "Welche Funktion hat Vitamin K im Knochenstoffwechsel?",
            "hidden_answer": "Vitamin K aktiviert Osteocalcin, ein Protein, das Calcium im Knochen bindet und zur Knochengesundheit beiträgt."
          },
          {
            "title": "Welche Form von Vitamin K wird im menschlichen Darm von Bakterien produziert?",
            "hidden_answer": "Vitamin K2 (Menachinon) wird von Darmbakterien wie Escherichia coli produziert."
          },
          {
            "title": "Wie wirkt sich ein Vitamin-K-Mangel auf die Gesundheit aus?",
            "hidden_answer": "Ein Vitamin-K-Mangel kann zu schwerwiegenden Blutgerinnungsstörungen und einer verminderten Knochendichte führen."
          },
          {
            "title": "Welche Lebensmittel sind besonders reich an Vitamin K2?",
            "hidden_answer": "Fermentierte Lebensmittel wie Nattō, Käse und Quark sind besonders reich an Vitamin K2, insbesondere der Form MK-7."
          },
          {
            "title": "Wie wird Vitamin K in der Leber verwendet?",
            "hidden_answer": "In der Leber wird Vitamin K für die Synthese von Gerinnungsfaktoren verwendet, die für die Blutgerinnung notwendig sind."
          }
        ],
      ],
    },
    //  End of parent tab 3
  ],
};
