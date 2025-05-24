import { createContext, useContext, useState } from "react";

const DocumentsProgressContext = createContext();

export const useDocumentsProgress = () => useContext(DocumentsProgressContext);

export const DocumentsProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <DocumentsProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </DocumentsProgressContext.Provider>
  );
};
