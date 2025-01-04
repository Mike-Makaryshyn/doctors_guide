import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import aktuelleAnamneseIcon from "../../../assets/iconFSPtable/aktuelleanamnese.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={aktuelleAnamneseIcon}
            alt="Aktuelle Anamnese Icon"
            className={styles["tile-icon"]}
        />
    );
};

const AktuelleAnamnese = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відслідковуємо, чи дані вже запарсені

    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Показуємо порожнє значення до запарсення
        }
        if (value === null || value === undefined || value === "") {
            return <span className={styles["blurred-text"]}>Keine Angabe</span>; // Якщо значення пусте, додаємо заблюрений текст
        }
        return value; // Якщо значення є, показуємо його
    };

    useEffect(() => {
        if (parsedData && Object.keys(parsedData).length > 0) {
            setIsDataParsed(true);
        }
    }, [parsedData]);

    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Besuchsgrund:</strong> {getFieldValue(parsedData?.visitReason)}
                </li>
                <li>
                    <strong>Schmerzlokalisierung:</strong> {getFieldValue(parsedData?.painLocalization)}
                </li>
                <li>
                    <strong>Zeitverlauf:</strong> {getFieldValue(parsedData?.timeCourse)}
                </li>
                <li>
                    <strong>Symptombeschreibung:</strong> {getFieldValue(parsedData?.symptomDescription)}
                </li>
                <li>
                    <strong>Schmerzausstrahlung:</strong> {getFieldValue(parsedData?.painRadiation)}
                </li>
                <li>
                    <strong>Schmerzverlauf:</strong> {getFieldValue(parsedData?.painProgression)}
                </li>
                <li>
                    <strong>Auslöser:</strong> {getFieldValue(parsedData?.triggers)}
                </li>
                <li>
                    <strong>Schmerzintensität:</strong> {getFieldValue(parsedData?.painIntensity)}
                </li>
                <li>
                    <strong>Schmerzlinderung:</strong> {getFieldValue(parsedData?.painRelief)}
                </li>
                <li>
                    <strong>Schmerzverstärkung:</strong> {getFieldValue(parsedData?.painAggravation)}
                </li>
                <li>
                    <strong>Vorherige medizinische Betreuung:</strong> {getFieldValue(parsedData?.previousMedicalCare)}
                </li>
                <li>
                    <strong>Probleme mit Funktionalität:</strong> {getFieldValue(parsedData?.functionalIssues)}
                </li>
                <li>
                    <strong>Andere begleitende Symptome:</strong> {getFieldValue(parsedData?.additionalSymptoms)}
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
        functionalIssues: PropTypes.string,
        additionalSymptoms: PropTypes.string,
    }),
};

export default AktuelleAnamnese;