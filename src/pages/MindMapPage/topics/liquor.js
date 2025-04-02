// Liquordiagnostik MindMap
export const liquorMindMap = {
    id: "liquor_diagnostik",
    label: "Liquordiagnostik",
    children: [
      // Makroskopische Untersuchung
      {
        id: "makroskopisch",
        label: "Makroskopische Untersuchung",
        children: [
          {
            id: "normalbefund",
            label: "Normalbefund",
            children: [
              { id: "farblos_transparent", label: "Liquor farblos und transparent" }
            ]
          },
          {
            id: "pathologische_befunde",
            label: "Pathologische Befunde",
            children: [
              { id: "blutiger_liquor", label: "Blutiger Liquor bei akuter Blutung (Drei-Gläser-Probe positiv)" },
              { id: "xanthochrom", label: "Xanthochrom bei zurückliegender Blutung (>6h zurückliegend)" },
              { id: "trueb_inflammation", label: "Weißlich- bis gelblich-trüb bei Störung der Blut-Liquor-Schranke (z.B. bakterielle Infektion)" }
            ]
          }
        ]
      },
      // Mikroskopische Untersuchung
      {
        id: "mikroskopisch",
        label: "Mikroskopische Untersuchung",
        children: [
          {
            id: "zellzahl",
            label: "Zellzahlbestimmung",
            children: [
              { id: "zellzahl_bestimmung", label: "Bestimmung unmittelbar nach Entnahme" },
              { id: "fuchs_rosenthal", label: "Fuchs-Rosenthal-Kammer oder Lichtmikroskop" },
              { id: "normal_zellzahl", label: "<5 Leukozyten/μL, Lymphozyten : Monozyten = 2:1–3:1" },
              { id: "pleozytose", label: "Erhöhte Zellzahlen = Pleozytose bei Entzündung" }
            ]
          },
          {
            id: "zelltypisierung",
            label: "Differenzierung der Zelltypen",
            children: [
              { id: "granulozytär", label: "Granulozytäre Pleozytose → bakterielle Meningitis" },
              { id: "lymphozytär", label: "Lymphozytäre Pleozytose → virale Meningitis" },
              { id: "eosinophil", label: "Eosinophile Pleozytose → parasitär oder Tuberkulose" },
              { id: "zellmorphologie", label: "Zellmorphologie: Tumorzellen?" },
              { id: "gramfaerbung", label: "Gramfärbung: z.B. gramnegative Diplokokken (Meningokokken)" }
            ]
          }
        ]
      },
      // Laborchemische Untersuchung
      {
        id: "laborchemisch",
        label: "Laborchemische Untersuchung",
        children: [
          {
            id: "glucose_laktat",
            label: "Glucose & Laktat",
            children: [
              {
                id: "glucose",
                label: "Glucose",
                children: [
                  { id: "glucose_normal", label: "Normal: >50% des Serumwertes" },
                  { id: "glucose_erniedrigt", label: "Erniedrigt bei bakteriellen/pilzbedingten Infektionen" }
                ]
              },
              {
                id: "laktat",
                label: "Laktat",
                children: [
                  { id: "laktat_normal", label: "Normal: 0,9–2,7 mmol/L (altersabhängig)" },
                  { id: "laktat_erhoeht", label: "Erhöht bei bakteriellen/pilzbedingten Infektionen" },
                  { id: "laktat_bedeutung", label: "Diagnostisch wertvoller als Glucose (ZNS-eigene Produktion)" }
                ]
              }
            ]
          },
          {
            id: "eiweiss",
            label: "Eiweißgehalt / Immunglobuline",
            children: [
              {
                id: "eiweiss_ursachen",
                label: "Erhöhte Eiweißwerte: Ursachen",
                children: [
                  { id: "blut_liquor_schranke", label: "Störung Blut-Liquor-Schranke (z.B. Entzündung, Blutung, Zirkulationsstörung)" },
                  { id: "intrathekale_synthese", label: "Intrathekale Immunglobulin-Synthese (z.B. viral, bakteriell, chronisch-entzündlich)" }
                ]
              },
              {
                id: "differenzierung",
                label: "Differenzierung der Ursache",
                children: [
                  { id: "delpech_lichtblau", label: "Delpech-Lichtblau-Quotient zur Synthese-Beurteilung" },
                  { id: "reiber_schema", label: "Reiber-Schema zur Darstellung und Beurteilung" },
                  {
                    id: "quotienten",
                    label: "Liquor-Serum-Quotienten",
                    children: [
                      { id: "quot_albumin", label: "Albumin: Liquor-Albumin / Serum-Albumin" },
                      { id: "quot_igg", label: "IgG: Liquor-IgG / Serum-IgG" },
                      { id: "interpretation_1", label: "Normal Albumin + erhöhtes IgG → intrathekale Synthese" },
                      { id: "interpretation_2", label: "Erhöhtes Albumin + erhöhtes IgG → Schrankenstörung" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      // Spezielle Untersuchungen
      {
        id: "spezielle_untersuchungen",
        label: "Spezielle Untersuchungen",
        children: [
          {
            id: "infektion",
            label: "Bei V.a. Infektion",
            children: [
              { id: "kultur", label: "Kulturelle Anzucht" },
              { id: "serologie", label: "Serologie" },
              { id: "pcr", label: "PCR" },
              { id: "antigen", label: "Antigennachweis" }
            ]
          },
          {
            id: "autoimmun",
            label: "Bei V.a. Autoimmunerkrankung",
            children: [
              { id: "fokussierung", label: "Isoelektrische Fokussierung (oligoklonale Banden)" },
              { id: "autoantikörper", label: "Spezifische Antikörpernachweise" }
            ]
          },
          {
            id: "neurodegenerativ",
            label: "Bei V.a. neurodegenerative Erkrankung",
            children: [
              { id: "tau_protein", label: "ZNS-eigene Proteine (z.B. Tau-Protein)" }
            ]
          },
          {
            id: "tumor",
            label: "Bei V.a. Tumor",
            children: [
              { id: "tumormarker", label: "Tumormarker" },
              { id: "immunzytologie", label: "Immunzytologie" }
            ]
          }
        ]
      }
    ]
  };
  
  // Transformationsfunktion
  const transformForList = (node) => {
    return {
      ...node,
      expanded: false,
      children: node.children ? node.children.map(transformForList) : []
    };
  };
  
  // Export für Listendarstellung
  export const liquorListData = transformForList(liquorMindMap);