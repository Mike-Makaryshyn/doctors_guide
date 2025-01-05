// src/contexts/DataSourceContext.jsx

import React, { createContext, useState, useCallback, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Import local files (file names without hyphens/umlauts)
import THUERINGEN_DATA from "../constants/translation/Fall/Thüringen.js";
import BADENWUERTTEMB_DATA from "../constants/translation/Fall/Baden-Württemberg.js";
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

export const DataSourceContext = createContext();

/**
 * DataSourceProvider:
 * - Stores local data (sources.local) for each region.
 * - Loads from Firebase (sources.firebase) when necessary.
 *
 * The document in the "cases" collection in Firestore has a name matching the key (e.g., "Thüringen").
 */
export const DataSourceProvider = ({ children }) => {
  const [dataSources, setDataSources] = useState({
    // === THÜRINGEN (the Firestore document is also named "Thüringen") ===
    "Thüringen": {
      key: "Thueringen", // purely technical key, you can leave it as is
      name: "Thüringen", // display name
      region: "Thüringen", // must match the Firestore document name
      type: "dynamic",
      sources: {
        local: THUERINGEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
        })),
        firebase: [],
      },
    },

    // === Other regions (either don't have a Firestore document or you will create them) ===
    "Baden-Württemberg": {
      key: "BadenWuerttemberg",
      name: "Baden-Württemberg",
      region: "Baden-Württemberg",
      type: "dynamic",
      sources: {
        local: BADENWUERTTEMB_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
        })),
        firebase: [],
      },
    },
    Bayern: {
      key: "Bayern",
      name: "Bayern",
      region: "Bayern",
      type: "dynamic",
      sources: {
        local: BAYERN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
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
        })),
        firebase: [],
      },
    },
  });

  /**
   * Loads cases from Firestore for the selected region (regionKey),
   * then stores them in sources.firebase.
   *
   * The document name in Firestore matches the key (e.g., "Thüringen").
   */
  const fetchFirebaseCases = useCallback(async (regionKey) => {
    try {
      const docRef = doc(db, "cases", regionKey); // document name = regionKey
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.error(`Document "${regionKey}" not found in Firestore.`);
        return;
      }

      const docData = docSnap.data();
      // Assume docData has a field "cases" (array)
      const fetchedCases = docData.cases || [];

      setDataSources((prev) => ({
        ...prev,
        [regionKey]: {
          ...prev[regionKey],
          sources: {
            ...prev[regionKey].sources,
            firebase: fetchedCases,
          },
        },
      }));
    } catch (error) {
      console.error(`Error fetching Firebase for region ${regionKey}:`, error);
    }
  }, []);

  /**
   * Returns an array of cases (local or firebase)
   * depending on the selected sourceType ("local" / "firebase").
   */
  const getCurrentCases = useCallback(
    (regionKey, sourceType) => {
      if (!dataSources[regionKey]?.sources) return [];
      return dataSources[regionKey].sources[sourceType] || [];
    },
    [dataSources]
  );

  // Memoize the context value to prevent unnecessary re-renders
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