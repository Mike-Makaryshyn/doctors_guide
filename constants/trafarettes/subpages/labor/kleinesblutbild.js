export default {
  path: "kleinesblutbild",
  // http://localhost:5173/trafarette/kleinesblutbild
  content: [
    {
      id: 1,
      title: "Gerinnungsdiagnostik",
      childTabs: [
        {
            "id": 1,
            "title": "1. Definition",
            "textWithFormatting": `<div>
                <p><b>Das kleine Blutbild</b> ist eine grundlegende labormedizinische Untersuchung, die einen Überblick über die wichtigsten zellulären Bestandteile des Blutes bietet. Es wird aus <a href="/trafarette/edta">EDTA-Blut</a> erstellt und dient der Beurteilung von Erythrozyten, Leukozyten und Thrombozyten sowie weiteren Parametern, die wichtige Hinweise auf den Gesundheitszustand des Blutes geben.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "2. Werte im kleinen Blutbild",
            "textWithFormatting": `<div>
                <p>Das kleine Blutbild umfasst folgende Parameter:</p>
                <ul>
                    <li>• <b>Erythrozytenzahl (Ery):</b> Anzahl der roten Blutkörperchen pro Volumen.</li>
                    <li>• <b>Hämoglobinkonzentration (Hb):</b> Menge an Hämoglobin in mmol/l oder g/dl.</li>
                    <li>• <b>Hämatokrit (Hk):</b> Verhältnis der festen Blutbestandteile zum Blutvolumen.</li>
                    <li>• <b>Erythrozyten-Indices:</b>
                        <ul>
                            <li>• <b>MCH:</b> Durchschnittliche Menge an Hämoglobin pro Erythrozyt.</li>
                            <li>• <b>MCHC:</b> Hämoglobinkonzentration in einem bestimmten Volumen der Erythrozyten.</li>
                            <li>• <b>MCV:</b> Durchschnittliches Volumen eines einzelnen Erythrozyten.</li>
                            <li>• <b>RDW:</b> Maß für die Größenverteilung der Erythrozyten.</li>
                        </ul>
                    </li>
                    <li>• <b>Leukozytenzahl (WBC):</b> Anzahl der weißen Blutkörperchen pro Volumen.</li>
                    <li>• <b>Thrombozytenzahl (PLT):</b> Anzahl der Blutplättchen pro Volumen.</li>
                    <li>• <b>Mittleres Thrombozytenvolumen (MPV):</b> Durchschnittliches Volumen der Thrombozyten.</li>
                </ul>
            </div>`
        },
        {
            "id": 3,
            "title": "3. Material",
            "textWithFormatting": `<div>
                <p>Für die Erstellung des kleinen Blutbildes werden <b>4 ml <a href="/trafarette/edta">EDTA-Blut</a></b> benötigt. Bei Kindern genügt eine geringere Menge, meist mindestens 0,25 ml.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "4. Messmethode",
            "textWithFormatting": `<div>
                <p>Die Bestimmung erfolgt routinemäßig mithilfe moderner Hämatologiegeräte, die entweder die <b>Impedanzänderung</b> oder die <b>Durchflusszytometrie</b> zur Zellanalyse nutzen. Zur detaillierten Beurteilung von Formveränderungen der Erythrozyten, wie z.B. bei <b>Poikilozytose</b>, ist eine mikroskopische Analyse eines Blutausstrichs erforderlich.</p>
            </div>`
        },
        {
            "id": 5,
            "title": "5. Referenzbereich",
            "textWithFormatting": `<div>
                <p>Die Normwerte des kleinen Blutbildes sind alters- und geschlechtsabhängig und können laborbedingt variieren. Die folgenden Referenzwerte bieten einen allgemeinen Überblick, spezifische Laborwerte sind jedoch individuell vom Befundausdruck abzulesen.</p>
                <h4>Erwachsene</h4>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Abkürzungen</th>
                        <th>Frauen</th>
                        <th>Männer</th>
                    </tr>
                    <tr>
                        <td>Leukozytenzahl [µl]</td>
                        <td>WBC</td>
                        <td>4.000–10.000</td>
                        <td>4.000–10.000</td>
                    </tr>
                    <tr>
                        <td>Hämoglobinkonzentration [g/dl]</td>
                        <td>Hb</td>
                        <td>12–16</td>
                        <td>14–18</td>
                    </tr>
                    <tr>
                        <td>Hämatokrit [%]</td>
                        <td>Hkt</td>
                        <td>37–47</td>
                        <td>40–54</td>
                    </tr>
                    <tr>
                        <td>Erythrozytenzahl [Mio./µl]</td>
                        <td>RBC</td>
                        <td>4,3–5,2</td>
                        <td>4,8–5,9</td>
                    </tr>
                    <tr>
                        <td>RDW [%]</td>
                        <td>RDW</td>
                        <td>11,9–14,5</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>MCH [pg]</td>
                        <td>MCH</td>
                        <td>28–34</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>MCV [fl]</td>
                        <td>MCV</td>
                        <td>78–94</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>MCHC [g/dl]</td>
                        <td>MCHC</td>
                        <td>30–36</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Thrombozytenzahl [µl]</td>
                        <td>PLT</td>
                        <td>150.000–400.000</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>MPV [fl]</td>
                        <td>MPV</td>
                        <td>7–12</td>
                        <td>-</td>
                    </tr>
                </table>
                <h4>Kinder</h4>
                <p>Die Normwerte für Kinder variieren nach Alter:</p>
                <table>
                    <tr>
                        <th>Alter</th>
                        <th>Leukozyten (/nl)</th>
                        <th>Hb (g/dl)</th>
                        <th>Hkt (%)</th>
                        <th>Ery (Mio./µl)</th>
                        <th>MCH (pg)</th>
                        <th>MCV (fl)</th>
                        <th>MCHC (g/dl)</th>
                    </tr>
                    <tr>
                        <td>1. Lebenstag</td>
                        <td>9,4–34,0</td>
                        <td>16,8–25,0</td>
                        <td>-</td>
                        <td>4,5–6,5</td>
                        <td>33,0–38,0</td>
                        <td>99–113</td>
                        <td>31,8–35,2</td>
                    </tr>
                    <tr>
                        <td>2–6 Jahre</td>
                        <td>5,0–17,0</td>
                        <td>10,8–14,3</td>
                        <td>34–41</td>
                        <td>4,3–5,5</td>
                        <td>23,0–29,0</td>
                        <td>68–84</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7–12 Jahre</td>
                        <td>4,5–13,5</td>
                        <td>11,3–14,9</td>
                        <td>37–43</td>
                        <td>4,5–5,5</td>
                        <td>24,0–30,0</td>
                        <td>71–87</td>
                        <td>32,0–36,0</td>
                    </tr>
                    <tr>
                        <td>13–17 Jahre (m)</td>
                        <td>4,5–13,0</td>
                        <td>14,0–18,0</td>
                        <td>39–47</td>
                        <td>4,8–5,7</td>
                        <td>25,0–31,0</td>
                        <td>70–86</td>
                        <td>32,0–36,0</td>
                    </tr>
                    <tr>
                        <td>13–17 Jahre (w)</td>
                        <td>4,5–13,0</td>
                        <td>12,0–16,0</td>
                        <td>36–44</td>
                        <td>4,3–5,5</td>
                        <td>26,0–32,0</td>
                        <td>71–87</td>
                        <td>32,0–36,0</td>
                    </tr>
                </table>
                <p>Für die Thrombozytenzahl gelten folgende altersabhängige Normwerte:</p>
                <ul>
                    <li>• 1. Lebensjahr: 100.000–250.000 /nl</li>
                    <li>• 2–6 Jahre: 150.000–350.000 /nl</li>
                    <li>• ab 7 Jahren: 200.000–400.000 /nl</li>
                </ul>
            </div>`
        },
        {
            "id": 6,
            "title": "6. Interpretation der Ergebnisse",
            "textWithFormatting": `<div>
                <h4><b>Veränderungen der Erythrozytenzahl</b></h4>
                <ul>
                    <li>• <b>Erniedrigte Werte:</b> Deuten auf verschiedene Formen von Anämie hin, z.B. hypochrome mikrozytäre, normochrome normozytäre oder hyperchrome makrozytäre Anämie.</li>
                    <li>• <b>Erhöhte Werte:</b> Hinweis auf Polyglobulie.</li>
                </ul>
                <h4><b>Veränderungen der Leukozytenzahl</b></h4>
                <ul>
                    <li>• <b>Erniedrigte Werte:</b> Deuten auf Leukopenie hin.</li>
                    <li>• <b>Erhöhte Werte:</b> Hinweis auf Leukozytose.</li>
                </ul>
                <h4><b>Veränderungen der Thrombozytenzahl</b></h4>
                <ul>
                    <li>• <b>Erniedrigte Werte:</b> Hinweis auf Thrombozytopenie oder Pseudothrombozytopenie.</li>
                    <li>• <b>Erhöhte Werte:</b> Hinweis auf Thrombozytose.</li>
                </ul>
                <p>Diese strukturierte Übersicht bietet einen umfassenden Überblick über die Inhalte und Interpretationsmöglichkeiten des kleinen Blutbildes.</p>
            </div>`
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
