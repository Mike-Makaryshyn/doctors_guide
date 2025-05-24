import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabaseClient";
import ProgressBar from "./ProgressBar.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SavedCasesWidget from "../../components/SavedCasesWidget.jsx";
import RegistrationTile from "../../pages/AuthPage/RegistrationTile.jsx";
import styles from "./Dashboard.module.scss";
import { toast } from "react-toastify";
import StageTasksWidget from "../../components/StageTasksWidget.jsx";

const Dashboard = () => {
  const { currentUser: user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [activeStage, setActiveStage] = useState(null);

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
          <div className={styles.dashboardContent}>
          {userData && (
            <div className={styles.tile}>
              <RegistrationTile data={userData} />
            </div>
          )}
            <div>
              <div className={styles.tile}><ProgressBar /></div>
              <div className={styles.tile}><SavedCasesWidget /></div>
              {activeStage && (
                <div className={styles.tile}>
                  <StageTasksWidget
                    selectedStageId={activeStage}
                    user={user}
                    language="de"
                    activeStageTitle={`Активний етап: ${activeStage}`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default Dashboard;