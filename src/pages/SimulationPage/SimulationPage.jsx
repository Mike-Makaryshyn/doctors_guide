// src/pages/SimulationPage/SimulationPage.jsx
import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaCog, FaArrowLeft, FaUserPlus, FaTrash } from "react-icons/fa";
import styles from "./SimulationPage.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// ... (інші імпорти, списки regions, languageOptions тощо)

const SimulationPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { selectedRegion: globalRegion } = useGetGlobalInfo();

  // Використовуємо регіон із глобальних налаштувань або "Bayern"
  const [region, setRegion] = useState(globalRegion || "Bayern");
  const [simulationCases, setSimulationCases] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Функція завантаження з Firestore
  const fetchSimulationCases = async () => {
    try {
      const docRef = doc(db, "simulation", region);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSimulationCases(data.arrayCases || []);
      } else {
        setSimulationCases([]);
      }
    } catch (error) {
      console.error("Error fetching simulation cases: ", error);
      toast.error("Fehler beim Laden der Anzeigen.");
    }
  };

  useEffect(() => {
    fetchSimulationCases();
  }, [region]);

  // Закриття модалки при кліку поза нею
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
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
  // Видалення оголошення поточного користувача
  const handleDeleteCase = async () => {
    if (!user) {
      toast.error("Bitte melden Sie sich an, um Ihre Anzeige zu löschen.");
      return;
    }
    const confirmed = window.confirm(
      "Sind Sie sicher, dass Sie Ihre Anzeige löschen möchten?"
    );
    if (!confirmed) return;

    try {
      const docRef = doc(db, "simulation", region);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        toast.info("Keine Einträge in dieser Region.");
        return;
      }
      const data = docSnap.data();
      const arrayCases = data.arrayCases || [];
      const filtered = arrayCases.filter((item) => item.uid !== user.uid);

      if (filtered.length === arrayCases.length) {
        toast.info(
          "Sie haben noch keine Anzeige aufgegeben oder sie wurde bereits gelöscht."
        );
        return;
      }
      await updateDoc(docRef, { arrayCases: filtered });
      toast.success("Ihre Anzeige wurde erfolgreich gelöscht!");
      fetchSimulationCases();
    } catch (error) {
      console.error("Error deleting user case:", error);
      toast.error("Fehler beim Löschen der Anzeige.");
    }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          {/* Кнопка (шестерня) */}
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
            aria-label="Einstellungen"
          >
            <FaCog />
          </button>

          {/* Список плиток */}
          <div className={styles.tilesContainer}>
            {simulationCases.length === 0 ? (
              <p>Keine Einträge</p>
            ) : (
              simulationCases.map((item, index) => (
                <div key={index} className={styles.tile}>
                  <h3 className={styles.tileHeader}>
                    {item.firstName} {item.lastName}
                  </h3>
                  {item.email && (
                    <p className={styles.tileItem}>
                      <strong>E-Mail:</strong>{" "}
                      <a href={`mailto:${item.email}`} className={styles.link}>
                        {item.email}
                      </a>
                    </p>
                  )}
                  {item.phone && (
                    <p className={styles.tileItem}>
                      <strong>Telefon:</strong>{" "}
                      <a href={`tel:${item.phone}`} className={styles.link}>
                        {item.phone}
                      </a>
                    </p>
                  )}
                  {item.language && (
                    <p className={styles.tileItem}>
                      <strong>Sprache:</strong> {item.language}
                    </p>
                  )}
                  {item.preferredContact && (
                    <p className={styles.tileItem}>
                      <strong>Kontakt:</strong> {item.preferredContact}
                    </p>
                  )}
                  {item.pruefungsdatum && (
                    <p className={styles.tileItem}>
                      <strong>Prüfungsdatum:</strong> {item.pruefungsdatum}
                    </p>
                  )}
                  {item.addedDate && (
                    <p className={styles.tileItem}>
                      <strong>Eintragsdatum:</strong> {item.addedDate}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Модалка */}
          {isModalOpen && (
            <div className={styles.settingsModal} ref={modalRef}>
              {/* Хрестик (закрити) */}
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Fenster schließen"
              >
                ×
              </button>

              {/* Синій контейнер для вибору регіону */}
              <div className={styles.nativeSelectContainer}>
                <select
                  className={styles.nativeSelect}
                  value={region}
                  onChange={handleRegionChange}
                  aria-label="Region auswählen"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Кнопки (квадратні) в один ряд */}
              <div className={styles.modalButtons}>
                {/* Anzeige aufgeben */}
                <Link
                  to="/add-simulation"
                  className={styles.addButton}
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Anzeige aufgeben"
                >
                  <FaUserPlus size={20} />
                </Link>

                {/* Anzeige löschen */}
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    handleDeleteCase();
                    setIsModalOpen(false);
                  }}
                  aria-label="Anzeige löschen"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Кнопка Back (зліва внизу) */}
        <div className={styles.main_menu_back}>
          <button
            onClick={() => navigate(-1)}
            className={styles.backButton}
            aria-label="Zurück"
          >
            <FaArrowLeft />
          </button>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default SimulationPage;