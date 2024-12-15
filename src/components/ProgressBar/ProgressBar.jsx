import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ stagesProgress, displayType = "circle" }) => {
  const [totalProgress, setTotalProgress] = useState(0);

  // Обчислення загального прогресу
  useEffect(() => {
    if (Array.isArray(stagesProgress) && stagesProgress.length > 0) {
      const sum = stagesProgress.reduce((acc, curr) => acc + curr, 0);
      const average = sum / stagesProgress.length;
      setTotalProgress(Math.round(average));
    } else {
      console.error("Invalid stagesProgress structure:", stagesProgress);
    }
  }, [stagesProgress]);

  return (
    <div className={styles.progressBarContainer}>
      {displayType === "line" ? (
        // Лінійний прогрес з точками
        <>
          <div className={styles.stagesLine}>
            {stagesProgress.map((progress, index) => (
              <div key={index} className={styles.stageWrapper}>
                {/* Лінія між точками */}
                {index > 0 && (
                  <div
                    className={styles.stageLine}
                    style={{
                      background: `linear-gradient(to right, #4caf50 ${progress}%, #e0e0e0 ${progress}%)`,
                    }}
                  ></div>
                )}
                {/* Точка етапу */}
                <div
                  className={styles.stagePoint}
                  style={{
                    backgroundColor: progress === 100 ? "#4caf50" : "#e0e0e0",
                  }}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          {/* Загальний прогрес */}
          <div className={styles.totalProgress}>
            Загальний прогрес: {totalProgress}%
          </div>
        </>
      ) : (
        // Кругова діаграма
        <div className={styles.progressCircle}>
          <svg className={styles.progressSvg} viewBox="0 0 36 36">
            {/* Фонове коло */}
            <path
              className={styles.circleBg}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Динамічний прогрес */}
            <path
              className={styles.circle}
              strokeDasharray={`${totalProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className={styles.progressText}>{totalProgress}%</div>
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  stagesProgress: PropTypes.arrayOf(PropTypes.number).isRequired, // Массив прогресів по етапах
  displayType: PropTypes.oneOf(["line", "circle"]), // Тип відображення: лінія або коло
};

export default ProgressBar;