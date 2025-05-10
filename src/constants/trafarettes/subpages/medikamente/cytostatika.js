import "./cytostatika.css";
/*  ==========  cytostatika.js  ==========  */
export default {
  path: "cytostatika",
  content: [
    /* ───────────────────────── 1. Text-Block ───────────────────────── */
    {
      id: 1,
      title: "Klassische Zytostatika",
      childTabs: [

        /* ── 1.1 Gesamtüberblick ────────────────────────────────────── */
        {
          id: 1,
          title: "1. Überblick",
          textWithFormatting: `<div>
  <p>
    Klassische Zytostatika lassen sich in mehrere Wirkstoffklassen einteilen, die sich hinsichtlich ihres Angriffspunktes an DNA,
    RNA oder dem mitotischen Spindelapparat unterscheiden. Die Tabelle fasst die wichtigsten Gruppen, typische Einzelwirkstoffe,
    deren <b>Wirkmechanismus</b>, <b>Hauptindikationen</b> sowie charakteristische <b>Nebenwirkungen</b> zusammen.
  </p>

  <table class="zyto">
    <thead>
      <tr>
        <th>Zytostatikagruppe</th><th>Untergruppen</th><th>Pharmaka (Beispiele)</th>
        <th>Wirkmechanismus</th><th>Wichtige Indikationen</th><th>Typische Nebenwirkungen / Hinweise</th>
      </tr>
    </thead>
    <tbody>
      <!-- Alkylanzien -->
      <tr><td rowspan="5"><b>Alkylanzien</b></td><td>Oxazaphosphorine</td><td>Cyclophosphamid, Ifosfamid</td><td>DNA/RNA-Alkylierung → Vernetzung &amp; Strangbrüche → DNA-Synthese ↓</td><td>Leukämien, Multiples Myelom, gynäkologische &amp; Bronchial-CA</td><td>Hämorrhagische Zystitis (Mesna!), Myelotoxizität</td></tr>
      <tr><td>N-Lost-Derivate</td><td>Chlorambucil, Melphalan</td><td>DNA-Alkylierung</td><td>Multiples Myelom, CLL, CML</td><td>Myelotoxizität, selten Lungenfibrose</td></tr>
      <tr><td>Alkylsulfonate</td><td>Busulfan</td><td>DNA-Alkylierung</td><td>CML (historisch)</td><td>Pulmonale Fibrose, Myelotoxizität</td></tr>
      <tr><td>Hydrazine</td><td>Temozolomid, Dacarbazin, Procarbazin</td><td>DNA-Methylierung</td><td>Glioblastom, Hodgkin-Lymphom</td><td>Stark emetogen, myelotoxisch</td></tr>
      <tr><td>Platinverbindungen</td><td>Cisplatin, Carboplatin, Oxaliplatin</td><td>DNA-Cross-Links (intra / inter) → Replikationsstopp</td><td>Urothel-, Ovarial-, Bronchial-, Kolorektales CA</td><td>Emetogen, Nephro-/Oto-/Neurotoxisch</td></tr>

      <!-- Topoisomerase-Hemmer -->
      <tr><td rowspan="3"><b>Topoisomerase-Hemmer</b></td><td>Anthracycline</td><td>Doxorubicin, Daunorubicin, Idarubicin, Epirubicin</td><td>Interkalation + Topo-II-Hemmung</td><td>Akute Leukämien, Ovarial-CA u.a.</td><td>Kardiotoxizität (kumulative Dosis)</td></tr>
      <tr><td>Topo-I-Hemmer</td><td>Irinotecan, Topotecan</td><td>Topo-I-Blockade</td><td>Kolorektales, Ovarial-CA</td><td>Schwere Diarrhö, Myelotoxizität</td></tr>
      <tr><td>Topo-II-Hemmer</td><td>Etoposid</td><td>Doppelstrangbrüche (Topo-II)</td><td>Bronchial-, Hoden-CA, Lymphome</td><td>Myelotoxisch; RH-Brief</td></tr>

      <!-- Mitosehemmstoffe -->
      <tr><td rowspan="2"><b>Mitosehemmstoffe</b></td><td>Vinca-Alkaloide</td><td>Vincristin, Vinblastin</td><td>Tubulin-Bindung → Mikrotubuli-Auflösung</td><td>Lymphome, Wilms-Tumor</td><td>Periphere Neuropathie (Vincristin)</td></tr>
      <tr><td>Taxane</td><td>Docetaxel, (nab-)Paclitaxel</td><td>Mikrotubuli-Stabilisierung → Mitosearrest</td><td>Mamma-, Ovarial-, Prostata-, Magen-, Bronchial-CA</td><td>Myelotoxizität, Lungenfibrose, Neuropathie</td></tr>

      <!-- Antimetabolite -->
      <tr><td rowspan="4"><b>Antimetabolite</b></td><td>Folsäure-Antagonisten</td><td>Methotrexat, Pemetrexed</td><td>DHFR-Block → Purinsynthese ↓</td><td>ALL, Osteosarkom, NSCLC, Mesotheliom</td><td>Myelo-/Hepatotoxisch, Mukositis; Folinsäure-Rescue</td></tr>
      <tr><td>Pyrimidin-Antagonisten</td><td>5-FU, Capecitabin, Cytarabin, Gemcitabin</td><td>Fehlbasen-Einbau</td><td>Mamma-, Kolorektales, Pankreas-, Urothel-CA</td><td>Myelotoxisch; + Folinsäure</td></tr>
      <tr><td>Purin-Antagonisten</td><td>Azathioprin, 6-MP, Fludarabin</td><td>Fehlbasen-Einbau + IMP-DH-Block</td><td>ALL, CLL, Immunsuppression</td><td>Myelotoxisch; Interaktion mit Allopurinol</td></tr>
      <tr><td>RR-Hemmer</td><td>Hydroxyurea</td><td>RR-Block → dNTP ↓</td><td>CML, ET, PV</td><td>Myelotoxisch, Hyperurikämie</td></tr>

      <!-- Weitere -->
      <tr><td rowspan="2"><b>Weitere</b></td><td>Cytotoxische Antibiotika</td><td>Bleomycin, Actinomycin D, Mitomycin</td><td>DNA-Interkalation / Alkylierung</td><td>Hoden-, Wilms-Tumor, intravesikal (Blasen-CA)</td><td>Bleomycin: Lungenfibrose • Mitomycin: Nephrotoxizität/Pneumonitis</td></tr>
      <tr><td>Enzyme</td><td>L-Asparaginase</td><td>L-Asparagin-Entzug</td><td>ALL</td><td>Allergien, Gerinnungs-/Thromboserisiko</td></tr>
    </tbody>
  </table>
</div>`
        },

        /* ── 1.2 Wirkmechanismen kompakt ────────────────────────────── */
        {
          id: 2,
          title: "2. Wirkmechanismen – Kompakt",
          textWithFormatting: `<div>
  <p>Nur der <b>Molekularmechanismus</b> – perfekt zum schnellen Wiederholen.</p>

  <table class="zyto">
    <thead><tr><th>Zytostatikagruppe</th><th>Untergruppen</th><th>Pharmaka</th><th>Wirkmechanismus</th></tr></thead>
    <tbody>
      <!-- Alkylanzien -->
      <tr><td rowspan="5"><b>Alkylanzien</b></td><td>Oxazaphosphorine</td><td>Cyclophosphamid, Ifosfamid</td><td>DNA/RNA-Alkylierung → Strangbrüche</td></tr>
      <tr><td>N-Lost-Derivate</td><td>Chlorambucil, Melphalan</td><td>DNA-Alkylierung</td></tr>
      <tr><td>Alkylsulfonate</td><td>Busulfan</td><td>DNA-Alkylierung</td></tr>
      <tr><td>Hydrazine</td><td>Temozolomid, Dacarbazin, Procarbazin</td><td>DNA-Methylierung</td></tr>
      <tr><td>Platinverbindungen</td><td>Cisplatin, Carboplatin, Oxaliplatin</td><td>DNA-Cross-Links</td></tr>

      <!-- Topoisomerase-Hemmer -->
      <tr><td rowspan="3"><b>Topoisomerase-Hemmer</b></td><td>Anthracycline</td><td>Doxorubicin u.a.</td><td>Interkalation + Topo-II-Block</td></tr>
      <tr><td>Topo-I-Hemmer</td><td>Irinotecan, Topotecan</td><td>Topo-I-Block</td></tr>
      <tr><td>Topo-II-Hemmer</td><td>Etoposid</td><td>Topo-II-Block → Doppelstrangbrüche</td></tr>

      <!-- Mitosehemmstoffe -->
      <tr><td rowspan="2"><b>Mitosehemmstoffe</b></td><td>Vinca-Alkaloide</td><td>Vincristin, Vinblastin</td><td>Tubulin-Depolymerisation</td></tr>
      <tr><td>Taxane</td><td>Docetaxel, (nab-)Paclitaxel</td><td>Mikrotubuli-Stabilisierung</td></tr>

      <!-- Antimetabolite -->
      <tr><td rowspan="4"><b>Antimetabolite</b></td><td>Folsäure-Antagonisten</td><td>Methotrexat, Pemetrexed</td><td>DHFR-Blockade</td></tr>
      <tr><td>Pyrimidin-Antagonisten</td><td>5-FU, Capecitabin, Cytarabin, Gemcitabin</td><td>Fehlbasen-Einbau</td></tr>
      <tr><td>Purin-Antagonisten</td><td>Azathioprin, 6-MP, Fludarabin</td><td>Fehlbasen-Einbau + IMP-DH-Block</td></tr>
      <tr><td>RR-Hemmer</td><td>Hydroxyurea</td><td>Ribonukleotidreduktase-Block</td></tr>

      <!-- Weitere -->
      <tr><td rowspan="2"><b>Weitere</b></td><td>Antibiotika</td><td>Bleomycin, Actinomycin D, Mitomycin</td><td>DNA-Interkalation / Alkylierung</td></tr>
      <tr><td>Enzyme</td><td>L-Asparaginase</td><td>Asparagin-Entzug</td></tr>
    </tbody>
  </table>
</div>`
        },

        /* ── 1.3 Spezifische Nebenwirkungen ────────────────────────── */
        {
          id: 3,
          title: "3. Spezifische Nebenwirkungen",
          textWithFormatting: `<div>
  <p>Organ- oder dosislimitierende Toxizitäten einzelner Wirkstoffe – inkl. Prophylaxen &amp; Rote-Hand-Briefe.</p>

  <table class="zyto">
    <thead><tr><th>Zytostatikagruppe</th><th>Pharmaka</th><th>Charakteristika&nbsp;&amp;&nbsp;spezifische Nebenwirkungen</th></tr></thead>
    <tbody>
      <!-- Alkylanzien -->
      <tr><td rowspan="4"><b>Alkylanzien</b></td><td>Cyclophosphamid, Ifosfamid</td><td>Hämorrhagische Zystitis &amp; Urothel-CA • <i>Mesna + Hydration</i> • RH-Brief: Ethanolgehalt (Kinder) • Myelosuppression</td></tr>
      <tr><td>Busulfan</td><td>Pulmonale Fibrose (selten) • Myelosuppression</td></tr>
      <tr><td>Chlorambucil, Melphalan</td><td>Selten Lungenfibrose</td></tr>
      <tr><td>Temozolomid, Dacarbazin, Procarbazin</td><td>Stark emetogen • Myelotoxisch</td></tr>

      <!-- Platinverbindungen -->
      <tr><td><b>Platin-Substanzen</b></td><td>Cisplatin, Carboplatin, Oxaliplatin</td><td>Stark emetogen • <b>Nephro-</b>, <b>Oto-</b> &amp; <b>Neurotoxisch</b></td></tr>

      <!-- Anthracycline -->
      <tr><td><b>Anthracycline</b></td><td>Doxorubicin, Daunorubicin u.a.</td><td><b>Kardiotoxizität</b> (kumulative Dosislimitierung)</td></tr>

      <!-- Topoisomerase-Hemmer -->
      <tr><td><b>Topo-I-Hemmer</b></td><td>Irinotecan, Topotecan</td><td>Myelotoxisch (Topotecan) • Irinotecan: ↑ Toxizität bei <b>UGT1A1</b>-Mangel • RH-Brief: schwere Diarrhö &amp; Neutropenie</td></tr>
      <tr><td><b>Topo-II-Hemmer</b></td><td>Etoposid</td><td>Ausgeprägt myelotoxisch • RH-Brief: Überempfindlichkeit bei Inline-Filtern</td></tr>

      <!-- Mitosehemmstoffe -->
      <tr><td><b>Vinca-Alkaloide</b></td><td>Vincristin, Vinblastin</td><td>Periphere Neuropathie (v.a. Vincristin)</td></tr>
      <tr><td><b>Taxane</b></td><td>Docetaxel, (nab-)Paclitaxel</td><td>Myelosuppression • Lungenfibrose • Neuropathie</td></tr>

      <!-- Antimetabolite -->
      <tr><td><b>Methotrexat</b></td><td>Methotrexat</td><td>Myelo-/Hepatotoxisch • Mukositis • <i>Leucovorin-Rescue</i></td></tr>
      <tr><td rowspan="2"><b>Pyrimidin-Antagonisten</b></td><td>Cytarabin, Gemcitabin</td><td>Myelosuppression</td></tr>
      <tr><td>5-FU, Capecitabin</td><td>Synergie mit Folinsäure • ↑ Toxizität bei <b>DPD-Mangel</b> • RH-Brief: DPD-Test empfohlen</td></tr>
      <tr><td rowspan="2"><b>Purin-Antagonisten</b></td><td>Azathioprin, 6-MP</td><td>Interaktion mit Allopurinol • Immunsuppression</td></tr>
      <tr><td>Fludarabin</td><td>Schwere Myelosuppression</td></tr>
      <tr><td><b>RR-Hemmer</b></td><td>Hydroxyurea</td><td>Myelosuppression • Hyperurikämie</td></tr>

      <!-- Weitere -->
      <tr><td><b>Bleomycin</b></td><td>Bleomycin, Actinomycin D</td><td><b>Lungenfibrose</b> (Bleomycin) • Mitomycin: Nephrotoxizität/Pneumonitis</td></tr>
      <tr><td><b>L-Asparaginase</b></td><td>L-Asparaginase</td><td>Allergische Reaktionen • Blutungs-/Thromboserisiko</td></tr>
    </tbody>
  </table>
</div>`
        },
        /* ── 1.4 Spezifische Indikationen ──────────────────────────── */
        {
          id: 4,
          title: "4. Spezifische Indikationen",
          textWithFormatting: `<div>
  <p>Häufig eingesetzte <b>Standardindikationen</b> ausgewählter klassischer Zytostatika.</p>

  <table class="zyto">
    <thead><tr><th>Zytostatikagruppe</th><th>Pharmaka</th><th>Indikationen (Auswahl)</th></tr></thead>
    <tbody>
      <!-- Alkylanzien -->
      <tr><td rowspan="5"><b>Alkylanzien</b></td><td>Cyclophosphamid</td><td>Leukämien • Multiples Myelom</td></tr>
      <tr><td>Busulfan</td><td>CML (Ablösung durch TKIs) • Konditionierung vor Stammzell­transplantation</td></tr>
      <tr><td>Chlorambucil</td><td>CLL (Palliativ) • Lymphome</td></tr>
      <tr><td>Melphalan</td><td>Multiples Myelom</td></tr>
      <tr><td>Temozolomid</td><td><b>Glioblastom</b> (Standard + Radiatio)</td></tr>

      <!-- Platinverbindungen -->
      <tr><td rowspan="3"><b>Platin‑Substanzen</b></td><td>Cisplatin</td><td>Urothel‑, Testes‑, Kopf‑Hals‑CA</td></tr>
      <tr><td>Carboplatin</td><td>Ovarial‑ und Lungenkarzinome</td></tr>
      <tr><td>Oxaliplatin</td><td>Kolorektales Karzinom (FOLFOX‑Schema)</td></tr>

      <!-- Topoisomerase‑Hemmer -->
      <tr><td rowspan="3"><b>Topo‑Hemmer</b></td><td>Doxorubicin (Anthracyclin)</td><td>Mamma‑, Ovarial‑CA • NHL</td></tr>
      <tr><td>Irinotecan</td><td>Kolorektales Karzinom (FOLFIRI)</td></tr>
      <tr><td>Etoposid</td><td>Hoden‑CA • SCLC</td></tr>

      <!-- Mitosehemmstoffe -->
      <tr><td rowspan="2"><b>Mitosehemmstoffe</b></td><td>Vincristin</td><td>Lymphome • Wilms‑Tumor</td></tr>
      <tr><td>Paclitaxel / nab‑Paclitaxel</td><td>Mamma‑, Ovarial‑, NSCLC, Pankreas‑CA</td></tr>

      <!-- Antimetabolite -->
      <tr><td rowspan="4"><b>Antimetabolite</b></td><td>Methotrexat</td><td>Osteosarkom • ALL • Autoimmun­erkrankungen (low dose)</td></tr>
      <tr><td>Capecitabin (5‑FU‑Prodrug)</td><td>Kolorektales • Mamma‑CA (palliativ, oral)</td></tr>
      <tr><td>Gemcitabin</td><td>Pankreas‑CA • NSCLC • Urothel‑CA</td></tr>
      <tr><td>6‑Mercaptopurin</td><td>ALL (Erhaltungstherapie)</td></tr>

      <!-- Weitere -->
      <tr><td><b>Bleomycin</b></td><td>Bleomycin</td><td>Hodentumoren (BEP‑Schema) • NHL</td></tr>
      <tr><td><b>L‑Asparaginase</b></td><td>L‑Asparaginase</td><td>ALL (induktionsnah)</td></tr>
    </tbody>
  </table>

  <h4 class="mt-3">Orale Zytostatika (Beispielauswahl)</h4>
  <p>Sie erleichtern ambulante Behandlung, v.&nbsp;a. in palliativen Situationen.</p>
  <ul>
    <li>Capecitabin (Pyrimidin‑Antagonist)</li>
    <li>Temozolomid (Alkylanz)</li>
    <li>Idarubicin (Anthracyclin)</li>
    <li>Etoposid (Topo‑II‑Hemmer)</li>
    <li>Methotrexat, 6‑Mercaptopurin, Hydroxyurea (Antimetabolite)</li>
  </ul>
</div>`
        },
      ]
    },

    /* ───────────────────────── 2. Quiz ───────────────────────── */
    {
      id: 2,
      title: "Fragen",
      questions: [
        {
          title: "Welcher Wirkmechanismus ist für Cisplatin charakteristisch?",
          answers: [
            { name: "Bildung von DNA-Cross-Links", isCorrect: true },
            { name: "Interkalation in die DNA", isCorrect: false },
            { name: "Hemmung der Dihydrofolatreduktase", isCorrect: false },
            { name: "Bindung an Tubulin und Depolymerisation", isCorrect: false }
          ]
        },
        {
          title: "Welche Aussage beschreibt die Wirkung von Vinca-Alkaloiden?",
          answers: [
            { name: "Depolymerisation der Mikrotubuli", isCorrect: true },
            { name: "Stabilisierung der Mikrotubuli", isCorrect: false },
            { name: "DNA-Cross-Link-Bildung", isCorrect: false },
            { name: "Hemmung der Topoisomerase I", isCorrect: false }
          ]
        },
        {
          title: "Doxorubicin hemmt vor allem …",
          answers: [
            { name: "Topoisomerase II nach DNA-Interkalation", isCorrect: true },
            { name: "Ribonukleotidreduktase", isCorrect: false },
            { name: "Dihydrofolatreduktase", isCorrect: false },
            { name: "DNA-Polymerase δ", isCorrect: false }
          ]
        },
        {
          title: "Welche Organ-Toxizität ist für Cisplatin typisch?",
          answers: [
            { name: "Nephrotoxizität", isCorrect: true },
            { name: "Kardiotoxizität", isCorrect: false },
            { name: "Pulmonale Fibrose", isCorrect: false },
            { name: "Hyperurikämie", isCorrect: false }
          ]
        },
        {
          title: "Für welche Substanz ist Mesna als Prophylaxe obligat?",
          answers: [
            { name: "Cyclophosphamid", isCorrect: true },
            { name: "Bleomycin", isCorrect: false },
            { name: "Methotrexat", isCorrect: false },
            { name: "Docetaxel", isCorrect: false }
          ]
        },
        {
          title: "Bleomycin verursacht dosisabhängig …",
          answers: [
            { name: "Lungenfibrose", isCorrect: true },
            { name: "Nephrotoxizität", isCorrect: false },
            { name: "Kardiomyopathie", isCorrect: false },
            { name: "Ototoxizität", isCorrect: false }
          ]
        },
        {
          title: "Welches Alkylanz wird als Standardtherapie beim Glioblastom eingesetzt?",
          answers: [
            { name: "Temozolomid", isCorrect: true },
            { name: "Busulfan", isCorrect: false },
            { name: "Cyclophosphamid", isCorrect: false },
            { name: "Chlorambucil", isCorrect: false }
          ]
        },
        {
          title: "Capecitabin ist eine orale Pro‑Drug von …",
          answers: [
            { name: "5‑Fluoruracil", isCorrect: true },
            { name: "Cisplatin", isCorrect: false },
            { name: "Methotrexat", isCorrect: false },
            { name: "Etoposid", isCorrect: false }
          ]
        },
        {
          title: "Welches Zytostatikum ist Bestandteil des FOLFOX‑Schemas beim Kolorektalen Karzinom?",
          answers: [
            { name: "Oxaliplatin", isCorrect: true },
            { name: "Docetaxel", isCorrect: false },
            { name: "Vincristin", isCorrect: false },
            { name: "Bleomycin", isCorrect: false }
          ]
        }
      ]
    },

    /* ───────────────────────── 3. Faktenfragen ───────────────────────── */
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
          title: "Mesna verhindert die hämorrhagische Zystitis unter Cyclophosphamid-Therapie.",
          hidden_answer: "Ja – Mesna bindet das urotoxische Acrolein."
        },
        {
          title: "Anthracycline sind kumulativ kardiotoxisch.",
          hidden_answer: "Ja – deshalb Gesamtdosis Doxorubicin ≤ 450 mg/m²."
        },
        {
          title: "Vincristin löst vor allem periphere Neuropathien aus.",
          hidden_answer: "Ja – sensorisch und motorisch, dosislimitierend."
        },
        {
          title: "UGT1A1-Polymorphismus erhöht die Toxizität von Irinotecan.",
          hidden_answer: "Ja – Risiko schwerer Diarrhö und Neutropenie."
        },
        {
          title: "Bleomycin kann eine interstitielle Lungenfibrose verursachen.",
          hidden_answer: "Ja – pulmonale Überwachung wichtig."
        },
        {
          title: "Temozolomid wird als Erstlinientherapie beim Glioblastom zusammen mit Radiatio eingesetzt.",
          hidden_answer: "Ja – Standard nach Stupp‑Schema."
        },
        {
          title: "Capecitabin kann als orale Chemotherapie zur palliativ‑systemischen Behandlung von Mammakarzinomen eingesetzt werden.",
          hidden_answer: "Ja – v.a. bei HER2‑negativen und hormonrefraktären Verläufen."
        },
        {
          title: "Oxaliplatin ist ein Platin‑Analogon im FOLFOX‑Regime bei kolorektalem Karzinom.",
          hidden_answer: "Ja – zusammen mit 5‑FU und Folinsäure."
        }
      ]
    }
  ]
};
/*  ==========  Ende cytostatika.js  ============================================= */