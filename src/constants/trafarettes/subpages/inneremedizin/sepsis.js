export default {
  path: "sepsis",
  folder: "innereMedizin",
  content: [
    {
      id: 1,
      title: "Sepsis, Organdysfunktion & Septischer Schock",
      childTabs: [
        {
          id: 1,
          title: "Definition",
          textWithFormatting: `<div>
    <h3>Definition</h3>
    <p><strong>Sepsis:</strong> Akut lebensbedrohliche Organdysfunktion infolge einer dysregulierten Immunantwort auf eine (mutmaßliche) Infektion.</p>
    <p><strong>Sepsisassoziierte Organdysfunktion:</strong> Eine Änderung des SOFA-Scores um ≥2 Punkte für das jeweils betroffene Organsystem.</p>
    <p><strong>Septischer Schock:</strong> Die Maximalvariante der Sepsis, gekennzeichnet durch Hypotonie (MAP &lt;65 mmHg), die trotz adäquater Volumensubstitution nur durch den Einsatz von Katecholaminen korrigierbar ist, sowie einen Serum-Lactatwert &gt;2 mmol/L (&gt;18 mg/dL).</p>
    <p><strong>Schwere Sepsis (veraltet):</strong> Früher war für die Diagnose nicht der vollständige Nachweis einer Infektion nötig – allein der Verdacht genügte.</p>
    <h4>Blutstrominfektion und Bakteriämie</h4>
    <ul>
      <li><strong>Blutstrominfektion:</strong> Nachweis von Erregern (z. B. Bakterien oder Pilze) im Blut, der eine systemische Entzündungsreaktion mit entsprechenden klinischen, laborchemischen und hämodynamischen Veränderungen auslöst. Der Nachweis erfolgt überwiegend über positive Blutkulturen, seltener mittels PCR.</li>
      <li><strong>Bakteriämie:</strong> Transiente Präsenz von Bakterien im Blut (beispielsweise nach dem Zähneputzen), die nicht zwangsläufig mit einem systemischen Parameterwechsel einhergehen muss. Hierbei sind positive Blutkulturen nicht zwingend für die Sepsisdiagnose.</li>
      <li>Hinweis: Das Vorliegen einer Blutstrominfektion impliziert nicht automatisch das Vorliegen einer Sepsis.</li>
    </ul>
  </div>`,
        },
        {
          id: 2,
          title: "Epidemiologie",
          textWithFormatting: `<div>
    <h3>Epidemiologie</h3>
    <p>Die Sepsis ist weltweit eine sehr häufige Erkrankung, die erheblich zur Sterblichkeit beiträgt.</p>
    <ul>
      <li><strong>Deutschland:</strong> ca. 158 von 100.000 gemeldeten Fällen</li>
      <li><strong>USA:</strong> ca. 517 von 100.000 gemeldeten Fällen</li>
      <li><strong>Schweden:</strong> ca. 780 von 100.000 gemeldeten Fällen</li>
      <li><strong>Weltweit:</strong> Rund 48,9 Millionen Sepsisfälle pro Jahr</li>
      <li>Etwa 20% aller Todesfälle weltweit sind sepsisassoziiert.</li>
    </ul>
    <p>Diese Zahlen unterstreichen die Relevanz der Sepsis als globales Gesundheitsproblem.</p>
  </div>`,
        },
        {
          id: 3,
          title: "Ätiologie",
          textWithFormatting: `<div>
    <h3>Ätiologie</h3>
    <p>Die Sepsis resultiert aus einer Infektion, die zu einer überwältigenden und dysregulierten Immunantwort führt.</p>
    <h4>Infektionsfokus:</h4>
    <ul>
      <li>Jeder Infektionsherd kann eine Sepsis auslösen (z. B. Spondylodiszitis, Endokarditis, Osteomyelitis, Pneumonie, Abszess, Urozystitis).</li>
    </ul>
    <h4>Häufigste bakterielle Erreger:</h4>
    <ul>
      <li>Escherichia coli (44,7%)</li>
      <li>Staphylococcus aureus (26,8%)</li>
      <li>Streptococcus spp. (18,7%)</li>
      <li>Pseudomonas spp. (4,6%)</li>
    </ul>
    <h4>Häufige Infektionsorte:</h4>
    <ul>
      <li>Respirationstrakt (pneumogene Sepsis)</li>
      <li>Abdomen</li>
      <li>Niere und ableitende Harnwege</li>
      <li>Haut und Weichteile</li>
      <li>Katheter-assoziierte Infektionen (z. B. ZVK-Infektionen)</li>
      <li>Zentralnervensystem (ZNS)</li>
    </ul>
  </div>`,
        },
        {
          id: 4,
          title: "Pathophysiologie",
          textWithFormatting: `<div>
    <h3>Pathophysiologie</h3>
    <h4>Auslöser und Immunreaktion:</h4>
    <p>Die Sepsis wird in der Regel durch bakterielle Erreger ausgelöst. Seltener können auch Pilze, Viren oder Parasiten eine Rolle spielen.</p>
    <ul>
      <li><strong>PAMPs:</strong> Erregerbestandteile wie Lipopolysaccharide (Endotoxine), Exotoxine und DNA binden an Toll-like-Rezeptoren, was die Freisetzung proinflammatorischer Zytokine (z. B. IL‑1, TNF‑α) initiiert.</li>
      <li>Diese initiale Aktivierung führt zur Kaskade weiterer Signalwege wie dem Komplementsystem sowie der Freisetzung weiterer Zytokine (IL‑6, IL‑12, IL‑15, MIF).</li>
      <li>Gleichzeitig werden antiinflammatorische Signalwege aktiviert, die die proinflammatorische Wirkung abmildern, jedoch auch selbst zu Organfunktionsstörungen beitragen können.</li>
    </ul>
    <h4>Direkte Effekte:</h4>
    <ul>
      <li><strong>Endothelzellaktivierung und Kapillarleck:</strong> Die Freisetzung von Stickstoffmonoxid (NO) führt zu einer Vasodilatation, Schädigung der Endothelzellen und einem Verlust der Barrierefunktion, was Ödembildung zur Folge hat.</li>
      <li><strong>Blutgerinnung:</strong> Überexpression von Gewebefaktor auf Endothelzellen und Monozyten führt zu vermehrter Thrombinbildung, Mikrothrombosierung und letztlich zu Störungen der Fibrinolyse, was das Risiko einer disseminierten intravasalen Gerinnung (DIC) erhöht.</li>
    </ul>
    <h4>Mechanismen des Organversagens:</h4>
    <ul>
      <li>Störungen der Mikrozirkulation durch mangelhafte Gewebeoxygenierung</li>
      <li>Mitochondriale Dysfunktionen und oxidativer Stress</li>
      <li>Funktionsstörungen der Immunzellen („Immunparalyse“)</li>
    </ul>
    <h4>Betroffene Organe:</h4>
    <ul>
      <li>Herz: Septische Kardiomyopathie (verminderte Pumpfunktion)</li>
      <li>Lunge: ARDS (Acute Respiratory Distress Syndrome)</li>
      <li>ZNS: Septische Enzephalopathie (Veränderung des Bewusstseins)</li>
      <li>Niere: Akute Nierenschädigung</li>
      <li>Leber: Leberversagen (eingeschränkte Entgiftungs- und Synthesefunktion)</li>
      <li>Darm: Paralytischer Ileus</li>
    </ul>
    <p>Die Balance zwischen pro- und antiinflammatorischer Reaktion ist entscheidend – bei einer dysregulierten Immunantwort kommt es zum Organversagen.</p>
  </div>`,
        },
        {
          id: 5,
          title: "Symptome",
          textWithFormatting: `<div>
    <h3>Symptome</h3>
    <p>Da es kein pathognomonisches Leitsymptom gibt, basiert die Diagnose der Sepsis auf einer Gesamteinschätzung von klinischen und laborchemischen Parametern.</p>
    <h4>Kardinalsymptome:</h4>
    <ul>
      <li>Fieber oder seltener Hypothermie</li>
      <li>Schüttelfrost</li>
      <li>Veränderter mentaler Status (z. B. Vigilanzminderung)</li>
      <li>Tachykardie und Hypotonie</li>
      <li>Erhöhte Atemfrequenz</li>
    </ul>
    <h4>Weitere klinische Hinweise:</h4>
    <ul>
      <li><strong>Zentralisation:</strong> Frühe Phase – warme, gut durchblutete Akren; im weiteren Verlauf - kalte, marmorierte Haut und Kaltschweißigkeit</li>
      <li><strong>Ödembildung:</strong> Durch das Kapillarleck kommt es zum Flüssigkeitsverlust aus dem Gefäßsystem</li>
      <li><strong>Petechien:</strong> Auftretend bei Thrombopenie (bspw. Waterhouse-Friderichsen-Syndrom)</li>
    </ul>
    <h4>Fokusspezifische Symptome:</h4>
    <ul>
      <li><strong>Urosepsis:</strong> Dysurie, Pollakisurie, Algurie, Flankenschmerzen</li>
      <li><strong>Pneumonie:</strong> Dyspnoe und Husten</li>
      <li><strong>Meningitis:</strong> Kopfschmerzen, Nackensteifigkeit (Meningismus)</li>
      <li><strong>Katheter-/Fremdkörperinfektion:</strong> Lokale Entzündungszeichen an der Einstichstelle</li>
      <li><strong>Abdomineller Fokus:</strong> Zeichen eines akuten Abdomens</li>
    </ul>
  </div>`,
        },
        {
          id: 6,
          title: "Diagnostik & Erkennen einer Sepsis",
          textWithFormatting: `<div>
    <h3>Diagnostik</h3>
    <p>Die Diagnostik erfolgt parallel zur Einleitung der Therapie, um den klinischen Zustand rasch beurteilen zu können.</p>
    <h4>Erste klinische Beurteilung:</h4>
    <ul>
      <li>Erfassung der Vitalparameter: Blutdruck, Puls, Atemfrequenz, Sauerstoffsättigung und Temperatur</li>
      <li>Bewertung des Allgemeinzustandes und Erfassen unspezifischer Symptome (Schüttelfrost, Hyperventilation, Vigilanzminderung)</li>
      <li>Ermittlung von Patientenwünschen, z. B. bezüglich Intensivverlegung oder Patientenverfügung</li>
    </ul>
    <h4>Sepsis-Scores:</h4>
    <p>Zur Früherkennung und Diagnosestellung werden diverse Scores eingesetzt:</p>
    <ul>
      <li><strong>SIRS:</strong> Früher das Kriterium von ≥2 SIRS-Kriterien, heute noch unterstützend</li>
      <li><strong>qSOFA:</strong> Beurteilungsparameter:
        <ul>
          <li>Veränderter mentaler Status</li>
          <li>Systolischer Blutdruck ≤100 mmHg</li>
          <li>Atemfrequenz ≥22/min</li>
        </ul>
        Ein positiver Wert liegt vor, wenn mindestens 2 Parameter abnormal sind.
      </li>
      <li><strong>Weitere Scores:</strong> NEWS, MEWS und insbesondere der SOFA-Score, dessen Anstieg um ≥2 Punkte die Sepsisdiagnose unterstützt.</li>
    </ul>
    <h4>Labordiagnostik & Bildgebung:</h4>
    <ul>
      <li>Mikrobiologische Tests: Blutkulturdiagnostik (mind. 2 Blutkulturpaare vor Antibiotikagabe), Urin, Sputum, Wundabstriche, Drainagesekrete etc.</li>
      <li>Bildgebende Verfahren (Röntgen, CT, Ultraschall) je nach vermutetem Infektionsfokus</li>
      <li>Beurteilung von Organfunktionen: Einsatz von Parametern wie Procalcitonin (PCT), CRP, Lactat, Blutbild, Leber- und Nierenwerten sowie Gerinnungsparametern</li>
    </ul>
    <h4>SOFA-Score Übersicht:</h4>
    <table border="1" cellspacing="0" cellpadding="4">
      <thead>
        <tr>
          <th>Organ</th>
          <th>Parameter</th>
          <th>0 Punkte</th>
          <th>1 Punkt</th>
          <th>2 Punkte</th>
          <th>3 Punkte</th>
          <th>4 Punkte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lunge</td>
          <td>paO₂/FiO₂</td>
          <td>≥400 mmHg</td>
          <td>&lt;400 mmHg</td>
          <td>&lt;300 mmHg</td>
          <td>&lt;200 mmHg (Beatmung)</td>
          <td>&lt;100 mmHg (Beatmung)</td>
        </tr>
        <tr>
          <td>Niere</td>
          <td>Kreatinin (mg/dL)</td>
          <td>&lt;1,2</td>
          <td>1,2–1,9</td>
          <td>2,0–3,4</td>
          <td>3,5–4,9 bzw. Oligurie</td>
          <td>&ge;5 bzw. Anurie</td>
        </tr>
        <tr>
          <td>Leber</td>
          <td>Bilirubin (mg/dL)</td>
          <td>&lt;1,2</td>
          <td>1,2–1,9</td>
          <td>2,0–5,9</td>
          <td>6–11,9</td>
          <td>&ge;12</td>
        </tr>
        <tr>
          <td>Kreislauf</td>
          <td>MAP ± Katecholamine</td>
          <td>&ge;70</td>
          <td>&lt;70</td>
          <td>Niedrige Katecholamindosis</td>
          <td>Mittlere Katecholamindosis</td>
          <td>Hohe Katecholamindosis</td>
        </tr>
        <tr>
          <td>Blutbild</td>
          <td>Thrombozytenzahl (/nL)</td>
          <td>&ge;150</td>
          <td>&lt;150</td>
          <td>&lt;100</td>
          <td>&lt;50</td>
          <td>&lt;20</td>
        </tr>
        <tr>
          <td>ZNS</td>
          <td>Glasgow Coma Scale</td>
          <td>15</td>
          <td>13–14</td>
          <td>10–12</td>
          <td>6–9</td>
          <td>&lt;6</td>
        </tr>
      </tbody>
    </table>
  </div>`,
        },
        {
          id: 7,
          title: "Fokus- und Erregersuche im Detail",
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
          id: 8,
          title: "Katheterassoziierte Sepsis",
          textWithFormatting: `<div>
    <h3>Katheterassoziierte Sepsis</h3>
    <p>Zentrale Venenkatheter können als potenzielle Eintrittspforten für Erreger dienen und dadurch das Infektionsrisiko sowie die Morbidität erhöhen.</p>
    <h4>Diagnostik:</h4>
    <ul>
      <li>Periphere Blutkulturdiagnostik UND Blutkulturen aus allen zentralen Venenkathetern sichern.</li>
      <li><strong>Differential Time to Positivity (DTP):</strong> Ein schnellerer positiver Befund (2–3 Stunden früher, Ratio &gt;5:1) spricht für den Katheter als Infektionsquelle.</li>
      <li>Kultur der Katheterspitze zur Bestätigung der Erregerspezifität und Resistenzmuster.</li>
    </ul>
    <h4>Therapie:</h4>
    <ul>
      <li>Sobald ein positiver DTP-Befund vorliegt, sollten alle intravasalen Katheter entfernt werden.</li>
      <li>Ein sofortiger Beginn einer zielgerichteten Antibiotikatherapie erfolgt parallel zur Fokussanierung.</li>
    </ul>
  </div>`,
        },
        {
          id: 9,
          title: "Therapie & weitere Maßnahmen",
          textWithFormatting: `<div>
    <h3>Therapie – 1-Hour-Bundle</h3>
    <p>Der Schlüssel zum Überleben der Sepsis liegt in einer raschen und adäquaten Therapie innerhalb der ersten Stunde. Folgende Maßnahmen werden zusammengefasst:</p>
    <ul>
      <li><strong>Lactatmessung:</strong> Regelmäßige Kontrolle, bis Werte unter 2 mmol/L erreicht sind.</li>
      <li><strong>Blutkulturdiagnostik:</strong> Vor Beginn der antibiotischen Therapie unbedingt durchführen.</li>
      <li><strong>Kalkulierte Breitbandantibiotikatherapie:</strong> „Hit hard and early“ – Beginn der antimikrobiellen Therapie noch vor Erregernachweis.</li>
      <li><strong>Volumensubstitution:</strong> Gabe von kristalloiden Infusionen (mindestens 30 mL/kgKG in 3 Stunden) zur Stabilisierung des Kreislaufs.</li>
      <li><strong>Vasopressoren:</strong> Einsatz bei anhaltender Hypotonie (Ziel: MAP 65 mmHg).</li>
    </ul>
    <h3>Weitere unterstützende Maßnahmen</h3>
    <ul>
      <li>Sauerstoffgabe, ggf. Beatmungstherapie unter Einhaltung lungenprotektiver Prinzipien (z. B. Tidalvolumen max. 6 mL/kgKG, PEEP ≥5 cmH₂O).</li>
      <li>Blutzuckermanagement: Engmaschige Kontrolle und insulingesteuerte Einstellung (Ziel: &le;180 mg/dL).</li>
      <li>Thromboseprophylaxe: Kombination aus mechanischen Maßnahmen (wie intermittierende Wadenkompression) und medikamentöser Prophylaxe (NMH/UFH).</li>
      <li>Stressulkusprophylaxe: Einsatz von H2-Blockern oder Protonenpumpenhemmern bei Risikopatienten.</li>
      <li>Frühzeitige Reevaluation der Therapie (alle 48–72 Stunden) basierend auf klinischen und diagnostischen Parametern.</li>
      <li>Bei Bedarf Nierenersatzverfahren, Glucocorticoide (nur im therapierefraktären septischen Schock) und ggf. ergänzende Maßnahmen.</li>
    </ul>
  </div>`,
        },
        {
          id: 10,
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
  </div>`,
        },
        {
          id: 11,
          title: "SIRS – Definition & Kriterien",
          textWithFormatting: `<div>
    <h3>SIRS (Systemic Inflammatory Response Syndrome)</h3>
    <p>Definition: Eine unspezifische systemische Entzündungsreaktion, die sich in veränderten Werten der Körpertemperatur, Herzfrequenz, Atemfrequenz und des Blutbildes zeigt. Sie kann sowohl durch infektiöse als auch nicht-infektiöse Ursachen ausgelöst werden.</p>
    <p>Früher galt das Vorliegen von ≥2 SIRS-Kriterien als Voraussetzung für die Sepsisdiagnose.</p>
    <h4>SIRS-Kriterien:</h4>
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
          <td>&ge;38 °C oder &le;36 °C</td>
        </tr>
        <tr>
          <td>Herzfrequenz</td>
          <td>&ge;90/min</td>
        </tr>
        <tr>
          <td>Atemfrequenz</td>
          <td>&ge;20/min oder Hyperventilation (bestätigt durch BGA, pCO₂ &le;33 mmHg)</td>
        </tr>
        <tr>
          <td>Blutbild</td>
          <td>Leukozyten &gt;12.000/µL oder &lt;4.000/µL, ggf. &gt;10% unreife neutrophile Granulozyten</td>
        </tr>
      </tbody>
    </table>
    <h4>SIRS-Trigger:</h4>
    <ul>
      <li>Traumata oder Polytraumata</li>
      <li>Schwere Operationen</li>
      <li>Verbrennungen</li>
      <li>Schwere Erkrankungen (z. B. akute Pankreatitis)</li>
      <li>Ischämie und Hypoxie (auch bei Reanimationssituationen)</li>
      <li>Addison-Krise</li>
      <li>Lungenembolie</li>
    </ul>
    <p>Obwohl SIRS-Kriterien allein heute nicht mehr ausschlaggebend für die Diagnose einer Sepsis herangezogen werden, unterstützen sie den klinischen Verdacht.</p>
  </div>`,
        },
      ],
    },

    {
      id: 2,
      title: "Fragen",
      questions: [
        {
          title: "Welche Maßnahme gehört NICHT zur Initialtherapie bei Sepsis?",
          answers: [
            {
              name: "Blutkulturdiagnostik vor Antibiotikagabe",
              isCorrect: false,
            },
            {
              name: "Kalkulierte Breitbandantibiotikatherapie",
              isCorrect: false,
            },
            { name: "Verzicht auf Volumensubstitution", isCorrect: true },
            { name: "Lactatmessung und -kontrolle", isCorrect: false },
          ],
        },
        {
          title:
            "Welcher Zielwert gehört zur Kreislaufstabilisierung bei Sepsis?",
          answers: [
            { name: "ZVD unter 5 cmH₂O", isCorrect: false },
            { name: "Lactat > 4 mmol/L", isCorrect: false },
            {
              name: "Arterieller Mitteldruck (MAP) von 65 mmHg",
              isCorrect: true,
            },
            { name: "Diurese < 0,5 mL/kgKG/h", isCorrect: false },
          ],
        },
        {
          title:
            "Was bedeutet das Prinzip 'Hit hard and early' in der Antibiotikatherapie?",
          answers: [
            {
              name: "Sofortiger Beginn einer kalkulierten Breitbandtherapie",
              isCorrect: true,
            },
            { name: "Langsamer Anstieg der Dosierung", isCorrect: false },
            { name: "Abwarten der Blutkulturergebnisse", isCorrect: false },
            {
              name: "Begrenzte Therapie nur bei schweren Verläufen",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Welche Option gehört zur Therapie bei unbekanntem Fokus?",
          answers: [
            {
              name: "Allein monotherapeutische Gabe von Cefepim",
              isCorrect: false,
            },
            {
              name: "Kombinationstherapie mit Piperacillin/Tazobactam und Ciprofloxacin",
              isCorrect: true,
            },
            {
              name: "Zielgerichtete Therapie ohne Kombination",
              isCorrect: false,
            },
            { name: "Verzicht auf Antibiotika", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Parameter sind entscheidend für die Überwachung während der Kreislaufstabilisierung?",
          answers: [
            { name: "Nur Blutdruck und Puls", isCorrect: false },
            { name: "ZVD, MAP, Lactat, szvO₂ und Diurese", isCorrect: true },
            { name: "Nur Sauerstoffsättigung", isCorrect: false },
            { name: "Nur Temperatur und Diurese", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Aussage zur antibiotischen Therapie bei Fokus Atemwege ist korrekt?",
          answers: [
            {
              name: "Antibiotika werden erst nach Befundabklärung verabreicht",
              isCorrect: false,
            },
            {
              name: "Makrolide können als Zusatz eingesetzt werden",
              isCorrect: true,
            },
            {
              name: "Es erfolgt ausschließlich eine monotherapeutische Behandlung",
              isCorrect: false,
            },
            {
              name: "Die Behandlung beschränkt sich auf eine Einzeldosis",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Maßnahme gehört zur Fokussanierung bei Kathetersepsis?",
          answers: [
            { name: "Verlängerte Volumentherapie", isCorrect: false },
            { name: "Erhöhung der Antibiotikadosis", isCorrect: false },
            { name: "Entfernung aller intravasalen Katheter", isCorrect: true },
            { name: "Zielgerichtete antifungale Therapie", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Kombinationstherapie kann bei Fokus Darm und gynäkologische Organe eingesetzt werden?",
          answers: [
            { name: "Monotherapie mit Meropenem", isCorrect: false },
            { name: "Begrenzt Clindamycin allein", isCorrect: false },
            { name: "Ausschließlich Ceftriaxon", isCorrect: false },
            {
              name: "Piperacillin/Tazobactam in Kombination mit Metronidazol",
              isCorrect: true,
            },
          ],
        },
        {
          title:
            "Welche ergänzende Maßnahme gehört zur Therapie bei Fokus Gallenwege?",
          answers: [
            {
              name: "Alleinige Gabe von Piperacillin/Tazobactam",
              isCorrect: false,
            },
            {
              name: "Kombinationstherapie mit Aminopenicillin und Ceftriaxon",
              isCorrect: true,
            },
            { name: "Monotherapie mit Meropenem", isCorrect: false },
            { name: "Verzicht auf Kombinationstherapie", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Aussage trifft auf die supportive Therapie in der Sepsis-Initialtherapie zu?",
          answers: [
            {
              name: "Nur die Antibiotikatherapie ist entscheidend",
              isCorrect: false,
            },
            { name: "Stressulkusprophylaxe ist entbehrlich", isCorrect: false },
            {
              name: "Blutzuckermanagement und Thromboseprophylaxe sind zentral",
              isCorrect: true,
            },
            {
              name: "Beatmungstherapie erfolgt ohne lungenprotektive Maßnahmen",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche diagnostische Maßnahme darf bei Sepsis nicht vernachlässigt werden?",
          answers: [
            { name: "Lungensonographie", isCorrect: false },
            { name: "Unmittelbare CT-Untersuchung", isCorrect: false },
            {
              name: "Blutkulturdiagnostik vor Antibiotikagabe",
              isCorrect: true,
            },
            { name: "Röntgen des Thorax", isCorrect: false },
          ],
        },
        {
          title:
            "Was ist ein typischer Indikator für eine erfolgreiche Volumentherapie?",
          answers: [
            {
              name: "Ein ansteigender Blutdruckwert über 90 mmHg",
              isCorrect: false,
            },
            { name: "Ein Abfall der Körpertemperatur", isCorrect: false },
            { name: "Ein fallender Lactatwert (< 2 mmol/L)", isCorrect: true },
            { name: "Ein signifikanter Anstieg des Pulses", isCorrect: false },
          ],
        },
        {
          title: "Welcher Wert ist typisch für eine Hyperkaliämie bei Sepsis?",
          answers: [
            { name: "Ein dynamisch verändernder Kaliumwert", isCorrect: false },
            {
              name: "Ein erhöhter Kaliumwert über 5,5 mmol/L",
              isCorrect: true,
            },
            {
              name: "Ein konstanter Kaliumwert von 4,0 mmol/L",
              isCorrect: false,
            },
            { name: "Ein Kaliumwert unter 3,5 mmol/L", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Maßnahme wird zur Fokussanierung bei Kathetersepsis empfohlen?",
          answers: [
            { name: "Erhöhung der Infusionsrate", isCorrect: false },
            { name: "Entfernung des betroffenen Katheters", isCorrect: true },
            {
              name: "Ausschließliche Gabe von Antikoagulanzien",
              isCorrect: false,
            },
            { name: "Verlängerter Antibiotikaverband", isCorrect: false },
          ],
        },
        {
          title:
            "Welcher Aspekt gehört nicht zur Überwachung der Kreislaufstabilisierung?",
          answers: [
            { name: "Monitoring des Blutzuckerspiegels", isCorrect: true },
            {
              name: "Regelmäßige Kontrolle der zentralvenösen Sauerstoffsättigung",
              isCorrect: false,
            },
            { name: "Überwachung des Blutdrucks und Pulses", isCorrect: false },
            { name: "Beurteilung der Diurese", isCorrect: false },
          ],
        },
        {
          title:
            "Wie wird die Differential Time to Positivity (DTP) in der Kathetersepsis genutzt?",
          answers: [
            {
              name: "Ein langsamer positiver Befund bestätigt eine katheterunabhängige Infektion",
              isCorrect: false,
            },
            {
              name: "DTP wird zur Dosismodifikation der Antibiotika genutzt",
              isCorrect: false,
            },
            {
              name: "DTP hat keinen Einfluss auf die Therapie",
              isCorrect: false,
            },
            {
              name: "Ein schneller positiver Befund (2–3 Stunden früher, Ratio >5:1) weist auf den Katheter als Infektionsquelle hin",
              isCorrect: true,
            },
          ],
        },
        {
          title:
            "Welche Rolle spielt die Reevaluation der Therapie in der Sepsis-Initialtherapie?",
          answers: [
            { name: "Sie ersetzt die initiale Diagnose", isCorrect: false },
            {
              name: "Sie ist nur bei invasiven Infektionen relevant",
              isCorrect: false,
            },
            {
              name: "Sie wird erst nach der Therapie durchgeführt",
              isCorrect: false,
            },
            {
              name: "Sie ermöglicht die Anpassung der Therapie basierend auf aktuellen Befunden",
              isCorrect: true,
            },
          ],
        },
        {
          title:
            "Welche Aussage beschreibt die rationale Volumentherapie bei Sepsis am besten?",
          answers: [
            { name: "Fluid-Challenge-Prinzip ist veraltet", isCorrect: false },
            {
              name: "Ein schneller Flüssigkeitsbolus, gefolgt von kontrollierter Gabe, solange Zeichen der Hypoperfusion vorliegen",
              isCorrect: true,
            },
            {
              name: "Flüssigkeitsgabe sollte ganz vermieden werden",
              isCorrect: false,
            },
            {
              name: "Kontinuierliche, unlimitierte Flüssigkeitsgabe ist ideal",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Kombination wird häufig als Zusatz zur antibiotischen Therapie bei Fokus Atemwege verwendet?",
          answers: [
            {
              name: "Makrolide wie Clarithromycin als Zusatz",
              isCorrect: true,
            },
            { name: "Monotherapie mit Beta-Lactamen", isCorrect: false },
            { name: "Aminoglycoside als Einzeltherapie", isCorrect: false },
            { name: "Fluorchinolone ohne weitere Therapie", isCorrect: false },
          ],
        },
        {
          title:
            "Welche Zielparameter sind bei der Kreislaufstabilisierung besonders wichtig?",
          answers: [
            { name: "Nur der MAP-Wert", isCorrect: false },
            { name: "Blutbildwerte und Leberparameter", isCorrect: false },
            { name: "Körpertemperatur und Puls", isCorrect: false },
            { name: "ZVD, MAP, Lactat, szvO₂ und Diurese", isCorrect: true },
          ],
        },
        {
          title:
            "Welche Maßnahme verbessert direkt die Mikrozirkulation in der Sepsis-Initialtherapie?",
          answers: [
            { name: "Ein Abfall des Lactatwerts", isCorrect: true },
            { name: "Erhöhung der Diurese", isCorrect: false },
            { name: "Steigerung des ZVD", isCorrect: false },
            { name: "Senkung der Körpertemperatur", isCorrect: false },
          ],
        },
        {
          title:
            "Wie sollte bei Verdacht auf sepsisbedingte Organversagen vorgegangen werden?",
          answers: [
            {
              name: "Abwarten der Laborergebnisse, bevor Maßnahmen ergriffen werden",
              isCorrect: false,
            },
            {
              name: "Frühzeitige Identifikation des Infektionsfokus und sofortige Intervention",
              isCorrect: true,
            },
            {
              name: "Ausschließliche Überwachung ohne sofortige Intervention",
              isCorrect: false,
            },
            {
              name: "Verzicht auf Antibiotika, wenn Vitalparameter normal erscheinen",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Rolle spielt das '1-Hour-Bundle' in der Sepsis-Initialtherapie?",
          answers: [
            {
              name: "Es wird nach Abschluss aller diagnostischen Maßnahmen initiiert",
              isCorrect: false,
            },
            { name: "Es dient nur der Dokumentation", isCorrect: false },
            { name: "Es ist ein veraltetes Konzept", isCorrect: false },
            {
              name: "Es fasst alle Maßnahmen zusammen, die innerhalb der ersten Stunde durchgeführt werden müssen",
              isCorrect: true,
            },
          ],
        },
        {
          title:
            "Welche der folgenden Maßnahmen gehört NICHT zum '1-Hour-Bundle'?",
          answers: [
            {
              name: "Abwarten auf endgültige Blutkulturergebnisse",
              isCorrect: true,
            },
            {
              name: "Blutkulturdiagnostik vor Antibiotikagabe",
              isCorrect: false,
            },
            {
              name: "Sofortiger Beginn einer Breitbandtherapie",
              isCorrect: false,
            },
            {
              name: "Volumensubstitution innerhalb von 3 Stunden",
              isCorrect: false,
            },
          ],
        },
        {
          title: "Warum ist die regelmäßige Reevaluation der Therapie wichtig?",
          answers: [
            {
              name: "Weil sie die Notwendigkeit der Intensivtherapie ausschließt",
              isCorrect: false,
            },
            {
              name: "Weil die initiale Therapie immer ausreichend ist",
              isCorrect: false,
            },
            {
              name: "Weil sie ermöglicht, die Therapie an aktuelle Befunde anzupassen",
              isCorrect: true,
            },
            {
              name: "Weil sie erst nach der Therapie durchgeführt wird",
              isCorrect: false,
            },
          ],
        },
        {
          title:
            "Welche Aussage zu Vasopressoren in der Sepsistherapie trifft zu?",
          answers: [
            {
              name: "Ihr Einsatz verzögert die Antibiotikatherapie",
              isCorrect: false,
            },
            { name: "Sie ersetzen die Volumensubstitution", isCorrect: false },
            {
              name: "Sie werden ausschließlich bei normovolem Patienten eingesetzt",
              isCorrect: false,
            },
            {
              name: "Sie werden eingesetzt, um einen MAP von 65 mmHg zu erreichen",
              isCorrect: true,
            },
          ],
        },
        {
          title:
            "Welche zusätzliche Maßnahme kann zur Verbesserung der organischen Funktion beitragen?",
          answers: [
            {
              name: "Erhöhung der Flüssigkeitsgabe ohne Kontrolle",
              isCorrect: false,
            },
            {
              name: "Nur empirische Antibiotikatherapie ohne Reevaluation",
              isCorrect: false,
            },
            { name: "Stressulkusprophylaxe", isCorrect: true },
            { name: "Verzicht auf Sedierung", isCorrect: false },
          ],
        },
      ],
    },
    // Розділ з фактографічними питаннями (Faktenfragen)
    {
      id: 3,
      title: "Faktenfragen",
      questions: [
        {
          title:
            "Was ist das Ziel der frühen Lactatmessung in der Sepsis-Initialtherapie?",
          hidden_answer:
            "Ein Lactatwert unter 2 mmol/L bzw. ein fallender Wert deutet auf eine verbesserte Mikrozirkulation hin.",
        },
        {
          title:
            "Welcher arterieller Mitteldruck (MAP) wird als Ziel angestrebt?",
          hidden_answer: "Der MAP soll bei 65 mmHg liegen.",
        },
        {
          title:
            "Was bedeutet 'Hit hard and early' in der antibiotischen Therapie?",
          hidden_answer:
            "Sofortiger Beginn einer kalkulierten Breitbandtherapie noch vor Erhalt der Blutkulturbefunde.",
        },
        {
          title: "Welche Rolle haben Vasopressoren in der Sepsistherapie?",
          hidden_answer:
            "Vasopressoren werden eingesetzt, um trotz Volumensubstitution eine Hypotonie zu beheben und einen MAP von 65 mmHg zu erreichen.",
        },
        {
          title:
            "Nennen Sie ein Beispiel für eine Kombinationstherapie bei unbekanntem Fokus.",
          hidden_answer:
            "Beispielsweise Piperacillin/Tazobactam in Kombination mit Ciprofloxacin oder Levofloxacin.",
        },
        {
          title:
            "Welche Parameter werden zur Überwachung der Kreislaufstabilisierung herangezogen?",
          hidden_answer:
            "Zu den Zielparametern gehören ZVD, MAP, Lactat, zentralvenöse Sauerstoffsättigung (szvO₂) und Diurese.",
        },
        {
          title:
            "Welche ergänzende antibiotische Maßnahme kann bei Fokus Atemwege hinzugefügt werden?",
          hidden_answer:
            "Zusätzlich kann ein Makrolid wie Clarithromycin zur Breitbandtherapie eingesetzt werden.",
        },
        {
          title:
            "Warum ist die Blutkulturdiagnostik vor Beginn der Antibiotikatherapie wichtig?",
          hidden_answer:
            "Um den Erreger zu identifizieren und eine gezielte Therapie zu ermöglichen, ohne die initialen Maßnahmen zu verzögern.",
        },
        {
          title:
            "Wie wird bei Kathetersepsis der Katheter als Infektionsquelle bestätigt?",
          hidden_answer:
            "Durch die Differential Time to Positivity (DTP), wobei ein zentraler Befund 2–3 Stunden früher positiv wird (Ratio >5:1).",
        },
        {
          title:
            "Was fasst das '1-Hour-Bundle' in der Sepsis-Initialtherapie zusammen?",
          hidden_answer:
            "Es kombiniert Maßnahmen wie Lactatmessung, Blutkulturdiagnostik, kalkulierte Breitbandantibiotikatherapie und Volumensubstitution in der ersten Stunde.",
        },
        {
          title:
            "Wie lange sollen Blutkulturpaare idealerweise vor Antibiotikagabe abgenommen werden?",
          hidden_answer:
            "Mindestens 2 Blutkulturpaare, idealerweise an separaten Punktionsstellen.",
        },
        {
          title: "Was signalisiert ein fallender Lactatwert in der Therapie?",
          hidden_answer:
            "Eine verbesserte Mikrozirkulation und Therapieeffekt.",
        },
        {
          title: "Welche Konsequenz hat ein MAP unter 65 mmHg bei Sepsis?",
          hidden_answer:
            "Ein MAP unter 65 mmHg ist ein Hinweis auf unzureichende Kreislaufstabilisierung und erhöht das Risiko für Organversagen.",
        },
        {
          title:
            "Welche Maßnahme ist elementar für die frühzeitige Erkennung von Sepsis?",
          hidden_answer:
            "Die Erfassung der Vitalparameter und Anwendung von Sepsis-Scores wie qSOFA.",
        },
        {
          title:
            "Was ist ein typischer Indikator für eine erfolgreiche antibiotische Therapie?",
          hidden_answer:
            "Ein Absinken der Entzündungsparameter (z. B. PCT, CRP) in Kombination mit klinischer Besserung.",
        },
      ],
    },
  ],
};
