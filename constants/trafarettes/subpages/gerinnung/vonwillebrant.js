import img2 from "../../../../assets/vWF.png";
export default {
  path: "vonwillebrant",
  // http://localhost:5173/trafarette/vonwillebrant
  content: [
    {
      id: 1,
      title: "von-Willebrand-Faktor",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
            <p>Der <b>von-Willebrand-Faktor (vWF)</b> ist ein Glykoprotein, das zwei wichtige Funktionen in der Hämostase erfüllt. Er initiiert die Thrombozytenadhäsion und schützt den Faktor VIII vor Proteolyse. Obwohl vWF häufig als <a href="/trafarette/gerinnung">Gerinnungsfaktor</a> bezeichnet wird, ist diese Bezeichnung nicht ganz korrekt, da er nicht direkt an der Gerinnungskaskade beteiligt ist.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Physiologie",
          "textWithFormatting": `<div>
           <img src="${img2}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Der von-Willebrand-Faktor wird von <b>Endothelzellen</b> und <b>Megakaryozyten</b> synthetisiert und zirkuliert im Blutplasma im Komplex mit dem Faktor VIII, der dadurch vor Proteolyse geschützt wird. Er kann sowohl an die Proteine der subendothelialen Matrix als auch an den von-Willebrand-Rezeptor (Glykoprotein Ib/IX) auf der Oberfläche der Thrombozyten binden. So schafft er als sogenanntes Adhäsivprotein eine Verbindung zwischen den Thrombozyten und der verletzten Gefäßwand und aktiviert die Thrombozyten (primäre Hämostase).</p>
            <p>Der von-Willebrand-Faktor gehört zu den <b>Akute-Phase-Proteinen</b>. Er bildet im Plasma spontan Multimere, d.h. immer länger werdende Ketten. Von der Multimergröße ist auch die Funktion abhängig; sie unterliegt der Regulation durch eine spezielle Protease, die <b>ADAMTS-13</b> heißt.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "3. Klinik",
          "textWithFormatting": `<div>
            <p>Mangelzustände oder Defekte des von-Willebrand-Faktors führen zu einer hämorrhagischen Diathese namens <b><a href="/trafarette/willebrandjürgenssyndrom">Willebrand-Jürgens-Syndrom (vWS)</a></b>. Dies kann sehr unterschiedlich ausgeprägt sein. Ein Fehlen des von-Willebrand-Faktors führt außerdem zu sekundärem Faktor VIII-Mangel.</p>
            <p>Eine überschießende Multimergröße (<b>UL-vWF</b>) führt zu spontaner Aktivierung von Thrombozyten, was sich klinisch als <b>Thrombotisch-thrombozytopenische Purpura (TTP)</b> darstellt.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "4. Labormedizin",
          "textWithFormatting": `<div>
            <h5><b>Material</b></h5>
            <p>Zur Bestimmung des von-Willebrand-Faktors werden 5 ml Citratplasma benötigt. Die Blutproben dürfen nicht per Postversand transportiert werden.</p>
            
            <h5><b>Methoden</b></h5>
            <p>Der Plasmaspiegel des von-Willebrand-Faktors wird normalerweise mit zwei verschiedenen Methoden bestimmt:</p>
            <p>• Im Immunoassay als von-Willebrand-Faktor-Antigen (<b>vWF-Ag</b>)<br>
               • Funktionell als sog. Ristocetin-Cofaktor (<b>vWF-RiCof</b>)</p>
            <p>Weitergehend kann auch die Multimergröße (Quartärstruktur) untersucht werden (<b>vWF-Multimere</b>).</p>
            
            <h5><b>Referenzbereiche</b></h5>
            <p>• von-Willebrand-Faktor-Antigen: <b>70 - 150%</b><br>
               • Ristocetin-Cofaktor: <b>50 - 150%</b></p>
            <p>Die Konzentration des von-Willebrand-Faktors im Blut ist abhängig von der Blutgruppe des Patienten. Individuen mit Blutgruppe 0 haben regelmäßig niedrigere vWF-Spiegel als Menschen mit Blutgruppe A, B oder AB. Teilweise wird dies von Laboren berücksichtigt, indem sie blutgruppenabhängige Normbereiche angeben.</p>
            
            <h5><b>Interpretation</b></h5>
            <p>Die Ergebnisse des von-Willebrand-Faktor-Antigens und des Ristocetin-Cofaktors können voneinander abweichen. Damit wird die Möglichkeit erfasst, dass das Protein zwar vorhanden, aber dysfunktional ist (<b>Willebrand-Syndrom Typ II</b>).</p>
            
            <h5><b>Erhöhte Werte</b></h5>
            <p>Der Spiegel an vWF-Ag kann erhöht sein bei:</p>
            <p>• <b>Protein-C-Mangel</b><br>
               • <b>Urämie</b><br>
               • <b>Diabetes mellitus</b><br>
               • <b>Akute-Phase-Reaktion</b><br>
               • <b>Vaskulitis</b><br>
               • <b>Venenthrombose</b><br>
               • <b>Lungenerkrankungen</b><br>
               • <b>Lebererkrankungen</b><br>
               • <b>fibrinolytische Therapie</b><br>
               • <b>In der 2. Schwangerschaftshälfte</b></p>
            
            <h5><b>Erniedrigte Werte</b></h5>
            <p>Ein niedriger Spiegel an vWF-Ag kann im Rahmen folgender Zustände und Erkrankungen auftreten:</p>
            <p>• <b>Von-Willebrand-Syndrom</b><br>
               • <b>Verbrauchskoagulopathie</b><br>
               • <b>Medikation mit Asparaginase</b><br>
               • <b>Einnahme von Kontrazeptiva</b></p>
            <p>Bei einem erniedrigten Plasmaspiegel sollte eine Abklärung in einer Spezialambulanz erfolgen.</p>
          </div>`
        },
        {
          "id": 5,
          "title": "5. Therapie",
          "textWithFormatting": `<div>
            <p>Der von-Willebrand-Faktor kann bei Blutungskomplikationen durch den rekombinanten Gerinnungsfaktor <b><a href="/trafarette/vonicogalfa">Vonicog alfa</a></b> substituiert werden.</p>
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
