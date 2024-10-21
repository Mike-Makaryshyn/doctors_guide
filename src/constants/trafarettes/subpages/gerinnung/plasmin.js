import img5 from "../../../../assets/Fibrinolyse.png";
export default {
  path: "plasmin",
  // http://localhost:5173/trafarette/plasmin
  content: [
    {
      id: 1,
      title: "Plasmin",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
           
            <p>Plasmin ist ein Enzym im Blutserum, das durch die Aktivierung seines Vorläuferproteins, <a href="/trafarette/plasminogen">des Plasminogens</a>, entsteht. Es spielt eine zentrale Rolle beim Abbau von <a href="/trafarette/faktorI">Fibrin</a>, indem es dieses in kleinere molekulare Einheiten spaltet.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Biochemie",
          "textWithFormatting": `<div>
            <img src="${img5}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Plasmin gehört zu den Serin-Proteasen, ähnlich wie Trypsin und Elastase, und wirkt als Endopeptidase. Es katalysiert die Hydrolyse von Peptidbindungen, wodurch Proteine in kleinere Peptide zerlegt werden.</p>
            <p>Die Aktivierung von Plasminogen zu Plasmin erfolgt durch verschiedene Faktoren wie tPA (tissue Plasminogen Activator), Kallikrein, Urokinase, Thrombin, <a href="/trafarette/faktorI">Fibrinogen</a> und <a href="/trafarette/faktorVII">Faktor VII (Prokonvertin)</a>. Zirkulierendes Plasmin wird durch Alpha2-Antiplasmin gehemmt. Im klinischen Bereich kann Plasmin mithilfe von Tranexamsäure gehemmt werden, um einer übermäßigen <a href="/trafarette/fibrinolyse">Fibrinolyse</a> entgegenzuwirken.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "3. Funktion",
          "textWithFormatting": `<div>
           
            <p>Plasmin spielt eine entscheidende Rolle bei der Auflösung von Blutgerinnseln durch die Spaltung von <a href="/trafarette/faktorI">Fibrin</a> und Fibrinogen. Dadurch entstehen Fibrinogenspaltprodukte, die die weitere Verknüpfung von Fibrinfasern und somit die Gerinnselbildung hemmen.</p>
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
