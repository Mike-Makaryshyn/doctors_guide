import React from "react";
import PropTypes from "prop-types";

const AktuelleAnamnese = ({ parsedData }) => {
    return (
        <div className="current-anamnesis"> {/* Головний контейнер */}
            <ul className="tile-list"> {/* Список з полями */}
                <li>
                    <strong>Besuchsgrund:</strong> {parsedData?.visitReason || ""}
                </li>
                <li>
                    <strong>Schmerzlokalisierung:</strong> {parsedData?.painLocalization || ""}
                </li>
                <li>
                    <strong>Zeitverlauf:</strong> {parsedData?.timeCourse || ""}
                </li>
                <li>
                    <strong>Symptombeschreibung:</strong> {parsedData?.symptomDescription || ""}
                </li>
                <li>
                    <strong>Schmerzausstrahlung:</strong> {parsedData?.painRadiation || ""}
                </li>
                <li>
                    <strong>Schmerzverlauf:</strong> {parsedData?.painProgression || ""}
                </li>
                <li>
                    <strong>Auslöser:</strong> {parsedData?.triggers || ""}
                </li>
                <li>
                    <strong>Schmerzintensität:</strong> {parsedData?.painIntensity || ""}
                </li>
                <li>
                    <strong>Vorherige medizinische Betreuung:</strong> {parsedData?.previousMedicalCare || ""}
                </li>
            </ul>
        </div>
    );
};

AktuelleAnamnese.propTypes = {
    parsedData: PropTypes.shape({
        visitReason: PropTypes.string,
        painLocalization: PropTypes.string,
        timeCourse: PropTypes.string,
        symptomDescription: PropTypes.string,
        painRadiation: PropTypes.string,
        painProgression: PropTypes.string,
        triggers: PropTypes.string,
        painIntensity: PropTypes.string,
        previousMedicalCare: PropTypes.string,
    }),
};

export default AktuelleAnamnese;