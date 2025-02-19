export default {
  path: "proteins",
  // http://localhost:5173/trafarette/proteins
  content: [
    {
      id: 1,
      title: "Protein S",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Protein S ist ein Glykoprotein, das eine zentrale Rolle in der Blutgerinnung spielt. Es wirkt als Cofaktor des aktivierten Protein C und hemmt die Blutgerinnung, während es gleichzeitig die Fibrinolyse fördert, den Prozess, der Blutgerinnsel abbaut.</p>
          </div>`
        },
        {
          id: 2,
          title: "2. Physiologie",
          textWithFormatting: `<div>
            <p>Protein S wird hauptsächlich in der Leber von Hepatozyten synthetisiert, wobei <a href="/trafarette/vitamink">Vitamin-K</a> eine wichtige Rolle spielt. Zusätzlich wird es in verschiedenen Zelltypen produziert, darunter:</p>
            <ul>
              <li>• Endothelzellen</li>
              <li>• Osteoklasten</li>
              <li>• Leydig-Zellen</li>
              <li>• Megakaryozyten</li>
            </ul>
            <p>Es zirkuliert im Blut in zwei Formen: gebunden und frei. Nur die freie Form (30-40%) ist aktiv als Cofaktor des aktivierten Protein C, während der gebundene Anteil (60-70%) einen Komplex mit dem Akut-Phase-Protein C4b bildet.</p>
            <p>Die Hauptfunktionen umfassen die Inaktivierung der Gerinnungsfaktoren Va und VIIIa sowie die Förderung der Fibrinolyse. Studien belegen zudem, dass Protein S unabhängig von aktiviertem Protein C den Prothrombinase-Komplex hemmt.</p>
          </div>`
        },
        {
          id: 3,
          title: "3. Pathophysiologie",
          textWithFormatting: `<div>
            <p>Ein Mangel an Protein S kann entweder vererbt oder erworben sein und erhöht das Risiko für Thrombosen und Thromboembolien (Thrombophilie).</p>
            <p><strong>Erworbene Ursachen:</strong></p>
            <ul>
              <li>• Schwangerschaft</li>
              <li>• Einnahme von oralen Kontrazeptiva</li>
              <li>• Leberfunktionsstörungen</li>
              <li>• Chronisch entzündliche Darmerkrankungen</li>
              <li>• Nephrotisches Syndrom</li>
              <li>• Vitamin-K-Mangel</li>
              <li>• Cumarintherapie</li>
              <li>• Verbrauchskoagulopathie</li>
              <li>• Virusinfektionen</li>
              <li>• Sepsis</li>
            </ul>
            <p><strong>Hereditärer Mangel:</strong></p>
            <p>Die vererbte Form ist selten und autosomal-dominant. In den meisten Fällen liegt eine heterozygote Mutation im <i>PROS1-Gen</i> vor. Bei etwa 50% der Betroffenen kommt es vor dem 45. Lebensjahr zu thromboembolischen Ereignissen. Die homozygote Form ist äußerst selten und führt oft schon im Neugeborenenalter zu einer schweren Erkrankung, der <i>Purpura fulminans</i>.</p>
          </div>`
        },
        {
          id: 4,
          title: "4. Labormedizinische Diagnostik",
          textWithFormatting: `<div>
            <p>Die Bestimmung der Protein-S-Aktivität ist besonders relevant in der Thrombophiliediagnostik, bei der Purpura fulminans und zur Überwachung von Substitutionstherapien.</p>
            <p><strong>Methoden:</strong></p>
            <ul>
              <li>• Funktioneller Test: Misst die Fähigkeit von Protein S, als Cofaktor von Protein C die Gerinnungszeit zu verlängern.</li>
              <li>• Immunologischer Test: Bestimmt die Konzentration des freien Protein S als indirekten Marker für die Aktivität.</li>
            </ul>
            <p><strong>Probenmaterial:</strong> Für die Tests wird 1 ml Citratblut benötigt. Wichtig ist eine korrekte Füllung der Blutentnahmeröhrchen bis zur Markierung.</p>
          </div>`
        },
        {
          id: 5,
          title: "5. Referenzwerte",
          textWithFormatting: `<div>
            <p><strong>Aktivität:</strong></p>
            <table>
              <thead>
                <tr>
                  <th>Alter</th>
                  <th>Normbereich (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Lebenstag</td>
                  <td>24-48</td>
                </tr>
                <tr>
                  <td>5. Lebenstag</td>
                  <td>36-64</td>
                </tr>
                <tr>
                  <td>1 Monat</td>
                  <td>48-78</td>
                </tr>
                <tr>
                  <td>3 Monate</td>
                  <td>70-102</td>
                </tr>
                <tr>
                  <td>6 Monate</td>
                  <td>71-103</td>
                </tr>
                <tr>
                  <td>Kinder über 1 Jahr und Erwachsene</td>
                  <td>60-140</td>
                </tr>
              </tbody>
            </table>
            <p>Hinweis: Frühgeborene haben im ersten Lebensjahr abweichende Normwerte.</p>
            <p><strong>Konzentration:</strong></p>
            <ul>
              <li>• Gesamt-Protein S bei Erwachsenen: 17-35 mg/l</li>
              <li>• Freies Protein S: 8-12 mg/l (entspricht 70-140% der Aktivität)</li>
            </ul>
          </div>`
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
