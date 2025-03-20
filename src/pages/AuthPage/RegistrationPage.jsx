import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StageMenu from "../ApprobationPage/StageMenu";
import styles from "./RegistrationPage.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CustomGermanyMap from "../../components/CustomGermanyMap/CustomGermanyMap";

const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState("form");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // Схема валідації
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Vorname ist erforderlich"),
    lastName: Yup.string().required("Nachname ist erforderlich"),
    email: Yup.string()
      .email("Ungültiges E-Mail Format")
      .required("E-Mail ist erforderlich"),
    password: Yup.string()
      .min(6, "Passwort muss mindestens 6 Zeichen enthalten")
      .required("Passwort ist erforderlich"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwörter müssen übereinstimmen")
      .required("Passwortbestätigung ist erforderlich"),
    birthDate: Yup.date().required("Geburtsdatum ist erforderlich"),
    educationRegion: Yup.string().required("Bildungsregion ist erforderlich"),
    agreeTerms: Yup.boolean().oneOf([true], "AGB erforderlich"),
    agreePrivacy: Yup.boolean().oneOf(
      [true],
      "Datenschutzerklärung erforderlich"
    ),
  });

  // Ініціалізація Formik
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
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        await setDoc(
          doc(db, "users", user.uid),
          {
            activeStage: selectedStage || 1,
          },
          { merge: true }
        );

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

        localStorage.removeItem("tempSelectedStage");

        alert("Registrierung erfolgreich!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error registering user:", error.message);
        alert(`Registrierung fehlgeschlagen: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    },
  });

  // Прогрес для StageMenu
  const stagesProgress =
    formik.values.educationRegion === "EU" ? [25, 50, 75, 100] : [33, 66, 100];

  const handleStageSelect = useCallback((stageId) => {
    setSelectedStage(stageId);
  }, []);

  const handleBack = useCallback(() => {
    if (currentStep === "stageMenu") {
      setCurrentStep("form");
    } else if (currentStep === "map") {
      setCurrentStep("stageMenu");
    }
  }, [currentStep]);

  // Функція для підсвічування полів
  const getFieldClass = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName]
      ? `${styles.inputField} ${styles.errorField}`
      : styles.inputField;
  };

  // Функція для підстановки плейсхолдера
  const placeholderWithError = (fieldName, defaultPlaceholder) => {
    const hasError = formik.touched[fieldName] && formik.errors[fieldName];
    return hasError ? formik.errors[fieldName] : defaultPlaceholder;
  };

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        <h1 className={styles.centeredHeading}>Registrierung</h1>
        <div className={styles.contentWrapper}>
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
                    <div className={styles.formGrid}>
                      {/* Vorname */}
                      <div className={styles.formGroup}>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder={placeholderWithError(
                            "firstName",
                            "Vorname"
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                          required
                          className={getFieldClass("firstName")}
                        />
                      </div>
                      {/* Nachname */}
                      <div className={styles.formGroup}>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder={placeholderWithError(
                            "lastName",
                            "Nachname"
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          required
                          className={getFieldClass("lastName")}
                        />
                      </div>
                      {/* Geburtsdatum */}
                      <div className={styles.formGroup}>
                        <input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          lang="de" // <-- додаємо
                          placeholder={placeholderWithError(
                            "birthDate",
                            "Geburtsdatum"
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.birthDate}
                          required
                          className={getFieldClass("birthDate")}
                        />
                      </div>
                      {/* E-Mail */}
                      <div className={styles.formGroup}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={placeholderWithError("email", "E-Mail")}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          required
                          className={getFieldClass("email")}
                        />
                      </div>
                      {/* Passwort */}
                      <div className={styles.formGroup}>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder={placeholderWithError(
                            "password",
                            "Passwort"
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          required
                          className={getFieldClass("password")}
                        />
                      </div>
                      {/* Passwort bestätigen */}
                      <div className={styles.formGroup}>
                        <input
                          id="repeatPassword"
                          name="repeatPassword"
                          type="password"
                          placeholder={placeholderWithError(
                            "repeatPassword",
                            "Passwort bestätigen"
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.repeatPassword}
                          required
                          className={getFieldClass("repeatPassword")}
                        />
                      </div>
                      {/* Вибір EU / Non-EU */}
                      <div className={styles.formGroup}>
                        <div
                          className={
                            formik.touched.educationRegion &&
                            formik.errors.educationRegion
                              ? `${styles.regionSelector} ${styles.errorField}`
                              : styles.regionSelector
                          }
                        >
                          <button
                            type="button"
                            className={`${styles.regionButton} ${
                              formik.values.educationRegion === "EU"
                                ? styles.active
                                : ""
                            }`}
                            onClick={() =>
                              formik.setFieldValue("educationRegion", "EU")
                            }
                          >
                            EU
                          </button>
                          <button
                            type="button"
                            className={`${styles.regionButton} ${
                              formik.values.educationRegion === "Non-EU"
                                ? styles.active
                                : ""
                            }`}
                            onClick={() =>
                              formik.setFieldValue("educationRegion", "Non-EU")
                            }
                          >
                            Non-EU
                          </button>
                        </div>
                      </div>
                      {/* Fachgebiet */}
                      <div className={styles.formGroup}>
                        <input
                          id="specialty"
                          name="specialty"
                          type="text"
                          placeholder="Fachgebiet"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.specialty}
                          className={styles.inputField}
                        />
                      </div>
                      {/* Deutschniveau */}
                      <div className={styles.formGroup}>
                        <input
                          id="germanLevel"
                          name="germanLevel"
                          type="text"
                          placeholder="Deutschniveau (z.B.: B2, C1)"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.germanLevel}
                          className={styles.inputField}
                        />
                      </div>
                      {/* Verfahrenstyp */}
                      <div className={styles.formGroup}>
                        <select
                          id="procedureType"
                          name="procedureType"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.procedureType}
                          className={styles.inputField}
                        >
                          <option value="">-- Typ wählen --</option>
                          <option value="Kenntnisprüfung">
                            Kenntnisprüfung
                          </option>
                          <option value="Gleichwertigkeitsprüfung">
                            Gleichwertigkeitsprüfung
                          </option>
                        </select>
                      </div>
                      {/* Newsletter */}
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
                          Newsletter abonnieren
                        </label>
                      </div>
                      {/* AGB */}
                      <div className={styles.checkboxGroup}>
                        <label
                          className={
                            formik.touched.agreeTerms &&
                            formik.errors.agreeTerms
                              ? styles.errorField
                              : ""
                          }
                        >
                          <input
                            id="agreeTerms"
                            name="agreeTerms"
                            type="checkbox"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.agreeTerms}
                            required
                          />
                          {formik.touched.agreeTerms && formik.errors.agreeTerms
                            ? formik.errors.agreeTerms
                            : "Ich stimme den AGB zu"}
                        </label>
                      </div>
                      {/* Datenschutzerklärung */}
                      <div className={styles.checkboxGroup}>
                        <label
                          className={
                            formik.touched.agreePrivacy &&
                            formik.errors.agreePrivacy
                              ? styles.errorField
                              : ""
                          }
                        >
                          <input
                            id="agreePrivacy"
                            name="agreePrivacy"
                            type="checkbox"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.agreePrivacy}
                            required
                          />
                          {formik.touched.agreePrivacy &&
                          formik.errors.agreePrivacy
                            ? formik.errors.agreePrivacy
                            : "Ich stimme der Datenschutzerklärung zu"}
                        </label>
                      </div>
                    </div>
                    {/* На цьому кроці показуємо лише кнопку "Далі" */}
                    <button
                      type="button"
                      onClick={() => setCurrentStep("stageMenu")}
                      className={styles.nextButton}
                      disabled={!formik.isValid || !formik.dirty}
                    >
                      &#8594;
                    </button>
                  </form>
                </div>
              ) : currentStep === "stageMenu" ? (
                <div className={styles.stageMenuWrapper}>
                  <StageMenu
                    onStageSelect={handleStageSelect}
                    isRegistration={true}
                    stagesProgress={stagesProgress}
                    activeStage={selectedStage}
                    enableSwipe={false}
                    gridView={true}
                    educationRegion={formik.values.educationRegion}
                  />
                  {/* Тут дві кнопки: "Назад" (ліворуч) і "Далі" (праворуч) */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className={styles.backButton}
                  >
                    &#8592;
                  </button>
                  <button
                    type="button"
                    className={styles.nextButton}
                    onClick={() => setCurrentStep("map")}
                    disabled={!selectedStage}
                  >
                    &#8594;
                  </button>
                </div>
              ) : currentStep === "map" ? (
                <div className={styles.mapStepWrapper}>
                  <CustomGermanyMap registrationMode={true} />
                  {/* Тут дві кнопки: "Назад" (ліворуч) і "Завершити" (праворуч) */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className={styles.backButton}
                  >
                    &#8592;
                  </button>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={formik.handleSubmit}
                    disabled={isLoading}
                  >
                    &#x2691;
                  </button>
                </div>
              ) : null}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;
