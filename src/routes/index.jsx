// src/routes/index.jsx

import React, { Suspense } from "react";
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
const CustomGermanyMap = React.lazy(() =>
  import("../components/CustomGermanyMap/CustomGermanyMap")
);
const LanguageStudyPage = React.lazy(() =>
  import("../pages/LanguageStudy/LanguageStudy")
);
const ExamEmplanationsPage = React.lazy(() =>
  import("../pages/ExamEmplanationsPage/ExamEmplanationsPage")
);
const ExamExplanationsPage = React.lazy(() =>
  import("../pages/ExamEmplanationsPage/ExamEmplanationsPage")
);
const ApprobationPage = React.lazy(() =>
  import("../pages/ApprobationPage/ApprobationPage")
);
const Trafatette = React.lazy(() => import("../pages/Trafatette/Trafatette"));
const LinksPage = React.lazy(() => import("../pages/LinksPage/LinksPage"));
const WhatIsApprobationPage = React.lazy(() =>
  import("../pages/WhatIsApprobationPage/WhatIsApprobationPage")
);
const AllMedicalTerminologyPage = React.lazy(() =>
  import("../pages/AllMedicalTerminologyPage/AllMedicalTerminologyPage")
);
const EditProfilePage = React.lazy(() =>
  import("../pages/EditProfilePage/EditProfilePage")
);
const ResumePage = React.lazy(() => import("../pages/ResumePage/ResumePage"));
const FSPFormularPage = React.lazy(() =>
  import("../pages/FSPFormularPage/FSPFormularPage")
);

// Новий імпорт для CasesListPage
const CasesListPage = React.lazy(() =>
  import("../pages/CasesListPage/CasesListPage")
);
// Імпорт сторінки редагування
const EditCasePage = React.lazy(() =>
  import("../pages/EditCasePage/EditCasePage")
);

// Auth and Dashboard
const AuthPage = React.lazy(() => import("../pages/AuthPage/AuthPage"));
const RegistrationPage = React.lazy(() =>
  import("../pages/AuthPage/RegistrationPage")
);
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));

// Protected Route
const ProtectedRoute = React.lazy(() =>
  import("../components/ProtectedRoute/ProtectedRoute")
);
const DataCollectionPage = React.lazy(() =>
  import("../pages/DataCollectionPage/DataCollectionPage")
);

export default function Routers() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Динамічне рендеринг початкової сторінки на основі localStorage */}
        {localStorageGet("currentPage", "/") === "/lands" && (
          <Route path="/" element={<GermanyLandsPage />} />
        )}
        {localStorageGet("currentPage", "/") === "/main_menu" && (
          <Route path="/" element={<MainMenuPage />} />
        )}
        {localStorageGet("currentPage", "/") === "/" && (
          <Route path="/" element={<IntroductionPage />} />
        )}

        {/* Основні сторінки */}
        <Route path={pathList.exam_explanations.path} element={<ExamExplanationsPage />} />
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
          path={pathList.language_study.path}
          element={<LanguageStudyPage />}
        />
        <Route
          path={pathList.step_by_step.path}
          element={<ApprobationPage />}
        />
        <Route path={pathList.links.path} element={<LinksPage />} />
        <Route
          path={pathList.approbation.path}
          element={<WhatIsApprobationPage />}
        />

        {/* Сторінка зі списком кейсів (MY CASES входить сюди) */}
        <Route path="/cases" element={<CasesListPage />} />

        {/* Сторінка редагування кейсу */}
        <Route path="/edit-case" element={<EditCasePage />} />

        {/* Динамічний маршрут для FSPFormularPage з параметром caseId */}
        <Route
          path="/information-sources/:sourceType/:caseId"
          element={<FSPFormularPage />}
        />
        <Route path="/custom-map" element={<CustomGermanyMap />} />
        {/* Статичний маршрут для FSPFormularPage */}
        <Route
          path={pathList.informationSources.path}
          element={<FSPFormularPage />}
        />

        {/* Захищені маршрути */}
        <Route path="/data-collection" element={<DataCollectionPage />} />
        <Route
          path="/all-medical-terminology"
          element={<AllMedicalTerminologyPage />}
        />
        <Route path="/resume" element={<ResumePage />} />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Сторінки авторизації */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/registration" element={<RegistrationPage />} />

        {/* Сторінка не знайдена */}
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
              >
                Сторінка не знайдена
              </div>
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}
