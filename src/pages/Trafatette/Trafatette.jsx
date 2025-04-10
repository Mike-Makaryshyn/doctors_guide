import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import all_pages_data from "../../constants/trafarettes";
import styles from "./Trafarette.module.scss";
import cn from "classnames";

const Trafarette = () => {
  const navigate = useNavigate();

  // Holt die Daten zur aktuellen Seite
  const params = useParams();
  const page = all_pages_data?.find((p) => p?.path === params?.name)?.content;

  // Falls es Parent-Tabs gibt, zunächst die erste öffnen
  const [parentTabOpen, setParentTabOpen] = useState(page?.[0] || null);

  // Falls die erste Parent-Tab Child-Tabs hat, öffne sie standardmäßig
  const [childTabOpen, setChildTabOpen] = useState(() => {
    if (page?.[0]?.childTabs) {
      return [...page[0].childTabs];
    }
    return [];
  });

  // Fragen/Antworten-Feedback
  const [feedback, setFeedback] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const timeoutRef = useRef(null);

  // State für offene Fakten (Tab 3)
  const [openFacts, setOpenFacts] = useState({});

  // State für einzelne versteckte Antworten (falls vorhanden)
  const [openAnswers, setOpenAnswers] = useState({});

  // =========================
  // Handlers
  // =========================

  // Klick auf Parent-Tab (Öffnen/Schließen)
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

  // Klick auf Child-Tab
  const clickActiveChildTab = (e, tab) => {
    e.stopPropagation();
    if (tab?.link) {
      window.open(tab?.link, "_blank");
      return;
    }
    setChildTabOpen((prevTabs) => {
      const isOpen = prevTabs.some((openTab) => openTab.id === tab.id);
      if (isOpen) {
        return prevTabs.filter((openTab) => openTab.id !== tab.id);
      } else {
        return [...prevTabs, tab];
      }
    });
  };

  // Frage-Antwort-Auswertung
  const handleAnswerChange = (e, answer) => {
    e.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const isCorrect = answer?.isCorrect;
    setFeedback({
      msg: isCorrect ? "✔" : "✘",
      answer,
    });
    timeoutRef.current = setTimeout(() => {
      setFeedback({});
    }, 3000);
    setSelectedAnswer(answer.name);
  };

  // Toggle einzelner Fakt (Tab 3)
  const toggleFact = (factId) => {
    setOpenFacts((prev) => ({
      ...prev,
      [factId]: !prev[factId],
    }));
  };

  // Toggle einer versteckten Antwort (wenn vorhanden)
  const toggleAnswer = (questionId) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Kleine Hilfsfunktion, um ggf. Texte mit Links zu parsen
  const renderTextWithLinks = (text) => {
    const processText = (textString) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const parts = textString.split(urlRegex);
      return parts.map((part, index) => {
        if (part.match(urlRegex)) {
          return (
            <a
              className={styles.link}
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
      return text.map((item, idx) => (
        <p key={idx}>
          {processText(item)}
          {idx < text.length - 1 && " "}
        </p>
      ));
    }
    if (typeof text === "string") {
      return processText(text);
    }
    return null;
  };

  // Inhalt eines Child-Tabs (HTML via dangerouslySetInnerHTML)
  const renderChildTabContent = (childTab) => {
    return (
      <div
        className={styles.childTab_content}
        dangerouslySetInnerHTML={{ __html: childTab?.textWithFormatting }}
      />
    );
  };

  // Wenn keine Daten gefunden, Abbruch
  const currentPageData = page;
  if (!currentPageData) {
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
        {/* Back-Button */}
        <button
          className={styles.main_menu_back}
          onClick={() => navigate("/links")}
          title="Go back"
        >
          &#8592;
        </button>

        {/* Parent-Tabs (z. B. Anästhesie / Fragen / Faktenfragen) */}
        <div className={styles.tabsContainer}>
          {currentPageData?.map((parentTab) => {
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

        {/* Weißer Bereich mit dem Inhalt der aktiven Parent-Tab */}
        <div className={styles.tabContentWrapper}>
          {currentPageData?.map((parentTab) => {
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
                    {/* ================================
                        1) Fragen-Block (Tab 2)
                        ================================ */}
                    {parentTab?.questions?.map((q, qIdx) => (
                      <div
                        key={qIdx}
                        className={styles.questions}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className={styles.questionTitle}>{q?.title}</div>
                        {q?.answers && (
                          <div
                            className={styles.answers}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {q?.answers?.map((ans, ansIdx) => {
                              let answerClass = "";
                              if (
                                feedback?.answer?.name === ans.name &&
                                feedback?.msg === "✔"
                              ) {
                                answerClass = styles.correctAnswer; // grün
                              } else if (
                                feedback?.answer?.name === ans.name &&
                                feedback?.msg === "✘"
                              ) {
                                answerClass = styles.wrongAnswer; // rot
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
                                      checked={selectedAnswer === ans.name}
                                      onChange={(e) =>
                                        handleAnswerChange(e, ans)
                                      }
                                    />
                                    {ans.name}
                                  </label>
                                  {feedback?.answer?.name === ans.name && (
                                    <div className={styles.feedback}>
                                      {feedback?.msg}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Versteckte einzelne Antwort (falls vorhanden) */}
                        {q?.hidden_answer && (
                          <div
                            className={styles.hidden_answer}
                            onClick={() => toggleAnswer(q.id)}
                          >
                            {openAnswers[q.id]
                              ? q.hidden_answer
                              : "Answer is hidden (click to reveal)"}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* ================================
                        2) Child-Tabs (Tab 1 z.B. Anästhesie-Childs)
                        ================================ */}
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

                    {/* ================================
                        3) Faktenfragen (Tab 3) einzeln aufklappbar
                        ================================ */}
{parentTab?.facts?.map((fact) => {
  const isOpen = openFacts[fact.id];
  return (
    <div
      key={fact.id}
      className={styles.factItem}      // <--- eigener Stil, NICHT hidden_answer
      onClick={(e) => {
        e.stopPropagation();
        toggleFact(fact.id);
      }}
    >
      <div className={styles.factTitle}>
        {fact.title} {isOpen ? "▲" : "▼"}
      </div>

      {isOpen && (
        <div className={styles.factContent}>
          {fact.text}
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

export default Trafarette;