// components/AuthPage/AuthModal.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthModal.module.scss";

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Авторизація потрібна</h2>
        <p>Будь ласка, увійдіть у систему, щоб виконати цю дію.</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;