import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Persönliche Daten"
        />
    );
};

const PersonalData = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Vornamen:</strong> {parsedData?.name || ""}
                </li>
                <li>
                    <strong>Namen:</strong> {parsedData?.surname || ""}
                </li>
                <li>
                    <strong>Geburtsdatum/Alter:</strong> 
                    {parsedData?.birthdate || ""} 
                    {parsedData?.age ? ` / ${parsedData.age}` : ""}
                </li>
                <li>
                    <strong>Größe:</strong> {parsedData?.height || ""}
                </li>
                <li>
                    <strong>Gewicht:</strong> {parsedData?.weight || ""}
                </li>
                <li>
                    <strong>Geschlecht:</strong> {parsedData?.gender || ""}
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
        fallType: PropTypes.string,
    }),
};

export default PersonalData;