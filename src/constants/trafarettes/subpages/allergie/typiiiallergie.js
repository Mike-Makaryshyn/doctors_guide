export default { 
  path: "typiiiallergie", // Beispiel: http://localhost:5173/trafarette/typiiiallergie, <a href="/trafarette/typiiiallergie">Typ-II-Allergie</a>
  content: [ 
    { 
      id: 1, 
      title: "Typ-II-Allergie", 
      childTabs: [ 
        { 
          id: 1, 
          title: "1. Definition", 
          textWithFormatting: `<div>
            <p>
              Die <b>Typ-II-Allergie</b>, auch bekannt als <b>Allergie vom zytotoxischen Typ</b>, ist eine durch spezifische <b>Antikörper</b> vermittelte Form der Hypersensitivitätsreaktion. Diese beruht auf einer humoralen Immunantwort, bei der Antikörper gegen <b>zellständige Antigene</b> gerichtet sind, was letztlich zur Zytolyse körpereigener Zellen führt.
            </p>
          </div>` 
        },
        { 
          id: 2, 
          title: "2. Prinzip", 
          textWithFormatting: `<div>
            <p>
              Das Grundprinzip der Typ-II-Allergie besteht in der Interaktion von Antikörpern mit zellständigen Antigenen. Die wichtigsten Mechanismen und Schritte lauten wie folgt:
            </p>
            <ul>
              <li><b>2.1 Antikörper-Antigen-Bindung:</b>  
                  Nach Exposition gegenüber zellständigen Antigenen wie z.B. Medikamenten oder transfundiertem Blut bilden sich rasch <b>Antigen-Antikörper-Komplexe</b>, in denen im Blutstrom zirkulierende <b>IgG</b>, <b>IgM</b> oder vereinzelt <b>IgA</b>-Antikörper binden.
              </li>
              <li><b>2.2 Aktivierung des Komplementsystems und Effektormechanismen:</b>  
                  Die entstandenen Immunkomplexe aktivieren das <b>Komplementsystem</b>, was zur Ausbildung des <b>Membranangriffskomplexes (MAC)</b> führt und die Lyse der betroffenen Zellen bewirkt. Parallel dazu werden <b>zytotoxische Effektorzellen</b>, wie <b>Killerzellen</b> und <b>Makrophagen</b>, aktiviert und führen zur <b>antibody-dependent cell-mediated cytotoxicity (ADCC)</b>.
              </li>
              <li><b>2.3 Zielstrukturen der Immunreaktion:</b>   
                  Getroffen sind meist Zellen wie <b>Erythrozyten</b>, <b>Thrombozyten</b> und <b>Leukozyten</b>. Die Folge ist eine massive Zerstörung dieser körpereigenen Zellen, was eine Reihe klinischer Symptome zur Folge hat.
              </li>
            </ul>
          </div>`
        },
        { 
          id: 3, 
          title: "3. Pathophysiologie", 
          textWithFormatting: `<div>
            <p>
              Typ-II-Allergien sind ausgelöst durch Antikörper gegen Antigene auf Zelloberflächen. Diese Hypersensitivitätsreaktion gehört zu den <b>4 klassischen Allergietypen</b>. Relevante immunologische Mechanismen umfassen:
            </p>
            <ul>
              <li>• Antikörper-vermittelte zytotoxische Reaktionen</li>
              <li>• Beteiligung des Komplementsystems (klassischer Weg)</li>
              <li>• Aktivierung von phagozytierenden Zellen und zytotoxischen Effektoren über Fc-Rezeptoren</li>
            </ul>
            <h4>3.1 Beteiligte Zellen</h4>
            <ul>
              <li>• <b>Zytotoxische T-Lymphozyten (CTLs)</b></li>
              <li>• <b>Makrophagen</b></li>
              <li>• <b>Neutrophile Granulozyten</b></li>
              <li>• <b>Plasmazellen</b> (Antikörper-produzierend)</li>
            </ul>
          </div>`
        },
        { 
          id: 4, 
          title: "4. Klinische Merkmale", 
          textWithFormatting: `<div>
            <p>
              Die Typ-II-Allergie äußert sich vor allem durch <b>zytolytische Prozesse</b>, die verschiedene Blutzellen betreffen. Typische Krankheitsbilder umfassen:
            </p>
            <ul>
              <li>
                <b>4.1 Immunhämolytische Anämie:</b>  
                <ul>
                  <li>• <b>Akute intravasale Immunhämolyse</b> durch komplementaktivierende Antikörper (z.B. nach Transfusionen).</li>
                  <li>• <b>Autoimmunhämolyse</b> durch nicht komplementbindende Antikörper (z.B. medikamentös bedingt).</li>
                </ul>
              </li>
              <li>
                <b>4.2 Thrombozytopenie:</b>  
                <ul>
                  <li>• Abfall der Thrombozytenanzahl, häufig infolge medikamentöser Exposition.</li>
                </ul>
              </li>
              <li>
                <b>4.3 Agranulozytose:</b>  
                <ul>
                  <li>• Starker Rückgang der neutrophilen Granulozytenzahl, oft im Zusammenhang mit bestimmten Medikamenten (z.B. Sulfonamide oder Tyreostatika).</li>
                </ul>
              </li>
            </ul>
          </div>`
        },
        { 
          id: 5, 
          title: "5. Therapie", 
          textWithFormatting: `<div>
            <p>
              Die wichtigste therapeutische Maßnahme ist das unverzügliche Absetzen des allergie-auslösenden Antigens, insbesondere wenn es sich um Medikamente handelt. Weitere therapeutische Ansätze umfassen:
            </p>
            <ul>
              <li>
                <b>5.1 Immunsuppressiva:</b>  
                <ul>
                  <li>• Einsatz von <b>Kortikosteroiden</b> oder anderen Immunsuppressiva zur Dämpfung der überschießenden Immunantwort.</li>
                </ul>
              </li>
              <li>
                <b>5.2 Transfusionsmaßnahmen:</b>  
                <ul>
                  <li>• Bei schwerer Anämie oder Thrombozytopenie kann eine <b>Transfusion</b> von Erythrozyten oder Thrombozyten notwendig sein.</li>
                </ul>
              </li>
              <li>
                <b>5.3 Plasmapherese:</b>  
                <ul>
                  <li>• In schwerwiegenden Fällen kann eine <b>Plasmaaustauschtherapie</b> zur Entfernung zirkulierender Antikörper indiziert sein.</li>
                </ul>
              </li>
            </ul>
          </div>`
        },
        { 
          id: 6, 
          title: "6. Beispiele für Typ-II-Allergien", 
          textWithFormatting: `<div>
            <p>
              Typ-II-Allergien treten in verschiedenen klinischen Konstellationen auf, insbesondere bei medikamentösen Reaktionen, die antikörpervermittelte Zytotoxizität verursachen. Beispiele umfassen:
            </p>
            <table>
              <tr>
                <th><b>Erkrankung</b></th>
                <th><b>Auslösende Substanzen</b></th>
              </tr>
              <tr>
                <td><b>Thrombozytopenie</b></td>
                <td>Aspirin (ASS), Thiazide, Sulfonamide</td>
              </tr>
              <tr>
                <td><b>Anämie</b></td>
                <td>Nach Transfusionszwischenfällen, Isoniazid, Penizillin</td>
              </tr>
              <tr>
                <td><b>Agranulozytose</b></td>
                <td>Cephalosporine, Thyreostatika, Chinidin</td>
              </tr>
              <tr>
                <td><b>IgA-Pemphigus</b></td>
                <td>Komplexe Autoimmunerkrankung, bei der IgA-Antikörper dominant sind</td>
              </tr>
            </table>
          </div>`
        },
        { 
          id: 7, 
          title: "7. Fazit", 
          textWithFormatting: `<div>
            <p>
              Die Typ-II-Allergie zeichnet sich durch eine Antikörper-vermittelte Zytotoxizität gegen körpereigene Zellen aus. Klinisch relevant sind vor allem die Immunhämolysen, Thrombozytopenien und Agranulozytosen, häufig unter Medikamenteneinfluss. Therapeutische Maßnahmen konzentrieren sich auf die schnelle Elimination der verursachenden Antigene und die Behandlung der Symptome.
            </p>
          </div>` 
        },
      ], 
    },


{
  "id": 7,
  "title": "Fragen",
  "questions": [
    {
      "title": "Was ist eine Typ-II-Allergie?",
      "answers": [
        { "name": "Eine durch T-Zellen vermittelte Immunantwort", "isCorrect": false },
        { "name": "Eine rein lokale allergische Reaktion", "isCorrect": false },
        { "name": "Eine humoral vermittelte zytotoxische Reaktion", "isCorrect": true },
        { "name": "Eine Allergie gegen Pollen", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Zellen sind an einer Typ-II-Allergie zerstört?",
      "answers": [
        { "name": "Neuronen", "isCorrect": false },
        { "name": "Erythrozyten, Thrombozyten, Granulozyten", "isCorrect": true },
        { "name": "Myokardzellen", "isCorrect": false },
        { "name": "Lymphozyten", "isCorrect": false }
      ]
    },
    {
      "title": "Welches System wird bei einer Typ-II-Allergie aktiviert?",
      "answers": [
        { "name": "Das Immunsystem", "isCorrect": false },
        { "name": "Das Komplementsystem", "isCorrect": true },
        { "name": "Das Nervensystem", "isCorrect": false },
        { "name": "Das Hormonsystem", "isCorrect": false }
      ]
    },
    {
      "title": "Was sind mögliche Symptome einer Typ-II-Allergie?",
      "answers": [
        { "name": "Allergische Rhinitis", "isCorrect": false },
        { "name": "Atopisches Ekzem", "isCorrect": false },
        { "name": "Immunhämolytische Anämie, Thrombozytopenische Purpura", "isCorrect": true },
        { "name": "Asthma", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Antikörper sind an der Typ-II-Allergie beteiligt?",
      "answers": [
        { "name": "IgE", "isCorrect": false },
        { "name": "IgM und IgG", "isCorrect": true },
        { "name": "IgD", "isCorrect": false },
        { "name": "IgE und IgA", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Maßnahme ist bei einer Typ-II-Allergie entscheidend?",
      "answers": [
        { "name": "Hyposensibilisierung durchführen", "isCorrect": false },
        { "name": "Betroffenen in Quarantäne setzen", "isCorrect": false },
        { "name": "Allergie-auslösende Medikation absetzen", "isCorrect": true },
        { "name": "Sofortige Bluttransfusion", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Medikation kann eine Typ-II-Allergie auslösen?",
      "answers": [
        { "name": "Paracetamol", "isCorrect": false },
        { "name": "Isoniazid und Chinidin", "isCorrect": true },
        { "name": "Ibuprofen", "isCorrect": false },
        { "name": "Antazida", "isCorrect": false }
      ]
    },
    {
      "title": "Welche Erkrankung wird nicht durch eine Typ-II-Allergie verursacht?",
      "answers": [
        { "name": "IgA-Pemphigus", "isCorrect": false },
        { "name": "Agranulozytose", "isCorrect": false },
        { "name": "Diabetes Typ 1", "isCorrect": true },
        { "name": "Thrombozytopenie", "isCorrect": false }
      ]
    },
    {
      "title": "Was kann bei einer Typ-II-Allergie durch komplementaktivierende Antikörper verursacht werden?",
      "answers": [
        { "name": "Interstielle Nephritis", "isCorrect": false },
        { "name": "Chronische Urtikaria", "isCorrect": false },
        { "name": "Akute intravasale Immunhämolyse", "isCorrect": true },
        { "name": "Langerhans-Zell-Histiozytose", "isCorrect": false }
      ]
    },
    {
      "title": "Welche der folgenden Substanzen kann eine Thrombozytopenie verursachen?",
      "answers": [
        { "name": "Penizillin", "isCorrect": false },
        { "name": "Thiazide und ASS", "isCorrect": true },
        { "name": "Aspirin", "isCorrect": false },
        { "name": "Antihistaminika", "isCorrect": false }
      ]
    }
  ],
},

{
  "id": 22,
  "title": "Fakten",
  "questions": [
    {
      "title": "Typ-II-Allergie ist eine zytotoxische Immunreaktion.",
      "hidden_answer": "Sie basiert auf der Bildung von Antikörpern gegen zellständige Antigene."
    },
    {
      "title": "Die wichtigsten Antikörper für Typ-II-Allergien sind IgG und IgM.",
      "hidden_answer": "Diese Antikörper bilden Komplexe mit Antigenen auf der Zelloberfläche."
    },
    {
      "title": "Erythrozyten und Thrombozyten sind häufige Zielstrukturen.",
      "hidden_answer": "Die Zerstörung dieser Blutzellen führt zu klinischen Symptomen wie Anämie und Thrombozytopenie."
    },
    {
      "title": "Das Komplementsystem spielt eine zentrale Rolle.",
      "hidden_answer": "Aktivierte Immunkomplexe können zur Bildung des Membranangriffskomplexes (MAC) führen."
    },
    {
      "title": "Autoimmunhämolytische Anämie ist ein häufiges Krankheitsbild.",
      "hidden_answer": "Sie kann akut nach Bluttransfusionen oder medicamentos bedingt auftreten."
    },
    {
      "title": "Thrombozytopenie kann durch Medikamente ausgelöst werden.",
      "hidden_answer": "Beispiele sind Aspirin (ASS) und Thiazide."
    },
    {
      "title": "Agranulozytose ist eine schwerwiegende Reaktion auf bestimmte Medikamente.",
      "hidden_answer": "Substanzen wie Cephalosporine können diese Reaktion verursachen."
    },
    {
      "title": "Die Therapie umfasst das Absetzen der auslösenden Substanzen.",
      "hidden_answer": "Zusätzlich können Immunsuppressiva eingesetzt werden."
    },
    {
      "title": "Plasmapherese kann in schweren Fällen indiziert sein.",
      "hidden_answer": "Durch Plasmaaustausch werden zirkulierende Antikörper entfernt."
    },
    {
      "title": "Die Typ-II-Allergie gehört zu den 4 klassischen Allergietypen.",
      "hidden_answer": "Sie ist charakterisiert durch eine humorale Immunantwort."
    },
  ],
},
  ], 
};