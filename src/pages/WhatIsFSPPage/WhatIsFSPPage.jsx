import React from "react";
import { Helmet } from "react-helmet";
import { FSP_INFO } from "../../constants/translation/whatIsFSP";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import cn from "classnames";
import bgVideo from "../../assets/video/first_page_bg.mp4";
import fspImage from "../../assets/whatisbilder/fsp-image.jpg"; // імпорт картинки для мета-даних

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

// Функція для рендерингу списку, розділеного символом "•"
// (якщо потрібна обробка нестандартного форматування списку)
const renderBulletList = (text) => {
  const items = text.split("•").map(item => item.trim()).filter(item => item);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const WhatIsFSPPage = () => {
  const { selectedLanguage: language, handleChangePage, selectedRegion } = useGetGlobalInfo();
  const content = FSP_INFO[language];

  return (
    <MainLayout>
      <Helmet>
        <title>{content.title || "Was ist FSP?"}</title>
        <meta
          name="description"
          content={
            content.intro ||
            "Erfahren Sie alles über FSP, den Prüfungsprozess und die Vorbereitung."
          }
        />
        <meta
          name="keywords"
          content="FSP, Prüfung, Vorbereitung, Ärzte, Deutschland"
        />
        <meta name="author" content="Doctors Guide Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Metadaten */}
        <meta property="og:title" content={content.title || "Was ist FSP?"} />
        <meta
          property="og:description"
          content={
            content.intro ||
            "Erfahren Sie alles über FSP, den Prüfungsprozess und die Vorbereitung."
          }
        />
        <meta property="og:image" content={fspImage} />
      </Helmet>
      <div className="page page1 containerBigger mt-20">
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
        <div className={cn("main_menu__content", styles.what_is_fsp__content)}>
   

          {/* Заголовок, вступ та визначення */}
          <section>
            <h1>{content.title}</h1>
            <RenderParagraphs text={content.intro} />

            {content.definition && (
              <div>
                <RenderParagraphs text={content.definition.intro} />
                <ul>
                  {content.definition.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Секція з описом структури іспиту */}
          <section>
            <h2>{content.examStructure.title}</h2>
            <RenderParagraphs text={content.examStructure.desc} />
            <ul>
              {content.examStructure.parts.map((part, index) => (
                <li key={index}>
                  <h4>{part.title}</h4>
                  <RenderParagraphs text={part.description} />
                </li>
              ))}
            </ul>
          </section>

          {/* Секція з підготовкою */}
          <section>
            <h2>{content.preparation.title}</h2>
            <RenderParagraphs text={content.preparation.desc} />
            <ul>
              {content.preparation.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Секція з вимогами */}
          <section>
            <h2>{content.requirements.title}</h2>
            <RenderParagraphs text={content.requirements.desc} />
            <ul>
              {content.requirements.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Секція з FAQ */}
          {content.faq && (
            <section>
              <h2>{content.faq.title}</h2>
              <ul>
                {content.faq.questions.map((q, index) => (
                  <li key={index}>
                    <strong>{q.question}</strong>
                    <RenderParagraphs text={q.answer} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Секція з заключним текстом */}
          <section className={styles.conclusion}>
            <RenderParagraphs text={content.conclusion} />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default WhatIsFSPPage;