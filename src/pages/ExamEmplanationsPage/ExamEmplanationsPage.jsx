import { useState, useEffect, useRef } from "react";
import StaticTable from "../../components/StaticTable/StaticTable";
import Checkbox from "../../components/Checkbox/Checkbox";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { exam_categories, parentTabs } from "../../constants/exam_explanations";
import styles from "./styles.module.scss";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import cn from "classnames";

const ExamExplanationsPage = () => {
   const [parentTabOpen, setParentTabOpen] = useState(null);
   const [childTabOpen, setChildTabOpen] = useState(null);
   const [checkedParentIds, setCheckedParentIds] = useState([]);
   const [congrats, setCongrats] = useState(false);
   const activeTabRef = useRef(null);

   const clickActiveParentTab = (e, tab, index) => {
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
               const offset = 80; // Offset value
               window.scrollBy({
                  top: rect.top - offset,
                  behavior: "smooth",
               });
            }, 0);
         }
      }
   };

   const renderTextWithLinks = (text) => {
      // Helper function to process a single string
      const processText = (textString) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = textString.split(urlRegex);
    
        return parts.map((part, index) => {
          if (part.match(urlRegex)) {
            return (
              <a
                className="link"
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            );
          } else {
            return <span key={index}>{part}</span>;
          }
        });
      };
    
      if (Array.isArray(text)) {
        return text.map((item, itemIndex) => (
          <p key={itemIndex}>
            {processText(item)}
            {itemIndex < text.length - 1 && ' '}
          </p>
        ));
      }
    
      if (typeof text === 'string') {
        return processText(text);
      }
    
      return null;
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

   const handleCheckboxChange = (parentId) => {
      setCheckedParentIds((prevCheckedParentIds) => {
         if (prevCheckedParentIds.includes(parentId)) {
            const updatedCheckedParentIds = prevCheckedParentIds.filter(
               (id) => id !== parentId
            );
            localStorageSet(
               "checkedParentTabIds",
               JSON.stringify(updatedCheckedParentIds)
            );
            return updatedCheckedParentIds;
         } else {
            setCongrats(true);
            const updatedCheckedParentIds = [...prevCheckedParentIds, parentId];
            localStorageSet(
               "checkedParentTabIds",
               JSON.stringify(updatedCheckedParentIds)
            );
            return updatedCheckedParentIds;
         }
      });
   };

   // Initialize state from localStorage
   useEffect(() => {
      const parentCheckedIds = localStorageGet("checkedParentTabIds");
      if (parentCheckedIds) {
         setCheckedParentIds(JSON.parse(parentCheckedIds));
      }
   }, []);

   const renderChildTabContent = (childTab, childIdx) => {
      if (childIdx === 0) {
         return childTab?.list?.map((tab, idx) => (
            <li className={styles.childTabContent} key={`${tab?.title}${idx}`}>
               <div className={styles.option_title}>
                  {idx + 1}. {tab.title}
               </div>

               <ul>
                  {tab?.items?.map((item, iidx) => (
                     <li
                        key={`${iidx}${item?.text}`}
                        className={styles.options}
                     >
                        {item?.bold_link && (
                           <a
                              href={bold_link}
                              target="_blank"
                              className={styles.bold}
                           >
                              {item?.bold_text}
                           </a>
                        )}
                        {!item?.bold_link && (
                           <span className={styles.bold}>
                              {item?.bold_text}
                           </span>
                        )}
                        {!!item?.text?.length && (
                           <span>{renderTextWithLinks(item?.text)}</span>
                        )}
                     </li>
                  ))}
               </ul>
            </li>
         ));
      }

      if (childIdx === 1 || childIdx === 2 || childIdx === 3) {
         return (
            <div className={styles.table_wrapper}>
               <StaticTable
                  title={"test"}
                  columns={childTab?.tableColumns}
                  data={childTab?.tableRows}
                  renderTextWithLinks={renderTextWithLinks}
               />
            </div>
         );
      }

      if (childIdx === 4) {
         return (
            <div className={styles.tabFive}>
               <div className={styles.tabFiveTop}>
                  <div className={styles.images}>
                     {childTab?.img && <img src={childTab?.img} alt="Schema" />}
                     {childTab?.second_img && <img src={childTab?.img} alt="Schema" />}
                  </div>
                  <div className={styles.text_top}>
                     {!!childTab?.text?.length && (
                        <p className={styles.text}>
                           {renderTextWithLinks(childTab?.text)}
                        </p>
                     )}

                     <div className={styles.text_left}>
                        {childTab?.text_list?.map((item, idx) => (
                           <p
                              className={styles.bottom_item}
                              key={`childTab${idx}`}
                           >
                              <strong>
                                 {idx + 1}.
                                 {item?.bold_link && (
                                    <a
                                       className={"link"}
                                       target={"_blank"}
                                       href={item?.bold_link}
                                    >
                                       {item?.bold}
                                    </a>
                                 )}
                                 {!item?.bold_link &&
                                    renderTextWithLinks(item?.bold)}
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
                  {childTab?.img && <img src={childTab?.img} alt="Schema" />}
                  <div className={styles.text_top}>
                     {!!childTab?.text?.length && (
                        <p className={styles.text}>
                           {renderTextWithLinks(childTab?.text)}
                        </p>
                     )}

                     <div className={styles.text_left}>
                        {childTab?.text_list?.map((item, idx) => (
                           <p className={styles.bottom_item} key={`ctab${idx}`}>
                              <strong>
                                 {idx + 1}.
                                 {item?.bold_link && (
                                    <a
                                       className={"link"}
                                       target={"_blank"}
                                       href={item?.bold_link}
                                    >
                                       {item?.bold}
                                    </a>
                                 )}
                                 {!item?.bold_link &&
                                    renderTextWithLinks(item?.bold)}
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

      return null; // Handle other cases if needed
   };

   return (
      <MainLayout>
         <div className="page page1 containerBigger containerMax mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.parentTabsWrapper}>
               {parentTabs.map((parentTab, index) => {
   
            const category = exam_categories?.find(cat => cat?.show_before_id === parentTab.id);

            return (
               <div key={parentTab?.id}>
                  {category && (
                     <div className={styles.categoryTitle}>
                        {category.title}
                     </div>
                  )}

                  <div
                     onClick={(e) => clickActiveParentTab(e, parentTab, index)}
                     className={styles.parentTabItem}
                     ref={parentTabOpen?.id === parentTab?.id ? activeTabRef : null}
                  >
                     <div className={cn(styles.pTab, "noselect")}>
                        <div className={styles.pTitle}>
                           {parentTab?.title}
                        </div>
                        <Checkbox
                           label={"Gelernt"}
                           value={checkedParentIds.includes(parentTab?.id)}
                           onChange={() => handleCheckboxChange(parentTab?.id)}
                           labelRight
                        />
                     </div>
                     <div
                        className={cn(
                           styles.childTabsWrapper,
                           parentTabOpen?.id === parentTab?.id ? styles.showChildTab : ""
                        )}
                     >
                        <div
                           onClick={(e) => e.stopPropagation()}
                           className={styles.childTabs}
                        >
                           {parentTab?.childTabs?.map((childTab, childIdx) => (
                              <div
                                 className={cn(
                                    styles.child_tab,
                                    childTabOpen?.id === childTab?.id ? styles.active_child_tab : "",
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
                                    childTabOpen?.id === childTab?.id ? styles.showChildTab : ""
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
            <button
               className={"main_menu_back"}
               onClick={() => handleChangePage("/main_menu")}
            >
               &#8592;
            </button>
         </div>
      </MainLayout>
   );
};

export default ExamExplanationsPage;
