import React from "react";
import PropTypes from "prop-types";

const Vorerkrankungen = ({ parsedData = {} }) => {
    return (
        <div className="vorerkrankungen">
            <ul className="tile-list">
                <li>
                    <strong>Einleitung zur Krankengeschichte:</strong> {parsedData?.medicalHistoryIntroduction || ""}
                </li>
                <li>
                    <strong>Chronische Erkrankungen:</strong> {parsedData?.chronicDiseases || ""}
                </li>
                <li>
                    <strong>Weitere relevante Erkrankungen:</strong> {parsedData?.otherRelevantDiseases || ""}
                </li>
            </ul>
        </div>
    );
};

Vorerkrankungen.propTypes = {
    parsedData: PropTypes.shape({
        medicalHistoryIntroduction: PropTypes.string,
        chronicDiseases: PropTypes.string,
        otherRelevantDiseases: PropTypes.string,
    }),
};

export default Vorerkrankungen;