import React from "react";
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

const Familienanamnese = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Генетичні хвороби:</strong> {parsedData?.geneticDiseases || ""}
                </li>
                <li>
                    <strong>Eltern:</strong> {parsedData?.parents || ""}
                </li>
                <li>
                    <strong>Geschwister:</strong> {parsedData?.siblings || ""}
                </li>
            </ul>
        </div>
    );
};

Familienanamnese.propTypes = {
    parsedData: PropTypes.shape({
        parents: PropTypes.string,
        siblings: PropTypes.string,
        geneticDiseases: PropTypes.string, // Додано нове поле
    }),
};

export default Familienanamnese;