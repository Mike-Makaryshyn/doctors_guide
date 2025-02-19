export default {
  path: "citrat",
  // http://localhost:5173/trafarette/citrat
  content: [
    {
      id: 1,
      title: "Citrat",
      childTabs: [
        //  Start of child tab 1
        {
          "id": 1,
          "title": "1. Definition",
          "textWithFormatting": `<div>
            <h2>1. Definition</h2>
            <p>Citrate sind die ionische Form der Zitronensäure (C₃H₅O(COO)₃³⁻), die in Salzen und Estern vorkommt.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "2. Biochemie",
          "textWithFormatting": `<div>
            <h2>2. Biochemie</h2>
            <p>Citrat ist ein Zwischenprodukt im Kohlenhydratstoffwechsel und wird durch die ATP-Citrat-Lyase (ACL) zu Acetyl-CoA umgewandelt. Diese Umwandlung ist von zentraler Bedeutung für die Fettsäuresynthese und die Cholesterinbiosynthese.</p>
            <p><strong>Biologisch relevante Citrate:</strong></p>
            <ul>
              <li>• Natriumcitrat</li>
              <li>• Calciumcitrat</li>
            </ul>
          </div>`
        },
        {
          "id": 3,
          "title": "3. Labormedizin",
          "textWithFormatting": `<div>
            <h2>3. Labormedizin</h2>
            <p>Citrat wird als Chelator zur Antikoagulation von Blutproben in vitro eingesetzt.</p>
            
            <h3>Citrat im Urin</h3>
            <p>Die Bestimmung von Citrat im angesäuerten 24-h-Sammelurin dient der weiterführenden Diagnostik bei Nephro- bzw. Urolithiasis. Die Bewertung des Harnsteinrisikos ist jedoch nur zusammen mit anderen Parametern im Serum (Kreatinin, Harnsäure, Gesamteiweiß, PTH, Elektrolyte) bzw. im Urin (Urindichte, pH-Wert, Kalzium, Oxalat, Magnesium) sinnvoll.</p>
            <p>Citrat ist ein bedeutender Hemmstoff für die Harnsteinbildung, indem es Calcium im Harn zu Calciumcitrat bindet. Durch hohe Spiegel von Citrat im Urin wird das Risiko für die Bildung von Calciumoxalatsteinen herabgesetzt.</p>
            
            <h4>Referenzbereich</h4>
            <ul>
              <li>• Männer: 241 bis 531 mg/Tag</li>
              <li>• Frauen: 118 bis 929 mg/Tag</li>
            </ul>
            
            <h4>Interpretation</h4>
            <p>Citrat im Urin kann im Rahmen von verschiedenen Erkrankungen erniedrigt sein, hierzu zählen:</p>
            <ul>
              <li>• Chronische Diarrhö</li>
              <li>• Infektionen</li>
              <li>• Gastrektomie</li>
              <li>• Hypokaliämie</li>
              <li>• Chronische Niereninsuffizienz</li>
              <li>• Gabe von Thiaziddiuretika</li>
              <li>• Hohe Kochsalzzufuhr</li>
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
