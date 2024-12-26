// src/pages/FSPFormularPage/components/Zusammenfassung.jsx
import React from "react";
import PropTypes from "prop-types";
import FSPFormularPageData from "../../../constants/translation/FSPFormularPage";
import styles from "./TileContainer.module.scss"; // Універсальні стилі

const Zusammenfassung = ({ onInfoClick }) => {
    const handleTileClick = () => {
        onInfoClick(); // Викликаємо функцію відкриття модального вікна
    };

    return (
        <div
    className={styles["zusammenfassung"]}
    onClick={handleTileClick}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
            handleTileClick();
        }
    }}
    style={{ backgroundColor: "red", width: "90%" }} // Додаємо ширину
>
</div>
    );
};

Zusammenfassung.propTypes = {
    onInfoClick: PropTypes.func.isRequired,
};

export default Zusammenfassung;