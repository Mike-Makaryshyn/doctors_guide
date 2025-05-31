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
      "name": "inlingua Stuttgart",
      "address": "Nadlerstraße 21, 70173 Stuttgart",
      "phone": "+49 711 2360394",
      "email": "info@inlingua-stuttgart.de",
      "website": "https://www.inlingua-stuttgart.de"
    },
    {
      "name": "VHS Stuttgart (Volkshochschule Stuttgart)",
      "address": "Rotebühlplatz 28, 70173 Stuttgart",
      "phone": "+49 711 1873800",
      "email": "info@vhs-stuttgart.de",
      "website": "https://vhs-stuttgart.de"
    },
    {
      "name": "Sprachschule Aktiv Stuttgart",
      "address": "Schlossstraße 49, 70174 Stuttgart",
      "phone": "0711-45140520",
      "email": "stuttgart@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv.de/stuttgart/en/"
    },
    {
      "name": "Goethe-Institut Freiburg",
      "address": "Wilhelmstraße 17, 79098 Freiburg",
      "phone": "+49 761 386710",
      "email": "freiburg@goethe.de",
      "website": "https://www.goethe.de/ins/de/en/ort/fre.html"
    },
    {
      "name": "inlingua Mannheim",
      "address": "T6 26, 68161 Mannheim",
      "phone": "+49 621 150690",
      "email": "info@inlingua-mannheim.de",
      "website": "https://www.inlingua-mannheim.de"
    },
    {
      "name": "Mannheimer Abendakademie und VHS",
      "address": "U1 16-19, 68161 Mannheim",
      "phone": "+49 621 10760",
      "email": "info@abendakademie-mannheim.de",
      "website": "https://www.abendakademie-mannheim.de"
    },
    {
      "name": "Goethe-Institut Schwäbisch Hall",
      "address": "Am Spitalbach 8, 74523 Schwäbisch Hall",
      "phone": "+49 791 978870",
      "email": "kundenservice@goethe.de",
      "website": "https://www.goethe.de/ins/de/en/ort/hall.html"
    }
  ],
  "Bayern": [
    {
      "name": "inlingua München",
      "address": "Sendlinger-Tor-Platz 6, 80336 München",
      "phone": "+49 89 2311530",
      "email": "info@inlingua-muenchen.de",
      "website": "https://www.inlingua-muenchen.de"
    },
    {
      "name": "Goethe-Institut München",
      "address": "Rablstraße 24, 81669 München",
      "phone": "+49 89 12223 1222",
      "email": "kundenservice-d@goethe.de",
      "website": "https://www.goethe.de/ins/de/en/ort/mue.html"
    },
    {
      "name": "DeutschAkademie München",
      "address": "Schwanthalerstraße 10, 80336 München",
      "phone": "+49 89 59989960",
      "email": "munich@deutschakademie.de",
      "website": "https://www.deutschakademie.de/muenchen"
    },
    {
      "name": "Sprachschule Aktiv München",
      "address": "Heßstraße 90, 80797 München",
      "phone": "+49 89 20062435",
      "email": "info@sprachschule-aktiv-muenchen.de",
      "website": "https://www.sprachschule-aktiv-muenchen.de"
    },
    {
      "name": "Münchner Volkshochschule (VHS München)",
      "address": "Im Mediapark 7, 50670 Köln",
      "phone": "+49 89 22125990",
      "email": "vhs@stadt-koeln.de",
      "website": "https://mvhs.de"
    },
    {
      "name": "TANDEM München e.V.",
      "address": "Kurfürstenplatz 5, 80796 München",
      "phone": "+49 89 280370",
      "email": "info@tandem-muenchen.de",
      "website": "https://www.tandem-muenchen.de"
    },
    {
      "name": "inlingua Nürnberg",
      "address": "Marienstraße 8, 90402 Nürnberg",
      "phone": "+49 911 2405620",
      "email": "info@linguademia.de",
      "website": "https://linguademia.de"
    },

    {
      "name": "Sprachschule Aktiv Nürnberg",
      "address": "Königstraße 40, 90402 Nürnberg",
      "phone": "+49 911 2394872",
      "email": "nuernberg@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv.de/nuernberg"
    },
    {
      "name": "VHS Nürnberg (Volkshochschule Nürnberg)",
      "address": "Lorenzer Platz 12, 90402 Nürnberg",
      "phone": "+49 911 23114830",
      "email": "info@vhs-nuernberg.de",
      "website": "https://vhs-nuernberg.de"
    },
    {
      "name": "inlingua Ingolstadt",
      "address": "Ludwigstraße 18, 85049 Ingolstadt",
      "phone": "+49 841 8851850",
      "email": "sprachkurse@inlingua-ingolstadt.de",
      "website": "https://www.inlingua-ingolstadt.de"
    },
    {
      "name": "inlingua Regensburg",
      "address": "Margaretenstraße 14a, 93047 Regensburg",
      "phone": "+49 941 608280",
      "email": "info@inlingua-regensburg.de",
      "website": "https://www.inlingua-regensburg.de"
    },
    {
      "name": "Münchner Volkshochschule – Gasteig (DaF)",
      "address": "Rosenheimer Straße 5, 81667 München",
      "phone": "+49 89 480066169",
      "email": "daf@mvhs.de",
      "website": "https://mvhs.de"
    }
  ],
  "Berlin": [
    {
      "name": "die deutSCHule Berlin",
      "address": "Karl-Marx-Straße 107, 12043 Berlin",
      "phone": "+49 30 68085223",
      "email": "info@die-deutschule.de",
      "website": "https://www.die-deutschule.de"
    },
    {
      "name": "GLS German Language School Berlin",
      "address": "Kastanienallee 82, 10435 Berlin",
      "phone": "+49 30 78008912",
      "email": "german@gls-berlin.de",
      "website": "https://www.gls-german-courses.de"
    },
    {
      "name": "DeutschAkademie Berlin",
      "address": "Alexanderstraße 9, 10178 Berlin",
      "phone": "+49 30 22908009",
      "email": "berlin@deutschakademie.de",
      "website": "https://www.deutschakademie.de/berlin"
    },

    {
      "name": "Kapitel Zwei Berlin",
      "address": "Am Köllnischen Park 1, 10179 Berlin",
      "phone": "+49 30 54891291",
      "email": "info@kapitel-zwei.de",
      "website": "https://www.kapitel-zwei.de"
    },
    {
      "name": "Goethe-Institut Berlin",
      "address": "Neue Schönhauser Str. 20, 10178 Berlin",
      "phone": "+49 30 259060",
      "email": "kundenservice@goethe.de",
      "website": "https://www.goethe.de/berlin"
    }
  ],
  "Brandenburg": [
    {
      "name": "inlingua Potsdam",
      "address": "Charlottenstraße 42, 14467 Potsdam",
      "phone": "+49 331 7048750",
      "email": "info@inlingua-potsdam.de",
      "website": "https://www.inlingua-potsdam.de"
    },
    {
      "name": "VHS Potsdam (Volkshochschule Potsdam)",
      "address": "Am Kanal 47, 14467 Potsdam",
      "phone": "+49 331 2894566",
      "email": "vhs@potsdam.de",
      "website": "https://vhs.potsdam.de/deutsch-als-fremdsprache/"
    },
    {
      "name": "Euro-Schulen Potsdam",
      "address": "Friedrich-Ebert-Str. 113A, 14467 Potsdam",
      "phone": "+49 331 23186590",
      "email": "potsdam@eso.de",
      "website": "https://www.euro-schulen.de/potsdam"
    },
    {
      "name": "VHS Cottbus (Volkshochschule Cottbus)",
      "address": "Berliner Straße 13/14, 03046 Cottbus",
      "phone": "+49 355 3806050",
      "email": "volkshochschule@cottbus.de",
      "website": "https://volkshochschule.cottbus.de"
    },
    {
      "name": "Sprachschule Aktiv Cottbus",
      "address": "Cottbus",
      "phone": "",
      "email": "",
      "website": "https://www.sprachschule-aktiv.de/wo-kann-ich-deutsch-lernen-in-deutschland/deutschkurse-in-cottbus/"
    }
  ],
  "Bremen": [
    {
      "name": "inlingua Bremen",
      "address": "Am Wall 119, 28195 Bremen",
      "phone": "+49 421 1690303",
      "email": "info@inlingua-bremen.de",
      "website": "https://www.inlingua-bremen.de"
    },
    {
      "name": "VHS Bremen (Bremer Volkshochschule)",
      "address": "Faulenstraße 69, 28195 Bremen",
      "phone": "+49 421 36112345",
      "email": "info@vhs-bremen.de",
      "website": "https://www.vhs-bremen.de"
    },


    {
      "name": "Sprachcaffe – Sprachcafé Bremer Volkshochschule",
      "address": "Schwachhauser Heerstraße 21, 28209 Bremen",
      "phone": "+49 421 36124465",
      "email": "kontakt@stabi-hb.de",
      "website": "https://stabi-hb.de/en/termine/sprachcafe-12-06-25/"
    },
    {
      "name": "Sprachschule Aktiv Bremen",
      "address": "Hutfilterstraße 16-18, 28195 Bremen",
      "phone": "+49 421 98500340",
      "email": "bremen@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv-bremen.de"
    }
  ],
  "Hamburg": [
    {
      "name": "inlingua Hamburg",
      "address": "Amsinckstraße 28, 20097 Hamburg",
      "phone": "040 32 58 87 0",
      "email": "info@inlingua-hamburg.de",
      "website": "https://www.inlingua-hamburg.de"
    },
    {
      "name": "Speakeasy Hamburg",
      "address": "Lilienstraße 15, 20095 Hamburg",
      "phone": "+49 40 237 24 598 0",
      "email": "info@speakeasy.hamburg",
      "website": "https://www.speakeasy.hamburg"
    },
    {
      "name": "DeutschAkademie Hamburg",
      "address": "Mönckebergstraße 11, 20095 Hamburg",
      "phone": "040 300 393 66",
      "email": "hamburg@deutschakademie.de",
      "website": "https://www.deutschakademie.de/hamburg"
    },
    {
      "name": "Sprachschule Aktiv Hamburg",
      "address": "Bei dem neuen Krahn 2, 20457 Hamburg",
      "phone": "+49 40 52 59 54 54",
      "email": "info@sprachschule-aktiv-hamburg.de",
      "website": "https://www.sprachschule-aktiv-hamburg.de"
    },
    {
      "name": "Colón Language Center Hamburg",
      "address": "Colonnaden 96, 20354 Hamburg",
      "phone": "+49 40 345 850",
      "email": "info@colon.de",
      "website": "https://colon.de"
    },
    {
      "name": "Hamburger Volkshochschule (VHS Hamburg)",
      "address": "Schanzenstraße 75-77, 20357 Hamburg",
      "phone": "040 60929-5555",
      "email": "service@vhs-hamburg.de",
      "website": "https://www.vhs-hamburg.de"
    }
  ],
  "Hessen": [
    {
      "name": "Sprachschule Aktiv Frankfurt",
      "address": "Eschersheimer Landstraße 36, 60322 Frankfurt am Main",
      "phone": "+49 69 90500523",
      "email": "info@sprachschule-aktiv-frankfurt.de",
      "website": "https://www.sprachschule-aktiv.de/frankfurt/en/"
    },
    {
      "name": "Goethe-Institut Frankfurt",
      "address": "Bleichstraße 1, 60313 Frankfurt am Main",
      "phone": "+49 69 155570",
      "email": "kundenservice-d@goethe.de",
      "website": "https://www.goethe.de/ins/de/en/ort/fra.html"
    },
    {
      "name": "did deutsch-institut Frankfurt",
      "address": "Großers Hasenpfad 1, 60598 Frankfurt am Main",
      "phone": "+49 69 24004560",
      "email": "info@did.de",
      "website": "https://www.did.de/frankfurt/"
    },
    {
      "name": "inlingua Wiesbaden",
      "address": "Friedrichstraße 31-33, 65185 Wiesbaden",
      "phone": "+49 611 373005",
      "email": "info@inlingua-wiesbaden.de",
      "website": "https://www.inlingua-wiesbaden.de"
    },
    {
      "name": "VHS Wiesbaden",
      "address": "Alcide-de-Gasperi-Straße 4, 65197 Wiesbaden",
      "phone": "+49 611 98890",
      "email": "anmeldung@vhs-wiesbaden.de",
      "website": "https://www.vhs-wiesbaden.de"
    },
    {
      "name": "iQ Lingua Darmstadt",
      "address": "Ludwigsplatz 3, 64283 Darmstadt",
      "phone": "06151-7864646",
      "email": "info@iq-lingua.de",
      "website": "https://www.iq-lingua.de/en/language-courses/darmstadt/"
    },
    {
      "name": "VHS Darmstadt",
      "address": "Große Bachgasse 2, 64283 Darmstadt",
      "phone": "+49 6151 132786",
      "email": "info@darmstadt-vhs.de",
      "website": "https://www.darmstadt-vhs.de"
    },
    {
      "name": "Berlitz Kassel",
      "address": "Karthäuserstraße 7–9, 34117 Kassel",
      "phone": "+49 561 400700",
      "email": "",
      "website": "https://www.berlitz.com/en-de/language-centers/kassel"
    },
    {
      "name": "Das Spracheninstitut DSI Kassel",
      "address": "Untere Königsstraße 58, 34117 Kassel",
      "phone": "+49 561 72987109",
      "email": "info@spracheninstitut.com",
      "website": "https://www.spracheninstitut.com"
    }
  ],
  "Mecklenburg-Vorpommern": [
    {
      "name": "inlingua Rostock",
      "address": "Herweghstraße 1, 18055 Rostock",
      "phone": "+49 381 242 9224",
      "email": "info@inlingua-rostock.de",
      "website": "https://www.inlingua-rostock.de"
    },
    {
      "name": "VHS Rostock (Volkshochschule Hansestadt Rostock)",
      "address": "Am Kabutzenhof 20a, 18057 Rostock",
      "phone": "+49 381 3814324",
      "email": "petra.suleiman@rostock.de",
      "website": "https://www.rostock.de"
    },
    {
      "name": "Sprachschule Aktiv Rostock",
      "address": "Rostock",
      "phone": "+49 151 23216518",
      "email": "privatunterricht@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv.de/wo-kann-ich-deutsch-lernen-in-deutschland/deutschkurse-in-rostock/"
    },
    {
      "name": "IB-Sprachinstitut Rostock",
      "address": "Albrecht-Tischbein-Straße 60-61, 18109 Rostock",
      "phone": "+49 381 128740711",
      "email": "sprachinstitut-rostock@ib.de",
      "website": "https://www.internationaler-bund.de/standort/210941"
    },

    {
      "name": "Volkshochschule \"Ehm Welk\" Schwerin",
      "address": "Puschkinstraße 13, 19055 Schwerin",
      "phone": "+49 385 591270",
      "email": "info@vhs-schwerin.de",
      "website": "https://www.vhs-schwerin.de"
    }
  ],
  "Niedersachsen": [

    {
      "name": "IIK Hannover",
      "address": "Zur Bettfedernfabrik 1, 30451 Hannover",
      "phone": "+49 511 440484",
      "email": "info@iik-hannover.de",
      "website": "https://web.iik-hannover.de/"
    },
    {
      "name": "VHS Hannover (Volkshochschule Hannover)",
      "address": "Burgstraße 14, 30159 Hannover",
      "phone": "+49 511 168-44783",
      "email": "info@vhs-hannover.de",
      "website": "https://www.vhs-hannover.de"
    },

    {
      "name": "Sprachschule Aktiv Braunschweig",
      "address": "Bruchtorwall 12, 38100 Braunschweig",
      "phone": "+49 531 70139817",
      "email": "info@sprachschule-aktiv-braunschweig.de",
      "website": "https://www.sprachschule-aktiv-braunschweig.de"
    },
    {
      "name": "VHS Braunschweig (Volkshochschule Braunschweig)",
      "address": "Alte Waage 15, 38100 Braunschweig",
      "phone": "+49 531 2412200",
      "email": "info@vhs-braunschweig.de",
      "website": "https://www.vhs-braunschweig.de"
    },
    {
      "name": "TANDEM Göttingen",
      "address": "Am Kauf Park 2, 37079 Göttingen",
      "phone": "+49 551 900360-0",
      "email": "info@tandem-goe.de",
      "website": "https://tandem-personal.com/locations/tandem-goettingen/"
    },
    {
      "name": "VHS Göttingen (Volkshochschule Göttingen Osterode)",
      "address": "Bahnhofsallee 7, 37081 Göttingen",
      "phone": "+49 551 4952-0",
      "email": "info@vhs-goettingen.de",
      "website": "https://vhs-goettingen.de/"
    },
    {
      "name": "Goethe-Institut Göttingen",
      "address": "Jutta-Limbach-Straße 3, 37073 Göttingen",
      "phone": "+49 89 12223-1222",
      "email": "kundenservice-d@goethe.de",
      "website": "https://www.goethe.de/goettingen"
    }
  ],
  "Nordrhein-Westfalen": [
    {
      "name": "inlingua Köln",
      "address": "Herzogstraße 32, 50667 Köln",
      "phone": "+49 221 2575790",
      "email": "info@inlingua-koeln.de",
      "website": "https://www.inlingua-koeln.de"
    },
    {
      "name": "Sprachschule Aktiv Köln",
      "address": "Neumarkt 1d, 50667 Köln",
      "phone": "+49 221 9825620",
      "email": "koeln@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv-koeln.de"
    },
    {
      "name": "VHS Köln (Volkshochschule Köln)",
      "address": "Im Mediapark 7, 50670 Köln",
      "phone": "+49 221 22125990",
      "email": "vhs@stadt-koeln.de",
      "website": "https://vhs-koeln.de"
    },
    {
      "name": "GoAcademy! Düsseldorf",
      "address": "Grafenberger Allee 78-80, 40237 Düsseldorf",
      "phone": "+49 211 684152",
      "email": "info@goacademy.de",
      "website": "https://www.goacademy.de"
    },
    {
      "name": "Sprachschule Aktiv Düsseldorf",
      "address": "Klosterstraße 112, 40211 Düsseldorf",
      "phone": "+49 211 30154854",
      "email": "info@sprachschule-aktiv-duesseldorf.de",
      "website": "https://www.sprachschule-aktiv-duesseldorf.de"
    },
    {
      "name": "Volkshochschule Dortmund (VHS Dortmund)",
      "address": "Kampstraße 47, 44137 Dortmund",
      "phone": "+49 231 5024727",
      "email": "vhs@dortmund.de",
      "website": "https://vhs.dortmund.de"
    },
    {
      "name": "Deutsch Aktiv Sprachinstitut Dortmund",
      "address": "Brüderweg 2, 44135 Dortmund",
      "phone": "+49 231 13729602",
      "email": "info@deutsch-aktiv.schule",
      "website": "https://www.deutsch-aktiv.schule"
    },
    {
      "name": "Goethe-Institut Bonn",
      "address": "Berliner Platz 2, 53103 Bonn",
      "phone": "+49 228 770",
      "email": "kundenservice-d@goethe.de",
      "website": "https://www.goethe.de/bonn"
    },
    {
      "name": "Swan Schule Essen",
      "address": "Theaterplatz 3, 45127 Essen",
      "phone": "+49 201 50682816",
      "email": "info@swan-schule.com",
      "website": "https://www.swan-schule.com"
    },
    {
      "name": "Sprachschule Aktiv Essen",
      "address": "Kettwiger Straße 27, 45127 Essen",
      "phone": "+49 201 87652373",
      "email": "essen@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv.de/essen"
    },
    {
      "name": "inlingua Münster",
      "address": "Bahnhofstraße 12, 48143 Münster",
      "phone": "+49 251 47047",
      "email": "info@inlingua-muenster.de",
      "website": "https://www.inlingua-muenster.de"
    },
    {
      "name": "VHS Münster (Volkshochschule Münster)",
      "address": "SPIC 8, 48143 Münster",
      "phone": "+49 251 4924300",
      "email": "vhsstadt-muensterde@stadt-muenster.de",
      "website": "https://www.stadt-muenster.de/vhs"
    }
  ],
  "Rheinland-Pfalz": [


    {
      "name": "Berlitz Koblenz",
      "address": "Schloßstraße 40, 56068 Koblenz",
      "phone": "+49 261 97371100",
      "email": "koblenz@berlitz.de",
      "website": "https://www.berlitz.com/de-de/sprachschulen/koblenz"
    },

    {
      "name": "VHS Koblenz",
      "address": "Hövelstraße 6, 56073 Koblenz",
      "phone": "+49 261 1293711",
      "email": "info@vhs-koblenz.de",
      "website": "https://vhs-koblenz.de"
    },
    {
      "name": "VHS Trier",
      "address": "Domfreihof 1b, 54290 Trier",
      "phone": "+49 651 718820",
      "email": "info@vhs-trier.de",
      "website": "https://vhs-trier.de"
    },
    {
      "name": "Euro-Schulen Trier",
      "address": "Nagelstraße 10, 54290 Trier",
      "phone": "+49 651 9756113",
      "email": "trier@eso.de",
      "website": "https://www.euro-schulen.de/trier"
    },
    {
      "name": "VHS Kaiserslautern",
      "address": "Kanalstraße 3, 67655 Kaiserslautern",
      "phone": "+49 631 362580",
      "email": "info@vhs-kaiserslautern.de",
      "website": "https://www.vhs-kaiserslautern.de"
    },

  ],
  "Saarland": [
    {
      "name": "Carl Duisberg Centrum Saarbrücken",
      "address": "Mecklenburgring 1, 66121 Saarbrücken",
      "phone": "+49 681 819090",
      "email": "saarbruecken@cdc.de",
      "website": "https://www.cdc.de/standorte/deutschland/saarbruecken"
    },
    {
      "name": "inlingua Saarbrücken",
      "address": "Bahnhofstraße 62, 66111 Saarbrücken",
      "phone": "+49 681 31110",
      "email": "info@inlingua-saarbruecken.de",
      "website": "https://www.inlingua.de/saarbruecken"
    },
    {
      "name": "VHS Saarbrücken (Volkshochschule Saarbrücken)",
      "address": "Altes Rathaus, Schlossplatz 1, 66119 Saarbrücken",
      "phone": "+49 681 83 90 98 0",
      "email": "info@vhs-saar.de",
      "website": "https://www.vhs-saarbruecken.de"
    },
    {
      "name": "Berlitz Saarbrücken",
      "address": "Bahnhofstraße 77, 66111 Saarbrücken",
      "phone": "+49 681 38 92 20",
      "email": "saarbruecken@berlitz.de",
      "website": "https://www.berlitz.com/de-de/sprachschulen/flensburg"
    },
    {
      "name": "Elefant Sprachschule",
      "address": "Karl-Marx-Str. 1, 66111 Saarbrücken",
      "phone": "0170 9828134",
      "email": "",
      "website": "https://elefantschule.de"
    },
    {
      "name": "Campus Lernstudio Saarbrücken",
      "address": "Viktoriastraße 10, 66111 Saarbrücken",
      "phone": "+49 681 90 68 77 4",
      "email": "sb@campus.schule",
      "website": "https://www.campus.schule"
    }
  ],
  "Sachsen": [
    {
      "name": "Goethe-Institut Dresden",
      "address": "Königsbrücker Str. 119, 01099 Dresden",
      "phone": "+49 351 213840",
      "email": "kundenservice@goethe.de",
      "website": "https://www.goethe.de/dresden"
    },

    {
      "name": "InterDaF am Herder-Institut Leipzig",
      "address": "Lumumbastraße 4, 04105 Leipzig",
      "phone": "+49 341 9730240",
      "email": "interdaf@uni-leipzig.de",
      "website": "https://www.uni-leipzig.de/interdaf"
    },
    {
      "name": "VHS Chemnitz (Volkshochschule Chemnitz)",
      "address": "Moritzstraße 20, 09111 Chemnitz",
      "phone": "+49 371 4884343",
      "email": "info@vhs-chemnitz.de",
      "website": "https://www.vhs-chemnitz.de"
    },
    {
      "name": "inlingua Chemnitz",
      "address": "Barbarossastraße 2, 09112 Chemnitz",
      "phone": "+49 371 517000",
      "email": "chemnitz@inlingua.de",
      "website": "https://www.inlingua-chemnitz.de"
    },
    {
      "name": "Euro-Schulen Chemnitz",
      "address": "Brückenstraße 8, 09111 Chemnitz",
      "phone": "+49 371 3356230",
      "email": "chemnitz@eso.de",
      "website": "https://www.euro-schulen.de/chemnitz"
    },
    {
      "name": "Benedict School Sachsen",
      "address": "Rathausstraße 7, 09111 Chemnitz",
      "phone": "+49 371 6660131",
      "email": "",
      "website": "https://benedict-school-sachsen.de"
    },
    {
      "name": "VHS Leipzig (Volkshochschule Leipzig)",
      "address": "Löhrstraße 3-7, 04105 Leipzig",
      "phone": "+49 341 1236042",
      "email": "vhs@leipzig.de",
      "website": "https://www.vhs-leipzig.de"
    }
  ],
  "Sachsen-Anhalt": [
    {
      "name": "inlingua Magdeburg",
      "address": "Breiter Weg 172, 39104 Magdeburg",
      "phone": "+49 391 50547050",
      "email": "info@inlingua-magdeburg.de",
      "website": "https://www.inlingua-magdeburg.de"
    },
    {
      "name": "VHS Magdeburg",
      "address": "Leibnizstraße 23, 39104 Magdeburg",
      "phone": "+49 391 5354770",
      "email": "vhs@magdeburg.de",
      "website": "https://www.vhs.magdeburg.de"
    },
    {
      "name": "Euro-Schulen Halle",
      "address": "Merseburger Str. 52, 06110 Halle (Saale)",
      "phone": "+49 345 1229970",
      "email": "halle@eso.de",
      "website": "https://www.euro-schulen.de/halle"
    },
    {
      "name": "FOKUS Sprachschule Halle-Trotha",
      "address": "Trothaer Straße 29, 06118 Halle (Saale)",
      "phone": "+49 89 452133633",
      "email": "info.halle-trotha@fokussprachen.com",
      "website": "https://fokussprachen.com/sprachschulen/halle-alle-standorte/"
    },
    {
      "name": "Learn and Speak Halle",
      "address": "Marktplatz 7, 06108 Halle (Saale)",
      "phone": "+49 345 67898-0",
      "email": "halle@learn-and-speak-halle.de",
      "website": "https://www.learn-and-speak-halle.de"
    },
    {
      "name": "Euro-Schulen Wittenberg",
      "address": "Dessauer Straße 289, 06886 Lutherstadt Wittenberg",
      "phone": "+49 3491 402441",
      "email": "wittenberg@eso.de",
      "website": "https://www.euro-schulen.de/standorte/wittenberg"
    },
    {
      "name": "Institut für Sprachen und Wirtschaft Dr. Hirsch",
      "address": "Straßburger Weg 15, 06120 Halle (Saale)",
      "phone": "+49 345 5511736",
      "email": "buero@institut-hirsch.de",
      "website": "https://www.institut-hirsch.de"
    }
  ],
  "Schleswig-Holstein": [
    {
      "name": "inlingua Kiel",
      "address": "Holstenplatz 8, 24103 Kiel",
      "phone": "+49 431 981690",
      "email": "info@inlingua-kiel.de",
      "website": "https://www.inlingua-kiel.de"
    },
    {
      "name": "Sprachschule und Akademie Lübeck",
      "address": "Wahmstraße 43-45, 23552 Lübeck",
      "phone": "+49 451 4008080",
      "email": "info@sprachschule-luebeck.de",
      "website": "https://www.sprachschule-luebeck.de"
    },
    {
      "name": "VHS Flensburg (Volkshochschule Flensburg)",
      "address": "Rote Straße 34–36, 24937 Flensburg",
      "phone": "+49 461 8524484",
      "email": "info@vhs-flensburg.de",
      "website": "https://www.vhs-flensburg.de"
    },
    {
      "name": "Sprachschule Aktiv Flensburg",
      "address": "Süderhofenden 4, 24937 Flensburg",
      "phone": "+49 461 1234567",
      "email": "info@sprachschule-aktiv.de",
      "website": "https://www.sprachschule-aktiv.de/wo-kann-ich-deutsch-lernen-in-deutschland/deutsch-lernen-in-flensburg/"
    },
    {
      "name": "Berlitz Flensburg",
      "address": "Rote Straße 34, 24937 Flensburg",
      "phone": "+49 461 123456",
      "email": "",
      "website": "https://www.berlitz.com/de-de/sprachschulen/flensburg"
    },
    {
      "name": "inlingua Lübeck",
      "address": "Heiligen-Geist-Kamp 4a, 23568 Lübeck",
      "phone": "+49 451 400761-0",
      "email": "info@inlingua-luebeck.de",
      "website": "https://www.inlingua-luebeck.de"
    }
  ],
  "Thüringen": [
    {
      "name": "inlingua Erfurt",
      "address": "Anger 81, 99084 Erfurt",
      "phone": "+49 361 550540",
      "email": "info@inlingua-erfurt.de",
      "website": "https://www.inlingua-erfurt.de"
    },
    {
      "name": "Erfurter Zentrum für Sprachen und Integration (EZSI)",
      "address": "Anger 39–40, 99084 Erfurt",
      "phone": "+49 361 64414308",
      "email": "info@ezsi.de",
      "website": "https://www.ezsi.de"
    },
    {
      "name": "Euro-Schulen Erfurt",
      "address": "Juri-Gagarin-Ring 90, 99084 Erfurt",
      "phone": "+49 361 3025470",
      "email": "erfurt@eso.de",
      "website": "https://www.euro-schulen.de/erfurt"
    },
    {
      "name": "Berlitz Erfurt",
      "address": "Schlösserstraße 5, 99084 Erfurt",
      "phone": "+49 361 5626590",
      "email": "",
      "website": "https://www.berlitz.com/de-de/sprachschulen/erfurt"
    },
    {
      "name": "VHS Erfurt (Volkshochschule Erfurt)",
      "address": "Schottenstraße 7, 99084 Erfurt",
      "phone": "+49 361 6552950",
      "email": "volkshochschule@erfurt.de",
      "website": "https://www.erfurt.de/vhs"
    },
    {
      "name": "Sprachzentrum der Universität Erfurt",
      "address": "Nordhäuser Straße 63, 99089 Erfurt",
      "phone": "+49 361 7370",
      "email": "",
      "website": "https://www.uni-erfurt.de/sprachenzentrum"
    },

    {
      "name": "Euro-Schulen Jena",
      "address": "Am Jakobsplan 9, 07743 Jena",
      "phone": "+49 3641 765432",
      "email": "jena@eso.de",
      "website": "https://www.euro-schulen.de/jena"
    },
    {
      "name": "VHS Jena (Volkshochschule Jena)",
      "address": "Oberlauengasse 14, 07743 Jena",
      "phone": "+49 3641 6400",
      "email": "vhs@jena.de",
      "website": "https://www.jena.de/vhs"
    },

    {
      "name": "DEB gGmbH Gera",
      "address": "Beethovenstraße 17, 07548 Gera",
      "phone": "+49 365 773360",
      "email": "geradeb@deb.de",
      "website": "https://www.deb.de/gera"
    }
  ],
      },
    },
  },
  // Weitere Sprachen können hier ergänzt werden
};
