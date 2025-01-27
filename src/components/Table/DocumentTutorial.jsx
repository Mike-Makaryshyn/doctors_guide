// src/components/Table/DocumentTutorial.jsx

import React, { useState, useEffect } from "react";
import Joyride, { EVENTS, STATUS } from "react-joyride";
import styles from "./DocumentTutorial.module.scss";

const DocumentTutorial = ({ category }) => {
  const [run, setRun] = useState(false);

  // Функція для ручного запуску туторіалу
  const startTutorial = () => {
    setRun(true);
  };

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
    if (!hasSeenTutorial) {
      setRun(true);
      localStorage.setItem("hasSeenTutorial", "true");
    }
  }, []);

  // Список кроків для туторіалу
  const steps = [
    {
      target: "[data-tutorial='mainTable']",
      content: "Це перша таблиця з обов’язковими документами для подачі заяви.",
      placement: "bottom", // Замість "center"
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
      content: "Цей хедер відповідає за наявність документу. Він необхідний для подачі заяви.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "auto",
        },
      },
    },
    {
      target: "[data-tutorial='header-apostile']",
      content: "Цей хедер відповідає за апостиль документу. Залежить від регіону.",
      placement: "auto-center",  // Автоматично розташовує підказку по центру
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
      content: "Цей хедер відповідає за нотаріальне завірення документу.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "auto",
        },
      },
    },
    {
      target: "[data-tutorial='header-translation']",
      content: "Цей хедер відповідає за переклад документу.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-ready_copies']",
      content: "Цей хедер відповідає за готові копії документу.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-sent']",
      content: "Цей хедер відповідає за відправку документу.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='header-links']",
      content: "Ці хедери відповідають за посилання на додаткові ресурси.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='secondTable']",
      content: "Це друга таблиця з додатковими документами.",
      placement: "top", // Можна використовувати "top" для кращого розміщення
      styles: {
        tooltip: {
          marginTop: "10px",
          maxWidth: "300px",
        },
      },
    },
    {
      target: "[data-tutorial='regionalLink']",
      content: "Це посилання відповідно до вибраного регіону.",
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
      content: "Це секція з опціональними документами. Ви можете додати їх, але вони не є обов’язковими.",
      placement: "auto", // Змінено на "auto"
      styles: {
        tooltip: {
          maxWidth: "300px",
          textAlign: "center",
        },
      },
    },
    {
      target: "[data-tutorial='printButton']",
      content: "Натисніть тут, щоб роздрукувати список документів.",
      placement: "top", // Замість "right" для уникнення перекриття
      styles: {
        tooltip: {
          marginLeft: "10px",
          maxWidth: "300px",
        },
      },
    },
    {
      target: "[data-tutorial='printModal']",
      content: "Це модальне вікно для друку документів. Воно завжди відображається по центру екрану.",
      placement: "center",
      disableBeacon: true,
      hideCloseButton: true,
      styles: {
        tooltip: {
          display: "none",
        },
      },
    },
  ];

  // Функція для коригування позиції підказки
  const adjustTooltipPosition = () => {
    const tooltips = document.querySelectorAll(".react-joyride__tooltip");
    tooltips.forEach((tooltip) => {
      const rect = tooltip.getBoundingClientRect();
      if (rect.top < 100) {
        tooltip.style.top = "120px";  // Встановити мінімальний відступ
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
      const stepElement = document.querySelector(steps[index].target);
      if (stepElement) {
        const rect = stepElement.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2);
        window.scrollTo({
          top: offsetTop > 0 ? offsetTop : 0,
          behavior: "smooth",
        });
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
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        scrollToFirstStep={true}
        scrollOffset={100}  // Враховує висоту хедера
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