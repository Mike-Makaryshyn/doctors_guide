import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "../../components/StageMenu/StageMenu"; // Імпорт компонента StageMenu
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    birthDate: "",
    specialty: "",
    subscribe: false,
  });
  const [selectedStage, setSelectedStage] = useState(
    localStorage.getItem("tempSelectedStage") || 1
  ); // Завантаження етапу з localStorage
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleStageSelect = (stageId) => {
    console.log("Selected stage:", stageId);
    setSelectedStage(stageId); // Оновлюємо обраний етап
    localStorage.setItem("tempSelectedStage", stageId); // Зберігаємо у localStorage
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      // Реєстрація користувача
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Запис основних даних у Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        birthDate: formData.birthDate,
        specialty: formData.specialty,
        subscribe: formData.subscribe,
        activeStage: selectedStage, // Зберігаємо обраний етап під ключем activeStage
      });

      // Очищення localStorage після успішної реєстрації
      localStorage.removeItem("tempSelectedStage");

      alert("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error registering user:", error.message);
      alert(`Registration failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        <h1 className={styles.centeredHeading}>Registration</h1>

        <div className={styles.contentWrapper}>
          {/* Блок форми */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={formData.name} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="birthDate">Date of Birth</label>
                <input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="specialty">Specialty</label>
                <input
                  id="specialty"
                  type="text"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                  id="repeatPassword"
                  type="password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.checkboxGroup}>
                <label>
                  <input
                    id="subscribe"
                    type="checkbox"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  Subscribe to our newsletter
                </label>
              </div>
            </form>
          </div>

          {/* Сітка етапів */}
          <div className={styles.stageWrapper}>
            <StageMenu
              onStageSelect={handleStageSelect}
              isRegistration={true}
              stagesProgress={[0, 20, 50, 100]}
              enableSwipe={false}
              gridView={true}
            />
          </div>
        </div>

        {/* Кнопка реєстрації */}
        <div className={styles.buttonWrapper}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;