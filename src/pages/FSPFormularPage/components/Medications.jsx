import React from "react";
import PropTypes from "prop-types";

const Medications = ({ parsedData }) => {
    return (
        <div className="medications">
            <ul className="tile-list">
              
                <li>
                    <strong>Allgemeine Medikamenteneinnahme:</strong> {parsedData?.allgemeineMedikamenteneinnahme || ""}
                </li>
                <li>
                    <strong>Detaillierte Medikamenteninformationen:</strong> {parsedData?.detaillierteMedikamenteninformationen || ""}
                </li>
            </ul>
        </div>
    );
};

Medications.propTypes = {
    parsedData: PropTypes.shape({
        gezielteMedikamentenfragen: PropTypes.string,
        allgemeineMedikamenteneinnahme: PropTypes.string,
        detaillierteMedikamenteninformationen: PropTypes.string,
    }),
};

export default Medications;