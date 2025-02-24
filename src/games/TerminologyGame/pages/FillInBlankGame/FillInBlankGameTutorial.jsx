import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./FillInBlankGameTutorialTranslations";
import useGetGlobalInfo from "../../../../hooks/useGetGlobalInfo";
import styles from "./FillInBlankGameTutorial.module.scss";

const FillInBlankGameTutorial = ({ run, onFinish }) => {
  const { selectedLanguage } = useGetGlobalInfo() || {};
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const stepsContent = tutorialTranslations[language]?.steps || {};

  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);

  useEffect(() => {
    const stepsData = [
      {
        // Вступний крок – не прив'язаний до конкретного елемента
        target: "body",
        content: <span dangerouslySetInnerHTML={{ __html: stepsContent.intro }} />,
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
        content: stepsContent.filterColumn || "Here you can choose the filter: learned, unlearned or paused.",
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
        content: stepsContent.editToggleButton || "When edit mode is activated, you can modify your answer after an incorrect response.",
        placement: "top",
        disableBeacon: true,
      },
      {
        target: '[data-tutorial="questionCountContainer"]',
        content: stepsContent.questionCount || "Select the number of questions to be displayed in the game.",
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
      localStorage.setItem("fillInBlankGameTutorialCompleted", "true");
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
      showCloseButton={false} // Кнопка закриття завжди прихована
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

export default FillInBlankGameTutorial;