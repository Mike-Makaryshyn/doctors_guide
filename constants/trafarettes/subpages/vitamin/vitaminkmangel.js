export default {
  path: "vitaminkmangel",
  // http://localhost:5173/trafarette/vitaminkmangel
  content: [
    {
      id: 1,
      title: "Vitamin K-Mangel",
      childTabs: [
        {
            "id": 1,
            "title": "1. Definition",
            "textWithFormatting": `<div>
                <p><strong>Vitamin-K-Mangel</strong> ist eine Hypovitaminose, die durch eine unzureichende Versorgung mit Vitamin K (Phyllochinon) charakterisiert ist. Ein zentrales Merkmal der Unterversorgung ist eine gestörte <a href="/trafarette/gerinnung">Blutgerinnung</a>.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "2. Referenzbereich",
            "textWithFormatting": `<div>
                <p>Bei Erwachsenen liegt die normale Plasmakonzentration von Vitamin K im Bereich von <strong>0,3 bis 1 ng/ml</strong>.</p>
            </div>`
        },
        {
            "id": 3,
            "title": "3. Nahrungszufuhr",
            "textWithFormatting": `<div>
                <p>Ein Vitamin-K-Mangel ist bei normaler Ernährung selten, da Vitamin K in ausreichender Menge in Lebensmitteln vorkommt und zusätzlich durch die Darmflora produziert wird. Die Deutsche Gesellschaft für Ernährung empfiehlt folgende tägliche Zufuhrmengen:</p>
                <ul>
                    <li><strong>60 µg</strong> für Frauen</li>
                    <li><strong>70 µg</strong> für Männer</li>
                    <li><strong>10-50 µg</strong> für Kinder</li>
                </ul>
                <p>Diese Mengen decken den Bedarf zur Synthese der Gerinnungsfaktoren in der Leber. Studien weisen jedoch darauf hin, dass für zusätzliche Funktionen von Vitamin K eventuell ein höherer Bedarf besteht.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "4. Ätiologie",
            "textWithFormatting": `<div>
                <p>Obwohl Vitamin-K-Mangel selten ist, können verschiedene Faktoren ihn fördern:</p>
                <ul>
                    <li><strong>Fehlernährung</strong> und Alkoholismus</li>
                    <li>Chronische <strong>Lebererkrankungen</strong></li>
                    <li>Chronische Magen-Darm-Erkrankungen (z. B. chronische Diarrhö, Morbus Crohn, Colitis ulcerosa)</li>
                    <li>Zystische Fibrose</li>
                    <li>Einnahme bestimmter Medikamente wie <strong>Cumarin-Derivate</strong>, Antibiotika, Antikonvulsiva oder Gallensäurebinder</li>
                    <li>Adipositas</li>
                </ul>
                <h4><strong>Magen-Darm-Erkrankungen</strong></h4>
                <p>Bei chronischen Magen-Darm-Erkrankungen ist die Aufnahme von Vitamin K über den Darm gestört.</p>
                <h4><strong>Lebererkrankungen</strong></h4>
                <p>Reduzierte Leberfunktion beeinträchtigt die Speicherung von Vitamin K im Lebergewebe.</p>
                <h4><strong>Medikamente</strong></h4>
                <p><a href="/trafarette/cumarinder">Cumarin-Derivate</a> hemmen die Vitamin-K-Epoxid-Reduktase, was zu einem künstlichen Vitamin-K-Mangel führt. Auch andere Medikamente beeinflussen den Vitamin-K-Spiegel negativ:</p>
                <ul>
                    <li><strong>Antibiotika</strong> stören die Darmflora und verringern somit die körpereigene Vitamin-K-Synthese.</li>
                    <li>Gallensäurebinder (z. B. Colestyramin, Colestipol) hemmen die Aufnahme fettlöslicher Nährstoffe, einschließlich Vitamin K.</li>
                    <li>Antikonvulsiva wie Phenytoin und Phenobarbital steigern den Vitamin-K-Abbau in der Leber.</li>
                    <li>Salicylate (z. B. <a href="/trafarette/ass">Aspirin</a>) senken den Vitamin-K-Spiegel.</li>
                </ul>
                <h4><strong>Adipositas</strong></h4>
                <p>Bei hohem Körperfettanteil kann es zur erhöhten Speicherung von Vitamin K im Fettgewebe kommen, was das Risiko eines funktionellen Mangels erhöht.</p>
                <h4><strong>Morbus haemorrhagicus neonatorum bei Neugeborenen</strong></h4>
                <p>Neugeborene haben in den ersten Lebenswochen aufgrund des geringen Vitamin-K-Gehalts in Kolostrum und Muttermilch sowie einer generell niedrigeren Vitamin-K-Konzentration ein erhöhtes Risiko für Vitamin-K-Mangel.</p>
            </div>`
        },
        {
            "id": 5,
            "title": "5. Pathophysiologie",
            "textWithFormatting": `<div>
                <p>Vitamin K ist wesentlich für die <a href="/trafarette/gerinnung">Blutgerinnung</a> und die Synthese von Gerinnungsfaktoren in der Leber, darunter:</p>
                <ul>
                    <li><a href="/trafarette/faktorII">Faktor II (Prothrombin)</a></li>
                    <li><a href="/trafarette/faktorVII">Faktor VII (Prokonvertin)</a></li>
                    <li><a href="/trafarette/faktorIX">Faktor IX (Antihämophiles Globulin B oder Christmas-Faktor)</a></li>
                    <li><a href="/trafarette/faktorX">Faktor X (Stuart-Prower-Faktor)</a></li>
                    <li><a href="/trafarette/proteinc">Protein C</a>, <a href="/trafarette/proteins">Protein S</a> und <a href="/trafarette/proteinz">Protein Z</a></li>
                </ul>
                <p>Als Cofaktor ist Vitamin K an der <strong>γ-Carboxylierung</strong> dieser Gerinnungsfaktoren beteiligt. Ein schwerer Vitamin-K-Mangel verlängert die Gerinnungszeit, was zu erhöhtem Blutungsrisiko, Hämatomen, Wundheilungsstörungen und Anämie führen kann.</p>
                <p>Zudem aktiviert Vitamin K Gla-Proteine, die gemeinsam mit Vitamin D den <strong>Calciumstoffwechsel</strong> regulieren. Ein Mangel fördert Erkrankungen wie Arteriosklerose, Osteoporose, Gelenkentzündungen und Insulinresistenz.</p>
            </div>`
        },
        {
            "id": 6,
            "title": "6. Therapie",
            "textWithFormatting": `<div>
                <p>Die Therapie bei Vitamin-K-Mangel umfasst die ausreichende Substitution von <a href="/trafarette/vitamink">Vitamin K</a> sowie die Behandlung zugrunde liegender Erkrankungen. Zur Vorbeugung von Blutungsneigung bei Neugeborenen wird im Rahmen der Vorsorgeuntersuchungen <strong>U1</strong>, <strong>U2</strong> und <strong>U3</strong> eine Vitamin-K-Prophylaxe empfohlen.</p>
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
