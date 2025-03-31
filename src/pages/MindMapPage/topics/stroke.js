export const strokeMindMap = {
  id: "stroke",
  label: "Schlaganfall",
  children: [
    // Класифікація
  
    // Епідеміологія
    {
      id: "epidemiologie",
      label: "Epidemiologie",
      children: [
        { id: "inzidenz", label: "270.000 Schlaganfälle/Jahr" },
        { id: "rate", label: "250/100.000 Einwohner/Jahr" },
        { id: "anteil", label: "80–85% ischämisch" },
        { id: "behinderung", label: "Ca. 700.000 Menschen behindert" }
      ]
    },
    {
      id: "pathologie",
      label: "Pathologie",
      children: [
        {
          id: "verlauf_histologie",
          label: "Verlauf & Histologie",
          children: [
            {
              id: "initial_nekrose",
              label: "Initiale Nekrose & Demarkation (0–5 Tage)",
              children: [
                { id: "oedem", label: "Ödematöse Erweichung & Auflockerung" },
                { id: "abgrenzung", label: "Klare Abgrenzung zu vitalem Gewebe" }
              ]
            },
            {
              id: "resorptionsphase",
              label: "Resorptionsphase (ab 5. Tag)",
              children: [
                { id: "kleinzystisch", label: "Kleinzystisches Zerfließen" },
                { id: "makrophagen", label: "Makrophagen mit lipidgefüllten Vakuolen" }
              ]
            },
            {
              id: "organisationsphase",
              label: "Organisationsphase (1–8 Wochen)",
              children: [
                { id: "kapillarproliferation", label: "Kapillarproliferation" },
                { id: "parenchym_defekt", label: "Zystischer Parenchymdefekt" },
                { id: "gliose", label: "Reaktive Gliose im Randbereich" }
              ]
            }
          ]
        },
        { id: "hirnstamm_pons", label: "Hirnstamminfarkt im Bereich des Pons" },
        {
          id: "elektive_nekrose",
          label: "Elektive Parenchymnekrose",
          children: [
            { id: "hypoxie", label: "Hypoxiebedingter, selektiver Zelltod" },
            { id: "vorkommen", label: "Vorkommen: Reperfusion, Epilepsie (Ammonshornsklerose)" }
          ]
        },
        {
          id: "histologie",
          label: "Histologie",
          children: [
            { id: "astrogliavermehrung", label: "Astrogliavermehrung deckt Defekt" },
            { id: "schichtung", label: "Laminär/pseudolaminär möglich" },
            { id: "abblassen", label: "Makroskopisch: Abblassen geschädigter Schichten" }
          ]
        },
        { id: "alter_infarkt_acm", label: "Alter Infarkt im A. cerebri media" },
        { id: "bilateral_infarkt", label: "Bilateraler Infarkt in Fissura calcarina" },
        { id: "isch_mediainfarkt", label: "Ischämischer Mediainfarkt" }
      ]
    },
    // Етіологія
    {
      id: "ätiologie",
      label: "Ätiologie",
      children: [
        {
          id: "ätiologie_kardial",
          label: "Kardiale Ursachen",
          children: [
            { id: "kardiale_vorhofflimmern", label: "Vorhofflimmern" },
            { id: "kardiale_pfo", label: "Persistierendes Foramen ovale (PFO)" },
            { id: "kardiale_asd", label: "Atriumseptumdefekt (ASD)" },
            { id: "kardiale_vorhofseptumaneurysma", label: "Vorhofseptumaneurysma" },
            { id: "kardiale_valsalva", label: "Valsalva-Manöver (Drucksteigerung rechtsatrial)" },
            { id: "kardiale_septisch", label: "Septische Embolien: Infektiöse Endokarditis" },
            { id: "kardiale_ventrikelthromben", label: "Ventrikelthromben (z.B. KHK, Myokardinfarkt, Kardiomyopathie)" },
            { id: "kardiale_myxom", label: "Atriales Myxom (v.a. linker Vorhof)" },
            { id: "kardiale_sonstige", label: "Weitere Ursachen: Herzklappenfehler, Sick-Sinus-Syndrom" }
          ]
        },
        {
          id: "ätiologie_atherosklerose",
          label: "Atherosklerotische Ursachen",
          children: [
            { id: "athero_makro", label: "Makroangiopathie (z.B. Karotisgabel)" },
            { id: "athero_hämodynamisch", label: "Hämodynamische Infarkte (seltener)" },
            { id: "athero_mikro", label: "Mikroangiopathie: Lakunäre Ischämien" }
          ]
        },
        {
          id: "ätiologie_dissektion",
          label: "Dissektion",
          children: [
            { id: "dissektion_karotis", label: "Karotisdissektion" },
            { id: "dissektion_vertebralis", label: "Vertebralisdissektion" },
            { id: "dissektion_intrazerebral", label: "Dissektion intrazerebraler Arterien" }
          ]
        },
        {
          id: "ätiologie_vaskulitiden",
          label: "Zerebrale Vaskulitiden",
          children: [
            { id: "vaskulitis_riesenzell", label: "Riesenzellarteriitis" },
            { id: "vaskulitis_takayasu", label: "Takayasu-Arteriitis" },
            { id: "vaskulitis_behcet", label: "Morbus Behçet" },
            { id: "vaskulitis_infektioes", label: "Infektassoziierte Vaskulitiden (z.B. Borreliose, Lues)" }
          ]
        },
        {
          id: "ätiologie_vaskulopathien",
          label: "Seltene Vaskulopathien",
          children: [
            { id: "thrombophilien", label: "Thrombophilien, Koagulopathien" },
            { id: "vaskulopathie_cadasil", label: "CADASIL" },
            { id: "vaskulopathie_rcvs", label: "RCVS (reversible zerebrale Vasokonstriktion)" },
            { id: "vaskulopathie_fmd", label: "Fibromuskuläre Dysplasie (v.a. Frauen)" },
            { id: "vaskulopathie_fabry", label: "Morbus Fabry" },
            { id: "vaskulopathie_moyamoya", label: "Moyamoya-Angiopathie" }
          ]
        },
        {
          id: "ätiologie_iatrogen",
          label: "Iatrogene Ursachen",
          children: [
            { id: "iatrogen_mikro", label: "Mikrothromben" },
            { id: "iatrogen_fett", label: "Fettembolien" },
            { id: "iatrogen_luft", label: "Luftembolien" }
          ]
        },
        {
          id: "ätiologie_kryptogen",
          label: "Kryptogener Schlaganfall / ESUS",
          children: [
            { id: "kryptogen_allgemein", label: "20–25% der ischämischen Schlaganfälle ohne bekannte Ursache" },
            { id: "esus_konzept", label: "ESUS: Embolic Stroke of Undetermined Source" },
            { id: "esus_muster", label: "Kriterium: Embolisches Infarktmuster (CT/MRT)" },
            { id: "esus_keine_makroangiopathie", label: "Kriterium: Keine Makroangiopathie" },
            { id: "esus_kein_risiko", label: "Kriterium: Kein erhöhtes Embolie-Risiko" },
            { id: "esus_ausschluss", label: "Kriterium: Ausschluss anderer Ursachen" },
            { id: "esus_therapie_pfo", label: "Therapie: PFO-Verschluss bei <60 Jahren mit Shunt" },
            { id: "esus_therapie_ass", label: "Therapie: Sekundärprophylaxe mit ASS/Clopidogrel" },
            { id: "esus_therapie_eventrecorder", label: "Therapie: Ggf. Eventrecorder-Implantation" }
          ]
        }
      ]
    },
    // Risikofaktoren
{
  id: "risikofaktoren",
  label: "Risikofaktoren",
  children: [
    {
      id: "risiko_beeinflussbar",
      label: "Beeinflussbare Risikofaktoren",
      children: [
        { id: "risiko_hypertonie", label: "Arterielle Hypertonie" },
        { id: "risiko_vorhofflimmern", label: "Vorhofflimmern" },
        { id: "risiko_adipositas", label: "Adipositas" },
        { id: "risiko_bewegungsmangel", label: "Bewegungsmangel" },
        { id: "risiko_raucher", label: "Rauchen" },
        { id: "risiko_diabetes", label: "Diabetes mellitus" },
        { id: "risiko_hyperlipidämie", label: "Hyperlipidämie" },
        { id: "risiko_alkohol", label: "Alkoholmissbrauch" },
        { id: "risiko_carotisstenose", label: "Stenose der A. carotis interna" },
        { id: "risiko_psychosozial", label: "Psychosoziale Belastungsfaktoren" },
        { id: "risiko_polyglobulie", label: "Polyglobulie (myeloproliferativ)" },
        { id: "risiko_myokardinfarkt", label: "Myokardinfarkt" },
        { id: "risiko_kardiomyopathie", label: "Kardiomyopathie" },
        { id: "risiko_klappenvitien", label: "Klappenvitien" },
        { id: "risiko_endokarditis", label: "Endokarditis" },
        { id: "risiko_rhythmus", label: "Herzrhythmusstörungen" },
        { id: "risiko_pfo", label: "Persistierendes Foramen ovale (PFO)" }
      ]
    },
    {
      id: "risiko_nicht_beeinflussbar",
      label: "Nicht-beeinflussbare Risikofaktoren",
      children: [
        { id: "risiko_alter", label: "Alter" },
        { id: "risiko_genetik", label: "Genetische Disposition" }
      ]
    },
    {
      id: "risiko_sonstige",
      label: "Weitere Risikofaktoren mit geringerer Prävalenz",
      children: [
        { id: "risiko_thrombophilie", label: "Thrombophilien, Gerinnungsstörungen" },
        { id: "risiko_hämatokrit", label: "Hämatokriterhöhung" },
        { id: "risiko_schwangerschaft", label: "Schwangerschaft" },
        { id: "risiko_kontrazeptiva", label: "Einnahme oraler Kontrazeptiva" },
        { id: "risiko_hormontherapie", label: "Hormonersatztherapie" },
        { id: "risiko_migräne", label: "Migräne" },
        { id: "risiko_kokain", label: "Kokainabusus" }
      ]
    }
  ]
},
{
  id: "klinik",
  label: "Klinik",
  children: [
    // Симптоми
    {
      id: "symptome",
      label: "Symptome",
      children: [
        { id: "symptom_hemiparese", label: "Hemiparese" },
        { id: "symptom_aphasie", label: "Aphasie" },
        { id: "symptom_andere", label: "Weitere Symptome" }
      ]
    },
    // Обстеження
    {
      id: "untersuchungen",
      label: "Untersuchungen",
      children: [
        {
          id: "fast_test",
          label: "FAST-Test",
          children: [
            { id: "fast_F", label: "F: Face" },
            { id: "fast_A", label: "A: Arms" },
            { id: "fast_S", label: "S: Speech" },
            { id: "fast_T", label: "T: Time" }
          ]
        },
        {
          id: "nigss_test",
          label: "NIGSS-Test",
          children: [
            { id: "nigss_N", label: "N: [мінімальний опис]" },
            { id: "nigss_I", label: "I: [мінімальний опис]" },
            { id: "nigss_G", label: "G: [мінімальний опис]" },
            { id: "nigss_S", label: "S: [мінімальний опис]" },
            { id: "nigss_S2", label: "S: [мінімальний опис]" }
          ]
        },
        { id: "nihs_test", label: "NIHSS" }
      ]
    }
  ]
},
{
  id: "ischämietypen",
  label: "Ischämietypen",
  children: [
    {
      id: "verlauf",
      label: "Verlauf",
      children: [
        { id: "tia", label: "TIA: transitorisch, keine MRT-Läsion, wenige Minuten" },
        { id: "tia_risiko", label: "TIA-Risiko: 10% 90-Tage, Hochrisiko: ABCD2 ≥4" },
        { id: "hirninfarkt", label: "Hirninfarkt: bleibende Schädigung" },
        { id: "stummer_infarkt", label: "Stummer Infarkt: nur Bildgebung" },
        { id: "minor_stroke", label: "Minor Stroke: NIHSS <4" },
        { id: "progressive_stroke", label: "Progressive Stroke: Verschlechterung" },
        { id: "prind", label: "PRIND: <72h Rückbildung (veraltet)" }
      ]
    },
    {
      id: "morphologie",
      label: "Morphologie",
      children: [
        { id: "territorial", label: "Territorial: groß, keilförmig, embolisch/Arteriosklerose" },
        {
          id: "haemodynamisch",
          label: "Hämodynamisch",
          children: [
            { id: "endstrom", label: "Endstrom: subkortikal, 'letzte Wiese'" },
            { id: "grenzzone", label: "Grenzzone: zwischen Arterien" },
            { id: "perfusionsmangel", label: "Perfusionsmangel: BP/Herz-Kreislauf" }
          ]
        },
        { id: "lakuna", label: "Lakunär: <1,5 cm, subkortikal, Mikroangiopathie" },
        { id: "abgelaufene_lakuna", label: "Abgelaufene Lakunär" }
      ]
    }
  ]
},
{
  id: "klinik_gefaess",
  label: "Klinik nach betroffenem Gefäß",
  children: [
    {
      id: "karotisstromgebiet",
      label: "Karotisstromgebiet (vordere Zirkulation)",
      children: [
        { id: "karotis_allg", label: "Allg.: 85%, Frontal/Parietal/Temp, BG, Capsula interna" },
        { id: "a_carotis", label: "A. carotis interna: Mediainfarkt, ipsi. Visusminderung" },
        { id: "a_cerebri_media", label: "A. cerebri media: brachiofazial, Blickdev., Dysarthrie, Aphasie/Apraxie, Hemineglect, Hemianopsie, evtl. Hirnödem" },
        { id: "a_cerebri_anterior", label: "A. cerebri anterior: beinbetonte Hemiparese, Apraxie, Inkontinenz" },
        { id: "a_choroidea_anterior", label: "A. choroidea anterior: Hemiplegie, Hemianopsie" }
      ]
    },
    {
      id: "vertebrobasilär",
      label: "Vertebrobasiläres Stromgebiet (hintere Zirkulation)",
      children: [
        { id: "vb_allg", label: "Allg.: 10%, Kleinhirn, Hirnstamm, Thalamus, Okzipital; Zuordnung erschwert" },
        { id: "a_vertebralis", label: "A. vertebralis: Kleinhirn-/Hirnstamminfarkt, Insuffizienz, Drehschwindel, Drop Attacks, Tinnitus, Sehstörung" },
        { id: "pica", label: "A. inferior posterior cerebelli (PICA): Kleinhirnhemisphäreninfarkt, Ataxie, Nystagmus, Dysmetrie, ggf. Wallenberg" },
        {
          id: "basilaris",
          label: "A. basilaris: Basilaristhrombose, Notfall, Vigilanz↓, Hirnstammzeichen, schwere Motorikstörung, Prodromi",
          children: [
            { id: "basilaris_distal", label: "Distal: Mesencephalon (Okulomotorik, Pupillen), Thalamus (Bewusstsein, Delir, Gedächtnis), Posterior (Blindheit)" },
            { id: "basilaris_mittel", label: "Mittel: Ponsinfarkt, Tetraplegie, evtl. Locked-in" },
            { id: "basilaris_proximal", label: "Proximal: Medulla, Dysarthrie, Dysphagie, Ataxie, Hemi-/Tetraplegie, Koma, ggf. Wallenberg/Horner" }
          ]
        },
        { id: "aica", label: "A. inferior anterior cerebelli (AICA): Ataxie, Dysarthrie, Schwindel, Übelkeit, Nystagmus, VII/VIII-Ausfall, Hypakusis/Hyperakusis" },
        { id: "sca", label: "A. superior cerebelli (SCA): Ataxie, Dysarthrie, Schwindel, Übelkeit, Nystagmus, evtl. Horner, Sensibilitätsstörung" },
        { id: "a_cerebri_posterior", label: "A. cerebri posterior: homonyme Hemianopsie, Thalamusinfarkt → neuropsych. Defizite, Hemihypästhesie, Thalamusschmerz" }
      ]
    },
    { id: "4D", label: "Vertebrobasilär: '4 D' = Dysarthrie, Dysphagie, Diplopie, Dizziness" }
  ]
},
{
  id: "klinik_hirngebiet",
  label: "Klinik nach betroffenem Hirngebiet",
  children: [
    {
      id: "kortikal",
      label: "Infarkte in kortikalen Arealen",
      children: [
        { id: "frontal", label: "Frontal: Antrieb↓, Geruchsstörung, motorische Aphasie" },
        { id: "temporal", label: "Temporal: ängstlich/reizbar, epileptisch, sensorische Aphasie" },
        { id: "parietal", label: "Parietal: links – Apraxie/Aphasie; rechts – Neglect" },
        { id: "mantelkante", label: "Mantelkante: Sensomotorik Beine, evtl. Blasenstörung" }
      ]
    },
    {
      id: "subkortikal",
      label: "Infarkte in subkortikalen Arealen",
      children: [
        { id: "capsula", label: "Capsula interna: kontral. Hemiparese, Hirnnerven; bei KB-Bahnen: Pseudobulbärparalyse" },
        { id: "strategisch", label: "Thalamus/Basalganglien/Marklager: Störung Kognition, Gedächtnis, Orientierung" },
        { id: "thalamus", label: "Thalamus isoliert: Hemidysästhesie, Finger-Hyperkinesie, Thalamushand" }
      ]
    },
    {
      id: "kleinhirn",
      label: "Kleinhirninfarkte",
      children: [
        { id: "allg_klein", label: "Allg.: zerebelläre Ataxie" },
        { id: "pontocerebellum", label: "Pontocerebellum: ipsi. Extremitätenataxie, Rebound, atakt. Dysarthrie" },
        { id: "spinocerebellum", label: "Spinocerebellum: Rumpfataxie, atakt. Dysarthrie" },
        { id: "vestibulo", label: "Vestibulocerebellum: Schwindel, Okulomotorikstörung, Rumpfataxie" }
      ]
    },
    {
      id: "hirnstamm",
      label: "Hirnstamminfarkte",
      children: [
        { id: "allg_hs", label: "Allg.: Vigilanzstörung, Schwindel, Dysarthrie, Dysphagie, Ataxie, Singultus" },
        { id: "hemiplegia_alt", label: "Hemiplegia-alternans: ipsi. Hirnnerven, kontral. Sens-/Motorik" },
        {
          id: "syndrome",
          label: "Typische Hirnstammsyndrome",
          children: [
            { id: "wallenberg", label: "Wallenberg: Schwindel, Nystagmus, Übelkeit, Dysarthrie, Dysphagie, ipsi. Horner, Gesichtsn. betroffen" },
            { id: "weber", label: "Weber: N. oculomotorius ipsi., Hemiparese kontralateral" }
          ]
        },
        {
          id: "lakuna",
          label: "Lakunäre Syndrome",
          children: [
            { id: "pure_motor", label: "Pure Motor Stroke: rein motorisch (Capsula/Pons)" },
            { id: "pure_sensory", label: "Pure Sensory Stroke: rein sensibel (Thalamus/Hirnstamm)" },
            { id: "dys_clumsy", label: "Dysarthria-Clumsy-Hand: Dysarthrie, Feinmotorikstörung" },
            { id: "ataktisch", label: "Ataktische Hemiparese: Hemiparese, Ataxie (Pons)" },
            { id: "status_lacunaris", label: "Status lacunaris: multiple lakunäre Infarkte" },
            { id: "pseudo_bulbar", label: "Pseudobulbär: Dysarthrie, Heiserkeit, Dysphagie, ↑ Masseterreflex, Affektinkontinenz" }
          ]
        }
      ]
    }
  ]
},
{
  id: "diagnostik",
  label: "Diagnostik",
  children: [
    {
      id: "anamnese_untersuchung",
      label: "Anamnese & körperliche Untersuchung",
      children: [
        {
          id: "fokussierte_anamnese",
          label: "Fokussierte (Fremd‑)Anamnese",
          children: [
            { id: "symptomatik", label: "Symptomatik: Plausibilitätsprüfung, exakte Bestimmung Symptombeginn" },
            { id: "art_symptome", label: "Art der Symptome" },
            {
              id: "beginn",
              label: "Beginn",
              children: [
                { id: "beginn_bestimmbar", label: "Bestimmbar: Thrombolysezeitfenster (<4,5h, evtl. <9h)" },
                { id: "beginn_unbestimmbar", label: "Unbestimmbar (Unknown-Onset Stroke): Letzter symptomfreier Zeitpunkt" }
              ]
            },
            { id: "verlauf", label: "Verlauf" },
            { id: "medikamentenanamnese", label: "Medikamentenanamnese (Antikoagulantien, Thrombozytenaggregationshemmer)" },
            {
              id: "basisinfos",
              label: "Basisinformationen",
              children: [
                { id: "alter", label: "Patientenalter" },
                { id: "mobilitaet", label: "Mobilität vor Ereignis" },
                { id: "vorerkrankungen", label: "Vorerkrankungen" },
                { id: "vorsorge", label: "Vorsorgevollmacht/Patientenverfügung" },
                { id: "gewicht", label: "Gewicht & Kontraindikationen (bei Thrombolyse)" }
              ]
            }
          ]
        },
        {
          id: "fokussierte_neurologische",
          label: "Fokussierte neurologische Untersuchung",
          children: [
            {
              id: "fast",
              label: "FAST (Neurologie)",
              children: [
                { id: "fast_F", label: "F: Facial Expression (veränderte/verminderte Mimik)" },
                { id: "fast_A", label: "A: Arm Weakness (Arm nicht gehoben)" },
                { id: "fast_S", label: "S: Speech Difficulties (Sprachstörung)" },
                { id: "fast_T", label: "T: Time is Brain (schnelles Handeln)" },
                {
                  id: "be_fast",
                  label: "Erweitert (BE-FAST)",
                  children: [
                    { id: "be_fast_B", label: "B: Balance (Gangunsicherheit, Beinschwäche)" },
                    { id: "be_fast_E", label: "E: Eye (Sehstörungen, Augenbewegungsstörungen)" }
                  ]
                }
              ]
            },
            { id: "orientierung", label: "Orientierende neurologische Notfalluntersuchung (fokale Defizite)" },
            {
              id: "gefaehrdung",
              label: "Erfassen besonderer Gefährdung",
              children: [
                { id: "basilaris_symptome", label: "Symptome einer Basilaristhrombose?" },
                { id: "schluckstoerung", label: "Schluckstörung?" },
                { id: "hirndruck", label: "Hirndruckzeichen?" }
              ]
            },
            { id: "erweitert_neuro", label: "Erweiterte neurologische Untersuchung (bei unklarer Symptomatik)" },
            { id: "nihss", label: "Erhebung des NIHSS" },
            { id: "rankin", label: "Einschätzung Behinderungsgrad (modifizierte Rankin-Skala)" }
          ]
        },
        {
          id: "internistische_untersuchung",
          label: "Internistische körperliche Untersuchung",
          children: [
            { id: "kardio_untersuchung", label: "Kardiologische Untersuchung: Herzfrequenz, Blutdruck, Sauerstoffsättigung" }
          ]
        },
        {
          id: "anamnese_hinweis",
          label: "Hinweis: Bei V.a. Schlaganfall – schnelle (CT‑)Bildgebung, Untersuchungszeit wenige Minuten!"
        }
      ]
    },
    {
      id: "bildgebung",
      label: "Bildgebung bei Schlaganfall",
      children: [
        { id: "ziel_bildgebung", label: "Ziel: Ischämisch vs. hämorrhagisch differenzieren" },
        {
          id: "nativ_cct",
          label: "Nativ-cCT",
          children: [
            { id: "nativ_indikation", label: "Indikation: immer bei V.a. akutem Schlaganfall" },
            { id: "nativ_ziel", label: "Ziele: Ausschluss Blutung, ischämische Frühzeichen, ASPECT-Score, ältere Infarkte" },
            {
              id: "nativ_befunde",
              label: "Befunde im Nativ-cCT",
              children: [
                { id: "nativ_2_6h", label: "2–6h: Frühzeichen (verstrichene Sulci, Verlust Mark-Rinden-Grenze, hyperdense Mediazeichen)" },
                { id: "nativ_12_24h", label: "12–24h: Demarkierung, Hypodensität, Ödembildung" },
                { id: "nativ_fogging", label: "Tag 10–18: Fogging-Phase (Infarkt vorübergehend unsichtbar)" },
                { id: "nativ_ab3w", label: "Ab 3 Wochen: definitive Demarkierung, bleibende Hypodensität" }
              ]
            }
          ]
        },
        {
          id: "erweiterte_ct",
          label: "Erweiterte CT-Diagnostik",
          children: [
            { id: "cta", label: "Supraaortale CT-Angiografie: Indikation bei proximalem Gefäßverschluss" },
            { id: "cta_timing", label: "Timing: vordere Zirkulation (<24h), vertebrobasilär: immer; alternativ MRA/Duplex" },
            { id: "pct", label: "Perfusions-CT: >4,5h, Infarkt vs. Penumbra, alternativ Perfusions-Diffusions-Mismatch" }
          ]
        },
        {
          id: "cmrt",
          label: "cMRT",
          children: [
            { id: "cmrt_indikation", label: "Indikation: Akut, unklarer Zeitpunkt, Therapieentscheidung" },
            {
              id: "mrt_sequenzen",
              label: "Schlaganfall-MRT Sequenzen",
              children: [
                { id: "flair", label: "FLAIR: Wasserunterdrückung, Infarkt-Demarkierung" },
                { id: "dwi", label: "Diffusions-MRT (DWI): Infarkt-Kern" },
                { id: "pwi", label: "Perfusions-MRT (PWI): Durchblutungseinschränkung" },
                { id: "t2star", label: "Blutungssensitive Sequenz (T2*-Gewichtung)" },
                { id: "mr_angiografie", label: "MR-Angiografie: Darstellung des Gefäßsystems" },
                { id: "darstellung", label: "Darstellung: T2 hyperintens, T1 hypointens" }
              ]
            },
            { id: "dwi_flair", label: "DWI-FLAIR-Mismatch: FLAIR-negativ bei Infarkt <4,5h → Thrombolyse möglich" },
            { id: "pwi_dwi", label: "Perfusions-Diffusions-Mismatch: Abschätzung der Penumbra" }
          ]
        }
      ]
    },
    {
      id: "weitere_diagnostik",
      label: "Weitere Diagnostik",
      children: [
        { id: "labordiagnostik", label: "Basis-Labordiagnostik" },
        { id: "arterien_darstellung", label: "Darstellung der Arterien (Doppler, MR-/CT-Angiografie, digitale Subtraktionsangiografie)" },
        { id: "ekg", label: "EKG: Akut- & Langzeitmonitoring" },
        { id: "echokardiografie", label: "Echokardiografie (TEE): Suche nach Emboliequelle, PFO" },
        { id: "blutkulturen", label: "Blutkulturen: bei Endokarditisverdacht" },
        { id: "lumbalpunktion", label: "Lumbalpunktion: bei V.a. SAB, CT-negativ" },
        { id: "stenose_vertebralis", label: "Stenose der A. vertebralis" }
      ]
    },
    {
      id: "zusatzdiagnostik",
      label: "Zusatzdiagnostik (jugendlich/kryptogen)",
      children: [
        { id: "mrt_kontrast", label: "MRT mit Kontrast & MR-Angiografie (Black-Blood-Sequenz)" },
        { id: "katheterangiografie", label: "Katheterangiografie der Gefäße" },
        {
          id: "vaskulitis_diagnostik",
          label: "Vaskulitis-Diagnostik",
          children: [
            { id: "anti_ana", label: "Anti-ANA, pANCA, cANCA, Rheumafaktor" },
            { id: "erregerdiagnostik", label: "Erregerdiagnostik inkl. Liquoruntersuchung" }
          ]
        },
        { id: "thrombophilie", label: "Thrombophilie-Screening & genetische Diagnostik (z.B. CADASIL, MELAS, Morbus Fabry)" }
      ]
    }
  ]
},
{
  id: "differenzialdiagnosen",
  label: "Differenzialdiagnosen",
  children: [
    {
      id: "hypoglykämie",
      label: "Hypoglykämie",
      children: [
        { id: "hypo_defizite", label: "Defizite: variabel, v.a. Vigilanzminderung, Aphasie, Hemiparese" },
        { id: "hypo_diagnostik", label: "Diagnostik: BZ-Messung" }
      ]
    },
    {
      id: "migräne_aura",
      label: "Migräne mit Aura",
      children: [
        { id: "mig_defizite", label: "Defizite: Gesichtsfeldausfälle, Sprachstörungen, selten Paresen" },
        { id: "mig_diagnostik", label: "Diagnostik: Anamnese, typische Kopfschmerzsymptomatik nach Aura" }
      ]
    },
    {
      id: "epileptischer_anfall",
      label: "Epileptischer Anfall",
      children: [
        { id: "epileps_defizite", label: "Defizite: variabel, z.B. postiktale Todd'sche Paresen" },
        { id: "epileps_diagnostik", label: "Diagnostik: Anamnese, ggf. Zungenbiss, Enuresis" }
      ]
    },
    {
      id: "infektion_sepsis",
      label: "Schwere Infektion/Sepsis",
      children: [
        { id: "sepsis_defizite", label: "Defizite: Vigilanzminderung, Fieber, Husten, ↑ Entzündungsparameter" },
        { id: "sepsis_diagnostik", label: "Diagnostik: klinische Infektzeichen, Laborparameter" }
      ]
    },
    {
      id: "periphere_nervenschaeden",
      label: "Periphere Nervenschädigung",
      children: [
        { id: "periph_defizite", label: "Defizite: Paresen, Sensibilitätsstörungen" },
        { id: "periph_diagnostik", label: "Diagnostik: Anamnese, charakteristische Untersuchungsbefunde" }
      ]
    },
    {
      id: "neuritis_vestibularis",
      label: "Neuritis vestibularis & BPLS",
      children: [
        { id: "neuritis_defizite", label: "Defizite: Drehschwindel, Nystagmus" },
        { id: "neuritis_diagnostik", label: "Diagnostik: Anamnese, charakteristische Untersuchungsbefunde" }
      ]
    },
    {
      id: "alkoholintoxikation",
      label: "Alkoholintoxikation",
      children: [
        { id: "alko_defizite", label: "Defizite: variabel, z.B. verwaschene Sprache, Gangstörungen" },
        { id: "alko_diagnostik", label: "Diagnostik: Anamnese, Blutalkoholbestimmung" }
      ]
    },
    {
      id: "funktionelle_stoerung",
      label: "Funktionelle Störung",
      children: [
        { id: "funk_defizite", label: "Defizite: variabel, z.B. Paresen, Sensibilitätsstörungen" },
        { id: "funk_diagnostik", label: "Diagnostik: Anamnese, charakteristische Untersuchungsbefunde" }
      ]
    },
    {
      id: "melas_syndrom",
      label: "MELAS-Syndrom",
      children: [
        { id: "melas_defizite", label: "Defizite: variabel, v.a. Hemianopsie, Paresen" },
        { id: "melas_diagnostik", label: "Diagnostik: Anamnese, typische MRT-Befunde, evtl. ↑ Lactat (Serum/Liquor)" }
      ]
    }
  ]
},
    // Klinik
    
    // Diagnostik
   
    // Therapie
   
    {
      id: "therapie",
      label: "Therapie",
      children: [
        {
          id: "allg_ueberlegungen",
          label: "Allgemeine Überlegungen",
          children: [
            { id: "praehosp", label: "Prähospital: Schnelle stationäre Aufnahme (Stroke Unit)" },
            { id: "kh", label: "Im KH: Rasche Diagnostik & Akuttherapie (Reperfusion)" },
            { id: "stroke_unit", label: "Stroke Unit: Komplikationen vermeiden, Sekundärprophylaxe" }
          ]
        },
        {
          id: "praeklinisch",
          label: "Präklinisches Management (ischämisch)",
          children: [
            { id: "transport", label: "Voranmeldung & Transport zur Stroke Unit" },
            { id: "lagerung", label: "Lagerung: 30° Oberkörperhochlagerung" },
            { id: "abcde", label: "ABCDE-Schema: Schnelle Untersuchung & Vitalüberwachung" },
            { id: "venenzugang", label: "Venöser Zugang, Sauerstoffgabe (spO2 ≥95%)" },
            { id: "blutdruck", label: "BP: Hypertonie nur vorsichtig senken (<15%), Hypotonie abklären" },
            { id: "volumengabe", label: "Bei Hypotonie: Volumengabe/Noradrenalin" }
          ]
        },
        {
          id: "akut_krankenhaus",
          label: "Akuttherapie im Krankenhaus",
          children: [
            { id: "bildung", label: "Schnelle Bildgebung (CT/MRT) & Blutungsausschluss" },
            { id: "rekanalisation", label: "Rekanalisierung: Reperfusion der Penumbra" }
          ]
        },
        {
          id: "thrombolyse",
          label: "Thrombolysetherapie",
          children: [
            { id: "wirkprinzip", label: "Wirkprinzip: rt-PA aktiviert Plasminogen, löst Fibrin" },
            { id: "alteplase", label: "Alteplase: 0,9 mg/kg (10% Bolus, Rest Infusion)" },
            { id: "tenecteplase", label: "Tenecteplase: Gewichtsdosis, einmaliger Bolus" },
            { id: "indikation", label: "Indikation: <4,5h (oder mittels Mismatch bei >4,5h/unknown)" },
            { id: "bp_senkung", label: "BP vor Thrombolyse: <180/105 mmHg" },
            { id: "kontra", label: "Kontra: erh. Blutungsrisiko, Gerinnungsstörung, kürz. OP/Trauma" },
            { id: "monitoring", label: "Monitoring: Blutdruck, Herzfrequenz, Sauerstoff" },
            { id: "post_thrombolyse", label: "Nach Thrombolyse: 24h Kontroll-CT, antithrombotische Therapie" }
          ]
        },
        {
          id: "thrombektomie",
          label: "Mechanische Thrombektomie",
          children: [
            { id: "indikation_thromb", label: "Indikation: Verschluss großer Hirnarterien, bis 6h (ggf. >6h mit Mismatch)" },
            { id: "ablauf", label: "Ablauf: CT-/MR-Angiografie, femoraler Zugang, Stent Retriever, Aspiration" },
            { id: "ziele_thromb", label: "Ziele: Door-To-Groin <90min, Thrombektomie <30min, TICI ≥2b" },
            { id: "komplikationen", label: "Komplikationen: Perforation, Blutung, Dissektion, Emboli, Vasospasmen" }
          ]
        }
      ]
    }
  ]
};

// Функція трансформації для відображення даних у вигляді списку
const transformForList = (node) => {
  return {
    ...node,
    expanded: false,
    children: node.children ? node.children.map(transformForList) : []
  };
};

export const strokeListData = transformForList(strokeMindMap);