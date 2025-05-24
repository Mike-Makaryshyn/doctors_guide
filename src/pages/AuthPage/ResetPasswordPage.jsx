import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import styles from './ResetPasswordPage.module.scss';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(() => {
    const stored = localStorage.getItem("lastResetSent");
    return stored ? parseInt(stored, 10) : null;
  });
  const navigate = useNavigate();

  const siteUrl = process.env.REACT_APP_SITE_URL;

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

    // захист від подвійних кліків
    if (disabled) return;
    setDisabled(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${siteUrl}/auth/update-password`,
      });

      if (error) {
        if (error.status === 429) {
          alert('Забагато запитів – спробуйте ще раз через годину.');
        } else if (error.status === 504) {
          alert('Сервер не відповів – спробуйте пізніше.');
        } else {
          alert(`Помилка: ${error.message || JSON.stringify(error)}`);
        }
        // якщо запит не пройшов, знімаємо блокування кнопки
        setDisabled(false);
        return;
      }

      // успішно: показуємо повідомлення та запускаємо 60‑секундний таймер
      setSent(true);
      const now = Date.now();
      localStorage.setItem('lastResetSent', now.toString());
      setLastSentTime(now);
    } catch (err) {
      console.error('Unhandled reset error:', err);
      alert('Непередбачена помилка: ' + err.message);
      setDisabled(false);
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2>Passwort zurücksetzen</h2>
        {sent ? (
          <p>Wir haben dir eine E-Mail mit dem Link zum Zurücksetzen gesendet.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Deine E-Mail"
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
              Link senden
            </button>
          </form>
        )}
        <button onClick={() => navigate('/auth')} className={styles.switchButton}>
          Zurück zur Anmeldung
        </button>
      </div>
    </MainLayout>
  );
};

export default ResetPasswordPage;