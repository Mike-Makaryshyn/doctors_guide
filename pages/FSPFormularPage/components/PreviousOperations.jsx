import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import previousOperationsIcon from "../../../assets/iconFSPtable/previous-operations.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={previousOperationsIcon}
            alt="Previous Operations Icon"
            className={styles["tile-icon"]}
        />
    );
};

const PreviousOperations = ({ parsedData = {} }) => {
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
                    <strong>Frühere Operationen:</strong> {getFieldValue(parsedData?.pastOperations)}
                </li>
                <li>
                    <strong>Operationsverlauf und Komplikationen:</strong> {getFieldValue(parsedData?.operationCourseComplications)}
                </li>
                <li>
                    <strong>Dauer des Krankenhausaufenthalts:</strong> {getFieldValue(parsedData?.hospitalStayDuration)}
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