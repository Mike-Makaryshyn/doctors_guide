import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.scss";

// Статичні імпорти зображень для етапів
import Stage1Img from "../../assets/stages/man-stage-1.png";
import Stage2Img from "../../assets/stages/man-stage-2.png";
import Stage3Img from "../../assets/stages/man-stage-3.png";
import Stage4Img from "../../assets/stages/man-stage-4.png";
import Stage5Img from "../../assets/stages/man-stage-5.png";
import Stage6Img from "../../assets/stages/man-stage-6.png";
import Stage7Img from "../../assets/stages/man-stage-7.png";
import Stage8Img from "../../assets/stages/man-stage-8.png";
import Stage9Img from "../../assets/stages/man-stage-9.png";

// Якщо файлу default-avatar.png немає, можна використати інший існуючий файл, наприклад:
import DefaultAvatar from "../../assets/stages/woman-stage-1.png";

const stageImages = {
  1: Stage1Img,
  2: Stage2Img,
  3: Stage3Img,
  4: Stage4Img,
  5: Stage5Img,
  6: Stage6Img,
  7: Stage7Img,
  8: Stage8Img,
  9: Stage9Img,
};

const Avatar = ({ stageId, className }) => {
  const imageUrl = stageImages[stageId] || DefaultAvatar;

  return (
    <img
      src={imageUrl}
      alt={`Stage ${stageId}`}
      className={`${styles.avatarImage} ${className}`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = DefaultAvatar;
      }}
    />
  );
};

Avatar.propTypes = {
  stageId: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: "",
};

export default Avatar;