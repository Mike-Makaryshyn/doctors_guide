import "./ausreifung.css";
/*  ==========  ausreifung.js  ==========  */
export default {
  path: "ausreifung",
  content: [
    /* ───────────────────────── 1. Text-Block ───────────────────────── */
    {
      id: 1,
      title: "Ausreifung der Blutzellen – Gesamtüberblick",
      childTabs: [

        /* ── 0. Gesamttabelle ───────────────────────────────────── */
        {
          id: 0,
          title: "Gesamttabelle – Überblick über alle Zelllinien",
          textWithFormatting: `<div>
  <p>Gesammelte Reifungsreihen der wichtigsten hämatopoetischen Zelllinien:</p>

  <table class="aus">
    <thead><tr><th>Zelllinie</th><th>Reifungsstufen</th></tr></thead>
    <tbody>
      <tr><td>Granulopoese</td><td>Myeloblast → Promyelozyt → Myelozyt → Metamyelozyt → Stabkernig → Segmentkernig</td></tr>
      <tr><td>Erythropoese</td><td>Proerythroblast → Basophiler → Polychromatischer → Orthochromatischer → Retikulozyt → Erythrozyt</td></tr>
      <tr><td>Monozytopoese</td><td>Monoblast → Promonozyt → Monozyt → Makrophage</td></tr>
      <tr><td>Thrombopoese</td><td>Megakaryoblast → Promegakaryozyt → Megakaryozyt → Thrombozyt</td></tr>
      <tr><td>Lymphopoese</td><td>Pro‑Lymphozyt → Prä‑Lymphozyt → Naiver Lymphozyt → Effektor/Gedächtnis</td></tr>
    </tbody>
  </table>
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Hematopoiesis_(human)_diagram_en.svg?width=800"
    alt="Hämatopoese Gesamtübersicht"
    style="max-width:100%;height:auto;margin-top:0.6rem"
  />
</div>`
        },

        /* ── 1.1 Myeloische Linie ───────────────────────────────────── */
        {
          id: 1,
          title: "Granulopoese (Neutro-/Eosino-/Basophile)",
          textWithFormatting: `<div>
  <p>Klassische Reifungsreihe der Granulozyten:</p>

  <div class="chain">
    <span class="node">Myeloblast</span><span class="arrow">→</span>
    <span class="node">Promyelozyt</span><span class="arrow">→</span>
    <span class="node">Myelozyt</span><span class="arrow">→</span>
    <span class="node">Metamyelozyt</span><span class="arrow">→</span>
    <span class="node">Stabkerniger</span><span class="arrow">→</span>
    <span class="node highlight">Segmentkerniger</span>
  </div>

  <p class="mt-2">Nach <i>Myeloblast → Promyelozyt</i> unterscheiden sich Neutrophile, Eosinophile und Basophile lediglich durch Rezeptorexpression und Granulazusammensetzung.</p>

  <table class="aus">
    <thead>
      <tr><th>Stadium</th><th>Morphologie (key)</th><th>Besonderheiten</th></tr>
    </thead>
    <tbody>
      <tr><td>Myeloblast</td><td>hoher N:C-Quotient, feines Chromatin</td><td>CD34⁺, mitotisch aktiv</td></tr>
      <tr><td>Promyelozyt</td><td>primäre (azurophile) Granula</td><td>Myeloperoxidase ↑</td></tr>
      <tr><td>Myelozyt</td><td>sekundäre Granula erscheinen</td><td>Beginn Differenzierung</td></tr>
      <tr><td>Metamyelozyt</td><td>Nierenförmiger Kern</td><td>keine Mitose mehr</td></tr>
      <tr><td>Stabkerniger</td><td>stabförmiger Kern</td><td>Reserve im Knochenmark/Blut</td></tr>
      <tr><td><b>Segmentkerniger</b></td><td>2-5 Segmente</td><td>funktionsfähig, phagozytiert</td></tr>
    </tbody>
  </table>
  <h4 class="mt-2">Störungen &amp; Klinik</h4>
  <ul>
    <li><b>Neutropenie</b> (z.&nbsp;B. kongenital, Chemotherapie) → Infektionsanfälligkeit</li>
    <li><b>Agranulozytose</b> nach Medikamenten (Clozapin, Thiamazol)</li>
    <li><b>Leukämoide Reaktion</b> bei schweren Infektionen – viele stabkernige Formen</li>
    <li><b>Chronisch myeloische Leukämie (CML)</b> mit ausgeprägter Linksverschiebung</li>
  </ul>
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Granulopoiesis.jpg?width=800"
    alt="Granulopoese Diagramm"
    style="max-width:100%;height:auto;margin-top:0.6rem"
  />
</div>`
        },

        /* ── 1.2 Erythropoese ───────────────────────────────────────── */
        {
          id: 2,
          title: "Erythropoese",
          textWithFormatting: `<div>
  <div class="chain">
    <span class="node">Proerythroblast</span><span class="arrow">→</span>
    <span class="node">Basophiler Er.</span><span class="arrow">→</span>
    <span class="node">Polychromatischer</span><span class="arrow">→</span>
    <span class="node">Orthochromatischer</span><span class="arrow">→</span>
    <span class="node">Retikulozyt</span><span class="arrow">→</span>
    <span class="node highlight">Erythrozyt</span>
  </div>

  <ul class="mt-2">
    <li><b>Retikulozyt</b>: enthält Reste von rRNA → erscheint bläulich (Brillant‑Cresyl‑Blue‑Färbung)</li>
    <li><b>EPO</b> aus der Niere stimuliert alle Stadien bis zum Retikulozyten</li>
  </ul>
  <h4 class="mt-2">Störungen &amp; Klinik</h4>
  <ul>
    <li><b>Eisenmangel‑, B<sub>12</sub>- und Folatmangelanämie</b> – Produktion reduziert</li>
    <li><b>Aplastische Anämie</b> → Panzytopenie</li>
    <li><b>Polycythaemia vera</b> (JAK2‑Mutation) → Hyperviskosität, aquagener Pruritus</li>
    <li><b>Sekundäre Polyglobulie</b> bei Hypoxie (COPD, Höhentraining)</li>
  </ul>
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Eritropoez%C4%97.png?width=800"
    alt="Erythropoese Diagramm"
    style="max-width:100%;height:auto;margin-top:0.6rem"
  />
</div>`
        },

        /* ── 1.3 Monozyten + Makrophagen ───────────────────────────── */
        {
          id: 3,
          title: "Monozytopoese",
          textWithFormatting: `<div>
  <div class="chain">
    <span class="node">Monoblast</span><span class="arrow">→</span>
    <span class="node">Promonozyt</span><span class="arrow">→</span>
    <span class="node highlight">Monozyt</span><span class="arrow">⇢ Gewebe ⇢</span>
    <span class="node highlight">Makrophage</span>
  </div>
  <p class="mt-2">Im Gewebe differenziert der Monozyt zum Makrophagen (Kupffer‑Zelle, Mikroglia, Osteoklast usw.).</p>
  <h4 class="mt-2">Störungen &amp; Klinik</h4>
  <ul>
    <li><b>Monocytose</b> bei chronischen Infektionen (Tuberkulose), Entzündungen</li>
    <li><b>Akute monoblastische Leukämie (AML&nbsp;M5)</b></li>
    <li><b>Monocytopenie</b> nach Chemotherapie oder bei aplastischer Anämie</li>
  </ul>
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Illu_blood_cell_lineage.jpg?width=800"
    alt="Monozytopoese / Zelllinie"
    style="max-width:100%;height:auto;margin-top:0.6rem"
  />
</div>`
        },

        /* ── 1.4 Megakaryozyten + Thrombozyти ──────────────────────── */
        {
          id: 4,
          title: "Thrombopoese",
          textWithFormatting: `<div>
  <div class="chain">
    <span class="node">Megakaryoblast</span><span class="arrow">→</span>
    <span class="node">Promegakaryozyt</span><span class="arrow">→</span>
    <span class="node">Megakaryozyt</span><span class="arrow">→</span>
    <span class="node highlight">Thrombozyten</span>
  </div>
  <p class="mt-2">Thrombopoetin (v. a. Leber) reguliert Proliferation und Endomitosen des Megakaryozyten.</p>
  <h4 class="mt-2">Störungen &amp; Klinik</h4>
  <ul>
    <li><b>Thrombozytopenie</b> – z.&nbsp;B. ITP, HIT, MDS</li>
    <li><b>Essentielle Thrombozythämie</b> (JAK2/CALR/MPL‑Mutation) → Thrombo- und Blutungsrisiko</li>
    <li><b>Thrombozytopathien</b> (Bernard‑Soulier, Glanzmann)</li>
  </ul>
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Megakaryocyte_and_platelets.jpg?width=800"
    alt="Thrombopoese Diagramm"
    style="max-width:100%;height:auto;margin-top:0.6rem"
  />
</div>`
        },

        /* ── 1.5 Lymphopoese (Kurz) ────────────────────────────────── */
        {
          id: 5,
          title: "Lymphopoese (B-/T-/NK-Zellen)",
          textWithFormatting: `<div>
  <p>Prinzip – Pro-Lymphocyt → Prä- → naiver Lymphocyt → <i>Activation & Differentiation</i>.</p>
  <ul>
    <li>🏠 B-Zelle: Knochenmark → Plasma-/Gedächtnis-Zelle</li>
    <li>🏠 T-Zelle: Thymus-Reifung (CD4⁺/CD8⁺) → Effektor-/Gedächtnis</li>
    <li>NK-Zelle: innate, ohne antigenspezifische Rezeptoren</li>
  </ul>
  <h4 class="mt-2">Störungen &amp; Klinik</h4>
  <ul>
    <li><b>Lymphopenie</b> bei HIV, Steroidtherapie, Strahlung</li>
    <li><b>Lymphozytose</b> bei CLL, viralen Infektionen (EBV)</li>
    <li><b>Akute lymphoblastische Leukämie (ALL)</b></li>
    <li><b>Schwere kombinierte Immundefizienz (SCID)</b> – Defekt der T‑ und B‑Zellreifung</li>
  </ul>
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Hematopoiesis_simple.svg?width=800"
    alt="Lymphopoese & hämatopoetische Stammzelllinien"
    style="max-width:100%;height:auto;margin-top:0.6rem"
  />
</div>`
        }
      ]
    },

    /* ───────────────────────── 2. Quiz ───────────────────────── */
    {
      id: 2,
      title: "Fragen",
      questions: [
        {
          title: "Welche Reihenfolge beschreibt korrekt die Granulopoese?",
          answers: [
            { name: "Promyelozyt → Myeloblast → Myelozyt → Metamyelozyt → Segmentkernig → Stabkernig", isCorrect: false },
            { name: "Myeloblast → Promyelozyt → Myelozyt → Metamyelozyt → Stabkernig → Segmentkernig", isCorrect: true },
            { name: "Myelozyt → Promyelozyt → Myeloblast → Metamyelozyt → Segmentkernig → Stabkernig", isCorrect: false }
          ]
        },
        {
          title: "Welches Stadium der Erythropoese enthält noch RNA-Reste?",
          answers: [
            { name: "Retikulozyt", isCorrect: true },
            { name: "Orthochromatischer Erythroblast", isCorrect: false },
            { name: "Segmentkerniger Erythrozyt", isCorrect: false }
          ]
        },
        {
          title: "Welche Zytokin-Achse stimuliert die Megakaryopoese?",
          answers: [
            { name: "Thrombopoetin aus Leber & Niere", isCorrect: true },
            { name: "Erythropoetin aus Niere", isCorrect: false },
            { name: "G-CSF aus Endothel", isCorrect: false }
          ]
        },
        {
          title: "Stabkernige neutrophile Granulozyten gelten …",
          answers: [
            { name: "als Reserveform / linksverschoben", isCorrect: true },
            { name: "als reife Immunzelle", isCorrect: false },
            { name: "als Vorläufer im Knochen", isCorrect: false }
          ]
        },
        {
          title: "Monozyten differenzieren im Gewebe zu …",
          answers: [
            { name: "Makrophagen", isCorrect: true },
            { name: "Plasmazellen", isCorrect: false },
            { name: "Retikulozyten", isCorrect: false }
          ]
        },
        {
          title: "Welches Enzym ist typisch für Promyelozyten?",
          answers: [
            { name: "Glykophorin A", isCorrect: false },
            { name: "Myeloperoxidase", isCorrect: true },
            { name: "CD3", isCorrect: false }
          ]
        },
        {
          title: "Welche Zelle entsteht direkt aus dem Proerythroblast?",
          answers: [
            { name: "Basophiler Erythroblast", isCorrect: true },
            { name: "Polychromatischer Erythroblast", isCorrect: false },
            { name: "Myelozyt", isCorrect: false }
          ]
        }
      ]
    },

    /* ───────────────────────── 3. Faktenfragen ──────────────────── */
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
          title: "CD34 ist ein typischer Marker von Myeloblasten.",
          hidden_answer: "Ja – frühe hämatopoetische Vorläufer."
        },
        {
          title: "Erythropoetin wird überwiegend in der Leber gebildet.",
          hidden_answer: "Nein – v.a. in der Niere (peritubuläre Fibroblasten)."
        },
        {
          title: "Retikulozyten sind im peripheren Blut < 2 %.",
          hidden_answer: "Ja – Referenz 0,5–1,5 % (leicht variabel)."
        },
        {
          title: "Segmentkernige neutrophile Granulozyten leben nur ca. 1 Tag im Blut.",
          hidden_answer: "Ja – danach ins Gewebe, Gesamthalbwertszeit ≈ 4–6 h."
        },
        {
          title: "Megakaryozyten durchlaufen Endomitosen ohne Zellteilung.",
          hidden_answer: "Korrekt – bis 64N-DNA, anschließend Thrombozyten-Abschnürung."
        },
        {
          title: "Proerythroblasten besitzen einen hohen Nukleus‑Zytoplasma‑Quotienten.",
          hidden_answer: "Richtig – charakteristisch für frühe erythroide Vorläufer."
        }
      ]
    }
  ]
};
/*  ==========  Ende ausreifung.js  ============================================ */