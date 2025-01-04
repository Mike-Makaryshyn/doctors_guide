import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Імпортуємо вашу іконку
import aktuelleAnamneseIcon from "../../../assets/iconFSPtable/VegetativeAnamnese.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={aktuelleAnamneseIcon}
            alt="Vegetative Anamnese Icon"
            className={styles["tile-icon"]}
        />
    );
};

const VegetativeAnamnese = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false); // Відслідковуємо, чи дані вже запарсені

    // Функція для перевірки значень
    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Показуємо порожнє значення до запарсення
        }
        if (value === null || value === undefined || value === "") {
            return <span className={styles["blurred-text"]}>Keine Angabe</span>; // Якщо значення пусте, додаємо заблюрений текст
        }
        return value; // Якщо значення є, показуємо його
    };

    // Встановлюємо isDataParsed в true, коли дані запарсились
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
                    <strong>Allgemeiner Zustand:</strong> {getFieldValue(parsedData?.generalCondition)}
                </li>
                <li>
                    <strong>Appetit:</strong> {getFieldValue(parsedData?.appetite)}
                </li>
                <li>
                    <strong>Gewicht:</strong> {getFieldValue(parsedData?.weightLoss)}
                </li>
                <li>
                    <strong>Durstgefühl:</strong> {getFieldValue(parsedData?.thirst)}
                </li>
                <li>
                    <strong>Übelkeit:</strong> {getFieldValue(parsedData?.nausea)}
                </li>
                <li>
                    <strong>Erbrechen:</strong> {getFieldValue(parsedData?.vomiting)}
                </li>
                <li>
                    <strong>Stuhlgang:</strong> {getFieldValue(parsedData?.bowelMovement)}
                </li>
                <li>
                    <strong>Wasserlassen:</strong> {getFieldValue(parsedData?.urination)}
                </li>
                <li>
                    <strong>Schwitzen:</strong> {getFieldValue(parsedData?.sweating)}
                </li>
                <li>
                    <strong>Schwindel:</strong> {getFieldValue(parsedData?.vertigo)}
                </li>
                <li>
                    <strong>Bewusstsein:</strong> {getFieldValue(parsedData?.consciousness)}
                </li>
                <li>
                    <strong>Herzklopfen:</strong> {getFieldValue(parsedData?.palpitations)}
                </li>
                <li>
                    <strong>Atemnot:</strong> {getFieldValue(parsedData?.shortnessOfBreath)}
                </li>
                <li>
                    <strong>Hitzewallungen:</strong> {getFieldValue(parsedData?.hotFlashes)}
                </li>
                <li>
                    <strong>Kältegefühl:</strong> {getFieldValue(parsedData?.coldFeeling)}
                </li>
                <li>
                    <strong>Schlafen:</strong> {getFieldValue(parsedData?.sleep)}
                </li>
                <li>
                    <strong>Sexualanamnese:</strong> {getFieldValue(parsedData?.sexualHistory)}
                </li>
                <li>
                    <strong>Sonstiges:</strong> {getFieldValue(parsedData?.others)}
                </li>
                <li>
                    <strong>Gynäkologische Anamnese:</strong> {getFieldValue(parsedData?.gynecologicalHistory)}
                </li>
            </ul>
        </div>
    );
};

VegetativeAnamnese.propTypes = {
    parsedData: PropTypes.shape({
        generalCondition: PropTypes.string,
        appetite: PropTypes.string,
        weight: PropTypes.string,
        thirst: PropTypes.string,
        nausea: PropTypes.string,
        vomiting: PropTypes.string,
        bowelMovement: PropTypes.string,
        urination: PropTypes.string,
        sweating: PropTypes.string,
        vertigo: PropTypes.string,
        consciousness: PropTypes.string,
        palpitations: PropTypes.string,
        shortnessOfBreath: PropTypes.string,
        hotFlashes: PropTypes.string,
        coldFeeling: PropTypes.string,
        thermoregulation: PropTypes.string,
        sleep: PropTypes.string,
        sexualHistory: PropTypes.string,
        others: PropTypes.string,
        gynecologicalHistory: PropTypes.string,
    }),
};

export default VegetativeAnamnese;