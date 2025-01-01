import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Familienanamnese"
        />
    );
};

const Familienanamnese = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Eltern:</strong> {parsedData?.parents || ""}
                </li>
                <li>
                    <strong>Geschwister:</strong> {parsedData?.siblings || ""}
                </li>
            </ul>
        </div>
    );
};

Familienanamnese.propTypes = {
    parsedData: PropTypes.shape({
        parents: PropTypes.string,
        siblings: PropTypes.string,
    }),
};

export default Familienanamnese;