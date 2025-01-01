import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Aktuelle Anamnese"
        />
    );
};

const AktuelleAnamnese = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Besuchsgrund:</strong> {parsedData?.visitReason || ""}
                </li>
                <li>
                    <strong>Schmerzlokalisierung:</strong> {parsedData?.painLocalization || ""}
                </li>
                <li>
                    <strong>Zeitverlauf:</strong> {parsedData?.timeCourse || ""}
                </li>
                <li>
                    <strong>Symptombeschreibung:</strong> {parsedData?.symptomDescription || ""}
                </li>
                <li>
                    <strong>Schmerzausstrahlung:</strong> {parsedData?.painRadiation || ""}
                </li>
                <li>
                    <strong>Schmerzverlauf:</strong> {parsedData?.painProgression || ""}
                </li>
                <li>
                    <strong>Auslöser:</strong> {parsedData?.triggers || ""}
                </li>
                <li>
                    <strong>Schmerzintensität:</strong> {parsedData?.painIntensity || ""}
                </li>
                <li>
                    <strong>Schmerzlinderung:</strong> {parsedData?.painRelief || ""}
                </li>
                <li>
                    <strong>Schmerzverstärkung:</strong> {parsedData?.painAggravation || ""}
                </li>
                <li>
                    <strong>Vorherige medizinische Betreuung:</strong> {parsedData?.previousMedicalCare || ""}
                </li>
            </ul>
        </div>
    );
};

AktuelleAnamnese.propTypes = {
    parsedData: PropTypes.shape({
        visitReason: PropTypes.string,
        painLocalization: PropTypes.string,
        timeCourse: PropTypes.string,
        symptomDescription: PropTypes.string,
        painRadiation: PropTypes.string,
        painProgression: PropTypes.string,
        triggers: PropTypes.string,
        painIntensity: PropTypes.string,
        painRelief: PropTypes.string,
        painAggravation: PropTypes.string,
        previousMedicalCare: PropTypes.string,
    }),
};

export default AktuelleAnamnese;