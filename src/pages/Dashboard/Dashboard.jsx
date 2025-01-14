// src/pages/Dashboard/Dashboard.jsx

import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import ProgressBar from "./ProgressBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import AuthStatus from "../../components/AuthStatus/AuthStatus";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SavedCasesWidget from "../../components/SavedCasesWidget.jsx";
import RegistrationTile from "../../pages/AuthPage/RegistrationTile.jsx"; // Імпорт RegistrationTile
import { DataSourceContext } from "../../contexts/DataSourceContext"; // Імпорт DataSourceContext
import styles from "./Dashboard.module.scss"; // Імпорт стилів
import { toast } from "react-toastify";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [userData, setUserData] = useState(null); // Стан для даних користувача
  const navigate = useNavigate(); // Ініціалізація useNavigate
  const { fetchFirebaseCases } = useContext(DataSourceContext); // Отримання fetchFirebaseCases з DataSourceContext

  // Стан спінера
  const [navigating, setNavigating] = useState(false);

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
        toast.error("Fehler beim Laden des Fortschritts.");
      }
    };

    const fetchUserData = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, "users", user.uid, "userData", "data");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("Дані користувача не знайдено.");
        }
      } catch (error) {
        console.error("Помилка завантаження даних користувача:", error);
        toast.error("Fehler beim Laden der Benutzerdaten.");
      }
    };

    fetchProgress();
    fetchUserData();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Користувач успішно вийшов із системи.");
    } catch (error) {
      console.error("Помилка під час виходу з профілю:", error);
      toast.error("Fehler beim Ausloggen.");
    }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          {/* Статус аутентифікації */}
          <AuthStatus />

          {/* Кнопка виходу */}
          <button
            onClick={handleSignOut}
            className={styles.signOutButton} // Використання CSS класу для стилізації
          >
            Вийти з профілю
          </button>

          <h1>Особистий кабінет</h1>

          {/* Основна інформація */}
          <section className={styles.mainInfo}>
            <h2>Основна інформація</h2>
            <p>
              <strong>Ім'я:</strong> {user?.displayName || "Не вказано"}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || "Не вказано"}
            </p>

            {/* Плитка з даними користувача */}
            {userData && <RegistrationTile data={userData} />}
          </section>

          {/* Прогрес-бар */}
          <ProgressBar progress={progress} />

          {/* Saved Cases Widget */}
          <SavedCasesWidget />

          {/* Додатковий контент */}
          <div className={styles.additionalContent}>
            <Link to="/main-menu" className={styles.mainMenuLink}>
              До головного меню
            </Link>
          </div>

          {/* Спінер під час навігації */}
          {navigating && (
            <div className={styles.spinnerWrapper}>
              <div className={styles.spinner}></div>
            </div>
          )}
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default Dashboard;