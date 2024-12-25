import React from "react";
import PropTypes from "prop-types";

const VegetativeAnamnese = ({ parsedData = {} }) => {
    return (
        <div className="vegetative-anamnesis">
            <ul className="tile-list">
                <li>
                    <strong>Appetit:</strong> {parsedData?.appetite || ""}
                </li>
                <li>
                    <strong>Gewicht:</strong> {parsedData?.weightverlust || ""}
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
                    <strong>Schwindel:</strong> {parsedData?.vertigo || ""}
                </li>
                <li>
                    <strong>Bewusstsein:</strong> {parsedData?.consciousness || ""}
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
        appetite: PropTypes.string,
        weight: PropTypes.string,
        nausea: PropTypes.string,
        vomiting: PropTypes.string,
        bowelMovement: PropTypes.string,
        urination: PropTypes.string,
        vertigo: PropTypes.string,
        consciousness: PropTypes.string,
        sleep: PropTypes.string,
        sexualHistory: PropTypes.string,
        others: PropTypes.string,
        gynecologicalHistory: PropTypes.string,
    }),
};

export default VegetativeAnamnese;