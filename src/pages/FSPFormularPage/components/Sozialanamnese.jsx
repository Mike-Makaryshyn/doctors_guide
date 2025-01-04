import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо іконку
import sozialanamneseIcon from "../../../assets/iconFSPtable/sozialanamnese.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={sozialanamneseIcon}
            alt="Sozialanamnese Icon"
            className={styles["tile-icon"]}
        />
    );
};

const Sozialanamnese = ({ parsedData = {} }) => {
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
                    <strong>Beruf:</strong> {getFieldValue(parsedData?.profession)}
                </li>
                <li>
                    <strong>Familienstand:</strong> {getFieldValue(parsedData?.maritalStatus)}
                </li>
                <li>
                    <strong>Kinder:</strong> {getFieldValue(parsedData?.children)}
                </li>
                <li>
                    <strong>Wohnsituation:</strong> {getFieldValue(parsedData?.livingConditions)}
                </li>
                <li>
                    <strong>Psychosomatische Anamnese/Stress:</strong> {getFieldValue(parsedData?.psychosomaticHistory)}
                </li>
                <li>
                    <strong>Körperliche Aktivität:</strong> {getFieldValue(parsedData?.physicalActivity)}
                </li>
                <li>
                    <strong>Ernährungsgewohnheiten:</strong> {getFieldValue(parsedData?.dietaryHabits)}
                </li>
            </ul>
        </div>
    );
};

Sozialanamnese.propTypes = {
    parsedData: PropTypes.shape({
        profession: PropTypes.string,
        maritalStatus: PropTypes.string,
        children: PropTypes.string,
        livingConditions: PropTypes.string,
        psychosomaticHistory: PropTypes.string,
        physicalActivity: PropTypes.string,
        dietaryHabits: PropTypes.string,
    }),
};

export default Sozialanamnese;