import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Reise- und Impfstatus"
        />
    );
};

const ReiseImpfstatus = ({ parsedData = {} }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Вакцинація:</strong> {parsedData?.vaccination || ""}
                </li>
                <li>
                    <strong>Подорожі:</strong> {parsedData?.travelHistory || ""}
                </li>
            </ul>
        </div>
    );
};

ReiseImpfstatus.propTypes = {
    parsedData: PropTypes.shape({
        vaccination: PropTypes.string, // Поле для інформації про вакцинацію
        travelHistory: PropTypes.string, // Поле для інформації про подорожі
    }),
};

export default ReiseImpfstatus;