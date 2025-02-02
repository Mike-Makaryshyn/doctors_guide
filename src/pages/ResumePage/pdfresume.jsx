// src/pages/ResumePage/pdfresume.js

import React from "react";
import Modal from "react-modal";
import jsPDF from "jspdf";
import "jspdf-autotable";
// Тут Firebase НЕ обов'язково потрібен, якщо беремо з LocalStorage
// але лишаємо для декорацій:
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

import { FaEye, FaDownload, FaTimes } from "react-icons/fa";
import styles from "./pdfresume.module.css";

Modal.setAppElement("#root");

// =====================
// (A) ФУНКЦІЯ ОТРИМАННЯ ДАНИХ ДЛЯ PDF
// =====================
//
// ВАРІАНТ 1: Використовуємо LocalStorage
//
async function getResumeDataFromLocal() {
  const dataStr = localStorage.getItem("resumeData");
  if (!dataStr) {
    console.warn("No resumeData in localStorage!");
    return null;
  }
  return JSON.parse(dataStr);
}

// =====================
// Допоміжна ф-я створення футеру
// =====================
function drawFooter(doc, data) {
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const leftMargin = data.settings.margin.left;
  const rightMargin = data.settings.margin.right;

  doc.setFontSize(8);

  const dateStr = new Date().toLocaleDateString("de-DE");
  doc.text(dateStr, leftMargin, pageHeight - 10);

  const textWidth = doc.getTextWidth("Unterschrift");
  doc.text("Unterschrift", pageWidth - rightMargin - textWidth, pageHeight - 10);

  doc.text(
    "GermanMove makes your journey to German approbation easier",
    leftMargin,
    pageHeight - 2
  );
}

// =====================
// Допоміжна ф-я для таблиць
// =====================
function addTable(title, data, columns, doc, startY) {
  if (!data || data.length === 0) return startY;

  doc.setFontSize(13);
  doc.setFont(undefined, "bold");
  doc.text(title, 10, startY);

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");

  doc.autoTable({
    startY: startY + 10,
    head: [columns],
    body: data,
    theme: "grid",
    styles: { fontSize: 9, lineHeight: 1.2 },
    headStyles: {
      fillColor: [240, 240, 240],
      fontStyle: "bold",
      lineWidth: 0.2,
      lineColor: [200, 200, 200],
      textColor: [0, 0, 0],
    },
    columnStyles: {
      0: { cellWidth: 35, halign: "center" },
      1: { cellWidth: "auto", halign: "left" },
    },
    margin: { left: 10, right: 10 },
    bodyStyles: { cellPadding: 2 },
    didDrawPage: (data) => drawFooter(doc, data),
  });

  return doc.previousAutoTable.finalY + 10;
}

// =====================
// (B) СТВОРЕННЯ PDF
// =====================
function createPDFDocument(resume) {
  const doc = new jsPDF();

  let yPos = 10;

  // "Persönliche Daten"
  doc.setFontSize(13);
  doc.setFont(undefined, "bold");
  doc.text("Persönliche Daten", 10, yPos);
  yPos += 10;

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");

  const headerFields = [
    "vorname",
    "nachname",
    "geburtsdatum",
    "nationalitaet",
    "adresse",
    "email",
    "handynummer",
    "fachrichtung",
  ];
  headerFields.forEach((key) => {
    if (resume.header[key]) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      doc.text(`${label}: ${resume.header[key]}`, 10, yPos);
      yPos += 5;
    }
  });
  yPos += 5;

  // "Aktuell"
  const aktuellData = (resume.aktuell || [])
    .filter((e) => e.date && e.description)
    .map((e) => [e.date, e.description]);
  yPos = addTable("Aktuell", aktuellData, ["Datum", "Beschreibung"], doc, yPos);

  // "Berufserfahrungen"
  const berufData = (resume.berufserfahrungen || [])
    .filter((e) => e.date && e.description && e.place)
    .map((e) => [e.date, `${e.description}, ${e.place}`]);
  yPos = addTable("Berufserfahrungen", berufData, ["Datum", "Beschreibung"], doc, yPos);

  // "Ausbildung"
  const ausbildungData = (resume.ausbildung || [])
    .filter((e) => e.date && e.description && e.place)
    .map((e) => [e.date, `${e.description}, ${e.place}`]);
  yPos = addTable("Ausbildung", ausbildungData, ["Datum", "Beschreibung"], doc, yPos);

  // "Sprachen" (50/50)
  const languagesData = (resume.languages || [])
    .filter((e) => e.language && e.level)
    .map((e) => [e.language, e.level]);
  if (languagesData.length > 0) {
    doc.setFontSize(13);
    doc.setFont(undefined, "bold");
    doc.text("Sprachen", 10, yPos);
    yPos += 10;

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");

    doc.autoTable({
      startY: yPos,
      head: [["Sprache", "Niveau"]],
      body: languagesData,
      theme: "grid",
      styles: { fontSize: 9, lineHeight: 1.2 },
      headStyles: {
        fillColor: [240, 240, 240],
        fontStyle: "bold",
        lineWidth: 0.2,
        lineColor: [200, 200, 200],
        textColor: [0, 0, 0],
      },
      columnStyles: {
        0: { cellWidth: 95 },
        1: { cellWidth: 95 },
      },
      margin: { left: 10, right: 10 },
      bodyStyles: { cellPadding: 2 },
      didDrawPage: (data) => drawFooter(doc, data),
    });
    yPos = doc.previousAutoTable.finalY + 10;
  }

  // "Technische Fähigkeiten" (110/80)
  const techData = (resume.technicalSkills || [])
    .filter((e) => e.skill && e.technicalLevel)
    .map((e) => [e.skill, e.technicalLevel]);
  if (techData.length > 0) {
    doc.setFontSize(13);
    doc.setFont(undefined, "bold");
    doc.text("Technische Fähigkeiten", 10, yPos);
    yPos += 10;

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");

    doc.autoTable({
      startY: yPos,
      head: [["Fähigkeit", "Niveau"]],
      body: techData,
      theme: "grid",
      styles: { fontSize: 9, lineHeight: 1.2 },
      headStyles: {
        fillColor: [240, 240, 240],
        fontStyle: "bold",
        lineWidth: 0.2,
        lineColor: [200, 200, 200],
        textColor: [0, 0, 0],
      },
      columnStyles: {
        0: { cellWidth: 110 },
        1: { cellWidth: 80 },
      },
      margin: { left: 10, right: 10 },
      bodyStyles: { cellPadding: 2 },
      didDrawPage: (data) => drawFooter(doc, data),
    });
    yPos = doc.previousAutoTable.finalY + 10;
  }

  return doc;
}

// =====================
// (C) EXPORT ФУНКЦІЙ
// =====================
export const downloadResumePDF = async () => {
  // Беремо дані лише з Local Storage
  const localDataStr = localStorage.getItem("resumeData");
  if (!localDataStr) {
    alert("No local resume data found.");
    return;
  }
  const resume = JSON.parse(localDataStr);

  const doc = createPDFDocument(resume);
  doc.save("lebenslauf.pdf");
};

export const previewResumePDF = async () => {
  const localDataStr = localStorage.getItem("resumeData");
  if (!localDataStr) {
    alert("No local resume data found.");
    return;
  }
  const resume = JSON.parse(localDataStr);

  const doc = createPDFDocument(resume);
  const pdfBlobUrl = doc.output("bloburl");
  window.open(pdfBlobUrl, "_blank");
};

// =====================
// (D) Модальне вікно PDF
// =====================
const PDFResumeModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="PDF Modal"
      className={styles.pdfModal}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.modalContent}>
        {/* Кнопка закриття */}
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className={styles.modalTitle}>PDF Export</h2>

        <div className={styles.buttonsArea}>
          {/* Кнопка Preview */}
          <div className={styles.buttonContainer}>
            <button className={styles.roundButton} onClick={previewResumePDF}>
              <FaEye className={styles.viewIcon} />
            </button>
          </div>

          {/* Кнопка Download */}
          <div className={styles.buttonContainer}>
            <button className={styles.roundButton} onClick={downloadResumePDF}>
              <FaDownload className={styles.pdfIcon} />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PDFResumeModal;