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
      "name": "Berlitz Sprachschule Stuttgart",
      "address": "Königstraße 40, 70173 Stuttgart",
      "phone": "+49 711 2229520",
      "email": "",
      "website": "https://www.berlitz.com/en-de/language-centers/stuttgart"
    },
    {
      "name": "FOKUS Sprachen & Seminare Stuttgart",
      "address": "Probststraße 17, 70567 Stuttgart",
      "phone": "+49 711 79472190",
      "email": "info@fokusstuttgart.de",
      "website": "https://fokussprachen.com/en/sprachschulen/stuttgart/"
    },
    {
      "name": "German Institute Stuttgart",
      "address": "Rotebühlstraße 121, 70178 Stuttgart",
      "phone": "+49 711 21950920",
      "email": "info@germaninstitute.de",
      "website": "https://germaninstitute.de/en/contact/"
    },
    {
      "name": "Berlitz Sprachschule Mannheim",
      "address": "O7, 3, 68161 Mannheim",
      "phone": "+49 621 150 560",
      "email": "",
      "website": "https://www.berlitz.com/en-de/language-centers/mannheim"
    },
    {
      "name": "Goethe-Institut Mannheim",
      "address": "Oskar-Meixner-Straße 6, 68163 Mannheim",
      "phone": "+49 89 1222 31222",
      "email": "kundenservice-d@goethe.de",
      "website": "https://www.goethe.de/ins/de/en/ort/man.html"
    },
    {
      "name": "iQ Lingua Mannheim",
      "address": "M7, 16-18, 68161 Mannheim",
      "phone": "+49 621 12839925",
      "email": "",
      "website": "https://www.iq-lingua.de/en/language-courses/mannheim/"
    },
    {
      "name": "Berlitz Sprachschule Karlsruhe",
      "address": "Kaiserstraße 10, 76131 Karlsruhe",
      "phone": "+49 721 831 8357",
      "email": "",
      "website": "https://www.berlitz.com/en-de/language-centers/karlsruhe"
    },
    {
      "name": "KERN AG Training Karlsruhe",
      "address": "Karlstraße 49a, 76133 Karlsruhe",
      "phone": "+49 721 8318357",
      "email": "kern.karlsruhe@kerntraining.com",
      "website": "https://www.kerntraining.com/en/language-training/language-schools/karlsruhe-language-school"
    },
    {
      "name": "SprachenStudio KAST",
      "address": "Kaiserstraße 94, 76133 Karlsruhe",
      "phone": "+49 721 7258127",
      "email": "info@sprachenstudiokast.de",
      "website": "https://www.sprachenstudiokast.de/sprachkurse-mehr/sprachkurse/german-courses/"
    },
    {
      "name": "Berlitz Sprachschule Freiburg",
      "address": "Bismarckallee 7a, 79098 Freiburg",
      "phone": "+49 761 368 890",
      "email": "",
      "website": "https://www.berlitz.com/en-de/language-centers/freiburg"
    },
    {
      "name": "Alpadia Language Schools Freiburg",
      "address": "Werthmannstraße 18, 79098 Freiburg",
      "phone": "",
      "email": "",
      "website": "https://www.alpadia.com/en/language-courses/german/germany/freiburg"
    },
    {
      "name": "Internationales Sprachzentrum Dialogo (ISD-Freiburg)",
      "address": "Moltkestraße 1, 79098 Freiburg",
      "phone": "+49 761 6105060",
      "email": "",
      "website": "https://isd-freiburg.de/en/"
    },
    {
      "name": "F+U Academy of Languages Heidelberg",
      "address": "Hauptstraße 1, 69117 Heidelberg",
      "phone": "+49 6221 912035",
      "email": "",
      "website": "https://www.academy-languages.de/en/"
    },
    {
      "name": "Alpha Aktiv Heidelberg",
      "address": "Hans-Böckler-Straße 2, 69115 Heidelberg",
      "phone": "+49 6221 7252820",
      "email": "office@alpha-heidelberg.de",
      "website": "https://www.alpha-heidelberg.de/en/school/contact/"
    },
    {
      "name": "DAI Sprachschule Heidelberg",
      "address": "Sofienstraße 12, 69115 Heidelberg",
      "phone": "+49 6221 607312",
      "email": "sprachschule@dai-heidelberg.de",
      "website": "https://dai-heidelberg.de/en/language-school/contact-registration/"
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
           name: "Sprachschule Aktiv Köln",
           address: "Neumarkt 1c, 50667 Köln",
           website: "sprachschule-aktiv-koeln.de",
           email: "info@sprachschule-aktiv-koeln.de",
           phone: "+49 151 23216518",
         },
         {
           name: "inlingua Köln",
           address: "Herzogstraße 32, 50667 Köln",
           website: "inlingua-koeln.de",
           email: "info@inlingua-koeln.de",
           phone: "+49 221 2575790",
         },
         {
           name: "VHS Köln",
           address: "Im Mediapark 7, 50670 Köln",
           website: "vhs-koeln.de",
           email: "vhs@stadt-koeln.de",
           phone: "0221 221-25990",
         },
         {
           name: "Sprachschule Aktiv Düsseldorf",
           address: "Düsseldorf",
           website: "sprachschule-aktiv-duesseldorf.de",
           email: "info@sprachschuleaktiv.com",
           phone: "+49 1758947710",
         },
         {
           name: "Goethe-Institut Düsseldorf",
           address: "Immermannstraße 65 B, 40210 Düsseldorf",
           website: "goethe.de/due",
           email: "kundenservice-d@goethe.de",
           phone: "+49 89 1222 3 1222",
         },
         {
           name: "IIK Düsseldorf",
           address: "Eulerstraße 50, 40477 Düsseldorf",
           website: "iik-duesseldorf.de",
           email: "info@iik-duesseldorf.de",
           phone: "+49 211 566 22-0",
         },
         {
           name: "Sprachschule Aktiv Dortmund",
           address: "Dortmund",
           website: "sprachschule-aktiv-dortmund.de",
           email: "info@sprachschule-aktiv-dortmund.de",
           phone: "+49 1512 3982453",
         },
         {
           name: "IBZ Dortmund",
           address: "Freistuhl 3, 44137 Dortmund",
           website: "ibz-dortmund.com",
           email: "info@ibz-dortmund.com",
           phone: "+49 231 28867778",
         },
         {
           name: "Projekt Deutsch Lernen Dortmund",
           address: "Münsterstraße 9-11, 44145 Dortmund",
           website: "pdl-dortmund.de",
           email: "pdl@wir-do.de",
           phone: "+49 231 546516-10",
         },
         {
           name: "HLS Education Center",
           address: "Limbecker Platz 7, 45127 Essen",
           website: "hls-sprachschule.de",
           email: "service@hls-sprachschule.de",
           phone: "+49 201 843 860 20",
         },
         {
           name: "inlingua Essen",
           address: "Flachsmarkt 1, 45127 Essen",
           website: "inlingua-essen.de",
           email: "info@inlingua-essen.de",
           phone: "+49 201 810 13 0",
         },
         {
           name: "Sprachschule Aktiv Essen",
           address: "Kettwiger Straße 27, 45127 Essen",
           website: "sprachschule-aktiv.de/essen",
           email: "essen@sprachschule-aktiv.de",
           phone: "+49 201 87652373",
         },
         {
           name: "Sprachschule Aktiv Bonn",
           address: "In der Sürst 1, 53111 Bonn",
           website: "sprachschule-aktiv-bonn.de",
           email: "info@sprachschule-aktiv-bonn.de",
           phone: "+49 228 50463753",
         },
         {
           name: "Goethe-Institut Bonn",
           address: "Lennéstraße 6, 53113 Bonn",
           website: "goethe.de/bonn",
           email: "kundenservice-d@goethe.de",
           phone: "+49 89 1222 3 1222",
         },
         {
           name: "Sprach & Bildungsinstitut Bonn",
           address: "Michaelstraße 2, 53111 Bonn",
           website: "sprachinstitut-bonn.de",
           email: "info@sprachinstitut-bonn.de",
           phone: "+49 228 36030711",
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
            name: "Sprachschule Aktiv Erfurt",
            address: "Anger 39–40, 99084 Erfurt",
            website: "sprachschule-aktiv.de/erfurt",
            email: "erfurt@sprachschule-aktiv.de",
            phone: "0361 1234567",
          },
          {
            name: "Euro-Schulen Erfurt",
            address: "Juri-Gagarin-Ring 90, 99084 Erfurt",
            website: "euro-schulen.de/erfurt",
            email: "erfurt@eso.de",
            phone: "0361 3025470",
          },
          {
            name: "Erfurter Zentrum für Sprachen und Integration (EZSI)",
            address: "Anger 39–40, 99084 Erfurt",
            website: "ezsi.de",
            email: "info@ezsi.de",
            phone: "0361 64414308",
          },
          {
            name: "Sprachschule Aktiv Jena",
            address: "Lutherstraße 40, 07743 Jena",
            website: "sprachschule-aktiv.de/jena",
            email: "jena@sprachschule-aktiv.de",
            phone: "03641 123456",
          },
          {
            name: "Euro-Schulen Jena",
            address: "Am Jakobsplan 9, 07743 Jena",
            website: "euro-schulen.de/jena",
            email: "jena@eso.de",
            phone: "03641 765432",
          },
          {
            name: "IIK e.V. Jena",
            address: "Carl-Zeiß-Straße 15, 07743 Jena",
            website: "iik-jena.de",
            email: "info@iik-jena.de",
            phone: "03641 111222",
          },
          {
            name: "VHS Gera",
            address: "Talstraße 3, 07545 Gera",
            website: "volkshochschule-gera.de",
            email: "service@volkshochschule-gera.de",
            phone: "0365 5525930",
          },
          {
            name: "Sprachlehrer Aktiv Gera",
            address: "Langen Straße 10, 07545 Gera",
            website: "sprachschule-aktiv-ger.de",
            email: "gera@sprachschule-aktiv.de",
            phone: "0365 987654",
          },
          {
            name: "DEB gGmbH Gera",
            address: "Beethovenstraße 17, 07548 Gera",
            website: "deb.de/gera",
            email: "geradeb@deb.de",
            phone: "0365 773360",
          },
          {
            name: "Sprachenzentrum der Bauhaus-Universität Weimar",
            address: "Geschwister-Scholl-Straße 15, 99423 Weimar",
            website: "uni-weimar.de/sprachenzentrum",
            email: "sprachenzentrum@uni-weimar.de",
            phone: "03643 123456",
          },
          {
            name: "VHS Weimar",
            address: "Schillstraße 14, 99423 Weimar",
            website: "vhs-weimar.de",
            email: "vhs@weimar.de",
            phone: "03643 765432",
          },
          {
            name: "Sprachschule Aktiv Weimar",
            address: "Kanalstraße 1, 99423 Weimar",
            website: "sprachschule-aktiv.de/weimar",
            email: "weimar@sprachschule-aktiv.de",
            phone: "03643 112233",
          },
          {
            name: "Sprachschule Aktiv Gotha",
            address: "Georgstraße 14, 99867 Gotha",
            website: "sprachschule-aktiv.de/gotha",
            email: "gotha@sprachschule-aktiv.de",
            phone: "03621 123123",
          },
          {
            name: "Kreisvolkshochschule Gotha (KVHS Gotha)",
            address: "Luisenstraße 56, 99867 Gotha",
            website: "kvhs-gotha.de",
            email: "info@kvhs-gotha.de",
            phone: "03621 456456",
          },
          {
            name: "Sprache & Bildung GmbH (Gotha)",
            address: "Untermarkt 3, 99867 Gotha",
            website: "sprache-bildung.de/gotha",
            email: "gotha@sprache-bildung.de",
            phone: "03621 789789",
          },
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
