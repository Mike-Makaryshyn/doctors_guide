import React, { useState, useEffect } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./AllMedicalAbbreviationsTutorialTranslations"; // імпорт перекладів

const AllMedicalAbbreviationsTutorial = React.forwardRef(
  ({ run, onFinish, onModalComplete, selectedLanguage = "de" }, joyrideRef) => {
    const language = selectedLanguage || "de";
const translations = tutorialTranslations[language] || tutorialTranslations.de;

    const [steps, setSteps] = useState([]);
    const [modalClosed, setModalClosed] = useState(false);

    useEffect(() => {
      const stepsData = [
        {
          target: "body",
          content: <span>{translations.steps.intro}</span>,
          placement: "center",
          disableBeacon: true,
          disableScrolling: true,
        },
        {
          target: '[data-tutorial="filterColumn"]',
          content: <span>{translations.steps.filterColumn}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: true,
        },
        {
          target: '[data-tutorial="categorySelect"]',
          content: <span>{translations.steps.categorySelect}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: true,
        },
        {
          target: '[data-tutorial="gameContainer"]',
          content: <span>{translations.steps.gameContainer}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: true,
        },
        {
          target: '[data-tutorial="definitionToggle"]',
          content: <span>{translations.steps.definitionToggle}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: true,
        },
        {
          target: '[data-tutorial="searchField"]',
          content: <span>{translations.steps.searchField}</span>,
          placement: "bottom",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
          target: '[data-tutorial="categoryHeader"]',
          content: <span>{translations.steps.categoryHeader}</span>,
          placement: "bottom",
          disableBeacon: true,
          disableScrolling: false,
        },
        // Новий крок для definitionCell
        {
          target: '[data-tutorial="definitionCell"]',
          content: <span>{translations.steps.definitionCell}</span>,
          placement: "bottom",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
          target: '[data-tutorial="checkIcon"]',
          content: <span>{translations.steps.checkIcon}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
          target: '[data-tutorial="pauseIconDesktop"]',
          content: <span>{translations.steps.pauseIconDesktop}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
          target: '[data-tutorial="pauseIconMobile"]',
          content: <span>{translations.steps.pauseIconMobile}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: false,
        },
      ];
      setSteps(stepsData);
    }, [translations]);

    const handleJoyrideCallback = (data) => {
      const { status, index } = data;

      // Якщо доходимо до кроків за межами модалки (index >= 5) — закриваємо модалку
      if (index >= 5 && !modalClosed) {
        if (onModalComplete) {
          onModalComplete();
        }
        setModalClosed(true);
      }

      // Якщо тур завершився або скіпнуто
      if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
        if (onFinish) {
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
        scrollToSteps={true}
        disableScrollParentFix={false}
        scrollOffset={120}
        showSkipButton={true}
        showCloseButton={false}
        callback={handleJoyrideCallback}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: "#023c6f",
          },
          buttonClose: { display: "none" },
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
  }
);

export default AllMedicalAbbreviationsTutorial;