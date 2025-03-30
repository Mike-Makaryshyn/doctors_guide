// Migräne-MindMap

export const migraeneMindMap = {
    id: "migraene",
    label: "Migräne",
    children: [
      // Epidemiologie
      {
        id: "epidemiologie",
        label: "Epidemiologie",
        children: [
          { id: "praevalenz", label: "Jahresprävalenz: 10–15%" },
          { id: "geschlecht", label: "Geschlecht: ♀>♂ (3:1) im mittleren Erwachsenenalter" },
          {
            id: "alter",
            label: "Alter",
            children: [
              { id: "erstmanifestation", label: "Erstmanifestation meist zwischen spätem Jugend- und frühem Erwachsenenalter" },
              { id: "praevalenzgipfel", label: "Prävalenzgipfel: Ca. 20–50 Jahre" }
            ]
          }
        ]
      },
  
      // Ätiologie
      {
        id: "ätiologie",
        label: "Ätiologie",
        children: [
          { id: "familiaer", label: "Familiäre Disposition" },
          { id: "patho_unbekannt", label: "Unklare pathophysiologische Ursache, viele Theorien" },
          {
            id: "trigger",
            label: "Mögliche Triggerfaktoren",
            children: [
              { id: "wetter", label: "Wetterwechsel, Kälte" },
              { id: "nahrung", label: "Genuss-/Nahrungsmittel: Alkohol, Nikotin, Milchprodukte, Glutamat" },
              { id: "hypoglykaemie", label: "Hypoglykämie" },
              { id: "schlaf", label: "Schlaf-Wach-Rhythmus, Jetlag" },
              { id: "stress", label: "Nach Stressphase (z.B. Feiertagsmigräne)" },
              {
                id: "frauen",
                label: "Zusätzliche Trigger bei Frauen",
                children: [
                  { id: "menstruation", label: "Menstruation" },
                  { id: "hormone", label: "Hormoneinnahme (z.B. Kontrazeptiva)" }
                ]
              }
            ]
          }
        ]
      },
  
      // Pathophysiologie
      {
        id: "pathophysiologie",
        label: "Pathophysiologie",
        children: [
          { id: "ursache", label: "Ursache nicht eindeutig geklärt" },
          { id: "ionenkanal", label: "Genetische Ionenkanal-/Energiepumpenstörung" },
          { id: "hirnstamm", label: "Aktivierung Hirnstammstrukturen → trigeminale Vasodilatation → pulsierender Schmerz" },
          { id: "allodynie", label: "Langdauernde Migräne → zentrale Sensibilisierung, Allodynie" },
          { id: "begleitsymptome", label: "Störung endogener Schmerzhemmung → Übelkeit, Licht-/Lärmempfindlichkeit" },
          { id: "aura", label: "Aura: Kortikale Depolarisationswelle (CSD)" },
          { id: "prodromi", label: "Prodromi: Limbisch/dienzephal vermittelte Symptome" }
        ]
      },
  
      // Klinik
      {
        id: "klinik",
        label: "Klinik",
        children: [
          {
            id: "prodromi",
            label: "Prodromi",
            children: [
              { id: "stimmung", label: "Stimmungsveränderung" },
              { id: "appetit", label: "Heißhunger oder Appetitlosigkeit" },
              { id: "lesen", label: "Schwierigkeiten beim Lesen/Schreiben" },
              { id: "gaehnen", label: "Vermehrtes Gähnen" },
              { id: "aktivitaet", label: "Hypo- oder Hyperaktivität" }
            ]
          },
          {
            id: "kopfschmerz",
            label: "Kopfschmerzphase",
            children: [
              { id: "lokalisation", label: "Einseitig, frontal, retroorbital (60%)" },
              { id: "dauer", label: "4–72 Stunden" },
              { id: "verlauf", label: "Langsam zunehmend, pulsierend" },
              { id: "verstaerkung", label: "Verstärkung durch Bewegung" },
              {
                id: "begleit",
                label: "Begleitsymptome",
                children: [
                  { id: "phonophobie", label: "Phonophobie" },
                  { id: "photophobie", label: "Photophobie" },
                  { id: "uebelkeit", label: "Übelkeit, Erbrechen" },
                  { id: "traenen", label: "Leichtes Augentränen" },
                  { id: "geruch", label: "Geruchsüberempfindlichkeit" }
                ]
              }
            ]
          },
          {
            id: "aura",
            label: "Migräne mit Aura",
            children: [
              { id: "definition_aura", label: "Reversible fokale neurologische Symptome <60 Min." },
              { id: "visuell", label: "Visuelle Phänomene: Skotome, Fortifikationen, Photopsien" },
              { id: "sensibilitaet", label: "Sensibilitätsstörungen" },
              { id: "aphasie", label: "Aphasie" }
            ]
          },
          {
            id: "sonderformen",
            label: "Verlaufs- und Sonderformen",
            children: [
              { id: "aura_ohne_kopf", label: "Aura ohne Kopfschmerz" },
              { id: "hirnstammaura", label: "Migräne mit Hirnstammaura" },
              { id: "vestibulaer", label: "Vestibuläre Migräne" },
              { id: "hemiplegisch", label: "Hemiplegische Migräne" },
              { id: "retinal", label: "Retinale Migräne" },
              { id: "kinder", label: "Periodische Syndrome im Kindesalter" }
            ]
          }
        ]
      },
  
      // Diagnostik
      {
        id: "diagnostik",
        label: "Diagnostik",
        children: [
          {
            id: "diagnosekriterien",
            label: "Diagnosekriterien",
            children: [
              {
                id: "mig_ohne_aura",
                label: "Migräne ohne Aura",
                children: [
                  { id: "moa_a", label: "≥5 Attacken" },
                  { id: "moa_b", label: "Dauer 4–72h" },
                  { id: "moa_c", label: "2 Kriterien: einseitig, pulsierend, mittel/stark, Bewegung verstärkt Schmerz" },
                  { id: "moa_d", label: "≥1 Begleitsymptom: Übelkeit, Phonophobie oder Photophobie" },
                  { id: "moa_e", label: "Nicht besser erklärt durch andere Diagnose" }
                ]
              },
              {
                id: "mig_mit_aura",
                label: "Migräne mit Aura",
                children: [
                  { id: "mma_a", label: "≥2 Attacken" },
                  { id: "mma_b", label: "≥1 Aurasymptom (visuell, sensibel, Sprache, Hirnstamm, motorisch, retinal)" },
                  { id: "mma_c", label: "≥3 Kriterien: langsamer Beginn, Dauer 5–60 min, einseitig, positiv, Kopfschmerz folgt" },
                  { id: "mma_d", label: "Nicht besser erklärt durch andere Diagnose" }
                ]
              }
            ]
          },
          {
            id: "klin_untersuchung",
            label: "Klinische Untersuchung",
            children: [
              { id: "neurologisch", label: "Neurologischer Status, Hirnnerven" },
              { id: "trigeminus", label: "Trigeminale Druckpunkte" },
              { id: "hws", label: "HWS-Beweglichkeit, Muskelschmerzen" },
              { id: "kiefer", label: "Kieferöffnungsschmerz" }
            ]
          },
          {
            id: "bildgebung",
            label: "Bildgebung (MRT)",
            children: [
              { id: "erstmanifestation", label: "Erstmanifestation >40 Jahre" },
              { id: "aenderung", label: "Veränderte Klinik, Therapieversagen" }
            ]
          }
        ]
      },
  
      // Therapie
      {
        id: "therapie",
        label: "Therapie",
        children: [
          {
            id: "allgemein",
            label: "Allgemeine Maßnahmen",
            children: [
              { id: "reizabschirmung", label: "Reizabschirmung, Ruhe, Schlaf" },
              { id: "kuehlung", label: "Kühlen von Stirn und Schläfen" }
            ]
          },
          {
            id: "akut",
            label: "Akuttherapie",
            children: [
              { id: "nsar", label: "NSAR: ASS, Ibuprofen, Diclofenac, Naproxen" },
              { id: "triptane", label: "Triptane: Sumatriptan, Eletriptan etc." },
              { id: "antiemetika", label: "Antiemetika: Metoclopramid, Domperidon" },
              { id: "notfall", label: "Migräne-Notfall: Sumatriptan s.c., ASS i.v." }
            ]
          },
          {
            id: "prophylaxe",
            label: "Medikamentöse Prophylaxe",
            children: [
              { id: "betablocker", label: "Betablocker: Metoprolol, Propranolol" },
              { id: "antiepileptika", label: "Topiramat, Valproinsäure" },
              { id: "antidepressiva", label: "Amitriptylin" },
              { id: "cgrp", label: "Anti-CGRP-Antikörper: Erenumab etc." },
              { id: "botox", label: "Botulinumtoxin bei chronischer Migräne" }
            ]
          },
          {
            id: "nicht_med_prophylaxe",
            label: "Nicht-medikamentöse Prophylaxe",
            children: [
              { id: "lebensstil", label: "Lebensstiländerung, Stressabbau" },
              { id: "sport", label: "Ausdauersport" },
              { id: "verhalten", label: "Verhaltenstherapie, Entspannung" },
              { id: "biofeedback", label: "Biofeedback-Training" },
              { id: "stimulation", label: "Trigeminusstimulation, Akupunktur" }
            ]
          }
        ]
      },
  
      // Komplikationen
      {
        id: "komplikationen",
        label: "Komplikationen",
        children: [
          { id: "chronisch", label: "Chronische Migräne: ≥15 Tage/Monat" },
          { id: "status", label: "Status migraenosus: >72h" },
          { id: "infarkt", label: "Migränöser Infarkt" },
          { id: "persistierend", label: "Persistierende Aura ohne Infarkt" }
        ]
      },
  
      // Differenzialdiagnosen
      {
        id: "differenzialdiagnosen",
        label: "Differenzialdiagnosen",
        children: [
          { id: "spannung", label: "Spannungskopfschmerz" },
          { id: "cluster", label: "Cluster-Kopfschmerz" },
          { id: "paroxysmal", label: "Paroxysmale Hemikranie" },
          { id: "medikamente", label: "Medikamenteninduzierter Kopfschmerz" }
        ]
      }
    ]
  };
  
  // Transformationsfunktion für Listenansicht
  const transformForList = (node) => {
    return {
      ...node,
      expanded: false,
      children: node.children ? node.children.map(transformForList) : []
    };
  };
  
  export const migraeneListData = transformForList(migraeneMindMap);