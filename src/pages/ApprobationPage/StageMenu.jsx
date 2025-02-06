import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { APPROBATION_STAGES_NON_EU } from "../../constants/translation/stagesTranslationNonEU";
import { APPROBATION_STAGES_EU } from "../../constants/translation/stagesTranslationEU";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./StageMenu.module.scss";
import classNames from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Імпорт Tippy з @tippyjs/react
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
  enableSwipe,
  gridView,
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

  // Якщо потрібно відображати усі етапи, не застосовуємо slice()
  const stages =
    normalizedCategory === "EU"
      ? APPROBATION_STAGES_EU[language]
      : APPROBATION_STAGES_NON_EU[language];

  // Для мобільних перемикань за допомогою свайпу – виключаємо вибір через клік
  const stagesWrapperRef = useRef(null);

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

  // Обробка кліку лише для десктопу
  const handleStageClick = (stageId) => {
    if (window.innerWidth > 600) {
      onStageSelect(stageId);
      if (!isRegistration && user) {
        updateActiveStage(stageId);
      }
    }
  };

  // Обробка свайпу: для мобільних пристроїв відслідковуємо scroll і визначаємо індекс активного етапу
  useEffect(() => {
    if (window.innerWidth <= 600 && stagesWrapperRef.current) {
      const handleScroll = () => {
        const container = stagesWrapperRef.current;
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        const newActiveId = stages[newIndex]?.id;
        if (newActiveId && newActiveId !== activeStage) {
          onStageSelect(newActiveId);
          if (!isRegistration && user) {
            updateActiveStage(newActiveId);
          }
        }
      };
      const container = stagesWrapperRef.current;
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeStage, onStageSelect, stages, isRegistration, user]);

  // При завантаженні сторінки (на мобільних) прокручуємо до активного етапу
  useEffect(() => {
    if (window.innerWidth <= 600 && stagesWrapperRef.current) {
      const activeElem = document.querySelector(`.${styles.stage}.${styles.active}`);
      if (activeElem) {
        activeElem.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [activeStage]);

  return (
    <div className={styles.stageMenuContainer}>
      {/* Кнопки для прокрутки (тільки для десктопу) */}
      {!gridView && enableSwipe && window.innerWidth > 600 && (
        <>
          <button
            className={classNames(styles.scrollButton, styles.left)}
            onClick={() => {
              if (stagesWrapperRef.current) {
                stagesWrapperRef.current.scrollBy({ left: -200, behavior: "smooth" });
              }
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className={classNames(styles.scrollButton, styles.right)}
            onClick={() => {
              if (stagesWrapperRef.current) {
                stagesWrapperRef.current.scrollBy({ left: 200, behavior: "smooth" });
              }
            }}
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
          <Tippy
            key={stage.id}
            content={stage.description}
            placement="top"
            arrow={true}
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
      {/* Опис відображається лише через Tippy – додатковий блок прибрано */}
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
  debugCategory: PropTypes.string,
};

StageMenu.defaultProps = {
  isRegistration: false,
  activeStage: null,
  enableSwipe: false,
  gridView: false,
  debugCategory: "",
};

export default StageMenu;