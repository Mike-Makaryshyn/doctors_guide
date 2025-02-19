import React from 'react';
import styles from './MobileCheckbox.module.scss';

const MobileCheckbox = ({ id, checked, onChange, label }) => {
  return (
    <label 
      className={`${styles.mobileCheckbox} ${checked ? styles.active : ''}`}
      onClick={onChange}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxIcon}>{label}</span>
    </label>
  );
};

export default MobileCheckbox;