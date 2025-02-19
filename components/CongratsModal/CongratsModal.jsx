// src/components/CongratsModal/CongratsModal.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./CongratsModal.module.scss";

const CongratsModal = ({ message, language, onClose, onNextStage }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{language === "en" ? "Congratulations!" : "Вітаємо!"}</h2>
        <p>{message || (language === "en" ? "You have completed the stage!" : "Ви завершили етап!")}</p>
        <div className={styles.buttons}>
          <button onClick={onClose}>
            {language === "en" ? "Close" : "Закрити"}
          </button>
          <button onClick={onNextStage}>
            {language === "en" ? "Next Stage" : "Наступний етап"}
          </button>
        </div>
      </div>
    </div>
  );
};

CongratsModal.propTypes = {
  message: PropTypes.string,
  language: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onNextStage: PropTypes.func.isRequired,
};

export default CongratsModal;