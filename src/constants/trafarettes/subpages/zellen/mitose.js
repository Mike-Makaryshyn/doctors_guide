import img1 from "../../../../assets/mitose.png";
export default {
  path: "mitose",
  // http://localhost:5173/trafarette/mitose
  content: [
    {
      id: 1,
      title: "Mitose",
      childTabs: [
        {
          "id": 1,
          "title": "Definition",
          "textWithFormatting": `<div>
            <p>Die Mitose ist eine Kernteilung, die zur Aufteilung des genetischen Materials einer Mutterzelle in zwei genetisch identische Tochterzellen führt. Sie ist eine Phase des Zellzyklus, die ausschließlich in eukaryontischen Zellen vorkommt und eine essenzielle Rolle im Wachstum, der Geweberegeneration und der Fortpflanzung spielt. Die Mitose ermöglicht eine exakte Verteilung der zuvor in der S-Phase verdoppelten DNA.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "Phasen der Mitose",
          "textWithFormatting": `<div>
            <p>Die Mitose wird klassisch in fünf Phasen unterteilt, die nacheinander ablaufen und jeweils charakteristische Prozesse aufweisen:</p>
            <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <ul>
              <li>• <b>Prophase</b>: Die Chromosomen, die sich während der Interphase repliziert haben, kondensieren und werden sichtbar. Jedes Chromosom besteht aus zwei Schwesterchromatiden, die am Zentromer verbunden sind. Die Kernhülle beginnt sich aufzulösen und die beiden Zentrosomen wandern zu den entgegengesetzten Zellpolen, wobei sie den Spindelapparat aus Mikrotubuli ausbilden.</li>
              <li>• <b>Prometaphase</b>: Die Kernhülle löst sich vollständig auf und die Mikrotubuli des Spindelapparates heften sich an die Kinetochore der Chromosomen. Die Chromosomen beginnen sich zu bewegen und ordnen sich allmählich in der Mitte der Zelle an.</li>
              <li>• <b>Metaphase</b>: Die Chromosomen erreichen die sogenannte Metaphasenplatte, eine imaginäre Ebene, die sich in der Mitte der Zelle befindet. Diese Phase stellt den Höhepunkt der Organisation dar und bietet die beste Möglichkeit, ein Karyogramm zu erstellen, da die Chromosomen klar unterscheidbar sind.</li>
              <li>• <b>Anaphase</b>: Die Spindelfasern verkürzen sich, wodurch die Schwesterchromatiden getrennt und zu den gegenüberliegenden Zellpolen gezogen werden. Dies führt zur Bildung der Tochterchromosomen und stellt sicher, dass jede neue Zelle eine vollständige Kopie des genetischen Materials erhält.</li>
              <li>• <b>Telophase</b>: Die Chromosomen entspiralisieren sich und kehren in einen weniger kondensierten Zustand zurück. Neue Kernhüllen bilden sich um die Chromosomen an beiden Zellpolen und der Nucleolus erscheint erneut. Die Zellteilung (Zytokinese) beginnt, die die beiden neuen Zellen voneinander trennt.</li>
            </ul>
          </div>`
        },
        {
          "id": 3,
          "title": "Zytokinese",
          "textWithFormatting": `<div>
            <p>Nach der Mitose erfolgt die Zytokinese, bei der das Zytoplasma der Mutterzelle durch Einschnürung (bei tierischen Zellen) oder durch Bildung einer Zellplatte (bei pflanzlichen Zellen) geteilt wird, sodass zwei genetisch identische Tochterzellen entstehen. Diese Tochterzellen verfügen über eine vollständige Kopie des Chromosomensatzes der Ausgangszelle.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "Sonderformen der Mitose",
          "textWithFormatting": `<div>
            <p>Es existieren verschiedene Formen der Mitose, die unter besonderen Bedingungen auftreten:</p>
            <ul>
              <li>• <b>Amitose</b>: Eine direkte Zellteilung ohne typische mitotische Phasen, die in bestimmten Zellen, wie z.B. bei alten oder degenerierenden Geweben, vorkommen kann.</li>
              <li>• <b>Endomitose</b>: Eine spezielle Form der Zellkernteilung, bei der sich die DNA ohne Teilung der Zelle verdoppelt, was zu polyploiden Zellen führt.</li>
              <li>• <b>Polytänisierung</b>: Eine extreme Form der Endomitose, bei der sich die DNA mehrfach verdoppelt, ohne dass die Zellkerne sich teilen, was zu großen Zellkernen mit vielfach verdickten Chromosomen führt (z.B. bei Speicheldrüsenchromosomen von Insekten).</li>
            </ul>
          </div>`
        },
        {
          "id": 5,
          "title": "Klinische Bedeutung",
          "textWithFormatting": `<div>
            <p>Die Mitose hat eine hohe klinische Relevanz, da die Mitoserate als Indikator für die Zellteilungsaktivität verwendet wird. In der Pathologie ist sie ein essenzieller Parameter zur Einschätzung der Aggressivität von Tumoren. Eine erhöhte Mitoserate deutet oft auf ein schnelles Zellwachstum und damit auf ein potenziell bösartiges Verhalten des Gewebes hin. Eine genaue Analyse der Mitosephasen kann bei der Diagnose und Prognose von Krebsarten von entscheidender Bedeutung sein.</p>
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
          "title": "In welcher Phase der Mitose ordnen sich die Chromosomen in der Zellmitte an?",
          "answers": [
            { "name": "Prophase", "isCorrect": false },
            { "name": "Anaphase", "isCorrect": false },
            { "name": "Metaphase", "isCorrect": true },
            { "name": "Telophase", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Struktur ist für die Trennung der Schwesterchromatiden verantwortlich?",
          "answers": [
            { "name": "Zellmembran", "isCorrect": false },
            { "name": "Spindelapparat", "isCorrect": true },
            { "name": "Zentrosom", "isCorrect": false },
            { "name": "Kinetochor", "isCorrect": false }
          ]
        },
        {
          "title": "Was passiert in der Anaphase der Mitose?",
          "answers": [
            { "name": "Die Schwesterchromatiden werden zu den Zellpolen gezogen.", "isCorrect": true },
            { "name": "Die Chromosomen kondensieren und werden sichtbar.", "isCorrect": false },
            { "name": "Die Chromosomen ordnen sich an der Metaphasenplatte an.", "isCorrect": false },
            { "name": "Die Kernhülle bildet sich um die Chromosomen.", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Phase der Mitose folgt direkt auf die Prophase?",
          "answers": [
            { "name": "Metaphase", "isCorrect": false },
            { "name": "Telophase", "isCorrect": false },
            { "name": "Anaphase", "isCorrect": false },
            { "name": "Prometaphase", "isCorrect": true }
          ]
        },
        {
          "title": "Was ist der Zweck der Mitose?",
          "answers": [
            { "name": "Produktion von Gameten", "isCorrect": false },
            { "name": "Bildung neuer Organellen", "isCorrect": false },
            { "name": "Teilung des Zellkerns zur Bildung von zwei identischen Tochterzellen", "isCorrect": true },
            { "name": "Verdopplung der DNA", "isCorrect": false }
          ]
        },
        {
          "title": "In welcher Phase der Mitose bildet sich die Kernhülle um die Tochterchromosomen neu?",
          "answers": [
            { "name": "Metaphase", "isCorrect": false },
            { "name": "Prophase", "isCorrect": false },
            { "name": "Telophase", "isCorrect": true },
            { "name": "Anaphase", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Phase der Mitose ermöglicht die beste Darstellung eines Karyogramms?",
          "answers": [
            { "name": "Anaphase", "isCorrect": false },
            { "name": "Prophase", "isCorrect": false },
            { "name": "Telophase", "isCorrect": false },
            { "name": "Metaphase", "isCorrect": true }
          ]
        },
        {
          "title": "Wie nennt man die Phase der Zellteilung nach der Mitose?",
          "answers": [
            { "name": "Zytokinese", "isCorrect": true },
            { "name": "Telophase", "isCorrect": false },
            { "name": "Interphase", "isCorrect": false },
            { "name": "Prophase", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Zellen durchlaufen die Mitose?",
          "answers": [
            { "name": "Eukaryontische Zellen", "isCorrect": true },
            { "name": "Bakterienzellen", "isCorrect": false },
            { "name": "Prokaryontische Zellen", "isCorrect": false },
            { "name": "Gameten", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Phase der Mitose zeichnet sich durch die Trennung der Schwesterchromatiden aus?",
          "answers": [
            { "name": "Prometaphase", "isCorrect": false },
            { "name": "Metaphase", "isCorrect": false },
            { "name": "Anaphase", "isCorrect": true },
            { "name": "Prophase", "isCorrect": false }
          ]
        },
        {
          "title": "Was ist der Spindelapparat?",
          "answers": [
            { "name": "Eine Struktur, die die Chromosomen während der Mitose trennt", "isCorrect": true },
            { "name": "Ein Teil des Endoplasmatischen Retikulums", "isCorrect": false },
            { "name": "Eine Proteinstruktur in den Mitochondrien", "isCorrect": false },
            { "name": "Die Zellmembran", "isCorrect": false }
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
          "title": "Was ist die Prophase der Mitose?",
          "hidden_answer": "Die Prophase ist die erste Phase der Mitose, in der sich die Chromosomen kondensieren und die Kernhülle beginnt, sich aufzulösen."
        },
        {
          "title": "Was passiert in der Metaphase der Mitose?",
          "hidden_answer": "In der Metaphase ordnen sich die Chromosomen in der Zellmitte an der Metaphasenplatte an, um eine gleichmäßige Verteilung zu gewährleisten."
        },
        {
          "title": "Welche Funktion hat der Spindelapparat während der Mitose?",
          "hidden_answer": "Der Spindelapparat besteht aus Mikrotubuli und ist verantwortlich für die Trennung der Schwesterchromatiden während der Mitose."
        },
        {
          "title": "Wie nennt man die Phase der Mitose, in der die Schwesterchromatiden getrennt werden?",
          "hidden_answer": "Die Phase, in der die Schwesterchromatiden getrennt und zu den Zellpolen gezogen werden, heißt Anaphase."
        },
        {
          "title": "Was passiert während der Telophase der Mitose?",
          "hidden_answer": "In der Telophase entspiralisieren sich die Chromosomen und die Kernhülle bildet sich um die Chromosomen an den Zellpolen neu."
        },
        {
          "title": "Was ist die Zytokinese?",
          "hidden_answer": "Die Zytokinese ist der Prozess der Teilung des Zytoplasmas, der nach der Mitose stattfindet und zur Bildung von zwei Tochterzellen führt."
        },
        {
          "title": "Warum ist die Mitose wichtig?",
          "hidden_answer": "Die Mitose ist wichtig für das Wachstum, die Gewebereparatur und die Zellvermehrung, da sie genetisch identische Tochterzellen erzeugt."
        },
        {
          "title": "Was sind die charakteristischen Merkmale der Chromosomen in der Prophase?",
          "hidden_answer": "In der Prophase werden die Chromosomen sichtbar, kondensieren stark und bestehen aus zwei Schwesterchromatiden, die am Zentromer verbunden sind."
        },
        {
          "title": "Welche Rolle spielt der Kinetochor während der Mitose?",
          "hidden_answer": "Der Kinetochor ist eine Proteinstruktur am Zentromer, an der die Spindel-Mikrotubuli anheften und die Bewegung der Chromosomen während der Mitose ermöglichen."
        },
        {
          "title": "Welche Phase der Mitose ermöglicht die Bildung neuer Kernhüllen?",
          "hidden_answer": "Die Telophase ist die Phase, in der sich neue Kernhüllen um die getrennten Chromosomen an den Zellpolen bilden."
        }
      ],
    },
    //  End of parent tab 3
  ],
};
