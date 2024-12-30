// src/contexts/DataSourceContext.jsx

import React, { createContext, useState } from "react";

// Імпортуємо файли (імена файлів без дефісів/умляутів):
import THUERINGEN_DATA from "../constants/translation/Fall/Thüringen.js";
import BADENWUERTTEMBERG_DATA from "../constants/translation/Fall/Baden-Württemberg.js";
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

// Створюємо контекст
export const DataSourceContext = createContext();

// Експортуємо провайдер
export const DataSourceProvider = ({ children }) => {
  // Ключі (ліворуч) = назви файлів (без дефісів/умляутів).
  // name/region (праворуч) = “людська” назва з дефісами, умляутами.
  const [dataSources] = useState({
    // 1) Thüringen
    "Thüringen": {
        key: "Thueringen",
      name: "Thüringen",
      type: "local",
      region: "Thüringen",
      files: THUERINGEN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 2) Baden-Württemberg
    "Baden-Württemberg": {
        key: "BadenWuerttemberg",
      name: "Baden-Württemberg",
      type: "local",
      region: "Baden-Württemberg",
      files: BADENWUERTTEMBERG_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 3) Bayern
    Bayern: {
        key: "Bayern",
      name: "Bayern",
      type: "local",
      region: "Bayern",
      files: BAYERN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 4) Berlin
    Berlin: {
        key: "Berlin",
      name: "Berlin",
      type: "local",
      region: "Berlin",
      files: BERLIN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 5) Brandenburg
    Brandenburg: {
        key: "Brandenburg",
      name: "Brandenburg",
      type: "local",
      region: "Brandenburg",
      files: BRANDENBURG_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 6) Bremen
    Bremen: {
        key: "Bremen",
      name: "Bremen",
      type: "local",
      region: "Bremen",
      files: BREMEN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 7) Hamburg
    Hamburg: {
        key: "Hamburg",
      name: "Hamburg",
      type: "local",
      region: "Hamburg",
      files: HAMBURG_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 8) Hessen
    Hessen: {
        key: "Hessen",
      name: "Hessen",
      type: "local",
      region: "Hessen",
      files: HESSEN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 9) Mecklenburg-Vorpommern
    "Mecklenburg Vorpommern": {
        key: "MecklenburgVorpommern",
      name: "Mecklenburg Vorpommern",
      type: "local",
      region: "Mecklenburg Vorpommern",
      files: MECKLENBURG_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 10) Niedersachsen
    Niedersachsen: {
        key: "Niedersachsen",
      name: "Niedersachsen",
      type: "local",
      region: "Niedersachsen",
      files: NIEDERSACHSEN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 11) Nordrhein-Westfalen
    "Nordrhein-Westfalen": {
        key: "NordrheinWestfalen",
      name: "Nordrhein-Westfalen",
      type: "local",
      region: "Nordrhein-Westfalen",
      files: NRW_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 12) Rheinland-Pfalz
    "Rheinland-Pfalz": {
        key: "RheinlandPfalz",
      name: "Rheinland-Pfalz",
      type: "local",
      region: "Rheinland-Pfalz",
      files: RHEINLAND_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 13) Saarland
    Saarland: {
        key: "Saarland",
      name: "Saarland",
      type: "local",
      region: "Saarland",
      files: SAARLAND_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 14) Sachsen
    Sachsen: {
        key: "Sachsen",
      name: "Sachsen",
      type: "local",
      region: "Sachsen",
      files: SACHSEN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 15) Sachsen-Anhalt
    "Sachsen-Anhalt": {
        key: "SachsenAnhalt",
      name: "Sachsen-Anhalt",
      type: "local",
      region: "Sachsen-Anhalt",
      files: SACHSENANHALT_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },
    // 16) Schleswig-Holstein
    "Schleswig-Holstein": {
        key: "SchleswigHolstein",
      name: "Schleswig-Holstein",
      type: "local",
      region: "Schleswig-Holstein",
      files: SCHLESWIGHOLSTEIN_DATA.map((item) => ({
        id: item.id,
        name: `ID ${item.id}`,
      })),
    },

    // Firebase (не змінюємо)
    firebaseSource: {
      name: "Firebase Source",
      type: "firebase",
      collection: "userCases",
    },
  });

  return (
    <DataSourceContext.Provider value={{ dataSources }}>
      {children}
    </DataSourceContext.Provider>
  );
};