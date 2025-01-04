// src/pages/FSPFormularPage/components/PatientQuestions.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./TileContainer.module.scss"; // Універсальні стилі

const PatientQuestions = ({ parsedData }) => {
    return (
        <div className={styles["patientQuestions"]}>
            {/* Пустий контейнер або додайте візуальні індикатори, якщо необхідно */}
            <p>Запитання пацієнта</p> 
        </div>
    );
};

PatientQuestions.propTypes = {
    parsedData: PropTypes.shape({
        patientQuestions: PropTypes.string,
    }).isRequired,
};

export default PatientQuestions;