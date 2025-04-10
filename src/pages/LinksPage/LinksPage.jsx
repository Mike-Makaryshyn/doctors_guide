// LinksPage.jsx
// (Імпорти залишаються такими, як є)

import React, { useState, useMemo, useEffect, useRef } from "react";
import all_pages_data from "../../constants/trafarettes";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./LinksPage.module.scss";
import {
  FaSearch, FaTimes, FaStethoscope, FaHeartbeat, FaProcedures,
  FaBone, FaDna, FaMicroscope, FaFlask, FaVial, FaUserMd, FaUserNurse,
  FaSyringe, FaCapsules, FaPills, FaClinicMedical, FaVirus, FaBug, FaAllergies,
  FaCut, FaHandHoldingMedical, FaPrescriptionBottleAlt
} from "react-icons/fa";

// Функція підсвічування тексту
function highlightText(text, search) {
  if (!search) return text;
  const regex = new RegExp(`(${search})`, "gi");
  return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
}

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
  "Labordiagnostik": {
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
  const [openCat, setOpenCat] = useState(null);
  const [openSubCat, setOpenSubCat] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const pageRef = useRef(null);

  // Закриття пошуку при кліку поза елементом
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

  // Групування сторінок за трьома рівнями.
  // Якщо page.subCategory немає, зберігаємо сторінки у noSubCatPages.
  const groupedData = useMemo(() => {
    const result = {};
    all_pages_data.forEach((page) => {
      const mainCat = page.mainCategory || "NoMainCategory";
      const cat = page.category || "NoCategory";
      const subCat = page.subCategory || null;
      if (!result[mainCat]) result[mainCat] = {};
      if (!result[mainCat][cat]) {
        result[mainCat][cat] = { 
          noSubCatPages: [], 
          subCategories: {} 
        };
      }
      if (subCat) {
        if (!result[mainCat][cat].subCategories[subCat]) {
          result[mainCat][cat].subCategories[subCat] = [];
        }
        result[mainCat][cat].subCategories[subCat].push(page);
      } else {
        result[mainCat][cat].noSubCatPages.push(page);
      }
    });

    // Перетворюємо в масив для зручності рендерингу
    return Object.entries(result).map(([mainCatName, catsObj]) => ({
      mainCatName,
      categories: Object.entries(catsObj).map(([catName, dataObj]) => ({
        catName,
        noSubCatPages: dataObj.noSubCatPages,
        subCategories: Object.entries(dataObj.subCategories).map(([subCatName, pages]) => ({
          subCatName,
          pages,
        })),
      })),
    }));
  }, []);

  // Підготовка даних для пошуку.
  // Якщо пошуковий запит порожній, просто повертаємо дані без модифікацій.
  const processedData = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) {
      return groupedData.map(mainItem => ({
        mainCatName: mainItem.mainCatName,
        mainCatHighlighted: mainItem.mainCatName,
        mainMatches: false,
        categories: mainItem.categories.map(catItem => ({
          catName: catItem.catName,
          catHighlighted: catItem.catName,
          catMatches: false,
          noSubCatPages: catItem.noSubCatPages,
          subCategories: catItem.subCategories.map(subItem => ({
            subCatName: subItem.subCatName,
            subCatHighlighted: subItem.subCatName,
            subMatches: false,
            matchedPages: subItem.pages,
          })),
        })),
      }));
    }
    return groupedData.map(mainItem => {
      const mainMatches = mainItem.mainCatName.toLowerCase().includes(search);
      const categories = mainItem.categories.map(catItem => {
        const catMatches = catItem.catName.toLowerCase().includes(search);
        // Фільтруємо сторінки з noSubCatPages по заголовку
        const filteredNoSubPages = catItem.noSubCatPages.filter(page => {
          const title = (page?.content?.[0]?.title || "").toLowerCase();
          return title.includes(search);
        });
        const subCategories = catItem.subCategories.map(subItem => {
          const subMatches = subItem.subCatName.toLowerCase().includes(search);
          const matchedPages = subItem.pages.filter(page => {
            const title = (page?.content?.[0]?.title || "").toLowerCase();
            return title.includes(search);
          });
          return {
            subCatName: subItem.subCatName,
            subCatHighlighted: subMatches ? highlightText(subItem.subCatName, search) : subItem.subCatName,
            subMatches,
            matchedPages,
          };
        });
        return {
          catName: catItem.catName,
          catHighlighted: catMatches ? highlightText(catItem.catName, search) : catItem.catName,
          catMatches,
          noSubCatPages: filteredNoSubPages,
          subCategories,
        };
      });
      return {
        mainCatName: mainItem.mainCatName,
        mainCatHighlighted: mainMatches ? highlightText(mainItem.mainCatName, search) : mainItem.mainCatName,
        mainMatches,
        categories,
      };
    });
  }, [groupedData, searchTerm]);

  // Фільтрація: залишаємо лише ті групи, де є збіги
  const filteredData = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) return processedData;
    return processedData
      .map(mainItem => {
        const filteredCats = mainItem.categories.map(catItem => {
          const filteredSub = catItem.subCategories.filter(
            sub => sub.subMatches || sub.matchedPages.length > 0
          );
          // Якщо є результати у noSubCatPages або у підкатегоріях, беремо цю категорію
          if (catItem.catMatches || catItem.noSubCatPages.length > 0 || filteredSub.length > 0) {
            return { ...catItem, subCategories: filteredSub };
          }
          return null;
        }).filter(x => x);
        if (mainItem.mainMatches || filteredCats.length > 0) {
          return { ...mainItem, categories: filteredCats };
        }
        return null;
      })
      .filter(x => x);
  }, [processedData, searchTerm]);

  // Логіка відкриття/закриття для кожного рівня.
  // Якщо пошук активний, автоматично розкриваємо всі рівні.
  const isMainCatOpen = mainCatName => (searchTerm.trim() ? true : openMainCat === mainCatName);
  const isCatOpen = catName => (searchTerm.trim() ? true : openCat === catName);
  const isSubCatOpen = subCatName => (searchTerm.trim() ? true : openSubCat === subCatName);

  const handleMainCatClick = mainCatName => {
    if (searchTerm.trim()) return;
    setOpenMainCat(prev => (prev === mainCatName ? null : mainCatName));
  };

  const handleCatClick = catName => {
    if (searchTerm.trim()) return;
    setOpenCat(prev => (prev === catName ? null : catName));
  };

  const handleSubCatClick = subCatName => {
    if (searchTerm.trim()) return;
    setOpenSubCat(prev => (prev === subCatName ? null : subCatName));
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
            onChange={e => setSearchTerm(e.target.value)}
            autoFocus={isSearchActive}
          />
          <button className={styles.searchToggleButton} onClick={toggleSearch}>
            {isSearchActive ? <FaTimes /> : <FaSearch />}
          </button>
        </div>

        {/* Рендеринг трирівневого акордеону */}
        <div className={styles.accordionContainer}>
          {filteredData.map(mainItem => {
            const mainOpen = isMainCatOpen(mainItem.mainCatName);
            const visuals = categoryVisuals[mainItem.mainCatName] || {};
            return (
              <div key={mainItem.mainCatName} className={`${styles.accordionItem} ${mainOpen ? styles.open : ""}`}>
                <div
                  className={styles.accordionHeader}
                  style={{ backgroundColor: visuals.backgroundColor || "#fff" }}
                  onClick={() => handleMainCatClick(mainItem.mainCatName)}
                >
                  <div className={styles.floatingIconsContainer}>
                    {visuals.floatingIcons &&
                      visuals.floatingIcons.map((flo, idx) => (
                        <span key={idx} className={`${styles.floatingIcon} ${styles.floatingAnim}`} style={flo.style}>
                          {flo.icon}
                        </span>
                      ))}
                  </div>
                  <h2 dangerouslySetInnerHTML={{ __html: mainItem.mainCatHighlighted }} />
                </div>
                {mainOpen && (
                  <div className={styles.accordionContent}>
                    {mainItem.categories.map(catItem => {
                      const catOpen = isCatOpen(catItem.catName);
                      return (
                        <div key={catItem.catName} className={`${styles.subAccordionItem} ${catOpen ? styles.open : ""}`}>
                          <div
                            className={styles.subAccordionHeader}
                            onClick={() => handleCatClick(catItem.catName)}
                            dangerouslySetInnerHTML={{ __html: `<h3>${catItem.catHighlighted}</h3>` }}
                          />
                          {catOpen && (
                            <div className={styles.subAccordionContent}>
                              {/* Рендеримо сторінки без підкатегорій, якщо вони є */}
                              {catItem.noSubCatPages.length > 0 && (
                                <ul className={styles.pageList}>
                                  {catItem.noSubCatPages.map(page => {
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
                              )}
                              {/* Рендеримо підкатегорії, якщо вони є */}
                              {catItem.subCategories.map(subItem => {
                                const subOpen = isSubCatOpen(subItem.subCatName);
                                return (
                                  <div key={subItem.subCatName} className={`${styles.subAccordionItem} ${subOpen ? styles.open : ""}`}>
                                    <div
                                      className={styles.subAccordionHeader}
                                      onClick={() => handleSubCatClick(subItem.subCatName)}
                                      dangerouslySetInnerHTML={{ __html: `<h4>${subItem.subCatHighlighted}</h4>` }}
                                    />
                                    {subOpen && (
                                      <div className={styles.subAccordionContent}>
                                        <ul className={styles.pageList}>
                                          {subItem.matchedPages.map(page => {
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