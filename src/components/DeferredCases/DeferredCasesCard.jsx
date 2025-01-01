// src/components/DeferredCases/DeferredCasesCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { pathList } from "../../routes/path"; // Імпорт pathList
import styles from "./DeferredCasesCard.module.scss"; // Імпорт стилів через CSS Modules

const DeferredCasesCard = ({ caseId, caseData, regionId }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.caseTitle}>
        {caseData ? `${caseData.name} ${caseData.surname}` : `Випадок ID: ${caseId}`}
      </h4>
      <p className={styles.caseRegion}>Регіон: {regionId}</p>
      <Link
        to={`${pathList.informationSources.path}/${caseId}`}
        className={styles.viewButton}
      >
        Перейти до Випадку
      </Link>
    </div>
  );
};

export default DeferredCasesCard;