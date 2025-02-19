import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо вашу власну іконку
import differentialDiagnosisIcon from "../../../assets/iconFSPtable/differential-diagnosis.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={differentialDiagnosisIcon}
            alt="Differentialdiagnose Icon"
            className={styles["tile-icon"]}
        />
    );
};

const DifferentialDiagnosis = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відслідковуємо стан даних

    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Показуємо порожнє значення до обробки даних
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
                    <strong>Differentiale Diagnosen:</strong> {getFieldValue(parsedData?.possibleDiagnoses)}
                </li>
                <li>
                    <strong>Abgrenzung:</strong> {getFieldValue(parsedData?.differentiation)}
                </li>
               
            </ul>
        </div>
    );
};

DifferentialDiagnosis.propTypes = {
    parsedData: PropTypes.shape({
        possibleDiagnoses: PropTypes.string,
        differentiation: PropTypes.string,
        necessaryTests: PropTypes.string,
        probability: PropTypes.string,
    }),
};

export default DifferentialDiagnosis;