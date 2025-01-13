import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }) => {
  const navigate = useNavigate();

  const handleNavigateToDocuments = () => {
    navigate("/documents"); // Замініть на ваш шлях до сторінки документів
  };

  return (
    <div className={styles.progressContainer}>
      <h2>Прогрес заповнення документів</h2>
      <div className={styles.circularWrapper} onClick={handleNavigateToDocuments}>
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: "#4CAF50",
            trailColor: "#e0e0e0",
            textColor: "transparent",
          })}
        />
        <div className={styles.iconWrapper}>
          <FaFileAlt className={styles.documentIcon} />
          <div className={styles.percentageText}>{progress}%</div>
        </div>
      </div>

      {/* Додаємо плитку під прогрес-баром */}
      <div className={styles.tileWrapper}>
        <div className={styles.tile} onClick={handleNavigateToDocuments}>
          <span>До документів</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;