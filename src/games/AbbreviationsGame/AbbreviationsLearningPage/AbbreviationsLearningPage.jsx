import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import { Helmet } from "react-helmet";
import styles from "./AbbreviationsLearningPage.module.scss";

// Використаємо вигадані посилання для зображень – їх ви зможете змінити пізніше
import flashcardBg from "../../../assets/abbreviation-flashcard-bg.jpg"; // наприклад, https://via.placeholder.com/300x200?text=Flashcard+Game
import simpleChoiceBg from "../../../assets/abbreviation-simple-choice-bg.jpg"; // https://via.placeholder.com/300x200?text=Simple+Choice+Game
import electiveLanguageBg from "../../../assets/abbreviation-elective-language-bg.jpg"; // https://via.placeholder.com/300x200?text=Elective+Language+Game
import termMatchingBg from "../../../assets/abbreviation-term-matching-bg.jpg"; // https://via.placeholder.com/300x200?text=Term+Matching+Game
import fortuneWheelBg from "../../../assets/abbreviation-fortune-wheel-bg.jpg"; // https://via.placeholder.com/300x200?text=Fortune+Wheel+Game
import metaImage from "../../../assets/abbreviation-meta-bg.jpg"; // зображення для метаданих

import useGetGlobalInfo from "../../../hooks/useGetGlobalInfo";

const AbbreviationsLearningPage = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const regionParam = selectedRegion ? selectedRegion : "Alle";
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Helmet>
        <title>Abbreviations Games - Lernen & Üben</title>
        <meta
          name="description"
          content="Diese Seite dient zum Erlernen von medizinischen Abkürzungen für Menschen, die sich auf die Fachsprachprüfung in Deutschland vorbereiten. Hier finden Sie verschiedene Kategorien, Sortierungen und alle relevanten Abkürzungen in mehreren Sprachen."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Abbreviations Games - Lernen & Üben" />
        <meta
          property="og:description"
          content="Erlernen Sie medizinische Abkürzungen und bereiten Sie sich auf die Fachsprachprüfung in Deutschland vor. Verschiedene Kategorien und Sortierungen stehen zur Auswahl."
        />
        <meta property="og:image" content={metaImage} />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:title" content="Abbreviations Games - Lernen & Üben" />
        <meta
          name="twitter:description"
          content="Erlernen Sie medizinische Abkürzungen und bereiten Sie sich auf die Fachsprachprüfung in Deutschland vor. Verschiedene Kategorien und Sortierungen stehen zur Auswahl."
        />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className={styles.container}>
        <h1>Abbreviations Games</h1>
        {/* Кнопка повернення в головне меню */}
        <button className={styles.main_menu_back} onClick={() => navigate("/main_menu")}>
          &#8592;
        </button>
        <div className={styles.gamesGrid}>
          {/* 1. Flashcard Game */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${flashcardBg})` }}
            onClick={() => navigate("/abbreviations-flashcard-game")}
          >
            <div className={styles.innerTile}>
              <div className={styles.cardInner}>
                <div className={styles.innerFront}>Flashcard</div>
                <div className={styles.innerBack}>Game</div>
              </div>
            </div>
          </div>
          {/* 2. Simple Choice Game */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${simpleChoiceBg})` }}
            onClick={() => navigate("/abbreviations-simple-choice-game")}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Simple Choice Game</div>
              </div>
            </div>
          </div>
          {/* 3. Elective Language Game */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${electiveLanguageBg})` }}
            onClick={() => navigate("/abbreviations-elective-language-game")}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Elective Language Game</div>
              </div>
            </div>
          </div>
          {/* 4. Term Matching Game */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${termMatchingBg})` }}
            onClick={() => navigate("/abbreviations-term-matching-game")}
          >
            <div className={styles.innerTile}>
              <div className={styles.termMatchingContainer}>
                <div className={styles.piece1}></div>
                <div className={styles.piece2}></div>
                <div className={styles.piece3}></div>
                <div className={styles.piece4}></div>
                <div className={styles.termMatchingText}>Term Matching Game</div>
              </div>
            </div>
          </div>
          {/* 5. Fortune Wheel */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${fortuneWheelBg})` }}
            onClick={() => navigate("/abbreviations-fortune-wheel-game")}
          >
            <div className={styles.innerTile}>
              <div className={styles.fortuneWheelContainer}>
                <div className={styles.spinningCircle}></div>
                <div className={styles.fortuneTitle}>Fortune Wheel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AbbreviationsLearningPage;