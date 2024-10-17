import img1 from '../../../../assets/Blutgerinnung.png';
import img2 from '../../../../assets/thrombozytenadhäsion.png';
import img3 from '../../../../assets/thrombozytenaggregation.png';
import img4 from '../../../../assets/anschlussreaktionen.png';
export default {
  path: "gerinnung",
  // http://localhost:5173/trafarette/gerinnung
  content: [
    {
      id: 1,
      title: "Gerinnung",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p><strong>Als Hämostase</strong> bezeichnet man die Summe der physiologischen Prozesse, die den Stillstand einer Blutung herbeiführen.</p>
            <p>Im erweiterten Sinn wird auch die ärztliche Blutstillung durch Gefäßnähte, Kompressionsverbände oder Hämostyptika als <strong>"Hämostase"</strong> bezeichnet.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Überblick",
          textWithFormatting: `<div>
            <p>Die Hämostase ist eine lebenswichtige Funktion. Durch sie ist der Körper in der Lage, Schäden in Gefäßen abzudichten und somit einen Blutverlust zu reduzieren bzw. zu verhindern. Nach Verletzung kleinerer Gefäße wie Kapillaren kommt eine Blutung in der Regel bereits nach kurzer Zeit zum Stillstand. Die Hämostase kommt durch das Ineinandergreifen von drei Schritten zustande:</p>
            <ul>
              <li><strong>Vasokonstriktion:</strong> Die Gefäße verengen sich durch die Wirkung von Substanzen wie Serotonin und Thromboxan, wodurch die Blutzirkulation verringert wird.</li>
              <li><strong>Thrombozytenadhäsion und -aktivierung:</strong> Verlangsamter Blutfluss fördert die Anlagerung und Aktivierung von Thrombozyten.</li>
              <li><strong>Fibrinbildung:</strong> Schließlich bildet sich durch die plasmatische Gerinnung ein Netzwerk aus Fibrin und Thrombozyten, das den verletzten Gefäßabschnitt verschließt.</li>
            </ul>
          </div>`,
        },
        {
          id: 3,
          title: "3. Primäre Hämostase",
          textWithFormatting: `<div>
            <p>Die primäre Hämostase stoppt Blutungen innerhalb von 1 bis 3 Minuten. Dies lässt sich klinisch durch die Bestimmung der Blutungszeit überprüfen.</p>
            <h4>3.1. Vasokonstriktion</h4>
            <p>Im ersten Schritt der primären Hämostase verengen sich die verletzten Gefäße. Prostaglandine und andere Stoffe sorgen für eine Reduktion des Blutflusses in der betroffenen Region, was die Grundlage für die nachfolgenden Prozesse schafft.</p>
            <h4>3.2. Thrombozytenadhäsion</h4>
            <img src="${img2}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Die Thrombozyten haften an Komponenten des verletzten Endothels, wie Kollagen und Fibronektin. Diese Adhäsion wird über Glykoprotein Ib (GPIb) vermittelt, das als wichtigster Rezeptor für den von-Willebrand-Faktor (vWF) fungiert, der wiederum eine Brücke zwischen Thrombozyten und dem subendothelialen Kollagen bildet.</p>
            <h4>3.3. Thrombozytenaggregation</h4>
          <img src="${img3}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Nach Aktivierung der Thrombozyten exprimiert sich das Glykoprotein IIb/IIIa, das vWF, Fibronektin und Fibrinogen bindet und so die Thrombozytenaggregation fördert. Die Thrombozyten verändern dabei ihre Form und katalysieren die weitere Anlagerung von Thrombozyten und die Aktivierung von Faktor X. Dieser Prozess führt schließlich zur irreversiblen Aggregation und Bildung eines Abscheidungsthrombus, der durch Fibrinogen vernetzt wird.</p>
          </div>`,
        },
        {
          id: 4,
          title: "4. Sekundäre Hämostase",
          textWithFormatting: `<div>
            <p>Die sekundäre Hämostase beschreibt die eigentliche Blutgerinnung, die etwa 6 bis 10 Minuten dauert. Sie führt zur Bildung eines festen Fibrinnetzes, in das Thrombozyten und Erythrozyten eingebettet werden. Dieses Netzwerk stellt sich makroskopisch als Thrombus dar. Die sekundäre Hämostase kann nach Morawitz in drei Phasen unterteilt werden:</p>
            <ul>
              <li><strong>Aktivierungsphase</strong></li>
              <li><strong>Koagulationsphase</strong></li>
              <li><strong>Retraktionsphase</strong></li>
            </ul>
            <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Es gibt zwei Gerinnungskaskaden: die <strong>intrinsische</strong> und die <strong>extrinsische</strong> Kaskade. Beide Systeme arbeiten über die Aktivierung von Gerinnungsfaktoren in einem stufenweisen Ablauf und führen letztlich zur Thrombinbildung, was die Fibrinpolymerisation anregt.</p>
            <h4>4.1. Intrinsisches System</h4>
            <p>Das intrinsische System bezieht sich auf die Reaktionen an der Oberfläche aktivierter Thrombozyten und fördert die Fibrinbildung. Dieser Weg der Blutgerinnung kann auch ohne Verletzung der Gefäßwand, wie bei liegenden zentralen Venenkathetern oder künstlichen Herzklappen, ausgelöst werden.</p>
            <p>Der <strong>Hageman-Faktor</strong> (Faktor XII) aktiviert das intrinsische System, indem er an negativ geladene Oberflächen bindet. Durch die Aktivierung von Faktor XI durch Faktor XIIa und Thrombin wird schließlich Faktor IX aktiviert, welcher mit Faktor VIIIa den sogenannten <strong>intrinsischen Tenasekomplex</strong> bildet. Dieser Komplex aktiviert Faktor X, wodurch die gemeinsame Endstrecke der Gerinnungskaskade beginnt.</p>
            <h4>4.2. Extrinsisches System</h4>
            <p>Das extrinsische System wird durch geschädigtes Gewebe aktiviert. Der <strong>Tissue Factor</strong> (Gewebsthromboplastin) reagiert mit dem im Blut zirkulierenden Faktor VII, der zu Faktor VIIa aktiviert wird. In Kombination mit Kalzium aktiviert Faktor VIIa den Faktor X, was zur Thrombinbildung führt und somit das extrinsische System mit dem intrinsischen System in der gemeinsamen Endstrecke verbindet.</p>
            <h4>4.3. Gemeinsame Endstrecke der plasmatischen Gerinnung</h4>
            <p>Ab der Aktivierung von <strong>Faktor Xa</strong> verlaufen die intrinsische und extrinsische Kaskade gemeinsam. Faktor Xa bildet mit <strong>Faktor Va</strong> den <strong>Prothrombinase-Komplex</strong>, der Prothrombin zu Thrombin (Faktor IIa) spaltet. Thrombin sorgt für die Umwandlung von Fibrinogen zu Fibrinmonomeren. Durch die Aktivierung von Faktor XIII werden diese Monomere zu Fibrinpolymeren vernetzt, die den Thrombus stabilisieren.</p>
            <h4>4.4. Anschlussreaktionen</h4>
            <img src="${img4}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Nach der Thrombusbildung ziehen sich die Wundränder im Rahmen der <strong>Retraktion</strong> zusammen, wobei Serum aus dem Blutkuchen gepresst wird. Der Abbau des Fibringerüsts erfolgt anschließend durch die <strong>Fibrinolyse</strong>.</p>
          </div>`,
        },
        {
          id: 5,
          title: "5. Klinik",
          textWithFormatting: `<div>
            <p>Störungen der Hämostase können entweder zu übermäßiger oder unzureichender Blutstillung führen. Ursachen können in Defekten der Thrombozyten, der plasmatischen Gerinnung oder der Fibrinolyse liegen.</p>
            <ul>
              <li><strong>Hämorrhagische Diathese</strong> beschreibt eine erhöhte Blutungsneigung.</li>
              <li><strong>Thrombophilie</strong> steht für eine Neigung zur überschießenden Gerinnung.</li>
            </ul>
            <p>Zur Überprüfung der Blutgerinnung werden verschiedene Labortests eingesetzt, darunter:</p>
            <ul>
              <li><strong>Prothrombinzeit</strong> (Quick-Wert)</li>
              <li><strong>Partielle Thromboplastinzeit</strong> (PTT)</li>
              <li><strong>Thrombinzeit</strong> (TZ)</li>
              <li><strong>Plasmafibrinogen</strong></li>
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
