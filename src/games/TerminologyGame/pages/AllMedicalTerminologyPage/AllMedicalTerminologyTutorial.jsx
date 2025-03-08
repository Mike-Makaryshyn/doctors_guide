import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import tutorialTranslations from "./AllMedicalTerminologyTutorialTranslations";

/**
 * Пропи:
 *  - run: boolean (чи запущений туторіал)
 *  - onFinish: callback (коли туторіал завершено або скіпнуто)
 *  - onModalComplete: callback (викликається на кроці "Закрити модалку") — якщо треба
 *  - selectedLanguage: "de" | "ua" | тощо (визначає, якою мовою показувати тексти)
 */
const AllMedicalTerminologyTutorial = React.forwardRef(
  ({ run, onFinish, onModalComplete, selectedLanguage = "de" }, joyrideRef) => {
    const language = selectedLanguage || "de";
    const translations = tutorialTranslations[language];

    // Усі кроки (модалка + основна сторінка) в одному масиві
    const [steps, setSteps] = useState([]);

    useEffect(() => {
      const stepsData = [
        // --- КРОК У ЦЕНТРІ ЕКРАНУ (intro) ---
        {
          target: "body",
          content: <span>{translations.steps.intro}</span>,
          placement: "center",
          disableBeacon: true,
          disableScrolling: true, // Не скролимо на цьому кроці
        },
        // --- КРОКИ ДЛЯ МОДАЛЬНОГО ВІКНА ---
        {
          target: '[data-tutorial="regionSelect"]',
          content: <span>{translations.steps.regionSelect}</span>,
          placement: "top",
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
        // Якщо НЕ потрібно позначати кнопку "Закрити модалку", видаляємо цей крок
        // {
        //   target: '[data-tutorial="closeModal"]',
        //   content: <span>{translations.steps.closeModal}</span>,
        //   placement: "top",
        //   disableBeacon: true,
        //   disableScrolling: true,
        // },
        // --- КРОКИ ДЛЯ ОСНОВНОЇ СТОРІНКИ ---
        {
          target: '[data-tutorial="searchField"]',
          content: <span>{translations.steps.searchField}</span>,
          placement: "bottom",
          disableBeacon: true,
          disableScrolling: false, // Дозволяємо скрол
        },
        {
          target: '[data-tutorial="categoryHeader"]',
          content: <span>{translations.steps.categoryHeader}</span>,
          placement: "bottom",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
          target: '[data-tutorial="germanDefinition"]',
          content: <span>{translations.steps.germanDefinition}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: false,
        },
        {
          target: '[data-tutorial="explanationCell"]',
          content: <span>{translations.steps.explanationCell}</span>,
          placement: "top",
          disableBeacon: true,
          disableScrolling: false,
        },
        // КРОКИ ДЛЯ ПОЗНАЧЕННЯ ІКОНОК (CHECK / PAUSE)
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
      const { status, index, action, lifecycle } = data;

      // Якщо є крок, де потрібно закрити модалку, можна обробити його тут:
      // if (index === 5 && action === "next" && lifecycle === "complete") {
      //   if (onModalComplete) {
      //     onModalComplete();
      //   }
      //   setTimeout(() => {
      //     joyrideRef.current?.helpers?.update();
      //   }, 300);
      // }

      // Якщо тур завершився або його скіпнули
      if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
        if (onFinish) {
          onFinish();
        }
        localStorage.setItem("allMedicalTerminologyTutorialCompleted", "true");
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
        scrollOffset={120} // Збільшений відступ для кроків на основній сторінці
        scrollIntoViewOptions={{
          behavior: "smooth",
          block: "center",
          inline: "center",
        }}
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

export default AllMedicalTerminologyTutorial;