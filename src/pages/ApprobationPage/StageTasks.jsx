import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { APPROBATION_STAGES_NON_EU } from "../../constants/translation/stagesTranslationNonEU";
import { APPROBATION_STAGES_EU } from "../../constants/translation/stagesTranslationEU";
import styles from "./StageTasks.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const StageTasks = ({ selectedStageId, user, onProgressUpdate, language = "en", debugCategory }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { category: globalCategory } = useGetGlobalInfo();
  const effectiveCategory = debugCategory || globalCategory;
  const normalizedCategory = effectiveCategory ? effectiveCategory.trim().toUpperCase() : "";

  useEffect(() => {
    console.log("StageTasks - effectiveCategory:", effectiveCategory);
    console.log("StageTasks - normalizedCategory:", normalizedCategory);
  }, [effectiveCategory, normalizedCategory]);

  useEffect(() => {
    const loadStageData = async () => {
      if (!user || !selectedStageId) return;

      setIsLoading(true);
      try {
        const docRef = doc(db, "users", user.uid, "stages", `stage_${selectedStageId}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSelectedTasks(data?.selectedTasks || []);
          setProgress(data?.progress || 0);
        } else {
          await setDoc(docRef, { selectedTasks: [], progress: 0 });
          setSelectedTasks([]);
          setProgress(0);
        }

        const stages = normalizedCategory === "EU"
          ? APPROBATION_STAGES_EU[language]
          : APPROBATION_STAGES_NON_EU[language];

        const currentStage = stages.find((stage) => stage.id === selectedStageId);
        setTasks(currentStage?.tasks || []);
      } catch (error) {
        console.error("Помилка при завантаженні даних для етапу:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadStageData();
  }, [user, selectedStageId, language, normalizedCategory]);

  const calculateProgress = (updatedTasks) => {
    const totalTasks = tasks.length;
    const completedTasks = updatedTasks.length;
    return totalTasks > 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
  };

  const toggleTaskSelection = async (taskId) => {
    const updatedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId)
      : [...selectedTasks, taskId];
    const newProgress = calculateProgress(updatedTasks);
    try {
      if (user) {
        const docRef = doc(db, "users", user.uid, "stages", `stage_${selectedStageId}`);
        await setDoc(docRef, { selectedTasks: updatedTasks, progress: newProgress }, { merge: true });
        setSelectedTasks(updatedTasks);
        setProgress(newProgress);
        if (onProgressUpdate) {
          onProgressUpdate(selectedStageId, newProgress);
        }
      }
    } catch (error) {
      console.error("Помилка при оновленні даних у Firestore:", error);
    }
  };

  return (
    <div className={styles["stage-tasks"]}>
      {isLoading ? (
        <p>Завантаження завдань...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${styles["task-item"]} ${selectedTasks.includes(task.id) ? styles["completed"] : ""}`}
              onClick={() => toggleTaskSelection(task.id)}
            >
              <label>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  readOnly
                />
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StageTasks;