import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import familienanamneseIcon from "../../../assets/iconFSPtable/familienanamnese.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={familienanamneseIcon}
            alt="Familienanamnese Icon"
            className={styles["tile-icon"]}
        />
    );
};

const Familienanamnese = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відслідковуємо стан даних

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
                    <strong>Genetische Erkrankungen:</strong> {getFieldValue(parsedData?.geneticDiseases)}
                </li>
                <li>
                    <strong>Eltern:</strong> {getFieldValue(parsedData?.parents)}
                </li>
                <li>
                    <strong>Geschwister:</strong> {getFieldValue(parsedData?.siblings)}
                </li>
            </ul>
        </div>
    );
};

Familienanamnese.propTypes = {
    parsedData: PropTypes.shape({
        geneticDiseases: PropTypes.string,
        parents: PropTypes.string,
        siblings: PropTypes.string,
    }),
};

export default Familienanamnese;