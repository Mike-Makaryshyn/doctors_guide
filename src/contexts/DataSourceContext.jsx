// src/contexts/DataSourceContext.jsx

import React, { createContext, useState, useCallback, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Імпортуємо локальні файли (імена файлів без дефісів/умляутів)
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
 * - Завантажує дані з Firebase (sources.firebase) при необхідності.
 *
 * Документ у колекції "cases" в Firestore має ім'я, що відповідає ключу (наприклад, "Thüringen").
 */
export const DataSourceProvider = ({ children }) => {
  const [dataSources, setDataSources] = useState({
    // === THÜRINGEN (документ Firestore також названий "Thüringen") ===
    "Thüringen": {
      key: "Thueringen",
      name: "Thüringen",
      region: "Thüringen",
      type: "dynamic",
      sources: {
        local: THUERINGEN_DATA.map((item) => ({
          id: item.id,
          name: item.fullName || "Без імені",
        })),
        firebase: [],
      },
    },

    // === Інші регіони (або не мають документа Firestore, або ви їх створите) ===
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
   * Завантажує випадки з Firebase для вибраного регіону (regionKey),
   * а потім зберігає їх у sources.firebase.
   *
   * Ім'я документа в Firestore відповідає ключу (наприклад, "Thüringen").
   */
  const fetchFirebaseCases = useCallback(async (regionKey) => {
    try {
      const docRef = doc(db, "cases", regionKey); // ім'я документа = regionKey
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.error(`Документ "${regionKey}" не знайдено в Firestore.`);
        return;
      }

      const docData = docSnap.data();
      const fetchedCases = docData.cases || [];

      // Логування для перевірки структури даних
      console.log("Отримані випадки з Firebase:", fetchedCases);

      // Маппінг поля fullName до name
      const mappedCases = fetchedCases.map((caseItem) => ({
        id: caseItem.id,
        name: caseItem.fullName || "Без імені", // Маппінг поля fullName до name
      }));

      setDataSources((prev) => ({
        ...prev,
        [regionKey]: {
          ...prev[regionKey],
          sources: {
            ...prev[regionKey].sources,
            firebase: mappedCases,
          },
        },
      }));
    } catch (error) {
      console.error(`Помилка при завантаженні Firebase для регіону ${regionKey}:`, error);
    }
  }, []);

  /**
   * Повертає масив випадків (локальних або Firebase)
   * залежно від вибраного типу джерела ("local" / "firebase").
   */
  const getCurrentCases = useCallback(
    (regionKey, sourceType) => {
      if (!dataSources[regionKey]?.sources) return [];
      return dataSources[regionKey].sources[sourceType] || [];
    },
    [dataSources]
  );

  // Мемоізація значення контексту для запобігання непотрібним перерендеренням
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