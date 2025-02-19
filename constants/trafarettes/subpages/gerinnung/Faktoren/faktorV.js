import img1 from "../../../../../assets/Blutgerinnung.png";
export default {
  path: "faktorV",
  // http://localhost:5173/trafarette/faktorV
  content: [
    {
      id: 1,
      title: "Faktor V (Proakzelerin)",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Faktor V, auch Proaccelerin genannt, ist ein instabiles Plasmaprotein aus der Gruppe der α2-Globuline. Als wichtiger Bestandteil der Blutgerinnung fungiert er als Kofaktor im Gerinnungssystem, wobei er durch Thrombin aktiviert wird.</p>
          </div>`
        },
        {
          id: 2,
          title: "2. Physiologie",
          textWithFormatting: `<div>
            <p>Faktor V wird primär in der Leber, aber auch in Megakaryozyten und Endothelzellen gebildet. Im Blutplasma zirkuliert er mit einer Halbwertszeit von etwa 12 Stunden und einer Molekülmasse von ca. 330 kDa. Die Aktivierung erfolgt durch Thrombin und teilweise durch Faktor Xa, was zur Spaltung in zwei Molekülteile (110 kDa und 73 kDa) führt.</p>
            <p>Anders als viele Gerinnungsfaktoren ist Faktor V kein Enzym, sondern agiert in seiner aktiven Form (Faktor Va) als Kofaktor für Faktor X, der Prothrombin zu Thrombin umwandelt.</p>
            <p>Der Abbau von Faktor V geschieht durch das aktivierte Protein C (APC), welches einen wesentlichen Mechanismus zur Hemmung der Blutgerinnung darstellt.</p>
          </div>`
        },
        {
          id: 3,
          title: "3. Genetik",
          textWithFormatting: `<div>
            <p>Das Gen für Faktor V, das <strong>F5-Gen</strong>, liegt auf Chromosom 1, Genlokus 1q23. Es umfasst etwa 70 kb und besteht aus 25 Exons.</p>
          </div>`
        },
        {
          id: 4,
          title: "4. Referenzbereich",
          textWithFormatting: `<div>
            <p>Der Normwert von Faktor V im Blutplasma beträgt ca. 10 mg/l bzw. 60-120%. Ein verminderter Faktor V führt zu einem niedrigeren Quick-Wert und einer verlängerten aktivierten partiellen Thromboplastinzeit (PTT).</p>
            <p><em>Hinweis:</em> Referenzwerte können je nach Labor variieren. Maßgeblich sind die Referenzwerte des durchführenden Labors.</p>
          </div>`
        },
        {
          id: 5,
          title: "5. Klinik",
          textWithFormatting: `<div>
            <p>Mutationen im F5-Gen können zu Faktor-V-Mangel oder Fehlfunktionen des Proteins führen.</p>
            <ul>
              <li>• <strong>Hämophilie durch Faktor-V-Mangel:</strong> Dies wird auch als Parahämophilie oder Owren-Syndrom bezeichnet.</li>
              <li>• <strong>Thrombophilie durch Faktor-V-Mutationen mit APC-Resistenz:</strong> Beispiele sind Faktor-V-Leiden, Faktor-V-Cambridge und Faktor-V-Hong Kong.</li>
            </ul>
            <p>Zusätzlich kann eine Leberzirrhose einen Faktor-V-Mangel hervorrufen. Ein Abfall von Faktor V gilt zudem als Frühindikator einer disseminierten intravasalen Koagulation (DIC). Seltene Fälle von kombiniertem Faktor-V- und Faktor-VIII-Mangel wurden ebenfalls beschrieben.</p>
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
