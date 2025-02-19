// src/components/AuthModal/AuthModal.jsx

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./AuthModal.module.scss";

const AuthModal = ({
  isOpen,
  onRequestClose,
  title,
  message,
  primaryButtonText,
  onPrimaryButtonClick,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
    >
      {/* Хрестик для закриття модального вікна */}
      <button
        className={styles.modalCloseButton}
        onClick={onRequestClose}
        aria-label="Close modal"
      >
        <AiOutlineClose />
      </button>
      <h2 className={styles.modalTitle}>{title}</h2>
      <p className={styles.modalMessage}>{message}</p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.primaryButton}
          onClick={onPrimaryButtonClick}
        >
          {primaryButtonText}
        </button>
      </div>
    </Modal>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  onPrimaryButtonClick: PropTypes.func.isRequired,
};

export default AuthModal;