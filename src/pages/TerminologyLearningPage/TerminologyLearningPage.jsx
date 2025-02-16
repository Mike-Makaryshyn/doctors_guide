// src/pages/TerminologyLearningPage/TerminologyLearningPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TerminologyLearningPage.module.scss";
import flashcardBg from "../../assets/flashcard-bg.jpg";

const TerminologyLearningPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Games</h1>
        <div className={styles.gamesGrid}>
          {/* Передаємо query-параметри, щоб встановити значення за замовчуванням */}
          <Link
            to="/flashcard-game?region=Alle&category=Alle&filterMode=unlearned"
            className={styles.gameTile}
            style={{ backgroundImage: `url(${flashcardBg})` }}
          >
            <div className={styles.tileHeader}></div>
            <div className={styles.innerTile}>
              <div className={styles.cardInner}>
                <div className={styles.innerFront}>Flashcard</div>
                <div className={styles.innerBack}>Game</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default TerminologyLearningPage;