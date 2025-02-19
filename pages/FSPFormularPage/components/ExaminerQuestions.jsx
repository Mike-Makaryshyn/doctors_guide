import React from "react";
import PropTypes from "prop-types";
import styles from "./TileContainer.module.scss"; // Всі стилі через CSS модулі

const ExaminerQuestions = ({ onQuestionClick }) => {
    const handleTileClick = () => {
        onQuestionClick(); // Викликаємо функцію для обробки натискання
    };

    return (
        <div
            className={styles["examiner-questions"]} // Використовуємо клас зі стилями
            onClick={handleTileClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleTileClick();
                }
            }}
        >
            <p className={styles["examiner-text"]}>Arzt-Arzt-Gespräch</p> {/* Текст по центру */}
        </div>
    );
};

ExaminerQuestions.propTypes = {
    onQuestionClick: PropTypes.func.isRequired, // Обов'язкова функція для обробки кліку
};

export default ExaminerQuestions;