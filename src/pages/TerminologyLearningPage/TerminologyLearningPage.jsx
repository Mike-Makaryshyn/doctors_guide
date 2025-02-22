import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./TerminologyLearningPage.module.scss";
import flashcardBg from "../../assets/flashcard-bg.jpg";
import simpleChoiceBg from "../../assets/simple-choice-bg.jpg";
import fortuneWheelBg from "../../assets/fortune-wheel-bg.jpg";
import fillInBlankBg from "../../assets/fill-in-blank-bg.jpg";
import translatorBg from "../../assets/translator-bg.jpg"; // Нове зображення для плитки перекладачів
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { pathList } from "../../routes/path";

const TerminologyLearningPage = () => {
  const { selectedRegion } = useGetGlobalInfo();
  const regionParam = selectedRegion ? selectedRegion : "Alle";

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Games</h1>


          {/* --- Main Menu Back Button --- */}
          <button
          className={styles.main_menu_back}
          onClick={() => navigate("/")} // Замінити "/" на потрібний маршрут
        >
          &#8592;
        </button>
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
              </div>
            </div>
          </Link>

         

          {/* Плитка 4: Fill In Blank Game із сірим контейнером з анімацією квадратів */}
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
              <div className={styles.fillInBlankText}>Fill In Blank Game</div>
            </div>
          </Link>

          {/* Плитка 5: Translator (перекладачів) */}
          <Link
            to={`/elective-language-game?region=${regionParam}&category=Alle&filterMode=unlearned`}
            className={styles.gameTile}
            style={{ backgroundImage: `url(${translatorBg})` }}
          >
            <div className={styles.innerTile}>
              <div className={styles.rockingCard}>
                <div className={styles.tileTitle}>Elective Language Game</div>
              </div>
            </div>
          </Link>

           {/* Плитка 3: Fortune Wheel із обертовим сірим кругом */}
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
        </div>
      </div>
    </MainLayout>
  );
};

export default TerminologyLearningPage;