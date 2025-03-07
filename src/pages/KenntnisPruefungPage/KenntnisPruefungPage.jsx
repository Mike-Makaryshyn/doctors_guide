import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { KENNTNISPRUEFUNG_INFO } from "../../constants/translation/kenntnisPruefung";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";
// Імпортуємо зображення для мета-даних
import guideImage from "../../assets/whatisbilder/kenntnispruefung_guide.jpg";

// Компонент для рендерингу абзаців із підтримкою переносів рядків
const RenderParagraphs = ({ text }) => {
  return text.split("\n\n").map((para, index) => (
    <p key={index} className="white-space-pre-line">
      {para.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i !== arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));
};

const KenntnisPruefungPage = () => {
  const { selectedLanguage: language, handleChangePage } = useGetGlobalInfo();

  // Отримання контенту відповідно до вибраної мови
  const content = KENNTNISPRUEFUNG_INFO[language];
  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{content.title || "Kenntnisprüfung"}</title>
        <meta
          name="description"
          content={
            content.intro ||
            "Informationen über die Kenntnisprüfung für Ärzte in Deutschland."
          }
        />
        {/* Open Graph Metadaten in deutscher Sprache */}
        <meta property="og:title" content={content.title || "Kenntnisprüfung"} />
        <meta
          property="og:description"
          content={
            content.intro ||
            "Informationen über die Kenntnisprüfung für Ärzte in Deutschland."
          }
        />
        <meta property="og:image" content={guideImage} />
      </Helmet>
      <div className="page containerBigger mt-20">
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.knowledge_examination_content)}>
          <button
            className="main_menu_back"
            onClick={() => handleChangePage("/main_menu")}
          >
            &#8592;
          </button>

          {/* Title & Intro */}
          <section>
            <h1>{content.title || "Title not available"}</h1>
            {content.intro && <RenderParagraphs text={content.intro} />}
          </section>

          {/* Definition */}
          {content.definition && (
            <section>
              <h2>{content.definitionTitle || "Was ist die Kenntnisprüfung?"}</h2>
              <RenderParagraphs text={content.definition} />
            </section>
          )}

          {/* When Needed */}
          {content.whenNeeded && (
            <section>
              <h2>{content.whenNeededTitle || "Wann ist die Kenntnisprüfung nötig?"}</h2>
              <RenderParagraphs text={content.whenNeeded} />
            </section>
          )}

          {/* Contents */}
          {content.contents && (
            <section>
              <h2>{content.contentsTitle || "Prüfungsinhalte"}</h2>
              <RenderParagraphs text={content.contents} />
            </section>
          )}

          {/* Process */}
          {content.process && (
            <section>
              <h2>{content.process.title || "Ablauf der Kenntnisprüfung"}</h2>
              {content.process.steps &&
                content.process.steps.map((step, index) => (
                  <div key={index}>
                    <h4>{step.title || "Step title not available"}</h4>
                    <ul>
                      {step.description.map((desc, idx) => (
                        <li key={idx}>
                          <RenderParagraphs text={desc} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </section>
          )}

          {/* Preparation */}
          {content.preparation && (
            <section>
              <h2>{content.preparation.title || "Vorbereitung"}</h2>
              {content.preparation.points && (
                <ul>
                  {content.preparation.points.map((point, index) => (
                    <li key={index}>
                      <RenderParagraphs text={point} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* FAQ */}
          {content.faq && Array.isArray(content.faq) && (
            <section>
              <h2>{"Häufig gestellte Fragen"}</h2>
              {content.faq.map((item, index) => (
                <div key={index}>
                  <strong>{item.question}</strong>
                  <RenderParagraphs text={item.answer} />
                </div>
              ))}
            </section>
          )}

          {/* Conclusion */}
          {content.conclusion && (
            <section>
              <h2>{content.conclusionTitle || "Fazit"}</h2>
              <RenderParagraphs text={content.conclusion} />
            </section>
          )}

          {/* Additional Courses */}
          {content.additionalCourses && (
            <section>
              <RenderParagraphs text={content.additionalCourses} />
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default KenntnisPruefungPage;