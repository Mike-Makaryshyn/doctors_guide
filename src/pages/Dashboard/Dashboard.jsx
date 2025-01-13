// src/pages/Dashboard/Dashboard.jsx

import React, { useEffect, useState, useContext, useCallback } from "react";
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
import { useCases } from "../../contexts/CasesContext"; // Імпорт CasesContext
import { DataSourceContext } from "../../contexts/DataSourceContext"; // Імпорт DataSourceContext
import styles from "./Dashboard.module.scss"; // Імпорт стилів
import { toast } from "react-toastify";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Ініціалізація useNavigate
  const { fetchFirebaseCases } = useContext(DataSourceContext); // Отримання fetchFirebaseCases з DataSourceContext

  // Використання CasesContext
  const {
    userCases,
    regionalCases,
    selectedRegion,
    sourceType,
    handleDelete,
    handleMarkCompleted,
    handleMarkDeferred,
    setSourceType,
    setSelectedRegion,
  } = useCases();

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

    fetchProgress();
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

  // Обробники навігації
  const handleCaseClick = async (caseId, source, region) => {
    try {
      setNavigating(true);
      if (source === "firebase") {
        await fetchFirebaseCases(region);
      }
      navigate(`/information-sources/${source}/${caseId}`);
    } catch (err) {
      console.error("Fehler beim Öffnen des Falls:", err);
      toast.error("Fehler beim Öffnen des Falls.");
    } finally {
      setNavigating(false);
    }
  };

  const handleRegionalCaseClick = async (caseId, source, region) => {
    try {
      setNavigating(true);
      if (source === "firebase") {
        await fetchFirebaseCases(region);
      }
      navigate(`/information-sources/${source}/${caseId}`);
    } catch (err) {
      console.error("Fehler beim Öffnen des Falls:", err);
      toast.error("Fehler beim Öffnen des Falls.");
    } finally {
      setNavigating(false);
    }
  };

  // Встановлюємо sourceType на "local" при завантаженні Dashboard
  useEffect(() => {
    setSourceType("local");
  }, [setSourceType]);

  // Встановлюємо дефолтний регіон, якщо він не встановлений
  useEffect(() => {
    if (!selectedRegion) {
      setSelectedRegion("Thüringen"); // Встановіть ваш дефолтний регіон
    }
  }, [selectedRegion, setSelectedRegion]);

  // Debugging: Логування отриманих випадків
  useEffect(() => {
    console.log("Dashboard - User Cases:", userCases);
    console.log("Dashboard - Regional Cases:", regionalCases);
    console.log("Dashboard - Selected Region:", selectedRegion);
    console.log("Dashboard - Source Type:", sourceType);
  }, [userCases, regionalCases, selectedRegion, sourceType]);

  // Функція для отримання статусу кейсу
  const getCaseStatus = (caseId, region) => {
    const isDef = regionalCases.some(
      (x) => x.caseId === String(caseId) && x.region === region && x.status === "deferred"
    );
    if (isDef) return "deferred";

    const isComp = regionalCases.some(
      (x) => x.caseId === String(caseId) && x.region === region && x.status === "completed"
    );
    if (isComp) return "completed";

    return null;
  };

  // Функція сортування кейсів
  const sortedCases = useCallback((list, region) => {
    return [...list].sort((a, b) => {
      const stA = getCaseStatus(a.id, region);
      const stB = getCaseStatus(b.id, region);
      const statusOrder = (st) => {
        if (st === "deferred") return 1;
        if (st === "completed") return 3;
        return 2;
      };
      return statusOrder(stA) - statusOrder(stB);
    });
  }, [getCaseStatus]);

  // Нова функція для редагування кейсу
  const handleEditCase = (myCase) => {
    navigate("/edit-case", { state: { myCase } });
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
            <p>
              <strong>Вибрана земля:</strong> {selectedRegion || "Не вказано"}
            </p>
            <p>
              <strong>Тип джерела:</strong> {sourceType === "local" ? "Local" : "Firebase"}
            </p>
          </section>

          {/* Прогрес-бар */}
          <ProgressBar progress={progress} />

          {/* Saved Cases Widget */}
          <SavedCasesWidget
            userCases={userCases}
            regionalCases={sortedCases(regionalCases, selectedRegion)}
            onEdit={handleEditCase} // Новий обробник редагування
            onDelete={handleDelete}
            onMarkCompleted={handleMarkCompleted}
            onMarkDeferred={handleMarkDeferred}
            onCaseClick={handleCaseClick} // Навігація для власних випадків
            onRegionalCaseClick={handleRegionalCaseClick} // Навігація для регіональних випадків
            onAddNewCase={() => navigate("/data-collection")} // Додати новий випадок
          />

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