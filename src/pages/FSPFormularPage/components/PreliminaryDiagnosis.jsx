import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Vorläufige Diagnose"
        />
    );
};

const PreliminaryDiagnosis = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Vermutete Diagnose:</strong> {parsedData?.suspectedDiagnosis || ""}
                </li>
                <li>
                    <strong>Begründung:</strong> {parsedData?.justification || ""}
                </li>
                <li>
                    <strong>Differenzialdiagnosen:</strong> {parsedData?.differentialDiagnoses || ""}
                </li>
              
            </ul>
        </div>
    );
};

PreliminaryDiagnosis.propTypes = {
    parsedData: PropTypes.shape({
        suspectedDiagnosis: PropTypes.string,
        justification: PropTypes.string,
        differentialDiagnoses: PropTypes.string,
        furtherDiagnostics: PropTypes.string,
        urgency: PropTypes.string,
    }),
};

export default PreliminaryDiagnosis;