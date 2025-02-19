import img1 from "../../../../../assets/Blutgerinnung.png";
export default {
  path: "faktorIV",
  // http://localhost:5173/trafarette/faktorIV,
  content: [
    {
      id: 1,
      title: "Faktor IV (Kalzium-Ionen)",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 3,
          "title": "1. Definition",
          "textWithFormatting": `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Calcium ist ein chemisches Element mit dem Symbol Ca und der Ordnungszahl 20. Im menschlichen Körper sind etwa 99 % des Calciums in Zähnen und Knochen gespeichert. Bei einem Calciummangel kann es aus den Knochen freigesetzt werden und für andere physiologische Prozesse genutzt werden. Calcium spielt eine entscheidende Rolle in der Erregung von Muskeln und Nerven, im Glykogenstoffwechsel, im Komplementsystem sowie besonders in der Blutgerinnung.</p>
          </div>`
        },
        {
          "id": 4,
          "title": "2. Beschreibung",
          "textWithFormatting": `<div>
            <p>Calcium ist von großer Bedeutung für die Aktivierung von Vitamin-K-abhängigen Gerinnungsfaktoren (Faktor II, VII, IX, X = F2, F7, F9, F10). Diese Faktoren werden erst nach einer posttranslationalen Modifikation, bei der N-terminale Glutaminsäurereste in γ-Carboxyglutaminsäurereste (Gla) umgewandelt werden, in die Lage versetzt, Calcium (Ca²⁺) zu binden. Die Bindung von Calcium führt zu einer Konformationsänderung dieser Gerinnungsfaktoren, wodurch deren Bindung an Phospholipidmembranen, wie denen der Thrombozyten, erleichtert wird.</p>
            <p>Calcium ist ein zentraler Bestandteil der drei wichtigsten membrangebundenen Enzymkomplexe der Blutgerinnung:</p>
            <ul>
              <li>• Intrinsische Tenase: F9a-F8a-PL-Ca²⁺.</li>
              <li>• Extrinsische Tenase: F7a-TF (Tissue Factor)-PL-Ca²⁺.</li>
              <li>• Prothrombinase-Komplex: F10a-F5a-PL-Ca²⁺.</li>
            </ul>
            <p>In diesen Komplexen spielt Calcium eine entscheidende Rolle für die Aktivierung und Funktion der Gerinnungskaskade.</p>
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
