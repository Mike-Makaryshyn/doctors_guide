import React from "react";
import PropTypes from "prop-types";
// Імпортуємо власну іконку
import noxenIcon from "../../../assets/iconFSPtable/noxen.png";
import styles from "./TileContainer.module.scss";

const renderTileIcon = () => {
    return (
        <img
            src={noxenIcon}
            alt="Noxen Icon"
            className={styles["tile-icon"]}
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