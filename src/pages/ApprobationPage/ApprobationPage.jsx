// src/pages/ApprobationPage/ApprobationPage.jsx

import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "../../components/StageMenu/StageMenu";
import StageTasks from "../../components/StageTasks/StageTasks";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import styles from "./styles.module.scss";

const ApprobationPage = () => {
  const { selectedLanguage: language, user } = useGetGlobalInfo();
  const [activeStage, setActiveStage] = useState(1); // Поточний етап
  const [stagesProgress, setStagesProgress] = useState(Array(9).fill(0)); // Масив прогресів

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
            progressArray.push(Math.min(progress, 100)); // Обмеження до 100%
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

  // Оновлення прогресу для конкретного етапу
  const handleProgressUpdate = (stageId, newProgress) => {
    setStagesProgress((prev) => {
      const updatedProgress = [...prev];
      updatedProgress[stageId - 1] = newProgress || 0; // Використовуйте 0 як початкове значення
      return updatedProgress;
    });
  };

  // Оновлення активного етапу
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

  // Обчислення загального прогресу
  const calculateOverallProgress = () => {
    if (stagesProgress.length === 0) return 0;
    const totalProgress = stagesProgress.reduce((acc, progress) => acc + progress, 0);
    return Math.round(totalProgress / stagesProgress.length); // Середній відсоток
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>
            {language === "en" && "Path to Approbation"}
            {language === "de" && "Weg zur Approbation"}
            {language === "uk" && "Шлях до апробації"}
            {language === "ru" && "Путь к апробации"}
            {language === "tr" && "Aprobasyo Yolu"}
            {language === "ar" && "طريق التصديق"}
            {language === "fr" && "Chemin vers l'approbation"}
            {language === "es" && "Camino a la Aprobación"}
            {language === "pl" && "Droga do Aprobaty"}
          </h1>
        </header>

        {/* Загальний прогрес */}
        <div className={styles.overallProgress}>
          <h2>
            {language === "en" && "Overall Progress"}
            {language === "de" && "Gesamtfortschritt"}
            {language === "uk" && "Загальний прогрес"}
            {language === "ru" && "Общий прогресс"}
            {language === "tr" && "Genel İlerleme"}
            {language === "ar" && "التقدم الكلي"}
            {language === "fr" && "Progrès global"}
            {language === "es" && "Progreso general"}
            {language === "pl" && "Ogólny postęp"}
            : {calculateOverallProgress()}%
          </h2>
        </div>

        {/* Меню етапів */}
        <StageMenu 
          onStageSelect={handleStageSelect} 
          stagesProgress={stagesProgress} 
          enableSwipe={true} // Включаємо свайпування на цій сторінці
        />

        {/* Завдання для активного етапу */}
        <StageTasks
          selectedStageId={activeStage}
          language={language}
          user={user}
          onProgressUpdate={handleProgressUpdate}
        />
      </div>
    </MainLayout>
  );
};

export default ApprobationPage;