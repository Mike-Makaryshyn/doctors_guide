export const strokeMindMap = {
    id: "stroke",
    label: "Schlaganfall",
    children: [
      {
        id: "klassifikation",
        label: "Klassifikation",
        children: [
          {
            id: "ischämisch",
            label: "Ischämischer Schlaganfall (80–85%)",
            children: [
              {
                id: "definition_ischämisch",
                label: "Episode neurologischer Dysfunktion"
              },
              {
                id: "definition_ischämisch2",
                label: "Fokale Ischämie des ZNS"
              }
            ]
          },
          {
            id: "hämorrhagisch",
            label: "Hämorrhagischer Schlaganfall (10–15%)",
            children: [
              {
                id: "definition_hämorrhagisch",
                label: "Neurologische Dysfunktion"
              },
              {
                id: "definition_hämorrhagisch2",
                label: "Intrazerebrale Blutung"
              }
            ]
          },
          {
            id: "subarachnoidal",
            label: "Subarachnoidalblutung (ca. 5%)",
            children: [
              {
                id: "definition_subarachnoidal",
                label: "Einblutung in den Subarachnoidalraum"
              }
            ]
          }
        ]
      },
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
        id: "ätiologie",
        label: "Ätiologie",
        children: [
          { id: "kardiale1", label: "Kardiale Embolien" },
          { id: "kardiale2", label: "Thromboembolien (z.B. Vorhofflimmern)" },
          { id: "atherosklerose1", label: "Atherosklerose: Makroangiopathie" },
          { id: "atherosklerose2", label: "Mikroangiopathie" },
          { id: "dissektion", label: "Dissektion: Karotis & Vertebralis" },
          { id: "weitere_ursachen", label: "Zerebrale Vaskulitis, Thrombophilien" }
        ]
      },
      {
        id: "klinik",
        label: "Klinik",
        children: [
          { id: "symptome", label: "Symptome: Hemiparese, Aphasie, etc." },
          { id: "untersuchung", label: "Untersuchung: FAST, NIHSS" }
        ]
      },
      {
        id: "diagnostik",
        label: "Diagnostik",
        children: [
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
      {
        id: "therapie",
        label: "Therapie",
        children: [
          {
            id: "akut",
            label: "Akuttherapie",
            children: [
              { id: "thrombolyse", label: "Thrombolyse" },
              { id: "thrombektomie", label: "Mechanische Thrombektomie" }
            ]
          },
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