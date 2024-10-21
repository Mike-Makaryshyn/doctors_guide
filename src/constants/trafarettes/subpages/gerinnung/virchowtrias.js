import img2 from "../../../../assets/virchowtrials.png";
export default {
  path: "virchowtrias",
  // http://localhost:5173/trafarette/virchowtrias
  content: [
    {
      id: 1,
      title: "Virchow-Trias",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
           <img src="${img2}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Die Virchow-Trias beschreibt die drei wesentlichen Faktoren, die zur Entstehung einer Thrombose, insbesondere einer tiefen Venenthrombose (Phlebothrombose), beitragen. Diese Faktoren umfassen:</p>
            <ul>
              <li><strong>Veränderungen an der Gefäßwand</strong> (Gefäßwand- bzw. Endothelschädigung)</li>
              <li><strong>Veränderungen der Blutströmung</strong> (Hypozirkulation oder Stase)</li>
              <li><strong>Veränderungen der Blutzusammensetzung</strong> (Hyperkoagulabilität)</li>
            </ul>
            <p>Neben der klassischen Virchow-Trias existiert auch eine weniger bekannte „Asthma-Trias“.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Endothelschädigung",
          textWithFormatting: `<div>
            <p>Eine Schädigung des Endothels gilt als der bedeutendste Faktor bei der Entstehung von Thrombosen, vor allem in den Arterien und im Herzen. Zu den möglichen Ursachen einer Endothelschädigung gehören:</p>
            <ul>
              <li><strong>Arteriosklerose</strong></li>
              <li><strong>Mechanische oder toxische Einflüsse</strong>, wie z.B.:
                <ul>
                  <li>• Hypertonie (Bluthochdruck)</li>
                  <li>• Traumatische Verletzungen</li>
                  <li>• Exogene Substanzen (Toxine, Strahlung, Medikamente, Nikotinabusus)</li>
                </ul>
              </li>
              <li><strong>Immunologische Reaktionen</strong>, wie bei Transplantatabstoßungen oder Immunkomplexerkrankungen</li>
              <li><strong>Entzündungen</strong>, wie Phlebitis, Arteriitis oder Endokarditis</li>
            </ul>
          </div>`,
        },
        {
          id: 3,
          title: "3. Störung der Hämodynamik",
          textWithFormatting: `<div>
            <p>Eine gestörte Hämodynamik, die vor allem Venen und das Herz betrifft, ist ein weiterer wesentlicher Faktor für die Thrombusbildung. Hierbei kommt es zu Turbulenzen durch eine gestörte Laminarströmung im Gefäß, die wiederum durch Scherkräfte zu Endothelschäden führen können. Durch die verlangsamte Blutströmung (Stase) erhöht sich das Thromboserisiko zusätzlich.</p>
          </div>`,
        },
        {
          id: 4,
          title: "4. Hyperkoagulabilität",
          textWithFormatting: `<div>
            <p>Die erhöhte Gerinnungsbereitschaft des Blutes, bekannt als Hyperkoagulabilität, kann vererbt oder erworben sein:</p>
            <ul>
              <li><strong>Vererbte Hyperkoagulabilität</strong>:
                <ul>
                  <li>• APC-Resistenz/Faktor-V-Leiden-Mutation</li>
                  <li>• Prothrombinmutation G20210A</li>
                  <li>• Hereditärer <a href="/trafarette/antithrombin">Antithrombin</a>-Mangel</li>
                  <li>• <a href="/trafarette/proteinc">Protein C</a>- und <a href="/trafarette/proteins">Protein S</a>-Mangel</li>
                  <li>• Fibrinolyse-Defekte</li>
                </ul>
              </li>
              <li><strong>Erworbene Hyperkoagulabilität</strong>:
                <ul>
                  <li>• Erhöhte Zellzahlen (z.B. durch Exsikkose)</li>
                  <li>• Störungen der Zellzusammensetzung (z.B. Thrombozytose)</li>
                  <li>• Veränderungen in der Plasmazusammensetzung</li>
                  <li>• Vorhandensein von Malignomen (bösartigen Tumoren)</li>
                </ul>
              </li>
            </ul>
          </div>`,
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
