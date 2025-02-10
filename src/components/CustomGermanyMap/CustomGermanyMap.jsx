// CustomGermanyMap.jsx
<meta name="viewport" content="width=device-width, initial-scale=1" />

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import styles from "./CustomGermanyMap.module.css";
import germanyGeo from "./germanyGeo.json";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useIsMobile from "../../hooks/useIsMobile";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// ===============================
//   Wappen-Imports (Beispiele)
// ===============================
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
// Falls du wirklich ein separates Wappen willst, kannst du hier eine eigene SVG angeben
import WestfalenLippeCoat from "../../assets/coats/Nordrhein-Westfalen.svg"; 
import RheinlandPfalzCoat from "../../assets/coats/Rheinland-Pfalz.svg";
import SaarlandCoat from "../../assets/coats/Saarland.svg";
import SachsenCoat from "../../assets/coats/Sachsen.svg";
import SachsenAnhaltCoat from "../../assets/coats/Sachsen-Anhalt.svg";
import SchleswigHolsteinCoat from "../../assets/coats/Schleswig-Holstein.svg";
import ThueringenCoat from "../../assets/coats/Thüringen.svg";

// ==================================================================
// (1) Mapping-Funktion: Aus dem GeoJSON-Namen => "dein" Standardname
// ==================================================================
const nameMappings = {
  // Mecklenburg-Vorpommern (Bindestrich) zu Mecklenburg Vorpommern (Leerzeichen)
  "Mecklenburg-Vorpommern": "Mecklenburg Vorpommern",

  // NRW-Fälle. Manche GeoJSON-Dateien enthalten Zusätze wie "-Münster", "-Westfalen" etc.
  "Nordrhein-Westfalen-Münster": "Nordrhein-Westfalen",
  // Beispiel: falls du "Westfalen-Lippe" wirklich trennen willst
  "Nordrhein-Westfalen-Westfalen": "Westfalen-Lippe",

  // Wenn dein GeoJSON noch mehr Varianten hat, hier ergänzen:
  // "Baden-Wuerttemberg": "Baden-Württemberg",
  // "Thueringen": "Thüringen",
  // etc.
};

function unifyRegionName(rawName) {
  return nameMappings[rawName] || rawName;
}

// ==================================================================
// (2) Einzige, gültige Namen in Farbe, Gruß, Wappen usw.
// ==================================================================
const regionColors = {
  "Baden-Württemberg": "var(--DE-BW)",
  Bayern: "var(--DE-BY)",
  Berlin: "var(--DE-BE)",
  Brandenburg: "var(--DE-BB)",
  Bremen: "var(--DE-HB)",
  Hamburg: "var(--DE-HH)",
  Hessen: "var(--DE-HE)",
  "Mecklenburg Vorpommern": "var(--DE-MV)", // <-- mit Leerzeichen
  Niedersachsen: "var(--DE-NI)",

  // NRW als ein Bereich
  "Nordrhein-Westfalen": "var(--DE-NW)",
  // Westfalen-Lippe separat, falls du es so brauchst:
  "Westfalen-Lippe": "var(--DE-NW)",

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

// Coat-of-Arms (Wappen)
const regionCoatsOfArms = {
  "Baden-Württemberg": BadenWuerttembergCoat,
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

// ==================================================================
// (3) Die Hauptkomponente CustomGermanyMap
// ==================================================================
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
        navigate("/dashboard");
      }
    }
  };

  // Wird im UI angezeigt: Hover > Pending-Klick > ausgewählt
  const displayedRegion = hoveredRegion || pendingRegion || selectedRegion;

  // Scroll-Sperre für Mobile, wenn das Modal offen ist
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
      {/* Button (nur mobil sichtbar), um ins Dashboard zu gehen */}
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
        {/* Überschrift mit dem aktuellen Regionen-Namen (mobil) */}
        {isMobile && displayedRegion && (
          <div className={styles.mobileHeader}>
            <h2 className={styles.mobileRegionName}>{displayedRegion}</h2>
          </div>
        )}

        {/* Die eigentliche Karte */}
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

        {/* Rechte Infospalte oder unten, je nach Layout */}
        <div className={styles.infoContainer}>
          {displayedRegion ? (
            <>
              {/* Nur anzeigen, wenn displayedRegion = selectedRegion */}
              {displayedRegion === selectedRegion && (
                <p className={styles.currentRegionLabel}>
                  Aktuell ausgewählte Region:
                </p>
              )}
              <h2 className={styles.regionName}>{displayedRegion}</h2>
              <p className={styles.greeting}>
                {regionGreetings[displayedRegion]}
              </p>
              {/* Wappen, sofern vorhanden */}
              {regionCoatsOfArms[displayedRegion] && (
                <img
                  src={regionCoatsOfArms[displayedRegion]}
                  alt={`${displayedRegion} Wappen`}
                  className={styles.coatOfArms}
                />
              )}
              {/* Desktop-Button (falls nicht mobil) */}
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