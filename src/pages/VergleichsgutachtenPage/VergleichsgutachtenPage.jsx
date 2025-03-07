import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { VERGLEICHSGUTACHTEN_INFO } from "../../constants/translation/whatIsVergleichsgutachten";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";
import vergleichsgutachtenImage from "../../assets/whatisbilder/vergleichsgutachten-image.jpg"; // імпорт картинки для мета-даних

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

const VergleichsgutachtenPage = () => {
  const { selectedLanguage: language, handleChangePage } = useGetGlobalInfo();
  const content = VERGLEICHSGUTACHTEN_INFO[language];

  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{content.title || "Vergleichsgutachten"}</title>
        <meta
          name="description"
          content={
            content.intro ||
            "Detailed information on the comparative expert report for foreign medical education."
          }
        />
        {/* Open Graph Metadaten */}
        <meta property="og:title" content={content.title || "Vergleichsgutachten"} />
        <meta
          property="og:description"
          content={
            content.intro ||
            "Detailed information on the comparative expert report for foreign medical education."
          }
        />
        <meta property="og:image" content={vergleichsgutachtenImage} />
      </Helmet>
      <div className="page containerBigger mt-20">
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.verglichsgutachten_content)}>
          <button className="main_menu_back" onClick={() => handleChangePage("/main_menu")}>
            &#8592;
          </button>
          
          {/* Заголовок, вступ та визначення */}
          <section>
            <h1>{content.title || "Title not available"}</h1>
            <h4>{content.intro || "Intro not available"}</h4>
            {content.definition && (
              <p className="white-space-pre-line">{content.definition}</p>
            )}
          </section>
          
          {/* Секція з вимогами */}
          <section>
            <h2>{content.requirements?.title || "Requirements not available"}</h2>
            <ul>
              {content.requirements?.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
          
          {/* Секція з процесом */}
          <section>
            <h2>{content.process?.title || "Process not available"}</h2>
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
          
          {/* Секція з перевагами */}
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
          
          {/* Додаткова інформація, якщо є */}
          {content.additionalCourses && (
            <section>
              <p className="white-space-pre-line">{content.additionalCourses}</p>
            </section>
          )}
          
          {/* Детальний огляд процесу */}
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

export default VergleichsgutachtenPage;