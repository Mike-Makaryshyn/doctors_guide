import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо іконку
import proposedProceduresIcon from "../../../assets/iconFSPtable/proposed-procedures.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={proposedProceduresIcon}
            alt="Diagnostische Empfehlungen Icon"
            className={styles["tile-icon"]}
        />
    );
};

const DiagnostischeEmpfehlungen = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відстежуємо стан даних

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
                    <strong>Körperliche Untersuchung:</strong> {getFieldValue(parsedData?.physicalExamination)}
                </li>
                <li>
                    <strong>Laboruntersuchung:</strong> {getFieldValue(parsedData?.laboratoryTests)}
                </li>
                <li>
                    <strong>Apparative Untersuchung:</strong> {getFieldValue(parsedData?.instrumentalExamination)}
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