import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Allergien und Unverträglichkeiten"
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
                    <strong>Spezifische Medikamentenallergien:</strong> {parsedData?.specificMedicationAllergies || ""}
                </li>
                <li>
                    <strong>Symptomatik allergischer Reaktionen:</strong> {parsedData?.allergicReactionSymptoms || ""}
                </li>
                <li>
                    <strong>Allergieauslöser:</strong> {parsedData?.allergyTriggers || ""}
                </li>
                <li>
                    <strong>Spezifische Unverträglichkeiten:</strong> {parsedData?.specificIntolerances || ""}
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
        specificIntolerances: PropTypes.string,
    }),
};

export default AllergiesAndIntolerances;