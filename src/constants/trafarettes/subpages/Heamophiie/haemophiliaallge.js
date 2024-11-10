export default {
  path: "haemophiliaallge",
  // http://localhost:5173/trafarette/haemophiliaallge
  content: [
    {
      id: 1,
      title: "Hämophilie",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 3,
          "title": "1. Definition",
          "textWithFormatting": `<div>
            <p>Hämophilie ist eine genetisch bedingte Blutgerinnungsstörung, die vor allem Männer betrifft. Patienten mit Hämophilie haben eine verzögerte oder stark beeinträchtigte <a href="/trafarette/gerinnung">Blutgerinnung</a>, was zu spontanen Blutungen führen kann, die oft ohne sichtbare äußere Verletzungen auftreten.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "2. Einteilung",
          "textWithFormatting": `<div>
            <p>Es gibt verschiedene Formen der Hämophilie, die sich durch unterschiedliche Defekte der Gerinnungsfaktoren auszeichnen:</p>
            <ul>
              <li><strong><a href="/trafarette/haemophiliaa">Hämophilie A</a> und <a href="/trafarette/haemophiliab">Hämophilie B</a>:</strong> Beide Formen sind X-chromosomal-rezessiv vererbte Erkrankungen, wodurch vor allem Männer betroffen sind. Hämophilie A entsteht durch einen Mangel an <a href="/trafarette/faktorVIII">Faktor VIII</a>, während Hämophilie B auf einem Mangel an <a href="/trafarette/faktorIX">Faktor IX</a> beruht. Beide Faktoren sind essenziell für die Gerinnungskaskade. Hämophilie B ist seltener als Hämophilie A.</li>
              <li><strong><a href="/trafarette/faktorxmangel">Autosomal-rezessive Gerinnungsdefekte</a>:</strong> Diese seltenen Formen betreffen Männer und Frauen gleichermaßen. Beispiele sind Mängel an Gerinnungsfaktoren wie dem <a href="/trafarette/faktorX">Faktor X (Stuart-Prower-Faktor)</a>.</li>
              <li><strong><a href="/trafarette/faktorvmangel">Parahämophilie (Owren-Syndrom)</a>:</strong> Ein Mangel an <a href="/trafarette/faktorV">Faktor V (Proakzelerin)</a>, der autosomal-rezessiv vererbt wird.</li>
              <li><strong><a href="/trafarette/willebrandjürgenssyndrom">Angiohämophilie Willebrand-Jürgens-Syndrom (vWS)</a>:</strong> Die häufigste autosomal-dominant vererbte Blutungsneigung, die durch einen Mangel oder Defekt des <a href="/trafarette/vonwillebrant">von-Willebrand-Faktors</a> verursacht wird.</li>
              <li><strong><a href="/trafarette/rosenthalsyndrom">Hämophilie C (Rosenthal-Syndrom)</a>:</strong> Hier fehlt <a href="/trafarette/faktorXI">Faktor XI</a>, was bei Kindern zu Blutungen in Gelenken oder nach kleineren Verletzungen führen kann.</li>
            </ul>
          </div>`
        },
        {
          "id": 5,
          "title": "3. Symptome",
          "textWithFormatting": `<div>
            <p>Die Symptome variieren je nach Schweregrad der Erkrankung:</p>
            <ul>
              <li><strong>Schwere Formen:</strong> Patienten haben verlängerte und starke Blutungen nach Verletzungen sowie häufig Spontanblutungen. Typische Symptome sind Hämatome, Gelenkeinblutungen und innere Blutungen.</li>
              <li><strong>Leichte Formen:</strong> Blutungen treten in der Regel nur bei größeren Verletzungen oder operativen Eingriffen auf.</li>
            </ul>
          </div>`
        },
        {
          "id": 6,
          "title": "4. Therapie",
          "textWithFormatting": `<div>
            <p>Die Therapie der Hämophilie richtet sich nach der jeweiligen Form und dem Schweregrad der Erkrankung. Im Mittelpunkt steht die Prophylaxe und Behandlung von Blutungen durch Substitution der fehlenden Gerinnungsfaktoren.</p>
            <p>Seit 2022 spielen auch Gentherapien eine zunehmende Rolle, bei denen intakte Gene zur Produktion der fehlenden Faktoren in die Körperzellen eingeschleust werden. Beispiele sind:</p>
            <ul>
              <li><strong><a href="/trafarette/valoctocogenroxaparvovec">Valoctocogen-Roxaparvovec (Roctavian®)</a></strong> für <a href="/trafarette/haemophiliaa">Hämophilie A</a></li>
              <li><strong><a href="/trafarette/etranacogendezaparvovec">Etranacogene-Dezaparvovec (Hemgenix®)</a></strong> für <a href="/trafarette/haemophiliab">Hämophilie B</a></li>
            </ul>
            <p>Eine Herausforderung bei der Substitutionstherapie ist die mögliche Bildung von neutralisierenden Antikörpern, die die Wirkung der zugeführten Gerinnungsfaktoren hemmen, insbesondere bei Hämophilie A und Hämophilie B.</p>
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
          "title": "Welcher Faktor fehlt bei Hämophilie A?",
          "answers": [
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
            },
            {
              "name": "Faktor V",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher Faktor ist bei Hämophilie B betroffen?",
          "answers": [
            {
              "name": "Faktor VIII",
              "isCorrect": false
            },
            {
              "name": "Faktor IX",
              "isCorrect": true
            },
            {
              "name": "Faktor XI",
              "isCorrect": false
            },
            {
              "name": "Faktor VII",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Erbform hat Hämophilie A?",
          "answers": [
            {
              "name": "X-chromosomal rezessiv",
              "isCorrect": true
            },
            {
              "name": "Autosomal rezessiv",
              "isCorrect": false
            },
            {
              "name": "Autosomal dominant",
              "isCorrect": false
            },
            {
              "name": "Y-chromosomal rezessiv",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Gentherapie wird zur Behandlung von Hämophilie A eingesetzt?",
          "answers": [
            {
              "name": "Valoctocogen-Roxaparvovec (Roctavian®)",
              "isCorrect": true
            },
            {
              "name": "Etranacogene-Dezaparvovec (Hemgenix®)",
              "isCorrect": false
            },
            {
              "name": "Streptokinase",
              "isCorrect": false
            },
            {
              "name": "Heparin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Blutungsart ist bei Hämophilie typisch?",
          "answers": [
            {
              "name": "Gelenkeinblutung",
              "isCorrect": true
            },
            {
              "name": "Nasenbluten",
              "isCorrect": false
            },
            {
              "name": "Blut im Urin",
              "isCorrect": false
            },
            {
              "name": "Magenblutungen",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was ist ein typisches Symptom der Hämophilie?",
          "answers": [
            {
              "name": "Spontanblutungen",
              "isCorrect": true
            },
            {
              "name": "Hautrötungen",
              "isCorrect": false
            },
            {
              "name": "Bluthochdruck",
              "isCorrect": false
            },
            {
              "name": "Erhöhter Cholesterinspiegel",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher Faktor wird bei Hämophilie C substituiert?",
          "answers": [
            {
              "name": "Faktor XI",
              "isCorrect": true
            },
            {
              "name": "Faktor VIII",
              "isCorrect": false
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
        },
        {
          "title": "Was ist das Ziel der Substitutionstherapie bei Hämophilie?",
          "answers": [
            {
              "name": "Fehlende Gerinnungsfaktoren zu ersetzen",
              "isCorrect": true
            },
            {
              "name": "Blutdruck zu senken",
              "isCorrect": false
            },
            {
              "name": "Entzündungen zu reduzieren",
              "isCorrect": false
            },
            {
              "name": "Immunsystem zu stärken",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welcher Faktor fehlt bei Parahämophilie?",
          "answers": [
            {
              "name": "Faktor V",
              "isCorrect": true
            },
            {
              "name": "Faktor X",
              "isCorrect": false
            },
            {
              "name": "Faktor VII",
              "isCorrect": false
            },
            {
              "name": "Faktor IX",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Rolle spielt der von-Willebrand-Faktor bei der Blutgerinnung?",
          "answers": [
            {
              "name": "Er fördert die Anheftung von Thrombozyten an verletzte Gefäßwände",
              "isCorrect": true
            },
            {
              "name": "Er hemmt die Blutgerinnung",
              "isCorrect": false
            },
            {
              "name": "Er ist ein Gerinnungshemmer",
              "isCorrect": false
            },
            {
              "name": "Er aktiviert Plasminogen",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Erbform hat das von-Willebrand-Jürgens-Syndrom?",
          "answers": [
            {
              "name": "Autosomal dominant",
              "isCorrect": true
            },
            {
              "name": "Autosomal rezessiv",
              "isCorrect": false
            },
            {
              "name": "X-chromosomal rezessiv",
              "isCorrect": false
            },
            {
              "name": "Y-chromosomal dominant",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Komplikation kann bei der Behandlung von Hämophilie A auftreten?",
          "answers": [
            {
              "name": "Bildung von Antikörpern gegen Faktor VIII",
              "isCorrect": true
            },
            {
              "name": "Thrombose",
              "isCorrect": false
            },
            {
              "name": "Mangel an Fibrinogen",
              "isCorrect": false
            },
            {
              "name": "Erhöhte Blutfettwerte",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was ist Hämophilie C?",
          "answers": [
            {
              "name": "Eine Blutgerinnungsstörung aufgrund von Faktor XI-Mangel",
              "isCorrect": true
            },
            {
              "name": "Ein Synonym für Hämophilie B",
              "isCorrect": false
            },
            {
              "name": "Ein Mangel an von-Willebrand-Faktor",
              "isCorrect": false
            },
            {
              "name": "Eine seltene Form von Parahämophilie",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Therapiemöglichkeit wird für Hämophilie B genutzt?",
          "answers": [
            {
              "name": "Etranacogene-Dezaparvovec (Hemgenix®)",
              "isCorrect": true
            },
            {
              "name": "Valoctocogen-Roxaparvovec (Roctavian®)",
              "isCorrect": false
            },
            {
              "name": "Streptokinase",
              "isCorrect": false
            },
            {
              "name": "Heparin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Wie wird Hämophilie vererbt?",
          "answers": [
            {
              "name": "X-chromosomal rezessiv",
              "isCorrect": true
            },
            {
              "name": "Autosomal dominant",
              "isCorrect": false
            },
            {
              "name": "Y-chromosomal dominant",
              "isCorrect": false
            },
            {
              "name": "Autosomal rezessiv",
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
        {
          "title": "Welche Hauptursache liegt Hämophilie A zugrunde?",
          "hidden_answer": "Hämophilie A wird durch einen Mangel an Faktor VIII verursacht, der eine zentrale Rolle in der Blutgerinnung spielt."
        },
        {
          "title": "Wie unterscheidet sich Hämophilie B von Hämophilie A?",
          "hidden_answer": "Hämophilie B wird durch einen Mangel an Faktor IX verursacht, während bei Hämophilie A ein Mangel an Faktor VIII vorliegt."
        },
        {
          "title": "Welche Blutungsarten treten bei schwerer Hämophilie häufig auf?",
          "hidden_answer": "Bei schwerer Hämophilie treten häufig Spontanblutungen auf, insbesondere in Gelenken (Hämarthros) und Muskeln."
        },
        {
          "title": "Welche Vererbungsmuster zeigt die Hämophilie?",
          "hidden_answer": "Hämophilie ist eine X-chromosomal-rezessive Erbkrankheit, die hauptsächlich Männer betrifft, da sie nur ein X-Chromosom besitzen."
        },
        {
          "title": "Wie wird Hämophilie C vererbt?",
          "hidden_answer": "Hämophilie C wird autosomal-rezessiv vererbt, was bedeutet, dass sowohl Männer als auch Frauen betroffen sein können."
        },
        {
          "title": "Welche Bedeutung hat der von-Willebrand-Faktor für die Blutgerinnung?",
          "hidden_answer": "Der von-Willebrand-Faktor unterstützt die Blutgerinnung, indem er die Anheftung von Thrombozyten an verletzte Gefäßwände erleichtert."
        },
        {
          "title": "Welche Komplikation kann bei der Behandlung von Hämophilie A auftreten?",
          "hidden_answer": "Eine mögliche Komplikation ist die Bildung von Hemmkörpern, die die Wirksamkeit des substituierten Faktors VIII neutralisieren."
        },
        {
          "title": "Was sind typische Symptome einer leichten Hämophilie?",
          "hidden_answer": "Typische Symptome einer leichten Hämophilie treten meist nach größeren Verletzungen oder operativen Eingriffen auf und umfassen verlängerte Blutungen."
        },
        {
          "title": "Was ist der Hauptzweck der Substitutionstherapie bei Hämophilie?",
          "hidden_answer": "Der Hauptzweck der Substitutionstherapie bei Hämophilie ist die Bereitstellung der fehlenden Gerinnungsfaktoren, um Blutungen zu verhindern oder zu behandeln."
        },
        {
          "title": "Wie funktioniert die Gentherapie bei Hämophilie?",
          "hidden_answer": "Die Gentherapie bei Hämophilie besteht darin, intakte Gene für die defizienten Gerinnungsfaktoren in die Körperzellen einzubringen, um die Produktion dieser Faktoren zu ermöglichen."
        },
      ],
    },
    //  End of parent tab 3
  ],
};
