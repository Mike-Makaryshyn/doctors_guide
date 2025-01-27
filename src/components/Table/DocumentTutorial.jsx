// src/components/Table/DocumentTutorial.jsx

import React, { useState, useEffect, useRef } from "react";
import Joyride, { STATUS } from "react-joyride";
import styles from "./DocumentTutorial.module.scss";
import tutorialTranslations from "../../constants/DocumentTutorialtransaltion"; // Імпорт перекладів
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Імпорт хука для глобальної інформації
import useIsMobile from "../../hooks/useIsMobile"; // Імпорт хука для визначення мобільного пристрою

const DocumentTutorial = ({ category }) => {
  const [run, setRun] = useState(false);
  const { selectedLanguage: language = "en" } = useGetGlobalInfo(); // Отримання поточної мови
  const topRef = useRef(null); // Створення ref до верхнього елемента
  const isMobile = useIsMobile(); // Визначення типу пристрою

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
  const desktopSteps = [
    {
      target: "[data-tutorial='mainTable']",
      content:
        tutorialTranslations[language]?.steps.mainTable ||
        "Default content",
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
      target: "[data-tutorial='progressBar']",
      content:
        tutorialTranslations[language]?.steps.progressBar ||
        "This is the progress bar showing your completion status.",
      placement: "bottom",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-is_exist']",
      content: tutorialTranslations[language]?.steps.is_exist || "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='header-apostile']",
      content:
        tutorialTranslations[language]?.steps.header_apostile ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.header_notary ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.header_translation ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.header_ready_copies ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.header_sent ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.header_links ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.secondTable ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.regionalLink ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.optionalDocumentsSection ||
        "Default content",
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
      content:
        tutorialTranslations[language]?.steps.printButton ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          marginLeft: "10px",
          maxWidth: "300px",
        },
      },
    },
  ];

  const mobileSteps = [
    {
      target: "[data-tutorial='firstTile']", // Перший тайл
      content:
        tutorialTranslations[language]?.steps.mobile.firstTile ||
        "Default content",
      placement: "bottom",
      disableBeacon: true,
      spotlightClicks: true,
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='progressBar']",
      content:
        tutorialTranslations[language]?.steps.progressBar ||
        "This is the progress bar showing your completion status.",
      placement: "bottom",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='secondTile-checkboxes']", // Другий тайл з чекбоксами
      content:
        tutorialTranslations[language]?.steps.mobile.secondTileCheckboxes ||
        "Default content",
      placement: "bottom",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='is_exist']",
      content:
        tutorialTranslations[language]?.steps.mobile.is_exist ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='apostile']",
      content:
        tutorialTranslations[language]?.steps.mobile.apostile ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='notary']",
      content:
        tutorialTranslations[language]?.steps.mobile.notary ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='translation']",
      content:
        tutorialTranslations[language]?.steps.mobile.translation ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='ready_copies']",
      content:
        tutorialTranslations[language]?.steps.mobile.ready_copies ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='sent']",
      content:
        tutorialTranslations[language]?.steps.mobile.sent ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "250px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='documentSecondTile-3']", // Tile в DocumentSecond
      content:
        tutorialTranslations[language]?.steps.mobile.documentSecondTile_3 ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='optionalDocumentsSection']",
      content:
        tutorialTranslations[language]?.steps.mobile.optionalDocumentsSection ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "left",
        },
      },
    },
    {
      target: "[data-tutorial='printButton']",
      content:
        tutorialTranslations[language]?.steps.mobile.printButton ||
        "Default content",
      placement: "top",
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
      disableScroll: true,
      offset: 20,
    },
  ];

  const steps = isMobile ? mobileSteps : desktopSteps;

  // Колбек для обробки подій туторіалу
  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);

      // Прокрутка до верху сторінки після завершення туторіалу
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Невидимий елемент на верху сторінки */}
      <div ref={topRef} data-tutorial="topRef"></div>

      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        scrollToFirstStep={false} // Відключаємо автоматичне прокручування до першого кроку
        scrollOffset={100} // Враховує висоту хедера
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            primaryColor: "#4caf50",
            zIndex: 10000,
            tooltipOffset: 20, // Відступ для уникнення перекриття
            arrowColor: "#4caf50",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            spotlightPadding: 20, // Додає відступи для уникнення виходу за екран
            transition: "opacity 0.3s ease, transform 0.3s ease", // Плавніша анімація
          },
          // Видаляємо всі класові імена, щоб уникнути помилок
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