// src/pages/ResumePage/pdfresume.js

import React from "react";
import Modal from "react-modal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { FaEye, FaDownload, FaTimes } from "react-icons/fa";
import styles from "./pdfresume.module.css";

Modal.setAppElement("#root");

/* 
  Функція отримання даних резюме (наприклад, 
  можна брати з localStorage, але залишаємось із firebase)
*/
const getUserResume = async () => {
  // Можна брати тільки з localStorage, ось так:
  /*
  const localDataStr = localStorage.getItem("resumeData");
  if (localDataStr) {
    return JSON.parse(localDataStr);
  } else {
    alert("No local resume data found.");
    return null;
  }
  */
  // Або залишити варіант з Firebase, 
  // якщо хочемо щоразу підтягувати з сервера.
  const user = auth.currentUser;
  if (!user) {
    console.error("User is not logged in.");
    return null;
  }
  try {
    const profileRef = doc(db, "users", user.uid, "resume", "profile");
    const profileSnapshot = await getDoc(profileRef);
    const profileData = profileSnapshot.exists() ? profileSnapshot.data() : null;
    if (!profileData) {
      console.warn("No resume data found.");
      return null;
    }
    return {
      header: profileData.header || {},
      aktuell: profileData.aktuell || [],
      berufserfahrungen: profileData.berufserfahrungen || [],
      ausbildung: profileData.ausbildung || [],
      languages: profileData.languageSkills || [],
      technicalSkills: profileData.technicalSkills || [],
    };
  } catch (error) {
    console.error("Error fetching resume data:", error);
    return null;
  }
};

/* Футер на кожній сторінці */
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

/* Допоміжна функція для невеликих таблиць */
function addTable(title, data, columns, doc, startY) {
  if (data && data.length > 0) {
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
  return startY;
}

/* Основна функція створення PDF */
const createPDFDocument = (resume) => {
  const doc = new jsPDF();

  let yPosition = 10;

  // "Persönliche Daten"
  doc.setFontSize(13);
  doc.setFont(undefined, "bold");
  doc.text("Persönliche Daten", 10, yPosition);
  yPosition += 10;

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");

  const headerOrder = [
    "vorname",
    "nachname",
    "geburtsdatum",
    "nationalitaet",
    "adresse",
    "email",
    "handynummer",
    "fachrichtung",
  ];
  headerOrder.forEach((key) => {
    if (resume.header[key]) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      doc.text(`${label}: ${resume.header[key]}`, 10, yPosition);
      yPosition += 5;
    }
  });
  yPosition += 5;

  // "Aktuell"
  const aktuellData = resume.aktuell
    .filter((e) => e.date && e.description)
    .map((e) => [e.date, e.description]);
  if (aktuellData.length) {
    yPosition = addTable("Aktuell", aktuellData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // "Berufserfahrungen"
  const berufData = resume.berufserfahrungen
    .filter((e) => e.date && e.description && e.place)
    .map((e) => [e.date, `${e.description}, ${e.place}`]);
  if (berufData.length) {
    yPosition = addTable(
      "Berufserfahrungen",
      berufData,
      ["Datum", "Beschreibung"],
      doc,
      yPosition
    );
  }

  // "Ausbildung"
  const ausbildungData = resume.ausbildung
    .filter((e) => e.date && e.description && e.place)
    .map((e) => [e.date, `${e.description}, ${e.place}`]);
  if (ausbildungData.length) {
    yPosition = addTable(
      "Ausbildung",
      ausbildungData,
      ["Datum", "Beschreibung"],
      doc,
      yPosition
    );
  }

  // "Sprachen" (50/50)
  const languagesData = resume.languages
    .filter((e) => e.language && e.level)
    .map((e) => [e.language, e.level]);
  if (languagesData.length) {
    doc.setFontSize(13);
    doc.setFont(undefined, "bold");
    doc.text("Sprachen", 10, yPosition);

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");

    doc.autoTable({
      startY: yPosition + 10,
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
    yPosition = doc.previousAutoTable.finalY + 10;
  }

  // "Technische Fähigkeiten"
  const techData = resume.technicalSkills
    .filter((e) => e.skill && e.technicalLevel)
    .map((e) => [e.skill, e.technicalLevel]);
  if (techData.length) {
    doc.setFontSize(13);
    doc.setFont(undefined, "bold");
    doc.text("Technische Fähigkeiten", 10, yPosition);

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");

    doc.autoTable({
      startY: yPosition + 10,
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
    yPosition = doc.previousAutoTable.finalY + 10;
  }

  return doc;
};

/* Функція завантаження PDF */
export const downloadResumePDF = async () => {
  // За бажанням можна брати резюме лише з localStorage:
  // const localDataStr = localStorage.getItem("resumeData");
  // if (!localDataStr) {
  //   alert("No local data found.");
  //   return;
  // }
  // const resume = JSON.parse(localDataStr);

  // Але за замовчуванням залишаємо поточний механізм (Firebase)
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    doc.save("lebenslauf.pdf");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};

/* Функція перегляду PDF */
export const previewResumePDF = async () => {
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    const pdfBlobUrl = doc.output("bloburl");
    window.open(pdfBlobUrl, "_blank");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};

/* Компонент модального вікна */
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
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className={styles.modalTitle}>PDF Export</h2>

        <div className={styles.buttonsArea}>
          {/* Перегляд */}
          <div className={styles.buttonContainer}>
            <button className={styles.roundButton} onClick={previewResumePDF}>
              <FaEye className={styles.viewIcon} />
            </button>
          </div>

          {/* Збереження */}
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