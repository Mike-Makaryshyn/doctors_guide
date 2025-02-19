import React from "react";
import { Helmet } from "react-helmet";
import { APPROBATION_INFO } from "../../constants/translation/whatIsApprobation";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import cn from "classnames";

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
        <title>{content?.title || "What is Approbation?"}</title>
        <meta
          name="description"
          content={
            content?.intro ||
            "Learn about the process of obtaining Approbation for doctors in Germany."
          }
        />
        <meta
          name="keywords"
          content="Approbation, doctors in Germany, medical license, Germany"
        />
        <meta name="author" content="Doctors Guide Team" />
      </Helmet>
      <div className="page page1 containerBigger mt-20">
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.what_is_approbation__content)}>
          <button
            className="main_menu_back"
            onClick={() => handleChangePage("/main_menu")}
          >
            &#8592;
          </button>

          {/* Заголовок, вступ та (опційне) визначення */}
          <section>
            <h1>{content?.title || "Title not available"}</h1>
            <h4>{content?.intro || "Intro not available"}</h4>
            {content?.definition && (
              <p className="white-space-pre-line">{content.definition}</p>
            )}
          </section>

          {/* Секція з вимогами до отримання апробації */}
          <section>
            <h2>{content?.process?.title || "Process Requirements"}</h2>
            {content?.process?.desc && (
              <RenderParagraphs text={content.process.desc} />
            )}
            {content?.process?.steps?.map((step, index) => (
              <div key={index}>
                <h4>{step.title || "Step title not available"}</h4>
                <ul>
                  {step.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            )) || <p>No steps available</p>}
          </section>

          {/* Секція з етапами отримання апробації */}
          <section>
            <h2>{content?.preparation?.title || "Preparation Steps"}</h2>
            {content?.preparation?.desc && (
              <RenderParagraphs text={content.preparation.desc} />
            )}
            <ul>
              {content?.preparation?.points?.map((point, index) => (
                <li key={index}>{point || "Point not available"}</li>
              )) || <li>No preparation points available</li>}
            </ul>
          </section>

          {/* Секція з перевагами апробації */}
          <section>
            <h2>{content?.requirements?.title || "Benefits / Advantages"}</h2>
            {content?.requirements?.desc && (
              <RenderParagraphs text={content.requirements.desc} />
            )}
            <ul>
              {content?.requirements?.points?.map((point, index) => (
                <li key={index}>{point}</li>
              )) || <li>No requirements available</li>}
            </ul>
          </section>

          {/* Секція з детальним оглядом процесу */}
          {content?.detailedReview && (
            <section>
              <h2>{content.detailedReviewTitle || "Detailed Process Overview"}</h2>
              <RenderParagraphs text={content.detailedReview} />
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default WhatIsApprobationPage;