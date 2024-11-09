export default {
  path: "tachykardie",
  // http://localhost:5173/trafarette/tachykardie
  content: [
    {
      id: 1,
      title: "Tachykardie",
      childTabs: [
        {
          "id": 1,
          "title": "Definition",
          "textWithFormatting": `<div>
            <p>Tachykardie beschreibt eine erhöhte Herzfrequenz, die beim Erwachsenen normalerweise über 100 Schlägen pro Minute liegt. Die Beurteilung dieses Grenzwertes variiert, da Säuglinge und Kinder altersbedingt höhere Normfrequenzen aufweisen.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "Pathophysiologie",
          "textWithFormatting": `<div>
            <p>Die Entstehung von Tachykardien ist vielfältig und bis heute nicht vollständig geklärt. Verschiedene Mechanismen werden in der Fachliteratur beschrieben:</p>
            <ul>
              <li>• <b>Pathologische Steigerung des Automatismus</b>: Schrittmacherzellen des Sinusknotens, die normalerweise etwa 70 Impulse pro Minute generieren, können durch ungeklärte Ursachen einen zu schnellen Rhythmus vorgeben.</li>
              <li>• <b>Instabilität der elektrischen Reizbildung</b>: Einzelne oder Gruppen von Herzmuskelzellen können sich unkoordiniert elektrisch entladen, was zu einem unregelmäßigen und schnellen Herzrhythmus führt.</li>
              <li>• <b>Reentry-Phänomene</b>: Pathologische Leitungsbahnen oder Kreisläufe der elektrischen Erregung führen zu wiederholten Depolarisationen während der Ruhephase, was eine zu häufige Kontraktion des Herzens zur Folge hat.</li>
              <li>• <b>Reaktive Tachykardien</b>: Eine erhöhte Herzfrequenz kann durch hormonelle oder nervale Stimulationen wie bei einer <a href="/trafarette/hyperthyreose">Hyperthyreose</a> entstehen.</li>
            </ul>
            <p>Neben diesen endogenen Faktoren gibt es zahlreiche exogene Auslöser für Tachykardien. Dazu gehören:</p>
            <ul>
              <li>• <b>Genuss- und Suchtmittel</b>: Koffein, Nikotin, Amphetamine und Kokain.</li>
              <li>• <b>Medikamente</b>: Sympathomimetika, Theophyllin, Nitrate und bestimmte Kalziumantagonisten.</li>
              <li>• <b>Lebensmittelinhaltsstoffe</b>: Beispielsweise enthalten Muskatnüsse ätherische Öle wie Myristicin und Elemicin, die in hohen Dosen Tachykardien auslösen können.</li>
            </ul>
          </div>`
        },
        {
          "id": 3,
          "title": "Einteilung",
          "textWithFormatting": `<div>
            <p>Tachykardien werden nach verschiedenen Kriterien unterschieden:</p>
            <h4>Nach dem Ort der Entstehung:</h4>
            <ul>
              <li>• <b>Supraventrikuläre Tachykardie (SVT)</b>: Der Ursprung liegt im Bereich des Sinusknotens, der Herzvorhöfe, des AV-Knotens oder der His-Bündel.</li>
              <li>• <b>Ventrikuläre Tachykardie (VT)</b>: Die Reizbildung erfolgt in den Tawara-Schenkeln, Purkinje-Fasern oder dem Myokard der Herzventrikel.</li>
            </ul>
            <p>Diese Unterscheidung ist wichtig, um zwischen orthotoper Tachykardie (z.B. Sinustachykardie) und heterotoper Tachykardie zu differenzieren.</p>
            <p>Paroxysmale Tachykardien umfassen anfallsweise auftretende Tachykardien sowohl ventrikulären als auch supraventrikulären Ursprungs.</p>
            <h4>Nach der Ätiologie:</h4>
            <ul>
              <li>• <b>Reflextachykardie</b>: Eine durch reflektorische Mechanismen ausgelöste erhöhte Herzfrequenz.</li>
            </ul>
          </div>`
        },
        {
          "id": 4,
          "title": "Klinische Unterscheidung der Tachykardien",
          "textWithFormatting": `<div>
            <table>
              <thead>
                <tr>
                  <th>Unterscheidungskriterium</th>
                  <th>Paroxysmale supraventrikuläre Tachykardie (SVT)</th>
                  <th>Ventrikuläre Tachykardie (VT)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Symptome</td>
                  <td>Palpitationen, Diaphorese, Nausea, Schwitzen, Dyspnoe, verstärkte Diurese, selten Synkopen</td>
                  <td>Palpitationen, Diaphorese, Nausea, Schwitzen, Dyspnoe, häufig Synkope</td>
                </tr>
                <tr>
                  <td>Strukturelle Herzerkrankung</td>
                  <td>Selten</td>
                  <td>Häufig</td>
                </tr>
                <tr>
                  <td>Hereditäre Ursachen</td>
                  <td>Kaum</td>
                  <td>Gelegentlich</td>
                </tr>
                <tr>
                  <td>Adenosin/Vagale Stimulation</td>
                  <td>Beendet häufig oder demaskiert Vorhofarrhythmie</td>
                  <td>Beendet selten</td>
                </tr>
                <tr>
                  <td>QRS-Vektor</td>
                  <td>Ähnlich wie Sinusrhythmus</td>
                  <td>Abweichende Achse</td>
                </tr>
                <tr>
                  <td>Q-Zacken während Tachykardie</td>
                  <td>Selten</td>
                  <td>Häufig bei KHK/Infarkt</td>
                </tr>
                <tr>
                  <td>QRS-Breite</td>
                  <td>Schmal (ähnlich wie Sinusrhythmus), selten mit Aberration</td>
                  <td>Meist > 140 ms, selten schmaler (septale KT)</td>
                </tr>
                <tr>
                  <td>Fusionsschläge</td>
                  <td>Niemals</td>
                  <td>Beweisend, wenn vorhanden</td>
                </tr>
                <tr>
                  <td>AV-Synchronie</td>
                  <td>Fast immer</td>
                  <td>Fakultativ</td>
                </tr>
              </tbody>
            </table>
          </div>`
        }
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
