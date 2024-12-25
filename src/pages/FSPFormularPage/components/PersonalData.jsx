import React from "react";
import PropTypes from "prop-types";

const PersonalData = ({ parsedData }) => {
    return (
        <div className="personal-data">
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
        name: PropTypes.string, // Ім'я
        surname: PropTypes.string, // Прізвище
        birthdate: PropTypes.string, // Дата народження
        age: PropTypes.string, // Вік
        height: PropTypes.string, // Зріст
        weight: PropTypes.string, // Вага
        gender: PropTypes.string, // Стать
    }),
};

export default PersonalData;