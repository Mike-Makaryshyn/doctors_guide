import React from "react";
import PropTypes from "prop-types";

const DifferentialDiagnosis = ({ parsedData }) => {
    return (
        <div className="differential-diagnosis">
            <ul className="tile-list">
                <li>
                    <strong>differentiale Diagnosen:</strong> {parsedData?.possibleDiagnoses || ""}
                </li>
                <li>
                    <strong>Abgrenzung:</strong> {parsedData?.differentiation || ""}
                </li>
            </ul>
        </div>
    );
};

DifferentialDiagnosis.propTypes = {
    parsedData: PropTypes.shape({
        possibleDiagnoses: PropTypes.string,
        differentiation: PropTypes.string,
        necessaryTests: PropTypes.string,
        probability: PropTypes.string,
    }),
};

export default DifferentialDiagnosis;