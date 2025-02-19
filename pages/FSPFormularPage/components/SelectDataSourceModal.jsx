// src/pages/FSPFormularPage/components/SelectDataSourceModal.jsx

import React from "react";
import PropTypes from "prop-types";
import FSPFormularPageData from "../../../constants/translation/FSPFormularPage";
import "./SelectDataSourceModal.scss"; // Переконайтеся, що цей файл існує

const SelectDataSourceModal = ({
    isOpen,
    onClose,
    filteredSources = [],
    handleParseData,
    searchTerm = "",
    setSearchTerm,
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 id="modal-title">
                    {FSPFormularPageData.modal.selectDataSource.title || "Виберіть джерело даних"}
                </h2>

                <input
                    type="text"
                    placeholder="Пошук..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                    className="search-input"
                    aria-label="Пошук джерел даних"
                />

                <ul className="data-source-list">
                    {Array.isArray(filteredSources) && filteredSources.length > 0 ? (
                        filteredSources.map((source) => (
                            <li
                                key={source.id}
                                className="data-source-item"
                            >
                                <button
                                    onClick={() => handleParseData(source.id, source.selectedFileId)}
                                    className="source-button"
                                >
                                    {source.name} {source.surname || ""}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="no-data">Джерела даних не знайдено.</li>
                    )}
                </ul>

                <button
                    className="close-button"
                    onClick={onClose}
                >
                    {FSPFormularPageData.modal.selectDataSource.closeButton || "Закрити"}
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
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string,
            selectedFileId: PropTypes.string,
        })
    ),
    handleParseData: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func,
};

export default SelectDataSourceModal;