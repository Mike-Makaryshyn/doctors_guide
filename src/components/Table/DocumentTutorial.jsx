// src/components/Table/DocumentTutorial.jsx

import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import styles from "./DocumentTutorial.module.scss";
import tutorialTranslations from "../../constants/DocumentTutorialtransaltion"; // Імпорт перекладів
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Імпорт хука для глобальної інформації

const DocumentTutorial = ({ category }) => {
  const [run, setRun] = useState(false);
  const { selectedLanguage: language = "de" } = useGetGlobalInfo(); // Отримання поточної мови
  const topRef = useRef(null); // Створення ref до верхнього елемента

  // Функція для ручного запуску туторіалу
  const startTutorial = () => {
    // Прокручування до верхнього елемента з використанням 'auto' для миттєвого прокручування
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" }); // Альтернативне прокручування до верху
    }
    setRun(true);
  };

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
    if (!hasSeenTutorial) {
      // Додати невелике затримку, щоб гарантувати завершення прокручування
      setTimeout(() => {
        startTutorial();
      }, 100); // Затримка 100 мс, можна змінити за потребою
      localStorage.setItem("hasSeenTutorial", "true");
    }
  }, []);

  // Створення кроків на основі перекладів
  const steps = [
  
    {
      target: "[data-tutorial='mainTable']",
      content: tutorialTranslations[language]?.steps.mainTable || "Default content",
      placement: "auto",
      disableBeacon: true,
      spotlightClicks: true,
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "auto",
        },
      },
    },
    {
      target: "[data-tutorial='header-is_exist']",
      content: tutorialTranslations[language]?.steps.header_is_exist || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "auto",
        },
      },
    },
    {
      target: "[data-tutorial='header-apostile']",
      content: tutorialTranslations[language]?.steps.header_apostile || "Default content",
      placement: "auto",
      disableScrolling: false,
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "auto",
        },
      },
    },
    {
      target: "[data-tutorial='header-notary']",
      content: tutorialTranslations[language]?.steps.header_notary || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "auto",
        },
      },
    },
    {
      target: "[data-tutorial='header-translation']",
      content: tutorialTranslations[language]?.steps.header_translation || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-ready_copies']",
      content: tutorialTranslations[language]?.steps.header_ready_copies || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-sent']",
      content: tutorialTranslations[language]?.steps.header_sent || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-links']",
      content: tutorialTranslations[language]?.steps.header_links || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='secondTable']",
      content: tutorialTranslations[language]?.steps.secondTable || "Default content",
      placement: "top",
      styles: {
        tooltip: {
          marginTop: "10px",
          maxWidth: "300px",
        },
      },
    },
    {
      target: "[data-tutorial='regionalLink']",
      content: tutorialTranslations[language]?.steps.regionalLink || "Default content",
      placement: "bottom",
      styles: {
        tooltip: {
          marginTop: "10px",
          maxWidth: "300px",
        },
      },
    },
    {
      target: "[data-tutorial='optionalDocumentsSection']",
      content: tutorialTranslations[language]?.steps.optionalDocumentsSection || "Default content",
      placement: "auto",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='printButton']",
      content: tutorialTranslations[language]?.steps.printButton || "Default content",
      placement: "top",
      styles: {
        tooltip: {
          marginLeft: "10px",
          maxWidth: "300px",
        },
      },
    },
  ];

  // Функція для коригування позиції підказки
  const adjustTooltipPosition = () => {
    const tooltips = document.querySelectorAll(".react-joyride__tooltip");
    tooltips.forEach((tooltip) => {
      const rect = tooltip.getBoundingClientRect();
      if (rect.top < 50) { // Зменшено до 50px для більш гнучкого відступу
        tooltip.style.top = "70px";  // Встановити мінімальний відступ
      }
      if (rect.bottom > window.innerHeight) {
        tooltip.style.bottom = "70px"; // Встановити відступ зверху, якщо підказка виходить вниз
      }
    });
  };

  // Колбек для обробки подій туторіалу
  const handleJoyrideCallback = (data) => {
    const { status, action, index } = data;

    // Зупиняємо туторіал лише після завершення або пропуску
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }

    if (action === "start" || action === "next") {
      if (index === 0) {
        // Прокрутка до верху сторінки для першого кроку
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: "auto" });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      } else {
        const stepElement = document.querySelector(steps[index]?.target);
        if (stepElement) {
          const rect = stepElement.getBoundingClientRect();
          const offsetTop =
            window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
          window.scrollTo({
            top: offsetTop > 0 ? offsetTop : 0,
            behavior: "smooth",
          });
        }
      }
    }

    // Логування для налагодження
    console.log("Joyride event:", data);
  };

  useEffect(() => {
    adjustTooltipPosition();
  }, [run]);

  return (
    <>
      {/* Невидимий елемент на верху сторінки */}
      <div ref={topRef} data-tutorial="topRef"></div>
      
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        scrollToFirstStep={false} // Відключаємо автоматичне прокручування до першого кроку
        scrollOffset={100}        // Враховує висоту хедера
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            primaryColor: "#4caf50",
            zIndex: 10000,
            tooltipOffset: 20,  // Відступ для уникнення перекриття
            arrowColor: "#4caf50",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            spotlightPadding: 20,  // Додає відступи для уникнення виходу за екран
          },
        }}
        callback={handleJoyrideCallback}
      />

      {/* Кнопка запуску туторіалу */}
      <button
        className={styles.tutorialButton}
        onClick={startTutorial}
        data-tutorial="tutorialStartButton"
      >
        ❓
      </button>
    </>
  );
};

export default DocumentTutorial;