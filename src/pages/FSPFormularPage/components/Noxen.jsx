import React from "react";
import PropTypes from "prop-types";

const Noxen = ({ parsedData }) => {
    return (
        <div className="noxen">
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
    }),
};

export default Noxen;