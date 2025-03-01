import React, { useEffect, useRef } from "react";
import styles from "./MedicationFlashcardGame.module.scss";

const FloatingExamples = ({ examples }) => {
  const containerRef = useRef(null);

  // Refs для позиций, скоростей, вращений и скоростей вращения
  const positionsRef = useRef([]);
  const velocitiesRef = useRef([]);
  const rotationsRef = useRef([]);
  const rotationSpeedsRef = useRef([]);

  useEffect(() => {
    // Инициализация значений для каждого примера
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

    // Получаем все элементы, которым нужно обновлять стиль
    const exampleElements = containerRef.current.querySelectorAll(`.${styles.floatingExample}`);

    let frameId;
    const animate = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;

      positionsRef.current.forEach((pos, i) => {
        const vel = velocitiesRef.current[i];

        // Обновляем позицию
        pos.x += vel.vx;
        pos.y += vel.vy;

        // Проверка горизонтальных границ
        if (pos.x < 0) {
          pos.x = 0;
          vel.vx *= -1;
        } else if (pos.x > w - 80) {
          pos.x = w - 80;
          vel.vx *= -1;
        }

        // Проверка вертикальных границ
        if (pos.y < 0) {
          pos.y = 0;
          vel.vy *= -1;
        } else if (pos.y > h - 30) {
          pos.y = h - 30;
          vel.vy *= -1;
        }

        // Обновляем вращение
        rotationsRef.current[i] += rotationSpeedsRef.current[i];

        // Обновляем стиль элемента напрямую
        if (exampleElements[i]) {
          exampleElements[i].style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${rotationsRef.current[i]}deg)`;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Очистка анимации при размонтировании компонента
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