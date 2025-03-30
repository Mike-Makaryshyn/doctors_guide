// Kopfschmerzen – MindMap-Struktur

export const headacheMindMap = {
  id: "headache",
  label: "Kopfschmerzen",
  children: [
    // Klassifikation
    {
      id: "klassifikation",
      label: "Klassifikation",
      children: [
        {
          id: "primaer",
          label: "Primäre Kopfschmerzen",
          children: [
            { id: "migräne", label: "Migräne" },
            { id: "spannungskopfschmerz", label: "Spannungskopfschmerz" },
            {
              id: "clusterkopfschmerz",
              label: "Clusterkopfschmerz & trigemino-autonome Kopfschmerzen",
              children: [{ id: "paroxysmale_hemikranie", label: "Paroxysmale Hemikranie" }]
            },
            { id: "andere_primäre", label: "Andere primäre Kopfschmerzen" }
          ]
        },
        {
          id: "sekundaer",
          label: "Sekundäre Kopfschmerzen",
          children: [
            { id: "trauma", label: "Durch Schädel-Hirn-Trauma" },
            { id: "substanz", label: "Durch Substanz oder Entzug" },
            { id: "gefaess", label: "Durch Gefäßstörungen (z.B. Arteriitis temporalis)" },
            { id: "homöostase", label: "Durch Störung der Homöostase" },
            { id: "intrakraniell", label: "Durch intrakranielle Erkrankungen" },
            { id: "infektionen", label: "Durch Infektionen (z.B. Meningitis)" },
            { id: "psychiatrisch", label: "Psychiatrische Störungen" },
            { id: "kopf_hals", label: "Durch Erkrankungen im Kopf-Hals-Bereich" }
          ]
        },
        {
          id: "neuralgien",
          label: "Kraniale Neuralgien & Gesichtsschmerzen",
          children: [
            { id: "trigeminus", label: "Trigeminusneuralgie" },
            { id: "nicht_klassifiziert", label: "Andere, nicht klassifizierte Kopfschmerzen" }
          ]
        }
      ]
    },
    // Epidemiologie
    {
      id: "epidemiologie",
      label: "Epidemiologie",
      children: [
        { id: "verteilung", label: "Weltweite Verteilung" },
        { id: "praevalenz_allg", label: "Prävalenz: ca. 60%" },
        { id: "lebenszeitpraevalenz", label: "Lebenszeitprävalenz: >90%" },
        { id: "haeufigkeit_spannung", label: "Spannungskopfschmerz: 60–80%" },
        { id: "haeufigkeit_migraene", label: "Migräne: 12–14%" }
      ]
    },
    // Ätiologie / Differenzialdiagnosen
    {
      id: "ätiologie",
      label: "Ätiologie / Differenzialdiagnosen",
      children: [
        {
          id: "infektioes",
          label: "Infektiöse Ursachen",
          children: [
            { id: "meningitis", label: "Meningitis" },
            { id: "enzephalitis", label: "Enzephalitis" }
          ]
        },
        {
          id: "vaskulaer",
          label: "Vaskuläre Ursachen",
          children: [
            { id: "blutung_intrazerebral", label: "Intrazerebrale Blutung" },
            { id: "subarachnoidal", label: "Subarachnoidalblutung" },
            { id: "epidural_subdural", label: "Epi-/Subduralblutung" },
            { id: "venenthrombose", label: "Zerebrale Venenthrombose" },
            { id: "arteriitis_temporalis", label: "Arteriitis temporalis" },
            { id: "hypertensiv", label: "Hypertensive Entgleisung" },
            { id: "schlaganfall", label: "Schlaganfall" }
          ]
        },
        {
          id: "tumorös",
          label: "Tumoröse Ursachen",
          children: [{ id: "raumforderung", label: "Intrakranielle Raumforderung" }]
        },
        {
          id: "trauma",
          label: "Traumatische Ursachen",
          children: [{ id: "sht", label: "Schädelhirntrauma" }]
        },
        {
          id: "sonstige",
          label: "Weitere Ursachen",
          children: [
            { id: "glaukomanfall", label: "Glaukomanfall" },
            { id: "idiopathisch_ih", label: "Idiopathische intrakranielle Hypertension" }
          ]
        }
      ]
    },
    // Klinik
    {
      id: "klinik",
      label: "Klinik",
      children: [
        {
          id: "red_flags",
          label: "Red Flags",
          children: [
            { id: "vernichtungsschmerz", label: "Vernichtungskopfschmerz" },
            { id: "fieber", label: "Fieber" },
            { id: "ausfall", label: "Fokale Ausfallsymptomatik" },
            { id: "vigilanz", label: "Vigilanzminderung" },
            { id: "hirndruck", label: "Hirndruckzeichen" },
            { id: "meningismus", label: "Meningismus" },
            { id: "augenschmerz", label: "Augenschmerzen" }
          ]
        },
        {
          id: "primäre_symptome",
          label: "Primäre Kopfschmerzformen",
          children: [
            {
              id: "spannung",
              label: "Spannungskopfschmerz",
              children: [
                { id: "dauer_sp", label: "Episodisch/chronisch" },
                { id: "charakter_sp", label: "Dumpf, drückend, nicht pulsierend" },
                { id: "begleit_sp", label: "Keine vegetativen Symptome" }
              ]
            },
            {
              id: "migraene",
              label: "Migräne",
              children: [
                { id: "dauer_mi", label: "4–72 Stunden" },
                { id: "charakter_mi", label: "Pulsierend, bohrend" },
                { id: "begleit_mi", label: "Photophobie, Übelkeit, Erbrechen" }
              ]
            },
            {
              id: "cluster",
              label: "Clusterkopfschmerz",
              children: [
                { id: "dauer_cl", label: "30–180 Minuten" },
                { id: "charakter_cl", label: "Periorbital, stark, einseitig" },
                { id: "begleit_cl", label: "Horner-Syndrom, Tränenfluss" }
              ]
            }
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
          id: "anamnese",
          label: "Anamnese",
          children: [
            { id: "zeitverlauf", label: "Zeit, Dauer, Häufigkeit" },
            { id: "lokalisation", label: "Lokalisation (ein-/beidseitig)" },
            { id: "charakter", label: "Charakter (pulsierend, dumpf etc.)" },
            { id: "begleitsymptome", label: "Begleitsymptome (Aura, Übelkeit...)" },
            { id: "ausloeser", label: "Auslöser/Verstärker" },
            { id: "familie", label: "Familiäre Disposition" }
          ]
        },
        {
          id: "untersuchung",
          label: "Körperliche Untersuchung",
          children: [
            { id: "neurologie", label: "Neurologischer Status" },
            { id: "hirnnerven", label: "Hirnnervenstatus" },
            { id: "druckpunkte", label: "Druckschmerz perikraniale Muskulatur" },
            { id: "auge", label: "Bulbusdruckschmerz, A. temporalis" }
          ]
        },
        {
          id: "bildgebung",
          label: "Bildgebung",
          children: [
            { id: "cct", label: "CCT" },
            { id: "cmrt", label: "cMRT" },
            { id: "dsa", label: "Digitale Subtraktionsangiografie" },
            { id: "sono", label: "Sonografie" },
            { id: "röntgen", label: "Röntgen HWS" }
          ]
        },
        {
          id: "labor",
          label: "Labor & Weitere Diagnostik",
          children: [
            { id: "entzuendung", label: "Entzündungsparameter" },
            { id: "schilddrüse", label: "Schilddrüsenparameter" },
            { id: "eeg", label: "EEG" },
            { id: "liquor", label: "Liquorpunktion" }
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

export const headacheListData = transformForList(headacheMindMap);
