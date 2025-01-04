import React, { useEffect, useState } from "react";
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

const Noxen = ({ parsedData = {} }) => {
    const [isDataParsed, setIsDataParsed] = useState(false);

    const getFieldValue = (value) => {
        if (!isDataParsed) {
            return ""; // Порожнє значення до обробки даних
        }
        if (value === null || value === undefined || value === "") {
            return <span className={styles["blurred-text"]}>Keine Angabe</span>; // Заблюрений текст для пустих полів
        }
        return value;
    };

    useEffect(() => {
        if (parsedData && Object.keys(parsedData).length > 0) {
            setIsDataParsed(true);
        }
    }, [parsedData]);

    return (
        <div className={styles["tile-container"]}>
            <div className={styles["tile-header"]}>
                <div className={styles["tile-icon-container"]}>
                    {renderTileIcon()}
                </div>
            </div>
            <ul className={styles["tile-list"]}>
                <li>
                    <strong>Rauchverhalten:</strong> {getFieldValue(parsedData?.rauchverhalten)}
                </li>
                <li>
                    <strong>Alkoholkonsum:</strong> {getFieldValue(parsedData?.alkoholkonsum)}
                </li>
                <li>
                    <strong>Drogengebrauch:</strong> {getFieldValue(parsedData?.drogengebrauch)}
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