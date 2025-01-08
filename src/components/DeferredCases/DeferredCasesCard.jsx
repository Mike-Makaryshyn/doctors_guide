// src/components/DeferredCases/DeferredCasesCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { pathList } from "../../routes/path"; // Імпорт pathList
import styles from "./DeferredCasesCard.module.scss"; // Імпорт стилів через CSS Modules
import PropTypes from "prop-types";

const DeferredCasesCard = ({ caseId, caseData, regionId }) => {
  const { sourceType } = caseData; // Отримання sourceType з caseData

  return (
    <div className={styles.card}>
      <h4 className={styles.caseTitle}>
        {caseData ? `${caseData.name} ${caseData.surname || ""}` : `Випадок ID: ${caseId}`}
      </h4>
      <p className={styles.caseRegion}>Регіон: {regionId}</p>
      <Link
        to={`${pathList.informationSources.path}/${sourceType}/${caseId}`} // Включаємо sourceType
        className={styles.viewButton}
      >
        Перейти до Випадку
      </Link>
    </div>
  );
};

// Додавання типізації пропсів (опційно)
DeferredCasesCard.propTypes = {
  caseId: PropTypes.string.isRequired,
  caseData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    surname: PropTypes.string,
    sourceType: PropTypes.string.isRequired,
    // Додайте інші необхідні поля
  }).isRequired,
  regionId: PropTypes.string.isRequired,
};

export default DeferredCasesCard;