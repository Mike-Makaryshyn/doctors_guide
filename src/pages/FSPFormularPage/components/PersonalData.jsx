import React from "react";
import PropTypes from "prop-types";
// Імпорт вашої іконки
import personalInformationIcon from "../../../assets/iconFSPtable/personal-information.png"; 
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={personalInformationIcon}
            alt="Personal Information Icon"
            className={styles["tile-icon"]}
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
                <li>
                    <strong>Hausarzt:</strong> {parsedData?.hausarzt || ""}
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
    }),
};

export default PersonalData;