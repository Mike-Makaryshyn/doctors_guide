// src/components/Checkbox/Checkbox.jsx

import React from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox({
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
  labelRight
}) {
  return (
    <label
      htmlFor={id}
      className={`${styles.checkboxLabel} ${labelRight ? styles.labelRight : ''}`}
      style={{ opacity: disabled ? 0.6 : 1 }}
    >
      {/* Відображення тексту зліва або справа */}
      {!labelRight && <span className={styles.checkboxText}>{label}</span>}

      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkboxInput}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <div className={styles.checkboxCustom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20.285,6.708l-11.57,11.57l-5.285-5.285l1.414-1.414l3.871,3.871l10.157-10.157L20.285,6.708z"/>
        </svg>
      </div>

      {labelRight && <span className={styles.checkboxText}>{label}</span>}
    </label>
  );
}