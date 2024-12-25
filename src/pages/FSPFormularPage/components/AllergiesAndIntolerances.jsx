import React from "react";
import PropTypes from "prop-types";

const AllergiesAndIntolerances = ({ parsedData }) => {
    return (
        <div className="allergies-and-intolerances"> {/* Головний контейнер */}
            <ul className="tile-list"> {/* Список з полями */}
                <li>
                    <strong>Spezifische Medikamentenallergien:</strong> {parsedData?.specificMedicationAllergies || ""}
                </li>
                <li>
                    <strong>Symptomatik allergischer Reaktionen:</strong> {parsedData?.allergicReactionSymptoms || ""}
                </li>
                <li>
                    <strong>Allergieauslöser:</strong> {parsedData?.allergyTriggers || ""}
                </li>
                <li>
                    <strong>Spezifische Unverträglichkeiten:</strong> {parsedData?.specificIntolerances || ""}
                </li>
            </ul>
        </div>
    );
};

AllergiesAndIntolerances.propTypes = {
    parsedData: PropTypes.shape({
        specificMedicationAllergies: PropTypes.string,
        allergicReactionSymptoms: PropTypes.string,
        allergyTriggers: PropTypes.string,
        specificIntolerances: PropTypes.string,
    }),
};

export default AllergiesAndIntolerances;