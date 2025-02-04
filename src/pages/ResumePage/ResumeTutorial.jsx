import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS, EVENTS } from "react-joyride";
import styles from "./DocumentTutorial.module.scss";
import tutorialTranslations from "./DocumentTutorialtransaltion";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Імпорт хука для глобальної інформації

const ResumeTutorial = ({ currentSection, onSectionChange, resetTutorial }) => {
  const [run, setRun] = useState(false);
  const joyrideRef = useRef(null);
  
  // Використовуємо глобальний стан для отримання вибраної мови
  const { selectedLanguage } = useGetGlobalInfo();
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  
  const stepsContent = tutorialTranslations[language]?.steps || {};

  // Визначення кроків туторіалу із використанням перекладів з stepsContent
  const allSteps = [
    {
      target: '[data-tutorial="iconBar"]',
      content:
        stepsContent.iconBar ||
        "Це панель секцій резюме. Тут ви можете обрати: персональні дані, актуальний стан, професійний досвід, освіту, мовні навички та технічні навички.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="dateField"]',
      content:
        stepsContent.dateField ||
        "Це поле для вводу дат. Введіть дату у форматі MM/YYYY, або 'seit MM/YYYY', або 'MM/YYYY - MM/YYYY', або 'MM/YYYY - heute'.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="descriptionField"]',
      content:
        stepsContent.descriptionField ||
        "Це поле для вводу опису. Фокус встановлюється автоматично, щоб ви могли ввести основну інформацію.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="placeField"]',
      content:
        stepsContent.placeField ||
        "Тут необхідно вказати місце та країну для коректного відображення в резюме.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="hintButton"]',
      content:
        stepsContent.hintButton ||
        "Натисніть на лампочку для отримання підказок, як краще заповнити резюме.",
      placement: "left",
      disableBeacon: true,
      disableScrolling: false,
      spotlightClicks: true,
      isFixedPosition: true,
    },
    {
      target: '[data-tutorial="addRowButton"]',
      content:
        stepsContent.addRowButton ||
        "Цією кнопкою ви можете додати новий рядок до списку досвіду.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="deleteRowButton"]',
      content:
        stepsContent.deleteRowButton ||
        "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="openModalButton"]',
      content:
        stepsContent.openModalButton ||
        "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
      placement: "bottom",
      disableBeacon: true,
    },
  ];

  // Запуск туторіалу за умовою
  useEffect(() => {
    const tutorialCompleted = localStorage.getItem("tutorialCompleted");
    if (currentSection === 2 && (!tutorialCompleted || resetTutorial)) {
      setRun(true);
    } else {
      setRun(false);
    }
  }, [currentSection, resetTutorial]);

  // Callback для Joyride: повторне оновлення позиції тултіпа для стабільності
  const handleJoyrideCallback = (data) => {
    const { status, index, type } = data;

    if (type === EVENTS.STEP_AFTER || type === EVENTS.TOOLTIP) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          joyrideRef.current?.helper?.update();
          window.dispatchEvent(new Event("resize"));
        }, i * 300);
      }
    }

    if (index === 4 && type === "step:after") {
      window.dispatchEvent(new CustomEvent("resetMandatoryInput"));
    }

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      localStorage.setItem("tutorialCompleted", "true");
      window.dispatchEvent(new CustomEvent("tutorialFinished"));
      onSectionChange(0);
    }
  };

  return (
    <Joyride
      ref={joyrideRef}
      steps={allSteps}
      run={run}
      continuous={true}
      scrollToFirstStep={true}
      showSkipButton={true}
      showProgress={false}
      disableOverlay={false}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#023c6f",
          overlayColor: "rgba(0, 0, 0, 0.4)",
        },
        tooltip: {
          maxWidth: "500px",
          textAlign: "justify",
        },
        tooltipContainer: { textAlign: "justify" },
      }}
      locale={{
        back: tutorialTranslations[language]?.buttons?.back || "Назад",
        close: tutorialTranslations[language]?.buttons?.close || "Закрити",
        last: tutorialTranslations[language]?.buttons?.last || "Завершити",
        next: tutorialTranslations[language]?.buttons?.next || "Далі",
        skip: tutorialTranslations[language]?.buttons?.skip || "Пропустити",
      }}
    />
  );
};

export default ResumeTutorial;