import img1 from '../../../../assets/whoschema.pdf';
export default {
  path: "schmerztherapie",
  // http://localhost:5173/trafarette/schmerztherapie, , <a href="/trafarette/schmerztherapie">Schmerztherapie</a>
  content: [
    {
      id: 1,
      title: "Schmerztherapie",
      childTabs: [
        {
          "id": 1,
          "title": "Definition",
          "textWithFormatting": `<div>
            <p><b>Die Schmerztherapie</b> umfasst alle medizinischen Behandlungsmaßnahmen, die darauf abzielen, Schmerzen zu lindern oder vollständig zu beseitigen. Sie wird sowohl bei akuten als auch bei chronischen Schmerzen angewendet und bildet einen zentralen Bereich der Algesiologie, auch bekannt als Schmerzmedizin.</p>
            <p>In Deutschland tragen spezialisierte Ärzte die Zusatzbezeichnung „Spezielle Schmerztherapie“, die eine qualifizierte Ausbildung und umfangreiche Erfahrung im Umgang mit Schmerzpatienten erfordert. Ziel ist es, nicht nur die Symptome zu bekämpfen, sondern die Lebensqualität der Betroffenen nachhaltig zu verbessern.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "Hintergrund",
          "textWithFormatting": `<div>
            <h3>Akute Schmerzen</h3>
            <p>Akute Schmerzen haben oft eine eindeutige Ursache, wie Verletzungen oder Erkrankungen, und dienen als Warnsignal des Körpers. Ihre Behandlung gehört zu den grundlegenden ärztlichen Maßnahmen und ist in nahezu allen medizinischen Fachrichtungen präsent – von der Notfallmedizin bis zur Chirurgie.</p>
            <h3>Chronische Schmerzen</h3>
            <p>Chronische Schmerzen, die länger als drei bis sechs Monate bestehen, stellen eine weitaus größere Herausforderung dar. Sie entwickeln sich häufig zu einer eigenständigen Erkrankung, der sogenannten Schmerzkrankheit. Diese geht oft mit körperlichen, psychischen und sozialen Belastungen einher, die eine multidisziplinäre Behandlung erfordern.</p>
            <p>Um die komplexen Anforderungen der Therapie chronischer Schmerzen zu erfüllen, wurden Schmerzkliniken und Schmerzambulanzen eingerichtet. Diese Zentren bieten spezialisierte Diagnostik und Therapieprogramme, oft unter Einbeziehung von Experten aus verschiedenen Disziplinen wie Neurologie, Psychologie und Physiotherapie.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "Maßnahmen der Schmerztherapie",
          "textWithFormatting": `<div>
            <p>Die Schmerztherapie nutzt ein breites Spektrum an Behandlungsmöglichkeiten, die individuell an die Bedürfnisse des Patienten angepasst werden. Dabei unterscheidet man zwischen <b>nichtinvasiven</b> und <b>invasiven Verfahren</b>:</p>
            <h3>Nichtinvasive Maßnahmen</h3>
            <ul>
              <li>• <b>Medikamentöse Therapie:</b> Einsatz von Schmerzmitteln und Begleitmedikationen.</li>
              <li>• <b>Physikalische Therapie:</b> Anwendungen wie Physiotherapie, Massagen oder Elektrotherapie.</li>
              <li>• <b>Psychotherapie:</b> Unterstützung bei der Bewältigung von Schmerz und den damit verbundenen psychischen Belastungen, etwa durch kognitive Verhaltenstherapie.</li>
            </ul>
            <h3>Interventionelle Schmerztherapie</h3>
            <p>Invasive oder minimal-invasive Verfahren werden vor allem dann eingesetzt, wenn andere Methoden keine ausreichende Wirkung zeigen. Beispiele:</p>
            <ul>
              <li>• <b>Nervenblockaden:</b> Injektionen von Lokalanästhetika oder Schmerzmitteln in die Nähe von Nerven.</li>
              <li>• <b>Neurolysen:</b> Zerstörung schmerzleitender Nervenfasern, z. B. durch chemische Substanzen oder Hitze.</li>
              <li>• <b>Rückenmarkstimulation:</b> Implantation von Elektroden, die die Schmerzweiterleitung im Rückenmark modulieren.</li>
            </ul>
          </div>`
        },
        {
          "id": 4,
          "title": "Das WHO-Stufenschema",
          "textWithFormatting": `<div>
          <img src="${img1}" alt="Aorta Diagram">
            <p>Die Weltgesundheitsorganisation (WHO) hat ein vierstufiges Schema entwickelt, das eine systematische und effektive Behandlung von Schmerzen ermöglicht. Es dient als Leitfaden für die Auswahl und Kombination von Schmerzmitteln und berücksichtigt die Intensität des Schmerzes sowie die individuellen Bedürfnisse des Patienten.</p>
            <h3>Stufen des <a href="/trafarette/whostufenschema">WHO-Stufenschema</a></h3>
            <table>
              <tr>
                <th>Stufe</th>
                <th>Medikamentöse Behandlung</th>
                <th>Beispiele</th>
              </tr>
              <tr>
                <td>Stufe 1</td>
                <td>Nicht-opioide Analgetika (ggf. mit Adjuvanzien)</td>
                <td>Paracetamol, Metamizol, NSAR (z. B. Ibuprofen, Diclofenac)</td>
              </tr>
              <tr>
                <td>Stufe 2</td>
                <td>Schwache Opioide (ggf. in Kombination mit Stufe 1 und Adjuvanzien)</td>
                <td>Tramadol, Tilidin</td>
              </tr>
              <tr>
                <td>Stufe 3</td>
                <td>Starke Opioide (ggf. kombiniert mit Stufe 1 und Adjuvanzien)</td>
                <td>Morphin, Fentanyl, Oxycodon</td>
              </tr>
              <tr>
                <td>Stufe 4</td>
                <td>Invasive Techniken</td>
                <td>Peridurale oder spinale Schmerzmittelgabe, periphere Lokalanästhesien, Ganglienblockaden</td>
              </tr>
            </table>
            <h3>Ergänzende Maßnahmen auf jeder Stufe</h3>
            <ul>
              <li>• <b>Physiotherapie:</b> Förderung der Mobilität und Schmerzlinderung durch gezielte Bewegungsübungen.</li>
              <li>• <b>Balneotherapie:</b> Anwendungen mit Wasser, z. B. Heilbäder oder Hydrotherapie.</li>
              <li>• <b>Psychologische Unterstützung:</b> Behandlung von Angstzuständen, Depressionen und Stress, die oft mit chronischen Schmerzen einhergehen.</li>
              <li>• <b>Komedikation:</b> Einsatz spezifischer Arzneimittel zur Verstärkung der analgetischen Wirkung oder zur Behandlung begleitender Symptome:</li>
              <ul>
                <li>• <b>Antidepressiva:</b> Besonders wirksam bei neuropathischen Schmerzen.</li>
                <li>• <b>Antiepileptika:</b> Linderung von Nervenschmerzen durch Modulation der Schmerzweiterleitung.</li>
                <li>• <b>Neuroleptika:</b> Für spezielle Schmerzsyndrome oder in der Palliativmedizin.</li>
                <li>• <b>Glukokortikoide:</b> Bei entzündungsbedingten Schmerzen.</li>
                <li>• <b>Bisphosphonate:</b> Zur Behandlung von Knochenschmerzen, etwa bei Metastasen.</li>
              </ul>
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
          "title": "Welche der folgenden Substanzen gehört zu den Nicht-Opioid-Analgetika?",
          "answers": [
            {
              "name": "Morphin",
              "isCorrect": false
            },
            {
              "name": "Ketamin",
              "isCorrect": false
            },
            {
              "name": "Paracetamol",
              "isCorrect": true
            },
            {
              "name": "Fentanyl",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was ist ein Hauptmerkmal von Opioid-Analgetika?",
          "answers": [
            {
              "name": "Hemmung der Prostaglandinsynthese",
              "isCorrect": false
            },
            {
              "name": "Förderung der Entzündungshemmung",
              "isCorrect": false
            },
            {
              "name": "Bindung an Opioidrezeptoren",
              "isCorrect": true
            },
            {
              "name": "Erhöhung der Schmerzempfindlichkeit",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Nebenwirkung ist typisch für Opioide?",
          "answers": [
            {
              "name": "Erhöhte Herzfrequenz",
              "isCorrect": false
            },
            {
              "name": "Kopfschmerzen",
              "isCorrect": false
            },
            {
              "name": "Blutdrucksenkung",
              "isCorrect": false
            },
            {
              "name": "Obstipation",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Substanz wird als Antidot bei einer Opioid-Überdosierung verwendet?",
          "answers": [
            {
              "name": "Diclofenac",
              "isCorrect": false
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
              "name": "Naloxon",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Analgetika-Gruppe wirkt über die Hemmung der Cyclooxygenase (COX)?",
          "answers": [
            {
              "name": "Triptane",
              "isCorrect": false
            },
            {
              "name": "Nicht-steroidale Antirheumatika (NSAR)",
              "isCorrect": true
            },
            {
              "name": "Opioide",
              "isCorrect": false
            },
            {
              "name": "Lokalanästhetika",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Aussage zur multimodalen Schmerztherapie ist korrekt?",
          "answers": [
            {
              "name": "Sie wird nur bei akuten Schmerzen angewendet.",
              "isCorrect": false
            },
            {
              "name": "Sie kombiniert medikamentöse und nicht-medikamentöse Verfahren.",
              "isCorrect": true
            },
            {
              "name": "Sie basiert ausschließlich auf Opioid-Therapien.",
              "isCorrect": false
            },
            {
              "name": "Sie ist ausschließlich für chronische Rückenschmerzen geeignet.",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was ist der Unterschied zwischen einem peripheren und einem zentralen Analgetikum?",
          "answers": [
            {
              "name": "Periphere Analgetika beeinflussen die Muskelaktivität.",
              "isCorrect": false
            },
            {
              "name": "Periphere Analgetika hemmen die Ausschüttung von Endorphinen.",
              "isCorrect": false
            },
            {
              "name": "Zentrale Analgetika wirken direkt an der Schmerzquelle.",
              "isCorrect": false
            },
            {
              "name": "Zentrale Analgetika wirken im Gehirn und Rückenmark.",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Substanz ist ein schwaches Opioid?",
          "answers": [
            {
              "name": "Ibuprofen",
              "isCorrect": false
            },
            {
              "name": "Fentanyl",
              "isCorrect": false
            },
            {
              "name": "Oxycodon",
              "isCorrect": false
            },
            {
              "name": "Tramadol",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Schmerzform wird mit Antikonvulsiva wie Gabapentin behandelt?",
          "answers": [
            {
              "name": "Entzündliche Schmerzen",
              "isCorrect": false
            },
            {
              "name": "Neuropathische Schmerzen",
              "isCorrect": true
            },
            {
              "name": "Viszerale Schmerzen",
              "isCorrect": false
            },
            {
              "name": "Somatische Schmerzen",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Maßnahme ist kein Bestandteil der multimodalen Schmerztherapie?",
          "answers": [
            {
              "name": "Langfristige alleinige Opioidtherapie",
              "isCorrect": true
            },
            {
              "name": "Rehabilitation",
              "isCorrect": false
            },
            {
              "name": "Physiotherapie",
              "isCorrect": false
            },
            {
              "name": "Psychotherapie",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher der folgenden Wirkstoffe hat eine antipyretische Wirkung?",
          "answers": [
            {
              "name": "Gabapentin",
              "isCorrect": false
            },
            {
              "name": "Fentanyl",
              "isCorrect": false
            },
            {
              "name": "Morphin",
              "isCorrect": false
            },
            {
              "name": "Paracetamol",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Analgetika werden häufig bei Entzündungen eingesetzt?",
          "answers": [
            {
              "name": "Triptane",
              "isCorrect": false
            },
            {
              "name": "Nicht-steroidale Antirheumatika (NSAR)",
              "isCorrect": true
            },
            {
              "name": "Lokalanästhetika",
              "isCorrect": false
            },
            {
              "name": "Opioide",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Analgetika werden bei einer Schmerztherapie zur Blockade von Nervensignalen eingesetzt?",
          "answers": [
            {
              "name": "Antikonvulsiva",
              "isCorrect": false
            },
            {
              "name": "Lokalanästhetika",
              "isCorrect": true
            },
            {
              "name": "NSAR",
              "isCorrect": false
            },
            {
              "name": "Opioide",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche der folgenden Substanzen wird zur Behandlung von Migräne eingesetzt?",
          "answers": [
            {
              "name": "Lokalanästhetika",
              "isCorrect": false
            },
            {
              "name": "NSAR",
              "isCorrect": false
            },
            {
              "name": "Triptane",
              "isCorrect": true
            },
            {
              "name": "Opioide",
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
            "title": "Was sind die Hauptklassen von Schmerzmitteln?",
            "hidden_answer": "Die Hauptklassen sind nicht-opioide Analgetika, opioide Analgetika und Koanalgetika."
        },
        {
            "title": "Wie unterscheiden sich nicht-steroidale Antirheumatika (NSAR) von Opioiden?",
            "hidden_answer": "NSAR wirken entzündungshemmend und schmerzlindernd, während Opioide direkt im zentralen Nervensystem wirken und stärker gegen starke Schmerzen eingesetzt werden."
        },
        {
            "title": "Welche Rolle spielen Koanalgetika in der Schmerztherapie?",
            "hidden_answer": "Koanalgetika wie Antidepressiva oder Antikonvulsiva werden zur Behandlung chronischer Schmerzen eingesetzt, insbesondere bei neuropathischen Schmerzen."
        },
        {
            "title": "Was ist der Unterschied zwischen akuten und chronischen Schmerzen?",
            "hidden_answer": "Akute Schmerzen sind zeitlich begrenzt und oft ein Symptom einer Gewebeschädigung, während chronische Schmerzen länger als 3-6 Monate anhalten und oft keine klare Ursache haben."
        },
        {
            "title": "Welche Nebenwirkungen haben opioide Analgetika?",
            "hidden_answer": "Häufige Nebenwirkungen sind Übelkeit, Verstopfung, Sedierung und Abhängigkeit bei langfristiger Anwendung."
        },
        {
            "title": "Welche Funktion hat die WHO-Stufentherapie in der Schmerzbehandlung?",
            "hidden_answer": "Die WHO-Stufentherapie bietet ein strukturiertes Schema zur Behandlung von Schmerzen, das mit leichten Analgetika beginnt und bei Bedarf zu stärkeren Mitteln übergeht."
        },
        {
            "title": "Was bedeutet multimodale Schmerztherapie?",
            "hidden_answer": "Die multimodale Schmerztherapie kombiniert verschiedene Behandlungsansätze wie medikamentöse, physikalische und psychologische Therapie."
        },
        {
            "title": "Wie wird neuropathischer Schmerz typischerweise behandelt?",
            "hidden_answer": "Neuropathische Schmerzen werden oft mit Koanalgetika wie Antidepressiva (z. B. Amitriptylin) oder Antikonvulsiva (z. B. Gabapentin) behandelt."
        },
        {
            "title": "Warum ist die regelmäßige Schmerzbewertung wichtig?",
            "hidden_answer": "Die regelmäßige Schmerzbewertung hilft, die Wirksamkeit der Therapie zu überprüfen und Anpassungen vorzunehmen, um die bestmögliche Schmerzlinderung zu gewährleisten."
        },
        {
            "title": "Welche Rolle spielt Physiotherapie in der Schmerztherapie?",
            "hidden_answer": "Physiotherapie kann helfen, die Mobilität zu verbessern, Muskelverspannungen zu lösen und chronische Schmerzen zu lindern."
        },
        {
            "title": "Was ist der Unterschied zwischen somatischen und viszeralen Schmerzen?",
            "hidden_answer": "Somatische Schmerzen stammen von Haut, Muskeln oder Gelenken, während viszerale Schmerzen von inneren Organen ausgehen."
        },
        {
            "title": "Wie wirken zentral wirksame Analgetika?",
            "hidden_answer": "Zentral wirksame Analgetika wirken auf Rezeptoren im zentralen Nervensystem und blockieren die Schmerzweiterleitung im Gehirn."
        },
        {
            "title": "Was sind potenzielle Risiken der langfristigen Einnahme von NSAR?",
            "hidden_answer": "Langfristige Einnahme von NSAR kann Magen-Darm-Probleme, Nierenschäden und ein erhöhtes kardiovaskuläres Risiko verursachen."
        },
        {
            "title": "Welche alternativen Methoden können zur Schmerztherapie eingesetzt werden?",
            "hidden_answer": "Alternative Methoden umfassen Akupunktur, Meditation, Wärme- oder Kältetherapie und elektrische Nervenstimulation (TENS)."
        },
        {
            "title": "Was sind die Hauptziele der Schmerztherapie?",
            "hidden_answer": "Die Hauptziele sind die Linderung von Schmerzen, Verbesserung der Lebensqualität und Wiederherstellung der Funktionsfähigkeit."
        }
    ],
    },
    //  End of parent tab 3
  ],
};
