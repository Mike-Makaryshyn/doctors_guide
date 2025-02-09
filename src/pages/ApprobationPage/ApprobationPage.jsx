import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "./StageMenu";
import StageTasks from "./StageTasks";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./styles.module.scss";

const ApprobationPage = () => {
  const { selectedLanguage: language, user, category: globalCategory } = useGetGlobalInfo();
  // Використовуємо категорію, отриману з Firebase; якщо не завантажена – за замовчуванням "Non-EU"
  const effectiveCategory = globalCategory || "Non-EU";

  const [activeStage, setActiveStage] = useState(1);
  const [stagesProgress, setStagesProgress] = useState(Array(9).fill(0));

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

  // Розрахунок загального прогресу (середнє значення)
  const calculateOverallProgress = () => {
    if (stagesProgress.length === 0) return 0;
    const total = stagesProgress.reduce((acc, cur) => acc + cur, 0);
    return Math.round(total / stagesProgress.length);
  };

  const overallProgress = calculateOverallProgress();

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* Секція стейджів */}
        <div className={styles.stagesSection}>
          <StageMenu
            onStageSelect={handleStageSelect}
            stagesProgress={stagesProgress}
            enableSwipe={true}
            activeStage={activeStage}
          />
        </div>

        {/* Секція завдань */}
        <div className={styles.tasksSection}>
          <StageTasks
            selectedStageId={activeStage}
            language={language}
            user={user}
            onProgressUpdate={handleProgressUpdate}
          />
        </div>
      </div>

      {/* Фіксований круговий прогрес-бар у правому нижньому куті */}
      <div className={styles.printButton}>
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
    </MainLayout>
  );
};

export default ApprobationPage;