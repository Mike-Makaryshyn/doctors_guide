// CustomGermanyMap.jsx

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
  const [centroid, setCentroid] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleRegionClick = (geo, projection) => {
    const regionName = geo.properties.name;
    setPendingRegion(regionName);
    const c = geoCentroid(geo);
    const [x, y] = projection(c);
    setCentroid([x, y]);
    if (isMobile) setIsModalOpen(true);
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

  const handleCloseModal = (e) => {
    if (e.target.className === styles.modalOverlay) {
      setIsModalOpen(false);
      setPendingRegion(null);
      setCentroid(null);
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
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 2200, center: [10, 51] }}
            className={styles.rsmComposableMap}
          >
            <Geographies geography={germanyGeo}>
              {({ geographies, projection }) =>
                geographies.map((geo) => {
                  const regionName = geo.properties.name;
                  const isSelected = selectedRegion === regionName;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleRegionClick(geo, projection)}
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
        {/* Інформаційна панель для десктопу */}
        {!isMobile && (
          <div className={styles.infoContainer}>
            {pendingRegion ? (
              <>
                {pendingRegion === selectedRegion && (
                  <p className={styles.currentRegionLabel}>Aktuell ausgewählte Region:</p>
                )}
                <h2 className={styles.regionName}>{pendingRegion}</h2>
                <p className={styles.greeting}>
                  {regionGreetings[pendingRegion]}
                </p>
                <img
                  src={regionCoatsOfArms[pendingRegion]}
                  alt={`${pendingRegion} Wappen`}
                  className={styles.coatOfArms}
                />
                <button
                  className={styles.dashboardButton}
                  onClick={handleDashboardClick}
                  aria-label="Zum Dashboard wechseln"
                >
                  <FaArrowRight /> {/* Використання тієї ж іконки */}
                </button>
              </>
            ) : (
              <p className={styles.greeting}>Wählen Sie eine Region</p>
            )}
          </div>
        )}
        {/* Модальне вікно для мобільних */}
        {isMobile && isModalOpen && pendingRegion && (
          <div
            className={styles.modalOverlay}
            onClick={handleCloseModal}
          >
            <div className={styles.modalContent}>
              <button
                className={styles.closeModalButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Schließen"
              >
                &times;
              </button>
              <div className={styles.modalInnerContent}>
                <div className={styles.modalLeft}>
                  {pendingRegion === selectedRegion && (
                    <p className={styles.currentRegionLabel}>Aktuell ausgewählte Region:</p>
                  )}
                  <h2 className={styles.regionName}>{pendingRegion}</h2>
                  <p className={styles.greeting}>
                    {regionGreetings[pendingRegion]}
                  </p>
                </div>
                <div className={styles.modalRight}>
                  <img
                    src={regionCoatsOfArms[pendingRegion]}
                    alt={`${pendingRegion} Wappen`}
                    className={styles.coatOfArmsMobile}
                  />
                  <button
                    className={styles.dashboardButton}
                    onClick={handleDashboardClick}
                    aria-label="Zum Dashboard wechseln"
                  >
                    <FaArrowRight /> {/* Використання тієї ж іконки */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CustomGermanyMap;