// Atemmuster MindMap
export const atemmusterMindMap = {
    id: "atemmuster",
    label: "Atemmuster",
    children: [
      // Definition
 
      // Einteilung
      {
        id: "einteilung",
        label: "Einteilung",
        children: [
          {
            id: "frequenz",
            label: "Nach Frequenz",
            children: [
              { id: "bradypnoe", label: "Bradypnoe – langsam" },
              { id: "tachypnoe", label: "Tachypnoe – schnell" }
            ]
          },
          {
            id: "tiefe",
            label: "Nach Atemtiefe",
            children: [
              { id: "flach", label: "Flach – oberflächlich" },
              { id: "tief", label: "Tief – vertieft" }
            ]
          }
        ]
      },
      // Pathologische Atemmuster
      {
        id: "patho",
        label: "Pathologische Atemmuster",
        children: [
          {
            id: "cheyne_stokes",
            label: "Cheyne-Stokes",
            children: [
              { id: "cheyne_merkmal1", label: "Periodisch" },
              { id: "cheyne_merkmal2", label: "Apnoe-Phasen" }
            ]
          },
          {
            id: "biot",
            label: "Biot",
            children: [
              { id: "biot_merkmal1", label: "Unregelmäßig" },
              { id: "biot_merkmal2", label: "Plötzliche Apnoe" }
            ]
          },
          {
            id: "kussmaul",
            label: "Kußmaul",
            children: [
              { id: "kussmaul_merkmal1", label: "Tief" },
              { id: "kussmaul_merkmal2", label: "Regelmäßig" }
            ]
          },
          {
            id: "apneustisch",
            label: "Apneustisch",
            children: [
              { id: "apneustisch_merkmal1", label: "Langes Einatmen" },
              { id: "apneustisch_merkmal2", label: "Atemstillstand" }
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
  
  export const atemmusterListData = transformForList(atemmusterMindMap);
  