import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { KENNTNISPRUEFUNG_INFO } from "../../constants/translation/kenntnisPruefung";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";
import bgVideo from "../../assets/video/first_page_bg.mp4";
import guideImage from "../../assets/whatisbilder/kenntnispruefung_guide.jpg";

// Компонент для рендерингу абзаців із підтримкою переносів рядків
const RenderParagraphs = ({ text }) => {
  return text.split("\n\n").map((para, index) => (
    <p key={index} className={styles['white-space-pre-line']}>
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
  const { selectedLanguage: language, handleChangePage, selectedRegion } = useGetGlobalInfo();
  const content = KENNTNISPRUEFUNG_INFO[language];

  if (!content) {
    console.error(`Content for language '${language}' is undefined.`);
    return <div>Content not available for this language.</div>;
  }

  // Витягуємо заголовки з content.headings
  const headings = content.headings || {};

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="firstPageImageBlock">
          {!selectedRegion && (
            <video
              className="backgroundVideo"
              autoPlay
              muted
              loop
              playsInline
              src={bgVideo}
            />
          )}
        </div>
        <div className={cn("main_menu__content", styles.knowledge_examination_content)}>
 

          {/* Title & Intro */}
          <section>
            <h1>{content.title || "Kenntnisprüfung für Ärzte in Deutschland"}</h1>
            {content.intro && <RenderParagraphs text={content.intro} />}
          </section>

          {/* Definition */}
          {content.definition && (
            <section>
              <h2>{headings.definition || "Definition"}</h2>
              <RenderParagraphs text={content.definition} />
            </section>
          )}

          {/* When Needed */}
          {content.whenNeeded && (
            <section>
              <h2>{headings.whenNeeded || "Wann ist die Prüfung nötig?"}</h2>
              <RenderParagraphs text={content.whenNeeded} />
            </section>
          )}

          {/* Contents */}
          {content.contents && (
            <section>
              <h2>{headings.contents || "Prüfungsinhalte"}</h2>
              <RenderParagraphs text={content.contents} />
            </section>
          )}

          {/* Process */}
          {content.process && (
            <section>
              <h2>{headings.process || "Ablauf der Prüfung"}</h2>
              <RenderParagraphs text={content.process} />
            </section>
          )}

          {/* Preparation */}
          {content.preparation && (
            <section>
              <h2>{headings.preparation || "Vorbereitung"}</h2>
              <RenderParagraphs text={content.preparation} />
            </section>
          )}

          {/* FAQ */}
          {content.faq && Array.isArray(content.faq) && (
            <section>
              <h2>{headings.faq || "FAQ"}</h2>
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
              <h2>{headings.conclusion || "Fazit"}</h2>
              <RenderParagraphs text={content.conclusion} />
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default KenntnisPruefungPage;