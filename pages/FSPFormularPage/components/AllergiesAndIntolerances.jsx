import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import allergiesIcon from "../../../assets/iconFSPtable/allergies.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={allergiesIcon}
            alt="Allergien und Unverträglichkeiten Icon"
            className={styles["tile-icon"]}
        />
    );
};

const AllergiesAndIntolerances = ({ parsedData = {} }) => {
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
                <div className={styles["tile-icon-container"]}>{renderTileIcon()}</div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Medikamentenallergien:</strong> {getFieldValue(parsedData?.specificMedicationAllergies)}
                </li>
                <li>
                    <strong>Symptomatik allergischer Reaktionen:</strong> {getFieldValue(parsedData?.allergicReactionSymptoms)}
                </li>
                <li>
                    <strong>Allergieauslöser:</strong> {getFieldValue(parsedData?.allergyTriggers)}
                </li>
                <li>
                    <strong>Haushaltsallergene:</strong> {getFieldValue(parsedData?.householdAllergens)}
                </li>
                <li>
                    <strong>Unverträglichkeiten:</strong> {getFieldValue(parsedData?.specificIntolerances)}
                </li>
            </ul>
        </div>
    );
};

AllergiesAndIntolerances.propTypes = {
    parsedData: PropTypes.shape({
        specificMedicationAllergies: PropTypes.string,
        allergicReactionSymptoms: PropTypes.string,
        allergyTriggers: PropTypes.string,
        householdAllergens: PropTypes.string,
        specificIntolerances: PropTypes.string,
    }),
};

export default AllergiesAndIntolerances;