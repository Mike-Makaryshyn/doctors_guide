// src/pages/FSPFormularPage/components/UserCasesModal.jsx

import React from "react";
import PropTypes from "prop-types";
import "./UserCasesModal.scss"; // Переконайтеся, що цей файл існує

const UserCasesModal = ({ isOpen, onClose, title, userCases }) => {
    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-cases-modal-title"
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 id="user-cases-modal-title">{title}</h2>
                <ul className="user-cases-list">
                    {userCases.map(caseItem => (
                        <li key={caseItem.id}>
                            <strong>Земля:</strong> {caseItem.land}
                            <p>{caseItem.description}</p>
                        </li>
                    ))}
                </ul>
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

UserCasesModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    userCases: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            land: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default UserCasesModal;