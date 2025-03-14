import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS, EVENTS } from "react-joyride";
import styles from "./DocumentTutorial.module.scss";
import tutorialTranslations from "./DocumentTutorialtransaltion";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Імпорт хука для глобальної інформації

const ResumeTutorial = ({ currentSection, onSectionChange, resetTutorial }) => {
  const [run, setRun] = useState(false);
  const joyrideRef = useRef(null);
  
  // Отримання вибраної мови
  const { selectedLanguage } = useGetGlobalInfo();
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const stepsContent = tutorialTranslations[language]?.steps || {};

  // Визначення кроків для десктопної версії
  const desktopSteps = [
    {
      target: '[data-tutorial="iconBar"]',
      content:
        stepsContent.iconBar ||
        "Це панель секцій резюме. Тут ви можете обрати: персональні дані, актуальний стан, професійний досвід, освіту, мовні навички та технічні навички.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="dateField"]',
      content:
        stepsContent.dateField ||
        "Це поле для вводу дат. Введіть дату у форматі MM/YYYY, або 'seit MM/YYYY', або 'MM/YYYY - MM/YYYY', або 'MM/YYYY - heute'.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="descriptionField"]',
      content:
        stepsContent.descriptionField ||
        "Це поле для вводу опису. Фокус встановлюється автоматично, щоб ви могли ввести основну інформацію.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="placeField"]',
      content:
        stepsContent.placeField ||
        "Тут необхідно вказати місце та країну для коректного відображення в резюме.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
        target: '[data-tutorial="hintButton"]',
        content: stepsContent.hintButton || "Натисніть на лампочку для отримання підказок.",
        placement: "left", 
        disableBeacon: true,
        spotlightPadding: 0,
        disableScrolling: true, // Заборона прокрутки, щоб уникнути зміщення
        spotlightClicks: true,  // Дозвіл натискати на елемент
        offset: 20,             // Додаємо невеликий відступ від елемента
        styles: {
          tooltip: {
            maxWidth: '300px',
            whiteSpace: 'normal',
          },
          options: {
            arrowColor: '#fff',
          }
        }
      },
    {
      target: '[data-tutorial="addRowButton"]',
      content:
        stepsContent.addRowButton ||
        "Цією кнопкою ви можете додати новий рядок до списку досвіду.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="deleteRowButton"]',
      content:
        stepsContent.deleteRowButton ||
        "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="openModalButton"]',
      content:
        stepsContent.openModalButton ||
        "Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
      placement: "bottom",
      spotlightPadding: 0,
      disableBeacon: true,
    },
  ];

  // Визначення кроків для мобільної версії (дублювання з можливістю налаштування)
  const mobileSteps = [
    {
      target: '[data-tutorial="iconBar"]',
      content:
        stepsContent.iconBar ||
        "Мобільна: Це панель секцій резюме. Тут ви можете обрати: персональні дані, актуальний стан, професійний досвід, освіту, мовні навички та технічні навички.",
      placement: "top", // Наприклад, можна змінити розташування
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="dateField"]',
      content:
        stepsContent.dateField ||
        "Мобільна: Це поле для вводу дат. Введіть дату у форматі MM/YYYY, або 'seit MM/YYYY', або 'MM/YYYY - MM/YYYY', або 'MM/YYYY - heute'.",
      placement: "top",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="descriptionField"]',
      content:
        stepsContent.descriptionField ||
        "Мобільна: Це поле для вводу опису. Фокус встановлюється автоматично, щоб ви могли ввести основну інформацію.",
      placement: "top",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="placeField"]',
      content:
        stepsContent.placeField ||
        "Мобільна: Тут необхідно вказати місце та країну для коректного відображення в резюме.",
      placement: "top",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
      target: '[data-tutorial="hintButton"]',
      content:
        stepsContent.hintButton ||
        "Мобільна: Натисніть на лампочку для отримання підказок, як краще заповнити резюме.",
      placement: "left",
      disableBeacon: true,
      disableScrolling: false,
      spotlightClicks: true,
      spotlightPadding: 0,
      isFixedPosition: true,
    },
    {
      target: '[data-tutorial="addRowButton"]',
      content:
        stepsContent.addRowButton ||
        "Мобільна: Цією кнопкою ви можете додати новий рядок до списку досвіду.",
      placement: "top",
      spotlightPadding: 0,
      disableBeacon: true,
    },
    {
        target: '[data-tutorial="deleteRowButtonMobile"]',  // Оновлено для мобільної версії
        content:
          stepsContent.deleteRowButton ||
          "Мобільна: Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
        placement: "top",
        spotlightPadding: 0,
        disableBeacon: true,
      },
    {
      target: '[data-tutorial="openModalButton"]',
      content:
        stepsContent.openModalButton ||
        "Мобільна: Цією кнопкою ви можете видалити рядок, якщо він більше не потрібен. Після цього кроку поле для опису має втратити фокус.",
      placement: "top",
      spotlightPadding: 0,
      disableBeacon: true,
    },
  ];

  // Визначення, чи пристрій мобільний (можна налаштовувати поріг)
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const stepsToUse = isMobile ? mobileSteps : desktopSteps;

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
    console.log("[Joyride]", { status, index, type, data });
  
    if (type === EVENTS.STEP_AFTER || type === EVENTS.TOOLTIP) {
      // Логування перед оновленням позиції
      console.log("[Joyride] Updating tooltip position, current step:", index);
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          if (joyrideRef.current) {
            // Спробуємо логувати доступну інформацію перед оновленням
            console.log("[Joyride] Before update, helper:", joyrideRef.current.helper);
            joyrideRef.current?.helper?.update();
            window.dispatchEvent(new Event("resize"));
            console.log("[Joyride] Update call executed");
          }
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
  steps={stepsToUse}
  run={run}
  continuous={true}
  scrollToFirstStep={true}
  showSkipButton={true}
  showCloseButton={false} // Задаємо false
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
      maxWidth: "1000px",
      textAlign: "justify",
    },
    tooltipContainer: {
      textAlign: "justify",
    },
    // Додаємо стилізацію для кнопки закриття, щоб явно приховати її
    buttonClose: {
      display: "none",
    },
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