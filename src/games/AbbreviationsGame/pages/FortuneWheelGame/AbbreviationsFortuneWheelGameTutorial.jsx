import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./FortuneWheelGameTutorialTranslations";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import styles from "./FortuneWheelGameTutorial.module.scss";

const FortuneWheelGameTutorial = ({ run, onFinish }) => {
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
        content: stepsContent.regionSelect,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="filterSelect"]',
        content: stepsContent.filterSelect,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="categorySelect"]',
        content: stepsContent.categorySelect,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="playersSelect"]',
        content: stepsContent.playersSelect,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="displayModeSelect"]',
        content: stepsContent.displayModeSelect,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="questionCountSelect"]',
        content: stepsContent.questionCountSelect,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="startButton"]',
        content: stepsContent.startButton,
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="spinButton"]',
        content: stepsContent.spinButton,
        placement: "top",
        disableBeacon: true,
      },
    ];
    setSteps(stepsData);
  }, [stepsContent]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      onFinish && onFinish();
      localStorage.setItem("fortuneWheelGameTutorialCompleted", "true");
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

export default FortuneWheelGameTutorial;