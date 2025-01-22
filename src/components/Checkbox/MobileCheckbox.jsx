// src/components/Checkbox/MobileCheckbox.jsx

import React from 'react';
import styles from './MobileCheckbox.module.scss';

const MobileCheckbox = ({ id, checked, onChange, disabled, label }) => {
  return (
    <label className={styles.mobileCheckbox}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxIcon}>
        {/* Стандартний чекбокс без іконок */}
        <span className={styles.customCheckbox}></span>
      </span>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

export default MobileCheckbox;