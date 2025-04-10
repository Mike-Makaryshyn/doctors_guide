import React, { useState, useMemo, useEffect, useRef } from "react";
import all_pages_data from "../../constants/trafarettes";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./LinksPage.module.scss";

/* react-icons */
import {
  FaSearch, FaTimes, FaStethoscope, FaHeartbeat, FaProcedures,
  FaBone, FaDna, FaMicroscope, FaFlask, FaVial, FaUserMd, FaUserNurse,
  FaSyringe, FaCapsules, FaPills, FaClinicMedical, FaVirus, FaBug, FaAllergies,
  FaCut, FaHandHoldingMedical, FaPrescriptionBottleAlt
} from "react-icons/fa";

/**
 * Функція підсвічування: замінює всі збіги (без врахування регістру)
 * на <span class="highlight">...</span>.
 */
function highlightText(text, search) {
  if (!search) return text;
  const regex = new RegExp(`(${search})`, "gi");
  return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
}

/**
 * Об’єкт із ключами = mainCategory, 
 * де зберігаємо:
 * - backgroundColor: щоб задати легкий градієнт або колір
 * - floatingIcons: масив із info про іконки (кожна іконка + стиль і анімація)
 */
const categoryVisuals = {
  "Innere Medizin": {
    backgroundColor: "#f9d6d8",
    floatingIcons: [
      { icon: <FaStethoscope />, style: { top: "10%", right: "5%" } },
      { icon: <FaHeartbeat />, style: { top: "30%", right: "10%" } },
      { icon: <FaProcedures />, style: { top: "50%", right: "6%" } },
      { icon: <FaUserMd />, style: { top: "70%", right: "8%" } },
      { icon: <FaUserNurse />, style: { top: "40%", right: "2%" } },
    ],
  },
  "Anatomie & Physiologie": {
    backgroundColor: "#d0eaff",
    floatingIcons: [
      { icon: <FaBone />, style: { top: "20%", right: "6%" } },
      { icon: <FaDna />, style: { top: "45%", right: "3%" } },
      { icon: <FaMicroscope />, style: { top: "60%", right: "10%" } },
      { icon: <FaSyringe />, style: { top: "35%", right: "8%" } },
      { icon: <FaCut />, style: { top: "15%", right: "2%" } },
    ],
  },
  Endokrinologie: {
    backgroundColor: "#e6d0f8",
    floatingIcons: [
      { icon: <FaFlask />, style: { top: "25%", right: "3%" } },
      { icon: <FaVial />, style: { top: "45%", right: "6%" } },
      { icon: <FaHeartbeat />, style: { top: "60%", right: "8%" } },
      { icon: <FaPrescriptionBottleAlt />, style: { top: "70%", right: "2%" } },
      { icon: <FaCapsules />, style: { top: "40%", right: "10%" } },
    ],
  },
  Labordiagnostik: {
    backgroundColor: "#f2ffe6",
    floatingIcons: [
      { icon: <FaMicroscope />, style: { top: "15%", right: "3%" } },
      { icon: <FaFlask />, style: { top: "35%", right: "8%" } },
      { icon: <FaVial />, style: { top: "55%", right: "4%" } },
      { icon: <FaBug />, style: { top: "70%", right: "9%" } },
      { icon: <FaUserMd />, style: { top: "40%", right: "2%" } },
    ],
  },
  "Klinische Untersuchung": {
    backgroundColor: "#fffae6",
    floatingIcons: [
      { icon: <FaStethoscope />, style: { top: "10%", right: "8%" } },
      { icon: <FaUserMd />, style: { top: "30%", right: "3%" } },
      { icon: <FaUserNurse />, style: { top: "45%", right: "10%" } },
      { icon: <FaHandHoldingMedical />, style: { top: "60%", right: "6%" } },
      { icon: <FaHeartbeat />, style: { top: "75%", right: "2%" } },
    ],
  },
  "Chirurgie & Anästhesie": {
    backgroundColor: "#d0fff9",
    floatingIcons: [
      { icon: <FaSyringe />, style: { top: "20%", right: "3%" } },
      { icon: <FaUserNurse />, style: { top: "40%", right: "7%" } },
      { icon: <FaCut />, style: { top: "55%", right: "2%" } },
      { icon: <FaProcedures />, style: { top: "70%", right: "8%" } },
      { icon: <FaBone />, style: { top: "35%", right: "10%" } },
    ],
  },
  "Therapie & Medikamente": {
    backgroundColor: "#f0fff8",
    floatingIcons: [
      { icon: <FaCapsules />, style: { top: "15%", right: "6%" } },
      { icon: <FaPills />, style: { top: "45%", right: "3%" } },
      { icon: <FaClinicMedical />, style: { top: "60%", right: "9%" } },
      { icon: <FaPrescriptionBottleAlt />, style: { top: "75%", right: "2%" } },
      { icon: <FaHeartbeat />, style: { top: "35%", right: "7%" } },
    ],
  },
  Allergie: {
    backgroundColor: "#ffeef0",
    floatingIcons: [
      { icon: <FaVirus />, style: { top: "15%", right: "3%" } },
      { icon: <FaAllergies />, style: { top: "40%", right: "9%" } },
      { icon: <FaBug />, style: { top: "60%", right: "6%" } },
      { icon: <FaVial />, style: { top: "75%", right: "2%" } },
      { icon: <FaSyringe />, style: { top: "35%", right: "10%" } },
    ],
  },
};

const LinksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openMainCat, setOpenMainCat] = useState(null);
  const [openSubCat, setOpenSubCat] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const pageRef = useRef(null);

  // Закриваємо пошук при кліку поза сторінкою
  useEffect(() => {
    function handleClickOutside(event) {
      if (isSearchActive && pageRef.current && !pageRef.current.contains(event.target)) {
        setIsSearchActive(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchActive]);

  // Групуємо сторінки за mainCategory, потім за category
  const groupedData = useMemo(() => {
    return all_pages_data.reduce((acc, page) => {
      const mainCat = page.mainCategory || "NoMainCategory";
      const subCat = page.category || "NoCategory";
      if (!acc[mainCat]) acc[mainCat] = {};
      if (!acc[mainCat][subCat]) acc[mainCat][subCat] = [];
      acc[mainCat][subCat].push(page);
      return acc;
    }, {});
  }, []);

  // Обробка пошуку — підсвічування, фільтрація
  const processedData = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) {
      return Object.entries(groupedData).map(([mainCat, subCats]) => ({
        mainCatName: mainCat,
        mainCatHighlighted: mainCat,
        mainMatches: false,
        subCategories: Object.entries(subCats).map(([subCat, pages]) => ({
          subCatName: subCat,
          subCatHighlighted: subCat,
          subMatches: false,
          matchedPages: pages,
        })),
      }));
    }
    return Object.entries(groupedData).map(([mainCat, subCats]) => {
      const mainMatches = mainCat.toLowerCase().includes(search);
      const processedSub = Object.entries(subCats).map(([subCat, pages]) => {
        const subMatches = subCat.toLowerCase().includes(search);
        const matchedPages = pages.filter((page) => {
          const title = (page?.content?.[0]?.title || "").toLowerCase();
          return title.includes(search);
        });
        return {
          subCatName: subCat,
          subCatHighlighted: subMatches ? highlightText(subCat, search) : subCat,
          subMatches,
          matchedPages,
        };
      });
      return {
        mainCatName: mainCat,
        mainCatHighlighted: mainMatches ? highlightText(mainCat, search) : mainCat,
        mainMatches,
        subCategories: processedSub,
      };
    });
  }, [groupedData, searchTerm]);

  // Фільтрація: залишаємо лише ті, де є збіг
  const filteredData = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) return processedData;
    return processedData
      .map((mainItem) => {
        const filteredSub = mainItem.subCategories.filter(
          (sub) => sub.subMatches || sub.matchedPages.length > 0
        );
        return { ...mainItem, subCategories: filteredSub };
      })
      .filter((mainItem) => mainItem.mainMatches || mainItem.subCategories.length > 0);
  }, [processedData, searchTerm]);

  // Логіка відкриття/закриття
  const isMainCatOpen = (mainCatName) => (searchTerm.trim() ? true : openMainCat === mainCatName);
  const isSubCatOpen = (subCatName) => (searchTerm.trim() ? true : openSubCat === subCatName);

  const handleMainCatClick = (mainCatName) => {
    if (searchTerm.trim()) return;
    setOpenMainCat((prev) => (prev === mainCatName ? null : mainCatName));
  };

  const handleSubCatClick = (subCatName) => {
    if (searchTerm.trim()) return;
    setOpenSubCat((prev) => (prev === subCatName ? null : subCatName));
  };

  const toggleSearch = () => {
    if (isSearchActive) {
      setIsSearchActive(false);
      setSearchTerm("");
    } else {
      setIsSearchActive(true);
    }
  };

  return (
    <MainLayout>
      <div className={styles.linksPage} ref={pageRef}>
        {/* Пошук */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Suche..."
            className={`${styles.searchInput} ${isSearchActive ? styles.active : ""}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus={isSearchActive}
          />
          <button className={styles.searchToggleButton} onClick={toggleSearch}>
            {isSearchActive ? <FaTimes /> : <FaSearch />}
          </button>
        </div>

        {/* Акордеон */}
        <div className={styles.accordionContainer}>
          {filteredData.map((mainItem) => {
            const mainOpen = isMainCatOpen(mainItem.mainCatName);
            const visuals = categoryVisuals[mainItem.mainCatName] || {};
            return (
              <div key={mainItem.mainCatName} className={`${styles.accordionItem} ${mainOpen ? styles.open : ""}`}>
                <div
                  className={styles.accordionHeader}
                  style={{ backgroundColor: visuals.backgroundColor || "#fff" }}
                  onClick={() => handleMainCatClick(mainItem.mainCatName)}
                >
                  {/* Блок фонових іконок (праворуч) */}
                  <div className={styles.floatingIconsContainer}>
                    {visuals.floatingIcons &&
                      visuals.floatingIcons.map((flo, idx) => (
                        <span
                          key={idx}
                          className={`${styles.floatingIcon} ${styles.floatingAnim}`}
                          style={flo.style}
                        >
                          {flo.icon}
                        </span>
                      ))}
                  </div>

                  {/* Назва категорії (зліва) */}
                  <h2 dangerouslySetInnerHTML={{ __html: mainItem.mainCatHighlighted }} />
                </div>
                {mainOpen && (
                  <div className={styles.accordionContent}>
                    {mainItem.subCategories.map((subItem) => {
                      const subOpen = isSubCatOpen(subItem.subCatName);
                      return (
                        <div key={subItem.subCatName} className={`${styles.subAccordionItem} ${subOpen ? styles.open : ""}`}>
                          <div
                            className={styles.subAccordionHeader}
                            onClick={() => handleSubCatClick(subItem.subCatName)}
                            dangerouslySetInnerHTML={{ __html: `<h3>${subItem.subCatHighlighted}</h3>` }}
                          />
                          {subOpen && (
                            <div className={styles.subAccordionContent}>
                              <ul className={styles.pageList}>
                                {subItem.matchedPages.map((page) => {
                                  const subTitle = page?.content?.[0]?.title || "no title";
                                  const highlightedTitle = highlightText(subTitle, searchTerm.trim());
                                  return (
                                    <li key={page.path} className={styles.pageListItem}>
                                      <div className={styles.folderName}>{page.folder}</div>
                                      <a
                                        href={`/trafarette/${page.path}`}
                                        className={styles.pageLink}
                                        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
                                      />
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default LinksPage;