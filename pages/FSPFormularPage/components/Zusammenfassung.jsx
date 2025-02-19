// src/pages/FSPFormularPage/components/Zusammenfassung.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./TileContainer.module.scss"; // Універсальні стилі

const Zusammenfassung = ({ parsedData }) => {
    return (
        <div className={styles["zusammenfassung"]}>
            {/* Пустий контейнер або додайте візуальні індикатори, якщо необхідно */}
            <p>Zusammenfassung</p> 
        </div>
    );
};

Zusammenfassung.propTypes = {
    parsedData: PropTypes.shape({
        summary: PropTypes.string,
    }).isRequired,
};

export default Zusammenfassung;