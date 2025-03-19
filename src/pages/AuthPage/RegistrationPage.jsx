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
  // Drei Schritte: "form", "stageMenu", "map"
  const [currentStep, setCurrentStep] = useState("form");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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
      agreeTerms: Yup.boolean().oneOf([true], "Sie müssen den AGB zustimmen"),
      agreePrivacy: Yup.boolean().oneOf([true], "Sie müssen der Datenschutzerklärung zustimmen"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        // Benutzerregistrierung
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        // Daten in Firestore speichern
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

        // Temporäre Daten löschen
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

  // Функція для визначення класу помилки
  const getFieldClass = (fieldName) => {
    const isError =
      formik.touched[fieldName] && formik.errors[fieldName] ? styles.errorField : "";
    return `${styles.inputField} ${isError}`.trim();
  };

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        {/* Заголовок «Registrierung» */}
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
                          placeholder="Vorname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                          autoComplete="given-name"
                          required
                          className={getFieldClass("firstName")}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                          <div className={styles.error}>{formik.errors.firstName}</div>
                        )}
                      </div>
                      {/* Nachname */}
                      <div className={styles.formGroup}>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Nachname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          autoComplete="family-name"
                          required
                          className={getFieldClass("lastName")}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                          <div className={styles.error}>{formik.errors.lastName}</div>
                        )}
                      </div>
                      {/* Geburtsdatum */}
                      <div className={styles.formGroup}>
                        <input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.birthDate}
                          autoComplete="bday"
                          required
                          className={getFieldClass("birthDate")}
                        />
                        {formik.touched.birthDate && formik.errors.birthDate && (
                          <div className={styles.error}>{formik.errors.birthDate}</div>
                        )}
                      </div>
                      {/* E-Mail */}
                      <div className={styles.formGroup}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="E-Mail"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          autoComplete="email"
                          required
                          className={getFieldClass("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <div className={styles.error}>{formik.errors.email}</div>
                        )}
                      </div>
                      {/* Passwort */}
                      <div className={styles.formGroup}>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Passwort"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          autoComplete="new-password"
                          required
                          className={getFieldClass("password")}
                        />
                        {formik.touched.password && formik.errors.password && (
                          <div className={styles.error}>{formik.errors.password}</div>
                        )}
                      </div>
                      {/* Passwort bestätigen */}
                      <div className={styles.formGroup}>
                        <input
                          id="repeatPassword"
                          name="repeatPassword"
                          type="password"
                          placeholder="Passwort bestätigen"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.repeatPassword}
                          autoComplete="new-password"
                          required
                          className={getFieldClass("repeatPassword")}
                        />
                        {formik.touched.repeatPassword && formik.errors.repeatPassword && (
                          <div className={styles.error}>{formik.errors.repeatPassword}</div>
                        )}
                      </div>
                      {/* Bildungsregion */}
                      <div className={styles.formGroup}>
                        <select
                          id="educationRegion"
                          name="educationRegion"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.educationRegion}
                          required
                          className={getFieldClass("educationRegion")}
                        >
                          <option value="">-- Region wählen --</option>
                          <option value="EU">EU</option>
                          <option value="Non-EU">Non-EU</option>
                        </select>
                        {formik.touched.educationRegion && formik.errors.educationRegion && (
                          <div className={styles.error}>{formik.errors.educationRegion}</div>
                        )}
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
                          autoComplete="off"
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
                          autoComplete="off"
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
                          <option value="Kenntnisprüfung">Kenntnisprüfung</option>
                          <option value="Gleichwertigkeitsprüfung">Gleichwertigkeitsprüfung</option>
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
                          Ich stimme den AGB zu
                        </label>
                        {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                          <div className={styles.error}>{formik.errors.agreeTerms}</div>
                        )}
                      </div>
                      {/* Datenschutzerklärung */}
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
                          Ich stimme der Datenschutzerklärung zu
                        </label>
                        {formik.touched.agreePrivacy && formik.errors.agreePrivacy && (
                          <div className={styles.error}>{formik.errors.agreePrivacy}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.buttonGroup}>
                      <button
                        type="button"
                        onClick={() => setCurrentStep("stageMenu")}
                        className={styles.nextButton}
                        disabled={!formik.isValid || !formik.dirty}
                      >
                        Weiter
                      </button>
                    </div>
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
                  <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleBack} className={styles.backButton}>
                      Zurück
                    </button>
                    <button
                      type="button"
                      className={styles.nextButton}
                      onClick={() => setCurrentStep("map")}
                      disabled={!selectedStage}
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              ) : currentStep === "map" ? (
                <div className={styles.mapStepWrapper}>
                  <CustomGermanyMap registrationMode={true} />
                  <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleBack} className={styles.backButton}>
                      Zurück
                    </button>
                    <button
                      type="button"
                      className={styles.submitButton}
                      onClick={formik.handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? "Registrierung..." : "Registrieren"}
                    </button>
                  </div>
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