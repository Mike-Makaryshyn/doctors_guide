import React from "react";
import PropTypes from "prop-types";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";

const renderTileIcon = (parsedData) => {
    if (parsedData?.fallType && parsedData.fallType === "cardiology") {
        return <FaCheckCircle className="tile-icon specific-data" title="Специфічні дані доступні" />;
    }
    return <FaInfoCircle className="tile-icon general-data" title="Загальні дані" />;
};

const Noxen = ({ parsedData }) => {
    return (
        <div className="noxen">
            <div className="tile-header">
                {/* Видаляємо зайвий заголовок */}
                {renderTileIcon(parsedData)}
            </div>
            <ul className="tile-list">
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
        fallType: PropTypes.string,
    }),
};

export default Noxen;