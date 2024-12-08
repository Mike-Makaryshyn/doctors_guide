import React, { useState } from "react";
import styles from "./styles.module.scss";

function ApprobationPage() {
  // Етапи з описами та завданнями
  const stages = [
    {
      id: 1,
      title: "Entdecker",
      description: "це той, хто тільки розпочинає свій шлях, досліджує можливості, вивчає основи переїзду та вимоги апробації, а також починає збирати необхідні документи.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 1.1, title: "Дослідження земель для переїзду", completed: false },
        { id: 1.2, title: "Ознайомлення з вимогами апробації", completed: false },
        { id: 1.3, title: "Початок вивчення німецької мови", completed: false },
        { id: 1.4, title: "Складання списку необхідних документів", completed: false },
      ],
    },
    {
      id: 2,
      title: "Neuankömmling",
      description: "це той, хто вже переїхав до Німеччини, зробив перші кроки до адаптації, зареєструвався за місцем проживання, відкрив банківський рахунок і відправив документи до відповідних установ.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 2.1, title: "Реєстрація за місцем проживання (Anmeldung)", completed: false },
        { id: 2.2, title: "Відкриття банківського рахунку", completed: false },
        { id: 2.3, title: "Отримання медичного страхування", completed: false },
        { id: 2.4, title: "Відправлення документів до відповідних установ", completed: false },
      ],
    },
    {
      id: 3,
      title: "Dokumentenjäger",
      description: "це той, хто активно збирає, готує та подає документи для визнання диплома і чекає на їх розгляд, продовжуючи вдосконалювати свої знання німецької мови.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 3.1, title: "Складання та відправлення пакета документів", completed: false },
        { id: 3.2, title: "Переклад та нотаріальне завірення документів", completed: false },
        { id: 3.3, title: "Очікування відповіді від відповідних органів", completed: false },
        { id: 3.4, title: "Продовження вивчення мови", completed: false },
      ],
    },
    {
      id: 4,
      title: "Sprachkämpfer",
      description: "це той, хто активно готується до Fachsprachprüfung, вивчає медичну термінологію, практикує лікарські консультації та відвідує курси підготовки.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 4.1, title: "Вивчення медичної термінології", completed: false },
        { id: 4.2, title: "Практика лікарських консультацій", completed: false },
        { id: 4.3, title: "Відвідування курсів підготовки до FSP", completed: false },
        { id: 4.4, title: "Підготовка до симуляції іспиту", completed: false },
      ],
    },
    {
      id: 5,
      title: "Sprachmeister",
      description: "це той, хто успішно склав FSP, працює над подальшими кроками, такими як пошук роботи, підготовка документів для працевлаштування та вдосконалення мовних навичок.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 5.1, title: "Продовження вивчення німецької мови", completed: false },
        { id: 5.2, title: "Складання резюме та супровідного листа", completed: false },
        { id: 5.3, title: "Пошук роботи через платформи вакансій", completed: false },
        { id: 5.4, title: "Підготовка документів для працевлаштування", completed: false },
      ],
    },
    {
      id: 6,
      title: "Praktizierender Pionier",
      description: "це той, хто отримав Berufserlaubnis, розпочав роботу в лікарні, набуває практичного досвіду та готується до складання Kenntnisprüfung.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 6.1, title: "Практика в лікарні з тимчасовою ліцензією", completed: false },
        { id: 6.2, title: "Вивчення програм для підготовки до KP", completed: false },
        { id: 6.3, title: "Запис на підготовчі курси", completed: false },
        { id: 6.4, title: "Складання заяви на KP", completed: false },
      ],
    },
    {
      id: 7,
      title: "Prüfungsprofi",
      description: "це той, хто зосереджений на підготовці до Kenntnisprüfung, проходить інтенсивні курси, виконує пробні тести та завершує оформлення документів.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 7.1, title: "Інтенсивне навчання за програмою KP", completed: false },
        { id: 7.2, title: "Проходження пробних тестів", completed: false },
        { id: 7.3, title: "Консультація з фахівцями", completed: false },
        { id: 7.4, title: "Реєстрація на KP", completed: false },
      ],
    },
    {
      id: 8,
      title: "Lizenzierter Profi",
      description: "це той, хто успішно склав Kenntnisprüfung і майже отримав Approbation, завершує останні формальності та готується до початку роботи з повною ліцензією.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 8.1, title: "Збір та перевірка усіх документів", completed: false },
        { id: 8.2, title: "Подача заявки на Approbation", completed: false },
        { id: 8.3, title: "Очікування відповіді від органів", completed: false },
        { id: 8.4, title: "Підготовка до початку роботи з Approbation", completed: false },
      ],
    },
    {
      id: 9,
      title: "Legendenarzt",
      description: "це той, хто отримав Approbation і став повноправним лікарем у Німеччині, починає працювати в лікарні та будує свою професійну кар’єру.",
      additionalInfo: "Детальний опис етапу можна ввести тут.",
      tasks: [
        { id: 9.1, title: "Отримання Approbation", completed: false },
        { id: 9.2, title: "Офіційне працевлаштування", completed: false },
        { id: 9.3, title: "Побудова професійної кар’єри", completed: false },
        { id: 9.4, title: "Участь у професійних заходах", completed: false },
      ],
    },
  ];

  const [tasksProgress, setTasksProgress] = useState({}); // Збереження виконаних завдань
  const [activeStage, setActiveStage] = useState(1); // Поточний активний етап

  // Підрахунок загальної кількості завдань
  const totalTasks = stages.reduce((total, stage) => total + stage.tasks.length, 0);

  // Підрахунок виконаних завдань
  const completedTasks = Object.values(tasksProgress).flat().length;

  // Обчислення загального прогресу
  const totalProgress = Math.floor((completedTasks / totalTasks) * 100);

  // Функція для відмітки виконаних завдань
  const toggleTaskCompletion = (stageId, taskId) => {
    setTasksProgress((prev) => {
      const stageTasks = prev[stageId] || [];
      const updatedTasks = stageTasks.includes(taskId)
        ? stageTasks.filter((id) => id !== taskId)
        : [...stageTasks, taskId];
      return { ...prev, [stageId]: updatedTasks };
    });
  };

  // Функція завершення етапу
  const completeStage = () => {
    if (activeStage < stages.length) {
      setActiveStage((prev) => prev + 1);
    } else {
      alert("Вітаємо! Ви завершили всі етапи!");
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>Шлях до апробації</h1>
        <p>Виконуйте завдання на кожному етапі, щоб поступово досягти своєї мети!</p>
      </header>

      {/* Панель етапів */}
      <div className={styles.stageBar}>
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`${styles.stage} ${
              activeStage === stage.id ? styles.active : ""
            }`}
            onClick={() => setActiveStage(stage.id)}
          >
            <div className={styles.icon}>{stage.id}</div>
            <p>{stage.title}</p>
          </div>
        ))}
      </div>

      {/* Загальний прогрес */}
      <div className={styles.progressPercentage}>
        Загальний прогрес: {totalProgress}%
      </div>

      {/* Поточний етап */}
      <div className={styles.stageContent}>
        <h2>{stages.find((stage) => stage.id === activeStage)?.title}</h2>
        <p>{stages.find((stage) => stage.id === activeStage)?.description}</p>
        <h3>Завдання:</h3>
        <ul>
          {stages
            .find((stage) => stage.id === activeStage)
            ?.tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={
                      (tasksProgress[activeStage] || []).includes(task.id)
                    }
                    onChange={() => toggleTaskCompletion(activeStage, task.id)}
                  />
                  {task.title}
                </label>
              </li>
            ))}
        </ul>
        <button
          onClick={completeStage}
          className={styles.completeStageButton}
          disabled={
            (tasksProgress[activeStage]?.length || 0) <
            stages.find((stage) => stage.id === activeStage)?.tasks.length
          }
        >
          Завершити етап
        </button>
      </div>
    </div>
  );
}

export default ApprobationPage;