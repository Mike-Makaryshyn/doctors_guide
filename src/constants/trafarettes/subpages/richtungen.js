import img2 from "../../../assets/kopfbezeich.png";
import img1 from "../../../assets/rumpfgrad.png";
import img3 from "../../../assets/rumpfseit.png";
export default {
  path: "richtungen",
  // http://localhost:5173/trafarette/richtungen
  content: [
    {
      id: 1,
      title: "Körperachsen",

      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
                                  <img src="${img1}" alt="Bildbeschreibung"
            <p>Anatomische Lage- und Richtungsbezeichnungen dienen der präzisen Beschreibung der räumlichen Lage und Orientierung von Körperstrukturen (Topographie).</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Hintergrund",
          textWithFormatting: `<div>
            <p>Diese Angaben sind relativ, das bedeutet, sie beziehen sich entweder auf eine gedachte Körpermitte (medial ↔ lateral) oder auf ein bestimmtes Organ bzw. Körpersegment (oral ↔ aboral).</p>
          </div>`,
        },

        {
          id: 3,
          title: "3. Liste der wichtigsten Lagebezeichnungen",
          textWithFormatting: `<div>
                      <style>
                        .float-right {
                          float: right;
                          margin-left: 20px;
                          max-width: 300px; /* Anpassbare Bildbreite */
                        }
                        .clearfix::after {
                          content: "";
                          display: table;
                          clear: both;
                        }
                      </style>
                      <div class="clearfix">
                        <p><strong>… nach Hauptrichtungen</strong></p>
                        <ul>
                          <li>anterior – nach vorne</li>
                          <li>posterior – nach hinten</li>
                          <li>superior – nach oben</li>
                          <li>inferior – nach unten</li>
                          <li>dexter – rechts</li>
                          <li>sinister – links</li>
                        </ul>
                        <p><strong>… am Rumpf</strong></p>
                        <img src="${img3}" alt="Bildbeschreibung" class="float-right">
                        <ul>
                          <li>ventral – bauchwärts, vorne</li>
                          <li>dorsal – rückenwärts, hinten</li>
                          <li>kranial – kopfwärts, nach oben</li>
                          <li>kaudal – steißwärts, nach unten</li>
                        </ul>
                        <p><strong>… am Kopf</strong></p>
                        <img src="${img2}" alt="Bildbeschreibung" class="float-right">
                        <ul>
                          <li>rostral – zum Mund/zur Nase hin</li>
                          <li>okzipital – zum Hinterkopf hin</li>
                          <li>oral – am Mund</li>
                          <li>aboral – vom Mund weg</li>
                          <li>temporal – an der Schläfe</li>
                          <li>nasal – zur Nase hin</li>
                        </ul>
                        <p><strong>… am Unterarm</strong></p>
                        <ul>
                          <li>ulnar – zur Elle hin</li>
                          <li>radial – zur Speiche hin</li>
                        </ul>
                        <p><strong>… an der Hand</strong></p>
                        <ul>
                          <li>palmar/volar – zur Handfläche hin</li>
                          <li>dorsal – zum Handrücken hin</li>
                        </ul>
                        <p><strong>… am Unterschenkel</strong></p>
                        <ul>
                          <li>tibial – zum Schienbein hin</li>
                          <li>fibular – zum Wadenbein hin</li>
                        </ul>
                        <p><strong>… am Fuß</strong></p>
                        <ul>
                          <li>plantar – zur Fußsohle hin</li>
                          <li>dorsal – zum Fußrücken hin</li>
                        </ul>
                        <p><strong>… in Steinschnittlage</strong></p>
                        <ul>
                          <li>12 Uhr – vorne, bauchwärts</li>
                          <li>3 Uhr – links (aus Patientensicht)</li>
                          <li>6 Uhr – unten, rückenwärts</li>
                          <li>9 Uhr – rechts (aus Patientensicht)</li>
                        </ul>
                        <p><strong>… in Bezug auf die Medianebene</strong></p>
                        <ul>
                          <li>medial – zur Mitte hin</li>
                          <li>lateral – seitwärts, von der Mitte weg</li>
                          <li>ipsilateral – auf derselben Seite</li>
                          <li>kontralateral – auf der gegenüberliegenden Seite</li>
                          <li>median – in der Medianebene</li>
                          <li>paramedian – neben der Medianebene</li>
                        </ul>
                        <p><strong>… in Bezug zum Rumpf</strong></p>
                        <ul>
                          <li>distal – vom Rumpf entfernt</li>
                          <li>proximal – zum Rumpf hin</li>
                        </ul>
                        <p><strong>… in Bezug zur Körpermitte</strong></p>
                        <ul>
                          <li>zentral – zur Körpermitte hin</li>
                          <li>peripher – nach außen, zum Rand hin</li>
                          <li>zentripetal – von außen nach innen laufend</li>
                          <li>zentrifugal – von innen nach außen laufend</li>
                        </ul>
                        <p><strong>… in Bezug zur Oberfläche</strong></p>
                        <ul>
                          <li>profundus – tief liegend</li>
                          <li>superficialis – oberflächlich liegend</li>
                          <li>externus – außen gelegen</li>
                          <li>internus – innen gelegen</li>
                        </ul>
                      </div>`,
        },
        {
          id: 4,
          title: "4. Zusammengesetzte Lagebezeichnungen",
          textWithFormatting: `<div>
            <p>Lagebezeichnungen können kombiniert werden, um Zwischenlagen oder Richtungen anzugeben. Beispiele sind:</p>
            <ul>
              <li>dorsokranial – hinten und oben am Rumpf</li>
              <li>anteromedial – vorne und zur Mitte hin</li>
              <li>anterolateral – vorne und seitlich</li>
              <li>posteromedial – hinten und zur Mitte hin</li>
              <li>posterolateral – hinten und seitlich</li>
              <li>dorsopalmar – vom Handrücken zur Handfläche</li>
            </ul>
          </div>`,
        },
        {
          id: 5,
          title: "5. Organbezogene Lagebezeichnungen",
          textWithFormatting: `<div>
            <p><strong>Systematik</strong></p>
            <p>Neben den allgemeinen Bezeichnungen können nahezu alle anatomischen Strukturen als Bezugspunkte verwendet werden. Übliche Präfixe sind:</p>
            <ul>
              <li>supra – über</li>
              <li>infra/sub – unter</li>
              <li>prä – vor</li>
              <li>retro – hinter</li>
              <li>intra – innen</li>
              <li>extra – außen</li>
              <li>peri – um … herum</li>
              <li>para – neben</li>
              <li>inter – zwischen</li>
            </ul>
            <p><strong>Beispiel</strong></p>
            <p>Bezogen auf die Leber (Hepar):</p>
            <ul>
              <li>intrahepatisch – in der Leber</li>
              <li>extrahepatisch – außerhalb der Leber</li>
              <li>suprahepatisch – oberhalb der Leber</li>
              <li>infrahepatisch – unterhalb der Leber</li>
              <li>perihepatisch – um die Leber herum</li>
              <li>parahepatisch – neben der Leber</li>
            </ul>
            <p>Diese Lagebezeichnungen helfen dabei, die räumliche Lage von Organen und Strukturen im Körper präzise zu definieren.</p>
          </div>`,
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
