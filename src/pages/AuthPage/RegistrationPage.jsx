import React, { useState, useCallback, useEffect, Suspense, lazy } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./RegistrationPage.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import registrationTranslations from "../../constants/translation/registration";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { localStorageSet } from "../../utils/localStorage";

const StageMenu = lazy(() => import("../ApprobationPage/StageMenu"));
const CustomGermanyMap = lazy(() =>
  import("../../components/CustomGermanyMap/CustomGermanyMap")
);

const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState("form");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const [showIntroModal, setShowIntroModal] = useState(false);
  // Додаємо локальний стан для регіону
  const [localRegion, setLocalRegion] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();
 const { selectedRegion, selectedLanguage: language = "de" } = useGetGlobalInfo();// глобальний стан, але для збереження регіону ми використовуватимемо локальний стан

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
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: window.location.origin + "/auth/confirm",
          data: {
            first_name: values.firstName,
            last_name: values.lastName,
            birth_date: values.birthDate,
            education_region: values.educationRegion,
            region: localRegion,
            specialty: values.specialty || null,
            german_level: values.germanLevel || null,
            procedure_type: values.procedureType || null,
            subscribe: values.subscribe,
            agree_terms: values.agreeTerms,
            agree_privacy: values.agreePrivacy,
            active_step: "completed",
            active_stage: selectedStage || 1,
          },
        },
      });
      setIsLoading(false);
      if (signUpError) {
        console.error("Error signing up:", signUpError.message);
        alert(`Registrierung fehlgeschlagen: ${signUpError.message}`);
      } else {
        alert(
          "Danke fürs Registrieren! Bitte prüfe deine E-Mails und klicke auf den Bestätigungslink."
        );
        // Speichere Checkbox-Präferenzen in Supabase
        if (data && data.user) {
          const { error: prefsError } = await supabase
            .from("user_preferences")
            .insert([
              {
                user_id: data.user.id,
                subscribe: values.subscribe,
                agree_terms: values.agreeTerms,
                agree_privacy: values.agreePrivacy,
              },
            ]);
          if (prefsError)
            console.error("Error saving preferences:", prefsError.message);
        }
        navigate("/check-email");
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

  useEffect(() => {
    localStorageSet("selectedRegion", "");
  }, []);

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        <h1 className={styles.centeredHeading}>
   {registrationTranslations.titles.pageTitle[language]}
 </h1>
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
                            registrationTranslations.placeholders.firstName[language]
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
                            registrationTranslations.placeholders.lastName[language]
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
                          lang="de"
                          placeholder={placeholderWithError(
                            "birthDate",
                            registrationTranslations.placeholders.birthDate[language]
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
                          placeholder={placeholderWithError(
                            "email",
                            registrationTranslations.placeholders.email[language]
                          )}
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
                            registrationTranslations.placeholders.password[language]
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
                            registrationTranslations.placeholders.repeatPassword[language]
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
                          placeholder={registrationTranslations.placeholders.specialty[language]}
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
                          placeholder={registrationTranslations.placeholders.germanLevel[language]}
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
                          <option value="">
                            {registrationTranslations.placeholders.procedureType[language]}
                          </option>
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
                          {registrationTranslations.labels.subscribe[language]}
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
                            : registrationTranslations.labels.agreeTerms[language]}
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
                            : registrationTranslations.labels.agreePrivacy[language]}
                        </label>
                      </div>
                    </div>
                    {/* Кнопка "Далі" */}
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep("stageMenu");
                        setShowIntroModal(true);
                      }}
                      className={styles.nextButton}
                      disabled={!formik.isValid || !formik.dirty}
                    >
                      &#8594;
                    </button>
                  </form>
                </div>
              ) : currentStep === "stageMenu" ? (
                <div className={styles.stageMenuWrapper}>
                  {showIntroModal && (
                    <div className={styles.modalOverlay}>
                      <div className={styles.modalContent}>
                        <button
                          type="button"
                          className={styles.closeButton}
                          onClick={() => setShowIntroModal(false)}
                        >
                           ×
                        </button>
                        <div className={styles.stageIntro}>
                         <h2 className={styles.stageIntroTitle}>
   {registrationTranslations.modal.title[language]}
 </h2>
                         <p className={styles.stageIntroText}>
   {registrationTranslations.modal.text[language]}
 </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Suspense fallback={<div>Loading...</div>}>
                    <StageMenu
                      onStageSelect={handleStageSelect}
                      isRegistration={true}
                      stagesProgress={stagesProgress}
                      activeStage={selectedStage}
                      enableSwipe={false}
                      gridView={true}
                      educationRegion={formik.values.educationRegion}
                    />
                  </Suspense>
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <CustomGermanyMap
                      registrationMode={true}
                      onRegionSelect={setLocalRegion}
                    />
                  </Suspense>
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
