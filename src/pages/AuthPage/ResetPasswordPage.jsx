import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import styles from './ResetPasswordPage.module.scss';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { pathList } from '../../routes/path';
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(() => {
    const stored = localStorage.getItem("lastResetSent");
    return stored ? parseInt(stored, 10) : null;
  });
  const navigate = useNavigate();

  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  const siteUrl =
    (typeof process !== 'undefined' &&
      process.env.REACT_APP_SITE_URL) ||
    window.location.origin;

  useEffect(() => {
    if (lastSentTime) {
      const elapsed = Date.now() - lastSentTime;
      if (elapsed < 60000) {
        setDisabled(true);
        const timeout = setTimeout(() => {
          setDisabled(false);
          setLastSentTime(null);
          localStorage.removeItem("lastResetSent");
        }, 60000 - elapsed);
        return () => clearTimeout(timeout);
      } else {
        setDisabled(false);
        setLastSentTime(null);
        localStorage.removeItem("lastResetSent");
      }
    }
  }, [lastSentTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (disabled) return;
    setDisabled(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: `${siteUrl}/auth/update-password`,
});

      if (error) {
        if (error.status === 429) {
          alert(t.errorTooManyRequests);
        } else if (error.status === 504) {
          alert(t.errorServer);
        } else {
          alert(t.errorUnknown.replace("{{message}}", error.message));
        }
        setDisabled(false);
        return;
      }

      setSent(true);
      const now = Date.now();
      localStorage.setItem('lastResetSent', now.toString());
      setLastSentTime(now);
    } catch (err) {
      console.error('Unhandled reset error:', err);
      alert(t.errorUnexpected.replace("{{message}}", err.message));
      setDisabled(false);
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2>{t.resetTitle}</h2>
        {sent ? (
          <p>{t.resetSuccess}</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={disabled}
            >
              {t.sendLinkButton}
            </button>
          </form>
        )}
        <button onClick={() => navigate(pathList.auth.path)} className={styles.switchButton}>
          {t.backToLogin}
        </button>
      </div>
    </MainLayout>
  );
};

export default ResetPasswordPage;