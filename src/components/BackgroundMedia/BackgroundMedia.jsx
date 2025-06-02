// src/components/BackgroundMedia/BackgroundMedia.jsx

import React from "react";
import regionBackgrounds from "../../utils/regionBackgrounds";
import bgVideo from "../../assets/video/first_page_bg.mp4";
import styles from "./BackgroundMedia.module.scss"; // трохи стилів описані нижче
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
const BackgroundMedia = ({ wrapperClassName = "" }) => {
  const { selectedRegion } = useGetGlobalInfo();

  // Якщо для поточного регіону є картинка в мапі — рендеримо її
  if (selectedRegion && regionBackgrounds[selectedRegion]) {
    const imgSrc = regionBackgrounds[selectedRegion];
    return (
      <div className={styles.wrapper}>
        <img
          src={imgSrc}
          alt={`${selectedRegion} Hintergrund`}
          className={styles.backgroundImage}
        />
      </div>
    );
  }

  // Якщо регіон не вибрано або нема картинки — рендеримо відео
  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        src={bgVideo}
      />
    </div>
  );
};

export default BackgroundMedia;