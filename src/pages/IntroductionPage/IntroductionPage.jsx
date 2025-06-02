import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useNavigate } from "react-router-dom";
import IntroductionContent from "./IntroductionContent";
import styles from "./IntroductionPage.module.css";

import bgVideo from "../../assets/video/first_page_bg.mp4";
import BackgroundMedia from "../../components/BackgroundMedia/BackgroundMedia";
import flagDe from "../../assets/flags/de.png";
import flagEn from "../../assets/flags/en.png";
import flagUk from "../../assets/flags/uk.png";
import flagRu from "../../assets/flags/ru.png";
import flagTr from "../../assets/flags/tr.png";
import flagAr from "../../assets/flags/ar.png";
import flagFr from "../../assets/flags/fr.png";
import flagEs from "../../assets/flags/es.png";
import flagPl from "../../assets/flags/pl.png";
import flagEl from "../../assets/flags/el.png";
import flagRo from "../../assets/flags/ro.png";

import { Helmet } from "react-helmet";
import introImage from "../../assets/introduction.png";

const IntroductionPage = () => {
  // Extract `user` alongside the selected language
  const { user, selectedLanguage: globalLanguage } = useGetGlobalInfo();
  const [localLanguage, setLocalLanguage] = useState(globalLanguage);
  const navigate = useNavigate();

  // Redirect to /main_menu if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/main_menu");
    }
  }, [user, navigate]);

  const handleChangeLanguage = (newLang) => {
    setLocalLanguage(newLang);
    localStorage.setItem("selectedLanguage", JSON.stringify(newLang));
  };
  const content = IntroductionContent[localLanguage];

  const languageOptions = [
    { code: "de", label: "Deutsch", flag: flagDe },
    { code: "en", label: "English", flag: flagEn },
    { code: "uk", label: "Українська", flag: flagUk },
    { code: "ru", label: "Русский", flag: flagRu },
    { code: "tr", label: "Türkçe", flag: flagTr },
    { code: "ar", label: "العربية", flag: flagAr },
    { code: "fr", label: "Français", flag: flagFr },
    { code: "es", label: "Español", flag: flagEs },
    { code: "pl", label: "Polski", flag: flagPl },
    { code: "el", label: "Ελληνικά", flag: flagEl },
    { code: "ro", label: "Română", flag: flagRo },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>GermanMove – Plattform für Ärzte im Integrationsprozess</title>
        <meta
          name="description"
          content="GermanMove bietet Ärzten umfassende Unterstützung beim Integrationsprozess in das deutsche Gesundheitssystem."
        />
        <meta
          property="og:title"
          content="GermanMove – Plattform für Ärzte im Integrationsprozess"
        />
        <meta
          property="og:description"
          content="GermanMove bietet Ärzten umfassende Unterstützung beim Integrationsprozess in das deutsche Gesundheitssystem."
        />
        <meta property="og:image" content={introImage} />
      </Helmet>
      <div className={styles.introductionPage}>
        <div className="main_menu_wrapper">
          <div className="page page1">
            <BackgroundMedia />
            <div className={styles.containerSmall}>
              <div className={styles.languageSelection}>
                {languageOptions.map((lang) => (
                  <div
                    key={lang.code}
                    data-lang-code={lang.code}
                    className={styles.langIcon}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleChangeLanguage(lang.code)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleChangeLanguage(lang.code);
                    }}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.label}
                      className={localLanguage === lang.code ? styles.selectedLang : ""}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.scrollContent}>
                <h1>{content.mainIntro}</h1>
                {content.sections.map((section, index) => {
                  const lines = section.content.split('\n');
                  const firstLine = lines[0];
                  const restLines = lines.slice(1).filter(line => line.trim().startsWith('- '));
                  const listItems = restLines.map((line, idx) => (
                    <li key={idx}>{line.replace(/^- /, '').trim()}</li>
                  ));
                  return (
                    <div key={index} className={styles.introSection}>
                      <h2>{section.title}</h2>
                      <p className={styles.introSectionContent}>{firstLine}</p>
                      {listItems.length > 0 && <ul className={styles.list}>{listItems}</ul>}
                      {lines.slice(1 + listItems.length).map((line, idx) =>
                        line.trim() !== '' ? (
                          <p key={`extra-${idx}`} className={styles.introSectionContent}>
                            {line}
                          </p>
                        ) : null
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className={styles.dalleButton}
              onClick={() => navigate("/main_menu")}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntroductionPage;