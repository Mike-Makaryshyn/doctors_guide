import React from "react";
import PropTypes from "prop-types";

const DiagnostischeEmpfehlungen = ({ parsedData }) => {
    return (
        <div className="diagnostic-recommendations"> {/* Головний контейнер */}
            <ul className="tile-list"> {/* Список з полями */}
                <li>
                    <strong>Körperliche Untersuchung:</strong> {parsedData?.physicalExamination || "Keine Informationen"}
                </li>
                <li>
                    <strong>Laboruntersuchung:</strong> {parsedData?.laboratoryTests || "Keine Informationen"}
                </li>
                <li>
                    <strong>Apparative Untersuchung:</strong> {parsedData?.instrumentalExamination || "Keine Informationen"}
                </li>
            </ul>
        </div>
    );
};

DiagnostischeEmpfehlungen.propTypes = {
    parsedData: PropTypes.shape({
        physicalExamination: PropTypes.string,
        laboratoryTests: PropTypes.string,
        instrumentalExamination: PropTypes.string,
    }),
};

export default DiagnostischeEmpfehlungen;