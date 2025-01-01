import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <FaInfoCircle
            className={styles["tile-icon"]}
            title="Noxen"
        />
    );
};

const Noxen = ({ parsedData }) => {
    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Rauchverhalten:</strong> {parsedData?.rauchverhalten || ""}
                </li>
                <li>
                    <strong>Alkoholkonsum:</strong> {parsedData?.alkoholkonsum || ""}
                </li>
                <li>
                    <strong>Drogengebrauch:</strong> {parsedData?.drogengebrauch || ""}
                </li>
            </ul>
        </div>
    );
};

Noxen.propTypes = {
    parsedData: PropTypes.shape({
        rauchverhalten: PropTypes.string,
        alkoholkonsum: PropTypes.string,
        drogengebrauch: PropTypes.string,
    }),
};

export default Noxen;