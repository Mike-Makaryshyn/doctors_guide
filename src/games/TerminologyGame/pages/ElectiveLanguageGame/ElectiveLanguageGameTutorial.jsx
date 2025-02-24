import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./ElectiveLanguageGameTutorialTranslations";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import styles from "./ElectiveLanguageGameTutorial.module.scss";

const ElectiveLanguageGameTutorial = ({ run, onFinish }) => {
  const { selectedLanguage } = useGetGlobalInfo() || {};
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const stepsContent = tutorialTranslations[language]?.steps || {};

  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);

  useEffect(() => {
    const stepsData = [
      {
        target: "body",
        content: (
          <span dangerouslySetInnerHTML={{ __html: stepsContent.intro }} />
        ),
        placement: "center",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="regionSelect"]',
        content: stepsContent.regionSelect || "Select your desired region.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="filterColumn"]',
        content: stepsContent.filterColumn || "Choose the filter: learned, unlearned or paused.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="categorySelect"]',
        content: stepsContent.categorySelect || "Choose the category of medical terms.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="editToggleButton"]',
        content: stepsContent.editToggleButton || "Toggle edit mode to modify answers after an incorrect response.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="languageSwapContainer"]',
        content: stepsContent.languageSwapContainer || "Use this container to swap the translation direction between languages. Click the button to exchange source and target.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="questionCountContainer"]',
        content: stepsContent.questionCount || "Select the number of questions to display.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="startButton"]',
        content: stepsContent.startButton || "Press Start to begin the game.",
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
      localStorage.setItem("electiveLanguageGameTutorialCompleted", "true");
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
        back: tutorialTranslations[language]?.buttons?.back || "Back",
        close: tutorialTranslations[language]?.buttons?.close || "Close",
        last: tutorialTranslations[language]?.buttons?.last || "Finish",
        next: tutorialTranslations[language]?.buttons?.next || "Next",
        skip: tutorialTranslations[language]?.buttons?.skip || "Skip",
      }}
    />
  );
};

export default ElectiveLanguageGameTutorial;