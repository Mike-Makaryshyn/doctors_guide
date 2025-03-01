import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import styles from "./MedicationsLearningPage.module.scss";

// Зображення для гри (оновлені шляхи)
import flashcardBg from "../../../assets/medication-flashcard-bg.jpg";
import simpleChoiceBg from "../../../assets/medication-simple-choice-bg.jpg";
import fortuneWheelBg from "../../../assets/medication-fortune-wheel-bg.jpg";
import fillInBlankBg from "../../../assets/medication-fill-in-blank-bg.jpg";
import translatorBg from "../../../assets/medication-translator-bg.jpg";
import matchingGameBg from "../../../assets/medication-matching-game-bg.jpg";

import useGetGlobalInfo from "../../../hooks/useGetGlobalInfo";

const MedicationsLearningPage = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const regionParam = selectedRegion ? selectedRegion : "Alle";
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Medications Games</h1>

        {/* --- Кнопка повернення в головне меню --- */}
        <button
          className={styles.main_menu_back}
          onClick={() => navigate("/main_menu")}
        >
          &#8592;
        </button>

        <div className={styles.gamesGrid}>
          {/* 1. Flashcard */}
          <div
  className={styles.gameTile}
  style={{ backgroundImage: `url(${flashcardBg})` }}
  onClick={() => navigate("/medications-flashcard-game")}
>
  <div className={styles.innerTile}>
    <div className={styles.cardInner}>
      <div className={styles.innerFront}>Flashcard</div>
      <div className={styles.innerBack}>Game</div>
    </div>
  </div>
</div>

          {/* 2. Simple Choice */}
          <div
        className={styles.gameTile}
        style={{ backgroundImage: `url(${simpleChoiceBg})` }}
        onClick={() => navigate("/medications-simple-choice-game")}
      >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Single Choice Game</div>
              </div>
            </div>
          </div>
         
          {/* 3. Elective Language (якщо потрібно) */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${translatorBg})` }}
            onClick={() => navigate("/medications-elective-language-game")}
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
            style={{ backgroundImage: `url(${matchingGameBg})` }}
            onClick={() => navigate("/medications_term-matching-game")}
          >
            <div className={styles.termMatchingContainer}>
              <div className={styles.piece1}></div>
              <div className={styles.piece2}></div>
              <div className={styles.piece3}></div>
              <div className={styles.piece4}></div>
              <div className={styles.termMatchingText}>Term Matching Game</div>
            </div>
          </div>
         
          {/* 5. Fill In Blank Game */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${fillInBlankBg})` }}
            onClick={() => navigate("/medications-fill-in-blank-game")}
          >
            <div className={styles.innerTile}>
              <div className={styles.fillInBlankContainer}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className={styles.fillInBlankText}>
                Fill In Blank Game
              </div>
            </div>
          </div>
         
          {/* 6. Fortune Wheel */}
          <div
            className={styles.gameTile}
            style={{ backgroundImage: `url(${fortuneWheelBg})` }}
            onClick={() => navigate("/medications-fortune-wheel-game")}
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

export default MedicationsLearningPage;