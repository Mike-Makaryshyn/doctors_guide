import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import styles from './UpdatePasswordPage.module.scss';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const UpdatePasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Die Passwörter stimmen nicht überein.');
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