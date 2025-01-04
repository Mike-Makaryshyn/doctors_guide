// src/pages/FSPFormularPage/components/PatientQuestions.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./TileContainer.module.scss"; // Універсальні стилі

const PatientQuestions = ({ parsedData }) => {
    return (
        <div className={styles["patient-questions"]}>
            {/* Додайте ваш контент тут */}
            <p>Arzt-Patient-Gespräch</p> 
        </div>
    );
};

PatientQuestions.propTypes = {
    parsedData: PropTypes.shape({
        patientQuestions: PropTypes.string,
    }).isRequired,
};

export default PatientQuestions;