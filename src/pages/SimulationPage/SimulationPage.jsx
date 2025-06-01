import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { supabase } from "../../supabaseClient";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaCog, FaArrowLeft, FaUserPlus, FaTrash } from "react-icons/fa";
import styles from "./SimulationPage.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/SimulationPage";

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
  // Supabase current user
  const [user, setUser] = useState(null);

  // keep user in sync with Supabase auth
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener?.subscription?.unsubscribe();
  }, []);
  const { selectedRegion: globalRegion, selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  const [region, setRegion] = useState(globalRegion || "Bayern");
  // Synchronisiere lokalen Region-State, falls selectedRegion erst später aus dem Kontext kommt
  useEffect(() => {
    if (globalRegion) {
      setRegion(globalRegion);
    }
  }, [globalRegion]);
  const [simulationCases, setSimulationCases] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Стан для фільтрації за мовою – фільтрація реалізована лише в модальному вікні
  const [languageFilter, setLanguageFilter] = useState("");

  // schützt vor "stale" Antworten: jede neue Abfrage bekommt höhere ID
  const fetchSeqRef = useRef(0);

  // Функція завантаження оголошень із Supabase, mit Guard gegen Race-Conditions
  const fetchSimulationCases = async (rgn) => {
    const seq = ++fetchSeqRef.current;      // diese Abfrage ist Nr. seq
    try {
      const { data, error } = await supabase
        .from("simulation")
        .select("arraycases")
        .eq("region", rgn)
        .maybeSingle();

      // Antwort einer veralteten Abfrage? -> ignorieren
      if (seq !== fetchSeqRef.current) return;

      if (error) throw error;
      setSimulationCases((data && data.arraycases) || []);
    } catch (error) {
      console.error("Error fetching simulation cases: ", error);
      toast.error(t.fetchError);
    }
  };

  useEffect(() => {
    fetchSimulationCases(region);
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

  // Видалення оголошення з підтвердженням (Supabase)
  const handleDeleteCase = async () => {
    if (!user) {
      toast.error(t.notAuthenticatedError);
      return;
    }
    const confirmed = window.confirm(t.confirmDeletePrompt);
    if (!confirmed) return;
    try {
      // fetch current arraycases for this region
      const { data, error } = await supabase
        .from("simulation")
        .select("arraycases")
        .eq("region", region)
        .maybeSingle();

      if (error) throw error;

      const arrayCases = (data && data.arraycases) || [];
      const isOwner = (it) => {
        // підтримує різні варіанти ключів і можливі пробіли
        const uidRaw =
          it.uid ??
          it.user_id ??
          it.userId ??
          it.userid ??
          "";
        return uidRaw.replace(/\s+/g, "") === user.id;
      };

      const filtered = arrayCases.filter((item) => !isOwner(item));

      if (filtered.length === arrayCases.length) {
        // Lokale Anzeige entfernen, falls sie noch da ist
        setSimulationCases(filtered);

        toast.info(
          t.noEntryToDeleteInfo
        );
        return;
      }

      const { error: updateError } = await supabase
        .from("simulation")
        .update({ arraycases: filtered })
        .eq("region", region);

      if (updateError) throw updateError;

      // Aktualisiere lokale Liste sofort, ohne auf neuen Fetch zu warten
      setSimulationCases(filtered);

      toast.success(t.deleteSuccess);
      // Hol sicherheitshalber frische Daten von Supabase
      fetchSimulationCases(region);
    } catch (error) {
      console.error("Error deleting user case:", error);
      toast.error(t.deleteError);
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
            aria-label={t.settingsAria}
          >
            <FaCog />
          </button>

          {/* Список плиток */}
          <div className={styles.tilesContainer}>
            {filteredCases.length === 0 ? (
              <div className={styles.noEntriesOverlay}>
                <div className={styles.noEntriesMessage}>
                  <p>{t.noEntries}</p>
                </div>
              </div>
            ) : (
              filteredCases.map((item, index) => {
                // Support both camelCase (old entries) and snake_case (new entries)
                const firstName = item.firstName ?? item.first_name ?? "";
                const lastName = item.lastName ?? item.last_name ?? "";
                const preferredContact = item.preferredContact ?? item.preferred_contact;
                const addedDate = item.addedDate ?? item.added_date;

                return (
                  <div key={index} className={styles.tile}>
                    <h3 className={styles.tileHeader}>
                      {firstName} {lastName}
                    </h3>

                    {item.email && (
                      <p className={styles.tileItem}>
                        <strong>{t.tileEmailLabel}</strong>{" "}
                        <a href={`mailto:${item.email}`} className={styles.link}>
                          {item.email}
                        </a>
                      </p>
                    )}

                    {item.phone && (
                      <p className={styles.tileItem}>
                        <strong>{t.tilePhoneLabel}</strong>{" "}
                        <a href={`tel:${item.phone}`} className={styles.link}>
                          {item.phone}
                        </a>
                      </p>
                    )}

                    {preferredContact && (
                      <p className={styles.tileItem}>
                        <strong>{t.tileContactLabel}</strong> {preferredContact}
                      </p>
                    )}

                    {item.language && (
                      <p className={styles.tileItem}>
                        <strong>{t.tileLanguageLabel}</strong> {getLanguageLabel(item.language)}
                      </p>
                    )}

                    {item.pruefungsdatum && (
                      <p className={styles.tileItem}>
                        <strong>{t.tileExamDateLabel}</strong> {item.pruefungsdatum}
                      </p>
                    )}

                    {addedDate && (
                      <p className={styles.tileItem}>
                        <strong>{t.tileEntryDateLabel}</strong> {addedDate}
                      </p>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Модальне вікно */}
          {isModalOpen && (
            <div className={styles.settingsModal} ref={modalRef}>
              {/* Кнопка закриття модалки */}
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
                aria-label={t.closeModalAria}
              >
                ×
              </button>

              {/* Контейнер для вибору регіону */}
              <div className={styles.nativeSelectContainer}>
                <select
                  className={styles.nativeSelect}
                  value={region}
                  onChange={handleRegionChange}
                  aria-label={t.selectRegionAria}
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
                    aria-label={t.selectLanguageAria}
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
                  aria-label={t.addEntryAria}
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
                  aria-label={t.deleteEntryAria}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Кнопка Back */}
        <div className={styles.main_menu_back}>
   
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default SimulationPage;
