// Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import ProgressBar from "./ProgressBar.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import AuthStatus from "../../components/AuthStatus/AuthStatus";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [progress, setProgress] = useState(0);
  const { selectedRegion } = useGetGlobalInfo();

  // Завантаження даних користувача
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid, "data", "documents");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);

          if (data.progress !== undefined) {
            setProgress(data.progress);
          } else {
            console.error("Поле `progress` відсутнє у Firestore.");
          }
        } else {
          console.log("Документ користувача не знайдено у Firestore");
        }
      }
    };

    fetchUserData();
  }, [user]);

  // Вихід із профілю
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Користувач успішно вийшов із системи.");
    } catch (error) {
      console.error("Помилка під час виходу з профілю:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div style={{ padding: "20px" }}>
        {/* Статус авторизації */}
        <AuthStatus />

        {/* Кнопка виходу */}
        <button
          onClick={handleSignOut}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Вийти з профілю
        </button>

        <h1>Особистий кабінет</h1>

        {/* Основна інформація */}
        {userData && (
          <section style={{ marginBottom: "20px" }}>
            <h2>Основна інформація</h2>
            <p>
              <strong>Ім'я:</strong> {userData.firstName} {userData.lastName}
            </p>
            <p>
              <strong>Спеціальність:</strong> {userData.specialty || "Не вказано"}
            </p>
            <p>
              <strong>Статус визнання:</strong>{" "}
              {userData.recognitionStatus || "Не вказано"}
            </p>
            <p>
              <strong>Країна:</strong> {userData.country || "Не вказано"}
            </p>
            <p>
              <strong>Локація:</strong> {userData.location || "Не вказано"}
            </p>
            <p>
              <strong>Вибрана земля:</strong> {selectedRegion || "Не вказано"}
            </p>
          </section>
        )}

        <ProgressBar progress={progress} />

        <div style={{ marginTop: "20px" }}>
          <Link
            to="/main-menu"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            До головного меню
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;