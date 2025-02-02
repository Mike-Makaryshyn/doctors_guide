// src/pages/ResumePage/pdfresume.js

import React from "react";
import Modal from "react-modal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { FaEye, FaDownload, FaTimes } from "react-icons/fa";

// Якщо у тебе є локальні шрифти – можна додати
// import roboto from "./Roboto-Regular.ttf";
// import robotoBold from "./Roboto-Bold.ttf";

import styles from "./pdfresume.module.css"; // Підключення наших стилів

Modal.setAppElement("#root");

// Функція отримання даних резюме з Firestore
const getUserResume = async () => {
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
      console.warn("No resume data found in Firestore.");
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

// Допоміжна функція для додавання (однієї) таблиці
const addTable = (title, data, columns, doc, startY) => {
  if (data && data.length > 0) {
    // Приклад «шапки»
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text(title, 10, startY);
    doc.setFont(undefined, "normal");

    doc.autoTable({
      startY: startY + 10,
      head: [columns],
      body: data,
      theme: "grid",
      pageBreak: "auto",
      styles: {
        fontSize: 10,
        lineHeight: 1.2,
      },
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
    });
    return doc.previousAutoTable.finalY + 10;
  }
  return startY;
};

// Створюємо сам PDF
const createPDFDocument = (resume) => {
  const doc = new jsPDF();

  // (Якщо хочеш додати шрифти – можна раскоментувати)
//   doc.addFont(roboto, "Roboto", "normal");
//   doc.addFont(robotoBold, "Roboto", "bold");
//   doc.setFont("Roboto");

  let yPosition = 10;

  // «Persönliche Daten»
  doc.setFontSize(14);
  doc.setFont(undefined, "bold");
  doc.text("Persönliche Daten", 10, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont(undefined, "normal");

  // Приклад порядку відображення
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
      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      doc.text(`${formattedKey}: ${resume.header[key]}`, 10, yPosition);
      yPosition += 7;
    }
  });
  yPosition += 10;

  // Таблиця "Aktuell"
  const aktuellData = resume.aktuell
    .filter((entry) => entry.date && entry.description)
    .map((entry) => [entry.date, entry.description]);
  if (aktuellData.length) {
    yPosition = addTable(
      "Aktuell",
      aktuellData,
      ["Datum", "Beschreibung"],
      doc,
      yPosition
    );
  }

  // Таблиця "Berufserfahrungen"
  const berufData = resume.berufserfahrungen
    .filter((entry) => entry.date && entry.description && entry.place)
    .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);
  if (berufData.length) {
    yPosition = addTable(
      "Berufserfahrungen",
      berufData,
      ["Datum", "Beschreibung"],
      doc,
      yPosition
    );
  }

  // Таблиця "Ausbildung"
  const ausbildungData = resume.ausbildung
    .filter((entry) => entry.date && entry.description && entry.place)
    .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);
  if (ausbildungData.length) {
    yPosition = addTable(
      "Ausbildung",
      ausbildungData,
      ["Datum", "Beschreibung"],
      doc,
      yPosition
    );
  }

  // Таблиця "Sprachen"
  const languagesData = resume.languages
    .filter((entry) => entry.language && entry.level)
    .map((entry) => [entry.language, entry.level]);
  if (languagesData.length) {
    yPosition = addTable(
      "Sprachen",
      languagesData,
      ["Sprache", "Niveau"],
      doc,
      yPosition
    );
  }

  // Таблиця "Technische Fähigkeiten"
  const techData = resume.technicalSkills
    .filter((entry) => entry.skill && entry.technicalLevel)
    .map((entry) => [entry.skill, entry.technicalLevel]);
  if (techData.length) {
    yPosition = addTable(
      "Technische Fähigkeiten",
      techData,
      ["Fähigkeit", "Niveau"],
      doc,
      yPosition
    );
  }

  return doc;
};

// Функція завантаження PDF
const downloadResumePDF = async () => {
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    doc.save("lebenslauf.pdf");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};

// Функція перегляду
const previewResumePDF = async () => {
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    const pdfBlobUrl = doc.output("bloburl");
    window.open(pdfBlobUrl, "_blank");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};

// Модальне вікно
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
          {/* Кнопка перегляду */}
          <div className={styles.buttonContainer}>
            <button className={styles.roundButton} onClick={previewResumePDF}>
              <FaEye className={styles.viewIcon} />
            </button>
          </div>

          {/* Кнопка скачування */}
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

export { downloadResumePDF, previewResumePDF };
export default PDFResumeModal;