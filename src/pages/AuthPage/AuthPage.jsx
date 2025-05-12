import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import styles from "./AuthPage.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { FaGoogle } from "react-icons/fa";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    } else {
      alert(t.successLogin);
      navigate("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    alert("Google login not implemented");
  };

  return (
    <MainLayout>
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

        <div className={styles.oauthButtons}>
          <button onClick={handleGoogleSignIn} className={styles.googleButton}>
            <FaGoogle style={{ marginRight: "8px" }} />
            {t.googleLogin}
          </button>
        </div>

        {/* Кнопка для переходу до реєстрації */}
        <button
          onClick={() => navigate("/auth/registration")}
          className={styles.switchButton}
        >
          {t.noAccount}
        </button>
      </div>
    </MainLayout>
  );
};

export default AuthPage;