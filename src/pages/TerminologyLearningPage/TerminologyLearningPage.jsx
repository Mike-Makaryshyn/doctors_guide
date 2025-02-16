import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TerminologyLearningPage.module.scss";

const TerminologyLearningPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Terminology</h1>
        <div className={styles.gamesGrid}>
          {/* Вся плитка є клікабельною */}
          <Link to="/flashcard-game" className={styles.gameTile}>
            {/* Заголовок плитки */}
            <div className={styles.tileHeader}>Flashcard Game</div>
            {/* Всередині плитки — перевертальна картка */}
            <div className={styles.innerTile}>
              <div className={styles.cardInner}>
                <div className={styles.innerFront}>Latin</div>
                <div className={styles.innerBack}>German</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default TerminologyLearningPage;