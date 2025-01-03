import React from "react";
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

const AllergiesAndIntolerances = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Medikamentenallergien:</strong> {parsedData?.specificMedicationAllergies || ""}
                </li>
                <li>
                    <strong>Symptomatik allergischer Reaktionen:</strong> {parsedData?.allergicReactionSymptoms || ""}
                </li>
                <li>
                    <strong>Allergieauslöser:</strong> {parsedData?.allergyTriggers || ""}
                </li>
                <li>
                    <strong>Haushaltsallergene:</strong> {parsedData?.householdAllergens || ""}
                </li>
                <li>
                    <strong>Unverträglichkeiten:</strong> {parsedData?.specificIntolerances || ""}
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