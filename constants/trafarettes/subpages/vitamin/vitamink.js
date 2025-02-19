export default {
  path: "vitamink",
  // http://localhost:5173/trafarette/vitamink
  content: [
    {
      id: 1,
      title: "Vitamin K",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Hämophilie ist eine genetisch bedingte Blutgerinnungsstörung, die vor allem Männer betrifft. Patienten mit Hämophilie haben eine verzögerte oder stark beeinträchtigte Blutgerinnung, was zu spontanen Blutungen führen kann, die oft ohne sichtbare äußere Verletzungen auftreten.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Struktur und Klassifikation",
          textWithFormatting: `<div>
            <p>Die K-Vitamine (benannt nach „Koagulation“), gehören zu den fettlöslichen Vitaminen und umfassen verschiedene chemische Substanzen, die unter dem Sammelbegriff Vitamin K zusammengefasst werden. Sie teilen eine gemeinsame Grundstruktur, das 2-Methyl-1,4-Naphthochinon (Menadion), an das unterschiedlich lange Seitenketten gebunden sind. Diese Struktur ist entscheidend für ihre biologische Funktion. Vitamin K ist ein Kofaktor für das Enzym γ-Glutamylcarboxylase, das in vielen physiologischen Prozessen eine zentrale Rolle spielt, darunter die <a href="/trafarette/gerinnung">Blutgerinnung</a>, der Knochenstoffwechsel und die Regulation des Zellwachstums.</p>
          </div>`,
        },
        {
          id: 3,
          title: "3. Vertreter der K-Vitamine",
          textWithFormatting: `<div>
            <ul>
              <li><b>Vitamin K1 (Phyllochinon):</b> Dieses Vitamin kommt hauptsächlich in Pflanzen vor, insbesondere in den Chloroplasten grüner Pflanzen, und ist für die Photosynthese unverzichtbar. Vitamin K1 wird über die Nahrung aufgenommen und stellt etwa 75–90 % der insgesamt aufgenommenen Vitamin-K-Menge dar. Es enthält eine Phythyl-Seitenkette mit 20 Kohlenstoffatomen und hat eine relativ geringe Bioverfügbarkeit, die durch die Bindung an pflanzliche Zellwände beeinflusst wird.</li>
              <li><b>Vitamin K2 (Menachinon):</b> Diese Form wird von Bakterien produziert, unter anderem von denen im menschlichen Darm (z. B. Escherichia coli). Es gibt verschiedene Menachinone, die sich durch die Länge ihrer Isoprenoid-Seitenkette unterscheiden. Die gebräuchlichsten Menachinone sind MK-4 und MK-7, wobei MK-4 aus K1 im Körper umgewandelt wird, während MK-7 vor allem in fermentierten Lebensmitteln vorkommt. Vitamin K2 hat eine bessere Bioverfügbarkeit als K1, insbesondere bei den längerkettigen Menachinonen wie MK-7, die im Körper länger aktiv bleiben.</li>
              <li><b>Vitamin K3 (Menadion):</b> Dies ist eine synthetische Form von Vitamin K, die in der Vergangenheit als Provitamin verwendet wurde. Sie besitzt keine Seitenkette und ist wasserlöslich, was ihre biologische Aktivität einschränkt. Im Körper wird K3 in seine aktive Form umgewandelt, jedoch wird es heute wegen potenzieller Nebenwirkungen kaum noch eingesetzt.</li>
            </ul>
          </div>`,
        },
        {
          id: 4,
          title: "4. Resorption und Stoffwechsel",
          textWithFormatting: `<div>
            <p>K-Vitamine sind fettlöslich und benötigen Gallensäuren sowie Pankreasenzyme, um aus der Nahrung absorbiert zu werden. Vitamin K1 wird hauptsächlich im oberen Dünndarm (proximalen Ileum) durch einen aktiven Transportmechanismus aufgenommen, während Vitamin K2 (vor allem die längerkettigen Formen) im gesamten Darm, hauptsächlich jedoch im Kolon, über passive Diffusion resorbiert wird.</p>
            <ul>
              <li><b>Bioverfügbarkeit:</b> Die Aufnahme von Vitamin K1 aus pflanzlichen Quellen ist relativ niedrig, etwa 3–50 % des verzehrten Vitamin K1 wird absorbiert. Hingegen wird Vitamin K2, insbesondere MK-7 und andere längerkettige Formen, besser aufgenommen. Diese Formen weisen auch eine deutlich längere Halbwertszeit im Blut auf: Während Vitamin K1 nach etwa 1-2 Stunden abgebaut wird, bleibt MK-7 bis zu 72 Stunden im Blut aktiv. Die Bioverfügbarkeit von Vitamin K2 ist zudem durch das Vorhandensein von Nahrungsfetten erhöht, da die fettlöslichen Vitamine besser mit Fetten resorbiert werden.</li>
              <li><b>Stoffwechsel und Transport:</b> Nach der Absorption wird Vitamin K1 in den Enterozyten (Darmzellen) an Chylomikronen gebunden und über das lymphatische System in die Blutbahn transportiert. In der Leber wird es in verschiedene Gewebe weitertransportiert, wo es für die Synthese von <a href="link_to_page_faktorII">Gerinnungsfaktoren</a> und anderen Proteinen verwendet wird. Vitamin K2 wird ebenfalls in Lipoproteinen (VLDL und LDL) transportiert, gelangt aber schneller und effizienter in periphere Gewebe wie Knochen und Gefäße.</li>
            </ul>
          </div>`,
        },
        {
          id: 5,
          title: "5. Biologische Funktion",
          textWithFormatting: `<div>
            <p>Die wichtigste Funktion von Vitamin K ist die Unterstützung der <a href="/trafarette/gerinnung">Blutgerinnung</a>. Dies geschieht durch die γ-Carboxylierung von Glutaminsäureresten in bestimmten Proteinen, die Vitamin K-abhängigen Proteine (VKDP) genannt werden. Durch diesen Prozess entstehen γ-Carboxyglutaminsäurereste (Gla), die Calciumionen binden können. Diese Bindung ist entscheidend für die Aktivierung der <a href="/trafarette/faktorII">Faktor II (Prothrombin)</a>, <a href="/trafarette/faktorVII">Faktor VII (Prokonvertin)</a>, <a href="/trafarette/faktorIX">Faktor IX (Antihämophiles Globulin B oder Christmas-Faktor)</a> und <a href="/trafarette/faktorX">Faktor X (Stuart-Prower-Faktor)</a>, sowie der gerinnungshemmenden Proteine <a href="/trafarette/proteinc">Protein C</a>, <a href="/trafarette/proteins">Protein S</a> und Z. Ohne Vitamin K können diese Faktoren ihre Rolle im <a href="/trafarette/gerinnung">Gerinnungssystem</a> nicht erfüllen, was zu schwerwiegenden Blutgerinnungsstörungen führt.</p>
            <p>Darüber hinaus ist Vitamin K essentiell für die Aktivierung von Osteocalcin, einem Protein, das von den Osteoblasten im Knochen gebildet wird. Osteocalcin bindet Calcium und unterstützt die Mineralisierung des Knochens. Eine unzureichende Versorgung mit Vitamin K kann zu einer verminderten Knochendichte und einem erhöhten Risiko für Osteoporose führen.</p>
            <p>Vitamin K2 spielt zusätzlich eine Rolle bei der Regulierung der Gefäßgesundheit, indem es Proteine aktiviert, die Calcium aus den Arterien entfernen und so Gefäßverkalkungen vorbeugen. Studien wie die Rotterdam-Herz-Studie haben gezeigt, dass eine erhöhte Aufnahme von Vitamin K2 das Risiko von Herzerkrankungen und Gefäßverkalkungen signifikant reduzieren kann.</p>
          </div>`,
        },
        {
          id: 6,
          title: "6. Vorkommen in der Nahrung",
          textWithFormatting: `<div>
            <ul>
              <li><b>Vitamin K1 (Phyllochinon):</b> kommt vor allem in grünen, chlorophyllhaltigen Pflanzen vor. Besonders hohe Konzentrationen finden sich in Spinat, Grünkohl, Brokkoli, Petersilie und verschiedenen Salatsorten. Auch pflanzliche Öle wie Soja- und Rapsöl enthalten Vitamin K1.</li>
              <li><b>Vitamin K2 (Menachinon):</b> findet sich hauptsächlich in tierischen Lebensmitteln und fermentierten Produkten. Hohe Mengen an MK-4 sind in Hühnerfleisch, Leber und Eigelb enthalten. Fermentierte Produkte wie Käse, Quark und das japanische Gericht Nattō (fermentierte Sojabohnen) sind besonders reich an MK-7 und anderen längerkettigen Menachinonen.</li>
            </ul>
          </div>`,
        },
        {
          id: 7,
          title: "7. Täglicher Bedarf und Empfehlungen",
          textWithFormatting: `<div>
            <p>Die Europäische Behörde für Lebensmittelsicherheit (EFSA) empfiehlt eine tägliche Zufuhr von 1 µg Vitamin K pro Kilogramm Körpergewicht. Für Erwachsene bedeutet dies etwa 70 µg Vitamin K pro Tag. Diese Empfehlung schließt Vitamin K1 und K2 ein, ohne eine spezifische Unterscheidung zwischen beiden zu treffen. Das Bundesinstitut für Risikobewertung (BfR) gibt ähnliche Empfehlungen, differenziert jedoch zwischen verschiedenen Altersgruppen. Für Schwangere und Stillende liegt der tägliche Bedarf bei etwa 60 µg.</p>
            <p>Neugeborene haben ein erhöhtes Risiko für einen Vitamin-K-Mangel, da Vitamin K nicht gut plazentagängig ist und die Muttermilch nur geringe Mengen enthält. Daher wird eine Vitamin-K-Prophylaxe bei Neugeborenen dringend empfohlen, um das Risiko einer Vitamin-K-Mangelblutung (VKMB) zu verhindern.</p>
          </div>`,
        },
        {
          id: 8,
          title: "8. Hypovitaminose und Überdosierung",
          textWithFormatting: `<div>
            <p>Ein Vitamin-K-Mangel kann schwerwiegende gesundheitliche Folgen haben, insbesondere für die <a href="/trafarette/gerinnung">Blutgerinnung</a> und den Knochenstoffwechsel. Mangelerscheinungen treten selten auf, können jedoch in bestimmten Risikogruppen wie Neugeborenen, Menschen mit Fettstoffwechselstörungen oder bei Langzeitbehandlung mit Antibiotika auftreten. Cumarin-basierte Gerinnungshemmer wie <a href="link_to_page_antikoagulanzien">Warfarin</a> und Phenprocoumon wirken als Vitamin-K-Antagonisten und können bei Überdosierung zu einem funktionellen Vitamin-K-Mangel führen.</p>
            <p>Eine Überdosierung von Vitamin K ist selten und zeigt keine akuten toxischen Effekte. Hohe Dosen von Vitamin K1 werden gut vertragen, jedoch kann die Gabe von hohen Mengen Menadion (Vitamin K3) toxische Effekte haben, insbesondere bei Neugeborenen, wo es zu Hämolyse und Hyperbilirubinämie führen kann.</p>
          </div>`,
        },
        {
          id: 9,
          title: "9. Fazit",
          textWithFormatting: `<div>
            <p>Vitamin K ist essenziell für die <a href="/trafarette/gerinnung">Blutgerinnung</a>, den Knochenstoffwechsel und die Gefäßgesundheit. Während Vitamin K1 hauptsächlich aus pflanzlichen Quellen stammt und für die Blutgerinnung von Bedeutung ist, spielt Vitamin K2 eine Schlüsselrolle bei der Prävention von Gefäßverkalkungen und der Unterstützung der Knochengesundheit. Eine ausgewogene Ernährung, die sowohl grüne Blattgemüse als auch fermentierte Lebensmittel enthält, sichert die ausreichende Versorgung mit beiden Vitamin-K-Formen.</p>
          </div>`,
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
