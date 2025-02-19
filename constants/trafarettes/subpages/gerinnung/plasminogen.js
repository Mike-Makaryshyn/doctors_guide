
import img5 from "../../../../assets/Fibrinolyse.png";
export default {
  path: "plasminogen",
  // http://localhost:5173/trafarette/plasminogen
  content: [
    {
      id: 1,
      title: "Plasminogen",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
          <img src="${img5}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Plasminogen (PLG) ist die inaktive Vorstufe (Proenzym) des Plasmins, des zentralen Enzyms der <a href="/trafarette/fibrinolyse">Fibrinolyse</a>. Dieses Enzym spielt eine entscheidende Rolle im Prozess des Abbaus von Fibrin, welches bei der <a href="/trafarette/gerinnung">Blutgerinnung</a> gebildet wird.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Biochemie",
          "textWithFormatting": `<div>
            <h3>Synthese und Halbwertzeit</h3>
            <p>Plasminogen wird in der Leber synthetisiert und hat eine biologische Halbwertzeit von etwa 2,2 Tagen. Es kommt in zwei verschiedenen Glykoformen vor:</p>
            <ul>
              <li><strong>Typ-1-Plasminogen:</strong> Enthält zwei N-glykosylierte Zuckerreste und bindet bevorzugt an Thromben.</li>
              <li><strong>Typ-2-Plasminogen:</strong> Enthält einen O-glykosylierten Zuckerrest und bindet bevorzugt an Zelloberflächen.</li>
            </ul>
        
            <h3>Struktur</h3>
            <p>Das Protein besteht aus insgesamt sieben Domänen: einer C-terminalen Serinprotease-Domäne, einer N-terminalen PAN-Domäne und fünf Kringle-Domänen. Im zirkulierenden Blut liegt Plasminogen in einer geschlossenen, nicht-aktivierbaren Form vor. Erst durch Bindung an Thromben oder Zelloberflächen nimmt es eine offene Konformation an, die aktivierbar ist.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "3. Aktivierung",
          "textWithFormatting": `<div>
            <p>Die Aktivierung von Plasminogen erfolgt durch verschiedene Enzyme, wie den gewebespezifischen <strong>Plasminogenaktivator (tPA)</strong>, Urokinase (uPA), Kallikrein und <strong><a href="/trafarette/faktorXII">Faktor XII</a></strong>. Bei der tPA-Aktivierung dient Fibrin als Kofaktor. Therapeutisch kann Streptokinase zur Plasminogenaktivierung eingesetzt werden. Die Umwandlung von Plasminogen zu Plasmin erfolgt durch die Spaltung der Peptidbindung zwischen Arginin an Position 561 und Valin an Position 562.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "4. Labordiagnostik zur Plasminogenaktivität",
          "textWithFormatting": `<div>
            <h3>Indikationen</h3>
            <p>Veränderte Plasminogenkonzentrationen können auf verschiedene Erkrankungen oder Zustände hinweisen, die entweder zu einer erhöhten Blutungsneigung oder zu einer Thrombophilie führen. Dazu zählen:</p>
            <ul>
              <li>Hereditäre Defekte</li>
              <li>Leberschäden</li>
              <li>Plasminogenmangel</li>
              <li>Fibrinolytische Therapie</li>
            </ul>
        
            <h3>Durchführung</h3>
            <p>Die Bestimmung der Plasminogenkonzentration erfolgt über einen photometrischen Test. Dabei wird das Plasminogen durch einen Aktivator in Plasmin umgewandelt, welches ein chromogenes Substrat hydrolysiert. Dies führt zu einem Anstieg der Extinktion in der Probe.</p>
        
            <h3>Material</h3>
            <p>Für den Test werden 5 ml Citratplasma benötigt. Eine vollständige Füllung des Blutentnahmeröhrchens ist wichtig, um falsch niedrige Ergebnisse zu vermeiden.</p>
        
            <h3>Referenzbereich</h3>
            <p>Der normale Referenzbereich der Plasminogenaktivität liegt zwischen 75–140% (ca. 0,2 g/l).</p>
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
