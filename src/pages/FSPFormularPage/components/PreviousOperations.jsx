import React from "react";
import PropTypes from "prop-types";

const PreviousOperations = ({ parsedData = {} }) => {
    return (
        <div className="previous-operations">
            <ul className="tile-list">
                <li>
                    <strong>Frühere Operationen:</strong> {parsedData?.pastOperations || ""}
                </li>
                <li>
                    <strong>Operationsverlauf und Komplikationen:</strong> {parsedData?.operationCourseComplications || ""}
                </li>
                <li>
                    <strong>Dauer des Krankenhausaufenthalts:</strong> {parsedData?.hospitalStayDuration || ""}
                </li>
            </ul>
        </div>
    );
};

PreviousOperations.propTypes = {
    parsedData: PropTypes.shape({
        pastOperations: PropTypes.string,
        operationCourseComplications: PropTypes.string,
        hospitalStayDuration: PropTypes.string,
    }),
};

export default PreviousOperations;