import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS, EVENTS } from "react-joyride";
import tutorialTranslations from "./ApprobationTutorialTranslations";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./ApprobationTutorial.module.scss";

const ApprobationTutorial = ({ run, onFinish }) => {
  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);
  const { selectedLanguage } = useGetGlobalInfo() || {};
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const stepsContent = tutorialTranslations[language]?.steps || {};

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const stepsData = [
      {
        // Крок 1 – меню етапів. Встановлено placement "top" для повного відображення.
        target: '[data-tutorial="stageMenuContainer"]',
        content: stepsContent.stageMenu || "This is the stage menu. Here you can get detailed step-by-step information.",
        placement: "top",
        disableBeacon: true,
        spotlightPadding: 0,
      },
      {
        // Крок 2 – контейнер завдань. Тут ми теж встановлюємо placement "top" і примусово прокручуємо сторінку до самого верху.
        target: '[data-tutorial="stageTaskContainer"]',
        content: stepsContent.stageTasks || "This is the task container. Completed tasks automatically move to the end. Some tasks include extra information.",
        placement: "bottom",
        disableBeacon: true,
        disableScrolling: true, 
        spotlightPadding: 5,
      },
      {
        // Крок 3 – іконка додаткової інформації.
        target: '[data-tutorial="svgInfoIcon"]',
        content: stepsContent.infoIcon || "This icon indicates tasks with extra information. Click it to see more details.",
        placement: "left",
        disableBeacon: true,
        spotlightPadding: 0,
      },
      {
        // Крок 4 – прогрес-бар етапу. Також встановлюємо placement "top".
        target: '[data-tutorial="stageProgressBar"]',
        content: stepsContent.progressBar || "Each stage has its own progress bar that displays its progress.",
        placement: "top",
        disableBeacon: true,
        spotlightPadding: 0,
      },
      {
        // Крок 5 – загальний прогрес.
        target: '[data-tutorial="printButton"]',
        content: stepsContent.overallProgress || "This displays the overall progress of all stages.",
        placement: "top",
        disableBeacon: true,
        spotlightPadding: 0,
      },
    ];
    setSteps(stepsData);
  }, [stepsContent]);

  const handleJoyrideCallback = (data) => {
    const { status, index, type } = data;
    console.log("[Joyride]", { status, index, type, data });
    
    // Якщо це крок 2 (індекс 1) або крок 4 (індекс 3) – прокручуємо сторінку до самого верху
    if ((index === 1 || index === 3) && (type === EVENTS.TOOLTIP || type === EVENTS.STEP_AFTER)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    if (type === EVENTS.STEP_AFTER || type === EVENTS.TOOLTIP) {
      // Оновлення позиції тултіпа з невеликим відкладенням
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          if (joyrideRef.current) {
            joyrideRef.current?.helper?.update();
            window.dispatchEvent(new Event("resize"));
          }
        }, i * 300);
      }
    }
    
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      if (typeof onFinish === "function") {
        onFinish();
      }
      localStorage.setItem("tutorialCompleted", "true");
    }
  };

  return (
    <Joyride
      ref={joyrideRef}
      steps={steps}
      run={run}
      continuous={true}
      scrollToFirstStep={true}
      scrollOffset={200} // Збільшено offset до 200 для кращої видимості цільових елементів
      showSkipButton={true}
      showCloseButton={false} // Приховуємо кнопку "Закрити"
      disableOverlay={false}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#023c6f",
          overlayColor: "rgba(0, 0, 0, 0.4)",
          scrollOffset: 200,
        },
        tooltip: {
          maxWidth: "400px",
          textAlign: "justify",
        },
        buttonClose: {
          display: "none",
        },
      }}
      locale={{
        back: tutorialTranslations[language]?.buttons?.back || "Back",
        close: tutorialTranslations[language]?.buttons?.close || "Close",
        last: tutorialTranslations[language]?.buttons?.last || "Finish",
        next: tutorialTranslations[language]?.buttons?.next || "Next",
        skip: tutorialTranslations[language]?.buttons?.skip || "Skip",
      }}
    />
  );
};

export default ApprobationTutorial;