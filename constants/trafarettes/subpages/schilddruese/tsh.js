export default {
  path: "tsh",
  // http://localhost:5173/trafarette/tsh,<a href="/trafarette/tsh">Thyrotropin (TSH)</a>
  content: [
    {
      id: 1,
      title: "Thyrotropin (TSH)",
      childTabs: [
        {
            "id": 1,
            "title": "Definition",
            "textWithFormatting": `<div>
                <p><b>Thyrotropin</b>, kurz TSH, ist ein Peptidhormon, das von der Adenohypophyse (Hypophysenvorderlappen) ausgeschüttet wird. Es stimuliert die Schilddrüse zur Bildung und Freisetzung der <a href="/trafarette/schilddruesenhormone">Schilddrüsenhormone</a> <a href="/trafarette/t3">Trijodthyronin (T3)</a> und <a href="/trafarette/t4">Thyroxin (T4)</a>. Im Rahmen des thyreotropen Regelkreises hemmen erhöhte Konzentrationen dieser Hormone wiederum die TSH-Ausschüttung, wodurch ein negatives Feedback entsteht.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "Aufbau",
            "textWithFormatting": `<div>
                <p>TSH ist ein Glykoproteinhormon und besteht aus zwei Untereinheiten:</p>
                <ul>
                    <li>• <b>Alpha-Untereinheit:</b> Diese Einheit ist identisch mit der von anderen Glykoproteinhormonen wie HCG, FSH und LH.</li>
                    <li>• <b>Beta-Untereinheit:</b> Sie verleiht TSH seine Spezifität und überträgt das spezifische Signal zur Schilddrüsenstimulation.</li>
                </ul>
                <p>Es gibt ein verwandtes Hormon namens Thyreostimulin (TSH 2, A2B5), das ebenfalls schilddrüsenstimulierende Effekte hat und sich durch eine andere Alpha- und Beta-Untereinheit auszeichnet.</p>
            </div>`
        },
        {
            "id": 3,
            "title": "Physiologie",
            "textWithFormatting": `<div>
                <h3>3.1. Fördernde Faktoren</h3>
                <p>Die Ausschüttung von TSH wird durch verschiedene Faktoren stimuliert, darunter:</p>
                <ul>
                    <li>• <a href="/trafarette/trh">Thyreotropin-Releasing-Hormon (TRH)</a> aus dem Hypothalamus</li>
                    <li>• Neurotensin</li>
                    <li>• Vasopressin (ADH), möglicherweise beteiligt</li>
                </ul>
                <h3>3.2. Hemmende Faktoren</h3>
                <p>Verschiedene Einflüsse hemmen die TSH-Sekretion:</p>
                <ul>
                    <li>• <a href="/trafarette/t4">Thyroxin (T4)</a> und <a href="/trafarette/t3">Trijodthyronin (T3)</a> über negative Rückkopplung</li>
                    <li>• Somatostatin</li>
                    <li>• Dopamin</li>
                    <li>• Zytokine (mutmaßlich)</li>
                    <li>• Thyreostimulin (TSH 2)</li>
                </ul>
                <h3>3.3. Wirkung</h3>
                <p>TSH bindet an heptahelikale Rezeptoren auf der Oberfläche der Schilddrüsenzellen. Die Bindung führt zu einer Aktivierung von Gs-Proteinen und einer Erhöhung des intrazellulären cAMP-Spiegels, was eine gesteigerte Synthese und Freisetzung von T4 zur Folge hat. Darüber hinaus stimuliert TSH die intrathyreoidale Deiodierung, um die Umwandlung von T4 zu T3 zu fördern.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "Labormedizin",
            "textWithFormatting": `<div>
                <h3>4.1. Material</h3>
                <p>Für die Bestimmung des TSH-Spiegels wird 1 ml Serum benötigt.</p>
                <h3>4.2. Referenzbereiche</h3>
                <p>Die Referenzwerte für TSH variieren je nach Alter:</p>
                <ul>
                    <li>• <b>Erwachsene:</b> 0,27 - 4,2 µIU/ml</li>
                    <li>• <b>Kinder:</b></li>
                    <ul>
                        <li>• Bis 1 Lebenswoche: 0,27 - 20 µIU/ml</li>
                        <li>• Eine Woche bis 1 Jahr: 0,27 - 7,0 µIU/ml</li>
                        <li>• 1 bis 17 Jahre: 0,27 - 5,0 µIU/ml</li>
                    </ul>
                    <li>• <b>Schwangerschaft:</b> Der TSH-Spiegel sinkt physiologisch durch die stimulierende Wirkung von hCG, insbesondere zwischen der 7. und 12. Schwangerschaftswoche.</li>
                </ul>
                <h3>4.3. Interpretation</h3>
                <p>Ein normaler TSH-Spiegel schließt in der Regel eine manifeste <a href="/trafarette/hyperthyreose">Hyperthyreose</a> oder <a href="/trafarette/hypothyreose">Hypothyreose</a> aus. Der TSH-Wert reagiert empfindlich auf Störungen der Schilddrüsenfunktion und zeigt eine logarithmisch-lineare Beziehung zum freien Thyroxin (fT4).</p>
                <p><b>Erhöhte TSH-Werte:</b></p>
                <ul>
                    <li>• Primäre <a href="/trafarette/hypothyreose">Hypothyreose</a>: Erhöhte TSH-Werte bei erniedrigtem fT4 und fT3.</li>
                    <li>• Sekundäre <a href="/trafarette/hyperthyreose">Hyperthyreose</a>: Selten, tritt bei TSH-produzierenden Tumoren oder Schilddrüsenhormonresistenz auf.</li>
                </ul>
                <p><b>Erniedrigte TSH-Werte:</b></p>
                <ul>
                    <li>• Primäre <a href="/trafarette/hyperthyreose">Hyperthyreose</a>: TSH niedrig bei erhöhtem fT4 und fT3, z.B. bei <a href="/trafarette/morbusbasedow">Morbus Basedow</a> oder <a href="/trafarette/schilddruesenautonomie">Schilddrüsenautonomie</a>.</li>
                    <li>• Sekundäre <a href="/trafarette/hypothyreose">Hypothyreose</a>: Niedriges TSH bei erniedrigtem fT4 und fT3, häufig durch eine Hypophyseninsuffizienz bedingt.</li>
                </ul>
            </div>`
        },
        {
            "id": 5,
            "title": "Pharmakologie",
            "textWithFormatting": `<div>
                <h3>5.1. Senkung der TSH-Sekretion</h3>
                <p>Medikamente, die den TSH-Spiegel senken, umfassen:</p>
                <ul>
                    <li>• Dopamin und Dopaminagonisten (z.B. L-Dopa, Bromocriptin)</li>
                    <li>• Somatostatin und seine Analoga (z.B. Octreotide)</li>
                    <li>• Glucocorticoide</li>
                    <li>• Morphinderivate</li>
                    <li>• <a href="/trafarette/levothyroxin">L-Thyroxin</a></li>
                </ul>
                <h3>5.2. Erhöhung der TSH-Sekretion</h3>
                <p>Zu den Medikamenten, die eine Erhöhung der TSH-Sekretion verursachen können, gehören:</p>
                <ul>
                    <li>• Dopaminantagonisten (z.B. Metoclopramid, Haloperidol)</li>
                    <li>• Lithium</li>
                    <li>• Carbamazepin</li>
                    <li>• Theophyllin</li>
                    <li>• Hohe Dosen von <a href="/trafarette/iod">Iod</a>id</li>
                </ul>
            </div>`
        }
    ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
