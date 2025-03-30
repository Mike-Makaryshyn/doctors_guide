// SAMPLE-Schema als MindMap
export const sampleMindMap = {
    id: "sample",
    label: "SAMPLE-Schema",
    children: [
      // Symptome (S)
      {
        id: "symptome",
        label: "Symptome (S)",
        children: [
          {
            id: "opqrst",
            label: "OPQRST-Schema",
            children: [
              {
                id: "onset",
                label: "Onset (Beginn)",
                children: [
                  { id: "onset_frage1", label: "Wann haben die Beschwerden begonnen?" },
                  { id: "onset_frage2", label: "Plötzlicher oder sukzessiver Beginn?" },
                  { id: "onset_frage3", label: "Was hat der Patient beim Beginn gemacht?" }
                ]
              },
              {
                id: "provocation",
                label: "Provocation/Palliation (Verstärkung/Linderung)",
                children: [
                  { id: "provocation_frage1", label: "Linderung oder Verstärkung der Beschwerden?" },
                  { id: "provocation_frage2", label: "Sind die Beschwerden lagerungsabhängig?" }
                ]
              },
              {
                id: "quality",
                label: "Quality (Charakter)",
                children: [
                  { id: "quality_frage1", label: "Wie fühlt sich der Schmerz an?" },
                  { id: "quality_frage2", label: "Stechend, dumpf, drückend oder brennend?" }
                ]
              },
              {
                id: "radiation",
                label: "Radiation (Ort/Ausstrahlung)",
                children: [
                  { id: "radiation_frage1", label: "Wo genau ist der Schmerz?" },
                  { id: "radiation_frage2", label: "Strahlt der Schmerz aus?" }
                ]
              },
              {
                id: "severity",
                label: "Severity (Stärke)",
                children: [
                  { id: "severity_frage1", label: "Schmerzstärke (1-10)?" }
                ]
              },
              {
                id: "time",
                label: "Time (Verlauf)",
                children: [
                  { id: "time_frage1", label: "Änderung im zeitlichen Verlauf?" },
                  { id: "time_frage2", label: "Schmerzspitze zu Beginn? (Zerreißungsschmerz)" },
                  { id: "time_frage3", label: "Zu- und abnehmend? (Kolikschmerz)" },
                  { id: "time_frage4", label: "Sukzessiv zunehmend? (Entzündungsschmerz)" }
                ]
              }
            ]
          }
        ]
      },
      // Allergien (A)
      {
        id: "allergien",
        label: "Allergien (A)",
        children: [
          { id: "allergien_frage", label: "Bekannte Allergien?" }
        ]
      },
      // Medikation (M)
      {
        id: "medikation",
        label: "Medikation (M)",
        children: [
          { id: "medikation_dauer", label: "Dauermedikation (z.B. Gerinnungshemmer)?" },
          { id: "medikation_vergessen", label: "Medikation vergessen?" },
          { id: "medikation_aktuell", label: "Kürzlich eingenommene Medikamente?" },
          { id: "medikation_drogen", label: "Drogenkonsum?" }
        ]
      },
      // Medizinische Vorgeschichte (P)
      {
        id: "vorgeschichte",
        label: "Medizinische Vorgeschichte (P)",
        children: [
          { id: "vorerkrankungen", label: "Relevante Vorerkrankungen?" },
          { id: "operationen", label: "Kürzliche Operationen?" }
        ]
      },
      // Letzte Nahrungsaufnahme (L)
      {
        id: "letzte_aufnahme",
        label: "Letzte Nahrungsaufnahme (L)",
        children: [
          { id: "nahrungsaufnahme", label: "Wann war die letzte Nahrungsaufnahme?" },
          { id: "stuhl_miktion", label: "Letzter Stuhlgang / Miktion? Schmerzen oder Auffälligkeiten?" }
        ]
      },
      // Ereignisse vor dem Vorfall (E)
      {
        id: "ereignisse",
        label: "Ereignisse vor dem Vorfall (E)",
        children: [
          { id: "ereignisse_vorfall", label: "Gab es auslösende Ereignisse?" }
        ]
      },
      // Risikofaktoren
      {
        id: "risikofaktoren",
        label: "Risikofaktoren",
        children: [
          { id: "risikogruppen", label: "Risikogruppen: Raucher, Diabetiker, etc.?" }
        ]
      },
      // Schwangerschaft
      {
        id: "schwangerschaft",
        label: "Schwangerschaft",
        children: [
          { id: "schwangerschaft_frage", label: "Besteht oder besteht die Möglichkeit einer Schwangerschaft?" }
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
  
  export const sampleListData = transformForList(sampleMindMap);
  