import img1 from "../../../../assets/whoschema.pdf";
export default {
  path: "nsar",
  // http://localhost:5173/trafarette/nsar, , <a href="/trafarette/nsar">NSAR</a>
  content: [
    {
      id: 1,
      title: "Nichtsteroidale Antirheumatika (NSAR)",
      childTabs: [
        {
          id: 1,
          title: "Definition",
          textWithFormatting: `<div>
            <p><b>Nichtsteroidale Antirheumatika (NSAR)</b> sind eine vielseitige Medikamentengruppe mit den drei zentralen therapeutischen Eigenschaften:</p>
            <ul>
              <li>1. Schmerzlindernd (analgetisch)</li>
              <li>2. Entzündungshemmend (antiphlogistisch)</li>
              <li>3. Fiebersenkend (antipyretisch)</li>
            </ul>
            <p>Im Gegensatz zu Steroiden, wie den Glukokortikoiden, weisen NSAR keine Steroidstruktur auf. Sie entfalten ihre Wirkung durch die Hemmung der Cyclooxygenasen (COX), die eine entscheidende Rolle bei der Produktion von Prostaglandinen und Thromboxanen spielen.</p>
            <p>NSAR werden sowohl bei akuten als auch bei chronischen Erkrankungen eingesetzt und sind aus der modernen Schmerz- und Entzündungsbehandlung nicht wegzudenken. Ihre Verfügbarkeit in verschiedenen Darreichungsformen (oral, intravenös, topisch, rektal) macht sie zu einer wichtigen Säule der Therapie.</p>
          </div>`,
        },
        {
          id: 2,
          title: "Wirkmechanismus",
          textWithFormatting: `<div>
            <p><b>Die Rolle der Cyclooxygenasen (COX):</b></p>
            <p>Die COX-Enzyme katalysieren die Umwandlung von Arachidonsäure in Prostaglandine und Thromboxane. Diese Substanzen sind an verschiedenen physiologischen und pathophysiologischen Prozessen beteiligt:</p>
            <ul>
              <li>• <b>Prostaglandine:</b> Vermitteln Schmerz, Entzündung und Fieber; schützen die Magenschleimhaut und regulieren die Nierendurchblutung.</li>
              <li>• <b>Thromboxane:</b> Fördern die Blutgerinnung durch Thrombozytenaggregation.</li>
            </ul>
            <p><b>COX-Isoenzyme und ihre Hemmung:</b></p>
            <ul>
              <li>• <b>COX-1:</b> Konstitutiv aktiv; wichtig für den Magenschutz, die Nierendurchblutung und die Thrombozytenfunktion.</li>
              <li>• <b>COX-2:</b> Induzierbar; wird bei Entzündungsprozessen hochreguliert und fördert die Produktion von entzündungsfördernden Prostaglandinen.</li>
            </ul>
            <p>Die Hemmung dieser Enzyme reduziert:</p>
            <ol>
              <li>Schmerzempfindlichkeit: Prostaglandine sensibilisieren Schmerzrezeptoren.</li>
              <li>Entzündung: Reduktion von Schwellung, Rötung und Überwärmung.</li>
              <li>Fieber: Eingriff in die Temperaturregulation im Hypothalamus.</li>
            </ol>
            <p><b>Selektive COX-2-Hemmer (Coxibe):</b> Coxibe wie Celecoxib hemmen spezifisch COX-2, wodurch sie entzündungshemmend wirken, aber weniger gastrointestinale Nebenwirkungen verursachen. Allerdings erhöhen sie das Risiko für kardiovaskuläre Komplikationen (z. B. Herzinfarkt, Schlaganfall).</p>
            <p><b>Reversible und irreversible Hemmung:</b></p>
            <ul>
              <li>• <b>Reversibel:</b> Ibuprofen, Diclofenac und die meisten NSAR hemmen COX-Enzyme vorübergehend.</li>
              <li>• <b>Irreversibel:</b> Acetylsalicylsäure (ASS) hemmt COX-1 irreversibel und verhindert so langfristig die Thrombozytenaggregation.</li>
            </ul>
          </div>`,
        },
        {
          id: 3,
          title: "Wirkungen",
          textWithFormatting: `<div>
            <p><b>Hauptwirkungen:</b></p>
            <ol>
              <li><b>Antiphlogistisch:</b> Reduktion der Entzündungszeichen durch Hemmung von Prostaglandinen; effektiv bei entzündlichen Erkrankungen wie Arthritis, Gicht und Tendinitis.</li>
              <li><b>Analgetisch:</b> Reduktion der Schmerzempfindlichkeit durch Hemmung von Prostaglandinen; besonders wirksam bei nozizeptiven und entzündungsbedingten Schmerzen.</li>
              <li><b>Antipyretisch:</b> Hemmung der Prostaglandine im Hypothalamus, wodurch eine fiebersenkende Wirkung erzielt wird.</li>
            </ol>
            <p><b>Zusätzliche Effekte:</b></p>
            <ul>
              <li>• <b>Thrombozytenaggregationshemmung:</b> Insbesondere bei ASS, das irreversibel COX-1 hemmt und zur Prävention von kardiovaskulären Ereignissen eingesetzt wird.</li>
              <li>• <b>Nebenwirkung im Magen-Darm-Trakt:</b> Hemmung von COX-1 reduziert den Schutz der Magenschleimhaut und kann Ulzera verursachen.</li>
            </ul>
          </div>`,
        },
        {
          id: 4,
          title: "Pharmakokinetik",
          textWithFormatting: `<div>
            <p><b>Resorption und Verteilung:</b></p>
            <ul>
              <li>• NSAR werden nach oraler Gabe schnell resorbiert.</li>
              <li>• Die maximale Plasmakonzentration wird innerhalb von 1–3 Stunden erreicht.</li>
              <li>• Hohe Plasmaproteinbindung (ca. 95 %), was die Verfügbarkeit im entzündeten Gewebe beeinflusst.</li>
            </ul>
            <p><b>Metabolismus und Elimination:</b></p>
            <ul>
              <li>• Der Metabolismus erfolgt in der Leber über das Cytochrom-P450-System.</li>
              <li>• Die Ausscheidung der Metaboliten erfolgt primär renal.</li>
            </ul>
          </div>`,
        },
        {
          id: 5,
          title: "Indikationen",
          textWithFormatting: `<div>
            <ul>
              <li>• <b>Schmerzlinderung:</b> Akute Schmerzen (z. B. Zahnschmerzen, postoperative Schmerzen), chronische Schmerzen (z. B. Arthrose, rheumatoide Arthritis).</li>
              <li>• <b>Entzündungshemmung:</b> Rheumatische Erkrankungen (z. B. Gicht, Arthritis), degenerative Erkrankungen wie Arthrosen.</li>
              <li>• <b>Fiebersenkung:</b> Fieberhafte Infektionen, insbesondere bei Erwachsenen.</li>
              <li>• <b>Prävention kardiovaskulärer Ereignisse:</b> Acetylsalicylsäure in niedriger Dosierung (75–100 mg täglich) zur Prävention von Schlaganfall und Herzinfarkt.</li>
            </ul>
          </div>`,
        },

        {
          id: 6,
          title: "Nebenwirkungen",
          textWithFormatting: `<div>
      <p><b>Gastrointestinale Nebenwirkungen:</b></p>
      <ul>
        <li>• Reizung der Magenschleimhaut</li>
        <li>• Dyspepsie</li>
        <li>• Gastrointestinale Ulzera und Blutungen</li>
      </ul>
      <p><b>Kardiovaskuläre Nebenwirkungen:</b></p>
      <ul>
        <li>• Erhöhtes Risiko für Herzinfarkt und Schlaganfall, insbesondere bei COX-2-Hemmern</li>
      </ul>
      <p><b>Nierenkomplikationen:</b></p>
      <ul>
        <li>• Reduzierte Nierendurchblutung</li>
        <li>• Flüssigkeitsretention</li>
        <li>• Hyperkaliämie</li>
        <li>• Akutes Nierenversagen</li>
      </ul>
      <p><b>Leberkomplikationen:</b></p>
      <ul>
        <li>• Seltene Fälle von Hepatotoxizität</li>
      </ul>
    </div>`,
        },
        {
          id: 7,
          title: "Kontraindikationen",
          textWithFormatting: `<div>
      <ul>
        <li>• Aktive Magen-Darm-Erkrankungen (z. B. Ulzera, Blutungen)</li>
        <li>• Schwere Nieren- oder Leberfunktionsstörungen</li>
        <li>• Herzinsuffizienz (NYHA III/IV)</li>
        <li>• Schwangerschaft (besonders im 3. Trimenon)</li>
        <li>• Allergie oder Überempfindlichkeit gegenüber NSAR</li>
      </ul>
    </div>`,
        },
        {
          id: 8,
          title: "Wechselwirkungen",
          textWithFormatting: `<div>
      <p><b>Arzneimittelinteraktionen:</b></p>
      <ul>
        <li>• Antikoagulantien: Verstärktes Blutungsrisiko</li>
        <li>• Antidiabetika: Beeinflussung des Blutzuckerspiegels</li>
        <li>• ACE-Hemmer und Diuretika: Erhöhtes Risiko für Nierenfunktionsstörungen</li>
        <li>• SSRI: Erhöhtes Risiko für gastrointestinale Blutungen</li>
      </ul>
      <p><b>Kombination mit Protonenpumpenhemmern (PPI):</b></p>
      <ul>
        <li>• Protonenpumpenhemmer wie Omeprazol können bei Risikopatienten die gastrointestinale Verträglichkeit von NSAR verbessern.</li>
      </ul>
    </div>`,
        },
        {
          id: 9,
          title: "Therapieüberwachung und Patientengruppen",
          textWithFormatting: `<div>
      <p><b>Spezielle Patientengruppen:</b></p>
      <ul>
        <li>• <b>Ältere Patienten:</b> Erhöhtes Risiko für Nebenwirkungen; engmaschige Kontrolle erforderlich.</li>
        <li>• <b>Patienten mit Nieren- oder Lebererkrankungen:</b> Dosisanpassung oder alternative Therapie.</li>
        <li>• <b>Schwangere:</b> NSAR sind im dritten Trimenon kontraindiziert.</li>
      </ul>
      <p><b>Langzeitüberwachung:</b></p>
      <ul>
        <li>• Regelmäßige Kontrolle von Nieren- und Leberwerten bei chronischer Anwendung.</li>
        <li>• Überwachung der kardiovaskulären Gesundheit bei Patienten mit Risikofaktoren.</li>
      </ul>
    </div>`,
        },
        {
          id: 10,
          title: "Beispiele für NSAR",
          textWithFormatting: `<div>
      <table>
        <thead>
          <tr>
            <th>Wirkstoffgruppe</th>
            <th>Beispiele</th>
            <th>Applikationsformen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salicylsäure-Derivate</td>
            <td>Acetylsalicylsäure (ASS)</td>
            <td>oral, intravenös</td>
          </tr>
          <tr>
            <td>Arylessigsäure-Derivate</td>
            <td>Diclofenac, Aceclofenac</td>
            <td>oral, topisch, rektal, intravenös</td>
          </tr>
          <tr>
            <td>Arylpropionsäure-Derivate</td>
            <td>Ibuprofen, Naproxen</td>
            <td>oral, intravenös, topisch</td>
          </tr>
          <tr>
            <td>COX-2-Hemmer</td>
            <td>Celecoxib, Etoricoxib</td>
            <td>oral, intravenös</td>
          </tr>
        </tbody>
      </table>
    </div>`,
        },
        {
          id: 11,
          title: "Fazit",
          textWithFormatting: `<div>
      <p>NSAR sind essenziell in der Schmerztherapie und bei entzündlichen Erkrankungen. Ihre vielseitigen Wirkungen machen sie zu unverzichtbaren Arzneimitteln, allerdings sind sie nicht ohne Risiken. Eine individuell angepasste Therapie, die Berücksichtigung von Nebenwirkungen und Kontraindikationen sowie regelmäßige Kontrollen sind entscheidend, um eine sichere und effektive Behandlung zu gewährleisten.</p>
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
          "title": "Welche der folgenden Substanzen gehört zu den NSAR?",
          "answers": [
            {
              "name": "Morphin",
              "isCorrect": false
            },
            {
              "name": "Paracetamol",
              "isCorrect": false
            },
            {
              "name": "Gabapentin",
              "isCorrect": false
            },
            {
              "name": "Ibuprofen",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welcher Wirkmechanismus ist typisch für NSAR?",
          "answers": [
            {
              "name": "Hemmung der Cyclooxygenase (COX)",
              "isCorrect": true
            },
            {
              "name": "Blockade der Opioidrezeptoren",
              "isCorrect": false
            },
            {
              "name": "Erhöhung der Serotonin-Ausschüttung",
              "isCorrect": false
            },
            {
              "name": "Blockade der Calciumkanäle",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Nebenwirkung ist häufig mit NSAR verbunden?",
          "answers": [
            {
              "name": "Nierensteine",
              "isCorrect": false
            },
            {
              "name": "Magenschleimhautschäden",
              "isCorrect": true
            },
            {
              "name": "Sehstörungen",
              "isCorrect": false
            },
            {
              "name": "Erhöhte Herzfrequenz",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Erkrankung wird oft mit NSAR behandelt?",
          "answers": [
            {
              "name": "Diabetes mellitus",
              "isCorrect": false
            },
            {
              "name": "Epilepsie",
              "isCorrect": false
            },
            {
              "name": "Rheumatoide Arthritis",
              "isCorrect": true
            },
            {
              "name": "Hypertonie",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Enzym wird durch NSAR gehemmt, um Entzündungen zu lindern?",
          "answers": [
            {
              "name": "Lipase",
              "isCorrect": false
            },
            {
              "name": "Renin",
              "isCorrect": false
            },
            {
              "name": "Cyclooxygenase (COX)",
              "isCorrect": true
            },
            {
              "name": "Acetylcholinesterase",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Aussage zu selektiven COX-2-Hemmern ist korrekt?",
          "answers": [
            {
              "name": "Sie haben ein geringeres Risiko für Magen-Darm-Nebenwirkungen.",
              "isCorrect": true
            },
            {
              "name": "Sie wirken stärker auf die Blutgerinnung als nicht-selektive NSAR.",
              "isCorrect": false
            },
            {
              "name": "Sie fördern die Serotoninaufnahme.",
              "isCorrect": false
            },
            {
              "name": "Sie erhöhen die Nierendurchblutung.",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Kontraindikation besteht für die Anwendung von NSAR?",
          "answers": [
            {
              "name": "Osteoporose",
              "isCorrect": false
            },
            {
              "name": "Bluthochdruck",
              "isCorrect": false
            },
            {
              "name": "Asthma bronchiale",
              "isCorrect": false
            },
            {
              "name": "Magengeschwüre",
              "isCorrect": true
            }
          ]
        },
        {
          "title": "Welche Nebenwirkung kann durch eine längere Einnahme von NSAR entstehen?",
          "answers": [
            {
              "name": "Hypoglykämie",
              "isCorrect": false
            },
            {
              "name": "Verminderte Magensäureproduktion",
              "isCorrect": false
            },
            {
              "name": "Nierenfunktionsstörungen",
              "isCorrect": true
            },
            {
              "name": "Erhöhte Knochendichte",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was ist der Vorteil von selektiven COX-2-Hemmern im Vergleich zu nicht-selektiven NSAR?",
          "answers": [
            {
              "name": "Geringeres Risiko für Magen-Darm-Blutungen",
              "isCorrect": true
            },
            {
              "name": "Bessere Wirkung bei neuropathischen Schmerzen",
              "isCorrect": false
            },
            {
              "name": "Keine Wechselwirkungen mit anderen Medikamenten",
              "isCorrect": false
            },
            {
              "name": "Längere Wirkdauer",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche der folgenden Substanzen ist ein selektiver COX-2-Hemmer?",
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
              "name": "Celecoxib",
              "isCorrect": true
            },
            {
              "name": "Aspirin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Wirkung haben NSAR auf die Blutgerinnung?",
          "answers": [
            {
              "name": "Förderung der Thrombozytenproduktion",
              "isCorrect": false
            },
            {
              "name": "Hemmung der Thrombozytenaggregation",
              "isCorrect": true
            },
            {
              "name": "Erhöhung der Gerinnungsfaktoren",
              "isCorrect": false
            },
            {
              "name": "Senkung der Blutviskosität",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Substanz wird häufig als NSAR eingesetzt und hat eine fiebersenkende Wirkung?",
          "answers": [
            {
              "name": "Tramadol",
              "isCorrect": false
            },
            {
              "name": "Gabapentin",
              "isCorrect": false
            },
            {
              "name": "Ibuprofen",
              "isCorrect": true
            },
            {
              "name": "Morphin",
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
            "title": "Was sind Nichtsteroidale Antirheumatika (NSAR)?",
            "hidden_answer": "NSAR sind eine Klasse von Medikamenten, die entzündungshemmend, schmerzlindernd und fiebersenkend wirken, ohne Steroide zu enthalten."
        },
        {
            "title": "Wie wirken NSAR im Körper?",
            "hidden_answer": "NSAR hemmen die Enzyme Cyclooxygenase-1 (COX-1) und Cyclooxygenase-2 (COX-2), wodurch die Produktion von Prostaglandinen reduziert wird, die Schmerzen und Entzündungen fördern."
        },
        {
            "title": "Was sind häufige Anwendungsgebiete von NSAR?",
            "hidden_answer": "NSAR werden bei Arthritis, Rückenschmerzen, Kopfschmerzen, Menstruationsbeschwerden und anderen entzündungsbedingten Schmerzen eingesetzt."
        },
        {
            "title": "Welche Nebenwirkungen sind mit NSAR verbunden?",
            "hidden_answer": "Nebenwirkungen können Magen-Darm-Beschwerden wie Sodbrennen, Geschwüre und Blutungen sowie kardiovaskuläre Risiken und Nierenschäden umfassen."
        },
        {
            "title": "Was ist der Unterschied zwischen selektiven und nicht-selektiven NSAR?",
            "hidden_answer": "Selektive NSAR hemmen hauptsächlich COX-2 und haben ein geringeres Risiko für Magen-Darm-Nebenwirkungen, während nicht-selektive NSAR sowohl COX-1 als auch COX-2 hemmen."
        },
        {
            "title": "Welche Vorsichtsmaßnahmen sollten bei der Einnahme von NSAR beachtet werden?",
            "hidden_answer": "Die Einnahme sollte möglichst niedrig dosiert und kurzzeitig erfolgen, um das Risiko von Nebenwirkungen zu minimieren. Patienten mit Magengeschwüren, Herzproblemen oder Nierenerkrankungen sollten besonders vorsichtig sein."
        },
        {
            "title": "Welche NSAR sind besonders bekannt?",
            "hidden_answer": "Bekannte NSAR sind Ibuprofen, Naproxen, Diclofenac, Acetylsalicylsäure (Aspirin) und Celecoxib."
        },
        {
            "title": "Wie unterscheiden sich NSAR von Paracetamol?",
            "hidden_answer": "NSAR haben entzündungshemmende Eigenschaften, während Paracetamol hauptsächlich schmerzlindernd und fiebersenkend wirkt, ohne entzündungshemmend zu sein."
        },
        {
            "title": "Warum sollte man NSAR nicht auf nüchternen Magen einnehmen?",
            "hidden_answer": "NSAR können die Magenschleimhaut reizen und das Risiko für Geschwüre erhöhen. Die Einnahme mit Nahrung kann diese Risiken reduzieren."
        },
        {
            "title": "Welche Patienten sollten NSAR vermeiden?",
            "hidden_answer": "Patienten mit Magengeschwüren, Blutungsneigung, schwerer Nieren- oder Lebererkrankung sowie Personen mit bestimmten Herz-Kreislauf-Erkrankungen sollten NSAR vermeiden oder nur unter ärztlicher Aufsicht einnehmen."
        },
        {
            "title": "Was ist der Zusammenhang zwischen NSAR und Herz-Kreislauf-Risiken?",
            "hidden_answer": "Einige NSAR, insbesondere COX-2-Hemmer, können das Risiko für Herzinfarkt oder Schlaganfall erhöhen, insbesondere bei langfristiger Anwendung."
        },
        {
            "title": "Welche Alternativen gibt es zu NSAR bei Schmerzen und Entzündungen?",
            "hidden_answer": "Alternativen sind Paracetamol, Opioide, physikalische Therapien, lokale Schmerzmittel oder pflanzliche Präparate wie Kurkuma oder Teufelskralle."
        },
        {
            "title": "Wie lange sollte man NSAR einnehmen?",
            "hidden_answer": "NSAR sollten nur so lange wie nötig und in der niedrigsten wirksamen Dosis eingenommen werden, um Nebenwirkungen zu vermeiden."
        },
        {
            "title": "Warum sind NSAR in der Selbstmedikation beliebt?",
            "hidden_answer": "NSAR sind wirksam bei der Behandlung alltäglicher Schmerzen, rezeptfrei erhältlich und bieten schnelle Linderung."
        },
        {
            "title": "Welche Rolle spielt COX-1 im Vergleich zu COX-2 bei der Wirkung von NSAR?",
            "hidden_answer": "COX-1 ist an der Produktion von Schutzprostaglandinen für die Magenschleimhaut beteiligt, während COX-2 vor allem bei Entzündungen aktiv ist. Die Hemmung von COX-1 kann zu Magenproblemen führen."
        }
    ],
    },
    //  End of parent tab 3
  ],
};
