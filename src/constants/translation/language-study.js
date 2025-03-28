export const LANGUAGE_STUDY_INFO = {
    de: {
      general: {
        title: "Allgemeine Ressourcen",
        vhsDescription:
          "Volkshochschulen (VHS) bieten eine breite Palette von Sprachkursen an.",
        bamfDescription: "Integrationskurse für Migranten vom BAMF.",
        goetheDescription: "Deutschkurse vom Goethe-Institut für alle Niveaus.",
      },
      regional: {
        title: "Regionale Ressourcen",
        // Кожен ключ - це назва регіону після уніфікації (наприклад, "Baden-Württemberg", "Bayern", "Nordrhein-Westfalen" тощо)
        // Всередині - масив шкіл (об'єктів)
        resources: {
          Thüringen: [
            {
              name: "Sprachschule Erfurt",
              address: "Fischmarkt 1, 99084 Erfurt",
              phone: "0361 / 123456",
              email: "info@sprachschule-erfurt.de",
              description: "Kurse für allgemeines und medizinisches Deutsch.",
            },
          ],
          Bayern: [
            {
              name: "Sprachschule München",
              address: "Marienplatz 5, 80331 München",
              phone: "089 / 987654",
              email: "kontakt@muenchen-sprachschule.de",
              description: "Intensivkurse für Pflegekräfte und Ärzte.",
            },
          ],
          "Baden-Württemberg": [
            {
              name: "Sprachinstitut Stuttgart",
              address: "Königstraße 20, 70173 Stuttgart",
              phone: "0711 / 223344",
              email: "info@stuttgart-sprachinstitut.de",
              description: "Spezialisiert auf medizinische Fachsprache.",
            },
          ],
          Berlin: [
            {
              name: "Deutschkurs Berlin",
              address: "Alexanderplatz 4, 10178 Berlin",
              phone: "030 / 555666",
              email: "berlin@sprachschule.de",
              description: "Allgemeine Deutschkurse A1-C1.",
            },
          ],
          "Nordrhein-Westfalen": [
            {
              name: "Sprachakademie Köln",
              address: "Domstraße 10, 50667 Köln",
              phone: "0221 / 123123",
              email: "info@sprachakademie-koeln.de",
              description: "Berufssprachkurse für Gesundheitsberufe.",
            },
          ],
          // ... додавай інші регіони за потреби ...
        },
      },
    },
    // Якщо потрібно, можеш додати інші мови (uk, en тощо)
  };