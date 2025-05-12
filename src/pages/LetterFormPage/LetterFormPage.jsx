// doctors_guide/src/pages/LetterFormPage/LetterFormPage.jsx

import React, { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { previewLetterPDF, downloadLetterPDF } from "./LetterPDFGenerator.jsx";
import {
  documentsEU,
  documentsNonEU,
  documentsOptional,
} from "../../constants/translation/documents";
import { documentsSecond } from "../../constants/translation/documentsSecond";
import approbationAddresses from "../../constants/translation/approbationAddressesNoPhone";

import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import AuthModal from "../../pages/AuthPage/AuthModal";
import Modal from "react-modal";
import { Helmet } from "react-helmet";
import { FaMapMarkedAlt, FaFileAlt, FaCog, FaEye, FaDownload } from "react-icons/fa";

// Підключення компонента туторіалу
import LetterFormTutorial from "./LetterFormTutorial";

import styles from "./LetterFormPage.module.scss";

Modal.setAppElement("#root");

// Функція для уніфікації назв деяких регіонів
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  if (
    r === "Baden-Württemberg-Freiburg" ||
    r === "Baden-Württemberg-Karlsruhe" ||
    r === "Baden-Württemberg-Stuttgart" ||
    r === "Baden-Württemberg-Reutlingen"
  ) {
    return "Baden-Württemberg";
  }
  return r;
};

const LetterFormPage = () => {
  const { user, selectedRegion } = useGetGlobalInfo();
  const navigate = useNavigate();

  // State для підрегіону Баварії
  const [bavariaSubregion, setBavariaSubregion] = useState("");

  // State для модалки авторизації
  const [showAuthModal, setShowAuthModal] = useState(false);

  // State для чекбоксів (дані про документи)
  const [checkboxes, setCheckboxes] = useState({});

  // Категорія (EU / Non-EU)
  const [category, setCategory] = useState(null);

  // Текст листа
  const [letterText, setLetterText] = useState("");

  // Основний стейт для регіону
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));

  // Персональні дані
  const [personalData, setPersonalData] = useState({
    name: "",
    strasse: "",
    plzOrt: "",
    email: "",
    telefon: "",
    aktenzeichenEnabled: false,
    aktenzeichen: "",
  });

  // State для модалки налаштувань (PDF тощо)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // State для запуску туторіалу
  const [showTutorial, setShowTutorial] = useState(false);

  // Перевірка, чи мобільний розмір екрана
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Слухач зміни розміру вікна
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Коли змінюється глобальний selectedRegion, уніфікуємо його
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Якщо користувач обрав у дропдауні щось, що не "Bayern", скидаємо підрегіон
  useEffect(() => {
    if (region !== "Bayern") {
      setBavariaSubregion("");
    }
  }, [region]);

  // Перевірка, чи користувач авторизований
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  // Обробник зміни полів персональних даних
  const handlePersonalDataChange = (field, value) => {
    setPersonalData((prev) => ({ ...prev, [field]: value }));
  };

  // Вмикання / вимикання поля "Aktenzeichen"
  const toggleAktenzeichen = () => {
    setPersonalData((prev) => ({
      ...prev,
      aktenzeichenEnabled: !prev.aktenzeichenEnabled,
    }));
  };

  // Завантаження даних із Supabase (чекбокси, категорія)
  const fetchData = useCallback(async () => {
    if (!user) return;
    try {
      // Load user metadata from Supabase
      const { data: { user: supUser }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      const metadata = supUser.user_metadata || {};

      // Read selectionData and educationRegion from metadata
      const selection = metadata.selectionData || {};
      setCheckboxes(selection.checkboxes || {});

      const eduRegion = metadata.educationRegion;
      setCategory(
        eduRegion === "EU" || eduRegion === "Non-EU" ? eduRegion : "Non-EU"
      );
    } catch (error) {
      console.error("Error loading data from Supabase:", error);
    }
  }, [user]);

  // Генерація тексту листа на основі вибраних документів
  const generateLetterText = useCallback(() => {
    if (!category) return;

    const mainDocs = category === "Non-EU" ? documentsNonEU : documentsEU;
    const secondDocs = documentsSecond;
    const optionalDocs = documentsOptional;
    const documentsSecondIDs = secondDocs.map((d) => d.id);

    const filteredMainDocs = mainDocs.filter((doc) => {
      const docState = checkboxes[doc.id?.toString()] || {};
      return !docState.hide && docState.is_exist;
    });
    const filteredSecondDocs = secondDocs.filter((doc) => {
      const docState = checkboxes[doc.id?.toString()] || {};
      return !docState.hide && docState.is_exist;
    });
    const filteredOptionalDocs = optionalDocs.filter((doc) => {
      const docState = checkboxes[doc.id?.toString()] || {};
      return !docState.hide && docState.is_exist;
    });

    const allDocs = [...filteredMainDocs, ...filteredOptionalDocs, ...filteredSecondDocs];

    let text = "Betreff: Übersendung der Unterlagen zum Approbationsantrag\n\n";
    text += "Sehr geehrte Damen und Herren,\n\n";
    text +=
      "hiermit reiche ich Ihnen die erforderlichen Dokumente für meinen Approbationsantrag ein. " +
      "Die Unterlagen liegen in der jeweils angegebenen Form vor:\n\n";

    allDocs.forEach((docItem, index) => {
      const docState = checkboxes[docItem.id?.toString()] || {};

      let docName = "N/A";
      if (typeof docItem.letterName === "string") {
        docName = docItem.letterName;
      } else if (typeof docItem.letterName === "object" && docItem.letterName.de) {
        docName = docItem.letterName.de;
      } else {
        docName = docItem.category?.de || "N/A";
      }

      if (documentsSecondIDs.includes(docItem.id)) {
        if (docItem.id === 17) {
          text += `${index + 1}. ${docName} – es wird als Original versandt.\n`;
        } else {
          const copyType = docState.ready_copies ? "beglaubigte Kopie" : "Original";
          text += `${index + 1}. ${docName} – es wird als ${copyType} versandt.\n`;
        }
      } else {
        const statusParts = [];
        if (docState.notary) statusParts.push("notariell beglaubigt");
        if (docState.translation) statusParts.push("übersetzt");

        const statusText = statusParts.join(", ");
        const copyType = docState.ready_copies ? "beglaubigte Kopie" : "Original";

        if (statusText) {
          text += `${index + 1}. ${docName} – ${statusText}. Es wird als ${copyType} versandt.\n`;
        } else {
          text += `${index + 1}. ${docName} – es wird als ${copyType} versandt.\n`;
        }
      }
    });

    text += "\nSollten weitere Unterlagen erforderlich sein oder Fragen bestehen, stehe ich Ihnen jederzeit zur Verfügung.\n\n";
    text += "Ich bitte um eine kurze Bestätigung des Eingangs.\n\n";
    text += "Vielen Dank für Ihre Unterstützung.\n\n";
    text += "Mit freundlichen Grüßen,\nIhr Name\n";

    setLetterText(text);
  }, [checkboxes, category]);

  useEffect(() => {
    generateLetterText();
  }, [checkboxes, category, generateLetterText]);

  const computedRegionKey =
    region !== "Bayern"
      ? region
      : bavariaSubregion
      ? `Bayern (${bavariaSubregion})`
      : null;

  const addressData = computedRegionKey
    ? approbationAddresses.find((item) => item.region === computedRegionKey)
    : null;

  const handleAllInOneClick = async () => {
    if (requireAuth()) return;
    await fetchData();
  };

  const textAreaRef = useRef(null);
  const autoResize = (elem) => {
    if (!elem) return;
    elem.style.height = "auto";
    elem.style.height = elem.scrollHeight + "px";
  };

  useEffect(() => {
    if (textAreaRef.current) {
      autoResize(textAreaRef.current);
    }
  }, [letterText]);

  const handleTextAreaChange = (e) => {
    setLetterText(e.target.value);
  };

  return (
    <MainLayout>
   

      <Helmet>
        <title>Begleitschreiben und Dokumentensammlung für die Approbation</title>
        <meta
          name="description"
          content="Testversion zur Sammlung von Dokumenten und dem Begleitschreiben für die Approbation. Hier finden Sie alle notwendigen Informationen und Unterlagen."
        />
        <meta property="og:title" content="Begleitschreiben und Dokumentensammlung" />
        <meta
          property="og:description"
          content="Testversion zur Sammlung von Dokumenten und dem Begleitschreiben für die Approbation."
        />
        <meta property="og:image" content="/path/to/documentImage.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/path/to/documentImage.jpg" />
      </Helmet>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <div className={styles.letterFormContainer}>
        <h1 className={styles.pageTitle}>Begleitschreiben mit Dokumenten</h1>

        <div className={styles.columnsWrapper}>
          <div className={styles.leftColumn}>
            <div className={styles.userAddressCard} data-tutorial="userAddressCard">
              <h2 className={styles.subTitle}>Deine Adresse</h2>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Name / Vorname + Nachname"
                  value={personalData.name}
                  onChange={(e) => handlePersonalDataChange("name", e.target.value)}
                />
              </div>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Straße, Hausnummer"
                  value={personalData.strasse}
                  onChange={(e) => handlePersonalDataChange("strasse", e.target.value)}
                />
              </div>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="PLZ, Ort"
                  value={personalData.plzOrt}
                  onChange={(e) => handlePersonalDataChange("plzOrt", e.target.value)}
                />
              </div>
              <div className={styles.inputRow}>
                <div className={styles.akInputContainer}>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Aktenzeichen"
                    value={personalData.aktenzeichen}
                    onChange={(e) => handlePersonalDataChange("aktenzeichen", e.target.value)}
                    disabled={!personalData.aktenzeichenEnabled}
                  />
                  <button
                    type="button"
                    className={styles.toggleButton}
                    onClick={toggleAktenzeichen}
                  >
                    {personalData.aktenzeichenEnabled ? "On" : "Off"}
                  </button>
                </div>
              </div>
              <div className={styles.inputRow}>
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="E-Mail"
                  value={personalData.email}
                  onChange={(e) => handlePersonalDataChange("email", e.target.value)}
                />
              </div>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Telefon"
                  value={personalData.telefon}
                  onChange={(e) => handlePersonalDataChange("telefon", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.regionTile} data-tutorial="regionTile">
              <div className={styles.iconSelectContainer}>
                <FaMapMarkedAlt className={styles.mapIcon} size={24} />
                <select
                  className={styles.hiddenSelect}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  data-tutorial="selectAddress"
                >
                  {approbationAddresses.map((addr) => (
                    <option key={addr.region} value={addr.region}>
                      {addr.region}
                    </option>
                  ))}
                </select>
              </div>
              
              <h2 className={styles.subTitle}>
                {region === "Bayern" && bavariaSubregion
                  ? `Adresse für Bayern (${bavariaSubregion})`
                  : `Adresse für ${region}`}
              </h2>

              {region === "Bayern" && (
                <div className={styles.subregionToggle}>
                  <button
                    type="button"
                    className={
                      bavariaSubregion === "Oberbayern"
                        ? styles.subregionButtonActive
                        : styles.subregionButton
                    }
                    onClick={() => setBavariaSubregion("Oberbayern")}
                  >
                    Oberbayern
                  </button>
                  <button
                    type="button"
                    className={
                      bavariaSubregion === "Unterfranken"
                        ? styles.subregionButtonActive
                        : styles.subregionButton
                    }
                    onClick={() => setBavariaSubregion("Unterfranken")}
                  >
                    Unterfranken
                  </button>
                </div>
              )}

              {computedRegionKey ? (
                addressData ? (
                  <div className={styles.addressInfo}>
                    <p>
                      <strong>{addressData.office}</strong>
                    </p>
                    {addressData.department && <p>{addressData.department}</p>}
                    {Array.isArray(addressData.address) ? (
                      addressData.address.map((line, idx) => <p key={idx}>{line}</p>)
                    ) : (
                      <p>{addressData.address}</p>
                    )}
                    {addressData.email && (
                      <p>
                        E-Mail:{" "}
                        {typeof addressData.email === "object"
                          ? JSON.stringify(addressData.email, null, 2)
                          : addressData.email}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className={styles.errorText}>
                    Keine Adresse für diesen Region gefunden.
                  </p>
                )
              ) : (
                region === "Bayern" && (
                  <p style={{ marginTop: "10px", color: "#013b6e" }}>
                    Bitte wählen Sie Oberbayern oder Unterfranken.
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        <div className={styles.textAreaFullWidth}>
          <button
            className={styles.allInOneButton}
            onClick={handleAllInOneClick}
            title="Daten abrufen & Schreiben generieren"
            data-tutorial="allInOneButton"
          >
            <FaFileAlt size={20} />
          </button>
          <textarea
            ref={textAreaRef}
            className={styles.bigTextArea}
            value={letterText}
            onChange={handleTextAreaChange}
            rows={1}
            data-tutorial="letterTextArea"
          />
        </div>

        {settingsModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={isMobile ? styles.popupMobile : styles.popupDesktop}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsModalOpen(false)}
                style={{ display: showTutorial ? "none" : "block" }}
              >
                ×
              </button>

              <h2 className={styles.modalTitle}>PDF Funktion</h2>

              <div className={styles.buttonsArea}>
                <div className={styles.iconButton}>
                  <button
                    onClick={() => {
                      if (requireAuth()) return;
                      previewLetterPDF(personalData, addressData, letterText);
                    }}
                    className={styles.squareButton}
                    title="Vorschau"
                    data-tutorial="squareButton"
                  >
                    <FaEye className={styles.iconInside} />
                  </button>
                </div>
                <div className={styles.iconButton}>
                  <button
                    onClick={() => {
                      if (requireAuth()) return;
                      downloadLetterPDF(personalData, addressData, letterText);
                    }}
                    className={styles.squareButton}
                    title="Druck"
                    data-tutorial="downloadButton"
                  >
                    <FaDownload className={styles.iconInside} />
                  </button>
                </div>
                <div className={styles.iconButton}>
                  <Link
                    to="/documents"
                    className={`${styles.squareButton} ${styles.documentsButton}`}
                    title="Documents"
                    data-tutorial="documentsButton"
                  >
                    <span className={styles.invertedIcon}>
                      <FaFileAlt className={styles.iconInside} />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={styles.documentsContainer}>
                <Link to="/documents" className={styles.documentsButton}>
                  {/* Порожній контейнер для посилання */}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Кнопка «шестерня» для відкриття налаштувань (лише якщо модалка закрита) */}
        {!settingsModalOpen && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => setSettingsModalOpen(true)}
              data-tutorial="settingsButton"
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>

      {/* Плаваюча кнопка для запуску туторіалу, яка відображається, коли модалка відкрита */}
      {settingsModalOpen && (
        <button
          data-tutorial="tutorialTrigger"
          className={styles.tutorialButton}
          onClick={() => {
            setSettingsModalOpen(false);
            setShowTutorial(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="#ededed"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="#ededed" fill="none" />
            <line x1="12" y1="12" x2="12" y2="15.5" strokeWidth="3" />
            <circle cx="12" cy="7" r="0.5" fill="#ededed" />
          </svg>
        </button>
      )}

      {showTutorial && (
        <LetterFormTutorial
          run={showTutorial}
          onFinish={() => setShowTutorial(false)}
          openModal={() => setSettingsModalOpen(true)}
        />
      )}
    </MainLayout>
  );
};

export default LetterFormPage;