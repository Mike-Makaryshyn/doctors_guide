// CustomGermanyMap.jsx
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import styles from "./CustomGermanyMap.module.css";
import germanyGeo from "./germanyGeo.json";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useIsMobile from "../../hooks/useIsMobile";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Іконка стрілочки

const CustomGermanyMap = () => {
  const { selectedRegion, handleChangeRegion } = useGetGlobalInfo();
  const [pendingRegion, setPendingRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleRegionHover = (geo) => {
    const regionName = geo.properties.name;
    setHoveredRegion(regionName); // Встановлюємо тимчасовий регіон при наведенні
  };

  const handleRegionLeave = () => {
    setHoveredRegion(null); // Очищаємо тимчасовий регіон при відведенні
  };

  const handleRegionClick = (geo) => {
    const regionName = geo.properties.name;
    setPendingRegion(regionName); // Вибираємо регіон
    if (isMobile) setIsModalOpen(true);
  };

  const handleDashboardClick = () => {
    if (pendingRegion) {
      const confirmChange = window.confirm(
        `Möchten Sie die Region auf "${pendingRegion}" wirklich ändern?`
      );
      if (confirmChange) {
        handleChangeRegion(pendingRegion);
        navigate("/dashboard");
      }
    }
  };

  const regionColors = {
    "Baden-Württemberg": "var(--DE-BW)",
    Bayern: "var(--DE-BY)",
    Berlin: "var(--DE-BE)",
    Brandenburg: "var(--DE-BB)",
    Bremen: "var(--DE-HB)",
    Hamburg: "var(--DE-HH)",
    Hessen: "var(--DE-HE)",
    "Mecklenburg-Vorpommern": "var(--DE-MV)",
    Niedersachsen: "var(--DE-NI)",
    "Nordrhein-Westfalen-Münster": "var(--DE-NW)",
    "Nordrhein-Westfalen-Westfalen": "var(--DE-NW)",
    "Rheinland-Pfalz": "var(--DE-RP)",
    Saarland: "var(--DE-SL)",
    Sachsen: "var(--DE-SN)",
    "Sachsen-Anhalt": "var(--DE-ST)",
    "Schleswig-Holstein": "var(--DE-SH)",
    Thüringen: "var(--DE-TH)",
  };

  const regionGreetings = {
    "Baden-Württemberg": "Grüß Gott",
    Bayern: "Servus",
    Berlin: "Hallo",
    Brandenburg: "Guten Tag",
    Bremen: "Moin",
    Hamburg: "Moin Moin",
    Hessen: "Gude",
    "Mecklenburg-Vorpommern": "Moin",
    Niedersachsen: "Moin",
    "Nordrhein-Westfalen-Münster": "Hallo Münster",
    "Nordrhein-Westfalen-Westfalen": "Hallo",
    "Rheinland-Pfalz": "Guten Tag",
    Saarland: "Hallo",
    Sachsen: "Guten Tag",
    "Sachsen-Anhalt": "Hallo",
    "Schleswig-Holstein": "Moin",
    Thüringen: "Guten Tag",
  };

  const regionCoatsOfArms = {
    "Baden-Württemberg": "/coats/Baden-Württember.svg",
    Bayern: "/coats/Bayer.svg",
    Berlin: "/coats/Berlin.svg",
    Brandenburg: "/coats/Brandenburg.svg",
    Bremen: "/coats/Bremen.svg",
    Hamburg: "/coats/Hamburg.svg",
    Hessen: "/coats/Hessen.svg",
    "Mecklenburg-Vorpommern": "/coats/Mecklenburg-Vorpommern.svg",
    Niedersachsen: "/coats/Niedersachsen.svg",
    "Westfalen-Lippe": "/coats/Nordrhein-Westfalen.svg",
    "Nordrhein-Westfalen": "/coats/Nordrhein-Westfalen.svg",
    "Rheinland-Pfalz": "/coats/Rheinland-Pfalz.svg",
    Saarland: "/coats/Saarland.svg",
    Sachsen: "/coats/Sachsen.svg",
    "Sachsen-Anhalt": "/coats/Sachsen-Anhalt.svg",
    "Schleswig-Holstein": "/coats/Schleswig-Holstein.svg",
    Thüringen: "/coats/Thüringen.svg",
  };

  const displayedRegion = hoveredRegion || pendingRegion || selectedRegion;

  useEffect(() => {
    if (isModalOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isMobile]);

  return (
    <MainLayout>
       {isMobile && (
  <div className={styles.mobileButtonContainer}>
    <button
  className={isMobile ? styles.mobileDashboardButton : styles.desktopDashboardButton}
  onClick={handleDashboardClick}
  aria-label="Zum Dashboard wechseln"
>
  <FaArrowRight />
</button>
  </div>
)}
      <div className={styles.container}>
      {isMobile && displayedRegion && (
  <div className={styles.mobileHeader}>
    <h2 className={styles.mobileRegionName}>{displayedRegion}</h2>
  </div>
)}
        <div className={styles.mapContainer}>
        <ComposableMap
  projection="geoMercator"
  projectionConfig={{
    scale: isMobile ? 3500 : 2500, /* Збільшуємо масштаб для мобільних */
    center: [10, 51],
  }}
  className={styles.rsmComposableMap}
>
            <Geographies geography={germanyGeo}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const regionName = geo.properties.name;
                  const isSelected = selectedRegion === regionName;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => handleRegionHover(geo)}
                      onMouseLeave={handleRegionLeave}
                      onClick={() => handleRegionClick(geo)}
                      className={`${styles.geography} ${
                        isSelected ? styles.geographySelected : ""
                      }`}
                      style={{
                        default: {
                          fill: regionColors[regionName] || "#cccccc",
                          outline: "none",
                        },
                        hover: {
                          fill: regionColors[regionName] || "#aaaaaa",
                          outline: "none",
                        },
                        pressed: {
                          fill: regionColors[regionName] || "#888888",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
        <div className={styles.infoContainer}>
          {displayedRegion ? (
            <>
              {displayedRegion === selectedRegion && (
                <p className={styles.currentRegionLabel}>
                  Aktuell ausgewählte Region:
                </p>
              )}
              <h2 className={styles.regionName}>{displayedRegion}</h2>
              <p className={styles.greeting}>
                {regionGreetings[displayedRegion]}
              </p>
              <img
                src={regionCoatsOfArms[displayedRegion]}
                alt={`${displayedRegion} Wappen`}
                className={styles.coatOfArms}
              />
              {!isMobile && (
               <button
               className={styles.mobileDashboardButton}
               onClick={handleDashboardClick}
               aria-label="Zum Dashboard wechseln"
             >
               <FaArrowRight />
               
             </button>
              )}
             
            </>
          ) : (
            <p className={styles.greeting}>Wählen Sie eine Region</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CustomGermanyMap;