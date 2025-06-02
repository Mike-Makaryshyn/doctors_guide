import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { supabase } from "../../supabaseClient";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSubscription } from "../../contexts/SubscriptionContext";
import AuthModal from "../../pages/AuthPage/AuthModal";
import SubscriptionModal from "../../pages/AuthPage/SubscriptionModal";
import { Helmet } from "react-helmet";
import simPageMetaImage from "../../assets/simulationpagemeta.png";
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

// Abkürzungen für die Region‑Box im Modal
const regionAbbreviations = {
  "Nordrhein-Westfalen": "NRW",
  "Westfalen-Lippe": "W-L",
  Bayern: "BY",
  Hessen: "HE",
  Niedersachsen: "NI",
  "Rheinland-Pfalz": "RP",
  Sachsen: "SA",
  Brandenburg: "BB",
  Bremen: "HB",
  Saarland: "SL",
  "Schleswig-Holstein": "SH",
  Thüringen: "TH",
  Berlin: "BE",
  Hamburg: "HH",
  "Mecklenburg Vorpommern": "MV",
  "Sachsen-Anhalt": "ST",
  "Baden-Württemberg-Freiburg": "BWF",
  "Baden-Württemberg-Karlsruhe": "BWK",
  "Baden-Württemberg-Stuttgart": "BWS",
  "Baden-Württemberg-Reutlingen": "BWR",
};

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

  const { status: subscriptionStatus } = useSubscription();
  const isSubscribed = subscriptionStatus === "active";

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const handleShowAuthModal = () => setShowAuthModal(true);
  const handleCloseAuthModal = () => setShowAuthModal(false);

  const handleShowSubscriptionModal = () => setShowSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setShowSubscriptionModal(false);

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
    if (user) {
      fetchSimulationCases(region);
    } else {
      setSimulationCases([]);
    }
  }, [region, user]);

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
    <>
      <Helmet>
        <title>Simulation Partner – Fachsprachenprüfung</title>
        <meta name="description" content="Suche nach Partnern für Simulationsübungen zur Fachsprachenprüfung in Deutschland." />
        <meta name="keywords" content="Fachsprachenprüfung, Simulation, Partner, Deutsch, Ärzte, Jena" />
        <meta property="og:title" content="Simulation Partner – Fachsprachenprüfung" />
        <meta property="og:description" content="Finde hier Partner für deine Simulationsübungen zur Fachsprachenprüfung." />
        <meta property="og:image" content={simPageMetaImage} />
        <meta property="og:type" content="website" />
      </Helmet>
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
          {!user ? (
            <div className={styles.noEntriesOverlay}>
              <div className={styles.noEntriesMessage}>
                <p>Bitte melde dich an, um Simulationen zu sehen.</p>
              </div>
            </div>
          ) : null}
          {user && (
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
          )}

          {/* Модальне вікно */}
          {isModalOpen && (
            <div className={styles.settingsModal} ref={modalRef}>
              <h2 className={styles.modalTitle}>Einstellungen</h2>
              {/* Кнопка закриття модалки */}
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
                aria-label={t.closeModalAria}
              >
                ×
              </button>
              <div className={styles.modalRow}>

                {/* Region */}
                <div className={styles.modalItem}>
                  <span className={styles.fieldLabel}>Region</span>
                  <div className={styles.regionSelectContainer}>
                    <div className={styles.regionCell}>
                      {regionAbbreviations[region] || region}
                    </div>
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
                </div>

                {/* Language */}
                <div className={styles.modalItem}>
                  <span className={styles.fieldLabel}>Sprache</span>
                  <div className={styles.languageSelectContainer}>
                    {/* Anzeige der aktuellen Auswahl als Kürzel */}
                    <div className={styles.languageCell}>
                      {languageFilter ? languageFilter.toUpperCase() : "∞"}
                    </div>
                    {/* Unsichtbares <select> mit vollständigen Sprachbezeichnungen */}
                    <select
                      className={styles.nativeSelect}
                      value={languageFilter}
                      onChange={(e) => setLanguageFilter(e.target.value)}
                      aria-label={t.selectLanguageAria}
                    >
                      <option value="">&infin;</option>
                      {languageOptions.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Add */}
                <div className={styles.modalItem}>
                  <span className={styles.fieldLabel}>Neu</span>
                  <button
                    className={styles.actionButton}
                    onClick={() => {
                      if (!user) {
                        handleShowAuthModal();
                      } else if (!isSubscribed) {
                        handleShowSubscriptionModal();
                      } else {
                        setIsModalOpen(false);
                        navigate("/add-simulation");
                      }
                    }}
                    aria-label={t.addEntryAria}
                  >
                    <FaUserPlus size={18} />
                  </button>
                </div>

                {/* Delete */}
                <div className={styles.modalItem}>
                  <span className={styles.fieldLabel}>Löschen</span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => {
                      if (!user) {
                        handleShowAuthModal();
                      } else if (!isSubscribed) {
                        handleShowSubscriptionModal();
                      } else {
                        handleDeleteCase();
                        setIsModalOpen(false);
                      }
                    }}
                    aria-label={t.deleteEntryAria}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div> {/* end .modalRow */}
            </div>
          )}
          </div>

          <AuthModal isOpen={showAuthModal} onClose={handleCloseAuthModal} />
          <SubscriptionModal isOpen={showSubscriptionModal} onClose={handleCloseSubscriptionModal} />

          {/* Кнопка Back */}
          <div className={styles.main_menu_back}>
     
          </div>
        </ProtectedRoute>
      </MainLayout>
    </>
  );
};

export default SimulationPage;