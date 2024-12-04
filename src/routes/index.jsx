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
const DocumentsPageEU = React.lazy(() =>
  import("../pages/DocumentsPageEU/DocumentsPageEU")
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
const ApprobationPage = React.lazy(() =>
  import("../pages/ApprobationPage/ApprobationPage")
);
const Trafatette = React.lazy(() =>
  import("../pages/Trafatette/Trafatette")
);
const LinksPage = React.lazy(() =>
  import("../pages/LinksPage/LinksPage")
);
const WhatIsApprobationPage = React.lazy(() =>
  import("../pages/WhatIsApprobationPage/WhatIsApprobationPage")
);
const AllMedicalTerminologyPage = React.lazy(() =>
  import("../pages/AllMedicalTerminologyPage/AllMedicalTerminologyPage")
);
const EditProfilePage = React.lazy(() =>
  import("../pages/EditProfilePage/EditProfilePage")
);
// Importing Auth and Dashboard pages
const AuthPage = React.lazy(() =>
  import("../pages/AuthPage/AuthPage")
);
const Dashboard = React.lazy(() =>
  import("../pages/Dashboard/Dashboard")
);

// Protected Route (checks if user is authenticated)
const ProtectedRoute = React.lazy(() =>
  import("../components/ProtectedRoute/ProtectedRoute")
);

export default function Routers() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path={pathList.documentsEU.path} element={<DocumentsPageEU />} />
        <Route path={pathList.what_is_fsp.path} element={<WhatIsFSPPage />} />
        <Route
          path={pathList.exam_explanations.path}
          element={<ExamEmplanationsPage />}
        />
        <Route path={pathList.trafarette.path} element={<Trafatette />} />
        <Route path={pathList.language_study.path} element={<LanguageStudyPage />} />
        <Route path={pathList.step_by_step.path} element={<ApprobationPage />} />
        <Route path={pathList.links.path} element={<LinksPage />} />
        <Route path={pathList.approbation.path} element={<WhatIsApprobationPage />} />
        <Route
          path="/all-medical-terminology"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllMedicalTerminologyPage />
            </Suspense>
          }
        />
        <Route
  path="/edit-profile"
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute>
        <EditProfilePage />
      </ProtectedRoute>
    </Suspense>
  }
/>

        {/* Auth Page */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </Suspense>
          }
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