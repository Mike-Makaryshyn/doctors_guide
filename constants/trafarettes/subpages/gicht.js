export default {
   path: "hyperurikaemie",
   // http://localhost:5173/trafarette/gicht
   content: [
      {
         id: 1,
         title: "Gicht",
         hint: "Hyperuricaemia, Hyperurikämie, Hyperuricemia, Гіперурикемія, Гиперурикемия, Hiperürisemi, فرط حمض يوريك الدم Hyperuricémie, Hiperuricemia,, Hiperurykemia",
         code: "ICD 10: ",
         childTabs: [
            //  Start of child tab 1
            {
               id: 1,
               title: "1. Funktion",
               textWithFormatting: `<div>
                  <p>Die Schilddrüse ist eine endokrine Drüse, die die Schilddrüsenhormone <strong>T₃</strong> (Trijodthyronin) und <strong>T₄</strong> (Thyroxin) produziert und speichert. Diese Hormone regulieren den <strong>Stoffwechsel</strong>, das <strong>Wachstum</strong> und die <strong>Energieverwertung</strong> im Körper.</p>
               </div>`,
            },
            {
               id: 2,
               title: "2. Makroskopische Anatomie",
               textWithFormatting: `<div>
                  <ul>
                     <li><strong>Form:</strong>
                        <ul>
                           <li><em>Aufsicht:</em> Schmetterlings- oder H-förmig.</li>
                           <li><em>Querschnitt:</em> Hufeisenförmig.</li>
                        </ul>
                     </li>
                     <li><strong>Volumen:</strong>
                        <ul>
                           <li>Männer: 15–25 mL</li>
                           <li>Frauen: 10–18 mL</li>
                        </ul>
                     </li>
                     <li><strong>Gewicht:</strong> 20–30 g</li>
                  </ul>
               </div>`,
            },
            {
               id: 3,
               title: "3. Entwicklung der Schilddrüse",
               textWithFormatting: `<div>
                  <h3>Zeitpunkt und Ursprung</h3>
                  <p>Beginn der Entwicklung ab dem <strong>24. Tag</strong> der Embryonalentwicklung. Ursprung aus einer entodermalen Epithelknospe auf Höhe der ersten Schlundtasche (späteres <em>Foramen caecum linguae</em>).</p>
                  <h3>Entwicklungsprozess</h3>
                  <ol>
                     <li><strong>Bildung des Ductus thyreoglossus:</strong> Epithelknospe wächst nach distal als Epithelstrang.</li>
                     <li><strong>Bildung der Schilddrüsenlappen:</strong> Am distalen Ende entstehen zwei Lappen, verbunden durch den Epithelstrang.</li>
                     <li><strong>Rückbildung:</strong> Restliche Anteile des Ductus thyreoglossus bilden sich zurück.</li>
                  </ol>
                  <h3>Entstehung der Zellen</h3>
                  <ul>
                     <li><strong>Thyreozyten:</strong> Differenzieren sich ab der 10. Fetalwoche aus entodermalen Epithelzellen und werden zur ersten endokrin aktiven Drüse des Fötus.</li>
                     <li><strong>C-Zellen:</strong> Entstehen aus dem Ultimobranchialkörper (5. Schlundtasche); Zellen der Neuralleiste wandern ein und differenzieren sich zu C-Zellen.</li>
                  </ul>
                  <h3>Nebenschilddrüse</h3>
                  <p>Epithelkörperchen stammen aus den Schlundtaschen; obere und untere Epithelkörperchen entstehen getrennt.</p>
               </div>`,
            },
            {
               id: 4,
               title: "4. Aufbau",
               textWithFormatting: `<div>
                  <p>Die Schilddrüse besteht aus:</p>
                  <ul>
                     <li><strong>Zwei Lappen:</strong> <em>Lobus dexter</em> und <em>Lobus sinister</em>.</li>
                     <li><strong>Isthmus:</strong> Verbindet die beiden Lappen vor der Trachea.</li>
                     <li><strong>Kapseln:</strong>
                        <ul>
                           <li><em>Äußere Kapsel (Capsula externa):</em> Schützt die Drüse.</li>
                           <li><em>Innere Kapsel (Capsula interna):</em> Unterteilt das Organ in Läppchen (<em>Lobuli</em>).</li>
                        </ul>
                     </li>
                     <li><strong>Lobus pyramidalis:</strong> Zusätzlicher Lappen, bei ca. 50 % der Fälle vorhanden.</li>
                  </ul>
               </div>`,
            },
            {
               id: 5,
               title: "5. Lage der Schilddrüse",
               textWithFormatting: `<div>
                  <p><strong>Position:</strong> Ventral im Halsbereich, vor der Trachea.</p>
                  <p><strong>Höhe des Isthmus:</strong> 2.–3. Trachealknorpel.</p>
                  <p><strong>Nachbarstrukturen:</strong></p>
                  <ul>
                     <li><strong>Dorsal:</strong> Nebenschilddrüsen, Trachea, Ösophagus, <em>N. laryngeus recurrens</em>.</li>
                     <li><strong>Ventral:</strong> <em>Lamina praetrachealis</em> der Halsfaszie.</li>
                     <li><strong>Lateral:</strong> Gefäß-Nerven-Strang des Halses.</li>
                  </ul>
               </div>`,
            },
            {
               id: 6,
               title: "6. Gefäßversorgung und Innervation",
               textWithFormatting: `<div>
                  <h3>Arterielle Versorgung</h3>
                  <ul>
                     <li><strong>A. thyroidea superior:</strong> Aus der <em>A. carotis externa</em>.</li>
                     <li><strong>A. thyroidea inferior:</strong> Aus dem <em>Truncus thyrocervicalis</em>.</li>
                     <li><strong>A. thyroidea ima:</strong> Bei ca. 10 % vorhanden.</li>
                  </ul>
                  <h3>Venöser Abfluss</h3>
                  <ul>
                     <li><strong>V. thyroidea superior</strong> und <strong>Vv. thyroideae mediae:</strong> Münden in die <em>V. jugularis interna</em>.</li>
                     <li><strong>V. thyroidea inferior:</strong> Bildet den <em>Plexus thyroideus impar</em> → <em>V. brachiocephalica sinistra</em>.</li>
                  </ul>
                  <h3>Innervation</h3>
                  <ul>
                     <li><strong>Sensible Innervation:</strong> <em>N. laryngeus superior</em> und <em>N. laryngeus recurrens</em> (beide aus dem <em>N. vagus</em>).</li>
                     <li><strong>Sympathische Innervation:</strong> Periarterieller Plexus des Halssympathikus.</li>
                  </ul>
               </div>`,
            },
            {
               id: 7,
               title: "7. Mikroskopische Anatomie",
               textWithFormatting: `<div>
                  <p>Die Schilddrüse ist aus <strong>Schilddrüsenfollikeln</strong> aufgebaut, die von Follikelepithelzellen (<strong>Thyreozyten</strong>) umgeben sind. Zwischen den Follikeln liegen die parafollikulären Zellen (<strong>C-Zellen</strong>).</p>
                  <h3>Zelltypen und ihre Funktionen</h3>
                  <ul>
                     <li><strong>Thyreozyten:</strong>
                        <ul>
                           <li><em>Beschreibung:</em> Kubische Epithelzellen, bilden das einschichtige Follikelepithel, liegen an der Basalmembran mit Anschluss an das Follikellumen.</li>
                           <li><em>Funktion:</em> Produktion von Thyreoglobulin (TG), Synthese von T₃ und T₄, Speicherung als Kolloid im Follikellumen.</li>
                        </ul>
                     </li>
                     <li><strong>C-Zellen:</strong>
                        <ul>
                           <li><em>Beschreibung:</em> Größere, helle Zellen zwischen den Follikeln, liegen an der Basalmembran ohne Anschluss an das Follikellumen.</li>
                           <li><em>Funktion:</em> Produktion von <a href="/trafarette/calcitonin">Calcitonin</a>, Regulierung des Kalziumspiegels im Blut.</li>
                        </ul>
                     </li>
                  </ul>
               </div>`,
            },
            {
               id: 8,
               title: "8. Funktion der Schilddrüsenhormone",
               textWithFormatting: `<div>
                  <h3>T₄ (Thyroxin)</h3>
                  <ul>
                     <li><strong>Eigenschaften:</strong> Speicherform des Hormons, lange Halbwertszeit.</li>
                     <li><strong>Wirkung:</strong> Regulation von Stoffwechsel und Wachstum.</li>
                     <li><strong>Bildungsort:</strong> Synthese in den Thyreozyten.</li>
                  </ul>
                  <h3>T₃ (Trijodthyronin)</h3>
                  <ul>
                     <li><strong>Eigenschaften:</strong> Biologisch aktive Form, kurze Halbwertszeit.</li>
                     <li><strong>Wirkung:</strong> Steuert Stoffwechselprozesse und Wachstum.</li>
                     <li><strong>Bildungsort:</strong> 20 % in der Schilddrüse, 80 % durch Umwandlung von T₄ in peripheren Geweben.</li>
                  </ul>
                  <h3><a href="/trafarette/calcitonin">Calcitonin</a></h3>
                  <ul>
                     <li><strong>Eigenschaften:</strong> Peptidhormon.</li>
                     <li><strong>Wirkung:</strong> Senkung des Kalziumspiegels im Blut.</li>
                     <li><strong>Bildungsort:</strong> Synthese in den C-Zellen.</li>
                  </ul>
               </div>`,
            },
            {
               id: 9,
               title: "9. Biosynthese der Schilddrüsenhormone",
               textWithFormatting: `<div>
                  <ol>
                     <li><strong>Synthese von Thyreoglobulin (TG):</strong> Bildung im rauen ER der Thyreozyten, Verpackung im Golgi-Apparat, Abgabe ins Follikellumen durch Exozytose.</li>
                     <li><strong>Aufnahme von Iodid:</strong> Basolateraler Transport mittels Na⁺/I⁻-Symporter in den Thyreozyten, apikaler Transport ins Follikellumen durch Pendrin.</li>
                     <li><strong>Iodierung von Thyreoglobulin:</strong> Oxidation von Iodid durch Thyreoperoxidase, Iodierung der Tyrosinreste im TG, Kopplung zu T₃ und T₄.</li>
                     <li><strong>Speicherung:</strong> TG mit gebundenen Hormonen wird als Kolloid im Follikellumen gespeichert.</li>
                     <li><strong>Sekretion:</strong> Endozytose des iodierten TG, Proteolyse in Lysosomen, Freisetzung von T₃ und T₄ ins Blut.</li>
                  </ol>
               </div>`,
            },
            {
               id: 10,
               title: "10. Wirkungen der Schilddrüsenhormone",
               textWithFormatting: `<div>
                  <h3>Auf das Herz-Kreislauf-System</h3>
                  <ul>
                     <li>Erhöhung von Herzfrequenz und Herzzeitvolumen.</li>
                     <li>Verstärkte Wirkung von Katecholaminen durch gesteigerte Expression von β-Rezeptoren.</li>
                  </ul>
                  <h3>Auf den Stoffwechsel</h3>
                  <ul>
                     <li>Erhöhung des Grundumsatzes.</li>
                     <li>Steigerung von Lipolyse und Glukoneogenese.</li>
                     <li>Förderung des Proteinstoffwechsels.</li>
                     <li>Erhöhte Expression der Na⁺/K⁺-ATPase.</li>
                  </ul>
                  <h3>Auf Wachstum und Entwicklung</h3>
                  <ul>
                     <li>Skelettwachstum und Körperwachstum.</li>
                     <li>Reifung des Nervensystems.</li>
                     <li>Stimulierung der Synthese und Sekretion von Wachstumshormon.</li>
                  </ul>
                  <h3>Auf die Thermoregulation</h3>
                  <ul>
                     <li>Steigerung der Wärmeproduktion durch erhöhte Stoffwechselaktivität.</li>
                  </ul>
               </div>`,
            },
            {
               id: 11,
               title: "11. Regulation der Schilddrüsenhormone",
               textWithFormatting: `<div>
                  <h3>Hypothalamus-Hypophysen-Schilddrüsen-Achse</h3>
                  <p><strong>TRH (Thyreotropin-Releasing-Hormon):</strong></p>
                  <ul>
                     <li><strong>Syntheseort:</strong> Hypothalamus.</li>
                     <li><strong>Stimulus:</strong> Kälte, Stress.</li>
                     <li><strong>Wirkung:</strong> Stimuliert Freisetzung von TSH.</li>
                  </ul>
                  <p><strong>TSH (Thyreoidea-stimulierendes Hormon):</strong></p>
                  <ul>
                     <li><strong>Syntheseort:</strong> Hypophysenvorderlappen.</li>
                     <li><strong>Hemmung:</strong> Negative Rückkopplung durch hohe T₃/T₄-Spiegel.</li>
                     <li><strong>Wirkung:</strong> Stimuliert Synthese und Freisetzung von T₃ und T₄, fördert Iodid-Aufnahme.</li>
                  </ul>
                  <h3>Einfluss von β-hCG</h3>
                  <ul>
                     <li><strong>Syntheseort:</strong> Plazenta.</li>
                     <li><strong>Besonderheit:</strong> Kann an den TSH-Rezeptor binden und die Schilddrüsenfunktion beeinflussen, insbesondere während der Schwangerschaft.</li>
                  </ul>
               </div>`,
            },
            {
               id: 12,
               title: "12. Schilddrüsenerkrankungen",
               textWithFormatting: `<div>
                  <h3>Hyperthyreose (Schilddrüsenüberfunktion)</h3>
                  <p><strong>Definition:</strong> Überproduktion von Schilddrüsenhormonen.</p>
                  <p><strong>Häufigkeit:</strong> 0,6–7 % der Bevölkerung; Frauen 5-mal häufiger betroffen.</p>
                  <p><strong>Symptome:</strong> Tachykardie, Gewichtsverlust, Nervosität, Schwitzen.</p>
                  <p><strong>Laborbefunde:</strong> TSH↓, T₃/T₄↑.</p>
                  <p><strong>Sonderformen:</strong> Morbus Basedow, Schilddrüsenautonomie.</p>
                  <h3><a href="/trafarette/hypothyreose">Hypothyreose</a> (Schilddrüsenunterfunktion)</h3>
                  <p><strong>Definition:</strong> Unterproduktion von Schilddrüsenhormonen.</p>
                  <p><strong>Häufigkeit:</strong> 1–3 % der Bevölkerung; Frauen 4-mal häufiger betroffen.</p>
                  <p><strong>Symptome:</strong> Müdigkeit, Gewichtszunahme, Kälteempfindlichkeit.</p>
                  <p><strong>Laborbefunde:</strong> TSH↑, T₃/T₄↓.</p>
                  <p><strong>Sonderformen:</strong> Hashimoto-Thyreoiditis, angeborene <a href="/trafarette/hypothyreose">Hypothyreose</a>.</p>
               </div>`,
            },
            {
               id: 13,
               title: "13. <a href="/trafarette/calcitonin">Calcitonin</a>",
               textWithFormatting: `<div>
                  <h3>Eigenschaften und Synthese</h3>
                  <ul>
                     <li><strong>Art des Hormons:</strong> Peptidhormon, hydrophil.</li>
                     <li><strong>Syntheseort:</strong> C-Zellen der Schilddrüse.</li>
                     <li><strong>Syntheseprozess:</strong> Procalcitonin wird durch proteolytische Prozessierung zu Calcitonin.</li>
                  </ul>
                  <h3>Regulation der Sekretion</h3>
                  <ul>
                     <li><strong>Stimulus:</strong> Erhöhter Kalziumspiegel im Blut.</li>
                     <li><strong>Mechanismus:</strong> Calciumsensoren in den C-Zellen aktivieren Signalwege, die zur Ausschüttung von Calcitonin führen.</li>
                  </ul>
                  <h3>Wirkungen</h3>
                  <ul>
                     <li><strong>Knochen:</strong> Hemmung der Osteoklastenaktivität (verminderter Knochenabbau).</li>
                     <li><strong>Niere:</strong> Erhöhte Ausscheidung von Kalzium und Phosphat.</li>
                     <li><strong>Darm:</strong> Verminderte Kalziumresorption (geringer Effekt).</li>
                  </ul>
                  <h3>Bedeutung</h3>
                  <p>Wirkt antagonistisch zum Parathormon und ist beteiligt am Kalzium- und Phosphathaushalt.</p>
               </div>`,
            },            
            //  End of child tab 2 (можна далі ще таби добавити якшо треба)
         ],
      },
      //  End of parent tab 1
      //  Start of parent tab 2
      {
         id: 2,
         title: "Tab_2 page 2",
         questions: [
            {
               title: `Welche Hauptfunktion erfüllt die Schilddrüse im menschlichen Körper?`,
               answers: [
                   { name: `Produktion von Verdauungsenzymen`, isCorrect: false },
                   { name: `Regulation von Stoffwechsel, Wachstum und Energieverwertung`, isCorrect: true },
                   { name: `Speicherung von Kalzium im Knochen`, isCorrect: false },
                   { name: `Produktion von Insulin zur Blutzuckerregulation`, isCorrect: false },
               ],
           },
           {
               title: `Aus welchem Keimblatt entsteht die Schilddrüse während der Embryonalentwicklung?`,
               answers: [
                   { name: `Ektoderm`, isCorrect: false },
                   { name: `Mesoderm`, isCorrect: false },
                   { name: `Entoderm`, isCorrect: true },
                   { name: `Neuralleiste`, isCorrect: false },
               ],
           },
           {
               title: `Welche Zellen der Schilddrüse sind für die Produktion von Calcitonin verantwortlich?`,
               answers: [
                   { name: `Thyreozyten`, isCorrect: false },
                   { name: `C-Zellen (parafollikuläre Zellen)`, isCorrect: true },
                   { name: `Folikelzellen`, isCorrect: false },
                   { name: `Epithelzellen der Nebenschilddrüse`, isCorrect: false },
               ],
           },
           {
               title: `Welche der folgenden Arterien versorgt die Schilddrüse NICHT mit Blut?`,
               answers: [
                   { name: `A. thyroidea superior`, isCorrect: false },
                   { name: `A. thyroidea inferior`, isCorrect: false },
                   { name: `A. thyroidea ima`, isCorrect: false },
                   { name: `A. carotis interna`, isCorrect: true },
               ],
           },
           {
               title: `Welches Hormon stimuliert die Freisetzung von TSH aus dem Hypophysenvorderlappen?`,
               answers: [
                   { name: `TRH (Thyreotropin-Releasing-Hormon)`, isCorrect: true },
                   { name: `Somatostatin`, isCorrect: false },
                   { name: `Dopamin`, isCorrect: false },
                   { name: `β-hCG`, isCorrect: false },
               ],
           },
           {
               title: `Was ist die Hauptwirkung von Calcitonin?`,
               answers: [
                   { name: `Erhöhung des Kalziumspiegels im Blut`, isCorrect: false },
                   { name: `Senkung des Kalziumspiegels im Blut`, isCorrect: true },
                   { name: `Steigerung der Glukoseaufnahme in Zellen`, isCorrect: false },
                   { name: `Förderung der Schilddrüsenhormonproduktion`, isCorrect: false },
               ],
           },
           {
               title: `Welche Aussage zur Hyperthyreose ist FALSCH?`,
               answers: [
                   { name: `Sie führt häufig zu Tachykardie und Gewichtsverlust`, isCorrect: false },
                   { name: `Im Labor findet man erhöhtes TSH und erniedrigte T₃/T₄-Werte`, isCorrect: true },
                   { name: `Morbus Basedow ist eine Form der Hyperthyreose`, isCorrect: false },
                   { name: `Frauen sind häufiger betroffen als Männer`, isCorrect: false },
               ],
           },
           {
               title: `Welches Hormon ist die biologisch aktive Form und hat eine kurze Halbwertszeit?`,
               answers: [
                   { name: `T₄ (Thyroxin)`, isCorrect: false },
                   { name: `T₃ (Trijodthyronin)`, isCorrect: true },
                   { name: `Calcitonin`, isCorrect: false },
                   { name: `Parathormon`, isCorrect: false },
               ],
           },
           {
               title: `Welche Struktur verbindet die beiden Lappen der Schilddrüse?`,
               answers: [
                   { name: `Isthmus`, isCorrect: true },
                   { name: `Lobus pyramidalis`, isCorrect: false },
                   { name: `Capsula interna`, isCorrect: false },
                   { name: `Trachea`, isCorrect: false },
               ],
           },
           {
               title: `Wo liegt der Isthmus der Schilddrüse typischerweise?`,
               answers: [
                   { name: `Auf Höhe des Kehlkopfes`, isCorrect: false },
                   { name: `Auf Höhe des 2.–3. Trachealknorpels`, isCorrect: true },
                   { name: `Zwischen dem 5.–6. Halswirbel`, isCorrect: false },
                   { name: `Direkt unterhalb des Brustbeins`, isCorrect: false },
               ],
           },
           {
               title: `Welche Zellen sind für die Produktion von T₃ und T₄ verantwortlich?`,
               answers: [
                   { name: `C-Zellen`, isCorrect: false },
                   { name: `Nebenschilddrüsenzellen`, isCorrect: false },
                   { name: `Thyreozyten`, isCorrect: true },
                   { name: `Lymphozyten`, isCorrect: false },
               ],
           },
           {
               title: `Welche Aussage zur Biosynthese der Schilddrüsenhormone ist KORREKT?`,
               answers: [
                   { name: `Iodid wird durch die Na⁺/K⁺-ATPase in die Thyreozyten transportiert`, isCorrect: false },
                   { name: `Die Iodierung von Thyreoglobulin erfolgt durch die Thyreoperoxidase`, isCorrect: true },
                   { name: `T₃ und T₄ werden direkt ins Follikellumen freigesetzt`, isCorrect: false },
                   { name: `Thyreoglobulin wird in den Mitochondrien synthetisiert`, isCorrect: false },
               ],
           },
           {
               title: `Welche Symptome sind typisch für eine Hypothyreose?`,
               answers: [
                   { name: `Gewichtsverlust, Tachykardie, Nervosität`, isCorrect: false },
                   { name: `Gewichtszunahme, Müdigkeit, Kälteempfindlichkeit`, isCorrect: true },
                   { name: `Exophthalmus, Schwitzen, Schlafstörungen`, isCorrect: false },
                   { name: `Hyperaktivität, Durchfall, Hitzeintoleranz`, isCorrect: false },
               ],
           },
           {
               title: `Welches Hormon kann in der Schwangerschaft die Schilddrüsenfunktion beeinflussen, da es an den TSH-Rezeptor bindet?`,
               answers: [
                   { name: `Prolaktin`, isCorrect: false },
                   { name: `β-hCG (humanes Choriongonadotropin)`, isCorrect: true },
                   { name: `Östrogen`, isCorrect: false },
                   { name: `Progesteron`, isCorrect: false },
               ],
           },
           {
               title: `Was ist die Hauptursache für die Entstehung einer Hashimoto-Thyreoiditis?`,
               answers: [
                   { name: `Jodmangel`, isCorrect: false },
                   { name: `Autoimmunreaktion gegen Schilddrüsenantigene`, isCorrect: true },
                   { name: `Virale Infektion`, isCorrect: false },
                   { name: `Übermäßige Zufuhr von Schilddrüsenhormonen`, isCorrect: false },
               ],
           },
           
         ],
      },
      //  End of parent tab 2
      //  Start of parent tab 3
      {
         id: 3,
         title: "Tab_3 page 2",
         questions: [
            {
               title: `What is the capital of Ukraine?`,
               hidden_answer: `Kiev of course, you stupid creature.`,
            },
            {
               title: `What is the capital of the USA`,
               hidden_answer: `Man - it's Not New Your, for sure`,
            },
         ],
      },
      //  End of parent tab 3
   ],
};
