import img1 from "../../../../assets/Blutgerinnung.png";
import img2 from "../../../../assets/vWF.png";
import img3 from "../../../../assets/thrombozytenaggregation.png";
import img4 from "../../../../assets/anschlussreaktionen.png";
import img5 from "../../../../assets/Fibrinolyse.png";
export default {
  path: "gerinnung",
  // http://localhost:5173/trafarette/gerinnung
  content: [
    {
      id: 1,
      title: "Gerinnung/Hämostase",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `
            <section>
              <p><strong>Als Hämostase</strong> bezeichnet man die Summe der physiologischen Prozesse, die den Stillstand einer Blutung herbeiführen.</p>
              <p>Im erweiterten Sinn wird auch die ärztliche Blutstillung durch Gefäßnähte, Kompressionsverbände oder Hämostyptika als <strong>"Hämostase"</strong> bezeichnet.</p>
            </section>`,
        },
        {
          id: 2,
          title: "2. Überblick",
          textWithFormatting: `
            <section>
              <p>Die Hämostase ist eine lebenswichtige Funktion. Durch sie ist der Körper in der Lage, Schäden in Gefäßen abzudichten und somit einen Blutverlust zu reduzieren bzw. zu verhindern. Nach Verletzung kleinerer Gefäße wie Kapillaren kommt eine Blutung in der Regel bereits nach kurzer Zeit zum Stillstand. Die Hämostase kommt durch das Ineinandergreifen von drei Schritten zustande:</p>
              <ul>
                <li>• <strong>Vasokonstriktion:</strong> Die Gefäße verengen sich durch die Wirkung von Substanzen wie Serotonin und Thromboxan, wodurch die Blutzirkulation verringert wird.</li>
                <li>• <strong>Thrombozytenadhäsion und -aktivierung:</strong> Verlangsamter Blutfluss fördert die Anlagerung und Aktivierung von Thrombozyten.</li>
                <li>• <strong>Fibrinbildung:</strong> Schließlich bildet sich durch die plasmatische Gerinnung ein Netzwerk aus Fibrin und Thrombozyten, das den verletzten Gefäßabschnitt verschließt.</li>
              </ul>
            </section>`,
        },
        {
          id: 3,
          title: "3. Vaskuläre Blutstillung und primäre Hämostase",
          textWithFormatting: `
            <section>
              <h2>Vaskuläre Blutstillung</h2>
              <p>Bei einer Verletzung des Endothels wird eine sofortige <strong>Vasokonstriktion</strong> ausgelöst, um den Blutverlust zu minimieren. Diese Kontraktion der Blutgefäße erfolgt durch mehrere Mechanismen:</p>
              <ul>
                <li>• <strong>Neuraler Stimulationsreflex</strong>: Angeborene Reaktion, bei der die glatte Muskulatur der Gefäßwand kontrahiert.</li>
                <li>• <strong>Endothelin</strong>: Ein von den beschädigten Endothelzellen freigesetztes vasokonstriktives Peptid.</li>
                <li>• <strong>Thromboxan A2</strong>: Von aktivierten Thrombozyten freigesetzter Vasokonstriktor.</li>
              </ul>
              <p>Dieser Prozess ist eine kurzfristige Maßnahme und bereitet die Grundlage für die <strong>primäre Hämostase</strong>.</p>
        
              <h2>Primäre Hämostase</h2>
              <p>Die primäre Hämostase beginnt unmittelbar nach der Endothelverletzung und führt zur Bildung eines <strong>Thrombozyten-Pfropfs</strong> (weißer Thrombus). Sie besteht aus vier Phasen:</p>
              <ul>
                <li>• Thrombozytenadhäsion</li>
                <li>• Thrombozytenaktivierung</li>
                <li>• Thrombozytenaggregation</li>
                <li>• Thrombozytensekretion</li>
              </ul>
        
              <h3>Thrombozytenadhäsion</h3>
              <img src="${img2}" alt="kaskade" style="max-width: 100%; height: auto;">
              <ul>
                <li>• <strong>GpIb-Rezeptoren</strong> auf der Oberfläche der Thrombozyten binden an den <strong><a href="/trafarette/vonwillebrant">von-Willebrand-Faktor (vWF)</a></strong> innerhalb der subendothelialen Matrix, was die Blutplättchen fest an der Verletzungsstelle hält.</li>
                <li>• Zusätzliche Faktoren wie <strong>Kollagen</strong> und andere Glykoproteinrezeptoren fördern die Bindung und Aktivierung der Thrombozyten.</li>
              </ul>
        
              <h3>Thrombozytenaktivierung</h3>
              <p>Die Bindung an <a href="/trafarette/vonwillebrand">vWF</a> und Kollagen aktiviert die Thrombozyten, welche dann Granula freisetzen, die weitere Thrombozyten zur Verletzungsstelle rekrutieren und den Aggregationsprozess verstärken.</p>
              <ul>
                <li>• <strong>Starke Thrombozytenaktivatoren:</strong>
                  <ul>
                    <li>• <strong>Thrombin</strong>: Produziert in der Gerinnungskaskade.</li>
                    <li>• <strong>Kollagen</strong>: Direkt an der Verletzungsstelle vorhanden.</li>
                  </ul>
                </li>
                <li>• <strong>Schwächere Thrombozytenaktivatoren:</strong>
                  <ul>
                    <li>• <strong>ADP</strong>: Freigesetzt von Thrombozyten, fördert die Aktivierung weiterer Thrombozyten.</li>
                    <li>• <strong>Adrenalin</strong>: Wirkt als schwächerer Aktivator.</li>
                  </ul>
                </li>
                <li>• Aktivierte Thrombozyten verändern ihre Form, bilden <strong>Pseudopodien</strong> und aktivieren den <strong><a href="/trafarette/glykoproteinIIb">Glykoprotein IIb/IIIa</a></strong>, was die Bindung an Fibrinogen ermöglicht.</li>
              </ul>
        
              <h3>Thrombozytenaggregation</h3>
              <img src="${img3}" alt="kaskade" style="max-width: 100%; height: auto;">
              <p>Die aktivierten Thrombozyten verbinden sich über <strong>Fibrinogen</strong>, das zwei Thrombozyten gleichzeitig binden kann, wodurch <strong>Fibrinogenbrücken</strong> zwischen den Thrombozyten entstehen. Dies führt zur Bildung eines <strong>weißen Thrombus</strong>.</p>
              
              <h3>Thrombozytensekretion</h3>
              <p>Aktivierte Thrombozyten setzen zwei Arten von Granula frei:</p>
              <ul>
                <li>• <strong>Alpha-Granula:</strong> Enthalten Fibrinogen, vWF, Faktor V, PDGF, Thrombozytenfaktor-4, Fibronektin und Thrombospondin.</li>
                <li>• <strong>Dense-Granula:</strong> Enthalten ADP, Serotonin, Histamin und Kalzium.</li>
              </ul>
              <p>Die Freisetzung dieser Substanzen aktiviert weitere Thrombozyten, verstärkt die <strong>Vasokonstriktion</strong>, unterstützt die <strong>Gerinnungskaskade</strong> und fördert die Gefäßreparatur durch Rekrutierung von Fibroblasten und glatten Muskelzellen.</p>
            </section>`,
        },
        {
          id: 4,
          title: "4. Gerinnungsfaktoren",
          textWithFormatting: `<div>
            
            <ul>
              <li>• <strong><a href="/trafarette/faktorI">Faktor I (Fibrinogen)</a></strong>: Fibrinogen ist ein lösliches Protein im Blutplasma. Es wird durch Thrombin zu Fibrin umgewandelt, das ein unlösliches Netz bildet und so das Blutgerinnsel stabilisiert.</li>
              <li>• <strong><a href="/trafarette/faktorII">Faktor II (Prothrombin)</a></strong>: Prothrombin ist ein inaktives Vorläuferprotein (Proenzym), das durch den Aktivatorkomplex in Thrombin umgewandelt wird. Thrombin spielt eine Schlüsselrolle bei der Umwandlung von Fibrinogen zu Fibrin.</li>
              <li>• <strong><a href="/trafarette/faktorIII">Faktor III (Gewebethromboplastin oder Tissue Factor)</a></strong>: Tissue Factor ist ein Protein, das nach Gewebeschädigung freigesetzt wird und den extrinsischen Weg der Blutgerinnung aktiviert, indem es mit Faktor VIIa interagiert.</li>
              <li>• <strong><a href="/trafarette/faktorIV">Faktor IV (Kalzium-Ionen)</a></strong>: Kalzium-Ionen sind essentiell für mehrere Schritte der Gerinnungskaskade, insbesondere bei der Aktivierung von Prothrombin und der Bildung von Thrombin.</li>
              <li>• <strong><a href="/trafarette/faktorV">Faktor V (Proakzelerin)</a></strong>: Faktor V bildet zusammen mit Faktor X den Prothrombinase-Komplex, der die Umwandlung von Prothrombin in Thrombin katalysiert. Es handelt sich um einen Cofaktor für die Thrombinbildung.</li>
              <li>• <strong><a href="/trafarette/faktorVII">Faktor VII (Prokonvertin)</a></strong>: Faktor VII aktiviert den extrinsischen Gerinnungsweg durch Bindung an Tissue Factor und führt zur Aktivierung von Faktor X. Dies ist einer der schnellsten Wege zur Gerinnungsaktivierung.</li>
              <li>• <strong><a href="/trafarette/faktorVIII">Faktor VIII (Antihämophiles Globulin A)</a></strong>: Faktor VIII ist ein Cofaktor, der im intrinsischen Gerinnungsweg Faktor IXa unterstützt. Er bildet mit diesem einen Komplex, der die Aktivierung von Faktor X katalysiert. Ein Mangel an Faktor VIII führt zu Hämophilie A.</li>
              <li>• <strong><a href="/trafarette/faktorIX">Faktor IX (Antihämophiles Globulin B oder Christmas-Faktor)</a></strong>: Faktor IX aktiviert im Zusammenspiel mit Faktor VIII den Faktor X im intrinsischen Gerinnungsweg. Ein Mangel führt zur <a href="/trafarette/haemophiliab">Hämophilie B</a>.</li>
              <li>• <strong><a href="/trafarette/faktorX">Faktor X (Stuart-Prower-Faktor)</a></strong>: Faktor X ist ein Schlüsselfaktor sowohl im intrinsischen als auch im extrinsischen Weg der Gerinnung. Er wird durch Faktor IXa und VIIa aktiviert und bildet mit Faktor V den Prothrombinase-Komplex, der Prothrombin in Thrombin umwandelt.</li>
              <li>• <strong><a href="/trafarette/faktorXI">Faktor XI (Plasmathromboplastin-Antecedent)</a></strong>: Faktor XI spielt eine Rolle im intrinsischen Gerinnungsweg, indem er durch Thrombin aktiviert wird und dann Faktor IX aktiviert. Ein Mangel führt zu einer milden Hämophilie (Hämophilie C).</li>
              <li>• <strong><a href="/trafarette/faktorXII">Faktor XII (Hageman-Faktor)</a></strong>: Faktor XII initiiert den intrinsischen Gerinnungsweg durch seine Aktivierung bei Kontakt mit negativ geladenen Oberflächen (z.B. Kollagen). Es ist besonders wichtig für den Beginn der Gerinnung, hat aber klinisch eine geringere Bedeutung bei Blutungen.</li>
              <li>• <strong><a href="/trafarette/faktorXIII">Faktor XIII (Fibrinstabilisierender Faktor)</a></strong>: Faktor XIII stabilisiert das Fibringerinnsel durch Quervernetzung der Fibrinfasern, was dem Gerinnsel zusätzliche Festigkeit verleiht.</li>
            </ul>
            
            <h5>Weitere wichtige Faktoren und Proteine der Gerinnung</h5>
            <ul>
              <li>• <strong><a href="/trafarette/vonwillebrand">Von-Willebrand-Faktor (vWF)</a></strong>: Dieser ist kein Gerinnungsfaktor im engeren Sinne, aber ein Glykoprotein, das die Thrombozytenadhäsion an die Gefäßwand fördert und den Faktor VIII schützt.</li>
              <li>• <strong><a href="/trafarette/proteinc">Protein C</a> und <a href="/trafarette/proteins">Protein S</a></strong>: Diese Proteine sind Antikoagulantien und wirken hemmend auf die Gerinnung, indem sie die Faktoren Va und VIIIa inaktivieren.</li>
              <li>• <strong><a href="/trafarette/antithrombin">Antithrombin III</a></strong>: Dieses Protein inaktiviert Thrombin und die Faktoren IXa, Xa, XIa und XIIa, um eine überschießende Gerinnung zu verhindern.</li>
              <li>• <strong><a href="/trafarette/plasminogen">Plasminogen</a>/<a href="/trafarette/plasmin">Plasmin</a></strong>: Plasminogen wird in Plasmin umgewandelt, welches Fibrin abbaut und somit den Abbau von Gerinnseln <a href="/trafarette/fibrinolyse">(Fibrinolyse)</a> einleitet.</li>
            </ul>
          </div>`
        },
        {
          id: 5,
          title: "5. Sekundäre Hämostase",
          textWithFormatting: `
            <section>
              <p>Die sekundäre Hämostase beschreibt die eigentliche Blutgerinnung, die etwa 6 bis 10 Minuten dauert. Sie führt zur Bildung eines festen Fibrinnetzes, in das Thrombozyten und Erythrozyten eingebettet werden. Dieses Netzwerk stellt sich makroskopisch als Thrombus dar. Die sekundäre Hämostase kann nach Morawitz in drei Phasen unterteilt werden:</p>
              <ul>
                <li>• <strong>Aktivierungsphase</strong></li>
                <li>• <strong>Koagulationsphase</strong></li>
                <li>• <strong>Retraktionsphase</strong></li>
              </ul>
              <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
              <p>Es gibt zwei Gerinnungskaskaden: die <strong>intrinsische</strong> und die <strong>extrinsische</strong> Kaskade. Beide Systeme arbeiten über die Aktivierung von Gerinnungsfaktoren in einem stufenweisen Ablauf und führen letztlich zur Thrombinbildung, was die Fibrinpolymerisation anregt.</p>
        
              <h4>Intrinsisches System</h4>
              <p>Das intrinsische System bezieht sich auf die Reaktionen an der Oberfläche aktivierter Thrombozyten und fördert die Fibrinbildung. Dieser Weg der Blutgerinnung kann auch ohne Verletzung der Gefäßwand, wie bei liegenden zentralen Venenkathetern oder künstlichen Herzklappen, ausgelöst werden.</p>
              <p>Der <strong>Hageman-Faktor</strong> (Faktor XII) aktiviert das intrinsische System, indem er an negativ geladene Oberflächen bindet. Durch die Aktivierung von Faktor XI durch Faktor XIIa und Thrombin wird schließlich Faktor IX aktiviert, welcher mit Faktor VIIIa den sogenannten <strong>intrinsischen Tenasekomplex</strong> bildet. Dieser Komplex aktiviert Faktor X, wodurch die gemeinsame Endstrecke der Gerinnungskaskade beginnt.</p>
        
              <h4>Extrinsisches System</h4>
              <p>Das extrinsische System wird durch geschädigtes Gewebe aktiviert. Der <strong>Tissue Factor</strong> (Gewebsthromboplastin) reagiert mit dem im Blut zirkulierenden Faktor VII, der zu Faktor VIIa aktiviert wird. In Kombination mit Kalzium aktiviert Faktor VIIa den Faktor X, was zur Thrombinbildung führt und somit das extrinsische System mit dem intrinsischen System in der gemeinsamen Endstrecke verbindet.</p>
        
              <h4>Gemeinsame Endstrecke der plasmatischen Gerinnung</h4>
              <p>Ab der Aktivierung von <strong>Faktor Xa</strong> verlaufen die intrinsische und extrinsische Kaskade gemeinsam. Faktor Xa bildet mit <strong>Faktor Va</strong> den <strong>Prothrombinase-Komplex</strong>, der Prothrombin zu Thrombin (Faktor IIa) spaltet. Thrombin sorgt für die Umwandlung von Fibrinogen zu Fibrinmonomeren. Durch die Aktivierung von Faktor XIII werden diese Monomere zu Fibrinpolymeren vernetzt, die den Thrombus stabilisieren.</p>
        
              <h4>Anschlussreaktionen</h4>
              <img src="${img5}" alt="kaskade" style="max-width: 100%; height: auto;">
              <p>Nach der Thrombusbildung ziehen sich die Wundränder im Rahmen der <strong>Retraktion</strong> zusammen, wobei Serum aus dem Blutkuchen gepresst wird. Der Abbau des Fibringerüsts erfolgt anschließend durch die <strong><a href="/trafarette/fibrinolyse">Fibrinolyse</a></strong>.</p>
            </section>`,
        },
        {
          id: 6,
          title: "6. Klinik",
          textWithFormatting: `<div>
            <p>Störungen der Hämostase können entweder zu übermäßiger oder unzureichender Blutstillung führen. Ursachen können in Defekten der Thrombozyten, der plasmatischen Gerinnung oder der Fibrinolyse liegen.</p>
            <ul>
              <li>• <strong>Hämorrhagische Diathese</strong> beschreibt eine erhöhte Blutungsneigung.</li>
              <li>• <strong>Thrombophilie</strong> steht für eine Neigung zur überschießenden Gerinnung.</li>
            </ul>
            <p>Zur Überprüfung der Blutgerinnung werden verschiedene Labortests eingesetzt, darunter:</p>
            <ul>
              <li>• <strong>Prothrombinzeit</strong> (Quick-Wert)</li>
              <li>• <strong>Partielle Thromboplastinzeit</strong> (PTT)</li>
              <li>• <strong>Thrombinzeit</strong> (TZ)</li>
              <li>• <strong>Plasmafibrinogen</strong></li>
            </ul>
          </div>`,
        },
        {
          id: 7,
          title: "7. Erklärung von Tests zur Überprüfung der Blutgerinnung",
          textWithFormatting: `
            <section>
              <h2>1. aPTT (aktivierte partielle Thromboplastinzeit)</h2>
              
              <p>Die aPTT misst die Zeit, die das Blut braucht, um zu gerinnen, und prüft dabei die Funktion des <strong>intrinsischen Systems</strong> und des <strong>gemeinsamen Weges</strong> der Blutgerinnung. Dieser Test gibt Aufschluss über die Faktoren VIII, IX, XI und XII sowie über den Endteil der Gerinnungskaskade.</p>
              <p><strong>Wann wird der Test durchgeführt?</strong></p>
              <p>Zur Überwachung einer <strong>Heparintherapie</strong>, bei Verdacht auf <strong>Hämophilie</strong> oder andere Störungen der Gerinnungsfaktoren.</p>
              <p><strong>Normwerte:</strong> Die aPTT liegt normalerweise zwischen <strong>25 und 35 Sekunden</strong>.</p>
        
              <h2>2. PT/INR (Prothrombinzeit/International Normalized Ratio)</h2>
              
              <p>Die Prothrombinzeit (PT) prüft das <strong>extrinsische System</strong> der Blutgerinnung, insbesondere den Faktor VII sowie den gemeinsamen Weg. Der INR-Wert standardisiert das Ergebnis.</p>
              <p><strong>Wann wird der Test durchgeführt?</strong></p>
              <p>Zur Überwachung einer <strong>Vitamin-K-Antagonisten-Therapie</strong> (z.B. mit Warfarin) oder bei Verdacht auf <strong>Leberschäden</strong>.</p>
              <p><strong>Normwerte:</strong> Die PT beträgt normalerweise <strong>11 bis 13,5 Sekunden</strong>. Der INR-Normwert liegt bei <strong>1</strong>.</p>
        
              <h2>3. Thrombozytenzahl</h2>
              
              <p>Dieser Test misst die Anzahl der <strong>Thrombozyten</strong> im Blut, die eine Schlüsselrolle bei der <strong>primären Hämostase</strong> spielen.</p>
              <p><strong>Wann wird der Test durchgeführt?</strong></p>
              <p>Bei Verdacht auf <strong>Thrombozytopenie</strong> oder um die Funktion der Blutplättchen zu beurteilen.</p>
              <p><strong>Normwerte:</strong> Die normale Thrombozytenzahl liegt bei <strong>150.000 bis 400.000 Zellen/μl</strong>.</p>
        
              <h2>4. Fibrinogen-Test</h2>
             
              <p>Fibrinogen ist ein Protein, das in der letzten Phase der Blutgerinnung zu <strong>Fibrin</strong> umgewandelt wird und zur Bildung eines stabilen Gerinnsels beiträgt.</p>
              <p><strong>Wann wird der Test durchgeführt?</strong></p>
              <p>Bei Verdacht auf <strong>DIC (disseminierte intravasale Gerinnung)</strong> oder um das <strong>Blutungsrisiko</strong> zu überwachen.</p>
              <p><strong>Normwerte:</strong> Normalerweise liegt der Fibrinogenspiegel zwischen <strong>200 und 400 mg/dl</strong>.</p>
        
              <h2>5. D-Dimer-Test</h2>
              
              <p>D-Dimere sind Abbauprodukte von <strong>Fibrin</strong>. Ein erhöhter D-Dimer-Wert deutet auf ein aktives Gerinnsel hin.</p>
              <p><strong>Wann wird der Test durchgeführt?</strong></p>
              <p>Bei Verdacht auf <strong>tiefe Venenthrombose (TVT)</strong> oder <strong>Lungenembolie (LE)</strong> oder zur Überwachung von <strong>DIC</strong>.</p>
              <p><strong>Normwerte:</strong> D-Dimer-Werte unter <strong>0,5 µg/ml</strong> gelten als normal.</p>
            </section>`,
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
          title: "Was beschreibt die Hämostase?",
          answers: [
            { name: "Stillstand einer Blutung", isCorrect: true },
            { name: "Erhöhung der Blutgerinnung", isCorrect: false },
            { name: "Auflösung eines Thrombus", isCorrect: false },
            { name: "Bildung von Erythrozyten", isCorrect: false },
          ],
        },
        {
          title: "Welches Protein spielt eine zentrale Rolle bei der Fibrinbildung?",
          answers: [
            { name: "Thrombin", isCorrect: false },
            { name: "Fibrinogen", isCorrect: true },
            { name: "Kollagen", isCorrect: false },
            { name: "Serotonin", isCorrect: false },
          ],
        },
        {
          title: "Welche der folgenden Phasen gehört zur primären Hämostase?",
          answers: [
            { name: "Vasokonstriktion", isCorrect: true },
            { name: "Fibrinpolymerisation", isCorrect: false },
            { name: "Retraktionsphase", isCorrect: false },
            { name: "Koagulationsphase", isCorrect: false },
          ],
        },
        {
          title: "Was bindet an den von-Willebrand-Faktor?",
          answers: [
            { name: "Erythrozyten", isCorrect: false },
            { name: "GpIb-Rezeptoren der Thrombozyten", isCorrect: true },
            { name: "Kollagenfasern", isCorrect: false },
            { name: "Fibrinogen", isCorrect: false },
          ],
        },
        {
          title: "Welche Substanz fördert die Vasokonstriktion?",
          answers: [
            { name: "Serotonin", isCorrect: true },
            { name: "Thrombin", isCorrect: false },
            { name: "Histamin", isCorrect: false },
            { name: "Kalzium", isCorrect: false },
          ],
        },
        {
          title: "Welche Funktion hat der Prothrombinase-Komplex?",
          answers: [
            { name: "Bildet Fibrinogen", isCorrect: false },
            { name: "Spaltet Prothrombin zu Thrombin", isCorrect: true },
            { name: "Aktiviert Thrombozyten", isCorrect: false },
            { name: "Hemmt die Blutgerinnung", isCorrect: false },
          ],
        },
        {
          title: "Wie lange dauert die sekundäre Hämostase im Durchschnitt?",
          answers: [
            { name: "2 bis 5 Minuten", isCorrect: false },
            { name: "6 bis 10 Minuten", isCorrect: true },
            { name: "15 bis 20 Minuten", isCorrect: false },
            { name: "Über 30 Minuten", isCorrect: false },
          ],
        },
        {
          title: "Welche Phase gehört zur sekundären Hämostase?",
          answers: [
            { name: "Koagulationsphase", isCorrect: true },
            { name: "Vasokonstriktion", isCorrect: false },
            { name: "Thrombozytenadhäsion", isCorrect: false },
            { name: "Endothelverletzung", isCorrect: false },
          ],
        },
        {
          title: "Was ist ein Thrombus?",
          answers: [
            { name: "Eine Ansammlung von Blutplättchen", isCorrect: false },
            { name: "Ein festes Blutgerinnsel", isCorrect: true },
            { name: "Ein Gewebeverschluss", isCorrect: false },
            { name: "Eine Ablagerung von Fibrinogen", isCorrect: false },
          ],
        },
        {
          title: "Welches Gerinnungsfaktor-Protein wird durch den Hageman-Faktor (XII) aktiviert?",
          answers: [
            { name: "Faktor XI", isCorrect: true },
            { name: "Faktor IX", isCorrect: false },
            { name: "Faktor V", isCorrect: false },
            { name: "Faktor XIII", isCorrect: false },
          ],
        },
        {
          title: "Welcher Test prüft das extrinsische System der Blutgerinnung?",
          answers: [
            { name: "aPTT", isCorrect: false },
            { name: "PT/INR", isCorrect: true },
            { name: "Fibrinogen-Test", isCorrect: false },
            { name: "D-Dimer-Test", isCorrect: false },
          ],
        },
        {
          title: "Welche Substanz aktiviert die Thrombozyten?",
          answers: [
            { name: "Thrombin", isCorrect: true },
            { name: "Kalzium", isCorrect: false },
            { name: "Serotonin", isCorrect: false },
            { name: "Prothrombin", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt die Fibrinolyse?",
          answers: [
            { name: "Auflösung des Fibrinnetzes", isCorrect: true },
            { name: "Bildung eines Fibringerüsts", isCorrect: false },
            { name: "Aktivierung der Thrombozyten", isCorrect: false },
            { name: "Verengung der Gefäße", isCorrect: false },
          ],
        },
        {
          title: "Was ist die Rolle von ADP in der Blutgerinnung?",
          answers: [
            { name: "Aktiviert Thrombozyten", isCorrect: true },
            { name: "Aktiviert Endothelzellen", isCorrect: false },
            { name: "Spaltet Fibrinogen", isCorrect: false },
            { name: "Reduziert Vasokonstriktion", isCorrect: false },
          ],
        },
        {
          title: "Was misst der D-Dimer-Test?",
          answers: [
            { name: "Abbauprodukte von Fibrin", isCorrect: true },
            { name: "Thrombozytenzahl", isCorrect: false },
            { name: "Faktor XIII-Aktivität", isCorrect: false },
            { name: "Kalziumkonzentration im Blut", isCorrect: false },
          ],
        },
        {
          title: "Wie nennt man den Prozess der Bildung eines Thrombozyten-Pfropfs?",
          answers: [
            { name: "Primäre Hämostase", isCorrect: true },
            { name: "Sekundäre Hämostase", isCorrect: false },
            { name: "Fibrinolyse", isCorrect: false },
            { name: "Koagulation", isCorrect: false },
          ],
        },
        {
          title: "Welche Granula enthalten Fibrinogen und vWF?",
          answers: [
            { name: "Alpha-Granula", isCorrect: true },
            { name: "Dense-Granula", isCorrect: false },
            { name: "Beta-Granula", isCorrect: false },
            { name: "Gamma-Granula", isCorrect: false },
          ],
        },
        {
          title: "Was ist der Normwert für die Thrombozytenzahl?",
          answers: [
            { name: "150.000 bis 400.000 Zellen/μl", isCorrect: true },
            { name: "50.000 bis 100.000 Zellen/μl", isCorrect: false },
            { name: "500.000 bis 1.000.000 Zellen/μl", isCorrect: false },
            { name: "10.000 bis 50.000 Zellen/μl", isCorrect: false },
          ],
        },
        {
          title: "Was ist die Funktion von Faktor XIII?",
          answers: [
            { name: "Verknüpft Fibrinmonomere zu einem stabilen Netzwerk", isCorrect: true },
            { name: "Aktiviert Thrombozyten", isCorrect: false },
            { name: "Fördert die Vasokonstriktion", isCorrect: false },
            { name: "Spaltet Fibrinogen", isCorrect: false },
          ],
        },
        {
          title: "Wie wird die sekundäre Hämostase eingeleitet?",
          answers: [
            { name: "Durch die Bildung des Thrombin", isCorrect: true },
            { name: "Durch Thrombozytenadhäsion", isCorrect: false },
            { name: "Durch Vasokonstriktion", isCorrect: false },
            { name: "Durch die Freisetzung von Serotonin", isCorrect: false },
          ],
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
          title: "Was ist die normale Anzahl der Thrombozyten im Blut eines Erwachsenen?",
          hidden_answer: "Die normale Anzahl der Thrombozyten beträgt 150.000 bis 400.000 Zellen pro Mikroliter Blut.",
        },
        {
          title: "Wie lange dauert es normalerweise, bis die primäre Hämostase einsetzt?",
          hidden_answer: "Die primäre Hämostase setzt innerhalb von Sekunden bis wenigen Minuten nach einer Gefäßverletzung ein.",
        },
        {
          title: "Welche Substanz ist der Hauptbestandteil des stabilen Gerinnsels bei der sekundären Hämostase?",
          hidden_answer: "Fibrin ist der Hauptbestandteil des stabilen Gerinnsels bei der sekundären Hämostase.",
        },
        {
          title: "Wie wird der Fibrinabbau nach der Gerinnung genannt?",
          hidden_answer: "Der Abbau von Fibrin nach der Gerinnung wird Fibrinolyse genannt.",
        },
        {
          title: "Welches Enzym spaltet Fibrinogen zu Fibrin?",
          hidden_answer: "Thrombin spaltet Fibrinogen zu Fibrin.",
        },
        {
          title: "Welche Substanz wird bei der Thrombozytenaktivierung freigesetzt und fördert die Blutgerinnung?",
          hidden_answer: "ADP wird bei der Thrombozytenaktivierung freigesetzt und fördert die Blutgerinnung.",
        },
        {
          title: "Welche Zellen sind an der Bildung eines Thrombozyten-Pfropfs beteiligt?",
          hidden_answer: "Thrombozyten (Blutplättchen) sind an der Bildung eines Thrombozyten-Pfropfs beteiligt.",
        },
        {
          title: "Wie lange dauert die sekundäre Hämostase durchschnittlich?",
          hidden_answer: "Die sekundäre Hämostase dauert etwa 6 bis 10 Minuten.",
        },
        {
          title: "Was aktiviert die intrinsische Gerinnungskaskade?",
          hidden_answer: "Die intrinsische Gerinnungskaskade wird durch den Kontakt mit einer negativ geladenen Oberfläche aktiviert.",
        },
        {
          title: "Welche Phase folgt auf die Thrombozytenaggregation in der primären Hämostase?",
          hidden_answer: "Die Thrombozytensekretion folgt auf die Thrombozytenaggregation in der primären Hämostase.",
        },
      ],
    },
    //  End of parent tab 3
  ],
};
