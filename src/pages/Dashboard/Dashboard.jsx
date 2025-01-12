// src/pages/Dashboard/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import ProgressBar from "./ProgressBar.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import AuthStatus from "../../components/AuthStatus/AuthStatus";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SavedCasesWidget from "../../components/SavedCasesWidget.jsx";
import { useCases } from "../../contexts/CasesContext"; // Імпорт CasesContext

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);

  // Використання CasesContext
  const {
    userCases,
    regionalCases,
    handleEdit,
    handleDelete,
    handleMarkCompleted,
    handleMarkDeferred,
    globalRegion,
  } = useCases();

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, "users", user.uid, "data", "documents");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setProgress(userData.progress || 0);
        }
      } catch (error) {
        console.error("Помилка завантаження прогресу:", error);
      }
    };

    fetchProgress();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Користувач успішно вийшов із системи.");
    } catch (error) {
      console.error("Помилка під час виходу з профілю:", error);
    }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
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
          <section style={{ marginBottom: "20px" }}>
            <h2>Основна інформація</h2>
            <p>
              <strong>Ім'я:</strong> {user?.displayName || "Не вказано"}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || "Не вказано"}
            </p>
            <p>
              <strong>Вибрана земля:</strong> {globalRegion || "Не вказано"}
            </p>
          </section>

          {/* Компонент ProgressBar */}
          <ProgressBar progress={progress} />

          {/* Віджет збережених випадків */}
          <SavedCasesWidget
            userCases={userCases}
            regionalCases={regionalCases}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onMarkCompleted={handleMarkCompleted}
            onMarkDeferred={handleMarkDeferred}
          />

          {/* Додатковий Контент */}
          <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
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
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default Dashboard;