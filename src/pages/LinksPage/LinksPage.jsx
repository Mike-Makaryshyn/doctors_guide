import React, { useState, useMemo, useEffect, useRef } from "react";
import all_pages_data from "../../constants/trafarettes";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./LinksPage.module.scss";
import { FaSearch, FaTimes } from "react-icons/fa";

/** 
 * Функція підсвічування: замінює всі збіги (регістр не враховуємо)
 * на <span class="highlight">...</span>.
 */
function highlightText(text, search) {
  if (!search) return text; // Нема пошуку – повертаємо як є

  const regex = new RegExp(`(${search})`, "gi");
  // Розбиваємо текст, додаємо <span>, з'єднуємо назад у рядок з допомогою .replace
  return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
}

const LinksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategory, setOpenCategory] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const pageRef = useRef(null);

  // При кліку "поза" сторінкою згортаємо пошук
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSearchActive &&
        pageRef.current &&
        !pageRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive]);

  // 1) Групуємо сторінки за category
  const groupedData = useMemo(() => {
    return all_pages_data.reduce((acc, page) => {
      const cat = page.category || "NoCategory";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(page);
      return acc;
    }, {});
  }, []);

  /** 
   * Створюємо "розширену" структуру: 
   * [{
   *   catName: string,
   *   catHighlighted: string (з підсвічуванням),
   *   catMatches: boolean (чи збігається назва категорії із пошуком),
   *   matchedPages: Page[], // тільки ті сторінки, де є збіг
   * }]
   */
  const processedData = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    // Якщо немає пошуку, просто повертаємо всі категорії, всі сторінки
    if (!search) {
      return Object.entries(groupedData).map(([catName, pages]) => ({
        catName,
        catHighlighted: catName,
        catMatches: false,
        matchedPages: pages,
      }));
    }

    // Якщо є пошук:
    return Object.entries(groupedData).map(([catName, pages]) => {
      const catMatches = catName.toLowerCase().includes(search);

      // Знайти сторінки, в яких title містить пошук
      const matchedPages = pages.filter((p) => {
        const title = p?.content?.[0]?.title?.toLowerCase() || "";
        return title.includes(search);
      });

      // Якщо назва категорії збігається, можна 
      // (А) Показати всі сторінки: matchedPages = pages
      // (Б) Показати лише знайдені: matchedPages = matchedPages
      // Нижче варіант (А) – розкоментуй за потреби.
      // if (catMatches) {
      //   return {
      //     catName,
      //     catHighlighted: highlightText(catName, search),
      //     catMatches: true,
      //     matchedPages: pages, // Показуємо усі
      //   };
      // }

      // Якщо назва категорії НЕ збігається, але деякі сторінки збіглися
      // тоді повертаємо тільки ті сторінки
      return {
        catName,
        catHighlighted: catMatches
          ? highlightText(catName, search)
          : catName, // підсвічуємо, якщо назва категорії також містить пошук
        catMatches,
        matchedPages,
      };
    });
  }, [groupedData, searchTerm]);

  /**
   * Тепер відфільтровуємо категорії: лишаємо ті, де:
   * - catMatches === true, або
   * - є хоча б 1 сторінка у matchedPages
   */
  const filteredCategories = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) {
      // немає пошуку – всі повертаємо
      return processedData;
    }
    return processedData.filter(
      (item) => item.catMatches || item.matchedPages.length > 0
    );
  }, [processedData, searchTerm]);

  // Автовідкриття категорій, якщо є пошук і в категорії є збіги
  // Якщо пошуку немає, керуємося openCategory
  const isCategoryOpen = (catName) => {
    if (searchTerm.trim()) {
      // Якщо в пошуку, робимо автозакриття / автовідкриття?
      // Тут – відкриваємо **всі** категорії, що лишилися після фільтра
      // Можеш змінити логіку, наприклад, відкривати лише ті, де name або pages збіглися.
      return true;
    }
    return openCategory === catName;
  };

  // Клік по заголовку поза пошуком
  const handleTileClick = (catName) => {
    // Якщо пошук активний, ми і так усі категорії відкрили
    // Якщо хочеш дозволити вручну згортати при пошуку, можна змінити логіку
    if (searchTerm.trim()) return;
    setOpenCategory((prev) => (prev === catName ? null : catName));
  };

  // Тогл пошуку
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
      {/* Контейнер сторінки */}
      <div className={styles.linksPage} ref={pageRef}>
        {/* Кнопка пошуку праворуч угорі */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Suche..."
            className={`${styles.searchInput} ${
              isSearchActive ? styles.active : ""
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus={isSearchActive}
          />
          <button className={styles.searchToggleButton} onClick={toggleSearch}>
            {isSearchActive ? <FaTimes /> : <FaSearch />}
          </button>
        </div>

        {/* Accordion */}
        <div className={styles.accordionContainer}>
          {filteredCategories.map((item) => {
            const { catName, catHighlighted, matchedPages } = item;
            const open = isCategoryOpen(catName);

            return (
              <div
                key={catName}
                className={`${styles.accordionItem} ${open ? styles.open : ""}`}
              >
                {/* Заголовок категорії. Виводимо HTML, який згенерувала highlightText */}
                <div
                  className={styles.accordionHeader}
                  onClick={() => handleTileClick(catName)}
                  dangerouslySetInnerHTML={{ __html: `<h2>${catHighlighted}</h2>` }}
                />
                {open && (
                  <div className={styles.accordionContent}>
                    <ul className={styles.pageList}>
                      {matchedPages.map((page) => {
                        const subTitle = page?.content?.[0]?.title || "no title";
                        // Підсвітка назви сторінки
                        const highlightedTitle = highlightText(
                          subTitle,
                          searchTerm.trim()
                        );

                        return (
                          <li key={page.path} className={styles.pageListItem}>
                            <div className={styles.folderName}>
                              {page.folder}
                            </div>
                            <a
                              href={`/trafarette/${page.path}`}
                              className={styles.pageLink}
                              dangerouslySetInnerHTML={{
                                __html: highlightedTitle,
                              }}
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
      </div>
    </MainLayout>
  );
};

export default LinksPage;