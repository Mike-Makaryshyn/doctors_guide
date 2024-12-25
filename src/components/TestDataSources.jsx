// src/components/TestDataSources.jsx

import React, { useContext } from "react";
import { DataSourceContext } from "../contexts/DataSourceContext";

const TestDataSources = () => {
  const { dataSources } = useContext(DataSourceContext);

  return (
    <div>
      <h2>Джерела даних:</h2>
      <pre>{JSON.stringify(dataSources, null, 2)}</pre>
    </div>
  );
};

export default TestDataSources;