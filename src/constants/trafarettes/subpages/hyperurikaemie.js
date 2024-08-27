export default {
  path: "hyperurikaemie",
  // http://localhost:5173/trafarette/hyperurikaemie
  content: [
    {
      id: 1,
      title: "Hyperurikämie",
      hint: "Hyperuricaemia, Hyperurikämie, Hyperuricemia, Гіперурикемія, Гиперурикемия, Hiperürisemi, فرط حمض يوريك الدم Hyperuricémie, Hiperuricemia,, Hiperurykemia",
      code: "ICD 10: ",
      childTabs: [
        //  Start of child tab 1
        {
          id: 11,
          title: "1. Definition",
          textWithFormatting: `<div>
          <p>Hyperurikämie bezeichnet eine Erhöhung des Harnsäurespiegels im Blut. Eine Hyperurikämie liegt vor, wenn die Serumharnsäurekonzentration bei Frauen über 6,7 mg/dl und bei Männern über 7,4 mg/dl ansteigt. Es wird grundsätzlich zwischen primärer und sekundärer Hyperurikämie unterschieden.</p>
      </div>`,
        },
        //  End of child tab 1
        //  Start of child tab 2
        {
          id: 12,
          title: "2. Hintergrund",
          textWithFormatting: `<div>
               <ul>
                  <li><strong>Primäre Hyperurikämie:</strong> Diese Form ist oft genetisch bedingt und resultiert aus einer angeborenen Störung des Purinstoffwechsels, was zu einer übermäßigen Produktion oder einer verminderten Ausscheidung von Harnsäure führt.</li>
                  <li><strong>Sekundäre Hyperurikämie:</strong> Diese Form wird durch andere Erkrankungen oder Zustände verursacht, wie z.B. chronische Nierenerkrankungen, bestimmte Medikamente, exzessiven Alkoholkonsum oder eine Ernährung, die reich an purinhaltigen Lebensmitteln ist.</li>
               </ul>
               <p>Hyperurikämie ist ein wichtiger Risikofaktor für die Entwicklung von <a href="/trafarette/gicht">Gicht</a>, einer schmerzhaften Form der Arthritis, die durch die Ablagerung von Harnsäurekristallen in den Gelenken verursacht wird. Sie kann auch mit anderen Gesundheitsproblemen wie Bluthochdruck, Nierensteinen und Herz-Kreislauf-Erkrankungen in Verbindung stehen.</p>
            </div>`,
        },
        {
          id: 13,
          title: "3. Epidemiologie",
          textWithFormatting: `<div>
          <p>Hyperurikämie ist eine weit verbreitete Stoffwechselstörung, deren Häufigkeit in den letzten Jahrzehnten zugenommen hat. Die Prävalenz variiert je nach geografischer Region, Lebensstil und Ernährungsgewohnheiten.</p>
      
          <h3>Häufigkeit und Verbreitung</h3>
          <p>Die Prävalenz von Hyperurikämie variiert weltweit erheblich:</p>
          <ul>
              <li>• In den USA und Europa liegt die Prävalenz bei Erwachsenen bei etwa 20%.</li>
              <li>• In asiatischen Ländern wie Japan und China wird eine Prävalenz von etwa 10-15% berichtet.</li>
              <li>• In Entwicklungsländern ist die Prävalenz tendenziell niedriger, nimmt jedoch aufgrund westlicher Ernährungsgewohnheiten zu.</li>
          </ul>
      
          <h3>Betroffene Altersgruppen</h3>
          <p>Hyperurikämie kann in allen Altersgruppen auftreten, ist jedoch bei Erwachsenen häufiger. Die Prävalenz steigt mit zunehmendem Alter:</p>
          <ul>
              <li>• Bei jungen Erwachsenen ist Hyperurikämie weniger verbreitet.</li>
              <li>• Die Häufigkeit nimmt bei Menschen über 50 Jahren deutlich zu, insbesondere bei Männern.</li>
          </ul>
      
          <h3>Geschlechter</h3>
          <p><em>Männer sind häufiger von Hyperurikämie betroffen als Frauen:</em></p>
          <ul>
              <li>• Vor der Menopause haben Frauen aufgrund der schützenden Wirkung von Östrogen niedrigere Harnsäurespiegel.</li>
              <li>• Nach der Menopause steigt das Risiko für Frauen, Hyperurikämie zu entwickeln, signifikant an, sodass die Geschlechterunterschiede weniger ausgeprägt sind.</li>
          </ul>
      
          <h3>Ethnien</h3>
          <p>Die Prävalenz von Hyperurikämie kann je nach ethnischer Zugehörigkeit variieren:</p>
          <ul>
              <li>• In den USA haben afroamerikanische Männer eine höhere Prävalenz von Hyperurikämie und Gicht im Vergleich zu weißen Männern.</li>
              <li>• Bei asiatischen Bevölkerungsgruppen ist die Prävalenz ebenfalls hoch, insbesondere in städtischen Gebieten mit westlichem Lebensstil.</li>
          </ul>
      
          <p><em>Hyperurikämie ist ein globales Gesundheitsproblem, das durch zunehmende Urbanisierung und Veränderungen in der Ernährung weiter an Bedeutung gewinnt. Die Krankheit betrifft eine breite Palette von Bevölkerungsgruppen, wobei bestimmte Altersgruppen, Geschlechter und ethnische Gruppen ein höheres Risiko aufweisen.</em></p>
      </div>`,
        },
        {
          id: 14,
          title: "4. Ätiologie",
          textWithFormatting: `<div>
          <p>Die Ätiologie der Hyperurikämie umfasst eine Vielzahl von Ursachen und Risikofaktoren, die zu einer erhöhten Harnsäurekonzentration im Blut führen können. Grundsätzlich wird zwischen primärer und sekundärer Hyperurikämie unterschieden.</p>
      
          <h3>Primäre Hyperurikämie</h3>
          <p>Die primäre Hyperurikämie ist eine angeborene Störung des Purinstoffwechsels. Dabei kann sowohl die Harnsäuresynthese als auch die Harnsäureausscheidung betroffen sein. Folgende Enzymdefekte können eine primäre Hyperurikämie verursachen:</p>
          <ul style="list-style-type: disc;">
              <li><strong>Vermehrte Aktivität der Glutamin-Phosphoribosylpyrophosphat-Amidotransferase:</strong> Dies führt zu einer erhöhten Purinsynthese und folglich zu einer gesteigerten Produktion von Harnsäure.</li>
              <li><strong>Vermehrte Aktivität der Xanthinoxidase:</strong> Dieses Enzym katalysiert die Oxidation von Hypoxanthin zu Xanthin und weiter zu Harnsäure, was bei Überaktivität zu einer übermäßigen Harnsäureproduktion führt.</li>
              <li><strong>Lesch-Nyhan-Syndrom:</strong> Eine seltene, X-chromosomal vererbte Störung, die durch einen Defekt des Enzyms Hypoxanthin-Guanin-Phosphoribosyltransferase (HGPRT) gekennzeichnet ist, was zu einer stark erhöhten Harnsäureproduktion führt.</li>
          </ul>
      
          <h3>Sekundäre Hyperurikämie</h3>
          <p>Auch bei der sekundären Hyperurikämie kann eine Störung der Harnsäurebildung oder der Harnsäureausscheidung vorliegen. Folgende Erkrankungen und Therapien können eine sekundäre Hyperurikämie verursachen:</p>
          <ul style="list-style-type: disc;">
              <li><strong>Steigerung der Harnsäurebildung aufgrund vermehrter Purinfreisetzung:</strong>
                  <ul style="list-style-type: circle;">
                      <li><strong>Polycythaemia vera:</strong> Eine myeloproliferative Erkrankung, bei der es zu einer Überproduktion von roten Blutkörperchen und einem erhöhten Zellumsatz kommt.</li>
                      <li><strong>Chronische myeloische Leukämie (CML) und akute myeloische Leukämie (AML):</strong> Diese Leukämieformen führen zu einem erhöhten Zellumsatz und damit zu einer vermehrten Freisetzung von Purinen.</li>
                      <li><strong>Akute lymphatische Leukämie (ALL):</strong> Auch hier führt der erhöhte Zellumsatz zu einer gesteigerten Purinfreisetzung.</li>
                      <li><strong>Tumorbehandlung mit Zytostatika:</strong> Die Zerstörung von Tumorzellen führt zu einer massiven Freisetzung von Purinen, die in Harnsäure umgewandelt werden.</li>
                  </ul>
              </li>
              <li><strong>Steigerung der Harnsäurebildung aufgrund erhöhter Purinsynthese:</strong>
                  <ul style="list-style-type: circle;">
                      <li><strong>Glykogenspeicherkrankheit Typ I:</strong> Eine genetische Störung, die zu einer gestörten Glykogenverarbeitung und einer erhöhten Purinsynthese führt.</li>
                  </ul>
              </li>
              <li><strong>Verminderung der renalen Harnsäureausscheidung:</strong>
                  <ul style="list-style-type: circle;">
                      <li><strong>Bartter-Syndrom:</strong> Eine seltene genetische Störung, die zu einer vermehrten Ausscheidung von Kalium und anderen Elektrolyten führt und sekundär die Harnsäureausscheidung beeinträchtigen kann.</li>
                      <li><strong>Alkoholismus:</strong> Alkohol erhöht die Harnsäureproduktion und vermindert gleichzeitig die renale Harnsäureausscheidung.</li>
                      <li><strong>Nierenerkrankungen:</strong> Chronische Nierenerkrankungen können die Ausscheidung von Harnsäure reduzieren und so zu einer Hyperurikämie führen.</li>
                      <li><strong>Ketoazidose:</strong> Zustände wie diabetische Ketoazidose können die Harnsäureausscheidung beeinträchtigen.</li>
                      <li><strong>Diuretika:</strong> Bestimmte harntreibende Medikamente können die Harnsäureausscheidung über die Nieren verringern.</li>
                  </ul>
              </li>
          </ul>
      </div>`,
        },
        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
        {
          id: 15,
          title: "5. Klinik",
          textWithFormatting: `<div>
         <p>Hyperurikämie kann je nach Schweregrad asymptomatisch bleiben oder sich durch verschiedene klinische Symptome manifestieren, insbesondere durch das Krankheitsbild der Gicht.</p>
     
         <h3>Asymptomatische Hyperurikämie</h3>
         <p>In vielen Fällen bleibt die Hyperurikämie ohne klinische Symptome und wird oft zufällig bei Blutuntersuchungen entdeckt. Diese Form der Hyperurikämie erfordert in der Regel keine sofortige Behandlung, sondern lediglich eine regelmäßige Überwachung der Harnsäurespiegel.</p>
     
         <h3>Symptomatische Hyperurikämie: Gicht</h3>
         <p>Wenn die Hyperurikämie symptomatisch wird, manifestiert sie sich häufig in Form der Gicht, einer entzündlichen Erkrankung, die durch die Ablagerung von Harnsäurekristallen in den Gelenken gekennzeichnet ist. Die klinischen Merkmale der Gicht umfassen:</p>
         <ul>
             <li><strong>Akute Gichtanfälle:</strong> Plötzliche, intensive Schmerzen, Rötung, Schwellung und Wärme in einem oder mehreren Gelenken, häufig im Großzehengrundgelenk (Podagra). Diese Anfälle treten oft nachts auf und können durch Alkohol, purinreiche Nahrungsmittel oder Stress ausgelöst werden.</li>
             <li><strong>Chronische Gicht:</strong> Wiederholte Gichtanfälle können zu chronischen Gelenkschäden und der Entwicklung von tophösem Gewebe führen. Tophi sind harte Ablagerungen von Harnsäurekristallen, die sich in Gelenken, Weichteilen und anderen Geweben bilden können.</li>
             <li><strong>Gichtnephropathie:</strong> Langfristig kann Hyperurikämie zu Nierenschäden führen, einschließlich Nierensteinen und chronischer Niereninsuffizienz. Die Nieren können durch die Ablagerung von Harnsäurekristallen geschädigt werden, was zu einer Verschlechterung der Nierenfunktion führt.</li>
         </ul>
     </div>`,
        },
        {
          id: 16,
          title: "6. Therapie",
          textWithFormatting: `<div>
         <p>Die Behandlung der Hyperurikämie zielt darauf ab, die Harnsäurespiegel im Blut zu senken und die damit verbundenen Symptome und Komplikationen, insbesondere Gicht, zu verhindern oder zu lindern. Die Therapie kann medikamentöse und nicht-medikamentöse Ansätze umfassen.</p>
     
         <h3>Nicht-medikamentöse Therapie</h3>
         <ul>
             <li><strong>Ernährungsumstellung:</strong> Reduktion von purinreichen Lebensmitteln (z.B. rotes Fleisch, Meeresfrüchte), Vermeidung von Alkohol, insbesondere Bier und Spirituosen, sowie Zucker und zuckerhaltigen Getränken. Erhöhung des Konsums von Obst, Gemüse und fettarmen Milchprodukten.</li>
             <li><strong>Gewichtsreduktion:</strong> Bei Übergewicht kann eine Gewichtsabnahme helfen, die Harnsäurespiegel zu senken.</li>
             <li><strong>Hydratation:</strong> Ausreichende Flüssigkeitszufuhr, um die Harnsäureausscheidung zu fördern.</li>
             <li><strong>Lebensstiländerungen:</strong> Regelmäßige körperliche Aktivität und das Vermeiden von Fastenkuren und extremen Diäten, die die Harnsäurespiegel erhöhen können.</li>
         </ul>
     
         <h3>Medikamentöse Therapie</h3>
         <p>Die medikamentöse Therapie richtet sich nach dem Schweregrad der Hyperurikämie und dem Vorliegen von Symptomen oder Komplikationen.</p>
         <ul>
             <li><strong>Akute Gichtanfälle:</strong></li>
             <ul>
                 <li><strong>Nichtsteroidale Antirheumatika (NSAR):</strong> Schmerz- und Entzündungshemmung.</li>
                 <li><strong>Colchicin:</strong> Reduziert die Entzündungsreaktion durch Beeinflussung der Leukozytenaktivität.</li>
                 <li><strong>Kortikosteroide:</strong> Bei Unverträglichkeit oder Kontraindikationen gegenüber NSAR und Colchicin.</li>
             </ul>
             <li><strong>Langzeittherapie zur Senkung der Harnsäurespiegel:</strong></li>
             <ul>
                 <li><strong>Xanthinoxidase-Hemmer (Allopurinol, Febuxostat):</strong> Reduzieren die Harnsäureproduktion.</li>
                 <li><strong>Urikosurika (Probenecid, Benzbromaron):</strong> Erhöhen die renale Ausscheidung von Harnsäure.</li>
                 <li><strong>Uratoxidase (Rasburicase, Pegloticase):</strong> Wandeln Harnsäure in das besser lösliche Allantoin um, werden bei besonders hohen Harnsäurespiegeln oder schwerer Gicht eingesetzt.</li>
             </ul>
             <li><strong>Begleittherapie:</strong> Behandlung von Begleiterkrankungen wie Bluthochdruck, Diabetes und Nierenerkrankungen, die die Hyperurikämie beeinflussen können.</li>
         </ul>
     
         <h3>Monitoring und Nachsorge</h3>
         <p>Regelmäßige Überwachung der Harnsäurespiegel und der Nierenfunktion ist wichtig, um den Behandlungserfolg zu beurteilen und die Therapie bei Bedarf anzupassen. Patienten sollten zudem über die Bedeutung der Therapietreue und die langfristigen Vorteile der Behandlung aufgeklärt werden.</p>
         <p>Eine umfassende und individuell angepasste Therapie kann helfen, die Harnsäurespiegel zu kontrollieren, die Symptome der Hyperurikämie zu lindern und das Risiko von Komplikationen zu reduzieren.</p>
     </div>`,
        },
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2
    {
      id: 2,
      title: "Tab_2 page 2",
      questions: [
        {
          title: `What is the capital of Ukraine?`,
          answers: [
            { name: `Lisabon`, isCorrect: false },
            { name: `Kiev`, isCorrect: true },
            { name: `Minsk`, isCorrect: false },
          ],
        },
        {
          title: "What is the capital of the USA?",
          answers: [
            { name: `Tokio`, isCorrect: false },
            { name: `Washington DC`, isCorrect: true },
            { name: `New York`, isCorrect: false },
          ],
        },
      ],
    },
    //  End of parent tab 2
    //  Start of parent tab 3
    {
      id: 3,
      title: "Tab_3 page 2",
      questions: [
        {
          title: `What is the capital of Ukraine?`,
          hidden_answer: `Kiev of course, you stupid creature.`,
        },
        {
          title: `What is the capital of the USA`,
          hidden_answer: `Man - it's Not New Your, for sure`,
        },
      ],
    },
    //  End of parent tab 3
  ],
};
