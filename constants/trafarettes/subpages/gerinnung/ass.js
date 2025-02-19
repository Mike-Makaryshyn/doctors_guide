import img1 from "../../../../assets/Thrombozytenaggregationshemmer.png";

export default {
  path: "ass",
  // http://localhost:5173/trafarette/ass
  content: [
    {
      id: 1,
      title: "ASS",
      childTabs: [
        //  Start of child tab 1
        {
          id: 1,
          title: "1. Definition",
          textWithFormatting: `<div>
            <p><b>Acetylsalicylsäure</b>, kurz ASS, gehört zu den nicht-steroidalen Antirheumatika (NSAR) und wirkt als Hemmer des Enzyms Cyclooxygenase (COX).</p>
          </div>`,
        },
        {
          id: 2,
          title: "2. Geschichte",
          textWithFormatting: `<div>
            <p>ASS wurde Ende des 19. Jahrhunderts von Felix Hoffmann entdeckt und wird seitdem unter dem Markennamen Aspirin® von Bayer vertrieben. Neben dem Markenprodukt sind auch zahlreiche Generika auf dem Markt erhältlich.</p>
          </div>`,
        },
        {
          id: 3,
          title: "3. Chemie",
          textWithFormatting: `<div>
            <p>Die chemische Summenformel von Acetylsalicylsäure lautet C₉H₈O₄, ihre molare Masse beträgt 180,2 g/mol, und ihr Schmelzpunkt liegt zwischen 141 und 144 °C. Acetylsalicylsäure ist ein weißes, kristallines Pulver oder farblose Kristalle mit saurem Geschmack, nahezu geruchlos und nur schwer in Wasser löslich, jedoch gut in Ethanol, Ether und Chloroform.</p>
          </div>`,
        },
        {
          id: 4,
          title: "4. Wirkmechanismus",
          textWithFormatting: `<div>
          <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <p>Acetylsalicylsäure entfaltet ihre Wirkung durch irreversible Hemmung der Cyclooxygenasen COX-1 und COX-2. Sie hat analgetische, antipyretische, antiphlogistische sowie thrombozytenaggregationshemmende Eigenschaften.</p>
            <p><b>Wirkung auf COX-1:</b> In niedrigen Dosen (ca. 100 mg/Tag) hemmt ASS bevorzugt COX-1, was die Produktion von Thromboxan A2 (TXA2) reduziert und die Thrombozytenaggregation hemmt. Dieser Effekt wird insbesondere zur Herzinfarktprophylaxe genutzt, da die Wirkung über die Lebensdauer der Thrombozyten (7-11 Tage) anhält.</p>
            <p><b>Wirkung auf COX-2:</b> Bei höheren Dosen hemmt ASS auch COX-2, das für die Bildung von Prostaglandinen verantwortlich ist, die Schmerz, Fieber und Entzündungen auslösen. Dadurch wirkt ASS schmerzlindernd und entzündungshemmend. Diese Wirkung hält etwa 6-8 Stunden an.</p>
          </div>`,
        },
        {
          id: 5,
          title: "5. Pharmakokinetik",
          textWithFormatting: `<div>
            <p>ASS wird nach oraler Einnahme schnell resorbiert. Ein Teil des Wirkstoffs wird bereits im Magen-Darm-Trakt zu Salicylsäure metabolisiert. Weitere Stoffwechselvorgänge finden in der Leber statt, wo Salicylsäure zu Glucuroniden und Gentisinsäure umgewandelt wird. Die Ausscheidung erfolgt überwiegend über die Nieren. ASS hat eine kurze Halbwertszeit von 15 Minuten, während die Salicylsäure dosisabhängig länger im Körper verbleibt (2-30 Stunden).</p>
            <p>Salicylsäure passiert die Plazenta, tritt in die Muttermilch über und kann im Liquor sowie in der Synovialflüssigkeit nachgewiesen werden.</p>
          </div>`,
        },
        {
          id: 6,
          title: "6. Indikationen",
          textWithFormatting: `<div>
            <ul>
              <li><b>Thrombozytenaggregationshemmung:</b>
                <ul>
                  <li>• Primärprophylaxe bei koronarer Herzkrankheit (KHK)</li>
                  <li>• Akutes Koronarsyndrom (z.B. instabile Angina pectoris, akuter Myokardinfarkt)</li>
                  <li>• Sekundärprophylaxe nach Herzinfarkt und Schlaganfall</li>
                  <li>• Prophylaxe bei peripherer arterieller Verschlusskrankheit (pAVK) und nach gefäßchirurgischen Eingriffen</li>
                </ul>
              </li>
              <li><b><a href="/trafarette/analgesie">Analgesie</a>:</b> Leichte bis mittelschwere Schmerzen, z.B. Kopfschmerzen, Gelenkschmerzen, Muskelschmerzen oder Regelschmerzen.</li>
              <li><b>Weitere Anwendungen:</b> In Ausnahmefällen auch als fiebersenkendes Mittel oder bei entzündlichen Erkrankungen, wenn moderne Antiphlogistika nicht infrage kommen oder eine irreversible Thrombozytenaggregation gewünscht ist.</li>
            </ul>
          </div>`,
        },
        {
          id: 7,
          title: "7. Dosierung",
          textWithFormatting: `<div>
            <p><b>Thrombozytenaggregationshemmung:</b> 100 mg/Tag oral.</p>
            <p><b><a href="/trafarette/analgesie">Analgesie</a>:</b> 500–1.000 mg oral, 2–3 mal täglich.</p>
            <p><i>Hinweis:</i> Die genaue Dosierung ist der jeweiligen Herstellerinformation zu entnehmen.</p>
          </div>`,
        },
        {
          id: 8,
          title: "8. Verschreibungspflicht",
          textWithFormatting: `<div>
            <p>Acetylsalicylsäure ist in den meisten Darreichungsformen rezeptfrei erhältlich, mit Ausnahme von parenteralen Präparaten, die verschreibungspflichtig sind.</p>
          </div>`,
        },
        {
          id: 9,
          title: "9. Nebenwirkungen",
          textWithFormatting: `<div>
            <table>
              <thead>
                <tr>
                  <th><b>System</b></th>
                  <th><b>Nebenwirkungen (Auswahl)</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Gastrointestinaltrakt</b></td>
                  <td>Schlechte Magenverträglichkeit, Sodbrennen, Ulkusneigung<br>Übelkeit, Erbrechen<br>Blutungen, Eisenmangelanämie bei Dauertherapie<br>Ion trapping</td>
                </tr>
                <tr>
                  <td><b>Blut</b></td>
                  <td>Thrombozytenaggregationshemmung<br>Verminderte Prothrombinbildung</td>
                </tr>
                <tr>
                  <td><b>Nieren</b></td>
                  <td>Senkung der Nierenperfusion<br>Bei niedriger Dosis (&lt;2 g/Tag): Hemmung der Harnsäuresekretion, Urikosurika verlieren ihre Wirkung<br>Bei hoher Dosis: Hemmung der Harnsäurerückresorption</td>
                </tr>
                <tr>
                  <td><b>Nervensystem</b></td>
                  <td>Ohrensausen, vermindertes Hörvermögen<br>Schwindel</td>
                </tr>
                <tr>
                  <td><b>Schwangerschaft</b></td>
                  <td>Vorzeitiger Schluss des Ductus arteriosus<br>Kontraktionshemmung des Uterus</td>
                </tr>
                <tr>
                  <td><b>Sonstige</b></td>
                  <td>Pseudoallergische Reaktionen: Analgetikaasthma, ASS-Intoleranz-Syndrom<br>Reye-Syndrom</td>
                </tr>
              </tbody>
            </table>
          </div>`,
        },
        {
          id: 10,
          title: "10. Wechselwirkungen",
          textWithFormatting: `<div>
            <p>Bei gleichzeitiger Einnahme von Acetylsalicylsäure (ASS) und Ibuprofen kann Ibuprofen die kardioprotektive Wirkung von ASS aufheben, da es vor ASS an das katalytische Zentrum der COX-1 bindet. Patienten, die ASS zur Herzinfarktprophylaxe einnehmen, sollten nicht mehr als eine Einzeldosis Ibuprofen pro Tag erhalten. Die Einnahme von Ibuprofen sollte außerdem mindestens zwei Stunden nach der ASS-Gabe erfolgen, um diese Wechselwirkung zu minimieren.</p>
            <p>Die Einnahme von Paracetamol, Celecoxib oder Diclofenac beeinträchtigt die thrombozytenaggregationshemmende Wirkung von ASS nicht.</p>
          </div>`,
        },
        {
          id: 11,
          title: "11. Kontraindikationen",
          textWithFormatting: `<div>
            <ul>
              <li>• Überempfindlichkeit gegenüber dem Wirkstoff oder einem der Hilfsstoffe</li>
              <li>• Analgetikaasthma</li>
              <li>• Hämorrhagische Diathese</li>
              <li>• Gastroduodenale Ulkuskrankheit</li>
              <li>• Hinweise auf Blutungen im Verdauungssystem, z.B. Teerstuhl oder Bluterbrechen</li>
              <li>• Schwere Leberinsuffizienz</li>
              <li>• Schwere Niereninsuffizienz (GFR &lt; 30 ml/min)</li>
              <li>• Schwere dekompensierte Herzinsuffizienz</li>
              <li>• Kombination mit Methotrexat (&gt; 15 mg/Woche)</li>
              <li>• Letztes Trimenon der Schwangerschaft</li>
              <li>• Stillzeit: Regelmäßige Einnahme von Dosen &gt; 300 mg</li>
            </ul>
          </div>`,
        },
        {
          id: 12,
          title: "12. Warnhinweise",
          textWithFormatting: `<div>
            <ul>
              <li>• Hohes Alter, Gebrechlichkeit: Vorsichtige Dosierung, niedrigste wirksame Dosis verwenden</li>
              <li>• Glucose-6-phosphat-Dehydrogenase-Mangel (G6PD): ASS kann in höherer Dosierung eine Hämolyse induzieren, da G6PD gehemmt wird.</li>
              <li>• Asthma bronchiale: ASS kann Asthmaanfälle und Bronchospasmen auslösen.</li>
            </ul>
          </div>`,
        },
        {
          id: 13,
          title: "13. Toxizität",
          textWithFormatting: `<div>
            <p>Eine Vergiftung mit ASS kann ab einer Dosis von etwa 100 mg/kg Körpergewicht auftreten. Symptome einer Vergiftung können Störungen des Säure-Basen-Haushaltes umfassen. Die Therapie zielt auf die Wiederherstellung dieses Gleichgewichts und eine beschleunigte Ausscheidung des Wirkstoffs ab.</p>
          </div>`,
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 7,
      title: "Fragen",
      questions: [
        {
          title: "Was versteht man unter Fibrinolyse?",
          answers: [
            {
              name: "Die Bildung eines Blutgerinnsels",
              isCorrect: false,
            },
            {
              name: "Die Auflösung eines Blutgerinnsels durch Plasmin",
              isCorrect: true,
            },
            {
              name: "Die Verengung von Blutgefäßen",
              isCorrect: false,
            },
            {
              name: "Die Hemmung der Blutgerinnung",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Welches Enzym ist für die Fibrinolyse verantwortlich?",
          answers: [
            {
              name: "Thrombin",
              isCorrect: false,
            },
            {
              name: "Plasmin",
              isCorrect: true,
            },
            {
              name: "Fibrinogen",
              isCorrect: false,
            },
            {
              name: "Heparin",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Was passiert bei der Fibrinolyse mit dem Thrombus?",
          answers: [
            {
              name: "Er vergrößert sich",
              isCorrect: false,
            },
            {
              name: "Er wird stabiler",
              isCorrect: false,
            },
            {
              name: "Er wird aufgelöst",
              isCorrect: true,
            },
            {
              name: "Er wandert durch den Körper",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welches Protein wird durch Plasmin gespalten, um die Fibrinolyse zu bewirken?",
          answers: [
            {
              name: "Fibrinogen",
              isCorrect: false,
            },
            {
              name: "Fibrin",
              isCorrect: true,
            },
            {
              name: "Prothrombin",
              isCorrect: false,
            },
            {
              name: "Collagen",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Welche Funktion hat der Plasminogenaktivator tPA?",
          answers: [
            {
              name: "Er hemmt die Blutgerinnung",
              isCorrect: false,
            },
            {
              name: "Er wandelt Plasminogen in Plasmin um",
              isCorrect: true,
            },
            {
              name: "Er aktiviert Thrombin",
              isCorrect: false,
            },
            {
              name: "Er baut Fibrinabbauprodukte ab",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Was ist ein D-Dimer-Test?",
          answers: [
            {
              name: "Ein Test zur Bestimmung von Blutgerinnungsfaktoren",
              isCorrect: false,
            },
            {
              name: "Ein Test zum Nachweis von Fibrinabbauprodukten im Blut",
              isCorrect: true,
            },
            {
              name: "Ein Test zur Messung der Blutplättchenanzahl",
              isCorrect: false,
            },
            {
              name: "Ein Test zur Messung der Thrombinaktivität",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Welcher der folgenden Stoffe ist ein Antifibrinolytikum?",
          answers: [
            {
              name: "Streptokinase",
              isCorrect: false,
            },
            {
              name: "Heparin",
              isCorrect: false,
            },
            {
              name: "Tranexamsäure",
              isCorrect: true,
            },
            {
              name: "Alteplase",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Wie wird Plasminogen in seine aktive Form umgewandelt?",
          answers: [
            {
              name: "Durch Thrombin",
              isCorrect: false,
            },
            {
              name: "Durch tPA und Urokinase",
              isCorrect: true,
            },
            {
              name: "Durch Heparin",
              isCorrect: false,
            },
            {
              name: "Durch Streptokinase",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Substanz hemmt die Fibrinolyse durch Inaktivierung von Plasmin?",
          answers: [
            {
              name: "PAI-1",
              isCorrect: false,
            },
            {
              name: "alpha-2-Plasmininhibitor",
              isCorrect: true,
            },
            {
              name: "Thrombin",
              isCorrect: false,
            },
            {
              name: "tPA",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Was sind Fibrinabbauprodukte (FDP)?",
          answers: [
            {
              name: "Produkte, die während der Blutgerinnung gebildet werden",
              isCorrect: false,
            },
            {
              name: "Fragmente, die durch die Spaltung von Fibrin entstehen",
              isCorrect: true,
            },
            {
              name: "Enzyme, die die Gerinnung fördern",
              isCorrect: false,
            },
            {
              name: "Moleküle, die Plasmin aktivieren",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
          title: "Welche Hauptaufgabe hat Plasmin in der Fibrinolyse?",
          hidden_answer:
            "Plasmin spaltet die Fibrinpolymere, die das Blutgerinnsel (Thrombus) zusammenhalten, und löst so das Gerinnsel auf.",
        },
        {
          title:
            "Wie wird das inaktive Plasminogen in die aktive Form Plasmin umgewandelt?",
          hidden_answer:
            "Plasminogen wird durch den gewebespezifischen Plasminogenaktivator (tPA) und Urokinase in Plasmin umgewandelt.",
        },
        {
          title: "Welches Enzym ist der Haupthemmer von Plasmin?",
          hidden_answer:
            "Das Enzym alpha-2-Plasmininhibitor hemmt Plasmin und verhindert so eine unkontrollierte Fibrinolyse.",
        },
        {
          title: "Welche Substanzen hemmen die Aktivierung der Fibrinolyse?",
          hidden_answer:
            "PAI-1 (Plasminogenaktivator-Inhibitor-1) hemmt die Aktivierung der Fibrinolyse, indem es tPA und Urokinase blockiert.",
        },
        {
          title:
            "Welche Stoffe werden bei der therapeutischen Thrombolyse eingesetzt?",
          hidden_answer:
            "Zur Thrombolyse werden rekombinanter gewebespezifischer Plasminogenaktivator (rtPA) und Urokinase verwendet.",
        },
        {
          title:
            "Was passiert mit den Fibrinabbauprodukten (FDP) nach der Fibrinolyse?",
          hidden_answer:
            "Die löslichen Fibrinabbauprodukte (FDP) werden durch die Blutzirkulation abtransportiert und anschließend aus dem Blut entfernt.",
        },
        {
          title:
            "Was bewirken Fibrinabbauprodukte (FDP) in Bezug auf die Blutgerinnung?",
          hidden_answer:
            "Fibrinabbauprodukte hemmen Thrombin und verlangsamen dadurch die Bildung neuer Blutgerinnsel.",
        },
        {
          title: "Was misst der D-Dimer-Test im Blut?",
          hidden_answer:
            "Der D-Dimer-Test misst die Menge an Fibrinabbauprodukten im Blut, die durch Fibrinolyse entstehen.",
        },
        {
          title:
            "Welche Erkrankungen können mit gestörter Fibrinolyse verbunden sein?",
          hidden_answer:
            "Störungen der Fibrinolyse können zu Erkrankungen wie disseminierter intravasaler Gerinnung (DIC) oder einer Hyperfibrinolyse führen.",
        },
        {
          title:
            "Welche Substanz wird häufig als Antifibrinolytikum verwendet?",
          hidden_answer:
            "Tranexamsäure ist ein häufig verwendetes Antifibrinolytikum, das die Auflösung von Blutgerinnseln hemmt.",
        },
      ],
    },
    //  End of parent tab 3
  ],
};
