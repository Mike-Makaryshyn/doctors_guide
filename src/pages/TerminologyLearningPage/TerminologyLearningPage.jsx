import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TerminologyLearningPage.module.scss";

// Зображення
import flashcardBg from "../../assets/flashcard-bg.jpg";
import simpleChoiceBg from "../../assets/simple-choice-bg.jpg";
import fortuneWheelBg from "../../assets/fortune-wheel-bg.jpg";
import fillInBlankBg from "../../assets/fill-in-blank-bg.jpg";
import translatorBg from "../../assets/translator-bg.jpg";
import medicalTerminologyBg from "../../assets/medical-terminology-bg.jpg";
import matchingGameBg from "../../assets/matching-game-bg.jpg";
import audioQuizBg from "../../assets/audio-quiz-bg.jpg";
import definitionChoiceBg from "../../assets/definition-choice-bg.jpg";

import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { pathList } from "../../routes/path";

const TerminologyLearningPage = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const regionParam = selectedRegion ? selectedRegion : "Alle";
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Games</h1>



        <div className={styles.gamesGrid}>
          {/* 1. Medical Terminology */}
    

          {/* 2. Flashcard */}
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

          {/* 3. Simple Choice */}
          <Link
            to={`/simple-choice-game?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${simpleChoiceBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Single Choice Game</div>
              </div>
            </div>
          </Link>
                 {/* 5. Translator (Elective Language) */}
                 <Link
            to={`/elective-language-game?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${translatorBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>
                  Elective Language Game
                </div>
              </div>
            </div>
          </Link>
   {/* 7. NEW: Term Matching Game */}
   <Link
            to={`${pathList.term_matching.path}?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${matchingGameBg})` }}
          >
            <div className={styles.termMatchingContainer}>
  {/* 4 "шматки" пазла */}
  <div className={styles.piece1}></div>
  <div className={styles.piece2}></div>
  <div className={styles.piece3}></div>
  <div className={styles.piece4}></div>

  {/* Напис, який видно тільки тоді, коли шматки зійшлися */}
  <div className={styles.termMatchingText}>Term Matching Game</div>
</div>
          </Link>
          {/* 4. Fill In Blank Game */}
          <Link
            to={`${pathList.fill_in_blank.path}?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${fillInBlankBg})` }}
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
          </Link>

   

          {/* 6. Fortune Wheel */}
          <Link
            to={`${pathList.fortune_wheel.path}?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${fortuneWheelBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.fortuneWheelContainer}>
                <div className={styles.spinningCircle}></div>
                <div className={styles.fortuneTitle}>Fortune Wheel</div>
              </div>
            </div>
          </Link>

          {/* 8. Audio Quiz */}
          <Link
            to={`${pathList.audio_choice.path}?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${audioQuizBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.audioQuizContainer}>
                <div className={styles.speakerLeft}></div>
                <div className={styles.audioQuizText}>
                  {"Audio Quiz".split('').map((char, i) => (
                    <span
                      key={i}
                      className={styles.letter}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className={styles.speakerRight}></div>
              </div>
            </div>
          </Link>

          {/* 9. Definition Choice Game */}
          <Link
            to={`${pathList.definition_choice.path}?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${definitionChoiceBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Definition Choice Game</div>
              </div>
            </div>
          </Link>
       
        </div>
      </div>
    </MainLayout>
  );
};

export default TerminologyLearningPage;