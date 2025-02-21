import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS, EVENTS } from "react-joyride";
import tutorialTranslations from "./SimpleChoiceGameTutorialTranslations";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./SimpleChoiceGameTutorial.module.scss";

const SimpleChoiceGameTutorial = ({ run, onFinish }) => {
  const { selectedLanguage } = useGetGlobalInfo() || {};
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const stepsContent = tutorialTranslations[language]?.steps || {};

  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);

  useEffect(() => {
    const stepsData = [
      {
        target: '[data-tutorial="regionSelect"]',
        content:
          stepsContent.regionSelect ||
          "Select your desired region. This is automatically set based on your preferences.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="filterColumn"]',
        content:
          stepsContent.filterColumn ||
          "Here you can choose the filter: learned, unlearned or paused (deferred).",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="categorySelect"]',
        content:
          stepsContent.categorySelect ||
          "Choose the category of medical terms. By default, 'All' is selected.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="editToggleButton"]',
        content:
          stepsContent.editToggleButton ||
          "Activate the edit mode to modify terms directly.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="displayModeContainer"]',
        content:
          stepsContent.displayMode ||
          "Here you can choose the display mode: Lat→Ger, Ger→Lat or Mixed.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="questionCountContainer"]',
        content:
          stepsContent.questionCount ||
          "Select the number of questions to be displayed in the game.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="startButton"]',
        content:
          stepsContent.startButton ||
          "Press Start to begin the game. The tutorial ends here.",
        placement: "top",
        disableBeacon: true,
      },
    ];
    setSteps(stepsData);
  }, [stepsContent]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      if (typeof onFinish === "function") {
        onFinish();
      }
      localStorage.setItem("simpleChoiceGameTutorialCompleted", "true");
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
      showCloseButton={false} // Кнопка закриття (close) завжди прихована
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
        back: tutorialTranslations[language]?.buttons?.back || "Back",
        close: tutorialTranslations[language]?.buttons?.close || "Close",
        last: tutorialTranslations[language]?.buttons?.last || "Finish",
        next: tutorialTranslations[language]?.buttons?.next || "Next",
        skip: tutorialTranslations[language]?.buttons?.skip || "Skip",
      }}
    />
  );
};

export default SimpleChoiceGameTutorial;