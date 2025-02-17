import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TerminologyLearningPage.module.scss";
import flashcardBg from "../../assets/flashcard-bg.jpg";
import simpleChoiceBg from "../../assets/simple-choice-bg.jpg";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Функція для нормалізації регіону
const unifyRegion = (r) =>
  r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r;

const TerminologyLearningPage = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const regionParam = selectedRegion ? unifyRegion(selectedRegion) : "Alle";

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Games</h1>
        <div className={styles.gamesGrid}>
          {/* Плитка для Flashcard Game */}
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

          {/* Плитка для Single Choice Game з качанням */}
          <Link
            to={`/simple-choice-game?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${simpleChoiceBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Single Choice Game</div>
                <div className={styles.dotContainer}>
                  {Array(21)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className={styles.dot}></div>
                    ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default TerminologyLearningPage;