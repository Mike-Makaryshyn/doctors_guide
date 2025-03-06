import React from "react";
import { Helmet } from "react-helmet";
import { APPROBATION_INFO } from "../../constants/translation/whatIsApprobation";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import cn from "classnames";

// Компонент для рендеринга абзацев с сохранением переносов строк
const RenderParagraphs = ({ text }) =>
  text.split("\n\n").map((para, index) => (
    <p key={index} className="white-space-pre-line">
      {para.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i !== arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));

const WhatIsApprobationPage = () => {
  const { selectedLanguage: language, handleChangePage } = useGetGlobalInfo();
  const content = APPROBATION_INFO[language];

  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{content.title || "What is Approbation?"}</title>
        <meta
          name="description"
          content={
            content.intro ||
            "Learn about the process of obtaining Approbation for doctors in Germany."
          }
        />
        <meta
          name="keywords"
          content="Approbation, doctors in Germany, medical license, Germany"
        />
        <meta name="author" content="Doctors Guide Team" />
      </Helmet>
      <div className={cn("page", "page1", "containerBigger", "mt-20")}>
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.what_is_approbation__content)}>
          <button
            className="main_menu_back"
            onClick={() => handleChangePage("/main_menu")}
          >
            &#8592;
          </button>

          {/* Заголовок и вступ */}
          <section>
            <h1>{content.title}</h1>
            <h4>{content.intro}</h4>
          </section>

          {/* Rechtsgrundlagen / Правовая база */}
          {content.rechtsgrundlagen && (
            <section>
              <h2>{content.rechtsgrundlagen.title}</h2>
              <ul>
                {content.rechtsgrundlagen.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Voraussetzungen / Вимоги */}
          {content.voraussetzungen && (
            <section>
              <h2>{content.voraussetzungen.title}</h2>
              {content.voraussetzungen.sections.map((sec, index) => (
                <div key={index}>
                  <h3>{sec.title}</h3>
                  <ul>
                    {sec.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Schritte / Этапы */}
          {content.schritte && (
            <section>
              <h2>{content.schritte.title}</h2>
              {content.schritte.steps.map((step, index) => (
                <div key={index}>
                  <h3>{step.title}</h3>
                  <ul>
                    {step.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Vorteile / Преимущества */}
          {content.vorteile && (
            <section>
              <h2>{content.vorteile.title}</h2>
              <ul>
                {content.vorteile.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Tipps / Практические советы */}
          {content.tipps && (
            <section>
              <h2>{content.tipps.title}</h2>
              {content.tipps.tips.map((tip, index) => (
                <div key={index}>
                  <h3>{tip.title}</h3>
                  <ul>
                    {tip.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* FAQ */}
          {content.faq && (
            <section>
              <h2>{content.faq.title}</h2>
              {content.faq.questions.map((q, index) => (
                <div key={index}>
                  <h4>{q.question}</h4>
                  <p>{q.answer}</p>
                </div>
              ))}
            </section>
          )}

          {/* Fazit / Вывод */}
          {content.fazit && (
            <section>
              <h2>{content.fazit.title}</h2>
              <p>{content.fazit.text}</p>
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default WhatIsApprobationPage;