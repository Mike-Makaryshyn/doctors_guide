import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import styles from "./AuthModal.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage"; // Імпортуємо переклади
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Підключення хуку для мови

const AuthModal = ({ isOpen, onClose, navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { selectedLanguage } = useGetGlobalInfo(); // Отримуємо поточну мову
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE]; // Динамічні переклади

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(t.successLogin);
      onClose();
      navigate("/dashboard");
    } catch (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert(t.successLogin);
      onClose();
      navigate("/dashboard");
    } catch (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert(t.successLogin);
      onClose();
      navigate("/dashboard");
    } catch (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    }
  };

  const handleRegistrationRedirect = () => {
    onClose(); // Закриваємо модальне вікно
    navigate("/auth/registration"); // Переходимо на сторінку реєстрації
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{t.loginTitle}</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder={t.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            {t.loginButton}
          </button>
        </form>
        <div className={styles.oauthButtons}>
          <button onClick={handleGoogleSignIn}>{t.googleLogin}</button>
          <button onClick={handleFacebookSignIn}>{t.facebookLogin}</button>
        </div>
        <button
          className={styles.switchButton}
          onClick={handleRegistrationRedirect} // Використовуємо окрему функцію для перенаправлення
        >
          {t.noAccount}
        </button>
        <button onClick={onClose} className={styles.closeButton}>
          {t.closeButton || "Закрити"}
        </button>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default AuthModal;