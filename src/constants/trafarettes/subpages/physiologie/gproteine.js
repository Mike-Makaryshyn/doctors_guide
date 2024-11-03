export default {
  path: "gproteine",
  // http://localhost:5173/trafarette/gproteine
  content: [
    {
      id: 1,
      title: "G-Protein",
      childTabs: [
        {
            "id": 1,
            "title": "1. Definition",
            "textWithFormatting": `<div>
                <p><b>G-Proteine</b> (oder GTPasen) sind intrazelluläre Proteine, die GDP und GTP binden können. Sie lassen sich in <b>heterotrimere G-Proteine</b> und <b>kleine G-Proteine</b> unterteilen. Ein gemeinsames Merkmal ist ihre hochkonservierte G-Domäne.</p>
            </div>`
        },
        {
            "id": 2,
            "title": "2. Biochemie",
            "textWithFormatting": `<div>
                <p>Die Hydrolyse von GTP zu GDP und anorganischem Phosphat ist eine <b>nukleophile Substitution (SN2-Reaktion)</b>, die <b>Magnesiumionen</b> benötigt.</p>
            </div>`
        },
        {
            "id": 3,
            "title": "3. Heterotrimere G-Proteine",
            "textWithFormatting": `<div>
                <p>Diese bestehen aus einer <b>α- und einer βγ-Untereinheit</b> und werden durch <b>G-Protein-gekoppelte Rezeptoren (GPCRs)</b> aktiviert, wodurch sie Signalweiterleitungen in der Zelle initiieren.</p>
            </div>`
        },
        {
            "id": 4,
            "title": "3.1. Molekularer Mechanismus",
            "textWithFormatting": `<div>
                <p>Im inaktiven Zustand sind die beiden Untereinheiten an der Zellmembran gebunden, und die <b>α-Untereinheit</b> trägt GDP. Nach Ligandenbindung am Rezeptor tauscht die α-Untereinheit GDP gegen GTP (unterstützt durch einen <b>Guanine nucleotide Exchange Factor (GEF)</b>), woraufhin sich die Untereinheiten trennen und aktiv werden. Die α-Untereinheit interagiert dann mit Effektormolekülen und aktiviert nachgeschaltete Signalwege. Durch ihre eigene GTPase-Aktivität wird GTP zu GDP hydrolysiert, was zur Inaktivierung und zum Wiederzusammenschluss der Untereinheiten führt. Die Dephosphorylierung kann durch <b>GTPase-aktivierende Proteine (GAPs)</b> beschleunigt werden.</p>
            </div>`
        },
        {
            "id": 5,
            "title": "3.2. Systematik",
            "textWithFormatting": `<div>
                <p>Es gibt über 20 Isoformen von trimere G-Proteinen, die in etwa fünf Familien unterteilt werden:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Familie</th>
                            <th>α-Untereinheit</th>
                            <th>Signalkaskade</th>
                            <th>Beispiele</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gt</td>
                            <td>αt</td>
                            <td>cGMP-Phosphodiesterase</td>
                            <td>Photorezeptoren (Auge)</td>
                        </tr>
                        <tr>
                            <td>Golf</td>
                            <td>αolf</td>
                            <td>Aktivierung der Adenylatzyklase</td>
                            <td>Riechepithel</td>
                        </tr>
                        <tr>
                            <td>Gs</td>
                            <td>αs</td>
                            <td>Aktivierung der Adenylatzyklase</td>
                            <td>Beta-Adrenozeptoren</td>
                        </tr>
                        <tr>
                            <td>Gi</td>
                            <td>αi, αo</td>
                            <td>Hemmung der Adenylatzyklase; Kalium-Kanal-Öffnung</td>
                            <td>α2-Adrenozeptoren</td>
                        </tr>
                        <tr>
                            <td>Gq</td>
                            <td>αq, α11, α14, α15, α16</td>
                            <td>Aktivierung der Phospholipase Cβ</td>
                            <td>α1-Adrenozeptoren</td>
                        </tr>
                        <tr>
                            <td>G12/13</td>
                            <td>α12, α13</td>
                            <td>Aktivierung von Rho (Zytoskelett-Regulation)</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            "id": 6,
            "title": "4. Kleine G-Proteine",
            "textWithFormatting": `<div>
                <p><b>Kleine G-Proteine</b> (20-40 kDa), auch als „kleine GTPasen“ bekannt, sind monomere GTP-bindende Proteine, die in der <b>Ras-Superfamilie</b> angesiedelt und in fünf Hauptgruppen unterteilt sind.</p>
            </div>`
        }
    ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
