export default {
  path: "second_trafarette_page",
  // http://localhost:5173/trafarette/second_trafarette_page
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
          title: "1. Einleitung",
          textWithFormatting: `<div>
                 <p>Die Zellen des Körpers sind aufeinander angewiesen und übernehmen vielfältige Aufgaben unter verschiedenen Bedingungen. Damit sie effizient zusammenarbeiten können, ist eine ständige Kommunikation zwischen ihnen unerlässlich. Eine Form dieser Zellkommunikation erfolgt über die Übertragung von Signalen durch sogenannte extrazelluläre Botenstoffe, wie zum Beispiel Hormone. Wenn ein solcher Botenstoff seine Zielzelle erreicht, muss das Signal von außen nach innen weitergeleitet werden, um die entsprechenden Reaktionen auszulösen. Dieser Prozess wird als <strong>Signaltransduktion</strong> bezeichnet.</p>
              </div>`,
        },
        {
          id: 2,
          title: "2. Rezeptoren",
          textWithFormatting: `<div>
           <p>Um ihre Funktion auszuüben, müssen extrazelluläre Botenstoffe an spezifische <strong>Rezeptoren</strong> binden. Lipophile Botenstoffe können die Zellmembran durchdringen und an <strong>intrazelluläre Rezeptoren</strong> andocken. Hydrophile Botenstoffe hingegen können die Zellmembran nicht durchqueren, da diese lipophile Eigenschaften aufweist. Daher interagieren sie in der Regel mit <strong>integralen Membranrezeptoren</strong>, die das extrazelluläre Signal in ein intrazelluläres Signal umwandeln.</p>
       
           
           <table>
             <tr><th>Rezeptortypen</th><th>Beispiele für Liganden</th></tr>
             <tr><td>Intrazelluläre Rezeptoren</td><td>Glucocorticoide</td></tr>
             <tr><td>Membranrezeptoren</td><td>- G-Protein-gekoppelte Rezeptoren: Katecholamine</td></tr>
             <tr><td></td><td>- Rezeptor-Tyrosinkinasen: Insulin</td></tr>
             <tr><td></td><td>- Rezeptoren mit assoziierten Kinasen: Wachstumshormon</td></tr>
             <tr><td>Rezeptor-Serin-/Threoninkinasen</td><td>TGF-β (Zytokin)</td></tr>
             <tr><td>Andere enzymgekoppelte Rezeptoren</td><td>ANP</td></tr>
             <tr><td>Liganden-regulierte Ionenkanäle</td><td>Acetylcholin</td></tr>
           </table>
       
           <h3>Intrazelluläre Rezeptoren</h3>
           <p><strong>Definition:</strong> Liganden-abhängige Transkriptionsfaktoren, die im Zellkern agieren.</p>
           <p><strong>Beispiele für Liganden:</strong></p>
           <ul>
             <li>• Schilddrüsenhormone (Thyroidhormonrezeptor, TR)</li>
             <li>• Steroidhormone und Vitamin D (Steroidhormonrezeptoren)</li>
             <li>• All-trans-Retinsäure bzw. Retinoat (Retinoatrezeptor, RAR)</li>
           </ul>
           <p><strong>Prinzip der Aktivierung:</strong></p>
           <ul>
             <li>• Das lipophile Hormon durchdringt die Zellmembran und gelangt in die Zelle.</li>
             <li>• Innerhalb der Zelle bildet das Hormon mit seinem Rezeptor einen Komplex.</li>
             <li>• Der Hormon-Rezeptor-Komplex bindet im Zellkern an spezifische regulatorische Promotorelemente, die als „Hormone Responsive Elements“ bezeichnet werden, und fungiert dort als Transkriptionsfaktor, der die Genexpression beeinflusst.</li>
           </ul>
       
           <h3>Membranrezeptoren</h3>
           <p>Hydrophile Hormone wirken hauptsächlich über Rezeptoren, die in der Zellmembran verankert sind. Es gibt drei Haupttypen von Membranrezeptoren: G-Protein-gekoppelte Rezeptoren, enzymgekoppelte Rezeptoren und Liganden-aktivierte Ionenkanäle.</p>
       
           <h4>G-Protein-gekoppelte Rezeptoren (GPCRs)</h4>
           <p>GPCRs stellen die größte Gruppe der Membranrezeptoren dar. Das Funktionsprinzip basiert auf drei Komponenten: dem Rezeptor, dem G-Protein und einem Effektormolekül. Sobald der Rezeptor aktiviert wird, führt dies zur Aktivierung des G-Proteins, welches dann das Effektormolekül stimuliert.</p>
           <p><strong>Beispiele für Liganden:</strong></p>
           <ul>
             <li>• Katecholamine</li>
             <li>• Glandotrope Hormone der Adenohypophyse (ACTH, LH, FSH, TSH)</li>
             <li>• Glucagon</li>
           </ul>
           <p><strong>Rezeptoraufbau:</strong></p>
           <ul>
             <li>• Besteht aus 7 Transmembranhelices</li>
             <li>• Ligandenbindungsstellen befinden sich an den extrazellulären Abschnitten bzw. zwischen den Helices.</li>
             <li>• Die Bindungsstelle für das G-Protein ist intrazellulär lokalisiert.</li>
           </ul>
           <p><strong>Aufbau des G-Proteins:</strong></p>
           <ul>
             <li>• Ein heterotrimeres Protein, bestehend aus drei Untereinheiten:</li>
             <li>→ α-Untereinheit: Bindet im inaktiven Zustand GDP, im aktiven Zustand GTP. Sie besitzt GTPase-Aktivität, wodurch GTP zu GDP und Phosphat hydrolysiert wird, was die Aktivität des G-Proteins beendet. Sie ist durch einen Lipidanker in der Membran verankert.</li>
             <li>→ β-Untereinheit: Bildet einen stabilen Komplex mit der γ-Untereinheit.</li>
             <li>→ γ-Untereinheit: Über einen Lipidanker in der Zellmembran verankert und in einem Komplex mit der β-Untereinheit.</li>
           </ul>
           <p><strong>Prinzip der Aktivierung:</strong></p>
           <ul>
             <li>• Ein extrazellulärer Ligand bindet an den Rezeptor und löst eine Konformationsänderung aus.</li>
             <li>• Diese Änderung aktiviert das G-Protein, indem GDP in der α-Untereinheit durch GTP ersetzt wird.</li>
             <li>• Das G-Protein zerfällt in zwei Teile: a) einen β-γ-Komplex und b) die α-Untereinheit.</li>
           </ul>
       
           <h3>Rezeptor-Tyrosinkinasen (RTKs)</h3>
           <p><strong>Beispiele für Liganden:</strong> Insulin, Wachstumsfaktoren wie EGF (Epidermal Growth Factor) und IGF (Insulin-like Growth Factor).</p>
           <p><strong>Rezeptoraufbau:</strong></p>
           <ul>
             <li>• Eine extrazelluläre Region, die den Liganden bindet.</li>
             <li>• Eine einzelne Transmembrandomäne.</li>
             <li>• Ein zytoplasmatischer Teil, der Tyrosinkinaseaktivität besitzt.</li>
           </ul>
           <p><strong>Prinzip der Aktivierung:</strong></p>
           <ul>
             <li>• Die Bindung eines extrazellulären Liganden führt zur Dimerisierung zweier Rezeptormoleküle.</li>
             <li>• Dadurch gelangen die beiden Tyrosinkinasedomänen in enge Nachbarschaft und phosphorylieren sich wechselseitig an Tyrosinresten, ein Prozess, der als „Autophosphorylierung“ bezeichnet wird.</li>
             <li>• Durch die Autophosphorylierung wird die Kinaseaktivität verstärkt.</li>
             <li>• Verschiedene Signaltransduktionsmoleküle mit SH2-Domänen binden an die phosphorylierten Tyrosinreste und werden aktiviert, was die Aktivierung unterschiedlicher Effektormoleküle und Signalwege auslöst.</li>
           </ul>
       
           <h3>Rezeptor-Serin-/Threonin-Kinasen</h3>
           <p><strong>Beispiele für Liganden:</strong> TGF-β (Transforming Growth Factor β).</p>
           <p><strong>Rezeptorstruktur:</strong> Besteht aus zwei Untereinheiten, dem Typ-I- und Typ-II-Rezeptor, die beide Serin-/Threoninkinaseaktivität besitzen.</p>
           <p><strong>Prinzip der Aktivierung:</strong></p>
           <ul>
             <li>• Nach der Bindung des Liganden kommt es zur Oligomerisierung der Rezeptoren.</li>
             <li>• Der Typ-II-Rezeptor aktiviert den Typ-I-Rezeptor durch Phosphorylierung.</li>
             <li>• Der aktivierte Typ-I-Rezeptor phosphoryliert spezifische Smad-Proteine.</li>
             <li>• Diese phosphorylierten Smad-Proteine wirken dann als Transkriptionsfaktoren und regulieren die Expression von Zielgenen.</li>
           </ul>
       
           <h3>Liganden-regulierte Ionenkanäle</h3>
           <p>Neben Membranrezeptoren spielen auch liganden-gesteuerte Ionenkanäle eine wesentliche Rolle in der Signalübertragung. Da die Liganden meist Neurotransmitter sind, wird hier nur ein kurzer Überblick gegeben.</p>
           <p><strong>Beispiele für Liganden:</strong> Acetylcholin, GABA, Glutamat, IP3, Glycin.</p>
           <p><strong>Rezeptorstruktur:</strong> Diese Rezeptoren fungieren gleichzeitig als Ionenkanäle und gehören zur Klasse der Kanalproteine.</p>
           <p><strong>Prinzip der Aktivierung (Beispiel):</strong></p>
           <ul>
             <li>• Die Bindung eines Liganden löst eine Konformationsänderung des Rezeptors aus.</li>
             <li>• Dadurch öffnet sich eine Pore, die den Einstrom von Ionen wie Na+, K+, Ca2+ oder Cl− ermöglicht.</li>
             <li>• Die Veränderung des Membranpotenzials führt zu einer sehr schnellen Signalantwort.</li>
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
                           <li><em>Funktion:</em> Produktion von Calcitonin, Regulierung des Kalziumspiegels im Blut.</li>
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
                  <h3>Calcitonin</h3>
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
          title: "13. Calcitonin",
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
            {
              name: `Regulation von Stoffwechsel, Wachstum und Energieverwertung`,
              isCorrect: true,
            },
            { name: `Speicherung von Kalzium im Knochen`, isCorrect: false },
            {
              name: `Produktion von Insulin zur Blutzuckerregulation`,
              isCorrect: false,
            },
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
            {
              name: `Steigerung der Glukoseaufnahme in Zellen`,
              isCorrect: false,
            },
            {
              name: `Förderung der Schilddrüsenhormonproduktion`,
              isCorrect: false,
            },
          ],
        },
        {
          title: `Welche Aussage zur Hyperthyreose ist FALSCH?`,
          answers: [
            {
              name: `Sie führt häufig zu Tachykardie und Gewichtsverlust`,
              isCorrect: false,
            },
            {
              name: `Im Labor findet man erhöhtes TSH und erniedrigte T₃/T₄-Werte`,
              isCorrect: true,
            },
            {
              name: `Morbus Basedow ist eine Form der Hyperthyreose`,
              isCorrect: false,
            },
            {
              name: `Frauen sind häufiger betroffen als Männer`,
              isCorrect: false,
            },
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
            {
              name: `Iodid wird durch die Na⁺/K⁺-ATPase in die Thyreozyten transportiert`,
              isCorrect: false,
            },
            {
              name: `Die Iodierung von Thyreoglobulin erfolgt durch die Thyreoperoxidase`,
              isCorrect: true,
            },
            {
              name: `T₃ und T₄ werden direkt ins Follikellumen freigesetzt`,
              isCorrect: false,
            },
            {
              name: `Thyreoglobulin wird in den Mitochondrien synthetisiert`,
              isCorrect: false,
            },
          ],
        },
        {
          title: `Welche Symptome sind typisch für eine Hypothyreose?`,
          answers: [
            {
              name: `Gewichtsverlust, Tachykardie, Nervosität`,
              isCorrect: false,
            },
            {
              name: `Gewichtszunahme, Müdigkeit, Kälteempfindlichkeit`,
              isCorrect: true,
            },
            {
              name: `Exophthalmus, Schwitzen, Schlafstörungen`,
              isCorrect: false,
            },
            {
              name: `Hyperaktivität, Durchfall, Hitzeintoleranz`,
              isCorrect: false,
            },
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
            {
              name: `Autoimmunreaktion gegen Schilddrüsenantigene`,
              isCorrect: true,
            },
            { name: `Virale Infektion`, isCorrect: false },
            {
              name: `Übermäßige Zufuhr von Schilddrüsenhormonen`,
              isCorrect: false,
            },
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
