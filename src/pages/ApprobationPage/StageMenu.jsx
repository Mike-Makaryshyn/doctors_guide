import React, { useEffect, useRef, useState } from "react";
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
import { useSwipeable } from "react-swipeable";

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
  onStageVisible,
  isRegistration,
  stagesProgress,
  activeStage,
  educationRegion,
}) => {
  // Отримуємо глобальні дані, зокрема глобальну категорію (EU/Non‑EU)
  const { selectedLanguage: language, user, educationCategory: globalCategory } = useGetGlobalInfo();
  console.log("Global category in StageMenu:", globalCategory);
  
  // Якщо це реєстрація і передано educationRegion, використовуємо його, інакше – глобальну категорію (за замовчуванням Non‑EU)
  const effectiveCategory = isRegistration && educationRegion ? educationRegion : (globalCategory || "Non-EU");
  const normalizedCategory = effectiveCategory.trim().toUpperCase();

  const stagesWrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const stages =
    normalizedCategory === "EU"
      ? APPROBATION_STAGES_EU[language]
      : APPROBATION_STAGES_NON_EU[language];

  useEffect(() => {
    console.log(
      normalizedCategory === "EU"
        ? "Using EU stages:" + JSON.stringify(APPROBATION_STAGES_EU[language])
        : "Using Non-EU stages:" + JSON.stringify(APPROBATION_STAGES_NON_EU[language])
    );
  }, [effectiveCategory, normalizedCategory, language]);

  useEffect(() => {
    if (isMobile) {
      const index =
        activeStage !== null && activeStage !== undefined
          ? stages.findIndex((s) => s.id === activeStage)
          : 0;
      setVisibleIndex(index >= 0 ? index : 0);
    }
  }, [activeStage, stages, isMobile]);

  const scrollToVisibleIndex = () => {
    if (isMobile && stagesWrapperRef.current) {
      const targetElement = stagesWrapperRef.current.querySelector(
        `[data-stage-index="${visibleIndex}"]`
      );
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  };

  useEffect(() => {
    scrollToVisibleIndex();
    if (typeof onStageVisible === "function") {
      onStageVisible(stages[visibleIndex]?.id);
    }
  }, [visibleIndex, stages, onStageVisible, isMobile]);

  const handleStageClick = (stageId) => {
    onStageSelect(stageId);
    if (!isRegistration && user) {
      const update = async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          await setDoc(docRef, { activeStage: stageId }, { merge: true });
          console.log("Активний етап оновлено:", stageId);
        } catch (error) {
          console.error("Помилка при оновленні активного етапу:", error);
        }
      };
      update();
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (visibleIndex < stages.length - 1) {
        setVisibleIndex((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (visibleIndex > 0) {
        setVisibleIndex((prev) => prev - 1);
      }
    },
    trackMouse: false,
    preventDefaultTouchmoveEvent: true,
  });

  const activeStageObj = stages.find((s) => s.id === activeStage) || stages[0] || {};

  return (
    <>
      <div className={styles.stageMenuContainer}>
        <div
          {...(isMobile ? swipeHandlers : {})}
          ref={stagesWrapperRef}
          className={styles.stagesWrapper}
        >
          {stages.map((stage, index) => (
            <Tippy
              key={stage.id}
              content={stage.description}
              placement="top"
              arrow={true}
              theme="custom"
              trigger={isMobile ? "click" : "mouseenter focus"}
              hideOnClick={true}
            >
              <div
                data-stage-id={stage.id}
                data-stage-index={index}
                className={classNames(styles.stage, {
                  [styles.active]: activeStage === stage.id,
                })}
                onClick={() => handleStageClick(stage.id)}
              >
                <div className={styles.progressCircle}>
                  <svg
                    className={styles.progressSvg}
                    viewBox="0 0 36 36"
                    {...(stage.id === 1 ? { "data-tutorial": "stageProgressBar" } : {})}
                  >
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
      {isMobile && (
        <div className={styles.activeStageTitle}>
          {activeStageObj.title}
        </div>
      )}
    </>
  );
};

StageMenu.propTypes = {
  onStageSelect: PropTypes.func.isRequired,
  onStageVisible: PropTypes.func,
  isRegistration: PropTypes.bool,
  stagesProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeStage: PropTypes.number,
  educationRegion: PropTypes.string,
};

StageMenu.defaultProps = {
  onStageVisible: null,
  isRegistration: false,
  activeStage: null,
  educationRegion: "",
};

export default StageMenu;