export const subarachnoidMindMap = {
    id: "sab",
    label: "Subarachnoidalblutung",
    children: [
      {
        id: "etio",
        label: "Ätiologie",
        children: [
          { id: "tSAB", label: "Traumatisch" },
          { id: "ntSAB", label: "Aneurysma-bedingt" },
          {
            id: "arterien",
            label: "Arterien",
            children: [
              { id: "a1", label: "Arteria communicans anterior" },
              { id: "a2", label: "Arteria cerebri anterior" },
              { id: "a3", label: "Arteria carotis interna" },
              { id: "a4", label: "Arteria cerebri media" },
              { id: "a5", label: "Arteria communicans posterior" },
              { id: "a6", label: "Arteria basilaris" },
              { id: "a7", label: "Arteria vertebralis" }
            ]
          }
        ]
      },
      {
        id: "risk",
        label: "Risikofaktoren",
        children: [
          { id: "risk1", label: "Arterielle Hypertonie" },
          { id: "risk2", label: "Nikotinabusus" },
          { id: "risk3", label: "Alkoholkonsum" },
          { id: "risk4", label: "Kokainabusus" },
          { id: "risk5", label: "Schwangerschaft / post partum" },
          { id: "risk6", label: "Alter" },
          { id: "risk7", label: "Valsalva-Manöver" }
        ]
      },
      {
        id: "path",
        label: "Pathogenese",
        children: [
          { id: "path1", label: "Erhöhter Hirndruck (ICP)" },
          { id: "path2", label: "Reaktive Hyperämie" },
          { id: "path3", label: "Verklebungen in basalen Zisternen" },
          { id: "path4", label: "Vasospasmus" },
          { id: "path5", label: "Minderperfusion / zerebrale Schäden" }
        ]
      },
      {
        id: "symp",
        label: "Symptome",
        children: [
          { id: "symp1", label: "Warnblutung: Kopfschmerz wie nie zuvor" },
          { id: "symp2", label: "Kopfschmerz (maximal in der 1. Minute)" },
          { id: "symp3", label: "Meningismus" },
          { id: "symp4", label: "Bewusstseinsstörung" },
          { id: "symp5", label: "Hirndruckzeichen" },
          { id: "symp6", label: "Vegetative Symptome" },
          { id: "symp7", label: "Erbrechen" },
          { id: "symp8", label: "Blutdruckabfall" },
          { id: "symp9", label: "Veränderung von Atem- und Pulsfrequenz" },
          { id: "symp10", label: "Schmerzen (Brust, Wirbelsäule, Beine)" },
          { id: "symp11", label: "Terson-Syndrom" }
        ]
      },
      {
        id: "diag",
        label: "Diagnostik",
        children: [
          { id: "diag1", label: "Computertomographie (CT): Hyperdense Blutansammlung in basalen Zisternen und Sulci" },
          { id: "diag2", label: "Liquoruntersuchung: Xanthochromie, Drei-Gläser-Probe" },
          { id: "diag3", label: "Magnetresonanztomographie (MRT): Ergänzende Diagnostik" },
          { id: "diag4", label: "Angiographie: Detektion von Aneurysmen" }
        ]
      },
      {
        id: "diff",
        label: "Differenzialdiagnose",
        children: [
          { id: "diff1", label: "Meningitis" },
          { id: "diff2", label: "Verschlusshydrozephalus" },
          { id: "diff3", label: "Liquorshunt-Insuffizienz" },
          { id: "diff4", label: "Vergiftung / Stoffwechselstörung" }
        ]
      },
      {
        id: "ther",
        label: "Therapie",
        children: [
          {
            id: "ther_cons",
            label: "Konservativ",
            children: [
              { id: "ther1", label: "Nimodipin" },
              { id: "ther2", label: "Sedierung & Analgesie" },
              { id: "ther3", label: "Blutdruckkontrolle" },
              { id: "ther4", label: "Blutzuckerüberwachung" },
              { id: "ther5", label: "Mannitol / Ventrikeldrainage" },
              { id: "ther6", label: "Krampfanfallprophylaxe (Phenytoin)" }
            ]
          },
          {
            id: "ther_neuro",
            label: "Neurochirurgisch",
            children: [
              { id: "ther7", label: "Clipping" },
              { id: "ther8", label: "Coiling" }
            ]
          }
        ]
      },
      {
        id: "comp",
        label: "Komplikationen",
        children: [
          { id: "comp1", label: "Rezidivblutung (ca. 20% – meist im 1. Tag)" },
          { id: "comp2", label: "Vasospasmus (ca. 30%, Risiko ischämischer Infarkte)" },
          { id: "comp3", label: "Hydrozephalus (ca. 20%)" },
          { id: "comp4", label: "Hirnödem" },
          { id: "comp5", label: "Zerebrale Krampfanfälle" }
        ]
      },
      {
        id: "prog",
        label: "Prognose",
        children: [
          { id: "prog1", label: "40% Mortalität in 30 Tagen" },
          { id: "prog2", label: "25% schwere Behinderung" },
          { id: "prog3", label: "Rezidivblutung: Letalität >50%" }
        ]
      }
    ]
  };
  
  // Funktion zur Transformation der Daten für die Listenansicht
  const transformForList = (node) => {
    return {
      ...node,
      expanded: false,
      children: node.children ? node.children.map(transformForList) : []
    };
  };
  
  export const subarachnoidListData = transformForList(subarachnoidMindMap);