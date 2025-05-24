import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import styles from './UpdatePasswordPage.module.scss';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const UpdatePasswordPage = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const type = params.get('type');
    if (type === 'recovery' && token) {
      supabase.auth.verifyOtp({
        token,
        type,
        options: { storeSession: true }
      }).then(({ data, error }) => {
        if (error) {
          console.error('Error verifying recovery token:', error);
          setVerificationError(error.message);
        } else {
          // persist session tokens for all browsers
          if (data?.session) {
            const { access_token, refresh_token } = data.session;
            // store tokens in localStorage
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
            // also set session explicitly
            supabase.auth.setSession({ access_token, refresh_token });
          }
          setIsVerified(true);
        }
      }).catch(err => {
        console.error('Unexpected verifyOtp error:', err);
        setVerificationError(err.message);
      }).finally(() => {
        setIsVerifying(false);
      });
    } else {
      setVerificationError('Ungültiger oder fehlender Token.');
      setIsVerifying(false);
    }
  }, []);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Die Passwörter stimmen nicht überein.');
      return;
    }
    const session = await supabase.auth.getSession();
    if (!session.data.session) {
      alert('Ihre Sitzung ist abgelaufen. Bitte fordern Sie einen neuen Link an.');
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      alert(`Fehler: ${error.message}`);
    } else {
      alert('Dein Passwort wurde erfolgreich geändert.');
      navigate('/auth');
    }
  };

  if (isVerifying) {
    return (
      <MainLayout>
        <div className={styles.container}>
          <p>Überprüfe Token...</p>
        </div>
      </MainLayout>
    );
  }
  if (verificationError) {
    return (
      <MainLayout>
        <div className={styles.container}>
          <p>Fehler bei der Token-Überprüfung: {verificationError}</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2>Neues Passwort festlegen</h2>
        <form onSubmit={handleUpdate} className={styles.form}>
          <input
            type="password"
            placeholder="Neues Passwort"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Passwort bestätigen"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Passwort ändern
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default UpdatePasswordPage;