// src/contexts/DataSourceContext.jsx

import React, { createContext, useState, useCallback, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// ==========================
//  Import vorhandener Daten
// ==========================
import THUERINGEN_DATA from "../constants/translation/Fall/Thüringen.js";

import BAYERN_DATA from "../constants/translation/Fall/Bayern.js";
import BERLIN_DATA from "../constants/translation/Fall/Berlin.js";
import BRANDENBURG_DATA from "../constants/translation/Fall/Brandenburg.js";
import BREMEN_DATA from "../constants/translation/Fall/Bremen.js";
import HAMBURG_DATA from "../constants/translation/Fall/Hamburg.js";
import HESSEN_DATA from "../constants/translation/Fall/Hessen.js";
import MECKLENBURG_DATA from "../constants/translation/Fall/Mecklenburg Vorpommern.js";
import NIEDERSACHSEN_DATA from "../constants/translation/Fall/Niedersachsen.js";
import NRW_DATA from "../constants/translation/Fall/Nordrhein-Westfalen.js";
import RHEINLAND_DATA from "../constants/translation/Fall/Rheinland-Pfalz.js";
import SAARLAND_DATA from "../constants/translation/Fall/Saarland.js";
import SACHSEN_DATA from "../constants/translation/Fall/Sachsen.js";
import SACHSENANHALT_DATA from "../constants/translation/Fall/Sachsen-Anhalt.js";
import SCHLESWIGHOLSTEIN_DATA from "../constants/translation/Fall/Schleswig-Holstein.js";
import WESTFALEN_DATA from "../constants/translation/Fall/Westfalen-Lippe.js";

// ==============================
//  Neue 4 Dateien für Sub-BW
// ==============================
import BW_FREIBURG_DATA from "../constants/translation/Fall/Baden-Württemberg-Freiburg.js";
import BW_KARLSRUHE_DATA from "../constants/translation/Fall/Baden-Württemberg-Karlsruhe.js";
import BW_STUTTGART_DATA from "../constants/translation/Fall/Baden-Württemberg-Stuttgart.js";
import BW_REUTLINGEN_DATA from "../constants/translation/Fall/Baden-Württemberg-Reutlingen.js";

export const DataSourceContext = createContext();

export const DataSourceProvider = ({ children }) => {
  const [dataSources, setDataSources] = useState({
    // === THÜRINGEN
    "Thüringen": {
      key: "Thueringen",
      name: "Thüringen",
      region: "Thüringen",
      type: "dynamic",
      sources: {
        local: THUERINGEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: THUERINGEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },



    // =================================================
    // (1) Baden-Württemberg-Freiburg
    // =================================================
    "Baden-Württemberg-Freiburg": {
      key: "BadenWuerttembergFreiburg",
      name: "Baden-Württemberg-Freiburg",
      region: "Baden-Württemberg-Freiburg",
      type: "dynamic",
      sources: {
        local: BW_FREIBURG_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BW_FREIBURG_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },

    // =================================================
    // (2) Baden-Württemberg-Karlsruhe
    // =================================================
    "Baden-Württemberg-Karlsruhe": {
      key: "BadenWuerttembergKarlsruhe",
      name: "Baden-Württemberg-Karlsruhe",
      region: "Baden-Württemberg-Karlsruhe",
      type: "dynamic",
      sources: {
        local: BW_KARLSRUHE_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BW_KARLSRUHE_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },

    // =================================================
    // (3) Baden-Württemberg-Stuttgart
    // =================================================
    "Baden-Württemberg-Stuttgart": {
      key: "BadenWuerttembergStuttgart",
      name: "Baden-Württemberg-Stuttgart",
      region: "Baden-Württemberg-Stuttgart",
      type: "dynamic",
      sources: {
        local: BW_STUTTGART_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BW_STUTTGART_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },

    // =================================================
    // (4) Baden-Württemberg-Reutlingen
    // =================================================
    "Baden-Württemberg-Reutlingen": {
      key: "BadenWuerttembergReutlingen",
      name: "Baden-Württemberg-Reutlingen",
      region: "Baden-Württemberg-Reutlingen",
      type: "dynamic",
      sources: {
        local: BW_REUTLINGEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BW_REUTLINGEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },

    // === Andere Regionen (alle unverändert) ===
    Bayern: {
      key: "Bayern",
      name: "Bayern",
      region: "Bayern",
      type: "dynamic",
      sources: {
        local: BAYERN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BAYERN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Berlin: {
      key: "Berlin",
      name: "Berlin",
      region: "Berlin",
      type: "dynamic",
      sources: {
        local: BERLIN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BERLIN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Brandenburg: {
      key: "Brandenburg",
      name: "Brandenburg",
      region: "Brandenburg",
      type: "dynamic",
      sources: {
        local: BRANDENBURG_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BRANDENBURG_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Bremen: {
      key: "Bremen",
      name: "Bremen",
      region: "Bremen",
      type: "dynamic",
      sources: {
        local: BREMEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: BREMEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Hamburg: {
      key: "Hamburg",
      name: "Hamburg",
      region: "Hamburg",
      type: "dynamic",
      sources: {
        local: HAMBURG_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: HAMBURG_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Hessen: {
      key: "Hessen",
      name: "Hessen",
      region: "Hessen",
      type: "dynamic",
      sources: {
        local: HESSEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: HESSEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    "Mecklenburg Vorpommern": {
      key: "MecklenburgVorpommern",
      name: "Mecklenburg Vorpommern",
      region: "Mecklenburg Vorpommern",
      type: "dynamic",
      sources: {
        local: MECKLENBURG_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: MECKLENBURG_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Niedersachsen: {
      key: "Niedersachsen",
      name: "Niedersachsen",
      region: "Niedersachsen",
      type: "dynamic",
      sources: {
        local: NIEDERSACHSEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: NIEDERSACHSEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    "Nordrhein-Westfalen": {
      key: "NordrheinWestfalen",
      name: "Nordrhein-Westfalen",
      region: "Nordrhein-Westfalen",
      type: "dynamic",
      sources: {
        local: NRW_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: NRW_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    "Westfalen-Lippe": {
      key: "WestfalenLippe",
      name: "Westfalen-Lippe",
      region: "Westfalen-Lippe",
      type: "dynamic",
      sources: {
        local: WESTFALEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: WESTFALEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    "Rheinland-Pfalz": {
      key: "RheinlandPfalz",
      name: "Rheinland-Pfalz",
      region: "Rheinland-Pfalz",
      type: "dynamic",
      sources: {
        local: RHEINLAND_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: RHEINLAND_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Saarland: {
      key: "Saarland",
      name: "Saarland",
      region: "Saarland",
      type: "dynamic",
      sources: {
        local: SAARLAND_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: SAARLAND_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    Sachsen: {
      key: "Sachsen",
      name: "Sachsen",
      region: "Sachsen",
      type: "dynamic",
      sources: {
        local: SACHSEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: SACHSEN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    "Sachsen-Anhalt": {
      key: "SachsenAnhalt",
      name: "Sachsen-Anhalt",
      region: "Sachsen-Anhalt",
      type: "dynamic",
      sources: {
        local: SACHSENANHALT_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: SACHSENANHALT_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
    "Schleswig-Holstein": {
      key: "SchleswigHolstein",
      name: "Schleswig-Holstein",
      region: "Schleswig-Holstein",
      type: "dynamic",
      sources: {
        local: SCHLESWIGHOLSTEIN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
          sourceType: "local",
        })),
        firebase: [],
      },
      files: SCHLESWIGHOLSTEIN_DATA.map((item) => ({
        id: item.id,
        name: item.fullName || "Без імені",
        sourceType: "local",
      })),
    },
  });

  // Funktion, die Daten aus Firebase lädt
  const fetchFirebaseCases = useCallback(async (regionKey) => {
    try {
      const docRef = doc(db, "cases", regionKey);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.error(`Dokument "${regionKey}" nicht in Firestore gefunden.`);
        return;
      }

      const docData = docSnap.data();
      const fetchedCases = docData.cases || [];

      console.log(`Firebase-Fälle erhalten [${regionKey}]:`, fetchedCases);

      const mapped = fetchedCases.map((caseItem) => ({
        ...caseItem,
        fileDisplayName: caseItem.fullName || "Без Імені",
        sourceType: "firebase",
      }));

      setDataSources((prev) => {
        const localCases = prev[regionKey]?.sources?.local || [];
        return {
          ...prev,
          [regionKey]: {
            ...prev[regionKey],
            sources: {
              ...prev[regionKey].sources,
              firebase: mapped,
            },
            files: [...localCases, ...mapped],
          },
        };
      });
    } catch (error) {
      console.error(
        `Fehler beim Laden aus Firebase für Region ${regionKey}:`,
        error
      );
    }
  }, []);

  // Aktuelle Cases abrufen
  const getCurrentCases = useCallback(
    (regionKey, source) => {
      if (!dataSources[regionKey]?.sources) return [];
      return dataSources[regionKey].sources[source] || [];
    },
    [dataSources]
  );

  const contextValue = useMemo(
    () => ({
      dataSources,
      fetchFirebaseCases,
      getCurrentCases,
    }),
    [dataSources, fetchFirebaseCases, getCurrentCases]
  );

  return (
    <DataSourceContext.Provider value={contextValue}>
      {children}
    </DataSourceContext.Provider>
  );
};

export default DataSourceProvider;