import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [recognitionStatus, setRecognitionStatus] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFirstName(data.firstName || "");
          setLastName(data.lastName || "");
          setSpecialty(data.specialty || "");
          setCountry(data.country || "");
          setLocation(data.location || "");
          setRecognitionStatus(data.recognitionStatus || "Eingetreten");
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        firstName,
        lastName,
        specialty,
        country,
        location,
        recognitionStatus,
      });
      alert("Дані успішно оновлені!");
      navigate("/dashboard"); // Повернення до особистого кабінету
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Редагування профілю</h1>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Ім'я"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <input
          type="text"
          placeholder="Прізвище"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <input
          type="text"
          placeholder="Спеціальність"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <input
          type="text"
          placeholder="Країна походження"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <input
          type="text"
          placeholder="Місце проживання"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <select
          value={recognitionStatus}
          onChange={(e) => setRecognitionStatus(e.target.value)}
          required
          style={{
            padding: "10px",
            margin: "10px",
            width: "320px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="Eingetreten">Eingetreten</option>
          <option value="Angefangen">Angefangen</option>
          <option value="Berufserlaubnis">Berufserlaubnis</option>
          <option value="Approbation">Approbation</option>
        </select>
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Зберегти
        </button>
      </form>
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Скасувати
      </button>
    </div>
  );
};

export default EditProfilePage;