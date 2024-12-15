import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { APPROBATION_STAGES } from "../constants/translation/stagesTranslation";
import useGetGlobalInfo from "../hooks/useGetGlobalInfo";

const useStagesLogic = () => {
  const { selectedLanguage: language, user } = useGetGlobalInfo();
  const stages = APPROBATION_STAGES[language];
  const [tasksProgress, setTasksProgress] = useState({});
  const [activeStage, setActiveStage] = useState(1);
  const [userRoleIndex, setUserRoleIndex] = useState(null);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Завантаження прогресу та ролі
  const fetchProgressAndRole = async () => {
    if (!user) {
      // Завантажуємо тимчасові дані з localStorage
      const tempProgress = localStorage.getItem(`tempProgress_stage${activeStage}`);
      if (tempProgress) {
        setTasksProgress((prev) => ({
          ...prev,
          [activeStage]: JSON.parse(tempProgress),
        }));
      }
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const progressRef = doc(db, "users", user.uid, "progress", `stage${activeStage}`);
      const progressSnap = await getDoc(progressRef);

      if (progressSnap.exists()) {
        setTasksProgress((prev) => ({
          ...prev,
          [activeStage]: progressSnap.data().completedTasks || [],
        }));
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUserRoleIndex(userSnap.data().roleStage || 1);
      }
    } catch (error) {
      console.error("Error fetching progress and role:", error);
    }
    setIsLoading(false);
  };

  // Оновлення прогресу у Firestore або localStorage
  const updateProgressInFirebase = async (updatedTasks) => {
    if (!user) {
      // Зберігаємо тимчасові дані у localStorage
      localStorage.setItem(
        `tempProgress_stage${activeStage}`,
        JSON.stringify(updatedTasks)
      );
      return;
    }

    try {
      const progressRef = doc(db, "users", user.uid, "progress", `stage${activeStage}`);
      await setDoc(progressRef, { completedTasks: updatedTasks }, { merge: true });
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  // Оновлення ролі користувача у Firestore
  const updateUserRoleInFirebase = async (stageIndex) => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { roleStage: stageIndex });
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  // Тогл завершення завдання
  const toggleTaskCompletion = (taskId) => {
    setTasksProgress((prev) => {
      const stageTasks = prev[activeStage] || [];
      const updatedTasks = stageTasks.includes(taskId)
        ? stageTasks.filter((id) => id !== taskId)
        : [...stageTasks, taskId];

      updateProgressInFirebase(updatedTasks);
      return { ...prev, [activeStage]: updatedTasks };
    });
  };

  // Завершення етапу
  const completeStage = () => {
    const currentTasks = stages[activeStage - 1]?.tasks || [];
    const completedTasks = tasksProgress[activeStage] || [];

    if (currentTasks.length === completedTasks.length) {
      setShowCongratsModal(true);
      setShowConfetti(true);

      const newRoleIndex = activeStage;
      updateUserRoleInFirebase(newRoleIndex);

      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      alert(
        language === "en"
          ? "Complete all tasks before finishing the stage!"
          : "Виконайте всі завдання перед завершенням етапу!"
      );
    }
  };

  // Загальний прогрес
  const calculateTotalProgress = () => {
    const totalTasks = stages.reduce((sum, stage) => sum + stage.tasks.length, 0);
    const completedTasks = Object.values(tasksProgress).flat().length;
    return Math.floor((completedTasks / totalTasks) * 100);
  };

  useEffect(() => {
    fetchProgressAndRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, activeStage]);

  const totalProgress = calculateTotalProgress();
  const userRole = userRoleIndex ? stages[userRoleIndex - 1]?.title : "";

  return {
    user,
    language,
    stages,
    activeStage,
    setActiveStage,
    tasksProgress,
    toggleTaskCompletion,
    completeStage,
    totalProgress,
    userRole,
    showCongratsModal,
    setShowCongratsModal,
    showConfetti,
    isLoading,
  };
};

export default useStagesLogic;