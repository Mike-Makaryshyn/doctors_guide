import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { APPROBATION_STAGES } from "../../constants/translation/stagesTranslation";
import styles from "./StageTasks.module.scss"; // Підключення стилів

const StageTasks = ({ selectedStageId, user, onProgressUpdate, language = "en" }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Завантаження даних для етапу
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

        // Завантаження завдань із APPROBATION_STAGES
        const currentStage = APPROBATION_STAGES[language]?.find((stage) => stage.id === selectedStageId);
        setTasks(currentStage?.tasks || []);
      } catch (error) {
        console.error("Помилка при завантаженні даних для етапу:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStageData();
  }, [user, selectedStageId, language]);

  // Обчислення прогресу
  const calculateProgress = (updatedTasks) => {
    const totalTasks = tasks.length;
    const completedTasks = updatedTasks.length;
    return totalTasks > 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
  };

  // Оновлення стану завдань та прогресу
  const toggleTaskSelection = async (taskId) => {
    const updatedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId) // Зняти галочку
      : [...selectedTasks, taskId]; // Додати галочку

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
      <h2>
        {language === "en" && `Tasks for Stage ${selectedStageId}`}
        {language === "de" && `Aufgaben für die Stufe ${selectedStageId}`}
        {language === "uk" && `Завдання для етапу ${selectedStageId}`}
      </h2>
      {isLoading ? (
        <p>Завантаження завдань...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${styles["task-item"]} ${
                selectedTasks.includes(task.id) ? styles["completed"] : ""
              }`}
              onClick={() => toggleTaskSelection(task.id)} // Вибір завдання по кліку
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
      {/* Закоментовано або видалено */}
      {/* <p>{`Прогрес: ${progress}%`}</p> */}
    </div>
  );
};

export default StageTasks;