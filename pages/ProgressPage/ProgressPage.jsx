import React, { useState } from "react";
import styles from "./ProgressPage.module.scss";

const ProgressPage = () => {
  const [progress, setProgress] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, stage: "Entdecker", completed: false },
    { id: 2, stage: "Neuankömmling", completed: false },
    { id: 3, stage: "Dokumentenjäger", completed: false },
    { id: 4, stage: "Sprachkämpfer", completed: false },
    { id: 5, stage: "Sprachmeister", completed: false },
    { id: 6, stage: "Praktizierender Pionier", completed: false },
    { id: 7, stage: "Prüfungsprofi", completed: false },
    { id: 8, stage: "Lizenzierter Profi", completed: false },
    { id: 9, stage: "Legendenarzt", completed: false },
  ]);

  const updateTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    const completedTasks = updatedTasks.filter((task) => task.completed).length;
    const totalTasks = updatedTasks.length;
    setProgress(Math.floor((completedTasks / totalTasks) * 100));
  };

  return (
    <div className={styles.progressPage}>
      <h1>Ваш Прогрес</h1>
      <div className={styles.progressBar}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.progressStep} ${
              task.completed ? styles.completed : ""
            }`}
          >
            <img
              src={`/assets/${task.stage}.png`}
              alt={task.stage}
              className={task.completed ? styles.completed : ""}
            />
            <p className={task.completed ? styles.completed : ""}>
              {task.stage}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.progressPercentage}>Прогрес: {progress}%</div>
      <div className={styles.taskList}>
        <h2>Завдання:</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => updateTaskStatus(task.id)}
                />
                {task.stage}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressPage;