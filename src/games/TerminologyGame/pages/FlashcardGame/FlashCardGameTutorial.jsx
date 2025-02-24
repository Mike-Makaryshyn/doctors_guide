import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./FlashCardGameTutorialTranslations";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import styles from "./FlashCardGameTutorial.module.scss";

const FlashCardGameTutorial = ({ run, onFinish }) => {
  const { selectedLanguage } = useGetGlobalInfo();
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const translations = tutorialTranslations[language];
  
  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);

  useEffect(() => {
    // Erstelle die Schritte basierend auf den Übersetzungen
    const stepsData = [
      {
        target: "body",
        content: (
          <span
            dangerouslySetInnerHTML={{ __html: translations.steps.intro }}
          />
        ),
        placement: "center",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="regionSelect"]',
        content: <span>{translations.steps.regionSelect}</span>,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="filterColumn"]',
        content: <span>{translations.steps.filterColumn}</span>,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="categorySelect"]',
        content: <span>{translations.steps.categorySelect}</span>,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="displayModeContainer"]',
        content: <span>{translations.steps.displayMode}</span>,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="questionCountContainer"]',
        content: <span>{translations.steps.questionCount}</span>,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="startButton"]',
        content: <span>{translations.steps.startButton}</span>,
        placement: "top",
        disableBeacon: true,
      },
    ];
    setSteps(stepsData);
  }, [translations]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      if (typeof onFinish === "function") {
        onFinish();
      }
      localStorage.setItem("flashCardGameTutorialCompleted", "true");
    }
  };

  return (
    <Joyride
      ref={joyrideRef}
      steps={steps}
      run={run}
      continuous={true}
      scrollToFirstStep={true}
      scrollOffset={200}
      showSkipButton={true}
      showCloseButton={false}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#023c6f",
        },
        buttonClose: {
          display: "none",
        },
      }}
      locale={{
        back: translations.buttons.back,
        close: translations.buttons.close,
        last: translations.buttons.last,
        next: translations.buttons.next,
        skip: translations.buttons.skip,
      }}
    />
  );
};

export default FlashCardGameTutorial;