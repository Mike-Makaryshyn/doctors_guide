// src/components/Avatar/Avatar.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.scss";

const Avatar = ({ stageId }) => {
  // Генеруємо правильний шлях до зображень
  const imageUrl = `/assets/man-stage-${stageId}.png`;

  return (
    <div className={styles.avatar}>
      <img
        src={imageUrl}
        alt={`Stage ${stageId}`}
        className={styles.avatarImage}
        onError={(e) => {
          // Якщо зображення не знайдено, показуємо резервне
          e.target.onerror = null;
          e.target.src = "/assets/default-avatar.png";
        }}
      />
    </div>
  );
};

Avatar.propTypes = {
  stageId: PropTypes.number.isRequired,
};

export default Avatar;