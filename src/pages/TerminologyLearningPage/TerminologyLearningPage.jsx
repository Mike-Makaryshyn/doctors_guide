// src/pages/TerminologyLearningPage/TerminologyLearningPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TerminologyLearningPage.module.scss";
import flashcardBg from "../../assets/flashcard-bg.jpg";
import simpleChoiceBg from "../../assets/simple-choice-bg.jpg";
import fortuneWheelBg from "../../assets/fortune-wheel-bg.jpg"; // твоє зображення
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { pathList } from "../../routes/path"; // <-- щоб взяти pathList

// Прибрали імпорт unifyRegion, щоб не було помилки
// import { unifyRegion } from "../../utils/unifyRegion";

const TerminologyLearningPage = () => {
  const { selectedRegion } = useGetGlobalInfo();

  // Якщо тобі треба підставляти в URL, але не уніфікувати:
  const regionParam = selectedRegion ? selectedRegion : "Alle";

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Games</h1>
        <div className={styles.gamesGrid}>
          {/* Плитка 1: Flashcard */}
          <Link
            to={`/flashcard-game?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${flashcardBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.cardInner}>
                <div className={styles.innerFront}>Flashcard</div>
                <div className={styles.innerBack}>Game</div>
              </div>
            </div>
          </Link>

          {/* Плитка 2: Simple Choice */}
          <Link
            to={`/simple-choice-game?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${simpleChoiceBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Single Choice Game</div>
                {/* інша анімація або контент */}
              </div>
            </div>
          </Link>

          {/* Плитка 3: Fortune Wheel */}
          <Link
            // Використовуємо pathList
            to={`${pathList.fortune_wheel.path}?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${fortuneWheelBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Fortune Wheel</div>
                {/* можеш анімувати */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default TerminologyLearningPage;