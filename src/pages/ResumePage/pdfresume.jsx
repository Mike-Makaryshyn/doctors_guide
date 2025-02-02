import React from "react";
import Modal from "react-modal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { FaEye, FaDownload, FaTimes } from "react-icons/fa";
import roboto from "./Roboto-Regular.ttf";
import robotoBold from "./Roboto-Bold.ttf";
import styles from "./pdfresume.module.css";

// Встановлюємо app element для react-modal
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

// Допоміжна функція для додавання таблиць у PDF
const addTable = (title, data, columns, doc, startY) => {
  if (data && data.length > 0) {
    doc.setFont("Roboto", "bold");
    doc.text(title, 10, startY);
    doc.setFont("Roboto", "normal");

    doc.autoTable({
      startY: startY + 10,
      head: [columns],
      body: data,
      theme: "grid",
      pageBreak: "auto",
      styles: { font: "Roboto", fontSize: 10, lineHeight: 1.2 },
      headStyles: { 
        fillColor: [240, 240, 240],
        fontStyle: "bold",
        lineWidth: 0.2,
        lineColor: [200, 200, 200],
        textColor: [0, 0, 0]
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

// Функція створення PDF документу на основі даних резюме
const createPDFDocument = (resume) => {
  const doc = new jsPDF();
  doc.addFont(roboto, "Roboto", "normal");
  doc.addFont(robotoBold, "Roboto", "bold");
  doc.setFont("Roboto");

  let yPosition = 10;

  // Розділ "Persönliche Daten"
  doc.setFontSize(14);
  doc.setFont("Roboto", "bold");
  doc.text("Persönliche Daten", 10, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont("Roboto", "normal");
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
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => [entry.date, entry.description]);
  if (aktuellData.length > 0) {
    yPosition = addTable("Aktuell", aktuellData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // Таблиця "Berufserfahrungen"
  const berufData = resume.berufserfahrungen
    .filter((entry) => entry.date && entry.description && entry.place)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);
  if (berufData.length > 0) {
    yPosition = addTable("Berufserfahrungen", berufData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // Таблиця "Ausbildung"
  const ausbildungData = resume.ausbildung
    .filter((entry) => entry.date && entry.description && entry.place)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);
  if (ausbildungData.length > 0) {
    yPosition = addTable("Ausbildung", ausbildungData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // Таблиця "Sprachen"
  const languagesData = resume.languages
    .filter((entry) => entry.language && entry.level)
    .map((entry) => [entry.language, entry.level]);
  if (languagesData.length > 0) {
    yPosition = addTable("Sprachen", languagesData, ["Sprache", "Niveau"], doc, yPosition);
  }

  // Таблиця "Technische Fähigkeiten"
  const techData = resume.technicalSkills
    .filter((entry) => entry.skill && entry.technicalLevel)
    .map((entry) => [entry.skill, entry.technicalLevel]);
  if (techData.length > 0) {
    yPosition = addTable("Technische Fähigkeiten", techData, ["Fähigkeit", "Niveau"], doc, yPosition);
  }

  return doc;
};

// Функція для завантаження PDF (збереження файлу)
const downloadResumePDF = async () => {
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    doc.save("lebenslauf.pdf");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};


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

// Компонент модального вікна для PDF резюме
const PDFResumeModal = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      contentLabel="PDF Resume"
      className={styles.pdfModal}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>PDF Resume</h2>
        <div className={styles.pdfButtonContainer}>
          <button className={styles.pdfButton} onClick={previewResumePDF}>
            <FaEye className={styles.viewIcon} />
            Preview PDF
          </button>
          <button className={styles.pdfButton} onClick={downloadResumePDF}>
            <FaDownload className={styles.pdfIcon} />
            Download PDF
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { downloadResumePDF, previewResumePDF };
export default PDFResumeModal;