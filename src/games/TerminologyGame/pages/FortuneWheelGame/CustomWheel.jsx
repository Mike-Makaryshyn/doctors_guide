import React, { useRef, useEffect, useState } from "react";

export default function CustomWheel({
  segments,
  onStopSpinning = () => {},
  size = 800,
  spinDuration = 3000,
  outerPointer = false,
}) {
  const canvasRef = useRef(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // Для анімованих меж (необов'язково)
  const [borderHue, setBorderHue] = useState(0);

  // Кут одного сегмента
  const arcSize = segments.length ? (2 * Math.PI) / segments.length : 0;

  // Анімація hue
  useEffect(() => {
    let animId;
    function animateHue() {
      setBorderHue((prev) => (prev + 1) % 360);
      animId = requestAnimationFrame(animateHue);
    }
    animId = requestAnimationFrame(animateHue);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Перемальовуємо коли currentAngle або segments змінились
  useEffect(() => {
    drawWheel();
  }, [currentAngle, segments, borderHue]);

  function drawWheel() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(currentAngle);

    segments.forEach((seg, i) => {
      const startAngle = i * arcSize;
      const endAngle = startAngle + arcSize;
      // Фон сегмента
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, cx, startAngle, endAngle);
      ctx.fillStyle = seg.color || "#ccc";
      ctx.fill();

      // Межа (анімована)
      ctx.strokeStyle = `hsl(${(borderHue + i * 30) % 360}, 100%, 50%)`;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Текст
      ctx.save();
      const textAngle = startAngle + arcSize / 2;
      ctx.rotate(textAngle);
      ctx.font = '14px "Poppins", sans-serif';
      ctx.fillStyle = "#000";
      ctx.textAlign = "right";
      ctx.fillText(seg.labelForWheel, cx * 0.9, 5);
      ctx.restore();
    });

    ctx.restore();
  }

  /** Запускає обертання */
  function spin() {
    if (isSpinning || !segments.length) return;
    setIsSpinning(true);

    // Випадковий індекс виграшного сегмента
    const randomIndex = Math.floor(Math.random() * segments.length);

    // Зверху колеса -> -Math.PI / 2
    const pointerAngle = -Math.PI / 2;
    // Центр обраного сегмента
    const centerOfSegment = randomIndex * arcSize + arcSize / 2;

    // Обчислюємо різницю
    let difference = pointerAngle - currentAngle - centerOfSegment;

    // Нормалізуємо difference, щоб була додатною
    while (difference < 0) {
      difference += 2 * Math.PI;
    }

    // Скільки обертів зробити
    const minFullSpins = 3; 
    const finalAngle = 2 * Math.PI * minFullSpins + difference;

    const startAngle = currentAngle;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      if (elapsed < spinDuration) {
        const progress = elapsed / spinDuration;
        // easing "easeOutCubic"
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrentAngle(startAngle + finalAngle * eased);
        requestAnimationFrame(animate);
      } else {
        setCurrentAngle(startAngle + finalAngle);
        setIsSpinning(false);
        // Кажемо, який сегмент випав
        onStopSpinning(randomIndex);
      }
    }
    requestAnimationFrame(animate);
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
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
      />

      {outerPointer && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -10px)",
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "#013b6e",
          color: "#fff",
          fontSize: 12,
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          animation: isSpinning ? "none" : "spinPulse 2s infinite",
        }}
      >
        SPIN
      </button>

      {/* Анімації */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: translate(-50%, -10px) scale(1); }
            50% { transform: translate(-50%, -10px) scale(1.2); }
            100% { transform: translate(-50%, -10px) scale(1); }
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