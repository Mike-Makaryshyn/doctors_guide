import img1 from "../../../../../assets/Blutgerinnung.png";
export default {
  path: "faktorVIII",
  // http://localhost:5173/trafarette/faktorVIII
  content: [
    {
      id: 1,
      title: "Faktor VIII (Antihämophiles Globulin A)",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Faktor VIII, auch bekannt als antihämophiles Globulin A, ist ein essenzieller Bestandteil der Blutgerinnung. Er gehört zum intrinsischen Gerinnungssystem. Ein Mangel an Faktor VIII führt zu <a href="/trafarette/haemophiliaa">Hämophilie A</a>, während ein Überschuss die Bildung von Thromben fördert, was das Risiko für Venenthrombosen und Lungenembolien erhöht.</p>
          </div>`
        },
        {
          id: 2,
          title: "2. Biosynthese",
          textWithFormatting: `<div>
            <p>Die Biosynthese von Faktor VIII ist noch nicht vollständig erforscht. Es wird angenommen, dass das Protein im Gefäßendothel und in den Lebersinusoiden gebildet und in Leber sowie Niere abgebaut wird. Faktor VIII besteht aus einer schweren und einer leichten Kette und wird durch das <strong>F8-Gen</strong> kodiert. Im Blut ist es meist an den von-Willebrand-Faktor gebunden, mit dem es einen Komplex bildet.</p>
          </div>`
        },
        {
          id: 3,
          title: "3. Gerinnungskaskade",
          textWithFormatting: `<div>
            <p>Bei Kontakt von Faktor XII mit einer negativ geladenen Oberfläche werden die Faktoren XI und IX aktiviert. Faktor IX bildet einen Enzymkomplex mit Phospholipiden und Kalzium, der wiederum Faktor X aktiviert. Diese Aktivierung wird durch Faktor VIII beschleunigt, der durch Thrombin weiter aktiviert wird.</p>
          </div>`
        },
        {
          id: 4,
          title: "4. Pharmakologie",
          textWithFormatting: `<div>
            <p>Antihämophiles Globulin A wird zur Behandlung von <a href="/trafarette/haemophiliaa">Hämophilie A</a> eingesetzt. Es kann entweder aus humanem Spenderplasma gewonnen oder gentechnisch hergestellt werden. Die Verabreichung erfolgt intravenös. Ein besonderes Problem stellt die Bildung von Antikörpern gegen Faktor VIII dar, die bei Patienten mit <a href="/trafarette/haemophiliaa">Hämophilie A</a> auftreten kann. Diese sogenannte Hemmkörperhämophilie führt trotz Verabreichung von Faktor VIII weiterhin zu Blutungen. Patienten werden je nach Antikörperkonzentration in <strong>Low-Responder</strong> und <strong>High-Responder</strong> eingeteilt.</p>
            <p>Zu den rekombinanten Faktor-VIII-Präparaten gehören unter anderem:</p>
            <ul>
              <li>Damoctocog alfa pegol</li>
              <li>Eptacog alfa</li>
              <li>Turoctocog alfa</li>
              <li>Efanesoctocog alfa</li>
            </ul>
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
