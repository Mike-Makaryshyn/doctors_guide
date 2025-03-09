import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./LetterFormTutorialTranslations";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./LetterFormTutorial.module.scss";

const LetterFormTutorial = ({ run, onFinish, openModal }) => {
  const { selectedLanguage } = useGetGlobalInfo();
  const language = selectedLanguage || tutorialTranslations.currentLanguage || "en";
  const translations = tutorialTranslations[language];

  const [steps, setSteps] = useState([]);
  const joyrideRef = useRef(null);

  useEffect(() => {
    const stepsData = [
      {
        target: "body",
        content: (
          <span dangerouslySetInnerHTML={{ __html: translations.steps.intro }} />
        ),
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
        placement: "top",
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
    setSteps(stepsData);
  }, [translations]);

  const handleJoyrideCallback = (data) => {
    const { status, index, action, type } = data;
    // Якщо досягнуто кроку з settingsButton (індекс 6), відкриваємо модальне вікно
    if (index === 6 && action === "next") {
      if (typeof openModal === "function") {
        openModal();
      }
    }
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      if (typeof onFinish === "function") {
        onFinish();
      }
      localStorage.setItem("letterFormTutorialCompleted", "true");
      // Додатково відкриваємо модальне вікно, якщо потрібно
      if (typeof openModal === "function") {
        openModal();
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