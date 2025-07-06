import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import styles from "./AuthPage.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import bg from '../../assets/hintergrungAuth-2.svg';

// Function to restore an existing session by tokens
const restoreSession = async (access_token, refresh_token) => {
  if (!supabase) {
    console.warn('Supabase is not configured, cannot restore session');
    return false;
  }
  
  try {
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token
    });
    if (error) {
      console.error('Error restoring session:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error restoring session:', error);
    return false;
  }
};

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
  }, [navigate]);

  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check if Supabase is configured
    if (!supabase) {
      setLoginError("Supabase ist nicht konfiguriert. Bitte setzen Sie die Umgebungsvariablen VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRef.current.setCustomValidity("");
    if (!emailRegex.test(email)) {
      emailRef.current.setCustomValidity(t.invalidEmailFormat);
      emailRef.current.reportValidity();
      return;
    }
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        const errorMessage = error?.message?.toLowerCase?.() || "";
        const msg = t.invalidCredentials;

        setLoginError(error.message || msg);

        emailRef.current.setCustomValidity("");
        passwordRef.current.setCustomValidity("");

        if (errorMessage.includes("email") || errorMessage.includes("credentials")) {
          emailRef.current.setCustomValidity(msg);
          emailRef.current.reportValidity();
        } else if (errorMessage.includes("password")) {
          passwordRef.current.setCustomValidity(msg);
          passwordRef.current.reportValidity();
        } else {
          // fallback
          passwordRef.current.setCustomValidity(msg);
          passwordRef.current.reportValidity();
        }
        return;
      } else {
        // Validate session data before storing
        if (data?.session?.access_token && data?.session?.refresh_token) {
          localStorage.setItem("access_token", data.session.access_token);
          localStorage.setItem("refresh_token", data.session.refresh_token);
          navigate("/dashboard");
        } else {
          setLoginError("Ungültige Sitzungsdaten erhalten");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <MainLayout>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
              >
          <h1>{t.loginTitle}</h1>
          {loginError && (
            <div className={styles.errorMessage} style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin} className={styles.form} noValidate>
          <input
            ref={emailRef}
            type="text"
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              emailRef.current.setCustomValidity("");
            }}
            onBlur={(e) => {
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailPattern.test(e.target.value)) {
                e.target.setCustomValidity(t.invalidEmailFormat);
                e.target.reportValidity();
              } else {
                e.target.setCustomValidity("");
              }
            }}
            onInput={(e) => {
              e.target.setCustomValidity("");
            }}
            required
            className={styles.input}
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder={t.passwordPlaceholder}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              passwordRef.current.setCustomValidity("");
            }}
            required
            className={styles.input}
            autoComplete="current-password"
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
          {t.forgotPassword}
        </button>
      </div>
    </MainLayout>
  );
};

export default AuthPage;