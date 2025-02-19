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
const FortuneWheelGame = React.lazy(() =>
  import("../pages/FortuneWheelGame/FortuneWheelGame")
);
const ExamExplanationsPage = React.lazy(() =>
  import("../pages/ExamEmplanationsPage/ExamEmplanationsPage")
);
const FlashcardGame = React.lazy(() =>
  import("../pages/FlashcardGame/FlashcardGame")
);
const ApprobationPage = React.lazy(() =>
  import("../pages/ApprobationPage/ApprobationPage")
);
const Trafatette = React.lazy(() => import("../pages/Trafatette/Trafatette"));
const LinksPage = React.lazy(() => import("../pages/LinksPage/LinksPage"));
const WhatIsApprobationPage = React.lazy(() =>
  import("../pages/WhatIsApprobationPage/WhatIsApprobationPage")
);
const GleichwertigkeitPage = React.lazy(() =>
  import("../pages/GleichwertigkeitPage/GleichwertigkeitPage")
);
const VergleichsgutachtenPage = React.lazy(() =>
  import("../pages/VergleichsgutachtenPage/VergleichsgutachtenPage")
);
const WhatIsBerufserlaubnisPage = React.lazy(() =>
  import("../pages/WhatIsBerufserlaubnisPage/WhatIsBerufserlaubnisPage")
);
const KenntnisPruefungPage = React.lazy(() =>
  import("../pages/KenntnisPruefungPage/KenntnisPruefungPage")
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
const NotarListPage = React.lazy(
  () => import("../pages/NotarListPage/NotarListPage") // Імпорт сторінки
);
// Новий імпорт для CasesListPage
const CasesListPage = React.lazy(() =>
  import("../pages/CasesListPage/CasesListPage")
);
// Імпорт сторінки редагування
const EditCasePage = React.lazy(() =>
  import("../pages/EditCasePage/EditCasePage")
);
const SimpleChoiceGame = React.lazy(() =>
  import("../pages/SimpleChoiceGame/SimpleChoiceGame")
);
const TerminologyLearningPage = React.lazy(() =>
  import("../pages/TerminologyLearningPage/TerminologyLearningPage")
);
const TranslatorListPage = React.lazy(() =>
  import("../pages/TranslatorListPage/TranslatorListPage")
);
const AllMedicalAbbreviationsPage = React.lazy(() =>
  import("../pages/AllMedicalAbbreviationsPage/AllMedicalAbbreviationsPage")
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

const FillInBlankGame = React.lazy(() =>
  import("../pages/FillInBlankGame/FillInBlankGame.jsx")
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
        <Route
          path={pathList.exam_explanations.path}
          element={<ExamExplanationsPage />}
        />
        <Route path="/fill-in-blank-game" element={<FillInBlankGame />} />
        <Route path={pathList.lands.path} element={<GermanyLandsPage />} />
        <Route path={pathList.main_menu.path} element={<MainMenuPage />} />
        <Route path={pathList.documents.path} element={<DocumentsPage />} />
        <Route path={pathList.what_is_fsp.path} element={<WhatIsFSPPage />} />
        <Route
          path={pathList.gleichwertigkeit.path}
          element={<GleichwertigkeitPage />}
        />
        <Route path={pathList.notar_list.path} element={<NotarListPage />} />
        <Route
          path={pathList.kenntnispruefung.path}
          element={<KenntnisPruefungPage />}
        />
        <Route path="/flashcard-game" element={<FlashcardGame />} />
        <Route
          path={pathList.exam_explanations.path}
          element={<ExamEmplanationsPage />}
        />
        <Route
          path={pathList.abbreviations.path}
          element={<AllMedicalAbbreviationsPage />}
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
        <Route
          path={pathList.translation.path}
          element={<TranslatorListPage />}
        />
        <Route
          path={pathList.simple_choice.path}
          element={<SimpleChoiceGame />}
        />
        {/* Сторінка зі списком кейсів (MY CASES входить сюди) */}
        <Route path="/cases" element={<CasesListPage />} />

        {/* Сторінка редагування кейсу */}
        <Route path="/edit-case" element={<EditCasePage />} />
        <Route
          path={pathList.fortune_wheel.path}
          element={<FortuneWheelGame />}
        />

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
        <Route
          path={pathList.terminology_learning.path}
          element={<TerminologyLearningPage />}
        />
        <Route
          path={pathList.berufserlaubnis.path}
          element={<WhatIsBerufserlaubnisPage />}
        />
        <Route
          path={pathList.vergleichsgutachten.path}
          element={<VergleichsgutachtenPage />}
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
