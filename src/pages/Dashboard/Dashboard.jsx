import React, { useEffect, useState, useContext } from "react";
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
import RegistrationTile from "../../pages/AuthPage/RegistrationTile.jsx";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import styles from "./Dashboard.module.scss";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [userData, setUserData] = useState(null);
  const { fetchFirebaseCases } = useContext(DataSourceContext);

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
          <div className={styles.dashboardContent}>
            {/* Плитка з особистими даними */}
            {userData && (
              <div className={styles.userTile}>
                <RegistrationTile data={userData} />
              </div>
            )}

            {/* Прогрес-бар */}
            <div className={styles.progressBar}>
              <ProgressBar progress={progress} />
            </div>

            {/* Кнопка у вигляді кружка */}
            <div className={styles.circularButtonWrapper}>
              <div
                className={styles.circularButton}
                onClick={() => (window.location.href = "/custom-map")}
              >
                <span>Germany Lands</span>
              </div>
            </div>

            {/* Saved Cases Widget */}
            <SavedCasesWidget />
          </div>

          {/* Додатковий контент */}
          <div className={styles.additionalContent}>
            <Link to="/main_menu" className={styles.mainMenuLink}>
              До головного меню
            </Link>
          </div>

          {/* Кнопка виходу */}
          <div className={styles.bottomControls}>
            <button
              onClick={handleSignOut}
              className={styles.signOutButton}
            >
              Вийти з профілю
            </button>
          </div>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default Dashboard;