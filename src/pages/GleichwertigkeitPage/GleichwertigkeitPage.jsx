import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { GLEICHWERTIGKEIT_INFO } from "../../constants/translation/whatIsGleichwertigkeit";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";
import gleichwertigkeitImage from "../../assets/whatisbilder/gleichwertigkeit-image.jpg"; // імпорт картинки для мета-даних

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

const GleichwertigkeitPage = () => {
  const { selectedLanguage: language, handleChangePage } = useGetGlobalInfo();
  const content = GLEICHWERTIGKEIT_INFO[language];

  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{content.title || "Gleichwertigkeit der medizinischen Ausbildung"}</title>
        <meta
          name="description"
          content={
            content.intro ||
            "Information about the recognition of the equivalence of foreign medical education in Germany."
          }
        />
        {/* Open Graph Metadaten */}
        <meta property="og:title" content={content.title || "Gleichwertigkeit der medizinischen Ausbildung"} />
        <meta
          property="og:description"
          content={
            content.intro ||
            "Information about the recognition of the equivalence of foreign medical education in Germany."
          }
        />
        <meta property="og:image" content={gleichwertigkeitImage} />
      </Helmet>
      <div className="page containerBigger mt-20">
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.gleichwertigkeit_content)}>
          <button className="main_menu_back" onClick={() => handleChangePage("/main_menu")}>
            &#8592;
          </button>

          <section>
            <h1>{content.title || "Title not available"}</h1>
            <h4>{content.intro || "Intro not available"}</h4>
            {content.definition && (
              <p className="white-space-pre-line">{content.definition}</p>
            )}
          </section>

          <section>
            <h2>{content.requirements?.title || "Requirements not available"}</h2>
            <ul>
              {content.requirements?.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{content.process?.title || "Process steps not available"}</h2>
            {content.process?.steps?.map((step, index) => (
              <div key={index}>
                <h4>{step.title || "Step title not available"}</h4>
                <ul>
                  {step.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2>{content.preparation?.title || "Advantages not available"}</h2>
            {content.preparation?.points && (
              <ul>
                {content.preparation.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </section>

          {content.additionalCourses && (
            <section>
              <p className="white-space-pre-line">{content.additionalCourses}</p>
            </section>
          )}

          {content.detailedReview && (
            <section>
              <h2>{content.detailedReviewTitle || "Detailed Overview"}</h2>
              <RenderParagraphs text={content.detailedReview} />
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default GleichwertigkeitPage;