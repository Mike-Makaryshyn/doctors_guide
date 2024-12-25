// src/constants/translation/Fall/index.js

import BEISPIEL_DATA from "./nrw/Beispiel.js";
import THUERINGEN_DATA from "./thüringen.js";
import BAYERN_DATA from "./bayern.js";
import BERLIN_DATA from "./berlin.js";
import BRANDENBURG_DATA from "./brandenburg.js";
import BREMEN_DATA from "./bremen.js";
import HAMBURG_DATA from "./hamburg.js";
import HESSEN_DATA from "./hessen.js";
import MECKLENBURG_DATA from "./mecklenburgvorpommern.js";
import NIEDERSACHSEN_DATA from "./niedersachsen.js";
import NORDRHEIN_DATA from "./nordrheinwestfalen.js";
import RHEINLAND_DATA from "./rheinlandpfalz.js";
import SAARLAND_DATA from "./saarland.js";
import SACHSEN_DATA from "./sachsen.js";
import SACHSENANHALT_DATA from "./sachsenanhalt.js";
import SCHLESWIG_DATA from "./schleswigholstein.js";

export const LOCAL_DATA_SOURCES = {
    beispiel: BEISPIEL_DATA,
    thüringen: THUERINGEN_DATA,
    bayern: BAYERN_DATA,
    berlin: BERLIN_DATA,
    brandenburg: BRANDENBURG_DATA,
    bremen: BREMEN_DATA,
    hamburg: HAMBURG_DATA,
    hessen: HESSEN_DATA,
    mecklenburg: MECKLENBURG_DATA,
    niedersachsen: NIEDERSACHSEN_DATA,
    nordrhein: NORDRHEIN_DATA,
    rheinland: RHEINLAND_DATA,
    saarland: SAARLAND_DATA,
    sachsen: SACHSEN_DATA,
    sachsenanhalt: SACHSENANHALT_DATA,
    schleswig: SCHLESWIG_DATA,
};

// Додайте дефолтний експорт
export default LOCAL_DATA_SOURCES;