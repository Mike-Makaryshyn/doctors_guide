// src/pages/FSPFormularPage/components/AdditionalInfoModal.jsx
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Для рендерингу HTML всередині Markdown
import "./AdditionalInfoModal.scss"; // Переконайтеся, що цей файл існує

const AdditionalInfoModal = ({ isOpen, onClose, title, additionalInfo }) => {
    if (!isOpen) return null;

    console.log("Modal Props:", { additionalInfo, title });

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-modal-title"
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Заголовок модального вікна */}
                <h2 id="info-modal-title" className="modal-title">
                    {title}
                </h2>

                {/* Контент модального вікна, підтримка Markdown */}
                <ReactMarkdown
                    className="modal-text"
                    rehypePlugins={[rehypeRaw]} // Дозволяє використання HTML всередині Markdown
                >
                    {additionalInfo}
                </ReactMarkdown>

                {/* Кнопка закриття */}
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Закрити модальне вікно"
                >
                    Закрити
                </button>
            </div>
        </div>
    );
};

AdditionalInfoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Визначає, чи відкрите модальне вікно
    onClose: PropTypes.func.isRequired, // Функція закриття модального вікна
    title: PropTypes.string.isRequired, // Заголовок модального вікна
    additionalInfo: PropTypes.string.isRequired, // Текст або Markdown контент
};

export default AdditionalInfoModal;