import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import preliminaryDiagnosisIcon from "../../../assets/iconFSPtable/preliminary-diagnosis.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={preliminaryDiagnosisIcon}
            alt="Vorläufige Diagnose Icon"
            className={styles["tile-icon"]}
        />
    );
};

const PreliminaryDiagnosis = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відстежуємо стан даних

    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Порожнє значення до запарсення
        }
        if (value === null || value === undefined || value === "") {
            return <span className={styles["blurred-text"]}>Keine Angabe</span>; // Заблюрений текст для пустих значень
        }
        return value; // Повертаємо значення, якщо воно є
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
                    <strong>Vermutete Diagnose:</strong> {getFieldValue(parsedData?.suspectedDiagnosis)}
                </li>
                <li>
                    <strong>Begründung:</strong> {getFieldValue(parsedData?.justification)}
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