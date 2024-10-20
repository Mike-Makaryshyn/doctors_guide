import img1 from "../../../../../assets/Blutgerinnung.png";
export default {
  path: "faktorII",
  // http://localhost:5173/trafarette/faktorII
  content: [
    {
      id: 1,
      title: "Faktor II (Prothrombin)",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Prothrombin, auch als Faktor II bekannt, ist ein wichtiger Gerinnungsfaktor, der eine zentrale Rolle bei der Blutgerinnung (sekundäre Hämostase) spielt. Es handelt sich um eine inaktive Vorstufe des Enzyms Thrombin, die in der Leber unter Beteiligung von Vitamin K synthetisiert wird. Durch die Aktivierung des Prothrombins durch den sogenannten Prothrombinaktivator entsteht Thrombin, das wiederum weitere Schritte der Gerinnungskaskade auslöst.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Genetische Defekte",
          "textWithFormatting": `<div>
      
            <p>Genetische Veränderungen im Prothrombin-Gen, wie Mutationen, können das Risiko für Thrombosen und Embolien erhöhen. Eine der häufigsten Mutationen ist die Prothrombinmutation G20210A, die als bedeutender genetischer Risikofaktor für die Bildung von Blutgerinnseln gilt.</p>
          </div>`
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
