export default {
  path: "calcitonin",
  // http://localhost:5173/trafarette/calcitonin,<a href="/trafarette/calcitonin">calcitonin</a>
  content: [
    {
      id: 1,
      title: "Calcitonin",
      childTabs: [
        {
            "id": 1,
            "title": "Definition",
            "textWithFormatting": `<div>
                <p><b>Calcitonin</b> ist ein Peptidhormon, das hauptsächlich in den C-Zellen der Schilddrüse gebildet wird. Der Thymus und die Nebenschilddrüsen tragen in geringem Umfang zur Calcitoninproduktion bei. Calcitonin spielt eine wichtige Rolle in der Regulation des Calcium- und Phosphathaushalts.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "Biochemie",
            "textWithFormatting": `<div>
                <p>Humanes Calcitonin (hCT) ist ein Polypeptid aus 32 Aminosäuren mit einer Molekülmasse von rund 3,4 kDa. Für seine biologische Aktivität sind eine intramolekulare Disulfidbrücke zwischen Cystein-1 und Cystein-7 sowie ein amidierter C-Terminus (Prolinamid) entscheidend. Ohne die Disulfidbrücke kann das Molekül zwar an den Calcitonin-Rezeptor binden, ihn jedoch nicht aktivieren.</p>
            </div>`
        },
        {
            "id": 3,
            "title": "Physiologie",
            "textWithFormatting": `<div>
                <h4>3.1. Rolle im Calcium- und Phosphathaushalt</h4>
                <p>Calcitonin ist der physiologische Gegenspieler des Parathormons, das in den Nebenschilddrüsen produziert wird. Beide Hormone wirken zusammen, um den Calcium- und Phosphatspiegel im Blut zu regulieren:</p>
                <ul>
                    <li>• <b>Wirkung auf Osteoklasten:</b> Calcitonin hemmt die Aktivität der Osteoklasten, was zu einer verringerten Freisetzung von Calcium aus der Knochensubstanz führt.</li>
                    <li>• <b>Wirkung auf die Nieren:</b> Es hemmt die Rückresorption von Calcium, was zu einer erhöhten Calciumausscheidung (Kalziurese) führt. Zudem reduziert Calcitonin die Phosphatrückresorption durch Hemmung des cAMP-Signalwegs im proximalen Tubulus und der Henle-Schleife, was zu Phosphaturie führt.</li>
                    <li>• <b>Wirkung auf den Darm:</b> Calcitonin senkt die intestinale Resorption von Calcium.</li>
                </ul>
                <h4>3.2. Stimulation und Sekretion</h4>
                <p>Die Freisetzung von Calcitonin wird durch hohe Serumcalciumspiegel und gastrointestinale Peptide (z.B. Pentagastrin) stimuliert. Calcitonin besitzt zudem eine analgetische Wirkung im zentralen Nervensystem, vermutlich durch die Freisetzung von Endorphinen.</p>
                <h4>3.3. Tumormarker</h4>
                <p>Calcitonin dient als Tumormarker beim <a href="/trafarette/medullaereschilddruesenkarzinom">medullären Schilddrüsenkarzinom</a>, da bei dieser Erkrankung eine übermäßige Produktion von Calcitonin auftritt. Dies kann diagnostisch genutzt werden, um die Krankheit zu überwachen und Rückfälle zu erkennen.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "Pharmakologie",
            "textWithFormatting": `<div>
                <p>Calcitonin wird in Injektionsform zur Behandlung von Krankheiten wie <b>Osteodystrophia deformans</b> (Morbus Paget) und maligner Hyperkalzämie verwendet. Früher wurde es auch in Form eines Nasensprays zur Behandlung von Osteoporose eingesetzt. Allerdings ergaben Langzeitstudien ein mögliches erhöhtes Risiko für die Entwicklung von malignen Erkrankungen, was zur Marktrücknahme des Nasensprays 2012 führte. Injektionslösungen sind von dieser Maßnahme nicht betroffen und weiterhin erhältlich.</p>
            </div>`
        },
        {
            "id": 5,
            "title": "Labormedizin",
            "textWithFormatting": `<div>
                <h4>5.1. Indikationen für die Bestimmung von Calcitonin</h4>
                <ul>
                    <li>• Abklärung von kalten Knoten der Schilddrüse (szintigraphisch)</li>
                    <li>• Therapierefraktäre Durchfälle</li>
                    <li>• Unklare Erhöhung des CEA (Hinweis auf C-Zell-Karzinom)</li>
                    <li>• Postoperative Überwachung nach Schilddrüsen- oder Nebenschilddrüsenchirurgie</li>
                    <li>• Familienscreening bei Verdacht auf MEN-Syndrome (Multiple Endokrine Neoplasien)</li>
                </ul>
                <h4>5.2. Material und Stabilität</h4>
                <p>Für die Calcitonin-Bestimmung werden 2 ml Serum benötigt. Calcitonin ist instabil, daher müssen Blutproben in gekühlten Röhrchen entnommen und schnell ins Labor gebracht werden. Bei Raumtemperatur ist die Probe etwa vier Stunden, gekühlt etwa einen Tag haltbar.</p>
                <h4>5.3. Referenzbereich</h4>
                <ul>
                    <li>• Männer: bis 11,5 pg/ml</li>
                    <li>• Frauen: bis 4,6 pg/ml</li>
                </ul>
                <p>Ein unterer Grenzwert wird in der Regel nicht angegeben, da Calcitonin bei Gesunden häufig unterhalb der Nachweisgrenze liegt.</p>
                <h4>5.4. Interpretation erhöhter Calcitonin-Werte</h4>
                <p>Erhöhte Calcitonin-Spiegel können bei verschiedenen Erkrankungen auftreten, darunter:</p>
                <ul>
                    <li>• <a href="/trafarette/medullaereschilddruesenkarzinom">medulläres Schilddrüsenkarzinom</a> (wichtiger Tumormarker)</li>
                    <li>• Sipple-Syndrom (medulläres Schilddrüsenkarzinom mit Phäochromozytom)</li>
                    <li>• C-Zell-Hyperplasie</li>
                    <li>• Niereninsuffizienz</li>
                    <li>• Leberzirrhose</li>
                    <li>• Hypergastrinämie</li>
                    <li>• Neuroendokrine Neoplasien (NEN)</li>
                    <li>• Multiple Endokrine Neoplasien (MEN-Syndrom)</li>
                    <li>• Selten bei <a href="/trafarette/hyperthyreose">Hyperthyreose</a></li>
                </ul>
                <h4>5.5. Erweiterte Diagnostik</h4>
                <p>Die Calcitonin-Sekretion kann durch Stimulationstests überprüft werden:</p>
                <ul>
                    <li>• <b>Calcium-Stimulationstest:</b> Zur Überprüfung der Calcitonin-Sekretion.</li>
                    <li>• <b>Pentagastrin-Test:</b> Steigerung der Calcitonin-Freisetzung bei Patienten mit C-Zell-Hyperplasie oder medullärem Schilddrüsenkarzinom.</li>
                </ul>
                <p>Eine molekulargenetische Untersuchung ist bei Verdacht auf ein MEN-Syndrom sinnvoll.</p>
            </div>`
        },
        {
            "id": 6,
            "title": "Veterinärmedizin",
            "textWithFormatting": `<div>
                <p>In der Veterinärmedizin tritt der antagonistische Effekt von Calcitonin bei Säugetieren oft erst bei unphysiologisch hohen Dosen auf. Weder eine komplette Abwesenheit von Calcitonin (z.B. nach einer vollständigen chirurgischen Entfernung der Schilddrüse oder bei genetischen Knockout-Modellen) noch eine Überproduktion führt zu einer wesentlichen Störung der Calciumhomöostase. Die physiologische Rolle von Calcitonin in der Veterinärmedizin ist daher nicht abschließend geklärt (Stand: 2024).</p>
            </div>`
        }
    ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
