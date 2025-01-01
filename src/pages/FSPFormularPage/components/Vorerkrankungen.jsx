import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
  return (
    <FaInfoCircle className={styles["tile-icon"]} title="Vorerkrankungen" />
  );
};

const Vorerkrankungen = ({ parsedData = {} }) => {
  return (
    <div className={styles["tile-container"]}>
      <div className={styles["tile-header"]}>
        <div className={styles["tile-icon-container"]}>{renderTileIcon()}</div>
      </div>
      <ul className={styles["tile-list"]}>
        <li>
          <strong>Інфекційні хвороби:</strong>{" "}
          {parsedData?.infectiousDiseases || ""}
        </li>
        <li>
          <strong>Einleitung zur Krankengeschichte:</strong>{" "}
          {parsedData?.medicalHistoryIntroduction || ""}
        </li>
        <li>
          <strong>Chronische Erkrankungen:</strong>{" "}
          {parsedData?.chronicDiseases || ""}
        </li>
        <li>
          <strong>Weitere relevante Erkrankungen:</strong>{" "}
          {parsedData?.otherRelevantDiseases || ""}
        </li>
      </ul>
    </div>
  );
};

Vorerkrankungen.propTypes = {
  parsedData: PropTypes.shape({
    medicalHistoryIntroduction: PropTypes.string,
    chronicDiseases: PropTypes.string,
    otherRelevantDiseases: PropTypes.string,
    infectiousDiseases: PropTypes.string, // Додано нове поле
  }),
};

export default Vorerkrankungen;
