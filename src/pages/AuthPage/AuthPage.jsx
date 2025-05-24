import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import styles from "./AuthPage.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Function to restore an existing session by tokens
const restoreSession = async (access_token, refresh_token) => {
  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token
  });
  if (error) {
    console.error('Error restoring session:', error);
    return false;
  }
  return true;
};

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // On mount, try to restore session if tokens are in localStorage
  useEffect(() => {
    const access = localStorage.getItem("access_token");
    const refresh = localStorage.getItem("refresh_token");
    if (access && refresh) {
      restoreSession(access, refresh)
        .then(ok => {
          if (ok) {
            navigate("/dashboard");
          } else {
            // clear invalid tokens
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
          }
        })
        .catch(err => {
          console.error("Error restoring session:", err);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
        });
    }
  }, []);

  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(t.errorLogin.replace("{{message}}", error.message));
    } else {
      // store tokens
      localStorage.setItem("access_token", data.session.access_token);
      localStorage.setItem("refresh_token", data.session.refresh_token);
      alert(t.successLogin);
      navigate("/dashboard");
    }
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

        {/* Кнопка для переходу до реєстрації */}
        <button
          onClick={() => navigate("/auth/registration")}
          className={styles.switchButton}
        >
          {t.noAccount}
        </button>
        {/* Forgot Password button */}
        <button
          onClick={() => navigate("/auth/reset-password")}
          className={styles.switchButton}
        >
          {t.forgotPassword || "Passwort vergessen?"}
        </button>
      </div>
    </MainLayout>
  );
};

export default AuthPage;