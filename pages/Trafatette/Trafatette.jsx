import { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import all_pages_data from "../../constants/trafarettes";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useParams } from "react-router-dom";

const Trafarette = () => {
   const [parentTabOpen, setParentTabOpen] = useState(
      all_pages_data?.[0]?.content?.[0] || null
   );

   const params = useParams();
   const page = all_pages_data?.find((p) => p?.path === params?.name)?.content;
   const [childTabOpen, setChildTabOpen] = useState([page?.[0]?.childTabs[0]] || []);

   const [showAnswers, setShowAnswers] = useState(false);
   const [checkedParentIds, setCheckedParentIds] = useState([]);
   const activeTabRef = useRef(null);

   const [feedback, setFeedback] = useState({});
   const timeoutRef = useRef(null);

   const clickActiveParentTab = (e, tab, index) => {
      e.stopPropagation();

      setShowAnswers(false);

      if (parentTabOpen?.id === tab?.id) {
         setParentTabOpen(null);
         setChildTabOpen([]);
      } else {
         setParentTabOpen(tab);
         setChildTabOpen([tab?.childTabs?.[0]]);

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
               {itemIndex < text.length - 1 && " "}
            </p>
         ));
      }

      if (typeof text === "string") {
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

      setChildTabOpen((prevTabs) => {
         if (prevTabs.some((openTab) => openTab.id === tab.id)) {
            // If the tab is already open, remove it from the array (close the tab)
            return prevTabs.filter((openTab) => openTab.id !== tab.id);
         } else {
            // Otherwise, add the tab to the array (open the tab)
            return [...prevTabs, tab];
         }
      });
   };

   const [selectedAnswer, setSelectedAnswer] = useState(null);

   const handleAnswerChange = (e, answer) => {
      e.stopPropagation();

      // Clear the previous timeout
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }

      const selectedValue = e.target.value;

      const isCorrect = answer?.isCorrect;

      if (isCorrect) {
         setFeedback({ msg: "Congrats! This is the correct answer", answer });
      } else {
         setFeedback({ msg: "This is the wrong answer", answer });
      }

      timeoutRef.current = setTimeout(() => {
         setFeedback({});
      }, 3000);

      setSelectedAnswer(selectedValue);
   };

   const renderChildTabContent = (childTab, childIdx) => {
      return (
         <div
            className={styles.childTab_content}
            dangerouslySetInnerHTML={{ __html: childTab?.textWithFormatting }}
         ></div>
      );

      return null;
   };

   const currentPageData = all_pages_data?.find(
      (page) => page?.path === params?.name
   )?.content;

   return (
      <MainLayout>
         <div className="page page1 containerBigger containerMax mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.parentTabsWrapper}>
                  <div className={styles.parentTabTitles}>
                     {currentPageData?.map((parentTab, index) => (
                        <div
                           onClick={(e) => clickActiveParentTab(e, parentTab)}
                           className={cn(
                              styles.parentTabTitle,
                              parentTabOpen?.id === parentTab?.id
                                 ? styles.activeTitle
                                 : "",
                              "noselect"
                           )}
                           key={`${parentTab?.id}pt`}
                        >
                           {parentTab?.title}
                        </div>
                     ))}
                  </div>

                  {currentPageData?.map((parentTab, index) => {
                     return (
                        <div key={parentTab?.id}>
                           <div
                              className={cn(
                                 styles.parentTabItem,
                                 parentTabOpen?.id === parentTab?.id
                                    ? styles.activeTab
                                    : ""
                              )}
                           >
                              <div
                                 className={cn(
                                    styles.childTabsWrapper,
                                    parentTabOpen?.id === parentTab?.id
                                       ? styles.showChildTab
                                       : ""
                                 )}
                              >
                                 {parentTab?.questions?.map((q, idx) => (
                                    <div
                                       onClick={(e) => e.stopPropagation()}
                                       className={styles.questions}
                                       key={idx}
                                    >
                                       <div className={styles.question}>
                                          {q?.title}
                                       </div>

                                       <div
                                          onClick={(e) => e.stopPropagation()}
                                          className={styles.answers}
                                       >
                                          {q?.answers?.map((ans, idx) => (
                                             <div
                                                key={idx}
                                                className={styles.answerOption}
                                             >
                                                <label>
                                                   <input
                                                      type="radio"
                                                      name="answer"
                                                      value={ans.name}
                                                      checked={
                                                         selectedAnswer ===
                                                         ans.name
                                                      }
                                                      onChange={(e) =>
                                                         handleAnswerChange(
                                                            e,
                                                            ans
                                                         )
                                                      }
                                                   />
                                                   {ans.name}
                                                </label>

                                                {feedback?.answer?.name ===
                                                   ans?.name && (
                                                   <div
                                                      className={
                                                         styles.feedback
                                                      }
                                                   >
                                                      {feedback?.msg}
                                                   </div>
                                                )}
                                             </div>
                                          ))}
                                       </div>

                                       {q?.hidden_answer && (
                                          <div
                                             className={cn(
                                                !showAnswers
                                                   ? styles.hidden_answer
                                                   : ""
                                             )}
                                          >
                                             {q.hidden_answer}
                                          </div>
                                       )}

                                       {q?.hidden_answer &&
                                          idx ===
                                             parentTab?.questions?.length - 1 &&
                                          !showAnswers && (
                                             <button
                                                onClick={() =>
                                                   setShowAnswers(true)
                                                }
                                             >
                                                Show all answers
                                             </button>
                                          )}
                                    </div>
                                 ))}

                                 {parentTab?.childTabs?.map(
                                    (childTab, childIdx) => (
                                       <div
                                          className={styles.childTabsWrapp}
                                          onClick={(e) =>
                                             clickActiveChildTab(e, childTab)
                                          }
                                          key={`child${childIdx}`}
                                       >
                                          <div
                                             className={cn(
                                                styles.child_tab,
                                                Array.isArray(childTabOpen) &&
                                                   childTabOpen
                                                      .filter(Boolean)
                                                      .some(
                                                         (openTab) =>
                                                            openTab?.id ===
                                                            childTab?.id
                                                      )
                                                   ? styles.active_child_tab
                                                   : "",
                                                childTab?.link
                                                   ? styles.lessWidth
                                                   : "",
                                                "noselect"
                                             )}
                                          >
                                             {childTab?.title}
                                          </div>

                                          <div
                                             onClick={(e) =>
                                                e.stopPropagation()
                                             }
                                             className={cn(
                                                styles.childTabContentWrapper,
                                                childTabOpen.some(
                                                   (openTab) =>
                                                      openTab?.id ===
                                                      childTab?.id
                                                )
                                                   ? styles.showChildTab
                                                   : ""
                                             )}
                                          >
                                             {renderChildTabContent(
                                                childTab,
                                                childIdx
                                             )}
                                          </div>
                                       </div>
                                    )
                                 )}
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

export default Trafarette;
