import React, { useState } from 'react';
import styles from './styles.module.scss';

function ApprobationPage() {
  const steps = [
    {
      id: 1,
      title: 'Вивчення мови',
      content: (
        <>
          <h2>Крок 1: Вивчення мови</h2>
          <p>
            Досягнення рівня володіння мовою C1 є важливим кроком для роботи
            лікарем у Німеччині. Це дозволяє ефективно спілкуватися з пацієнтами,
            колегами та розуміти медичну документацію.
          </p>
          <ul>
            <li>Підготовка до мовного іспиту (наприклад, telc або Goethe).</li>
            <li>Відвідування курсів професійної мови для лікарів.</li>
            <li>Практика медичних термінів через книги, відео та симуляції.</li>
          </ul>
        </>
      ),
    },
    { id: 2, title: 'Підготовка документів', content: 'Збір та подача необхідних документів.' },
    { id: 3, title: 'Фаховий мовний іспит', content: 'Складання мовного іспиту для підтвердження знань.' },
    { id: 4, title: 'Робота/Стажування', content: 'Практичний досвід або стажування.' },
    { id: 5, title: 'Іспит на знання', content: 'Складання іспиту на знання медицини.' },
    { id: 6, title: 'Апробація', content: 'Отримання ліцензії на медичну практику.' },
  ];

  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (id) => {
    setActiveStep(id === activeStep ? null : id); // Відкривати/закривати контейнер
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>Шлях до апробації</h1>
        <p>Обирайте крок, щоб отримати детальну інформацію.</p>
      </header>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.id} className={styles.stepContainer}>
            <div
              className={`${styles.step} ${activeStep === step.id ? styles.active : ''}`}
              onClick={() => handleStepClick(step.id)}
            >
              {step.title}
            </div>
            {activeStep === step.id && (
              <div className={styles.stepContent}>
                {step.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApprobationPage;