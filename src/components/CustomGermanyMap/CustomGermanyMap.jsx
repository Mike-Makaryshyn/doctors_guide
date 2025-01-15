// src/components/CustomGermanyMap/CustomGermanyMap.jsx
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Імпортуємо стилі
import styles from "./CustomGermanyMap.module.css"; // Використовуємо CSS Modules
import germanyGeo from "./germanyGeo.json";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import MemoizedGeography from "./MemoizedGeography"; // Імпортуємо мемоізований Geography

const CustomGermanyMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionClick = (geo) => {
    const regionName = geo.properties.name;
    setSelectedRegion(regionName);
    console.log(`Вибраний регіон: ${regionName}`);
  };

  // Функція для знаходження координат центроїда вибраного регіону
  const getCentroid = (geo) => {
    return geoCentroid(geo);
  };

  // Знаходимо GeoJSON дані для вибраного регіону
  const selectedGeo = germanyGeo.features.find(
    (geo) => geo.properties.name === selectedRegion
  );

  return (
    <MainLayout>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 3000, // Збільшений масштаб
          center: [10, 51], // Центр карти
        }}
        width={1200} // Збільшена ширина
        height={900} // Збільшена висота
        className={styles.rsmComposableMap} // Використовуємо клас з CSS Modules
      >
        <defs>
          {/* Градієнти для регіонів */}
          <linearGradient id="gradient-DE-BW" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5733" />
            <stop offset="100%" stopColor="#FFC300" />
          </linearGradient>
          <linearGradient id="gradient-DE-BY" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3F51B5" />
            <stop offset="100%" stopColor="#2196F3" />
          </linearGradient>
          <linearGradient id="gradient-DE-BE" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#8BC34A" />
          </linearGradient>
          <linearGradient id="gradient-DE-BB" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#E91E63" />
          </linearGradient>
          <linearGradient id="gradient-DE-HB" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BCD4" />
            <stop offset="100%" stopColor="#1E88E5" />
          </linearGradient>
          <linearGradient id="gradient-DE-HE" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FFEB3B" />
          </linearGradient>
          <linearGradient id="gradient-DE-MV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8BC34A" />
            <stop offset="100%" stopColor="#CDDC39" />
          </linearGradient>
          <linearGradient id="gradient-DE-NI" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#FF5722" />
          </linearGradient>
          <linearGradient id="gradient-DE-NW" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient>
          <linearGradient id="gradient-DE-RP" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#673AB7" />
            <stop offset="100%" stopColor="#512DA8" />
          </linearGradient>
          <linearGradient id="gradient-DE-SL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03A9F4" />
            <stop offset="100%" stopColor="#2196F3" />
          </linearGradient>
          <linearGradient id="gradient-DE-SN" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CDDC39" />
            <stop offset="100%" stopColor="#8BC34A" />
          </linearGradient>
          <linearGradient id="gradient-DE-ST" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEB3B" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>
          <linearGradient id="gradient-DE-TH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#795548" />
            <stop offset="100%" stopColor="#6D4C41" />
          </linearGradient>
        </defs>

        <Tooltip id="geo-tooltip" /> {/* Компонент Tooltip */}

        {/* Основні регіони (не вибрані) */}
        <Geographies geography={germanyGeo}>
          {({ geographies }) =>
            geographies
              .filter((geo) => selectedRegion !== geo.properties.name)
              .map((geo) => {
                const regionId = geo.properties.id; // Переконайся, що в GeoJSON є властивість id
                const regionClass = `${styles.geography} ${styles[regionId]}`;

                return (
                  <MemoizedGeography
                    key={geo.rsmKey}
                    geo={geo}
                    handleClick={handleRegionClick}
                    tooltipId="geo-tooltip"
                    tooltipContent={geo.properties.name}
                    className={regionClass}
                  />
                );
              })
          }
        </Geographies>

        {/* Вибраний регіон */}
        {selectedRegion && selectedGeo && (
          <>
            <Geographies geography={germanyGeo}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.properties.name === selectedRegion)
                  .map((geo) => {
                    const regionId = geo.properties.id;
                    const regionClass = `${styles.geography} ${styles.geographySelected} ${styles[regionId]}`;

                    return (
                      <MemoizedGeography
                        key={geo.rsmKey}
                        geo={geo}
                        handleClick={handleRegionClick}
                        tooltipId="geo-tooltip"
                        tooltipContent={geo.properties.name}
                        className={regionClass}
                      />
                    );
                  })
              }
            </Geographies>

            {/* Маркер з назвою регіону */}
            <Marker coordinates={getCentroid(selectedGeo)}>
              <circle r={5} fill="#FFEB3B" stroke="#333333" strokeWidth={1} />
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fontFamily: "system-ui",
                  fill: "#5D5A6D",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {selectedRegion}
              </text>
            </Marker>
          </>
        )}
      </ComposableMap>

      <div className={styles.selectedRegionText}>
        Вибраний регіон: {selectedRegion || "Немає вибраного регіону"}
      </div>
    </MainLayout>
  );
};

export default CustomGermanyMap;