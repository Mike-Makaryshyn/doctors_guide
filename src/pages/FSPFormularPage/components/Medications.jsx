import React, { useEffect, useState } from "react";
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

const Medications = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відслідковуємо, чи дані вже запарсені

    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Показуємо порожнє значення до запарсення
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
                    <strong>Medikamenteneinnahme:</strong> {getFieldValue(parsedData?.allgemeineMedikamenteneinnahme)}
                </li>
                <li>
                    <strong>Medikamenteninformationen:</strong> {getFieldValue(parsedData?.detaillierteMedikamenteninformationen)}
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