import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfilePage.module.scss";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Assume supabase is imported and currentUser is available
import { supabase } from "../../supabaseClient";
import { FaSave } from "react-icons/fa";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import t from "./EditProfilePage.i18n";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { selectedLanguage: lang = "en" } = useGetGlobalInfo();
  const tr = (keyObj) => keyObj[lang] || keyObj.en;  // fallback to English
  const [currentUser, setCurrentUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [educationRegion, setEducationRegion] = useState(""); // EU або Non-EU
  const [recognitionStatus, setRecognitionStatus] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [germanLevel, setGermanLevel] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    // Set currentUser from supabase session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setCurrentUser(session?.user || null);
    };
    getSession();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    const fetchUserData = async () => {
      try {
        const { data: { user: supaUser }, error } = await supabase.auth.getUser();
        if (error) throw error;
        const md = supaUser.user_metadata || {};
        setFirstName(md.first_name || "");
        setLastName(md.last_name || "");
        setSpecialty(md.specialty || "");
        setEducationRegion(md.education_region || "");
        setRecognitionStatus(md.procedure_type || "");
        setEmail(supaUser.email || "");
        setBirthDate(md.birth_date || "");
        setGermanLevel(md.german_level || "");
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchUserData();
  }, [currentUser]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    if (newPassword || confirmPassword || currentPassword) {
      if (!currentPassword) {
        alert(tr(t.errors.currentPwdRequired));
        return;
      }
      if (newPassword !== confirmPassword) {
        alert(tr(t.errors.pwdMismatch));
        return;
      }
      if (newPassword.length < 6) {
        alert(tr(t.errors.pwdTooShort));
        return;
      }
      // Verifiziere das aktuelle Passwort
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: currentPassword,
      });
      if (signInError) {
        alert(tr(t.errors.wrongCurrentPwd));
        return;
      }
    }
    try {
      const { error } = await supabase.auth.updateUser({
        email,
        password: newPassword || undefined,
        data: {
          first_name: firstName,
          last_name: lastName,
          specialty,
          education_region: educationRegion,
          procedure_type: recognitionStatus,
          birth_date: birthDate,
          german_level: germanLevel
        }
      });
      if (error) throw error;
      alert(tr(t.errors.updateSuccess));
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert(tr(t.errors.updateFail));
    }
  };

  return (
    <MainLayout>
      <div className={styles.editProfileContainer}>
        <h1>{tr(t.profileHeading)}</h1>
        <form onSubmit={handleSave} className={styles.editProfileForm}>
          <input
            type="text"
            placeholder={tr(t.firstName)}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder={tr(t.lastName)}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder={tr(t.specialty)}
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
            className={styles.inputField}
          />
          {/* Кнопки вибору EU / Non-EU без заголовка */}
          <div className={styles.regionSelector}>
            <button
              type="button"
              className={`${styles.regionButton} ${
                educationRegion === "EU" ? styles.active : ""
              }`}
              onClick={() => setEducationRegion("EU")}
            >
              EU
            </button>
            <button
              type="button"
              className={`${styles.regionButton} ${
                educationRegion === "Non-EU" ? styles.active : ""
              }`}
              onClick={() => setEducationRegion("Non-EU")}
            >
              Non-EU
            </button>
          </div>

          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            required
            disabled
            className={styles.inputField}
          />
          <input
            type="date"
            placeholder={tr(t.birthDate)}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder={tr(t.germanLevel)}
            value={germanLevel}
            onChange={(e) => setGermanLevel(e.target.value)}
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder={tr(t.currentPassword)}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder={tr(t.newPassword)}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder={tr(t.confirmPassword)}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputField}
          />
          <br />
          <div className={styles.bottomRightSave}>
            <button
              type="submit"
              className={styles.saveButton}
              title={tr({ uk: "Зберегти", de: "Speichern", en: "Save" })}
            >
              <FaSave />
            </button>
          </div>
        </form>
        <button
          className={styles.backButton}
          onClick={() => navigate("/dashboard")}
        >
          &#8592;
        </button>
      </div>
    </MainLayout>
  );
};

export default EditProfilePage;