export default {
    path: "sepsis",
    folder: "innereMedizin",
    content: [
      {
        id: 1,
        title: "Sepsis",
        childTabs: [
          {
            id: 1,
            title: "Sepsis, Organdysfunktion & Septischer Schock",
            textWithFormatting: `<div>
    <p><strong>Sepsis:</strong> Akut lebensbedrohliche Organdysfunktion infolge einer dysregulierten Immunantwort auf eine (mutmaßliche) Infektion.</p>
    <p><strong>Sepsisassoziierte Organdysfunktion:</strong> Änderung des SOFA-Scores um ≥2 Punkte für das jeweilige Organ.</p>
    <p><strong>Septischer Schock:</strong> Maximalvariante, die eine Katecholamintherapie bei Hypotonie (MAP &lt;65 mmHg) trotz adäquater Volumengabe und einen Serum-Lactatwert &gt;2 mmol/L (&gt;18 mg/dL) erfordert.</p>
    <p><strong>Schwere Sepsis (veraltet):</strong> Der Nachweis einer Infektion ist für die Diagnose nicht zwingend – allein die Vermutung genügt.</p>
    <ul>
      <li><strong>Blutstrominfektion:</strong> Präsenz von Erregern (z. B. Bakterien, Pilze) im Blut, die eine Entzündungsreaktion mit klinischen, laborchemischen und/oder hämodynamischen Veränderungen auslöst. Nachweis meist über positive Blutkultur, seltener mittels PCR. Diese Infektionen können schwer verlaufen und zur Sepsis führen.</li>
      <li><strong>Bakteriämie:</strong> Transiente Präsenz von Bakterien im Blut (z. B. nach dem Zähneputzen), die auch ohne signifikante Parameteränderungen auftreten kann.</li>
    </ul>
  </div>`
          },
          {
            id: 2,
            title: "SIRS – Definition & Kriterien",
            textWithFormatting: `<div>
    <p><strong>Definition SIRS:</strong> Eine unspezifische systemische Entzündungsreaktion, die mit veränderten Werten der Körpertemperatur, Herzfrequenz, Atemfrequenz und Blutparametern einhergeht – ausgelöst durch infektiöse oder nicht-infektiöse Ursachen (siehe auch SIRS‑Trigger).</p>
    <p><strong>Früher:</strong> Die Erfüllung von ≥2 SIRS‑Kriterien galt als Voraussetzung für eine Sepsisdiagnose.</p>
    <p><strong>SIRS‑Kriterien:</strong> Es gelten folgende Parameter:</p>
    <table border="1" cellspacing="0" cellpadding="4">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Kriterium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Körpertemperatur</td>
          <td>&ge; 38 °C oder &le; 36 °C</td>
        </tr>
        <tr>
          <td>Herzfrequenz</td>
          <td>&ge; 90/min</td>
        </tr>
        <tr>
          <td>Atemfrequenz</td>
          <td>&ge; 20/min oder Hyperventilation (bestätigt durch BGA; pCO₂ &le; 33 mmHg)</td>
        </tr>
        <tr>
          <td>Blutbild</td>
          <td>Leukozyten &gt;12.000/µL oder &lt;4.000/µL bzw. &gt;10% unreife neutrophile Granulozyten</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Entstehung & SIRS‑Trigger:</strong></p>
    <ul>
      <li>Traumata / Polytraumata</li>
      <li>Schwere Operationen</li>
      <li>Verbrennungen</li>
      <li>Schwere Erkrankungen (z. B. akute Pankreatitis)</li>
      <li>Ischämien und Hypoxien (auch bei Reanimationssituationen)</li>
      <li>Addison-Krise</li>
      <li>Lungenembolie</li>
    </ul>
    <p><strong>Pathomechanismus:</strong> Zerstörung von Gewebe führt zur Freisetzung zellulärer Strukturen, welche pro- und antiinflammatorische Kaskaden aktivieren, was eine systemische Entzündungsreaktion und Organschädigung zur Folge haben kann.</p>
    <p><strong>Mögliche Folgen:</strong> Bei Superinfektionen oder auch bei rein nicht-infektiösem SIRS kann ein Multiorganversagen auftreten.</p>
  </div>`
          },
          {
            id: 3,
            title: "Epidemiologie & Erreger",
            textWithFormatting: `<div>
    <p><strong>Epidemiologie:</strong></p>
    <ul>
      <li>Deutschland: ca. 158/100.000 gemeldete Fälle</li>
      <li>USA: ca. 517/100.000 gemeldete Fälle</li>
      <li>Schweden: ca. 780/100.000 gemeldete Fälle</li>
      <li>Weltweit: ca. 48,9 Mio. Fälle pro Jahr</li>
      <li>Etwa 20% aller Todesfälle sind mit Sepsis assoziiert</li>
    </ul>
    <p><strong>Infektionsfokus und Erreger:</strong></p>
    <ul>
      <li><strong>Fokus:</strong> Jeder Infektionsfokus kann zur Sepsis führen (z. B. Spondylodiszitis, Endokarditis, Osteomyelitis, Pneumonie, Abszess, Urozystitis).</li>
      <li><strong>Häufigste bakterielle Erreger:</strong>
        <ul>
          <li>Escherichia coli (44,7%)</li>
          <li>Staphylococcus aureus (26,8%)</li>
          <li>Streptococcus spp. (18,7%)</li>
          <li>Pseudomonas spp. (4,6%)</li>
        </ul>
      </li>
      <li><strong>Häufigste Infektionsorte:</strong>
        <ul>
          <li>Respirationstrakt (Pneumonie bzw. pneumogene Sepsis)</li>
          <li>Abdomen</li>
          <li>Niere und ableitende Harnwege</li>
          <li>Haut und Weichteile</li>
          <li>Katheter-assoziierte Infektionen (z. B. ZVK-Infektionen)</li>
          <li>ZNS</li>
        </ul>
      </li>
    </ul>
    <p><strong>Auslöser und Immunantwort:</strong></p>
    <ul>
      <li><strong>Auslöser:</strong> In der Regel bakterielle Erreger; seltener auch Pilze, Viren oder Parasiten.</li>
      <li><strong>Immunantwort:</strong> Erregerbestandteile (z. B. Lipopolysaccharide, Exotoxine, DNA) (PAMPs) binden an Toll-like-Rezeptoren und lösen die Freisetzung proinflammatorischer Zytokine (wie IL‑1 und TNF‑α) aus. Dies aktiviert weitere Signalwege (z. B. Komplementsystem, IL‑6, IL‑12, IL‑15, MIF) und bewirkt systemische Schäden – auch an Organen, die nicht direkt vom Infektionsfokus betroffen sind.</li>
      <li>Parallel werden antiinflammatorische Signalwege aktiviert, die zwar die proinflammatorischen Einflüsse mindern, aber auch selbst zu Organschäden oder Sekundärinfektionen beitragen können.</li>
      <li><strong>Effekte:</strong> Einschränkung der Endothelzellfunktion mit Kapillarleck (NO‑vermittelte Vasodilatation, Verlust der Barriere, Austritt von Flüssigkeit und Albumin) und Störung der Blutgerinnung (verstärkte Thrombinbildung, Mikrothrombosierung, Risiko einer disseminierten intravasalen Gerinnung [DIC]).</li>
      <li><strong>Organversagen:</strong> Betroffen sein können unter anderem:
        <ul>
          <li>Herz: Septische Kardiomyopathie</li>
          <li>Lunge: ARDS</li>
          <li>ZNS: Septische Enzephalopathie</li>
          <li>Niere: Akute Nierenschädigung</li>
          <li>Leber: Leberversagen</li>
          <li>Darm: Paralytischer Ileus</li>
        </ul>
      </li>
    </ul>
    <p><strong>Klinische Präsentation:</strong> Die Sepsis zeigt kein pathognomonisches Leitsymptom, sondern präsentiert sich meist als ein deutlich reduzierter Allgemeinzustand. Kardinalsymptome sind:
      <ul>
        <li>Fieber oder seltener Hypothermie</li>
        <li>Schüttelfrost</li>
        <li>Veränderter mentaler Status (z. B. Vigilanzminderung)</li>
        <li>Hypotonie und Tachykardie</li>
        <li>Erhöhte Atemfrequenz</li>
      </ul>
    </p>
    <p><strong>Weitere Hinweise:</strong> 
      <ul>
        <li>Zentralisation: Zu Beginn warme Akren, später kalte, marmorierte, kühle Haut und Kaltschweißigkeit</li>
        <li>Ödembildung aufgrund von Kapillarleck</li>
        <li>Petechien bei Thrombopenie (z. B. Waterhouse-Friderichsen-Syndrom)</li>
      </ul>
    </p>
    <p><strong>Fokusspezifische Symptome:</strong>
      <ul>
        <li><strong>Urosepsis:</strong> Dysurie, Pollakisurie, Algurie, Flankenschmerzen</li>
        <li><strong>Pneumonie:</strong> Dyspnoe, Husten</li>
        <li><strong>Meningitis:</strong> Kopfschmerzen, Meningismus</li>
        <li><strong>Katheter-/Fremdkörperinfektion:</strong> Lokale Entzündungszeichen an der Einstichstelle</li>
        <li><strong>Abdomineller Fokus:</strong> Zeichen eines akuten Abdomens</li>
        <li><strong>Organbezogene Symptome:</strong> Zum Beispiel Anurie bei Nierenschädigung oder verschlechterte Oxygenierung bei Lungenbeteiligung (sofern im SOFA-Score erfasst)</li>
      </ul>
    </p>
  </div>`
          },
          
          {
            id: 5,
            title: "Erkennen einer Sepsis",
            textWithFormatting: `<div>
    <p><strong>Frühe Erkennung:</strong> Eine zügige klinische Beurteilung (Gesamteindruck, Vitalparameter) ist essenziell.</p>
    <ul>
      <li>Erfassung der Vitalparameter: Blutdruck, Puls, Atemfrequenz, SpO₂, Körpertemperatur</li>
      <li>Beobachtung unspezifischer Symptome: Schüttelfrost, Hyperventilation, Vigilanzminderung, Tachykardie, Hypotonie</li>
      <li>Abfrage von Patientenwünschen bezüglich weiterer Maßnahmen (z. B. Intensivverlegung, Patientenverfügung)</li>
    </ul>
    <p>Die Sepsis wird primär klinisch diagnostiziert – eine kontinuierliche Verlaufskontrolle ist unerlässlich.</p>
    <p><strong>Sepsis-Scores:</strong> Neben den SIRS-Kriterien wird z. B. der qSOFA-Score genutzt (Veränderter mentaler Status, systolischer Blutdruck ≤100 mmHg, Atemfrequenz ≥22/min). Ein positiver qSOFA liegt vor, wenn mindestens 2 Parameter auffällig sind. Weitere Scores (NEWS, MEWS) ergänzen die Diagnostik.</p>
  </div>`
          },
          {
            id: 6,
            title: "Blutkultur & Weitere Diagnostik",
            textWithFormatting: `<div>
    <p><strong>Blutkulturdiagnostik:</strong></p>
    <ul>
      <li>Mindestens 2 Blutkulturpaare (je 1× aerob, 1× anaerob) sind vor der Antibiotikagabe abzunehmen.</li>
      <li>Bei vorhandenen Kathetern sind zusätzliche Kulturen notwendig (siehe Diagnostik bei Kathetersepsis).</li>
      <li>Die Befundlatenz liegt häufig bei 2–3 Tagen, und die Nachweisquote variiert stark in Abhängigkeit vom Erreger und dem Infektionsfokus.</li>
    </ul>
    <p><strong>Weitere Diagnostik:</strong> Neben der umfassenden körperlichen Untersuchung (Lunge, Gastrointestinaltrakt, Harnwege, Haut, Meningismus) kommen je nach vermutetem Fokus ergänzende mikrobiologische Tests (Urin, Sputum, Wundabstrich, Drainagesekret) und bildgebende Verfahren (Röntgen, CT, Ultraschall) zum Einsatz.</p>
    <p><strong>Labordiagnostik:</strong> Erfassung der Infektionsschwere und Evaluation der Organdysfunktionen mithilfe von Parametern wie Procalcitonin, CRP, Blutbild, Lactat, BGA, Leber- und Nierenwerten sowie Gerinnungsparametern.</p>
    <p><strong>Sepsis‑Parameter – Übersicht:</strong></p>
    <table border="1" cellspacing="0" cellpadding="4">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Fragestellung</th>
          <th>Bewertung</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Procalcitonin (PCT)</td>
          <td>Bakterielle Infektion?</td>
          <td>
            <ul>
              <li>&gt;0,5–&lt;2,0 ng/mL: mäßiges Risiko</li>
              <li>&gt;2,0–&lt;10 ng/mL: hohes Risiko / Sepsis mit Organdysfunktion</li>
              <li>&gt;10 ng/mL: Sepsis/septischer Schock bis hin zu Multiorganversagen</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>CRP</td>
          <td>Bakterielle Infektion?</td>
          <td>&gt;0,5 mg/dL – universell, aber weniger spezifisch</td>
        </tr>
        <tr>
          <td>Lactat</td>
          <td>Marker des (septischen) Schocks</td>
          <td>&gt;2 mmol/L; Hinweis auf gestörte Mikrozirkulation und Azidose</td>
        </tr>
      </tbody>
    </table>
  </div>`
          },
          {
            id: 7,
            title: "Fokus- und Erregersuche im Detail",
            textWithFormatting: `<div>
    <p><strong>Fokus- und Erregersuche:</strong> Nach der klinischen Diagnose erfolgt die systematische Suche nach dem Infektionsfokus.</p>
    <ul>
      <li><strong>Anamnese & körperliche Untersuchung:</strong>
        <ul>
          <li>Erfragen von spezifischen Symptomen (z. B. Husten, abdominale Schmerzen, Dysurie)</li>
          <li>Erhebung der Vorerkrankungen und Überprüfung auf Fremdkörper</li>
          <li>Umfassende Untersuchung der Lunge, des Gastrointestinaltrakts, der Nieren und der Haut sowie Prüfung auf Meningismus</li>
        </ul>
      </li>
      <li><strong>Blutkulturdiagnostik:</strong>
        <ul>
          <li>Mindestens 2 Blutkulturpaare vor Beginn der Antibiotikatherapie</li>
          <li>Bei Verdacht auf Katheterinfektion: Zusätzliche Blutkulturen und Bestimmung der Differential Time to Positivity (DTP). Ein zentraler Befund, der 2–3 Stunden früher positiv wird (Ratio &gt;5:1), weist auf den Katheter als Infektionsquelle hin.</li>
        </ul>
      </li>
      <li><strong>Ergänzende diagnostische Maßnahmen:</strong>
        <ul>
          <li>Mikrobiologische Tests (z. B. Sputum, Trachealsekret, Stuhl, Urin, Wundabstriche)</li>
          <li>Bildgebende Verfahren (Röntgen, CT, Ultraschall) entsprechend dem vermuteten Infektionsfokus</li>
        </ul>
      </li>
    </ul>
  </div>`
          },
          {
            id: 4,
            title: "Fokus",
            textWithFormatting: `<div>
    <!-- Unbekannter Fokus -->
    <section>
      <h3>Unbekannter Fokus </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Staphylococcus aureus<br/>
              Streptococcusspp.<br/>
              Escherichia coli<br/>
              Enterococcusspp.<br/>
              Klebsiella spp.<br/>
              Pseudomonasspp.
            </td>
            <td>(entspricht zumeist ähnlichen Erregern)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option 1:
          <ul>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Cefepim   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Ggf. Kombination mit:
          <ul>
            <li>Ciprofloxacin   bzw. Levofloxacin   oder</li>
            <li>Fosfomycin  </li>
          </ul>
        </li>
        <li>
          Weitere Optionen:
          <ul>
            <li>Cefuroxim   bzw. Ceftriaxon   bzw. Cefotaxim   oder</li>
            <li>Ampicillin/Sulbactam   oder Piperacillin/Tazobactam  </li>
          </ul>
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Bei septischem Schock und Risikofaktoren für MRE bzw. MRSA: Zusätzlich Daptomycin   oder Vancomycin  </li>
        <li>Bei septischem Schock und Möglichkeit einer invasiven Pilzinfektion: Zusätzlich Echinocandin, z. B. Anidulafungin  </li>
      </ul>
    </section>
  
    <hr/>
  
    <!-- Fokus: Atemwege -->
    <section>
      <h3>Fokus: Atemwege </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Streptococcus pneumoniae<br/>
              Haemophilus influenzae<br/>
              Staphylococcus aureus<br/>
              Enterobacterales<br/>
              Anaerobier<br/>
              Pseudomonas aeruginosa<br/>
              Acinetobacter spp.<br/>
              Stenotrophomonas maltophilia
            </td>
            <td>(ähnliche Erreger in ambulant erworbenen Fällen)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option 1:
          <ul>
            <li>Cefepim   bzw. Ceftazidim   oder</li>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Kombination mit:
          <ul>
            <li>Ciprofloxacin   bzw. Levofloxacin   oder</li>
            <li>Fosfomycin  </li>
          </ul>
        </li>
        <li>
          Option 2:
          <ul>
            <li>Cefuroxim   bzw. Ceftriaxon   bzw. Cefotaxim   oder</li>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Ggf. Kombination mit Makrolid (z. B. Clarithromycin  ) und weitere Optionen (Levofloxacin, Moxifloxacin).
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Bei septischem Schock und Risikofaktoren für MRSA/MRE: Zusätzlich Linezolid  </li>
        <li>Siehe auch: Medikamentöse Therapie der ambulant erworbenen bzw. nosokomialen Pneumonie</li>
      </ul>
    </section>
  
    <hr/>
  
    <!-- Fokus: Harnwege -->
    <section>
      <h3>Fokus: Harnwege </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Enterobacterales (z. B. Escherichia coli, Proteus mirabilis)<br/>
              Pseudomonas aeruginosa<br/>
              Enterococcusspp.<br/>
              Staphylococcus spp.
            </td>
            <td>(ähnliche Erreger)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option 1:
          <ul>
            <li>Cefotaxim   bzw. Ceftriaxon   bzw. Ceftazidim   bzw. Cefepim   oder</li>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Option 2:
          <ul>
            <li>Ampicillin/Sulbactam  , ggf. plus Aminoglykosid (z. B. Gentamicin  ) oder</li>
            <li>Ceftriaxon   bzw. Cefotaxim   oder</li>
            <li>Ertapenem  </li>
          </ul>
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Nach urologischen Eingriffen oder invasiver Harnableitung: Häufiger Nachweis von Staphylokokken, Pseudomonaden, Enterokokken</li>
        <li>Lokales Resistenzspektrum für E. coli ist zu beachten</li>
        <li>Siehe auch: Nosokomiale Harnwegsinfektion – Antibiotische Therapie, Therapie der Urozystitis, Pyelonephritis</li>
      </ul>
    </section>
  
    <hr/>
  
    <!-- Fokus: Darm und gynäkologische Organe -->
    <section>
      <h3>Fokus: Darm und gynäkologische Organe </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Enterobacterales<br/>
              Anaerobier<br/>
              Enterococcusspp.<br/>
              Staphylococcus aureus<br/>
              Pseudomonas aeruginosa
            </td>
            <td>(ähnliche Erreger)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option 1:
          <ul>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Oder Kombinationstherapien mit Metronidazol   plus:
          <ul>
            <li>Ceftazidim   bzw. Cefepim   oder</li>
            <li>Ciprofloxacin   bzw. Levofloxacin  </li>
          </ul>
        </li>
        <li>
          Option 2:
          <ul>
            <li>Piperacillin/Tazobactam   oder Ertapenem   oder</li>
            <li>Kombinationstherapie aus Ceftriaxon   bzw. Cefotaxim   plus Metronidazol  </li>
          </ul>
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Bei septischem Schock und Risiko für MRE: Ggf. zusätzlich Tigecyclin  </li>
        <li>Siehe auch: Antibiotische Therapie bei sekundärer Peritonitis, stationäre Antibiotikatherapie bei Divertikulitis, Therapie der Appendizitis</li>
      </ul>
    </section>
  
    <hr/>
  
    <!-- Fokus: Gallenwege -->
    <section>
      <h3>Fokus: Gallenwege </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Enterobacterales<br/>
              Enterococcusspp.<br/>
              Pseudomonas aeruginosa<br/>
              Anaerobier
            </td>
            <td>(ähnliche Erreger)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option 1:
          <ul>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Oder Kombinationstherapie mit Aminopenicillin (z. B. Ampicillin  ) plus:
          <ul>
            <li>Ceftriaxon   bzw. Cefotaxim   oder</li>
            <li>Ciprofloxacin   bzw. Levofloxacin  </li>
          </ul>
        </li>
        <li>
          Option 2:
          <ul>
            <li>Piperacillin/Tazobactam   oder Ertapenem   oder</li>
            <li>Kombinationstherapie aus Ceftriaxon/Cefotaxim   plus Aminopenicillin (Ampicillin  )</li>
          </ul>
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Bei septischem Schock: Zusätzlich Tigecyclin erwägen  </li>
        <li>Siehe auch: Akute Pankreatitis – medikamentöse Therapie, Cholelithiasis, Cholezystitis und Cholangitis</li>
      </ul>
    </section>
  
    <hr/>
  
    <!-- Fokus: Haut und Weichteile -->
    <section>
      <h3>Fokus: Haut und Weichteile </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Streptococcus pyogenes<br/>
              Staphylococcus aureus<br/>
              Anaerobier<br/>
              Enterobacterales<br/>
              Pseudomonasspp.
            </td>
            <td>(ähnliche Erreger)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option:
          <ul>
            <li>Ceftazidim   bzw. Cefepim   oder</li>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Ciprofloxacin   bzw. Levofloxacin   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Ggf. Kombination mit:
          <ul>
            <li>Clindamycin   oder</li>
            <li>Cefuroxim  </li>
          </ul>
        </li>
        <li>
          Kombinationstherapie: Cefuroxim   bzw. Cefazolin   plus Clindamycin  .
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Siehe auch: Nosokomiale Wundinfektion, bakterielle Infektionen von Haut und Weichteilen</li>
      </ul>
    </section>
  
    <hr/>
  
    <!-- Fokus: Intravasale Fremdkörper -->
    <section>
      <h3>Fokus: Intravasale Fremdkörper </h3>
      <h4>Häufigste Erreger</h4>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead>
          <tr>
            <th>Erreger</th>
            <th>Nosokomiale Infektion</th>
            <th>Ambulant erworbene Infektion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typische Erreger</td>
            <td>
              Koagulasenegative Staphylokokken<br/>
              Staphylococcus aureus<br/>
              Corynebacterium jeikeium<br/>
              Propionibacterium spp.<br/>
              Gramnegative Stäbchenbakterien
            </td>
            <td>(ähnliche Erreger)</td>
          </tr>
        </tbody>
      </table>
      <h4>Therapieoptionen</h4>
      <ul>
        <li>
          Option:
          <ul>
            <li>Vancomycin   oder</li>
            <li>Daptomycin  </li>
          </ul>
        </li>
        <li>
          Ggf. Kombination mit:
          <ul>
            <li>Piperacillin/Tazobactam   oder</li>
            <li>Ceftriaxon   bzw. Cefepim   bzw. Cefotaxim   oder</li>
            <li>Meropenem   bzw. Imipenem/Cilastatin  </li>
          </ul>
        </li>
        <li>
          Weitere Option:
          <ul>
            <li>Vancomycin   (erneut als Standard)</li>
            <li>Ggf. Kombination mit denselben Substanzen wie oben</li>
          </ul>
        </li>
      </ul>
      <h4>Hinweise</h4>
      <ul>
        <li>Möglichkeit einer invasiven Pilzinfektion bedenken</li>
      </ul>
    </section>
  
  </div>`
          },
          {
            id: 1,
            title: "Initialtherapie & Sepsis-Bundles",
            textWithFormatting: `<div>
    <p><strong>Grundprinzip:</strong> Eine adäquate Therapie innerhalb der ersten Stunde ("1-Hour-Bundle") ist kritisch für das Überleben.</p>
    <ul>
      <li>Lactat messen und wiederholt kontrollieren (Ziel: &lt;2 mmol/L)</li>
      <li>Blutkulturdiagnostik vor Beginn der antibiotischen Therapie</li>
      <li>Kalkulierte Breitbandantibiotikatherapie ("Hit hard and early")</li>
      <li>Volumensubstitution: Gabe von Kristalloiden (mindestens 30 mL/kgKG innerhalb von 3 Stunden)</li>
      <li>Einsatz von Vasopressoren bei anhaltender Hypotonie (Ziel: arterieller Mitteldruck 65 mmHg)</li>
    </ul>
  </div>`
          },
          {
            id: 2,
            title: "Kreislaufstabilisierung & Volumentherapie",
            textWithFormatting: `<div>
    <p><strong>Kreislaufstabilisierung:</strong> Engmaschiges hämodynamisches Monitoring ist erforderlich. Zielparameter sind:</p>
    <table border="1" cellspacing="0" cellpadding="4">
      <thead>
        <tr>
          <th>Zielparameter</th>
          <th>Zielwert</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Zentralvenöser Druck (ZVD)</td>
          <td>&ge; 8 cmH₂O (spontan atmend), &ge; 12 cmH₂O (beatmet)</td>
        </tr>
        <tr>
          <td>Arterieller Mitteldruck (MAP)</td>
          <td>65 mmHg</td>
        </tr>
        <tr>
          <td>Lactat</td>
          <td>&le; 2 mmol/L oder fallend</td>
        </tr>
        <tr>
          <td>Zentralvenöse Sauerstoffsättigung (szvO₂)</td>
          <td>&ge; 70%</td>
        </tr>
        <tr>
          <td>Diurese</td>
          <td>&ge; 0,5 mL/kgKG/h</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Volumentherapie:</strong> Rascher Beginn (Fluid-Challenge-Prinzip) und Fortführung, solange Zeichen der Hypoperfusion bestehen. Nach Stabilisierung erfolgt eine zurückhaltende Flüssigkeitsgabe unter regelmäßiger Kontrolle (ZVD, Nierenwerte, Serum-Lactat etc.).</p>
  </div>`
          },
          {
            id: 3,
            title: "Antibiotikatherapie & Medikamentöse Maßnahmen",
            textWithFormatting: `<div>
    <p><strong>Antibiotikatherapie:</strong> Kalkulierte Breitspektrumtherapie unter Berücksichtigung des vermuteten Infektionsfokus.</p>
    <ul>
      <li>Häufig eingesetzte Antibiotika: 
        <ul>
          <li>Piperacillin/Tazobactam</li>
          <li>Ceftazidim bzw. Carbapeneme</li>
        </ul>
      </li>
      <li>Bei MRSA-Verdacht: 
        <ul>
          <li>Linezolid oder Vancomycin (je nach Infektionsfokus)</li>
        </ul>
      </li>
      <li>Regelmäßige Reevaluation der antimykrobiellen Therapie (alle 48–72 h) und ggf. Umstellung auf zielgerichtete Therapien nach Erregernachweis</li>
    </ul>
    <p><strong>Medikamentöse Kreislaufunterstützung:</strong></p>
    <ul>
      <li>Vasopressoren als Standard: 
        <ul>
          <li>Noradrenalin – erste Wahl</li>
          <li>Ergänzend: Vasopressin, Dobutamin oder Adrenalin je nach hämodynamischem Status</li>
        </ul>
      </li>
      <li>Bei anhaltender Instabilität: Einsatz von Betablockern unter strenger Überwachung</li>
      <li>Transfusionen: 
        <ul>
          <li>Erythrozytenkonzentrate bei Hb ≤7 g/dL (Ziel: 7–9 g/dL)</li>
          <li>Thrombozytenkonzentrate und Plasmapräparate bei Bedarf</li>
        </ul>
      </li>
    </ul>
  </div>`
          },
          {
            id: 4,
            title: "Kathetersepsis & Weitere Fokussanierung",
            textWithFormatting: `<div>
    <p><strong>Katheterassoziierte Sepsis:</strong></p>
    <ul>
      <li>Zusätzliche Blutkulturdiagnostik aus allen zentralen Venenkathetern</li>
      <li>Bestimmung der Differential Time to Positivity (DTP): Ein zentraler Befund, der 2–3 Stunden früher positiv wird (Ratio &gt;5:1), spricht für den Katheter als Infektionsquelle</li>
      <li>Bei positivem DTP: Entfernung sämtlicher intravasaler Katheter und sofortiger Start einer zielgerichteten Antibiotikatherapie</li>
    </ul>
    <p><strong>Fokussanierung:</strong></p>
    <ul>
      <li>Entfernung von Fremdmaterial (z. B. ZVK, Port)</li>
      <li>Chirurgische Behandlung von Abszessen und infizierten Wunden</li>
      <li>Abklärung abdominalchirurgischer Komplikationen (z. B. Ileus, Anastomoseninsuffizienz, Peritonitis)</li>
    </ul>
  </div>`
          },
          {
            id: 5,
            title: "Tarragona-Strategie",
            textWithFormatting: `<div>
    <p><strong>Tarragona-Strategie:</strong> Diese Strategie fasst fünf Leitsätze für die antibiotische Therapie im Intensivbereich zusammen:</p>
    <ul>
      <li>Beobachtung von Risikofaktoren für multiresistente Erreger (z. B. vorherige Antibiotikatherapie, Reha-/Pflegeeinrichtungen, Liegedauer, Vorerkrankungen, Fremdmaterialien)</li>
      <li>Berücksichtigung des lokalen Erreger- und Resistenzspektrums</li>
      <li>Schneller Therapiebeginn ("Hit hard and early") – idealerweise innerhalb einer Stunde</li>
      <li>Hohe Initial  und ggf. Einsatz kontinuierlicher Dauerinfusionen, um einen adäquaten Wirkspiegel zu erzielen</li>
      <li>Schnelle Deeskalation und Sequenztherapie (Wechsel von i.v. auf p.o.), sobald Erregernachweis und Resistenzprofile vorliegen</li>
    </ul>
  </div>`
          },
          {
            id: 6,
            title: "Weitere Maßnahmen & Supportive Therapie",
            textWithFormatting: `<div>
    <p><strong>Supportive Therapie:</strong></p>
    <ul>
      <li>Sauerstoffgabe per Nasensonde oder Maske; bei respiratorischer Insuffizienz: Beatmungstherapie unter Beachtung lungenprotektiver Prinzipien (Tidalvolumen max. 6 mL/kgKG, PEEP &ge; 5 cmH₂O, Spitzendrücke &le;30 cmH₂O, Driving Pressure &le;15 cmH₂O)</li>
      <li>Sedierung: Zielwert auf der RASS-Skala 0/-1; Weaning-Protokoll bei Beatmungsdauer &gt;24 h</li>
      <li>Blutzuckermanagement: Insulingesteuerte Einstellung (Ziel &le;180 mg/dL) mit häufigen Kontrollen (initial 1–2 h, danach 4 h)</li>
      <li>Thromboseprophylaxe: Kombination aus mechanischen Maßnahmen (intermittierende pneumatische Wadenkompression, Thromboseprophylaxestrümpfe) und medikamentöser Prophylaxe (NMH oder UFH)</li>
      <li>Stressulkusprophylaxe: Einsatz von H2-Blockern oder Protonenpumpenhemmern bei Risikofaktoren für gastrointestinale Blutungen</li>
      <li>Ernährung: Beginn einer vorsichtigen enteralen Ernährung (ca. 500 kcal/Tag) innerhalb der ersten 48 h; falls nicht ausreichend, Kombination mit parenteraler Ernährung in den ersten 7 Tagen erwägen</li>
      <li>Nierenersatzverfahren: Bei Indikation (therapierefraktäre Überwässerung, Azidose, Hyperkaliämie, Urämie) bevorzugt kontinuierliche Verfahren</li>
      <li>Glucocorticoide: Gabe von Hydrocortison nur im therapierefraktären septischen Schock</li>
      <li>Immunglobuline: i.v. Gabe im Einzelfall (keine routinemäßige Anwendung aufgrund begrenzter Evidenz)</li>
      <li>Bicarbonattherapie: Einsatz bei schwerer metabolischer Azidose (pH ≤7,2) und akuter Nierenschädigung; nicht bei Lactatazidose (pH ≥7,15)</li>
    </ul>
  </div>`
          },
          {
            id: 7,
            title: "Komplikationen & Sekundäre Syndrome",
            textWithFormatting: `<div>
    <p><strong>Critical-Illness-Polyneuropathie (CIP):</strong></p>
    <ul>
      <li><strong>Definition:</strong> Häufige Erkrankung bei beatmeten Intensivpatient:innen (z. B. infolge Sepsis oder Multiorganversagen), gekennzeichnet durch eine axonale Schädigung vorwiegend der motorischen Neuronen.</li>
      <li><strong>Symptome:</strong> Distal betonte, symmetrische Muskelschwäche, ausgeprägte Tetraparese, verlängerte Weaning-Zeit; Sensibilitätsstörungen (handschuh-/strumpfförmig) können auftreten, sind aber nicht zwingend.</li>
      <li><strong>Diagnostik:</strong> Reduktion oder Fehlen der muskeleigenen Reflexe, Elektroneurografie (ENG) zeigt Amplitudenreduktion und Elektromyografie (EMG) spontane Aktivität (Fibrillationen usw.).</li>
      <li><strong>Therapie:</strong> Keine spezifische Therapie – unterstützende Maßnahmen wie Ernährungsoptimierung, Frühmobilisation und ein gezieltes Weaning sind wichtig.</li>
    </ul>
    <p><strong>Disseminierte intravasale Koagulopathie (DIC):</strong></p>
    <ul>
      <li><strong>Ätiologie:</strong> Mikrozirkulationsstörungen (z. B. im Rahmen eines Schocks), indirekte Gerinnungsaktivierung durch Bakterientoxine, Tumorzerfall, Gewebetrauma oder Blutkontakt zu körperfremden Oberflächen (z. B. Dialyse).</li>
      <li><strong>Pathophysiologie:</strong> Bildung von Mikrothromben führt zu Durchblutungsstörungen und Nekrosen; gleichzeitig kommt es zum Verbrauch von Thrombozyten und Gerinnungsfaktoren sowie zu sekundärer Hyperfibrinolyse.</li>
      <li><strong>Diagnostik:</strong> Laboruntersuchungen zeigen Thrombozytopenie, verlängerten aPTT, reduzierten Quick-Wert, sinkende Fibrinogenwerte und erhöhte D-Dimere. Erweiterte Parameter (z. B. Protein C, Antithrombin) können zusätzlich herangezogen werden.</li>
      <li><strong>Therapie:</strong> Behandlung der Grunderkrankung, in der frühen Phase Gabe von Heparin (bei vorherrschender Gerinnungsaktivierung) und in der späten Phase transfusionelle Maßnahmen (Thrombozyten-, Erythrozyten- oder Plasmakonzentrate) sowie Einsatz von Antifibrinolytika (z. B. Tranexamsäure). Bei manifester DIC mit Blutung ist Heparin kontraindiziert.</li>
    </ul>
    <p><strong>Schilddrüsenfunktion – Sepsis-assoziierte Störungen:</strong></p>
    <ul>
      <li><strong>Sekundäre Hypothyreose:</strong> Bei Sepsis ist die Freisetzung von TRH und TSH häufig reduziert, was zu einer sekundären Hypothyreose führt. Bestehende L-Thyroxin-Substitutionen sollten fortgeführt oder angepasst werden.</li>
      <li><strong>Medikamenteneinflüsse:</strong> Amiodaron und Metoclopramid können TSH erhöhen, während Katecholamine und Glucocorticoide TSH senken.</li>
      <li><strong>Therapie:</strong> Regelmäßige Kontrolle der Schilddrüsenwerte (TSH, Schilddrüsenhormone) und gegebenenfalls Einleitung bzw. Anpassung einer Schilddrüsenersatztherapie.</li>
    </ul>
  </div>`
          }
        ],
      },
      {
        id: 2,
        title: "Fragen",
        questions: [
          {
            title: "Welche Maßnahme gehört NICHT zur Initialtherapie bei Sepsis?",
            answers: [
              { name: "Blutkulturdiagnostik vor Antibiotikagabe", isCorrect: false },
              { name: "Kalkulierte Breitbandantibiotikatherapie", isCorrect: false },
              { name: "Verzicht auf Volumensubstitution", isCorrect: true },
              { name: "Lactatmessung und -kontrolle", isCorrect: false }
            ]
          },
          {
            title: "Welcher Zielwert gehört zur Kreislaufstabilisierung bei Sepsis?",
            answers: [
              { name: "ZVD unter 5 cmH₂O", isCorrect: false },
              { name: "Lactat > 4 mmol/L", isCorrect: false },
              { name: "Arterieller Mitteldruck (MAP) von 65 mmHg", isCorrect: true },
              { name: "Diurese < 0,5 mL/kgKG/h", isCorrect: false }
            ]
          },
          {
            title: "Was bedeutet das Prinzip 'Hit hard and early' in der Antibiotikatherapie?",
            answers: [
              { name: "Sofortiger Beginn einer kalkulierten Breitbandtherapie", isCorrect: true },
              { name: "Langsamer Anstieg der Dosierung", isCorrect: false },
              { name: "Abwarten der Blutkulturergebnisse", isCorrect: false },
              { name: "Begrenzte Therapie nur bei schweren Verläufen", isCorrect: false }
            ]
          },
          {
            title: "Welche Option gehört zur Therapie bei unbekanntem Fokus?",
            answers: [
              { name: "Allein monotherapeutische Gabe von Cefepim", isCorrect: false },
              { name: "Kombinationstherapie mit Piperacillin/Tazobactam und Ciprofloxacin", isCorrect: true },
              { name: "Zielgerichtete Therapie ohne Kombination", isCorrect: false },
              { name: "Verzicht auf Antibiotika", isCorrect: false }
            ]
          },
          {
            title: "Welche Parameter sind entscheidend für die Überwachung während der Kreislaufstabilisierung?",
            answers: [
              { name: "Nur Blutdruck und Puls", isCorrect: false },
              { name: "ZVD, MAP, Lactat, szvO₂ und Diurese", isCorrect: true },
              { name: "Nur Sauerstoffsättigung", isCorrect: false },
              { name: "Nur Temperatur und Diurese", isCorrect: false }
            ]
          },
          {
            title: "Welche Aussage zur antibiotischen Therapie bei Fokus Atemwege ist korrekt?",
            answers: [
              { name: "Antibiotika werden erst nach Befundabklärung verabreicht", isCorrect: false },
              { name: "Makrolide können als Zusatz eingesetzt werden", isCorrect: true },
              { name: "Es erfolgt ausschließlich eine monotherapeutische Behandlung", isCorrect: false },
              { name: "Die Behandlung beschränkt sich auf eine Einzeldosis", isCorrect: false }
            ]
          },
          {
            title: "Welche Maßnahme gehört zur Fokussanierung bei Kathetersepsis?",
            answers: [
              { name: "Verlängerte Volumentherapie", isCorrect: false },
              { name: "Erhöhung der Antibiotikadosis", isCorrect: false },
              { name: "Entfernung aller intravasalen Katheter", isCorrect: true },
              { name: "Zielgerichtete antifungale Therapie", isCorrect: false }
            ]
          },
          {
            title: "Welche Kombinationstherapie kann bei Fokus Darm und gynäkologische Organe eingesetzt werden?",
            answers: [
              { name: "Monotherapie mit Meropenem", isCorrect: false },
              { name: "Begrenzt Clindamycin allein", isCorrect: false },
              { name: "Ausschließlich Ceftriaxon", isCorrect: false },
              { name: "Piperacillin/Tazobactam in Kombination mit Metronidazol", isCorrect: true }
            ]
          },
          {
            title: "Welche ergänzende Maßnahme gehört zur Therapie bei Fokus Gallenwege?",
            answers: [
              { name: "Alleinige Gabe von Piperacillin/Tazobactam", isCorrect: false },
              { name: "Kombinationstherapie mit Aminopenicillin und Ceftriaxon", isCorrect: true },
              { name: "Monotherapie mit Meropenem", isCorrect: false },
              { name: "Verzicht auf Kombinationstherapie", isCorrect: false }
            ]
          },
          {
            title: "Welche Aussage trifft auf die supportive Therapie in der Sepsis-Initialtherapie zu?",
            answers: [
              { name: "Nur die Antibiotikatherapie ist entscheidend", isCorrect: false },
              { name: "Stressulkusprophylaxe ist entbehrlich", isCorrect: false },
              { name: "Blutzuckermanagement und Thromboseprophylaxe sind zentral", isCorrect: true },
              { name: "Beatmungstherapie erfolgt ohne lungenprotektive Maßnahmen", isCorrect: false }
            ]
          },
          {
            title: "Welche diagnostische Maßnahme darf bei Sepsis nicht vernachlässigt werden?",
            answers: [
              { name: "Lungensonographie", isCorrect: false },
              { name: "Unmittelbare CT-Untersuchung", isCorrect: false },
              { name: "Blutkulturdiagnostik vor Antibiotikagabe", isCorrect: true },
              { name: "Röntgen des Thorax", isCorrect: false }
            ]
          },
          {
            title: "Was ist ein typischer Indikator für eine erfolgreiche Volumentherapie?",
            answers: [
              { name: "Ein ansteigender Blutdruckwert über 90 mmHg", isCorrect: false },
              { name: "Ein Abfall der Körpertemperatur", isCorrect: false },
              { name: "Ein fallender Lactatwert (< 2 mmol/L)", isCorrect: true },
              { name: "Ein signifikanter Anstieg des Pulses", isCorrect: false }
            ]
          },
          {
            title: "Welcher Wert ist typisch für eine Hyperkaliämie bei Sepsis?",
            answers: [
              { name: "Ein dynamisch verändernder Kaliumwert", isCorrect: false },
              { name: "Ein erhöhter Kaliumwert über 5,5 mmol/L", isCorrect: true },
              { name: "Ein konstanter Kaliumwert von 4,0 mmol/L", isCorrect: false },
              { name: "Ein Kaliumwert unter 3,5 mmol/L", isCorrect: false }
            ]
          },
          {
            title: "Welche Maßnahme wird zur Fokussanierung bei Kathetersepsis empfohlen?",
            answers: [
              { name: "Erhöhung der Infusionsrate", isCorrect: false },
              { name: "Entfernung des betroffenen Katheters", isCorrect: true },
              { name: "Ausschließliche Gabe von Antikoagulanzien", isCorrect: false },
              { name: "Verlängerter Antibiotikaverband", isCorrect: false }
            ]
          },
          {
            title: "Welcher Aspekt gehört nicht zur Überwachung der Kreislaufstabilisierung?",
            answers: [
              { name: "Monitoring des Blutzuckerspiegels", isCorrect: true },
              { name: "Regelmäßige Kontrolle der zentralvenösen Sauerstoffsättigung", isCorrect: false },
              { name: "Überwachung des Blutdrucks und Pulses", isCorrect: false },
              { name: "Beurteilung der Diurese", isCorrect: false }
            ]
          },
          {
            title: "Wie wird die Differential Time to Positivity (DTP) in der Kathetersepsis genutzt?",
            answers: [
              { name: "Ein langsamer positiver Befund bestätigt eine katheterunabhängige Infektion", isCorrect: false },
              { name: "DTP wird zur Dosismodifikation der Antibiotika genutzt", isCorrect: false },
              { name: "DTP hat keinen Einfluss auf die Therapie", isCorrect: false },
              { name: "Ein schneller positiver Befund (2–3 Stunden früher, Ratio >5:1) weist auf den Katheter als Infektionsquelle hin", isCorrect: true }
            ]
          },
          {
            title: "Welche Rolle spielt die Reevaluation der Therapie in der Sepsis-Initialtherapie?",
            answers: [
              { name: "Sie ersetzt die initiale Diagnose", isCorrect: false },
              { name: "Sie ist nur bei invasiven Infektionen relevant", isCorrect: false },
              { name: "Sie wird erst nach der Therapie durchgeführt", isCorrect: false },
              { name: "Sie ermöglicht die Anpassung der Therapie basierend auf aktuellen Befunden", isCorrect: true }
            ]
          },
          {
            title: "Welche Aussage beschreibt die rationale Volumentherapie bei Sepsis am besten?",
            answers: [
              { name: "Fluid-Challenge-Prinzip ist veraltet", isCorrect: false },
              { name: "Ein schneller Flüssigkeitsbolus, gefolgt von kontrollierter Gabe, solange Zeichen der Hypoperfusion vorliegen", isCorrect: true },
              { name: "Flüssigkeitsgabe sollte ganz vermieden werden", isCorrect: false },
              { name: "Kontinuierliche, unlimitierte Flüssigkeitsgabe ist ideal", isCorrect: false }
            ]
          },
          {
            title: "Welche Kombination wird häufig als Zusatz zur antibiotischen Therapie bei Fokus Atemwege verwendet?",
            answers: [
              { name: "Makrolide wie Clarithromycin als Zusatz", isCorrect: true },
              { name: "Monotherapie mit Beta-Lactamen", isCorrect: false },
              { name: "Aminoglycoside als Einzeltherapie", isCorrect: false },
              { name: "Fluorchinolone ohne weitere Therapie", isCorrect: false }
            ]
          },
          {
            title: "Welche Zielparameter sind bei der Kreislaufstabilisierung besonders wichtig?",
            answers: [
              { name: "Nur der MAP-Wert", isCorrect: false },
              { name: "Blutbildwerte und Leberparameter", isCorrect: false },
              { name: "Körpertemperatur und Puls", isCorrect: false },
              { name: "ZVD, MAP, Lactat, szvO₂ und Diurese", isCorrect: true }
            ]
          },
          {
            title: "Welche Maßnahme verbessert direkt die Mikrozirkulation in der Sepsis-Initialtherapie?",
            answers: [
              { name: "Ein Abfall des Lactatwerts", isCorrect: true },
              { name: "Erhöhung der Diurese", isCorrect: false },
              { name: "Steigerung des ZVD", isCorrect: false },
              { name: "Senkung der Körpertemperatur", isCorrect: false }
            ]
          },
          {
            title: "Wie sollte bei Verdacht auf sepsisbedingte Organversagen vorgegangen werden?",
            answers: [
              { name: "Abwarten der Laborergebnisse, bevor Maßnahmen ergriffen werden", isCorrect: false },
              { name: "Frühzeitige Identifikation des Infektionsfokus und sofortige Intervention", isCorrect: true },
              { name: "Ausschließliche Überwachung ohne sofortige Intervention", isCorrect: false },
              { name: "Verzicht auf Antibiotika, wenn Vitalparameter normal erscheinen", isCorrect: false }
            ]
          },
          {
            title: "Welche Rolle spielt das '1-Hour-Bundle' in der Sepsis-Initialtherapie?",
            answers: [
              { name: "Es wird nach Abschluss aller diagnostischen Maßnahmen initiiert", isCorrect: false },
              { name: "Es dient nur der Dokumentation", isCorrect: false },
              { name: "Es ist ein veraltetes Konzept", isCorrect: false },
              { name: "Es fasst alle Maßnahmen zusammen, die innerhalb der ersten Stunde durchgeführt werden müssen", isCorrect: true }
            ]
          },
          {
            title: "Welche der folgenden Maßnahmen gehört NICHT zum '1-Hour-Bundle'?",
            answers: [
              { name: "Abwarten auf endgültige Blutkulturergebnisse", isCorrect: true },
              { name: "Blutkulturdiagnostik vor Antibiotikagabe", isCorrect: false },
              { name: "Sofortiger Beginn einer Breitbandtherapie", isCorrect: false },
              { name: "Volumensubstitution innerhalb von 3 Stunden", isCorrect: false }
            ]
          },
          {
            title: "Warum ist die regelmäßige Reevaluation der Therapie wichtig?",
            answers: [
              { name: "Weil sie die Notwendigkeit der Intensivtherapie ausschließt", isCorrect: false },
              { name: "Weil die initiale Therapie immer ausreichend ist", isCorrect: false },
              { name: "Weil sie ermöglicht, die Therapie an aktuelle Befunde anzupassen", isCorrect: true },
              { name: "Weil sie erst nach der Therapie durchgeführt wird", isCorrect: false }
            ]
          },
          {
            title: "Welche Aussage zu Vasopressoren in der Sepsistherapie trifft zu?",
            answers: [
              { name: "Ihr Einsatz verzögert die Antibiotikatherapie", isCorrect: false },
              { name: "Sie ersetzen die Volumensubstitution", isCorrect: false },
              { name: "Sie werden ausschließlich bei normovolem Patienten eingesetzt", isCorrect: false },
              { name: "Sie werden eingesetzt, um einen MAP von 65 mmHg zu erreichen", isCorrect: true }
            ]
          },
          {
            title: "Welche zusätzliche Maßnahme kann zur Verbesserung der organischen Funktion beitragen?",
            answers: [
              { name: "Erhöhung der Flüssigkeitsgabe ohne Kontrolle", isCorrect: false },
              { name: "Nur empirische Antibiotikatherapie ohne Reevaluation", isCorrect: false },
              { name: "Stressulkusprophylaxe", isCorrect: true },
              { name: "Verzicht auf Sedierung", isCorrect: false }
            ]
          }
        ]
      },
      // Розділ з фактографічними питаннями (Faktenfragen)
      {
        id: 3,
        title: "Faktenfragen",
        questions: [
          {
            title: "Was ist das Ziel der frühen Lactatmessung in der Sepsis-Initialtherapie?",
            hidden_answer: "Ein Lactatwert unter 2 mmol/L bzw. ein fallender Wert deutet auf eine verbesserte Mikrozirkulation hin."
          },
          {
            title: "Welcher arterieller Mitteldruck (MAP) wird als Ziel angestrebt?",
            hidden_answer: "Der MAP soll bei 65 mmHg liegen."
          },
          {
            title: "Was bedeutet 'Hit hard and early' in der antibiotischen Therapie?",
            hidden_answer: "Sofortiger Beginn einer kalkulierten Breitbandtherapie noch vor Erhalt der Blutkulturbefunde."
          },
          {
            title: "Welche Rolle haben Vasopressoren in der Sepsistherapie?",
            hidden_answer: "Vasopressoren werden eingesetzt, um trotz Volumensubstitution eine Hypotonie zu beheben und einen MAP von 65 mmHg zu erreichen."
          },
          {
            title: "Nennen Sie ein Beispiel für eine Kombinationstherapie bei unbekanntem Fokus.",
            hidden_answer: "Beispielsweise Piperacillin/Tazobactam in Kombination mit Ciprofloxacin oder Levofloxacin."
          },
          {
            title: "Welche Parameter werden zur Überwachung der Kreislaufstabilisierung herangezogen?",
            hidden_answer: "Zu den Zielparametern gehören ZVD, MAP, Lactat, zentralvenöse Sauerstoffsättigung (szvO₂) und Diurese."
          },
          {
            title: "Welche ergänzende antibiotische Maßnahme kann bei Fokus Atemwege hinzugefügt werden?",
            hidden_answer: "Zusätzlich kann ein Makrolid wie Clarithromycin zur Breitbandtherapie eingesetzt werden."
          },
          {
            title: "Warum ist die Blutkulturdiagnostik vor Beginn der Antibiotikatherapie wichtig?",
            hidden_answer: "Um den Erreger zu identifizieren und eine gezielte Therapie zu ermöglichen, ohne die initialen Maßnahmen zu verzögern."
          },
          {
            title: "Wie wird bei Kathetersepsis der Katheter als Infektionsquelle bestätigt?",
            hidden_answer: "Durch die Differential Time to Positivity (DTP), wobei ein zentraler Befund 2–3 Stunden früher positiv wird (Ratio >5:1)."
          },
          {
            title: "Was fasst das '1-Hour-Bundle' in der Sepsis-Initialtherapie zusammen?",
            hidden_answer: "Es kombiniert Maßnahmen wie Lactatmessung, Blutkulturdiagnostik, kalkulierte Breitbandantibiotikatherapie und Volumensubstitution in der ersten Stunde."
          },
          {
            title: "Wie lange sollen Blutkulturpaare idealerweise vor Antibiotikagabe abgenommen werden?",
            hidden_answer: "Mindestens 2 Blutkulturpaare, idealerweise an separaten Punktionsstellen."
          },
          {
            title: "Was signalisiert ein fallender Lactatwert in der Therapie?",
            hidden_answer: "Eine verbesserte Mikrozirkulation und Therapieeffekt."
          },
          {
            title: "Welche Konsequenz hat ein MAP unter 65 mmHg bei Sepsis?",
            hidden_answer: "Ein MAP unter 65 mmHg ist ein Hinweis auf unzureichende Kreislaufstabilisierung und erhöht das Risiko für Organversagen."
          },
          {
            title: "Welche Maßnahme ist elementar für die frühzeitige Erkennung von Sepsis?",
            hidden_answer: "Die Erfassung der Vitalparameter und Anwendung von Sepsis-Scores wie qSOFA."
          },
          {
            title: "Was ist ein typischer Indikator für eine erfolgreiche antibiotische Therapie?",
            hidden_answer: "Ein Absinken der Entzündungsparameter (z. B. PCT, CRP) in Kombination mit klinischer Besserung."
          }
        ]
      }
    ]
  };