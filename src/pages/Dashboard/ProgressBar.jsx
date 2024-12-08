// src/components/ProgressBar/ProgressBar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProgressBar = ({ progress }) => {
  const navigate = useNavigate();

  const handleNavigateToDocuments = () => {
    navigate("/documents"); // Замініть на шлях до вашої сторінки документів
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Прогрес заповнення документів</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            flex: 1,
            height: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
            overflow: "hidden",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#4CAF50",
            }}
          ></div>
        </div>
        <span style={{ marginRight: "10px" }}>{progress}%</span>
        <button
          onClick={handleNavigateToDocuments}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          До документів
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;