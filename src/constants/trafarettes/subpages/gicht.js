export default {
   path: "hyperurikaemie",
   // http://localhost:5173/trafarette/gicht
   content: [
      {
         id: 1,
         title: "Gicht",
         hint: "Hyperuricaemia, Hyperurikämie, Hyperuricemia, Гіперурикемія, Гиперурикемия, Hiperürisemi, فرط حمض يوريك الدم Hyperuricémie, Hiperuricemia,, Hiperurykemia",
         code: "ICD 10: ",
         childTabs: [
            //  Start of child tab 1
            {
               id: 11,
               title: "1. Definition",
               textWithFormatting: `<div class="container">
    <h1>Drei-Säulen-Modell von Denis</h1>
    <div class="translations">
        <p>Burst fracture, Berstungsfraktur, Fractura por estallido, Взрывной перелом, Вибуховий перелом, Patlama kırığı, كسر انفجاري, Fracture par éclatement, Fratura por explosão, Złamanie wybuchowe</p>
    </div>
    <p>Zur detaillierten Beschreibung der bei einer Fraktur betroffenen Strukturen wird die Wirbelsäule nach dem Modell von Denis in drei Säulen unterteilt:</p>
    <ol>
        <li><strong>Ventrale Säule:</strong> Diese umfasst das vordere Längsband (Ligamentum longitudinale anterius) sowie die vorderen zwei Drittel der Wirbelkörper und Bandscheiben.</li>
        <li><strong>Mittlere Säule:</strong> Diese umfasst das hintere Drittel der Wirbelkörper und Bandscheiben sowie das hintere Längsband (Ligamentum longitudinale posterius).</li>
        <li><strong>Dorsale Säule:</strong> Diese umfasst die Wirbelbögen und -fortsätze sowie den dorsalen Bandapparat, einschließlich des Ligamentum supraspinale, der Ligamenta interspinalia und der Ligamenta flava.</li>
    </ol>
    <p>Wenn nur die ventrale Säule verletzt ist, wird dies als stabile Fraktur klassifiziert. Das Risiko für Instabilität steigt jedoch bei Verletzungen der mittleren oder dorsalen Säule. Verletzungen, bei denen mindestens zwei Säulen betroffen sind, gelten als instabile Frakturen.</p>
</div>`,
            },
            //  End of child tab 1
            //  Start of child tab 2
            {
               id: 12,
               title: "2. Hintergrund",
               textWithFormatting: `<div>
               <ul>
                  <li><strong>Primäre Hyperurikämie:</strong> Diese Form ist oft genetisch bedingt und resultiert aus einer angeborenen Störung des Purinstoffwechsels, was zu einer übermäßigen Produktion oder einer verminderten Ausscheidung von Harnsäure führt.</li>
                  <li><strong>Sekundäre Hyperurikämie:</strong> Diese Form wird durch andere Erkrankungen oder Zustände verursacht, wie z.B. chronische Nierenerkrankungen, bestimmte Medikamente, exzessiven Alkoholkonsum oder eine Ernährung, die reich an purinhaltigen Lebensmitteln ist.</li>
               </ul>
               <p>Hyperurikämie ist ein wichtiger Risikofaktor für die Entwicklung von Gicht, einer schmerzhaften Form der Arthritis, die durch die Ablagerung von Harnsäurekristallen in den Gelenken verursacht wird. Sie kann auch mit anderen Gesundheitsproblemen wie Bluthochdruck, Nierensteinen und Herz-Kreislauf-Erkrankungen in Verbindung stehen.</p>
            </div>`,
            },
            {
               id: 13,
               title: "2. Hintergrund",
               textWithFormatting: `<div>
                  <p>Wenn nur die ventrale Säule verletzt ist, wird dies als stabile Fraktur klassifiziert. Das Risiko für Instabilität steigt jedoch bei Verletzungen der mittleren oder dorsalen Säule. Verletzungen, bei denen mindestens zwei Säulen betroffen sind, gelten als instabile Frakturen.</p>
               </div>`,
            },
            {
               id: 14,
               title: "3. Epidemiologie",
               textWithFormatting: `<div>
                  <p>Wenn nur die ventrale Säule verletzt ist, wird dies als stabile Fraktur klassifiziert. Das Risiko für Instabilität steigt jedoch bei Verletzungen der mittleren oder dorsalen Säule. Verletzungen, bei denen mindestens zwei Säulen betroffen sind, gelten als instabile Frakturen.</p>
               </div>`,
            },
            //  End of child tab 2 (можна далі ще таби добавити якшо треба)
         ],
      },
      //  End of parent tab 1
      //  Start of parent tab 2
      {
         id: 2,
         title: "Tab_2 page 2",
         questions: [
            {
               title: `What is the capital of Ukraine?`,
               answers: [
                  { name: `Lisabon`, isCorrect: false },
                  { name: `Kiev`, isCorrect: true },
                  { name: `Minsk`, isCorrect: false },
               ],
            },
            {
               title: "What is the capital of the USA?",
               answers: [
                  { name: `Tokio`, isCorrect: false },
                  { name: `Washington DC`, isCorrect: true },
                  { name: `New York`, isCorrect: false },
               ],
            },
         ],
      },
      //  End of parent tab 2
      //  Start of parent tab 3
      {
         id: 3,
         title: "Tab_3 page 2",
         questions: [
            {
               title: `What is the capital of Ukraine?`,
               hidden_answer: `Kiev of course, you stupid creature.`,
            },
            {
               title: `What is the capital of the USA`,
               hidden_answer: `Man - it's Not New Your, for sure`,
            },
         ],
      },
      //  End of parent tab 3
   ],
};
