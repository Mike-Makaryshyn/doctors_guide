export default {
  path: "gerinnungsanamnese",
  // http://localhost:5173/trafarette/gerinnungsanamnese
  content: [
    {
      id: 1,
      title: "Gerinnungsanamnese",
      childTabs: [
        {
            "id": 1,
            "title": "1. Definition",
            "textWithFormatting": `<div>
                <p><b>Die Gerinnungsanamnese</b> ist ein spezifischer Teil der medizinischen Anamnese, der gezielt darauf abzielt, potenzielle Störungen der Blutgerinnung zu identifizieren. Sie ist essenziell für die Beurteilung, ob eine Blutungsneigung besteht und ob diese möglicherweise angeboren oder erworben ist. Diese spezielle Form der Anamnese kann wertvolle Hinweise liefern, die in Verbindung mit weiteren Laborwerten eine fundierte Diagnose ermöglichen.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "2. Inhalte der Gerinnungsanamnese",
            "textWithFormatting": `<div>
                <p><b>Die Gerinnungsanamnese</b> umfasst mehrere spezifische Fragen zu bisherigen Erfahrungen und Auffälligkeiten in Bezug auf Blutungen. Sie dient dazu, frühere und aktuelle Blutungsproblematiken, etwaige familiäre Vorbelastungen und Medikamente mit Einfluss auf die <a href="/trafarette/gerinnung">Gerinnung</a> zu erfassen. Die Hauptfragen gliedern sich wie folgt:</p>
    
                <h4><b>a) Vorerkrankungen</b></h4>
                <p>Erhebung von Vorerkrankungen, die die Blutgerinnung beeinträchtigen könnten, wie etwa:</p>
                <ul>
                    <li>• Chronische Lebererkrankungen</li>
                    <li>• Nierenerkrankungen</li>
                    <li>• Gerinnungsstörungen wie <a href="/trafarette/haemophiliaa">Hämophilie A</a> oder <a href="/trafarette/willebrandjürgenssyndrom">Angiohämophilie Willebrand-Jürgens-Syndrom (vWS)</a>.</li>
                </ul>
    
                <h4><b>b) Operationen und Eingriffe</b></h4>
                <p>Fragen nach möglichen Blutungskomplikationen bei früheren Eingriffen, z.B.:</p>
                <ul>
                    <li>• <b>Operationen oder Zahnextraktionen:</b> Gab es Nachblutungen, die über das normale Maß hinausgingen, oder waren spezielle Maßnahmen zur Blutstillung notwendig?</li>
                    <li>• <b>Blutungskomplikationen:</b> Auftreten von Blutungen bei anderen Eingriffen wie Biopsien, Punktionen oder Endoskopien.</li>
                </ul>
    
                <h4><b>c) Transfusionen</b></h4>
                <p>Fragen zur Notwendigkeit von Bluttransfusionen:</p>
                <ul>
                    <li>• Wurden bei früheren Blutverlusten Bluttransfusionen verabreicht? Falls ja, war dies aufgrund ungewöhnlicher oder lang anhaltender Blutungen notwendig?</li>
                </ul>
    
                <h4><b>d) Menstruation und gynäkologische Blutungen</b></h4>
                <p>Erfassung spezifischer Blutungsneigungen im Zusammenhang mit der Menstruation:</p>
                <ul>
                    <li>• <b>Verstärkte oder verlängerte Menstruationsblutungen (Menorrhagie):</b> Kann auf eine Gerinnungsstörung hindeuten, wenn die Menstruation überdurchschnittlich lange oder intensiv ist.</li>
                    <li>• <b>Blutungen nach gynäkologischen Eingriffen oder Geburten:</b> Blutungen, die über das normale Maß hinausgingen.</li>
                </ul>
    
                <h4><b>e) Schwangerschaft und Geburten</b></h4>
                <p>Abfrage von Erfahrungen während der Schwangerschaft und Geburt:</p>
                <ul>
                    <li>• Gab es Blutungskomplikationen während oder nach Geburten?</li>
                    <li>• Hinweise auf erhöhte Blutungsneigung in der Schwangerschaft, z.B. durch Hämatome oder verstärkte Zwischenblutungen.</li>
                </ul>
    
                <h4><b>f) Alltägliche Blutungsneigung</b></h4>
                <p>Fragen nach Blutungsneigungen im Alltag, die auf eine Gerinnungsstörung hinweisen könnten:</p>
                <ul>
                    <li>• <b>Nasenbluten:</b> Häufiges oder schwer stillbares Nasenbluten.</li>
                    <li>• <b>Zahnfleischbluten:</b> Blutungen beim Zähneputzen oder beim Kauen fester Speisen.</li>
                    <li>• <b>Hämatomneigung:</b> Schnelles Auftreten von blauen Flecken (Hämatomen) bereits bei leichten Stößen.</li>
                    <li>• <b>Verlängerte Blutungsdauer bei Schnitt- und Schürfwunden:</b> Anhaltendes Bluten selbst bei kleinen Wunden oder oberflächlichen Verletzungen.</li>
                </ul>
    
                <h4><b>g) Medikamenteneinnahme</b></h4>
                <p>Überprüfung auf Medikamente, die die Blutgerinnung beeinflussen könnten:</p>
                <ul>
                    <li>• <b>Nicht-steroidale Antirheumatika (NSAR) wie Ibuprofen oder <a href="/trafarette/ass">Aspirin</a>:</b> Diese können die Blutungsneigung verstärken.</li>
                    <li>• <b>Antikoagulantien:</b> Einnahme von blutverdünnenden Medikamenten wie Warfarin, Heparin oder neueren oralen <a href="/trafarette/antikoagulanzien">Antikoagulanzien</a> (NOAKs).</li>
                </ul>
    
                <h4><b>h) Familienanamnese</b></h4>
                <p>Fragen zur Blutungsneigung in der Familie:</p>
                <ul>
                    <li>• <b>Blutungsneigung bei Verwandten:</b> Tritt eine verstärkte Blutungsneigung auch bei Eltern, Geschwistern oder anderen nahen Verwandten auf? Das Vorhandensein von <a href="link_to_page_gerinnungsstörungen">Gerinnungsstörungen</a> in der Familie kann auf eine genetische Prädisposition hinweisen.</li>
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
            "title": "Welche Erkrankung betrifft die Blutgerinnung und kann vererbt werden?",
            "answers": [
                {
                    "name": "Diabetes",
                    "isCorrect": false
                },
                {
                    "name": "Hämophilie",
                    "isCorrect": true
                },
                {
                    "name": "Hypertonie",
                    "isCorrect": false
                },
                {
                    "name": "Arthritis",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Blutungsart tritt bei leichter Verletzung der Haut oft als erstes auf?",
            "answers": [
                {
                    "name": "Innere Blutung",
                    "isCorrect": false
                },
                {
                    "name": "Schnittwunde",
                    "isCorrect": false
                },
                {
                    "name": "Hämatom",
                    "isCorrect": true
                },
                {
                    "name": "Gefäßruptur",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welches Symptom könnte auf eine Gerinnungsstörung hinweisen?",
            "answers": [
                {
                    "name": "Chronische Müdigkeit",
                    "isCorrect": false
                },
                {
                    "name": "Häufiges Nasenbluten",
                    "isCorrect": true
                },
                {
                    "name": "Kopfschmerzen",
                    "isCorrect": false
                },
                {
                    "name": "Trockene Haut",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welches Medikament beeinflusst die Blutgerinnung und wird oft als Blutverdünner eingesetzt?",
            "answers": [
                {
                    "name": "Ibuprofen",
                    "isCorrect": false
                },
                {
                    "name": "Paracetamol",
                    "isCorrect": false
                },
                {
                    "name": "Warfarin",
                    "isCorrect": true
                },
                {
                    "name": "Antibiotika",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Was könnte bei häufigem und schwer stillbarem Zahnfleischbluten eine Ursache sein?",
            "answers": [
                {
                    "name": "Vitamin-K-Mangel",
                    "isCorrect": true
                },
                {
                    "name": "Vitamin-D-Mangel",
                    "isCorrect": false
                },
                {
                    "name": "Hypertonie",
                    "isCorrect": false
                },
                {
                    "name": "Allergie",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Erkrankung kann die Gerinnung beeinträchtigen und ist häufig bei Alkoholmissbrauch?",
            "answers": [
                {
                    "name": "Chronische Lebererkrankung",
                    "isCorrect": true
                },
                {
                    "name": "Gicht",
                    "isCorrect": false
                },
                {
                    "name": "Hypercholesterinämie",
                    "isCorrect": false
                },
                {
                    "name": "Arthrose",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Menstruationsstörung könnte auf eine Gerinnungsstörung hindeuten?",
            "answers": [
                {
                    "name": "Schmerzhafte Menstruation",
                    "isCorrect": false
                },
                {
                    "name": "Unregelmäßige Menstruation",
                    "isCorrect": false
                },
                {
                    "name": "Verstärkte Menstruationsblutungen (Menorrhagie)",
                    "isCorrect": true
                },
                {
                    "name": "Kurze Menstruationsphasen",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Was ist eine häufige Komplikation bei Menschen mit Gerinnungsstörungen nach Operationen?",
            "answers": [
                {
                    "name": "Verzögerte Heilung",
                    "isCorrect": false
                },
                {
                    "name": "Übermäßige Blutung",
                    "isCorrect": true
                },
                {
                    "name": "Infektionen",
                    "isCorrect": false
                },
                {
                    "name": "Narbenbildung",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Medikamente könnten die Blutgerinnung beeinträchtigen?",
            "answers": [
                {
                    "name": "NSAR wie Ibuprofen",
                    "isCorrect": true
                },
                {
                    "name": "Protonenpumpenhemmer",
                    "isCorrect": false
                },
                {
                    "name": "Antidepressiva",
                    "isCorrect": false
                },
                {
                    "name": "Statine",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Blutungsneigung tritt häufig bei kleineren Verletzungen oder Stoßverletzungen auf?",
            "answers": [
                {
                    "name": "Innere Blutungen",
                    "isCorrect": false
                },
                {
                    "name": "Blutergüsse (Hämatome)",
                    "isCorrect": true
                },
                {
                    "name": "Schnittverletzungen",
                    "isCorrect": false
                },
                {
                    "name": "Infektionen",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Erkrankung kann eine verstärkte Blutungsneigung bei Frauen in der Familie signalisieren?",
            "answers": [
                {
                    "name": "Von-Willebrand-Jürgens-Syndrom",
                    "isCorrect": true
                },
                {
                    "name": "Diabetes mellitus",
                    "isCorrect": false
                },
                {
                    "name": "Schilddrüsenunterfunktion",
                    "isCorrect": false
                },
                {
                    "name": "Osteoporose",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welches Organ ist wichtig für die Synthese der Gerinnungsfaktoren?",
            "answers": [
                {
                    "name": "Herz",
                    "isCorrect": false
                },
                {
                    "name": "Leber",
                    "isCorrect": true
                },
                {
                    "name": "Niere",
                    "isCorrect": false
                },
                {
                    "name": "Lunge",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welcher Faktor im Blutgerinnungssystem ist bekannt als Anti-Hämophiles Globulin?",
            "answers": [
                {
                    "name": "Faktor VII",
                    "isCorrect": false
                },
                {
                    "name": "Faktor VIII",
                    "isCorrect": true
                },
                {
                    "name": "Faktor IX",
                    "isCorrect": false
                },
                {
                    "name": "Faktor X",
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
            "title": "Warum ist Faktor VIII für die Blutgerinnung relevant?",
            "hidden_answer": "Faktor VIII ist entscheidend für die Aktivierung von Faktor X im Gerinnungsprozess und spielt eine wichtige Rolle in der Blutgerinnungskaskade."
        },
        {
            "title": "Welche Rolle spielt die Leber bei der Blutgerinnung?",
            "hidden_answer": "Die Leber produziert mehrere wichtige Gerinnungsfaktoren, die notwendig sind, um Blutungen zu stoppen und die Blutgerinnung aufrechtzuerhalten."
        },
        {
            "title": "Was ist der Quick-Wert und warum wird er gemessen?",
            "hidden_answer": "Der Quick-Wert misst die Prothrombinzeit und wird verwendet, um die Funktion des extrinsischen Gerinnungsweges zu bewerten."
        },
        {
            "title": "Was ist die Aktivierte partielle Thromboplastinzeit (aPTT)?",
            "hidden_answer": "Die aPTT misst die Funktion des intrinsischen Gerinnungsweges und wird verwendet, um bestimmte Gerinnungsstörungen zu diagnostizieren."
        },
        {
            "title": "Warum wird Antithrombin in der Gerinnungsdiagnostik gemessen?",
            "hidden_answer": "Antithrombin hemmt Thrombin und andere Gerinnungsfaktoren und hilft, eine übermäßige Gerinnung zu verhindern."
        },
        {
            "title": "Welches Protein im Blut ist für die Bildung von Fibrin verantwortlich?",
            "hidden_answer": "Fibrinogen wird in Fibrin umgewandelt und bildet so ein Gerüst für Blutgerinnsel, um Blutungen zu stoppen."
        },
        {
            "title": "Was ist der INR-Wert und warum ist er wichtig?",
            "hidden_answer": "Der INR-Wert (International Normalized Ratio) ist ein standardisierter Wert zur Bewertung der Blutgerinnung, insbesondere bei Patienten unter Antikoagulationstherapie."
        },
        {
            "title": "Warum sind D-Dimere wichtig in der Gerinnungsdiagnostik?",
            "hidden_answer": "D-Dimere sind Abbauprodukte von Fibrin und helfen, Thrombosen oder Gerinnungsstörungen im Körper zu identifizieren."
        },
        {
            "title": "Welche Rolle spielt Kalzium in der Blutgerinnung?",
            "hidden_answer": "Kalzium (Faktor IV) ist essentiell für die Aktivierung mehrerer Schritte der Gerinnungskaskade und für die Stabilität des Gerinnsels."
        },
        {
            "title": "Warum ist die Thrombinzeit (TZ) ein wichtiger Parameter?",
            "hidden_answer": "Die Thrombinzeit misst die Umwandlung von Fibrinogen zu Fibrin und kann bei der Diagnose von Fibrinogenmangel oder -anomalien hilfreich sein."
        }
    ],
    },
    //  End of parent tab 3
  ],
};
