import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.scss";

const Avatar = ({ stageId, className }) => {
   const imageUrl = `/assets/man-stage-${stageId}.png`;

   return (
      <img
         src={imageUrl}
         alt={`Stage ${stageId}`}
         className={`${styles.avatarImage} ${className}`}
         onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/default-avatar.png";
         }}
      />
   );
};

Avatar.propTypes = {
   stageId: PropTypes.number.isRequired,
   className: PropTypes.string, // Додатковий клас
};

Avatar.defaultProps = {
   className: "",
};

export default Avatar;