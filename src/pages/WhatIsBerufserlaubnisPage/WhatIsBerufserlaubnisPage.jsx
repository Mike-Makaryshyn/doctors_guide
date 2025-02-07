import { Helmet } from "react-helmet";
import { BERUFSERLAUBNIS_INFO } from "../../constants/translation/whatIsBerufserlaubnis";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import cn from "classnames";

const WhatIsBerufserlaubnisPage = () => {
  const { selectedLanguage: language, handleChangePage } = useGetGlobalInfo();
  const content = BERUFSERLAUBNIS_INFO[language];

  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{content.title || "Temporary License for Physicians"}</title>
        <meta
          name="description"
          content={
            content.intro ||
            "Learn about the temporary license for practicing medicine in Germany."
          }
        />
        <meta
          name="keywords"
          content="Berufserlaubnis, temporary license, physicians, Germany, medical license"
        />
        <meta name="author" content="Doctors Guide Team" />
      </Helmet>
      <div className="page page1 containerBigger mt-20">
        <div className="firstPageImageBlock"></div>
        <div className={cn("main_menu__content", styles.what_is_approbation__content)}>
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
            <h2>{content.process?.title || "Process title not available"}</h2>
            {content.process?.steps?.map((step, index) => (
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

          <section>
            <h2>{content.preparation?.title || "Advantages title not available"}</h2>
            {content.preparation?.points && (
              <ul>
                {content.preparation.points.map((point, index) => (
                  <li key={index}>{point || "Point not available"}</li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2>{content.requirements?.title || "Requirements title not available"}</h2>
            {content.requirements?.points && (
              <ul>
                {content.requirements.points.map((point, index) => (
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
        </div>
      </div>
    </MainLayout>
  );
};

export default WhatIsBerufserlaubnisPage;