import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпорт власної іконки
import vorerkrankungenIcon from "../../../assets/iconFSPtable/vorerkrankungen.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={vorerkrankungenIcon}
            alt="Vorerkrankungen Icon"
            className={styles["tile-icon"]}
        />
    );
};

const Vorerkrankungen = ({ parsedData = {} }) => {
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
                <div className={styles["tile-icon-container"]}>{renderTileIcon()}</div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Infektionskrankheiten:</strong> {getFieldValue(parsedData?.infectiousDiseases)}
                </li>
                <li>
                    <strong>Chronische Erkrankungen:</strong> {getFieldValue(parsedData?.chronicDiseases)}
                </li>
                <li>
                    <strong>Weitere relevante Erkrankungen:</strong> {getFieldValue(parsedData?.otherRelevantDiseases)}
                </li>
            </ul>
        </div>
    );
};

Vorerkrankungen.propTypes = {
    parsedData: PropTypes.shape({
        infectiousDiseases: PropTypes.string,
        chronicDiseases: PropTypes.string,
        otherRelevantDiseases: PropTypes.string,
    }),
};

export default Vorerkrankungen;