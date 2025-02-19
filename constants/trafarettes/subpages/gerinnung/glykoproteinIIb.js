export default {
  path: "glykoproteinIIb",
  // http://localhost:5173/trafarette/glykoproteinIIb
  content: [
    {
      id: 1,
      title: "Glykoprotein IIb/IIIa",
      childTabs: [
        //  Start of child tab 1
        {
          id: 3,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Das Glykoprotein IIb/IIIa, auch bekannt als "Fibrinogen-Rezeptor", ist ein integrales Membranprotein, das zur Familie der Integrine gehört. Es befindet sich auf der Oberfläche aktivierter Thrombozyten und spielt eine zentrale Rolle bei der Blutgerinnung, indem es die Thrombozytenaggregation ermöglicht.</p>
          </div>`
        },
        {
          id: 4,
          title: "2. Biochemie",
          textWithFormatting: `<div>
            <p>Glykoprotein IIb/IIIa besteht aus zwei nicht-kovalent verbundenen Untereinheiten und bildet ein Heterodimer. Auf der Oberfläche eines Thrombozyten gibt es etwa 50.000 bis 80.000 solcher Rezeptoren. Das Gen, das für beide Untereinheiten codiert, befindet sich auf Chromosom 17. Ein Single Nucleotide Polymorphism (SNP) in der GPIIIa-Untereinheit ist verantwortlich für die Hauptthrombozytengruppe HPA-1.</p>
            <p>Das Glykoprotein kann Fibrinogen, <a href="/trafarette/vonwillebrant">von-Willebrand-Faktors (vWF)</a> und Fibronektin binden, was die Thrombozytenaggregation fördert. Damit es als Fibrinogen-Rezeptor aktiv wird, muss es eine Konformationsänderung durchlaufen. Diese wird durch die Bindung von vWF an das Glykoprotein Ib/IX/V (den von-Willebrand-Faktor-Rezeptor) ausgelöst.</p>
          </div>`
        },
        {
          id: 5,
          title: "3. Klinik",
          textWithFormatting: `<div>
            <p>Die pharmakologische Hemmung von GPIIb/IIIa wird in der Thrombozytenfunktionshemmung genutzt. Durch die Blockade des Rezeptors wird die Thrombozytenadhäsion und -aggregation verhindert, was bei der Prävention und Behandlung von thrombotischen Ereignissen wichtig ist.</p>
            <p>Eine angeborene Funktionsstörung dieses Glykoproteins führt zur Glanzmann-Thrombasthenie, einer seltenen Blutgerinnungsstörung, bei der die Thrombozytenaggregation beeinträchtigt ist.</p>
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
