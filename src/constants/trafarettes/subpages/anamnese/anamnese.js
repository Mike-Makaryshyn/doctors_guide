export default {
  path: "anamnese",
  // http://localhost:5173/trafarette/anamnese
  content: [
    {
      id: 1,
      title: "Anamnese",
      childTabs:[
        {
            "id": 1,
            "title": "Definition",
            "textWithFormatting": `<div>
                <p>Die <b>Anamnese</b> ist eine systematische Befragung zur Erfassung des Gesundheitszustands eines Patienten. Sie wird von Ärzten oder anderen Fachpersonen durchgeführt und dient dazu, aktuelle Beschwerden, die medizinische Vorgeschichte, genetische Risiken sowie die Lebensumstände des Patienten zu ermitteln.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "Hintergrund",
            "textWithFormatting": `<div>
                <p>Der Begriff “<b>Anamnese</b>” bezieht sich sowohl auf den Prozess der Befragung (Anamneseerhebung) als auch auf die gesammelten Informationen (Krankengeschichte). Die Anamnese unterscheidet sich von der gezielten Exploration zusätzlicher Daten. Die <b>Katamnese</b> bildet den zeitlichen Gegenpol, indem sie den Verlauf nach der Behandlung beschreibt.</p>
            </div>`
        },
        {
            "id": 3,
            "title": "Zielsetzung",
            "textWithFormatting": `<div>
                <p>Eine sorgfältige Anamneseerhebung ist grundlegend, um diagnostische Maßnahmen zielgerichtet zu planen. Durch strukturierte Fragestellungen kann der Arzt mögliche Diagnosen eingrenzen und unnötige Untersuchungen vermeiden. Die Anamnese bietet zudem die Gelegenheit zur ersten Beobachtung des Patienten, z.B. seiner psychischen Verfassung oder seines Allgemeinzustands.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "Einteilung",
            "textWithFormatting": `<div>
                <p>Die Anamnese kann auf verschiedene Weisen eingeteilt werden:</p>
                <p><b>…nach Befragtem</b></p>
                <ul>
                    <li>• <b>Eigenanamnese:</b> Informationen, die der Patient selbst liefert.</li>
                    <li>• <b>Fremdanamnese:</b> Angaben von Angehörigen oder Beobachtern, z.B. bei Bewusstseinsstörungen.</li>
                </ul>
                <p><b>…nach Gegenstand</b></p>
                <ul>
                    <li>• <b>Somatische Anamnese:</b> Fragen zu körperlichen Symptomen.</li>
                    <li>• <b>Psychische Anamnese:</b> Untersuchung der psychischen Verfassung.</li>
                    <li>• <b>Soziale Anamnese:</b> Erhebung der Lebensumstände, z.B. Beruf und familiäre Situation.</li>
                    <li>• <b>Familienanamnese:</b> Ermittlung des genetischen Risikos für bestimmte Erkrankungen.</li>
                </ul>
                <p><b>Besondere Formen der Anamnese umfassen:</b></p>
                <ul>
                    <li>• <b>Biografische Anamnese:</b> Detaillierte Erhebung der Lebensgeschichte.</li>
                    <li>• <b>Pflegeanamnese:</b> Spezifisch in der Alten- oder Krankenpflege.</li>
                </ul>
                <p>Weitere spezifische Anamnesetypen sind:</p>
                <ul>
                    <li>• <b>Sexualanamnese, Medikamentenanamnese, Suchtanamnese, Reiseanamnese, Schmerzanamnese</b> und viele mehr.</li>
                </ul>
                <p><b>…nach Fokus</b></p>
                <ul>
                    <li>• <b>Spezielle Anamnese (Aktuelle Anamnese):</b> Erfasst die aktuellen Beschwerden.</li>
                    <li>• <b>Allgemeine Anamnese:</b> Bezieht sich auf allgemeine Gesundheitsfragen, wie Allergien, chronische Erkrankungen, Operationen, Krankenhausaufenthalte, Infektionskrankheiten und Risikofaktoren (z.B. Rauchen, Alkohol).</li>
                </ul>
                <p><b>…nach Fachgebiet</b></p>
                <ul>
                    <li>• <b>Fachspezifische Anamnesen:</b> z.B. gynäkologische, kardiologische oder urologische Anamnesen, angepasst an die jeweilige medizinische Disziplin.</li>
                </ul>
                <p><b>…nach Zeitpunkt</b></p>
                <ul>
                    <li>• <b>Erstanamnese:</b> Erste ausführliche Erhebung.</li>
                    <li>• <b>Zwischenanamnese:</b> Nachfolgende, kürzere Befragungen zur Verlaufskontrolle.</li>
                </ul>
            </div>`
        },
        {
            "id": 5,
            "title": "Dokumentation",
            "textWithFormatting": `<div>
                <p>Anamnesedaten werden in <b>Anamnesebögen</b> festgehalten, die Teil der Krankenakte sind und auch forensische Relevanz haben. Im klinischen Alltag werden zunehmend digitale Systeme zur Erfassung eingesetzt.</p>
            </div>`
        },
        {
            "id": 6,
            "title": "Neuere Entwicklungen",
            "textWithFormatting": `<div>
                <p>Moderne Technologien wie maschinelles Lernen und künstliche Intelligenz ermöglichen es, Anamnesen unabhängig vom Arzt durchzuführen. <b>Expertensysteme</b> und <b>Chatbots</b> können durch interaktive Befragungen Verdachtsdiagnosen vorschlagen und den Prozess der Anamnese unterstützen. Diese Systeme basieren auf Hierarchiebäumen und Datenbankstrukturen und tragen dazu bei, die Effizienz der Diagnosestellung zu verbessern.</p>
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
            "title": "Was versteht man unter einer Eigenanamnese?",
            "answers": [
                {
                    "name": "Angaben von Angehörigen oder Beobachtern",
                    "isCorrect": false
                },
                {
                    "name": "Informationen, die der Patient selbst liefert",
                    "isCorrect": true
                },
                {
                    "name": "Eine Untersuchung durch bildgebende Verfahren",
                    "isCorrect": false
                },
                {
                    "name": "Der Verlauf einer Behandlung",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Art von Anamnese erfasst die Lebensumstände des Patienten?",
            "answers": [
                {
                    "name": "Familiäre Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Soziale Anamnese",
                    "isCorrect": true
                },
                {
                    "name": "Somatische Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Spezielle Anamnese",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Anamnese wird von Angehörigen oder Beobachtern gegeben?",
            "answers": [
                {
                    "name": "Fremdanamnese",
                    "isCorrect": true
                },
                {
                    "name": "Eigenanamnese",
                    "isCorrect": false
                },
                {
                    "name": "Spezielle Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Katamnese",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Was beinhaltet die Erstanamnese?",
            "answers": [
                {
                    "name": "Die Erhebung nach der Behandlung",
                    "isCorrect": false
                },
                {
                    "name": "Eine Zwischenkontrolle der Krankheitsentwicklung",
                    "isCorrect": false
                },
                {
                    "name": "Die erste ausführliche Erhebung der Krankengeschichte",
                    "isCorrect": true
                },
                {
                    "name": "Die Dokumentation der Untersuchungsergebnisse",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welcher Begriff beschreibt die Erfassung von aktuellen Beschwerden?",
            "answers": [
                {
                    "name": "Spezielle Anamnese",
                    "isCorrect": true
                },
                {
                    "name": "Familienanamnese",
                    "isCorrect": false
                },
                {
                    "name": "Psychische Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Soziale Anamnese",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Anamneseform ist besonders für die Erhebung in der Alten- und Krankenpflege relevant?",
            "answers": [
                {
                    "name": "Biografische Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Pflegeanamnese",
                    "isCorrect": true
                },
                {
                    "name": "Spezielle Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Psychische Anamnese",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Was erfasst die Familienanamnese?",
            "answers": [
                {
                    "name": "Frühere Operationen",
                    "isCorrect": false
                },
                {
                    "name": "Genetische Risiken für bestimmte Erkrankungen",
                    "isCorrect": true
                },
                {
                    "name": "Beruf und familiäre Situation",
                    "isCorrect": false
                },
                {
                    "name": "Akute Beschwerden",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche Anamneseform bezieht sich auf die psychische Verfassung des Patienten?",
            "answers": [
                {
                    "name": "Psychische Anamnese",
                    "isCorrect": true
                },
                {
                    "name": "Somatische Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Soziale Anamnese",
                    "isCorrect": false
                },
                {
                    "name": "Medikamentenanamnese",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Wie werden Anamnesedaten typischerweise festgehalten?",
            "answers": [
                {
                    "name": "Nur in der Patientenakte",
                    "isCorrect": false
                },
                {
                    "name": "In Anamnesebögen",
                    "isCorrect": true
                },
                {
                    "name": "Mündlich ohne Dokumentation",
                    "isCorrect": false
                },
                {
                    "name": "Im Abschlussbericht der Behandlung",
                    "isCorrect": false
                }
            ]
        },
        {
            "title": "Welche moderne Technologie wird zur Erhebung der Anamnese verwendet?",
            "answers": [
                {
                    "name": "Ultraschallgeräte",
                    "isCorrect": false
                },
                {
                    "name": "CT-Scanner",
                    "isCorrect": false
                },
                {
                    "name": "Expertensysteme und Chatbots",
                    "isCorrect": true
                },
                {
                    "name": "MRI-Geräte",
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
            "title": "Warum ist die Anamnese eine wichtige Grundlage für die Diagnose?",
            "hidden_answer": "Die Anamnese ermöglicht es, Informationen über die Beschwerden und die medizinische Vorgeschichte des Patienten zu sammeln, um gezielte diagnostische Maßnahmen zu planen und unnötige Untersuchungen zu vermeiden."
        },
        {
            "title": "Was bedeutet der Begriff 'Fremdanamnese'?",
            "hidden_answer": "Fremdanamnese beschreibt die Sammlung von Informationen über den Patienten durch Angehörige oder Beobachter, wenn der Patient selbst nicht in der Lage ist, Auskunft zu geben."
        },
        {
            "title": "Wofür wird die Familienanamnese genutzt?",
            "hidden_answer": "Die Familienanamnese wird verwendet, um genetische Risiken und familiäre Häufungen bestimmter Krankheiten zu ermitteln, die bei der Diagnosestellung relevant sein können."
        },
        {
            "title": "Was ist der Unterschied zwischen Eigenanamnese und Fremdanamnese?",
            "hidden_answer": "Die Eigenanamnese bezieht sich auf Informationen, die der Patient selbst liefert, während die Fremdanamnese durch Auskünfte von Dritten, wie Angehörigen, erfolgt."
        },
        {
            "title": "Welche Anamneseform hilft, die psychische Verfassung des Patienten zu beurteilen?",
            "hidden_answer": "Die psychische Anamnese dient dazu, Informationen über die mentale Gesundheit des Patienten zu sammeln und zu analysieren."
        },
        {
            "title": "Warum ist die soziale Anamnese wichtig?",
            "hidden_answer": "Die soziale Anamnese hilft, die Lebensumstände des Patienten zu verstehen, die seine Gesundheit beeinflussen können, z.B. Beruf, familiäre Situation und soziale Unterstützung."
        },
        {
            "title": "Welche Anamneseform bezieht sich auf aktuelle Beschwerden des Patienten?",
            "hidden_answer": "Die spezielle oder aktuelle Anamnese konzentriert sich auf die gegenwärtigen Beschwerden des Patienten und deren Verlauf."
        },
        {
            "title": "Was ist die Erstanamnese?",
            "hidden_answer": "Die Erstanamnese ist die erste umfassende Befragung eines Patienten zu seiner Krankengeschichte, die oft bei der ersten Konsultation durchgeführt wird."
        },
        {
            "title": "Welche Rolle spielt die Dokumentation der Anamnese?",
            "hidden_answer": "Die Dokumentation der Anamnese ist entscheidend, um die Informationen für spätere Diagnosen und Behandlungen festzuhalten und eine forensische Nachvollziehbarkeit zu gewährleisten."
        },
        {
            "title": "Welche modernen Technologien unterstützen die Anamneseerhebung?",
            "hidden_answer": "Moderne Technologien wie Chatbots und Expertensysteme können interaktive Befragungen durchführen, um Anamnesedaten zu erfassen und potenzielle Diagnosen vorzuschlagen."
        }
    ],
    },
    //  End of parent tab 3
  ],
};
