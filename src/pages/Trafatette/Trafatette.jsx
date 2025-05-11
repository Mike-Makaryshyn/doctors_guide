import React, { useState, useRef, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import all_pages_data from "../../constants/trafarettes";
import styles from "./Trafarette.module.scss"; // не забудь додати наші нові стилі
import cn from "classnames";

// lazy‑load 3‑D компонент (пахвинний канал)
const InguinalCanal3D = React.lazy(() =>
  import("../../components/three/InguinalCanal")
);

// === Проста іконка-стрілочка (▲ / ▼), схожа на MindMapListView ===
const ArrowIcon = ({ isCollapsed }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowIconSvg}
  >
    {isCollapsed ? (
      // Якщо закрито – стрілка вправо
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      // Якщо відкрито – стрілка вниз
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const Trafarette = () => {
  const navigate = useNavigate();

  // 1. Визначаємо потрібну сторінку за URL
  const params = useParams();
  const page = all_pages_data?.find((p) => p?.path === params?.name)?.content;

  // 2. Відкриваємо за замовчуванням першу вкладку (parentTab)
  const [parentTabOpen, setParentTabOpen] = useState(page?.[0] || null);

  // Якщо в першій вкладці є childTabs, відкриємо їх
  const [childTabOpen, setChildTabOpen] = useState(() => {
    if (page?.[0]?.childTabs) {
      return [...page[0].childTabs];
    }
    return [];
  });

  // per-question feedback and selection
  const [feedbacks, setFeedbacks] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const timeoutRef = useRef(null);

  // 4. Tab 3: факти з прихованим контентом
  //    Ключ = `${parentTab.id}_${index}`
  const [openFactItems, setOpenFactItems] = useState({});

  // 5. Якщо в Tab 2 є додаткове поле hidden_answer, інколи хочеться його відкривати/закривати
  const [openAnswers, setOpenAnswers] = useState({});

  const [show3DModal, setShow3DModal] = useState(false);

  // =========================
  // Handlers
  // =========================

  // Натиск на parent tab
  const clickActiveParentTab = (e, tab) => {
    e.stopPropagation();
    if (parentTabOpen?.id === tab?.id) {
      setParentTabOpen(null);
      setChildTabOpen([]);
    } else {
      setParentTabOpen(tab);
      if (tab?.childTabs) {
        setChildTabOpen([...tab.childTabs]);
      } else {
        setChildTabOpen([]);
      }
    }
  };

  // Натиск на child tab (Tab 1)
  const clickActiveChildTab = (e, tab) => {
    e.stopPropagation();
    if (tab?.link) {
      window.open(tab?.link, "_blank");
      return;
    }
    setChildTabOpen((prevTabs) => {
      const isOpen = prevTabs.some((openTab) => openTab.id === tab.id);
      return isOpen
        ? prevTabs.filter((openTab) => openTab.id !== tab.id)
        : [...prevTabs, tab];
    });
  };

  // qIdx identifies the question index
  const handleAnswerChange = (e, answer, qIdx) => {
    e.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const isCorrect = answer?.isCorrect;
    setFeedbacks(prev => ({
      ...prev,
      [qIdx]: { msg: isCorrect ? "✔" : "✘", answer }
    }));
    timeoutRef.current = setTimeout(() => {
      setFeedbacks(prev => {
        const copy = { ...prev };
        delete copy[qIdx];
        return copy;
      });
    }, 3000);
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: answer.name }));
  };

  // Tab 2: якщо є окреме питання з hidden_answer
  const toggleAnswer = (questionId) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Tab 3: розгортання факту
  const toggleFactItem = (parentTabId, index) => {
    const factKey = `${parentTabId}_${index}`;
    setOpenFactItems((prev) => ({
      ...prev,
      [factKey]: !prev[factKey],
    }));
  };

// HTML-вміст для child tab
const renderChildTabContent = (childTab) => {
  // Render HTML content for all child tabs
  return (
    <div
      className={styles.childTab_content}
      dangerouslySetInnerHTML={{ __html: childTab?.textWithFormatting }}
    />
  );
};

  // Якщо немає даних, повертаємо Not found
  if (!page) {
    return (
      <MainLayout>
        <div style={{ padding: "40px" }}>
          <h2>Not found</h2>
          <p>No data for this page.</p>
        </div>
      </MainLayout>
    );
  }

  // =========================
  // Render
  // =========================
  return (
    <MainLayout>
      <div className={styles.trafarettePage}>
        {/* "Back"-Button */}
        <button
          className={styles.main_menu_back}
          onClick={() => navigate("/links")}
          title="Go back"
        >
          &#8592;
        </button>

        {/* Parent Tabs */}
        <div className={styles.tabsContainer}>
          {page.map((parentTab) => {
            const isActive = parentTabOpen?.id === parentTab.id;
            return (
              <div
                key={parentTab.id}
                className={cn(styles.tab, isActive && styles.activeTab)}
                onClick={(e) => clickActiveParentTab(e, parentTab)}
              >
                {parentTab.title}
              </div>
            );
          })}
        </div>

        {/* Контент вибраної вкладки */}
        <div className={styles.tabContentWrapper}>
          {page.map((parentTab) => {
            const isActiveTab = parentTabOpen?.id === parentTab?.id;
            return (
              <div
                key={parentTab.id}
                className={cn(
                  styles.parentTabItem,
                  isActiveTab && styles.showTab
                )}
              >
                {isActiveTab && (
                  <div className={styles.childTabsWrapper}>
                    {parentTab?.questions?.map((q, qIdx) => {
                      // === Якщо це multiple choice (Tab 2):
                      if (q?.answers) {
                        return (
                          <div
                            key={qIdx}
                            className={styles.questions}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className={styles.questionTitle}>
                              {q?.title}
                            </div>

                            <div
                              className={styles.answers}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {q?.answers.map((ans, ansIdx) => {
                                let answerClass = "";
                                if (
                                  feedbacks[qIdx]?.answer?.name === ans.name &&
                                  feedbacks[qIdx]?.msg === "✔"
                                ) {
                                  answerClass = styles.correctAnswer;
                                } else if (
                                  feedbacks[qIdx]?.answer?.name === ans.name &&
                                  feedbacks[qIdx]?.msg === "✘"
                                ) {
                                  answerClass = styles.wrongAnswer;
                                }
                                return (
                                  <div
                                    key={ansIdx}
                                    className={cn(
                                      styles.answerOption,
                                      answerClass
                                    )}
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name={`answer_${parentTab?.id}_${qIdx}`}
                                        value={ans.name}
                                        checked={selectedAnswers[qIdx] === ans.name}
                                        onChange={(e) =>
                                          handleAnswerChange(e, ans, qIdx)
                                        }
                                      />
                                      {ans.name}
                                    </label>
                                    {/* Позначка ✔ чи ✘ */}
                                    {feedbacks[qIdx]?.answer?.name === ans.name && (
                                      <div className={styles.feedback}>
                                        {feedbacks[qIdx]?.msg}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Можливо, у питанні є й hidden_answer? */}
                            {q?.hidden_answer && (
                              <div
                                className={styles.hidden_answer}
                                onClick={() => toggleAnswer(qIdx)}
                              >
                                {openAnswers[qIdx]
                                  ? q.hidden_answer
                                  : "Answer is hidden (click to reveal)"}
                              </div>
                            )}
                          </div>
                        );
                      } else {
                        // === Якщо це фактичне питання з hidden_answer (Tab 3):
                        const factKey = `${parentTab.id}_${qIdx}`;
                        const isOpen = !!openFactItems[factKey];
                        return (
                          <div
                            key={qIdx}
                            className={styles.factItem}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFactItem(parentTab.id, qIdx);
                            }}
                          >
                            {/* Тайтл + іконка */}
                            <div className={styles.factTitle}>
                              <span>{q.title}</span>
                              <span className={styles.arrowIconWrapper}>
                                <ArrowIcon isCollapsed={!isOpen} />
                              </span>
                            </div>

                            {/* При відкритті показуємо анімований блок */}
                            {isOpen && (
                              <div className={cn(styles.factContent, styles.factContentAnimation)}>
                                {q.hidden_answer}
                              </div>
                            )}
                          </div>
                        );
                      }
                    })}

                    {/* ============= Tab 1 (childTabs: Definition, Anatomie тощо) ============= */}
                    {parentTab?.childTabs?.map((childTab, childIdx) => {
                      const isChildOpen = childTabOpen.some(
                        (openTab) => openTab?.id === childTab?.id
                      );
                      return (
                        <div
                          key={childIdx}
                          className={styles.childTabsWrapp}
                          onClick={(e) => clickActiveChildTab(e, childTab)}
                        >
                          <div
                            className={cn(
                              styles.child_tab,
                              childTab?.link && styles.lessWidth
                            )}
                            style={{ color: "#013b6e" }}
                          >
                            {childTab?.title}
                            {childTab.component === "InguinalCanal3D" && (
                              <button
                                className={styles.threeBtn}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShow3DModal(true);
                                }}
                              >
                                3D
                              </button>
                            )}
                          </div>
                          {isChildOpen && (
                            <div
                              className={styles.childTabContentWrapper}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {renderChildTabContent(childTab)}
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
      <button
        className={styles.scrollToTop}
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="Scroll to top"
      >
        ↑
      </button>
      {show3DModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShow3DModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setShow3DModal(false)}
            >
              ✕
            </button>
            <Suspense fallback={<p style={{ padding: 20 }}>Завантаження 3‑D…</p>}>
              <InguinalCanal3D />
            </Suspense>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Trafarette;