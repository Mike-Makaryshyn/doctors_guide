import React, { useRef, useEffect, useState } from "react";

export default function CustomWheel({
  segments,
  onStopSpinning = () => {},
  size = 800,
  spinDuration = 3000,
  outerPointer = false,
}) {
  const canvasRef = useRef(null);

  // Кут колеса
  const [currentAngle, setCurrentAngle] = useState(0);

  // Чи триває зараз анімація обертання
  const [isSpinning, setIsSpinning] = useState(false);

  // Індекс сегмента, який «блимає» (ефект пробігання)
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);

  // Кут одного сегмента (2π / кількість)
  const arcSize = segments.length ? (2 * Math.PI) / segments.length : 0;

  // Дефолтні кольори, якщо у segments не задано `color`
  const defaultColors = [
    "#FFB6C1", "#ADD8E6", "#90EE90", "#F0E68C",
    "#FFA07A", "#DDA0DD", "#87CEFA", "#FF69B4"
  ];

  // Якщо не крутиться – підсвічуємо наступний сегмент кожні 500 мс
  useEffect(() => {
    if (!isSpinning && segments.length) {
      const intervalId = setInterval(() => {
        setActiveSegmentIndex((prev) => (prev + 1) % segments.length);
      }, 500);
      return () => clearInterval(intervalId);
    }
  }, [isSpinning, segments.length]);

  // Ініціалізація canvas для HiDPI (ретина)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    drawWheel();
    // eslint-disable-next-line
  }, [size]);

  // Перемальовуємо при зміні кута або activeSegmentIndex
  useEffect(() => {
    drawWheel();
  }, [currentAngle, activeSegmentIndex, segments]);

  /** Малюємо колесо */
  function drawWheel() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const w = size;
    const h = size;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(currentAngle);

    segments.forEach((seg, i) => {
      const startAngle = i * arcSize;
      const endAngle = startAngle + arcSize;

      const baseColor = seg.color || defaultColors[i % defaultColors.length];
      // Трохи освітлюємо, якщо це активний (блимаючий) сегмент
      const fillColor =
        i === activeSegmentIndex ? lightenColor(baseColor, 0.3) : baseColor;

      // Сегмент
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, cx, startAngle, endAngle);
      ctx.fillStyle = fillColor;
      ctx.fill();

      // Обводка
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Текст
      ctx.save();
      const textAngle = startAngle + arcSize / 2;
      ctx.rotate(textAngle);
      ctx.font = 'bold 15px "Poppins", sans-serif';
      ctx.fillStyle = "#000";
      ctx.textAlign = "right";
      ctx.fillText(seg.labelForWheel, cx * 0.9, 5);
      ctx.restore();
    });

    ctx.restore();
  }

  /**
   * Запускаємо обертання (за годинниковою стрілкою).
   * По завершенні викликаємо onStopSpinning(winnerIndex).
   */
  function spin() {
    if (isSpinning || !segments.length) return;
    setIsSpinning(true);

    // Випадковий індекс сегмента
    const randomIndex = Math.floor(Math.random() * segments.length);

    // Кут стрілки (12-та година) => -90° => -Math.PI/2
    const pointerAngle = -Math.PI / 2;

    // Нормалізуємо currentAngle до [0, 2π)
    let normalizedAngle = currentAngle % (2 * Math.PI);
    if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI;

    // Кут центру сегмента
    const centerOfSegment = randomIndex * arcSize + arcSize / 2;

    // Різниця, аби цей сегмент потрапив на 12:00
    let difference = pointerAngle - normalizedAngle - centerOfSegment;
    while (difference < 0) {
      difference += 2 * Math.PI;
    }

    // Мінімум 3 повних оберти
    const minFullSpins = 3;

    // Позитивний кут => колесо обертається за годинниковою стрілкою
    // Якщо хочете у протилежний бік – див. пояснення нижче.
    const finalAngle = 2 * Math.PI * minFullSpins + difference;

    const startAngle = currentAngle;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      if (elapsed < spinDuration) {
        const progress = elapsed / spinDuration;
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrentAngle(startAngle + finalAngle * eased);
        requestAnimationFrame(animate);
      } else {
        // Кінець
        setCurrentAngle(startAngle + finalAngle);
        setIsSpinning(false);
        // Повідомляємо, який сегмент виграв
        onStopSpinning(randomIndex);
      }
    }

    requestAnimationFrame(animate);
  }

  /** Освітлити колір (наблизити до білого) */
  function lightenColor(hex, factor) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const newR = Math.round(r + (255 - r) * factor);
    const newG = Math.round(g + (255 - g) * factor);
    const newB = Math.round(b + (255 - b) * factor);

    return `rgb(${newR}, ${newG}, ${newB})`;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: size,
        aspectRatio: "1 / 1",
        margin: "0 auto",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
      />

      {/* Стрілка зверху */}
      {outerPointer && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -12px)",
            zIndex: 2,
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "35px solid red",
            animation: isSpinning ? "pulse 0.5s infinite ease-in-out" : "none",
          }}
        />
      )}

      {/* Кнопка SPIN */}
      <button
        onClick={spin}
        disabled={isSpinning || !segments.length}
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 45,
          height: 45,
          borderRadius: "50%",
          backgroundColor: "#013b6e",
          color: "#fff",
          fontSize: 12,
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          animation: !isSpinning ? "spinPulse 2s infinite" : "none",
        }}
      >
        SPIN
      </button>

      {/* Анімації */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: translate(-50%, -12px) scale(1); }
            50% { transform: translate(-50%, -12px) scale(1.2); }
            100% { transform: translate(-50%, -12px) scale(1); }
          }
          @keyframes spinPulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
        `}
      </style>
    </div>
  );
}