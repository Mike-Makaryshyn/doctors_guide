import { useState, useEffect, useRef } from "react";
import StaticTable from "../../components/StaticTable/StaticTable";
import Checkbox from "../../components/Checkbox/Checkbox";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { parentTabs } from "../../constants/exam_explanations";
import styles from "./styles.module.scss";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import cn from "classnames";

const ExamExplanationsPage = () => {
   const [parentTabOpen, setParentTabOpen] = useState(null);
   const [childTabOpen, setChildTabOpen] = useState(null);
   const [checkedParentIds, setCheckedParentIds] = useState([]);
   const [congrats, setCongrats] = useState(false);

   const clickActiveParentTab = (e, tab) => {
      e.stopPropagation();

      if (parentTabOpen?.id === tab?.id) {
         setParentTabOpen(null);
         setChildTabOpen(null);
      } else {
         setParentTabOpen(tab);
         setChildTabOpen(tab?.childTabs?.[0]);
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

   const handleCheckboxChange = (parentId) => {
      setCheckedParentIds((prevCheckedParentIds) => {
         if (prevCheckedParentIds.includes(parentId)) {
            const updatedCheckedParentIds = prevCheckedParentIds.filter(id => id !== parentId);
            localStorageSet('checkedParentTabIds', JSON.stringify(updatedCheckedParentIds));
            return updatedCheckedParentIds;
         } else {
            setCongrats(true);
            const updatedCheckedParentIds = [...prevCheckedParentIds, parentId];
            localStorageSet('checkedParentTabIds', JSON.stringify(updatedCheckedParentIds));
            return updatedCheckedParentIds;
         }
      });
   };

   // Initialize state from localStorage
   useEffect(() => {
      const parentCheckedIds = localStorageGet('checkedParentTabIds');
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
                     <li key={`${iidx}${item?.text}`} className={styles.options}>
                        <span className={styles.bold}>{item?.bold_text}</span>
                        <span>{item?.text}</span>
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
               />
            </div>
         );
      }

      if (childIdx === 4) {
         return (
            <div className={styles.tabFive}>
               <div className={styles.tabFiveTop}>
                  {childTab?.img && <img src={childTab?.img} alt="Schema" />}
                  <div className={styles.text_top}>
                     <p className={styles.text}>{childTab?.text}</p>

                     <div className={styles.text_left}>
                        {childTab?.text_list?.map((item, idx) => (
                           <p className={styles.bottom_item} key={`childTab${idx}`}>
                              <strong>
                                 {idx + 1}.{item?.bold}
                              </strong>
                              {item?.other}
                           </p>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         );
      }

      if (childIdx === 5) {
         return (
            <div className={styles.tabFive}>
               <div className={styles.tabFiveTop}>
                  {childTab?.img && <img src={childTab?.img} alt="Schema" />}
                  <div className={styles.text_top}>
                     <p className={styles.text}>{childTab?.text}</p>

                     <div className={styles.text_left}>
                        {childTab?.text_list?.map((item, idx) => (
                           <p className={styles.bottom_item} key={`ctab${idx}`}>
                              <strong>
                                 {idx + 1}.{item?.bold}
                              </strong>
                              {item?.other}
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
         <div className="page page1 containerBigger mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.parentTabsWrapper}>

                  {parentTabs?.map((parentTab) => (
                     <div
                        onClick={(e) => clickActiveParentTab(e, parentTab)}
                        className={styles.parentTabItem}
                        key={parentTab?.id}
                     >
                           <div className={cn(styles.pTab, 'noselect')}>
                              <div className={styles.pTitle}>{parentTab?.title}</div>
                              <Checkbox
                                 label={'Gelernt'}
                                    value={checkedParentIds?.includes(parentTab?.id)}
                                    onChange={() =>
                                       handleCheckboxChange(parentTab?.id)
                                    }
                                    labelRight
                                 />
                           </div>
                        <div
                           className={cn(
                              styles.childTabsWrapper,
                              parentTabOpen?.id === parentTab?.id
                                 ? styles.showChildTab
                                 : ""
                           )}
                        >
                           <div onClick={(e)=> e.stopPropagation()} className={styles.childTabs}>
                              {parentTab?.childTabs?.map(
                                 (childTab, childIdx) => (
                                    <div
                                       className={cn(
                                          styles.child_tab,
                                          childTabOpen?.id === childTab?.id
                                             ? styles.active_child_tab
                                             : "",
                                             childTab?.link ? styles.lessWidth : '',
                                             'noselect'
                                       )}
                                       onClick={(e) =>
                                          clickActiveChildTab(e, childTab)
                                       }
                                       key={childTab?.id}
                                    >
                                       {childTab?.title}
                                    </div>
                                 )
                              )}
                           </div>

                           {parentTab?.childTabs?.map((childTab, childIdx) => (
                              <div
                                 onClick={(e) =>
                                    clickActiveChildTab(e, childTab)
                                 }
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
                  ))}
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
