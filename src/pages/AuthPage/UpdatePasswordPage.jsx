import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import styles from './UpdatePasswordPage.module.scss';
import { useNavigate } from 'react-router-dom';

const UpdatePasswordPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      alert(`Fehler: ${error.message}`);
    } else {
      alert('Dein Passwort wurde erfolgreich geändert.');
      navigate('/auth');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Neues Passwort festlegen</h2>
      <form onSubmit={handleUpdate} className={styles.form}>
        <input
          type="password"
          placeholder="Neues Passwort"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Passwort ändern
        </button>
      </form>
    </div>
  );
};

export default UpdatePasswordPage;