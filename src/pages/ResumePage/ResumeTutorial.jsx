import React, { useState, useEffect } from "react";
import Joyride, { STATUS } from "react-joyride";

const allSteps = [
  {
    target: '[data-tutorial="iconBar"]',
    content:
      "Це панель секцій резюме. Тут ви можете обрати: персональні дані, актуальний стан, професійний досвід, освіту, мовні навички та технічні навички.",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: '[data-tutorial="dateField"]',
    content:
      "Це поле для вводу дат. Введіть дату у форматі MM/YYYY, або 'seit MM/YYYY', або 'MM/YYYY - MM/YYYY', або 'MM/YYYY - heute'.",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: '[data-tutorial="descriptionField"]',
    content:
      "Це поле для вводу опису. Фокус встановлюється автоматично, щоб ви могли ввести основну інформацію.",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: '[data-tutorial="placeField"]',
    content:
      "Тут необхідно вказати місце та країну для коректного відображення в резюме.",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: '[data-tutorial="hintButton"]',
    content:
      "Натисніть на лампочку для отримання підказок, як краще заповнити резюме.",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: '[data-tutorial="addRowButton"]',
    content:
      "Цією кнопкою ви можете додати новий рядок до списку досвіду.",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: '[data-tutorial="deleteRowButton"]',
    content:
      "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
    placement: "bottom",
    disableBeacon: true,
  },


];

const ResumeTutorial = ({ currentSection, onSectionChange, resetTutorial }) => {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const tutorialCompleted = localStorage.getItem("tutorialCompleted");
    if (currentSection === 2 && (!tutorialCompleted || resetTutorial)) {
      setRun(true);
    } else {
      setRun(false);
    }
  }, [currentSection, resetTutorial]);

  const handleJoyrideCallback = (data) => {
    const { status, index, type } = data;

    // Якщо це крок 5 (індекс 4), скидаємо значення обов’язкового інпуту
    if (index === 4 && type === "step:after") {
      window.dispatchEvent(new CustomEvent("resetMandatoryInput"));
    }

    // При завершенні туторіалу або якщо він пропущений:
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      localStorage.setItem("tutorialCompleted", "true");
      // Диспатчимо подію, щоб скинути всі обмеження у секціях
      window.dispatchEvent(new CustomEvent("tutorialFinished"));
      // Повертаємо користувача до першої секції
      onSectionChange(0);
    }
  };

  return (
    <Joyride
      steps={allSteps}
      run={run}
      continuous={true}
      scrollToFirstStep={true}
      showSkipButton={true}
      showProgress={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#023c6f",
          overlayColor: "rgba(0, 0, 0, 0.4)",
        },
        tooltipContainer: { textAlign: "left" },
      }}
      locale={{
        back: "Назад",
        close: "Закрити",
        last: "Завершити",
        next: "Далі",
        skip: "Пропустити",
      }}
    />
  );
};

export default ResumeTutorial;