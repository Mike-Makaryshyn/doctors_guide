// src/pages/KenntnisPruefungPage/KenntnisPruefungPage.jsx
import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { KENNTNISPRUEFUNG_INFO } from "../../constants/translation/kenntnisPruefung";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";

const KenntnisPruefungPage = () => {
  const { selectedLanguage: language, handleChangePage } = useGetGlobalInfo();

  // Отримуємо контент відповідно до вибраної мови
  const content = KENNTNISPRUEFUNG_INFO[language];
  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{content?.title || "Kenntnisprüfung"}</title>
        <meta
          name="description"
          content={content?.intro || "Information about the Knowledge Examination for Physicians in Germany."}
        />
      </Helmet>
      <div className="page containerBigger mt-20">
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.knowledge_examination_content)}>
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
            <h2>{content.preparation?.title || "Preparation not available"}</h2>
            <ul>
              {content.preparation?.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="white-space-pre-line">
              {content.additionalCourses || "No additional courses available"}
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default KenntnisPruefungPage;