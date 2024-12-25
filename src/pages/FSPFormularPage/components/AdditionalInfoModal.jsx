// src/pages/FSPFormularPage/components/AdditionalInfoModal.jsx
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import "./AdditionalInfoModal.scss"; // Переконайтеся, що цей файл існує

const AdditionalInfoModal = ({ isOpen, onClose, title, additionalInfo }) => {
    if (!isOpen) return null;

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
                <h2 id="info-modal-title">{title}</h2>
                <ReactMarkdown className="modal-text">{additionalInfo}</ReactMarkdown>
                <button
                    className="close-button"
                    onClick={onClose}
                >
                    Закрити
                </button>
            </div>
        </div>
    );
};

AdditionalInfoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    additionalInfo: PropTypes.string.isRequired,
};

export default AdditionalInfoModal;