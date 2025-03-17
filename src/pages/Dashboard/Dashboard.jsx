import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import ProgressBar from "./ProgressBar.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SavedCasesWidget from "../../components/SavedCasesWidget.jsx";
import RegistrationTile from "../../pages/AuthPage/RegistrationTile.jsx";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import styles from "./Dashboard.module.scss";
import { toast } from "react-toastify";
import StageTasksWidget from "../../components/StageTasksWidget.jsx";
import Avatar from "../../components/Avatar/Avatar.jsx";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [userData, setUserData] = useState(null);
  const [activeStage, setActiveStage] = useState(null);
  const { fetchFirebaseCases } = useContext(DataSourceContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid, "userData", "data"));
        const progressDoc = await getDoc(doc(db, "users", user.uid, "data", "documents"));
        const mainDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) setUserData(userDoc.data());
        if (progressDoc.exists()) setProgress(progressDoc.data().progress || 0);
        if (mainDoc.exists()) setActiveStage(mainDoc.data().activeStage);
      } catch {
        toast.error("Error loading dashboard data");
      }
    };
    fetchData();
  }, [user]);

  const handleSignOut = async () => {
    try { await signOut(auth); } catch { toast.error("Error signing out"); }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          <div className={styles.dashboardGrid}>
          {userData && (
  <div className={styles.userTile}>
    <Avatar src={userData.avatarUrl} alt={`${userData.name}`} size="large" />
    <Link to="/edit-profile" className={styles.editButton} title="Редагувати профіль">✏️</Link>
    <RegistrationTile data={userData} />
  </div>
)}
            <div className={styles.tile}>
              <ProgressBar progress={progress} />
            </div>
            <SavedCasesWidget className={styles.tile}/>
            {activeStage && (
              <StageTasksWidget selectedStageId={activeStage} user={user} language="de" activeStageTitle={`Активний етап: ${activeStage}`} className={styles.tile}/>
            )}
          </div>
          <div className={styles.bottomControls}>
            <Link to="/main_menu">До головного меню</Link>
            <button onClick={handleSignOut}>Вийти з профілю</button>
          </div>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default Dashboard;