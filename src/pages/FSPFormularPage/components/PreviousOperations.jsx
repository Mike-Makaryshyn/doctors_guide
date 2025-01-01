import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Previous Operations"
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