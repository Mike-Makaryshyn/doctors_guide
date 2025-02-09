import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import styles from "./AuthPage.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage"; // Імпортуємо переклади
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Підключення вашого хуку
import MainLayout from "../../layouts/MainLayout/MainLayout";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { selectedLanguage } = useGetGlobalInfo(); // Отримуємо поточну мову
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE]; // Гарантуємо, що мова існує

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(t.successLogin);
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
      navigate("/dashboard");
    } catch (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    }
  };

  return ( <MainLayout>
  <div className={styles.container}>
      <h1>{t.loginTitle}</h1>
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

      <button
        onClick={() => navigate("/auth/registration")}
        className={styles.switchButton}
      >
        {t.noAccount}
      </button>

      <div className={styles.oauthButtons}>
        <button onClick={handleGoogleSignIn} className={styles.googleButton}>
          {t.googleLogin}
        </button>
        <button onClick={handleFacebookSignIn} className={styles.facebookButton}>
          {t.facebookLogin}
        </button>
      </div>
    </div>
  </MainLayout>
  
  );
};

export default AuthPage;