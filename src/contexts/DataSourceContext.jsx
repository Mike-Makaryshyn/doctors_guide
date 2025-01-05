// src/contexts/DataSourceContext.jsx

import React, { createContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Імпорт локальних файлів (імена файлів без дефісів/умляутів)
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
 * - Зберігає локальні дані (sources.local) для кожного регіону.
 * - Підвантажує з Firebase (sources.firebase) при необхідності.
 *
 * Документ у колекції "cases" в Firestore має ім'я, що збігається з ключем (наприклад, "Thüringen").
 */
export const DataSourceProvider = ({ children }) => {
  const [dataSources, setDataSources] = useState({
    // === ТЮРИНГІЯ (у Firestore документ теж має назву "Thüringen") ===
    "Thüringen": {
      key: "Thueringen", // суто технічний ключ, можете залишити так
      name: "Thüringen", // назва для відображення
      region: "Thüringen", // важливо, щоб збігалося з назвою документа у Firestore
      type: "dynamic",
      sources: {
        local: THUERINGEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
        })),
        firebase: [],
      },
    },

    // === Далі інші регіони (вони або не мають документа у Firestore, або ви створите) ===
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
   * Підвантаження кейсів з Firestore для обраного регіону (regionKey),
   * потім зберігання у sources.firebase.
   *
   * Назва документа у Firestore збігається з ключем (наприклад, "Thüringen").
   */
  const fetchFirebaseCases = async (regionKey) => {
    try {
      const docRef = doc(db, "cases", regionKey); // назва документа = regionKey
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.error(`Документ "${regionKey}" не знайдено в Firestore.`);
        return;
      }

      const docData = docSnap.data();
      // Вважаємо, що docData має поле "cases" (масив)
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
      console.error(`Помилка підвантаження Firebase для регіону ${regionKey}:`, error);
    }
  };

  /**
   * Повертає масив випадків (local чи firebase)
   * залежно від обраного sourceType ("local" / "firebase").
   */
  const getCurrentCases = (regionKey, sourceType) => {
    if (!dataSources[regionKey]?.sources) return [];
    return dataSources[regionKey].sources[sourceType] || [];
  };

  return (
    <DataSourceContext.Provider value={{ dataSources, fetchFirebaseCases, getCurrentCases }}>
      {children}
    </DataSourceContext.Provider>
  );
};