import React, { useState, useEffect, useCallback, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

import LetterGenerator from "./LetterGenerator.jsx";
import { previewLetterPDF, downloadLetterPDF } from "./LetterPDFGenerator.jsx";
import { FaEye, FaDownload } from "react-icons/fa";
import {
  documentsEU,
  documentsNonEU,
  documentsOptional,
} from "../../constants/translation/documents";
import { documentsSecond } from "../../constants/translation/documentsSecond";
import approbationAddresses from "../../constants/translation/approbationAddressesNoPhone";

import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Іконки (react-icons)
import { FaMapMarkedAlt, FaFileAlt, FaCog } from "react-icons/fa";

// React Router (для посилання всередині SPA)
import { Link } from "react-router-dom";

// Для модального вікна авторизації
import AuthModal from "../../pages/AuthPage/AuthModal";

// Для модального вікна (PDF Функція)
import Modal from "react-modal";
Modal.setAppElement("#root");

import { Helmet } from "react-helmet";
import documentImage from "../../assets/documentImage.jpg"; // заміни documentImage.jpg на свою назву файлу

import styles from "./LetterFormPage.module.scss";

// Функція для уніфікації регіону
const unifyRegion = (r) => (r === "Westfalen-Lippe" ? "Nordrhein-Westfalen" : r);

const LetterFormPage = () => {
  const { user, selectedRegion } = useGetGlobalInfo();

  // Додано стан для модального вікна авторизації
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Функція для перевірки авторизації
  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return true;
    }
    return false;
  };

  const [checkboxes, setCheckboxes] = useState({});
  const [category, setCategory] = useState(null);
  const [letterText, setLetterText] = useState("");

  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  const [personalData, setPersonalData] = useState({
    name: "",
    strasse: "",
    plzOrt: "",
    email: "",
    telefon: "",
    aktenzeichenEnabled: false,
    aktenzeichen: "",
    // Поля для ActionSession видалено!
  });

  // Стан модального вікна "Налаштування"
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Визначення мобільного режиму
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // При зміні глобального регіону
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Обробник змін у власній адресі
  const handlePersonalDataChange = (field, value) => {
    setPersonalData((prev) => ({ ...prev, [field]: value }));
  };

  // Перемикач для Aktenzeichen
  const toggleAktenzeichen = () => {
    setPersonalData((prev) => ({
      ...prev,
      aktenzeichenEnabled: !prev.aktenzeichenEnabled,
    }));
  };

  // 1. Завантаження даних
  const fetchData = useCallback(async () => {
    if (!user) return;
    try {
      const selectionDocRef = doc(db, "users", user.uid, "userData", "selectionData");
      const selectionSnap = await getDoc(selectionDocRef);
      if (selectionSnap.exists()) {
        const fetchedData = selectionSnap.data();
        setCheckboxes(fetchedData.checkboxes || {});
      }

      const dataDocRef = doc(db, "users", user.uid, "userData", "data");
      const dataSnap = await getDoc(dataDocRef);
      if (dataSnap.exists()) {
        const userData = dataSnap.data();
        setCategory(
          userData.educationRegion === "EU" || userData.educationRegion === "Non-EU"
            ? userData.educationRegion
            : "Non-EU"
        );
      }
      console.log("Daten erfolgreich von Firestore abgerufen!");
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten aus Firestore:", error);
    }
  }, [user]);

  // 2. Генерація листа
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

  // Виклик generateLetterText, щойно змінилися checkboxes або category
  useEffect(() => {
    generateLetterText();
  }, [checkboxes, category, generateLetterText]);

  // 3. Визначення адреси за регіоном
  const addressData = approbationAddresses.find((item) => item.region === region);

  // Єдина кнопка, що викликає fetchData
  const handleAllInOneClick = async () => {
    if (requireAuth()) return;
    await fetchData();
  };

  // ----------------------------
  // Автоматичне збільшення textarea
  // ----------------------------
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
      {/* Мета-дані для SEO та соціальних мереж */}
      <Helmet>
        <title>Супровідний лист та збір документів для аплікації</title>
        <meta
          name="description"
          content="Апробація збору документів та супровідного листа для аплікації. Збір необхідних документів та оформлення листа."
        />
        <meta property="og:title" content="Супровідний лист та збір документів" />
        <meta property="og:description" content="Апробація збору документів та супровідного листа для аплікації." />
        <meta property="og:image" content={documentImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={documentImage} />
      </Helmet>

      {/* Модальне вікно авторизації */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      
      <div className={styles.letterFormContainer}>
        <h1 className={styles.pageTitle}>Begleitschreiben mit Dokumenten</h1>
        <div className={styles.columnsWrapper}>
          {/* Ліва колонка: наша адреса */}
          <div className={styles.leftColumn}>
            <div className={styles.userAddressCard}>
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
              {/* Aktenzeichen */}
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
              {/* Поля для ActionSession видалено */}
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

          {/* Права колонка: адреса регіону */}
          <div className={styles.rightColumn}>
            <div className={styles.regionTile}>
              <div className={styles.iconSelectContainer}>
                <FaMapMarkedAlt className={styles.mapIcon} size={24} />
                <select
                  className={styles.hiddenSelect}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {approbationAddresses.map((addr) => (
                    <option key={addr.region} value={addr.region}>
                      {addr.region}
                    </option>
                  ))}
                </select>
              </div>
              <h2 className={styles.subTitle}>Adresse für {region}</h2>
              {addressData ? (
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
              )}
            </div>
          </div>
        </div>

        {/* Textarea та кнопка "All in One" */}
        <div className={styles.textAreaFullWidth}>
          <button
            className={styles.allInOneButton}
            onClick={handleAllInOneClick}
            title="Daten abrufen & Schreiben generieren"
          >
            <FaFileAlt size={20} />
          </button>
          <textarea
            ref={textAreaRef}
            className={styles.bigTextArea}
            value={letterText}
            onChange={handleTextAreaChange}
            rows={1}
          />
        </div>

        {/* Модальне вікно налаштувань */}
        {settingsModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={isMobile ? styles.popupMobile : styles.popupDesktop}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setSettingsModalOpen(false)}
              >
                ×
              </button>

              {/* Заголовок модального вікна */}
              <h2 className={styles.modalTitle}>PDF Funktion</h2>

              {/* Дві кнопки для Vorschau & Druck PDF */}
              <div className={styles.buttonsArea}>
                <div className={styles.iconButton}>
                  <button
                    onClick={() => {
                      if (requireAuth()) return;
                      previewLetterPDF(personalData, addressData, letterText);
                    }}
                    className={styles.squareButton}
                    title="Vorschau"
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
                  >
                    <FaDownload className={styles.iconInside} />
                  </button>
                </div>
                <div className={styles.iconButton}>
                  <Link
                    to="/documents"
                    className={`${styles.squareButton} ${styles.documentsButton}`}
                    title="Documents"
                  >
                    <span className={styles.invertedIcon}>
                      <FaFileAlt className={styles.iconInside} />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={styles.documentsContainer}>
                <Link to="/documents" className={styles.documentsButton}>
                  {/* Пустий контейнер для посилання */}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Плаваюча кнопка налаштувань у нижньому правому куті */}
        {!settingsModalOpen && (
          <div className={styles.bottomRightSettings}>
            <button
              className={styles.settingsButton}
              onClick={() => setSettingsModalOpen(true)}
            >
              <FaCog />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LetterFormPage;