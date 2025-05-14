import React, { useState } from "react";
import PropTypes from "prop-types";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import styles from "./AuthModal.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { FaGoogle } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  // Якщо не потрібне перенаправлення, можна видалити або закоментувати наступний рядок
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      alert(t.successLogin);
      onClose();
      // Видаляємо перенаправлення: navigate("/dashboard");
    } catch (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
      if (error) throw error;
      alert(t.successLogin);
      onClose();
      // Видаляємо перенаправлення: navigate("/dashboard");
    } catch (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    }
  };

  const handleRegistrationRedirect = () => {
    onClose(); // Закриваємо модальне вікно
    navigate("/auth/registration"); // Якщо потрібне перенаправлення на реєстрацію, можна залишити
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Кнопка закриття */}
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>{t.loginTitle}</h2>
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
          <button type="submit" className={styles.loginButton}>
            {t.loginButton}
          </button>
        </form>
        <div className={styles.oauthButtons}>
          <button onClick={handleGoogleSignIn} className={styles.googleButton}>
            <FaGoogle style={{ marginRight: "8px" }} />
            {t.googleLogin}
          </button>
        </div>
        <button className={styles.switchButton} onClick={handleRegistrationRedirect}>
          {t.noAccount}
        </button>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;