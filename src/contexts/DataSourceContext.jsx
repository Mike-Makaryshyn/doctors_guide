// src/contexts/DataSourceContext.jsx

import React, { createContext, useState } from "react";
import THUERINGEN_DATA from '../constants/translation/Fall/thüringen';
import BAYERN_DATA from '../constants/translation/Fall/bayern';
// Імпортуйте інші регіони за потребою

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
        // Додайте інші регіони за необхідності
        // Якщо є джерела типу 'firebase'
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