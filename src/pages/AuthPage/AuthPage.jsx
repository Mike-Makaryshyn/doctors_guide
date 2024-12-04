import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [recognitionStatus, setRecognitionStatus] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Навігація

  // Вхід або реєстрація через Email/Password
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Вхід успішний!");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        // Збереження додаткових даних у Firestore
        await setDoc(doc(db, "users", user.uid), {
          firstName,
          lastName,
          email,
          specialty,
          country,
          location,
          recognitionStatus,
        });
        alert("Реєстрація успішна!");
      }
      navigate("/dashboard"); // Перенаправлення
    } catch (error) {
      alert(`Помилка: ${error.message}`);
    }
  };

  // Вхід через Google
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

  // Вхід через Facebook
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isLogin ? "Вхід" : "Реєстрація"}</h1>
      <form onSubmit={handleAuth}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Ім'я"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
            <input
              type="text"
              placeholder="Прізвище"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
            <input
              type="text"
              placeholder="Спеціальність"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
            <input
              type="text"
              placeholder="Країна походження"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
            <input
              type="text"
              placeholder="Місце проживання"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
            <input
              type="text"
              placeholder="Статус визнання"
              value={recognitionStatus}
              onChange={(e) => setRecognitionStatus(e.target.value)}
              required
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isLogin ? "Увійти" : "Зареєструватися"}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#95a5a6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        {isLogin ? "Немає акаунту? Зареєструватися" : "Вже є акаунт? Увійти"}
      </button>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleGoogleSignIn}
          style={{
            padding: "10px 20px",
            backgroundColor: "#db4437",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          Увійти через Google
        </button>
        <button
          onClick={handleFacebookSignIn}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4267B2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          Увійти через Facebook
        </button>
      </div>
    </div>
  );
};

export default AuthPage;