// src/App.jsx

import { useState, useEffect } from "react";
import { languages } from "./constants/translation/global";
import "./App.css";
import GermanyMap from "./components/GermanyMap/GermanyMap";
import Header from "./components/Header/Header";
import MainMenu from "./pages/MainMenuPage/MainMenuPage";
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage";
import Routers from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApprobationPage from "./pages/ApprobationPage/ApprobationPage";
import { ModalProvider } from "./pages/FSPFormularPage/components/ModalContext";
import { DataSourceProvider } from "./contexts/DataSourceContext";

// Імпорти для React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GERMAN_MAP_PAGE = 3;
const DEFAULT_LANGUAGE = "de";

function App() {
  const storedPage = localStorage.getItem("currentPage");
  const storedRegion = localStorage.getItem("selectedRegion");
  const initialPage = storedPage ? parseInt(storedPage, 10) : 2;

  // Закоментований код, якщо він вам ще потрібен
  // ... (Ваш закоментований код)

  return (
    <DataSourceProvider>
      <ModalProvider>
        <div className="App">
          {/* Заголовок або інші компоненти */}
          {/* <Header /> */}

          {/* Основний контент */}
          <div className="content">
            <Routers />

            {/* Контейнер для Toast повідомлень */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </ModalProvider>
    </DataSourceProvider>
  );
}

export default App;