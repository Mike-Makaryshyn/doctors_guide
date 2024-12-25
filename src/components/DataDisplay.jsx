// src/components/DataDisplay.jsx

import React, { useContext, useState } from "react";
import { DataSourceContext } from "../contexts/DataSourceContext";
import DataItemDetail from "./DataItemDetail";

const DataDisplay = () => {
    const { dataSources } = useContext(DataSourceContext);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [dataItem, setDataItem] = useState(null);

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
        setSelectedId(null);
        setDataItem(null);
    };

    const handleIdChange = (e) => {
        const id = parseInt(e.target.value, 10);
        setSelectedId(id);
        if (id) {
            const regionData = dataSources[selectedRegion];
            if (regionData) {
                const item = regionData.find(entry => entry.id === id);
                setDataItem(item || null);
            }
        } else {
            setDataItem(null);
        }
    };

    return (
        <div>
            <h2>Вибір Даних</h2>
            
            {/* Вибір Регіону */}
            <div>
                <label htmlFor="region-select">Виберіть регіон:</label>
                <select id="region-select" value={selectedRegion} onChange={handleRegionChange}>
                    <option value="">-- Оберіть Регіон --</option>
                    {Object.keys(dataSources).map((regionKey) => (
                        <option key={regionKey} value={regionKey}>
                            {dataSources[regionKey].region}
                        </option>
                    ))}
                </select>
            </div>

            {/* Вибір ID */}
            {selectedRegion && (
                <div>
                    <label htmlFor="id-select">Виберіть ID:</label>
                    <select id="id-select" value={selectedId || ""} onChange={handleIdChange}>
                        <option value="">-- Оберіть ID --</option>
                        {dataSources[selectedRegion].map(entry => (
                            <option key={entry.id} value={entry.id}>
                                ID {entry.id}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Відображення Даних */}
            {dataItem && (
                <DataItemDetail data={dataItem} />
            )}
        </div>
    );
};

export default DataDisplay;