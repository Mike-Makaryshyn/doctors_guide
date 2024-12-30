// src/components/DeferredCases/DeferredCasesCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./DeferredCasesCard.scss";

const DeferredCasesCard = ({ caseId, caseData }) => {
  return (
    <div className="deferred-case-card">
      <Link to={`/fsp-formular/${caseId}`}>
        <h4>{caseData ? caseData.name : `Випадок ${caseId}`}</h4>
      </Link>
    </div>
  );
};

export default DeferredCasesCard;