import React from "react";
import styles from "./styles.module.scss";

const NotAuthorizedView = ({ language, stages }) => {
  if (!stages || !Array.isArray(stages) || stages.length === 0) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{language === "en" ? "Path to Approbation" : "Шлях до апробації"}</h1>
          <p className={styles.subtitle}>
            {language === "en"
              ? "View the steps to approbation. Please register or log in to track your progress and unlock tasks!"
              : "Перегляньте етапи апробації. Зареєструйтесь або увійдіть, щоб відстежувати прогрес і розблокувати завдання!"}
          </p>
          <button
            className={styles.registerButton}
            onClick={() => (window.location.href = "/login")}
          >
            {language === "en" ? "Register / Log In" : "Реєстрація / Вхід"}
          </button>
        </header>
        <div className={styles.errorMessage}>
          {language === "en"
            ? "No stages available to display. Please check your connection or try again later."
            : "Етапи відсутні для відображення. Перевірте з'єднання або спробуйте пізніше."}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{language === "en" ? "Path to Approbation" : "Шлях до апробації"}</h1>
        <p className={styles.subtitle}>
          {language === "en"
            ? "View the steps to approbation. Please register or log in to track your progress and unlock tasks!"
            : "Перегляньте етапи апробації. Зареєструйтесь або увійдіть, щоб відстежувати прогрес і розблокувати завдання!"}
        </p>
        <button
          className={styles.registerButton}
          onClick={() => (window.location.href = "/login")}
        >
          {language === "en" ? "Register / Log In" : "Реєстрація / Вхід"}
        </button>
      </header>

      <div className={styles.stageBarHorizontal}>
        {stages.map((stage) => (
          <div key={stage.id} className={styles.stage}>
            <div className={styles.avatar}>
              <img
                src={`/icons/stage-${stage.id}.png`}
                alt={stage.title}
                className={styles.stageIcon}
              />
            </div>
            <h2 className={styles.stageTitle}>{stage.title}</h2>
            <p className={styles.stageDescription}>{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotAuthorizedView;