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
  import("../games/TerminologyGame/pages/FortuneWheelGame/FortuneWheelGame.jsx")
);
const ExamExplanationsPage = React.lazy(() =>
  import("../pages/ExamEmplanationsPage/ExamEmplanationsPage")
);
const FlashcardGame = React.lazy(() =>
  import("../games/TerminologyGame/pages/FlashcardGame/FlashcardGame.jsx")
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
  import(
    "../games/TerminologyGame/pages/AllMedicalTerminologyPage/AllMedicalTerminologyPage.jsx"
  )
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
  import("../games/TerminologyGame/pages/SimpleChoiceGame/SimpleChoiceGame.jsx")
);
const TerminologyLearningPage = React.lazy(() =>
  import("../pages/TerminologyLearningPage/TerminologyLearningPage")
);
const TranslatorListPage = React.lazy(() =>
  import("../pages/TranslatorListPage/TranslatorListPage")
);
const AllMedicalAbbreviationsPage = React.lazy(() =>
  import("../games/AbbreviationsGame/pages/AllMedicalAbbreviationsPage/AllMedicalAbbreviationsPage.jsx")
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
const ElectiveLanguageGame = React.lazy(() =>
  import(
    "../games/TerminologyGame/pages/ElectiveLanguageGame/ElectiveLanguageGame.jsx"
  )
);
const RegionalChatsPage = React.lazy(() =>
  import("../pages/RegionalChatsPage/RegionalChatsPage.jsx")
);
const AllMedicationsPage = React.lazy(() =>
  import(
    "../games/MedicationsGame/pages/AllMedicationsPage/AllMedicationsPage.jsx"
  )
);
const TermMatchingGame = React.lazy(() =>
  import("../games/TerminologyGame/pages/TermMatchingGame/TermMatchingGame.jsx")
);
const NavigateToMap = () => <Link to={pathList.custom_map.path}></Link>;
const FillInBlankGame = React.lazy(() =>
  import("../games/TerminologyGame/pages/FillInBlankGame/FillInBlankGame.jsx")
);
const MedicationsLearningPage = React.lazy(() =>
  import(
    "../games/MedicationsGame/MedicationsLearningPage/MedicationsLearningPage.jsx"
  )
);
const MedicationFlashcardGame = React.lazy(() =>
  import(
    "../games/MedicationsGame/pages/FlashcardGame/MedicationFlashcardGame.jsx"
  )
);
const MedicationSimpleChoiceGame = React.lazy(() =>
  import(
    "../games/MedicationsGame/pages/MedicationSimpleChoiceGame/MedicationSimpleChoiceGame.jsx"
  )
);
const MedicationElectiveLanguageGame = React.lazy(() =>
  import(
    "../games/MedicationsGame/pages/MedicationElectiveLanguageGame/MedicationElectiveLanguageGame.jsx"
  )
);
// всередині src/routes/index.jsx (на рівні з іншими lazy-імпортами)
const ForumRoutes = React.lazy(() => import("../forum/ForumRoutes.jsx"));

const MedicationsTermMatchingGame = React.lazy(() =>
  import(
    "../games/MedicationsGame/pages/TermMatchingGame/MedicationsTermMatchingGame.jsx"
  )
);

const MedicationFortuneWheelGame = React.lazy(() =>
  import("../games/MedicationsGame/pages/MedicationFortuneWheelGame/MedicationFortuneWheelGame.jsx")
);

const MedicationFillInBlankGame = React.lazy(() =>
  import(
    "../games/MedicationsGame/pages/FillInBlankGame/MedicationFillInBlankGame.jsx"
  )
);
const AbbreviationsFlashcardGame = React.lazy(() =>
  import("../games/AbbreviationsGame/pages/FlashcardGame/AbbreviationsFlashcardGame.jsx")
);
const AbbreviationsLearningPage = React.lazy(() =>
  import("../games/AbbreviationsGame/AbbreviationsLearningPage/AbbreviationsLearningPage.jsx")
);
const LetterFormPage = React.lazy(() =>
  import("../pages/LetterFormPage/LetterFormPage")
);
const AbbreviationsSimpleChoiceGame = React.lazy(() =>
  import("../games/AbbreviationsGame/pages/SimpleChoiceGame/AbbreviationsSimpleChoiceGame.jsx")
);
const CalendarPage = React.lazy(() =>
  import("../pages/CalendarPage/CalendarPage")
);
const AbbreviationsTermMatchingGame = React.lazy(() =>
  import("../games/AbbreviationsGame/pages/TermMatchingGame/AbbreviationsTermMatchingGame.jsx")
);
const AbbreviationsFortuneWheelGame = React.lazy(() =>
  import("../games/AbbreviationsGame/pages/FortuneWheelGame/AbbreviationsFortuneWheelGame.jsx")
);
const RegionCasesPage = React.lazy(() =>
  import("../pages/RegionCasesPage/RegionCasesPage")
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
        <Route
  path={pathList.abbreviations_fortune_wheel.path}
  element={<AbbreviationsFortuneWheelGame />}
/>
        <Route path="/abbreviations-simplechoice-game" element={<AbbreviationsSimpleChoiceGame />} />
        <Route path="/abbreviations-flashcard-game" element={<AbbreviationsFlashcardGame />} />
        <Route
          path="/elective-language-game"
          element={<ElectiveLanguageGame />}
        />
        <Route path={pathList.region_cases.path} element={<RegionCasesPage />} />
        <Route
  path={pathList.abbreviations_term_matching.path}
  element={<AbbreviationsTermMatchingGame />}
/>
        <Route
          path={pathList.medications_fill_in_blank.path}
          element={<MedicationFillInBlankGame />}
        />
        <Route path={pathList.calendar.path} element={<CalendarPage />} />
          <Route
          path="/medications-fortune-wheel-game"
          element={<MedicationFortuneWheelGame />}
        />
        <Route
  path={pathList.abbreviations_learning.path}
  element={<AbbreviationsLearningPage />}
/>
<Route path={pathList.cover_letter.path} element={<LetterFormPage />} />
        <Route
          path={pathList.medications_elective_language.path}
          element={<MedicationElectiveLanguageGame />}
        />
        <Route path="/forum/*" element={<ForumRoutes />} />
        <Route
          path="/medications-learning"
          element={<MedicationsLearningPage />}
        />
        <Route path={pathList.custom_map.path} element={<CustomGermanyMap />} />
        <Route path="/fill-in-blank-game" element={<FillInBlankGame />} />
        <Route path={pathList.lands.path} element={<GermanyLandsPage />} />
        <Route path={pathList.main_menu.path} element={<MainMenuPage />} />
        <Route path={pathList.documents.path} element={<DocumentsPage />} />
        <Route path={pathList.what_is_fsp.path} element={<WhatIsFSPPage />} />
        <Route
          path={pathList.gleichwertigkeit.path}
          element={<GleichwertigkeitPage />}
        />
        <Route
          path={pathList.medications_term_matching.path}
          element={<MedicationsTermMatchingGame />}
        />
        <Route
          path={pathList.medications_simple_choice.path}
          element={<MedicationSimpleChoiceGame />}
        />
        <Route
          path={pathList.term_matching.path}
          element={<TermMatchingGame />}
        />

        <Route path={pathList.notar_list.path} element={<NotarListPage />} />
        <Route
          path={pathList.kenntnispruefung.path}
          element={<KenntnisPruefungPage />}
        />
        <Route
          path="/medications-flashcard-game"
          element={<MedicationFlashcardGame />}
        />
        <Route
          path={pathList.regional_chats.path}
          element={<RegionalChatsPage />}
        />
        <Route path="/flashcard-game" element={<FlashcardGame />} />
        <Route
          path={pathList.exam_explanations.path}
          element={<ExamEmplanationsPage />}
        />

        <Route path="/medications" element={<AllMedicationsPage />} />
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
