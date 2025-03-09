import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./LetterFormTutorialTranslations";
import useGetGlobalInfo from "../../../src/hooks/useGetGlobalInfo";
import styles from "./LetterFormTutorial.module.scss";

const LetterFormTutorial = ({ run, onFinish, openModal }) => {
  const { selectedLanguage } = useGetGlobalInfo();
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const translations = tutorialTranslations[language];

  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    let stepsData;
    if (isMobile) {
      stepsData = [
        {
          // Вступний крок: показ повідомлення по центру екрану
          target: "body",
          content: <span dangerouslySetInnerHTML={{ __html: translations.steps.intro }} />,
          placement: "center",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="regionTile"]',
          content: <span>{translations.steps.regionTile}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="selectAddress"]',
          content: <span>{translations.steps.selectAddress}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="letterTextArea"]',
          content: <span>{translations.steps.letterTextArea}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="allInOneButton"]',
          content: <span>{translations.steps.allInOneButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="settingsButton"]',
          content: <span>{translations.steps.settingsButton}</span>,
          placement: "left",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="squareButton"]',
          content: <span>{translations.steps.squareButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="downloadButton"]',
          content: <span>{translations.steps.downloadButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="documentsButton"]',
          content: <span>{translations.steps.documentsButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
      ];
    } else {
      stepsData = [
        {
          // Вступний крок для десктопної версії
          target: "body",
          content: <span dangerouslySetInnerHTML={{ __html: translations.steps.intro }} />,
          placement: "center",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="userAddressCard"]',
          content: <span>{translations.steps.userAddressCard}</span>,
          placement: "right",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="regionTile"]',
          content: <span>{translations.steps.regionTile}</span>,
          placement: "left",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="selectAddress"]',
          content: <span>{translations.steps.selectAddress}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="letterTextArea"]',
          content: <span>{translations.steps.letterTextArea}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="allInOneButton"]',
          content: <span>{translations.steps.allInOneButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="settingsButton"]',
          content: <span>{translations.steps.settingsButton}</span>,
          placement: "left",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="squareButton"]',
          content: <span>{translations.steps.squareButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="downloadButton"]',
          content: <span>{translations.steps.downloadButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
        {
          target: '[data-tutorial="documentsButton"]',
          content: <span>{translations.steps.documentsButton}</span>,
          placement: "top",
          disableBeacon: true,
        },
      ];
    }
    setSteps(stepsData);
  }, [translations, isMobile]);

  const handleJoyrideCallback = (data) => {
    const { status, type, step } = data;
    // Якщо перед кроком із settingsButton – відкриваємо модальне вікно
    if (type === "step:before" && step?.target === '[data-tutorial="settingsButton"]') {
      if (typeof openModal === "function") {
        openModal();
      }
    }
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      if (typeof onFinish === "function") {
        onFinish();
      }
      localStorage.setItem("letterFormTutorialCompleted", "true");
    }
  };

  return (
    <Joyride
      ref={joyrideRef}
      steps={steps}
      run={run}
      continuous={true}
      scrollToFirstStep={true}
      scrollOffset={100}
      showSkipButton={true}
      showCloseButton={false}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#023c6f",
          spotlightPadding: 10,
        },
        buttonClose: {
          display: "none",
        },
        tooltipContainer: {
          textAlign: "center",
        },
        tooltip: {
          maxWidth: 350,
          "@media (max-width: 600px)": {
            maxWidth: "90%",
            left: "50% !important",
            transform: "translateX(-50%) !important",
          },
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

export default LetterFormTutorial;