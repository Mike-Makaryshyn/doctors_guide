export default {
  path: "kolorektaleskarzinom",
  // http://localhost:5173/trafarette/kolorektaleskarzinom
  content: [
    {
      id: 1,
      title: "Kolorektales Karzinom",
      hint: "Dickdarmkrebs, Darmkrebs, colorectal carcinoma, colon carcinoma",
      code: "ICD 10: C18.-: Bösartige Neubildung des Kolons, C19: Bösartige Neubildung am Rektosigmoid, Übergang, C20: Bösartige Neubildung des Rektums",
      childTabs: [
        //  Start of child tab 1
        {
          id: 3,
          title: "1. Definition",
          textWithFormatting: `<div>
                 <p>Das kolorektale Karzinom (KRK), auch als colorectal cancer (CRC) bekannt, ist eine bösartige Neubildung im Bereich des Dickdarms (Kolon) oder des Mastdarms (Rektum).</p>
               </div>`,
        },
        {
          id: 4,
          title: "2. Inzidenz und Altersverteilung",
          textWithFormatting: `<div>
           <p>In Deutschland erkranken jährlich etwa 60.000 Menschen neu an einem kolorektalen Karzinom. Die Erkrankung tritt vor allem im höheren Lebensalter auf: Rund 90 % aller Diagnosen werden bei Menschen gestellt, die älter als 55 Jahre sind.</p>
         </div>`,
        },
        {
          id: 5,
          title: "3. Ätiologie",
          textWithFormatting: `<div>
            <h2>Prädisponierende Faktoren</h2>
            <p>Es gibt eine Reihe von Faktoren, die das Risiko für die Entstehung eines kolorektalen Karzinoms erhöhen. Diese lassen sich grob in genetische Prädispositionen, Lebensstilfaktoren und bestimmte Vorerkrankungen unterteilen.</p>
            
            <h3>Genetische Faktoren</h3>
            <ul>
              <li>• <strong>Familiäre Polyposis-Syndrome:</strong> Dazu gehören unter anderem die familiäre adenomatöse Polyposis (FAP) und das Peutz-Jeghers-Syndrom.</li>
              <li>• <strong>Familiäre Vorbelastung:</strong> Das Risiko steigt, wenn in der Familie bereits kolorektale Karzinome diagnostiziert wurden.</li>
              <li>• <strong>Hereditäres nicht-polypöses Kolonkarzinom-Syndrom (HNPCC):</strong> Dieses Syndrom, auch als Lynch-Syndrom bekannt, erhöht ebenfalls das Risiko erheblich.</li>
            </ul>
            
            <h3>Lebensstilfaktoren</h3>
            <ul>
              <li>• <strong>Rauchen und Alkoholkonsum:</strong> Beide Faktoren sind bekannt dafür, das Risiko für verschiedene Krebsarten, einschließlich des kolorektalen Karzinoms, zu erhöhen.</li>
              <li>• <strong>Adipositas:</strong> Übergewicht ist ein signifikanter Risikofaktor.</li>
              <li>• <strong>Ernährung:</strong> Eine fettreiche, ballaststoffarme Ernährung sowie der Verzehr von viel rotem oder verarbeitetem Fleisch tragen zur Entstehung bei.</li>
            </ul>
            
            <h3>Krankheiten mit erhöhtem Risiko für kolorektale Karzinome</h3>
            <ul>
              <li>• <strong>Kolorektale Adenome:</strong> Gutartige Wucherungen im Darm können sich zu Krebs entwickeln.</li>
              <li>• <strong>Chronisch-entzündliche Darmerkrankungen:</strong> Colitis ulcerosa und Morbus Crohn erhöhen das Risiko, ebenso wie die primär sklerosierende Cholangitis.</li>
              <li>• <strong>Koinzidenz mit anderen Malignomen:</strong> Personen, die bereits an Mamma-, Ovarial- oder Magenkarzinomen leiden, haben ein erhöhtes Risiko für kolorektale Karzinome.</li>
              <li>• <strong>Diabetes mellitus Typ 2:</strong> Auch diese Stoffwechselerkrankung erhöht das Risiko.</li>
              <li>• <strong>Alter:</strong> Personen über 40 Jahre haben ein erhöhtes Risiko, mit steigendem Alter steigt es weiter an.</li>
            </ul>
        
            <h3>Protektive Faktoren</h3>
            <p>Bestimmte Lebensstilfaktoren können das Risiko für die Entwicklung eines kolorektalen Karzinoms senken:</p>
            <ul>
              <li>• <strong>Körperliche Aktivität:</strong> Regelmäßige Bewegung wirkt präventiv.</li>
              <li>• <strong>Schnelle Stuhlpassage:</strong> Eine rasche Verdauung kann das Risiko reduzieren.</li>
              <li>• <strong>Ernährung:</strong> Eine ballaststoffreiche, obst- und gemüsereiche Kost, kombiniert mit einem niedrigen Fleischkonsum, gilt als schützend.</li>
            </ul>
          </div>`,
        },
        {
          id: 6,
          title: "4. Klassifikation",
          textWithFormatting: `<div>
            <h2><a href="/trafarette/tnm">TNM-Klassifikation</a> des kolorektalen Karzinoms (Stand 2017)</h2>
            <p>Die TNM-Klassifikation ist ein international anerkanntes System zur Beschreibung des Tumorstadiums bei verschiedenen Krebsarten, darunter auch das kolorektale Karzinom. Sie beschreibt die Ausdehnung des Tumors (T), den Befall der Lymphknoten (N) sowie das Vorhandensein von Fernmetastasen (M). Bei kolorektalen Karzinomen wird die TNM-Klassifikation wie folgt angewendet:</p>
            <table>
              <tr>
                <th>TNM</th>
                <th>Ausdehnung</th>
              </tr>
              <tr>
                <td>TX</td>
                <td>Primärtumor kann nicht beurteilt werden</td>
              </tr>
              <tr>
                <td>T0</td>
                <td>Kein Anhalt für einen Primärtumor</td>
              </tr>
              <tr>
                <td>Tis</td>
                <td>Carcinoma in situ: Ein Frühstadium des Tumors, das auf die Schleimhaut begrenzt ist</td>
              </tr>
              <tr>
                <td>T1</td>
                <td>Infiltration der Submukosa (Schicht unterhalb der Darmschleimhaut)</td>
              </tr>
              <tr>
                <td>T2</td>
                <td>Infiltration der Muscularis propria, der Muskelschicht des Darms</td>
              </tr>
              <tr>
                <td>T3</td>
                <td>Infiltration der Subserosa (äußere Schicht des Darms) oder des umgebenden Fettgewebes</td>
              </tr>
              <tr>
                <td>T4</td>
                <td>Tumor hat entweder das viszerale Peritoneum durchbrochen (T4a) oder benachbarte Organe oder Strukturen infiltriert (T4b)</td>
              </tr>
              <tr>
                <td>NX</td>
                <td>Regionäre Lymphknoten können nicht beurteilt werden</td>
              </tr>
              <tr>
                <td>N0</td>
                <td>Keine Metastasen in den regionalen Lymphknoten</td>
              </tr>
              <tr>
                <td>N1</td>
                <td>1–3 befallene Lymphknoten</td>
              </tr>
              <tr>
                <td>N2a</td>
                <td>4–6 befallene Lymphknoten</td>
              </tr>
              <tr>
                <td>N2b</td>
                <td>≥7 befallene Lymphknoten</td>
              </tr>
              <tr>
                <td>M0</td>
                <td>Keine Fernmetastasen vorhanden</td>
              </tr>
              <tr>
                <td>M1a</td>
                <td>Fernmetastasen: Nur ein Organ betroffen (z. B. Leber, Lunge)</td>
              </tr>
              <tr>
                <td>M1b</td>
                <td>Fernmetastasen: Mehr als ein Organ betroffen</td>
              </tr>
              <tr>
                <td>M1c</td>
                <td>Fernmetastasen im Peritoneum (Bauchfell), mit oder ohne Beteiligung weiterer Organe</td>
              </tr>
            </table>
        
            <h2>Detaillierte Stadieneinteilung des kolorektalen Karzinoms nach <a href="./subpages/uicc">UICC</a></h2>
            <p>Auf Basis der TNM-Klassifikation erfolgt die Stadieneinteilung des kolorektalen Karzinoms durch die Union for International Cancer Control (UICC). Diese Einteilung ist eine Vereinfachung der TNM-Klassifikation und dient dazu, den Schweregrad des Tumors zu bestimmen und die geeignete Therapie zu planen. Die Stadien reichen von sehr frühen, begrenzten Tumoren bis hin zu fortgeschrittenen Tumoren mit Metastasen in anderen Organen.</p>
            <table>
              <tr>
                <th>KRK-UICC-Stadium</th>
                <th>TNM</th>
              </tr>
              <tr>
                <td>0</td>
                <td>Tis (Carcinoma in situ)</td>
              </tr>
              <tr>
                <td>I</td>
                <td>Bis T2, N0, M0</td>
              </tr>
              <tr>
                <td>II</td>
                <td>IIA: T3, N0, M0<br>IIB: T4a, N0, M0<br>IIC: T4b, N0, M0</td>
              </tr>
              <tr>
                <td>III</td>
                <td>IIIA: Bis T2, N1, M0 oder T1, N2a, M0<br>IIIB: T3/T4, N1, M0 oder T2/T3, N2a, M0<br>IIIC: T4a, N2a, M0 oder T3/T4a, N2b, M0 oder T4b, N1/N2, M0</td>
              </tr>
              <tr>
                <td>IV</td>
                <td>IVA: Jedes T, jedes N, M1a<br>IVB: Jedes T, jedes N, M1b<br>IVC: Jedes T, jedes N, M1c</td>
              </tr>
            </table>
            
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
