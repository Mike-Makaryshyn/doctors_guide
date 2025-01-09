import React from "react";
import PropTypes from "prop-types";
import styles from "./CaseStatusBadge.module.scss"; // Стилі для бейджа

const CaseStatusBadge = ({ status }) => {
  if (!status) return null; // Не відображати бейдж, якщо статус відсутній

  let className = styles.badge;
  let label = "";

  switch (status) {
    case "deferred":
      className += ` ${styles.deferred}`;
      label = "Відкладено";
      break;
    case "completed":
      className += ` ${styles.completed}`;
      label = "Виконано";
      break;
    default:
      return null; // Не відображати бейдж для невідомих статусів
  }

  return <span className={className}>{label}</span>;
};

CaseStatusBadge.propTypes = {
  status: PropTypes.oneOf(["deferred", "completed"]),
};

export default CaseStatusBadge;