import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }) => {
  const navigate = useNavigate();

  const handleNavigateToDocuments = () => {
    navigate("/documents");
  };

  return (
    <div className={styles.progressContainer}>
      <h2></h2>
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
    </div>
  );
};

export default ProgressBar;