import { useState, useEffect, useRef } from "react";
import StaticTable from "../../components/StaticTable/StaticTable";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { exam_categories, parentTabs } from "../../constants/exam_explanations";
import styles from "./styles.module.scss";
import { localStorageGet } from "../../utils/localStorage";
import cn from "classnames";

const handleChangePage = (path) => {
  window.location.href = path;
};

const ExamExplanationsPage = () => {
  const [parentTabOpen, setParentTabOpen] = useState(null);
  const [childTabOpen, setChildTabOpen] = useState(null);
  const [checkedParentIds, setCheckedParentIds] = useState([]);
  const [congrats, setCongrats] = useState(false);
  const activeTabRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickActiveParentTab = (e, tab) => {
    e.stopPropagation();
    if (parentTabOpen?.id === tab?.id) {
      setParentTabOpen(null);
      setChildTabOpen(null);
    } else {
      setParentTabOpen(tab);
      setChildTabOpen(tab?.childTabs?.[0]);
      if (activeTabRef.current) {
        activeTabRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setTimeout(() => {
          const rect = activeTabRef.current.getBoundingClientRect();
          const offset = 80; // Відступ
          window.scrollBy({
            top: rect.top - offset,
            behavior: "smooth",
          });
        }, 0);
      }
    }
  };

  const clickActiveChildTab = (e, tab) => {
    e.stopPropagation();
    if (tab?.link) {
      window.open(tab?.link, "_blank");
      return;
    }
    if (childTabOpen?.id === tab?.id) {
      setChildTabOpen(null);
    } else {
      setChildTabOpen(tab);
    }
  };

  useEffect(() => {
    const parentCheckedIds = localStorageGet("checkedParentTabIds");
    if (parentCheckedIds) {
      setCheckedParentIds(JSON.parse(parentCheckedIds));
    }
  }, []);

  const [mobileTableIndex, setMobileTableIndex] = useState(0);

  const nextRow = (rowsLength) => {
    setMobileTableIndex((prev) => (prev + 1 < rowsLength ? prev + 1 : 0));
  };

  const prevRow = (rowsLength) => {
    setMobileTableIndex((prev) => (prev - 1 >= 0 ? prev - 1 : rowsLength - 1));
  };

  // Рендер тексту з лінками
  const renderTextWithLinks = (text) => {
    if (!text) return null;
    const processText = (txt) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const parts = txt.split(urlRegex);
      return parts.map((part, i) =>
        part.match(urlRegex) ? (
          <a
            className="link"
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      );
    };
    if (Array.isArray(text)) {
      return text.map((item, idx) => <p key={idx}>{processText(item)}</p>);
    } else if (typeof text === "string") {
      return processText(text);
    }
    return null;
  };

  const renderChildTabContent = (childTab, childIdx) => {
    if (childIdx === 0) {
      return childTab?.list?.map((tabItem, idx) => (
        <li className={styles.childTabContent} key={`${tabItem?.title}${idx}`}>
          <div className={styles.option_title}>
            {idx + 1}. {tabItem.title}
          </div>
          <ul>
            {tabItem?.items?.map((item, iidx) => (
              <li key={`${iidx}${item?.text}`} className={styles.options}>
                {item?.bold_link ? (
                  <a
                    href={item?.bold_link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.bold}
                  >
                    {item?.bold_text}
                  </a>
                ) : (
                  <span className={styles.bold}>{item?.bold_text}</span>
                )}
                {item?.text?.length && (
                  <span>{renderTextWithLinks(item?.text)}</span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ));
    }

    if ([1, 2, 3].includes(childIdx)) {
      const rows = childTab?.tableRows || [];
      const columns = childTab?.tableColumns || [];

      if (!rows.length) {
        return <p>Тут немає даних для відображення.</p>;
      }

      if (!isMobile) {
        // Десктоп
        return (
          <div className={cn(styles.table_wrapper, styles.examTable)}>
            <StaticTable
              title={childTab?.title || "Таблиця"}
              columns={columns}
              data={rows}
              renderTextWithLinks={renderTextWithLinks}
            />
          </div>
        );
      } else {
        const currentRow = rows[mobileTableIndex] || {};
        return (
          <div className={styles.mobileTable}>
            <div className={styles.mobileTableCardWrapper}>
              {/* Ліва стрілка */}
              <button
                className={cn(styles.arrowVertical, styles.arrowLeftVertical)}
                onClick={() => prevRow(rows.length)}
              >
                ←
              </button>

              <div className={styles.mobileTableCard}>
                {/* Вміст картки */}
                {columns.map((col, idx) => {
                  const isFirstColumn = col.name === "first";
                  return (
                    <div key={idx} className={styles.cardPair}>
                      {col.visualText && (
                        <div className={styles.headerBlock}>
                          {renderTextWithLinks(col.visualText)}
                        </div>
                      )}
                      <div
                        className={
                          isFirstColumn
                            ? `${styles.textBlock} ${styles.textBlockFirst}`
                            : styles.textBlock
                        }
                      >
                        {renderTextWithLinks(currentRow[col.name] || "")}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Права стрілка */}
              <button
                className={cn(styles.arrowVertical, styles.arrowRightVertical)}
                onClick={() => nextRow(rows.length)}
              >
                →
              </button>
            </div>

            {/* Лічильник посередині знизу */}
            <div className={styles.bottomCounter}>
              {mobileTableIndex + 1}/{rows.length}
            </div>
          </div>
        );
      }
    }

    if (childIdx === 4) {
      return (
        <div className={styles.tabFive}>
          <div className={styles.tabFiveTop}>
            <div className={styles.text_top}>
              {childTab?.text?.length && (
                <p className={styles.text}>
                  {renderTextWithLinks(childTab?.text)}
                </p>
              )}
              <div className={styles.text_left}>
                {childTab?.text_list?.map((item, idx) => (
                  <p className={styles.bottom_item} key={`childTab${idx}`}>
                    <strong>
                      {idx + 1}.
                      {item?.bold_link ? (
                        <a
                          className="link"
                          target="_blank"
                          rel="noreferrer"
                          href={item?.bold_link}
                        >
                          {item?.bold}
                        </a>
                      ) : (
                        renderTextWithLinks(item?.bold)
                      )}
                    </strong>
                    {renderTextWithLinks(item?.other)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (childIdx === 5 || childIdx === 6) {
      return (
        <div className={styles.tabFive}>
          <div className={styles.tabFiveTop}>
            <div className={styles.text_top}>
              {childTab?.text?.length && (
                <p className={styles.text}>
                  {renderTextWithLinks(childTab?.text)}
                </p>
              )}
              <div className={styles.text_left}>
                {childTab?.text_list?.map((item, idx) => (
                  <p className={styles.bottom_item} key={`ctab${idx}`}>
                    <strong>
                      {idx + 1}.
                      {item?.bold_link ? (
                        <a
                          className="link"
                          target="_blank"
                          rel="noreferrer"
                          href={item?.bold_link}
                        >
                          {item?.bold}
                        </a>
                      ) : (
                        renderTextWithLinks(item?.bold)
                      )}
                    </strong>
                    {renderTextWithLinks(item?.other)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <MainLayout>
      <div className="page page1 containerBigger containerMax mt-20">
        <div className="firstPageImageBlock"></div>
        <div className="main_menu__content">
          <div className={styles.parentTabsWrapper}>
            {parentTabs.map((parentTab) => {
              const category = exam_categories?.find(
                (cat) => cat?.show_before_id === parentTab.id
              );
              return (
                <div key={parentTab?.id}>
                  {category && (
                    <div className={styles.categoryTitle}>{category.title}</div>
                  )}
                  <div
                    onClick={(e) => clickActiveParentTab(e, parentTab)}
                    className={styles.parentTabItem}
                    ref={
                      parentTabOpen?.id === parentTab?.id ? activeTabRef : null
                    }
                  >
                    <div className={cn(styles.pTab, "noselect")}>
                      <div className={styles.pTitle}>{parentTab?.title}</div>
                    </div>
                    <div
                      className={cn(
                        styles.childTabsWrapper,
                        parentTabOpen?.id === parentTab?.id
                          ? styles.showChildTab
                          : ""
                      )}
                    >
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className={styles.childTabs}
                      >
                        {parentTab?.childTabs?.map((childTab) => (
                          <div
                            className={cn(
                              styles.child_tab,
                              childTabOpen?.id === childTab?.id
                                ? styles.active_child_tab
                                : "",
                              childTab?.link ? styles.lessWidth : "",
                              "noselect"
                            )}
                            onClick={(e) => clickActiveChildTab(e, childTab)}
                            key={childTab?.id}
                          >
                            {childTab?.title}
                          </div>
                        ))}
                      </div>
                      {parentTab?.childTabs?.map((childTab, childIdx) => (
                        <div
                          onClick={(e) => clickActiveChildTab(e, childTab)}
                          key={`child${childIdx}`}
                        >
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className={cn(
                              styles.childTabContentWrapper,
                              childTabOpen?.id === childTab?.id
                                ? styles.showChildTab
                                : ""
                            )}
                          >
                            {renderChildTabContent(childTab, childIdx)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ExamExplanationsPage;
