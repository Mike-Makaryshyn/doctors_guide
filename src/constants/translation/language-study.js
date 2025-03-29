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
        "Baden-Württemberg": [
          {
            name: "Sprachschule Aktiv Stuttgart",
            address: "Schlossstraße 49, 70174 Stuttgart",
            website: "sprachschule-aktiv.de/stuttgart",
            email: "stuttgart@sprachschule-aktiv.de",
            phone: "0711/45140520",
          },
          {
            name: "Berlitz Stuttgart",
            address: "Königstraße 40, 70173 Stuttgart",
            website: "berlitz.de/stuttgart",
            email: "stuttgart@berlitz.de",
            phone: "0711 2229520",
          },
        ],
        "Bayern": [
          {
            name: "Goethe-Institut München",
            address: "Rablstraße 24, 81669 München",
            website: "goethe.de/muenchen",
            email: "kundenservice-d@goethe.de",
            phone: "089 12223 1222",
          },
          {
            name: "DeutschAkademie München",
            address: "Schwanthalerstraße 10, 80336 München",
            website: "deutschakademie.de",
            email: "muenchen@deutschakademie.de",
            phone: "089 599 899 60",
          },
        ],
        "Berlin": [
          {
            name: "Hartnackschule Berlin",
            address: "Motzstraße 5, 10777 Berlin",
            website: "hartnackschule-berlin.de",
            email: "info@hartnackschule-berlin.de",
            phone: "030 210 21930",
          },
          {
            name: "speakeasy Berlin",
            address: "Warschauer Straße 34–38, 10243 Berlin",
            website: "speakeasy.berlin",
            email: "info@speakeasy.berlin",
            phone: "030 60954149",
          },
        ],
        "Brandenburg": [
          {
            name: "VHS Potsdam",
            address: "Am Kanal 47, 14467 Potsdam",
            website: "vhs.potsdam.de",
            email: "vhsinfo@rathaus.potsdam.de",
            phone: "0331 289-4566",
          },
          {
            name: "Euro-Schulen Potsdam",
            address: "Friedrich-Ebert-Str. 113 A, 14467 Potsdam",
            website: "euro-schulen.de/potsdam",
            email: "potsdam@eso.de",
            phone: "0331 23186590",
          },
        ],
        "Bremen": [
          {
            name: "CASA Internationale Sprachschule Bremen",
            address: "Am Dobben 14–16, 28203 Bremen",
            website: "casa-bremen.de",
            email: "info@casa-bremen.de",
            phone: "0421 46041430",
          },
          {
            name: "Sprachschule Aktiv Bremen",
            address: "Pieperstraße 1–3, 28195 Bremen",
            website: "sprachschule-aktiv-bremen.de",
            email: "info@sprachschule-aktiv-bremen.de",
            phone: "0176 30769381",
          },
        ],
        "Hamburg": [
          {
            name: "Colón Language Center Hamburg",
            address: "Colonnaden 96, 20354 Hamburg",
            website: "colon.de",
            email: "info@colon.de",
            phone: "040 345850",
          },
          {
            name: "inlingua Hamburg",
            address: "Amsinckstraße 28, 20097 Hamburg",
            website: "inlingua-hamburg.de",
            email: "info@inlingua-hamburg.de",
            phone: "040 3258870",
          },
        ],
        "Hessen": [
          {
            name: "Goethe-Institut Frankfurt am Main",
            address: "Diesterwegplatz 72, 60594 Frankfurt am Main",
            website: "goethe.de/frankfurt",
            email: "frankfurt@goethe.de",
            phone: "069 961227-0",
          },
          {
            name: "did deutsch-institut Frankfurt",
            address: "Gutleutstraße 32, 60329 Frankfurt am Main",
            website: "did.de",
            email: "office@did.de",
            phone: "069 24004560",
          },
        ],
        "Mecklenburg-Vorpommern": [
          {
            name: "inlingua Rostock",
            address: "Herweghstraße 1, 18055 Rostock",
            website: "inlingua-rostock.de",
            email: "info@inlingua-rostock.de",
            phone: "0381 2429224",
          },
        ],
        "Niedersachsen": [
          {
            name: "ISK Hannover",
            address: "Lützowstraße 7, 30159 Hannover",
            website: "isk-hannover.de",
            email: "office@isk-hannover.de",
            phone: "0511 12356360",
          },
          {
            name: "Berlitz Hannover",
            address: "Ständehausstraße 2–3, 30159 Hannover",
            website: "berlitz.de",
            email: "hannover1@berlitz.de",
            phone: "0511 327606",
          },
        ],
        "Nordrhein-Westfalen": [
          {
            name: "Carl Duisberg Centrum Köln",
            address: "Hansaring 49–51, 50670 Köln",
            website: "carl-duisberg-sprachkurse.de",
            email: "koeln@cdc.de",
            phone: "0221 1626-0",
          },
        ],
        "Rheinland-Pfalz": [
          {
            name: "Euro-Schulen Mainz",
            address: "Wallstraße 11, 55122 Mainz",
            website: "euro-schulen.de/mainz",
            email: "mainz@eso.de",
            phone: "06131 588440",
          },
        ],
        "Saarland": [
          {
            name: "Berlitz Saarbrücken",
            address: "Bahnhofstraße 77, 66111 Saarbrücken",
            website: "berlitz.de",
            email: "saarbruecken@berlitz.de",
            phone: "0681 389220",
          },
        ],
        "Sachsen": [
          {
            name: "Berlitz Dresden",
            address: "Webergasse 1 (Altmarkt-Galerie, Haus B/2), 01067 Dresden",
            website: "berlitz.de",
            email: "dresden@berlitz.de",
            phone: "0351 4963035",
          },
        ],
        "Sachsen-Anhalt": [
          {
            name: "Euro-Schulen Magdeburg",
            address: "Am Fuchsberg 11, 39112 Magdeburg",
            website: "euro-schulen.de/magdeburg",
            email: "magdeburg@eso.de",
            phone: "0391 6109300",
          },
        ],
        "Schleswig-Holstein": [
          {
            name: "Berlitz Kiel",
            address: "Alter Markt 13 (3. OG), 24103 Kiel",
            website: "berlitz.de",
            email: "kiel@berlitz.de",
            phone: "0431 94414",
          },
        ],
        "Thüringen": [
          {
            name: "Berlitz Erfurt",
            address: "Schlösserstraße 5, 99084 Erfurt",
            website: "berlitz.de",
            email: "erfurt@berlitz.de",
            phone: "0361 5626590",
          },
        ],
      },
    },
  },
  // Weitere Sprachen können hier ergänzt werden
};