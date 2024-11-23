export default {
  path: "allergien",   // http://localhost:5173/trafarette/allergien,
  content: [
    {
      id: 1,
      title: "Allergien",
      childTabs: [
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>
                Eine <b>Allergie</b> ist eine fehlgeleitete Immunreaktion des Körpers auf nicht-infektiöse Fremdstoffe, sogenannte <b>Antigene</b> (hier auch als <b>Allergene</b> bezeichnet). Bei sensibilisierten Personen führt der Kontakt mit diesen Antigenen zu einer überschießenden Entzündungsreaktion, begleitet von der Freisetzung von <b>Antikörpern</b> und <b>Entzündungsmediatoren</b>. Wesentlich ist die Beteiligung der <b>Antigen-Antikörper-Reaktion</b>. Die Immunantwort kann dabei lokal begrenzt oder systemisch auftreten und reicht von milden Symptomen bis hin zu lebensbedrohlichen Reaktionen.
            </p>
          </div>`
        },
        {
          id: 2,
          title: "2. Ätiologie (Ursachen)",
          textWithFormatting: `<div>
            <p>
                Allergien entstehen durch eine Fehlregulation des Immunsystems, bei der harmlose Umweltstoffe als bedrohlich eingeschätzt werden. Genetische Faktoren spielen eine wesentliche Rolle bei der Prädisposition zu Allergien, wobei auch Umweltbedingungen wie Hygiene, Ernährung und Lebensstil einen Einfluss ausüben. Zu den häufigsten Allergenen zählen:
            </p>
            <ul>
                <li><b>Pollen</b></li>
                <li><b>Hausstaubmilben</b></li>
                <li><b>Lebensmittel (z.B. Erdnüsse, Kuhmilch)</b></li>
                <li><b>Tierhaare</b></li>
                <li><b>Insektengifte</b></li>
                <li><b>Schimmelpilzsporen</b></li>
            </ul>
          </div>`
        },
        {
          id: 3,
          title: "3. Symptome",
          textWithFormatting: `<div>
            <p>
                Die Allergiesymptome können je nach Organ betroffen, unterschiedlich ausgeprägt sein. Mögliche Symptome umfassen:
            </p>
            <ul>
                <li><b>Atemwege</b>: 
                   <ul>
                       <li><b>Rhinitis allergica</b> (z.B. Heuschnupfen)</li>
                       <li><b>Rhinosinusitis</b></li>
                       <li><b>Asthma bronchiale</b></li>
                   </ul>
                </li>
                <li><b>Haut</b>: 
                   <ul>
                       <li><b>Urtikaria (Nesselsucht)</b></li>
                       <li><b>Kontaktekzem</b></li>
                       <li><b>Neurodermitis (atopische Dermatitis)</b></li>
                   </ul>
                </li>
                <li><b>Augen</b>: 
                   <ul>
                       <li><b>Allergische Konjunktivitis</b></li>
                   </ul>
                </li>
                <li><b>Magen-Darm-Trakt</b>: 
                   <ul>
                       <li><b>Durchfall</b></li>
                       <li><b>Übelkeit</b></li>
                   </ul>
                </li>
                <li><b>Allgemeinsymptome</b>: 
                   <ul>
                       <li><b>Fieber</b></li>
                       <li><b>Müdigkeit</b></li>
                       <li><b>Schlafstörungen</b></li>
                   </ul>
                </li>
            </ul>
          </div>`
        },
        {
          id: 4,
          title: "4. Pathomechanismen und Klassifikation (nach Coombs und Gell)",
          textWithFormatting: `<div>
            <p>
                Allergien werden aufgrund der unterschiedlichen Pathomechanismen in vier Haupttypen eingeteilt. Diese Einteilung nach Coombs und Gell (1963) unterscheidet verschiedene immunologische Reaktionsmechanismen:
            </p>
            <h4>4.1 Typ-I-Allergie (Sofort-Typ)</h4>
            <p>
                Die Typ-I-Allergie ist durch die Bindung von <b>IgE-Antikörpern</b> an <b>Mastzellen</b> und <b>basophile Granulozyten</b> charakterisiert. Kommt es zum Kontakt mit dem entsprechenden Allergen, führt dies zur Freisetzung von <b>Histamin</b>, <b>Prostaglandinen</b> und <b>Leukotrienen</b>. Die Symptome treten meist innerhalb von Sekunden bis Minuten auf.
            </p>
            <ul>
                <li><b>Beispiele</b>:
                   <ul>
                       <li>Urtikaria</li>
                       <li>Allergische Konjunktivitis</li>
                       <li>Heuschnupfen (Rhinitis allergica)</li>
                       <li>Asthma bronchiale</li>
                       <li>Anaphylaxie (z.B. durch Insektengifte)</li>
                   </ul>
                </li>
            </ul>
            <h4>4.2 Typ-II-Allergie (Zytotoxischer Typ)</h4>
            <p>
                Bei der Typ-II-Allergie kommt es zur Bildung von <b>Antikörper-Antigen-Komplexen</b> (IgG/IgM-Antikörper). Körpereigene Zellen, die das Antigen präsentieren, werden durch die Aktivierung von <b>zytotoxischen Zellen</b> oder das <b>Komplementsystem</b> lysiert.
            </p>
            <ul>
                <li><b>Beispiele</b>:
                   <ul>
                       <li>Medikamenteninduzierte <b>Thrombopenie</b></li>
                       <li>Hämolytische Anämie bei Transfusion</li>
                       <li>Allergische <b>Agranulozytose</b></li>
                   </ul>
                </li>
            </ul>
            <h4>4.3 Typ-III-Allergie (Immunkomplex-Typ)</h4>
            <p>
                Die Typ-III-Allergie entsteht, wenn sich zirkulierende <b>Immunkomplexe</b> (Allergen + IgG-Antikörper) ablagern und eine <b>Komplementaktivierung</b> auslösen. Dies führt zur lokalen Entzündungsreaktion mit <b>Phagozytose</b> und Freisetzung zytotoxischer Stoffe.
            </p>
            <ul>
                <li><b>Beispiele</b>:
                   <ul>
                       <li><b>Vaskulitiden</b></li>
                       <li><b>Farmer-Lunge</b></li>
                       <li><b>Serumkrankheit</b></li>
                   </ul>
                </li>
            </ul>
            <h4>4.4 Typ-IV-Allergie (Spättyp, zellvermittelte Reaktion)</h4>
            <p>
                Die Typ-IV-Allergie ist die einzige antikörperunabhängige Reaktion. Sie wird durch <b>sensibilisierte T-Lymphozyten</b> vermittelt, die über die Freisetzung von <b>Lymphokinen</b> eine entzündliche Antwort auslösen. Die Symptome treten erst Stunden bis Tage nach dem Allergen-Kontakt auf.
            </p>
            <ul>
                <li><b>Beispiele</b>:
                   <ul>
                       <li><b>Allergisches Kontaktekzem</b></li>
                       <li><b>Tuberkulinreaktion</b></li>
                       <li><b>Transplantatabstoßung</b></li>
                   </ul>
                </li>
            </ul>
            <h4>4.5 Weitere Typen</h4>
            <p>
                Zusätzlich zu den klassischen Typen werden zwei weitere Hypersensitivitätsreaktionen diskutiert:
            </p>
            <ul>
                <li><b>Typ-V-Allergie</b> (granulomatöse Hypersensitivität vom verzögerten Typ)</li>
                <li><b>Typ-VI-Allergie</b> (stimulierende/neutralisierende Hypersensitivität, z.B. antikörpervermittelte Aktivierung von Zellrezeptoren)</li>
            </ul>
          </div>`
        },
        {
          id: 5,
          title: "5. Spezielle Allergieformen",
          textWithFormatting: `<div>
            <p>
                Die Einteilung von Allergieformen kann auch nach den auslösenden Allergenen erfolgen. Diese Allergien umfassen unter anderem:
            </p>
            <ul>
                <li><b>Arzneimittelallergien:</b>
                   <ul>
                       <li><b>Penicillinallergie</b></li>
                       <li><b>Sulfonamidallergie</b></li>
                   </ul>
                </li>
                <li><b>Nahrungsmittelallergien:</b>
                   <ul>
                       <li><b>Erdnussallergie</b></li>
                       <li><b>Cashewnussallergie</b></li>
                       <li><b>Alpha-Gal-Syndrom</b></li>
                   </ul>
                </li>
                <li><b>Umweltallergien:</b>
                   <ul>
                       <li><b>Pollenallergie</b></li>
                       <li><b>Hausstauballergie</b></li>
                       <li><b>Schimmelpilzallergie</b></li>
                   </ul>
                </li>
                <li><b>Tierhaarallergien</b></li>
                <li><b>Insektengiftallergien:</b>
                   <ul>
                       <li><b>Bienengiftallergie</b></li>
                       <li><b>Wespengiftallergie</b></li>
                   </ul>
                </li>
                <li><b>Nickelallergie</b></li>
                <li><b>Allergien auf zahnärztliche Werkstoffe:</b>
                   <ul>
                       <li><b>Amalgamallergie</b></li>
                   </ul>
                </li>
            </ul>
          </div>`
        },
        {
          id: 6,
          title: "6. Diagnostik",
          textWithFormatting: `<div>
            <p>
                Allergien werden durch spezifische <b>Allergietests</b> diagnostiziert, um das verantwortliche Allergen zu identifizieren und die Immunantwort zu objektivieren. Gängige Tests umfassen:
            </p>
            <ul>
                <li><b>Pricktest</b>: Allergenextrakte werden auf die Haut aufgebracht und die Reaktion (z.B. Quaddelbildung) beobachtet.</li>
                <li><b>Bluttests</b>: Bestimmung spezifischer <b>IgE-Antikörper</b>.</li>
                <li><b>Intrakutantest</b> und <b>Provokationstest</b> bei Bedarf.</li>
            </ul>
          </div>`
        },
        {
          id: 7,
          title: "7. Therapie",
          textWithFormatting: `<div>
            <h4>7.1. Prophylaxe</h4>
            <p>
                Die beste Prophylaxe ist die <b>Allergenkarenz</b>, d.h., das Vermeiden des Kontaktes mit dem Allergen. Besonders wichtig ist dies bei:
            </p>
            <ul>
                <li><b>Nahrungsmittelallergien</b> (z.B. durch Lesen von Zutatenlisten)</li>
                <li><b>Insektengiftallergie</b> (Vermeidung von Insektenkontakt)</li>
            </ul>
            <p>
                Für Säuglinge mit erhöhtem Allergierisiko wird das <b>ausschließliche Stillen</b> für mindestens 6 Monate empfohlen. Probiotische Zusätze in Säuglingsnahrung zeigen in Studien möglicherweise ebenfalls einen protektiven Effekt.
            </p>
            <h4>7.2. Hyposensibilisierung</h4>
            <p>
                Die <b>spezifische Immuntherapie (SIT)</b>, auch bekannt als <b>Hyposensibilisierung</b>, ist eine der wenigen kausalen Therapieoptionen. Hierbei werden dem Patienten über einen längeren Zeitraum ansteigende Dosen des Allergens subkutan oder sublingual verabreicht, um eine Toleranz zu induzieren. Diese Methode ist vor allem erfolgreich bei:
            </p>
            <ul>
                <li><b>Pollenallergien</b></li>
                <li><b>Insektengiftallergien</b></li>
            </ul>
            <h4>7.3. Akuttherapie</h4>
            <p>
                Akuttherapien zielen darauf ab, die allergische Entzündungsreaktion zu unterdrücken:
            </p>
            <ul>
                <li><b>Antihistaminika</b> (Tabletten, Augentropfen, Nasensprays)</li>
                <li><b>Mastzellstabilisatoren</b></li>
                <li><b>Glukokortikoide</b> (systemisch oder lokal)</li>
                <li><b>Adrenalin</b> (intramuskulär) bei anaphylaktischem Schock (erste Wahl)</li>
            </ul>
          </div>`
        }
      ]
    },

{
  "id": 7,
  "title": "Fragen",
  "questions": [
    {
      "title": "Was ist eine Allergie?",
      "answers": [
        { "name": "Eine Virusinfektion", "isCorrect": false },
        { "name": "Eine bakterielle Infektion", "isCorrect": false },
        { "name": "Eine Autoimmunerkrankung", "isCorrect": false },
        { "name": "Eine Immunreaktion des Körpers auf nicht-infektiöse Fremdstoffe (Antigene bzw. Allergene)", "isCorrect": true }
      ]
    },
    {
      "title": "Welche Allergieform wird auch als Soforttyp bezeichnet?",
      "answers": [
        { "name": "Typ-II-Allergie", "isCorrect": false },
        { "name": "Typ-IV-Allergie", "isCorrect": false },
        { "name": "Typ-I-Allergie", "isCorrect": true },
        { "name": "Typ-III-Allergie", "isCorrect": false }
      ]
    },
    {
      "title": "Was wird bei einer Typ-II-Allergie zerstört?",
      "answers": [
        { "name": "Viruspartikel", "isCorrect": false },
        { "name": "Körpereigene Zellen", "isCorrect": true },
        { "name": "Bakterien", "isCorrect": false },
        { "name": "Pilzsporen", "isCorrect": false }
      ]
    },
    {
      "title": "Welches Symptom ist typisch für eine allergische Reaktion der Atemwege?",
      "answers": [
        { "name": "Urtikaria", "isCorrect": false },
        { "name": "Rhinitis allergica", "isCorrect": true },
        { "name": "Nausea", "isCorrect": false },
        { "name": "Fieber", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Therapieform soll das Immunsystem zur Toleranzentwicklung anregen?",
      "answers": [
        { "name": "Prophylaxe", "isCorrect": false },
        { "name": "Akuttherapie", "isCorrect": false },
        { "name": "Hyposensibilisierung", "isCorrect": true },
        { "name": "Antihistaminika", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Zellen sind bei der Typ-IV-Allergie beteiligt?",
      "answers": [
        { "name": "B-Lymphozyten", "isCorrect": false },
        { "name": "Makrophagen", "isCorrect": false },
        { "name": "T-Lymphozyten", "isCorrect": true },
        { "name": "Erythrozyten", "isCorrect": false }
      ]
    },
    {
      "title": "Welches Medikament wird bei einem anaphylaktischen Schock typischerweise eingesetzt?",
      "answers": [
        { "name": "Paracetamol", "isCorrect": false },
        { "name": "Ibuprofen", "isCorrect": false },
        { "name": "Adrenalin", "isCorrect": true },
        { "name": "Aspirin", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Substanzklasse kann in der Akuttherapie einer Allergie verwendet werden?",
      "answers": [
        { "name": "Antibiotika", "isCorrect": false },
        { "name": "Glukokortikoide", "isCorrect": true },
        { "name": "Antikoagulanzien", "isCorrect": false },
        { "name": "Sedativa", "isCorrect": false }
      ]
    },
    {
      "title": "Was ist ein typisches Beispiel für eine Typ-I-Allergie?",
      "answers": [
        { "name": "Farmer-Lunge", "isCorrect": false },
        { "name": "Hämolytische Anämie", "isCorrect": false },
        { "name": "Heuschnupfen", "isCorrect": true },
        { "name": "Transplantatabstoßung", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Rolle spielen Probiotika in der Allergieprophylaxe für Säuglinge?",
      "answers": [
        { "name": "Probiotika reduzieren sofort allergische Reaktionen", "isCorrect": false },
        { "name": "Probiotika ersetzen vollständig eine Ernährung mit hypoallergenen Nahrungsmitteln", "isCorrect": false },
        { "name": "Probiotika können möglicherweise die Entstehung von Allergien verhindern", "isCorrect": true },
        { "name": "Probiotika heilen bestehende Allergien", "isCorrect": false }
      ]
    }
  ]
},

{
  "id": 22,
  "title": "Fakten",
  "questions": [
    {
      "title": "Eine Allergie ist eine fehlgeleitete Immunreaktion des Körpers auf harmlose Fremdstoffe.",
      "hidden_answer": "Diese Reaktion kann zu entzündlichen Symptomen führen, die von milden Beschwerden bis hin zu lebensbedrohlichen Reaktionen reichen."
    },
    {
      "title": "Genetische Faktoren spielen eine wesentliche Rolle bei der Prädisposition zu Allergien.",
      "hidden_answer": "Zusätzlich können Umweltfaktoren wie Hygiene, Ernährung und Lebensstil die Allergieneigung beeinflussen."
    },
    {
      "title": "Zu den häufigsten Allergenen zählen Pollen, Hausstaubmilben und bestimmte Lebensmittel.",
      "hidden_answer": "Lebensmittel wie Erdnüsse, Kuhmilch und Tierhaare sind ebenfalls verbreitete Auslöser von Allergien."
    },
    {
      "title": "Allergiesymptome können die Atemwege, die Haut, die Augen und den Magen-Darm-Trakt betreffen.",
      "hidden_answer": "Häufige Symptome sind Rhinitis, Urtikaria und allergische Konjunktivitis."
    },
    {
      "title": "Allergien werden anhand ihrer Pathomechanismen in Typ-I bis Typ-IV eingeteilt.",
      "hidden_answer": "Diese Einteilungen beziehen sich auf die unterschiedlichen immunologischen Reaktionen und werden nach Coombs und Gell klassifiziert."
    },
    {
      "title": "Die Typ-I-Allergie führt zur sofortigen Freisetzung von Histamin nach Kontakt mit dem Allergen.",
      "hidden_answer": "Beispiele sind Asthma bronchiale und Anaphylaxie."
    },
    {
      "title": "Die spezifische Immuntherapie (Hyposensibilisierung) ist eine kausale Therapieoption für Allergien.",
      "hidden_answer": "Hierbei werden dem Patienten ansteigende Dosen des Allergens verabreicht, um eine Toleranz zu entwickeln."
    },
    {
      "title": "Antihistaminika sind wichtige Medikamente zur Akuttherapie von Allergien.",
      "hidden_answer": "Sie helfen, die allergische Entzündungsreaktion zu unterdrücken und können in verschiedenen Formen wie Tabletten oder Nasensprays verabreicht werden."
    },
    {
      "title": "Die schnelle Behandlung mit Adrenalin ist entscheidend bei anaphylaktischen Reaktionen.",
      "hidden_answer": "Es ist die erste Wahl bei akuten allergischen Schocks und kann lebensrettend sein."
    },
    {
      "title": "Die beste Prophylaxe gegen Allergien ist die Vermeidung des Kontakts mit den auslösenden Allergenen.",
      "hidden_answer": "Besonders wichtig ist dies bei Nahrungsmittelallergien und Insektengiftallergien."
    }
  ]
}
],
};