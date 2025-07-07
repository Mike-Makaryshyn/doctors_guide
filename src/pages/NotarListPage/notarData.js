// Vollständiger, aktualisierter Datensatz aller recherchierten Notarinnen und Notare
// Gruppiert nach Bundesländern (alphabetische Reihenfolge)
// Felder: id, name, city, address, phone (falls unbekannt leer lassen), email, description

export const notarData = {
  "Baden-Württemberg": [
    { id: "n-bw-1", name: "Martin Jocher", city: "Stuttgart", address: "Charlottenplatz 6, 70173 Stuttgart", phone: "", email: "jocher@notare-c6.de", website: "https://notaries-directory.eu/en/martin-jocher-231737", description: "" },
    { id: "n-bw-2", name: "Dr. Theo Luy", city: "Stuttgart", address: "Maybachstraße 20, 70469 Stuttgart", phone: "", email: "mail@notare-sbl.de", website: "https://www.notare-sbl.de", description: "" },
    { id: "n-bw-3", name: "Harald Ohnleiter", city: "Stuttgart", address: "Königstraße 1A, 70173 Stuttgart", phone: "", email: "sekretariat@notar-ohnleiter.de", website: "https://www.ohs-notare.de/notare/harald-ohnleiter", description: "" },
    { id: "n-bw-4", name: "Eberhard Zeiß", city: "Stuttgart", address: "Marienstraße 5, 70178 Stuttgart", phone: "", email: "zeiss.schneider@notarnet.de", website: "https://www.notar.de/suche?notar=Zeiß&ort=Stuttgart", description: "" }
  ],
  Bayern: [
    { id: "n-by-1", name: "Alexander Benesch", city: "München", address: "Leopoldstraße 18, 80802 München", phone: "", email: "mail@notare-kopp-benesch.de", website: "https://www.notare-kopp-benesch.de", description: "" },
    { id: "n-by-2", name: "Arno Malte Uhlig", city: "München", address: "Marienplatz 25, 80331 München", phone: "", email: "notare@uhlig-schmitt.de", website: "https://notaries-europe.com/germany/munchen/notary-arno-malte-uhlig", description: "" },
    { id: "n-by-3", name: "Bernd Höfling", city: "München", address: "Pacellistraße 14, 80333 München", phone: "", email: "info@hoefling-schwab.de", website: "", description: "" },
    { id: "n-by-4", name: "Dr. Bernd Schmitt", city: "München", address: "Marienplatz 25, 80331 München", phone: "", email: "notare@uhlig-schmitt.de", website: "https://notare-schmitt-esbjoernsson.de/notar-schmitt", description: "" }
  ],
  Berlin: [
    { id: "n-be-1", name: "Achim Reich", city: "Berlin", address: "Uhlandstraße 144, 10719 Berlin", phone: "", email: "a.reich@media.law.net", website: "https://media.law.net", description: "" },
    { id: "n-be-2", name: "Eckard Lindemann", city: "Berlin", address: "Carl-Schurz-Straße 31, 13597 Berlin", phone: "", email: "lindemann@rechtsanwaelte.de", website: "https://www.rechtsanwaelte.de", description: "" },
    { id: "n-be-3", name: "Dr. Jürgen Jenckel", city: "Berlin", address: "Hegelplatz 1, 10117 Berlin", phone: "", email: "office@jenckel-law.de", website: "https://www.jenckel-law.de", description: "" },
    { id: "n-be-4", name: "Alexander Kollmorgen", city: "Berlin", address: "Friedrichstraße 110A, 10117 Berlin", phone: "", email: "alexander.kollmorgen@klgates.com", website: "https://www.klgates.com", description: "" }
  ],
  Brandenburg: [
    { id: "n-bb-1", name: "Jens Hunger", city: "Potsdam", address: "Jägerallee 33, 14469 Potsdam", phone: "", email: "info@notar-hunger.de", website: "https://www.notar-hunger.de", description: "" },
    { id: "n-bb-2", name: "Keslin Damke", city: "Potsdam", address: "Großbeerenstraße 20, 14482 Potsdam", phone: "", email: "info@notariatsverwalterin-damke.de", website: "https://www.notariatsverwalterin-damke.de", description: "" },
    { id: "n-bb-3", name: "Peter Arntz", city: "Potsdam", address: "Jägerallee 1, 14469 Potsdam", phone: "", email: "post@notariat-arntz.de", website: "https://www.notariat-arntz.de", description: "" },
    { id: "n-bb-4", name: "Peter W. Koch", city: "Potsdam", address: "Charlottenstraße 42, 14467 Potsdam", phone: "", email: "koch.popp.notare@potsdam.de", website: "https://www.notar.de/suche?notar=Koch&ort=Potsdam", description: "" }
  ],
  Bremen: [
    { id: "n-hb-1", name: "Hans Claussen", city: "Bremen", address: "Ostertorstraße 32, 28195 Bremen", phone: "", email: "claussen@ghb-law.de", website: "https://www.ghb-law.de", description: "" },
    { id: "n-hb-2", name: "Christian Darge", city: "Bremen", address: "Contrescarpe 21, 28203 Bremen", phone: "", email: "darge@ahlers-vogel.de", website: "https://www.ahlers-vogel.de", description: "" },
    { id: "n-hb-3", name: "Nicole Stütelberg", city: "Bremen", address: "Contrescarpe 46, 28195 Bremen", phone: "", email: "notarin-stuetelberg@bremen.de", website: "https://www.notar.de/suche?notar=Stütelberg&ort=Bremen", description: "" },
    { id: "n-hb-4", name: "Lars Wunderlich", city: "Bremen", address: "Knochenhauerstr. 41–42, 28195 Bremen", phone: "", email: "info@anwalt-notar-bremen.de", website: "https://www.anwalt-notar-bremen.de", description: "" }
  ],
  Hamburg: [
    { id: "n-hh-1", name: "Dr. Jan C. Wolters", city: "Hamburg", address: "Bergstraße 11, 20095 Hamburg", phone: "", email: "Wolters@notariat-bergstrasse.de", website: "https://www.notariat-bergstrasse.de", description: "" },
    { id: "n-hh-2", name: "Dr. Martin L. Kochheim", city: "Hamburg", address: "Mönckebergstraße 22, 20095 Hamburg", phone: "", email: "notare@rathausmarkt.de", website: "https://www.rathausmarkt.de", description: "" },
    { id: "n-hh-3", name: "Dr. Nicola Hoischen", city: "Hamburg", address: "Blankeneser Bahnhofstr. 35, 22587 Hamburg", phone: "", email: "Info@Notariat-Blankeneser-Bahnhofstrasse.de", website: "https://www.notariat-blankeneser-bahnhofstrasse.de", description: "" },
    { id: "n-hh-4", name: "Dr. Thomas Nesemann", city: "Hamburg", address: "Harburger Rathausstraße 40 (Eing. A), 21073 Hamburg", phone: "", email: "notare@nesemann-uhlenbrock.de", website: "https://www.nesemann-uhlenbrock.de", description: "" },
    { id: "n-hh-5", name: "Dr. Markus Perz", city: "Hamburg", address: "Valentinskamp 88, 20355 Hamburg", phone: "", email: "info@notare-amgaensemarkt.de", website: "https://www.notare-amgaensemarkt.de", description: "" }
  ],
  Hessen: [
    { id: "n-he-1", name: "Dr. Stefan Bernhard-Eckel", city: "Frankfurt am Main", address: "Goethestraße 26–28, 60313 Frankfurt am Main", phone: "", email: "frankfurt@notare-bb.de", website: "https://www.notare-bb.de", description: "" },
    { id: "n-he-2", name: "Yusuf Doğan, Rechtsanwalt & Notar", city: "Frankfurt am Main", address: "Zeil 10, 60313 Frankfurt am Main", phone: "", email: "info@notar-dogan.de", website: "https://notar-dogan.de", description: "" },
    { id: "n-he-3", name: "FM Notare (Funke · Mühe Partnerschaft)", city: "Frankfurt am Main", address: "Taunusanlage 17, 60325 Frankfurt am Main", phone: "", email: "mail@fm-notare.com", website: "https://www.fm-notare.com", description: "" },
    { id: "n-he-4", name: "JRW Janzen · Rexhaj · Will (Rechtsanwälte & Notar)", city: "Wiesbaden", address: "Biebricher Allee 19, 65187 Wiesbaden", phone: "", email: "info@jrw-notar.de", website: "https://jrw-notar-wiesbaden.de", description: "" },
    { id: "n-he-5", name: "Notar Michael Stamm", city: "Wiesbaden", address: "Wilhelminenstraße 29, 65193 Wiesbaden", phone: "", email: "kanzlei@notar-stamm.de", website: "https://notar-wiesbaden-stamm.de", description: "" },
    { id: "n-he-6", name: "Dr. Robert Beier, Rechtsanwalt & Notar", city: "Darmstadt", address: "Mornewegstraße 45A, 64293 Darmstadt", phone: "", email: "info@notar-darmstadt-bp.de", website: "https://www.notar-darmstadt-bp.de", description: "" }
  ],
  Niedersachsen: [
    { id: "n-ni-1", name: "Dr. Falco Schickerling", city: "Hannover", address: "Aegidientorplatz 2B, 30159 Hannover", phone: "", email: "kanzlei@schickerling-von-bismarck.de", website: "https://www.bsb-notare.de", description: "" },
    { id: "n-ni-2", name: "Dr. Dennis B. Bertog", city: "Hannover", address: "Berliner Allee 40, 30175 Hannover", phone: "", email: "info@leinepartners.de", website: "https://leinepartners.de", description: "" },
    { id: "n-ni-3", name: "Daniel Rink", city: "Hannover", address: "Schwarzer Bär 4, 30449 Hannover", phone: "", email: "notar@rink-legal.de", website: "https://notar-rink.de", description: "" },
    { id: "n-ni-4", name: "Gerd Lange", city: "Hannover", address: "Schiffgraben 23, 30159 Hannover", phone: "", email: "mail@notarlange.de", website: "https://notarlange.de", description: "" },
    { id: "n-ni-5", name: "Claus Wehe", city: "Hannover", address: "Roscherstraße 13, 30161 Hannover", phone: "", email: "info@notar-wehe.de", website: "https://www.notar-wehe.de", description: "" }
  ],
  "Nordrhein-Westfalen": [
    { id: "n-nrw-1", name: "Dr. Alexander Völzmann", city: "Köln", address: "Subbelrather Straße 249, 50825 Köln", phone: "", email: "info@notar-voelzmann.de", website: "https://notar-voelzmann.de", description: "" },
    { id: "n-nrw-2", name: "Notarin Christina Bartels", city: "Köln", address: "Kaiser-Wilhelm-Ring 7–9, 50672 Köln", phone: "", email: "notariat@bartels-klein.de", website: "https://www.bartels-klein.de", description: "" },
    { id: "n-nrw-3", name: "Dr. Jürgen Kallrath", city: "Köln", address: "Kaiser-Wilhelm-Ring 15, 50672 Köln", phone: "", email: "info@kallrath-notar.de", website: "https://www.kallrath-notar.de", description: "" },
    { id: "n-nrw-4", name: "Erich R. Thies", city: "Köln", address: "Hohenstaufenring 57, 50674 Köln", phone: "", email: "info@notar-thies.de", website: "https://www.notar-thies.de", description: "" },
    { id: "n-nrw-5", name: "Dr. Andreas Rethmeier", city: "Köln", address: "Drususgasse 1–5, 50667 Köln", phone: "", email: "mail@notare-drususgasse.de", website: "https://www.notare-drususgasse.de", description: "" }
  ],
  "Rheinland-Pfalz": [
    { id: "n-rp-1", name: "Peter Orth", city: "Mainz", address: "Kötherhofstraße 4, 55116 Mainz", phone: "", email: "info@notar-orth.de", website: "https://www.notar-orth.de", description: "" },
    { id: "n-rp-2", name: "Ulrich Feth", city: "Mainz", address: "Bilhildisstraße 13, 55116 Mainz", phone: "", email: "mainz@notarfeth.de", website: "https://www.notarfeth.de", description: "" },
    { id: "n-rp-3", name: "Dr. Thomas Ammelburger", city: "Mainz", address: "Göttelmannstraße 17, 55130 Mainz", phone: "", email: "info@ammelburger-bott.de", website: "https://www.ammelburger-bott.de", description: "" },
    { id: "n-rp-4", name: "Dr. Lukas Prinz", city: "Mainz", address: "Rheinstraße 4M, 55116 Mainz", phone: "", email: "notariat@mp-notare.de", website: "https://mp-notare.de", description: "" },
    { id: "n-rp-5", name: "Helmut Merz", city: "Mainz", address: "Bauerngasse 7, 55116 Mainz", phone: "", email: "info@notare-merz-diefenbach.de", website: "https://www.notare-merz-diefenbach.de", description: "" }
  ],
  Saarland: [
    { id: "n-sl-1", name: "Dr. Dominik Schroeder", city: "Saarbrücken", address: "Trierer Straße 16, 66125 Saarbrücken", phone: "", email: "info@notar-schroeder.de", website: "https://notar-schroeder.de", description: "" },
    { id: "n-sl-2", name: "Dr. Patrick Lenz", city: "Saarbrücken", address: "Bismarckstraße 35, 66121 Saarbrücken", phone: "", email: "lenz@notare-lenz-linsler.de", website: "https://www.notare-lenz-linsler.de", description: "" },
    { id: "n-sl-3", name: "Dr. Christian Jülch", city: "Saarbrücken", address: "An der Christ-König-Kirche 4, 66119 Saarbrücken", phone: "", email: "notare@weber-juelch.de", website: "https://www.notare-weber-juelch.de", description: "" },
    { id: "n-sl-4", name: "Notarin Evelyn Wittenbrock", city: "Saarbrücken", address: "Kleine Rosenstraße 5, 66111 Saarbrücken", phone: "", email: "mail@notarin-wittenbrock.de", website: "https://www.notarin-wittenbrock.de", description: "" },
    { id: "n-sl-5", name: "Dr. Kyrill Schaefer", city: "Saarbrücken", address: "Dudweilerstraße 2a, 66111 Saarbrücken", phone: "", email: "info@notar-kschaefer.de", website: "https://www.notar-schaefer-sb.de", description: "" }
  ],
  Sachsen: [
    { id: "n-sn-1", name: "Dr. Karsten Schwipps", city: "Dresden", address: "Königstraße 11, 01097 Dresden", phone: "", email: "info@notar-schwipps.de", website: "https://notar-schwipps.de", description: "" },
    { id: "n-sn-2", name: "Tim Hofmann", city: "Dresden", address: "Königstraße 17, 01097 Dresden", phone: "", email: "info@notarhofmann.de", website: "https://koenigstrasse17.de", description: "" },
    { id: "n-sn-3", name: "Heinz-Willi Lürken", city: "Dresden", address: "Radeberger Straße 28, 01099 Dresden", phone: "", email: "Notar.Luerken@t-online.de", website: "https://www.notar.de/suche?notar=Lürken&ort=Dresden", description: "" },
    { id: "n-sn-4", name: "Notarin Constance Boldt", city: "Dresden", address: "Königsbrücker Straße 87/89, 01099 Dresden", phone: "", email: "boldt-rhein@notarnet.de", website: "https://boldt-rhein-notare.de", description: "" },
    { id: "n-sn-5", name: "Prof. Dr. Heribert Heckschen", city: "Dresden", address: "Hohe Straße 12, 01069 Dresden", phone: "", email: "info@heckschen-salomon.de", website: "https://www.heckschen-salomon.de", description: "" }
  ],
  "Sachsen-Anhalt": [
    { id: "n-st-1", name: "Peter Krolopp", city: "Magdeburg", address: "Humboldtstraße 2, 39112 Magdeburg", phone: "", email: "notar-peter-krolopp@notarnet.de", website: "http://www.notar-peter-krolopp.de", description: "" },
    { id: "n-st-2", name: "Karsten Herrenkind", city: "Magdeburg", address: "Am Fuchsberg 6, 39112 Magdeburg", phone: "", email: "postfach@notar-herrenkind.de", website: "https://www.notar-herrenkind.de", description: "" },
    { id: "n-st-3", name: "Uwe Glöckner", city: "Magdeburg", address: "Goldschmiedebrücke 8, 39104 Magdeburg", phone: "", email: "info@notar-gloeckner.de", website: "https://www.notar.de/suche?notar=Glöckner&ort=Magdeburg", description: "" },
    { id: "n-st-4", name: "Notarin Kirsten Hirche", city: "Mainz", // Amtssitz verlegt, Adresse in Mainz
      address: "Olvenstedter Straße 10, 55116 Mainz", phone: "", email: "info@notarin-hirche.de", website: "https://notarin-hirche.de", description: "" },
    { id: "n-st-5", name: "Dietmar Karlowski", city: "Magdeburg", address: "Steubenallee 1, 39104 Magdeburg", phone: "", email: "notariat-guk@gmx.de", website: "https://www.notar.de/suche?notar=Karlowski&ort=Magdeburg", description: "" }
  ],
  "Schleswig-Holstein": [
    { id: "n-sh-1", name: "A. Eckhard Harbs", city: "Kiel", address: "Dahlmannstraße 1–3, 24103 Kiel", phone: "", email: "info@harbs-rechtsanwaelte.de", website: "https://notare-kiel.com", description: "" },
    { id: "n-sh-2", name: "Andreas Kühnelt", city: "Kiel", address: "Deliusstraße 16, 24114 Kiel", phone: "", email: "notar.kuehnelt@cc-recht.de", website: "https://causaconcilio.de", description: "" },
    { id: "n-sh-3", name: "Dirk Unrau", city: "Kiel", address: "Deliusstraße 16, 24114 Kiel", phone: "", email: "notar.unrau@cc-recht.de", website: "https://causaconcilio.de", description: "" },
    { id: "n-sh-4", name: "Dr. Christian Becker", city: "Kiel", address: "Schwedenkai 1, 24103 Kiel", phone: "", email: "christian.becker@bmz-recht.de", website: "https://www.bmz-recht.de", description: "" },
    { id: "n-sh-5", name: "Notarin Christine Heilig", city: "Kiel", address: "Von-der-Tann-Straße 2, 24114 Kiel", phone: "", email: "office@heilig-kiel.de", website: "https://heilig-kiel.de", description: "" }
  ],
  "Mecklenburg-Vorpommern": [
    { id: "n-mv-1", name: "Notarin Angela Fuge", city: "Schwerin", address: "Weinbergstraße 16, 19061 Schwerin", phone: "", email: "fuge-schwerin@notarnet.de", website: "https://www.niemann-haehling-fuge-notar.de", description: "" },
    { id: "n-mv-2", name: "Notarin Birgit Hähling", city: "Schwerin", address: "Weinbergstraße 16, 19061 Schwerin", phone: "", email: "haehling-schwerin@notarnet.de", website: "https://www.niemann-haehling-fuge-notar.de", description: "" },
    { id: "n-mv-3", name: "Martin Hückstädt", city: "Schwerin", address: "Tannhöfer Allee 3, 19061 Schwerin", phone: "", email: "info@notar-hueckstaedt.de", website: "https://www.notar-hueckstaedt.de", description: "" },
    { id: "n-mv-4", name: "Christian Biermann-Ratjen", city: "Schwerin", address: "Tannhöfer Allee 3, 19061 Schwerin", phone: "", email: "info@notar-biermann-ratjen.de", website: "http://www.notar-biermann-ratjen.de", description: "" }
  ],
  Thüringen: [
    { id: "n-th-1", name: "Ralf Schumm", city: "Erfurt", address: "Neuwerkstraße 26, 99084 Erfurt", phone: "", email: "info@notar-schumm.de", website: "https://www.notar-schumm.de", description: "" },
    { id: "n-th-2", name: "Dr. Thomas Renner", city: "Erfurt", address: "Futterstraße 13/13a, 99084 Erfurt", phone: "", email: "kontakt@notar-renner.de", website: "https://www.notar-renner.com", description: "" },
    { id: "n-th-3", name: "Dr. Friederike Klepsch", city: "Erfurt", address: "Anger 36, 99084 Erfurt", phone: "", email: "info@notarin-klepsch.de", website: "https://www.notarin-klepsch.de", description: "" },
    { id: "n-th-4", name: "Dr. Ulrich Krause", city: "Erfurt", address: "Johannesstraße 3, 99084 Erfurt", phone: "", email: "notar@drkrause-erfurt.de", website: "http://www.drkrause-erfurt.de", description: "" },
    { id: "n-th-5", name: "Siegfried Bretschneider", city: "Erfurt", address: "Anger 36, 99084 Erfurt", phone: "", email: "Notar-Bretschneider@t-online.de", website: "https://www.notar.de/suche?notar=Bretschneider&ort=Erfurt", description: "" }
  ]
};

export default notarData;