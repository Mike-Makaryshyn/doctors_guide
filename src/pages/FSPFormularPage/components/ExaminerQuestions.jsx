import React from "react";
import PropTypes from "prop-types";
import styles from "./TileContainer.module.scss"; // Універсальні стилі

const ExaminerQuestions = ({ onQuestionClick }) => {
    const handleTileClick = () => {
        onQuestionClick(); // Викликаємо функцію для обробки натискання
    };

    return (
        <div
            className={styles["examiner-questions"]}
            onClick={handleTileClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleTileClick();
                }
            }}
            style={{ backgroundColor: "blue", width: "90%" }} // Додаємо ширину та фон
        >
            <p>Запитання екзаменаторів</p>
        </div>
    );
};

ExaminerQuestions.propTypes = {
    onQuestionClick: PropTypes.func.isRequired, // Обов'язкова функція для обробки кліку
};

export default ExaminerQuestions;