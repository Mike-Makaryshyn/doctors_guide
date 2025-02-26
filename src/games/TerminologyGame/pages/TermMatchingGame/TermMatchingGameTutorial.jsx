/* ========== TermMatchingGameTutorial.jsx ========== */

import React, { useState, useEffect } from "react";
import Joyride, { STATUS } from "react-joyride";

// Якщо хочете підтримувати декілька мов, можна створити окремий файл перекладів
// import tutorialTranslations from "./TermMatchingGameTutorialTranslations";

const TermMatchingGameTutorial = ({ run, onFinish }) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps([
      {
        target: "body",
        content: "Це гра з об’єднання термінів. Оберіть термін зліва, потім відповідне визначення справа.",
        placement: "center",
      },
      {
        target: '[data-tutorial="termsColumn"]',
        content: "Ліва колонка – тут ваші терміни або скорочення.",
        placement: "right",
      },
      {
        target: '[data-tutorial="definitionsColumn"]',
        content: "Права колонка – тут визначення або розшифровки.",
        placement: "left",
      },
    ]);
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      // Зберігаємо в localStorage, що туторіал пройдений
      localStorage.setItem("termMatchingGameTutorialCompleted", "true");
      if (typeof onFinish === "function") {
        onFinish();
      }
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous={true}
      showSkipButton={true}
      locale={{
        back: "Назад",
        close: "Закрити",
        last: "Готово",
        next: "Далі",
        skip: "Пропустити",
      }}
      scrollToFirstStep={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#023c6f",
        },
      }}
    />
  );
};

export default TermMatchingGameTutorial;