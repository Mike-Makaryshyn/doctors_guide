import child_tab_img_1 from "../assets/tab_images/child_tab_1.jpg";
import child_tab_img_2 from "../assets/tab_images/child_tab_1.jpg";
import child_tab_img_3 from "../assets/tab_images/child_tab_1.jpg";
// ... for new images

export const parentTabs = [
  // start of parent tab: 1
  {
    id: 1,
    title: "MRT",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 11,
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
          {
            first: "Vorbereitung",

            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Risiken",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Vorteile",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Alternativen",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Kontraindikationen",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Mögliche Ergebnisse",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Wichtigkeit des Einverständnisses",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Erhalt des Einverständnisses",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Abschließende Hinweise",
            second: "",
            third: "",
            fourth: "",
          },
          {
            first: "Information über Ergebnisse",
            second: "",
            third: "",
            fourth: "",
          },
        ],
      },
      // 3tab
      {
        id: 13,
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
        id: 14,
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
      // 5tab
      {
        id: 15,
        title: "tab 5",
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
        ],
      },
      {
        id: 17,
        title: "PDF",
        link: "https://clickdimensions.com/links/TestPDFfile.pdf",
      },
    ],
  },
  // end of parent tab: 1
  // start of parent tab: 2
  {
    id: 2,
    title: "Next",
    checked: false,
    childTabs: [
      // 1tab
      {
        id: 21,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        ],
      },
      // 7tab
      {
        id: 27,
        title: "PDF",
        link: "https://clickdimensions.com/links/TestPDFfile.pdf",
      },
    ],
  },
  // end of parent tab 2
  // start of parent tab 3
];