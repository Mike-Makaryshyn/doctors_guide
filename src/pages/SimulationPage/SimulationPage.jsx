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

// Опції мов (повна назва)
const languageOptions = [
  { value: "de", label: "Deutsch" },
  { value: "en", label: "English" },
  { value: "uk", label: "Ukrainisch" },
  { value: "ru", label: "Russisch" },
  { value: "tr", label: "Türkisch" },
  { value: "ar", label: "Arabisch" },
  { value: "fr", label: "Französisch" },
  { value: "es", label: "Spanisch" },
  { value: "pl", label: "Polnisch" },
  { value: "el", label: "Griechisch" },
  { value: "ro", label: "Rumänisch" },
];

const SimulationPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { selectedRegion: globalRegion } = useGetGlobalInfo();

  const [region, setRegion] = useState(globalRegion || "Bayern");
  const [simulationCases, setSimulationCases] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Стан для фільтрації за мовою – фільтрація реалізована лише в модальному вікні
  const [languageFilter, setLanguageFilter] = useState("");

  // Функція завантаження оголошень із Firestore
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

  const filteredCases = languageFilter
    ? simulationCases.filter((item) => item.language === languageFilter)
    : simulationCases;

  // Закриття модального вікна при кліку поза ним
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

  // Видалення оголошення з підтвердженням
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

  const getLanguageLabel = (languageCode) => {
    const language = languageOptions.find(
      (lang) => lang.value === languageCode
    );
    return language ? language.label : languageCode;
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          {/* Кнопка налаштувань */}
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
            aria-label="Einstellungen"
          >
            <FaCog />
          </button>

          {/* Список плиток */}
          <div className={styles.tilesContainer}>
            {filteredCases.length === 0 ? (
              <p style={{ color: "#013b6e" }}>Keine Einträge</p>
            ) : (
              filteredCases.map((item, index) => (
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
                  {item.preferredContact && (
                    <p className={styles.tileItem}>
                      <strong>Kontakt:</strong> {item.preferredContact}
                    </p>
                  )}
                  {item.language && (
                    <p className={styles.tileItem}>
                      <strong>Sprache:</strong>{" "}
                      {getLanguageLabel(item.language)}
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

          {/* Модальне вікно */}
          {isModalOpen && (
            <div className={styles.settingsModal} ref={modalRef}>
              {/* Кнопка закриття модалки */}
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Fenster schließen"
              >
                ×
              </button>

              {/* Контейнер для вибору регіону */}
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

              {/* Рядок для вибору мови та кнопок */}
              <div className={styles.modalRow}>
                {/* Контейнер для вибору мови (при відкритті drop-down показує повні назви) */}
                <div className={styles.languageSelectContainer}>
                  <select
                    className={styles.languageSelect}
                    value={languageFilter}
                    onChange={(e) => setLanguageFilter(e.target.value)}
                    aria-label="Sprache auswählen"
                  >
                    <option value="">&infin;</option>
                    {languageOptions.map((lang) => (
                      <option
                        key={lang.value}
                        value={lang.value}
                        title={lang.label}
                      >
                        {lang.value.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Кнопка для додавання нового випадку */}
                <Link
                  to="/add-simulation"
                  className={styles.actionButton}
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Anzeige aufgeben"
                >
                  <FaUserPlus size={20} />
                </Link>

                {/* Кнопка для видалення випадку */}
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

        {/* Кнопка Back */}
        <div className={styles.main_menu_back}>
          <button
            onClick={() => navigate("/main_menu")}
            className={styles.backButton}
            aria-label="Zurück"
          >
            &#8592;
          </button>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default SimulationPage;
