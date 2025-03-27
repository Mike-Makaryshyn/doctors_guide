import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "./StageMenu";
import StageTasks from "./StageTasks";
import ApprobationTutorial from "./ApprobationTutorial";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./styles.module.scss";

const ApprobationPage = () => {
const { selectedLanguage: language, user, educationCategory } = useGetGlobalInfo();
const effectiveCategory = educationCategory || "Non-EU";

  const [activeStage, setActiveStage] = useState(1);
  const [stagesProgress, setStagesProgress] = useState(Array(9).fill(0));
  const [overallProgress, setOverallProgress] = useState(0);
  const [tutorialActive, setTutorialActive] = useState(false);

  // Завантаження активного етапу з Firebase
  useEffect(() => {
    if (!user) return;
    const fetchActiveStage = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.activeStage) {
            setActiveStage(data.activeStage);
          }
        }
      } catch (error) {
        console.error("Помилка при зчитуванні activeStage:", error);
      }
    };
    fetchActiveStage();
  }, [user]);

  // Завантаження прогресу всіх етапів з Firebase
  useEffect(() => {
    const fetchStagesProgress = async () => {
      if (!user) return;
      try {
        const progressArray = [];
        for (let i = 1; i <= 9; i++) {
          const docRef = doc(db, "users", user.uid, "stages", `stage_${i}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const stageData = docSnap.data();
            const progress = stageData?.progress || 0;
            progressArray.push(Math.min(progress, 100));
          } else {
            progressArray.push(0);
          }
        }
        setStagesProgress(progressArray);
      } catch (error) {
        console.error("Помилка при завантаженні прогресу етапів:", error);
      }
    };
    fetchStagesProgress();
  }, [user]);

  // Розрахунок загального прогресу (середнє значення)
  useEffect(() => {
    if (stagesProgress.length > 0) {
      // Для EU використовуємо тільки перші 7 етапів, для Non-EU використовуємо всі 9
      const relevantStages = effectiveCategory === "EU" ? stagesProgress.slice(0, 7) : stagesProgress;
      const total = relevantStages.reduce((acc, cur) => acc + cur, 0);
      const overall = Math.round(total / relevantStages.length);
      setOverallProgress(overall);
    }
  }, [stagesProgress, effectiveCategory]);

  const handleProgressUpdate = (stageId, newProgress) => {
    setStagesProgress((prev) => {
      const updated = [...prev];
      updated[stageId - 1] = newProgress || 0;
      return updated;
    });
  };

  const handleStageSelect = async (stageId) => {
    if (stageId === activeStage) return;
    setActiveStage(stageId);
    if (user) {
      try {
        const docRef = doc(db, "users", user.uid, "stages", `stage_${stageId}`);
        await setDoc(docRef, { activeStage: stageId }, { merge: true });
      } catch (error) {
        console.error("Помилка при оновленні активного етапу:", error);
      }
    }
  };

  // Обробка події для старту туторіалу (якщо користувач натисне кнопку "i")
  useEffect(() => {
    const handleStartTutorial = () => {
      // Для повторного запуску видаляємо прапорець туторіалу
      localStorage.removeItem("tutorialCompleted");
      // Якщо потрібно, можна перейти до певного етапу
      setActiveStage(1);
      setTutorialActive(true);
    };
    window.addEventListener("startTutorial", handleStartTutorial);
    return () => window.removeEventListener("startTutorial", handleStartTutorial);
  }, []);

  const handleBack = () => {
    // Navigate to Main Menu. Adjust the URL as necessary
    window.location.href = '/';
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Секція стейджів з data-тегом для туторіалу */}
        <div className={styles.stagesSection} data-tutorial="stageMenuContainer">
          <StageMenu
            onStageSelect={handleStageSelect}
            stagesProgress={stagesProgress}
            enableSwipe={true}
            activeStage={activeStage}
          />
        </div>

        {/* Секція завдань з data-тегом для туторіалу */}
        <div className={styles.tasksSection} data-tutorial="stageTaskContainer">
          <StageTasks
            selectedStageId={activeStage}
            language={language}
            user={user}
            onProgressUpdate={handleProgressUpdate}
          />
        </div>
      </div>

      {/* Фіксований круговий прогрес-бар (PrintButton) з data-тегом для туторіалу */}
      <div className={styles.printButton} data-tutorial="printButton">
        <svg viewBox="0 0 36 36" className={styles.circularProgress}>
          <path
            className={styles.circleBg}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="2"
          />
          <path
            className={styles.circle}
            strokeDasharray={`${overallProgress}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
          />
          <text x="18" y="21" textAnchor="middle" className={styles.progressText}>
            {overallProgress}%
          </text>
        </svg>
      </div>

      {/* Кнопка для виклику туторіалу (аналогічна до тієї в резюме) */}
      <button
        data-tutorial="tutorialStartButton"
        className={styles.tutorialButton}
        onClick={() =>
          window.dispatchEvent(new CustomEvent("startTutorial"))
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="none"
          stroke="#ededed"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" stroke="#ededed" fill="none" />
          <line x1="12" y1="12" x2="12" y2="15.5" stroke="#ededed" strokeWidth="3" />
          <circle cx="12" cy="7" r="0.5" fill="#ededed" />
        </svg>
      </button>

 

      {/* Підключення компоненту туторіалу */}
      <ApprobationTutorial run={tutorialActive} onFinish={() => setTutorialActive(false)} />
    </MainLayout>
  );
};

export default ApprobationPage;