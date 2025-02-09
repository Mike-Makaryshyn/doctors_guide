import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { APPROBATION_STAGES_NON_EU } from "../../constants/translation/stagesTranslationNonEU";
import { APPROBATION_STAGES_EU } from "../../constants/translation/stagesTranslationEU";
import { LANDS_INFO } from "../../constants/lands"; // імпортуємо дані про регіони
import styles from "./StageTasks.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaInfoCircle } from "react-icons/fa";

const StageTasks = ({
  selectedStageId,
  user,
  onProgressUpdate,
  language = "en",
  debugCategory,
}) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { category: globalCategory, selectedRegion, redirectToRegionPage } = useGetGlobalInfo();
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

        const stages =
          normalizedCategory === "EU"
            ? APPROBATION_STAGES_EU[language]
            : APPROBATION_STAGES_NON_EU[language];

        const currentStage = stages.find((stage) => stage.id === selectedStageId);
        setTasks(currentStage?.tasks || []);
      } catch (error) {
        console.error("Error loading stage data:", error);
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
      console.error("Error updating Firestore data:", error);
    }
  };

  // Оновлена функція для обробки кліку на іконку додаткової інформації
  const handleInfoClick = (e, task) => {
    e.stopPropagation();

    // Якщо завдання має посилання, що залежить від регіону, але регіон не вибрано
    if ((task.link === "/approbation-authorities" || task.link === "/medical-chambers") && !selectedRegion) {
      if (redirectToRegionPage) {
        redirectToRegionPage();
      } else {
        alert("Please select a region first.");
      }
      return;
    }

    let linkToOpen = task.link;
    // Якщо регіон вибрано, замінюємо посилання відповідно до даних з LANDS_INFO
    if ((task.link === "/approbation-authorities" || task.link === "/medical-chambers") && selectedRegion) {
      const regionData = LANDS_INFO.find((land) => land.name === selectedRegion);
      if (regionData) {
        if (task.link === "/approbation-authorities") {
          linkToOpen = regionData.main_link || linkToOpen;
        } else if (task.link === "/medical-chambers") {
          linkToOpen = regionData.doctor_palat || linkToOpen;
        }
      }
    }
    if (linkToOpen) {
      window.open(linkToOpen, "_blank");
    }
  };

  // Сортуємо завдання: невиконані спочатку, виконані в кінці
  const sortedTasks = [...tasks].sort((a, b) => {
    const aCompleted = selectedTasks.includes(a.id) ? 1 : 0;
    const bCompleted = selectedTasks.includes(b.id) ? 1 : 0;
    return aCompleted - bCompleted;
  });

  return (
    <div className={styles["stage-tasks"]}>
      {isLoading ? (
        <p>Завантаження завдань...</p>
      ) : (
        <ul>
          {sortedTasks.map((task) => (
            <li
              key={task.id}
              className={`${styles["task-item"]} ${selectedTasks.includes(task.id) ? styles["completed"] : ""}`}
              onClick={() => toggleTaskSelection(task.id)}
            >
              <label>
                <input type="checkbox" checked={selectedTasks.includes(task.id)} readOnly />
                {task.title}
              </label>
              {/* Якщо завдання має додаткову інформацію (infoText або link) */}
              {(task.infoText || task.link) && (
                <FaInfoCircle className={styles.infoIcon} onClick={(e) => handleInfoClick(e, task)} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StageTasks;