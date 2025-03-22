// doctors_guide/src/pages/SimulationPage/AddSimulationEntryPage.jsx
import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import styles from "./AddSimulationEntryPage.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Список регіонів
const regions = [
  "Baden-Württemberg-Karlsruhe",
  "Baden-Württemberg-Reutlingen",
  "Baden-Württemberg-Stuttgart",
  "Baden-Württemberg-Freiburg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen",
  "Westfalen-Lippe",
];

// Мова – ключі та показники
const languageOptions = [
  { value: "de", label: "Deutsch" },
  { value: "en", label: "English" },
  { value: "uk", label: "Українська" },
  { value: "ru", label: "Русский" },
  { value: "tr", label: "Türkçe" },
  { value: "ar", label: "العربية" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
  { value: "pl", label: "Polski" },
  { value: "el", label: "Ελληνικά" },
  { value: "ro", label: "Română" },
];

const AddSimulationEntryPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  // Початкові значення форми
  const [formData, setFormData] = useState({
    region: selectedRegion || "Bayern",
    firstName: "",
    lastName: "",
    country: "",
    pruefungsdatum: "", // Prüfungsdatum
    addedDate: "",      // Eintragsdatum (буде встановлено автоматично)
    language: selectedLanguage || "de",
    phone: "",
    preferredContact: "phone", // phone, Telegram, WhatsApp, SMS, Email, Skype
    email: "", // автоматично заповнюється з профілю
  });
  const [userData, setUserData] = useState(null);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  // Встановлюємо Eintragsdatum на поточну дату при завантаженні
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, addedDate: today }));
  }, []);

  // Завантаження даних користувача з профілю
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const userDocRef = doc(db, "users", user.uid, "userData", "data");
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
          setFormData((prev) => ({
            ...prev,
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            country: data.country || "",
            email: data.email || "", // E-Mail заповнюється автоматично
          }));
        }
      } catch (error) {
        console.error("Fehler beim Laden der Benutzerdaten:", error);
        toast.error("Fehler beim Laden der Benutzerdaten.");
      }
    };
    fetchUserData();
  }, [user]);

  // Перевірка, чи вже був доданий кейс для цього користувача
  useEffect(() => {
    const checkSubmission = async () => {
      if (!user) return;
      try {
        const simulationDocRef = doc(db, "simulation", formData.region);
        const docSnap = await getDoc(simulationDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const arrayCases = data.arrayCases || [];
          const already = arrayCases.some((entry) => entry.uid === user.uid);
          setAlreadySubmitted(already);
        }
      } catch (error) {
        console.error("Error checking submission:", error);
      }
    };
    checkSubmission();
  }, [user, formData.region]);

  // Обробка зміни полів форми
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Сабміт форми – додавання нового кейсу
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Bitte melden Sie sich an, um einen Fall hinzuzufügen.");
      return;
    }
    if (alreadySubmitted) {
      toast.info("Sie haben bereits einen Fall hinzugefügt.");
      return;
    }
    try {
      const simulationDocRef = doc(db, "simulation", formData.region);
      const newEntry = { uid: user.uid, createdAt: new Date() };
      Object.entries(formData).forEach(([key, value]) => {
        if (value && value.toString().trim() !== "") {
          newEntry[key] = value;
        }
      });
      await updateDoc(simulationDocRef, {
        arrayCases: arrayUnion(newEntry),
      });
      toast.success("Ihr Fall wurde hinzugefügt!");
      navigate("/simulation");
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Falls:", error);
      toast.error("Fehler beim Hinzufügen des Falls.");
    }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          <h2>Finde einen Partner für Simulation</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.entryRow}>
              <label>Prüfungsort:</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className={styles.selectField}
                required
                disabled={alreadySubmitted}
              >
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.entryRow}>
              <label>Vorname:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Vorname"
                required
                disabled={alreadySubmitted}
              />
            </div>
            <div className={styles.entryRow}>
              <label>Nachname:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Nachname"
                required
                disabled={alreadySubmitted}
              />
            </div>
            <div className={styles.entryRow}>
              <label>Land:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Land"
                required
                disabled={alreadySubmitted}
              />
            </div>
            <div className={styles.entryRow}>
              <label>E-Mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className={styles.inputField}
                disabled
                placeholder="E-Mail"
              />
            </div>
            <div className={styles.entryRow}>
              <label>Prüfungsdatum:</label>
              <input
                type="date"
                name="pruefungsdatum"
                value={formData.pruefungsdatum}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Prüfungsdatum"
                disabled={alreadySubmitted}
              />
            </div>
            <div className={styles.entryRow}>
              <label>Eintragsdatum:</label>
              <input
                type="date"
                name="addedDate"
                value={formData.addedDate}
                className={styles.inputField}
                placeholder="Eintragsdatum"
                disabled
              />
            </div>
            <div className={styles.entryRow}>
              <label>Sprache:</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className={styles.selectField}
                disabled={alreadySubmitted}
              >
                {languageOptions.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.entryRow}>
              <label>Telefonnummer:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Telefonnummer"
                disabled={alreadySubmitted}
              />
            </div>
            <div className={styles.entryRow}>
              <label>Bevorzugte Kontaktmethode:</label>
              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className={styles.selectField}
                disabled={alreadySubmitted}
              >
                <option value="phone">Telefon</option>
                <option value="Telegram">Telegram</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="SMS">SMS</option>
                <option value="Email">Email</option>
                <option value="Skype">Skype</option>
              </select>
            </div>
          </form>
          {alreadySubmitted && (
            <p className={styles.infoMessage}>
              Sie haben bereits einen Fall hinzugefügt.
            </p>
          )}
        </div>
        {/* Back-Button (лівий нижньому куті) */}
        <div className={styles.main_menu_back}>
          <button onClick={() => navigate(-1)} className={styles.backButton}>
          &#8592;
          </button>
        </div>
        {/* Save-Button (правий нижньому куті) */}
        {!alreadySubmitted && (
          <div className={styles.bottomRightSave}>
            <button onClick={handleSubmit} className={styles.saveButtonNew}>
              <FaSave />
            </button>
          </div>
        )}
      </ProtectedRoute>
    </MainLayout>
  );
};

export default AddSimulationEntryPage;