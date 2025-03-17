import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from './EditProfilePage.module.scss';

const EditProfilePage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [recognitionStatus, setRecognitionStatus] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid, "userData", "data");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFirstName(data.firstName || "");
          setLastName(data.lastName || "");
          setSpecialty(data.specialty || "");
          setCountry(data.country || "");
          setLocation(data.location || "");
          setRecognitionStatus(data.recognitionStatus || "Eingetreten");
          setEmail(data.email || "");
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (user) {
      const docRef = doc(db, "users", user.uid, "userData", "data");
      await updateDoc(docRef, {
        firstName,
        lastName,
        specialty,
        country,
        location,
        recognitionStatus,
        email,
      });
      alert("Дані успішно оновлені!");
      navigate("/dashboard"); // Повернення до особистого кабінету
    }
  };

  return (
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
        <input
          type="text"
          placeholder="Herkunftsland"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Wohnort"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className={styles.inputField}
        />
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
  );
};

export default EditProfilePage;