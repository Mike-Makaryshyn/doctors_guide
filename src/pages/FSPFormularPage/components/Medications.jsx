import React from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import medicationsIcon from "../../../assets/iconFSPtable/medications.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={medicationsIcon}
            alt="Medikamentenanamnese Icon"
            className={styles["tile-icon"]}
        />
    );
};

const Medications = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Allgemeine Medikamenteneinnahme:</strong> {parsedData?.allgemeineMedikamenteneinnahme || ""}
                </li>
                <li>
                    <strong>Detaillierte Medikamenteninformationen:</strong> {parsedData?.detaillierteMedikamenteninformationen || ""}
                </li>
            </ul>
        </div>
    );
};

Medications.propTypes = {
    parsedData: PropTypes.shape({
        allgemeineMedikamenteneinnahme: PropTypes.string,
        detaillierteMedikamenteninformationen: PropTypes.string,
    }),
};

export default Medications;