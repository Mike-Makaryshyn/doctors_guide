import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import styles from "./ProgressBar.module.scss";
import { useDocumentsProgress } from "../../contexts/DocumentsProgressContext";

const ProgressBar = () => {
  const { progress } = useDocumentsProgress();
  const navigate = useNavigate();

  const handleNavigateToDocuments = () => {
    navigate("/documents");
  };

  return (
    <div className={`${styles.tile} ${styles.progressContainer}`} style={{ position: "relative" }}>
      <Link to="/documents" className={styles.editIcon} title="Dokumente">
        <FaFileAlt />
      </Link>
      <h3 className={styles.tileHeader}>Dokumenten-Fortschritt</h3>
      <div
        className={styles.progressBar}
        data-tutorial="progressBar"
      >
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
          data-progress={progress}
        />
      </div>
    </div>
  );
};

export default ProgressBar;