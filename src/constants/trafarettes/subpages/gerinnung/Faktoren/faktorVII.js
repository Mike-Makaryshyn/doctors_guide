import img1 from "../../../../../assets/Blutgerinnung.png";
export default {
  path: "faktorVII",
  // http://localhost:5173/trafarette/faktorVII
  content: [
    {
      id: 1,
      title: "Faktor VII (Prokonvertin)",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Faktor VII, auch als Proconvertin bekannt, gehört zu den in der Leber produzierten Gerinnungsfaktoren. Für seine endgültige Synthese ist Vitamin K notwendig. Faktor VII zählt zu den β-Globulinen, wobei seine aktivierte Form als Faktor VIIa (Convertin) bezeichnet wird.</p>
          </div>`
        },
        {
          id: 2,
          title: "2. Biochemie",
          textWithFormatting: `<div>
            <p>Faktor VII hat eine molekulare Masse von etwa 59 kDa und ähnelt strukturell den Gerinnungsfaktoren IX und X. Es besteht aus vier Proteindomänen:</p>
            <ul>
              <li>einer Gla-Domäne,</li>
              <li>zwei EGF-ähnlichen Domänen,</li>
              <li>einer Trypsin-ähnlichen Peptidase-Domäne am C-Terminus, die für die katalytische Spaltung nachgeschalteter Faktoren verantwortlich ist.</li>
            </ul>
            <p>Seine biologische Halbwertzeit beträgt 2 bis 5 Stunden.</p>
          </div>`
        },
        {
          id: 3,
          title: "3. Genetik",
          textWithFormatting: `<div>
            <p>Das F7-Gen, das für die Synthese von Faktor VII kodiert, befindet sich auf Chromosom 13 am Genlokus 13q34.</p>
          </div>`
        },
        {
          id: 4,
          title: "4. Funktion",
          textWithFormatting: `<div>
            <p>Faktor VII ist ein zentraler Bestandteil des extrinsischen Weges der plasmatischen Gerinnung. Bei Gewebsverletzungen wird es durch Gewebsthromboplastin aktiviert (Faktor VIIa) und wirkt als Serinprotease. Zusammen mit Gewebsthromboplastin, Calcium und negativ geladenen Phospholipiden bildet Faktor VIIa einen Komplex, der die Gerinnungsfaktoren IX und X aktiviert. Dies leitet die Gerinnungskaskade ein, die schließlich zur Bildung von Fibrin führt, was die Wundheilung durch irreversible Vernetzung von Fibrin unterstützt.</p>
          </div>`
        },
        {
          id: 5,
          title: "5. Hemmung",
          textWithFormatting: `<div>
            <p>In vivo wird die Aktivität von Faktor VIIa durch den Tissue Factor Pathway Inhibitor (TFPI), der von Endothelzellen und Thrombozyten freigesetzt wird, gehemmt.</p>
          </div>`
        },
        {
          id: 6,
          title: "6. Klinik",
          textWithFormatting: `<div>
            <p>Ein Mangel an Faktor VII (Hypoproconvertinämie) kann entweder erworben oder angeboren sein:</p>
            <ul>
              <li>Erworbene Mängel treten beispielsweise bei Vitamin-K-Mangel, Leukämie oder Lebererkrankungen auf.</li>
              <li>Die angeborene Form, die autosomal-rezessiv vererbt wird, führt zu einer hereditären hämorrhagischen Diathese.</li>
            </ul>
            <p>Da die Symptome der Hämophilie ähneln, wird diese Erkrankung auch als Parahämophilie B bezeichnet.</p>
          </div>`
        },
        {
          id: 7,
          title: "7. Labormedizin",
          textWithFormatting: `<div>
            <p>Die Aktivität von Faktor VII kann labortechnisch gemessen werden, wobei die Ergebnisse in Prozent der Normalaktivität angegeben werden. Ein Mangel an Faktor VII zeigt sich durch:</p>
            <ul>
              <li>eine verlängerte Prothrombinzeit (PTZ),</li>
              <li>einen niedrigen Quick-Wert bei normaler partieller Thromboplastinzeit (aPTT).</li>
            </ul>
            <p>Früh- und Neugeborene haben eine geringere Plasmakonzentration von Faktor VII, während sie bei Schwangeren im letzten Trimenon erhöht ist.</p>
          </div>`
        },
        {
          id: 8,
          title: "8. Pharmakologie",
          textWithFormatting: `<div>
            <p>Faktor VII ist als Immuseven® in Form eines Faktorenkonzentrats (600 IE), das aus menschlichem Plasma gewonnen wird, erhältlich. Darüber hinaus gibt es:</p>
            <ul>
              <li>Eptacog alfa (NovoSeven®), ein rekombinantes, aktiviertes Faktor-VII-Konzentrat (rFVIIa), das bei schweren Blutungen und Spezialindikationen, wie Hemmkörperhämophilie, zum Einsatz kommt,</li>
              <li>Faktor VII in Prothrombinkomplex-Konzentrat (PPSB) enthalten.</li>
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
