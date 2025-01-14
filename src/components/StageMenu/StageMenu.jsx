// src/components/StageMenu/StageMenu.jsx

import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { APPROBATION_STAGES } from "../../constants/translation/stagesTranslation";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./StageMenu.module.scss";
import classNames from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Іконки для стрілок

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
    onStageSelect(stageId); // Викликаємо функцію з батьківського компонента

    // Записуємо activeStage у Firestore тільки якщо не реєструємося
    if (!isRegistration && user) {
      updateActiveStage(stageId);
    }

    // Якщо на мобільному, показати опис при кліку
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
          [styles.gridView]: gridView, // Додаємо новий стиль для сітки
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
            {/* Радіальна діаграма прогресу */}
            <div className={styles.progressCircle}>
              <svg className={styles.progressSvg} viewBox="0 0 36 36">
                {/* Фонове кільце */}
                <path
                  className={styles.circleBg}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Прогрес */}
                <path
                  className={styles.circle}
                  strokeDasharray={`${stagesProgress[index]}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              {/* Картинка етапу */}
              <img
                src={`/assets/man-stage-${index + 1}.png`} // Переконайтеся, що шлях до зображення правильний
                alt={`Stage ${index + 1}`}
                className={styles.stageImage}
              />
            </div>
            {/* Назва етапу */}
            <div className={styles.stageTitle}>{stage.title}</div>
          </div>
        ))}
      </div>
      {/* Опис етапу */}
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
  stagesProgress: PropTypes.arrayOf(PropTypes.number).isRequired, // Масив прогресів по етапах
  activeStage: PropTypes.number, // Додано для контролю activeStage
  enableSwipe: PropTypes.bool, // Проп для включення свайпу
  gridView: PropTypes.bool, // Новий проп для включення сітки
};

StageMenu.defaultProps = {
  isRegistration: false,
  activeStage: null, // Дефолтне значення
  enableSwipe: false, // За замовчуванням свайп вимкнений
  gridView: false, // За замовчуванням режим сітки вимкнений
};

export default StageMenu;