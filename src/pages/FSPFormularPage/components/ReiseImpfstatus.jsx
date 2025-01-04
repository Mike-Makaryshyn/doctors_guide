import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпорт вашої іконки
import travelIcon from "../../../assets/iconFSPtable/travel-icon.png"; // змініть шлях на відповідний
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={travelIcon} // використовуємо іконку
            alt="Reise- und Impfstatus Icon"
            className={styles["tile-icon"]}
        />
    );
};

const ReiseImpfstatus = ({ parsedData = {} }) => {
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
                    <strong>Impfung:</strong> {getFieldValue(parsedData?.vaccination)}
                </li>
                <li>
                    <strong>Reise:</strong> {getFieldValue(parsedData?.travelHistory)}
                </li>
            </ul>
        </div>
    );
};

ReiseImpfstatus.propTypes = {
    parsedData: PropTypes.shape({
        vaccination: PropTypes.string, // Поле для інформації про вакцинацію
        travelHistory: PropTypes.string, // Поле для інформації про подорожі
    }),
};

export default ReiseImpfstatus;