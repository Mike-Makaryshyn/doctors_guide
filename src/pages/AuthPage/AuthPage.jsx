import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import styles from "./AuthPage.module.scss"; // Переконайтесь, що цей файл існує

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Вхід успішний!");
      navigate("/dashboard");
    } catch (error) {
      alert(`Помилка: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Вхід через Google успішний!");
      navigate("/dashboard");
    } catch (error) {
      alert(`Помилка: ${error.message}`);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Вхід через Facebook успішний!");
      navigate("/dashboard");
    } catch (error) {
      alert(`Помилка: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Вхід</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.submitButton}>
          Увійти
        </button>
      </form>

      <button onClick={() => navigate("/auth/registration")} className={styles.switchButton}>
        Немає акаунту? Зареєструватися
      </button>

      <div className={styles.oauthButtons}>
        <button onClick={handleGoogleSignIn}>Увійти через Google</button>
        <button onClick={handleFacebookSignIn}>Увійти через Facebook</button>
      </div>
    </div>
  );
};

export default AuthPage;