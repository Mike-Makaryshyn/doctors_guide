import child_tab_img_1 from "../assets/tab_images/child_tab_1.jpg";
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
        title: "Матеріали для самостійного вивчення",
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
        link: "https://clickdimensions.com/links/TestPDFfile.pdf",
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
        title: "Матеріали для самостійного вивчення",
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
        link: "https://clickdimensions.com/links/TestPDFfile.pdf",
      },
    ],
  },
  // end of parent tab: 2
  // start of parent tab: 3
  {
    id: 3,
    title: "Next",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 31,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung:",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die CT ist ein wesentliches bildgebendes Verfahren in der deutschen Medizinlandscha9. Sie wird für eine Vielzahl von diagnos?schen und therapeu?schen Zwecken eingesetzt.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die CT findet Anwendung in der Neurologie, Onkologie, Kardiologie und vielen weiteren Fachbereichen. Sie ist unerlässlich für die schnelle und genaue Diagnos?k.",
              },
            ],
          },
          {
            title: "Grundprinzipien:",
            items: [
              {
                bold_text: "TheoreAsche Grundlagen:",
                text: "Die CT nutzt Röntgenstrahlen, um detaillierte QuerschniQsbilder des Körpers zu erzeugen. Ein Computer verarbeitet die Daten, um ein dreidimensionales Bild zu erstellen.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Moderne CT-Scanner verwenden Spiral- oder MehrschichQechniken, um hochauflösende Bilder zu erzeugen. Die Untersuchung ist meist schnell und schmerzfrei.",
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
              "Erläutern Sie den diagnos?schen Zweck der CT, z.B. zur Erkennung von Tumoren oder Knochenbrüchen.",
            third:
              "Diese Untersuchung hil9 uns, detaillierte Bilder Ihres Körpers zu erhalten, um den Verdacht auf [spezifische Erkrankung] zu überprüfen.",
            fourth:
              "Mit der CT können wir Strukturen in Ihrem Körper genau betrachten, um die rich?ge Diagnose zu stellen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie den Prozess der CT- Untersuchung, einschließlich der Posi?onierung im Scanner.",
            third:
              "Sie werden auf einem Tisch liegen, der langsam durch den Scanner fährt. Dabei sollten Sie s?ll liegen, um klare Bilder zu erhalten",
            fourth:
              "Die Untersuchung dauert nur wenige Minuten. Sie hören dabei eventuell leise Geräusche, das ist normal.",
          },
        ],
      },
      // 3tab
      {
        id: 33,
        title: "3 tab",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "lala" },
          {
            name: "third",
            visualText: "mwsad",
          },
          {
            name: "fourth",
            visualText: "dadfaw",
          },
        ],
        tableRows: [
          {
            first: "your_text",
            second:
              "Erläutern Sie den diagnos?schen Zweck der CT, z.B. zur Erkennung von Tumoren oder Knochenbrüchen.",
            third:
              "Diese Untersuchung hil9 uns, detaillierte Bilder Ihres Körpers zu erhalten, um den Verdacht auf [spezifische Erkrankung] zu überprüfen.",
            fourth:
              "Mit der CT können wir Strukturen in Ihrem Körper genau betrachten, um die rich?ge Diagnose zu stellen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie den Prozess der CT- Untersuchung, einschließlich der Posi?onierung im Scanner.",
            third:
              "Sie werden auf einem Tisch liegen, der langsam durch den Scanner fährt. Dabei sollten Sie s?ll liegen, um klare Bilder zu erhalten",
            fourth:
              "Die Untersuchung dauert nur wenige Minuten. Sie hören dabei eventuell leise Geräusche, das ist normal.",
          },
        ],
      },
      // 4tab
      {
        id: 34,
        title: "4 tab",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "lala" },
          {
            name: "third",
            visualText: "mwsad",
          },
          {
            name: "fourth",
            visualText: "dadfaw",
          },
        ],
        tableRows: [
          {
            first: "Ziel der Untersuchung",
            second:
              "Erläutern Sie den diagnos?schen Zweck der CT, z.B. zur Erkennung von Tumoren oder Knochenbrüchen.",
            third:
              "Diese Untersuchung hil9 uns, detaillierte Bilder Ihres Körpers zu erhalten, um den Verdacht auf [spezifische Erkrankung] zu überprüfen.",
            fourth:
              "Mit der CT können wir Strukturen in Ihrem Körper genau betrachten, um die rich?ge Diagnose zu stellen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie den Prozess der CT- Untersuchung, einschließlich der Posi?onierung im Scanner.",
            third:
              "Sie werden auf einem Tisch liegen, der langsam durch den Scanner fährt. Dabei sollten Sie s?ll liegen, um klare Bilder zu erhalten",
            fourth:
              "Die Untersuchung dauert nur wenige Minuten. Sie hören dabei eventuell leise Geräusche, das ist normal.",
          },
        ],
      },
      // 5tab
      {
        id: 35,
        title: "tab 5",
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
      // 7tab
      {
        id: 37,
        title: "Матеріали для самостійного вивчення",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "Computertomographie (CT):",
            other:
              "Bildgebendes Verfahren, das Röntgenstrahlen verwendet, um detaillierte QuerschniQsbilder des Körpers zu erstellen.",
          },
        ],
      },
      // 8tab
      {
        id: 38,
        title: "PDF",
        link: "https://clickdimensions.com/links/TestPDFfile.pdf",
      },
    ],
  },
  // end of parent tab 3
  // start of parent tab 4
];
