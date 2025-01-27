import React, { useMemo, useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import PropTypes from "prop-types";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";
import styles from "./PDFTable.module.scss";

import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { notNeededText } from "../../constants/translation/documents";

// ---------- 1) Словничок для колонок ----------
const tableHeaders = {
  en: {
    document: "Document",
    available: "Available",
    apostille: "Apostille",
    notarized: "Notarized",
    translation: "Translation",
    copies: "Copies",
    sent: "Sent",
  },
  de: {
    document: "Dokument",
    available: "Verfügbar",
    apostille: "Apostille",
    notarized: "Notariell",
    translation: "Übersetzung",
    copies: "Kopien",
    sent: "Abgeschickt",
  },
  uk: {
    document: "Документ",
    available: "Наявний",
    apostille: "Апостиль",
    notarized: "Нотаріально",
    translation: "Переклад",
    copies: "Копії",
    sent: "Відправлений",
  },
  ar: {
    document: "مستند",
    available: "متوفر",
    apostille: "أبوستيل",
    notarized: "موثق",
    translation: "ترجمة",
    copies: "نسخ",
    sent: "تم الإرسال",
  },
  ru: {
    document: "Документ",
    available: "В наличии",
    apostille: "Апостиль",
    notarized: "Нотариально",
    translation: "Перевод",
    copies: "Копии",
    sent: "Отправлено",
  },
  tr: {
    document: "Belge",
    available: "Mevcut",
    apostille: "Apostil",
    notarized: "Noter Onaylı",
    translation: "Tercüme",
    copies: "Kopyalar",
    sent: "Gönderildi",
  },
  fr: {
    document: "Document",
    available: "Disponible",
    apostille: "Apostille",
    notarized: "Notarié",
    translation: "Traduction",
    copies: "Copies",
    sent: "Envoyé",
  },
  es: {
    document: "Documento",
    available: "Disponible",
    apostille: "Apostilla",
    notarized: "Notariado",
    translation: "Traducción",
    copies: "Copias",
    sent: "Enviado",
  },
  pl: {
    document: "Dokument",
    available: "Dostępny",
    apostille: "Apostille",
    notarized: "Notarialnie",
    translation: "Tłumaczenie",
    copies: "Kopie",
    sent: "Wysłane",
  },
};


// ---------- 2) Функція завантаження локального шрифту ----------
const loadFont = async (url, fontName) => {
  const response = await fetch(url);
  const fontData = await response.arrayBuffer();
  const base64Font = btoa(
    new Uint8Array(fontData).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return { base64Font, fontName };
};

// ---------- Прапорці для мов (для UI) ----------
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

// ---------- Хелпер для рядків таблиці ----------
function makeRowObject(doc, checkboxes, language) {
  const docId = String(doc.id);
  const docState = checkboxes[docId] || {};

  const titleFromCategory = doc.category?.[language] || doc.category?.de || "";
  const titleFromName = doc.name?.[language] || doc.name?.de || "";
  const title = titleFromCategory || titleFromName || "";

  const notNeededValue =
    notNeededText[language] || notNeededText["de"] || "Not needed";

  // Логіка для ROV-17
  const isRov17 = docId === "17";

  function getFieldValue(fieldName) {
    if (isRov17 && !["is_exist", "sent"].includes(fieldName)) {
      return notNeededValue;
    }
    let docFieldVal = doc[fieldName];
    if (typeof docFieldVal === "object" && docFieldVal !== null) {
      docFieldVal = docFieldVal[language] || docFieldVal["de"] || "";
    }
    if (
      docFieldVal &&
      docFieldVal === (notNeededText[language] || notNeededText["de"])
    ) {
      return notNeededValue;
    }
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
  language: globalLanguage,
  category,
  checkboxes,
  documents,
}) => {
  // ---------------------------------------------------------------------
  // 1) Локальний стейт
  // ---------------------------------------------------------------------
  const [pdfLanguage, setPdfLanguage] = useState(globalLanguage);

  // userName, creationDate
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [creationDate, setCreationDate] = useState("");

  // ---------------------------------------------------------------------
  // 2) useEffect: завантажуємо ім'я та прізвище з Firebase
  // ---------------------------------------------------------------------
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const dataDocRef = doc(db, "users", user.uid, "userData", "data");
        const unsubData = onSnapshot(dataDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFirstName(data.firstName || "");
            setLastName(data.lastName || "");
          }
        });
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

  // ---------------------------------------------------------------------
  // 3) Колонки для ПЕРШОЇ (користувацької) сторінки
  // ---------------------------------------------------------------------
  const firstTableColumns = useMemo(() => {
    const th = tableHeaders[pdfLanguage] || tableHeaders.en; 
    // якщо обрана мова недоступна – fallback англійською

    if (category === "EU") {
      return [
        { header: th.document, dataKey: "title" },
        { header: th.available, dataKey: "available" },
        { header: th.notarized, dataKey: "notary" },
        { header: th.translation, dataKey: "translation" },
        { header: th.copies, dataKey: "ready_copies" },
        { header: th.sent, dataKey: "sent" },
      ];
    } else {
      return [
        { header: th.document, dataKey: "title" },
        { header: th.available, dataKey: "available" },
        { header: th.apostille, dataKey: "apostile" },
        { header: th.notarized, dataKey: "notary" },
        { header: th.translation, dataKey: "translation" },
        { header: th.copies, dataKey: "ready_copies" },
        { header: th.sent, dataKey: "sent" },
      ];
    }
  }, [category, pdfLanguage]);

  const secondTableColumns = useMemo(() => {
    const th = tableHeaders[pdfLanguage] || tableHeaders.en;
    return [
      { header: th.document, dataKey: "title" },
      { header: th.available, dataKey: "available" },
      { header: th.sent, dataKey: "sent" },
    ];
  }, [pdfLanguage]);

  // ---------------------------------------------------------------------
  // 4) Колонки для ДРУГОЇ (німецької) сторінки
  //    Завжди беремо переклад "de" для заголовків
  // ---------------------------------------------------------------------
  const firstTableColumnsGerman = useMemo(() => {
    const th = tableHeaders.de;
    if (category === "EU") {
      return [
        { header: th.document, dataKey: "title" },
        { header: th.available, dataKey: "available" },
        { header: th.notarized, dataKey: "notary" },
        { header: th.translation, dataKey: "translation" },
        { header: th.copies, dataKey: "ready_copies" },
        { header: th.sent, dataKey: "sent" },
      ];
    } else {
      return [
        { header: th.document, dataKey: "title" },
        { header: th.available, dataKey: "available" },
        { header: th.apostille, dataKey: "apostile" },
        { header: th.notarized, dataKey: "notary" },
        { header: th.translation, dataKey: "translation" },
        { header: th.copies, dataKey: "ready_copies" },
        { header: th.sent, dataKey: "sent" },
      ];
    }
  }, [category]);

  const secondTableColumnsGerman = useMemo(() => {
    const th = tableHeaders.de;
    return [
      { header: th.document, dataKey: "title" },
      { header: th.available, dataKey: "available" },
      { header: th.sent, dataKey: "sent" },
    ];
  }, []);

  // ---------------------------------------------------------------------
  // 5) Масив документів (mainDocs + optional і secondDocs)
  // ---------------------------------------------------------------------
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

  // ---------------------------------------------------------------------
  // 6) Тіла таблиць: перша сторінка = pdfLanguage, друга сторінка = "de"
  // ---------------------------------------------------------------------
  // -- Перша сторінка (користувацька)
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

  // -- Друга сторінка (німецька)
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

  // ---------------------------------------------------------------------
  // 7) Функція заголовка (header) на кожній сторінці
  // ---------------------------------------------------------------------
  function addPageHeader(pdfInstance, fName, lName, dateStr) {
    pdfInstance.setFontSize(12);
    pdfInstance.text(`${fName} ${lName}`, 40, 30);
    const pageWidth = pdfInstance.internal.pageSize.getWidth();
    pdfInstance.text(dateStr, pageWidth - 100, 30);
  }

  // ---------------------------------------------------------------------
  // 8) Футер-слоган (зробимо "GermanMove" більшим)
  // ---------------------------------------------------------------------
// 8) Футер-слоган (оновлений)
const didDrawPageFooter = (doc) => (data) => {
  const pageHeight = doc.internal.pageSize.getHeight();
  const sloganX = data.settings.margin.left;
  const sloganY = pageHeight - 20;

  // Робимо "GermanMove" 14pt жирним
  doc.setFontSize(16);
  doc.setFont("NotoSans", "bold");
  doc.text("GermanMove ", sloganX, sloganY); 
  // зверніть увагу: додаємо пробіл у кінці рядка
  
  // А решту тексту 10pt normal
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(10);

  const offset = doc.getTextWidth("GermanMove ");
  doc.text(
    "            makes your journey to German approbation easier",
    sloganX + offset,
    sloganY
  );
};

  // ---------------------------------------------------------------------
  // 9) Генеруємо PDF (ЗАВАНТАЖЕННЯ)
  // ---------------------------------------------------------------------
  const handleGeneratePDF = async () => {
    const doc = new jsPDF("l", "pt", "a4");

    // Завантажуємо шрифти
    const notoSans = await loadFont("/fonts/NotoSans-VariableFont.ttf", "NotoSans");
    const notoNaskhArabic = await loadFont("/fonts/NotoNaskhArabic.ttf", "NotoNaskhArabic");
    const openSans = await loadFont("/fonts/OpenSans-VariableFont.ttf", "OpenSans");

    // Додаємо у pdf
    doc.addFileToVFS("NotoSans.ttf", notoSans.base64Font);
    doc.addFont("NotoSans.ttf", "NotoSans", "normal");

    doc.addFileToVFS("NotoNaskhArabic.ttf", notoNaskhArabic.base64Font);
    doc.addFont("NotoNaskhArabic.ttf", "NotoNaskhArabic", "normal");

    doc.addFileToVFS("OpenSans.ttf", openSans.base64Font);
    doc.addFont("OpenSans.ttf", "OpenSans", "normal");

    // Визначаємо шрифт для першої сторінки (залежно від pdfLanguage)
    if (pdfLanguage === "ar") {
      doc.setFont("NotoNaskhArabic", "normal");
    } else {
      doc.setFont("NotoSans", "normal");
    }

    // ---------- Перша сторінка (користувацька мова) ----------
    addPageHeader(doc, firstName, lastName, creationDate);

    doc.autoTable({
      columns: firstTableColumns,
      body: firstTableBody_userLang,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: doc.getFont().fontName, // використовує поточний
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
        
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    doc.autoTable({
      columns: secondTableColumns,
      body: secondTableBody_userLang,
      startY: doc.lastAutoTable.finalY + 20,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: doc.getFont().fontName,
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    // ---------- Друга сторінка (німецька) ----------
    doc.addPage("l");
    // Тепер точно ставимо NotoSans
    doc.setFont("NotoSans", "normal");

    addPageHeader(doc, firstName, lastName, creationDate);

    doc.autoTable({
      columns: firstTableColumnsGerman,
      body: firstTableBody_german,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: "NotoSans",
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    doc.autoTable({
      columns: secondTableColumnsGerman,
      body: secondTableBody_german,
      startY: doc.lastAutoTable.finalY + 20,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: "NotoSans",
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    // Зберігаємо
    doc.save(`documents_${pdfLanguage}_and_de.pdf`);
    onClose();
  };

  // ---------------------------------------------------------------------
  // 10) Переглянути PDF (ВІДКРИТТЯ У НОВОМУ ВІКНІ)
  // ---------------------------------------------------------------------
  const handleViewPDF = async () => {
    const doc = new jsPDF("l", "pt", "a4");

    // Шрифти
    const notoSans = await loadFont("/fonts/NotoSans-VariableFont.ttf", "NotoSans");
    const notoNaskhArabic = await loadFont("/fonts/NotoNaskhArabic.ttf", "NotoNaskhArabic");
    const openSans = await loadFont("/fonts/OpenSans-VariableFont.ttf", "OpenSans");

    doc.addFileToVFS("NotoSans.ttf", notoSans.base64Font);
    doc.addFont("NotoSans.ttf", "NotoSans", "normal");

    doc.addFileToVFS("NotoNaskhArabic.ttf", notoNaskhArabic.base64Font);
    doc.addFont("NotoNaskhArabic.ttf", "NotoNaskhArabic", "normal");

    doc.addFileToVFS("OpenSans.ttf", openSans.base64Font);
    doc.addFont("OpenSans.ttf", "OpenSans", "normal");

    // Встановлюємо шрифт залежно від pdfLanguage
    if (pdfLanguage === "ar") {
      doc.setFont("NotoNaskhArabic", "normal");
    } else {
      doc.setFont("NotoSans", "normal");
    }

    // Перша сторінка
    addPageHeader(doc, firstName, lastName, creationDate);

    doc.autoTable({
      columns: firstTableColumns,
      body: firstTableBody_userLang,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: doc.getFont().fontName,
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    doc.autoTable({
      columns: secondTableColumns,
      body: secondTableBody_userLang,
      startY: doc.lastAutoTable.finalY + 20,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: doc.getFont().fontName,
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    // Друга сторінка (німецька)
    doc.addPage("l");
    doc.setFont("NotoSans", "normal");

    addPageHeader(doc, firstName, lastName, creationDate);

    doc.autoTable({
      columns: firstTableColumnsGerman,
      body: firstTableBody_german,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: "NotoSans",
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    doc.autoTable({
      columns: secondTableColumnsGerman,
      body: secondTableBody_german,
      startY: doc.lastAutoTable.finalY + 20,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: {
        font: "NotoSans",
        fontSize: 10,
        cellPadding: 3,
        lineWidth: 0.5,
      },
      headStyles: { fillColor: [220, 220, 220] },
      didDrawPage: didDrawPageFooter(doc),
    });

    // Відкрити у новому вікні
    const pdfBlob = doc.output("bloburl");
window.location.href = pdfBlob;
    onClose();
  };

  // ---------------------------------------------------------------------
  // Рендер компонента (UI)
  // ---------------------------------------------------------------------
  return (
    <div className={styles.pdfModal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.modalTitle}>PDF Table</div>

        <div className={styles.buttons}>
          {/* Вибір мови */}
          <div className={styles.languageSelect}>
            <div className={styles.languageContainer}>
              <span>
                {languageFlags[pdfLanguage]} {pdfLanguage.toUpperCase()}
              </span>
              <select
                id="pdfLangSelect"
                value={pdfLanguage}
                onChange={(e) => setPdfLanguage(e.target.value)}
              >
                {Object.keys(languageFlags).map((langKey) => (
                  <option key={langKey} value={langKey}>
                    {languageFlags[langKey]} {langKey.toUpperCase()}
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
  language: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  checkboxes: PropTypes.object.isRequired,
  documents: PropTypes.shape({
    mainEU: PropTypes.array,
    mainNonEU: PropTypes.array,
    second: PropTypes.array,
    optional: PropTypes.array,
  }).isRequired,
};

export default PDFTable;