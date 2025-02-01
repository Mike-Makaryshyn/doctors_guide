import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { APPROBATION_STAGES } from "../../constants/translation/stagesTranslation";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./StageMenu.module.scss";
import classNames from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Статичні імпорти зображень
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
  enableSwipe,
  gridView,
}) => {
  const { selectedLanguage: language, user } = useGetGlobalInfo();
  const stages = APPROBATION_STAGES[language].slice(0, 9);
  const [hoveredStage, setHoveredStage] = useState(null);
  const stagesWrapperRef = useRef(null);

  // Оновлення активного етапу в Firestore
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

  const handleStageClick = (stageId) => {
    onStageSelect(stageId);
    if (!isRegistration && user) {
      updateActiveStage(stageId);
    }
    if (window.innerWidth <= 480) {
      setHoveredStage(stageId);
    }
  };

  const handleStageMouseEnter = (stageId) => {
    if (window.innerWidth > 480) {
      setHoveredStage(stageId);
    }
  };

  const handleStageMouseLeave = () => {
    if (window.innerWidth > 480) {
      setHoveredStage(null);
    }
  };

  const handleScrollLeft = () => {
    if (stagesWrapperRef.current) {
      stagesWrapperRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (stagesWrapperRef.current) {
      stagesWrapperRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.stageMenuContainer}>
      {!gridView && enableSwipe && (
        <>
          <button
            className={classNames(styles.scrollButton, styles.left)}
            onClick={handleScrollLeft}
          >
            <FaChevronLeft />
          </button>
          <button
            className={classNames(styles.scrollButton, styles.right)}
            onClick={handleScrollRight}
          >
            <FaChevronRight />
          </button>
        </>
      )}
      <div
        ref={!gridView ? stagesWrapperRef : null}
        className={classNames(styles.stagesWrapper, {
          [styles.swipeable]: enableSwipe && !gridView,
          [styles.gridView]: gridView,
        })}
      >
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className={classNames(styles.stage, {
              [styles.active]: activeStage === stage.id,
            })}
            onClick={() => handleStageClick(stage.id)}
            onMouseEnter={() => handleStageMouseEnter(stage.id)}
            onMouseLeave={handleStageMouseLeave}
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
        ))}
      </div>
      {hoveredStage && (
        <div className={styles.description}>
          {stages.find((stage) => stage.id === hoveredStage)?.description}
        </div>
      )}
    </div>
  );
};

StageMenu.propTypes = {
  onStageSelect: PropTypes.func.isRequired,
  isRegistration: PropTypes.bool,
  stagesProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeStage: PropTypes.number,
  enableSwipe: PropTypes.bool,
  gridView: PropTypes.bool,
};

StageMenu.defaultProps = {
  isRegistration: false,
  activeStage: null,
  enableSwipe: false,
  gridView: false,
};

export default StageMenu;