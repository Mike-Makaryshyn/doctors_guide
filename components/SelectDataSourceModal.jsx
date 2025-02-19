// src/components/SelectDataSourceModal.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectDataSourceModal.module.scss"; // Імпорт стилів через CSS Modules

const SelectDataSourceModal = ({
  isOpen,
  onClose,
  filteredSources,
  handleParseData,
  searchTerm,
  setSearchTerm,
}) => {
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
        <h2>Виберіть Джерело Даних</h2>
        <input
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
          aria-label="Пошук джерела даних"
        />
        <ul className={styles.sourcesList}>
          {filteredSources.map((source) => (
            <li key={source.key} className={styles.sourceItem}>
              <button
                onClick={() => {
                  handleParseData(source.key, null);
                  onClose();
                }}
                className={styles.sourceButton}
              >
                {source.name}
              </button>
            </li>
          ))}
        </ul>
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

SelectDataSourceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  filteredSources: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      files: PropTypes.array.isRequired,
    })
  ).isRequired,
  handleParseData: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SelectDataSourceModal;