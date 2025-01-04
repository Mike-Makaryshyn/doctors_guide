import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпорт вашої іконки
import personalInformationIcon from "../../../assets/iconFSPtable/personal-information.png"; 
import styles from "./TileContainer.module.scss";

// Функція для відображення іконки плитки
const renderTileIcon = () => {
    return (
        <img
            src={personalInformationIcon}
            alt="Personal Information Icon"
            className={styles["tile-icon"]}
        />
    );
};

const PersonalData = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false);

    // Функція для отримання значення поля
    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Порожнє значення до обробки даних
        }
        if (value === null || value === undefined || value === "") {
            return <span className={styles["blurred-text"]}>Keine Angabe</span>; // Заблюрений текст для пустих полів
        }
        return value;
    };

    // Відстеження зміни parsedData
    useEffect(() => {
        if (parsedData && Object.keys(parsedData).length > 0) {
            setIsDataParsed(true);
        } else {
            setIsDataParsed(false);
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
                    <strong>Vornamen:</strong> {getFieldValue(parsedData?.name)}
                </li>
                <li>
                    <strong>Namen:</strong> {getFieldValue(parsedData?.surname)}
                </li>
                <li>
                    <strong>Geburtsdatum/Alter:</strong>
                    {getFieldValue(parsedData?.birthdate)} 
                    {parsedData?.age ? ` / ${parsedData.age}` : ""}
                </li>
                <li>
                    <strong>Größe:</strong> {getFieldValue(parsedData?.height)}
                </li>
                <li>
                    <strong>Gewicht:</strong> {getFieldValue(parsedData?.weight)}
                </li>
                <li>
                    <strong>Geschlecht:</strong> {getFieldValue(parsedData?.gender)}
                </li>
                <li>
                    <strong>Hausarzt:</strong> {getFieldValue(parsedData?.hausarzt)}
                </li>
            </ul>
        </div>
    );
};

PersonalData.propTypes = {
    parsedData: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        birthdate: PropTypes.string,
        age: PropTypes.string,
        height: PropTypes.string,
        weight: PropTypes.string,
        gender: PropTypes.string,
        hausarzt: PropTypes.string, // Додано перевірку для hausarzt
    }),
};

export default PersonalData;