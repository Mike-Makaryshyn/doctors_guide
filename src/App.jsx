// src/App.jsx

import React from "react";
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
import { AuthProvider } from "./contexts/AuthContext"; // Імпорт AuthProvider
import { CasesProvider } from "./contexts/CasesContext";
// Імпорти для React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Імпорти для React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Створення екземпляру QueryClient
const queryClient = new QueryClient();

const GERMAN_MAP_PAGE = 3;
const DEFAULT_LANGUAGE = "de";

function App() {
  const storedPage = localStorage.getItem("currentPage");
  const storedRegion = localStorage.getItem("selectedRegion");
  const initialPage = storedPage ? parseInt(storedPage, 10) : 2;

  return (
    // Обгортаємо весь додаток у QueryClientProvider
    <QueryClientProvider client={queryClient}>

      {/* Обгортаємо додаток у AuthProvider */}
      <AuthProvider>
        {/* Обгортаємо додаток у DataSourceProvider */}
        <DataSourceProvider>
        <CasesProvider>
          {/* Обгортаємо додаток у ModalProvider */}
          <ModalProvider>
            
            <div className="App">
              {/* Ви можете розмістити Header тут, якщо він потрібен */}
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
          </CasesProvider>
        </DataSourceProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;