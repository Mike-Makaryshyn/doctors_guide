export const headacheMindMap = {
    id: "headache",
    label: "Болі голови",
    children: [
      {
        id: "primary",
        label: "Первинні болі",
        children: [
          { id: "migraine", label: "Мігрень" },
          { id: "tension", label: "Напруга" }
        ]
      },
      {
        id: "secondary",
        label: "Вторинні болі",
        children: [
          { id: "trauma", label: "Травма" },
          { id: "infection", label: "Інфекції" }
        ]
      },
      {
        id: "cluster",
        label: "Кластерні болі",
        children: [
          { id: "cluster1", label: "Кластер 1" },
          { id: "cluster2", label: "Кластер 2" }
        ]
      },
      {
        id: "sinus",
        label: "Синусові болі",
        children: [
          { id: "sinus1", label: "Синус 1" },
          { id: "sinus2", label: "Синус 2" }
        ]
      },
      {
        id: "other",
        label: "Інші болі",
        children: [
          { id: "other1", label: "Інший тип 1" },
          { id: "other2", label: "Інший тип 2" }
        ]
      }
    ]
  };
  // Функція трансформації для спискового відображення
const transformForList = (node) => {
    return {
      ...node,
      expanded: false,
      children: node.children ? node.children.map(transformForList) : []
    };
  };
  
  // Константа з даними для спискового відображення
  export const headacheListData = transformForList(headacheMindMap);