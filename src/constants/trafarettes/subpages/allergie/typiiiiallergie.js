export default {
  path: "typiiiiallergie", //http://localhost:5173/trafarette/typiiiiallergie
  content: [
    {
      id: 1,
      title: "Typ-III-Allergie",
      childTabs: [
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Bei der <b>Typ-III-Allergie</b> handelt es sich um eine <b>hypersensitivitätsbedingte Immunreaktion</b>, bei der <b>Immunkomplexe</b> aus <b>Antikörpern</b> (meist IgG, IgA oder IgM) und <b>Antigenen</b> eine überschießende <b>Entzündungsreaktion</b> auslösen. Diese Art der Reaktion kann systemisch oder lokal auftreten und ist als <b>Arthus-Reaktion</b> oder <b>Serumkrankheit</b> bekannt.</p>
        </div>`,
        },
        {
          id: 2,
          title: "2. Ätiologie",
          textWithFormatting: `<div>
            <p>Die auslösenden Antigene können:</p>
            <ul>
                <li>• <b>Medikamente</b> (z. B. Antibiotika, Antikonvulsiva),</li>
                <li>• <b>Fremdproteine</b> (z. B. aus Impfstoffen oder Antiserum),</li>
                <li>• <b>Mikrobielle Bestandteile</b> (z. B. bakterielle Enzyme wie Streptokinase) oder</li>
                <li>• <b>Insektengifte</b>,</li>
            </ul>
            <p>sein. Die Empfindlichkeit gegenüber diesen <b>exogenen Substanzen</b> ist dabei individuell und hängt von der Sensibilisierung des Immunsystems ab.</p>
        </div>`,
        },
        {
          id: 3,
          title: "3. Pathophysiologie",
          textWithFormatting: `<div>
            <h4>3.1 Mechanismen</h4>
            <p>Bei der Typ-III-Allergie binden Antigene im Serum oder Gewebe an spezifische <b>Immunglobuline</b> (meist IgG, IgA, IgM), wodurch sich <b>Immunkomplexe</b> bilden. Diese Komplexe führen zu:</p>
            <ul>
                <li>• <b>Aktivierung des Komplementsystems</b> (klassischer Weg),</li>
                <li>• <b>Rekrutierung und Aktivierung von Phagozyten</b> (v. a. neutrophile Granulozyten),</li>
                <li>• <b>Freisetzung von Enzymen und reaktiven Sauerstoffspezies</b> aus Phagozyten, die zu <b>Gewebsschädigung</b> führen.</li>
            </ul>
            <h4>3.2 Beteiligte Zellen</h4>
            <ul>
                <li>• <b>Neutrophile Granulozyten</b>: Hauptzelltyp bei der Phagozytose von Immunkomplexen.</li>
                <li>• <b>Makrophagen</b>: Binden und entfernen Immunkomplexe ebenfalls und fördern die Immunantwort.</li>
                <li>• <b>Endothelzellen</b>: Zielstrukturen der Entzündungsmediatoren, speziell bei vaskulären Schäden.</li>
            </ul>
            <h4>3.3 Lokalisation der Immunreaktion</h4>
            <ul>
                <li>• Systemische Reaktionen durch <b>frei zirkulierende Immunkomplexe</b> (z. B. bei der Serumkrankheit).</li>
                <li>• Lokale Reaktionen durch <b>komplexgebundene Antigene</b> in Geweben (z. B. Arthus-Reaktion in der Haut).</li>
            </ul>
        </div>`,
        },
        {
          id: 4,
          title: "4. Klinische Merkmale",
          textWithFormatting: `<div>
            <h4>4.1 Arthus-Reaktion</h4>
            <ul>
                <li>• Lokale, meist <b>innerhalb von Minuten bis Stunden</b> auftretende Entzündungserscheinungen.</li>
                <li>Typische Symptome:</li>
                <ul>
                    <li>• <b>Rötung</b> und <b>Schwellung</b> an der Injektionsstelle.</li>
                    <li>• <b>Nekrosen</b> (bei schwerem Verlauf), mögliche <b>Ulzerationen</b>.</li>
                    <li>• <b>Vaskulitis</b> (z. B. allergische vaskulitische Reaktionen).</li>
                </ul>
            </ul>
            <h4>4.2 Serumkrankheit</h4>
            <ul>
                <li>• <b>Systemische Reaktion</b>, tritt etwa <b>4-10 Tage</b> nach Erstkontakt mit <b>fremden Proteinen</b> (z. B. Immunserum) auf.</li>
                <li>Charakteristische Symptome:</li>
                <ul>
                    <li>• <b>Fieber</b>, <b>Müdigkeit</b>, <b>Urtikaria</b> (allergische Hautreaktionen),</li>
                    <li>• <b>Arthralgien</b> (Schmerzen in den Gelenken),</li>
                    <li>• <b>Ödeme</b> und <b>generalisierte Lymphadenitis</b>.</li>
                </ul>
            </ul>
            <h4>4.3 Systemische Erkrankungen</h4>
            <ul>
                <li>• <b>Glomerulonephritis</b>: Schädigung der Nieren durch Immunkomplexe (z. B. bei <b>SLE</b> – systemischer Lupus erythematodes).</li>
                <li>• <b>Allergische Alveolitis</b>: Typischerweise als <b>Farmer-Lunge</b> bekannt, wo eingeatmete Antigene zu einer <b>alveolären Entzündung</b> führen.</li>
            </ul>
        </div>`,
        },
        {
          id: 5,
          title: "5. Beispiele",
          textWithFormatting: `<div>
            <table>
                <tr>
                    <th>Erkrankung</th>
                    <th>Mechanismus</th>
                    <th>Klinische Merkmale</th>
                </tr>
                <tr>
                    <td><b>Vaskulitis allergica</b></td>
                    <td>Lokale Immunkomplex-Ablagerung und <b>Komplementaktivierung</b></td>
                    <td>Hautrötungen, Petechien, blasenförmige Läsionen</td>
                </tr>
                <tr>
                    <td><b>Serumkrankheit</b></td>
                    <td>Komplexbildung nach Serumgabe und systemische <b>Komplementaktivierung</b></td>
                    <td>Fieber, Hautausschläge, Gelenkschmerzen, Ödeme</td>
                </tr>
                <tr>
                    <td><b>Farmer-Lunge</b></td>
                    <td>Einatmen von antigenhaltigem Staub (z. B. Schimmelsporen) führt zu alveolärer Immunkomplexbildung</td>
                    <td>Husten, Dyspnoe, Fieber</td>
                </tr>
                <tr>
                    <td><b>Postinfektiöse Glomerulonephritis</b></td>
                    <td>Ablagerung von Immunkomplexen in der Basalmembran der Glomeruli</td>
                    <td>Proteinurie, Hämaturie, Hypertonie, Ödeme</td>
                </tr>
            </table>
        </div>`,
        },
        {
          id: 6,
          title: "6. Therapie",
          textWithFormatting: `<div>
            <h4>6.1 Allgemeine Ansätze</h4>
            <ul>
                <li>• <b>Antigenvermeidung</b>: Ggf. das vermeidbare Antigen (z. B. Medikament) absetzen, um die Reaktion zu stoppen.</li>
                <li>• <b>Systemische Kortikosteroide</b>: Zur Reduktion der entzündlichen Reaktion bei schwereren Verläufen (z. B. Prednison).</li>
                <li>• <b>Antihistaminika</b>: Bei milden Hautsymptomen oder Urtikaria.</li>
            </ul>
            <h4>6.2 Immunsuppressive Therapie</h4>
            <p>Bei schweren systemischen Verlaufsformen (z. B. <b>Glomerulonephritis</b> oder <b>Vaskulitis</b>) kommen Immunsuppressiva wie <b>Azathioprin</b> oder <b>Cyclophosphamid</b> zum Einsatz.</p>
            <h4>6.3 Plasmaaustausch (Plasmapherese)</h4>
            <p>In seltenen Fällen bei besonders schweren Formen der Immunkomplex-bedingten Erkrankungen (z. B. schwere <b>systemische Vaskulitis</b>) angewendet, um die Immunkomplexe mechanisch aus dem Blut zu entfernen.</p>
        </div>`,
        },
        {
          id: 7,
          title: "7. Zusammenfassung",
          textWithFormatting: `<div>
            <p>Die Typ-III-Allergie beruht auf einer <b>Immunkomplex-vermittelten Hypersensitivitätsreaktion</b>. Diese kann lokal (Arthus-Reaktion) oder systemisch (Serumkrankheit) auftreten und führt zu entzündlichen Veränderungen, die von milden Hauterscheinungen bis hin zu schweren systemischen Erkrankungen reichen. Die Behandlung umfasst die Identifikation und Entfernung des auslösenden Antigens sowie medikamentöse Maßnahmen zur Kontrolle der Entzündungsreaktion.</p>
        </div>`,
        },
      ],
    },

    {
      id: 7,
      title: "Fragen",
      questions: [
        {
          title: "Welche Art von Reaktion ist die Typ-III-Allergie?",
          answers: [
            { name: "Soforttypreaktion", isCorrect: false },
            { name: "Zellvermittelte Immunantwort", isCorrect: false },
            { name: "Immunkomplex-Reaktion", isCorrect: true },
            { name: "Antikörper-vermittelte Zytotoxizität", isCorrect: false },
          ],
        },
        {
          title: "Welche Antikörper sind an der Typ-III-Allergie beteiligt?",
          answers: [
            { name: "IgE", isCorrect: false },
            { name: "IgA, IgG, IgM", isCorrect: true },
            { name: "IgD", isCorrect: false },
            { name: "IgB", isCorrect: false },
          ],
        },
        {
          title:
            "Welche der folgenden ist eine mögliche Ursache für eine Arthus-Reaktion?",
          answers: [
            { name: "Viren", isCorrect: false },
            { name: "Bakterielle Enzyme", isCorrect: true },
            { name: "Staubpartikel", isCorrect: false },
            { name: "Wärme", isCorrect: false },
          ],
        },
        {
          title:
            "Was ist eine typische klinische Manifestation der Arthus-Reaktion?",
          answers: [
            { name: "Erbrechen", isCorrect: false },
            { name: "Kopfschmerzen", isCorrect: false },
            { name: "Vasculitis allergica", isCorrect: true },
            { name: "Haarausfall", isCorrect: false },
          ],
        },
        {
          title:
            "Wie lange dauert es in der Regel, bis die Serumkrankheit nach Verabreichung eines artfremden Immunserums auftritt?",
          answers: [
            { name: "1-2 Tage", isCorrect: false },
            { name: "4-10 Tage", isCorrect: true },
            { name: "2-3 Wochen", isCorrect: false },
            { name: "15-20 Tage", isCorrect: false },
          ],
        },
        {
          title: "Welches Symptom ist typisch für die Serumkrankheit?",
          answers: [
            { name: "Locum-Tum-Dolori", isCorrect: false },
            { name: "Nasenbluten", isCorrect: false },
            { name: "Ödeme", isCorrect: true },
            { name: "Sehstörungen", isCorrect: false },
          ],
        },
        {
          title: "Welcher Zustand ist keine Folge der Typ-III-Allergie?",
          answers: [
            { name: "Serumkrankheit", isCorrect: false },
            { name: "Allergische Rhinitis", isCorrect: true },
            { name: "Farmer-Lunge", isCorrect: false },
            { name: "Vasculitis", isCorrect: false },
          ],
        },
        {
          title:
            "Welcher Mechanismus spielt eine zentrale Rolle bei der Typ-III-Allergie?",
          answers: [
            { name: "Aktivierung des Nervensystems", isCorrect: false },
            { name: "Aktivierung des Komplementsystems", isCorrect: true },
            { name: "Aktivierung des Herz-Kreislaufsystems", isCorrect: false },
            { name: "Aktivierung des endokrinen Systems", isCorrect: false },
          ],
        },
        {
          title:
            "Was passiert nach der Bindung des Immunkomplexes bei einer Typ-III-Allergie?",
          answers: [
            { name: "Freisetzung von Histamin", isCorrect: false },
            { name: "Phagozytose durch Leukozyten", isCorrect: true },
            { name: "Bildung von Antikörpern", isCorrect: false },
            { name: "Aktivierung von Fibroblasten", isCorrect: false },
          ],
        },
        {
          title:
            "Was ist ein anderer Begriff für postinfektiös allergische Alveolitis?",
          answers: [
            { name: "Farmer-Lunge", isCorrect: true },
            { name: "Bauarbeiter-Knie", isCorrect: false },
            { name: "Gärtner-Hand", isCorrect: false },
            { name: "Mechaniker-Schulter", isCorrect: false },
          ],
        },
      ],
    },

    {
      id: 22,
      title: "Fakten",

      questions: [
        {
          title:
            "Typ-III-Allergie ist eine hypersensitivitätsbedingte Immunreaktion.",
          hidden_answer:
            "Sie führt zu einer überschießenden Entzündungsreaktion durch Immunkomplexe.",
        },
        {
          title: "Immunkomplexe bestehen aus Antikörpern und Antigenen.",
          hidden_answer:
            "Die häufigsten Antikörpertypen sind IgG, IgA und IgM.",
        },
        {
          title: "Die Typ-III-Allergie kann lokal oder systemisch auftreten.",
          hidden_answer:
            "Lokal tritt sie z. B. als Arthus-Reaktion und systemisch als Serumkrankheit auf.",
        },
        {
          title:
            "Typische Auslöser sind Medikamente, Fremdproteine und mikrobielle Bestandteile.",
          hidden_answer:
            "Beispiele sind Antibiotika, Impfstoffe und bakterielle Enzyme.",
        },
        {
          title:
            "Die Arthus-Reaktion zeigt Symptome innerhalb von Minuten bis Stunden.",
          hidden_answer:
            "Symptome sind Rötung, Schwellung und mögliche Nekrosen an der Injektionsstelle.",
        },
        {
          title:
            "Die Serumkrankheit tritt 4-10 Tage nach Erstkontakt mit fremden Proteinen auf.",
          hidden_answer:
            "Charakteristische Symptome sind Fieber, Müdigkeit und Gelenkschmerzen.",
        },
        {
          title:
            "Neutrophile Granulozyten sind der Hauptzelltyp in der Typ-III-Allergie.",
          hidden_answer:
            "Sie phagozytieren Immunkomplexe und setzen Entzündungsmediatoren frei.",
        },
        {
          title:
            "Systemische Erkrankungen können Glomerulonephritis und allergische Alveolitis umfassen.",
          hidden_answer:
            "Diese Erkrankungen können durch Ablagerung von Immunkomplexen verursacht werden.",
        },
        {
          title:
            "Die Behandlung umfasst Antigenvermeidung und systemische Kortikosteroide.",
          hidden_answer:
            "Antihistaminika werden bei milden Symptomen eingesetzt.",
        },
        {
          title:
            "In schweren Fällen kann Plasmapherese zur Entfernung von Immunkomplexen angewendet werden.",
          hidden_answer:
            "Dies ist besonders relevant bei systemischen Vaskulitiden.",
        },
      ],
    },
  ],
};
