import React from "react";
import PropTypes from "prop-types";

const Familienanamnese = ({ parsedData }) => {
    return (
        <div className="family-medical-history"> {/* Головний контейнер */}
            <ul className="tile-list"> {/* Список з полями */}
                <li>
                    <strong>Eltern:</strong> {parsedData?.parents || ""}
                </li>
                <li>
                    <strong>Geschwister:</strong> {parsedData?.siblings || ""}
                </li>
            </ul>
        </div>
    );
};

Familienanamnese.propTypes = {
    parsedData: PropTypes.shape({
        parents: PropTypes.string,
        siblings: PropTypes.string,
    }),
};

export default Familienanamnese;