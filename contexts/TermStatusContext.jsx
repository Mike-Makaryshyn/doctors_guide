// src/context/TermStatusContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const TermStatusContext = createContext();

export const TermStatusProvider = ({ children }) => {
  const [termStatuses, setTermStatuses] = useState({});

  // Завантаження даних з localStorage
  useEffect(() => {
    const stored = localStorage.getItem("termStatuses");
    if (stored) {
      setTermStatuses(JSON.parse(stored));
    }
  }, []);

  // Збереження у localStorage
  useEffect(() => {
    localStorage.setItem("termStatuses", JSON.stringify(termStatuses));
  }, [termStatuses]);

  const setStatus = (termId, status) => {
    setTermStatuses((prev) => ({ ...prev, [termId]: status }));
  };

  const toggleStatus = (termId, newStatus) => {
    setTermStatuses((prev) => {
      const current = prev[termId] || "unlearned";
      return { ...prev, [termId]: current === newStatus ? "unlearned" : newStatus };
    });
  };

  return (
    <TermStatusContext.Provider value={{ termStatuses, setStatus, toggleStatus }}>
      {children}
    </TermStatusContext.Provider>
  );
};

export const useTermStatus = () => useContext(TermStatusContext);