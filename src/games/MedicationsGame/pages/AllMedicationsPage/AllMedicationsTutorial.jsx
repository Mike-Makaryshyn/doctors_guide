import React, { useState, useEffect } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./AllMedicationsTutorialTranslations"; // Beispiel für Übersetzungen

const AllMedicationsTutorial = React.forwardRef(
  ({ run, onFinish, onModalComplete, selectedLanguage = "de" }, joyrideRef) => {
    // Aktuelle Sprache (z.B. 'de' oder 'en')
    const language = selectedLanguage || "de";
    // Übersetzungsobjekt laden (z.B. { steps: { ... }, buttons: { ... } })
    const translations = tutorialTranslations[language] || tutorialTranslations.de;

    const [steps, setSteps] = useState([]);
    // Wird genutzt, um Modal nur einmal zu schließen
    const [modalClosed, setModalClosed] = useState(false);

    useEffect(() => {
      // Definiere die Reihenfolge und Inhalte der Schritte analog zum AbbreviationsTutorial
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
        {
          target: '[data-tutorial="definitionCell"]',
          content: <span>{translations.steps.definitionCell}</span>,
          placement: "bottom",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
            target: '[data-tutorial="descriptionCell"]',
            content: <span>Hier siehst du die Bezeichnung!</span>,
            placement: 'bottom', // oder top/left/right, je nach Layout
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

    /**
     * Wird nach jedem Schritt aufgerufen. Wir können hier überwachen,
     * wann wir die Einstellungen-Modal o.Ä. schließen wollen.
     */
    const handleJoyrideCallback = (data) => {
      const { status, index } = data;

      // Beispiel: ab einem gewissen Schritt (index >= 5) soll die Modal geschlossen werden
      if (index >= 5 && !modalClosed) {
        if (onModalComplete) {
          onModalComplete();
        }
        setModalClosed(true);
      }

      // Wenn das Tutorial fertig ist (durchgelaufen oder übersprungen)
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
        continuous
        scrollToFirstStep
        scrollToSteps
        showSkipButton
        showCloseButton={false}
        disableScrollParentFix={false}
        scrollOffset={120}
        callback={handleJoyrideCallback}
        locale={{
          back: translations.buttons.back,
          close: translations.buttons.close,
          last: translations.buttons.last,
          next: translations.buttons.next,
          skip: translations.buttons.skip,
        }}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: "#023c6f",
          },
          buttonClose: { display: "none" },
        }}
      />
    );
  }
);

export default AllMedicationsTutorial;