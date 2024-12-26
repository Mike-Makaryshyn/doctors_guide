// src/contexts/DataSourceContext.jsx

import React, { createContext, useState } from "react";
import THUERINGEN_DATA from '../constants/translation/Fall/thüringen'; // Залишаємо лише один раз
import BAYERN_DATA from '../constants/translation/Fall/bayern';
import BADENWUERTTEMBERG_DATA from '../constants/translation/Fall/badenwürttemberg';
import BERLIN_DATA from '../constants/translation/Fall/berlin';
import BRANDENBURG_DATA from '../constants/translation/Fall/brandenburg';
import BREMEN_DATA from '../constants/translation/Fall/bremen';
import HAMBURG_DATA from '../constants/translation/Fall/hamburg';
import HESSEN_DATA from '../constants/translation/Fall/hessen';
import MECKLENBURG_DATA from '../constants/translation/Fall/mecklenburgvorpommern';
import NIEDERSACHSEN_DATA from '../constants/translation/Fall/niedersachsen';
import NRW_DATA from '../constants/translation/Fall/nordrheinwestfalen';
import RHEINLAND_DATA from '../constants/translation/Fall/rheinlandpfalz';
import SAARLAND_DATA from '../constants/translation/Fall/saarland';
import SACHSEN_DATA from '../constants/translation/Fall/sachsen';
import SACHSENANHALT_DATA from '../constants/translation/Fall/sachsenanhalt';
import SCHLESWIGHOLSTEIN_DATA from '../constants/translation/Fall/schleswigholstein';


export const DataSourceContext = createContext();

export const DataSourceProvider = ({ children }) => {
    const [dataSources] = useState({
        thüringen: {
            name: "Thüringen",
            type: "local",
            region: "Thüringen",
            files: THUERINGEN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        bayern: {
            name: "Bayern",
            type: "local",
            region: "Bayern",
            files: BAYERN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        badenwuerttemberg: {
            name: "Baden-Württemberg",
            type: "local",
            region: "Baden-Württemberg",
            files: BADENWUERTTEMBERG_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        berlin: {
            name: "Berlin",
            type: "local",
            region: "Berlin",
            files: BERLIN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        brandenburg: {
            name: "Brandenburg",
            type: "local",
            region: "Brandenburg",
            files: BRANDENBURG_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        bremen: {
            name: "Bremen",
            type: "local",
            region: "Bremen",
            files: BREMEN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        hamburg: {
            name: "Hamburg",
            type: "local",
            region: "Hamburg",
            files: HAMBURG_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        hessen: {
            name: "Hessen",
            type: "local",
            region: "Hessen",
            files: HESSEN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        mecklenburg: {
            name: "Mecklenburg-Vorpommern",
            type: "local",
            region: "Mecklenburg-Vorpommern",
            files: MECKLENBURG_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        niedersachsen: {
            name: "Niedersachsen",
            type: "local",
            region: "Niedersachsen",
            files: NIEDERSACHSEN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        nrw: {
            name: "Nordrhein-Westfalen",
            type: "local",
            region: "Nordrhein-Westfalen",
            files: NRW_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        rheinland: {
            name: "Rheinland-Pfalz",
            type: "local",
            region: "Rheinland-Pfalz",
            files: RHEINLAND_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        saarland: {
            name: "Saarland",
            type: "local",
            region: "Saarland",
            files: SAARLAND_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        sachsen: {
            name: "Sachsen",
            type: "local",
            region: "Sachsen",
            files: SACHSEN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        sachsenanhalt: {
            name: "Sachsen-Anhalt",
            type: "local",
            region: "Sachsen-Anhalt",
            files: SACHSENANHALT_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
        schleswigholstein: {
            name: "Schleswig-Holstein",
            type: "local",
            region: "Schleswig-Holstein",
            files: SCHLESWIGHOLSTEIN_DATA.map(item => ({ id: item.id, name: `ID ${item.id}` })),
        },
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