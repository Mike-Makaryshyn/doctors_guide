import img1 from '../../../../assets/schilddrueseallg.png';
import img2 from '../../../../assets/sd.png';
export default {
  path: "schilddruesenhormone",
  // http://localhost:5173/trafarette/schilddruesenhormone,<a href="/trafarette/schilddruesenhormone">Schilddrüsenhormone</a>
  content: [
    {
      id: 1,
      title: "Schilddrüsenhormone",
      childTabs: [
        {
            "id": 1,
            "title": "Definition",
            "textWithFormatting": `<div>
                <p><b>Schilddrüsenhormone</b> sind biochemische Botenstoffe, die von der Schilddrüse produziert und in die Blutbahn ausgeschüttet werden. Einige von ihnen entstehen auch durch periphere Modifikation der primären Schilddrüsenhormone in anderen Körperzellen. Diese Hormone spielen eine zentrale Rolle bei der Regulation des Stoffwechsels, der Energieproduktion und verschiedenen physiologischen Funktionen des Körpers.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "Einteilung der Schilddrüsenhormone",
            "textWithFormatting": `<div>
                <p>Schilddrüsenhormone lassen sich in zwei Hauptkategorien unterteilen:</p>
                <ul>
                    <li><b>Echte Schilddrüsenhormone (Iodothyronine):</b>
                        <ul>
                            <li>• <a href="/trafarette/t4">Thyroxin (T4)</a></li>
                            <li>• Trijodthyronin <a href="/trafarette/t3">(T3)</a></li>
                            <li>• Reverse-T3 (rT3)</li>
                            <li>• Verschiedene Diiodthyronine und Monoiodthyronine</li>
                        </ul>
                    </li>
                    <li><b>Peptidhormon:</b>
                        <ul>
                            <li>• <a href="/trafarette/calcitonin">Calcitonin</a>, das von den C-Zellen der Schilddrüse produziert wird und am Kalziumstoffwechsel beteiligt ist.</li>
                        </ul>
                    </li>
                </ul>
            </div>`
        },
        {
            "id": 3,
            "title": "Biochemie der Schilddrüsenhormone",
            "textWithFormatting": `<div>
                <p><b>3.1. Synthese</b></p>
                <p>Die Synthese der Schilddrüsenhormone erfolgt an der Außenseite der Plasmamembran der Epithelzellen der Schilddrüsenfollikel und umfasst drei Hauptschritte:</p>
                <ol>
                    <li><b>Aufnahme von <a href="/trafarette/iod">Iodid</a>:</b> Iodid wird durch einen Na/I-Symporter aus dem Blutplasma in die Follikelzellen aufgenommen und durch den Cl/I-Austauscher (Pendrin) ins Lumen abgegeben. Dort wird es durch H<sub>2</sub>O<sub>2</sub> oxidiert, bevor es für die Iodierung verfügbar ist.</li>
                    <li><b>Iodierung:</b><a href="/trafarette/thyreoperoxidase">Die Thyreoperoxidase (TPO)</a> katalysiert die Übertragung der Iodionen auf Tyrosinreste des <a href="/trafarette/thyreoglobulin">Thyreoglobulins</a>, wodurch Monoiodtyrosin (MIT) und Diiodtyrosin (DIT) entstehen.</li>
                    <li><b>Konjugation:</b> MIT und DIT werden durch TPO zu <a href="/trafarette/t3">T3</a> und <a href="/trafarette/t4">T4</a> verknüpft. Zwei DIT-Moleküle bilden T4, während ein MIT und ein DIT zusammen T3 ergeben.</li>
                </ol>
                <p><b>3.2. Abbau</b></p>
                <p>Die Halbwertszeit von T3 beträgt einige Stunden, während T4 mehrere Tage wirkt. Der Abbau erfolgt hauptsächlich in der Leber durch Glucuronidierung und Sulfatierung, wodurch die Hormone wasserlöslich werden. Sie werden dann renal oder über die Galle ausgeschieden und können im Darm hydrolysiert und reabsorbiert werden.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "Physiologie der Schilddrüsenhormone",
            "textWithFormatting": `<div>
                <p><b>4.1. Transport</b></p>
                <p><a href="/trafarette/t3">T3</a> und T4 sind hydrophobe Moleküle, die zu über 99 % an Transportproteine gebunden im Blut zirkulieren, darunter:</p>
                <ul>
                    <li>• Thyroxin-bindendes Globulin (TBG)</li>
                    <li>• Transthyretin (TTR)</li>
                    <li>• Albumin</li>
                </ul>
                <p>Diese gebundenen Hormone sind inaktiv und dienen als Reservoir. Nur freies T3 (fT3) und freies T4 (fT4) sind biologisch aktiv und können in die Zellen eindringen, was durch Transportproteine wie Monocarboxylat-Transporter (MCT) ermöglicht wird.</p>
                <p><b>4.2. Funktion</b></p>
                <p>T3 und T4 sind zentrale Regulatoren des Stoffwechsels und fördern die Differenzierung des Organismus. Ihre Wirkungen umfassen:</p>
                <ul>
                    <li>• Erhöhung des Zellstoffwechsels und Sauerstoffverbrauchs</li>
                    <li>• Steigerung der Herzfrequenz und Wärmeproduktion</li>
                    <li>• Förderung der Gehirn- und Skelettentwicklung</li>
                    <li>• Regulation der Verdauung und psychischen Gesundheit</li>
                </ul>
                <p><a href="/trafarette/calcitonin">Calcitonin</a> ist ein weniger bedeutendes Hormon, das den Kalziumspiegel im Blut senkt und die Osteoblastenaktivität stimuliert, um die Kalkeinlagerung im Knochen zu fördern.</p>
            </div>`
        },
        {
            "id": 5,
            "title": "Unterschiede und Zusammenhänge zwischen T3, T4 und rT3",
            "textWithFormatting": `<div>
                <p>Hier ist eine tabellarische Übersicht zu den Unterschieden und Zusammenhängen:</p>
                <table>
                    <tr>
                        <th>Merkmal</th>
                        <th>Trijodthyronin (<a href="/trafarette/t3">T3</a>)</th>
                        <th>Thyroxin (T4)</th>
                        <th>Reverse-T3 (rT3)</th>
                    </tr>
                    <tr>
                        <td>Hormonaktivität</td>
                        <td>Biologisch aktiv, 3- bis 5-fach wirksamer als T4</td>
                        <td>Weniger aktiv, Vorläuferhormon von T3</td>
                        <td>Inaktiv, keine physiologische Wirkung</td>
                    </tr>
                    <tr>
                        <td>Produktion</td>
                        <td>Zu ca. 20 % direkt in der Schilddrüse produziert, Hauptanteil entsteht durch Umwandlung von T4</td>
                        <td>Hauptsächlich in der Schilddrüse produziert (ca. 80 % der gesamten Hormonausschüttung)</td>
                        <td>Entsteht durch periphere Umwandlung von T4 durch 5-Deiodierung</td>
                    </tr>
                    <tr>
                        <td>Halbwertszeit</td>
                        <td>Kürzer, etwa 1 Tag</td>
                        <td>Länger, etwa 7 Tage</td>
                        <td>Sehr kurz</td>
                    </tr>
                    <tr>
                        <td>Wirkungsweise</td>
                        <td>Bindet an Schilddrüsenhormonrezeptoren (THR) in Zellen und reguliert die Genexpression</td>
                        <td>Vorstufe, dient als Reservoir für die Bildung von T3</td>
                        <td>Keine Bindung an THR, wird schnell abgebaut</td>
                    </tr>
                    <tr>
                        <td>Regulation der Bildung</td>
                        <td>Abhängig von der Aktivität der 5’-Deiodase-Enzyme und dem Bedarf des Körpers</td>
                        <td>Hängt von der Schilddrüsenaktivität und der <a href="/trafarette/tsh">Thyrotropin (TSH)</a>-Stimulation ab</td>
                        <td>Bildung nimmt bei Stress und bestimmten Krankheiten zu, um die Stoffwechselaktivität zu drosseln</td>
                    </tr>
                </table>
            </div>`
        },
        {
            "id": 6,
            "title": "Regulation der Schilddrüsenhormone",
            "textWithFormatting": `<div>
                <p><b>4.4.1. Hypothalamischer Regelkreis:</b></p>
                <p>Die Steuerung der Schilddrüsenhormonsekretion erfolgt über den Hypothalamus und die Hypophyse. Der Hypothalamus produziert <a href="/trafarette/trh">Thyreotropin-Releasing-Hormon (TRH)</a>, welches die Ausschüttung von <a href="/trafarette/tsh">Thyrotropin (TSH)</a> (Thyreoidea-stimulierendes Hormon) durch die Hypophyse anregt. TSH stimuliert dann die Schilddrüse zur Produktion von T3 und T4.</p>
                <p><b>Feedbackmechanismus:</b> Ein hoher Spiegel an <a href="/trafarette/t3">T3</a> und T4 hemmt die Freisetzung von TRH und <a href="/trafarette/tsh">Thyrotropin (TSH)</a>, was die Hormonproduktion reguliert. Dieser Regelkreis wird als thyreotroper Regelkreis bezeichnet.</p>
                <p><b>4.4.2. Hypophysärer Regelkreis:</b></p>
                <p>Ein zusätzlicher Regelkreis innerhalb des Hypophysenvorderlappens, bekannt als Brokken-Wiersinga-Prummel-Regelkreis, reguliert die TSH-Produktion durch ein Ultrashort-Feedback.</p>
                <p><b>4.4.3. Peripher-zellulärer Regelkreis:</b></p>
                <p>T4 wird in peripheren Geweben durch Deiodasen in T3 umgewandelt. Dies geschieht Selen-abhängig und sorgt dafür, dass bei Bedarf entweder aktives T3 oder inaktives rT3 gebildet wird.</p>
            </div>`
        },
        {
            "id": 7,
            "title": "Labormedizin",
            "textWithFormatting": `<div>
                <p>Die Bestimmung der freien Schilddrüsenhormone (fT3 und fT4) ist ein wichtiger diagnostischer Bestandteil. Bei besonderen Fragestellungen kann auch das Gesamt-T3 und Gesamt-T4 gemessen werden.</p>
            </div>`
        },
        {
            "id": 8,
            "title": "Klinik",
            "textWithFormatting": `<div>
                <p><b><a href="/trafarette/hyperthyreose">Hyperthyreose</a>:</b></p>
                <ul>
                    <li><b>Definition:</b> Überproduktion von <a href="/trafarette/t3">T3</a> und T4 führt zu einer gesteigerten Stoffwechselrate.</li>
                    <li><b>Ursachen:</b> <a href="/trafarette/morbusbasedow">Morbus Basedow</a>, autonome Adenome, TSH-produzierende Tumoren.</li>
                    <li><b>Symptome:</b> Gewichtsverlust, Tachykardie, Unruhe, Wärmeempfindung.</li>
                    <li><b>Diagnose:</b> Erniedrigtes <a href="/trafarette/tsh">Thyrotropin (TSH)</a>, erhöhte T3/T4-Spiegel.</li>
                    <li><b>Therapie:</b> Medikamente, radioaktive Jodtherapie, Operation.</li>
                </ul>
                <p><b><a href="/trafarette/hypothyreose">Hypothyreose</a>:</b></p>
                <ul>
                    <li><b>Definition:</b> Unzureichende Produktion von Schilddrüsenhormonen.</li>
                    <li><b>Ursachen:</b> <a href="/trafarette/hashimoto">Hashimoto-Thyreoiditis</a>, <a href="/trafarette/jodmangel">Jodmangel</a>, angeborene Agenesie.</li>
                    <li><b>Symptome:</b> Müdigkeit, Gewichtszunahme, Kälteempfindlichkeit, Verstopfung.</li>
                    <li><b>Diagnose:</b> Erhöhtes TSH, erniedrigtes T3/T4.</li>
                    <li><b>Therapie:</b> Hormonersatztherapie mit <a href="/trafarette/levothyroxin">Levothyroxin</a>.</li>
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
          "title": "Welches der folgenden Hormone ist das aktivste Schilddrüsenhormon?",
          "answers": [
            { "name": "Thyroxin (T4)", "isCorrect": false },
            { "name": "Trijodthyronin (T3)", "isCorrect": true },
            { "name": "Reverse-T3 (rT3)", "isCorrect": false },
            { "name": "Calcitonin", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Funktion hat Calcitonin im Körper?",
          "answers": [
            { "name": "Erhöht den Kalziumspiegel im Blut", "isCorrect": false },
            { "name": "Sorgt für die Speicherung von Glykogen", "isCorrect": false },
            { "name": "Senkt den Kalziumspiegel im Blut", "isCorrect": true },
            { "name": "Reguliert den Wasserhaushalt", "isCorrect": false }
          ]
        },
        {
          "title": "Wo findet die Synthese von T4 hauptsächlich statt?",
          "answers": [
            { "name": "In den Nebenschilddrüsen", "isCorrect": false },
            { "name": "In den C-Zellen der Schilddrüse", "isCorrect": false },
            { "name": "In den Schilddrüsenfollikeln", "isCorrect": true },
            { "name": "Im Hypothalamus", "isCorrect": false }
          ]
        },
        {
          "title": "Welches Enzym ist für die Iodierung von Thyreoglobulin verantwortlich?",
          "answers": [
            { "name": "Glutathion-Peroxidase", "isCorrect": false },
            { "name": "Thyreoperoxidase (TPO)", "isCorrect": true },
            { "name": "5-Deiodase", "isCorrect": false },
            { "name": "ATP-Synthase", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Substanz bindet hauptsächlich T4 im Blut?",
          "answers": [
            { "name": "Albumin", "isCorrect": false },
            { "name": "Thyroxin-bindendes Globulin (TBG)", "isCorrect": true },
            { "name": "Transthyretin", "isCorrect": false },
            { "name": "Ferritin", "isCorrect": false }
          ]
        },
        {
          "title": "Wie lange ist die Halbwertszeit von Thyroxin (T4)?",
          "answers": [
            { "name": "Etwa 1 Tag", "isCorrect": false },
            { "name": "Etwa 3 Tage", "isCorrect": false },
            { "name": "Etwa 7 Tage", "isCorrect": true },
            { "name": "Etwa 14 Tage", "isCorrect": false }
          ]
        },
        {
          "title": "Was bewirkt ein hoher T3-Spiegel im Körper?",
          "answers": [
            { "name": "Senkung der Herzfrequenz", "isCorrect": false },
            { "name": "Erhöhung des Zellstoffwechsels", "isCorrect": true },
            { "name": "Reduzierte Wärmeproduktion", "isCorrect": false },
            { "name": "Verringerung der Verdauungsrate", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Rolle spielt das Hormon TRH?",
          "answers": [
            { "name": "Stimuliert die Schilddrüse direkt zur Produktion von T3 und T4", "isCorrect": false },
            { "name": "Stimuliert die Hypophyse zur Ausschüttung von TSH", "isCorrect": true },
            { "name": "Hemmt die Produktion von TSH", "isCorrect": false },
            { "name": "Reguliert den Blutzuckerspiegel", "isCorrect": false }
          ]
        },
        {
          "title": "Was kann eine erhöhte Produktion von rT3 anzeigen?",
          "answers": [
            { "name": "Hyperthyreose", "isCorrect": false },
            { "name": "Hypothyreose", "isCorrect": false },
            { "name": "Sick-Euthyroid-Syndrom", "isCorrect": true },
            { "name": "Morbus Basedow", "isCorrect": false }
          ]
        },
        {
          "title": "Welche der folgenden Aussagen ist richtig?",
          "answers": [
            { "name": "T4 ist biologisch aktiver als T3", "isCorrect": false },
            { "name": "T3 hat eine kürzere Halbwertszeit als T4", "isCorrect": true },
            { "name": "T4 kann nicht in T3 umgewandelt werden", "isCorrect": false },
            { "name": "rT3 hat eine stärkere Wirkung als T3", "isCorrect": false }
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
          "title": "Welche Schilddrüsenhormonform ist biologisch aktiver?",
          "hidden_answer": "Trijodthyronin (T3) ist biologisch aktiver als Thyroxin (T4)."
        },
        {
          "title": "Wie hoch ist die Halbwertszeit von T3 im Körper?",
          "hidden_answer": "Die Halbwertszeit von T3 beträgt etwa 1 Tag."
        },
        {
          "title": "Welches Transportprotein bindet am meisten T4 im Blut?",
          "hidden_answer": "Das Thyroxin-bindende Globulin (TBG) bindet am meisten T4 im Blut."
        },
        {
          "title": "Welcher Bestandteil ist essentiell für die Synthese von Schilddrüsenhormonen?",
          "hidden_answer": "Jodid ist essentiell für die Synthese von Schilddrüsenhormonen."
        },
        {
          "title": "Wo erfolgt hauptsächlich der Abbau von T4?",
          "hidden_answer": "Der Abbau von T4 erfolgt hauptsächlich in der Leber."
        },
        {
          "title": "Welche Enzymaktivität ist für die Umwandlung von T4 zu T3 verantwortlich?",
          "hidden_answer": "Die 5’-Deiodase ist für die Umwandlung von T4 zu T3 verantwortlich."
        },
        {
          "title": "Welches Hormon stimuliert die Schilddrüse zur Produktion von T3 und T4?",
          "hidden_answer": "TSH (Thyreoidea-stimulierendes Hormon) stimuliert die Schilddrüse zur Produktion von T3 und T4."
        },
        {
          "title": "Was ist die Hauptfunktion von Calcitonin?",
          "hidden_answer": "Calcitonin senkt den Kalziumspiegel im Blut und fördert die Einlagerung von Kalzium in den Knochen."
        },
        {
          "title": "Wie viel Prozent des produzierten Schilddrüsenhormons ist T4?",
          "hidden_answer": "Etwa 80 % des produzierten Schilddrüsenhormons ist T4."
        },
        {
          "title": "Was ist der Hauptgrund für die periphere Bildung von reverse-T3 (rT3)?",
          "hidden_answer": "Reverse-T3 (rT3) wird gebildet, um überschüssiges T4 abzubauen und die Hormonaktivität zu regulieren."
        }
      ],
    },
    //  End of parent tab 3
  ],
};
