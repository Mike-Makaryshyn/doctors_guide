import StaticTable from "../../components/StaticTable/StaticTable";
import { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import { parentTabs } from "../../constants/exam_explanations";
import cn from "classnames";

const ExamExplanationsPage = () => {
   const [parentTabOpen, setParentTabOpen] = useState(null);
   const [childTabOpen, setChildTabOpen] = useState(null);

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
      if (childTabOpen?.id === tab?.id) {
         setChildTabOpen(null);
      } else {
         setChildTabOpen(tab);
      }
   };

   const renderChildTabContent = (childTab, childIdx) => {
      if (childIdx === 0) {
         return childTab?.list?.map((tab, idx) => (
            <li className={styles.childTabContent} key={tab?.title}>
               <div className={styles.option_title}>
                  {idx + 1}. {tab.title}
               </div>

               <ul>
                  {tab?.items?.map((item) => (
                     <li className={styles.options}>
                        <span className={styles.bold}>{item?.bold_text}</span>
                        <span>{item?.text}</span>
                     </li>
                  ))}
               </ul>
            </li>
         ));
      }

      if (childIdx === 1 || childIdx === 2) {
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
                        <div>{parentTab?.title}</div>

                        <div
                           className={cn(
                              styles.childTabsWrapper,
                              parentTabOpen?.id === parentTab?.id
                                 ? styles.showChildTab
                                 : ""
                           )}
                        >
                           <div className={styles.childTabs}>
                              {parentTab?.childTabs?.map(
                                 (childTab, childIdx) => (
                                    <div
                                       className={cn(
                                          styles.child_tab,
                                          childTabOpen?.id === childTab?.id
                                             ? styles.active_child_tab
                                             : ""
                                       )}
                                       onClick={(e) =>
                                          clickActiveChildTab(e, childTab)
                                       }
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
                                 key={childIdx}
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
