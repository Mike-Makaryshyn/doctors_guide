import img1 from "../../../../assets/zellzyklus.png";
export default {
  path: "zellzyklus",
  // http://localhost:5173/trafarette/zellzyklus
  content: [
    {
      id: 1,
      title: "Zellzyklus",
      childTabs: [
        {
          "id": 1,
          "title": "Definition",
          "textWithFormatting": `<div>
            <p>Der Zellzyklus beschreibt die Abfolge von Ereignissen, die eine Zelle durchläuft, um sich zu teilen und zwei genetisch identische Tochterzellen zu bilden. Dieser Prozess ist für das Wachstum, die Entwicklung, die Geweberegeneration und die Fortpflanzung von Organismen essenziell. Der Zyklus unterteilt sich in verschiedene Phasen, die die Zellfunktion, DNA-Replikation und Zellteilung steuern.</p>
          </div>`
        },
        {
          "id": 2,
          "title": "Phasen des Zellzyklus",
          "textWithFormatting": `<div>
            <p>Der Zellzyklus gliedert sich in zwei Hauptphasen: die Interphase (Vorbereitungsphase) und die Mitosephase (Teilungsphase). Die Interphase ist die längste Phase und wird in verschiedene Stadien unterteilt, die jeweils spezifische Funktionen erfüllen.</p>
            <h3>Interphase</h3>
            <p>Die Interphase umfasst die Phasen G1, S und G2, die zusammen eine intensive Phase der Zellvorbereitung darstellen.</p>
            <img src="${img1}" alt="kaskade" style="max-width: 100%; height: auto;">
            <ul>
              <li>• <b>G1-Phase (Gap 1)</b>: In der G1-Phase wächst die Zelle und synthetisiert Proteine und RNA-Moleküle. Diese Phase ist entscheidend für die Zellfunktionen und die Vorbereitung auf die DNA-Replikation. In Geweben mit schnellem Wachstum, wie in Tumorzellen, kann die G1-Phase kürzer sein und nur wenige Stunden dauern. Bei Zellen mit niedrigem Teilungsbedarf dauert diese Phase deutlich länger.</li>
              <li>• <b>S-Phase (Synthese-Phase)</b>: Während der S-Phase verdoppelt sich das Erbgut der Zelle. Jeder Chromosomensatz wird durch DNA-Replikation in zwei identische Kopien (Schwesterchromatiden) geteilt. Am Ende dieser Phase besitzt die Zelle doppelt so viele Chromatiden wie zuvor. Diese Phase dauert durchschnittlich etwa 8 Stunden und wird durch spezifische Aktivatoren wie Cyclin E ausgelöst, die für den Übergang zur DNA-Synthese erforderlich sind.</li>
              <li>• <b>G2-Phase (Gap 2)</b>: In der G2-Phase bereitet sich die Zelle auf die Mitose vor. Diese Phase ist durch die Synthese von Proteinen gekennzeichnet, die für die Zellteilung notwendig sind, einschließlich mitosespezifischer Enzyme und Strukturproteine. Die Zelle nimmt zusätzlich Wasser auf und vergrößert ihr Volumen. Gleichzeitig werden Zellkontakte gelöst, um die Beweglichkeit der Zelle während der Teilung zu erleichtern.</li>
              <li>• <b>G0-Phase (Ruhephase)</b>: Manche Zellen, die ihre Teilung beendet haben und keine weiteren Zellteilungen mehr durchlaufen, treten in die G0-Phase ein. In dieser Phase sind die Zellen ruhend und erfüllen ihre spezifischen Funktionen ohne weitere Zellteilung. Nervenzellen und bestimmte Epithelzellen befinden sich dauerhaft in der G0-Phase. Unter bestimmten Bedingungen, wie durch Wachstumsfaktoren, können manche Zellen wieder in den Zellzyklus (G1-Phase) zurückkehren.</li>
            </ul>
            <h3>Mitosephase (M-Phase)</h3>
            <p>Die Mitosephase ist die eigentliche Teilungsphase des Zellzyklus und umfasst die Mitose (Kernteilung) und die Zytokinese (Zellteilung). Der Eintritt in die M-Phase wird durch den M-Phase-stimulierenden Faktor (MPF) gesteuert, der die Zelle zur Aufteilung ihres genetischen Materials anregt. In der Mitose werden die beiden Chromatidensätze der Zelle auf zwei Tochterzellen verteilt, die durch die Zytokinese voneinander getrennt werden.</p>
          </div>`
        },
        {
          "id": 3,
          "title": "Medizinische Bedeutung",
          "textWithFormatting": `<div>
            <p>Der Zellzyklus ist von zentraler Bedeutung in der Medizin, da Störungen in diesem Ablauf zur Entstehung von Krebs führen können. Onkogene (Gene, die das Zellwachstum fördern) und Tumorsuppressor-Gene (z.B. Anti-Onkogene, die das Zellwachstum hemmen) regulieren den Zellzyklus und können durch Mutationen entgleisen. Dies kann unkontrolliertes Zellwachstum und Tumorbildung fördern.</p>
            <ul>
              <li>• <b>Krebsbehandlung</b>: Viele Krebsmedikamente, wie Zytostatika, zielen darauf ab, den Zellzyklus in spezifischen Phasen zu unterbrechen. Sie verzögern die Zellteilung, indem sie das Fortschreiten der Zellen zur Mitose (Zytokinese) hemmen. So wirken auch Strahlentherapien, die die DNA der Krebszellen schädigen und die Zellteilung stoppen.</li>
              <li>• <b>Zellzyklus-Checkpoint-Mechanismen</b>: Verschiedene Kontrollpunkte (Checkpoints) überwachen den Fortschritt der Zelle im Zellzyklus und stoppen diesen, falls Schäden auftreten. Diese Checkpoints sind kritische Punkte zur Vermeidung von DNA-Schäden und damit von Mutationen. Defekte in den Checkpoints können zu Krebs führen.</li>
            </ul>
          </div>`
        }
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 7,
      title: "Fragen",
      questions: [
        {
          "title": "In welcher Phase des Zellzyklus erfolgt die DNA-Replikation?",
          "answers": [
            { "name": "G1-Phase", "isCorrect": false },
            { "name": "S-Phase", "isCorrect": true },
            { "name": "G2-Phase", "isCorrect": false },
            { "name": "M-Phase", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Phase des Zellzyklus dient hauptsächlich der Zellgröße- und Proteinbildung?",
          "answers": [
            { "name": "S-Phase", "isCorrect": false },
            { "name": "G1-Phase", "isCorrect": true },
            { "name": "Mitose", "isCorrect": false },
            { "name": "Zytokinese", "isCorrect": false }
          ]
        },
        {
          "title": "Was beschreibt die G0-Phase des Zellzyklus?",
          "answers": [
            { "name": "Eine Phase intensiver DNA-Synthese", "isCorrect": false },
            { "name": "Eine Ruhephase ohne Zellteilung", "isCorrect": true },
            { "name": "Die Vorbereitung auf die Mitose", "isCorrect": false },
            { "name": "Die Trennung der Tochterzellen", "isCorrect": false }
          ]
        },
        {
          "title": "In welcher Phase werden die Chromatiden vollständig getrennt und zu den Zellpolen gezogen?",
          "answers": [
            { "name": "Prophase", "isCorrect": false },
            { "name": "Metaphase", "isCorrect": false },
            { "name": "Anaphase", "isCorrect": true },
            { "name": "Telophase", "isCorrect": false }
          ]
        },
        {
          "title": "Welcher Faktor initiiert den Übergang in die Mitosephase?",
          "answers": [
            { "name": "Cyclin D", "isCorrect": false },
            { "name": "M-Phase-stimulierender Faktor (MPF)", "isCorrect": true },
            { "name": "Cyclin E", "isCorrect": false },
            { "name": "G1-Phase-stimulierender Faktor", "isCorrect": false }
          ]
        },
        {
          "title": "In welcher Zellzyklusphase findet die Zellteilung (Zytokinese) statt?",
          "answers": [
            { "name": "G1-Phase", "isCorrect": false },
            { "name": "G2-Phase", "isCorrect": false },
            { "name": "S-Phase", "isCorrect": false },
            { "name": "Mitosephase", "isCorrect": true }
          ]
        },
        {
          "title": "Was beschreibt die Metaphaseplatte?",
          "answers": [
            { "name": "Die Ansammlung der Chromosomen an den Zellpolen", "isCorrect": false },
            { "name": "Die Anordnung der Chromosomen in der Zellmitte", "isCorrect": true },
            { "name": "Die Bildung der neuen Kernhüllen", "isCorrect": false },
            { "name": "Die Trennung der Schwesterchromatiden", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Struktur wird bei der Zytokinese gebildet, um pflanzliche Zellen zu teilen?",
          "answers": [
            { "name": "Zellmembran", "isCorrect": false },
            { "name": "Zellwand", "isCorrect": false },
            { "name": "Zellplatte", "isCorrect": true },
            { "name": "Zytoskelett", "isCorrect": false }
          ]
        },
        {
          "title": "Welche Phase folgt unmittelbar auf die Mitose?",
          "answers": [
            { "name": "S-Phase", "isCorrect": false },
            { "name": "G1-Phase", "isCorrect": true },
            { "name": "G2-Phase", "isCorrect": false },
            { "name": "Zytokinese", "isCorrect": false }
          ]
        },
        {
          "title": "Welcher Mechanismus verhindert Zellteilung bei DNA-Schäden?",
          "answers": [
            { "name": "Mitose-Checkpoint", "isCorrect": false },
            { "name": "Zellzyklus-Checkpoint", "isCorrect": true },
            { "name": "G0-Checkpoint", "isCorrect": false },
            { "name": "S-Phase-Checkpoint", "isCorrect": false }
          ]
        }
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
          "title": "Was ist die Interphase?",
          "hidden_answer": "Die Interphase ist die längste Phase des Zellzyklus, in der die Zelle wächst, DNA repliziert und sich auf die Mitose vorbereitet. Sie umfasst die G1-, S- und G2-Phasen."
        },
        {
          "title": "Was geschieht in der S-Phase der Interphase?",
          "hidden_answer": "In der S-Phase wird die DNA der Zelle verdoppelt, sodass jede Tochterzelle nach der Teilung eine vollständige Kopie des genetischen Materials erhält."
        },
        {
          "title": "Was ist die G1-Phase im Zellzyklus?",
          "hidden_answer": "Die G1-Phase ist die erste Phase der Interphase, in der die Zelle wächst und sich auf die DNA-Replikation vorbereitet."
        },
        {
          "title": "Welche Aufgabe hat der Spindelapparat in der Mitose?",
          "hidden_answer": "Der Spindelapparat ist für die Trennung der Schwesterchromatiden verantwortlich und sorgt dafür, dass jede Tochterzelle eine vollständige Chromosomensatz erhält."
        },
        {
          "title": "Was ist die Funktion der Zytokinese?",
          "hidden_answer": "Die Zytokinese ist der Prozess der Zellteilung, bei dem das Zytoplasma der Mutterzelle aufgeteilt wird, um zwei getrennte Tochterzellen zu bilden."
        },
        {
          "title": "Was geschieht in der Telophase der Mitose?",
          "hidden_answer": "In der Telophase entspiralisieren sich die Chromosomen, neue Kernhüllen bilden sich, und die Zelle bereitet sich auf die abschließende Zytokinese vor."
        },
        {
          "title": "Was bedeutet G0-Phase?",
          "hidden_answer": "Die G0-Phase ist eine Ruhephase, in der sich die Zelle nicht weiter teilt und nur ihre spezialisierte Funktion erfüllt, z.B. bei Nervenzellen."
        },
        {
          "title": "Welche Bedeutung haben Checkpoints im Zellzyklus?",
          "hidden_answer": "Checkpoints sind Kontrollpunkte, die den Zellzyklus anhalten, um DNA-Schäden zu reparieren und sicherzustellen, dass die Zelle bereit für die nächste Phase ist."
        },
        {
          "title": "Wie unterscheidet sich die Anaphase von anderen Phasen der Mitose?",
          "hidden_answer": "In der Anaphase werden die Schwesterchromatiden getrennt und zu den gegenüberliegenden Zellpolen gezogen, wodurch sichergestellt wird, dass jede Tochterzelle eine vollständige Chromosomenanzahl erhält."
        },
        {
          "title": "Was ist die Rolle von Cyclinen im Zellzyklus?",
          "hidden_answer": "Cycline sind Proteine, die den Fortschritt des Zellzyklus regulieren und die Übergänge zwischen den verschiedenen Phasen steuern."
        }
      ],
    },
    //  End of parent tab 3
  ],
};
