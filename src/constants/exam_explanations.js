import child_tab_img_1 from "../assets/tab_images/child_tab_3.png";
import child_tab_img_2 from "../assets/tab_images/child_tab_1.jpg";
import child_tab_img_3 from "../assets/tab_images/child_tab_1.jpg";

export const parentTabs = [
  // start of parent tab: 1
  {
    id: 1,
    title: "Computertomographie(CT)",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 11,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Computertomographie (CT) ist ein bildgebendes Verfahren, das detaillierte Querschnittsbilder des Körpers erstellt. Ziel ist es, diagnostische Informationen zu liefern, die mit konventionellen Röntgenaufnahmen nicht möglich sind.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "CT wird in vielen medizinischen Bereichen eingesetzt, darunter Onkologie, Kardiologie, Neurologie und Unfallchirurgie. Es ist besonders nützlich für die Diagnose von Tumoren, Gefäßanomalien, Traumata und entzündlichen Erkrankungen.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die CT basiert auf der Nutzung von Röntgenstrahlen und Computertechnik, um Schnittbilder des Körpers zu erzeugen. Die Röntgenstrahlen werden durch den Körper gesendet und von Detektoren auf der gegenüberliegenden Seite erfasst. Ein Computer verarbeitet die Signale und erstellt detaillierte Bilder.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "CT-Scanner bestehen aus einem Röntgenröhrensystem, Detektoren und einem rotierenden Gantry. Der Patient liegt auf einem beweglichen Tisch, der durch die Gantry geschoben wird. Die Röhre rotiert um den Patienten und nimmt aus verschiedenen Winkeln Bilder auf, die dann zu einem Gesamtbild zusammengesetzt werden.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "•	Auswertung und Interpretation:",
                text: "Radiologen interpretieren die CT-Bilder, indem sie die Graustufenanalysen und strukturellen Details berücksichtigen. Jede Gewebedichte wird durch verschiedene Graustufen dargestellt, was eine präzise Identifikation von Anomalien ermöglicht.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde umfassen Tumore, Blutungen, Frakturen, Entzündungen und Gefäßanomalien. Zum Beispiel wird ein Tumor als dichte (Hyperdens), unregelmäßige Masse erscheinen, während eine Blutung als Bereich niedriger Dichte (Hypodens) sichtbar ist.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "CT bietet eine schnelle und genaue Diagnose mit hoher räumlicher Auflösung. Es ist nicht invasiv und kann schnell durchgeführt werden, was besonders bei Notfällen von Vorteil ist.",
              },
              {
                bold_text: "Nachteile:",
                text: "Ein Nachteil ist die Strahlenbelastung, die höher ist als bei konventionellen Röntgenaufnahmen. Zudem können Kontrastmittel Nebenwirkungen verursachen.",
              },
              {
                bold_text: "Risiken::",
                text: "Die Hauptgefahr besteht in der Strahlenexposition, die das Risiko von Krebs erhöhen kann. Auch die Verwendung von Kontrastmitteln kann allergische Reaktionen oder Nierenschäden verursachen.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "CT ist entscheidend für die schnelle Diagnose und Behandlung vieler Erkrankungen. Es ermöglicht eine präzise Planung chirurgischer Eingriffe und die Überwachung des Behandlungserfolgs.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "CT trägt zur umfassenden Patientenversorgung bei, indem es detaillierte Informationen liefert, die für die Diagnose und das Management von Krankheiten unerlässlich sind.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Alternative bildgebende Verfahren sind die Magnetresonanztomographie (MRT), die Ultraschalluntersuchung und die konventionelle Röntgendiagnostik. Diese Alternativen haben jeweils spezifische Vor- und Nachteile in Bezug auf Bildqualität, Untersuchungsdauer und Risiken.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Neue Entwicklungen umfassen verbesserte Bildgebungssoftware, die Strahlenbelastung reduziert, und die Anwendung von Künstlicher Intelligenz zur Bildanalyse und Diagnoseunterstützung.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Integration von multimodalen Bildgebungsverfahren und personalisierten Bildgebungsprotokollen umfassen, um die Diagnosegenauigkeit weiter zu verbessern.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Computertomographie ist ein wesentliches diagnostisches Werkzeug, das detaillierte Bilder liefert und für viele klinische Fragestellungen von zentraler Bedeutung ist.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "CT spielt eine entscheidende Rolle in der modernen Medizin, indem es präzise diagnostische Informationen liefert und somit die Patientenversorgung verbessert.",
              },
            ],
          },
        ],
      },
      // 2tab
      {
        id: 12,
        title: "Patient-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Ziel der Untersuchung",
            second:
              "Erklären, dass die CT verwendet wird, um detaillierte Bilder des Körpers zu erstellen, um Krankheiten und Verletzungen zu diagnostizieren",
            third:
              "Die CT hilft uns, genaue Bilder von Ihren Organen und Knochen zu erhalten, um mögliche Krankheiten zu erkennen.",
            fourth:
              "Mit der CT können wir innere Verletzungen nach einem Unfall besser beurteilen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben, wie der Patient auf einem Tisch liegt, der durch einen ringförmigen Scanner fährt, während Röntgenbilder aus verschiedenen Winkeln aufgenommen werden.",
            third:
              "Sie werden auf einem Tisch liegen, der langsam durch den Scanner fährt, während wir die Bilder machen.",
            fourth:
              "Der Tisch bewegt sich durch einen großen Ring, der die Röntgenbilder aus verschiedenen Winkeln aufnimmt.",
          },
          {
            first: "Vorbereitung",

            second:
              "Informieren, ob der Patient Kontrastmittel trinken oder injiziert bekommen muss, und dass Schmuck und Metallgegenstände entfernt werden müssen.",
            third:
              "Sie müssen eventuell ein Kontrastmittel trinken, das uns hilft, klarere Bilder zu bekommen. Bitte informieren Sie uns im Voraus, wenn Sie Platzangst haben, damit wir Ihnen ein Beruhigungsmittel geben können.",
            fourth:
              "Bitte entfernen Sie allen Schmuck und Metallgegenstände, bevor die Untersuchung beginnt. Wenn Sie unter Platzangst leiden, sagen Sie uns im Voraus Bescheid, damit wir Ihnen ein Beruhigungsmittel verabreichen können.",
          },
          {
            first: "Risiken",
            second:
              "Erklären, dass die Untersuchung eine gewisse Strahlenbelastung mit sich bringt und Kontrastmittel allergische Reaktionen oder Nierenschäden verursachen können.",
            third:
              "Es gibt eine geringe Strahlenbelastung, die jedoch sehr gering ist und überwacht wird.",
            fourth:
              "Das Kontrastmittel kann in seltenen Fällen allergische Reaktionen auslösen.",
          },
          {
            first: "Vorteile",
            second:
              "Betonen, dass die CT schnelle und detaillierte Bilder liefert, die eine präzise Diagnose und die Planung von Behandlungen ermöglichen.",
            third:
              "CT liefert uns in kurzer Zeit sehr genaue Bilder, die für Ihre Diagnose wichtig sind.",
            fourth:
              "Dank der CT können wir eine genaue Behandlungsplanung vornehmen.",
          },
          {
            first: "Alternativen",
            second:
              "Erwähnen, dass es andere bildgebende Verfahren wie MRT, Ultraschall oder konventionelles Röntgen gibt, die je nach Fall ebenfalls genutzt werden können.",
            third:
              "Falls erforderlich, könnten wir stattdessen eine MRT oder einen Ultraschall machen.",
            fourth:
              "Ein konventionelles Röntgenbild könnte in manchen Fällen auch ausreichen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Darauf hinweisen, dass eine CT bei Schwangeren oder Patienten mit schwerer Niereninsuffizienz und Jodallergie nur in Notfällen durchgeführt wird.",
            third:
              "Bei Schwangeren versuchen wir, CT zu vermeiden, es sei denn, es ist ein Notfall.",
            fourth:
              "Wenn Sie eine schwere Niereninsuffizienz haben, könnten wir auf die CT verzichten.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Beschreiben, dass die CT-Ergebnisse Tumore, Entzündungen, Blutungen, Frakturen oder Gefäßanomalien zeigen können.",
            third:
              "Wir könnten Tumore oder Anzeichen von Entzündungen auf den Bildern sehen.",
            fourth: "Die CT kann auch Blutungen oder Knochenbrüche anzeigen.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Erklären, dass das Einverständnis des Patienten notwendig ist, um sicherzustellen, dass er über die Untersuchung und deren Risiken informiert ist.",
            third:
              "Ihr Einverständnis ist wichtig, damit Sie alle Risiken und Vorteile der CT kennen.",
            fourth:
              "Wir benötigen Ihre Zustimmung, um sicherzustellen, dass Sie alle notwendigen Informationen erhalten haben.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Beschreiben, dass der Patient vor der Untersuchung eine Einverständniserklärung unterzeichnen muss, nachdem er alle relevanten Informationen erhalten hat.",
            third:
              "Bitte lesen und unterschreiben Sie diese Einverständniserklärung vor der Untersuchung.",
            fourth:
              "Nachdem Sie alle Informationen erhalten haben, bitten wir Sie, die Einverständniserklärung zu unterzeichnen.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Informieren, dass der Patient nach der Untersuchung genügend Flüssigkeit trinken sollte, um das Kontrastmittel aus dem Körper auszuspülen.",
            third:
              "Trinken Sie nach der Untersuchung viel Wasser, um das Kontrastmittel auszuspülen.",
            fourth:
              "Es ist wichtig, dass Sie nach der CT viel Flüssigkeit zu sich nehmen, um das Kontrastmittel loszuwerden.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären, dass die Ergebnisse in der Regel innerhalb weniger Tage verfügbar sind und der Arzt sie mit dem Patienten besprechen wird.",
            third:
              "Die Ergebnisse sind in wenigen Tagen verfügbar und wir besprechen diese dann mit Ihnen.",
            fourth:
              "Ihr Arzt wird die Ergebnisse in ein paar Tagen mit Ihnen durchgehen.",
          },
        ],
      },
      // 3tab
      {
        id: 13,
        title: "Arzt-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Was ist eigentlich die angegebene Untersuchung",
            second:
              "Erklären, dass die Computertomographie (CT) ein bildgebendes Verfahren ist, das detaillierte Querschnittsbilder des Körpers erstellt, indem Röntgenstrahlen und Computertechnik kombiniert werden.",
            third:
              "Die CT ist ein bildgebendes Verfahren, bei dem Röntgenstrahlen und Computertechnik verwendet werden, um detaillierte Querschnittsbilder des Körpers zu erstellen. Diese Technik ermöglicht es uns, präzise und detaillierte Bilder von inneren Strukturen zu erhalten.",
            fourth:
              "Eine CT-Untersuchung kombiniert die Nutzung von Röntgenstrahlen und moderner Computertechnik, um detaillierte Schnittbilder des Körpers zu erstellen. Dies hilft uns, verschiedene Erkrankungen und anatomische Strukturen genau zu beurteilen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Die CT kann verwendet werden, um eine Vielzahl von anatomischen Strukturen und pathologischen Zuständen zu untersuchen, einschließlich Tumoren, Blutungen, Frakturen, Gefäßanomalien, entzündlichen Erkrankungen und Organveränderungen.",
            third:
              "Mit der CT können wir eine Vielzahl von pathologischen Zuständen untersuchen, wie z.B. Tumore, innere Blutungen, Frakturen und Gefäßanomalien. Sie ist auch sehr hilfreich bei der Beurteilung entzündlicher Erkrankungen und Veränderungen der Organe.",
            fourth:
              "Die CT ermöglicht uns die Untersuchung verschiedener Strukturen und Zustände wie Tumore, Blutungen, Frakturen, Gefäßanomalien und entzündliche Prozesse. Dies ist besonders nützlich bei der Diagnostik und Planung von Behandlungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erklären, dass die CT-Bilder detaillierte Informationen über die Dichte und Struktur von Geweben liefern, was die Diagnose von Krankheiten wie Krebs, Aneurysmen, Knochenbrüchen und entzündlichen Prozessen ermöglicht. Die Befunde werden anhand der Graustufen und Strukturveränderungen interpretiert.",
            third:
              "Die CT liefert detaillierte Informationen über die Dichte und Struktur der Gewebe. Zum Beispiel können wir damit Tumore identifizieren und die Ausdehnung von Aneurysmen oder Knochenbrüchen genau beurteilen. Die Bilder zeigen verschiedene Graustufen, die auf unterschiedliche Gewebedichten hinweisen.",
            fourth:
              "Mit den CT-Bildern können wir detaillierte Informationen über die Gewebedichte und -struktur gewinnen. Dies ist entscheidend für die Diagnose von Krebs, Aneurysmen, Frakturen und entzündlichen Prozessen, die durch verschiedene Graustufen sichtbar werden.",
          },
          {
            first: "Indikationen",
            second:
              "Besprechen, dass Indikationen für eine CT unter anderem Trauma, Verdacht auf Tumore, Schlaganfälle, abdominale Schmerzen, Gefäßerkrankungen und präoperative Planungen sind.",
            third:
              "Indikationen für eine CT-Untersuchung umfassen unter anderem Trauma, Verdacht auf Tumore, Schlaganfälle, akute Bauchschmerzen und Gefäßerkrankungen. Außerdem wird sie häufig zur präoperativen Planung verwendet, um die chirurgische Strategie zu optimieren.",
            fourth:
              "Die CT wird häufig bei Traumafällen, Verdacht auf Tumore, Schlaganfällen und abdominalen Schmerzen eingesetzt. Sie ist auch ein wichtiges Werkzeug bei der Untersuchung von Gefäßerkrankungen und in der präoperativen Planung, um eine präzise chirurgische Intervention zu ermöglichen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären, dass Kontraindikationen für eine CT-Untersuchung Schwangerschaft, schwere Niereninsuffizienz (bei Verwendung von Kontrastmitteln) und bekannte Allergien gegen Kontrastmittel umfassen. Bei diesen Patienten sollte die Indikation sorgfältig abgewogen werden.",
            third:
              "Kontraindikationen für eine CT sind unter anderem Schwangerschaft, da die Strahlen das ungeborene Kind schädigen können. Auch Patienten mit schwerer Niereninsuffizienz oder bekannten Allergien gegen Kontrastmittel sollten nur in Ausnahmefällen eine CT erhalten.",
            fourth:
              "Zu den Kontraindikationen zählen Schwangerschaft, um die Strahlenexposition für das ungeborene Kind zu vermeiden, sowie schwere Niereninsuffizienz und bekannte Allergien gegen Kontrastmittel. In solchen Fällen müssen wir die Indikation besonders sorgfältig prüfen.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren, dass die CT-Untersuchung zur Unterscheidung zwischen verschiedenen Differenzialdiagnosen beiträgt, indem sie detaillierte Bilder von pathologischen Veränderungen liefert. Beispielsweise kann sie bei der Unterscheidung zwischen einem soliden Tumor und einer Zyste oder zwischen einer Blutung und einem Tumor helfen.",
            third:
              "Die CT hilft uns, zwischen verschiedenen Differenzialdiagnosen zu unterscheiden. Zum Beispiel können wir damit feststellen, ob eine Masse ein solider Tumor oder eine Zyste ist, oder ob eine Läsion eine Blutung oder ein Tumor ist.",
            fourth:
              "Mit der CT können wir genaue Differenzialdiagnosen stellen, indem wir pathologische Veränderungen detailliert abbilden. Dies ist besonders nützlich, um zwischen einem soliden Tumor und einer Zyste oder zwischen einer Blutung und einem Tumor zu unterscheiden.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklären, dass die CT-Ergebnisse entscheidend für die Erstellung eines präzisen Behandlungsplans sind, sei es durch chirurgische Intervention, Strahlentherapie oder medikamentöse Behandlung. Die genaue Lokalisation und Ausdehnung der Pathologie unterstützt die Planung der geeigneten therapeutischen Maßnahmen.",
            third:
              "Die Ergebnisse der CT sind entscheidend für die Planung des Behandlungsverlaufs. Sie helfen uns, die genaue Lokalisation und Ausdehnung der Pathologie zu bestimmen, was für chirurgische Eingriffe, Strahlentherapie oder medikamentöse Behandlungen von großer Bedeutung ist.",
            fourth:
              "Basierend auf den CT-Ergebnissen können wir präzise Behandlungspläne erstellen. Die genaue Darstellung der Pathologie ist unerlässlich für die Planung von Operationen, die Durchführung von Strahlentherapie und die Festlegung von medikamentösen Behandlungen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen, dass die Interpretation und Anwendung der CT-Ergebnisse oft eine interprofessionelle Zusammenarbeit erfordert, einschließlich Radiologen, Chirurgen, Onkologen, Internisten und anderen Fachärzten.",
            third:
              "Die CT-Ergebnisse erfordern oft eine interprofessionelle Zusammenarbeit. Radiologen, Chirurgen, Onkologen und Internisten müssen eng zusammenarbeiten, um eine umfassende und koordinierte Patientenversorgung zu gewährleisten.",
            fourth:
              "Um die CT-Ergebnisse optimal zu nutzen, ist eine enge Zusammenarbeit zwischen Radiologen, Chirurgen, Onkologen und Internisten notwendig. Diese interprofessionelle Zusammenarbeit sorgt für eine ganzheitliche und effektive Patientenversorgung.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Besprechen, dass ein effektives Qualitätsmanagement sicherstellt, dass die CT-Untersuchungen nach den höchsten Standards durchgeführt werden. Dies umfasst regelmäßige Wartung der Geräte, Kalibrierung, Überprüfung der Bildqualität und kontinuierliche Schulung des medizinischen Personals.",
            third:
              "Ein effektives Qualitätsmanagement ist essenziell, um sicherzustellen, dass CT-Untersuchungen nach den höchsten Standards durchgeführt werden. Dies beinhalten die regelmäßige Wartung und Kalibrierung der Geräte sowie die kontinuierliche Schulung des Personals.",
            fourth:
              "Um die Qualität der CT-Untersuchungen zu gewährleisten, müssen wir regelmäßige Wartungen, Kalibrierungen und Qualitätskontrollen der Geräte durchführen. Darüber hinaus ist die fortlaufende Schulung des medizinischen Personals unerlässlich.",
          },
          {
            first: "DokumentaAon und Weiterverfolgung",
            second:
              "Erklären, dass die Ergebnisse der CT-Untersuchung sorgfältig dokumentiert und in die Patientenakte aufgenommen werden müssen. Eine klare und präzise Dokumentation ermöglicht die Nachverfolgung des Krankheitsverlaufs und die Planung weiterer diagnostischer oder therapeutischer Maßnahmen. Regelmäßige Überprüfungen und Aktualisierungen der Patientenakte sind essentiell für eine kontinuierliche Betreuung.",
            third:
              "Die Ergebnisse der CT müssen genau dokumentiert und in die Patientenakte eingetragen werden. Eine präzise Dokumentation ist wichtig, um den Krankheitsverlauf nachzuverfolgen und weitere diagnostische oder therapeutische Schritte zu planen. Regelmäßige Überprüfungen und Aktualisierungen der Akten sind dabei unerlässlich.",
            fourth:
              "Eine sorgfältige Dokumentation der CT-Ergebnisse in der Patientenakte ist entscheidend. Sie ermöglicht die Nachverfolgung des Krankheitsverlaufs und die Planung weiterer Maßnahmen. Regelmäßige Aktualisierungen der Patientenakte sind für eine kontinuierliche Betreuung unerlässlich.",
          },
        ],
      },
      // 4tab
      {
        id: 14,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Erster Pathologischer Befund",
          },
          {
            name: "fourth",
            visualText: "Zweiter Pathologischer Befund",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall",
            second:
              "35-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient mit anhaltendem Husten, ungewolltem Gewichtsverlust und Bluthusten. Vorgeschichte von langjährigem Rauchen.",
            fourth:
              "45-jährige Patientin mit plötzlicher Atemnot und Brustschmerzen. Keine relevante Vorgeschichte, aber jüngst lange Flugreise.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "CT der Lunge zeigt klare Lungenfelder ohne Anzeichen von Massen, Flüssigkeitsansammlungen oder anderen pathologischen Veränderungen.",
            third:
              "CT der Lunge zeigt eine 3 cm große, unregelmäßig geformte Masse im rechten Oberlappen mit Spikulierung und Pleuraeinziehung.",
            fourth:
              "CT-Angiographie der Lunge zeigt multiple, füllungsdefekte Bereiche in den Lungenarterien, insbesondere im rechten unteren Lungenlappen.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das CT-Ergebnis unterstützt den Ausschluss von pulmonalen Erkrankungen.",
            third:
              "Der Befund deutet auf ein Lungenkarzinom hin. Die Masse und ihre charakteristischen Merkmale passen zu einem malignen Tumor, was mit den Symptomen des Patienten korreliert.",
            fourth:
              "Die Befunde sind typisch für eine Lungenembolie, die durch die füllungsdefekte Bereiche in den Lungenarterien bestätigt wird.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Der Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe. Empfehlung für routinemäßige Überprüfungen und Fortführung eines gesunden Lebensstils.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer Biopsie zur Bestätigung der Diagnose und zur Bestimmung des geeigneten Therapieplans, einschließlich möglicher Operation, Chemotherapie oder Strahlentherapie.",
            fourth:
              "Die CT-Befunde sind wichtig für die sofortige Einleitung einer Antikoagulationstherapie und gegebenenfalls weiterer interventioneller Maßnahmen zur Behandlung der Lungenembolie",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Lunge. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines Lungenkarzinoms basierend auf CT-Befunden und klinischem Bild",
            fourth:
              "Diagnose einer Lungenembolie aufgrund der CT-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmietel",
            second:
              "Homogenes Lungengewebe ohne Auffälligkeiten in allen Sequenzen.",
            third:
              "CT-Aufnahmen zeigen eine unregelmäßig geformte, hyperdense Masse im rechten Oberlappen mit Spikulierung und Pleuraeinziehung.",
            fourth:
              "CT-Angiographie zeigt multiple, hypodense Bereiche in den Lungenarterien, charakteristisch für füllungsdefekte durch Emboliematerial.",
          },
          {
            first: "Fallabschluss",
            second:
              "Bestätigung der Gesundheit des Patienten und Empfehlung für regelmäßige gesundheitliche Überprüfungen.",
            third:
              "Wir empfehlen, eine Biopsie durchzuführen, um die Diagnose zu bestätigen und einen geeigneten Therapieplan zu erstellen. Der Patient sollte seinen Lebensstil ändern, insbesondere mit dem Rauchen aufhören.",
            fourth:
              "Wir empfehlen eine sofortige Antikoagulationstherapie und gegebenenfalls weitere interventionelle Maßnahmen. Der Patient sollte seinen Lebensstil ändern, um das Risiko zukünftiger Embolien zu minimieren.",
          },
        ],
      },
      // 5tab
      {
        id: 15,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Computertomographie (CT)-Gerät ist ein fortgeschrittenes bildgebendes medizinisches Instrument, das für detaillierte innere Bilder des Körpers verwendet wird. Hier sind die Hauptkomponenten und Funktionen eines CT-Geräts:",
        text_list: [
          {
            bold: "Gantry:",
            other:
              "Gantry: ist der ringförmige Teil des CT-Geräts, der die Röntgenröhre und die Detektoren enthält. Er kann sich um den Patienten drehen, um aus verschiedenen Winkeln Bilder zu erstellen.",
          },
          {
            bold: "Röntgenröhre:",
            other:
              "erzeugt die Röntgenstrahlen, die durch den Körper des Patienten gesendet werden. Sie ist im Gantry montiert und bewegt sich während der Untersuchung um den Patienten herum.",
          },
          {
            bold: "Detektoren:",
            other:
              "sind gegenüber der Röntgenröhre im Gantry angeordnet. Sie erfassen die Röntgenstrahlen, die durch den Körper des Patienten hindurchgehen, und wandeln sie in elektrische Signale um.",
          },
          {
            bold: "Patiententisch:",
            other:
              "ist motorisiert und kann horizontal in den Gantry hinein- und herausgefahren werden. Der Patient liegt während der Untersuchung auf diesem Tisch.",
          },
          {
            bold: "Arbeitsstation:",
            other:
              "besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder angezeigt und analysiert werden. Der Radiologe oder der radiologische Technologe steuert von hier aus die Untersuchung.",
          },
          {
            bold: "Kontrastmittelinjektor:",
            other:
              "wird häufig verwendet, um Kontrastmittel intravenös zu verabreichen. Dies verbessert die Sichtbarkeit bestimmter Strukturen oder Pathologien im Körper.",
          },
          {
            bold: "Steuerkonsole:",
            other:
              "ermöglicht dem Technologen, das CT-Gerät zu bedienen, Untersuchungseinstellungen vorzunehmen und den Scanning-Prozess zu überwachen.",
          },
          {
            bold: "Kühlungssystem:",
            other:
              "ist notwendig, um die Röntgenröhre zu kühlen, da sie während der Erzeugung von Röntgenstrahlen viel Wärme produziert",
          },
          {
            bold: "Multidetektor-CT (MDCT):",
            other:
              "Moderne CT-Geräte sind oft als Multidetektor-CT (MDCT) konfiguriert, was bedeutet, dass sie mehrere Detektorreihen haben. Dies ermöglicht schnellere Scans und eine höhere Bildauflösung.",
          },
          {
            bold: "Sprachkommunikationssystem:",
            other:
              "ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben",
          },
        ],
      },
      // 6tab
      {
        id: 16,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "Computertomographie (CT):",
            other:
              "Bildgebendes Verfahren, das Röntgenstrahlen verwendet, um detaillierte QuerschniQsbilder des Körpers zu erstellen.",
          },
          {
            bold: "Gantry:",
            other:
              "Der Teil des CT-Scanners, der die Röntgenröhre und die Detektoren enthält und den Pa?enten umgibt.",
          },
          {
            bold: "Röntgentomographie:",
            other: "Ein anderer Begriff für CT.",
          },
          {
            bold: "Röntgenstrahlen:",
            other:
              "Die Strahlung, die zur Erstellung der Bilder verwendet wird.",
          },
          {
            bold: "Gantry:",
            other:
              "Der Teil des CT-Scanners, der die Röntgenröhre und die Detektoren enthält und den Pa?enten umgibt.",
          },

          {
            bold: "Querschnittsbilder:",
            other: "Die durch die CT erzeugten Schnittbilder des Körpers.",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Substanzen, die intravenös verabreicht werden, um die Unterschiede zwischen Geweben zu verstärken.",
          },
          {
            bold: "Spikulierung :",
            other:
              "Ein Zeichen, das häufig bei malignen Tumoren auf CT-Bildern zu sehen ist.",
          },
          {
            bold: "Pleuraeinziehung :",
            other:
              "Ein Befund, der auf eine Erkrankung wie ein Tumor hinweisen kann.",
          },
          {
            bold: "Strahlenbelastung :",
            other:
              "Die Menge der Röntgenstrahlen, der ein Patient während der CT ausgesetzt ist.",
          },
          {
            bold: "Bildauflösung :",
            other: "Die Detailgenauigkeit der CT-Bilder.",
          },
          {
            bold: "Volumenrekonstruktion :",
            other:
              "Der Prozess der Erstellung dreidimensionaler Bilder aus den Querschnittsbildern.",
          },
          {
            bold: "Multidetektor-CT (MDCT):",
            other: "Eine fortschrittliche Form der CT mit mehreren Detektoren.",
          },
          {
            bold: "Hounsfield-Einheiten (HU):",
            other: "Ein Maß für die Dichte von Geweben im CT-Bild.",
          },
          {
            bold: "Füllungsdefekt :",
            other: "Ein Bereich, der auf eine Lungenembolie hinweisen kann.",
          },
          {
            bold: "Artefakte :",
            other:
              "Bildfehler, die durch verschiedene Faktoren wie Bewegung oder Metallimplantate verursacht werden.",
          },
          {
            bold: "Strahlenhärtung :",
            other:
              "Ein Effekt, der durch den Unterschied in der Absorption von Röntgenstrahlen entsteht.",
          },
          {
            bold: "Spiral-CT:",
            other:
              "Ein Verfahren, bei dem der Patient kontinuierlich durch den CT-Scanner bewegt wird.",
          },
          {
            bold: "Low-Dose-CT:",
            other: "Eine CT-Untersuchung mit reduzierter Strahlenbelastung.",
          },
          {
            bold: "Bildrekonstruktion:",
            other:
              "Der Prozess der Umwandlung von Rohdaten in sichtbare Bilder.",
          },
          {
            bold: "Interdisziplinäre Zusammenarbeit :",
            other:
              "Die Zusammenarbeit zwischen verschiedenen Fachbereichen bei der Interpretation der CT-Bilder.",
          },
          {
            bold: "Sicherheitsprotokolle:",
            other:
              "Richtlinien zum Schutz von Patienten und Personal vor der Strahlenbelastung.",
          },

          {
            text: "Diese Begriffe bilden einen grundlegenden Wortschatz, der für die Fachsprache im Bereich der CT wichtig ist und können in einer Prüfungssituation nützlich sein.",
          },
        ],
      },
      {
        id: 17,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "DocCheck Flexikon",
            other:
              "Eine umfassende medizinische Datenbank, die detaillierte Erklärungen zur Computertomographie bietet, einschließlich technischer Details und Anwendungsgebiete. Mehr Informationen finden Sie auf [DocCheck Flexikon](https://flexikon.doccheck.com/de/Computertomographie).",
          },
          {
            bold: "Stiftung Gesundheitswissen",
            other:
              "Diese Seite bietet umfassende Informationen zur CT, einschließlich Ablauf, Strahlenbelastung und Nutzen von Kontrastmitteln. Mehr Informationen finden Sie auf [Stiftung Gesundheitswissen](https://www.stiftung-gesundheitswissen.de).",
          },
          {
            bold: "Praktischarzt.de",
            other:
              "Diese Seite erklärt die Gründe für eine CT, den Ablauf, die Dauer und die Kosten der Untersuchung. Mehr Informationen finden Sie auf [praktischarzt.de](https://www.praktischarzt.de).",
          },
          {
            bold: "Navigator Medizin",
            other:
              "Beschreibt den Ablauf, die Nebenwirkungen und die Risiken einer CT-Untersuchung und gibt Hinweise zu Kontrastmitteln. Mehr Informationen finden Sie auf [Navigator Medizin](https://www.navigator-medizin.de).",
          },
          {
            bold: "Gesundheit.de",
            other:
              "Erklärt den Ablauf und die Dauer einer CT, sowie die Vor- und Nachteile dieser Untersuchungsmethode. Mehr Informationen finden Sie auf [Gesundheit.de](https://www.gesundheit.de).",
          },
          {
            bold: "Onmeda",
            other:
              "Diese Seite bietet eine Übersicht über die Anwendungsgebiete, Risiken und Komplikationen der Computertomographie. Mehr Informationen finden Sie auf [Onmeda](https://www.onmeda.de).",
          },
        ],
      },
      {
        id: 18,
        title: "PDF",
        link: "https://drive.google.com/file/d/1m67Ctkv7GwGGPOT3skZR4HEstFSmUU80/view?usp=share_link",
      },
    ],
  },
  // end of parent tab: 1
  // start of parent tab: 2
  {
    id: 2,
    title: "MRT",

    checked: false,
    childTabs: [
      // 1tab
      {
        id: 21,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Magnetresonanztomographie (MRT) ist ein bildgebendes Verfahren, das detaillierte Schnittbilder des Körpers erstellt. Ziel der Untersuchung ist es, strukturelle und funktionelle Informationen zu erhalten, um Krankheiten zu diagnostizieren, den Verlauf von Erkrankungen zu überwachen oder den Erfolg einer Behandlung zu beurteilen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die MRT wird in vielen medizinischen Disziplinen angewendet, einschließlich Neurologie, Orthopädie, Kardiologie und Onkologie. Sie ist besonders wertvoll bei der Untersuchung von Weichteilgeweben, dem zentralen Nervensystem, Gelenken und dem Herz-Kreislauf-System.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die MRT basiert auf der Nutzung von starken Magnetfeldern und Radiowellen, um Bilder des Körperinneren zu erzeugen. Wasserstoffatome im Körper reagieren auf diese Magnetfelder, und die Signale, die sie zurücksenden, werden von Sensoren erfasst und in Bilder umgewandelt.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Ein MRT-Scanner besteht aus einem großen, röhrenförmigen Magneten. Patienten liegen auf einem Tisch, der in die Röhre geschoben wird. Während der Untersuchung senden und empfangen Spulen Radiowellen. Ein Computer verarbeitet die Signale und erstellt detaillierte Bilder.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Radiologen sind spezialisiert darauf, die MRT-Bilder zu analysieren und zu interpretieren. Sie suchen nach Anomalien wie Tumoren, Entzündungen oder strukturellen Veränderungen. Es ist wichtig, normale von pathologischen Befunden unterscheiden zu können.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Häufige Befunde umfassen Hirninfarkte, Bandscheibenvorfälle, Gelenkschäden und Tumore. Die Interpretation erfordert ein tiefes Verständnis der anatomischen Normvarianten und Pathologien.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Magnetresonanztomographie (MRT) bietet zahlreiche Vorteile, darunter ihre Nicht-Invasivität und Schmerzfreiheit. Sie verwendet keine ionisierende Strahlung, was sie zu einer sichereren Option im Vergleich zur Computertomographie (CT) macht. Darüber hinaus liefert die MRT eine hohe Auflösung von Weichteilgeweben, die bei anderen bildgebenden Verfahren oft nicht erreicht wird. Die Möglichkeit der Funktionsbildgebung, wie zum Beispiel die funktionelle MRT (fMRT), ermöglicht es, physiologische Prozesse im Körper zu visualisieren.",
              },
              {
                bold_text: "Nachteile:",
                text: "Ein wesentlicher Nachteil der MRT sind die hohen Kosten, sowohl für die Anschaffung und Wartung der Geräte als auch für die Durchführung der Untersuchung. Die Untersuchungsdauer kann relativ lang sein, was für Patienten anstrengend sein kann. Die Enge der MRT-Röhre kann bei manchen Patienten Platzangst auslösen, was die Durchführung der Untersuchung erschwert.",
              },
              {
                bold_text: "Risiken:",
                text: "Die MRT ist im Allgemeinen sicher, aber es gibt einige Risiken. Manche Patienten können auf die verwendeten Kontrastmittel allergisch reagieren. Patienten mit Metallimplantaten, Herzschrittmachern oder anderen elektronischen Geräten im Körper können nicht untersucht werden, da das starke Magnetfeld diese Geräte beeinflussen kann. Es besteht auch ein geringes Risiko für thermische Verletzungen, wenn sich Metallgegenstände oder Tätowierungen erhitzen.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die MRT spielt eine zentrale Rolle in der modernen Diagnostik und Behandlung. Sie ermöglicht präzise Diagnosen, die Planung chirurgischer Eingriffe und die Überwachung therapeutischer Erfolge.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Eine genaue MRT-Diagnose kann entscheidend für das weitere Patientenmanagement sein, von der Wahl der Therapie bis zur Prognoseabschätzung.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zur Magnetresonanztomographie (MRT) gehören die Computertomographie (CT), die schnelle und detaillierte Bilder liefern kann, jedoch ionisierende Strahlung verwendet. Ultraschall ist eine weitere Alternative, die insbesondere bei der Untersuchung von Weichteilen und in der pränatalen Diagnostik weit verbreitet ist. Die Positronen-Emissions-Tomographie (PET) kombiniert die Bildgebung mit funktionellen Informationen, indem sie Stoffwechselprozesse im Körper darstellt. Röntgenaufnahmen sind eine schnelle und kostengünstige Methode zur Visualisierung von Knochen und anderen harten Strukturen, jedoch weniger geeignet für die detaillierte Untersuchung von Weichteilgeweben.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Entwicklungen in der MRT-Technologie umfassen die 7-Tesla-MRT, die eine noch höhere Bildauflösung und detailliertere Einblicke in die Anatomie bietet. Fortschritte in der funktionellen MRT (fMRT) ermöglichen es, Hirnaktivitäten und -funktionen genauer zu untersuchen und besser zu verstehen.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "In der Zukunft wird die Integration von Künstlicher Intelligenz (KI) erwartet, um die Bildanalyse zu verbessern und die Diagnosegenauigkeit zu erhöhen. Neue Kontrastmittel werden entwickelt, um spezifischere und präzisere Diagnosen zu ermöglichen. Zudem wird an der Reduzierung der Untersuchungsdauer gearbeitet, um die MRT für Patienten angenehmer und effizienter zu gestalten.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die MRT ist ein unverzichtbares diagnostisches Werkzeug mit vielfältigen Anwendungen und Vorteilen, jedoch auch mit bestimmten Einschränkungen und Risiken.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Die fortlaufende Forschung und technologische Weiterentwicklung versprechen, die diagnostischen Fähigkeiten der MRT weiter zu verbessern und ihre Anwendungsmöglichkeiten zu erweitern. Die Kenntnis und korrekte Anwendung der MRT ist für Ärzte von großer Bedeutung, um eine optimale Patientenversorgung sicherzustellen.",
              },
            ],
          },
        ],
      },
      // 2tab
      {
        id: 22,
        title: "Patient-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Ziel der Untersuchung",
            second:
              "Erläutern, dass die MRT dazu dient, detaillierte Bilder des Körperinneren zu erstellen, um Erkrankungen zu diagnostizieren oder Behandlungen zu überwachen.",
            third:
              "Die MRT hilft uns, genaue Bilder Ihres Gehirns zu bekommen, um eine mögliche Entzündung oder einen Tumor auszuschließen.",
            fourth:
              "Wir verwenden die MRT, um den Zustand Ihrer Gelenke zu beurteilen und festzustellen, ob eine Operation notwendig ist.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben, wie die Untersuchung abläuft: Der Patient liegt auf einem Tisch, der in den MRT-Scanner geschoben wird. Die Untersuchung dauert normalerweise zwischen 20 und 60 Minuten.",
            third:
              "Sie werden auf einem beweglichen Tisch liegen, der in die MRT-Röhre geschoben wird. Die Untersuchung dauert etwa 45 Minuten.",
            fourth:
              "Während der Untersuchung müssen Sie still liegen. Der Scanner macht laute Geräusche, aber Sie bekommen Kopfhörer.",
          },
          {
            first: "Vorbereitung",

            second:
              "Informieren, dass der Patient vor der Untersuchung möglicherweise Schmuck und metallische Gegenstände ablegen muss. Eventuell muss ein Kontrastmittel verabreicht werden.",
            third:
              "Bitte lassen Sie Schmuck und metallische Gegenstände zu Hause oder legen Sie diese vor der Untersuchung ab.",
            fourth:
              "Möglicherweise erhalten Sie ein Kontrastmittel, das uns hilft, die Bilder klarer zu sehen. Informieren Sie uns über Allergien.",
          },
          {
            first: "Risiken",
            second:
              "Aufklären über mögliche Risiken wie allergische Reaktionen auf Kontrastmittel, Unverträglichkeiten bei Metallimplantaten und das geringe Risiko von thermischen Verletzungen.",
            third:
              "Es besteht ein geringes Risiko einer allergischen Reaktion auf das Kontrastmittel. Bitte informieren Sie uns über bekannte Allergien.",
            fourth:
              "Patienten mit Herzschrittmachern können nicht untersucht werden, da das Magnetfeld die Funktion beeinträchtigen könnte.",
          },
          {
            first: "Vorteile",
            second:
              "Betonen, dass die MRT nicht invasiv ist, keine ionisierende Strahlung verwendet und eine hohe Auflösung für Weichteilgewebe bietet. Sie ermöglicht auch die Funktionsbildgebung.",
            third:
              "Die MRT ist schmerzlos und verwendet keine Strahlung, was sie sicherer macht als andere bildgebende Verfahren wie CT.",
            fourth:
              "Mit der MRT können wir sehr detaillierte Bilder Ihrer Weichteile erstellen, was bei der Diagnose von Muskel- und Gelenkproblemen hilfreich ist.",
          },
          {
            first: "Alternativen",
            second:
              "Nennen von Alternativen wie Computertomographie (CT), Ultraschall, Positronen-Emissions-Tomographie (PET) und Röntgenaufnahmen. Diese Methoden haben jeweils eigene Vor- und Nachteile.",
            third:
              "Eine Alternative zur MRT könnte die CT sein, die schneller ist, aber Strahlung verwendet.",
            fourth:
              "Ein Ultraschall könnte ebenfalls in Frage kommen, ist jedoch weniger detailliert bei der Darstellung von Weichteilen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern, dass Patienten mit bestimmten Metallimplantaten, Herzschrittmachern oder anderen elektronischen Geräten im Körper nicht untersucht werden können.",
            third:
              "Wenn Sie Metallimplantate wie künstliche Gelenke haben, müssen wir prüfen, ob eine MRT sicher für Sie ist.",
            fourth:
              "Herzschrittmacher oder andere elektronische Geräte im Körper können durch die MRT beeinträchtigt werden und sind eine Kontraindikation.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Informieren über die Art der möglichen Befunde, wie Tumore, Entzündungen, strukturelle Veränderungen oder andere Anomalien.",
            third:
              "Die MRT kann zeigen, ob ein Tumor vorhanden ist und wie groß er ist.",
            fourth:
              "Wir können sehen, ob es Anzeichen für eine Entzündung oder eine strukturelle Veränderung in Ihrem Knie gibt.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Erklären, warum es wichtig ist, dass der Patient die Untersuchung und die möglichen Risiken und Vorteile versteht und schriftlich zustimmt.",
            third:
              "Es ist wichtig, dass Sie die Untersuchung verstehen und schriftlich zustimmen, damit wir sicherstellen können, dass Sie über alle Aspekte informiert sind.",
            fourth:
              "Ihr Einverständnis ist notwendig, damit wir die Untersuchung durchführen können und Sie über mögliche Risiken informiert sind.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Beschreiben, wie der Prozess des Einverständniserhalts abläuft: der Patient erhält alle notwendigen Informationen und unterschreibt eine Einverständniserklärung.",
            third:
              "Wir werden Ihnen alle Informationen zur Untersuchung geben und Sie bitten, eine Einverständniserklärung zu unterschreiben.",
            fourth:
              "Bevor wir beginnen, müssen Sie das Einverständnisformular lesen und unterschreiben, um zu bestätigen, dass Sie alle Informationen verstanden haben.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Hinweisen auf wichtige Verhaltensregeln nach der Untersuchung, wie das Trinken von viel Wasser, um das Kontrastmittel aus dem Körper zu spülen, und das Melden von ungewöhnlichen Symptomen.",
            third:
              "Nach der Untersuchung sollten Sie viel Wasser trinken, um das Kontrastmittel schneller aus Ihrem Körper zu spülen.",
            fourth:
              "Bitte melden Sie sich sofort, wenn Sie nach der Untersuchung ungewöhnliche Symptome wie Hautausschlag oder Atembeschwerden bemerken.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erläutern, wie und wann der Patient die Ergebnisse erhält, wer diese bespricht und welche nächsten Schritte je nach Befund erfolgen können.",
            third:
              "Die Ergebnisse der MRT werden in der Regel innerhalb von 1-2 Tagen vorliegen und mit Ihrem behandelnden Arzt besprochen.",
            fourth:
              "Ihr Arzt wird die Ergebnisse der MRT mit Ihnen besprechen und die nächsten Schritte je nach den Befunden planen.",
          },
        ],
      },
      // 3tab
      {
        id: 23,
        title: "Arzt-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Was ist eigentlich die angegebene Untersuchung",
            second:
              "Erklären, dass es sich bei der MRT um ein bildgebendes Verfahren handelt, das mittels starker Magnetfelder und Radiowellen detaillierte Bilder des Körperinneren erzeugt.",
            third:
              "Die MRT ist ein diagnostisches Verfahren, das hochauflösende Bilder von inneren Organen und Geweben ohne Strahlung liefert.",
            fourth:
              "Die MRT verwendet starke Magnetfelder und Radiowellen, um detaillierte Schnittbilder des Körpers zu erstellen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Besprechen, dass die MRT besonders geeignet ist für die Untersuchung von Weichteilgeweben, dem zentralen Nervensystem, Gelenken und dem Herz-Kreislauf-System.",
            third:
              "Mit der MRT können wir Hirnstrukturen detailliert untersuchen und neurologische Erkrankungen wie Multiple Sklerose diagnostizieren.",
            fourth:
              "Die MRT ist ideal zur Beurteilung von Gelenkproblemen, da sie detaillierte Bilder von Knorpel, Bändern und Menisken liefert.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erläutern, welche Befunde erwartet werden können, wie z.B. Tumore, Entzündungen, strukturelle Anomalien und deren Bedeutung für die Diagnose und Behandlung.",
            third:
              "Die MRT hat einen Verdacht auf einen Tumor in der linken Hemisphäre gezeigt, was eine weitere Abklärung durch Biopsie erfordert.",
            fourth:
              "Es wurden Entzündungen in den Sakroiliakalgelenken festgestellt, was auf eine mögliche Spondylitis hinweist.",
          },
          {
            first: "Indikationen",
            second:
              "Diskutieren, welche klinischen Fragestellungen eine MRT rechtfertigen, wie z.B. Verdacht auf Tumore, neurologische Erkrankungen, Gelenkprobleme oder Herz-Kreislauf-Erkrankungen.",
            third:
              "Bei Verdacht auf Schlaganfall ist die MRT indiziert, um ischämische Veränderungen frühzeitig zu erkennen.",
            fourth:
              "Eine MRT ist angezeigt bei chronischen Rückenschmerzen, um mögliche Bandscheibenvorfälle oder Spinalkanalstenosen zu identifizieren.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Besprechen, welche Patienten nicht für eine MRT geeignet sind, wie z.B. Personen mit bestimmten Metallimplantaten, Herzschrittmachern oder anderen elektronischen Geräten im Körper.",
            third:
              "Patienten mit Herzschrittmachern können nicht mittels MRT untersucht werden, da das Magnetfeld die Funktion des Geräts stören kann.",
            fourth:
              "Personen mit metallischen Fremdkörpern, wie chirurgischen Clips oder Implantaten, sind für eine MRT nicht geeignet.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erörtern, welche alternativen Diagnosen in Betracht gezogen werden sollten und wie die MRT helfen kann, diese zu bestätigen oder auszuschließen.",
            third:
              "Bei unklaren neurologischen Symptomen kann die MRT helfen, Differenzialdiagnosen wie Multiple Sklerose oder Hirntumor abzugrenzen.",
            fourth:
              "Die MRT kann zwischen verschiedenen Ursachen von Gelenkschmerzen unterscheiden, wie Arthritis, Meniskusschäden oder Bänderrissen.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Diskutieren, wie die Ergebnisse der MRT die weiteren Behandlungsstrategien beeinflussen können, einschließlich möglicher chirurgischer Eingriffe, medikamentöser Therapien oder weiterer Untersuchungen.",
            third:
              "Die MRT-Befunde unterstützen die Indikation zur operativen Entfernung des Tumors.",
            fourth:
              "Aufgrund der MRT-Ergebnisse empfehlen wir eine konservative Behandlung mit Physiotherapie und Schmerzmedikation.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen, wie wichtig die Zusammenarbeit mit anderen Fachbereichen ist, um die MRT-Ergebnisse richtig zu interpretieren und einen umfassenden Behandlungsplan zu erstellen.",
            third:
              "Für die Beurteilung der MRT-Bilder bei komplexen neurologischen Fällen arbeiten wir eng mit unseren Neurochirurgen zusammen.",
            fourth:
              "Die enge Zusammenarbeit mit Radiologen und Orthopäden ist essenziell, um die besten Therapieoptionen für Gelenkerkrankungen zu bestimmen.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Besprechen, wie die Qualität der MRT-Untersuchung sichergestellt wird, einschließlich der Wartung der Geräte, der Schulung des Personals und der Standardisierung der Untersuchungsprotokolle.",
            third:
              "Regelmäßige Wartung der MRT-Geräte und kontinuierliche Schulungen des Personals gewährleisten hochqualitative Aufnahmen.",
            fourth:
              "Durch standardisierte Untersuchungsprotokolle stellen wir sicher, dass die Bilder konsistent und vergleichbar sind.",
          },
          {
            first: "DokumentaAon und Weiterverfolgung",
            second:
              "Erläutern, wie die Ergebnisse der MRT dokumentiert und an die relevanten Fachbereiche weitergeleitet werden, sowie die Bedeutung der Nachverfolgung der Patienten, um den Behandlungserfolg zu überwachen.",
            third:
              "Die MRT-Ergebnisse werden detailliert im Patientenakt dokumentiert und an den behandelnden Arzt weitergeleitet.",
            fourth:
              "Eine engmaschige Nachverfolgung nach der MRT ist wichtig, um den Behandlungserfolg zu überwachen und gegebenenfalls Anpassungen vorzunehmen.",
          },
        ],
      },
      // 4tab
      {
        id: 24,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Erster Pathologischer Befund (z.B. Lungentumor)",
          },
          {
            name: "fourth",
            visualText: "Zweiter Pathologischer Befund (z.B. Lungenembolie)",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall",
            second:
              "35-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "45-jähriger Patient klagt über anhaltende Kopfschmerzen und Sehstörungen. Vorgeschichte einer Epilepsie.",
            fourth:
              "30-jährige Patientin berichtet von periodischer Taubheit in den Extremitäten und Ermüdung. Familiengeschichte neurologischer Erkrankungen",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "MRT des Gehirns ohne Anomalien, keine Anzeichen pathologischer Veränderungen.",
            third:
              "MRT zeigt eine 2 cm große, kontrastmittelaufnehmende Masse im linken Frontallappen.",
            fourth:
              "MRT offenbart mehrere demyelinisierende Läsionen, die periventrikulär verteilt sind.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das MRT-Ergebnis unterstützt den Ausschluss neurologischer Erkrankungen.",
            third:
              "Der Befund deutet auf einen Glioblastom hin. Die Lokalisation und Morphologie korrelieren mit den neurologischen Symptomen des Patienten.",
            fourth:
              "Die Verteilung und das Erscheinungsbild der Läsionen sind typisch für Multiple Sklerose. Zusammenhang mit den klinischen Symptomen.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung der neurochirurgischen Resektion und anschließender Radiotherapie.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer immunmodulatorischen Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Gehirns. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines Glioblastoms basierend auf MRT-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Multipler Sklerose aufgrund der MRT-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmietel",
            second:
              "Homogenes Gehirngewebe ohne Auffälligkeiten in allen Sequenzen.",
            third:
              "MRT-Aufnahmen zeigen einen deutlich abgegrenzten, hyperintensen Tumor im T1-gewichteten Bild nach Kontrastmittelgabe.",
            fourth:
              "T2-gewichtete MRT-Bilder zeigen hyperintense Läsionen, sogenannte „Dawson-Finger“, die für MS charakteristisch sind.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen, dass der Patient weiterhin regelmäßige gesundheitliche Überprüfungen durchführt und einen gesunden Lebensstil beibehält, einschließlich einer ausgewogenen Ernährung und regelmäßiger körperlicher Aktivität.",
            third:
              "Wir empfehlen die sofortige Planung der neurochirurgischen Resektion und die Einleitung einer adjuvanten Radiotherapie. Der Patient sollte zudem seinen Lebensstil ändern, um die allgemeine Gesundheit zu fördern, einschließlich einer ausgewogenen Ernährung und regelmäßiger Bewegung.",
            fourth:
              "Wir empfehlen die Einleitung einer immunmodulatorischen Therapie und regelmäßige neurologische Kontrollen. Der Patient sollte auch seinen Lebensstil ändern, Stress reduzieren und auf eine ausgewogene Ernährung achten.",
          },
        ],
      },
      // 5tab
      {
        id: 25,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Computertomographie (CT)-Gerät ist ein fortgeschrittenes bildgebendes medizinisches Instrument, das für detaillierte innere Bilder des Körpers verwendet wird. Hier sind die Hauptkomponenten und Funktionen eines CT-Geräts:",
        text_list: [
          {
            bold: "Gantry:",
            other:
              "Das auffälligste Merkmal eines CT-Geräts ist die Gantry, eine große, ringförmige Struktur, in die der Patient auf einem beweglichen Tisch hineingeschoben wird. Innerhalb der Gantry rotiert eine Röntgenröhre schnell um den Patienten herum, während gegenüberliegend Röntgendetektoren angebracht sind.",
          },
          {
            bold: "Röntgenröhre:",
            other:
              "Die Röntgenröhre sendet während der Drehung um den Patienten herum kontinuierlich Röntgenstrahlen aus. Diese Strahlen durchdringen den Körper und werden je nach Dichte der verschiedenen Gewebe und Strukturen unterschiedlich absorbiert.",
          },
        ],
      },
      // 6tab
      {
        id: 26,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "Magnetresonanztomographie (MRT):",
            other:
              "Die Technik selbst, bei der mittels starker Magnetfelder und Radiowellen detaillierte Schnittbilder des Körpers erzeugt werden.",
          },
          {
            bold: "Kernspintomographie:",
            other:
              "Ein anderer Begriff für MRT, häufig verwendet im deutschsprachigen Raum.",
          },
          {
            bold: "Hochfrequenzimpulse:",
            other:
              "Radiowellen, die zur Anregung der Atomkerne verwendet werden.",
          },
          {
            bold: "Protonenresonanz:",
            other: "Das Phänomen, auf dem die MRT-Bildgebung basiert.",
          },
          {
            bold: "Magnetfeld:",
            other:
              "Das starke, externe Feld, das zur Ausrichtung der Protonen benötigt wird.",
          },
          {
            bold: "Gradientenfelder",
            other:
              "Magnetfelder, die für die räumliche Kodierung innerhalb der MRT verwendet werden.",
          },
          {
            bold: "T1- und T2-Gewichtung:",
            other:
              "Unterschiedliche Bildgebungsmodi, die auf der Relaxationszeit der Protonen basieren.",
          },
          {
            bold: "Kontrastmittel:",
            other:
              "Substanzen, die intravenös verabreicht werden, um die Unterschiede zwischen Geweben zu verstärken.",
          },
          {
            bold: "Diffusionsbildgebung:",
            other:
              "Eine Technik, die die Bewegung von Wassermolekülen im Gewebe misst.",
          },
          {
            bold: "fMRT (funktionelle MRT):",
            other:
              "Eine Anwendung der MRT, die Blutfluss und neuronale Aktivität darstellt.",
          },
          {
            bold: "Schnittbilder:",
            other:
              "Die Querschnittbilder des Körpers, die durch die MRT erzeugt werden.",
          },
          {
            bold: "Artefakte:",
            other:
              "Bildfehler, die durch verschiedene Faktoren wie Bewegung oder Metallimplantate verursacht werden.",
          },
          {
            bold: "Sequenzen:",
            other:
              "Verschiedene Protokolle für die MRT-Aufnahmen, z.B. Spin-Echo oder Gradienten-Echo.",
          },
          {
            bold: "Spulen:",
            other:
              "Gerätekomponenten, die für die Signalübertragung und -empfang verantwortlich sind.",
          },
          {
            bold: "Bildauflösung:",
            other: "Die Detailgenauigkeit der MRT-Bilder.",
          },
          {
            bold: "Signal-Rausch-Verhältnis (SNR):",
            other:
              "Ein Maß für die Bildqualität in Bezug auf die Klarheit der Darstellung.",
          },
          {
            bold: "Bildrekonstruktion:",
            other:
              "Der Prozess der Umwandlung von Rohdaten in sichtbare Bilder.",
          },
          {
            bold: "Multiplanare Rekonstruktion (MPR):",
            other:
              "Die Möglichkeit, Bilder in verschiedenen Ebenen aus den ursprünglichen Schnittbildern zu erstellen.",
          },
          {
            bold: "Sättigung:",
            other:
              "Eine Technik, die bestimmte Signale im Bild unterdrückt, um bestimmte Gewebe hervorzuheben.",
          },
          {
            bold: "Sicherheitsprotokolle:",
            other:
              "Richtlinien zum Schutz von Patienten und Personal vor den starken Magnetfeldern.",
          },
        ],
      },
      {
        id: 27,
        title: "Links",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "DocCheck Flexikon",
            other:
              "Diese Seite bietet umfangreiche Informationen zur MRT, einschließlich des Aufbaus und der Funktionsweise eines MRT-Geräts, der unterschiedlichen Sequenzen und der klinischen Anwendungen. [DocCheck Flexikon - MRT​](https://flexikon.doccheck.com/de/MRT)​​ [DocCheck Flexikon](https://flexikon.doccheck.com/de/MRT)​​ [DocCheck Flexikon](https://flexikon.doccheck.com/de/MRT)​​ ",
          },
          {
            bold: "Stiftung Gesundheitswissen",
            other:
              "Auf dieser Seite finden Sie Informationen über den Ablauf einer MRT-Untersuchung, die Vorbereitung und mögliche Risiken sowie Tipps für Patienten, die unter Platzangst leiden. [Stiftung Gesundheitswissen](https://www.stiftung-gesundheitswissen.de)",
          },
          {
            bold: "praktischArzt",
            other:
              "Diese Seite beschreibt detailliert den Ablauf einer MRT-Untersuchung, die Vorbereitungen, die während der Untersuchung zu beachtenden Punkte und die Nachsorge. [praktischArzt](https://www.praktischarzt.de)",
          },
          {
            bold: "NetDoktor",
            other:
              "Diese Webseite erklärt die Gründe für eine MRT, den Ablauf der Untersuchung, die Unterschiede zwischen T1- und T2-Gewichtung und die Verwendung von Kontrastmitteln. [NetDoktor](https://www.netdoktor.de)",
          },
          {
            bold: "Med 360°",
            other:
              "Diese Seite bietet umfassende Informationen zur Kernspintomographie, einschließlich der Vorbereitung, des Ablaufs der Untersuchung und der Einsatzgebiete der MRT. [Med 360°](https://www.med360grad.de)",
          },
          {
            bold: "Lifeline",
            other:
              "Auf dieser Seite erhalten Sie Informationen zum Ablauf, den Kosten und der Verwendung von Kontrastmitteln bei einer MRT. Es wird auch erläutert, welche Symptome und Krankheiten mit einer MRT abgeklärt werden können. [Lifeline](https://www.lifeline.de)",
          },
        ],
      },
      {
        id: 28,
        title: "PDF",
        link: "https://drive.google.com/file/d/1wJJz9PBp2etWttW0nGwgu567JforFgvS/view?usp=share_link",
      },
    ],
  },
  // end of parent tab: 2
  // start of parent tab: 3
  {
    id: 3,
    title: "Röntgen",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 31,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das Ziel der Röntgenuntersuchung ist es, detaillierte Bilder von Strukturen innerhalb des Körpers zu erstellen, um Diagnose und Behandlung zu unterstützen. Diese Bilder ermöglichen es Ärzten, Knochenbrüche, Tumore, Infektionen und andere Anomalien zu identifizieren.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Röntgenstrahlen werden in verschiedenen medizinischen Bereichen eingesetzt, darunter Orthopädie, Kardiologie und Onkologie. Sie sind besonders nützlich für die Untersuchung von Knochen und Gelenken, der Lunge und des Brustkorbs.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Röntgenstrahlen sind eine Form elektromagnetischer Strahlung mit einer hohen Energie, die durch den Körper dringt. Unterschiedliche Gewebearten absorbieren diese Strahlen unterschiedlich stark, wodurch ein Kontrast auf dem Röntgenbild entsteht.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Ein Röntgengerät besteht aus einer Röntgenröhre, die Strahlen erzeugt, und einem Detektor, der diese Strahlen aufzeichnet. Der Patient wird zwischen der Röhre und dem Detektor positioniert, und die Strahlen werden durch den Körper auf den Detektor gelenkt.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung der Röntgenbilder erfordert Kenntnisse über normale anatomische Strukturen und pathologische Veränderungen. Ärzte müssen in der Lage sein, subtile Unterschiede in den Graustufen zu erkennen und diese korrekt zu interpretieren.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde umfassen Knochenbrüche, Arthritis, Lungenerkrankungen wie Pneumonie oder Tuberkulose und Herzvergrößerungen. Jede dieser Erkrankungen hat spezifische Merkmale, die auf dem Röntgenbild erkennbar sind.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Röntgenuntersuchungen sind schnell, nicht-invasiv und weit verbreitet. Sie bieten eine klare Darstellung von Knochen und bestimmten Weichgewebestrukturen, was die Diagnose erleichtert.",
              },
              {
                bold_text: "Nachteile:",
                text: "Die Bildqualität kann durch Überlagerung von Strukturen beeinträchtigt werden. Weichteile sind weniger detailliert darstellbar als bei anderen bildgebenden Verfahren wie MRT oder CT.",
              },
              {
                bold_text: "Risiken:",
                text: "Röntgenstrahlen beinhalten ionisierende Strahlung, die potenziell gesundheitsschädlich sein kann. Das Risiko ist jedoch bei diagnostischen Dosen gering, sollte aber dennoch berücksichtigt werden, insbesondere bei Kindern und schwangeren Frauen.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Röntgenbilder spielen eine entscheidende Rolle bei der Erstdiagnose und der weiteren Behandlung vieler Erkrankungen. Sie liefern schnelle und zuverlässige Informationen, die für die Planung der Therapie unerlässlich sind.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Die Fähigkeit, schnelle und genaue Diagnosen zu stellen, verbessert das Patientenmanagement erheblich. Es ermöglicht eine zeitnahe Intervention und Überwachung des Krankheitsverlaufs.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zur Röntgenuntersuchung zählen Ultraschall, Magnetresonanztomographie (MRT) und Computertomographie (CT). Diese Methoden haben jeweils ihre eigenen Vor- und Nachteile und werden je nach klinischer Fragestellung eingesetzt.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Neueste Forschungsergebnisse befassen sich mit der Reduktion der Strahlenbelastung durch verbesserte Technologie und Protokolle. Außerdem gibt es Fortschritte in der digitalen Bildgebung, die die Bildqualität weiter erhöhen.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Die Zukunft der Röntgendiagnostik könnte durch Entwicklungen wie künstliche Intelligenz und maschinelles Lernen geprägt sein, die eine noch genauere Interpretation und schnellere Befundung ermöglichen könnten.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Röntgenuntersuchungen sind ein essenzielles Werkzeug in der medizinischen Diagnostik, das durch seine Schnelligkeit und Zuverlässigkeit besticht. Trotz gewisser Risiken überwiegen die Vorteile deutlich.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Die Fähigkeit, genaue und schnelle Diagnosen zu stellen, macht das Röntgen zu einem unverzichtbaren Bestandteil der modernen Medizin. Es unterstützt Ärzte dabei, fundierte Entscheidungen zu treffen und die bestmögliche Patientenversorgung zu gewährleisten.",
              },
            ],
          },
        ],
      },
      // 2tab
      {
        id: 32,
        title: "Patient-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Ziel der Untersuchung",
            second:
              "Erklären, dass die Röntgenuntersuchung dazu dient, detaillierte Bilder von Knochen, Organen und Geweben zu erstellen, um mögliche Krankheiten oder Verletzungen zu diagnostizieren.",
            third:
              "Wir machen diese Röntgenaufnahme, um zu sehen, ob Ihr Arm gebrochen ist.",
            fourth:
              "Die Röntgenuntersuchung hilft uns, Ihre Lunge auf Anzeichen einer Infektion zu überprüfen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben, wie die Röntgenuntersuchung durchgeführt wird: Der Patient wird positioniert, die Röntgenröhre und der Detektor werden eingestellt, und die Strahlen durchdringen den Körper, um Bilder zu erzeugen.",
            third:
              "Sie werden gebeten, sich auf den Untersuchungstisch zu legen und stillzuhalten, während das Bild gemacht wird.",
            fourth:
              "Bitte stehen Sie vor dem Röntgengerät und folgen Sie den Anweisungen des Technikers.",
          },
          {
            first: "Vorbereitung",
            second:
              "Informieren, dass in der Regel keine besondere Vorbereitung erforderlich ist, außer das Entfernen von Schmuck oder metallischen Gegenständen, die das Bild beeinträchtigen könnten.",
            third:
              "Bitte entfernen Sie Ihren Schmuck und ziehen Sie das Krankenhaushemd an.",
            fourth:
              "Stellen Sie sicher, dass Sie keine metallischen Gegenstände bei sich tragen.",
          },
          {
            first: "Risiken",
            second:
              "Erklären, dass die Strahlenbelastung gering ist, aber trotzdem vorhanden. Besonders bei schwangeren Frauen und Kindern sollte das Risiko abgewogen werden.",
            third:
              "Die Strahlung ist minimal, aber wir vermeiden unnötige Röntgenaufnahmen bei schwangeren Frauen.",
            fourth:
              "Die Strahlenbelastung ist gering und wird auf das notwendige Minimum reduziert.",
          },
          {
            first: "Vorteile",
            second:
              "Hervorheben, dass Röntgenbilder schnell und nicht-invasiv sind und zuverlässige Informationen liefern, die für die Diagnose und Behandlung wichtig sind.",
            third:
              "Röntgenbilder sind schnell verfügbar und helfen uns, schnell eine Diagnose zu stellen.",
            fourth:
              "Mit einer Röntgenaufnahme können wir zuverlässig und ohne Eingriff feststellen, was im Körper vor sich geht.",
          },
          {
            first: "Alternativen",
            second:
              "Nennen von Alternativen wie Ultraschall, MRT oder CT, die je nach Situation und zu untersuchendem Körperteil eingesetzt werden können.",
            third:
              "Falls nötig, können wir alternativ einen Ultraschall machen.",
            fourth:
              "Eine MRT wäre eine andere Möglichkeit, um detaillierte Bilder zu bekommen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären, dass Röntgenuntersuchungen bei schwangeren Frauen nur in Notfällen durchgeführt werden sollten und bei bestimmten metallischen Implantaten Vorsicht geboten ist.",
            third:
              "Bei Schwangeren führen wir Röntgenaufnahmen nur im Notfall durch.",
            fourth:
              "Wenn Sie metallische Implantate haben, informieren Sie bitte den Techniker.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Beschreiben, dass die Ergebnisse Hinweise auf Frakturen, Infektionen, Tumore oder andere Anomalien geben können.",
            third: "Das Röntgenbild kann zeigen, ob Ihr Knochen gebrochen ist.",
            fourth:
              "Wir können auf dem Röntgenbild sehen, ob Sie eine Lungenentzündung haben.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen, dass es wichtig ist, das Einverständnis des Patienten zu haben, da der Eingriff mit Strahlenbelastung verbunden ist und der Patient die möglichen Risiken verstehen muss.",
            third:
              "Wir benötigen Ihre Zustimmung, bevor wir die Röntgenaufnahme machen können.",
            fourth:
              "Es ist wichtig, dass Sie die Risiken verstehen und der Untersuchung zustimmen.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Sicherstellen, dass der Patient das Verfahren und die Risiken verstanden hat und sein Einverständnis dokumentiert wird.",
            third:
              "Bitte unterschreiben Sie hier, um Ihre Zustimmung zu bestätigen.",
            fourth:
              "Können Sie mir bestätigen, dass Sie die Risiken verstanden haben und der Untersuchung zustimmen?",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Den Patienten informieren, dass sie während der Untersuchung stillhalten müssen und dass das Personal während der Untersuchung Anweisungen gibt.",
            third: "Bitte bleiben Sie während der Aufnahme ganz still liegen.",
            fourth:
              "Halten Sie bitte die Anweisungen des Technikers genau ein, um ein klares Bild zu bekommen.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären, dass die Ergebnisse meist schnell verfügbar sind und von einem Radiologen interpretiert werden, der die Befunde dann mit dem behandelnden Arzt bespricht.",
            third:
              "Die Ergebnisse werden in der Regel innerhalb einer Stunde verfügbar sein.",
            fourth:
              "Der Radiologe wird die Bilder interpretieren und wir besprechen die Befunde anschließend mit Ihnen.",
          },
        ],
      },
      // 3tab
      {
        id: 33,
        title: "Arzt-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Was ist eigentlich die angegebene Untersuchung",
            second:
              "Erklären, dass es sich bei der Röntgenuntersuchung um ein bildgebendes Verfahren handelt, das mithilfe von Röntgenstrahlen detaillierte Bilder von Knochen und Organen erstellt.",
            third:
              "Die Röntgenuntersuchung ermöglicht es uns, die inneren Strukturen des Körpers sichtbar zu machen, insbesondere Knochen und einige Organe.",
            fourth:
              "Röntgenbilder werden erzeugt, indem Röntgenstrahlen durch den Körper geschickt und auf einem Detektor aufgezeichnet werden, um diagnostische Informationen zu gewinnen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Aufzeigen, dass Röntgenuntersuchungen zur Diagnose von Knochenbrüchen, Infektionen, Tumoren, Lungenerkrankungen und Herzvergrößerungen eingesetzt werden können.",
            third:
              "Mit Röntgen können wir Frakturen, Infektionen in der Lunge oder Abnormalitäten im Brustkorb diagnostizieren.",
            fourth:
              "Wir können Tumore im Knochen oder Weichteilgewebe, entzündliche Prozesse oder strukturelle Anomalien nachweisen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Beschreiben, dass die Ergebnisse auf Frakturen, pathologische Veränderungen wie Tumore oder Infektionen und anatomische Anomalien hinweisen können.",
            third:
              "Die Röntgenbilder zeigen eine klare Fraktur im distalen Radius.",
            fourth:
              "Es gibt Hinweise auf eine konsolidierte Lungenentzündung im rechten unteren Lungenfeld.",
          },
          {
            first: "Indikationen",
            second:
              "Erklären, dass Indikationen für eine Röntgenuntersuchung unter anderem Trauma, anhaltende Schmerzen, Verdacht auf Frakturen, Infektionen oder Tumore sind.",
            third:
              "Indikationen umfassen ein Trauma des Handgelenks mit Verdacht auf Fraktur.",
            fourth:
              "Bei Verdacht auf Pneumonie bei einem Patienten mit Fieber und Husten ist eine Röntgenuntersuchung indiziert.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Darlegen, dass Kontraindikationen Schwangerschaft (außer in Notfällen) und bestimmte metallische Implantate sind, die das Bild stören oder zu Schäden führen könnten.",
            third:
              "Bei schwangeren Patientinnen sollten Röntgenuntersuchungen vermieden werden, es sei denn, es ist dringend notwendig.",
            fourth:
              "Patienten mit Herzschrittmachern oder bestimmten metallischen Implantaten sollten je nach Lage und Art des Implantats individuell beurteilt werden.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Aufzeigen, dass Röntgenbilder helfen können, verschiedene Differenzialdiagnosen wie Pneumonie vs. Tuberkulose oder benigne vs. maligne Tumore zu unterscheiden.",
            third:
              "Die Röntgenbilder helfen uns, zwischen einer bakteriellen Pneumonie und einer Tuberkulose zu differenzieren.",
            fourth:
              "Es ermöglicht uns, eine gutartige Knochenschwellung von einem malignen Knochentumor zu unterscheiden.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen, dass die Röntgenergebnisse zur Erstellung eines Behandlungsplans beitragen, wie z.B. operative Eingriffe bei Frakturen oder medikamentöse Therapie bei Infektionen.",
            third:
              "Aufgrund der Fraktur im Röntgenbild planen wir eine operative Fixierung des Knochens.",
            fourth:
              "Bei nachgewiesener Lungenentzündung beginnen wir mit einer antibiotischen Therapie basierend auf den Röntgenbefunden.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Erklären, dass die Zusammenarbeit mit Radiologen, Orthopäden und anderen Fachärzten notwendig ist, um die Ergebnisse zu interpretieren und den Behandlungsplan zu optimieren.",
            third:
              "Wir werden den Radiologen konsultieren, um die genaue Ausdehnung der Fraktur zu besprechen und den optimalen Behandlungsansatz zu bestimmen.",
            fourth:
              "Die enge Zusammenarbeit mit dem Kardiologen ist notwendig, um die Herzvergrößerung im Röntgenbild weiter zu bewerten.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Betonen, dass Qualitätsmanagementprozesse sicherstellen, dass die Röntgenaufnahmen korrekt durchgeführt und interpretiert werden, um optimale Patientenergebnisse zu gewährleisten.",
            third:
              "Durch regelmäßige Kalibrierung und Wartung der Röntgengeräte stellen wir die Bildqualität sicher.",
            fourth:
              "Fortlaufende Schulungen für das Personal sorgen dafür, dass die Aufnahmen nach den neuesten Standards durchgeführt werden.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erklären, dass alle Untersuchungsergebnisse und Maßnahmen dokumentiert werden müssen und eine kontinuierliche Nachverfolgung des Patienten notwendig ist, um den Behandlungserfolg zu überwachen.",
            third:
              "Die Ergebnisse der Röntgenuntersuchung werden in der Patientenakte dokumentiert und regelmäßig überprüft, um den Heilungsfortschritt zu überwachen.",
            fourth:
              "Eine Nachkontrolle in zwei Wochen wird angesetzt, um den Heilungsverlauf des Knochenbruchs zu beurteilen.",
          },
        ],
      },
      // 4tab
      {
        id: 34,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Erster Pathologischer Befund (z.B. Lungentumor)",
          },
          {
            name: "fourth",
            visualText: "Zweiter Pathologischer Befund (z.B. Lungenembolie)",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall",
            second:
              "35-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient mit chronischem Husten und Gewichtsverlust. Vorgeschichte von Rauchen.",
            fourth:
              "45-jährige Patientin mit Fieber, Husten und Atembeschwerden. Keine signifikante Vorgeschichte.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Röntgenbild der Lunge zeigt klare Lungenfelder ohne Anzeichen pathologischer Veränderungen.",
            third:
              "Röntgenbild zeigt eine unscharf begrenzte, lobäre Verschattung im rechten oberen Lungenlappen.",
            fourth:
              "Röntgenbild zeigt diffuse, inhomogene Verschattungen in beiden unteren Lungenfeldern.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Röntgenergebnis unterstützt den Ausschluss pulmonaler Erkrankungen.",
            third:
              "Der Befund deutet auf ein Bronchialkarzinom hin. Die Lokalisation und das Erscheinungsbild sind verdächtig für einen malignen Prozess.",
            fourth:
              "Die Verteilung und das Erscheinungsbild der Verschattungen sind typisch für eine bakterielle Pneumonie.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer Biopsie und weiterer onkologischer Abklärung.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer antibiotischen Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Lunge. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines Bronchialkarzinoms basierend auf Röntgenbefunden und klinischem Bild.",
            fourth:
              "Diagnose einer bakteriellen Pneumonie aufgrund der Röntgenergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmietel",
            second:
              "Homogene Lungenfelder ohne Auffälligkeiten in allen Bereichen.",
            third:
              "Röntgenbild zeigt eine unscharf begrenzte Verschattung im rechten oberen Lungenlappen.",
            fourth:
              "Röntgenbild zeigt inhomogene Verschattungen in beiden unteren Lungenfeldern.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen dem Patienten, seinen gesunden Lebensstil beizubehalten und regelmäßige Routineuntersuchungen durchzuführen.",
            third:
              "Wir empfehlen, den Patienten zur weiteren onkologischen Abklärung und Behandlung an einen Spezialisten zu überweisen. Der Patient sollte das Rauchen aufgeben und einen gesunden Lebensstil pflegen.",
            fourth:
              "Wir empfehlen eine vollständige antibiotische Therapie und eine Nachkontrolle in zwei Wochen. Der Patient sollte viel Flüssigkeit zu sich nehmen und sich ausreichend erholen.",
          },
        ],
      },
      // 5tab
      {
        id: 35,
        title: "Gerätbeschreibung",
        img: child_tab_img_2,
        text: "Ein Computertomographie (CT)-Gerät ist ein fortgeschrittenes bildgebendes medizinisches Instrument, das für detaillierte innere Bilder des Körpers verwendet wird. Hier sind die Hauptkomponenten und Funktionen eines CT-Geräts:",
        text_list: [
          {
            bold: "Gantry:",
            other:
              "Das auffälligste Merkmal eines CT-Geräts ist die Gantry, eine große, ringförmige Struktur, in die der Patient auf einem beweglichen Tisch hineingeschoben wird. Innerhalb der Gantry rotiert eine Röntgenröhre schnell um den Patienten herum, während gegenüberliegend Röntgendetektoren angebracht sind.",
          },
          {
            bold: "Röntgenröhre:",
            other:
              "Die Röntgenröhre sendet während der Drehung um den Patienten herum kontinuierlich Röntgenstrahlen aus. Diese Strahlen durchdringen den Körper und werden je nach Dichte der verschiedenen Gewebe und Strukturen unterschiedlich absorbiert.",
          },
        ],
      },
      // 6tab
      {
        id: 16,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Röntgen, ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "Röntgenstrahlen :",
            other:
              "Elektromagnetische Strahlung, die zur Bildgebung von Knochen und Geweben verwendet wird.",
          },
          {
            bold: "Röntgenaufnahme :",
            other: "Das erzeugte Bild einer Röntgenuntersuchung.",
          },
          {
            bold: "Radiologe :",
            other:
              "Arzt, der auf die Interpretation von Röntgenbildern spezialisiert ist.",
          },
          {
            bold: "Röntgenröhre :",
            other: "Gerät, das Röntgenstrahlen erzeugt.",
          },
          {
            bold: "Detektor :",
            other:
              "Gerät, das die durch den Körper gehenden Röntgenstrahlen aufzeichnet.",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Substanz, die die Sichtbarkeit bestimmter Strukturen im Röntgenbild erhöht.",
          },
          {
            bold: "Absorption :",
            other:
              "Aufnahme von Röntgenstrahlen durch Gewebe, was zur Bildentstehung beiträgt.",
          },
          {
            bold: "Graustufen :",
            other:
              "Unterschiedliche Schattierungen auf dem Röntgenbild, die verschiedene Gewebedichten darstellen.",
          },
          {
            bold: "Dosis :",
            other: "Menge der Röntgenstrahlen, die auf den Körper einwirkt.",
          },
          {
            bold: "Strahlenbelastung :",
            other:
              "Potenzielles Risiko durch die Exposition gegenüber Röntgenstrahlen.",
          },
          {
            bold: "Indikation :",
            other:
              "Medizinischer Grund für die Durchführung einer Röntgenuntersuchung.",
          },
          {
            bold: "Kontraindikation :",
            other:
              "Bedingung, die gegen die Durchführung einer Röntgenuntersuchung spricht.",
          },
          {
            bold: "Fraktur :",
            other: "Knochenbruch, oft auf Röntgenbildern sichtbar.",
          },
          {
            bold: "Tumor :",
            other:
              "Abnorme Gewebemasse, die auf Röntgenbildern erkannt werden kann.",
          },
          {
            bold: "Pneumonie :",
            other:
              "Lungenentzündung, die auf Röntgenbildern charakteristische Verschattungen zeigt.",
          },
          {
            bold: "Lobärverschattung :",
            other:
              "Abnorme Verdichtung in einem Lungenlappen, typisch für bestimmte Pathologien.",
          },
          {
            bold: "Demyelinisierung :",
            other:
              "Verlust der Myelinscheide um Nervenfasern, sichtbar in speziellen bildgebenden Verfahren.",
          },
          {
            bold: "Periventrikulär :",
            other:
              "Bereich um die Ventrikel des Gehirns, oft bei neurologischen Untersuchungen erwähnt.",
          },
          {
            bold: "Routinekontrolle :",
            other:
              "Regelmäßige Untersuchung zur Überprüfung des Gesundheitszustandes ohne spezifischen Verdacht.",
          },
          {
            bold: "Hyperintens :",
            other:
              "Erhöhte Signalintensität in bildgebenden Verfahren, oft Hinweis auf bestimmte Pathologien.",
          },
          {
            bold: "Differenzialdiagnose :",
            other:
              "Unterscheidung zwischen zwei oder mehr Krankheitsbildern mit ähnlichen Symptomen.",
          },
          {
            bold: "Nachverfolgung :",
            other:
              "Kontinuierliche Überwachung des Patienten nach einer diagnostischen oder therapeutischen Maßnahme.",
          },
          {
            bold: "Einverständniserklärung :",
            other:
              "Schriftliche Zustimmung des Patienten zur Durchführung einer medizinischen Maßnahme.",
          },

          {
            text: "Diese Begriffe bilden einen grundlegenden Wortschatz, der für die Fachsprache im Bereich der Röntgen wichtig ist und können in einer Prüfungssituation nützlich sein.",
          },
        ],
      },
      // 7tab
      {
        id: 37,
        title: "Links",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "Stiftung Gesundheitswissen",
            other:
              "Diese Seite bietet umfassende Informationen über die Funktionsweise, den Ablauf und die verschiedenen Formen der Röntgenuntersuchung, einschließlich der Nutzung von Kontrastmitteln und möglichen Risiken. [Links](https://www.stiftung-gesundheitswissen.de)",
          },
          {
            bold: "NetDoktor",
            other:
              "Auf NetDoktor kannst du mehr über die Gründe für eine Röntgenuntersuchung, deren Ablauf und die damit verbundenen Risiken erfahren. Es werden auch spezielle Röntgenverfahren wie Mammografie und Angiografie beschrieben. [Links](https://www.netdoktor.de)",
          },
          {
            bold: "Lifeline",
            other:
              "Lifeline erklärt detailliert die Risiken und Vorteile von Röntgenuntersuchungen und beschreibt den Ablauf der Untersuchung einschließlich der Vorbereitung und der Nutzung von Kontrastmitteln. [Links](https://www.lifeline.de)",
          },
          {
            bold: "Medpertise",
            other:
              "Diese Webseite bietet Informationen zu den Anwendungsgebieten und dem Ablauf von Röntgenuntersuchungen. Es wird auch auf die möglichen Komplikationen und Alternativen zu Röntgen eingegangen. [Links](https://www.medpertise.de)",
          },
          {
            bold: "praktischArzt",
            other:
              "Hier findest du Informationen über den Ablauf von Röntgenuntersuchungen, einschließlich Vorbereitung und Durchführung, sowie Anwendungsbereiche wie das Röntgen der Lunge und der Hand. [Links](https://www.praktischarzt.de)",
          },
          {
            bold: "Medizinio",
            other:
              "Diese Seite informiert über die Strahlenbelastung bei Röntgenuntersuchungen, Risiken für bestimmte Patientengruppen und den Einsatz von Röntgen in der Schwangerschaft. [Links](https://www.medizinio.de)",
          },
        ],
      },
      // 8tab
      {
        id: 38,
        title: "PDF",
        link: "https://drive.google.com/file/d/1agdYrVUppxEZly2cLl4a2-o6T5Sgv9e4/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 3
  // start of parent tab 4
  {
    id: 4,
    title: "Ultraschall",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 39,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das Ziel einer Ultraschalluntersuchung ist die visuelle Darstellung von inneren Strukturen des Körpers, um pathologische Veränderungen zu erkennen, diagnostische Einschätzungen zu treffen und therapeutische Entscheidungen zu unterstützen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Ultraschall wird in vielen medizinischen Fachgebieten eingesetzt, darunter Kardiologie, Gynäkologie, Radiologie und Notfallmedizin. Seine Relevanz liegt in der nicht-invasiven, schnellen und kosteneffizienten Diagnostik ohne Strahlenbelastung.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Ultraschall basiert auf dem Prinzip der Schallwellen, die von einem Schallkopf ausgesendet und von Gewebegrenzen reflektiert werden. Die reflektierten Schallwellen werden vom Schallkopf empfangen und in Bilder umgewandelt.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Wichtige technische Parameter sind die Frequenz des Schallkopfes, die Eindringtiefe und die Auflösung. Höhere Frequenzen bieten bessere Auflösung, haben jedoch eine geringere Eindringtiefe.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Interpretation von Ultraschallbildern erfordert Kenntnisse über die normale Anatomie und die typischen sonographischen Muster von Erkrankungen. Pathologische Befunde werden durch Veränderungen in Form, Struktur und Echogenität erkannt.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Beispiele für typische Befunde sind zystische Läsionen, die als echoarme (dunkle) Bereiche erscheinen, und solide Tumoren, die echoarm oder echoreich sein können.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Ultraschall ist eine sichere, schmerzfreie und wiederholbare Untersuchungsmethode ohne ionisierende Strahlung. Er ermöglicht die Echtzeit-Beobachtung und ist oft sofort verfügbar.",
              },
              {
                bold_text: "Nachteile:",
                text: "Die Bildqualität kann durch adipöses Gewebe oder Luft beeinträchtigt werden. Zudem ist die Untersuchung stark anwenderabhängig und erfordert Erfahrung und Schulung.",
              },
              {
                bold_text: "Risiken::",
                text: "Die Risiken sind minimal. Bei unsachgemäßer Anwendung kann es zu Überhitzung oder mechanischen Schäden im Gewebe kommen, jedoch sind solche Fälle äußerst selten.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Ultraschall spielt eine zentrale Rolle in der Diagnostik von Erkrankungen wie Gallensteinen, Tumoren und Gefäßpathologien. Er wird auch in der interventionellen Radiologie, wie bei Biopsien und Drainagen, verwendet.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch seine Fähigkeit, schnelle und genaue Diagnosen zu liefern, trägt der Ultraschall wesentlich zur Planung und Anpassung der Therapie bei und verbessert das Management von Patienten.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Alternative bildgebende Verfahren umfassen Röntgen, Computertomographie (CT) und Magnetresonanztomographie (MRT). Diese Methoden bieten unterschiedliche Vorteile und sind je nach klinischer Fragestellung einzusetzen.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschungen fokussieren sich auf die Verbesserung der Bildqualität, die Entwicklung von Kontrastmitteln und die Anwendung von Ultraschall in der Bildfusion und der Therapie.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Einführung von Künstlicher Intelligenz zur Bildanalyse und die Erweiterung therapeutischer Anwendungen, wie die fokussierte Ultraschallchirurgie, umfassen.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Ultraschall ist eine unverzichtbare, vielseitige und sichere Diagnosetechnik, die in vielen medizinischen Disziplinen Anwendung findet.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Aufgrund seiner zahlreichen Vorteile und breiten Anwendbarkeit bleibt der Ultraschall ein Grundpfeiler der modernen medizinischen Diagnostik und Therapie.",
              },
            ],
          },
        ],
      },
      // 2tab
      {
        id: 40,
        title: "Patient-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Ziel der Untersuchung",
            second:
              "Erklärung, dass die Ultraschalluntersuchung dazu dient, innere Strukturen des Körpers sichtbar zu machen, um krankhafte Veränderungen zu erkennen.",
            third:
              "Wir machen den Ultraschall, um Ihre Bauchorgane auf mögliche Veränderungen wie Entzündungen oder Tumore zu untersuchen.",
            fourth:
              "Der Ultraschall hilft uns, den Zustand Ihres Herzens zu beurteilen und mögliche Funktionsstörungen zu erkennen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreibung des Verfahrens: Auftragen von Gel auf die Haut, Bewegung des Schallkopfes über die Körperstelle, Erzeugung und Aufnahme von Bildern.",
            third:
              "Ich werde ein spezielles Gel auf Ihren Bauch auftragen und dann mit diesem Gerät über Ihre Haut fahren.",
            fourth:
              "Während der Untersuchung bewege ich den Schallkopf über Ihre Brust, um verschiedene Bilder Ihres Herzens zu machen.",
          },
          {
            first: "Vorbereitung",
            second:
              "Hinweise zur Vorbereitung: eventuell nüchtern erscheinen, bestimmte Kleidungsstücke ablegen, spezifische Körperstellen freilegen",
            third:
              "Bitte erscheinen Sie nüchtern zur Untersuchung, das bedeutet, dass Sie mindestens sechs Stunden vorher nichts essen.",
            fourth:
              "Sie können Ihre normale Kleidung tragen, aber es wäre gut, wenn Sie einen lockeren Oberteil anziehen.",
          },
          {
            first: "Risiken",
            second:
              "Information über minimale Risiken: Möglichkeit von leichtem Unbehagen durch Druck des Schallkopfes, ansonsten keine bekannten Risiken.",
            third:
              "Der Ultraschall ist sehr sicher und verursacht keine Schmerzen. Sie könnten nur ein wenig Druck spüren.",
            fourth:
              "Es gibt keine bekannten Risiken bei dieser Untersuchung. Es könnte sich lediglich kalt anfühlen durch das Gel.",
          },
          {
            first: "Vorteile",
            second:
              "Vorteile des Ultraschalls: keine Strahlenbelastung, nicht-invasiv, schmerzfrei, schnelle und sofortige Ergebnisse, wiederholbar.",
            third:
              "Ein großer Vorteil ist, dass es keine Strahlung gibt, wie es bei Röntgenuntersuchungen der Fall ist.",
            fourth:
              "Der Ultraschall ist schmerzfrei und die Ergebnisse sind sofort verfügbar, sodass wir direkt darüber sprechen können.",
          },
          {
            first: "Alternativen",
            second:
              "Aufklärung über alternative Untersuchungsmethoden wie Röntgen, CT oder MRT, je nach spezifischer Fragestellung und medizinischer Indikation.",
            third:
              "Alternativ könnten wir ein CT machen, aber das würde Strahlung beinhalten.",
            fourth:
              "Eine andere Möglichkeit wäre eine MRT, aber das ist teurer und dauert länger.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläuterung, dass es wenige Kontraindikationen gibt, aber bei bestimmten Hauterkrankungen oder offenen Wunden der Schallkopf nicht angewendet wird.",
            third:
              "Wenn Sie eine offene Wunde an der zu untersuchenden Stelle haben, könnten wir den Ultraschall dort nicht anwenden.",
            fourth:
              "Bestimmte Hauterkrankungen könnten den Ultraschall beeinträchtigen, aber das ist sehr selten.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Besprechung möglicher Befunde: normale Ergebnisse, zystische oder solide Läsionen, Entzündungen, Tumoren oder andere pathologische Veränderungen.",
            third:
              "Ein mögliches Ergebnis könnte eine Zyste sein, die wir als dunklen Bereich auf dem Bild sehen.",
            fourth:
              "Wenn wir Entzündungen finden, sehen sie oft als helle, echoreiche Bereiche auf den Bildern aus.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonung der Notwendigkeit des informierten Einverständnisses vor der Untersuchung zur Sicherstellung des Verständnisses und der Zustimmung des Patienten.",
            third:
              "Es ist wichtig, dass Sie die Untersuchung und ihre Gründe verstehen und uns Ihre Zustimmung geben.",
            fourth:
              "Wir benötigen Ihre Zustimmung, bevor wir mit der Untersuchung beginnen können, um sicherzustellen, dass Sie einverstanden sind.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Aktives Einholen des Einverständnisses des Patienten durch mündliche Zustimmung oder Unterschrift auf einem Formular.",
            third:
              "Bitte unterschreiben Sie dieses Formular, um Ihr Einverständnis zu geben.",
            fourth:
              "Könnten Sie mir bitte mündlich bestätigen, dass Sie der Untersuchung zustimmen?",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Hinweise nach der Untersuchung: eventuelle Maßnahmen, die zu beachten sind, z.B. Nachsorge oder Verhaltensempfehlungen bei spezifischen Befunden.",
            third:
              "Nach der Untersuchung können Sie Ihre normalen Aktivitäten sofort wieder aufnehmen.",
            fourth:
              "Wenn wir etwas Auffälliges finden, werden wir sofort über die nächsten Schritte sprechen.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Mitteilung, dass die Ergebnisse meist sofort besprochen werden können und bei Bedarf weitere diagnostische Schritte oder Behandlungen eingeleitet werden.",
            third:
              "Die Ergebnisse werden sofort verfügbar sein, und wir besprechen sie direkt im Anschluss.",
            fourth:
              "Sollten weitere Untersuchungen nötig sein, werden wir das nach Durchsicht der Ergebnisse sofort klären.",
          },
        ],
      },
      // 3tab
      {
        id: 41,
        title: "Arzt-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Was ist eigentlich die angegebene Untersuchung",
            second:
              "Erklärung der Ultraschalluntersuchung als nicht-invasives bildgebendes Verfahren, das Schallwellen nutzt, um Bilder von inneren Organen und Strukturen zu erzeugen.",
            third:
              "Ultraschall ist ein bildgebendes Verfahren, das hochfrequente Schallwellen verwendet, um innere Strukturen darzustellen.",
            fourth:
              "Wir verwenden Ultraschall, um detaillierte Bilder von Organen und Geweben zu erhalten, ohne Strahlung zu nutzen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Aufzählung der Einsatzgebiete, z.B. Untersuchung von Bauchorganen, Herz, Blutgefäßen, Schilddrüse, sowie in der Gynäkologie und Schwangerschaftsvorsorge.",
            third:
              "Mit Ultraschall können wir die Bauchorgane wie Leber, Gallenblase und Nieren untersuchen.",
            fourth:
              "Der Ultraschall ist besonders nützlich zur Beurteilung des Herzens, der Blutgefäße und der Schilddrüse.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Beschreibung der möglichen Befunde wie zystische oder solide Läsionen, Entzündungen, Tumore, Gefäßanomalien oder normale Befunde, und deren Bedeutung für die Diagnose.",
            third:
              "Die Untersuchung zeigte eine zystische Läsion in der Niere, was auf eine einfache Nierenzyste hindeutet.",
            fourth:
              "Wir haben eine echoreiche Masse in der Leber gefunden, die weiter abgeklärt werden muss, um einen Tumor auszuschließen.",
          },
          {
            first: "Indikationen",
            second:
              "Darstellung der klinischen Situationen, in denen Ultraschall indiziert ist, z.B. Verdacht auf Gallensteine, Abklärung von Bauchschmerzen, Herzinsuffizienz, Kontrolle von Schwangerschaftsverlauf.",
            third:
              "Ultraschall ist indiziert bei Verdacht auf Gallensteine, da er Steine und Entzündungen in der Gallenblase gut sichtbar macht.",
            fourth:
              "Bei unklaren Bauchschmerzen kann Ultraschall helfen, Ursachen wie Blinddarmentzündung oder Nierensteine zu erkennen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erwähnung der wenigen Kontraindikationen, wie offene Wunden oder schwere Hauterkrankungen an der Untersuchungsstelle, die die Durchführung erschweren oder unmöglich machen könnten.",
            third:
              "Offene Wunden im Untersuchungsbereich sind eine Kontraindikation für den Ultraschall, da sie die Bildgebung stören.",
            fourth:
              "Schwere Hautinfektionen können ebenfalls eine Kontraindikation darstellen, da sie die Anwendung des Schallkopfes erschweren.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Besprechung der Differenzialdiagnosen, die durch Ultraschall unterstützt werden können, z.B. Abgrenzung zwischen zystischen und soliden Tumoren, Entzündungen vs. Tumore, gutartig vs. bösartig.",
            third:
              "Ein Ultraschall kann helfen, eine gutartige Zyste von einem soliden Tumor in der Leber zu unterscheiden.",
            fourth:
              "Bei unklaren Bauchschmerzen können Differenzialdiagnosen wie Appendizitis, Divertikulitis oder Pankreatitis gestellt werden.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklärung, wie die Ultraschallergebnisse in die Planung der weiteren Behandlung einfließen, z.B. chirurgische Eingriffe bei Tumoren, medikamentöse Therapie bei Entzündungen, engmaschige Kontrollen bei Schwangerschaftskomplikationen.",
            third:
              "Bei Bestätigung eines Gallensteins könnte eine Cholezystektomie geplant werden.",
            fourth:
              "Wenn eine Entzündung festgestellt wird, kann eine antibiotische Behandlung eingeleitet und der Verlauf per Ultraschall kontrolliert werden.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonung der Notwendigkeit der Zusammenarbeit mit anderen Fachrichtungen, wie Radiologen, Kardiologen, Gynäkologen, Chirurgen.",
            third:
              "Die enge Zusammenarbeit mit Radiologen ermöglicht eine genaue Interpretation und weiterführende Diagnostik.",
            fourth:
              "Bei Herzuntersuchungen arbeiten wir eng mit Kardiologen zusammen, um umfassende Behandlungspläne zu erstellen.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Darstellung der Maßnahmen zur Sicherstellung der Qualität der Ultraschalluntersuchung, wie regelmäßige Wartung der Geräte, Schulung des Personals, standardisierte Protokolle und regelmäßige Überprüfungen der Untersuchungsqualität.",
            third:
              "Wir führen regelmäßig Schulungen für unser Personal durch, um die Qualität der Ultraschalluntersuchungen zu gewährleisten.",
            fourth:
              "Unsere Geräte werden regelmäßig gewartet und kalibriert, um die bestmögliche Bildqualität zu gewährleisten.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erläuterung der Wichtigkeit einer gründlichen Dokumentation der Befunde, Speicherung der Bilder und Berichte im Patientenakt, sowie der Planung und Durchführung von Folgeuntersuchungen oder Überweisungen bei auffälligen Befunden.",
            third:
              "Alle Ultraschallergebnisse werden digital gespeichert und sind sofort im Patientenakt verfügbar.",
            fourth:
              "Bei auffälligen Befunden planen wir sofortige Folgeuntersuchungen oder Überweisungen an Spezialisten.",
          },
        ],
      },
      // 4tab
      {
        id: 42,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Erster Pathologischer Befund",
          },
          {
            name: "fourth",
            visualText: "Zweiter Pathologischer Befund",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall :",
            second:
              "35-jährige Patientin ohne Beschwerden, kommt zur Routineuntersuchung des Abdomens.",
            third:
              "65-jährige Patientin mit bekanntem Brustkrebs, klagt über Oberbauchschmerzen und Gewichtsverlust.",
            fourth:
              "50-jähriger Patient mit wiederkehrenden rechtsseitigen Oberbauchschmerzen, besonders nach fettigen Mahlzeiten.",
          },
          {
            first: "Ergebnisse der Untersuchung :",
            second:
              "Ultraschall des Abdomens zeigt normale Leber, Gallenblase, Bauchspeicheldrüse und Nieren ohne Auffälligkeiten.",
            third:
              "Ultraschall zeigt mehrere hypoechogene Läsionen in der Leber, die auf Metastasen hindeuten.",
            fourth:
              "Ultraschall zeigt echogene Strukturen in der Gallenblase mit dorsalem Schallschatten, typisch für Gallensteine.",
          },
          {
            first: "Interpretation der Ergebnisse :",
            second:
              "Keine pathologischen Befunde; das Ultraschallergebnis unterstützt den Ausschluss abdominaler Erkrankungen.",
            third:
              "Der Befund deutet auf Lebermetastasen hin, was mit der Anamnese der Patientin übereinstimmt.",
            fourth:
              "Die echogenen Strukturen und der Schallschatten sind typische Befunde für Gallensteine und erklären die Symptome des Patienten.",
          },
          {
            first: "Integration in die Patientenversorgung :",
            second:
              "Befund dient der Beruhigung der Patientin und bestätigt die Abwesenheit von pathologischen Veränderungen.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer systemischen Chemotherapie und eventuellen chirurgischen Eingriffs.",
            fourth:
              "Wichtig für die Planung einer möglichen Cholezystektomie und Ernährungsanpassungen zur Symptomkontrolle.",
          },
          {
            first: "Diagnose :",
            second:
              "Bestätigung des gesunden Zustands des Abdomens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose von Lebermetastasen basierend auf Ultraschallbefunden und klinischem Bild.",
            fourth:
              "Diagnose von Gallensteinen aufgrund der Ultraschallergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel :",
            second:
              "Homogene und normale echogene Strukturen aller abdominalen Organe.",
            third:
              "Ultraschallbilder zeigen mehrere unregelmäßige, hypoechogene Läsionen in der Leber.",
            fourth:
              "Ultraschallbilder zeigen echogene Steine in der Gallenblase mit dorsalem Schallschatten.",
          },
          {
            first: "Fallabschluss :",
            second:
              "Wir empfehlen, dass die Patientin regelmäßige Routineuntersuchungen beibehält, um die Gesundheit zu überwachen.",
            third:
              "Wir empfehlen, dass die Patientin sich einer systemischen Chemotherapie unterzieht und eine Konsultation bei einem Chirurgen einholt.",
            fourth:
              "Wir empfehlen, dass der Patient eine Cholezystektomie in Erwägung zieht und eine Diätanpassung zur Linderung der Symptome durchführt.",
          },
        ],
      },
      // 5tab
      {
        id: 43,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Computertomographie (CT)-Gerät ist ein fortgeschrittenes bildgebendes medizinisches Instrument, das für detaillierte innere Bilder des Körpers verwendet wird. Hier sind die Hauptkomponenten und Funktionen eines CT-Geräts:",
        text_list: [
          {
            bold: "Aufbau und Funktionsweise eines Ultraschallgeräts :",
            other:
              "Ein Ultraschallgerät besteht aus mehreren wesentlichen Komponenten, die zusammenarbeiten, um Ultraschallbilder zu erzeugen. Die wichtigsten Bestandteile sind der Schallkopf (Transducer), der Pulsgenerator, der Empfänger, der Prozessor und das Display.",
          },

          {
            bold: "Schallkopf (Transducer) :",
            other:
              "Der Schallkopf ist das zentrale Element des Ultraschallgeräts. Er enthält Piezoelektrische Kristalle, die sowohl Ultraschallwellen erzeugen als auch die von Geweben reflektierten Wellen empfangen können. Diese Kristalle verändern ihre Form, wenn eine elektrische Spannung angelegt wird, wodurch Schallwellen erzeugt werden. Wenn diese Schallwellen auf Gewebe treffen, werden sie teilweise reflektiert und kehren zum Schallkopf zurück. Diese reflektierten Wellen werden dann von den Kristallen wieder in elektrische Signale umgewandelt.",
          },

          {
            bold: "Pulsgenerator :",
            other:
              "Der Pulsgenerator ist für die Steuerung der elektrischen Spannung verantwortlich, die an die Piezoelektrischen Kristalle im Schallkopf angelegt wird. Er bestimmt die Frequenz und Dauer der erzeugten Ultraschallpulse. Typische Frequenzen für medizinische Anwendungen liegen zwischen 2 und 15 MHz.",
          },

          {
            bold: "Empfänger :",
            other:
              "Der Empfänger empfängt die vom Gewebe reflektierten Ultraschallwellen und wandelt sie in elektrische Signale um. Diese Signale sind in der Regel sehr schwach und müssen verstärkt werden, um weiterverarbeitet werden zu können.",
          },

          {
            bold: "Prozessor :",
            other:
              "Der Prozessor analysiert die verstärkten Signale und wandelt sie in Bilddaten um. Dabei wird die Zeit gemessen, die die Ultraschallwellen benötigen, um von der Gewebestruktur zurückzukehren, und die Intensität der reflektierten Wellen ausgewertet. Diese Informationen werden genutzt, um ein zweidimensionales Bild der inneren Strukturen zu erzeugen.",
          },

          {
            bold: "Display :",
            other:
              "Das Display zeigt die vom Prozessor erstellten Bilder in Echtzeit an. Moderne Ultraschallgeräte verfügen über hochauflösende Monitore, die detaillierte und klare Bilder der untersuchten Gewebe und Organe darstellen können.",
          },

          { bold: "Funktionsweise des Ultraschallgeräts :", other: "" },

          {
            bold: "Erzeugung und Empfang von Ultraschallwellen :",
            other:
              "Wenn eine elektrische Spannung an die Piezoelektrischen Kristalle im Schallkopf angelegt wird, erzeugen diese Ultraschallwellen, die in den Körper des Patienten eindringen. Die Schallwellen werden an den Grenzen unterschiedlicher Gewebearten reflektiert und kehren zum Schallkopf zurück. Diese reflektierten Wellen erzeugen in den Kristallen elektrische Signale, die zur weiteren Verarbeitung an den Empfänger weitergeleitet werden.",
          },

          {
            bold: "Bildentstehung :",
            other:
              "Die reflektierten Ultraschallwellen werden im Prozessor analysiert, wobei die Zeit, die die Wellen benötigen, um zurückzukehren, und ihre Intensität gemessen werden. Diese Daten werden verwendet, um ein Bild der inneren Strukturen zu erstellen. Unterschiedliche Gewebearten reflektieren die Schallwellen unterschiedlich stark, was zu Variationen in der Helligkeit und im Kontrast des Ultraschallbildes führt.",
          },

          {
            bold: "Anwendungen des Ultraschalls :",
            other:
              "Ultraschall wird in verschiedenen medizinischen Bereichen eingesetzt, darunter:",
          },

          {
            bold: "Diagnostik :",
            other:
              "Zur Untersuchung von Organen wie Herz, Leber, Nieren und Schilddrüse.",
          },

          {
            bold: "Schwangerschaftsvorsorge :",
            other: "Zur Überwachung der Entwicklung des Fötus.",
          },

          {
            bold: "Gefäßuntersuchungen :",
            other:
              "Zur Beurteilung des Blutflusses und zur Erkennung von Gefäßanomalien.",
          },

          {
            bold: "Interventionelle Verfahren :",
            other:
              "Zur Unterstützung bei Biopsien und minimalinvasiven Eingriffen.",
          },

          {
            bold: "Vorteile und Anwendungsbereiche :",
            other:
              "Ultraschall ist eine nicht-invasive und sichere Methode zur Bildgebung, die keine ionisierende Strahlung verwendet. Er bietet Echtzeitbilder, die für die Diagnose und Überwachung von Erkrankungen sowie für therapeutische Eingriffe von großem Nutzen sind. Die Technik wird häufig aufgrund ihrer Vielseitigkeit und ihrer Fähigkeit, schnelle und genaue Diagnosen zu liefern, bevorzugt.",
          },

          {
            bold: "Fazit :",
            other:
              "Ultraschallgeräte nutzen die physikalischen Prinzipien der Schallwellen, um detaillierte Bilder der inneren Strukturen des Körpers zu erstellen. Durch die Kombination von Piezoelektrischen Kristallen, fortschrittlicher Signalverarbeitung und hochauflösenden Displays ermöglicht der Ultraschall eine breite Palette medizinischer Anwendungen, von der Diagnostik bis zur interventionellen Therapie.",
          },
        ],
      },
      // 6tab
      {
        id: 44,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Ultraschall(Sonographie), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "Ultraschall (Sonographie) :",
            other:
              "Ein bildgebendes Verfahren, das hochfrequente Schallwellen verwendet, um Bilder von inneren Organen und Strukturen zu erzeugen.",
          },
          {
            bold: "Schallkopf (Transducer) :",
            other:
              "Das Gerät, das Schallwellen aussendet und die reflektierten Wellen empfängt.",
          },
          {
            bold: "Echogenität :",
            other:
              "Die Fähigkeit von Geweben, Schallwellen zu reflektieren; unterschiedliche Gewebe haben unterschiedliche Echogenitäten (z.B. hypoechogen, hyperechogen, isoechogen).",
          },
          {
            bold: "Hypoechogen :",
            other:
              "Gewebe, das weniger Schallwellen reflektiert und auf dem Ultraschallbild dunkler erscheint.",
          },
          {
            bold: "Hyperechogen :",
            other:
              "Gewebe, das mehr Schallwellen reflektiert und auf dem Ultraschallbild heller erscheint.",
          },
          {
            bold: "Isoechogen :",
            other:
              "Gewebe, das ähnlich wie das umgebende Gewebe Schallwellen reflektiert und auf dem Ultraschallbild eine ähnliche Helligkeit zeigt.",
          },
          {
            bold: "Doppler-Ultraschall :",
            other:
              "Eine spezielle Form des Ultraschalls, die zur Messung der Blutflussgeschwindigkeit und -richtung verwendet wird.",
          },
          {
            bold: "B-Bild (Brightness Mode) :",
            other:
              "Der Standardmodus im Ultraschall, der zweidimensionale Schnittbilder des Gewebes erzeugt.",
          },
          {
            bold: "M-Mode (Motion Mode) :",
            other:
              "Ein Modus, der die Bewegung von Strukturen, wie Herzklappen, in Echtzeit darstellt.",
          },
          {
            bold: "Farbdoppler :",
            other:
              "Ein Verfahren, das die Blutflussrichtung und -geschwindigkeit in Farbe darstellt.",
          },
          {
            bold: "Pulswerter-Doppler :",
            other:
              "Ein Verfahren zur Messung der Geschwindigkeit des Blutflusses in einem bestimmten Gefäßsegment.",
          },
          {
            bold: "Continuous-Wave-Doppler :",
            other:
              "Ein Verfahren zur Messung hoher Blutflussgeschwindigkeiten ohne Geschwindigkeitsbegrenzung.",
          },
          {
            bold: "Artefakte :",
            other:
              "Störsignale oder Bildfehler, die das Ultraschallbild beeinflussen können (z.B. Spiegelartefakte, Nachhallartefakte).",
          },
          {
            bold: "Kontrastmittelsonographie :",
            other:
              "Eine Ultraschalluntersuchung, bei der Kontrastmittel verwendet werden, um die Darstellung bestimmter Strukturen oder Blutgefäße zu verbessern.",
          },
          {
            bold: "Schallgel :",
            other:
              "Ein spezielles Gel, das zwischen Schallkopf und Haut aufgetragen wird, um die Schallübertragung zu verbessern.",
          },
          {
            bold: "Frequenz :",
            other:
              "Die Anzahl der Schallwellen pro Sekunde, gemessen in Hertz (Hz); beeinflusst die Eindringtiefe und Auflösung des Ultraschallbildes.",
          },
          {
            bold: "Auflösung :",
            other:
              "Die Fähigkeit, kleine Details und Strukturen im Ultraschallbild zu unterscheiden.",
          },
          {
            bold: "Eindringtiefe :",
            other:
              "Die maximale Tiefe, in die die Schallwellen eindringen können; abhängig von der Frequenz des Schallkopfes.",
          },
          {
            bold: "Duplex-Ultraschall :",
            other:
              "Eine Kombination aus B-Bild und Doppler-Ultraschall, um gleichzeitig Strukturen und Blutfluss darzustellen.",
          },
          {
            bold: "Anisotropie :",
            other:
              "Ein Phänomen, bei dem die Echogenität eines Gewebes je nach Schallkopf-Winkel variiert, oft in Muskeln und Sehnen beobachtet.",
          },
          {
            bold: "Cystisch :",
            other:
              "Eine Flüssigkeitsansammlung, die auf dem Ultraschallbild als echoarme (dunkle) Struktur erscheint.",
          },
          {
            bold: "Solide :",
            other:
              "Eine Gewebeansammlung, die auf dem Ultraschallbild als echoreiche (helle) Struktur erscheint.",
          },
          {
            bold: "Fokussierung :",
            other:
              "Die Einstellung des Schallkopfes, um die Bildauflösung in einem bestimmten Tiefenbereich zu optimieren.",
          },
          {
            bold: "Gain :",
            other:
              "Die Verstärkung der empfangenen Schallwellen, um die Helligkeit des Ultraschallbildes zu steuern.",
          },
          {
            bold: "Time Gain Compensation (TGC) :",
            other:
              "Eine Einstellung, die die Verstärkung der Schallwellen in verschiedenen Tiefenbereichen anpasst, um ein gleichmäßiges Bild zu erzeugen.",
          },
          {
            bold: "Bildrekonstruktion :",
            other:
              "Der Prozess der Umwandlung der empfangenen Schallwellen in sichtbare Bilder.",
          },

          {
            text: "Diese Begriffe bilden einen grundlegenden Wortschatz, der für die Fachsprache im Bereich der Ulraschall wichtig ist und können in einer Prüfungssituation nützlich sein.",
          },
        ],
      },
      {
        id: 45,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "Stiftung Gesundheitswissen :",
            other:
              "Diese Seite bietet umfassende Informationen über die Funktionsweise, den Ablauf und die verschiedenen Formen der Ultraschalluntersuchung, einschließlich der Nutzung von Kontrastmitteln und möglichen Risiken. [Links](https://www.stiftung-gesundheitswissen.de)",
          },
          {
            bold: "NetDoktor :",
            other:
              "Auf NetDoktor kannst du mehr über die Gründe für eine Ultraschalluntersuchung, deren Ablauf und die damit verbundenen Risiken erfahren. Es werden auch spezielle Ultraschallverfahren wie Doppler- und Farbdoppler-Ultraschall beschrieben. [Links](https://www.netdoktor.de)",
          },
          {
            bold: "Gesundheitsinformation.de :",
            other:
              "Diese Seite erklärt, wie eine Ultraschalluntersuchung funktioniert und welche Körperbereiche damit untersucht werden können. Es gibt auch Informationen zur Anwendung in der Schwangerschaftsvorsorge und zur Diagnose verschiedener Erkrankungen. [Links](https://www.gesundheitsinformation.de)",
          },
          {
            bold: "BARMER :",
            other:
              "Die BARMER Webseite bietet eine gute Übersicht über die Funktionsweise, den Einsatz und die Grenzen von Ultraschall. Es wird auch die Anwendung in verschiedenen medizinischen Bereichen wie Herz- und Gefäßdiagnostik sowie Schwangerschaftsvorsorge erläutert. [Links](https://www.barmer.de)",
          },
          {
            bold: "PraktischArzt :",
            other:
              "Hier findest du Informationen zu verschiedenen Arten von Ultraschalluntersuchungen wie der Mammasonografie und Dopplersonografie. Der Ablauf einer typischen Sonographie wird ebenfalls detailliert beschrieben. [Links](https://www.praktischarzt.de)",
          },
          {
            bold: "Krebsinformationsdienst :",
            other:
              "Diese Seite bietet häufig gestellte Fragen zum Thema Ultraschall in der Krebsmedizin, einschließlich Informationen zur Technik, Anwendung und Vorbereitung auf die Untersuchung. [Links](https://www.krebsinformationsdienst.de)",
          },
          {
            bold: "DokCheck :",
            other:
              "Diese Seite bietet detaillierte Informationen zu verschiedenen medizinischen Themen, einschließlich Ultraschalluntersuchungen. Hier findest du Erklärungen zur Funktionsweise, den Einsatzbereichen und den verschiedenen Arten von Ultraschall. [Links](https://www.doccheck.com)",
          },
          {
            bold: "AMBOSS :",
            other:
              "AMBOSS ist eine umfassende Ressource für medizinisches Wissen. Hier findest du detaillierte Informationen über Ultraschall, einschließlich der physikalischen Grundlagen, der klinischen Anwendungen und der technischen Aspekte. [Links](https://www.amboss.com/de)",
          },
        ],
      },
      {
        id: 46,
        title: "PDF",
        link: "https://drive.google.com/file/d/1Mswe_EelReCeS3bTemt6XtZv5RHMjLqg/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 4
  // start of parent tab 5
  {
    id: 5,
    title: "Endoskopische retrograde Cholangiopankreatikographie (ERCP)",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 47,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das Hauptziel der ERCP ist die Darstellung und gegebenenfalls die Behandlung von Erkrankungen der Gallenwege und des Pankreas. Dazu gehören Gallensteine, entzündliche Erkrankungen, Tumore und strukturelle Anomalien.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "ERCP wird vor allem bei Patienten mit Verdacht auf Obstruktionen oder Entzündungen der Gallenwege und des Pankreas eingesetzt. Typische Anwendungsbereiche sind die Diagnose von Gallengangsteinen, Pankreatitis, Cholangitis und die Evaluation von Pankreastumoren.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die ERCP kombiniert endoskopische und radiologische Techniken, um detaillierte Bilder der Gallen- und Pankreasgänge zu erstellen. Dabei wird ein Endoskop durch den Mund des Patienten in den Zwölffingerdarm eingeführt, wo Kontrastmittel in die Gänge injiziert wird, um diese unter Röntgendurchleuchtung sichtbar zu machen.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Das Verfahren erfordert die Verwendung eines speziellen seitblickenden Endoskops, eines sogenannten Duodenoskops. Nach der Lokalisierung der Papilla Vateri wird ein Katheter durch den Arbeitskanal des Endoskops eingeführt, um Kontrastmittel in die Gallengänge oder den Pankreasgang zu spritzen und Röntgenbilder zu erstellen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung der ERCP-Bilder erfolgt durch die Identifizierung von Anomalien wie Strikturen, Steinen, Tumoren oder Entzündungszeichen. Eine genaue Interpretation erfordert fundierte Kenntnisse der normalen und pathologischen Anatomie der Gallengänge und des Pankreas.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Häufige Befunde bei der ERCP sind Gallengangsteine, die als füllungsdefekte Strukturen im Kontrastmittel erscheinen, entzündliche Verengungen (Strikturen) und Tumormassen, die zu einer Obstruktion führen können.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "ERCP ermöglicht nicht nur die Diagnose, sondern auch die therapeutische Intervention, wie die Entfernung von Gallengangsteinen oder die Platzierung von Stents zur Behandlung von Verengungen.",
              },
              {
                bold_text: "Nachteile:",
                text: "ERCP ist ein invasives Verfahren, das spezielle technische Fähigkeiten und Erfahrung erfordert. Es ist zeitaufwändig und erfordert oft eine Sedierung oder Narkose des Patienten.",
              },
              {
                bold_text: "Risiken:",
                text: "Zu den Risiken der ERCP gehören Pankreatitis, Infektionen, Blutungen und Perforationen. Diese Komplikationen können schwerwiegend sein und erfordern eine sorgfältige Überwachung und Behandlung.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "ERCP spielt eine entscheidende Rolle in der Diagnose und Behandlung von Erkrankungen der Gallenwege und des Pankreas. Es ermöglicht eine genaue Diagnose und bietet gleichzeitig therapeutische Möglichkeiten, was es zu einem unverzichtbaren Werkzeug in der gastroenterologischen Praxis macht.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Die Fähigkeit, diagnostische und therapeutische Maßnahmen in einem einzigen Eingriff zu kombinieren, macht ERCP besonders wertvoll für das Management komplexer hepatobiliärer und pankreatischer Erkrankungen.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zur ERCP gehören die Magnetresonanz-Cholangiopankreatikographie (MRCP) und die endoskopische Ultraschalluntersuchung (EUS). Beide Verfahren sind weniger invasiv und bieten wertvolle diagnostische Informationen, haben jedoch keine therapeutischen Möglichkeiten.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschungsergebnisse konzentrieren sich auf die Verbesserung der technischen Aspekte der ERCP, die Reduzierung von Komplikationen und die Entwicklung neuer therapeutischer Ansätze.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Integration neuer Bildgebungsverfahren und minimal-invasiver Techniken umfassen, um die Sicherheit und Effektivität der ERCP weiter zu verbessern.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "ERCP ist ein unverzichtbares Verfahren in der modernen Gastroenterologie, das sowohl diagnostische als auch therapeutische Möglichkeiten bietet. Es ist jedoch mit gewissen Risiken verbunden und erfordert spezielle technische Fähigkeiten.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Trotz seiner invasiven Natur bleibt ERCP ein wertvolles Werkzeug zur Diagnose und Behandlung von Erkrankungen der Gallenwege und des Pankreas, mit einem erheblichen Nutzen für das Patientenmanagement und die klinische Praxis.",
              },
            ],
          },
        ],
      },
      // 2tab
      {
        id: 48,
        title: "Patient-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Ziel der Untersuchung",
            second:
              "Erklären Sie dem Patienten, dass das Ziel der ERCP darin besteht, Erkrankungen der Gallenwege und des Pankreas zu diagnostizieren und gegebenenfalls zu behandeln, z.B. Entfernung von Gallensteinen.",
            third:
              "Das Ziel dieser Untersuchung ist es, Ihre Gallengänge und Ihren Pankreasgang auf Verstopfungen oder andere Probleme zu untersuchen und diese gegebenenfalls zu behandeln.",
            fourth:
              "Wir führen diese Untersuchung durch, um festzustellen, ob Gallensteine vorhanden sind und ob eine Blockade oder Verengung in Ihren Gallengängen besteht.",
          },
          {
            first: "Ablauf",
            second:
              "Erläutern Sie den Ablauf des Verfahrens: Ein Endoskop wird durch den Mund in den Zwölffingerdarm eingeführt, Kontrastmittel wird injiziert, und Röntgenbilder werden gemacht.",
            third:
              "Während der ERCP führen wir ein dünnes, flexibles Endoskop durch Ihren Mund bis in den Zwölffingerdarm ein. Dort wird Kontrastmittel injiziert und Röntgenbilder gemacht.",
            fourth:
              "Zunächst werden Sie sediert, dann führen wir ein Endoskop durch Ihren Mund ein, um Kontrastmittel in die Gallengänge zu spritzen und diese sichtbar zu machen.",
          },
          {
            first: "Vorbereitung",
            second:
              "Erklären Sie, dass der Patient nüchtern sein muss, also mehrere Stunden vor der Untersuchung nichts essen oder trinken darf. Eventuell müssen Blutgerinnungshemmer pausiert werden.",
            third:
              "Sie dürfen ab Mitternacht vor dem Eingriff nichts mehr essen oder trinken, um den Magen leer zu halten.",
            fourth:
              "Es ist wichtig, dass Sie 6 Stunden vor der Untersuchung nüchtern bleiben. Bitte besprechen Sie mit Ihrem Arzt, ob Sie Ihre Blutgerinnungshemmer absetzen müssen.",
          },
          {
            first: "Risiken",
            second:
              "Erläutern Sie die möglichen Risiken wie Pankreatitis, Infektionen, Blutungen und Perforationen.",
            third:
              "Zu den Risiken der ERCP gehören Entzündungen der Bauchspeicheldrüse, Infektionen, Blutungen und in seltenen Fällen Verletzungen der Darmwand.",
            fourth:
              "Einige der Risiken sind Pankreatitis, die eine Entzündung der Bauchspeicheldrüse ist, sowie Infektionen oder Blutungen, die behandelt werden müssen.",
          },
          {
            first: "Vorteile",
            second:
              "Erklären Sie die Vorteile, wie die Möglichkeit, sowohl Diagnosen zu stellen als auch therapeutische Maßnahmen durchzuführen, z.B. die Entfernung von Steinen oder das Setzen von Stents.",
            third:
              "Ein großer Vorteil der ERCP ist, dass wir nicht nur Probleme erkennen, sondern auch direkt behandeln können, wie z.B. das Entfernen von Gallengangsteinen.",
            fourth:
              "Die ERCP ermöglicht uns, Verstopfungen in Ihren Gallengängen nicht nur zu finden, sondern auch sofort zu beheben, indem wir z.B. Stents setzen.",
          },
          {
            first: "Alternativen",
            second:
              "Erläutern Sie alternative Untersuchungsmethoden wie die Magnetresonanz- (MRCP) und die endoskopische Ultraschalluntersuchung (EUS), die weniger invasiv sind.",
            third:
              "Alternativen zur ERCP sind die MRCP, die ebenfalls detaillierte Bilder liefert, aber nicht therapeutisch eingreifen kann.",
            fourth:
              "Eine andere Möglichkeit ist die endoskopische Ultraschalluntersuchung, die weniger invasiv ist, aber keine sofortigen Behandlungsoptionen bietet.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären Sie die Kontraindikationen, wie z.B. schwere Herz- oder Lungenerkrankungen, die das Risiko des Verfahrens erhöhen könnten.",
            third:
              "Patienten mit schweren Herz- oder Lungenerkrankungen sollten keine ERCP erhalten, da das Risiko für Komplikationen erhöht ist.",
            fourth:
              "Wenn Sie eine schwere Herz- oder Lungenerkrankung haben, ist dieses Verfahren möglicherweise nicht für Sie geeignet, da es Ihr Risiko erhöht.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erläutern Sie, welche Ergebnisse die Untersuchung liefern kann, z.B. Nachweis von Steinen, Tumoren oder Verengungen in den Gallenwegen oder dem Pankreasgang.",
            third:
              "Die Untersuchung kann zeigen, ob Steine, Tumore oder Verengungen in den Gallenwegen oder dem Pankreasgang vorhanden sind.",
            fourth:
              "Wir können feststellen, ob es Blockaden durch Gallensteine gibt oder ob Tumore oder Verengungen vorliegen, die behandelt werden müssen.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Erklären Sie, warum es wichtig ist, dass der Patient seine Zustimmung zur Untersuchung gibt, um sicherzustellen, dass er die Risiken und Vorteile versteht.",
            third:
              "Es ist wichtig, dass Sie Ihr Einverständnis geben, damit wir sicherstellen können, dass Sie die Risiken und Vorteile des Verfahrens verstehen.",
            fourth:
              "Ihr Einverständnis ist notwendig, um den Eingriff rechtlich abzusichern und zu bestätigen, dass Sie über alle möglichen Risiken informiert wurden.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie den Prozess des Einverständnisses: Der Patient erhält Informationen über den Eingriff und unterzeichnet ein Formular.",
            third:
              "Vor dem Eingriff erhalten Sie ein Formular, das alle Details und Risiken erklärt. Sie müssen dieses Formular unterschreiben, um Ihr Einverständnis zu geben.",
            fourth:
              "Wir werden Ihnen ein Informationsblatt aushändigen und Ihre schriftliche Zustimmung einholen, bevor wir mit der Untersuchung beginnen.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Erläutern Sie, was nach dem Eingriff zu erwarten ist, z.B. mögliche Beschwerden, Beobachtungszeitraum im Krankenhaus.",
            third:
              "Nach dem Eingriff bleiben Sie zur Beobachtung noch einige Stunden im Krankenhaus. Leichte Halsschmerzen und Blähungen können auftreten.",
            fourth:
              "Es ist normal, nach der ERCP leichte Bauchschmerzen zu haben. Sie sollten sich am Tag der Untersuchung ausruhen und können am nächsten Tag zu Ihren normalen Aktivitäten zurückkehren.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, wie und wann der Patient über die Ergebnisse der Untersuchung informiert wird und welche weiteren Schritte eventuell notwendig sind.",
            third:
              "Wir besprechen die Ergebnisse der Untersuchung, sobald Sie wach und stabil sind. Je nach Befund besprechen wir die weiteren Behandlungsschritte.",
            fourth:
              "Sie erhalten die Ergebnisse meist noch am selben Tag. Bei auffälligen Befunden besprechen wir sofort das weitere Vorgehen und mögliche Behandlungen.",
          },
        ],
      },
      // 3tab
      {
        id: 48,
        title: "Arzt-Arzt Gespräch",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Was man machen soll" },
          {
            name: "third",
            visualText: "Beispiel 1: Was man sagen kann",
          },
          {
            name: "fourth",
            visualText: "Beispiel 2: Was man sagen kann",
          },
        ],
        tableRows: [
          {
            first: "Was ist eigentlich die angegebene Untersuchung",
            second:
              "Erklären Sie, dass die ERCP (endoskopische retrograde Cholangiopankreatikographie) ein Verfahren ist, das endoskopische und radiologische Techniken kombiniert, um die Gallen- und Pankreasgänge darzustellen.",
            third:
              "Die ERCP ist ein kombiniertes endoskopisch-radiologisches Verfahren, bei dem Kontrastmittel in die Gallengänge und den Pankreasgang injiziert wird, um diese sichtbar zu machen.",
            fourth:
              "ERCP steht für endoskopische retrograde Cholangiopankreatikographie und dient der Darstellung und Behandlung von Erkrankungen der Gallenwege und des Pankreas.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erläutern Sie, dass die ERCP zur Diagnose und Behandlung von Erkrankungen der Gallenwege und des Pankreas eingesetzt wird, wie z.B. Gallengangsteine, Pankreatitis, Tumore und Strikturen.",
            third:
              "Mit der ERCP können wir Gallensteine diagnostizieren und entfernen, Strikturen dilatieren und Tumoren in den Gallen- oder Pankreasgängen erkennen.",
            fourth:
              "Das Verfahren ermöglicht uns, Verengungen in den Gallengängen zu identifizieren, Gallensteine zu extrahieren und Pankreatitis sowie Tumoren zu diagnostizieren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Beschreiben Sie typische Befunde der ERCP, wie z.B. das Vorhandensein von Gallensteinen, entzündlichen Verengungen, Tumormassen oder anatomischen Anomalien.",
            third:
              "Bei der ERCP fanden wir mehrere Gallensteine im Ductus choledochus und eine entzündliche Verengung im Pankreasgang.",
            fourth:
              "Die Untersuchung zeigte eine distale Gallengangsstriktur und einen Verdacht auf Cholangiokarzinom.",
          },
          {
            first: "Indikationen",
            second:
              "Erläutern Sie die Indikationen für eine ERCP, einschließlich Verdacht auf Gallensteine, Pankreatitis, Cholangitis, biliäre Strikturen und Verdacht auf Tumoren der Gallenwege oder des Pankreas.",
            third:
              "Indikationen für die ERCP sind unter anderem Verdacht auf Cholangitis, akute Pankreatitis unklarer Genese und Ikterus durch vermutete Gallengangsobstruktion.",
            fourth:
              "Wir führen die ERCP durch bei Patienten mit anhaltendem Ikterus, Verdacht auf Gallengangstumor oder wiederkehrender biliärer Pankreatitis.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Besprechen Sie die Kontraindikationen, wie z.B. schwere kardiopulmonale Erkrankungen, akute Infektionen oder anatomische Anomalien, die das Verfahren erschweren könnten.",
            third:
              "Patienten mit schweren Herz- oder Lungenerkrankungen sollten keine ERCP erhalten, da das Risiko für Komplikationen erhöht ist.",
            fourth:
              "Bei akuten Bauchinfektionen oder anatomischen Anomalien der Gallenwege ist eine ERCP kontraindiziert.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erläutern Sie die Differenzialdiagnosen, die bei der Interpretation der ERCP-Befunde in Betracht gezogen werden sollten, wie z.B. Pankreaspseudozysten, chronische Pankreatitis und Gallengangskarzinome.",
            third:
              "Differenzialdiagnosen umfassen chronische Pankreatitis, die ebenfalls zu Verengungen im Pankreasgang führen kann, und Pankreaspseudozysten.",
            fourth:
              "Bei der Diagnose von Gallengangstumoren müssen wir auch an benigne Strikturen und Entzündungen, wie bei der primär sklerosierenden Cholangitis, denken.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Diskutieren Sie die möglichen therapeutischen Maßnahmen, die im Rahmen der ERCP durchgeführt werden können, wie z.B. Steinextraktion, Dilatation von Strikturen und Platzierung von biliären Stents.",
            third:
              "Der Behandlungsplan für diesen Patienten umfasst die Extraktion der gefundenen Gallensteine und die Platzierung eines Stents zur Aufrechterhaltung des Gallenflusses.",
            fourth:
              "Nach der Diagnose der Striktur haben wir uns entschieden, eine Ballondilatation durchzuführen und einen Stent zur Vermeidung einer erneuten Obstruktion zu setzen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Beschreiben Sie die Bedeutung der Zusammenarbeit mit anderen Fachbereichen wie Chirurgie, Radiologie und Onkologie für eine umfassende Diagnostik und Behandlung der Patienten.",
            third:
              "Die Zusammenarbeit mit der Radiologie ist entscheidend, um präzise Bildgebungsergebnisse zu erhalten und die Chirurgie für eventuelle operative Eingriffe zu konsultieren.",
            fourth:
              "Für diesen Fall ist die Zusammenarbeit mit der Onkologie wichtig, um eine adäquate Nachsorge und weitere Therapieoptionen bei Verdacht auf Malignität zu planen.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erklären Sie, wie die Qualität der ERCP-Verfahren durch Schulungen, Überwachung der Komplikationsraten und regelmäßige Überprüfung der Verfahrensergebnisse sichergestellt wird.",
            third:
              "Qualitätsmanagement umfasst regelmäßige Schulungen des endoskopischen Personals und die kontinuierliche Überwachung und Dokumentation von Komplikationen.",
            fourth:
              "Um die Qualität der ERCP zu gewährleisten, führen wir regelmäßig Fallbesprechungen durch und evaluieren die Ergebnisse, um Prozesse stetig zu verbessern.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Besprechen Sie die Notwendigkeit einer detaillierten Dokumentation der Befunde und durchgeführten Maßnahmen sowie die Bedeutung der Nachsorge, um den Behandlungserfolg zu überwachen und Komplikationen frühzeitig zu erkennen.",
            third:
              "Nach dem Eingriff dokumentieren wir alle Befunde und Maßnahmen detailliert und vereinbaren Nachsorgetermine, um den Heilungsverlauf zu überwachen.",
            fourth:
              "Eine gründliche Dokumentation ist unerlässlich, um die Patientenakte vollständig zu halten und die Nachsorge sowie eventuelle weitere Behandlungen zu planen.",
          },
        ],
      },
      // 4tab
      {
        id: 49,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Erster Pathologischer Befund",
          },
          {
            name: "fourth",
            visualText: "Zweiter Pathologischer Befund",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall",
            second:
              "50-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient mit Gelbsucht, ungewolltem Gewichtsverlust und dunklem Urin.",
            fourth:
              "45-jährige Patientin mit wiederkehrenden Bauchschmerzen, Übelkeit und Gewichtsverlust.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "ERCP zeigt eine normale Anatomie der Gallen- und Pankreasgänge ohne Auffälligkeiten.",
            third:
              "ERCP zeigt eine stenosierende, unregelmäßige Masse im distalen Gallengang.",
            fourth:
              "ERCP offenbart multiple Strikturen und Dilatationen im Pankreasgang.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das ERCP-Ergebnis bestätigt die normale Funktion der Gallen- und Pankreasgänge.",
            third:
              "Der Befund deutet auf ein Gallengangskarzinom hin. Die Stenose erklärt die Cholestase-Symptome des Patienten.",
            fourth:
              "Die Veränderungen sind typisch für eine chronische Pankreatitis. Zusammenhang mit den klinischen Symptomen der Patientin.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer langfristigen Therapie zur Schmerz- und Symptomkontrolle.",
            fourth:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Gallen- und Pankreasgänge. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose einer chronischen Pankreatitis aufgrund der ERCP-Ergebnisse und Symptomatik.",
            fourth:
              "Bestätigung des gesunden Zustandes der Gallen- und Pankreasgänge. Keine Anzeichen für pathologische Veränderungen.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Darstellung der Gallen- und Pankreasgänge ohne Auffälligkeiten in allen Aufnahmen.",
            third:
              "ERCP-Bilder zeigen multiple Strikturen und Dilatationen im Pankreasgang, typisch für chronische Pankreatitis.",
            fourth:
              "Homogene Darstellung der Gallen- und Pankreasgänge ohne Auffälligkeiten in allen Aufnahmen.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen eine chirurgische Resektion der betroffenen Gallengänge, gefolgt von einer adjuvanten Chemotherapie.",
            third:
              "Es ist zu empfehlen, eine langfristige, symptomatische Therapie zu beginnen, die Schmerzmanagement und Ernährungsberatung einschließt.",
            fourth:
              "Wir empfehlen, regelmäßige gesundheitliche Überprüfungen fortzusetzen, um die anhaltende Gesundheit zu überwachen.",
          },
        ],
      },
      // 5tab
      {
        id: 43,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein ERCP-Gerät ist ein spezialisiertes medizinisches Instrument, das zur endoskopischen retrograden Cholangiopankreatikographie (ERCP) verwendet wird. Es kombiniert endoskopische und radiologische Techniken, um detaillierte Bilder der Gallen- und Pankreasgänge zu erstellen und therapeutische Eingriffe durchzuführen. Hier sind die wesentlichen Komponenten und Funktionen eines ERCP-Geräts:Gantry: ist der ringförmige Teil des CT-Geräts, der die Röntgenröhre und die Detektoren enthält. Er kann sich um den Patienten drehen, um aus verschiedenen Winkeln Bilder zu erstellen.",
        text_list: [
          {
            bold: "Endoskop :",
            other:
              "Ein flexibles, schlauchförmiges Instrument, das durch den Mund des Patienten eingeführt wird. Es enthält eine Lichtquelle und eine Kamera, die Bilder des Verdauungstrakts auf einen Monitor überträgt. Das Endoskop hat auch einen Arbeitskanal für die Einführung von Werkzeugen und Kontrastmittel.",
          },
          {
            bold: "Seitblick-Endoskop (Duodenoskop) :",
            other:
              "Ein spezielles Endoskop, das für ERCP verwendet wird. Es hat eine seitliche Sichtoptik und einen zusätzlichen Arbeitskanal, der den Zugang zur Papilla Vateri erleichtert.",
          },
          {
            bold: "Röntgengerät :",
            other:
              "Erzeugt Röntgenstrahlen, die durch den Körper des Patienten gesendet werden. Die Röntgenstrahlen werden vom Kontrastmittel, das in die Gallen- und Pankreasgänge injiziert wird, absorbiert und auf einem Röntgenbildschirm sichtbar gemacht.",
          },
          {
            bold: "Kontrastmittelinjektor :",
            other:
              "Ein Gerät zur Verabreichung von Kontrastmittel durch einen Katheter. Das Kontrastmittel füllt die Gallen- und Pankreasgänge, um sie unter Röntgendurchleuchtung sichtbar zu machen.",
          },
          {
            bold: "Fluoroskopie :",
            other:
              "Eine Technik zur Echtzeit-Bildgebung mit Röntgenstrahlen. Sie ermöglicht es dem Arzt, die Bewegung von Kontrastmittel durch die Gallen- und Pankreasgänge zu beobachten und Eingriffe präzise durchzuführen.",
          },
          {
            bold: "Katheter und Führungsdraht :",
            other:
              "Flexible Röhren und Drähte, die durch den Arbeitskanal des Endoskops eingeführt werden, um Kontrastmittel zu injizieren oder therapeutische Werkzeuge zu platzieren.",
          },
          {
            bold: "Therapeutische Werkzeuge :",
            other:
              "Verschiedene Instrumente, die durch das Endoskop geführt werden können, um Steine zu entfernen, Strikturen zu dilatieren oder Stents zu setzen. Dazu gehören Ballondilatatoren, Steinfangkörbe und Stent-Einführsysteme.",
          },
          {
            bold: "Arbeitsstation :",
            other:
              "Ein Computer und Monitoren, die zur Steuerung des Röntgengeräts und zur Anzeige der Röntgenbilder verwendet werden. Der Radiologe oder Gastroenterologe steuert von hier aus die Untersuchung und Eingriffe.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Ermöglicht dem Technologen, das ERCP-Gerät zu bedienen, Untersuchungseinstellungen vorzunehmen und den Scanning-Prozess zu überwachen.",
          },
          {
            bold: "Patiententisch :",
            other:
              "Eine motorisierte Liege, die den Patienten in die richtige Position bringt und während der Untersuchung stabil hält.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben.",
          },
          {
            bold: "Monitor für Endoskopiebilder :",
            other:
              "Zeigt die Live-Bilder des Endoskops an, die der Arzt während des Eingriffs beobachtet, um präzise Manöver durchzuführen.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Kühlt die Röntgenröhre und andere hitzeempfindliche Komponenten, um eine Überhitzung zu verhindern und die Funktionalität des Geräts zu gewährleisten.",
          },
          {
            bold: "Dokumentationssystem :",
            other:
              "Ein digitales System zur Aufzeichnung und Speicherung der Bilddaten und der durchgeführten Eingriffe für spätere Analysen und zur Patientenakte.",
          },
          {
            bold: "Notfallsystem :",
            other:
              "Ausrüstung und Protokolle zur schnellen Reaktion auf Komplikationen während des Eingriffs, wie z.B. Notfallmedikamente und Reanimationsgeräte.",
          },
        ],
      },
      // 6tab
      {
        id: 44,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der ERCP-Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "ERCP :",
            other: "Endoskopische retrograde Cholangiopankreatikographie",
          },
          {
            bold: "Endoskop :",
            other:
              "Ein flexibles Instrument zur Untersuchung des Verdauungstraktes",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Eine Substanz, die zur besseren Darstellung der Gallen- und Pankreasgänge verwendet wird",
          },
          {
            bold: "Papilla Vateri :",
            other:
              "Die Mündung des Gallengangs und des Pankreasgangs in den Zwölffingerdarm",
          },
          {
            bold: "Gallengang :",
            other: "Ductus choledochus",
          },
          {
            bold: "Pankreasgang :",
            other: "Ductus pancreaticus",
          },
          {
            bold: "Cholestase :",
            other: "Stauung der Gallenflüssigkeit",
          },
          {
            bold: "Striktur :",
            other: "Verengung eines Ganges",
          },
          {
            bold: "Dilatation :",
            other: "Erweiterung einer Verengung",
          },
          {
            bold: "Stent :",
            other: "Ein Röhrchen zur Offenhaltung verengter Gänge",
          },
          {
            bold: "Sphinkterotomie :",
            other: "Schnitt durch den Schließmuskel der Papilla Vateri",
          },
          {
            bold: "Steinextraktion :",
            other: "Entfernung von Gallensteinen",
          },
          {
            bold: "Pankreatitis :",
            other: "Entzündung der Bauchspeicheldrüse",
          },
          {
            bold: "Cholangitis :",
            other: "Entzündung der Gallengänge",
          },
          {
            bold: "Aufklärung :",
            other: "Patienteninformation über Risiken und Ablauf",
          },
          {
            bold: "Einverständniserklärung :",
            other: "Schriftliche Zustimmung des Patienten",
          },
          {
            bold: "Post-ERCP-Pankreatitis :",
            other: "Entzündung der Bauchspeicheldrüse nach ERCP",
          },
          {
            bold: "Radiologische Bildgebung :",
            other: "Verfahren zur Darstellung innerer Strukturen",
          },
          {
            bold: "Fluoroskopie :",
            other: "Echtzeit-Röntgendurchleuchtung",
          },
          {
            bold: "Diagnostische ERCP :",
            other: "ERCP zur Untersuchung",
          },
          {
            bold: "Therapeutische ERCP :",
            other: "ERCP zur Behandlung",
          },
          {
            bold: "Routinekontrolle :",
            other: "Regelmäßige Überprüfung ohne spezifischen Verdacht",
          },
          {
            bold: "Leberwerte :",
            other: "Laborwerte zur Beurteilung der Leberfunktion",
          },
          {
            bold: "Ikterus :",
            other: "Gelbsucht",
          },
          {
            bold: "Dysphagie :",
            other: "Schluckstörung",
          },
          {
            bold: "MRCP :",
            other: "Magnetresonanz-Cholangiopankreatikographie",
          },
          {
            bold: "EUS :",
            other: "Endoskopischer Ultraschall",
          },
          {
            bold: "Prämedikation :",
            other: "Vorbereitende Medikamentengabe",
          },
          {
            bold: "Biliäre Striktur :",
            other: "Verengung der Gallengänge",
          },
          {
            bold: "Gallengangskarzinom :",
            other: "Bösartiger Tumor der Gallengänge",
          },
          {
            bold: "Stenose :",
            other: "Verengung eines Hohlorgans",
          },
          {
            bold: "Ductus cysticus :",
            other: "Gallenblasengang",
          },
          {
            bold: "Gallenkolik :",
            other: "Schmerzhaftes Ereignis durch Gallensteine",
          },
          {
            bold: "Endoskopische Resektion :",
            other: "Entfernung von Gewebe durch das Endoskop",
          },
          {
            bold: "Radiologische Anatomie :",
            other: "Strukturen, wie sie im Röntgenbild erscheinen",
          },
          {
            bold: "Bildinterpretation :",
            other: "Analyse und Deutung radiologischer Bilder",
          },
          {
            bold: "Bildgebende Diagnostik :",
            other:
              "Verfahren zur Darstellung von Körperstrukturen mittels Röntgen, MRT, CT etc.",
          },

          {
            text: "Diese Begriffe bilden einen grundlegenden Wortschatz, der für die Fachsprache im Bereich der ERCP wichtig ist und können in einer Prüfungssituation nützlich sein.",
          },
        ],
      },
      {
        id: 45,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "Stiftung Gesundheitswissen :",
            other:
              "Diese Seite bietet umfassende Informationen über die Funktionsweise, den Ablauf und die verschiedenen Formen der Ultraschalluntersuchung, einschließlich der Nutzung von Kontrastmitteln und möglichen Risiken. [Links](https://www.stiftung-gesundheitswissen.de)",
          },
          {
            bold: "NetDoktor :",
            other:
              "Auf NetDoktor kannst du mehr über die Gründe für eine Ultraschalluntersuchung, deren Ablauf und die damit verbundenen Risiken erfahren. Es werden auch spezielle Ultraschallverfahren wie Doppler- und Farbdoppler-Ultraschall beschrieben. [Links](https://www.netdoktor.de)",
          },
          {
            bold: "Gesundheitsinformation.de :",
            other:
              "Diese Seite erklärt, wie eine Ultraschalluntersuchung funktioniert und welche Körperbereiche damit untersucht werden können. Es gibt auch Informationen zur Anwendung in der Schwangerschaftsvorsorge und zur Diagnose verschiedener Erkrankungen. [Links](https://www.gesundheitsinformation.de)",
          },
          {
            bold: "BARMER :",
            other:
              "Die BARMER Webseite bietet eine gute Übersicht über die Funktionsweise, den Einsatz und die Grenzen von Ultraschall. Es wird auch die Anwendung in verschiedenen medizinischen Bereichen wie Herz- und Gefäßdiagnostik sowie Schwangerschaftsvorsorge erläutert. [Links](https://www.barmer.de)",
          },
          {
            bold: "PraktischArzt :",
            other:
              "Hier findest du Informationen zu verschiedenen Arten von Ultraschalluntersuchungen wie der Mammasonografie und Dopplersonografie. Der Ablauf einer typischen Sonographie wird ebenfalls detailliert beschrieben. [Links](https://www.praktischarzt.de)",
          },
          {
            bold: "Krebsinformationsdienst :",
            other:
              "Diese Seite bietet häufig gestellte Fragen zum Thema Ultraschall in der Krebsmedizin, einschließlich Informationen zur Technik, Anwendung und Vorbereitung auf die Untersuchung. [Links](https://www.krebsinformationsdienst.de)",
          },
          {
            bold: "DokCheck :",
            other:
              "Diese Seite bietet detaillierte Informationen zu verschiedenen medizinischen Themen, einschließlich Ultraschalluntersuchungen. Hier findest du Erklärungen zur Funktionsweise, den Einsatzbereichen und den verschiedenen Arten von Ultraschall. [Links](https://www.doccheck.com)",
          },
          {
            bold: "AMBOSS :",
            other:
              "AMBOSS ist eine umfassende Ressource für medizinisches Wissen. Hier findest du detaillierte Informationen über Ultraschall, einschließlich der physikalischen Grundlagen, der klinischen Anwendungen und der technischen Aspekte. [Links](https://www.amboss.com/de)",
          },
        ],
      },
      {
        id: 46,
        title: "PDF",
        link: "https://drive.google.com/file/d/1PqRkOW_XHA6f1_mxulrp3YX1hGNTV4uv/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 6
];
