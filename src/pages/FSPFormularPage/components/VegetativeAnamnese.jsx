import React from "react";
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
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Загальний стан:</strong> {parsedData?.generalCondition || ""}
                </li>
                <li>
                    <strong>Appetit:</strong> {parsedData?.appetite || ""}
                </li>
                <li>
                    <strong>Gewicht:</strong> {parsedData?.weight || ""}
                </li>
                <li>
                    <strong>Durstgefühl (Спрага):</strong> {parsedData?.thirst || ""}
                </li>
                <li>
                    <strong>Übelkeit:</strong> {parsedData?.nausea || ""}
                </li>
                <li>
                    <strong>Erbrechen:</strong> {parsedData?.vomiting || ""}
                </li>
                <li>
                    <strong>Stuhlgang:</strong> {parsedData?.bowelMovement || ""}
                </li>
                <li>
                    <strong>Wasserlassen:</strong> {parsedData?.urination || ""}
                </li>
                <li>
                    <strong>Schwitzen (Пітливість):</strong> {parsedData?.sweating || ""}
                </li>
                <li>
                    <strong>Schwindel:</strong> {parsedData?.vertigo || ""}
                </li>
                <li>
                    <strong>Bewusstsein:</strong> {parsedData?.consciousness || ""}
                </li>
                <li>
                    <strong>Herzklopfen (Серцебиття):</strong> {parsedData?.palpitations || ""}
                </li>
                <li>
                    <strong>Atemnot (Задишка):</strong> {parsedData?.shortnessOfBreath || ""}
                </li>
                <li>
                    <strong>Hitzewallungen (Припливи жару):</strong> {parsedData?.hotFlashes || ""}
                </li>
                <li>
                    <strong>Kältegefühl (Відчуття холоду):</strong> {parsedData?.coldFeeling || ""}
                </li>
                <li>
                    <strong>Терморегуляція:</strong> {parsedData?.thermoregulation || ""}
                </li>
                <li>
                    <strong>Schlafen:</strong> {parsedData?.sleep || ""}
                </li>
                <li>
                    <strong>Sexualanamnese:</strong> {parsedData?.sexualHistory || ""}
                </li>
                <li>
                    <strong>Sonstiges:</strong> {parsedData?.others || ""}
                </li>
                <li>
                    <strong>Gynäkologische Anamnese:</strong> {parsedData?.gynecologicalHistory || ""}
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