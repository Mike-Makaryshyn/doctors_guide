import child_tab_img_1 from "../assets/tab_images/child_tab_3.png";
import child_tab_img_2 from "../assets/tab_images/child_tab_1.jpg";
import child_tab_img_3 from "../assets/tab_images/child_tab_1.jpg";

export const exam_categories = [
  {
    id: 1,
    title: "Bildgebender Verfahren",
    show_before_id: 1,
  },
  {
    id: 2,
    title: "Kardiologische Untersuchungen",
    show_before_id: 10,
  },
  {
    id: 3,
    title: "Endoskopische Verfahren",
    show_before_id: 15,
  },
  // Тут далі вставляй нові категорії по прикладу попередніх.
];

export const parentTabs = [
  // Bildgebender Verfahren zum Herunterladen

  // start of parent tab: 1 Computertomographie
  {
    id: 1,
    title: "Computertomographie(CT)",
    checked: false,
    childTabs: [
      // 1tab id11
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
      // 2tab id12
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
      // 3tab id13
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
      // 4tab id14
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
      // 5tab id15
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
      // 6tab id16
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
      // 7tab id17
      {
        id: 17,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "DocCheck Flexikon",
            other:
              "Eine umfassende medizinische Datenbank, die detaillierte Erklärungen zur Computertomographie bietet, einschließlich technischer Details und Anwendungsgebiete. Mehr Informationen finden Sie auf [DocCheck Flexikon] https://flexikon.doccheck.com/de/Computertomographie",
          },
          {
            bold: "Stiftung Gesundheitswissen",
            other:
              "Diese Seite bietet umfassende Informationen zur CT, einschließlich Ablauf, Strahlenbelastung und Nutzen von Kontrastmitteln. Mehr Informationen finden Sie auf [Stiftung Gesundheitswissen] https://www.stiftung-gesundheitswissen.de",
          },
          {
            bold: "Praktischarzt.de",
            other:
              "Diese Seite erklärt die Gründe für eine CT, den Ablauf, die Dauer und die Kosten der Untersuchung. Mehr Informationen finden Sie auf [praktischarzt.de] https://www.praktischarzt.de",
          },
          {
            bold: "Navigator Medizin",
            other:
              "Beschreibt den Ablauf, die Nebenwirkungen und die Risiken einer CT-Untersuchung und gibt Hinweise zu Kontrastmitteln. Mehr Informationen finden Sie auf [Navigator Medizin] https://www.navigator-medizin.de",
          },
          {
            bold: "Gesundheit.de",
            other:
              "Erklärt den Ablauf und die Dauer einer CT, sowie die Vor- und Nachteile dieser Untersuchungsmethode. Mehr Informationen finden Sie auf [Gesundheit.de] https://www.gesundheit.de",
          },
          {
            bold: "Onmeda",
            other:
              "Diese Seite bietet eine Übersicht über die Anwendungsgebiete, Risiken und Komplikationen der Computertomographie. Mehr Informationen finden Sie auf [Onmeda] https://www.onmeda.de",
          },
        ],
      },
      // 8tab id18
      {
        id: 18,
        title: "PDF",
        link: "https://drive.google.com/file/d/1VwDsXfFEppPwnn21kHvi9cOmjTs0eU02/view?usp=share_link",
      },
    ],
  },
  // end of parent tab: 1
  // start of parent tab: 2 2MRT
  {
    id: 2,
    title: "MRT",

    checked: false,
    childTabs: [
      // 1tab id19
      {
        id: 19,
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
      // 2tab 20
      {
        id: 20,
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
      // 3tab 21
      {
        id: 21,
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
      // 4tab 22
      {
        id: 22,
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
      // 5tab 23
      {
        id: 23,
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
      // 6tab 24
      {
        id: 24,
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
      // 7tab 25
      {
        id: 25,
        title: "Links",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "DocCheck Flexikon",
            other:
              "Diese Seite bietet umfangreiche Informationen zur MRT, einschließlich des Aufbaus und der Funktionsweise eines MRT-Geräts, der unterschiedlichen Sequenzen und der klinischen Anwendungen. [DocCheck Flexikon - MRT​] https://flexikon.doccheck.com/de/MRT​ [DocCheck Flexikon] https://flexikon.doccheck.com/de/MRT​ [DocCheck Flexikon] https://flexikon.doccheck.com/de/MRT​​",
          },
          {
            bold: "Stiftung Gesundheitswissen",
            other:
              "Auf dieser Seite finden Sie Informationen über den Ablauf einer MRT-Untersuchung, die Vorbereitung und mögliche Risiken sowie Tipps für Patienten, die unter Platzangst leiden. [Stiftung Gesundheitswissen] https://www.stiftung-gesundheitswissen.de",
          },
          {
            bold: "praktischArzt",
            other:
              "Diese Seite beschreibt detailliert den Ablauf einer MRT-Untersuchung, die Vorbereitungen, die während der Untersuchung zu beachtenden Punkte und die Nachsorge. [praktischArzt] https://www.praktischarzt.de",
          },
          {
            bold: "NetDoktor",
            other:
              "Diese Webseite erklärt die Gründe für eine MRT, den Ablauf der Untersuchung, die Unterschiede zwischen T1- und T2-Gewichtung und die Verwendung von Kontrastmitteln. [NetDoktor] https://www.netdoktor.de",
          },
          {
            bold: "Med 360°",
            other:
              "Diese Seite bietet umfassende Informationen zur Kernspintomographie, einschließlich der Vorbereitung, des Ablaufs der Untersuchung und der Einsatzgebiete der MRT. [Med 360°] https://www.med360grad.de",
          },
          {
            bold: "Lifeline",
            other:
              "Auf dieser Seite erhalten Sie Informationen zum Ablauf, den Kosten und der Verwendung von Kontrastmitteln bei einer MRT. Es wird auch erläutert, welche Symptome und Krankheiten mit einer MRT abgeklärt werden können. [Lifeline] https://www.lifeline.de",
          },
        ],
      },
      // 8tab 26
      {
        id: 26,
        title: "PDF",
        link: "https://drive.google.com/file/d/1FZBbVLG693amI9jnMWvPSRo7RdB-UEoN/view?usp=share_link",
      },
    ],
  },
  // end of parent tab: 2
  // start of parent tab: 3 Röntgen
  {
    id: 3,
    title: "Röntgen",
    checked: false,
    childTabs: [
      // 1tab 27
      {
        id: 27,
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
      // 2tab 28
      {
        id: 28,
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
      // 3tab 29
      {
        id: 29,
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
      // 4tab 30
      {
        id: 30,
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
      // 5tab 31
      {
        id: 31,
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
      // 6tab 32
      {
        id: 32,
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
      // 7tab 33
      {
        id: 33,
        title: "Links",
        text: "Für eine Fachsprachenprüfung im medizinischen Bereich, speziell zum Thema Computertomographie (CT), ist ein spezifischer Wortschatz entscheidend. Hier ist eine Liste relevanter Begriffe und Konzepte, die häufig in diesem Kontext verwendet werden:",
        text_list: [
          {
            bold: "DocCheck Flexikon",
            other:
              "Diese Seite bietet eine umfassende Erklärung der Röntgendiagnostik, einschließlich der Technik, wichtiger Verfahren wie der konventionellen Röntgendiagnostik, Computertomographie (CT) und Angiographie. Hier erfährst du auch, wie Röntgenstrahlen verwendet werden, um pathologische Veränderungen im Körper darzustellen. Mehr Informationen finden Sie auf [DocCheck Flexikon](https://flexikon.doccheck.com/de/Röntgendiagnostik)",
          },
          {
            bold: "NetDoktor",
            other:
              "Auf dieser Seite findest du detaillierte Informationen über die Gründe, den Ablauf und die Risiken von Röntgenuntersuchungen. Es wird auch auf spezielle Röntgenverfahren wie die Digitale Volumentomografie (DVT) und die Orthopantomografie (OPG) eingegangen. Mehr Informationen finden Sie auf [NetDoktor](https://www.netdoktor.de/diagnostik/roentgen/)",
          },
          {
            bold: "MSD Manual",
            other:
              "Diese Seite erklärt die verschiedenen Anwendungen von Röntgenaufnahmen zur Diagnose von Störungen wie Frakturen, Lungenentzündung und Darmverschluss. Es wird auch die Verwendung von Kontrastmitteln und die Fluoroskopie beschrieben. Mehr Informationen finden Sie auf [MSD Manual](https://www.msdmanuals.com/de-de/heim/spezialthemen/übliche-bildgebende-verfahren/röntgenaufnahmen)",
          },
          {
            bold: "Gesundheitsportal",
            other:
              "Hier findest du eine allgemeine Übersicht über Röntgenuntersuchungen, einschließlich der Verwendung von Kontrastmitteln zur Verbesserung der Darstellung von Weichgeweben, Gefäßen und Hohlorganen. Es wird auch auf das Strahlenrisiko und den Strahlenschutz eingegangen. Mehr Informationen finden Sie auf [Gesundheitsportal](https://www.gesundheit.gv.at/labor/untersuchungen/mrt-ct-roentgen/roentgen-untersuchung.html)",
          },
          {
            bold: "Apotheken Umschau",
            other:
              "Diese Seite bietet einen allgemeinen Überblick über Röntgenuntersuchungen und deren Einsatzgebiete, wie zum Beispiel zur Erkennung von Knochenbrüchen oder zur Diagnose von Lungenerkrankungen. Mehr Informationen finden Sie auf [Apotheken Umschau](https://www.apotheken-umschau.de/diagnose/diagnoseverfahren/roentgenuntersuchung-blick-ins-innere-734801.html)",
          },
        ],
      },
      // 8tab 34
      {
        id: 34,
        title: "PDF",
        link: "https://drive.google.com/file/d/1Fmd2JsarEZJCX065cVemBOKQNYNDqXuo/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 3
  // start of parent tab 4 Ultraschall
  {
    id: 4,
    title: "Ultraschall",
    checked: false,
    childTabs: [
      // 1tab 35
      {
        id: 35,
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
      // 2tab 36
      {
        id: 36,
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
      // 3tab 37
      {
        id: 37,
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
      // 4tab 38
      {
        id: 38,
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
      // 5tab 39
      {
        id: 39,
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
      // 6tab 40
      {
        id: 40,
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
      // 6tab 41
      {
        id: 41,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "Stiftung Gesundheitswissen :",
            other:
              "Diese Seite bietet umfassende Informationen über die Funktionsweise, den Ablauf und die verschiedenen Formen der Ultraschalluntersuchung, einschließlich der Nutzung von Kontrastmitteln und möglichen Risiken. [Links] https://www.stiftung-gesundheitswissen.de",
          },
          {
            bold: "NetDoktor :",
            other:
              "Auf NetDoktor kannst du mehr über die Gründe für eine Ultraschalluntersuchung, deren Ablauf und die damit verbundenen Risiken erfahren. Es werden auch spezielle Ultraschallverfahren wie Doppler- und Farbdoppler-Ultraschall beschrieben. [Links] https://www.netdoktor.de",
          },
          {
            bold: "Gesundheitsinformation.de :",
            other:
              "Diese Seite erklärt, wie eine Ultraschalluntersuchung funktioniert und welche Körperbereiche damit untersucht werden können. Es gibt auch Informationen zur Anwendung in der Schwangerschaftsvorsorge und zur Diagnose verschiedener Erkrankungen. [Links] https://www.gesundheitsinformation.de",
          },
          {
            bold: "BARMER :",
            other:
              "Die BARMER Webseite bietet eine gute Übersicht über die Funktionsweise, den Einsatz und die Grenzen von Ultraschall. Es wird auch die Anwendung in verschiedenen medizinischen Bereichen wie Herz- und Gefäßdiagnostik sowie Schwangerschaftsvorsorge erläutert. [Links] https://www.barmer.de",
          },
          {
            bold: "PraktischArzt :",
            other:
              "Hier findest du Informationen zu verschiedenen Arten von Ultraschalluntersuchungen wie der Mammasonografie und Dopplersonografie. Der Ablauf einer typischen Sonographie wird ebenfalls detailliert beschrieben. [Links] https://www.praktischarzt.de",
          },
          {
            bold: "Krebsinformationsdienst :",
            other:
              "Diese Seite bietet häufig gestellte Fragen zum Thema Ultraschall in der Krebsmedizin, einschließlich Informationen zur Technik, Anwendung und Vorbereitung auf die Untersuchung. [Links] https://www.krebsinformationsdienst.de",
          },
          {
            bold: "DokCheck :",
            other:
              "Diese Seite bietet detaillierte Informationen zu verschiedenen medizinischen Themen, einschließlich Ultraschalluntersuchungen. Hier findest du Erklärungen zur Funktionsweise, den Einsatzbereichen und den verschiedenen Arten von Ultraschall. [Links] https://www.doccheck.com)",
          },
          {
            bold: "AMBOSS :",
            other:
              "AMBOSS ist eine umfassende Ressource für medizinisches Wissen. Hier findest du detaillierte Informationen über Ultraschall, einschließlich der physikalischen Grundlagen, der klinischen Anwendungen und der technischen Aspekte. [Links] https://www.amboss.com/de)",
          },
        ],
      },
      // 6tab 42
      {
        id: 42,
        title: "PDF",
        link: "https://drive.google.com/file/d/1IpVZbjr-QxFfXF2JnXUQR8UJ2KDo288D/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 4
  // start of parent tab 5 (Positronen-Emissions-Tomographie kombiniert mit Computertomographie)
  {
    id: 5,
    title:
      "PET-CT (Positronen-Emissions-Tomographie kombiniert mit Computertomographie)",
    checked: false,
    childTabs: [
      // 1tab 43
      {
        id: 43,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die PET-CT-Untersuchung zielt darauf ab, metabolische und anatomische Informationen des Körpers zu kombinieren, um präzise diagnostische Aussagen zu ermöglichen. Dies ist besonders wichtig bei der Diagnose und dem Management von Krebserkrankungen, neurologischen und kardiologischen Störungen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Relevanz der PET-CT liegt in ihrer Fähigkeit, sowohl funktionelle als auch strukturelle Bildgebung zu liefern. Anwendungsbereiche umfassen die Onkologie zur Tumordetektion und -charakterisierung, die Neurologie zur Untersuchung von Hirnstoffwechselstörungen und die Kardiologie zur Bewertung der Myokardperfusion.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die PET-CT basiert auf der Kombination zweier Bildgebungstechniken: der Positronen-Emissions-Tomographie (PET), die Stoffwechselprozesse sichtbar macht, und der Computertomographie (CT), die detaillierte anatomische Bilder liefert. Dabei werden Radiotracer verwendet, die sich in spezifischen Geweben anreichern und Positronen emittieren, welche dann detektiert werden.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Technisch gesehen, erfolgt die PET-CT in mehreren Schritten: Injektion des Radiotracers, Wartezeit für die Anreicherung im Zielgewebe, Durchführung der PET- und CT-Scans und schließlich die Kombination der beiden Bildgebungen zu einem integrierten Bild.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung der PET-CT-Bilder erfordert spezielle Kenntnisse in der Interpretation sowohl der metabolischen Aktivität (PET) als auch der anatomischen Struktur (CT). Typischerweise werden Regionen mit erhöhtem Radiotracer-Uptake identifiziert und mit den anatomischen Bildern abgeglichen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde bei der PET-CT umfassen die Identifikation von Tumoren, Metastasen, Entzündungsherden und neurologischen Anomalien. Auffällige Befunde zeigen sich durch Regionen mit abnorm hoher oder niedriger Stoffwechselaktivität.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Zu den Vorteilen der PET-CT gehören die hohe Sensitivität und Spezifität, die Kombination von funktionellen und anatomischen Informationen und die Fähigkeit, frühzeitig pathologische Veränderungen zu erkennen.",
              },
              {
                bold_text: "Nachteile:",
                text: "Nachteile umfassen die hohen Kosten, die begrenzte Verfügbarkeit und die Notwendigkeit von Radiotracern, die eine Strahlenexposition mit sich bringen.",
              },
              {
                bold_text: "Risiken:",
                text: "Risiken der PET-CT umfassen die Strahlenbelastung durch die Radiotracer und den CT-Scan sowie mögliche allergische Reaktionen auf Kontrastmittel.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die PET-CT spielt eine zentrale Rolle in der Diagnose und Behandlung von Krebserkrankungen, da sie präzise Informationen über Tumoraktivität und -ausbreitung liefert. Auch in der Neurologie und Kardiologie ist sie ein wichtiges diagnostisches Werkzeug.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Für das Patientenmanagement ist die PET-CT unerlässlich, da sie hilft, Therapieentscheidungen zu treffen, den Therapieerfolg zu überwachen und die Prognose zu beurteilen.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Alternativen zur PET-CT umfassen MRT, CT, SPECT und Ultraschall, die je nach klinischer Fragestellung eingesetzt werden können.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschungsergebnisse zeigen Fortschritte in der Entwicklung neuer Radiotracer, die spezifischere Diagnosen ermöglichen, sowie Verbesserungen in der Bildqualität und Reduzierung der Strahlenexposition.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Perspektiven beinhalten die Integration von künstlicher Intelligenz zur Verbesserung der Bildinterpretation und die Weiterentwicklung der Hybridbildgebungstechniken.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die PET-CT ist ein leistungsstarkes diagnostisches Werkzeug, das sowohl funktionelle als auch anatomische Informationen liefert und in vielen medizinischen Bereichen unverzichtbar ist.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Die Gesamtbedeutung der PET-CT liegt in ihrer Fähigkeit, präzise Diagnosen zu stellen und das Management von Patienten signifikant zu verbessern. Sie ist ein Schlüsselinstrument in der modernen Medizin und wird durch kontinuierliche Forschung und Entwicklung weiter optimiert.",
              },
            ],
          },
        ],
      },
      // 2tab 44
      {
        id: 44,
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
              "Erläutern Sie dem Patienten, dass das Ziel der PET-CT darin besteht, detaillierte Informationen über die Stoffwechselaktivität und die Anatomie des Körpers zu erhalten, um Erkrankungen wie Krebs zu diagnostizieren und zu bewerten.",
            third:
              "Die PET-CT hilft uns, Tumoren frühzeitig zu erkennen und deren genaue Lage und Aktivität zu bestimmen.",
            fourth:
              "Mit der PET-CT können wir feststellen, ob sich der Krebs auf andere Körperregionen ausgebreitet hat.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie den Ablauf der Untersuchung: Injektion eines Radiotracers, Wartezeit für die Verteilung des Tracers, Durchführung des PET-Scans und anschließend des CT-Scans, sowie die Kombination der Bilder.",
            third:
              "Zuerst bekommen Sie eine Injektion mit einem schwach radioaktiven Stoff, dann warten wir etwa eine Stunde, bevor wir die eigentlichen Scans durchführen.",
            fourth:
              "Während der Untersuchung liegen Sie ruhig auf einer Liege, die sich durch den Scanner bewegt. Die gesamte Prozedur dauert etwa zwei Stunden.",
          },
          {
            first: "Vorbereitung",
            second:
              "Informieren Sie über notwendige Vorbereitungen wie Nüchternheit, spezielle Diätvorgaben, das Tragen bequemer Kleidung und das Entfernen von Schmuck oder metallischen Gegenständen.",
            third:
              "Bitte kommen Sie nüchtern zur Untersuchung, das heißt, essen und trinken Sie nichts vier Stunden vorher.",
            fourth:
              "Vermeiden Sie koffeinhaltige Getränke und körperliche Anstrengungen am Tag vor der Untersuchung.",
          },
          {
            first: "Risiken",
            second:
              "Erklären Sie die Risiken der Untersuchung, wie die Strahlenbelastung durch den Radiotracer und den CT-Scan, mögliche allergische Reaktionen auf Kontrastmittel.",
            third:
              "Es besteht eine geringe Strahlenbelastung, ähnlich wie bei einer Röntgenuntersuchung, die jedoch als sicher gilt.",
            fourth:
              "In seltenen Fällen kann es zu allergischen Reaktionen auf das Kontrastmittel kommen. Informieren Sie uns bitte, wenn Sie bekannte Allergien haben.",
          },
          {
            first: "Vorteile",
            second:
              "Heben Sie die Vorteile hervor, wie die hohe Genauigkeit der Diagnose, die Kombination von funktionellen und anatomischen Informationen und die Fähigkeit, Erkrankungen frühzeitig zu erkennen.",
            third:
              "Die PET-CT bietet eine sehr präzise Diagnose, indem sie Stoffwechselprozesse und anatomische Strukturen gleichzeitig darstellt.",
            fourth:
              "Dank der PET-CT können wir Tumore frühzeitig erkennen und gezielt behandeln.",
          },
          {
            first: "Alternativen",
            second:
              "Nennen Sie alternative Untersuchungsmethoden wie MRT, CT, SPECT oder Ultraschall und warum PET-CT in bestimmten Fällen bevorzugt wird.",
            third:
              "Alternativen wie MRT oder CT liefern zwar detaillierte Bilder, zeigen aber nicht die Stoffwechselaktivität der Gewebe.",
            fourth:
              "Die SPECT ist eine weitere Alternative, aber die PET-CT bietet eine höhere Auflösung und genauere Ergebnisse.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Besprechen Sie mögliche Kontraindikationen wie Schwangerschaft, Stillzeit oder bekannte Allergien gegen Kontrastmittel.",
            third:
              "Wenn Sie schwanger sind oder stillen, sollten Sie uns dies unbedingt mitteilen, da die Strahlung dem Kind schaden könnte.",
            fourth:
              "Falls Sie bekannte Allergien gegen Kontrastmittel haben, informieren Sie uns bitte, damit wir geeignete Vorsichtsmaßnahmen treffen können.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Informieren Sie den Patienten über die Art der möglichen Ergebnisse, die von normalen Befunden bis hin zu pathologischen Veränderungen reichen können.",
            third:
              "Ein normales Ergebnis zeigt keine Anzeichen von Tumoren oder anderen Auffälligkeiten. Sollte etwas gefunden werden, besprechen wir die weiteren Schritte mit Ihnen.",
            fourth:
              "Die Ergebnisse können auch Hinweise auf andere Erkrankungen geben, wie zum Beispiel Entzündungen oder neurologische Störungen.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Wichtigkeit der Einwilligung des Patienten vor der Durchführung der Untersuchung, um sicherzustellen, dass der Patient alle Informationen verstanden hat.",
            third:
              "Ihre Zustimmung ist notwendig, damit wir die Untersuchung durchführen können. Es ist wichtig, dass Sie alle Informationen verstanden haben und einverstanden sind.",
            fourth:
              "Vor der Untersuchung benötigen wir Ihre schriftliche Einwilligung. Dies stellt sicher, dass Sie über alle Aspekte der Untersuchung informiert sind und zugestimmt haben.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie den Prozess des Einverständnisses: Der Patient muss ein Formular unterschreiben, nachdem er über alle relevanten Aspekte der Untersuchung informiert wurde",
            third:
              "Nachdem wir alle Ihre Fragen beantwortet haben, bitten wir Sie, dieses Einwilligungsformular zu unterschreiben.",
            fourth:
              "Bitte lesen Sie das Formular sorgfältig durch und unterschreiben Sie es, wenn Sie mit der Untersuchung einverstanden sind.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie abschließende Hinweise zur Vermeidung von engem Kontakt mit Schwangeren und kleinen Kindern für eine bestimmte Zeit und das Trinken von viel Wasser zur Ausscheidung des Radiotracers.",
            third:
              "Nach der Untersuchung sollten Sie für 24 Stunden engen Kontakt mit Schwangeren und kleinen Kindern vermeiden, um die Strahlenexposition zu minimieren.",
            fourth:
              "Trinken Sie viel Wasser nach der Untersuchung, um den Radiotracer schneller aus Ihrem Körper auszuspülen.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, wie und wann der Patient die Ergebnisse der Untersuchung erhält, und dass ein Folgetermin zur Besprechung der Ergebnisse vereinbart wird.",
            third:
              "Die Auswertung der Bilder kann einige Tage in Anspruch nehmen. Wir vereinbaren einen Termin, um die Ergebnisse mit Ihnen zu besprechen.",
            fourth:
              "Sie werden die Ergebnisse von Ihrem behandelnden Arzt erhalten, der dann die nächsten Schritte mit Ihnen bespricht.",
          },
        ],
      },
      // 3tab 45
      {
        id: 45,
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
              "Erklären Sie dem Kollegen, dass es sich bei der PET-CT um eine kombinierte bildgebende Untersuchung handelt, die sowohl funktionelle als auch anatomische Informationen liefert.",
            third:
              "Die PET-CT kombiniert die metabolischen Daten der Positronen-Emissions-Tomographie mit den detaillierten anatomischen Bildern der Computertomographie.",
            fourth:
              "Bei der PET-CT wird ein Radiotracer verwendet, um Stoffwechselaktivitäten im Körper sichtbar zu machen und diese mit der anatomischen Bildgebung der CT zu kombinieren.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Beschreiben Sie, dass die PET-CT zur Diagnose und Beurteilung von Krebs, neurologischen Erkrankungen und Herzkrankheiten verwendet wird, indem sie metabolische Aktivitäten und anatomische Strukturen sichtbar macht.",
            third:
              "Mit der PET-CT können wir Tumore, Metastasen, neurologische Erkrankungen wie Alzheimer und kardiale Erkrankungen wie Myokardvitalität untersuchen.",
            fourth:
              "Die PET-CT ist besonders hilfreich bei der Detektion und Beurteilung der metabolischen Aktivität von Krebszellen sowie bei der Diagnose von entzündlichen und neurologischen Erkrankungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Diskutieren Sie typische Befunde wie Tumorlokalisation, -größe und -aktivität, Metastasen, entzündliche Prozesse oder neurologische Anomalien, die durch die PET-CT identifiziert werden können.",
            third:
              "Ein positives PET-CT-Ergebnis kann uns genaue Informationen über die Größe und Lokalisation eines Tumors sowie das Vorhandensein von Metastasen geben.",
            fourth:
              "Die Untersuchungsergebnisse zeigen erhöhte Stoffwechselaktivität in den Lymphknoten, was auf eine mögliche Metastasierung hindeutet.",
          },
          {
            first: "Indikationen",
            second:
              "Erläutern Sie, dass Indikationen für eine PET-CT unter anderem die Staging und Restaging von Krebs, die Beurteilung von Therapieantworten, die Diagnose von Demenzerkrankungen und die Evaluierung von Myokardvitalität sind.",
            third:
              "Eine PET-CT ist indiziert bei Patienten mit Lungenkrebs zur Beurteilung der Tumorausbreitung und zur Überprüfung des Ansprechens auf die Therapie.",
            fourth:
              "Bei Patienten mit unklaren neurologischen Symptomen kann eine PET-CT helfen, eine Demenz vom Alzheimer-Typ von anderen Demenzformen zu unterscheiden.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Besprechen Sie Kontraindikationen wie Schwangerschaft, Stillzeit, bekannte Allergien gegen Kontrastmittel und schwere Niereninsuffizienz.",
            third:
              "Schwangere sollten keine PET-CT-Untersuchung erhalten, da die Strahlenexposition das ungeborene Kind schädigen könnte.",
            fourth:
              "Patienten mit einer bekannten Allergie gegen Kontrastmittel müssen sorgfältig überwacht werden, und alternative Untersuchungen sollten in Betracht gezogen werden.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erörtern Sie, wie die PET-CT hilft, zwischen verschiedenen Krankheitsbildern zu differenzieren, z.B. zwischen malignen und benignen Tumoren oder zwischen Alzheimer und anderen Demenzformen.",
            third:
              "Die PET-CT ermöglicht es uns, maligne von benignen Tumoren zu unterscheiden, indem sie die unterschiedliche Stoffwechselaktivität der Gewebe sichtbar macht.",
            fourth:
              "Bei Verdacht auf Alzheimer kann die PET-CT helfen, diese Diagnose von anderen Formen der Demenz zu unterscheiden, basierend auf spezifischen Stoffwechselmustern im Gehirn.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Diskutieren Sie, wie die Ergebnisse der PET-CT zur Planung und Anpassung von Behandlungsstrategien beitragen können, einschließlich Operation, Strahlentherapie oder Chemotherapie.",
            third:
              "Die Ergebnisse der PET-CT können uns helfen, die Notwendigkeit einer chirurgischen Entfernung eines Tumors besser zu beurteilen und den Operationsumfang zu planen.",
            fourth:
              "Anhand der PET-CT-Ergebnisse können wir die Wirksamkeit der aktuellen Chemotherapie beurteilen und gegebenenfalls das Behandlungsschema anpassen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit Radiologen, Nuklearmedizinern, Onkologen, Neurologen und Kardiologen für die optimale Nutzung der PET-CT-Ergebnisse.",
            third:
              "Eine enge Zusammenarbeit zwischen Onkologen und Radiologen ist entscheidend, um die PET-CT-Ergebnisse optimal zu interpretieren und in die Behandlungsplanung einzubeziehen.",
            fourth:
              "Für eine umfassende Versorgung ist es wichtig, dass wir mit Nuklearmedizinern und Kardiologen zusammenarbeiten, um die Ergebnisse der PET-CT richtig zu interpretieren und anzuwenden.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erklären Sie Maßnahmen zur Sicherstellung der Qualität und Genauigkeit der PET-CT-Untersuchungen, einschließlich regelmäßiger Kalibrierung der Geräte und Schulung des medizinischen Personals.",
            third:
              "Um die Qualität unserer PET-CT-Untersuchungen zu gewährleisten, führen wir regelmäßige Kalibrierungen der Geräte durch und stellen sicher, dass unser Personal gut geschult ist.",
            fourth:
              "Qualitätskontrollen und regelmäßige Wartung der PET-CT-Geräte sind unerlässlich, um konsistente und genaue Ergebnisse zu gewährleisten.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Besprechen Sie die Notwendigkeit einer sorgfältigen Dokumentation der Untersuchungsergebnisse und die Bedeutung einer lückenlosen Weiterverfolgung zur Überprüfung des Behandlungserfolgs.",
            third:
              "Die detaillierte Dokumentation der PET-CT-Befunde ist wichtig für die Weiterverfolgung und Planung der Therapie. Wir sollten sicherstellen, dass alle Befunde klar und präzise festgehalten werden.",
            fourth:
              "Eine gründliche Dokumentation und regelmäßige Nachuntersuchungen sind entscheidend, um den Fortschritt der Behandlung zu überwachen und gegebenenfalls Anpassungen vorzunehmen.",
          },
        ],
      },
      // 4tab 46
      {
        id: 46,
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
              "45-jähriger Patient klagt über anhaltende Kopfschmerzen und Sehstörungen. Vorgeschichte einer Epilepsie.",
            fourth:
              "30-jährige Patientin berichtet von periodischer Taubheit in den Extremitäten und Ermüdung. Familiengeschichte neurologischer Erkrankungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "PET-CT des Gehirns zeigt eine gleichmäßige Radiotracer-Verteilung ohne Anomalien, keine Anzeichen pathologischer Veränderungen.",
            third:
              "PET-CT zeigt eine erhöhte Aufnahme des Radiotracers im linken Frontallappen, korrespondierend mit einer 2 cm großen, kontrastmittelaufnehmenden Masse.",
            fourth:
              "PET-CT offenbart mehrere Areale mit verringerter Radiotracer-Aufnahme, die periventrikulär verteilt sind, korrespondierend mit demyelinisierenden Läsionen.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das PET-CT-Ergebnis unterstützt den Ausschluss neurologischer Erkrankungen.",
            third:
              "Der Befund deutet auf einen Glioblastom hin. Die Lokalisation und der erhöhte Metabolismus korrelieren mit den neurologischen Symptomen des Patienten.",
            fourth:
              "Die Verteilung und das Erscheinungsbild der Läsionen sind typisch für Multiple Sklerose. Zusammenhang mit den klinischen Symptomen und typischen demyelinisierenden Veränderungen.",
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
              "Diagnose eines Glioblastoms basierend auf PET-CT-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Multipler Sklerose aufgrund der PET-CT-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Radiotracer-Verteilung ohne Auffälligkeiten in allen Sequenzen.",
            third:
              "PET-CT-Aufnahmen zeigen eine deutlich abgegrenzte Region mit hoher Radiotracer-Aufnahme im linken Frontallappen.",
            fourth:
              "PET-CT-Bilder zeigen multiple Regionen mit verringerter Radiotracer-Aufnahme, charakteristisch für demyelinisierende Läsionen bei MS.",
          },
          {
            first: "Fallabschluss",
            second:
              "Es ist zu empfehlen, weiterhin regelmäßige Gesundheitschecks durchzuführen, um den aktuellen Gesundheitszustand zu überwachen.",
            third:
              "Wir empfehlen eine sofortige Überweisung an die Neurochirurgie zur Planung der Resektion. Zusätzlich ist eine anschließende Radiotherapie und gegebenenfalls eine Chemotherapie zu erwägen.",
            fourth:
              "Es ist zu empfehlen, eine immunmodulatorische Therapie zu beginnen und regelmäßige neurologische Kontrolluntersuchungen durchzuführen.",
          },
        ],
      },
      // 5tab 47
      {
        id: 47,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Positronen-Emissions-Tomographie kombiniert mit Computertomographie (PET-CT) Gerät ist ein hochentwickeltes medizinisches Bildgebungsgerät, das sowohl detaillierte anatomische als auch funktionelle Bilder des Körpers erstellt. Hier sind die wesentlichen Komponenten und Funktionen eines PET-CT-Geräts:",
        text_list: [
          {
            bold: "Gantry :",
            other:
              "Der ringförmige Teil des PET-CT-Geräts, der sowohl die Röntgenröhre für die CT als auch die Detektoren für die PET enthält. Er kann sich um den Patienten drehen, um aus verschiedenen Winkeln Bilder zu erstellen.",
          },
          {
            bold: "Röntgenröhre :",
            other:
              "Erzeugt die Röntgenstrahlen für die CT-Komponente des Geräts. Diese Strahlen durchdringen den Körper des Patienten und ermöglichen die Erstellung detaillierter anatomischer Bilder. Die Röntgenröhre ist im Gantry montiert und bewegt sich während der Untersuchung um den Patienten herum.",
          },
          {
            bold: "PET-Detektoren :",
            other:
              "Erfassen die Positronen, die vom injizierten Radiotracer emittiert werden, nachdem sie mit Elektronen im Körper des Patienten kollidiert sind. Diese Detektoren wandeln die Strahlung in elektrische Signale um, die dann zu Bildern verarbeitet werden.",
          },
          {
            bold: "CT-Detektoren :",
            other:
              "Befinden sich gegenüber der Röntgenröhre im Gantry. Sie erfassen die Röntgenstrahlen, die durch den Körper des Patienten hindurchgehen, und wandeln sie in elektrische Signale um.",
          },
          {
            bold: "Patiententisch :",
            other:
              "Ein motorisierter Tisch, der horizontal in den Gantry hinein- und herausgefahren werden kann. Der Patient liegt während der gesamten Untersuchung auf diesem Tisch, der sich präzise bewegt, um die verschiedenen Körperregionen zu scannen.",
          },
          {
            bold: "Arbeitsstation :",
            other:
              "Besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder angezeigt und analysiert werden. Der Radiologe oder der radiologische Technologe steuert von hier aus die Untersuchung, verarbeitet die Bilddaten und interpretiert die Ergebnisse.",
          },
          {
            bold: "Kontrastmittelinjektor :",
            other:
              "Wird häufig verwendet, um Kontrastmittel intravenös zu verabreichen. Dies verbessert die Sichtbarkeit bestimmter Strukturen oder Pathologien im Körper während der CT-Komponente der Untersuchung.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Ermöglicht dem Technologen, das PET-CT-Gerät zu bedienen, Untersuchungseinstellungen vorzunehmen und den Scanning-Prozess zu überwachen. Hier werden auch Parameter wie Strahlendosis und Scanzeit eingestellt.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Notwendig, um die Röntgenröhre und die PET-Detektoren zu kühlen, da sie während der Erzeugung von Strahlung viel Wärme produzieren. Ein effektives Kühlsystem verhindert Überhitzung und gewährleistet die Zuverlässigkeit des Geräts.",
          },
          {
            bold: "Multidetektor-CT (MDCT) :",
            other:
              "Moderne PET-CT-Geräte sind oft als Multidetektor-CT konfiguriert, was bedeutet, dass sie mehrere Detektorreihen haben. Dies ermöglicht schnellere Scans und eine höhere Bildauflösung, wodurch sowohl die anatomische als auch die funktionelle Bildgebung verbessert wird.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben. Dies ist besonders wichtig, um sicherzustellen, dass der Patient still liegt und um eventuelle Fragen oder Unbehagen zu klären.",
          },
        ],
      },
      // 6tab 48
      {
        id: 48,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der PET-CT-Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "PET-CT :",
            other:
              "Ein bildgebendes Verfahren, das sowohl funktionelle als auch anatomische Informationen liefert.",
          },
          {
            bold: "Radiotracer :",
            other:
              "Eine schwach radioaktive Substanz, die in den Körper injiziert wird, um Stoffwechselprozesse sichtbar zu machen.",
          },
          {
            bold: "Metabolische Aktivität :",
            other:
              "Die biochemischen Prozesse, die in Zellen und Geweben ablaufen, oft erhöht in Tumorzellen.",
          },
          {
            bold: "Anatomische Bildgebung :",
            other:
              "Darstellung der physischen Strukturen des Körpers durch Verfahren wie CT oder MRT.",
          },
          {
            bold: "Staging :",
            other:
              "Die Bestimmung des Ausmaßes und der Ausbreitung einer Krebserkrankung im Körper.",
          },
          {
            bold: "Restaging :",
            other:
              "Die Neubewertung des Krankheitsstadiums nach einer Behandlung.",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Eine Substanz, die vor der Bildgebung injiziert wird, um bestimmte Gewebe besser sichtbar zu machen.",
          },
          {
            bold: "Demyelinisierende Läsion :",
            other:
              "Schäden an der Myelinschicht von Nervenfasern, typisch für Erkrankungen wie Multiple Sklerose.",
          },
          {
            bold: "Hyperintens :",
            other:
              "Gebiete, die auf dem Bild heller erscheinen, oft aufgrund einer erhöhten Stoffwechselaktivität.",
          },
          {
            bold: "Hypointens :",
            other:
              "Gebiete, die auf dem Bild dunkler erscheinen, oft aufgrund einer verringerten Stoffwechselaktivität.",
          },
          {
            bold: "Glioblastom :",
            other:
              "Ein aggressiver Hirntumor, der oft in der PET-CT durch hohe metabolische Aktivität erkennbar ist.",
          },
          {
            bold: "Dawson-Finger :",
            other:
              "Charakteristische MRT-Befunde bei Multipler Sklerose, die fingerartige Projektionen von Läsionen entlang der Ventrikelwände zeigen.",
          },
          {
            bold: "Strahlenbelastung :",
            other:
              "Die Menge an Strahlung, der ein Patient während einer bildgebenden Untersuchung ausgesetzt ist.",
          },
          {
            bold: "Myokardvitalität :",
            other:
              "Die Lebensfähigkeit des Herzmuskels, oft untersucht bei Verdacht auf Herzinfarkt oder andere Herzkrankheiten.",
          },
          {
            bold: "Spezifität :",
            other:
              "Die Fähigkeit eines diagnostischen Tests, nur die Zielerkrankung zu identifizieren und keine falsch positiven Ergebnisse zu liefern.",
          },
          {
            bold: "Sensitivität :",
            other:
              "Die Fähigkeit eines diagnostischen Tests, auch bei geringer Krankheitslast positive Ergebnisse zu liefern, also keine falsch negativen Ergebnisse zu produzieren.",
          },
          {
            bold: "Nuklearmedizin :",
            other:
              "Ein medizinisches Fachgebiet, das radioaktive Substanzen für Diagnose und Therapie verwendet.",
          },
          {
            bold: "Follow-up :",
            other:
              "Die Nachsorge oder weitere Überwachung eines Patienten nach einer Diagnose oder Behandlung.",
          },

          {
            text: "Diese Begriffe bilden einen grundlegenden Wortschatz, der für die Fachsprache im Bereich der PET-CT-Diagnostik wichtig ist und können in einer Prüfungssituation nützlich sein.",
          },
        ],
      },
      // 6tab 49
      {
        id: 49,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "DocCheck Flexikon",
            other:
              "Diese Seite bietet umfassende Informationen zur Positronen-Emissions-Tomographie (PET) und PET-CT, einschließlich Funktionsprinzipien, Radionukliden und Anwendungsmöglichkeiten. URL: https://flexikon.doccheck.com/de/Positronenemissionstomographie",
          },
          {
            bold: "DocCheck Flexikon",
            other:
              "Informationen zu PSMA-PET/CT, einschließlich Definition, Hintergrund und Indikationen. URL: https://flexikon.doccheck.com/de/PSMA-PET/CT",
          },
          {
            bold: "Amboss",
            other:
              "Amboss ist ein medizinisches Nachschlagewerk für Studenten und Ärzte. Es bietet detaillierte Informationen zu verschiedenen medizinischen Themen, einschließlich PET-CT. URL: https://www.amboss.com/de",
          },
          {
            bold: "PraktischArzt",
            other:
              "Auf dieser Seite wird der Ablauf einer PET-CT-Untersuchung sowie deren Vorbereitung und typische Anwendungsgebiete erläutert. URL: https://www.praktischarzt.de/untersuchung/pet-ct/",
          },
          {
            bold: "Universitätsklinikum Freiburg",
            other:
              "Diese Seite bietet detaillierte Informationen zu den speziellen Aspekten und Anwendungen der PET-CT im klinischen Alltag. URL: https://ims.uniklinik-freiburg.de/de/leistungsangebot/nuklearmedizin/pet-ct.html",
          },
          {
            bold: "Stärker gegen Krebs",
            other:
              "Diese Webseite erklärt die Vorteile und Risiken der PET-CT, insbesondere in der Krebsdiagnostik. URL: https://www.staerkergegenkrebs.de/pet-ct/",
          },
          {
            bold: "Radiologie München",
            other:
              "Diese Seite bietet Informationen über die Durchführung von PET-CT-Untersuchungen und deren spezielle Anwendungen, wie z.B. beim Prostatakarzinom. URL: https://www.radiologie-muenchen.de/pet-ct/",
          },
          {
            bold: "Helios Gesundheit",
            other:
              "Hier wird erklärt, wie PET-CT-Untersuchungen zur Diagnose und Therapiekontrolle verwendet werden und welche Vorbereitungen dafür notwendig sind. URL: https://www.helios-gesundheit.de/",
          },
        ],
      },
      // 6tab 50
      {
        id: 50,
        title: "PDF",
        link: "https://drive.google.com/file/d/14aFKMVI0X9AmYn58UC4jIt0OcJpIbfdf/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 5
  // start of parent tab 6 Single-Photon-Emissions-Computertomographie (SPECT)
  {
    id: 6,
    title: "Single-Photon-Emissions-Computertomographie (SPECT)",
    checked: false,
    childTabs: [
      // 1tab 51
      {
        id: 51,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext: ",
                text: "Das Hauptziel der SPECT-Untersuchung ist es, funktionelle Informationen über Organe und Gewebe zu erhalten. Dies wird durch die Messung der Verteilung von radioaktiv markierten Substanzen im Körper erreicht.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche: ",
                text: "Die SPECT wird in zahlreichen medizinischen Bereichen eingesetzt, darunter die Kardiologie zur Bewertung der Myokardperfusion, die Neurologie zur Untersuchung von Hirnfunktionen und die Onkologie zur Detektion von Tumoren und Metastasen.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen: ",
                text: "SPECT basiert auf der Verabreichung von Radiopharmaka, die Gammastrahlen emittieren. Diese Strahlen werden von einem Gamma-Kamera-System erfasst, das um den Patienten rotiert, um dreidimensionale Bilder zu erstellen.",
              },
              {
                bold_text: "Technische Aspekte: ",
                text: "Die Hauptkomponenten einer SPECT-Anlage sind die Gamma-Kamera, die Kollimatoren zur Richtungsbestimmung der Strahlen, und ein Computer zur Bildrekonstruktion. Die Qualität der Bilder hängt von der Energie des Radiopharmakons und der Empfindlichkeit der Detektoren ab.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation: ",
                text: "Die Bilder werden von spezialisierten Ärzten analysiert, die die Verteilung des Radiopharmakons im Gewebe beurteilen. Dies ermöglicht Rückschlüsse auf die Funktion und mögliche Pathologien der untersuchten Organe.",
              },
              {
                bold_text: "Typische Befunde: ",
                text: "Typische Befunde umfassen Bereiche mit erhöhter oder verminderter Radiopharmakon-Anreicherung, die auf pathologische Veränderungen wie Tumoren, Durchblutungsstörungen oder neurologische Erkrankungen hinweisen können.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile: ",
                text: "SPECT bietet detaillierte funktionelle Informationen und kann pathologische Veränderungen frühzeitig erkennen. Es ist nicht invasiv und hat eine relativ geringe Strahlenbelastung.",
              },
              {
                bold_text: "Nachteile: ",
                text: "Zu den Nachteilen gehören die begrenzte räumliche Auflösung im Vergleich zu anderen bildgebenden Verfahren und die Notwendigkeit, Radiopharmaka zu verwenden, die spezielle Handhabung erfordern.",
              },
              {
                bold_text: "Risiken: ",
                text: "Die Risiken umfassen mögliche allergische Reaktionen auf das Radiopharmakon und eine geringe Strahlenexposition. Bei sachgemäßer Durchführung sind diese Risiken jedoch minimal.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung: ",
                text: "SPECT spielt eine zentrale Rolle in der Diagnostik und Therapieplanung, insbesondere bei kardiovaskulären und neurologischen Erkrankungen. Es unterstützt die Entscheidung über therapeutische Maßnahmen und die Überwachung des Behandlungserfolgs.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement: ",
                text: "Durch die Bereitstellung präziser funktioneller Informationen trägt SPECT wesentlich zur individuellen Patientenbetreuung und zur Optimierung von Behandlungsstrategien bei.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "Alternativen zur SPECT: ",
                text: "umfassen die Positronen-Emissions-Tomographie (PET), die eine höhere Empfindlichkeit bietet, und die Magnetresonanztomographie (MRT), die ohne Strahlenbelastung auskommt, aber keine funktionellen Informationen liefert.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse: ",
                text: "Aktuelle Forschung konzentriert sich auf die Verbesserung der Bildqualität und die Entwicklung neuer Radiopharmaka, die spezifischere diagnostische Informationen liefern können.",
              },
              {
                bold_text: "Zukünftige Perspektiven: ",
                text: "Zukünftige Entwicklungen zielen darauf ab, die SPECT-Technologie weiter zu verfeinern und ihre Anwendungen zu erweitern, insbesondere in der personalisierten Medizin und der präzisen Tumordiagnostik.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften: ",
                text: "Die SPECT ist ein unverzichtbares Werkzeug in der modernen Medizin, das funktionelle Bildgebung ermöglicht und eine entscheidende Rolle in der Diagnose und Behandlung spielt.",
              },
              {
                bold_text: "Gesamtbedeutung: ",
                text: "Insgesamt trägt die SPECT durch ihre Fähigkeit, detaillierte und spezifische Informationen über die Funktion von Organen und Geweben zu liefern, erheblich zur Verbesserung der medizinischen Versorgung und des Patientenmanagements bei.",
              },
            ],
          },
        ],
      },
      // 2tab 52
      {
        id: 52,
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
              "Erklären Sie dem Patienten, dass das Ziel der SPECT-Untersuchung darin besteht, funktionelle Informationen über Organe und Gewebe zu erhalten, um Krankheiten zu diagnostizieren und zu beurteilen.",
            third:
              "Wir möchten feststellen, wie gut Ihr Herzmuskel durchblutet wird.",
            fourth:
              "Die Untersuchung hilft uns, die Funktionsweise Ihres Gehirns bei Verdacht auf Epilepsie zu bewerten.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie den Patienten den Ablauf: Verabreichung eines radioaktiven Stoffes (Radiopharmakon), Wartezeit zur Verteilung im Körper, anschließende Aufnahme der Gammastrahlen mit der Gamma-Kamera, und die Dauer der Untersuchung.",
            third:
              "Nach der Injektion des Radiopharmakons warten wir etwa 30-60 Minuten, bevor die Kamera Bilder aufnimmt.",
            fourth:
              "Die gesamte Untersuchung dauert ungefähr zwei Stunden, einschließlich der Wartezeit nach der Injektion.",
          },
          {
            first: "Vorbereitung",
            second:
              "Informieren Sie den Patienten über die notwendigen Vorbereitungen: z.B. Nüchternheit vor der Untersuchung, Verzicht auf bestimmte Medikamente oder Lebensmittel, bequeme Kleidung.",
            third:
              "Bitte kommen Sie nüchtern zur Untersuchung und trinken Sie vorher nur Wasser.",
            fourth:
              "Vermeiden Sie koffeinhaltige Getränke 24 Stunden vor dem Termin.",
          },
          {
            first: "Risiken",
            second:
              "Erklären Sie mögliche Risiken, wie allergische Reaktionen auf das Radiopharmakon oder die geringe Strahlenbelastung, und betonen Sie, dass diese Risiken minimal sind.",
            third:
              "Es besteht ein sehr geringes Risiko einer allergischen Reaktion auf den radioaktiven Stoff.",
            fourth:
              "Die Strahlenbelastung ist vergleichbar mit einer Röntgenaufnahme und daher sehr gering.",
          },
          {
            first: "Vorteile",
            second:
              "Heben Sie die Vorteile hervor: detaillierte funktionelle Informationen, frühzeitige Erkennung von pathologischen Veränderungen, nicht-invasiv mit relativ geringer Strahlenbelastung.",
            third:
              "Wir erhalten genaue Informationen über die Funktion Ihres Organs, was uns bei der Diagnose hilft.",
            fourth:
              "Frühzeitige Erkennung von Durchblutungsstörungen kann lebensrettend sein.",
          },
          {
            first: "Alternativen",
            second:
              "Nennen Sie alternative Untersuchungsmethoden wie die Positronen-Emissions-Tomographie (PET) und die Magnetresonanztomographie (MRT).",
            third:
              "Eine Alternative wäre die PET-Untersuchung, die jedoch oft teurer und nicht überall verfügbar ist.",
            fourth:
              "Die MRT liefert anatomische Details, jedoch keine funktionellen Informationen wie die SPECT.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Besprechen Sie mögliche Kontraindikationen, z.B. Schwangerschaft, Stillzeit oder Allergien gegen das Radiopharmakon, und die Notwendigkeit, diese vor der Untersuchung zu klären.",
            third:
              "Bei einer Schwangerschaft sollten wir die Untersuchung verschieben oder eine Alternative prüfen.",
            fourth:
              "Falls Sie stillen, müssen wir spezielle Vorsichtsmaßnahmen treffen oder die Untersuchung verschieben.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie, welche Arten von Ergebnissen erwartet werden können, z.B. normale oder abnormale Verteilung des Radiopharmakons, und was diese für die Diagnose bedeuten könnten.",
            third:
              "Ein normales Ergebnis zeigt eine gleichmäßige Verteilung des Stoffes im Organ.",
            fourth:
              "Eine ungleichmäßige Verteilung könnte auf eine Durchblutungsstörung oder einen Tumor hinweisen.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Notwendigkeit des informierten Einverständnisses des Patienten, um sicherzustellen, dass er die Untersuchung und deren mögliche Risiken und Vorteile versteht.",
            third:
              "Ihre Zustimmung ist wichtig, damit wir sicherstellen können, dass Sie alle Aspekte der Untersuchung verstanden haben.",
            fourth:
              "Bitte stellen Sie sicher, dass Sie alle Fragen klären, bevor Sie das Einverständnisformular unterschreiben.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Beschreiben Sie den Prozess des Einholens der Einverständniserklärung: Aufklärungsgespräch, Zeit für Fragen des Patienten, schriftliche Zustimmung.",
            third:
              "Nach dem Gespräch haben Sie Zeit, alle Ihre Fragen zu stellen, bevor Sie das Formular unterschreiben.",
            fourth:
              "Wir werden Ihnen alle Details erklären und bitten Sie dann, Ihre Zustimmung schriftlich zu geben.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie abschließende Hinweise zur Untersuchung, z.B. Verhalten nach der Untersuchung, mögliche Nachwirkungen, und wann die Ergebnisse vorliegen.",
            third:
              "Trinken Sie nach der Untersuchung viel Wasser, um den radioaktiven Stoff schneller auszuscheiden.",
            fourth:
              "Vermeiden Sie intensive körperliche Aktivität für den Rest des Tages.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, wie und wann der Patient die Ergebnisse erhalten wird, und wer die Ergebnisse mit ihm besprechen wird.",
            third:
              "Die Ergebnisse werden innerhalb einer Woche vorliegen und Ihr Arzt wird sie mit Ihnen besprechen.",
            fourth:
              "Nach der Untersuchung vereinbaren wir einen Termin, um die Ergebnisse gemeinsam zu besprechen.",
          },
        ],
      },
      // 3tab 53
      {
        id: 53,
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
              "Erläutern Sie kurz, dass die Single-Photon-Emissions-Computertomographie (SPECT) eine nuklearmedizinische Bildgebungstechnik ist, die zur Erfassung funktioneller Informationen über Organe und Gewebe verwendet wird.",
            third:
              "Die SPECT ist eine nuklearmedizinische Technik, die Gammastrahlen verwendet, um dreidimensionale Bilder der Verteilung eines Radiopharmakons im Körper zu erstellen.",
            fourth:
              "Mit SPECT können wir die Funktion von Organen wie dem Herz und dem Gehirn durch die Verteilung eines injizierten radioaktiven Stoffes bildlich darstellen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Beschreiben Sie, dass SPECT zur Untersuchung von Durchblutungsstörungen des Herzens, Hirnfunktionen, Tumoren und anderen pathologischen Veränderungen verwendet wird.",
            third:
              "Wir nutzen SPECT zur Beurteilung der Myokardperfusion bei Verdacht auf koronare Herzkrankheit.",
            fourth:
              "SPECT wird auch zur Analyse der Hirnaktivität bei Patienten mit Epilepsie eingesetzt.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Diskutieren Sie, wie die Ergebnisse interpretiert werden, z.B. normale oder abnormale Verteilung des Radiopharmakons, und was diese Ergebnisse diagnostisch bedeuten.",
            third:
              "Eine homogene Verteilung des Radiopharmakons im Herz deutet auf eine normale Durchblutung hin.",
            fourth:
              "Fokale Anreicherungen im Gehirn könnten auf epileptische Aktivität oder einen Tumor hinweisen.",
          },
          {
            first: "Indikationen",
            second:
              "Erklären Sie, welche klinischen Fragestellungen die SPECT rechtfertigen, z.B. Ischämie-Diagnostik bei koronaren Herzkrankheiten, Diagnose und Verlaufskontrolle bei Epilepsie und Demenz.",
            third:
              "Indikationen für eine SPECT sind unter anderem die Ischämie-Diagnostik und die Evaluation der Myokardvitalität.",
            fourth:
              "Bei Verdacht auf Demenz kann SPECT zur Differenzierung zwischen Alzheimer und anderen Demenzformen beitragen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Nennen Sie mögliche Kontraindikationen wie Schwangerschaft, Stillzeit oder bekannte Allergien gegen das Radiopharmakon.",
            third:
              "Schwangerschaft ist eine Kontraindikation aufgrund der Strahlenbelastung.",
            fourth:
              "Bekannte Allergien gegen das verwendete Radiopharmakon stellen ebenfalls eine Kontraindikation dar.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren Sie mögliche Differenzialdiagnosen, die anhand der SPECT-Befunde abgeklärt werden können, z.B. Differenzierung zwischen ischämischen und nicht-ischämischen Herzerkrankungen.",
            third:
              "Bei der Myokard-SPECT können wir zwischen ischämischer und nicht-ischämischer Kardiomyopathie unterscheiden.",
            fourth:
              "Bei neurologischen SPECT-Untersuchungen können wir epileptische Herde von anderen Hirnpathologien abgrenzen.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen Sie, wie die SPECT-Ergebnisse in die Erstellung und Anpassung von Behandlungsplänen einfließen, z.B. Entscheidung über Revaskularisationsmaßnahmen oder antiepileptische Therapien.",
            third:
              "Basierend auf den SPECT-Ergebnissen kann entschieden werden, ob eine Koronarangioplastie notwendig ist.",
            fourth:
              "Die Identifikation epileptischer Herde mittels SPECT kann die Wahl der antiepileptischen Therapie beeinflussen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Notwendigkeit der Zusammenarbeit mit anderen Fachdisziplinen wie Radiologie, Neurologie, Kardiologie und Onkologie für eine umfassende Diagnose und Therapie.",
            third:
              "Die enge Zusammenarbeit mit Kardiologen ist essenziell, um die SPECT-Ergebnisse korrekt zu interpretieren und therapeutische Maßnahmen einzuleiten.",
            fourth:
              "Neurologen und Nuklearmediziner arbeiten zusammen, um die besten Behandlungsstrategien für Patienten mit Epilepsie zu entwickeln.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erläutern Sie Maßnahmen zur Sicherstellung der Qualität der SPECT-Untersuchungen, z.B. regelmäßige Kalibrierung der Geräte, Schulung des Personals und Einhaltung von Protokollen.",
            third:
              "Regelmäßige Kalibrierung der Gamma-Kameras ist notwendig, um eine hohe Bildqualität zu gewährleisten.",
            fourth:
              "Das Personal wird kontinuierlich geschult, um sicherzustellen, dass die Protokolle und Sicherheitsstandards eingehalten werden.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Beschreiben Sie die Bedeutung einer sorgfältigen Dokumentation der Untersuchungsergebnisse und die Notwendigkeit der Nachverfolgung, um die Behandlungserfolge zu überwachen und weitere diagnostische Schritte zu planen.",
            third:
              "Eine detaillierte Dokumentation der SPECT-Ergebnisse ist wichtig, um den Verlauf der Therapie zu überwachen.",
            fourth:
              "Die Ergebnisse werden im Patientenakte dokumentiert und mit den behandelnden Ärzten besprochen, um die nächsten Schritte zu planen.",
          },
        ],
      },
      // 4tab 54
      {
        id: 54,
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
              "40-jähriger Patient ohne Beschwerden, Routineuntersuchung zur Herzgesundheit.",
            third:
              "55-jähriger Patient klagt über Brustschmerzen und Kurzatmigkeit bei Belastung. Vorgeschichte eines Bluthochdrucks.",
            fourth:
              "70-jährige Patientin berichtet über zunehmende Gedächtnisstörungen und Orientierungslosigkeit. Familiengeschichte mit Alzheimer.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "SPECT-Bilder zeigen eine homogene Perfusion ohne Anzeichen von Minderdurchblutung oder pathologischen Veränderungen.",
            third:
              "SPECT zeigt eine reduzierte Perfusion im anterioren Bereich des linken Ventrikels, besonders bei Belastung.",
            fourth:
              "SPECT zeigt eine verminderte Aktivität im parietalen und temporalen Kortex.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; die Ergebnisse bestätigen eine normale Herzfunktion.",
            third:
              "Der Befund deutet auf eine myokardiale Ischämie hin, die mit den Symptomen des Patienten übereinstimmt.",
            fourth:
              "Die Befunde sind typisch für Alzheimer und korrelieren mit den klinischen Symptomen der Patientin.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer möglichen koronaren Intervention wie Angioplastie oder Bypass-Operation.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer cholinesterasehemmenden Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Herzens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose einer myokardialen Ischämie basierend auf SPECT-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Alzheimer aufgrund der SPECT-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmietel",
            second:
              "Homogene Perfusion in allen Bereichen des Herzens, keine Auffälligkeiten sichtbar.",
            third:
              "SPECT-Bilder zeigen eine deutliche Minderdurchblutung im belasteten Zustand im anterioren Bereich des linken Ventrikels.",
            fourth:
              "SPECT-Bilder zeigen eine diffuse Hypoperfusion im parietalen und temporalen Kortex, typisch für Alzheimer.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen eine jährliche Routinekontrolle zur Überwachung der Herzgesundheit. Der Patient sollte weiterhin einen gesunden Lebensstil pflegen, um das Risiko von Herzkrankheiten zu minimieren.",
            third:
              "Wir empfehlen eine koronare Angiographie zur weiteren Abklärung und gegebenenfalls interventionelle Maßnahmen. Regelmäßige Nachuntersuchungen sind ebenfalls wichtig.",
            fourth:
              "Es ist zu empfehlen, eine neuropsychologische Testung und eine langfristige Therapieplanung in Erwägung zu ziehen. Regelmäßige kognitive Tests zur Überwachung des Fortschreitens der Erkrankung sind notwendig.",
          },
        ],
      },
      // 5tab 55
      {
        id: 55,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Single-Photon-Emissions-Computertomographie (SPECT) Gerät ist ein fortschrittliches medizinisches Bildgebungsgerät, das detaillierte dreidimensionale Bilder der funktionellen Prozesse im Körper erstellt. Hier sind die wesentlichen Komponenten und Funktionen eines SPECT-Geräts:",
        text_list: [
          {
            bold: "Gantry: ",
            other:
              "Ist der ringförmige Teil des SPECT-Geräts, der die Gamma-Kameras und Kollimatoren enthält. Er kann sich um den Patienten drehen, um aus verschiedenen Winkeln Bilder zu erstellen.",
          },
          {
            bold: "Gamma-Kamera: ",
            other:
              "Erfasst die von den Radiopharmaka emittierten Gammastrahlen. Sie ist im Gantry montiert und bewegt sich während der Untersuchung um den Patienten herum.",
          },
          {
            bold: "Kollimatoren: ",
            other:
              "Sind vor den Detektoren angeordnet und filtern die eintreffenden Gammastrahlen, um nur diejenigen durchzulassen, die aus bestimmten Winkeln kommen. Dies verbessert die Bildqualität.",
          },
          {
            bold: "Radiopharmakon: ",
            other:
              "Ein radioaktives Medikament, das in den Körper des Patienten injiziert wird und sich in bestimmten Organen oder Geweben ansammelt, je nach diagnostischer Fragestellung.",
          },
          {
            bold: "Patiententisch: ",
            other:
              "Ist motorisiert und kann horizontal in den Gantry hinein- und herausgefahren werden. Der Patient liegt während der Untersuchung auf diesem Tisch.",
          },
          {
            bold: "Arbeitsstation: ",
            other:
              "Besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder angezeigt und analysiert werden. Der Radiologe oder der radiologische Technologe steuert von hier aus die Untersuchung.",
          },
          {
            bold: "Steuerkonsole: ",
            other:
              "Ermöglicht dem Technologen, das SPECT-Gerät zu bedienen, Untersuchungseinstellungen vorzunehmen und den Scanning-Prozess zu überwachen.",
          },
          {
            bold: "Kühlungssystem: ",
            other:
              "Ist notwendig, um die elektronischen Komponenten und insbesondere die Gamma-Kameras zu kühlen, da sie während der Erfassung der Gammastrahlen Wärme produzieren.",
          },
          {
            bold: "Multidetektor-SPECT (MDSPECT): ",
            other:
              "Moderne SPECT-Geräte sind oft als Multidetektor-SPECT (MDSPECT) konfiguriert, was bedeutet, dass sie mehrere Detektorreihen haben. Dies ermöglicht schnellere Scans und eine höhere Bildauflösung.",
          },
          {
            bold: "Sprachkommunikationssystem: ",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben.",
          },
          {
            bold: "Bildrekonstruktionssoftware: ",
            other:
              "Wandelt die erfassten Gammastrahlendaten in dreidimensionale Bilder um, die vom Radiologen zur Diagnose und Planung von Behandlungen verwendet werden.",
          },
          {
            bold: "Strahlenschutzvorrichtungen: ",
            other:
              "Gewährleisten die Sicherheit des medizinischen Personals und des Patienten, indem sie die Strahlenbelastung minimieren.",
          },
          {
            bold: "Kalibrierungswerkzeuge: ",
            other:
              "Werden verwendet, um die Genauigkeit und Präzision der Gamma-Kameras und anderer Komponenten regelmäßig zu überprüfen und sicherzustellen.",
          },
        ],
      },
      // 6tab 56
      {
        id: 56,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der SPECT-Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "Single-Photon-Emissions-Computertomographie (SPECT): ",
            other:
              "Ein bildgebendes Verfahren in der Nuklearmedizin zur Darstellung der funktionellen Informationen von Organen.",
          },
          {
            bold: "Nuklearmedizin: ",
            other:
              "Ein medizinisches Fachgebiet, das radioaktive Substanzen zur Diagnose und Therapie verwendet.",
          },
          {
            bold: "Radiopharmakon: ",
            other:
              "Ein radioaktives Medikament, das in den Körper injiziert wird, um spezifische Organe oder Gewebe zu visualisieren.",
          },
          {
            bold: "Gamma-Kamera: ",
            other:
              "Ein Gerät, das die von den Radiopharmaka emittierten Gammastrahlen erfasst und Bilder erstellt.",
          },
          {
            bold: "Kollimator: ",
            other:
              "Ein Gerät, das die Richtung der eintreffenden Strahlung bestimmt, um präzisere Bilder zu erhalten.",
          },
          {
            bold: "Bildrekonstruktion: ",
            other:
              "Der Prozess der Umwandlung der gesammelten Daten in diagnostische Bilder.",
          },
          {
            bold: "Funktionelle Bildgebung: ",
            other:
              "Bildgebung, die Informationen über die Funktion von Organen und Geweben liefert, nicht nur deren Struktur.",
          },
          {
            bold: "Strahlenbelastung: ",
            other:
              "Die Menge an ionisierender Strahlung, der ein Patient während einer Untersuchung ausgesetzt ist.",
          },
          {
            bold: "Isotop: ",
            other:
              "Eine Variante eines chemischen Elements, die durch eine unterschiedliche Anzahl von Neutronen im Kern gekennzeichnet ist.",
          },
          {
            bold: "Tracer: ",
            other:
              "Ein radioaktiver Marker, der im Körper verteilt wird, um spezifische physiologische Prozesse sichtbar zu machen.",
          },
          {
            bold: "Wartezeit: ",
            other:
              "Die Zeit, die benötigt wird, damit sich das Radiopharmakon im Körper verteilt.",
          },
          {
            bold: "Kontrastmittel: ",
            other:
              "Eine Substanz, die verwendet wird, um die Sichtbarkeit von Strukturen oder Flüssigkeiten im Körper zu erhöhen.",
          },
          {
            bold: "Protokoll: ",
            other:
              "Eine Reihe von Anweisungen und Verfahren zur Durchführung der SPECT-Untersuchung.",
          },
          {
            bold: "Kalibrierung: ",
            other:
              "Die Justierung der Gamma-Kamera und anderer Geräte, um genaue Messungen zu gewährleisten.",
          },
          {
            bold: "Myokardperfusion: ",
            other:
              "Die Durchblutung des Herzmuskels, die mit SPECT untersucht werden kann.",
          },
          {
            bold: "Hirnfunktionsanalyse: ",
            other:
              "Die Untersuchung der Aktivität und Durchblutung des Gehirns mithilfe von SPECT.",
          },
          {
            bold: "Tumordetektion: ",
            other:
              "Die Erkennung von Tumoren durch die Visualisierung abnormer Zellaktivitäten.",
          },
          {
            bold: "Epilepsie-Diagnostik: ",
            other:
              "Die Untersuchung und Identifizierung epileptischer Herde im Gehirn mittels SPECT.",
          },
          {
            bold: "Alzheimer-Diagnose: ",
            other:
              "Die Diagnose der Alzheimer-Krankheit durch die Visualisierung charakteristischer Hirnveränderungen.",
          },
          {
            bold: "Koronare Intervention: ",
            other:
              "Therapeutische Maßnahmen zur Behandlung von Herzkrankheiten, die auf SPECT-Befunden basieren können.",
          },
          {
            bold: "Angioplastie: ",
            other:
              "Ein Verfahren zur Erweiterung verengter Blutgefäße im Herzen.",
          },
        ],
      },
      // 6tab 57
      {
        id: 57,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "NetDoktor: ",
            other:
              "Beschreibung der SPECT, ihrer Anwendung und der Durchführung der Untersuchung. [NetDoktor SPECT] https://www.netdoktor.de/diagnostik/spect/)",
          },
          {
            bold: "Apotheken Umschau: ",
            other:
              "Informationen zur Funktionsweise und zu den Anwendungsgebieten der SPECT. [Apotheken Umschau SPECT] https://www.apotheken-umschau.de/diagnose/spect)",
          },
          {
            bold: "Welt der Physik: ",
            other:
              "Überblick über die Diagnosemethoden PET und SPECT in der Nuklearmedizin. [Welt der Physik SPECT] https://www.weltderphysik.de/thema/hinter-den-dingen/pet-und-spect-diagnose-in-der-nuklearmedizin/)",
          },
          {
            bold: "Universitätsklinikum Münster: ",
            other:
              "Details zu SPECT und SPECT-CT, einschließlich der Forschungsschwerpunkte und Weiterbildungsmöglichkeiten. [UKM SPECT] https://web.ukm.de/nuklearmedizin/spect-und-spect-ct/)",
          },
          {
            bold: "Miomedi: ",
            other:
              "Erklärung der Funktionsweise, Anwendungsgebiete und Risiken der SPECT. [Miomedi SPECT] https://www.miomedi.de/diagnostik/spect/)",
          },
          {
            bold: "MedLexi: ",
            other:
              "Beschreibung der Einzelphotonen-Emissionscomputertomographie, ihrer Funktion und ihrer Ziele. [MedLexi SPECT] https://www.medlexi.de/Einzelphotonen-Emissionscomputertomographie)",
          },
        ],
      },
      // 6tab 58
      {
        id: 58,
        title: "PDF",
        link: "https://drive.google.com/file/d/15ZP4ZU52B5aum3KCNZ5uqzlgAUgYkEl1/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 6
  // start of parent tab 7 Breischluck
  {
    id: 7,
    title: "Breischluck",
    checked: false,
    childTabs: [
      // 1tab 59
      {
        id: 59,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Der Breischluck-Test wird durchgeführt, um die Funktion und Anatomie der Speiseröhre und des oberen Magen-Darm-Trakts zu beurteilen. Ziel ist es, strukturelle oder funktionelle Anomalien zu identifizieren, die zu Symptomen wie Dysphagie, Regurgitation oder chronischem Husten führen können.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Der Breischluck-Test ist relevant in der Diagnostik von Erkrankungen wie Achalasie, gastroösophagealem Reflux, Ösophagusstrikturen und Tumoren. Er wird häufig in der gastroenterologischen und HNO-Diagnostik eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Der Breischluck-Test basiert auf der Röntgenfluoroskopie, bei der der Patient eine Kontrastmittelhaltige Flüssigkeit (Barium) trinkt. Das Barium ermöglicht es, die Konturen und Bewegungen der Speiseröhre und des Magens auf Röntgenbildern sichtbar zu machen.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Technisch erfordert der Test die Verwendung eines Röntgenfluoroskops sowie eines Bariumbrei-Kontrastmittels. Der Patient trinkt das Barium, während kontinuierliche Röntgenaufnahmen gemacht werden, um die Passage des Kontrastmittels durch den oberen Gastrointestinaltrakt zu visualisieren.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung erfolgt durch einen Radiologen, der die Aufnahmen auf Abnormalitäten wie Stenosen, Divertikel, Motilitätsstörungen oder Tumore untersucht. Die dynamische Beurteilung der Kontrastmittelpassage ist dabei von zentraler Bedeutung.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde können eine verzögerte Kontrastmittelpassage bei Achalasie, retrosternale Füllungsdefekte bei Tumoren oder Refluxphänomene bei gastroösophagealem Reflux umfassen.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Ein wesentlicher Vorteil des Breischluck-Verfahrens liegt in seiner Nicht-Invasivität. Es ermöglicht die Beurteilung von Schluckstörungen, ohne dass invasive Maßnahmen erforderlich sind. Ein weiterer Vorteil ist die Möglichkeit der Echtzeit-Beobachtung der Schluckfunktion. Dies erlaubt es dem Radiologen, die dynamischen Prozesse während des Schluckakts direkt zu sehen und zu beurteilen. Zudem weist das Breischluck-Verfahren eine hohe diagnostische Genauigkeit für bestimmte Pathologien auf, was es zu einem wertvollen Instrument in der Diagnostik macht.",
              },
              {
                bold_text: "Nachteile:",
                text: "Trotz der vielen Vorteile hat das Breischluck-Verfahren auch einige Nachteile. Einer der Hauptnachteile ist die Strahlenexposition, die mit jeder Röntgenuntersuchung einhergeht. Dies ist besonders bei wiederholten Untersuchungen von Bedeutung. Ein weiterer Nachteil ist die Einschränkung bei Patienten mit Kontrastmittelallergien, da das Verfahren die Verabreichung eines bariumsulfathaltigen Kontrastmittels erfordert.",
              },
              {
                bold_text: "Risiken:",
                text: "Die Risiken des Breischluck-Verfahrens umfassen in erster Linie die Strahlenbelastung, die zwar relativ gering ist, aber dennoch berücksichtigt werden muss, insbesondere bei Patienten, die häufig untersucht werden müssen. Ein weiteres Risiko ist die mögliche Aspiration des Kontrastmittels, was zu Komplikationen wie einer Aspirationspneumonie führen kann. Darüber hinaus können bei einigen Patienten Unverträglichkeiten gegenüber dem Kontrastmittel auftreten, was zu Nebenwirkungen oder allergischen Reaktionen führen kann.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Der Breischluck-Test spielt eine wichtige Rolle in der Diagnose und Differenzialdiagnose von Erkrankungen des oberen Gastrointestinaltrakts. Er liefert entscheidende Informationen, die die weitere Therapieplanung beeinflussen können.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch die Identifikation von pathologischen Veränderungen kann der Breischluck-Test die Wahl der geeigneten therapeutischen Maßnahmen und das Management des Patienten wesentlich beeinflussen.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen gehören die Ösophagogastroduodenoskopie (ÖGD), die hochauflösende Manometrie und die pH-Metrie. Jede dieser Methoden hat ihre spezifischen Indikationen und Vorteile.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Neuere Studien befassen sich mit der Verbesserung der Bildqualität und der Reduktion der Strahlenbelastung durch neue Technologien. Zudem wird die Rolle des Breischluck-Tests in der Beurteilung von Patienten nach bariatrischen Operationen untersucht.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten den Einsatz von MRT-Kontrastmitteln anstelle von Barium umfassen, um die Strahlenbelastung weiter zu reduzieren und die diagnostische Genauigkeit zu erhöhen.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Der Breischluck-Test ist ein zentrales diagnostisches Werkzeug in der Gastroenterologie, das eine nicht-invasive Beurteilung der Anatomie und Funktion des oberen Magen-Darm-Trakts ermöglicht. Er bietet klare Vorteile, birgt jedoch auch gewisse Risiken und Einschränkungen.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Insgesamt ist der Breischluck-Test ein unverzichtbares Verfahren in der klinischen Diagnostik, das essenzielle Informationen für die Diagnose und das Management von Patienten mit gastrointestinalen Beschwerden liefert.",
              },
            ],
          },
        ],
      },
      // 2tab 60
      {
        id: 60,
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
              "Erläutern, dass der Breischluck-Test durchgeführt wird, um die Struktur der Speiseröhre und des oberen Magen-Darm-Trakts zu beurteilen und strukturelle oder funktionelle Anomalien zu identifizieren.",
            third:
              "Wir führen diesen Test durch, um herauszufinden, ob es Probleme mit Ihrer Speiseröhre oder Ihrem oberen Magen-Darm-Trakt gibt, wie Verengungen oder Bewegungsstörungen.",
            fourth:
              "Der Test hilft uns, die Ursache Ihrer Schluckbeschwerden zu finden, indem wir die Struktur und Funktion Ihrer Speiseröhre sichtbar machen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben, dass der Patient ein Kontrastmittelhaltiges Getränk (Barium) zu sich nimmt und dabei kontinuierliche Röntgenaufnahmen gemacht werden, um die Bewegung des Kontrastmittels durch den oberen Gastrointestinaltrakt zu beobachten.",
            third:
              "Sie trinken eine Flüssigkeit, die Barium enthält. Während Sie trinken, machen wir Röntgenaufnahmen, um zu sehen, wie die Flüssigkeit durch Ihre Speiseröhre fließt.",
            fourth:
              "Zuerst trinken Sie eine bariumsulfathaltige Flüssigkeit. Dann nehmen wir Röntgenbilder auf, um den Weg der Flüssigkeit durch Ihre Speiseröhre und Ihren Magen zu verfolgen.",
          },
          {
            first: "Vorbereitung",
            second:
              "Erklären, dass der Patient nüchtern sein sollte, also mindestens sechs Stunden vor dem Test nichts essen oder trinken darf. Informieren über eventuelle Medikamenteneinnahmen und allergische Reaktionen auf Kontrastmittel.",
            third:
              "Bitte essen oder trinken Sie mindestens sechs Stunden vor der Untersuchung nichts. Informieren Sie uns bitte, wenn Sie allergisch gegen Kontrastmittel sind.",
            fourth:
              "Sie müssen ab Mitternacht vor dem Test nüchtern bleiben. Wenn Sie regelmäßig Medikamente einnehmen, besprechen Sie dies bitte mit uns vorher.",
          },
          {
            first: "Risiken",
            second:
              "Informieren über mögliche Risiken wie Strahlenbelastung, Unbehagen durch das Trinken des Bariums, Aspiration des Kontrastmittels und seltene Verstopfung.",
            third:
              "Es gibt eine geringe Strahlenbelastung durch die Röntgenaufnahmen. Das Trinken des Bariums kann unangenehm sein und in seltenen Fällen kann es zu Verstopfung kommen.",
            fourth:
              "Während des Tests besteht ein kleines Risiko, dass das Kontrastmittel in Ihre Atemwege gelangt. Zudem kann es nach dem Test zu Verstopfung kommen.",
          },
          {
            first: "Vorteile",
            second:
              "Hervorheben, dass der Breischluck-Test eine nicht-invasive Methode ist, die eine gute Visualisierung der Anatomie und Funktion des oberen Magen-Darm-Trakts ermöglicht und schnell durchführbar ist.",
            third:
              "Der Vorteil dieses Tests ist, dass er nicht invasiv ist und uns eine gute Sicht auf die Funktion Ihrer Speiseröhre gibt.",
            fourth:
              "Dieser Test ist schnell und nicht-invasiv, was bedeutet, dass wir keine Operation durchführen müssen, um eine Diagnose zu stellen.",
          },
          {
            first: "Alternativen",
            second:
              "Nennen von Alternativen wie Ösophagogastroduodenoskopie (ÖGD), hochauflösende Manometrie und pH-Metrie, und deren spezifische Indikationen und Vorteile kurz beschreiben.",
            third:
              "Alternativ könnten wir eine Ösophagogastroduodenoskopie (ÖGD) durchführen, bei der eine Kamera in Ihre Speiseröhre eingeführt wird, um eine direkte Sicht zu erhalten.",
            fourth:
              "Eine andere Möglichkeit wäre eine hochauflösende Manometrie, bei der wir den Druck in Ihrer Speiseröhre messen, um Bewegungsstörungen zu erkennen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Auf mögliche Kontraindikationen hinweisen, wie z.B. bekannte Allergien gegen Kontrastmittel, Schwangerschaft oder schwerwiegende Schluckstörungen.",
            third:
              "Dieser Test ist nicht geeignet, wenn Sie schwanger sind oder eine bekannte Allergie gegen Barium haben.",
            fourth:
              "Falls Sie schwerwiegende Schluckstörungen haben oder schwanger sind, könnte dieser Test nicht sicher für Sie sein.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären, dass typische Befunde strukturelle Anomalien wie Stenosen, Divertikel, Motilitätsstörungen oder Tumore sein können.",
            third:
              "Die Ergebnisse könnten zeigen, dass Ihre Speiseröhre verengt ist oder nicht richtig funktioniert, was uns hilft, die richtige Behandlung für Sie zu finden.",
            fourth:
              "Wir könnten feststellen, dass es Tumore oder Divertikel in Ihrer Speiseröhre gibt, was uns helfen würde, die Ursache Ihrer Beschwerden genauer zu bestimmen.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen, dass das Einverständnis des Patienten notwendig ist, um den Test durchzuführen.",
            third:
              "Ihr Einverständnis ist notwendig, damit wir diesen Test durchführen können. Es ist wichtig, dass Sie alle Informationen verstanden haben.",
            fourth:
              "Wir benötigen Ihr schriftliches Einverständnis, bevor wir fortfahren. Es ist wichtig, dass Sie über alle Aspekte des Tests informiert sind und sich wohl damit fühlen.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Den Patienten bitten, das Einverständnis schriftlich zu geben und sicherstellen, dass er alle Fragen zum Test und dessen Ablauf beantwortet bekommt.",
            third:
              "Bitte unterschreiben Sie hier, um Ihr Einverständnis zu bestätigen. Haben Sie noch Fragen zu dem, was wir besprochen haben?",
            fourth:
              "Um fortzufahren, brauche ich Ihre Unterschrift auf diesem Formular. Gibt es noch etwas, das Sie wissen möchten?",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Den Patienten darauf hinweisen, dass er nach der Untersuchung viel Wasser trinken sollte, um das Barium aus dem Körper zu spülen.",
            third:
              "Nach dem Test sollten Sie viel Wasser trinken, um das Barium aus Ihrem Körper zu spülen. Es ist normal, wenn Ihr Stuhl vorübergehend weißlich aussieht.",
            fourth:
              "Trinken Sie bitte nach der Untersuchung viel Wasser, um das Barium auszuspülen. Ihr Stuhl könnte eine weiße Färbung annehmen, was vorübergehend normal ist.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Informieren, dass die Ergebnisse der Untersuchung in der Regel innerhalb weniger Tage vorliegen und der behandelnde Arzt diese dann mit dem Patienten besprechen wird.",
            third:
              "Die Ergebnisse werden in ein paar Tagen vorliegen und Ihr Arzt wird diese mit Ihnen besprechen und die nächsten Schritte planen.",
            fourth:
              "Sie erhalten die Ergebnisse normalerweise innerhalb von wenigen Tagen. Ihr behandelnder Arzt wird dann die Ergebnisse mit Ihnen besprechen und das weitere Vorgehen klären.",
          },
        ],
      },
      // 3tab 61
      {
        id: 61,
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
              "Beschreiben, dass es sich beim Breischluck-Test um eine Röntgenuntersuchung mit einem Kontrastmittel handelt, die die Funktion und Anatomie der Speiseröhre und des oberen Magen-Darm-Trakts sichtbar macht.",
            third:
              "Der Breischluck-Test ist eine radiologische Untersuchung, bei der der Patient Barium trinkt, um die Anatomie und Beweglichkeit der Speiseröhre und des oberen Magen-Darm-Trakts darzustellen.",
            fourth:
              "Dieser Test verwendet Barium als Kontrastmittel und ermöglicht es uns, unter Röntgendurchleuchtung die Passage und eventuelle Abnormitäten in der Speiseröhre zu visualisieren.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erklären, dass mit dieser Untersuchung strukturelle Anomalien wie Stenosen, Divertikel, Motilitätsstörungen und Tumore sowie funktionelle Probleme der Speiseröhre erkannt werden können.",
            third:
              "Mit dem Breischluck können wir strukturelle Probleme wie Engstellen, Divertikel oder Tumore sowie funktionelle Störungen wie eine verzögerte Passage oder unkoordinierte Bewegungen feststellen.",
            fourth:
              "Dieser Test ermöglicht uns, Motilitätsstörungen, Refluxphänomene und strukturelle Anomalien der Speiseröhre und des oberen Magen-Darm-Trakts zu diagnostizieren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Besprechen, dass die Ergebnisse auf strukturelle oder funktionelle Anomalien hinweisen können, wie z.B. verzögerte Kontrastmittelpassage, retrosternale Füllungsdefekte oder Refluxphänomene.",
            third:
              "Die Untersuchung hat eine verzögerte Passage des Kontrastmittels durch die Speiseröhre gezeigt, was auf eine Achalasie hinweisen könnte.",
            fourth:
              "Wir haben multiple Divertikel in der Speiseröhre festgestellt, was die Ursache für die Dysphagie des Patienten sein könnte.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen, dass die Hauptindikationen für den Breischluck-Test Dysphagie, Verdacht auf gastroösophagealen Reflux, postoperative Kontrolle und Verdacht auf strukturelle Anomalien sind.",
            third:
              "Hauptindikationen für den Breischluck-Test sind Schluckbeschwerden (Dysphagie), Verdacht auf gastroösophagealen Reflux und postoperative Überprüfung nach Ösophagusoperationen.",
            fourth:
              "Wir führen den Breischluck-Test häufig bei Patienten mit Verdacht auf anatomische Anomalien oder Motilitätsstörungen der Speiseröhre durch.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Hinweis darauf, dass Kontraindikationen bekannte Allergien gegen Kontrastmittel, Schwangerschaft und schwerwiegende Schluckstörungen umfassen.",
            third:
              "Kontraindikationen umfassen bekannte Allergien gegen Barium, Schwangerschaft und schwerwiegende Schluckstörungen, die ein Aspirationsrisiko darstellen.",
            fourth:
              "Bei Patienten mit einer bekannten Bariumallergie oder während der Schwangerschaft ist dieser Test kontraindiziert.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erklären, dass Differenzialdiagnosen Achalasie, gastroösophagealer Reflux, Ösophaguskarzinom, Divertikel und strukturelle Anomalien umfassen können.",
            third:
              "Differenzialdiagnosen, die wir in Betracht ziehen müssen, umfassen Achalasie, gastroösophagealen Reflux, Ösophaguskarzinome und anatomische Variationen wie Divertikel.",
            fourth:
              "Wir sollten auch an Differenzialdiagnosen wie Motilitätsstörungen, Tumore und Strikturen der Speiseröhre denken.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Diskutieren, dass die Ergebnisse des Breischluck-Tests die Basis für weitere diagnostische Schritte oder therapeutische Maßnahmen wie endoskopische Untersuchungen oder chirurgische Eingriffe sein können.",
            third:
              "Auf Basis der Ergebnisse des Breischluck-Tests könnten wir eine Ösophagogastroduodenoskopie zur weiteren Abklärung oder eine chirurgische Intervention in Erwägung ziehen.",
            fourth:
              "Die festgestellten Anomalien könnten eine medikamentöse Behandlung, endoskopische Dehnung oder eine operative Korrektur erforderlich machen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen, dass eine enge Zusammenarbeit zwischen Radiologen, Gastroenterologen, Chirurgen und ggf. HNO-Ärzten notwendig ist, um eine umfassende Diagnostik und Behandlung zu gewährleisten.",
            third:
              "Für eine umfassende Betreuung des Patienten ist eine enge Zusammenarbeit zwischen Radiologie, Gastroenterologie und Chirurgie essenziell.",
            fourth:
              "Die interdisziplinäre Zusammenarbeit mit Radiologen, Gastroenterologen und ggf. HNO-Ärzten ist entscheidend für eine korrekte Diagnose und effiziente Behandlung.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Hinweis auf die Bedeutung standardisierter Protokolle zur Durchführung und Auswertung des Breischluck-Tests sowie die regelmäßige Schulung des medizinischen Personals zur Sicherstellung hoher Qualitätsstandards.",
            third:
              "Standardisierte Protokolle und regelmäßige Schulungen sind wichtig, um die Qualität und Konsistenz der Breischluck-Untersuchungen zu gewährleisten.",
            fourth:
              "Ein strukturiertes Qualitätsmanagement, einschließlich regelmäßiger Überprüfungen und Fortbildungen, sichert die hohe Qualität der diagnostischen Ergebnisse.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erläutern, dass eine gründliche Dokumentation der Untersuchungsergebnisse und eine klare Kommunikation mit dem weiterbehandelnden Arzt entscheidend sind, um die weitere Patientenversorgung zu planen und zu optimieren.",
            third:
              "Die sorgfältige Dokumentation der Ergebnisse und die Kommunikation mit dem weiterbehandelnden Arzt sind entscheidend für die optimale Nachsorge des Patienten.",
            fourth:
              "Eine lückenlose Dokumentation und eine effiziente Weitergabe der Untersuchungsergebnisse an das Behandlungsteam sind essenziell für eine kontinuierliche Patientenbetreuung.",
          },
        ],
      },
      // 4tab 62
      {
        id: 62,
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
              "55-jähriger Patient klagt über Schwierigkeiten beim Schlucken und retrosternale Schmerzen. Keine bekannte Vorgeschichte von Magen-Darm-Erkrankungen.",
            fourth:
              "40-jährige Patientin berichtet über chronisches Sodbrennen und nächtliches Aufstoßen. Vorgeschichte von milden Refluxsymptomen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Der Breischluck zeigt eine normale Passage des Kontrastmittels ohne Hinweise auf Anomalien oder Reflux.",
            third:
              "Der Breischluck zeigt eine verzögerte Passage des Kontrastmittels und eine Erweiterung der Speiseröhre oberhalb eines enggestellten unteren Ösophagussphinkters.",
            fourth:
              "Der Breischluck zeigt Reflux des Kontrastmittels in den Ösophagus aus dem Magen und eine Schleimhautschädigung.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Ergebnis unterstützt den Ausschluss gastrointestinaler Störungen.",
            third:
              "Der Befund deutet auf Achalasie hin, was durch die fehlende Entspannung des unteren Ösophagussphinkters und die dilatierte Speiseröhre bestätigt wird.",
            fourth:
              "Die Beobachtung von Reflux und Schleimhautschäden unterstützt die Diagnose eines gastroösophagealen Refluxes.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung weiterer diagnostischer Schritte wie Manometrie und mögliche endoskopische oder chirurgische Interventionen.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer medikamentösen oder chirurgischen Therapie zur Kontrolle des Refluxes.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des oberen Magen-Darm-Trakts. Keine Anzeichen für pathologische Veränderungen",
            third:
              "Diagnose einer Achalasie basierend auf Breischluck-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von gastroösophagealem Reflux aufgrund der Breischluck-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene und normale Passage des Kontrastmittels ohne Auffälligkeiten.",
            third:
              "Röntgenbilder zeigen eine verzögerte Passage und Erweiterung der Speiseröhre oberhalb eines enggestellten unteren Ösophagussphinkters.",
            fourth:
              "Röntgenbilder zeigen den Rückfluss von Barium aus dem Magen in die Speiseröhre und Schleimhautirritationen.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige Gesundheitsüberprüfungen, auch wenn keine aktuellen Beschwerden vorliegen, um einen guten allgemeinen Gesundheitszustand sicherzustellen.",
            third:
              "Wir empfehlen eine Ballondilatation oder Heller-Myotomie zur Behandlung der Achalasie. Der Patient sollte über die Prognose und die Notwendigkeit regelmäßiger Folgeuntersuchungen informiert werden.",
            fourth:
              "Wir empfehlen eine Kombination aus medikamentöser Therapie (Protonenpumpenhemmer) und Lebensstiländerungen zur Kontrolle des Refluxes. Langfristige Behandlungsstrategien und regelmäßige Kontrollen sind wichtig.",
          },
        ],
      },
      // 5tab 63
      {
        id: 63,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: " ",
        text_list: [
          {
            bold: "Röntgenfluoroskopiegerät :",
            other:
              "Ein spezielles Röntgengerät, das kontinuierliche Röntgenbilder (Fluoroskopie) in Echtzeit erzeugt, um die Bewegung des Kontrastmittels durch die Speiseröhre und den oberen Magen-Darm-Trakt zu beobachten.",
          },
          {
            bold: "Barium-Kontrastmittel :",
            other:
              "Ein bariumsulfathaltiges Kontrastmittel, das der Patient trinkt. Es macht die Speiseröhre und den oberen Magen-Darm-Trakt auf den Röntgenbildern sichtbar.",
          },
          {
            bold: "Gantry :",
            other:
              "Der ringförmige Teil des Röntgenfluoroskopiegeräts, der die Röntgenröhre und die Detektoren enthält. Er kann um den Patienten herum gedreht werden, um verschiedene Blickwinkel zu erfassen.",
          },
          {
            bold: "Röntgenröhre :",
            other:
              "Erzeugt die Röntgenstrahlen, die durch den Körper des Patienten gesendet werden. Sie ist im Gantry montiert und bewegt sich während der Untersuchung um den Patienten herum.",
          },
          {
            bold: "Detektoren :",
            other:
              "Gegenüber der Röntgenröhre im Gantry angeordnet, erfassen sie die Röntgenstrahlen, die durch den Körper des Patienten hindurchgehen, und wandeln sie in elektrische Signale um.",
          },
          {
            bold: "Patiententisch :",
            other:
              "Ein motorisierter Tisch, der den Patienten in die richtige Position bringt. Der Patient liegt während der Untersuchung auf diesem Tisch und kann bei Bedarf in den Gantry hinein- und herausgefahren werden.",
          },
          {
            bold: "Arbeitsstation :",
            other:
              "Besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder in Echtzeit angezeigt und analysiert werden. Der Radiologe oder radiologische Technologe steuert von hier aus die Untersuchung.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu kommunizieren und Anweisungen zu geben, wie z.B. das Schlucken des Kontrastmittels zu koordinieren.",
          },
          {
            bold: "Strahlenschutzvorrichtungen :",
            other:
              "Schilde und Schutzkleidung, die sowohl den Patienten als auch das medizinische Personal vor übermäßiger Strahlenexposition schützen.",
          },
          {
            bold: "Monitor :",
            other:
              "Zeigt die Echtzeitbilder des Röntgenfluoroskops an, die es dem Radiologen ermöglichen, die Passage des Kontrastmittels durch die Speiseröhre und den oberen Magen-Darm-Trakt zu beobachten und zu bewerten.",
          },
          {
            bold: "Aufzeichnungssystem :",
            other:
              "Erfasst und speichert die Bilder und Videos der Untersuchung für die spätere Analyse und Dokumentation.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Notwendig, um die Röntgenröhre zu kühlen, da sie während der Erzeugung von Röntgenstrahlen viel Wärme produziert.",
          },
          {
            bold: "Bildverarbeitungssoftware :",
            other:
              "Software zur Verarbeitung und Analyse der erfassten Röntgenbilder, die es dem Radiologen ermöglicht, detaillierte diagnostische Informationen zu extrahieren.",
          },
          {
            bold: "Vorbereitung des Patienten :",
            other:
              "Der Patient wird gebeten, jeglichen Schmuck abzulegen und sich auf den Untersuchungstisch zu legen. Der Radiologe erklärt den Ablauf und das Kontrastmittel.",
          },
          {
            bold: "Verabreichung des Kontrastmittels :",
            other:
              "Der Patient trinkt das Barium-Kontrastmittel, während er auf dem Untersuchungstisch liegt.",
          },
          {
            bold: "Durchführung der Untersuchung :",
            other:
              "Das Röntgenfluoroskopiegerät wird aktiviert, und der Gantry bewegt sich um den Patienten, während kontinuierliche Röntgenbilder aufgenommen werden. Der Radiologe beobachtet in Echtzeit die Bewegung des Kontrastmittels durch die Speiseröhre und den oberen Magen-Darm-Trakt.",
          },
          {
            bold: "Kommunikation während der Untersuchung :",
            other:
              "Der Radiologe gibt dem Patienten Anweisungen, wie z.B. 'Schlucken Sie jetzt' oder 'Halten Sie den Atem an', um bestimmte Phasen der Kontrastmittelpassage besser sichtbar zu machen.",
          },
          {
            bold: "Auswertung der Bilder :",
            other:
              "Nach der Untersuchung werden die Bilder auf der Arbeitsstation analysiert, um diagnostische Informationen zu erhalten. Der Radiologe bewertet die Struktur und Funktion der Speiseröhre und des oberen Magen-Darm-Trakts.",
          },
          {
            bold: "Nachbereitung :",
            other:
              "Der Patient wird angewiesen, nach der Untersuchung viel Wasser zu trinken, um das Barium aus dem Körper zu spülen. Der Radiologe bespricht die vorläufigen Ergebnisse mit dem Patienten und informiert über mögliche nächste Schritte.",
          },
        ],
      },
      // 6tab 64
      {
        id: 64,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der SPECT-Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "Breischluck :",
            other:
              "Röntgenuntersuchung mit Kontrastmittel zur Beurteilung der Speiseröhre und des oberen Magen-Darm-Trakts.",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Substanz (meist Barium), die geschluckt wird, um Strukturen im Röntgenbild sichtbar zu machen.",
          },
          {
            bold: "Fluoroskopie :",
            other:
              "Bildgebendes Verfahren, das Echtzeit-Röntgenbilder ermöglicht.",
          },
          {
            bold: "Dysphagie :",
            other:
              "Schluckstörung, häufig ein Symptom bei pathologischen Befunden.",
          },
          {
            bold: "Achalasie :",
            other:
              "Motilitätsstörung der Speiseröhre, charakterisiert durch eine fehlende Entspannung des unteren Ösophagussphinkters.",
          },
          {
            bold: "Gastroösophagealer Reflux (GERD) :",
            other:
              "Rückfluss von Mageninhalt in die Speiseröhre, häufig mit Sodbrennen verbunden.",
          },
          {
            bold: "Striktur :",
            other:
              "Verengung der Speiseröhre, die die Passage von Nahrung erschwert.",
          },
          {
            bold: "Divertikel :",
            other:
              "Aussackungen der Speiseröhrenwand, die die Passage von Nahrung beeinflussen können.",
          },
          {
            bold: "Motilitätsstörung :",
            other:
              "Beeinträchtigung der normalen Bewegungsfähigkeit der Speiseröhre.",
          },
          {
            bold: "Ösophaguskarzinom :",
            other: "Bösartiger Tumor in der Speiseröhre.",
          },
          {
            bold: "Barium :",
            other: "Häufig verwendetes Kontrastmittel im Breischluck-Test.",
          },
          {
            bold: "Manometrie :",
            other:
              "Diagnostisches Verfahren zur Messung des Drucks in der Speiseröhre.",
          },
          {
            bold: "Ösophagogastroduodenoskopie (ÖGD) :",
            other:
              "Endoskopische Untersuchung der Speiseröhre, des Magens und des Zwölffingerdarms.",
          },
          {
            bold: "Aspiration :",
            other:
              "Eindringen von Flüssigkeiten oder Feststoffen in die Atemwege.",
          },
          {
            bold: "Reflux :",
            other: "Rückfluss von Mageninhalt in die Speiseröhre.",
          },
          {
            bold: "Radiologe :",
            other:
              "Facharzt für Bildgebende Verfahren, der die Untersuchung durchführt und interpretiert.",
          },
          {
            bold: "Ballondilatation :",
            other:
              "Verfahren zur Erweiterung verengter Bereiche der Speiseröhre mittels eines Ballonkatheters.",
          },
          {
            bold: "Heller-Myotomie :",
            other:
              "Chirurgischer Eingriff zur Behandlung der Achalasie durch Durchtrennung der Muskelfasern am unteren Ösophagussphinkter.",
          },
          {
            bold: "Kontraindikation :",
            other:
              "Umstand, der die Anwendung eines bestimmten medizinischen Verfahrens verbietet.",
          },
          {
            bold: "Strahlenbelastung :",
            other:
              "Exposition des Körpers gegenüber Röntgenstrahlen während der Untersuchung.",
          },
          {
            bold: "Protonenpumpenhemmer (PPI) :",
            other:
              "Medikament zur Reduktion der Magensäureproduktion, häufig bei GERD eingesetzt.",
          },
          {
            bold: "Schleimhautschädigung :",
            other:
              "Beschädigung der inneren Auskleidung der Speiseröhre, oft durch Reflux verursacht.",
          },
          {
            bold: "Peristaltik :",
            other:
              "Wellenförmige Muskelkontraktionen, die die Nahrung durch die Speiseröhre bewegen.",
          },
          {
            bold: "Bariumsulfat :",
            other:
              "Spezielles Bariumpräparat, das im Breischluck-Test verwendet wird.",
          },
          {
            bold: "Stenose :",
            other:
              "Einengung oder Verengung eines Hohlorgans, wie der Speiseröhre.",
          },
        ],
      },
      // 6tab 65
      {
        id: 65,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link:
              "https://flexikon.doccheck.com/de/%C3%96sophagus-Breischluck",
            bold: "DocCheck Flexikon:",
            other:
              "Eine detaillierte Beschreibung des Breischluck-Verfahrens, einschließlich Definition, Durchführung, Indikationen und Beurteilung.",
          },
          {
            bold_link:
              "https://flexikon.doccheck.com/de/%C3%96sophagusachalasie",
            bold: "DocCheck Flexikon:",
            other:
              "Informationen zur Achalasie, einer der möglichen Diagnosen, die durch einen Breischluck-Test gestellt werden können.",
          },
          {
            bold_link:
              "https://www.doccheck.com/de/detail/items/408743-barium-breischluck-untersuchung",
            bold: "DocCheck Flexikon:",
            other:
              "Ein Bildrätsel und Fallbeispiele zur Anwendung des Breischluck-Tests.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "Amboss:",
            other:
              "Hier kannst du dich anmelden und detaillierte medizinische Informationen zu verschiedenen Untersuchungen und Erkrankungen finden, einschließlich des Breischluck-Tests.",
          },
          {
            bold_link: "https://en.wikipedia.org/wiki/Barium_swallow",
            bold: "Wikipedia:",
            other:
              "Eine umfassende Erklärung des Breischluck-Tests auf Englisch, einschließlich der klinischen Anwendung und Interpretation der Ergebnisse.",
          },
          {
            bold_link: "https://radiopaedia.org",
            bold: "Radiopaedia:",
            other:
              "Eine umfangreiche Ressource für radiologische Diagnostik, mit Fallstudien und Bildern zum Breischluck-Test und anderen radiologischen Untersuchungen.",
          },
          {
            bold_link: "https://www.aerzteblatt.de",
            bold: "Deutsches Ärzteblatt:",
            other:
              "Artikel und Studien über verschiedene diagnostische Verfahren, einschließlich des Breischluck-Tests, sowie aktuelle Forschungsergebnisse und klinische Leitlinien.",
          },
          {
            bold_link: "https://www.klinikbewertungen.de",
            bold: "Klinikbewertungen.de:",
            other:
              "Erfahrungsberichte und Bewertungen von Patienten zu verschiedenen medizinischen Untersuchungen und Behandlungen, einschließlich des Breischluck-Tests.",
          },
        ],
      },
      // 6tab 66
      {
        id: 66,
        title: "PDF",
        link: "https://drive.google.com/file/d/1cATr2Qz9M7H-UIzVuR1q_rgouAyOC4iY/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 7
  // start of parent tab 8 Skelettszintigraphie
  {
    id: 8,
    title: "Skelettszintigraphie",
    checked: false,
    childTabs: [
      // 1tab 67
      {
        id: 67,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Skelettszintigraphie dient der frühzeitigen Erkennung und Bewertung von Knochenanomalien. Sie wird verwendet, um pathologische Veränderungen im Skelettsystem zu diagnostizieren, bevor sie auf konventionellen Röntgenaufnahmen sichtbar werden.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Skelettszintigraphie ist besonders relevant bei der Diagnose von Metastasen, entzündlichen Erkrankungen, Frakturen, Osteomyelitis und anderen Knochenerkrankungen. Sie wird häufig in der Onkologie, Orthopädie und Rheumatologie eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Skelettszintigraphie basiert auf der Verwendung radioaktiver Isotope, die sich in den Knochen anreichern. Technetium-99m ist das häufigste verwendete Isotop, das aufgrund seiner physikalischen Eigenschaften und seiner Affinität zum Knochenstoffwechsel bevorzugt wird.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Bei der Skelettszintigraphie wird dem Patienten eine geringe Menge des radioaktiven Isotops intravenös injiziert. Nach einer gewissen Wartezeit, die es dem Isotop ermöglicht, sich in den Knochen anzureichern, wird der gesamte Körper des Patienten mit einer Gamma-Kamera gescannt, um die Verteilung des Isotops zu visualisieren.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung der Skelettszintigraphie erfolgt durch einen Nuklearmediziner. Anhand der Verteilung des radioaktiven Isotops im Skelettsystem können Bereiche mit erhöhtem oder vermindertem Knochenstoffwechsel identifiziert werden.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde umfassen Hot-Spots, die auf erhöhte osteoblastische Aktivität hinweisen und oft bei Metastasen oder Frakturen beobachtet werden, sowie Cold-Spots, die auf eine verminderte Durchblutung oder Osteonekrose hindeuten können.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Skelettszintigraphie ist eine sensitive Methode zur frühzeitigen Erkennung von Knochenerkrankungen. Sie ermöglicht eine umfassende Untersuchung des gesamten Skelettsystems in kurzer Zeit.",
              },
              {
                bold_text: "Nachteile:",
                text: "Zu den Nachteilen gehören die Exposition gegenüber radioaktiver Strahlung und die mögliche Notwendigkeit weiterer diagnostischer Tests zur Bestätigung der Befunde.",
              },
              {
                bold_text: "Risiken:",
                text: "Obwohl die Strahlenbelastung gering ist, besteht ein gewisses Risiko für strahlenbedingte Schäden. Kontraindikationen umfassen Schwangerschaft und Stillzeit.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Skelettszintigraphie spielt eine zentrale Rolle in der Diagnostik und Therapieplanung vieler Knochenerkrankungen. Sie hilft bei der Erkennung von Metastasen, der Bewertung von Frakturen und der Überwachung des Behandlungserfolgs.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Für das Patientenmanagement ist die Skelettszintigraphie ein wertvolles Instrument, das hilft, frühzeitige und präzise Diagnosen zu stellen und den Krankheitsverlauf zu überwachen.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Alternativen zur Skelettszintigraphie umfassen Röntgenaufnahmen, CT- und MRT-Scans sowie PET-Scans, die je nach klinischer Fragestellung eingesetzt werden können.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschung konzentriert sich auf die Verbesserung der Bildgebungstechniken und die Entwicklung neuer Radiotracer, um die diagnostische Genauigkeit und Sicherheit der Skelettszintigraphie zu erhöhen.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Perspektiven beinhalten die Integration von KI zur Bildanalyse und die personalisierte Medizin, die auf den spezifischen Stoffwechsel des Patienten abgestimmte Radiotracer verwendet.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Skelettszintigraphie ist eine wichtige diagnostische Methode zur Erkennung und Überwachung von Knochenerkrankungen. Sie bietet eine hohe Sensitivität und ermöglicht eine ganzheitliche Untersuchung des Skelettsystems.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Insgesamt stellt die Skelettszintigraphie ein unverzichtbares Werkzeug in der modernen Medizin dar, das Ärzten dabei hilft, fundierte Diagnosen zu stellen und effektive Behandlungsstrategien zu entwickeln.",
              },
            ],
          },
        ],
      },
      // 2tab 68
      {
        id: 68,
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
              "Erklären Sie, dass die Untersuchung zur frühzeitigen Erkennung und Bewertung von Knochenanomalien dient.",
            third:
              "Die Untersuchung hilft uns, Metastasen oder andere Knochenerkrankungen frühzeitig zu erkennen.",
            fourth:
              "Wir möchten sicherstellen, dass keine Knochenentzündungen oder Frakturen übersehen werden.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie detailliert den Ablauf der Untersuchung, einschließlich der Injektion des radioaktiven Isotops und der Nutzung der Gamma-Kamera.",
            third:
              "Zuerst bekommen Sie eine Injektion mit einem schwach radioaktiven Stoff. Nach etwa drei Stunden werden Aufnahmen von Ihrem Skelett gemacht.",
            fourth:
              "Nach der Injektion des radioaktiven Stoffes müssen Sie etwa drei Stunden warten, bevor die eigentliche Untersuchung beginnt.",
          },
          {
            first: "Vorbereitung",
            second:
              "Geben Sie Hinweise zur notwendigen Vorbereitung, wie z.B. das Trinken von ausreichend Wasser und mögliche Einschränkungen bei der Nahrungsaufnahme.",
            third:
              "Bitte trinken Sie vor der Untersuchung viel Wasser, um die Ausscheidung des Isotops zu fördern.",
            fourth:
              "Verzichten Sie bitte vier Stunden vor der Untersuchung auf feste Nahrung, um optimale Ergebnisse zu gewährleisten.",
          },
          {
            first: "Risiken",
            second:
              "Informieren Sie über die Strahlenexposition und mögliche Risiken wie allergische Reaktionen auf das Kontrastmittel.",
            third:
              "Es besteht eine geringe Strahlenbelastung. Allergische Reaktionen auf das Kontrastmittel sind selten, aber möglich.",
            fourth:
              "Die Strahlung, der Sie ausgesetzt sind, ist gering und vergleichbar mit einer Röntgenaufnahme.",
          },
          {
            first: "Vorteile",
            second:
              "Erläutern Sie die Vorteile, wie die hohe Sensitivität und die Möglichkeit, das gesamte Skelettsystem zu untersuchen.",
            third:
              "Die Methode ist sehr empfindlich und ermöglicht uns, das gesamte Skelettsystem zu beurteilen.",
            fourth:
              "Mit dieser Untersuchung können wir Veränderungen im Knochenstoffwechsel frühzeitig feststellen.",
          },
          {
            first: "Alternativen",
            second:
              "Erwähnen Sie mögliche Alternativen zur Skelettszintigraphie wie Röntgen, CT, MRT und PET-Scans.",
            third:
              "Eine Alternative zur Skelettszintigraphie könnte eine MRT-Untersuchung sein.",
            fourth:
              "Eine andere Möglichkeit wäre eine PET-CT-Untersuchung, die ebenfalls sehr genau ist.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Geben Sie die Kontraindikationen an, z.B. Schwangerschaft und Stillzeit.",
            third:
              "Wir führen die Untersuchung nicht bei schwangeren Frauen durch, da das Risiko für das ungeborene Kind zu hoch ist.",
            fourth:
              "Stillende Mütter sollten nach der Untersuchung für 24 Stunden keine Muttermilch abpumpen oder füttern.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie typische Ergebnisse der Untersuchung, wie Hot-Spots und Cold-Spots, und deren Bedeutung.",
            third:
              "Ein 'Hot-Spot' könnte auf eine Knochenmetastase hinweisen, während ein 'Cold-Spot' auf eine Osteonekrose hindeuten könnte.",
            fourth:
              "Ein 'Hot-Spot' zeigt uns Bereiche mit erhöhter Aktivität, was auf Entzündungen oder Tumoren hinweisen kann.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Wichtigkeit, dass der Patient das Verfahren und die damit verbundenen Risiken versteht und zustimmt.",
            third:
              "Es ist wichtig, dass Sie alle Informationen über die Untersuchung und die damit verbundenen Risiken verstehen, bevor wir beginnen.",
            fourth:
              "Bitte lesen und verstehen Sie die Einwilligungserklärung sorgfältig, damit Sie über alle Aspekte der Untersuchung informiert sind.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Beschreiben Sie den Prozess zum Erhalt des schriftlichen Einverständnisses des Patienten.",
            third:
              "Wir benötigen Ihr schriftliches Einverständnis, bevor wir mit der Untersuchung fortfahren können.",
            fourth:
              "Sie müssen das Einverständnisformular unterschreiben, bevor wir mit der Prozedur fortfahren können.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie abschließende Hinweise zur Nachsorge und Verhaltensweisen nach der Untersuchung, wie z.B. viel trinken zur Ausscheidung des Isotops.",
            third:
              "Nach der Untersuchung sollten Sie viel Wasser trinken, um das radioaktive Isotop schneller auszuscheiden.",
            fourth:
              "Es ist wichtig, nach der Untersuchung ausreichend Flüssigkeit zu sich zu nehmen, um die Ausscheidung des Isotops zu unterstützen.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, wie und wann der Patient über die Ergebnisse informiert wird und wer die Ergebnisse mit ihm bespricht.",
            third:
              "Sie werden in der Regel innerhalb einer Woche von Ihrem behandelnden Arzt über die Ergebnisse informiert.",
            fourth:
              "Die Ergebnisse der Untersuchung werden Ihnen in einem Nachgespräch mitgeteilt und erklärt.",
          },
        ],
      },
      // 3tab 69
      {
        id: 69,
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
              "Erklären Sie, dass es sich bei der Skelettszintigraphie um eine nuklearmedizinische Untersuchung handelt, die zur Darstellung des Knochenstoffwechsels dient.",
            third:
              "Die Skelettszintigraphie ist eine bildgebende Methode, die den Knochenstoffwechsel darstellt und häufig zur Detektion von Knochenmetastasen verwendet wird.",
            fourth:
              "Es handelt sich um eine nuklearmedizinische Untersuchung, bei der ein radioaktives Isotop verwendet wird, um pathologische Veränderungen im Knochen aufzuspüren.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Betonen Sie, dass wir mit dieser Untersuchung frühzeitig pathologische Veränderungen im Skelettsystem wie Metastasen, Frakturen oder Entzündungen erkennen können.",
            third:
              "Mit der Skelettszintigraphie können wir Metastasen, die bei konventionellen Röntgenbildern nicht sichtbar sind, frühzeitig erkennen.",
            fourth:
              "Diese Untersuchung ermöglicht uns die frühzeitige Erkennung von entzündlichen Veränderungen oder Stressfrakturen, die bei anderen Bildgebungsverfahren übersehen werden könnten.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erwähnen Sie, dass die Ergebnisse der Untersuchung typische Muster wie Hot-Spots und Cold-Spots zeigen, die auf verschiedene pathologische Prozesse hinweisen.",
            third:
              "Ein Hot-Spot in der Skelettszintigraphie könnte auf eine metastatische Läsion oder eine frische Fraktur hinweisen.",
            fourth:
              "Cold-Spots können auf eine verminderte Durchblutung hinweisen, was bei einer Osteonekrose der Fall sein kann.",
          },
          {
            first: "Indikationen",
            second:
              "Erklären Sie, dass die Indikationen für die Skelettszintigraphie unter anderem die Suche nach Knochenmetastasen, die Diagnose von Osteomyelitis und die Bewertung von Knochenfrakturen umfassen.",
            third:
              "Typische Indikationen umfassen die Suche nach Knochenmetastasen bei Patienten mit bekannten Primärtumoren und die Diagnose von Osteomyelitis.",
            fourth:
              "Wir setzen die Skelettszintigraphie auch zur Bewertung unklarer Knochen- oder Gelenkschmerzen ein, um verborgene Frakturen oder Entzündungen zu erkennen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Betonen Sie, dass Kontraindikationen die Schwangerschaft und Stillzeit umfassen, da die Strahlenbelastung Risiken für das ungeborene Kind und den Säugling darstellen kann.",
            third:
              "Bei schwangeren Frauen vermeiden wir die Skelettszintigraphie aufgrund der potenziellen Strahlenbelastung für den Fötus.",
            fourth:
              "Stillende Mütter sollten nach der Untersuchung für 24 Stunden abpumpen und die Milch verwerfen, um eine Strahlenexposition des Säuglings zu vermeiden.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erwähnen Sie mögliche Differenzialdiagnosen, die bei der Interpretation der Skelettszintigraphie berücksichtigt werden müssen, wie z.B. benigne Knochenveränderungen oder entzündliche Prozesse.",
            third:
              "Benigne Knochenveränderungen wie Enchondrome können ebenfalls Hot-Spots verursachen und sollten differenzialdiagnostisch berücksichtigt werden.",
            fourth:
              "Auch entzündliche Prozesse wie Arthritis können in der Szintigraphie als Hot-Spots erscheinen und müssen von malignen Veränderungen unterschieden werden.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklären Sie, wie die Ergebnisse der Skelettszintigraphie in die Behandlungspläne der Patienten integriert werden können, um gezielte Therapieansätze zu entwickeln.",
            third:
              "Bei Nachweis von Knochenmetastasen würden wir eine systemische Therapie einleiten und ggf. eine lokale Bestrahlung in Erwägung ziehen.",
            fourth:
              "Die Ergebnisse können auch zur Entscheidung über eine operative Versorgung von Frakturen herangezogen werden, insbesondere bei Patienten mit komplexen Verletzungen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der interprofessionellen Zusammenarbeit zwischen Nuklearmedizinern, Onkologen, Orthopäden und anderen Fachrichtungen zur optimalen Patientenversorgung.",
            third:
              "Eine enge Zusammenarbeit zwischen Nuklearmedizinern und Onkologen ist entscheidend, um die Ergebnisse der Skelettszintigraphie optimal in den Therapieplan zu integrieren.",
            fourth:
              "Orthopäden und Nuklearmediziner müssen bei der Interpretation der Befunde eng zusammenarbeiten, um die beste Behandlungsstrategie für den Patienten zu entwickeln.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erwähnen Sie die Rolle des Qualitätsmanagements bei der Sicherstellung der Genauigkeit und Zuverlässigkeit der Untersuchungsergebnisse.",
            third:
              "Regelmäßige Kalibrierung der Gamma-Kamera und Schulungen des Personals sind essenziell, um konsistente und verlässliche Ergebnisse zu gewährleisten.",
            fourth:
              "Qualitätsmanagement sorgt dafür, dass die Protokolle für die Durchführung und Auswertung der Skelettszintigraphie strikt eingehalten werden.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erklären Sie die Wichtigkeit der Dokumentation der Untersuchungsergebnisse und der Weiterverfolgung der Patienten zur Überwachung des Krankheitsverlaufs und der Therapieeffekte.",
            third:
              "Eine sorgfältige Dokumentation der Befunde ermöglicht es uns, den Krankheitsverlauf über die Zeit zu verfolgen und Therapieanpassungen vorzunehmen.",
            fourth:
              "Wir dokumentieren alle Untersuchungsergebnisse detailliert, um bei Nachkontrollen und zur langfristigen Planung der Patientenbehandlung darauf zurückgreifen zu können.",
          },
        ],
      },
      // 4tab 70
      {
        id: 70,
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
              "45-jähriger Patient ohne Beschwerden, Routinekontrolle nach einem Jahr ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient klagt über diffuse Knochenschmerzen und Gewichtsverlust. Vorgeschichte eines Prostatakarzinoms.",
            fourth:
              "50-jährige Patientin mit persistierenden Schmerzen und Schwellungen im rechten Bein. Keine bekannte Vorgeschichte von Knochenerkrankungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Skelettszintigraphie zeigt eine gleichmäßige Verteilung des Isotops ohne Anzeichen von Hot-Spots oder anderen Auffälligkeiten.",
            third:
              "Skelettszintigraphie zeigt multiple Hot-Spots, insbesondere in der Wirbelsäule und den Beckenknochen.",
            fourth:
              "Skelettszintigraphie zeigt einen ausgeprägten Hot-Spot im distalen Femur, umgeben von einer diffusen Aufnahme.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; die Skelettszintigraphie unterstützt den Ausschluss von Knochenpathologien.",
            third:
              "Der Befund deutet auf Knochenmetastasen hin. Die Lokalisation und die Anzahl der Hot-Spots korrelieren mit der Vorgeschichte eines Prostatakarzinoms.",
            fourth:
              "Der ausgeprägte Hot-Spot im distalen Femur ist typisch für eine Osteomyelitis. Die diffuse Aufnahme deutet auf eine entzündliche Reaktion hin.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer systemischen Therapie und regelmäßiger Kontrolluntersuchungen.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer antibiotischen Therapie sowie chirurgischer Maßnahmen, falls notwendig.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Skelettsystems. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose von Knochenmetastasen basierend auf der Skelettszintigraphie und der klinischen Vorgeschichte.",
            fourth:
              "Diagnose einer Osteomyelitis aufgrund der Skelettszintigraphie-Ergebnisse und der klinischen Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Verteilung des Isotops ohne Auffälligkeiten in allen Bereichen des Skelettsystems.",
            third:
              "Skelettszintigraphie-Aufnahmen zeigen multiple Hot-Spots in der Wirbelsäule und den Beckenknochen.",
            fourth:
              "Skelettszintigraphie-Bilder zeigen einen ausgeprägten Hot-Spot im distalen Femur mit diffuser Aufnahme um die Läsion herum.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen, dass der Patient regelmäßig zu Routinekontrollen erscheint, um den gesunden Zustand zu überwachen.",
            third:
              "Sie sollten die Diagnose mit dem Onkologen besprechen und eine systemische Therapie planen. Regelmäßige Kontrolluntersuchungen sind erforderlich, um den Krankheitsverlauf zu überwachen.",
            fourth:
              "Wir empfehlen, dass Sie die Diagnose mit dem Orthopäden und Infektiologen besprechen, um die antibiotische Therapie und gegebenenfalls chirurgische Maßnahmen zu planen.",
          },
        ],
      },
      // 5tab 71
      {
        id: 71,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: " ",
        text_list: [
          {
            bold: "Gamma-Kamera",
            other:
              "Besteht aus einem Kollimator, einem Szintillationskristall und Photomultiplier-Röhren. Erfasst die von den radioaktiven Isotopen ausgesendete Gammastrahlung, die sich in den Knochen anreichern.",
          },
          {
            bold: "Radioaktive Isotope",
            other:
              "Am häufigsten wird Technetium-99m verwendet. Wird dem Patienten intravenös injiziert und reichert sich in Bereichen mit hohem Knochenstoffwechsel an.",
          },
          {
            bold: "Kollimator",
            other:
              "Ein Gerät, das nur Gammastrahlen aus bestimmten Winkeln durchlässt, um die Bildauflösung zu verbessern. Hilft dabei, die Richtung der einfallenden Gammastrahlen zu bestimmen und unerwünschte Strahlung zu blockieren.",
          },
          {
            bold: "Szintillationskristall",
            other:
              "Wandelt die Gammastrahlen in Lichtblitze um. Typischerweise aus Natriumjodid (NaI) hergestellt.",
          },
          {
            bold: "Photomultiplier-Röhren",
            other:
              "Verstärken die Lichtblitze, die vom Szintillationskristall erzeugt werden. Wandeln das Licht in elektrische Signale um, die dann zur Bildgebung verwendet werden.",
          },
          {
            bold: "Patiententisch",
            other:
              "Ist motorisiert und kann in die richtige Position für die Untersuchung bewegt werden. Der Patient liegt während der Untersuchung auf diesem Tisch.",
          },
          {
            bold: "Arbeitsstation",
            other:
              "Besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder angezeigt und analysiert werden. Der Nuklearmediziner oder radiologische Technologe steuert von hier aus die Untersuchung und verarbeitet die Bilder.",
          },
          {
            bold: "Kontrastmittelinjektor (optional)",
            other:
              "In bestimmten Fällen kann ein Kontrastmittel verwendet werden, um die Sichtbarkeit bestimmter Strukturen zu verbessern. Wird intravenös verabreicht.",
          },
          {
            bold: "Steuerkonsole",
            other:
              "Ermöglicht dem Technologen, das Skelettszintigraphie-Gerät zu bedienen, Untersuchungseinstellungen vorzunehmen und den Scanning-Prozess zu überwachen.",
          },
          {
            bold: "Kühlungssystem",
            other:
              "Hält die empfindlichen Komponenten des Geräts auf einer optimalen Betriebstemperatur. Verhindert Überhitzung und sichert eine gleichbleibende Bildqualität.",
          },
          {
            bold: "Software zur Bildrekonstruktion",
            other:
              "Verarbeitet die erfassten Daten und rekonstruiert daraus die Bilder des Skelettsystems. Ermöglicht die Erstellung von 2D- und 3D-Bildern zur besseren Diagnose.",
          },
          {
            bold: "Sprachkommunikationssystem",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben.",
          },
          {
            bold: "Multidetektor-Technologie",
            other:
              "Moderne Skelettszintigraphie-Geräte sind oft mit Multidetektoren ausgestattet. Dies ermöglicht schnellere Scans und eine höhere Bildauflösung.",
          },
        ],
      },
      // 6tab 72
      {
        id: 72,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der Skelettszintigraphie -Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "Skelettszintigraphie",
            other:
              "Ein nuklearmedizinisches Bildgebungsverfahren zur Darstellung des Knochenstoffwechsels.",
          },
          {
            bold: "Gamma-Kamera",
            other:
              "Gerät zur Erfassung der Gammastrahlung, die von den radioaktiven Isotopen ausgesendet wird.",
          },
          {
            bold: "Technetium-99m (Tc-99m)",
            other:
              "Das häufig verwendete radioaktive Isotop in der Skelettszintigraphie.",
          },
          {
            bold: "Hot-Spot",
            other:
              "Bereich mit erhöhter Aufnahme des Isotops, deutet auf erhöhten Knochenstoffwechsel hin.",
          },
          {
            bold: "Cold-Spot",
            other:
              "Bereich mit verminderter Aufnahme des Isotops, deutet auf reduzierten Knochenstoffwechsel hin.",
          },
          {
            bold: "Kollimator",
            other:
              "Gerät zur Begrenzung und Ausrichtung der einfallenden Gammastrahlen auf die Gamma-Kamera.",
          },
          {
            bold: "Szintillationskristall",
            other: "Wandelt Gammastrahlen in Lichtblitze um.",
          },
          {
            bold: "Photomultiplier-Röhren",
            other:
              "Verstärken die Lichtblitze und wandeln sie in elektrische Signale um.",
          },
          {
            bold: "Intravenöse Injektion",
            other:
              "Methode zur Verabreichung des radioaktiven Isotops in die Blutbahn.",
          },
          {
            bold: "Radioaktive Tracer",
            other:
              "Stoffe, die radioaktive Isotope enthalten und sich im Körper anreichern.",
          },
          {
            bold: "Metastasen",
            other:
              "Tumorabsiedlungen in den Knochen, häufige Indikation für eine Skelettszintigraphie.",
          },
          {
            bold: "Osteomyelitis",
            other:
              "Knochenentzündung, die mittels Skelettszintigraphie diagnostiziert werden kann.",
          },
          {
            bold: "Frakturen",
            other:
              "Knochenbrüche, die durch erhöhte Isotopenaufnahme sichtbar gemacht werden können.",
          },
          {
            bold: "Knochenstoffwechsel",
            other: "Prozess des Auf- und Abbaus von Knochengewebe.",
          },
          {
            bold: "Patiententisch",
            other:
              "Motorisierter Tisch, auf dem der Patient während der Untersuchung liegt.",
          },
          {
            bold: "Arbeitsstation",
            other:
              "Computer und Monitore zur Steuerung und Auswertung der Untersuchung.",
          },
          {
            bold: "Kontrastmittel",
            other:
              "Substanz, die die Bildgebung bestimmter Strukturen im Körper verbessert.",
          },
          {
            bold: "Steuerkonsole",
            other:
              "Bedieneinheit zur Steuerung des Skelettszintigraphie-Geräts.",
          },
          {
            bold: "Radiologischer Technologe",
            other:
              "Fachperson, die die Untersuchung durchführt und das Gerät bedient.",
          },
          {
            bold: "Nuklearmediziner",
            other:
              "Arzt, der auf die Anwendung von radioaktiven Substanzen zu diagnostischen und therapeutischen Zwecken spezialisiert ist.",
          },
          {
            bold: "Bildrekonstruktion",
            other:
              "Softwaregestützte Erstellung von 2D- und 3D-Bildern aus den gesammelten Daten.",
          },
          {
            bold: "Diagnostische Genauigkeit",
            other:
              "Maß für die Fähigkeit der Untersuchung, korrekte Diagnosen zu stellen.",
          },
        ],
      },
      // 6tab 73
      {
        id: 73,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link:
              "https://www.praktischarzt.de/diagnostik/knochenszintigraphie/",
            bold: "practischArzt",
            other:
              " bietet detaillierte Informationen über die Durchführung der Knochenszintigraphie, einschließlich Vorbereitung, Dauer und mögliche Risiken.",
          },
          {
            bold_link:
              "https://www.apotheken-umschau.de/diagnostik/szintigrafie",
            bold: "Apotheken Umschau",
            other:
              " beschreibt, wie eine Knochenszintigraphie durchgeführt wird, und bietet ein Video zur besseren Verständigung der Prozedur.",
          },
          {
            bold_link:
              "https://www.radiologie.de/leistungen/skelettszintigraphie",
            bold: "Radiologie.de",
            other:
              " erklärt, wie mit der Skelettszintigraphie aktive Veränderungen im Knochen festgestellt werden können, besonders für die Diagnose von Entzündungen und Metastasen.",
          },
          {
            bold_link:
              "https://nuklearmedizin.mri.tum.de/leistungen/skelettszintigraphie",
            bold: "Nuklearmedizin - Klinikum rechts der Isar",
            other:
              " beschreibt den Prozess der Skelettszintigraphie detailliert, einschließlich Vorbereitung, Durchführung und Dauer der Untersuchung.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/szintigrafie/",
            bold: "NetDoktor.de",
            other:
              " bietet umfassende Informationen über verschiedene Formen der Szintigraphie, einschließlich der Skelettszintigraphie, und deren Indikationen, Risiken und Vorteile.",
          },
          {
            bold_link:
              "https://www.medizin.uni-tuebingen.de/kliniken/nuklearmedizin/leistungen/skelettszintigraphie",
            bold: "Universitätsklinikum Tübingen",
            other:
              " liefert Informationen über die Durchführung der Skelettszintigraphie in der Klinik, die Vorbereitung der Patienten und die notwendigen Maßnahmen nach der Untersuchung.",
          },
          {
            bold_link: "https://flexikon.doccheck.com/de/Skelettszintigraphie",
            bold: "DocCheck Flexikon",
            other:
              " bietet eine umfassende Definition der Skelettszintigraphie, einschließlich Indikationen, Durchführung und Interpretation der Ergebnisse.",
          },
          {
            bold_link: "https://www.amboss.com/de",
            bold: "Amboss",
            other:
              " beschreibt detailliert die Indikationen, Kontraindikationen, Durchführung und Interpretation der Skelettszintigraphie.",
          },
        ],
      },
      // 6tab 74
      {
        id: 74,
        title: "PDF",
        link: "https://drive.google.com/file/d/1iYEeMwnT4JXh8MaMOWQ9KjySIqVxmQk_/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 8
  // start of parent tab 9 Schilddrüsen-Szintigraphie
  {
    id: 9,
    title: "Schilddrüsen-Szintigraphie",
    checked: false,
    childTabs: [
      // 1tab 75
      {
        id: 75,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das Hauptziel der Schilddrüsen-Szintigraphie besteht darin, Funktionsstörungen der Schilddrüse zu diagnostizieren und morphologische Veränderungen zu erkennen. Dabei wird die Verteilung eines radioaktiven Tracers in der Schilddrüse visuell dargestellt.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Schilddrüsen-Szintigraphie ist von großer Bedeutung für die Diagnose von Schilddrüsenerkrankungen wie Hyperthyreose, Knoten und Krebs. Sie findet Anwendung in der Differenzialdiagnose von Schilddrüsenknoten, der Beurteilung der Schilddrüsenfunktion und der Überwachung von Schilddrüsenkrebs.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Das Verfahren basiert auf der Aufnahme von radioaktiven Isotopen durch die Schilddrüse. Typischerweise werden Technetium-99m oder Iod-123 verwendet, da diese Isotope von der Schilddrüse aufgenommen und gespeichert werden.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Nach der intravenösen Injektion des radioaktiven Tracers wird eine Gammakamera verwendet, um die emittierte Strahlung zu detektieren und ein Bild der Schilddrüse zu erzeugen. Die Untersuchung dauert etwa 20-30 Minuten und erfordert keine speziellen Vorbereitungen des Patienten.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: 'Die Auswertung der Schilddrüsen-Szintigraphie erfolgt durch die Beurteilung der Verteilung des Tracers in der Schilddrüse. Bereiche mit erhöhter Aktivität ("heiße Knoten") können auf eine Überfunktion hinweisen, während Bereiche mit verminderter Aktivität ("kalte Knoten") auf Hypofunktion oder maligne Veränderungen hindeuten können.',
              },
              {
                bold_text: "Typische Befunde:",
                text: "Zu den typischen Befunden zählen diffuse Vergrößerungen, fokale Knoten und unregelmäßige Verteilungen des Tracers, die auf unterschiedliche pathologische Zustände hinweisen können.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Ein wesentlicher Vorteil der Schilddrüsen-Szintigraphie ist ihre nicht-invasive Natur, die es ermöglicht, detaillierte Informationen über die Schilddrüsenfunktion zu erhalten, ohne einen chirurgischen Eingriff vornehmen zu müssen. Außerdem ist die Strahlenbelastung durch das Verfahren gering, was es zu einer sicheren Option für viele Patienten macht. Die hohe Sensitivität der Szintigraphie erlaubt es, funktionelle Veränderungen der Schilddrüse frühzeitig zu erkennen und entsprechend zu behandeln.",
              },
              {
                bold_text: "Nachteile:",
                text: "Zu den Nachteilen der Schilddrüsen-Szintigraphie gehört die begrenzte Verfügbarkeit der notwendigen Ausrüstung und Tracer in einigen Regionen, was den Zugang zu diesem diagnostischen Verfahren einschränken kann. Darüber hinaus kann es bei einigen Patienten zu allergischen Reaktionen auf den verwendeten Tracer kommen, obwohl dies selten ist.",
              },
              {
                bold_text: "Risiken:",
                text: "Die Risiken der Schilddrüsen-Szintigraphie sind minimal, umfassen jedoch die geringe Strahlenexposition, die mit der Injektion des radioaktiven Tracers verbunden ist. Diese Strahlenbelastung ist jedoch deutlich niedriger als bei vielen anderen bildgebenden Verfahren. Seltene allergische Reaktionen auf den Tracer können auftreten, die jedoch in der Regel mild und gut behandelbar sind.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Schilddrüsen-Szintigraphie spielt eine entscheidende Rolle bei der Diagnose und Behandlung von Schilddrüsenerkrankungen. Sie liefert wichtige Informationen zur Funktionsbewertung und trägt zur Entscheidung über therapeutische Maßnahmen bei.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch die präzise Bestimmung der Schilddrüsenfunktion und -morphologie kann die Szintigraphie das Management und die Prognose von Patienten mit Schilddrüsenerkrankungen erheblich verbessern.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text:
                  "Alternative Verfahren zur Schilddrüsen-Szintigraphie umfassen Ultraschall, Feinnadelbiopsie und Bluttests zur Bestimmung der Schilddrüsenhormone. Diese Methoden können ergänzend oder alternativ eingesetzt werden, je nach klinischer Fragestellung.",
                text: "",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Die aktuelle Forschung konzentriert sich auf die Verbesserung der Tracer und Bildgebungstechnologien, um die diagnostische Genauigkeit und Sicherheit zu erhöhen.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Einführung neuer Tracer und fortschrittlicherer Bildgebungstechniken umfassen, die eine noch detailliertere Beurteilung der Schilddrüsenfunktion ermöglichen.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Schilddrüsen-Szintigraphie ist ein wesentliches diagnostisches Werkzeug zur Beurteilung von Schilddrüsenerkrankungen, das durch seine nicht-invasive Natur und hohe diagnostische Genauigkeit überzeugt.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Ihre Rolle in der modernen Medizin ist unbestritten, und kontinuierliche Forschungsbemühungen tragen dazu bei, ihre Anwendungsmöglichkeiten und diagnostische Leistungsfähigkeit weiter zu verbessern.",
              },
            ],
          },
        ],
      },
      // 2tab 76
      {
        id: 76,
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
              "Erklären Sie, dass die Schilddrüsen-Szintigraphie zur Beurteilung der Schilddrüsenfunktion und zur Unterscheidung zwischen kalten und heißen Knoten dient.",
            third:
              "„Wir möchten herausfinden, ob Ihre Schilddrüse über- oder unteraktiv ist und ob Knoten vorhanden sind, die weiter untersucht werden müssen.“",
            fourth:
              "„Die Untersuchung hilft uns, festzustellen, ob ein Knoten in Ihrer Schilddrüse gutartig oder bösartig sein könnte.“",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie den Ablauf: Verabreichung eines radioaktiven Stoffes per Injektion, Wartezeit, anschließende Bildaufnahme der Schilddrüse mit einer Gamma-Kamera.",
            third:
              "„Sie erhalten eine kleine Menge eines radioaktiven Stoffes über eine Injektion. Nach etwa 20 Minuten machen wir mit einer speziellen Kamera Bilder Ihrer Schilddrüse.“",
            fourth:
              "„Nach der Injektion des Radiopharmakons müssen Sie etwa 20 Minuten warten. Danach erstellen wir mit einer Gamma-Kamera Bilder, die die Funktion Ihrer Schilddrüse zeigen.“",
          },
          {
            first: "Vorbereitung",
            second:
              "Weisen Sie auf die Vorbereitung hin: Nüchternheit am Untersuchungstag und Absetzen bestimmter Medikamente nach Absprache mit dem Arzt.",
            third:
              "„Bitte kommen Sie nüchtern zur Untersuchung und setzen Sie Ihre Schilddrüsenmedikamente drei Tage vorher ab.“",
            fourth:
              "„Es ist wichtig, dass Sie am Tag der Untersuchung nichts essen und bestimmte Medikamente, wie Jodtabletten, vorher absetzen.“",
          },
          {
            first: "Risiken",
            second:
              "Informieren Sie über die Risiken: Minimale Strahlenexposition und sehr seltene allergische Reaktionen auf das Radiopharmakon.",
            third:
              "„Die Strahlenbelastung ist sehr gering und vergleichbar mit einer Röntgenaufnahme. Allergische Reaktionen sind äußerst selten.“",
            fourth:
              "„Die Risiken sind minimal. Es gibt eine sehr geringe Strahlenexposition und das Risiko einer allergischen Reaktion ist sehr niedrig.“",
          },
          {
            first: "Vorteile",
            second:
              "Stellen Sie die Vorteile dar: Nicht-invasive, schmerzlose Methode, die wichtige funktionelle Informationen über die Schilddrüse liefert.",
            third:
              "„Die Methode ist schmerzlos und liefert uns wertvolle Informationen über die Funktion Ihrer Schilddrüse.“",
            fourth:
              "„Dieses Verfahren ist nicht-invasiv und hilft uns, genaue Daten über Ihre Schilddrüsenaktivität zu erhalten.“",
          },
          {
            first: "Alternativen",
            second:
              "Erwähnen Sie Alternativen: Ultraschall der Schilddrüse für anatomische Informationen, Feinnadelaspiration zur zytologischen Untersuchung von Schilddrüsenknoten.",
            third:
              "„Eine Alternative wäre ein Ultraschall, der uns aber keine funktionellen Informationen liefert.“",
            fourth:
              "„Wir könnten auch eine Feinnadelaspiration durchführen, um Zellen aus einem Knoten zu untersuchen.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Nennen Sie die Kontraindikationen: Schwangerschaft, Stillzeit und bekannte Allergien gegen das verwendete Radiopharmakon.",
            third:
              "„Diese Untersuchung ist nicht geeignet für Schwangere und stillende Frauen.“",
            fourth:
              "„Wenn Sie schwanger sind oder stillen, sollten Sie diese Untersuchung nicht durchführen lassen.“",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erläutern Sie mögliche Ergebnisse: Identifikation von kalten Knoten (weniger aktiv) und heißen Knoten (stärker aktiv), die auf verschiedene Schilddrüsenkrankheiten hinweisen.",
            third:
              "„Wir könnten kalte Knoten finden, die weniger aktiv sind und weitere Untersuchungen benötigen.“",
            fourth:
              "„Heiße Knoten zeigen eine erhöhte Aktivität und könnten auf eine Schilddrüsenüberfunktion hinweisen.“",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Notwendigkeit: Der Patient muss umfassend über Ablauf, Risiken und Nutzen der Untersuchung informiert werden und schriftlich einwilligen.",
            third:
              "„Es ist wichtig, dass Sie die Untersuchung und die damit verbundenen Risiken verstehen, bevor wir Ihre Zustimmung einholen.“",
            fourth:
              "„Wir benötigen Ihre schriftliche Einwilligung, nachdem wir Sie ausführlich über den Ablauf und die möglichen Risiken informiert haben.“",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Beschreiben Sie den Prozess der Einwilligung: Schriftliche Zustimmung des Patienten nach ausführlicher Aufklärung durch den Arzt.",
            third:
              "„Nach der Aufklärung durch den Arzt unterschreiben Sie bitte das Einverständnisformular.“",
            fourth:
              "„Sie erhalten alle notwendigen Informationen und geben dann schriftlich Ihre Zustimmung zur Untersuchung.“",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie abschließende Anweisungen: Patient sollte nach der Untersuchung viel Flüssigkeit trinken und sich bei Fragen oder Beschwerden an seinen Arzt wenden.",
            third:
              "„Bitte trinken Sie nach der Untersuchung viel Wasser, um den radioaktiven Stoff schneller aus Ihrem Körper zu entfernen.“",
            fourth:
              "„Falls Sie nach der Untersuchung Fragen haben oder sich unwohl fühlen, kontaktieren Sie bitte umgehend Ihren Arzt.“",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie die Ergebnisbesprechung: Der Arzt erläutert dem Patienten die Befunde der Untersuchung, deren Bedeutung und die empfohlenen nächsten Schritte.",
            third:
              "„Nach der Untersuchung bespreche ich die Ergebnisse mit Ihnen und wir planen die weiteren Schritte.“",
            fourth:
              "„Wir erklären Ihnen, was die Befunde bedeuten und welche Behandlungen oder Untersuchungen eventuell folgen sollten.“",
          },
        ],
      },
      // 3tab 77
      {
        id: 77,
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
              "Erklären Sie, dass die Schilddrüsen-Szintigraphie eine nuklearmedizinische Bildgebungstechnik ist, die zur Beurteilung der Schilddrüsenfunktion und zur Identifikation von Knoten eingesetzt wird.",
            third:
              "„Die Schilddrüsen-Szintigraphie ist ein bildgebendes Verfahren, bei dem radioaktive Substanzen verwendet werden, um die Funktion der Schilddrüse darzustellen.“",
            fourth:
              "„Dieses Verfahren nutzt ein Radiopharmakon und eine Gamma-Kamera, um die Aktivität und Struktur der Schilddrüse zu visualisieren.“",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Betonen Sie, dass die Untersuchung die funktionelle Aktivität der Schilddrüse visualisiert und zwischen kalten und heißen Knoten unterscheidet, was für die Diagnose von Schilddrüsenerkrankungen entscheidend ist.",
            third:
              "„Wir können damit die Aktivität der Schilddrüse messen und feststellen, ob Knoten über- oder unteraktiv sind.“",
            fourth:
              "„Es ermöglicht uns, funktionsgestörte Bereiche der Schilddrüse zu identifizieren und zu beurteilen.“",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erläutern Sie die typischen Befunde wie kalte Knoten, die auf Hypofunktion oder Malignität hinweisen können, und heiße Knoten, die auf Hyperfunktion hinweisen, wie bei autonomen Adenomen oder Morbus Basedow.",
            third:
              "„Ein kalter Knoten könnte auf eine Zyste oder ein Karzinom hinweisen, während ein heißer Knoten auf ein autonomes Adenom hindeuten kann.“",
            fourth:
              "„Die Untersuchung kann heiße Knoten zeigen, die oft gutartig sind, oder kalte Knoten, die weiter abgeklärt werden müssen.“",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie die Indikationen: Unklare Schilddrüsenknoten, Verdacht auf Schilddrüsenfunktionsstörungen (Hyperthyreose oder Hypothyreose), Abklärung einer Struma.",
            third:
              "„Typische Indikationen sind unklare Knoten, Verdacht auf Hyperthyreose oder eine vergrößerte Schilddrüse.“",
            fourth:
              "„Wir setzen die Szintigraphie bei Verdacht auf Funktionsstörungen oder zur Abklärung von Schilddrüsenknoten ein.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erwähnen Sie die Kontraindikationen: Schwangerschaft, Stillzeit, bekannte Allergien gegen das Radiopharmakon.",
            third:
              "„Kontraindikationen umfassen Schwangerschaft und Stillzeit sowie bekannte Allergien gegen das Radiopharmakon.“",
            fourth:
              "„Die Untersuchung ist kontraindiziert bei Schwangeren und bei Patienten mit kürzlich erfolgter Gabe von jodhaltigen Kontrastmitteln.“",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Besprechen Sie Differenzialdiagnosen: Knoten können gutartig (z.B. Zysten, Adenome) oder bösartig (Karzinome) sein; funktionelle Störungen wie Morbus Basedow oder Hashimoto-Thyreoiditis sollten ebenfalls berücksichtigt werden.",
            third:
              "„Differenzialdiagnosen umfassen gutartige Knoten wie Zysten und Adenome sowie bösartige Tumoren.“",
            fourth:
              "„Wir müssen auch an funktionelle Störungen wie Morbus Basedow oder eine Thyreoiditis denken.“",
          },
          {
            first: "Behandlungspläne",
            second:
              "Diskutieren Sie die möglichen Behandlungspläne: Abhängig von den Befunden könnten eine medikamentöse Therapie, Radiojodtherapie oder chirurgische Intervention erforderlich sein.",
            third:
              "„Abhängig vom Ergebnis könnte eine medikamentöse Therapie, eine Radiojodtherapie oder eine Operation notwendig sein.“",
            fourth:
              "„Für kalte Knoten könnte eine Operation erforderlich sein, während heiße Knoten oft medikamentös behandelt werden.“",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Wichtigkeit der Zusammenarbeit zwischen Endokrinologen, Nuklearmedizinern, Chirurgen und Hausärzten.",
            third:
              "„Die enge Zusammenarbeit zwischen Endokrinologen und Nuklearmedizinern ist entscheidend für eine präzise Diagnostik und Therapie.“",
            fourth:
              "„Chirurgen und Endokrinologen müssen bei der Entscheidungsfindung eng kooperieren.“",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erklären Sie die Notwendigkeit eines kontinuierlichen Qualitätsmanagements, um die Genauigkeit der Diagnoseverfahren und die Patientensicherheit zu gewährleisten.",
            third:
              "„Regelmäßige Kalibrierung der Geräte und Fortbildung des Personals sind essenziell für eine hohe Diagnosesicherheit.“",
            fourth:
              "„Ein umfassendes Qualitätsmanagementsystem hilft uns, die Genauigkeit und Sicherheit der Untersuchungen zu gewährleisten.“",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Heben Sie die Bedeutung einer sorgfältigen Dokumentation der Untersuchungsergebnisse und der anschließenden Nachverfolgung hervor, um eine angemessene Behandlung und Überwachung der Patienten zu gewährleisten.",
            third:
              "„Eine gründliche Dokumentation der Ergebnisse und regelmäßige Nachkontrollen sind wichtig, um den Behandlungserfolg zu überwachen.“",
            fourth:
              "„Die Ergebnisse müssen genau dokumentiert und die Patienten in regelmäßigen Abständen nachuntersucht werden.“",
          },
        ],
      },
      // 4tab 78
      {
        id: 78,
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
              "35-jähriger Patient ohne Beschwerden, Routinekontrolle, keine Auffälligkeiten in der Schilddrüsenfunktion.",
            third:
              "50-jähriger Patient mit einem tastbaren Knoten in der Schilddrüse und allgemeiner Müdigkeit.",
            fourth:
              "40-jährige Patientin klagt über Herzrasen, Gewichtsverlust und Nervosität.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Homogene Verteilung des Radiopharmakons in der Schilddrüse, keine Knoten oder Auffälligkeiten erkennbar.",
            third:
              "Szintigraphie zeigt einen kalten Knoten im rechten Schilddrüsenlappen, der kein Radiopharmakon aufnimmt.",
            fourth:
              "Szintigraphie zeigt einen heißen Knoten im linken Schilddrüsenlappen, der vermehrt Radiopharmakon aufnimmt.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Ergebnis zeigt eine normale, gleichmäßige Schilddrüsenfunktion ohne Knoten.",
            third:
              "Der kalte Knoten könnte auf eine Zyste, ein Adenom oder ein Karzinom hinweisen und erfordert weitere Abklärung, eventuell eine Feinnadelbiopsie.",
            fourth:
              "Der heiße Knoten deutet auf ein autonomes Adenom hin, das oft gutartig ist, aber eine Hyperthyreose verursachen kann.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Der Befund dient der Beruhigung des Patienten und der Bestätigung der normalen Schilddrüsenfunktion.",
            third:
              "Der Befund erfordert eine weiterführende Diagnostik wie Ultraschall und Biopsie, um die Art des Knotens zu bestimmen.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose einer Hyperthyreose und Einleitung einer entsprechenden Therapie, wie z.B. Radiojodtherapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung der normalen Schilddrüsenfunktion ohne pathologische Veränderungen.",
            third:
              "Diagnose eines kalten Knotens in der Schilddrüse mit Verdacht auf Zyste, Adenom oder Karzinom basierend auf Szintigraphie-Ergebnissen und klinischem Bild.",
            fourth:
              "Diagnose eines heißen Knotens, vermutlich ein autonomes Adenom, das eine Hyperthyreose verursacht.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Gleichmäßige Verteilung des Radiopharmakons ohne Auffälligkeiten in der gesamten Schilddrüse.",
            third:
              "Szintigraphie zeigt eine abgegrenzte, inaktive Region im rechten Schilddrüsenlappen.",
            fourth:
              "Szintigraphie zeigt eine deutlich hyperaktive Region im linken Schilddrüsenlappen.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen, regelmäßige Kontrolluntersuchungen durchzuführen, um die normale Schilddrüsenfunktion weiterhin zu bestätigen.",
            third:
              "Es ist ratsam, eine weiterführende Diagnostik durchzuführen, wie Ultraschall und Biopsie, um die Art des kalten Knotens genauer zu bestimmen.",
            fourth:
              "Wir empfehlen die Einleitung einer Therapie, wie z.B. Radiojodtherapie, um die Hyperthyreose zu behandeln und weitere Symptome zu vermeiden.",
          },
        ],
      },
      // 5tab 79
      {
        id: 79,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Schilddrüsenszintigraphiegerät ist ein spezialisiertes medizinisches Bildgebungsgerät, das zur Beurteilung der Funktion und Morphologie der Schilddrüse verwendet wird. Hier sind die wesentlichen Komponenten und Funktionen eines Schilddrüsenszintigraphiegeräts:",
        text_list: [
          {
            bold: "Gammakamera :",
            other:
              "Die Gammakamera ist das zentrale Element des Szintigraphiegeräts. Sie erfasst die vom radioaktiven Tracer emittierte Gammastrahlung, die von der Schilddrüse aufgenommen wird. Die Kamera besteht aus einem Kollimator, einem Szintillator und Photomultiplier-Röhren, die zusammenarbeiten, um die Strahlung in elektrische Signale umzuwandeln und Bilder zu erzeugen.",
          },
          {
            bold: "Radioaktiver Tracer :",
            other:
              "Für die Schilddrüsenszintigraphie werden üblicherweise radioaktive Isotope wie Technetium-99m oder Iod-123 verwendet. Diese Tracer werden dem Patienten intravenös injiziert und reichern sich in der Schilddrüse an, wo sie Strahlung aussenden, die von der Gammakamera erfasst wird.",
          },
          {
            bold: "Patiententisch :",
            other:
              "Der Patiententisch ist motorisiert und kann vertikal und horizontal bewegt werden, um den Patienten in die optimale Position für die Bildgebung zu bringen. Der Patient liegt während der Untersuchung auf diesem Tisch.",
          },
          {
            bold: "Arbeitsstation :",
            other:
              "Die Arbeitsstation besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder angezeigt und analysiert werden. Der Radiologe oder der radiologische Technologe steuert von hier aus die Untersuchung und bewertet die Ergebnisse.",
          },
          {
            bold: "Kollimator :",
            other:
              "Der Kollimator ist ein Teil der Gammakamera, der nur Strahlung in bestimmten Winkeln durchlässt. Er verbessert die Bildqualität, indem er Streustrahlung reduziert und die räumliche Auflösung erhöht.",
          },
          {
            bold: "Szintillator :",
            other:
              "Der Szintillator ist ein Material innerhalb der Gammakamera, das die Gammastrahlen in sichtbares Licht umwandelt. Dieses Licht wird dann von den Photomultiplier-Röhren erfasst und in elektrische Signale umgewandelt.",
          },
          {
            bold: "Photomultiplier-Röhren :",
            other:
              "Diese Röhren verstärken die vom Szintillator erzeugten Lichtsignale und wandeln sie in elektrische Signale um, die zur Erstellung der Bilder verwendet werden.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Die Steuerkonsole ermöglicht dem Technologen, das Szintigraphiegerät zu bedienen, Untersuchungseinstellungen vorzunehmen und den Scan-Prozess zu überwachen. Hier können Parameter wie die Dauer der Bildaufnahme und die Position des Patienten eingestellt werden.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Ein Kühlsystem ist notwendig, um die elektronischen Komponenten des Szintigraphiegeräts zu kühlen und eine Überhitzung zu verhindern. Dies gewährleistet eine stabile und zuverlässige Bildgebung.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ein Sprachkommunikationssystem ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben. Dies ist wichtig, um die korrekte Positionierung des Patienten sicherzustellen und Anweisungen während der Untersuchung zu geben.",
          },
          {
            bold: "Multidetektor-Szintigraphie :",
            other:
              "Moderne Szintigraphiegeräte können als Multidetektor-Szintigraphie konfiguriert sein, was bedeutet, dass sie mehrere Detektoren haben. Dies ermöglicht schnellere Scans und eine höhere Bildauflösung.",
          },
        ],
      },
      // 6tab 80
      {
        id: 80,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der Schilddrüsen-Szintigraphie-Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "Schilddrüsen-Szintigraphie :",
            other:
              "Nuklearmedizinisches Verfahren zur Beurteilung der Schilddrüsenfunktion.",
          },
          {
            bold: "Radiopharmakon :",
            other:
              "Radioaktiv markierte Substanz, die zur Bildgebung verwendet wird.",
          },
          {
            bold: "Gamma-Kamera :",
            other:
              "Gerät zur Aufnahme der Verteilung des Radiopharmakons in der Schilddrüse.",
          },
          {
            bold: "Kalter Knoten :",
            other:
              "Bereich in der Schilddrüse, der das Radiopharmakon nicht aufnimmt und auf Hypofunktion oder Malignität hinweisen kann.",
          },
          {
            bold: "Heißer Knoten :",
            other:
              "Bereich in der Schilddrüse, der das Radiopharmakon vermehrt aufnimmt und oft auf eine Hyperthyreose hinweist.",
          },
          {
            bold: "Hyperthyreose :",
            other:
              "Überfunktion der Schilddrüse, die zu erhöhtem Stoffwechsel führt.",
          },
          {
            bold: "Hypothyreose :",
            other:
              "Unterfunktion der Schilddrüse, die zu einem verminderten Stoffwechsel führt.",
          },
          {
            bold: "Struma :",
            other: "Vergrößerung der Schilddrüse, oft als Kropf bezeichnet.",
          },
          {
            bold: "Feinnadelaspiration :",
            other:
              "Diagnostische Methode zur Zellgewinnung aus Schilddrüsenknoten.",
          },
          {
            bold: "Technetium-99m :",
            other:
              "Häufig verwendetes Radiopharmakon in der Schilddrüsen-Szintigraphie.",
          },
          {
            bold: "Jod-123 :",
            other:
              "Alternative radioaktive Substanz, die in der Szintigraphie verwendet wird.",
          },
          {
            bold: "Thyreozyten :",
            other:
              "Schilddrüsenzellen, die Jod aufnehmen und Hormone produzieren.",
          },
          {
            bold: "Autoimmunthyreoiditis (Hashimoto) :",
            other:
              "Chronische Entzündung der Schilddrüse aufgrund einer Autoimmunerkrankung.",
          },
          {
            bold: "Morbus Basedow (Graves) :",
            other: "Autoimmunerkrankung, die eine Hyperthyreose verursacht.",
          },
          {
            bold: "Szintigramm :",
            other: "Das Bild, das durch die Szintigraphie erzeugt wird.",
          },
          {
            bold: "Dosis :",
            other:
              "Menge des Radiopharmakons, die dem Patienten verabreicht wird.",
          },
          {
            bold: "Nuklearmedizin :",
            other:
              "Fachbereich der Medizin, der radioaktive Substanzen zur Diagnose und Therapie einsetzt.",
          },
          {
            bold: "T3/T4 :",
            other:
              "Schilddrüsenhormone, die in der Diagnostik und Behandlung von Schilddrüsenerkrankungen eine Rolle spielen.",
          },
        ],
      },
      // 7tab 81
      {
        id: 81,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 82
      {
        id: 86,
        title: "PDF",
        link: "https://drive.google.com/file/d/1II0BGs_AextjPv-qUWRyEAobC-2eFbmu/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 9

  //Kardiologische Untersuchungen

  // start of parent tab 10 EKG
  {
    id: 10,
    title: "Elektrokardiogramm (EKG)",
    checked: false,
    childTabs: [
      // 1tab 87
      {
        id: 87,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das Hauptziel des EKGs ist es, die elektrische Aktivität des Herzens aufzuzeichnen und zu analysieren, um Abweichungen vom normalen Herzrhythmus zu erkennen und eine genaue Diagnose zu stellen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Das EKG ist in vielen medizinischen Bereichen relevant, insbesondere in der Notfallmedizin, der Kardiologie und der allgemeinen Inneren Medizin. Es wird häufig verwendet, um Herzrhythmusstörungen, ischämische Veränderungen, hypertrophe Kardiomyopathien und Elektrolytstörungen zu diagnostizieren.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Das EKG basiert auf der Messung der elektrischen Potenziale, die durch die Depolarisation und Repolarisation des Herzmuskels erzeugt werden. Diese elektrischen Signale werden an der Körperoberfläche durch Elektroden erfasst und als Kurvenverlauf auf Papier oder digital aufgezeichnet.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Ein Standard-EKG verwendet 12 Ableitungen, um ein umfassendes Bild der Herzaktivität aus verschiedenen Blickwinkeln zu erhalten. Die Elektroden werden an spezifischen Punkten am Körper angebracht: vier an den Extremitäten und sechs auf dem Brustkorb. Die Ableitungen sind in bipolare (I, II, III), unipolare Extremitätenableitungen (aVR, aVL, aVF) und unipolare Brustwandableitungen (V1-V6) unterteilt.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Typische Befunde in einem EKG umfassen Sinusrhythmus, Vorhofflimmern, ventrikuläre Tachykardien, Myokardinfarktzeichen (wie ST-Hebungen oder -Senkungen), links- oder rechtsschenkelblock und Anzeichen einer Hypertrophie.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde in einem EKG umfassen Sinusrhythmus, Vorhofflimmern, ventrikuläre Tachykardien, Myokardinfarktzeichen (wie ST-Hebungen oder -Senkungen), links- oder rechtsschenkelblock und Anzeichen einer Hypertrophie.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Das EKG ist ein nicht-invasives, schnelles und kostengünstiges Verfahren, das wertvolle Informationen über die Herzgesundheit liefert. Es kann in verschiedenen klinischen Umgebungen durchgeführt werden, einschließlich Krankenhäusern, Arztpraxen und sogar im Rettungsdienst.",
              },
              {
                bold_text: "Nachteile:",
                text: "Die Interpretation eines EKGs kann komplex sein und erfordert fundiertes Fachwissen. Ein EKG liefert möglicherweise keine definitive Diagnose und muss oft mit anderen diagnostischen Tests kombiniert werden.",
              },
              {
                bold_text: "Risiken:",
                text: "Da das EKG nicht invasiv ist, sind die Risiken minimal. Mögliche Unannehmlichkeiten könnten Hautirritationen durch die Elektroden oder gelegentliche Fehlinterpretationen der Ergebnisse sein.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Das EKG spielt eine entscheidende Rolle in der Diagnose und Überwachung von Herz-Kreislauf-Erkrankungen. Es hilft, therapeutische Entscheidungen zu treffen und den Behandlungserfolg zu überwachen.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Ein korrekt interpretiertes EKG kann lebensrettend sein, indem es frühzeitig kritische Herzprobleme erkennt und eine sofortige Behandlung ermöglicht. Es unterstützt das klinische Management und die Prognosebewertung von Patienten.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zum EKG gehören die Echokardiographie, die Magnetresonanztomographie (MRT) des Herzens und die Computertomographie (CT) des Herzens. Diese Verfahren bieten ergänzende Informationen und werden je nach klinischer Fragestellung eingesetzt.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschungsarbeiten befassen sich mit der Verbesserung der EKG-Technologie, einschließlich der Entwicklung tragbarer EKG-Geräte und der Anwendung künstlicher Intelligenz zur automatisierten Auswertung und Diagnose.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Die zukünftige Forschung zielt darauf ab, die diagnostische Genauigkeit und Benutzerfreundlichkeit von EKGs weiter zu verbessern, was zu einer breiteren Anwendung und besseren Patientenversorgung führen könnte.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Das EKG ist ein unverzichtbares Werkzeug in der modernen Kardiologie, das wichtige Informationen über die elektrische Aktivität des Herzens liefert. Es ist schnell, kostengünstig und weit verbreitet in der klinischen Praxis.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Insgesamt trägt das EKG wesentlich zur Diagnostik und Überwachung von Herz-Kreislauf-Erkrankungen bei und ist ein unverzichtbares Instrument für die tägliche medizinische Praxis und das Patientenmanagement.",
              },
            ],
          },
        ],
      },
      // 2tab 88
      {
        id: 88,
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
              "Erklären Sie, dass das Ziel des EKGs darin besteht, die elektrische Aktivität des Herzens aufzuzeichnen und Abweichungen vom normalen Herzrhythmus zu erkennen.",
            third:
              '"Wir machen ein EKG, um zu sehen, wie Ihr Herz arbeitet und um eventuelle Unregelmäßigkeiten im Herzrhythmus zu erkennen."',
            fourth:
              '"Das EKG hilft uns, festzustellen, ob Ihr Herz regelmäßig schlägt und ob es Anzeichen für Herzprobleme gibt."',
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie, wie der Ablauf des EKGs funktioniert, indem Elektroden an bestimmten Körperstellen angebracht und die Herzaktivität aufgezeichnet wird.",
            third:
              '"Wir werden Ihnen kleine Elektroden auf die Brust, Arme und Beine kleben, die dann die elektrische Aktivität Ihres Herzens messen."',
            fourth:
              '"Die Elektroden erfassen die elektrischen Signale Ihres Herzens und übertragen sie auf das EKG-Gerät."',
          },
          {
            first: "Vorbereitung",
            second:
              "Erwähnen Sie, dass der Patient entspannt und ruhig sein sollte und dass die Haut an den Stellen, an denen die Elektroden angebracht werden, sauber und trocken sein muss.",
            third:
              '"Bitte entspannen Sie sich und atmen Sie ruhig. Wir müssen sicherstellen, dass Ihre Haut sauber und trocken ist, wo die Elektroden angebracht werden."',
            fourth:
              '"Es ist wichtig, dass Sie ruhig liegen und sich entspannen, damit wir genaue Ergebnisse erhalten."',
          },
          {
            first: "Risiken",
            second:
              "Betonen Sie, dass das EKG ein nicht-invasives Verfahren ist und daher nur minimale Risiken bestehen, wie seltene Hautirritationen durch die Elektroden.",
            third:
              '"Das EKG ist sehr sicher. Gelegentlich kann es zu leichter Hautrötung kommen, wo die Elektroden angebracht werden."',
            fourth:
              '"Da das EKG nicht-invasiv ist, sind Risiken wie Hautirritationen durch die Elektroden selten und meist harmlos."',
          },
          {
            first: "Vorteile",
            second:
              "Heben Sie hervor, dass das EKG schnell, kostengünstig und wertvoll für die Diagnose und Überwachung der Herzgesundheit ist.",
            third:
              '"Ein EKG ist eine schnelle und kostengünstige Methode, um viele Herzprobleme frühzeitig zu erkennen."',
            fourth:
              '"Das EKG liefert uns wichtige Informationen über Ihr Herz, und das in kurzer Zeit und ohne großen Aufwand."',
          },
          {
            first: "Alternativen",
            second:
              "Nennen Sie die Alternativen zum EKG, wie Echokardiographie, MRT und CT des Herzens, und erläutern Sie, dass diese Verfahren ergänzende Informationen bieten.",
            third:
              '"Neben dem EKG gibt es auch die Möglichkeit einer Echokardiographie, bei der wir das Herz mittels Ultraschall untersuchen."',
            fourth:
              '"Für detailliertere Bilder könnten wir auch eine MRT oder CT des Herzens in Betracht ziehen."',
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie, dass es kaum Kontraindikationen gibt, aber Hauterkrankungen an den Stellen, wo die Elektroden angebracht werden, problematisch sein könnten.",
            third:
              '"Es gibt nur wenige Gründe, warum wir kein EKG machen könnten, wie zum Beispiel schwere Hautprobleme an den Elektrodenstellen."',
            fourth:
              '"Bei Hauterkrankungen in den Bereichen, wo die Elektroden angebracht werden, müssen wir möglicherweise eine andere Methode wählen."',
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie die möglichen Ergebnisse eines EKGs, wie normale Befunde, Herzrhythmusstörungen, Anzeichen eines Herzinfarkts oder Hypertrophie des Herzmuskels.",
            third:
              '"Das EKG kann normale Herzaktivität zeigen oder Probleme wie Herzrhythmusstörungen oder Hinweise auf einen Herzinfarkt aufdecken."',
            fourth:
              '"Wir können auch sehen, ob Ihr Herzmuskel vergrößert ist, was auf bestimmte Herzkrankheiten hinweisen könnte."',
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Wichtigkeit des Einverständnisses des Patienten, um sicherzustellen, dass er die Untersuchung versteht und damit einverstanden ist.",
            third:
              '"Es ist wichtig, dass Sie der Untersuchung zustimmen, nachdem Sie alle Informationen erhalten haben und Ihre Fragen beantwortet wurden."',
            fourth:
              '"Ihr Einverständnis ist notwendig, damit wir die Untersuchung durchführen können und Sie die Untersuchung verstehen."',
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Beschreiben Sie, wie der Arzt dem Patienten die Untersuchung und deren Zweck erklärt und sicherstellt, dass der Patient alle Fragen verstanden hat, bevor er um schriftliches Einverständnis bittet.",
            third:
              '"Ich werde Ihnen jetzt genau erklären, warum wir ein EKG durchführen und wie es abläuft. Haben Sie dazu noch Fragen, bevor wir beginnen?"',
            fourth:
              '"Nachdem ich Ihnen alles erklärt habe, möchte ich sicherstellen, dass Sie alles verstanden haben, bevor Sie Ihr Einverständnis geben."',
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Weisen Sie den Patienten darauf hin, dass die Ergebnisse der Untersuchung mit ihm besprochen werden und informieren Sie ihn darüber, wann und wie er die Ergebnisse erhalten wird.",
            third:
              '"Nach der Untersuchung werde ich die Ergebnisse mit Ihnen besprechen und Ihnen sagen, wie es weitergeht."',
            fourth:
              '"Wir informieren Sie, sobald die Ergebnisse vorliegen, und besprechen dann die nächsten Schritte gemeinsam."',
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie die Ergebnisse in verständlicher Sprache, erläutern Sie mögliche Befunde und besprechen Sie die nächsten Schritte oder Behandlungsoptionen.",
            third:
              '"Die Ergebnisse zeigen, dass Ihr Herz regelmäßig schlägt, was ein gutes Zeichen ist. Wir werden dennoch einige weitere Tests durchführen."',
            fourth:
              '"Es gibt Anzeichen für eine Herzrhythmusstörung. Ich werde Ihnen die möglichen Behandlungsoptionen erklären und wie wir weiter vorgehen."',
          },
        ],
      },
      // 3tab 89
      {
        id: 89,
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
              "Erklären Sie, dass das EKG (Elektrokardiogramm) ein Verfahren zur Aufzeichnung der elektrischen Aktivität des Herzens ist, das über an der Haut angebrachte Elektroden durchgeführt wird.",
            third:
              "Das EKG ist eine Methode, um die elektrische Aktivität des Herzens zu messen, indem wir Elektroden auf die Haut des Patienten kleben.",
            fourth:
              "Das Elektrokardiogramm zeichnet die elektrischen Impulse auf, die durch das Herz wandern, um den Herzschlag zu koordinieren.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erläutern Sie, dass das EKG zur Diagnose von Herzrhythmusstörungen, Myokardinfarkten, Elektrolytstörungen und hypertrophen Kardiomyopathien verwendet wird.",
            third:
              "Mit dem EKG können wir Herzrhythmusstörungen, wie Vorhofflimmern oder ventrikuläre Tachykardien, feststellen.",
            fourth:
              "Das EKG hilft uns, akute Myokardinfarkte und chronische Herzprobleme wie Hypertrophien zu diagnostizieren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Beschreiben Sie, dass die Ergebnisse des EKGs Aufschluss über den Herzrhythmus, die Herzfrequenz, die elektrische Achse und mögliche pathologische Veränderungen wie Ischämien oder Infarkte geben.",
            third:
              "Die Ergebnisse zeigen uns, ob der Herzrhythmus regelmäßig oder unregelmäßig ist und ob es Anzeichen für einen Herzinfarkt gibt.",
            fourth:
              "Das EKG kann uns auch die elektrische Achse des Herzens anzeigen und Hinweise auf andere Erkrankungen wie eine Hypertrophie geben.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie Indikationen wie Brustschmerzen, Verdacht auf Herzrhythmusstörungen, bekannte Herzkrankheiten, Überwachung von Patienten mit kardiovaskulären Risikofaktoren und präoperative Beurteilungen.",
            third:
              "Ein EKG ist indiziert bei Patienten mit Brustschmerzen, um einen Myokardinfarkt auszuschließen.",
            fourth:
              "Wir führen ein EKG durch, um Herzrhythmusstörungen bei Patienten mit bekannten Herzkrankheiten zu überwachen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie, dass es wenige Kontraindikationen gibt, aber Hauterkrankungen oder schwere Verbrennungen an den Elektrodenstellen könnten problematisch sein.",
            third:
              "Kontraindikationen sind selten, aber bei schweren Hautinfektionen an den Elektrodenstellen sollten wir vorsichtig sein.",
            fourth:
              "Bei Patienten mit großflächigen Verbrennungen an der Brust könnte es schwierig sein, Elektroden korrekt anzubringen.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erklären Sie, dass das EKG bei der Differenzierung zwischen verschiedenen Herzrhythmusstörungen, Myokardinfarkt, Perikarditis und Lungenembolie helfen kann.",
            third:
              "Das EKG hilft uns, zwischen Vorhofflimmern und anderen supraventrikulären Tachykardien zu unterscheiden.",
            fourth:
              "Es kann auch nützlich sein, um eine Perikarditis von einem akuten Myokardinfarkt zu unterscheiden.",
          },
          {
            first: "Veränderungen beim Myokardinfarkt",
            second:
              "Beschreiben Sie typische EKG-Veränderungen beim Myokardinfarkt wie ST-Hebungen, T-Wellen-Inversionen und pathologische Q-Wellen.",
            third:
              "Bei einem akuten Myokardinfarkt sehen wir häufig ST-Hebungen in bestimmten Ableitungen.",
            fourth:
              "Chronische Infarkte können durch das Vorhandensein pathologischer Q-Wellen im EKG identifiziert werden.",
          },
          {
            first: "Veränderungen bei Arrhythmien",
            second:
              "Erläutern Sie EKG-Veränderungen bei verschiedenen Arrhythmien, z.B. Vorhofflimmern (unregelmäßiger Rhythmus, fehlende P-Wellen) und ventrikuläre Tachykardie (breiter QRS-Komplex).",
            third:
              "Vorhofflimmern zeigt sich durch einen unregelmäßigen Rhythmus und das Fehlen von P-Wellen im EKG.",
            fourth:
              "Eine ventrikuläre Tachykardie ist durch einen breiten QRS-Komplex und eine hohe Herzfrequenz gekennzeichnet.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen Sie die Erstellung von Behandlungsplänen basierend auf EKG-Befunden, wie Antiarrhythmika bei Herzrhythmusstörungen oder Reperfusionsstrategien bei Myokardinfarkt.",
            third:
              "Bei Vorhofflimmern können wir Antiarrhythmika einsetzen oder eine Kardioversion in Erwägung ziehen.",
            fourth:
              "Bei einem Myokardinfarkt ist eine sofortige Reperfusionstherapie, entweder durch PCI oder Thrombolyse, notwendig.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit Kardiologen, Radiologen, Pflegepersonal und Notfallmedizinern.",
            third:
              "Eine enge Zusammenarbeit mit Kardiologen ist wichtig, um die beste Behandlung für Patienten mit komplexen Herzrhythmusstörungen zu gewährleisten.",
            fourth:
              "Wir sollten auch Radiologen einbeziehen, um ergänzende bildgebende Diagnostik zu nutzen, falls erforderlich.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erläutern Sie, wie regelmäßige Überprüfungen und Kalibrierungen der EKG-Geräte, sowie Schulungen des Personals, zur Sicherstellung der Qualität beitragen.",
            third:
              "Regelmäßige Kalibrierung der EKG-Geräte und Fortbildungen für das Personal sind unerlässlich für genaue Diagnosen.",
            fourth:
              "Durch regelmäßige Qualitätskontrollen stellen wir sicher, dass die EKG-Daten zuverlässig und präzise sind.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Beschreiben Sie die Wichtigkeit der sorgfältigen Dokumentation der EKG-Ergebnisse im Patientendossier.",
            third:
              "Es ist wichtig, die EKG-Befunde detailliert im Patientendossier zu dokumentieren und bei auffälligen Ergebnissen eine zeitnahe Weiterverfolgung zu planen.",
            fourth:
              "Bei abnormalen EKG-Befunden sollten wir eine Überweisung an einen Kardiologen und gegebenenfalls weitere diagnostische Tests veranlassen.",
          },
        ],
      },
      // 4tab 90
      {
        id: 90,
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
              "40-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "50-jähriger Patient klagt über plötzliche Brustschmerzen und Atemnot. Vorgeschichte von Bluthochdruck.",
            fourth:
              "65-jährige Patientin berichtet über unregelmäßigen Herzschlag und Schwindelgefühle. Vorgeschichte einer Herzinsuffizienz.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "EKG zeigt einen regelmäßigen Sinusrhythmus, normale P-Wellen, QRS-Komplexe und T-Wellen.",
            third:
              "EKG zeigt ST-Hebungen in den Ableitungen V2-V4, pathologische Q-Wellen in V1-V3.",
            fourth:
              "EKG zeigt unregelmäßigen Rhythmus ohne erkennbare P-Wellen und unregelmäßige QRS-Komplexe.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das EKG-Ergebnis unterstützt den Ausschluss kardiologischer Erkrankungen.",
            third:
              "Der Befund deutet auf einen akuten Myokardinfarkt hin. Die ST-Hebungen und pathologischen Q-Wellen korrelieren mit den Symptomen des Patienten.",
            fourth:
              "Die unregelmäßigen Rhythmen und fehlenden P-Wellen sind typisch für Vorhofflimmern.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die sofortige Einleitung der Reperfusionsbehandlung, wie PCI oder Thrombolyse.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer Antiarrhythmika-Therapie oder möglicherweise einer Kardioversion.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Herzens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines akuten Myokardinfarkts basierend auf EKG-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Vorhofflimmern aufgrund der EKG-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmietel",
            second:
              "EKG zeigt normale Sinuskurven ohne Auffälligkeiten in allen Ableitungen.",
            third:
              "EKG-Aufnahmen zeigen deutliche ST-Hebungen und pathologische Q-Wellen.",
            fourth:
              "EKG-Bilder zeigen unregelmäßige QRS-Komplexe und fehlende P-Wellen.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige Kontrolluntersuchungen zur Überwachung des Herz-Kreislauf-Systems und zur Prävention kardiovaskulärer Erkrankungen.",
            third:
              "Wir empfehlen eine sofortige PCI oder Thrombolyse, gefolgt von einer engmaschigen Überwachung auf der Intensivstation.",
            fourth:
              "Wir empfehlen eine Antiarrhythmika-Therapie und erwägen eine Kardioversion. Langfristig sollte eine Antikoagulation in Betracht gezogen werden.",
          },
        ],
      },
      // 5tab 91
      {
        id: 91,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Elektrokardiogramm (EKG)-Gerät ist ein wichtiges medizinisches Diagnosewerkzeug, das die elektrische Aktivität des Herzens aufzeichnet und darstellt. Hier sind die wesentlichen Komponenten und Funktionen eines EKG-Geräts: ",
        text_list: [
          {
            bold: "Elektroden: ",
            other:
              "Sind kleine, leitende Pads, die auf die Haut des Patienten geklebt werden. Sie erfassen die elektrischen Signale des Herzens. Üblicherweise werden 10 Elektroden an bestimmten Stellen am Körper angebracht (vier an den Extremitäten und sechs auf der Brust).",
          },
          {
            bold: "Elektrokabel: ",
            other:
              "Verbinden die Elektroden mit dem EKG-Gerät und leiten die erfassten elektrischen Signale weiter.",
          },
          {
            bold: "Verstärker: ",
            other:
              "Verstärkt die schwachen elektrischen Signale des Herzens, sodass sie gemessen und analysiert werden können.",
          },
          {
            bold: "Filter: ",
            other:
              "Dienen dazu, Störungen und Rauschen aus den Signalen zu entfernen, um klare und genaue EKG-Daten zu gewährleisten.",
          },
          {
            bold: "Schreibgerät oder Display: ",
            other:
              "Ein moderner EKG-Monitor zeigt die Herzaktivität in Echtzeit auf einem Bildschirm an. Bei älteren Geräten wird die Herzaktivität auf Papier gedruckt.",
          },
          {
            bold: "Papierlaufwerk: ",
            other:
              "Bei traditionellen EKG-Geräten wird die Herzaktivität auf spezielles Millimeterpapier gedruckt, das sich kontinuierlich unter den Schreibstiften bewegt.",
          },
          {
            bold: "Steuerkonsole: ",
            other:
              "Ermöglicht dem Bediener, das EKG-Gerät zu steuern, Einstellungen vorzunehmen, den Patienten zu identifizieren und den Aufnahmeprozess zu starten.",
          },
          {
            bold: "Computer- oder Datenverarbeitungseinheit: ",
            other:
              "Analysiert die elektrischen Signale des Herzens und erzeugt die EKG-Kurven. Moderne Geräte verfügen über Software zur Interpretation und Analyse der Daten.",
          },
          {
            bold: "Speicherungseinheit: ",
            other:
              "Speichert die aufgenommenen EKG-Daten für spätere Analyse und Vergleich. Dies kann ein interner Speicher oder ein externer Datenträger sein.",
          },
          {
            bold: "Kommunikationsschnittstellen: ",
            other:
              "Ermöglichen die Übertragung der EKG-Daten zu anderen Geräten oder in elektronische Patientenakten (EPA). Dies kann durch USB, Netzwerkverbindungen oder drahtlos erfolgen.",
          },
          {
            bold: "Patientenerdung: ",
            other:
              "Eine Sicherheitsmaßnahme, die sicherstellt, dass der Patient geerdet ist, um elektrische Störungen und das Risiko eines elektrischen Schlags zu minimieren.",
          },
          {
            bold: "Sprachkommunikationssystem: ",
            other:
              "Ermöglicht dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben, falls erforderlich.",
          },
          {
            bold: "Alarmsystem: ",
            other:
              "Warnt das medizinische Personal bei Erkennung abnormaler Herzrhythmen oder technischer Probleme während der Untersuchung.",
          },
          {
            bold: "Batteriebetrieb: ",
            other:
              "Moderne tragbare EKG-Geräte verfügen oft über einen Batteriebetrieb, um Mobilität und Einsatz in Notfallsituationen zu gewährleisten.",
          },
        ],
      },
      // 6tab 92
      {
        id: 92,
        title: "Wortschatz",
        text: "Für eine Fachsprachenprüfung im Bereich der Schilddrüsen-Szintigraphie-Diagnostik sind folgende Begriffe und Phrasen wesentlich:",
        text_list: [
          {
            bold: "Elektrokardiogramm (EKG): ",
            other: "Aufzeichnung der elektrischen Aktivität des Herzens.",
          },
          {
            bold: "Elektroden: ",
            other:
              "Kleine, leitende Pads, die auf die Haut geklebt werden, um elektrische Signale des Herzens zu erfassen.",
          },
          {
            bold: "Ableitungen: ",
            other:
              "Verschiedene Blickwinkel, aus denen die elektrische Aktivität des Herzens aufgezeichnet wird; Standard sind 12 Ableitungen.",
          },
          {
            bold: "Sinusrhythmus: ",
            other: "Normaler Herzrhythmus, der vom Sinusknoten ausgeht.",
          },
          {
            bold: "Arrhythmie: ",
            other: "Unregelmäßiger Herzrhythmus.",
          },
          {
            bold: "Vorhofflimmern: ",
            other:
              "Häufige Form der Arrhythmie mit unregelmäßigem und oft schnellem Herzschlag.",
          },
          {
            bold: "Ventrikuläre Tachykardie: ",
            other: "Schneller Herzschlag, der in den Herzkammern beginnt.",
          },
          {
            bold: "Bradykardie: ",
            other: "Langsamer Herzschlag.",
          },
          {
            bold: "Tachykardie: ",
            other: "Schneller Herzschlag.",
          },
          {
            bold: "ST-Hebung: ",
            other:
              "Erhöhung der ST-Strecke im EKG, oft Hinweis auf Myokardinfarkt.",
          },
          {
            bold: "QRS-Komplex: ",
            other:
              "Teil des EKGs, der die Erregungsausbreitung in den Herzkammern darstellt.",
          },
          {
            bold: "P-Welle: ",
            other:
              "Darstellung der Erregungsausbreitung in den Vorhöfen des Herzens.",
          },
          {
            bold: "T-Welle: ",
            other: "Darstellung der Erregungsrückbildung in den Herzkammern.",
          },
          {
            bold: "U-Welle: ",
            other:
              "Kleine Welle nach der T-Welle, deren Ursprung nicht vollständig geklärt ist.",
          },
          {
            bold: "Pathologische Q-Welle: ",
            other:
              "Hinweis auf eine frühere Schädigung des Herzmuskels, wie einen Myokardinfarkt.",
          },
          {
            bold: "Repolarisation: ",
            other: "Phase der Erregungsrückbildung im Herzen.",
          },
          {
            bold: "Depolarisation: ",
            other: "Phase der Erregungsausbreitung im Herzen.",
          },
          {
            bold: "Ischämie: ",
            other:
              "Minderdurchblutung des Herzmuskels, oft erkennbar durch ST-Senkungen.",
          },
          {
            bold: "Elektrokardiograph: ",
            other: "Gerät zur Aufzeichnung des EKGs.",
          },
          {
            bold: "Myokardinfarkt: ",
            other:
              "Herzinfarkt, verursacht durch den Verschluss einer oder mehrerer Koronararterien.",
          },
          {
            bold: "Herzachse: ",
            other:
              "Elektrische Achse des Herzens, gibt die Hauptrichtung der Erregungsausbreitung an.",
          },
          {
            bold: "Herzfrequenz: ",
            other: "Anzahl der Herzschläge pro Minute.",
          },
          {
            bold: "Holter-EKG: ",
            other: "Langzeit-EKG, das über 24 Stunden oder länger aufzeichnet.",
          },
          {
            bold: "Stress-EKG: ",
            other:
              "EKG-Aufzeichnung während körperlicher Belastung, um belastungsinduzierte Herzprobleme zu erkennen.",
          },
          {
            bold: "Kardiologie: ",
            other:
              "Medizinisches Fachgebiet, das sich mit Herz- und Kreislauferkrankungen beschäftigt.",
          },
        ],
      },
      // 7tab 93
      {
        id: 93,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 94
      {
        id: 94,
        title: "PDF",
        link: "https://drive.google.com/file/d/1fcpky8nGyV-azEghdRditSI6e7z26lJT/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 10
  // start of parent tab 11 echokardiographie
  {
    id: 11,
    title: "Echokardiographie",
    checked: false,
    childTabs: [
      // 1tab 95
      {
        id: 95,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Echokardiographie wird zur Beurteilung der Herzstruktur und -funktion eingesetzt. Sie dient der Diagnose und Überwachung verschiedener Herzerkrankungen, einschließlich Herzinsuffizienz, Klappenerkrankungen und angeborener Herzfehler.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Echokardiographie ist ein zentrales Werkzeug in der Kardiologie. Sie wird sowohl in der Notfalldiagnostik als auch in der Routineuntersuchung verwendet und ist unerlässlich für die Entscheidungsfindung bei der Behandlung kardiovaskulärer Erkrankungen.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Echokardiographie basiert auf der Verwendung von Ultraschallwellen zur Bildgebung des Herzens. Diese Wellen werden von einem Transducer ausgesendet und reflektieren an den Strukturen des Herzens, um ein Bild zu erzeugen.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Zu den wichtigsten technischen Aspekten gehören die Wahl des geeigneten Transducers, die Einstellung der Bildparameter und die Interpretation der erzeugten Bilder. Die wichtigsten Modi sind der M-Mode, der 2D-Modus und der Doppler-Modus.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Interpretation der Echokardiographie erfordert ein tiefes Verständnis der normalen und pathologischen Herzstruktur und -funktion. Ärzte müssen in der Lage sein, verschiedene Schnittebenen und -ansichten zu analysieren.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Zu den häufigsten Befunden gehören Klappenerkrankungen, Ventrikelfunktionsstörungen und perikardiale Erkrankungen. Die genaue Interpretation dieser Befunde ist entscheidend für die Diagnose und das Management der Patienten.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Echokardiographie ist nicht invasiv, relativ kostengünstig und weit verbreitet verfügbar. Sie liefert schnelle und präzise Informationen über die Herzfunktion.",
              },
              {
                bold_text: "Nachteile:",
                text: "Die Bildqualität kann bei Patienten mit Adipositas oder Lungenkrankheiten eingeschränkt sein. Außerdem ist die Untersuchung stark anwenderabhängig.",
              },
              {
                bold_text: "Risiken:",
                text: "Da die Echokardiographie auf Ultraschall basiert, gibt es keine signifikanten Risiken für den Patienten. Es sind keine Strahlenbelastungen oder invasiven Eingriffe erforderlich.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Echokardiographie spielt eine entscheidende Rolle bei der Diagnose und Überwachung von Herzkrankheiten. Sie unterstützt die Entscheidung über medikamentöse Behandlungen und operative Eingriffe.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Eine präzise Echokardiographie ist essenziell für das Management von Patienten mit Herzerkrankungen, da sie wichtige Informationen über die Herzfunktion und -struktur liefert.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text:
                  "Zu den Alternativen der Echokardiographie gehören die Magnetresonanztomographie (MRT) des Herzens, die Computertomographie (CT) und die Herzkatheteruntersuchung. Diese Methoden bieten zusätzliche Informationen, sind jedoch meist invasiver und kostenintensiver.",
                text: "",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Neueste Forschungsergebnisse zeigen Fortschritte in der 3D-Echokardiographie und der Anwendung von Kontrastmitteln zur Verbesserung der Bildqualität.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Die zukünftige Entwicklung der Echokardiographie könnte die Integration von Künstlicher Intelligenz zur Automatisierung und Verbesserung der Bildauswertung umfassen.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Echokardiographie ist ein unverzichtbares diagnostisches Werkzeug in der Kardiologie, das eine nicht-invasive, sichere und effektive Beurteilung der Herzfunktion ermöglicht.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Ihre Bedeutung im klinischen Alltag und die kontinuierliche Weiterentwicklung machen die Echokardiographie zu einer Schlüsselmethode in der modernen Herzmedizin.",
              },
            ],
          },
        ],
      },
      // 2tab 96
      {
        id: 96,
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
              "Erklären Sie, dass die Echokardiographie dazu dient, die Struktur und Funktion des Herzens zu beurteilen, um Herzerkrankungen wie Herzinsuffizienz, Klappenerkrankungen und angeborene Herzfehler zu diagnostizieren und zu überwachen.",
            third:
              "Wir möchten Ihre Herzstruktur und -funktion überprüfen, um sicherzustellen, dass es keine Probleme wie Herzinsuffizienz oder Klappenerkrankungen gibt.",
            fourth:
              "Diese Untersuchung hilft uns, festzustellen, ob Ihr Herz normal arbeitet oder ob es Anomalien gibt, die behandelt werden müssen.",
          },
          {
            first: "Ablauf",
            second:
              "Erklären Sie, dass ein Gel auf die Brust des Patienten aufgetragen wird, um den Kontakt zwischen Haut und Ultraschallkopf zu verbessern. Der Ultraschallkopf wird über die Brust bewegt, um Bilder des Herzens zu erzeugen. Dies dauert in der Regel 30-60 Minuten.",
            third:
              "Zuerst tragen wir ein Gel auf Ihre Brust auf, dann bewegen wir den Ultraschallkopf, um Bilder Ihres Herzens zu machen. Das dauert etwa 30 bis 60 Minuten.",
            fourth:
              "Wir werden ein spezielles Gel auf Ihre Brust auftragen, damit der Ultraschallkopf gute Bilder Ihres Herzens aufnehmen kann. Die gesamte Prozedur dauert in der Regel nicht länger als eine Stunde.",
          },
          {
            first: "Vorbereitung",
            second:
              "Betonen Sie, dass keine spezielle Vorbereitung erforderlich ist. Der Patient sollte bequeme Kleidung tragen und eventuell Schmuck ablegen, der den Zugang zur Brust behindern könnte.",
            third:
              "Es ist keine besondere Vorbereitung nötig. Tragen Sie bitte bequeme Kleidung und legen Sie eventuell Schmuck ab, der im Weg sein könnte.",
            fourth:
              "Sie müssen nichts Spezielles tun, um sich vorzubereiten. Bitte tragen Sie lockere Kleidung und entfernen Sie Schmuck, der die Untersuchung stören könnte.",
          },
          {
            first: "Risiken",
            second:
              "Erklären Sie, dass die Echokardiographie ein sicheres, nicht-invasives Verfahren ist und keine bekannten Risiken oder Nebenwirkungen hat, da sie auf Ultraschall basiert und keine Strahlenbelastung beinhaltet.",
            third:
              "Dieses Verfahren ist sehr sicher und verursacht keine Schmerzen oder Strahlenbelastung. Es gibt keine bekannten Risiken.",
            fourth:
              "Da es sich um Ultraschall handelt, besteht keine Gefahr durch Strahlung oder invasive Eingriffe. Es ist ein sehr sicheres Verfahren.",
          },
          {
            first: "Vorteile",
            second:
              "Betonen Sie, dass die Echokardiographie eine schnelle, schmerzlose und zuverlässige Methode zur Beurteilung der Herzfunktion ist, die wertvolle Informationen ohne invasive Eingriffe liefert.",
            third:
              "Die Echokardiographie ist schnell, schmerzlos und liefert uns wertvolle Informationen über Ihr Herz ohne invasive Maßnahmen.",
            fourth:
              "Mit dieser Untersuchung können wir schnell und zuverlässig feststellen, wie Ihr Herz funktioniert, ohne dass Sie Schmerzen haben oder invasive Eingriffe notwendig sind.",
          },
          {
            first: "Alternativen",
            second:
              "Erklären Sie, dass es alternative Untersuchungsmethoden wie die Magnetresonanztomographie (MRT), Computertomographie (CT) und Herzkatheteruntersuchungen gibt, die jedoch oft invasiver, teurer und mit mehr Risiken verbunden sind.",
            third:
              "Alternativen sind MRT oder CT des Herzens, die aber invasiver und teurer sein können und zusätzliche Risiken bergen.",
            fourth:
              "Es gibt auch die Möglichkeit einer Herzkatheteruntersuchung, aber diese ist invasiver und mit höheren Kosten und Risiken verbunden.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Betonen Sie, dass es nur wenige Kontraindikationen gibt, aber bei Patienten mit schweren Lungenerkrankungen oder Brustdeformitäten könnte die Bildqualität eingeschränkt sein.",
            third:
              "Die Untersuchung ist für fast jeden geeignet, aber bei schweren Lungenerkrankungen oder Brustdeformitäten könnten die Bilder weniger klar sein.",
            fourth:
              "Für die meisten Menschen ist das Verfahren sicher. Bei bestimmten Lungenerkrankungen oder Brustdeformitäten kann die Bildqualität beeinträchtigt sein.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie, dass die Untersuchung Hinweise auf Herzklappenerkrankungen, Pumpfunktionsstörungen, strukturelle Anomalien und andere Herzerkrankungen geben kann, die für die weitere Behandlung und das Management des Patienten wichtig sind.",
            third:
              "Wir könnten Herzklappenerkrankungen, Pumpfunktionsstörungen oder andere strukturelle Probleme feststellen, die weiter behandelt werden müssen.",
            fourth:
              "Die Untersuchung kann Anomalien wie Herzklappenerkrankungen oder strukturelle Defekte aufzeigen, die für Ihre weitere Behandlung wichtig sind.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie, dass das Einverständnis des Patienten für jede medizinische Untersuchung, einschließlich der Echokardiographie, unerlässlich ist, um sicherzustellen, dass der Patient über das Verfahren, seine Vorteile und Risiken informiert ist und seine Zustimmung gegeben hat.",
            third:
              "Ihr Einverständnis ist wichtig, damit wir sicherstellen können, dass Sie alle Informationen über das Verfahren und seine Risiken verstanden haben.",
            fourth:
              "Bevor wir mit der Untersuchung beginnen, benötigen wir Ihr Einverständnis. Das zeigt, dass Sie vollständig über den Ablauf und mögliche Risiken informiert sind.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie, dass der Patient eine Einverständniserklärung unterschreiben muss, nachdem er umfassend über den Zweck, den Ablauf, die Risiken und Alternativen der Echokardiographie informiert wurde und alle seine Fragen beantwortet wurden.",
            third:
              "Sie werden gebeten, eine Einverständniserklärung zu unterschreiben, nachdem wir alle Details und Ihre Fragen geklärt haben.",
            fourth:
              "Bevor wir beginnen, unterschreiben Sie bitte eine Einverständniserklärung, die bestätigt, dass Sie über alles informiert wurden und einverstanden sind.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Betonen Sie, dass der Patient während der Untersuchung entspannt bleiben sollte und dass das medizinische Personal jederzeit zur Verfügung steht, um Fragen zu beantworten und den Patienten zu unterstützen.",
            third:
              "Bleiben Sie während der Untersuchung bitte entspannt. Wir sind hier, um Ihnen zu helfen und Ihre Fragen zu beantworten.",
            fourth:
              "Entspannen Sie sich während der Untersuchung. Unser Team steht Ihnen jederzeit zur Verfügung, um Ihnen zu helfen und Fragen zu klären.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, dass die Ergebnisse der Echokardiographie nach der Untersuchung vom Arzt analysiert und mit dem Patienten besprochen werden. Der Arzt wird die Befunde erklären und gegebenenfalls weitere diagnostische Schritte oder Behandlungsmaßnahmen empfehlen.",
            third:
              "Nach der Untersuchung werden wir die Ergebnisse analysieren und mit Ihnen besprechen, was sie bedeuten und welche Schritte als nächstes folgen.",
            fourth:
              "Ihr Arzt wird die Ergebnisse der Echokardiographie mit Ihnen durchgehen und Ihnen erklären, was sie bedeuten und welche weiteren Maßnahmen notwendig sind.",
          },
        ],
      },
      // 3tab 97
      {
        id: 97,
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
              "Erklären Sie, dass die Echokardiographie ein bildgebendes Verfahren ist, das Ultraschallwellen nutzt, um detaillierte Bilder des Herzens zu erzeugen. Sie ist nicht invasiv, sicher und weit verbreitet zur Beurteilung der Herzstruktur und -funktion.",
            third:
              "Die Echokardiographie ist eine nicht-invasive Bildgebungstechnik, die Ultraschallwellen verwendet, um detaillierte Bilder des Herzens zu erstellen. Sie ist sicher und weit verbreitet zur Untersuchung der Herzstruktur und -funktion.",
            fourth:
              "Bei der Echokardiographie handelt es sich um ein bildgebendes Verfahren, das mit Ultraschall arbeitet, um die Herzstruktur und -funktion detailliert darzustellen. Es ist eine sichere und nicht-invasive Methode.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erläutern Sie, dass die Echokardiographie verwendet wird, um Herzklappen, die Pumpfunktion, die Größe und Form der Herzkammern, die Dicke der Herzwände und das Vorhandensein von Flüssigkeit im Herzbeutel zu beurteilen.",
            third:
              "Mit der Echokardiographie können wir die Herzklappenfunktion, die Pumpkraft des Herzens, die Größe und Form der Herzkammern, die Dicke der Herzwände sowie eventuelle Flüssigkeitsansammlungen im Herzbeutel untersuchen.",
            fourth:
              "Dieses Verfahren ermöglicht uns, die Funktion der Herzklappen, die Pumpleistung, die Größe und Form der Kammern, die Wanddicke des Herzens sowie das Vorhandensein von Flüssigkeit im Herzbeutel zu bewerten.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Besprechen Sie, dass die Ergebnisse der Echokardiographie strukturelle Anomalien wie Herzklappenfehler, ventrikuläre Dysfunktionen, septale Defekte und Perikardergüsse aufzeigen können. Diese Informationen sind entscheidend für die Diagnose und das Management von Herzerkrankungen.",
            third:
              "Die Echokardiographie kann strukturelle Anomalien wie Herzklappenfehler, ventrikuläre Dysfunktionen, septale Defekte und Perikardergüsse aufzeigen. Diese Ergebnisse sind entscheidend für die weitere Diagnose und das Management des Patienten.",
            fourth:
              "Wir können damit strukturelle Probleme wie Herzklappenfehler, Funktionsstörungen der Ventrikel, septale Defekte und Perikardergüsse identifizieren. Diese Befunde sind wesentlich für die Diagnose und Behandlung des Patienten.",
          },
          {
            first: "Indikationen",
            second:
              "Erklären Sie, dass die Hauptindikationen für eine Echokardiographie Symptome wie Dyspnoe, Thoraxschmerzen, Herzgeräusche, Verdacht auf Herzinsuffizienz, Klappenerkrankungen und angeborene Herzfehler sind.",
            third:
              "Zu den Hauptindikationen für eine Echokardiographie gehören Symptome wie Atemnot, Brustschmerzen, auffällige Herzgeräusche sowie der Verdacht auf Herzinsuffizienz, Klappenerkrankungen und angeborene Herzfehler.",
            fourth:
              "Die Echokardiographie ist indiziert bei Symptomen wie Dyspnoe, Thoraxschmerzen, Herzgeräuschen und dem Verdacht auf Herzinsuffizienz, Klappenerkrankungen oder angeborenen Herzfehlern.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Betonen Sie, dass es nur wenige Kontraindikationen gibt, aber bei Patienten mit schwerer Adipositas, COPD oder Brustdeformitäten kann die Bildqualität eingeschränkt sein. Auch bei Patienten mit Infektionen oder Hautläsionen im Brustbereich sollte die Untersuchung sorgfältig abgewogen werden.",
            third:
              "Es gibt wenige Kontraindikationen, aber bei Patienten mit schwerer Adipositas, COPD oder Brustdeformitäten kann die Bildqualität eingeschränkt sein. Infektionen oder Hautläsionen im Brustbereich müssen ebenfalls berücksichtigt werden.",
            fourth:
              "Während es nur wenige Kontraindikationen gibt, kann die Bildqualität bei stark adipösen Patienten, solchen mit COPD oder Brustdeformitäten eingeschränkt sein. Infektionen oder Hautläsionen im Brustbereich sind auch zu beachten.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erläutern Sie, dass die Echokardiographie hilft, verschiedene Differenzialdiagnosen zu klären, wie z.B. zwischen Herzinsuffizienz, Kardiomyopathien, Myokarditis, Perikarditis und anderen kardiovaskulären Erkrankungen.",
            third:
              "Die Echokardiographie unterstützt uns bei der Differenzierung von Diagnosen wie Herzinsuffizienz, Kardiomyopathien, Myokarditis und Perikarditis sowie anderen kardiovaskulären Erkrankungen.",
            fourth:
              "Mit dieser Untersuchung können wir verschiedene Differenzialdiagnosen wie Herzinsuffizienz, Kardiomyopathien, Myokarditis, Perikarditis und andere Herzerkrankungen genauer abklären.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen Sie, dass die Ergebnisse der Echokardiographie wesentliche Informationen für die Erstellung und Anpassung von Behandlungsplänen liefern, wie z.B. die Notwendigkeit für medikamentöse Therapie, chirurgische Eingriffe oder interventionelle Kardiologie.",
            third:
              "Die Ergebnisse der Echokardiographie sind entscheidend für die Erstellung von Behandlungsplänen. Sie können Hinweise darauf geben, ob eine medikamentöse Therapie, ein chirurgischer Eingriff oder interventionelle Maßnahmen erforderlich sind.",
            fourth:
              "Basierend auf den Ergebnissen der Echokardiographie können wir Behandlungspläne anpassen und entscheiden, ob medikamentöse Therapien, chirurgische Eingriffe oder interventionelle Kardiologie notwendig sind.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie, dass die Echokardiographie oft eine enge Zusammenarbeit zwischen Kardiologen, Radiologen, Chirurgen und anderen Fachkräften erfordert, um eine umfassende Betreuung und optimale Behandlung des Patienten sicherzustellen.",
            third:
              "Eine erfolgreiche Echokardiographie erfordert die enge Zusammenarbeit von Kardiologen, Radiologen und eventuell Chirurgen, um eine optimale Patientenversorgung zu gewährleisten.",
            fourth:
              "Dieses Verfahren setzt eine gute interprofessionelle Zusammenarbeit zwischen Kardiologen, Radiologen und Chirurgen voraus, um eine umfassende Behandlung sicherzustellen.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erläutern Sie, dass regelmäßige Schulungen und Kalibrierungen der Geräte sowie die Einhaltung von Standardprotokollen und Qualitätskontrollen entscheidend sind, um eine hohe Qualität und Zuverlässigkeit der Echokardiographie-Ergebnisse sicherzustellen.",
            third:
              "Um eine hohe Qualität der Echokardiographie zu gewährleisten, sind regelmäßige Schulungen des Personals, Kalibrierungen der Geräte und strikte Einhaltung von Standardprotokollen notwendig.",
            fourth:
              "Qualitätsmanagement in der Echokardiographie umfasst regelmäßige Gerätekalibrierungen, Schulungen und die Einhaltung standardisierter Protokolle, um zuverlässige und präzise Ergebnisse zu gewährleisten.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Betonen Sie, dass eine detaillierte Dokumentation der Echokardiographie-Befunde unerlässlich ist. Dies umfasst die Aufzeichnung der Bilder und die Erstellung eines ausführlichen Berichts, der in die Patientenakte eingepflegt wird. Eine regelmäßige Überwachung und Nachuntersuchungen sind wichtig für das Patientenmanagement.",
            third:
              "Eine umfassende Dokumentation der Echokardiographie-Befunde ist entscheidend. Dies beinhaltet die Speicherung der Bilder und die Erstellung eines detaillierten Berichts, der regelmäßig überprüft und aktualisiert wird.",
            fourth:
              "Die detaillierte Dokumentation der Untersuchungsergebnisse und regelmäßige Nachkontrollen sind essenziell, um den Verlauf der Herzerkrankung und die Wirksamkeit der Behandlung zu überwachen.",
          },
        ],
      },
      // 4tab 98
      {
        id: 98,
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
              "45-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient klagt über Müdigkeit, Atemnot und unregelmäßigen Herzschlag. Keine bekannte Herzerkrankung in der Vorgeschichte.",
            fourth:
              "75-jährige Patientin berichtet über Brustschmerzen, Schwindel und Atemnot bei Anstrengung. Familiengeschichte von Herzerkrankungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Echokardiographische Untersuchung zeigt normale Herzklappenfunktion, normale Größe und Funktion der Herzkammern ohne Auffälligkeiten.",
            third:
              "Die Echokardiographie zeigt eine deutliche Verlagerung des hinteren Mitralklappenblatts und einen signifikanten Rückfluss des Blutes in den linken Vorhof während der Systole.",
            fourth:
              "Die Echokardiographie offenbart eine Verengung der Aortenklappe mit einer reduzierten Öffnungsfläche und erhöhtem Druckgradienten über die Klappe.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Echokardiographie-Ergebnis unterstützt den Ausschluss von Herzerkrankungen und bestätigt die normale Herzfunktion.",
            third:
              "Der Befund deutet auf einen Mitralklappenprolaps hin, was die Symptome des Patienten erklärt und eine potenzielle Ursache für den Vorhofrückfluss darstellt.",
            fourth:
              "Die Verengung der Aortenklappe ist charakteristisch für eine Aortenklappenstenose, was die Brustschmerzen und die Atemnot der Patientin erklärt. Der erhöhte Druckgradient weist auf eine fortgeschrittene Erkrankung hin.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe. Empfehlung für eine regelmäßige Kontrolle und gesunden Lebensstil zur Aufrechterhaltung der Herzgesundheit.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer möglichen chirurgischen Korrektur der Mitralklappe oder eine medikamentöse Behandlung zur Reduzierung der Symptome und Verhinderung von Komplikationen wie Vorhofflimmern.",
            fourth:
              "Die Echokardiographie-Ergebnisse sind wichtig für die Planung einer operativen Aortenklappenersatz- oder -reparatur sowie für die medikamentöse Management der Symptome und Prävention von Herzinsuffizienz.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Herzens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines Mitralklappenprolaps basierend auf den Echokardiographie-Befunden und klinischem Bild.",
            fourth:
              "Diagnose einer Aortenklappenstenose aufgrund der Echokardiographie-Ergebnisse und der klinischen Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Herzstrukturen ohne Auffälligkeiten in allen Ansichten. Normale Herzklappen- und Kammerfunktion.",
            third:
              "Die Echokardiographie zeigt eine Verlagerung und Verformung des hinteren Mitralklappenblatts sowie einen deutlichen Blutflussrückfluss in den linken Vorhof.",
            fourth:
              "Echokardiographische Bilder zeigen eine stark verkalkte und verengte Aortenklappe mit reduziertem Öffnungsdurchmesser und erhöhtem Druckgradienten.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige gesundheitliche Überprüfungen zur Sicherstellung der fortdauernden Herzgesundheit und einen gesunden Lebensstil.",
            third:
              "Wir empfehlen eine chirurgische Korrektur der Mitralklappe in Betracht zu ziehen und/oder eine medikamentöse Therapie zur Symptomlinderung und Vermeidung von Komplikationen wie Vorhofflimmern. Regelmäßige Nachkontrollen sind notwendig.",
            fourth:
              "Es ist zu empfehlen, die Möglichkeit eines operativen Aortenklappenersatzes zu prüfen und die Symptome medikamentös zu managen. Eine regelmäßige Überwachung ist notwendig, um eine Verschlechterung der Klappenfunktion zu verhindern. Langfristige Behandlungsstrategien und Prognose sollten besprochen werden.",
          },
        ],
      },
      // 5tab 99
      {
        id: 99,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Echokardiographie-Gerät ist ein hochentwickeltes medizinisches Bildgebungsgerät, das detaillierte Bilder des Herzens erstellt. Hier sind die wesentlichen Komponenten und Funktionen eines Echokardiographie-Geräts:",
        text_list: [
          {
            bold: "Transducer (Ultraschallkopf) :",
            other:
              "Erzeugt Ultraschallwellen und empfängt die reflektierten Wellen vom Herzen. Der Transducer wird auf die Brust des Patienten aufgesetzt und bewegt, um verschiedene Ansichten des Herzens zu erhalten.",
          },
          {
            bold: "Ultraschallkonsole :",
            other:
              "Beinhaltet die Steuerungseinheiten und die Computer, die die vom Transducer empfangenen Daten verarbeiten und in Bilder umwandeln. Hier werden auch Einstellungen für die Bildqualität und -modi vorgenommen.",
          },
          {
            bold: "Monitor :",
            other:
              "Zeigt die Echtzeitbilder des Herzens an, die vom Transducer aufgenommen werden. Der Monitor ermöglicht dem Arzt oder Technologen, die Bilder während der Untersuchung zu beobachten und zu interpretieren.",
          },
          {
            bold: "Patientenliege :",
            other:
              "Eine verstellbare Liege, auf der der Patient während der Untersuchung liegt. Die Liege kann in verschiedene Positionen gebracht werden, um den Zugang zum Herzbereich zu optimieren.",
          },
          {
            bold: "EKG-Synchronisationssystem :",
            other:
              "Zeichnet das Elektrokardiogramm (EKG) des Patienten auf und synchronisiert es mit den Ultraschallbildern. Dies hilft, die Herzaktivität in Bezug auf die verschiedenen Phasen des Herzzyklus zu analysieren.",
          },
          {
            bold: "Doppler-Funktion :",
            other:
              "Eine spezielle Funktion, die die Flussgeschwindigkeit des Blutes durch die Herzkammern und Klappen misst. Dies ist wichtig, um Informationen über den Blutfluss und mögliche Stenosen oder Insuffizienzen der Herzklappen zu erhalten.",
          },
          {
            bold: "Bildarchivierungssystem (PACS) :",
            other:
              "Ermöglicht die Speicherung und Verwaltung der aufgenommenen Bilder und Videos. Bilder können zur späteren Analyse, Diagnose und Dokumentation gespeichert werden.",
          },
          {
            bold: "Kontrastmittelinjektor :",
            other:
              "Wird manchmal verwendet, um Kontrastmittel intravenös zu verabreichen. Dies verbessert die Sichtbarkeit bestimmter Strukturen oder Pathologien im Herzen.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Ein internes System, das dafür sorgt, dass die Komponenten des Echokardiographie-Geräts während des Betriebs nicht überhitzen. Dies ist besonders wichtig für den Transducer, der kontinuierlich Ultraschallwellen erzeugt.",
          },
          {
            bold: "Tragbares Gerät (bei tragbaren Echokardiographie-Geräten) :",
            other:
              "Einige Echokardiographie-Geräte sind tragbar und können leicht transportiert werden, um am Patientenbett oder in Notfallsituationen eingesetzt zu werden. Diese Geräte haben oft eine kompakte Konsole und einen kleineren Monitor.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben. Dies ist besonders nützlich, um den Patienten zu beruhigen und ihm Anweisungen zu geben.",
          },
        ],
      },
      // 6tab 100
      {
        id: 100,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für eine Fachsprachenprüfung im Bereich der Echokardiographie und helfen, die Untersuchung und deren Ergebnisse präzise zu beschreiben und zu diskutieren.",
        text_list: [
          {
            bold: "Echokardiographie :",
            other:
              "Ultraschalluntersuchung des Herzens zur Beurteilung der Herzstruktur und -funktion.",
          },
          {
            bold: "Transducer (Ultraschallkopf) :",
            other:
              "Gerät, das Ultraschallwellen erzeugt und empfängt, um Bilder des Herzens zu erstellen.",
          },
          {
            bold: "M-Mode :",
            other:
              "Modus der Echokardiographie, der eine ein-dimensionale Darstellung des Herzens in Bewegung liefert.",
          },
          {
            bold: "2D-Modus :",
            other:
              "Modus der Echokardiographie, der zweidimensionale Bilder des Herzens in Echtzeit liefert.",
          },
          {
            bold: "Doppler-Echokardiographie :",
            other:
              "Technik zur Messung und Darstellung des Blutflusses durch die Herzkammern und -klappen.",
          },
          {
            bold: "Farbdoppler :",
            other:
              "Visualisiert den Blutfluss im Herzen farblich, um Strömungsrichtungen und -geschwindigkeiten darzustellen.",
          },
          {
            bold: "Spektraldoppler :",
            other:
              "Graphische Darstellung der Blutflussgeschwindigkeit über die Zeit.",
          },
          {
            bold: "Ventrikel :",
            other:
              "Die beiden unteren Herzkammern, die das Blut aus dem Herzen pumpen.",
          },
          {
            bold: "Vorhöfe (Atrien) :",
            other:
              "Die beiden oberen Herzkammern, die das Blut aus dem Körper und der Lunge empfangen.",
          },
          {
            bold: "Herzklappen :",
            other:
              "Strukturen im Herzen, die den Blutfluss in die richtige Richtung lenken (z.B. Mitralklappe, Aortenklappe).",
          },
          {
            bold: "Mitralinsuffizienz :",
            other:
              "Rückfluss des Blutes durch die Mitralklappe in den linken Vorhof.",
          },
          {
            bold: "Aortenstenose :",
            other:
              "Verengung der Aortenklappe, die den Blutfluss aus dem linken Ventrikel in die Aorta behindert.",
          },
          {
            bold: "Perikarderguss :",
            other: "Flüssigkeitsansammlung im Herzbeutel (Perikard).",
          },
          {
            bold: "Herzinsuffizienz :",
            other:
              "Unfähigkeit des Herzens, ausreichend Blut zu pumpen, um den Körper mit Sauerstoff zu versorgen.",
          },
          {
            bold: "Myokard :",
            other: "Herzmuskelgewebe.",
          },
          {
            bold: "Endokarditis :",
            other:
              "Entzündung der Herzinnenhaut, oft verursacht durch eine Infektion.",
          },
          {
            bold: "Hypertrophie :",
            other: "Verdickung des Herzmuskelgewebes.",
          },
          {
            bold: "Diastole :",
            other:
              "Entspannungsphase des Herzens, in der sich die Kammern mit Blut füllen.",
          },
          {
            bold: "Systole :",
            other:
              "Kontraktionsphase des Herzens, in der das Blut aus den Kammern gepumpt wird.",
          },
          {
            bold: "Parasternaler Langachsenschnitt :",
            other:
              "Echokardiographische Schnittebene, die entlang der langen Achse des Herzens verläuft.",
          },
          {
            bold: "Apikaler Vierkammerblick :",
            other:
              "Schnittebene, die alle vier Herzkammern gleichzeitig darstellt.",
          },
          {
            bold: "TTE (Transthorakale Echokardiographie) :",
            other:
              "Echokardiographie durch die Brustwand, die am häufigsten verwendete Methode.",
          },
          {
            bold: "Pulswellen-Doppler :",
            other:
              "Misst die Blutflussgeschwindigkeit an einem bestimmten Punkt im Herzen.",
          },
          {
            bold: "Gewebedoppler :",
            other:
              "Misst die Geschwindigkeit der Herzmuskelbewegung, um die Funktion des Myokards zu beurteilen.",
          },
          {
            bold: "Linksventrikuläre Ejektionsfraktion (LVEF) :",
            other:
              "Prozentsatz des Blutes, das der linke Ventrikel bei jedem Herzschlag auswirft.",
          },
        ],
      },
      // 7tab 101
      {
        id: 101,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 102
      {
        id: 102,
        title: "PDF",
        link: "https://drive.google.com/file/d/1X9aLJxIlC_xoszfyZFZyyH48Et5m6tIB/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 11
  // start of parent tab 12 Belastung EKG
  {
    id: 12,
    title: "Belastung-EKG",
    checked: false,
    childTabs: [
      // 1tab 103
      {
        id: 103,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das Belastung-EKG, auch als Ergometrie bekannt, wird eingesetzt, um die Funktion des Herzens unter körperlicher Belastung zu bewerten. Es dient der Diagnose von koronaren Herzkrankheiten, der Beurteilung der Leistungsfähigkeit und der Feststellung von Rhythmusstörungen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Das Belastung-EKG ist von besonderer Bedeutung bei der Erkennung von Angina pectoris, der Überwachung der Behandlung von Herz-Kreislauf-Erkrankungen und der Beurteilung der körperlichen Belastbarkeit von Patienten.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Das Belastung-EKG basiert auf der kontinuierlichen Überwachung der elektrischen Aktivität des Herzens während einer definierten körperlichen Anstrengung. Dies ermöglicht die Identifikation von Durchblutungsstörungen, die in Ruhe nicht erkennbar sind.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Der Patient führt die Belastung entweder auf einem Fahrradergometer oder einem Laufband durch. Die Belastung wird stufenweise erhöht, während kontinuierlich EKG-Ableitungen aufgezeichnet und Blutdruckmessungen durchgeführt werden.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die EKG-Daten werden auf Anzeichen von Ischämie, Arrhythmien und anderen Herzfunktionsstörungen analysiert. Wichtige Parameter sind ST-Strecken-Veränderungen, Herzfrequenz und Blutdruckreaktionen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde können ST-Strecken-Senkungen, T-Wellen-Veränderungen oder das Auftreten von ventrikulären Arrhythmien sein, die auf eine koronare Herzkrankheit hinweisen.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Das Belastung-EKG ist nicht-invasiv, relativ kostengünstig und weit verbreitet verfügbar. Es liefert wertvolle Informationen über die Herzfunktion unter Belastung.",
              },
              {
                bold_text: "Nachteile:",
                text: "Die Aussagekraft kann durch unzureichende Belastung oder technische Artefakte eingeschränkt sein.",
              },
              {
                bold_text: "Risiken:",
                text: "Es besteht ein geringes Risiko für schwerwiegende Komplikationen wie Herzinfarkt oder schwerwiegende Arrhythmien während der Untersuchung, insbesondere bei Patienten mit bekannten Herzkrankheiten.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Ergebnisse des Belastung-EKGs beeinflussen maßgeblich das Management von Patienten mit Herz-Kreislauf-Erkrankungen und die Entscheidung über weiterführende diagnostische oder therapeutische Maßnahmen.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Die Ergebnisse des Belastung-EKGs beeinflussen maßgeblich das Management von Patienten mit Herz-Kreislauf-Erkrankungen und die Entscheidung über weiterführende diagnostische oder therapeutische Maßnahmen.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zum Belastung-EKG gehören bildgebende Verfahren wie die Myokardszintigraphie, das Stress-Echo und die Kardio-MRT, die ebenfalls Aufschluss über die Herzfunktion unter Belastung geben können.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Neue Forschungsergebnisse fokussieren sich auf die Verbesserung der diagnostischen Genauigkeit durch kombinierte Methoden und die Integration von künstlicher Intelligenz zur besseren Auswertung der EKG-Daten.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Anwendung von Wearables zur kontinuierlichen Überwachung der Herzfunktion und personalisierte Belastungstests umfassen, die auf den individuellen Gesundheitszustand des Patienten abgestimmt sind.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Das Belastung-EKG ist ein essenzielles diagnostisches Werkzeug in der Kardiologie, das wertvolle Informationen über die Herzfunktion unter Belastung liefert. Es ist nicht-invasiv, relativ kostengünstig und weit verbreitet.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Aufgrund seiner Bedeutung in der Diagnose und dem Management von Herz-Kreislauf-Erkrankungen bleibt das Belastung-EKG eine unverzichtbare Methode in der modernen Medizin.",
              },
            ],
          },
        ],
      },
      // 2tab 104
      {
        id: 104,
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
              "Erklären Sie dem Patienten, dass das Belastung-EKG durchgeführt wird, um die Herzfunktion unter körperlicher Belastung zu bewerten und mögliche Durchblutungsstörungen/Rhythmusstörungen zu erkennen.",
            third:
              "Wir möchten sehen, wie Ihr Herz auf körperliche Anstrengung reagiert und ob es dabei zu Durchblutungsstörungen kommt.",
            fourth:
              "Diese Untersuchung hilft uns zu verstehen, ob Ihr Herz unter Belastung ausreichend mit Blut versorgt wird.",
          },
          {
            first: "Ablauf",
            second:
              "Erklären Sie dem Patienten den Ablauf der Untersuchung: Der Patient wird auf einem Fahrradergometer oder Laufband trainieren, während kontinuierlich das EKG und der Blutdruck überwacht werden.",
            third:
              "Sie werden auf einem Fahrradergometer sitzen und in Intervallen in die Pedale treten, während wir Ihr EKG und Ihren Blutdruck überwachen.",
            fourth:
              "Wir beginnen mit einer leichten Belastung auf dem Laufband, die wir nach und nach erhöhen, während wir Ihr Herz überwachen.",
          },
          {
            first: "Vorbereitung",
            second:
              "Betonen Sie, dass der Patient bequeme Kleidung und Sportschuhe tragen soll. Der Patient sollte zwei Stunden vor der Untersuchung keine schweren Mahlzeiten zu sich nehmen und bestimmte Medikamente möglicherweise pausieren.",
            third:
              "Bitte tragen Sie bequeme Kleidung und Sportschuhe und essen Sie mindestens zwei Stunden vorher nichts Schweres.",
            fourth:
              "Kommen Sie in bequemer Sportkleidung und verzichten Sie auf große Mahlzeiten kurz vor der Untersuchung.",
          },
          {
            first: "Risiken",
            second:
              "Informieren Sie den Patienten über mögliche Risiken wie Herzrhythmusstörungen, Brustschmerzen oder seltene Fälle eines Herzinfarkts.",
            third:
              "Es kann zu Herzrhythmusstörungen oder Brustschmerzen kommen, aber wir überwachen Sie kontinuierlich und sind vorbereitet.",
            fourth:
              "Seltene Komplikationen wie ein Herzinfarkt sind möglich, aber unwahrscheinlich. Wir sind jederzeit bereit einzugreifen.",
          },
          {
            first: "Vorteile",
            second:
              "Erklären Sie, dass das Belastung-EKG eine nicht-invasive Methode ist, die wertvolle Informationen über die Herzfunktion und mögliche Durchblutungsstörungen liefert.",
            third:
              "Dieses Verfahren gibt uns wichtige Informationen über die Leistungsfähigkeit Ihres Herzens ohne einen invasiven Eingriff.",
            fourth:
              "Mit dem Belastung-EKG können wir gezielt herausfinden, ob Ihr Herz unter Belastung gut arbeitet, ohne eine Operation zu benötigen.",
          },
          {
            first: "Alternativen",
            second:
              "Informieren Sie den Patienten über alternative Untersuchungsmethoden wie das Stress-Echokardiogramm, die Myokardszintigraphie oder die Kardio-MRT.",
            third:
              "Eine Alternative wäre das Stress-Echokardiogramm, bei dem wir die Herzfunktion mittels Ultraschalles unter Belastung beobachten.",
            fourth:
              "Wir könnten auch eine Myokardszintigraphie durchführen, um die Durchblutung Ihres Herzens zu überprüfen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Betonen Sie, dass das Belastung-EKG bei bestimmten Patienten nicht durchführbar ist, zum Beispiel bei akuten Herzinfarkten, schweren Herzrhythmusstörungen oder schweren Herzklappenfehlern.",
            third:
              "Bei einem kürzlich aufgetretenen Herzinfarkt ist dieses Verfahren nicht geeignet.",
            fourth:
              "Patienten mit schweren Herzrhythmusstörungen sollten kein Belastung-EKG durchführen lassen.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie, dass die Untersuchung sowohl normale als auch pathologische Ergebnisse liefern kann, wie ST-Strecken-Senkungen, T-Wellen-Veränderungen oder Arrhythmien.",
            third:
              "Wir könnten Veränderungen in der ST-Strecke sehen, die auf eine mögliche Durchblutungsstörung hinweisen.",
            fourth:
              "Falls Arrhythmien während der Belastung auftreten, könnte das ein Hinweis auf eine Herzkrankheit sein.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Ein informiertes Einverständnis des Patienten ist notwendig, da die Untersuchung mit körperlicher Anstrengung und potenziellen Risiken verbunden ist.",
            third:
              "Es ist wichtig, dass Sie verstehen und zustimmen, da die Untersuchung eine körperliche Belastung beinhaltet.",
            fourth:
              "Wir benötigen Ihr Einverständnis, um sicherzustellen, dass Sie über alle Risiken und den Ablauf informiert sind.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie, dass der Patient eine Einverständniserklärung unterschreiben muss, nachdem alle Fragen geklärt und alle Informationen bereitgestellt wurden.",
            third:
              "Bitte unterschreiben Sie hier, nachdem wir alle Ihre Fragen beantwortet haben.",
            fourth:
              "Nachdem wir alles besprochen haben, benötigen wir Ihre Unterschrift auf diesem Formular.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie dem Patienten Hinweise zur Vorbereitung und zum Verhalten. Erklären Sie, dass der Patient alle auftretenden Beschwerden sofort mitteilen soll.",
            third:
              "Falls Sie während der Untersuchung Beschwerden haben, informieren Sie uns bitte sofort.",
            fourth:
              "Es ist wichtig, dass Sie uns sofort Bescheid geben, wenn Sie Schmerzen oder Unwohlsein verspüren.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie dem Patienten, dass die Ergebnisse der Untersuchung ausführlich mit ihm besprochen werden und gegebenenfalls weitere diagnostische oder therapeutische Maßnahmen folgen.",
            third:
              "Nach der Untersuchung werden wir die Ergebnisse ausführlich besprechen und das weitere Vorgehen planen.",
            fourth:
              "Wir werden die Ergebnisse in einem persönlichen Gespräch durchgehen und entscheiden, ob weitere Untersuchungen notwendig sind.",
          },
        ],
      },
      // 3tab 105
      {
        id: 105,
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
              "Erklären Sie, dass das Belastung-EKG eine diagnostische Methode zur Beurteilung der Herzfunktion unter körperlicher Belastung ist, um mögliche ischämische Herzkrankheiten oder Rhythmusstörungen zu erkennen.",
            third:
              "Das Belastung-EKG ist ein Test, bei dem wir die elektrische Aktivität des Herzens unter körperlicher Belastung aufzeichnen, um Durchblutungsstörungen oder Arrhythmien zu erkennen.",
            fourth:
              "Es handelt sich um eine Methode, bei der wir die Herzaktivität während der körperlichen Anstrengung überwachen, um versteckte Herzprobleme aufzudecken.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erläutern Sie, dass das Belastung-EKG zur Erkennung von koronarer Herzkrankheit, zur Beurteilung der körperlichen Leistungsfähigkeit, zur Überprüfung von Therapieerfolgen und zur Feststellung von Belastungsarrhythmien eingesetzt wird.",
            third:
              "Mit dem Belastung-EKG können wir feststellen, ob eine koronare Herzkrankheit vorliegt oder ob bestehende Therapien wirksam sind.",
            fourth:
              "Es hilft uns auch, die Belastungsfähigkeit des Patienten zu beurteilen und eventuelle Belastungsarrhythmien zu identifizieren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Besprechen Sie die möglichen Ergebnisse, einschließlich normaler Befunde, ST-Strecken-Veränderungen, T-Wellen-Veränderungen und das Auftreten von Arrhythmien.",
            third:
              "Ein positives Ergebnis könnte eine ST-Strecken-Senkung sein, die auf eine Ischämie hinweist. Normale Ergebnisse zeigen keine signifikanten Veränderungen.",
            fourth:
              "Wir könnten auch T-Wellen-Veränderungen beobachten, die auf eine koronare Herzkrankheit hindeuten könnten. Arrhythmien unter Belastung sind ebenfalls ein wichtiges Ergebnis.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie die Indikationen für ein Belastung-EKG, wie Verdacht auf koronare Herzkrankheit, Abklärung von Brustschmerzen, Bewertung der Belastbarkeit.",
            third:
              "Wir führen das Belastung-EKG durch, wenn der Verdacht auf eine koronare Herzkrankheit besteht oder bei unklaren Brustschmerzen.",
            fourth:
              "Es ist auch indiziert bei der Beurteilung der Belastbarkeit von Patienten mit bekannter Herzkrankheit und zur Überprüfung der Wirksamkeit von Therapien.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Diskutieren Sie die Kontraindikationen, wie akuter Herzinfarkt, instabile Angina pectoris, schwere Herzrhythmusstörungen, schwere Aortenstenose und andere schwere kardiovaskuläre Erkrankungen.",
            third:
              "Bei einem akuten Herzinfarkt oder instabiler Angina pectoris ist das Belastung-EKG kontraindiziert.",
            fourth:
              "Auch bei schweren Herzrhythmusstörungen oder einer schweren Aortenstenose sollten wir von einem Belastung-EKG absehen.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erklären Sie, welche Differenzialdiagnosen bei auffälligen Befunden in Betracht gezogen werden sollten, wie andere Formen der Angina pectoris, hypertensive Herzkrankheit und nicht-kardiale Ursachen.",
            third:
              "Zu den Differenzialdiagnosen bei auffälligen Befunden gehören andere Formen der Angina pectoris und hypertensive Herzkrankheit.",
            fourth:
              "Wir sollten auch nicht-kardiale Ursachen wie gastroösophageale Refluxkrankheit oder muskuläre Probleme in Betracht ziehen.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen Sie, wie die Ergebnisse des Belastung-EKGs zur Erstellung oder Anpassung von Behandlungsplänen genutzt werden können, einschließlich der Therapie, der Lebensstiländerung und ggf. weitere Diagnostik.",
            third:
              "Basierend auf den Ergebnissen des Belastung-EKGs könnten wir die medikamentöse Therapie anpassen oder eine koronare Angiographie empfehlen.",
            fourth:
              "Die Ergebnisse könnten auch zu Empfehlungen für Lebensstiländerungen oder eine Intensivierung der kardiologischen Überwachung führen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit Kardiologen, Physiotherapeuten, Pflegekräften und anderen Fachrichtungen zur optimalen Betreuung und Nachsorge des Patienten.",
            third:
              "Wir sollten eng mit Kardiologen zusammenarbeiten, um die Ergebnisse des Belastung-EKGs zu interpretieren und geeignete Behandlungspläne zu erstellen.",
            fourth:
              "Die Zusammenarbeit mit Physiotherapeuten ist ebenfalls wichtig, um geeignete Rehabilitationsmaßnahmen basierend auf der Belastungsfähigkeit des Patienten zu entwickeln.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Diskutieren Sie Maßnahmen zur Sicherstellung der Qualität der Belastung-EKG-Untersuchungen, wie regelmäßige Kalibrierung, Schulung des Personals und standardisierte Protokolle.",
            third:
              "Regelmäßige Kalibrierung der EKG-Geräte und Schulung des Personals sind entscheidend, um die Genauigkeit der Untersuchungen zu gewährleisten.",
            fourth:
              "Wir sollten standardisierte Protokolle verwenden, um konsistente und verlässliche Ergebnisse zu erzielen.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erklären Sie die Notwendigkeit einer sorgfältigen Dokumentation der Untersuchungsergebnisse, der Besprechung dieser Ergebnisse mit dem Patienten und der Planung von Nachsorgeuntersuchungen oder weiteren diagnostischen Schritten.",
            third:
              "Es ist wichtig, die Ergebnisse des Belastung-EKGs ausführlich zu dokumentieren und mit dem Patienten zu besprechen, um weitere Schritte zu planen.",
            fourth:
              "Wir sollten die Untersuchungsergebnisse sorgfältig dokumentieren und einen Plan für die Nachsorge oder weiterführende Diagnostik erstellen.",
          },
        ],
      },
      // 4tab 106
      {
        id: 106,
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
              "40-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "55-jähriger Patient klagt über Brustschmerzen und Atemnot bei körperlicher Anstrengung. Vorgeschichte von Hypertonie und Hyperlipidämie.",
            fourth:
              "60-jährige Patientin berichtet von unregelmäßigem Herzschlag und Schwindel während körperlicher Aktivität. Familiengeschichte von Herzerkrankungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Belastung-EKG ohne signifikante ST-Strecken-Veränderungen oder Arrhythmien. Herzfrequenz und Blutdruck reagieren physiologisch auf die Belastung.",
            third:
              "Belastung-EKG zeigt eine ST-Strecken-Senkung von 2 mm in den inferolateralen Ableitungen bei einer Herzfrequenz von 130 bpm.",
            fourth:
              "Belastung-EKG offenbart das Auftreten von ventrikulären Extrasystolen und eine polymorphe ventrikuläre Tachykardie bei 7 METS Belastung.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Belastung-EKG-Ergebnis unterstützt den Ausschluss von ischämischen oder rhythmischen Herzproblemen.",
            third:
              "Der Befund deutet auf eine ischämische Herzkrankheit hin. Die ST-Strecken-Senkungen korrelieren mit den Angina-Symptomen des Patienten.",
            fourth:
              "Die während der Belastung aufgetretenen Arrhythmien deuten auf eine Belastungsarrhythmie hin, möglicherweise bedingt durch eine zugrunde liegende Herzkrankheit.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe. Empfehlung zu regelmäßiger Bewegung und gesundem Lebensstil.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer Koronarangiographie und möglicher Revaskularisationsmaßnahmen wie PTCA oder CABG.",
            fourth:
              "Wichtig für die weitere Abklärung durch eine elektrophysiologische Untersuchung und die Einleitung einer antiarrhythmischen Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Herzens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose einer ischämischen Herzkrankheit basierend auf Belastung-EKG-Befunden und klinischem Bild.",
            fourth:
              "Diagnose einer Belastungsarrhythmie aufgrund der Belastung-EKG-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Darstellung",
            second:
              "EKG-Aufzeichnungen zeigen normale Kurven ohne Auffälligkeiten in allen Belastungsstufen.",
            third:
              "EKG-Aufzeichnungen zeigen signifikante ST-Strecken-Senkungen in mehreren Ableitungen während der Belastung.",
            fourth:
              "EKG-Aufzeichnungen zeigen ventrikuläre Extrasystolen und eine polymorphe ventrikuläre Tachykardie während der Belastung.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen eine Fortsetzung der regelmäßigen körperlichen Aktivität und gesunden Lebensweise. Eine jährliche Kontrolluntersuchung zur Überwachung der Herzgesundheit ist ebenfalls zu empfehlen.",
            third:
              "Wir empfehlen eine Koronarangiographie zur genauen Beurteilung der Koronararterien und gegebenenfalls eine Revaskularisationstherapie. Es ist auch ratsam, den Lebensstil anzupassen und Risikofaktoren wie Bluthochdruck und Hyperlipidämie zu kontrollieren.",
            fourth:
              "Es ist zu empfehlen, eine elektrophysiologische Untersuchung durchzuführen und eine antiarrhythmische Therapie zu erwägen. Langfristig sollte eine regelmäßige kardiologische Überwachung erfolgen, um weitere Arrhythmien frühzeitig zu erkennen und zu behandeln.",
          },
        ],
      },
      // 5tab 107
      {
        id: 107,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Belastung-EKG ist ein diagnostisches Verfahren, das die elektrische Aktivität des Herzens während körperlicher Anstrengung aufzeichnet. Es wird verwendet, um die Herzfunktion unter Stress zu beurteilen und kann dabei helfen, Herz-Kreislauf-Erkrankungen zu diagnostizieren und zu überwachen. Hier sind die wesentlichen Komponenten und Funktionen eines Belastung-EKG-Geräts:",
        text_list: [
          {
            bold: "Ergometer :",
            other:
              "Funktion: Das Ergometer ist ein spezielles Trainingsgerät, das verwendet wird, um den Patienten während der Untersuchung körperlich zu belasten. Es kann entweder ein Fahrradergometer oder ein Laufband sein.\nBedeutung: Es ermöglicht die graduelle Steigerung der Belastungsintensität, wodurch die Herzreaktion unter verschiedenen Belastungsstufen beobachtet werden kann.",
          },
          {
            bold: "EKG-Gerät :",
            other:
              "Funktion: Das EKG-Gerät zeichnet die elektrische Aktivität des Herzens auf. Es besteht aus Elektroden, die am Körper des Patienten befestigt sind, und einem Monitor, der die Herzfrequenz und den Herzrhythmus in Echtzeit anzeigt.\nBedeutung: Es überwacht kontinuierlich die Herzfunktion während der Belastung und hilft, Veränderungen im EKG-Muster zu erkennen, die auf eine Ischämie oder Arrhythmien hinweisen können.",
          },
          {
            bold: "Blutdruckmessgerät :",
            other:
              "Funktion: Das Blutdruckmessgerät misst den Blutdruck des Patienten während der Belastung in regelmäßigen Abständen.\nBedeutung: Es ist wichtig, um die Blutdruckreaktion auf die körperliche Belastung zu überwachen, da abnormale Reaktionen auf Herz-Kreislauf-Probleme hinweisen können.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Funktion: Die Steuerkonsole ermöglicht es dem medizinischen Personal, die Belastungsintensität zu steuern, die EKG-Daten zu überwachen und die Untersuchung zu dokumentieren.\nBedeutung: Sie ist das zentrale Bedienfeld, das die gesamte Untersuchung kontrolliert und sicherstellt, dass alle Parameter korrekt erfasst werden.",
          },
          {
            bold: "Software zur Datenauswertung :",
            other:
              "Funktion: Die Software analysiert die aufgezeichneten EKG-Daten und erstellt Berichte, die dem Arzt helfen, die Herzfunktion des Patienten zu bewerten.\nBedeutung: Sie ermöglicht eine detaillierte Analyse der EKG-Kurven und hilft bei der Identifikation von pathologischen Veränderungen.",
          },
          {
            bold: "Notfallausrüstung :",
            other:
              "Funktion: Die Notfallausrüstung umfasst Defibrillatoren und Medikamente, die bei Bedarf sofort eingesetzt werden können.\nBedeutung: Sie ist essenziell, um auf eventuelle Komplikationen wie Herzrhythmusstörungen oder Herzinfarkte schnell reagieren zu können.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Funktion: Ein Kühlungssystem ist notwendig, um die elektronischen Komponenten des EKG-Geräts zu kühlen und einen reibungslosen Betrieb zu gewährleisten.\nBedeutung: Es verhindert Überhitzung und mögliche Geräteschäden während der Untersuchung.",
          },
          {
            bold: "Patientenüberwachung :",
            other:
              "Funktion: Ein umfassendes Überwachungssystem, das Herzfrequenz, EKG und Blutdruck des Patienten in Echtzeit anzeigt.\nBedeutung: Es ermöglicht eine kontinuierliche Beobachtung der vitalen Parameter des Patienten während der Belastung und trägt zur Sicherheit bei.",
          },
          {
            bold: "Dokumentationssystem :",
            other:
              "Funktion: Ein System zur Speicherung und Verwaltung der erhobenen Daten und Befunde.\nBedeutung: Es stellt sicher, dass alle relevanten Informationen für die spätere Auswertung und Patientenakte verfügbar sind.",
          },
        ],
      },
      // 6tab 108
      {
        id: 108,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für eine Fachsprachenprüfung im Bereich der Echokardiographie und helfen, die Untersuchung und deren Ergebnisse präzise zu beschreiben und zu diskutieren.",
        text_list: [
          {
            bold: "Belastung-EKG (Ergometrie) :",
            other:
              "Ein diagnostisches Verfahren zur Beurteilung der Herzfunktion unter körperlicher Belastung.",
          },
          {
            bold: "Ergometer :",
            other:
              "Ein Trainingsgerät (Fahrradergometer oder Laufband), das zur Durchführung der Belastung verwendet wird.",
          },
          {
            bold: "Elektrokardiogramm (EKG) :",
            other: "Die Aufzeichnung der elektrischen Aktivität des Herzens.",
          },
          {
            bold: "Elektroden :",
            other:
              "Sensoren, die auf der Haut des Patienten angebracht werden, um die Herzaktivität zu erfassen.",
          },
          {
            bold: "ST-Strecken-Senkung :",
            other:
              "Eine Veränderung im EKG, die auf eine mögliche Myokardischämie hinweist.",
          },
          {
            bold: "T-Wellen-Veränderung :",
            other:
              "Veränderungen in der EKG-Kurve, die auf eine mögliche Herzkrankheit hinweisen können.",
          },
          {
            bold: "Herzfrequenz :",
            other: "Die Anzahl der Herzschläge pro Minute.",
          },
          {
            bold: "Blutdruck :",
            other:
              "Der Druck, den das Blut auf die Wände der Arterien ausübt; wird während der Belastung regelmäßig gemessen.",
          },
          {
            bold: "Arrhythmie :",
            other:
              "Unregelmäßigkeiten im Herzrhythmus, die während der Belastung auftreten können.",
          },
          {
            bold: "Myokardischämie :",
            other:
              "Eine Durchblutungsstörung des Herzmuskels, oft durch eine ST-Strecken-Senkung im EKG angezeigt.",
          },
          {
            bold: "Koronare Herzkrankheit (KHK) :",
            other:
              "Eine Erkrankung der Herzkranzgefäße, die zu einer verminderten Durchblutung des Herzmuskels führt.",
          },
          {
            bold: "Ventrikuläre Extrasystolen :",
            other:
              "Zusätzliche Herzschläge, die von den Herzkammern ausgehen und während der Belastung auftreten können.",
          },
          {
            bold: "Polymorphe ventrikuläre Tachykardie :",
            other:
              "Eine schnelle Herzrhythmusstörung, die während der Belastung auftreten kann und potenziell lebensbedrohlich ist.",
          },
          {
            bold: "Revaskularisation :",
            other:
              "Ein medizinischer Eingriff zur Wiederherstellung der Durchblutung, z.B. PTCA (perkutane transluminale koronare Angioplastie) oder CABG (Koronarbypass-Operation).",
          },
          {
            bold: "Koronarangiographie :",
            other:
              "Ein bildgebendes Verfahren zur Darstellung der Herzkranzgefäße.",
          },
          {
            bold: "Kardiologe :",
            other: "Ein Facharzt für Herzkrankheiten.",
          },
          {
            bold: "Radiologischer Technologe :",
            other:
              "Ein medizinischer Fachangestellter, der Bildgebungsverfahren durchführt und überwacht.",
          },
          {
            bold: "Notfallausrüstung :",
            other:
              "Geräte und Medikamente, die bereitgehalten werden, um auf Komplikationen während der Untersuchung reagieren zu können.",
          },
          {
            bold: "Patientenaufklärung :",
            other:
              "Der Prozess, bei dem der Patient über den Ablauf, die Risiken und den Zweck der Untersuchung informiert wird.",
          },
          {
            bold: "Herz-Kreislauf-Erkrankungen :",
            other: "Erkrankungen, die das Herz und die Blutgefäße betreffen.",
          },
          {
            bold: "Physiologische Reaktion :",
            other:
              "Die normale Reaktion des Körpers auf körperliche Belastung, z.B. Anstieg der Herzfrequenz und des Blutdrucks.",
          },
        ],
      },
      // 7tab 109
      {
        id: 109,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 110
      {
        id: 110,
        title: "PDF",
        link: "https://drive.google.com/file/d/1lKi14qBbYzsc1OJQKhWKKYastuUM8ucZ/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 12
  // start of parent tab 13 Langzeit EKG
  {
    id: 13,
    title: "Langzeit-EKG",
    checked: false,
    childTabs: [
      // 1tab 111
      {
        id: 111,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Ziel des Langzeit-EKGs ist es, Herzrhythmusstörungen zu erkennen und zu quantifizieren, die intermittierend auftreten und bei einer kurzen EKG-Aufzeichnung nicht erfasst werden können. Darüber hinaus hilft es bei der Bewertung der Herzfrequenzvariabilität und der Reaktion des Herzens auf alltägliche Aktivitäten und Stresssituationen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Das Langzeit-EKG ist besonders relevant für Patienten mit Verdacht auf intermittierende Herzrhythmusstörungen, Synkopen unklarer Genese, Palpitationen, und bei der Überwachung von Patienten mit bekannten Herzrhythmusstörungen. Es wird auch bei der Bewertung der Wirksamkeit von Antiarrhythmika und zur Nachsorge nach einem Herzinfarkt eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Ein EKG misst die elektrische Aktivität des Herzens und stellt sie in Form von Wellen und Intervallen dar. Diese Aufzeichnungen helfen dabei, Herzrhythmusstörungen und andere Herzprobleme zu diagnostizieren, indem sie die elektrische Leitung und die Herzmuskelfunktion analysieren.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Das Langzeit-EKG verwendet tragbare Rekorder, die mit Elektroden verbunden sind, die auf der Haut des Patienten angebracht werden. Diese Rekorder zeichnen die elektrische Herzaktivität kontinuierlich auf, während der Patient seinen normalen täglichen Aktivitäten nachgeht. Die gesammelten Daten werden anschließend auf einem Computer analysiert.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung des Langzeit-EKGs erfolgt durch einen Arzt, der die aufgezeichneten Daten auf Unregelmäßigkeiten untersucht. Dabei werden Parameter wie die Herzfrequenz, die Herzrhythmusstabilität und das Auftreten von Arrhythmien analysiert.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde eines Langzeit-EKGs können normale Herzfrequenzmuster, verschiedene Arten von Arrhythmien wie Vorhofflimmern, ventrikuläre Tachykardien, Pausen oder AV-Blockaden umfassen. Diese Befunde helfen, die genaue Ursache der Symptome des Patienten zu bestimmen und entsprechende therapeutische Maßnahmen zu ergreifen.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Das Langzeit-EKG bietet eine umfassende und detaillierte Überwachung der Herzaktivität über einen längeren Zeitraum, was die Diagnose von intermittierenden Herzrhythmusstörungen erleichtert. Es ist nicht-invasiv und kann leicht im Alltag des Patienten integriert werden.",
              },
              {
                bold_text: "Nachteile:",
                text: "Ein Nachteil ist die mögliche Unannehmlichkeit für den Patienten, der das Gerät über einen längeren Zeitraum tragen muss. Zudem können Artefakte oder Signalverluste durch Elektrodenablösungen auftreten, was die Datenqualität beeinträchtigen kann.",
              },
              {
                bold_text: "Risiken:",
                text: "Die Risiken des Langzeit-EKGs sind minimal. Es können Hautirritationen oder Allergien durch die Elektroden auftreten, aber ernsthafte Komplikationen sind selten.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Das Langzeit-EKG spielt eine zentrale Rolle in der Diagnose von Herzrhythmusstörungen und bei der Überwachung der Wirksamkeit von Behandlungen. Es ermöglicht eine genaue Beurteilung der Herzfunktion im täglichen Leben und hilft, individuelle Therapieentscheidungen zu treffen.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Für das Management von Patienten mit kardiovaskulären Erkrankungen ist das Langzeit-EKG unerlässlich. Es unterstützt die Anpassung von Medikamentendosierungen, die Entscheidung über invasive Maßnahmen und die langfristige Überwachung der Herzgesundheit.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Alternativen zum Langzeit-EKG umfassen Ereignisrekorder, die nur bei Auftreten von Symptomen aktiviert werden, sowie implantierbare Loop-Rekorder, die eine noch längere Überwachung ermöglichen.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschungsergebnisse zeigen, dass moderne Technologien wie tragbare Sensoren und drahtlose Überwachungssysteme die Genauigkeit und Patientenakzeptanz des Langzeit-EKGs verbessern können. Zudem wird die Integration von KI-gestützten Analysesystemen untersucht, um die Dateninterpretation zu optimieren.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Verwendung von Langzeit-EKGs weiter revolutionieren, indem sie die kontinuierliche Überwachung in Echtzeit und die frühzeitige Erkennung von kardialen Ereignissen ermöglichen. Auch die Miniaturisierung und Verbesserung des Patientenkomforts stehen im Fokus der Forschung.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Das Langzeit-EKG ist ein unverzichtbares diagnostisches Werkzeug zur Erkennung und Überwachung von Herzrhythmusstörungen. Es bietet eine detaillierte und kontinuierliche Aufzeichnung der Herzaktivität und unterstützt die individuelle Therapieplanung und Patientenüberwachung.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Durch seine hohe diagnostische Aussagekraft und die Möglichkeit, den Herzrhythmus über einen längeren Zeitraum zu überwachen, leistet das Langzeit-EKG einen entscheidenden Beitrag zur modernen Kardiologie und zur Verbesserung der Patientenversorgung.",
              },
            ],
          },
        ],
      },
      // 2tab 112
      {
        id: 112,
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
              "Erklären, dass das Langzeit-EKG zur Erkennung von Herzrhythmusstörungen und zur Überwachung der Herzaktivität über einen längeren Zeitraum dient.",
            third:
              "„Wir möchten feststellen, ob Ihr Herz unregelmäßige Rhythmen hat, die nur sporadisch auftreten und daher bei einem kurzen EKG nicht erkannt werden könnten.“",
            fourth:
              "„Durch die kontinuierliche Aufzeichnung können wir genau beobachten, wie Ihr Herz auf verschiedene Aktivitäten und Stresssituationen reagiert.“",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben, wie die Elektroden auf der Haut des Patienten angebracht werden, der tragbare Rekorder die Herzaktivität aufzeichnet und der Patient seinen normalen Aktivitäten nachgeht.",
            third:
              "„Wir werden kleine Elektroden auf Ihre Brust kleben, die mit einem tragbaren Gerät verbunden sind, das Sie für 24 Stunden tragen.“",
            fourth:
              "„Während Sie das Gerät tragen, können Sie Ihren normalen Tagesablauf fortsetzen, einschließlich Arbeiten, Schlafen und Sport treiben.“",
          },
          {
            first: "Vorbereitung",
            second:
              "Informieren, dass spezielle Vorbereitungen in der Regel nicht notwendig sind, der Patient jedoch auf die Hygiene und Trockenheit der Haut im Bereich der Elektroden achten sollte.",
            third:
              "„Es ist wichtig, dass Ihre Haut sauber und trocken ist, bevor wir die Elektroden anbringen.“",
            fourth:
              "„Vermeiden Sie es, Lotionen oder Cremes auf Ihrer Brust zu verwenden, da diese die Haftung der Elektroden beeinträchtigen können.“",
          },
          {
            first: "Risiken",
            second:
              "Erwähnen, dass die Risiken minimal sind, aber Hautirritationen oder Allergien durch die Elektroden auftreten können.",
            third:
              "„Manche Patienten berichten über leichte Hautirritationen, wo die Elektroden angebracht sind.“",
            fourth:
              "„In seltenen Fällen kann es zu allergischen Reaktionen auf den Kleber der Elektroden kommen.“",
          },
          {
            first: "Vorteile",
            second:
              "Hervorheben, dass das Langzeit-EKG eine detaillierte und kontinuierliche Überwachung der Herzaktivität ermöglicht und somit eine genaue Diagnose von intermittierenden Herzrhythmusstörungen erlaubt.",
            third:
              "„Ein großer Vorteil ist, dass wir so auch seltene Herzrhythmusstörungen erfassen können, die bei einem normalen EKG nicht sichtbar sind.“",
            fourth:
              "„Es ermöglicht uns, ein umfassenderes Bild Ihrer Herzgesundheit zu bekommen, indem wir Ihre Herzaktivität in Ihrer normalen Umgebung überwachen.“",
          },
          {
            first: "Alternativen",
            second:
              "Alternativen wie Ereignisrekorder und implantierbare Loop-Rekorder erwähnen, die bei Bedarf eingesetzt werden können.",
            third:
              "„Eine Alternative wäre ein Ereignisrekorder, den Sie selbst aktivieren können, wenn Sie Symptome bemerken.“",
            fourth:
              "„In einigen Fällen könnten wir auch einen implantierbaren Loop-Rekorder in Erwägung ziehen, der über mehrere Monate hinweg die Herzaktivität aufzeichnet.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Hinweis, dass es kaum Kontraindikationen gibt, aber bei bestimmten Hauterkrankungen oder Allergien gegen Elektrodenkleber Vorsicht geboten ist.",
            third:
              "„Wenn Sie eine bekannte Allergie gegen den Elektrodenkleber haben, sollten Sie uns das mitteilen.“",
            fourth:
              "„Bei bestehenden Hauterkrankungen im Brustbereich sollten wir überlegen, ob diese Untersuchung für Sie geeignet ist.“",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären, dass typische Befunde normale Herzfrequenzmuster oder verschiedene Arten von Arrhythmien sein können, die eine spezifische Behandlung erfordern.",
            third:
              "„Wir könnten normale Ergebnisse finden, was gut wäre, oder Anzeichen von Arrhythmien, die behandelt werden müssten.“",
            fourth:
              "„Wenn wir eine unregelmäßige Herzaktivität feststellen, werden wir gemeinsam über die nächsten Schritte sprechen.“",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen, dass das Einverständnis des Patienten notwendig ist, um die Untersuchung durchzuführen und dass der Patient vollständig über den Ablauf und die möglichen Risiken informiert sein sollte.",
            third:
              "„Es ist wichtig, dass Sie der Untersuchung zustimmen, nachdem Sie alle Informationen erhalten haben.“",
            fourth:
              "„Ihre Einwilligung ist erforderlich, damit wir mit der Untersuchung fortfahren können.“",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Der Arzt sollte den Patienten klar und verständlich über die Untersuchung informieren und das schriftliche Einverständnis einholen.",
            third:
              "„Bitte lesen Sie diese Einverständniserklärung sorgfältig durch und unterschreiben Sie, wenn Sie einverstanden sind.“",
            fourth:
              "„Nachdem ich Ihnen alles erklärt habe, brauche ich Ihre schriftliche Zustimmung.“",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Den Patienten darauf hinweisen, dass sie den Rekorder nicht nass machen sollen und die normale Alltagsaktivität fortsetzen können.",
            third:
              "„Bitte vermeiden Sie es, den Rekorder nass zu machen. Sie können wie gewohnt essen, schlafen und arbeiten.“",
            fourth:
              "„Es wäre hilfreich, wenn Sie ein Tagebuch führen könnten, um Aktivitäten und Symptome festzuhalten.“",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Informieren, dass die Ergebnisse nach der Analyse der aufgezeichneten Daten mit dem Patienten besprochen werden und dass weitere Schritte je nach den Befunden festgelegt werden.",
            third:
              "„Wir werden die Daten analysieren und die Ergebnisse mit Ihnen in einem weiteren Termin besprechen.“",
            fourth:
              "„Je nach den Ergebnissen können wir entscheiden, ob weitere Untersuchungen oder Behandlungen notwendig sind.“",
          },
        ],
      },
      // 3tab 113
      {
        id: 113,
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
              "Erläutern, dass es sich bei der Untersuchung um ein Langzeit-EKG handelt, bei dem die elektrische Herzaktivität über einen längeren Zeitraum, typischerweise 24 bis 48 Stunden, kontinuierlich aufgezeichnet wird.",
            third:
              "Das Langzeit-EKG ist ein Verfahren, bei dem wir die Herzaktivität kontinuierlich über 24 bis 48 Stunden aufzeichnen, um eine umfassende Überwachung zu gewährleisten.",
            fourth:
              "Dabei handelt es sich um eine nicht-invasive Methode, die die elektrische Aktivität des Herzens über einen längeren Zeitraum aufzeichnet, um auch seltene Herzrhythmusstörungen zu erfassen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erklären, dass das Langzeit-EKG zur Erkennung und Bewertung von intermittierenden Herzrhythmusstörungen dient, die bei einer kurzen EKG-Aufzeichnung möglicherweise nicht erfasst werden können.",
            third:
              "Mit dem Langzeit-EKG können wir intermittierende Herzrhythmusstörungen erkennen, die bei einer kurzen EKG-Aufzeichnung unbemerkt bleiben könnten.",
            fourth:
              "Es ermöglicht uns, die Herzfrequenz und den Herzrhythmus über einen längeren Zeitraum zu beobachten und so belastungsabhängige Arrhythmien zu identifizieren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Beschreiben, dass die Ergebnisse des Langzeit-EKGs Aufschluss über die Herzfrequenz, die Stabilität des Herzrhythmus und das Auftreten von Arrhythmien geben, was zur weiteren Diagnostik und Therapieplanung genutzt werden kann.",
            third:
              "Die Ergebnisse zeigen uns, ob und wann Herzrhythmusstörungen auftreten und wie häufig diese sind, was für die weitere Therapieplanung wichtig ist.",
            fourth:
              "Wir können anhand der Ergebnisse sehen, ob es periodische Unregelmäßigkeiten in der Herzaktivität gibt, die spezifische Behandlungsmaßnahmen erfordern.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen, dass die Hauptindikationen für ein Langzeit-EKG der Verdacht auf intermittierende Herzrhythmusstörungen, unklare Synkopen, Palpitationen und die Überwachung der Wirksamkeit von Antiarrhythmika sind.",
            third:
              "Ein Langzeit-EKG ist indiziert bei Patienten mit unklaren Synkopen, wiederkehrenden Palpitationen und zur Überwachung der Therapie bei bekannten Herzrhythmusstörungen.",
            fourth:
              "Wir verwenden das Langzeit-EKG häufig bei Patienten, die über unregelmäßigen Herzschlag oder episodische Ohnmachtsanfälle klagen, um die Ursache zu identifizieren.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären, dass es wenige Kontraindikationen gibt, aber bei Patienten mit bestimmten Hauterkrankungen oder Allergien gegen Elektrodenkleber Vorsicht geboten ist.",
            third:
              "Eine Kontraindikation kann eine schwere Hauterkrankung sein, die das Anbringen der Elektroden erschwert, oder eine bekannte Allergie gegen den Kleber der Elektroden.",
            fourth:
              "Patienten mit empfindlicher Haut oder Hautausschlägen sollten wir vorsichtig behandeln, um Reizungen durch die Elektroden zu vermeiden.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erwähnen, dass Differenzialdiagnosen bei auffälligen Befunden unter anderem Vorhofflimmern, ventrikuläre Tachykardien, AV-Blockaden und andere Herzrhythmusstörungen umfassen können.",
            third:
              "Wenn das Langzeit-EKG Auffälligkeiten zeigt, könnten Differenzialdiagnosen wie Vorhofflimmern, ventrikuläre Tachykardien oder AV-Blockaden in Betracht gezogen werden.",
            fourth:
              "Wir müssen bei den Ergebnissen auch an andere Herzrhythmusstörungen denken, wie zum Beispiel Vorhofflattern oder supraventrikuläre Tachykardien.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Je nach den Ergebnissen des Langzeit-EKGs können wir die Medikation anpassen oder weitere diagnostische Schritte wie eine elektrophysiologische Untersuchung empfehlen.",
            third:
              "Je nach den Ergebnissen des Langzeit-EKGs können wir die Medikation anpassen oder weitere diagnostische Schritte wie eine Elektrophysiologische Untersuchung empfehlen.",
            fourth:
              "Falls das Langzeit-EKG signifikante Arrhythmien zeigt, könnte eine Überweisung zur Ablation oder eine Anpassung der Antiarrhythmika notwendig sein.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen, dass eine enge Zusammenarbeit mit Kardiologen, Pflegepersonal und gegebenenfalls Elektrophysiologen für die bestmögliche Versorgung wichtig ist.",
            third:
              "Für eine optimale Patientenversorgung arbeiten wir eng mit Kardiologen und Elektrophysiologen zusammen, um die besten Therapieentscheidungen zu treffen.",
            fourth:
              "Die enge Zusammenarbeit mit dem Pflegepersonal und den Kardiologen ist essenziell, um sicherzustellen, dass der Patient die notwendige Nachsorge erhält.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erklären, dass die Qualität der Langzeit-EKG-Daten durch regelmäßige Kalibrierung der Geräte, Schulung des medizinischen Personals und Überprüfung der Aufzeichnungspraxis gesichert wird.",
            third:
              "Wir stellen die Datenqualität durch regelmäßige Kalibrierung der Geräte und Schulungen für das medizinische Personal sicher.",
            fourth:
              "Qualitätskontrollen und die Überprüfung der Aufzeichnungspraxis sind wichtige Maßnahmen, um die Zuverlässigkeit der Langzeit-EKG-Ergebnisse zu gewährleisten.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Hervorheben, dass eine gründliche Dokumentation der Ergebnisse und die Erstellung eines klaren Berichts für die Weiterverfolgung entscheidend sind, um sicherzustellen, dass alle relevanten Informationen für die weitere Behandlung verfügbar sind.",
            third:
              "Eine sorgfältige Dokumentation der Ergebnisse und ein klarer Bericht sind entscheidend, um die weiteren Schritte in der Behandlung des Patienten zu planen.",
            fourth:
              "Wir müssen sicherstellen, dass alle Befunde gut dokumentiert sind und die Nachsorge koordiniert wird, damit der Patient die beste Behandlung erhält.",
          },
        ],
      },
      // 4tab 114
      {
        id: 114,
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
              "30-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte",
            third:
              "65-jähriger Patient klagt über unregelmäßigen Herzschlag und gelegentliche Schwindelanfälle. Vorgeschichte von Bluthochdruck.",
            fourth:
              "45-jähriger Patient berichtet über plötzliche Herzrasen und kurzzeitige Bewusstlosigkeit. Keine bekannte Herzerkrankung.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Langzeit-EKG zeigt einen durchgehend normalen Herzrhythmus ohne Auffälligkeiten oder Arrhythmien.",
            third:
              "Langzeit-EKG zeigt wiederholte Episoden von unregelmäßigem Herzrhythmus, insbesondere paroxysmales Vorhofflimmern.",
            fourth:
              "Langzeit-EKG dokumentiert mehrere Episoden von schnellen, unregelmäßigen Herzschlägen, charakteristisch für ventrikuläre Tachykardie.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Langzeit-EKG-Ergebnis unterstützt den Ausschluss von Herzrhythmusstörungen.",
            third:
              "Der Befund bestätigt das Vorhandensein von paroxysmalem Vorhofflimmern, das mit den Symptomen des Patienten korreliert.",
            fourth:
              "Die Ergebnisse deuten auf ventrikuläre Tachykardie hin, was die klinischen Symptome des Patienten erklärt und eine sofortige kardiologische Intervention erfordert.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Einleitung einer medikamentösen Therapie zur Kontrolle des Herzrhythmus und zur Vermeidung thromboembolischer Ereignisse.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und die Einleitung einer sofortigen antiarrhythmischen Therapie oder die Planung eines implantierbaren Defibrillators.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Herzens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose von paroxysmalem Vorhofflimmern basierend auf den Langzeit-EKG-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von ventrikulärer Tachykardie aufgrund der Langzeit-EKG-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Langzeit-EKG-Aufnahmen zeigen durchgehend normale P-Wellen, QRS-Komplexe und T-Wellen ohne Auffälligkeiten.",
            third:
              "Langzeit-EKG-Aufnahmen zeigen unregelmäßige P-Wellen und unregelmäßige QRS-Komplexe, die typisch für Vorhofflimmern sind.",
            fourth:
              "Langzeit-EKG zeigt schnelle, breite QRS-Komplexe, charakteristisch für ventrikuläre Tachykardie.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige gesundheitliche Überprüfungen, um sicherzustellen, dass der Zustand des Herzens weiterhin normal bleibt.",
            third:
              "Wir empfehlen die Einleitung einer medikamentösen Therapie zur Kontrolle des Herzrhythmus und zur Vermeidung von Thromboembolien. Regelmäßige Kontrolluntersuchungen sind ebenfalls notwendig.",
            fourth:
              "Es ist zu empfehlen, sofort eine antiarrhythmische Therapie zu beginnen und die Möglichkeit eines implantierbaren Defibrillators in Betracht zu ziehen.",
          },
        ],
      },
      // 5tab 115
      {
        id: 115,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Das Langzeit-EKG-Gerät besteht aus mehreren wesentlichen Komponenten. Elektroden sind kleine, klebende Sensoren, die auf der Haut des Patienten angebracht werden, um elektrische Signale des Herzens zu erfassen. Diese Signale werden über Kabel an den Rekorder weitergeleitet, ein tragbares Gerät, das die Daten speichert und oft am Gürtel oder um den Hals getragen wird. Der Rekorder enthält eine Batterie, die das Gerät mit Energie versorgt, sowie ein Speichermedium, das die aufgezeichneten EKG-Daten speichert.Zur Unterstützung der Patientenführung dient ein Patiententagebuch, in dem der Patient Aktivitäten und Symptome während der Aufzeichnungszeit festhält. Nach der Aufzeichnung werden die Daten mit spezieller Software zur Datenanalyse ausgewertet. Der Rekorder ist mit einem Display ausgestattet, das grundlegende Informationen und Statusmeldungen anzeigt. Eine Holter-Hülle oder ein Tragegurt sorgt für den komfortablen Sitz des Rekorders am Körper des Patienten.",
        text_list: [
          {
            bold: "Elektroden: ",
            other:
              "Kleine, klebende Sensoren, die auf die Haut des Patienten aufgebracht werden, um elektrische Signale des Herzens zu erfassen.",
          },
          {
            bold: "Rekorder: ",
            other:
              "Ein tragbares Gerät, das die von den Elektroden gesammelten elektrischen Signale speichert. Es wird oft am Gürtel des Patienten befestigt oder um den Hals getragen.",
          },
          {
            bold: "Batterie: ",
            other:
              "Eine Stromquelle, die das Langzeit-EKG-Gerät während der gesamten Aufzeichnungszeit mit Energie versorgt.",
          },
          {
            bold: "Speichermedium: ",
            other:
              "Interner Speicher oder eine Speicherkarte, die die aufgezeichneten EKG-Daten speichert.",
          },
          {
            bold: "Patiententagebuch: ",
            other:
              "Ein schriftliches oder elektronisches Protokoll, das der Patient führt, um Aktivitäten und Symptome während der Aufzeichnungszeit festzuhalten.",
          },
          {
            bold: "Software zur Datenanalyse: ",
            other:
              "Spezielle Computerprogramme, die die aufgezeichneten EKG-Daten analysieren und dem Arzt ermöglichen, die Herzaktivität des Patienten zu bewerten.",
          },
          {
            bold: "Display: ",
            other:
              "Ein kleines Bildschirmdisplay auf dem Rekorder, das grundlegende Informationen und Statusmeldungen anzeigt.",
          },
          {
            bold: "Kabel: ",
            other:
              "Verbindungskabel zwischen den Elektroden und dem Rekorder, die die elektrischen Signale weiterleiten.",
          },
          {
            bold: "Holter-Hülle oder Tragegurt: ",
            other:
              "Eine Hülle oder ein Gurt, der verwendet wird, um den Rekorder bequem am Körper des Patienten zu befestigen.",
          },
          {
            bold: "Software zur Berichtserstellung: ",
            other:
              "Computerprogramme, die detaillierte Berichte über die Herzaktivität und etwaige Auffälligkeiten erstellen.",
          },
          {
            bold: "Benutzerhandbuch: ",
            other:
              "Ein Handbuch, das Anweisungen zur Bedienung des Geräts, zur Elektrodenplatzierung und zur Datenaufzeichnung enthält.",
          },
          {
            bold: "Signalverstärker: ",
            other:
              "Ein Bauteil, das die von den Elektroden erfassten schwachen elektrischen Signale verstärkt, bevor sie im Rekorder gespeichert werden.",
          },
          {
            bold: "Kalibrierungsfunktionen: ",
            other:
              "Funktionen zur Überprüfung und Anpassung der Genauigkeit des Geräts vor Beginn der Aufzeichnung.",
          },
          {
            bold: "Telemetriefunktion (optional): ",
            other:
              "Einige moderne Langzeit-EKG-Geräte haben eine Telemetriefunktion, die es ermöglicht, die EKG-Daten in Echtzeit an eine zentrale Überwachungsstation zu senden.",
          },
        ],
      },
      // 6tab 116
      {
        id: 116,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für das Verständnis und die Kommunikation im Bereich der Langzeit-EKG-Diagnostik und werden häufig in Fachgesprächen und Prüfungen verwendet.",
        text_list: [
          {
            bold: "Langzeit-EKG (Holter-EKG): ",
            other:
              "Ein Gerät zur kontinuierlichen Aufzeichnung der elektrischen Herzaktivität über einen längeren Zeitraum, typischerweise 24-48 Stunden.",
          },
          {
            bold: "Elektrode: ",
            other:
              "Kleiner, klebender Sensor, der auf der Haut angebracht wird, um elektrische Signale des Herzens zu erfassen.",
          },
          {
            bold: "Rekorder: ",
            other:
              "Tragbares Gerät, das die von den Elektroden gesammelten EKG-Daten speichert.",
          },
          {
            bold: "R-R-Intervall: ",
            other:
              "Der Abstand zwischen zwei aufeinanderfolgenden R-Zacken im EKG, wichtig zur Bestimmung der Herzfrequenz.",
          },
          {
            bold: "Artefakte: ",
            other:
              "Störsignale im EKG, die durch Bewegungen, lose Elektroden oder elektrische Interferenzen entstehen.",
          },
          {
            bold: "Sinusrhythmus: ",
            other:
              "Normaler, regelmäßiger Herzrhythmus, der vom Sinusknoten ausgeht.",
          },
          {
            bold: "Arrhythmie: ",
            other:
              "Unregelmäßigkeiten im Herzrhythmus, die verschiedene Ursachen haben können.",
          },
          {
            bold: "Vorhofflimmern (AFib): ",
            other:
              "Häufige Art der Arrhythmie, bei der die Vorhöfe des Herzens unregelmäßig schlagen.",
          },
          {
            bold: "Ventrikuläre Tachykardie (VT): ",
            other:
              "Schnelle Herzfrequenz, die in den Herzkammern (Ventrikeln) entsteht.",
          },
          {
            bold: "AV-Block: ",
            other:
              "Eine Form der Herzrhythmusstörung, bei der die Übertragung der elektrischen Signale vom Vorhof zu den Kammern gestört ist.",
          },
          {
            bold: "Herzfrequenzvariabilität (HRV): ",
            other:
              "Die Variation der Zeitintervalle zwischen aufeinanderfolgenden Herzschlägen, ein Indikator für die autonome Regulation des Herzens.",
          },
          {
            bold: "Bradykardie: ",
            other:
              "Langsame Herzfrequenz, typischerweise unter 60 Schlägen pro Minute.",
          },
          {
            bold: "Tachykardie: ",
            other:
              "Schnelle Herzfrequenz, typischerweise über 100 Schlägen pro Minute.",
          },
          {
            bold: "Palpitationen: ",
            other:
              "Wahrnehmung eines schnellen oder unregelmäßigen Herzschlags durch den Patienten.",
          },
          {
            bold: "Synkope: ",
            other:
              "Kurzzeitige Bewusstlosigkeit aufgrund eines vorübergehenden Abfalls der Durchblutung des Gehirns.",
          },
          {
            bold: "Kardioversion: ",
            other:
              "Medizinisches Verfahren zur Wiederherstellung eines normalen Herzrhythmus bei Arrhythmien.",
          },
          {
            bold: "Antikoagulantien: ",
            other:
              "Medikamente zur Verringerung der Blutgerinnung, oft bei Vorhofflimmern eingesetzt, um Schlaganfälle zu verhindern.",
          },
          {
            bold: "P-Welle: ",
            other:
              "Teil des EKG, der die elektrische Aktivität der Vorhöfe darstellt.",
          },
          {
            bold: "QRS-Komplex: ",
            other:
              "Teil des EKG, der die elektrische Aktivität der Herzkammern darstellt.",
          },
          {
            bold: "T-Welle: ",
            other:
              "Teil des EKG, der die Repolarisation der Herzkammern darstellt.",
          },
          {
            bold: "Holter-Monitoring: ",
            other:
              "Synonym für Langzeit-EKG, benannt nach dem Erfinder Norman Holter.",
          },
          {
            bold: "Ereignisrekorder: ",
            other:
              "Ein Gerät zur Aufzeichnung der Herzaktivität, das vom Patienten bei Symptomen aktiviert wird.",
          },
          {
            bold: "Implantierbarer Loop-Rekorder: ",
            other:
              "Ein kleines Gerät, das unter die Haut implantiert wird und die Herzaktivität über Monate bis Jahre aufzeichnet.",
          },
          {
            bold: "Patiententagebuch: ",
            other:
              "Ein Protokoll, das der Patient führt, um Aktivitäten und Symptome während der Langzeit-EKG-Überwachung festzuhalten.",
          },
        ],
      },
      // 7tab 117
      {
        id: 117,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 118
      {
        id: 118,
        title: "PDF",
        link: "https://drive.google.com/file/d/1eIQwPaAom8VCzIEneFSngyR395IEg8E7/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 13
  // start of parent tab 14 Herzkatheteruntersuchung
  {
    id: 14,
    title: "Herzkatheteruntersuchung",
    checked: false,
    childTabs: [
      // 1tab 119
      {
        id: 119,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Primäres Ziel ist die Diagnose und Behandlung von Herzerkrankungen, insbesondere von koronaren Herzkrankheiten.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Untersuchung wird häufig bei Verdacht auf koronare Herzkrankheit, Herzklappenfehler und angeborene Herzfehler eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Herzkatheteruntersuchung basiert auf der Einführung eines Katheters über ein Blutgefäß zum Herzen, um Druckmessungen durchzuführen und Kontrastmittel für die Bildgebung zu injizieren.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Der Eingriff erfolgt meist unter Röntgenkontrolle. Ein Kontrastmittel wird injiziert, um die Herzkranzgefäße sichtbar zu machen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die erhaltenen Bilder und Druckmessungen werden ausgewertet, um Durchblutungsstörungen, Verengungen oder Verschlüsse der Herzkranzgefäße zu erkennen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde umfassen Stenosen, Verschlüsse, Aneurysmen und Anomalien der Herzkranzgefäße.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Herzkatheteruntersuchung ermöglicht eine präzise Diagnostik und sofortige therapeutische Interventionen wie die Ballondilatation und Stentimplantation.",
              },
              {
                bold_text: "Nachteile:",
                text: "Der Eingriff erfordert spezielle technische Ausrüstung und erfahrenes Personal.",
              },
              {
                bold_text: "Risiken:",
                text: "Zu den Risiken gehören Blutungen, Infektionen, allergische Reaktionen auf das Kontrastmittel, Herzrhythmusstörungen und in seltenen Fällen Herzinfarkt oder Schlaganfall.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Herzkatheteruntersuchung ist entscheidend für die Diagnose und Behandlung von Herzkrankheiten. Sie bietet detaillierte Informationen, die andere bildgebende Verfahren nicht liefern können.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Sie ermöglicht eine gezielte Therapieplanung und eine sofortige interventionelle Behandlung, was die Prognose erheblich verbessern kann.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Es gibt nicht-invasive Alternativen wie die Koronar-CT-Angiographie oder Stress-Echokardiographie. Diese können initiale Hinweise geben, ersetzen jedoch nicht die diagnostische Genauigkeit und therapeutischen Möglichkeiten der Herzkatheteruntersuchung.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschung konzentriert sich auf die Verbesserung der Bildgebungstechniken und die Entwicklung neuer Stents und Katheter.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Fortschritte in der Technologie und Materialien könnten die Risiken weiter minimieren und die Anwendungsmöglichkeiten erweitern.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Herzkatheteruntersuchung ist ein unverzichtbares Instrument in der modernen Kardiologie. Sie bietet umfassende diagnostische und therapeutische Möglichkeiten bei Herzerkrankungen.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Ihre Bedeutung für die Diagnose, Behandlung und das Management von Herzerkrankungen kann nicht hoch genug eingeschätzt werden. Fortschritte in der Forschung und Technologie versprechen, die Effizienz und Sicherheit dieses Verfahrens weiter zu verbessern.",
              },
            ],
          },
        ],
      },
      // 2tab 120
      {
        id: 120,
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
              "Erklären Sie, dass das Ziel der Untersuchung die Diagnose und Behandlung von Herzerkrankungen ist.",
            third:
              "Das Ziel dieser Untersuchung ist es, mögliche Verengungen in Ihren Herzkranzgefäßen zu identifizieren und gegebenenfalls sofort zu behandeln.",
            fourth:
              "Wir möchten durch diese Untersuchung die genaue Ursache Ihrer Brustschmerzen feststellen und entsprechende Maßnahmen ergreifen.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie, dass ein dünner Schlauch (Katheter) in ein Blutgefäß eingeführt und bis zum Herzen geführt wird.",
            third:
              "Während der Untersuchung wird ein Katheter über eine Arterie in Ihrer Leiste bis zum Herzen vorgeschoben.",
            fourth:
              "Wir führen einen dünnen Schlauch über eine Vene in Ihrem Arm ein, der bis zum Herzen geht, um die Blutgefäße zu untersuchen.",
          },
          {
            first: "Vorbereitung",
            second:
              "Betonen Sie, dass der Patient möglicherweise nüchtern bleiben muss und im Voraus bestimmte Tests wie ein EKG durchführt.",
            third:
              "Bitte bleiben Sie ab Mitternacht vor der Untersuchung nüchtern und kommen Sie eine Stunde vorher für ein EKG.",
            fourth:
              "Es ist wichtig, dass Sie sechs Stunden vor der Untersuchung nichts essen oder trinken. Wir machen vorher auch ein Blutbild.",
          },
          {
            first: "Risiken",
            second:
              "Erläutern Sie, dass es Risiken wie Blutungen, Infektionen und seltene Komplikationen wie Herzinfarkt gibt.",
            third:
              "Es gibt einige Risiken wie Blutungen an der Einstichstelle und sehr selten einen Herzinfarkt während des Eingriffs.",
            fourth:
              "Nebenwirkungen können Infektionen oder allergische Reaktionen auf das Kontrastmittel sein, aber diese sind selten.",
          },
          {
            first: "Vorteile",
            second:
              "Betonen Sie, dass die Untersuchung präzise Diagnosen und sofortige therapeutische Eingriffe ermöglicht.",
            third:
              "Ein Vorteil dieser Untersuchung ist, dass wir Verengungen sofort behandeln können, falls wir welche finden.",
            fourth:
              "Diese Untersuchung bietet uns eine sehr genaue Darstellung der Herzkranzgefäße, was andere Tests nicht leisten können.",
          },
          {
            first: "Alternativen",
            second:
              "Nennen Sie Alternativen wie die Koronar-CT-Angiographie oder Stress-Echokardiographie und erklären Sie deren Grenzen.",
            third:
              "Alternativen wären eine CT-Angiographie oder ein Belastungstest, aber diese liefern nicht immer so präzise Ergebnisse.",
            fourth:
              "Eine Stress-Echokardiographie könnte auch durchgeführt werden, jedoch bietet sie keine unmittelbaren Behandlungsmöglichkeiten.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären Sie, dass bei bestimmten Vorerkrankungen oder Allergien das Verfahren nicht geeignet sein könnte.",
            third:
              "Falls Sie eine Jodallergie haben, müssen wir vorsichtig sein, da das Kontrastmittel Jod enthält.",
            fourth:
              "Bei schweren Nierenerkrankungen könnte das Kontrastmittel Probleme verursachen, daher müssen wir das vorher abklären.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Beschreiben Sie, dass typische Ergebnisse Verengungen oder Verschlüsse der Herzkranzgefäße sein können.",
            third:
              "Wir könnten Verengungen in Ihren Herzkranzgefäßen feststellen, die wir dann mit einem Stent behandeln.",
            fourth:
              "Die Untersuchung könnte zeigen, dass Ihre Herzkranzgefäße frei sind, was bedeutet, dass Ihre Symptome andere Ursachen haben.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie, dass das Einverständnis des Patienten erforderlich ist, um über die Risiken und den Ablauf aufgeklärt zu sein.",
            third:
              "Ihr schriftliches Einverständnis ist notwendig, nachdem Sie über alle Risiken und den Ablauf informiert wurden.",
            fourth:
              "Wir benötigen Ihr Einverständnis, da es wichtig ist, dass Sie alle Informationen zu den Risiken und dem Verfahren verstanden haben.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie, dass der Patient schriftlich sein Einverständnis geben muss, nachdem er alle Informationen erhalten hat.",
            third:
              "Sie werden gebeten, ein Formular zu unterschreiben, das bestätigt, dass Sie die Risiken und Vorteile verstanden haben.",
            fourth:
              "Nachdem wir alle Details besprochen haben, bitten wir Sie, Ihr Einverständnis schriftlich zu geben.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Empfehlen Sie dem Patienten, nach der Untersuchung Ruhe zu bewahren und sich an die Anweisungen des Arztes zu halten.",
            third:
              "Nach der Untersuchung sollten Sie sich ausruhen und starke körperliche Aktivitäten für ein paar Tage vermeiden.",
            fourth:
              "Es ist wichtig, dass Sie die Anweisungen zum Verhalten nach der Untersuchung genau befolgen, um Komplikationen zu vermeiden.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, dass der Arzt die Ergebnisse der Untersuchung mit dem Patienten besprechen wird, um die nächsten Schritte zu planen.",
            third:
              "Nach der Untersuchung wird Ihr Arzt die Ergebnisse mit Ihnen besprechen und den weiteren Behandlungsplan erläutern.",
            fourth:
              "Wir werden die Ergebnisse ausführlich mit Ihnen besprechen, um gemeinsam die besten weiteren Schritte zu entscheiden.",
          },
        ],
      },
      // 3tab 121
      {
        id: 121,
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
              "Erklären Sie, dass es sich um eine Herzkatheteruntersuchung handelt, bei der ein Katheter ins Herz eingeführt wird, um die Herzkranzgefäße zu untersuchen und gegebenenfalls zu behandeln.",
            third:
              "Die Herzkatheteruntersuchung ermöglicht es uns, einen Katheter über ein Blutgefäß bis zum Herzen zu führen und die Herzkranzgefäße zu visualisieren.",
            fourth:
              "Bei dieser Untersuchung führen wir einen dünnen Schlauch in die Herzkranzgefäße ein, um Verengungen oder Verschlüsse zu erkennen und gegebenenfalls sofort zu behandeln.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Betonen Sie, dass die Untersuchung dazu dient, Verengungen oder Verschlüsse der Herzkranzgefäße zu diagnostizieren und zu behandeln sowie Druckmessungen im Herzen durchzuführen.",
            third:
              "Mit der Herzkatheteruntersuchung können wir die genaue Lage und Schwere von Verengungen in den Herzkranzgefäßen feststellen.",
            fourth:
              "Diese Untersuchung erlaubt es uns, Druckmessungen innerhalb der Herzkammern durchzuführen und die Herzkranzgefäße auf Verengungen zu prüfen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erläutern Sie, dass typische Ergebnisse Verengungen, Verschlüsse oder Anomalien der Herzkranzgefäße sind, die präzise diagnostiziert und sofort behandelt werden können.",
            third:
              "Die Untersuchung zeigte eine signifikante Stenose der linken Koronararterie, die wir mit einem Stent versorgt haben.",
            fourth:
              "Wir fanden eine Verschluss der rechten Koronararterie, die wir durch eine Ballondilatation öffnen konnten.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie Indikationen wie Verdacht auf koronare Herzkrankheit, unklare Brustschmerzen, Herzinfarkte, Herzklappenfehler und angeborene Herzfehler.",
            third:
              "Die Hauptindikation für die Untersuchung war der Verdacht auf eine koronare Herzkrankheit aufgrund von Angina-pectoris-Beschwerden.",
            fourth:
              "Der Patient zeigte Symptome eines akuten Herzinfarkts, was die dringende Indikation für eine Herzkatheteruntersuchung war.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären Sie, dass Kontraindikationen schwere Nierenerkrankungen, unbehandelte Infektionen, schwere Gerinnungsstörungen und bestimmte Allergien (z. B. gegen Kontrastmittel) sein können.",
            third:
              "Aufgrund der schweren Niereninsuffizienz des Patienten mussten wir die Untersuchung verschieben und alternative Bildgebungsverfahren in Betracht ziehen.",
            fourth:
              "Eine bekannte Allergie gegen das Kontrastmittel erfordert besondere Vorsichtsmaßnahmen und alternative Planung.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren Sie mögliche Differenzialdiagnosen, die durch eine Herzkatheteruntersuchung ausgeschlossen oder bestätigt werden können, wie z. B. Myokarditis, Kardiomyopathien und Lungenembolien.",
            third:
              "Durch die Herzkatheteruntersuchung konnten wir eine koronare Herzkrankheit bestätigen und eine Kardiomyopathie ausschließen.",
            fourth:
              "Die Untersuchung half uns, eine Myokarditis auszuschließen und eine koronare Stenose zu diagnostizieren.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Beschreiben Sie, dass auf Basis der Untersuchungsergebnisse spezifische Behandlungspläne entwickelt werden können, einschließlich medikamentöser Therapie, Ballondilatation und Stentimplantation.",
            third:
              "Basierend auf den Untersuchungsergebnissen planen wir die Implantation eines Stents und eine anschließende duale Plättchenhemmung.",
            fourth:
              "Die Ergebnisse legen nahe, dass eine Kombination aus Ballondilatation und Stentimplantation die beste Behandlungsstrategie ist.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit Kardiologen, Radiologen, Anästhesisten und Pflegepersonal, um eine optimale Patientenversorgung sicherzustellen.",
            third:
              "Für eine erfolgreiche Durchführung der Untersuchung ist die enge Zusammenarbeit mit dem kardiologischen Team und den Radiologen entscheidend.",
            fourth:
              "Wir müssen eng mit den Anästhesisten und Pflegekräften zusammenarbeiten, um eine sichere und effektive Durchführung der Herzkatheteruntersuchung zu gewährleisten.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erklären Sie, dass regelmäßige Überprüfungen und Audits der Eingriffsprotokolle und -ergebnisse durchgeführt werden, um die Qualität und Sicherheit der Herzkatheteruntersuchungen zu gewährleisten.",
            third:
              "Regelmäßige Audits unserer Herzkatheterlabore helfen uns, die hohen Qualitätsstandards zu halten und kontinuierlich zu verbessern.",
            fourth:
              "Durch standardisierte Überprüfungen der Eingriffsprotokolle stellen wir sicher, dass alle Verfahren den Qualitätsrichtlinien entsprechen.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Betonen Sie die Notwendigkeit einer ausführlichen Dokumentation der Untersuchungsergebnisse und der durchgeführten Maßnahmen sowie der Planung und Durchführung der Nachsorgeuntersuchungen.",
            third:
              "Eine detaillierte Dokumentation der Untersuchungsergebnisse und der durchgeführten Interventionen ist unerlässlich für die Nachsorge.",
            fourth:
              "Wir müssen sicherstellen, dass alle Ergebnisse und Maßnahmen genau dokumentiert werden, um eine effektive Nachsorge zu gewährleisten.",
          },
        ],
      },
      // 4tab 122
      {
        id: 122,
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
              "55-jähriger Patient klagt über anhaltende Brustschmerzen und Atemnot. Vorgeschichte einer Hypercholesterinämie.",
            third:
              "65-jährige Patientin berichtet von Müdigkeit und Atemnot bei Anstrengung. Vorgeschichte von Rheumatischem Fieber.",
            fourth:
              "40-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Herzkatheteruntersuchung zeigt normale Herzkranzgefäße ohne Verengungen oder Anomalien.",
            third:
              "Herzkatheteruntersuchung zeigt multiple Stenosen in der linken Koronararterie.",
            fourth:
              "Herzkatheteruntersuchung zeigt eine schwere Aortenklappenstenose.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; die Untersuchung unterstützt den Ausschluss koronarer Herzkrankheiten.",
            third:
              "Der Befund deutet auf eine schwere koronare Herzkrankheit hin. Die Stenosen korrelieren mit den Symptomen des Patienten.",
            fourth:
              "Die Befunde bestätigen eine schwere Aortenklappenstenose, die die klinischen Symptome erklärt.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer koronaren Bypass-Operation oder einer perkutane Koronarintervention (PCI).",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Planung einer Aortenklappenersatzoperation.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Herzkranzgefäße. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose einer schweren koronaren Herzkrankheit basierend auf den Befunden der Herzkatheteruntersuchung.",
            fourth:
              "Diagnose einer schweren Aortenklappenstenose basierend auf den Befunden der Herzkatheteruntersuchung.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Angiographiebilder zeigen klare, ungestörte Herzkranzgefäße ohne Verengungen.",
            third:
              "Angiographiebilder zeigen multiple signifikante Verengungen in der linken Koronararterie.",
            fourth:
              "Angiographiebilder zeigen eine stark verkalkte und verengte Aortenklappe.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen weiterhin regelmäßige gesundheitliche Überprüfungen und einen gesunden Lebensstil, um Herzkrankheiten vorzubeugen. Der Patient sollte beruhigt sein, dass keine pathologischen Veränderungen vorliegen.",
            third:
              "Wir empfehlen die Durchführung einer koronaren Bypass-Operation oder einer perkutane Koronarintervention (PCI) zur Behandlung der Stenosen. Eine enge Nachverfolgung und regelmäßige kardiologische Kontrollen sind ebenfalls erforderlich.",
            fourth:
              "Wir empfehlen einen operativen Aortenklappenersatz, um die Symptome zu lindern und die Lebensqualität zu verbessern. Eine langfristige Nachsorge und regelmäßige Kontrollen sind wichtig, um den Erfolg der Behandlung zu überwachen.",
          },
        ],
      },
      // 5tab 123
      {
        id: 123,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Herzkatheteruntersuchungssystem ist ein spezialisiertes medizinisches Gerät zur Diagnose und Behandlung von Herzkrankheiten. Hier sind die wesentlichen Komponenten und Funktionen eines Herzkatheteruntersuchungssystems:",
        text_list: [
          {
            bold: "Katheterlabor :",
            other:
              "Ein speziell ausgestatteter Raum, in dem Herzkatheteruntersuchungen durchgeführt werden. Es enthält alle notwendigen Geräte und ist oft mit einem sterilen Umfeld ausgestattet.",
          },
          {
            bold: "Röntgenanlage :",
            other:
              "Erzeugt Röntgenstrahlen, die zur Bildgebung des Herzens und der Blutgefäße verwendet werden. Sie besteht aus einer Röntgenröhre und einem Detektor.",
          },
          {
            bold: "Röntgenröhre :",
            other:
              "Erzeugt die Röntgenstrahlen, die durch den Körper des Patienten gesendet werden. Sie befindet sich in der Röntgenanlage und kann um den Patienten herum bewegt werden.",
          },
          {
            bold: "Detektoren :",
            other:
              "Erfassung der Röntgenstrahlen, die durch den Körper des Patienten hindurchgehen. Sie wandeln die Strahlen in digitale Bilder um, die auf Monitoren angezeigt werden.",
          },
          {
            bold: "Bildverstärker :",
            other:
              "Verstärkt die Röntgenbilder, um eine klare und detaillierte Ansicht der Herzkranzgefäße zu gewährleisten. Er verbessert die Bildqualität und erleichtert die Diagnose.",
          },
          {
            bold: "Fluoroskopie-System :",
            other:
              "Ein bildgebendes Verfahren, das kontinuierliche Röntgenbilder liefert, um Echtzeit-Bewegungen des Herzens und der Katheter zu beobachten.",
          },
          {
            bold: "Patiententisch :",
            other:
              "Ein motorisierter Tisch, auf dem der Patient während der Untersuchung liegt. Er kann in verschiedene Positionen bewegt werden, um den Zugang zu verschiedenen Bereichen des Herzens zu ermöglichen.",
          },
          {
            bold: "Katheter :",
            other:
              "Ein dünner, flexibler Schlauch, der über ein Blutgefäß bis zum Herzen geführt wird. Er wird zur Druckmessung, Injektion von Kontrastmitteln und Durchführung von therapeutischen Maßnahmen verwendet.",
          },
          {
            bold: "Kontrastmittelinjektor :",
            other:
              "Ein Gerät zur intravenösen Verabreichung von Kontrastmitteln. Das Kontrastmittel verbessert die Sichtbarkeit der Herzkranzgefäße und hilft bei der Diagnose von Verengungen oder Verschlüssen.",
          },
          {
            bold: "Elektrokardiogramm (EKG) :",
            other:
              "Überwacht die elektrische Aktivität des Herzens während der Untersuchung. Es hilft, Herzrhythmusstörungen zu erkennen und die Position des Katheters zu kontrollieren.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Ermöglicht dem Radiologen oder kardiologischen Technologen, das Herzkatheteruntersuchungssystem zu bedienen, Einstellungen vorzunehmen und den gesamten Ablauf der Untersuchung zu überwachen.",
          },
          {
            bold: "Arbeitsstation :",
            other:
              "Besteht aus einem Computer und Monitoren, auf denen die erfassten Bilder angezeigt und analysiert werden. Der Radiologe oder Kardiologe interpretiert hier die Ergebnisse der Untersuchung.",
          },
          {
            bold: "Kühlungssystem :",
            other:
              "Ein notwendiges System, um die Röntgenröhre und andere hitzeempfindliche Komponenten zu kühlen, da sie während des Betriebs viel Wärme erzeugen.",
          },
          {
            bold: "Ablationssystem :",
            other:
              "Wird bei der Behandlung von Herzrhythmusstörungen verwendet. Es ermöglicht die gezielte Ablation von Herzgewebe, um fehlerhafte elektrische Signale zu beseitigen.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben.",
          },
          {
            bold: "Monitoring-Geräte :",
            other:
              "Überwachen kontinuierlich die Vitalzeichen des Patienten, einschließlich Blutdruck, Herzfrequenz und Sauerstoffsättigung, um die Sicherheit während des Eingriffs zu gewährleisten.",
          },
          {
            bold: "Steriles Umfeld :",
            other:
              "Ein Bereich im Katheterlabor, der steril gehalten wird, um das Risiko von Infektionen während des Eingriffs zu minimieren.",
          },
        ],
      },
      // 6tab 124
      {
        id: 124,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für das Verständnis und die Kommunikation im Bereich der Langzeit-EKG-Diagnostik und werden häufig in Fachgesprächen und Prüfungen verwendet.",
        text_list: [
          {
            bold: "Herzkatheteruntersuchung :",
            other:
              "Ein Verfahren, bei dem ein dünner Schlauch (Katheter) in ein Blutgefäß eingeführt und bis zum Herzen vorgeschoben wird.",
          },
          {
            bold: "Koronarangiographie :",
            other:
              "Röntgenuntersuchung der Herzkranzgefäße mit Kontrastmittel.",
          },
          {
            bold: "Katheter :",
            other:
              "Ein dünner, flexibler Schlauch, der in ein Blutgefäß eingeführt wird.",
          },
          {
            bold: "Stenose :",
            other: "Verengung eines Blutgefäßes.",
          },
          {
            bold: "Verschluss :",
            other: "Blockierung eines Blutgefäßes.",
          },
          {
            bold: "Ballondilatation :",
            other:
              "Aufdehnung eines verengten Blutgefäßes mittels eines Ballonkatheters.",
          },
          {
            bold: "Stent :",
            other:
              "Eine Gefäßstütze, die in ein verengtes oder verschlossenes Blutgefäß eingesetzt wird, um es offen zu halten.",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Eine Substanz, die in den Körper injiziert wird, um Strukturen im Röntgenbild besser sichtbar zu machen.",
          },
          {
            bold: "Röntgendurchleuchtung :",
            other:
              "Ein Verfahren, bei dem kontinuierliche Röntgenstrahlen verwendet werden, um bewegte Bilder von inneren Strukturen zu erstellen.",
          },
          {
            bold: "Koronare Herzkrankheit (KHK) :",
            other:
              "Eine Erkrankung, bei der die Herzkranzgefäße verengt oder blockiert sind.",
          },
          {
            bold: "Herzinfarkt :",
            other:
              "Schädigung des Herzmuskels aufgrund einer Unterbrechung der Blutversorgung.",
          },
          {
            bold: "Druckmessung :",
            other:
              "Messung des Drucks in den Herzkammern und Blutgefäßen während der Herzkatheteruntersuchung.",
          },
          {
            bold: "Aortenklappenstenose :",
            other:
              "Verengung der Aortenklappe, die den Blutfluss aus dem Herzen behindert.",
          },
          {
            bold: "Interventionelle Kardiologie :",
            other:
              "Ein Bereich der Kardiologie, der minimalinvasive Verfahren zur Behandlung von Herzkrankheiten umfasst.",
          },
          {
            bold: "Myokard :",
            other: "Herzmuskel.",
          },
          {
            bold: "Ischämie :",
            other: "Minderdurchblutung eines Gewebes.",
          },
          {
            bold: "Hypo- und Hyperdens :",
            other:
              "Bezeichnung für Strukturen, die im Röntgenbild weniger oder mehr dicht erscheinen als das umgebende Gewebe.",
          },
          {
            bold: "Perkutane Koronarintervention (PCI) :",
            other:
              "Ein Verfahren zur Aufdehnung verengter Koronararterien mittels Ballondilatation und/oder Stentimplantation.",
          },
          {
            bold: "Koronargefäße :",
            other:
              "Blutgefäße, die den Herzmuskel mit Sauerstoff und Nährstoffen versorgen.",
          },
          {
            bold: "Komplikationen :",
            other:
              "Mögliche unerwünschte Folgen oder Risiken eines medizinischen Eingriffs, wie Blutungen oder Infektionen.",
          },
          {
            bold: "Niereninsuffizienz :",
            other:
              "Beeinträchtigung der Nierenfunktion, was die Verwendung bestimmter Kontrastmittel einschränken kann.",
          },
          {
            bold: "Elektrokardiogramm (EKG) :",
            other: "Aufzeichnung der elektrischen Aktivität des Herzens.",
          },
          {
            bold: "Angioplastie :",
            other:
              "Ein Verfahren zur Erweiterung verengter oder blockierter Blutgefäße.",
          },
          {
            bold: "Bifurkation :",
            other: "Aufzweigung eines Blutgefäßes in zwei Äste.",
          },
          {
            bold: "Fluoroskopie :",
            other:
              "Bildgebendes Verfahren, das kontinuierliche Röntgenbilder erzeugt, um bewegte Körperstrukturen zu beobachten.",
          },
          {
            bold: "Röntgenbild :",
            other:
              "Bild, das durch Durchleuchten des Körpers mit Röntgenstrahlen erstellt wird.",
          },
          {
            bold: "Vaskuläre Zugangswege :",
            other:
              "Blutgefäße, die für den Katheterzugang verwendet werden, z.B. die Femoral- oder Radialarterie.",
          },
          {
            bold: "Intravaskulärer Ultraschall (IVUS) :",
            other:
              "Ultraschallverfahren zur Darstellung der Innenwand von Blutgefäßen.",
          },
        ],
      },
      // 7tab 125
      {
        id: 125,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 126
      {
        id: 126,
        title: "PDF",
        link: "https://drive.google.com/file/d/1XBfLjU_kl2SF2LTDlGbxS1ZW6RqDumYg/view?usp=share_link",
      },
    ],
  },

  // Endoskopischer Verfahren

  // start of parent tab 15 Arthroskopie
  {
    id: 15,
    title: "Arthroskopie",
    checked: false,
    childTabs: [
      // 1tab 127
      {
        id: 127,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Das primäre Ziel der Arthroskopie besteht darin, Erkrankungen und Verletzungen von Gelenken diagnostisch zu erfassen und gegebenenfalls therapeutische Maßnahmen direkt durchzuführen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Arthroskopie wird häufig bei Gelenkerkrankungen wie Meniskusschäden, Kreuzbandrissen und Knorpelschäden eingesetzt. Sie ist besonders relevant in der Orthopädie und Unfallchirurgie und bietet minimalinvasive Möglichkeiten zur Diagnose und Therapie.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Arthroskopie basiert auf der Einführung eines Arthroskops, ein spezielles Endoskop, in das betroffene Gelenk. Dies ermöglicht eine direkte visuelle Beurteilung des Gelenkinneren.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Ein Arthroskop besteht aus einer Lichtquelle und einer Kamera, die Bilder in Echtzeit auf einen Monitor überträgt. Es werden kleine Hautschnitte gemacht, durch die das Arthroskop und die erforderlichen chirurgischen Instrumente eingeführt werden.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung der arthroskopischen Bilder erfolgt in Echtzeit. Der Chirurg kann anhand der visuellen Befunde Entscheidungen über die weitere Therapie treffen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde umfassen Meniskusrisse, Knorpelschäden, freie Gelenkkörper und Entzündungen der Gelenkinnenhaut. Diese Befunde können sofort behandelt oder für eine spätere Therapie dokumentiert werden.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Arthroskopie bietet zahlreiche Vorteile, die sie zu einem bevorzugten Verfahren in der Diagnose und Behandlung von Gelenkerkrankungen machen. Einer der größten Vorteile ist die Minimalinvasivität der Methode. Durch die Verwendung kleiner Hautschnitte werden die Weichteile und die umliegenden Strukturen des Gelenks weitgehend geschont, was zu einer deutlich kürzeren Erholungszeit für den Patienten führt. Zudem sind die postoperativen Schmerzen in der Regel geringer als bei offenen chirurgischen Eingriffen. Ein weiterer wesentlicher Vorteil ist die Möglichkeit, diagnostische und therapeutische Maßnahmen in einem einzigen Eingriff zu kombinieren. Dies spart nicht nur Zeit und Kosten, sondern minimiert auch die Belastung für den Patienten.",
              },
              {
                bold_text: "Nachteile:",
                text: "Trotz ihrer vielen Vorteile ist die Arthroskopie nicht ohne Nachteile. Einer der Hauptnachteile ist die technische Komplexität des Verfahrens. Es erfordert eine erhebliche Erfahrung und Geschicklichkeit seitens des Chirurgen, um präzise und effektive Ergebnisse zu erzielen. Zudem können nicht alle Gelenkprobleme durch Arthroskopie behandelt werden. In einigen Fällen ist ein offener chirurgischer Eingriff notwendig, um umfassendere Reparaturen oder Rekonstruktionen durchzuführen. Auch die Anschaffung und Wartung der speziellen arthroskopischen Ausrüstung kann kostenintensiv sein und erfordert regelmäßige Schulungen des medizinischen Personals.",
              },
              {
                bold_text: "Risiken:",
                text: "Wie bei jedem chirurgischen Eingriff sind auch bei der Arthroskopie Risiken vorhanden. Zu den häufigsten Risiken zählen Infektionen, die trotz steriler Arbeitsweise auftreten können. Blutungen sind ein weiteres mögliches Risiko, insbesondere wenn Blutgefäße im Bereich des Gelenks verletzt werden. Es besteht auch die Gefahr, dass während des Eingriffs umliegende Gelenkstrukturen beschädigt werden. Darüber hinaus gibt es die allgemeinen Anästhesierisiken, die von allergischen Reaktionen bis hin zu Komplikationen bei der Atemwegssicherung reichen können. Auch wenn diese Risiken im Vergleich zu offenen chirurgischen Eingriffen geringer sind, müssen sie dennoch bei der Planung und Durchführung einer Arthroskopie berücksichtigt werden.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Arthroskopie spielt eine entscheidende Rolle in der Diagnose und Behandlung von Gelenkerkrankungen. Sie ermöglicht eine präzise Beurteilung und gezielte Therapie.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch die minimalinvasive Natur der Arthroskopie kann das Patientenmanagement verbessert werden, indem die Erholungszeiten verkürzt und postoperative Komplikationen minimiert werden.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zur Arthroskopie zählen bildgebende Verfahren wie MRT und CT, die jedoch nur diagnostisch und nicht therapeutisch eingesetzt werden können.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Die aktuelle Forschung konzentriert sich auf die Verbesserung der technischen Ausrüstung und die Entwicklung neuer minimalinvasiver Techniken.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Perspektiven beinhalten die Integration von robotergestützten Systemen und die Weiterentwicklung biologischer Therapien zur Gelenkreparatur.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Arthroskopie ist ein essenzielles Verfahren in der Orthopädie und Unfallchirurgie, das eine präzise Diagnose und Behandlung von Gelenkerkrankungen ermöglicht.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Ihre minimalinvasive Natur und die Möglichkeit, diagnostische und therapeutische Maßnahmen zu kombinieren, machen die Arthroskopie zu einem unverzichtbaren Werkzeug im modernen medizinischen Alltag.",
              },
            ],
          },
        ],
      },
      // 2tab 128
      {
        id: 128,
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
              "Erklären Sie dem Patienten, dass das Ziel der Arthroskopie darin besteht, das betroffene Gelenk zu untersuchen und mögliche Schäden oder Erkrankungen zu diagnostizieren und zu behandeln.",
            third:
              "„Wir führen die Arthroskopie durch, um genau zu sehen, was in Ihrem Knie los ist und ob es einen Schaden gibt, den wir sofort behandeln können.“",
            fourth:
              "„Mit der Arthroskopie können wir die genaue Ursache Ihrer Schulterbeschwerden feststellen und eventuell direkt während des Eingriffs behandeln.“",
          },
          {
            first: "Ablauf",
            second:
              "Erläutern Sie den genauen Ablauf der Arthroskopie, einschließlich der Einführung des Arthroskops durch kleine Hautschnitte, der Untersuchung des Gelenks und der Durchführung therapeutischer Maßnahmen.",
            third:
              "„Während der Arthroskopie machen wir kleine Schnitte um das Knie und führen das Arthroskop ein, um das Gelenk von innen zu betrachten und ggf. zu behandeln.“",
            fourth:
              "„Wir werden durch kleine Einschnitte an Ihrer Schulter das Arthroskop einführen. Dadurch können wir die Gelenkstrukturen genau inspizieren und nötigenfalls behandeln.“",
          },
          {
            first: "Vorbereitung",
            second:
              "Informieren Sie den Patienten über die notwendigen Vorbereitungen, wie z. B. das Fasten vor dem Eingriff, die Einnahme oder das Absetzen bestimmter Medikamente.",
            third:
              "„Bitte fasten Sie ab Mitternacht vor dem Eingriff und informieren Sie uns über alle Medikamente, die Sie einnehmen.“",
            fourth:
              "„Vor der Arthroskopie sollten Sie ab 6 Uhr morgens nichts mehr essen oder trinken. Bringen Sie uns eine Liste Ihrer aktuellen Medikamente mit.“",
          },
          {
            first: "Risiken",
            second:
              "Betonen Sie die möglichen Risiken der Arthroskopie, einschließlich Infektionen, Blutungen, Verletzungen von Gelenkstrukturen und Anästhesierisiken.",
            third:
              "„Zu den Risiken gehören Infektionen, Blutungen und die Möglichkeit, dass Gelenkstrukturen verletzt werden.“",
            fourth:
              "„Es gibt ein geringes Risiko von Infektionen und Blutungen, und es besteht die Möglichkeit, dass das Gelenk während des Eingriffs verletzt wird.“",
          },
          {
            first: "Vorteile",
            second:
              "Erklären Sie die Vorteile des Verfahrens, wie die minimalinvasive Natur, die kürzere Erholungszeit, geringere postoperative Schmerzen und die Möglichkeit, Diagnose und Therapie in einem Eingriff zu kombinieren.",
            third:
              "„Der Vorteil der Arthroskopie ist, dass sie minimalinvasiv ist, was zu einer schnelleren Genesung und weniger Schmerzen führt.“",
            fourth:
              "„Ein großer Vorteil dieses Verfahrens ist, dass wir es minimalinvasiv durchführen können, was Ihre Erholungszeit verkürzt und postoperative Schmerzen reduziert.“",
          },
          {
            first: "Alternativen",
            second:
              "Nennen Sie alternative Diagnose- und Behandlungsmethoden, wie z. B. MRT, CT oder offene chirurgische Eingriffe, und erläutern Sie deren Vor- und Nachteile.",
            third:
              "„Als Alternative könnten wir ein MRT machen, aber das zeigt nur Bilder und keine Möglichkeit zur direkten Behandlung.“",
            fourth:
              "„Ein offener chirurgischer Eingriff wäre eine Alternative, ist jedoch invasiver und mit längerer Erholungszeit verbunden.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie mögliche Kontraindikationen, bei denen eine Arthroskopie nicht durchgeführt werden sollte, wie z. B. schwere Infektionen oder bestimmte gesundheitliche Vorbedingungen.",
            third:
              "„Bei akuten Infektionen im Gelenkbereich oder schwerwiegenden Herz-Kreislauf-Erkrankungen sollten wir die Arthroskopie nicht durchführen.“",
            fourth:
              "„Wenn Sie unter schwerwiegenden systemischen Infektionen oder Blutgerinnungsstörungen leiden, ist die Arthroskopie nicht zu empfehlen.“",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Informieren Sie den Patienten über die möglichen Ergebnisse der Arthroskopie, einschließlich der Meniskusrissen, Knorpelschäden oder Entzündungen.",
            third:
              "„Mögliche Ergebnisse können Meniskusrisse oder Knorpelschäden sein, die wir während des Eingriffs behandeln können.“",
            fourth:
              "„Wir könnten Entzündungen oder freie Gelenkkörper finden, die dann entfernt oder behandelt werden.“",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Bedeutung des informierten Einverständnisses des Patienten vor dem Eingriff, um sicherzustellen, dass dieser über alle Aspekte und Risiken aufgeklärt ist.",
            third:
              "„Es ist sehr wichtig, dass Sie Ihr Einverständnis geben, nachdem Sie alle Informationen über den Eingriff und die möglichen Risiken erhalten haben.“",
            fourth:
              "„Ihr schriftliches Einverständnis ist notwendig, damit wir sicherstellen können, dass Sie umfassend informiert wurden und dem Eingriff zustimmen.“",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie den Prozess des Einholens des Einverständnisses, einschließlich der Bereitstellung detaillierter Informationen und der Beantwortung aller Fragen des Patienten.",
            third:
              "„Wir werden Ihnen alle Details des Eingriffs erklären und Ihre Fragen beantworten, bevor Sie Ihr Einverständnis geben.“",
            fourth:
              "„Vor dem Eingriff erhalten Sie ein Formular, das wir gemeinsam durchgehen, um sicherzustellen, dass alle Ihre Fragen beantwortet wurden.“",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie dem Patienten abschließende Hinweise zur Nachsorge, wie z. B. Verhalten nach dem Eingriff, mögliche Symptome, die beobachtet werden sollten, und Nachkontrolltermine.",
            third:
              "„Nach der Arthroskopie sollten Sie das betroffene Gelenk schonen und auf Anzeichen einer Infektion achten.“",
            fourth:
              "„Wir vereinbaren einen Nachsorgetermin, um den Heilungsverlauf zu überprüfen und eventuelle Fragen zu klären.“",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Informieren Sie den Patienten, wann und wie er die Ergebnisse der Arthroskopie erhalten wird und wie diese Ergebnisse seine weitere Behandlung beeinflussen können.",
            third:
              "„Die Ergebnisse der Arthroskopie besprechen wir in der Nachsorgeuntersuchung in etwa einer Woche.“",
            fourth:
              "„Wir informieren Sie direkt nach dem Eingriff über die ersten Ergebnisse, und detaillierte Informationen erhalten Sie beim nächsten Termin.“",
          },
        ],
      },
      // 3tab 129
      {
        id: 129,
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
              "Erläutern Sie kurz die Natur der Untersuchung, in diesem Fall die Arthroskopie, als minimalinvasives Verfahren zur Untersuchung und Behandlung von Gelenken.",
            third:
              "„Die Arthroskopie ist ein minimalinvasives Verfahren, bei dem wir mithilfe eines Arthroskops das Innere eines Gelenks untersuchen.“",
            fourth:
              "„Bei der Arthroskopie führen wir eine kleine Kamera in das Gelenk ein, um direkt visuell Diagnosen zu stellen und Behandlungen durchzuführen.“",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Besprechen Sie die spezifischen Gelenkstrukturen, die durch die Arthroskopie sichtbar gemacht werden können, wie z. B. Knorpel, Menisken, Bänder und die Gelenkinnenhaut.",
            third:
              "„Mit der Arthroskopie können wir Strukturen wie den Knorpel, die Menisken, Bänder und die Gelenkinnenhaut genau untersuchen.“",
            fourth:
              "„Wir nutzen die Arthroskopie, um Schäden an den Bändern, Knorpelrisse oder Meniskusverletzungen direkt zu visualisieren und zu behandeln.“",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erklären Sie die möglichen diagnostischen Ergebnisse, die durch die Arthroskopie gewonnen werden können, und wie diese die weitere Behandlung beeinflussen.",
            third:
              "„Die Arthroskopie kann Risse im Meniskus, Knorpelschäden oder freie Gelenkkörper aufzeigen, die wir dann sofort behandeln können.“",
            fourth:
              "„Durch die Arthroskopie erhalten wir genaue Informationen über das Ausmaß von Gelenkschäden, was uns hilft, den besten Behandlungsplan zu entwickeln.“",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie die Hauptindikationen für die Durchführung einer Arthroskopie, z. B. anhaltende Gelenkschmerzen, Schwellungen oder mechanische Blockaden im Gelenk.",
            third:
              "„Hauptindikationen sind anhaltende Gelenkschmerzen, Schwellungen und mechanische Blockaden, die durch Bildgebung nicht klar diagnostiziert werden können.“",
            fourth:
              "„Wir führen die Arthroskopie durch bei Verdacht auf Meniskusschäden, Kreuzbandverletzungen oder bei unklaren Gelenkbeschwerden.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie die Kontraindikationen, bei denen eine Arthroskopie nicht empfohlen wird, wie akute Infektionen oder schwerwiegende systemische Erkrankungen.",
            third:
              "„Kontraindikationen umfassen akute Infektionen im Gelenkbereich und schwerwiegende systemische Erkrankungen, die das Risiko erhöhen.“",
            fourth:
              "„Patienten mit schwerwiegenden Blutgerinnungsstörungen oder akuten Hautinfektionen im Bereich des betroffenen Gelenks sind keine guten Kandidaten für eine Arthroskopie.“",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren Sie mögliche Differenzialdiagnosen, die in Betracht gezogen werden sollten, wenn die Symptome des Patienten unklar sind.",
            third:
              "„Differenzialdiagnosen umfassen rheumatoide Arthritis, Gicht und infektiöse Arthritis, die ähnliche Symptome verursachen können.“",
            fourth:
              "„Bei Gelenkschmerzen müssen wir auch an Bursitis, Tendinitis und Osteoarthritis denken, die ebenfalls ähnliche klinische Bilder zeigen.“",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen Sie, wie die Ergebnisse der Arthroskopie in die Entwicklung von Behandlungsplänen einfließen und welche therapeutischen Optionen in Betracht gezogen werden.",
            third:
              "„Basierend auf den arthroskopischen Befunden können wir gezielt Behandlungen wie Meniskusresektionen oder Knorpelglättungen planen.“",
            fourth:
              "„Die Ergebnisse der Arthroskopie helfen uns, einen individuellen Behandlungsplan zu erstellen, der konservative oder chirurgische Optionen umfassen kann.“",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Erklären Sie die Bedeutung der Zusammenarbeit mit anderen Fachdisziplinen, wie Physiotherapie und Anästhesiologie, im Kontext der Arthroskopie.",
            third:
              "„Eine enge Zusammenarbeit mit der Physiotherapie ist wichtig, um die postoperative Rehabilitation und die Wiederherstellung der Gelenkfunktion zu optimieren.“",
            fourth:
              "„Wir arbeiten eng mit der Anästhesiologie zusammen, um eine sichere Narkose zu gewährleisten und postoperative Schmerzen effektiv zu managen.“",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Diskutieren Sie Maßnahmen zur Sicherstellung der Qualität und Sicherheit bei der Durchführung von Arthroskopien, einschließlich Sterilitätsprotokollen und Schulungen.",
            third:
              "„Wir stellen sicher, dass alle Geräte sterilisiert und regelmäßig gewartet werden, um Infektionsrisiken zu minimieren.“",
            fourth:
              "„Durch kontinuierliche Schulungen und die Einhaltung von Qualitätsstandards können wir die Sicherheit und Effektivität der Arthroskopien gewährleisten.“",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erläutern Sie die wichtigen Aspekte der Dokumentation der Untersuchungsergebnisse und die Planung der Nachsorge sowie die Bedeutung der umfassenden Patientenakte.",
            third:
              "„Eine gründliche Dokumentation der arthroskopischen Befunde und durchgeführten Maßnahmen ist entscheidend für die Nachsorge und weitere Therapieentscheidungen.“",
            fourth:
              "„Nach der Arthroskopie planen wir regelmäßige Nachuntersuchungen und dokumentieren den Heilungsverlauf detailliert, um den Behandlungserfolg zu überwachen.“",
          },
        ],
      },
      // 4tab 130
      {
        id: 130,
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
              "45-jähriger Patient klagt über anhaltende Knieschmerzen und Schwellungen nach einem Sportunfall.",
            fourth:
              "30-jährige Patientin berichtet von Instabilität und Schmerzen im Knie nach einem Sturz beim Skifahren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Arthroskopie des Knies zeigt keine Anomalien, keine Anzeichen pathologischer Veränderungen.",
            third:
              "Arthroskopie zeigt einen deutlichen Riss im medialen Meniskus.",
            fourth:
              "Arthroskopie offenbart einen vollständigen Riss des vorderen Kreuzbandes.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das arthroskopische Ergebnis bestätigt das Fehlen von Schäden oder Erkrankungen.",
            third:
              "Der Befund deutet auf einen Meniskusriss hin, der die Beschwerden des Patienten erklärt.",
            fourth:
              "Die Diagnose eines Kreuzbandrisses korreliert mit der berichteten Instabilität und den Schmerzen der Patientin.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer arthroskopischen Meniskusresektion oder -naht.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer Rekonstruktionsoperation des Kreuzbandes.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Knies. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines Meniskusrisses basierend auf arthroskopischen Befunden und klinischem Bild.",
            fourth:
              "Diagnose eines Kreuzbandrisses aufgrund der arthroskopischen Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Darstellung",
            second: "Homogene, normale Gelenkstrukturen ohne Auffälligkeiten.",
            third:
              "Arthroskopische Aufnahmen zeigen einen klaren, längs verlaufenden Riss im medialen Meniskus.",
            fourth:
              "Arthroskopische Bilder zeigen den vollständigen Riss des vorderen Kreuzbandes mit sichtbarer Instabilität des Gelenks.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen, die Gesundheit des Patienten durch regelmäßige Kontrollen zu überwachen, um sicherzustellen, dass keine zukünftigen Probleme auftreten.",
            third:
              "Wir empfehlen eine arthroskopische Meniskusresektion oder -naht, um die Beschwerden zu lindern und die Funktion des Knies wiederherzustellen.",
            fourth:
              "Es ist zu empfehlen, eine operative Rekonstruktion des Kreuzbandes durchzuführen, gefolgt von einem gezielten Rehabilitationsprogramm.",
          },
        ],
      },
      // 5tab 131
      {
        id: 131,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Arthroskopie-Gerät ist ein hochentwickeltes medizinisches Instrument zur Untersuchung und Behandlung von Gelenken. Es ermöglicht minimalinvasive Eingriffe und bietet direkte visuelle Inspektionen der Gelenkstrukturen. Hier sind die wesentlichen Komponenten und Funktionen eines Arthroskopie-Geräts:",
        text_list: [
          {
            bold: "Arthroskop :",
            other:
              "Das Arthroskop ist ein dünnes, röhrenförmiges Instrument, das mit einer Lichtquelle und einer Kamera ausgestattet ist. Es wird in das Gelenk eingeführt, um Bilder des Gelenkinneren auf einem Monitor zu übertragen, sodass der Chirurg die Strukturen direkt sehen kann.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Eine starke Lichtquelle, die mit dem Arthroskop verbunden ist. Sie beleuchtet das Innere des Gelenks, um klare und detaillierte Bilder zu ermöglichen.",
          },
          {
            bold: "Kamera :",
            other:
              "Eine miniaturisierte Kamera, die am Ende des Arthroskops angebracht ist. Sie überträgt die visuellen Informationen auf einen Monitor, sodass der Chirurg das Gelenk in Echtzeit sehen kann.",
          },
          {
            bold: "Monitor :",
            other:
              "Ein hochauflösender Bildschirm. Er zeigt die Bilder, die von der Kamera im Arthroskop erfasst werden, an. Der Chirurg kann das Gelenk detailliert untersuchen und die Operation präzise durchführen.",
          },
          {
            bold: "Flüssigkeitspumpe :",
            other:
              "Eine Pumpe, die sterile Flüssigkeit in das Gelenk leitet. Sie spült das Gelenk, um klare Sichtverhältnisse zu schaffen, indem Blut und andere Gewebetrümmer weggespült werden.",
          },
          {
            bold: "Arthroskopische Instrumente :",
            other:
              "Verschiedene kleine Instrumente wie Zangen, Scheren und Shaver. Sie werden durch zusätzliche kleine Einschnitte eingeführt, um operative Maßnahmen wie Biopsien, Resektionen und Nahttechniken durchzuführen.",
          },
          {
            bold: "Trokar :",
            other:
              "Ein hohler Führungsstab. Er erlaubt das Einführen des Arthroskops und der chirurgischen Instrumente in das Gelenk.",
          },
          {
            bold: "Fluid Management System :",
            other:
              "Ein System zur Steuerung des Flüssigkeitsflusses in das und aus dem Gelenk. Es hält den Druck im Gelenkraum konstant und sorgt für eine klare Sicht während der Arthroskopie.",
          },
          {
            bold: "Insufflator :",
            other:
              "Ein Gerät, das Luft oder Gas in das Gelenk pumpt. Es dehnt das Gelenk aus, um mehr Platz für die Untersuchung und chirurgische Eingriffe zu schaffen.",
          },
        ],
      },
      // 6tab 132
      {
        id: 132,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für das Verständnis und die Kommunikation im Bereich der Langzeit-EKG-Diagnostik und werden häufig in Fachgesprächen und Prüfungen verwendet.",
        text_list: [
          {
            bold: "Arthroskopie :",
            other:
              "Minimalinvasives Verfahren zur Untersuchung und Behandlung von Gelenken.",
          },
          {
            bold: "Arthroskop :",
            other:
              "Instrument, das eine Kamera und eine Lichtquelle enthält, um das Gelenkinnere sichtbar zu machen.",
          },
          {
            bold: "Gelenkspiegelung :",
            other: "Synonym für Arthroskopie.",
          },
          {
            bold: "Meniskusriss :",
            other: "Verletzung des Meniskus, häufig im Kniegelenk.",
          },
          {
            bold: "Kreuzbandriss :",
            other:
              "Verletzung des vorderen oder hinteren Kreuzbandes im Kniegelenk.",
          },
          {
            bold: "Knorpelschaden :",
            other: "Schädigung des Knorpelgewebes im Gelenk.",
          },
          {
            bold: "Gelenkinnenhaut :",
            other:
              "Synoviale Membran, die das Innere eines Gelenks auskleidet.",
          },
          {
            bold: "Synovitis :",
            other: "Entzündung der Gelenkinnenhaut.",
          },
          {
            bold: "Freie Gelenkkörper :",
            other:
              "Kleine Stücke von Knochen oder Knorpel, die sich im Gelenk bewegen können.",
          },
          {
            bold: "Diagnostische Arthroskopie :",
            other:
              "Verfahren zur Untersuchung und Diagnose von Gelenkproblemen.",
          },
          {
            bold: "Therapeutische Arthroskopie :",
            other: "Verfahren zur Behandlung von Gelenkproblemen.",
          },
          {
            bold: "Resektion :",
            other: "Entfernung von beschädigtem Gewebe oder Knochen.",
          },
          {
            bold: "Rekonstruktion :",
            other:
              "Wiederherstellung von beschädigtem Gewebe oder Strukturen, z.B. Kreuzbandrekonstruktion.",
          },
          {
            bold: "Minimalinvasiv :",
            other: "Verfahren, das nur kleine Einschnitte erfordert.",
          },
          {
            bold: "Postoperative Nachsorge :",
            other:
              "Betreuung und Überwachung nach einem chirurgischen Eingriff.",
          },
          {
            bold: "Rehabilitation :",
            other:
              "Maßnahmen zur Wiederherstellung der Funktion und Beweglichkeit des Gelenks nach einer Operation.",
          },
          {
            bold: "Sterilität :",
            other:
              "Keimfreiheit, ein wichtiger Aspekt zur Vermeidung von Infektionen während des Eingriffs.",
          },
          {
            bold: "Routinekontrolle :",
            other:
              "Regelmäßige Untersuchung ohne spezifischen Verdacht auf eine Erkrankung.",
          },
          {
            bold: "Indikation :",
            other: "Medizinische Notwendigkeit oder Grund für einen Eingriff.",
          },
          {
            bold: "Kontraindikation :",
            other:
              "Umstände oder Bedingungen, bei denen ein bestimmter Eingriff nicht durchgeführt werden sollte.",
          },
          {
            bold: "Differenzialdiagnose :",
            other:
              "Abwägen verschiedener Diagnosen, die ähnliche Symptome verursachen können.",
          },
          {
            bold: "Visuelle Befunde :",
            other:
              "Bilder und Beobachtungen, die während der Arthroskopie gemacht werden.",
          },
          {
            bold: "MRT (Magnetresonanztomographie) :",
            other:
              "Bildgebendes Verfahren zur Darstellung von Weichteilen und Gelenkstrukturen.",
          },
          {
            bold: "Patientenakte :",
            other:
              "Dokumentation aller relevanten medizinischen Informationen und Untersuchungsergebnisse des Patienten.",
          },
          {
            bold: "Einverständniserklärung :",
            other:
              "Schriftliche Zustimmung des Patienten nach umfassender Aufklärung über den Eingriff und seine Risiken.",
          },
        ],
      },
      // 7tab 133
      {
        id: 109,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 134
      {
        id: 118,
        title: "PDF",
        link: "https://drive.google.com/file/d/1IRSz4kiJegr2ASO9uUSLkVH2QmbnDOYg/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 15
  // start of parent tab 16 Gastroskopie
  {
    id: 16,
    title: "Gastroskopie ",
    checked: false,
    childTabs: [
      // 1tab 135
      {
        id: 135,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Hauptziele der Gastroskopie sind die Diagnose und Beurteilung von Erkrankungen des oberen Verdauungstrakts, wie z.B. Geschwüre, Entzündungen, Blutungen, Tumore und andere pathologische Veränderungen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Gastroskopie ist von entscheidender Bedeutung in der Gastroenterologie, da sie eine direkte Visualisierung und Biopsieentnahme ermöglicht. Sie wird häufig bei Patienten mit Symptomen wie Oberbauchschmerzen, Sodbrennen, Übelkeit, Erbrechen und unklaren Blutungen eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Gastroskopie basiert auf der direkten visuellen Inspektion der Schleimhaut des oberen Gastrointestinaltrakts mithilfe eines flexiblen Endoskops. Das Endoskop ist mit einer Lichtquelle und einer Kamera ausgestattet, die Bilder in Echtzeit auf einen Monitor überträgt.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Das Endoskop wird vorsichtig über den Mund und die Speiseröhre in den Magen und den Zwölffingerdarm eingeführt. Der Patient liegt dabei in der Regel in Seitenlage. Während der Untersuchung können Luft und Wasser über das Endoskop eingebracht werden, um die Sicht zu verbessern und Gewebeproben zu entnehmen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Interpretation der Gastroskopieergebnisse erfolgt durch die visuelle Beurteilung der Schleimhaut. Auffällige Bereiche werden genau dokumentiert, und gegebenenfalls werden Gewebeproben zur histologischen Untersuchung entnommen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde können entzündliche Veränderungen (Gastritis), Ulzera (Magengeschwüre), Tumore, Varizen, Polypen und Anzeichen von Refluxerkrankungen umfassen.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Gastroskopie ermöglicht eine direkte und detaillierte Visualisierung des oberen Gastrointestinaltrakts, eine präzise Diagnosestellung und die Möglichkeit zur sofortigen therapeutischen Intervention (z.B. Blutstillung).",
              },
              {
                bold_text: "Nachteile:",
                text: "Das Verfahren kann für den Patienten unangenehm sein und erfordert eine Sedierung. Es besteht ein geringes Risiko für Komplikationen wie Blutungen oder Perforationen.",
              },
              {
                bold_text: "Risiken:",
                text: "Mögliche Risiken umfassen Infektionen, Blutungen, Perforationen und Nebenwirkungen der Sedierung. Diese Risiken sind jedoch selten und treten bei erfahrenen Anwendern nur in Ausnahmefällen auf.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Gastroskopie spielt eine zentrale Rolle in der Diagnose und Behandlung von Erkrankungen des oberen Verdauungstrakts. Sie ermöglicht nicht nur die Diagnose, sondern auch therapeutische Maßnahmen wie die Entfernung von Polypen oder die Blutstillung.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch die Gastroskopie können rasch und gezielt Diagnosen gestellt und Behandlungsstrategien entwickelt werden. Dies verbessert das Patientenmanagement erheblich und trägt zur schnellen Genesung bei.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen der Gastroskopie zählen die radiologische Diagnostik (z.B. Bariumkontrastmittelstudien) und nicht-invasive Tests (z.B. Atemtests für Helicobacter pylori). Diese Alternativen bieten jedoch nicht die gleiche diagnostische Genauigkeit und therapeutische Möglichkeiten wie die Gastroskopie.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Die jüngste Forschung konzentriert sich auf die Verbesserung der Bildgebungstechnologien und die Entwicklung neuer endoskopischer Techniken, wie die optische Kohärenztomographie und die konfokale Laserendoskopie.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten minimalinvasivere Techniken und verbesserte diagnostische Genauigkeit bieten. Auch die Integration von Künstlicher Intelligenz zur automatischen Erkennung von Pathologien wird erforscht.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Gastroskopie ist ein unverzichtbares Verfahren in der Gastroenterologie, das eine direkte Visualisierung und Intervention im oberen Gastrointestinaltrakt ermöglicht. Es bietet zahlreiche diagnostische und therapeutische Vorteile bei geringen Risiken.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Die Gastroskopie hat eine herausragende Bedeutung für die frühzeitige Diagnose und Behandlung von Erkrankungen des oberen Verdauungstrakts und ist ein wesentliches Instrument für das effektive Patientenmanagement in der modernen Medizin.",
              },
            ],
          },
        ],
      },
      // 2tab 136
      {
        id: 136,
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
              "Erklären Sie dem Patienten, dass das Ziel der Gastroskopie darin besteht, den oberen Verdauungstrakt (Speiseröhre, Magen, Zwölffingerdarm) zu untersuchen und mögliche Krankheiten zu diagnostizieren.",
            third:
              "Wir möchten herausfinden, ob Sie ein Magengeschwür oder eine Entzündung der Speiseröhre haben.",
            fourth:
              "Diese Untersuchung hilft uns, die Ursache Ihrer anhaltenden Magenschmerzen zu finden.",
          },
          {
            first: "Ablauf",
            second:
              "Beschreiben Sie, dass während der Gastroskopie ein flexibles Endoskop über den Mund in den Magen eingeführt wird, um die Schleimhaut zu betrachten und gegebenenfalls Gewebeproben zu entnehmen.",
            third:
              "Ein dünnes, flexibles Rohr mit einer Kamera wird durch Ihren Mund in den Magen geführt.",
            fourth:
              "Während der Untersuchung können wir kleine Proben der Magenschleimhaut entnehmen, um sie im Labor zu analysieren.",
          },
          {
            first: "Vorbereitung",
            second:
              "Erläutern Sie, dass der Patient nüchtern sein muss (in der Regel mindestens 6-8 Stunden vorher nichts essen oder trinken) und möglicherweise eine Beruhigungsspritze erhält.",
            third:
              "Bitte essen und trinken Sie mindestens 6 Stunden vor der Untersuchung nichts.",
            fourth:
              "Sie werden eine Beruhigungsspritze bekommen, um die Untersuchung angenehmer zu gestalten.",
          },
          {
            first: "Risiken",
            second:
              "Erwähnen Sie die möglichen Risiken, einschließlich Infektionen, Blutungen, Perforationen und Nebenwirkungen der Sedierung, betonen Sie jedoch, dass diese selten sind.",
            third:
              "Es besteht ein geringes Risiko für Infektionen oder Blutungen, die jedoch selten sind.",
            fourth:
              "In sehr seltenen Fällen kann es zu einer Perforation der Magenwand kommen.",
          },
          {
            first: "Vorteile",
            second:
              "Nennen Sie die Vorteile der Gastroskopie, wie die direkte Visualisierung und Diagnose von Erkrankungen, die Möglichkeit zur sofortigen Behandlung und die Entnahme von Gewebeproben.",
            third:
              "Wir können sofort sehen, ob es Probleme gibt, und bei Bedarf sofort Maßnahmen ergreifen.",
            fourth:
              "Die Untersuchung ermöglicht es uns, direkt Gewebeproben zu entnehmen, ohne dass ein größerer Eingriff nötig ist.",
          },
          {
            first: "Alternativen",
            second:
              "Erklären Sie mögliche Alternativen wie radiologische Untersuchungen (Bariumkontrastmittelstudien) und nicht-invasive Tests (z.B. Atemtests für Helicobacter pylori), die jedoch nicht so genau sind.",
            third:
              "Eine Alternative wäre eine Röntgenuntersuchung mit Kontrastmittel, die jedoch weniger genau ist.",
            fourth:
              "Es gibt auch Atemtests für bestimmte Infektionen, aber sie liefern nicht so detaillierte Informationen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erwähnen Sie mögliche Kontraindikationen, wie schwere Herz- oder Lungenerkrankungen, die das Risiko der Untersuchung erhöhen könnten.",
            third:
              "Wenn Sie schwere Herzprobleme haben, könnte die Untersuchung riskanter sein.",
            fourth:
              "Bei schweren Lungenerkrankungen kann es ebenfalls zu erhöhten Risiken kommen.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie, dass mögliche Ergebnisse der Gastroskopie entzündliche Veränderungen, Geschwüre, Tumore oder andere pathologische Befunde umfassen können.",
            third:
              "Wir könnten feststellen, dass Sie eine Magenentzündung oder ein Magengeschwür haben.",
            fourth:
              "Es ist möglich, dass wir Anzeichen für einen Tumor finden, der weiter untersucht werden muss.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie, wie wichtig es ist, dass der Patient das Verfahren und die damit verbundenen Risiken und Vorteile versteht und sein Einverständnis gibt.",
            third:
              "Ihr schriftliches Einverständnis ist wichtig, damit wir sicher sind, dass Sie die Untersuchung und Risiken verstehen.",
            fourth:
              "Ohne Ihre Einwilligung können wir die Untersuchung nicht durchführen.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erläutern Sie, dass das Einverständnis schriftlich eingeholt wird, nachdem der Patient umfassend über das Verfahren und die möglichen Risiken aufgeklärt wurde.",
            third:
              "Wir werden Sie bitten, ein Formular zu unterschreiben, das Ihr Einverständnis dokumentiert.",
            fourth:
              "Vor der Untersuchung erklären wir Ihnen alles im Detail und beantworten Ihre Fragen, bevor Sie das Formular unterschreiben.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie dem Patienten abschließende Hinweise zur Nachsorge, z.B. dass er sich nach der Sedierung ausruhen sollte und keine schweren Maschinen bedienen darf.",
            third:
              "Nach der Untersuchung sollten Sie sich ausruhen und für den Rest des Tages keine Maschinen bedienen.",
            fourth:
              "Stellen Sie sicher, dass jemand Sie nach Hause begleitet, da Sie möglicherweise noch benommen von der Sedierung sind.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, dass die Ergebnisse der Gastroskopie in einem Nachgespräch erläutert werden und bei Bedarf weitere Behandlungsschritte besprochen werden.",
            third:
              "Die Ergebnisse besprechen wir in einem Nachgespräch, um die nächsten Schritte zu planen.",
            fourth:
              "Die Ergebnisse besprechen wir in einem Nachgespräch, um die nächsten Schritte zu planen.",
          },
        ],
      },
      // 3tab 137
      {
        id: 137,
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
              "Erläutern Sie, dass es sich bei der Gastroskopie um eine endoskopische Untersuchung des oberen Gastrointestinaltrakts handelt, bei der ein flexibles Endoskop zur direkten Visualisierung und Biopsieentnahme eingesetzt wird.",
            third:
              "Die Gastroskopie ist eine Methode, bei der ein flexibles Endoskop durch den Mund in den Magen und den Zwölffingerdarm eingeführt wird, um die Schleimhaut zu betrachten und bei Bedarf Biopsien zu entnehmen.",
            fourth:
              "Mit der Gastroskopie können wir direkt in den oberen Verdauungstrakt sehen und diagnostische oder therapeutische Maßnahmen ergreifen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erklären Sie, dass die Gastroskopie zur Diagnose und Beurteilung von Erkrankungen wie Gastritis, Ulzera, Tumoren, Blutungen und Refluxkrankheit verwendet wird.",
            third:
              "Mit der Gastroskopie können wir Erkrankungen wie Magengeschwüre, Gastritis und Anzeichen von Reflux diagnostizieren.",
            fourth:
              "Diese Untersuchung ist besonders nützlich, um Blutungsquellen zu identifizieren und Tumore im oberen Gastrointestinaltrakt zu erkennen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Besprechen Sie die potenziellen Befunde, einschließlich normaler Schleimhaut, entzündlicher Veränderungen, Geschwüre, Tumoren, Polypen und anderer pathologischer Veränderungen.",
            third:
              "Bei der letzten Gastroskopie fanden wir eine erosive Gastritis und ein kleines Magengeschwür im Antrum.",
            fourth:
              "Es wurden multiple Polypen im Magen entdeckt, die biopsiert wurden, um eine maligne Transformation auszuschließen.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie die Indikationen für eine Gastroskopie, wie z.B. unklare Oberbauchschmerzen, Dysphagie, anhaltendes Erbrechen, Gewichtsverlust, Verdacht auf Blutungen oder Tumore.",
            third:
              "Eine Gastroskopie ist indiziert bei Patienten mit anhaltenden Oberbauchschmerzen und Verdacht auf eine Ulkuskrankheit.",
            fourth:
              "Bei anhaltendem Erbrechen und unklarem Gewichtsverlust ist eine Gastroskopie zur Abklärung der Ursache notwendig.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie mögliche Kontraindikationen, wie schwere kardiopulmonale Erkrankungen, unkontrollierte Blutgerinnungsstörungen und instabile Allgemeinzustände.",
            third:
              "Bei Patienten mit schweren Herz-Kreislauf-Erkrankungen besteht ein erhöhtes Risiko, weshalb die Indikation streng gestellt werden muss.",
            fourth:
              "Patienten mit unkontrollierter Blutgerinnungsstörung sind aufgrund des hohen Blutungsrisikos für eine Gastroskopie nicht geeignet.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren Sie mögliche Differenzialdiagnosen, die bei den Symptomen des Patienten in Betracht gezogen werden sollten, wie z.B. Refluxösophagitis, peptische Ulzera oder funktionelle Dyspepsie.",
            third:
              "Zu den Differenzialdiagnosen gehören neben der Refluxösophagitis auch peptische Ulzera und eine funktionelle Dyspepsie.",
            fourth:
              "Es ist wichtig, auch an eine Gallenkolik oder Pankreatitis zu denken, wenn wir die Symptome des Patienten bewerten.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Besprechen Sie, wie die Ergebnisse der Gastroskopie in die Erstellung eines individuellen Behandlungsplans einfließen, einschließlich medikamentöser und chirurgischer Optionen sowie Nachsorge.",
            third:
              "Bei Nachweis eines Magengeschwürs wird eine Therapie mit Protonenpumpenhemmern eingeleitet und eine erneute Kontrolle nach 6 Wochen geplant.",
            fourth:
              "Falls ein Tumor gefunden wird, wird der Patient an die Onkologie überwiesen und ein interdisziplinäres Behandlungskonzept erstellt.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Erörtern Sie die Notwendigkeit der Zusammenarbeit mit anderen Fachbereichen, wie z.B. Pathologie (für Biopsieergebnisse), Chirurgie (bei operativen Eingriffen) und Onkologie (bei Tumorbefunden).",
            third:
              "Bei auffälligen Befunden aus der Biopsie arbeiten wir eng mit der Pathologie zusammen, um die Diagnose zu bestätigen.",
            fourth:
              "Die enge Zusammenarbeit mit der Chirurgie ist essenziell, wenn operative Maßnahmen nach der Diagnosestellung erforderlich sind.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Beschreiben Sie die Maßnahmen zur Qualitätssicherung bei der Durchführung und Auswertung der Gastroskopie, einschließlich Schulung des Personals und regelmäßiger Überprüfung der Endoskopietechniken.",
            third:
              "Wir führen regelmäßige Schulungen für das Endoskopiepersonal durch, um sicherzustellen, dass die Verfahren nach den neuesten Standards durchgeführt werden.",
            fourth:
              "Die Qualität der Gastroskopien wird durch eine kontinuierliche Überprüfung und Auditierung der Bildqualität und Dokumentation sichergestellt.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Betonen Sie die Wichtigkeit einer detaillierten Dokumentation der Untersuchungsergebnisse und der Patientenaufklärung sowie die Planung der weiteren diagnostischen und therapeutischen Schritte.",
            third:
              "Jeder Befund wird detailliert dokumentiert und dem Patienten sowie dem weiterbehandelnden Arzt schriftlich mitgeteilt.",
            fourth:
              "Nach der Gastroskopie planen wir ein Follow-up, um sicherzustellen, dass die empfohlene Therapie eingehalten wird und der Heilungsverlauf überwacht wird.",
          },
        ],
      },
      // 4tab 138
      {
        id: 138,
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
              "50-jähriger Patient klagt über starke Oberbauchschmerzen und Übelkeit. Anamnese mit häufigem Sodbrennen und Rauchen.",
            fourth:
              "40-jährige Patientin berichtet von anhaltendem Völlegefühl und Übelkeit. Keine signifikante medizinische Vorgeschichte.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Gastroskopie zeigt eine normale, intakte Magenschleimhaut ohne Anzeichen von Pathologien.",
            third:
              "Gastroskopie zeigt ein 1 cm großes Ulkus im Antrum des Magens mit entzündlichen Rändern.",
            fourth:
              "Gastroskopie zeigt diffuse Rötung und Schwellung der Magenschleimhaut ohne Ulzerationen.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; die Gastroskopie unterstützt den Ausschluss gastrointestinaler Erkrankungen.",
            third:
              "Der Befund deutet auf ein peptisches Ulkus hin. Die Lokalisation und das Erscheinungsbild passen zu den Symptomen des Patienten.",
            fourth:
              "Der Befund ist typisch für eine Gastritis. Die diffuse Rötung korreliert mit den klinischen Symptomen.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Einleitung einer Protonenpumpenhemmer-Therapie und Überwachung auf Heilung.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer antientzündlichen Diät sowie medikamentöser Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Magens. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines peptischen Ulkus basierend auf Gastroskopie-Befunden und klinischem Bild.",
            fourth:
              "Diagnose einer Gastritis aufgrund der Gastroskopie-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Magenschleimhaut ohne Auffälligkeiten in allen Bereichen.",
            third:
              "Gastroskopie zeigt ein deutlich abgegrenztes, entzündliches Ulkus im Antrum des Magens.",
            fourth:
              "Gastroskopie zeigt eine diffuse Rötung und Schwellung der Magenschleimhaut.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen eine gesunde Ernährung und regelmäßige Vorsorgeuntersuchungen.",
            third:
              "Wir empfehlen die Einleitung einer Therapie mit Protonenpumpenhemmern und eine Kontrolle nach 4-6 Wochen zur Beurteilung der Heilung.",
            fourth:
              "Wir empfehlen eine antientzündliche Diät, H2-Rezeptorantagonisten und gegebenenfalls eine Nachuntersuchung.",
          },
        ],
      },
      // 5tab 139
      {
        id: 139,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Arthroskopie-Gerät ist ein hochentwickeltes medizinisches Instrument zur Untersuchung und Behandlung von Gelenken. Es ermöglicht minimalinvasive Eingriffe und bietet direkte visuelle Inspektionen der Gelenkstrukturen. Hier sind die wesentlichen Komponenten und Funktionen eines Arthroskopie-Geräts:",
        text_list: [
          {
            bold: "Endoskop :",
            other:
              "Das Endoskop ist ein flexibler, schlauchförmiger Teil des Gastroskopie-Geräts, das durch den Mund des Patienten in den Magen und den Zwölffingerdarm eingeführt wird. Es enthält eine Lichtquelle und eine Kamera, die Bilder der inneren Schleimhaut auf einen Monitor überträgt.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Die Lichtquelle, oft eine LED oder Halogenlampe, befindet sich am Ende des Endoskops und beleuchtet die inneren Organe, um eine klare Sicht zu ermöglichen.",
          },
          {
            bold: "Kamera :",
            other:
              "Die Kamera, die sich ebenfalls am Ende des Endoskops befindet, überträgt Echtzeitbilder der inneren Schleimhaut auf einen Monitor, sodass der Arzt die Strukturen genau untersuchen kann.",
          },
          {
            bold: "Spül- und Absaugkanäle :",
            other:
              "Das Endoskop enthält Kanäle, durch die Wasser oder Luft eingeleitet werden können, um die Sicht zu verbessern oder Flüssigkeiten abzusaugen. Dies hilft, eine klare Sicht auf die Schleimhaut zu gewährleisten.",
          },
          {
            bold: "Biopsiekanal :",
            other:
              "Über diesen Kanal können Instrumente wie Zangen oder Schlingen eingeführt werden, um Gewebeproben (Biopsien) zu entnehmen oder therapeutische Maßnahmen durchzuführen.",
          },
          {
            bold: "Monitore :",
            other:
              "Die Monitore zeigen die vom Endoskop übertragenden Bilder in Echtzeit an, sodass der Arzt die Untersuchung visuell verfolgen und dokumentieren kann.",
          },
          {
            bold: "Luft-/Wasserpumpe :",
            other:
              "Diese Pumpe liefert Luft oder Wasser durch das Endoskop, um den Magen zu dehnen oder zu spülen und somit eine bessere Sicht und eine genauere Untersuchung zu ermöglichen.",
          },
          {
            bold: "Saugvorrichtung :",
            other:
              "Die Saugvorrichtung entfernt Flüssigkeiten und Luft aus dem Magen, um die Sicht zu verbessern und den Komfort des Patienten zu erhöhen.",
          },
          {
            bold: "Prozessoreinheit :",
            other:
              "Diese Einheit verarbeitet die von der Kamera aufgenommenen Bilder und stellt sie in hoher Auflösung auf den Monitoren dar. Sie kann auch Bilder speichern und analysieren.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Über die Steuerkonsole kann der Arzt die Funktionen des Endoskops steuern, einschließlich der Beleuchtung, der Bildaufnahme und der Bedienung der Spül- und Absaugvorrichtungen.",
          },
          {
            bold: "Patientenlagerungssystem :",
            other:
              "Ein speziell entworfener Tisch oder Liege, auf dem der Patient während der Untersuchung bequem und stabil liegt. Dies ermöglicht eine präzise und sichere Einführung des Endoskops.",
          },
          {
            bold: "Desinfektions- und Aufbereitungssystem :",
            other:
              "Nach jeder Untersuchung wird das Endoskop gründlich gereinigt und desinfiziert, um eine Infektionsübertragung zu verhindern. Dies umfasst spezielle Wasch- und Sterilisationsmaschinen.",
          },
          {
            bold: "Kommunikationssystem :",
            other:
              "Ein Sprachkommunikationssystem ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu kommunizieren und Anweisungen zu geben.",
          },
          {
            bold: "Bilddokumentationssystem :",
            other:
              "Dieses System speichert und dokumentiert die während der Gastroskopie aufgenommenen Bilder und Videos zur späteren Analyse und zur Erstellung von Berichten.",
          },
        ],
      },
      // 6tab 140
      {
        id: 140,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für das Verständnis und die Kommunikation im Bereich der Langzeit-EKG-Diagnostik und werden häufig in Fachgesprächen und Prüfungen verwendet.",
        text_list: [
          {
            bold: "Gastroskopie :",
            other:
              "Endoskopische Untersuchung des oberen Gastrointestinaltrakts (Speiseröhre, Magen, Zwölffingerdarm).",
          },
          {
            bold: "Endoskop :",
            other:
              "Flexibles, schlauchförmiges Instrument mit Kamera und Lichtquelle zur Untersuchung des Verdauungstrakts.",
          },
          {
            bold: "Biopsie :",
            other: "Entnahme von Gewebeproben zur histologischen Untersuchung.",
          },
          {
            bold: "Antrum :",
            other:
              "Der untere Teil des Magens, der vor dem Magenausgang liegt.",
          },
          {
            bold: "Gastritis :",
            other: "Entzündung der Magenschleimhaut.",
          },
          {
            bold: "Ulzera :",
            other: "Geschwüre, meist im Magen oder Zwölffingerdarm.",
          },
          {
            bold: "Refluxösophagitis :",
            other: "Entzündung der Speiseröhre durch Rückfluss von Magensäure.",
          },
          {
            bold: "Polypen :",
            other:
              "Gutartige Wucherungen der Schleimhaut, die bei der Gastroskopie entdeckt werden können.",
          },
          {
            bold: "Sedierung :",
            other:
              "Verabreichung von Beruhigungsmitteln zur Entspannung des Patienten während der Untersuchung.",
          },
          {
            bold: "Perforation :",
            other:
              "Durchbruch der Magen- oder Darmwand, eine mögliche Komplikation.",
          },
          {
            bold: "Blutungen :",
            other:
              "Potenzielle Komplikation oder Diagnose, die während der Gastroskopie festgestellt werden kann.",
          },
          {
            bold: "H. pylori :",
            other:
              "Helicobacter pylori, ein Bakterium, das Magengeschwüre verursachen kann.",
          },
          {
            bold: "Dyspepsie :",
            other:
              "Oberbauchbeschwerden, die oft der Grund für eine Gastroskopie sind.",
          },
          {
            bold: "Dysphagie :",
            other:
              "Schluckbeschwerden, die eine Gastroskopie indizieren können.",
          },
          {
            bold: "Endoskopische Resektion :",
            other:
              "Entfernung von Polypen oder anderen Wucherungen während der Gastroskopie.",
          },
          {
            bold: "Röntgenkontrastmittel :",
            other:
              "Flüssigkeit, die vor der Untersuchung getrunken wird, um die Sichtbarkeit im Röntgenbild zu verbessern.",
          },
          {
            bold: "Nüchternheit :",
            other:
              "Verzicht auf Essen und Trinken vor der Untersuchung, um genaue Ergebnisse zu gewährleisten.",
          },
          {
            bold: "Oberbauchschmerzen :",
            other:
              "Häufiges Symptom, das eine Gastroskopie erforderlich machen kann.",
          },
          {
            bold: "Zöliakie :",
            other:
              "Glutenunverträglichkeit, die durch eine Biopsie der Dünndarmschleimhaut diagnostiziert werden kann.",
          },
          {
            bold: "Varizen :",
            other:
              "Erweiterte Venen, insbesondere in der Speiseröhre, die bei einer Gastroskopie entdeckt werden können.",
          },
          {
            bold: "Maligne :",
            other: "Bösartig, im Kontext von Tumoren oder Geschwüren.",
          },
          {
            bold: "Benigne :",
            other: "Gutartig, im Kontext von Tumoren oder Polypen.",
          },
          {
            bold: "Oesophagogastroduodenoskopie (ÖGD) :",
            other:
              "Vollständiger medizinischer Begriff für die Gastroskopie, der Speiseröhre, Magen und Zwölffingerdarm umfasst.",
          },
          {
            bold: "Therapeutische Gastroskopie :",
            other:
              "Gastroskopie, bei der nicht nur diagnostiziert, sondern auch behandelt wird, z.B. Blutstillung oder Polypenentfernung.",
          },
          {
            bold: "Periorale Anästhesie :",
            other:
              "Lokalanästhesie im Mund- und Rachenraum zur Minderung des Würgereizes.",
          },
          {
            bold: "Mukosale Veränderungen :",
            other:
              "Veränderungen der Schleimhaut, die auf entzündliche oder neoplastische Prozesse hinweisen können.",
          },
          {
            bold: "Duodenum :",
            other:
              "Der erste Abschnitt des Dünndarms, der ebenfalls bei einer Gastroskopie untersucht wird.",
          },
          {
            bold: "Protonenpumpenhemmer :",
            other:
              "Medikament zur Reduzierung der Magensäureproduktion, oft nach einer Gastroskopie verschrieben.",
          },
          {
            bold: "Endoskopische Ultraschalluntersuchung (EUS) :",
            other:
              "Kombinierte Methode von Endoskopie und Ultraschall zur detaillierten Beurteilung der Verdauungsorgane.",
          },
        ],
      },
      // 7tab 141
      {
        id: 141,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 142
      {
        id: 142,
        title: "PDF",
        link: "https://drive.google.com/file/d/13mCwYgkvZVtOCtP4G9wHAP-nstNKSYZU/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 16
  // start of parent tab 17 Endoskopische retrograde Cholangiopankreatikographie (ERCP)
  {
    id: 17,
    title: "Endoskopische retrograde Cholangiopankreatikographie (ERCP)",
    checked: false,
    childTabs: [
      // 1tab 143
      {
        id: 143,
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
      // 2tab 144
      {
        id: 144,
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
      // 3tab 145
      {
        id: 145,
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
        id: 146,
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
        id: 147,
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
      // 6tab 148
      {
        id: 148,
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
        id: 149,
        title: "Links",
        text: "",
        text_list: [
          {
            bold: "Stiftung Gesundheitswissen :",
            other:
              "Diese Seite bietet umfassende Informationen über die Funktionsweise, den Ablauf und die verschiedenen Formen der Ultraschalluntersuchung, einschließlich der Nutzung von Kontrastmitteln und möglichen Risiken. [Links] https://www.stiftung-gesundheitswissen.de",
          },
          {
            bold: "NetDoktor :",
            other:
              "Auf NetDoktor kannst du mehr über die Gründe für eine Ultraschalluntersuchung, deren Ablauf und die damit verbundenen Risiken erfahren. Es werden auch spezielle Ultraschallverfahren wie Doppler- und Farbdoppler-Ultraschall beschrieben. [Links] https://www.netdoktor.de",
          },
          {
            bold: "Gesundheitsinformation.de :",
            other:
              "Diese Seite erklärt, wie eine Ultraschalluntersuchung funktioniert und welche Körperbereiche damit untersucht werden können. Es gibt auch Informationen zur Anwendung in der Schwangerschaftsvorsorge und zur Diagnose verschiedener Erkrankungen. [Links] https://www.gesundheitsinformation.de",
          },
          {
            bold: "BARMER :",
            other:
              "Die BARMER Webseite bietet eine gute Übersicht über die Funktionsweise, den Einsatz und die Grenzen von Ultraschall. Es wird auch die Anwendung in verschiedenen medizinischen Bereichen wie Herz- und Gefäßdiagnostik sowie Schwangerschaftsvorsorge erläutert. [Links] https://www.barmer.de",
          },
          {
            bold: "PraktischArzt :",
            other:
              "Hier findest du Informationen zu verschiedenen Arten von Ultraschalluntersuchungen wie der Mammasonografie und Dopplersonografie. Der Ablauf einer typischen Sonographie wird ebenfalls detailliert beschrieben. [Links] https://www.praktischarzt.de",
          },
          {
            bold: "Krebsinformationsdienst :",
            other:
              "Diese Seite bietet häufig gestellte Fragen zum Thema Ultraschall in der Krebsmedizin, einschließlich Informationen zur Technik, Anwendung und Vorbereitung auf die Untersuchung. [Links] https://www.krebsinformationsdienst.de",
          },
          {
            bold: "DokCheck :",
            other:
              "Diese Seite bietet detaillierte Informationen zu verschiedenen medizinischen Themen, einschließlich Ultraschalluntersuchungen. Hier findest du Erklärungen zur Funktionsweise, den Einsatzbereichen und den verschiedenen Arten von Ultraschall. [Links] https://www.doccheck.com)",
          },
          {
            bold: "AMBOSS :",
            other:
              "AMBOSS ist eine umfassende Ressource für medizinisches Wissen. Hier findest du detaillierte Informationen über Ultraschall, einschließlich der physikalischen Grundlagen, der klinischen Anwendungen und der technischen Aspekte. [Links] https://www.amboss.com/de)",
          },
        ],
      },
      // tab 150
      {
        id: 150,
        title: "PDF",
        link: "https://drive.google.com/file/d/1PqRkOW_XHA6f1_mxulrp3YX1hGNTV4uv/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 17
  // start of parent tab 18 Koloskopie
  {
    id: 18,
    title: "Koloskopie  ",
    checked: false,
    childTabs: [
      // 1tab 151
      {
        id: 151,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Hauptziele der Gastroskopie sind die Diagnose und Beurteilung von Erkrankungen des oberen Verdauungstrakts, wie z.B. Geschwüre, Entzündungen, Blutungen, Tumore und andere pathologische Veränderungen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Gastroskopie ist von entscheidender Bedeutung in der Gastroenterologie, da sie eine direkte Visualisierung und Biopsieentnahme ermöglicht. Sie wird häufig bei Patienten mit Symptomen wie Oberbauchschmerzen, Sodbrennen, Übelkeit, Erbrechen und unklaren Blutungen eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Gastroskopie basiert auf der direkten visuellen Inspektion der Schleimhaut des oberen Gastrointestinaltrakts mithilfe eines flexiblen Endoskops. Das Endoskop ist mit einer Lichtquelle und einer Kamera ausgestattet, die Bilder in Echtzeit auf einen Monitor überträgt.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Das Endoskop wird vorsichtig über den Mund und die Speiseröhre in den Magen und den Zwölffingerdarm eingeführt. Der Patient liegt dabei in der Regel in Seitenlage. Während der Untersuchung können Luft und Wasser über das Endoskop eingebracht werden, um die Sicht zu verbessern und Gewebeproben zu entnehmen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Interpretation der Gastroskopieergebnisse erfolgt durch die visuelle Beurteilung der Schleimhaut. Auffällige Bereiche werden genau dokumentiert, und gegebenenfalls werden Gewebeproben zur histologischen Untersuchung entnommen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde können entzündliche Veränderungen (Gastritis), Ulzera (Magengeschwüre), Tumore, Varizen, Polypen und Anzeichen von Refluxerkrankungen umfassen.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Gastroskopie ermöglicht eine direkte und detaillierte Visualisierung des oberen Gastrointestinaltrakts, eine präzise Diagnosestellung und die Möglichkeit zur sofortigen therapeutischen Intervention (z.B. Blutstillung).",
              },
              {
                bold_text: "Nachteile:",
                text: "Das Verfahren kann für den Patienten unangenehm sein und erfordert eine Sedierung. Es besteht ein geringes Risiko für Komplikationen wie Blutungen oder Perforationen.",
              },
              {
                bold_text: "Risiken:",
                text: "Mögliche Risiken umfassen Infektionen, Blutungen, Perforationen und Nebenwirkungen der Sedierung. Diese Risiken sind jedoch selten und treten bei erfahrenen Anwendern nur in Ausnahmefällen auf.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Gastroskopie spielt eine zentrale Rolle in der Diagnose und Behandlung von Erkrankungen des oberen Verdauungstrakts. Sie ermöglicht nicht nur die Diagnose, sondern auch therapeutische Maßnahmen wie die Entfernung von Polypen oder die Blutstillung.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch die Gastroskopie können rasch und gezielt Diagnosen gestellt und Behandlungsstrategien entwickelt werden. Dies verbessert das Patientenmanagement erheblich und trägt zur schnellen Genesung bei.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen der Gastroskopie zählen die radiologische Diagnostik (z.B. Bariumkontrastmittelstudien) und nicht-invasive Tests (z.B. Atemtests für Helicobacter pylori). Diese Alternativen bieten jedoch nicht die gleiche diagnostische Genauigkeit und therapeutische Möglichkeiten wie die Gastroskopie.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Die jüngste Forschung konzentriert sich auf die Verbesserung der Bildgebungstechnologien und die Entwicklung neuer endoskopischer Techniken, wie die optische Kohärenztomographie und die konfokale Laserendoskopie.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten minimalinvasivere Techniken und verbesserte diagnostische Genauigkeit bieten. Auch die Integration von Künstlicher Intelligenz zur automatischen Erkennung von Pathologien wird erforscht.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Gastroskopie ist ein unverzichtbares Verfahren in der Gastroenterologie, das eine direkte Visualisierung und Intervention im oberen Gastrointestinaltrakt ermöglicht. Es bietet zahlreiche diagnostische und therapeutische Vorteile bei geringen Risiken.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Die Gastroskopie hat eine herausragende Bedeutung für die frühzeitige Diagnose und Behandlung von Erkrankungen des oberen Verdauungstrakts und ist ein wesentliches Instrument für das effektive Patientenmanagement in der modernen Medizin.",
              },
            ],
          },
        ],
      },
      // 2tab 152
      {
        id: 152,
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
              "Erklären Sie dem Patienten, dass die Koloskopie dazu dient, den Dickdarm auf Auffälligkeiten wie Polypen, Tumore oder Entzündungen zu untersuchen. Das Hauptziel ist die Früherkennung und Prävention von Darmkrebs.",
            third:
              "„Wir führen diese Untersuchung durch, um sicherzustellen, dass sich keine krankhaften Veränderungen in Ihrem Darm befinden.“",
            fourth:
              "„Das Ziel der Koloskopie ist es, mögliche Polypen oder Tumore frühzeitig zu erkennen und gegebenenfalls zu entfernen.“",
          },
          {
            first: "Ablauf",
            second:
              "Informieren Sie den Patienten über den Ablauf der Koloskopie. Beschreiben Sie, wie das Endoskop eingeführt wird und der Darm visuell untersucht wird. Erklären Sie, dass während der Untersuchung auch Gewebeproben entnommen.",
            third:
              "„Das Endoskop wird vorsichtig durch den Anus in den Darm eingeführt und langsam vorgeschoben, während wir den Darm auf einem Monitor betrachten.“",
            fourth:
              "„Während der Untersuchung können wir kleine Gewebeproben entnehmen oder Polypen entfernen, falls wir welche finden.“",
          },
          {
            first: "Vorbereitung",
            second:
              "Erklären Sie, dass der Patient eine spezielle Diät einhalten und Abführmittel einnehmen muss, um den Darm zu reinigen. Dies ist notwendig, um eine klare Sicht während der Untersuchung zu gewährleisten.",
            third:
              "„Bitte halten Sie sich zwei Tage vor der Untersuchung an eine spezielle Diät und nehmen Sie die Abführmittel wie verschrieben ein.“",
            fourth:
              "„Es ist wichtig, dass Ihr Darm vollständig gereinigt ist, damit wir eine klare Sicht haben und keine Veränderungen übersehen.“",
          },
          {
            first: "Risiken",
            second:
              "Erwähnen Sie mögliche Risiken wie Blutungen, Perforationen des Darms, Infektionen und Reaktionen auf die Sedierung. Stellen Sie klar, dass diese Komplikationen selten sind.",
            third:
              "„Obwohl die Koloskopie im Allgemeinen sicher ist, besteht ein geringes Risiko für Blutungen oder Darmverletzungen.“",
            fourth:
              "„Seltene Komplikationen können Infektionen oder Reaktionen auf die Beruhigungsmittel sein, die wir Ihnen geben.“",
          },
          {
            first: "Vorteile",
            second:
              "Betonen Sie die Vorteile der Koloskopie, wie die genaue Diagnose und die Möglichkeit, Polypen direkt zu entfernen und somit das Risiko von Darmkrebs zu reduzieren.",
            third:
              "„Ein großer Vorteil der Koloskopie ist, dass wir Polypen direkt entfernen können, bevor sie sich zu Krebs entwickeln.“",
            fourth:
              "„Die Koloskopie ermöglicht es uns, sehr präzise Diagnosen zu stellen und sofortige Maßnahmen zu ergreifen.“",
          },
          {
            first: "Alternativen",
            second:
              "Nennen Sie Alternativen zur Koloskopie wie die virtuelle Koloskopie (CT/MRT), den FIT (fäkaler Immunochemischer Test) und die Sigmoidoskopie.",
            third:
              "„Alternativ zur Koloskopie können wir eine virtuelle Koloskopie mit CT oder MRT durchführen.“",
            fourth:
              "„Ein weiterer Ansatz wäre der fäkale Immunochemische Test, der Blut im Stuhl nachweist, jedoch weniger detailliert ist.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären Sie, welche Patienten möglicherweise keine Koloskopie erhalten sollten, z.B. bei schweren Herzerkrankungen, unkontrollierter Blutgerinnungsstörung oder akuter Divertikulitis.",
            third:
              "„Patienten mit schweren Herzerkrankungen oder unkontrollierten Blutgerinnungsstörungen sollten keine Koloskopie durchführen lassen.“",
            fourth:
              "„Bei einer akuten Divertikulitis ist das Risiko zu hoch, sodass wir die Koloskopie verschieben müssen.“",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Informieren Sie den Patienten über die möglichen Ergebnisse der Koloskopie, wie Polypen, Entzündung oder Tumoren, und die Bedeutung dieser Befunde.",
            third:
              "„Sollten wir Polypen finden, werden wir diese entfernen und zur weiteren Untersuchung ins Labor schicken.“",
            fourth:
              "„Falls wir entzündliche Veränderungen feststellen, könnte dies auf eine chronische Darmerkrankung hinweisen.“",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie, wie wichtig das Einverständnis des Patienten für die Durchführung der Koloskopie ist und dass alle Fragen und Bedenken im Vorfeld geklärt werden sollten.",
            third:
              "„Ihr Einverständnis ist entscheidend. Bitte stellen Sie sicher, dass Sie alle Ihre Fragen vor der Untersuchung stellen.“",
            fourth:
              "„Es ist wichtig, dass Sie alle Aspekte der Untersuchung verstehen und Ihre Zustimmung geben, bevor wir beginnen.“",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erklären Sie, dass vor der Untersuchung ein Einverständnis eingeholt wird, nachdem der Patient umfassend informiert wurde.",
            third:
              "„Bevor wir beginnen, werden Sie ein Formular unterschreiben, das Ihr Einverständnis zur Untersuchung bestätigt.“",
            fourth:
              "„Das schriftliche Einverständnis stellt sicher, dass Sie über alle Details und möglichen Risiken informiert sind.“",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie dem Patienten abschließende Hinweise zur Vermeidung von Komplikationen nach der Koloskopie und erklären Sie, was nach der Untersuchung zu erwarten ist.",
            third:
              "„Nach der Untersuchung sollten Sie sich ausruhen und viel trinken. Leichte Bauchkrämpfe können normal sein.“",
            fourth:
              "„Vermeiden Sie körperliche Anstrengungen für die nächsten 24 Stunden und melden Sie sich bei uns, wenn Sie starke Schmerzen oder Blutungen bemerken.“",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Informieren Sie den Patienten darüber, wie und wann die Ergebnisse der Koloskopie mit ihm besprochen werden und welche weiteren Schritte möglicherweise erforderlich sind.",
            third:
              "„Die Ergebnisse der Koloskopie werden in der Regel innerhalb weniger Tage vorliegen, und wir werden einen Termin zur Besprechung vereinbaren.“",
            fourth:
              "„Wenn Biopsien entnommen wurden, kann es etwas länger dauern, aber wir informieren Sie sofort, wenn alle Ergebnisse vorliegen.“",
          },
        ],
      },
      // 3tab 153
      {
        id: 153,
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
              "Erläutern Sie, dass die Koloskopie eine endoskopische Untersuchung des Dickdarms ist, bei der ein flexibles Endoskop verwendet wird, um den Darm auf Auffälligkeiten zu untersuchen und Eingriffe vorzunehmen.",
            third:
              "„Die Koloskopie ist ein Verfahren, bei dem wir ein flexibles Endoskop durch den Anus einführen, um den gesamten Dickdarm zu untersuchen.“",
            fourth:
              "„Bei der Koloskopie können wir nicht nur diagnostisch tätig werden, sondern auch therapeutische Maßnahmen wie die Entfernung von Polypen durchführen.“",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erklären Sie, dass die Koloskopie zur Untersuchung von Polypen, Tumoren, entzündlichen Veränderungen und anderen Pathologien im Dickdarm dient. Sie kann auch zur Entnahme von Biopsien und Entfernung von Polypen verwendet werden.",
            third:
              "„Mit der Koloskopie können wir Polypen, Tumore, Entzündungen und andere pathologische Veränderungen im Dickdarm feststellen.“",
            fourth:
              "„Die Untersuchung ermöglicht es uns, Gewebeproben für die Histologie zu entnehmen und gegebenenfalls Polypen direkt zu entfernen.“",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Beschreiben Sie die möglichen Ergebnisse der Koloskopie, einschließlich normaler Befunde, gutartiger Polypen, adenomatöser Polypen, entzündlicher Veränderungen, Divertikel und bösartiger Tumoren.",
            third:
              "„Typische Ergebnisse können gutartige Polypen, adenomatöse Polypen, entzündliche Veränderungen oder bösartige Tumore sein.“",
            fourth:
              "„Wir können auch normale Befunde oder Divertikel feststellen, die keine unmittelbare Behandlung erfordern.“",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie die Indikationen für eine Koloskopie, wie Darmkrebsvorsorge, Abklärung von Blut im Stuhl, chronische Bauchschmerzen, unklare Anämie, Veränderungen der Stuhlgewohnheiten.",
            third:
              "„Indikationen für eine Koloskopie sind unter anderem die Darmkrebsvorsorge, Blut im Stuhl und chronische Bauchschmerzen.“",
            fourth:
              "„Wir führen Koloskopien auch bei Patienten mit unklarer Anämie oder zur Überwachung chronisch entzündlicher Darmerkrankungen durch.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie die Kontraindikationen für eine Koloskopie, wie schwere kardiopulmonale Erkrankungen, unkontrollierte Blutgerinnungsstörungen, akute Divertikulitis und Peritonitis.",
            third:
              "„Kontraindikationen umfassen schwere kardiopulmonale Erkrankungen und unkontrollierte Blutgerinnungsstörungen.“",
            fourth:
              "„Bei akuter Divertikulitis oder Peritonitis ist die Koloskopie kontraindiziert, um Komplikationen zu vermeiden.“",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Besprechen Sie die Differenzialdiagnosen, die bei auffälligen Befunden in Betracht gezogen werden müssen, wie Colitis ulcerosa, Morbus Crohn, kolorektale Karzinome, infektiöse Kolitis und ischämische Kolitis.",
            third:
              "„Zu den Differenzialdiagnosen bei auffälligen Befunden gehören Colitis ulcerosa, Morbus Crohn und kolorektale Karzinome.“",
            fourth:
              "„Wir müssen auch infektiöse Kolitis und ischämische Kolitis in Betracht ziehen, wenn wir entzündliche Veränderungen sehen.“",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklären Sie, wie die Ergebnisse der Koloskopie in die Erstellung eines Behandlungsplans einfließen, einschließlich Überwachung, Therapie, endoskopischer Entfernung von Polypen oder chirurgischer Eingriffe bei malignen Befunden.",
            third:
              "„Abhängig von den Ergebnissen können wir Überwachungsstrategien, medikamentöse Therapien oder chirurgische Eingriffe planen.“",
            fourth:
              "„Bei malignen Befunden wird in der Regel ein interdisziplinäres Team zur Planung der weiteren Therapie hinzugezogen.“",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit anderen Fachbereichen wie Chirurgie, Onkologie, Pathologie und Radiologie bei der Diagnose und Behandlung von Darmkrankheiten.",
            third:
              "„Die Zusammenarbeit mit Chirurgie, Onkologie und Pathologie ist entscheidend für die umfassende Behandlung von Darmkrebs.“",
            fourth:
              "„Wir arbeiten eng mit der Radiologie zusammen, um präzise Bildgebungen zu erhalten, die unsere Diagnose und Therapieplanung unterstützen.“",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erläutern Sie Maßnahmen zur Qualitätssicherung in der Koloskopie, wie regelmäßige Schulungen des Personals, Einhaltung von Hygienestandards, Dokumentation von Komplikationen und regelmäßige Überprüfung der Geräte.",
            third:
              "„Qualitätssicherung umfasst regelmäßige Schulungen und die Einhaltung strikter Hygienestandards während der Koloskopie.“",
            fourth:
              "„Wir dokumentieren alle Komplikationen und überprüfen unsere Geräte regelmäßig, um die Patientensicherheit zu gewährleisten.“",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Beschreiben Sie die Notwendigkeit einer gründlichen Dokumentation der Untersuchungsergebnisse, Nachverfolgung der Patientenbefunde und Planung von Kontrolluntersuchungen oder weiteren diagnostischen Maßnahmen.",
            third:
              "„Eine gründliche Dokumentation der Untersuchungsergebnisse ist essenziell für die Nachverfolgung und Planung weiterer Maßnahmen.“",
            fourth:
              "„Wir planen Kontrolluntersuchungen basierend auf den initialen Befunden und dokumentieren jeden Schritt im Patientenmanagementsystem.“",
          },
        ],
      },
      // 4tab 154
      {
        id: 154,
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
              "50-jähriger Patient ohne Beschwerden, Routineuntersuchung ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient klagt über Blut im Stuhl und unerklärlichen Gewichtsverlust. Keine bekannte Vorgeschichte von Darmkrankheiten.",
            fourth:
              "25-jährige Patientin berichtet von chronischen Bauchschmerzen und blutigem Durchfall. Familiengeschichte von Darmerkrankungen.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Koloskopie zeigt normale Schleimhaut ohne Anzeichen von Polypen, Tumoren oder Entzündungen.",
            third:
              "Koloskopie zeigt eine 4 cm große, ulzerierende Masse im distalen Colon. Biopsie bestätigt Adenokarzinom.",
            fourth:
              "Koloskopie offenbart multiple entzündliche Ulzera im gesamten Colon, insbesondere im Rektum und Sigma.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer chirurgischen Resektion und anschließender Chemotherapie.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer entzündungshemmenden Therapie.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Bestätigung des gesunden Zustandes des Darms. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines kolorektalen Karzinoms basierend auf Koloskopie-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Colitis ulcerosa aufgrund der Koloskopie-Ergebnisse und Symptomatik.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des Darms. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines kolorektalen Karzinoms basierend auf Koloskopie-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Colitis ulcerosa aufgrund der Koloskopie-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Darmschleimhaut ohne Auffälligkeiten in allen untersuchten Abschnitten.",
            third:
              "Koloskopie-Bilder zeigen eine deutlich abgegrenzte, ulzerierende Masse im distalen Colon.",
            fourth:
              "Koloskopie-Bilder zeigen multiple entzündliche Ulzera und Schleimhautveränderungen im gesamten Colon.",
          },
          {
            first: "Fallabschluss",
            second:
              "Es ist zu empfehlen, regelmäßige gesundheitliche Überprüfungen beizubehalten, um die Gesundheit des Darms zu sichern.",
            third:
              "Es ist zu empfehlen, dass der Patient einer chirurgischen Resektion unterzogen wird, gefolgt von einer Chemotherapie. Regelmäßige Nachsorgeuntersuchungen sind erforderlich, um den Krankheitsverlauf zu überwachen.",
            fourth:
              "Es ist zu empfehlen, eine entzündungshemmende Therapie zu beginnen und regelmäßige Kontrolluntersuchungen durchzuführen, um den Krankheitsverlauf zu überwachen.",
          },
        ],
      },
      // 5tab 155
      {
        id: 155,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "",
        text_list: [
          {
            bold: "Kolonoskop :",
            other:
              "Das Kolonoskop ist ein flexibler, schlauchförmiger Apparat, der mit einer Lichtquelle und einer Kamera ausgestattet ist. Es wird durch den Anus in den Dickdarm eingeführt und ermöglicht die visuelle Untersuchung der Darmschleimhaut.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Die Lichtquelle ist in das Kolonoskop integriert und beleuchtet den Darm während der Untersuchung, um eine klare Sicht auf die Darmschleimhaut zu gewährleisten.",
          },
          {
            bold: "Kamera :",
            other:
              "Die Kamera befindet sich an der Spitze des Kolonoskops und überträgt Echtzeitbilder der Darmschleimhaut auf einen Monitor. Diese Bilder ermöglichen es dem Arzt, eventuelle Anomalien zu erkennen und zu dokumentieren.",
          },
          {
            bold: "Insufflationssystem :",
            other:
              "Das Insufflationssystem pumpt Luft oder CO2 in den Darm, um ihn aufzublähen und die Sichtbarkeit der Darmschleimhaut zu verbessern. Dies erleichtert die Navigation und Untersuchung des Kolonoskops durch den Darm.",
          },
          {
            bold: "Absaugung und Spülung :",
            other:
              "Das Kolonoskop ist mit Kanälen ausgestattet, die eine Absaugung von Flüssigkeiten und eine Spülung mit Wasser ermöglichen. Dies hilft, die Sicht während der Untersuchung zu klären und Kotreste zu entfernen.",
          },
          {
            bold: "Biopsiekanal :",
            other:
              "Der Biopsiekanal ermöglicht das Einführen von Instrumenten zur Entnahme von Gewebeproben (Biopsien) oder zur Entfernung von Polypen während der Untersuchung.",
          },
          {
            bold: "Monitor :",
            other:
              "Der Monitor zeigt die Echtzeitbilder der Kamera an, die durch das Kolonoskop übertragen werden. Der Arzt kann die Bilder vergrößern, um detaillierte Untersuchungen durchzuführen.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Die Steuerkonsole ermöglicht dem Arzt, das Kolonoskop zu steuern, die Kamera zu bewegen, Luft oder CO2 zu insufflieren und Spülungen durchzuführen. Sie enthält auch Bedienelemente zur Aufnahme von Bildern oder Videos.",
          },
          {
            bold: "Patiententisch :",
            other:
              "Der Patiententisch ist motorisiert und kann in verschiedene Positionen gebracht werden, um dem Arzt den besten Zugang zum Anus und dem Dickdarm des Patienten zu ermöglichen. Der Patient liegt während der Untersuchung auf diesem Tisch.",
          },
          {
            bold: "Sedierungs- und Überwachungssystem :",
            other:
              "Während der Koloskopie wird häufig eine Sedierung verabreicht, um dem Patienten zu helfen, sich zu entspannen und mögliche Beschwerden zu minimieren. Überwachungssysteme zur Kontrolle der Vitalzeichen des Patienten (z.B. Herzfrequenz, Blutdruck, Sauerstoffsättigung) sind während der Untersuchung unerlässlich.",
          },
          {
            bold: "Dokumentationssystem :",
            other:
              "Moderne Koloskopie-Geräte sind mit einem System zur Aufzeichnung und Dokumentation der Untersuchungsergebnisse ausgestattet. Dies umfasst die Speicherung von Bildern, Videos und Berichten für die spätere Analyse und Verlaufskontrolle.",
          },
          {
            bold: "CO2-Insufflator :",
            other:
              "Einige moderne Koloskopie-Einrichtungen verwenden CO2 anstelle von Luft zur Aufblähung des Darms, da CO2 schneller vom Körper absorbiert wird und weniger Beschwerden nach der Untersuchung verursacht.",
          },
        ],
      },
      // 6tab 156
      {
        id: 156,
        title: "Wortschatz",
        text: "Diese Liste umfasst wesentliche Begriffe und Phrasen, die im Rahmen der Fachsprachenprüfung für die Koloskopie-Diagnostik relevant sind.",
        text_list: [
          {
            bold: "Koloskopie :",
            other:
              "Endoskopische Untersuchung des Dickdarms zur Diagnose und Behandlung von Darmerkrankungen.",
          },
          {
            bold: "Kolonoskop :",
            other:
              "Flexibles, schlauchförmiges Instrument mit Kamera und Lichtquelle zur visuellen Inspektion des Darms.",
          },
          {
            bold: "Biopsie :",
            other:
              "Entnahme einer Gewebeprobe zur histologischen Untersuchung.",
          },
          {
            bold: "Polypektomie :",
            other:
              "Entfernung von Polypen aus dem Darm während der Koloskopie.",
          },
          {
            bold: "Insufflation :",
            other:
              "Einblasen von Luft oder CO2 in den Darm zur besseren Sichtbarkeit der Schleimhaut.",
          },
          {
            bold: "Sedierung :",
            other:
              "Verabreichung von Beruhigungsmitteln zur Minimierung von Unbehagen während der Untersuchung.",
          },
          {
            bold: "Darmschleimhaut :",
            other:
              "Die innere Auskleidung des Darms, die während der Koloskopie untersucht wird.",
          },
          {
            bold: "Divertikel :",
            other:
              "Ausstülpungen der Darmschleimhaut, die während der Koloskopie erkannt werden können.",
          },
          {
            bold: "Adenom :",
            other:
              "Gutartiger Tumor, der im Darm gefunden und entfernt werden kann.",
          },
          {
            bold: "Karzinom :",
            other: "Bösartiger Tumor, der im Darm diagnostiziert werden kann.",
          },
          {
            bold: "Colitis ulcerosa :",
            other:
              "Chronisch entzündliche Darmerkrankung, die während der Koloskopie diagnostiziert wird.",
          },
          {
            bold: "Morbus Crohn :",
            other:
              "Chronisch entzündliche Darmerkrankung, die den gesamten Verdauungstrakt betreffen kann.",
          },
          {
            bold: "Darmperforation :",
            other:
              "Durchbruch der Darmwand, eine seltene aber schwerwiegende Komplikation der Koloskopie.",
          },
          {
            bold: "Darmreinigung :",
            other:
              "Vorbereitung des Darms durch spezielle Diät und Abführmittel vor der Koloskopie.",
          },
          {
            bold: "Rücksprache :",
            other:
              "Kommunikation mit anderen Fachärzten über die Befunde und weitere Behandlungsschritte.",
          },
          {
            bold: "Endoskopische Resektion :",
            other: "Entfernung von Gewebe durch endoskopische Techniken.",
          },
          {
            bold: "Nachsorge :",
            other:
              "Überwachung und Behandlung des Patienten nach der Koloskopie.",
          },
          {
            bold: "CT-Koloskopie :",
            other:
              "Alternative bildgebende Untersuchung zur Darstellung des Darms mittels Computertomographie.",
          },
          {
            bold: "Screening :",
            other: "Vorsorgeuntersuchung zur Früherkennung von Darmkrebs.",
          },
          {
            bold: "Pathologie :",
            other:
              "Untersuchung der entnommenen Gewebeproben zur Bestimmung der Art der Erkrankung.",
          },
          {
            bold: "Einverständniserklärung :",
            other:
              "Schriftliche Zustimmung des Patienten zur Durchführung der Koloskopie.",
          },
          {
            bold: "Patientenvorbereitung :",
            other:
              "Aufklärung und Vorbereitung des Patienten vor der Untersuchung.",
          },
          {
            bold: "Therapeutische Koloskopie :",
            other:
              "Durchführung von Behandlungsmaßnahmen während der Koloskopie.",
          },
          {
            bold: "Komplikationsmanagement :",
            other:
              "Umgang mit möglichen Komplikationen während und nach der Koloskopie.",
          },
          {
            bold: "Follow-up :",
            other:
              "Nachkontrolle zur Überwachung des Behandlungserfolgs und frühzeitigen Erkennung von Rezidiven.",
          },
        ],
      },
      // 7tab 157
      {
        id: 157,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 158
      {
        id: 158,
        title: "PDF",
        link: "https://drive.google.com/file/d/1_LmuIoLyEXR2YtFS1FtCxw9c9lXQEP7a/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 18
  // start of parent tab 19 Ösophagogastroduodenoskopie
  {
    id: 19,
    title: "Ösophagogastroduodenoskopie",
    checked: false,
    childTabs: [
      // 1tab 159
      {
        id: 159,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die OGD dient der visuellen Beurteilung und Diagnostik von Erkrankungen des Ösophagus, des Magens und des Duodenums. Sie ermöglicht die Identifizierung von Läsionen, Entzündungen, Tumoren und anderen pathologischen Veränderungen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die OGD wird häufig bei Patienten mit Symptomen wie Dysphagie, Oberbauchschmerzen, Sodbrennen, Übelkeit, Erbrechen und gastrointestinalen Blutungen eingesetzt. Sie ist entscheidend für die Diagnose und Behandlung von Erkrankungen wie Ulkuskrankheit, Refluxösophagitis, Gastritis und Malignomen.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die OGD basiert auf der Verwendung eines flexiblen Endoskops, das durch den Mund in den Ösophagus, den Magen und das Duodenum eingeführt wird. Das Endoskop ist mit einer Lichtquelle und einer Kamera ausgestattet, die Echtzeitbilder auf einen Monitor überträgt.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Das Verfahren wird in der Regel unter Sedierung durchgeführt. Das Endoskop ermöglicht die Entnahme von Biopsien und die Durchführung therapeutischer Maßnahmen wie Blutstillung, Polypektomie und Dilatation von Strikturen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Interpretation der Endoskopiebilder erfordert Erfahrung und Fachwissen. Typische Befunde können Erosionen, Ulzera, Polypen, Tumore und entzündliche Veränderungen umfassen. Die Biopsien werden histopathologisch untersucht, um spezifische Diagnosen zu stellen.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Zu den häufigen Befunden gehören Refluxösophagitis, peptische Ulzera, gastrische und duodenale Polypen sowie Magen- und Ösophaguskarzinome.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die OGD bietet eine direkte visuelle Inspektion und ermöglicht gezielte Biopsien und therapeutische Interventionen. Sie hat eine hohe diagnostische Genauigkeit und kann viele Erkrankungen frühzeitig erkennen.",
              },
              {
                bold_text: "Nachteile:",
                text: "Die Vorbereitung und Sedierung können für Patienten unangenehm sein. Es besteht ein geringes Risiko für Komplikationen wie Perforation und Infektion.",
              },
              {
                bold_text: "Risiken:",
                text: "Zu den Risiken gehören Blutungen, Perforationen und allergische Reaktionen auf Sedativa. Diese Komplikationen sind jedoch selten.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die OGD spielt eine zentrale Rolle in der Diagnose und Behandlung vieler gastrointestinaler Erkrankungen. Sie ist oft der Goldstandard für die Evaluierung von Symptomen und die Überwachung bekannter Erkrankungen.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Die Ergebnisse der OGD beeinflussen maßgeblich die klinische Entscheidungsfindung und das Management der Patienten. Sie hilft, therapeutische Strategien zu planen und den Krankheitsverlauf zu überwachen.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Alternative diagnostische Methoden sind die Bariumkontraststudie und die Magnetresonanztomographie (MRT). Diese Verfahren bieten jedoch keine Möglichkeit zur direkten Visualisierung und Biopsie.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Neue Techniken wie die Endoskopische Submukosadissektion (ESD) und die transnasale Endoskopie erweitern die diagnostischen und therapeutischen Möglichkeiten der OGD.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Die Weiterentwicklung der Endoskopietechnologie, einschließlich verbesserter Bildgebung und minimal-invasiver Techniken, wird die Diagnose und Behandlungsmöglichkeiten weiter verbessern.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Ösophagogastroduodenoskopie ist ein unverzichtbares Verfahren in der Gastroenterologie. Sie bietet präzise diagnostische und therapeutische Möglichkeiten bei einer Vielzahl von gastrointestinalen Erkrankungen.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Die OGD ist ein zentrales Instrument in der modernen medizinischen Praxis, das die Patientenversorgung erheblich verbessert und die klinische Entscheidungsfindung unterstützt.",
              },
            ],
          },
        ],
      },
      // 2tab 160
      {
        id: 160,
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
              "Erklären Sie dem Patienten, dass die ÖGD zur Diagnose und Beurteilung von Erkrankungen des Ösophagus, Magens und Duodenums dient.",
            third:
              "„Wir möchten feststellen, ob eine Entzündung, ein Geschwür oder ein Tumor in Ihrem Magen-Darm-Trakt vorliegt.“",
            fourth:
              "„Diese Untersuchung hilft uns, die Ursache Ihrer Beschwerden wie Magenschmerzen oder Schluckbeschwerden zu finden.“",
          },
          {
            first: "Ablauf",
            second:
              "Informieren Sie den Patienten über den genauen Ablauf der Untersuchung, einschließlich der Einführung des Endoskops durch den Mund, der Untersuchung des oberen Gastrointestinaltrakts und der Möglichkeit, Biopsien zu entnehmen.",
            third:
              "„Wir werden ein flexibles Endoskop durch Ihren Mund einführen und langsam durch den Ösophagus, Magen und Zwölffingerdarm führen.“",
            fourth:
              "„Während der Untersuchung können wir kleine Gewebeproben entnehmen, um sie auf mögliche Erkrankungen zu untersuchen.“",
          },
          {
            first: "Vorbereitung",
            second:
              "Erklären Sie, dass der Patient nüchtern sein muss, normalerweise mindestens sechs Stunden vor der Untersuchung nichts essen oder trinken darf, und Anweisungen zur Medikation erhält.",
            third:
              "„Bitte essen oder trinken Sie ab Mitternacht nichts mehr, da Ihr Magen leer sein muss.“",
            fourth:
              "„Informieren Sie uns bitte über alle Medikamente, die Sie einnehmen, damit wir Sie anweisen können, welche Sie vor der Untersuchung absetzen sollten.“",
          },
          {
            first: "Risiken",
            second:
              "Informieren Sie über mögliche Risiken, wie Blutungen, Perforationen, Infektionen und allergische Reaktionen auf Sedativa, und erwähnen Sie, dass diese Komplikationen selten sind.",
            third:
              "„Es besteht ein geringes Risiko für Blutungen oder Infektionen, aber solche Komplikationen sind selten.“",
            fourth:
              "„Eine seltene, aber mögliche Komplikation ist die Perforation der Darmwand, die eine sofortige Behandlung erfordern würde.“",
          },
          {
            first: "Vorteile",
            second:
              "Erläutern Sie die Vorteile der ÖGD, wie die direkte visuelle Inspektion, gezielte Biopsien, therapeutische Interventionen und die hohe diagnostische Genauigkeit.",
            third:
              "„Die ÖGD erlaubt es uns, den Verdauungstrakt direkt anzusehen und gegebenenfalls sofort zu behandeln.“",
            fourth:
              "„Diese Methode hat eine hohe Genauigkeit und kann frühe Stadien von Krankheiten erkennen, was die Behandlungschancen verbessert.“",
          },
          {
            first: "Alternativen",
            second:
              "Erklären Sie alternative diagnostische Methoden, wie die Bariumkontraststudie und die Magnetresonanztomographie (MRT), und erwähnen Sie, dass diese keine direkte Visualisierung und Biopsie ermöglichen.",
            third:
              "„Eine Alternative wäre eine Bariumkontraststudie, bei der Sie eine spezielle Flüssigkeit trinken und dann geröntgt werden.“",
            fourth:
              "„Eine andere Möglichkeit ist die MRT, die jedoch keine direkten Biopsien ermöglicht, wie es bei der ÖGD der Fall ist.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Informieren Sie über mögliche Kontraindikationen, wie schwere Herz- oder Lungenerkrankungen, akute Infektionen und unkontrollierte Blutgerinnungsstörungen.",
            third:
              "„Wenn Sie an schweren Herzproblemen oder unkontrollierten Blutgerinnungsstörungen leiden, sollten wir die OGD möglicherweise nicht durchführen.“",
            fourth:
              "„Bei einer akuten Infektion oder schweren Atemproblemen wäre es sicherer, die Untersuchung zu verschieben.“",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erläutern Sie die möglichen Ergebnisse der ÖGD, einschließlich normaler Befunde, Entzündungen, Ulzera, Polypen und Tumore.",
            third:
              "„Ein mögliches Ergebnis könnte eine normale Untersuchung sein, was bedeutet, dass keine Auffälligkeiten gefunden wurden.“",
            fourth:
              "„Falls wir Polypen oder Tumore entdecken, würden wir diese näher untersuchen und eine geeignete Therapie einleiten.“",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Erklären Sie die Notwendigkeit einer Einwilligung, bevor die Untersuchung durchgeführt wird, um sicherzustellen, dass der Patient über die Verfahren, Risiken und Vorteile informiert ist.",
            third:
              "„Es ist wichtig, dass Sie alle Informationen verstehen und zustimmen, bevor wir mit der Untersuchung beginnen.“",
            fourth:
              "„Wir benötigen Ihr schriftliches Einverständnis, um sicherzustellen, dass Sie über die möglichen Risiken und Vorteile informiert sind.“",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Informieren Sie darüber, dass das Einverständnis schriftlich dokumentiert wird, und stellen Sie sicher, dass der Patient alle Fragen gestellt und beantwortet hat.",
            third:
              "„Bitte lesen Sie die Einverständniserklärung sorgfältig durch und stellen Sie alle Fragen, die Sie haben könnten.“",
            fourth:
              "„Nachdem wir Ihre Fragen beantwortet haben, werden Sie gebeten, das Formular zu unterschreiben, um Ihre Zustimmung zu bestätigen.“",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie dem Patienten abschließende Hinweise zur Untersuchung, was nach dem Eingriff zu erwarten ist, und wer die Ergebnisse mit ihm besprechen wird.",
            third:
              "„Nach der Untersuchung werden Sie sich möglicherweise noch etwas benommen fühlen. Es ist wichtig, dass Sie sich ausruhen und keine schweren Maschinen bedienen.“",
            fourth:
              "„Wir besprechen die Ergebnisse der Untersuchung, sobald die Sedierung abgeklungen ist und Sie vollständig wach sind.“",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, wie und wann der Patient über die Ergebnisse der Untersuchung informiert wird, und welche Schritte basierend auf den Befunden unternommen werden können.",
            third:
              "„Die Ergebnisse der Untersuchung werden Ihnen in einem Nachgespräch mitgeteilt. Bei Auffälligkeiten planen wir die nächsten Schritte.“",
            fourth:
              "„Sollten Biopsien entnommen worden sein, erhalten Sie die detaillierten Ergebnisse in etwa einer Woche.“",
          },
        ],
      },
      // 3tab 161
      {
        id: 161,
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
              "Erklären Sie, dass die ÖGD ein endoskopisches Verfahren ist, das zur visuellen Beurteilung des oberen Gastrointestinaltrakts eingesetzt wird.",
            third:
              "„Die ÖGD ist ein Verfahren, bei dem wir ein flexibles Endoskop verwenden, um den Ösophagus, den Magen und das Duodenum zu untersuchen.“",
            fourth:
              "„Bei der ÖGD führen wir ein Endoskop durch den Mund ein, um direkt die Schleimhaut des oberen Magen-Darm-Trakts zu beurteilen.“",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erklären Sie, dass die ÖGD zur Untersuchung des Ösophagus, Magens und Duodenums dient und pathologische Veränderungen wie Entzündungen, Ulzera und Tumoren identifizieren kann.",
            third:
              "„Mit der ÖGD können wir Erkrankungen wie Refluxösophagitis, Magengeschwüre und Tumoren frühzeitig erkennen.“",
            fourth:
              "„Die Untersuchung hilft uns, Ursachen für Beschwerden wie Schluckstörungen oder Oberbauchschmerzen zu identifizieren.“",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erwähnen Sie die typischen Befunde wie Refluxösophagitis, peptische Ulzera, Polypen und Malignome, und erläutern Sie deren klinische Bedeutung.",
            third:
              "„Typische Befunde sind Entzündungen, die auf eine Refluxösophagitis hinweisen, oder Geschwüre, die durch Helicobacter pylori verursacht werden.“",
            fourth:
              "„Wir könnten Polypen finden, die meist gutartig sind, aber auch Anzeichen von Malignomen, die eine sofortige Therapie erfordern.“",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie die häufigsten Indikationen für eine ÖGD, wie Dysphagie, Oberbauchschmerzen, unklare Anämie, gastrointestinalen Blutungen und Überwachung bekannter Läsionen.",
            third:
              "„Eine ÖGD ist indiziert bei Patienten mit anhaltendem Sodbrennen und Verdacht auf Barrett-Ösophagus.“",
            fourth:
              "„Wir führen die Untersuchung durch bei unklaren Blutungen im oberen Magen-Darm-Trakt, um die Blutungsquelle zu lokalisieren.“",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie die Kontraindikationen wie schwere Herz- oder Lungenerkrankungen, akute Infektionen und unkontrollierte Blutgerinnungsstörungen.",
            third:
              "„Patienten mit schwerer COPD sollten sorgfältig abgewogen werden, ob eine Sedierung für die ÖGD sicher ist.“",
            fourth:
              "„Bei Patienten mit akuten Herzinfarkten ist die Durchführung einer ÖGD kontraindiziert.“",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Erwähnen Sie mögliche Differenzialdiagnosen, die mit der ÖGD abgeklärt werden können, wie gastroösophageale Refluxkrankheit, peptische Ulzera und Malignome.",
            third:
              "„Differenzialdiagnosen umfassen neben der Refluxkrankheit auch eosinophile Ösophagitis und infektiöse Ösophagitiden.“",
            fourth:
              "„Die ÖGD hilft, zwischen gutartigen Ulzera und malignen Veränderungen zu unterscheiden.“",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklären Sie, wie die Ergebnisse der ÖGD in die Erstellung von Behandlungsplänen einfließen, z.B. medikamentöse Therapie bei Refluxösophagitis oder operative Maßnahmen bei malignen Tumoren.",
            third:
              "„Bei einem Befund von Refluxösophagitis würden wir einen PPI verschreiben und diätetische Maßnahmen empfehlen.“",
            fourth:
              "„Falls wir ein Karzinom finden, besprechen wir den Fall im Tumorboard und planen eine operative Entfernung.“",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit anderen Fachdisziplinen, wie Pathologie für die Auswertung von Biopsien und Onkologie für die Behandlung von Karzinomen.",
            third:
              "„Die Zusammenarbeit mit der Pathologie ist entscheidend, um Biopsieergebnisse korrekt zu interpretieren und die Diagnose zu bestätigen.“",
            fourth:
              "„Bei malignen Befunden koordinieren wir mit Onkologen die weitere Therapie, einschließlich Chemotherapie und Strahlentherapie.“",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erwähnen Sie die Bedeutung von Qualitätsmanagement in der Endoskopie, einschließlich der Schulung des Personals, der Einhaltung von Hygieneprotokollen und der regelmäßigen Überprüfung der Geräte.",
            third:
              "„Regelmäßige Fortbildungen für das Team stellen sicher, dass wir auf dem neuesten Stand der Technik und der Protokolle bleiben.“",
            fourth:
              "„Wir überprüfen und kalibrieren die Endoskopiegeräte regelmäßig, um optimale Bildqualität und Patientensicherheit zu gewährleisten.“",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erklären Sie die Notwendigkeit einer sorgfältigen Dokumentation der Untersuchungsergebnisse und der geplanten weiteren Schritte, sowie der Kommunikation der Befunde an den weiterbehandelnden Arzt.",
            third:
              "„Eine detaillierte Dokumentation der Befunde und Biopsieergebnisse ist essenziell für die weitere Behandlung und Verlaufskontrolle.“",
            fourth:
              "„Wir stellen sicher, dass die Ergebnisse der ÖGD umgehend an den Hausarzt übermittelt werden, um eine nahtlose Weiterbehandlung zu gewährleisten.“",
          },
        ],
      },
      // 4tab 162
      {
        id: 162,
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
              "50-jähriger Patient klagt über anhaltende Oberbauchschmerzen und gelegentliche Übelkeit.",
            fourth:
              "60-jähriger Patient mit chronischem Sodbrennen und gelegentlichen Schluckbeschwerden.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "ÖGD des oberen Gastrointestinaltrakts ohne Anomalien, keine Anzeichen pathologischer Veränderungen.",
            third:
              "ÖGD zeigt ein tiefes, gut abgegrenztes Ulkus im Antrum des Magens mit fibrinbelegtem Grund.",
            fourth:
              "ÖGD zeigt eine Zylinderepithelmetaplasie im distalen Ösophagus, typisch für Barrett.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das ÖGD-Ergebnis unterstützt den Ausschluss von GI-Erkrankungen.",
            third:
              "Der Befund deutet auf ein peptisches Ulkus hin, wahrscheinlich verursacht durch H. pylori oder NSAID-Gebrauch.",
            fourth:
              "Die Zylinderepithelmetaplasie ist typisch für Barrett-Ösophagus und erfordert regelmäßige Überwachung.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Einleitung einer medikamentösen Ulkustherapie und Eradikationstherapie für H. pylori.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer PPI-Therapie sowie Überwachung zur Früherkennung von Dysplasien.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes des oberen Gastrointestinaltrakts.",
            third:
              "Diagnose eines peptischen Ulkus basierend auf ÖGD-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Barrett-Ösophagus aufgrund der ÖGD-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Schleimhaut ohne Auffälligkeiten in allen untersuchten Bereichen.",
            third:
              "ÖGD-Aufnahmen zeigen ein tiefes Ulkus im Antrum mit fibrinbelegtem Grund.",
            fourth:
              "ÖGD-Aufnahmen zeigen Zylinderepithelmetaplasie im distalen Ösophagus.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige Routineuntersuchungen alle 2 Jahre zur Überwachung der allgemeinen Gesundheit.",
            third:
              "Wir empfehlen eine Eradikationstherapie für H. pylori und eine anschließende Kontrolle nach 4-6 Wochen.",
            fourth:
              "Es ist zu empfehlen, eine regelmäßige endoskopische Überwachung durchzuführen, um frühe Veränderungen zu erkennen.",
          },
        ],
      },
      // 5tab 163
      {
        id: 163,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Diese Komponenten und Funktionen sind entscheidend für eine erfolgreiche Durchführung der ÖGD und tragen zur Diagnose und Behandlung von Erkrankungen des oberen Gastrointestinaltrakts bei.",
        text_list: [
          {
            bold: "Endoskop :",
            other:
              "Das Hauptinstrument der ÖGD, bestehend aus einem flexiblen Schlauch, der durch den Mund des Patienten in den Ösophagus, den Magen und das Duodenum eingeführt wird. Es enthält eine Lichtquelle und eine Kamera zur Visualisierung des Gastrointestinaltrakts.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Eine starke Lichtquelle, meist LED, die durch das Endoskop leuchtet und den inneren Gastrointestinaltrakt ausleuchtet, um klare Bilder zu ermöglichen.",
          },
          {
            bold: "Kamera :",
            other:
              "Am Ende des Endoskops montiert, überträgt die Kamera Echtzeitbilder des inneren Gastrointestinaltrakts auf einen Monitor. Diese Bilder werden zur Diagnose und Dokumentation verwendet.",
          },
          {
            bold: "Arbeitskanäle :",
            other:
              "Das Endoskop verfügt über mehrere Kanäle, durch die Instrumente eingeführt werden können, um Biopsien zu entnehmen, Polypen zu entfernen oder therapeutische Eingriffe vorzunehmen.",
          },
          {
            bold: "Biopsiezange :",
            other:
              "Ein spezielles Instrument, das durch den Arbeitskanal des Endoskops eingeführt wird, um Gewebeproben für die histopathologische Untersuchung zu entnehmen.",
          },
          {
            bold: "Insufflator :",
            other:
              "Ein Gerät, das Luft oder CO2 in den Magen-Darm-Trakt bläst, um diesen aufzublähen und die Sichtbarkeit zu verbessern.",
          },
          {
            bold: "Absaugsystem :",
            other:
              "Ein System, das Flüssigkeiten, Schleim und Luft aus dem Magen-Darm-Trakt absaugt, um eine klare Sicht zu gewährleisten und Probenentnahmen zu erleichtern.",
          },
          {
            bold: "Monitor :",
            other:
              "Ein Bildschirm, auf dem die vom Endoskop übertragenden Bilder in Echtzeit angezeigt werden. Der Arzt kann so den Zustand des Gastrointestinaltrakts genau beurteilen.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Ein Bedienfeld, das es dem Endoskopisten ermöglicht, die Funktionen des Endoskops zu steuern, wie z.B. Beleuchtung, Luft- und Wasserzufuhr, und die Bewegung der Kamera.",
          },
          {
            bold: "Desinfektionssystem :",
            other:
              "Ein System zur gründlichen Reinigung und Desinfektion des Endoskops und der verwendeten Instrumente, um die Übertragung von Infektionen zu verhindern.",
          },
          {
            bold: "Dokumentationssystem :",
            other:
              "Ein System zur Erfassung und Speicherung der während der Untersuchung aufgenommenen Bilder und Videos für die spätere Analyse und Dokumentation.",
          },
          {
            bold: "Wasserspülsystem :",
            other:
              "Eine Funktion des Endoskops, die es ermöglicht, Wasser in den Gastrointestinaltrakt zu spritzen, um Schleim und Ablagerungen von der Kamera zu entfernen und die Sicht zu verbessern.",
          },
          {
            bold: "CO2-Insufflationssystem :",
            other:
              "Eine alternative Methode zur Luftinsufflation, die die Beschwerden des Patienten nach der Untersuchung reduziert.",
          },
          {
            bold: "Anästhesiesystem :",
            other:
              "Ein System zur Verabreichung von Lokalanästhetika oder Sedativa, um den Patienten während der Untersuchung zu beruhigen und Schmerzen zu minimieren.",
          },
        ],
      },
      // 6tab 164
      {
        id: 164,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für die Kommunikation und das Verständnis im Bereich der ÖGD-Diagnostik und sollten für die Fachsprachenprüfung gut beherrscht werden.",
        text_list: [
          {
            bold: "Ösophagogastroduodenoskopie (ÖGD) :",
            other:
              "Endoskopisches Verfahren zur Untersuchung des Ösophagus, Magens und Duodenums.",
          },
          {
            bold: "Endoskop :",
            other:
              "Flexibler Schlauch mit Lichtquelle und Kamera, der durch den Mund in den oberen Gastrointestinaltrakt eingeführt wird.",
          },
          {
            bold: "Gastrointestinaltrakt :",
            other: "Verdauungstrakt, der den Magen und Darm umfasst.",
          },
          {
            bold: "Biopsie :",
            other:
              "Entnahme von Gewebeproben zur histopathologischen Untersuchung.",
          },
          {
            bold: "Insufflation :",
            other:
              "Einblasen von Luft oder CO2 in den Gastrointestinaltrakt zur besseren Sichtbarkeit.",
          },
          {
            bold: "Absaugung :",
            other:
              "Entfernen von Flüssigkeiten und Schleim aus dem Gastrointestinaltrakt zur Klarstellung des Sichtfelds.",
          },
          {
            bold: "Polyp :",
            other:
              "Gutartige Gewebewucherung im Magen-Darm-Trakt, die während der ÖGD entfernt werden kann.",
          },
          {
            bold: "Ulzera :",
            other:
              "Geschwürartige Läsionen im Magen oder Duodenum, häufig durch Helicobacter pylori oder NSAID verursacht.",
          },
          {
            bold: "Barrett-Ösophagus :",
            other:
              "Zylinderepithelmetaplasie im distalen Ösophagus, oft als Folge von chronischem Sodbrennen.",
          },
          {
            bold: "Sedierung :",
            other:
              "Verabreichung von Beruhigungs- oder Betäubungsmitteln, um den Patienten während der Untersuchung ruhigzustellen.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Beleuchtet den inneren Gastrointestinaltrakt für bessere Sicht während der Untersuchung.",
          },
          {
            bold: "Kamera :",
            other:
              "Nimmt Bilder und Videos des inneren Gastrointestinaltrakts auf und überträgt diese auf einen Monitor.",
          },
          {
            bold: "Monitor :",
            other:
              "Gerät, auf dem die vom Endoskop übertragenen Bilder in Echtzeit angezeigt werden.",
          },
          {
            bold: "Histopathologie :",
            other:
              "Untersuchung von Gewebeproben unter dem Mikroskop zur Diagnose von Krankheiten.",
          },
          {
            bold: "Perforation :",
            other:
              "Seltene Komplikation, bei der ein Loch im Gastrointestinaltrakt entsteht, oft infolge der Untersuchung.",
          },
          {
            bold: "Refluxösophagitis :",
            other:
              "Entzündung des Ösophagus, häufig verursacht durch Rückfluss von Magensäure.",
          },
          {
            bold: "Arbeitskanäle :",
            other:
              "Kanäle im Endoskop, durch die Instrumente für therapeutische Eingriffe eingeführt werden.",
          },
          {
            bold: "Ulkustherapie :",
            other:
              "Behandlung eines Magengeschwürs, oft durch Medikamente und Eradikation von Helicobacter pylori.",
          },
          {
            bold: "Erosionen :",
            other:
              "Oberflächliche Verletzungen der Schleimhaut im Gastrointestinaltrakt.",
          },
          {
            bold: "Hyperplasie :",
            other:
              "Vergrößerung eines Gewebes durch Zunahme der Zellzahl, oft gutartig.",
          },
          {
            bold: "Dysplasie :",
            other:
              "Abnormale Zellveränderungen, die Vorstufen zu Krebs sein können.",
          },
          {
            bold: "Hämostase :",
            other:
              "Stillung einer Blutung, oft durch endoskopische Methoden während der ÖGD.",
          },
          {
            bold: "Retroflexion :",
            other:
              "Technik, bei der das Endoskop gebogen wird, um den Magen aus einem anderen Winkel zu betrachten.",
          },
        ],
      },
      // 7tab 165
      {
        id: 165,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 166
      {
        id: 166,
        title: "PDF",
        link: "https://drive.google.com/file/d/150LBxYO2FAWXMB7hyXLks0h5vnkeWGWk/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 19
  // start of parent tab 20 Bronchoskopie
  {
    id: 20,
    title: "Bronchoskopie",
    checked: false,
    childTabs: [
      // 1tab 167
      {
        id: 167,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Bronchoskopie dient der Diagnose und Behandlung von Erkrankungen der Atemwege und der Lunge. Sie ermöglicht die direkte Visualisierung der Atemwege und die Entnahme von Gewebeproben für weitergehende Untersuchungen.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die Bronchoskopie ist besonders relevant in der Diagnostik von Lungenkrebs, Infektionen, chronischem Husten und anderen pathologischen Veränderungen der Atemwege. Sie wird sowohl diagnostisch als auch therapeutisch eingesetzt.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Bronchoskopie basiert auf der direkten Betrachtung der Atemwege durch ein flexibles oder starres Endoskop. Dabei wird ein dünner Schlauch durch Mund oder Nase in die Luftröhre und Bronchien eingeführt.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Moderne Bronchoskope sind mit einer Kamera und einer Lichtquelle ausgestattet, die eine klare Sicht auf die Atemwege ermöglichen. Zusätzliche Instrumente wie Biopsiezangen oder Bürsten können durch den Arbeitskanal des Bronchoskops eingeführt werden, um Gewebeproben zu entnehmen oder therapeutische Maßnahmen durchzuführen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die während der Bronchoskopie gewonnenen Bilder und Proben werden analysiert, um pathologische Veränderungen wie Tumore, Entzündungen oder Infektionen zu identifizieren.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde können Tumoren, Fremdkörper, Entzündungsherde oder Anzeichen von Infektionen sein. Die genaue Interpretation erfolgt in Zusammenarbeit mit Pathologen und anderen Fachärzten.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Bronchoskopie bietet den großen Vorteil, dass sie eine direkte Visualisierung der Atemwege ermöglicht. Dies ist besonders nützlich für die Diagnose von Lungenerkrankungen und die Entnahme von Gewebeproben. Therapeutische Eingriffe wie die Entfernung von Fremdkörpern oder die Aufdehnung verengter Atemwege können ebenfalls durchgeführt werden.",
              },
              {
                bold_text: "Nachteile:",
                text: "Trotz dieser Vorteile hat die Bronchoskopie auch Nachteile. Da es sich um ein invasives Verfahren handelt, erfordert sie in der Regel eine Sedierung oder Narkose, was zusätzliche Risiken mit sich bringt. Das Verfahren kann für den Patienten unangenehm sein, und es besteht immer das Risiko von Komplikationen.",
              },
              {
                bold_text: "Risiken:",
                text: "Zu den Risiken der Bronchoskopie gehören Blutungen, Infektionen und Verletzungen der Atemwege. Auch Reaktionen auf die Sedierung oder Narkose können auftreten. Diese Risiken müssen gegen die potenziellen Vorteile abgewogen werden, um die bestmögliche Entscheidung für den Patienten zu treffen.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Bronchoskopie spielt eine zentrale Rolle in der Diagnose und Behandlung von Lungenerkrankungen. Sie ermöglicht eine genaue Lokalisation und Beurteilung von pathologischen Veränderungen sowie die Durchführung von therapeutischen Maßnahmen.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Durch die Bronchoskopie können frühzeitig Diagnosen gestellt und gezielte Behandlungen eingeleitet werden, was die Prognose und das Management vieler Lungenerkrankungen erheblich verbessert.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zur Bronchoskopie zählen bildgebende Verfahren wie die Computertomographie (CT), die Magnetresonanztomographie (MRT) und die Positronenemissionstomographie (PET). Diese Methoden sind weniger invasiv, bieten jedoch keine Möglichkeit zur direkten Gewebeentnahme.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Die Forschung zur Bronchoskopie konzentriert sich auf die Verbesserung der Bildqualität, die Entwicklung neuer Instrumente und Techniken sowie die Minimierung von Risiken und Nebenwirkungen.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Entwicklungen könnten die Anwendung von Robotik und künstlicher Intelligenz beinhalten, um die Präzision und Sicherheit der Bronchoskopie weiter zu erhöhen.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Bronchoskopie ist ein wesentliches diagnostisches und therapeutisches Verfahren in der Pulmologie. Sie ermöglicht eine direkte Visualisierung der Atemwege und die gezielte Entnahme von Gewebeproben.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Durch ihre vielseitigen Einsatzmöglichkeiten und ihre zentrale Rolle in der Diagnostik und Behandlung von Lungenerkrankungen ist die Bronchoskopie ein unverzichtbares Instrument in der modernen Medizin.",
              },
            ],
          },
        ],
      },
      // 2tab 168
      {
        id: 168,
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
              "Erklären Sie dem Patienten, dass das Ziel der Bronchoskopie die Diagnose und Behandlung von Erkrankungen der Atemwege und der Lunge ist.",
            third:
              "Wir führen diese Untersuchung durch, um herauszufinden, ob Sie einen Tumor in den Atemwegen haben.",
            fourth:
              "Das Ziel ist es, die Ursache für Ihren chronischen Husten zu finden, der durch Entzündungen oder Infektionen verursacht sein könnte.",
          },
          {
            first: "Ablauf",
            second:
              "Nennen Sie den Patienten den Ablauf der Bronchoskopie: Einführen eines flexiblen Endoskops durch Mund oder Nase, Visualisierung der Atemwege und ggf. Entnahme von Gewebeproben.",
            third:
              "Wir werden ein dünnes, flexibles Instrument durch Ihre Nase in die Lunge einführen. Sie können währenddessen normal atmen.",
            fourth:
              "Während der Untersuchung schauen wir uns die Atemwege an und entnehmen bei Bedarf kleine Gewebeproben.",
          },
          {
            first: "Vorbereitung",
            second:
              "Erklären Sie, dass der Patient vor der Untersuchung nüchtern sein sollte, und dass eventuell eine Beruhigungsspritze oder Narkose verabreicht wird.",
            third:
              "Bitte essen und trinken Sie ab Mitternacht nichts mehr, da dies die Untersuchung erleichtert.",
            fourth:
              "Wir werden Ihnen eine Beruhigungsspritze geben, damit Sie sich entspannen und die Untersuchung schmerzfrei verläuft.",
          },
          {
            first: "Risiken",
            second:
              "Informieren Sie den Patienten über mögliche Risiken wie Blutungen, Infektionen, Verletzungen der Atemwege und Reaktionen auf die Sedierung.",
            third:
              "Es gibt ein geringes Risiko für Blutungen oder Infektionen, die wir jedoch gut überwachen können.",
            fourth:
              "Selten können Verletzungen der Atemwege oder allergische Reaktionen auf die Beruhigungsmittel auftreten.",
          },
          {
            first: "Vorteile",
            second:
              "Nennen Sie die Vorteile der Bronchoskopie: direkte Visualisierung der Atemwege, Entnahme von Gewebeproben, Durchführung therapeutischer Maßnahmen.",
            third:
              "Ein großer Vorteil ist, dass wir sofort sehen können, was in Ihren Atemwegen vor sich geht.",
            fourth:
              "Durch die Gewebeproben können wir eine genaue Diagnose stellen und schnell mit der passenden Behandlung beginnen.",
          },
          {
            first: "Alternativen",
            second:
              "Erklären Sie dem Patienten die Alternativen zur Bronchoskopie wie CT, MRT und PET, die weniger invasiv sind, aber keine Gewebeentnahme ermöglichen.",
            third:
              "Eine Alternative wäre ein CT-Scan, aber dabei können wir keine Gewebeproben entnehmen.",
            fourth:
              "Eine MRT könnte ebenfalls infrage kommen, liefert aber keine so detaillierten Bilder der Atemwege wie die Bronchoskopie.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Nennen Sie mögliche Kontraindikationen wie schwere Herz-Kreislauf-Erkrankungen oder bestimmte Lungenerkrankungen, bei denen eine Bronchoskopie riskant sein könnte.",
            third:
              "Bei schweren Herzproblemen könnte die Untersuchung zu riskant sein.",
            fourth:
              "Wenn Sie unter schweren Lungenerkrankungen wie einem instabilen Asthma leiden, müssen wir die Risiken genau abwägen.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie dem Patienten, dass mögliche Ergebnisse der Untersuchung Tumore, Entzündungen, Infektionen oder andere pathologische Veränderungen sein können.",
            third:
              "Wir könnten Tumore, Entzündungen oder Zeichen einer Infektion finden, die weitere Behandlungen erfordern.",
            fourth:
              "Die Untersuchung könnte uns Hinweise auf chronische Entzündungen oder andere Veränderungen in den Atemwegen geben.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Erklären Sie dem Patienten die Wichtigkeit des Einverständnisses, um rechtliche und ethische Standards zu erfüllen.",
            third:
              "Ihr schriftliches Einverständnis ist wichtig, um sicherzustellen, dass Sie alle Informationen und Risiken verstanden haben.",
            fourth:
              "Wir benötigen Ihr Einverständnis, um die Untersuchung durchführen zu dürfen und damit Sie über alle möglichen Risiken informiert sind.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Nennen Sie dem Patienten den Prozess des Einverständniserhalts, indem Sie das Verfahren und die Risiken detailliert erläutern und schriftliches Einverständnis einholen.",
            third:
              "Wir werden Ihnen das Verfahren genau erklären und Ihre Fragen beantworten, bevor Sie das Einverständnisformular unterschreiben.",
            fourth:
              "Nachdem wir alle Details besprochen haben, bitten wir Sie, das Einverständnisformular zu unterschreiben, um Ihre Zustimmung zu bestätigen.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Erklären Sie dem Patienten, dass er nach der Untersuchung möglicherweise vorübergehend überwacht wird und Ruhe benötigt.",
            third:
              "Nach der Untersuchung werden Sie einige Stunden zur Überwachung in der Klinik bleiben müssen.",
            fourth:
              "Bitte planen Sie, nach der Untersuchung den restlichen Tag in Ruhe zu verbringen und keine anstrengenden Aktivitäten zu unternehmen.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Informieren Sie den Patienten darüber, dass die Ergebnisse der Bronchoskopie nach der Analyse durch Fachärzte mitgeteilt werden und dass eventuell weitere Untersuchungen oder Behandlungen notwendig sind.",
            third:
              "Die Ergebnisse der Untersuchung werden Ihnen in einem Nachsorgetermin mitgeteilt, nachdem unsere Spezialisten die Proben analysiert haben.",
            fourth:
              "Wir informieren Sie über die Ergebnisse, sobald sie vorliegen, und besprechen die nächsten Schritte für Ihre Behandlung.",
          },
        ],
      },
      // 3tab 169
      {
        id: 169,
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
              "Erklären Sie, dass die Bronchoskopie eine endoskopische Untersuchung der Atemwege ist, bei der ein flexibles oder starres Endoskop verwendet wird, um die Atemwege direkt zu betrachten und Proben zu entnehmen.",
            third:
              "Die Bronchoskopie ist ein Verfahren, bei dem wir ein flexibles oder starres Endoskop durch die Atemwege einführen, um diese direkt zu inspizieren und bei Bedarf Gewebeproben für eine histologische Untersuchung zu entnehmen.",
            fourth:
              "Bei der Bronchoskopie verwenden wir ein Endoskop, das durch den Mund oder die Nase in die Luftröhre und Bronchien eingeführt wird. Diese Methode ermöglicht uns eine direkte Sicht auf die Atemwege und die Entnahme von Gewebeproben zur weiteren Analyse.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Nennen Sie, dass die Bronchoskopie zur Diagnose von Lungenerkrankungen wie Tumoren, Infektionen, Fremdkörpern und entzündlichen Prozessen eingesetzt wird und therapeutische Eingriffe wie Biopsien und die Entfernung von Fremdkörpern ermöglicht.",
            third:
              "Mit der Bronchoskopie können wir Tumore, Infektionen, Fremdkörper und entzündliche Prozesse in den Atemwegen diagnostizieren. Zudem können wir therapeutische Maßnahmen wie die Entnahme von Biopsien oder die Entfernung von Fremdkörpern durchführen.",
            fourth:
              "Durch die Bronchoskopie lassen sich zahlreiche Erkrankungen der Atemwege diagnostizieren, darunter Tumore, entzündliche Erkrankungen und Infektionen. Auch therapeutische Eingriffe wie Biopsien oder die Entfernung von obstruktiven Fremdkörpern können im gleichen Zug durchgeführt werden.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erklären Sie, dass die Bronchoskopie pathologische Veränderungen wie Tumore, entzündliche Prozesse, Infektionen und Fremdkörper identifizieren kann. Die entnommenen Gewebeproben werden histologisch untersucht.",
            third:
              "Die Bronchoskopie kann uns zeigen, ob pathologische Veränderungen wie Tumore, entzündliche Prozesse, Infektionen oder Fremdkörper vorliegen. Die entnommenen Proben werden dann histologisch untersucht, um eine genaue Diagnose zu stellen.",
            fourth:
              "Mittels Bronchoskopie können wir Tumore, Infektionen und Entzündungen in den Atemwegen direkt erkennen. Die entnommenen Gewebeproben werden dann unter dem Mikroskop analysiert, um die genaue Art der Pathologie zu bestimmen.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie, dass die Bronchoskopie indiziert ist bei anhaltendem Husten, Hämoptysen, unklaren radiologischen Befunden, Verdacht auf Bronchialkarzinom, chronischen Infektionen und Fremdkörperaspiration.",
            third:
              "Indikationen für die Bronchoskopie sind anhaltender Husten, Hämoptysen, unklare radiologische Befunde, Verdacht auf Bronchialkarzinom, chronische Infektionen und Fremdkörperaspiration.",
            fourth:
              "Zu den Indikationen gehören persistierender Husten, Hämoptysen, unklare Befunde in der Bildgebung, Verdacht auf Bronchialkarzinom, chronische Lungeninfektionen und das Einatmen von Fremdkörpern.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären Sie, dass Kontraindikationen schwere kardiopulmonale Erkrankungen, unkontrollierte Blutgerinnungsstörungen, schwere Hypoxie und instabile Patienten umfassen.",
            third:
              "Kontraindikationen umfassen schwere kardiopulmonale Erkrankungen, unkontrollierte Blutgerinnungsstörungen, schwere Hypoxie und instabile Patienten, da das Risiko für Komplikationen in diesen Fällen zu hoch ist.",
            fourth:
              "Zu den Kontraindikationen gehören schwere Herz- und Lungenerkrankungen, unkontrollierte Gerinnungsstörungen, schwere Sauerstoffmangelzustände und instabile Kreislaufsituationen, da diese Zustände die Sicherheit des Verfahrens beeinträchtigen.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Nennen Sie mögliche Differenzialdiagnosen, die durch die Bronchoskopie abgeklärt werden können, wie Bronchialkarzinom, Tuberkulose, Sarkoidose, chronische Bronchitis und Lungenabszess.",
            third:
              "Mögliche Differenzialdiagnosen, die wir mit der Bronchoskopie abklären können, umfassen Bronchialkarzinom, Tuberkulose, Sarkoidose, chronische Bronchitis und Lungenabszesse.",
            fourth:
              "Mit der Bronchoskopie können wir verschiedene Differenzialdiagnosen überprüfen, darunter Bronchialkarzinome, tuberkulöse Infektionen, Sarkoidose, chronische Bronchitis und Abszesse in der Lunge.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklären Sie, wie die Ergebnisse der Bronchoskopie zur Erstellung individueller Behandlungspläne genutzt werden können, einschließlich chirurgischer Eingriffe, medikamentöser Therapien und weiterer diagnostischer Maßnahmen.",
            third:
              "Die Ergebnisse der Bronchoskopie helfen uns, individuelle Behandlungspläne zu erstellen, die chirurgische Eingriffe, medikamentöse Therapien oder weitere diagnostische Maßnahmen umfassen können, abhängig von der genauen Diagnose.",
            fourth:
              "Anhand der Ergebnisse der Bronchoskopie entwickeln wir spezifische Behandlungspläne. Diese können operative Eingriffe, gezielte medikamentöse Therapien oder zusätzliche diagnostische Verfahren beinhalten, um die bestmögliche Therapie für den Patienten zu gewährleisten.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Nennen Sie die Bedeutung der Zusammenarbeit mit Pathologen, Radiologen, Onkologen und Thoraxchirurgen bei der Auswertung der Bronchoskopieergebnisse und der Festlegung des weiteren Vorgehens.",
            third:
              "Die interprofessionelle Zusammenarbeit mit Pathologen, Radiologen, Onkologen und Thoraxchirurgen ist entscheidend, um die Ergebnisse der Bronchoskopie richtig zu interpretieren und das weitere Vorgehen zu planen.",
            fourth:
              "Um die Bronchoskopieergebnisse optimal zu nutzen, arbeiten wir eng mit Pathologen, Radiologen, Onkologen und Thoraxchirurgen zusammen, um eine umfassende Diagnostik und Therapieplanung zu gewährleisten.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erklären Sie die Notwendigkeit der Einhaltung von Standards und Protokollen während der Bronchoskopie, um die Qualität und Sicherheit der Untersuchung zu gewährleisten, sowie regelmäßige Schulungen und Audits.",
            third:
              "Um die Qualität und Sicherheit der Bronchoskopie zu gewährleisten, müssen wir strikte Standards und Protokolle einhalten. Regelmäßige Schulungen und Audits sind ebenfalls unerlässlich, um die kontinuierliche Verbesserung zu sichern.",
            fourth:
              "Die Einhaltung von Qualitätsstandards und Protokollen ist essentiell für die Durchführung der Bronchoskopie. Dies umfasst regelmäßige Schulungen des Personals und Audits zur Qualitätssicherung.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Nennen Sie die Wichtigkeit der sorgfältigen Dokumentation der Untersuchungsergebnisse und -befunde sowie der Planung der Nachsorge und weiterer diagnostischer oder therapeutischer Schritte, um eine kontinuierliche Patientenversorgung sicherzustellen.",
            third:
              "Eine sorgfältige Dokumentation der Bronchoskopieergebnisse und -befunde ist entscheidend. Wir planen auch die Nachsorge und mögliche weitere diagnostische oder therapeutische Maßnahmen, um eine kontinuierliche und umfassende Patientenversorgung sicherzustellen.",
            fourth:
              "Die detaillierte Dokumentation der Untersuchungsergebnisse ist unerlässlich, um die weitere Betreuung des Patienten zu planen. Dazu gehören die Nachsorge und eventuelle weitere diagnostische oder therapeutische Maßnahmen, um eine kontinuierliche Versorgung zu gewährleisten.",
          },
        ],
      },
      // 4tab 170
      {
        id: 170,
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
              "35-jähriger Patient ohne Beschwerden, Routinekontrolle zur Vorsorge, keine auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient mit anhaltendem Husten und Bluthusten. Vorgeschichte von Rauchen.",
            fourth:
              "40-jährige Patientin mit chronischem Husten, Nachtschweiß und Gewichtsverlust. Reist regelmäßig in Länder mit hoher Tuberkuloseprävalenz.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Bronchoskopie ohne pathologische Befunde, klare und offene Atemwege, keine Auffälligkeiten.",
            third:
              "Bronchoskopie zeigt eine obstruktive Masse im rechten Hauptbronchus. Biopsie ergab ein nicht-kleinzelliges Bronchialkarzinom.",
            fourth:
              "Bronchoskopie zeigt entzündliche Veränderungen und granulomatöse Läsionen in den Bronchien. Probenentnahme ergab Nachweis von Mycobacterium tuberculosis.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Veränderungen; das Ergebnis unterstützt den Ausschluss von Erkrankungen der Atemwege.",
            third:
              "Der Befund deutet auf ein fortgeschrittenes nicht-kleinzelliges Bronchialkarzinom hin. Die Morphologie der Masse korreliert mit den klinischen Symptomen des Patienten.",
            fourth:
              "Die granulomatösen Veränderungen und der mikrobiologische Nachweis bestätigen die Diagnose einer Tuberkulose. Symptome passen zu den Befunden.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Ergebnisse sind entscheidend für die Planung der chirurgischen Resektion und der Chemotherapie.",
            fourth:
              "Wichtig für die Bestätigung der Diagnose und Einleitung einer antituberkulösen Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Atemwege. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines nicht-kleinzelligen Bronchialkarzinoms basierend auf Bronchoskopie- und Biopsiebefunden.",
            fourth:
              "Diagnose einer pulmonalen Tuberkulose aufgrund der Bronchoskopieergebnisse und des mikrobiologischen Nachweises.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Klare, unauffällige Atemwege ohne pathologische Befunde in der Bronchoskopie.",
            third:
              "Bronchoskopische Bilder zeigen eine deutlich abgegrenzte, obstruktive Masse im rechten Hauptbronchus.",
            fourth:
              "Bronchoskopische Bilder zeigen entzündliche Veränderungen und granulomatöse Läsionen, die typisch für Tuberkulose sind.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen, dass der Patient weiterhin regelmäßige gesundheitliche Überprüfungen vornimmt, um seine allgemeine Gesundheit zu überwachen und mögliche zukünftige Probleme frühzeitig zu erkennen.",
            third:
              "Wir empfehlen die sofortige Planung einer chirurgischen Resektion und anschließender Chemotherapie. Es ist zudem ratsam, eine multidisziplinäre Besprechung durchzuführen, um die bestmögliche Therapieoption festzulegen.",
            fourth:
              "Es ist zu empfehlen, eine sofortige antituberkulöse Therapie zu beginnen. Wir empfehlen auch regelmäßige Nachkontrollen und eine Aufklärung über Präventionsmaßnahmen.",
          },
        ],
      },
      // 5tab 171
      {
        id: 171,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Ein Bronchoskopie-Gerät ist ein spezialisiertes medizinisches Instrument, das zur direkten Untersuchung der Atemwege verwendet wird. Hier sind die wesentlichen Komponenten und Funktionen eines Bronchoskopie-Geräts:",
        text_list: [
          {
            bold: "Bronchoskop :",
            other:
              "Ein flexibles oder starres Endoskop, das durch den Mund oder die Nase in die Atemwege eingeführt wird. Es besteht aus einem langen, dünnen Schlauch, der eine Lichtquelle und eine Kamera enthält, um die Atemwege zu beleuchten und Bilder in Echtzeit zu übertragen.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Ein leistungsstarkes Licht, das in das Bronchoskop integriert ist, um die Atemwege während der Untersuchung ausreichend zu beleuchten. Moderne Bronchoskope verwenden LED-Technologie für eine helle und klare Ausleuchtung.",
          },
          {
            bold: "Kamera :",
            other:
              "Eine winzige Kamera am Ende des Bronchoskops, die Bilder und Videos von den Atemwegen aufnimmt. Diese werden in Echtzeit auf einen Monitor übertragen, sodass der Arzt die Untersuchung visuell verfolgen kann.",
          },
          {
            bold: "Arbeitskanal :",
            other:
              "Ein zusätzlicher Kanal im Bronchoskop, durch den Instrumente wie Biopsiezangen, Bürsten oder Nadeln eingeführt werden können, um Gewebeproben zu entnehmen oder therapeutische Eingriffe durchzuführen.",
          },
          {
            bold: "Monitor :",
            other:
              "Ein Bildschirm, auf dem die Live-Bilder der Kamera angezeigt werden. Der Monitor ermöglicht dem Arzt, die Atemwege des Patienten während der Bronchoskopie genau zu betrachten und zu navigieren.",
          },
          {
            bold: "Saugvorrichtung :",
            other:
              "Ein System, das Sekrete, Blut oder andere Flüssigkeiten aus den Atemwegen absaugt, um die Sicht während der Untersuchung zu verbessern und mögliche Hindernisse zu entfernen.",
          },
          {
            bold: "Spüllösung :",
            other:
              "Eine sterile Lösung, die durch das Bronchoskop gespült wird, um die Atemwege zu reinigen und klare Sichtverhältnisse zu schaffen. Dies ist besonders nützlich, um Schleim oder Blut wegzuspülen.",
          },
          {
            bold: "Biopsiezangen und Bürsten :",
            other:
              "Spezielle Instrumente, die durch den Arbeitskanal des Bronchoskops eingeführt werden, um Gewebeproben für die pathologische Untersuchung zu entnehmen.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Ein Bedienfeld, das dem Technologen oder Arzt ermöglicht, die verschiedenen Funktionen des Bronchoskops zu steuern, wie die Lichtintensität, die Kameraposition und den Einsatz von Spüllösungen oder Saugvorrichtungen.",
          },
          {
            bold: "Patientenüberwachungssystem :",
            other:
              "Ein System, das die Vitalparameter des Patienten wie Herzfrequenz, Sauerstoffsättigung und Blutdruck während der Bronchoskopie überwacht, um die Sicherheit zu gewährleisten.",
          },
          {
            bold: "Luftzufuhrsystem :",
            other:
              "Ein System, das die Atemwege des Patienten während der Untersuchung mit Luft versorgt, um ein Zusammenfallen der Atemwege zu verhindern und eine klare Sicht zu gewährleisten.",
          },
        ],
      },
      // 6tab 172
      {
        id: 172,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für die Kommunikation und das Verständnis im Bereich der Bronchoskopie-Diagnostik:",
        text_list: [
          {
            bold: "Bronchoskopie :",
            other:
              "Untersuchung der Atemwege mit einem flexiblen oder starren Endoskop.",
          },
          {
            bold: "Bronchoskop :",
            other: "Instrument zur Durchführung der Bronchoskopie.",
          },

          {
            bold: "Arbeitskanal :",
            other: "Kanal im Bronchoskop zur Einführung von Instrumenten.",
          },
          {
            bold: "Biopsiezange :",
            other:
              "Instrument zur Entnahme von Gewebeproben während der Bronchoskopie.",
          },
          {
            bold: "Bürste :",
            other: "Instrument zur Entnahme von Zellen aus den Atemwegen.",
          },
          {
            bold: "Nadelaspiration :",
            other:
              "Methode zur Entnahme von Zellen oder Flüssigkeit mittels Nadel.",
          },
          {
            bold: "Lichtquelle :",
            other: "Beleuchtet die Atemwege während der Bronchoskopie.",
          },
          {
            bold: "Kamera :",
            other: "Nimmt Bilder und Videos der Atemwege auf.",
          },
          {
            bold: "Monitor :",
            other:
              "Zeigt die Live-Bilder der Kamera während der Bronchoskopie.",
          },
          {
            bold: "Saugvorrichtung :",
            other: "Entfernt Flüssigkeiten und Sekrete aus den Atemwegen.",
          },
          {
            bold: "Spüllösung :",
            other: "Sterile Flüssigkeit zur Reinigung der Atemwege.",
          },
          {
            bold: "Sedierung :",
            other:
              "Medikamentöse Beruhigung des Patienten während der Bronchoskopie.",
          },
          {
            bold: "Lokalanästhesie :",
            other: "Lokale Betäubung zur Minimierung von Beschwerden.",
          },
          {
            bold: "Biopsie :",
            other: "Entnahme von Gewebeproben zur histologischen Untersuchung.",
          },
          {
            bold: "Histologie :",
            other: "Untersuchung des entnommenen Gewebes unter dem Mikroskop.",
          },
          {
            bold: "Diagnostische Bronchoskopie :",
            other: "Bronchoskopie zur Diagnosestellung von Krankheiten.",
          },
          {
            bold: "Therapeutische Bronchoskopie :",
            other:
              "Bronchoskopie zur Behandlung von Erkrankungen, z.B. Entfernen von Fremdkörpern.",
          },
          {
            bold: "Obstruktion :",
            other:
              "Blockierung der Atemwege, die während der Bronchoskopie erkannt werden kann.",
          },
          {
            bold: "Granulom :",
            other:
              "Entzündliche Gewebeveränderung, die während der Bronchoskopie sichtbar sein kann.",
          },
          {
            bold: "Tumor :",
            other:
              "Abnormales Gewebewachstum, das während der Bronchoskopie entdeckt werden kann.",
          },
          {
            bold: "Follow-up :",
            other:
              "Nachsorge nach der Bronchoskopie zur Überprüfung der Behandlungsergebnisse.",
          },
        ],
      },
      // 7tab 173
      {
        id: 173,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 174
      {
        id: 174,
        title: "PDF",
        link: "https://drive.google.com/file/d/1P7iLtZr_6HIZpHVdgTjwGvVKbmbWG7c5/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 20
  // start of parent tab 21 Die bronchoalveoläre Lavage
  {
    id: 21,
    title: "Bronchoalveoläre Lavage",
    checked: false,
    childTabs: [
      // 1tab 175
      {
        id: 175,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die bronchoalveoläre Lavage dient dazu, Flüssigkeit aus den tieferen Atemwegen zu gewinnen, um diese auf zelluläre und mikrobiologische Befunde zu untersuchen. Sie wird vor allem zur Diagnose von Lungenerkrankungen und Infektionen eingesetzt.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Die BAL ist besonders relevant bei der Diagnose von interstitiellen Lungenerkrankungen, alveolären Hämorrhagien, Pneumonien und anderen infektiösen Erkrankungen der Lunge. Sie wird auch genutzt, um die Reaktion auf therapeutische Maßnahmen zu überwachen.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die BAL basiert auf der Einführung von steriler Kochsalzlösung in ein Lungensegment durch ein Bronchoskop. Diese Flüssigkeit wird anschließend wieder abgesaugt, um sie zu analysieren.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Ein flexibles Bronchoskop wird durch Mund oder Nase in die Lunge eingeführt. Nach Positionierung im Zielbereich wird sterile Kochsalzlösung injiziert und nach einer kurzen Einwirkzeit abgesaugt. Das gewonnene Material wird zur zytologischen, mikrobiologischen und immunologischen Analyse genutzt.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Analyse der BAL-Flüssigkeit umfasst die Untersuchung auf zelluläre Zusammensetzung, mikrobiologische Kulturen und molekulare Diagnostik. Differenzierung der Zelltypen kann Hinweise auf spezifische Erkrankungen geben.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde können eine erhöhte Anzahl von neutrophilen Granulozyten bei bakteriellen Infektionen oder eine erhöhte Anzahl von eosinophilen Granulozyten bei allergischen Reaktionen sein. Auch das Vorhandensein von atypischen Zellen kann auf Malignome hinweisen.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die BAL ist ein minimalinvasives Verfahren, das wertvolle diagnostische Informationen liefert. Sie kann helfen, spezifische Lungenerkrankungen zu identifizieren und die Wirksamkeit von Therapien zu überwachen.",
              },
              {
                bold_text: "Nachteile:",
                text: "Nachteile der BAL können die Unannehmlichkeiten für den Patienten und die Notwendigkeit von Sedierung oder Anästhesie sein. Zudem ist das Verfahren zeitaufwendig und erfordert spezielle Ausrüstung.",
              },
              {
                bold_text: "Risiken:",
                text: "Zu den Risiken zählen Blutungen, Infektionen und in seltenen Fällen eine Verschlechterung der Lungenfunktion. Auch allergische Reaktionen auf die verwendeten Lösungen sind möglich.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die BAL spielt eine zentrale Rolle in der Diagnose und Behandlung von Lungenerkrankungen. Sie ermöglicht eine gezielte Therapie durch spezifische Diagnose und trägt zur Überwachung des Krankheitsverlaufs bei.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Für das Patientenmanagement ist die BAL von großer Bedeutung, da sie eine genaue Diagnose ermöglicht und somit die Grundlage für eine effektive Therapie bildet. Sie trägt auch zur Früherkennung und Prävention bei.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Zu den Alternativen zur BAL zählen nicht-invasive Verfahren wie die hochauflösende Computertomographie (HRCT) der Lunge, serologische Tests und Lungenszintigraphien. Jedes dieser Verfahren hat spezifische Vor- und Nachteile, die je nach klinischem Bild berücksichtigt werden müssen.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschungsergebnisse zeigen, dass die BAL in Kombination mit molekularbiologischen Techniken wie der Polymerase-Kettenreaktion (PCR) eine noch präzisere Diagnose ermöglicht. Studien untersuchen auch die Anwendung neuer Biomarker in der BAL-Flüssigkeit.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Perspektiven umfassen die Weiterentwicklung der BAL-Techniken und die Integration neuer diagnostischer Marker, um die Genauigkeit und Aussagekraft der Untersuchung weiter zu verbessern. Auch die Erforschung der genetischen und proteomischen Profile in der BAL-Flüssigkeit ist ein vielversprechendes Gebiet.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die bronchoalveoläre Lavage ist ein essenzielles diagnostisches Verfahren zur Untersuchung von Lungenerkrankungen. Sie liefert wertvolle Informationen zur zellulären und mikrobiologischen Zusammensetzung der unteren Atemwege.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Insgesamt trägt die BAL entscheidend zur Diagnose und Behandlung von Lungenerkrankungen bei. Sie unterstützt Ärzte dabei, präzise Diagnosen zu stellen und maßgeschneiderte Therapien zu entwickeln, was letztlich die Patientenversorgung verbessert.",
              },
            ],
          },
        ],
      },
      // 2tab 176
      {
        id: 176,
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
              "Erklären Sie dem Patienten, dass das Ziel der BAL darin besteht, Flüssigkeit aus den tiefen Atemwegen zu gewinnen, um sie auf zelluläre und mikrobiologische Befunde zu untersuchen.",
            third:
              "Wir möchten Flüssigkeit aus Ihren Atemwegen entnehmen, um mögliche Infektionen oder Entzündungen zu diagnostizieren.",
            fourth:
              "Mit dieser Untersuchung können wir genauer feststellen, ob eine spezifische Lungenerkrankung vorliegt.",
          },
          {
            first: "Ablauf",
            second:
              "Erklären Sie den Ablauf des Verfahrens: Ein flexibles Bronchoskop wird durch Mund oder Nase in die Lunge eingeführt. Sterile Kochsalzlösung wird in einen Lungensegment injiziert und abgesaugt.",
            third:
              "Wir führen ein dünnes, flexibles Rohr durch Ihre Nase in die Lunge ein, spülen mit Kochsalzlösung und saugen diese ab.",
            fourth:
              "Sie werden leicht sediert, dann führen wir ein Bronchoskop ein, injizieren und saugen Flüssigkeit zur Analyse ab.",
          },
          {
            first: "Vorbereitung",
            second:
              "Betonen Sie, dass der Patient vor der BAL nüchtern sein sollte. Erklären Sie die Notwendigkeit der Sedierung oder Anästhesie und informieren Sie über mögliche Voruntersuchungen.",
            third:
              "Bitte essen und trinken Sie sechs Stunden vor dem Eingriff nichts. Wir werden Ihnen auch ein Beruhigungsmittel geben.",
            fourth:
              "Vor dem Eingriff müssen Sie nüchtern sein. Eventuell führen wir vorher Bluttests und eine Lungenfunktionsprüfung durch.",
          },
          {
            first: "Risiken",
            second:
              "Erläutern Sie mögliche Risiken wie Blutungen, Infektionen, allergische Reaktionen auf die Lösungen und in seltenen Fällen eine Verschlechterung der Lungenfunktion.",
            third:
              "Es gibt ein geringes Risiko für Blutungen oder Infektionen. In seltenen Fällen kann sich die Lungenfunktion verschlechtern.",
            fourth:
              "Manche Patienten können eine allergische Reaktion auf die Kochsalzlösung haben, was sehr selten vorkommt.",
          },
          {
            first: "Vorteile",
            second:
              "Betonen Sie die Vorteile des Verfahrens: Es ist minimalinvasiv, liefert wertvolle diagnostische Informationen und hilft, spezifische Lungenerkrankungen zu identifizieren sowie die Wirksamkeit von Therapien zu überwachen.",
            third:
              "Das Verfahren ist minimalinvasiv und liefert präzise Diagnosen, die bei der Behandlung von Lungenerkrankungen helfen.",
            fourth:
              "Mit dieser Methode können wir gezielt Infektionen und Entzündungen in der Lunge diagnostizieren und behandeln.",
          },
          {
            first: "Alternativen",
            second:
              "Erklären Sie, dass es Alternativen gibt, wie hochauflösende Computertomographie (HRCT), serologische Tests und Lungenszintigraphien.",
            third:
              "Alternativ könnten wir eine CT der Lunge machen, aber das gibt weniger spezifische Informationen als die BAL.",
            fourth:
              "Eine Blutuntersuchung könnte auch Hinweise geben, aber die BAL liefert detailliertere Ergebnisse.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Informieren Sie über Kontraindikationen, wie schwere Herz- oder Lungenkrankheiten, die das Risiko des Verfahrens erhöhen.",
            third:
              "Wenn Sie an schweren Herz- oder Lungenkrankheiten leiden, könnte das Verfahren riskanter sein.",
            fourth:
              "Bei bestimmten Vorerkrankungen, wie schwerer COPD, kann das Risiko des Eingriffs erhöht sein.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie, dass die Analyse der BAL-Flüssigkeit Hinweise auf verschiedene Erkrankungen geben kann, wie bakterielle Infektionen, allergische Reaktionen oder Malignome.",
            third:
              "Wir könnten Hinweise auf bakterielle Infektionen oder allergische Reaktionen finden.",
            fourth:
              "Die Untersuchung kann auch atypische Zellen entdecken, die auf eine Krebserkrankung hinweisen könnten.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie, dass das informierte Einverständnis des Patienten unerlässlich ist. Der Patient muss die Risiken, Vorteile und den Ablauf des Verfahrens verstehen.",
            third:
              "Es ist wichtig, dass Sie alle Informationen verstehen und zustimmen, bevor wir mit dem Verfahren beginnen.",
            fourth:
              "Wir benötigen Ihr schriftliches Einverständnis, nachdem Sie über alle Risiken und Vorteile informiert wurden.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erläutern Sie, dass der Patient alle notwendigen Informationen erhält und die Möglichkeit hat, Fragen zu stellen, und gibt anschließend schriftlich seine Zustimmung.",
            third:
              "Nach unserer Erklärung können Sie Fragen stellen und dann das Einverständnisformular unterschreiben.",
            fourth:
              "Wir werden alle Details besprechen und Sie bitten, das Einverständnisformular zu unterschreiben, wenn Sie bereit sind.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie abschließende Hinweise, wie die Notwendigkeit, sich nach dem Eingriff auszuruhen, und informieren Sie über mögliche Nachwirkungen, wie Halsschmerzen oder Husten.",
            third:
              "Nach dem Eingriff sollten Sie sich ausruhen. Es kann sein, dass Sie leichte Halsschmerzen oder Husten haben.",
            fourth:
              "Bitte ruhen Sie sich nach der Untersuchung aus. Leichte Beschwerden im Hals oder Husten sind normal.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Erklären Sie, dass die Ergebnisse der BAL in der Regel einige Tage nach dem Eingriff vorliegen und der behandelnde Arzt die Befunde mit dem Patienten besprechen wird.",
            third:
              "Die Ergebnisse sind in ein paar Tagen verfügbar, und wir werden diese dann gemeinsam besprechen.",
            fourth:
              "Sobald die Ergebnisse vorliegen, wird Ihr behandelnder Arzt sie mit Ihnen durchgehen.",
          },
        ],
      },
      // 3tab 177
      {
        id: 177,
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
              "Erklären Sie, dass die bronchoalveoläre Lavage (BAL) ein diagnostisches Verfahren ist, bei dem sterile Kochsalzlösung in die Lunge eingebracht und anschließend abgesaugt wird, um Flüssigkeit aus den tiefen Atemwegen zu gewinnen.",
            third:
              "Die BAL ist ein Verfahren zur Gewinnung von Proben aus den tiefen Atemwegen durch Spülung mit Kochsalzlösung.",
            fourth:
              "Bei der BAL spülen wir die Bronchien mit steriler Kochsalzlösung und saugen die Flüssigkeit zur Analyse ab.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erläutern Sie, dass die BAL verwendet wird, um zelluläre und mikrobiologische Proben zu gewinnen, die bei der Diagnose von Lungenerkrankungen wie Infektionen, interstitiellen Lungenerkrankungen und malignen Erkrankungen hilfreich sind.",
            third:
              "Mit der BAL können wir zelluläre und mikrobiologische Analysen durchführen, um Infektionen oder Entzündungen zu diagnostizieren.",
            fourth:
              "Dieses Verfahren erlaubt uns, detaillierte Informationen über die Zusammensetzung und mögliche Pathogene in der Lunge zu erhalten.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Erklären Sie, dass die BAL-Flüssigkeit auf zelluläre Zusammensetzung, mikrobiologische Kulturen und molekulare Diagnostik untersucht wird. Ergebnisse können Hinweise auf Infektionen, allergische Reaktionen oder malignen Zellen geben.",
            third:
              "Die Analyse der BAL-Flüssigkeit zeigte eine hohe Anzahl von Neutrophilen, was auf eine bakterielle Infektion hindeutet.",
            fourth:
              "Wir fanden atypische Zellen in der BAL, die auf ein mögliches Malignom hinweisen könnten.",
          },
          {
            first: "Indikationen",
            second:
              "Nennen Sie Indikationen wie Verdacht auf Pneumonie, interstitielle Lungenerkrankungen, alveoläre Hämorrhagien, malignen Erkrankungen oder zur Überwachung der Therapieeffizienz bei bekannten Lungenerkrankungen.",
            third:
              "Die BAL ist indiziert bei Verdacht auf Pneumonie, insbesondere bei immunsupprimierten Patienten.",
            fourth:
              "Dieses Verfahren wird häufig bei interstitiellen Lungenerkrankungen eingesetzt, um die Diagnose zu bestätigen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erläutern Sie Kontraindikationen wie schwere Herz- oder Lungenkrankheiten, instabile Patienten, starke Blutungsneigung oder Patienten mit schwerer Hypoxämie.",
            third:
              "Patienten mit schwerer Herzinsuffizienz sollten keine BAL erhalten, da das Risiko zu hoch ist.",
            fourth:
              "Bei Patienten mit schwerer Hypoxämie kann die BAL kontraindiziert sein, da sie die Sauerstoffsättigung weiter verschlechtern könnte.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren Sie mögliche Differenzialdiagnosen, die durch die BAL geklärt werden können, wie infektiöse vs. nicht-infektiöse Lungenerkrankungen, die Pneumonitis oder Neoplasien.",
            third:
              "Durch die BAL konnten wir zwischen einer bakteriellen Pneumonie und einer Pilzinfektion differenzieren.",
            fourth:
              "Die BAL half uns, eine Eosinophile Pneumonie von einer allergischen Bronchopulmonalen Aspergillose zu unterscheiden.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erklären Sie, dass die Ergebnisse der BAL die Erstellung von gezielten Behandlungsplänen ermöglichen, beispielsweise die spezifische Antibiotikatherapie bei bakterieller Infektion oder Maßnahmen bei malignen Befunden.",
            third:
              "Basierend auf den BAL-Ergebnissen haben wir eine gezielte Antibiotikatherapie für den Patienten eingeleitet.",
            fourth:
              "Die Detektion von malignen Zellen in der BAL führte zur Überweisung des Patienten zur weiteren onkologischen Abklärung und Behandlung.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Bedeutung der Zusammenarbeit mit anderen Fachabteilungen wie Mikrobiologie, Pathologie und Onkologie, um eine umfassende Diagnostik und Therapieplanung zu gewährleisten.",
            third:
              "Wir arbeiten eng mit der Mikrobiologie zusammen, um die Ergebnisse der BAL schnell zu erhalten und die Behandlung entsprechend anzupassen.",
            fourth:
              "Die Zusammenarbeit mit der Onkologie ist entscheidend, wenn in der BAL maligne Zellen nachgewiesen werden.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Erläutern Sie die Notwendigkeit von Standardprotokollen zur Durchführung der BAL, regelmäßige Schulungen für das Personal und die Überwachung der Ergebnisse.",
            third:
              "Wir haben Standardprotokolle für die BAL eingeführt, um die Konsistenz und Zuverlässigkeit der Ergebnisse zu gewährleisten.",
            fourth:
              "Regelmäßige Schulungen des Personals und Audits der BAL-Verfahren sind Teil unseres Qualitätsmanagements.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erklären Sie, dass eine ausführliche Dokumentation der BAL-Ergebnisse und eine zeitnahe Kommunikation mit dem behandelnden Arzt notwendig sind, um die weitere Therapie sicherzustellen.",
            third:
              "Alle BAL-Ergebnisse werden umfassend dokumentiert und dem behandelnden Arzt umgehend mitgeteilt.",
            fourth:
              "Die Ergebnisse der BAL werden sorgfältig dokumentiert, um die weitere Behandlung und Nachsorge zu planen und zu überwachen.",
          },
        ],
      },
      // 4tab 178
      {
        id: 178,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Pathologischer Befund 1 (z.B. Pneumonie)",
          },
          {
            name: "fourth",
            visualText:
              "Pathologischer Befund 2 (z.B. Interstitielle Lungenerkrankung)",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall",
            second:
              "30-jähriger Patient zur Routinekontrolle, keine Symptome und keine auffällige Anamnese.",
            third:
              "55-jähriger Patient mit Fieber, Husten und Atemnot. Vorgeschichte einer COPD.",
            fourth:
              "40-jährige Patientin mit chronischer Atemnot und Husten, keine Raucheranamnese.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "BAL zeigt eine normale Zellzusammensetzung ohne Nachweis von pathogenen Keimen.",
            third:
              "BAL zeigt eine erhöhte Anzahl von neutrophilen Granulozyten und Nachweis von Streptococcus pneumoniae.",
            fourth:
              "BAL zeigt eine erhöhte Anzahl von Lymphozyten und Makrophagen, keine pathogenen Keime nachweisbar.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; der BAL-Befund unterstützt den Ausschluss einer Lungenerkrankung.",
            third:
              "Der Befund deutet auf eine bakterielle Pneumonie hin, passend zur klinischen Symptomatik des Patienten.",
            fourth:
              "Die Befunde sind typisch für eine interstitielle Lungenerkrankung, was die chronische Symptomatik erklärt.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Die Befunde beruhigen den Patienten und bestätigen die Gesundheit der Lunge, keine weiteren Eingriffe notwendig.",
            third:
              "Die Ergebnisse sind entscheidend für die Einleitung einer gezielten Antibiotikatherapie.",
            fourth:
              "Die Ergebnisse unterstützen die Diagnose und die Einleitung einer immunsuppressiven Therapie.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Lunge, keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose einer bakteriellen Pneumonie basierend auf BAL-Befunden und klinischem Bild.",
            fourth:
              "Diagnose einer interstitiellen Lungenerkrankung aufgrund der BAL-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "BAL zeigt klare, normal aussehende Flüssigkeit ohne Auffälligkeiten.",
            third: "BAL zeigt trübe Flüssigkeit mit deutlicher Eiterbildung.",
            fourth:
              "BAL zeigt klare Flüssigkeit mit erhöhter Zellzahl, insbesondere Lymphozyten.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige Gesundheitsüberprüfungen zur Vorsorge. Der Patient sollte weiterhin auf seine Lungenfunktion achten, aber derzeit sind keine weiteren Maßnahmen erforderlich.",
            third:
              "Es wird empfohlen, eine Antibiotikatherapie zu beginnen und den Patienten engmaschig zu überwachen, um die Wirksamkeit der Behandlung zu beurteilen. Weitere Kontrolluntersuchungen sind geplant.",
            fourth:
              "Es ist zu empfehlen, eine langfristige immunsuppressive Therapie zu beginnen und regelmäßige Kontrollen durchzuführen, um den Krankheitsverlauf zu beobachten und die Therapie anzupassen.",
          },
        ],
      },
      // 5tab 179
      {
        id: 179,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Diese Liste umfasst die Hauptkomponenten und Funktionen, die für die Durchführung einer bronchoalveolären Lavage erforderlich sind:",
        text_list: [
          {
            bold: "Bronchoskop :",
            other:
              "Ein flexibles, dünnes Instrument, das durch Mund oder Nase in die Atemwege eingeführt wird. Ermöglicht die Visualisierung der Bronchien und die gezielte Entnahme von Proben.",
          },
          {
            bold: "Kochsalzlösung :",
            other:
              "Sterile Kochsalzlösung (0,9% NaCl), die zur Spülung der Atemwege verwendet wird. Wird in definierten Volumina in die Lungensegmente eingebracht und wieder abgesaugt.",
          },
          {
            bold: "Absaugpumpe :",
            other:
              "Ein Gerät, das die injizierte Kochsalzlösung aus den Bronchien absaugt. Sammelt die Spülflüssigkeit in einem sterilen Behälter zur weiteren Analyse.",
          },
          {
            bold: "Sterile Behälter :",
            other:
              "Sammelt die gewonnene Spülflüssigkeit. Werden für den Transport ins Labor verwendet.",
          },
          {
            bold: "Video- und Beleuchtungssystem :",
            other:
              "In das Bronchoskop integriert, um eine klare Sicht auf die Atemwege zu gewährleisten. Erlaubt die Echtzeit-Visualisierung und Aufzeichnung des Verfahrens.",
          },
          {
            bold: "Arbeitsstation :",
            other:
              "Computer und Monitore, auf denen die während der BAL aufgenommenen Bilder angezeigt werden. Ermöglicht die Dokumentation und Analyse der Untersuchungsergebnisse.",
          },
          {
            bold: "Spül- und Absaugsystem :",
            other:
              "Integriert in das Bronchoskop, um die Kochsalzlösung zu injizieren und wieder abzusaugen. Ermöglicht die präzise Steuerung der Flüssigkeitsmengen.",
          },
          {
            bold: "Patientenüberwachungssystem :",
            other:
              "Überwacht die Vitalzeichen des Patienten während der BAL. Stellt sicher, dass der Patient während des Eingriffs stabil bleibt.",
          },
          {
            bold: "Sterile Einwegzubehörteile :",
            other:
              "Einwegspitzen und Schläuche, um das Risiko von Kreuzkontaminationen zu minimieren. Wird nach jedem Eingriff entsorgt.",
          },
          {
            bold: "Sauerstoffversorgungssystem :",
            other:
              "Stellt sicher, dass der Patient während des Eingriffs ausreichend mit Sauerstoff versorgt wird. Kann bei Bedarf zusätzlichen Sauerstoff bereitstellen.",
          },
          {
            bold: "Sedierungs- und Anästhesiemittel :",
            other:
              "Werden verwendet, um den Patienten während des Eingriffs zu beruhigen oder zu betäuben. Ermöglicht eine schmerzfreie und komfortable Durchführung der BAL.",
          },
          {
            bold: "Sterilitätskontrolle :",
            other:
              "Verfahren und Materialien, um die Sterilität während des gesamten Eingriffs zu gewährleisten. Minimiert das Infektionsrisiko.",
          },
        ],
      },
      // 6tab 180
      {
        id: 180,
        title: "Wortschatz",
        text: "Dieser Wortschatz umfasst wesentliche Begriffe und Phrasen für die bronchoalveoläre Lavage und ist hilfreich für die Vorbereitung auf eine Fachsprachprüfung im Bereich der BAL-Diagnostik:",
        text_list: [
          {
            bold: "Bronchoalveoläre Lavage (BAL) :",
            other:
              "Ein diagnostisches Verfahren zur Gewinnung von Flüssigkeitsproben aus den unteren Atemwegen.",
          },
          {
            bold: "Bronchoskop :",
            other:
              "Ein flexibles Instrument zur visuellen Untersuchung der Bronchien und zur Durchführung der BAL.",
          },
          {
            bold: "Kochsalzlösung :",
            other:
              "Sterile Salzlösung (0,9% NaCl), die zur Spülung der Bronchien verwendet wird.",
          },
          {
            bold: "Absaugpumpe :",
            other:
              "Gerät zum Absaugen der injizierten Kochsalzlösung und der gewonnenen Probenflüssigkeit.",
          },
          {
            bold: "Sterile Behälter :",
            other:
              "Behälter zur Sammlung und Lagerung der BAL-Flüssigkeit für die Analyse.",
          },
          {
            bold: "Mikrobiologische Analyse :",
            other:
              "Untersuchung der BAL-Flüssigkeit auf Bakterien, Viren, Pilze und andere Mikroorganismen.",
          },
          {
            bold: "Zytologische Untersuchung :",
            other:
              "Analyse der Zellen in der BAL-Flüssigkeit zur Erkennung von Entzündungen, Infektionen oder malignen Veränderungen.",
          },
          {
            bold: "Lymphozyten :",
            other:
              "Eine Art weißer Blutkörperchen, die in erhöhten Mengen bei bestimmten Lungenerkrankungen vorkommen können.",
          },
          {
            bold: "Neutrophile Granulozyten :",
            other:
              "Weiße Blutkörperchen, deren erhöhter Anteil auf bakterielle Infektionen hinweist.",
          },
          {
            bold: "Sedierung :",
            other:
              "Die Verabreichung von Beruhigungsmitteln, um den Patienten während der BAL ruhig und komfortabel zu halten.",
          },
          {
            bold: "Spülflüssigkeit :",
            other:
              "Die Kochsalzlösung, die in die Bronchien eingeführt und anschließend zur Analyse wieder abgesaugt wird.",
          },
          {
            bold: "Eosinophile Granulozyten :",
            other:
              "Weiße Blutkörperchen, die in erhöhter Zahl bei allergischen Reaktionen oder bestimmten Infektionen auftreten können.",
          },
          {
            bold: "Diagnose :",
            other:
              "Die Erkennung und Benennung einer Krankheit oder eines pathologischen Zustands basierend auf Untersuchungsergebnissen.",
          },
          {
            bold: "Differenzialdiagnose :",
            other:
              "Die Unterscheidung zwischen zwei oder mehr Krankheiten, die ähnliche Symptome verursachen.",
          },
          {
            bold: "Interstitielle Lungenerkrankung :",
            other:
              "Gruppe von Lungenerkrankungen, die durch Entzündungen und Narbenbildung im Lungengewebe gekennzeichnet sind.",
          },
          {
            bold: "Maligne Zellen :",
            other:
              "Krebszellen, die in der BAL-Flüssigkeit nachgewiesen werden können.",
          },
          {
            bold: "Probenentnahme :",
            other:
              "Der Vorgang des Sammelns von biologischem Material für diagnostische Zwecke.",
          },
          {
            bold: "Sterilität :",
            other:
              "Der Zustand der Keimfreiheit, der während der BAL unbedingt eingehalten werden muss.",
          },
          {
            bold: "Komplikationen :",
            other:
              "Unerwünschte Nebenwirkungen oder Probleme, die während oder nach der BAL auftreten können, wie Blutungen oder Infektionen.",
          },
          {
            bold: "Postoperative Betreuung :",
            other:
              "Pflege und Überwachung des Patienten nach der BAL, um eine schnelle Erholung zu gewährleisten.",
          },
          {
            bold: "BAL-Indikation :",
            other:
              "Medizinische Gründe oder Symptome, die die Durchführung einer BAL rechtfertigen.",
          },
        ],
      },
      // 7tab 181
      {
        id: 181,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 182
      {
        id: 182,
        title: "PDF",
        link: "https://drive.google.com/file/d/1In0E5V1zaubqC2lezB-htid_8xt1wRNU/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 21
  // start of parent tab 21 Die bronchoalveoläre Lavage
  {
    id: 21,
    title: "Zystoskopie",
    checked: false,
    childTabs: [
      // 1tab 183
      {
        id: 183,
        title: "Einleitung",
        list: [
          {
            title: "Einleitung",
            items: [
              {
                bold_text: "Ziel und Kontext:",
                text: "Die Zystoskopie wird durchgeführt, um eine Vielzahl von urologischen Beschwerden und Erkrankungen zu diagnostizieren und zu behandeln. Dazu gehören Harnwegsinfektionen, Blasensteine, Tumoren, anatomische Anomalien und Blut im Urin.",
              },
              {
                bold_text: "Relevanz und Anwendungsbereiche:",
                text: "Dieses Verfahren ist besonders relevant bei der Diagnose von Blasenkrebs, Harnröhrenstrikturen und chronischen Blasenentzündungen. Es wird sowohl in der ambulanten Praxis als auch im Krankenhaus angewendet und kann diagnostische sowie therapeutische Maßnahmen umfassen.",
              },
            ],
          },
          {
            title: "Grundprinzipien",
            items: [
              {
                bold_text: "Theoretische Grundlagen:",
                text: "Die Zystoskopie basiert auf der Einführung eines Zystoskops durch die Harnröhre in die Blase, um diese unter direkter Sicht zu untersuchen. Es kann entweder ein starres oder flexibles Zystoskop verwendet werden, je nach Bedarf und Indikation.",
              },
              {
                bold_text: "Technische Aspekte:",
                text: "Das Zystoskop ist ein spezielles Endoskop mit einer Lichtquelle und einer Kamera. Bei der Untersuchung kann sterile Kochsalzlösung verwendet werden, um die Blase zu füllen und die Sicht zu verbessern. Je nach Befund können zusätzliche Instrumente über den Arbeitskanal eingeführt werden, um Biopsien zu entnehmen oder kleinere operative Eingriffe durchzuführen.",
              },
            ],
          },
          {
            title: "Interpretation",
            items: [
              {
                bold_text: "Auswertung und Interpretation:",
                text: "Die Auswertung erfolgt durch die direkte Betrachtung der Blasenschleimhaut und der Harnröhre. Auffällige Befunde wie Tumore, Entzündungen, Blutungen oder anatomische Anomalien werden dokumentiert und gegebenenfalls weiter untersucht.",
              },
              {
                bold_text: "Typische Befunde:",
                text: "Typische Befunde bei einer Zystoskopie können Blasentumore, Harnsteine, Blasendivertikel, Harnröhrenstrikturen und entzündliche Veränderungen der Blasenschleimhaut sein.",
              },
            ],
          },
          {
            title: "Risiken und Vorteile",
            items: [
              {
                bold_text: "Vorteile:",
                text: "Die Zystoskopie ermöglicht eine direkte und detaillierte Untersuchung der Blase und der Harnröhre. Sie kann sowohl diagnostische als auch therapeutische Maßnahmen in einem Verfahren vereinen.",
              },
              {
                bold_text: "Nachteile:",
                text: "Ein Nachteil ist die Invasivität des Verfahrens, die bei einigen Patienten Schmerzen oder Unwohlsein verursachen kann. Auch die Notwendigkeit einer lokalen oder allgemeinen Anästhesie kann als Nachteil angesehen werden.",
              },
              {
                bold_text: "Risiken:",
                text: "Mögliche Risiken umfassen Harnwegsinfektionen, Blutungen, Verletzungen der Harnröhre oder Blase und selten allergische Reaktionen auf verwendete Materialien.",
              },
            ],
          },
          {
            title: "Klinische Bedeutung",
            items: [
              {
                bold_text: "Rolle in der Diagnose und Behandlung:",
                text: "Die Zystoskopie spielt eine zentrale Rolle in der Diagnose und Behandlung vieler urologischer Erkrankungen. Sie ermöglicht eine genaue Diagnosestellung und oft auch sofortige therapeutische Maßnahmen.",
              },
              {
                bold_text: "Wichtigkeit für das Patientenmanagement:",
                text: "Für das Patientenmanagement ist die Zystoskopie von großer Bedeutung, da sie präzise Informationen liefert, die für die weitere Therapieplanung unerlässlich sind.",
              },
            ],
          },
          {
            title: "Alternativen",
            items: [
              {
                bold_text: "",
                text: "Als Alternativen zur Zystoskopie stehen bildgebende Verfahren wie die Sonographie, die MRT und die CT zur Verfügung. Diese Methoden sind jedoch weniger invasiv, bieten aber nicht die gleiche Detailgenauigkeit und therapeutische Möglichkeiten wie die Zystoskopie.",
              },
            ],
          },
          {
            title: "Neueste Forschung",
            items: [
              {
                bold_text: "Aktuelle Erkenntnisse:",
                text: "Aktuelle Forschung konzentriert sich auf die Weiterentwicklung der Zystoskope, um die Bildqualität zu verbessern und die Invasivität zu reduzieren. Auch die Untersuchung von Biomarkern zur frühzeitigen Erkennung von Blasenkrebs ist ein wichtiger Forschungsbereich.",
              },
              {
                bold_text: "Zukünftige Perspektiven:",
                text: "Zukünftige Perspektiven umfassen die Integration von künstlicher Intelligenz zur automatisierten Befundung und die Entwicklung minimalinvasiver Techniken, um die Patientenbelastung weiter zu reduzieren.",
              },
            ],
          },
          {
            title: "Fazit",
            items: [
              {
                bold_text: "Zusammenfassung der Kernbotschaften:",
                text: "Die Zystoskopie ist ein essenzielles Verfahren in der Urologie, das detaillierte Einblicke in die Blase und die Harnröhre bietet. Sie ermöglicht sowohl die Diagnostik als auch die Therapie in einem Eingriff.",
              },
              {
                bold_text: "Gesamtbedeutung:",
                text: "Insgesamt ist die Zystoskopie ein unverzichtbares Instrument in der urologischen Praxis, das eine präzise Diagnose und effiziente Behandlung vieler urologischer Erkrankungen ermöglicht.",
              },
            ],
          },
        ],
      },
      // 2tab 184
      {
        id: 184,
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
              "Erklären Sie, dass die Zystoskopie durchgeführt wird, um die Blase und die Harnröhre zu untersuchen und mögliche Ursachen für Beschwerden wie Blut im Urin, Harnwegsinfektionen oder Schmerzen abzuklären.",
            third:
              "Wir führen diese Untersuchung durch, um die Ursache für Ihr wiederkehrendes Blut im Urin zu finden und sicherzustellen, dass keine ernsthafte Erkrankung vorliegt.",
            fourth:
              "Die Zystoskopie hilft uns, Ihre wiederkehrenden Harnwegsinfektionen zu untersuchen und mögliche anatomische Anomalien zu identifizieren.",
          },
          {
            first: "Ablauf",
            second:
              "Erläutern Sie den Patienten, dass ein dünnes, flexibles Instrument (Zystoskop) durch die Harnröhre in die Blase eingeführt wird, um diese unter direkter Sicht zu untersuchen.",
            third:
              "Wir führen ein dünnes, flexibles Instrument durch Ihre Harnröhre in die Blase ein, um diese genau zu betrachten.",
            fourth:
              "Ein spezielles Endoskop wird durch die Harnröhre in die Blase eingeführt, damit wir die Blasenschleimhaut und andere Strukturen direkt untersuchen können.",
          },
          {
            first: "Vorbereitung",
            second:
              "Erwähnen Sie, dass der Patient vor der Untersuchung möglicherweise nüchtern bleiben und eine lokale oder allgemeine Anästhesie erhalten muss.",
            third:
              "Bitte bleiben Sie ab Mitternacht nüchtern, da Sie eine leichte Narkose erhalten werden.",
            fourth:
              "Sie müssen möglicherweise eine lokale Betäubung erhalten, daher informieren Sie uns bitte, wenn Sie Allergien gegen Betäubungsmittel haben.",
          },
          {
            first: "Risiken",
            second:
              "Betonen Sie die möglichen Risiken wie Infektionen, Blutungen, Schmerzen oder Verletzungen der Harnröhre oder Blase.",
            third:
              "Es besteht ein geringes Risiko für Infektionen oder leichte Blutungen nach dem Eingriff.",
            fourth:
              "Sie könnten nach der Untersuchung ein brennendes Gefühl beim Wasserlassen verspüren, aber das sollte bald abklingen.",
          },
          {
            first: "Vorteile",
            second:
              "Erklären Sie, dass die Zystoskopie eine direkte und genaue Diagnose ermöglicht und oft auch therapeutische Maßnahmen durchgeführt werden können.",
            third:
              "Ein großer Vorteil ist, dass wir direkt sehen können, was in Ihrer Blase vor sich geht, und gegebenenfalls sofort behandeln können.",
            fourth:
              "Dieses Verfahren ermöglicht uns, sehr präzise Diagnosen zu stellen und, falls nötig, sofort kleine Eingriffe durchzuführen.",
          },
          {
            first: "Alternativen",
            second:
              "Erläutern Sie, dass bildgebende Verfahren wie Ultraschall, MRT oder CT zur Verfügung stehen, diese jedoch nicht die gleiche Detailgenauigkeit bieten.",
            third:
              "Alternativ könnten wir einen Ultraschall durchführen, aber dieser zeigt uns nicht die gleichen Details wie die Zystoskopie.",
            fourth:
              "Eine MRT könnte ebenfalls hilfreich sein, aber sie kann nicht die direkte Sicht bieten, die wir durch eine Zystoskopie erhalten.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erwähnen Sie, dass bestimmte Bedingungen wie schwere Harnwegsinfektionen oder Blutgerinnungsstörungen Kontraindikationen darstellen können.",
            third:
              "Wenn Sie aktuell eine schwere Harnwegsinfektion haben, müssen wir die Untersuchung möglicherweise verschieben.",
            fourth:
              "Bei Blutgerinnungsstörungen besteht ein höheres Risiko für Komplikationen, daher müssen wir dies vorher genau abklären.",
          },
          {
            first: "Mögliche Ergebnisse",
            second:
              "Erklären Sie, welche Befunde möglich sind, wie Tumore, Entzündungen, Steine oder anatomische Anomalien.",
            third:
              "Wir könnten Tumore, entzündliche Veränderungen, Blasensteine oder anatomische Anomalien finden.",
            fourth:
              "Mögliche Ergebnisse sind zum Beispiel Entzündungen der Blasenschleimhaut oder das Vorhandensein von Blasentumoren.",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second:
              "Betonen Sie die Notwendigkeit des informierten Einverständnisses des Patienten vor der Durchführung der Untersuchung.",
            third:
              "Es ist wichtig, dass Sie alle Informationen verstehen und Ihr Einverständnis geben, bevor wir mit der Untersuchung beginnen.",
            fourth:
              "Ihr schriftliches Einverständnis ist notwendig, damit wir sicherstellen können, dass Sie die Untersuchung und die möglichen Risiken vollständig verstanden haben.",
          },
          {
            first: "Erhalt des Einverständnisses",
            second:
              "Erläutern Sie, wie das Einverständnis eingeholt wird, durch eine ausführliche Aufklärung des Patienten über den Ablauf, die Risiken und Vorteile der Untersuchung.",
            third:
              "Wir werden Ihnen alle Details des Verfahrens erklären und Ihre Fragen beantworten, bevor Sie das Einverständnisformular unterschreiben.",
            fourth:
              "Nachdem wir das Verfahren, die Risiken und Vorteile ausführlich besprochen haben, bitten wir Sie, das Einverständnisformular zu unterzeichnen.",
          },
          {
            first: "Abschließende Hinweise",
            second:
              "Geben Sie dem Patienten abschließende Hinweise zur Nachsorge und Verhalten nach der Untersuchung, wie beispielsweise das Trinken von viel Wasser zur Vermeidung von Infektionen.",
            third:
              "Trinken Sie bitte viel Wasser nach der Untersuchung, um das Risiko einer Infektion zu verringern.",
            fourth:
              "Vermeiden Sie körperliche Anstrengung für 24 Stunden nach der Untersuchung und trinken Sie reichlich Flüssigkeit.",
          },
          {
            first: "Information über Ergebnisse",
            second:
              "Informieren Sie den Patienten, dass die Ergebnisse der Zystoskopie im Anschluss an die Untersuchung mit ihm besprochen werden und weitere Schritte je nach Befund geplant werden.",
            third:
              "Wir werden die Ergebnisse sofort nach der Untersuchung mit Ihnen besprechen und die nächsten Schritte planen.",
            fourth:
              "Nach der Untersuchung werden wir Sie über die Befunde informieren und falls nötig, die nächsten diagnostischen oder therapeutischen Schritte besprechen.",
          },
        ],
      },
      // 3tab 185
      {
        id: 185,
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
              "Erklären Sie dem Kollegen, dass es sich bei der Zystoskopie um eine endoskopische Untersuchung der Harnblase und der Harnröhre handelt, bei der ein Zystoskop verwendet wird, um direkte visuelle Diagnostik und gegebenenfalls therapeutische Maßnahmen durchzuführen.",
            third:
              "Die Zystoskopie ist eine endoskopische Untersuchung der Blase und Harnröhre mittels eines Zystoskops, das es uns ermöglicht, diese Strukturen direkt zu inspizieren und bei Bedarf therapeutisch zu intervenieren.",
            fourth:
              "Es handelt sich um eine minimalinvasive Methode, bei der ein flexibles oder starres Endoskop durch die Harnröhre in die Blase eingeführt wird, um eine direkte Sicht auf die Schleimhäute zu ermöglichen.",
          },
          {
            first: "Was können wir damit untersuchen",
            second:
              "Erläutern Sie, dass die Zystoskopie zur Untersuchung von Blasen- und Harnröhrenanomalien wie Tumoren, Steinen, Strikturen und Entzündungen dient.",
            third:
              "Mit der Zystoskopie können wir Anomalien wie Blasentumoren, Harnröhrenstrikturen, Blasensteine und entzündliche Prozesse identifizieren.",
            fourth:
              "Diese Untersuchung ermöglicht uns, sowohl strukturelle als auch entzündliche Veränderungen der Blase und Harnröhre zu diagnostizieren.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Besprechen Sie die typischen Befunde wie Tumore, Blasensteine, Entzündungen, Divertikel und Harnröhrenstrikturen sowie deren diagnostische und therapeutische Konsequenzen.",
            third:
              "Typische Befunde können Blasentumore, die wir zur Biopsie entnehmen können, oder Harnröhrenstrikturen sein, die wir sofort dilatieren können.",
            fourth:
              "Wir können Blasensteine identifizieren und entfernen oder entzündliche Veränderungen diagnostizieren und gegebenenfalls Biopsien nehmen.",
          },
          {
            first: "Indikationen",
            second:
              "Erwähnen Sie, dass Indikationen für die Zystoskopie u.a. persistierende Hämaturie, wiederkehrende Harnwegsinfektionen, Verdacht auf Blasentumoren und Harnröhrenanomalien sind.",
            third:
              "Indikationen umfassen anhaltende Blutungen im Urin, wiederkehrende Infektionen, verdächtige Läsionen im Ultraschall und Symptome einer Harnröhrenobstruktion.",
            fourth:
              "Bei Patienten mit wiederholten Harnwegsinfektionen oder Verdacht auf Blasenkrebs wird eine Zystoskopie dringend empfohlen.",
          },
          {
            first: "Kontraindikationen",
            second:
              "Erklären Sie, dass Kontraindikationen schwere Harnwegsinfektionen, akute Harnröhrenverletzungen und ausgeprägte Blutgerinnungsstörungen umfassen.",
            third:
              "Schwere Infektionen der Harnwege oder akute Verletzungen der Harnröhre stellen Kontraindikationen dar.",
            fourth:
              "Bei Patienten mit erheblichen Gerinnungsstörungen müssen wir besonders vorsichtig sein oder alternative diagnostische Methoden in Betracht ziehen.",
          },
          {
            first: "Differenzialdiagnosen",
            second:
              "Diskutieren Sie mögliche Differenzialdiagnosen bei den zu untersuchenden Symptomen, wie zum Beispiel Nephrolithiasis, interstitielle Zystitis und Prostatavergrößerung.",
            third:
              "Differenzialdiagnosen umfassen Nephrolithiasis, die durch Bildgebung bestätigt werden könnte, und interstitielle Zystitis, die durch Biopsie diagnostiziert werden kann.",
            fourth:
              "Neben Blasentumoren sollten wir auch an chronische Blasenentzündungen oder eine vergrößerte Prostata denken, die ähnliche Symptome hervorrufen können.",
          },
          {
            first: "Behandlungspläne",
            second:
              "Erläutern Sie, wie die Ergebnisse der Zystoskopie in die weiteren Behandlungspläne integriert werden können, einschließlich operativer Eingriffe oder medikamentöser Therapien.",
            third:
              "Die Ergebnisse der Zystoskopie helfen uns, die Notwendigkeit für operative Eingriffe wie die Resektion eines Tumors oder die Dilatation einer Striktur zu bestimmen.",
            fourth:
              "Basierend auf den Befunden können wir medikamentöse Therapien gegen Infektionen oder Entzündungen einleiten und weitere diagnostische Tests planen.",
          },
          {
            first: "Interprofessionelle Zusammenarbeit",
            second:
              "Betonen Sie die Wichtigkeit der Zusammenarbeit mit Radiologen, Pathologen und Onkologen bei der Diagnose und Behandlung der durch Zystoskopie entdeckten Erkrankungen.",
            third:
              "Eine enge Zusammenarbeit mit Radiologen für die Bildgebung und Pathologen für die Histologie ist unerlässlich, um eine genaue Diagnose zu stellen.",
            fourth:
              "Bei der Behandlung von Blasentumoren arbeiten wir eng mit Onkologen zusammen, um eine umfassende Therapie zu gewährleisten.",
          },
          {
            first: "Qualitätsmanagement",
            second:
              "Diskutieren Sie, wie die Qualität der Zystoskopieprozeduren durch regelmäßige Schulungen, standardisierte Protokolle und Qualitätssicherungsmaßnahmen gewährleistet wird.",
            third:
              "Regelmäßige Schulungen des Personals und die Anwendung standardisierter Protokolle sind entscheidend für die Aufrechterhaltung hoher Qualitätsstandards.",
            fourth:
              "Qualitätssicherungsmaßnahmen wie regelmäßige Überprüfungen und Feedbackschleifen helfen, die Prozeduren stetig zu verbessern.",
          },
          {
            first: "Dokumentation und Weiterverfolgung",
            second:
              "Erklären Sie, wie die Befunde der Zystoskopie detailliert dokumentiert werden sollten und welche Schritte zur Nachverfolgung und weiteren Betreuung der Patienten notwendig sind.",
            third:
              "Eine detaillierte Dokumentation der Befunde in der Patientenakte ist wichtig, und es sollten klare Nachverfolgungspläne erstellt werden, einschließlich Kontrollterminen.",
            fourth:
              "Wir müssen sicherstellen, dass alle Befunde dokumentiert und der Patient über die nächsten Schritte, wie Kontrolluntersuchungen oder weitere Behandlungen, informiert wird.",
          },
        ],
      },
      // 4tab 186
      {
        id: 186,
        title: "Die pathologische Befunden und Normalbefund",
        tableColumns: [
          { name: "first", visualText: "" },
          { name: "second", visualText: "Normaler Befund" },
          {
            name: "third",
            visualText: "Pathologischer Befund 1 (z.B. Blasentumor)",
          },
          {
            name: "fourth",
            visualText: "Pathologischer Befund 2 (z.B. Blasensteine)",
          },
        ],
        tableRows: [
          {
            first: "Einführung in den klinischen Fall",
            second:
              "35-jähriger Patient ohne Beschwerden, Routinekontrolle ohne auffällige Vorgeschichte.",
            third:
              "60-jähriger Patient klagt über Blut im Urin und Schmerzen beim Wasserlassen. Keine relevante Vorgeschichte.",
            fourth:
              "45-jährige Patientin berichtet über wiederkehrende Harnwegsinfektionen und Schmerzen im Unterbauch.",
          },
          {
            first: "Ergebnisse der Untersuchung",
            second:
              "Zystoskopie zeigt eine glatte, rosa Blasenschleimhaut ohne Anomalien.",
            third:
              "Zystoskopie zeigt eine 3 cm große, unregelmäßige, leicht blutende Masse an der Blasenwand.",
            fourth:
              "Zystoskopie zeigt mehrere kleine, harte, weißliche Blasensteine in der Blase.",
          },
          {
            first: "Interpretation der Ergebnisse",
            second:
              "Keine pathologischen Befunde; das Ergebnis unterstützt den Ausschluss urologischer Erkrankungen.",
            third:
              "Der Befund deutet auf einen Blasentumor hin. Die Lokalisation und das Erscheinungsbild korrelieren mit den Symptomen des Patienten.",
            fourth:
              "Die Steine verursachen mechanische Reizung und könnten für die wiederkehrenden Infektionen verantwortlich sein.",
          },
          {
            first: "Integration in die Patientenversorgung",
            second:
              "Befund dient der Beruhigung des Patienten und vermeidet unnötige medizinische Eingriffe.",
            third:
              "Die Ergebnisse sind entscheidend für die Planung einer transurethralen Resektion und gegebenenfalls weiterer onkologischer Therapien.",
            fourth:
              "Wichtig für die Planung der Entfernung der Steine mittels Zystolitholapaxie und Vorbeugung weiterer Steinbildung.",
          },
          {
            first: "Diagnose",
            second:
              "Bestätigung des gesunden Zustandes der Blase. Keine Anzeichen für pathologische Veränderungen.",
            third:
              "Diagnose eines Blasentumors basierend auf Zystoskopie-Befunden und klinischem Bild.",
            fourth:
              "Diagnose von Blasensteinen aufgrund der Zystoskopie-Ergebnisse und Symptomatik.",
          },
          {
            first: "Visuelle Hilfsmittel",
            second:
              "Homogene Blasenschleimhaut ohne Auffälligkeiten in allen Bereichen.",
            third:
              "Zystoskopische Aufnahmen zeigen eine unregelmäßige, hypervaskularisierte Masse an der Blasenwand.",
            fourth:
              "Zystoskopische Aufnahmen zeigen mehrere kleine, harte Steine, die in der Blase verteilt sind.",
          },
          {
            first: "Fallabschluss",
            second:
              "Wir empfehlen regelmäßige gesundheitliche Überprüfungen und jährliche Vorsorgeuntersuchungen. Es ist zu empfehlen, weiterhin auf Symptome zu achten und bei Veränderungen sofort einen Arzt zu konsultieren.",
            third:
              "Es ist zu empfehlen, die Blasensteine mittels Zystolitholapaxie zu entfernen. Zusätzlich sollten präventive Maßnahmen zur Vermeidung weiterer Steinbildung, wie ausreichende Flüssigkeitszufuhr und Ernährungsanpassungen, besprochen werden. Regelmäßige Kontrollen sind ebenfalls wichtig.",
            fourth:
              "Es ist zu empfehlen, die Blasensteine mittels Zystolitholapaxie zu entfernen. Zusätzlich sollten präventive Maßnahmen zur Vermeidung weiterer Steinbildung, wie ausreichende Flüssigkeitszufuhr und Ernährungsanpassungen, besprochen werden. Regelmäßige Kontrollen sind ebenfalls wichtig.",
          },
        ],
      },
      // 5tab 187
      {
        id: 187,
        title: "Gerätbeschreibung",
        img: child_tab_img_1,
        text: "Diese Liste umfasst die Hauptkomponenten und Funktionen, die für die Durchführung einer bronchoalveolären Lavage erforderlich sind:",
        text_list: [
          {
            bold: "Zystoskop :",
            other:
              "Das Hauptinstrument der Zystoskopie, ein dünnes, flexibles oder starres Rohr, das mit einer Lichtquelle und einer Kamera ausgestattet ist. Das Zystoskop wird durch die Harnröhre in die Blase eingeführt.",
          },
          {
            bold: "Lichtquelle :",
            other:
              "Eine starke Lichtquelle, die über Glasfasern oder LED-Technologie das Innere der Harnröhre und Blase beleuchtet, um eine klare Sicht zu gewährleisten.",
          },
          {
            bold: "Kamera :",
            other:
              "Eine hochauflösende Kamera am Ende des Zystoskops, die Bilder des Harntrakts auf einen Monitor überträgt. Diese Bilder ermöglichen dem Arzt, die inneren Strukturen detailliert zu untersuchen.",
          },
          {
            bold: "Monitor :",
            other:
              "Ein Bildschirm, auf dem die Live-Bilder der Kamera angezeigt werden. Der Arzt beobachtet den Monitor, um die Untersuchung durchzuführen und diagnostische Entscheidungen zu treffen.",
          },
          {
            bold: "Arbeitskanal :",
            other:
              "Ein Kanal im Zystoskop, durch den kleine Instrumente eingeführt werden können, um Gewebeproben zu entnehmen (Biopsie) oder kleinere Eingriffe durchzuführen, wie z.B. das Entfernen von Blasensteinen.",
          },
          {
            bold: "Spül- und Absaugsystem :",
            other:
              "Ein System zur Spülung der Blase mit steriler Flüssigkeit, um eine klare Sicht zu ermöglichen. Überschüssige Flüssigkeit und kleine Partikel werden abgesaugt, um die Sicht nicht zu behindern.",
          },
          {
            bold: "Steuerkonsole :",
            other:
              "Eine Konsole, über die der Arzt das Zystoskop und die angeschlossenen Systeme steuert. Hier können Einstellungen vorgenommen und Funktionen wie Lichtintensität und Kamerafokus angepasst werden.",
          },
          {
            bold: "Flüssigkeitsbehälter :",
            other:
              "Behälter für die sterile Spülflüssigkeit, die während der Zystoskopie in die Blase eingeführt wird.",
          },
          {
            bold: "Biopsiezangen und andere Instrumente :",
            other:
              "Spezielle Werkzeuge, die durch den Arbeitskanal des Zystoskops eingeführt werden können, um Gewebeproben zu entnehmen oder therapeutische Eingriffe durchzuführen.",
          },
          {
            bold: "Desinfektionssystem :",
            other:
              "Ein System zur gründlichen Reinigung und Sterilisation des Zystoskops nach jeder Verwendung, um Infektionen zu verhindern.",
          },
          {
            bold: "Sprachkommunikationssystem :",
            other:
              "Ermöglicht es dem medizinischen Personal, während der Untersuchung mit dem Patienten zu sprechen und Anweisungen zu geben.",
          },
        ],
      },
      // 6tab 188
      {
        id: 180,
        title: "Wortschatz",
        text: "Diese Begriffe und Phrasen sind wesentlich für die Fachsprachenprüfung im Bereich der Zystoskopie-Diagnostik und sollten gründlich verstanden und verwendet werden können.",
        text_list: [
          {
            bold: "Zystoskopie :",
            other: "Endoskopische Untersuchung der Blase und Harnröhre.",
          },
          {
            bold: "Zystoskop :",
            other:
              "Das Instrument, das zur Durchführung der Zystoskopie verwendet wird.",
          },
          {
            bold: "Blasenschleimhaut :",
            other: "Die innere Auskleidung der Blase.",
          },
          {
            bold: "Harnröhre :",
            other:
              "Der Kanal, der den Urin von der Blase nach außen transportiert.",
          },
          {
            bold: "Biopsie :",
            other: "Entnahme von Gewebeproben zur weiteren Untersuchung.",
          },
          {
            bold: "Blasentumor :",
            other:
              "Ein abnormales Wachstum von Zellen in der Blase, das bösartig oder gutartig sein kann.",
          },
          {
            bold: "Blasensteine :",
            other:
              "Verhärtete Ablagerungen aus Mineralien, die sich in der Blase bilden.",
          },
          {
            bold: "Harnröhrenstriktur :",
            other: "Eine Verengung der Harnröhre, die den Urinfluss behindert.",
          },
          {
            bold: "Anästhesie :",
            other:
              "Betäubung, um Schmerzen während der Untersuchung zu vermeiden.",
          },
          {
            bold: "Kontrastmittel :",
            other:
              "Eine Substanz, die verwendet wird, um Strukturen während der Bildgebung sichtbarer zu machen.",
          },
          {
            bold: "Sterile Kochsalzlösung :",
            other:
              "Eine Lösung, die verwendet wird, um die Blase während der Zystoskopie zu füllen und die Sicht zu verbessern.",
          },
          {
            bold: "Resektion :",
            other: "Chirurgische Entfernung von Gewebe, z.B. eines Tumors.",
          },
          {
            bold: "Dilatation :",
            other: "Erweiterung einer verengten Harnröhre.",
          },
          {
            bold: "Hämaturie :",
            other: "Blut im Urin.",
          },
          {
            bold: "Prozedur :",
            other: "Ein medizinischer Eingriff oder eine Untersuchung.",
          },
          {
            bold: "Komplikationen :",
            other:
              "Unerwünschte Ereignisse oder Nebenwirkungen während oder nach einem Eingriff.",
          },
          {
            bold: "Urologie :",
            other:
              "Das medizinische Fachgebiet, das sich mit Erkrankungen des Harntrakts und des männlichen Genitaltrakts beschäftigt.",
          },
          {
            bold: "Nephrolithiasis :",
            other: "Nierensteine.",
          },
          {
            bold: "Interstitielle Zystitis :",
            other: "Chronische Entzündung der Blasenwand.",
          },
          {
            bold: "Pathologischer Befund :",
            other:
              "Diagnose einer Krankheit basierend auf Untersuchungsergebnissen.",
          },
          {
            bold: "Therapieoptionen :",
            other: "Verschiedene Behandlungsmöglichkeiten.",
          },
          {
            bold: "Nachsorge :",
            other:
              "Medizinische Betreuung und Überwachung nach einem Eingriff oder einer Behandlung.",
          },
          {
            bold: "Prognose :",
            other: "Vorhersage über den Verlauf und Ausgang einer Krankheit.",
          },
          {
            bold: "Urinanalyse :",
            other: "Untersuchung des Urins auf Anomalien.",
          },
          {
            bold: "Hydronephrose :",
            other: "Schwellung der Niere aufgrund von Harnstau.",
          },
          {
            bold: "Blasendivertikel :",
            other: "Ausstülpungen der Blasenwand.",
          },
          {
            bold: "Endoskopische Chirurgie :",
            other:
              "Chirurgische Eingriffe, die mit einem Endoskop durchgeführt werden.",
          },
          {
            bold: "Invasiv :",
            other: "Ein medizinisches Verfahren, das in den Körper eingreift.",
          },
          {
            bold: "Minimalinvasiv :",
            other:
              "Ein Verfahren, das so wenig wie möglich in den Körper eingreift.",
          },
          {
            bold: "Blasenkatheter :",
            other:
              "Ein Schlauch, der in die Blase eingeführt wird, um den Urin abzuleiten.",
          },
          {
            bold: "Blasenspiegelung :",
            other: "Ein anderer Begriff für Zystoskopie.",
          },
          {
            bold: "Prostatavergrößerung :",
            other:
              "Vergrößerung der Prostata, die den Harnfluss behindern kann.",
          },
        ],
      },
      // 7tab 189
      {
        id: 181,
        title: "Links",
        text: "",
        text_list: [
          {
            bold_link: "https://www.doccheck.com",
            bold: "DocCheck",
            other:
              "Bietet detaillierte medizinische Informationen, einschließlich Artikel und Community-Diskussionen zu verschiedenen radiologischen Techniken, einschließlich Röntgen.",
          },
          {
            bold_link: "https://www.amboss.com",
            bold: "AMBOSS",
            other:
              "Eine umfassende medizinische Referenzseite, die ausführliche Erklärungen zu medizinischen Verfahren, einschließlich Röntgendiagnostik, bietet.",
          },
          {
            bold_link: "https://www.netdoktor.de/diagnostik/roentgen/",
            bold: "NetDoktor",
            other:
              "Bietet detaillierte Informationen über die Gründe, Verfahren und Risiken von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.stiftung-gesundheitswissen.de/gesundheitsthemen/diagnostik/roentgen/",
            bold: "Stiftung Gesundheitswissen",
            other:
              "Erläutert, wie Röntgen funktioniert, die verschiedenen Formen und was während der Untersuchung zu erwarten ist.",
          },
          {
            bold_link: "https://www.medpertise.de/roentgen/",
            bold: "Medpertise",
            other:
              "Diskutiert verschiedene Anwendungen, Funktionsweisen und den Ablauf von Röntgenuntersuchungen.",
          },
          {
            bold_link:
              "https://www.lifeline.de/untersuchungen/roentgen-id166080.html",
            bold: "Lifeline",
            other:
              "Bietet Informationen zu den Vorteilen, Risiken und Abläufen von Röntgenuntersuchungen, einschließlich spezifischer Formen wie Mammographie und CT-Scans.",
          },
          {
            bold_link: "https://www.praktischarzt.de/roentgen/",
            bold: "PraktischArzt",
            other:
              "Beschreibt den Prozess, die Vorbereitung und die Anwendungen von Röntgen in der medizinischen Diagnostik.",
          },
        ],
      },
      // 8tab 190
      {
        id: 182,
        title: "PDF",
        link: "https://drive.google.com/file/d/1fySNrY2yf3ULuwHllWan-m7ZE39wqzTN/view?usp=share_link",
      },
    ],
  },
  // end of parent tab 21
];
