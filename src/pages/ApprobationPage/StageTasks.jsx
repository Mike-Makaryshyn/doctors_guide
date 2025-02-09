// src/pages/ApprobationPage/StageTasks.jsx
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { APPROBATION_STAGES_NON_EU } from "../../constants/translation/stagesTranslationNonEU";
import { APPROBATION_STAGES_EU } from "../../constants/translation/stagesTranslationEU";
import { LANDS_INFO } from "../../constants/lands";
import styles from "./StageTasks.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // використовується для selectedRegion та redirectToRegionPage
import { FaInfoCircle } from "react-icons/fa";
import AuthModal from "../AuthPage/AuthModal";

const StageTasks = ({
  selectedStageId,
  user,
  onProgressUpdate,
  language = "en",
}) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [localCategory, setLocalCategory] = useState(null); // локальний стан для категорії з Firebase

  // Використовуємо useGetGlobalInfo лише для selectedRegion та redirectToRegionPage
  const { selectedRegion, redirectToRegionPage } = useGetGlobalInfo();

  // Читаємо educationRegion безпосередньо з Firebase (як у DocumentsPage)
  useEffect(() => {
    if (!user) {
      setLocalCategory("Non-EU");
      return;
    }
    const dataDocRef = doc(db, "users", user.uid, "userData", "data");
    const unsubscribe = onSnapshot(dataDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const fetchedCategory = data.educationRegion;
        if (fetchedCategory === "EU" || fetchedCategory === "Non-EU") {
          setLocalCategory(fetchedCategory);
        } else {
          console.warn("Invalid or missing educationRegion. Defaulting to Non-EU.");
          setLocalCategory("Non-EU");
        }
      } else {
        // Ініціалізація документа, якщо він відсутній
        setDoc(dataDocRef, { educationRegion: "Non-EU" })
          .then(() => setLocalCategory("Non-EU"))
          .catch((error) => console.error("Error initializing educationRegion:", error));
      }
    });
    return () => unsubscribe();
  }, [user]);

  // Використовуємо локальну категорію; якщо вона не завантажена – "Non-EU" за замовчуванням
  const effectiveCategory = localCategory || "Non-EU";
  // Нормалізуємо для порівняння (великі літери)
  const normalizedCategory = effectiveCategory.trim().toUpperCase();

  // Завантаження завдань та даних етапу
  useEffect(() => {
    const loadStageData = async () => {
      if (!selectedStageId) return;
      setIsLoading(true);
      try {
        // Вибір завдань із статичних даних залежно від категорії (EU чи Non‑EU)
        const stages =
          normalizedCategory === "EU"
            ? APPROBATION_STAGES_EU[language]
            : APPROBATION_STAGES_NON_EU[language];
        const currentStage = stages.find((stage) => stage.id === selectedStageId);
        setTasks(currentStage?.tasks || []);

        if (user) {
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
        } else {
          setSelectedTasks([]);
          setProgress(0);
        }
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
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    const updatedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId)
      : [...selectedTasks, taskId];
    const newProgress = calculateProgress(updatedTasks);
    try {
      const docRef = doc(db, "users", user.uid, "stages", `stage_${selectedStageId}`);
      await setDoc(docRef, { selectedTasks: updatedTasks, progress: newProgress }, { merge: true });
      setSelectedTasks(updatedTasks);
      setProgress(newProgress);
      if (onProgressUpdate) {
        onProgressUpdate(selectedStageId, newProgress);
      }
    } catch (error) {
      console.error("Error updating Firestore data:", error);
    }
  };

  const handleInfoClick = (e, task) => {
    e.stopPropagation();
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if ((task.link === "/approbation-authorities" || task.link === "/medical-chambers") && !selectedRegion) {
      if (redirectToRegionPage) {
        redirectToRegionPage();
      } else {
        alert("Please select a region first.");
      }
      return;
    }

    let linkToOpen = task.link;
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

  const sortedTasks = [...tasks].sort((a, b) => {
    const aCompleted = selectedTasks.includes(a.id) ? 1 : 0;
    const bCompleted = selectedTasks.includes(b.id) ? 1 : 0;
    return aCompleted - bCompleted;
  });

  return (
    <div className={styles["stage-tasks"]}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {sortedTasks.map((task) => (
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
                  disabled={!user}
                />
                {task.title}
              </label>
              {(task.infoText || task.link) && (
                <FaInfoCircle
                  className={styles.infoIcon}
                  onClick={(e) => handleInfoClick(e, task)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default StageTasks;