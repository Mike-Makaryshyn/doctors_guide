export default {
  path: "uicc",
  // http://localhost:5173/trafarette/uicc
  content: [
    {
      id: 1,
      title: "UICC-Einteilung",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p>Die UICC-Einteilung ist ein von der Union Internationale Contre le Cancer (UICC) entwickeltes System zur Klassifikation und Stadienbestimmung von Tumorerkrankungen. Die Einordnung erfolgt nach der TNM-Klassifikation und teilt die Erkrankung in eines von fünf Stadien ein.</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Einteilung",
          textWithFormatting: `<div>
            <p>Die genaue UICC-Stadieneinteilung variiert je nach Tumorart. Beispielsweise kann ein Tumor mit nur einer Lymphknotenmetastase in manchen Fällen als Stadium IIb klassifiziert werden. Die folgende Übersicht gibt allgemeine Richtlinien wieder, eignet sich jedoch nicht zur individuellen Klassifikation von Tumoren.</p>
            <table>
              <thead>
                <tr>
                  <th>UICC-Stadium</th>
                  <th>Tumorgröße</th>
                  <th>Lymphknotenbefall</th>
                  <th>Fernmetastasen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stadium 0</td>
                  <td>nicht-invasive Tumoren (z.B. Carcinoma in situ)</td>
                  <td>kein Lymphknotenbefall</td>
                  <td>keine Fernmetastasen</td>
                </tr>
                <tr>
                  <td>Stadium I</td>
                  <td>kleine Tumoren</td>
                  <td>kein Lymphknotenbefall</td>
                  <td>keine Fernmetastasen</td>
                </tr>
                <tr>
                  <td>Stadium II</td>
                  <td>mittelgroße bis große Tumoren</td>
                  <td>kein Lymphknotenbefall</td>
                  <td>keine Fernmetastasen</td>
                </tr>
                <tr>
                  <td>Stadium III</td>
                  <td>Tumoren jeder Größe</td>
                  <td>regionaler Lymphknotenbefall</td>
                  <td>keine Fernmetastasen</td>
                </tr>
                <tr>
                  <td>Stadium IV</td>
                  <td>Tumoren jeder Größe</td>
                  <td>regionaler Lymphknotenbefall</td>
                  <td>Fernmetastasen vorhanden</td>
                </tr>
              </tbody>
            </table>
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
