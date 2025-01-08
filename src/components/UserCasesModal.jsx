// src/components/UserCasesModal.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./UserCasesModal.module.scss"; // Імпорт стилів через CSS Modules

const UserCasesModal = ({ isOpen, onClose, title, userCases }) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <h2>{title}</h2>
        {userCases.length === 0 ? (
          <p>Немає випадків для відображення.</p>
        ) : (
          <ul className={styles.casesList}>
            {userCases.map((caseItem) => (
              <li key={caseItem.id} className={styles.caseItem}>
                <p>{caseItem.name || "Без Імені"}</p>
                {/* Додайте інші деталі випадку за потреби */}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Закрити модальне вікно"
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
      name: PropTypes.string,
      // Додайте інші необхідні поля
    })
  ).isRequired,
};

export default UserCasesModal;