import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./TermMatchingGameTutorialTranslations";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import styles from "./TermMatchingGameTutorial.module.scss";

const TermMatchingGameTutorial = ({ run, onFinish }) => {
  const { selectedLanguage } = useGetGlobalInfo() || {};
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const stepsContent = tutorialTranslations[language]?.steps || {};

  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);

  useEffect(() => {
    const stepsData = [
      {
        target: "body",
        content: <span dangerouslySetInnerHTML={{ __html: stepsContent.intro }} />,
        placement: "center",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="regionSelect"]',
        content: stepsContent.regionSelect || "Select your desired region.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: ".selectWrapper",
        content: stepsContent.selectWrapper || "This container allows you to choose the region.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="filterColumn"]',
        content: stepsContent.filterColumn || "Choose the filter: learned, unlearned or paused.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="categorySelect"]',
        content: stepsContent.categorySelect || "Choose the category of terms.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="languageSwapContainer"]',
        content: stepsContent.languageSwapContainer || "Use this container to swap the translation direction: left is always German, right is your chosen language.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="questionCountContainer"]',
        content: stepsContent.questionCountContainer || "Select the number of terms for the game.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="startButton"]',
        content: stepsContent.startButton || "Press Start to begin the game.",
        placement: "bottom",
        disableBeacon: true,
      },
    ];
    setSteps(stepsData);
  }, [stepsContent]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      localStorage.setItem("termMatchingGameTutorialCompleted", "true");
      if (typeof onFinish === "function") {
        onFinish();
      }
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

export default TermMatchingGameTutorial;