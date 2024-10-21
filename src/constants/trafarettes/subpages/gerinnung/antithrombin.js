import img1 from '../../../../assets/hamostase_fibrinolyse.png';

export default {
  path: "antithrombin",
  // http://localhost:5173/trafarette/antithrombin
  content: [
    {
      id: 1,
      title: "Antithrombin (AT)",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
           
            <p><strong>Antithrombin (AT)</strong> ist ein Protein, das <a href="/trafarette/gerinnung">die Blutgerinnung</a> hemmt. Es ist auch unter der älteren Bezeichnung <strong>Antithrombin III</strong> oder <strong>Heparin-Kofaktor I</strong> bekannt. Zudem wird es als Blutprodukt zur Substitution bei Patienten mit Antithrombinmangel eingesetzt, etwa in Form von <strong>Antithrombin-Konzentrat</strong>.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Biochemie",
          "textWithFormatting": `<div>
          
            <p>Antithrombin ist ein <strong>Glykoprotein</strong>, das in der Leber gebildet wird und zu den <strong>Serinproteaseinhibitoren</strong> gehört. Es besteht aus 432 Aminosäuren, enthält drei Disulfidbrücken sowie vier Glykosylierungsstellen. Die dominante Form, <strong>α-Antithrombin</strong>, kommt im Blutplasma vor, wo es an jede Glykosylierungsstelle ein Oligosaccharid gebunden hat.</p>
            <ul>
              <li>• <strong>Molekulargewicht</strong>: ca. 58 kDa</li>
              <li>• <strong>Halbwertszeit</strong>: ca. 60 Stunden bei Gesunden</li>
              <li>• <strong>Plasmakonzentration</strong>: 3-5 µmol/l (entspricht etwa 150 mg/l)</li>
            </ul>
          </div>`
        },
        {
          "id": 3,
          "title": "3. Physiologie",
          "textWithFormatting": `<div>
            
            <p>Antithrombin hemmt die Blutgerinnung durch <strong>Inaktivierung von Gerinnungsfaktoren</strong>, insbesondere <strong><a href="/trafarette/faktorII">Thrombin</a></strong> und <strong>Faktor Xa</strong>, aber auch <strong>Faktor IXa, XIa</strong> und <strong>XIIa</strong>. Durch Heparin wird die Wirksamkeit von Antithrombin erheblich verstärkt, indem die Affinität zu den Gerinnungsfaktoren um den Faktor 1000 gesteigert wird.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "4. Klinik",
          "textWithFormatting": `<div>
           
            <p>Ein <strong>angeborener heterozygoter Antithrombinmangel</strong> stellt einen seltenen, aber signifikanten Risikofaktor für <strong>Thromboembolien</strong> dar. Daher ist der Antithrombinspiegel ein wichtiger Bestandteil der <strong>Thrombophiliediagnostik</strong>. Ein <strong>homozygoter Mangel</strong> ist hingegen nicht mit dem Leben vereinbar.</p>
            <p>Der Antithrombinspiegel gibt zudem Hinweise auf die <strong>Lebersyntheseleistung</strong>, ähnlich wie der Quick-Wert. Niedrige Werte können auf <strong>Verbrauchskoagulopathien</strong> hinweisen. Bei Antithrombinmangel kann die <strong>Heparinwirkung</strong> vermindert oder aufgehoben sein.</p>
          </div>`
        },
        {
          "id": 5,
          "title": "5. Labormedizin",
          "textWithFormatting": `<div>
            
            <h3>Material</h3>
            <p>Zur Untersuchung werden 5 ml <strong> <a href="/trafarette/citratantikoagulation">Citratblut</a></strong> benötigt.</p>
            
            <h3>Hinweise zur Abnahme</h3>
            <p>Es ist darauf zu achten, dass das Blutentnahmeröhrchen vollständig gefüllt wird und das Blut nach der Abnahme mehrfach geschwenkt wird. Die Probe sollte innerhalb weniger Stunden analysiert werden. Bei längeren Verzögerungen muss sie zentrifugiert und das Plasma eingefroren werden.</p>
            
            <h3>Referenzbereich</h3>
            <table>
              <tr>
                <th>Konzentration im Citratplasma</th>
                <th>Antithrombinaktivität</th>
              </tr>
              <tr>
                <td>18 - 34 mg/dl</td>
                <td>75 - 125% (relativ zu Normalplasma)</td>
              </tr>
            </table>
            
            <h3>Interpretation</h3>
            <p><strong>Erhöhtes Antithrombin</strong>:</p>
            <ul>
              <li>• Orale Antikoagulation</li>
              <li>• Vitamin-K-Mangel</li>
              <li>• Cholestase</li>
            </ul>
            
            <p><strong>Erniedrigtes Antithrombin</strong>:</p>
            <ul>
              <li>• Angeborener Antithrombinmangel</li>
              <li>• Leberschäden</li>
              <li>• Sepsis</li>
              <li>• Proteinverlust (z.B. bei Nierenerkrankungen)</li>
              <li>• Verbrauchskoagulopathie</li>
              <li>• Einnahme von Ovulationshemmern</li>
              <li>• Heparintherapie (bis zum 2. Tag)</li>
              <li>• Neugeborene (physiologischer Vitamin-K-Mangel)</li>
            </ul>
            
            <h3>Störfaktoren</h3>
            <p>Die Antithrombinmessung kann durch Antikoagulantien wie <strong>DOAKs</strong> gestört werden. Der Effekt hängt von der verwendeten Messmethode ab. Beispielsweise führen <strong>Thrombinhemmer</strong> zu falsch hohen Werten, wenn die Messung über die Inaktivierung von Thrombin erfolgt. Auch <strong>Faktor-Xa-Hemmer</strong> können falsche Werte verursachen, wenn die Anti-Faktor Xa-Aktivität gemessen wird.</p>
            <p>Störungen durch Heparin können durch Zugabe von heparinneutralisierenden Substanzen minimiert werden.</p>
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
          "title": "Welche Hauptfunktion hat Antithrombin im Blutgerinnungssystem?",
          "answers": [
            {
              "name": "Es aktiviert die Blutgerinnung",
              "isCorrect": false
            },
            {
              "name": "Es hemmt die Blutgerinnung durch Inaktivierung von Thrombin und Faktor Xa",
              "isCorrect": true
            },
            {
              "name": "Es fördert die Bildung von Fibrin",
              "isCorrect": false
            },
            {
              "name": "Es erhöht die Plasminaktivität",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Substanz verstärkt die Wirkung von Antithrombin um den Faktor 1000?",
          "answers": [
            {
              "name": "Vitamin K",
              "isCorrect": false
            },
            {
              "name": "Heparin",
              "isCorrect": true
            },
            {
              "name": "Fibrinogen",
              "isCorrect": false
            },
            {
              "name": "Thrombin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welches Organ produziert Antithrombin?",
          "answers": [
            {
              "name": "Die Niere",
              "isCorrect": false
            },
            {
              "name": "Die Leber",
              "isCorrect": true
            },
            {
              "name": "Das Herz",
              "isCorrect": false
            },
            {
              "name": "Die Milz",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Gerinnungsfaktoren werden primär von Antithrombin inaktiviert?",
          "answers": [
            {
              "name": "Faktor VIII und Faktor IX",
              "isCorrect": false
            },
            {
              "name": "Thrombin und Faktor Xa",
              "isCorrect": true
            },
            {
              "name": "Fibrin und Fibrinogen",
              "isCorrect": false
            },
            {
              "name": "Plasmin und Plasminogen",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was passiert bei einem angeborenen Antithrombinmangel?",
          "answers": [
            {
              "name": "Es kommt zu einer erhöhten Thromboseneigung",
              "isCorrect": true
            },
            {
              "name": "Es tritt eine erhöhte Blutungsneigung auf",
              "isCorrect": false
            },
            {
              "name": "Die Fibrinolyse wird verstärkt",
              "isCorrect": false
            },
            {
              "name": "Der Antithrombinspiegel steigt stark an",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Form von Antithrombin kommt am häufigsten im Blutplasma vor?",
          "answers": [
            {
              "name": "β-Antithrombin",
              "isCorrect": false
            },
            {
              "name": "α-Antithrombin",
              "isCorrect": true
            },
            {
              "name": "γ-Antithrombin",
              "isCorrect": false
            },
            {
              "name": "δ-Antithrombin",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Wie wird ein erworbener Antithrombinmangel häufig verursacht?",
          "answers": [
            {
              "name": "Durch Lebererkrankungen oder Verbrauchskoagulopathie",
              "isCorrect": true
            },
            {
              "name": "Durch Vitamin-K-Mangel",
              "isCorrect": false
            },
            {
              "name": "Durch Nierenerkrankungen",
              "isCorrect": false
            },
            {
              "name": "Durch angeborene genetische Defekte",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche klinische Bedeutung hat die Bestimmung des Antithrombinspiegels?",
          "answers": [
            {
              "name": "Es dient zur Diagnose von Fibrinolyse-Störungen",
              "isCorrect": false
            },
            {
              "name": "Es hilft bei der Beurteilung der Lebersyntheseleistung und Thrombosegefahr",
              "isCorrect": true
            },
            {
              "name": "Es zeigt die Aktivität der Thrombozytenaggregation an",
              "isCorrect": false
            },
            {
              "name": "Es misst die Fibrinkonzentration im Plasma",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Welche Rolle spielt Heparin in Kombination mit Antithrombin?",
          "answers": [
            {
              "name": "Heparin blockiert die Wirkung von Antithrombin",
              "isCorrect": false
            },
            {
              "name": "Heparin verstärkt die hemmende Wirkung von Antithrombin auf die Gerinnungsfaktoren",
              "isCorrect": true
            },
            {
              "name": "Heparin aktiviert die Blutgerinnung",
              "isCorrect": false
            },
            {
              "name": "Heparin erhöht die Produktion von Antithrombin in der Leber",
              "isCorrect": false
            }
          ]
        },
        {
          "title": "Was kann bei Patienten mit Antithrombinmangel während einer Heparintherapie geschehen?",
          "answers": [
            {
              "name": "Die Heparinwirkung kann vermindert sein",
              "isCorrect": true
            },
            {
              "name": "Die Heparinwirkung wird verstärkt",
              "isCorrect": false
            },
            {
              "name": "Die Gerinnungsneigung wird vollständig gehemmt",
              "isCorrect": false
            },
            {
              "name": "Die Fibrinolyse wird angeregt",
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
          "title": "Welche Hauptaufgabe hat Antithrombin im Blutgerinnungssystem?",
          "hidden_answer": "Antithrombin hemmt die Blutgerinnung, indem es Thrombin und andere Gerinnungsfaktoren wie Faktor Xa inaktiviert."
        },
        {
          "title": "Wie verstärkt Heparin die Wirkung von Antithrombin?",
          "hidden_answer": "Heparin bindet an Antithrombin und erhöht dessen Fähigkeit, Thrombin und Faktor Xa um das bis zu 1000-Fache zu hemmen."
        },
        {
          "title": "Wo wird Antithrombin hauptsächlich im Körper produziert?",
          "hidden_answer": "Antithrombin wird hauptsächlich in der Leber produziert."
        },
        {
          "title": "Welche klinischen Konsequenzen hat ein Antithrombinmangel?",
          "hidden_answer": "Ein Mangel an Antithrombin erhöht das Risiko für Thrombosen und Embolien, da die Blutgerinnung nicht ausreichend gehemmt wird."
        },
        {
          "title": "Welche Gerinnungsfaktoren inaktiviert Antithrombin hauptsächlich?",
          "hidden_answer": "Antithrombin inaktiviert vor allem Thrombin und Faktor Xa, aber auch die Faktoren IXa, XIa und XIIa."
        },
        {
          "title": "Welche Formen von Antithrombin existieren im Blutplasma?",
          "hidden_answer": "Die dominante Form im Blutplasma ist α-Antithrombin, das an Oligosaccharide gebunden ist."
        },
        {
          "title": "Wie wirkt sich ein erworbener Antithrombinmangel aus?",
          "hidden_answer": "Ein erworbener Mangel an Antithrombin kann durch Lebererkrankungen, Sepsis oder Verbrauchskoagulopathie verursacht werden und erhöht das Thromboserisiko."
        },
        {
          "title": "Wie beeinflusst ein Antithrombinmangel die Heparintherapie?",
          "hidden_answer": "Bei einem Antithrombinmangel kann die Wirkung von Heparin stark vermindert oder aufgehoben sein, da Heparin auf Antithrombin angewiesen ist, um die Gerinnungshemmung zu verstärken."
        },
        {
          "title": "Welche Rolle spielt Antithrombin in der Thrombophiliediagnostik?",
          "hidden_answer": "Der Antithrombinspiegel wird zur Diagnose von Thrombophilien verwendet, um angeborene oder erworbene Störungen der Gerinnungshemmung zu erkennen."
        },
        {
          "title": "Welche Bedeutung hat die Bestimmung des Antithrombinspiegels für die Beurteilung der Leberfunktion?",
          "hidden_answer": "Da Antithrombin in der Leber produziert wird, kann ein erniedrigter Antithrombinspiegel auf eine eingeschränkte Lebersyntheseleistung hindeuten."
        },
      ],
    },
    //  End of parent tab 3
  ],
};
