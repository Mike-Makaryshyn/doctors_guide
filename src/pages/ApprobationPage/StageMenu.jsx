import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { APPROBATION_STAGES_NON_EU } from "../../constants/translation/stagesTranslationNonEU";
import { APPROBATION_STAGES_EU } from "../../constants/translation/stagesTranslationEU";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./StageMenu.module.scss";
import classNames from "classnames";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Stage1Img from "../../assets/stages/man-stage-1.png";
import Stage2Img from "../../assets/stages/man-stage-2.png";
import Stage3Img from "../../assets/stages/man-stage-3.png";
import Stage4Img from "../../assets/stages/man-stage-4.png";
import Stage5Img from "../../assets/stages/man-stage-5.png";
import Stage6Img from "../../assets/stages/man-stage-6.png";
import Stage7Img from "../../assets/stages/man-stage-7.png";
import Stage8Img from "../../assets/stages/man-stage-8.png";
import Stage9Img from "../../assets/stages/man-stage-9.png";

const stageImages = [
  Stage1Img,
  Stage2Img,
  Stage3Img,
  Stage4Img,
  Stage5Img,
  Stage6Img,
  Stage7Img,
  Stage8Img,
  Stage9Img,
];

const StageMenu = ({
  onStageSelect,
  isRegistration,
  stagesProgress,
  activeStage,
  debugCategory,
}) => {
  const { selectedLanguage: language, user, category: globalCategory } = useGetGlobalInfo();
  const effectiveCategory = debugCategory || globalCategory;
  const normalizedCategory = effectiveCategory ? effectiveCategory.trim().toUpperCase() : "";

  useEffect(() => {
    // Для налагодження: перевірка категорії та завантаження відповідних даних
    if (normalizedCategory === "EU") {
      console.log("Using EU stages:", APPROBATION_STAGES_EU[language]);
    } else {
      console.log("Using Non-EU stages:", APPROBATION_STAGES_NON_EU[language]);
    }
  }, [effectiveCategory, normalizedCategory, language]);

  // Отримуємо всі стадії
  const stages =
    normalizedCategory === "EU"
      ? APPROBATION_STAGES_EU[language]
      : APPROBATION_STAGES_NON_EU[language];

  // Оновлення активного етапу в базі даних
  const updateActiveStage = async (stageId) => {
    if (!user) return;
    try {
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { activeStage: stageId }, { merge: true });
      console.log("Активний етап оновлено:", stageId);
    } catch (error) {
      console.error("Помилка при оновленні активного етапу:", error);
    }
  };

  // Обробка кліку по етапу
  const handleStageClick = (stageId) => {
    onStageSelect(stageId);
    if (!isRegistration && user) {
      updateActiveStage(stageId);
    }
  };

  // ref для контейнера (для нативного скролу)
  const stagesWrapperRef = useRef(null);

  return (
    <div className={styles.stageMenuContainer}>
      <div ref={stagesWrapperRef} className={styles.stagesWrapper}>
        {stages.map((stage, index) => (
          <Tippy
            key={stage.id}
            content={stage.description}
            placement="top"
            arrow={true}
            theme="custom"
          >
            <div
              className={classNames(styles.stage, {
                [styles.active]: activeStage === stage.id,
              })}
              onClick={() => handleStageClick(stage.id)}
            >
              <div className={styles.progressCircle}>
                <svg className={styles.progressSvg} viewBox="0 0 36 36">
                  <path
                    className={styles.circleBg}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={styles.circle}
                    strokeDasharray={`${stagesProgress[index]}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <img
                  src={stageImages[index]}
                  alt={`Stage ${index + 1}`}
                  className={styles.stageImage}
                />
              </div>
              <div className={styles.stageTitle}>{stage.title}</div>
            </div>
          </Tippy>
        ))}
      </div>
    </div>
  );
};

StageMenu.propTypes = {
  onStageSelect: PropTypes.func.isRequired,
  isRegistration: PropTypes.bool,
  stagesProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeStage: PropTypes.number,
  debugCategory: PropTypes.string,
};

StageMenu.defaultProps = {
  isRegistration: false,
  activeStage: null,
  debugCategory: "",
};

export default StageMenu;