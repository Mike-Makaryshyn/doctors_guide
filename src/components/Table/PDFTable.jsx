import React, { useMemo, useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import PropTypes from "prop-types";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";
import styles from "./PDFTable.module.scss";

// Firebase
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

// Імпортуємо notNeededText
import { notNeededText } from "../../constants/translation/documents";

// Прапорці для мов (можете змінити “💩” на щось інше для російської)
const languageFlags = {
  de: "🇩🇪",
  en: "🇬🇧",
  uk: "🇺🇦",
  ru: "💩",
  tr: "🇹🇷",
  ar: "🇸🇦",
  fr: "🇫🇷",
  es: "🇪🇸",
  pl: "🇵🇱",
};

// ------------------ Хелпер для рядків таблиці ------------------
function makeRowObject(doc, checkboxes, language) {
  const docId = String(doc.id);
  const docState = checkboxes[docId] || {};

  // 1. Заголовок (title)
  const titleFromCategory = doc.category?.[language] || doc.category?.de || "";
  const titleFromName = doc.name?.[language] || doc.name?.de || "";
  const title = titleFromCategory || titleFromName || "";

  // 2. "Not needed" для поточної мови
  const notNeededValue =
    notNeededText[language] || notNeededText["de"] || "Not needed";

  // 3. Чи це документ з id=17 (ROV-17)?
  const isRov17 = docId === "17";

  function getFieldValue(fieldName) {
    // Якщо ROV-17 і поле не is_exist / sent => "Not needed"
    if (isRov17 && !["is_exist", "sent"].includes(fieldName)) {
      return notNeededValue;
    }
    // Перевіряємо, чи документ сам не має поля "notNeeded"
    let docFieldVal = doc[fieldName];
    if (typeof docFieldVal === "object" && docFieldVal !== null) {
      docFieldVal = docFieldVal[language] || docFieldVal["de"] || "";
    }
    const docNotNeeded = notNeededText[language] || notNeededText["de"];
    if (docFieldVal && docFieldVal === docNotNeeded) {
      return notNeededValue;
    }
    // Інакше дивимось, чи відмічено чекбокс
    return docState[fieldName] ? "X" : "";
  }

  const available = getFieldValue("is_exist");
  const apostille = getFieldValue("apostile");
  const notary = getFieldValue("notary");
  const translation = getFieldValue("translation");
  const ready_copies = getFieldValue("ready_copies");
  const sent = getFieldValue("sent");

  return {
    title,
    available,
    apostile: apostille,
    notary,
    translation,
    ready_copies,
    sent,
  };
}

const PDFTable = ({
  onClose,
  // Глобальна мова сторінки
  language: globalLanguage,
  category, // "EU" або "Non-EU"
  checkboxes,
  documents,
}) => {
  // ------------------ 1) Локальний стан для PDF-мови ------------------
  const [pdfLanguage, setPdfLanguage] = useState(globalLanguage);

  // ------------------ 2) Стани для firstName, lastName (завантадення з Firebase) ------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ------------------ 3) Стан для зберігання простої дати (без годин) ------------------
  const [creationDate, setCreationDate] = useState("");

  // ------------------ 4) Завантаження firstName, lastName із Firebase ------------------
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Наприклад, дані лежать у "users/{uid}/userData/data"
        const dataDocRef = doc(db, "users", user.uid, "userData", "data");
        const unsubData = onSnapshot(dataDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFirstName(data.firstName || "");
            setLastName(data.lastName || "");
          }
        });
        // Оновлюємо creationDate (тільки один раз, або при кожній авторизації)
        const dateOnly = new Date().toLocaleDateString();
        setCreationDate(dateOnly);

        return () => unsubData();
      } else {
        setFirstName("");
        setLastName("");
      }
    });

    return () => unsubAuth();
  }, []);

  // ------------------ 5) Опишемо варіанти для випадаючого списку ------------------
  const availablePdfLangs = [
    { value: "de", shortLabel: "DE", fullLabel: "Deutsch", flag: "🇩🇪" },
    { value: "en", shortLabel: "EN", fullLabel: "English", flag: "🇬🇧" },
    { value: "uk", shortLabel: "UKR", fullLabel: "Українська", flag: "🇺🇦" },
    { value: "ru", shortLabel: "RU", fullLabel: "Русский", flag: "💩" },
    { value: "fr", shortLabel: "FR", fullLabel: "Français", flag: "🇫🇷" },
    { value: "es", shortLabel: "ES", fullLabel: "Español", flag: "🇪🇸" },
    { value: "ar", shortLabel: "AR", fullLabel: "العربية", flag: "🇸🇦" },
    { value: "tr", shortLabel: "TR", fullLabel: "Türkçe", flag: "🇹🇷" },
    { value: "pl", shortLabel: "PL", fullLabel: "Polski", flag: "🇵🇱" },
  ];

  // ------------------ 6) Колонки першої таблиці ------------------
  const firstTableColumns = useMemo(() => {
    if (category === "EU") {
      // Без apostille
      return [
        { header: "Document", dataKey: "title" },
        { header: "Available", dataKey: "available" },
        { header: "Notarized", dataKey: "notary" },
        { header: "Translation", dataKey: "translation" },
        { header: "Copies", dataKey: "ready_copies" },
        { header: "Sent", dataKey: "sent" },
      ];
    } else {
      // Non-EU
      return [
        { header: "Document", dataKey: "title" },
        { header: "Available", dataKey: "available" },
        { header: "Apostille", dataKey: "apostile" },
        { header: "Notarized", dataKey: "notary" },
        { header: "Translation", dataKey: "translation" },
        { header: "Copies", dataKey: "ready_copies" },
        { header: "Sent", dataKey: "sent" },
      ];
    }
  }, [category]);

  // ------------------ 7) Колонки другої таблиці ------------------
  const secondTableColumns = [
    { header: "Document", dataKey: "title" },
    { header: "Available", dataKey: "available" },
    { header: "Sent", dataKey: "sent" },
  ];

  // ------------------ 8) Масив документів ------------------
  const mainDocs = useMemo(() => {
    return category === "EU" ? documents.mainEU : documents.mainNonEU;
  }, [category, documents]);

  const optionalIncluded = useMemo(() => {
    return documents.optional.filter(
      (doc) => !checkboxes[String(doc.id)]?.hide
    );
  }, [documents.optional, checkboxes]);

  const firstTableDocs = useMemo(() => {
    return [...mainDocs, ...optionalIncluded];
  }, [mainDocs, optionalIncluded]);

  const secondTableDocs = useMemo(() => {
    return documents.second.filter((doc) => !checkboxes[String(doc.id)]?.hide);
  }, [documents.second, checkboxes]);

  // ------------------ 9) Тіла таблиць для обраної локальної pdfLanguage ------------------
  const firstTableBody_userLang = useMemo(() => {
    return firstTableDocs
      .map((doc) => makeRowObject(doc, checkboxes, pdfLanguage))
      .filter((row) => row.title.trim() !== "");
  }, [firstTableDocs, checkboxes, pdfLanguage]);

  const secondTableBody_userLang = useMemo(() => {
    return secondTableDocs
      .map((doc) => makeRowObject(doc, checkboxes, pdfLanguage))
      .filter((row) => row.title.trim() !== "");
  }, [secondTableDocs, checkboxes, pdfLanguage]);

  // ------------------ 10) Тіла таблиць для німецької ------------------
  const firstTableBody_german = useMemo(() => {
    return firstTableDocs
      .map((doc) => makeRowObject(doc, checkboxes, "de"))
      .filter((row) => row.title.trim() !== "");
  }, [firstTableDocs, checkboxes]);

  const secondTableBody_german = useMemo(() => {
    return secondTableDocs
      .map((doc) => makeRowObject(doc, checkboxes, "de"))
      .filter((row) => row.title.trim() !== "");
  }, [secondTableDocs, checkboxes]);

  // ------------------ 11) Функція заголовка (ім’я, прізвище, дата) ------------------
  function addPageHeader(pdfInstance, fName, lName, dateStr) {
    // Лівий верхній кут
    pdfInstance.setFontSize(12);
    pdfInstance.text(`${fName} ${lName}`, 40, 30);

    // Правий верхній кут: довжина сторінки - ~100
    const pageWidth = pdfInstance.internal.pageSize.getWidth();
    pdfInstance.text(dateStr, pageWidth - 100, 30);
  }

  // ------------------ 12) Генерувати PDF ------------------
  const handleGeneratePDF = () => {
    const doc = new jsPDF("l", "pt", "a4");

    // Перша сторінка: локальна мова
    addPageHeader(doc, firstName, lastName, creationDate);
    doc.autoTable({
      columns: firstTableColumns,
      body: firstTableBody_userLang,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });
    doc.autoTable({
      columns: secondTableColumns,
      body: secondTableBody_userLang,
      startY: doc.lastAutoTable.finalY + 20,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });

    // Друга сторінка: німецька
    doc.addPage("l");
    addPageHeader(doc, firstName, lastName, creationDate);
    doc.autoTable({
      columns: firstTableColumns,
      body: firstTableBody_german,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });
    doc.autoTable({
      columns: secondTableColumns,
      body: secondTableBody_german,
      startY: doc.lastAutoTable.finalY + 20,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });

    doc.save(`documents_${pdfLanguage}_and_de.pdf`);
    onClose();
  };

  // ------------------ 13) Переглянути PDF ------------------
  const handleViewPDF = () => {
    const doc = new jsPDF("l", "pt", "a4");

    addPageHeader(doc, firstName, lastName, creationDate);
    doc.autoTable({
      columns: firstTableColumns,
      body: firstTableBody_userLang,
      startY: 50,
      theme: "grid",
      margin: { left: 40, right: 40 },
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });
    doc.autoTable({
      columns: secondTableColumns,
      body: secondTableBody_userLang,
      startY: doc.lastAutoTable.finalY + 20,
      theme: "grid",
      margin: { left: 40, right: 40 },
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });

    // Сторінка 2: німецька
    doc.addPage("l");
    addPageHeader(doc, firstName, lastName, creationDate);
    doc.autoTable({
      columns: firstTableColumns,
      body: firstTableBody_german,
      startY: 50,
      theme: "grid",
      margin: { left: 40, right: 40 },
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });
    doc.autoTable({
      columns: secondTableColumns,
      body: secondTableBody_german,
      startY: doc.lastAutoTable.finalY + 20,
      theme: "grid",
      margin: { left: 40, right: 40 },
      styles: { fontSize: 10, cellPadding: 3, lineWidth: 0.5 },
      headStyles: { fillColor: [220, 220, 220] },
    });

    doc.output("dataurlnewwindow");
    onClose();
  };

  // ------------------ Рендер модального вікна ------------------
  return (
    <div className={styles.pdfModal}>
      <div className={styles.modalContent}>
        {/* Кнопка закрити */}
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.modalTitle}>PDF Table</div>
        <div className={styles.buttons}>
    {/* Вибір мови без тексту */}
    <div className={styles.languageSelect}>
  <div className={styles.languageContainer}>
    <span>
      {availablePdfLangs.find(lang => lang.value === pdfLanguage)?.flag}
      {availablePdfLangs.find(lang => lang.value === pdfLanguage)?.shortLabel}
    </span>
    <select
      id="pdfLangSelect"
      value={pdfLanguage}
      onChange={(e) => setPdfLanguage(e.target.value)}
    >
      {availablePdfLangs.map((langOption) => (
        <option key={langOption.value} value={langOption.value}>
          {langOption.flag} {langOption.fullLabel}
        </option>
      ))}
    </select>
  </div>
</div>

    {/* Кнопка перегляду PDF */}
    <div className={styles.buttonContainer}>
    <button className={styles.roundButton} onClick={handleViewPDF}>
        <FaEye className={styles.viewIcon} />
    </button>
</div>

    {/* Кнопка завантаження PDF */}
    <div className={styles.buttonContainer}>
        <button className={styles.roundButton} onClick={handleGeneratePDF}>
            <FaDownload className={styles.pdfIcon} />
        </button>
    </div>
</div>
      </div>
    </div>
  );
};

PDFTable.propTypes = {
  onClose: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired, // Глобальна мова
  category: PropTypes.string.isRequired, // "EU" або "Non-EU"
  checkboxes: PropTypes.object.isRequired,
  documents: PropTypes.shape({
    mainEU: PropTypes.array,
    mainNonEU: PropTypes.array,
    second: PropTypes.array,
    optional: PropTypes.array,
  }).isRequired,
};

export default PDFTable;
