import img1 from "../../../../../assets/Blutgerinnung.png";
export default {
  path: "faktorIII",
  // http://localhost:5173/trafarette/faktorIII
  content: [
    {
      id: 1,
      title: "Faktor III (Gewebethromboplastin oder Tissue Factor)",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
          <p>Faktor III, auch Gewebefaktor genannt, ist ein Glykoprotein und gehört zur Gruppe der Gerinnungsfaktoren.</p></div>`
        },
        {
          id: 2,
          title: "2. Biochemie",
          textWithFormatting: `<div><p>Der Gewebefaktor zählt zur Familie der Zytokinrezeptoren und besteht aus drei Domänen:</p>
          <ul>
            <li><strong>Extrazelluläre Domäne:</strong> Diese besteht aus zwei Fibronectin-Modulen und interagiert mit aktiviertem Proconvertin (Faktor VIIa).</li>
            <li><strong>Transmembrandomäne:</strong> Sie durchdringt die Zellmembran.</li>
            <li><strong>Intrazelluläre Domäne:</strong> Diese ist 21 Aminosäuren lang und überträgt Signale ins Zellinnere.</li>
          </ul></div>`
        },
        {
          id: 3,
          title: "3. Genetik",
          textWithFormatting: `<div><p>Der Genlokus des F3-Gens befindet sich auf Chromosom 1 im Bereich p22-p21.</p></div>`
        },
        {
          id: 4,
          title: "4. Physiologie",
          textWithFormatting: `<div><p>Faktor III ist ein Bestandteil des extrinsischen Blutgerinnungssystems. Als Membranrezeptor für aktiviertes Proconvertin (Faktor VIIa) kommt er auf den Zellmembranen des subendothelialen Gewebes vor, wo er von Zellen exprimiert wird, die normalerweise nicht mit Blut in Berührung kommen (z. B. glatte Muskelzellen, Fibroblasten). Im Gegensatz zu vielen anderen Gerinnungsfaktoren ist der Gewebefaktor sofort biologisch aktiv.</p>
          <p>Der Faktor-III/VIIa-Komplex katalysiert die Umwandlung von inaktivem Stuart-Prower-Faktor (Faktor X) in aktivierten Faktor Xa. Faktor Xa wandelt wiederum Prothrombin (Faktor II) in Thrombin um, wodurch die Blutgerinnung eingeleitet wird. Zusätzlich aktiviert der III/VIIa-Komplex auch Faktor IX zu IXa, was den sogenannten Josso-Loop auslöst.</p></div>`
        },
        {
          id: 5,
          title: "5. Pathophysiologie",
          textWithFormatting: `<div><p>Bei Entzündungen können Leukozyten und Endothelzellen den Gewebefaktor exprimieren, wenn sie durch TNF-alpha aktiviert werden.</p>
          <p>Gewebefaktor wird auch von vielen soliden Tumoren exprimiert, wie beispielsweise bei Ovarial-, Prostata-, Blasen-, Ösophagus-, Endometrium- und Bronchialkarzinomen. Er spielt eine zentrale Rolle bei pathologischen Prozessen wie Tumorwachstum, Metastasierung und Neoangiogenese. Zudem können Tumorzellen Gewebefaktor-positive Mikropartikel freisetzen, die Thromboembolien im Blutkreislauf verursachen.</p></div>`
        },
        {
          id: 6,
          title: "6. Klinik",
          textWithFormatting: `<div><p>Ein Immunkonjugat namens Tisotumab-Vedotin, das den Gewebefaktor auf Tumorzellen als Zielstruktur nutzt, wird zur Zytostatikatherapie eingesetzt.</p></div>`
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
