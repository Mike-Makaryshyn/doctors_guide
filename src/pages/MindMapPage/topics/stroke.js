export const strokeMindMap = {
  id: "stroke",
  label: "Schlaganfall",
  children: [
    // Класифікація
    {
      id: "klassifikation",
      label: "Klassifikation",
      children: [
        {
          id: "ischämisch",
          label: "Ischämischer Schlaganfall (80–85%)",
          children: [
            { id: "isch_symptom1", label: "Symptom: Episode neurologischer Dysfunktion" },
            { id: "isch_symptom2", label: "Symptom: Fokale Ischämie des ZNS" }
          ]
        },
        {
          id: "hämorrhagisch",
          label: "Hämorrhagischer Schlaganfall (10–15%)",
          children: [
            { id: "ham_symptom1", label: "Symptom: Neurologische Dysfunktion" },
            { id: "ham_symptom2", label: "Symptom: Intrazerebrale Blutung" }
          ]
        },
        {
          id: "subarachnoidal",
          label: "Subarachnoidalblutung (ca. 5%)",
          children: [
            { id: "subara_symptom1", label: "Symptom: Einblutung in den Subarachnoidalraum" }
          ]
        }
      ]
    },
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
    // Етіологія
    {
      id: "ätiologie",
      label: "Ätiologie",
      children: [
        { id: "kardiale_embolien", label: "Kardiale Embolien" },
        { id: "thromboembolien", label: "Thromboembolien (z.B. Vorhofflimmern)" },
        { id: "atherosklerose_makro", label: "Atherosklerose: Makroangiopathie" },
        { id: "atherosklerose_mikro", label: "Mikroangiopathie" },
        { id: "dissektion", label: "Dissektion: Karotis & Vertebralis" },
        { id: "weitere_ursachen", label: "Zerebrale Vaskulitis, Thrombophilien" }
      ]
    },
    // Klinik
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
    // Diagnostik
    {
      id: "diagnostik",
      label: "Diagnostik",
      children: [
        // Bildgebung
        {
          id: "bildgebung",
          label: "Bildgebung",
          children: [
            { id: "ct", label: "CT" },
            { id: "mrt", label: "MRT" },
            { id: "cta", label: "CT-Angiografie" },
            { id: "pct", label: "Perfusions-CT" }
          ]
        },
        // Labor
        {
          id: "labor",
          label: "Labor",
          children: [
            { id: "ekg", label: "EKG" },
            { id: "blutwerte", label: "Blutwerte" },
            { id: "gerinnung", label: "Gerinnungsparameter" }
          ]
        }
      ]
    },
    // Therapie
    {
      id: "therapie",
      label: "Therapie",
      children: [
        // Akuttherapie
        {
          id: "akut",
          label: "Akuttherapie",
          children: [
            { id: "thrombolyse", label: "Thrombolyse" },
            { id: "thrombektomie", label: "Mechanische Thrombektomie" }
          ]
        },
        // Sekundärprophylaxe
        {
          id: "sekundaer",
          label: "Sekundärprophylaxe",
          children: [
            { id: "stroke_unit", label: "Stroke Unit" },
            { id: "med_proph", label: "Medikamentöse Prophylaxe" }
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