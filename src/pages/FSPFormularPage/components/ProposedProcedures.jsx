import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Diagnostische Empfehlungen"
        />
    );
};

const DiagnostischeEmpfehlungen = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Körperliche Untersuchung:</strong> {parsedData?.physicalExamination || ""}
                </li>
                <li>
                    <strong>Laboruntersuchung:</strong> {parsedData?.laboratoryTests || ""}
                </li>
                <li>
                    <strong>Apparative Untersuchung:</strong> {parsedData?.instrumentalExamination || ""}
                </li>
            </ul>
        </div>
    );
};

DiagnostischeEmpfehlungen.propTypes = {
    parsedData: PropTypes.shape({
        physicalExamination: PropTypes.string,
        laboratoryTests: PropTypes.string,
        instrumentalExamination: PropTypes.string,
    }),
};

export default DiagnostischeEmpfehlungen;