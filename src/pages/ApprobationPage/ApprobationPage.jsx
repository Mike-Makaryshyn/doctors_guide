import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "./StageMenu";
import StageTasks from "./StageTasks";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import styles from "./styles.module.scss";

const ApprobationPage = () => {
  const { selectedLanguage: language, user, category: globalCategory } = useGetGlobalInfo();
  const [activeStage, setActiveStage] = useState(1);
  const [stagesProgress, setStagesProgress] = useState(Array(9).fill(0));

  // Локальний стан для перемикача (для тестування)
  const [debugCategory, setDebugCategory] = useState(globalCategory || "Non-EU");
  // Якщо debugCategory встановлено, використовуємо його, інакше globalCategory
  const effectiveCategory = debugCategory || globalCategory;

  const handleCategorySwitch = (newCategory) => {
    setDebugCategory(newCategory);
  };

  // Завантаження збереженого activeStage з Firebase
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

  // Завантаження прогресу для всіх етапів
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

  const handleProgressUpdate = (stageId, newProgress) => {
    setStagesProgress((prev) => {
      const updatedProgress = [...prev];
      updatedProgress[stageId - 1] = newProgress || 0;
      return updatedProgress;
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

  const calculateOverallProgress = () => {
    if (stagesProgress.length === 0) return 0;
    const totalProgress = stagesProgress.reduce((acc, progress) => acc + progress, 0);
    return Math.round(totalProgress / stagesProgress.length);
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Верхня частина – стейджі */}
        <div className={styles.stagesSection}>
          <StageMenu 
            onStageSelect={handleStageSelect} 
            stagesProgress={stagesProgress} 
            enableSwipe={true}
            debugCategory={effectiveCategory}
            activeStage={activeStage}
          />
        </div>

        {/* Завдання для вибраного стейджу */}
        <div className={styles.tasksSection}>
          <StageTasks
            selectedStageId={activeStage}
            language={language}
            user={user}
            onProgressUpdate={handleProgressUpdate}
            debugCategory={effectiveCategory}
          />
        </div>

        {/* Прогрес-бар */}
        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${calculateOverallProgress()}%` }}
            ></div>
          </div>
          <p className={styles.progressText}>{calculateOverallProgress()}%</p>
        </div>

        {/* Кнопки для перемикання категорії – розташовано внизу */}
        <div className={styles.categorySection}>
          <button onClick={() => handleCategorySwitch("EU")}>EU</button>
          <button onClick={() => handleCategorySwitch("Non-EU")}>Non-EU</button>
          <p>Поточна категорія: {effectiveCategory}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApprobationPage;