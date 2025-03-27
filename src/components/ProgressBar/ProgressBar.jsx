import React from "react";
import PropTypes from "prop-types";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ displayType = "circle", progress }) => {
  const currentProgress = typeof progress === "number" ? progress : 0;

  return displayType === "line" ? (
    <div className={styles.progressBarContainer}>
      <div className={styles.stagesLine}>
        <div className={styles.stageWrapper}>
          <div className={styles.stageLine} style={{ width: `${currentProgress}%` }}></div>
          <div
            className={styles.stagePoint}
            style={{
              backgroundColor: currentProgress === 100 ? "#4caf50" : "#e0e0e0",
            }}
          >
            1
          </div>
        </div>
      </div>
      <div className={styles.totalProgress}>
        Загальний прогрес: {currentProgress}%
      </div>
    </div>
  ) : (
    <div className={styles.progressCircle}>
      <svg className={styles.progressSvg} viewBox="0 0 36 36">
        <path
          className={styles.circleBg}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={styles.circle}
          strokeDasharray={`${currentProgress}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className={styles.progressText}>{currentProgress}%</div>
    </div>
  );
};

ProgressBar.propTypes = {
  displayType: PropTypes.oneOf(["line", "circle"]),
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;