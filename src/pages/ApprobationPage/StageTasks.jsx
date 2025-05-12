import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../supabaseClient";
import { APPROBATION_STAGES_NON_EU } from "../../constants/translation/stagesTranslationNonEU";
import { APPROBATION_STAGES_EU } from "../../constants/translation/stagesTranslationEU";
import { LANDS_INFO } from "../../constants/lands";
import styles from "./StageTasks.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // використовується для selectedRegion та redirectToRegionPage
import { FaInfoCircle } from "react-icons/fa";
import AuthModal from "../AuthPage/AuthModal";

const StageTasks = ({ selectedStageId, user, onProgressUpdate, language = "en" }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { selectedRegion, redirectToRegionPage, educationCategory } = useGetGlobalInfo();

  const updateTimerRef = useRef(null);
  let pendingUpdate = useRef(null);

  const effectiveCategory = educationCategory || "Non-EU";
  const normalizedCategory = effectiveCategory.trim().toUpperCase();

  useEffect(() => {
    const loadStageData = async () => {
      if (!selectedStageId) return;
      setIsLoading(true);
      try {
        const stages =
          normalizedCategory === "EU"
            ? APPROBATION_STAGES_EU[language]
            : APPROBATION_STAGES_NON_EU[language];
        const currentStage = stages.find((stage) => stage.id === selectedStageId);
        setTasks(currentStage?.tasks || []);

        if (user) {
          try {
            const meta = user.user_metadata || {};
            const stageKey = `stage_${selectedStageId}`;
            const stageData = meta[stageKey] || { selectedTasks: [], progress: 0 };
            setSelectedTasks(stageData.selectedTasks);
            setProgress(stageData.progress);
            // Ensure metadata initialized
            if (!meta[stageKey]) {
              await supabase.auth.updateUser({
                data: { [stageKey]: stageData }
              });
            }
          } catch (error) {
            console.error("Error loading stage data:", error);
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

    return () => {
      clearTimeout(updateTimerRef.current);
    };
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
    const stageKey = `stage_${selectedStageId}`;
    // Set pending update for debounce
    pendingUpdate.current = { [stageKey]: { selectedTasks: updatedTasks, progress: newProgress } };
    // Debounce metadata update to avoid rate limits
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(async () => {
      try {
        await supabase.auth.updateUser({
          data: pendingUpdate.current
        });
        if (onProgressUpdate) onProgressUpdate(selectedStageId, newProgress);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }, 1000);
    setSelectedTasks(updatedTasks);
    setProgress(newProgress);
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
              className={`${styles["task-item"]} ${
                selectedTasks.includes(task.id) ? styles["completed"] : ""
              }`}
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
                  data-tutorial="svgInfoIcon"
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