import React from "react";
import PropTypes from "prop-types";
// Імпортуємо вашу іконку
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
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Beruf:</strong> {parsedData?.profession || ""}
                </li>
                <li>
                    <strong>Familienstand:</strong> {parsedData?.maritalStatus || ""}
                </li>
                <li>
                    <strong>Kinder:</strong> {parsedData?.children || ""}
                </li>
                <li>
                    <strong>Wohnsituation:</strong> {parsedData?.livingConditions || ""}
                </li>
                <li>
                    <strong>Psychosomatische Anamnese/Stress:</strong> {parsedData?.psychosomaticHistory || ""}
                </li>
                <li>
                    <strong>Фізична активність:</strong> {parsedData?.physicalActivity || ""}
                </li>
                <li>
                    <strong>Харчові звички:</strong> {parsedData?.dietaryHabits || ""}
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
        physicalActivity: PropTypes.string, // Додано нове поле
        dietaryHabits: PropTypes.string, // Додано нове поле
    }),
};

export default Sozialanamnese;