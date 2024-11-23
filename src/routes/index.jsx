import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { pathList } from "./path";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { localStorageGet } from "../utils/localStorage";

// Lazy-loaded components
const IntroductionPage = React.lazy(() =>
  import("../pages/IntroductionPage/IntroductionPage")
);

const GermanyLandsPage = React.lazy(() =>
  import("../pages/GermanyLandsPage/GermanyLandsPage")
);

const MainMenuPage = React.lazy(() =>
  import("../pages/MainMenuPage/MainMenuPage")
);

const DocumentsPage = React.lazy(() =>
  import("../pages/DocumentsPage/DocumentsPage")
);

const WhatIsFSPPage = React.lazy(() =>
  import("../pages/WhatIsFSPPage/WhatIsFSPPage")
);

const LanguageStudyPage = React.lazy(() =>
  import("../pages/LanguageStudy/LanguageStudy")
);

const ExamEmplanationsPage = React.lazy(() =>
  import("../pages/ExamEmplanationsPage/ExamEmplanationsPage")
);

const Trafatette = React.lazy(() => import("../pages/Trafatette/Trafatette"));

export default function Routers() {
  return (
    <Suspense>
      <Routes>
        {/* Dynamic rendering of initial page based on localStorage */}
        {localStorageGet("currentPage", "/") === "/lands" && (
          <Route path="/" element={<GermanyLandsPage />} />
        )}
        {localStorageGet("currentPage", "/") === "/main_menu" && (
          <Route path="/" element={<MainMenuPage />} />
        )}
        {localStorageGet("currentPage", "/") === "/" && (
          <Route path="/" element={<IntroductionPage />} />
        )}

        {/* Main */}
        <Route path={pathList.lands.path} element={<GermanyLandsPage />} />
        <Route path={pathList.main_menu.path} element={<MainMenuPage />} />
        <Route path={pathList.documents.path} element={<DocumentsPage />} />
        <Route path={pathList.what_is_fsp.path} element={<WhatIsFSPPage />} />
        <Route
          path={pathList.exam_explanations.path}
          element={<ExamEmplanationsPage />}
        />
        <Route path={pathList.trafarette.path} element={<Trafatette />} />
        <Route
          path={pathList.language_study.path} // Вказуємо шлях до сторінки
          element={<LanguageStudyPage />} // Відображаємо компонент
        />

        {/* NOT FOUND PAGE */}
        <Route
          path="*"
          element={
            <MainLayout>
              <div
                style={{
                  color: "white",
                  padding: "20px",
                  fontWeight: "bold",
                }}
              ></div>
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}
