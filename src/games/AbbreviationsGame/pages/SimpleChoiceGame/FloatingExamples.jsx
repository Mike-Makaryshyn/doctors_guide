// doctors_guide/src/games/MedicationsGame/pages/MedicationSimpleChoiceGame/FloatingExamples.jsx

import React, { useEffect, useRef } from "react";
import styles from "./MedicationSimpleChoiceGame.module.scss"; // Використовуємо стилі FlashCard Game

const FloatingExamples = ({ examples }) => {
  const containerRef = useRef(null);

  // Refs для позицій, швидкостей, обертання та швидкостей обертання
  const positionsRef = useRef([]);
  const velocitiesRef = useRef([]);
  const rotationsRef = useRef([]);
  const rotationSpeedsRef = useRef([]);

  useEffect(() => {
    // Ініціалізація значень для кожного прикладу
    positionsRef.current = examples.map(() => ({
      x: Math.random() * 500,
      y: Math.random() * 300,
    }));
    velocitiesRef.current = examples.map(() => ({
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
    rotationsRef.current = examples.map(() => Math.random() * 360);
    rotationSpeedsRef.current = examples.map(() => (Math.random() - 0.5) * 2);

    // Отримання всіх елементів, для яких оновлюватимемо стиль
    const exampleElements = containerRef.current.querySelectorAll(`.${styles.floatingExample}`);

    let frameId;
    const animate = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;

      positionsRef.current.forEach((pos, i) => {
        const vel = velocitiesRef.current[i];

        // Оновлюємо позицію
        pos.x += vel.vx;
        pos.y += vel.vy;

        // Перевірка горизонтальних меж
        if (pos.x < 0) {
          pos.x = 0;
          vel.vx *= -1;
        } else if (pos.x > w - 80) {
          pos.x = w - 80;
          vel.vx *= -1;
        }

        // Перевірка вертикальних меж
        if (pos.y < 0) {
          pos.y = 0;
          vel.vy *= -1;
        } else if (pos.y > h - 30) {
          pos.y = h - 30;
          vel.vy *= -1;
        }

        // Оновлюємо обертання
        rotationsRef.current[i] += rotationSpeedsRef.current[i];

        // Застосування оновленого стилю до елемента
        if (exampleElements[i]) {
          exampleElements[i].style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${rotationsRef.current[i]}deg)`;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Очистка анімації при розмонтуванні компонента
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [examples]);

  return (
    <div className={styles.floatingExamples} ref={containerRef}>
      {examples.map((ex, i) => (
        <div key={i} className={styles.floatingExample}>
          {ex}
        </div>
      ))}
    </div>
  );
};

export default FloatingExamples;