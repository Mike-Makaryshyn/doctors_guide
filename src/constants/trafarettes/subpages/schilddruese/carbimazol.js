export default {
  path: "carbimazol",
  // http://localhost:5173/trafarette/carbimazol,<a href="/trafarette/carbimazol">Carbimazol</a>
  content: [
    {
      id: 1,
      title: "Carbimazol",
      childTabs: [
        {
          "id": 1,
          "title": "Definition",
          "textWithFormatting": `<div>
            <p><b>Carbimazol</b> ist ein Medikament aus der Gruppe der Thionamide, das zur Behandlung verschiedener Schilddrüsenerkrankungen eingesetzt wird, insbesondere zur Hemmung einer übermäßigen Produktion von <a href="/trafarette/schilddruesenhormone">Schilddrüsenhormonen</a> bei <a href="/trafarette/hyperthyreose">Hyperthyreose</a>.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "Wirkmechanismus",
          "textWithFormatting": `<div>
            <p><b>Carbimazol</b> ist ein sogenannter Iodisationshemmer, der die Funktion des Enzyms <b><a href="/trafarette/thyreoperoxidase">Thyreoperoxidase (TPO)</a></b> hemmt. TPO ist essenziell für die Synthese der <a href="/trafarette/schilddruesenhormone">Schilddrüsenhormone</a> <a href="/trafarette/t3">Triiodthyronin (T3)</a>  und <a href="/trafarette/t4">Thyroxin (T4)</a>, indem es Jodid zu elementarem <a href="/trafarette/iod">Jod</a> oxidiert. Durch die Hemmung von TPO verhindert Carbimazol die Jodierung von <a href="/trafarette/thyreoglobulin">Thyreoglobulin</a> und damit die Bildung neuer <a href="/trafarette/schilddruesenhormone">Schilddrüsenhormone</a>.</p>
            <p>Zusätzlich hemmt Carbimazol das Enzym <b>Dehalogenase</b>, das in der Schilddrüse für die Rückresorption nicht freigesetzten <a href="/trafarette/iod">Jods</a> sorgt. Dies führt zu einer reduzierten Jodaufnahme in die Schilddrüse, was eine sogenannte „Jodavidität“ bewirkt und die Aufnahme von radioaktivem <a href="/trafarette/iod">Jod</a> senkt – ein Effekt, der bei einer <a href="/trafarette/radiojodtherapie">Radiojodtherapie</a> nützlich sein kann.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "Pharmakokinetik",
          "textWithFormatting": `<div>
            <p><b>Carbimazol</b> wird nach der Aufnahme im Körper in seinen aktiven Metaboliten <b><a href="/trafarette/thiamazol">Thiamazol</a></b> umgewandelt. Es handelt sich also um ein <b>Prodrug</b>, das erst im Körper seine volle therapeutische Wirkung entfaltet. Der Umwandlungsprozess zu Thiamazol ist nicht vollständig im Verhältnis 1:1, sondern variiert leicht zwischen Patienten. Nach oraler Einnahme wird Carbimazol rasch resorbiert, wobei seine Wirksamkeit aufgrund der Umwandlung verzögert eintritt.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "Indikationen",
          "textWithFormatting": `<div>
            <p><b>Carbimazol</b> wird hauptsächlich zur Behandlung von <a href="/trafarette/hyperthyreose">Hyperthyreose</a> eingesetzt, die aufgrund verschiedener Erkrankungen wie Autoimmunthyreopathien (z.B. <a href="/trafarette/morbusbasedow">Morbus Basedow</a>) oder durch <a href="/trafarette/schilddruesenautonomie">Schilddrüsenautonomie</a> auftreten kann. Weitere Anwendungsgebiete sind:</p>
            <ul>
              <li>• <b>Präoperative Strumatherapie:</b> Um die Schilddrüse vor einer Operation in eine euthyreote Stoffwechsellage zu bringen und das Operationsrisiko zu senken.</li>
              <li>• <b>Behandlung der thyreotoxischen Krise:</b> Carbimazol wird in diesen Fällen zur raschen Senkung der Schilddrüsenhormonspiegel eingesetzt.</li>
            </ul>
          </div>`
        },
        {
          "id": 5,
          "title": "Nebenwirkungen",
          "textWithFormatting": `<div>
            <p><b>Carbimazol</b> kann eine Reihe von Nebenwirkungen hervorrufen, die von milden Symptomen bis hin zu schwerwiegenden Komplikationen reichen. Zu den häufigsten und klinisch wichtigsten Nebenwirkungen gehören:</p>
            <ul>
              <li>• <b><a href="/trafarette/hypothyreose">Hypothyreose</a>:</b> Eine zu starke Hemmung der Schilddrüsenfunktion kann zu einer Unterfunktion führen.</li>
              <li>• <b>Strumigenität:</b> Durch die Senkung des Schilddrüsenhormonspiegels kann die Hirnanhangsdrüse (Hypophyse) vermehrt <a href="/trafarette/tsh">Thyrotropin (TSH)</a> produzieren, was zu einer Schilddrüsenvergrößerung (<a href="/trafarette/struma">Struma</a>) führen kann.</li>
              <li>• <b>Muskuloskelettale Reaktionen:</b></li>
              <ul>
                <li>• <b>Arthralgien und Myalgien:</b> Gelenk- und Muskelschmerzen treten häufig auf und können sogar nach Absetzen der Therapie bestehen bleiben.</li>
              </ul>
              <li>• <b>Immunreaktionen:</b></li>
              <ul>
                <li>• <b>Hautausschläge:</b> Allergische Hautreaktionen wie Exantheme, Urtikaria und Pruritus sind möglich, in seltenen Fällen auch schwere Hautreaktionen wie das <b>Stevens-Johnson-Syndrom (SJS)</b> oder die <b>toxische epidermale Nekrolyse (TEN)</b>.</li>
                <li>• <b>Agranulozytose</b> (0,3 bis 0,6%): Eine schwerwiegende Nebenwirkung, die zu einem starken Abfall der weißen Blutkörperchen führt und die Infektanfälligkeit drastisch erhöht. Sie kann auch Monate nach Therapiebeginn auftreten.</li>
                <li>• <b>Aplastische Anämie und Immunthrombozytopenie:</b> Beeinträchtigungen der Blutbildung.</li>
                <li>• <b>Medikamenteninduzierter Lupus erythematodes und das Antiinsulinantikörper-Syndrom:</b> Seltene Autoimmunreaktionen, die mit Hypoglykämien und Lupus-ähnlichen Symptomen einhergehen.</li>
              </ul>
              <li>• <b>Organbezogene Nebenwirkungen:</b></li>
              <ul>
                <li>• <b>Hepatotoxizität:</b> Carbimazol kann zu cholestatischer Leberschädigung oder toxischer Hepatitis führen. Im Falle eines cholestatischen Ikterus wird eine Umstellung auf Propylthiouracil empfohlen.</li>
                <li>• <b>Pankreatitis:</b> In seltenen Fällen kann eine akute Entzündung der Bauchspeicheldrüse auftreten.</li>
                <li>• <b>Polyneuropathie:</b> Nervenschäden, die mit Kribbeln und Schmerzen einhergehen können.</li>
                <li>• <b>Nephritis und pANCA-vermittelte Vaskulitis:</b> Entzündungen der Nieren und der Blutgefäße, insbesondere eine Polyarteriitis nodosa.</li>
              </ul>
            </ul>
          </div>`
        },
        {
          "id": 6,
          "title": "Kontraindikationen",
          "textWithFormatting": `<div>
            <p>Die Anwendung von <b>Carbimazol</b> ist in bestimmten Fällen kontraindiziert, einschließlich:</p>
            <ul>
              <li>• <b>Allergien oder Überempfindlichkeiten</b> gegenüber Carbimazol oder <a href="/trafarette/thiamazol">Thiamazol</a>.</li>
              <li>• <b>Hämatopoetische Störungen</b> wie Agranulozytose oder Neutropenie, die bereits durch frühere Thionamid-Therapien ausgelöst wurden.</li>
              <li>• <b>Schilddrüsenkarzinom und retrosternale <a href="/trafarette/struma">Struma</a>:</b> Bei großen retrosternalen Strumen besteht das Risiko einer Atemnot durch die stimulierende Wirkung auf das Schilddrüsenwachstum (Asphyxiegefahr).</li>
              <li>• <b>Leberinsuffizienz und Cholestase:</b> Schwere Leberschäden sind eine absolute Kontraindikation.</li>
              <li>• <b>Akute Pankreatitis:</b> Bei früherem Auftreten unter Carbimazol oder Thiamazol sollte der erneute Einsatz vermieden werden.</li>
            </ul>
          </div>`
        },
        {
          "id": 7,
          "title": "Zusammenfassung",
          "textWithFormatting": `<div>
            <p><b>Carbimazol</b> ist ein essenzielles Medikament zur Behandlung von <a href="/trafarette/hyperthyreose">Hyperthyreose</a> und zeigt eine effektive Hemmung der Schilddrüsenhormonproduktion. Trotz seiner Wirksamkeit ist bei der Therapie mit Carbimazol eine enge Überwachung notwendig, um das Risiko schwerwiegender Nebenwirkungen wie Agranulozytose und Hepatotoxizität zu minimieren. Bei bestimmten Patientengruppen und unter speziellen Umständen, etwa bei bestehenden Blutbildungsstörungen oder schwerwiegenden Organstörungen, ist Carbimazol kontraindiziert.</p>
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
          "title": "Was ist Carbimazol?",
          "answers": [
            { "name": "Ein Antibiotikum zur Behandlung von Halsentzündungen", "isCorrect": false },
            { "name": "Ein Medikament zur Hemmung der Schilddrüsenhormonproduktion", "isCorrect": true },
            { "name": "Ein Schmerzmittel zur Behandlung von Kopfschmerzen", "isCorrect": false },
            { "name": "Ein Vitaminpräparat zur Unterstützung der Schilddrüsenfunktion", "isCorrect": false }
          ]
        },
        {
          "title": "Zu welcher Medikamentengruppe gehört Carbimazol?",
          "answers": [
            { "name": "Beta-Blocker", "isCorrect": false },
            { "name": "Thionamide", "isCorrect": true },
            { "name": "Diuretika", "isCorrect": false },
            { "name": "Antibiotika", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Funktion hat das Enzym Thyreoperoxidase (TPO)?",
          "answers": [
            { "name": "Es verhindert die Speicherung von Jod in der Schilddrüse", "isCorrect": false },
            { "name": "Es baut Schilddrüsenhormone ab", "isCorrect": false },
            { "name": "Es oxidiert Jodid und ermöglicht die Synthese von Schilddrüsenhormonen", "isCorrect": true },
            { "name": "Es reguliert die Insulinproduktion", "isCorrect": false }
          ]
        },
        {
          "title": "Wie wirkt Carbimazol auf die Schilddrüsenfunktion?",
          "answers": [
            { "name": "Es wirkt als Jodersatz", "isCorrect": false },
            { "name": "Es stimuliert die Schilddrüsenhormonproduktion", "isCorrect": false },
            { "name": "Es erhöht die Jodaufnahme der Schilddrüse", "isCorrect": false },
            { "name": "Es hemmt die Produktion von Schilddrüsenhormonen", "isCorrect": true }
          ]
        },
        {
          "title": "Welches Enzym wird durch Carbimazol gehemmt?",
          "answers": [
            { "name": "Lipase", "isCorrect": false },
            { "name": "Thyreoperoxidase", "isCorrect": true },
            { "name": "Pepsin", "isCorrect": false },
            { "name": "Amylase", "isCorrect": false }
          ]
        },
        {
          "title": "Was ist die Hauptindikation für die Verwendung von Carbimazol?",
          "answers": [
            { "name": "Diabetes mellitus", "isCorrect": false },
            { "name": "Bluthochdruck", "isCorrect": false },
            { "name": "Hypothyreose", "isCorrect": false },
            { "name": "Hyperthyreose", "isCorrect": true }
          ]
        },
        {
          "title": "Was ist eine mögliche schwerwiegende Nebenwirkung von Carbimazol?",
          "answers": [
            { "name": "Schwindel", "isCorrect": false },
            { "name": "Agranulozytose", "isCorrect": true },
            { "name": "Hypotonie", "isCorrect": false },
            { "name": "Hyperkalzämie", "isCorrect": false }
          ]
        },
        {
          "title": "Welches Organ kann durch Carbimazol potenziell geschädigt werden?",
          "answers": [
            { "name": "Herz", "isCorrect": false },
            { "name": "Magen", "isCorrect": false },
            { "name": "Niere", "isCorrect": false },
            { "name": "Leber", "isCorrect": true }
          ]
        },
        {
          "title": "Warum wird Carbimazol manchmal vor einer Schilddrüsenoperation verwendet?",
          "answers": [
            { "name": "Um die Schilddrüse zu vergrößern", "isCorrect": false },
            { "name": "Um die Jodaufnahme zu erhöhen", "isCorrect": false },
            { "name": "Um das Wachstum der Schilddrüse zu stimulieren", "isCorrect": false },
            { "name": "Um die Schilddrüse in eine euthyreote Stoffwechsellage zu bringen", "isCorrect": true }
          ]
        },
        {
          "title": "Wie wird Carbimazol im Körper wirksam?",
          "answers": [
            { "name": "Es wird als aktives Hormon freigesetzt", "isCorrect": false },
            { "name": "Es blockiert die Aufnahme von Glukose", "isCorrect": false },
            { "name": "Es wird zu Thiamazol umgewandelt", "isCorrect": true },
            { "name": "Es wird zu T3 umgewandelt", "isCorrect": false }
          ]
        },
        {
          "title": "Welches der folgenden Symptome ist ein Anzeichen für eine Überdosierung von Carbimazol?",
          "answers": [
            { "name": "Hyperaktivität", "isCorrect": false },
            { "name": "Hypotonie", "isCorrect": false },
            { "name": "Hyperglykämie", "isCorrect": false },
            { "name": "Müdigkeit und Gewichtszunahme", "isCorrect": true }
          ]
        },
        {
          "title": "Welche Kontraindikation besteht bei der Anwendung von Carbimazol?",
          "answers": [
            { "name": "Diabetes mellitus", "isCorrect": false },
            { "name": "Asthma bronchiale", "isCorrect": false },
            { "name": "Leichtes Fieber", "isCorrect": false },
            { "name": "Agranulozytose in der Vorgeschichte", "isCorrect": true }
          ]
        },
        {
          "title": "Welcher Zustand erfordert besondere Vorsicht bei der Anwendung von Carbimazol?",
          "answers": [
            { "name": "Leichter Bluthochdruck", "isCorrect": false },
            { "name": "Schwangerschaft", "isCorrect": true },
            { "name": "Magen-Darm-Probleme", "isCorrect": false },
            { "name": "Anämie", "isCorrect": false }
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
          "title": "Was ist Carbimazol?",
          "hidden_answer": "Carbimazol ist ein Thyreostatikum, das als Prodrug im Körper zu Thiamazol umgewandelt wird und die Synthese der Schilddrüsenhormone hemmt."
        },
        {
          "title": "Zu welcher Medikamentengruppe gehört Carbimazol?",
          "hidden_answer": "Carbimazol gehört zur Gruppe der Thionamide und wird zur Behandlung von Hyperthyreose verwendet."
        },
        {
          "title": "Wie wirkt Carbimazol auf die Schilddrüsenhormonproduktion?",
          "hidden_answer": "Carbimazol hemmt das Enzym Thyreoperoxidase und verhindert so die Synthese der Schilddrüsenhormone T3 und T4."
        },
        {
          "title": "Warum wird Carbimazol vor einer Schilddrüsenoperation eingesetzt?",
          "hidden_answer": "Carbimazol wird verwendet, um die Schilddrüsenhormonspiegel zu senken und die Schilddrüse in eine euthyreote Stoffwechsellage zu bringen."
        },
        {
          "title": "Was ist eine schwerwiegende Nebenwirkung von Carbimazol?",
          "hidden_answer": "Eine seltene, aber schwerwiegende Nebenwirkung von Carbimazol ist die Agranulozytose, die zu einem gefährlichen Abfall der weißen Blutkörperchen führt."
        },
        {
          "title": "Wie beeinflusst Carbimazol die Aufnahme von radioaktivem Jod?",
          "hidden_answer": "Carbimazol senkt die Aufnahme von Jod in die Schilddrüse, was bei einer geplanten Radiojodtherapie vorteilhaft sein kann."
        },
        {
          "title": "Welche Erkrankung wird hauptsächlich mit Carbimazol behandelt?",
          "hidden_answer": "Carbimazol wird hauptsächlich zur Behandlung der Hyperthyreose eingesetzt, um eine übermäßige Schilddrüsenhormonproduktion zu hemmen."
        },
        {
          "title": "Wie schnell wird Carbimazol im Körper wirksam?",
          "hidden_answer": "Da Carbimazol als Prodrug wirkt und im Körper zu Thiamazol umgewandelt wird, zeigt es eine verzögerte Wirkung nach der Einnahme."
        },
        {
          "title": "Welche Patienten benötigen besondere Vorsicht bei der Einnahme von Carbimazol?",
          "hidden_answer": "Schwangere Frauen benötigen besondere Vorsicht, da Carbimazol plazentagängig ist und das Ungeborene beeinflussen kann."
        },
        {
          "title": "Was kann durch eine zu hohe Dosierung von Carbimazol entstehen?",
          "hidden_answer": "Eine Überdosierung von Carbimazol kann zu einer Hypothyreose führen, also einer Schilddrüsenunterfunktion."
        },
        {
          "title": "Warum sollte die Blutbildung während einer Carbimazol-Therapie überwacht werden?",
          "hidden_answer": "Carbimazol kann eine Agranulozytose verursachen, daher ist eine regelmäßige Überwachung der weißen Blutkörperchen wichtig."
        },
        {
          "title": "Was bedeutet es, dass Carbimazol ein 'Prodrug' ist?",
          "hidden_answer": "Als Prodrug wird Carbimazol im Körper in seine aktive Form, Thiamazol, umgewandelt, um seine Wirkung zu entfalten."
        },
        {
          "title": "Welche Hautreaktionen können unter Carbimazol auftreten?",
          "hidden_answer": "Carbimazol kann Hautausschläge und allergische Reaktionen wie Exantheme und Urtikaria verursachen."
        },
        {
          "title": "Wie wirkt Carbimazol auf das Immunsystem?",
          "hidden_answer": "Carbimazol kann in seltenen Fällen zu einer Agranulozytose führen, wodurch die Immunabwehr geschwächt wird."
        },
        {
          "title": "Warum sollte Carbimazol bei Pankreatitis in der Vorgeschichte nicht verwendet werden?",
          "hidden_answer": "Carbimazol kann eine akute Pankreatitis auslösen und ist daher kontraindiziert, wenn bereits eine Pankreatitis aufgetreten ist."
        }
      ],
    },
    //  End of parent tab 3
  ],
};
