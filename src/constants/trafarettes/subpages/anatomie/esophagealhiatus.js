import "./esophagealhiatus.css";

export default {
  path: "esophagealhiatus",
  folder: "anatomie",
  content: [
    {
      id: 1,
      title: "Hiatus oesophageus",
      childTabs: [
        {
          id: 1,
          title: "Definition",
          textWithFormatting: `<div class="hiatus-container"><p>Der Hiatus oesophageus ist die muskulär-fibröse Öffnung im Zwerchfell, durch die der Ösophagus sowie die zugehörigen Vagusnerven vom Brust- in den Bauchraum ziehen.</p></div>`
        },
        {
          id: 2,
          title: "Anatomie",
        
          component: "DetailedEsophagealCanal3D",
          textWithFormatting: `<div class="hiatus-container">
  <p><strong>Lage:</strong> Der Hiatus liegt im Pars lumbalis des Zwerchfells, gebildet von den Crura diaphragmatica. Er befindet sich typischerweise auf Höhe des 10. Brustwirbels (Th10).</p>
  <p><strong>Grenzen:</strong></p>
  <ul>
    <li><strong>Lateral:</strong> Crus dextrum und sinistrum bilden die Schenkel des Hiatus.</li>
    <li><strong>Ventral:</strong> Fascia diaphragmatica.</li>
    <li><strong>Dorsal:</strong> Ligamentöse Fasern des Zwerchfells.</li>
  </ul>
</div>`
        },
        {
          id: 3,
          title: "Embryologie",
          textWithFormatting: `<div class="hiatus-container"><p>Im Embryo entsteht der Hiatus oesophageus während der Ausbildung des Zwerchfells aus dem Septum transversum und den pleuroperitonealen Membranen, wobei die Crura aus den Lendenwirbelsäulen entspringen.</p></div>`
        },
        {
          id: 4,
          title: "Klinik",
          textWithFormatting: `<div class="hiatus-container"><p>Eine Erweiterung des Hiatus kann zur Ausbildung einer Hiatushernie führen. Typische Symptome sind Reflux, retrosternale Schmerzen und Dysphagie.</p></div>`
        }
      ]
    },
    {
      id: 2,
      title: "Fragen",
      questions: [
        {
          title: "Welche Strukturen durchqueren den Hiatus oesophageus?",
          answers: [
            { name: "Ösophagus und Truncus vagalis anterior und posterior", isCorrect: true },
            { name: "Aorta abdominalis", isCorrect: false },
            { name: "Vena cava inferior", isCorrect: false }
          ]
        },
        {
          title: "Aus welchen Fasern wird der Hiatus hauptsächlich gebildet?",
          answers: [
            { name: "Crus sinistrum und dextrum des Zwerchfells", isCorrect: true },
            { name: "Musculus quadratus lumborum", isCorrect: false },
            { name: "Musculus psoas major", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        { title: "Der Hiatus oesophageus befindet sich auf Höhe Th10.", hidden_answer: "Ja – typischerweise auf Höhe des 10. Brustwirbels." },
        { title: "Nur der Ösophagus zieht durch den Hiatus oesophageus.", hidden_answer: "Nein – auch die Vagusnerven begleiten ihn." }
      ]
    }
  ]
};
