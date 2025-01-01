import React from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import previousOperationsIcon from "../../../assets/iconFSPtable/previous-operations.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={previousOperationsIcon}
            alt="Previous Operations Icon"
            className={styles["tile-icon"]}
        />
    );
};

const PreviousOperations = ({ parsedData = {} }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Frühere Operationen:</strong> {parsedData?.pastOperations || ""}
                </li>
                <li>
                    <strong>Operationsverlauf und Komplikationen:</strong> {parsedData?.operationCourseComplications || ""}
                </li>
                <li>
                    <strong>Dauer des Krankenhausaufenthalts:</strong> {parsedData?.hospitalStayDuration || ""}
                </li>
            </ul>
        </div>
    );
};

PreviousOperations.propTypes = {
    parsedData: PropTypes.shape({
        pastOperations: PropTypes.string,
        operationCourseComplications: PropTypes.string,
        hospitalStayDuration: PropTypes.string,
    }),
};

export default PreviousOperations;