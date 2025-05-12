import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfilePage.module.scss";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Assume supabase is imported and currentUser is available
import { supabase } from "../../supabaseClient";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [educationRegion, setEducationRegion] = useState(""); // EU або Non-EU
  const [recognitionStatus, setRecognitionStatus] = useState("");
  const [email, setEmail] = useState("");

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
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchUserData();
  }, [currentUser]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    try {
      const { error } = await supabase.auth.updateUser({
        email,
        data: {
          first_name: firstName,
          last_name: lastName,
          specialty,
          education_region: educationRegion,
          procedure_type: recognitionStatus
        }
      });
      if (error) throw error;
      alert("Дані успішно оновлені!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Не вдалося оновити дані.");
    }
  };

  return (
    <MainLayout>
      <div className={styles.editProfileContainer}>
        <h1>Profil bearbeiten</h1>
        <form onSubmit={handleSave} className={styles.editProfileForm}>
          <input
            type="text"
            placeholder="Vorname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Nachname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Fachgebiet"
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
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <select
            value={recognitionStatus}
            onChange={(e) => setRecognitionStatus(e.target.value)}
            required
            className={styles.inputField}
          >
            <option value="Eingetreten">Eingetreten</option>
            <option value="Angefangen">Angefangen</option>
            <option value="Berufserlaubnis">Berufserlaubnis</option>
            <option value="Approbation">Approbation</option>
          </select>
          <br />
          <button type="submit" className={styles.buttonPrimary}>
            Speichern
          </button>
        </form>
        <button onClick={() => navigate("/dashboard")} className={styles.buttonSecondary}>
          Abbrechen
        </button>
      </div>
    </MainLayout>
  );
};

export default EditProfilePage;