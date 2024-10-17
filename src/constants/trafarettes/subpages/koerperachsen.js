import img2 from '../../../assets/achseall.png';
export default {
  path: "koerperachsen",
  // http://localhost:5173/trafarette/koerperachsen
  content: [
    {
      id: 1,
      title: "Körperachsen",

      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "Definition der Körperachsen",
          textWithFormatting: `
            <div>
            <img src="${img2}" alt="achseall" style="max-width: 60%; height: auto;">
              <p>Körperachsen sind gedachte Linien, die durch den menschlichen Körper verlaufen. Sie dienen in der Anatomie als Hilfsmittel, um die Lage und Ausrichtung anatomischer Strukturen zu beschreiben.</p>
              <p>Es gibt drei Hauptachsen, die durch den idealisierten Körperschwerpunkt des Körpers verlaufen. Diese entsprechen den bekannten X-, Y- und Z-Achsen der Geometrie:</p>
              <ul>
                <li><strong>Längsachse (Longitudinalachse)</strong>: Entspricht der Z-Achse, verläuft senkrecht von oben nach unten durch den Körper.</li>
                <li><strong>Querachse (Transversalachse)</strong>: Entspricht der X-Achse, verläuft horizontal von links nach rechts.</li>
                <li><strong>Sagittalachse</strong>: Entspricht der Y-Achse, verläuft von vorne nach hinten durch den Körper.</li>
              </ul>
              <p>Diese Achsen helfen bei der präzisen Beschreibung von Bewegungen und Positionen im menschlichen Körper.</p>
            </div>
          `,
        },
        {
          id: 2,
          title: "Longitudinalachse",
          textWithFormatting: `
            <div>
              <p>Die Longitudinalachse ist die Längsachse des menschlichen Körpers und entspricht der mathematischen Y-Achse bzw. der Vertikalachse. Sie verläuft von <strong>kranial</strong> (kopfwärts) nach <strong>kaudal</strong> (fußwärts) oder umgekehrt und wird daher auch als <strong>kraniokaudale Achse</strong> bezeichnet.</p>
            </div>
          `,
        },
        {
          id: 3,
          title: "Sagittalachse",
          textWithFormatting: `
            <div>
              <p>Die Sagittalachse durchbohrt den Körper in Pfeilrichtung von <strong>dorsal</strong> (rückwärts) nach <strong>ventral</strong> (bauchwärts) oder umgekehrt. Sie entspricht der Z-Achse und wird auch als <strong>dorsoventrale Achse</strong>, <strong>Pfeilachse</strong> oder <strong>Tiefenachse</strong> bezeichnet.</p>
            </div>
          `,
        },
        {
          id: 4,
          title: "Transversalachse",
          textWithFormatting: `
            <div>
              <p>Die Transversalachse verläuft von der <strong>linken</strong> zur <strong>rechten Körperhälfte</strong> (oder umgekehrt) und entspricht der X-Achse. Diese Achse wird auch als <strong>Links-Rechts-Achse</strong>, <strong>Horizontalachse</strong> oder <strong>Querachse</strong> bezeichnet. Beginnt man die Transversalachse gedanklich im Körperschwerpunkt (also auf der Sagittalebene), kann sie ebenfalls als <strong>mediolaterale Achse</strong> bezeichnet werden.</p>
            </div>
          `,
        },
        {
          id: 5,
          title: "Körperebenen",
          textWithFormatting: `
            <div>
              <p>Zwischen den drei Hauptachsen erstrecken sich die folgenden <strong>Körperebenen</strong>:</p>
              <ul>
                <li><strong>Frontalebene</strong>: Aufgespannt zwischen Longitudinalachse und Transversalachse.</li>
                <li><strong>Sagittalebene</strong>: Aufgespannt zwischen Longitudinalachse und Sagittalachse.</li>
                <li><strong>Transversalebene</strong>: Aufgespannt zwischen Transversalachse und Sagittalachse.</li>
              </ul>
            </div>
          `,
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
