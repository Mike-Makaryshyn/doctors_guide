import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import "./TileContainer.module.scss";
const renderTileIcon = (parsedData) => {
    return (
        <FaInfoCircle
            className="tile-icon general-data"
            title="Загальні дані"
        />
    );
};

const PersonalData = ({ parsedData }) => {
    return (
        <div className="personal-data">
            <div className="tile-header">
                <div className="tile-icon-container">
                    {renderTileIcon(parsedData)}
                </div>
            </div>
            <ul className="tile-list">
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