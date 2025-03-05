// CustomGermanyMap.jsx
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "./CustomGermanyMap.module.css";
import germanyGeo from "./germanyGeo.json";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useIsMobile from "../../hooks/useIsMobile";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import BadenWuerttembergCoat from "../../assets/coats/Baden-Württember.svg";
import BayernCoat from "../../assets/coats/Bayer.svg";
import BerlinCoat from "../../assets/coats/Berlin.svg";
import BrandenburgCoat from "../../assets/coats/Brandenburg.svg";
import BremenCoat from "../../assets/coats/Bremen.svg";
import HamburgCoat from "../../assets/coats/Hamburg.svg";
import HessenCoat from "../../assets/coats/Hessen.svg";
import MecklenburgVorpommernCoat from "../../assets/coats/Mecklenburg-Vorpommern.svg";
import NiedersachsenCoat from "../../assets/coats/Niedersachsen.svg";
import NordrheinWestfalenCoat from "../../assets/coats/Nordrhein-Westfalen.svg";
import WestfalenLippeCoat from "../../assets/coats/Nordrhein-Westfalen.svg";
import RheinlandPfalzCoat from "../../assets/coats/Rheinland-Pfalz.svg";
import SaarlandCoat from "../../assets/coats/Saarland.svg";
import SachsenCoat from "../../assets/coats/Sachsen.svg";
import SachsenAnhaltCoat from "../../assets/coats/Sachsen-Anhalt.svg";
import SchleswigHolsteinCoat from "../../assets/coats/Schleswig-Holstein.svg";
import ThueringenCoat from "../../assets/coats/Thüringen.svg";

// Name-Mappings, falls gebraucht
const nameMappings = {
  "Mecklenburg-Vorpommern": "Mecklenburg Vorpommern",
  "Nordrhein-Westfalen-Münster": "Nordrhein-Westfalen",
  "Nordrhein-Westfalen-Westfalen": "Westfalen-Lippe",
};

function unifyRegionName(rawName) {
  return nameMappings[rawName] || rawName;
}

// Jetzt vier Teilregionen mit eigenen (ähnlichen) Farben
const regionColors = {
  // BW-Hauptregion (falls vorhanden)
  "Baden-Württemberg": "#f15958",

  "Baden-Württemberg-Freiburg": "#f15958",
  "Baden-Württemberg-Karlsruhe": "#ed625b",
  "Baden-Württemberg-Stuttgart": "#f17666",
  "Baden-Württemberg-Reutlingen": "#f18d79",

  Bayern: "var(--DE-BY)",
  Berlin: "var(--DE-BE)",
  Brandenburg: "var(--DE-BB)",
  Bremen: "var(--DE-HB)",
  Hamburg: "var(--DE-HH)",
  Hessen: "var(--DE-HE)",
  "Mecklenburg Vorpommern": "var(--DE-MV)",
  Niedersachsen: "var(--DE-NI)",
  "Nordrhein-Westfalen": "var(--DE-NW)",
  "Westfalen-Lippe": "var(--DE-NW)",
  "Rheinland-Pfalz": "var(--DE-RP)",
  Saarland: "var(--DE-SL)",
  Sachsen: "var(--DE-SN)",
  "Sachsen-Anhalt": "var(--DE-ST)",
  "Schleswig-Holstein": "var(--DE-SH)",
  Thüringen: "var(--DE-TH)",
};

// Greetings etc. 1:1 beibehalten
const regionGreetings = {
  "Baden-Württemberg": "Grüß Gott",
  "Baden-Württemberg-Freiburg": "Grüß Gott",
  "Baden-Württemberg-Karlsruhe": "Grüß Gott",
  "Baden-Württemberg-Stuttgart": "Grüß Gott",
  "Baden-Württemberg-Reutlingen": "Grüß Gott",

  Bayern: "Servus",
  Berlin: "Hallo",
  Brandenburg: "Guten Tag",
  Bremen: "Moin",
  Hamburg: "Moin Moin",
  Hessen: "Gude",
  "Mecklenburg Vorpommern": "Moin",
  Niedersachsen: "Moin",
  "Nordrhein-Westfalen": "Hallo NRW",
  "Westfalen-Lippe": "Hallo Westfalen-Lippe",
  "Rheinland-Pfalz": "Guten Tag",
  Saarland: "Hallo",
  Sachsen: "Guten Tag",
  "Sachsen-Anhalt": "Hallo",
  "Schleswig-Holstein": "Moin",
  Thüringen: "Guten Tag",
};

const regionCoatsOfArms = {
  "Baden-Württemberg": BadenWuerttembergCoat,
  "Baden-Württemberg-Freiburg": BadenWuerttembergCoat,
  "Baden-Württemberg-Karlsruhe": BadenWuerttembergCoat,
  "Baden-Württemberg-Stuttgart": BadenWuerttembergCoat,
  "Baden-Württemberg-Reutlingen": BadenWuerttembergCoat,

  Bayern: BayernCoat,
  Berlin: BerlinCoat,
  Brandenburg: BrandenburgCoat,
  Bremen: BremenCoat,
  Hamburg: HamburgCoat,
  Hessen: HessenCoat,
  "Mecklenburg Vorpommern": MecklenburgVorpommernCoat,
  Niedersachsen: NiedersachsenCoat,
  "Nordrhein-Westfalen": NordrheinWestfalenCoat,
  "Westfalen-Lippe": WestfalenLippeCoat,
  "Rheinland-Pfalz": RheinlandPfalzCoat,
  Saarland: SaarlandCoat,
  Sachsen: SachsenCoat,
  "Sachsen-Anhalt": SachsenAnhaltCoat,
  "Schleswig-Holstein": SchleswigHolsteinCoat,
  Thüringen: ThueringenCoat,
};

// Hauptkomponente
const CustomGermanyMap = () => {
  const { selectedRegion, handleChangeRegion } = useGetGlobalInfo();
  const [pendingRegion, setPendingRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleRegionHover = (geo) => {
    const rawName = geo.properties.name;
    const unified = unifyRegionName(rawName);
    setHoveredRegion(unified);
  };

  const handleRegionLeave = () => {
    setHoveredRegion(null);
  };

  const handleRegionClick = (geo) => {
    const rawName = geo.properties.name;
    const unified = unifyRegionName(rawName);
    setPendingRegion(unified);
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  const handleDashboardClick = () => {
    if (pendingRegion) {
      const confirmChange = window.confirm(
        `Möchten Sie die Region auf "${pendingRegion}" wirklich ändern?`
      );
      if (confirmChange) {
        handleChangeRegion(pendingRegion);
        navigate("/main_menu"); 
      }
    }
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
            className={
              isMobile
                ? styles.mobileDashboardButton
                : styles.desktopDashboardButton
            }
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
              scale: isMobile ? 3500 : 2500,
              center: [10, 51],
            }}
            className={styles.rsmComposableMap}
          >
            <Geographies geography={germanyGeo}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const rawName = geo.properties.name;
                  const regionName = unifyRegionName(rawName);
                  const isSelected = selectedRegion === regionName;
                  const fillColor = regionColors[regionName] || "#cccccc";

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
                          fill: fillColor,
                          outline: "none",
                        },
                        hover: {
                          fill: fillColor,
                          outline: "none",
                        },
                        pressed: {
                          fill: fillColor,
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
              {regionCoatsOfArms[displayedRegion] && (
                <img
                  src={regionCoatsOfArms[displayedRegion]}
                  alt={`${displayedRegion} Wappen`}
                  className={styles.coatOfArms}
                />
              )}
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