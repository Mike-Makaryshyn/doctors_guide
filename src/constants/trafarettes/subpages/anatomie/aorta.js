import img2 from '../../../../assets/Aorta.png';
import img1 from '../../../../assets/Aortapräzies.png';
export default {
  path: "aorta",
  folder: "anatomie",
  // http://localhost:5173/trafarette/aorta
  content: [
    {
      id: 1,
      title: "Aorta",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
          <img src="${img2}" alt="Aorta Diagram">
            <p><strong>Die Aorta</strong> ist die zentrale Arterie des menschlichen und tierischen Organismus. Sie transportiert das sauerstoffreiche Blut vom Herzen in die Körperperipherie. Seit Februar 2024 wird die Aorta offiziell als eigenständiges Organ anerkannt, basierend auf der Entscheidung der <strong>European Association for Cardio-Thoracic Surgery (EACTS)</strong> und der <strong>Society of Thoracic Surgeons (STS)</strong>.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Anatomie",
          textWithFormatting: `<div>
            <p>Die Aorta entspringt als zentrales Gefäß des Körperkreislaufs aus dem linken Ventrikel des Herzens und ist durch die <strong>Aortenklappe</strong> vom Herzen getrennt. Sie verläuft zunächst bogenförmig über die Luftröhre (<strong>Trachea</strong>) und wendet sich nach hinten (<strong>dorsal</strong>) und unten (<strong>kaudal</strong>).</p>
            <img src="${img1}" alt="Aorta Diagram">
            <p><strong>Im Brustbereich (Thorax) gibt die Aorta mehrere wichtige Gefäßäste ab:</strong></p>
            <ul>
              <li><strong>• Koronararterien</strong>, die das Herz selbst versorgen</li>
              <li><strong>• Truncus brachiocephalicus</strong></li>
              <li><strong>• Arteria carotis communis sinistra</strong></li>
              <li><strong>• Arteria subclavia sinistra</strong></li>
              <li><strong>• Interkostalarterien</strong> sowie kleinere Äste zur Versorgung der Rippenmuskulatur</li>
            </ul>
            
            <p><strong>Nachdem sie das Zwerchfell durch den Hiatus aortae passiert, gibt die Aorta folgende wichtige Gefäße ab:</strong></p>
            <ul>
              <li><strong>• Gefäße zum Zwerchfell</strong></li>
              <li><strong>• Arteriae renales</strong> zu den Nieren</li>
              <li><strong>• Arterien zu den Nebennieren, Hoden bzw. Ovarien</strong></li>
              <li><strong>• Drei unpaare Bauchgefäße</strong> zur Versorgung der Bauchorgane</li>
            </ul>
            
            <p><strong>Schließlich teilt sich die Aorta in die beiden Arteriae iliacae communes</strong>, die die untere Körperhälfte versorgen.</p>
          </div>`,
        },
        {
          id: 3,
          title: "2. Dimensionen",
          textWithFormatting: `<div>
            <p><strong>Die Aorta</strong> ist die größte Arterie des menschlichen Körpers. Sie hat beim Erwachsenen einen Durchmesser von etwa <strong>2,5 bis 3,5 cm</strong> und eine Länge von <strong>30 bis 40 cm</strong>. Ihre Form ähnelt der eines Spazierstocks.</p>
        
            <p><strong>Grobeinteilung der Aorta:</strong></p>
            <ul>
              <li><strong>• Aorta ascendens:</strong> Der aufsteigende Teil, direkt nach dem Herzen, aus dem die Koronararterien (im Bereich des Bulbus aortae) abzweigen.</li>
              <li><strong>• Arcus aortae:</strong> Der Aortenbogen.</li>
              <li><strong>• Aorta descendens:</strong> Der absteigende Teil, der in Richtung Becken verläuft.</li>
              <li><strong>• Pars thoracica:</strong> Der Abschnitt der Aorta bis zum Durchtritt durch das Zwerchfell.</li>
              <li><strong>• Pars abdominalis:</strong> Die Bauchaorta, unterteilt in:
                <ul>
                  <li>• suprarenal (oberhalb der Nierenarterien)</li>
                  <li>• infrarenal (unterhalb der Nierenarterien)</li>
                </ul>
              </li>
              <li><strong>• Bifurcatio aortae:</strong> Die Aufteilung der Aorta in die beiden Beckenarterien (Arteriae iliacae communes).</li>
              <li><strong>• Isthmus aortae:</strong> Eine physiologische Engstelle, die sich distal des Abgangs der linken Arteria subclavia befindet und den Übergang vom Aortenbogen zur Pars thoracica markiert. Hier liegt das Ligamentum arteriosum.</li>
            </ul>
        
            <p><strong>Übersicht der Abgänge der Aorta:</strong></p>
            <ul>
              <li><strong>• Koronararterien:</strong>
                <ul>
                  <li>• Arteria coronaria sinistra</li>
                  <li>• Arteria coronaria dextra</li>
                </ul>
              </li>
              <li><strong>• Äste des Aortenbogens:</strong>
                <ul>
                  <li>• Truncus brachiocephalicus</li>
                  <li>• Arteria carotis communis sinistra</li>
                  <li>• Arteria subclavia sinistra</li>
                </ul>
              </li>
              <li><strong>• Äste der Pars thoracica:</strong>
                <ul>
                  <li>• Arteriae intercostales posteriores (Interkostalarterien)</li>
                  <li>• Arteria subcostalis (paarig)</li>
                  <li>• Arteriae phrenicae superiores</li>
                  <li>• Rami bronchiales, oesophageales, pericardiaci, mediastinales</li>
                </ul>
              </li>
              <li><strong>• Äste der Pars abdominalis:</strong>
                <ul>
                  <li>• Arteria phrenica inferior (paarig)</li>
                  <li>• Truncus coeliacus</li>
                  <li>• Arteria mesenterica superior</li>
                  <li>• Arteria suprarenalis media (paarig)</li>
                  <li>• Arteria renalis (paarig)</li>
                  <li>• Arteria testicularis bzw. Arteria ovarica (paarig)</li>
                  <li>• Arteriae lumbales (vier Paare zur Rumpfwand)</li>
                  <li>• Arteria mesenterica inferior</li>
                  <li>• Arteria iliaca communis dextra et sinistra</li>
                  <li>• Arteria sacralis mediana</li>
                </ul>
              </li>
            </ul>
          </div>`,
        },
        {
          id: 4,
          title: "3. Histologie",
          textWithFormatting: `<div>
            <p>Die Aorta weist den klassischen dreischichtigen Aufbau großer Arterien auf:</p>
            <ul>
              <li><strong>• Tunica intima:</strong> Besteht aus Endothel, lockerem Bindegewebe und vereinzelt glatten Muskelzellen.</li>
              <li><strong>• Tunica media:</strong> Die dickste Schicht, geprägt von elastischen Fasern und Kollagen Typ III, zwischen denen Myofibroblasten und glatte Muskelzellen liegen. Diese Fasern sind konzentrisch in Lamellen angeordnet, was der Aorta die Fähigkeit zur Dehnung bei raschen Volumenschwankungen verleiht (Windkesselfunktion).</li>
              <li><strong>• Tunica externa (Adventitia):</strong> Die äußere Begrenzung der Aorta. Aufgrund der großen Wanddicke benötigt die Aorta die Vasa vasorum, welche die Tunica media und externa mit Nährstoffen versorgen.</li>
            </ul>
          </div>`,
        },
        {
          id: 5,
          title: "4. Physiologie",
          textWithFormatting: `<div>
            <p>Im Aortenbogen befinden sich <strong>Chemozeptoren (Glomus aorticum)</strong>, die auf Veränderungen des Sauerstoffpartialdrucks (pO2), des Kohlendioxidpartialdrucks (pCO2) sowie des pH-Wertes des Blutes reagieren. Diese Informationen werden über das vegetative Nervensystem an das ZNS weitergeleitet.</p>
        
            <p>Zusätzlich sind <strong>Barorezeptoren</strong> in der Aortenwand eingebettet, die den Blutdruck und dessen Schwankungen, die Blutdruckamplitude und die Herzfrequenz registrieren. Diese Daten werden ebenfalls ans ZNS weitergegeben und lösen den <strong>Barorezeptorreflex</strong> aus, der der Regulation des Blutdrucks dient.</p>
          </div>`,
        },
        {
          id: 6,
          title: "5. Klinik",
          textWithFormatting: `<div>
            <p>Erkrankungen der Aorta umfassen unter anderem:</p>
            <ul>
              <li><strong>• Arteriosklerose</strong></li>
              <li><strong>• Aortendissektion</strong></li>
              <li><strong>• Aortenisthmusstenose</strong></li>
              <li><strong>• Aortenaneurysma</strong></li>
              <li><strong>• Aortenverschluss</strong></li>
              <li><strong>• Aortenbogensyndrom</strong></li>
            </ul>
        
            <p><strong>Traumatische Verletzungen der Aorta:</strong></p>
            <ul>
              <li><strong>• Minimale Aortenverletzung (MAI)</strong></li>
              <li><strong>• Intramurales Hämatom der Aorta (IMH)</strong></li>
              <li><strong>• Aortales Pseudoaneurysma</strong></li>
              <li><strong>• Aortenruptur</strong></li>
            </ul>
        
            <p><strong>Seltene entzündliche Erkrankungen der Aorta (Aortitis) sind:</strong></p>
            <ul>
              <li><strong>• Mesaortitis luica</strong></li>
              <li><strong>• Takayasu-Arteriitis</strong></li>
            </ul>
          </div>`,
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
          title: "Welche Funktion hat die Aorta im menschlichen Körper?",
          answers: [
            {
              name: "Transportiert sauerstoffarmes Blut vom Herzen in die Lunge",
              isCorrect: false,
            },
            {
              name: "Transportiert sauerstoffreiches Blut vom Herzen in die Körperperipherie",
              isCorrect: true,
            },
            {
              name: "Transportiert sauerstoffarmes Blut vom Herzen zur Leber",
              isCorrect: false,
            },
            {
              name: "Transportiert sauerstoffreiches Blut vom Herzen zur Leber",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Wie groß ist der Durchmesser der Aorta beim Erwachsenen?",
          answers: [
            { name: "1,0 - 2,0 cm", isCorrect: false },
            { name: "2,5 - 3,5 cm", isCorrect: true },
            { name: "3,5 - 4,5 cm", isCorrect: false },
            { name: "5,0 - 6,0 cm", isCorrect: false },
          ],
        },
        {
          title:
            "Wie heißt der Teil der Aorta, der direkt nach dem Herzen entspringt?",
          answers: [
            { name: "Aorta descendens", isCorrect: false },
            { name: "Aorta ascendens", isCorrect: true },
            { name: "Arcus aortae", isCorrect: false },
            { name: "Pars abdominalis", isCorrect: false },
          ],
        },
        {
          title: "Welche Arterie versorgt das Herz selbst?",
          answers: [
            { name: "Koronararterien", isCorrect: true },
            { name: "Arteria carotis communis", isCorrect: false },
            { name: "Arteria subclavia", isCorrect: false },
            { name: "Arteria brachialis", isCorrect: false },
          ],
        },
        {
          title:
            "Wie wird der Abschnitt der Aorta genannt, der durch den Thorax verläuft?",
          answers: [
            { name: "Pars abdominalis", isCorrect: false },
            { name: "Pars thoracica", isCorrect: true },
            { name: "Arcus aortae", isCorrect: false },
            { name: "Aorta ascendens", isCorrect: false },
          ],
        },
        {
          title: "Welche Gefäße zweigen direkt aus dem Aortenbogen ab?",
          answers: [
            { name: "Arteriae renales", isCorrect: false },
            {
              name: "Truncus brachiocephalicus, Arteria carotis communis sinistra, Arteria subclavia sinistra",
              isCorrect: true,
            },
            { name: "Koronararterien", isCorrect: false },
            { name: "Interkostalarterien", isCorrect: false },
          ],
        },
        {
          title:
            "Wo befindet sich die physiologische Engstelle der Aorta, der Isthmus aortae?",
          answers: [
            {
              name: "Zwischen dem Aortenbogen und der Pars thoracica",
              isCorrect: true,
            },
            { name: "Im Bereich der Aorta ascendens", isCorrect: false },
            { name: "An der Bifurcatio aortae", isCorrect: false },
            { name: "Am Hiatus aortae", isCorrect: false },
          ],
        },
        {
          title: "Was beschreibt die Bifurcatio aortae?",
          answers: [
            {
              name: "Den Übergang der Aorta vom Thorax in die Bauchhöhle",
              isCorrect: false,
            },
            {
              name: "Die Aufteilung der Aorta in die beiden Beckenarterien",
              isCorrect: true,
            },
            {
              name: "Den Übergang der Aorta vom Herzen in die Lungenarterie",
              isCorrect: false,
            },
            {
              name: "Die Aufteilung der Aorta in Koronararterien",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Funktion erfüllt die Aorta im Rahmen der Windkesselfunktion?",
          answers: [
            {
              name: "Sie regelt die Speicherung von Blut in den Beinen",
              isCorrect: false,
            },
            {
              name: "Sie dehnt sich bei jedem Herzschlag aus und hilft, den Blutdruck konstant zu halten",
              isCorrect: true,
            },
            {
              name: "Sie pumpt das Blut direkt in die Lunge",
              isCorrect: false,
            },
            { name: "Sie reguliert den Blutzuckerspiegel", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Schicht der Aortenwand besteht aus elastischen Fasern und glatten Muskelzellen?",
          answers: [
            { name: "Tunica adventitia", isCorrect: false },
            { name: "Tunica intima", isCorrect: false },
            { name: "Tunica media", isCorrect: true },
            { name: "Endothel", isCorrect: false },
          ],
        },
        {
          title: "Welche Arterie zweigt NICHT direkt von der Aorta ab?",
          answers: [
            { name: "Arteria renalis", isCorrect: false },
            { name: "Arteria femoralis", isCorrect: true },
            { name: "Truncus brachiocephalicus", isCorrect: false },
            { name: "Arteria carotis communis sinistra", isCorrect: false },
          ],
        },
        {
          title: "Was passiert bei einer Aortendissektion?",
          answers: [
            {
              name: "Die Aortenklappe schließt nicht mehr richtig",
              isCorrect: false,
            },
            {
              name: "Die innere Schicht der Aortenwand reißt ein, was zu einer Aufspaltung der Wandschichten führt",
              isCorrect: true,
            },
            { name: "Es kommt zu einer Verengung der Aorta", isCorrect: false },
            { name: "Ein Blutgerinnsel blockiert die Aorta", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Erkrankung der Aorta ist durch eine Erweiterung des Gefäßes gekennzeichnet?",
          answers: [
            { name: "Aortenruptur", isCorrect: false },
            { name: "Aortenaneurysma", isCorrect: true },
            { name: "Aortenbogen-Syndrom", isCorrect: false },
            { name: "Aortitis", isCorrect: false },
          ],
        },
        {
          title:
            "Welche der folgenden Strukturen befindet sich NICHT in unmittelbarer Nähe der Aorta?",
          answers: [
            { name: "Trachea", isCorrect: false },
            { name: "Ösophagus", isCorrect: false },
            { name: "Vena cava inferior", isCorrect: true },
            { name: "Bronchien", isCorrect: false },
          ],
        },
        {
          title: "Welche Arterie versorgt die Nieren mit Blut?",
          answers: [
            { name: "Arteria mesenterica superior", isCorrect: false },
            { name: "Arteria renalis", isCorrect: true },
            { name: "Arteria iliaca communis", isCorrect: false },
            { name: "Arteria phrenica inferior", isCorrect: false },
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
          title:
            "Wie lang ist die Aorta eines erwachsenen Menschen im Durchschnitt?",
          hidden_answer: "Die Aorta ist etwa 30 bis 40 cm lang.",
        },
        {
          title: "Wie groß ist der Durchmesser der Aorta beim Erwachsenen?",
          hidden_answer:
            "Der Durchmesser der Aorta beträgt etwa 2,5 bis 3,5 cm.",
        },
        {
          title:
            "Welcher Teil der Aorta entspringt direkt aus dem linken Ventrikel?",
          hidden_answer:
            "Die Aorta ascendens entspringt direkt aus dem linken Ventrikel.",
        },
        {
          title:
            "Welche Arterien zweigen von der Aorta ab, um das Herz zu versorgen?",
          hidden_answer: "Die Koronararterien versorgen das Herz mit Blut.",
        },
        {
          title: "Was ist die Funktion der Aorta im Körper?",
          hidden_answer:
            "Die Aorta transportiert sauerstoffreiches Blut vom Herzen in den restlichen Körper.",
        },
        {
          title:
            "Wie wird der Abschnitt der Aorta genannt, der durch den Bauch verläuft?",
          hidden_answer:
            "Dieser Abschnitt wird als Pars abdominalis bezeichnet.",
        },
        {
          title: "Wie heißt der Teil der Aorta, der den Aortenbogen bildet?",
          hidden_answer: "Der Aortenbogen wird als Arcus aortae bezeichnet.",
        },
        {
          title: "Was beschreibt der Begriff Bifurcatio aortae?",
          hidden_answer:
            "Die Bifurcatio aortae beschreibt die Aufteilung der Aorta in die beiden Arteriae iliacae communes.",
        },
        {
          title:
            "Welches Gefäßsegment passiert die Aorta beim Eintritt in die Bauchhöhle?",
          hidden_answer:
            "Die Aorta passiert das Zwerchfell durch den Hiatus aortae.",
        },
        {
          title:
            "Welcher Abschnitt der Aorta ist für die Windkesselfunktion verantwortlich?",
          hidden_answer:
            "Die Tunica media der Aorta ist verantwortlich für die Windkesselfunktion.",
        },
        {
          title:
            "Welche anatomische Struktur begrenzt den Aortenbogen nach distal?",
          hidden_answer:
            "Der Isthmus aortae begrenzt den Aortenbogen nach distal.",
        },
        {
          title:
            "Was ist eine häufige Erkrankung, die die Aorta betrifft und zu einer Erweiterung des Gefäßes führt?",
          hidden_answer: "Ein Aneurysma ist eine Erweiterung der Aorta.",
        },
        {
          title:
            "Wie heißt die größte Arterie des Körpers, die von der Aorta abzweigt und die unteren Gliedmaßen versorgt?",
          hidden_answer:
            "Die Arteriae iliacae communes versorgen die unteren Gliedmaßen.",
        },
        {
          title: "Was sind Vasa vasorum?",
          hidden_answer:
            "Vasa vasorum sind kleine Gefäße, die die Tunica media und Tunica externa großer Arterien, wie der Aorta, versorgen.",
        },
        {
          title:
            "Welche Schicht der Aorta besteht hauptsächlich aus elastischen Fasern und glatten Muskelzellen?",
          hidden_answer:
            "Die Tunica media besteht hauptsächlich aus elastischen Fasern und glatten Muskelzellen.",
        },
      ],
    },
    //  End of parent tab 3
  ],
};
