// src/components/AdditionalInfoModal.jsx

import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; 
import remarkGfm from "remark-gfm"; 
import styles from "./AdditionalInfoModal.module.scss"; 

/**
 * Додаткова функція порівняння пропсів (щоб не ререндеритись щоразу)
 */
function arePropsEqual(prevProps, nextProps) {
  // Якщо isOpen змінилось – мусимо перемалювати
  if (prevProps.isOpen !== nextProps.isOpen) return false;
  // Якщо text/title/type змінились – також
  if (prevProps.additionalInfo.text !== nextProps.additionalInfo.text) return false;
  if (prevProps.additionalInfo.title !== nextProps.additionalInfo.title) return false;
  if (prevProps.additionalInfo.type !== nextProps.additionalInfo.type) return false;

  return true;
}

const AdditionalInfoModal = ({ isOpen, onClose, additionalInfo }) => {
  if (!isOpen) return null;

  // Лог один раз при монтуванні
  useEffect(() => {
    console.log("[AdditionalInfoModal] Opened with:", additionalInfo);
    return () => {
      console.log("[AdditionalInfoModal] Closed.");
    };
  }, [additionalInfo]);

  // Перевірка, що additionalInfo.text є рядком
  const markdownText =
    typeof additionalInfo.text === "string" ? additionalInfo.text : "Інформація недоступна.";

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
        <div className={styles["modal-header"]}>
          <h2 id="info-modal-title" className={styles["modal-title"]}>
            {additionalInfo.title || ""}
          </h2>
          {/* Кнопка закриття */}
          <button
            className={styles["close-button"]}
            onClick={onClose}
            aria-label="Закрити модальне вікно"
          >
            {/* SVG іконка */}
            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="1" x2="13" y2="13" stroke="#333" strokeWidth="2"/>
              <line x1="13" y1="1" x2="1" y2="13" stroke="#333" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* Контент модального вікна з підтримкою Markdown */}
        <div className={styles["modal-body"]}>
          <ReactMarkdown
            className={styles["modal-text"]}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {markdownText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

AdditionalInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  additionalInfo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// Обгортаємо у React.memo + порівняння пропсів
export default memo(AdditionalInfoModal, arePropsEqual);