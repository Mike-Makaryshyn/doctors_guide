// src/pages/FSPFormularPage/components/AdditionalInfoModal.jsx

import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Для рендерингу HTML всередині Markdown
import remarkGfm from "remark-gfm"; // Для підтримки розширеного Markdown
import "./AdditionalInfoModal.scss"; // Переконайтеся, що цей файл існує та містить необхідні стилі

const AdditionalInfoModal = ({ isOpen, onClose, title, additionalInfo }) => {
    if (!isOpen) return null;

    console.log("Modal Props:", { additionalInfo, title });

    // Перевірка, що additionalInfo.text є рядком
    const markdownText = typeof additionalInfo.text === 'string' ? additionalInfo.text : "Інформація недоступна.";
    console.log("Markdown Text:", markdownText);

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

                {/* Контент модального вікна з підтримкою Markdown */}
                <ReactMarkdown
                    className="modal-text"
                    remarkPlugins={[remarkGfm]} // Підтримка таблиць, чекбоксів тощо
                    rehypePlugins={[rehypeRaw]} // Дозволяє використання HTML всередині Markdown
                >
                    {markdownText}
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
    additionalInfo: PropTypes.shape({
        text: PropTypes.string.isRequired, // Текст з Markdown
        type: PropTypes.string.isRequired, // Тип додаткової інформації
    }).isRequired,
};

export default AdditionalInfoModal;