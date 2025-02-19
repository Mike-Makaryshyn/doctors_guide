export default {
  path: "proteinc",
  // http://localhost:5173/trafarette/proteinc
  content: [
    {
      id: 1,
      title: "Protein C",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Protein C ist eine <a href="/trafarette/vitamink">Vitamin-K</a>-abhängige Protease, die in der Leber synthetisiert wird. Nach Aktivierung durch Thrombin (mit Unterstützung von Protein S) inaktiviert Protein C die Gerinnungsfaktoren Va und VIIIa. Dadurch wird die Gerinnung gehemmt und die Fibrinolyse gefördert.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Biochemie",
          textWithFormatting: `<div>
            <p>Thrombin bindet an Thrombomodulin auf den Endothelzellen der Blutgefäße und aktiviert Protein C zu aktiviertem Protein C (aPC). Aktiviertes Protein C hat eine zentrale Rolle in der Antikoagulation, insbesondere im Zusammenhang mit Vitamin-K-Antagonisten.</p>
            <p>Es hat eine kürzere Halbwertszeit (ca. 6 Stunden) im Vergleich zu anderen Vitamin-K-abhängigen Gerinnungsfaktoren (z.B. Faktor II, VII, IX, X, die eine Halbwertszeit von bis zu 60 Stunden haben). Zu Beginn einer Antikoagulationstherapie mit Vitamin-K-Antagonisten wie Cumarinen wird die Wirkung von Protein C zuerst vermindert, was zu einer erhöhten Thrombosegefahr führen kann. Daher wird häufig Heparin als unterstützende Maßnahme eingesetzt.</p>
          </div>`,
        },
        {
          id: 3,
          title: "3. Wirkungen",
          textWithFormatting: `<div>
            <p>Aktiviertes Protein C übt drei Hauptwirkungen aus:</p>
            <ul>
              <li>• <strong>Antikoagulativ:</strong> Spaltung und Inaktivierung der Gerinnungsfaktoren Va und VIIIa im Komplex mit Protein S.</li>
              <li>• <strong>Profibrinolytisch:</strong> Hemmung des Plasminogen-Aktivator-Inhibitors Typ 1 (PAI-1), was die Fibrinolyse fördert.</li>
              <li>• <strong>Antiinflammatorisch:</strong> Hemmung der TNF-alpha-Synthese durch Blockierung der Aktivierung des Transkriptionsfaktors NF-κB.</li>
            </ul>
          </div>`,
        },
        {
          id: 4,
          title: "4. Pharmakologie",
          textWithFormatting: `<div>
            <p>Eine rekombinante Form des aktivierten Protein C, <strong>Drotrecogin alpha</strong> (Handelsname: Xigris®), wurde früher in der Intensivmedizin zur Behandlung schwerer Sepsis eingesetzt. Aufgrund mangelnden Nutzens wurde das Präparat 2011 nach der PROWESS-SHOCK-Studie vom Markt genommen.</p>
          </div>`,
        },
        {
          id: 5,
          title: "5. Labormedizin",
          textWithFormatting: `<div>
            <p>Die Bestimmung der Protein-C-Aktivität ist insbesondere bei der Abklärung von Thrombophilie sowie zur Überwachung einer Substitutionstherapie indiziert. Dabei kommen zwei Verfahren zum Einsatz: der <strong>Protein-C-Gerinnungstest</strong> (eine aPTT-Variante) und Tests mit chromogenem Substrat.</p>
            
            <h4>Material</h4>
            <p>Für die Bestimmung der Protein-C-Aktivität wird 1 ml Citratblut benötigt. Wichtig ist, dass das Blutentnahmeröhrchen vollständig bis zur Markierung gefüllt wird.</p>
            
            <h4>Normbereiche</h4>
            <h5>Protein-C-Aktivität</h5>
            <table>
              <tr>
                <th>Klientel</th>
                <th>Alter</th>
                <th>Normbereich [%]</th>
              </tr>
              <tr>
                <td>Kinder</td>
                <td>1. Lebenstag</td>
                <td>26–44</td>
              </tr>
              <tr>
                <td></td>
                <td>5. Lebenstag</td>
                <td>31–53</td>
              </tr>
              <tr>
                <td></td>
                <td>1 Monat</td>
                <td>32–54</td>
              </tr>
              <tr>
                <td></td>
                <td>3 Monate</td>
                <td>41–67</td>
              </tr>
              <tr>
                <td></td>
                <td>6 Monate</td>
                <td>48–70</td>
              </tr>
              <tr>
                <td>Kinder über 1 Jahr</td>
                <td></td>
                <td>70–140</td>
              </tr>
              <tr>
                <td>Erwachsene</td>
                <td></td>
                <td>70–140</td>
              </tr>
            </table>
            
            <h5>Protein-C-Konzentration</h5>
            <p>Der Normbereich der Protein-C-Konzentration liegt bei Erwachsenen zwischen 2 und 6 mg/l.</p>
            
            <h4>5.3. Interpretation</h4>
            <p>Eine erniedrigte Protein-C-Aktivität ist mit einem erhöhten Risiko für Thrombosen und Thromboembolien assoziiert. Ursachen können sein:</p>
            <ul>
              <li>• <strong>Hereditärer Protein-C-Mangel:</strong> Heterozygot (20–70 % Aktivität), homozygot (unter 1 % Aktivität, Purpura fulminans bei Neugeborenen).</li>
              <li>• <strong>Erworbener Protein-C-Mangel:</strong> Vitamin-K-Mangel, Leberzirrhose, Verbrauch von Gerinnungsfaktoren (DIC, Sepsis, Trauma, ARDS, Niereninsuffizienz).</li>
            </ul>
            <p>Eine erhöhte Protein-C-Aktivität ist in der Regel diagnostisch nicht relevant, kann aber durch orale Kontrazeptiva oder eine Schwangerschaft verursacht werden.</p>
            <p>Falsch hohe Werte können durch hohe Heparinkonzentrationen oder Lupus-Antikoagulantien entstehen. Falsch niedrige Werte treten bei hohen Faktor-VIII-Konzentrationen auf.</p>
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
