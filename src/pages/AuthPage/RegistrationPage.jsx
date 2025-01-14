// src/pages/AuthPage/RegistrationPage.jsx

import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "../../components/StageMenu/StageMenu";
import styles from "./RegistrationPage.module.scss";
import { useAuth } from "../../contexts/AuthContext"; // Імпорт useAuth

import { CSSTransition, TransitionGroup } from "react-transition-group"; // Для анімацій

const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState("form"); // "form" або "stageMenu"
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null); // Додано для зберігання вибраного етапу
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Використання глобального контексту

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      birthDate: "",
      educationRegion: "",
      specialty: "",
      germanLevel: "",
      procedureType: "",
      subscribe: false,
      agreeTerms: false,
      agreePrivacy: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Ім’я є обов'язковим"),
      lastName: Yup.string().required("Прізвище є обов'язковим"),
      email: Yup.string()
        .email("Невірний формат електронної пошти")
        .required("Електронна пошта є обов'язковою"),
      password: Yup.string()
        .min(6, "Пароль повинен містити щонайменше 6 символів")
        .required("Пароль є обов'язковим"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати")
        .required("Підтвердження пароля є обов'язковим"),
      birthDate: Yup.date().required("Дата народження є обов'язковою"),
      educationRegion: Yup.string().required("Регіон освіти є обов'язковим"),
      agreeTerms: Yup.boolean()
        .oneOf([true], "Ви повинні погодитися з умовами"),
      agreePrivacy: Yup.boolean()
        .oneOf([true], "Ви повинні погодитися з політикою конфіденційності"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        // Реєстрація користувача
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        // Запис даних у Firestore у документ користувача разом із activeStage
        await setDoc(doc(db, "users", user.uid), {
          activeStage: selectedStage || 1, // Записуємо вибраний етап або дефолтний
        }, { merge: true });

        await setDoc(doc(db, "users", user.uid, "userData", "data"), {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          birthDate: values.birthDate,
          educationRegion: values.educationRegion,
          specialty: values.specialty || null,
          germanLevel: values.germanLevel || null,
          procedureType: values.procedureType || null,
          subscribe: values.subscribe,
          agreeTerms: values.agreeTerms,
          agreePrivacy: values.agreePrivacy,
          activeStep: "completed",
        });

        // Очищення localStorage після успішної реєстрації
        localStorage.removeItem("tempSelectedStage");

        alert("Реєстрація успішна!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error registering user:", error.message);
        alert(`Реєстрація не вдалася: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleStageSelect = useCallback((stageId) => {
    console.log("Selected stage:", stageId);
    setSelectedStage(stageId); // Оновлюємо локальний стан
  }, []);

  const handleBack = useCallback(() => {
    setCurrentStep("form");
  }, []);

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        {/* Заголовок видаляється на десктопі */}
        <h1 className={styles.centeredHeading}>Реєстрація</h1>

        <div className={styles.contentWrapper}>
          {/* Анімаційний контейнер */}
          <TransitionGroup component={null}>
            <CSSTransition
              key={currentStep}
              timeout={500}
              classNames={{
                enter: styles.enter,
                enterActive: styles.enterActive,
                exit: styles.exit,
                exitActive: styles.exitActive,
              }}
            >
              {currentStep === "form" ? (
                <div className={styles.formWrapper}>
                  <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <h2 className={styles.formTitle}>Основна інформація</h2>
                    <div className={styles.formGrid}>
                      {/* Ваші поля форми */}
                      {/* ... */}
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName">
                          Ім’я <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                          autoComplete="given-name"
                          required
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className={styles.error}>
                            {formik.errors.firstName}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName">
                          Прізвище <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          autoComplete="family-name"
                          required
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className={styles.error}>
                            {formik.errors.lastName}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="birthDate">
                          Дата народження <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.birthDate}
                          autoComplete="bday"
                          required
                        />
                        {formik.touched.birthDate && formik.errors.birthDate ? (
                          <div className={styles.error}>
                            {formik.errors.birthDate}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">
                          Електронна пошта <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          autoComplete="email"
                          required
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className={styles.error}>
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="password">
                          Пароль <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          autoComplete="new-password"
                          required
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div className={styles.error}>
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="repeatPassword">
                          Підтвердження пароля <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="repeatPassword"
                          name="repeatPassword"
                          type="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.repeatPassword}
                          autoComplete="new-password"
                          required
                        />
                        {formik.touched.repeatPassword &&
                        formik.errors.repeatPassword ? (
                          <div className={styles.error}>
                            {formik.errors.repeatPassword}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="educationRegion">
                          Регіон отримання медичної освіти{" "}
                          <span className={styles.required}>*</span>
                        </label>
                        <select
                          id="educationRegion"
                          name="educationRegion"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.educationRegion}
                          autoComplete="organization" // Або інше відповідне значення
                          required
                        >
                          <option value="">-- Виберіть регіон --</option>
                          <option value="EU">ЄС (EU)</option>
                          <option value="Non-EU">Не ЄС (Non-EU)</option>
                        </select>
                        {formik.touched.educationRegion &&
                        formik.errors.educationRegion ? (
                          <div className={styles.error}>
                            {formik.errors.educationRegion}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="specialty">Фах (спеціальність)</label>
                        <input
                          id="specialty"
                          name="specialty"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.specialty}
                          autoComplete="off"
                        />
                        {formik.touched.specialty && formik.errors.specialty ? (
                          <div className={styles.error}>
                            {formik.errors.specialty}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="germanLevel">
                          Рівень знань німецької мови (наприклад: B2, C1)
                        </label>
                        <input
                          id="germanLevel"
                          name="germanLevel"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.germanLevel}
                          autoComplete="off"
                        />
                        {formik.touched.germanLevel &&
                        formik.errors.germanLevel ? (
                          <div className={styles.error}>
                            {formik.errors.germanLevel}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="procedureType">
                          Тип процедури, яку плануєте проходити
                        </label>
                        <select
                          id="procedureType"
                          name="procedureType"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.procedureType}
                          autoComplete="off"
                        >
                          <option value="">-- Виберіть тип процедури --</option>
                          <option value="Kenntnisprüfung">
                            Kenntnisprüfung
                          </option>
                          <option value="Gleichwertigkeitsprüfung">
                            Gleichwertigkeitsprüfung
                          </option>
                        </select>
                        {formik.touched.procedureType &&
                        formik.errors.procedureType ? (
                          <div className={styles.error}>
                            {formik.errors.procedureType}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className={styles.checkboxGroup}>
                      <label>
                        <input
                          id="subscribe"
                          name="subscribe"
                          type="checkbox"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.subscribe}
                        />
                        Підписатися на наші новини
                      </label>
                    </div>
                    <div className={styles.checkboxGroup}>
                      <label>
                        <input
                          id="agreeTerms"
                          name="agreeTerms"
                          type="checkbox"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.agreeTerms}
                          required
                        />
                        Я погоджуюсь з умовами
                      </label>
                      {formik.touched.agreeTerms &&
                      formik.errors.agreeTerms ? (
                        <div className={styles.error}>
                          {formik.errors.agreeTerms}
                        </div>
                      ) : null}
                    </div>
                    <div className={styles.checkboxGroup}>
                      <label>
                        <input
                          id="agreePrivacy"
                          name="agreePrivacy"
                          type="checkbox"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.agreePrivacy}
                          required
                        />
                        Я погоджуюсь з політикою конфіденційності
                      </label>
                      {formik.touched.agreePrivacy &&
                      formik.errors.agreePrivacy ? (
                        <div className={styles.error}>
                          {formik.errors.agreePrivacy}
                        </div>
                      ) : null}
                    </div>
                    <div className={styles.buttonGroup}>
                      <button
                        type="button"
                        onClick={() => setCurrentStep("stageMenu")}
                        className={styles.nextButton}
                        disabled={!formik.isValid || !formik.dirty} // Видалено !selectedStage
                      >
                        Далі
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className={styles.stageMenuWrapper}>
                  <StageMenu
                    onStageSelect={handleStageSelect}
                    isRegistration={true}
                    stagesProgress={[33, 66, 100]} // Відсотки прогресу для трьох етапів
                    activeStage={selectedStage} // Передаємо вибраний етап
                    enableSwipe={false}
                    gridView={true}
                  />
                  <div className={styles.buttonGroup}>
                    <button
                      type="button"
                      onClick={handleBack}
                      className={styles.backButton}
                    >
                      Назад
                    </button>
                    <button
                      type="button"
                      className={styles.submitButton}
                      onClick={formik.handleSubmit}
                      disabled={isLoading || !selectedStage}
                    >
                      {isLoading ? "Реєстрація..." : "Зареєструватися"}
                    </button>
                  </div>
                </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;