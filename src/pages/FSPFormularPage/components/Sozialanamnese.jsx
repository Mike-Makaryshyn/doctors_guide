import React from "react";
import PropTypes from "prop-types";

const Sozialanamnese = ({ parsedData = {} }) => {
    return (
        <div className="social-history">
            <ul className="tile-list">
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
                    <strong>Psychosomatische Anamnese:</strong> {parsedData?.psychosomaticHistory || ""}
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
    }),
};

export default Sozialanamnese;