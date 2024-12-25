// src/components/DataItemDetail.jsx

import React from "react";
import PropTypes from "prop-types";
import PersonalData from "./PersonalData";
import Noxen from "./Noxen";
// Імпортуйте інші компоненти за потребою

const DataItemDetail = ({ data }) => {
    return (
        <div>
            <h3>Деталі Пацієнта</h3>
            <PersonalData data={data} />
            <Noxen data={data} />
            {/* Додайте інші компоненти за потребою */}
        </div>
    );
};

DataItemDetail.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DataItemDetail;