import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Для рендерингу HTML всередині Markdown
import remarkGfm from "remark-gfm"; // Для підтримки розширеного Markdown
import styles from "./AdditionalInfoModal.module.scss"; // Імпортуємо стилі як модуль

const AdditionalInfoModal = ({ isOpen, onClose, additionalInfo }) => {
  if (!isOpen) return null;

  console.log("Modal Props:", { additionalInfo });

  // Перевірка, що additionalInfo.text є рядком
  const markdownText =
    typeof additionalInfo.text === "string" ? additionalInfo.text : "Інформація недоступна.";
  console.log("Markdown Text:", markdownText);

  return (
    <div
      className={styles["modal-overlay"]}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        {/* Заголовок модального вікна */}
        <h2 id="info-modal-title" className={styles["modal-title"]}>
          {additionalInfo.title || ""}
        </h2>

        {/* Контент модального вікна з підтримкою Markdown */}
        <ReactMarkdown
          className={styles["modal-text"]}
          remarkPlugins={[remarkGfm]} // Підтримка таблиць, чекбоксів тощо
          rehypePlugins={[rehypeRaw]} // Дозволяє використання HTML всередині Markdown
        >
          {markdownText}
        </ReactMarkdown>

        {/* Кнопка закриття */}
        <button
          className={styles["close-button"]}
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

AdditionalInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Визначає, чи відкрите модальне вікно
  onClose: PropTypes.func.isRequired, // Функція закриття модального вікна
  additionalInfo: PropTypes.shape({
    text: PropTypes.string.isRequired, // Текст з Markdown
    type: PropTypes.string.isRequired, // Тип додаткової інформації
    title: PropTypes.string.isRequired, // Заголовок модального вікна
  }).isRequired,
};

export default AdditionalInfoModal;