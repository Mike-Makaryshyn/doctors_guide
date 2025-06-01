// ───────────────────────────────────────────────────────────────────────────────
// src/pages/SimulationPage/AddSimulationEntryPage.jsx
// ───────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { supabase, simulationEmail } from "../../supabaseClient.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import styles from "./AddSimulationEntryPage.module.scss";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/SimulationPage";

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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { selectedRegion, selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  const [formData, setFormData] = useState({
    region: selectedRegion || "Bayern",
    firstName: "",
    lastName: "",
    country: "",
    pruefungsdatum: "",
    addedDate: "",
    language: selectedLanguage || "de",
    phone: "",
    preferredContact: "phone",
    email: "",
  });

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  // 1) Якщо змінився selectedRegion із глобального стейту → оновлюємо formData.region
  useEffect(() => {
    if (selectedRegion) {
      setFormData((prev) => ({ ...prev, region: selectedRegion }));
    }
  }, [selectedRegion]);

  // 2) Встановлюємо сьогоднішню дату в addedDate
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, addedDate: today }));
  }, []);

  // 3) Завантажуємо інформацію про користувача (Supabase Auth)
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => listener?.subscription?.unsubscribe();
  }, []);

  // 4) Як тільки user підвантажився → беремо firstName, lastName, country, email із user_metadata
  useEffect(() => {
    if (!user) return;
    const md = user.user_metadata || {};
    setFormData((prev) => ({
      ...prev,
      firstName: md.first_name || "",
      lastName: md.last_name || "",
      country: md.country || "",
      email: user.email || "",
    }));
  }, [user]);

  // 5) Перевірка, чи user вже подався у поточному регіоні (щоб заборонити дублікати)
  useEffect(() => {
    const checkSubmission = async () => {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from("simulation")
          .select("arraycases")
          .eq("region", formData.region)
          .maybeSingle();

        if (error) {
          console.error("Error checking submission:", error);
          return;
        }

        const arrayCases = (data && data.arraycases) || [];
        const already = arrayCases.some((entry) => entry.uid === user.id);
        setAlreadySubmitted(already);
      } catch (error) {
        console.error("Error checking submission:", error);
      }
    };
    checkSubmission();
  }, [user, formData.region]);

  // 6) Обробник полів
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 7) Надсилання форми
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error(t.pleaseLogin);
      return;
    }
    if (alreadySubmitted) {
      toast.info(t.alreadyAdded);
      return;
    }

    try {
      // ───────────── Частина 1: Додаємо/оновлюємо запис у таблиці "simulation" ─────────────
      const { data, error } = await supabase
        .from("simulation")
        .select("arraycases")
        .eq("region", formData.region)
        .maybeSingle();

      if (error) throw error;

      const arrayCases = (data && data.arraycases) || [];

      // Формуємо новий об’єкт entry
      const newEntry = { uid: user.id, createdAt: new Date().toISOString() };
      const camelToSnake = (s) => s.replace(/[A-Z]/g, (m) => "_" + m.toLowerCase());

      Object.entries(formData).forEach(([key, value]) => {
        if (value && value.toString().trim() !== "") {
          newEntry[camelToSnake(key)] = value;
        }
      });

      const updatedArray = [...arrayCases, newEntry];

      if (data) {
        // якщо запис на такий регіон вже є → UPDATE
        const { error: updateErr } = await supabase
          .from("simulation")
          .update({ arraycases: updatedArray })
          .eq("region", formData.region);
        if (updateErr) throw updateErr;
      } else {
        // інакше – INSERT
        const { error: insertErr } = await supabase
          .from("simulation")
          .insert({ region: formData.region, arraycases: updatedArray });
        if (insertErr) throw insertErr;
      }

      toast.success(t.addedSuccess);

      // ───────────── Частина 2: Викликаємо нову Edge Function ─────────────
      try {
        const fnResponse = await simulationEmail(
          formData.email,
          formData.firstName,
          formData.lastName,
          formData.region
        );
        console.log("Simulation-email response:", fnResponse);
      } catch (errEmail) {
        console.error("Error при виклику simulation-email:", errEmail);
        // Якщо потрібно, можна показати toast.error("Не вдалося надіслати підтвердження на Email");
      }

      // ───────────── Частина 3: Редіректимо назад на список ─────────────
      navigate("/simulation");
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Falls:", error);
      toast.error(t.addError);
    }
  };

  return (
    <MainLayout>
      <ProtectedRoute>
        <div className={styles.container}>
          <h2>{t.heading}</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* ───────── Регiон ───────── */}
            <div className={styles.entryRow}>
              <label>{t.examLocation}:</label>
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

            {/* ───────── Ім’я ───────── */}
            <div className={styles.entryRow}>
              <label>{t.firstName}:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.inputField}
                required
                disabled={alreadySubmitted}
              />
            </div>

            {/* ───────── Прізвище ───────── */}
            <div className={styles.entryRow}>
              <label>{t.lastName}:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.inputField}
                required
                disabled={alreadySubmitted}
              />
            </div>

            {/* ───────── Країна ───────── */}
            <div className={styles.entryRow}>
              <label>{t.country}:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={styles.inputField}
                required
                disabled={alreadySubmitted}
              />
            </div>

            {/* ───────── Email (тільки для читання) ───────── */}
            <div className={styles.entryRow}>
              <label>{t.email}:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className={styles.inputField}
                disabled
              />
            </div>

            {/* ───────── Дата екзамену ───────── */}
            <div className={styles.entryRow}>
              <label>{t.examDate}:</label>
              <input
                type="date"
                name="pruefungsdatum"
                value={formData.pruefungsdatum}
                onChange={handleChange}
                className={styles.inputField}
                disabled={alreadySubmitted}
              />
            </div>

            {/* ───────── Дата додавання (генерується автоматично) ───────── */}
            <div className={styles.entryRow}>
              <label>{t.entryDate}:</label>
              <input
                type="date"
                name="addedDate"
                value={formData.addedDate}
                className={styles.inputField}
                disabled
              />
            </div>

            {/* ───────── Мова ───────── */}
            <div className={styles.entryRow}>
              <label>{t.language}:</label>
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

            {/* ───────── Телефон ───────── */}
            <div className={styles.entryRow}>
              <label>{t.phone}:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.inputField}
                disabled={alreadySubmitted}
              />
            </div>

            {/* ───────── Улюблений канал зв’язку ───────── */}
            <div className={styles.entryRow}>
              <label>{t.preferredContact}:</label>
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

            {/* ───────── Кнопка Зберегти ───────── */}
            {!alreadySubmitted && (
              <div className={styles.bottomRightSave}>
                <button type="submit" className={styles.saveButtonNew}>
                  <FaSave />
                </button>
              </div>
            )}
          </form>

          {alreadySubmitted && (
            <p className={styles.infoMessage}>{t.alreadyAdded}</p>
          )}

          {/* ───────── Кнопка Назад ───────── */}
          <div className={styles.main_menu_back}>
            <button onClick={() => navigate("/simulation")} className={styles.backButton}>
              &#8592;
            </button>
          </div>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default AddSimulationEntryPage;
