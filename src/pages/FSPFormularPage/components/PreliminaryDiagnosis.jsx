import React from "react";
import PropTypes from "prop-types";

const PreliminaryDiagnosis = ({ parsedData }) => {
    return (
        <div className="preliminary-diagnosis"> {/* Головний контейнер */}
            <ul className="tile-list"> {/* Список з полями */}
                <li>
                    <strong>Vermutete Diagnose:</strong> {parsedData?.suspectedDiagnosis || ""}
                </li>
                <li>
                    <strong>Begründung:</strong> {parsedData?.justification || ""}
                </li>
                
            </ul>
        </div>
    );
};

PreliminaryDiagnosis.propTypes = {
    parsedData: PropTypes.shape({
        suspectedDiagnosis: PropTypes.string,
        justification: PropTypes.string,
        differentialDiagnoses: PropTypes.string,
        furtherDiagnostics: PropTypes.string,
        urgency: PropTypes.string,
    }),
};

export default PreliminaryDiagnosis;