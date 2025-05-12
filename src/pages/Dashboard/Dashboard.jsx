import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabaseClient";
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
  const { currentUser: user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [activeStage, setActiveStage] = useState(null);
  const { fetchFirebaseCases } = useContext(DataSourceContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { user: supaUser }, error } = await supabase.auth.getUser();
        if (error) throw error;
        const md = supaUser.user_metadata || {};
        const mappedUserData = {
          firstName: md.first_name || '',
          lastName: md.last_name || '',
          email: supaUser.email || '',
          birthDate: md.birth_date || '',
          educationRegion: md.education_region || '',
          specialty: md.specialty || '',
          germanLevel: md.german_level || '',
          procedureType: md.procedure_type || '',
          avatarUrl: md.avatar_url || '',
          active_stage: md.active_stage,
        };
        setUserData(mappedUserData);
        setActiveStage(mappedUserData.active_stage);
      } catch {
        toast.error("Error loading dashboard data");
      }
    };
    fetchData();
  }, [user]);

  const handleSignOut = async () => {
    try { await supabase.auth.signOut(); } catch { toast.error("Error signing out"); }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          <div className={styles.dashboardGrid}>
          {userData && (
  <div className={styles.userTile}>
    <Avatar src={userData.avatarUrl} alt={`${userData.firstName} ${userData.lastName}`} size="large" />
    <Link to="/edit-profile" className={styles.editButton} title="Редагувати профіль">✏️</Link>
    <RegistrationTile data={userData} />
  </div>
)}
            <div className={styles.tile}>
            <ProgressBar />
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